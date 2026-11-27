import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
export const PI = Math.PI,
  TAU = 2 * PI;
export function rng(seed) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function metal(color, rough = 0.32) {
  return new T.MeshStandardMaterial({
    color,
    metalness: 0.87,
    roughness: rough,
  });
}
export function matte(color, rough = 0.72) {
  return new T.MeshStandardMaterial({ color, roughness: rough });
}
export const brass = metal(0xbc8b48),
  gold = metal(0xe5b967, 0.25),
  antique = metal(0x685238, 0.45),
  iron = metal(0x302f2d, 0.48),
  black = matte(0x202221);
export function group(parent, x = 0, y = 0, z = 0) {
  let g = new T.Group();
  parent.add(g);
  g.position.set(x, y, z);
  return g;
}
export function mesh(parent, geo, mat, x = 0, y = 0, z = 0) {
  const o = new T.Mesh(geo, mat);
  parent.add(o);
  o.position.set(x, y, z);
  o.castShadow = o.receiveShadow = true;
  return o;
}
const boxGeo = new T.BoxGeometry();
export function box(p, x, y, z, w, h, d, m) {
  const o = mesh(p, boxGeo, m, x, y, z);
  o.scale.set(w, h, d);
  return o;
}
export function cyl(p, x, y, z, rb, rt, h, mat, seg = 36) {
  return mesh(p, new T.CylinderGeometry(rt, rb, h, seg), mat, x, y, z);
}
export function turn(p, x, y, z, profile, mat, n = 48) {
  return mesh(
    p,
    new T.LatheGeometry(
      profile.map(([r, h]) => new T.Vector2(r, h)),
      n,
    ),
    mat,
    x,
    y,
    z,
  );
}
export function rod(p, a, b, r, mat, r2 = r, n = 10) {
  const u = new T.Vector3(...a),
    v = new T.Vector3(...b),
    d = v.clone().sub(u),
    mid = u.addScaledVector(d, 0.5);
  const o = cyl(p, mid.x, mid.y, mid.z, r, r2, d.length(), mat, n);
  o.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d.normalize());
  return o;
}
export function ball(p, x, y, z, r, mat, s = 24) {
  return mesh(p, new T.SphereGeometry(r, s, Math.max(8, s / 2)), mat, x, y, z);
}
export function ring(p, x, y, z, r, tube, mat) {
  return mesh(p, new T.TorusGeometry(r, tube, 8, 72), mat, x, y, z);
}
export function flatRing(p, x, y, z, r, tube, mat) {
  let o = ring(p, x, y, z, r, tube, mat);
  o.rotation.x = PI / 2;
  return o;
}
export function canvasTexture(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function plane(p, x, y, z, w, h, mat) {
  return mesh(p, new T.PlaneGeometry(w, h), mat, x, y, z);
}
export function top(p, x, y, z, w, h, mat) {
  const o = plane(p, x, y, z, w, h, mat);
  o.rotation.x = -PI / 2;
  return o;
}
export function mapped(t, opts = {}) {
  return new T.MeshStandardMaterial({ map: t, roughness: 0.78, ...opts });
}
export function batch(root) {
  root.updateWorldMatrix(true, true);
  const inv = root.matrixWorld.clone().invert(),
    bins = new Map();
  root.traverse((o) => {
    if (!o.isMesh || Array.isArray(o.material)) return;
    const key =
      o.material.uuid +
      "|" +
      o.castShadow +
      "|" +
      o.receiveShadow +
      "|" +
      o.renderOrder;
    if (!bins.has(key)) bins.set(key, []);
    bins.get(key).push(o);
  });
  for (const objects of bins.values()) {
    if (objects.length < 2) continue;
    const gs = objects.map((o) => {
      const g = o.geometry.index
        ? o.geometry.toNonIndexed()
        : o.geometry.clone();
      for (const k in g.attributes)
        if (!["position", "normal", "uv"].includes(k)) g.deleteAttribute(k);
      return g.applyMatrix4(
        new T.Matrix4().multiplyMatrices(inv, o.matrixWorld),
      );
    });
    const g = mergeGeometries(gs);
    if (!g) continue;
    const first = objects[0],
      m = mesh(root, g, first.material);
    m.castShadow = first.castShadow;
    m.receiveShadow = first.receiveShadow;
    m.renderOrder = first.renderOrder;
    for (const o of objects) o.removeFromParent();
    for (const g of gs) g.dispose();
  }
}
let soft;
export function shade(p, x, z, w, d, opacity = 0.38, y = 0.016) {
  if (!soft)
    soft = canvasTexture(128, 128, (c) => {
      let g = c.createRadialGradient(64, 64, 1, 64, 64, 64);
      g.addColorStop(0, "rgba(16,9,4,.96)");
      g.addColorStop(0.46, "rgba(16,9,4,.65)");
      g.addColorStop(1, "rgba(16,9,4,0)");
      c.fillStyle = g;
      c.fillRect(0, 0, 128, 128);
    });
  const m = new T.MeshBasicMaterial({
    map: soft,
    transparent: true,
    opacity,
    depthWrite: false,
  });
  let o = top(p, x, y, z, w, d, m);
  o.receiveShadow = o.castShadow = false;
  o.renderOrder = 1;
  return o;
}
