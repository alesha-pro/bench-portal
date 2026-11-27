import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { createRoomBuffer } from "./refraction.js";
import { Sunbeams } from "./daylight.js";
import { createRoom } from "./room.js";
import { createFlowers } from "./flowers.js";
import { createVase, motionAt } from "./water.js";
import { createCaustics } from "./caustics.js";

const host = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
  preserveDrawingBuffer: true,
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
host.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x88958a);
const camera = new THREE.PerspectiveCamera(
  38,
  innerWidth / innerHeight,
  0.08,
  80,
);
const initialCamera = new THREE.Vector3(0.22, 3.53, 7.05),
  target = new THREE.Vector3(0.1, 1.27, 0);
camera.position.copy(initialCamera);
camera.lookAt(target);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(target);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.minDistance = 3.85;
controls.maxDistance = 8.7;
controls.maxPolarAngle = Math.PI * 0.44;
controls.minPolarAngle = Math.PI * 0.2;
controls.minAzimuthAngle = -0.52;
controls.maxAzimuthAngle = 0.81;
controls.enablePan = false;
const ambient = new THREE.HemisphereLight(0xe3eadb, 0x5c4633, 1.65);
scene.add(ambient);
const sun = new THREE.DirectionalLight(0xffe0a6, 4.2);
scene.add(sun);
sun.target.position.set(0, 0, 0);
scene.add(sun.target);
sun.castShadow = true;
sun.shadow.mapSize.set(3072, 3072);
sun.shadow.camera.left = -5;
sun.shadow.camera.right = 5;
sun.shadow.camera.top = 6;
sun.shadow.camera.bottom = -4;
sun.shadow.camera.near = 0.1;
sun.shadow.camera.far = 24;
sun.shadow.normalBias = 0.012;
sun.shadow.bias = -0.00015;
sun.shadow.radius = 2.2;
const bounce = new THREE.PointLight(0xffca89, 8, 10, 2);
bounce.position.set(-2, 2, 2);
scene.add(bounce);
const rimLight = new THREE.DirectionalLight(0xffedcf, 1.8);
rimLight.position.set(-3, 3, -4);
scene.add(rimLight);
const loader = new THREE.TextureLoader();
const [walnut, courtyard, painting, plate] = await Promise.all(
  ["walnut", "courtyard", "redoute-roses", "bridges-roses"].map((name) =>
    loader.loadAsync("./assets/" + name + ".webp"),
  ),
);
for (const map of [walnut, courtyard, painting, plate]) {
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
}
const room = createRoom(scene, walnut, courtyard, painting, plate);
const radiance = await new HDRLoader().loadAsync("./assets/workshop.hdr");
radiance.mapping = THREE.EquirectangularReflectionMapping;
const pmrem = new THREE.PMREMGenerator(renderer);
const environment = pmrem.fromEquirectangular(radiance);
scene.environment = environment.texture;
scene.environmentRotation.y = 1.8;
radiance.dispose();
pmrem.dispose();
const fill = new THREE.DirectionalLight(0xffece4, 1.3);
fill.position.set(2, 3.1, 4.5);
scene.add(fill);
const roomBuffer = createRoomBuffer(renderer, camera);
const caustics = createCaustics(scene, renderer);
const flowers = createFlowers(scene);
const lightVector = { value: new THREE.Vector3() },
  lightPower = { value: 1 };
const vase = createVase(scene, {
  ...roomBuffer.uniforms,
  stemNodes: { value: flowers.ends },
  lightVector,
  lightTint: { value: sun.color },
  lightPower,
});

const composer = new EffectComposer(renderer);
composer.renderTarget1.samples = 4;
composer.renderTarget2.samples = 4;
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new Sunbeams(camera, sun, roomBuffer.uniforms.roomDepth));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(innerWidth, innerHeight),
  0.15,
  0.26,
  1.42,
);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const params = {
  elevation: 32,
  azimuth: -35,
  caustics: 1.05,
  clarity: 0.92,
  breeze: 0.3,
};
const ui = {};
for (const name of Object.keys(params)) {
  const input = document.getElementById(name),
    output = document.getElementById(name + "-value");
  ui[name] = { input, output };
  input.addEventListener("input", () => {
    params[name] = Number(input.value);
    setAuto(false);
    syncUI();
  });
}
let auto = true,
  manualCapture = false,
  time = 0,
  last = performance.now(),
  events = [],
  drag = null;
