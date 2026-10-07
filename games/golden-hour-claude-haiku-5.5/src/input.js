// Keyboard and mouse state. Keys are tracked by KeyboardEvent.code so bindings survive layout changes.
// Mouse buttons are tracked as 'Mouse0' (left) and 'Mouse2' (right) in the same sets.

const held = new Set();
const pressedThisFrame = new Set();

export const input = {
  locked: false,
  lookDX: 0,
  lookDY: 0,
  onLockChange: null,

  attach(canvas) {
    window.addEventListener('keydown', (e) => {
      if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (!e.repeat) {
        held.add(e.code);
        pressedThisFrame.add(e.code);
      }
    });
    window.addEventListener('keyup', (e) => held.delete(e.code));
    window.addEventListener('blur', () => held.clear());

    canvas.addEventListener('mousedown', (e) => {
      const code = 'Mouse' + e.button;
      held.add(code);
      pressedThisFrame.add(code);
    });
    window.addEventListener('mouseup', (e) => held.delete('Mouse' + e.button));
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.lookDX += e.movementX;
      this.lookDY += e.movementY;
    });

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      if (!this.locked) held.clear();
      if (this.onLockChange) this.onLockChange(this.locked);
    });
  },

  requestLock(canvas) {
    try {
      const p = canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch (_) {
      /* pointer lock unavailable; the game still runs */
    }
  },

  isDown(code) {
    return held.has(code);
  },

  wasPressed(code) {
    return pressedThisFrame.has(code);
  },

  consumeLook() {
    const x = this.lookDX;
    const y = this.lookDY;
    this.lookDX = 0;
    this.lookDY = 0;
    return [x, y];
  },

  endFrame() {
    pressedThisFrame.clear();
  },
};
