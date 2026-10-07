// Procedural audio. Every sound is synthesized with WebAudio at the moment it plays: oscillators, filtered noise,
// envelopes, a generated reverb and a soft clipper on the bus. Nothing is loaded from disk.
// Every public call is a silent no-op until init() has run, and no call can throw into the game loop.

const MAX_VOICES = 48;

let ctx = null;
let sfxBus = null;
let musicBus = null;
let reverbIn = null;
let noiseWhite = null;
let noiseBrown = null;
let voices = 0;
let windLevel = null;
let slideGain = null;
let slideFilter = null;
let musicTimer = null;
let musicStep = 0;
let nextNoteTime = 0;
let layers = null;
let windLfo = null;

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const rnd = (a, b) => a + Math.random() * (b - a);

function makeNoise(seconds, brown) {
  const n = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < n; i++) {
    const w = Math.random() * 2 - 1;
    if (brown) {
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.5;
    } else {
      d[i] = w;
    }
  }
  return buf;
}

function makeReverb(seconds) {
  const rate = ctx.sampleRate;
  const len = Math.floor(rate * seconds);
  const ir = ctx.createBuffer(2, len, rate);
  const pre = Math.floor(rate * 0.018);
  for (let c = 0; c < 2; c++) {
    const d = ir.getChannelData(c);
    for (let i = 0; i < len; i++) {
      const decay = Math.pow(1 - i / len, 3.1);
      d[i] = (Math.random() * 2 - 1) * decay * 0.6;
    }
    // A few early reflections shortly after the direct sound.
    d[pre] += 0.5;
    d[pre + Math.floor(rate * 0.011)] -= 0.35;
    d[pre + Math.floor(rate * 0.027)] += 0.2;
  }
  const conv = ctx.createConvolver();
  conv.buffer = ir;
  return conv;
}

function makeDriveCurve(amount) {
  const n = 2048;
  const curve = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    curve[i] = Math.tanh(x * amount) / Math.tanh(amount);
  }
  return curve;
}

// Routes a node into the sfx bus with stereo pan, distance rolloff and a reverb send.
function route(node, { pan = 0, distance = 0, wet = 0.2 } = {}) {
  const att = ctx.createGain();
  att.gain.value = 1 / (1 + distance * 0.045);
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = Math.max(900, 14000 / (1 + distance * 0.03));
  lp.Q.value = 0.4;
  node.connect(att);
  att.connect(lp);
  let last = lp;
  if (ctx.createStereoPanner) {
    const p = ctx.createStereoPanner();
    p.pan.value = clamp(pan, -1, 1);
    lp.connect(p);
    last = p;
  }
  last.connect(sfxBus);
  if (wet > 0) {
    const send = ctx.createGain();
    send.gain.value = wet;
    last.connect(send);
    send.connect(reverbIn);
  }
}

// Tracks active sound groups so a burst of enemies cannot choke the audio thread.
function claim(seconds, critical = false) {
  if (!critical && voices >= MAX_VOICES) return false;
  voices++;
  setTimeout(() => { voices = Math.max(0, voices - 1); }, Math.ceil(seconds * 1000) + 40);
  return true;
}

// Gain node with an attack/decay envelope starting at time t.
function env(t, attack, peak, decay) {
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(Math.max(0.0002, peak), t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  return g;
}

function osc(type, freq, t, dur, peak, { endFreq = null, attack = 0.002 } = {}) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (endFreq !== null) o.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t + dur);
  const g = env(t, attack, peak, dur);
  o.connect(g);
  o.start(t);
  o.stop(t + attack + dur + 0.05);
  return g;
}

function noise(t, dur, peak, { type = 'bandpass', freq = 1200, q = 1, endFreq = null, brown = false, decay = null } = {}) {
  const src = ctx.createBufferSource();
  src.buffer = brown ? noiseBrown : noiseWhite;
  const offset = Math.random() * Math.max(0, src.buffer.duration - dur - 0.05);
  const f = ctx.createBiquadFilter();
  f.type = type;
  f.frequency.setValueAtTime(freq, t);
  if (endFreq !== null) f.frequency.exponentialRampToValueAtTime(endFreq, t + dur);
  f.Q.value = q;
  const g = env(t, 0.001, peak, decay ?? dur);
  src.connect(f);
  f.connect(g);
  src.start(t, offset, dur + 0.05);
  src.stop(t + dur + 0.1);
  return g;
}

