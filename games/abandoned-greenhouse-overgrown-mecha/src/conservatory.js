import {
  T,
  V,
  TAU,
  rand,
  group,
  m,
  G,
  tex,
  texture,
  mesh,
  box,
  rod,
  lathe,
  ring,
  branch,
  pebble,
  standard,
  bake,
  canvasMap,
} from './workshop.js';
import { plant, hang, tuft, foxglove, mushrooms, wisteriaTree } from './botany.js';

const verdigris = standard(0x74968b, 0.64, 0.53, tex.bronze, 0.008);
const edge = standard(0xac9d74, 0.55, 0.52, tex.bronze, 0.007);
const arch = (a, z, dr = 0) => [(5.35 + dr) * Math.cos(a), 3.59 + (3.47 + dr) * Math.sin(a), z];
const glassMats = [0xb1c6b2, 0xabcbc3, 0xa4c6c3, 0xeac797, 0x91a99b, 0xc9b6a6].map(
  (c, i) =>
    new T.MeshStandardMaterial({
      color: c,
      side: T.DoubleSide,
      transparent: true,
      opacity: i < 3 ? 0.1 : 0.21,
      roughness: 0.25,
      metalness: 0.11,
      depthWrite: false,
    }),
);
function glazing(parent) {
  const sets = glassMats.map(() => []);
  function poly(points, idx) {
    for (let i = 1; i < points.length - 1; i++)
      sets[idx].push(...points[0], ...points[i], ...points[i + 1]);
  }
  const z0 = -8,
    bays = 7,
    step = 2.65,
    n = 16;
  for (let b = 0; b < bays; b++) {
    for (let j = 0; j < n; j++) {
      const a = (j * Math.PI) / n,
        Z = z0 + b * step,
        A = arch(a, Z),
        B = arch(a + Math.PI / n, Z),
        C = arch(a + Math.PI / n, Z + step),
        D = arch(a, Z + step);
      const type = Math.floor(rand(0, 6)),
        broken = rand();
      if (broken < 0.18) continue;
      if (broken < 0.54) {
        const mix = (a, b, f) => a.map((v, i) => T.MathUtils.lerp(v, b[i], f));
        const q = mix(B, C, rand(0.16, 0.68)),
          r = mix(mix(A, B, 0.48), mix(D, C, 0.48), rand(0.15, 0.48));
        poly([A, B, q, r], type);
        poly([A, r, mix(A, D, rand(0.15, 0.78))], type);
        if (broken < 0.37) poly([D, mix(D, A, 0.21), mix(D, C, 0.43)], type);
      } else poly([A, B, C, D], type);
    }
    for (const x of [-5.35, 5.35]) {
      const z = z0 + b * step;
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
          const y = 0.83 + i * 0.9,
            zz = z + (j * step) / 3;
          if (rand() > 0.25)
            poly(
              [
                [x, y, zz],
                [x, y + 0.89, zz],
                [x, y + 0.89, zz + 0.87],
                [x, y, zz + 0.87],
              ],
              Math.floor(rand(0, 5)),
            );
        }
    }
  }
  for (const [i, pos] of sets.entries()) {
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    const g = mesh(parent, geo, glassMats[i]);
    g.castShadow = false;
  }
}
function ironwork(p) {
  for (let bay = 0; bay <= 7; bay++) {
    const z = -8 + bay * 2.65,
      isMajor = bay % 2 === 0;
    for (const dr of isMajor ? [0, -0.19] : [0]) {
      const path = [];
      for (let i = 0; i <= 36; i++) path.push(arch((i * Math.PI) / 36, z, dr));
      branch(
        p,
        dr ? edge : verdigris,
        path,
        dr ? 0.029 : isMajor ? 0.081 : 0.048,
        dr ? 0.029 : isMajor ? 0.081 : 0.048,
        58,
        8,
      );
    }
    if (isMajor)
      for (let j = 0; j < 38; j++)
        rod(
          p,
          edge,
          arch((j * Math.PI) / 38, z),
          arch(((j + 0.5) * Math.PI) / 38, z, -0.19),
          0.014,
        );
    for (const sign of [-1, 1]) {
      const x = 5.35 * sign;
      lathe(
        p,
        verdigris,
        [
          [0.18, 0],
          [0.18, 0.15],
          [0.14, 0.2],
          [0.12, 0.27],
          [0.1, 0.32],
          [0.083, 2.94],
          [0.12, 3.03],
          [0.12, 3.12],
          [0.18, 3.16],
          [0.2, 3.26],
          [0.16, 3.37],
          [0.12, 3.62],
        ],
        x,
        0,
        z,
        1,
        1,
        16,
      );
      box(p, m.iron, x, 0.16, z, 0.42, 0.32, 0.44);
      for (let k = 0; k < 2; k++) {
        const s = k ? 1 : -1;
        const path = [];
        for (let i = 0; i <= 24; i++) {
          const a = (i / 24) * 1.8 * Math.PI,
            r = 0.31 * (1 - i / 28);
          path.push([
            x - sign * 0.015,
            3.18 + (0.31 - Math.cos(a) * r),
            z + s * (0.36 + Math.sin(a) * r),
          ]);
        }
        branch(p, edge, path, 0.023, 0.015, 30, 6);
        branch(
          p,
          verdigris,
          [
            [x, 2.87, z],
            [x, 3.02, z + s * 0.23],
            [x, 3.35, z + s * 0.45],
            [x, 3.56, z + s * 0.9],
          ],
          0.047,
          0.025,
          14,
          8,
        );
      }
    }
  }
  for (let i = 0; i <= 16; i++) {
    const a = (Math.PI * i) / 16;
    rod(p, verdigris, arch(a, -8.03), arch(a, 10.62), i % 4 === 0 ? 0.041 : 0.024);
  }
  for (const sign of [-1, 1]) {
    const x = sign * 5.35;
    box(p, m.stone, x, 0.34, 1.28, 0.21, 0.68, 18.7);
    for (const y of [0.62, 0.81, 1.72, 2.63, 3.56])
      box(
        p,
        y < 1 ? m.stone : verdigris,
        x,
        y,
        1.27,
        y < 1 ? 0.32 : 0.1,
        y < 1 ? 0.083 : 0.054,
        18.72,
      );
    for (let i = 0; i < 21; i++)
      box(p, verdigris, x, 2.17, -8 + (i * 2.65) / 3, 0.054, 2.85, 0.037);
  }
  // A leaded rose window above three iron doors anchors the far end of the nave.
  const z = -7.98,
    cy = 4.46;
  for (let i = -10; i <= 10; i++) {
    const x = i * 0.515,
      top = 3.59 + 3.47 * Math.sqrt(1 - (x / 5.35) ** 2);
    for (let y = 0.25; y < top; y += 0.28) {
      if (Math.hypot(x, y - cy) > 1.81)
        box(p, verdigris, x, y, z, 0.041, Math.min(0.29, top - y + 0.1), 0.055);
    }
  }
  for (let j = 1; j < 8; j++) {
    const y = j * 0.87,
      width = y < 3.59 ? 5.35 : 5.35 * Math.sqrt(1 - ((y - 3.59) / 3.47) ** 2);
    for (let x = -width; x < width; x += 0.26)
      if (Math.hypot(x, y - cy) > 1.8) box(p, verdigris, x, y, z, 0.27, 0.043, 0.055);
  }
  for (const r of [0.25, 0.39, 1.44, 1.59, 1.77, 1.82])
    ring(p, r === 1.59 ? edge : verdigris, 0, cy, z + 0.03, r, r > 1.6 ? 0.049 : 0.028);
  const roseMat = [0x839c8b, 0xcba16b, 0xb68f87].map(
    (c) =>
      new T.MeshBasicMaterial({
        color: c,
        transparent: true,
        opacity: 0.38,
        side: T.DoubleSide,
        depthWrite: false,
      }),
  );
  for (let j = 0; j < 16; j++) {
    const a = (j / 16) * TAU,
      ray = (r, theta) => [r * Math.cos(theta), cy + r * Math.sin(theta), z + 0.04];
    const petal = [];
    for (let k = 0; k <= 30; k++) {
      const v = (k / 30) * TAU,
        r = 0.37 + (1 - Math.cos(v)) * 0.59,
        th = a + 0.145 * Math.sin(v);
      petal.push(ray(r, th));
    }
    branch(p, edge, petal, 0.022, 0.022, 32, 6);
    rod(p, verdigris, ray(1.53, a), ray(1.79, a), 0.032);
    const positions = [];
    for (let k = 1; k < petal.length - 1; k++)
      positions.push(...ray(0.94, a), ...petal[k], ...petal[k + 1]);
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    mesh(p, g, roseMat[j % 3]);
  }
  for (const x of [-3.65, 0, 3.65]) {
    const path = [];
    for (let j = 0; j <= 24; j++) {
      const a = (j / 24) * Math.PI;
      path.push([x + 0.69 * Math.cos(a), 1.62 + 0.83 * Math.sin(a), z + 0.08]);
    }
    branch(p, edge, path, 0.048, 0.048, 30, 8);
    for (const s of [-1, 1]) box(p, verdigris, x + s * 0.69, 0.85, z + 0.08, 0.082, 1.7, 0.084);
  }
  glazing(p);
}

