import * as T from "three";
import {
  M,
  TAU,
  group,
  mesh,
  face,
  box,
  ball,
  cyl,
  ring,
  rod,
  tube,
  paper,
  canvasTex,
  wear,
  mat,
  sign,
  signTexture,
  random,
} from "./workshop.js";

const ink = mat("#263331", 0.71, 0.31),
  russet = mat("#815039", 0.64, 0.52),
  moss = mat("#6b7969", 0.79, 0.15);
const shadowTex = canvasTex(128, 128, (c, w, h) => {
  let g = c.createRadialGradient(64, 64, 5, 64, 64, 64);
  g.addColorStop(0, "rgba(10,7,6,.82)");
  g.addColorStop(0.4, "rgba(10,8,6,.53)");
  g.addColorStop(1, "rgba(9,8,7,0)");
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
});
const shadow = new T.MeshBasicMaterial({
  map: shadowTex,
  transparent: true,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -1,
});
export function contact(p, x, y, z, w, d) {
  let f = face(x, y, z, w, d, shadow, p);
  f.rotation.x = -Math.PI / 2;
  f.renderOrder = 1;
}
const shutterTex = canvasTex(768, 640, (c, w, h) => {
  c.fillStyle = "#526364";
  c.fillRect(0, 0, w, h);
  for (let i = 0; i < 90; i++) {
    let x = random(0, w),
      y = random(0, h);
    let grad = c.createLinearGradient(0, y, 0, y + 133);
    grad.addColorStop(0, "rgba(80,43,29,.48)");
    grad.addColorStop(1, "rgba(80,43,29,0)");
    c.fillStyle = grad;
    c.fillRect(x, y, random(1, 19), 135);
  }
  c.save();
  c.translate(385, 330);
  c.rotate(-0.055);
  c.font = 'bold 120px "Noto Serif CJK JP"';
  c.textAlign = "center";
  c.fillStyle = "#a88b73";
  c.fillText("修 理 店", 0, 0);
  c.font = "bold 24px monospace";
  c.fillText("ELECTRIC MOTOR WORKS", 0, 52);
  c.restore();
  for (let y = 0; y < h; y += 11) {
    c.fillStyle = "rgba(0,10,10,.59)";
    c.fillRect(0, y, w, 2);
    c.fillStyle = "rgba(210,223,209,.3)";
    c.fillRect(0, y + 3, w, 1);
  }
  wear(c, w, h, 16000);
});
function shutter(g, x, w) {
  box(x, 1.65, 0, w + 0.21, 3.3, 0.19, M.cement, g);
  face(x, 1.4, 0.11, w, 2.63, paper(shutterTex, 0.52), g);
  for (let a of [-1, 1]) box(x + a * w * 0.5, 1.43, 0.147, 0.078, 2.82, 0.08, ink, g);
  box(x, 2.89, 0.155, w + 0.13, 0.26, 0.23, moss, g);
  sign(g, x, 3.26, 0.13, w + 0.03, 0.44, {
    title: "電 気 商 会",
    sub: "K O W L O O N    •    M O T O R    W O R K S",
    bg: "#405356",
    ink: "#d4bd92",
  });
  box(x, 0.076, 0.3, w + 0.21, 0.145, 0.66, M.cement, g);
}
const sticker = paper(
  signTexture({ title: "注 意", sub: "高 電 圧   /   200 V", bg: "#ccb98a", ink: "#5a3121" }),
  0.76,
);
function electrics(g, x, y) {
  box(x, y, 0.22, 0.44, 0.61, 0.19, M.paint, g);
  box(x + 0.02, y, 0.325, 0.375, 0.542, 0.025, moss, g);
  face(x, y + 0.065, 0.343, 0.25, 0.18, sticker, g);
  box(x + 0.125, y - 0.065, 0.35, 0.025, 0.074, 0.027, M.brass, g);
  for (let j = 0; j < 4; j++)
    tube(
      [
        [x - 0.14 + j * 0.08, y - 0.29, 0.24],
        [x - 0.14 + j * 0.08, y - 0.55, 0.24],
        [x - 0.18 + j * 0.071, y - 0.66, 0.21],
        [x - 0.18 + j * 0.071, 0.2, 0.21],
      ],
      0.016,
      ink,
      g,
    );
}
function roundel(g) {
  const tex = canvasTex(480, 480, (c, w, h) => {
    c.translate(240, 240);
    c.fillStyle = "#1a393c";
    c.beginPath();
    c.arc(0, 0, 235, 0, TAU);
    c.fill();
    for (let r of [223, 212, 167]) {
      c.strokeStyle = r === 167 ? "#688e83" : "#a8cfbd";
      c.lineWidth = r === 223 ? 9 : 2;
      c.beginPath();
      c.arc(0, 0, r, 0, TAU);
      c.stroke();
    }
    c.fillStyle = "#f4d29b";
    c.beginPath();
    c.ellipse(0, 17, 109, 32, 0, 0, Math.PI);
    c.quadraticCurveTo(68, 92, 26, 97);
    c.lineTo(-27, 97);
    c.quadraticCurveTo(-87, 78, -109, 18);
    c.fill();
    c.lineCap = "round";
    c.strokeStyle = "#f4d29b";
    c.lineWidth = 7;
    c.beginPath();
    c.ellipse(0, 13, 105, 22, 0, 0, TAU);
    c.stroke();
    for (let i = 0; i < 3; i++) {
      let x = -55 + i * 42;
      c.beginPath();
      c.moveTo(x, -16);
      c.bezierCurveTo(x + 22, -45, x - 13, -52, x + 7, -81);
      c.stroke();
    }
    c.strokeStyle = "#de6746";
    for (let j = 0; j < 2; j++) {
      c.beginPath();
      c.moveTo(-31 + j * 19, 6);
      c.lineTo(99 + j * 17, -120 + j * 3);
      c.stroke();
    }
    c.fillStyle = "#f3c794";
    c.textAlign = "center";
    c.font = "bold 22px monospace";
    c.fillText("Y O R U   •   麺", 0, 146);
    c.font = "bold 15px monospace";
    c.fillText("EST. 1984", 0, -145);
    wear(c, w, h, 1200);
  });
  const p = group(-4.13, 3.79, 1.14, g);
  p.rotation.y = 0.19;
  cyl(0, 0, 0, 0.43, 0.43, 0.12, ink, p, 48).rotation.x = Math.PI / 2;
  mesh(new T.CircleGeometry(0.419, 56), paper(tex, 1.54), 0, 0, 0.067, p);
  ring(0, 0, 0.071, 0.426, 0.013, M.brass, p);
  rod([-0.12, 0.36, -0.02], [-0.15, 0.59, -0.08], 0.023, ink, p);
  rod([-0.15, 0.59, -0.08], [-0.99, 0.59, -0.11], 0.026, ink, p);
}
function detailCounter(p) {
  for (let i = 0; i < 5; i++)
    contact(p, -2.4 + i * 1.14, 0.015, 1.66 + 0.08 * Math.sin(i * 3.6), 0.72, 0.53);
  for (let j = 0; j < 4; j++) contact(p, -2.11 + j * 1.13, 1.219, 0.85, 0.5, 0.34);
  for (let i = 0; i < 9; i++) {
    let x = -1.96 + i * 0.175;
    let ticket = face(
      x,
      2.31 + Math.sin(i) * 0.014,
      -0.55,
      0.139,
      0.177,
      paper(
        signTexture({
          title: ["味 噌", "醤 油", "塩"][i % 3],
          sub: "伝票  0" + (i + 1),
          bg: "#e2cca0",
          ink: "#49362b",
        }),
        0.74,
      ),
      p,
    );
    ticket.rotation.z = random(-0.072, 0.072);
    box(x, 2.409, -0.546, 0.022, 0.036, 0.026, M.brass, p);
  }
  rod([-2.12, 2.412, -0.56], [-0.41, 2.412, -0.56], 0.019, M.chrome, p);
  // Sink with gooseneck faucet, prep tin and the knife left on a damp board.
  tube(
    [
      [-1.93, 1.25, -0.32],
      [-1.93, 1.59, -0.32],
      [-1.9, 1.72, -0.3],
      [-1.83, 1.7, -0.21],
      [-1.81, 1.61, -0.16],
    ],
    0.021,
    M.chrome,
    p,
  );
  box(-1.81, 1.263, -0.02, 0.41, 0.032, 0.31, M.chrome, p);
  box(-1.81, 1.281, -0.02, 0.31, 0.009, 0.235, M.iron, p);
  box(2.15, 1.273, -0.08, 0.58, 0.044, 0.34, M.bamboo, p);
  const blade = box(2.17, 1.307, -0.06, 0.238, 0.017, 0.073, M.chrome, p);
  blade.rotation.y = 0.19;
  let handle = box(2.35, 1.306, -0.094, 0.151, 0.032, 0.039, M.black, p);
  handle.rotation.y = 0.19;
  for (let j = 0; j < 13; j++)
    ball(1.95 + random(0, 0.096), 1.302, -0.05 + random(-0.065, 0.05), 0.015, 0.005, 0.009, M.green, p);
  for (let j = 0; j < 4; j++) {
    let x = -2.69 + j * 0.143;
    cyl(x, 1.332, -0.43, 0.058, 0.058, 0.175, M.broth, p);
    cyl(x, 1.43, -0.43, 0.062, 0.058, 0.023, M.chrome, p);
  }
  for (let k = 0; k < 2; k++) {
    let x = -2.26 + k * 4.1;
    face(
      x,
      0.72,
      1.046,
      0.38,
      0.15,
      paper(
        signTexture({
          title: k ? "禁 煙" : "夜 麺",
          sub: "YORU   STALL   07",
          bg: "#cdc7a7",
          ink: "#4c4940",
        }),
        0.74,
      ),
      p,
    );
  }
  const gas = group(-2.9, 0.025, 0.37, p);
  cyl(0, 0.38, 0, 0.142, 0.147, 0.54, M.paint, gas);
  ball(0, 0.646, 0, 0.141, 0.083, 0.141, M.paint, gas);
  cyl(0, 0.71, 0, 0.063, 0.043, 0.081, M.brass, gas);
  tube(
    [
      [0, 0.72, 0],
      [-0.17, 0.7, 0],
      [-0.16, 0.27, 0.05],
      [-0.31, 0.18, -0.1],
      [-0.36, 0.21, -0.51],
    ],
    0.018,
    M.black,
    gas,
  );
}
export function street(stall, facade) {
  const g = group();
  const left = group(-8.11, 0, 0.93, g);
  shutter(left, 0, 3.71);
  electrics(left, 2.19, 1.74);
  electrics(left, 2.68, 1.35);
  for (let j = 0; j < 5; j++) {
    let x = -9.7 - j * 3.84;
    box(x, 5.66, -1.1, 4.02, 11.32, 3.7, paper(facade, 0.49), g);
    const sh = group(x, 0, 0.82, g);
    shutter(sh, 0, 3.61);
    if (j % 2 === 0) electrics(sh, -1.68, 2.11);
  }
  for (let i = 0; i < 4; i++) {
    let x = -5.41 - i * 0.12;
    tube(
      [
        [x, 0.04, 1.41],
        [x, 2.74, 1.41],
        [x - 0.1, 2.93, 1.36],
        [x - 0.1, 5.31, 1.36],
      ],
      0.029,
      i % 2 ? russet : ink,
      g,
    );
    for (let j = 0; j < 4; j++) cyl(x, 0.35 + j * 0.71, 1.41, 0.042, 0.042, 0.041, M.iron, g);
  }
  roundel(g);
  detailCounter(stall.p);
  const right = group(7.62, 0, -8.9, g);
  right.rotation.y = -Math.PI / 2;
  shutter(right, 0, 3.41);
  electrics(right, 1.95, 1.81);
  // Shop windows and small practicals recede through the lane below the apartments.
  for (let j = 0; j < 8; j++) {
    let side = j % 2 === 0 ? 1 : -1;
    let shop = group(side === 1 ? 7.5 : 2.49, 0, -8.4 - j * 3.07, g);
    shop.rotation.y = side === 1 ? -Math.PI / 2 : Math.PI / 2;
    box(0, 1.29, 0, 2.74, 2.58, 0.11, M.wood, shop);
    face(0, 1.52, 0.072, 2.26, 1.79, paper(facade, 0.8), shop);
    for (let k = -1; k <= 1; k++) box(k * 0.81, 1.44, 0.1, 0.06, 2.08, 0.07, M.iron, shop);
    box(0, 2.52, 0.15, 2.93, 0.18, 0.44, M.red, shop);
    box(0, 2.405, 0.35, 2.71, 0.021, 0.018, j % 2 ? M.warm : M.b, shop);
  }
  for (let i = 0; i < 15; i++) {
    let x = -20 + i * 2.48,
      z = -29 - random(0, 6),
      h = random(4.1, 11.2);
    box(x, h * 0.5, z, 2.78, h, 2.9, paper(facade, random(0.58, 1.0)), g);
    if (i % 2 === 0) {
      for (let j = 0; j < 4; j++)
        box(x + (j - 1.5) * 0.4, 1.58, z + 1.46, 0.24, 0.61, 0.025, j % 2 ? M.warm : M.b, g);
      box(x, 3.1, z + 1.49, 1.9, 0.13, 0.04, M.a, g);
    }
  }
  // Street service covers, irregular utility paint, dropped wrappers and the curb.
  for (let [x, z] of [
    [-1.68, 3.68],
    [4.89, 0.51],
    [4.12, -7.46],
  ]) {
    cyl(x, 0.018, z, 0.286, 0.29, 0.025, M.iron, g, 44);
    ring(x, 0.033, z, 0.282, 0.009, M.paint, g).rotation.x = Math.PI / 2;
    for (let j = -3; j <= 3; j++) {
      let len = Math.sqrt(0.26 ** 2 - (j * 0.063) ** 2);
      for (let i = -3; i <= 3; i++) {
        if (Math.abs(i * 0.069) > len) continue;
        let slot = box(x + i * 0.069, 0.035, z + j * 0.063, 0.039, 0.007, 0.013, M.dark, g);
        slot.rotation.y = -0.66;
      }
    }
  }
  const litter = [mat("#b99b77", 0.56), mat("#878574", 0.6), mat("#ad6653", 0.6)];
  for (let i = 0; i < 28; i++) {
    let x = random(-6.4, 6.3),
      z = random(1.9, 5.8);
    let f = box(x, 0.022, z, random(0.022, 0.091), 0.005, random(0.04, 0.112), litter[i % 3], g);
    f.rotation.y = random(-3, 3);
  }
  for (let j = 0; j < 2; j++) {
    let x = 3.39 + j * 0.44,
      z = -2.65;
    cyl(x, 0.45, z, 0.043, 0.057, 0.85, M.brass, g);
    for (let q = 0; q < 3; q++)
      cyl(x, 0.24 + q * 0.18, z, 0.054 - q * 0.003, 0.054 - q * 0.003, 0.079, ink, g);
    ball(x, 0.879, z, 0.045, 0.03, 0.045, M.chrome, g);
    contact(g, x, 0.009, z, 0.19, 0.14);
  }
}
