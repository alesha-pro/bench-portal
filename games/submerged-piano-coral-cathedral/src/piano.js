import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { T, V, group, mesh, box, orb, rod, line, turned, mat, bake, canvasTex } from './craft.js';

const perimeter = new T.Shape();
perimeter.moveTo(-1.6, -0.58);
perimeter.lineTo(1.6, -0.58);
perimeter.lineTo(1.6, -0.2);
perimeter.bezierCurveTo(1.6, 0.62, 0.4, 0.75, 0.22, 1.57);
perimeter.bezierCurveTo(0.02, 2.56, -0.22, 2.95, -0.91, 2.95);
perimeter.bezierCurveTo(-1.4, 2.95, -1.6, 2.65, -1.6, 2.18);
perimeter.closePath();
const edge = perimeter.getSpacedPoints(180);
function panel(p, m, y, d, scale = 1) {
  const geo = new T.ExtrudeGeometry(perimeter, {
    depth: d,
    bevelEnabled: true,
    bevelSize: 0.018,
    bevelThickness: 0.012,
    bevelSegments: 3,
    curveSegments: 32,
  });
  geo.rotateX(-Math.PI / 2);
  const o = mesh(p, geo, m, 0, y, 0);
  o.scale.set(scale, 1, scale);
  return o;
}
function border(p, m, y, r, scale = 1) {
  const pts = edge.map((v) => V(v.x * scale, y, -v.y * scale));
  return line(p, m, pts, r, 6);
}
function banner(p, x, y, z, w, h, t) {
  const m = new T.MeshBasicMaterial({
    map: t,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
  });
  return mesh(p, new T.PlaneGeometry(w, h), m, x, y, z);
}
function marquetry() {
  return canvasTex(1400, 160, (c, w, h) => {
    c.translate(w / 2, h / 2);
    c.strokeStyle = '#bc9762';
    c.fillStyle = '#ad9059';
    c.lineWidth = 2;
    for (const sign of [-1, 1]) {
      c.save();
      c.scale(sign, 1);
      c.beginPath();
      c.moveTo(40, 3);
      c.bezierCurveTo(150, -60, 234, 66, 345, 1);
      c.bezierCurveTo(434, -48, 507, 28, 612, -3);
      c.stroke();
      for (let k = 0; k < 22; k++) {
        const x = 75 + k * 23,
          y = 17 * Math.sin((x - 200) * 0.025);
        c.save();
        c.translate(x, y);
        c.rotate(Math.sin(k * 0.71) * 0.26 + (k % 2 ? 1 : -1) * 0.44);
        c.beginPath();
        c.moveTo(0, 0);
        c.quadraticCurveTo(9, -10, 24, 0);
        c.quadraticCurveTo(8, 4, 0, 0);
        c.fill();
        c.restore();
      }
      c.restore();
    }
    for (let i = 0; i < 16; i++) {
      c.save();
      c.rotate((i * Math.PI) / 8);
      c.beginPath();
      c.moveTo(0, 6);
      c.quadraticCurveTo(5, 14, 0, 27);
      c.quadraticCurveTo(-5, 14, 0, 6);
      c.stroke();
      c.restore();
    }
  });
}
function badge() {
  return canvasTex(1024, 192, (c, w, h) => {
    c.textAlign = 'center';
    c.fillStyle = '#e1c188';
    c.strokeStyle = '#dfbf79';
    c.lineWidth = 2;
    for (let i = -5; i <= 5; i++) {
      c.beginPath();
      c.moveTo(w / 2, 47);
      c.quadraticCurveTo(w / 2 + i * 6, 40, w / 2 + i * 8, 15 + Math.abs(i) * 3);
      c.stroke();
    }
    c.font = '55px Georgia';
    c.fillText('N E R E I D', w / 2, 104);
    c.font = '20px Georgia';
    c.fillText('A T E L I E R    ·    M D C C C X C V I', w / 2, 145);
  });
}
export function makePiano(scene, tex) {
  const fixed = group(scene),
    lid = group(fixed, -1.59, 1.83, 0),
    leaf = group(lid, 1.59, 0, 0);
  lid.rotation.z = 0.578;
  const lacquer = mat(0xd5d9d9, 0.25, 0.35, { map: tex.lacquer, bumpMap: tex.lacquer, bumpScale: 0.004 }),
    ebony = mat(0xb8bbc2, 0.21, 0.31, { map: tex.lacquer }),
    gold = mat(0xf5da9c, 0.29, 0.63, { map: tex.bronze }),
    antique = mat(0xe2a964, 0.39, 0.58, { map: tex.bronze });
  const plate = mat(0xffda8b, 0.34, 0.47, { map: tex.bronze }),
    cedar = mat(0xffffff, 0.49, 0.06, { map: tex.wood }),
    blackKey = mat(0x141b21, 0.19, 0.28);
  const felt = mat(0x833b37, 0.86),
    dark = mat(0x252022, 0.68);
  panel(fixed, lacquer, 1.22, 0.43);
  for (const [y, r, m] of [
    [1.22, 0.032, ebony],
    [1.27, 0.011, antique],
    [1.58, 0.015, gold],
    [1.635, 0.036, lacquer],
    [1.68, 0.012, gold],
  ])
    border(fixed, m, y, r);
  // Hollow bent rim above the soundboard.
  const rr = [];
  for (let i = 0; i < edge.length - 1; i++) {
    const a = edge[i],
      b = edge[i + 1];
    rr.push(
      a.x,
      1.63,
      -a.y,
      b.x,
      1.63,
      -b.y,
      a.x,
      1.84,
      -a.y,
      b.x,
      1.63,
      -b.y,
      b.x,
      1.84,
      -b.y,
      a.x,
      1.84,
      -a.y,
    );
  }
  const rg = new T.BufferGeometry();
  rg.setAttribute('position', new T.Float32BufferAttribute(rr, 3));
  rg.computeVertexNormals();
  const rim = mat(0xae8061, 0.3, 0.25, { side: T.DoubleSide, map: tex.lacquer });
  mesh(fixed, rg, rim);
  border(fixed, lacquer, 1.84, 0.035);
  border(fixed, gold, 1.856, 0.009);
  panel(fixed, cedar, 1.65, 0.014, 0.966);
  // The lid has two inlaid contours and a gilt shell on its inner face.
  panel(leaf, lacquer, 0.015, 0.085, 1.014);
  for (const y of [0, 0.108]) {
    border(leaf, antique, y, 0.01, 1.007);
    border(leaf, gold, y, 0.006, 0.959);
  }
  const seal = canvasTex(480, 480, (c, w, h) => {
    c.translate(w / 2, h / 2);
    c.strokeStyle = '#ae8b4e';
    c.lineWidth = 2;
    for (const r of [67, 72, 112, 118]) {
      c.beginPath();
      c.arc(0, 0, r, 0, Math.PI * 2);
      c.stroke();
    }
    for (let i = 0; i < 32; i++) {
      c.save();
      c.rotate((i * Math.PI) / 16);
      c.beginPath();
      c.moveTo(0, 75);
      c.quadraticCurveTo(12, 92, 0, i % 4 ? 109 : 139);
      c.quadraticCurveTo(-13, 92, 0, 75);
      c.stroke();
      c.restore();
    }
    c.font = 'italic 92px Georgia';
    c.fillStyle = '#c9ac73';
    c.textAlign = 'center';
    c.fillText('N', 0, 30);
  });
  const mark = banner(leaf, -0.6, -0.003, -0.8, 0.94, 0.94, seal);
  mark.rotation.x = Math.PI / 2;
  rod(fixed, gold, V(1.08, 1.74, 0.22), V(1.09, 3.58, 0.2), 0.023, 0.016, 16);
  for (const z of [-2.05, -1.1, -0.05]) {
    rod(fixed, gold, V(-1.6, 1.86, z - 0.1), V(-1.6, 1.86, z + 0.1), 0.034);
    box(fixed, antique, -1.55, 1.83, z, 0.12, 0.03, 0.15);
  }
  // The cast frame, cross struts, bridge pins, bichord basses and triple-strung treble.
  const limit = (x) => {
    const vals = edge.filter((p) => Math.abs(p.x - x) < 0.062).map((p) => p.y);
    return Math.max(0.06, ...vals);
  };
  const ends = [];
  for (let i = 0; i < 76; i++) {
    const x = -1.44 + (i * 2.87) / 75;
    const goal = x - 0.095;
    const back = Math.min(2.83, limit(goal) - 0.12);
    ends.push(V(goal, 1.716, -back));
  }
  line(fixed, antique, ends, 0.039);
  line(
    fixed,
    gold,
    ends.map((p) => p.clone().add(V(0, 0.031, 0))),
    0.014,
  );
  box(fixed, plate, 0, 1.703, 0.37, 2.98, 0.085, 0.34);
  box(fixed, felt, 0, 1.759, 0.25, 2.95, 0.025, 0.047);
  for (const [x, z] of [
    [-1.35, -2.39],
    [-0.74, -2.56],
    [-0.01, -1.16],
    [0.82, -0.47],
    [1.43, -0.03],
  ]) {
    rod(fixed, plate, V(x + 0.06, 1.78, 0.28), V(x, 1.78, z), 0.042, 0.055, 12);
    orb(fixed, gold, x, 1.78, z, 0.093, 0.028, 0.081);
  }
  const wires = [],
    wireMeta = [],
    wireColors = [];
  const pins = mat(0xc5ba85, 0.21, 0.75),
    bronze = mat(0xb37d3f, 0.33, 0.68);
  for (let i = 0; i < ends.length; i++) {
    const count = i < 19 ? 2 : 3;
    for (let j = 0; j < count; j++) {
      const dx = (j - 1) * 0.011;
      const a = V(-1.44 + (i * 2.87) / 75 + dx, 1.756, 0.32 + (j % 2) * 0.045);
      const b = ends[i].clone();
      b.x += dx;
      b.y = 1.751;
      const ctr = a.clone().lerp(b, 0.5),
        thick = i < 19 ? 0.0024 : 0.0015;
      const samples = [
        [a, -1],
        [ctr, -1],
        [a, 1],
        [a, 1],
        [ctr, -1],
        [ctr, 1],
        [ctr, -1],
        [b, -1],
        [ctr, 1],
        [ctr, 1],
        [b, -1],
        [b, 1],
      ];
      const col = new T.Color(i < 19 ? 0xd19768 : j === 1 ? 0xe0bd76 : 0xb79962);
      for (const [pos, side] of samples) {
        if (pos === ctr) wireMeta.push({ i: i + 24, offset: wires.length });
        wires.push([pos.x + thick * side, pos.y, pos.z]);
        wireColors.push(col.r, col.g, col.b);
      }
      orb(fixed, pins, a.x, 1.763, a.z, 0.009, 0.014, 0.009);
    }
    if (i % 3 === 0) {
      const o = box(fixed, ebony, -1.41 + i * 0.0376, 1.79, 0.17, 0.072, 0.046, 0.123);
      o.rotation.y = 0.044;
    }
  }
  const wg = new T.BufferGeometry();
  wg.setAttribute('position', new T.Float32BufferAttribute(wires.flat(), 3));
  wg.setAttribute('color', new T.Float32BufferAttribute(wireColors, 3));
  const strings = new T.Mesh(wg, new T.MeshBasicMaterial({ vertexColors: true, side: T.DoubleSide }));
  scene.add(strings);
  // Circular inspection ports, a notched brass plate and hand-laid diagonal copper bass strings.
  for (const [x, z, r] of [
    [-0.99, -2.21, 0.145],
    [-0.62, -1.91, 0.11],
    [-0.21, -1.29, 0.086],
  ]) {
    orb(fixed, dark, x, 1.684, z, r, 0.014, r);
    const ring = mesh(fixed, new T.TorusGeometry(r, 0.014, 8, 36), gold, x, 1.694, z);
    ring.rotation.x = Math.PI / 2;
  }
  for (let i = 0; i < 22; i++) {
    const x = -1.4 + i * 0.029;
    rod(fixed, bronze, V(x, 1.764, 0.12), V(x + 0.26, 1.774, -2.42 + i * 0.027), 0.0032, 0.0032, 5);
  }
  for (let i = 0; i < 16; i++) {
    const k = i / 15,
      xx = -1.42 + k * 2.81;
    orb(fixed, gold, xx, 1.766, 0.47, 0.021, 0.016, 0.021);
  }
  // Victorian turned legs, lyre, three gilded shoes and caster wheels.
  for (const [x, z] of [
    [-1.4, 1.02],
    [1.4, 1.02],
    [-0.9, -2.43],
  ]) {
    turned(
      fixed,
      lacquer,
      x,
      z,
      [
        [0.09, 0.086],
        [0.14, 0.096],
        [0.17, 0.076],
        [0.22, 0.103],
        [0.27, 0.105],
        [0.3, 0.081],
        [0.65, 0.112],
        [0.75, 0.157],
        [0.8, 0.147],
        [0.85, 0.11],
        [0.89, 0.139],
        [0.93, 0.141],
        [0.99, 0.105],
        [1.1, 0.173],
        [1.23, 0.169],
      ],
      32,
    );
    for (const [y, r] of [
      [0.16, 0.098],
      [0.27, 0.105],
      [0.86, 0.124],
      [0.94, 0.143],
      [1.11, 0.174],
    ])
      turned(fixed, antique, x, z, [
        [y - 0.008, r],
        [y, r + 0.006],
        [y + 0.01, r],
      ]);
    orb(fixed, gold, x, 0.079, z, 0.08, 0.072, 0.064);
    box(fixed, ebony, x, 1.185, z, 0.38, 0.17, 0.4);
  }
  for (const x of [-0.19, 0.19]) {
    line(
      fixed,
      antique,
      [V(x, 1.2, 0.9), V(x * 0.77, 0.76, 0.91), V(x * 1.5, 0.5, 0.95), V(x, 0.29, 1.02)],
      0.035,
    );
    rod(fixed, lacquer, V(x, 1.23, 0.9), V(x, 0.29, 0.9), 0.045);
  }
  box(fixed, lacquer, 0, 0.275, 1.01, 0.52, 0.11, 0.23);
  for (const x of [-0.14, 0, 0.14]) {
    line(fixed, gold, [V(x, 0.29, 0.98), V(x, 0.23, 1.1), V(x, 0.17, 1.23)], 0.026);
    orb(fixed, gold, x, 0.168, 1.24, 0.046, 0.025, 0.091);
  }
  // Cheeks, key slip, fallboard, inset maker's stamp.
  box(fixed, lacquer, 0, 1.263, 1.01, 3.23, 0.176, 0.96);
  box(fixed, antique, 0, 1.304, 1.49, 3.14, 0.018, 0.024);
  for (const x of [-1.566, 1.566]) {
    box(fixed, lacquer, x, 1.414, 1.0, 0.116, 0.24, 0.948);
    box(fixed, gold, x, 1.53, 0.98, 0.077, 0.007, 0.9);
  }
  box(fixed, lacquer, 0, 1.577, 0.615, 3.13, 0.4, 0.16);
  box(fixed, antique, 0, 1.775, 0.629, 3.1, 0.021, 0.13);
  box(fixed, felt, 0, 1.471, 0.745, 3.01, 0.023, 0.035);
  banner(fixed, 0, 1.615, 0.7, 1.15, 0.219, badge());
  const flourish = marquetry();
  for (const side of [-1, 1]) {
    banner(fixed, side * 0.98, 1.608, 0.699, 0.9, 0.125, flourish);
    const cheek = group(fixed, side * 1.56, 1.394, 0.9);
    const profile = new T.Shape();
    profile.moveTo(-0.29, 0);
    profile.lineTo(0.57, 0);
    profile.lineTo(0.57, 0.072);
    profile.bezierCurveTo(0.5, 0.16, 0.3, 0.06, 0.23, 0.16);
    profile.bezierCurveTo(0.16, 0.24, 0.05, 0.32, -0.15, 0.34);
    profile.lineTo(-0.29, 0.34);
    profile.closePath();
    const g = new T.ExtrudeGeometry(profile, {
      depth: 0.084,
      bevelEnabled: true,
      bevelSize: 0.015,
      bevelThickness: 0.012,
      bevelSegments: 3,
      curveSegments: 16,
    });
    const trim = mesh(cheek, g, lacquer, side * 0.028, 0, 0);
    trim.rotation.y = -Math.PI / 2;
    for (const [yy, r] of [
      [0.62, 0.109],
      [0.68, 0.119],
      [0.71, 0.136],
    ])
      turned(
        fixed,
        gold,
        side * 1.4,
        1.02,
        [
          [yy - 0.004, r],
          [yy + 0.004, r + 0.002],
        ],
        32,
      );
  }
  const topSeal = banner(leaf, -0.53, 0.119, -0.68, 0.66, 0.66, seal);
  topSeal.rotation.x = -Math.PI / 2;

  const ivories = [0xe5d7bc, 0xe2d4bc, 0xefdfc8, 0xe8d8bd, 0xeedec5].map((c) => mat(c, 0.3, 0.05));
  const whiteGeometry = new RoundedBoxGeometry((3.015 / 52) * 0.947, 0.093, 0.725, 2, 0.008);
  const blackGeometry = new RoundedBoxGeometry(0.035, 0.078, 0.412, 2, 0.006);
  const keys = [],
    keyGroup = group(scene),
    xAt = {},
    whiteWidth = 3.015 / 52;
  let wi = 0;
  for (let midi = 21; midi <= 108; midi++) {
    const black = [1, 3, 6, 8, 10].includes(midi % 12);
    const x = -1.5075 + whiteWidth * (wi + (black ? 0 : 0.5));
    if (!black) wi++;
    const z = 0.707;
    const pivot = group(keyGroup, x, black ? 1.487 : 1.413, z),
      depth = black ? 0.412 : 0.725;
    const key = mesh(
      pivot,
      black ? blackGeometry : whiteGeometry,
      black ? blackKey : ivories[wi % 5],
      0,
      black ? 0.018 : 0,
      depth * 0.5,
    );
    key.castShadow = true;
    key.receiveShadow = true;
    keys.push({ midi, pivot, black });
    xAt[midi] = [x, black ? 1.56 : 1.468, z + depth * 0.82];
  }
  bake(fixed);
  return {
    keys,
    xAt,
    update(weights, t) {
      for (const k of keys) k.pivot.rotation.x = (k.black ? 0.132 : 0.108) * (weights[k.midi] || 0);
      const a = wg.attributes.position;
      for (const w of wireMeta) {
        const y = 1.7535 + 0.006 * (weights[w.i] || 0) * Math.sin(t * 67 + w.i);
        a.setY(w.offset, y);
      }
      a.needsUpdate = true;
    },
  };
}
