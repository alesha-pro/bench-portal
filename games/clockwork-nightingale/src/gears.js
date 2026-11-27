import * as T from 'three';
import {
  M,
  group,
  guide,
  vec,
  cylinder,
  mesh,
  ring,
  screw,
  jewel,
  rod,
  ball,
  box,
  line,
  bake,
  cached,
  extrude,
  TAU,
  canvasTex,
  mat
} from './craft.js';
import { plate, plateFinish } from './finishing.js';
import { notes, period, sinceNote, pitches } from './score.js';

const polar = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
function wheelGeometry(teeth, module, h, escape = false) {
  return cached('wheel' + [teeth, module, h, escape], () => {
    const s = new T.Shape(),
      pitch = (module * teeth) / 2,
      root = pitch - 1.15 * module,
      tip = pitch + module,
      base = pitch * Math.cos(0.35);
    const inv = (r) => {
      const q = Math.acos(Math.min(1, base / r));
      return Math.tan(q) - q;
    };
    const side = (r) => Math.PI / (2 * teeth) + inv(pitch) - inv(r);
    for (let i = 0; i < teeth; i++) {
      const a = (i * TAU) / teeth,
        pts = escape
          ? [
              [root, -0.5],
              [root, -0.37],
              [tip, 0.22],
              [tip, 0.31],
              [root, 0.48]
            ].map(([r, f]) => polar(r, a + (f * TAU) / teeth))
          : [
              [root, -Math.PI / teeth],
              [root, -side(base)],
              [Math.max(root, base), -side(base)],
              [pitch, -side(pitch)],
              [tip, -side(tip)],
              [tip, side(tip)],
              [pitch, side(pitch)],
              [Math.max(root, base), side(base)],
              [root, side(base)]
            ].map(([r, ang]) => polar(r, a + ang));
      pts.forEach(([x, y], j) => {
        if (!i && !j) s.moveTo(x, y);
        else s.lineTo(x, y);
      });
    }
    s.closePath();
    const spokes = teeth > 32 ? 6 : teeth > 16 ? 5 : 3;
    if (teeth >= 15)
      for (let i = 0; i < spokes; i++) {
        const a = (TAU * i) / spokes + 0.11,
          b = (TAU * (i + 1)) / spokes - 0.12;
        const hole = new T.Path(),
          inn = root * 0.35,
          out = root * 0.79;
        hole.moveTo(...polar(inn, a + 0.13));
        hole.quadraticCurveTo(...polar(root * 0.59, a + 0.15), ...polar(out, a + 0.04));
        hole.absarc(0, 0, out, a + 0.04, b, false);
        hole.quadraticCurveTo(...polar(root * 0.58, b + 0.09), ...polar(inn, b + 0.11));
        hole.absarc(0, 0, inn, b + 0.11, a + 0.13, true);
        hole.closePath();
        s.holes.push(hole);
      }
    const b = Math.min(module * 0.11, 0.0032);
    return extrude(s, h, b, 3).translate(0, 0, -h / 2);
  });
}
export function wheel(p, teeth, module, h, m = M.brass, escape = false) {
  const r = (teeth * module) / 2,
    g = group(p);
  mesh(g, wheelGeometry(teeth, module, h, escape), m);
  if (teeth >= 18) {
    ring(g, M.light, 0, 0, h / 2 + 0.001, r - 0.065 * r, 0.0034);
    cylinder(g, M.antique, 0, 0, h * 0.46, r * 0.22, r * 0.25, 0.033, 24, 'z');
    ring(g, M.gold, 0, 0, h * 0.5 + 0.018, r * 0.17, 0.007);
  }
  cylinder(g, M.steel, 0, 0, h * 0.55, r * 0.105, r * 0.105, 0.038, 18, 'z');
  return g;
}
export function gearworks(parent) {
  const train = group(parent),
    rotors = [],
    modules = [],
    arbors = [],
    fixed = group(train);
  // Common module sets the pitch distance. Each gear uses its parent's contact
  // angle and tooth pitch for both initial indexing and signed angular speed.
  function chain(spec, x, y, z, module, axis, rate, mats, spread) {
    const board = group(train, x, y, z);
    if (axis === 'y') board.rotation.x = -Math.PI / 2;
    modules.push({ g: board, home: board.position.clone(), spread });
    let X = 0,
      Y = 0,
      previous = null;
    spec.forEach(([n, angle], i) => {
      const r = (n * module) / 2;
      let omega = rate,
        phase = 0;
      if (previous) {
        const d = previous.r + r;
        X += Math.cos(angle) * d;
        Y += Math.sin(angle) * d;
        omega = (-previous.omega * previous.n) / n;
        phase = angle + Math.PI - (Math.PI - previous.n * (angle - previous.phase)) / n;
      }
      const item = group(board, X, Y, 0),
        w = wheel(item, n, module, 0.048, mats[i % mats.length]);
      bake(w);
      rotors.push({ g: w, omega, phase });
      arbors.push({ item, x: X, y: Y, offset: ((i % 3) - 1) * 0.17 });
      const mount = group(item);
      cylinder(mount, M.blue, 0, 0, -0.055, 0.029, 0.029, 0.29, 16, 'z');
      jewel(mount, 0, 0, 0.052, r > 0.23 ? 0.039 : 0.024);
      if (i > 0)
        rod(
          mount,
          M.bronze,
          [0, 0, -0.089],
          [-(previous.r + r) * Math.cos(angle), -(previous.r + r) * Math.sin(angle), -0.089],
          0.037
        );
      bake(mount);
      previous = { n, r, omega, phase };
    });
    return board;
  }
  chain(
    [
      [36, 0],
      [18, 0.19],
      [30, -0.3],
      [14, 0.65],
      [25, -0.24],
      [13, 0.62],
      [20, -0.65]
    ],
    -1.36,
    0.65,
    0.17,
    0.019,
    'z',
    0.55,
    [M.brass, M.steel, M.rose, M.gold],
    [-0.72, 0.37, 0.38]
  );
  chain(
    [
      [28, 0],
      [14, -0.45],
      [24, 0.35],
      [13, -0.48],
      [31, 0.41],
      [13, -0.32],
      [18, 0.47]
    ],
    -1.29,
    0.52,
    -0.56,
    0.022,
    'y',
    -0.42,
    [M.gold, M.blue, M.brass],
    [0.04, 0.38, -0.9]
  );
  chain(
    [
      [18, 0],
      [28, 0.43],
      [14, 0.62],
      [27, -0.1],
      [13, -0.57]
    ],
    -0.97,
    0.99,
    -0.48,
    0.023,
    'z',
    -0.81,
    [M.steel, M.brass, M.rose],
    [-0.32, 0.69, -0.44]
  );
  chain(
    [
      [18, 0],
      [36, 0.55],
      [14, -0.6],
      [23, -0.66],
      [12, -0.25]
    ],
    -1.29,
    0.71,
    0.69,
    0.014,
    'y',
    0.8,
    [M.black, M.gold, M.steel],
    [-1.13, 0.52, 0.19]
  );
  // Skeletonised bridge plates carry the arbor bearings back to the bed.
  // Feet, screws and turned pillars tie the three elevations together.
  const bed = group(train);
  function bridge(p, x, y, z, width, height) {
    const sh = new T.Shape();
    sh.moveTo(-width * 0.5, 0);
    sh.quadraticCurveTo(-width * 0.54, height * 0.15, -width * 0.43, height * 0.28);
    sh.bezierCurveTo(
      -width * 0.32,
      height * 0.55,
      -width * 0.24,
      height * 0.45,
      -width * 0.21,
      height * 0.85
    );
    sh.quadraticCurveTo(-width * 0.18, height * 1.05, 0, height);
    sh.quadraticCurveTo(width * 0.15, height * 0.98, width * 0.18, height * 0.78);
    sh.bezierCurveTo(width * 0.23, height * 0.48, width * 0.39, height * 0.46, width * 0.46, height * 0.24);
    sh.quadraticCurveTo(width * 0.54, height * 0.1, width * 0.5, 0);
    sh.lineTo(-width * 0.5, 0);
    const window = new T.Path();
    window.moveTo(-width * 0.33, height * 0.09);
    window.quadraticCurveTo(-width * 0.34, height * 0.3, -width * 0.14, height * 0.33);
    window.quadraticCurveTo(0, height * 0.7, width * 0.17, height * 0.33);
    window.quadraticCurveTo(width * 0.33, height * 0.28, width * 0.33, height * 0.09);
    window.closePath();
    sh.holes.push(window);
    plate(group(p, x, y, z), sh, 0.052, 0.009, plateFinish(z < 0));
    line(
      p,
      M.gold,
      [
        [x - width * 0.46, y + 0.025, z + 0.06],
        [x - width * 0.39, y + height * 0.28, z + 0.06],
        [x - width * 0.21, y + height * 0.52, z + 0.06],
        [x - width * 0.14, y + height * 0.91, z + 0.06],
        [x, y + height * 0.96, z + 0.06],
        [x + width * 0.16, y + height * 0.79, z + 0.06],
        [x + width * 0.24, y + height * 0.49, z + 0.06],
        [x + width * 0.42, y + height * 0.23, z + 0.06],
        [x + width * 0.48, y + 0.02, z + 0.06]
      ],
      0.009,
      36
    );
    box(p, M.brass, x, y + 0.022, z + 0.018, width * 1.12, 0.046, 0.17);
    for (const s of [-1, 1]) screw(p, x + s * width * 0.46, y + 0.048, z + 0.028, 0.027, 'y');
    jewel(p, x, y + height * 0.83, z + 0.066, 0.038);
  }
  bridge(bed, -0.94, 0.485, 0.34, 0.9, 0.45);
  bridge(bed, 0.67, 0.484, -0.23, 0.94, 0.44);
  bridge(bed, -0.34, 0.485, -0.61, 0.77, 0.73);
  for (const [x, z, h] of [
    [-0.98, 0.57, 0.37],
    [-0.43, 0.62, 0.31],
    [0.98, 0.46, 0.35],
    [0.37, -0.51, 0.42],
    [-1.1, -0.38, 0.41]
  ]) {
    for (const [r, level, d, mt] of [
      [0.095, 0.0, 0.045, M.antique],
      [0.075, 0.045, 0.06, M.brass],
      [0.045, 0.08, h - 0.1, M.rose],
      [0.067, h - 0.04, 0.055, M.gold]
    ])
      cylinder(bed, mt, x, 0.49 + level + d / 2, z, r, r, d, 36);
    screw(bed, x, 0.49 + h + 0.018, z, 0.032, 'y');
  }
  // Crystal-ended drive shaft and coupling collars.
  rod(bed, M.steel, [-1.26, 0.57, -0.05], [1.22, 0.57, -0.05], 0.025);
  for (const x of [-1.18, -0.63, -0.48, 0.35, 0.49, 1.1])
    cylinder(bed, M.gold, x, 0.57, -0.05, 0.056, 0.056, 0.051, 28, 'x');
  for (const side of [-1, 1])
    for (let i = 0; i < 5; i++) screw(bed, side * (0.37 + i * 0.18), 0.498, -0.86, 0.032, 'y');
  bake(bed);
  const drum = group(train, 0.34, 0.98, 0.68);
  modules.push({ g: drum, home: drum.position.clone(), spread: [0.85, 0.74, 0.52] });
  const rotor = group(drum);
  cylinder(rotor, M.brass, 0, 0, 0, 0.31, 0.31, 1.24, 96, 'x');
  for (let i = 0; i < 32; i++)
    ring(rotor, i % 2 ? M.antique : M.light, -0.6 + i * 0.039, 0, 0, 0.3105, 0.0025, 'x');
  for (const sign of [-1, 1]) {
    for (const [off, r, m] of [
      [0.63, 0.321, M.light],
      [0.65, 0.293, M.bronze],
      [0.67, 0.266, M.gold],
      [0.697, 0.14, M.black],
      [0.727, 0.085, M.steel]
    ])
      cylinder(rotor, m, sign * off, 0, 0, r, r, 0.025, 64, 'x');
    for (let i = 0; i < 8; i++)
      screw(
        rotor,
        sign * 0.686,
        0.207 * Math.cos((i * TAU) / 8),
        0.207 * Math.sin((i * TAU) / 8),
        0.021,
        'x'
      );
  }
  const laneX = (l) => -0.55 + (l * 1.1) / (pitches.length - 1),
    contact = 0.9;
  for (const note of notes) {
    const a = contact - (note.time / period) * TAU,
      c = Math.cos(a),
      s = Math.sin(a),
      x = laneX(note.lane);
    rod(rotor, M.steel, [x, c * 0.306, s * 0.306], [x, c * 0.343, s * 0.343], 0.013, 0.009, 10);
  }
  const drive = wheel(rotor, 48, 0.014, 0.041, M.bronze);
  drive.rotation.y = Math.PI / 2;
  drive.position.x = -0.69;
  bake(rotor);
  const casing = group(drum);
  for (const sign of [-1, 1]) {
    const h = group(casing, sign * 0.775, -0.2, 0);
    box(h, M.enamel, 0, 0.04, 0, 0.085, 0.43, 0.24);
    cylinder(h, M.brass, 0, 0.2, 0, 0.143, 0.143, 0.105, 40, 'x');
    cylinder(h, M.blue, 0, 0.2, 0, 0.088, 0.088, 0.123, 32, 'x');
    jewel(h, sign * 0.071, 0.2, 0, 0.045, 'x');
    box(h, M.gold, 0, -0.177, 0, 0.14, 0.055, 0.36);
  }
  // A cast cradle under the pinned barrel and two machined cross braces.
  for (const z of [-0.2, 0.23]) {
    box(casing, M.antique, 0, -0.392, z, 1.66, 0.053, 0.067);
    box(casing, M.light, 0, -0.362, z, 1.63, 0.009, 0.053);
  }
  for (const x of [-0.7, 0.7]) {
    rod(casing, M.rose, [x, -0.37, 0.2], [x, -0.083, 0.68], 0.043, 0.034);
    screw(casing, x, -0.013, 0.71, 0.025, 'y');
  }
  box(casing, M.enamel, 0.0, -0.08, 0.704, 1.35, 0.12, 0.18);
  const combBridge = group(casing, 0, -0.02, 0.709);
  combBridge.rotation.x = -Math.PI / 2;
  const combOutline = new T.Shape();
  combOutline.moveTo(-0.65, -0.09);
  combOutline.lineTo(0.65, -0.09);
  combOutline.absarc(0.65, 0, 0.09, -Math.PI / 2, Math.PI / 2);
  combOutline.lineTo(-0.65, 0.09);
  combOutline.absarc(-0.65, 0, 0.09, Math.PI / 2, (3 * Math.PI) / 2);
  plate(combBridge, combOutline, 0.026, 0.005, plateFinish(true));
  for (let i = 0; i < 7; i++) screw(casing, -0.61 + i * 0.202, 0.009, 0.73, 0.026, 'y');
  const sig = canvasTex(768, 78, (c, w, h) => {
    c.fillStyle = '#173530';
    c.fillRect(0, 0, w, h);
    c.strokeStyle = '#bf985c';
    c.lineWidth = 2;
    c.strokeRect(5, 5, w - 10, h - 10);
    c.fillStyle = '#e6c890';
    c.font = '29px Georgia';
    c.textAlign = 'center';
    c.fillText('A U R E L I A N     ·     C A R I L L O N', w / 2, 49);
  });
  mesh(casing, new T.PlaneGeometry(1.16, 0.079), mat(0xffffff, 0.31, 0.39, { map: sig }), 0, -0.078, 0.795);
  bake(casing);
  const reeds = [];
  for (let i = 0; i < pitches.length; i++) {
    const a = group(drum, laneX(i), -0.02, 0.68);
    const dz = 0.264 - 0.68,
      dy = 0.237,
      len = Math.hypot(dy, dz);
    const tine = new T.Shape(),
      w = 0.024;
    tine.moveTo(-w, 0);
    tine.lineTo(w, 0);
    tine.lineTo(w * 0.81, len * 0.58);
    tine.lineTo(w * 0.46, len);
    tine.lineTo(-w * 0.46, len);
    tine.lineTo(-w * 0.81, len * 0.58);
    tine.closePath();
    const reed = mesh(a, extrude(tine, 0.008, 0.0015, 2), M.steel);
    reed.rotation.x = Math.atan2(dz, dy);
    rod(a, M.blue, [-0.014, 0.008, -0.03], [-0.012, dy * 0.81, dz * 0.81], 0.0028, 0.0015, 6);
    box(a, M.steel, 0, 0.018, -0.053, 0.053, 0.024, 0.124);
    bake(a);
    reeds.push(a);
  }
  // Deadbeat escapement, pallet fork, and a separate spiral balance.
  const esc = group(train, -1.02, 1.09, 0.75);
  modules.push({ g: esc, home: esc.position.clone(), spread: [-1.05, 0.82, 0.44] });
  const ew = wheel(esc, 19, 0.025, 0.036, M.gold, true);
  bake(ew);
  const fork = group(esc, 0, 0.315, 0.032);
  line(
    fork,
    M.steel,
    [
      [-0.18, -0.15, 0],
      [-0.14, -0.043, 0],
      [0, 0, 0],
      [0.14, -0.043, 0],
      [0.18, -0.15, 0]
    ],
    0.019,
    20
  );
  for (const s of [-1, 1]) box(fork, M.ruby, s * 0.172, -0.13, 0, 0.038, 0.066, 0.045);
  bake(fork);
  const balance = group(esc, 0.12, 0.43, 0.021),
    balR = 0.235;
  for (const r of [balR, balR - 0.027]) ring(balance, M.rose, 0, 0, 0, r, 0.014);
  for (let i = 0; i < 8; i++) {
    const a = (i * TAU) / 8;
    rod(
      balance,
      M.gold,
      [0.036 * Math.cos(a), 0.036 * Math.sin(a), 0],
      [balR * Math.cos(a), balR * Math.sin(a), 0],
      0.009
    );
    ball(balance, M.steel, (balR - 0.013) * Math.cos(a), (balR - 0.013) * Math.sin(a), 0.008, 0.018);
  }
  bake(balance);
  const spiral = group(esc, 0.12, 0.43, 0.058),
    pts = [];
  for (let i = 0; i <= 160; i++) {
    const t = i / 160,
      a = t * TAU * 4.45,
      r = 0.012 + 0.159 * t;
    pts.push([r * Math.cos(a), r * Math.sin(a), 0]);
  }
  const hair = line(spiral, M.blue, pts, 0.0045, 160);
  const wire = hair.geometry.attributes.position;
  const home = wire.array.slice();
  const normals = hair.geometry.attributes.normal,
    homeNormals = normals.array.slice();
  const flex = new Float32Array(wire.count);
  for (let j = 0; j < wire.count; j++)
    flex[j] = 1 - Math.min(1, Math.max(0, (Math.hypot(wire.getX(j), wire.getY(j)) - 0.012) / 0.159));
  const [sx, sy] = pts.at(-1);
  const regulator = group(esc, 0.12, 0.43, 0.058);
  const cock = new T.Shape();
  cock.moveTo(0.27, -0.24);
  cock.quadraticCurveTo(0.21, -0.08, 0.081, 0.035);
  cock.quadraticCurveTo(0.041, 0.096, -0.022, 0.057);
  cock.quadraticCurveTo(-0.089, 0.008, -0.038, -0.062);
  cock.quadraticCurveTo(0.15, -0.117, 0.18, -0.267);
  cock.quadraticCurveTo(0.246, -0.32, 0.27, -0.24);
  const cut = new T.Path();
  cut.absellipse(0.076, -0.052, 0.045, 0.014, 0, TAU, true, -0.61);
  cock.holes.push(cut);
  plate(regulator, cock, 0.018, 0.004);
  screw(regulator, 0.226, -0.24, 0.024, 0.026);
  cylinder(regulator, M.gold, sx, sy, 0.008, 0.012, 0.012, 0.026, 16, 'z');
  rod(regulator, M.rose, [sx, sy, -0.008], [0.02, -0.048, -0.008], 0.009);
  bake(regulator);
  jewel(esc, 0.12, 0.43, 0.08, 0.031);
  for (const [x, y] of [
    [0, 0],
    [0, 0.31],
    [0.12, 0.43]
  ])
    rod(fixed, M.antique, [-1.02 + x, 1.09 + y, 0.46], [-1.02 + x, 1.09 + y, 0.75], 0.032);
  bake(fixed);
  for (const m of modules) {
    m.travel = vec(...m.spread);
    m.register = guide(train, m.home, m.travel);
  }
  return {
    drum,
    esc,
    update(t, e) {
      for (const item of modules) {
        item.g.position.copy(item.home).addScaledVector(item.travel, e);
        item.register(e);
      }
      for (const { item, x, y, offset } of arbors)
        item.position.set(x * (1 + 0.16 * e), y * (1 + 0.21 * e), offset * e);
      for (const r of rotors) r.g.rotation.z = r.phase + r.omega * t;
      rotor.rotation.x = (t * TAU) / period;
      ew.rotation.z = (-(Math.floor(t * 4) + Math.min(1, ((t * 4) % 1) / 0.14)) * TAU) / (19 * 2);
      const beat = Math.sin(t * TAU * 2);
      fork.rotation.z = 0.13 * beat;
      balance.rotation.z = 0.85 * beat;
      // Rotate the inner collet with the balance and leave the outer stud pinned.
      for (let j = 0; j < wire.count; j++) {
        const a = balance.rotation.z * flex[j],
          c = Math.cos(a),
          s = Math.sin(a),
          k = j * 3;
        wire.setXY(j, c * home[k] - s * home[k + 1], s * home[k] + c * home[k + 1]);
        normals.setXY(
          j,
          c * homeNormals[k] - s * homeNormals[k + 1],
          s * homeNormals[k] + c * homeNormals[k + 1]
        );
      }
      wire.needsUpdate = normals.needsUpdate = true;
      reeds.forEach((g, i) => {
        const d = sinceNote(t, i);
        g.rotation.x = Math.exp(-18 * d) * Math.cos(80 * d) * 0.046;
      });
    }
  };
}
