import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { V, materials } from './workshop.js';
import { alignment, buildSanctuary } from './sanctuary.js';
import { mechanics } from './mechanics.js';
import { ambientField, reflectionSky } from './lighting.js';

const params = new URLSearchParams(location.search),
  capture = params.has('capture'),
  film = params.has('film');
document.body.classList.toggle('film', film);
const $ = (q) => document.querySelector(q),
  canvas = $('#world');
let renderer;
try {
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: capture,
    powerPreference: 'high-performance',
  });
} catch (e) {
  const msg = $('#error');
  msg.hidden = false;
  msg.textContent = 'A WebGL2 context is required to enter the sanctuary.';
  throw e;
}
renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.7));
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
const scene = new T.Scene(),
  background = await new T.TextureLoader().loadAsync(
    document.body.dataset.backdrop || './assets/vesper-canyon.webp',
  );
background.colorSpace = T.SRGBColorSpace;
scene.background = background;
scene.environment = reflectionSky();
scene.environmentIntensity = 0.38;
const camera = new T.OrthographicCamera(-16, 16, 9, -9, 0.1, 145);
const focus = V(-0.1, 0.93, 0.16),
  controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.085;
controls.enablePan = false;
controls.minZoom = 0.56;
controls.maxZoom = 3.8;
controls.minPolarAngle = 0.035;
controls.maxPolarAngle = Math.PI - 0.035;
controls.target.copy(focus);
const hemi = new T.HemisphereLight(0xcbd6e8, 0xada1b1, 1.05);
scene.add(hemi);
const sun = new T.DirectionalLight(0xffddc2, 2.55);
sun.position.set(-8, 14, 9);
sun.castShadow = true;
Object.assign(sun.shadow.camera, {
  left: -12,
  right: 12,
  top: 13,
  bottom: -12,
  near: 0.1,
  far: 49,
});
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.bias = -0.00019;
sun.shadow.normalBias = 0.016;
sun.shadow.radius = 2;
scene.add(sun);
const rim = new T.DirectionalLight(0xa8d6e2, 1.46);
rim.position.set(6, 7, -9);
scene.add(rim);
const bounce = new T.DirectionalLight(0xd1bbbf, 0.95);
bounce.position.set(4, -7, 5);
scene.add(bounce);
const mats = materials();
buildSanctuary(scene, mats);
const living = mechanics(scene, mats);
ambientField(scene, mats.surface);
const axes = { X: V(1, 0, 0), Y: V(0, 1, 0), Z: V(0, 0, 1) };
const homeDir = V(0.95, 0.8, 1.17).normalize(),
  up = V(0, 1, 0);
let axis = 'Y',
  trip = null,
  aligned = false,
  playing = false,
  playTime = 0,
  life = 0,
  warm = 0.78,
  speed = 1,
  frustum = 22.9;
let last = performance.now(),
  audio = null,
  trackWanted = false,
  seekHeld = false;
