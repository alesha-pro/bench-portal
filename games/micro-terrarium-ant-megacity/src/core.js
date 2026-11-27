import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const v = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
export const mix = T.MathUtils.lerp;
export const clamp = T.MathUtils.clamp;
export function random(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let n = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n;
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}
export const rng = random(72541);
export const range = (a, b) => mix(a, b, rng());
export const standard = (color, roughness = 0.6, metalness = 0, more = {}) =>
  new T.MeshStandardMaterial({ color, roughness, metalness, ...more });
export const mats = {
  brass: standard(0xc69346, 0.27, 0.82),
  gold: standard(0xf6cf7e, 0.19, 0.83),
  tarnish: standard(0x67502b, 0.45, 0.76),
  aged: standard(0x344b40, 0.68, 0.45),
  black: standard(0x30241c, 0.41, 0.33),
  ebony: standard(0x291d16, 0.31, 0.12),
  bark: standard(0x56432b, 0.95),
  green: standard(0x669340, 0.66),
  paper: standard(0xd1c299, 0.9),
};
const sphere = new T.SphereGeometry(1, 12, 8),
  cube = new T.BoxGeometry(1, 1, 1);
export function mesh(parent, geo, material, x = 0, y = 0, z = 0) {
  let m = new T.Mesh(geo, material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
export function ell(parent, x, y, z, sx, sy, sz, mat) {
  let m = mesh(parent, sphere, mat, x, y, z);
  m.scale.set(sx, sy, sz);
  return m;
}
export function box(parent, x, y, z, w, h, d, mat) {
  let m = mesh(parent, cube, mat, x, y, z);
  m.scale.set(w, h, d);
  return m;
}
export function rod(parent, a, b, r1, r2, mat, steps = 9) {
  const d = b.clone().sub(a),
    m = mesh(parent, new T.CylinderGeometry(r2, r1, d.length(), steps), mat);
  m.position.copy(a).lerp(b, 0.5);
  m.quaternion.setFromUnitVectors(v(0, 1, 0), d.normalize());
  return m;
}
export function tube(parent, points, r, mat, n = 16, sides = 5) {
  return mesh(parent, new T.TubeGeometry(new T.CatmullRomCurve3(points), n, r, sides, false), mat);
}
export function ring(parent, x, y, z, r, t, mat, n = 80) {
  return mesh(parent, new T.TorusGeometry(r, t, 8, n), mat, x, y, z);
}
export function canvasTexture(canvas) {
  let tex = new T.CanvasTexture(canvas);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}
// Consolidate static parts by finish; all transforms become relative to this group.
export function batch(group) {
  group.updateWorldMatrix(true, true);
  const inverse = group.matrixWorld.clone().invert(),
    bins = new Map(),
    originals = [];
  group.traverse((obj) => {
    if (!obj.isMesh || obj.isInstancedMesh) return;
    let g = obj.geometry.clone().applyMatrix4(inverse.clone().multiply(obj.matrixWorld));
    if (g.index) {
      let old = g;
      g = g.toNonIndexed();
      old.dispose();
    }
    if (!g.attributes.uv)
      g.setAttribute(
        'uv',
        new T.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2),
      );
    let bin = bins.get(obj.material);
    if (!bin) bins.set(obj.material, (bin = []));
    bin.push(g);
    originals.push(obj);
  });
  originals.forEach((o) => o.removeFromParent());
  bins.forEach((geos, mat) => {
    let g = mergeGeometries(geos);
    mesh(group, g, mat);
    geos.forEach((g) => g.dispose());
  });
}
export async function photo(name) {
  let image = new Image();
  image.src = './assets/' + name + '.jpg';
  await image.decode();
  return image;
}
export function envMap(renderer, img) {
  let c = makeCanvas(512, 256),
    ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0, 512, 256);
  ctx.fillStyle = '#e4dcbd';
  ctx.fillRect(250, 45, 28, 63);
  ctx.fillRect(281, 45, 24, 63);
  ctx.fillStyle = '#f6edcf';
  ctx.fillRect(423, 72, 10, 98);
  let tex = canvasTexture(c);
  tex.mapping = T.EquirectangularReflectionMapping;
  const gen = new T.PMREMGenerator(renderer),
    env = gen.fromEquirectangular(tex);
  gen.dispose();
  tex.dispose();
  return env.texture;
}
