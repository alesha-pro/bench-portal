import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { group, box, batch, wood, iron, wire, shadow } from './craft.js';
import { monitor, vcr, arcade } from './hardware.js';
import { buildRoom, deskLamp, lava } from './atmosphere.js';
import { populate, receiver } from './props.js';
import { zapTime, setSignals } from './tubes.js';

const $ = (id) => document.getElementById(id),
  params = new URLSearchParams(location.search);
const film = params.has('film'),
  capture = params.has('capture');
if (film) document.body.classList.add('film');
const canvas = $('room'),
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    preserveDrawingBuffer: capture,
    powerPreference: 'high-performance',
  });
renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.6));
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.88;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
const scene = new T.Scene();
scene.background = new T.Color('#282330');
scene.fog = new T.FogExp2('#312835', 0.027);
const camera = new T.PerspectiveCamera(34, 1, 0.045, 60);
const pmrem = new T.PMREMGenerator(renderer),
  studio = new RoomEnvironment(),
  env = pmrem.fromScene(studio, 0.04);
scene.environment = env.texture;
scene.environmentIntensity = 0.135;
studio.dispose();
pmrem.dispose();
const set = group(scene);
const win = buildRoom(set);
const table = 0.959;
receiver(set, -0.36, table, -0.19, 1.29);
const deck = vcr(set, -3.22, table, 0.86);
deck.scale.setScalar(0.77);
deck.rotation.y = 0.042;
deck.position.y = table + 0.168 * 0.77;
monitor(set, { x: -0.36, y: 1.31, z: -0.39, w: 2.66, h: 1.84, d: 1.27, style: 0, id: 0 });
monitor(set, { x: -0.52, y: 3.18, z: -0.57, w: 1.77, h: 1.28, d: 1.02, style: 1, id: 1, turn: 0.06 });
monitor(set, { x: -2.54, y: table, z: -0.35, w: 1.55, h: 1.19, d: 1.04, style: 4, id: 3, turn: 0.13 });
monitor(set, { x: -2.53, y: 2.17, z: -0.47, w: 1.38, h: 1.04, d: 0.98, style: 2, id: 4, turn: 0.105 });
monitor(set, { x: 1.84, y: table, z: -0.35, w: 1.59, h: 1.21, d: 1.06, style: 5, id: 6, turn: -0.082 });
monitor(set, { x: 1.79, y: 2.19, z: -0.48, w: 1.45, h: 1.17, d: 1.02, style: 3, id: 5, turn: -0.08 });
arcade(set, 3.67, table, -0.05);
deskLamp(set, -4.68, table, 0.64);
populate(set);
// Small shelf at the window end gives the wax lamp a visible silhouette.
box(set, -4.55, 2.34, -1.28, 1.02, 0.063, 0.58, wood, 0.016);
for (let x of [-4.89, -4.21])
  wire(
    set,
    [
      [x, 2.1, -1.64],
      [x, 2.37, -1.06],
      [x, 2.37, -1.64],
    ],
    0.018,
    iron,
    6,
    false,
  );
const wax = lava(set, -4.55, 2.38, -1.32);
for (let [x, s] of [
  [-2.55, 1.55],
  [-0.36, 2.7],
  [1.84, 1.6],
  [3.68, 1.2],
])
  shadow(set, x, table + 0.001, -0.1, s * 1.3, 1.56);
