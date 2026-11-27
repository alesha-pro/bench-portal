import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { finishes, lightingEnvironment } from './materials.js';
import { rotunda } from './rotunda.js';
import { apparatus } from './instrument.js';
import { sandBed } from './sand.js';
import { atmosphere, particles, sunDirection } from './air.js';
import { diagram, ratios, pendulumDrive, SAND_Y } from './motion.js';
import { soundControl, soundtrack } from './audio.js';

const $ = (id) => document.getElementById(id),
  opt = new URLSearchParams(location.search);
const capture = opt.has('capture'),
  film = opt.has('film');
if (film) document.body.classList.add('film');
const cameraNames = ['Rotunda Sunbeam', 'Stylus Groove Macro', 'Top-Down Mandala'];
const icons = ['rotunda', 'macro', 'overhead'];
const canvas = $('scene'),
  box = $('imagewell');
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: false,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance',
});
if (!renderer.extensions.has('EXT_color_buffer_float'))
  throw Error('The heightfield requires floating-point WebGL2 color attachments.');
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
const scene = new T.Scene(),
  camera = new T.PerspectiveCamera(39, 1, 0.045, 150);
scene.environment = lightingEnvironment(renderer);
scene.environmentIntensity = 0.71;
const lights = new T.HemisphereLight(0xdfebe9, 0x797b6b, 0.72);
const sun = new T.DirectionalLight(0xffdfba, 3.55);
sun.position.copy(sunDirection).multiplyScalar(22);
sun.castShadow = true;
sun.shadow.mapSize.set(3072, 3072);
Object.assign(sun.shadow.camera, {
  left: -8.3,
  right: 8.3,
  top: 9,
  bottom: -7.6,
  near: 0.2,
  far: 41,
});
sun.shadow.bias = -0.00013;
sun.shadow.normalBias = 0.012;
sun.shadow.radius = 2.0;
scene.add(lights, sun, sun.target);
const materials = await finishes();
await rotunda(scene, materials);
const drive = pendulumDrive(),
  instrument = apparatus(scene, materials, drive.point);
const bed = sandBed(renderer, scene, materials.grains, drive.point),
  air = atmosphere(renderer, scene, camera),
  grains = particles(scene, drive.point);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.minDistance = 1.1;
controls.maxDistance = 10.6;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minPolarAngle = 0.04;
controls.enablePan = true;
let preset = 0,
  energy = 0.76,
  camID = 0,
  time = 21.4,
  show = false,
  parked = capture,
  manualOrbit = false;
let edited = false,
  rake = null,
  sounding = false,
  lastTime = 0;
