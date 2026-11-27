import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const TAU = Math.PI * 2;
export const vec = (x, y, z) => new T.Vector3(x, y, z);
export function rng(seed = 1876) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function group(parent, x = 0, y = 0, z = 0) {
  const g = new T.Group();
  parent.add(g);
  g.position.set(x, y, z);
  return g;
}
export function mat(color, metalness = 0.84, roughness = 0.3, extra = {}) {
  return new T.MeshStandardMaterial({ color, metalness, roughness, ...extra });
}
export const M = {
  gold: mat(0xe4aa52, 0.92, 0.22),
  light: mat(0xffdb8d, 0.88, 0.19),
  brass: mat(0xb88941, 0.86, 0.31),
  antique: mat(0x8e5529, 0.85, 0.35),
  bronze: mat(0x6a3924, 0.82, 0.32),
  rose: mat(0xc87966, 0.89, 0.29),
  steel: mat(0x9daeb2, 0.91, 0.23),
  blue: mat(0x294574, 0.84, 0.24),
  black: mat(0x191e25, 0.8, 0.25),
  enamel: mat(0x104547, 0.65, 0.23),
  teal: mat(0x346762, 0.76, 0.27),
  enamelDark: mat(0x102e30, 0.58, 0.23),
  ivory: mat(0xe0c99b, 0.32, 0.36),
  ruby: new T.MeshPhysicalMaterial({
    color: 0x8c072b,
    transparent: true,
    opacity: 0.92,
    ior: 1.76,
    flatShading: true,
    metalness: 0.17,
    roughness: 0.13,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    emissive: 0x130205,
    emissiveIntensity: 0.19
  })
};
const cache = new Map();
export function cached(key, build) {
  if (!cache.has(key)) cache.set(key, build());
  return cache.get(key);
}
export function mesh(p, geo, m, x = 0, y = 0, z = 0) {
  const o = new T.Mesh(geo, m);
  p.add(o);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  return o;
}
export function box(p, m, x, y, z, w, h, d) {
  const o = mesh(
    p,
    cached('box', () => new T.BoxGeometry(1, 1, 1)),
    m,
    x,
    y,
    z
  );
  o.scale.set(w, h, d);
  return o;
}
export function ball(p, m, x, y, z, rx, ry = rx, rz = rx) {
  const o = mesh(
    p,
    cached('ball', () => new T.SphereGeometry(1, 32, 20)),
    m,
    x,
    y,
    z
  );
  o.scale.set(rx, ry, rz);
  return o;
}
export function cylinder(p, m, x, y, z, rt, rb, h, n = 48, axis = 'y') {
  const a = rt || rb,
    ratio = rb / a,
    top = rt / a;
  const o = mesh(
    p,
    cached('c' + [n, top, ratio], () => new T.CylinderGeometry(top, ratio, 1, n)),
    m,
    x,
    y,
    z
  );
  o.scale.set(a, h, a);
  if (axis === 'z') o.rotation.x = Math.PI / 2;
  if (axis === 'x') o.rotation.z = -Math.PI / 2;
  return o;
}
export function ring(p, m, x, y, z, r, tube, axis = 'z', arc = TAU) {
  const o = mesh(
    p,
    cached(
      't' + [r, tube, arc],
      () => new T.TorusGeometry(r, tube, 8, Math.max(24, Math.ceil((64 * arc) / TAU)), arc)
    ),
    m,
    x,
    y,
    z
  );
  if (axis === 'y') o.rotation.x = -Math.PI / 2;
  if (axis === 'x') o.rotation.y = Math.PI / 2;
  return o;
}
export function rod(p, m, a, b, r1, r2 = r1, n = 12) {
  const v = vec(...b).sub(vec(...a)),
    mid = vec(...a).addScaledVector(v, 0.5);
  const o = cylinder(p, m, mid.x, mid.y, mid.z, r2, r1, v.length(), n);
  o.quaternion.setFromUnitVectors(vec(0, 1, 0), v.normalize());
  return o;
}
export function line(p, m, points, r = 0.012, n = 24) {
  const curve = new T.CatmullRomCurve3(points.map((a) => vec(...a)));
  return mesh(p, new T.TubeGeometry(curve, n, r, 6, false), m);
}
export function screw(p, x, y, z, r = 0.043, axis = 'z', m = M.blue, turn = 0) {
  const g = group(p, x, y, z);
  if (axis === 'y') g.rotation.x = -Math.PI / 2;
  if (axis === 'x') g.rotation.y = Math.PI / 2;
  const head = group(g);
  head.rotation.z = turn + 0.91 * Math.sin(473 * x + 636 * y);
  head.scale.setScalar(r);
  cylinder(head, M.black, 0, 0, -0.11, 0.95, 0.84, 0.17, 24, 'z');
  // Two bevelled lands with a recessed, open-ended screwdriver slot.
  const land = cached('slotted screw land', () => {
    const shape = new T.Shape(),
      angle = 0.115;
    shape.absarc(0, 0, 0.935, angle, Math.PI - angle, false);
    shape.closePath();
    return extrude(shape, 0.16, 0.044, 12);
  });
  mesh(head, land, m);
  mesh(head, land, m).rotation.z = Math.PI;
  return g;
}
export function jewel(p, x, y, z, r = 0.046, axis = 'z') {
  const g = group(p, x, y, z);
  if (axis === 'y') g.rotation.x = -Math.PI / 2;
  if (axis === 'x') g.rotation.y = Math.PI / 2;
  cylinder(g, M.gold, 0, 0, 0, r * 1.36, r * 1.36, r * 0.5, 24, 'z');
  ring(g, M.light, 0, 0, r * 0.26, r * 1.07, r * 0.11);
  cylinder(g, M.rose, 0, 0, r * 0.24, r, r, r * 0.08, 24, 'z');
  const o = mesh(
    g,
    cached('rose-cut', () => new T.SphereGeometry(1, 10, 5)),
    M.ruby,
    0,
    0,
    r * 0.23
  );
  o.scale.set(r, r, r * 0.64);
  cylinder(g, M.black, 0, 0, r * 0.84, r * 0.22, r * 0.19, r * 0.12, 16, 'z');
  return g;
}
export function lathe(p, m, profile, n = 96) {
  return mesh(
    p,
    new T.LatheGeometry(
      profile.map(([r, y]) => new T.Vector2(r, y)),
      n
    ),
    m
  );
}
export function extrude(shape, depth, bevel = 0.007, curveSegments = 5) {
  return new T.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments
  });
}
// Preserve independent animation pivots. Only bake rigid children of this assembly.
export function bake(g) {
  g.updateWorldMatrix(true, true);
  const inv = g.matrixWorld.clone().invert(),
    bins = new Map(),
    old = [...g.children];
  g.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    if (!bins.has(o.material)) bins.set(o.material, []);
    bins
      .get(o.material)
      .push({ geo: o.geometry, transform: new T.Matrix4().multiplyMatrices(inv, o.matrixWorld) });
  });
  g.remove(...old);
  for (const [material, items] of bins) {
    const geos = new Map(),
      single = [];
    for (const i of items) {
      if (!geos.has(i.geo)) geos.set(i.geo, []);
      geos.get(i.geo).push(i);
    }
    for (const [geo, matches] of geos) {
      if (matches.length < 8) {
        single.push(...matches);
        continue;
      }
      const batch = new T.InstancedMesh(geo, material, matches.length);
      matches.forEach((e, k) => batch.setMatrixAt(k, e.transform));
      batch.castShadow = batch.receiveShadow = true;
      g.add(batch);
    }
    if (!single.length) continue;
    const pieces = single.map(({ geo, transform }) => {
      const b = geo.index ? geo.toNonIndexed() : geo.clone();
      b.applyMatrix4(transform);
      return b;
    });
    mesh(g, mergeGeometries(pieces, false), material);
    pieces.forEach((b) => b.dispose());
  }
  return g;
}
export function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const tex = new T.CanvasTexture(c);
  if (srgb) tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
