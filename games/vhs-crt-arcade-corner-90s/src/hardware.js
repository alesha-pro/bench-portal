import * as T from 'three';
import {
  group,
  mesh,
  box,
  panel,
  disk,
  ball,
  cylinder,
  wire,
  ink,
  canvasTex,
  speckle,
  surface,
  print,
  lum,
  dark,
  rubber,
  iron,
  brass,
  woodMap,
  shadow,
  rand,
  label,
} from './craft.js';
import { crt } from './tubes.js';

const ledG = lum('#75ffc9', 2.4),
  bezel = surface('#383b40', 0.34, 0.24),
  chrome = surface('#adaea7', 0.28, 0.65);
const screwMap = canvasTex(128, 128, (c) => {
  let g = c.createRadialGradient(52, 44, 1, 64, 64, 59);
  g.addColorStop(0, '#99988c');
  g.addColorStop(0.75, '#555755');
  g.addColorStop(1, '#202027');
  c.fillStyle = g;
  c.fillRect(0, 0, 128, 128);
  c.strokeStyle = '#272727';
  c.lineWidth = 11;
  c.beginPath();
  c.moveTo(39, 39);
  c.lineTo(91, 91);
  c.moveTo(89, 40);
  c.lineTo(39, 89);
  c.stroke();
});
const screwFace = print(screwMap);
function screw(p, x, y, z, r = 0.015) {
  const s = cylinder(p, x, y, z, r, r, 0.009, [iron, screwFace, iron], 12);
  s.rotation.x = Math.PI / 2;
}
const cases = [
  { color: '#91664c', face: '#47423e', name: 'PANAVISTA', model: 'COLORVISION  •  CV-2700', side: true },
  { color: '#b6aa8b', face: '#a09680', name: 'ORBIT', model: 'PORTABLE 14  ·  UHF', side: true },
  {
    color: '#51555c',
    face: '#484a4c',
    name: 'TRINITEC',
    model: 'PVM-9042Q    •    COLOR VIDEO MONITOR',
  },
  { color: '#728278', face: '#64766e', name: 'VECTOR', model: 'X–Y  /  WAVEFORM MONITOR' },
  { color: '#4c555b', face: '#454b50', name: 'TRINITEC', model: 'PVM-1440   ·   PROFESSIONAL' },
  { color: '#b1a59b', face: '#9c9490', name: 'KOSMO', model: 'MULTISYSTEM   /   AV INPUT' },
];
function outline(w, h, r) {
  const pts = [];
  for (let k = 0; k < 4; k++) {
    let cx = [1, -1, -1, 1][k] * (w / 2 - r),
      cy = [1, 1, -1, -1][k] * (h / 2 - r);
    for (let j = 0; j <= 8; j++) {
      let a = (k + j / 8) * Math.PI * 0.5;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  }
  return pts;
}
function lip(p, x, y, z, w, h) {
  const levels = [
    [w + 0.15, h + 0.15, 0.145, -0.009],
    [w + 0.115, h + 0.115, 0.132, 0.025],
    [w + 0.052, h + 0.05, 0.112, 0.041],
    [w - 0.016, h - 0.012, 0.1, 0.011],
  ];
  const verts = [],
    idx = [];
  for (let i = 0; i < levels.length; i++) {
    let [a, b, r, d] = levels[i],
      pts = outline(a, b, r);
    pts.forEach(([xx, yy]) => verts.push(xx, yy, d));
    if (i > 0) {
      let n = pts.length;
      for (let j = 0; j < n; j++) {
        let u = (i - 1) * n + j,
          v = (i - 1) * n + ((j + 1) % n);
        idx.push(u, v, v + n, u, v + n, u + n);
      }
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  let m = mesh(p, g, bezel, x, y, z);
  m.material.side = T.DoubleSide;
}
function fascia(spec, w, h, side) {
  return canvasTex(1024, Math.round((1024 * h) / w), (c, W, H) => {
    c.fillStyle = spec.face;
    c.fillRect(0, 0, W, H);
    let g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#ffffff21');
    g.addColorStop(0.28, '#00000004');
    g.addColorStop(0.88, '#10111c19');
    g.addColorStop(1, '#00000043');
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
    for (let i = 0; i < H; i += 3) {
      c.fillStyle = 'rgba(0,0,0,.026)';
      c.fillRect(0, i, W, 1);
    }
    ink(c, spec.name, 45, H - 28, side ? 26 : 28, '#ebe0cf', true);
    ink(c, spec.model, side ? 255 : 265, H - 31, 13, '#d4ccba', true, 'left', 'monospace');
    if (side) {
      for (let j = 0; j < 30; j++) {
        let y = H * 0.48 + j * H * 0.011;
        c.fillStyle = '#17191c';
        c.fillRect(W * 0.857, y, W * 0.098, 2.7);
        c.fillStyle = '#92847a';
        c.fillRect(W * 0.857, y + 3, W * 0.098, 1);
      }
      ink(c, 'UHF · VHF', W * 0.85, H * 0.42, 14, '#dfd0b9');
    } else {
      for (let j = 0; j < 4; j++)
        for (let i = 0; i < 29; i++) {
          c.fillStyle = '#24262a';
          c.fillRect(W * 0.58 + i * 9, H * 0.875 + j * 5, 5, 2);
        }
    }
    speckle(c, W, H, 18000);
    for (let i = 0; i < 38; i++) {
      c.fillStyle = '#ddd0ae33';
      c.fillRect(rand() * W, H * (0.04 + 0.92 * rand()), 3 + rand() * 10, 1);
    }
  });
}
export function monitor(parent, { x, y, z, w, h, d, style, id, turn = 0 }) {
  let p = group(parent, x, y + h / 2, z);
  p.rotation.y = turn;
  const s = cases[style],
    side = !!s.side;
  let casing = surface(s.color, 0.46, 0.14, style === 0 ? woodMap : null);
  box(p, 0, 0, -0.09, w * 0.9, h * 0.93, d, casing, 0.1);
  box(p, 0, 0.009, d * 0.28, w, h, d * 0.52, casing, 0.065);
  const front = d * 0.55;
  box(p, 0, 0, front - 0.026, w * 0.972, h * 0.959, 0.065, style === 0 ? brass : casing, 0.03);
  panel(p, 0, 0, front + 0.009, w * 0.948, h * 0.936, print(fascia(s, w, h, side), 0.035));
  let sw = w * (side ? 0.732 : 0.825),
    sh = h * (side ? 0.737 : 0.718),
    sx = side ? -w * 0.072 : 0,
    sy = h * 0.045;
  box(p, sx, sy, front + 0.013, sw + 0.1, sh + 0.1, 0.035, rubber, 0.016);
  lip(p, sx, sy, front + 0.025, sw, sh);
  crt(p, sx, sy, front + 0.054, sw, sh, id, sw * 0.072);
  const kx = w * 0.361;
  if (side) {
    for (let n = 0; n < 2; n++) {
      let ky = h * (0.31 - n * 0.17),
        r = h * (n ? 0.051 : 0.066);
      disk(p, kx, ky, front + 0.034, r * 1.16, 0.025, rubber);
      disk(p, kx, ky, front + 0.06, r, 0.05, n ? bezel : chrome);
      disk(p, kx, ky, front + 0.088, r * 0.82, 0.011, bezel);
      box(p, kx, ky + r * 0.35, front + 0.096, 0.014, r * 0.56, 0.008, chrome).rotation.z = -0.55;
      for (let i = 0; i < 11; i++) {
        let a = (i / 10) * 4.5 - 2.24;
        box(
          p,
          kx + Math.sin(a) * r * 1.42,
          ky + Math.cos(a) * r * 1.42,
          front + 0.019,
          0.008,
          0.014,
          0.006,
          chrome,
        ).rotation.z = -a;
      }
    }
  } else {
    for (let i = 0; i < 5; i++) {
      let bx = -w * 0.35 + i * w * 0.076;
      disk(p, bx, -h * 0.341, front + 0.042, h * 0.027, 0.038, bezel);
      box(p, bx, -h * 0.331, front + 0.064, 0.005, 0.012, 0.007, chrome);
    }
  }
  disk(p, w * 0.41, -h * 0.407, front + 0.026, 0.016, 0.014, ledG);
  box(p, w * 0.335, -h * 0.408, front + 0.025, w * 0.08, h * 0.022, 0.018, rubber, 0.006);
  for (let ax of [-1, 1])
    for (let ay of [-1, 1]) screw(p, ax * w * 0.452, ay * h * 0.438, front + 0.015, w * 0.008);
  for (let a of [-1, 1]) {
    box(p, a * w * 0.34, -h * 0.5 + 0.003, 0.06, w * 0.12, 0.055, d * 0.55, rubber, 0.012);
    for (let i = 0; i < 12; i++)
      box(p, a * w * 0.452, h * 0.19, -d * 0.5 + i * d * 0.054, 0.012, h * 0.37, 0.014, rubber);
  }
  if (style === 0) {
    const memo = canvasTex(320, 268, (c, W, H) => {
      c.fillStyle = '#d7b777';
      c.fillRect(0, 0, W, H);
      ink(c, 'remember', 25, 63, 34, '#665044', false, 'left', 'cursive');
      ink(c, 'to rewind!', 24, 124, 43, '#493b41', false, 'left', 'cursive');
      c.save();
      c.translate(240, 196);
      c.strokeStyle = '#665044';
      c.lineWidth = 4;
      c.beginPath();
      c.arc(0, 0, 28, 0, Math.PI * 2);
      c.stroke();
      c.fillStyle = '#665044';
      c.fillRect(-10, -11, 4, 7);
      c.fillRect(8, -11, 4, 7);
      c.beginPath();
      c.arc(0, 1, 14, 0.15, 2.96);
      c.stroke();
      c.restore();
      speckle(c, W, H, 4000);
    });
    const post = panel(p, w * 0.382, -h * 0.19, front + 0.057, w * 0.115, h * 0.142, print(memo, 0.14));
    post.rotation.z = -0.1;
  }
  shadow(parent, x, y + 0.003, z + 0.06, w * 1.38, d * 1.48);
  return p;
}
export function vcr(parent, x, y, z) {
  const p = group(parent, x, y + 0.168, z);
  const w = 2.64,
    h = 0.336,
    d = 1.18;
  box(p, 0, 0, 0, w, h, d, surface('#5b5755', 0.42, 0.26), 0.045);
  box(p, -0.14, 0.17, 0.01, 1.51, 0.035, 0.86, bezel, 0.013);
  box(p, -0.14, 0.188, 0.02, 1.36, 0.012, 0.73, rubber);
  // The raised carriage pivots on rear hinges; silver runners cradle the cassette.
  let carriage = group(p, -0.14, 0.49, -0.36);
  carriage.rotation.x = 0.31;
  box(carriage, 0, 0.018, 0.36, 1.35, 0.038, 0.74, iron, 0.017);
  for (let side of [-1, 1]) box(carriage, side * 0.67, 0.065, 0.36, 0.029, 0.098, 0.75, bezel, 0.008);
  box(carriage, 0, 0.095, 0.358, 1.2, 0.13, 0.66, rubber, 0.024);
  for (let xx of [-0.35, 0.35]) {
    cylinder(carriage, xx, 0.164, 0.39, 0.158, 0.158, 0.006, bezel);
    cylinder(carriage, xx, 0.168, 0.39, 0.096, 0.096, 0.006, iron);
    cylinder(carriage, xx, 0.173, 0.39, 0.041, 0.041, 0.006, rubber);
  }
  let sticker = canvasTex(480, 96, (c) => {
    c.fillStyle = '#ccc8ab';
    c.fillRect(0, 0, 480, 96);
    c.fillStyle = '#b76151';
    c.fillRect(0, 0, 480, 14);
    ink(c, 'MASTER • NOV 94', 27, 68, 40, '#353342', false, 'left', 'cursive');
  });
  for (let side of [-1, 1])
    wire(
      p,
      [
        [side * 0.55 - 0.14, 0.2, -0.31],
        [side * 0.55 - 0.14, 0.46, -0.3],
      ],
      0.02,
      iron,
      4,
      false,
    );
  let top = panel(carriage, 0, 0.166, 0.598, 0.84, 0.129, print(sticker, 0.1));
  top.rotation.x = -Math.PI / 2;
  for (let n = 0; n < 10; n++) box(p, 0.75 + n * 0.042, 0.17, -0.18, 0.014, 0.008, 0.41, rubber);
  const f = canvasTex(1200, 160, (c, W, H) => {
    c.fillStyle = '#353839';
    c.fillRect(0, 0, W, H);
    c.fillStyle = '#787873';
    c.fillRect(0, 15, W, 2);
    ink(c, 'PANAVISTA', 28, 69, 24, '#d7d3bf');
    ink(c, 'VIDEO CASSETTE RECORDER   •   HQ', 28, 126, 16, '#b2a894');
    ink(c, 'VHS', 416, 94, 41, '#e1decb', true, 'left', 'serif');
    c.fillStyle = '#112627';
    c.fillRect(574, 24, 250, 112);
    ink(c, '11:47', 594, 101, 64, '#7affdf', false, 'left', 'monospace');
    ink(c, 'SP   ●   TIMER', 607, 125, 13, '#58bfae');
    ink(c, 'REC     REW     PLAY     FF', 850, 59, 16, '#d3cbbb');
    speckle(c, W, H, 4000);
  });
  panel(p, 0, 0, d * 0.5 + 0.003, w * 0.98, h * 0.9, print(f, 0.12));
  const vfd = canvasTex(440, 144, (c, W, H) => {
    c.fillStyle = '#0c1d20';
    c.fillRect(0, 0, W, H);
    c.shadowColor = '#4beed4';
    c.shadowBlur = 6;
    ink(c, '11:47', 20, 99, 87, '#92ffe0', false, 'left', 'monospace');
    ink(c, 'SP   ▸   TIMER', 236, 126, 16, '#6bcaaf', true, 'left', 'monospace');
  });
  panel(
    p,
    0.214,
    0.001,
    d * 0.5 + 0.006,
    0.539,
    0.211,
    new T.MeshBasicMaterial({ map: vfd, color: new T.Color(1.2, 1.4, 1.34) }),
  );
  for (let i = 0; i < 4; i++)
    box(p, 0.63 + i * 0.16, -0.026, 0.607, 0.118, 0.048, 0.033, i ? iron : rubber, 0.007);
  for (let i = 0; i < 17; i++) box(p, -1.18 + i * 0.023, 0.17, 0.0, 0.008, 0.01, 0.51, rubber);
  return p;
}
function arcadeArt() {
  return canvasTex(512, 768, (c, W, H) => {
    let g = c.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#203d56');
    g.addColorStop(0.58, '#405071');
    g.addColorStop(1, '#12283f');
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
    for (let i = 0; i < 125; i++) {
      c.fillStyle = '#e2e0c9';
      let n = 1 + rand() * 3;
      c.fillRect(rand() * W, rand() * H, n, n);
    }
    for (let i = 0; i < 4; i++) {
      c.fillStyle = ['#ff655c', '#e49b59', '#d6b96d', '#5fb9b3'][i];
      c.save();
      c.translate(0, 390);
      c.rotate(-0.48);
      c.fillRect(-200, i * 20, 1000, 13);
      c.restore();
    }
    c.save();
    c.translate(270, 300);
    c.rotate(-0.45);
    c.fillStyle = '#a6d5c9';
    c.beginPath();
    c.moveTo(0, -145);
    c.lineTo(86, 104);
    c.lineTo(0, 69);
    c.lineTo(-86, 104);
    c.closePath();
    c.fill();
    c.fillStyle = '#386277';
    c.beginPath();
    c.moveTo(0, -98);
    c.lineTo(19, 50);
    c.lineTo(-16, 50);
    c.fill();
    c.restore();
    ink(c, 'STAR', 30, 568, 110, '#ffeaca', true, 'left', 'sans-serif');
    ink(c, 'CADET', 30, 655, 103, '#ff9568');
    ink(c, 'ORBITAL AMUSEMENTS', 34, 707, 26, '#b2e0da', true, 'left', 'monospace');
    speckle(c, W, H, 14000);
  });
}
export function arcade(parent, x, y, z) {
  let p = group(parent, x, y, z);
  p.rotation.y = -0.23;
  const shell = surface('#25394a', 0.4, 0.14),
    trim = surface('#d8735b', 0.42, 0.2);
  const profile = [
    [-0.54, 0.03],
    [0.39, 0.03],
    [0.47, 0.56],
    [0.68, 0.68],
    [0.69, 0.82],
    [0.34, 0.86],
    [0.14, 1.67],
    [0.47, 1.73],
    [0.47, 2.02],
    [-0.47, 2.08],
    [-0.57, 1.86],
  ];
  // Side cheeks extruded in the Y/Z plane, edged with red vinyl T-molding.
  const art = print(arcadeArt(), 0.1);
  for (let s of [-1, 1]) {
    let verts = [],
      uv = [],
      idx = [];
    for (let [zz, yy] of profile) {
      verts.push(s * 0.6, yy, zz);
      uv.push(s > 0 ? 1 - (zz + 0.57) / 1.26 : (zz + 0.57) / 1.26, yy / 2.08);
    }
    let faces = T.ShapeUtils.triangulateShape(
      profile.map(([zz, yy]) => new T.Vector2(zz, yy)),
      [],
    );
    idx = faces.flat();
    let g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
    g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    art.side = T.DoubleSide;
    mesh(p, g, art);
    wire(
      p,
      [...profile, profile[0]].map(([zz, yy]) => [s * 0.6, yy, zz]),
      0.023,
      trim,
      72,
      false,
    );
  }
  box(p, 0, 0.34, -0.01, 1.18, 0.64, 0.89, shell, 0.025);
  box(p, 0, 1.3, -0.135, 1.15, 1.13, 0.57, rubber, 0.04);
  const sg = group(p, 0, 1.3, 0.258);
  sg.rotation.x = -0.245;
  box(sg, 0, 0, 0, 1.14, 0.94, 0.16, dark, 0.045);
  lip(sg, 0, 0.015, 0.09, 0.94, 0.7);
  crt(sg, 0, 0.015, 0.124, 0.94, 0.7, 2, 0.065);
  box(p, 0, 0.748, 0.23, 1.16, 0.14, 0.89, shell, 0.024);
  box(p, 0, 0.83, 0.46, 1.11, 0.015, 0.42, surface('#4a5067'), 0.006);
  cylinder(p, -0.27, 0.91, 0.51, 0.035, 0.035, 0.14, chrome);
  cylinder(p, -0.27, 0.85, 0.51, 0.087, 0.087, 0.025, rubber);
  ball(p, -0.27, 1.0, 0.51, 0.077, 0.077, 0.077, surface('#bb473a', 0.2, 0.28));
  for (let i = 0; i < 3; i++) {
    let a = 0.02 + i * 0.155;
    cylinder(p, a, 0.849, 0.47 - i * 0.04, 0.064, 0.064, 0.024, rubber);
    cylinder(
      p,
      a,
      0.87,
      0.47 - i * 0.04,
      0.051,
      0.053,
      0.021,
      i ? surface('#b54d44', 0.25, 0.23) : brass,
    );
  }
  box(p, 0, 1.866, 0.22, 1.16, 0.32, 0.45, shell, 0.025);
  const marquee = canvasTex(900, 228, (c, W, H) => {
    c.fillStyle = '#1e3652';
    c.fillRect(0, 0, W, H);
    for (let i = 0; i < 150; i++) {
      c.fillStyle = '#f3dfb5';
      c.fillRect(rand() * W, rand() * H, 2, 2);
    }
    c.save();
    c.transform(1, 0, -0.2, 1, 0, 0);
    ink(c, 'STAR CADET', 72, 148, 125, '#d16569');
    ink(c, 'STAR CADET', 67, 141, 125, '#ffe3aa');
    c.restore();
    ink(c, '★    ORBITAL AMUSEMENTS    ★', 452, 195, 26, '#8fe1d1', true, 'center', 'monospace');
  });
  panel(p, 0, 1.871, 0.454, 1.13, 0.292, print(marquee, 1.15));
  label(p, 0, 0.42, 0.445, 0.63, 0.13, 'INSERT COIN', '#20282f', '#f2bc75');
  box(p, 0, 0.24, 0.449, 0.3, 0.18, 0.025, rubber, 0.012);
  box(p, 0.02, 0.25, 0.467, 0.135, 0.022, 0.01, brass);
  shadow(parent, x, y + 0.006, z, 1.75, 1.65);
}
