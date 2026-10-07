// The rooftop: unfinished top floor of a high-rise at golden hour.
// Static geometry is merged per material into a handful of draw calls, with world-space UVs so textures
// tile evenly across walls, pillars and stacks. Colliders are registered as the geometry is placed.
import * as THREE from 'three';
import { addBox, addCylinder, clearColliders } from './collision.js';
import { seededRandom, smoothstep } from './utils.js';

export const CAST_LAYER = 1; // objects on this layer cast into the volumetric sun-depth pass
export const ARENA = 38.5;
export const SPAWN_POINT = new THREE.Vector3(0, 0, 27);

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const _n = new THREE.Vector3();
const _v = new THREE.Vector3();
const _nm = new THREE.Matrix3();

// Merges geometry per key into single BufferGeometries. Each vertex gets a world-space UV from its dominant
// normal axis (triplanar-style projection), and a colour that darkens near the ground (cheap ambient occlusion).
class StaticBatch {
  constructor() {
    this.parts = new Map();
  }

  part(key, uvScale) {
    let p = this.parts.get(key);
    if (!p) {
      p = { pos: [], nrm: [], uv: [], col: [], idx: [], uvScale };
      this.parts.set(key, p);
    }
    return p;
  }

  // geometry: BufferGeometry in local space. matrix: local -> world. opts: { tint, ao, cyl }
  add(key, uvScale, geometry, matrix, opts = {}) {
    const p = this.part(key, uvScale);
    const pos = geometry.attributes.position;
    const nrm = geometry.attributes.normal;
    const index = geometry.index ? geometry.index.array : null;
    const base = p.pos.length / 3;
    _nm.getNormalMatrix(matrix);
    const tint = opts.tint || [1, 1, 1];
    const ao = opts.ao ?? 0.55;
    for (let i = 0; i < pos.count; i++) {
      _v.fromBufferAttribute(pos, i).applyMatrix4(matrix);
      _n.fromBufferAttribute(nrm, i).applyMatrix3(_nm).normalize();
      p.pos.push(_v.x, _v.y, _v.z);
      p.nrm.push(_n.x, _n.y, _n.z);
      const ax = Math.abs(_n.x), ay = Math.abs(_n.y), az = Math.abs(_n.z);
      if (opts.cyl && ay < 0.5) {
        // Side of a cylinder: wrap around the circumference so seams do not stretch.
        const a = Math.atan2(_n.z, _n.x);
        p.uv.push(a * opts.cyl, _v.y);
      } else if (ay >= ax && ay >= az) {
        p.uv.push(_v.x, _v.z);
      } else if (ax >= az) {
        p.uv.push(_v.z, _v.y);
      } else {
        p.uv.push(_v.x, _v.y);
      }
      const g = ao + (1 - ao) * smoothstep(0.0, 1.2, _v.y);
      p.col.push(tint[0] * g, tint[1] * g, tint[2] * g);
    }
    if (index) for (let i = 0; i < index.length; i++) p.idx.push(index[i] + base);
    else for (let i = 0; i < pos.count; i++) p.idx.push(base + i);
  }

