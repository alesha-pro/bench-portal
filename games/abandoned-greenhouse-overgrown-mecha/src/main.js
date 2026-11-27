import { T, V, loader, ease, clamp, environment } from './workshop.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { windAt } from './botany.js';
import { conservatory } from './conservatory.js';
import { guardian } from './guardian.js';
import { wildlife } from './wildlife.js';
import { optics } from './optics.js';

const $ = (id) => document.getElementById(id),
  query = new URLSearchParams(location.search);
const capture = query.has('capture'),
  film = query.has('film');
document.body.classList.toggle('film', film);
const canvas = $('habitat'),
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: false,
    preserveDrawingBuffer: capture,
    powerPreference: 'high-performance',
  });
renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.65));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
const scene = new T.Scene();
scene.background = new T.Color(0xcbd2ba);
scene.fog = new T.FogExp2(0xa6b69b, 0.033);
environment(scene);
const camera = new T.PerspectiveCamera(40, 1, 0.045, 85);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.09;
controls.enablePan = true;
controls.minDistance = 0.82;
controls.maxDistance = 13;
controls.maxPolarAngle = Math.PI * 0.491;
const daylight = new T.DirectionalLight(0xffdc9e, 3.0);
daylight.castShadow = true;
daylight.shadow.mapSize.set(2048, 2048);
Object.assign(daylight.shadow.camera, {
  left: -7,
  right: 7,
  top: 7,
  bottom: -7,
  near: 0.15,
  far: 29,
});
daylight.shadow.normalBias = 0.016;
daylight.shadow.bias = -0.00031;
daylight.target.position.set(0, 1.05, -0.8);
scene.add(daylight, daylight.target);
const sky = new T.HemisphereLight(0xf7ead0, 0x77836c, 1.16);
scene.add(sky);
const bounce = new T.DirectionalLight(0xcae3dc, 0.72);
bounce.position.set(3.5, 4.7, 5.5);
scene.add(bounce);
const rim = new T.DirectionalLight(0xffdfac, 1.13);
rim.position.set(-2.5, 5.1, -4.8);
scene.add(rim);
const env = conservatory(scene),
  hero = guardian(scene),
  creatures = wildlife(scene, hero.landing),
  fx = optics(renderer, scene, camera);
const views = {
  wide: [[1.68, 2.3, 8.42], [-0.04, 2.23, 0.14], 40],
  face: [[2.36, 3.35, 4.45], [0.92, 3.13, 0.47], 35],
  heart: [[0.39, 2.64, 2.59], [0.0, 2.45, 0.42], 34],
};
const path = [
  [0, [-3.55, 6.6, 8.45], [-0.27, 2.55, -0.54], 45],
  [3.4, [-3.0, 3.98, 8.86], [-0.22, 2.47, -0.23], 43],
  [7.5, [-1.25, 2.3, 9.16], [-0.21, 2.26, -0.05], 39],
  [10.6, [0.16, 2.47, 7.47], [0.1, 2.51, 0.09], 38],
  [14, [1.39, 3.06, 5.07], [0.77, 3.08, 0.38], 37],
  [17.7, [2.36, 3.35, 4.45], [0.92, 3.13, 0.47], 35],
  [20.1, [2.15, 3.13, 4.13], [0.84, 3.01, 0.47], 35],
  [23.8, [0.48, 2.67, 2.6], [0.04, 2.46, 0.44], 34],
  [25.3, [0.27, 2.61, 2.7], [0.05, 2.49, 0.41], 35],
  [30, [-2.15, 2.74, 8.52], [0.27, 2.64, 0.13], 40],
];
const cameraCurve = new T.CatmullRomCurve3(path.map((k) => V(...k[1]))),
  focusCurve = new T.CatmullRomCurve3(path.map((k) => V(...k[2])));
let sunValue = 0.14,
  mistValue = 0.55,
  awake = false,
  wakeMix = 0,
  flight = -20,
  tScene = 0,
  playhead = 0,
  playing = false,
  parked = capture,
  manualView = null,
  soundOn = false,
  playStart = 0;
