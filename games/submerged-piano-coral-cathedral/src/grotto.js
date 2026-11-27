import { T, V, mesh, group, mat, bake, random, orb, box, rod, line, turned } from './craft.js';
const rnd = random(39278),
  tau = Math.PI * 2,
  between = (a, b) => a + (b - a) * rnd();
export const ground = (x, z) =>
  -0.06 +
  0.048 * Math.sin(0.69 * x + 0.62 * z) * Math.cos(0.58 * z) +
  0.065 * Math.sin(z * 0.91 + 0.47 * x) +
  0.018 * Math.cos(2.5 * z + 0.75 * x);
function cragGeometry(seed) {
  const geo = new T.SphereGeometry(1, 36, 24),
    v = geo.attributes.position;
  const phase = seed * 11.7;
  for (let i = 0; i < v.count; i++) {
    let x = v.getX(i),
      y = v.getY(i),
      z = v.getZ(i);
    const b =
      0.12 * Math.sin(4 * x + 3 * y + phase) * Math.sin(4 * z - 2 * y) +
      0.064 * Math.sin(9 * x + 4 * z + phase) * Math.cos(6 * y - 4 * z);
    const shelves =
      0.064 * Math.sin(y * 15 + 2.3 * Math.sin(x * 2 + z * 2 + phase)) +
      0.024 * Math.cos(y * 36 + 3 * x + phase);
    const a = 1 + b + shelves;
    v.setXYZ(i, x * a, y * (0.98 + b * 0.45) + 0.035 * Math.sin(x * 5 + phase) * Math.sin(z * 7), z * a);
  }
  geo.computeVertexNormals();
  return geo;
}
export function buildGrotto(scene, tex) {
  const p = group(scene),
    stone = mat(0xc5d2cb, 0.94, 0, { map: tex.rock, bumpMap: tex.rockH, bumpScale: 0.085 }),
    pebble = mat(0xe5debd, 0.85, 0, { map: tex.sand });
  const sand = mat(0xf6f4e8, 0.88, 0, { map: tex.sand, bumpMap: tex.sandH, bumpScale: 0.06 });
  const geo = new T.PlaneGeometry(35, 35, 200, 200);
  geo.rotateX(-Math.PI / 2);
  const a = geo.attributes.position;
  for (let i = 0; i < a.count; i++) {
    const x = a.getX(i),
      z = a.getZ(i);
    a.setY(i, ground(x, z) - Math.max(0, Math.hypot(x, z) - 7) * 0.31);
  }
  geo.computeVertexNormals();
  const bed = mesh(scene, geo, sand);
  bed.receiveShadow = true;
  scene.userData.sand = sand;
  const rocks = Array.from({ length: 8 }, (_, i) => cragGeometry(i));
  function rock(x, y, z, w, h, d, m = stone) {
    const o = mesh(p, rocks[Math.floor(rnd() * 8)], m, x, y, z);
    o.scale.set(w, h, d);
    o.rotation.y = rnd() * tau;
    return o;
  }
  // Staggered, dissolved ledges and blocks in the middle distance.
  for (let i = 0; i < 65; i++) {
    const ang = rnd() * tau,
      r = between(6.2, 14),
      x = Math.cos(ang) * r,
      z = Math.sin(ang) * r;
    const large = between(0.6, 2.35);
    rock(x, -0.34 - (r - 7) * 0.12, z, large, large * between(0.36, 0.96), large * between(0.63, 1.35));
    if (i % 6 === 0 && r > 10) {
      rock(x + 0.19, 0.1, z + 0.27, large * 0.94, 0.77, large * 1.32);
    }
  }
  for (let i = 0; i < 75; i++) {
    const x = between(-5.8, 5.8),
      z = between(-5, 5);
    if (Math.abs(x) < 1.9 && Math.abs(z) < 2.8) continue;
    const sz = between(0.045, 0.23);
    rock(x, ground(x, z) - sz * 0.2, z, sz * 1.3, sz * 0.58, sz);
  }
  // Shell grit is instanced so the macro floor holds detail without hundreds of draws.
  const debris = new T.InstancedMesh(new T.IcosahedronGeometry(1, 0), pebble, 1100);
  const dummy = new T.Object3D(),
    c = new T.Color();
  for (let i = 0; i < debris.count; i++) {
    const x = between(-8, 8),
      z = between(-8, 8),
      s = between(0.009, 0.042);
    dummy.position.set(x, ground(x, z) + s * 0.13, z);
    dummy.scale.set(s * 1.4, s * 0.41, s);
    dummy.rotation.set(rnd(), rnd() * tau, rnd());
    dummy.updateMatrix();
    debris.setMatrixAt(i, dummy.matrix);
    debris.setColorAt(i, c.setHSL(between(0.08, 0.14), between(0.12, 0.3), between(0.36, 0.78)));
  }
  scene.add(debris);
  bake(p, false);
  // The photographic far wall is cylindrical, with two overlapping cavern bays around the orbit.
  const bgGeo = new T.CylinderGeometry(24, 24, 17, 180, 1, true);
  const uv = bgGeo.attributes.uv,
    pos = bgGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const u = uv.getX(i);
    uv.setXY(i, (1 - u) * 2 + 0.64, uv.getY(i));
  }
  const back = mesh(
    scene,
    bgGeo,
    new T.MeshBasicMaterial({ map: tex.back, side: T.BackSide, fog: false, toneMapped: false }),
    0,
    0.85,
    0,
  );
  back.userData.farwall = true;
  // A continuous jagged vault closes the cylinder above the water window.
  const points = [],
    coords = [],
    colors = [],
    ids = [],
    rings = 20,
    segments = 160;
  for (let j = 0; j <= rings; j++) {
    const u = j / rings;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * tau,
        sn = Math.sin(a),
        cs = Math.cos(a);
      const scallop = 1 + 0.13 * Math.sin(a * 7 + 0.4) + 0.06 * Math.sin(a * 16);
      const x = sn * 24 * (1 - u) + u * (-4.8 + 3.45 * sn * scallop);
      const z = cs * 24 * (1 - u) + u * (-3.1 + 2.35 * cs * scallop);
      const h =
        9.35 +
        1.09 * Math.sin(u * Math.PI) +
        u * (0.42 * Math.sin(6 * a + 3 * u) + 0.22 * Math.cos(15 * a - 1.3 * u));
      points.push(x, h, z);
      coords.push((1 - i / segments) * 2 + 0.64, 1 - u * 0.47);
      const shade = 1 - 0.74 * Math.sin(Math.PI * u) ** 0.61;
      colors.push(shade, shade, shade);
      if (j < rings && i < segments) {
        const k = j * (segments + 1) + i;
        ids.push(k, k + 1, k + segments + 1, k + 1, k + segments + 2, k + segments + 1);
      }
    }
  }
  const roofGeo = new T.BufferGeometry();
  roofGeo.setAttribute('position', new T.Float32BufferAttribute(points, 3));
  roofGeo.setAttribute('uv', new T.Float32BufferAttribute(coords, 2));
  roofGeo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  roofGeo.setIndex(ids);
  mesh(scene, roofGeo, new T.MeshBasicMaterial({ map: tex.back, vertexColors: true, side: T.DoubleSide }));
  const sky = mesh(
    scene,
    new T.CircleGeometry(6, 64),
    new T.MeshBasicMaterial({ color: 0xffefbf, side: T.DoubleSide }),
    -4.8,
    10.62,
    -3.1,
  );
  sky.rotation.x = Math.PI / 2;

  return { sand };
}
function candelabrum(p) {
  const g = group(p, -2.18, -0.13, 1.24);
  g.rotation.set(-0.11, 0.22, 0.27);
  const brass = mat(0xe8b971, 0.37, 0.61, { map: p.userData.bronze }),
    warm = mat(0xffdc9b, 0.3, 0.6, { map: p.userData.bronze }),
    wax = mat(0xaeaa84, 0.82);
  turned(
    g,
    brass,
    0,
    0,
    [
      [0, 0.26],
      [0.045, 0.28],
      [0.08, 0.23],
      [0.14, 0.17],
      [0.18, 0.11],
      [0.23, 0.085],
      [0.27, 0.113],
      [0.32, 0.079],
      [0.36, 0.057],
      [0.67, 0.041],
      [0.71, 0.09],
      [0.78, 0.06],
      [0.83, 0.083],
      [0.89, 0.04],
      [1.23, 0.035],
      [1.27, 0.071],
    ],
    32,
  );
  for (const [d, h] of [
    [0, 1.32],
    [-0.37, 1.14],
    [0.37, 1.14],
    [-0.62, 0.96],
    [0.62, 0.96],
  ]) {
    if (d) {
      line(
        g,
        brass,
        [V(0, 0.58, 0), V(d * 0.32, 0.68, 0.05), V(d * 0.65, 0.63, 0.1), V(d, 0.78, 0.08), V(d, h, 0.06)],
        0.025,
        8,
      );
    }
    const cup = group(g, d, h, d ? 0.06 : 0);
    turned(
      cup,
      warm,
      0,
      0,
      [
        [0, 0.045],
        [0.024, 0.107],
        [0.042, 0.118],
        [0.051, 0.06],
        [0.107, 0.066],
        [0.12, 0.075],
      ],
      24,
    );
    turned(
      cup,
      wax,
      0,
      0,
      [
        [0.12, 0.037],
        [0.21 + Math.abs(d) * 0.15, 0.033],
      ],
      12,
    );
  }
}
export function reef(scene, tex) {
  const p = group(scene),
    plants = group(scene);
  const coralColors = [0xab4b39, 0xc56747, 0xdf855b, 0xb7464b, 0xca8265].map((c) => mat(c, 0.77));
  const tipMat = mat(0xf4b086, 0.7),
    spongeMats = [0xb94d31, 0xd17343, 0xad604e].map((c) => mat(c, 0.85));
  const shellMouth = mat(0x544c39, 0.88),
    algae = mat(0x687455, 0.89);
  const gorg = (x, y, z, size, rot, idx) => {
    const tree = group(p, x, y, z);
    tree.rotation.set(between(-0.2, 0.19), rot, between(-0.2, 0.2));
    tree.scale.setScalar(size);
    const m = coralColors[idx % 5];
    function branch(start, angle, len, rad, level) {
      const end = start
        .clone()
        .add(V(Math.sin(angle) * len, Math.cos(angle) * len, between(-0.065, 0.065) * len * 3));
      const mid = start.clone().lerp(end, 0.47);
      mid.x += between(-0.08, 0.08) * len;
      mid.z += between(-0.07, 0.07) * len;
      rod(tree, m, start, mid, rad, rad * 0.79, 5);
      rod(tree, m, mid, end, rad * 0.79, rad * 0.58, 5);
      if (level) {
        branch(end, angle * 0.85 + between(0.19, 0.57), len * between(0.62, 0.85), rad * 0.7, level - 1);
        branch(end, angle * 0.85 - between(0.19, 0.57), len * between(0.63, 0.88), rad * 0.67, level - 1);
        if (level > 1 && rnd() < 0.47) {
          const fork = mid.clone();
          branch(fork, angle + between(-0.78, 0.78), len * 0.61, rad * 0.64, level - 2);
        }
      } else if (rnd() < 0.78) orb(tree, tipMat, end.x, end.y, end.z, rad * 1.27);
    }
    for (let i = -2; i <= 2; i++) branch(V(0, 0, 0), i * 0.42, between(0.18, 0.31), 0.027, 4);
  };
  gorg(1.48, 1.71, 0.03, 0.63, -0.48, 0);
  gorg(1.05, 1.67, -0.61, 0.84, 0.18, 2);
  gorg(-1.55, 1.75, 0.4, 0.58, -0.25, 3);
  gorg(-2.5, ground(-2.5, 0.7), 0.7, 1.45, -0.32, 2);
  gorg(2.45, ground(2.45, -1.1), -1.1, 1.04, -0.44, 3);
  const zones = [
    [-3.35, 2.36, 1.1],
    [-2.68, -2.1, 0.95],
    [3.26, -2.9, 1.3],
    [2.92, 2.45, 0.7],
    [-4.4, -2.9, 1.2],
    [-1.95, -4.4, 0.85],
    [3.6, 0.21, 1.3],
    [-3.4, -0.3, 0.65],
  ];
  for (let i = 0; i < zones.length; i++) {
    const [x, z, s] = zones[i];
    gorg(x, ground(x, z), z, s, between(-0.8, 0.8), i);
  }
  // Ridged, hollow acorn barnacles: rings vary in radius and height from plate to plate.
  function barnacle(x, y, z, s) {
    const n = 10,
      verts = [],
      cols = [],
      base = new T.Color(0xe0d3b3),
      inside = new T.Color(0x504c3a),
      tint = new T.Color();
    const sections = [
      [0, 1],
      [0.53, 0.77],
      [0.82, 0.48],
      [0.75, 0.32],
      [0.38, 0.25],
    ];
    for (let j = 0; j < 4; j++)
      for (let i = 0; i < n; i++) {
        for (const [k, l] of [
          [i, j],
          [i + 1, j],
          [i, j + 1],
          [i + 1, j],
          [i + 1, j + 1],
          [i, j + 1],
        ]) {
          const angle = (k / n) * tau,
            [h, r] = sections[l],
            ridge = 1 + 0.085 * Math.cos(k * 2.51);
          verts.push(
            r * Math.cos(angle) * ridge,
            h + 0.07 * Math.sin(k * 3.1) * (l > 0),
            r * Math.sin(angle) * ridge,
          );
          tint.copy(l > 2 ? inside : base).multiplyScalar(0.74 + 0.23 * Math.cos(k * 1.8));
          cols.push(tint.r, tint.g, tint.b);
        }
      }
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
    geo.setAttribute('color', new T.Float32BufferAttribute(cols, 3));
    geo.computeVertexNormals();
    const b = mesh(p, geo, barnMat, x, y, z);
    b.scale.setScalar(s);
    b.rotation.y = rnd() * 6;
  }
  const barnMat = mat(0xffffff, 0.89, 0, { vertexColors: true, side: T.DoubleSide });
  for (const [x, y, z, spread] of [
    [1.53, 1.84, 0.22, 0.25],
    [1.54, 1.53, 1.03, 0.3],
    [-1.56, 1.54, 1.12, 0.23],
    [-1.52, 1.85, -0.8, 0.69],
    [-0.9, 0.07, -2.43, 0.2],
    [0, 0.33, 1.02, 0.17],
    [1.39, 0.11, 1.05, 0.12],
  ]) {
    for (let j = 0; j < 23; j++) {
      const s = between(0.013, 0.052);
      barnacle(x + between(-0.042, 0.042), y, z + between(-spread, spread), s);
      if (j % 4 === 0) orb(p, algae, x, y - 0.013, z + between(-spread, spread), s * 1.5, s * 0.36, s);
    }
  }
  function tubes(x, y, z, sz) {
    const gp = group(p, x, y, z);
    for (let i = 0; i < 5; i++) {
      const h = between(0.14, 0.48) * sz,
        r = between(0.025, 0.075) * sz;
      const shoot = group(gp, between(-0.2, 0.2) * sz, 0, between(-0.15, 0.15) * sz);
      shoot.rotation.set(between(-0.34, 0.34), rnd() * tau, between(-0.37, 0.37));
      turned(
        shoot,
        spongeMats[i % 3],
        0,
        0,
        [
          [0, r * 0.65],
          [h * 0.32, r * 0.83],
          [h * 0.66, r],
          [h * 0.9, r * 1.1],
          [h, r * 1.15],
          [h * 0.99, r * 0.76],
          [h * 0.8, r * 0.7],
        ],
        13,
      );
      orb(shoot, shellMouth, 0, h * 0.81, 0, r * 0.68, r * 0.07, r * 0.68);
    }
  }
  for (const [x, z, s] of zones) tubes(x - 0.32, ground(x - 0.32, z + 0.16), z + 0.16, s);
  tubes(1.47, 1.72, 0.44, 0.39);
  tubes(-1.51, 1.77, -1.14, 0.44);
  const anem = mat(0xd49586, 0.51),
    cream = mat(0xffce96, 0.58);
  for (const [x, y, z, s] of [
    [1.51, 1.52, 1.27, 0.52],
    [-1.5, 1.8, 0.11, 0.64],
    [2.91, 0.03, 1.61, 1.3],
    [-2.2, 0.03, 1.45, 1.0],
  ]) {
    for (let j = 0; j < 34; j++) {
      const a = j * 2.399,
        rr = s * 0.17 * Math.sqrt(j / 34);
      const h = s * between(0.11, 0.31);
      const end = V(x + Math.cos(a) * rr * 1.45, y + h, z + Math.sin(a) * rr * 1.45);
      line(
        p,
        anem,
        [
          V(x + Math.cos(a) * rr * 0.55, y, z + Math.sin(a) * rr * 0.55),
          V(x + Math.cos(a) * rr, y + h * 0.65, z + Math.sin(a) * rr),
          end,
        ],
        s * 0.012,
        5,
      );
      orb(p, cream, end.x, end.y, end.z, s * 0.016);
    }
  }
  p.userData.bronze = tex.bronze;
  candelabrum(p);
  bake(p);
  // Gorgonians grow in thin, arched fans. Photographic polyp tissue follows a curved membrane.
  const specimenMats = {};
  for (const key of ['fan', 'whip', 'flower', 'tubes']) {
    const t = tex[key];
    t.wrapS = t.wrapT = T.ClampToEdgeWrapping;
    specimenMats[key] = mat(0xefdfcc, 0.88, 0, {
      map: t,
      side: T.DoubleSide,
      alphaTest: 0.31,
      emissiveMap: t,
      emissive: 0x3a3930,
    });
  }
  const colonies = group(scene);
  function colony(name, x, y, z, w, h, yaw, lean = 0) {
    const g = new T.PlaneGeometry(w, h, 14, 12),
      v = g.attributes.position;
    for (let i = 0; i < v.count; i++) {
      const xx = v.getX(i) / w,
        yy = v.getY(i) / h + 0.5;
      v.setXYZ(
        i,
        xx * w + Math.sin(yy * 3) * w * 0.032,
        yy * h,
        Math.sin(xx * 3.3) * yy * h * 0.065 + xx * xx * w * 0.38 + yy * yy * lean,
      );
    }
    g.computeVertexNormals();
    const o = mesh(colonies, g, specimenMats[name], x, y, z);
    o.rotation.y = yaw;
  }
  colony('fan', 1.45, 1.8, 0.08, 0.99, 0.78, 0.63, -0.1);
  colony('whip', 0.94, 1.75, -0.59, 0.42, 0.65, -0.17, 0.08);
  colony('flower', 1.53, 1.53, 1.21, 0.31, 0.19, 0.44);
  colony('fan', -1.53, 1.79, -0.55, 0.58, 0.44, 0.25);
  colony('tubes', -1.54, 1.78, 0.33, 0.22, 0.25, 0.78);
  for (let i = 0; i < zones.length; i++) {
    const [x, z, s] = zones[i];
    const y = ground(x, z);
    colony(
      i % 3 ? 'fan' : 'whip',
      x + 0.12,
      y,
      z + 0.08,
      s * 0.97,
      s * (i % 3 ? 0.78 : 1.1),
      0.35 + 0.46 * Math.sin(i * 4),
      -0.12,
    );
    colony('flower', x - 0.24, y + 0.02, z + 0.25, s * 0.48, s * 0.29, 0.3 + i * 0.13);
    colony('tubes', x + 0.26, y + 0.01, z - 0.24, s * 0.37, s * 0.45, 0.37);
  }
  colony('whip', -2.3, ground(-2.3, 1.78), 1.78, 0.39, 0.58, 0.36);
  bake(colonies, false);

  // Double-sided blades carry a pale central rib, striations, and tapered translucent tips.
  const bladeMat = mat(0xffffff, 0.59, 0.07, { side: T.DoubleSide, vertexColors: true });
  const verts = [],
    colors = [],
    uvs = [],
    indices = [],
    anchors = [];
  function kelp(x, y, z, h) {
    const ang = rnd() * tau,
      phase = rnd() * tau,
      width = between(0.024, 0.065) * Math.abs(h) ** 0.5,
      bend = between(0.15, 0.6);
    const idx = verts.length / 3;
    const base = new T.Color().setHSL(between(0.15, 0.255), between(0.47, 0.74), between(0.13, 0.28)),
      c = new T.Color();
    for (let j = 0; j <= 24; j++) {
      const q = j / 24,
        dx = Math.sin(q * 7 + phase) * 0.18 * q + h * q * q * bend;
      const cx = x + Math.cos(ang) * dx,
        cz = z + Math.sin(ang) * dx;
      const cy = y + h * q;
      const angle = ang + 0.7 * Math.sin(q * 6 + phase) + q * 1.32,
        w = width * Math.pow(Math.sin(Math.PI * q), 0.62) * (0.76 + 0.24 * Math.cos(q * 23 + phase)) + 0.001;
      for (let k = -1; k <= 1; k++) {
        verts.push(
          cx + Math.cos(angle) * w * k,
          cy + (1 - Math.abs(k)) * w * 0.25,
          cz + Math.sin(angle) * w * k,
        );
        anchors.push(q, phase);
        uvs.push((k + 1) / 2, q);
        c.copy(base).multiplyScalar(k === 0 ? 1.29 : 1 + 0.1 * Math.sin(q * 40));
        colors.push(c.r, c.g, c.b);
      }
      if (j < 24)
        for (let k = 0; k < 2; k++) {
          const b = idx + j * 3 + k;
          indices.push(b, b + 3, b + 1, b + 1, b + 3, b + 4);
        }
    }
  }
  for (const [x, z, s] of zones)
    for (let i = 0; i < between(14, 22); i++) {
      const xx = x + between(-0.37, 0.37),
        zz = z + between(-0.35, 0.35);
      kelp(xx, ground(xx, zz), zz, s * between(0.34, 1.65));
    }
  for (const [x, z] of [
    [1.57, 0.31],
    [1.51, 0.05],
    [-1.56, -0.8],
    [-1.54, 0.38],
    [1.5, 0.99],
  ])
    for (let i = 0; i < 5; i++)
      kelp(x + between(-0.038, 0.038), z > 0.8 ? 1.53 : 1.83, z + between(-0.1, 0.1), -between(0.23, 0.86));
  const bg = new T.BufferGeometry();
  bg.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
  bg.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  bg.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
  bg.setIndex(indices);
  bg.computeVertexNormals();
  mesh(plants, bg, bladeMat).receiveShadow = true;
  return (t) => {
    const pos = bg.attributes.position.array;
    for (let i = 0; i < pos.length / 3; i++) {
      const q = anchors[i * 2],
        phase = anchors[i * 2 + 1];
      pos[i * 3] = verts[i * 3] + q * q * 0.095 * Math.sin(t * 1.1 + phase + q * 2);
      pos[i * 3 + 2] = verts[i * 3 + 2] + q * q * 0.071 * Math.cos(t * 0.76 + phase + q * 3);
    }
    bg.attributes.position.needsUpdate = true;
  };
}
