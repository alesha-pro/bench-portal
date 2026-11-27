import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

let seed = 199411;
export function rand() {
  seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
  return seed / 4294967296;
}
export function canvasTex(w, h, paint) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  paint(c.getContext('2d'), w, h);
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
export function ink(
  ctx,
  str,
  x,
  y,
  size,
  color = '#e9dbc0',
  bold = true,
  align = 'left',
  font = 'sans-serif',
) {
  ctx.font = (bold ? '700 ' : '') + size + 'px ' + font;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.fillText(str, x, y);
  ctx.textAlign = 'left';
}
export function speckle(c, w, h, n = 12000) {
  for (let i = 0; i < n; i++) {
    c.fillStyle = rand() < 0.58 ? 'rgba(255,239,211,.065)' : 'rgba(12,8,18,.12)';
    c.fillRect(rand() * w, rand() * h, 1 + rand() * 2, 1 + rand() * 1.5);
  }
}
export function surface(color, roughness = 0.62, metalness = 0.06, map = null) {
  return new T.MeshStandardMaterial({ color, roughness, metalness, map });
}
export const lum = (color, intensity = 1) =>
  new T.MeshBasicMaterial({ color: new T.Color(color).multiplyScalar(intensity) });
export const print = (map, bright = 0) =>
  new T.MeshStandardMaterial({
    map,
    roughness: 0.67,
    metalness: 0.025,
    emissive: 0xffffff,
    emissiveMap: map,
    emissiveIntensity: bright,
  });
export const group = (p, x = 0, y = 0, z = 0) => {
  const g = new T.Group();
  g.position.set(x, y, z);
  p.add(g);
  return g;
};
export function mesh(p, geo, mat, x = 0, y = 0, z = 0) {
  const m = new T.Mesh(geo, mat);
  m.position.set(x, y, z);
  p.add(m);
  return m;
}
const unit = new T.BoxGeometry(),
  quad = new T.PlaneGeometry(1, 1),
  rounds = new Map();
export function box(p, x, y, z, w, h, d, mat, r = 0) {
  if (r) {
    const key = [w, h, d, r].join('/');
    if (!rounds.has(key))
      rounds.set(key, new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2)));
    return mesh(p, rounds.get(key), mat, x, y, z);
  }
  const m = mesh(p, unit, mat, x, y, z);
  m.scale.set(w, h, d);
  return m;
}
export function panel(p, x, y, z, w, h, mat) {
  const m = mesh(p, quad, mat, x, y, z);
  m.scale.set(w, h, 1);
  return m;
}
export function cylinder(p, x, y, z, rt, rb, h, mat, seg = 32) {
  return mesh(p, new T.CylinderGeometry(rt, rb, h, seg), mat, x, y, z);
}
export function disk(p, x, y, z, r, h, mat) {
  const m = cylinder(p, x, y, z, r, r, h, mat, 24);
  m.rotation.x = Math.PI / 2;
  return m;
}
export function ball(p, x, y, z, sx, sy, sz, mat) {
  const m = mesh(p, new T.SphereGeometry(1, 24, 16), mat, x, y, z);
  m.scale.set(sx, sy, sz);
  return m;
}
export function wire(p, points, r, mat, segments = 48, smooth = true) {
  const pts = points.map((v) => new T.Vector3(...v));
  const path = smooth ? new T.CatmullRomCurve3(pts) : new T.CurvePath();
  if (!smooth) for (let i = 1; i < pts.length; i++) path.add(new T.LineCurve3(pts[i - 1], pts[i]));
  return mesh(p, new T.TubeGeometry(path, segments, r, 7, false), mat);
}
export const dark = surface('#22252a'),
  rubber = surface('#16161e', 0.88),
  iron = surface('#72757c', 0.38, 0.57),
  brass = surface('#bc8560', 0.39, 0.48);
export const woodMap = canvasTex(1024, 512, (c, w, h) => {
  c.fillStyle = '#795942';
  c.fillRect(0, 0, w, h);
  for (let i = 0; i < 2400; i++) {
    const y = rand() * h,
      f = rand() * 1.1 + 1,
      a = rand() * 3,
      k = rand() * 2;
    c.strokeStyle = rand() < 0.52 ? 'rgba(48,18,12,.16)' : 'rgba(230,161,91,.12)';
    c.lineWidth = rand() * 1.4 + 0.4;
    c.beginPath();
    for (let x = 0; x <= w; x += 8) {
      const v =
        y +
        Math.sin((x / w) * f * 5 + k) * a +
        Math.sin(x * 0.017 + k) * 1.2 +
        17 * Math.sin((x + y * 0.5) * 0.006) * Math.sin(y * 0.018) +
        8 * Math.sin(x * 0.011 + y * 0.018);
      c.lineTo(x, v);
    }
    c.stroke();
  }
  speckle(c, w, h, 25000);
});
export const wood = surface('#d8b397', 0.47, 0.12, woodMap);
const soft = canvasTex(256, 256, (c, w, h) => {
  let g = c.createRadialGradient(128, 128, 0, 128, 128, 127);
  g.addColorStop(0, 'rgba(5,3,12,.86)');
  g.addColorStop(0.5, 'rgba(5,3,12,.52)');
  g.addColorStop(1, 'rgba(5,3,12,0)');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
});
const sm = new T.MeshBasicMaterial({ map: soft, transparent: true, depthWrite: false });
export function shadow(p, x, y, z, w, h, floor = true) {
  let m = panel(p, x, y, z, w, h, sm);
  if (floor) m.rotation.x = -Math.PI / 2;
  return m;
}
export function label(p, x, y, z, w, h, str, bg = '#252a2b', fg = '#d1c9b5', size = 55) {
  const t = canvasTex(512, 96, (c, a, b) => {
    c.fillStyle = bg;
    c.fillRect(0, 0, a, b);
    ink(c, str, 16, 67, size, fg, true, 'left', 'monospace');
    speckle(c, a, b, 500);
  });
  return panel(p, x, y, z, w, h, print(t, 0.09));
}
// Batch rigid scenery while retaining movable parts and transparent draw order.
export function batch(root) {
  root.updateMatrixWorld(true);
  const batches = new Map(),
    remove = [];
  root.traverse((m) => {
    if (!m.isMesh || m.material.transparent || Array.isArray(m.material)) return;
    for (let p = m; p; p = p.parent) if (p.userData.dynamic) return;
    let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    if (!g.attributes.uv || !g.attributes.normal) {
      g.dispose();
      return;
    }
    g.clearGroups();
    g.applyMatrix4(m.matrixWorld);
    const key = m.material.uuid;
    if (!batches.has(key)) batches.set(key, { mat: m.material, gs: [] });
    batches.get(key).gs.push(g);
    remove.push(m);
  });
  remove.forEach((m) => m.removeFromParent());
  for (const { mat, gs } of batches.values()) {
    const g = mergeGeometries(gs);
    mesh(root, g, mat);
    gs.forEach((v) => v.dispose());
  }
}
