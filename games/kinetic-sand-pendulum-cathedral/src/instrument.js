import * as T from 'three';
import { add, turn, disk, annulus, hoop, rod, fluted, batch } from './geometry.js';
import { TAU, SAND_Y, RADIUS } from './motion.js';

function dialMaterial() {
  const c = document.createElement('canvas');
  c.width = c.height = 2048;
  const ctx = c.getContext('2d');
  ctx.translate(1024, 1024);
  ctx.fillStyle = '#baa175';
  ctx.fillRect(-1024, -1024, 2048, 2048);
  for (let r = 912; r <= 1024; r += 1) {
    ctx.strokeStyle = 'rgba(63,45,26,' + (0.038 + 0.032 * Math.sin(r * 12.6)) + ')';
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, TAU);
    ctx.stroke();
  }
  for (let i = 0; i < 360; i++) {
    ctx.save();
    ctx.rotate((i * TAU) / 360);
    const major = i % 10 === 0,
      mid = i % 5 === 0;
    ctx.fillStyle = major ? '#2c302b' : '#544938';
    ctx.fillRect(-0.8, -1018, major ? 2.8 : 1.7, major ? 23 : mid ? 16 : 8);
    if (major) {
      ctx.font = 'bold 17px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(i).padStart(3, '0'), 0, -980);
    }
    if (i % 30 === 0) {
      ctx.beginPath();
      ctx.moveTo(0, -947);
      ctx.lineTo(6, -958);
      ctx.lineTo(0, -963);
      ctx.lineTo(-6, -958);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
  for (const r of [940, 947, 999, 1020]) {
    ctx.lineWidth = 1.7;
    ctx.strokeStyle = '#63563e';
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, TAU);
    ctx.stroke();
  }
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 12;
  return new T.MeshStandardMaterial({
    map: tex,
    roughness: 0.37,
    metalness: 0.68,
    bumpMap: tex,
    bumpScale: 0.005,
  });
}
export function apparatus(scene, m, point) {
  const table = new T.Group();
  scene.add(table);
  disk(table, 4.35, 0.03, 0.14, m.weathered);
  disk(table, 4.27, 0.117, 0.08, m.black);
  hoop(table, 4.21, 0.16, 0.024, m.bronze);
  disk(table, 3.47, 0.2, 0.15, m.black);
  hoop(table, 3.45, 0.27, 0.035, m.brass);
  fluted(table, 3.32, 2.74, 0.27, 0.34, 0.054, 88, m.black);
  turn(
    table,
    [
      [2.76, 0.59],
      [2.91, 0.63],
      [2.98, 0.68],
      [3.02, 0.73],
      [3.34, 0.79],
      [3.65, 0.91],
      [3.89, 1.04],
      [4.03, 1.22],
      [4.08, 1.31],
    ],
    m.black,
  );
  for (const [r, y, h, mat] of [
    [3.02, 0.7, 0.029, m.edge],
    [3.83, 1.02, 0.037, m.bronze],
    [4.0, 1.18, 0.028, m.brass],
    [4.08, 1.34, 0.05, m.edge],
    [3.72, 1.542, 0.03, m.edge],
  ]) {
    hoop(table, r, y, h, mat);
  }
  fluted(table, 4.035, 4.08, 1.21, 0.127, 0.034, 180, m.bronze);
  turn(
    table,
    [
      [4.085, 1.31],
      [4.12, 1.35],
      [4.12, 1.41],
      [4.08, 1.43],
      [4.04, 1.48],
      [4.0, 1.51],
    ],
    m.black,
  );
  annulus(table, 3.71, 4.018, 1.526, dialMaterial());
  hoop(table, 4.02, 1.516, 0.028, m.brass);
  turn(
    table,
    [
      [3.72, 1.53],
      [3.68, 1.56],
      [3.64, 1.575],
      [3.6, 1.55],
      [3.59, 1.51],
    ],
    m.bronze,
  );
  hoop(table, 3.645, 1.569, 0.014, m.edge);
  // Eight screws and four pierced indexing pointers sit on the graduated azimuth circle.
  for (let i = 0; i < 8; i++) {
    const a = (TAU * i) / 8,
      s = Math.sin(a),
      c = Math.cos(a);
    const g = new T.Group();
    g.position.set(3.91 * s, 1.535, 3.91 * c);
    g.rotation.y = a;
    table.add(g);
    if (i % 2 === 0) {
      const sh = new T.Shape();
      sh.moveTo(-0.095, 0.16);
      sh.lineTo(0.095, 0.16);
      sh.lineTo(0.105, 0);
      sh.lineTo(0, -0.24);
      sh.lineTo(-0.105, 0);
      sh.closePath();
      const cut = new T.Path();
      cut.moveTo(0, -0.13);
      cut.lineTo(-0.041, -0.02);
      cut.lineTo(0.041, -0.02);
      cut.closePath();
      sh.holes.push(cut);
      const p = add(
        g,
        new T.ExtrudeGeometry(sh, { depth: 0.018, bevelEnabled: false }),
        m.brass,
        0,
        0.025,
        0,
      );
      p.rotation.x = Math.PI / 2;
    }
    disk(g, 0.052, 0.04, 0.025, m.dark, 28);
    disk(g, 0.031, 0.056, 0.012, m.brass, 20);
    add(g, new T.BoxGeometry(0.044, 0.002, 0.007), m.dark, 0, 0.063, 0);
  }
  batch(table);

  const bob = new T.Group();
  scene.add(bob);
  turn(
    bob,
    [
      [0.003, 0],
      [0.021, 0.05],
      [0.04, 0.21],
      [0.052, 0.29],
      [0.044, 0.32],
    ],
    m.steel,
    48,
  );
  turn(
    bob,
    [
      [0.045, 0.25],
      [0.085, 0.28],
      [0.092, 0.32],
      [0.115, 0.35],
      [0.12, 0.39],
      [0.105, 0.41],
    ],
    m.dark,
    64,
  );
  // A plumb-bob profile, with broached collars, chasing, and turned bead mouldings.
  turn(
    bob,
    [
      [0.093, 0.36],
      [0.12, 0.39],
      [0.15, 0.43],
      [0.19, 0.47],
      [0.233, 0.52],
      [0.28, 0.59],
      [0.339, 0.68],
      [0.377, 0.77],
      [0.397, 0.86],
      [0.398, 0.92],
      [0.384, 0.98],
      [0.35, 1.035],
      [0.296, 1.08],
      [0.235, 1.12],
      [0.154, 1.15],
    ],
    m.bob,
    112,
  );
  for (const [r, y, w, mat] of [
    [0.123, 0.39, 0.016, m.brass],
    [0.162, 0.445, 0.013, m.edge],
    [0.348, 0.705, 0.013, m.edge],
    [0.395, 0.839, 0.011, m.brass],
    [0.401, 0.901, 0.013, m.edge],
    [0.379, 0.989, 0.012, m.edge],
    [0.244, 1.117, 0.022, m.brass],
  ]) {
    hoop(bob, r, y, w, mat, 112);
  }
  turn(
    bob,
    [
      [0.4, 0.855],
      [0.405, 0.863],
      [0.405, 0.889],
      [0.402, 0.898],
    ],
    m.patina,
    112,
  );
  for (let i = 0; i < 28; i++) {
    const a = (i * TAU) / 28;
    const pin = add(
      bob,
      new T.SphereGeometry(0.008, 10, 6),
      m.edge,
      0.405 * Math.sin(a),
      0.877,
      0.405 * Math.cos(a),
    );
    pin.scale.y = 0.86;
  }
  turn(
    bob,
    [
      [0.155, 1.13],
      [0.19, 1.15],
      [0.185, 1.178],
      [0.136, 1.19],
      [0.121, 1.23],
      [0.097, 1.251],
    ],
    m.bronze,
    80,
  );
  fluted(bob, 0.12, 0.096, 1.19, 0.09, 0.014, 18, m.brass);
  hoop(bob, 0.106, 1.28, 0.021, m.edge, 48);
  const eye = add(bob, new T.TorusGeometry(0.081, 0.021, 12, 48), m.brass, 0, 1.362, 0);
  eye.rotation.y = 0.4;
  batch(bob);
  const cables = new T.Group();
  scene.add(cables);
  const up = new T.Vector3(0, 1, 0);
  function cable(r, mat) {
    return add(cables, new T.CylinderGeometry(r, r, 1, 12), mat);
  }
  const wires = [
    cable(0.015, m.edge),
    cable(0.014, m.bronze),
    cable(0.013, m.brass),
    cable(0.013, m.brass),
  ];
  const ferrules = Array.from({ length: 8 }, () => cable(0.027, m.brass));
  const ring = add(cables, new T.TorusGeometry(0.078, 0.02, 10, 32), m.bronze);
  function between(mesh, a, b) {
    const d = b.clone().sub(a);
    mesh.position.copy(a).lerp(b, 0.5);
    mesh.scale.y = d.length();
    mesh.quaternion.setFromUnitVectors(up, d.normalize());
  }
  function pose(t) {
    const [x, z] = point(t);
    const tip = new T.Vector3(x, SAND_Y - 0.012, z);
    const division = new T.Vector3(0.34 * x, 6.05 + 0.025 * (x * x + z * z), 0.28 * z);
    bob.position.copy(tip);
    bob.quaternion.setFromUnitVectors(up, division.clone().sub(tip).normalize());
    bob.rotateY(0.34 + 0.23 * t + 0.11 * Math.sin(t));
    bob.updateMatrixWorld();
    const ankle = bob.localToWorld(new T.Vector3(0, 1.44, 0));
    const span = new T.Vector3(0.015, 0, -0.006);
    between(wires[0], ankle.clone().add(span), division.clone().add(span));
    between(wires[1], ankle.clone().sub(span), division.clone().sub(span));
    between(wires[2], division, new T.Vector3(-1.04, 9.3, 0));
    between(wires[3], division, new T.Vector3(1.04, 9.3, 0));
    ring.position.copy(division);
    ring.rotation.y = 0.4;
    for (let i = 0; i < 8; i++) {
      const frac = i === 0 ? 0.015 : i === 1 ? 0.03 : i / 8;
      between(
        ferrules[i],
        ankle.clone().lerp(division, frac),
        ankle.clone().lerp(division, frac + 0.009),
      );
    }
    return tip;
  }

  const rake = new T.Group();
  scene.add(rake);
  rake.visible = false;
  const blade = add(rake, new T.BoxGeometry(0.072, 0.062, 2), m.brass);
  const handle = add(rake, new T.BoxGeometry(0.037, 0.032, 2), m.dark, 0, 0.047, 0);
  function sweep(f) {
    rake.visible = f > 0 && f < 1;
    const x = RADIUS * (f * 2 - 1),
      z = Math.sqrt(Math.max(0, RADIUS * RADIUS - x * x));
    rake.position.set(x, SAND_Y + 0.018, 0);
    blade.scale.z = handle.scale.z = z;
  }
  return { pose, sweep };
}
