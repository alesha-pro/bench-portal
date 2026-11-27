import * as T from "three";
import {
  M,
  TAU,
  v,
  group,
  mesh,
  box,
  ball,
  cyl,
  ring,
  rod,
  tube,
  lathe,
  face,
  rounded,
  batch,
  moving,
  mat,
  lit,
  random,
  canvasTex,
  paper,
  wear,
  sign,
  signTexture,
} from "./workshop.js";

const navy = mat("#1d3a4a", 0.62),
  lip = mat("#214c66", 0.25),
  egg = mat("#ffecc3", 0.43),
  yolk = mat("#ff9427", 0.33),
  pork = mat("#b66d4e", 0.49),
  sauce = mat("#733212", 0.18, 0.25),
  seaweed = mat("#233929", 0.62);
const towel = mat("#e6cba2", 0.95),
  flame = lit("#56bdff", 1.8);
function flatRing(x, y, z, r, t, m, p) {
  let o = ring(x, y, z, r, t, m, p);
  o.rotation.x = -Math.PI / 2;
  return o;
}
function bottle(p, x, y, z, s, kind) {
  let g = group(x, y, z, p);
  g.scale.setScalar(s);
  let glass = [sauce, M.green, M.broth, M.brass][kind % 4];
  lathe(
    0,
    0,
    0,
    [
      [0.07, 0],
      [0.075, 0.018],
      [0.077, 0.22],
      [0.064, 0.26],
      [0.035, 0.28],
      [0.034, 0.34],
      [0.039, 0.345],
    ],
    glass,
    g,
  );
  cyl(0, 0.347, 0, 0.041, 0.041, 0.035, kind % 2 ? M.red : M.black, g);
  cyl(0, 0.146, 0, 0.078, 0.078, 0.103, kind % 2 ? M.cream : navy, g);
  face(0, 0.145, 0.079, 0.073, 0.086, labelSmall, g);
}
const labelSmall = paper(
  signTexture({ title: "辛", sub: "CHILI OIL", bg: "#e1c28a", ink: "#7b3123" }),
  0.9,
);
function basket(p, x, y, z, r) {
  cyl(x, y - 0.012, z, r * 0.82, r * 0.78, 0.04, M.bamboo, p);
  for (let j = 0; j < 5; j++) flatRing(x, y + j * 0.032, z, r * (0.82 + j * 0.042), 0.016, M.bamboo, p);
  for (let i = 0; i < 22; i++) {
    const a = (i * TAU) / 22;
    rod(
      [x + r * 0.79 * Math.cos(a), y - 0.022, z + r * 0.79 * Math.sin(a)],
      [x + r * Math.cos(a + 0.1), y + 0.15, z + r * Math.sin(a + 0.1)],
      0.009,
      M.brass,
      p,
      5,
    );
  }
}
function bowl(p, x, y, z, s, filled = true) {
  const g = group(x, y, z, p);
  g.scale.setScalar(s);
  lathe(
    0,
    0,
    0,
    [
      [0.095, 0],
      [0.12, 0.012],
      [0.117, 0.035],
      [0.17, 0.061],
      [0.21, 0.105],
      [0.252, 0.172],
      [0.265, 0.2],
      [0.257, 0.209],
      [0.24, 0.19],
      [0.186, 0.117],
      [0.1, 0.06],
      [0, 0.059],
    ],
    M.cream,
    g,
  );
  flatRing(0, 0.191, 0, 0.259, 0.008, lip, g);
  flatRing(0, 0.154, 0, 0.238, 0.007, lip, g);
  flatRing(0, 0.036, 0, 0.12, 0.006, lip, g);
  for (let i = 0; i < 28; i++) {
    let a = (i * TAU) / 28;
    let r = 0.245;
    ball(Math.cos(a) * r, 0.169, Math.sin(a) * r, 0.007, 0.013, 0.008, lip, g);
  }
  if (!filled) return;
  cyl(0, 0.169, 0, 0.238, 0.22, 0.015, M.broth, g);
  for (let j = 0; j < 10; j++) {
    let pts = [];
    for (let i = 0; i < 12; i++) {
      let a = i * 0.48 + j * 0.7,
        r = 0.034 + j * 0.016;
      pts.push([r * Math.cos(a), 0.184 + Math.sin(i * 0.9) * 0.002, r * Math.sin(a)]);
    }
    tube(pts, 0.0046, M.noodle, g, 18);
  }
  let e = ball(-0.115, 0.207, 0.055, 0.077, 0.032, 0.098, egg, g);
  e.rotation.z = 0.19;
  ball(-0.111, 0.234, 0.058, 0.044, 0.012, 0.048, yolk, g);
  for (let j = 0; j < 2; j++) {
    const x = 0.038 + j * 0.073;
    ball(x, 0.197, -0.082, 0.08, 0.022, 0.064, pork, g);
    const pts = [];
    for (let i = 0; i < 20; i++) {
      let a = i * 0.41,
        r = 0.0018 * i;
      pts.push([x + r * Math.cos(a), 0.219, -0.082 + 0.8 * r * Math.sin(a)]);
    }
    tube(pts, 0.0033, egg, g, 22);
  }
  box(-0.058, 0.239, -0.147, 0.123, 0.125, 0.012, seaweed, g).rotation.x = -0.37;
  for (let j = 0; j < 13; j++) {
    let o = flatRing(
      random(0.018, 0.133),
      random(0.186, 0.201),
      random(0.02, 0.115),
      0.012,
      0.004,
      M.green,
      g,
    );
    o.rotation.z = random(-0.35, 0.35);
  }
}
function makeCat(p) {
  const g = group(-2.37, 1.74, -0.15, p);
  ball(0, 0.17, 0, 0.14, 0.18, 0.123, M.gold, g);
  ball(0, 0.39, 0, 0.155, 0.127, 0.115, M.gold, g);
  for (const s of [-1, 1]) {
    let ear = mesh(new T.ConeGeometry(0.067, 0.13, 4), M.gold, s * 0.1, 0.495, 0, g);
    ear.rotation.z = -s * 0.24;
    ball(s * 0.098, 0.49, 0.038, 0.032, 0.041, 0.015, M.red, g);
    tube(
      [
        [s * 0.035, 0.4, 0.105],
        [s * 0.064, 0.41, 0.106],
        [s * 0.085, 0.396, 0.095],
      ],
      0.006,
      M.black,
      g,
    );
    for (let j = 0; j < 2; j++)
      rod(
        [s * 0.084, 0.373 - j * 0.017, 0.096],
        [s * 0.13, 0.379 - j * 0.023, 0.071],
        0.004,
        M.black,
        g,
      );
  }
  ball(0, 0.372, 0.115, 0.015, 0.011, 0.008, M.red, g);
  cyl(0, 0.284, 0, 0.119, 0.126, 0.03, M.red, g);
  ball(0, 0.25, 0.12, 0.028, 0.03, 0.019, M.brass, g);
  ball(0.092, 0.165, 0.093, 0.071, 0.1, 0.039, M.brass, g);
  for (const s of [-1, 1]) {
    ball(s * 0.083, 0.042, 0.057, 0.068, 0.045, 0.081, M.gold, g);
    for (let j = 0; j < 2; j++)
      rod(
        [s * 0.083 + (j - 0.5) * 0.024, 0.06, 0.123],
        [s * 0.083 + (j - 0.5) * 0.024, 0.042, 0.133],
        0.003,
        M.black,
        g,
      );
  }
  const features = canvasTex(192, 112, (c) => {
    c.fillStyle = "#37251a";
    c.lineWidth = 5;
    c.lineCap = "round";
    for (const s of [-1, 1]) {
      c.beginPath();
      c.arc(96 + s * 44, 48, 19, Math.PI * 1.1, Math.PI * 1.91);
      c.strokeStyle = "#37251a";
      c.stroke();
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.moveTo(96 + s * 48, 63 + i * 6);
        c.lineTo(96 + s * (77 + i * 2), 58 + i * 10);
        c.lineWidth = 2;
        c.stroke();
      }
    }
    c.fillStyle = "#8e3625";
    c.beginPath();
    c.moveTo(86, 55);
    c.lineTo(106, 55);
    c.lineTo(96, 66);
    c.fill();
    c.fillStyle = "#5a3826";
    c.font = "bold 24px serif";
    c.fillText("ω", 86, 82);
  });
  const fm = new T.MeshBasicMaterial({ map: features, transparent: true, depthWrite: false });
  face(0, 0.388, 0.116, 0.242, 0.145, fm, g);
  const paw = moving(group(-0.112, 0.24, 0.01, g));
  ball(-0.03, 0.073, 0.029, 0.052, 0.1, 0.054, M.gold, paw);
  ball(-0.04, 0.159, 0.044, 0.053, 0.053, 0.046, M.gold, paw);
  batch(paw);
  return paw;
}
function buildArm(p) {
  const base = [1.31, 1.35, -0.19],
    root = group(...base, p);
  cyl(0, -0.096, 0, 0.193, 0.246, 0.19, M.iron, root);
  for (let i = 0; i < 6; i++) {
    let a = (i * TAU) / 6;
    cyl(Math.cos(a) * 0.192, -0.038, Math.sin(a) * 0.192, 0.023, 0.023, 0.036, M.chrome, root, 6);
  }
  cyl(0, 0.04, 0, 0.145, 0.17, 0.1, M.brass, root);
  const armLabel = paper(
    signTexture({
      title: "K–07",
      sub: "YORU  AUTOMATION",
      style: "latin",
      bg: "#d4c297",
      ink: "#283d3f",
    }),
    0.85,
  );
  function link(length, heavy) {
    let g = moving(group(0, 0, 0, root));
    ball(0, 0, 0, 0.137, 0.137, 0.14, M.iron, g);
    for (let s of [-1, 1]) {
      cyl(0, 0, s * 0.125, 0.095, 0.095, 0.03, M.brass, g).rotation.x = Math.PI / 2;
      ball(0, 0, s * 0.146, 0.055, 0.055, 0.009, M.chrome, g);
    }
    for (let j = 0; j < 6; j++) {
      let a = (j * TAU) / 6;
      ball(0.069 * Math.cos(a), 0.069 * Math.sin(a), 0.144, 0.009, 0.009, 0.007, M.black, g);
    }
    const w = heavy ? 0.16 : 0.118;
    lathe(
      0,
      0,
      0,
      [
        [w * 0.57, 0.075],
        [w * 0.83, 0.12],
        [w * 0.87, length * 0.29],
        [w * 0.56, length * 0.51],
        [w * 0.43, length - 0.09],
        [w * 0.46, length - 0.06],
      ],
      M.chrome,
      g,
    );
    for (const s of [-1, 1]) {
      rod([s * w * 0.77, 0.14, 0], [s * w * 0.59, length * 0.74, 0], 0.024, M.iron, g);
      rod([s * w * 0.59, length * 0.7, 0], [s * w * 0.37, length - 0.075, 0], 0.017, M.chrome, g);
    }
    rod([w * 0.58, 0.13, w * 0.7], [w * 0.38, length * 0.58, w * 0.64], 0.027, M.brass, g);
    rod([w * 0.38, length * 0.57, w * 0.64], [w * 0.18, length - 0.085, w * 0.54], 0.015, M.chrome, g);
    const tag = face(0, length * 0.4, w * 0.8, 0.112, 0.055, armLabel, g);
    tag.rotation.x = -0.06;
    tube(
      [
        [w * 0.55, 0.085, w * 0.14],
        [w * 1.3, 0.17, w * 0.58],
        [w * 1.06, length * 0.64, w * 0.54],
        [w * 0.32, length - 0.06, w * 0.43],
      ],
      0.013,
      M.red,
      g,
    );
    tube(
      [
        [-w * 0.67, 0.09, -0.06],
        [-w * 1.12, length * 0.31, -0.06],
        [-w, length * 0.67, -0.06],
        [-w * 0.42, length - 0.05, -0.04],
      ],
      0.022,
      M.black,
      g,
    );
    cyl(0, length * 0.23, 0, w * 0.9, w * 0.9, 0.048, heavy ? M.red : M.brass, g);
    batch(g);
    return g;
  }
  const L = 0.76,
    K = 0.82,
    upper = link(L, true),
    fore = link(K, false),
    tool = moving(group(0, 0, 0, p));
  ball(0, 0, 0, 0.073, 0.079, 0.075, M.chrome, tool);
  for (const s of [-1, 1]) rod([s * 0.027, -0.01, 0], [s * 0.064, -0.25, 0.018], 0.014, M.brass, tool);
  const noodles = moving(group(0, -0.231, 0.018, tool));
  for (let i = 0; i < 15; i++) {
    let x = random(-0.06, 0.06),
      z = random(-0.04, 0.04),
      length = random(0.17, 0.46),
      a = random(0, TAU);
    let pts = [];
    for (let j = 0; j < 11; j++) {
      let f = j / 10;
      pts.push([
        x + 0.012 * Math.sin(f * 11 + a) + f * 0.035 * Math.sin(a),
        -f * length,
        z + 0.013 * Math.cos(f * 8 + a),
      ]);
    }
    tube(pts, 0.0056, M.noodle, noodles, 18);
  }
  batch(noodles);
  batch(tool);
  const start = v(...base),
    pot = v(0.31, 1.8, 0.04),
    serving = v(1.31, 1.62, 0.84),
    topPot = v(0.31, 2.23, 0.04),
    topBowl = v(1.31, 2.16, 0.84);
  const ease = (x) => x * x * (3 - 2 * x);
  return function (phase) {
    const keys = [pot, pot, topPot, topPot, topBowl, serving, serving, topBowl, topPot, pot];
    let u = phase * (keys.length - 1),
      i = Math.min(keys.length - 2, Math.floor(u));
    let end = keys[i].clone().lerp(keys[i + 1], ease(u - i));
    const delta = end.clone().sub(start),
      d = delta.length(),
      axis = delta.normalize(),
      side = v(0, 1, 0).addScaledVector(axis, -axis.y).normalize();
    const along = (L * L - K * K + d * d) / (2 * d),
      elbow = start
        .clone()
        .addScaledVector(axis, along)
        .addScaledVector(side, Math.sqrt(Math.max(0, L * L - along * along)));
    upper.quaternion.setFromUnitVectors(v(0, 1, 0), elbow.clone().sub(start).normalize());
    fore.position.copy(elbow.clone().sub(start));
    fore.quaternion.setFromUnitVectors(v(0, 1, 0), end.clone().sub(elbow).normalize());
    tool.position.copy(end);
    noodles.scale.y = 0.2 + 0.8 * Math.min(1, Math.max(0, (end.y - 1.67) / 0.43));
    noodles.rotation.z = 0.065 * Math.sin(phase * TAU);
  };
}
export function kitchen(kitchenTex) {
  const p = group(-1.05, 0, -0.12);
  box(0, 0.115, 0, 5.98, 0.22, 2.9, M.cement, p);
  box(0, 0.27, 0.18, 5.85, 0.08, 2.45, M.iron, p);
  box(0, 1.83, -1.04, 5.82, 3.35, 0.21, M.dark, p);
  face(0, 1.95, -0.9, 5.68, 2.17, paper(kitchenTex, 1.02), p);
  for (const x of [-2.86, 2.87]) {
    box(x, 1.72, -0.69, 0.12, 3.03, 1.0, M.wood, p);
    box(x, 1.68, 0.77, 0.1, 3.02, 0.12, M.iron, p);
    for (let j = 0; j < 4; j++) cyl(x, 0.69 + j * 0.61, 0.77, 0.073, 0.073, 0.06, M.brass, p);
  }
  // Sloping corrugations are continuous folded sheet, with a separate gutter and exposed purlins.
  const awning = group(0, 3.04, 0.0, p);
  awning.rotation.x = 0.125;
  const geo = new T.PlaneGeometry(6.35, 2.53, 210, 1);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++)
    pos.setZ(i, 0.038 * Math.cos(((pos.getX(i) + 3.175) * Math.PI * 2) / 0.147));
  geo.computeVertexNormals();
  let roof = mesh(geo, M.paint, 0, 0.12, 0, awning);
  roof.rotation.x = -Math.PI / 2;
  for (let k = 0; k < 5; k++) box(0, 0.03, -1.12 + k * 0.57, 6.22, 0.069, 0.055, M.iron, awning);
  rod([-3.19, 2.991, 1.2], [3.19, 2.991, 1.2], 0.056, M.iron, p);
  sign(p, -0.12, 3.4, -0.2, 4.24, 0.68, {
    title: "深 夜 食 堂",
    sub: "Y O R U   R A M E N     •     夜 間 営 業     •     S I N C E   1 9 8 4",
    bg: "#b83b27",
    ink: "#ffedb9",
  });
  for (let x of [-2.03, 1.79]) rod([x, 3.15, -0.31], [x, 3.74, -0.31], 0.046, M.iron, p);
  sign(
    p,
    -3.0,
    2.64,
    1.02,
    0.6,
    2.4,
    { title: "ラーメン", sub: "YU-07   麺", vertical: true, tubed: true, bg: "#170e11", ink: "#ffddd1" },
    0,
  );
  sign(
    p,
    2.93,
    2.82,
    0.44,
    0.42,
    1.67,
    { title: "深夜食堂", sub: "OPEN   24H", vertical: true, tubed: true, bg: "#091a1e", ink: "#d1ffff" },
    1,
  );
  const curtainTex = canvasTex(900, 220, (c, w, h) => {
    c.fillStyle = "#24424a";
    c.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x++) {
      c.fillStyle = "rgba(0,0,0," + (0.05 + 0.14 * (1 + Math.sin(x * 0.14))) + ")";
      c.fillRect(x, 0, 1, h);
    }
    wear(c, w, h, 5000);
    c.textAlign = "center";
    c.fillStyle = "#f5dbad";
    c.font = 'bold 101px "Noto Serif CJK JP"';
    "夜 鳴 き そ ば".split(" ").forEach((s, i) => c.fillText(s, 90 + 180 * i, 139));
    c.fillRect(0, 185, w, 3);
    c.fillRect(0, 194, w, 1);
  });
  const curtainMat = mat("#ffffff", 0.95, 0, curtainTex);
  curtainMat.side = T.DoubleSide;
  for (let j = 0; j < 5; j++) {
    let g = new T.PlaneGeometry(0.58, 0.39, 10, 5),
      pos = g.attributes.position,
      uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i),
        y = pos.getY(i);
      pos.setZ(i, Math.sin(x * 27 + j) * 0.023);
      pos.setY(i, y + 0.018 * Math.cos(8 * x + j) * (1 - (y + 0.2) / 0.4));
      uv.setX(i, (j + uv.getX(i)) / 5);
    }
    g.computeVertexNormals();
    mesh(g, curtainMat, -1.69 + j * 0.59, 2.72, 1.0, p);
  }
  for (let x of [-2.12, -0.13, 1.65]) {
    box(x, 2.8, -0.07, 1.18, 0.06, 0.15, M.iron, p);
    box(x, 2.758, -0.07, 1.08, 0.025, 0.105, M.warm, p);
  }
  box(0, 0.69, 0.62, 5.62, 0.76, 0.76, M.wood, p);
  for (let i = 0; i < 55; i++) box(-2.76 + i * 0.103, 0.69, 1.015, 0.055, 0.7, 0.046, M.wood, p);
  rounded(0, 1.15, 0.72, 5.96, 0.13, 0.73, 0.043, M.wood, p);
  box(0, 1.092, 1.08, 5.88, 0.023, 0.025, M.brass, p);
  rod([-2.87, 0.43, 1.24], [2.88, 0.43, 1.24], 0.036, M.chrome, p);
  box(0, 1.2, -0.2, 5.58, 0.085, 0.95, M.chrome, p);
  for (let i = 0; i < 5; i++) {
    let x = -2.4 + i * 1.14,
      z = 1.66 + 0.08 * Math.sin(i * 3.6);
    cyl(x, 0.063, z, 0.2, 0.245, 0.08, M.iron, p);
    cyl(x, 0.335, z, 0.058, 0.07, 0.58, M.chrome, p);
    flatRing(x, 0.33, z, 0.177, 0.018, M.chrome, p);
    for (let j = 0; j < 3; j++) {
      let a = (j * TAU) / 3;
      rod([x, 0.33, z], [x + 0.17 * Math.cos(a), 0.33, z + 0.17 * Math.sin(a)], 0.012, M.chrome, p);
    }
    cyl(x, 0.615, z, 0.249, 0.222, 0.055, M.chrome, p);
    lathe(
      x,
      0.632,
      z,
      [
        [0.22, 0],
        [0.254, 0.025],
        [0.254, 0.077],
        [0.223, 0.094],
        [0, 0.094],
      ],
      M.red,
      p,
    );
    flatRing(x, 0.691, z, 0.252, 0.004, M.brass, p);
  }
  const menu = paper(
    signTexture({
      title: "御 品 書",
      sub: "醤油  850 円     •     味噌  900 円",
      ink: "#59302b",
      bg: "#ead6a6",
    }),
  );
  for (let i = 0; i < 4; i++) {
    let x = -2.11 + i * 1.13;
    bowl(p, x, 1.215, 0.85, 0.75 + i * 0.034);
    let mm = face(x + 0.35, 1.224, 0.84, 0.27, 0.176, menu, p);
    mm.rotation.set(-Math.PI / 2, 0, 0.13 * i);
    let flap = face(x + 0.35, 1.249, 0.8, 0.27, 0.085, menu, p);
    flap.rotation.x = -1.02;
  }
  for (let x of [-2.52, -0.25, 2.46]) {
    cyl(x, 1.35, 0.57, 0.083, 0.07, 0.255, M.cream, p);
    flatRing(x, 1.46, 0.57, 0.081, 0.006, lip, p);
    for (let i = 0; i < 13; i++) {
      let dx = random(-0.052, 0.052),
        dz = random(-0.047, 0.047);
      rod(
        [x + dx * 0.6, 1.4, 0.57 + dz * 0.6],
        [x + dx * 1.41, random(1.64, 1.72), 0.57 + dz * 1.41],
        0.006,
        M.bamboo,
        p,
        6,
      );
    }
    bottle(p, x + 0.145, 1.216, 0.59, 0.73, 0);
    bottle(p, x + 0.255, 1.216, 0.57, 0.59, 1);
  }
  for (let i = 0; i < 3; i++) {
    basket(p, -1.51 + i * 0.34, 1.255, -0.03, 0.172);
    for (let j = 0; j < 5; j++) {
      flatRing(-1.51 + i * 0.34, 1.36 + j * 0.005, -0.03, 0.047 + j * 0.018, 0.01, M.noodle, p);
    }
  }
  // Stockpot, rolled steel rim, handles, bubbling broth and burner jets.
  cyl(0.31, 1.284, 0.04, 0.345, 0.34, 0.08, M.black, p);
  flatRing(0.31, 1.32, 0.04, 0.26, 0.016, flame, p);
  lathe(
    0.31,
    1.33,
    0.04,
    [
      [0.225, 0],
      [0.292, 0.035],
      [0.3, 0.09],
      [0.3, 0.3],
      [0.315, 0.326],
      [0.292, 0.335],
      [0.282, 0.3],
      [0.276, 0.08],
    ],
    M.chrome,
    p,
  );
  cyl(0.31, 1.628, 0.04, 0.284, 0.277, 0.018, M.broth, p);
  flatRing(0.31, 1.655, 0.04, 0.307, 0.014, M.chrome, p);
  for (let s of [-1, 1])
    tube(
      [
        [0.31 + s * 0.28, 1.55, -0.048],
        [0.31 + s * 0.394, 1.55, -0.05],
        [0.31 + s * 0.405, 1.55, 0.12],
        [0.31 + s * 0.28, 1.55, 0.12],
      ],
      0.021,
      M.chrome,
      p,
    );
  const bubbles = [];
  for (let i = 0; i < 19; i++) {
    let a = random(0, TAU),
      r = random(0.02, 0.25);
    let b = ball(0.31 + r * Math.cos(a), 1.642, 0.04 + r * Math.sin(a), 1, 1, 1, M.bamboo, p);
    moving(b);
    bubbles.push(b);
  }
  let arm = buildArm(p);
  box(-2.3, 1.7, -0.25, 0.68, 0.07, 0.43, M.wood, p);
  let paw = makeCat(p);
  for (let j = 0; j < 3; j++) {
    let o = box(2.11, 1.236 + j * 0.018, 0.76, 0.34, 0.018, 0.19, towel, p);
    o.rotation.y = 0.08 * j;
  }
  return {
    p,
    arm,
    paw,
    bubbles,
    update(t, phase) {
      arm(phase);
      paw.rotation.x = -0.45 + 0.42 * Math.sin((TAU * t) / 2.5);
      bubbles.forEach((b, i) => {
        let f = (t * (0.66 + i * 0.013) + i * 0.217) % 1,
          r = 0.005 + 0.015 * Math.sin(f * Math.PI);
        b.scale.set(r, r * 0.65, r);
        b.position.y = 1.64 + 0.014 * f;
      });
    },
  };
}
