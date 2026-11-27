import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU } from './motion.js';

export function add(group, geometry, material, x = 0, y = 0, z = 0) {
  const mesh = new T.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  group.add(mesh);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}
export function turn(group, profile, mat, segments = 160) {
  return add(
    group,
    new T.LatheGeometry(
      profile.map(([r, y]) => new T.Vector2(r, y)),
      segments,
    ),
    mat,
  );
}
export function disk(group, r, y, h, mat, segments = 160) {
  return add(group, new T.CylinderGeometry(r, r, h, segments), mat, 0, y, 0);
}
export function hoop(group, r, y, wire, mat, seg = 160) {
  const m = add(group, new T.TorusGeometry(r, wire, 8, seg), mat, 0, y, 0);
  m.rotation.x = -Math.PI / 2;
  return m;
}
export function annulus(group, inner, outer, y, mat, n = 192) {
  const m = add(group, new T.RingGeometry(inner, outer, n), mat, 0, y, 0);
  m.rotation.x = -Math.PI / 2;
  return m;
}
export function rod(group, a, b, r, mat, n = 12) {
  const aa = new T.Vector3(...a),
    bb = new T.Vector3(...b),
    v = bb.clone().sub(aa);
  const m = add(group, new T.CylinderGeometry(r, r, v.length(), n), mat);
  m.position.copy(aa).lerp(bb, 0.5);
  m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), v.normalize());
  return m;
}
export function fluted(group, r1, r2, y, h, depth, count, mat) {
  const n = count * 6,
    xyz = [],
    uv = [],
    idx = [];
  for (let j = 0; j < 5; j++)
    for (let i = 0; i <= n; i++) {
      const t = j / 4,
        a = (i / n) * TAU;
      const r =
        T.MathUtils.lerp(r1, r2, t) +
        0.014 * Math.sin(t * Math.PI) -
        depth * Math.pow(0.5 - 0.5 * Math.cos(a * count), 0.72);
      xyz.push(r * Math.sin(a), y + t * h, r * Math.cos(a));
      uv.push(i / n, t);
    }
  for (let j = 0; j < 4; j++)
    for (let i = 0; i < n; i++) {
      const a = j * (n + 1) + i,
        b = a + n + 1;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  const g = new T.BufferGeometry()
    .setAttribute('position', new T.Float32BufferAttribute(xyz, 3))
    .setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return add(group, g, mat);
}
// Batch rigid parts in their parent's coordinate frame. Preserve individual shadow flags.
export function batch(group) {
  group.updateWorldMatrix(true, true);
  const buckets = new Map(),
    inv = group.matrixWorld.clone().invert(),
    local = new T.Matrix4();
  group.traverse((m) => {
    if (!m.isMesh) return;
    const mat = m.material,
      key = mat.uuid + String(m.castShadow) + String(m.receiveShadow);
    if (!buckets.has(key))
      buckets.set(key, { mat, cast: m.castShadow, receive: m.receiveShadow, parts: [] });
    const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    for (const attr of Object.keys(g.attributes))
      if (!['position', 'normal', 'uv'].includes(attr)) g.deleteAttribute(attr);
    g.applyMatrix4(local.multiplyMatrices(inv, m.matrixWorld));
    buckets.get(key).parts.push(g);
  });
  group.clear();
  for (const { mat, cast, receive, parts } of buckets.values()) {
    const geom = mergeGeometries(parts),
      m = new T.Mesh(geom, mat);
    m.castShadow = cast;
    m.receiveShadow = receive;
    group.add(m);
    for (const g of parts) g.dispose();
  }
}
