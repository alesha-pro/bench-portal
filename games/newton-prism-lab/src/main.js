import * as T from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { surfaces, workshop } from "./workshop.js";
import { glassPass, updateGlass } from "./glass.js";
import { mount, pose } from "./instruments.js";
import { apparatus, V } from "./optics.js";
import { LightField } from "./light.js";
import { shot, chapters, prismAngle } from "./direction.js";

const $ = (s) => document.querySelector(s),
  canvas = $("#bench");
const query = new URLSearchParams(location.search),
  film = query.has("film"),
  capture = query.has("capture");
document.body.classList.toggle("film", film);
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
renderer.shadowMap.enabled = true;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.type = T.PCFShadowMap;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.14;
renderer.transmissionResolutionScale = 0.65;
const scene = new T.Scene();
scene.background = new T.Color(0x1b211d);
scene.fog = new T.FogExp2(0x242822, 0.041);
const camera = new T.PerspectiveCamera(40, 1, 0.08, 80),
  orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.dampingFactor = 0.1;
orbit.minDistance = 2.5;
orbit.maxDistance = 18;
orbit.maxPolarAngle = Math.PI * 0.483;
orbit.target.set(-0.25, 1, 0);
const [s, hdr] = await Promise.all([
  surfaces(),
  new HDRLoader().loadAsync("./assets/workshop.hdr"),
]);
hdr.mapping = T.EquirectangularReflectionMapping;
s.oak.map.colorSpace = T.SRGBColorSpace;
for (const t of [s.oak.map, s.oak.normalMap]) {
  t.center.set(0.5, 0.5);
  t.rotation = Math.PI / 2;
  t.repeat.set(1.25, 1.55);
}
s.wall.map.colorSpace = T.SRGBColorSpace;
scene.environment = hdr;
scene.environmentRotation.y = 1.05;
scene.environmentIntensity = 0.46;
const optics = apparatus(),
  lamp = workshop(scene, s);
optics.forEach((o) => mount(scene, o, s));
const field = new LightField(scene, lamp.parchment),
  glass = glassPass(renderer, scene, camera, hdr);
const ambient = new T.HemisphereLight(0xc7d5d6, 0x8e6650, 0.87);
scene.add(ambient);
function spotLight(color, p, target, power, angle, soft, shadow = false) {
  const l = new T.SpotLight(color, power, 40, angle, soft, 2);
  l.position.set(...p);
  l.target.position.set(...target);
  scene.add(l, l.target);
  l.castShadow = shadow;
  if (shadow) {
    l.shadow.mapSize.set(2048, 2048);
    l.shadow.bias = -0.0003;
    l.shadow.normalBias = 0.018;
  }
  return l;
}
spotLight(0xffdfac, [-6, 5.8, 2], [-1, 0.25, -0.65], 125, 0.74, 0.83, true);
spotLight(0xc2dfeb, [2.8, 5.5, -2.35], [1, 0.6, 0.8], 62, 0.73, 0.94);
spotLight(0xf4b575, [-2.5, 4.1, -2.55], [-1, 1.1, -5.3], 23, 0.9, 0.94);
spotLight(0xeab374, [6.3, 4.2, -3.15], [3.1, 1.3, -5.4], 24, 1.07, 0.95);
const prismKick = new T.PointLight(0xffd7a0, 3.2, 3.5, 2);
prismKick.position.set(-3.27, 2.28, -0.8);
scene.add(prismKick);
const spectralKick = new T.PointLight(0x90ade7, 1.7, 3.2, 2);
spectralKick.position.set(1.44, 1.1, 1.54);
scene.add(spectralKick);
const composer = new EffectComposer(
  renderer,
  new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType, samples: 0 }),
);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new T.Vector2(640, 360), 0.2, 0.25, 1.16);
composer.addPass(bloom);
// Compress the HDR peak along its own chromaticity so hot vermilion and sapphire
// keep their hue. The output transfer is applied once, after linear-light bloom.
const filmPrint = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, exposure: { value: 1 } },
  vertexShader:
    "varying vec2 st;void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
  fragmentShader: `#include <common>
    uniform sampler2D tDiffuse;uniform float exposure;varying vec2 st;
    vec3 shoulder(vec3 x){return clamp(x*(2.51*x+.03)/(x*(2.43*x+.59)+.14),0.,1.);}
    void main(){vec3 rgb=max(vec3(0.),texture2D(tDiffuse,st).rgb*exposure);
      float peak=max(max(rgb.r,rgb.g),rgb.b),sat=(peak-min(min(rgb.r,rgb.g),rgb.b))/max(.0001,peak);
      vec3 hue=rgb*(shoulder(vec3(peak)).r/max(.0001,peak));
      vec3 print=mix(shoulder(rgb),hue,.82*smoothstep(.35,.92,sat));
      gl_FragColor=sRGBTransferOETF(vec4(print,1.));}`,
});
composer.addPass(filmPrint);
const aa = new ShaderPass(FXAAShader);
composer.addPass(aa);
const grade = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, time: { value: 0 } },
  vertexShader:
    "varying vec2 uv0;void main(){uv0=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
  fragmentShader: `uniform sampler2D tDiffuse;uniform float time;varying vec2 uv0;
void main(){vec3 c=texture2D(tDiffuse,uv0).rgb;vec2 d=(uv0-.5)*vec2(1.,.87);
float roll=smoothstep(.18,.72,length(d));c*=1.-.31*roll;
float grain=fract(sin(dot(floor(gl_FragCoord.xy)+floor(time*30.)*.013,vec2(12.9898,78.233)))*43758.5453)-.5;
gl_FragColor=vec4(c+grain*.016,1.);}`,
});
composer.addPass(grade);
let t = 0,
  playing = !capture,
  external = capture,
  manual = false,
  drag = null,
  last = performance.now(),
  dirty = true;
