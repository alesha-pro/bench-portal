import { buildScene } from './scene.js';
import { clamp } from './world.js';
const icons = {
  muted: '<path d="M11 5 6 9H3v6h3l5 4zM16 9l5 6m0-6-5 6"/>',
  audio: '<path d="M11 5 6 9H3v6h3l5 4zM15 8q4 4 0 8m3-11q7 7 0 14"/>',
  expand: '<path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/>',
  pause: '<path d="M7 5h3v14H7zm7 0h3v14h-3z" fill="currentColor" stroke="none"/>',
  play: '<path d="m6 3 14 9-14 9z" fill="currentColor" stroke="none"/>',
  speed:
    '<path d="M3 17a9.5 9.5 0 1 1 18 0M12 14l5-6M5 12l1 1m6-8v2m7 5-1 1"/><circle cx="12" cy="14" r="1.3"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  split: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 4v16m7-16v16"/>',
  grip: '<path d="m8.5 8-4 4 4 4m7-8 4 4-4 4"/>',
  panel: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 15h20"/>',
};
function icon(el, id) {
  el.dataset.icon = id;
  el.innerHTML =
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    icons[id] +
    '</svg>';
}
document.querySelectorAll('[data-icon]').forEach((el) => icon(el, el.dataset.icon));
const byId = (id) => document.getElementById(id),
  stage = byId('stage'),
  canvas = byId('scene'),
  timeline = byId('timeline');
const params = new URLSearchParams(location.search),
  film = params.has('film');
const state = {
  bounds: [0, 0.25, 0.5, 0.75, 1],
  mode: -1,
  hud: !film,
  film,
  width: 0,
  height: 0,
  dpr: 1,
};
if (film) document.body.classList.add('film', 'clean');
let playing = true,
  automatic = true,
  manual = params.has('capture'),
  seconds = 0,
  speed = 1,
  previous = performance.now(),
  scrubbing = false,
  sound = false;
let audioContext,
  audioBuffer,
  voice,
  gainNode,
  audioRevision = 0;