  build() {
    const out = new Map();
    for (const [key, p] of this.parts) {
      if (p.pos.length === 0) continue;
      const uvs = p.uv.map((v, i) => v * p.uvScale);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(p.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(p.nrm, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setAttribute('color', new THREE.Float32BufferAttribute(p.col, 3));
      const vertexCount = p.pos.length / 3;
      g.setIndex(vertexCount > 65535 ? new THREE.Uint32BufferAttribute(p.idx, 1) : new THREE.Uint16BufferAttribute(p.idx, 1));
      g.computeBoundingSphere();
      g.computeBoundingBox();
      out.set(key, g);
    }
    return out;
  }
}

// A flapping plastic sheet hanging from a rail. Vertices are displaced on the CPU each frame.
function makeSheet(mat, width, height, segX, segY, position, yaw, phase) {
  const geo = new THREE.PlaneGeometry(width, height, segX, segY);
  geo.translate(0, -height / 2, 0);
  const base = Float32Array.from(geo.attributes.position.array);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(position);
  mesh.rotation.y = yaw;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.layers.enable(CAST_LAYER);
  mesh.name = 'sheet';
  const pa = geo.attributes.position;
  return {
    mesh,
    update(t, wind) {
      for (let i = 0; i < pa.count; i++) {
        const bx = base[i * 3];
        const by = base[i * 3 + 1];
        const v = Math.min(1, Math.max(0, -by / height)); // 0 at the rail, 1 at the free bottom edge
        const gust = 0.35 + 0.65 * wind;
        const snap = Math.pow(Math.max(0, Math.sin(t * 0.9 + phase)), 5.0) * wind;
        const wave = Math.sin(t * (2.3 + wind * 2.5) + bx * 2.1 + by * 0.6 + phase);
        const flutter = Math.sin(t * 5.1 + bx * 4.3 + phase * 2.0) * 0.25 * wind;
        const amp = (0.12 + 0.8 * gust) * (0.25 + 0.95 * v * v);
        const z = (wave + flutter) * amp + snap * 0.55 * v;
        const x = bx + Math.sin(t * 1.7 + by * 0.9 + phase) * 0.06 * v * (0.3 + wind);
        const y = by - (Math.abs(wave) * 0.08 * v * (0.4 + wind));
        pa.setXYZ(i, x, y, z);
      }
      pa.needsUpdate = true;
      geo.computeVertexNormals();
    },
  };
}

// Contact-shadow decal instances on the floor.
function makeBlobAO(texture, items) {
  const geo = new THREE.PlaneGeometry(1, 1);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    opacity: 0.9,
    polygonOffset: true,
    polygonOffsetFactor: -2,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, items.length);
  mesh.frustumCulled = false;
  mesh.receiveShadow = false;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  items.forEach((it, i) => {
    m.compose(new THREE.Vector3(it.x, 0.006 + i * 0.00001, it.z), q, new THREE.Vector3(it.size, 1, it.size));
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.name = 'blobAO';
  return mesh;
}

export function buildWorld({ scene, textures, renderer }) {
  clearColliders();
  const T = textures;
  const batch = new StaticBatch();
  const rand = seededRandom(20260);

  // ---- helpers to place primitives ------------------------------------------------------
  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  const unitCyl = new THREE.CylinderGeometry(1, 1, 1, 18, 1);
  const unitCylThin = new THREE.CylinderGeometry(1, 1, 1, 6, 1);

  function box(key, uvScale, cx, cy, cz, sx, sy, sz, opts = {}, yaw = 0) {
    _p.set(cx, cy, cz);
    _s.set(sx, sy, sz);
    _q.setFromAxisAngle(_v.set(0, 1, 0), yaw);
    _m.compose(_p, _q, _s);
    batch.add(key, uvScale, unitBox, _m, opts);
  }

  function cyl(key, uvScale, cx, cy, cz, radius, height, opts = {}, rotation = null, thin = false) {
    _p.set(cx, cy, cz);
    _s.set(radius, height, radius);
    if (rotation) _q.setFromEuler(rotation);
    else _q.identity();
    _m.compose(_p, _q, _s);
    batch.add(key, uvScale, thin ? unitCylThin : unitCyl, _m, { cyl: radius, ...opts });
  }

  // Axis-aligned solid: visible box plus collider.
  function solidBox(key, uvScale, x0, y0, z0, x1, y1, z1, mat = 'concrete', opts = {}) {
    box(key, uvScale, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0, opts);
    return addBox(x0, y0, z0, x1, y1, z1, mat, opts.tag || null);
  }

  // ---- ground and facade ----------------------------------------------------------------
  const floorTex = T.floor;
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex.map,
    normalMap: floorTex.normalMap,
    roughnessMap: floorTex.roughnessMap,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(1.0, 1.0),
  });
  const floorSize = 92;
  floorMat.map.repeat.set(floorSize / 4, floorSize / 4);
  floorMat.normalMap.repeat.copy(floorMat.map.repeat);
  floorMat.roughnessMap.repeat.copy(floorMat.map.repeat);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(floorSize, floorSize), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.name = 'floor';
  scene.add(floor);

  // Building facade falling away below the slab edges.
  const facadeHalf = floorSize / 2;
  const facadeDepth = 190;
  for (const [cx, cz, sx, sz] of [
    [0, -facadeHalf, floorSize, 1.2],
    [0, facadeHalf, floorSize, 1.2],
    [-facadeHalf, 0, 1.2, floorSize],
    [facadeHalf, 0, 1.2, floorSize],
  ]) {
    box('facade', 0.22, cx, -facadeDepth / 2, cz, sx, facadeDepth, sz, { ao: 0.4 });
  }

  // ---- parapet ring (solid perimeter, one metre high, unfinished) ----------------------
  const parapetH = 1.05;
  solidBox('concrete', 0.5, -ARENA - 0.6, 0, -ARENA - 0.6, ARENA + 0.6, parapetH, -ARENA, 'concrete');
  solidBox('concrete', 0.5, -ARENA - 0.6, 0, ARENA, ARENA + 0.6, parapetH, ARENA + 0.6, 'concrete');
  solidBox('concrete', 0.5, -ARENA - 0.6, 0, -ARENA - 0.6, -ARENA, parapetH, ARENA + 0.6, 'concrete');
  solidBox('concrete', 0.5, ARENA, 0, -ARENA - 0.6, ARENA + 0.6, parapetH, ARENA + 0.6, 'concrete');
  // Rebar stubs poking out of the parapet top (unfinished look).
  for (let i = -36; i <= 36; i += 4.5) {
    cyl('rebar', 2.0, i, parapetH + 0.22, -ARENA - 0.1, 0.014, 0.44, {}, null, true);
    cyl('rebar', 2.0, i + 1.1, parapetH + 0.2, ARENA + 0.1, 0.014, 0.4, {}, null, true);
  }

  // ---- elevator core with an open doorway the enemies pour out of ----------------------
  const coreZ0 = -27.5, coreZ1 = -17.0;
  solidBox('concrete', 0.45, -8.5, 0, coreZ0, -7.0, 4.2, coreZ1, 'concrete', { tag: 'cover' });
  solidBox('concrete', 0.45, 7.0, 0, coreZ0, 8.5, 4.2, coreZ1, 'concrete', { tag: 'cover' });
  solidBox('concrete', 0.45, -8.5, 0, coreZ0, 8.5, 4.2, -26.0, 'concrete');
  solidBox('concrete', 0.45, -8.5, 0, -18.5, -2.4, 4.2, coreZ1, 'concrete', { tag: 'cover' });
  solidBox('concrete', 0.45, 2.4, 0, -18.5, 8.5, 4.2, coreZ1, 'concrete', { tag: 'cover' });
  solidBox('concrete', 0.45, -2.4, 3.2, -18.5, 2.4, 4.2, coreZ1, 'concrete');
  for (const x of [-8.2, 8.2]) {
    for (const z of [-27, -18]) cyl('rebar', 2.0, x, 4.6, z, 0.012, 1.1, {}, new THREE.Euler(0.12 * Math.sign(z), 0, 0.1 * Math.sign(x)), true);
  }

  // ---- concrete columns -----------------------------------------------------------------
  const pillars = [];
  for (const x of [-26, -13, 13, 26]) {
    for (const z of [-14, 0, 14]) pillars.push([x, z]);
  }
  for (const [x, z] of pillars) {
    cyl('concrete', 0.5, x, 2.3, z, 0.55, 4.6, { ao: 0.5 });
    addCylinder(x, z, 0.55, 0, 4.6, 'concrete', 'cover');
    cyl('concreteDark', 0.5, x, 0.18, z, 0.6, 0.36, { ao: 0.4 });
    // Rebar bundle sticking out of the column top.
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2 + rand() * 0.4;
      const rr = 0.3 + rand() * 0.1;
      const lean = new THREE.Euler(Math.cos(a) * 0.14, 0, -Math.sin(a) * 0.14);
      cyl('rebar', 2.0, x + Math.cos(a) * rr, 4.6 + 0.45, z + Math.sin(a) * rr, 0.011, 0.9 + rand() * 0.5, {}, lean, true);
    }
  }