const sound = soundControl();
const V = (x, y, z) => new T.Vector3(x, y, z);
function cameraPose(t, shot, cinema) {
  const [x, z] = drive.point(t);
  let pos, at, lens;
  if (shot === 1) {
    const a = cinema ? 0.3 + 0.11 * Math.sin(t * 0.31) : 0.41;
    at = V(x * 0.9, SAND_Y + 0.5, z * 0.9);
    pos = at.clone().add(V(2.54 * Math.sin(a), 0.92, 2.54 * Math.cos(a)));
    lens = 40;
  } else if (shot === 2) {
    // Stay below the roof bearing and keep the azimuth scale just inside the composition.
    const a = 0.15 * Math.sin(t * 0.12);
    pos = V(0.72 * Math.sin(a), 8.79, 1.3);
    at = V(0, SAND_Y, 0);
    lens = 62;
  } else {
    const a = cinema ? 0.26 + 0.16 * Math.sin(0.12 * t - 0.55) : 0.35;
    const radius = cinema ? (t < 6.8 ? 8.45 - 0.11 * t : t < 12 ? 7.25 : 8.0) : 8.15;
    pos = V(
      Math.sin(a) * radius,
      cinema ? (t < 6.8 ? 3.22 + 0.16 * t : t < 12 ? 4.24 : 6.02) : 4.42,
      Math.cos(a) * radius,
    );
    at = V(0, cinema ? (t < 6.8 ? 2.35 : t < 12 ? 1.54 : 1.4) : 1.93, 0);
    lens = cinema ? (t >= 6.8 && t < 12 ? 44 : 45) : 46;
  }
  if (cinema && t < 3.3) {
    const phase = Math.min(1, t / 3.3),
      lift = 1 - phase * phase * (3 - 2 * phase);
    pos.lerp(V(1.3, 2.42, 5.86), lift);
    at.lerp(V(0, 7.75, 0), lift);
    lens += 11 * lift;
  }
  // A narrow viewport needs a wider vertical angle to keep the circular dial in frame.
  const minAspect = shot === 1 ? 1.3 : 1.72;
  if (camera.aspect < minAspect)
    lens = T.MathUtils.radToDeg(
      2 * Math.atan((Math.tan(T.MathUtils.degToRad(lens) / 2) * minAspect) / camera.aspect),
    );
  camera.fov = lens;
  camera.updateProjectionMatrix();
  camera.position.copy(pos);
  controls.target.copy(at);
  camera.lookAt(at);
}
function shotAt(t) {
  return t < 12 ? 0 : t < 18.6 ? 1 : t < 25.6 ? 2 : 0;
}
function range(input, v) {
  input.style.setProperty('--fill', v + '%');
}
function label() {
  const s = Math.min(30, Math.max(0, Math.floor(show || parked ? time : time % 30)));
  $('clock').textContent = '00:' + String(s).padStart(2, '0');
  const v = Math.min(30, show || parked ? time : time % 30);
  $('timeline').value = v;
  range($('timeline'), (v / 30) * 100);
  $('viewtext').textContent = manualOrbit ? 'Free orbit' : cameraNames[camID];
  $('viewicon').setAttribute('href', '#' + (manualOrbit ? 'orbit' : icons[camID]));
  $('playicon').setAttribute('href', show && !parked ? '#pause' : '#play');
  $('showcase').setAttribute('aria-pressed', String(show && !parked));
  for (const b of $('cameras').children)
    b.setAttribute('aria-pressed', String(!manualOrbit && Number(b.dataset.index) === camID));
}
function resize() {
  const { width, height } = box.getBoundingClientRect();
  renderer.setSize(Math.max(1, Math.round(width)), Math.max(1, Math.round(height)), false);
  air.resize(canvas.width, canvas.height);
  camera.aspect = canvas.width / canvas.height;
  camera.updateProjectionMatrix();
}
function draw(updateBed = true) {
  if (show) camID = shotAt(time);
  if (updateBed && rake === null) bed.advance(time);
  instrument.pose(time);
  if (!manualOrbit) cameraPose(time, camID, show);
  if (manualOrbit) controls.update();
  camera.updateMatrixWorld();
  grains(time, canvas.height, rake !== null);
  air.draw();
  label();
}
function filmTime(t) {
  if (!Number.isFinite(t)) throw new TypeError('renderAt expects a finite time in seconds');
  const changed = edited || rake !== null;
  if (manualOrbit) {
    controls.enableDamping = false;
    controls.update();
    controls.enableDamping = true;
  }
  parked = true;
  show = true;
  manualOrbit = false;
  rake = null;
  instrument.sweep(0);
  $('reset').disabled = false;
  $('reset').querySelector('span').textContent = 'Reset smooth sand';
  if (changed) {
    preset = 0;
    energy = 0.76;
    drive.reset(preset, energy);
    configure();
    bed.clear();
    edited = false;
  }
  time = T.MathUtils.clamp(t, 0, 30);
  draw();
}
function configure() {
  $('energy').value = Math.round(energy * 100);
  range($('energy'), ((energy * 100 - 10) / 90) * 100);
  $('energyvalue').textContent = Math.round(energy * 100) + '%';
  for (const b of $('ratios').children)
    b.setAttribute('aria-pressed', String(Number(b.dataset.index) === preset));
}
function takeControl() {
  show = false;
  parked = false;
}
for (const [i, r] of ratios.entries()) {
  const b = document.createElement('button');
  b.className = 'ratio';
  b.dataset.index = i;
  b.setAttribute('aria-label', r.label);
  b.innerHTML =
    '<svg viewBox="0 0 60 60" aria-hidden="true"><path d="' +
    diagram(i) +
    '"/></svg><span><small>' +
    (i === 3 ? '∞' : r.p + ' : ' + r.q) +
    '</small><strong>' +
    r.title +
    '</strong></span>';
  b.onclick = () => {
    if (rake !== null) return;
    takeControl();
    preset = i;
    time = 0;
    edited = true;
    drive.reset(preset, energy);
    bed.clear();
    configure();
    draw();
  };
  $('ratios').append(b);
}
for (const i of [0, 2, 1]) {
  const b = document.createElement('button');
  b.className = 'cam';
  b.dataset.index = i;
  b.innerHTML = '<svg><use href="#' + icons[i] + '"/></svg>' + cameraNames[i];
  b.onclick = () => {
    takeControl();
    manualOrbit = false;
    camID = i;
    draw(false);
  };
  $('cameras').append(b);
}
$('energy').oninput = (e) => {
  if (rake !== null) return;
  takeControl();
  energy = Number(e.target.value) / 100;
  edited = true;
  drive.setEnergy(time, energy);
  configure();
  draw();
};
$('reset').onclick = () => {
  takeControl();
  rake = 0;
  $('reset').disabled = true;
  $('reset').querySelector('span').textContent = 'Raking sand…';
  draw(false);
};
$('timeline').oninput = (e) => {
  filmTime(+e.target.value);
  if (sounding) sound(true, time);
};
$('showcase').onclick = () => {
  if (show && !parked) {
    parked = true;
  } else {
    filmTime(show && time < 30 ? time : 0);
    show = true;
    parked = false;
  }
  label();
  if (sounding) sound(true, time);
};
$('audio').onclick = async () => {
  sounding = !sounding;
  $('audio').setAttribute('aria-pressed', String(sounding));
  $('audio').querySelector('span').textContent = sounding ? 'Sound on' : 'Sound off';
  $('audio')
    .querySelector('use')
    .setAttribute('href', sounding ? '#sound' : '#mute');
  await sound(sounding, time);
};
$('expand').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await box.requestFullscreen();
};
document.addEventListener('fullscreenchange', () =>
  $('expand').setAttribute(
    'aria-label',
    document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen',
  ),
);
controls.addEventListener('start', () => {
  takeControl();
  manualOrbit = true;
  label();
});
function frame(now) {
  const elapsed = lastTime ? Math.max(0, (now - lastTime) / 1000) : 0;
  const dt = Math.min(0.065, elapsed);
  lastTime = now;
  if (!parked) {
    if (rake !== null) {
      rake = Math.min(1, rake + dt / 0.98);
      bed.rake(rake);
      instrument.sweep(rake);
      if (rake >= 1) {
        rake = null;
        time = 0;
        drive.reset(preset, energy);
        $('reset').disabled = false;
        $('reset').querySelector('span').textContent = 'Reset smooth sand';
      }
      draw(false);
    } else {
      time += show ? elapsed : dt;
      if (show && time >= 30) {
        time = 30;
        parked = true;
      }
      draw();
    }
  }
  requestAnimationFrame(frame);
}
new ResizeObserver(() => {
  resize();
  draw(false);
}).observe(box);
resize();
configure();
time = capture || film ? 0 : 21.4;
show = capture || film;
draw();
$('loading').hidden = true;
window.TOTAL_DURATION = 30.0;
window.renderAt = filmTime;
window.renderAudio = () => soundtrack(new OfflineAudioContext(2, 48000 * 30, 48000));
window.sandInfo = { resolution: bed.resolution, rate: 180, measure: bed.measure };
requestAnimationFrame(frame);