function stopVoice() {
  if (voice) {
    const now = audioContext.currentTime;
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setTargetAtTime(0, now, 0.006);
    voice.stop(now + 0.032);
    voice = null;
  }
}
const scene = await buildScene(canvas);
await Promise.all([
  document.fonts.load('600 15px "DM Sans"'),
  document.fonts.load('10px "IBM Plex Mono"'),
]);
function paint() {
  scene.draw(seconds % 30, state);
  byId('elapsed').value = '00:' + String(Math.floor(seconds)).padStart(2, '0');
  timeline.value = seconds;
  timeline.style.setProperty('--progress', (seconds / 30) * 100 + '%');
}
function resize() {
  const r = stage.getBoundingClientRect();
  state.width = r.width;
  state.height = r.height;
  state.dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(r.width * state.dpr);
  canvas.height = Math.round(r.height * state.dpr);
  paint();
}
async function syncAudio() {
  const revision = ++audioRevision;
  stopVoice();
  if (!sound || !playing || manual || scrubbing) return;
  try {
    audioContext ??= new AudioContext();
    await audioContext.resume();
    audioBuffer ??= fetch('./assets/score.ogg')
      .then((r) => {
        if (!r.ok) throw new Error('Score is unavailable');
        return r.arrayBuffer();
      })
      .then((data) => audioContext.decodeAudioData(data));
    const buffer = await audioBuffer;
    if (revision !== audioRevision) return;
    voice = audioContext.createBufferSource();
    voice.buffer = buffer;
    voice.loop = automatic;
    voice.loopStart = 0;
    voice.loopEnd = 30;
    voice.playbackRate.value = speed;
    gainNode = audioContext.createGain();
    gainNode.gain.value = 0;
    gainNode.gain.setTargetAtTime(1, audioContext.currentTime, 0.008);
    voice.connect(gainNode).connect(audioContext.destination);
    voice.start(0, seconds % 30);
  } catch (error) {
    if (revision === audioRevision) {
      sound = false;
      audioBuffer = null;
      showSound();
    }
    throw error;
  }
}
function showSound() {
  const b = byId('sound');
  icon(b.querySelector('i'), sound ? 'audio' : 'muted');
  b.querySelector('span').textContent = sound ? 'Sound on' : 'Sound off';
  b.setAttribute('aria-pressed', sound);
}
function togglePlay() {
  playing = !playing;
  manual = false;
  previous = performance.now();
  if (playing && seconds >= 30) seconds = 0;
  showPlay();
  syncAudio();
  paint();
}
function showPlay() {
  const b = byId('play');
  b.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  icon(b.querySelector('i'), playing ? 'pause' : 'play');
}
function hideHud() {
  state.hud = !state.hud;
  document.body.classList.toggle('clean', !state.hud);
  resize();
}
function select(mode) {
  state.mode = mode;
  document.body.classList.toggle('solo', mode >= 0);
  for (const b of document.querySelectorAll('[data-mode]'))
    b.setAttribute('aria-pressed', Number(b.dataset.mode) === mode);
  byId('dividers').hidden = mode !== -1;
  resize();
}
for (let i = 1; i <= 3; i++) {
  const handle = document.createElement('button');
  handle.className = 'divider';
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-orientation', 'horizontal');
  handle.setAttribute('aria-label', 'Divider ' + i);
  handle.title = 'Drag divider · double-click to reset';
  const grip = document.createElement('span');
  grip.className = 'grip';
  grip.setAttribute('aria-hidden', 'true');
  const mark = document.createElement('i');
  icon(mark, 'grip');
  grip.append(mark);
  handle.append(grip);
  byId('dividers').append(handle);
  function update() {
    document.querySelectorAll('.divider').forEach((el, j) => {
      const k = j + 1;
      el.style.left = state.bounds[k] * 100 + '%';
      el.setAttribute('aria-valuenow', Math.round(state.bounds[k] * 100));
      el.setAttribute('aria-valuemin', Math.ceil((state.bounds[k - 1] + 0.049) * 100));
      el.setAttribute('aria-valuemax', Math.floor((state.bounds[k + 1] - 0.049) * 100));
    });
  }
  function move(u) {
    state.bounds[i] = clamp(u, state.bounds[i - 1] + 0.05, state.bounds[i + 1] - 0.05);
    update();
    paint();
  }
  const drag = (e) => {
    const r = stage.getBoundingClientRect();
    move((e.clientX - r.left) / r.width);
  };
  handle.addEventListener('pointerdown', (e) => {
    handle.setPointerCapture(e.pointerId);
    drag(e);
  });
  handle.addEventListener('pointermove', (e) => {
    if (handle.hasPointerCapture(e.pointerId)) drag(e);
  });
  handle.addEventListener('dblclick', () => {
    state.bounds = [0, 0.25, 0.5, 0.75, 1];
    update();
    paint();
  });
  handle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      move(state.bounds[i] + (e.key === 'ArrowLeft' ? -1 : 1) * (e.shiftKey ? 0.05 : 0.01));
    }
  });
  update();
}
byId('play').addEventListener('click', togglePlay);
byId('auto').addEventListener('click', () => {
  automatic = !automatic;
  playing = automatic;
  manual = false;
  previous = performance.now();
  if (playing && seconds >= 30) seconds = 0;
  byId('auto').setAttribute('aria-checked', automatic);
  showPlay();
  syncAudio();
  paint();
});
byId('speed').addEventListener('change', (e) => {
  speed = Number(e.target.value);
  syncAudio();
});
byId('sound').addEventListener('click', () => {
  sound = !sound;
  showSound();
  if (sound) manual = false;
  previous = performance.now();
  syncAudio();
});
byId('expand').addEventListener('click', async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
});
document.addEventListener('fullscreenchange', () => {
  byId('expand').querySelector('span').textContent = document.fullscreenElement
    ? 'Exit fullscreen'
    : 'Fullscreen';
});
byId('restore').addEventListener('click', hideHud);
byId('back').addEventListener('click', () => select(-1));
byId('modes').addEventListener('click', (e) => {
  const b = e.target.closest('[data-mode]');
  if (b) select(Number(b.dataset.mode));
});
timeline.addEventListener('pointerdown', () => {
  scrubbing = true;
  syncAudio();
});
function releaseScrub() {
  if (scrubbing) {
    scrubbing = false;
    previous = performance.now();
    syncAudio();
  }
}
window.addEventListener('pointerup', releaseScrub);
window.addEventListener('pointercancel', releaseScrub);
timeline.addEventListener('input', () => {
  seconds = Number(timeline.value);
  previous = performance.now();
  paint();
  if (!scrubbing) syncAudio();
});
document.addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey || e.repeat) return;
  if (/^[1-4]$/.test(e.key)) {
    const m = Number(e.key) - 1;
    select(state.mode === m ? -1 : m);
  } else if (e.key === '0' || e.key === 'Escape') {
    select(-1);
    if (!state.hud) hideHud();
  } else if (e.key.toLowerCase() === 'h') hideHud();
  else if (e.code === 'Space' && !['INPUT', 'SELECT', 'BUTTON'].includes(e.target.tagName)) {
    e.preventDefault();
    togglePlay();
  }
});
new ResizeObserver(resize).observe(stage);
resize();
function tick(now) {
  if (playing && !manual && !scrubbing) {
    seconds += Math.max(0, now - previous) * 0.001 * speed;
    if (seconds >= 30) {
      if (automatic) seconds %= 30;
      else {
        seconds = 30;
        playing = false;
        showPlay();
        syncAudio();
      }
    }
    paint();
  }
  previous = now;
  requestAnimationFrame(tick);
}
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  if (!Number.isFinite(t)) throw new TypeError('Time must be finite');
  manual = true;
  syncAudio();
  seconds = ((t % 30) + 30) % 30;
  paint();
};
window.sceneInfo = Object.freeze({ webgl2: scene.webgl2, filmWidth: 1920, filmHeight: 1080 });
requestAnimationFrame(tick);
