// Small, entirely Canvas 2D painting vocabulary. No image or font downloads.
export const TAU = Math.PI * 2;
export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const mix = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, t) => {
  let u = clamp((t - a) / (b - a));
  return u * u * (3 - 2 * u);
};
export function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function path(c, d, fill, stroke = '#283e3e', w = 1.5) {
  const p = new Path2D(d);
  if (fill) {
    c.fillStyle = fill;
    c.fill(p);
  }
  if (stroke) {
    c.strokeStyle = stroke;
    c.lineWidth = w;
    c.lineJoin = 'round';
    c.lineCap = 'round';
    c.stroke(p);
  }
}
export function ellipse(c, x, y, rx, ry, fill, stroke = null, w = 1) {
  c.beginPath();
  c.ellipse(x, y, rx, ry, 0, 0, TAU);
  if (fill) {
    c.fillStyle = fill;
    c.fill();
  }
  if (stroke) {
    c.strokeStyle = stroke;
    c.lineWidth = w;
    c.stroke();
  }
}
export function line(c, pts, color, w = 1) {
  c.beginPath();
  c.moveTo(...pts[0]);
  for (const p of pts.slice(1)) c.lineTo(...p);
  c.strokeStyle = color;
  c.lineWidth = w;
  c.lineCap = 'round';
  c.lineJoin = 'round';
  c.stroke();
}
export function glow(c, x, y, r, color = '255,202,112', alpha = 0.3) {
  let g = c.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, `rgba(${color},${alpha})`);
  g.addColorStop(0.3, `rgba(${color},${alpha * 0.4})`);
  g.addColorStop(1, `rgba(${color},0)`);
  c.fillStyle = g;
  c.fillRect(x - r, y - r, r * 2, r * 2);
}
export function text(c, s, x, y, size, color, align = 'center', font = 'Georgia') {
  c.font = `${size}px ${font}`;
  c.textAlign = align;
  c.fillStyle = color;
  c.fillText(s, x, y);
}
export function layer(w = 1600, h = 900, scale = 1.5) {
  let canvas = document.createElement('canvas');
  canvas.width = w * scale;
  canvas.height = h * scale;
  let c = canvas.getContext('2d');
  c.scale(scale, scale);
  return { canvas, c };
}
export function paper() {
  const { canvas, c } = layer(1600, 900, 1);
  let im = c.createImageData(1600, 900),
    r = rng(472);
  for (let i = 0; i < im.data.length; i += 4) {
    let v = r();
    im.data[i] = im.data[i + 1] = im.data[i + 2] = v > 0.5 ? 255 : 31;
    im.data[i + 3] = Math.floor(5 + r() * 15);
  }
  c.putImageData(im, 0, 0);
  return canvas;
}
export function hatch(c, x, y, w, h, color, count = 35, seed = 1) {
  let r = rng(seed);
  c.save();
  c.strokeStyle = color;
  c.lineWidth = 0.7;
  for (let i = 0; i < count; i++) {
    let xx = x + r() * w,
      yy = y + r() * h;
    c.beginPath();
    c.moveTo(xx, yy);
    c.lineTo(xx + r() * 14 + 3, yy - 1 - r() * 2);
    c.stroke();
  }
  c.restore();
}
