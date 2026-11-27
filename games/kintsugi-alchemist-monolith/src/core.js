import * as T from "three";

export const TAU = Math.PI * 2;
export const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
export const smooth = (a, b, x) => {
  const u = clamp((x - a) / (b - a));
  return u * u * (3 - 2 * u);
};
export const fract = (x) => x - Math.floor(x);
export function random(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let v = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    v ^= v + Math.imul(v ^ (v >>> 7), 61 | v);
    return ((v ^ (v >>> 14)) >>> 0) / 4294967296;
  };
}
export function geometry(p, n, uv, index) {
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(p, 3));
  if (n) g.setAttribute("normal", new T.Float32BufferAttribute(n, 3));
  if (uv) g.setAttribute("uv", new T.Float32BufferAttribute(uv, 2));
  if (index) g.setIndex(index);
  if (!n) g.computeVertexNormals();
  return g;
}
export function canvasMap(w, h, paint, color = true) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  paint(canvas.getContext("2d"), w, h);
  const map = new T.CanvasTexture(canvas);
  if (color) map.colorSpace = T.SRGBColorSpace;
  map.wrapS = map.wrapT = T.RepeatWrapping;
  map.anisotropy = 4;
  return map;
}
export function studioEnvironment(renderer) {
  // Linear HDR radiance: long paper screens and compact specular cards.
  const w = 256,
    h = 128,
    data = new Float32Array(w * h * 4);
  const lobes = [
    [0.55, 0.31, 0.14, 0.17, [2.3, 3.2, 3.7]],
    [0.79, 0.44, 0.032, 0.2, [5.0, 3.1, 1.3]],
    [0.18, 0.23, 0.075, 0.14, [2.4, 3.2, 3.8]],
    [0.94, 0.68, 0.16, 0.08, [0.6, 0.33, 0.15]],
  ];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const u = x / w,
        v = y / h,
        i = (y * w + x) * 4;
      const c = [0.065, 0.098, 0.112];
      for (const [cx, cy, sx, sy, col] of lobes) {
        const du = Math.min(Math.abs(u - cx), 1 - Math.abs(u - cx));
        const light = Math.exp(
          -Math.pow(du / sx, 4) - Math.pow((1 - v - cy) / sy, 4),
        );
        for (let k = 0; k < 3; k++) c[k] += col[k] * light;
      }
      data.set([...c, 1], i);
    }
  const map = new T.DataTexture(data, w, h, T.RGBAFormat, T.FloatType);
  map.mapping = T.EquirectangularReflectionMapping;
  map.needsUpdate = true;
  const pmrem = new T.PMREMGenerator(renderer),
    target = pmrem.fromEquirectangular(map);
  map.dispose();
  pmrem.dispose();
  return target;
}
export function radialMap() {
  return canvasMap(64, 64, (c, w, h) => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.12, "rgba(255,255,255,.98)");
    g.addColorStop(0.3, "rgba(255,255,255,.32)");
    g.addColorStop(0.65, "rgba(255,255,255,.065)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  });
}
export const LOCK = 21.72;
export const amountAt = (t) =>
  smooth(3.8, 11.8, t) * (1 - smooth(16.1, LOCK, t));
export const phaseAt = (t) =>
  t < 3.8
    ? "Stillness"
    : t < 11.8
      ? "Fracture"
      : t < 16.1
        ? "Constellation"
        : t < LOCK
          ? "Goldwork"
          : "Restoration";
