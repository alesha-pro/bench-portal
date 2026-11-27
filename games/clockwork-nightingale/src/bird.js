import * as T from 'three';
import {
  M,
  TAU,
  group,
  mesh,
  ball,
  ring,
  rod,
  line,
  screw,
  jewel,
  cylinder,
  bake,
  vec,
  canvasTex,
  cached,
  guide
} from './craft.js';
import { wheel } from './gears.js';

const featherMaterials = new Map();
function plumeFinish(material) {
  return cached('engraved plume ' + material.uuid, () => {
    const engraving = cached('feather chasing', () =>
      canvasTex(512, 128, (c, w, h) => {
        c.fillStyle = '#e8e3d7';
        c.fillRect(0, 0, w, h);
        for (const side of [-1, 1]) {
          for (let i = -5; i < 37; i++) {
            const x = i * 16;
            for (const [offset, ink] of [
              [0, '#6e685d'],
              [2, '#fff9e7']
            ]) {
              c.beginPath();
              c.moveTo(x + offset, h / 2);
              c.bezierCurveTo(
                x + 24,
                h / 2 + side * 10,
                x + 42,
                h / 2 + side * 45,
                x + 80 + offset,
                h / 2 + side * 65
              );
              c.strokeStyle = ink;
              c.lineWidth = 1.6;
              c.stroke();
            }
          }
        }
      })
    );
    const coat = material.clone();
    coat.side = T.DoubleSide;
    coat.roughness += 0.035;
    coat.metalness -= 0.055;
    coat.map = engraving;
    coat.bumpMap = engraving;
    coat.bumpScale = 0.0009;
    coat.onBeforeCompile = material.onBeforeCompile;
    return coat;
  });
}
function feather(p, start, end, width, m, side = 1, ornate = true, bow = 0.04) {
  const a = vec(...start),
    b = vec(...end),
    d = b.clone().sub(a);
  const w = vec(-d.y, d.x, 0).normalize(),
    normal = vec(0, 0, side);
  const sample = (t, s) => {
    const widthAt = Math.pow(Math.max(0.00003, Math.sin(Math.PI * t)), 0.65) * (1.14 - 0.3 * t);
    return a
      .clone()
      .addScaledVector(d, t)
      .addScaledVector(w, width * s * widthAt)
      .addScaledVector(normal, Math.sin(t * Math.PI) * (bow + 0.044 * (1 - Math.abs(s) ** 1.35)));
  };
  const pos = [],
    uv = [],
    idx = [],
    N = 17,
    K = 6;
  for (let i = 0; i <= N; i++)
    for (let j = 0; j <= K; j++) {
      const t = i / N,
        s = (j / K) * 2 - 1;
      pos.push(...sample(t, s).toArray());
      uv.push(t, (s + 1) / 2);
      if (i < N && j < K) {
        const v = i * (K + 1) + j,
          ind = [v, v + K + 1, v + 1, v + 1, v + K + 1, v + K + 2];
        idx.push(...(side < 0 ? ind.reverse() : ind));
      }
    }
  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  mesh(p, geo, plumeFinish(m));
  const strand = (points, metal, r) =>
    line(
      p,
      metal,
      points.map(([t, s]) => sample(t, s).addScaledVector(normal, 0.0028).toArray()),
      r,
      points.length * 2
    );
  strand(
    [
      [0.07, 0],
      [0.29, 0],
      [0.54, 0],
      [0.79, 0],
      [0.985, 0]
    ],
    M.light,
    width * 0.055
  );
  for (const sign of [-1, 1]) {
    strand(
      [
        [0.06, 0.8 * sign],
        [0.2, 0.96 * sign],
        [0.44, 0.97 * sign],
        [0.72, 0.96 * sign],
        [0.94, 0.84 * sign],
        [0.983, 0.08 * sign]
      ],
      M.gold,
      width * 0.024
    );
    if (ornate)
      for (let k = 0; k < 5; k++) {
        const t = 0.2 + k * 0.114;
        strand(
          [
            [t, 0],
            [t + 0.034, 0.45 * sign],
            [t + 0.099, 0.86 * sign]
          ],
          k % 2 ? M.brass : M.light,
          width * 0.014
        );
      }
  }
  if (ornate && width > 0.105) {
    // A chased almond at the tip, with a narrow shadow cut beside its bright wall.
    for (const sign of [-1, 1]) {
      const eye = [
        [0.66, 0],
        [0.73, 0.3 * sign],
        [0.82, 0.37 * sign],
        [0.925, 0]
      ];
      strand(eye, M.bronze, width * 0.033);
      strand(
        eye.map(([t, v]) => [t + 0.007, v]),
        M.light,
        width * 0.014
      );
    }
  }
}
function fitted(profile, x) {
  let i = 0;
  while (i < profile.length - 2 && profile[i + 1][0] < x) i++;
  const a = profile[i],
    b = profile[i + 1],
    prev = profile[Math.max(0, i - 1)],
    next = profile[Math.min(profile.length - 1, i + 2)];
  const dx = b[0] - a[0],
    t = Math.max(0, Math.min(1, (x - a[0]) / dx)),
    t2 = t * t,
    t3 = t2 * t;
  return [
    x,
    ...[1, 2, 3].map(
      (j) =>
        (2 * t3 - 3 * t2 + 1) * a[j] +
        ((t3 - 2 * t2 + t) * dx * (b[j] - prev[j])) / (b[0] - prev[0]) +
        (-2 * t3 + 3 * t2) * b[j] +
        ((t3 - t2) * dx * (next[j] - a[j])) / (next[0] - a[0])
    )
  ];
}
function surface(profile, x, angle, s, offset = 0.004) {
  const [, y, ry, rz] = fitted(profile, x);
  return [x, y + (ry + offset) * Math.cos(angle), s * (rz + offset) * Math.sin(angle)];
}
function chasedPlate(parent, profile, x0, x1, angle, length, width, side, material, lift) {
  const pos = [],
    uv = [],
    index = [],
    rim = [],
    N = 16,
    K = 6;
  function at(t, v) {
    const taper = Math.max(0.001, Math.sin(t * Math.PI)) ** 0.72;
    return surface(
      profile,
      x0 + (x1 - x0) * t,
      angle + length * t + v * width * taper,
      side,
      lift + 0.012 * taper * (1 - v * v)
    );
  }
  for (let i = 0; i <= N; i++)
    for (let j = 0; j <= K; j++) {
      pos.push(...at(i / N, (j * 2) / K - 1));
      uv.push(i / N, j / K);
      if (i < N && j < K) {
        const q = i * (K + 1) + j;
        index.push(q, q + 1, q + K + 1, q + 1, q + K + 2, q + K + 1);
      }
    }
  const geom = new T.BufferGeometry();
  geom.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  geom.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  geom.setIndex(index);
  geom.computeVertexNormals();
  if (!featherMaterials.has(material)) {
    const coat = material.clone();
    coat.side = T.DoubleSide;
    coat.onBeforeCompile = material.onBeforeCompile;
    featherMaterials.set(material, coat);
  }
  mesh(parent, geom, featherMaterials.get(material));
  for (let j = 0; j <= N; j++) rim.push(at(j / N, 1));
  for (let j = N - 1; j >= 0; j--) rim.push(at(j / N, -1));
  line(parent, M.gold, rim, 0.0038, 30);
}
function shell(p, profile, m, aperture = false) {
  profile = Array.from({ length: 66 }, (_, i) =>
    fitted(profile, profile[0][0] + ((profile.at(-1)[0] - profile[0][0]) * i) / 65)
  );
  const pos = [],
    uv = [],
    ix = [],
    seg = 64;
  for (let i = 0; i < profile.length; i++) {
    const [x, cy, ry, rz] = profile[i];
    for (let j = 0; j <= seg; j++) {
      const a = (j * TAU) / seg;
      pos.push(x, cy + ry * Math.cos(a), rz * Math.sin(a));
      uv.push(i / (profile.length - 1), j / seg);
      const opening = aperture && ((x + 0.17) / 0.53) ** 2 + ((a - 1.66) / 0.97) ** 2 < 1;
      if (i < profile.length - 1 && j < seg && !opening) {
        const k = i * (seg + 1) + j;
        ix.push(k, k + 1, k + seg + 1, k + 1, k + seg + 2, k + seg + 1);
      }
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setIndex(ix);
  g.computeVertexNormals();
  return mesh(p, g, m);
}
function bill(p, upper) {
  const pos = [],
    uv = [],
    ix = [],
    sections = 17,
    around = 18;
  for (let i = 0; i <= sections; i++)
    for (let j = 0; j <= around; j++) {
      const t = i / sections,
        a = (j / around) * Math.PI,
        d = 1 - t;
      pos.push(
        0.49 * t,
        0.084 * Math.sin(a) * d ** 0.77 * (upper ? 1 : -0.64) - 0.049 * t * t - 0.01 * t,
        0.134 * Math.cos(a) * d ** 0.72
      );
      uv.push(t, j / around);
      if (i < sections && j < around) {
        const n = i * (around + 1) + j;
        const s = [n, n + 1, n + around + 1, n + 1, n + around + 2, n + around + 1];
        ix.push(...(upper ? s.reverse() : s));
      }
    }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setIndex(ix);
  g.computeVertexNormals();
  const material = (upper ? M.gold : M.bronze).clone();
  material.side = T.DoubleSide;
  mesh(p, g, material);
  line(
    p,
    M.black,
    [
      [0, 0, 0.128],
      [0.16, -0.013, 0.1],
      [0.32, -0.029, 0.058],
      [0.475, -0.054, 0.008]
    ],
    0.007,
    14
  );
  line(
    p,
    M.black,
    [
      [0, 0, -0.128],
      [0.16, -0.013, -0.1],
      [0.32, -0.029, -0.058],
      [0.475, -0.054, -0.008]
    ],
    0.007,
    14
  );
  const floor = new T.Shape();
  floor.moveTo(0, 0.13);
  floor.quadraticCurveTo(0.24, 0.088, 0.49, 0);
  floor.quadraticCurveTo(0.24, -0.088, 0, -0.13);
  floor.closePath();
  const lining = new T.ShapeGeometry(floor, 18);
  lining.rotateX(Math.PI / 2);
  const lp = lining.attributes.position;
  for (let i = 0; i < lp.count; i++) {
    const t = lp.getX(i) / 0.49;
    lp.setY(i, -0.049 * t * t - 0.01 * t);
  }
  lining.computeVertexNormals();
  const palate = cached(
    'palate',
    () => new T.MeshStandardMaterial({ color: 0x40121c, roughness: 0.46, side: T.DoubleSide })
  );
  mesh(p, lining, palate);
}
export function nightingale(parent) {
  const root = group(parent, -0.03, 0, 0),
    body = group(root),
    core = group(root);
  const prof = [
    [-1.03, 2.56, 0.035, 0.033],
    [-0.87, 2.55, 0.16, 0.16],
    [-0.64, 2.55, 0.3, 0.27],
    [-0.38, 2.56, 0.42, 0.354],
    [-0.1, 2.6, 0.51, 0.403],
    [0.14, 2.64, 0.51, 0.4],
    [0.37, 2.73, 0.44, 0.34],
    [0.54, 2.82, 0.36, 0.29],
    [0.67, 2.93, 0.265, 0.227],
    [0.69, 3.03, 0.135, 0.13]
  ];
  shell(body, prof, M.antique, true);
  const lip = [];
  for (let i = 0; i <= 90; i++) {
    const a = (TAU * i) / 90;
    lip.push(surface(prof, -0.17 + 0.53 * Math.cos(a), 1.66 + 0.97 * Math.sin(a), 1, 0.006));
  }
  line(body, M.gold, lip, 0.015, 94);
  // Segmented plastron panels follow the ovoid body and meet on the breast.
  for (let i = 2; i < prof.length - 1; i++) {
    const [x, y, ry, rz] = prof[i];
    const pts = [];
    for (let j = 0; j <= 46; j++) {
      const a = (j * TAU) / 46;
      pts.push([x + 0.016 * Math.sin(a) ** 2, y + ry * Math.cos(a), rz * Math.sin(a)]);
    }
    line(body, i % 2 ? M.gold : M.bronze, pts, 0.012, 48);
  }
  for (const s of [-1, 1]) {
    for (let j = 0; j < 5; j++) {
      feather(
        body,
        [0.53 - j * 0.105, 2.9 + j * 0.019, s * (0.19 + j * 0.03)],
        [0.34 - j * 0.157, 2.25 - j * 0.011, s * (0.22 + j * 0.02)],
        0.103,
        [M.gold, M.rose, M.brass][j % 3],
        s,
        false,
        0.055
      );
    }
    for (let k = 0; k < 5; k++)
      for (let j = 0; j < 6; j++) {
        const x = 0.53 - j * 0.194 + (k % 2) * 0.044;
        if (s > 0 && ((x - 0.12 + 0.17) / 0.58) ** 2 + ((0.31 + k * 0.45 - 1.66) / 1.05) ** 2 < 1) continue;
        chasedPlate(
          body,
          prof,
          x,
          x - 0.26,
          0.14 + k * 0.45,
          0.34,
          0.246,
          s,
          [M.brass, M.antique, M.rose, M.teal, M.gold][(j + 2 * k) % 5],
          0.009 + 0.003 * (5 - j)
        );
      }
    // Dorsal saddle with overlapping polished coverts.
    for (let j = 0; j < 6; j++)
      feather(
        body,
        [0.18 - j * 0.12, 3.08 - j * 0.021, s * 0.085],
        [-0.12 - j * 0.13, 2.9 - j * 0.06, s * (0.26 - j * 0.016)],
        0.085,
        [M.teal, M.brass, M.enamel][j % 3],
        s,
        false,
        0.029
      );
  }
  bake(body);
  const innerWheels = [];
  for (const s of [-1, 1]) {
    const plate = group(core, 0, 2.64, s * 0.13);
    ball(plate, M.black, -0.17, 0, 0, 0.57, 0.264, 0.081);
    for (let k = 0; k < 5; k++) {
      const a = (k * TAU) / 5;
      rod(plate, M.gold, [-0.48, 0.02, 0.01 * s], [0.37 * Math.cos(a), 0.29 * Math.sin(a), 0.09 * s], 0.018);
    }
    bake(plate);
    [
      [-0.4, -0.02, 26],
      [0.016, 0.064, 16],
      [0.32, 0.115, 15]
    ].forEach(([x, y, n], i) => {
      const w = wheel(core, n, 0.02, 0.048, [M.gold, M.steel, M.rose][i]);
      w.position.set(x, 2.63 + y, s * 0.3);
      bake(w);
      innerWheels.push([w, i % 2 ? -1.5 : 1]);
    });
  }
  const tail = group(root, -0.58, 2.62, 0);
  const rectrices = [];
  for (const s of [-1, 1]) {
    for (let i = 0; i < 7; i++) {
      const v = i / 6,
        vane = group(tail, 0.027, 0.014, s * (0.013 + v * 0.045));
      feather(
        vane,
        [0, 0, 0],
        [-1.45 + 0.23 * v, -0.59 + 0.27 * v, s * (0.039 + 0.2 * v)],
        0.079 + 0.012 * v,
        [M.blue, M.rose, M.enamel, M.brass, M.blue, M.rose, M.teal][i],
        s,
        true,
        0.018
      );
      bake(vane);
      rectrices.push({ vane, s, v });
    }
  }
  // A slotted sector carries the individual rectrix pivots.
  for (const { vane, s, v } of rectrices) {
    const boss = group(vane, -0.18, -0.072, s * (0.027 + v * 0.018));
    screw(boss, 0, 0, 0, 0.015);
    bake(boss);
  }
  const tailHub = group(tail);
  cylinder(tailHub, M.blue, 0, 0, 0, 0.067, 0.067, 0.31, 32, 'z');
  for (const s of [-1, 1]) jewel(tailHub, 0, 0, 0.16 * s, 0.032);
  for (const s of [-1, 1])
    line(
      tailHub,
      M.rose,
      [
        [0.014, 0, s * 0.06],
        [-0.084, -0.064, s * 0.111],
        [-0.186, -0.088, s * 0.12],
        [-0.238, -0.05, s * 0.095]
      ],
      0.012,
      18
    );
  bake(tailHub);
  const head = group(root, 0.56, 3.06, 0),
    headShell = group(head);
  const skull = [
    [-0.41, 0.005, 0.04, 0.055],
    [-0.36, 0.058, 0.199, 0.185],
    [-0.26, 0.096, 0.291, 0.249],
    [-0.1, 0.106, 0.352, 0.296],
    [0.06, 0.105, 0.347, 0.3],
    [0.18, 0.08, 0.295, 0.264],
    [0.27, 0.052, 0.217, 0.219],
    [0.35, 0.038, 0.138, 0.137],
    [0.369, 0.025, 0.075, 0.082]
  ];
  shell(headShell, skull, M.brass);
  for (const s of [-1, 1]) {
    // Inlaid facial mask, chased orbital ring, riveted hinged brow.
    ball(headShell, M.enamel, 0.07, 0.12, s * 0.242, 0.214, 0.161, 0.061);
    for (const [r, mt, tub, z] of [
      [0.127, M.antique, 0.024, 0.294],
      [0.109, M.light, 0.014, 0.313],
      [0.082, M.black, 0.011, 0.327]
    ])
      ring(headShell, mt, 0.124, 0.139, s * z, r, tub);
    ring(headShell, M.light, 0.124, 0.139, s * 0.324, 0.078, 0.006);
    for (let j = 0; j < 4; j++)
      for (let k = 0; k < 3; k++) {
        const x = -0.28 + j * 0.068;
        chasedPlate(
          headShell,
          skull,
          x + 0.11,
          x - 0.034,
          1.22 + k * 0.34,
          0.39,
          0.19,
          s,
          [M.rose, M.brass, M.teal, M.gold][(k + j) % 4],
          0.007 + 0.002 * j
        );
      }
    ball(headShell, M.rose, 0.124, 0.139, s * 0.326, 0.077, 0.077, 0.018);
    mesh(headShell, new T.SphereGeometry(1, 16, 8), M.ruby, 0.124, 0.139, s * 0.338).scale.set(
      0.077,
      0.077,
      0.038
    );
    ball(headShell, M.black, 0.143, 0.148, s * 0.371, 0.029, 0.031, 0.009);
    ball(headShell, M.ivory, 0.158, 0.166, s * 0.382, 0.011, 0.009, 0.003);
    // Chased lines hug the actual skull profile; paired gold and oxidized cuts
    // define overlapping cheek and crown plates without floating wire.
    for (let k = 0; k < 8; k++) {
      const pts = [];
      for (let j = 0; j <= 18; j++) {
        const t = j / 18,
          x = -0.327 + 0.49 * t + 0.045 * Math.sin(t * Math.PI);
        const a = 0.24 + k * 0.138 - 0.3 * Math.sin(Math.PI * t) + 0.33 * (1 - t) ** 2;
        pts.push(surface(skull, x, a, s, 0.0035));
      }
      line(headShell, k % 3 === 0 ? M.bronze : M.gold, pts, k % 3 === 0 ? 0.0064 : 0.0038, 23);
    }
    for (let k = 0; k < 7; k++) {
      const pts = [];
      for (let j = 0; j <= 14; j++) {
        const t = j / 14;
        pts.push(
          surface(skull, -0.32 + k * 0.056 + 0.115 * t, 1.24 + 0.2 * Math.sin(k * 0.9) + t * 0.95, s, 0.004)
        );
      }
      line(headShell, k % 2 ? M.antique : M.light, pts, k % 2 ? 0.007 : 0.004, 17);
    }
    const brow = [];
    for (let j = 0; j <= 24; j++) {
      const t = j / 24;
      brow.push(surface(skull, -0.26 + 0.54 * t, 1.36 - 0.59 * Math.sin(t * Math.PI) + 0.08 * t, s, 0.01));
    }
    line(headShell, M.light, brow, 0.011, 28);
    for (let i = 0; i < 9; i++) {
      const a = (i * TAU) / 9;
      ball(headShell, M.light, 0.124 + 0.131 * Math.cos(a), 0.139 + 0.131 * Math.sin(a), s * 0.313, 0.009);
    }
    screw(headShell, -0.207, 0.088, s * 0.269, 0.038, 'z');
    ball(headShell, M.black, 0.315, 0.112, s * 0.137, 0.024, 0.014, 0.008);
  }
  bake(headShell);
  const upper = group(head, 0.308, 0.057, 0),
    lower = group(head, 0.31, 0.045, 0);
  bill(upper, true);
  bill(lower, false);
  cylinder(lower, M.steel, 0.014, 0, 0, 0.028, 0.028, 0.267, 28, 'z');
  for (const side of [-1, 1]) screw(lower, 0.014, 0, side * 0.139, 0.025);
  bake(upper);
  bake(lower);
  const tongue = group(lower, 0.045, 0.016, 0);
  ball(tongue, M.steel, 0.125, 0, 0, 0.144, 0.011, 0.043);
  rod(tongue, M.light, [0.04, 0.013, 0], [0.259, 0.011, 0], 0.0034, 0.001);
  bake(tongue);
  upper.scale.set(0.85, 0.93, 0.92);
  lower.scale.copy(upper.scale);
  const neck = group(root);
  for (let i = 0; i < 5; i++) {
    const o = ring(
      neck,
      i % 2 ? M.bronze : M.gold,
      0.47 + i * 0.018,
      2.925 + i * 0.033,
      0,
      0.286 - i * 0.012,
      0.014,
      'y'
    );
    o.scale.z = 0.94;
    o.rotation.z = -0.22;
  }
  bake(neck);
  const wings = [],
    pins = {};
  for (const s of [-1, 1]) {
    const joint = group(root, 0.27, 2.82, s * 0.303),
      wing = group(joint),
      tiers = [];
    const register = guide(root, joint.position, vec(s > 0 ? -1.03 : 0.58, s > 0 ? 0.66 : 0.83, s * 0.96));
    function tier() {
      const g = group(wing);
      tiers.push(g);
      return g;
    }
    const primaries = tier(),
      secondaries = tier(),
      coverts = tier();
    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      feather(
        primaries,
        [-0.06 + i * 0.015, 0.102 - i * 0.026, s * (0.028 + i * 0.005)],
        [-1.48 + t * 0.58, -0.29 - t * 0.41, s * (0.14 + t * 0.17)],
        0.138 - t * 0.031,
        [M.blue, M.rose, M.brass, M.blue, M.teal, M.rose, M.blue, M.gold][i],
        s,
        true,
        0.045
      );
    }
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      feather(
        secondaries,
        [0.06, 0.132 - t * 0.19, s * (0.096 + t * 0.062)],
        [-1.08 + t * 0.61, -0.132 - t * 0.441, s * (0.245 + 0.1 * t)],
        0.123 - t * 0.021,
        [M.rose, M.blue, M.teal, M.gold, M.blue, M.rose, M.teal][i],
        s,
        true,
        0.045
      );
    }
    for (let i = 0; i < 6; i++) {
      const t = i / 5;
      feather(
        coverts,
        [0.06, 0.146 - t * 0.092, s * 0.17],
        [-0.68 + t * 0.4, -0.09 - t * 0.32, s * (0.315 + t * 0.017)],
        0.096,
        [M.gold, M.teal, M.rose, M.blue, M.gold, M.teal][i],
        s,
        true,
        0.035
      );
    }
    line(
      wing,
      M.light,
      [
        [0.075, 0.081, s * 0.22],
        [-0.21, 0.165, s * 0.231],
        [-0.46, 0.15, s * 0.208],
        [-0.81, 0.073, s * 0.158],
        [-1.12, -0.04, s * 0.152]
      ],
      0.021
    );
    const hub = group(wing, 0.007, -0.003, s * 0.288);
    for (const [r, z, mt] of [
      [0.171, 0, M.bronze],
      [0.148, 0.023, M.gold],
      [0.128, 0.038, M.enamel],
      [0.087, 0.051, M.rose]
    ])
      cylinder(hub, mt, 0, 0, s * z, r, r, 0.035, 42, 'z');
    for (let i = 0; i < 12; i++) {
      const a = (TAU * i) / 12;
      rod(
        hub,
        M.light,
        [0.096 * Math.cos(a), 0.096 * Math.sin(a), s * 0.061],
        [0.125 * Math.cos(a), 0.125 * Math.sin(a), s * 0.061],
        0.005
      );
    }
    const gem = mesh(hub, new T.OctahedronGeometry(0.064, 1), M.ruby, 0, 0, s * 0.069);
    gem.scale.z = 0.68;
    for (let i = 0; i < 4; i++) {
      const a = ((i + 0.5) * TAU) / 4;
      ball(hub, M.light, 0.055 * Math.cos(a), 0.055 * Math.sin(a), s * 0.082, 0.006, 0.006, 0.008);
    }
    ring(hub, M.light, 0, 0, s * 0.067, 0.067, 0.009);
    wing.remove(...tiers);
    bake(wing);
    for (const tier of tiers) {
      wing.add(tier);
      bake(tier);
    }
    wings.push({ joint, s, tiers, register });
  }
  // These crank pins stay with their arbors when the feather cartridges lift off.
  const wingArbor = group(root, 0.27, 2.82, 0);
  const spindle = group(wingArbor);
  cylinder(spindle, M.blue, 0, 0, 0, 0.042, 0.042, 0.78, 32, 'z');
  bake(spindle);
  function crank(parent, name, x, y, z, pinX, pinY, pinZ) {
    const arm = group(parent, x, y, z);
    rod(arm, M.gold, [0, 0, 0], [pinX, pinY, pinZ], 0.023, 0.015);
    cylinder(arm, M.blue, pinX, pinY, pinZ, 0.029, 0.029, 0.045, 18, 'z');
    jewel(arm, pinX, pinY, pinZ + 0.022, 0.012);
    bake(arm);
    pins[name] = group(arm, pinX, pinY, pinZ);
  }
  crank(wingArbor, 'wing', 0, 0, 0.37, -0.19, -0.1, 0);
  crank(tail, 'tail', 0, 0, 0.14, -0.19, -0.13, 0.018);
  crank(head, 'head', 0, -0.19, 0, 0.09, -0.055, 0.25);
  crank(lower, 'bill', 0, 0, 0.12, -0.146, -0.13, 0.04);
  const legs = group(root);
  for (const s of [-1, 1]) {
    const z = s * 0.166;
    const a = [0.1 + s * 0.15, 2.34, z],
      b = [0.17 + s * 0.16, 2.0, z],
      c = [s * 0.19, 1.842 + s * 0.028, s * 0.039];
    rod(legs, M.bronze, a, b, 0.065, 0.044);
    rod(legs, M.gold, b, c, 0.038, 0.026);
    ball(legs, M.rose, ...b, 0.066, 0.055, 0.056);
    for (let i = 1; i < 5; i++) {
      const t = i / 6;
      ball(
        legs,
        M.antique,
        b[0] + (c[0] - b[0]) * t,
        b[1] + (c[1] - b[1]) * t,
        b[2] + (c[2] - b[2]) * t,
        0.039,
        0.019,
        0.038
      );
    }
    for (let j = 0; j < 3; j++) {
      const x = c[0] + (j - 1) * 0.058,
        grip = c[2];
      line(
        legs,
        M.gold,
        [
          c,
          [x, 1.86 + s * 0.031, grip + 0.052],
          [x + 0.04, 1.83 + s * 0.031, grip + 0.092],
          [x + 0.066, 1.75 + s * 0.031, grip + 0.076]
        ],
        0.017,
        14
      );
      rod(
        legs,
        M.light,
        [x + 0.066, 1.75 + s * 0.031, grip + 0.076],
        [x + 0.055, 1.73 + s * 0.031, grip + 0.032],
        0.017,
        0.0015,
        10
      );
    }
    line(
      legs,
      M.bronze,
      [c, [c[0] - 0.08, c[1] + 0.03, c[2] - 0.06], [c[0] - 0.12, c[1] - 0.05, c[2] - 0.083]],
      0.018,
      10
    );
  }
  bake(legs);
  return {
    root,
    head,
    wings,
    pins,
    update(t, e, cut, drive) {
      root.position.y = 0.47 * e;
      body.visible = !cut;
      head.rotation.z = -0.025 + 0.061 * drive.head;
      head.rotation.y = -0.3 + 0.51 * drive.head;
      lower.rotation.z = -0.045 - 0.37 * drive.bill;
      upper.rotation.z = 0.017 * drive.bill;
      tongue.rotation.z = drive.bill * (0.12 + 0.08 * Math.sin(t * TAU * 11));
      const spread = drive.tail;
      tail.rotation.z = -0.041 + 0.18 * spread;
      for (const { vane, s, v } of rectrices) {
        vane.rotation.y = s * v * (0.1 + 0.43 * spread + 0.21 * e);
        vane.rotation.z = (0.5 - v) * (0.17 + 0.47 * spread + 0.27 * e);
      }
      const lift = drive.wing;
      wingArbor.rotation.z = 0.09 - 0.22 * lift;
      for (const { joint, s, tiers, register } of wings) {
        joint.position.set(
          0.27 + (s > 0 ? -1.03 : 0.58) * e,
          2.82 + (s > 0 ? 0.66 : 0.83) * e,
          s * (0.303 + e * 0.96)
        );
        joint.rotation.x = s * (0.02 + 0.37 * lift + e * 0.33 + (cut ? 0.36 : 0));
        joint.rotation.z = wingArbor.rotation.z - (s > 0 ? 0.22 : 0.54) * e;
        joint.rotation.y = -s * (0.061 * lift + 0.12 * e);
        register(e);
        tiers.forEach((row, i) => {
          row.rotation.z = (1 - i) * 0.038 * lift;
          row.position.z = s * i * e * 0.094;
        });
        if (cut) joint.position.z += s * 0.35;
      }
      innerWheels.forEach(([g, f]) => (g.rotation.z = t * f));
    }
  };
}
