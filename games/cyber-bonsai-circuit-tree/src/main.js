import * as T from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { V, flush } from "./craft.js";
import { growTree, sapUniforms } from "./tree.js";
import { substrate } from "./substrate.js";
import { blossomSystem } from "./bloom.js";
import { studio, compositor } from "./studio.js";
import { filmLettering, plateAt } from "./titles.js";

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search),
  film = params.has("film"),
  capture = params.has("capture");
const canvas = $("#specimen"),
  stage = $(".stage");
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: false,
  alpha: false,
  preserveDrawingBuffer: capture,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
const scene = new T.Scene(),
  cam = new T.PerspectiveCamera(32, 1, 0.06, 80);
const environment = studio(renderer, scene);
const powerSubstrate = substrate(scene);
flush(scene);
const treeAssembly = new T.Group();
scene.add(treeAssembly);
growTree();
const blossom = blossomSystem(treeAssembly);
flush(treeAssembly);
renderer.shadowMap.needsUpdate = true;
const post = compositor(renderer);
if (film) post.uniforms.titles.value = await filmLettering();
const controls = new OrbitControls(cam, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.09;
controls.enablePan = true;
controls.minDistance = 1.2;
controls.maxDistance = 19;
controls.maxPolarAngle = Math.PI * 0.501;
controls.minPolarAngle = 0.13;
const presets = [
  "Full Tree",
  "PCB Roots & Vacuum Tubes",
  "Glowing Blossom Canopy",
];
const paletteNames = ["Sakura Gold", "Cyber Cyan/Magenta", "Thermal Amber"];
const swatches = [
  ["#f1acba", "#d99168", "#efcb87"],
  ["#71d8da", "#9b92d3", "#e98dc9"],
  ["#f4c278", "#dc8757", "#b75e42"],
];
const figNames = [
  "Full tree",
  "PCB roots & vacuum tubes",
  "Glowing blossom canopy",
];
const icon = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;
const makeButton = (parent, cls, label, html, action) => {
  const el = document.createElement("button");
  el.className = cls;
  el.setAttribute("aria-label", label);
  el.innerHTML = html;
  el.addEventListener("click", action);
  $(parent).append(el);
  return el;
};
const setSelection = (list, i) =>
  list.forEach((e, j) => e.setAttribute("aria-pressed", String(i === j)));
const modeButtons = paletteNames.map((name, i) =>
  makeButton(
    "#modes",
    "mode",
    name,
    `<span class="swatches">${swatches[i].map((c) => `<i style="background:${c}"></i>`).join("")}</span><span>${name}</span><svg class="tick"><use href="#check"/></svg>`,
    () => {
      blossom.palette(i);
      setSelection(modeButtons, i);
      draw();
    },
  ),
);
const cameras = presets.map((name, i) =>
  makeButton(
    "#cameras",
    "camera",
    name,
    icon(["tree", "chip", "blossom"][i]) + name,
    () => selectCamera(i),
  ),
);
setSelection(modeButtons, 0);
let w = 1,
  h = 1,
  playing = false,
  parked = capture,
  t = 0,
  phase = 0,
  playhead = 0,
  speed = 1,
  lastShot = 0,
  waveStart = -100,
  selected = 0,
  transition = null,
  frameMode = "manual",
  last = performance.now();
const ease = (x) => x * x * (3 - 2 * x);
const mix = T.MathUtils.lerp;
function pose(target, offset, fov) {
  return { target: V(...target), offset: V(...offset), fov };
}
function mixPose(a, b, p) {
  return {
    target: a.target.clone().lerp(b.target, p),
    offset: a.offset.clone().lerp(b.offset, p),
    fov: mix(a.fov, b.fov, p),
  };
}
const hero = pose([-0.04, 2.19, 0], [1.7, 1.52, 10.85], 30.7);
const rootPose = pose([-0.4, 1.01, 0.26], [1.22, 1.75, 3.58], 31);
const crownPose = pose([0.3, 3.72, -0.05], [0.63, 1.28, 5.55], 30);
function sequence(time) {
  if (time < 7.3)
    return [
      0,
      mixPose(
        pose([-0.04, 2.18, 0], [2.25, 1.64, 11.05], 31.0),
        pose([-0.04, 2.19, 0], [0.66, 1.45, 10.7], 30.2),
        ease(time / 7.3),
      ),
    ];
  if (time < 13.55)
    return [
      1,
      mixPose(
        pose([-0.65, 1.05, 0.3], [-0.94, 1.63, 3.15], 32),
        pose([-0.41, 1.01, 0.23], [0.97, 1.83, 3.4], 32),
        ease((time - 7.3) / 6.25),
      ),
    ];
  if (time < 19.6)
    return [
      2,
      mixPose(
        pose([1.4, 3.61, 0.08], [1.05, 0.8, 2.81], 30),
        pose([0.66, 3.77, -0.05], [0.2, 0.86, 3.6], 30),
        ease((time - 13.55) / 6.05),
      ),
    ];
  if (time < 24.15)
    return [
      0,
      mixPose(
        pose([-0.1, 2.26, 0], [-4.15, 2.6, 9.85], 32.4),
        pose([-0.1, 2.23, 0], [-2.88, 2.23, 10.37], 31.8),
        ease((time - 19.6) / 4.55),
      ),
    ];
  return [
    0,
    mixPose(
      pose([-0.02, 2.17, 0.02], [0.47, 1.25, 10.47], 31.3),
      pose([-0.04, 2.18, 0], [2.25, 1.64, 11.05], 31),
      ease((time - 24.15) / 5.85),
    ),
  ];
}
function framingScale(index) {
  return film ? 1 : Math.max(1, 1.39 / (w / h)) * (index === 0 ? 1.08 : 1.015);
}
function apply(p) {
  const narrow = framingScale(lastShot);
  cam.position.copy(p.offset).multiplyScalar(narrow).add(p.target);
  controls.target.copy(p.target);
  cam.fov = p.fov;
  cam.lookAt(p.target);
  cam.updateProjectionMatrix();
}
function projection() {
  const offset = film ? 0 : w / h < 1.12 ? 0 : 0.071;
  cam.setViewOffset(
    w,
    h,
    -w * offset,
    -h * (film ? 0.003 : w / h < 1.12 ? 0.115 : 0.027),
    w,
    h,
  );
  environment.centre.value = 0.5 + offset;
}
function shotLabel(i) {
  lastShot = i;
  setSelection(cameras, i);
  $("#fig").textContent = "FIG. 0" + (i + 1);
  $("#view-name").textContent = figNames[i];
  stage.classList.toggle("detail", i !== 0);
  environment.hero.value = i === 0 ? 1 : 0.14;
}
function transport() {
  $("#showcase").setAttribute("aria-pressed", String(playing));
  $("#showcase use").setAttribute("href", playing ? "#pause" : "#play");
  $("#seek").value = playhead;
  $("#seek").style.setProperty("--fill", (playhead / 30) * 100 + "%");
  $("#elapsed").textContent =
    "00:" + String(Math.floor(playhead + 0.0001)).padStart(2, "0");
}
function resetDamping() {
  controls.enableDamping = false;
  controls.update();
  controls.enableDamping = true;
}
function stopShow() {
  playing = false;
  transport();
}
function selectCamera(i) {
  stopShow();
  parked = false;
  frameMode = "manual";
  selected = i;
  const goal = [hero, rootPose, crownPose][i];
  const cur = {
    target: controls.target.clone(),
    offset: cam.position
      .clone()
      .sub(controls.target)
      .divideScalar(framingScale(i)),
    fov: cam.fov,
  };
  transition = { start: performance.now(), cur, goal };
  shotLabel(i);
}
function setTime(value) {
  t = value;
  phase = value * speed;
  playhead = value;
  frameMode = "sequence";
  transition = null;
  const [i, p] = sequence(value);
  shotLabel(i);
  apply(p);
  transport();
}
const fading = (s) => T.MathUtils.clamp(s, 0, 1);
function draw() {
  let wave = (t - waveStart) * 2.45 + 0.66;
  if (wave > 5.9) wave = -10;
  if (wave < 0 && frameMode === "sequence") {
    for (const start of [4.35, 15.75, 20.45, 25.05]) {
      const age = t - start;
      if (age >= 0 && age < 2.12) wave = 0.69 + age * 2.45;
    }
  }
  powerSubstrate(t, wave);
  sapUniforms.height.value = wave;
  sapUniforms.clock.value = phase;
  blossom.update(
    t,
    phase,
    wave,
    h / (2 * Math.tan(T.MathUtils.degToRad(cam.fov / 2))),
  );
  // Scale about the root collar. The anchored PCB and tube dimensions stay physical.
  const growth = speed < 1 ? 1 + (speed - 1) * 0.19 : 1 + (speed - 1) * 0.095;
  if (treeAssembly.scale.y !== growth) {
    treeAssembly.scale.set(
      1 + (growth - 1) * 1.3,
      growth,
      1 + (growth - 1) * 0.85,
    );
    treeAssembly.position.set(
      -0.28 * (1 - treeAssembly.scale.x),
      0.866 * (1 - growth),
      0,
    );
    renderer.shadowMap.needsUpdate = true;
  }
  const fade = film
    ? Math.min(
        0.3 + 0.7 * fading(t / 0.6),
        0.15 + 0.85 * fading((30 - t) / 0.85),
      )
    : 1;
  post.uniforms.focus.value =
    cam.position.distanceTo(controls.target) - (lastShot === 1 ? 0.48 : 0.18);
  post.uniforms.aperture.value = lastShot === 1 ? 10 : lastShot === 2 ? 16 : 0;
  if (film) post.uniforms.plate.value.set(...plateAt(t));
  post.draw(scene, cam, fade);
}
function resize() {
  const rect = stage.getBoundingClientRect(),
    dpr = capture ? 1 : Math.min(window.devicePixelRatio || 1, 1.6);
  const width = Math.round(rect.width * dpr),
    height = Math.round(rect.height * dpr);
  if (w === width && h === height) return;
  w = Math.max(1, width);
  h = Math.max(1, height);
  renderer.setSize(w, h, false);
  post.size(w, h);
  cam.aspect = w / h;
  environment.aspect.value = w / h;
  projection();
  apply(
    frameMode === "sequence"
      ? sequence(playhead)[1]
      : [hero, rootPose, crownPose][selected],
  );
  draw();
}
window.TOTAL_DURATION = 30.0;
function renderAt(value) {
  stopShow();
  parked = true;
  resetDamping();
  waveStart = -100;
  setTime(T.MathUtils.clamp(Number(value) || 0, 0, 30));
  draw();
}
$("#showcase").addEventListener("click", () => {
  playing = !playing;
  last = performance.now();
  parked = false;
  waveStart = -100;
  if (playing) {
    resetDamping();
    setTime(playhead >= 30 ? 0 : playhead);
  }
  transport();
});
$("#seek").addEventListener("input", (e) => {
  parked = !playing;
  resetDamping();
  waveStart = -100;
  setTime(Number(e.target.value));
  draw();
});
$("#speed").addEventListener("input", (e) => {
  speed = Number(e.target.value);
  $("#speed-value").textContent =
    speed.toFixed((speed * 10) % 1 === 0 ? 1 : 2) + "×";
  e.target.style.setProperty("--fill", ((speed - 0.25) / 1.75) * 100 + "%");
  draw();
});
$("#surge").addEventListener("click", () => {
  waveStart = t;
  parked = false;
  $("#pulse-status").textContent = "Surge active";
  draw();
});
controls.addEventListener("start", () => {
  stopShow();
  parked = false;
  transition = null;
  frameMode = "manual";
  selected = lastShot;
});
$("#fullscreen").addEventListener("click", async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
});
function tick(now) {
  const delta = Math.max(0, (now - last) / 1000);
  last = now;
  if (!parked) {
    if (playing) {
      const next = Math.min(30, playhead + delta);
      t = next;
      phase += delta * speed;
      playhead = next;
      const [i, p] = sequence(next);
      if (i !== lastShot) shotLabel(i);
      apply(p);
      transport();
      if (next >= 30 && film) setTime(0);
      else if (next >= 30) {
        stopShow();
        frameMode = "manual";
        selected = lastShot;
      }
    } else {
      t += delta;
      phase += delta * speed;
      if (transition) {
        const f = Math.min(1, (now - transition.start) / 680);
        apply(mixPose(transition.cur, transition.goal, ease(f)));
        if (f >= 1) transition = null;
      } else controls.update();
    }
    if (t - waveStart > 2.2 && $("#pulse-status").textContent)
      $("#pulse-status").textContent = "";
    draw();
  }
  requestAnimationFrame(tick);
}
shotLabel(0);
resize();
await document.fonts.ready;
window.renderAt = renderAt;
if (film && !capture) {
  playing = true;
  setTime(0);
}
new ResizeObserver(resize).observe(stage);
requestAnimationFrame(tick);
