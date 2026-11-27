// The same seeded Web Audio graph plays in the room and in OfflineAudioContext
// for the film master. All instruments, rain and surface noise are synthesized.
import { random } from "./craft.js";
import { records } from "./print.js";
const progressions = [
  [
    [53, 57, 60, 64, 67],
    [52, 55, 59, 62, 66],
    [50, 53, 57, 60, 64],
    [48, 52, 55, 59, 62],
  ],
  [
    [51, 55, 58, 62, 65],
    [48, 51, 55, 58, 62],
    [53, 56, 60, 63, 67],
    [46, 50, 53, 56, 60],
  ],
  [
    [56, 60, 63, 67, 70],
    [53, 56, 60, 63, 67],
    [49, 53, 56, 60, 63],
    [51, 55, 58, 61, 65],
  ],
];
const hz = (n) => 440 * 2 ** ((n - 69) / 12);
function master(ctx) {
  const main = ctx.createGain(),
    comp = ctx.createDynamicsCompressor();
  main.gain.value = 0.79;
  comp.threshold.value = -13;
  comp.ratio.value = 3.2;
  main.connect(comp).connect(ctx.destination);
  const echo = ctx.createDelay(2),
    wet = ctx.createGain(),
    feedback = ctx.createGain(),
    filter = ctx.createBiquadFilter();
  echo.delayTime.value = 0.31;
  wet.gain.value = 0.18;
  feedback.gain.value = 0.27;
  filter.type = "lowpass";
  filter.frequency.value = 1650;
  echo.connect(filter).connect(wet).connect(main);
  filter.connect(feedback).connect(echo);
  return { main, echo };
}
function instrument(ctx, bus, t, midi, len, vol, pan = 0, bass = false) {
  const env = ctx.createGain(),
    p = ctx.createStereoPanner();
  p.pan.value = pan;
  env.connect(p);
  p.connect(bus.main);
  if (!bass) p.connect(bus.echo);
  env.gain.setValueAtTime(0.00001, t);
  env.gain.exponentialRampToValueAtTime(vol, t + (bass ? 0.025 : 0.013));
  env.gain.exponentialRampToValueAtTime(vol * 0.42, t + len * 0.43);
  env.gain.exponentialRampToValueAtTime(0.00002, t + len);
  const f = hz(midi);
  for (const [ratio, gain, release] of bass
    ? [
        [1, 1, 1],
        [2, 0.11, 0.8],
      ]
    : [
        [1, 0.85, 1],
        [2, 0.2, 0.58],
        [3, 0.105, 0.32],
        [7, 0.045, 0.13],
      ]) {
    const o = ctx.createOscillator(),
      a = ctx.createGain();
    o.frequency.value = f * ratio;
    o.detune.setValueAtTime(2 * Math.sin(t * 0.92 + midi), t);
    a.gain.setValueAtTime(gain, t);
    a.gain.exponentialRampToValueAtTime(
      Math.max(0.001, gain * 0.025),
      t + len * release,
    );
    o.connect(a).connect(env);
    o.start(t);
    o.stop(t + len + 0.01);
  }
}
function texture(ctx, bus, t, duration, id, rain) {
  const sr = ctx.sampleRate,
    rng = random(780 + id),
    n = Math.floor(sr * duration),
    buf = ctx.createBuffer(2, n, sr);
  for (let ch = 0; ch < 2; ch++) {
    let low = 0,
      prev = 0,
      pop = 0,
      drop = 0,
      phase = 0,
      f = 0;
    const d = buf.getChannelData(ch);
    const revolution = Math.round(1.8 * sr);
    const defect = Math.round((0.275 + ch * 0.00034) * sr);
    const startSample = Math.round(t * sr);
    for (let i = 0; i < n; i++) {
      const white = rng() * 2 - 1;
      // A small pressing flaw returns once per revolution. Keep its phase across bars.
      const rotation = (i + startSample) % revolution;
      if (rotation === defect) pop = 0.052;
      low = (low + 0.055 * white) * 0.979;
      if (rng() < 0.000093) pop = (rng() - 0.44) * 0.26;
      pop *= 0.825;
      if (rng() < 0.00023 * rain) {
        drop = 0.008 + rng() * 0.028;
        phase = 0;
        f = ((900 + rng() * 3900) / sr) * 6.283;
      }
      phase += f;
      drop *= 0.994;
      const swell = 0.86 + 0.15 * Math.sin((i / sr) * 0.43 + 0.7 * ch);
      d[i] =
        low * rain * 0.48 * swell +
        (white - prev) * (0.004 + rain * 0.011) +
        pop +
        Math.sin(phase) * drop * rain;
      prev = white;
    }
  }
  const s = ctx.createBufferSource();
  s.buffer = buf;
  s.connect(bus.main);
  s.start(t);
}
function schedule(ctx, bus, id, t, duration, rain = 0.7, barStart = 0) {
  const beat = 60 / records[id].bpm,
    prog = progressions[id],
    rand = random(421 + id + barStart);
  texture(ctx, bus, t, duration, id + barStart, rain);
  for (let k = 0; k * beat * 4 < duration - 0.1; k++) {
    const start = t + k * beat * 4,
      ch = prog[(k + barStart) % 4];
    const play = (offset, n, len, vol, pan, bass = false) => {
      const local = k * beat * 4 + offset;
      if (local < duration - 0.09)
        instrument(
          ctx,
          bus,
          start + offset,
          n,
          Math.min(len, duration - local),
          vol,
          pan,
          bass,
        );
    };
    for (const [b, sustain, vol] of [
      [0.025, 2.5, 0.058],
      [2.58, 1.18, 0.039],
    ])
      ch.forEach((n, j) =>
        play(
          b * beat + j * 0.019,
          n,
          beat * sustain,
          vol * (0.91 + rand() * 0.15),
          -0.36 + j * 0.17,
        ),
      );
    play(0, ch[0] - 12, beat * 2.3, 0.15, -0.09, true);
    play(
      2.84 * beat,
      ch[0] - 12 + (k % 2 ? 7 : 0),
      beat * 0.77,
      0.082,
      0.02,
      true,
    );
    const phrase = [
      [4, 2, 3],
      [3, 4, 1],
      [2, 1, 3],
      [4, 2, 0],
    ][(k + id) % 4];
    phrase.forEach((degree, j) => {
      if (j === 1 && k % 2) return;
      play(
        ([0.76, 1.78, 3.34][j] + rand() * 0.038) * beat,
        ch[degree] + 12,
        beat * (j === 0 ? 1.18 : 0.74),
        0.041 + rand() * 0.01,
        0.2,
      );
    });
    // Soft bass drum with brushed, filtered-noise backbeats.
    for (let b = 0; b < 4; b++) {
      const at = start + b * beat;
      if (at + 0.18 > t + duration) break;
      const env = ctx.createGain();
      env.connect(bus.main);
      if (b % 2 === 0) {
        const o = ctx.createOscillator();
        o.frequency.setValueAtTime(87, at);
        o.frequency.exponentialRampToValueAtTime(44, at + 0.114);
        env.gain.setValueAtTime(0.075, at);
        env.gain.exponentialRampToValueAtTime(0.0001, at + 0.22);
        o.connect(env);
        o.start(at);
        o.stop(at + 0.23);
      } else {
        const n = Math.floor(ctx.sampleRate * 0.13),
          buf = ctx.createBuffer(1, n, ctx.sampleRate),
          v = buf.getChannelData(0);
        for (let i = 0; i < n; i++) v[i] = rand() * 2 - 1;
        const s = ctx.createBufferSource(),
          f = ctx.createBiquadFilter();
        s.buffer = buf;
        f.type = "bandpass";
        f.frequency.value = 1700;
        f.Q.value = 0.74;
        s.connect(f).connect(env);
        env.gain.setValueAtTime(0.032, at);
        env.gain.exponentialRampToValueAtTime(0.0001, at + 0.13);
        s.start(at);
      }
    }
  }
}
export async function audioMaster(id = 0, duration = 30, rain = 0.73) {
  const ctx = new OfflineAudioContext(2, 48000 * duration, 48000),
    bus = master(ctx);
  schedule(ctx, bus, id, 0, duration, rain);
  bus.main.gain.setValueAtTime(0.001, 0);
  bus.main.gain.linearRampToValueAtTime(0.87, 0.6);
  bus.main.gain.setValueAtTime(0.87, duration - 1.5);
  bus.main.gain.exponentialRampToValueAtTime(0.001, duration - 0.002);
  return ctx.startRendering();
}
export function listening() {
  let ctx,
    index = 0,
    on = false,
    timer,
    next,
    bar,
    bus,
    rain = 0.73;
  function pump() {
    if (!ctx || !on) return;
    const span = (4 * 60) / records[index].bpm;
    while (next < ctx.currentTime + 0.7) {
      schedule(ctx, bus, index, next, span, rain, bar++);
      next += span;
    }
  }
  async function stop() {
    on = false;
    clearInterval(timer);
    if (ctx) {
      const closing = ctx;
      ctx = null;
      await closing.close();
    }
  }
  async function start(id = index) {
    index = id;
    ctx = new AudioContext();
    await ctx.resume();
    bus = master(ctx);
    on = true;
    next = ctx.currentTime + 0.045;
    bar = 0;
    pump();
    timer = setInterval(pump, 230);
  }
  return {
    start,
    stop,
    select(id) {
      index = id;
      if (!on) return;
      const previous = bus.main;
      previous.gain.setTargetAtTime(0.00001, ctx.currentTime, 0.012);
      setTimeout(() => previous.disconnect(), 85);
      bus = master(ctx);
      bar = 0;
      next = ctx.currentTime + 0.035;
      pump();
    },
    setRain(v) {
      rain = v;
    },
    get playing() {
      return on;
    },
  };
}