batch(set);
set.traverse((m) => {
  if (m.isMesh && !m.material.transparent) {
    m.castShadow = !m.material.isShaderMaterial;
    m.receiveShadow = true;
  }
});
const hemi = new T.HemisphereLight('#949fbb', '#796079', 0.34);
scene.add(hemi);
function point(x, y, z, color, intensity, distance = 0) {
  let l = new T.PointLight(color, intensity, distance, 2);
  l.position.set(x, y, z);
  scene.add(l);
  return l;
}
const key = new T.DirectionalLight('#a3aecb', 0.38);
key.position.set(-4.8, 5.6, 0.5);
key.target.position.set(0, 1.8, -0.32);
scene.add(key, key.target);
key.castShadow = true;
Object.assign(key.shadow.camera, { left: -7, right: 7, top: 5, bottom: -5, near: 0.1, far: 19 });
key.shadow.mapSize.set(2048, 2048);
key.shadow.bias = -0.00044;
key.shadow.normalBias = 0.012;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
const moon = point(-4.0, 3.55, -1.24, '#72c9ff', 9, 8);
const lamp = point(-4.3, 1.94, 0.76, '#ffa968', 5.6, 6.8);
point(-4.53, 3.0, -1.19, '#ff605d', 0.75, 3.3);
point(1.87, 4.12, -1.46, '#ff405a', 9.5, 6);
point(3.81, 2.35, 0.76, '#72d4d5', 2.1, 3.6);
point(0.65, 2.68, 3.1, '#8c98c3', 1.15, 8.5);
const bounce = [
  [-0.42, 2.33, 0.6],
  [-0.54, 3.76, 0.26],
  [-2.55, 1.58, 0.4],
  [-2.54, 2.72, 0.27],
  [1.84, 1.57, 0.38],
  [1.79, 2.79, 0.23],
].map((p, i) => point(...p, '#f597af', [2.8, 1.65, 1.2, 0.95, 1.25, 1.15][i], 3.3));
const colors = ['#ff879b', '#8caed8', '#85cee4', '#54e99e', '#ccb7a3', '#77d69e', '#9fc0ea'];
const feeds = [0, 1, 3, 4, 6, 5];
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new T.Vector2(1, 1), 0.32, 0.5, 0.58);
composer.addPass(bloom);
const grade = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, clock: { value: 0 } },
  vertexShader:
    'varying vec2 p;void main(){p=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `varying vec2 p;uniform sampler2D tDiffuse;uniform float clock;
