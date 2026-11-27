export const TAU = Math.PI * 2;
export const mix = (a, b, t) => a + (b - a) * t;
export function ease(a, b, t) {
  const x = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return x * x * (3 - 2 * x);
}
export function random(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function stateAt(t) {
  const opening =
    0.31 * ease(2.05, 5.27, t) +
    0.62 * ease(4.95, 9.12, t) +
    0.07 * ease(8.85, 11.65, t);
  const fold = opening * (1 - ease(23.6, 28.9, t));
  const flight = ease(10.1, 15.6, t) * (1 - ease(21.3, 26.45, t));
  const fire = 0.09 + 0.91 * ease(8.65, 13.8, t) * (1 - ease(24.2, 29.9, t));
  return { fold, flight, fire };
}
