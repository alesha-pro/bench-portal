import { rng } from './geometry.js';

export const PINGS = [6.85, 12.35, 25.8];
const DURATION = 30,
  RATE = 48000;
function oscillator(ctx, dest, type, f, a, level, span, release, detune = 0) {
  const o = ctx.createOscillator(),
    g = ctx.createGain();
  o.type = type;
  o.frequency.value = f;
  o.detune.value = detune;
  g.gain.setValueAtTime(0.00001, a);
  g.gain.exponentialRampToValueAtTime(level, a + Math.min(span * 0.16, 0.47));
  g.gain.exponentialRampToValueAtTime(0.00001, a + span + release);
  o.connect(g).connect(dest);
  o.start(a);
  o.stop(a + span + release + 0.02);
  return o;
}
export function ping(ctx, dest, t) {
  for (let k = 0; k < 4; k++) {
    const a = t + k * 0.335,
      g = ctx.createGain(),
      o = ctx.createOscillator(),
      pan = ctx.createStereoPanner();
    const level = 0.18 * Math.pow(0.43, k);
    pan.pan.value = k === 0 ? -0.05 : k % 2 ? 0.56 : -0.48;
    o.frequency.setValueAtTime(881 - k * 5, a);
    o.frequency.exponentialRampToValueAtTime(654 - k * 3, a + 0.55);
    g.gain.setValueAtTime(0.00001, a);
    g.gain.exponentialRampToValueAtTime(level, a + 0.012);
    g.gain.exponentialRampToValueAtTime(level * 0.26, a + 0.38);
    g.gain.exponentialRampToValueAtTime(0.00001, a + 0.94);
    o.connect(g).connect(pan).connect(dest);
    o.start(a);
    o.stop(a + 0.96);
  }
  oscillator(ctx, dest, 'sine', 94, t, 0.13, 0.2, 0.74);
}
const cache = new Map();
export function renderAudio(score = true) {
  if (cache.has(score)) return cache.get(score);
  const work = (async () => {
    const ctx = new OfflineAudioContext(2, DURATION * RATE, RATE),
      mix = ctx.createGain(),
      master = ctx.createDynamicsCompressor(),
      random = rng(94083);
    mix.connect(master).connect(ctx.destination);
    master.threshold.value = -14;
    master.ratio.value = 3;
    mix.gain.setValueAtTime(0.0001, 0);
    mix.gain.linearRampToValueAtTime(0.85, 1.2);
    mix.gain.setValueAtTime(0.85, 28.7);
    mix.gain.linearRampToValueAtTime(0.00001, 30);
    const noise = ctx.createBuffer(2, RATE * DURATION, RATE);
    for (let ch = 0; ch < 2; ch++) {
      const a = noise.getChannelData(ch);
      let b = 0;
      for (let i = 0; i < a.length; i++) {
        b = 0.974 * b + 0.026 * (random() * 2 - 1);
        a[i] = b * 4.5;
      }
    }
    const src = ctx.createBufferSource(),
      band = ctx.createBiquadFilter(),
      hiss = ctx.createGain();
    src.buffer = noise;
    band.type = 'lowpass';
    band.frequency.value = 430;
    hiss.gain.value = 0.41;
    src.connect(band).connect(hiss).connect(mix);
    src.start();
    for (const [f, v, pan] of [
      [36.71, 0.16, -0.2],
      [55.0, 0.088, 0.34],
      [73.58, 0.057, -0.53],
      [110.15, 0.021, 0.57],
      [147.02, 0.012, 0.18],
    ]) {
      const o = ctx.createOscillator(),
        g = ctx.createGain(),
        p = ctx.createStereoPanner();
      o.frequency.value = f;
      p.pan.value = pan;
      for (let i = 0; i <= 30; i += 2)
        g.gain.linearRampToValueAtTime(v * (0.72 + 0.27 * Math.sin(i * 0.32 + f)), i);
      o.connect(g).connect(p).connect(mix);
      o.start(0);
      o.stop(30);
    }
    // A loaded steel hull groans in short groups of coupled, sliding resonances.
    for (const a of [1.4, 4.8, 9.6, 14.3, 18.0, 22.5, 27.4]) {
      const bus = ctx.createStereoPanner();
      bus.pan.value = random() * 0.94 - 0.47;
      bus.connect(mix);
      const f = 55 + random() * 32;
      for (const [ratio, power] of [
        [1, 0.085],
        [1.53, 0.04],
        [2.71, 0.035],
        [4.28, 0.016],
        [6.33, 0.009],
      ]) {
        const start = a + random() * 0.11,
          l = 0.69 + random() * 0.8;
        const o = oscillator(ctx, bus, 'sine', f * ratio, start, power, l, 0.26);
        o.frequency.setValueAtTime(f * ratio, start);
        o.frequency.exponentialRampToValueAtTime(f * ratio * (0.7 + random() * 0.21), start + l);
      }
      for (let j = 0; j < 5; j++)
        oscillator(
          ctx,
          bus,
          'triangle',
          125 + random() * 160,
          a + j * 0.063 + random() * 0.05,
          0.013,
          0.025,
          0.12
        );
    }
    for (let i = 0; i < 68; i++) {
      const a = random() * 29,
        p = ctx.createStereoPanner();
      p.pan.value = random() * 1.7 - 0.85;
      p.connect(mix);
      const f = 330 + random() * 510,
        o = oscillator(ctx, p, 'sine', f, a, 0.002 + random() * 0.005, 0.035, 0.073);
      o.frequency.exponentialRampToValueAtTime(f * 1.35, a + 0.073);
    }
    if (score) PINGS.forEach((t) => ping(ctx, mix, t));
    return ctx.startRendering();
  })();
  cache.set(score, work);
  return work;
}
export function soundSystem() {
  let ctx,
    source,
    enabled = false,
    generation = 0;
  function stop() {
    generation++;
    if (source) {
      source.stop();
      source.disconnect();
      source = null;
    }
  }
  async function sync(time, score) {
    stop();
    if (!enabled) return;
    const token = generation,
      buffer = await renderAudio(score);
    if (token !== generation || !enabled) return;
    source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.connect(ctx.destination);
    source.start(0, time % 30);
  }
  return {
    async toggle(time, score) {
      enabled = !enabled;
      if (enabled) {
        ctx ??= new AudioContext();
        await ctx.resume();
      }
      await sync(time, score);
      return enabled;
    },
    sync,
    manual() {
      if (enabled) ping(ctx, ctx.destination, ctx.currentTime + 0.015);
    },
    get enabled() {
      return enabled;
    },
  };
}
