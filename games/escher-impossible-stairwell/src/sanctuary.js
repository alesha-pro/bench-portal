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
  tint,
  rand,
  bake,
} from './workshop.js';
import {
  arch,
  deck,
  column,
  railing,
  finial,
  dome,
  rose,
  tree,
  foundation,
} from './architecture.js';

export const alignment = V(1, 0.85, 1).normalize();
export const routes = [];
export const lamps = [];
export const pools = [];
const perpendicular = (a, b) => Math.atan2(b.x - a.x, b.z - a.z);
function lantern(g, x, y, z, s = 1) {
  const a = group(g, x, y, z);
  a.scale.setScalar(s);
  cyl(a, 0, 0, 0, 0.115, 0.096, 0.24, 0xffc77a, 6, 'glow');
  cyl(a, 0, 0.16, 0, 0.037, 0.16, 0.095, P.brass, 6);
  cyl(a, 0, -0.16, 0, 0.135, 0.04, 0.075, P.iron, 6);
  for (let j = 0; j < 4; j++) {
    const k = (TAU * j) / 4;
    box(a, 0.101 * Math.cos(k), 0, 0.101 * Math.sin(k), 0.016, 0.25, 0.016, P.iron);
  }
  lamps.push(a);
}
function banner(g, x, y, z, length, col = P.teal, ry = 0) {
  const a = group(g, x, y, z, ry);
  beam(a, V(-0.43, 0.04, 0), V(0.43, 0.04, 0), 0.033, P.brass);
  poly(
    a,
    [
      [-0.32, 0],
      [0.32, 0],
      [0.32, -length + 0.2],
      [0, -length],
      [-0.32, -length + 0.2],
    ],
    0.035,
    col,
  );
  for (const sx of [-1, 1])
    box(a, sx * 0.267, -length * 0.46, 0.021, 0.024, length * 0.9, 0.014, P.brass);
  const q = 0.18,
    cy = -0.37;
  for (let i = 0; i < 4; i++) {
    const p = (k) =>
      V(Math.cos((k * Math.PI) / 2) * q, cy + Math.sin((k * Math.PI) / 2) * q, 0.031);
    beam(a, p(i), p(i + 1), 0.019, P.gold);
  }
  box(a, 0, -length / 2 - 0.1, 0.03, 0.019, length * 0.48, 0.014, P.brass);
}
function roofShrine(g, x, y, z, w, d, h, col, roof = true) {
  const a = group(g, x, y, z);
  for (const sign of [-1, 1]) {
    arch(a, 0, 0, sign * (d / 2 - 0.19), w, h, 0.38, 0, col);
    arch(a, sign * (w / 2 - 0.19), 0, 0, d - 0.7, h, 0.38, Math.PI / 2, col);
  }
  deck(a, 0, h + 0.1, 0, w + 0.2, d + 0.2, col);
  if (roof) dome(a, 0, h + 0.12, 0, Math.min(w, d) * 0.46);
  for (const i of [-1, 1])
    for (const j of [-1, 1]) finial(a, i * (w / 2 - 0.1), h + 0.13, j * (d / 2 - 0.1), 0.65);
  lantern(a, 0, h - 0.54, 0, 1.3);
  beam(a, V(0, h - 0.28, 0), V(0, h + 0.02, 0), 0.021, P.iron);
  return a;
}
function arcade(g, x, y, z, n, w, h, depth, ry = 0) {
  const a = group(g, x, y, z, ry);
  for (let i = 0; i < n; i++)
    arch(a, (i - (n - 1) / 2) * w, 0, 0, w, h, depth, 0, i % 2 ? P.rose : P.wall);
  deck(a, 0, h + 0.12, 0, n * w, depth + 0.2);
  return a;
}
// Local +Z is uphill. Each flight supplies the exact same tread profile to the walkers.
function flight(g, a, b, w, n, people = 3, { rails = true, col = P.wall } = {}) {
  const len = Math.hypot(b.x - a.x, b.z - a.z),
    rise = b.y - a.y,
    s = group(g, a.x, a.y, a.z, perpendicular(a, b));
  const dz = len / n,
    dy = rise / n;
  for (let i = 0; i < n; i++) {
    const top = dy * (i + 1),
      z = (i + 0.5) * dz;
    box(s, 0, top - 0.19, z, w, 0.38, dz + 0.01, tint(col, 0.15), 'stone');
    box(s, 0, top - 0.037, z - 0.015, w + 0.07, 0.075, dz + 0.04, tint(P.pale, 0.09));
  }
  for (const x of [-1, 1]) {
    const side = group(s, x * (w * 0.5 - 0.075), 0, 0);
    const sloped = box(
      side,
      0,
      rise / 2 - 0.3,
      len / 2,
      0.16,
      0.31,
      Math.hypot(len, rise) + 0.13,
      P.umber,
    );
    sloped.rotation.x = -Math.atan2(rise, len);
    if (rails)
      railing(
        s,
        V(x * (w * 0.5 - 0.045), Math.max(0, dy), 0),
        V(x * (w * 0.5 - 0.045), rise, len),
        0.35,
        Math.max(4, Math.round(n / 2)),
      );
  }
  if (people) routes.push({ node: s, len, rise, w, n, people });
  return s;
}
function promenade(g, a, b, w, n) {
  const len = Math.hypot(b.x - a.x, b.z - a.z),
    node = group(g, a.x, a.y, a.z, perpendicular(a, b));
  routes.push({ node, len, rise: 0, w, n: 1, people: n });
}
function smallPortal(g, x, y, z, w, h, ry = 0) {
  const a = group(g, x, y, z, ry);
  arch(a, 0, 0, 0, w, h, 0.42, 0, P.rose);
  deck(a, 0, h + 0.07, 0, w + 0.05, 0.57);
  for (const side of [-1, 1]) finial(a, side * w * 0.42, h + 0.07, 0, 0.46);
  return a;
}
function triangle(g) {
  // Endpoints differ by 4*(1,.85,1). Their orthographic projections coincide.
  const a = V(-2.6, -0.05, 0.95),
    b = a.clone().add(V(0, 3.4, 0)),
    c = b.clone().add(V(4, 0, 0)),
    d = c.clone().add(V(0, 0, 4));
  box(g, a.x, (a.y + b.y) / 2, a.z, 0.44, 3.4, 0.44, P.wall, 'stone');
  box(g, (b.x + c.x) / 2, b.y, b.z, 4.44, 0.44, 0.44, P.pale, 'stone');
  box(g, c.x, c.y, (c.z + d.z) / 2, 0.44, 0.44, 4.44, P.rose, 'stone');
  for (const k of [-1, 1]) {
    box(g, (b.x + c.x) / 2, b.y + 0.19 * k, b.z + 0.225, 4.4, 0.038, 0.035, P.gold);
    box(g, c.x + 0.225, c.y + 0.19 * k, (c.z + d.z) / 2, 0.035, 0.038, 4.4, P.gold);
    box(g, a.x + 0.224, a.y + 1.7, a.z + k * 0.19, 0.035, 3.4, 0.035, P.brass);
  }
  // The freestanding upper flight meets a physically distant arcade at the optical seam.
  flight(g, V(c.x, 2.3, 2.43), V(d.x, d.y + 0.23, d.z), 0.82, 10, 2, { rails: false });
  const offset = V(4, 3.4, 4);
  const farEnd = d.clone().sub(offset);
  farEnd.y += 0.23;
  // Seen through the seam, this flight turns and climbs from the apparent
  // landing to the western gallery. Its first tread meets the near top tread.
  const firstRise = (1.36 - farEnd.y) / 9;
  flight(g, farEnd.clone().sub(V(0, firstRise, 0)), V(farEnd.x, 1.36, -1.35), 0.82, 10, 2, {
    rails: false,
  });
  for (let i = 0; i < 3; i++) box(g, -1.84 + i * 1.3, b.y - 0.33, b.z, 0.24, 0.25, 0.4, P.brass);
}
// A second, open tribar crowns the gap between the two sanctuaries. Its two ends
// occupy separate balconies one full sightline apart. A gilt reveal follows
// each return, so the eye can trace the whole arch when the ends register.
function crown(g) {
  const ox = -2.22,
    oz = -0.72,
    base = 4.62,
    span = 3.12,
    rise = span * 0.85,
    w = 0.36;
  const a = group(g, ox, base, oz);
  box(a, 0, rise / 2, 0, w, rise + w, w, P.pale, 'stone');
  box(a, span / 2, rise, 0, span + w, w, w, P.pale, 'stone');
  box(a, span, rise, span / 2, w, w, span + w, P.teal);
  for (const s of [-1, 1]) {
    box(a, s * w * 0.39, rise / 2, w * 0.506, 0.021, rise, 0.014, P.brass);
    box(a, span / 2, rise + s * w * 0.39, w * 0.506, span, 0.022, 0.014, P.brass);
    box(a, span + w * 0.506, rise + s * w * 0.39, span / 2, 0.014, 0.022, span, P.gold);
  }
  // A mitred shade along the intrados gives each arm a legible thickness.
  box(a, -0.01, rise - 0.21, 0, span * 0.09, 0.06, 0.41, P.brass);
  const bracket = [
    [0, 0],
    [0.56, 0],
    [0.39, -0.08],
    [0.22, -0.19],
    [0.11, -0.34],
    [0, -0.57],
  ];
  poly(a, bracket, 0.29, P.pale, w * 0.41, rise - w * 0.42, 0);
  const mount = group(g, ox, base, oz);
  beam(mount, V(-1.28, -0.43, 0), V(0, -0.43, 0), 0.1, P.brass);
  box(mount, 0, -0.28, 0, 0.46, 0.22, 0.46, P.teal);
  for (const z of [-0.13, 0.13]) beam(mount, V(-1.3, -1.33, z), V(0, -0.41, z), 0.048, P.brass);
}
export function buildSanctuary(scene, mats) {
  const g = new T.Group();
  // The bell tower and cloister occupy the western island.
  foundation(g, -4.12, -2.05, -0.35, 3.3, 3.65, 1.38);
  roofShrine(g, -4.12, -2.05, -0.35, 2.98, 3.08, 3.2, P.rose, false);
  deck(g, -4.12, 1.34, -0.35, 3.65, 3.74);
  roofShrine(g, -4.43, 1.35, -0.88, 2.38, 2.2, 2.82, P.wall, false);
  roofShrine(g, -4.43, 4.32, -0.88, 2.02, 1.91, 2.04, P.wall, true);
  banner(g, -5.09, 4.25, 0.3, 1.72);
  banner(g, -3.72, 4.25, 0.3, 1.72);
  tree(g, -5.31, 1.37, 0.86, 1.55);
  tree(g, -2.84, 1.37, -1.72, 1.35);
  railing(g, V(-5.7, 1.35, 1.47), V(-4.06, 1.35, 1.47), 0.5, 5);
  // A high domed apse has a pierced drum, four rose windows and pendentives.
  foundation(g, 1.93, -0.25, -3.68, 4.02, 3.85, 1.45);
  roofShrine(g, 1.93, -0.23, -3.68, 3.68, 3.43, 2.92, P.wall, false);
  deck(g, 1.93, 2.83, -3.68, 4.28, 4.0);
  const chapel = group(g, 1.93, 2.84, -3.8);
  box(chapel, 0, 1.4, 0, 2.95, 2.8, 2.75, P.rose, 'stone');
  for (let i = 0; i < 4; i++) {
    const side = group(chapel, 0, 0, 0, (i * Math.PI) / 2);
    const depth = i % 2 ? 1.49 : 1.39;
    rose(side, 0, 1.64, depth, 0.85);
    for (const s of [-1, 1]) {
      column(side, s * 1.32, 0, depth + 0.03, 2.83, 0.13);
      box(side, s * 1.04, 1.55, depth + 0.02, 0.07, 2.32, 0.055, P.pale);
    }
    box(side, 0, 0.41, depth + 0.03, 2.57, 0.07, 0.12, P.pale);
    pools.push({ node: side, at: V(0, 0.025, depth + 0.43), wall: false, size: 0.8 });
  }
  deck(chapel, 0, 2.95, 0, 3.12, 2.94);
  dome(chapel, 0, 2.97, 0, 1.56);
  for (const i of [-1, 1]) for (const j of [-1, 1]) finial(chapel, i * 1.37, 3.0, j * 1.32, 0.8);
  for (const [x, z] of [
    [0.15, -5.17],
    [3.73, -5.08],
    [3.68, -2.15],
  ])
    tree(g, x, 2.86, z, 1.72);
  // Air between the islands is spanned by a perforated viaduct and a processional stair.
  arcade(g, -1.6, -1.25, -2.17, 3, 1.64, 2.5, 0.61);
  flight(g, V(-3.7, 1.37, -2.1), V(0.52, 2.84, -2.1), 1.03, 17, 4);
  // Lower cloister, gate and the long public stair on the visible promenade.
  foundation(g, -2.38, -2.82, 4.28, 3.18, 2.55, 1.12);
  smallPortal(g, -3.13, -2.8, 4.55, 1.39, 1.87);
  tree(g, -3.57, -2.8, 3.52, 1.5);
  tree(g, -1.39, -2.79, 5.18, 1.07, true);
  flight(g, V(-2.95, -2.8, 3.77), V(-2.95, 1.36, 0.98), 1.19, 23, 5);
  // Roof gardens and an inverted cloister hang from the aqueduct terrace.
  foundation(g, 4.72, -1.03, 2.24, 3.02, 3.15, 0.85);
  arcade(g, 2.02, -3.84, 3.68, 3, 1.55, 2.72, 0.75);
  deck(g, 2.02, -0.98, 3.58, 4.75, 1.52);
  flight(g, V(-1.11, -2.81, 4.15), V(2.53, -0.96, 4.15), 1.02, 17, 4);
  tree(g, 5.81, -1.0, 3.46, 1.94);
  tree(g, 5.77, -1.0, 1.13, 1.38, true);
  railing(g, V(3.56, -1, 3.86), V(5.96, -1, 3.86), 0.45, 7);
  flight(g, V(4.56, -1.01, 1.72), V(4.56, 2.83, -2.24), 1.13, 23, 4);
  deck(g, 4.18, 2.83, -2.5, 1.81, 1.0);
  smallPortal(g, 4.58, 2.84, -2.67, 1.38, 1.96);
  banner(g, 4.12, -1.5, 3.92, 1.5, P.red);
  promenade(g, V(0.06, -0.96, 3.23), V(3.45, -0.96, 3.23), 0.88, 3);
  const inverted = group(g, 1.96, -3.83, 3.69);
  inverted.rotation.z = Math.PI;
  deck(inverted, 0, 0.03, 0, 2.76, 1.55);
  tree(inverted, -0.91, 0.04, 0.23, 1.58);
  tree(inverted, 0.78, 0.04, -0.14, 1.24);
  smallPortal(inverted, -0.09, 0.04, -0.22, 0.85, 1.06);
  const ceiling = group(g, -0.87, 0.13, -1.8);
  ceiling.rotation.z = Math.PI;
  flight(ceiling, V(-2, -0.74, 0.3), V(1.17, 0.94, 0.3), 0.83, 14, 4);
  deck(ceiling, 1.35, 0.94, 0.3, 0.74, 1.04);
  tree(ceiling, 1.48, 0.95, 0.44, 1.04);
  // Vertical courts have their own up axes, stairs, potted olives and lantern procession.
  const east = group(g, 3.99, -0.33, -3.61);
  east.rotation.z = -Math.PI / 2;
  deck(east, 0, 0.1, 0, 2.48, 2.29);
  flight(east, V(-1.19, 0.1, 0.67), V(1.95, 1.7, 0.67), 0.79, 14, 4);
  deck(east, 2.18, 1.71, 0.5, 0.94, 1.14);
  tree(east, -0.83, 0.14, -0.63, 1.32, true);
  smallPortal(east, 0.35, 0.12, -0.43, 1.24, 1.6);
  rose(east, 0.28, 0.59, -0.18, 0.29);
  pools.push({ node: east, at: V(0.08, 0.13, 0.11), size: 0.58 });
  const south = group(g, -4.2, -2.15, 1.55);
  south.rotation.x = Math.PI / 2;
  deck(south, 0, 0.06, 0.25, 2.68, 1.95);
  flight(south, V(-1.1, 0.075, 0.83), V(1.35, 1.44, 0.83), 0.79, 12, 3);
  tree(south, -0.95, 0.08, -0.31, 1.22, true);
  deck(south, 1.46, 1.43, 0.7, 0.76, 1.02);
  triangle(g);
  crown(g);
  // Mooring chains and plumb bobs pick out the unoccupied space below the foundations.
  for (const [x, y, z, h] of [
    [-4.4, -4.05, -0.3, 1.24],
    [1.95, -2.2, -3.64, 1.67],
    [4.73, -2.37, 2.25, 1.05],
  ]) {
    for (let i = 0; i < 9; i++)
      torus(g, x, y - (i * h) / 9, z, h * 0.057, 0.013, P.brass, 12).rotation.y =
        ((i % 2) * Math.PI) / 2;
    part(g, new T.OctahedronGeometry(0.21), P.gold, x, y - h - 0.17, z, [0.77, 1.92, 0.77]);
  }
  g.updateMatrixWorld(true);
  scene.add(bake(g, mats));
  return g;
}
