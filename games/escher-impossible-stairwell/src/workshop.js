import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
export const TAU = Math.PI * 2;
export const P = {
  wall: 0xc1917c,
  pale: 0xdfbe98,
  cream: 0xf3d9ab,
  rose: 0xab7265,
  red: 0x984c43,
  umber: 0x784e44,
  shadow: 0x423d49,
  slate: 0x344853,
  abyss: 0x263840,
  blue: 0x355f65,
  teal: 0x397d7b,
  tile: 0x5ca69a,
  brass: 0xc49a59,
  gold: 0xf4c679,
  iron: 0x493f42,
  black: 0x272f35,
  pine: 0x27584e,
  jade: 0x488267,
};
let seed = 18913;
export function rand() {
  seed = (1664525 * seed + 1013904223) >>> 0;
  return seed / 4294967296;
}
export function tint(hex, amount = 0.09) {
  return new T.Color(hex).multiplyScalar(1 + (rand() - 0.5) * amount);
}
const cube = new T.BoxGeometry(),
  solids = new Map();
const up = V(0, 1, 0);
export function group(parent, x = 0, y = 0, z = 0, ry = 0) {
  const g = new T.Group();
  parent.add(g);
  g.position.set(x, y, z);
  g.rotation.y = ry;
  return g;
}
const marker = new T.MeshBasicMaterial();
export function part(
  parent,
  geometry,
  col,
  x = 0,
  y = 0,
  z = 0,
  scale = [1, 1, 1],
  kind = 'surface',
) {
  const m = new T.Mesh(geometry, marker);
  m.position.set(x, y, z);
  m.scale.set(...scale);
  m.userData = { col, kind };
  parent.add(m);
  return m;
}
export function box(g, x, y, z, w, h, d, c, kind) {
  return part(g, cube, c, x, y, z, [w, h, d], kind);
}
export function cyl(g, x, y, z, rt, rb, h, c, n = 16, kind) {
  const key = [rt, rb, h, n].join();
  if (!solids.has(key)) solids.set(key, new T.CylinderGeometry(rt, rb, h, n));
  return part(g, solids.get(key), c, x, y, z, [1, 1, 1], kind);
}
export function beam(g, a, b, r, c, n = 8) {
  const dir = b.clone().sub(a),
    m = cyl(g, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2, r, r, dir.length(), c, n);
  m.quaternion.setFromUnitVectors(up, dir.normalize());
  return m;
}
export function torus(g, x, y, z, r, t, c, n = 48, kind) {
  return part(g, new T.TorusGeometry(r, t, 6, n), c, x, y, z, [1, 1, 1], kind);
}
export function extrude(shape, depth) {
  const geo = new T.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 18 });
  return geo.translate(0, 0, -depth / 2);
}
export function poly(g, points, depth, col, x = 0, y = 0, z = 0, kind = 'surface') {
  const s = new T.Shape(points.map(([a, b]) => new T.Vector2(a, b)));
  return part(g, extrude(s, depth), col, x, y, z, [1, 1, 1], kind);
}
export function materials() {
  const surface = new T.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.84,
    metalness: 0.06,
  });
  const noise = new Uint8Array(128 * 128 * 4);
  for (let i = 0; i < noise.length; i += 4) {
    const v = Math.floor(rand() * 255);
    noise.set([v, v, v, 255], i);
  }
  const grain = new T.DataTexture(noise, 128, 128);
  grain.wrapS = grain.wrapT = T.RepeatWrapping;
  grain.magFilter = T.LinearFilter;
  grain.minFilter = T.LinearMipMapLinearFilter;
  grain.generateMipmaps = true;
  grain.needsUpdate = true;
  surface.onBeforeCompile = (shader) => {
    shader.uniforms.stoneNoise = { value: grain };
    shader.vertexShader =
      'attribute float alloy;varying float vAlloy;attribute float coursed; varying float vCourses; varying vec3 vStone; varying vec3 vFace;\n' +
      shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      '#include <begin_vertex>\nvStone=position;vFace=normal;vCourses=coursed;vAlloy=alloy;',
    );
    shader.fragmentShader =
      'varying float vAlloy;uniform sampler2D stoneNoise; varying vec3 vStone; varying vec3 vFace; varying float vCourses;\n' +
      shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
      vec3 n=abs(normalize(vFace)); vec2 uv=n.y>.76?vStone.xz:(n.z>n.x?vStone.xy:vStone.zy);
      float grain=texture2D(stoneNoise,uv*.66).r-.5;
      vec2 cell=uv/vec2(.78,.32); cell.x+=mod(floor(cell.y),2.)*.5;
      vec2 joints=min(fract(cell),1.-fract(cell)); vec2 aa=max(fwidth(cell),vec2(.001));
      float seam=1.-min(smoothstep(0.,aa.x+.012,joints.x),smoothstep(0.,aa.y+.018,joints.y));
      float block=texture2D(stoneNoise,(floor(cell)+.5)/128.).r-.5;
      float vein=texture2D(stoneNoise,uv*.043+vStone.yy*.016).r-.5;
      diffuseColor.rgb*=1.+grain*.15+vein*.12+vCourses*(block*.14-seam*.155);
      diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.78,1.12,1.08),vAlloy*smoothstep(.08,.40,vein)*.57);
    `,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <metalnessmap_fragment>',
      '#include <metalnessmap_fragment>\nmetalnessFactor=mix(metalnessFactor,.60,vAlloy);',
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <roughnessmap_fragment>',
      '#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.39,vAlloy);',
    );
  };
  return {
    surface,
    glow: new T.MeshBasicMaterial({ vertexColors: true, toneMapped: false, side: T.DoubleSide }),
  };
}
export function bake(root, mats) {
  root.updateMatrixWorld(true);
  const inverse = root.matrixWorld.clone().invert(),
    bins = {};
  root.traverse((o) => {
    if (!o.isMesh) return;
    const { col, kind } = o.userData;
    const k = kind === 'glow' ? 'glow' : 'surface';
    const geo = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    geo.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse, o.matrixWorld));
    for (const key of Object.keys(geo.attributes))
      if (!['position', 'normal'].includes(key)) geo.deleteAttribute(key);
    const color = new T.Color(col),
      n = geo.attributes.position.count,
      colors = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) color.toArray(colors, i * 3);
    geo.setAttribute('color', new T.BufferAttribute(colors, 3));
    geo.setAttribute(
      'alloy',
      new T.BufferAttribute(
        new Float32Array(n).fill(
          kind === 'copper' || [P.brass, P.gold, P.teal, P.tile].includes(col) ? 1 : 0,
        ),
        1,
      ),
    );
    geo.setAttribute(
      'coursed',
      new T.BufferAttribute(new Float32Array(n).fill(kind === 'stone' ? 1 : 0), 1),
    );
    (bins[k] ??= []).push(geo);
  });
  const result = new T.Group();
  for (const [key, list] of Object.entries(bins)) {
    const mesh = new T.Mesh(mergeGeometries(list), mats[key]);
    mesh.castShadow = mesh.receiveShadow = key === 'surface';
    result.add(mesh);
    list.forEach((g) => g.dispose());
  }
  return result;
}