function fountain(p) {
  const f = group(p, 3.35, 0, -0.15),
    stone = standard(0x99a293, 0.86, 0.11, tex.enamel, 0.046);
  lathe(
    f,
    stone,
    [
      [0.02, 0.02],
      [1.09, 0.02],
      [1.16, 0.11],
      [1.16, 0.22],
      [1.09, 0.24],
      [1.06, 0.37],
      [1.12, 0.41],
      [1.14, 0.47],
      [1.07, 0.51],
      [1.01, 0.45],
      [0.99, 0.29],
      [0.02, 0.28],
    ],
    0,
    0,
    0,
  );
  lathe(
    f,
    stone,
    [
      [0.38, 0.3],
      [0.42, 0.36],
      [0.36, 0.43],
      [0.24, 0.47],
      [0.18, 0.61],
      [0.22, 0.79],
      [0.16, 0.89],
      [0.37, 0.95],
      [0.5, 1.02],
      [0.55, 1.1],
      [0.53, 1.15],
      [0.46, 1.12],
      [0.11, 1.02],
    ],
    0,
    0,
    0,
  );
  lathe(
    f,
    stone,
    [
      [0.15, 1.05],
      [0.13, 1.18],
      [0.069, 1.24],
      [0.05, 1.4],
      [0.1, 1.43],
      [0.08, 1.46],
    ],
    0,
    0,
    0,
  );
  for (let k = 0; k < 16; k++) {
    const a = (k * TAU) / 16;
    pebble(
      f,
      m.moss,
      1.073 * Math.sin(a),
      0.464,
      1.07 * Math.cos(a),
      rand(0.04, 0.16),
      0.025,
      0.055,
    );
  }
  for (const a of [1.7, 3.2, 5.9]) {
    const q = [];
    for (let i = 0; i <= 7; i++) {
      const u = i / 7,
        r = 1.14 - 0.07 * u;
      q.push([
        r * Math.cos(a + 0.026 * Math.sin(i * 1.7)),
        0.48 - 0.4 * u,
        r * Math.sin(a + 0.026 * Math.sin(i * 1.7)),
      ]);
    }
    branch(f, m.dark, q, 0.012, 0.003, 9, 5);
  }
  const water = new T.MeshPhysicalMaterial({
    color: 0x779d8a,
    metalness: 0.36,
    roughness: 0.16,
    clearcoat: 1,
    clearcoatRoughness: 0.09,
  });
  const tm = { value: 0 };
  water.onBeforeCompile = (s) => {
    s.uniforms.waterTime = tm;
    s.fragmentShader = 'uniform float waterTime;\n' + s.fragmentShader;
    s.fragmentShader = s.fragmentShader.replace(
      '#include <normal_fragment_maps>',
      `#include <normal_fragment_maps>
    vec2 p=vViewPosition.xy;normal.xy+=.038*vec2(sin(length(p)*44.-waterTime*2.4)+sin(p.y*41.+p.x*8.),cos(p.x*35.-waterTime*2.));normal=normalize(normal);`,
    );
  };
  for (const [r, y] of [
    [1.008, 0.421],
    [0.483, 1.113],
  ]) {
    const o = mesh(f, new T.CircleGeometry(r, 64), water, 0, y, 0);
    o.rotation.x = -Math.PI / 2;
  }
  const stream = new T.MeshStandardMaterial({
    color: 0xc3d9ca,
    emissive: 0x243e32,
    transparent: true,
    opacity: 0.57,
    roughness: 0.18,
    metalness: 0.45,
  });
  for (let i = 0; i < 21; i++) {
    const a = rand(0, TAU),
      r = 0.52 + rand(-0.008, 0.008);
    const points = [];
    for (let j = 0; j < 6; j++) {
      const u = j / 5,
        rad = r + 0.18 * u;
      points.push([Math.cos(a) * rad, 1.115 - 0.68 * u * u, Math.sin(a) * rad]);
    }
    branch(f, stream, points, rand(0.006, 0.018), 0.007, 9, 6);
  }
  return (t) => {
    tm.value = t;
  };
}
export function conservatory(scene) {
  const p = group(scene);
  ironwork(p);
  const forest = texture('woodland.jpg', [2, 1]);
  forest.wrapS = T.MirroredRepeatWrapping;
  forest.wrapT = T.ClampToEdgeWrapping;
  const backdrop = new T.MeshBasicMaterial({
    map: forest,
    color: 0xffffff,
    side: T.BackSide,
    fog: false,
  });
  const outside = mesh(p, new T.CylinderGeometry(20, 20, 27, 80, 1, true), backdrop, 0, 0, 0);
  outside.rotation.y = 0.56;
  outside.castShadow = outside.receiveShadow = false;
  outside.userData.moving = true;
  const groundMap = tex.moss.clone();
  groundMap.repeat.set(11, 15);
  const understory = mesh(
    p,
    new T.PlaneGeometry(23, 30),
    standard(0x737f60, 1, 0, groundMap),
    0,
    -0.21,
    0,
  );
  understory.rotation.x = -Math.PI / 2;
  const floorTex = tex.brick.clone();
  floorTex.repeat.set(8, 14);
  const floor = mesh(
    p,
    new T.PlaneGeometry(13, 23),
    standard(0xc3b8a0, 0.81, 0.04, floorTex, 0.052),
    0,
    -0.011,
    0.7,
  );
  floor.rotation.x = -Math.PI / 2;
  for (const s of [-1, 1]) {
    for (let i = 0; i < 19; i++) {
      const z = -7.7 + i * 0.97,
        x = s * (2.47 + 0.17 * Math.sin(z * 0.8));
      const curb = box(p, m.stone, x, 0.1, z, 0.22, rand(0.12, 0.21), 0.9);
      curb.rotation.y = rand(-0.09, 0.09);
      pebble(p, m.soil, x + s * 1.65, 0.013, z, 1.72, rand(0.11, 0.21), 1.12);
    }
  }
  wisteriaTree(p);
  for (let i = 0; i < 480; i++) {
    const x = rand(-5.3, 5.3),
      z = rand(-7.8, 9.6);
    const bed = Math.abs(x) > 2.53 || (z < -1.0 && Math.abs(x) < 2.4);
    if (!bed && rand() > 0.08) continue;
    if (Math.hypot(x - 3.35, z + 0.15) < 1.18 || Math.hypot(x, z) < 1.48) continue;
    const size = bed ? rand(0.34, 1.14) : rand(0.08, 0.27);
    plant(p, x, bed ? 0.11 : 0.02, z, size, i % 3 ? 'fern' : 'hosta', Math.round(rand(5, 10)));
    if (i % 2 === 0) tuft(p, x + 0.13, 0.09, z + 0.15, size * 1.7);
    if (i % 6 === 0) foxglove(p, x - 0.13, 0.08, z, rand(0.58, 1.32));
    if (i % 13 === 0) mushrooms(p, x, 0.08, z, size);
  }
  for (const [x, z] of [
    [-2, 1.1],
    [1.15, 1.28],
    [-1.55, 2.75],
    [2.22, 2.4],
    [-2.6, -0.9],
  ]) {
    foxglove(p, x, 0.02, z, rand(0.58, 0.92));
    mushrooms(p, x + 0.12, 0.015, z + 0.18, 0.8);
  }
  for (let i = 0; i < 210; i++) {
    const a = rand(0.06, Math.PI - 0.06),
      z = -8 + Math.floor(rand(0, 8)) * 2.65 + rand(-0.22, 0.22),
      q = arch(a, z, -0.05);
    if ((Math.sin(a) > 0.78 && rand() > 0.29) || (z > 2 && Math.abs(q[0]) < 3.1)) continue;
    hang(p, 'ivy', ...q, rand(0.6, 2.72), rand(-2.8, 2.8));
  }
  const leafCard = new T.PlaneGeometry(1, 1, 3, 2);
  for (let i = 0; i < leafCard.attributes.position.count; i++) {
    const pos = leafCard.attributes.position,
      x = pos.getX(i);
    pos.setZ(i, 0.17 * (1 - 4 * x * x));
  }
  leafCard.computeVertexNormals();
  const copses = new T.MeshLambertMaterial({
    map: texture('bough.webp'),
    side: T.DoubleSide,
    alphaTest: 0.38,
    color: 0xc7d1b3,
  });
  for (let i = 0; i < 210; i++) {
    const side = i % 3,
      x = side < 2 ? (side ? 1 : -1) * rand(6.2, 13) : rand(-12, 12),
      z = side < 2 ? rand(-13, 12) : rand(-14, -8.7);
    const k = rand(1.3, 3.1),
      y = rand(-0.15, 1.45);
    const spray = mesh(p, leafCard, copses, x, y, z, k, k * 0.68, k * 0.67);
    spray.rotation.set(rand(-0.55, 0.35), rand(-2.6, 2.6), rand(-0.56, 0.54));
  }
  for (let i = 0; i < 33; i++) {
    const x = rand(-4.5, -1),
      z = rand(-3.4, -1.35),
      y = 5.1 + 0.27 * (x + 2) + rand(-0.32, 0.8);
    const k = rand(0.59, 1.29),
      spray = mesh(p, leafCard, copses, x, y, z, k, k * 0.62, k * 0.62);
    spray.rotation.set(rand(-0.7, 0.15), rand(-1.2, 1.2), rand(-0.8, 0.7));
    if (i % 3 === 0) hang(p, 'wisteria', x, y - 0.08, z, rand(0.52, 1.07), rand(-1.5, 1.5));
  }
  const updateWater = fountain(p);
  bake(p);
  return { updateWater, backdrop };
}
