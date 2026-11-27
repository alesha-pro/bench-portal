export const TOTAL_DURATION = 30.0;
export const rad = (x) => (Math.PI * x) / 180;
const smooth = (x) => x * x * (3 - 2 * x);
export const manual = { mass: 1, lens: 1, doppler: 1, azimuth: 11, inclination: 81 };
export function flight(time) {
  const t = Math.max(0, Math.min(TOTAL_DURATION, time));
  const q = t / TOTAL_DURATION;
  const dip = smooth(Math.min(1, t / 18));
  return {
    ...manual,
    clockTime: t,
    azimuth: rad(-24 + 59 * q + 7 * Math.sin(q * Math.PI)),
    inclination: rad(13 + 66 * dip + 7 * smooth(Math.max(0, (t - 18) / 12))),
    roll: rad(-11 + 3 * Math.cos(q * Math.PI)),
    fov: 0.385 - 0.102 * dip - 0.052 * smooth(q),
    plunge: smooth(Math.max(0, Math.min(1, (t - 6) / 22))),
  };
}
export function instrument(time, settings, eventAge) {
  return {
    ...settings,
    clockTime: time,
    inclination: rad(settings.inclination),
    azimuth: rad(settings.azimuth),
    fov: 0.252,
    roll: rad(-10),
    plunge: eventAge == null ? 0 : smooth(Math.max(0, Math.min(1, eventAge / 14))),
  };
}