function layout(height) {
  const w = innerWidth,
    h = innerHeight,
    aspect = w / h,
    small = w <= 680 && !film,
    offsetX = film ? 0.5 : small ? 0.51 : 0.617;
  const offsetY = film ? 0.5 : small ? 0.52 : 0.464;
  frustum = height;
  if (small) height = Math.max(height, 15.65 / aspect);
  const width = height * aspect;
  camera.left = -width * offsetX;
  camera.right = width * (1 - offsetX);
  camera.top = height * offsetY;
  camera.bottom = -height * (1 - offsetY);
  camera.updateProjectionMatrix();
  // Keep the painted moon circular on every viewport.
  const skyAspect = 16 / 9;
  background.repeat.set(Math.min(1, aspect / skyAspect), Math.min(1, skyAspect / aspect));
  background.offset.set((1 - background.repeat.x) / 2, (1 - background.repeat.y) / 2);
}
function pose(dir, vertical, at = focus) {
  camera.position.copy(at).addScaledVector(dir, 32);
  camera.up.copy(vertical);
  camera.lookAt(at);
  camera.updateMatrixWorld();
  controls.target.copy(at);
}
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  layout(frustum);
}
function easing(t) {
  t = Math.max(0, Math.min(1, t));
  return t * t * t * (10 + t * (-15 + 6 * t));
}
function viewFrame(dir, vertical) {
  const m = new T.Matrix4().lookAt(dir, V(), vertical);
  return new T.Quaternion().setFromRotationMatrix(m);
}
function axisLabel(a) {
  axis = a;
  document
    .querySelectorAll('[data-axis]')
    .forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.axis === a)));
}
function alignmentLabel(on) {
  aligned = on;
  $('#alignment').setAttribute('aria-pressed', String(on));
}
function draw(t) {
  living(t, warm, (renderer.domElement.height / (camera.top - camera.bottom)) * camera.zoom);
  renderer.render(scene, camera);
}
// Each exposure has a distinct architectural foreground. Interpolate the full
// camera frames on SO(3) so a sightline can pass the zenith without a roll singularity.
const chapters = [
  { a: 'Y', dir: V(0.78, 0.81, 1.19).normalize() },
  { a: 'X', dir: V(1.2, 0.17, 1.08).normalize() },
  { a: 'Z', dir: V(0.48, -0.4, 1.4).normalize() },
  { a: 'Y', dir: alignment },
];
function filmPose(time) {
  const t = T.MathUtils.clamp(time, 0, 30);
  const phase = t < 10.4 ? 0 : t < 19.4 ? 1 : 2;
  const a = chapters[phase],
    b = chapters[phase + 1];
  const start = [3.4, 12.2, 21.1][phase],
    end = [10.4, 19.4, 27.6][phase];
  const f = easing((t - start) / (end - start)),
    qa = viewFrame(a.dir, axes[a.a]),
    qb = viewFrame(b.dir, axes[b.a]);
  const q = qa.slerp(qb, f),
    d = V(0, 0, 1).applyQuaternion(q),
    u = V(0, 1, 0).applyQuaternion(q);
  const drift = t < 3.4 ? -0.1 * (1 - easing(t / 3.4)) : 0;
  d.applyAxisAngle(axes.Y, drift);
  u.applyAxisAngle(axes.Y, drift);
  // The film moves from the establishing tableau into two processions. Wide
  // exhibition framing keeps the controls and the full silhouette in view.
  const first = easing((t - 2.7) / 6.9) * (1 - easing((t - 11.75) / 6.4));
  const second = easing((t - 11.75) / 6.4) * (1 - easing((t - 20.0) / 6.9));
  const at = focus.clone();
  if (film) {
    at.lerp(V(2.4, 1.02, -0.64), first);
    at.lerp(V(0.27, -1.48, 3.52), second);
  }
  const size = film
    ? 19.85 - 8.3 * first - 8.6 * second
    : 23.35 - 0.55 * Math.sin((Math.PI * t) / 30) ** 2;
  layout(size);
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  pose(d, u, at);
  if (f === 0 || f === 1) camera.up.copy(axes[f === 0 ? a.a : b.a]);
  axisLabel(f < 0.5 ? a.a : b.a);
  alignmentLabel(t >= 27.6);
}
function renderAt(time) {
  if (!Number.isFinite(time)) throw new TypeError('renderAt requires seconds');
  const t = T.MathUtils.clamp(time, 0, 30);
  stopFilm();
  trip = null;
  seekHeld = true;
  life = t * speed;
  filmPose(t);
  draw(life);
  syncControls();
}
function syncControls() {
  // OrbitControls caches its up-axis transform in the constructor. A new gravity
  // reference requires rebuilding those two basis transforms before damped input.
  controls._quat.setFromUnitVectors(camera.up, V(0, 1, 0));
  controls._quatInverse.copy(controls._quat).invert();
  controls.update();
}
function stopFilm() {
  if (playing) {
    playing = false;
    $('#showcase').setAttribute('aria-pressed', 'false');
    $('#showcase span').textContent = 'Play showcase';
    $('#showcase use').setAttribute('href', '#play');
    syncControls();
  }
}
function currentDirection() {
  return camera.position.clone().sub(controls.target).normalize();
}
function beginTrip(targetAxis, lock) {
  seekHeld = false;
  stopFilm();
  const dir = currentDirection(),
    startUp = camera.up.clone();
  const rotation = new T.Quaternion().setFromUnitVectors(startUp, axes[targetAxis]);
  const endDir = lock ? alignment.clone() : dir.clone().applyQuaternion(rotation);
  trip = {
    elapsed: 0,
    duration: lock ? 1.05 : 1.75,
    dir,
    startUp,
    rotation,
    endDir,
    targetAxis,
    lock,
    startPose: viewFrame(dir, startUp),
    endPose: viewFrame(endDir, axes[targetAxis]),
    zoom: camera.zoom,
  };
  controls.enabled = false;
  axisLabel(targetAxis);
  alignmentLabel(lock);
}
document
  .querySelectorAll('[data-axis]')
  .forEach((b) => (b.onclick = () => beginTrip(b.dataset.axis, false)));
