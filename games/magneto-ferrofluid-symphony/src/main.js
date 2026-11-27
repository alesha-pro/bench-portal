import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildChamber } from './chamber.js';
import { makeFluid } from './fluid.js';
import { makeOptics } from './optics.js';
import { makeArcs } from './arcs.js';
import { score, DURATION, BPM, modeNames, clamp, audioMaster } from './score.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search),
  film = params.has('film'),
  capture = params.has('capture');
if (film) document.documentElement.classList.add('film');
const canvas = $('chamber'),
  stage = canvas.parentElement;
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.75));
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
const scene = new T.Scene(),
  camera = new T.PerspectiveCamera(32, 1, 0.09, 58);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.085;
controls.minDistance = 4.4;
controls.maxDistance = 13.5;
controls.minPolarAngle = 0.13;
controls.maxPolarAngle = 1.44;
controls.enablePan = false;
const defaults = { auto: true, field: 1.8, tempo: BPM, mode: 0, accent: '#69dfd3', blast: 0 };
const settings = { ...defaults },
  chamber = buildChamber(scene, renderer, settings.accent);
const optics = makeOptics(renderer);
const fluid = makeFluid(scene, chamber.reflection, settings.accent),
  arcs = makeArcs(scene, chamber.coilTips);
const icons = {
  muted: '<path d="M4 9h4l5-4v14l-5-4H4z M17 9l5 6m0-6-5 6"/>',
  audio: '<path d="M3 9h4l5-4v14l-5-4H3z M16 8q4 4 0 8m3-11q7 7 0 14"/>',
  sliders:
    '<path d="M3 7h7m4 0h7M3 17h11m4 0h3"/><circle cx="12" cy="7" r="2"/><circle cx="16" cy="17" r="2"/>',
  orbit:
    '<ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(-30 12 12)"/><circle cx="12" cy="12" r="2"/>',
  expand: '<path d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5"/>',
  pause: '<path d="M8 5v14m8-14v14" stroke-width="3.4"/>',
  play: '<path d="m8 5 11 7-11 7z" fill="currentColor"/>',
  loop: '<path d="M3 9q1-4 6-4h9l3 3m0-5v5h-5M21 15q-1 4-6 4H6l-3-3m0 5v-5h5"/>',
  bolt: '<path d="m14 2-9 12h6l-1 8 10-13h-7z" fill="currentColor" stroke-width=".5"/>',
};
function icon(name) {
  return (
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">' +
    icons[name] +
    '</svg>'
  );
}
document.querySelectorAll('[data-icon]').forEach((e) => (e.innerHTML = icon(e.dataset.icon)));
const symbols = [
  '<path d="m1 17 4-6 2 5 4-12 3 12 4-15 3 14 3-7 4 8"/>',
  '<path d="m2 9 5 4 6-10 5 9 8-6-3 10H5z"/>',
  '<ellipse cx="14" cy="9" rx="12" ry="4"/><ellipse cx="14" cy="9" rx="5" ry="8"/><path d="M3 3l22 12M4 15 24 3"/>',
  '<ellipse cx="12" cy="12" rx="5" ry="4"/><circle cx="21" cy="5" r="2.8"/><circle cx="5" cy="5" r="1.6"/>',
];
const modeButtons = modeNames.map((name, i) => {
  const b = document.createElement('button');
  b.className = 'mode';
  b.innerHTML =
    '<svg viewBox="0 0 29 19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">' +
    symbols[i] +
    '</svg>' +
    name;
  b.onclick = () => {
    settings.mode = i;
    manual();
    draw();
  };
  $('modes').append(b);
  return b;
});
let reflectionColor = settings.accent;
function reflectAccent(color) {
  if (reflectionColor === color) return;
  fluid.group.visible = false;
  arcs.group.visible = false;
  chamber.updateProbe(color);
  fluid.group.visible = true;
  reflectionColor = color;
}
const swatches = [
  ['Ion cyan', defaults.accent],
  ['Amber', '#ffad62'],
  ['Violet', '#aa96ff'],
  ['Rose', '#f181a2'],
];
const colorButtons = swatches.map(([name, color]) => {
  const b = document.createElement('button');
  b.className = 'swatch';
  b.title = name;
  b.setAttribute('aria-label', name);
  b.style.setProperty('--sw', color);
  b.onclick = () => pickColor(color);
  $('swatches').append(b);
  return b;
});
const custom = document.createElement('label');
custom.className = 'swatch custom';
custom.title = 'Custom coil accent';
custom.innerHTML = '<input type="color" value="#69dfd3" aria-label="Custom coil accent">';
$('swatches').append(custom);
custom.firstChild.oninput = (e) => pickColor(e.target.value);
function pickColor(color) {
  settings.accent = color;
  reflectAccent(color);
  colorButtons.forEach((b, i) => b.setAttribute('aria-pressed', swatches[i][1] === color));
  draw();
}
colorButtons.forEach((b, i) => b.setAttribute('aria-pressed', i === 0));
let t = 0,
  running = !capture,
  pinned = capture,
  previous = performance.now(),
  blastAge = 99;
