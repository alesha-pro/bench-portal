import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export { T };
export const TAU = Math.PI * 2,
  V = (x, y, z) => new T.Vector3(x, y, z);
let seed = 3297;
export function rand(a = 0, b = 1) {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return a + ((b - a) * seed) / 4294967296;
}
export const clamp = T.MathUtils.clamp;
export function ease(a, b, t) {
  const u = clamp((t - a) / (b - a), 0, 1);
  return u * u * (3 - 2 * u);
}
export function group(parent, x = 0, y = 0, z = 0) {
  const g = new T.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
export const loader = new T.LoadingManager();
const textures = new T.TextureLoader(loader);
export function texture(name, repeat = [1, 1]) {
  const t = textures.load('./assets/' + name);
  t.colorSpace = T.SRGBColorSpace;
  t.wrapS = t.wrapT = T.RepeatWrapping;
  t.repeat.set(...repeat);
  t.anisotropy = 8;
  return t;
}
export const tex = {};
for (const n of ['enamel', 'bronze', 'bark', 'moss', 'brick', 'patina'])
  tex[n] = texture(n + '.jpg');
export function standard(color, roughness = 0.68, metalness = 0.05, map = null, bump = 0) {
  return new T.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    map,
    bumpMap: bump ? map : null,
    bumpScale: bump,
  });
}
export const m = {
  ivory: standard(0xf0ead3, 0.63, 0.25, tex.enamel, 0.014),
  sage: standard(0xddede3, 0.63, 0.36, tex.patina, 0.02),
  bronze: standard(0xf5e4c9, 0.59, 0.55, tex.bronze, 0.013),
  iron: standard(0x455b54, 0.78, 0.46, tex.bronze, 0.008),
  gold: standard(0xa18a62, 0.42, 0.68),
  brass: standard(0xb98b54, 0.45, 0.63),
  dark: standard(0x222b29, 0.64, 0.5),
  moss: standard(0xb3be83, 0.99, 0, tex.moss, 0.023),
  bark: standard(0xb7b1a0, 0.94, 0.01, tex.bark, 0.075),
  stone: standard(0xa5a591, 0.93, 0.02, tex.enamel, 0.045),
  soil: standard(0x544e32, 0.99, 0, tex.moss, 0.045),
  vine: standard(0x615841, 0.87, 0),
  water: standard(0x668c7b, 0.18, 0.5),
};
export const G = {
  box: new T.BoxGeometry(1, 1, 1),
  ball: new T.SphereGeometry(1, 28, 18),
  small: new T.SphereGeometry(1, 10, 7),
  cyl: new T.CylinderGeometry(1, 1, 1, 24),
  pipe: new T.CylinderGeometry(1, 1, 1, 10),
  bolt: new T.CylinderGeometry(1, 1, 1, 6),
  tor: new T.TorusGeometry(1, 0.065, 10, 56),
};
export function mesh(parent, geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) {
  const o = new T.Mesh(geo, mat);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  o.castShadow = o.receiveShadow = true;
  parent.add(o);
  return o;
}
export const ball = (p, mat, x, y, z, a, b = a, c = a) => mesh(p, G.ball, mat, x, y, z, a, b, c);
export const pebble = (p, mat, x, y, z, a, b = a, c = a) => mesh(p, G.small, mat, x, y, z, a, b, c);
export const box = (p, mat, x, y, z, a, b, c) => mesh(p, G.box, mat, x, y, z, a, b, c);
export function rod(p, mat, from, to, r, geo = G.pipe) {
  const a = V(...from),
    d = V(...to).sub(a),
    o = mesh(p, geo, mat, 0, 0, 0, r, d.length(), r);
  o.position.copy(a).addScaledVector(d, 0.5);
  o.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
  return o;
}
export function ring(p, mat, x, y, z, r, thick = 0.035, ys = 1) {
  const o = mesh(p, new T.TorusGeometry(r, thick, 9, 64), mat, x, y, z);
  o.scale.y = ys;
  return o;
}
export function lathe(p, mat, profile, x = 0, y = 0, z = 0, sx = 1, sz = 1, segments = 48) {
  const geo = new T.LatheGeometry(
    profile.map(([r, h]) => new T.Vector2(r, h)),
    segments,
  );
  return mesh(p, geo, mat, x, y, z, sx, 1, sz);
}
export function branch(p, mat, points, r1, r2 = r1, segments = 16, sides = 8, flute = 0) {
  const curve = new T.CatmullRomCurve3(points.map((v) => V(...v)));
  const geo = new T.TubeGeometry(curve, segments, 1, sides, false),
    pos = geo.attributes.position;
  for (let i = 0; i <= segments; i++) {
    const u = i / segments,
      center = curve.getPointAt(u);
    for (let j = 0; j <= sides; j++) {
      const idx = i * (sides + 1) + j,
        off = V().fromBufferAttribute(pos, idx).sub(center);
      off.multiplyScalar(
        T.MathUtils.lerp(r1, r2, u) * (1 + flute * Math.sin((j / sides) * TAU * 3 + u * 6)),
      );
      pos.setXYZ(idx, center.x + off.x, center.y + off.y, center.z + off.z);
    }
  }
  geo.computeVertexNormals();
  return mesh(p, geo, mat);
}
// Form each rigid subassembly into a small number of draws while preserving moving pivots.
export function bake(root) {
  const sets = new Map(),
    instances = new Map();
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert();
  function visit(o) {
    if (o.userData.moving) return;
    if (o.isMesh) {
      if (o.material.transparent) return;
      const key = o.geometry.uuid + o.material.uuid;
      if (!instances.has(key)) instances.set(key, []);
      instances.get(key).push(o);
      return;
    }
    for (const child of [...o.children]) visit(child);
  }
  for (const o of [...root.children]) visit(o);
  const local = (o) => new T.Matrix4().multiplyMatrices(inverse, o.matrixWorld);
  for (const list of instances.values()) {
    const { geometry, material } = list[0];
    if (list.length >= 5) {
      const inst = new T.InstancedMesh(geometry, material, list.length);
      list.forEach((o, i) => inst.setMatrixAt(i, local(o)));
      inst.castShadow = inst.receiveShadow = true;
      root.add(inst);
    } else {
      if (!sets.has(material)) sets.set(material, []);
      for (const o of list) {
        const geo = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
        geo.applyMatrix4(local(o));
        sets.get(material).push(geo);
      }
    }
    list.forEach((o) => o.removeFromParent());
  }
  for (const [mat, geos] of sets) {
    const merged = mergeGeometries(geos);
    mesh(root, merged, mat);
    geos.forEach((g) => g.dispose());
  }
}
export function canvasMap(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function environment(scene) {
  const env = canvasMap(1024, 512, (c, w, h) => {
    const grad = c.createLinearGradient(0, 0, 0, h);
    for (const [s, k] of [
      [0, '#9eafa9'],
      [0.35, '#e7ddbc'],
      [0.48, '#c2c4a2'],
      [0.58, '#627164'],
      [0.78, '#494135'],
      [1, '#2e3127'],
    ])
      grad.addColorStop(s, k);
    c.fillStyle = grad;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 18; i++) {
      c.fillStyle = i % 3 ? '#fff2c9' : '#a1bab0';
      c.fillRect(i * 67, 90, rand(4, 26), rand(22, 116));
    }
  });
  env.mapping = T.EquirectangularReflectionMapping;
  scene.environment = env;
  scene.environmentIntensity = 0.65;
}
