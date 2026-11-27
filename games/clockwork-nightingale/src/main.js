import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { optics } from './optics.js';
import { studio, vec, TAU, finishMetals } from './craft.js';
import { plinth, branch, dome } from './cabinet.js';
import { nightingale } from './bird.js';
import { gearworks } from './gears.js';
import { camPosition, automatonDrive } from './movement.js';
import { workshop } from './workshop.js';
import { SoundBox, exhibit, filmAudio, smooth } from './score.js';

const $ = (id) => document.getElementById(id),
  params = new URLSearchParams(location.search);
const film = params.has('film'),
  capture = params.has('capture'),
  canvas = $('scene');
document.body.classList.toggle('film', film);
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: true,
  powerPreference: 'high-performance'
});
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
const lens = optics(renderer);
finishMetals();
const scene = new T.Scene();
scene.background = new T.Color(0x2b2b25);
scene.fog = new T.FogExp2(0x292827, 0.031);
scene.environment = studio(renderer);
scene.environmentIntensity = 0.85;
const camera = new T.PerspectiveCamera(32, 1, 0.045, 95);
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.dampingFactor = 0.086;
orbit.enablePan = false;
orbit.minDistance = 2.85;
orbit.maxDistance = 17;
orbit.minPolarAngle = 0.27;
orbit.maxPolarAngle = Math.PI * 0.484;
scene.add(new T.HemisphereLight(0xfff2d9, 0x74564c, 0.48));
function directional(x, y, z, color, intensity, shadow = false) {
  const l = new T.DirectionalLight(color, intensity);
  l.position.set(x, y, z);
  l.target.position.set(0, 1.8, 0);
  scene.add(l, l.target);
  if (shadow) {
    l.castShadow = true;
    l.shadow.mapSize.set(2048, 2048);
    Object.assign(l.shadow.camera, { left: -4.9, right: 4.9, top: 5.4, bottom: -4.3, near: 0.2, far: 22 });
    l.shadow.normalBias = 0.007;
    l.shadow.bias = -0.00015;
    l.shadow.radius = 2.4;
  }
}
directional(-3.8, 7.4, 4.5, 0xffe7c8, 1.8, true);
directional(3.3, 5.0, -3.5, 0xffce9a, 2.1);
directional(2.4, 4.5, 6.1, 0xc6e8ff, 0.92);
const pool = new T.SpotLight(0xffdda7, 72, 13, 0.73, 0.72, 2);
pool.position.set(-2.81, 3.37, -2.5);
pool.target.position.set(-0.15, 1.45, 0.14);
scene.add(pool, pool.target);
const room = await workshop(scene),
  base = plinth(scene);
branch(scene);
const mechanism = gearworks(scene),
  bird = nightingale(scene),
  bell = dome(scene),
  driveAssembly = automatonDrive(scene, bird);
const audio = new SoundBox();
let autoEpoch = 0;
const state = {
  t: 0,
  timeline: 0,
  e: 0,
  eTarget: 0,
  speed: 1,
  wind: 0.84,
  reserve: 0.84,
  cut: false,
  auto: false,
  frozen: capture,
  manualWind: 0,
  windStart: 0
};
const reserve = $('reserve'),
  segments = 36;