// ---- gunshots ----------------------------------------------------------------------------------------
const GUN = {
  rifle: { crack: 2600, body: [150, 46], bodyPeak: 1.0, mid: 1150, midPeak: 0.7, wet: 0.5, bodyLp: 700 },
  gunner: { crack: 3000, body: [120, 58], bodyPeak: 0.55, mid: 1500, midPeak: 0.4, wet: 0.36, bodyLp: 520 },
  lmg: { crack: 2200, body: [110, 55], bodyPeak: 0.5, mid: 1700, midPeak: 0.32, wet: 0.3, bodyLp: 480 },
};

function shot(opts = {}) {
  const kind = opts.kind || 'rifle';
  const g = GUN[kind] || GUN.rifle;
  if (!claim(0.5, kind === 'rifle')) return;
  const t = ctx.currentTime + 0.001;
  const pitch = rnd(0.95, 1.05);
  const bus = ctx.createGain();
  bus.gain.value = 1;
  // Crack: the transient that makes the shot read as close.
  noise(t, 0.02, 1.0 * (kind === 'rifle' ? 1 : 0.7), { type: 'highpass', freq: g.crack * pitch, q: 0.6, decay: 0.035 })
    .connect(bus);
  // Body: a falling sine with a sub thump beneath it.
  const b = ctx.createBiquadFilter();
  b.type = 'lowpass';
  b.frequency.value = g.bodyLp;
  const bodyGain = osc('sine', g.body[0] * pitch, t, 0.24, g.bodyPeak, { endFreq: g.body[1] * pitch, attack: 0.001 });
  bodyGain.connect(b);
  b.connect(bus);
  // Mid bark through a bandpass for the rasp of a real muzzle.
  noise(t, 0.09, g.midPeak, { type: 'bandpass', freq: g.mid * pitch, q: 1.1, decay: 0.08 }).connect(bus);
  const out = ctx.createGain();
  out.gain.value = 0.9;
  bus.connect(out);
  route(out, { pan: opts.pan || 0, distance: opts.distance || 0, wet: g.wet });
}

// ---- small sounds ----------------------------------------------------------------------------------------
function dryFire() {
  if (!claim(0.1)) return;
  const t = ctx.currentTime;
  const out = noise(t, 0.02, 0.5, { type: 'bandpass', freq: 3200, q: 2 });
  route(out, { wet: 0.05 });
}

function shellClink({ pan = 0, power = 1 } = {}) {
  if (!claim(0.12)) return;
  const t = ctx.currentTime + 0.001;
  const base = rnd(2600, 4300);
  const out = ctx.createGain();
  out.gain.value = clamp(0.35 + power * 0.5, 0.2, 0.9);
  [1, 2.32, 3.91].forEach((ratio, i) => {
    const dur = rnd(0.04, 0.09) * (1 - i * 0.2);
    osc('sine', base * ratio, t, dur, 0.13 / (i + 1), { attack: 0.0005 }).connect(out);
  });
  noise(t, 0.004, 0.3, { type: 'highpass', freq: 6000, q: 0.5 }).connect(out);
  route(out, { pan, wet: 0.35 });
}

