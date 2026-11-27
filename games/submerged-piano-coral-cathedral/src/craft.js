import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
export { T };
export const V = (x, y, z) => new T.Vector3(x, y, z);
export function random(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function mat(color, roughness = 0.55, metalness = 0, opts = {}) {
  return new T.MeshStandardMaterial({ color, roughness, metalness, ...opts });
}
export function mesh(parent, g, m, x = 0, y = 0, z = 0) {
  const a = new T.Mesh(g, m);
  a.position.set(x, y, z);
  parent.add(a);
  return a;
}
export const group = (p, x = 0, y = 0, z = 0) => {
  const g = new T.Group();
  g.position.set(x, y, z);
  p.add(g);
  return g;
};
const cube = new T.BoxGeometry(1, 1, 1),
  ball = new T.SphereGeometry(1, 14, 10);
export function box(p, m, x, y, z, w, h, d) {
  const a = mesh(p, cube, m, x, y, z);
  a.scale.set(w, h, d);
  return a;
}
export function orb(p, m, x, y, z, w, h = w, d = w) {
  const a = mesh(p, ball, m, x, y, z);
  a.scale.set(w, h, d);
  return a;
}
export function rod(p, m, a, b, r, s = r, n = 10) {
  const dir = b.clone().sub(a);
  const o = mesh(p, new T.CylinderGeometry(s, r, dir.length(), n), m);
  o.position.copy(a).lerp(b, 0.5);
  o.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize());
  return o;
}
export function line(p, m, pts, r = 0.016, n = 5) {
  return mesh(
    p,
    new T.TubeGeometry(new T.CatmullRomCurve3(pts), Math.max(12, pts.length * 3), r, n, false),
    m,
  );
}
export function turned(p, m, x, z, profile, n = 32) {
  return mesh(
    p,
    new T.LatheGeometry(
      profile.map(([y, r]) => new T.Vector2(r, y)),
      n,
    ),
    m,
    x,
    0,
    z,
  );
}
// Batch immobile pieces in a group's local space, retaining separate draw calls for materials.
export function bake(p, shadow = true) {
  p.updateWorldMatrix(true, true);
  const inv = p.matrixWorld.clone().invert(),
    by = new Map();
  p.traverse((o) => {
    if (!o.isMesh) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(new T.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    if (!g.attributes.uv)
      g.setAttribute('uv', new T.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    const key = o.material;
    if (!by.has(key)) by.set(key, []);
    by.get(key).push(g);
  });
  p.clear();
  for (const [m, gs] of by) {
    const g = mergeGeometries(gs);
    const a = mesh(p, g, m);
    a.castShadow = shadow;
    a.receiveShadow = true;
    for (const small of gs) small.dispose();
  }
  return p;
}
export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export async function texture(name, repeat = 1, data = false) {
  const t = await new T.TextureLoader().loadAsync('./assets/' + name);
  t.wrapS = t.wrapT = T.RepeatWrapping;
  t.repeat.setScalar(repeat);
  if (!data) t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
