import { T, V, clamp, mix, smooth, textureJobs } from './craft.js';
import { RailwaySound } from './sound.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { landscape } from './landscape.js';
import { village } from './village.js';
import { workbench } from './workbench.js';
import { makeTrain } from './train.js';
import { atmos } from './atmosphere.js';
import { optics } from './optics.js';
import { frame } from './cameras.js';
import { filmDistance, filmSpeed, track } from './route.js';

const $ = (s) => document.querySelector(s),
  params = new URLSearchParams(location.search),
  filming = params.has('film'),
  capture = params.has('capture');
document.documentElement.classList.toggle('film', filming);
const canvas = $('#railway'),
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: false,
    preserveDrawingBuffer: capture,
    powerPreference: 'high-performance',
  });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
const scene = new T.Scene(),
  camera = new T.PerspectiveCamera(39, 1, 0.055, 175);
scene.background = new T.Color(0x7c93a9);
scene.fog = new T.FogExp2(0x91a3b3, 0.014);
const env = new RoomEnvironment(),
  pmrem = new T.PMREMGenerator(renderer),
  envTexture = pmrem.fromScene(env, 0.04);
scene.environment = envTexture.texture;
scene.environmentIntensity = 0.34;
env.dispose();
pmrem.dispose();
const sky = new T.HemisphereLight(0xf0edeb, 0x999a9b, 1.25);
scene.add(sky);
const key = new T.DirectionalLight(0xffddab, 2.1);
key.position.set(-11, 22, 12);
key.castShadow = true;
const sc = key.shadow.camera;
Object.assign(sc, { left: -24, right: 24, top: 19, bottom: -19, near: 0.3, far: 70 });
key.shadow.mapSize.set(2048, 2048);
key.shadow.normalBias = 0.023;
key.shadow.bias = -0.00022;
key.shadow.radius = 2.2;
scene.add(key);
const rim = new T.DirectionalLight(0x9dbcd9, 1.29);
rim.position.set(6, 10, -16);
scene.add(rim);
const { back, frost } = landscape(scene);
workbench(scene);
const station = village(scene),
  train = makeTrain(scene),
  air = atmos(scene, train, station.chimneys),
  post = optics(renderer, scene, camera, filming);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.minDistance = 0.5;
controls.maxDistance = 52;
controls.maxPolarAngle = Math.PI * 0.491;
controls.enablePan = true;
controls.target.set(0, 4, 0);
const state = {
  mode: 0,
  d: 14.1,
  t: 0,
  throttle: 0.52,
  weather: 0.48,
  focus: 0.54,
  dof: true,
  aspect: 1,
  signal: 1,
  desired: 1,
  auto: false,
  parked: capture,
  showTime: 0,
  canonical: false,
};
const history = [];
let width = 0,
  height = 0,
  last = performance.now(),
  follow = null,
  pose = null;
