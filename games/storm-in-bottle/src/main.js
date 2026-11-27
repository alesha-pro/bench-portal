import * as T from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { V, group } from "./craft.js";
import { materials } from "./surfaces.js";
import { lighting } from "./lighting.js";
import { desk } from "./desk.js";
import { galleon } from "./vessel.js";
import { ocean, causticField, uniforms, seaHeight, setWavePackets } from "./sea.js";
import { reef } from "./reef.js";
import { breakers } from "./breakers.js";
import { bottledGlass } from "./bottle.js";
import { weather, strike, pulse } from "./weather.js";

const $ = (id) => document.getElementById(id),
  clamp = T.MathUtils.clamp;
const film = new URLSearchParams(location.search).has("film");
if (film) document.body.classList.add("film");
window.TOTAL_DURATION = 30.0;
const canvas = $("ocean"),
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
renderer.setPixelRatio(film ? 1 : Math.min(devicePixelRatio, 1.6));
renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.96;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
const scene = new T.Scene(),
  glassScene = new T.Scene(),
  camera = new T.PerspectiveCamera(32, 1, 0.1, 65);
const target = new T.WebGLRenderTarget(1, 1, {
  type: T.HalfFloatType,
  samples: 4,
  depthTexture: new T.DepthTexture(1, 1, T.UnsignedIntType),
});
const composite = new T.Scene(),
  flatCam = new T.Camera();
