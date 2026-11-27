import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { addOcean, tide } from './ocean.js';
import { addBoats } from './boats.js';
import { mount } from './mount.js';
import { windfall } from './petals.js';
import { addLandscape, paperOverlay } from './landscape.js';

const query = new URLSearchParams(location.search),
  capture = query.has('capture');
if (query.has('film')) document.documentElement.classList.add('film');
const $ = (id) => document.getElementById(id);
const canvas = $('ocean');
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance'
});
renderer.setPixelRatio(capture ? 1 : Math.min(1.65, devicePixelRatio));
const scene = new T.Scene(),
  camera = new T.PerspectiveCamera(31, 1, 0.1, 155);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.085;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 45;
controls.minPolarAngle = 0.6;
controls.maxPolarAngle = Math.PI * 0.485;
controls.minAzimuthAngle = -1.16;
controls.maxAzimuthAngle = 1.18;
await document.fonts.load('700 24px "Studio Mincho"', '木版波印神奈川沖浪裏');
const landscape = addLandscape(scene),
  ocean = addOcean(scene),
  boats = addBoats(scene),
  petals = windfall(scene),
  overlay = paperOverlay();
mount(scene);
const front = { p: [1.5, 6.45, 25.9], q: [-0.95, 4.1, -1.0], lens: 30.5 },
  sweep = { p: [14.7, 11.8, 24.9], q: [-1.6, 3.55, -0.5], lens: 31.2 };
const shots = [
  [0, front],
  [3.7, front],
  [8, { p: [3.0, 7.7, 24.6], q: [-1.25, 4.35, -1], lens: 31.8 }],
  [14.8, sweep],
  [18.1, { p: [11.0, 8.1, 16.8], q: [-1.0, 3.4, -0.6], lens: 32.2 }],
  [23.6, { p: [6.0, 3.25, 14.85], q: [2.8, 1.08, 2.4], lens: 37.0 }],
  [26, { p: [3.0, 3.65, 16.4], q: [0.8, 2.1, 0.5], lens: 35.2 }],
  [30, front]
];
function sample(t) {
  let idx = shots.findIndex(([s]) => s > t);
  if (idx < 0) return front;
  if (idx <= 1) return front;
  const [t0, a] = shots[idx - 1],
    [t1, b] = shots[idx],
    pre = shots[idx - 2],
    next = shots[Math.min(idx + 1, shots.length - 1)];
  const f = (t - t0) / (t1 - t0),
    ff = f * f,
    fff = ff * f;
  function hermite(x, y, l, r) {
    let d0 = (idx === 2 ? 0 : (y - l) / (t1 - pre[0])) * (t1 - t0);
    let d1 = (idx === shots.length - 1 ? 0 : (r - x) / (next[0] - t0)) * (t1 - t0);
    return (
      (2 * fff - 3 * ff + 1) * x +
      (fff - 2 * ff + f) * d0 +
      (-2 * fff + 3 * ff) * y +
      (fff - ff) * d1
    );
  }
  const vector = (k) => a[k].map((v, i) => hermite(v, b[k][i], pre[1][k][i], next[1][k][i]));
  return {
    p: vector('p'),
    q: vector('q'),
    lens: hermite(a.lens, b.lens, pre[1].lens, next[1].lens)
  };
}
let time = 0,
  playing = false,
  holdingFrame = false,
  cameraMode = 'front',
  transition = null,
  baseLens = front.lens;
let showStarted = 0,
  sweepStarted = 0;