function impact({ material = 'concrete', pan = 0, power = 1, distance = 0 } = {}) {
  if (!claim(0.35)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = clamp(0.4 + power * 0.6, 0.2, 1.1);
  const m = material === 'steel' || material === 'rebar' ? 'metal' : material;
  if (m === 'metal') {
    const f0 = rnd(1100, 1700);
    [1, 2.76, 5.4, 8.9].forEach((ratio, i) => {
      osc('sine', f0 * ratio, t, rnd(0.25, 0.55) / (i * 0.5 + 1), 0.16 / (i + 1), { attack: 0.0008 }).connect(out);
    });
    noise(t, 0.01, 0.5, { type: 'highpass', freq: 4000, q: 0.6 }).connect(out);
  } else if (m === 'wood') {
    noise(t, 0.05, 0.6, { type: 'bandpass', freq: rnd(1500, 2100), q: 1.2 }).connect(out);
    osc('sine', 170, t, 0.07, 0.3, { endFreq: 90 }).connect(out);
  } else if (m === 'drywall') {
    noise(t, 0.12, 0.45, { type: 'lowpass', freq: 1200, q: 0.5, decay: 0.11 }).connect(out);
    osc('sine', 120, t, 0.08, 0.25, { endFreq: 70 }).connect(out);
  } else if (m === 'glass') {
    for (let i = 0; i < 5; i++) {
      osc('sine', rnd(3000, 6200), t + i * rnd(0.008, 0.03), rnd(0.04, 0.09), 0.09 / (i * 0.4 + 1)).connect(out);
    }
  } else if (m === 'plastic') {
    noise(t, 0.06, 0.4, { type: 'bandpass', freq: 1500, q: 0.7, decay: 0.05 }).connect(out);
    noise(t, 0.006, 0.4, { type: 'highpass', freq: 5000, q: 0.5 }).connect(out);
  } else if (m === 'dirt') {
    noise(t, 0.12, 0.5, { type: 'lowpass', freq: 600, q: 0.5, decay: 0.1 }).connect(out);
  } else {
    // Concrete: a dry tick, grit, and a low thud from the slab.
    noise(t, 0.07, 0.5, { type: 'bandpass', freq: 900, q: 0.8, decay: 0.065 }).connect(out);
    noise(t, 0.005, 0.35, { type: 'highpass', freq: 4500, q: 0.5 }).connect(out);
    osc('sine', 110, t, 0.06, 0.28, { endFreq: 60 }).connect(out);
  }
  route(out, { pan, distance, wet: 0.22 });
}

// Body hits: wet thud, squelch, and for heads a sharper crack and pop. Plates ring like metal.
function bodyHit({ head = false, plate = false, pan = 0, distance = 0 } = {}) {
  if (!claim(0.3)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.9;
  if (plate) {
    [1, 2.76, 5.4].forEach((ratio, i) => {
      osc('sine', 900 * ratio, t, rnd(0.5, 0.8) / (i + 1), 0.2 / (i + 1), { attack: 0.0008 }).connect(out);
    });
    noise(t, 0.02, 0.6, { type: 'highpass', freq: 2500, q: 0.6 }).connect(out);
  } else {
    noise(t, 0.12, 0.8, { type: 'lowpass', freq: 420, q: 0.6, decay: 0.11 }).connect(out);
    osc('sine', 90, t, 0.15, 0.6, { endFreq: 50 }).connect(out);
    // Wet squelch: band-passed noise with a fast wobble on its level.
    const sq = noise(t, 0.12, 0.35, { type: 'bandpass', freq: 1200, q: 2, decay: 0.1 });
    const wob = ctx.createOscillator();
    wob.frequency.value = 38;
    const wg = ctx.createGain();
    wg.gain.value = 0.3;
    wob.connect(wg);
    wg.connect(sq.gain);
    wob.start(t);
    wob.stop(t + 0.14);
    sq.connect(out);
    if (head) {
      noise(t, 0.04, 0.7, { type: 'highpass', freq: 2000, q: 0.5 }).connect(out);
      osc('sine', 800, t, 0.08, 0.3, { endFreq: 300 }).connect(out);
    }
  }
  route(out, { pan, distance, wet: 0.15 });
}

function plateBreak({ pan = 0, distance = 0 } = {}) {
  if (!claim(0.8)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.9;
  for (let i = 0; i < 4; i++) {
    noise(t + i * rnd(0.03, 0.07), 0.03, 0.5, { type: 'bandpass', freq: rnd(1800, 3200), q: 1.5, decay: 0.02 }).connect(out);
  }
  osc('sine', 260, t, 0.6, 0.3, { endFreq: 200 }).connect(out);
  route(out, { pan, distance, wet: 0.3 });
}

// Reload choreography: 0 = magazine out, 1 = magazine seated, 2 = charging handle.
function reload(stage, { pan = 0 } = {}) {
  if (!claim(0.5, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.9;
  if (stage === 0) {
    noise(t, 0.012, 0.6, { type: 'bandpass', freq: 2600, q: 3, decay: 0.012 }).connect(out);
    noise(t + 0.08, 0.2, 0.22, { type: 'bandpass', freq: 1400, q: 1.5, decay: 0.2 }).connect(out);
    noise(t + 0.26, 0.05, 0.5, { type: 'lowpass', freq: 900, q: 0.6, decay: 0.05 }).connect(out);
  } else if (stage === 1) {
    noise(t, 0.05, 0.9, { type: 'lowpass', freq: 900, q: 0.6, decay: 0.045 }).connect(out);
    osc('sine', 180, t, 0.12, 0.5, { endFreq: 90 }).connect(out);
    noise(t + 0.09, 0.012, 0.35, { type: 'bandpass', freq: 2400, q: 2, decay: 0.012 }).connect(out);
  } else {
    noise(t, 0.12, 0.5, { type: 'bandpass', freq: 900, q: 1.2, endFreq: 4000, decay: 0.12 }).connect(out);
    noise(t + 0.13, 0.02, 0.7, { type: 'highpass', freq: 3000, q: 0.6, decay: 0.02 }).connect(out);
    noise(t + 0.22, 0.02, 0.5, { type: 'highpass', freq: 2600, q: 0.6, decay: 0.02 }).connect(out);
  }
  route(out, { pan, wet: 0.12 });
}

function hitMarker({ head = false, kill = false } = {}) {
  if (!claim(0.2, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.7;
  if (kill) {
    osc('triangle', 1400, t, 0.06, 0.26).connect(out);
    osc('triangle', 2100, t + 0.05, 0.1, 0.24).connect(out);
  } else if (head) {
    osc('triangle', 1600, t, 0.06, 0.3).connect(out);
  } else {
    osc('triangle', 1150, t, 0.05, 0.22).connect(out);
  }
  route(out, { wet: 0.05 });
}

function footstep({ sprint = false, pan = 0 } = {}) {
  if (!claim(0.12)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = sprint ? 0.9 : 0.6;
  noise(t, 0.09, sprint ? 0.5 : 0.32, { type: 'lowpass', freq: 700, q: 0.7, decay: 0.07 }).connect(out);
  osc('sine', 90, t, 0.08, sprint ? 0.25 : 0.14, { endFreq: 55 }).connect(out);
  route(out, { pan, wet: 0.08 });
}

function jump() {
  if (!claim(0.3)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.7;
  noise(t, 0.25, 0.2, { type: 'bandpass', freq: 900, q: 0.6, endFreq: 1300 }).connect(out);
  osc('sine', 80, t, 0.1, 0.12, { endFreq: 60 }).connect(out);
  route(out, { wet: 0.1 });
}

function land(strength = 0.5) {
  if (!claim(0.3)) return;
  const s = clamp(strength, 0, 1);
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.5 + s * 0.6;
  osc('sine', 110, t, 0.2, 0.6 * s + 0.1, { endFreq: 50 }).connect(out);
  noise(t, 0.12, 0.4 * s + 0.1, { type: 'lowpass', freq: 400, q: 0.6, decay: 0.12 }).connect(out);
  route(out, { wet: 0.12 });
}

function slideStart() {
  if (!claim(0.4, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.7;
  noise(t, 0.3, 0.35, { type: 'bandpass', freq: 1200, q: 1.1, endFreq: 700, decay: 0.28 }).connect(out);
  route(out, { wet: 0.12 });
}

function whoosh(strength = 1) {
  if (!claim(0.6, true)) return;
  const s = clamp(strength, 0, 1.5);
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.8;
  noise(t, 0.5, 0.25 + 0.2 * s, { type: 'bandpass', freq: 400, q: 0.9, endFreq: 3200, decay: 0.45 }).connect(out);
  noise(t + 0.05, 0.4, 0.1 * s, { type: 'highpass', freq: 2500, q: 0.5, decay: 0.35 }).connect(out);
  route(out, { wet: 0.4 });
}

// The ADS snap: a metallic tick, a small thump and a short ring.
function snapAds() {
  if (!claim(0.2, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.8;
  noise(t, 0.01, 0.6, { type: 'highpass', freq: 3500, q: 0.6 }).connect(out);
  osc('sine', 1700, t, 0.05, 0.18).connect(out);
  osc('sine', 120, t, 0.08, 0.4, { endFreq: 60 }).connect(out);
  route(out, { wet: 0.2 });
}

function hurt() {
  if (!claim(0.3, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.8;
  osc('sine', 220, t, 0.22, 0.35, { endFreq: 110 }).connect(out);
  noise(t, 0.1, 0.3, { type: 'lowpass', freq: 900, q: 0.6, decay: 0.09 }).connect(out);
  route(out, { wet: 0.05 });
}

function playerDeath() {
  if (!claim(2, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.9;
  osc('sine', 180, t, 1.6, 0.5, { endFreq: 40 }).connect(out);
  noise(t, 1.6, 0.4, { type: 'lowpass', freq: 220, q: 0.7, decay: 1.5 }).connect(out);
  route(out, { wet: 0.35 });
}

// Enemy lunge: a rasping growl through a moving formant band.
function enemyLunge({ pan = 0, distance = 0 } = {}) {
  if (!claim(0.5)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.6;
  const saw = ctx.createOscillator();
  saw.type = 'sawtooth';
  saw.frequency.setValueAtTime(110, t);
  saw.frequency.exponentialRampToValueAtTime(62, t + 0.4);
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.setValueAtTime(520, t);
  band.frequency.linearRampToValueAtTime(380, t + 0.4);
  band.Q.value = 3.5;
  const g = env(t, 0.03, 0.4, 0.4);
  saw.connect(band);
  band.connect(g);
  g.connect(out);
  saw.start(t);
  saw.stop(t + 0.45);
  route(out, { pan, distance, wet: 0.2 });
}

function enemyShot({ kind = 'gunner', pan = 0, distance = 0 } = {}) {
  shot({ kind, pan, distance });
}

function whizz({ pan = 0 } = {}) {
  if (!claim(0.2)) return;
  const t = ctx.currentTime + 0.001;
  const out = noise(t, 0.16, 0.35, { type: 'bandpass', freq: 3000, q: 1.2, endFreq: 1200, decay: 0.15 });
  route(out, { pan, wet: 0.25 });
}

function enemyDeath({ head = false, pan = 0, distance = 0 } = {}) {
  if (!claim(0.4)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.8;
  osc('sawtooth', 260, t, 0.25, 0.14, { endFreq: 120 }).connect(out);
  noise(t, 0.12, 0.5, { type: 'lowpass', freq: 500, q: 0.6, decay: 0.12 }).connect(out);
  if (head) {
    noise(t, 0.05, 0.6, { type: 'highpass', freq: 2200, q: 0.5 }).connect(out);
    osc('sine', 700, t, 0.12, 0.25, { endFreq: 200 }).connect(out);
  }
  route(out, { pan, distance, wet: 0.2 });
}

function waveStart() {
  if (!claim(1, true)) return;
  const t = ctx.currentTime + 0.01;
  const out = ctx.createGain();
  out.gain.value = 0.5;
  [220, 261.6, 329.6, 440].forEach((f, i) => osc('triangle', f, t + i * 0.09, 0.35, 0.22).connect(out));
  route(out, { wet: 0.45 });
}

function waveClear() {
  if (!claim(1.2, true)) return;
  const t = ctx.currentTime + 0.01;
  const out = ctx.createGain();
  out.gain.value = 0.5;
  [261.6, 329.6, 392, 523.3].forEach((f) => osc('sine', f, t, 1.0, 0.16, { attack: 0.02 }).connect(out));
  route(out, { wet: 0.5 });
}

function heartbeat() {
  if (!claim(0.4, true)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.7;
  osc('sine', 55, t, 0.12, 0.5, { endFreq: 40 }).connect(out);
  osc('sine', 55, t + 0.18, 0.1, 0.35, { endFreq: 40 }).connect(out);
  route(out, { wet: 0.02 });
}

function uiTick() {
  if (!claim(0.05)) return;
  const t = ctx.currentTime + 0.001;
  const out = osc('sine', 1400, t, 0.02, 0.08);
  route(out, { wet: 0 });
}

function mantle() {
  if (!claim(0.5)) return;
  const t = ctx.currentTime + 0.001;
  const out = ctx.createGain();
  out.gain.value = 0.7;
  noise(t, 0.35, 0.22, { type: 'bandpass', freq: 700, q: 1, decay: 0.33 }).connect(out);
  osc('sine', 150, t, 0.2, 0.15, { endFreq: 110 }).connect(out);
  route(out, { wet: 0.08 });
}

// ---- music ---------------------------------------------------------------------------------------------
const BPM = 116;
const STEP = 60 / BPM / 4; // sixteenth note
const CHORDS = [
  { root: 110.0, tones: [220.0, 261.63, 329.63] }, // Am
  { root: 87.31, tones: [174.61, 220.0, 261.63] }, // F
  { root: 130.81, tones: [261.63, 329.63, 392.0] }, // C
  { root: 98.0, tones: [196.0, 246.94, 293.66] }, // G
];
const STEPS_PER_CHORD = 32;

function buildMusicLayers() {
  layers = {
    pad: ctx.createGain(),
    bass: ctx.createGain(),
    drums: ctx.createGain(),
    hats: ctx.createGain(),
    arp: ctx.createGain(),
    riser: ctx.createGain(),
  };
  layers.pad.gain.value = 0.0;
  layers.bass.gain.value = 0.0;
  layers.drums.gain.value = 0.0;
  layers.hats.gain.value = 0.0;
  layers.arp.gain.value = 0.0;
  layers.riser.gain.value = 0.0;
  for (const k of Object.keys(layers)) layers[k].connect(musicBus);
  // Shared delay for the arpeggio.
  const delay = ctx.createDelay(0.5);
  delay.delayTime.value = 0.1;
  const fb = ctx.createGain();
  fb.gain.value = 0.3;
  delay.connect(fb);
  fb.connect(delay);
  delay.connect(layers.arp);
  layers.arpDelayIn = delay;
  layers.pad.gain.setValueAtTime(0.0, ctx.currentTime);
}

function playPadChord(chord, t, duration) {
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = 780;
  f.Q.value = 0.7;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.07, t + 1.2);
  g.gain.setValueAtTime(0.07, t + duration - 0.8);
  g.gain.linearRampToValueAtTime(0.0001, t + duration);
  f.connect(g);
  g.connect(layers.pad);
  for (const freq of chord.tones) {
    for (const detune of [-7, 0, 7]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = freq;
      o.detune.value = detune;
      o.connect(f);
      o.start(t);
      o.stop(t + duration + 0.1);
    }
  }
}

function playBass(freq, t, step) {
  const o = ctx.createOscillator();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(freq * (step % 4 === 2 ? 2 : 1), t);
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.Q.value = 6;
  f.frequency.setValueAtTime(900, t);
  f.frequency.exponentialRampToValueAtTime(180, t + STEP * 1.6);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.22, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + STEP * 1.8);
  o.connect(f);
  f.connect(g);
  g.connect(layers.bass);
  o.start(t);
  o.stop(t + STEP * 2);
}

function playArp(chord, t, step) {
  const tone = chord.tones[step % chord.tones.length] * (step % 8 < 4 ? 2 : 4);
  const o = ctx.createOscillator();
  o.type = 'square';
  o.frequency.value = tone;
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = 1500;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.05, t + 0.004);
  g.gain.exponentialRampToValueAtTime(0.0001, t + STEP * 0.9);
  o.connect(f);
  f.connect(g);
  g.connect(layers.arp);
  g.connect(layers.arpDelayIn);
  o.start(t);
  o.stop(t + STEP);
}

function playDrumStep(step, t, intensity) {
  const beat = step % 16;
  if (intensity >= 0.35 && (beat === 0 || beat === 8)) {
    osc('sine', 150, t, 0.24, 0.9, { endFreq: 45 }).connect(layers.drums);
  }
  if (intensity >= 0.5 && (beat === 4 || beat === 12)) {
    noise(t, 0.16, 0.5, { type: 'bandpass', freq: 1800, q: 0.9, decay: 0.14 }).connect(layers.drums);
    osc('sine', 185, t, 0.1, 0.3, { endFreq: 150 }).connect(layers.drums);
  }
  if (intensity >= 0.6 && step % 2 === 0) {
    noise(t, 0.04, 0.25, { type: 'highpass', freq: 8000, q: 0.6, decay: 0.03 }).connect(layers.hats);
  }
  if (intensity >= 0.85 && beat === 15) {
    noise(t, 0.5, 0.25, { type: 'bandpass', freq: 500, q: 0.8, endFreq: 3000, decay: 0.45 }).connect(layers.riser);
  }
}

let musicIntensity = 0;
let musicOn = false;

function scheduleAhead() {
  if (!ctx || !musicOn) return;
  while (nextNoteTime < ctx.currentTime + 0.12) {
    const step = musicStep;
    const chordIndex = Math.floor(step / STEPS_PER_CHORD) % CHORDS.length;
    const chord = CHORDS[chordIndex];
    const within = step % STEPS_PER_CHORD;
    const t = nextNoteTime;
    if (within === 0) playPadChord(chord, t, STEPS_PER_CHORD * STEP);
    if (step % 2 === 0) playBass(chord.root, t, step / 2);
    if (musicIntensity >= 0.7) playArp(chord, t, step);
    playDrumStep(step, t, musicIntensity);
    nextNoteTime += STEP;
    musicStep++;
  }
}

function setLayerLevels(x) {
  if (!layers) return;
  const now = ctx.currentTime;
  const tc = 1.2;
  const ramp = (node, v) => node.gain.setTargetAtTime(v, now, tc);
  ramp(layers.pad, 0.5 + 0.25 * x);
  ramp(layers.bass, x >= 0.15 ? 0.22 + 0.2 * x : 0);
  ramp(layers.drums, x >= 0.35 ? 0.85 : 0);
  ramp(layers.hats, x >= 0.6 ? 0.5 : 0);
  ramp(layers.arp, x >= 0.7 ? 0.38 : 0);
  ramp(layers.riser, x >= 0.85 ? 0.8 : 0.1);
  musicBus.gain.setTargetAtTime(0.55, now, 0.6);
}

// ---- public API ---------------------------------------------------------------------------------------------
export const audio = {
  init() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      ctx = new AC();
    } catch (_) {
      ctx = null;
      return;
    }
    noiseWhite = makeNoise(2, false);
    noiseBrown = makeNoise(2, true);

    const master = ctx.createGain();
    master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -12;
    comp.knee.value = 6;
    comp.ratio.value = 5;
    comp.attack.value = 0.003;
    comp.release.value = 0.15;
    comp.connect(master);
    master.connect(ctx.destination);

    const drive = ctx.createWaveShaper();
    drive.curve = makeDriveCurve(1.6);
    drive.oversample = '2x';
    sfxBus = ctx.createGain();
    sfxBus.gain.value = 0.85;
    sfxBus.connect(drive);
    drive.connect(comp);

    reverbIn = makeReverb(2.4);
    const reverbOut = ctx.createGain();
    reverbOut.gain.value = 0.22;
    reverbIn.connect(reverbOut);
    reverbOut.connect(comp);

    musicBus = ctx.createGain();
    musicBus.gain.value = 0.55;
    musicBus.connect(comp);

    // Wind bed: brown noise through a band-pass, swelled by two slow LFOs.
    const windSrc = ctx.createBufferSource();
    windSrc.buffer = noiseBrown;
    windSrc.loop = true;
    const wbp = ctx.createBiquadFilter();
    wbp.type = 'bandpass';
    wbp.frequency.value = 420;
    wbp.Q.value = 0.7;
    windLevel = ctx.createGain();
    windLevel.gain.value = 0;
    const windAmp = ctx.createGain();
    windAmp.gain.value = 0.5;
    windSrc.connect(wbp);
    wbp.connect(windLevel);
    windLevel.connect(windAmp);
    windAmp.connect(comp);
    windLfo = ctx.createOscillator();
    windLfo.frequency.value = 0.07;
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 0.35;
    windLfo.connect(lfoDepth);
    lfoDepth.connect(windAmp.gain);
    const lfo2 = ctx.createOscillator();
    lfo2.frequency.value = 0.19;
    const lfo2Depth = ctx.createGain();
    lfo2Depth.gain.value = 180;
    lfo2.connect(lfo2Depth);
    lfo2Depth.connect(wbp.frequency);
    windSrc.start();
    windLfo.start();
    lfo2.start();

    // Slide scrape: a looped band-pass noise whose level and pitch follow speed.
    const scrapeSrc = ctx.createBufferSource();
    scrapeSrc.buffer = noiseWhite;
    scrapeSrc.loop = true;
    slideFilter = ctx.createBiquadFilter();
    slideFilter.type = 'bandpass';
    slideFilter.frequency.value = 900;
    slideFilter.Q.value = 2;
    slideGain = ctx.createGain();
    slideGain.gain.value = 0;
    scrapeSrc.connect(slideFilter);
    slideFilter.connect(slideGain);
    slideGain.connect(sfxBus);
    scrapeSrc.start();

    buildMusicLayers();
  },

  resume() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  },

  setWind(level) {
    if (!ctx || !windLevel) return;
    windLevel.gain.setTargetAtTime(clamp(level, 0, 1) * 0.12, ctx.currentTime, 0.4);
  },

  setSlide(on, speedNorm = 0) {
    if (!ctx || !slideGain) return;
    const s = clamp(speedNorm, 0, 1);
    const now = ctx.currentTime;
    slideGain.gain.setTargetAtTime(on ? 0.05 + 0.16 * s : 0, now, on ? 0.05 : 0.12);
    slideFilter.frequency.setTargetAtTime(700 + 1100 * s, now, 0.08);
  },

  sfx: {
    shot: (o) => ctx && shot(o),
    dryFire: () => ctx && dryFire(),
    shellClink: (o) => ctx && shellClink(o),
    impact: (o) => ctx && impact(o),
    bodyHit: (o) => ctx && bodyHit(o),
    plateBreak: (o) => ctx && plateBreak(o),
    reload: (stage, o) => ctx && reload(stage, o),
    hitMarker: (o) => ctx && hitMarker(o),
    footstep: (o) => ctx && footstep(o),
    jump: () => ctx && jump(),
    land: (s) => ctx && land(s),
    slideStart: () => ctx && slideStart(),
    whoosh: (s) => ctx && whoosh(s),
    snapAds: () => ctx && snapAds(),
    hurt: () => ctx && hurt(),
    playerDeath: () => ctx && playerDeath(),
    enemyLunge: (o) => ctx && enemyLunge(o),
    enemyShot: (o) => ctx && enemyShot(o),
    whizz: (o) => ctx && whizz(o),
    enemyDeath: (o) => ctx && enemyDeath(o),
    waveStart: () => ctx && waveStart(),
    waveClear: () => ctx && waveClear(),
    heartbeat: () => ctx && heartbeat(),
    uiTick: () => ctx && uiTick(),
    mantle: () => ctx && mantle(),
  },

  music: {
    start() {
      if (!ctx || musicOn) return;
      musicOn = true;
      musicStep = 0;
      nextNoteTime = ctx.currentTime + 0.1;
      setLayerLevels(musicIntensity);
      musicTimer = setInterval(scheduleAhead, 25);
    },
    stop() {
      if (!ctx || !musicOn) return;
      musicOn = false;
      clearInterval(musicTimer);
      musicBus.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
      setTimeout(() => {
        musicBus.gain.setTargetAtTime(0.55, ctx.currentTime, 0.1);
      }, 1500);
    },
    setIntensity(x) {
      if (!ctx) return;
      musicIntensity = clamp(x, 0, 1);
      setLayerLevels(musicIntensity);
    },
    sting(kind) {
      if (!ctx) return;
      if (kind === 'wave') audio.sfx.waveStart();
      else if (kind === 'clear') audio.sfx.waveClear();
      else if (kind === 'death') {
        const t = ctx.currentTime + 0.01;
        const out = ctx.createGain();
        out.gain.value = 0.5;
        [220, 174.6, 130.8].forEach((f, i) => osc('triangle', f, t + i * 0.18, 0.9, 0.14, { attack: 0.02 }).connect(out));
        route(out, { wet: 0.4 });
      }
    },
  },
};
