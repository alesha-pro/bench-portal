// Eight slow bars in 6/8. Every hammer, string and bubble is driven by these onsets.
const bars = [
  [38, 57, 62, 65, 69, 64, 62],
  [34, 53, 58, 62, 65, 69, 67],
  [41, 57, 60, 65, 69, 72, 69],
  [36, 55, 60, 64, 67, 62, 64],
  [31, 55, 58, 62, 65, 69, 67],
  [34, 53, 58, 65, 70, 69, 65],
  [33, 52, 57, 61, 64, 67, 64],
  [38, 57, 62, 65, 69, 64, 62],
];
export const score = [];
for (let bar = 0; bar < 8; bar++) {
  const [bass, ...notes] = bars[bar],
    down = bar * 3.75 + 0.17;
  score.push({ t: down, m: bass, v: 0.79, d: 2.95 });
  for (let j = 0; j < 6; j++) {
    if (bar === 7 && j > 3) continue;
    score.push({
      t: down + j * 0.571 + (j % 2 ? 0.029 : 0),
      m: notes[j],
      v: [0.59, 0.56, 0.65, 0.75, 0.55, 0.55][j],
      d: j === 3 ? 1.18 : 0.83,
    });
  }
}
score.sort((a, b) => a.t - b.t);
const sampleList = [
  ['C2', 36],
  ['A2', 45],
  ['C3', 48],
  ['A3', 57],
  ['C4', 60],
  ['A4', 69],
  ['C5', 72],
  ['A5', 81],
  ['C6', 84],
];
const bytes = new Map();
async function instruments(ctx) {
  return Promise.all(
    sampleList.map(async ([name, midi]) => {
      if (!bytes.has(name))
        bytes.set(
          name,
          fetch('./assets/piano/' + name + '.mp3').then((r) => r.arrayBuffer()),
        );
      return { midi, buffer: await ctx.decodeAudioData((await bytes.get(name)).slice(0)) };
    }),
  );
}
function graph(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0.74;
  master.connect(ctx.destination);
  const input = ctx.createBiquadFilter();
  input.type = 'lowpass';
  input.frequency.value = 2340;
  input.Q.value = 0.47;
  input.connect(master);
  const wet = ctx.createGain();
  wet.gain.value = 0.33;
  const verb = ctx.createConvolver(),
    len = ctx.sampleRate * 2.8,
    ir = ctx.createBuffer(2, len, ctx.sampleRate);
  let seed = 12183;
  for (let c = 0; c < 2; c++) {
    const a = ir.getChannelData(c);
    let s = 0;
    for (let i = 0; i < len; i++) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      s = s * 0.72 + (seed / 4294967296 - 0.5) * 0.28;
      a[i] = s * Math.exp((-i / ctx.sampleRate) * 2.2) * (1 - Math.exp((-i / ctx.sampleRate) * 20));
    }
  }
  verb.buffer = ir;
  input.connect(verb);
  verb.connect(wet);
  wet.connect(master);
  return { input, master };
}
function play(ctx, bank, g, e, when) {
  const nearest = bank.reduce((a, b) => (Math.abs(a.midi - e.m) < Math.abs(b.midi - e.m) ? a : b));
  const src = ctx.createBufferSource(),
    amp = ctx.createGain(),
    pan = ctx.createStereoPanner();
  src.buffer = nearest.buffer;
  src.playbackRate.value = 2 ** ((e.m - nearest.midi) / 12);
  const volume = e.v * (e.m < 45 ? 0.72 : 0.84);
  amp.gain.setValueAtTime(volume, when);
  amp.gain.setTargetAtTime(0.0001, when + e.d, 0.41);
  pan.pan.value = Math.max(-0.58, Math.min(0.58, (e.m - 59) * 0.018));
  src.connect(amp).connect(pan).connect(g.input);
  src.start(when);
  src.stop(when + e.d + 2.7);
  // Resonant air ticks with very short, pitch-bent attack.
  for (let j = 0; j < 2; j++) {
    const t = when + 0.19 + j * 0.21 + 0.052 * Math.sin(e.m),
      pop = ctx.createOscillator(),
      vol = ctx.createGain();
    const f = 550 + 275 * (1 + Math.sin(e.m * 3.8 + j));
    pop.frequency.setValueAtTime(f, t);
    pop.frequency.exponentialRampToValueAtTime(f * 1.85, t + 0.031);
    vol.gain.setValueAtTime(0.00001, t);
    vol.gain.exponentialRampToValueAtTime(0.018 * e.v, t + 0.005);
    vol.gain.exponentialRampToValueAtTime(0.00001, t + 0.069);
    pop.connect(vol).connect(pan);
    pop.start(t);
    pop.stop(t + 0.071);
  }
}
export async function renderAudio() {
  const ctx = new OfflineAudioContext(2, 48000 * 30, 48000),
    bank = await instruments(ctx),
    g = graph(ctx);
  for (const e of score) play(ctx, bank, g, e, e.t);
  g.master.gain.setValueAtTime(0.74, 28.45);
  g.master.gain.linearRampToValueAtTime(0, 29.998);
  return ctx.startRendering();
}
let live, setup;
export async function wake() {
  if (!live) {
    const ctx = new AudioContext();
    live = { ctx, bank: null, g: graph(ctx) };
    setup = instruments(ctx).then((bank) => (live.bank = bank));
  }
  await Promise.all([live.ctx.resume(), setup]);
}
export function mute(quiet) {
  if (live) live.g.master.gain.setTargetAtTime(quiet ? 0 : 0.74, live.ctx.currentTime, 0.035);
}
export function hear(e, delay = 0) {
  if (live?.bank) play(live.ctx, live.bank, live.g, e, live.ctx.currentTime + 0.012 + delay);
}
