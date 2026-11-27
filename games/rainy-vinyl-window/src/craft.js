import * as T from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
export { T };
export const V = (x, y, z) => new T.Vector3(x, y, z);
export const tau = Math.PI * 2;
export function random(seed) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function group(parent, x = 0, y = 0, z = 0) {
  const g = new T.Group();
  parent.add(g);
  g.position.set(x, y, z);
  return g;
}
export function mesh(parent, geometry, material, x = 0, y = 0, z = 0) {
  const m = new T.Mesh(geometry, material);
  m.position.set(x, y, z);
  parent.add(m);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}
export const mat = (color, roughness = 0.5, metalness = 0, extra = {}) =>
  new T.MeshStandardMaterial({ color, roughness, metalness, ...extra });
export const basic = (color, more = {}) =>
  new T.MeshBasicMaterial({ color, ...more });
export function box(p, w, h, d, m, x, y, z, r = 0) {
  return mesh(
    p,
    r ? new RoundedBoxGeometry(w, h, d, 2, r) : new T.BoxGeometry(w, h, d),
    m,
    x,
    y,
    z,
  );
}
export function cyl(p, rt, rb, h, m, x, y, z, n = 64) {
  return mesh(p, new T.CylinderGeometry(rt, rb, h, n), m, x, y, z);
}
export function rim(p, r, t, m, x, y, z, n = 100) {
  const o = mesh(p, new T.TorusGeometry(r, t, 8, n), m, x, y, z);
  o.rotation.x = Math.PI / 2;
  return o;
}
export function lathe(p, profile, m, x = 0, y = 0, z = 0, n = 80) {
  return mesh(
    p,
    new T.LatheGeometry(
      profile.map(([r, h]) => new T.Vector2(r, h)),
      n,
    ),
    m,
    x,
    y,
    z,
  );
}
export function tube(p, pts, r, m) {
  const curve = new T.CatmullRomCurve3(pts.map((a) => V(...a)));
  return mesh(
    p,
    new T.TubeGeometry(curve, Math.max(12, pts.length * 7), r, 10, false),
    m,
  );
}
export function rod(p, a, b, r, m, rb = r) {
  const v = V(...a),
    w = V(...b),
    delta = w.clone().sub(v);
  const o = cyl(p, r, rb, delta.length(), m, 0, 0, 0, 24);
  o.position.copy(v.addScaledVector(delta, 0.5));
  o.quaternion.setFromUnitVectors(V(0, 1, 0), delta.normalize());
  return o;
}
export function canvasMap(w, h, draw, srgb = true) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new T.CanvasTexture(c);
  if (srgb) t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function print(p, w, h, map, x, y, z, flat = false, lit = true) {
  const m = lit ? mat(0xffffff, 0.78, 0, { map }) : basic(0xffffff, { map });
  const o = mesh(p, new T.PlaneGeometry(w, h), m, x, y, z);
  if (flat) o.rotation.x = -Math.PI / 2;
  o.castShadow = false;
  return o;
}
const shadowMap = canvasMap(
  128,
  128,
  (c) => {
    const g = c.createRadialGradient(64, 64, 2, 64, 64, 64);
    g.addColorStop(0, "rgba(0,0,0,.95)");
    g.addColorStop(0.5, "rgba(0,0,0,.63)");
    g.addColorStop(1, "transparent");
    c.fillStyle = g;
    c.fillRect(0, 0, 128, 128);
  },
  false,
);
export function contact(p, x, z, w, d, y = 0.003, opacity = 0.65) {
  const o = mesh(
    p,
    new T.PlaneGeometry(w, d),
    new T.MeshBasicMaterial({
      map: shadowMap,
      transparent: true,
      opacity,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    }),
    x,
    y,
    z,
  );
  o.rotation.x = -Math.PI / 2;
  o.castShadow = o.receiveShadow = false;
  return o;
}
export async function surfaces(renderer, scene) {
  const loader = new T.TextureLoader();
  const [walnut, desk, grain] = await Promise.all(
    ["walnut", "desk", "grain"].map((k) =>
      loader.loadAsync("assets/" + k + ".jpg"),
    ),
  );
  for (const t of [walnut, desk, grain]) {
    t.wrapS = t.wrapT = T.RepeatWrapping;
    t.anisotropy = 8;
  }
  walnut.colorSpace = desk.colorSpace = T.SRGBColorSpace;
  desk.repeat.set(3.0, 1.18);
  desk.wrapS = T.MirroredRepeatWrapping;
  const env = canvasMap(1024, 512, (c, w, h) => {
    const grad = c.createLinearGradient(0, 0, 0, h);
    for (const [s, v] of [
      [0, "#544f40"],
      [0.32, "#5d6258"],
      [0.52, "#293b3c"],
      [0.7, "#25201a"],
      [1, "#312214"],
    ])
      grad.addColorStop(s, v);
    c.fillStyle = grad;
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#c3e3e3";
    c.fillRect(520, 113, 240, 104);
    c.fillStyle = "#526b71";
    for (let x = 522; x < 760; x += 76) c.fillRect(x, 113, 7, 108);
    c.fillStyle = "#fff2be";
    c.fillRect(290, 101, 106, 72);
    c.fillStyle = "#bb9569";
    c.fillRect(90, 176, 22, 151);
    c.fillStyle = "#b2c0b6";
    c.fillRect(835, 144, 84, 15);
  });
  env.mapping = T.EquirectangularReflectionMapping;
  const gen = new T.PMREMGenerator(renderer);
  const target = gen.fromEquirectangular(env);
  scene.environment = target.texture;
  scene.environmentIntensity = 0.72;
  gen.dispose();
  env.dispose();
  const brushing = canvasMap(
    384,
    192,
    (c, w, h) => {
      const rng = random(1287),
        im = c.createImageData(w, h);
      for (let y = 0; y < h; y++) {
        let stripe = rng() * 19;
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const k = 153 + stripe + rng() * 20;
          im.data[i] = im.data[i + 1] = im.data[i + 2] = k;
          im.data[i + 3] = 255;
        }
      }
      c.putImageData(im, 0, 0);
    },
    false,
  );
  return {
    wood: mat(0xffffff, 0.36, 0.04, {
      map: walnut,
      bumpMap: grain,
      bumpScale: 0.0027,
    }),
    desk: mat(0xffffff, 0.5, 0.01, {
      map: desk,
      bumpMap: grain,
      bumpScale: 0.0034,
    }),
    brass: mat(0xc39758, 0.44, 0.85, { roughnessMap: brushing }),
    aged: mat(0x8d6938, 0.4, 0.77),
    chrome: mat(0xc6cecb, 0.2, 0.95),
    ink: mat(0x151d20, 0.36, 0.36),
    rubber: mat(0x151919, 0.82),
    cream: mat(0xcab989, 0.63),
    green: mat(0x264f48, 0.26, 0.43),
  };
}
