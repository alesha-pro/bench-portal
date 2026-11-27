import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export const V = (x, y, z) => new T.Vector3(x, y, z);
export const tau = 2 * Math.PI;
export function rng(seed) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export const std = (color, roughness = 0.55, metalness = 0, extra = {}) =>
  new T.MeshStandardMaterial({ color, roughness, metalness, ...extra });
export const group = (parent) => {
  const g = new T.Group();
  parent.add(g);
  return g;
};
export function mesh(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new T.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function box(p, w, h, d, m, x = 0, y = 0, z = 0, r = 0) {
  return mesh(p, r ? new RoundedBoxGeometry(w, h, d, 2, r) : new T.BoxGeometry(w, h, d), m, x, y, z);
}
export function ball(p, r, m, x, y, z, sx = 1, sy = 1, sz = 1) {
  const b = mesh(p, new T.SphereGeometry(r, 20, 14), m, x, y, z);
  b.scale.set(sx, sy, sz);
  return b;
}
export function rod(p, a, b, r, m, r2 = r, n = 12) {
  const v = V(...a),
    w = V(...b),
    dir = w.clone().sub(v);
  const o = mesh(p, new T.CylinderGeometry(r2, r, dir.length(), n), m);
  o.position.copy(v.add(w).multiplyScalar(0.5));
  o.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize());
  return o;
}
export function curve(p, points, r, m, steps = 24, n = 6) {
  return mesh(
    p,
    new T.TubeGeometry(new T.CatmullRomCurve3(points.map((v) => V(...v))), steps, r, n, false),
    m,
  );
}
export function ring(p, major, minor, m, x, y, z, axis = "x") {
  const o = mesh(p, new T.TorusGeometry(major, minor, 10, 80), m, x, y, z);
  if (axis === "x") o.rotation.y = Math.PI / 2;
  if (axis === "y") o.rotation.x = Math.PI / 2;
  return o;
}
export function lathe(p, profile, m, x = 0, y = 0, z = 0, n = 80) {
  return mesh(
    p,
    new T.LatheGeometry(
      profile.map(([h, r]) => new T.Vector2(r, h)),
      n,
    ),
    m,
    x,
    y,
    z,
  );
}
export function canvasTex(w, h, fn) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  fn(c.getContext("2d"), w, h);
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function geom(vertices, indices, uv = []) {
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(vertices, 3));
  if (uv.length) g.setAttribute("uv", new T.Float32BufferAttribute(uv, 2));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}
// Batch stationary fittings while preserving each material and the local pivot.
export function batch(root) {
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert(),
    sets = new Map(),
    old = [];
  root.traverse((o) => {
    if (!o.isMesh || Array.isArray(o.material)) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes))
      if (!["position", "normal", "uv"].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv)
      g.setAttribute("uv", new T.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(inverse.clone().multiply(o.matrixWorld));
    if (!sets.has(o.material)) sets.set(o.material, []);
    sets.get(o.material).push(g);
    old.push(o);
  });
  old.forEach((o) => {
    o.removeFromParent();
    o.geometry.dispose();
  });
  for (const [mat, arr] of sets) {
    mesh(root, mergeGeometries(arr), mat);
    arr.forEach((g) => g.dispose());
  }
}
export function linework(p, segments, color, opacity = 1) {
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(segments.flat(2), 3));
  const o = new T.LineSegments(g, new T.LineBasicMaterial({ color, transparent: opacity < 1, opacity }));
  p.add(o);
  return o;
}
export function radialTexture(stops) {
  return canvasTex(128, 128, (c) => {
    const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    stops.forEach(([s, col]) => g.addColorStop(s, col));
    c.fillStyle = g;
    c.fillRect(0, 0, 128, 128);
  });
}