const sound = new RailwaySound();
function size() {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const scale = filming || capture ? 1 : Math.min(window.devicePixelRatio || 1, 1.55),
    w = Math.round(rect.width * scale),
    h = Math.round(rect.height * scale);
  if (w === width && h === height) return;
  width = w;
  height = h;
  renderer.setSize(w, h, false);
  camera.aspect = rect.width / rect.height;
  state.aspect = camera.aspect;
  camera.updateProjectionMatrix();
  post.resize(w, h);
}
function lighting(w) {
  sky.color.set(0xd9c8ac).lerp(new T.Color(0x7088b6), w);
  sky.groundColor.set(0x3b4654);
  sky.intensity = mix(0.75, 0.47, w);
  key.color.set(0xffbd7b).lerp(new T.Color(0x92b9e2), w);
  key.intensity = mix(1.23, 0.48, w);
  rim.color.set(0x99c6f3);
  rim.intensity = 0.93 + w * 0.38;
  scene.fog.color.set(0xc9b5ac).lerp(new T.Color(0x738aa1), w);
  scene.fog.density = 0.009 + w * 0.01;
  back.material.color.set(0xd6c4c0).lerp(new T.Color(0x7586a5), w);
}
function lens(p) {
  camera.position.copy(p.eye);
  camera.fov = p.fov;
  camera.lookAt(p.aim);
  camera.updateProjectionMatrix();
  controls.target.copy(p.aim);
}
function updateView(p) {
  $('#lensNo').textContent =
    p.shot === undefined ? 'CAMERA 0' + (p.tag + 1) + ' / 04' : 'SHOT 0' + (p.shot + 2) + ' / 06';
  $('#viewname').textContent = p.title;
  document
    .querySelectorAll('[data-camera]')
    .forEach((b) => b.setAttribute('aria-pressed', +b.dataset.camera === p.tag));
  $('.orbit-hint').style.visibility =
    state.auto || (state.parked && pose?.shot !== undefined) ? 'hidden' : '';
}
function uiTime(t) {
  state.showTime = t;
  $('#seek').value = t;
  $('#seek').style.setProperty('--pct', (t / 30) * 100 + '%');
  $('#seconds').textContent = '00:' + String(Math.floor(t)).padStart(2, '0');
}
function aspectUI(v) {
  const go = v > 0.5;
  $('#aspect').textContent = go ? 'Clear' : 'Stop';
  $('#aspect').classList.toggle('stop', !go);
  $('#signal').setAttribute(
    'aria-label',
    'Switch semaphore. Current aspect ' + (go ? 'clear' : 'stop'),
  );
}
function manualHistory(age) {
  const target = state.t - age;
  if (!history.length) return state.d;
  if (target <= history[0].t) return history[0].d;
  let l = 0,
    r = history.length - 1;
  while (r - l > 1) {
    const m = (l + r) >> 1;
    if (history[m].t < target) l = m;
    else r = m;
  }
  const a = history[l],
    b = history[r];
  return mix(a.d, b.d, clamp((target - a.t) / Math.max(0.0001, b.t - a.t), 0, 1));
}
function draw(t, d, v, w, focus, signalAmount, p, scripted) {
  size();
  train.update(d, t);
  station.update(t, signalAmount, w);
  frost(t);
  lighting(w);
  pose = p;
  if (scripted) {
    lens(p);
  } else if (state.mode > 1) {
    if (follow) {
      const delta = p.aim.clone().sub(follow.aim),
        yaw = track(d).angle - follow.yaw;
      const offset = camera.position
        .clone()
        .sub(controls.target)
        .applyAxisAngle(V(0, 1, 0), yaw);
      controls.target.add(delta);
      camera.position.copy(controls.target).add(offset);
    }
    follow = { aim: p.aim.clone(), yaw: track(d).angle };
  }
  if (!scripted) controls.update();
  const subject = p.subject.clone();
  if (!scripted) subject.add(controls.target).sub(p.aim);
  const past = scripted ? (age) => filmDistance(Math.max(0, t - age)) : manualHistory;
  const brake = clamp(((past(0.3) - past(0.65)) / 0.35 - v) * 4.5, 0, 1);
  air(t, d, v, w, height, past, brake, camera, subject, focus);
  post.draw(
    subject,
    p,
    focus,
    w,
    t,
    filming ? Math.min(smooth(-0.1, 0.55, t), 1 - smooth(29.42, 30.02, t)) : 1,
  );
}
function scripted(t) {
  t = clamp(Number(t) || 0, 0, 30);
  size();
  const d = filmDistance(t),
    p = frame(0, d, t, true, state.aspect),
    w = 0.53 + 0.25 * smooth(0, 30, t),
    s = smooth(2.0, 3.16, t);
  state.d = d;
  state.t = t;
  state.signal = s;
  state.desired = s > 0.5 ? 1 : 0;
  draw(t, d, filmSpeed(t), w, state.canonical ? 0.54 : state.dof ? state.focus : 0, s, p, true);
  updateView(p);
  uiTime(t);
  aspectUI(s);
}
function putManual(mode = state.mode, reset = true) {
  state.mode = mode;
  state.canonical = false;
  sound.select('manual', state.showTime);
  state.parked = false;
  state.auto = false;
  controls.enabled = true;
  follow = null;
  const p = frame(mode, state.d, state.t, false, state.aspect);
  if (reset) {
    controls.enableDamping = false;
    controls.update();
    controls.enableDamping = true;
    lens(p);
  }
  pose = p;
  updateView(p);
  $('#auto').setAttribute('aria-pressed', false);
  $('#auto use').setAttribute('href', '#play');
  history.length = 0;
  history.push(
    { t: state.t - 3.5, d: state.d - state.throttle * 3.5 * 2.55 },
    { t: state.t, d: state.d },
  );
}
function syncAuto(active) {
  sound.select(active ? 'showcase' : 'paused', state.showTime);
  state.auto = active;
  state.parked = !active;
  controls.enabled = false;
  $('#auto').setAttribute('aria-pressed', active);
  $('#auto use').setAttribute('href', active ? '#pause' : '#play');
}
function run(now) {
  const elapsed = (now - last) / 1000,
    dt = Math.min(elapsed, 0.15);
  last = now;
  if (dialog.open) {
    requestAnimationFrame(run);
    return;
  }
  if (state.auto) {
    const next = Math.min(30, state.showTime + elapsed);
    scripted(next);
    if (next >= 30) syncAuto(false);
  } else if (!state.parked) {
    size();
    const speed = state.throttle * 2.55;
    state.t += dt;
    state.d += speed * dt;
    sound.tick(state.d, speed);
    state.signal = mix(state.signal, state.desired, 1 - Math.exp(-dt * 3.6));
    history.push({ t: state.t, d: state.d });
    while (history.length > 2 && history[1].t < state.t - 3.7) history.shift();
    draw(
      state.t,
      state.d,
      speed,
      state.weather,
      state.dof ? state.focus : 0,
      state.signal,
      frame(state.mode, state.d, state.t, false, state.aspect),
      false,
    );
  }
  requestAnimationFrame(run);
}
function pct(el) {
  el.style.setProperty('--pct', el.value + '%');
}
['throttle', 'weather', 'focus'].forEach((id) => {
  const el = $('#' + id);
  pct(el);
  el.oninput = () => {
    if (state.auto || state.parked) putManual(state.mode);
    state[id] = +el.value / 100;
    pct(el);
    $('#speedOut').textContent =
      state.throttle === 0
        ? 'Stop'
        : state.throttle < 0.34
          ? 'Crawl'
          : state.throttle < 0.76
            ? 'Cruise'
            : 'Express';
    $('#weatherOut').textContent =
      state.weather < 0.31 ? 'Golden dusk' : state.weather < 0.72 ? 'Blue hour' : 'Blizzard';
  };
});
$('#dofToggle').onclick = () => {
  state.canonical = false;
  state.dof = !state.dof;
  $('#dofToggle').setAttribute('aria-checked', state.dof);
  $('#focus').disabled = !state.dof;
  if (state.parked) scripted(state.showTime);
};
document
  .querySelectorAll('[data-camera]')
  .forEach((b) => (b.onclick = () => putManual(+b.dataset.camera)));
