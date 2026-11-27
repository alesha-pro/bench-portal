import {
  T,
  TAU,
  V,
  rand,
  m,
  G,
  mesh,
  pebble,
  group,
  texture,
  standard,
  rod,
  lathe,
  branch,
} from './workshop.js';

const breeze = { value: 0 };
export function windAt(t) {
  breeze.value = t;
}
const leaves = {},
  blades = {};
function leafSurface(pending, fold) {
  const geo = new T.PlaneGeometry(1, 1, 4, 10),
    pos = geo.attributes.position,
    uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      t = pending ? 1 - uv.getY(i) : uv.getY(i);
    const y = pending ? -t : t * (1 - 0.29 * t);
    const z = pending ? 0.07 * Math.sin(t * 5) + 0.07 * t : 0.62 * t * t;
    pos.setXYZ(i, x, y, z + Math.abs(x) * fold * Math.sin(t * Math.PI));
  }
  geo.computeVertexNormals();
  return geo;
}
for (const key of ['fern', 'hosta', 'ivy', 'wisteria']) {
  const mat = new T.MeshLambertMaterial({
    map: texture(key + '.webp'),
    side: T.DoubleSide,
    alphaTest: 0.4,
    color: key === 'fern' ? 0xc3d59f : 0xffffff,
    emissive: 0x171b0e,
    emissiveIntensity: 0.45,
  });
  // World-space motion is identical across the instanced, batched and single-plant paths.
  mat.onBeforeCompile = (s) => {
    s.uniforms.windTime = breeze;
    s.vertexShader = 'uniform float windTime;\n' + s.vertexShader;
    s.vertexShader = s.vertexShader.replace(
      '#include <project_vertex>',
      `#include <project_vertex>
      vec4 wp=vec4(transformed,1.);
      #ifdef USE_INSTANCING
        wp=instanceMatrix*wp;
      #endif
      wp=modelMatrix*wp;
      float sway=sin(windTime*1.13+wp.x*.9+wp.z*.63)*.014+sin(windTime*.81-wp.z*1.31)*.008;
      mvPosition.xyz+=(viewMatrix*vec4(sway,0.,sway*.29,0.)).xyz*clamp(wp.y+.15,0.,2.4);
      gl_Position=projectionMatrix*mvPosition;`,
    );
  };
  leaves[key] = mat;
  blades[key] = leafSurface(key === 'ivy' || key === 'wisteria', key === 'hosta' ? 0.31 : 0.16);
}
export function plant(p, x, y, z, size, kind = 'fern', count = 8) {
  const offset = rand(0, TAU);
  for (let i = 0; i < count; i++) {
    const h = size * rand(0.58, 1.15),
      ang = offset + i * 2.4;
    const o = mesh(
      p,
      blades[kind],
      leaves[kind],
      x,
      y,
      z,
      h * (kind === 'fern' ? 0.42 : 0.5),
      h,
      h,
    );
    o.rotation.order = 'YXZ';
    o.rotation.set(rand(0.02, 0.65), ang, rand(-0.17, 0.17), 'YXZ');
  }
}
export function hang(p, kind, x, y, z, h, ang = 0, w = 1) {
  const leaf = mesh(
    p,
    blades[kind],
    leaves[kind],
    x,
    y,
    z,
    h * (kind === 'ivy' ? 0.47 : 0.3) * w,
    h,
    h * 0.65,
  );
  leaf.rotation.set(rand(-0.23, 0.23), ang, rand(-0.25, 0.25), 'YXZ');
  return leaf;
}
const tuftGeo = (() => {
  const pos = [],
    cols = [],
    uv = [];
  for (let i = 0; i < 64; i++) {
    const a = rand(0, TAU),
      r = rand(0, 0.27),
      x = Math.cos(a) * r,
      z = Math.sin(a) * r;
    const w = rand(0.006, 0.018),
      h = rand(0.14, 0.53),
      c = Math.cos(a),
      s = Math.sin(a);
    const pts = [
      [x - w * s, 0, z + w * c],
      [x + w * s, 0, z - w * c],
      [x + h * 0.28 * c, h * 0.66, z + h * 0.28 * s],
      [x + h * 0.65 * c, h, z + h * 0.65 * s],
    ];
    for (const j of [0, 1, 2, 0, 2, 3]) {
      pos.push(...pts[j]);
      uv.push(j % 2, j / 3);
      const v = j < 2 ? 0.23 : j === 2 ? 0.68 : 1;
      cols.push(v * 0.17, v * 0.29, v * 0.06);
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new T.Float32BufferAttribute(cols, 3));
  g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
})();
const grass = new T.MeshLambertMaterial({ vertexColors: true, side: T.DoubleSide });
export function tuft(p, x, y, z, s) {
  const o = mesh(p, tuftGeo, grass, x, y, z, s, s, s);
  o.rotation.y = rand(0, TAU);
}
const petal = [0xc98da7, 0xbc8299, 0xf3d7b2, 0xb691b2].map((c) => standard(c, 0.85, 0));
const leafGreen = standard(0x587040, 0.87, 0);
const bellGeo = new T.LatheGeometry(
  [
    [0.007, 0.02],
    [0.033, 0.018],
    [0.06, -0.007],
    [0.076, -0.045],
    [0.066, -0.08],
    [0.052, -0.074],
  ].map((p) => new T.Vector2(...p)),
  12,
);
export function foxglove(p, x, y, z, size) {
  const g = group(p, x, y, z);
  g.scale.setScalar(size);
  g.rotation.y = rand(0, TAU);
  branch(
    g,
    leafGreen,
    [
      [0, 0, 0],
      [0.01, 0.55, 0.02],
      [0.07, 0.95, 0],
      [0.16, 1.28, -0.04],
    ],
    0.015,
    0.004,
  );
  const mat = petal[Math.floor(rand(0, 4))];
  for (let i = 0; i < 18; i++) {
    const u = i / 18,
      a = i * 2.4,
      rad = 0.08 * (1 - u) + 0.023,
      k = 1 - u * 0.65;
    const o = mesh(
      g,
      bellGeo,
      mat,
      0.025 + 0.12 * u + rad * Math.cos(a),
      0.48 + 0.79 * u,
      rad * Math.sin(a),
      k,
      k * 1.2,
      k,
    );
    o.rotation.z = Math.cos(a) * 0.49;
    o.rotation.x = -Math.sin(a) * 0.48;
  }
  plant(g, 0, 0.015, 0, 0.27, 'hosta', 4);
}
const capGeo = new T.SphereGeometry(1, 18, 9, 0, TAU, 0, Math.PI * 0.55),
  cap = standard(0xb57a50, 0.75, 0.02);
export function mushrooms(p, x, y, z, s) {
  for (let i = 0; i < 5; i++) {
    const a = rand(0, TAU),
      r = rand(0, 0.22) * s,
      h = rand(0.1, 0.24) * s,
      X = x + r * Math.cos(a),
      Z = z + r * Math.sin(a);
    rod(p, m.ivory, [X, y, Z], [X + 0.008, y + h, Z], h * 0.09);
    mesh(p, capGeo, cap, X + 0.008, y + h, Z, h * 0.53, h * 0.31, h * 0.51);
    for (let j = 0; j < 4; j++)
      pebble(
        p,
        m.ivory,
        X + rand(-0.24, 0.24) * h,
        y + h * 1.28,
        Z + rand(-0.22, 0.22) * h,
        h * 0.035,
        h * 0.012,
        h * 0.035,
      );
  }
}
export function mossCrown(p, x, y, z, rx, rz, amount = 22) {
  for (let i = 0; i < amount; i++) {
    const a = rand(0, TAU),
      r = Math.sqrt(rand()),
      k = rand(0.11, 0.24);
    const X = x + rx * r * Math.cos(a),
      Z = z + rz * r * Math.sin(a),
      Y = y + 0.06 * (1 - r * r);
    pebble(p, m.moss, X, Y, Z, rx * k * 1.4, k * 0.2, rz * k * 1.4);
    if (i % 5 === 0) tuft(p, X, Y + 0.02, Z, rand(0.24, 0.53));
    if (i % 10 === 0) plant(p, X, Y + 0.02, Z, rand(0.12, 0.27), 'fern', 4);
  }
}

export function wisteriaTree(p) {
  const knots = [
    [-3.6, 0, -1.8],
    [-3.85, 1.3, -2.05],
    [-3.13, 2.75, -2.1],
    [-3.38, 3.72, -2.28],
    [-2.65, 4.75, -2.48],
    [-1.45, 5.57, -2.2],
  ];
  branch(p, m.bark, knots, 0.56, 0.19, 38, 14, 0.17);
  // Twisted longitudinal bark folds and strangler roots follow the old trunk.
  for (let j = 0; j < 10; j++) {
    const a = (j / 10) * TAU;
    const pts = knots.map((q, i) => {
      const r = 0.45 - i * 0.056,
        b = a + i * 1.07;
      return [q[0] + r * Math.cos(b), q[1] + 0.035, q[2] + r * Math.sin(b)];
    });
    branch(p, m.bark, pts, rand(0.048, 0.11), 0.015, 30, 7, 0.2);
    if (j % 2 === 0) {
      const [x, y, z] = pts[3];
      hang(p, 'ivy', x, y, z, rand(0.66, 1.24), a);
    }
  }
  for (let i = 0; i < 9; i++) {
    const a = i * 2.4,
      r = rand(1.1, 2.3);
    branch(
      p,
      m.bark,
      [
        [-3.6 + Math.cos(a) * r, 0.02, -1.8 + Math.sin(a) * r],
        [-3.6 + Math.cos(a) * 0.76, 0.14, -1.8 + Math.sin(a) * 0.76],
        [-3.63 + Math.cos(a) * 0.33, 0.72, -1.85 + Math.sin(a) * 0.32],
        [-3.68, 1.48, -2],
      ],
      0.036,
      0.18,
      18,
      8,
      0.21,
    );
  }
  for (let i = 0; i < 13; i++) {
    const start = knots[Math.floor(rand(3, 6))];
    const end = [
      start[0] + rand(-3.1, 3.7),
      start[1] + rand(0.08, 1.9),
      start[2] + rand(-2.4, 1.8),
    ];
    const mid = [(start[0] + end[0]) / 2, start[1] + rand(0.25, 0.7), (start[2] + end[2]) / 2];
    branch(p, m.bark, [start, mid, end], rand(0.09, 0.16), 0.032, 24, 8, 0.13);
    for (let j = 0; j < 7; j++) {
      const u = rand(0.1, 1),
        base = mid.map((v, k) => T.MathUtils.lerp(v, end[k], u));
      const tip = [
        base[0] + rand(-0.76, 0.76),
        base[1] + rand(-0.15, 0.44),
        base[2] + rand(-0.56, 0.56),
      ];
      branch(
        p,
        m.bark,
        [base, [(base[0] + tip[0]) / 2, tip[1] + 0.08, base[2]], tip],
        0.035,
        0.008,
        8,
        6,
      );
      hang(p, 'wisteria', ...tip, rand(0.35, 0.96), rand(-1, 1));
      if (j % 2 === 0) hang(p, 'ivy', ...base, rand(0.35, 0.83), rand(-1, 1));
    }
  }
  // Two thick winding leaders have grown around the old side column.
  for (let i = 0; i < 2; i++) {
    const path = [];
    for (let k = 0; k < 32; k++) {
      const a = k * 0.36 + i * 2;
      path.push([-5.35 + 0.25 * Math.cos(a), k * 0.135, -2 + 0.25 * Math.sin(a)]);
    }
    branch(p, m.bark, path, 0.14, 0.045, 58, 8, 0.2);
  }
}
