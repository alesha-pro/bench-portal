import { T, V, texture, canvasTex } from './craft.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { makePiano } from './piano.js';
import { buildGrotto, reef } from './grotto.js';
import { fishSchools, dust, bubbles } from './life.js';
import { lightCavern, projectCaustics, optics } from './water.js';
import { score, wake, mute, hear, renderAudio } from './sonata.js';
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)],
  clamp = T.MathUtils.clamp;
const query = new URLSearchParams(location.search),
  film = query.has('film'),
  capture = query.has('capture');
document.body.classList.toggle('film', film);
window.TOTAL_DURATION = 30.0;
window.renderAudio = renderAudio;
const canvas = $('#cenote'),
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance',
  });
renderer.autoClear = false;
renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.65));
const scene = new T.Scene();
scene.background = new T.Color(0x155957);
const camera = new T.PerspectiveCamera(39, 1, 0.06, 72),
  orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.dampingFactor = 0.085;
orbit.minDistance = 1.18;
orbit.maxDistance = 11;
orbit.maxPolarAngle = Math.PI * 0.49;
orbit.minPolarAngle = 0.1;
orbit.enablePan = false;
const names = {
  back: ['cenote.jpg'],
  rock: ['karst.jpg', 1.6],
  rockH: ['limestone-height.jpg', 2, true],
  sand: ['silt.jpg', 12],
  sandH: ['sand-height.jpg', 12, true],
  wood: ['cedar.jpg'],
  lacquer: ['lacquer.jpg'],
  bronze: ['bronze.jpg'],
  fan: ['lace-fan.webp'],
  whip: ['whip-fan.webp'],
  flower: ['flower.webp'],
  tubes: ['tubes.webp'],
  field: ['caustic.png', 1, true],
};
const tex = Object.fromEntries(
  await Promise.all(Object.entries(names).map(async ([k, args]) => [k, await texture(...args)])),
);
await Promise.all([
  document.fonts.load('20px Instrument'),
  document.fonts.load('italic 20px Instrument'),
  document.fonts.load('12px Plex'),
]);
for (const key of ['rock', 'sand', 'lacquer', 'bronze'])
  tex[key].wrapS = tex[key].wrapT = T.MirroredRepeatWrapping;
lightCavern(scene, renderer, tex.back);
buildGrotto(scene, tex);
const piano = makePiano(scene, tex),
  kelp = reef(scene, tex),
  fish = fishSchools(scene),
  motes = dust(scene);
const clock = { value: 0 },
  power = { value: 1 };
projectCaustics(scene, tex.field, clock, power);
const water = optics(renderer, tex.field),
  drawBubbles = bubbles(water.world, water);
const titleCam = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1),
  titleScene = new T.Scene();
const titleTexture = canvasTex(1280, 270, (c, w, h) => {
  c.shadowColor = '#0b2422';
  c.shadowBlur = 6;
  c.fillStyle = '#f3e3bd';
  c.font = '19px Plex';
  c.fillText('A N   U N D E R W A T E R   É T U D E', 8, 42);
  c.fillStyle = '#fff4dd';
  c.font = '89px Instrument';
  c.fillText('The Sunken Grand Piano', 6, 147);
  c.font = 'italic 60px Instrument';
  c.fillText('in the Cenote Cathedral', 7, 221);
});
const titleMat = new T.MeshBasicMaterial({
  map: titleTexture,
  transparent: true,
  depthTest: false,
  depthWrite: false,
  toneMapped: false,
});
const titleMesh = new T.Mesh(new T.PlaneGeometry(2, 2), titleMat);
titleScene.add(titleMesh);
const parts = [
  { name: 'The Flooded Nave', num: 'I', preset: 0 },
  { name: 'A Breath Between Keys', num: 'II', preset: 1 },
  { name: 'Inside the Golden Harp', num: 'III', preset: 2 },
  { name: 'Return to the Nave', num: 'IV', preset: 0 },
];
// Dolly positions and targets are independent so the lens lingers on each subject.
const shots = [
  {
    a: 0,
    b: 7.7,
    p: [-3.6, 2.9, 7.32],
    q: [-2.55, 2.69, 6.44],
    l: [-0.18, 1.52, -0.43],
    r: [-0.1, 1.49, -0.35],
    f: 40,
    g: 38,
  },
  {
    a: 7.7,
    b: 14.6,
    p: [2.18, 2.03, 2.9],
    q: [0.81, 1.87, 2.81],
    l: [0.06, 1.47, 0.91],
    r: [-0.3, 1.5, 0.99],
    f: 38,
    g: 37,
  },
  {
    a: 14.6,
    b: 21.95,
    p: [2.12, 3.63, 1.16],
    q: [2.08, 3.05, -0.68],
    l: [-0.13, 1.78, -0.6],
    r: [-0.3, 1.81, -0.92],
    f: 47,
    g: 49,
  },
  {
    a: 21.95,
    b: 30,
    p: [4.21, 2.56, 6.27],
    q: [5.22, 3.21, 6.91],
    l: [-0.15, 1.4, -0.36],
    r: [-0.22, 1.35, -0.38],
    f: 38,
    g: 39,
  },
];
let state = {
    time: 0,
    auto: true,
    sonata: true,
    playing: true,
    audible: false,
    preset: 0,
    power: 1,
    depth: 0.32,
  },
  parked = capture,
  manual = [],
  lastPart = -1;
