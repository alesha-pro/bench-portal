export const routes = [
  {
    name: "Bridge Fold",
    recipient: "The riverside cottage",
    person: "Ada",
    angle: 0,
    gap: 1.22,
    z: 0.58,
    start: -6.2,
    end: 3.76,
    wave: 0.83,
    dest: [4.35, -0.29],
    color: "#b85d43",
    caption: "A letter for Ada, across the Willow River.",
  },
  {
    name: "Hilltop Shortcut",
    recipient: "The house on the hill",
    person: "Theo",
    angle: 0.47,
    gap: 1.35,
    z: 0.34,
    start: -5.55,
    end: 6.49,
    wave: -0.76,
    dest: [5.93, 2.47],
    color: "#a2753c",
    caption: "Theo waits on the hill with the kettle on.",
  },
  {
    name: "Windmill Loop",
    recipient: "The old windmill",
    person: "Milo",
    angle: -0.52,
    gap: 1.17,
    z: 0.18,
    start: -5.75,
    end: 5.94,
    wave: 1.22,
    dest: [5.52, -3.55],
    color: "#476f6a",
    caption: "At the mill, Milo hears the bicycle bell.",
  },
];
export const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
export function ease(x) {
  x = clamp(x);
  return x * x * (3 - 2 * x);
}
export function worldPoint(s, l, r) {
  const c = Math.cos(r.angle),
    n = Math.sin(r.angle);
  return [s * c - l * n, s * n + l * c];
}
export function roadPoint(s, r) {
  const t =
    s < 0 ? (s + r.gap) / (r.gap + r.start) : (s - r.gap) / (r.end - r.gap);
  const curve = Math.sin(t * Math.PI) ** 2 * (s < 0 ? 1 : -0.77) * r.wave;
  return worldPoint(s, r.z + curve, r);
}
// A rounded valley crease with a narrow hinge at its bottom. The outer
// panels translate by precisely the amount removed from the pleat's width.
export function foldPoint(x, z, f, r) {
  const c = Math.cos(r.angle),
    n = Math.sin(r.angle);
  const s = x * c + z * n,
    l = -x * n + z * c;
  const a = r.gap,
    theta = (f * Math.PI) / 2,
    abs = Math.abs(s);
  const q =
    Math.sign(s) * (Math.max(0, abs - a) + Math.min(abs, a) * Math.cos(theta));
  const fillet = 0.095;
  const roundedAbs = abs < fillet ? 0.5 * ((abs * abs) / fillet + fillet) : abs;
  const y = -Math.max(0, a - roundedAbs) * Math.sin(theta);
  const tilt =
    abs < a ? Math.sin(theta) * Math.min(1, abs / fillet) * Math.sign(s) : 0;
  return {
    x: q * c - l * n,
    y: y + 1.53,
    z: q * n + l * c,
    tilt: Math.atan2(tilt, abs < a ? Math.cos(theta) : 1),
  };
}
export function riderPoint(ride, r) {
  const distance = ride * (r.end - r.start - 2 * r.gap);
  const s = r.start + distance;
  return roadPoint(s <= -r.gap ? s : s + 2 * r.gap, r);
}
export function storyState(t) {
  t = clamp(Number(t) || 0, 0, 35);
  const route = t < 12 ? 0 : t < 22 ? 1 : 2;
  const local = t - [0, 12, 22][route];
  return {
    route,
    local,
    t,
    fold: ease((local - 1.35) / 3.15),
    ride: ease((local - 4.55) / 3.65),
    deliveryAge: local - 8.2,
    delivered: ease((local - 8.2) / 1.3),
    final: route === 2 ? ease((local - 9.55) / 1.5) : 0,
  };
}