for (let i = 0; i < segments; i++) reserve.append(document.createElement('b'));
function slider(node, value) {
  node.value = value;
  node.style.setProperty(
    '--v',
    (100 * (value - Number(node.min))) / (Number(node.max) - Number(node.min)) + '%'
  );
}
function ui() {
  slider($('explode'), state.eTarget * 100);
  $('explode-read').value = Math.round(state.eTarget * 100) + '%';
  slider($('speed'), state.speed);
  $('speed-read').value =
    Number(state.speed.toFixed(2)).toLocaleString('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    }) + '×';
  const pct = Math.round(state.reserve * 100);
  $('power-read').value = pct + '%';
  reserve.setAttribute('aria-valuenow', pct);
  [...reserve.children].forEach((s, k) => s.classList.toggle('on', (k + 0.5) / segments <= state.reserve));
  slider($('time'), state.timeline);
  $('clock').value = '00:' + String(Math.floor(state.timeline)).padStart(2, '0');
}
let layout;
function resize() {
  const w = innerWidth,
    h = innerHeight;
  renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.65));
  renderer.setSize(w, h, false);
  const rect = document.querySelector('.viewport').getBoundingClientRect();
  layout = film ? { width: w, height: h, left: 0, top: 0 } : rect;
  camera.aspect = w / h;
  const cx = layout.left + layout.width * 0.515,
    cy = layout.top + layout.height * 0.527;
  if (film) camera.clearViewOffset();
  else camera.setViewOffset(w, h, w / 2 - cx, h / 2 - cy, w, h);
  camera.updateProjectionMatrix();
  lens.resize(canvas.width, canvas.height, cx / w, cy / h);
}
function pose(eye, target, fov) {
  camera.fov = fov;
  camera.position.copy(eye);
  orbit.target.copy(target);
  camera.updateProjectionMatrix();
  camera.lookAt(target);
}
function galleryCamera(t = 0, e = 0) {
  const h = innerHeight,
    w = innerWidth;
  const viewH = (Math.max(6.02, (4.85 * layout.height) / layout.width) * h) / layout.height;
  const distance = (viewH + e * 2.12) / (2 * Math.tan(T.MathUtils.degToRad(32) / 2));
  const angle = 0.19 + 0.13 * Math.sin((t / 30) * TAU - 0.4),
    alt = 0.175 + 0.035 * Math.sin(t * 0.17);
  const center = vec(0, 2.12 + e * 0.83, 0);
  pose(
    vec(Math.sin(angle) * distance, Math.sin(alt) * distance, Math.cos(angle) * Math.cos(alt) * distance).add(
      center
    ),
    center,
    32
  );
}
function filmCamera(t, e) {
  let target, distance, angle, alt, fov;
  if (t < 5.0) {
    const k = smooth(t / 5);
    target = vec(-0.12, 2.15 + 0.04 * k, 0);
    distance = 11.04 - 0.47 * k;
    angle = 0.34 - 0.15 * k;
    alt = 0.173 + 0.025 * k;
    fov = 31.6;
  } else if (t < 8.9) {
    const k = smooth((t - 5) / 3.9);
    target = vec(-0.21 + 0.13 * k, 2.63 + 0.055 * k, 0.03);
    distance = 6.03 - 0.28 * k;
    angle = 0.21 - 0.23 * k;
    alt = 0.12 + 0.035 * k;
    fov = 26;
  } else if (t < 12.45) {
    const k = smooth((t - 8.9) / 3.55);
    target = vec(-0.15 + 0.23 * k, 1.15 + 0.18 * k, 0.4);
    distance = 5.7 + 0.52 * k;
    angle = 0.5 - 0.21 * k;
    alt = 0.44 - 0.1 * k;
    fov = 26.5;
  } else if (t >= 17.65 && t < 20.85) {
    const k = smooth((t - 17.65) / 3.2);
    target = vec(-0.97 + 0.39 * k, 1.27 + 0.12 * k, 1.1);
    distance = 5.2 + 0.46 * k;
    angle = 0.25 + 0.25 * k;
    alt = 0.34 + 0.08 * k;
    fov = 28;
  } else if (t < 23.7) {
    const k = smooth((t - 12.45) / 11.25);
    target = vec(0, 2.48 + 0.73 * e, 0);
    distance = 11.65 + 1.62 * e;
    angle = -0.26 + 0.78 * k;
    alt = 0.17 + 0.078 * k;
    fov = 32;
  } else {
    const k = smooth((t - 23.7) / 6.3);
    target = vec(-0.05, 2.25 - 0.12 * k, 0);
    distance = 11.03 - 0.34 * k;
    angle = 0.39 - 0.2 * k;
    alt = 0.205 - 0.034 * k;
    fov = 30.9;
  }
  pose(
    vec(Math.sin(angle) * Math.cos(alt), Math.sin(alt), Math.cos(angle) * Math.cos(alt))
      .multiplyScalar(distance)
      .add(target),
    target,
    fov
  );
}
function labels() {
  if (film || layout.width < 460) return;
  const v = vec(0, 0, 0);
  const put = (el, obj, local) => {
    v.copy(local);
    obj.localToWorld(v);
    v.project(camera);
    const x = (v.x * 0.5 + 0.5) * innerWidth - layout.left,
      y = (-v.y * 0.5 + 0.5) * innerHeight - layout.top;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    const crowded = y < 105 && x < 365;
    el.style.opacity =
      crowded ||
      y < 23 ||
      y > layout.height - 45 ||
      x < 15 ||
      x > layout.width - 15 ||
      (!el.classList.contains('left') && x + 165 > layout.width) ||
      (el.classList.contains('left') && x < 155)
        ? '0'
        : '1';
  };
  put($('label-bird'), bird.head, vec(0.33, 0.24, 0.22));
  put($('label-drum'), mechanism.drum, vec(-0.66, 0.095, 0.31));
}
function draw() {
  room.update(state.t);
  base.update(state.wind, state.t, state.reserve);
  mechanism.update(state.t, state.e);
  const drive = camPosition(state.t);
  bird.update(state.t, state.e, state.cut, drive);
  driveAssembly(state.t, state.e, state.wind, drive, state.reserve);
  bell.update(state.e, state.cut);
  lens.draw(
    scene,
    camera,
    camera.position.distanceTo(orbit.target),
    film &&
      ((state.timeline >= 5 && state.timeline < 12.45) || (state.timeline >= 17.65 && state.timeline < 20.85))
  );
  labels();
}
function showcase(t) {
  if (state.manualWind > 0) {
    state.manualWind = 0;
    $('wind').querySelector('span').textContent = 'Wind key';
  }
  state.timeline = Math.min(30, Math.max(0, Number(t) || 0));
  const s = exhibit(state.timeline);
  state.t = s.motion;
  state.e = state.eTarget = s.explosion;
  state.reserve = s.reserve;
  state.wind = s.wind;
  if (film) {
    filmCamera(state.timeline, state.e);
    const t = state.timeline,
      title = $('film-title'),
      caption = $('film-caption');
    title.style.opacity = smooth(t / 0.65) * (1 - smooth((t - 3.65) / 0.88));
    const shots = [
      [5, 8.9, 'I', 'The avian movement'],
      [8.9, 12.45, 'II', 'Cylinder & escapement'],
      [12.45, 17.65, 'III', 'Exploded movement'],
      [17.65, 20.85, 'IV', 'Spring barrel & cam train']
    ];
    const shot = shots.find(([start, end]) => t >= start && t < end);
    caption.style.opacity = shot
      ? smooth((t - shot[0]) / 0.45) * (1 - smooth((t - shot[0] - 2.1) / 0.55))
      : 0;
    if (shot) {
      caption.querySelector('i').textContent = shot[2];
      caption.querySelector('span').textContent = shot[3];
    }
    $('film-fade').style.opacity = Math.max((1 - smooth(t / 0.45)) * 0.76, smooth((t - 29.05) / 0.95));
  } else galleryCamera(state.timeline, state.e);
  ui();
  draw();
}
function playFlag(v) {
  state.auto = v;
  $('play-label').textContent = v ? 'Pause showcase' : 'Auto showcase';
  $('auto')
    .querySelector('use')
    .setAttribute('href', v ? '#pause' : '#play');
  $('status-text').textContent = v ? 'Showcase playing' : 'Mechanism live';
}
function interactive() {
  if (state.auto) playFlag(false);
  state.frozen = false;
}
$('auto').onclick = () => {
  if (state.auto) {
    playFlag(false);
    state.frozen = true;
    return;
  }
  if (state.timeline >= 29.999) state.timeline = 0;
  state.frozen = false;
  state.speed = 1;
  autoEpoch = performance.now() - state.timeline * 1000;
  playFlag(true);
  showcase(state.timeline);
};
$('time').oninput = (e) => {
  playFlag(false);
  state.frozen = true;
  showcase(+e.target.value);
};
$('explode').oninput = (e) => {
  interactive();
  state.eTarget = +e.target.value / 100;
  $('explode-read').value = Math.round(+e.target.value) + '%';
};
$('speed').oninput = (e) => {
  interactive();
  state.speed = +e.target.value;
  ui();
};
$('wind').onclick = () => {
  interactive();
  state.manualWind = 1.25;
  state.windStart = state.wind;
  state.reserve = 1;
  audio.winding();
  $('wind').querySelector('span').textContent = 'Winding…';
  ui();
};
$('cut').onclick = () => {
  interactive();
  state.cut = !state.cut;
  $('cut').setAttribute('aria-checked', state.cut);
  draw();
};
$('sound').onclick = async () => {
  if (audio.active) await audio.disable();
  else await audio.enable();
  $('sound').setAttribute('aria-checked', !!audio.active);
};
$('reset').onclick = () => {
  interactive();
  orbit.reset();
  galleryCamera(0, state.e);
  orbit.update();
  draw();
};
orbit.addEventListener('start', () => interactive());
orbit.addEventListener('change', () => {
  if (state.frozen) draw();
});
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  playFlag(false);
  state.frozen = true;
  state.cut = false;
  state.speed = 1;
  $('cut').setAttribute('aria-checked', 'false');
  showcase(t);
};
window.renderFilmAudio = filmAudio;
window.sceneStats = () => {
  const gl = renderer.getContext(),
    debug = gl.getExtension('WEBGL_debug_renderer_info');
  return { renderer: debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) };
};
window.addEventListener('resize', () => {
  resize();
  if (film) filmCamera(state.timeline, state.e);
  else galleryCamera(state.timeline, state.e);
  draw();
});
resize();
if (film) filmCamera(0, 0);
else galleryCamera();
orbit.update();
orbit.saveState();
ui();
draw();
await document.fonts.ready;
document.body.classList.add('ready');
window.sceneReady = true;
let prev = performance.now(),
  lastUI = 0;