const vec = (a) => new T.Vector3(...a);
function shot(i, t) {
  const s = shots[i],
    u = clamp((t - s.a) / (s.b - s.a), 0, 1),
    v = u * u * (3 - 2 * u) * 0.65 + u * 0.35;
  camera.position.lerpVectors(vec(s.p), vec(s.q), v);
  orbit.target.lerpVectors(vec(s.l), vec(s.r), v);
  const fov = T.MathUtils.lerp(s.f, s.g, v),
    fit = Math.max(1, 1.23 / camera.aspect);
  camera.fov = T.MathUtils.radToDeg(2 * Math.atan(Math.tan(T.MathUtils.degToRad(fov / 2)) * fit));
  camera.updateProjectionMatrix();
  camera.lookAt(orbit.target);
  camera.updateMatrixWorld();
}
function currentShot(t) {
  return t < 7.7 ? 0 : t < 14.6 ? 1 : t < 21.95 ? 2 : 3;
}
function updateCaption(part) {
  if (lastPart === part) return;
  lastPart = part;
  const p = parts[part];
  $('#movement').textContent = p.name;
  $('#roman').textContent = p.num;
  $$('[data-view]').forEach((b) => b.setAttribute('aria-pressed', +b.dataset.view === p.preset));
}
function resize() {
  const w = innerWidth,
    h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const sidebar = film || w <= 760 ? 0 : $('#panel').getBoundingClientRect().width;
  if (sidebar) camera.setViewOffset(w, h, -sidebar * 0.5, 0, w, h);
  else camera.clearViewOffset();
  camera.updateProjectionMatrix();
  const s = renderer.getDrawingBufferSize(new T.Vector2());
  water.resize(s.x, s.y);
  titleMesh.scale.set(0.42, (0.42 * (270 / 1280) * w) / h, 1);
  titleMesh.position.set(-0.91 + titleMesh.scale.x, -0.86 + titleMesh.scale.y, 0);
}
function draw(t, filmPath = false) {
  const follow = filmPath || state.auto,
    part = follow ? currentShot(t) : state.preset;
  if (follow) shot(part, t);
  else {
    orbit.update();
    camera.updateMatrixWorld();
  }
  updateCaption(part);
  const events = state.sonata ? score.concat(manual) : manual,
    weights = {};
  for (const e of events) {
    const d = t - e.t;
    if (d < 0 || d > 0.62) continue;
    const amount = Math.min(1, d / 0.065) * Math.min(1, Math.max(0, (0.49 - d) / 0.18));
    weights[e.m] = Math.max(weights[e.m] || 0, amount);
  }
  piano.update(weights, t);
  fish(t);
  kelp(t);
  motes(t, renderer.domElement.height);
  clock.value = t;
  power.value = state.power;
  const fade = film ? Math.min(1, 0.39 + t * 1.5, Math.max(0.015, (30 - t) * 1.3)) : 1;
  water.draw(
    scene,
    camera,
    t,
    state.power,
    state.depth,
    fade,
    camera.position.distanceTo(orbit.target),
    part === 1 ? 8 : part === 2 ? 5 : 1.8,
    film ? clamp((4.4 - t) / 0.9, 0, 1) : 0,
  );
  drawBubbles(renderer, camera, events, t, piano.xAt, fade);
  if (film && t > 0.25 && t < 4.35) {
    titleMat.opacity = Math.min(1, (t - 0.25) / 0.85, (4.35 - t) / 0.9);
    renderer.render(titleScene, titleCam);
  }
  $('#elapsed').textContent = '00:' + String(Math.floor(t)).padStart(2, '0');
  $('#seek').value = t;
  $('#seek').style.setProperty('--pct', (t / 30) * 100 + '%');
}
function switchAuto(on) {
  parked = false;
  state.auto = on;
  $('#auto').setAttribute('aria-checked', on);
  $('#viewMode').textContent = on ? 'Auto showcase'.toUpperCase() : 'Free orbit'.toUpperCase();
}
function manualCamera(i) {
  switchAuto(false);
  state.preset = i;
  const s = shots[i];
  shot(i, (s.a + s.b) * 0.5);
  orbit.update();
  draw(state.time);
}
orbit.addEventListener('start', () => {
  parked = false;
  if (state.auto) {
    state.preset = parts[currentShot(state.time)].preset;
    switchAuto(false);
  }
});
$$('[data-view]').forEach(
  (b) =>
    (b.onclick = () => {
      manualCamera(+b.dataset.view);
      document.body.classList.remove('panelOpen');
      $('#mobilePanel').setAttribute('aria-expanded', 'false');
    }),
);
$('#auto').onclick = () => {
  switchAuto(!state.auto);
  if (!state.auto) state.preset = parts[currentShot(state.time)].preset;
  draw(state.time);
};
$('#sonata').onclick = () => {
  state.sonata = !state.sonata;
  $('#sonata').setAttribute('aria-checked', state.sonata);
  draw(state.time);
};
$('#sound').onclick = async () => {
  const next = !state.audible;
  await wake();
  state.audible = next;
  mute(!next);
  $('#sound span').textContent = next ? 'Sound on' : 'Sound off';
  $('#sound use').setAttribute('href', next ? '#soundIcon' : '#muteIcon');
  $('#sound').setAttribute('aria-pressed', next);
};
$('#chord').onclick = () => {
  const notes = [
    [50, 57, 65, 69],
    [46, 53, 62, 67],
    [48, 55, 64, 69],
    [53, 60, 65, 72],
    [43, 55, 62, 70],
  ][Math.floor(Math.random() * 5)];
  manual = manual.filter((e) => state.time - e.t < 5);
  notes.forEach((m, i) => {
    const e = { t: state.time + i * 0.027 - 0.022, m, v: 0.65, d: 1.2 };
    manual.push(e);
    if (state.audible) hear(e, i * 0.027);
  });
  if (!state.playing) {
    state.playing = true;
    updatePause();
  }
  parked = false;
  $('#chord').classList.add('struck');
  setTimeout(() => $('#chord').classList.remove('struck'), 300);
  draw(state.time);
};
for (const id of ['beam', 'depth'])
  $('#' + id).oninput = (e) => {
    const n = +e.target.value;
    $('#' + id + 'Val').value = n + '%';
    e.target.style.setProperty('--pct', n + '%');
    if (id === 'beam') state.power = n / 72;
    else state.depth = 1 - n / 100;
    draw(state.time);
  };
