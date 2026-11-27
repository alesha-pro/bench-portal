// One revolution is an eight-bar waltz. Each punched slot corresponds to a comb tine.
export const step = 0.32,
  slots = 48,
  period = step * slots;
export const pitches = [55, 58, 60, 62, 63, 65, 67, 69, 70, 72, 74, 75, 77, 79, 81, 82];
const bars = [
  [
    [0, 0],
    [0, 6],
    [2, 9],
    [3, 10],
    [4, 11]
  ],
  [
    [0, 3],
    [0, 10],
    [2, 8],
    [4, 6]
  ],
  [
    [0, 1],
    [0, 7],
    [2, 8],
    [3, 9],
    [4, 12]
  ],
  [
    [0, 4],
    [0, 11],
    [2, 10],
    [4, 8]
  ],
  [
    [0, 2],
    [0, 9],
    [2, 11],
    [3, 12],
    [4, 13]
  ],
  [
    [0, 5],
    [0, 12],
    [2, 10],
    [4, 9]
  ],
  [
    [0, 3],
    [0, 8],
    [2, 7],
    [3, 6],
    [4, 5]
  ],
  [
    [0, 0],
    [0, 6],
    [2, 3],
    [4, 6],
    [5, 8]
  ]
];
export const notes = bars.flatMap((bar, b) => bar.map(([s, lane]) => ({ time: (b * 6 + s) * step, lane })));
export const mod = (t, n) => ((t % n) + n) % n;
export function sinceNote(t, lane = null) {
  let age = period;
  for (const n of notes) if (lane === null || lane === n.lane) age = Math.min(age, mod(t - n.time, period));
  return age;
}
export const smooth = (t) => ((t = Math.max(0, Math.min(t, 1))), t * t * (3 - 2 * t));
export function exhibit(t) {
  const opening = smooth((t - 10) / 6),
    closing = smooth((t - 22) / 5.5);
  const wind = smooth(t / 2.3);
  // The movement engages progressively during the first two seconds.
  const motion = t < 2 ? 0.22 * t + 0.195 * t * t : t - 0.78;
  return { motion, explosion: opening * (1 - closing), wind, reserve: 0.67 + 0.31 * wind - 0.0027 * t };
}
function audioBus(ctx) {
  const out = ctx.createGain();
  out.gain.value = 0.68;
  out.connect(ctx.destination);
  const delay = ctx.createDelay(0.5),
    returnGain = ctx.createGain(),
    damp = ctx.createBiquadFilter();
  delay.delayTime.value = 0.104;
  returnGain.gain.value = 0.13;
  damp.type = 'lowpass';
  damp.frequency.value = 3000;
  delay.connect(damp).connect(returnGain);
  returnGain.connect(out);
  returnGain.connect(delay);
  return { out, delay };
}
function voice(ctx, bus, when, lane) {
  const freq = 440 * 2 ** ((pitches[lane] - 69) / 12),
    pan = ctx.createStereoPanner();
  pan.pan.value = (lane / 15 - 0.5) * 0.77;
  pan.connect(bus.out);
  pan.connect(bus.delay);
  [
    [1, 0.19, 1.53],
    [1.0028, 0.037, 1.76],
    [2.007, 0.068, 0.87],
    [3.987, 0.056, 0.42],
    [5.43, 0.048, 0.145],
    [10.18, 0.019, 0.06]
  ].forEach(([ratio, amp, decay]) => {
    const osc = ctx.createOscillator(),
      env = ctx.createGain();
    osc.frequency.setValueAtTime(freq * ratio, when);
    env.gain.setValueAtTime(0.00001, when);
    env.gain.exponentialRampToValueAtTime(amp, when + (ratio > 3 ? 0.0016 : 0.0038));
    env.gain.exponentialRampToValueAtTime(0.00001, when + decay * 1.85);
    osc.connect(env).connect(pan);
    osc.start(when);
    osc.stop(when + decay * 1.85 + 0.005);
  });
}
function tick(ctx, bus, when, id, wind = false) {
  const len = wind ? 0.047 : 0.03,
    dur = Math.ceil(ctx.sampleRate * len),
    b = ctx.createBuffer(1, dur, ctx.sampleRate);
  const d = b.getChannelData(0);
  let seed = (id + 131) * 5731,
    last = 0;
  for (let i = 0; i < dur; i++) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const n = seed / 2147483648 - 1,
      t = i / ctx.sampleRate;
    d[i] =
      ((n - last) * 0.3 + Math.sin(t * (id % 2 ? 18700 : 23800)) * Math.exp(-t * 290)) *
      Math.exp(-t * (wind ? 133 : 238)) *
      (wind ? 0.13 : 0.095);
    // Lock, impulse and drop make two distinguishable pallet sounds per cycle.
    if (!wind) {
      const drop = t - (id % 2 ? 0.0082 : 0.0064);
      if (drop >= 0)
        d[i] += 0.062 * Math.exp(-drop * 410) * (0.45 * n + Math.sin(drop * (id % 2 ? 28900 : 25800)));
    }
    last = n;
  }
  const src = ctx.createBufferSource(),
    p = ctx.createStereoPanner();
  p.pan.value = wind ? 0.48 : -0.26;
  src.buffer = b;
  src.connect(p).connect(bus.out);
  src.start(when);
}
function events(a, b, play, click) {
  for (let k = Math.floor(a / period); k <= Math.floor(b / period); k++)
    for (const n of notes) {
      const t = k * period + n.time;
      if (t > a && t <= b) play(t, n.lane);
    }
  for (let k = Math.floor(a / 0.25) + 1; k <= Math.floor(b / 0.25); k++) click(k * 0.25, k);
}
export class SoundBox {
  async enable() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.bus = audioBus(this.ctx);
    }
    await this.ctx.resume();
    this.active = true;
    this.last = null;
  }
  async disable() {
    this.active = false;
    if (this.ctx) await this.ctx.suspend();
  }
  update(t) {
    if (!this.active) return;
    if (this.last != null && t >= this.last && t - this.last < 0.5)
      events(
        this.last,
        t,
        (_, l) => voice(this.ctx, this.bus, this.ctx.currentTime + 0.006, l),
        (_, i) => tick(this.ctx, this.bus, this.ctx.currentTime + 0.006, i)
      );
    this.last = t;
  }
  winding() {
    if (this.active)
      for (let i = 0; i < 12; i++) tick(this.ctx, this.bus, this.ctx.currentTime + 0.085 * i, i, true);
  }
}
export async function filmAudio() {
  const sr = 48000,
    ctx = new OfflineAudioContext(2, 30 * sr, sr),
    bus = audioBus(ctx);
  const unwarp = (m) => (m < 1.22 ? (-0.22 + Math.sqrt(0.22 ** 2 + 0.78 * m)) / 0.39 : m + 0.78);
  events(
    -0.001,
    exhibit(30).motion,
    (t, l) => voice(ctx, bus, unwarp(t), l),
    (t, i) => tick(ctx, bus, unwarp(t), i)
  );
  for (let i = 0; i < 23; i++) tick(ctx, bus, 0.075 + i * 0.088, i, true);
  bus.out.gain.setValueAtTime(0.68, 29.37);
  bus.out.gain.linearRampToValueAtTime(0, 30);
  const buffer = await ctx.startRendering(),
    size = buffer.length * 4,
    bytes = new Uint8Array(44 + size),
    dv = new DataView(bytes.buffer);
  const str = (i, s) => {
    for (const ch of s) bytes[i++] = ch.charCodeAt(0);
  };
  str(0, 'RIFF');
  dv.setUint32(4, size + 36, true);
  str(8, 'WAVEfmt ');
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 2, true);
  dv.setUint32(24, sr, true);
  dv.setUint32(28, sr * 4, true);
  dv.setUint16(32, 4, true);
  dv.setUint16(34, 16, true);
  str(36, 'data');
  dv.setUint32(40, size, true);
  let j = 44;
  const channels = [buffer.getChannelData(0), buffer.getChannelData(1)];
  for (let i = 0; i < buffer.length; i++)
    for (const channel of channels) {
      dv.setInt16(j, Math.max(-1, Math.min(1, channel[i])) * 32767, true);
      j += 2;
    }
  return new Promise((resolve) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result.split(',')[1]);
    r.readAsDataURL(new Blob([bytes]));
  });
}
