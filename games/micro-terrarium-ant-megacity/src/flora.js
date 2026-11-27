import * as T from 'three';
import {
  v,
  rng,
  range,
  mix,
  mesh,
  standard,
  ell,
  tube,
  batch,
  mats,
  makeCanvas,
  canvasTexture,
} from './core.js';
import { nodes, rooms, top, relief } from './geology.js';

const sphere = new T.SphereGeometry(1, 10, 7);
function leafGeometry() {
  const pos = [],
    colors = [],
    index = [];
  for (let k = 0; k <= 8; k++) {
    let u = k / 8,
      w = Math.pow(Math.sin(Math.PI * u), 0.8) * (0.83 + 0.15 * (k % 2)),
      y = u * 0.92;
    for (let s = -1; s <= 1; s++) {
      pos.push(s * w * 0.5, y, 0.1 * Math.sin(Math.PI * u) * (1 - Math.abs(s)) + 0.2 * u * u);
      let c = new T.Color().setRGB(
        0.64 + 0.2 * u + (s === 0 ? 0.14 : 0),
        0.68 + 0.21 * u,
        0.48 + 0.22 * u,
      );
      colors.push(c.r, c.g, c.b);
    }
    if (k < 8)
      for (let s = 0; s < 2; s++) {
        let a = k * 3 + s;
        index.push(a, a + 1, a + 3, a + 1, a + 4, a + 3);
      }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}
function particles(parent, geo, mat, items) {
  const m = new T.InstancedMesh(geo, mat, items.length),
    o = new T.Object3D();
  items.forEach(([p, s, r, col], i) => {
    o.position.copy(p);
    o.scale.set(...s);
    o.rotation.set(...r);
    o.updateMatrix();
    m.setMatrixAt(i, o.matrix);
    if (col) m.setColorAt(i, new T.Color(col));
  });
  parent.add(m);
  return m;
}
function stem(parent, points, radii, material) {
  const curve = new T.CatmullRomCurve3(points),
    g = new T.TubeGeometry(curve, 28, 1, 8, false),
    pos = g.attributes.position;
  for (let i = 0; i < 29; i++) {
    const t = i / 28,
      p = curve.getPointAt(t),
      u = t * (radii.length - 1),
      k = Math.min(radii.length - 2, Math.floor(u)),
      r = mix(radii[k], radii[k + 1], u - k);
    for (let j = 0; j < 9; j++) {
      let q = i * 9 + j;
      pos.setXYZ(
        q,
        p.x + (pos.getX(q) - p.x) * r,
        p.y + (pos.getY(q) - p.y) * r,
        p.z + (pos.getZ(q) - p.z) * r,
      );
    }
  }
  g.computeVertexNormals();
  return mesh(parent, g, material);
}
const capPoints = [
  [0.035, -0.026],
  [0.37, -0.011],
  [0.81, -0.015],
  [1, 0.045],
  [0.96, 0.13],
  [0.79, 0.28],
  [0.56, 0.43],
  [0.3, 0.52],
  [0.06, 0.56],
  [0, 0.565],
];
function mushroomCap() {
  let g = new T.LatheGeometry(
      capPoints.map(([x, y]) => new T.Vector2(x, y)),
      48,
    ),
    p = g.attributes.position,
    c = [];
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i),
      angle = Math.atan2(z, x),
      ridge = Math.pow(0.5 + 0.5 * Math.cos(23 * angle), 2);
    let rad = Math.hypot(x, z),
      shift = 1 + 0.026 * Math.cos(7 * angle) + 0.017 * Math.sin(13 * angle);
    p.setXYZ(i, x * shift, y + 0.024 * Math.sin(5 * angle) * rad, z * shift);
    let color = new T.Color(y < 0.02 ? 0x917684 : 0x75cab3);
    if (y >= 0.02)
      color.lerp(
        new T.Color(0xd8f7e7),
        (0.25 + 0.4 * ridge) * (1 - Math.min(0.52, y)) + 0.22 * (rad > 0.91),
      );
    else color.multiplyScalar(0.48 + ridge * 0.7);
    c.push(color.r, color.g, color.b);
  }
  g.setAttribute('color', new T.Float32BufferAttribute(c, 3));
  g.computeVertexNormals();
  return g;
}
export function biosphere(scene, mossImg) {
  const group = new T.Group();
  scene.add(group);
  const moss = [],
    fronds = [],
    dew = [],
    pebbles = [],
    seeds = [],
    brood = [],
    caps = [],
    stalks = [],
    glints = [];
  const leafGeo = leafGeometry(),
    greens = [0x687e31, 0x829839, 0x3d6532, 0x547a39, 0x96a340, 0xabb854, 0x426337];
  const pick = (arr) => arr[Math.floor(rng() * arr.length)];
  const mossMat = standard(0xffffff, 0.98, 0),
    leafMat = standard(0xffffff, 0.65, 0, { vertexColors: true, side: T.DoubleSide });
  function ground(x, z) {
    return (
      top +
      0.06 +
      0.085 * Math.sin(x * 2.45 + z * 1.63) +
      0.043 * Math.cos(7 * x - z) +
      0.032 * Math.sin(10 * z + x * 4) +
      0.022 * Math.sin(x * 15 + z * 18)
    );
  }
  const mossTex = canvasTexture(mossImg);
  mossTex.wrapS = mossTex.wrapT = T.MirroredRepeatWrapping;
  mossTex.repeat.set(5.2, 1.1);
  const turfGeo = new T.PlaneGeometry(9.0, 1.34, 290, 48);
  turfGeo.rotateX(-Math.PI / 2);
  const turfPos = turfGeo.attributes.position;
  for (let i = 0; i < turfPos.count; i++) {
    let x = turfPos.getX(i),
      z = turfPos.getZ(i) - 0.43;
    let lip = Math.max(0, (z - 0.14) / 0.1);
    turfPos.setXYZ(
      i,
      x,
      mix(ground(x, z), 1.175, Math.min(1, lip * lip)) + 0.009 * Math.sin(z * 113 + x * 42),
      z,
    );
  }
  turfGeo.computeVertexNormals();
  mesh(
    scene,
    turfGeo,
    standard(0xc7d4b9, 0.95, 0, { map: mossTex, bumpMap: mossTex, bumpScale: 0.035, side: T.DoubleSide }),
  );
  leafMat.onBeforeCompile = (s) => {
    s.vertexShader =
      'varying vec3 blade;\n' +
      s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nblade=position;');
    s.fragmentShader =
      'varying vec3 blade;\n' +
      s.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
      float vein=pow(max(0.,cos(abs(blade.x)*42.-blade.y*99.)),9.);
      float midrib=exp(-abs(blade.x)*71.);diffuseColor.rgb*=.72+.19*vein+.35*midrib+.16*blade.y;
   `,
      );
  };
  for (let k = 0; k < 2500; k++) {
    let x = range(-4.48, 4.48),
      z = range(-0.94, 0.2),
      y = ground(x, z),
      s = range(0.019, 0.064);
    moss.push([
      v(x, y - 0.016, z),
      [s * 0.83, s * 0.42, s * 0.75],
      [range(-1, 1), range(0, 5), 0],
      pick(greens),
    ]);
    if (k % 2 === 0)
      for (let j = 0; j < 3; j++) {
        fronds.push([
          v(x + range(-0.06, 0.06), y + 0.026, z),
          [s * 0.5, s * range(1.0, 2.2), s * 0.55],
          [range(-0.85, 0.85), range(0, 6.28), range(-0.8, 0.8)],
          pick(greens),
        ]);
      }
  }
  const vein = standard(0x858e3c, 0.74);
  function fern(base, length, a, lean, tint) {
    const forward = v(Math.cos(a), 0, Math.sin(a)),
      cross = v(-Math.sin(a), 0, Math.cos(a));
    const mid = (t) =>
      base
        .clone()
        .addScaledVector(forward, length * (t * 0.5 + t * t * 0.43))
        .add(v(0, length * (Math.sin(t * 1.88) * lean + 0.1 * t), 0));
    const pts = [0, 0.24, 0.55, 0.78, 1].map(mid);
    tube(group, pts, length * 0.0065, vein, 12, 4);
    for (let n = 1; n < 15; n++) {
      const u = n / 15,
        p = mid(u),
        l = length * (0.065 + 0.18 * Math.sin(Math.PI * u) ** 0.72) * (1 - 0.35 * u);
      for (const sign of [-1, 1]) {
        let dir = forward
          .clone()
          .multiplyScalar(0.32 + 0.8 * u)
          .addScaledVector(cross, 0.9 * sign)
          .add(v(0, 0.23 + 0.36 * u, 0))
          .normalize();
        const quat = new T.Quaternion().setFromUnitVectors(v(0, 1, 0), dir);
        const tilt = new T.Quaternion().setFromAxisAngle(v(0, 1, 0), a + sign * 0.4);
        quat.multiply(tilt);
        let r = new T.Euler().setFromQuaternion(quat);
        fronds.push([p, [l * 0.32, l, l * 0.38], [r.x, r.y, r.z], tint]);
      }
    }
  }
  for (let i = 0; i < 42; i++) {
    let x = range(-4.32, 4.28),
      z = range(-0.89, 0.16),
      s = range(0.3, 0.8);
    if (i < 5) {
      x = [-3.65, -1.9, -0.35, 1.9, 3.7][i];
      s = range(0.8, 1.1);
    }
    for (let j = 0; j < 5; j++)
      fern(
        v(x, ground(x, z), z),
        s * range(0.64, 1.25),
        j * 1.256 + range(-0.6, 0.6),
        range(0.48, 1),
        pick(greens),
      );
  }
  // An old, wind-shaped miniature tree and its descending exposed roots.
  const bark = [mats.bark, standard(0x716246, 0.89), standard(0x4a3829, 0.98)];
  const trunk = v(-2.87, 1.21, -0.58);
  function wood(points, radii) {
    stem(
      group,
      points.map(([x, y, z]) => v(x, y, z).add(trunk)),
      radii,
      pick(bark),
    );
  }
  wood(
    [
      [0, 0, 0],
      [0.18, 0.27, 0.02],
      [0.43, 0.5, 0],
      [0.34, 0.74, 0.03],
      [0.55, 0.94, 0],
      [0.44, 1.18, -0.06],
    ],
    [0.21, 0.16, 0.12, 0.094, 0.052, 0.017],
  );
  const clusters = [];
  for (const [sx, sy, ex, ey, ez] of [
    [0.31, 0.43, -0.47, 0.79, 0.12],
    [0.39, 0.59, 0.98, 0.87, -0.17],
    [0.37, 0.75, -0.18, 1.05, -0.06],
    [0.49, 0.9, 0.91, 1.2, 0.12],
    [0.45, 1.02, 0.13, 1.32, -0.04],
    [0.46, 1.11, 0.58, 1.44, -0.1],
  ]) {
    wood(
      [
        [sx, sy, 0],
        [(sx + ex) / 2, sy + 0.1, ez * 0.5],
        [ex - 0.05, ey - 0.08, ez],
        [ex, ey, ez],
      ],
      [0.062, 0.04, 0.025, 0.012],
    );
    for (let j = 0; j < 9; j++) {
      let x = ex + range(-0.29, 0.29),
        y = ey + range(-0.03, 0.15),
        z = ez + range(-0.18, 0.18);
      wood(
        [
          [ex, ey - 0.06, ez],
          [x, y, z],
        ],
        [0.018, 0.005],
      );
      clusters.push(v(x, y, z).add(trunk));
    }
  }
  for (const p of clusters)
    for (let k = 0; k < 24; k++) {
      let s = range(0.06, 0.15);
      fronds.push([
        p.clone().add(v(range(-0.18, 0.18), range(-0.045, 0.09), range(-0.14, 0.14))),
        [s * 0.68, s, s * 0.54],
        [range(-1.7, 1.7), range(0, 6), range(-1.8, 1.8)],
        pick(greens),
      ]);
    }
  for (let i = 0; i < 32; i++) {
    const x = i < 16 ? range(-3.38, -2.35) : range(-4.4, 4.3),
      len = range(0.29, 1.09),
      dx = range(-0.52, 0.52),
      z = 0.226;
    let pts = [
      v(x, top + 0.018, z),
      v(x + dx * 0.3, top - len * 0.18, z + 0.01),
      v(x + dx * 0.75 + 0.06, top - len * 0.54, z),
      v(x + dx, top - len * 0.78, z),
      v(x + dx * 1.15 - 0.06, top - len, z),
    ];
    stem(group, pts, [0.029, 0.022, 0.012, 0.006, 0.001], pick(bark));
    for (let k = 1; k <= 2; k++)
      tube(
        group,
        [pts[k], pts[k].clone().add(v(0.05, -0.08, 0)), pts[k].clone().add(v(0.09, -0.19, 0.006))],
        0.004,
        mats.bark,
        6,
        3,
      );
  }
  for (let i = 0; i < 300; i++) {
    let p = v(range(-4.44, 4.44), range(-2.73, 1.17), 0),
      z = relief(p.x, p.y);
    if (z < 0.17) continue;
    let s = range(0.01, 0.048);
    pebbles.push([
      v(p.x, p.y, z),
      [s * range(1, 2.5), s * 0.52, s * 0.48],
      [0, 0, range(-0.5, 0.5)],
      pick([0x997e5c, 0x6c4933, 0x75563b, 0xbf9b67, 0x493a34]),
    ]);
  }
  const under = standard(0xc3efc0, 0.34, 0.03, { emissive: 0x53b59e, emissiveIntensity: 0.3 });
  const capMat = new T.MeshPhysicalMaterial({
    color: 0xffffff,
    vertexColors: true,
    emissive: 0x50bcae,
    emissiveIntensity: 0.34,
    roughness: 0.27,
    clearcoat: 0.55,
    iridescence: 0.35,
    side: T.DoubleSide,
    transparent: true,
    opacity: 0.89,
    depthWrite: true,
  });
  const filament = standard(0x8e9b74, 0.75, 0, { emissive: 0x304d3a, emissiveIntensity: 0.23 });
  function shroom(x, y, z, h, r, tilt) {
    const a = v(x, y, z),
      tip = a.clone().add(v(tilt * h, h, h * 0.1));
    let dir = tip.clone().sub(a);
    let q = new T.Quaternion().setFromUnitVectors(v(0, 1, 0), dir.clone().normalize()),
      e = new T.Euler().setFromQuaternion(q);
    stalks.push([
      a.clone().lerp(tip, 0.5),
      [r * 0.12, dir.length(), r * 0.13],
      [e.x, e.y, e.z],
      0xf1e3b2,
    ]);
    caps.push([
      tip,
      [r, r * range(0.83, 1.15), r],
      [range(-0.33, 0.04), range(0, 6.28), -tilt * 0.8],
      pick([0xc2f4ca, 0xdfffd8, 0xa1e8da]),
    ]);
    if (h > 0.15) {
      for (let k = 0; k < 3; k++)
        glints.push([
          tip.clone().add(v(range(-r * 0.32, r * 0.32), r * 0.49, range(0, r * 0.38))),
          [r * 0.038, r * 0.023, r * 0.039],
          [0, 0, 0],
          0xf1f9cc,
        ]);
    }
  }
  const eggColors = [0xffecd1, 0xffe1aa, 0xf1e9ca, 0xfce2b0];
  for (const [id, rx, ry, type] of rooms) {
    const p = nodes[id];
    if (type === 'fungus') {
      for (let k = 0; k < 31; k++) {
        let dx = range(-0.84, 0.84),
          y = p.y - ry * (0.76 * Math.sqrt(1 - dx * dx)) + range(0, 0.045),
          h = range(0.045, 0.206) * (1 + 0.25 * Math.cos(dx * 4));
        shroom(p.x + rx * dx, y, range(-0.055, 0.075), h, h * range(0.38, 0.66), range(-0.39, 0.39));
      }
      for (let k = 0; k < 30; k++) {
        const x = p.x + range(-rx * 0.79, rx * 0.79),
          y = p.y + range(-ry * 0.76, -ry * 0.2),
          z = -0.155;
        tube(
          group,
          [
            v(x, y, z),
            v(x + 0.037, y + 0.03, z + 0.01),
            v(x + range(0.04, 0.14), y + range(0.01, 0.09), z),
          ],
          range(0.002, 0.0045),
          filament,
          5,
          3,
        );
      }
    } else if (type === 'granary' || type === 'queen') {
      let n = type === 'queen' ? 48 : Math.floor(rx * 92);
      for (let k = 0; k < n; k++) {
        let dx = range(-0.77, 0.77),
          s = range(0.021, 0.044),
          y = p.y - ry * 0.72 * Math.sqrt(1 - dx * dx) + range(0, 0.075);
        if (type === 'queen') {
          s *= 1.22;
          dx = dx * 0.87 + 0.14;
        }
        (type === 'queen' ? brood : seeds).push([
          v(p.x + rx * dx, y, range(-0.13, 0.004)),
          [s * 1.72, s, s * 0.83],
          [range(-0.6, 0.6), range(-0.4, 0.4), range(-0.9, 0.9)],
          type === 'queen' ? pick(eggColors) : pick([0xe4b553, 0xbb833a, 0xc99545, 0xd49d57]),
        ]);
      }
    }
  }
  for (let i = 0; i < 29; i++) {
    let x = range(-4.3, 4.25),
      z = range(-0.45, 0.2),
      h = range(0.09, 0.29);
    shroom(x, ground(x, z), z, h, h * 0.58, range(-0.27, 0.27));
  }
  // Water beads gather on upward-facing leaf tips.
  for (let i = 0; i < fronds.length; i += 37) {
    let [p, s, r] = fronds[i],
      tip = v(0, s[1] * 0.8, 0)
        .applyEuler(new T.Euler(...r))
        .add(p),
      rr = range(0.01, 0.037);
    dew.push([tip, [rr, rr * 0.86, rr], [0, 0, 0], 0xffffff]);
  }
  batch(group);
  particles(scene, sphere, mossMat, moss);
  particles(scene, leafGeo, leafMat, fronds);
  particles(scene, new T.IcosahedronGeometry(1, 0), mossMat, pebbles);
  particles(scene, sphere, standard(0xffffff, 0.44, 0.05), seeds);
  particles(
    scene,
    sphere,
    new T.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.21, iridescence: 0.56, clearcoat: 0.8 }),
    brood,
  );
  particles(scene, mushroomCap(), capMat, caps);
  particles(scene, new T.CylinderGeometry(0.76, 1, 1, 8), under, stalks);
  particles(scene, sphere, under, glints);
  const water = new T.MeshPhysicalMaterial({
    color: 0xdbe8d8,
    metalness: 0.42,
    roughness: 0.065,
    transparent: true,
    opacity: 0.72,
    clearcoat: 1,
  });
  particles(scene, sphere, water, dew);
  // Filamentous gills under each translucent cap and halo scattered in damp air.
  const gillGeo = new T.BufferGeometry(),
    gv = [];
  for (let j = 0; j < 26; j++) {
    let a = (j / 26) * Math.PI * 2;
    gv.push(
      0.055 * Math.cos(a),
      -0.029,
      0.055 * Math.sin(a),
      0.83 * Math.cos(a + 0.035),
      -0.018,
      0.83 * Math.sin(a + 0.035),
    );
  }
  const gillLines = [];
  for (const [pos, scale, rot] of caps) {
    const m = new T.Matrix4().compose(
      pos,
      new T.Quaternion().setFromEuler(new T.Euler(...rot)),
      v(...scale),
    );
    for (let i = 0; i < gv.length; i += 3) {
      const p = v(gv[i], gv[i + 1], gv[i + 2]).applyMatrix4(m);
      gillLines.push(...p.toArray());
    }
  }
  gillGeo.setAttribute('position', new T.Float32BufferAttribute(gillLines, 3));
  scene.add(
    new T.LineSegments(
      gillGeo,
      new T.LineBasicMaterial({ color: 0xc4e8d8, transparent: true, opacity: 0.62 }),
    ),
  );
  let hc = makeCanvas(128, 128),
    ctx = hc.getContext('2d'),
    gl = ctx.createRadialGradient(64, 64, 1, 64, 64, 63);
  gl.addColorStop(0, 'rgba(159,255,222,.80)');
  gl.addColorStop(0.22, 'rgba(92,241,205,.45)');
  gl.addColorStop(0.6, 'rgba(54,191,185,.13)');
  gl.addColorStop(1, 'rgba(37,167,176,0)');
  ctx.fillStyle = gl;
  ctx.fillRect(0, 0, 128, 128);
  const haloMat = new T.MeshBasicMaterial({
    map: canvasTexture(hc),
    transparent: true,
    opacity: 0.48,
    blending: T.AdditiveBlending,
    depthWrite: false,
  });
  const haloes = caps
    .filter(([p, s], i) => p.y < 1 && i % 3 === 0)
    .map(([p, s]) => [p.clone().add(v(0, 0, 0.035)), [s[0] * 4.3, s[0] * 3.5, 1], [0, 0, 0], 0xffffff]);
  particles(scene, new T.PlaneGeometry(1, 1), haloMat, haloes);
  const falling = ell(scene, -0.52, 1.88, 0.12, 0.033, 0.045, 0.033, water);
  const landing = v(-0.54, 1.36, 0.13),
    leaf = mesh(
      scene,
      leafGeo,
      standard(0x729d43, 0.42, 0, { side: T.DoubleSide }),
      landing.x - 0.16,
      landing.y - 0.09,
      landing.z,
    );
  leaf.scale.set(0.16, 0.47, 0.18);
  leaf.rotation.set(-0.65, 0.2, -1.04);
  fern(v(-0.9, 1.22, 0.02), 0.79, 0, 0.99, 0x85a94d);
  const source = v(landing.x, 1.95, 0.13);
  // A bowed leaf directly above the receiving blade is the source of the droplet.
  tube(scene, [v(-1.02, 1.3, 0), v(-0.93, 1.77, 0.03), v(-0.75, 2.01, 0.09), source], 0.012, vein);
  return (t) => {
    let u = ((t + 2.91) % 5.4) / 5.4,
      fall = clamp01((u - 0.8) / 0.16);
    falling.position.copy(source).lerp(landing, fall * fall);
    let size = u > 0.96 ? 0 : Math.min(1, 0.1 + u * 1.9) * 0.042;
    falling.scale.set(size * 0.83, size * (1 + 0.4 * fall), size * 0.84);
  };
}
function clamp01(x) {
  return Math.min(1, Math.max(0, x));
}
