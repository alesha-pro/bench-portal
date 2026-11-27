// The same seeded stereo synthesis supplies the interactive loop and the film master.
import { orbit } from './motion.js';
import { random } from './materials.js';
export function soundtrack(ctx) {
  const rate = ctx.sampleRate,
    buffer = ctx.createBuffer(2, rate * 30, rate),
    rand = random(2578);
  const left = buffer.getChannelData(0),
    right = buffer.getChannelData(1);
  const motion = [];
  for (let i = 0; i <= 1501; i++) {
    const t = i / 50,
      a = orbit(t),
      b = orbit(t + 0.005);
    motion.push([Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.005, a[0] / 3.5]);
  }
  let breeze = 0,
    grain = 0,
    prev = 0,
    swell = 0;
  for (let i = 0; i < left.length; i++) {
    const t = i / rate,
      phase = 2 * Math.PI * t,
      u = t * 50,
      j = Math.floor(u),
      f = u - j;
    const speed = (motion[j][0] * (1 - f) + motion[j + 1][0] * f) / 7.2;
    const pan = motion[j][1] * 0.36;
    const n = rand() * 2 - 1,
      b = rand() * 2 - 1;
    breeze += 0.024 * (n - breeze);
    grain += 0.29 * (b - grain);
    swell += 0.004 * (Math.pow(speed, 3.5) - swell);
    const wind = 0.28 * swell * breeze,
      sand = 0.034 * (0.24 + 0.76 * speed) * (b - grain + 0.22 * (b - prev));
    prev = b;
    const drone =
      0.082 * Math.sin(73.416 * phase + 0.035 * Math.sin(t * 0.38)) +
      0.042 * Math.sin(110 * phase + 0.22 * Math.sin(t * 0.32)) +
      0.029 * Math.sin(146.832 * phase + 0.28 * Math.sin(t * 0.42)) +
      0.017 * Math.sin(220 * phase) * (0.66 + 0.34 * Math.sin(t * 0.47));
    const age = (t + 1.5) % 7.5;
    const bell =
      0.016 *
      (1 - Math.exp(-age * 3)) *
      Math.exp(-age * 0.78) *
      (Math.sin(293.665 * phase) + 0.35 * Math.sin(440.44 * phase));
    const fade = Math.min(1, t / 1.25, (30 - t) / 1.65);
    left[i] = fade * (drone + bell + (wind + sand) * (1 - pan) + 0.011 * Math.sin(110.17 * phase));
    right[i] =
      fade *
      (drone +
        bell * 0.84 +
        (wind + sand) * (1 + pan) +
        0.011 * Math.sin(109.83 * phase) +
        0.003 * n * speed);
  }
  return buffer;
}
export function soundControl() {
  let context, buffer, source;
  return async (enabled, t) => {
    if (source) {
      source.stop();
      source = null;
    }
    if (!enabled) return;
    context ??= new AudioContext({ sampleRate: 48000 });
    await context.resume();
    buffer ??= soundtrack(context);
    source = context.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.connect(context.destination);
    source.start(0, t % 30);
  };
}