void main(){vec3 c=texture2D(tDiffuse,p).rgb;vec2 q=(p-.5)*vec2(1.05,.88);float vignette=1.-.33*smoothstep(.20,.68,length(q));c*=vignette;
float grain=fract(52.9829189*fract(dot(gl_FragCoord.xy+floor(clock*24.)*vec2(3.,7.),vec2(.06711056,.00583715))))-.5;
c=c*vec3(1.014,.993,1.018)+grain*.018*sqrt(max(c,vec3(.001)));gl_FragColor=vec4(c,1.);}`,
});
composer.addPass(grade);
composer.addPass(new OutputPass());
const aa = new ShaderPass(FXAAShader);
composer.addPass(aa);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.082;
controls.enablePan = true;
controls.minDistance = 0.7;
controls.maxDistance = 13;
controls.minPolarAngle = 0.39;
controls.maxPolarAngle = 1.63;
controls.minAzimuthAngle = -1.22;
controls.maxAzimuthAngle = 1.22;

// Each cut has its own lens, focus point, and short camera move. Positions are in metres.
const shots = [
  [0, 7.4, [2.12, 3.29, 8.47], [1.1, 3.06, 8.19], [-0.14, 2.35, -0.36], [-0.27, 2.29, -0.32], 32.7, 2.0],
  [
    7.4,
    12.1,
    [-2.06, 2.46, 4.41],
    [-2.55, 2.43, 3.65],
    [-2.1, 1.84, 0.18],
    [-1.03, 1.98, 0.08],
    34.6,
    1.45,
  ],
  [
    12.1,
    17.65,
    [0.44, 2.78, 6.68],
    [1.08, 2.91, 6.95],
    [0.17, 2.42, -0.33],
    [0.1, 2.43, -0.33],
    37.0,
    1.9,
  ],
  [
    17.65,
    21.2,
    [-1.39, 2.52, 1.05],
    [-1.23, 2.55, 0.95],
    [-0.84, 2.55, 0.46],
    [-0.8, 2.58, 0.46],
    35.3,
    1.35,
  ],
  [
    21.2,
    25.8,
    [4.94, 2.62, 3.15],
    [4.32, 2.62, 3.08],
    [3.19, 2.13, -0.07],
    [3.03, 2.16, -0.14],
    35.2,
    1.55,
  ],
  [
    25.8,
    30,
    [1.64, 3.18, 7.87],
    [2.12, 3.29, 8.47],
    [-0.06, 2.23, -0.28],
    [-0.14, 2.35, -0.36],
    32.7,
    2.0,
  ],
];
let aspect = 1,
  baseFov = 32.7,
  minAspect = 2,
  shotID = 0;
function projectLens() {
  camera.aspect = aspect;
  camera.fov = T.MathUtils.radToDeg(
    2 *
      Math.atan(
        Math.tan(T.MathUtils.degToRad(baseFov * 0.5)) *
          Math.max(1, (aspect < 1 ? Math.min(minAspect, 1.02) : minAspect) / aspect),
      ),
  );
  camera.updateProjectionMatrix();
}
const a = new T.Vector3(),
  b = new T.Vector3();
function placeCamera(t) {
  shotID = shots.findIndex((s) => t < s[1]);
  if (shotID < 0) shotID = 5;
  const [start, end, from, to, look, endLook, fov, ratio] = shots[shotID];
  let k = Math.min(1, Math.max(0, (t - start) / (end - start)));
  k = k * k * (3 - 2 * k);
  camera.position.fromArray(from).lerp(b.fromArray(to), k);
  controls.target.fromArray(look).lerp(a.fromArray(endLook), k);
  baseFov = fov;
  minAspect = ratio;
  projectLens();
  camera.lookAt(controls.target);
}
let tracking = 0.18,
  glow = 0.64,
  storm = true,
  auto = false,
  frozen = capture,
  sound = false,
  mutedByListener = false,
  manualOffset = 0,
  lastZap = -100,
  clock = 0,
  previous = performance.now(),
  lastT = 0;
const audio = new Audio('assets/room.ogg');
audio.preload = 'none';
audio.loop = true;
const oneShots = new Set();
function foley(file) {
  const s = new Audio('assets/' + file + '.wav');
  oneShots.add(s);
  s.onended = () => oneShots.delete(s);
  s.play().catch(() => oneShots.delete(s));
}
function stopAudio() {
  audio.pause();
  oneShots.forEach((source) => source.pause());
  oneShots.clear();
}
function soundAt() {
  if (sound) {
    audio.currentTime = clock % 30;
    audio.play().catch(() => {
      sound = false;
      $('sound').setAttribute('aria-pressed', false);
    });
  }
}
function showAuto(v) {
  auto = v;
  controls.enabled = !v;
  $('auto').setAttribute('aria-pressed', v);
}
function lightning(t) {
  let f = 0;
  for (let [start, amp] of [
    [5.12, 0.8],
    [5.38, 0.52],
    [12.94, 0.36],
    [23.13, 0.87],
    [23.44, 0.45],
  ]) {
    let d = t - start;
    if (d >= 0) f += amp * Math.exp(-d * 10) * (1 - Math.exp(-d * 56));
  }
  return storm ? f : 0;
}
function draw(t, show, direct = false) {
  let tt = t % 30,
    shotTime = t === 30 ? 30 : tt,
    flip = show && shotTime >= zapTime + 0.16 && shotTime < 21.2 ? 1 : 0;
  let age = show && shotTime >= zapTime ? shotTime - zapTime : 100;
  let man = direct ? 100 : t - lastZap;
  age = Math.min(age, man >= 0 ? man : 100);
  if (show) placeCamera(shotTime);
  else controls.update();
  let mode = flip + (direct ? 0 : manualOffset),
    burst = setSignals(tt, tracking, glow, age, mode);
  let bolt = lightning(tt);
  win.tm.value = tt;
  win.flash.value = bolt;
  moon.intensity = 8.5 + bolt * 57;
  hemi.intensity = 0.34 + bolt * 0.58;
  lamp.intensity =
    5.6 *
    (1 +
      0.019 * Math.sin(t * 59) +
      0.014 * Math.sin(t * 93) -
      0.09 * Math.exp(-Math.pow((tt - 9.12) * 17, 2)));
  wax(tt);
  bounce.forEach((l, i) => {
    l.color.set(colors[(feeds[i] + mode) % 7]);
    l.intensity =
      (i === 0 ? 2.5 : 1.3) * (0.53 + 0.74 * glow) * (0.94 + 0.06 * Math.sin(tt * 3 + i) + burst * 0.65);
  });
  grade.uniforms.clock.value = tt;
  bloom.strength = 0.1 + 0.3 * glow;
  composer.render();
  $('cam').textContent = String((show ? shotID : 0) + 1).padStart(2, '0');
  $('tc').textContent =
    '00:' +
    String(Math.floor(shotTime)).padStart(2, '0') +
    ':' +
    String(Math.floor((shotTime % 1) * 30 + 1e-7)).padStart(2, '0');
  $('lock').textContent = burst > 0.07 ? 'SYNC SEARCH' : 'SIGNAL LOCK';
}
function resize() {
  let w = canvas.clientWidth,
    h = canvas.clientHeight;
  if (!w || !h) return;
  aspect = w / h;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  aa.uniforms.resolution.value.set(
    1 / (w * renderer.getPixelRatio()),
    1 / (h * renderer.getPixelRatio()),
  );
  projectLens();
  if (frozen) draw(lastT, true, true);
}
placeCamera(0);
resize();
new ResizeObserver(resize).observe($('stage'));
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  if (!Number.isFinite(t)) throw new TypeError('A finite time in seconds is required');
  if (sound || oneShots.size) {
    stopAudio();
    sound = false;
    $('sound').setAttribute('aria-pressed', false);
  }
  frozen = true;
  lastT = Math.max(0, Math.min(30, t));
  draw(lastT, true, true);
};
function wake() {
  if (frozen) {
    clock = lastT;
    frozen = false;
    previous = performance.now();
  }
}
for (let id of ['tracking', 'glow'])
  $(id).oninput = (e) => {
    let v = Number(e.target.value);
    $(id + '-out').value = v;
    if (id === 'tracking') tracking = v / 100;
    else glow = v / 100;
    if (frozen) draw(lastT, true, true);
  };
$('storm').onclick = () => {
  storm = !storm;
  $('storm').setAttribute('aria-pressed', storm);
  if (frozen) draw(lastT, true, true);
};
$('auto').onclick = () => {
  wake();
  showAuto(!auto);
  if (auto) {
    clock = 0;
    manualOffset = 0;
    lastZap = -100;
    soundAt();
  } else controls.update();
};
$('zap').onclick = () => {
  wake();
  lastZap = clock;
  manualOffset = (manualOffset + 1) % 7;
  if (!mutedByListener) foley('coil');
};
$('sound').onclick = () => {
  sound = !sound;
  mutedByListener = !sound;
  $('sound').setAttribute('aria-pressed', sound);
  if (sound) {
    wake();
    soundAt();
  } else stopAudio();
};
$('full').onclick = () => {
  (document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen()
  ).catch(() => {});
};
controls.addEventListener('start', () => {
  wake();
});
function animate(now) {
  requestAnimationFrame(animate);
  let elapsed = Math.min(0.25, (now - previous) / 1000);
  previous = now;
  if (frozen) return;
  let old = clock % 30;
  clock += elapsed;
  // Follow the music's playhead through dropped frames and across its loop boundary.
  if (sound && !audio.paused && !audio.seeking && audio.readyState >= 2) {
    const drift = audio.currentTime - (clock % 30);
    clock += drift - 30 * Math.round(drift / 30);
    clock = Math.max(0, clock);
  }
  let t = clock % 30;
  if (auto && sound) {
    if (old < zapTime && t >= zapTime) foley('coil');
    for (let tick of [0.22, 7.4, 21.2, 29.55]) if (old < tick && t >= tick) foley('tape');
  }
  draw(clock, auto);
}
if (capture) window.renderAt(0);
else draw(0, false);
requestAnimationFrame(animate);
