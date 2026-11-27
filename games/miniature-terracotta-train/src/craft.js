import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export { T };
export const tau = 2 * Math.PI,
  clamp = T.MathUtils.clamp,
  mix = T.MathUtils.lerp;
export const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
export const smooth = (a, b, x) => T.MathUtils.smoothstep(x, a, b);
export function random(seed = 1) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
const rng = random(785);
export const mat = (color, roughness = 0.72, metalness = 0, extra = {}) =>
  new T.MeshStandardMaterial({ color, roughness, metalness, ...extra });
export function group(parent) {
  const g = new T.Group();
  parent?.add(g);
  return g;
}
export function mesh(p, geo, m, x = 0, y = 0, z = 0) {
  const o = new T.Mesh(geo, m);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  p.add(o);
  return o;
}
const cube = new T.BoxGeometry(),
  ball = new T.SphereGeometry(1, 20, 12);
export function box(p, x, y, z, w, h, d, m) {
  const o = mesh(p, cube, m, x, y, z);
  o.scale.set(w, h, d);
  return o;
}
export function egg(p, x, y, z, w, h, d, m) {
  const o = mesh(p, ball, m, x, y, z);
  o.scale.set(w, h, d);
  return o;
}
export function cyl(p, x, y, z, rt, rb, h, m, axis = 'y', n = 24) {
  const o = mesh(p, new T.CylinderGeometry(rt, rb, h, n), m, x, y, z);
  if (axis === 'x') o.rotation.z = -Math.PI / 2;
  if (axis === 'z') o.rotation.x = Math.PI / 2;
  return o;
}
export function beam(p, a, b, r, m, n = 8) {
  const v = V(...b).sub(V(...a)),
    o = cyl(p, 0, 0, 0, r, r, v.length(), m, 'y', n);
  o.position.copy(V(...a)).addScaledVector(v, 0.5);
  o.quaternion.setFromUnitVectors(V(0, 1, 0), v.normalize());
  return o;
}
export function pipe(p, pts, r, m) {
  const curve = new T.CatmullRomCurve3(pts.map((q) => V(...q)));
  return mesh(p, new T.TubeGeometry(curve, pts.length * 5, r, 7, false), m);
}
export function torus(p, x, y, z, major, minor, m, axis = 'z') {
  const o = mesh(p, new T.TorusGeometry(major, minor, 8, 48), m, x, y, z);
  if (axis === 'x') o.rotation.y = Math.PI / 2;
  if (axis === 'y') o.rotation.x = Math.PI / 2;
  return o;
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
export function repeat(t, x = 1, y = 1) {
  t.wrapS = t.wrapT = T.RepeatWrapping;
  t.repeat.set(x, y);
  return t;
}
export const textureJobs = [];
export const loader = new T.TextureLoader();
export function photo(name) {
  let t;
  textureJobs.push(
    new Promise((done, fail) => {
      t = loader.load('assets/' + name, done, undefined, fail);
    }),
  );
  t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function sign(
  p,
  x,
  y,
  z,
  w,
  h,
  word,
  { bg = '#183835', ink = '#ffe1a0', font = 'bold 74px Georgia', rim = true } = {},
) {
  const t = canvasTex(768, 192, (c, W, H) => {
    c.fillStyle = bg;
    c.fillRect(0, 0, W, H);
    c.strokeStyle = ink;
    c.lineWidth = 4;
    if (rim) {
      c.strokeRect(7, 7, W - 14, H - 14);
      c.lineWidth = 1;
      c.strokeRect(15, 15, W - 30, H - 30);
    }
    c.fillStyle = ink;
    c.font = font;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(word, W / 2, H * 0.51, W * 0.91);
  });
  return mesh(p, new T.PlaneGeometry(w, h), mat(0xffffff, 0.65, 0.08, { map: t }), x, y, z);
}
// Static assemblies retain their parent transform while sharing a draw call per finish.
export function batch(root) {
  root.updateWorldMatrix(true, true);
  const inv = root.matrixWorld.clone().invert(),
    sets = new Map(),
    remove = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || o.userData.keep) return;
    const id = o.material.uuid + o.castShadow + o.receiveShadow,
      entry = sets.get(id) || { o, geos: [] };
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const key of Object.keys(g.attributes))
      if (!['position', 'normal', 'uv', 'color'].includes(key)) g.deleteAttribute(key);
    if (!g.attributes.uv)
      g.setAttribute('uv', new T.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(new T.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    entry.geos.push(g);
    sets.set(id, entry);
    remove.push(o);
  });
  for (const o of remove) o.removeFromParent();
  for (const { o, geos } of sets.values()) {
    const g = mergeGeometries(geos);
    if (!g) throw Error('Incompatible finish geometry');
    const merged = mesh(root, g, o.material);
    merged.castShadow = o.castShadow;
    merged.receiveShadow = o.receiveShadow;
    geos.forEach((a) => a.dispose());
  }
}
const woodTex = canvasTex(768, 256, (c, w, h) => {
  c.fillStyle = '#bc8a62';
  c.fillRect(0, 0, w, h);
  for (let j = 0; j < 3500; j++) {
    const y = rng() * h,
      amp = rng() * 4,
      k = rng() * 5 + 0.5;
    c.strokeStyle = rng() > 0.47 ? 'rgba(72,32,13,.16)' : 'rgba(255,211,146,.16)';
    c.lineWidth = 0.4 + rng() * 1.8;
    c.beginPath();
    for (let x = -5; x <= w + 10; x += 8)
      c.lineTo(
        x,
        y + amp * Math.sin((x / w) * k * 3 + y * 0.012) + Math.sin(x * 0.022 + y * 0.41) * 0.7,
      );
    c.stroke();
  }
});
const frost = canvasTex(256, 256, (c, w, h) => {
  const data = c.createImageData(w, h);
  for (let j = 0; j < data.data.length; j += 4) {
    let a = 220 + rng() * 35;
    data.data[j] = a;
    data.data[j + 1] = a;
    data.data[j + 2] = Math.min(255, a + 4);
    data.data[j + 3] = 255;
  }
  c.putImageData(data, 0, 0);
});
const stoneTex = repeat(photo('ashlar.jpg'), 0.3, 0.3);
export const M = {
  green: mat(0x21554a, 0.27, 0.55),
  darkGreen: mat(0x103831, 0.35, 0.49),
  brass: mat(0xe1ab53, 0.24, 0.79),
  oldGold: mat(0xa87841, 0.47, 0.61),
  steel: mat(0xa9bec1, 0.29, 0.78),
  iron: mat(0x252d30, 0.46, 0.56),
  black: mat(0x171e22, 0.55, 0.4),
  red: mat(0x813b30, 0.38, 0.46),
  cream: mat(0xe7d3a8, 0.61, 0.12),
  white: mat(0xe6e4d5),
  wood: mat(0x925b37, 0.72, 0.02, { map: woodTex }),
  teak: mat(0xd1925a, 0.43, 0.14, { map: woodTex }),
  oak: mat(0xa07251, 0.5, 0.08, { map: repeat(woodTex.clone(), 4, 3) }),
  stone: mat(0xc7c4bf, 0.91, 0, { map: stoneTex, bumpMap: stoneTex, bumpScale: 0.063 }),
  rock: mat(0x747e80, 0.94),
  snow: mat(0xf2f5ff, 0.91, 0.01, { map: repeat(frost, 12, 12) }),
  lamp: mat(0xffe4a0, 0.28, 0.08, { emissive: 0xffb85d, emissiveIntensity: 3.1 }),
  amber: mat(0xffcf80, 0.46, 0, { emissive: 0xff9534, emissiveIntensity: 1.5 }),
  bark: mat(0x604738),
  roof: mat(0x434b4b, 0.84, 0.1),
  mortar: mat(0x64615d, 0.94),
  coal: mat(0x1c2026, 0.81, 0.16),
  ice: mat(0x6aaeb8, 0.21, 0.43),
};