function updatePause() {
  $('#pause').textContent = state.playing ? 'Ⅱ' : '▷';
  $('#pause').setAttribute('aria-label', state.playing ? 'Pause playback' : 'Resume playback');
}
$('#pause').onclick = () => {
  parked = false;
  state.playing = !state.playing;
  updatePause();
};
$('#seek').oninput = (e) => {
  state.time = +e.target.value;
  manual = [];
  draw(state.time);
};
$('#mobilePanel').onclick = () => {
  const open = document.body.classList.toggle('panelOpen');
  $('#mobilePanel').setAttribute('aria-expanded', open);
};
window.addEventListener('resize', () => {
  resize();
  draw(state.time);
});
resize();
draw(0);
document.body.classList.add('ready');
window.renderAt = (t) => {
  parked = true;
  state.time = clamp(Number(t) || 0, 0, 30);
  draw(state.time, true);
  return state.time;
};
const gl = renderer.getContext();
let previous = performance.now();
let lastDrawFence = null;
function canDraw() {
  if (!lastDrawFence) return true;
  if (gl.clientWaitSync(lastDrawFence, 0, 0) === gl.TIMEOUT_EXPIRED) return false;
  gl.deleteSync(lastDrawFence);
  lastDrawFence = null;
  return true;
}
function animate(now) {
  const elapsed = (now - previous) / 1000;
  previous = now;
  if (!parked) {
    const old = state.time;
    if (state.playing) {
      state.time = (old + elapsed) % 30;
      if (state.time < old) manual = [];
      if (state.sonata && state.audible)
        for (const e of score)
          if (
            (old <= state.time && e.t > old && e.t <= state.time) ||
            (old > state.time && (e.t > old || e.t <= state.time))
          )
            hear(e);
    }
    if (canDraw() && (state.playing || (!state.auto && orbit.update()))) {
      draw(state.time);
      lastDrawFence = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    }
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
