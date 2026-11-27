import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { finish } from './finish.js';
import { createPhoenix } from './phoenix.js';
import { createTemple } from './temple.js';
import {
  createAir,
  createTrails,
  createShadow,
  flightPath,
  heading,
} from './atmosphere.js';
import { ease, mix, stateAt, TAU } from './math.js';

const $ = (s) => document.querySelector(s),
  params = new URLSearchParams(location.search);
const film = params.has('film'),
  capture = params.has('capture'),
  canvas = $('#scene'),
  stage = $('#stage');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(capture ? 1 : Math.min(1.65, devicePixelRatio));
const output = finish(renderer);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x39434a);
const camera = new THREE.PerspectiveCamera(35, 1, 0.08, 140);
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.dampingFactor = 0.08;
orbit.enablePan = false;
orbit.minDistance = 4.0;
orbit.maxDistance = 21;
orbit.minPolarAngle = 0.2;
orbit.maxPolarAngle = Math.PI * 0.489;
let cameraMoved = false;
let userCamera = false,
  auto = true,
  time = capture ? 0 : 15.4,
  manual = null,
  ember = 0.75,
  paper = 0,
  sound = false,
  last = 0;
let w = 0,
  h = 0;
const bird = createPhoenix();
scene.add(bird.group);
const updateTemple = await createTemple(scene),
  updateAir = createAir(scene),
  updateTrails = createTrails(scene, bird),
  updateShadow = createShadow(scene, bird);
