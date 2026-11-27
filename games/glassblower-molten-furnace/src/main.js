import { T, v, group, batch, palette, smooth, mix, clamp } from "./studio.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { makeFurnace } from "./furnace.js";
import { makeHero, anneal } from "./glass.js";
import { makeWorkshop } from "./workshop.js";
import { optics } from "./optics.js";
import { atmosphere } from "./atmosphere.js";
import { causticProjector } from "./caustics.js";

const $ = (s) => document.querySelector(s),
  query = new URLSearchParams(location.search),
  capture = query.has("capture"),
  film = query.has("film");
if (film) document.body.classList.add("film");
const renderer = new T.WebGLRenderer({
  canvas: $("#room"),
  antialias: false,
  preserveDrawingBuffer: capture,
  powerPreference: "high-performance",
  alpha: false,
});
renderer.autoClear = false;
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
const room = new T.Scene(),
  front = new T.Scene();
room.background = new T.Color(0x302d2a);
room.fog = new T.FogExp2(0x302d2a, 0.039);
const camera = new T.PerspectiveCamera(37, 1, 0.055, 60);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.dampingFactor = 0.09;
orbit.minDistance = 1.34;
orbit.maxDistance = 12.4;
orbit.maxPolarAngle = Math.PI * 0.52;
orbit.target.set(0, 2, 0);
const U = {
  focus: { value: 4 },
  time: { value: 0 },
  heat: { value: 1 },
  res: { value: new T.Vector2() },
  back: { value: null },
  contact: { value: 0 },
  quenchAge: { value: -10 },
  tub: { value: v(-1.31, 0.888, 2.27) },
  glassCenter: { value: v(0, 0, 0) },
  angle: { value: 0 },
  clarity: { value: 0 },
  steamOrigin: { value: v(0, 0, 0) },
};
const opticsPass = optics(renderer, U, film),
  m = await palette(renderer, room);
front.environment = room.environment;
front.environmentIntensity = 0.63;
const building = group(room),
  cast = causticProjector(renderer, U);