export function label(p, text, w, h, x, y, z, bg = '#163433', fg = '#e6c184') {
  const tex = canvasTex(768, 128, (c, W, H) => {
    c.fillStyle = bg;
    c.fillRect(0, 0, W, H);
    c.strokeStyle = fg;
    c.lineWidth = 2;
    c.strokeRect(9, 9, W - 18, H - 18);
    c.lineWidth = 1;
    c.strokeRect(16, 16, W - 32, H - 32);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = '46px Georgia';
    c.fillStyle = fg;
    c.fillText(text, W / 2, H / 2 + 2, W * 0.87);
  });
  return mesh(p, new T.PlaneGeometry(w, h), mat(0xffffff, 0.35, 0.32, { map: tex }), x, y, z);
}
export function studio(renderer) {
  const W = 512,
    H = 256,
    data = new Float32Array(W * H * 4);
  // Rectangular softboxes and long atelier windows form reflections on each polished edge.
  const sources = [
    [-1.25, 0.47, 0.46, 0.3, [5.5, 4.4, 3.4]],
    [1.12, 0.31, 0.3, 0.48, [3.4, 3.9, 4.35]],
    [2.74, 0.3, 0.22, 0.5, [3.8, 2.2, 0.98]],
    [-2.68, 0.83, 0.58, 0.13, [3.5, 3.2, 2.9]],
    [0, 1.29, 1.5, 0.17, [2.9, 2.7, 2.3]],
    [0.15, 0.02, 0.08, 0.33, [1.9, 1.23, 0.69]]
  ];
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      const lon = (x / W - 0.5) * TAU,
        lat = (y / H - 0.5) * Math.PI;
      const base = Math.max(0, Math.sin(lat));
      let a = [0.095 + 0.24 * base, 0.086 + 0.26 * base, 0.083 + 0.31 * base];
      for (const [lo, la, sw, sh, col] of sources) {
        const dx = Math.atan2(Math.sin(lon - lo), Math.cos(lon - lo)) / sw,
          dy = (lat - la) / sh;
        const power = Math.exp(-Math.pow(dx, 6) - Math.pow(dy, 6));
        a = a.map((v, k) => v + power * col[k]);
      }
      data.set([...a, 1], (y * W + x) * 4);
    }
  const tx = new T.DataTexture(data, W, H, T.RGBAFormat, T.FloatType);
  tx.mapping = T.EquirectangularReflectionMapping;
  tx.needsUpdate = true;
  const pm = new T.PMREMGenerator(renderer),
    rt = pm.fromEquirectangular(tx);
  tx.dispose();
  pm.dispose();
  return rt.texture;
}

