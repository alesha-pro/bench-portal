import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
function studio(renderer) {
  // Wide textile softboxes and narrow inspection strips, in linear HDR.
  const w = 512,
    h = 256,
    data = new Float32Array(w * h * 4);
  const panels = [
    [-1.25, 0.69, 0.55, 0.29, [3.9, 4.2, 4.6]],
    [1.8, 0.49, 0.3, 0.43, [2.8, 3.25, 3.45]],
    [-2.5, 0.05, 0.048, 0.48, [2.1, 2.5, 2.7]],
    [0.3, 0.68, 0.24, 0.08, [5, 4.7, 4.25]],
    [2.7, -0.08, 0.38, 0.13, [1.6, 0.74, 0.35]],
    [-0.3, 0.07, 0.32, 0.05, [0.65, 1.2, 1.25]],
    [0, 1.3, 1.1, 0.11, [1.62, 1.72, 1.88]],
  ];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const lon = (x / w - 0.5) * TAU,
        lat = (y / h - 0.5) * Math.PI,
        base = 0.055 + 0.1 * Math.max(0, Math.sin(lat));
      const rgb = [base * 0.92, base, base * 1.12];
      for (const [a, b, dx, dy, c] of panels) {
        const ax = Math.abs(Math.atan2(Math.sin(lon - a), Math.cos(lon - a))) / dx,
          ay = Math.abs(lat - b) / dy;
        const m = Math.max(ax, ay),
          s = 1 / (1 + Math.exp(Math.min(60, (m - 1) * 18)));
        for (let k = 0; k < 3; k++) rgb[k] += c[k] * s;
      }
      data.set([...rgb, 1], 4 * (y * w + x));
    }
  const tex = new T.DataTexture(data, w, h, T.RGBAFormat, T.FloatType);
  tex.mapping = T.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  tex.magFilter = T.LinearFilter;
  tex.minFilter = T.LinearFilter;
  const pm = new T.PMREMGenerator(renderer),
    rt = pm.fromEquirectangular(tex);
  pm.dispose();
  tex.dispose();
  return { rt };
}