const autoInput = document.querySelector("#auto");
const showcaseImpulses = [
  { time: 6, force: 1.1 },
  { time: 18, force: 1.3 },
];
function setAuto(value) {
  if (auto && !value) {
    events.push(...showcaseImpulses.filter((impulse) => impulse.time <= time));
  }
  auto = value;
  autoInput.checked = value;
  if (value) {
    time = 0;
    events = [];
  }
  manualCapture = false;
  last = performance.now();
}
autoInput.addEventListener("change", () => setAuto(autoInput.checked));
function syncUI() {
  for (const [name, { input, output }] of Object.entries(ui)) {
    input.value = params[name];
    input.style.setProperty(
      "--fill",
      (100 * (params[name] - Number(input.min))) /
        (Number(input.max) - Number(input.min)) +
        "%",
    );
    output.textContent =
      name === "elevation" || name === "azimuth"
        ? `${Math.round(params[name])}°`
        : `${Math.round((params[name] / (name === "caustics" ? 1.5 : 1)) * 100)}%`;
  }
}
function nudge(force = 1, dx = 1, dz = 0.68) {
  if (manualCapture) last = performance.now();
  manualCapture = false;
  events.push({ time, force, dx, dz });
}
document.querySelector("#nudge").addEventListener("click", () => nudge(1));
const raycaster = new THREE.Raycaster(),
  pointer = new THREE.Vector2();