const quad = new T.Mesh(
  new T.PlaneGeometry(2, 2),
  new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      frame: { value: target.texture },
      depth: { value: target.depthTexture },
      pix: { value: new T.Vector2() },
      focal: { value: 12 },
      filmGrade: { value: film ? 1 : 0.4 },
    },
    vertexShader: `varying vec2 coord;void main(){coord=uv;gl_Position=vec4(position.xy,0.,1.);}`,
    fragmentShader: `uniform sampler2D frame,depth;uniform vec2 pix;uniform float focal,filmGrade;varying vec2 coord;
float distanceToEye(float d){return 6.5/(65.-64.9*d);}
void main(){float eye=distanceToEye(texture2D(depth,coord).r);float blur=min(4.9,abs(1./focal-1./eye)*64.)*filmGrade;
vec3 c=texture2D(frame,coord).rgb*2.;float weight=2.;
for(int i=0;i<10;i++){float a=float(i)*2.39996;vec2 sampleUV=coord+pix*vec2(cos(a),sin(a))*sqrt((float(i)+.5)/10.)*blur;float sampleZ=distanceToEye(texture2D(depth,sampleUV).r);float w=smoothstep(-.50,.12,sampleZ-eye);c+=texture2D(frame,sampleUV).rgb*w;weight+=w;}
c/=weight;float vignette=1.-.23*pow(clamp(length((coord-.5)*vec2(1.05,.85))*1.52,0.,1.),2.);gl_FragColor=vec4(c*vignette,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,
  }),
);
quad.frustumCulled = false;
composite.add(quad);
await document.fonts.ready;
const [{ backdrop: bg, studio }, m, ripples] = await Promise.all([
  lighting(scene, renderer),
  materials(),
  new T.TextureLoader().loadAsync("assets/ripple-normal.jpg"),
]);
ripples.wrapS = ripples.wrapT = T.RepeatWrapping;
uniforms.ripples = { value: ripples };
uniforms.studio = { value: studio };
const updateDesk = desk(scene, m);
const bottle = group(scene);
bottle.position.y = 2.02;
const liquid = group(bottle);
ocean(liquid);
reef(bottle, m).traverse((o) => o.layers.enable(1));
breakers(bottle);
const vessel = galleon(bottle, m),
  air = weather(bottle),
  glass = bottledGlass(bottle, glassScene, m, target, bg),
  lightField = causticField(renderer, [m.table, m.chart]);
const beneath = new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType });
// The refraction capture contains the immersed miniatures and a deep-water back color.
const roomBackground = scene.background;
const deepBackground = new T.Color(0.01, 0.052, 0.035);
scene.traverse((o) => {
  if (o.isLight) o.layers.enable(1);
});
uniforms.beneath = { value: beneath.texture };
uniforms.viewport = { value: new T.Vector2() };
renderer.shadowMap.autoUpdate = false;
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.09;
controls.minDistance = 4.5;
controls.maxDistance = 18;
controls.maxPolarAngle = Math.PI * 0.485;
controls.minPolarAngle = 0.16;
controls.enablePan = false;
controls.rotateSpeed = 0.67;
controls.zoomSpeed = 0.74;
const defaults = { storm: 0.46, caustics: 0.78, clarity: 0.64 };
const settings = { ...defaults };
let mode = "live",
  time = 0,
  liveT = 2,
  impulses = [],
  drag = null,
  dragTilt = 0,
  dragRoll = 0,
  previous = performance.now(),
  size = new T.Vector2(),
  playStart = 0;
const focusPoint = new T.Vector3();
const home = V(3.45, 4.85, 12.1),
  look = V(-0.06, 1.92, 0);
const smooth = (x) => {
  x = clamp(x, 0, 1);
  return x * x * (3 - 2 * x);
};
function showcaseStorm(t) {
  return 0.1 + 0.69 * smooth((t - 2) / 8) + 0.19 * smooth((t - 15) / 5) - 0.81 * smooth((t - 23) / 6);
}
function chapter(t) {
  return t < 6
    ? "The calm"
    : t < 10
      ? "Gathering gale"
      : t < 16
        ? "First squall"
        : t < 20
          ? "Storm tide"
          : t < 25
            ? "Kraken tempest"
            : "After the storm";
}
function shotAt(t) {
  if (!film) {
    const a = 0.11 * Math.sin(t * 0.19 - 0.5),
      d = 1 - 0.046 * smooth((t - 4) / 6) + 0.041 * smooth((t - 23) / 6);
    controls.target.copy(look);
    camera.position.set(
      look.x + d * (home.x * Math.cos(a) + home.z * Math.sin(a)),
      home.y + 0.18 * Math.sin(t * 0.23),
      d * (home.z * Math.cos(a) - home.x * Math.sin(a)),
    );
    if (innerWidth > 700) {
      const sweep = smooth((t - 24.7) / 4.1);
      camera.position.lerp(V(-1.4, 3.65, 6.65), sweep);
      controls.target.lerp(V(-0.71, 0.39, 1.6), sweep);
    }
    camera.lookAt(controls.target);
    return;
  }
  // Five composed camera moves, with hard cuts motivated by thunder and wave action.
  const shots = [
    [0, 7, [2.5, 4.48, 10.7], [0.75, 4.0, 9.15], [-0.04, 1.55, 0], [-0.3, 1.8, 0]],
    [7, 13.2, [-3.06, 3.62, 7.8], [-1.72, 3.45, 6.96], [-0.8, 1.99, 0], [-0.86, 2.05, 0]],
    [13.2, 19.7, [2.86, 3.12, 5.61], [1.61, 2.87, 5.08], [-0.49, 1.99, 0.02], [-0.6, 1.99, 0.1]],
    [19.7, 25.3, [0.67, 4.49, 6.72], [-0.86, 4.07, 6.86], [-0.56, 1.92, 0], [-0.78, 1.91, 0]],
    [25.3, 30, [-0.05, 3.34, 6.57], [-1.48, 3.32, 4.66], [-1.26, 0.58, 1.38], [-2.3, 0.13, 2.06]],
  ];
  const s = shots.find((q) => t < q[1]) || shots.at(-1),
    u = clamp((t - s[0]) / (s[1] - s[0]), 0, 1);
  camera.position.fromArray(s[2]).lerp(V(...s[3]), u);
  controls.target.fromArray(s[4]).lerp(V(...s[5]), u);
  camera.lookAt(controls.target);
}
function homeView() {
  controls.reset();
  camera.position.copy(home);
  controls.target.copy(look);
  controls.update();
}
function response(dt, a) {
  return dt < 0 ? 0 : a * Math.exp(-dt * 0.97) * Math.sin(6.85 * dt + 0.22);
}
const filmImpulses = [
  { t: 10, a: 0.98, roll: 0.63 },
  { t: 20, a: -1.16, roll: -0.91 },
];
function frame(t, show) {
  const s = show ? showcaseStorm(t) : settings.storm;
  let kick = 0,
    roll = 0,
    light = show ? strike(t) : { flash: 0, index: 0 },
    rough = 0;
  const events = show ? filmImpulses : impulses;
  setWavePackets(t, events);
  for (const e of events) {
    const dt = t - e.t;
    if (dt < 0) continue;
    kick += response(dt, e.a);
    roll += response(dt, e.roll);
    rough += Math.exp(-dt * 0.86) * Math.abs(e.a) * 0.23;
  }
  if (!show && s > 0.71) {
    const phase = (t + 1.6) % 5.74;
    light = {
      flash: (pulse(phase) + 0.67 * pulse(phase - 0.33)) * smooth((s - 0.71) / 0.25),
      index: Math.floor(t / 5.74),
    };
  }
  const tilt = clamp(kick + 0.61 * dragTilt, -1.15, 1.15),
    actual = clamp(s + rough, 0, 1.22);
  bottle.rotation.set(0.103 * roll + dragRoll * 0.106, 0.024 * kick, -0.16 * kick + dragTilt * 0.125);
  bottle.position.y = 2.02 + 2.3 * Math.abs(Math.sin(bottle.rotation.z));
  bottle.updateMatrixWorld(true);
  uniforms.clock.value = t;
  uniforms.impact.value = Math.min(
    1.25,
    Math.abs(tilt) * 0.92 + Math.abs(roll + dragRoll) * 0.65 + rough * 2,
  );
  uniforms.storm.value = actual;
  uniforms.sloshing.value = tilt;
  uniforms.clarity.value = settings.clarity;
  uniforms.intensity.value = settings.caustics;
  uniforms.flash.value = light.flash;
  uniforms.bottle.value.copy(bottle.matrixWorld);
  const x = vessel.ship.position.x,
    z = 0.06 * Math.sin(t * 0.84);
  const sea = (dx, dz) => seaHeight(x + dx, z + dz, t, actual, tilt);
  vessel.ship.position.y = (sea(-0.38, 0) + 2 * sea(0, 0) + sea(0.38, 0)) * 0.25 + 0.063;
  vessel.ship.position.z = z;
  vessel.ship.rotation.z = Math.atan2(sea(0.55, 0) - sea(-0.55, 0), 1.1) * 0.63;
  vessel.ship.rotation.x = -Math.atan2(sea(0, 0.24) - sea(0, -0.24), 0.48) * 0.55;
  vessel.animate(t, actual, tilt);
  updateDesk(t, uniforms.impact.value);
  air(t, light.flash, light.index);
  glass.update();
  lightField();
  camera.layers.set(1);
  scene.background = deepBackground;
  renderer.setRenderTarget(beneath);
  renderer.clear();
  renderer.render(scene, camera);
  camera.layers.set(0);
  scene.background = roomBackground;
  renderer.shadowMap.needsUpdate = true;
  renderer.setRenderTarget(target);
  renderer.clear();
  renderer.render(scene, camera);
  quad.material.uniforms.focal.value = camera.position.distanceTo(
    film && show && t >= 25.3 ? controls.target : vessel.ship.getWorldPosition(focusPoint),
  );
  renderer.setRenderTarget(null);
  renderer.clear();
  renderer.render(composite, flatCam);
  renderer.autoClear = false;
  renderer.render(glassScene, camera);
  renderer.autoClear = true;
}
function controlsUI(s = settings.storm) {
  for (const name of ["storm", "caustics", "clarity"]) {
    const v = name === "storm" ? s : settings[name],
      pct = Math.round(v * 100),
      el = $(name);
    el.value = pct;
    el.style.setProperty("--fill", pct + "%");
    $(name + "-value").textContent =
      name === "storm" ? (pct < 27 ? "Calm breeze" : pct < 72 ? "Gale" : "Kraken tempest") : pct + "%";
  }
}
function transport() {
  $("time").textContent = "00:" + String(Math.floor(time + 0.000001)).padStart(2, "0");
  $("timeline").value = time;
  $("timeline").style.setProperty("--fill", (time / 30) * 100 + "%");
  $("chapter").lastElementChild.textContent = mode === "live" ? "Free exploration" : chapter(time);
  $("play-glyph").setAttribute("href", mode === "play" ? "#pause" : "#play");
  $("showcase").setAttribute(
    "aria-label",
    mode === "play" ? "Pause showcase" : "Play 30-second auto showcase",
  );
}
function seek(t) {
  mode = "seek";
  time = clamp(Number(t) || 0, 0, 30);
  drag = null;
  dragTilt = dragRoll = 0;
  controls.enabled = true;
  shotAt(time);
  frame(time, true);
  controlsUI(showcaseStorm(time));
  transport();
  return time;
}
window.renderAt = seek;
function resize() {
  const w = innerWidth,
    h = innerHeight;
  renderer.setSize(w, h, false);
  renderer.getDrawingBufferSize(size);
  quad.material.uniforms.pix.value.set(1 / size.x, 1 / size.y);
  target.setSize(size.x, size.y);
  beneath.setSize(Math.round(size.x * 0.75), Math.round(size.y * 0.75));
  uniforms.viewport.value.copy(size);
  glass.resize(size.x, size.y);
  camera.aspect = w / h;
  const mobile = w <= 700 && !film;
  camera.fov = mobile
    ? Math.max(37, (2 * Math.atan(3.98 / ((home.distanceTo(look) * w) / h)) * 180) / Math.PI)
    : 32;
  camera.setViewOffset(w, h, film ? 0 : mobile ? 0 : w * 0.107, mobile ? h * 0.065 : 0, w, h);
  camera.updateProjectionMatrix();
  if (mode === "seek") seek(time);
}
function takeControl() {
  if (mode !== "live") {
    liveT = time;
    settings.storm = showcaseStorm(time);
    controls.update();
    mode = "live";
    impulses = [];
    controlsUI();
    transport();
  }
}
function shake(a = 0.96, roll = 0.5) {
  takeControl();
  impulses.push({ t: liveT, a, roll });
  impulses = impulses.slice(-8);
  $("shake").classList.add("kick");
  setTimeout(() => $("shake").classList.remove("kick"), 230);
}
const raycaster = new T.Raycaster();
canvas.addEventListener(
  "pointerdown",
  (e) => {
    if (e.button !== 0) return;
    takeControl();
    raycaster.setFromCamera(
      new T.Vector2((e.clientX / innerWidth) * 2 - 1, 1 - (e.clientY / innerHeight) * 2),
      camera,
    );
    if (raycaster.intersectObject(glass.object).length) {
      e.stopImmediatePropagation();
      controls.enabled = false;
      canvas.setPointerCapture(e.pointerId);
      drag = { x: e.clientX, y: e.clientY, id: e.pointerId };
    }
  },
  true,
);
canvas.addEventListener("pointermove", (e) => {
  if (!drag || drag.id !== e.pointerId) return;
  dragTilt = clamp((e.clientX - drag.x) / 100, -1.25, 1.25);
  dragRoll = clamp((e.clientY - drag.y) / 100, -1, 1);
});
function release(e) {
  if (!drag || drag.id !== e.pointerId) return;
  const a = Math.abs(dragTilt) < 0.12 ? 0.88 : dragTilt,
    rr = dragRoll || 0.4;
  drag = null;
  dragTilt = dragRoll = 0;
  controls.enabled = true;
  shake(a, rr);
}
canvas.addEventListener("pointerup", release);
canvas.addEventListener("pointercancel", release);
canvas.addEventListener("wheel", takeControl, { capture: true, passive: true });
for (const name of ["storm", "caustics", "clarity"])
  $(name).addEventListener("input", (e) => {
    const value = Number(e.target.value) * 0.01;
    takeControl();
    settings[name] = value;
    controlsUI();
  });
$("shake").onclick = () => shake();
$("reset").onclick = () => {
  mode = "live";
  time = 0;
  liveT = 2;
  drag = null;
  dragTilt = dragRoll = 0;
  impulses = [];
  Object.assign(settings, defaults);
  controls.enabled = true;
  homeView();
  controlsUI();
  transport();
};
function play() {
  if (mode === "play") {
    seek(time);
    return;
  }
  if (time >= 29.999) time = 0;
  mode = "play";
  drag = null;
  dragTilt = dragRoll = 0;
  controls.enabled = true;
  previous = performance.now();
  playStart = previous - time * 1000;
  transport();
}
$("showcase").onclick = play;
$("timeline").addEventListener("input", (e) => seek(e.target.value));
$("fullscreen").onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
};
document.addEventListener("keydown", (e) => {
  if (["INPUT", "BUTTON"].includes(document.activeElement?.tagName) || e.repeat) return;
  if (e.code === "Space") {
    e.preventDefault();
    play();
  }
  if (e.code === "KeyS") shake();
});
function loop(now) {
  requestAnimationFrame(loop);
  const dt = clamp((now - previous) * 0.001, 0, 0.1);
  previous = now;
  if (mode === "seek") return;
  if (mode === "play") {
    time = clamp((now - playStart) * 0.001, 0, 30);
    shotAt(time);
    frame(time, true);
    controlsUI(showcaseStorm(time));
    if (time === 30) mode = "seek";
    transport();
  } else {
    liveT += dt;
    impulses = impulses.filter((e) => liveT - e.t < 7);
    controls.update();
    frame(liveT, false);
  }
}
resize();
homeView();
frame(liveT, false);
controlsUI();
transport();
document.body.classList.add("ready");
window.addEventListener("resize", resize);
requestAnimationFrame(loop);