let params = {
  angle: -18,
  elevation: -2.8,
  slit: 1.55,
  density: 1.0,
  spread: 4.4,
  ambient: 1.0,
};
const initial = { ...params },
  defaults = apparatus(),
  defs = [
    [
      "angle",
      "Prism angle",
      -180,
      180,
      0.1,
      (v) => (v < 0 ? "−" : "+") + Math.abs(v).toFixed(1) + "°",
    ],
    [
      "elevation",
      "Sun angle",
      -13,
      12,
      0.1,
      (v) => (v < 0 ? "−" : "+") + Math.abs(v).toFixed(1) + "°",
    ],
    ["slit", "Slit width", 0.35, 4, 0.05, (v) => v.toFixed(2) + " mm"],
    ["density", "Dust density", 0, 1.8, 0.01, (v) => Math.round(v * 100) + "%"],
    ["spread", "Spectral spread", 0.3, 6.8, 0.05, (v) => v.toFixed(1) + "×"],
    [
      "ambient",
      "Room ambient",
      0.15,
      1.65,
      0.01,
      (v) => Math.round(v * 100) + "%",
    ],
  ];
const inputs = {};
for (const [key, name, min, max, step, format] of defs) {
  const node = document.createElement("div");
  node.className = "slider";
  node.innerHTML =
    '<label for="p-' +
    key +
    '">' +
    name +
    '<output></output></label><input id="p-' +
    key +
    '" type="range">';
  $("#sliders").append(node);
  const input = node.querySelector("input");
  Object.assign(input, { min, max, step, value: params[key] });
  inputs[key] = { input, out: node.querySelector("output"), format };
  input.addEventListener("input", () => {
    const value = Number(input.value);
    pause();
    params[key] = value;
    if (key === "angle") {
      optics[0].yaw = T.MathUtils.degToRad(params.angle);
      pose(optics[0]);
    }
    dirty = true;
    ui();
  });
}
const audio = new Audio("./assets/glass-harmonica.m4a");
audio.loop = true;
audio.preload = "none";
let sound = false;
function syncAudio() {
  if (sound && playing) {
    audio.currentTime = t % 30;
    audio.play().catch(() => {});
  } else audio.pause();
}
$("#sound").onclick = () => {
  sound = !sound;
  $("#sound").setAttribute("aria-pressed", String(sound));
  $("#soundText").textContent = sound ? "Sound on" : "Sound off";
  if (sound && !playing) {
    play();
  } else syncAudio();
};
$("#fullscreen").onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().catch(() => {});
};
$("#fold").onclick = () => {
  const closed = $("#controls").classList.toggle("closed");
  $("#fold").setAttribute("aria-expanded", String(!closed));
};
if (innerWidth < 620) $("#fold").click();
function ui() {
  for (const [key] of defs) {
    const { input, out, format } = inputs[key];
    input.value = params[key];
    out.textContent = format(params[key]);
    input.style.setProperty(
      "--progress",
      (100 * (params[key] - input.min)) / (input.max - input.min) + "%",
    );
  }
  $("#play").classList.toggle("paused", !playing);
  $("#play").setAttribute("aria-pressed", String(playing));
  const ts = $("#seek");
  ts.value = t;
  ts.style.setProperty("--progress", (t / 30) * 100 + "%");
  $("#clock").textContent =
    "00:" + String(Math.floor(t + 0.00001)).padStart(2, "0");
  const i = shot(t).i;
  $("#chapterNo").textContent = ["I", "II", "III", "IV", "V"][i];
  $("#chapterName").textContent = chapters[i];
}
function resetPose() {
  for (let i = 0; i < optics.length; i++) {
    const o = optics[i],
      d = defaults[i];
    o.p.copy(d.p);
    o.yaw = d.yaw;
    pose(o);
  }
  dirty = true;
}
function pause() {
  playing = false;
  manual = true;
  external = false;
  syncAudio();
  ui();
}
function play() {
  external = false;
  manual = false;
  playing = true;
  resetPose();
  Object.assign(params, initial);
  last = performance.now();
  syncAudio();
  ui();
}
$("#play").onclick = () => (playing ? pause() : play());
$("#reset").onclick = () => {
  pause();
  resetPose();
  Object.assign(params, initial);
  t = 0;
  showPose(0);
  dirty = true;
  ui();
};
$("#seek").oninput = (e) => window.renderAt(Number(e.target.value));
function showPose(ts) {
  const sh = shot(ts);
  camera.fov = sh.fov;
  camera.position.copy(sh.eye);
  orbit.target.copy(sh.target);
  if (camera.aspect < 1.15) {
    camera.position
      .sub(orbit.target)
      .multiplyScalar(1.5 / Math.max(0.72, camera.aspect))
      .add(orbit.target);
  }
  camera.updateProjectionMatrix();
  camera.lookAt(orbit.target);
  // The fourth shot closes the jaws for a narrow, resolved spectrum on paper.
  const focus =
    T.MathUtils.smoothstep(ts, 15.5, 20.2) *
    (1 - T.MathUtils.smoothstep(ts, 24.15, 26.6));
  params.slit =
    (1.55 + 0.43 * Math.sin(ts * 0.35)) * (1 - focus) + 0.85 * focus;
  params.spread = 4.4 - 1.06 * focus;
  params.angle = prismAngle(ts);
  optics[0].yaw = T.MathUtils.degToRad(params.angle);
  pose(optics[0]);
  dirty = true;
}
const rc = new T.Raycaster(),
  ndc = new T.Vector2(),
  table = new T.Plane(V(0, 1, 0), 0);
