import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

export const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
export const tau = Math.PI * 2;
let seed = 240319;
export function random() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
}
export const range = (a, b) => a + (b - a) * random();
export const curve = (points) =>
  new T.CatmullRomCurve3(points.map((p) => (Array.isArray(p) ? V(...p) : p)));
export const metal = (color, metalness = 0.75, roughness = 0.32, extra = {}) =>
  new T.MeshStandardMaterial({ color, metalness, roughness, ...extra });
export const ink = (color) => new T.MeshBasicMaterial({ color });
export const P = {
  bronze: metal(0x805034, 0.84, 0.31),
  gold: metal(0xd8a354, 0.85, 0.26),
  brass: metal(0xb18256, 0.84, 0.34),
  copper: metal(0xac6545, 0.83, 0.31),
  graphite: metal(0x22252b, 0.73, 0.3),
  ceramic: metal(0x252c30, 0.36, 0.46),
  enamel: metal(0x101d22, 0.49, 0.22),
  jade: metal(0x165746, 0.55, 0.34),
  chrome: metal(0xb7c4b8, 0.86, 0.22),
  black: metal(0x151719, 0.42, 0.53),
  turquoise: metal(0x61bcb3, 0.45, 0.28, {
    emissive: 0x14a6ae,
    emissiveIntensity: 0.4,
  }),
  hot: ink(new T.Color(4.8, 1.1, 0.13)),
  cyan: ink(new T.Color(0.18, 1.65, 1.64)),
  cream: ink(new T.Color(1.5, 0.79, 0.34)),
};
const batches = new Map();
const dummy = new T.Object3D();
const boxGeo = new T.BoxGeometry();
export function place(geo, material, pos = V(), scale = V(1, 1, 1), rotation) {
  dummy.position.copy(pos);
  dummy.scale.copy(scale);
  dummy.rotation.set(0, 0, 0);
  if (rotation?.isQuaternion) dummy.quaternion.copy(rotation);
  else if (rotation) dummy.rotation.set(...rotation);
  dummy.updateMatrix();
  const g = geo.clone().applyMatrix4(dummy.matrix);
  if (!g.index)
    g.setIndex(
      Array.from({ length: g.attributes.position.count }, (_, i) => i),
    );
  if (!batches.has(material)) batches.set(material, []);
  batches.get(material).push(g);
}
export function flush(scene) {
  for (const [mat, items] of batches) {
    // Shared primitives and custom swept meshes carry the same attribute set.
    const merged = mergeGeometries(items);
    const part = new T.Mesh(merged, mat);
    part.castShadow = !mat.transparent;
    part.receiveShadow = mat.isMeshStandardMaterial;
    scene.add(part);
    for (const g of items) g.dispose();
  }
  batches.clear();
}
export function box(x, y, z, w, h, d, mat, rot) {
  place(boxGeo, mat, V(x, y, z), V(w, h, d), rot);
}
export function cylinder(
  x,
  y,
  z,
  top,
  bottom,
  height,
  mat,
  n = 24,
  scaleZ = 1,
  turn = 0,
) {
  const g = new T.CylinderGeometry(
    top,
    bottom,
    height,
    n,
    1,
    false,
    Math.PI / n,
  );
  place(g, mat, V(x, y, z), V(1, 1, scaleZ), [0, turn, 0]);
}
export function pipe(path, r, mat, steps = 20, sides = 6) {
  place(new T.TubeGeometry(path, steps, r, sides, false), mat);
}
export function ring(x, y, z, r, t, mat, n = 32) {
  place(new T.TorusGeometry(r, t, 6, n), mat, V(x, y, z), V(1, 1, 1), [
    Math.PI / 2,
    0,
    0,
  ]);
}
export function lineBetween(a, b, r, mat, n = 8) {
  const d = b.clone().sub(a);
  place(
    new T.CylinderGeometry(r, r, d.length(), n),
    mat,
    a.clone().lerp(b, 0.5),
    V(1, 1, 1),
    new T.Quaternion().setFromUnitVectors(V(0, 1, 0), d.normalize()),
  );
}
// A swept, fluted surface. The grain follows the local bend instead of the world axes.
export function taper(
  path,
  r0,
  r1,
  mat,
  { steps = 32, sides = 16, flute = 0.07, twist = 3, phase = 0 } = {},
) {
  const f = path.computeFrenetFrames(steps, false),
    pos = [],
    uv = [],
    idx = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps,
      c = path.getPointAt(t),
      r = T.MathUtils.lerp(r0, r1, t);
    for (let j = 0; j <= sides; j++) {
      const a = (j / sides) * tau,
        rr =
          r *
          (1 +
            flute * Math.sin(5 * a + t * twist + phase) +
            flute * 0.46 * Math.sin(9 * a - t * twist + phase));
      const p = c
        .clone()
        .addScaledVector(f.normals[i], Math.cos(a) * rr)
        .addScaledVector(f.binormals[i], Math.sin(a) * rr);
      pos.push(...p.toArray());
      uv.push(j / sides, t);
      if (i < steps && j < sides) {
        const k = i * (sides + 1) + j;
        idx.push(k, k + 1, k + sides + 1, k + 1, k + sides + 2, k + sides + 1);
      }
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new T.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  place(g, mat);
}
export function canvasTexture(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
