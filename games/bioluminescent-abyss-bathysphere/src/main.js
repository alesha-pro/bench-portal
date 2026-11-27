import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { V, u, environment } from './geometry.js';
import { bathysphere } from './bathysphere.js';
import { trench } from './trench.js';
import { life } from './life.js';
import { water } from './water.js';
import { optics } from './optics.js';
import { PINGS, renderAudio, soundSystem } from './hydrophone.js';

const $ = (id) => document.getElementById(id),
  qs = new URLSearchParams(location.search);
const film = qs.has('film'),
  capture = qs.has('capture');
document.body.classList.toggle('film', film);
const renderer = new T.WebGLRenderer({
  canvas: $('ocean'),
  antialias: false,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: 'high-performance',
});
const scene = new T.Scene(),
  camera = new T.PerspectiveCamera(40, 1, 0.045, 105);
scene.background = new T.Color(0x0e2b3b);
scene.fog = new T.FogExp2(0x17394b, 0.039);
environment(scene, renderer);
scene.add(new T.HemisphereLight(0x82b9d2, 0x272626, 0.65));
function key(color, power, p) {
  const l = new T.DirectionalLight(color, power);
  l.position.set(...p);
  scene.add(l);
}
key(0xffd29d, 2.16, [-3.8, 6, 4.7]);
key(0x76d5f1, 3.15, [1.8, 5.4, -3.2]);
key(0x8ecbc8, 0.36, [4, 0, 3]);
await Promise.all(
  [
    '16px "Instrument Serif"',
    'italic 16px "Instrument Serif"',
    '12px "DM Sans"',
    '12px "IBM Plex Mono"',
  ].map((f) => document.fonts.load(f))
);
const vehicle = bathysphere(scene);
const ventMouths = trench(scene);
const animals = life(scene),
  updateWater = water(scene),
  post = optics(renderer, film, ventMouths);
const lighting = [0, 1].map(() => {
  const s = new T.SpotLight(0xffe5ae, 28, 15, 0.3, 0.62, 1.3);
  scene.add(s, s.target);
  return s;
});
const controls = new OrbitControls(camera, $('ocean'));
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = false;
controls.minDistance = 3.2;
controls.maxDistance = 19;
controls.maxPolarAngle = Math.PI * 0.73;
controls.rotateSpeed = 0.62;
const settings = { angle: 28, power: 1, pulse: 1 };
const audio = soundSystem();
let state = 'explore',
  manualView = 'ext',
  clock = 0,
  displayTime = 0,
  manualPing = -100,
  parked = capture;
