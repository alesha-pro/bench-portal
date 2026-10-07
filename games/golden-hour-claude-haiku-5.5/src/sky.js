// Golden-hour sky dome, HDR sun disc, drifting cloud deck, the environment map used for reflections,
// and the distant city silhouette below and around the rooftop.
import * as THREE from 'three';
import { seededRandom } from './utils.js';

// Direction toward the sun (about 13 degrees above the horizon, low in the west-south-west).
export const SUN_DIR = new THREE.Vector3(-0.62, 0.22, -0.75).normalize();
export const SUN_COLOR = new THREE.Color(1.0, 0.7, 0.42);
export const HORIZON_COLOR = new THREE.Color(1.0, 0.55, 0.3);
export const AMBIENT_SKY = new THREE.Color(0.42, 0.44, 0.58);

const SKY_VS = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SKY_FS = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uZenith;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform float uTime;
varying vec3 vDir;

float h21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = h21(i), b = h21(i + vec2(1.0, 0.0)), c = h21(i + vec2(0.0, 1.0)), d = h21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(17.1, 9.2);
    a *= 0.5;
  }
  return s;
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.16, h));
  col = mix(col, uZenith, smoothstep(0.12, 0.7, h));
  col = mix(col, uHorizon * 0.22, smoothstep(0.0, -0.12, h));

  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunCol * (pow(sd, 5.0) * 0.45 + pow(sd, 36.0) * 1.1 + pow(sd, 260.0) * 2.4);
  float disc = smoothstep(0.99972, 0.99988, sd);
  col += uSunCol * disc * 40.0;

  // Clouds: a high deck of stratus with sunlit undersides near the sun.
  if (h > 0.015) {
    vec2 p = d.xz / (h + 0.12) * 1.4;
    p += vec2(uTime * 0.012, uTime * 0.004);
    float c = fbm(p);
    float cover = smoothstep(0.52, 0.86, c) * smoothstep(0.015, 0.22, h);
    float sunLit = pow(sd, 3.0) * 1.2 + 0.25;
    vec3 cloudCol = mix(uMid * 0.9, uHorizon * 1.25, 0.45) * sunLit + uSunCol * pow(sd, 10.0) * 0.8;
    col = mix(col, cloudCol, cover * 0.75);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

export function createSky(scene, renderer) {
  const material = new THREE.ShaderMaterial({
    vertexShader: SKY_VS,
    fragmentShader: SKY_FS,
    uniforms: {
      uSunDir: { value: SUN_DIR.clone() },
      uSunCol: { value: SUN_COLOR.clone() },
      uZenith: { value: new THREE.Color(0.08, 0.1, 0.24) },
      uMid: { value: new THREE.Color(0.42, 0.3, 0.36) },
      uHorizon: { value: HORIZON_COLOR.clone() },
      uTime: { value: 0 },
    },
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const geometry = new THREE.SphereGeometry(1000, 48, 24);
  const sky = new THREE.Mesh(geometry, material);
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  sky.name = 'sky';
  scene.add(sky);

  // Environment map from the same dome, so metal and glass reflect the actual sunset.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(geometry, material));
  const envTarget = pmrem.fromScene(envScene, 0.0, 1, 2000);
  pmrem.dispose();
  scene.environment = envTarget.texture;

  return {
    sky,
    material,
    update(camera, time) {
      sky.position.copy(camera.position);
      material.uniforms.uTime.value = time;
    },
  };
}

// Distant city: dark silhouettes on a street plane far below the rooftop.
export function createCity(scene, textures) {
  const rand = seededRandom(7741);
  const count = 240;
  const geo = new THREE.BoxGeometry(1, 1, 1);
  // Vertex colour multiplies the base colour so the blocks vary subtly.
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: true });
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.frustumCulled = false;
  mesh.name = 'city';
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const street = -190;
  for (let i = 0; i < count; i++) {
    const a = rand() * Math.PI * 2;
    const dist = 420 + Math.pow(rand(), 0.7) * 900;
    const x = Math.cos(a) * dist;
    const z = Math.sin(a) * dist;
    const tower = rand() < 0.18;
    const h = tower ? 260 + rand() * 260 : 40 + rand() * 170;
    const w = tower ? 30 + rand() * 40 : 18 + rand() * 44;
    const d = tower ? 30 + rand() * 40 : 18 + rand() * 40;
    dummy.position.set(x, street + h / 2, z);
    dummy.scale.set(w, h, d);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    const v = 0.07 + rand() * 0.05;
    color.setRGB(v * 1.05, v, v * 1.2);
    mesh.setColorAt(i, color);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  scene.add(mesh);

  // Street plane: asphalt with distance fog, visible only when looking over the parapet.
  const streetTex = textures.asphalt.map.clone();
  streetTex.needsUpdate = true;
  streetTex.repeat.set(160, 160);
  const streetMat = new THREE.MeshStandardMaterial({
    map: streetTex,
    roughness: 0.92,
    metalness: 0,
    color: 0x6a6670,
  });
  const streetMesh = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), streetMat);
  streetMesh.rotation.x = -Math.PI / 2;
  streetMesh.position.y = street;
  streetMesh.receiveShadow = false;
  streetMesh.name = 'street';
  scene.add(streetMesh);

  // A tower crane silhouette, far away on the skyline.
  const craneMat = new THREE.MeshBasicMaterial({ color: 0x17161c, fog: true });
  const crane = new THREE.Group();
  const mast = new THREE.Mesh(new THREE.BoxGeometry(3, 230, 3), craneMat);
  mast.position.y = 115;
  const jib = new THREE.Mesh(new THREE.BoxGeometry(150, 2.5, 3), craneMat);
  jib.position.set(-30, 226, 0);
  const counter = new THREE.Mesh(new THREE.BoxGeometry(36, 2.5, 3), craneMat);
  counter.position.set(42, 226, 0);
  const block = new THREE.Mesh(new THREE.BoxGeometry(12, 9, 9), craneMat);
  block.position.set(42, 220, 0);
  crane.add(mast, jib, counter, block);
  crane.position.set(-520, street, 610);
  crane.rotation.y = 0.8;
  scene.add(crane);

  return { mesh, crane };
}