function ray(e) {
  const b = canvas.getBoundingClientRect();
  ndc.set(
    ((e.clientX - b.left) / b.width) * 2 - 1,
    1 - ((e.clientY - b.top) / b.height) * 2,
  );
  rc.setFromCamera(ndc, camera);
}
function pick() {
  const hits = rc.intersectObjects(
    optics.map((o) => o.root),
    true,
  );
  for (const h of hits) {
    if (h.object.renderOrder === 1) continue;
    let p = h.object;
    while (p && !p.userData.optic) p = p.parent;
    if (p) return p.userData.optic;
  }
  return null;
}
canvas.addEventListener(
  "pointerdown",
  (e) => {
    ray(e);
    const o = pick();
    pause();
    if (!o) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    orbit.enabled = false;
    const h = rc.ray.intersectPlane(table, V());
    if (!h) {
      orbit.enabled = true;
      return;
    }
    drag = {
      o,
      h,
      x: e.clientX,
      base: o.p.clone(),
      yaw: o.yaw,
      rotate: e.shiftKey || e.button === 2,
    };
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = drag.rotate ? "ew-resize" : "grabbing";
    $("#gesture span:last-child").textContent =
      o.label + (drag.rotate ? " · Rotating" : " · Moving");
  },
  true,
);
canvas.addEventListener(
  "pointermove",
  (e) => {
    if (!drag) {
      if (!playing && e.buttons === 0) {
        ray(e);
        canvas.style.cursor = pick() ? "grab" : "default";
      }
      return;
    }
    ray(e);
    const { o } = drag;
    if (drag.rotate) {
      const angle = drag.yaw + (e.clientX - drag.x) * 0.012;
      o.yaw =
        T.MathUtils.euclideanModulo(angle + Math.PI, 2 * Math.PI) - Math.PI;
      if (o === optics[0]) params.angle = T.MathUtils.radToDeg(o.yaw);
    } else {
      const h = rc.ray.intersectPlane(table, V());
      if (h) {
        o.p.copy(drag.base).add(h.sub(drag.h));
        o.p.x = T.MathUtils.clamp(o.p.x, -5.8, 5.9);
        o.p.z = T.MathUtils.clamp(o.p.z, -3.1, 3.27);
      }
    }
    pose(o);
    dirty = true;
    ui();
  },
  true,
);
function endDrag() {
  if (!drag) return;
  drag = null;
  orbit.enabled = true;
  canvas.style.cursor = "grab";
  $("#gesture span:last-child").innerHTML =
    "Drag optic to move <b>·</b> Shift + drag to rotate <b>·</b> Drag room to orbit";
}
canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener(
  "wheel",
  () => {
    if (playing || external) pause();
  },
  { capture: true, passive: true },
);
function size() {
  let w = innerWidth,
    h = innerHeight;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  glass.size(canvas.width, canvas.height);
  aa.uniforms.resolution.value.set(1 / canvas.width, 1 / canvas.height);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  if (!manual) showPose(t);
}
addEventListener("resize", () => {
  size();
  if (external) draw(t);
});
size();
function draw(ts) {
  if (dirty) {
    field.update(optics, params);
    dirty = false;
  }
  field.time(ts, params.density, canvas.height, !manual);
  grade.uniforms.time.value = ts;
  ambient.intensity = 0.5 * params.ambient;
  scene.environmentIntensity = 0.32 * params.ambient;
  filmPrint.uniforms.exposure.value = 0.81 * Math.pow(params.ambient, 0.37);
  lamp.light.intensity =
    4.3 + Math.sin(ts * 4.8) * 0.55 + Math.sin(ts * 8.7) * 0.26;
  lamp.update(ts, params.slit);
  for (const o of optics) if (o.glassMat) updateGlass(o, params.spread);
  // Refresh once, before the mirror samples any shadow from this frame.
  renderer.shadowMap.needsUpdate = true;
  glass.capture();
  composer.render(0);
}
window.TOTAL_DURATION = 30.0;
window.renderAt = (ts) => {
  external = true;
  playing = false;
  manual = false;
  t = T.MathUtils.clamp(Number(ts) || 0, 0, 30);
  audio.pause();
  Object.assign(params, initial);
  resetPose();
  orbit.enableDamping = false;
  orbit.update();
  orbit.enableDamping = true;
  showPose(t);
  orbit.update();
  ui();
  draw(t);
};
window.renderAt(0);
if (!capture) {
  external = false;
  playing = true;
  ui();
}
document.body.classList.add("ready");
let dustClock = 0;
function loop(now) {
  const dt = Math.max(0, (now - last) / 1000);
  last = now;
  requestAnimationFrame(loop);
  if (external) return;
  if (playing) {
    t = (t + dt) % 30;
    showPose(t);
    dustClock = t;
    ui();
  } else dustClock += dt;
  orbit.update();
  draw(playing ? t : dustClock);
}
last = performance.now();
requestAnimationFrame(loop);
