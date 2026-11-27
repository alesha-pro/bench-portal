import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { v, clamp, mix, photo, envMap, range } from './core.js';
import { makeGeology } from './geology.js';
import { biosphere } from './flora.js';
import { cabinet } from './cabinet.js';
import { colony } from './ants.js';
import { magnifier } from './optics.js';
const $ = (s) => document.querySelector(s),
  canvas = $('#colony'),
  stage = $('.viewer');
const capture = new URLSearchParams(location.search).has('capture');
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(capture ? 1 : Math.min(1.65, devicePixelRatio));
renderer.outputColorSpace = T.SRGBColorSpace;
const scene = new T.Scene();
scene.background = new T.Color(0x454334);
const camera = new T.PerspectiveCamera(33, 1, 0.045, 100);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.minDistance = 1.64;
controls.maxDistance = 19;
controls.minAzimuthAngle = -0.48;
controls.maxAzimuthAngle = 0.48;
controls.minPolarAngle = 1.02;
controls.maxPolarAngle = 1.76;
await Promise.all(
  ['16px Plex', '78px Instrument', 'italic 60px Instrument'].map((f) => document.fonts.load(f)),
);
const [study, soil, moss] = await Promise.all([
  photo('study'),
  photo('strata'),
  photo('moss'),
  document.fonts.ready,
]);
scene.environment = envMap(renderer, study);
scene.environmentIntensity = 0.72;
const sky = new T.HemisphereLight(0xffefcf, 0x9e806f, 1.34);
scene.add(sky);
const sun = new T.DirectionalLight(0xffdd9e, 2.35);
sun.position.set(-5, 7, 5);
scene.add(sun);
const fill = new T.DirectionalLight(0xb7e4d3, 0.85);
fill.position.set(4, 2, 3);
scene.add(fill);
const amber = new T.DirectionalLight(0xffa94f, 0.58);
amber.position.set(1, -1, 3);
scene.add(amber);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -5.8, right: 5.8, top: 4.1, bottom: -4.1, near: 0.5, far: 20 });
sun.shadow.bias = -0.00055;
sun.shadow.normalBias = 0.009;
makeGeology(scene, soil);
cabinet(scene, study, soil);
const dew = biosphere(scene, moss),
  ants = colony(scene),
  lens = magnifier(scene, renderer, camera);
scene.traverse((o) => {
  if (!o.isMesh) return;
  const m = o.material;
  if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
    o.receiveShadow = true;
    o.castShadow = (o.isInstancedMesh || m.color?.getHex() === 0x56432b) && !m.transparent;
  }
});
const coords = [],
  phases = [];
for (let i = 0; i < 150; i++) {
  coords.push(range(-6.8, 6.8), range(1.05, 4.44), range(-2.2, 2.0));
  phases.push(range(0, 7));
}
const dust = new T.BufferGeometry();
dust.setAttribute('position', new T.Float32BufferAttribute(coords, 3));
dust.setAttribute('phase', new T.Float32BufferAttribute(phases, 1));
const dustMat = new T.ShaderMaterial({
  transparent: true,
  depthWrite: false,
  uniforms: { t: { value: 0 }, ratio: { value: 1 } },
  vertexShader: `attribute float phase;uniform float t,ratio;varying float alpha;void main(){vec3 p=position;p.x+=.12*sin(t*.29+phase);p.y+=.11*sin(t*.34+phase);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(7./-mv.z,1.,2.7)*ratio;alpha=(.22+.25*sin(phase+t*.6))*(.4+.6*exp(-abs(p.x+2.)));}`,
  fragmentShader: `varying float alpha;void main(){float f=clamp(1.-2.*length(gl_PointCoord-.5),0.,1.);gl_FragColor=vec4(.99,.90,.64,alpha*f);}`,
});
scene.add(new T.Points(dust, dustMat));
const labels = {
  full: ['Habitat', 'The living cross-section'],
  macro: ['Optical study', 'Traffic beneath the glass'],
  queen: ['Royal nursery', 'The queen and her brood'],
  surface: ['Surface ecology', 'A forest in miniature'],
  fungus: ['Fungal gardens', 'Cultivating the glow'],
};
function caption(name) {
  $('#sceneTag').textContent = 'PLATE IV  /  ' + labels[name][0].toUpperCase();
  $('#sceneTitle').textContent = labels[name][1];
}
function selected(name) {
  document.querySelectorAll('[data-camera]').forEach((b) => {
    let yes = b.dataset.camera === name;
    b.classList.toggle('selected', yes);
    b.setAttribute('aria-pressed', String(yes));
  });
}
let parked = false,
  mode = 'full',
  auto = false,
  timeline = 0,
  sim = 0,
  speed = 1,
  transition = null,
  drag = false,
  feastUntil = -1,
  prev = performance.now();