  // ---- pallet stacks with cement bags -------------------------------------------------
  const palletStacks = [
    { x: -7, z: -3, sx: 2.4, sz: 1.2, h: 1.1 },
    { x: 8, z: 4, sx: 2.4, sz: 1.2, h: 0.9 },
    { x: -17, z: 6, sx: 1.6, sz: 1.2, h: 0.45 },
    { x: 18, z: -6, sx: 2.0, sz: 1.6, h: 1.0 },
    { x: -3, z: 16, sx: 2.4, sz: 2.0, h: 1.3 },
  ];
  for (const s of palletStacks) {
    const layers = Math.max(1, Math.round(s.h / 0.18));
    for (let l = 0; l < layers; l++) {
      const y0 = l * 0.16;
      box('wood', 1.0, s.x, y0 + 0.07, s.z, s.sx, 0.1, s.sz, { ao: 0.5 });
      for (let r = -1; r <= 1; r++) {
        box('wood', 1.0, s.x + r * (s.sx * 0.4), y0 + 0.02, s.z, 0.12, 0.06, s.sz, { ao: 0.5 });
      }
    }
    const top = layers * 0.16;
    // Cement bags and a few paint buckets on top.
    for (let k = 0; k < 4; k++) {
      const bx = s.x + (rand() - 0.5) * (s.sx - 0.6);
      const bz = s.z + (rand() - 0.5) * (s.sz - 0.6);
      box('drywall', 0.6, bx, top + 0.12, bz, 0.56, 0.22, 0.34, { tint: [0.85, 0.82, 0.74], ao: 0.7 }, rand() * 0.2);
    }
    // Collider only: the pallet pieces above are the visible shape.
    addBox(s.x - s.sx / 2, 0, s.z - s.sz / 2, s.x + s.sx / 2, top + 0.02, s.z + s.sz / 2, 'wood', 'cover');
  }

