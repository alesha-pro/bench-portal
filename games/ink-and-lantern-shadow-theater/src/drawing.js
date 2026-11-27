// The original cutting patterns are laid out on a 1280 by 720 sheet.
export const W = 1280,
  H = 720,
  TAU = Math.PI * 2;
export const ink = '#291e20',
  gilt = '#c99a57';
export const clamp = (x) => Math.min(1, Math.max(0, x));
export function ease(a, b, x) {
  const u = clamp((x - a) / (b - a));
  return u * u * (3 - 2 * u);
}
export const mix = (a, b, k) => a + (b - a) * k;
export const wave = (t, n, phase = 0) => Math.sin((TAU * n * t) / 45 + phase);
export function random(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
const dies = new Map();
export function die(d) {
  if (!dies.has(d)) dies.set(d, new Path2D(d));
  return dies.get(d);
}
export function draw(c, d, color, edge, width = 1) {
  const p = typeof d === 'string' ? die(d) : d;
  if (color) {
    c.fillStyle = color;
    c.fill(p, 'evenodd');
  }
  if (edge) {
    c.strokeStyle = edge;
    c.lineWidth = width;
    c.stroke(p);
  }
}
export function ellipse(c, x, y, rx, ry, color, edge, width = 1, angle = 0) {
  c.beginPath();
  c.ellipse(x, y, rx, ry, angle, 0, TAU);
  if (color) {
    c.fillStyle = color;
    c.fill();
  }
  if (edge) {
    c.lineWidth = width;
    c.strokeStyle = edge;
    c.stroke();
  }
}
export function stroke(c, points, color, width = 1) {
  c.beginPath();
  c.moveTo(...points[0]);
  for (const p of points.slice(1)) c.lineTo(...p);
  c.lineWidth = width;
  c.strokeStyle = color;
  c.stroke();
}
export function place(c, x, y, sx, sy, angle, fn) {
  c.save();
  c.translate(x, y);
  c.rotate(angle);
  c.scale(sx, sy);
  fn(c);
  c.restore();
}
export function radial(c, x, y, r, stops) {
  const g = c.createRadialGradient(x, y, 0, x, y, r);
  for (const [u, color] of stops) g.addColorStop(u, color);
  c.fillStyle = g;
  c.fillRect(x - r, y - r, 2 * r, 2 * r);
}
export function linear(c, x1, y1, x2, y2, stops) {
  const g = c.createLinearGradient(x1, y1, x2, y2);
  for (const [u, col] of stops) g.addColorStop(u, col);
  return g;
}
export function sheet(scale, painter) {
  const cv = document.createElement('canvas');
  cv.width = Math.round(W * scale);
  cv.height = Math.round(H * scale);
  const c = cv.getContext('2d');
  c.scale(cv.width / W, cv.height / H);
  c.lineCap = 'round';
  c.lineJoin = 'round';
  painter(c);
  return cv;
}
export const print = (c, cv) => c.drawImage(cv, 0, 0, W, H);
export function pin(c, x, y, s = 1) {
  ellipse(c, x, y, 2.45 * s, 2.45 * s, '#21191b', '#9a6b39', 0.75 * s);
  ellipse(c, x - 0.25 * s, y - 0.4 * s, 1.25 * s, 1.25 * s, '#e1b86d');
  stroke(
    c,
    [
      [x - 0.65 * s, y + 0.3 * s],
      [x + 0.55 * s, y - 0.6 * s],
    ],
    '#815b3c',
    0.6 * s,
  );
}
export function lettering(c, text, x, y, font, color, space = 2) {
  c.save();
  c.font = font;
  c.fillStyle = color;
  c.textAlign = 'left';
  c.textBaseline = 'middle';
  const chars = [...text],
    widths = chars.map((ch) => c.measureText(ch).width);
  let left = x - (widths.reduce((a, b) => a + b, 0) + space * (chars.length - 1)) / 2;
  for (let i = 0; i < chars.length; i++) {
    c.fillText(chars[i], left, y);
    left += widths[i] + space;
  }
  c.restore();
}
