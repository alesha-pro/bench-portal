// The film has a recorded mix. In the control room the exhaust follows the crankshaft.
export class RailwaySound {
  constructor() {
    this.score = new Audio('assets/winter-score.m4a');
    this.master = new Audio('assets/winter-working.m4a');
    this.score.loop = true;
    for (const track of [this.score, this.master]) {
      track.preload = 'none';
      track.volume = 0.76;
    }
    this.enabled = false;
    this.suspended = false;
    this.mode = 'manual';
    this.lastStroke = null;
    this.lastJoint = null;
  }
  async toggle(mode, t) {
    this.enabled = !this.enabled;
    if (this.enabled) {
      if (!this.context) {
        this.context = new AudioContext();
        const n = this.context.sampleRate,
          noise = this.context.createBuffer(1, n, n),
          data = noise.getChannelData(0);
        let seed = 134;
        for (let i = 0; i < n; i++) {
          seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
          data[i] = seed / 2147483648 - 1;
        }
        this.noise = noise;
      }
      await this.context.resume();
    }
    this.select(mode, t, true);
    return this.enabled;
  }
  select(mode, t, force = false) {
    if (mode === this.mode && !force) return;
    this.mode = mode;
    this.lastStroke = null;
    this.lastJoint = null;
    this.score.pause();
    this.master.pause();
    if (!this.enabled || this.suspended) return;
    if (mode === 'manual') this.score.play().catch(() => {});
    if (mode === 'showcase') {
      this.master.currentTime = Math.min(29.95, t);
      this.master.play().catch(() => {});
    }
  }
  suspend(value, t) {
    this.suspended = value;
    this.select(this.mode, t, true);
  }
  tick(distance, speed) {
    if (!this.context || !this.enabled || this.suspended || this.mode !== 'manual') return;
    const stroke = Math.floor((distance / (2 * Math.PI * 0.321)) * 4),
      joint = Math.floor(distance / 1.7);
    if (speed > 0 && this.lastStroke !== null && stroke !== this.lastStroke) {
      const ctx = this.context,
        src = ctx.createBufferSource(),
        filter = ctx.createBiquadFilter(),
        gain = ctx.createGain(),
        now = ctx.currentTime;
      src.buffer = this.noise;
      filter.type = 'bandpass';
      filter.frequency.value = 620 + speed * 210;
      filter.Q.value = 0.64;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.135 + (stroke & 1) * 0.035, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      src.connect(filter).connect(gain).connect(ctx.destination);
      src.start(now, (((stroke % 8) + 8) % 8) * 0.09, 0.18);
      src.onended = () => {
        src.disconnect();
        filter.disconnect();
        gain.disconnect();
      };
    }
    if (speed > 0 && this.lastJoint !== null && joint !== this.lastJoint) {
      const ctx = this.context,
        osc = ctx.createOscillator(),
        gain = ctx.createGain(),
        now = ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(707, now);
      osc.frequency.exponentialRampToValueAtTime(296, now + 0.033);
      gain.gain.setValueAtTime(0.065, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.062);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    }
    this.lastStroke = stroke;
    this.lastJoint = joint;
  }
}