const lensGoal = new T.Vector2(0.58, -0.1);
function lighting(value) {
  let s = value / 100;
  sun.intensity = 0.68 + s * 2.5;
  amber.intensity = 1.1 - 0.93 * s;
  sky.intensity = 0.84 + s * 0.23;
  fill.intensity = 0.39 + s * 0.27;
  $('#lightValue').value = Math.round(value) + '%';
  $('#light').style.setProperty('--level', value + '%');
}
lighting(55);
function wide() {
  const d = Math.max(12.76, 20.5 / camera.aspect);
  return { eye: v(1.05, 1.3, d), look: v(0.02, -0.24, -0.11), l: [0.6, -0.1] };
}
function preset(name) {
  if (name === 'full') return wide();
  if (name === 'macro')
    return { eye: v(-2.03, 0.12, 5.0), look: v(-2.51, -0.36, 0.07), l: [-2.53, -0.37] };
  return { eye: v(1.16, -1.14, 2.91), look: v(0.98, -1.54, -0.16), l: [-2.55, -0.33] };
}
function cameraTo(eye, look) {
  camera.position.copy(eye);
  controls.target.copy(look);
  camera.lookAt(look);
  camera.updateMatrixWorld();
}
function applyPreset(name, immediate = false) {
  auto = false;
  showButton();
  mode = name;
  selected(name);
  caption(name);
  const p = preset(name);
  lensGoal.set(...p.l);
  if (immediate) {
    cameraTo(p.eye, p.look);
    lens.set(...p.l);
    transition = null;
  } else
    transition = {
      start: performance.now(),
      eye: camera.position.clone(),
      look: controls.target.clone(),
      to: p,
    };
}
function ease(a) {
  return a * a * (3 - 2 * a);
}
function take(a, b, u) {
  return a.clone().lerp(b, ease(clamp(u, 0, 1)));
}
function shot(t) {
  let eye, look, l, section, view;
  if (t < 4.6) {
    const p = wide(),
      u = t / 4.6;
    eye = take(p.eye.clone().add(v(0.95, 0.31, 0.72)), p.eye.clone().add(v(-0.12, -0.12, -0.36)), u);
    look = take(v(0, -0.23, -0.2), v(-0.18, -0.19, -0.18), u);
    l = [0.62 - 0.23 * ease(u), -0.07];
    section = 'full';
    view = 'full';
  } else if (t < 9.7) {
    const u = (t - 4.6) / 5.1;
    eye = take(v(-2.19, 2.1, 4.24), v(-1.03, 1.88, 3.12), u);
    look = take(v(-2.43, 1.75, -0.42), v(-1.3, 1.64, -0.34), u);
    l = [1.4, -0.55];
    section = 'surface';
    view = '';
  } else if (t < 16.8) {
    const u = (t - 9.7) / 7.1,
      f = ease(u);
    l = [mix(1.72, -2.53, f), mix(0.03, -0.4, f) + 0.18 * Math.sin(Math.PI * u)];
    eye = take(v(2.18, 0.43, 8.23), v(-2.06, -0.03, 5.62), u);
    look = v(l[0] * 0.89, l[1] + 0.03, 0.15);
    section = 'macro';
    view = 'macro';
  } else if (t < 21.0) {
    const u = (t - 16.8) / 4.2;
    l = [-2.54 + 0.17 * u, -0.43 + 0.08 * u];
    eye = take(v(-2.41, -0.18, 4.95), v(-2.36, -0.26, 4.1), u);
    look = v(-2.46, -0.42, 0.03);
    section = 'macro';
    view = 'macro';
  } else if (t < 26.2) {
    const u = (t - 21) / 5.2;
    l = [-2.54, -0.45];
    eye = take(v(1.32, -1.05, 3.12), v(0.91, -1.28, 2.34), u);
    look = take(v(1.08, -1.55, -0.16), v(0.91, -1.51, -0.16), u);
    section = 'queen';
    view = 'queen';
  } else {
    const u = (t - 26.2) / 3.8;
    l = [-2.54, -0.45];
    eye = take(v(2.9, -0.09, 2.67), v(2.61, -0.12, 2.05), u);
    look = take(v(2.62, -0.29, -0.12), v(2.5, -0.36, -0.1), u);
    section = 'fungus';
    view = '';
  }
  cameraTo(eye, look);
  lens.set(...l);
  lensGoal.set(...l);
  caption(section);
  selected(view);
}
function resize() {
  let w = canvas.clientWidth,
    h = canvas.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  dustMat.uniforms.ratio.value = renderer.getPixelRatio();
  if (!auto && mode === 'full' && !drag) applyPreset('full', true);
}
function draw(t) {
  renderer.shadowMap.needsUpdate = true;
  ants.update(t);
  dew(t);
  dustMat.uniforms.t.value = t;
  lens.render(camera.position.distanceTo(controls.target), Number($('#light').value) / 100, timeline);
}
function showButton() {
  let b = $('#show');
  b.setAttribute('aria-pressed', String(auto));
  $('#playGlyph').setAttribute('href', auto ? '#pause' : '#play');
}
function endAuto() {
  if (auto) {
    auto = false;
    showButton();
    selected('');
  }
  transition = null;
}
$('#show').onclick = () => {
  auto = !auto;
  showButton();
  if (auto) {
    transition = null;
    timeline = 0;
    sim = 0;
    ants.reset();
    feastUntil = -1;
    resetFeast();
    shot(0);
  } else {
    mode = 'free';
    selected('');
  }
};
for (let b of document.querySelectorAll('[data-camera]')) b.onclick = () => applyPreset(b.dataset.camera);
$('#activity').oninput = (e) => {
  speed = Number(e.target.value);
  $('#speedValue').value = speed.toFixed(1) + '×';
  e.target.style.setProperty('--level', speed * 50 + '%');
};
$('#light').oninput = (e) => lighting(Number(e.target.value));
function resetFeast() {
  $('#feast span').textContent = 'Drop Honeydew Feast';
}
$('#feast').onclick = () => {
  endAuto();
  ants.drop(sim, controls.target);
  feastUntil = performance.now() + 3200;
  $('#feast span').textContent = 'Workers gathering';
  if (capture) draw(sim);
};
$('#expand').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await stage.requestFullscreen();
};
const ray = new T.Raycaster(),
  plane = new T.Plane(v(0, 0, 1), -1.23),
  hit = v(),
  offset = new T.Vector2();
