import * as T from 'three';
import { bitmap, foliage, landscape, random } from './pixel-art.js';
import { clock, surge, surface, pixelTexture } from './materials.js';

const TAU = Math.PI * 2;
const clay = ['#c0a777', '#b59c70', '#baa479', '#cbb486', '#c1ad80'];
const lime = '#c7ad7d',
  rim = '#e0c38e',
  ochre = '#9b8157',
  shade = '#75694f',
  moss = '#85934f';
const r = random(54819),
  pick = (a) => a[Math.floor(r() * a.length)];

function relief(kind) {
  const { canvas, rect } = bitmap(32, 24);
  const rows =
    kind === 'mask'
      ? [
          '  aa        aa  ',
          ' abbaabbbbaabba ',
          'abbccbbbbbbccbba',
          'abcccbbaabbcccba',
          ' abbaccbbccabba ',
          '  bbaddbbddabb  ',
          '  ccbacbbcabcc  ',
          '   cbccccccbc   ',
          '  bbbbaaaabbbb  ',
          '   cbcddddcbc   ',
          '   c cbbbbc c   ',
          '      cccc      ',
        ]
      : [
          'bbbbbbbbbbbbbbbb',
          'aaaaaaaaaaaaaaaa',
          'aaccaaaaccccaaaa',
          'acbbcaacbbbbcaaa',
          'acaccacbcaabccaa',
          'acabcacbcaccbcaa',
          'acabcacbcaccbcaa',
          'acaccaccbaabccaa',
          'acbbcaaacbbbcaaa',
          'aaccaaaaacccaaaa',
          'aaaaaaaaaaaaaaaa',
          'cccccccccccccccc',
        ];
  const ink = { a: '#8f7957', b: '#c5ad7d', c: '#e3c58e', d: '#4f5145' };
  rows.forEach((row, y) =>
    [...row].forEach((v, x) => {
      if (ink[v]) rect(x * 2, y * 2, 2, 2, ink[v]);
    }),
  );
  return pixelTexture(canvas);
}
export function buildTemple(scene) {
  const groups = new Map(),
    foliageGroups = new Map(),
    motions = [],
    fires = [];
  const cube = new T.BoxGeometry(),
    cyl = new T.CylinderGeometry(0.5, 0.5, 1, 8);
  const diamond = new T.OctahedronGeometry(0.5),
    plane = new T.PlaneGeometry(1, 1);
  const materials = {
    rock: surface('rock'),
    cliff: surface('cliff'),
    plain: surface(),
    bright: new T.MeshBasicMaterial(),
    pool: surface('pool'),
    cascade: surface('waterfall', { side: T.DoubleSide }),
  };
  const dummy = new T.Object3D();
  function instance(geo, mat, x, y, z, w, h, d, color, rx = 0, ry = 0, rz = 0) {
    const key = geo.uuid + mat.uuid;
    if (!groups.has(key)) groups.set(key, { geo, mat, items: [] });
    dummy.position.set(x, y, z);
    dummy.rotation.set(rx, ry, rz);
    dummy.scale.set(w, h, d);
    dummy.updateMatrix();
    groups.get(key).items.push([dummy.matrix.clone(), new T.Color(color)]);
  }
  function box(x, y, z, w, h, d, col = lime, mat = 'rock', ry = 0, rz = 0) {
    instance(cube, materials[mat], x, y, z, w, h, d, col, 0, ry, rz);
  }
  function shape(geo, x, y, z, w, h, d, col, mat = 'plain', ry = 0, rz = 0) {
    instance(geo, materials[mat], x, y, z, w, h, d, col, 0, ry, rz);
  }
  function beam(a, b, width, col) {
    const p = new T.Vector3(...a),
      q = new T.Vector3(...b),
      d = q.clone().sub(p);
    dummy.position.copy(p.add(q).multiplyScalar(0.5));
    dummy.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d.clone().normalize());
    dummy.scale.set(width, d.length(), width);
    dummy.updateMatrix();
    const key = cube.uuid + materials.plain.uuid;
    if (!groups.has(key)) groups.set(key, { geo: cube, mat: materials.plain, items: [] });
    groups.get(key).items.push([dummy.matrix.clone(), new T.Color(col)]);
  }
  const mask = surface('plain', { map: relief('mask'), alphaTest: 0.5 });
  const fret = surface('plain', { map: relief('fret') });
  function plaque(x, y, z, w, h, mat = mask, side = 0) {
    instance(plane, mat, x, y, z, w, h, 1, '#ffffff', 0, side, 0);
  }
  function trim(x, y, z, w, d) {
    box(x, y, z, w, 0.14, d, shade);
    box(x, y + 0.09, z, w + 0.15, 0.12, d + 0.15, rim);
  }
  function frieze(x, y, z, w, d) {
    const n = Math.round(w / 0.75),
      m = Math.round(d / 0.75);
    for (let i = 0; i < n; i++)
      plaque(x - w / 2 + ((i + 0.5) * w) / n, y, z + d / 2 + 0.012, w / n, 0.3, fret);
    for (const side of [-1, 1])
      for (let i = 0; i < m; i++)
        plaque(
          x + side * (w / 2 + 0.012),
          y,
          z - d / 2 + ((i + 0.5) * d) / m,
          d / m,
          0.3,
          fret,
          (side * Math.PI) / 2,
        );
  }
  function vine(x, y, z, len, width = 0.12) {
    let px = x,
      pz = z,
      py = y;
    const col = pick(['#536941', '#607640', '#768944', '#4e6942']);
    for (let j = 0; j < Math.ceil(len * 5); j++) {
      const nx = px + (r() - 0.52) * 0.13,
        nz = pz + (r() - 0.5) * 0.05;
      beam([px, py, pz], [nx, py - 0.22, nz], 0.044, col);
      box(
        nx + (j % 2 ? 0.08 : -0.08),
        py - 0.13,
        nz,
        width * (0.75 + r()),
        0.19,
        0.065,
        col,
        'plain',
        0,
        j % 2 ? -0.6 : 0.6,
      );
      py -= 0.19;
      px = nx;
      pz = nz;
    }
  }
  // A cutaway island with broken, faceted basalt columns under the limestone course.
  for (let ix = -7; ix <= 7; ix++)
    for (let iz = -4; iz <= 5; iz++) {
      if ((Math.abs(ix) / 7.8) ** 4 + (Math.abs(iz - 0.4) / 5.35) ** 4 > 1) continue;
      const ex = ix + (r() - 0.5) * 0.22,
        ez = iz + (r() - 0.5) * 0.24;
      const h = 0.65 + r() * 1.0 + Math.max(0, 1 - Math.hypot(ix / 8, iz / 6)) * 0.95;
      box(
        ex,
        -0.35 - h / 2,
        ez,
        1.23,
        h,
        1.21,
        pick(['#524f42', '#615b49', '#6b654c', '#807455', '#5b5c4c']),
        'cliff',
        (r() - 0.5) * 0.16,
        (r() - 0.5) * 0.12,
      );
      if (r() < 0.52)
        shape(
          diamond,
          ex,
          -h - 0.29,
          ez,
          1 + r() * 0.55,
          0.65 + r() * 0.95,
          1.45,
          '#555846',
          'cliff',
          r(),
        );
      box(
        ex,
        -0.27 + (r() - 0.5) * 0.13,
        ez,
        1.25,
        0.49,
        1.24,
        pick(['#818452', '#8b8959', '#787e50']),
        'cliff',
        (r() - 0.5) * 0.07,
      );
      if (iz >= 4 && r() < 0.3) vine(ex, -0.43, ez + 0.62, 0.45 + r() * 1.3);
    }
  // Shallow octagonal pool built in three courses. Chamfered corners expose the outcrop.
  function basinLayer(y, w, d, h, cut, color, material) {
    const outline = new T.Shape();
    const x = w / 2,
      z = (d + 1.13) / 2;
    [
      [-x + cut, -z],
      [x - cut, -z],
      [x, -z + cut],
      [x, z - cut],
      [x - cut, z],
      [-x + cut, z],
      [-x, z - cut],
      [-x, -z + cut],
    ].forEach(([a, b], i) => (i ? outline.lineTo(a, b) : outline.moveTo(a, b)));
    outline.closePath();
    const geo = new T.ExtrudeGeometry(outline, { depth: h, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2);
    shape(geo, 0, y, 0.81, 1, 1, 1, color, material);
  }
  basinLayer(-0.31, 14.7, 9.6, 0.31, 0.92, ochre, 'rock');
  basinLayer(-0.035, 14.45, 9.38, 0.27, 0.92, rim, 'rock');
  basinLayer(0.19, 14.12, 9.06, 0.18, 0.85, '#80815a', 'rock');
  basinLayer(0.356, 13.8, 8.8, 0.045, 0.79, '#ffffff', 'pool');
  for (let x = -6; x <= 6; x++) {
    box(x, 0.45, 5.955, 0.94, 0.165, 0.29, x % 3 ? lime : moss);
    if (x % 3 === 0) plaque(x, 0.04, 6.183, 0.53, 0.3, fret);
  }
  for (const side of [-1, 1])
    for (let z = -3; z <= 4; z++) box(side * 7.03, 0.43, z + 0.23, 0.28, 0.16, 0.96, pick(clay));
  const cz = -0.88,
    base = 0.4,
    tiers = [
      [10.65, 5.7, 1.1],
      [8.93, 4.89, 1.13],
      [7.15, 4.04, 1.08],
      [5.36, 3.23, 1.03],
    ];
  let bottom = base;
  for (const [w, d, h] of tiers) {
    box(0, bottom + h * 0.49, cz, w, h, d, pick(clay));
    trim(0, bottom + 0.08, cz, w + 0.12, d + 0.12);
    box(0, bottom + h - 0.3, cz, w + 0.14, 0.33, d + 0.14, ochre);
    frieze(0, bottom + h - 0.29, cz, w + 0.15, d + 0.15);
    trim(0, bottom + h - 0.09, cz, w + 0.3, d + 0.3);
    for (let side of [-1, 1])
      for (let j = 0; j < 4; j++) {
        const x = side * (w * 0.5 - r() * 0.53),
          z = cz + (r() - 0.45) * d;
        box(
          x,
          bottom + h + 0.02,
          z,
          0.42 + r() * 0.55,
          0.13,
          0.45 + r() * 0.58,
          moss,
          'cliff',
          r() * 0.35,
        );
        if (j < 2) vine(side * (w / 2 + 0.2), bottom + h, z, 0.35 + r() * 0.8);
      }
    for (let j = 0; j < 3; j++)
      vine((j % 2 ? 1 : -1) * (w / 2 - r() * 0.75), bottom + h, cz + d / 2 + 0.2, 0.32 + r() * 0.56);
    bottom += h;
  }
  const summit = bottom;
  // Unbroken stair, separated by terraced jambs and gold nosings.
  const steps = 25,
    startZ = 4.26,
    endZ = 0.34,
    rise = (summit - base) / steps,
    run = (startZ - endZ) / steps;
  for (let j = 0; j < steps; j++) {
    const top = base + (j + 1) * rise,
      z = startZ - (j + 0.5) * run;
    box(0, (top + base) / 2, z, 2.1, top - base + 0.025, run + 0.018, j % 4 ? lime : ochre);
    box(0, top - 0.014, z + run * 0.42, 2.11, 0.047, 0.051, rim, 'plain');
    for (const side of [-1, 1]) {
      box(side * 1.16, top + 0.13, z, 0.26, 0.3, run + 0.045, shade);
      box(side * 1.16, top + 0.29, z, 0.3, 0.08, run + 0.04, rim);
    }
  }
  for (const side of [-1, 1]) {
    box(side * 1.17, 0.73, 4.27, 0.54, 0.65, 0.48, ochre);
    plaque(side * 1.17, 0.76, 4.517, 0.48, 0.4);
  }
  // The summit sanctuary has an open cella, split piers and a stepped roof comb.
  const sy = summit,
    sz = -0.9;
  box(0, sy + 0.07, sz, 3.93, 0.22, 2.6, rim);
  box(0, sy + 1.12, sz - 1, 3.3, 2.2, 0.32, shade);
  box(0, sy + 1.15, sz - 0.8, 1.65, 1.91, 0.12, '#394a42');
  for (const x of [-1.39, 1.39])
    for (const z of [sz - 0.81, sz + 0.89]) {
      box(x, sy + 0.25, z, 0.72, 0.33, 0.72, ochre);
      box(x, sy + 0.43, z, 0.59, 0.14, 0.61, rim);
      box(x, sy + 1.13, z, 0.49, 1.45, 0.48, lime);
      box(x, sy + 1.1, z + 0.26, 0.26, 1.21, 0.05, ochre);
      for (let j = 0; j < 3; j++)
        box(x, sy + 0.7 + j * 0.42, z + 0.29, 0.16, 0.16, 0.06, rim, 'plain', 0, Math.PI / 4);
      box(x, sy + 1.88, z, 0.6, 0.18, 0.62, ochre);
      box(x, sy + 2.06, z, 0.82, 0.24, 0.78, rim);
    }
  box(0, sy + 2.26, sz, 3.97, 0.35, 2.72, ochre);
  frieze(0, sy + 2.27, sz, 3.98, 2.73);
  trim(0, sy + 2.46, sz, 4.18, 2.91);
  for (let j = 0; j < 3; j++) {
    const w = 3.72 - j * 0.76,
      d = 2.43 - j * 0.43;
    box(0, sy + 2.64 + j * 0.24, sz, w, 0.27, d, j % 2 ? ochre : lime);
    box(0, sy + 2.74 + j * 0.24, sz, w + 0.08, 0.08, d + 0.07, j === 0 ? moss : rim);
  }
  box(0, sy + 3.36, sz, 1.17, 0.42, 1.16, ochre);
  box(0, sy + 3.58, sz, 0.78, 0.12, 0.88, rim);
  box(0, sy + 2.74, sz + 1.27, 1.42, 0.9, 0.3, ochre);
  plaque(0, sy + 2.79, sz + 1.428, 1.6, 1.08);
  for (const x of [-1.84, 1.84]) {
    box(x, sy + 2.76, sz + 0.96, 0.36, 0.45, 0.44, ochre);
    box(x, sy + 3.0, sz + 0.96, 0.19, 0.22, 0.25, rim);
    vine(x, sy + 2.57, sz + 1.39, 0.8 + r() * 0.6);
  }
  // The roof comb ends in a small gilded spire, echoed by hooked corner finials.
  for (const side of [-1, 1]) {
    for (const front of [-1, 1]) {
      const x = side * 1.86,
        z = sz + front * 1.16;
      box(x, sy + 2.68, z, 0.33, 0.34, 0.35, ochre);
      box(x + side * 0.13, sy + 2.85, z, 0.19, 0.27, 0.25, rim, 'rock', 0, -side * 0.19);
      box(x + side * 0.2, sy + 3.0, z, 0.13, 0.17, 0.16, '#bd9e60');
    }
  }
  box(0, sy + 3.68, sz, 0.63, 0.2, 0.6, ochre);
  shape(diamond, 0, sy + 3.98, sz, 0.57, 0.65, 0.57, '#cdac69');
  shape(diamond, 0, sy + 4.29, sz, 0.17, 0.3, 0.17, '#f0cc79');
  const faceZ = sz + 1.48,
    faceY = sy + 2.88;
  box(0, faceY, faceZ, 0.95, 0.58, 0.15, '#b49b67');
  box(0, faceY - 0.22, faceZ + 0.07, 0.64, 0.21, 0.18, '#8b7855');
  for (const side of [-1, 1]) {
    box(side * 0.26, faceY + 0.14, faceZ + 0.13, 0.48, 0.13, 0.15, '#e7c88b', 'plain', 0, side * 0.21);
    box(side * 0.25, faceY + 0.025, faceZ + 0.16, 0.21, 0.11, 0.08, '#465644', 'plain');
    box(side * 0.22, faceY + 0.05, faceZ + 0.22, 0.082, 0.06, 0.03, '#9bc29a', 'bright');
    box(side * 0.29, faceY - 0.17, faceZ + 0.15, 0.12, 0.19, 0.11, '#e3c995');
  }
  box(0, faceY - 0.01, faceZ + 0.2, 0.18, 0.3, 0.14, '#ceb582');
  // Jade and copper behind the suspended, independently faceted crystal.
  shape(cyl, 0, sy + 0.22, sz + 0.33, 1.2, 0.26, 1.2, shade);
  shape(cyl, 0, sy + 0.39, sz + 0.33, 0.94, 0.12, 0.94, '#d1a85e');
  const ring = new T.TorusGeometry(0.64, 0.043, 4, 20);
  shape(ring, 0, sy + 1.23, sz + 0.15, 1, 1, 1, '#e2b568', 'bright');
  const crystal = new T.Group();
  scene.add(crystal);
  const jewelGeo = new T.BufferGeometry(),
    vertices = [],
    colors = [];
  for (let i = 0; i < 6; i++) {
    const a = (TAU * i) / 6,
      b = (TAU * (i + 1)) / 6;
    const A = [0.32 * Math.cos(a), 0.03, 0.32 * Math.sin(a)],
      B = [0.32 * Math.cos(b), 0.03, 0.32 * Math.sin(b)];
    for (const [tri, hex] of [
      [[A, [0, 0.74, 0], B], ['#5dc6da', '#b5f9fa', '#52adca'][i % 3]],
      [[A, B, [0, -0.5, 0]], ['#2785aa', '#64d9db', '#367ba4'][i % 3]],
    ]) {
      const c = new T.Color(hex);
      vertices.push(...tri.flat());
      for (let j = 0; j < 3; j++) colors.push(c.r, c.g, c.b);
    }
  }
  jewelGeo.setAttribute('position', new T.Float32BufferAttribute(vertices, 3));
  jewelGeo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  crystal.add(new T.Mesh(jewelGeo, new T.MeshBasicMaterial({ vertexColors: true, side: T.DoubleSide })));
  motions.push((t) => {
    crystal.position.set(0, sy + 1.18 + 0.09 * Math.sin((t * TAU) / 5), sz + 0.53);
    crystal.rotation.y = (t * TAU) / 10;
  });

  for (let i = 0; i < 7; i++) {
    const bit = new T.Mesh(diamond, new T.MeshBasicMaterial({ color: i % 2 ? '#c4f2df' : '#75cada' }));
    scene.add(bit);
    motions.push((t) => {
      const a = (t * TAU) / 6 + (i * TAU) / 7;
      bit.position.set(
        0.49 * Math.sin(a),
        sy + 1.12 + 0.46 * Math.sin(a + i),
        sz + 0.5 + 0.19 * Math.cos(a),
      );
      bit.scale.setScalar(0.055 + 0.026 * Math.sin(3 * a));
    });
  }
  const splash = [];
  function cascade(x, z, y, width, end, dropY, second = false) {
    const pts = [
      [z, y],
      [z + 0.21, y + 0.01],
      [z + 0.35, y - 0.09],
      [z + 0.43, y - 0.32],
      [end, dropY + 0.14],
      [end + 0.13, dropY + 0.015],
    ];
    const v = [],
      uv = [],
      idx = [];
    for (let j = 0; j < pts.length; j++) {
      const w = width * (j === 5 ? 1.21 : j === 4 ? 1.09 : 1);
      v.push(x - w / 2, pts[j][1], pts[j][0], x + w / 2, pts[j][1], pts[j][0]);
      const progress = (y - pts[j][1] + (pts[j][0] - z) * 0.33) / (y - dropY + (end + 0.13 - z) * 0.33);
      uv.push(0, progress, 1, progress);
      if (j) {
        let a = j * 2;
        idx.push(a - 2, a - 1, a, a - 1, a + 1, a);
      }
    }
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(v, 3));
    geo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    geo.translate(-x, 0, 0);
    const fall = new T.Mesh(geo, materials.cascade);
    fall.position.x = x;
    motions.push(() => {
      fall.scale.x = 1 + surge.value * 0.18;
    });
    fall.castShadow = fall.receiveShadow = true;
    scene.add(fall);
    if (!second) splash.push({ x, z: end + 0.16, w: width });
  }
  function spout(x, y, z, w) {
    box(x, y + 0.13, z - 0.2, w * 1.3, 0.61, 0.82, ochre);
    box(x, y + 0.46, z - 0.13, w * 1.4, 0.18, 0.66, rim);
    box(x, y + 0.19, z + 0.25, w * 0.96, 0.33, 0.41, shade);
    box(x, y + 0.25, z + 0.47, w * 0.91, 0.14, 0.06, '#514d3b', 'plain');
    for (const s of [-1, 1]) {
      box(x + s * w * 0.44, y + 0.47, z + 0.24, w * 0.31, 0.18, 0.37, rim, 'rock', 0, s * 0.15);
      box(x + s * w * 0.38, y + 0.35, z + 0.4, 0.12, 0.1, 0.08, '#343e36', 'plain');
      box(x + s * w * 0.44, y + 0.1, z + 0.46, 0.1, 0.22, 0.12, rim);
    }
  }
  for (const side of [-1, 1]) {
    const x = side * 2.64;
    box(x, 1.29, 1.99, 1.33, 1.76, 1.55, lime);
    trim(x, 2.15, 1.99, 1.39, 1.62);
    box(x, 2.28, 2.21, 1.09, 0.1, 1.46, '#ffffff', 'pool');
    spout(x, 3.59, 1.28, 1.0);
    cascade(x, 1.74, 3.69, 0.86, 2.19, 2.32, true);
    cascade(x, 2.7, 2.32, 0.99, 3.2, 0.42);
    const xx = side * 5.07;
    box(xx, 1.17, 1.17, 1.49, 1.54, 2.1, ochre);
    trim(xx, 1.96, 1.16, 1.52, 2.14);
    spout(xx, 2.04, 1.74, 1.08);
    cascade(xx, 2.2, 2.14, 1.02, 2.74, 0.42);
  }
  // Low-poly foam rings open up across the horizontal pool.
  const rings = [];
  for (const { x, z, w } of splash) {
    for (let j = 0; j < 3; j++) {
      const g = new T.RingGeometry(0.88, 1, 24, 1, j * 0.61, TAU * (j === 0 ? 0.92 : 0.72));
      g.rotateX(-Math.PI / 2);
      const obj = new T.Mesh(
        g,
        new T.MeshBasicMaterial({ color: j === 0 ? '#daf2cf' : '#8bd5b7', side: T.DoubleSide }),
      );
      obj.position.set(x, 0.418 + j * 0.003, z);
      scene.add(obj);
      rings.push({ obj, j, w });
    }
    for (let j = 0; j < 12; j++) {
      const xx = x + (r() - 0.5) * w * 1.22,
        zz = z + (r() - 0.52) * 0.36;
      shape(
        diamond,
        xx,
        0.45 + r() * 0.1,
        zz,
        0.14 + r() * 0.14,
        0.05 + r() * 0.13,
        0.15,
        '#c7ecce',
        'bright',
      );
    }
  }
  motions.push((t) =>
    rings.forEach(({ obj, j, w }) => {
      const phase = (t * (0.51 + surge.value * 0.17) + j / 3) % 1;
      obj.scale.set(w * (0.51 + 0.64 * phase), 1, 0.19 + 0.37 * phase);
    }),
  );
  const sprayParticles = [];
  splash.forEach(({ x, z, w }) => {
    for (let i = 0; i < 14; i++)
      sprayParticles.push({
        x: x + (r() - 0.5) * w,
        z: z + 0.12 * r(),
        vx: (r() - 0.5) * 0.29,
        vz: r() * 0.36,
        h: 0.1 + r() * 0.2,
        phase: r(),
      });
  });
  const spray = new T.InstancedMesh(diamond, materials.bright, sprayParticles.length);
  spray.frustumCulled = false;
  scene.add(spray);
  sprayParticles.forEach((p, i) => spray.setColorAt(i, new T.Color(i % 3 ? '#c5ead2' : '#92d8c2')));
  motions.push((t) => {
    sprayParticles.forEach((p, i) => {
      const u = (t * (1.6 + surge.value * 0.4) + p.phase) % 1;
      dummy.position.set(
        p.x + p.vx * u,
        0.432 + p.h * (1 + surge.value * 0.65) * 4 * u * (1 - u),
        p.z + p.vz * u,
      );
      const k = 0.048 * (1 - u * 0.62);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(k, k * 1.55, k);
      dummy.updateMatrix();
      spray.setMatrixAt(i, dummy.matrix);
    });
    spray.instanceMatrix.needsUpdate = true;
  });
  // Carved stone and bronze cressets. Two moving, shadow-mapped lights cross the staircase.
  function brazier(x, base, z, shadowed) {
    box(x, base + 0.09, z, 0.62, 0.18, 0.62, ochre);
    box(x, base + 0.39, z, 0.35, 0.56, 0.37, lime);
    box(x, base + 0.68, z, 0.46, 0.12, 0.46, rim);
    shape(cyl, x, base + 0.79, z, 0.63, 0.15, 0.63, '#524b40');
    shape(cyl, x, base + 0.9, z, 0.72, 0.105, 0.72, '#c68a4c');
    const flame = new T.Group();
    flame.position.set(x, base + 0.94, z);
    scene.add(flame);
    const frames = [];
    for (let frame = 0; frame < 5; frame++) {
      const { canvas, poly } = bitmap(24, 32),
        n = (frame % 3) - 1;
      poly(
        [
          [4, 29],
          [2, 23],
          [6, 13],
          [8, 19],
          [10 + n, 10],
          [9 + n, 2],
          [15, 9],
          [17, 17],
          [20, 12 + frame],
          [21, 22],
          [18, 28],
          [13, 31],
          [8, 31],
        ],
        '#d95831',
      );
      poly(
        [
          [5, 25],
          [8, 18],
          [9, 21],
          [12 + n, 10],
          [12 + n, 6],
          [17, 16],
          [17, 21],
          [20, 18],
          [18, 26],
          [14, 30],
          [9, 30],
        ],
        '#ff9d3f',
      );
      poly(
        [
          [8, 27],
          [10, 21],
          [12, 22],
          [14 + n, 13],
          [16, 21],
          [15, 27],
          [12, 30],
        ],
        '#ffe18c',
      );
      poly(
        [
          [10, 28],
          [12, 24],
          [13, 26],
          [14, 23],
          [14, 28],
          [12, 30],
        ],
        '#fff6c7',
      );
      frames.push(pixelTexture(canvas));
    }
    const fm = new T.SpriteMaterial({ map: frames[0], alphaTest: 0.5, depthWrite: false });
    const lick = new T.Sprite(fm);
    lick.center.set(0.5, 0);
    lick.scale.set(0.65, 0.93, 1);
    flame.add(lick);
    const phase = r() * TAU;
    if (shadowed) {
      const light = new T.SpotLight('#ff8a38', 42, 9, 1.33, 0.22, 1.6);
      light.castShadow = true;
      light.shadow.mapSize.set(256, 256);
      light.shadow.bias = -0.003;
      light.shadow.normalBias = 0.026;
      scene.add(light, light.target);
      light.target.position.set(x * 0.53, base + 0.45, z - 0.84);
      fires.push({ light, x, y: base + 1.15, z, phase });
    }
    motions.push((t) => {
      const f = Math.sin(14 * t + phase) * 0.1 + Math.sin(t * 23 - phase) * 0.055;
      flame.scale.set(1 - f, 1 + f * 1.9, 1 - f);
      flame.rotation.z = 0.16 * Math.sin(t * 9 + phase);
      fm.map = frames[Math.floor(t * 10 + phase) % frames.length];
    });
  }
  for (const s of [-1, 1]) {
    brazier(s * 1.47, 0.43, 3.84, true);
    brazier(s * 1.85, 3.77, 0.84, false);
    brazier(s * 0.95, sy + 0.18, sz + 1.1, false);
  }
  const greenSets = [
    ['#203c39', '#2d4e3e', '#426440', '#587a43', '#799443', '#a4b551', '#c0bd6a'],
    ['#183d40', '#225149', '#316353', '#46795b', '#628d61', '#88a86a', '#a9ba74'],
    ['#233d35', '#34573d', '#4b6b41', '#657f44', '#899745', '#a9af55', '#cec779'],
  ];
  function plant(type, variant, x, y, z, w, h, flip = false) {
    const key = type + variant;
    if (!foliageGroups.has(key)) {
      const tex = pixelTexture(
        foliage(type, 521 + variant * 789 + (type === 'palm' ? 88 : 0), greenSets[variant % 3]),
      );
      foliageGroups.set(key, {
        mat: new T.MeshLambertMaterial({
          map: tex,
          alphaTest: 0.48,
          side: T.DoubleSide,
          emissiveMap: tex,
          emissive: '#e7f5ce',
          emissiveIntensity: 0.49,
        }),
        items: [],
      });
    }
    foliageGroups.get(key).items.push({ x, y, z, w, h, flip: flip ? -1 : 1 });
  }
  // Palms frame the silhouette asymmetrically, with low bromeliads along the rim.
  for (const [type, n, x, y, z, w, h, flip] of [
    ['tree', 1, -5.1, 0.4, -2.9, 5.8, 5.9, 0],
    ['tree', 0, -6.1, 0.4, -1.3, 4.8, 4.8, 1],
    ['tree', 1, 5.3, 0.4, -2.3, 4.9, 5.2, 1],
    ['tree', 2, 3.1, 1.6, -3, 3.4, 3.9, 0],
    ['palm', 2, -6.05, 0.43, -0.16, 5.55, 6.3, 0],
    ['palm', 0, -4.6, 1.65, -2.8, 4.5, 5.8, 1],
    ['palm', 1, 5.56, 0.42, -2.57, 6.5, 7.4, 0],
    ['palm', 2, 6.28, 0.42, 0.43, 3.9, 4.9, 1],
    ['palm', 0, -6.66, 0.41, 2.45, 3.65, 3.65, 1],
    ['palm', 1, 3.86, 2.76, -2.1, 2.7, 3.1, 0],
  ])
    plant(type, n, x, y, z, w, h, flip);
  for (let j = 0; j < 133; j++) {
    const side = r() < 0.5 ? -1 : 1,
      x = side * (5.9 + r() * 1.18),
      z = -3.7 + r() * 7.7;
    const size = 0.76 + r() * 1.82;
    plant(
      j % 6 === 0 ? 'flower' : j % 3 === 0 ? 'fern' : 'agave',
      j % 3,
      x,
      0.4,
      z,
      size,
      size * r() * 0.15 + size,
      !!(j % 2),
    );
  }
  for (const [w, d, y] of [
    [10.65, 5.7, 1.56],
    [8.93, 4.89, 2.68],
    [7.15, 4.04, 3.76],
    [5.36, 3.23, 4.8],
  ]) {
    for (let j = 0; j < 15; j++) {
      const side = j % 2 ? 1 : -1,
        x = side * (w / 2 - 0.05 - r() * 0.37),
        z = cz + (r() - 0.5) * d;
      const size = 0.59 + r() * 1.08;
      plant(j % 5 === 0 ? 'flower' : 'fern', j % 3, x, y, z, size, size, j % 2 === 0);
    }
  }
  for (let j = 0; j < 24; j++) {
    const x = (j % 2 ? 1 : -1) * (2 + r() * 4.37),
      z = 3.15 + r() * 2.5,
      size = 0.16 + r() * 0.38;
    shape(
      cyl,
      x,
      0.415,
      z,
      size,
      0.023,
      size * 0.73,
      pick(['#77a062', '#65905c', '#9bad67']),
      'plain',
      r() * 6,
    );
    if (j % 5 === 0) {
      for (let k = 0; k < 5; k++)
        shape(
          diamond,
          x + 0.055 * Math.cos(k * 1.26),
          0.47,
          z + 0.055 * Math.sin(k * 1.26),
          0.088,
          0.124,
          0.088,
          '#f0aa82',
          'bright',
        );
      box(x, 0.52, z, 0.063, 0.047, 0.063, '#ffde83', 'bright');
    }
  }
  const billboardBatches = [];
  for (const { mat, items } of foliageGroups.values()) {
    const geometry = new T.PlaneGeometry(1, 1);
    geometry.translate(0, 0.5, 0);
    const mesh = new T.InstancedMesh(geometry, mat, items.length);
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    scene.add(mesh);
    billboardBatches.push({ mesh, items });
  }
  for (const { geo, mat, items } of groups.values()) {
    const mesh = new T.InstancedMesh(geo, mat, items.length);
    items.forEach(([m, c], i) => {
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, c);
    });
    mesh.castShadow = mesh.receiveShadow = mat !== materials.bright;
    mesh.computeBoundingSphere();
    scene.add(mesh);
  }
  // A scarlet macaw gives the carved roof comb a living sense of scale.
  const birdArt = bitmap(25, 26);
  birdArt.poly(
    [
      [15, 6],
      [17, 1],
      [21, 1],
      [23, 3],
      [23, 7],
      [19, 9],
      [17, 14],
      [11, 18],
      [5, 24],
      [7, 17],
      [10, 10],
    ],
    '#833f3c',
  );
  birdArt.poly(
    [
      [12, 8],
      [16, 5],
      [17, 2],
      [21, 2],
      [23, 5],
      [20, 8],
      [18, 13],
      [12, 15],
      [8, 20],
    ],
    '#df6946',
  );
  birdArt.poly(
    [
      [10, 11],
      [17, 9],
      [15, 13],
      [7, 20],
    ],
    '#e5ad50',
  );
  birdArt.poly(
    [
      [9, 14],
      [15, 12],
      [11, 17],
      [3, 25],
    ],
    '#478b94',
  );
  birdArt.rect(20, 4, 3, 3, '#f2d895');
  birdArt.rect(21, 4, 1, 1, '#313d3b');
  birdArt.poly(
    [
      [23, 4],
      [25, 5],
      [24, 8],
      [22, 7],
    ],
    '#4c4940',
  );
  birdArt.rect(14, 14, 1, 3, '#554638');
  birdArt.rect(16, 14, 1, 3, '#554638');
  const bird = new T.Sprite(new T.SpriteMaterial({ map: pixelTexture(birdArt.canvas), alphaTest: 0.5 }));
  bird.center.set(0.6, 0.35);
  bird.scale.set(0.73, 0.76, 1);
  bird.position.set(1.94, sy + 3.08, sz + 1.17);
  scene.add(bird);
  motions.push((t) => {
    bird.material.rotation = 0.065 * Math.sin(t * 2.4);
  });
  const rainCount = 180,
    rainPositions = new Float32Array(rainCount * 6),
    drops = [];
  for (let i = 0; i < rainCount; i++) drops.push([r() * 20 - 10, r() * 14, r() * 12 - 6]);
  const rainGeo = new T.BufferGeometry();
  rainGeo.setAttribute('position', new T.BufferAttribute(rainPositions, 3));
  const rain = new T.LineSegments(
    rainGeo,
    new T.LineBasicMaterial({ color: '#9bbcac', transparent: true, opacity: 0.55, depthWrite: false }),
  );
  rain.frustumCulled = false;
  scene.add(rain);
  const bugs = [];
  for (let i = 0; i < 34; i++) bugs.push([r() * 15 - 7.5, r() * 4 + 0.65, r() * 6 - 2, r() * TAU]);
  const motes = new T.InstancedMesh(diamond, new T.MeshBasicMaterial({ color: '#ffe394' }), bugs.length);
  motes.frustumCulled = false;
  scene.add(motes);
  const butterflies = [];
  for (let i = 0; i < 6; i++) {
    const g = new T.Group(),
      hue = ['#f19b53', '#7fd8db', '#ed9664'][i % 3];
    for (let side of [-1, 1]) {
      const wing = new T.Mesh(
        new T.PlaneGeometry(0.16, 0.13),
        new T.MeshBasicMaterial({ color: hue, side: T.DoubleSide }),
      );
      wing.geometry.translate(side * 0.08, 0, 0);
      g.add(wing);
    }
    butterflies.push(g);
    scene.add(g);
  }
  const hemi = new T.HemisphereLight('#ffedca', '#9cb4a4', 1.4);
  scene.add(hemi);
  const sun = new T.DirectionalLight('#ffe3aa', 2.0);
  sun.position.set(-9, 16, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 48 });
  sun.shadow.bias = -0.00065;
  sun.shadow.normalBias = 0.038;
  scene.add(sun, sun.target);
  const crystalLight = new T.PointLight('#59dadd', 5, 3.3, 1.5);
  crystalLight.position.set(0, sy + 1.13, sz + 0.72);
  scene.add(crystalLight);
  const backdrops = [0, 1, 2].map((i) => pixelTexture(landscape(i)));
  for (const tex of backdrops) {
    tex.repeat.set(0.89, 0.92);
    tex.offset.set(0.055, 0.04);
  }
  let mode = 1,
    lastAngle = NaN;
  function atmosphere(n) {
    mode = n;
    scene.background = backdrops[n];
    hemi.color.set(['#e4f4d6', '#fff0d5', '#94b4cf'][n]);
    hemi.groundColor.set(['#91ab99', '#9cae99', '#54718a'][n]);
    hemi.intensity = [1.42, 1.35, 0.78][n];
    sun.color.set(['#fff0c6', '#ffdda5', '#a4cddc'][n]);
    sun.intensity = [1.45, 1.84, 0.7][n];
    sun.position.set(n === 2 ? -8 : -10, n === 0 ? 11 : 16, n === 0 ? 12 : 8);
    crystalLight.intensity = n === 2 ? 11 : 5;
    billboardBatches.forEach(({ mesh }) => {
      mesh.material.emissiveIntensity = n === 2 ? 0.11 : 0.49;
    });
  }
  atmosphere(1);
  function update(t, angle, wet, elevation) {
    clock.value = t;
    surge.value = wet ? 1 : 0;
    const sky = backdrops[mode];
    sky.offset.set(0.054 + Math.sin(angle) * 0.048, 0.046 + Math.sin(elevation - 0.45) * 0.06);
    if (!Number.isFinite(lastAngle) || Math.abs(angle - lastAngle) > 1e-9) {
      for (const { mesh, items } of billboardBatches) {
        items.forEach(({ x, y, z, w, h, flip }, i) => {
          dummy.position.set(x, y, z);
          dummy.rotation.set(0, angle, 0);
          dummy.scale.set(w * flip, h, 1);
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        });
        mesh.instanceMatrix.needsUpdate = true;
      }
      lastAngle = angle;
    }
    motions.forEach((fn) => fn(t));
    for (const f of fires) {
      const fl = Math.sin(t * 12 + f.phase) * 0.12 + Math.sin(t * 21 - f.phase) * 0.07;
      f.light.position.set(f.x + 0.075 * Math.sin(t * 7 + f.phase), f.y + fl * 0.3, f.z + 0.2);
      f.light.intensity = (mode === 2 ? 26 : 8.5) * (1 + fl);
    }
    bugs.forEach(([x, y, z, p], i) => {
      const pulse = Math.sin(t * 1.8 + p);
      dummy.position.set(
        x + 0.38 * Math.sin(t * 0.66 + p),
        y + 0.2 * Math.sin(t * 1.2 + p),
        z + 0.35 * Math.cos(t * 0.7 + p),
      );
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(pulse > 0.12 ? 0.03 + 0.054 * pulse : 0);
      dummy.updateMatrix();
      motes.setMatrixAt(i, dummy.matrix);
    });
    motes.instanceMatrix.needsUpdate = true;
    butterflies.forEach((g, i) => {
      g.position.set(
        (i % 2 ? 1 : -1) * (3.9 + 0.9 * Math.sin(t * 0.68 + i)),
        1.8 + i * 0.35 + 0.36 * Math.sin(t * 1.03 + i),
        1.7 + Math.sin(t * 0.71 + i),
      );
      g.rotation.set(0.25, angle, 0.22 * Math.sin(t * 2 + i));
      g.children.forEach((w, j) => {
        w.rotation.y = (j ? 1 : -1) * Math.sin(t * 18 + i) * 1.2;
      });
    });
    rain.visible = wet;
    if (wet) {
      drops.forEach(([x, y, z], i) => {
        let h = (y + 140 - ((t * 9) % 14)) % 14,
          dx = x + 0.15 * h;
        rainPositions.set([dx, h, z, dx - 0.065, h - 0.34, z], i * 6);
      });
      rainGeo.attributes.position.needsUpdate = true;
    }
  }
  return { atmosphere, update };
}
