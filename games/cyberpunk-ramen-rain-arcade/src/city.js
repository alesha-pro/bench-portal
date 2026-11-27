import * as T from "three";
import {
  M,
  TAU,
  group,
  moving,
  batch,
  box,
  mesh,
  face,
  ball,
  rounded,
  cyl,
  ring,
  rod,
  tube,
  lathe,
  mat,
  lit,
  paper,
  random,
  canvasTex,
  wear,
  sign,
  signTexture,
} from "./workshop.js";
const fans = [],
  lanterns = [],
  vehicles = [];
const tar = mat("#273237", 0.6, 0.15),
  oxide = mat("#8e5639", 0.68, 0.32),
  enamel = mat("#a9ada1", 0.57, 0.44),
  sage = mat("#53735d", 0.6, 0.14),
  crateRed = mat("#91482d", 0.56, 0.14);
function ac(p, x, y, z, s) {
  const g = group(x, y, z, p);
  g.scale.setScalar(s);
  box(0, 0, 0, 1.06, 0.63, 0.38, enamel, g);
  face(-0.19, 0, 0.197, 0.59, 0.56, M.dark, g);
  for (let j = 0; j < 11; j++) box(0.294, -0.221 + j * 0.044, 0.2, 0.287, 0.02, 0.02, M.iron, g);
  const fan = moving(group(-0.19, 0, 0.213, g));
  for (let i = 0; i < 5; i++) {
    let a = (TAU * i) / 5;
    let o = ball(0.135 * Math.cos(a), 0.135 * Math.sin(a), 0, 0.116, 0.06, 0.013, M.paint, fan);
    o.rotation.z = a + 0.46;
  }
  batch(fan);
  fans.push(fan);
  for (let j = 0; j < 5; j++) ring(-0.19, 0, 0.239, 0.058 + j * 0.049, 0.008, M.iron, g);
  for (let i = 0; i < 8; i++) {
    let a = (i * TAU) / 8;
    rod([-0.19, 0, 0.242], [-0.19 + 0.255 * Math.cos(a), 0.255 * Math.sin(a), 0.242], 0.006, M.iron, g);
  }
  for (let x of [-0.46, 0.46]) {
    for (let y of [-0.255, 0.255]) ball(x, y, 0.197, 0.013, 0.013, 0.009, M.chrome, g);
    box(x, -0.36, 0.0, 0.071, 0.07, 0.45, oxide, g);
  }
  tube(
    [
      [0.52, -0.04, 0.04],
      [0.63, -0.08, 0.04],
      [0.63, -0.43, 0.04],
      [0.71, -0.57, -0.12],
    ],
    0.022,
    tar,
    g,
  );
}
function crate(p, x, y, z, m) {
  const g = group(x, y, z, p);
  box(0, 0.028, 0, 0.65, 0.055, 0.44, m, g);
  for (let i = 0; i < 3; i++) {
    let yy = 0.079 + i * 0.103;
    for (let s of [-1, 1]) {
      box(0, yy, s * 0.212, 0.67, 0.045, 0.037, m, g);
      box(s * 0.318, yy, 0, 0.037, 0.045, 0.425, m, g);
    }
  }
  for (let s of [-1, 1])
    for (let j = 0; j < 6; j++) box(-0.304 + j * 0.122, 0.17, s * 0.21, 0.043, 0.27, 0.037, m, g);
  for (let s of [-1, 1])
    for (let j = 0; j < 3; j++) box(s * 0.315, 0.17, -0.177 + j * 0.177, 0.033, 0.27, 0.04, m, g);
  for (let i = 0; i < 4; i++) {
    let x = -0.21 + 0.14 * i;
    cyl(x, 0.26, 0, 0.051, 0.055, 0.22, M.green, g);
    cyl(x, 0.405, 0, 0.026, 0.032, 0.08, M.green, g);
    cyl(x, 0.448, 0, 0.028, 0.028, 0.015, M.brass, g);
  }
}
const lanternMat = paper(
  canvasTex(480, 256, (c, w, h) => {
    let grad = c.createLinearGradient(0, 0, 0, h);
    for (let [at, col] of [
      [0, "#732719"],
      [0.23, "#db4b27"],
      [0.5, "#ff8a4c"],
      [0.79, "#d9542e"],
      [1, "#60241b"],
    ])
      grad.addColorStop(at, col);
    c.fillStyle = grad;
    c.fillRect(0, 0, w, h);
    for (let j = 0; j < 19; j++) {
      c.fillStyle = "rgba(60,27,16,.51)";
      c.fillRect(0, j * 14, w, 1.9);
      c.fillStyle = "rgba(255,214,125,.41)";
      c.fillRect(0, j * 14 + 2, w, 1);
    }
    c.textAlign = "center";
    c.font = 'bold 77px "Noto Serif CJK JP"';
    c.fillStyle = "#401d16";
    for (let x of [62, 186, 312, 435]) {
      c.fillText("酒", x, 160);
    }
    wear(c, w, h, 5000);
  }),
  1.43,
);
function lantern(p, x, y, z, s, drop) {
  const g = moving(group(x, y, z, p));
  g.scale.setScalar(s);
  rod([0, 0, 0], [0, -drop, 0], 0.01, tar, g);
  let yy = -drop - 0.36;
  lathe(
    0,
    yy,
    0,
    [
      [0.09, -0.32],
      [0.17, -0.282],
      [0.24, -0.173],
      [0.262, -0.035],
      [0.25, 0.12],
      [0.2, 0.24],
      [0.128, 0.312],
      [0.09, 0.32],
    ],
    lanternMat,
    g,
  );
  for (let dir of [-1, 1]) {
    cyl(0, yy + dir * 0.32, 0, 0.125, 0.125, 0.056, M.dark, g);
    cyl(0, yy + dir * 0.347, 0, 0.081, 0.086, 0.023, M.brass, g);
  }
  rod([0, yy - 0.35, 0], [0, yy - 0.46, 0], 0.009, oxide, g);
  batch(g);
  lanterns.push(g);
}
function kiosk() {
  const g = group(2.47, 0, -0.58);
  g.rotation.y = -0.13;
  rounded(0, 1.19, 0, 0.97, 2.3, 0.68, 0.055, M.red, g);
  box(0, 1.2, 0.344, 0.89, 2.16, 0.026, M.cream, g);
  box(-0.07, 1.54, 0.373, 0.68, 1.0, 0.032, M.dark, g);
  sign(g, 0, 2.13, 0.384, 0.821, 0.24, {
    title: "月 光 飲 料",
    sub: "L U N A R   S O D A",
    bg: "#12393e",
    ink: "#adf6e8",
  });
  for (let j = 0; j < 3; j++) {
    const y = 1.18 + j * 0.295;
    box(-0.068, y - 0.07, 0.427, 0.633, 0.02, 0.12, M.chrome, g);
    for (let i = 0; i < 5; i++) {
      let x = -0.316 + i * 0.124;
      const a = [M.red, M.green, M.brass, M.blue, M.cream][(j + i * 2) % 5];
      cyl(x, y + 0.035, 0.435, 0.04, 0.039, 0.183, a, g);
      cyl(x, y + 0.13, 0.435, 0.04, 0.038, 0.009, M.chrome, g);
      cyl(x, y + 0.05, 0.435, 0.041, 0.041, 0.055, M.cream, g);
      face(x, y - 0.037, 0.495, 0.047, 0.011, M.white, g);
    }
  }
  for (let x of [-0.405, 0.267]) box(x, 1.5, 0.48, 0.013, 0.96, 0.015, M.b, g);
  const pay = paper(
    signTexture({ title: "¥ 120", sub: "IC  /  COIN", bg: "#123335", ink: "#b4eedd", style: "latin" }),
  );
  face(0.348, 1.61, 0.381, 0.134, 0.137, pay, g);
  for (let j = 0; j < 5; j++) box(0.349, 1.43 - j * 0.056, 0.387, 0.073, 0.018, 0.013, M.dark, g);
  box(0, 0.51, 0.379, 0.57, 0.18, 0.036, M.dark, g);
  box(0, 0.56, 0.404, 0.53, 0.025, 0.023, M.chrome, g);
  sign(g, 0, 0.873, 0.386, 0.75, 0.21, {
    title: "ソ ー ダ",
    sub: "ICE COLD    •    120",
    bg: "#a83026",
    ink: "#ffe4b5",
  });
  const holo = group(0.02, 2.44, 0.05, g);
  sign(
    holo,
    0,
    0,
    0,
    0.6,
    0.21,
    { title: "24 H", sub: "VENDING", style: "latin", bg: "#11303a", ink: "#c7ffff" },
    1,
  );
  for (let x of [-0.24, 0.24]) rod([x, -0.1, 0], [x, -0.2, 0], 0.012, M.b, holo);
}
function wallPoster(p, x, y, z, w, h, i) {
  const styles = [
    ["餃 子", "手 作 り   /   ¥ 380", "#ddc896", "#9a332b"],
    ["深 夜 便", "NIGHT LINE  •  07", "#39565d", "#ddcaa7"],
    ["冷 酒", "氷 結    S A K E", "#b55539", "#f1dbab"],
    ["営 業 中", "OPEN   /   24:00", "#ddd5b4", "#394d40"],
  ];
  let [title, sub, bg, ink] = styles[i % 4];
  face(x, y, z, w, h, paper(signTexture({ title, sub, bg, ink }), 0.81), p).rotation.z = random(
    -0.045,
    0.045,
  );
}
function building(p, x, y, z, w, h, d, tex, i) {
  const t = tex.clone();
  t.offset.set((i % 3) * 0.17, (i % 4) * 0.12);
  t.repeat.set(Math.max(0.6, w / 10), Math.max(0.63, h / 12));
  t.wrapS = t.wrapT = T.RepeatWrapping;
  t.needsUpdate = true;
  const m = paper(t, random(0.49, 0.86));
  box(x, y + h / 2, z, w, h, d, m, p);
  box(x, y + h + 0.04, z, w + 0.1, 0.13, d + 0.1, M.cement, p);
  for (let j = 0; j < 3; j++)
    box(
      x - w * 0.39 + j * w * 0.36,
      y + h + 0.28,
      z + random(-d * 0.3, d * 0.3),
      random(0.27, 1.05),
      random(0.32, 1.0),
      0.77,
      M.paint,
      p,
    );
}
function train() {
  const p = moving(group(0, 5.58, -4.6));
  const body = mat("#9caeae", 0.3, 0.64),
    windowMat = lit("#365b67", 1.06),
    seats = lit("#e2b087", 0.92);
  for (let j = 0; j < 3; j++) {
    const g = group(-j * 5.26, 0, 0, p);
    const nose = j === 0 ? 1 : 0.32,
      tail = j === 2 ? 0.78 : 0.27;
    let s = new T.Shape();
    s.moveTo(-2.16, -0.43);
    s.lineTo(1.78, -0.43);
    s.quadraticCurveTo(2.34, -0.4, 2.43, -0.22);
    s.lineTo(2.4, -0.04);
    s.quadraticCurveTo(2.26, 0.08, 2.04, 0.19);
    s.lineTo(2.34 - nose, 0.55);
    s.quadraticCurveTo(1.99 - nose * 0.4, 0.64, 1.48 - nose * 0.22, 0.64);
    s.lineTo(-2.2 + tail * 0.4, 0.64);
    s.quadraticCurveTo(-2.5 + tail * 0.2, 0.56, -2.5, 0.25);
    s.lineTo(-2.51, -0.22);
    s.quadraticCurveTo(-2.5, -0.4, -2.16, -0.43);
    let geo = new T.ExtrudeGeometry(s, {
      depth: 0.98,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.06,
      bevelSegments: 3,
      curveSegments: 6,
    });
    mesh(geo, body, 0, 0, -0.49, g);
    rounded(-0.22, 0.246, 0.575, 4.09, 0.388, 0.049, 0.055, windowMat, g);
    for (let k = 0; k < 9; k++) {
      let x = -2.0 + k * 0.446;
      box(x, 0.29, 0.61, 0.338, 0.227, 0.011, k % 3 ? seats : M.white, g);
      box(x - 0.113, 0.27, 0.624, 0.018, 0.22, 0.011, M.dark, g);
      if (k % 3 !== 1) {
        ball(x + 0.034, 0.231, 0.624, 0.041, 0.054, 0.009, M.iron, g);
        box(x + 0.025, 0.179, 0.624, 0.096, 0.066, 0.013, M.iron, g);
      }
    }
    box(-0.02, -0.065, 0.575, 4.62, 0.045, 0.03, M.b, g);
    box(-0.1, -0.124, 0.578, 4.36, 0.016, 0.019, M.red, g);
    if (j === 0) {
      let shield = box(1.89, 0.27, 0.39, 0.65, 0.06, 0.42, windowMat, g);
      shield.rotation.z = -0.6;
      box(2.14, -0.12, 0.567, 0.36, 0.063, 0.027, M.white, g);
    }
    if (j === 2) box(-2.32, -0.13, 0.567, 0.22, 0.055, 0.028, M.a, g);
    for (let k = 0; k < 2; k++) box(-1.4 + k * 2.7, -0.5, 0.0, 0.55, 0.18, 0.68, M.dark, g);
    if (j < 2)
      for (let n = 0; n < 6; n++) box(-2.52 - n * 0.049, 0.02, 0.0, 0.023, 0.69, 0.89, M.dark, g);
  }
  for (let j = 0; j < 4; j++) {
    const streak = lit(j % 2 ? "#e74c37" : "#4f9299", 0.7);
    box(-13.35 - j * 0.29, -0.11 + j * 0.047, 0.49, 1.93 + j * 0.62, 0.014, 0.012, streak, p);
  }
  batch(p);
  return p;
}
export function city(facade) {
  const g = group();
  building(g, -1.55, 0, -3.37, 8.93, 4.78, 3.1, facade, 1);
  building(g, -7.63, 0, -0.73, 3.12, 11.3, 4.1, facade, 3);
  // The camera sees a diagonal escape down the open service lane between the stall and these tenements.
  for (let j = 0; j < 8; j++) {
    let z = -8.4 - j * 4.9;
    building(g, -2.1 - random(0, 1), 0, z, 9.9, random(8.4, 19), 4.56, facade, j);
    building(g, 10.45 + random(0, 1.24), 0, z, 5.48, random(8.2, 17.4), 4.55, facade, j + 2);
  }
  for (let j = 0; j < 13; j++)
    building(g, -24 + j * 4.6, 0, -48 - random(0, 7), random(4, 6), random(10, 29), 4, facade, j);
  for (let i = 0; i < 5; i++) {
    let x = -5.4 + i * 1.65;
    ac(g, x, 4.02 + (i % 3) * 0.18, -1.57, 0.82);
    rod([x - 0.64, 3.6, -1.61], [x - 0.64, 4.7, -1.61], 0.048, oxide, g);
  }
  ac(g, -4.88, 2.0, 0.71, 0.73);
  ac(g, -5.31, 3.11, 0.79, 0.91);
  for (let i = 0; i < 7; i++) {
    let x = -5.52 + i * 0.108;
    let top = 4.4 + 0.12 * i;
    tube(
      [
        [x, 0.12, 0.8],
        [x, 2.72, 0.8],
        [x - 0.25, 3.12, 0.64],
        [x - 0.25, top, 0.64],
        [x - 0.25, top + 0.15, -0.5],
      ],
      i % 2 ? 0.024 : 0.034,
      i % 3 ? M.iron : oxide,
      g,
    );
  }
  for (let i = 0; i < 7; i++)
    wallPoster(g, -5.77 + (i % 3) * 0.45, 0.74 + Math.floor(i / 3) * 0.52, 1.33, 0.36, 0.49, i);
  for (let j = 0; j < 11; j++) {
    let z = -3.35 - j * 2.75;
    let s = j % 2 === 0 ? 1 : -1;
    let x = s === 1 ? 7.16 : 3.04;
    let a = group(x, random(2.5, 5.7), z, g);
    a.rotation.y = s === 1 ? -0.59 : 0.53;
    const names = [
      "電脳",
      "酒店",
      "銭湯",
      "映画館",
      "珈琲",
      "薬局",
      "旅館",
      "焼肉",
      "麺",
      "茶屋",
      "古書",
    ];
    const colors = [
      ["#144952", "#bef2d9"],
      ["#99382e", "#ffdf9a"],
      ["#494667", "#ead4e8"],
      ["#c3a371", "#532b24"],
    ];
    let c = colors[j % 4];
    sign(a, 0, 0, 0, 0.41 + (j % 3) * 0.15, 1.29 + (j % 4) * 0.49, {
      title: names[j],
      sub: "夜間営業",
      bg: c[0],
      ink: c[1],
      vertical: true,
    });
    rod([0, 0.4, -0.04], [s * 0.91, 0.4, -0.03], 0.041, M.iron, a);
  }
  sign(g, -5.0, 4.8, 1.2, 0.59, 2.46, {
    title: "大衆酒場",
    sub: "SAKE • BAR",
    bg: "#2c443e",
    ink: "#e8cfa2",
    vertical: true,
  });
  kiosk();
  for (let i = 0; i < 5; i++)
    crate(g, -4.37 + (i % 2) * 0.67, 0.025 + Math.floor(i / 2) * 0.32, 1.18, i % 3 ? crateRed : sage);
  crate(g, 3.04, 0, -0.95, sage);
  for (let j = 0; j < 12; j++) {
    let x = -9 + j * 1.74;
    box(x, 4.87, -4.6, 1.72, 0.45, 1.82, M.cement, g);
    box(x, 5.065, -3.68, 1.72, 0.105, 0.11, M.iron, g);
    for (let k = 0; k < 3; k++) box(x - 0.59 + k * 0.59, 4.77, -3.666, 0.24, 0.039, 0.018, M.dark, g);
  }
  for (let x of [-12, -5.1, 5.78, 14, 22]) {
    box(x, 2.31, -4.8, 0.48, 4.64, 0.67, M.cement, g);
    box(x, 4.5, -4.78, 1.16, 0.31, 1.53, M.cement, g);
    for (let i = 0; i < 5; i++) {
      let band = box(x, 0.47 + i * 0.14, -4.45, 0.48, 0.058, 0.015, i % 2 ? M.black : M.brass, g);
      band.rotation.z = 0.03;
    }
    ac(g, x, 2.2, -4.39, 0.53);
  }
  for (let j = 0; j < 3; j++) box(0, 5.07 + j * 0.047, -4.65 - j * 0.26, 45, 0.09, 0.17, M.iron, g);
  box(0, 4.97, -3.602, 42, 0.019, 0.019, M.b, g);
  for (let i = 0; i < 23; i++) {
    let a = [random(-9, -4), random(3.55, 8.1), random(-6, 3)],
      b = [random(6.9, 10.9), random(4.4, 9), random(-12, 1.7)];
    let mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - random(0.31, 1.55), (a[2] + b[2]) / 2];
    tube([a, mid, b], random(0.01, 0.024), i % 4 === 0 ? oxide : tar, g, 28);
  }
  const line = [
    [-5.3, 3.94, 1.3],
    [-2.5, 3.17, 1.32],
    [0.9, 3.09, 1.34],
    [3.62, 3.54, 1.17],
    [6.8, 4.49, 0.81],
  ];
  tube(line, 0.025, tar, g, 50);
  for (const [x, y, z, s] of [
    [-3.82, 3.48, 1.32, 0.94],
    [-2.66, 3.21, 1.33, 0.65],
    [0.75, 3.09, 1.34, 0.78],
    [1.65, 3.18, 1.3, 0.91],
    [3.55, 3.52, 1.17, 0.57],
  ])
    lantern(g, x, y, z, s, 0.15);
  for (let j = 0; j < 5; j++) {
    let z = -4.6 - j * 3.1;
    tube(
      [
        [2.8, 3.9, z],
        [4.9, 3.3, z + 0.16],
        [7.8, 4.1, z + 0.31],
      ],
      0.016,
      tar,
      g,
    );
    lantern(g, 5.5, 3.42, z + 0.2, 0.63, 0.19);
  }
  for (const [x, z] of [
    [2.8, 2.42],
    [-3.0, 2.83],
    [4.5, -2.4],
    [4.9, -9],
    [0.2, 4.9],
  ]) {
    box(x, 0.019, z, 0.86, 0.025, 0.41, M.iron, g);
    for (let i = 0; i < 14; i++) box(x - 0.389 + i * 0.06, 0.038, z, 0.023, 0.022, 0.354, M.dark, g);
  }
  for (let j = 0; j < 2; j++) {
    const bus = moving(group(0, 0.0, -17 - j * 9, g));
    rounded(0, 0.43, 0, 1.66, 0.48, 0.68, 0.13, M.iron, bus);
    rounded(-0.06, 0.73, 0, 1.03, 0.34, 0.59, 0.09, tar, bus);
    for (let x of [-0.46, 0.47]) box(x, 0.69, 0.3, 0.28, 0.2, 0.014, M.b, bus);
    for (let x of [-0.71, 0.7]) box(x, 0.4, 0.347, 0.125, 0.081, 0.018, x > 0 ? M.white : M.a, bus);
    batch(bus);
    vehicles.push(bus);
  }
  const railway = train();
  return {
    railway,
    update(t, wind, pass) {
      railway.position.x = -23 + pass * 15;
      railway.visible = pass < 4.4;
      fans.forEach((f, i) => (f.rotation.z = t * (4 + i * 0.19)));
      lanterns.forEach((l, i) => {
        l.rotation.z = (0.024 + 0.05 * wind) * Math.sin(t * 1.25 + i * 1.7);
        l.rotation.x = 0.025 * Math.cos(t * 1.7 + i);
      });
      vehicles.forEach((o, i) => (o.position.x = 4.5 + Math.sin(t * 0.83 + i * 2.5) * 4.5));
    },
  };
}
