import * as T from 'three';
import {
  group,
  mesh,
  box,
  panel,
  ball,
  cylinder,
  disk,
  wire,
  canvasTex,
  ink,
  speckle,
  surface,
  print,
  rubber,
  dark,
  iron,
  brass,
  shadow,
  label,
} from './craft.js';
import { posterMaps, spineMap } from './printshop.js';
const spines = Array.from({ length: 9 }, (_, i) => print(spineMap(i), 0.12)),
  covers = posterMaps.map((t) => print(t, 0.1));
const cream = surface('#d3c6a8', 0.65),
  paper = surface('#bfaf8c', 0.87),
  plastic = surface('#3e414c', 0.57);
function sleeve(p, x, y, z, w, d, id, angle = 0) {
  let g = group(p, x, y, z);
  g.rotation.y = angle;
  let h = w * 0.146;
  box(g, 0, h * 0.5, 0, w, h, d, w > 0.9 ? cream : plastic, 0.013);
  panel(g, 0, h * 0.51, d * 0.5 + 0.002, w * 0.993, h * 0.93, spines[id % 9]);
  let top = panel(g, 0, h + 0.002, 0, w * 0.988, d * 0.985, covers[id % 5]);
  top.rotation.x = -Math.PI / 2;
  return g;
}
function looseVhs(p, x, y, z, angle = 0) {
  let g = group(p, x, y, z);
  g.rotation.y = angle;
  box(g, 0, 0.063, 0, 0.9, 0.12, 0.54, rubber, 0.025);
  const texture = canvasTex(640, 390, (c, w, h) => {
    c.fillStyle = '#292b2c';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#414342';
    c.fillRect(12, 9, w - 24, 55);
    c.fillStyle = '#15191d';
    c.fillRect(37, 94, 566, 149);
    for (let x of [142, 495]) {
      c.fillStyle = '#8a8980';
      c.beginPath();
      c.arc(x, 169, 62, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#302a2a';
      c.beginPath();
      c.arc(x, 169, x < 200 ? 48 : 28, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#c1c1ac';
      c.beginPath();
      c.arc(x, 169, 19, 0, Math.PI * 2);
      c.fill();
      for (let i = 0; i < 6; i++) {
        let a = i * 1.047;
        c.fillStyle = '#565b55';
        c.fillRect(x + Math.cos(a) * 17 - 4, 169 + Math.sin(a) * 17 - 4, 8, 8);
      }
    }
    c.fillStyle = '#d5cbb1';
    c.fillRect(115, 270, 412, 83);
    c.fillStyle = '#b96152';
    c.fillRect(115, 270, 412, 12);
    ink(c, 'FRIDAY • MIX 03', 138, 328, 34, '#3b3b46', false, 'left', 'cursive');
    speckle(c, w, h);
  });
  let face = panel(g, 0, 0.124, 0, 0.884, 0.526, print(texture, 0.11));
  face.rotation.x = -Math.PI / 2;
  return g;
}
function consoleDeck(p, x, y, z) {
  let g = group(p, x, y, z);
  g.rotation.y = 0.12;
  let grey = surface('#a8a69f', 0.64),
    purple = surface('#77718c', 0.59),
    deep = surface('#484654');
  box(g, 0, 0.082, 0, 1.24, 0.16, 0.73, deep, 0.052);
  box(g, 0, 0.172, -0.02, 1.24, 0.13, 0.72, grey, 0.048);
  box(g, 0, 0.24, -0.1, 0.82, 0.06, 0.41, grey, 0.025);
  box(g, 0, 0.276, -0.11, 0.71, 0.031, 0.12, rubber, 0.01);
  box(g, 0, 0.389, -0.106, 0.66, 0.23, 0.086, purple, 0.017);
  label(g, 0, 0.399, -0.059, 0.46, 0.144, 'MOONFALL', '#263e58', '#ebc591', 61);
  for (let n of [-1, 1]) box(g, n * 0.45, 0.236, 0.14, 0.142, 0.034, 0.17, purple, 0.012);
  panel(g, -0.18, 0.103, 0.369, 0.28, 0.088, rubber);
  panel(g, 0.23, 0.103, 0.369, 0.28, 0.088, rubber);
  box(g, -0.18, 0.105, 0.405, 0.14, 0.068, 0.1, dark, 0.01);
  let ctrl = group(g, 0.88, 0.08, 0.36);
  ctrl.rotation.y = -0.31;
  box(ctrl, 0, 0, 0, 0.62, 0.095, 0.295, grey, 0.047);
  ball(ctrl, -0.24, -0.012, 0.015, 0.12, 0.061, 0.163, grey);
  ball(ctrl, 0.24, -0.012, 0.015, 0.12, 0.061, 0.163, grey);
  box(ctrl, -0.177, 0.052, 0.002, 0.052, 0.02, 0.143, rubber, 0.006);
  box(ctrl, -0.177, 0.055, 0.002, 0.141, 0.02, 0.048, rubber, 0.006);
  for (let [a, b] of [
    [0.11, 0.039],
    [0.195, -0.021],
    [0.181, 0.07],
    [0.261, 0.012],
  ])
    cylinder(ctrl, a, 0.061, b, 0.027, 0.027, 0.022, purple, 16);
  for (let i = 0; i < 2; i++)
    box(ctrl, -0.045 + i * 0.079, 0.055, 0.04, 0.05, 0.014, 0.022, rubber, 0.006).rotation.y = -0.28;
  const path = [
    [-0.18, 0.11, 0.44],
    [-0.18, 0.052, 0.54],
    [0.02, 0.027, 0.62],
    [0.26, 0.027, 0.59],
  ];
  for (let i = 0; i <= 58; i++) {
    let t = i / 58,
      a = t * 5 * 2 * Math.PI;
    path.push([
      0.26 + 0.51 * t + 0.06 * Math.sin(a),
      0.056 + 0.035 * Math.cos(a),
      0.59 + 0.047 * Math.cos(a),
    ]);
  }
  path.push([0.86, 0.035, 0.57], [0.94, 0.052, 0.43], [0.9, 0.07, 0.3]);
  wire(g, path, 0.012, rubber, 160);
  shadow(p, x, y + 0.004, z, 1.65, 1.1);
}
function soda(p, x, y, z) {
  let g = group(p, x, y, z);
  g.rotation.y = -0.55;
  let h = 0.49,
    r = 0.124;
  let map = canvasTex(512, 480, (c, w, H) => {
    c.fillStyle = '#a1483f';
    c.fillRect(0, 0, w, H);
    let q = c.createLinearGradient(0, 0, w, 0);
    q.addColorStop(0, '#311c3e55');
    q.addColorStop(0.5, '#ffe3a333');
    q.addColorStop(1, '#32213366');
    c.fillStyle = q;
    c.fillRect(0, 0, w, H);
    for (let i = -1; i < 4; i++) {
      c.strokeStyle = '#ecd0a2';
      c.lineWidth = 9;
      c.beginPath();
      c.moveTo(i * 200 - 80, 370);
      c.bezierCurveTo(i * 200 + 70, 470, i * 200 + 170, 130, i * 200 + 220, 168);
      c.stroke();
      c.save();
      c.translate(i * 250 + 45, 240);
      c.rotate(-0.16);
      c.font = 'italic 900 64px serif';
      c.fillStyle = '#ffe4c2';
      c.fillText('Cola', 0, 0);
      c.restore();
    }
    ink(c, 'CHERRY   •   CLASSIC', 100, 421, 17, '#f0c89d');
    speckle(c, w, H, 12000);
  });
  const pts = [
    [0.101, 0],
    [r, 0.031],
    [r, 0.1],
    [r * 0.97, 0.2],
    [r * 0.95, 0.26],
    [r, 0.32],
    [r, 0.41],
    [0.106, 0.466],
    [0.108, h],
  ];
  mesh(
    g,
    new T.LatheGeometry(
      pts.map(([a, b]) => new T.Vector2(a, b)),
      40,
    ),
    surface('#ffffff', 0.32, 0.43, map),
  );
  cylinder(g, 0, h, 0, 0.11, 0.109, 0.014, iron);
  let ring = mesh(g, new T.TorusGeometry(0.103, 0.008, 8, 38), iron, 0, h + 0.01, 0);
  ring.rotation.x = -Math.PI / 2;
  ball(g, 0, h + 0.01, -0.039, 0.043, 0.004, 0.033, rubber);
  let tab = mesh(g, new T.TorusGeometry(0.027, 0.007, 7, 18), iron, 0, h + 0.023, 0.011);
  tab.rotation.x = -Math.PI * 0.42;
  tab.scale.y = 1.45;
  shadow(p, x, y + 0.004, z, 0.45, 0.45);
}
function rcas(p, x, y, z) {
  let g = group(p, x, y, z);
  for (let i = 0; i < 3; i++) {
    let iso = surface(['#c59b42', '#b94c44', '#d8cfb4'][i], 0.57),
      a = i * 0.15;
    wire(
      g,
      [
        [-0.52 + a, 0.024, -0.47],
        [-0.62 + a, 0.03, -0.13],
        [-0.28 + a, 0.027, 0.19],
        [0.18 + a, 0.02, 0.13],
        [0.42 + a, 0.03, -0.11],
        [0.2 + a, 0.029, -0.24],
        [0.05 + a, 0.035, -0.13],
        [0.23 + a, 0.04, 0.01],
        [0.42 + a, 0.05, 0.22 + i * 0.05],
      ],
      0.014,
      rubber,
      62,
    );
    let plug = group(g, 0.44 + a, 0.053, 0.26 + i * 0.05);
    plug.rotation.y = 0.55 + i * 0.22;
    for (let [d, r, h, m] of [
      [0, 0.031, 0.13, iso],
      [0.068, 0.035, 0.042, iso],
      [0.111, 0.021, 0.056, iron],
      [0.161, 0.008, 0.055, brass],
    ]) {
      let o = cylinder(plug, 0, 0, d, r, r, h, m, 16);
      o.rotation.x = Math.PI * 0.5;
    }
  }
}
export function receiver(p, x, y, z, width = 1) {
  let g = group(p, x, y, z);
  g.scale.set(width, 0.91, 1);
  box(g, 0, 0.19, 0, 1.96, 0.38, 0.7, dark, 0.03);
  const t = canvasTex(970, 175, (c, w, h) => {
    c.fillStyle = '#494948';
    c.fillRect(0, 0, w, h);
    ink(c, 'STEREO RECEIVER', 29, 36, 18, '#c3c0a8');
    c.fillStyle = '#182d30';
    c.fillRect(42, 48, 590, 80);
    for (let i = 0; i < 50; i++) {
      c.fillStyle = i % 5 ? '#488778' : '#a7c5a1';
      c.fillRect(62 + i * 11, 65, 2, i % 5 ? 12 : 24);
    }
    ink(
      c,
      '88    90    92    94    96    98   100   104   108',
      70,
      109,
      13,
      '#adc3a2',
      false,
      'left',
      'monospace',
    );
    c.fillStyle = '#e48b55';
    c.fillRect(405, 52, 3, 69);
    speckle(c, w, h, 7000);
  });
  panel(g, 0, 0.19, 0.353, 1.91, 0.354, print(t, 0.32));
  for (let i = 0; i < 3; i++)
    disk(g, 0.44 + i * 0.205, 0.18, 0.375, i === 2 ? 0.099 : 0.063, 0.035, iron);
}
export function populate(p) {
  let y = 0.959;
  consoleDeck(p, 0.83, y, 0.93);
  soda(p, -2.03, y, 1.02);
  rcas(p, 2.95, y, 0.54);
  sleeve(p, -1.3, y, 0.83, 0.94, 0.55, 0, -0.08);
  sleeve(p, -1.34, y + 0.138, 0.83, 0.94, 0.55, 1, -0.15);
  looseVhs(p, -1.36, y + 0.276, 0.82, -0.21);
  sleeve(p, 2.29, y, 0.69, 0.83, 0.49, 2, 0.12);
  sleeve(p, 2.29, y + 0.125, 0.68, 0.82, 0.49, 4, -0.02);
  sleeve(p, 4.36, y, 0.83, 0.77, 0.49, 3, -0.12);
  // A run of upright VHS sleeves in the lower open cabinets.
  for (let i = 0; i < 19; i++) {
    let pos = i < 10 ? -4.71 + i * 0.24 : 2.54 + (i - 10) * 0.244;
    let g = group(p, pos, 0.19, 0.73);
    g.rotation.z = 0.012 * Math.sin(i);
    box(g, 0, 0.28, 0, 0.21, 0.55, 0.6, plastic, 0.01);
    const f = panel(g, 0, 0.277, 0.302, 0.54, 0.201, spines[i % 9]);
    f.rotation.z = Math.PI / 2;
  }
  // A pair of worn foam headphones hangs by its band from the main cabinet.
  let phones = group(p, 0.82, 2.7, 0.4);
  phones.rotation.z = -0.18;
  phones.rotation.y = -0.21;
  let bow = [];
  for (let i = 0; i <= 36; i++) {
    let a = (i / 36) * Math.PI;
    bow.push([0.175 * Math.cos(a), 0.31 * Math.sin(a), 0]);
  }
  wire(phones, bow, 0.023, rubber, 54);
  wire(
    phones,
    bow.map(([a, b, d]) => [a, b + 0.013, d + 0.015]),
    0.01,
    iron,
    54,
  );
  for (let side of [-1, 1]) {
    let ear = group(phones, side * 0.165, -0.035, 0);
    ear.rotation.z = side * 0.16;
    ball(ear, 0, 0, 0, 0.069, 0.131, 0.097, rubber);
    ball(ear, side * 0.038, 0, 0.011, 0.058, 0.103, 0.08, plastic);
  }
  wire(
    phones,
    [
      [0.16, -0.12, 0.01],
      [0.13, -0.36, 0.02],
      [0.19, -0.67, 0.04],
      [0.17, -1.1, -0.01],
      [0.37, -1.55, -0.03],
      [0.44, -1.7, -0.1],
    ],
    0.009,
    rubber,
    40,
  );
  // Pencilled cue times on a rental-counter card, with a worn wood pencil.
  let slip = group(p, -0.34, y + 0.008, 1.1);
  slip.rotation.y = -0.19;
  const cue = canvasTex(500, 330, (c, W, H) => {
    c.fillStyle = '#cfc2a5';
    c.fillRect(0, 0, W, H);
    ink(c, 'MIDNIGHT VIDEO', 22, 45, 30, '#953d41');
    ink(c, 'DUB LOG    11 / 18 / 94', 23, 73, 17, '#504852', true, 'left', 'monospace');
    for (let i = 0; i < 5; i++) {
      c.fillStyle = '#879997';
      c.fillRect(23, 108 + i * 41, 455, 2);
    }
    ink(c, '23:42   outside / rain', 38, 140, 26, '#434456', false, 'left', 'cursive');
    ink(c, '23:47   B-side mix', 35, 188, 28, '#434456', false, 'left', 'cursive');
    speckle(c, W, H, 5000);
  });
  let card = panel(slip, 0, 0, 0, 0.58, 0.37, print(cue, 0.085));
  card.rotation.x = -Math.PI / 2;
  const pencil = group(p, -0.49, y + 0.02, 1.33);
  pencil.rotation.y = -0.29;
  const shaft = cylinder(pencil, 0, 0, 0, 0.014, 0.014, 0.41, brass, 6);
  shaft.rotation.z = Math.PI / 2;
  const tip = cylinder(pencil, 0.222, 0, 0, 0, 0.014, 0.034, paper, 6);
  tip.rotation.z = -Math.PI / 2;
  receiver(p, -3.18, 0.19, 1.04);
}
