import {
  T,
  canvasTex,
  tau,
  mat,
  M,
  group,
  mesh,
  box,
  egg,
  cyl,
  torus,
  beam,
  pipe,
  sign,
  batch,
  random,
  photo,
} from './craft.js';
import { ironwork } from './ironwork.js';
import { halo } from './village.js';
import { place, driverR } from './route.js';
const rnd = random(233);
const cabWood = mat(0x75482c, 0.64),
  copper = mat(0xb97c52, 0.31, 0.72),
  claret = mat(0xa14b35, 0.43, 0.38);
const axleXs = [-0.73, 0.005, 0.74],
  wheelZ = 0.398;
function wheel(parent, x, r, z, large = true) {
  const g = group(parent);
  g.position.set(x, r, z);
  const side = Math.sign(z),
    face = side * 0.053,
    n = large ? 13 : 9;
  torus(g, 0, 0, 0, r * 0.91, r * 0.085, M.steel);
  torus(g, 0, 0, face * 0.48, r * 0.807, r * 0.076, large ? M.red : M.iron);
  for (let i = 0; i < n; i++) {
    const a = (tau * i) / n,
      sp = box(
        g,
        Math.sin(a) * r * 0.48,
        Math.cos(a) * r * 0.48,
        0,
        r * 0.095,
        r * 0.71,
        r * 0.135,
        large ? M.red : M.iron,
      );
    sp.rotation.z = -a;
  }
  cyl(g, 0, 0, 0, r * 0.25, r * 0.25, r * 0.42, M.iron, 'z', 18);
  cyl(g, 0, 0, face, r * 0.15, r * 0.15, 0.022, M.oldGold, 'z', 16);
  if (large) {
    torus(g, 0, 0, side * 0.037, r * 0.813, 0.0055, M.oldGold);
    const s = new T.Shape();
    s.absarc(0, 0, r * 0.78, 2.08, 4.19, false);
    s.lineTo(-r * 0.18, -r * 0.23);
    s.lineTo(-r * 0.18, r * 0.23);
    s.closePath();
    mesh(g, new T.ExtrudeGeometry(s, { depth: 0.033, bevelEnabled: false }), M.red, 0, 0, side * 0.015);
  }
  batch(g);
  return g;
}
function bufferBar(p, x) {
  box(p, x, 0.41, 0, 0.115, 0.155, 1.15, claret);
  for (const z of [-0.4, 0.4]) {
    cyl(p, x + Math.sign(x) * 0.078, 0.41, z, 0.065, 0.065, 0.14, M.black, 'x');
    cyl(p, x + Math.sign(x) * 0.15, 0.41, z, 0.1, 0.1, 0.04, M.iron, 'x');
  }
  torus(p, x, 0.32, 0, 0.065, 0.017, M.iron, 'x');
}
const reflector = canvasTex(192, 192, (ctx) => {
  const color = ctx.createRadialGradient(89, 83, 2, 96, 96, 94);
  for (const [at, tone] of [
    [0, '#fff9d4'],
    [0.25, '#ffe9a3'],
    [0.65, '#eabc74'],
    [0.83, '#985e30'],
    [1, '#332e28'],
  ])
    color.addColorStop(at, tone);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 192, 192);
  for (let i = 1; i < 8; i++) {
    ctx.strokeStyle = i % 2 ? 'rgba(91,54,25,.31)' : 'rgba(255,247,189,.55)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(96, 96, 14 + i * 9, 0, tau);
    ctx.stroke();
  }
  ctx.fillStyle = '#fffbd4';
  ctx.beginPath();
  ctx.ellipse(96, 97, 12, 19, 0.14, 0, tau);
  ctx.fill();
});
const lensGlass = mat(0xffedc8, 0.17, 0.2, {
  map: reflector,
  emissive: 0xffda98,
  emissiveMap: reflector,
  emissiveIntensity: 3.8,
});
function lamp(p, x, y, z, r = 0.117) {
  cyl(p, x, y, z, r * 1.15, r * 0.94, 0.18, M.brass, 'x');
  cyl(p, x + 0.095, y, z, r * 0.94, r * 0.94, 0.016, M.lamp, 'x');
  torus(p, x + 0.11, y, z, r, 0.012, M.oldGold, 'x');
  const glass = mesh(p, new T.CircleGeometry(r * 0.936, 36), lensGlass, x + 0.111, y, z);
  glass.rotation.y = Math.PI / 2;
  if (r > 0.1)
    for (const dy of [-0.094, 0.094])
      for (const dz of [-0.093, 0.093])
        cyl(p, x + 0.112, y + dy, z + dz, 0.012, 0.012, 0.012, M.steel, 'x', 6);
  box(p, x - 0.04, y - r - 0.05, z, 0.082, 0.16, 0.09, M.iron);
}
function roof(p, x, y, len, width, m) {
  const sh = new T.Shape();
  sh.moveTo(-width / 2, 0);
  sh.quadraticCurveTo(0, 0.23, width / 2, 0);
  sh.lineTo(width / 2, -0.066);
  sh.quadraticCurveTo(0, 0.14, -width / 2, -0.066);
  sh.closePath();
  const o = mesh(
    p,
    new T.ExtrudeGeometry(sh, { depth: len, bevelEnabled: false, curveSegments: 12 }),
    m,
    x + len / 2,
    y,
    0,
  );
  o.rotation.y = -Math.PI / 2;
}
// The polished shoulders and inset flutes remain visible as the rods pass each other.
function motionRod(parent, length, height, depth, side) {
  const g = group(parent);
  const radius = height / 2,
    end = length / 2 - radius;
  const outline = new T.Shape();
  outline.absarc(end, 0, radius, -Math.PI / 2, Math.PI / 2, false);
  outline.absarc(-end, 0, radius, Math.PI / 2, Math.PI * 1.5, false);
  outline.closePath();
  const geometry = new T.ExtrudeGeometry(outline, {
    depth,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelThickness: 0.004,
    bevelSize: 0.005,
    curveSegments: 10,
  });
  mesh(g, geometry, M.steel, 0, 0, -depth / 2);
  box(g, 0, 0, side * (depth * 0.5 + 0.004), length - height * 1.75, height * 0.32, 0.003, M.iron);
  batch(g);
  return g;
}
function makeEngine(scene) {
  const root = group(scene),
    p = group(root);
  box(p, -0.04, 0.41, 0, 3.23, 0.23, 0.58, M.black);
  for (const z of [-0.485, 0.485]) {
    box(p, 0, 0.64, z, 3.33, 0.066, 0.135, M.black);
    box(p, 0, 0.671, z, 3.32, 0.019, 0.143, M.oldGold);
  }
  bufferBar(p, 1.68);
  bufferBar(p, -1.66);
  cyl(p, 0.3, 1.04, 0, 0.395, 0.395, 1.89, M.green, 'x', 48);
  cyl(p, 1.3, 1.04, 0, 0.404, 0.404, 0.4, M.black, 'x', 48);
  cyl(p, 1.53, 1.04, 0, 0.362, 0.389, 0.07, M.iron, 'x', 48);
  egg(p, 1.56, 1.04, 0, 0.042, 0.337, 0.337, M.black);
  for (const x of [-0.57, -0.2, 0.25, 0.72, 1.1, 1.52])
    torus(p, x, 1.04, 0, 0.397, 0.0125, M.brass, 'x');
  torus(p, 1.582, 1.04, 0, 0.326, 0.012, M.oldGold, 'x');
  cyl(p, 1.608, 1.04, 0, 0.067, 0.067, 0.035, M.brass, 'x');
  for (let i = 0; i < 14; i++) {
    const a = (i * tau) / 14;
    egg(p, 1.565, 1.04 + Math.cos(a) * 0.35, Math.sin(a) * 0.35, 0.014, 0.017, 0.017, M.steel);
  }
  for (const a of [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5])
    beam(p, [1.61, 1.04, 0], [1.61, 1.04 + 0.12 * Math.sin(a), 0.12 * Math.cos(a)], 0.012, M.steel);
  cyl(p, 1.12, 1.46, 0, 0.14, 0.196, 0.1, M.oldGold);
  cyl(p, 1.12, 1.65, 0, 0.132, 0.105, 0.3, M.black);
  cyl(p, 1.12, 1.84, 0, 0.199, 0.128, 0.12, M.black);
  torus(p, 1.12, 1.905, 0, 0.174, 0.028, M.brass, 'y');
  cyl(p, 1.12, 1.903, 0, 0.155, 0.155, 0.006, M.coal);
  for (const [x, r, h] of [
    [0.28, 0.187, 0.19],
    [-0.31, 0.12, 0.13],
  ]) {
    cyl(p, x, 1.455, 0, r * 1.18, r * 1.25, 0.06, M.brass);
    cyl(p, x, 1.47 + h / 2, 0, r, r, h, M.brass);
    egg(p, x, 1.47 + h, 0, r, 0.105, r, M.brass);
  }
  cyl(p, -0.5, 1.62, -0.095, 0.028, 0.037, 0.32, M.brass);
  egg(p, -0.5, 1.78, -0.095, 0.045, 0.03, 0.045, M.oldGold);
  lamp(p, 1.56, 1.49, 0, 0.13);
  for (const z of [-0.43, 0.43]) lamp(p, 1.59, 0.76, z, 0.067);
  for (const k of [-1, 1]) {
    const z = 0.43 * k;
    for (const x of [-0.55, 0.05, 0.67, 1.25])
      beam(p, [x, 1.18, z * 0.86], [x, 1.18, z * 1.09], 0.016, M.oldGold);
    beam(p, [-0.73, 1.18, z * 1.09], [1.33, 1.18, z * 1.09], 0.016, M.brass);
    pipe(
      p,
      [
        [-0.81, 0.8, z],
        [0.02, 0.8, z],
        [0.48, 0.79, z],
        [0.69, 0.71, z],
        [1.24, 0.68, z],
      ],
      0.032,
      copper,
    );
    // Compression fittings tie the return pipe into the pump and the injector manifold.
    for (const x of [-0.78, 0.43, 1.21]) {
      const h = x > 1 ? 0.68 : 0.8;
      cyl(p, x, h, z, 0.045, 0.045, 0.073, M.oldGold, 'x', 6);
      if (x !== 0.43)
        pipe(
          p,
          [
            [x, h, z],
            [x + 0.08, h, z],
            [x + 0.13, h - 0.061, z],
            [x + 0.13, h - 0.12, k * 0.35],
          ],
          0.029,
          copper,
        );
    }
    cyl(p, 1.09, 0.41, k * 0.43, 0.142, 0.142, 0.38, M.green, 'x');
    torus(p, 1.29, 0.41, k * 0.43, 0.136, 0.015, M.brass, 'x');
    box(p, -1.17, 0.53, k * 0.55, 0.44, 0.08, 0.2, M.iron);
    box(p, -1.19, 0.38, k * 0.59, 0.39, 0.045, 0.18, M.steel);
    for (const x of [-1.49, -0.83]) {
      beam(p, [x, 0.65, k * 0.5], [x, 1.79, k * 0.5], 0.029, M.brass);
    }
    box(p, -1.18, 0.91, k * 0.49, 0.89, 0.48, 0.063, M.green);
    box(p, -1.18, 1.143, k * 0.503, 0.9, 0.025, 0.073, M.brass);
    sign(p, -1.16, 0.93, k * 0.53, 0.43, 0.159, 'Nº  07').rotation.y = k < 0 ? Math.PI : 0;
    box(p, -0.78, 1.55, k * 0.47, 0.13, 0.43, 0.074, M.green);
    box(p, -1.15, 1.74, k * 0.493, 0.93, 0.072, 0.068, M.green);
  }
  box(p, -1.16, 0.69, 0, 0.98, 0.095, 0.97, cabWood);
  // Front spectacle plate, twin glazed circular windows and a working backhead.
  box(p, -0.7, 1.19, 0, 0.1, 0.94, 0.8, M.green);
  for (const z of [-0.274, 0.274]) {
    cyl(p, -0.636, 1.55, z, 0.136, 0.136, 0.08, M.iron, 'x');
    torus(p, -0.585, 1.55, z, 0.121, 0.018, M.brass, 'x');
    cyl(p, -0.581, 1.55, z, 0.102, 0.102, 0.006, mat(0x92a9a9, 0.14, 0.48), 'x');
  }
  cyl(p, -0.796, 1.03, 0, 0.306, 0.345, 0.1, M.black, 'x');
  cyl(p, -0.858, 1.01, 0, 0.19, 0.19, 0.05, copper, 'x');
  const fire = mat(0xff903a, 0.7, 0.05, { emissive: 0xff4602, emissiveIntensity: 3 });
  egg(p, -0.896, 1.0, 0, 0.032, 0.137, 0.165, fire);
  // The ashpan sits below the running board. Light leaks between its horizontal damper slats.
  for (const k of [-1, 1]) {
    box(p, -0.65, 0.476, k * 0.348, 0.41, 0.156, 0.046, copper);
    box(p, -0.65, 0.477, k * 0.378, 0.33, 0.104, 0.023, fire);
    for (let j = 0; j < 3; j++)
      box(p, -0.65, 0.437 + j * 0.037, k * 0.396, 0.353, 0.018, 0.018, M.iron);
    for (const xx of axleXs) {
      const block = box(p, xx - 0.253, 0.17, k * 0.392, 0.077, 0.172, 0.089, M.iron);
      block.rotation.z = -0.47;
      beam(p, [xx - 0.286, 0.171, k * 0.435], [xx - 0.33, 0.437, k * 0.435], 0.022, claret);
      cyl(p, xx - 0.31, 0.39, k * 0.451, 0.027, 0.027, 0.024, M.oldGold, 'z', 8);
    }
  }
  for (let j = -2; j < 3; j++) box(p, -0.926, 1, j * 0.054, 0.016, 0.23, 0.013, M.iron);
  for (const z of [-0.21, 0.2]) {
    cyl(p, -0.838, 1.3, z, 0.073, 0.073, 0.04, M.brass, 'x');
    cyl(p, -0.868, 1.3, z, 0.061, 0.061, 0.02, M.cream, 'x');
    beam(p, [-0.883, 1.3, z], [-0.883, 1.34, z + 0.024], 0.006, M.black);
  }
  pipe(
    p,
    [
      [-0.88, 0.85, -0.32],
      [-0.91, 1.15, -0.32],
      [-0.91, 1.43, -0.22],
    ],
    0.015,
    copper,
  );
  roof(p, -1.14, 1.79, 1.25, 1.2, M.black);
  for (const z of [-0.592, 0.592]) box(p, -1.14, 1.762, z, 1.26, 0.025, 0.027, M.brass);
  box(p, -1.49, 0.99, 0, 0.25, 0.49, 0.95, M.darkGreen);
  for (let i = 0; i < 34; i++)
    egg(
      p,
      -1.49 + (rnd() - 0.5) * 0.21,
      1.25 + rnd() * 0.06,
      (rnd() - 0.5) * 0.84,
      0.064,
      0.05,
      0.06,
      M.coal,
    );
  const engineer = group(p);
  engineer.position.set(-1.22, 0.75, -0.29);
  egg(engineer, 0, 0.51, 0, 0.115, 0.22, 0.11, M.black);
  const flesh = mat(0xc89976);
  egg(engineer, 0.024, 0.75, 0, 0.09, 0.112, 0.084, flesh);
  egg(engineer, 0.105, 0.74, -0.036, 0.028, 0.029, 0.023, flesh);
  for (const side of [-1, 1]) {
    beam(engineer, [0.035, 0.58, side * 0.08], [0.13, 0.46, side * 0.103], 0.042, M.iron);
    beam(engineer, [0.13, 0.46, side * 0.103], [0.25, 0.5, side * 0.08], 0.033, M.iron);
    egg(engineer, 0.25, 0.5, side * 0.08, 0.036, 0.032, 0.033, flesh);
  }
  cyl(engineer, 0.02, 0.839, 0, 0.108, 0.095, 0.062, M.iron);
  ironwork(p);
  halo(root, 1.71, 1.49, 0, 1.2);
  const fireLight = new T.PointLight(0xff7f27, 2.4, 1.8, 2);
  fireLight.position.set(-1.06, 1.04, 0.04);
  root.add(fireLight);
  const ashLight = new T.PointLight(0xff953a, 0.82, 1.25, 1.65);
  ashLight.position.set(-0.62, 0.295, -0.39);
  root.add(ashLight);
  batch(p);
  const wheels = [],
    smalls = [];
  for (const side of [-1, 1]) {
    for (const x of axleXs) wheels.push({ g: wheel(root, x, driverR, side * wheelZ), side });
    for (const x of [-1.36, 1.38]) smalls.push(wheel(root, x, 0.208, side * 0.366, false));
  }
  const motion = [];
  for (const side of [-1, 1]) {
    const g = group(root),
      z = side * 0.498;
    const rod = motionRod(g, 1.57, 0.069, 0.038, side);
    const pins = axleXs.map(() => {
      const hub = group(g);
      cyl(hub, 0, 0, 0, 0.064, 0.064, 0.05, M.oldGold, 'z');
      cyl(hub, 0, 0, side * 0.027, 0.038, 0.038, 0.022, M.steel, 'z', 6);
      cyl(hub, 0, 0.066, 0, 0.017, 0.02, 0.035, M.brass, 'y', 8);
      box(hub, 0, 0, side * 0.04, 0.044, 0.008, 0.005, M.black).rotation.z = 0.59;
      batch(hub);
      return hub;
    });
    const main = motionRod(g, 1, 0.06, 0.034, side),
      valve = box(g, 0, 0, z + side * 0.1, 1, 0.027, 0.019, M.oldGold);
    main.position.z = z + side * 0.071;
    const cross = group(g);
    cross.position.set(0, 0.41, z + 0.069 * side);
    box(cross, 0, 0, 0, 0.149, 0.099, 0.063, M.iron);
    cyl(cross, 0, 0, 0.042 * side, 0.047, 0.047, 0.04, M.steel, 'z');
    cyl(cross, 0, 0, 0.071 * side, 0.024, 0.024, 0.021, M.oldGold, 'z', 6);
    cyl(cross, 0.18, 0, 0, 0.021, 0.021, 0.3, M.steel, 'x');
    batch(cross);
    for (const h of [0.347, 0.467]) box(g, 0.89, h, z + side * 0.035, 0.57, 0.019, 0.027, M.steel);
    motion.push({ side, z, rod, pins, main, valve, cross });
  }
  return {
    root,
    fire,
    update(distance, t) {
      place(root, distance, 1.47);
      const theta = -distance / driverR;
      for (const { g, side } of wheels) g.rotation.z = theta + (side < 0 ? Math.PI / 2 : 0);
      smalls.forEach((g) => (g.rotation.z = -distance / 0.208));
      for (const m of motion) {
        const a = theta + (m.side < 0 ? Math.PI / 2 : 0),
          dx = 0.172 * Math.cos(a),
          dy = 0.172 * Math.sin(a),
          cy = driverR + dy;
        m.rod.position.set(dx + 0.005, cy, m.z);
        m.pins.forEach((p, i) => p.position.set(axleXs[i] + dx, cy, m.z + 0.034 * m.side));
        const px = 0.005 + dx,
          py = cy,
          h = 0.405,
          l = 0.89,
          cx = px + Math.sqrt(l * l - (h - py) ** 2);
        function connect(o, x1, y1, x2, y2) {
          o.position.x = (x1 + x2) / 2;
          o.position.y = (y1 + y2) / 2;
          o.scale.x = Math.hypot(x2 - x1, y2 - y1);
          o.rotation.z = Math.atan2(y2 - y1, x2 - x1);
        }
        connect(m.main, px, py, cx, h);
        connect(m.valve, px + 0.04, py + 0.052, 0.95 + dx * 0.4, 0.54);
        m.cross.position.x = cx;
      }
      this.fire.emissiveIntensity = 2.9 + 0.45 * Math.sin(t * 19) + 0.2 * Math.sin(t * 37);
      ashLight.intensity = 0.29 * this.fire.emissiveIntensity;
    },
  };
}
const saloon = photo('saloon-interior.jpg');
saloon.wrapS = T.MirroredRepeatWrapping;
const glazing = mat(0x9fbcca, 0.2, 0.43, {
  transparent: true,
  opacity: 0.095,
  depthWrite: false,
  side: T.DoubleSide,
});
function coach(scene, index) {
  const root = group(scene),
    p = group(root),
    obs = index === 3,
    len = obs ? 2.73 : 3.0;
  const dark = mat([0x76412d, 0x653b2c, 0x774936, 0x603a34][index], 0.52, 0.12),
    upholstery = mat(0x733b37);
  box(p, 0, 0.42, 0, len + 0.16, 0.15, 0.83, M.black);
  box(p, 0, 0.62, 0, len, 0.3, 0.92, dark);
  const plate = saloon.clone();
  plate.repeat.x = 1.54;
  plate.offset.x = index * 0.38;
  plate.needsUpdate = true;
  const room = mat(0xaa8056, 0.76, 0.03, {
    map: plate,
    emissive: 0xffddaa,
    emissiveMap: plate,
    emissiveIntensity: 2.55,
  });
  box(p, 0, 1.476, 0, len, 0.068, 0.931, M.cream);
  box(p, 0, 0.883, 0, len, 0.047, 0.92, M.teak);
  for (const z of [-0.459, 0.459]) {
    const k = Math.sign(z),
      inside = mesh(p, new T.PlaneGeometry(len + 0.015, 0.654), room, 0, 1.11, k * 0.18);
    inside.rotation.y = k < 0 ? Math.PI : 0;
    const pane = mesh(p, new T.PlaneGeometry(len - 0.028, 0.462), glazing, 0, 1.111, k * 0.466);
    pane.rotation.y = k < 0 ? Math.PI : 0;
    pane.castShadow = false;
    for (let j = 0; j < 7; j++) {
      const wx = (j / 7 - 0.5) * len + len / 14;
      box(p, wx, 0.91, k * 0.3, 0.23, 0.069, 0.14, upholstery);
      if ((j + index) % 3 === 0) {
        box(p, wx, 1.282, k * 0.3, 0.146, 0.054, 0.076, M.teak);
        for (const dx of [-0.048, 0.048])
          box(p, wx + dx, 1.312, k * 0.3, 0.012, 0.009, 0.077, M.oldGold);
      }
    }
    box(p, 0, 0.79, z, len, 0.19, 0.035, M.teak);
    box(p, 0, 0.882, z, len, 0.023, 0.052, M.brass);
    box(p, 0, 1.385, z, len, 0.135, 0.04, M.cream);
    box(p, 0, 1.461, z, len + 0.02, 0.024, 0.06, M.brass);
    for (let j = 0; j < 26; j++)
      box(p, (j / 26 - 0.48) * len, 0.73, z * 1.045, 0.012, 0.25, 0.009, cabWood);
    for (let j = 0; j < 8; j++) {
      const x = (-0.5 + j / 7) * len;
      box(p, x, 1.115, z, j === 0 || j === 7 ? 0.082 : 0.053, 0.46, 0.07, M.teak);
      if (j === 7) continue;
      const wx = x + len / 14;
      box(p, wx, 1.3, z, 0.38, 0.028, 0.047, M.brass);
      if (j === 0 || j === 6) {
        const k = Math.sign(z);
        box(p, wx - 0.07, 1.11, k * 0.467, 0.017, 0.42, 0.022, M.oldGold);
        beam(p, [wx + 0.083, 0.95, k * 0.498], [wx + 0.083, 1.09, k * 0.498], 0.011, M.brass);
        for (const xx of [-0.14, 0.14])
          beam(p, [wx + xx, 0.5, k * 0.52], [wx + xx, 0.73, k * 0.52], 0.013, M.iron);
        box(p, wx, 0.49, k * 0.51, 0.34, 0.036, 0.16, M.iron);
      }
      box(p, wx, 1.253, z * 0.77, 0.35, 0.012, 0.11, M.oldGold);
      if (j % 3 === 0) box(p, wx + 0.04, 1.277, z * 0.76, 0.14, 0.044, 0.07, cabWood);
    }
    sign(p, 0, 0.738, z * 1.065, 0.85, 0.115, obs ? 'BELVÉDÈRE' : 'ALPENBAHN').rotation.y =
      z < 0 ? Math.PI : 0;
  }
  for (const x of [-len / 2, len / 2]) {
    box(p, x, 0.97, 0, 0.05, 0.71, 0.85, M.teak);
    box(p, x * 1.013, 1.1, 0, 0.035, 0.37, 0.31, M.amber);
    box(p, x * 1.03, 0.57, 0, 0.18, 0.045, 0.54, M.iron);
  }
  roof(p, 0, 1.53, len + 0.18, 1.08, M.roof);
  for (let j = 0; j < 9; j++) {
    const g = group(p);
    g.position.x = ((j - 4) * len) / 9;
    pipe(
      g,
      [
        [0, 1.535, -0.519],
        [0, 1.601, -0.31],
        [0, 1.644, 0],
        [0, 1.601, 0.31],
        [0, 1.535, 0.519],
      ],
      0.008,
      M.iron,
    );
  }
  for (let j = 0; j < 4; j++) {
    const x = (j - 1.5) * 0.61;
    cyl(p, x, 1.685, 0, 0.065, 0.045, 0.065, M.iron);
    egg(p, x, 1.727, 0, 0.085, 0.023, 0.085, M.iron);
  }
  for (const k of [-1, 1]) {
    for (let j = 0; j < 7; j++) {
      const x = (j / 7 - 0.5) * len + len / 14;
      for (const delta of [-0.13, 0.13]) {
        box(p, x + delta, 0.77, k * 0.472, 0.015, 0.13, 0.013, M.oldGold);
      }
      box(p, x, 1.365, k * 0.487, 0.25, 0.008, 0.009, M.brass);
    }
    for (const x of [-1.03, 1.03]) {
      for (let j = 0; j < 3; j++)
        pipe(
          p,
          [
            [x - 0.24, 0.222 + j * 0.029, k * 0.427],
            [x, 0.265 + j * 0.029, k * 0.427],
            [x + 0.24, 0.222 + j * 0.029, k * 0.427],
          ],
          0.017,
          M.iron,
        );
      for (const xx of [x - 0.165, x + 0.165])
        cyl(p, xx, 0.21, k * 0.442, 0.066, 0.073, 0.044, M.black, 'z');
    }
  }
  if (index === 0 || index === 2) {
    const glow = new T.PointLight(0xffab54, 1.55, 2.6, 2);
    glow.position.set(0, 1.04, 0.77);
    root.add(glow);
  }
  box(p, 0, 0.31, 0, 0.55, 0.19, 0.43, M.iron);
  for (const x of [-1.04, 1.04]) {
    box(p, x, 0.256, 0, 0.49, 0.15, 0.62, M.black);
    for (const a of [-0.162, 0.162])
      for (const k of [-1, 1]) {
        cyl(p, x + a, 0.206, k * 0.37, 0.206, 0.206, 0.09, M.iron, 'z');
        cyl(p, x + a, 0.206, k * 0.421, 0.117, 0.117, 0.014, M.steel, 'z');
      }
  }
  if (obs) {
    box(p, -1.56, 0.6, 0, 0.41, 0.07, 0.96, M.teak);
    for (const z of [-0.46, 0, 0.46]) beam(p, [-1.75, 0.63, z], [-1.75, 1.1, z], 0.018, M.brass);
    beam(p, [-1.75, 1.1, -0.46], [-1.75, 1.1, 0.46], 0.018, M.brass);
    for (const z of [-0.42, 0.42])
      egg(p, -1.7, 0.9, z, 0.047, 0.06, 0.045, mat(0xac251c, 0.4, 0.2, { emissive: 0xff3514 }));
  }
  box(p, len / 2 + 0.105, 0.39, 0, 0.25, 0.055, 0.085, M.iron);
  batch(p);
  return root;
}
export function makeTrain(scene) {
  const engine = makeEngine(scene),
    cars = Array.from({ length: 4 }, (_, i) => coach(scene, i));
  return {
    engine: engine.root,
    cars,
    update(d, t) {
      engine.update(d, t);
      cars.forEach((c, i) => place(c, d - 3.34 - i * 3.29 + (i === 3 ? 0.09 : 0), 2.08));
    },
  };
}