let audioCtx = null,
  audioSrc = null,
  sounding = false,
  buffer = null,
  audioStart = 0,
  visualStart = 0;
function syncAudio() {
  if (audioSrc) {
    audioSrc.stop();
    audioSrc = null;
  }
  if (!sounding || !running || pinned) return;
  audioSrc = audioCtx.createBufferSource();
  audioSrc.buffer = buffer;
  audioSrc.loop = true;
  const rate = settings.tempo / BPM;
  audioSrc.playbackRate.value = rate;
  audioSrc.connect(audioCtx.destination);
  audioStart = audioCtx.currentTime;
  visualStart = t;
  audioSrc.start(audioStart, (t * rate) % DURATION);
}
$('sound').onclick = async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await audioCtx.resume();
    const channels = audioMaster();
    buffer = audioCtx.createBuffer(2, channels[0].length, 48000);
    channels.forEach((c, i) => buffer.copyToChannel(c, i));
  }
  sounding = !sounding;
  $('sound').setAttribute('aria-pressed', sounding);
  $('sound-text').textContent = sounding ? 'Sound on' : 'Sound off';
  $('sound').firstElementChild.innerHTML = icon(sounding ? 'audio' : 'muted');
  syncAudio();
};
window.renderAudio = () => audioMaster();
function manual() {
  if (settings.auto) {
    settings.auto = false;
    $('auto').checked = false;
  }
  pinned = false;
}
let orbitDirty = false;
controls.addEventListener('change', () => {
  orbitDirty = true;
});
controls.addEventListener('start', () => {
  if (settings.auto) {
    settings.mode = score(t, settings).mode;
    manual();
  }
});
$('auto').onchange = (e) => {
  settings.auto = e.target.checked;
  pinned = false;
  if (settings.auto) {
    settings.tempo = BPM;
    $('tempo').value = BPM;
    slider('tempo');
  }
  syncAudio();
  draw();
};
function slider(key) {
  const el = $(key),
    val = Number(el.value);
  settings[key] = val;
  el.style.setProperty(
    '--fill',
    ((val - Number(el.min)) / (Number(el.max) - Number(el.min))) * 100 + '%',
  );
  $(key + '-value').innerHTML =
    key === 'field' ? val.toFixed(2) + ' <small>T</small>' : val + ' <small>BPM</small>';
}
for (const key of ['field', 'tempo']) {
  slider(key);
  $(key).oninput = () => {
    settings.mode = score(t, settings).mode;
    manual();
    slider(key);
    if (key === 'tempo') syncAudio();
    draw();
  };
}
$('blast').onclick = () => {
  pinned = false;
  blastAge = 0;
  $('blast').classList.add('flash');
  draw();
};
$('fullscreen').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await stage.requestFullscreen();
};
function setRunning(val) {
  running = val;
  pinned = false;
  previous = performance.now();
  updatePlay();
  syncAudio();
}
function updatePlay() {
  $('play').firstElementChild.innerHTML = icon(running ? 'pause' : 'play');
  $('play').setAttribute('aria-label', running ? 'Pause simulation' : 'Play simulation');
}
$('play').onclick = () => setRunning(!running);
$('scrub').oninput = (e) => {
  const v = Number(e.target.value);
  t = v;
  settings.auto = true;
  $('auto').checked = true;
  settings.tempo = BPM;
  $('tempo').value = BPM;
  slider('tempo');
  blastAge = 99;
  pinned = false;
  syncAudio();
  draw();
};
const wave = [];
for (let i = 0; i <= 640; i += 2) {
  const time = (i / 640) * DURATION,
    beat = (time * BPM) / 60,
    frac = beat % 1;
  const env =
    (0.2 + 0.78 * Math.exp(-frac * 2.9)) *
    (0.69 + 0.25 * Math.sin(time * 0.56) ** 2) *
    (1 - 0.61 * clamp((time - 25) / 5));
  const a = 1.3 + env * (3.1 + 9 * Math.abs(Math.sin(i * 13.058) + 0.34 * Math.sin(i * 0.823)));
  wave.push('M' + i + ' ' + (17 - a).toFixed(1) + 'v' + (2 * a).toFixed(1));
}
$('wave-base').setAttribute('d', wave.join(''));
$('wave-on').setAttribute('d', wave.join(''));
function cameraAt(time) {
  const aspect = camera.aspect;
  let az = 0.37 + 0.21 * Math.sin(time * 0.18),
    elev = 0.435 + 0.044 * Math.sin(time * 0.26),
    distance = Math.max(8.9, 13.2 / aspect),
    target = 1.03;
  if (film) {
    const cut = Math.min(4, Math.floor(time / 6)),
      q = (time - 6 * cut) / 6;
    az = [0.43 + 0.25 * q, -0.77 + 0.26 * q, 0.56 + 0.34 * q, 1.75 - 0.3 * q, -0.42 + 0.3 * q][cut];
    elev = [0.46 - 0.07 * q, 0.26 + 0.11 * q, 0.88 + 0.085 * q, 0.32 + 0.09 * q, 0.48 - 0.09 * q][cut];
    distance = [9.45 - 0.88 * q, 6.93 - 0.38 * q, 8.45 - 0.48 * q, 7.63 + 0.24 * q, 8.42 + 1.0 * q][cut];
    target = [1.04, 1.72, 0.95, 1.46, 1.14][cut];
  }
  controls.target.set(0, target, 0);
  camera.position.set(
    Math.sin(az) * Math.cos(elev) * distance,
    target + Math.sin(elev) * distance,
    Math.cos(az) * Math.cos(elev) * distance,
  );
  camera.lookAt(controls.target);
}
function size() {
  const w = stage.clientWidth,
    h = stage.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  optics.resize(canvas.width, canvas.height);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  if (settings.auto) cameraAt(t);
}
function draw() {
  const active = settings,
    s = score(t, { ...active, blast: Math.exp(-blastAge * 3.65) });
  if (active.auto) cameraAt(t);
  chamber.faceCamera(camera);
  if (reflectionColor !== active.accent) reflectAccent(active.accent);
  fluid.update(s);
  arcs.update(s, camera);
  optics.draw(scene, camera, camera.position.distanceTo(controls.target));
  if (film) return;
  modeButtons.forEach((b, i) => b.setAttribute('aria-pressed', s.mode === i));
  $('phase-caption').textContent = s.release < 0.14 ? 'Mirror equilibrium' : modeNames[s.mode];
  $('time').textContent = '00:' + String(Math.floor(t + 1e-8)).padStart(2, '0');
  const pos = clamp(t / DURATION) * 100;
  $('needle').style.left = pos + '%';
  $('wave-on').style.clipPath = 'inset(0 ' + (100 - pos) + '% 0 0)';
  $('scrub').value = t;
  if (blastAge > 0.28) $('blast').classList.remove('flash');
}
size();
draw();
updatePlay();
new ResizeObserver(() => {
  size();
  draw();
}).observe(stage);
window.TOTAL_DURATION = DURATION;
window.renderAt = (time) => {
  if (!Number.isFinite(time)) throw new TypeError('renderAt expects seconds');
  pinned = true;
  running = false;
  blastAge = 99;
  t = clamp(time, 0, DURATION);
  syncAudio();
  updatePlay();
  if (
    !settings.auto ||
    settings.field !== defaults.field ||
    settings.tempo !== BPM ||
    settings.accent !== defaults.accent
  ) {
    Object.assign(settings, defaults);
    $('auto').checked = true;
    for (const key of ['field', 'tempo']) {
      $(key).value = settings[key];
      slider(key);
    }
    custom.firstChild.value = settings.accent;
    colorButtons.forEach((b, i) => b.setAttribute('aria-pressed', i === 0));
  }
  draw();
};
function tick(now) {
  const dt = Math.max(0, (now - previous) / 1000);
  previous = now;
  if (!pinned) {
    if (running) {
      const next = audioSrc ? visualStart + audioCtx.currentTime - audioStart : t + dt;
      t = next % DURATION;
      if (audioSrc && next >= DURATION) syncAudio();
    }
    const impulseActive = blastAge < 2.8;
    blastAge += dt;
    if (!settings.auto) controls.update();
    if (running || impulseActive || orbitDirty) draw();
    orbitDirty = false;
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