function canvasMap(w, h, paint) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  paint(c.getContext('2d'), w, h);
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
function brushed() {
  const map = canvasMap(512, 128, (g, w, h) => {
    g.fillStyle = '#e8e7e4';
    g.fillRect(0, 0, w, h);
    let seed = 71;
    const rand = () => (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296;
    for (let i = 0; i < 3300; i++) {
      g.fillStyle = 'rgba(45,47,51,' + (0.015 + rand() * 0.095) + ')';
      g.fillRect(rand() * w, rand() * h, 3 + rand() * 150, 0.3 + rand() * 0.6);
    }
  });
  map.wrapS = map.wrapT = T.RepeatWrapping;
  map.repeat.set(3, 1);
  return map;
}

export function buildChamber(scene, renderer, accent) {
  const { rt } = studio(renderer);
  scene.environment = rt.texture;
  scene.environmentIntensity = 1.05;
  scene.background = new T.Color(0x20282a);
  scene.fog = new T.FogExp2(0x293034, 0.052);
  const brush = brushed();
  const metal = (color, rough = 0.29, metalness = 0.88, extra = {}) =>
    new T.MeshStandardMaterial({ color, roughness: rough, metalness, ...extra });
  const ink = metal(0x22272a, 0.33),
    body = metal(0x4a5153, 0.31, 0.88, { map: brush }),
    edge = metal(0x98a3a2, 0.21, 0.95, { map: brush });
  const copper = metal(0xd98455, 0.24, 0.9, { map: brush }),
    brass = metal(0xc19a62, 0.21),
    core = metal(0x45332e, 0.36);
  const ceramic = metal(0xddd9c9, 0.24, 0.22),
    black = metal(0x171b1b, 0.57, 0.32),
    dark = metal(0x343c3e, 0.5, 0.65);
  const neon = new T.MeshBasicMaterial({ color: new T.Color(accent).multiplyScalar(1.6) });
  const ivory = new T.MeshBasicMaterial({ color: new T.Color(0xffdda8).multiplyScalar(1.9) });
  const glass = new T.MeshPhysicalMaterial({
    color: 0xa3d4d3,
    metalness: 0.33,
    roughness: 0.12,
    transparent: true,
    opacity: 0.105,
    depthWrite: false,
    side: T.DoubleSide,
    clearcoat: 1,
  });
  const bucket = new T.Group();
  scene.add(bucket);
  const mesh = (geo, mat, x, y, z, parent = bucket) => {
    const m = new T.Mesh(geo, mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  };
  const box = (x, y, z, w, h, d, mat, group) => mesh(new T.BoxGeometry(w, h, d), mat, x, y, z, group);
  const bevel = (x, y, z, w, h, d, r, mat, group) =>
    mesh(new RoundedBoxGeometry(w, h, d, 2, r), mat, x, y, z, group);
  const cyl = (x, y, z, top, base, h, mat, group, n = 112) =>
    mesh(new T.CylinderGeometry(top, base, h, n), mat, x, y, z, group);
  const ring = (r, y, tube, mat, group = bucket, arc = TAU, start = 0) => {
    const m = mesh(
      new T.TorusGeometry(r, tube, 8, Math.max(12, Math.ceil((144 * arc) / TAU)), arc),
      mat,
      0,
      y,
      0,
      group,
    );
    m.rotation.set(-Math.PI / 2, 0, start);
    return m;
  };
  const lathe = (points, mat) =>
    mesh(
      new T.LatheGeometry(
        points.map(([x, y]) => new T.Vector2(x, y)),
        160,
      ),
      mat,
      0,
      0,
      0,
    );
  const floor = metal(0x1a2023, 0.71, 0.21);
  floor.onBeforeCompile = (sh) => {
    sh.vertexShader =
      'varying vec3 floorPoint;\n' +
      sh.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nfloorPoint=position;',
      );
    sh.fragmentShader =
      'varying vec3 floorPoint;\n' +
      sh.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
      float radius=length(floorPoint.xz);
      float contact=smoothstep(2.93,4.06,radius);
      float brushedNoise=fract(sin(dot(floorPoint.xz,vec2(27.17,429.83)))*28314.53);
      diffuseColor.rgb*=mix(.18,.89,contact)*(.83+.23*brushedNoise);`,
      );
    sh.fragmentShader = sh.fragmentShader.replace(
      '#include <opaque_fragment>',
      `outgoingLight*=mix(.18,1.,smoothstep(2.9,3.67,length(floorPoint.xz)));
      #include <opaque_fragment>`,
    );
  };
  box(0, -0.15, 0, 65, 0.2, 65, floor);
  for (let i = -4; i <= 4; i++) {
    box(i * 3, -0.046, 0, 0.013, 0.005, 45, black);
    box(0, -0.046, i * 3, 45, 0.005, 0.013, black);
  }
  const enclosure = new T.Group();
  bucket.add(enclosure);
  const wallCut = new T.Plane(new T.Vector3(0, 0, -1), 4);
  renderer.localClippingEnabled = true;
  // Recessed wall bays are visible behind the instrument and in the live reflection probe.
  for (let i = 0; i < 24; i++) {
    const a = (TAU * i) / 24,
      g = new T.Group();
    g.rotation.y = a;
    enclosure.add(g);
    box(0, 3.3, -8.35, 2.23, 7, 0.22, dark, g);
    box(0, 1.5, -8.19, 1.93, 2.86, 0.1, ink, g);
    box(-0.88, 3.9, -8.15, 0.035, 5.7, 0.035, edge, g);
    for (let j = 0; j < 6; j++) box(0.08, 2.65 + j * 0.105, -8.08, 1.18, 0.032, 0.04, black, g);
    box(0.57, 1.5, -8.1, 0.035, 0.53, 0.035, i % 3 === 0 ? ivory : edge, g);
    if (i % 4 === 1) {
      box(-0.65, 3.82, -8.0, 0.095, 2.45, 0.04, ceramic, g);
      box(-0.65, 3.82, -7.96, 0.045, 2.36, 0.03, ivory, g);
    }
  }
  // Recessed service race, pressure-door framing and ceramic terminal indicators.
  for (let i = 0; i < 12; i++) {
    const a = (i * TAU) / 12,
      g = new T.Group();
    g.rotation.y = a;
    enclosure.add(g);
    bevel(0, 1.04, -7.97, 3.5, 0.16, 0.21, 0.035, body, g);
    box(0, 1.05, -7.85, 2.9, 0.035, 0.035, black, g);
    if (i % 3 !== 1) box(-0.7, 1.05, -7.81, 1.28, 0.026, 0.025, i % 3 === 0 ? neon : ivory, g);
    bevel(0.65, 2.02, -8.04, 0.46, 0.7, 0.12, 0.044, body, g);
    box(0.65, 2.08, -7.96, 0.35, 0.38, 0.04, black, g);
    for (let j = 0; j < 5; j++)
      box(0.55 + j * 0.045, 2.1, -7.928, 0.02, 0.08 + 0.04 * Math.sin(j + i), 0.02, neon, g);
    box(-1.75, 1.87, -8.15, 0.085, 3.82, 0.19, body, g);
    box(-1.71, 1.87, -8.02, 0.02, 3.7, 0.025, edge, g);
  }
  // Open the camera-facing side like an observation window when an orbit or a narrow
  // viewport puts the lens outside the chamber. The probe captures the complete room.
  const wallMaterials = new Map();
  enclosure.traverse((part) => {
    if (!part.isMesh) return;
    const source = part.material;
    if (!wallMaterials.has(source)) {
      const wall = source.clone();
      wall.color = source.color;
      wall.clippingPlanes = [wallCut];
      wallMaterials.set(source, wall);
    }
    part.material = wallMaterials.get(source);
  });
  function faceCamera(camera) {
    wallCut.normal.set(-camera.position.x, 0, -camera.position.z).normalize();
  }
  // A ceiling return coil closes the levitation field above the satellite volume.
  for (let k = 0; k < 7; k++) ring(0.9, 4.77 + 0.052 * k, 0.032, copper);
  ring(0.91, 4.72, 0.063, body);
  ring(0.91, 5.14, 0.072, body);
  ring(0.86, 4.71, 0.015, neon);
  for (let i = 0; i < 4; i++) {
    const g = new T.Group();
    g.rotation.y = (i * Math.PI) / 2;
    bucket.add(g);
    cyl(0, 5.28, 0.88, 0.09, 0.09, 0.33, ceramic, g, 28);
    box(0, 5.46, 1.7, 0.12, 0.13, 1.79, ink, g);
  }
  // Mechanical stack, turned lips, recessed electrical bus and the ribbed base.
  lathe(
    [
      [0, -0.035],
      [2.65, -0.035],
      [2.81, 0.045],
      [2.83, 0.12],
      [2.97, 0.15],
      [3.025, 0.2],
      [3.025, 0.35],
      [2.98, 0.4],
      [2.98, 0.47],
      [3.03, 0.495],
      [3.045, 0.53],
      [3.025, 0.565],
      [2.92, 0.585],
      [2.71, 0.585],
      [2.66, 0.55],
      [0, 0.55],
    ],
    body,
  );
  cyl(0, 0.332, 0, 3.034, 3.034, 0.13, ink);
  ring(3.031, 0.253, 0.015, edge);
  ring(3.035, 0.407, 0.016, edge);
  ring(2.985, 0.485, 0.012, black);
  ring(2.931, 0.578, 0.009, edge);
  for (let i = 0; i < 112; i++) {
    const a = (i * TAU) / 112,
      r = 3.035;
    const m = box(
      r * Math.sin(a),
      0.329,
      r * Math.cos(a),
      0.028,
      0.078,
      0.015,
      i % 7 === 0 ? brass : dark,
    );
    m.rotation.y = a;
  }
  lathe(
    [
      [0, 0.55],
      [1.68, 0.55],
      [1.77, 0.58],
      [1.82, 0.65],
      [1.86, 0.7],
      [1.96, 0.71],
      [2.0, 0.684],
      [2.0, 0.6],
      [2.09, 0.586],
      [2.65, 0.58],
    ],
    edge,
  );
  cyl(0, 0.559, 0, 1.85, 1.72, 0.06, ink);
  ring(1.85, 0.698, 0.033, body);
  ring(1.915, 0.727, 0.018, neon);
  ring(1.96, 0.686, 0.017, black);
  for (const r of [2.06, 2.105, 2.16, 2.21, 2.54, 2.58, 2.68, 2.78])
    ring(r, 0.586, 0.0045, r === 2.16 ? brass : edge);
  const spill = [];
  for (let i = 0; i < 8; i++) {
    const a = (TAU * i) / 8;
    ring(2.855, 0.594, 0.018, black, bucket, 0.28, a + 0.24);
    ring(2.856, 0.608, 0.009, neon, bucket, 0.26, a + 0.25);
    ring(3.043, 0.354, 0.012, neon, bucket, 0.18, a + 0.3);
    const light = new T.PointLight(accent, 0.78, 2.6, 2);
    light.position.set(1.83 * Math.sin(a), 0.89, 1.83 * Math.cos(a));
    scene.add(light);
    spill.push(light);
  }
  // Printed calibration dial with radial tick marks and coil address stamps.
  const dial = canvasMap(1536, 1536, (g, w, h) => {
    g.translate(w / 2, h / 2);
    const unit = w / (2 * 3.08);
    for (let i = 0; i < 192; i++) {
      g.save();
      g.rotate((i * TAU) / 192);
      const major = i % 4 === 0;
      g.fillStyle = major ? '#c6c9bb' : '#747d79';
      g.fillRect(-1, -2.83 * unit, major ? 2.6 : 1.65, major ? 10 : 5);
      g.restore();
    }
    g.textAlign = 'center';
    g.fillStyle = '#c9cabe';
    g.font = 'bold 17px monospace';
    for (let i = 0; i < 8; i++) {
      g.save();
      g.rotate(((i + 0.5) * TAU) / 8);
      g.fillText('EM / 0' + (i + 1), 0, -2.67 * unit);
      g.restore();
    }
  });
  const dialMesh = mesh(
    new T.PlaneGeometry(6.16, 6.16),
    new T.MeshBasicMaterial({
      map: dial,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    }),
    0,
    0.592,
    0,
  );
  dialMesh.rotation.x = -Math.PI / 2;
  const coilTips = [];
  // Each winding is a continuous, slightly pitched copper helix around a ferrite core.
  class Winding extends T.Curve {
    getPoint(t, out = new T.Vector3()) {
      const a = TAU * 12 * t;
      return out.set(0.228 * Math.cos(a), 0.228 * Math.sin(a), -0.345 + 0.69 * t);
    }
  }
  const winding = new T.TubeGeometry(new Winding(), 288, 0.031, 8, false);
  for (let i = 0; i < 8; i++) {
    const a = (TAU * (i + 0.5)) / 8,
      g = new T.Group();
    g.rotation.y = a;
    bucket.add(g);
    bevel(0, 0.662, 2.4, 0.54, 0.145, 1.1, 0.048, ink, g);
    bevel(0, 0.749, 2.39, 0.46, 0.06, 0.95, 0.022, body, g);
    for (const dx of [-0.195, 0.195])
      for (const z of [1.97, 2.83]) {
        cyl(dx, 0.754, z, 0.046, 0.046, 0.036, brass, g, 6);
        box(dx, 0.775, z, 0.048, 0.006, 0.009, ink, g);
      }
    const sol = new T.Group();
    g.add(sol);
    sol.position.set(0, 0.985, 2.4);
    sol.rotation.x = 0.17;
    const along = (z, r, h, mat, n = 44) => {
      const m = cyl(0, 0, z, r, r, h, mat, sol, n);
      m.rotation.x = Math.PI / 2;
      return m;
    };
    along(0, 0.221, 0.85, core);
    mesh(winding, copper, 0, 0, 0, sol);
    for (const side of [-1, 1]) {
      along(side * 0.389, 0.285, 0.067, ink);
      along(side * 0.422, 0.267, 0.026, edge);
      along(side * 0.442, 0.195, 0.035, brass);
    }
    for (let k = 0; k < 3; k++) {
      along(-0.46 - k * 0.068, 0.139, 0.049, ceramic);
      along(-0.495 - k * 0.068, 0.099, 0.04, ceramic);
    }
    along(-0.68, 0.064, 0.15, brass);
    mesh(new T.SphereGeometry(0.067, 16, 12), brass, 0, 0, -0.762, sol);
    for (const side of [-1, 1]) {
      const path = new T.CatmullRomCurve3(
        [
          [0.08, 0.0, 0.48],
          [0.14, -0.02, 0.56],
          [0.3, -0.1, 0.54],
          [0.35, -0.22, 0.42],
          [0.34, -0.28, 0.33],
        ].map(([x, y, z]) => new T.Vector3(side * x, y, z)),
      );
      mesh(new T.TubeGeometry(path, 24, 0.022, 8, false), side > 0 ? black : core, 0, 0, 0, sol);
      along(0.459 + side * 0.006, 0.158, 0.014, copper);
    }
    along(0.49, 0.17, 0.074, black);
    along(0.534, 0.105, 0.025, brass);
    sol.updateWorldMatrix(true, false);
    coilTips.push(sol.localToWorld(new T.Vector3(0, 0, -0.762)));
    for (const side of [-1, 1]) {
      box(side * 0.32, 0.611, 2.35, 0.045, 0.028, 0.47, black, g);
      for (let k = 0; k < 4; k++) box(side * 0.32, 0.63, 2.18 + k * 0.103, 0.031, 0.009, 0.059, neon, g);
    }
    const guard = new T.CylinderGeometry(3.0, 3.0, 0.49, 32, 1, true, a + 0.07, TAU / 8 - 0.14);
    mesh(guard, glass, 0, 0.855, 0);
    ring(3.0, 1.1, 0.01, edge, bucket, TAU / 8 - 0.14, a + 0.07);
    box(0, 0.79, 2.985, 0.069, 0.399, 0.059, body, g);
    box(0, 1.024, 2.985, 0.098, 0.095, 0.076, edge, g);
  }

  // Static hardware is batched by finish so every helical turn can remain geometric.
  bucket.updateMatrixWorld(true);
  const groups = new Map();
  bucket.traverse((o) => {
    if (!o.isMesh) return;
    const geom = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    geom.applyMatrix4(o.matrixWorld);
    if (!groups.has(o.material)) groups.set(o.material, []);
    groups.get(o.material).push(geom);
  });
  scene.remove(bucket);
  for (const [mat, geos] of groups) {
    const merged = mergeGeometries(geos);
    const m = new T.Mesh(merged, mat);
    scene.add(m);
    m.castShadow = !mat.transparent && mat !== floor;
    m.receiveShadow = !mat.transparent;
    geos.forEach((g) => g.dispose());
  }
  const originals = new Set();
  bucket.traverse((o) => {
    if (o.isMesh) originals.add(o.geometry);
  });
  originals.forEach((g) => g.dispose());
  scene.add(new T.HemisphereLight(0xd6e3e7, 0x28211e, 0.49));
  const key = new T.DirectionalLight(0xffe2c5, 2.05);
  key.position.set(-3.5, 7.5, 3.0);
  scene.add(key);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, {
    left: -4.8,
    right: 4.8,
    top: 4.8,
    bottom: -4.8,
    near: 0.3,
    far: 21,
  });
  key.shadow.normalBias = 0.009;
  key.shadow.bias = -0.00022;
  const fill = new T.DirectionalLight(0x91c8d6, 1.3);
  fill.position.set(4, 3, -3.5);
  scene.add(fill);
  const probeTarget = new T.WebGLCubeRenderTarget(384, {
    type: T.HalfFloatType,
    generateMipmaps: true,
    minFilter: T.LinearMipmapLinearFilter,
  });
  const probe = new T.CubeCamera(0.065, 22, probeTarget);
  probe.position.set(0, 1.97, 0);
  // Luminous panels and ceiling, visible to reflected rays without obstructing the orbit camera.
  const cards = new T.Group();
  scene.add(cards);
  const card = (x, y, z, w, h, color) => {
    const mat = new T.ShaderMaterial({
      side: T.DoubleSide,
      transparent: true,
      depthWrite: false,
      uniforms: { tint: { value: color } },
      vertexShader:
        'varying vec2 st;void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:
        'varying vec2 st;uniform vec3 tint;void main(){vec2 e=abs(st-.5)*2.;float k=1.-smoothstep(.62,1.,max(e.x,e.y));gl_FragColor=vec4(tint*(.48+.52*st.y),k);}',
    });
    const m = new T.Mesh(new T.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z);
    m.lookAt(0, 1.8, 0);
    cards.add(m);
  };
  const light = (r, g, b) => new T.Color().setRGB(r, g, b);
  card(-3.8, 4.1, 2.3, 3.15, 2.35, light(5.3, 5.5, 5.6));
  card(3.6, 3.5, -2.3, 2.4, 2.5, light(3.6, 4.1, 4.5));
  card(-1.4, 2.65, -4, 3.15, 0.19, light(3.3, 2.8, 2.4));
  card(3.5, 1.9, 2, 0.15, 1.9, light(2.9, 3.1, 3.1));
  card(-3.4, 1.3, -2, 0.23, 1.75, light(2.2, 0.95, 0.42));
  card(1.1, 4.75, 0.12, 0.28, 3.2, light(2.5, 3.05, 3.3));
  card(-1.22, 4.8, -0.2, 0.2, 2.75, light(1.65, 1.86, 1.98));
  function updateProbe(color) {
    spill.forEach((l) => l.color.set(color));
    neon.color.set(color).multiplyScalar(1.65);
    cards.visible = true;
    scene.background = new T.Color(0x1c2529);
    const fog = scene.fog;
    scene.fog = null;
    wallCut.constant = 100;
    probe.update(renderer, scene);
    wallCut.constant = 4;
    scene.fog = fog;
    scene.background = new T.Color(0x20282a);
    cards.visible = false;
  }
  updateProbe(accent);
  return { reflection: probeTarget.texture, coilTips, updateProbe, faceCamera };
}