function pointer(e) {
  const r = canvas.getBoundingClientRect();
  ray.setFromCamera(
    new T.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, 1 - ((e.clientY - r.top) / r.height) * 2),
    camera,
  );
  return ray.ray.intersectPlane(plane, hit);
}
canvas.addEventListener(
  'pointerdown',
  (e) => {
    if (e.button !== 0 || !pointer(e)) return;
    if (Math.hypot(hit.x - lens.pos.x, hit.y - lens.pos.y) < 1.15) {
      endAuto();
      drag = true;
      controls.enabled = false;
      offset.set(lens.pos.x - hit.x, lens.pos.y - hit.y);
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'grabbing';
      e.stopImmediatePropagation();
    } else {
      endAuto();
      mode = 'free';
      selected('');
    }
  },
  true,
);
canvas.addEventListener('pointermove', (e) => {
  if (!pointer(e)) return;
  if (drag) {
    lensGoal.set(clamp(hit.x + offset.x, -3.65, 3.62), clamp(hit.y + offset.y, -2.32, 1.89));
    lens.set(lensGoal.x, lensGoal.y);
    if (capture) draw(sim);
  }
  canvas.style.cursor = drag
    ? 'grabbing'
    : Math.hypot(hit.x - lens.pos.x, hit.y - lens.pos.y) < 1.15
      ? 'grab'
      : 'move';
});
function release() {
  drag = false;
  controls.enabled = true;
  canvas.style.cursor = 'grab';
}
canvas.addEventListener('pointerup', release);
canvas.addEventListener('pointercancel', release);
canvas.addEventListener(
  'wheel',
  () => {
    endAuto();
    mode = 'free';
    selected('');
  },
  { passive: true },
);
function tick(now) {
  const dt = Math.max(0, (now - prev) / 1000);
  prev = now;
  if (parked) {
    requestAnimationFrame(tick);
    return;
  }
  sim += dt * speed;
  if (auto) {
    timeline = (timeline + dt) % 30;
    shot(timeline);
  } else if (transition) {
    let p = transition,
      u = clamp((now - p.start) / 980, 0, 1);
    cameraTo(take(p.eye, p.to.eye, u), take(p.look, p.to.look, u));
    if (u >= 1) transition = null;
  } else controls.update();
  if (!auto && !drag)
    lens.set(
      mix(lens.pos.x, lensGoal.x, 1 - Math.exp(-dt * 6)),
      mix(lens.pos.y, lensGoal.y, 1 - Math.exp(-dt * 6)),
    );
  if (feastUntil > 0 && now > feastUntil) {
    feastUntil = -1;
    resetFeast();
  }
  draw(sim);
  requestAnimationFrame(tick);
}
function resume() {
  if (parked) {
    parked = false;
    prev = performance.now();
  }
}
for (const type of ['pointerdown', 'wheel', 'click', 'input'])
  document.addEventListener(type, resume, true);
window.TOTAL_DURATION = 30.0;
resize();
applyPreset('full', true);
draw(0);
window.renderAt = (t) => {
  t = clamp(Number(t) || 0, 0, 30);
  parked = true;
  auto = false;
  showButton();
  ants.reset();
  transition = null;
  sim = t;
  timeline = t;
  shot(t);
  draw(t);
};
new ResizeObserver(() => {
  if (
    canvas.width !== Math.round(canvas.clientWidth * renderer.getPixelRatio()) ||
    canvas.height !== Math.round(canvas.clientHeight * renderer.getPixelRatio())
  ) {
    resize();
    if (capture || parked) window.renderAt(timeline);
  }
}).observe(canvas);
if (!capture) requestAnimationFrame(tick);
