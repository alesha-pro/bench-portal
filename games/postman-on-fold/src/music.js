// All sounds are synthesized. The same score runs in a Web Audio context
// during playback and an OfflineAudioContext when exporting the soundtrack.
const chords = [
  [50, 57, 62, 66, 69],
  [47, 54, 59, 62, 66],
  [43, 50, 55, 59, 62],
  [45, 52, 57, 61, 64],
  [50, 57, 62, 66, 69],
  [43, 50, 55, 59, 62],
  [45, 52, 57, 61, 64],
  [50, 57, 62, 66, 69],
];
const beat = 0.535;
function pluck(ctx, dest, start, midi, volume, duration, bright = false) {
  const hz = 440 * 2 ** ((midi - 69) / 12);
  for (const [mult, gain] of [
    [1, 1],
    [2, 0.36],
    [3, 0.17],
    [4, 0.055],
  ]) {
    const osc = ctx.createOscillator(),
      amp = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = hz * mult * (mult === 3 ? 1.0008 : 1);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(volume * gain, start + 0.008);
    amp.gain.exponentialRampToValueAtTime(
      0.0001,
      start + duration / (1 + (mult - 1) * (bright ? 0.12 : 0.3)),
    );
    osc.connect(amp).connect(dest);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }
}
function score() {
  const notes = [];
  for (let i = 0; i < 63; i++) {
    const chord = chords[Math.floor(i / 8) % 8],
      index = [0, 2, 1, 3, 0, 2, 1, 4][i % 8];
    notes.push([i * beat, chord[index], index === 0 ? 0.14 : 0.1, 1.65, false]);
    if (i % 2 === 1)
      notes.push([
        i * beat + 0.27,
        chord[[3, 2, 4, 2][Math.floor(i / 2) % 4]],
        0.048,
        0.95,
        false,
      ]);
  }
  const melody = [
    69, 71, 74, 73, 69, 66, 67, 71, 69, 64, 66, 69, 74, 71, 67, 66, 64, 62,
  ];
  melody.forEach((n, i) =>
    notes.push([1.05 + i * 1.68, n + 12, 0.036, 1.45, true]),
  );
  for (const t of [8.55, 20.55, 30.55]) {
    notes.push([t, 86, 0.042, 1.9, true], [t + 0.18, 93, 0.022, 1.6, true]);
  }
  [50, 57, 62, 66, 74].forEach((n, i) =>
    notes.push([33 + i * 0.09, n, 0.077, 1.6, true]),
  );
  return notes;
}
const notes = score();
// Two light strikes on the brass bicycle bell just before reaching each house.
function bellStrike(ctx, bus, start, loudness) {
  for (const [hz, level, decay] of [
    [1438, 1, 0.54],
    [2167, 0.31, 0.31],
    [3899, 0.09, 0.16],
  ]) {
    const osc = ctx.createOscillator(),
      env = ctx.createGain();
    osc.frequency.setValueAtTime(hz * 1.006, start);
    osc.frequency.exponentialRampToValueAtTime(hz, start + 0.08);
    env.gain.setValueAtTime(0.0001, start);
    env.gain.exponentialRampToValueAtTime(loudness * level, start + 0.004);
    env.gain.exponentialRampToValueAtTime(0.0001, start + decay);
    osc.connect(env).connect(bus);
    osc.start(start);
    osc.stop(start + decay + 0.01);
  }
}
export function ringBicycle() {
  if (!context) return;
  const start = context.currentTime + 0.01;
  bellStrike(context, context.destination, start, 0.033);
  bellStrike(context, context.destination, start + 0.15, 0.022);
}

function schedule(ctx, bus, offset, base) {
  for (const arrival of [7.11, 19.11, 29.11]) {
    for (const [delay, level] of [
      [0, 0.041],
      [0.15, 0.029],
    ]) {
      const t = arrival + delay;
      if (t >= offset) bellStrike(ctx, bus, base + t - offset, level);
    }
  }
  for (const [t, n, v, d, b] of notes)
    if (t >= offset) pluck(ctx, bus, base + t - offset, n, v, d, b);
}
function space(ctx) {
  const main = ctx.createGain(),
    echo = ctx.createDelay(0.5),
    wet = ctx.createGain(),
    out = ctx.createGain();
  main.gain.value = 0.82;
  echo.delayTime.value = 0.19;
  wet.gain.value = 0.17;
  main.connect(out);
  main.connect(echo).connect(wet).connect(out);
  out.connect(ctx.destination);
  return { main, out };
}
let context = null,
  live = null;
export async function enableAudio() {
  context ??= new AudioContext();
  await context.resume();
}
export function stopScore() {
  if (live) {
    live.out.disconnect();
    live = null;
  }
}
export function playScore(offset) {
  stopScore();
  if (!context) return;
  live = space(context);
  schedule(context, live.main, offset, context.currentTime + 0.02);
}
export function chime() {
  if (context)
    pluck(
      context,
      context.destination,
      context.currentTime + 0.01,
      86,
      0.07,
      1.25,
      true,
    );
}
export async function soundtrack() {
  const rate = 48000,
    ctx = new OfflineAudioContext(1, rate * 35, rate);
  const { main, out } = space(ctx);
  schedule(ctx, main, 0, 0);
  out.gain.setValueAtTime(1, 34.3);
  out.gain.linearRampToValueAtTime(0, 34.99);
  const buffer = await ctx.startRendering(),
    samples = buffer.getChannelData(0),
    pcm = new Int16Array(samples.length);
  for (let i = 0; i < pcm.length; i++)
    pcm[i] = Math.round(Math.max(-1, Math.min(1, samples[i])) * 32767);
  const bytes = new Uint8Array(pcm.buffer),
    chunks = [];
  for (let i = 0; i < bytes.length; i += 32766)
    chunks.push(btoa(String.fromCharCode(...bytes.subarray(i, i + 32766))));
  return chunks.join("");
}
