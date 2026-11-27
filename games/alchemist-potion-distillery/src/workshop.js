import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const world = new T.Scene(),
  glassWorld = new T.Scene();
export const statics = new T.Group();
world.add(statics);
export const V = (x, y, z) => new T.Vector3(x, y, z);
export const tau = Math.PI * 2;
let seed = 0x4ab1cf0;
export function rand() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
}
export const clock = { value: 0 },
  glow = { value: 1 },
  reaction = { value: -100 },
  phase = { value: 0 };
const loader = new T.TextureLoader();
export async function loadMap(path, color = true) {
  const tex = await loader.loadAsync('./assets/' + path);
  if (color) tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
export function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
export function obj(geometry, material, x = 0, y = 0, z = 0, parent = statics) {
  const m = new T.Mesh(geometry, material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
export function group(x = 0, y = 0, z = 0, parent = statics) {
  const g = new T.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
const boxGeo = new T.BoxGeometry(),
  sphereGeo = new T.SphereGeometry(1, 32, 20);
export function box(x, y, z, w, h, d, m, p) {
  const o = obj(boxGeo, m, x, y, z, p);
  o.scale.set(w, h, d);
  return o;
}
export function ball(x, y, z, w, h, d, m, p) {
  const o = obj(sphereGeo, m, x, y, z, p);
  o.scale.set(w, h, d);
  return o;
}
export function cyl(x, y, z, rt, rb, h, m, p, n = 40) {
  return obj(new T.CylinderGeometry(rt, rb, h, n), m, x, y, z, p);
}
export function lathe(x, y, z, profile, mat, p = statics, segments = 80) {
  return obj(
    new T.LatheGeometry(
      profile.map(([r, h]) => new T.Vector2(r, h)),
      segments,
    ),
    mat,
    x,
    y,
    z,
    p,
  );
}
export function ring(x, y, z, r, wire, m, p = statics, n = 64) {
  const o = obj(new T.TorusGeometry(r, wire, 8, n), m, x, y, z, p);
  o.rotation.x = Math.PI / 2;
  return o;
}
export function rod(a, b, r, m, p = statics, r2 = r, n = 12) {
  a = Array.isArray(a) ? V(...a) : a;
  b = Array.isArray(b) ? V(...b) : b;
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const o = cyl(mid.x, mid.y, mid.z, r2, r, a.distanceTo(b), m, p, n);
  o.quaternion.setFromUnitVectors(V(0, 1, 0), b.clone().sub(a).normalize());
  return o;
}
export function curve(points) {
  return new T.CatmullRomCurve3(points.map((p) => (Array.isArray(p) ? V(...p) : p)));
}
export function tube(path, r, m, p = statics, steps = 70, sides = 12) {
  return obj(
    new T.TubeGeometry(Array.isArray(path) ? curve(path) : path, steps, r, sides, false),
    m,
    0,
    0,
    0,
    p,
  );
}
export function solid(color, metalness = 0, roughness = 0.55, opts = {}) {
  return new T.MeshStandardMaterial({ color, metalness, roughness, ...opts });
}
export const mat = {
  brass: solid(0xac7533, 0.84, 0.27),
  gold: solid(0xe8b86b, 0.87, 0.21),
  bronze: solid(0x65432a, 0.77, 0.36),
  aged: solid(0x494a36, 0.68, 0.55),
  iron: solid(0x303b3a, 0.73, 0.38),
  copper: solid(0xc47a4b, 0.79, 0.26),
  bone: solid(0xd9c7a7, 0.03, 0.61),
  wax: solid(0xe3c28b, 0.04, 0.47),
  wick: solid(0x211b13, 0.05, 0.9),
  stone: solid(0x5b5551, 0.12, 0.79),
};
let caustic;
export function project(m) {
  const previous = m.onBeforeCompile;
  m.onBeforeCompile = function (s, ...rest) {
    previous.call(this, s, ...rest);
    Object.assign(s.uniforms, {
      uLightNet: { value: caustic },
      uGlow: glow,
      uT: phase,
      uPulse: reaction,
    });
    s.vertexShader =
      'varying vec3 lightPosition;\n' +
      s.vertexShader.replace(
        '#include <project_vertex>',
        '#include <project_vertex>\nlightPosition=(modelMatrix*vec4(transformed,1.)).xyz;',
      );
    s.fragmentShader =
      'uniform sampler2D uLightNet;uniform float uT,uGlow,uPulse;varying vec3 lightPosition;\n' +
      s.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
      vec3 p=lightPosition;
      vec2 q=p.xz+vec2(p.y*.27,p.y*.53);
      float a=texture2D(uLightNet,q*vec2(.73,.96)+vec2(.015,.009)*uT).r;
      float b=texture2D(uLightNet,q*1.32+vec2(-.011,.008)*uT).r;
      float lines=pow(max(a,b*.84),1.65);
      vec2 g=q-vec2(-2.,.25), c=q-vec2(.48,.28), v=q-vec2(2.45,-.4), w=q-vec2(-.95,1.15);
      vec3 pools=vec3(.018,1.18,.39)*exp(-dot(g,g)*.86)+vec3(.015,.48,1.75)*exp(-dot(c,c)*.94)+vec3(.62,.14,1.05)*exp(-dot(v,v)*1.2)+vec3(.94,.48,.055)*exp(-dot(w,w)*1.45);
      float pulse=exp(-7.*abs(.5+.12*p.x-uPulse*.24));
      outgoingLight+=(lines*.61+.010)*pools*uGlow*exp(-max(0.,p.y)*1.40)+vec3(1.,.55,.12)*lines*pulse*uGlow;
      #include <opaque_fragment>`,
      );
  };
  m.customProgramCacheKey = () => 'benchCaustics';
  return m;
}
export async function finishes() {
  const [oak, wall, net, patina] = await Promise.all([
    loadMap('oak.webp'),
    loadMap('alcove.webp'),
    loadMap('caustic.png', false),
    loadMap('patina.webp'),
  ]);
  caustic = net;
  net.wrapS = net.wrapT = T.RepeatWrapping;
  patina.wrapS = patina.wrapT = T.RepeatWrapping;
  const polished = canvasTexture(1024, 768, (g, w, h) => {
    g.drawImage(patina.image, 0, 0, w, h);
    g.globalCompositeOperation = 'screen';
    g.fillStyle = '#aa9668';
    g.fillRect(0, 0, w, h);
  });
  const rough = canvasTexture(512, 512, (g, w, h) => {
    g.filter = 'grayscale(1) contrast(1.8) invert(1)';
    g.drawImage(patina.image, 0, 0, w, h);
  });
  rough.colorSpace = T.NoColorSpace;
  for (const name of ['brass', 'gold', 'bronze', 'copper', 'iron', 'aged']) {
    const m = mat[name];
    m.map = polished;
    m.roughnessMap = rough;
    m.bumpMap = patina;
    m.bumpScale = 0.0034;
    m.color.set(
      {
        brass: 0xe1ca96,
        gold: 0xffe9a6,
        copper: 0xf3b193,
        bronze: 0xab927e,
        aged: 0x929f95,
        iron: 0x647379,
      }[name],
    );
    m.roughness = name === 'gold' ? 0.28 : 0.44;
  }
  const grunge = patina.clone();
  grunge.colorSpace = T.NoColorSpace;
  for (const name of ['wax', 'bone', 'stone']) {
    const m = mat[name];
    m.bumpMap = grunge;
    m.bumpScale = name === 'stone' ? 0.032 : 0.009;
  }
  mat.bone.map = canvasTexture(512, 512, (g, w, h) => {
    g.drawImage(patina.image, 0, 0, w, h);
    g.globalCompositeOperation = 'screen';
    g.fillStyle = '#a39278';
    g.fillRect(0, 0, w, h);
  });
  mat.stone.map = grunge;
  Object.values(mat).forEach(project);
  mat.oaks = [];
  for (let i = 0; i < 7; i++) {
    const map = oak.clone();
    map.offset.set((i % 2) * 0.08, i * 0.137);
    map.repeat.set(0.9, 0.142);
    map.wrapT = T.RepeatWrapping;
    mat.oaks.push(project(solid(0x9d8573, 0.019, 0.74, { map, bumpMap: map, bumpScale: 0.018 })));
  }
  mat.paper = project(solid(0xc4a471, 0, 0.88));
  return wall;
}
// A calibrated lat-long lighting map. The leading divides the cold window into
// individual panes, giving curved glass and polished brass distinct reflections.
export function lightMap(renderer, wall) {
  const w = 512,
    h = 256,
    data = new Float32Array(w * h * 4);
  const c = document.createElement('canvas');
  c.width = 768;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.drawImage(wall.image, 0, 0, 768, 512);
  const pixels = ctx.getImageData(0, 0, 768, 512).data;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const u = x / w,
        v = y / h;
      const i = 4 * (y * w + x);
      const sx = Math.floor(((u * 2.35) % 1) * 767),
        sy = Math.min(511, Math.floor((1 - v) * 511));
      const ix = 4 * (sy * 768 + sx),
        sR = pixels[ix] / 255,
        sG = pixels[ix + 1] / 255,
        sB = pixels[ix + 2] / 255;
      let r = 0.012 + 0.75 * sR * sR,
        g = 0.014 + 0.7 * sG * sG,
        b = 0.019 + 0.72 * sB * sB;
      function strip(cx, cy, wx, hy, R, G, B, leaded = false) {
        const dx = Math.min(Math.abs(u - cx), 1 - Math.abs(u - cx)) / wx,
          dy = Math.abs(v - cy) / hy;
        const f = Math.max(0, Math.min(1, (1 - dx) * 2.3, (1 - dy) * 3.1));
        const mull =
          leaded && ((u * 98 + v * 36) % 1 < 0.11 || (u * 98 - v * 36 + 100) % 1 < 0.11) ? 0.18 : 1;
        const intensity = f * f * mull * (0.4 + 0.75 * v) * (0.69 + 0.4 * (sR + sG + sB));
        r += R * intensity;
        g += G * intensity;
        b += B * intensity;
      }
      strip(0.21, 0.6, 0.032, 0.205, 1.8, 3.4, 4.5, true);
      strip(0.73, 0.62, 0.012, 0.2, 2.6, 2.05, 1.1);
      strip(0.925, 0.69, 0.008, 0.18, 2.4, 2.74, 3.26);
      strip(0.48, 0.72, 0.052, 0.073, 0.76, 0.85, 0.97);
      for (const [cx, cy] of [
        [0.84, 0.46],
        [0.79, 0.41],
        [0.62, 0.43],
        [0.14, 0.46],
        [0.065, 0.42],
      ]) {
        const f = Math.exp(-((u - cx) ** 2 * 33000 + (v - cy) ** 2 * 1850));
        r += 10 * f;
        g += 4.5 * f;
        b += 1.1 * f;
      }
      data.set([r, g, b, 1], i);
    }
  const env = new T.DataTexture(data, w, h, T.RGBAFormat, T.FloatType);
  env.mapping = T.EquirectangularReflectionMapping;
  env.minFilter = env.magFilter = T.LinearFilter;
  env.wrapS = T.RepeatWrapping;
  env.needsUpdate = true;
  const pmrem = new T.PMREMGenerator(renderer);
  world.environment = pmrem.fromEquirectangular(env).texture;
  pmrem.dispose();
  world.environmentIntensity = 0.92;
  return env;
}
export function batch() {
  statics.updateWorldMatrix(true, true);
  const mats = new Map();
  statics.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (!mats.has(o.material)) mats.set(o.material, []);
    mats.get(o.material).push(g);
  });
  world.remove(statics);
  for (const [m, geos] of mats) {
    const g = mergeGeometries(geos);
    g.computeBoundingSphere();
    const mesh = new T.Mesh(g, m);
    mesh.castShadow = mesh.receiveShadow = !!m.isMeshStandardMaterial;
    world.add(mesh);
    geos.forEach((geo) => geo.dispose());
  }
}