const chapters = ['The descent', 'Acoustic return', 'Glass encounter', 'Into the current'];
const chapterAt = (t) => (t < 6.85 ? 0 : t < 14 ? 1 : t < 23.65 ? 2 : 3);
function hasInside(t) {
  return t >= 18.4 && t < 23.65;
}
function exterior(t) {
  const { position: b } = vehicle.root,
    j = animals.colony.position;
  const wide = Math.max(1, 1.55 / camera.aspect);
  let eye, look, fov;
  if (t < 10.4) {
    const s = t / 10.4;
    eye = V(-0.96 + s * 1.87, 2.53 - s * 0.47, 9.7 - s * 0.89);
    look = V(0.035, 1.26 + 0.33 * (1 - s), -0.16);
    fov = 41;
  } else if (t < 14) {
    const s = (t - 10.4) / 3.6;
    eye = V(3.38 + s * 0.53, 3.18 + s * 0.31, -3.16 - s * 0.29);
    look = V(-1.56 + s * 1.01, 3.73 + s * 0.32, -13.12);
    fov = 54;
  } else if (t < 18.4) {
    const s = (t - 14) / 4.4;
    eye = V(2.87 - s * 0.38, 2.05 + s * 0.51, 6.2 - s * 0.64);
    look = V(j.x - 0.91, j.y - 0.21, j.z - 0.52);
    fov = 43.5;
  } else {
    const s = T.MathUtils.clamp((t - 23.65) / 6.35, 0, 1);
    eye = V(2.85 - s * 1.76, 1.33 + s * 1.9, 8.32 + s * 2.19);
    look = V(0.27, b.y - 0.15 + s * 0.37, -0.21);
    fov = 43.4;
  }
  if (wide > 1) {
    eye.sub(look).multiplyScalar(Math.min(wide, 2.3)).add(look);
    fov += 5;
  }
  camera.fov = fov;
  camera.position.copy(eye);
  camera.up.set(0, 1, 0);
  camera.lookAt(look);
  controls.target.copy(look);
  camera.updateProjectionMatrix();
}
function interior(t) {
  const eye = vehicle.root.localToWorld(
    V(0.013 * Math.sin(t * 0.65), 0.025 + 0.012 * Math.sin(t * 0.71), 0.155)
  );
  const look = vehicle.root.localToWorld(V(0.025 * Math.sin(t * 0.6), -0.055, 1.55));
  camera.up.copy(V(0, 1, 0).applyQuaternion(vehicle.root.quaternion));
  camera.position.copy(eye);
  camera.lookAt(look);
  camera.fov = camera.aspect < 1.2 ? 81 : 70;
  camera.updateProjectionMatrix();
}
function caption(t, inside, scripted) {
  const readout = scripted ? t : displayTime;
  const k = scripted ? chapterAt(t) : inside ? 2 : 0;
  $('tc').textContent = '00:' + String(Math.floor(readout)).padStart(2, '0');
  $('timeline').value = readout;
  $('timeline').style.setProperty('--fill', (readout / 30) * 100 + '%');
  $('chapter').textContent = chapters[k];
  $('chapter-index').textContent = '0' + (k + 1) + ' / 04';
  document.body.classList.toggle('inside', inside);
  $('feed').textContent = inside ? 'INT. CAM' : 'EXT. CAM';
  $('view').value = inside ? 'int' : 'ext';
  $('depth').textContent = Math.round(3997 + 3 * T.MathUtils.smoothstep(t, 0, 8)).toLocaleString(
    'en-US'
  );
}
function visuals(t, scripted, forcePose = false) {
  u.time.value = t;
  u.pulse.value = settings.pulse;
  vehicle.update(t, settings.angle, settings.power, scripted);
  animals.update(t);
  vehicle.root.updateWorldMatrix(true, false);
  const inside = scripted ? hasInside(t) : manualView === 'int';
  vehicle.binnacle.visible = inside;
  vehicle.cabin.visible = inside;
  vehicle.exteriorPanel.visible = !inside;
  if (inside) interior(t);
  else if (scripted || forcePose) exterior(t);
  else controls.update();
  controls.enabled = !inside && !scripted;
  lighting.forEach((s, i) => {
    s.position.copy((i ? u.lampB : u.lampA).value);
    s.target.position.copy(s.position).add((i ? u.axisB : u.axisA).value);
    s.intensity = 28 * settings.power;
  });
  let age = Infinity,
    emitT = 0;
  if (scripted) {
    for (const p of PINGS)
      if (t >= p && t - p < age) {
        age = t - p;
        emitT = p;
      }
  }
  if (t >= manualPing && manualPing >= 0 && t - manualPing < age) {
    age = t - manualPing;
    emitT = manualPing;
  }
  // The shell retains the transmitter's location at emission while the bell continues descending.
  u.origin.value.set(
    -1.64 + 0.12 * Math.sin(emitT * 0.32),
    1.18 + 0.88 * (1 - T.MathUtils.smoothstep(emitT, 0, 8)) + 0.08 * Math.sin(emitT * 0.9),
    -0.18 + 0.12 * Math.sin(emitT * 0.37)
  );
  u.radius.value = age < 5.5 ? age * 4.05 : -100;
  updateWater(t, vehicle);
  post.render(scene, camera, inside, vehicle.root);
  if (!film) caption(t, inside, scripted);
}
function playIcon() {
  const on = state === 'showcase';
  $('auto').setAttribute('aria-pressed', String(on));
  $('auto')
    .querySelector('use')
    .setAttribute('href', on ? '#i-pause' : '#i-play');
}
function seek(t) {
  clock = T.MathUtils.clamp(Number(t) || 0, 0, 30);
  displayTime = clock;
  state = 'still';
  manualPing = -100;
  parked = true;
  playIcon();
  visuals(clock, true);
}
function explore(view) {
  const fromShot = state !== 'explore';
  manualView = view;
  state = 'explore';
  parked = false;
  playIcon();
  visuals(clock, false, fromShot || view === 'ext');
  audio.sync(clock, false);
}
function resize() {
  const w = innerWidth,
    h = innerHeight,
    dpr = capture ? 1 : Math.min(devicePixelRatio, 1.6);
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  const sz = renderer.getDrawingBufferSize(new T.Vector2());
  post.resize(sz.x, sz.y);
  visuals(clock, state !== 'explore', true);
}
window.addEventListener('resize', resize);
$('auto').onclick = () => {
  if (state === 'showcase') {
    seek(clock);
    audio.sync(clock, false);
    return;
  }
  state = 'showcase';
  clock = displayTime >= 29.99 ? 0 : displayTime;
  manualPing = -100;
  parked = false;
  playIcon();
  audio.sync(clock, true);
  visuals(clock, true);
};
$('view').onchange = (e) => explore(e.target.value);
$('timeline').oninput = (e) => {
  seek(e.target.value);
  audio.sync(clock, false);
};
$('ping').onclick = () => {
  if (parked) {
    manualView = hasInside(clock) ? 'int' : 'ext';
    state = 'explore';
    parked = false;
    playIcon();
  }
  manualPing = clock;
  audio.manual();
  $('status').textContent = 'Acoustic pulse transmitted';
  visuals(clock, state === 'showcase');
};
$('sound').onclick = async () => {
  const enabled = await audio.toggle(clock, state === 'showcase');
  $('sound').setAttribute('aria-pressed', String(enabled));
  $('sound').setAttribute('aria-label', (enabled ? 'Mute' : 'Enable') + ' hydrophone audio');
  $('sound')
    .querySelector('use')
    .setAttribute('href', enabled ? '#i-sound' : '#i-mute');
};
$('fullscreen').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
};
document.addEventListener('fullscreenchange', () =>
  $('fullscreen').setAttribute(
    'aria-label',
    document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen'
  )
);
function panel(open) {
  $('panel').hidden = !open;
  $('settings').setAttribute('aria-expanded', String(open));
}
$('settings').onclick = () => panel($('panel').hidden);
$('close-panel').onclick = () => {
  panel(false);
  $('settings').focus();
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') panel(false);
});
for (const [id, out, key, suffix, div] of [
  ['angle', 'a-out', 'angle', '°', 1],
  ['intensity', 'i-out', 'power', '%', 100],
  ['pulse', 'p-out', 'pulse', '%', 100],
]) {
  const el = $(id);
  function update() {
    settings[key] = Number(el.value) / div;
    $(out).value = el.value + suffix;
    el.style.setProperty('--fill', ((el.value - el.min) / (el.max - el.min)) * 100 + '%');
  }
  update();
  el.oninput = () => {
    update();
    visuals(clock, state !== 'explore');
  };
}
$('ocean').addEventListener(
  'pointerdown',
  () => {
    if (state !== 'explore' && !hasInside(clock)) {
      manualView = 'ext';
      state = 'explore';
      parked = false;
      controls.enabled = true;
      controls.update();
      playIcon();
      audio.sync(clock, false);
    }
  },
  true
);
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  seek(t);
};
window.renderAudio = () => renderAudio(true);
resize();
visuals(0, false, true);
let last;
function frame(now) {
  const dt = last === undefined ? 0 : T.MathUtils.clamp((now - last) / 1000, 0, 0.3);
  last = now;
  if (!parked) {
    clock += dt;
    if (clock >= 30) {
      clock %= 30;
      manualPing = -100;
    }
    if (state === 'showcase') displayTime = clock;
    if (clock - manualPing > 1.85 || clock < manualPing) $('status').textContent = '';
    visuals(clock, state === 'showcase');
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