  // ---- stacked drywall boards ---------------------------------------------------------
  const drywallStacks = [
    { x: 14, z: 10, sx: 2.4, sz: 1.2, h: 1.1 },
    { x: -13, z: -6, sx: 2.4, sz: 1.2, h: 1.7 },
  ];
  for (const d of drywallStacks) {
    const sheets = Math.round(d.h / 0.025);
    for (let i = 0; i < sheets; i++) {
      const jitter = (rand() - 0.5) * 0.05;
      box('drywall', 0.9, d.x + jitter, i * 0.025 + 0.0125, d.z + jitter * 0.5, d.sx, 0.024, d.sz, { ao: 0.6, tint: [0.97, 0.96, 0.94] });
    }
    addBox(d.x - d.sx / 2, 0, d.z - d.sz / 2, d.x + d.sx / 2, d.h, d.z + d.sz / 2, 'drywall', 'cover');
  }

  // ---- concrete barriers (jersey-style) and cable spools -----------------------------
  const barriers = [
    [2.5, -8, 3.0, 0.6, 0.0],
    [-4, -12, 0.6, 3.0, 0.0],
    [21, 14, 3.0, 0.6, 0.0],
    [-22, -2, 0.6, 3.0, 0.0],
  ];
  for (const [x, z, sx, sz] of barriers) {
    solidBox('concrete', 0.5, x - sx / 2, 0, z - sz / 2, x + sx / 2, 0.8, z + sz / 2, 'concrete', { tag: 'cover' });
    box('concreteDark', 0.5, x, 0.02, z, sx + 0.05, 0.04, sz + 0.05, { ao: 0.4 });
  }
  const spools = [[6, -12], [-9, 18], [22, 8]];
  for (const [x, z] of spools) {
    cyl('wood', 1.2, x, 0.45, z, 0.6, 0.9, { ao: 0.7 });
    addCylinder(x, z, 0.6, 0, 0.9, 'wood', 'cover');
    cyl('steel', 0.8, x, 0.91, z, 0.46, 0.04, { ao: 1 });
  }

