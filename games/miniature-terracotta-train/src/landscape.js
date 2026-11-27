import {
  T,
  tau,
  M,
  mat,
  group,
  mesh,
  box,
  beam,
  random,
  smooth,
  mix,
  photo,
  batch,
  sign,
} from './craft.js';
import { track, railPoint, length, Y, Z } from './route.js';
import { terrainFinish, rockScan, ballast, contactShadow } from './finishes.js';
import { Reflector } from 'three/addons/objects/Reflector.js';

const rnd = random(4160),
  range = (a, b) => a + (b - a) * rnd();
const riverX = (z) => 1.07 * Math.sin(z * 0.35) - z * 0.13;
function relief(x, z) {
  return (
    Math.sin(1.4 * x + z * 0.7) * 0.08 +
    Math.sin(z * 2.3 - x * 0.4) * 0.07 +
    Math.cos(x * 0.71 + z * 0.43) * 0.14 +
    Math.sin(x * 4.82 - z * 3.31) * 0.033
  );
}
export function ground(x, z) {
  const d = Math.abs(x - riverX(z));
  const bank = smooth(3.9, 11.7, d),
    rear = 1 - smooth(-3.0, 1.1, z);
  let y = mix(-0.55, 4.16, Math.max(rear, bank));
  y += relief(x, z) * (0.43 + bank * 0.4) + Math.max(0, -z - 7.1) * (0.62 + 0.31 * Math.cos(x * 0.53));
  // The high cap over the western return is a removable tunnel mountain.
  const bluff = (1 - smooth(-13.5, -12.4, x)) * Math.exp(-((z - 0.6) ** 2) / 31);
  y += bluff * (3.5 + 1.0 * Math.sin(x * 0.94) + 0.5 * Math.cos(z * 1.2));
  const centerPad = 1 - smooth(0.0, 0.88, Math.max(Math.abs(x - 2.9) - 6.2, Math.abs(z + 1.95) - 1.27));
  y = mix(y, 4.14, centerPad);
  if (x > 10 && x < 18 && z < 3.8 && z > -7.0) y = Math.min(y, 4.22);
  const apron = 1 - smooth(0, 1.21, Math.max(Math.abs(x - 2.16) - 6.51, Math.abs(z + 3.32) - 2.12));
  y = mix(y, 4.11 + 0.075 * relief(x, z), apron);
  return y;
}
function terrain(p) {
  const cols = 205,
    rows = 125,
    positions = [],
    colors = [],
    uv = [],
    idx = [],
    col = new T.Color(),
    slate = new T.Color(0x68767a),
    snow = new T.Color(0xe4edf4),
    blue = new T.Color(0xb1c6d2);
  for (let j = 0; j <= rows; j++)
    for (let i = 0; i <= cols; i++) {
      const x = -19 + (i * 38) / cols,
        z = -12 + (j * 22) / rows,
        y = ground(x, z);
      positions.push(x, y, z);
      uv.push(x / 9, z / 9);
      const slope =
        Math.hypot(
          ground(x + 0.12, z) - ground(x - 0.12, z),
          ground(x, z + 0.12) - ground(x, z - 0.12),
        ) / 0.24;
      const stone = smooth(
        0.65,
        1.34,
        slope + Math.sin(z * 3 + x * 0.8) * 0.29 + Math.sin(z * 1.2 - x * 0.9) * 0.24,
      );
      col
        .copy(snow)
        .lerp(blue, 0.13 + 0.15 * Math.sin(x * 0.7 + z * 0.3))
        .lerp(slate, stone * 0.9)
        .multiplyScalar(0.93 + 0.09 * rnd());
      colors.push(col.r, col.g, col.b);
      if (i < cols && j < rows) {
        const a = j * (cols + 1) + i,
          b = a + cols + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  const geo = new T.BufferGeometry();
  geo.setIndex(idx);
  for (const [name, arr, size] of [
    ['position', positions, 3],
    ['uv', uv, 2],
    ['color', colors, 3],
  ])
    geo.setAttribute(name, new T.Float32BufferAttribute(arr, size));
  geo.computeVertexNormals();
  mesh(p, geo, terrainFinish());
  const edges = [
    Array.from({ length: cols + 1 }, (_, i) => [-19 + (i * 38) / cols, 10]),
    Array.from({ length: cols + 1 }, (_, i) => [19 - (i * 38) / cols, -12]),
    Array.from({ length: rows + 1 }, (_, i) => [-19, -12 + (i * 22) / rows]),
    Array.from({ length: rows + 1 }, (_, i) => [19, 10 - (i * 22) / rows]),
  ];
  for (const e of edges) {
    const pts = [],
      uvs = [];
    for (let i = 1; i < e.length; i++) {
      const [x, z] = e[i - 1],
        [a, b] = e[i];
      for (const [xx, yy, zz] of [
        [x, ground(x, z), z],
        [a, ground(a, b), b],
        [x, -0.67, z],
        [a, ground(a, b), b],
        [a, -0.67, b],
        [x, -0.67, z],
      ]) {
        pts.push(xx, yy, zz);
        uvs.push((xx + zz) * 0.22, yy * 0.3);
      }
    }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
    g.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
    g.computeVertexNormals();
    mesh(p, g, mat(0x786954, 0.9, 0, { side: T.DoubleSide, map: M.stone.map }));
  }
}
function archShape(w, h, r, spring, depth, m, p) {
  const sh = new T.Shape(),
    u = w / 2;
  sh.moveTo(-u, -0.3);
  sh.lineTo(-u, h);
  sh.lineTo(u, h);
  sh.lineTo(u, -0.3);
  sh.lineTo(r, -0.3);
  sh.lineTo(r, spring);
  sh.absarc(0, spring, r, 0, Math.PI, false);
  sh.lineTo(-r, -0.3);
  sh.closePath();
  return mesh(p, new T.ExtrudeGeometry(sh, { depth, bevelEnabled: false, curveSegments: 28 }), m);
}
const ringM = [0xa8a191, 0x958a79, 0xafa797, 0xb6a99b, 0x999284].map((c) =>
  mat(c, 0.96, 0.02, { map: M.stone.map }),
);
function archRing(p, r, cy, z, t, n = 17) {
  for (let i = 0; i < n; i++) {
    const a = (i * Math.PI) / n + 0.006,
      b = ((i + 1) * Math.PI) / n - 0.006,
      outer = r + t + (i === Math.floor(n / 2) ? 0.055 : 0),
      sh = new T.Shape();
    sh.moveTo(Math.cos(a) * r, cy + Math.sin(a) * r);
    sh.absarc(0, cy, r, a, b, false);
    sh.lineTo(outer * Math.cos(b), cy + outer * Math.sin(b));
    sh.absarc(0, cy, outer, b, a, true);
    sh.closePath();
    mesh(
      p,
      new T.ExtrudeGeometry(sh, { depth: 0.073, bevelEnabled: false, curveSegments: 5 }),
      ringM[i % 5],
      0,
      0,
      z,
    );
  }
}
function viaduct(p) {
  const w = 3.4,
    n = 7,
    r = 1.37,
    cy = 1.84,
    h = 4.235,
    depth = 1.36;
  for (let i = 0; i < n; i++) {
    const g = group(p);
    g.position.set((i - 3) * w, 0, Z - depth / 2);
    archShape(w, h, r, cy, depth, M.stone, g);
    contactShadow((i - 3) * w + w / 2, Z, 0.89, 1.65, 0.68);
    for (const z of [-0.075, depth - 0.004]) {
      archRing(g, r, cy, z, 0.263);
      for (const side of [-1, 1])
        for (let k = 0; k < 5; k++)
          box(
            g,
            side * (r + 0.13),
            0.15 + k * 0.386,
            z + 0.035,
            0.259,
            0.365,
            0.079,
            ringM[(i + k) % 5],
          );
    }
    for (const side of [-1, 1]) {
      const z = side === 1 ? depth + 0.042 : -0.042;
      box(g, 0, 3.96, z, w, 0.092, 0.094, M.rock);
      for (let j = 0; j < 5; j++) {
        box(g, -w / 2 + ((j + 0.5) * w) / 5, 4.217, z, w / 5 - 0.014, 0.16, 0.18, ringM[(i + j) % 5]);
        box(g, -w / 2 + ((j + 0.5) * w) / 5, 4.303, z, w / 5 - 0.012, 0.037, 0.19, M.snow);
      }
    }
    if (i < 6) {
      for (const side of [-1, 1]) {
        const z = side > 0 ? depth + 0.05 : -0.05;
        box(g, w * 0.5, 2.16, z, 0.31, 3.63, 0.16, M.stone);
        box(g, w * 0.5, 3.96, z, 0.45, 0.14, 0.23, ringM[2]);
      }
    }
  }
}
function portal(p) {
  const g = group(p);
  g.position.set(-12.53, Y - 0.12, Z);
  g.rotation.y = Math.PI / 2;
  const r = 0.87,
    cy = 1.14;
  archShape(3.56, 2.48, r, cy, 0.58, M.stone, g);
  archRing(g, r, cy, 0.57, 0.3, 19);
  for (const k of [-1, 1])
    for (let j = 0; j < 4; j++)
      box(g, k * (r + 0.15), 0.14 + j * 0.288, 0.6, 0.3, 0.28, 0.11, ringM[j]);
  box(g, 0, 2.49, 0.29, 3.73, 0.15, 0.77, ringM[1]);
  box(g, 0, 2.58, 0.29, 3.77, 0.07, 0.79, M.snow);
  sign(g, 0, 2.26, 0.66, 0.7, 0.22, '1912', { bg: '#484238', ink: '#decda7' });
  const sh = new T.Shape();
  sh.moveTo(-r, 0);
  sh.lineTo(-r, cy);
  sh.absarc(0, cy, r, Math.PI, 0, true);
  sh.lineTo(r, 0);
  sh.closePath();
  const end = mesh(
    g,
    new T.ShapeGeometry(sh),
    new T.MeshBasicMaterial({ color: 0x10191e, side: T.DoubleSide }),
    0,
    0,
    -2.47,
  );
  end.castShadow = false;
  const arch = new T.Path();
  arch.moveTo(-r, 0);
  arch.lineTo(-r, cy);
  arch.absarc(0, cy, r, Math.PI, 0, true);
  arch.lineTo(r, 0);
  const points = arch.getPoints(36),
    verts = [];
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1],
      b = points[i];
    verts.push(
      a.x,
      a.y,
      0.56,
      b.x,
      b.y,
      0.56,
      a.x,
      a.y,
      -2.12,
      b.x,
      b.y,
      0.56,
      b.x,
      b.y,
      -2.12,
      a.x,
      a.y,
      -2.12,
    );
  }
  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  mesh(g, geo, mat(0x363431, 0.97, 0, { side: T.DoubleSide }));
}
function rails(p) {
  const vertices = [],
    coords = [];
  for (let i = 0; i < 340; i++) {
    let d = (length * i) / 340;
    if (d >= 0 && d < 24) continue;
    for (const side of [-1, 1]) {
      const wall = [];
      for (const j of [i, i + 1]) {
        const a = railPoint((j / 340) * length, side * 0.61),
          b = railPoint((j / 340) * length, side * 0.94);
        wall.push([a.x, Y - 0.17, a.z], [b.x, Math.min(Y - 0.25, ground(b.x, b.z) - 0.08), b.z]);
      }
      for (const j of [0, 1, 2, 1, 3, 2]) {
        vertices.push(...wall[j]);
        coords.push(wall[j][0] * 0.55 + wall[j][2] * 0.52, wall[j][1] * 0.6);
      }
    }
  }
  const base = new T.BufferGeometry();
  base.setAttribute('position', new T.Float32BufferAttribute(vertices, 3));
  base.setAttribute('uv', new T.Float32BufferAttribute(coords, 2));
  base.computeVertexNormals();
  mesh(p, base, mat(0xb9b5ad, 0.96, 0, { map: rockScan, side: T.DoubleSide }));
  const ties = group(p),
    n = Math.floor(length / 0.239);
  for (let i = 0; i < n; i++) {
    const v = track((i * length) / n);
    const o = box(ties, v.x, Y - 0.098, v.z, 0.119, 0.075, 1.06, M.wood);
    o.rotation.y = v.angle;
    for (const side of [-1, 1]) {
      const a = railPoint((i * length) / n, side * 0.399);
      const plate = box(ties, a.x, Y - 0.055, a.z, 0.106, 0.022, 0.182, M.iron);
      plate.rotation.y = v.angle;
      for (const lip of [-0.071, 0.071]) {
        const spike = box(
          ties,
          a.x + lip * Math.sin(v.angle),
          Y - 0.037,
          a.z + lip * Math.cos(v.angle),
          0.053,
          0.022,
          0.028,
          M.oldGold,
        );
        spike.rotation.y = v.angle;
      }
    }
  }
  for (const [off, w, y, h, m] of [
    [0, 1.25, -0.178, 0.094, ballast],
    ...[-0.4, 0.4].flatMap((k) => [
      [k, 0.088, -0.051, 0.02, M.iron],
      [k, 0.033, -0.031, 0.059, M.iron],
      [k, 0.055, -0.006, 0.026, M.steel],
    ]),
  ]) {
    const pts = [],
      uv = [];
    const N = 420;
    for (let i = 0; i < N; i++)
      for (const [a, b] of [
        [
          [-1, 1],
          [1, 1],
        ],
        [
          [1, 1],
          [1, -1],
        ],
        [
          [-1, -1],
          [-1, 1],
        ],
      ]) {
        const corners = [
          [i, ...a],
          [i + 1, ...a],
          [i, ...b],
          [i + 1, ...a],
          [i + 1, ...b],
          [i, ...b],
        ];
        for (const [j, sgn, up] of corners) {
          const q = railPoint((j / N) * length, off + (sgn * w) / 2);
          pts.push(q.x, Y + y + (up * h) / 2, q.z);
          uv.push((j / N) * length, sgn * w * 0.5 + up * h * 0.5);
        }
      }
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
    geo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    geo.computeVertexNormals();
    m.side = T.DoubleSide;
    mesh(p, geo, m);
  }
}
function trackClearance(x, z) {
  return Math.abs(Math.hypot(Math.max(0, Math.abs(x) - 12), z + 1.5) - 4.65);
}
function nature(p) {
  const materials = [0, 1].map((i) =>
    mat(0xffffff, 0.9, 0, { map: photo('spruce-' + i + '.webp'), alphaTest: 0.37, side: T.DoubleSide }),
  );
  const locations = [];
  for (let i = 0; i < 400; i++) {
    const x = range(-18.65, 18.65),
      z = range(-11.7, 9.6);
    if (x > 5.45 && x < 17.15 && z < 1.75 && z > -6.7) continue;
    if (
      (Math.abs(z - Z) < 1.28 && x > -13 && x < 12.6) ||
      (Math.abs(z + 6.15) < 1.25 && Math.abs(x) < 12.4)
    )
      continue;
    if (Math.abs(x) > 11.7 && Math.abs(Math.hypot(Math.abs(x) - 12, z + 1.5) - 4.65) < 1.15) continue;
    if (z > -0.8 && Math.abs(x) < 9.0) continue;
    if (x > -8 && x < 12.0 && z > -5.45 && z < 1.25) continue;
    if (z > 4.8 && x > 8 && x < 17) continue;
    if (locations.some(([a, b]) => Math.hypot(x - a, z - b) < 0.84)) continue;
    if (ground(x, z) < 0.1) continue;
    const h = range(1.15, 3.55) * (z < -8 ? 1.13 : 1),
      iMat = rnd() < 0.5 ? 0 : 1,
      g = group(p);
    g.position.set(x, ground(x, z) - 0.075, z);
    g.rotation.y = rnd() * tau;
    for (let n = 0; n < 3; n++) {
      const o = mesh(
        g,
        new T.PlaneGeometry(h * (iMat ? 0.585 : 0.475), h),
        materials[iMat],
        0,
        h / 2,
        0,
      );
      o.rotation.y = (n * Math.PI) / 3;
    }
    contactShadow(x, z, h * 0.29, h * 0.21, 0.77);
    locations.push([x, z]);
  }
  for (const [x, z, h] of [
    [-7.9, 8.65, 2.7],
    [-8.45, 8.05, 1.65],
    [7.38, 8.86, 1.96],
    [8.02, 8.35, 2.54],
  ]) {
    const y = ground(x, z);
    for (let k = 0; k < 3; k++)
      mesh(p, new T.PlaneGeometry(h * 0.54, h), materials[1], x, y + h * 0.5 - 0.05, z).rotation.y =
        0.38 + (k * Math.PI) / 3;
    contactShadow(x, z, h * 0.31, h * 0.21, 0.7);
  }
  for (let i = 0; i < 235; i++) {
    const z = range(-10, 9.8),
      x = range(-18.8, 18.8),
      y = ground(x, z);
    if (
      y < 0.3 ||
      (Math.abs(z - Z) < 1.5 && x > -13) ||
      Math.abs(z + 6.15) < 1.3 ||
      (x > -7 && x < 13 && z > -5.2 && z < 1.8)
    )
      continue;
    const grass = group(p);
    grass.position.set(x, y - 0.025, z);
    for (let k = 0; k < 4; k++) {
      const dx = range(-0.17, 0.17),
        dz = range(-0.13, 0.13),
        h = range(0.11, 0.4);
      beam(grass, [0, 0, 0], [dx, h, dz], 0.009, M.bark, 4);
      beam(
        grass,
        [dx * 0.49, h * 0.49, dz * 0.49],
        [dx + 0.061, h * 0.82, dz + 0.029],
        0.006,
        M.bark,
        4,
      );
    }
  }
  const stones = [0xb7b5aa, 0xc2bdb1, 0xa5aaa9, 0xa39d91].map((c) =>
      mat(c, 0.96, 0.02, { map: rockScan, bumpMap: rockScan, bumpScale: 0.075 }),
    ),
    rocks = [];
  for (let q = 0; q < 7; q++) {
    const geometry = new T.IcosahedronGeometry(1, 2),
      pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i),
        y = pos.getY(i),
        z = pos.getZ(i),
        s = 0.94 + 0.13 * Math.sin(x * 4.8 + z * 2.4 + q) * Math.cos(y * 4 + q);
      pos.setXYZ(i, x * s, Math.sign(y) * Math.pow(Math.abs(y), 0.78) * s, z * s);
    }
    geometry.computeVertexNormals();
    rocks.push(geometry);
  }
  for (let i = 0; i < 540; i++) {
    const x = range(-18.8, 18.8),
      z = range(-11.8, 9.8),
      y = ground(x, z),
      d = Math.abs(x - riverX(z));
    if ((y > 4.05 && Math.abs(z - Z) < 1.15) || (x > -8 && x < 12 && z > -4.2 && z < 0.75)) continue;
    if (d < 3.3 && rnd() > 0.15) continue;
    if (
      trackClearance(x, z) < 1.01 ||
      (x > 10.65 && x < 13.32 && z > 1.8) ||
      (x > 5.45 && x < 17.15 && z < 1.75 && z > -6.7)
    )
      continue;
    const s = range(0.046, 0.48) * (d < 9 && d > 4 ? 1.7 : 0.69),
      height = s * range(0.59, 1.1),
      width = s * range(0.94, 1.73);
    const geometry = rocks[i % 7],
      seat = Math.min(
        y,
        ground(x - width * 0.38, z),
        ground(x + width * 0.38, z),
        ground(x, z + s * 0.4),
      ),
      o = mesh(p, geometry, stones[i % 4], x, seat - height * 0.23, z);
    contactShadow(x, z, width * 1.42, s * 1.46, 0.81);
    o.scale.set(width, height, s);
    o.rotation.y = rnd() * 6;
    const cap = mesh(p, geometry, M.snow, x - 0.04 * s, seat + height * 0.24, z - 0.025 * s);
    cap.rotation.copy(o.rotation);
    cap.scale.set(width * 0.84, height * 0.55, s * 0.86);
  }
}
function ice(scene) {
  const river = new Reflector(new T.PlaneGeometry(38, 22), {
    color: 0x778f94,
    textureWidth: 832,
    textureHeight: 512,
    clipBias: 0.003,
    multisample: 0,
  });
  river.position.set(0, 0.028, -1);
  river.rotation.x = -Math.PI / 2;
  scene.add(river);
  river.material.fragmentShader = river.material.fragmentShader.replace(
    'gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );',
    'gl_FragColor = vec4(mix(vec3(.016,.048,.066), blendOverlay(base.rgb, color), .52),1.0);',
  );
  // Polished resin is visible in section where the river meets the front of the layout.
  const section = [],
    tones = [];
  for (let i = 0; i < 320; i++) {
    const x = -19 + (38 * i) / 320,
      next = x + 38 / 320;
    const bottom = Math.min(0.028, ground(x, 10)),
      nextBottom = Math.min(0.028, ground(next, 10));
    if (bottom === 0.028 && nextBottom === 0.028) continue;
    for (const [xx, y] of [
      [x, bottom],
      [next, nextBottom],
      [x, 0.028],
      [x, 0.028],
      [next, nextBottom],
      [next, 0.028],
    ]) {
      section.push(xx, y, 10.001);
      const shade = T.MathUtils.smoothstep(y, -0.5, 0.028);
      tones.push(0.043 + 0.052 * shade, 0.098 + 0.168 * shade, 0.106 + 0.19 * shade);
    }
  }
  const edge = new T.BufferGeometry();
  edge.setAttribute('position', new T.Float32BufferAttribute(section, 3));
  edge.setAttribute('color', new T.Float32BufferAttribute(tones, 3));
  edge.computeVertexNormals();
  mesh(scene, edge, mat(0xffffff, 0.28, 0.14, { vertexColors: true }));
  const cracks = [],
    glints = [];
  function crack(x, z, l, a, depth) {
    for (let j = 0; j < 6; j++) {
      a += range(-0.42, 0.42);
      const nx = x + (Math.cos(a) * l) / 6,
        nz = z + (Math.sin(a) * l) / 6;
      cracks.push(x, 0.038, z, nx, 0.038, nz);
      if (j === 3 && depth) crack(nx, nz, l * 0.43, a + range(0.55, 1.1), depth - 1);
      x = nx;
      z = nz;
    }
  }
  for (let i = 0; i < 102; i++) {
    const z = range(-4, 9.9);
    crack(riverX(z) + range(-5, 5), z, range(0.4, 1.9), rnd() * tau, 1);
  }
  for (let i = 0; i < 660; i++) {
    const z = range(-2.7, 9.95),
      x = riverX(z) + range(-6, 6);
    glints.push(x, 0.035, z, x + range(0.018, 0.24), 0.035, z + range(-0.01, 0.01));
  }
  for (const [pts, color, opacity] of [
    [cracks, 0xa4c4d0, 0.1],
    [glints, 0xcddedc, 0.14],
  ]) {
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
    scene.add(
      new T.LineSegments(
        geo,
        new T.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
      ),
    );
  }
  // Grow frost flowers at the actual waterline, including the irregular banks under the bridge.
  const tips = [],
    phases = [],
    facets = new T.ConeGeometry(1, 1, 5),
    rime = mat(0xc9ebf2, 0.24, 0.29, { flatShading: true }),
    clusters = group(scene);
  const scatter = random(991);
  for (let i = 0; i < 146; i++) {
    const z = 0.95 + scatter() * 8.94,
      side = i % 2 ? -1 : 1,
      center = riverX(z);
    if (ground(center, z) > 0.028) continue;
    let lo = 0,
      hi = 10;
    for (let step = 0; step < 11; step++) {
      const mid = (lo + hi) * 0.5;
      if (ground(center + side * mid, z) > 0.028) hi = mid;
      else lo = mid;
    }
    const x = center + side * (lo - 0.02 - scatter() ** 2 * 0.55);
    for (let j = 0; j < 5; j++) {
      const xx = x + (scatter() - 0.5) * 0.13,
        zz = z + (scatter() - 0.5) * 0.13;
      const h = 0.038 + 0.104 * scatter(),
        w = 0.01 + 0.025 * scatter();
      const shard = mesh(clusters, facets, rime, xx, 0.032 + h * 0.43, zz);
      shard.scale.set(w, h, w * 0.73);
      shard.rotation.set((scatter() - 0.5) * 0.8, scatter() * tau, (scatter() - 0.5) * 0.9);
      shard.castShadow = false;
      if (j === 0) {
        tips.push(xx, 0.034 + h * 0.88, zz);
        phases.push(scatter() * tau);
      }
    }
  }
  batch(clusters);
  const grains = new T.BufferGeometry();
  grains.setAttribute('position', new T.Float32BufferAttribute(tips, 3));
  grains.setAttribute('phase', new T.Float32BufferAttribute(phases, 1));
  const sparkle = new T.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader: `attribute float phase; uniform float time; varying float flash;
      void main(){vec4 mv=modelViewMatrix*vec4(position,1.);
        flash=pow(max(0.,cos(phase*3.+time*(1.+.12*phase)+.4*mv.x)),16.);
        gl_Position=projectionMatrix*mv;gl_PointSize=clamp(50./max(1.,-mv.z),1.6,6.)*(.7+.8*flash);}`,
    fragmentShader: `varying float flash;
      void main(){vec2 q=abs(2.*gl_PointCoord-1.);
        float star=exp(-3.3*length(q))*exp(-7.*min(q.x,q.y));
        gl_FragColor=vec4(1.65,2.25,2.6,star*flash);}`,
  });
  scene.add(new T.Points(grains, sparkle));
  return (time) => {
    sparkle.uniforms.time.value = time;
  };
}
export function landscape(scene) {
  const p = group(scene);
  terrain(p);
  viaduct(p);
  portal(p);
  rails(p);
  nature(p);
  const frost = ice(scene);
  box(p, 0, -0.83, -1, 38.28, 0.38, 22.27, M.wood);
  box(p, 0, -1.04, -1, 38.52, 0.11, 22.45, M.oldGold);
  box(p, 0, -1.22, -1, 38.68, 0.32, 22.6, M.oak);
  batch(p);
  const pano = photo('alpine-panorama.jpg');
  pano.wrapS = T.MirroredRepeatWrapping;
  pano.repeat.x = 4;
  const back = mesh(
    scene,
    new T.CylinderGeometry(82, 82, 53, 100, 1, true),
    new T.MeshBasicMaterial({ map: pano, side: T.BackSide, fog: false, color: 0xddd9e4 }),
    0,
    12,
    0,
  );
  // Extend the top row of the cyclorama overhead for low cab and orbit angles.
  const canopy = new T.ConeGeometry(82, 56, 100, 1, true);
  const uv = canopy.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, 0.999);
  const overhead = mesh(back, canopy, back.material, 0, 54.5, 0);
  overhead.castShadow = overhead.receiveShadow = false;
  back.rotation.y = 1.1;
  back.castShadow = back.receiveShadow = false;
  return { back, frost };
}