function hitVase(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    (-(event.clientY - rect.top) / rect.height) * 2 + 1,
  );
  raycaster.setFromCamera(pointer, camera);
  return raycaster.intersectObject(vase.glass, false).length > 0;
}
renderer.domElement.addEventListener(
  "pointerdown",
  (event) => {
    if (hitVase(event)) {
      controls.enabled = false;
      drag = {
        x: event.clientX,
        y: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
      };
      renderer.domElement.setPointerCapture(event.pointerId);
      nudge(0.65);
      renderer.domElement.style.cursor = "grabbing";
    }
  },
  true,
);
renderer.domElement.addEventListener("pointermove", (event) => {
  if (drag) {
    const distance = Math.hypot(
      event.clientX - drag.lastX,
      event.clientY - drag.lastY,
    );
    if (distance > 6) {
      nudge(
        Math.min(distance / 60, 0.73),
        (event.clientX - drag.lastX) / distance,
        (event.clientY - drag.lastY) / distance,
      );
      drag.lastX = event.clientX;
      drag.lastY = event.clientY;
    }
  } else renderer.domElement.style.cursor = hitVase(event) ? "grab" : "default";
});
function release() {
  drag = null;
  controls.enabled = true;
  renderer.domElement.style.cursor = "default";
}
renderer.domElement.addEventListener("pointerup", release);
renderer.domElement.addEventListener("pointercancel", release);
controls.addEventListener("start", () => {
  if (controls.enabled) setAuto(false);
});
// Populate the light depth texture before launching photons. A camera with an
// empty viewing frustum lets Three run its ordinary scene shadow prepass.
const shadowTarget = new THREE.WebGLRenderTarget(1, 1);
const shadowView = new THREE.PerspectiveCamera(10, 1, 0.01, 0.02);
shadowView.position.set(0, 8, 0);
renderer.shadowMap.autoUpdate = false;
const sunDir = new THREE.Vector3();
function keyframes(t) {
  const keys = [
    [0, 17, -52],
    [6, 27, -48],
    [14, 39, -32],
    [20, 21, -35],
    [27, 11, -45],
    [30, 17, -52],
  ];
  for (let i = 0; i < keys.length - 1; i++) {
    let a = keys[i],
      b = keys[i + 1];
    if (t <= b[0]) {
      let k = THREE.MathUtils.clamp((t - a[0]) / (b[0] - a[0]), 0, 1);
      k = k * k * (3 - 2 * k);
      return {
        elevation: THREE.MathUtils.lerp(a[1], b[1], k),
        azimuth: THREE.MathUtils.lerp(a[2], b[2], k),
      };
    }
  }
  return { elevation: 17, azimuth: -52 };
}
function update(t, showcase, forceCamera = false) {
  if (showcase) {
    Object.assign(params, keyframes(t));
    syncUI();
  }
  const allEvents = showcase ? [...showcaseImpulses, ...events] : events;
  const motion = motionAt(t, allEvents);
  const elevation = THREE.MathUtils.degToRad(params.elevation),
    azimuth = THREE.MathUtils.degToRad(params.azimuth);
  sunDir
    .set(
      Math.sin(azimuth) * Math.cos(elevation),
      Math.max(0.045, Math.sin(elevation)),
      -Math.cos(azimuth) * Math.cos(elevation),
    )
    .normalize();
  sun.position.copy(sunDir).multiplyScalar(9);
  const daylight = THREE.MathUtils.smoothstep(params.elevation, -5, 18);
  const sunset = 1 - THREE.MathUtils.smoothstep(params.elevation, 5, 32);
  sun.color.setRGB(
    1,
    THREE.MathUtils.lerp(0.88, 0.47, sunset),
    THREE.MathUtils.lerp(0.7, 0.21, sunset),
  );
  sun.intensity = (5.3 + Math.max(0, Math.sin(elevation)) * 1.2) * daylight;
  ambient.intensity = 0.21 + daylight * 0.28;
  ambient.color.setRGB(0.78 + daylight * 0.15, 0.82 + daylight * 0.1, 1);
  bounce.intensity = 0.32 + daylight * 0.85;
  rimLight.intensity = 0.12 + daylight * 0.32;
  rimLight.color.copy(sun.color);
  room.skyMat.uniforms.warmth.value = sunset;
  fill.color.setRGB(
    0.68 + 0.32 * daylight,
    0.72 + 0.17 * daylight,
    1 - 0.21 * daylight,
  );
  renderer.toneMappingExposure = 0.98 + (1 - daylight) * 0.06;
  scene.environmentIntensity = 0.22 + daylight * 0.3;
  fill.intensity = 0.15 + daylight * 0.49;
  lightVector.value.copy(sunDir);
  lightPower.value = daylight;
  vase.update(t, motion, params.clarity);
  flowers.update(t, motion, params.breeze);
  room.update(t, params.breeze, daylight, sunDir, sun.color, sun.shadow);
  renderer.shadowMap.needsUpdate = true;
  renderer.setRenderTarget(shadowTarget);
  renderer.render(scene, shadowView);
  renderer.setRenderTarget(null);
  caustics.update(
    t,
    motion,
    sunDir,
    params.caustics * daylight,
    params.clarity,
    sun.color,
    sun.shadow,
  );
  if (forceCamera) {
    camera.position.copy(initialCamera);
    // Two gentle pushes follow the water impulses. The longer second shot
    // travels alongside the projected light, leaving room for the book and rim.
    const visit = (a, b, c, d) =>
      THREE.MathUtils.smoothstep(t, a, b) *
      (1 - THREE.MathUtils.smoothstep(t, c, d));
    const waterShot = visit(3.1, 8.2, 9.4, 14.0),
      prismShot = visit(15.0, 20.2, 22.2, 27.4);
    camera.position.x += 0.92 * Math.sin((t * Math.PI) / 15) - 0.76 * prismShot;
    camera.position.z -= 1.56 * waterShot + 2.45 * prismShot;
    camera.position.y -= 0.3 * waterShot + 0.49 * prismShot;
    controls.target.copy(target);
    controls.target.x += 0.17 * waterShot + 0.42 * prismShot;
    controls.target.z += 0.16 * waterShot + 0.33 * prismShot;
    controls.target.y -= 0.28 * waterShot + 0.62 * prismShot;
    camera.lookAt(controls.target);
  }
  if (!forceCamera) controls.update();
  roomBuffer.capture(scene, vase.group, flowers.cut);
  composer.render();
  const phase =
    params.elevation < 0
      ? "Twilight"
      : params.elevation < 12
        ? "Sunset"
        : params.elevation > 35
          ? "High noon"
          : t < 12 && params.azimuth < -30
            ? "Morning light"
            : "Afternoon light";
  document.querySelector("#phase").textContent = phase;
  document.querySelector(".timeline").hidden = !showcase;
  document.querySelector("#elapsed").textContent =
    "00:" + Math.floor(t).toString().padStart(2, "0");
  document.querySelector("#progress").style.width =
    Math.min(100, (t / 30) * 100) + "%";
  window.sceneState = {
    time: t,
    motion: { ...motion },
    sunElevation: params.elevation,
    sunAzimuth: params.azimuth,
    auto: showcase,
  };
}
window.TOTAL_DURATION = 30.0;
window.renderAt = (t) => {
  manualCapture = true;
  time = THREE.MathUtils.clamp(Number(t) || 0, 0, 30);
  events = [];
  params.caustics = 1.05;
  params.clarity = 0.92;
  params.breeze = 0.3;
  auto = true;
  autoInput.checked = true;
  update(time, true, true);
};
window.addEventListener("resize", () => {
  frameCamera();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
});
function frameCamera() {
  camera.aspect = innerWidth / innerHeight;
  camera.fov = innerWidth < 650 ? 48 : 38;
  const shift =
    innerWidth > 840 && !document.body.classList.contains("capture")
      ? 0.064
      : 0;
  camera.setViewOffset(
    innerWidth,
    innerHeight,
    innerWidth * shift,
    0,
    innerWidth,
    innerHeight,
  );
  camera.updateProjectionMatrix();
}
if (new URLSearchParams(location.search).has("film"))
  document.body.classList.add("capture");
frameCamera();
syncUI();
update(0, true, true);
function animate(now) {
  requestAnimationFrame(animate);
  if (manualCapture) return;
  const dt = THREE.MathUtils.clamp((now - last) / 1000, 0, 0.5);
  last = now;
  time += dt;
  if (auto && time > 30) {
    time %= 30;
    events = [];
  }
  events = events.filter((e) => time - e.time < 15);
  update(time, auto, auto);
}
requestAnimationFrame(animate);

const panelToggle = document.getElementById("panel-toggle"),
  controlList = document.getElementById("controls");
function expandPanel(expanded) {
  panelToggle.setAttribute("aria-expanded", String(expanded));
  controlList.hidden = !expanded;
}
expandPanel(innerWidth > 650);
panelToggle.addEventListener("click", () => expandPanel(controlList.hidden));
const focusButton = document.getElementById("focus-view");
function toggleFocus() {
  const active = document.body.classList.toggle("focus");
  focusButton.setAttribute("aria-pressed", String(active));
}
focusButton.addEventListener("click", toggleFocus);
addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h" && !e.ctrlKey && !e.metaKey && !e.altKey)
    toggleFocus();
});