// The narrower mount keeps the crest and the fishing boats in the same frame.
function lens() {
  const aspect = camera.aspect;
  camera.fov = T.MathUtils.radToDeg(
    2 * Math.atan(Math.tan(T.MathUtils.degToRad(baseLens * 0.5)) * Math.max(1, 1.67 / aspect))
  );
  camera.updateProjectionMatrix();
}
function pose(p) {
  camera.position.fromArray(p.p);
  controls.target.fromArray(p.q);
  camera.lookAt(controls.target);
  baseLens = p.lens;
  lens();
}
function resize() {
  const w = canvas.clientWidth,
    h = canvas.clientHeight;
  if (w < 1 || h < 1) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  lens();
  paint(time);
}
function paint(t) {
  ocean(t);
  boats(t);
  landscape(t);
  petals(t);
  renderer.render(scene, camera);
  overlay(renderer);
}
function setButton() {
  $('showcase').setAttribute('aria-pressed', playing);
  document.querySelector('.playicon').textContent = playing ? '■' : '▶';
  document.querySelector('.playlabel').textContent = playing ? 'Stop showcase' : 'Play showcase';
  $('progress').style.width = playing ? (time / 30) * 100 + '%' : '0';
}
function viewState(mode) {
  cameraMode = mode;
  for (const name of ['front', 'sweep']) $(name).setAttribute('aria-pressed', name === mode);
}
function settleDamping() {
  const damping = controls.enableDamping;
  controls.enableDamping = false;
  controls.update();
  controls.enableDamping = damping;
}
function selectView(mode) {
  holdingFrame = false;
  settleDamping();
  playing = false;
  setButton();
  viewState(mode);
  transition = {
    start: performance.now(),
    from: { p: camera.position.toArray(), q: controls.target.toArray(), lens: baseLens },
    to: mode === 'front' ? front : sweep
  };
}
$('front').onclick = () => selectView('front');
$('sweep').onclick = () => selectView('sweep');
controls.addEventListener('start', () => {
  holdingFrame = false;
  playing = false;
  transition = null;
  setButton();
  viewState('orbit');
});
for (const name of ['surge', 'ink']) {
  const el = $(name);
  const update = () => {
    tide[name].value = el.value / 100;
    el.style.setProperty('--value', el.value + '%');
    $(name + '-val').textContent = el.value + '%';
    if (capture || holdingFrame) paint(time);
  };
  el.addEventListener('input', update);
  el.style.setProperty('--value', el.value + '%');
}
$('light').addEventListener('change', (e) => {
  tide.night.value = Number(e.target.value);
  $('daymark').textContent = tide.night.value ? '☾' : '☼';
  if (capture || holdingFrame) paint(time);
});
const audio = new Audio('./assets/undertow.ogg');
audio.loop = true;
audio.preload = 'none';
let audible = false;
$('sound').onclick = async () => {
  if (audible) {
    audio.pause();
    audible = false;
  } else {
    audio.currentTime = time % 30;
    try {
      await audio.play();
      audible = true;
    } catch {
      return;
    }
  }
  $('sound').setAttribute('aria-pressed', audible);
  $('sound').querySelector('span').textContent = audible ? 'Sound on' : 'Sound off';
  document
    .querySelector('.mute')
    .setAttribute('d', audible ? 'M16 8q4 4 0 8m3-11q7 7 0 14' : 'm17 9 5 6m0-6-5 6');
};
$('showcase').onclick = () => {
  holdingFrame = false;
  settleDamping();
  playing = !playing;
  transition = null;
  if (playing) {
    time = 0;
    showStarted = performance.now();
    pose(front);
    viewState('front');
    if (audible) audio.currentTime = 0;
  }
  setButton();
};
function seek(t) {
  holdingFrame = true;
  time = Math.min(30, Math.max(0, Number(t) || 0));
  if (audible) audio.currentTime = time % 30;
  playing = false;
  setButton();
  settleDamping();
  transition = null;
  viewState(time <= 3.7 || time >= 30 ? 'front' : time > 13 && time < 17 ? 'sweep' : 'show');
  pose(sample(time));
  paint(time);
}
pose(front);
resize();
$('load').hidden = true;
window.TOTAL_DURATION = 30.0;
window.renderAt = seek;
new ResizeObserver(resize).observe(canvas);
let last = performance.now();
function tick(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if ((!capture && !holdingFrame) || playing || transition) {
    if (playing) {
      time = Math.min(30, (now - showStarted) / 1000);
      pose(sample(time));
      viewState(time < 3.7 || time >= 30 ? 'front' : 'show');
      if (time >= 30) playing = false;
      setButton();
    } else {
      if (!capture) time = (time + dt) % 3600;
      if (transition) {
        const { start, from, to } = transition;
        const v = Math.min(1, (now - start) / 1160),
          s = v * v * (3 - 2 * v);
        const blend = (a, b) => a + (b - a) * s;
        pose({
          p: from.p.map((n, i) => blend(n, to.p[i])),
          q: from.q.map((n, i) => blend(n, to.q[i])),
          lens: blend(from.lens, to.lens)
        });
        if (v === 1) {
          transition = null;
          sweepStarted = now;
        }
      } else if (cameraMode === 'sweep' && !capture) {
        const angle = 0.19 * Math.sin((now - sweepStarted) * 0.00018),
          dx = sweep.p[0] - sweep.q[0],
          dz = sweep.p[2] - sweep.q[2];
        pose({
          ...sweep,
          p: [
            sweep.q[0] + dx * Math.cos(angle) + dz * Math.sin(angle),
            sweep.p[1],
            sweep.q[2] - dx * Math.sin(angle) + dz * Math.cos(angle)
          ]
        });
      } else controls.update();
    }
    paint(time);
  }
  requestAnimationFrame(tick);
}
if (!query.has('film')) requestAnimationFrame(tick);