  // ---- steel scaffold along the east and north edges, plastic sheeting between poles -------
  const sheetMat = new THREE.MeshStandardMaterial({
    color: 0xf1efe9,
    roughness: 0.34,
    metalness: 0,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6,
    normalMap: T.plastic.normalMap,
    normalScale: new THREE.Vector2(0.6, 0.6),
    roughnessMap: null,
    depthWrite: false,
    envMapIntensity: 1.2,
  });
  sheetMat.normalMap.repeat.set(1.5, 1.5);
  const sheets = [];
  const scaffoldX = 35.6;
  for (let z = -32; z <= 32; z += 2.4) {
    cyl('steel', 1.0, scaffoldX, 2.6, z, 0.045, 5.2, { ao: 1 });
  }
  box('steel', 1.0, scaffoldX, 5.2, 0, 0.09, 0.09, 64, { ao: 1 });
  box('steel', 1.0, scaffoldX, 2.8, 0, 0.07, 0.07, 64, { ao: 1 });
  let sheetIndex = 0;
  for (let z = -32; z < 32; z += 2.4) {
    const pos = new THREE.Vector3(scaffoldX - 0.12, 5.05, z + 1.2);
    sheets.push(makeSheet(sheetMat, 2.3, 4.55, 6, 12, pos, Math.PI / 2, sheetIndex * 0.9));
    sheetIndex++;
  }
  for (let x = -34; x <= 34; x += 2.4) {
    cyl('steel', 1.0, x, 2.6, -35.5, 0.045, 5.2, { ao: 1 });
  }
  box('steel', 1.0, 0, 5.2, -35.5, 68, 0.09, 0.09, { ao: 1 });
  for (let x = -34; x < 34; x += 2.4) {
    const pos = new THREE.Vector3(x + 1.2, 5.05, -35.6);
    sheets.push(makeSheet(sheetMat, 2.3, 4.55, 6, 12, pos, 0, sheetIndex * 0.9 + 0.4));
    sheetIndex++;
  }
  // ---- rebar bundle on trestles: the sparking one -------------------------------------
  const sparkBase = new THREE.Vector3(-5.0, 0.72, 9.0);
  box('steel', 1.0, -6.6, 0.36, 9.0, 0.12, 0.72, 0.12, { ao: 0.8 });
  box('steel', 1.0, -3.4, 0.36, 9.0, 0.12, 0.72, 0.12, { ao: 0.8 });
  for (let i = 0; i < 7; i++) {
    const z = 8.75 + i * 0.07;
    cyl('rebar', 2.5, -5.0, 0.72, z, 0.018, 2.6, {}, new THREE.Euler(0, 0, Math.PI / 2), true);
  }
  // Some loose rebar lying on the floor around the trestles.
  for (let i = 0; i < 5; i++) {
    const a = rand() * Math.PI;
    cyl('rebar', 2.5, -5 + (rand() - 0.5) * 3.2, 0.02, 9 + (rand() - 0.5) * 2.4, 0.016, 1.6 + rand() * 0.8,
      {}, new THREE.Euler(Math.PI / 2, 0, a), true);
  }

  // ---- paint buckets (vertex-coloured) and cans --------------------------------------
  const paints = [
    [0.94, 0.94, 0.92], [0.22, 0.42, 0.7], [0.95, 0.45, 0.12], [0.8, 0.14, 0.12],
  ];
  const bucketClusters = [[-9.5, -1.5], [6.5, 6.5], [-17.5, 3.5], [15.5, -4.5], [-22.5, 9.5], [25.5, 0.8], [-2.2, 19.5]];
  for (const [bx, bz] of bucketClusters) {
    const n = 4 + ((rand() * 3) | 0);
    for (let i = 0; i < n; i++) {
      const x = bx + (rand() - 0.5) * 1.6;
      const z = bz + (rand() - 0.5) * 1.6;
      const c = paints[(rand() * paints.length) | 0];
      cyl('paint', 1.0, x, 0.15, z, 0.17, 0.3, { tint: c, ao: 0.7 });
      cyl('paint', 1.0, x, 0.305, z, 0.175, 0.012, { tint: [0.2, 0.2, 0.22], ao: 0.7 });
    }
  }

