import * as T from 'three';
import {
  world,
  glassWorld,
  statics,
  mat,
  V,
  tau,
  rand,
  solid,
  project,
  group,
  obj,
  cyl,
  box,
  ball,
  lathe,
  ring,
  rod,
  tube,
  canvasTexture,
} from './workshop.js';
import { glass, makeGlass } from './optics.js';
import { flame } from './apparatus.js';
import { astrolabe } from './astrolabe.js';
import { parchment } from './print.js';

function shadowMap() {
  return canvasTexture(128, 128, (g) => {
    const grad = g.createRadialGradient(64, 64, 1, 64, 64, 63);
    for (const [k, a] of [
      [0, 0.86],
      [0.4, 0.62],
      [0.78, 0.18],
      [1, 0],
    ])
      grad.addColorStop(k, 'rgba(13,11,9,' + a + ')');
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
  });
}
function contacts() {
  const m = new T.MeshBasicMaterial({ map: shadowMap(), transparent: true, depthWrite: false });
  for (const [x, z, w, d] of [
    [-2.16, 0.1, 2.35, 1.5],
    [0.5, 0.12, 1.48, 1.45],
    [2.5, -0.38, 1.68, 1.47],
    [-3.93, -0.3, 1.65, 1.22],
    [3.88, 0.84, 2.16, 1.3],
    [-0.53, 1.24, 0.85, 0.7],
    [2.97, -1.25, 1.4, 1.1],
    [-3.11, -0.14, 0.95, 0.84],
    [-0.34, -0.41, 0.96, 0.84],
  ]) {
    const o = obj(new T.PlaneGeometry(w, d), m, x + 0.06, 0.014, z + 0.04, world);
    o.rotation.x = -Math.PI / 2;
    o.renderOrder = -1;
  }
}
function light(x, y, z, color, intensity, range) {
  const l = new T.PointLight(color, intensity, range, 2);
  l.position.set(x, y, z);
  world.add(l);
  return l;
}
function architecture(wall) {
  world.background = new T.Color(0x1b1d1b);
  world.fog = new T.FogExp2(0x272725, 0.047);
  // The back wall is set several feet behind the bench; its cove continues around the camera.
  const wallM = new T.MeshBasicMaterial({
    map: wall,
    color: 0xbebfc2,
    side: T.DoubleSide,
    fog: false,
  });
  obj(new T.PlaneGeometry(17.2, 11.46), wallM, 0, 3.45, -4.34);
  for (const dir of [-1, 1]) {
    const o = obj(new T.PlaneGeometry(13, 10), mat.stone, dir * 8.57, 2, 1);
    o.rotation.y = (-dir * Math.PI) / 2;
  }
  box(0, -1.64, 0, 17, 0.3, 16, mat.stone);
  box(0, -0.42, -0.05, 11.8, 0.74, 4.5, mat.stone);
  for (let i = 0; i < 7; i++) {
    const z = -2.24 + (i + 0.5) * 0.63;
    box(0, -0.083 + 0.004 * Math.sin(i), z, 11.65, 0.16, 0.624, mat.oaks[i]);
  }
  // Front edge: old stone blocks, a pegged oak rail and two shallow instrument drawers.
  for (let j = 0; j < 8; j++) {
    const x = -5.1 + j * 1.46;
    box(x, -0.49, 2.202, 1.446, 0.53, 0.16, mat.stone);
  }
  box(0, -0.17, 2.211, 11.65, 0.13, 0.13, mat.oaks[2]);
  for (const x of [-3.68, -0.03, 3.62]) {
    box(x, -0.48, 2.312, 3.44, 0.44, 0.09, mat.oaks[4]);
    box(x, -0.49, 2.367, 3.24, 0.32, 0.035, mat.oaks[3]);
    for (const s of [-1, 1]) {
      const o = cyl(x + s * 0.22, -0.46, 2.407, 0.063, 0.063, 0.025, mat.brass);
      o.rotation.x = Math.PI / 2;
    }
    tube(
      [
        [x - 0.22, -0.46, 2.412],
        [x - 0.18, -0.56, 2.48],
        [x, -0.59, 2.5],
        [x + 0.18, -0.56, 2.48],
        [x + 0.22, -0.46, 2.412],
      ],
      0.026,
      mat.brass,
    );
  }
  for (let j = 0; j < 7; j++)
    for (const x of [-5.57, 5.57])
      cyl(x, 0.003, -1.93 + j * 0.63, 0.029, 0.029, 0.012, mat.aged, statics, 8);
  const key = new T.DirectionalLight(0xffd6a0, 1.65);
  key.position.set(-4.1, 7.2, 3.3);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -7, right: 7, bottom: -4, top: 5, near: 0.2, far: 19 });
  key.shadow.camera.updateProjectionMatrix();
  key.shadow.normalBias = 0.012;
  key.shadow.bias = -0.0002;
  key.shadow.radius = 2.8;
  world.add(key);
  const rim = new T.DirectionalLight(0x9ecff5, 1.22);
  rim.position.set(-4, 4, -3);
  world.add(rim);
  const fill = new T.HemisphereLight(0x91b2bf, 0x59432f, 0.38);
  world.add(fill);
  light(-2.16, 0.6, 0.35, 0x2d91ff, 1.65, 2.6);
  light(-2.16, 1.38, 0.42, 0x34ef92, 2.7, 3.4);
  light(0.5, 0.72, 0.4, 0x2daeff, 2.8, 3.6);
  light(2.5, 0.94, -0.21, 0xcf80ff, 1.9, 3.1);
  light(3.46, 1.82, -1.3, 0xff9f47, 7.7, 5.8);
  light(-3.6, 1.24, -1.6, 0xffb15c, 6.0, 5.1);
  contacts();
}
function candle(x, z, h, base = 0.015, p = statics, wide = 0.102) {
  lathe(
    x,
    base,
    z,
    [
      [0.001, 0],
      [wide * 2.44, 0],
      [wide * 2.5, 0.034],
      [wide * 1.75, 0.07],
      [wide, 0.1],
      [wide * 0.73, 0.15],
      [wide * 0.77, 0.19],
      [wide * 1.56, 0.22],
      [wide * 1.55, 0.25],
      [wide * 1.13, 0.265],
    ],
    mat.brass,
    p,
  );
  const by = base + 0.246;
  cyl(x, by + h / 2, z, wide * 0.96, wide, h, mat.wax, p, 30);
  ring(x, by + h - 0.008, z, wide * 0.79, wide * 0.16, mat.wax, p, 30);
  for (let i = 0; i < 8; i++) {
    const a = (i * tau) / 8 + rand() * 0.3,
      hh = h * (0.08 + rand() * 0.4);
    const xx = x + Math.cos(a) * wide * 0.93,
      zz = z + Math.sin(a) * wide * 0.93;
    ball(xx, by + h - hh * 0.5, zz, wide * 0.16, hh * 0.55, wide * 0.17, mat.wax, p);
  }
  cyl(x, by + h + 0.022, z, 0.01, 0.014, 0.064, mat.wick, p, 8);
  flame(x, by + h + 0.048, z, wide * 0.56, 0.2 + wide * 0.37);
}
function scales(x, z) {
  const g = group(x, 0, z);
  lathe(
    0,
    0,
    0,
    [
      [0.001, 0.01],
      [0.31, 0.01],
      [0.35, 0.05],
      [0.32, 0.09],
      [0.22, 0.11],
      [0.13, 0.14],
      [0.1, 0.21],
      [0.073, 0.24],
      [0.066, 1.23],
      [0.11, 1.29],
      [0.1, 1.37],
      [0.05, 1.4],
      [0.034, 1.85],
      [0.001, 1.9],
    ],
    mat.brass,
    g,
  );
  const beam = group(0, 1.49, 0, g);
  beam.rotation.z = 0.061;
  tube(
    [
      [-0.76, -0.025, 0],
      [-0.68, 0.088, 0],
      [-0.39, 0.042, 0],
      [0, 0, 0],
      [0.39, 0.042, 0],
      [0.68, 0.088, 0],
      [0.76, -0.025, 0],
    ],
    0.034,
    mat.gold,
    beam,
  );
  for (const side of [-1, 1]) {
    const xx = side * 0.73;
    const py = -0.67;
    lathe(
      xx,
      py,
      0,
      [
        [0.001, -0.083],
        [0.124, -0.073],
        [0.245, -0.03],
        [0.32, 0.032],
        [0.34, 0.061],
        [0.33, 0.078],
        [0.25, 0.013],
        [0.11, -0.045],
        [0.001, -0.05],
      ],
      mat.copper,
      beam,
      60,
    );
    ring(xx, py + 0.065, 0, 0.337, 0.014, mat.gold, beam);
    for (let j = 0; j < 3; j++) {
      const a = (tau * j) / 3 + 0.2,
        bot = V(xx + 0.31 * Math.cos(a), py + 0.06, 0.31 * Math.sin(a)),
        top = V(xx, -0.015, 0);
      rod(bot, top, 0.009, mat.bronze, beam);
      for (let k = 1; k < 11; k++) {
        const v = bot.clone().lerp(top, k / 11);
        const link = obj(new T.TorusGeometry(0.014, 0.004, 4, 8), mat.gold, v.x, v.y, v.z, beam);
        link.rotation.y = ((k % 2) * Math.PI) / 2;
      }
    }
    if (side > 0)
      for (let j = 0; j < 4; j++)
        cyl(
          xx + (j - 1.5) * 0.085,
          py - 0.012 + Math.abs(j - 1.5) * 0.016,
          0,
          0.036,
          0.049,
          0.068,
          mat.gold,
          beam,
          8,
        );
  }
  for (const yy of [0.21, 1.22, 1.33]) ring(0, yy, 0, 0.079, 0.015, mat.gold, g);
}
function mortar(x, z) {
  lathe(
    x,
    0.01,
    z,
    [
      [0.001, 0],
      [0.21, 0],
      [0.245, 0.035],
      [0.23, 0.068],
      [0.175, 0.089],
      [0.177, 0.14],
      [0.246, 0.17],
      [0.279, 0.227],
      [0.298, 0.34],
      [0.33, 0.388],
      [0.321, 0.428],
      [0.276, 0.423],
      [0.259, 0.377],
      [0.232, 0.294],
      [0.178, 0.203],
      [0.001, 0.16],
    ],
    mat.aged,
    statics,
    64,
  );
  for (const [y, r] of [
    [0.059, 0.23],
    [0.227, 0.28],
    [0.39, 0.323],
  ])
    ring(x, y, z, r, 0.012, mat.brass);
  const p = group(x + 0.14, 0.33, z + 0.024);
  p.rotation.z = -0.75;
  lathe(
    0,
    0,
    0,
    [
      [0.001, -0.23],
      [0.077, -0.21],
      [0.092, -0.14],
      [0.074, -0.095],
      [0.038, 0.0],
      [0.041, 0.22],
      [0.055, 0.3],
      [0.051, 0.342],
      [0.001, 0.36],
    ],
    mat.bronze,
    p,
  );
}
function hourglass(x, z) {
  const h = 1.3,
    r = 0.275,
    gy = 0.12;
  for (const yy of [0.07, h + 0.12]) {
    cyl(x, yy, z, r + 0.08, r + 0.068, 0.095, mat.bronze, statics, 12);
    ring(x, yy + 0.048, z, r + 0.05, 0.017, mat.gold);
  }
  for (let i = 0; i < 4; i++) {
    const a = (i * tau) / 4 + 0.61,
      xx = x + (r + 0.018) * Math.sin(a),
      zz = z + (r + 0.018) * Math.cos(a);
    rod([xx, 0.112, zz], [xx, h + 0.09, zz], 0.024, mat.gold);
    for (const yy of [0.14, h + 0.03]) ball(xx, yy, zz, 0.044, 0.052, 0.044, mat.brass);
  }
  const prof = [
    [0.168, 0],
    [0.21, 0.08],
    [0.229, 0.2],
    [0.203, 0.32],
    [0.131, 0.44],
    [0.046, 0.559],
    [0.026, 0.63],
    [0.032, 0.69],
    [0.105, 0.8],
    [0.186, 0.92],
    [0.229, 1.06],
    [0.222, 1.17],
    [0.177, 1.29],
  ];
  lathe(x, gy, z, prof, glass, glassWorld, 50);
  const sand = project(solid(0xd49b53, 0.12, 0.74));
  lathe(
    x,
    gy,
    z,
    [
      [0.001, 0.025],
      [0.156, 0.025],
      [0.195, 0.072],
      [0.211, 0.146],
      [0.157, 0.156],
      [0.001, 0.233],
    ],
    sand,
  );
  lathe(
    x,
    gy,
    z,
    [
      [0.007, 0.687],
      [0.098, 0.817],
      [0.183, 0.955],
      [0.164, 0.962],
      [0.001, 0.944],
    ],
    sand,
  );
  cyl(x, gy + 0.445, z, 0.007, 0.006, 0.49, sand, statics, 8);
  ring(x, gy + 0.64, z, 0.04, 0.013, mat.brass);
}
function book(x, y, z, w, h, d, ang, color) {
  const g = group(x, y, z);
  g.rotation.y = ang;
  box(0, h * 0.5, 0, w * 0.97, h * 0.76, d * 0.95, mat.paper, g);
  const cover = project(solid(color, 0.09, 0.56));
  box(0, h * 0.08, 0, w, h * 0.16, d, cover, g);
  box(0, h * 0.93, 0, w, h * 0.14, d, cover, g);
  box(-w * 0.48, h * 0.51, 0, w * 0.065, h, d, cover, g);
  for (const zz of [-0.37, -0.29, 0.29, 0.37])
    box(-w * 0.51, h * 0.51, zz * d, w * 0.024, h * 0.9, 0.025, mat.gold, g);
  for (let i = 0; i < 8; i++)
    box(0, h * (0.17 + i * 0.083), d * 0.478, w * 0.92, 0.0025, 0.008, mat.bronze, g);
  for (const a of [-1, 1])
    for (const b of [-1, 1])
      box(a * w * 0.44, h * 1.01, b * d * 0.41, w * 0.095, 0.008, d * 0.14, mat.brass, g);
  return g;
}
function skull(x, y, z) {
  const g = group(x, y, z);
  g.rotation.y = -0.97;
  g.rotation.z = -0.042;
  g.scale.setScalar(1.2);
  const bone = mat.bone,
    shade = project(solid(0x443b30, 0, 0.91));
  const fissure = project(solid(0x8a7e67, 0, 0.91));
  const geo = new T.SphereGeometry(1, 70, 50),
    a = geo.attributes.position,
    idx = geo.index.array,
    keep = [];
  for (let i = 0; i < idx.length; i += 3) {
    const p = V(0, 0, 0);
    for (let k = 0; k < 3; k++)
      p.add(V(a.getX(idx[i + k]), a.getY(idx[i + k]), a.getZ(idx[i + k])));
    p.multiplyScalar(1 / 3);
    const socket = (p.z - 0.39) ** 2 / 0.55 ** 2 + (p.y - 0.0) ** 2 / 0.54 ** 2;
    if (!(Math.abs(p.x) > 0.54 && socket < 1)) keep.push(idx[i], idx[i + 1], idx[i + 2]);
  }
  geo.setIndex(keep);
  for (let i = 0; i < a.count; i++) {
    const xx = a.getX(i),
      yy = a.getY(i),
      zz = a.getZ(i);
    a.setXYZ(i, xx * 0.278 * (1 - 0.12 * zz), 0.285 + yy * 0.253, 0.0 + zz * 0.301);
  }
  geo.computeVertexNormals();
  obj(geo, bone, 0, 0, 0, g);
  ball(0, 0.257, -0.026, 0.186, 0.153, 0.198, shade, g);
  for (const side of [-1, 1]) {
    const pts = [];
    for (let i = 0; i <= 50; i++) {
      const t = (i * tau) / 50,
        zz = 0.39 + 0.55 * Math.cos(t),
        yy = 0.54 * Math.sin(t),
        xx = Math.sqrt(Math.max(0.06, 1 - yy * yy - zz * zz));
      pts.push([side * xx * 0.278 * (1 - 0.12 * zz), 0.285 + yy * 0.253, zz * 0.301]);
    }
    tube(pts, 0.014, bone, g, 60, 8);
    tube(
      [
        [side * 0.235, 0.19, -0.07],
        [side * 0.234, 0.115, 0.025],
        [side * 0.176, 0.124, 0.238],
        [side * 0.106, 0.186, 0.364],
      ],
      0.023,
      bone,
      g,
    );
  }
  // Loft the curved upper bill and its fine, separate lower mandible.
  function bill(lower) {
    const z0 = 0.15,
      L = 0.69,
      verts = [],
      faces = [],
      sides = 25;
    for (let j = 0; j <= 26; j++) {
      const u = j / 26,
        profile = (1 - u) ** 0.7;
      for (let k = 0; k <= sides; k++) {
        const a = (k * tau) / sides,
          ww = 0.173 * profile,
          hh = (lower ? 0.047 : 0.108) * profile;
        let yy = (lower ? 0.153 : 0.211) + 0.048 * Math.sin(u * Math.PI) - 0.092 * u * u;
        verts.push(Math.cos(a) * ww, yy + Math.sin(a) * hh, z0 + u * L);
      }
    }
    for (let j = 0; j < 26; j++)
      for (let k = 0; k < sides; k++) {
        const i = j * (sides + 1) + k;
        faces.push(i, i + 1, i + sides + 2, i, i + sides + 2, i + sides + 1);
      }
    const b = new T.BufferGeometry();
    b.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
    b.setAttribute('uv', new T.Float32BufferAttribute(new Float32Array((verts.length / 3) * 2), 2));
    b.setIndex(faces);
    b.computeVertexNormals();
    obj(b, bone, 0, 0, 0, g);
  }
  bill(false);
  bill(true);
  for (const side of [-1, 1]) {
    const nostril = ball(side * 0.123, 0.256, 0.331, 0.025, 0.02, 0.079, shade, g);
    nostril.rotation.z = -side * 0.6;
  }
  // Cranial sutures, temporal foramina and the small bridge below each orbit.
  for (const side of [-1, 1]) {
    const pts = [];
    for (let i = 0; i < 26; i++) {
      const q = i / 25,
        zz = -0.81 + q * 0.85,
        yy = 0.15 + 0.48 * q + 0.058 * Math.sin(i * 2.74);
      const xx = side * Math.sqrt(Math.max(0.035, 1 - zz * zz - yy * yy));
      pts.push([xx * 0.279 * (1 - 0.12 * zz), 0.285 + yy * 0.254, zz * 0.303]);
    }
    tube(pts, 0.0027, fissure, g, 50, 4);
    for (const [zz, yy, rr] of [
      [-0.134, 0.193, 0.022],
      [-0.145, 0.221, 0.014],
      [-0.108, 0.17, 0.013],
    ]) {
      const z1 = zz / 0.301,
        y1 = (yy - 0.285) / 0.253,
        xx = 0.279 * Math.sqrt(Math.max(0.07, 1 - z1 * z1 - y1 * y1)) * (1 - 0.12 * z1);
      ball(side * xx, yy, zz, 0.007, rr * 0.84, rr, shade, g);
    }
    tube(
      [
        [side * 0.168, 0.149, 0.21],
        [side * 0.172, 0.112, 0.279],
        [side * 0.112, 0.129, 0.367],
        [side * 0.071, 0.138, 0.408],
      ],
      0.01,
      bone,
      g,
      24,
      6,
    );
  }
  ring(0, 0.488, -0.043, 0.205, 0.021, mat.gold, g);
  const crownMat = mat.brass;
  // Stamped triangular fleurons around a circlet, with cabochons and beaded finials.
  lathe(
    0,
    0.468,
    -0.043,
    [
      [0.197, 0],
      [0.209, 0.015],
      [0.204, 0.085],
      [0.201, 0.097],
    ],
    crownMat,
    g,
    50,
  );
  ring(0, 0.552, -0.043, 0.205, 0.013, mat.gold, g);
  for (let j = 0; j < 9; j++) {
    const a = (j * tau) / 9,
      xx = 0.196 * Math.sin(a),
      zz = -0.043 + 0.196 * Math.cos(a),
      h = j % 2 ? 0.112 : 0.166;
    const pr = obj(new T.ConeGeometry(0.06, h, 4), mat.gold, xx, 0.546 + h / 2, zz, g);
    pr.rotation.y = a + 0.78;
    ball(xx, 0.546 + h, zz, 0.018, 0.022, 0.018, mat.gold, g);
    ball(
      xx * 1.035,
      0.515,
      (zz + 0.043) * 1.035 - 0.043,
      0.021,
      0.025,
      0.02,
      j % 2 ? mat.bronze : mat.aged,
      g,
    );
  }
}
function herbs(x, z) {
  const g = group(x, 0.04, z);
  g.rotation.y = -0.39;
  const stem = project(solid(0x736e3e, 0.11, 0.79)),
    leaf = project(solid(0x7c8761, 0.09, 0.62)),
    seed = project(solid(0xc29177, 0.18, 0.53, { emissive: 0x523627, emissiveIntensity: 0.42 }));
  const geo = new T.SphereGeometry(1, 8, 5);
  for (let j = 0; j < 12; j++) {
    const w = (rand() - 0.5) * 0.66,
      len = 0.57 + rand() * 0.39,
      curveY = 0.044 + rand() * 0.14;
    const path = [
      [0, 0.045, 0],
      [w * 0.28, 0.059, len * 0.38],
      [w * 0.8, curveY, len * 0.74],
      [w, curveY + 0.052, len],
    ];
    tube(path, 0.01, stem, g, 18, 5);
    for (let k = 0; k < 7; k++) {
      const q = 0.36 + k * 0.089,
        sign = k % 2 ? 1 : -1,
        xx = w * q,
        zz = len * q;
      const b = obj(geo, k < 4 ? leaf : seed, xx + sign * 0.034, q * curveY + 0.057, zz, g);
      b.scale.set(0.025 + rand() * 0.012, 0.012, 0.067);
      b.rotation.y = sign * 0.75;
      b.rotation.x = -0.35;
    }
  }
  for (let a = 0; a < 3; a++) {
    const r = ring(0, 0.07, 0.11 + a * 0.024, 0.055, 0.009, mat.bronze, g);
    r.rotation.x = 0;
  }
}
function scroll(x, z, rot) {
  const g = group(x, 0.119, z);
  g.rotation.y = rot;
  const roll = cyl(0, 0, 0, 0.114, 0.117, 0.88, mat.paper, g);
  roll.rotation.z = Math.PI / 2;
  for (const end of [-1, 1]) {
    const pts = [];
    for (let j = 0; j < 100; j++) {
      const a = j * 0.18,
        r = 0.021 + (0.094 * j) / 99;
      pts.push([end * 0.443, r * Math.cos(a), r * Math.sin(a)]);
    }
    tube(pts, 0.004, mat.bronze, g, 102, 5);
  }
  for (const dx of [-0.035, 0.035]) {
    const r = ring(dx, 0, 0, 0.118, 0.01, mat.aged, g);
    r.rotation.set(0, Math.PI / 2, 0);
  }
}
function smallBottle(x, z, h, r, m) {
  lathe(
    x,
    0,
    z,
    [
      [0.001, 0.015],
      [r * 0.78, 0.015],
      [r, 0.081],
      [r, h * 0.46],
      [r * 0.82, h * 0.54],
      [r * 0.41, h * 0.62],
      [r * 0.34, h * 0.87],
      [r * 0.43, h * 0.89],
      [r * 0.43, h * 0.95],
    ],
    m,
    glassWorld,
    16,
  );
  cyl(x, h * 0.94, z, r * 0.34, r * 0.36, h * 0.13, mat.bronze, statics, 12);
  ring(x, h * 0.856, z, r * 0.35, 0.011, mat.brass);
}
export function alcove(wall) {
  architecture(wall);
  astrolabe(-4.86, -1.17);
  scales(-4.0, -0.28);
  hourglass(1.65, -1.25);
  mortar(-0.62, 1.14);
  parchment(-2.63, 0.032, 1.48, 2.04, 0.93, -0.13);
  scroll(-3.92, 1.41, 0.27);
  herbs(0.93, 1.27);
  floweringHerbs();
  scroll(2.08, 1.51, -0.29);
  book(3.74, 0.013, 0.55, 1.43, 0.185, 0.92, -0.2, 0x513420);
  book(3.75, 0.206, 0.58, 1.28, 0.168, 0.83, 0.065, 0x34463f);
  skull(3.73, 0.382, 0.59);
  candle(3.72, -1.36, 1.21);
  candle(4.11, -1.17, 0.79);
  candle(3.44, -1.12, 0.52);
  candle(-3.79, -1.43, 0.82);
  candle(-4.15, -1.38, 0.48);
  book(-2.67, 0.012, -1.44, 1.1, 0.16, 0.71, -0.13, 0x55412e);
  const amber = makeGlass(0xf5bb72, 0.017, 0.83),
    sea = makeGlass(0x7ee1d8, 0.02, 0.81);
  smallBottle(-1.54, -1.35, 0.76, 0.166, amber);
  smallBottle(-1.13, -1.43, 0.56, 0.128, sea);
  smallBottle(2.69, -1.48, 0.73, 0.16, amber);
}