$('#rotate').onclick = () => beginTrip({ Y: 'X', X: 'Z', Z: 'Y' }[axis], false);
$('#alignment').onclick = () => {
  if (aligned) {
    trip = null;
    stopFilm();
    alignmentLabel(false);
    controls.enabled = true;
    syncControls();
  } else beginTrip('Y', true);
};
controls.addEventListener('start', () => {
  seekHeld = false;
  stopFilm();
  alignmentLabel(false);
});
function setRange(el, callback) {
  function change() {
    seekHeld = false;
    const v = Number(el.value);
    el.style.setProperty('--fill', ((v - el.min) / (el.max - el.min)) * 100 + '%');
    callback(v, el.nextElementSibling);
  }
  el.addEventListener('input', change);
  change();
}
setRange($('#warm'), (v, out) => {
  warm = v / 100;
  out.value = v + '%';
});
setRange($('#speed'), (v, out) => {
  speed = v / 100;
  out.value = (v % 10 === 0 ? speed.toFixed(1) : speed.toFixed(2)) + '×';
});
$('#showcase').onclick = () => {
  if (playing) {
    stopFilm();
    controls.enabled = true;
    return;
  }
  seekHeld = false;
  playing = true;
  playTime = 0;
  life = 0;
  trip = null;
  controls.enabled = true;
  $('#showcase').setAttribute('aria-pressed', 'true');
  $('#showcase span').textContent = 'Stop showcase';
  $('#showcase use').setAttribute('href', '#pause');
  if (trackWanted && audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
};
$('#audio').onclick = async () => {
  if (!audio) {
    audio = new Audio(document.body.dataset.score || './assets/vespers.m4a');
    audio.loop = true;
    audio.volume = 0.78;
  }
  if (trackWanted) {
    audio.pause();
    trackWanted = false;
  } else {
    if (playing) audio.currentTime = playTime;
    try {
      await audio.play();
      trackWanted = true;
    } catch {
      trackWanted = false;
    }
  }
  $('#audio').setAttribute('aria-pressed', String(trackWanted));
  $('#audio').setAttribute('aria-label', trackWanted ? 'Mute soundtrack' : 'Enable soundtrack');
  $('#audio').title = trackWanted ? 'Mute soundtrack' : 'Enable soundtrack';
  $('#audio use').setAttribute('href', trackWanted ? '#sound' : '#mute');
};
$('#full').onclick = () =>
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
document.addEventListener('fullscreenchange', () =>
  $('#full').setAttribute(
    'aria-label',
    document.fullscreenElement ? 'Leave fullscreen' : 'Enter fullscreen',
  ),
);
function frame(now) {
  const dt = Math.max(0, (now - last) / 1000);
  last = now;
  if (seekHeld) {
    requestAnimationFrame(frame);
    return;
  }
  life += dt * speed;
  if (playing) {
    playTime = Math.min(30, playTime + dt);
    filmPose(playTime);
    draw(life);
    if (playTime >= 30) {
      stopFilm();
      controls.enabled = true;
    }
  } else {
    if (trip) {
      trip.elapsed += dt;
      const f = easing(trip.elapsed / trip.duration);
      if (trip.lock) {
        const q = trip.startPose.clone().slerp(trip.endPose, f);
        pose(V(0, 0, 1).applyQuaternion(q), V(0, 1, 0).applyQuaternion(q));
        camera.zoom = T.MathUtils.lerp(trip.zoom, 1, f);
        camera.updateProjectionMatrix();
      } else {
        const q = new T.Quaternion().slerp(trip.rotation, f);
        pose(trip.dir.clone().applyQuaternion(q), trip.startUp.clone().applyQuaternion(q));
      }
      if (f >= 1) {
        pose(trip.endDir, axes[trip.targetAxis]);
        trip = null;
        controls.enabled = true;
        syncControls();
      }
    } else controls.update();
    draw(life);
  }
  requestAnimationFrame(frame);
}
resize();
pose(homeDir, up);
syncControls();
axisLabel('Y');
draw(0);
window.TOTAL_DURATION = 30.0;
window.renderAt = renderAt;
addEventListener('resize', () => {
  resize();
  draw(life);
});
if (!capture) requestAnimationFrame(frame);
