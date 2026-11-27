import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { V, finishes, lightMap, batch, clock, phase, glow, reaction } from './workshop.js';
import { optics } from './optics.js';
import { apparatus, animate } from './apparatus.js';
import { alcove } from './alcove.js';

const capture = new URLSearchParams(location.search).has('capture');
const film = new URLSearchParams(location.search).has('film');
document.body.classList.toggle('film', film);
const canvas = document.querySelector('#atelier');
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: false,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance',
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.setClearColor(0x151815);
const wall = await finishes();
const pipeline = optics(renderer, lightMap(renderer, wall));
alcove(wall);
apparatus();
batch();
const cam = new T.PerspectiveCamera(33, 16 / 9, 0.035, 80),
  controls = new OrbitControls(cam, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.09;
controls.enablePan = false;
controls.minPolarAngle = 0.49;
controls.maxPolarAngle = 1.51;
controls.minAzimuthAngle = -1.1;
controls.maxAzimuthAngle = 1.12;
controls.minDistance = 2.1;
controls.maxDistance = 15.5;
controls.rotateSpeed = 0.65;
const views = {
  full: { eye: [1.35, 3.9, 10.35], look: [-0.13, 1.51, -0.04], fov: 34.8 },
  drip: { eye: [1.54, 2.47, 3.86], look: [0.47, 1.26, 0.12], fov: 34.5 },
  boil: { eye: [-3.54, 2.56, 4.27], look: [-2.15, 1.47, 0.13], fov: 35.8 },
  tincture: { eye: [3.9, 2.46, 4.71], look: [2.83, 1.12, 0.1], fov: 34 },
};
const shots = [
  [0, 6.6, 'full', [0.82, 0.23, 0.13], [-0.13, 0.02, 0]],
  [6.6, 12.6, 'boil', [0.57, 0.28, -0.04], [0.07, 0.06, -0.02]],
  [12.6, 19.2, 'drip', [-0.81, 0.61, 0.02], [-0.05, -0.25, 0]],
  [19.2, 24.3, 'tincture', [-0.64, 0.2, 0.08], [0.21, -0.045, 0.13]],
  [24.3, 30, 'full', [-1.13, 0.31, -0.24], [0.1, -0.02, 0]],
];
const ui = {
  buttons: [...document.querySelectorAll('[data-view]')],
  auto: document.querySelector('#auto'),
  heat: document.querySelector('#heat'),
  glow: document.querySelector('#glow'),
  add: document.querySelector('#add'),
  progress: document.querySelector('.track i'),
};
let heat = 1,
  auto = true,
  seekMode = capture,
  time = 0,
  showTime = 0,
  elapsed = 0,
  pulse = -99,
  last = performance.now(),
  slide = null;
function setSelected(name) {
  ui.buttons.forEach((b) => {
    const on = b.dataset.view === name;
    b.classList.toggle('selected', on);
    b.setAttribute('aria-pressed', String(on));
  });
}
function autoUI() {
  ui.auto.setAttribute('aria-pressed', String(auto));
  ui.auto.querySelector('.playmark').textContent = auto ? 'Ⅱ' : '▷';
}
// Preserve the whole glass train on a phone while bringing the active
// vessels closer than a strict landscape-to-portrait fit would allow.
function framingScale() {
  if (cam.aspect < 1) return (16 / 9) * Math.pow(1 / cam.aspect, 0.30);
  return Math.max(1, 16 / 9 / cam.aspect);
}
function cameraPose(name, eye, look, fov) {
  const portrait = framingScale();
  cam.position.copy(eye);
  controls.target.copy(look);
  cam.fov = (2 * Math.atan(Math.tan((fov * Math.PI) / 360) * portrait) * 180) / Math.PI;
  cam.updateProjectionMatrix();
  cam.lookAt(look);
  setSelected(name);
}
function showcase(t) {
  const [start, end, name, move, aim] = shots.find((s) => t < s[1]) || shots.at(-1);
  const v = views[name],
    u = (t - start) / (end - start) - 0.5;
  cameraPose(
    name,
    V(...v.eye).addScaledVector(V(...move), u),
    V(...v.look).addScaledVector(V(...aim), u),
    v.fov,
  );
}
let viewportInitialized = false;
function resize() {
  const width = canvas.clientWidth,
    height = canvas.clientHeight;
  const dpr = capture ? 1 : Math.min(devicePixelRatio || 1, 1.65);
  if (
    !width ||
    !height ||
    (viewportInitialized &&
      canvas.width === Math.floor(width * dpr) &&
      canvas.height === Math.floor(height * dpr))
  )
    return;
  const oldScale = framingScale();
  cam.aspect = width / height;
  if (!auto) {
    const newScale = framingScale();
    cam.fov =
      (2 * Math.atan((Math.tan((cam.fov * Math.PI) / 360) * newScale) / oldScale) * 180) / Math.PI;
  }
  if (renderer.getPixelRatio() !== dpr) renderer.setPixelRatio(dpr);
  renderer.setSize(width, height, false);
  pipeline.resize(canvas.width, canvas.height);
  viewportInitialized = true;
  if (auto) showcase(showTime);
  else cam.updateProjectionMatrix();
}
function draw(t, p, age) {
  const filmTime = auto ? showTime : t;
  clock.value = t;
  phase.value = p;
  reaction.value = age;
  animate(t, heat, canvas.height);
  pipeline.render(
    cam,
    cam.position.distanceTo(controls.target),
    film ? Math.min(1, filmTime / 0.72, Math.max(0, (29.97 - filmTime) / 0.86)) : 1,
    film
      ? T.MathUtils.smoothstep(filmTime, 0.24, 0.88) *
          (1 - T.MathUtils.smoothstep(filmTime, 3.25, 4.15))
      : 0,
  );
  ui.progress.style.transform = 'scaleX(' + Math.min(1, showTime / 30) + ')';
}
function impulse(t) {
  return t >= 24.9 ? t - 24.9 : t >= 14.1 && t < 18.9 ? t - 14.1 : -100;
}
let frameRequest = 0;
function animateFrame(now) {
  frameRequest = 0;
  const dt = Math.max(0, (now - last) / 1000);
  last = now;
  if (!seekMode) {
    resize();
    time += dt;
    elapsed += dt * heat;
    if (auto) {
      showTime = (showTime + dt) % 30;
      showcase(showTime);
    } else if (slide) {
      slide.u = Math.min(1, slide.u + dt * 1.55);
      const q = slide.u * slide.u * (3 - 2 * slide.u),
        v = views[slide.name];
      cameraPose(
        slide.name,
        slide.eye.clone().lerp(V(...v.eye), q),
        slide.look.clone().lerp(V(...v.look), q),
        T.MathUtils.lerp(slide.fov, v.fov, q),
      );
      if (slide.u === 1) {
        slide = null;
        controls.update();
      }
    } else controls.update();
    const manual = time - pulse;
    draw(time, elapsed, manual < 4.4 ? manual : auto ? impulse(showTime) : -100);
  }
  if (!seekMode) frameRequest = requestAnimationFrame(animateFrame);
}
function interaction() {
  if (seekMode) last = performance.now();
  seekMode = false;
  if (!frameRequest) frameRequest = requestAnimationFrame(animateFrame);
}
function stopAuto() {
  auto = false;
  autoUI();
}
controls.addEventListener('start', () => {
  interaction();
  slide = null;
  stopAuto();
  setSelected('orbit');
});
ui.auto.addEventListener('click', () => {
  interaction();
  slide = null;
  auto = !auto;
  if (auto) showTime = 0;
  autoUI();
});
ui.buttons.forEach((b) =>
  b.addEventListener('click', () => {
    interaction();
    stopAuto();
    slide = {
      name: b.dataset.view,
      u: 0,
      eye: cam.position.clone(),
      look: controls.target.clone(),
      fov:
        (2 *
          Math.atan(Math.tan((cam.fov * Math.PI) / 360) / framingScale()) *
          180) /
        Math.PI,
    };
    setSelected(b.dataset.view);
  }),
);
function sliders() {
  heat = Number(ui.heat.value);
  glow.value = Number(ui.glow.value);
  document.querySelector('#heatValue').textContent =
    heat.toFixed(2).replace(/(\.\d)0$/, '$1') + '×';
  document.querySelector('#glowValue').textContent = Math.round(glow.value * 100) + '%';
  for (const el of [ui.heat, ui.glow])
    el.style.setProperty('--fill', (100 * (el.value - el.min)) / (el.max - el.min) + '%');
}
for (const el of [ui.heat, ui.glow])
  el.addEventListener('input', () => {
    interaction();
    sliders();
  });
ui.add.addEventListener('click', () => {
  interaction();
  pulse = time;
});
window.TOTAL_DURATION = 30.0;
window.renderAt = function (t) {
  seekMode = true;
  resize();
  time = showTime = T.MathUtils.clamp(Number(t) || 0, 0, 30);
  elapsed = time * heat;
  slide = null;
  showcase(time);
  draw(time, elapsed, impulse(time));
};
sliders();
resize();
window.addEventListener('resize', () => {
  resize();
  if (seekMode) window.renderAt(showTime);
});
window.renderAt(0);
document.querySelector('#loading').hidden = true;
if (!capture) interaction();
