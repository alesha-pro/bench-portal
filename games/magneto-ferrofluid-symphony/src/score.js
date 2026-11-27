export const BPM = 140,
  DURATION = 30;
export const modeNames = ['Rosensweig Spikes', 'Levitation Crown', 'Chladni Mandala', 'Zero-G Droplets'];
export const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const smooth = (a, b, x) => {
  const k = clamp((x - a) / (b - a));
  return k * k * (3 - 2 * k);
};
export const electricBeat = (n) => [3, 9, 13, 19, 26, 33, 40, 44, 48, 54, 60, 62].includes(n % 70);
export function score(t, settings) {
  const { auto, field, tempo, mode, accent, blast } = settings;
  const beat = (t * tempo) / 60,
    k = Math.floor(beat + 1e-7),
    phase = clamp(beat - k);
  const pulse = Math.exp(-phase * 5.4),
    modeIndex = auto ? Math.min(3, Math.floor(t / 6)) % 4 : mode;
  const release = auto ? 1 - smooth(25.4, 28.05, t) : 1;
  const act = auto && t >= 24 ? 0 : modeIndex;
  const blend = (i) =>
    auto
      ? smooth(i * 6 - 0.65, i * 6 + 0.65, t) * (1 - smooth((i + 1) * 6 - 0.65, (i + 1) * 6 + 0.65, t))
      : +(mode === i);
  const crown = blend(1),
    mandala = blend(2),
    drops = blend(3);
  const strength = field / 1.8;
  const amp = clamp(
    strength *
      (0.79 + 0.55 * pulse + 0.1 * Math.sin(beat * 0.57)) *
      (1 - 0.84 * drops) *
      (1 - 0.48 * mandala) *
      release +
      blast * 0.66,
    0,
    1.97,
  );
  const snap = electricBeat(k) ? Math.exp(-phase * 8.2) * (0.75 + 0.25 * Math.cos(phase * 59)) : 0;
  return {
    t,
    beat: k,
    phase,
    pulse,
    crown,
    mandala,
    drops,
    amp,
    accent,
    mode: act,
    release,
    pool: clamp(strength * (0.67 + 0.48 * pulse + 0.3 * mandala) * release + blast * 0.6, 0, 1.82),
    y:
      1.98 +
      0.13 * crown +
      0.22 * drops +
      0.038 * Math.sin(t * 1.4) +
      0.048 * pulse * release +
      0.12 * blast,
    sat: clamp((strength * 0.82 + 0.15 * pulse) * release + blast * 0.45, 0, 1.4),
    shrink: 0.22 * drops + 0.27 * mandala,
    spin: t * 0.193 + 0.04 * Math.sin(beat * 0.21),
    tilt: 0.21 + 0.13 * Math.sin(t * 0.59),
    arc: clamp((snap * (field / 1.8) + blast * 1.5) * release),
    arcSeed: blast > 0.1 ? 101 : k,
  };
}

// Deterministic stereo master. All transient times are derived from the same beat index as the field.
let audioCache;
export function audioMaster() {
  if (audioCache) return audioCache;
  const rate = 48000,
    n = DURATION * rate,
    pcm = [new Float32Array(n), new Float32Array(n)];
  const tau = 2 * Math.PI,
    beatSec = 60 / BPM,
    bassNotes = [41.2034, 41.2034, 48.9994, 36.7081, 41.2034, 30.8677, 36.7081, 46.2493];
  let seed = 15191,
    lastNoise = 0,
    hiss = 0,
    low = 0;
  for (let i = 0; i < n; i++) {
    const t = i / rate,
      beat = t / beatSec,
      k = Math.floor(beat),
      d = (beat - k) * beatSec,
      phase = beat - k;
    const section = Math.floor(t / 6),
      energy = 1 - 0.79 * smooth(25, 29, t),
      freq = bassNotes[Math.floor(k / 2) % 8];
    const fade = smooth(0, 0.18, t) * (1 - smooth(28.65, 30, t));
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const noise = seed / 2147483648 - 1,
      hp = noise - lastNoise;
    lastNoise = noise;
    low += 0.022 * (noise - low);
    hiss += 0.23 * (hp - hiss);
    const kick =
      0.43 * Math.exp(-d * 13.6) * Math.sin(tau * (43 * d + 2.7 * (1 - Math.exp(-d * 39)))) * energy;
    const bass =
      0.17 *
      Math.sin(tau * freq * (t - k * beatSec)) *
      (1 - Math.exp(-d * 97)) *
      Math.exp(-d * 8.5) *
      energy;
    const hum =
      0.06 * Math.sin(tau * 50 * t + 0.27 * Math.sin(t * 0.8)) +
      0.028 * Math.sin(tau * 100 * t) +
      0.01 * Math.sin(tau * 151 * t);
    const half = ((phase + 0.5) % 1) * beatSec,
      hats = hiss * Math.exp(-half * (k % 2 ? 110 : 70)) * 0.19 * (section === 0 ? 0.45 : 1) * energy;
    const crack = electricBeat(k)
      ? (0.19 * hp + 0.13 * Math.sin(tau * (1780 * d + 22 * (1 - Math.exp(-d * 78))))) *
        Math.exp(-d * 31) *
        (0.45 + 0.55 * Math.pow(Math.cos(d * 80), 6)) *
        energy
      : 0;
    const clang =
      k % 7 === 0 || k % 7 === 4
        ? 0.072 *
          Math.exp(-d * 9) *
          (Math.sin(tau * 308.7 * d) + 0.46 * Math.sin(tau * 797 * d)) *
          (1 - Math.exp(-d * 115))
        : 0;
    const chord = [82.4069, 123.4708, 146.8324, 184.9972];
    for (let ch = 0; ch < 2; ch++) {
      let pad = 0;
      for (let j = 0; j < 4; j++)
        pad +=
          Math.sin(
            tau * chord[j] * t + (ch ? 0.29 : -0.29) + 0.36 * Math.sin(t * (0.63 + j * 0.11) + ch),
          ) * 0.018;
      const direct =
        kick +
        bass +
        hum * (0.8 + 0.18 * Math.cos(t * 0.54)) +
        pad +
        low * 0.21 +
        hats +
        clang +
        crack * (ch === k % 2 ? 1.0 : 0.49);
      const offset = ch ? 13810 : 10412,
        echo = i > offset ? 0.155 * pcm[ch][i - offset] : 0;
      pcm[ch][i] = Math.tanh(direct * 1.23 + echo) * fade;
    }
  }
  audioCache = pcm;
  return pcm;
}