$('#signal').onclick = () => {
  if (state.parked || state.auto) putManual(state.mode);
  state.desired = 1 - state.desired;
  aspectUI(state.desired);
};
$('#auto').onclick = () => {
  state.canonical = false;
  if (state.auto) {
    syncAuto(false);
    return;
  }
  const t = state.showTime >= 29.999 ? 0 : state.showTime;
  uiTime(t);
  syncAuto(true);
  scripted(t);
};
$('#seek').oninput = (e) => {
  state.canonical = false;
  syncAuto(false);
  scripted(+e.target.value);
};
canvas.addEventListener(
  'pointerdown',
  () => {
    if (state.auto || state.parked) {
      const tag = pose?.tag ?? 0;
      putManual(tag, false);
    }
  },
  true,
);
$('#expandBtn').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await $('#viewport').requestFullscreen();
};
$('#audio').onclick = async () => {
  const on = await sound.toggle(
    state.auto ? 'showcase' : state.parked ? 'paused' : 'manual',
    state.showTime,
  );
  $('#audio span').textContent = on ? 'Sound on' : 'Sound off';
  $('#audio use').setAttribute('href', on ? '#volume' : '#mute');
  $('#audio').setAttribute('aria-pressed', on);
};
const dialog = $('#cinema'),
  video = $('#film');
let filmSource;
$('#openFilm').onclick = async () => {
  sound.suspend(true, state.showTime);
  dialog.showModal();
  const status = $('#filmStatus');
  try {
    if (!filmSource) {
      status.textContent = 'Loading the 1080p film…';
      // A local Blob is fully seekable on simple static hosts and Playwright's offline origin.
      filmSource = fetch('out/miniature-train-1080p.mp4').then(async (response) => {
        if (!response.ok) throw Error('Film unavailable');
        return URL.createObjectURL(await response.blob());
      });
    }
    const url = await filmSource;
    if (video.src !== url) video.src = url;
    status.textContent = '';
    if (dialog.open) await video.play().catch(() => {});
  } catch {
    filmSource = null;
    status.textContent = 'The 1080p film is missing. The Auto showcase is available in the diorama.';
  }
};
$('#closeFilm').onclick = () => dialog.close();
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
dialog.onclose = () => {
  video.pause();
  sound.suspend(false, state.showTime);
};
$('#exhibit').onclick = () => {
  dialog.close();
  putManual(0);
};
await Promise.all(textureJobs);
uiTime(0);
size();
putManual(0);
state.parked = capture;
draw(
  0,
  state.d,
  state.throttle * 2.55,
  state.weather,
  state.focus,
  1,
  frame(0, state.d, 0, false, state.aspect),
  false,
);
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  state.canonical = true;
  syncAuto(false);
  scripted(t);
};
new ResizeObserver(() => {
  size();
  if (state.parked && pose?.shot !== undefined) scripted(state.showTime);
}).observe($('#viewport'));
requestAnimationFrame(run);