function tick(now) {
  requestAnimationFrame(tick);
  const dt = Math.min(0.1, (now - prev) / 1000);
  prev = now;
  if (state.frozen) return;
  if (state.auto) {
    showcase(Math.min(30, (now - autoEpoch) / 1000));
    if (state.timeline >= 30) playFlag(false);
  } else {
    state.t += dt * state.speed * (state.reserve > 0 ? 1 : 0);
    state.reserve = Math.max(0, state.reserve - dt * state.speed * 0.00053);
    const oldE = state.e;
    state.e += (state.eTarget - state.e) * (1 - Math.exp(-dt * 12));
    if (Math.abs(state.eTarget - state.e) < 0.0003) state.e = state.eTarget;
    if (state.e !== oldE) {
      const delta = state.e - oldE,
        direction = camera.position.clone().sub(orbit.target).normalize();
      orbit.target.y += 0.83 * delta;
      camera.position.y += 0.83 * delta;
      camera.position.addScaledVector(direction, delta * 3.7);
    }
    if (state.manualWind > 0) {
      state.manualWind = Math.max(0, state.manualWind - dt);
      state.wind = state.windStart + smooth(1 - state.manualWind / 1.25);
      if (!state.manualWind) $('wind').querySelector('span').textContent = 'Wind key';
    }
    orbit.update();
    draw();
    if (now - lastUI > 110) {
      ui();
      lastUI = now;
    }
  }
  audio.update(state.t);
}
requestAnimationFrame(tick);
