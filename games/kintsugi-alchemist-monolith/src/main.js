import * as T from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  TAU,
  clamp,
  smooth,
  studioEnvironment,
  radialMap,
  LOCK,
  amountAt,
  phaseAt,
} from "./core.js";
import { buildRelic } from "./relic.js";
import { buildGarden } from "./garden.js";
import { buildWater } from "./water.js";

const $ = (q) => document.querySelector(q),
  params = new URLSearchParams(location.search);
const film = params.has("film"),
  capture = params.has("capture");
if (film) document.body.classList.add("film");
async function initialize() {
  const stage = $("#stage"),
    canvas = $("#sanctuary");
  const renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    preserveDrawingBuffer: capture,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.7));
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.96;
  const scene = new T.Scene();
  scene.background = new T.Color(0x183034);
  scene.fog = new T.FogExp2(0x233737, 0.025);
  const env = studioEnvironment(renderer);
  scene.environment = env.texture;
  scene.environmentIntensity = 0.66;
  const camera = new T.PerspectiveCamera(34, 1, 0.06, 115),
    controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.085;
  controls.enablePan = false;
  controls.minAzimuthAngle = -0.52;
  controls.maxAzimuthAngle = 0.52;
  controls.minPolarAngle = Math.PI * 0.36;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.minDistance = 5.9;
  controls.maxDistance = 13.8;
  controls.rotateSpeed = 0.59;
  const sky = new T.HemisphereLight(0xc7e3e8, 0x555448, 1.1);
  scene.add(sky);
  const moon = new T.DirectionalLight(0xd9e9ff, 2.18);
  moon.position.set(-5, 8, 2.9);
  scene.add(moon);
  const rim = new T.DirectionalLight(0xf2c68c, 1.3);
  rim.position.set(4, 3, -4);
  scene.add(rim);
  const silk = new T.DirectionalLight(0xe2e7db, 0.24);
  silk.position.set(2.6, 3, 6.5);
  scene.add(silk);
  const loader = new T.TextureLoader(),
    [painting, landscape, rock, banks] = await Promise.all(
      ["porcelain", "night-garden", "stone", "pine-bank"].map((name) =>
        loader.loadAsync("./assets/" + name + ".webp"),
      ),
    );
  const glow = radialMap(),
    garden = buildGarden(scene, landscape, glow, rock, banks),
    relic = buildRelic(scene, painting, glow);
  const water = buildWater(
    scene,
    stage.clientWidth,
    stage.clientHeight,
    garden.impacts,
  );
  const target = new T.WebGLRenderTarget(
    stage.clientWidth,
    stage.clientHeight,
    { type: T.HalfFloatType, samples: 4 },
  );
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new T.Vector2(stage.clientWidth, stage.clientHeight),
    0.27,
    0.32,
    0.99,
  );
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  let t = 0,
    localTime = 0,
    fracture = 0,
    balance = 0.55,
    mode = "idle",
    frozen = capture,
    manualTime = 0;
  let lastRAF = performance.now(),
    gustT = -100,
    lastShock = -100,
    wasWhole = true,
    repair = false,
    customCamera = false;
  const audio = $("#score");
  let sound = false;
  const anchor = new T.Vector3(),
    eye = new T.Vector3();
  function setCamera(time, amount) {
    const portrait = camera.aspect < 1.12;
    const widen = portrait ? Math.max(1, 1.09 / camera.aspect) : 1;
    const a =
      0.023 + 0.105 * Math.sin((TAU * time) / 30 - 0.22) + amount * 0.078;
    const d =
      (film ? 9.82 : 10.05) * widen +
      amount * 2.25 -
      0.25 * Math.sin((TAU * time) / 30);
    anchor.set(
      portrait ? -0.05 : -0.44,
      (film ? 1.12 : 1.15) + 0.64 * amount,
      0,
    );
    eye.set(
      anchor.x + d * Math.sin(a),
      (film ? 2.76 : 2.8) + 0.14 * Math.sin((time * TAU) / 30) + amount * 0.27,
      d * Math.cos(a),
    );
    camera.position.copy(eye);
    controls.target.copy(anchor);
    camera.lookAt(anchor);
    camera.updateMatrixWorld();
  }
  function updateReadouts() {
    const n = Math.round(fracture * 100);
    $("#fracture").value = n;
    $("#fracture-value").textContent = n + "%";
    $("#fracture").style.setProperty("--fill", n + "%");
    $("#balance-value").textContent = Math.round(balance * 100) + "%";
    $("#balance").style.setProperty("--fill", balance * 100 + "%");
    $("#time").textContent = "00:" + Math.floor(t).toString().padStart(2, "0");
    $("#timeline").value = t;
    $("#timeline").style.setProperty("--fill", (t / 30) * 100 + "%");
    $("#phase-name").textContent = ["show", "seek"].includes(mode)
      ? phaseAt(t)
      : fracture > 0.82
        ? "Constellation"
        : fracture > 0.005
          ? "Fracture"
          : repair
            ? "Restoration"
            : "Stillness";
  }
  function toggleLabel() {
    const on = mode === "show";
    $("#auto").setAttribute("aria-pressed", String(on));
    $("#auto").setAttribute(
      "aria-label",
      on ? "Pause auto showcase" : "Play 30-second auto showcase",
    );
    $("#auto").title = on
      ? "Pause auto showcase"
      : "Play 30-second auto showcase";
    $("#play-icon").setAttribute("href", on ? "#pause" : "#play");
  }
  function draw() {
    const show = mode === "show" || mode === "seek",
      time = show ? t : localTime;
    if (show) fracture = amountAt(t);
    if (!customCamera) setCamera(show ? t : 0, fracture);
    else controls.update();
    const shock = show ? t - LOCK : localTime - lastShock;
    sky.intensity = 0.47 - balance * 0.15;
    moon.intensity = 2.44 - balance * 1.12;
    rim.intensity = 0.65 + balance * 1.48;
    scene.environmentIntensity = 0.66 + balance * 0.06;
    const drops = relic.update(
      time,
      fracture,
      balance,
      shock,
      show ? t >= LOCK : repair,
      show,
    );
    water.update(time, balance, show, shock, drops);
    garden.update(
      time,
      Math.exp(-Math.max(0, time - gustT) * 1.4) * (time >= gustT ? 0.62 : 0),
      water.heightAt,
    );
    composer.render();
    updateReadouts();
  }
  function resize() {
    const w = stage.clientWidth,
      h = stage.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    water.mesh.getRenderTarget().setSize(Math.max(256, w), Math.max(192, h));
    draw();
  }
  const ray = new T.Raycaster(),
    plane = new T.Plane(new T.Vector3(0, 1, 0), 0),
    hit = new T.Vector3();
  let press = null;
  canvas.addEventListener("pointerdown", (e) => {
    press = [e.clientX, e.clientY];
  });
  canvas.addEventListener("pointermove", (e) => {
    if (press && Math.hypot(e.clientX - press[0], e.clientY - press[1]) > 4) {
      customCamera = true;
      frozen = false;
    }
  });
  canvas.addEventListener(
    "wheel",
    () => {
      customCamera = true;
      frozen = false;
    },
    { passive: true },
  );
  canvas.addEventListener("pointerup", (e) => {
    if (!press) return;
    const travel = Math.hypot(e.clientX - press[0], e.clientY - press[1]);
    press = null;
    if (travel > 5) return;
    const box = canvas.getBoundingClientRect();
    ray.setFromCamera(
      {
        x: (2 * (e.clientX - box.left)) / box.width - 1,
        y: 1 - (2 * (e.clientY - box.top)) / box.height,
      },
      camera,
    );
    if (
      ray.ray.intersectPlane(plane, hit) &&
      hit.z > -6.65 &&
      hit.z < 7.5 &&
      Math.abs(hit.x) < 7.7
    ) {
      frozen = false;
      if (mode === "seek") {
        manualTime = t;
        localTime = t;
        mode = "manual";
        draw();
      }
      gustT = mode === "show" ? t : localTime;
      water.click(hit.x, hit.z);
    }
  });
  canvas.addEventListener("pointercancel", () => {
    press = null;
  });
  function exact(time, resetLight = true) {
    const next = clamp(Number(time) || 0, 0, 30);
    frozen = true;
    sound && audio.pause();
    // Reset interaction history when entering the deterministic export path.
    if (mode !== "seek" || customCamera) {
      water.clear();
      controls.reset();
    }
    mode = "seek";
    t = next;
    localTime = next;
    customCamera = false;
    gustT = -100;
    if (resetLight) {
      balance = 0.55;
      $("#balance").value = 55;
    }
    toggleLabel();
    draw();
  }
  $("#auto").onclick = () => {
    if (mode === "show") {
      mode = "seek";
      frozen = true;
      if (sound) audio.pause();
    } else {
      mode = "show";
      if (t >= 29.999) t = 0;
      frozen = false;
      customCamera = false;
      water.clear();
      gustT = -100;
      if (sound) {
        audio.currentTime = t;
        audio.play().catch(() => {});
      }
    }
    toggleLabel();
    draw();
  };
  $("#timeline").oninput = (e) => {
    const playing = mode === "show";
    exact(+e.target.value, false);
    if (playing) {
      mode = "show";
      frozen = false;
      toggleLabel();
    }
    if (sound) {
      audio.currentTime = t;
      if (playing) audio.play().catch(() => {});
    }
  };
  $("#fracture").oninput = (e) => {
    const f = +e.target.value / 100;
    if (mode !== "manual") {
      localTime = ["show", "seek"].includes(mode) ? t : localTime;
      mode = "manual";
      water.clear();
      draw();
    }
    frozen = false;
    if (f > 0.12) {
      wasWhole = false;
      repair = false;
    }
    if (!wasWhole && f < 0.008) {
      lastShock = localTime;
      water.click(0.12, 0, 0.36, 0.37);
      wasWhole = true;
      repair = true;
    }
    fracture = f;
    toggleLabel();
    draw();
  };
  $("#balance").oninput = (e) => {
    balance = e.target.value / 100;
    draw();
  };
  $("#pulse").onclick = () => {
    mode = "pulse";
    manualTime = localTime;
    lastShock = -100;
    repair = false;
    frozen = false;
    customCamera = false;
    water.clear();
    toggleLabel();
    draw();
  };
  $("#notes").onclick = () => $("#notes-dialog").showModal();
  $("#close-notes").onclick = () => $("#notes-dialog").close();
  $("#notes-dialog").addEventListener("click", (e) => {
    if (e.target === $("#notes-dialog")) {
      const b = e.target.getBoundingClientRect();
      if (
        e.clientX < b.left ||
        e.clientY < b.top ||
        e.clientX > b.right ||
        e.clientY > b.bottom
      )
        e.target.close();
    }
  });
  $("#sound-toggle").onclick = async () => {
    if (sound) {
      audio.pause();
      sound = false;
    } else {
      audio.currentTime =
        mode === "show" || mode === "seek" ? t : localTime % 30;
      try {
        await audio.play();
        sound = true;
      } catch {
        sound = false;
      }
    }
    $("#sound-label").textContent = sound ? "Sound on" : "Sound off";
    $("#sound-toggle").setAttribute("aria-pressed", String(sound));
  };
  function cinema(on) {
    document.body.classList.toggle("cinema", on);
    resize();
  }
  $("#expand-view").onclick = async () => {
    cinema(true);
    try {
      await document.documentElement.requestFullscreen();
    } catch {}
  };
  $("#leave-cinema").onclick = () => {
    cinema(false);
    if (document.fullscreenElement) document.exitFullscreen();
  };
  document.addEventListener("fullscreenchange", () =>
    cinema(!!document.fullscreenElement),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("cinema"))
      cinema(false);
  });
  function frame(now) {
    const dt = (now - lastRAF) / 1000;
    lastRAF = now;
    if (!frozen) {
      if (mode === "show") {
        t += dt;
        if (t >= 30) {
          t = 30;
          mode = "seek";
          frozen = true;
          toggleLabel();
          if (sound) audio.pause();
        }
      } else if (mode !== "seek") {
        localTime += Math.min(dt, 0.4);
        if (mode === "pulse") {
          const age = localTime - manualTime;
          fracture = smooth(0, 2.1, age) * (1 - smooth(3.6, 6.1, age));
          if (age >= 6.1) {
            mode = "manual";
            lastShock = localTime;
            water.click(0.12, 0, 0.36, 0.37);
            repair = true;
            wasWhole = true;
          }
        }
      }
      draw();
    }
    requestAnimationFrame(frame);
  }
  resize();
  new ResizeObserver(resize).observe(stage);
  $("#load").hidden = true;
  await document.fonts.ready;
  window.TOTAL_DURATION = 30.0;
  window.renderAt = exact;
  if (capture) exact(0);
  requestAnimationFrame(frame);
}
initialize().catch((err) => {
  $("#load").textContent = "The courtyard could not open. WebGL2 is required.";
  console.error(err);
});
