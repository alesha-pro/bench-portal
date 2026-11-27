import { T, V } from "./craft.js";
import { surfaces } from "./craft.js";
import { furnish } from "./room.js";
import { turntable } from "./player.js";
import { rainGlass } from "./rain.js";
import { lens, atmosphere } from "./optics.js";
import { audioMaster, listening } from "./music.js";
import { controlsUI } from "./ui.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
window.TOTAL_DURATION = 30.0;
const args = new URLSearchParams(location.search);
const film = args.has("film");
if (film) document.body.classList.add("film");
const canvas = document.getElementById("room");
const caption = document.querySelector(".caption");
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: false,
  alpha: false,
  preserveDrawingBuffer: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
const scene = new T.Scene();
scene.background = new T.Color(0x152322);
const camera = new T.PerspectiveCamera(37, 1, 0.06, 45);
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.dampingFactor = 0.09;
orbit.enablePan = false;
orbit.minDistance = 2.4;
orbit.maxDistance = 6;
orbit.minPolarAngle = 0.55;
orbit.maxPolarAngle = 1.38;
orbit.minAzimuthAngle = -0.72;
orbit.maxAzimuthAngle = 0.7;
orbit.rotateSpeed = 0.55;
const M = await surfaces(renderer, scene);
const { lamps, jackets, tea, flutter } = furnish(scene, M);
const player = turntable(scene, M);
scene.add(new T.HemisphereLight(0xb4d2d3, 0x77543d, 0.67));
const moon = new T.DirectionalLight(0x80c8e0, 0.95);
moon.position.set(-2, 4, -3);
scene.add(moon);
const bounce = new T.DirectionalLight(0xe2c5a7, 0.31);
bounce.position.set(-2, 2.8, 3.7);
scene.add(bounce);
const glass = await rainGlass(scene, renderer);
tea.uniforms.city.value = glass.city;
const atmosphereAt = atmosphere(scene),
  optics = lens(renderer, film);
const gl = renderer.getContext(),
  debug = gl.getExtension("WEBGL_debug_renderer_info");
const software =
  debug &&
  /swiftshader|llvmpipe/i.test(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL));
let bufferWidth = 0,
  bufferHeight = 0;
const sound = listening(),
  state = {
    rain: 0.75,
    fog: 0.52,
    warmth: 0.71,
    record: 0,
    wiping: false,
    show: false,
    hold: args.has("capture") || film,
    t: 0,
  };
let ui,
  focus = 4,
  aperture = 1.2,
  stamp = 0,
  clock = 0,
  lastTime = 0;
const cold = new T.Color(0xeae5ce),
  hot = new T.Color(0xffa459),
  warmFill = new T.Color(0xff9c49),
  neutral = new T.Color(0xffe5b7);
function environment(id) {
  if (id === "fog") glass.clear(false);
  if (id === "rain") sound.setRain(state.rain);
  if (id === "warmth") {
    lamps.light.color.copy(cold).lerp(hot, state.warmth);
    lamps.fill.color.copy(neutral).lerp(warmFill, state.warmth);
    lamps.liner.emissive.copy(cold).lerp(hot, state.warmth);
    lamps.tungsten.emissive.copy(neutral).lerp(hot, state.warmth);
  }
  if (ui && state.hold) draw(clock, true);
}
const shots = [
  // start, end, camera in/out, look in/out, lens in/out, depth of field
  // The first pass follows the cartridge from the rim toward the pivot.
  [
    0,
    6.5,
    [-1.25, 1.1, 2.33],
    [-0.65, 0.91, 2.08],
    [-0.12, 0.51, 0.59],
    [0.055, 0.548, 0.61],
    32,
    31,
    6.2,
  ],
  // Slip back across the meters to the listening notes and the sleeves on the desk.
  [
    6.5,
    12.4,
    [-2.98, 1.75, 3.38],
    [-2.75, 1.88, 3.2],
    [-1.4, 0.25, 0.68],
    [-1.51, 0.24, 0.63],
    40,
    39,
    4.6,
  ],
  [
    12.4,
    18.7,
    [2.27, 1.05, 2.64],
    [2.02, 0.95, 2.44],
    [1.5, 0.36, 0.73],
    [1.53, 0.37, 0.73],
    37,
    36,
    7,
  ],
  // Look diagonally past the sash, down the wet lane toward the oncoming lights.
  [
    18.7,
    24.7,
    [-0.05, 0.91, -0.14],
    [0.11, 0.84, -0.26],
    [1.09, 0.62, -1.575],
    [1.23, 0.58, -1.575],
    39,
    38,
    6,
  ],
  [
    24.7,
    30,
    [0.62, 2.13, 4.85],
    [-0.14, 2.23, 5.2],
    [0.02, 0.62, -0.06],
    [-0.05, 0.62, -0.09],
    38.8,
    38.2,
    2.35,
  ],
];
const temp = new T.Vector3(),
  target = new T.Vector3();
