import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export const world = new T.Scene(),
  v = (x, y, z) => new T.Vector3(x, y, z),
  TAU = Math.PI * 2;
let seed = 197907;
export function random(a = 0, b = 1) {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return a + ((b - a) * seed) / 4294967296;
}
export const group = (x = 0, y = 0, z = 0, parent = world) => {
  const g = new T.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
};
export function mat(color, roughness = 0.62, metalness = 0.05, map = null) {
  return new T.MeshStandardMaterial({ color, roughness, metalness, map });
}
export function lit(color, intensity = 1) {
  return new T.MeshBasicMaterial({ color: new T.Color(color).multiplyScalar(intensity) });
}
export function mesh(geo, m, x, y, z, parent = world) {
  const o = new T.Mesh(geo, m);
  o.position.set(x, y, z);
  parent.add(o);
  return o;
}
const cube = new T.BoxGeometry(1, 1, 1),
  plane = new T.PlaneGeometry(1, 1),
  sphere = new T.SphereGeometry(1, 18, 12),
  geos = new Map();
export function box(x, y, z, w, h, d, m, p = world) {
  const o = mesh(cube, m, x, y, z, p);
  o.scale.set(w, h, d);
  return o;
}
export function rounded(x, y, z, w, h, d, r, m, p = world) {
  return mesh(new RoundedBoxGeometry(w, h, d, 2, r), m, x, y, z, p);
}
export function face(x, y, z, w, h, m, p = world) {
  const o = mesh(plane, m, x, y, z, p);
  o.scale.set(w, h, 1);
  return o;
}
export function ball(x, y, z, rx, ry, rz, m, p = world) {
  const o = mesh(sphere, m, x, y, z, p);
  o.scale.set(rx, ry, rz);
  return o;
}
export function cyl(x, y, z, rt, rb, h, m, p = world, n = 24) {
  const key = n + "_" + rt + "_" + rb;
  if (!geos.has(key)) geos.set(key, new T.CylinderGeometry(rt, rb, 1, n));
  const o = mesh(geos.get(key), m, x, y, z, p);
  o.scale.y = h;
  return o;
}
export function ring(x, y, z, r, t, m, p = world) {
  const k = "r" + r + "_" + t;
  if (!geos.has(k)) geos.set(k, new T.TorusGeometry(r, t, 7, 38));
  return mesh(geos.get(k), m, x, y, z, p);
}
export function rod(a, b, r, m, p = world, n = 10) {
  const dir = v(...b).sub(v(...a));
  const o = cyl(0, 0, 0, r, r, dir.length(), m, p, n);
  o.position.copy(
    v(...a)
      .add(v(...b))
      .multiplyScalar(0.5),
  );
  o.quaternion.setFromUnitVectors(v(0, 1, 0), dir.normalize());
  return o;
}
export function tube(points, r, m, p = world, steps = 24) {
  return mesh(
    new T.TubeGeometry(new T.CatmullRomCurve3(points.map((q) => v(...q))), steps, r, 6, false),
    m,
    0,
    0,
    0,
    p,
  );
}
export function lathe(x, y, z, profile, m, p = world) {
  return mesh(
    new T.LatheGeometry(
      profile.map(([r, h]) => new T.Vector2(r, h)),
      42,
    ),
    m,
    x,
    y,
    z,
    p,
  );
}
// Fold rigid subassemblies into one draw per material. Moving joints keep their own local transforms.
export function batch(root) {
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert(),
    buckets = new Map(),
    remove = [];
  function collect(o) {
    if (o !== root && o.userData.moving) return;
    if (o.isMesh) {
      const m = o.material;
      if (!Array.isArray(m) && !m.transparent) {
        let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
        for (const k of Object.keys(g.attributes))
          if (!["position", "normal", "uv"].includes(k)) g.deleteAttribute(k);
        g.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse, o.matrixWorld));
        if (!buckets.has(m)) buckets.set(m, []);
        buckets.get(m).push(g);
        remove.push(o);
      }
    }
    for (const child of o.children) collect(child);
  }
  collect(root);
  remove.forEach((o) => o.removeFromParent());
  for (const [m, gs] of buckets) {
    const combined = mergeGeometries(gs, false);
    root.add(new T.Mesh(combined, m));
    gs.forEach((g) => g.dispose());
  }
}
export function moving(g) {
  g.userData.moving = true;
  return g;
}
export function canvasTex(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function paper(tex, brightness = 1) {
  const m = new T.MeshBasicMaterial({ map: tex });
  m.color.multiplyScalar(brightness);
  return m;
}
export function wear(ctx, w, h, n = 2000) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = random() < 0.55 ? "rgba(9,7,8,.13)" : "rgba(255,229,192,.14)";
    ctx.fillRect(random(0, w), random(0, h), random(0.4, 2.8), random(0.4, 1.8));
  }
}
function finish(type) {
  return canvasTex(512, 512, (c, w, h) => {
    const floor = type === "cement",
      wood = type === "wood";
    c.fillStyle = floor ? "#707273" : wood ? "#a56437" : "#596b6c";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 220; i++) {
      let x = random(0, w),
        y = random(0, h),
        r = random(6, 104);
      let g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, wood ? "rgba(64,20,5,.09)" : "rgba(18,24,25,.12)");
      g.addColorStop(1, "rgba(20,22,24,0)");
      c.fillStyle = g;
      c.fillRect(x - r, y - r, r * 2, r * 2);
    }
    for (let i = 0; i < 3400; i++) {
      c.strokeStyle = random() > 0.5 ? "rgba(221,205,177,.12)" : "rgba(27,17,13,.20)";
      const x = random(0, w),
        y = random(0, h);
      c.beginPath();
      c.moveTo(x, y);
      if (wood)
        c.bezierCurveTo(
          x + 25,
          y - 1.5,
          x + random(36, 100),
          y + random(-4, 4),
          x + random(110, 240),
          y,
        );
      else c.lineTo(x + random(-0.6, 1.2), y + random(1, 30));
      c.lineWidth = random(0.35, 1.8);
      c.stroke();
    }
    wear(c, w, h, 8500);
  });
}
export const M = {
  iron: mat("#343d3e", 0.47, 0.6),
  dark: mat("#1c2425", 0.62, 0.35),
  chrome: mat("#c2d2d4", 0.2, 0.88),
  brass: mat("#bd8241", 0.31, 0.7),
  wood: mat("#e9cba9", 0.32, 0.14, finish("wood")),
  cement: mat("#aaa7a1", 0.77, 0.06, finish("cement")),
  paint: mat("#97aaa6", 0.5, 0.46, finish("sheet")),
  red: mat("#ad2822", 0.36, 0.31),
  cream: mat("#fff0d6", 0.26, 0.16),
  black: mat("#151a19", 0.74, 0.12),
  gold: mat("#ffbe50", 0.24, 0.68),
  blue: mat("#235370", 0.4, 0.23),
  bamboo: mat("#d8aa64", 0.55, 0.03),
  broth: mat("#a74812", 0.15, 0.12),
  noodle: mat("#ffcc73", 0.4, 0.03),
  green: mat("#669637", 0.42),
  warm: lit("#ffb35e", 2.7),
  white: lit("#ffe7b1", 2.3),
  a: lit("#ff533e", 3.0),
  b: lit("#64ecf0", 2.5),
};
export function env(renderer) {
  const tex = canvasTex(512, 256, (c, w, h) => {
    const grad = c.createLinearGradient(0, 0, 0, h);
    for (const [n, col] of [
      [0, "#535970"],
      [0.38, "#2b5363"],
      [0.58, "#1f302f"],
      [1, "#101921"],
    ])
      grad.addColorStop(n, col);
    c.fillStyle = grad;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 100; i++) {
      c.fillStyle = ["#b06c36", "#67a5aa", "#eec187", "#3e353c", "#8b4134"][i % 5];
      c.fillRect(random(0, w), random(64, 181), random(1, 22), random(1, 17));
    }
    c.fillStyle = "#fff1c9";
    c.fillRect(55, 65, 134, 19);
    c.fillStyle = "#9cfcff";
    c.fillRect(290, 103, 55, 7);
  });
  tex.mapping = T.EquirectangularReflectionMapping;
  const gen = new T.PMREMGenerator(renderer);
  world.environment = gen.fromEquirectangular(tex).texture;
  world.environmentIntensity = 0.92;
  gen.dispose();
  tex.dispose();
}
export const palettes = [
  ["#ff503e", "#55dce7"],
  ["#ffb226", "#f48342"],
  ["#d160ff", "#78ffb8"],
];
export const colorSigns = [];
export function signTexture({
  title,
  sub = "",
  bg = "#302e2c",
  ink = "#fff3cf",
  vertical = false,
  tubed = false,
  style = "plain",
}) {
  const w = vertical ? 176 : 640,
    h = vertical ? 640 : 178;
  return canvasTex(w, h, (c) => {
    c.fillStyle = bg;
    c.fillRect(0, 0, w, h);
    wear(c, w, h, 3600);
    c.strokeStyle = ink;
    c.globalAlpha = 0.46;
    c.lineWidth = 2;
    c.strokeRect(7, 7, w - 14, h - 14);
    c.globalAlpha = 1;
    c.textAlign = "center";
    c.textBaseline = "middle";
    if (vertical) {
      const chars = Array.from(title);
      const dy = (h - 95) / chars.length;
      c.font = "900 " + Math.min(135, dy * 0.95) + 'px "Noto Sans CJK JP",sans-serif';
      for (let i = 0; i < chars.length; i++) {
        const y = 28 + dy * (i + 0.5);
        if (tubed) {
          c.strokeStyle = ink;
          c.lineJoin = "round";
          c.shadowBlur = 15;
          c.shadowColor = ink;
          c.lineWidth = 5;
          c.strokeText(chars[i], w / 2, y);
          c.shadowBlur = 0;
          c.lineWidth = 1.4;
          c.strokeStyle = "#fff6db";
          c.strokeText(chars[i], w / 2, y);
        } else {
          c.fillStyle = ink;
          c.fillText(chars[i], w / 2, y);
        }
      }
      c.font = "bold 14px monospace";
      c.fillStyle = ink;
      c.fillText(sub, w / 2, h - 34);
    } else {
      c.fillStyle = ink;
      c.font = "900 " + (style === "latin" ? 78 : 93) + 'px "Noto Serif CJK JP",serif';
      c.fillText(title, w / 2, h * 0.4, w * 0.92);
      c.font = "bold 17px monospace";
      c.fillText(sub, w / 2, h * 0.8, w * 0.94);
    }
  });
}
export function sign(p, x, y, z, w, h, opts, theme = null) {
  box(x, y, z - 0.075, w + 0.055, h + 0.055, 0.13, M.iron, p);
  const tex = signTexture(opts);
  const m = paper(tex, opts.tubed ? 2.8 : 1.22);
  face(x, y, z, w, h, m, p);
  if (theme !== null) colorSigns.push({ m, theme, level: opts.tubed ? 2.8 : 1.22 });
  return m;
}
export async function photo(path) {
  let texture = await new T.TextureLoader().loadAsync("./assets/" + path);
  texture.colorSpace = T.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}
