// All marks live in the same 1280 × 720 print space.
export const W = 1280,
  H = 720,
  TAU = Math.PI * 2;
export const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
export const mix = (a, b, t) => a + (b - a) * t;
export function ease(a, b, t) {
  const q = clamp((t - a) / (b - a));
  return q * q * (3 - 2 * q);
}
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let z = Math.imul(s ^ (s >>> 15), 1 | s);
    z = (z + Math.imul(z ^ (z >>> 7), 61 | z)) ^ z;
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
  };
}
export function layer(w = W, h = H, scale = 1) {
  const el = document.createElement('canvas');
  el.width = Math.round(w * scale);
  el.height = Math.round(h * scale);
  const g = el.getContext('2d');
  g.scale(scale, scale);
  g.lineCap = 'round';
  g.lineJoin = 'round';
  return [el, g];
}
export function shape(g, d, fill, stroke, width = 1) {
  const p = typeof d === 'string' ? new Path2D(d) : d;
  if (fill) {
    g.fillStyle = fill;
    g.fill(p);
  }
  if (stroke) {
    g.strokeStyle = stroke;
    g.lineWidth = width;
    g.stroke(p);
  }
  return p;
}
export function line(g, x1, y1, x2, y2, color, w = 1) {
  g.beginPath();
  g.moveTo(x1, y1);
  g.lineTo(x2, y2);
  g.strokeStyle = color;
  g.lineWidth = w;
  g.stroke();
}
export function ellipse(g, x, y, rx, ry, color) {
  g.beginPath();
  g.ellipse(x, y, Math.max(0.01, rx), Math.max(0.01, ry), 0, 0, TAU);
  g.fillStyle = color;
  g.fill();
}
export function rect(g, x, y, w, h, col) {
  g.fillStyle = col;
  g.fillRect(x, y, w, h);
}
export function wash(g, x1, y1, x2, y2, stops) {
  const gr = g.createLinearGradient(x1, y1, x2, y2);
  stops.forEach(([n, c]) => gr.addColorStop(n, c));
  return gr;
}
export function halo(g, x, y, r, color, ry = r) {
  g.save();
  g.translate(x, y);
  g.scale(1, ry / r);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, r);
  gr.addColorStop(0, color);
  gr.addColorStop(1, 'rgba(250,195,107,0)');
  rect(g, -r, -r, 2 * r, 2 * r, gr);
  g.restore();
}
export function clip(g, path, paint) {
  g.save();
  g.clip(typeof path === 'string' ? new Path2D(path) : path);
  paint();
  g.restore();
}
// Tileable, multi-scale paper sizing, pulp flecks, and long bast fibres.
export function paperTile() {
  const size = 512,
    [el, g] = layer(size, size),
    r = rng(92713);
  const grids = [4, 8, 16, 32, 64, 128].map((n) => ({ n, v: Float32Array.from({ length: n * n }, r) }));
  const im = g.createImageData(size, size);
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      let v = 0,
        amp = 24;
      for (const a of grids) {
        const px = (x * a.n) / size,
          py = (y * a.n) / size,
          i = px | 0,
          j = py | 0;
        const tx = px - i,
          ty = py - j,
          k = (j + 1) % a.n,
          m = (i + 1) % a.n;
        v +=
          (mix(mix(a.v[j * a.n + i], a.v[j * a.n + m], tx), mix(a.v[k * a.n + i], a.v[k * a.n + m], tx), ty) -
            0.5) *
          amp;
        amp *= 0.85;
      }
      const k = (y * size + x) * 4,
        grain = (r() - 0.5) * 69 + (r() - 0.5) * 33,
        n = 126 + v * 1.85 + grain;
      im.data[k] = n + 6;
      im.data[k + 1] = n + 2;
      im.data[k + 2] = n - 7;
      im.data[k + 3] = 255;
    }
  g.putImageData(im, 0, 0);
  for (let i = 0; i < 6000; i++) {
    const x = r() * size,
      y = r() * size,
      len = 0.5 + r() ** 3 * 12;
    line(
      g,
      x,
      y,
      x + len,
      y + (r() - 0.5) * len,
      r() < 0.52 ? 'rgba(240,235,210,.13)' : 'rgba(25,31,32,.12)',
      0.25 + r() * 0.65
    );
  }
  return el;
}
export function texture(g, tile, x, y, w, h, alpha = 0.55) {
  g.save();
  g.globalAlpha *= alpha;
  g.globalCompositeOperation = 'soft-light';
  rect(g, x, y, w, h, g.createPattern(tile, 'repeat'));
  g.restore();
}
export function star(g, x, y, s, c) {
  shape(
    g,
    `M${x} ${y - s}q.15 ${s * 0.88} ${s * 0.7} ${s}q${-s * 0.61} .14 ${-s * 0.7} ${s}q-.15 ${-s * 0.85} ${-s * 0.7} ${-s}q${s * 0.63} -.16 ${s * 0.7} ${-s}Z`,
    c
  );
}