function pose(t) {
  const s = shots.find((s) => t < s[1]) || shots.at(-1);
  const u = Math.min(1, Math.max(0, (t - s[0]) / (s[1] - s[0])));
  const k = u * u * (3 - 2 * u) * 0.48 + u * 0.52;
  camera.position.fromArray(s[2]).lerp(temp.fromArray(s[3]), k);
  target.fromArray(s[4]).lerp(temp.fromArray(s[5]), k);
  document.body.classList.toggle("detail", s !== shots[4]);
  caption.hidden =
    s !== shots[4] && (s !== shots[0] || t >= 4.35);
  const portrait = Math.max(0, 1.46 - camera.aspect);
  camera.position.z += portrait * 1.35;
  target.x += portrait * 0.13;
  orbit.target.copy(target);
  camera.lookAt(target);
  camera.fov = s[6] + (s[7] - s[6]) * k + portrait * 10;
  camera.updateProjectionMatrix();
  focus = camera.position.distanceTo(target);
  aperture = s[8];
  if (s === shots[2]) focus = camera.position.distanceTo(V(1.56, 0.68, 0.8));
}
function draw(t, showcase) {
  // Keep the presentation canvas at display resolution. Software rasterizers
  // use a smaller scene buffer while navigating; exact seeks use native pixels.
  const scale = software && !state.hold && !film ? 0.6 : 1;
  const w = Math.max(1, Math.round(canvas.width * scale)),
    h = Math.max(1, Math.round(canvas.height * scale));
  if (w !== bufferWidth || h !== bufferHeight) {
    optics.resize(w, h);
    bufferWidth = w;
    bufferHeight = h;
  }
  const r =
    state.rain *
    (showcase ? 0.68 + 0.32 * Math.sin((t / 30) * Math.PI * 0.69) : 1);
  player.update(t, state.warmth);
  tea.uniforms.time.value = t;
  flutter(t);
  glass.update(t, r, state.fog, showcase);
  atmosphereAt(t, canvas.height);
  optics.draw(scene, camera, t, focus, aperture);
}
function deterministic(t) {
  if (!Number.isFinite(t)) throw new TypeError("Showcase time must be finite");
  t = Math.max(0, Math.min(30, t));
  state.hold = true;
  state.show = false;
  clock = state.t = t;
  pose(t);
  draw(t, true);
  ui?.time(t);
  ui?.play(false);
  return t;
}
function wipe(on) {
  state.wiping = on;
  ui?.wipe(on);
}
function play() {
  if (state.show) {
    state.show = false;
    state.hold = true;
    ui.play(false);
    return;
  }
  state.hold = false;
  state.show = true;
  if (state.t >= 30) state.t = 0;
  stamp = performance.now() / 1000 - state.t;
  ui.play(true);
}
ui = controlsUI(
  state,
  {
    environment,
    play,
    seek: deterministic,
    wipe,
    clear() {
      glass.clear(true);
      draw(clock, state.show || state.hold);
    },
    record(i) {
      state.record = i;
      player.setTrack(i);
      scene.userData.frontSleeve.material.map = jackets[i];
      ui.record(i);
      sound.select(i);
      draw(clock, state.show || state.hold);
    },
    async sound() {
      if (sound.playing) {
        await sound.stop();
        return false;
      }
      await sound.start(state.record);
      return true;
    },
  },
  jackets,
);
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  if (state.hold || state.show) pose(state.t);
  else if (lastTime === 0) pose(30);
  else camera.updateProjectionMatrix();
  draw(clock, state.show || state.hold);
}
renderer.shadowMap.needsUpdate = true;
resize();
window.addEventListener("resize", resize);
const picker = new T.Raycaster(),
  cursor = new T.Vector2();
let active = null,
  previous = null;
function paneAt(e, occlude) {
  const b = canvas.getBoundingClientRect();
  cursor.set(
    (2 * (e.clientX - b.left)) / b.width - 1,
    1 - (2 * (e.clientY - b.top)) / b.height,
  );
  picker.setFromCamera(cursor, camera);
  const hit = picker.intersectObject(glass.pane)[0];
  if (!hit) return null;
  if (occlude) {
    const near = picker
      .intersectObjects(scene.children, true)
      .find(
        (h) =>
          h.object.isMesh && h.object.visible && !h.object.material.transparent,
      );
    if (near?.object !== glass.pane) return null;
  }
  return hit.uv;
}
canvas.addEventListener(
  "pointerdown",
  (e) => {
    if (e.button !== 0) return;
    const uv = paneAt(e, true);
    if (uv && !e.altKey) {
      active = e.pointerId;
      orbit.enabled = false;
      canvas.setPointerCapture(e.pointerId);
      glass.stroke(uv, null);
      previous = uv;
      if (state.hold) draw(clock, true);
      e.stopImmediatePropagation();
    } else if (!state.wiping) {
      if (state.show || state.hold) {
        state.hold = false;
        state.show = false;
        ui.play(false);
      }
      orbit.enabled = true;
    } else {
      e.stopImmediatePropagation();
    }
  },
  true,
);
canvas.addEventListener(
  "pointermove",
  (e) => {
    if (e.pointerId !== active) return;
    const uv = paneAt(e, true);
    if (uv) {
      glass.stroke(uv, previous);
      if (state.hold) draw(clock, true);
    }
    previous = uv;
  },
  true,
);
function release(e) {
  if (e.pointerId !== active) return;
  previous = active = null;
  orbit.enabled = true;
}
canvas.addEventListener("pointerup", release);
canvas.addEventListener("pointercancel", release);
canvas.addEventListener(
  "wheel",
  () => {
    state.show = state.hold = false;
    ui.play(false);
  },
  { capture: true, passive: true },
);
function tick(ms) {
  requestAnimationFrame(tick);
  const now = ms / 1000;
  const dt = lastTime ? Math.min(0.12, now - lastTime) : 0;
  lastTime = now;
  if (state.hold) return;
  if (state.show) {
    state.t = Math.min(30, now - stamp);
    clock = state.t;
    pose(clock);
    ui.time(clock);
    draw(clock, true);
    if (clock >= 30) {
      state.show = false;
      state.hold = true;
      ui.play(false);
    }
  } else {
    clock = (clock + dt) % 30;
    orbit.update();
    focus = camera.position.distanceTo(orbit.target);
    draw(clock, false);
  }
}
window.renderAt = deterministic;
window.renderAudio = audioMaster;
requestAnimationFrame(tick);