  // ---- scrap clutter: small chunks of concrete and broken pallets ---------------------
  for (let i = 0; i < 46; i++) {
    const x = (rand() - 0.5) * 70;
    const z = (rand() - 0.5) * 70;
    if (Math.abs(x) < 3 && Math.abs(z - 27) < 6) continue;
    if (Math.abs(z + 22) < 8 && Math.abs(x) < 10) continue;
    const s = 0.2 + rand() * 0.45;
    box('concreteDark', 0.7, x, s * 0.4, z, s, s * 0.8, s * (0.7 + rand() * 0.5), { ao: 0.6 }, rand() * Math.PI);
  }

  // ---- glass panes leaning on the western columns --------------------------------------
  const glassPanes = [];
  for (let i = 0; i < 5; i++) {
    const x = -26 + 1.1;
    const z = -14 + 0.8 + i * 0.1;
    const pane = { x, z: z + i * 1.1, y: 0.95 };
    glassPanes.push(pane);
    box('glass', 1.0, pane.x, pane.y, pane.z, 0.012, 1.9, 1.4, { tint: [1, 1, 1], ao: 1 });
  }

  // ---- build merged meshes ------------------------------------------------------------
  const mats = {
    concrete: new THREE.MeshStandardMaterial({
      map: T.concrete.map, normalMap: T.concrete.normalMap, roughnessMap: T.concrete.roughnessMap,
      roughness: 1, metalness: 0, vertexColors: true, normalScale: new THREE.Vector2(1.2, 1.2),
    }),
    concreteDark: new THREE.MeshStandardMaterial({
      map: T.concreteDark.map, normalMap: T.concreteDark.normalMap, roughnessMap: T.concreteDark.roughnessMap,
      roughness: 1, metalness: 0, vertexColors: true,
    }),
    wood: new THREE.MeshStandardMaterial({
      map: T.wood.map, normalMap: T.wood.normalMap, roughnessMap: T.wood.roughnessMap,
      roughness: 1, metalness: 0, vertexColors: true,
    }),
    drywall: new THREE.MeshStandardMaterial({
      map: T.drywall.map, normalMap: T.drywall.normalMap, roughnessMap: T.drywall.roughnessMap,
      roughness: 1, metalness: 0, vertexColors: true,
    }),
    steel: new THREE.MeshStandardMaterial({
      map: T.steel.map, normalMap: T.steel.normalMap, roughnessMap: T.steel.roughnessMap,
      roughness: 1, metalness: 0.9, vertexColors: true,
    }),
    rebar: new THREE.MeshStandardMaterial({
      map: T.rebar.map, normalMap: T.rebar.normalMap, roughnessMap: T.rebar.roughnessMap,
      roughness: 1, metalness: 0.6, vertexColors: true,
    }),
    paint: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0, vertexColors: true }),
    glass: new THREE.MeshStandardMaterial({
      color: 0xc9dde8, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.2,
      depthWrite: false, envMapIntensity: 1.8,
    }),
    facade: new THREE.MeshStandardMaterial({
      map: T.facade.map, normalMap: T.facade.normalMap, roughnessMap: T.facade.roughnessMap,
      roughness: 1, metalness: 0, vertexColors: true,
    }),
  };
  // Rebar and steel tiles are small; make the texture scale read correctly on thin members.
  for (const key of Object.keys(mats)) {
    const m = mats[key];
    if (m.map) m.map.needsUpdate = true;
  }

  for (const [key, geometry] of batch.build()) {
    const mat = mats[key];
    if (!mat) continue;
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.name = 'static-' + key;
    mesh.castShadow = key !== 'glass';
    mesh.receiveShadow = true;
    mesh.layers.enable(CAST_LAYER);
    if (key === 'glass') mesh.castShadow = false;
    if (key === 'glass') mesh.layers.disable(CAST_LAYER);
    scene.add(mesh);
  }

  // Sheets: dynamic, transparent, cast into the sun-depth pass for flapping shadows.
  for (const s of sheets) scene.add(s.mesh);

  // Contact shadows under heavy objects.
  const aoItems = [];
  for (const [x, z] of pillars) aoItems.push({ x, z, size: 2.6 });
  for (const s of palletStacks) aoItems.push({ x: s.x, z: s.z, size: Math.max(s.sx, s.sz) * 1.6 });
  for (const d of drywallStacks) aoItems.push({ x: d.x, z: d.z, size: Math.max(d.sx, d.sz) * 1.5 });
  for (const [x, z, sx, sz] of barriers) aoItems.push({ x, z, size: Math.max(sx, sz) * 1.5 });
  for (const [x, z] of spools) aoItems.push({ x, z, size: 2.0 });
  for (const [bx, bz] of bucketClusters) aoItems.push({ x: bx, z: bz, size: 2.2 });
  aoItems.push({ x: 0, z: -22, size: 22 });
  if (T.contactAO) {
    const aoTex = T.contactAO.isTexture ? T.contactAO : T.contactAO.map;
    scene.add(makeBlobAO(aoTex, aoItems));
  }

  // ---- cover and spawn data for the AI ------------------------------------------------
  const coverSpots = [];
  for (const [x, z] of pillars) coverSpots.push({ x, z, r: 0.55 });
  for (const s of palletStacks) coverSpots.push({ x: s.x, z: s.z, r: Math.max(s.sx, s.sz) * 0.5 });
  for (const d of drywallStacks) coverSpots.push({ x: d.x, z: d.z, r: Math.max(d.sx, d.sz) * 0.5 });
  for (const [x, z, sx, sz] of barriers) coverSpots.push({ x, z, r: Math.max(sx, sz) * 0.5 });
  for (const [x, z] of spools) coverSpots.push({ x, z, r: 0.6 });
  coverSpots.push({ x: 0, z: -18, r: 4.2 }, { x: -6, z: -18.6, r: 2.4 }, { x: 6, z: -18.6, r: 2.4 });

  const spawnPoints = [
    new THREE.Vector3(0, 0, -22.5), // inside the core, pouring out of the doorway
    new THREE.Vector3(-33, 0, -33),
    new THREE.Vector3(33, 0, -31),
    new THREE.Vector3(-34.5, 0, -6),
    new THREE.Vector3(34.5, 0, 2),
    new THREE.Vector3(-33, 0, 20),
    new THREE.Vector3(33, 0, 22),
    new THREE.Vector3(-26, 0, 34),
    new THREE.Vector3(26, 0, 34),
  ];

  // Sparkers: grinder sparks from the rebar on the trestles, streaming sideways with the wind.
  const sparkers = [{ pos: sparkBase.clone(), dir: new THREE.Vector3(-1, 0.2, 0.15).normalize(), rate: 60 }];

  // Idle animation: sheets, subtle light flicker. Returned through update().
  let flicker = 0;
  const sparkLight = new THREE.PointLight(0xff9a3c, 0, 9, 1.6);
  sparkLight.position.copy(sparkBase).add(new THREE.Vector3(-0.3, 0.25, 0));
  scene.add(sparkLight);

  return {
    spawnPoints,
    coverSpots,
    sparkers,
    sparkLight,
    glassPanes,
    sheets,
    update(t, dt, wind) {
      for (const s of sheets) s.update(t, wind);
      flicker = (flicker + dt * 19) % (Math.PI * 2);
      sparkLight.intensity = 1.1 + Math.sin(flicker) * 0.22 + Math.sin(flicker * 2.7 + 1.1) * 0.18;
    },
  };
}
