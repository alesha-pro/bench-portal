import * as T from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { M, world, v, env, photo, batch, colorSigns, palettes } from "./workshop.js";
import { kitchen } from "./kitchen.js";
import { city } from "./city.js";
import { weather } from "./weather.js";
import { street } from "./street.js";
import { optics } from "./optics.js";

const $ = (id) => document.getElementById(id),
  query = new URLSearchParams(location.search),
  capture = query.has("capture");
if (query.has("film")) document.body.classList.add("film");
const renderer = new T.WebGLRenderer({
  canvas: $("alley"),
  alpha: false,
  antialias: false,
  powerPreference: "high-performance",
  preserveDrawingBuffer: capture,
});
renderer.setPixelRatio(capture ? 1 : Math.min(window.devicePixelRatio, 1.5));
world.background = new T.Color("#162c36");
world.fog = new T.FogExp2("#20363c", 0.027);
env(renderer);
const [kitchenTex, facade] = await Promise.all([photo("kitchen.jpg"), photo("facade.jpg")]);
const stall = kitchen(kitchenTex),
  district = city(facade);
street(stall, facade);
batch(stall.p);
stall.p.userData.moving = true;
stall.p.traverse((o) => {
  if (o.material?.isMeshStandardMaterial) {
    o.castShadow = true;
    o.receiveShadow = true;
  }
});
batch(world);
world.add(new T.HemisphereLight(0xb2c7db, 0x685340, 0.93));
const moon = new T.DirectionalLight(0xa9d8e7, 1.15);
moon.position.set(-3, 7, 4);
moon.target.position.set(-1, 1, 0);
world.add(moon, moon.target);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
moon.castShadow = true;
moon.shadow.mapSize.set(1024, 1024);
Object.assign(moon.shadow.camera, {
  left: -4.6,
  right: 4.6,
  top: 3.6,
  bottom: -3.6,
  near: 0.15,
  far: 16,
});
moon.shadow.camera.updateProjectionMatrix();
moon.shadow.bias = -0.0004;
moon.shadow.normalBias = 0.012;
function light(x, y, z, color, power, reach) {
  const l = new T.PointLight(color, power, reach, 2);
  l.position.set(x, y, z);
  world.add(l);
  return l;
}
light(-1.23, 2.57, 0.14, "#ffc48a", 8.6, 6);
light(0.65, 2.38, 0.17, "#ffe0af", 5.4, 5);
const leftNeon = light(-3.94, 2.3, 1.32, "#ff5342", 15, 6),
  rightNeon = light(2.1, 2.44, 1.03, "#62d6e4", 12, 6);
light(4.78, 2.6, -4.0, "#55abbc", 9, 9);
const weatherFX = weather(),
  post = optics(renderer),
  camera = new T.PerspectiveCamera(43, 1, 0.055, 125);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.dampingFactor = 0.095;
orbit.minDistance = 0.6;
orbit.maxDistance = 17;
orbit.maxPolarAngle = Math.PI * 0.489;
const duration = 30;
window.TOTAL_DURATION = 30.0;
const shots = [
  {
    from: 0,
    to: 6.3,
    cam: 0,
    name: "Alley Wide",
    a: [4.12, 2.0, 9.32],
    b: [3.06, 2.1, 8.52],
    look: [-0.03, 2.32, -0.8],
    end: [-0.25, 2.19, -0.81],
    lens: 44,
  },
  {
    from: 6.3,
    to: 11.8,
    cam: 1,
    name: "Counter Steam Macro",
    a: [1.52, 2.25, 2.97],
    b: [0.63, 2.03, 2.59],
    look: [-0.54, 1.64, 0.03],
    end: [-0.69, 1.64, 0.09],
    lens: 39,
  },
  {
    from: 11.8,
    to: 17.9,
    cam: 2,
    name: "Puddle Reflection",
    a: [2.55, 0.4, 6.18],
    b: [3.55, 0.55, 6.67],
    look: [-0.1, 1.33, -0.28],
    end: [0.41, 1.48, -0.65],
    lens: 49,
  },
  {
    from: 17.9,
    to: 20.1,
    cam: 1,
    name: "Lantern Detail",
    a: [-2.08, 2.25, 3.42],
    b: [-2.4, 2.28, 3.28],
    look: [-3.23, 2.29, 0.12],
    end: [-3.34, 2.3, 0.1],
    lens: 37,
  },
  {
    from: 20.1,
    to: 24.2,
    cam: 0,
    name: "Monorail Crossing",
    a: [3.77, 2.16, 6.79],
    b: [1.26, 2.05, 6.96],
    look: [0.11, 3.83, -2.51],
    end: [1.31, 4.11, -3.03],
    lens: 43,
  },
  {
    from: 24.2,
    to: 30,
    cam: 0,
    name: "Alley Wide",
    a: [2.42, 1.56, 7.96],
    b: [4.12, 2.0, 9.32],
    look: [-0.51, 1.9, -0.56],
    end: [-0.03, 2.32, -0.8],
    lens: 44,
  },
];
let time = 0,
  wall = 0,
  playing = true,
  manual = false,
  parked = capture,
  last = performance.now(),
  trainStart = -1e5,
  cookStart = -1e5,
  rain = 0.72,
  palette = 0;