// Wrapped, mipmapped surface finish in object space keeps the tool marks at a
// consistent physical size across machined gears, curved plates and hardware.
export function finishMetals() {
  const rnd = rng(1867),
    finish = canvasTex(
      512,
      512,
      (c, w, h) => {
        const im = c.createImageData(w, h),
          row = Array.from({ length: h }, () => rnd() * 17);
        for (let y = 0; y < h; y++)
          for (let x = 0; x < w; x++) {
            const k = (y * w + x) * 4,
              mottle =
                Math.sin(((x * TAU) / w) * 3 + Math.sin(((y * TAU) / h) * 2)) * Math.sin(((y * TAU) / h) * 5);
            const fine = rnd(),
              v = 119 + 22 * mottle + row[y] + 31 * fine;
            im.data[k] = v;
            im.data[k + 1] = v;
            im.data[k + 2] = v;
            im.data[k + 3] = 255;
          }
        c.putImageData(im, 0, 0);
        for (let i = 0; i < 280; i++) {
          let x = rnd() * w,
            y = rnd() * h;
          c.strokeStyle = rnd() > 0.5 ? 'rgba(241,239,231,.56)' : 'rgba(51,48,42,.55)';
          c.lineWidth = rnd() * 0.65 + 0.28;
          c.beginPath();
          c.moveTo(x, y);
          c.bezierCurveTo(x + 9, y - 0.75, x + 20, y + 1, x + 2 + rnd() * 61, y + rnd() * 4 - 2);
          c.stroke();
        }
      },
      false
    );
  finish.wrapS = finish.wrapT = T.RepeatWrapping;
  for (const m of Object.values(M)) {
    if (m === M.ruby || m === M.ivory) continue;
    m.onBeforeCompile = (s) => {
      s.uniforms.machining = { value: finish };
      s.vertexShader = 'varying vec3 toolP; varying vec3 toolN;\n' + s.vertexShader;
      s.vertexShader = s.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\n toolP=position; toolN=normal;'
      );
      s.fragmentShader =
        'varying vec3 toolP; varying vec3 toolN; uniform sampler2D machining;\n' + s.fragmentShader;
      s.fragmentShader = s.fragmentShader.replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
      vec3 blend=pow(abs(normalize(toolN)),vec3(4.));blend/=max(.001,blend.x+blend.y+blend.z);
      vec3 p=toolP*2.7;
      float mark=dot(blend,vec3(texture2D(machining,p.zy).r,texture2D(machining,p.xz).r,texture2D(machining,p.xy).r))-.54;
      diffuseColor.rgb*=1.+mark*.82;roughnessFactor=clamp(roughnessFactor+mark*.59,.088,.85);`
      );
    };
  }
}

// Faint registration lines grow between a socket and the lifted assembly.
export function guide(parent, socket, travel) {
  const g = new T.BufferGeometry().setFromPoints([vec(0, 0, 0), travel]);
  const ink = new T.LineDashedMaterial({
    color: 0xd3b47d,
    dashSize: 0.038,
    gapSize: 0.035,
    transparent: true,
    opacity: 0.39,
    depthWrite: false
  });
  const path = new T.Line(g, ink);
  path.computeLineDistances();
  parent.add(path);
  path.position.copy(socket);
  return (e) => {
    path.visible = e > 0.035;
    path.scale.setScalar(e);
  };
}
