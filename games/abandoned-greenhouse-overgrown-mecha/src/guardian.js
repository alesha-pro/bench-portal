import {
  T,
  TAU,
  V,
  rand,
  group,
  m,
  G,
  tex,
  mesh,
  box,
  ball,
  pebble,
  rod,
  ring,
  branch,
  lathe,
  standard,
  bake,
  canvasMap,
  ease,
} from './workshop.js';
import { plant, tuft, hang, mossCrown, mushrooms } from './botany.js';

const glow = (c, e, i) =>
  new T.MeshStandardMaterial({
    color: c,
    emissive: e,
    emissiveIntensity: i,
    metalness: 0.22,
    roughness: 0.27,
  });
const heart = glow(0xffbe63, 0xff9526, 2.6),
  pilot = glow(0xf4cfa6, 0xffa23a, 0.52);
const eyeGlass = standard(0x3a4838, 0.13, 0.58);
const greenGlass = glow(0x99c671, 0x66882c, 0.38);
const flowers = standard(0xf5e4bf, 0.84, 0);
const fastener = (p, x, y, z, r = 0.032) => {
  const o = mesh(p, G.bolt, m.brass, x, y, z, r, 0.022, r);
  o.rotation.x = Math.PI / 2;
  box(p, m.dark, x, y, z + 0.012, r * 1.05, r * 0.16, 0.003).rotation.z = 0.46;
};
function stamped(p, text, x, y, z, w, h) {
  const tex = canvasMap(512, 160, (c, W, H) => {
    c.fillStyle = '#493f2e';
    c.textAlign = 'center';
    c.font = 'bold 88px Georgia';
    c.fillText(text, W / 2, 96);
    c.fillRect(132, 112, 248, 3);
    c.font = '16px monospace';
    c.fillText('HORTUS  •  MECHANICA', W / 2, 141);
    c.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 540; i++) c.fillRect(rand(0, W), rand(0, H), rand(1, 5), rand(1, 3));
  });
  const mat = new T.MeshBasicMaterial({
    map: tex,
    transparent: true,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    depthWrite: false,
  });
  return mesh(p, new T.PlaneGeometry(w, h), mat, x, y, z);
}
function axle(p, pos, r) {
  const [x, y, z] = pos;
  ball(p, m.dark, x, y, z, r, r * 0.94, r * 0.86);
  const q = rod(p, m.bronze, [x - r * 1.06, y, z], [x + r * 1.06, y, z], r * 0.73, G.cyl);
  for (const s of [-1, 1]) {
    const end = x + s * r * 1.09;
    rod(p, m.gold, [end, y, z], [end + s * 0.025, y, z], r * 0.6, G.cyl);
    rod(p, m.iron, [end + s * 0.021, y, z], [end + s * 0.043, y, z], r * 0.4, G.bolt);
  }
  return q;
}
function limb(p, a, b, r, mat, side = 1) {
  const A = V(...a),
    D = V(...b).sub(A),
    L = D.length(),
    g = group(p, ...a);
  g.quaternion.setFromUnitVectors(V(0, 1, 0), D.normalize());
  const unit = (prof, material, sx = 1, sz = 1) =>
    lathe(
      g,
      material,
      prof.map(([rad, y]) => [rad * r, y * L]),
      0,
      0,
      0,
      sx,
      sz,
      40,
    );
  unit(
    [
      [0.02, 0],
      [0.48, 0.02],
      [0.58, 0.09],
      [0.56, 0.94],
      [0.42, 0.99],
      [0.02, 1],
    ],
    m.dark,
  );
  unit(
    [
      [0.64, 0.12],
      [0.78, 0.15],
      [0.8, 0.19],
      [0.72, 0.22],
      [0.71, 0.74],
      [0.79, 0.78],
      [0.8, 0.84],
      [0.71, 0.88],
    ],
    m.bronze,
  );
  unit(
    [
      [0.77, 0.19],
      [0.95, 0.22],
      [1.01, 0.33],
      [1, 0.47],
      [0.88, 0.64],
      [0.78, 0.75],
      [0.72, 0.78],
    ],
    mat,
    1,
    0.92,
  );
  for (const t of [0.12, 0.16, 0.79, 0.84, 0.91])
    unit(
      [
        [t < 0.2 ? 0.72 : 0.68, t],
        [t < 0.2 ? 0.76 : 0.71, t + 0.018],
      ],
      m.gold,
    );
  for (const s of [-1, 1]) {
    rod(
      g,
      m.dark,
      [s * r * 0.72, L * 0.08, -r * 0.43],
      [s * r * 0.75, L * 0.88, -r * 0.4],
      r * 0.105,
    );
    rod(
      g,
      m.brass,
      [s * r * 0.74, L * 0.56, -r * 0.42],
      [s * r * 0.75, L * 0.9, -r * 0.4],
      r * 0.063,
    );
  }
  for (const y of [0.28, 0.65]) fastener(g, r * 0.48 * side, L * y, r * 0.76, r * 0.08);
  return g;
}
function hand(p, x, y, z, raised) {
  const h = group(p, x, y, z),
    s = raised ? 1 : -1;
  h.rotation.z = raised ? -0.13 : 0.25;
  h.rotation.y = raised ? -0.19 : 0.15;
  ball(h, m.bronze, 0, 0, 0, 0.215, 0.135, 0.21);
  ball(h, m.ivory, 0, 0.076, -0.015, 0.218, 0.092, 0.203);
  for (let i = 0; i < 4; i++) {
    const offset = (i - 1.5) * 0.097,
      len = raised ? [0.19, 0.3, 0.33, 0.4][i] : 0.21 - i * 0.012;
    const a = [s * 0.13, 0.033, offset],
      b = [s * (0.13 + len * 0.49), 0.045 + (raised ? 0.037 : -0.085), offset + 0.02],
      c = [s * (0.13 + len * 0.83), raised ? 0.1 : -0.14, offset + 0.065],
      d = [s * (0.13 + len), raised ? 0.129 : -0.2, offset + 0.098];
    [a, b, c].forEach((q) => pebble(h, m.dark, ...q, 0.058, 0.055, 0.05));
    for (const [start, end, rad] of [
      [a, b, 0.06],
      [b, c, 0.051],
      [c, d, 0.042],
    ]) {
      rod(h, m.bronze, start, end, rad, G.cyl);
      const cap = V(...start).lerp(V(...end), 0.52);
      pebble(h, m.sage, cap.x, cap.y + 0.022, cap.z, rad * 1.23, rad * 0.8, rad * 0.98);
    }
  }
  rod(h, m.bronze, [-s * 0.04, 0, 0.13], [-s * 0.05, 0.08, 0.31], 0.071);
  rod(h, m.ivory, [-s * 0.05, 0.08, 0.31], [s * 0.03, 0.14, 0.36], 0.058);
  for (let i = 0; i < 3; i++)
    hang(h, 'ivy', s * (0.13 + i * 0.06), -0.01, -0.08 + i * 0.1, 0.26 + i * 0.1, i * 0.91);
  const tip = V(s * 0.53, 0.168, 0.247);
  h.updateWorldMatrix(true, false);
  return h.localToWorld(tip);
}
function abdomen(p) {
  for (let i = 0; i < 5; i++) {
    const y = 1.18 + i * 0.104;
    lathe(
      p,
      i % 2 ? m.bronze : m.dark,
      [
        [0.52, 0],
        [0.66, 0.014],
        [0.67, 0.053],
        [0.57, 0.082],
      ],
      0,
      y,
      -0.09,
      1,
      0.79,
    );
  }
  ball(p, m.bronze, 0, 1.16, -0.04, 0.81, 0.35, 0.56);
  for (const s of [-1, 1]) {
    const hip = [s * 0.58, 1.24, 0],
      knee = [s * (s > 0 ? 0.78 : 0.93), s > 0 ? 0.96 : 1.1, s > 0 ? 0.82 : 0.75],
      ankle = [s * (s > 0 ? 1.05 : 1.19), 0.32, s > 0 ? 1.2 : 1.32];
    axle(p, hip, 0.32);
    limb(p, hip, knee, 0.38, m.sage);
    axle(p, knee, 0.34);
    limb(p, knee, ankle, 0.33, m.ivory);
    ball(p, m.ivory, knee[0], knee[1] + 0.045, knee[2] + 0.192, 0.34, 0.33, 0.2);
    const foot = group(p, ...ankle);
    foot.rotation.y = s * 0.25;
    ball(foot, m.dark, 0, -0.16, 0.21, 0.36, 0.14, 0.54);
    ball(foot, m.bronze, 0, -0.06, 0.18, 0.376, 0.208, 0.53);
    ball(foot, m.ivory, 0, -0.055, 0.31, 0.355, 0.18, 0.45);
    for (let i = 0; i < 3; i++)
      ball(foot, m.bronze, (i - 1) * 0.184, -0.107, 0.63, 0.11, 0.135, 0.16);
    mossCrown(p, knee[0], knee[1] + 0.29, knee[2] + 0.08, 0.25, 0.17, 16);
  }
}
function breast(p) {
  const cy = 2.44,
    body = group(p, 0, cy, -0.04);
  const shell = lathe(
    body,
    m.sage,
    [
      [0.02, -0.65],
      [0.52, -0.61],
      [0.89, -0.42],
      [1.02, -0.11],
      [1.02, 0.13],
      [0.96, 0.34],
      [0.84, 0.5],
      [0.68, 0.62],
      [0.57, 0.65],
      [0.52, 0.61],
      [0.5, 0.49],
    ],
    0,
    0,
    0,
  );
  shell.rotation.x = Math.PI / 2;
  shell.scale.set(1.08, 1, 1.01);
  const liner = lathe(
    body,
    m.bronze,
    [
      [0.55, 0.64],
      [0.505, 0.59],
      [0.485, 0.45],
      [0.43, 0.25],
      [0.34, 0.12],
      [0.01, 0.1],
    ],
    0,
    0,
    0,
  );
  liner.rotation.x = Math.PI / 2;
  liner.scale.set(1.07, 1, 1);
  ring(body, m.bronze, 0, 0, 0.641, 0.569, 0.042, 1.03);
  ring(body, m.gold, 0, 0, 0.662, 0.553, 0.015, 1.035);
  ring(body, m.dark, 0, 0, 0.616, 0.492, 0.026, 1.06);
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * TAU,
      r = 0.615;
    fastener(body, r * Math.cos(a), r * Math.sin(a), 0.657, 0.018);
  }
  // Narrow metal reveals split the heavy casting into replaceable enamel plates.
  const curveOfShell = [
    [0.57, 0.653],
    [0.68, 0.623],
    [0.76, 0.564],
    [0.84, 0.505],
    [0.96, 0.345],
    [1.02, 0.136],
  ];
  for (let i = 0; i < 12; i++) {
    const a = (i * TAU) / 12 + 0.13;
    const path = curveOfShell.map(([r, z], j) => [
      Math.cos(a + (0.11 * j) / 5) * r * 1.081,
      Math.sin(a + (0.11 * j) / 5) * r * 1.012,
      z,
    ]);
    branch(body, m.bronze, path, 0.009, 0.012, 13, 6);
    if (i % 2 === 0) {
      const [x, y, z] = path[3];
      fastener(body, x, y, z + 0.003, 0.026);
    }
  }
  for (const s of [-1, 1]) {
    const ridge = [];
    for (let j = 0; j <= 20; j++) {
      const a = -0.78 + (j / 20) * 1.66;
      ridge.push([s * 0.864 * Math.cos(a) * 1.07, 0.864 * Math.sin(a), 0.516]);
    }
    branch(body, m.bronze, ridge, 0.023, 0.022, 30, 8);
  }
  // Two scalloped ceramic leaves swing forward on actual vertical hinge pins.
  for (const s of [-1, 1]) {
    const door = group(body, s * 0.57, -0.007, 0.53);
    door.rotation.y = s * 2.12;
    const sh = new T.Shape();
    sh.moveTo(0, -0.48);
    sh.bezierCurveTo(0.27, -0.43, 0.41, -0.23, 0.448, 0.03);
    sh.bezierCurveTo(0.43, 0.3, 0.25, 0.52, 0.018, 0.55);
    sh.bezierCurveTo(-0.039, 0.21, -0.035, -0.12, 0, -0.48);
    const geo = new T.ExtrudeGeometry(sh, {
      depth: 0.046,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.033,
      bevelThickness: 0.027,
      curveSegments: 20,
    });
    geo.computeBoundingBox();
    const plate = mesh(door, geo, m.ivory);
    plate.scale.x = -s;
    branch(
      door,
      m.brass,
      [
        [0, -0.46, 0.067],
        [-s * 0.23, -0.32, 0.067],
        [-s * 0.39, 0.03, 0.075],
        [-s * 0.24, 0.36, 0.067],
        [0, 0.52, 0.067],
      ],
      0.025,
      0.018,
      28,
      7,
    );
    rod(door, m.brass, [0, -0.44, 0], [0, 0.49, 0], 0.045, G.cyl);
    for (const yy of [-0.34, -0.24, 0.24, 0.34])
      rod(door, m.dark, [0, yy, 0], [0, yy + 0.06, 0], 0.056, G.cyl);
  }
  const rotor = group(body, 0, 0.018, 0.34);
  rotor.userData.moving = true;
  for (let i = 0; i < 3; i++) {
    const hoop = group(rotor);
    hoop.rotation.set(0.25 + i * 0.25, -0.29 + i * 0.25, i * 0.57);
    ring(hoop, i === 1 ? heart : m.gold, 0, 0, 0, 0.202 + i * 0.075, i === 1 ? 0.01 : 0.018);
    for (let j = 0; j < 8; j++) {
      const a = (j / 8) * TAU,
        r = 0.202 + i * 0.075;
      pebble(hoop, i === 2 ? heart : m.gold, Math.cos(a) * r, Math.sin(a) * r, 0, 0.021);
    }
  }
  const crystal = mesh(
    rotor,
    new T.OctahedronGeometry(0.154),
    heart,
    0,
    0,
    0.043,
    0.79,
    1.47,
    0.78,
  );
  crystal.rotation.y = 0.5;
  bake(rotor);
  for (let i = 0; i < 15; i++) {
    const a = rand(-Math.PI, 0),
      r = rand(0.27, 0.43),
      x = r * Math.cos(a),
      y = r * Math.sin(a);
    plant(body, x, y, 0.48 + rand(-0.07, 0.07), rand(0.12, 0.26), 'fern', 5);
    if (i % 3 === 0) {
      rod(body, m.vine, [x, y, 0.46], [x + 0.026, y + 0.13, 0.5], 0.006);
      pebble(body, greenGlass, x + 0.024, y + 0.139, 0.5, 0.03, 0.023, 0.025);
    }
  }
  const lamp = new T.PointLight(0xffb343, 3.2, 2, 0.9);
  body.add(lamp);
  lamp.position.set(0, -0.02, 0.58);
  for (const s of [-1, 1]) {
    for (let i = 0; i < 3; i++)
      branch(
        p,
        i % 2 ? m.gold : m.dark,
        [
          [s * 0.4, 1.53, -0.35],
          [s * 0.71, 1.78, -0.42 - i * 0.05],
          [s * 0.9, 2.1, -0.28],
          [s * 0.89, 2.48, -0.18],
        ],
        0.048 - i * 0.007,
        0.035,
        21,
        8,
      );
  }
  for (const sign of [-1, 1]) {
    // Bonsai-scale saplings grow up the inner walls, leaving the crystal visible between them.
    const cx = sign * 0.32;
    branch(
      body,
      m.bark,
      [
        [cx, -0.34, 0.46],
        [cx + sign * 0.04, -0.22, 0.45],
        [cx - sign * 0.005, -0.09, 0.4],
        [cx + sign * 0.032, 0.06, 0.39],
      ],
      0.031,
      0.009,
      16,
      7,
    );
    for (let j = 0; j < 7; j++) {
      const y = -0.21 + j * 0.044,
        dx = sign * (j % 2 ? 0.087 : -0.062),
        z = 0.4 + 0.028 * Math.sin(j);
      branch(
        body,
        m.vine,
        [
          [cx, y, z],
          [cx + dx * 0.5, y + 0.033, z],
          [cx + dx, y + 0.056, z - 0.016],
        ],
        0.013,
        0.003,
        6,
        5,
      );
      plant(body, cx + dx, y + 0.052, z - 0.016, 0.095 + j * 0.006, 'hosta', 5);
      if (j % 2 === 0) pebble(body, greenGlass, cx + dx, y + 0.082, z + 0.025, 0.015, 0.018, 0.014);
    }
    hang(body, 'ivy', sign * 0.44, 0.28, 0.47, 0.28, sign * 0.6);
  }
  return { rotor, lamp };
}
function headAssembly(p) {
  lathe(
    p,
    m.dark,
    [
      [0.3, 3.15],
      [0.36, 3.23],
      [0.34, 3.37],
      [0.28, 3.51],
      [0.28, 3.62],
    ],
    0,
    0,
    -0.025,
  );
  for (let i = 0; i < 4; i++)
    lathe(
      p,
      m.brass,
      [
        [0.32, 0],
        [0.35, 0.018],
        [0.32, 0.039],
      ],
      0,
      3.25 + i * 0.07,
      -0.022,
      1,
      0.96,
    );
  const pivot = group(p, 0, 3.42, -0.035);
  pivot.userData.moving = true;
  const h = group(pivot, 0, 0.33, 0);
  lathe(
    h,
    m.bronze,
    [
      [0.016, -0.39],
      [0.37, -0.36],
      [0.54, -0.29],
      [0.596, -0.18],
      [0.6, 0.12],
      [0.51, 0.27],
      [0.21, 0.34],
      [0.02, 0.34],
    ],
    0,
    0,
    0,
    1,
    0.81,
  );
  lathe(
    h,
    m.ivory,
    [
      [0.39, -0.304],
      [0.5, -0.27],
      [0.584, -0.21],
      [0.621, -0.1],
      [0.627, 0.095],
      [0.594, 0.215],
      [0.48, 0.317],
      [0.27, 0.374],
      [0.012, 0.38],
    ],
    0,
    0,
    0,
    1,
    0.81,
  );
  for (const [y, r] of [
    [-0.246, 0.56],
    [-0.221, 0.579],
    [0.14, 0.621],
  ]) {
    lathe(
      h,
      y > 0 ? m.bronze : m.gold,
      [
        [r - 0.005, y - 0.011],
        [r + 0.004, y],
        [r, y + 0.012],
      ],
      0,
      0,
      0,
      1,
      0.815,
    );
  }
  // Deep concentric objective, inset leaf shutter and an optically dark outer barrel.
  const lens = group(h, -0.034, -0.006, 0.418);
  for (const [r, d, z, mat] of [
    [0.299, 0.09, 0.007, m.bronze],
    [0.265, 0.09, 0.066, m.dark],
    [0.243, 0.056, 0.129, m.brass],
    [0.221, 0.04, 0.16, m.dark],
  ]) {
    const o = mesh(lens, G.cyl, mat, 0, 0, z, r, d, r);
    o.rotation.x = Math.PI / 2;
  }
  ball(lens, eyeGlass, 0, 0, 0.177, 0.201, 0.201, 0.046);
  ring(lens, m.brass, 0, 0, 0.195, 0.193, 0.012);
  const iris = group(lens, 0, 0, 0.217);
  iris.userData.moving = true;
  const aperture = ball(iris, pilot, 0, 0, 0.004, 0.124, 0.124, 0.027);
  const blades = [];
  for (let i = 0; i < 8; i++) {
    const pivot = group(iris);
    pivot.rotation.z = (i * TAU) / 8;
    const vane = group(pivot, 0, 0.136, 0.015);
    blades.push(vane);
    const sh = new T.Shape();
    sh.moveTo(-0.066, 0.031);
    sh.quadraticCurveTo(0.012, 0.058, 0.079, 0.006);
    sh.lineTo(0.022, -0.103);
    sh.quadraticCurveTo(-0.035, -0.085, -0.066, 0.031);
    mesh(vane, new T.ShapeGeometry(sh, 12), m.bronze);
    pebble(pivot, m.gold, 0, 0.157, 0.024, 0.012, 0.012, 0.006);
  }
  for (let i = 0; i < 12; i++) {
    const a = (i * TAU) / 12;
    fastener(lens, 0.277 * Math.cos(a), 0.277 * Math.sin(a), 0.061, 0.012);
  }
  for (const s of [-1, 1]) {
    rod(h, m.bronze, [s * 0.558, -0.036, -0.02], [s * 0.654, -0.036, -0.02], 0.174, G.cyl);
    rod(h, m.gold, [s * 0.652, -0.036, -0.02], [s * 0.676, -0.036, -0.02], 0.13, G.cyl);
    rod(h, m.dark, [s * 0.677, -0.036, -0.02], [s * 0.689, -0.036, -0.02], 0.081, G.bolt);
    for (let k = 0; k < 4; k++) {
      const a = s * (0.65 + k * 0.115);
      const vent = box(
        h,
        m.dark,
        0.608 * Math.sin(a),
        -0.129,
        0.483 * Math.cos(a),
        0.028,
        0.093,
        0.025,
      );
      vent.rotation.y = a;
    }
  }
  mossCrown(h, -0.13, 0.323, -0.018, 0.438, 0.32, 70);
  plant(h, -0.31, 0.35, -0.04, 0.34, 'fern', 7);
  plant(h, 0.12, 0.38, -0.18, 0.22, 'hosta', 5);
  for (let i = 0; i < 7; i++) {
    const x = rand(-0.34, 0.17),
      z = rand(-0.21, 0.02),
      height = rand(0.09, 0.19);
    rod(h, m.vine, [x, 0.37, z], [x + 0.023, 0.37 + height, z], 0.006);
    for (let k = 0; k < 5; k++)
      pebble(
        h,
        flowers,
        x + 0.023 + 0.019 * Math.cos(k * 1.256),
        0.375 + height,
        z + 0.018 * Math.sin(k * 1.256),
        0.018,
        0.01,
        0.018,
      );
  }
  const lensFace = canvasMap(256, 256, (c, w) => {
    const g = c.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, '#342820');
    g.addColorStop(0.26, '#4c3520');
    g.addColorStop(0.32, '#f6a44e');
    g.addColorStop(0.48, '#ffcd78');
    g.addColorStop(0.71, '#b65e22');
    g.addColorStop(0.88, '#e39841');
    g.addColorStop(1, '#513f2e');
    c.fillStyle = g;
    c.fillRect(0, 0, w, w);
    for (let i = 0; i < 190; i++) {
      const a = rand(0, TAU);
      c.strokeStyle = 'rgba(90,53,19,.35)';
      c.lineWidth = rand(0.4, 2);
      c.beginPath();
      const r = rand(39, 71);
      c.moveTo(128 + r * Math.cos(a), 128 + r * Math.sin(a));
      c.lineTo(128 + 117 * Math.cos(a + 0.03), 128 + 117 * Math.sin(a + 0.03));
      c.stroke();
    }
    c.fillStyle = 'rgba(255,247,208,.92)';
    c.beginPath();
    c.ellipse(96, 86, 12, 6, -0.65, 0, TAU);
    c.fill();
  });
  const opticMat = new T.MeshStandardMaterial({
    map: lensFace,
    emissiveMap: lensFace,
    emissive: 0xffcf92,
    emissiveIntensity: 1.1,
    roughness: 0.2,
    metalness: 0.12,
  });
  const lensDisk = mesh(iris, new T.CircleGeometry(0.118, 54), opticMat, 0, 0, 0.034);
  hang(h, 'ivy', -0.47, 0.23, 0.14, 0.48, -0.63);
  hang(h, 'ivy', 0.47, 0.22, -0.08, 0.31, 1);
  stamped(h, 'VII', 0.346, 0.014, 0.405, 0.2, 0.093).rotation.y = 0.54;
  bake(pivot);
  return { pivot, blades, aperture, lensDisk, opticMat };
}
export function guardian(scene) {
  const p = group(scene, 0, 0.01, 0),
    base = group(p);
  ball(base, m.stone, 0, 0.41, -0.27, 1.11, 0.48, 0.82);
  mossCrown(base, 0, 0.72, -0.34, 0.95, 0.57, 35);
  abdomen(p);
  const chest = breast(p),
    head = headAssembly(p);
  let landing;
  for (const s of [-1, 1]) {
    const raised = s > 0,
      shoulder = [s * 0.997, 2.99, -0.01],
      elbow = raised ? [1.5, 2.04, 0.31] : [-1.4, 1.98, 0.18],
      wrist = raised ? [1.55, 2.57, 0.98] : [-1.51, 1.11, 0.82];
    axle(p, shoulder, 0.365);
    limb(p, shoulder, elbow, 0.31, m.sage);
    axle(p, elbow, 0.246);
    limb(p, elbow, wrist, 0.246, m.ivory);
    axle(p, wrist, 0.17);
    const shoulderShell = group(p, ...shoulder);
    shoulderShell.rotation.z = s * -0.18;
    lathe(
      shoulderShell,
      m.ivory,
      [
        [0.385, -0.105],
        [0.48, -0.06],
        [0.48, 0.045],
        [0.441, 0.179],
        [0.331, 0.288],
        [0.16, 0.329],
        [0.015, 0.334],
      ],
      0,
      0,
      0,
      1,
      0.98,
    );
    lathe(
      shoulderShell,
      m.gold,
      [
        [0.475, -0.075],
        [0.487, -0.057],
        [0.486, -0.034],
      ],
      0,
      0,
      0,
      1,
      0.98,
    );
    mossCrown(shoulderShell, -s * 0.045, 0.281, -0.07, 0.365, 0.286, 51);
    for (let j = 0; j < 3; j++)
      hang(
        shoulderShell,
        'ivy',
        s * (0.25 + j * 0.045),
        0.17 - j * 0.034,
        0.19 - j * 0.12,
        rand(0.37, 0.66),
        s * 0.7,
      );
    for (let j = 0; j < 9; j++) {
      const a = (j / 9) * TAU,
        r = 0.466;
      const riv = pebble(
        shoulderShell,
        m.bronze,
        r * Math.cos(a),
        0.044,
        r * 0.99 * Math.sin(a),
        0.021,
        0.019,
        0.021,
      );
    }
    const tag = stamped(shoulderShell, raised ? 'VII' : 'H • G', 0, 0.093, 0.466, 0.27, 0.13);
    tag.rotation.x = -0.24;
    // Ivy crosses the ceramic from its rooted side, with a visible trailing tip.
    hang(p, 'ivy', s * 0.8, 3.02, 0.36, raised ? 0.59 : 0.76, s * 0.72, 0.85);
    if (!raised) {
      plant(shoulderShell, -0.07, 0.33, -0.08, 0.4, 'fern', 6);
      mushrooms(shoulderShell, -0.18, 0.32, 0.076, 0.47);
    }
    const tip = hand(p, ...wrist, raised);
    if (raised) landing = tip;
  }
  // Woven honeysuckle nest and speckled eggs, oversized only to the scale of a songbird.
  for (const [x, y, z, h, a] of [
    [-0.39, 3.3, 0.25, 0.65, -0.45],
    [-0.61, 3.19, 0.29, 0.72, -0.55],
    [0.76, 2.88, 0.46, 0.43, 0.49],
    [-0.37, 1.57, 0.44, 0.49, -0.37],
  ]) {
    hang(p, 'ivy', x, y, z, h, a, 0.78);
  }
  const nest = group(p, -1.04, 3.34, 0.045);
  for (let i = 0; i < 21; i++) {
    const pts = [],
      r = 0.126 + i * 0.0027,
      y = -0.006 + i * 0.0036;
    for (let k = 0; k <= 24; k++) {
      const a = (k / 24) * TAU + i * 0.27,
        rad = r + 0.009 * Math.sin(a * 5 + i);
      pts.push([Math.cos(a) * rad, y + 0.016 * Math.sin(a * 4 + i), Math.sin(a) * rad * 0.81]);
    }
    branch(nest, i % 3 ? m.vine : m.brass, pts, 0.007, 0.004, 34, 5);
  }
  for (let i = 0; i < 3; i++)
    pebble(nest, m.sage, (i - 1) * 0.053, 0.055, 0.02 * (i % 2), 0.027, 0.038, 0.029);
  bake(p);
  return {
    landing,
    update(t, wake) {
      const flicker =
        1 - 0.33 * Math.exp(-((wake - 0.35) ** 2) / 0.006) * (0.5 + 0.5 * Math.cos(t * 42));
      head.pivot.rotation.set(
        0.165 + 0.035 * Math.sin(t * 0.42) - wake * 0.11,
        wake * 0.33 - 0.08,
        -0.055 - wake * 0.09,
      );
      head.blades.forEach((b) => (b.rotation.z = -0.17 - wake * 0.87));
      head.aperture.scale.set(0.124 * (0.32 + wake * 0.68), 0.124 * (0.32 + wake * 0.68), 0.027);
      head.lensDisk.scale.setScalar(0.25 + wake * 0.75);
      head.opticMat.emissiveIntensity = (0.11 + wake * 1.75) * flicker;
      pilot.emissiveIntensity = (0.13 + wake * 1.43) * flicker;
      heart.emissiveIntensity = 0.37 + wake * (1.37 + 0.26 * Math.sin(t * 2.2));
      chest.rotor.rotation.set(
        0.12 * Math.sin(t * 0.43),
        0.18 * Math.cos(t * 0.41),
        t * 0.075 + wake * (t * 0.31),
      );
      chest.lamp.intensity = 0.31 + wake * 1.49;
    },
  };
}