const chapters = [...document.querySelectorAll('.chapters button')];
const chapterNames = ['The sheet', 'Folding', 'Ascension', 'Rebirth'];
const audio = $('#audio');
function framing(t, state, center) {
  const { fold, flight } = state,
    angle = (TAU * t) / 30;
  const portrait = w / h < 1.13;
  const distance =
    (portrait ? 12.7 : mix(8.95, 10.9, flight) + 0.74 * fold * (1 - flight)) *
    (film ? 1.065 : 1);
  const az = 0.105 + 0.11 * Math.sin(angle - 0.32) - 0.055 * flight;
  const y = mix(4.88, 2.29, fold) + 0.53 * flight + 0.12 * Math.sin(angle);
  const targetY = 0.2 + fold * 1.16 + flight * 1.61;
  const aim = new THREE.Vector3(center.x * 0.44, targetY, center.z * 0.22);
  if (!userCamera) {
    camera.position.set(
      aim.x + Math.sin(az) * distance,
      y + targetY * 0.27,
      aim.z + Math.cos(az) * distance,
    );
    orbit.target.copy(aim);
  }
  const fov = portrait ? 44 : film ? 35.8 : 36.8;
  camera.fov = fov;
  camera.aspect = w / h;
  // Give the title its own negative space in the gallery composition.
  const offset = film ? 0 : portrait ? -0.035 : -0.104;
  camera.setViewOffset(w, h, offset * w, 0, w, h);
  camera.updateProjectionMatrix();
  orbit.update();
}
function syncDesk(t, k) {
  $('#fold').value = (k * 100).toFixed(0);
  $('#foldOut').textContent = $('#fold').value + '%';
  $('#fold').style.setProperty('--fill', $('#fold').value + '%');
  $('#emberOut').textContent = Math.round(ember * 100) + '%';
  $('#ember').style.setProperty('--fill', ember * 100 + '%');
  $('#clock').textContent = '00:' + String(Math.floor(t)).padStart(2, '0');
  const current = t < 3 ? 0 : t < 12 ? 1 : t < 23 ? 2 : 3;
  $('#chapterIndex').textContent = ['I', 'II', 'III', 'IV'][current];
  $('#chapterName').textContent = chapterNames[current];
  chapters.forEach((btn, i) => {
    btn.setAttribute('aria-current', i === current);
    btn.style.setProperty(
      '--progress',
      100 *
        Math.max(
          0,
          Math.min(
            1,
            (t - Number(btn.dataset.start)) /
              (Number(btn.dataset.end) - Number(btn.dataset.start)),
          ),
        ) +
        '%',
    );
  });
}
function draw(t) {
  t = ((t % 30) + 30) % 30;
  const state = stateAt(t);
  if (manual !== null) {
    state.fold = manual;
    state.flight = ease(0.68, 1, manual);
    state.fire = 0.09 + 0.91 * ease(0.54, 0.96, manual);
  }
  const { fold, flight, fire } = state;
  const center = flightPath(t, flight);
  const minY = bird.update(fold, t, flight, fire * ember, paper);
  bird.group.position.set(
    center.x,
    0.065 + center.y - minY * (1 - flight) + flight * 0.28,
    center.z,
  );
  bird.group.rotation.set(
    -0.1 * flight + 0.035 * flight * Math.sin(t * 2.48),
    heading(t, flight) + 1.39 * (1 - fold),
    0.08 * flight * Math.sin((t - 12) * 0.555),
  );
  framing(t, state, center);
  updateTemple(t, camera);
  updateAir(t, flight, fire, ember, h * renderer.getPixelRatio());
  updateTrails(t, flight, fire, ember, camera, h * renderer.getPixelRatio());
  updateShadow(flight);
  if (!film) syncDesk(t, fold);
  output(scene, camera, canvas.width, canvas.height);
}
function resize() {
  w = Math.max(1, stage.clientWidth);
  h = Math.max(1, stage.clientHeight);
  renderer.setSize(w, h, false);
  draw(time);
}
function setAuto(value) {
  auto = value;
  const btn = $('#auto');
  btn.setAttribute('aria-pressed', String(value));
  btn.title = value ? 'Pause auto showcase' : 'Play auto showcase';
  btn.querySelector('use').setAttribute('href', value ? '#pause' : '#play');
}
function syncAudio() {
  if (sound && auto) {
    audio.currentTime = time;
    audio.play().catch(() => {
      setSound(false);
    });
  } else audio.pause();
}
function setSound(value) {
  sound = value;
  $('#sound').setAttribute('aria-pressed', String(value));
  $('#sound span').textContent = value ? 'Sound on' : 'Sound off';
  $('#sound use').setAttribute('href', value ? '#vol' : '#mute');
  syncAudio();
}
$('#sound').onclick = () => setSound(!sound);
$('#full').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
};
$('#auto').onclick = () => {
  setAuto(!auto);
  manual = null;
  syncAudio();
  draw(time);
};
$('#fold').oninput = (e) => {
  manual = Number(e.target.value) / 100;
  // Invert the forward narrative to make resume proceed from this exact fold.
  let lo = 2.05,
    hi = 11.65;
  for (let i = 0; i < 22; i++) {
    let mid = (lo + hi) / 2;
    if (stateAt(mid).fold < manual) lo = mid;
    else hi = mid;
  }
  time = manual >= 1 ? 15.4 : manual <= 0 ? 0 : (lo + hi) / 2;
  setAuto(false);
  syncAudio();
  draw(time);
};
$('#ember').oninput = (e) => {
  ember = Number(e.target.value) / 100;
  draw(time);
};
$('#paper').onchange = (e) => {
  paper = e.target.selectedIndex;
  $('#swatch').style.background = [
    'linear-gradient(135deg,#ab392c 49.5%,#d6ad64 50.5%)',
    'linear-gradient(135deg,#e1d6be 49.5%,#36332f 50.5%)',
    'linear-gradient(135deg,#363338 49.5%,#ca7756 50.5%)',
  ][paper];
  draw(time);
};
chapters.forEach(
  (btn) =>
    (btn.onclick = () => {
      manual = null;
      time = Number(btn.dataset.start);
      restoreCamera();
      syncAudio();
      draw(time);
    }),
);
orbit.addEventListener('change', () => {
  cameraMoved = true;
});
orbit.addEventListener('start', () => {
  userCamera = true;
});
function restoreCamera() {
  if (userCamera) {
    orbit.enableDamping = false;
    orbit.update();
    orbit.enableDamping = true;
  }
  userCamera = false;
}
canvas.addEventListener('dblclick', () => {
  restoreCamera();
  draw(time);
});
resize();
new ResizeObserver(() => resize()).observe(stage);
await document.fonts.ready;
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  if (!capture) {
    setAuto(false);
    audio.pause();
  }
  time = ((Number(t) % 30) + 30) % 30;
  manual = null;
  restoreCamera();
  draw(time);
};
window.phoenixRig = Object.freeze({
  joints: bird.joints,
  triangles: bird.triangles,
});
function loop(now) {
  if (!capture) {
    if (auto && last) time = (time + (now - last) / 1000) % 30;
    if (
      auto &&
      sound &&
      !audio.paused &&
      Math.abs(audio.currentTime - time) > 0.19
    )
      time = audio.currentTime % 30;
    if (!auto && userCamera) orbit.update();
    if (auto || cameraMoved) draw(time);
    cameraMoved = false;
    last = now;
    requestAnimationFrame(loop);
  }
}
if (!capture) requestAnimationFrame(loop);
