// Two phase-locked circular normal modes, viewed in the slowly precessing table frame.
export const ratios = [
  { title: 'Rose', p: 3, q: 2, label: '3:2 Rose' },
  { title: 'Star', p: 5, q: 4, label: '5:4 Star' },
  { title: 'Cathedral', p: 7, q: 6, label: '7:6 Cathedral' },
  { title: 'Chaos Twist', p: 3, q: Math.SQRT2 * 2, label: 'Chaos Twist' },
];
export const RATE = 180;
export const SAND_Y = 1.54;
export const RADIUS = 3.62;
export const TAU = 2 * Math.PI;

export function orbit(t, preset = 0, energy = 0.76, phase = t * (0.61 + energy * 0.27)) {
  const { p, q } = ratios[preset];
  const u = (phase * 5) / (p + q);
  const precession = 0.046 * t + 0.34;
  const decay = 0.9 + 0.1 * Math.cos(t * 0.082);
  const a = (1.12 + 0.92 * energy) * decay;
  const b = a * (0.71 + 0.036 * Math.sin(t * 0.091));
  const twist = preset === 3 ? Math.sin(t * 0.83) * 0.53 : 0;
  const x = a * Math.cos(p * u) + b * Math.cos(q * u + twist);
  const z = a * Math.sin(p * u) - b * Math.sin(q * u + twist);
  return [
    x * Math.cos(precession) - z * Math.sin(precession),
    x * Math.sin(precession) + z * Math.cos(precession),
  ];
}

// A new energy setting changes amplitude and frequency continuously. Integrating
// the exponential response keeps phase and stylus contact continuous during a drag.
export function pendulumDrive() {
  let mode = 0,
    history = [];
  function reset(preset, energy) {
    mode = preset;
    history = [{ t: 0, from: energy, to: energy, phase: 0 }];
  }
  function state(t) {
    let i = history.length - 1;
    while (i > 0 && history[i].t > t) i--;
    const h = history[i],
      dt = t - h.t,
      decay = Math.exp(-dt / 0.7),
      delta = h.from - h.to;
    return {
      energy: h.to + delta * decay,
      phase: h.phase + dt * (0.61 + 0.27 * h.to) + 0.27 * delta * 0.7 * (1 - decay),
    };
  }
  function setEnergy(t, to) {
    const current = state(t);
    history.push({ t, from: current.energy, to, phase: current.phase });
  }
  function point(t) {
    const { energy, phase } = state(t);
    return orbit(t, mode, energy, phase);
  }
  reset(0, 0.76);
  return { point, reset, setEnergy };
}

export function diagram(index) {
  const { p, q } = ratios[index];
  const points = [];
  for (let i = 0; i <= 420; i++) {
    const t = ((TAU * i) / 420) * (index === 3 ? 2 : 1);
    const x = 16 * Math.cos(p * t) + 10 * Math.cos(q * t);
    const y = 16 * Math.sin(p * t) - 10 * Math.sin(q * t);
    points.push((i ? 'L' : 'M') + (30 + y).toFixed(2) + ' ' + (30 - x).toFixed(2));
  }
  return points.join(' ');
}
