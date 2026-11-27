import { V, clamp } from './craft.js';
export const Y = 4.45,
  Z = 3.15,
  R = 4.65,
  L = 24,
  ARC = Math.PI * R,
  length = 2 * (L + ARC);
export function track(d) {
  const s = ((d % length) + length) % length;
  let x, z, angle;
  if (s < L) {
    x = -12 + s;
    z = Z;
    angle = 0;
  } else if (s < L + ARC) {
    const a = (s - L) / R;
    x = 12 + R * Math.sin(a);
    z = Z - R * (1 - Math.cos(a));
    angle = a;
  } else if (s < 2 * L + ARC) {
    x = 12 - (s - L - ARC);
    z = Z - 2 * R;
    angle = Math.PI;
  } else {
    const a = (s - 2 * L - ARC) / R;
    x = -12 - R * Math.sin(a);
    z = Z - R * (1 + Math.cos(a));
    angle = Math.PI + a;
  }
  return { x, z, angle };
}
export function railPoint(d, offset = 0) {
  const { x, z, angle } = track(d);
  return V(x + offset * Math.sin(angle), Y, z + offset * Math.cos(angle));
}
export function place(car, d, span = 0) {
  const a = railPoint(d - span / 2),
    b = railPoint(d + span / 2),
    p = track(d);
  car.position.copy(a).lerp(b, 0.5);
  car.rotation.y = span ? Math.atan2(a.z - b.z, b.x - a.x) : p.angle;
}
export const driverR = 0.321;
export function filmDistance(t) {
  const u = clamp(t - 2.2, 0, 4);
  const braking = Math.max(0, t - 25.2);
  return -3.3 + 0.225 * u * u + 1.8 * Math.max(0, t - 6.2) - 0.12 * braking ** 2;
}
export function filmSpeed(t) {
  return 0.45 * clamp(t - 2.2, 0, 4) - 0.24 * Math.max(0, t - 25.2);
}
