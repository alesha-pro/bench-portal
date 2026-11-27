import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const TAU = Math.PI * 2;
export const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
export function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let n = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n;
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}
export function group(parent, pos = [0, 0, 0]) {
  const g = new T.Group();
  parent.add(g);
  g.position.set(...pos);
  return g;
}
export function mesh(parent, geo, mat, pos = [0, 0, 0]) {
  const m = new T.Mesh(geo, mat);
  parent.add(m);
  m.position.set(...pos);
  return m;
}
export function ball(parent, mat, pos, scale, seg = 24) {
  const m = mesh(parent, new T.SphereGeometry(1, seg, Math.max(8, seg / 2)), mat, pos);
  m.scale.set(...scale);
  return m;
}
export function rod(parent, mat, a, b, r, tip = r, sides = 12) {
  const d = V(...b).sub(V(...a));
  const m = mesh(parent, new T.CylinderGeometry(tip, r, d.length(), sides), mat);
  m.position.copy(V(...a).addScaledVector(d, 0.5));
  m.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
  return m;
}
export function pipe(parent, mat, pts, r, sides = 8, steps = 32) {
  const curve = new T.CatmullRomCurve3(pts.map((p) => V(...p)));
  return mesh(parent, new T.TubeGeometry(curve, steps, r, sides, false), mat);
}
export function hoop(parent, mat, pos, r, t, segments = 64) {
  return mesh(parent, new T.TorusGeometry(r, t, 8, segments), mat, pos);
}
export function box(parent, mat, pos, scale) {
  return mesh(parent, new T.BoxGeometry(...scale), mat, pos);
}
// Collapse fixed parts into one draw per material, preserving nested assembly transforms.
export function bake(root) {
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert(),
    batches = new Map();
  root.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse, o.matrixWorld));
    if (!batches.has(o.material)) batches.set(o.material, []);
    batches.get(o.material).push(g);
  });
  root.clear();
  for (const [mat, geos] of batches) {
    const g = mergeGeometries(geos);
    mesh(root, g, mat);
    geos.forEach((x) => x.dispose());
  }
}
export const std = (color, metalness = 0.1, roughness = 0.58, extra = {}) =>
  new T.MeshStandardMaterial({ color, metalness, roughness, ...extra });
export const basic = (color, power = 1) =>
  new T.MeshBasicMaterial({ color: new T.Color(color).multiplyScalar(power) });
export function painted(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
export const u = {
  time: { value: 0 },
  pulse: { value: 1 },
  radius: { value: -100 },
  origin: { value: V() },
  lampA: { value: V() },
  lampB: { value: V() },
  axisA: { value: V() },
  axisB: { value: V() },
  strength: { value: 1 },
};
export const noiseGL = `
float hash31(vec3 p) {
  p=fract(p*0.1031); p+=dot(p,p.yzx+33.33); return fract((p.x+p.y)*p.z);
}
float nv(vec3 p) {
  vec3 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  vec2 e=vec2(0,1);
  return mix(mix(mix(hash31(i),hash31(i+e.yxx),f.x),mix(hash31(i+e.xyx),hash31(i+e.yyx),f.x),f.y),
    mix(mix(hash31(i+e.xxy),hash31(i+e.yxy),f.x),mix(hash31(i+e.xyy),hash31(i+1.),f.x),f.y),f.z);
}
float fb(vec3 p) { return .55*nv(p)+.27*nv(p*2.13+7.)+.13*nv(p*4.45)+.05*nv(p*9.2); }`;
export function metal(color, type = 'bronze') {
  const m = std(color, type === 'iron' ? 0.73 : 0.78, type === 'bright' ? 0.31 : 0.46);
  m.onBeforeCompile = (s) => {
    s.vertexShader =
      'varying vec3 finishP;\n' +
      s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nfinishP=position;');
    s.fragmentShader =
      'varying vec3 finishP;\n' +
      noiseGL +
      '\n' +
      s.fragmentShader
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
        vec3 p=finishP;
        float salt=fb(p*6.3+2.)+.13*nv(p*110.);
        float pits=smoothstep(.52,.73,salt);
        float abrasion=nv(p*vec3(60.,190.,72.));
        diffuseColor.rgb *= .63+.61*fb(p*24.)+.25*abrasion;
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.033,.14,.115),pits*${type === 'bright' ? '.32' : '.76'});
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.18,.06,.021),smoothstep(.65,.81,salt)*.87);
      `
        )
        .replace(
          '#include <roughnessmap_fragment>',
          '#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+.35*pits-.14*abrasion,.16,.93);'
        )
        .replace(
          '#include <normal_fragment_maps>',
          `#include <normal_fragment_maps>
        float h=.00028*nv(finishP*135.)+.00084*fb(finishP*47.);
        vec3 r1=cross(dFdy(-vViewPosition),normal),r2=cross(normal,dFdx(-vViewPosition));
        float det=dot(dFdx(-vViewPosition),r1);
        normal=normalize(abs(det)*normal-sign(det)*(dFdx(h)*r1+dFdy(h)*r2));
      `
        );
  };
  m.customProgramCacheKey = () => type;
  return m;
}
export function environment(scene, renderer) {
  const w = 256,
    h = 128,
    data = new Float32Array(w * h * 4);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const a = ((x + 0.5) / w) * TAU - Math.PI,
        b = ((y + 0.5) / h - 0.5) * Math.PI;
      const patch = (az, el, sx, sy) =>
        Math.exp(-(1 - Math.cos(a - az)) * sx - Math.pow((b - el) / sy, 2));
      const sky = 0.05 + 0.24 * Math.max(0, Math.sin(b));
      const soft = patch(1.65, 0.64, 5, 0.43) * 3.5,
        edge = patch(-2.4, 0.27, 13, 0.28) * 3;
      const brass = patch(-0.05, 0.2, 8, 0.48) * 2.5,
        low = patch(2.3, -0.75, 6, 0.16) * 0.45;
      data.set(
        [
          sky * 0.13 + soft * 0.76 + edge * 0.09 + brass + low,
          sky * 0.59 + soft * 0.93 + edge * 0.88 + brass * 0.51 + low * 0.37,
          sky + soft + edge + brass * 0.25 + low * 0.11,
          1,
        ],
        (y * w + x) * 4
      );
    }
  const tex = new T.DataTexture(data, w, h, T.RGBAFormat, T.FloatType);
  tex.mapping = T.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  const pm = new T.PMREMGenerator(renderer);
  const env = pm.fromEquirectangular(tex);
  scene.environment = env.texture;
  scene.environmentIntensity = 0.68;
  pm.dispose();
  tex.dispose();
}