function compose(s, f) {
  f = f * f * (3 - 2 * f);
  camera.position.copy(v(...s.a).lerp(v(...s.b), f));
  orbit.target.copy(v(...s.look).lerp(v(...s.end), f));
  if (camera.aspect < 1) {
    camera.position
      .sub(orbit.target)
      .multiplyScalar(Math.min(1.85, 1 / camera.aspect))
      .add(orbit.target);
  }
  camera.fov = s.lens + (camera.aspect < 1.35 ? 14 : 0);
  camera.updateProjectionMatrix();
  camera.lookAt(orbit.target);
  $("shot").textContent = s.name.toUpperCase();
  $("camera").selectedIndex = s.cam;
}
function setColor() {
  let [a, b] = palettes[palette];
  M.a.color.set(a).multiplyScalar(3.2);
  M.b.color.set(b).multiplyScalar(2.8);
  leftNeon.color.set(a);
  rightNeon.color.set(b);
  for (const s of colorSigns) s.m.color.set(s.theme ? b : a).multiplyScalar(s.level);
  document.querySelector(".swatch").style.background =
    "linear-gradient(90deg," + a + " 50%," + b + " 50%)";
}
function frame(t, absolute = false) {
  const s = shots.find((s) => t < s.to) || shots.at(-1);
  if (!manual || absolute) compose(s, Math.max(0, Math.min(1, (t - s.from) / (s.to - s.from))));
  else orbit.update();
  // Give a dispatched action its first frame even when the previous GPU frame was slow.
  if (!absolute) {
    trainStart ??= wall;
    cookStart ??= wall;
  }
  const sceneTime = absolute ? t : wall,
    triggeredTrain = !absolute && wall >= trainStart && wall - trainStart < 4.4,
    pass = triggeredTrain ? wall - trainStart : sceneTime % 10;
  const triggeredCook = !absolute && wall >= cookStart && wall - cookStart < 5.0;
  const phase = triggeredCook ? (wall - cookStart) / 5.0 : (sceneTime % 6) / 6;
  stall.update(sceneTime, phase);
  district.update(sceneTime, rain, pass);
  weatherFX.update(sceneTime, rain, pass);
  const flutter = 0.965 + 0.035 * Math.sin(sceneTime * 57) * Math.cos(sceneTime * 13);
  M.a.color.set(palettes[palette][0]).multiplyScalar(3.2 * flutter);
  for (const s of colorSigns)
    if (!s.theme) s.m.color.set(palettes[palette][0]).multiplyScalar(s.level * flutter);
  leftNeon.intensity = 15 * flutter;
  post.render(world, camera, sceneTime);
  $("time").textContent = "00:" + String(Math.floor(t)).padStart(2, "0");
  $("seek").value = t;
  $("seek").style.setProperty("--pct", (t / 30) * 100 + "%");
  $("train").classList.toggle("active", triggeredTrain);
  $("cook").classList.toggle("active", triggeredCook);
}
function resize() {
  let r = $("stage").getBoundingClientRect();
  renderer.setSize(r.width, r.height, false);
  let px = renderer.getDrawingBufferSize(new T.Vector2());
  post.size(px.x, px.y);
  camera.aspect = px.x / px.y;
  camera.updateProjectionMatrix();
  frame(time);
}
function autoState(on) {
  playing = on;
  $("auto").setAttribute("aria-pressed", String(on));
  $("playIcon").textContent = on ? "Ⅱ" : "▶";
}
function manualMode() {
  if (!manual) {
    orbit.update();
    manual = true;
  }
  autoState(false);
  parked = false;
}
orbit.addEventListener("start", manualMode);
$("auto").onclick = () => {
  autoState(!playing);
  if (playing) {
    manual = false;
    if (trainStart !== null) trainStart += time - wall;
    if (cookStart !== null) cookStart += time - wall;
    wall = time;
  }
  parked = false;
};
$("camera").onchange = () => {
  let i = $("camera").selectedIndex;
  manualMode();
  compose(shots[i], 0.5);
  orbit.update();
  frame(time);
};
$("seek").oninput = () => {
  time = Number($("seek").value);
  wall = time;
  trainStart = cookStart = -1e5;
  manual = false;
  autoState(false);
  frame(time, true);
};
$("rain").oninput = (e) => {
  rain = Number(e.target.value) / 100;
  $("rainvalue").textContent = e.target.value + "%";
  e.target.style.setProperty("--pct", e.target.value + "%");
  frame(time);
};
$("palette").onchange = (e) => {
  palette = e.target.selectedIndex;
  setColor();
  frame(time);
};
$("train").onclick = () => {
  trainStart = null;
  $("train").classList.add("active");
  parked = false;
};
$("cook").onclick = () => {
  cookStart = null;
  $("cook").classList.add("active");
  parked = false;
};
$("screen").onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
};
setColor();
resize();
new ResizeObserver(resize).observe($("stage"));
$("loading").remove();
window.renderAt = (t) => {
  if (!Number.isFinite(t)) throw new TypeError("Time must be finite");
  parked = true;
  manual = false;
  time = T.MathUtils.clamp(t, 0, duration);
  wall = time;
  trainStart = cookStart = -1e5;
  frame(time, true);
};
function tick(now) {
  const dt = Math.max(0, (now - last) / 1000);
  last = now;
  if (!parked) {
    wall += dt;
    if (playing) time = (time + dt) % duration;
    frame(time);
  }
  requestAnimationFrame(tick);
}
document.addEventListener("visibilitychange", () => {
  last = performance.now();
});
last = performance.now();
requestAnimationFrame(tick);