function floweringHerbs() {
  const g = group(1.45, 0.055, 1.41);
  g.rotation.y = -0.7;
  const dark = project(solid(0x605832, 0, 0.85)),
    leaf = project(solid(0x838753, 0, 0.71)),
    bud = project(solid(0xc89455, 0.13, 0.6, { emissive: 0x654c12, emissiveIntensity: 0.42 })),
    purple = project(solid(0x9a6c85, 0.1, 0.67, { emissive: 0x563748, emissiveIntensity: 0.35 }));
  const petal = new T.SphereGeometry(1, 8, 5);
  for (let j = 0; j < 11; j++) {
    const a = j * 2.39996,
      dx = 0.32 * Math.cos(a),
      dz = 0.89 + rand() * 0.28,
      dy = 0.11 + rand() * 0.17;
    const path = curveHerb(dx, dy, dz);
    tube(path, 0.009, dark, g, 22, 5);
    for (let i = 1; i < 7; i++) {
      const u = 0.3 + i * 0.08,
        sg = i % 2 ? 1 : -1;
      const o = obj(petal, leaf, dx * u + sg * 0.034, dy * u + 0.018, dz * u, g);
      o.scale.set(0.024, 0.009, 0.078);
      o.rotation.set(-0.3, sg * 0.62, sg * 0.34);
    }
    for (let k = 0; k < 7; k++) {
      const offset = k * 2.4,
        s = 0.068 * Math.sqrt(k / 7);
      const tx = dx + s * Math.cos(offset),
        ty = dy + 0.06 + 0.03 * Math.sin(offset),
        tz = dz + s * Math.sin(offset);
      rod([dx * 0.91, dy * 0.9, dz * 0.9], [tx, ty, tz], 0.0045, dark, g, 0.003, 4);
      for (let q = 0; q < 3; q++) {
        const o = obj(
          petal,
          j % 3 ? bud : purple,
          tx + 0.015 * Math.cos(q * 2.09),
          ty + 0.015,
          tz + 0.014 * Math.sin(q * 2.09),
          g,
        );
        o.scale.set(0.015, 0.013, 0.019);
      }
    }
  }
  function curveHerb(dx, dy, dz) {
    return [
      [0, 0.03, 0],
      [dx * 0.27, 0.047, dz * 0.31],
      [dx * 0.73, dy * 0.64, dz * 0.72],
      [dx, dy, dz],
    ];
  }
}
