// The stroke centreline is a Catmull–Rom spline. Each sample carries its own nib pressure.
export const TAU = Math.PI * 2;
export const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
export const mix = (a, b, t) => a + (b - a) * t;
export function smooth(a, b, x) {
  const v = clamp((x - a) / (b - a));
  return v * v * (3 - 2 * v);
}
export function rand(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function layer(w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}
const paths = new Map();
export function path(s) {
  if (!paths.has(s)) paths.set(s, new Path2D(s));
  return paths.get(s);
}
export function fill(c, s, col) {
  c.fillStyle = col;
  c.fill(path(s));
}
export function line(c, s, col, w = 1) {
  c.strokeStyle = col;
  c.lineWidth = w;
  c.lineJoin = "round";
  c.lineCap = "round";
  c.stroke(path(s));
}
export function oval(c, x, y, rx, ry, col, rot = 0) {
  c.fillStyle = col;
  c.beginPath();
  c.ellipse(x, y, rx, ry, rot, 0, TAU);
  c.fill();
}
export function gradient(c, x, y, X, Y, stops) {
  const g = c.createLinearGradient(x, y, X, Y);
  stops.forEach(([a, b]) => g.addColorStop(a, b));
  return g;
}
export function spline(pts, per = 7) {
  const a = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p = pts[Math.max(0, i - 1)],
      q = pts[i],
      r = pts[i + 1],
      s = pts[Math.min(i + 2, pts.length - 1)];
    for (let j = 0; j < per; j++) {
      const t = j / per,
        t2 = t * t,
        t3 = t2 * t;
      a.push(
        q.map(
          (v, k) =>
            0.5 *
            (2 * v +
              (-p[k] + r[k]) * t +
              (2 * p[k] - 5 * v + 4 * r[k] - s[k]) * t2 +
              (-p[k] + 3 * v - 3 * r[k] + s[k]) * t3),
        ),
      );
    }
  }
  a.push(pts.at(-1));
  return a;
}
export function nib(c, pts, color, seed = 1, end = 1, fray = 0.09) {
  if (end <= 0) return;
  const samples = spline(pts),
    last = (samples.length - 1) * clamp(end),
    n = Math.ceil(last);
  const mid = samples.slice(0, Math.max(1, n));
  const i = Math.floor(last);
  mid.push(samples[i].map((v, k) => mix(v, samples[Math.min(i + 1, samples.length - 1)][k], last - i)));
  const a = [],
    b = [],
    r = rand(seed);
  for (let k = 0; k < mid.length; k++) {
    const p = mid[k],
      q = mid[Math.max(0, k - 1)],
      z = mid[Math.min(k + 1, mid.length - 1)];
    const dx = z[0] - q[0],
      dy = z[1] - q[1],
      len = Math.hypot(dx, dy) || 1,
      nx = -dy / len,
      ny = dx / len;
    const w = Math.max(0.0001, p[2]) * 0.5,
      wa = w * (1 + (r() - 0.5) * fray),
      wb = w * (1 + (r() - 0.5) * fray);
    a.push([p[0] + wa * nx, p[1] + wa * ny]);
    b.push([p[0] - wb * nx, p[1] - wb * ny]);
  }
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(...a[0]);
  for (const p of a) c.lineTo(...p);
  for (let k = b.length - 1; k >= 0; k--) c.lineTo(...b[k]);
  c.closePath();
  c.fill();
}
// Broken concentric lines and voids are carved out of the cinnabar paste.
export function seal(c, x, y, size, angle = 0, ink = "#a43c29", variant = 0) {
  c.save();
  c.translate(x, y);
  c.rotate(angle);
  c.scale(size / 40, size / 40);
  fill(c, "M-20 -19 L-7 -20 6 -19.6 19 -20 20 -9 19.3 19 4 20 -20 19Z", ink);
  line(c, "M-16 -15 L15 -16 16 15 -16 16Z", "#f1d7a7", 1.05);
  const a =
    variant % 2
      ? "M-12 -11H-2V-5H-10V2H-3V12M-12 8H-7 M2 -12V12 M7 -11H12V-2H7V11H12 M-12 -1H-5"
      : "M-12 -11H-3V-4H-9V3H-3V11H-12 M-12 -7H-7 M2 -12V-5H12V-11H7 M2 0H12V11H7V4H2V12";
  line(c, a, "#f8d9a5", 2);
  const r = rand(93 + variant);
  for (let i = 0; i < 54; i++) {
    const px = r() * 40 - 20,
      py = r() * 40 - 20;
    c.fillStyle = "rgba(244,225,187,.56)";
    c.fillRect(px, py, 0.3 + r(), 0.3 + r());
  }
  c.restore();
}
export function keys(rows, t) {
  let i = 0;
  while (i < rows.length - 2 && t > rows[i + 1][0]) i++;
  const a = rows[i],
    b = rows[i + 1],
    u = smooth(a[0], b[0], t);
  return a.slice(1).map((v, k) => mix(v, b[k + 1], u));
}
