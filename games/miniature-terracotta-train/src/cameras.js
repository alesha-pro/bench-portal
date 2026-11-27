import { V, smooth } from './craft.js';
import { track, Y } from './route.js';
export const names = ['Diorama Overview', 'Viaduct Hero', 'Train Chase', 'Cab Ride'];
export function frame(mode, d, t, film = false, aspect = 1.78) {
  const a = track(d),
    local = (x, y, z) =>
      V(
        a.x + x * Math.cos(a.angle) + z * Math.sin(a.angle),
        Y + y,
        a.z - x * Math.sin(a.angle) + z * Math.cos(a.angle),
      );
  let eye,
    aim,
    fov = 38,
    subject,
    railAngle = 0,
    swing = 0.94,
    band = 0.045,
    tag = mode,
    title,
    shot;
  if (film && t < 3.45) {
    const u = smooth(0, 3.45, t);
    eye = V(7.5 - u * 1.2, 9.95 + u * 0.6, 26.0 - u * 0.8);
    aim = V(1.55 - u * 0.6, 2.0 + u * 0.52, 6.4 - u * 1.4);
    fov = 48;
    subject = V(5.2, -0.38, 12.31).lerp(V(0.15, 4.6, 2.4), smooth(0.42, 2.25, t));
    tag = 0;
    title = 'The modelmaker’s table';
    shot = -1;
  } else if (film && t < 5.85) {
    const u = smooth(3.45, 5.85, t);
    eye = V(-3.05 + u * 0.51, 5.92 + u * 0.09, 5.47 - u * 0.28);
    aim = V(0.75 + u * 0.22, 5.88, -1.91);
    subject = V(0.46, 5.04, -1.52);
    fov = 38;
    tag = 1;
    title = 'The station master';
    shot = 0;
  } else if (film && t < 10.6) {
    const x = Math.max(-12.45, a.x),
      s = smooth(5.85, 10.6, t);
    eye = V(x + 5.5 - s * 1.29, 6.48 + s * 0.28, 8.56 + s * 0.62);
    aim = V(x - 0.66, 5.4, 3.05);
    fov = 36;
    subject = V(x, 5.42, 3.15);
    tag = 2;
    title = 'West portal';
    shot = 1;
  } else if (film && t < 20.0) {
    const u = (t - 10.6) / 9.4;
    eye = V(4.2 + u * 7.0, 8.8 + u * 0.8, 16.7 + u * 1.2);
    aim = V(-4.1 + u * 7.5, 3.58 + 0.34 * u, 2.39);
    fov = 39.8;
    subject = V(aim.x, 4.7, 1.46);
    band = 0.117;
    tag = 1;
    title = 'Falkengrat Viaduct';
    shot = 2;
  } else if (film && t < 24.3) {
    const b = track(d - 7.15),
      c = Math.cos(b.angle),
      s = Math.sin(b.angle),
      u = (t - 20) / 4.3;
    eye = V(
      b.x - c * (3.31 - u * 0.85) + s * 3.49,
      Y + 1.58 + u * 0.17,
      b.z + s * (3.31 - u * 0.85) + c * 3.49,
    );
    aim = V(b.x + c * 0.32, Y + 0.93, b.z - s * 0.32);
    fov = 40;
    subject = V(b.x + s * 0.42, Y + 0.96, b.z + c * 0.42);
    railAngle = b.angle;
    tag = 2;
    title = 'The observation saloon';
    shot = 3;
  } else if (film) {
    const u = smooth(24.3, 30, t);
    eye = local(1.36 - u * 0.62, 1.05 - u * 0.19, -2.99 + u * 0.51);
    aim = local(0.12, 0.51, -0.36);
    fov = 39 - u * 2;
    subject = local(0.12, 0.48, -0.49);
    railAngle = a.angle;
    band = 0.066;
    tag = 2;
    title = 'Running gear';
    shot = 4;
  } else if (mode === 0) {
    eye = V(11.6, 12.3, 27.2);
    aim = V(0.55, 2.85, 2.05);
    fov = 44;
    subject = V(0.2, 4.8, 2.15);
    band = 0.085;
  } else if (mode === 1) {
    eye = V(7.8, 6.88, 13.8);
    aim = V(-1.23, 3.62, 2.57);
    fov = 37;
    subject = V(-0.46, 4.73, 2.45);
    band = 0.08;
  } else if (mode === 2) {
    eye = local(3.87, 2.16, 5.01);
    aim = local(-1.13, 0.86, 0);
    fov = 41;
    subject = local(-0.1, 0.98, 0.32);
    railAngle = a.angle;
  } else {
    // The driver leans out of the open cab to sight the line past the smoke box.
    eye = local(-0.73, 1.64, 0.56);
    const ahead = track(d + 5.4);
    aim = V(ahead.x, Y + 0.9, ahead.z);
    fov = 67;
    subject = eye.clone().addScaledVector(aim.clone().sub(eye).normalize(), 4.3);
    swing = 0;
  }
  if (aspect < 1.35) fov += Math.min(17, (1.35 - aspect) * 24);
  return { eye, aim, fov, subject, railAngle, swing, band, tag, title: title ?? names[tag], shot };
}
