import * as T from 'three';
import {
  V,
  TAU,
  P,
  group,
  box,
  part,
  poly,
  cyl,
  beam,
  torus,
  extrude,
  tint,
  rand,
} from './workshop.js';

export function arch(g, x, y, z, w, h, depth, ry = 0, wall = P.wall) {
  const a = group(g, x, y, z, ry),
    r = w * 0.346,
    spring = h - r - 0.3,
    trim = Math.min(0.27, w * 0.071);
  const s = new T.Shape();
  s.moveTo(-w / 2, 0);
  s.lineTo(-r, 0);
  s.lineTo(-r, spring);
  s.absarc(0, spring, r, Math.PI, 0, true);
  s.lineTo(r, 0);
  s.lineTo(w / 2, 0);
  s.lineTo(w / 2, h);
  s.lineTo(-w / 2, h);
  s.closePath();
  part(a, extrude(s, depth), wall, 0, 0, 0, [1, 1, 1], 'stone');
  for (const sign of [-1, 1]) {
    const face = sign * (depth / 2 + 0.025);
    for (let i = 0; i < 13; i++) {
      const lo = (i * Math.PI) / 13 + 0.008,
        hi = ((i + 1) * Math.PI) / 13 - 0.008,
        outer = r + trim * (i === 6 ? 1.3 : 1);
      const p = [
        [r * Math.cos(lo), r * Math.sin(lo)],
        [outer * Math.cos(lo), outer * Math.sin(lo)],
        [outer * Math.cos(hi), outer * Math.sin(hi)],
        [r * Math.cos(hi), r * Math.sin(hi)],
      ];
      poly(a, p, 0.11, tint(i % 3 === 0 ? P.pale : 0xdba574), 0, spring, face);
    }
    for (const side of [-1, 1]) {
      const cx = side * (r + trim * 0.5);
      box(a, cx, spring / 2, face, trim * 0.86, spring, 0.095, tint(P.pale), 'stone');
      box(a, cx, spring - 0.05, face, trim * 1.65, 0.14, 0.19, P.cream);
      box(a, cx, 0.12, face, trim * 1.7, 0.24, 0.18, P.pale);
    }
    box(a, 0, h - 0.1, face, w + 0.07, 0.12, 0.14, P.pale);
  }
  return a;
}
export function deck(g, x, y, z, w, d, body = P.rose) {
  box(g, x, y - 0.36, z, w - 0.16, 0.46, d - 0.16, body, 'stone');
  box(g, x, y - 0.47, z, w - 0.04, 0.095, d - 0.04, P.umber);
  box(g, x, y - 0.265, z, w + 0.04, 0.095, d + 0.04, P.brass);
  box(g, x, y - 0.19, z, w + 0.12, 0.09, d + 0.12, P.shadow);
  box(g, x, y - 0.085, z, w + 0.25, 0.15, d + 0.25, P.pale);
  box(g, x, y - 0.008, z, w + 0.1, 0.032, d + 0.1, 0xd5ab83, 'stone');
}
export function column(g, x, y, z, h, r = 0.18) {
  cyl(g, x, y + 0.09, z, r * 1.65, r * 1.9, 0.18, P.pale, 12);
  cyl(g, x, y + 0.25, z, r * 1.28, r * 1.42, 0.15, P.brass, 12);
  cyl(g, x, y + h / 2, z, r * 0.91, r * 1.09, h - 0.46, P.pale, 12, 'stone');
  cyl(g, x, y + h - 0.2, z, r * 1.5, r * 0.95, 0.23, P.cream, 12);
  box(g, x, y + h - 0.06, z, r * 3.2, 0.13, r * 3.2, P.pale);
}
export function railing(g, a, b, height = 0.55, count = 6) {
  const v = b.clone().sub(a);
  for (let i = 0; i <= count; i++) {
    const p = a.clone().addScaledVector(v, i / count);
    const main = i === 0 || i === count || i % 3 === 0,
      r = main ? 0.075 : 0.035;
    cyl(g, p.x, p.y + height * 0.49, p.z, r, r * 1.18, height, main ? P.pale : P.brass, 8);
    if (main) cyl(g, p.x, p.y + height + 0.025, p.z, r * 1.4, r * 1.3, 0.075, P.gold, 8);
  }
  for (const f of [0.48, 0.96])
    beam(
      g,
      a.clone().add(V(0, height * f, 0)),
      b.clone().add(V(0, height * f, 0)),
      f > 0.5 ? 0.037 : 0.019,
      P.brass,
    );
}
export function finial(g, x, y, z, s = 1) {
  const p = group(g, x, y, z);
  p.scale.setScalar(s);
  cyl(p, 0, 0.1, 0, 0.22, 0.3, 0.2, P.pale, 8);
  cyl(p, 0, 0.25, 0, 0.08, 0.15, 0.14, P.brass, 12);
  part(p, new T.OctahedronGeometry(0.17), P.gold, 0, 0.45, 0, [0.8, 1.45, 0.8]);
  cyl(p, 0, 0.78, 0, 0.004, 0.035, 0.43, P.brass, 8);
}
export function dome(g, x, y, z, r) {
  const a = group(g, x, y, z);
  cyl(a, 0, 0.19, 0, r * 0.95, r * 0.98, 0.38, P.blue, 48);
  for (let i = 0; i < 32; i++) {
    const ang = (i * TAU) / 32;
    box(a, Math.sin(ang) * r * 0.966, 0.22, Math.cos(ang) * r * 0.966, 0.07, 0.31, 0.07, P.brass);
  }
  cyl(a, 0, 0.42, 0, r * 1.03, r * 1.05, 0.12, P.pale, 48);
  const profile = [
    [1, 0.45],
    [1.03, 0.53],
    [1, 0.69],
    [0.95, 0.87],
    [0.85, 1.07],
    [0.7, 1.26],
    [0.5, 1.43],
    [0.26, 1.56],
    [0.075, 1.7],
    [0.025, 1.76],
  ];
  const points = profile.map(([w, h]) => new T.Vector2(w * r, (h - 0.45) * r + 0.49));
  for (let i = 0; i < 32; i++) {
    const angle = (i * TAU) / 32;
    part(
      a,
      new T.LatheGeometry(points, 3, angle, TAU / 32),
      tint(i % 4 === 0 ? P.tile : P.teal, 0.22),
      0,
      0,
      0,
      [1, 1, 1],
      'copper',
    );
    if (i % 2 === 0)
      for (let j = 1; j < points.length; j++) {
        const at = (p) => V(Math.sin(angle) * p.x, p.y, Math.cos(angle) * p.x);
        beam(a, at(points[j - 1]), at(points[j]), r * 0.013, P.brass, 5);
      }
  }
  for (let i = 0; i < 32; i++) {
    const k = (i * TAU) / 32,
      facet = group(a, Math.sin(k) * r * 0.987, 0.49 + 0.24 * r, Math.cos(k) * r * 0.987, k);
    facet.rotation.x = -0.32;
    poly(
      facet,
      [
        [0, -0.09 * r],
        [0.055 * r, 0],
        [0, 0.11 * r],
        [-0.055 * r, 0],
      ],
      0.011,
      i % 2 ? 0x83b0a0 : 0xad9e6f,
    );
  }
  for (const i of [1, 3, 5])
    torus(a, 0, points[i].y, 0, points[i].x, 0.014, P.blue).rotation.x = Math.PI / 2;
  finial(a, 0, points.at(-1).y - 0.02, 0, 0.83 * r);
}
export function rose(g, x, y, z, r, ry = 0) {
  const a = group(g, x, y, z, ry);
  function disk(radius, depth, col, dz, kind) {
    cyl(a, 0, 0, dz, radius, radius, depth, col, 64, kind).rotation.x = Math.PI / 2;
  }
  disk(r * 1.16, 0.13, P.umber, 0);
  disk(r, 0.09, 0x173e4a, 0.09);
  torus(a, 0, 0, 0.12, r * 1.07, r * 0.067, P.pale);
  torus(a, 0, 0, 0.17, r * 0.96, r * 0.032, P.gold);
  const palette = [0xd89659, 0x46a7a4, 0xc77073, 0x59a3b9, 0xca9d62];
  for (let i = 0; i < 12; i++) {
    const petal = group(a, 0, 0, 0.16);
    petal.rotation.z = (i * TAU) / 12;
    // Two lancets flanking an oculus, in leaded turquoise, carmine and amber glass.
    for (const sign of [-1, 1]) {
      const leaf = new T.Shape();
      leaf.moveTo(0, 0.24 * r);
      leaf.quadraticCurveTo(sign * 0.16 * r, 0.39 * r, sign * 0.126 * r, 0.58 * r);
      leaf.quadraticCurveTo(sign * 0.085 * r, 0.7 * r, 0, 0.78 * r);
      leaf.quadraticCurveTo(sign * 0.053 * r, 0.49 * r, 0, 0.24 * r);
      part(petal, extrude(leaf, 0.024), palette[(i + (sign + 1)) % 5], 0, 0, 0, [1, 1, 1], 'glow');
    }
    for (const sign of [-1, 1]) {
      const p = (k) => V(sign * 0.12 * Math.sin(k * Math.PI) * r, (0.24 + 0.54 * k) * r, 0.021);
      for (let j = 0; j < 5; j++) beam(petal, p(j / 5), p((j + 1) / 5), 0.009 * r, P.brass, 5);
    }
    torus(petal, 0, 0.845 * r, 0.024, 0.074 * r, 0.015 * r, P.gold, 16);
    const jewel = cyl(
      petal,
      0,
      0.845 * r,
      0.015,
      0.055 * r,
      0.055 * r,
      0.012,
      0x76b8ad,
      14,
      'glow',
    );
    jewel.rotation.x = Math.PI / 2;
  }
  disk(r * 0.205, 0.03, 0xe6ad70, 0.23, 'glow');
  torus(a, 0, 0, 0.25, r * 0.23, r * 0.028, P.brass);
}
export function tree(g, x, y, z, h = 1.4, olive = false) {
  const a = group(g, x, y, z),
    s = h / 1.7;
  a.scale.setScalar(s);
  cyl(a, 0, 0.13, 0, 0.225, 0.15, 0.26, P.rose, 10);
  cyl(a, 0, 0.27, 0, 0.24, 0.24, 0.08, P.pale, 10);
  cyl(a, 0, 0.3, 0, 0.19, 0.19, 0.04, P.umber, 10);
  cyl(a, 0, 0.59, 0, 0.045, 0.07, 0.6, P.umber, 8);
  if (olive) {
    for (let i = 0; i < 6; i++) {
      const k = i * 2.39,
        p = V(Math.cos(k) * (0.24 + rand() * 0.15), 1.03 + rand() * 0.38, Math.sin(k) * 0.34);
      beam(a, V(0, 0.57, 0), p, 0.035, P.umber);
      const leaf = part(
        a,
        new T.IcosahedronGeometry(1, 0),
        tint(i % 2 ? 0x688562 : 0x466f59),
        p.x,
        p.y,
        p.z,
        [0.32, 0.29, 0.28],
      );
      leaf.rotation.y = k;
    }
  } else {
    const levels = [
      [0.51, 0.055],
      [0.72, 0.24],
      [0.91, 0.255],
      [1.12, 0.21],
      [1.4, 0.145],
      [1.75, 0.055],
      [1.92, 0.004],
    ];
    for (let i = 1; i < levels.length; i++) {
      const [y0, r0] = levels[i - 1],
        [y1, r1] = levels[i];
      const c = cyl(
        a,
        (0.023 * (i - 1)) / 6,
        (y0 + y1) / 2,
        0,
        r1,
        r0,
        y1 - y0,
        tint(i % 2 ? P.pine : 0x306454),
        9,
      );
      c.rotation.y = 0.12;
    }
    for (let j = 0; j < 42; j++) {
      const ang = j * 2.4,
        y = 0.65 + rand() * 1.08,
        rad = 0.17 * Math.sin(((y - 0.38) * Math.PI) / 1.65);
      const frond = part(
        a,
        new T.IcosahedronGeometry(1, 0),
        tint([0x3e6e56, 0x326148, 0x4c7458, 0x345a4d][j % 4], 0.3),
        rad * Math.sin(ang),
        y,
        rad * Math.cos(ang),
        [0.055 + rand() * 0.036, 0.12 + rand() * 0.11, 0.06],
      );
      frond.rotation.set(0.12 * Math.cos(ang), ang, 0.13 * Math.sin(ang));
    }
  }
}
// Engraved soffits give the upward-facing courtyards a ceiling of their own.
function starMedallion(g, x, y, z, r, flip = false) {
  const a = group(g, x, y, z);
  a.rotation.x = flip ? Math.PI * 0.5 : -Math.PI * 0.5;
  for (const f of [1, 0.91, 0.65]) torus(a, 0, 0, 0.005, r * f, r * 0.018, P.brass, 48);
  for (let j = 0; j < 12; j++) {
    const angle = (j * TAU) / 12,
      plate = group(a);
    plate.rotation.z = angle;
    poly(
      plate,
      [
        [0, 0.17 * r],
        [0.11 * r, 0.45 * r],
        [0, 0.82 * r],
        [-0.11 * r, 0.45 * r],
      ],
      0.012,
      j % 2 ? P.tile : P.brass,
      0,
      0,
      0.015,
    );
  }
  torus(a, 0, 0, 0.024, 0.22 * r, 0.032 * r, P.gold);
}
export function foundation(g, x, y, z, w, d, drop = 1.5) {
  deck(g, x, y, z, w, d);
  for (let i = 0; i < 4; i++) {
    const f = 1 - i * 0.124;
    box(
      g,
      x,
      y - 0.62 - ((i + 0.5) * drop) / 4,
      z,
      w * f,
      drop / 4 + 0.02,
      d * f,
      i % 2 ? P.slate : P.blue,
      'stone',
    );
    box(
      g,
      x,
      y - 0.62 - (i * drop) / 4,
      z,
      w * f + 0.08,
      0.07,
      d * f + 0.08,
      i === 0 ? P.brass : P.umber,
    );
  }
  const end = y - 0.62 - drop;
  const ww = w * 0.62,
    dd = d * 0.62;
  box(g, x, end - 0.035, z, ww, 0.074, dd, P.blue, 'stone');
  for (const side of [-1, 1]) {
    box(g, x + side * (ww * 0.5 - 0.09), end - 0.083, z, 0.032, 0.02, dd - 0.15, P.brass);
    box(g, x, end - 0.083, z + side * (dd * 0.5 - 0.09), ww - 0.15, 0.02, 0.032, P.brass);
  }
  starMedallion(g, x, end - 0.084, z, Math.min(ww, dd) * 0.35, true);
  starMedallion(g, x, y + 0.017, z, Math.min(w, d) * 0.27, false);
  for (const sx of [-1, 1])
    for (const sz of [-1, 1]) {
      const px = x + sx * w * 0.223,
        pz = z + sz * d * 0.22;
      cyl(g, px, end - 0.32, pz, 0.18, 0.065, 0.65, P.brass, 8);
      part(g, new T.OctahedronGeometry(0.14), P.tile, px, end - 0.71, pz, [0.7, 1.6, 0.7]);
    }
}