makeFurnace(building, m, U);
makeWorkshop(building, m, U, cast.receiver);
batch(building);
const hero = makeHero(front, m, U);
atmosphere(front, U);
function lighting(scene, shadows) {
  scene.add(new T.HemisphereLight(0xd5e3e7, 0x514239, 0.38));
  const key = new T.DirectionalLight(0xdfd7bd, 0.81);
  key.position.set(2.5, 7.3, 4.3);
  scene.add(key);
  key.target.position.set(-0.7, 1.4, -0.7);
  scene.add(key.target);
  if (shadows) {
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    const c = key.shadow.camera;
    c.left = -6;
    c.right = 6;
    c.top = 5;
    c.bottom = -5;
    c.far = 22;
    key.shadow.bias = -0.00035;
    key.shadow.normalBias = 0.024;
    key.shadow.radius = 2;
  }
  const cold = new T.DirectionalLight(0x99baca, 0.94);
  cold.position.set(2.3, 4.8, -3.4);
  scene.add(cold);
  const flame = new T.PointLight(0xff903d, 55, 14, 2);
  flame.position.set(-2.44, 1.99, -0.49);
  scene.add(flame);
  const bounce = new T.PointLight(0xf1a25f, 17, 11, 2);
  bounce.position.set(-2.85, 2.72, 1.07);
  scene.add(bounce);
  const hot = new T.PointLight(0xff9141, 4.5, 3.6, 2);
  scene.add(hot);
  return (t, H, temp) => {
    flame.intensity = (32 + 3 * Math.sin(5.7 * t) + 3 * Math.sin(8.3 * t + 0.8)) * H;
    bounce.intensity = 6.4 * H;
    hot.position.copy(hero.focus);
    hot.intensity = 2.9 * smooth(580, 1120, temp);
  };
}
const illuminate = [lighting(room, true), lighting(front, false)];
// The static workshop casts a persistent daylight shadow map. Dynamic firelight is evaluated per frame.
renderer.shadowMap.needsUpdate = true;
const shots = [
  [0, [0.75, 2.99, 6.58], [-1.24, 2.29, -1.1], 39],
  [3.4, [1.16, 2.9, 6.07], [-1.34, 2.24, -0.87], 37.5],
  [7.4, [2.5, 2.96, 5.79], [-0.71, 2.27, -0.03], 37],
  [11.7, [2.51, 2.91, 4.87], [0.39, 2.29, 0.83], 34.5],
  [16.7, [2.01, 2.93, 4.85], [0.8, 2.48, 1.24], 34],
  [19, [1.24, 3.04, 5.02], [0.64, 2.38, 1.27], 35],
  [21.85, [0.08, 3.52, 6.04], [-0.43, 1.86, 1.78], 40.5],
  [23.05, [0.16, 3.56, 6.02], [-0.36, 1.84, 1.77], 40.5],
  [25.25, [1.14, 3.41, 5.56], [1.86, 2.24, 1.51], 37.5],
  [28.05, [-2.18, 4.25, 5.98], [2.21, 1.57, 1.59], 39.5],
  [30, [-2.73, 4.43, 5.79], [2.24, 1.56, 1.65], 39],
];
function interpolate(input, n) {
  let i = input.findIndex((a) => n < a[0]) - 1;
  if (n >= input.at(-1)[0]) return input.at(-1)[1];
  i = Math.max(0, i);
  const left = input[i],
    right = input[i + 1],
    prev = input[Math.max(0, i - 1)],
    next = input[Math.min(input.length - 1, i + 2)];
  const dt = right[0] - left[0],
    f = clamp((n - left[0]) / dt),
    f2 = f * f,
    f3 = f2 * f;
  const m0 = ((right[1] - prev[1]) / (right[0] - prev[0])) * dt,
    m1 = ((next[1] - left[1]) / (next[0] - left[0])) * dt;
  return (
    (2 * f3 - 3 * f2 + 1) * left[1] +
    (f3 - 2 * f2 + f) * m0 +
    (-2 * f3 + 3 * f2) * right[1] +
    (f3 - f2) * m1
  );
}
const channels = Array.from({ length: 7 }, (_, k) =>
  shots.map((s) => [s[0], k === 6 ? s[3] : s[1 + Math.floor(k / 3)][k % 3]]),
);
const stages = [
  [0, 0.012],
  [2, 0.065],
  [6, 0.246],
  [11, 0.405],
  [16, 0.55],
  [20, 0.627],
  [22, 0.686],
  [24, 0.804],
  [27, 0.976],
  [30, 1],
];
const sliders = ["process", "heat", "spin", "timeline"].map((id) => $("#" + id));
let state = {
  p: 0.54,
  heat: 1200,
  spin: 12,
  angle: 1.4,
  time: 0,
  timeline: 0,
  preset: 0,
  playing: false,
  sound: false,
  burst: -Infinity,
  inFilm: false,
};
const presetButtons = [...document.querySelectorAll("[data-cam]")];
let baseFov = camera.fov;
function frameLens() {
  const widthCorrection = Math.max(1, 1.18 / camera.aspect);
  camera.fov =
    widthCorrection === 1
      ? baseFov
      : T.MathUtils.radToDeg(
          2 * Math.atan(Math.tan(T.MathUtils.degToRad(baseFov) * 0.5) * widthCorrection),
        );
  camera.updateProjectionMatrix();
}
function sizing() {
  const r = $("#stage").getBoundingClientRect(),
    factor = capture ? 1 : Math.min(devicePixelRatio, 1.6);
  const w = Math.max(2, Math.round(r.width * factor)),
    h = Math.max(2, Math.round(r.height * factor));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  frameLens();
  opticsPass.resize(w, h);
}
function place(eye, target, field) {
  // Flush any outstanding drag damping before an absolute camera seek.
  const enabled = orbit.enableDamping;
  orbit.enableDamping = false;
  orbit.update();
  orbit.enableDamping = enabled;
  camera.position.fromArray(eye);
  orbit.target.fromArray(target);
  baseFov = field;
  frameLens();
  orbit.update();
}
function preset(index) {
  state.preset = index;
  state.inFilm = false;
  if (index === 0) place([3.1, 3.36, 7.53], [-0.58, 2.21, -0.29], 39);
  if (index === 1) {
    const p = hero.focus;
    place([p.x + 1.45, p.y + 0.47, p.z + 2.98], [p.x + 0.12, p.y + 0.1, p.z], 32);
  }
  if (index === 2) place([4.77, 2.79, 1.17], [2.97, 2.42, -3.5], 35);
}
function work(t) {
  U.time.value = t;
  U.heat.value = 0.32 + (0.68 * (state.heat - 650)) / 550;
  const temp = anneal(state.p, state.heat);
  const age = state.inFilm && state.burst === -Infinity ? t - 21.3 : t - state.burst;
  U.quenchAge.value = clamp(age, -10, 10);
  U.contact.value = hero.update(state.p, temp, state.angle, t, age) * smooth(180, 800, temp);
  U.glassCenter.value.copy(hero.focus);
  U.angle.value = state.angle;
  U.clarity.value = (1 - smooth(270, 680, temp)) * smooth(0.66, 0.86, state.p);
  cast.render();
  for (const light of illuminate) light(t, U.heat.value, temp);
  return temp;
}
function showcase(t) {
  state.timeline = clamp(t, 0, 30);
  state.time = state.timeline;
  state.p = interpolate(stages, state.time);
  state.inFilm = true;
  const coast = clamp((state.time - 25.05) / 2.08);
  state.angle =
    (Math.min(state.time, 25.05) + 2.08 * (coast - 0.5 * coast * coast)) *
      ((2 * Math.PI * state.spin) / 60) +
    1.4;
  const n = channels.map((ch) => interpolate(ch, state.time));
  place(n.slice(0, 3), n.slice(3, 6), n[6]);
}
const clock = (t) => "00:" + String(Math.floor(t + 1e-5)).padStart(2, "0");
function paint() {
  const temp = work(state.time);
  camera.updateMatrixWorld();
  const focal = (state.preset === 2 ? orbit.target : hero.focus).clone();
  if (state.inFilm) {
    const rackFocus = smooth(19.2, 21.55, state.time) * (1 - smooth(23.1, 24.8, state.time));
    focal.lerp(U.tub.value, rackFocus);
  }
  U.focus.value = -focal.applyMatrix4(camera.matrixWorldInverse).z;
  opticsPass.render(room, front, camera);
  if (film) return;
  const index = state.p < 0.19 ? 0 : state.p < 0.45 ? 1 : state.p < 0.672 ? 2 : 3;
  $("#stage-name").textContent = ["Gather", "Inflate", "Twist & Neck", "Cool & Reveal"][index];
  $("#stage-count").textContent = "0" + (index + 1) + " / 04";
  $("#spec-temp").innerHTML = Math.round(temp) + " <b>°C</b>";
  $("#heat-label").textContent = state.heat + " °C";
  $("#spin-label").textContent = state.spin + " rpm";
  $("#lens").textContent = Math.round(camera.getFocalLength()) + " mm";
  $("#clock").innerHTML = clock(state.timeline) + " <i>/ 00:30</i>";
  const vals = [state.p, state.heat, state.spin, state.timeline];
  sliders.forEach((s, i) => {
    s.value = vals[i];
    s.style.setProperty("--fill", (100 * (s.value - s.min)) / (s.max - s.min) + "%");
  });
  presetButtons.forEach((b, i) => b.setAttribute("aria-pressed", i === state.preset));
}
const music = new Audio("assets/furnace-soundtrack.m4a");
music.preload = "none";
music.loop = true;
function changePlay(yes) {
  state.playing = yes;
  $("#play").setAttribute("aria-pressed", yes);
  $("#play").setAttribute("aria-label", (yes ? "Pause" : "Play") + " Auto Showcase (30s)");
  $("#play use").setAttribute("href", yes ? "#i-pause" : "#i-play");
  if (yes && state.sound) {
    music.currentTime = state.timeline % 30;
    music.play().catch(() => {});
  }
}
function manual() {
  changePlay(false);
  state.inFilm = false;
}
sliders[0].oninput = (e) => {
  manual();
  state.p = +e.target.value;
  work(state.time);
  if (state.preset === 1) preset(1);
  paint();
};
sliders[1].oninput = (e) => {
  if (!state.playing) manual();
  state.heat = +e.target.value;
  paint();
};
sliders[2].oninput = (e) => {
  if (!state.playing) manual();
  state.spin = +e.target.value;
  paint();
};
sliders[3].oninput = (e) => {
  changePlay(false);
  showcase(+e.target.value);
  state.preset = -1;
  if (state.sound) music.currentTime = state.timeline % 30;
  paint();
};
presetButtons.forEach(
  (b, i) =>
    (b.onclick = () => {
      manual();
      preset(i);
      paint();
    }),
);
$("#play").onclick = () => {
  if (!state.playing) {
    state.burst = -Infinity;
    state.preset = -1;
    showcase(state.timeline >= 30 ? 0 : state.timeline);
  }
  changePlay(!state.playing);
  paint();
};
orbit.addEventListener("start", () => {
  manual();
  state.preset = -1;
});
$("#full").onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
};
$("#sound").onclick = async () => {
  state.sound = !state.sound;
  $("#sound").setAttribute("aria-pressed", state.sound);
  $("#sound span").textContent = state.sound ? "Sound on" : "Sound off";
  $("#sound use").setAttribute("href", state.sound ? "#i-sound" : "#i-mute");
  if (state.sound) {
    music.currentTime = state.timeline % 30;
    await music.play();
  } else music.pause();
};
let hissContext, releaseLabel;
$("#quench").onclick = () => {
  if (!state.playing) manual();
  state.burst = state.time - 0.12;
  $("#quench span").textContent = "Steam released";
  clearTimeout(releaseLabel);
  releaseLabel = setTimeout(() => ($("#quench span").textContent = "Quench / Steam burst"), 1300);
  if (state.sound) {
    hissContext ??= new AudioContext();
    const ctx = hissContext,
      buffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const a = buffer.getChannelData(0);
    for (let i = 0; i < a.length; i++)
      a[i] = (Math.random() * 2 - 1) * Math.exp((-i / a.length) * 5) * 0.16;
    const s = ctx.createBufferSource(),
      hp = ctx.createBiquadFilter();
    s.buffer = buffer;
    hp.type = "highpass";
    hp.frequency.value = 2100;
    s.connect(hp).connect(ctx.destination);
    s.start();
  }
  paint();
};
sizing();
work(0);
preset(0);
paint();
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  parked = true;
  changePlay(false);
  state.burst = -Infinity;
  state.heat = 1200;
  state.spin = 12;
  state.preset = -1;
  showcase(t);
  paint();
};
new ResizeObserver(() => {
  sizing();
  paint();
}).observe($("#stage"));
let previous,
  parked = false;
for (const event of ["pointerdown", "input", "keydown", "wheel"])
  document.addEventListener(
    event,
    () => {
      parked = false;
    },
    { capture: true, passive: true },
  );
function animate(now) {
  const dt = previous === undefined ? 0 : Math.max(0, (now - previous) / 1000);
  previous = now;
  if (parked || (state.inFilm && !state.playing)) {
    requestAnimationFrame(animate);
    return;
  }
  if (state.playing) {
    const t = state.timeline + dt;
    showcase(Math.min(t, 30));
    if (t >= 30) changePlay(false);
  } else {
    state.time += dt;
    state.angle += dt * state.spin * ((2 * Math.PI) / 60);
    orbit.update();
  }
  paint();
  requestAnimationFrame(animate);
}
if (!capture) requestAnimationFrame(animate);