const audio = new Audio('./assets/soundscape.m4a');
audio.preload = 'none';
audio.loop = true;
function light() {
  const noon = ease(0.12, 0.54, sunValue),
    night = ease(0.54, 1, sunValue);
  daylight.position.set(
    -6.2 + 8.5 * sunValue,
    7.8 + 4 * noon - 8.1 * night,
    -3.35 - 2.2 * sunValue,
  );
  daylight.color.set(0xffdc9f).lerp(new T.Color(0xf9f3d5), noon).lerp(new T.Color(0xeaac87), night);
  daylight.intensity = 2.74 + 0.32 * noon - 2.62 * night;
  rim.intensity = 0.73 - 0.55 * night;
  sky.intensity = 0.64 - 0.46 * night;
  bounce.intensity = 0.88 - 0.62 * night;
  sky.color.set(0xdde9e6).lerp(new T.Color(0xb6cbea), night);
  scene.environmentIntensity = 0.49 - 0.29 * night;
  scene.fog.color
    .set(0xb5bc9b)
    .lerp(new T.Color(0xc2cec2), noon)
    .lerp(new T.Color(0x4a655e), night);
  scene.fog.density = 0.013 + mistValue * 0.022 + noon * 0.004;
  scene.background.copy(scene.fog.color);
  env.backdrop.color
    .set(0xd6d8c8)
    .lerp(new T.Color(0xf1fff5), noon)
    .lerp(new T.Color(0x566f82), night);
  $('sun-read').textContent =
    sunValue < 0.36 ? 'Golden dawn' : sunValue < 0.73 ? 'Misty noon' : 'Twilight firefly glow';
  $('mist-read').textContent = Math.round(mistValue * 100) + '%';
  for (const id of ['sun', 'mist']) $(id).style.setProperty('--fill', $(id).value + '%');
}
function applyView(which) {
  const [pos, aim, fov] = views[which];
  camera.position.set(...pos);
  controls.target.set(...aim);
  camera.fov = fov;
  camera.updateProjectionMatrix();
  camera.lookAt(controls.target);
  controls.update();
}
function shot(t) {
  let i = path.findIndex((k, j) => j < path.length - 1 && t <= path[j + 1][0]);
  if (i < 0) i = path.length - 2;
  const u = clamp((t - path[i][0]) / (path[i + 1][0] - path[i][0]), 0, 1),
    v = (i + u) / (path.length - 1);
  cameraCurve.getPoint(v, camera.position);
  focusCurve.getPoint(v, controls.target);
  camera.fov = T.MathUtils.lerp(path[i][3], path[i + 1][3], u);
  camera.updateProjectionMatrix();
  camera.lookAt(controls.target);
}
function draw(t, w, f) {
  windAt(t);
  env.updateWater(t);
  hero.update(t, w);
  creatures(t, w, f, mistValue, sunValue);
  fx.draw(t, sunValue, mistValue, camera.position.distanceTo(controls.target));
}
function readout(t) {
  $('counter').textContent = '00:' + String(Math.floor(t)).padStart(2, '0');
  $('timeline').value = t;
  $('timeline').style.setProperty('--fill', (t / 30) * 100 + '%');
}
function wakeUI(value) {
  $('wake').setAttribute('aria-pressed', String(value));
  $('wake').querySelector('span').textContent = value ? 'Slumber' : 'Wake Guardian';
}
function story(t) {
  $('preset').value = 'film';
  document.body.classList.toggle('close-shot', t > 11.2 && t < 29.4);
  playhead = clamp(Number(t) || 0, 0, 30);
  tScene = playhead;
  const w = ease(12.45, 16.75, playhead);
  wakeMix = w;
  awake = w >= 0.5;
  flight = playhead - 14.5;
  wakeUI(awake);
  shot(playhead);
  draw(playhead, w, flight);
  readout(playhead);
}
function transport(value) {
  playing = value;
  $('showcase').setAttribute('aria-pressed', String(value));
  $('showcase').title = value ? 'Pause 30-second showcase' : 'Play 30-second showcase';
}
function release() {
  if (playing) {
    transport(false);
    audio.pause();
    if (soundOn) audio.play().catch(() => {});
  }
  parked = false;
  manualView = null;
  document.body.classList.remove('close-shot');
}
$('sun').oninput = () => {
  sunValue = $('sun').value / 100;
  light();
  draw(tScene, wakeMix, flight);
};
$('mist').oninput = () => {
  mistValue = $('mist').value / 100;
  light();
  draw(tScene, wakeMix, flight);
};
$('wake').onclick = () => {
  release();
  awake = !awake;
  wakeUI(awake);
  flight = awake ? 0 : -20;
};
$('preset').onchange = () => {
  release();
  manualView = $('preset').value;
  const [pos, aim, fov] = views[manualView];
  manualView = { pos: V(...pos), aim: V(...aim), fov };
};
$('fold').onclick = () => {
  const open = $('fold').getAttribute('aria-expanded') === 'true';
  $('fold').setAttribute('aria-expanded', String(!open));
  $('fold').querySelector('.foldmark').textContent = open ? '+' : '−';
};
if (innerWidth < 650) $('fold').click();
$('showcase').onclick = () => {
  if (playing) {
    transport(false);
    parked = true;
    audio.pause();
    return;
  }
  if (playhead >= 30) playhead = 0;
  manualView = null;
  parked = false;
  playStart = performance.now() - playhead * 1000;
  transport(true);
  audio.currentTime = playhead;
  if (soundOn) audio.play().catch(() => {});
};
$('timeline').oninput = () => {
  transport(false);
  parked = true;
  manualView = null;
  story(+$('timeline').value);
  audio.pause();
  audio.currentTime = playhead;
};
$('sound').onclick = async () => {
  const next = !soundOn;
  if (next) {
    if (playing) audio.currentTime = playhead;
    try {
      await audio.play();
    } catch {
      return;
    }
  } else audio.pause();
  soundOn = next;
  $('sound').setAttribute('aria-pressed', String(next));
  $('sound').querySelector('span').textContent = next ? 'Sound on' : 'Sound off';
};
$('fullscreen').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
};
document.addEventListener('fullscreenchange', () =>
  $('fullscreen').setAttribute(
    'aria-label',
    document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen',
  ),
);
controls.addEventListener('start', release);
function size() {
  renderer.setSize(innerWidth, innerHeight, false);
  const s = renderer.getDrawingBufferSize(new T.Vector2());
  fx.resize(s.x, s.y);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  if (parked) draw(tScene, wakeMix, flight);
}
let last = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
  last = now;
  if (parked) return;
  if (playing) {
    const next = (now - playStart) / 1000;
    story(next);
    if (next >= 30) {
      transport(false);
      parked = true;
      audio.pause();
    }
  } else {
    tScene += dt;
    flight = awake ? flight + dt : -20;
    wakeMix = T.MathUtils.damp(wakeMix, awake ? 1 : 0, 1.2, dt);
    if (manualView) {
      const a = 1 - Math.exp(-dt * 5);
      camera.position.lerp(manualView.pos, a);
      controls.target.lerp(manualView.aim, a);
      camera.fov = T.MathUtils.lerp(camera.fov, manualView.fov, a);
      camera.updateProjectionMatrix();
      if (camera.position.distanceTo(manualView.pos) < 0.001) manualView = null;
    }
    controls.update();
    draw(tScene, wakeMix, flight);
  }
}
const ready = new Promise((resolve, reject) => {
  loader.onLoad = resolve;
  loader.onError = (u) => reject(new Error('Texture loading failed ' + u));
});
await ready;
applyView('wide');
light();
size();
draw(0, 0, -20);
await Promise.all([
  document.fonts.load('48px Instrument'),
  document.fonts.load('italic 48px Instrument'),
  document.fonts.load('14px DM'),
]);
if (film) fx.filmTitles();
requestAnimationFrame(loop);
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  transport(false);
  parked = true;
  manualView = null;
  audio.pause();
  story(t);
};
$('loading').remove();
window.addEventListener('resize', size);
