import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { V, textures } from './common.js';
import { celestial } from './star.js';
import { collectors } from './swarm.js';
import { buildStation } from './station.js';
import { createPost } from './post.js';
import { openingTitle } from './titles.js';

const $ = (s) => document.querySelector(s);
const args = new URLSearchParams(location.search),
  capture = args.has('capture'),
  film = args.has('film');
if (film) document.body.classList.add('film');
window.TOTAL_DURATION = 30.0;
async function init() {
  const canvas = $('#space'),
    renderer = new T.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      preserveDrawingBuffer: capture,
      powerPreference: 'high-performance',
    });
  if (!renderer.capabilities.isWebGL2) throw Error('This observatory requires WebGL2.');
  renderer.outputColorSpace = T.LinearSRGBColorSpace;
  const title = film ? openingTitle(renderer) : null;
  const scene = new T.Scene(),
    camera = new T.PerspectiveCamera(46, 1, 0.15, 760);
  const orbit = new OrbitControls(camera, canvas);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.085;
  orbit.minDistance = 9;
  orbit.maxDistance = 118;
  orbit.enablePan = false;
  const maps = await textures(renderer),
    post = createPost(renderer);
  const time = { value: 0 },
    flare = { value: 0.68 },
    surge = { value: 0 },
    completion = { value: 0.74 };
  const sky = celestial(scene, maps, time, flare),
    swarm = collectors(scene, time, completion, maps),
    station = buildStation(scene, maps, time, surge);
  const clock = $('#clock'),
    timeline = $('#timeline'),
    showcase = $('#showcase'),
    surgeButton = $('#surge');
  const audio = new Audio('./assets/heliograph.m4a');
  audio.preload = 'none';
  audio.loop = true;
  let sound = false,
    auto = false,
    elapsed = 0,
    playhead = 0,
    burst = -10,
    held = false,
    lastTime = 0;
  const factor = new T.Vector2();
  const presets = {
    macro: { eye: [7.5, 6.55, 35.0], target: [-0.6, 0.16, 2.4], fov: 46 },
    ship: { eye: [6.2, 2.97, 23.4], target: [2.2, 0.72, 11.2], fov: 53 },
    wide: { eye: [-20.0, 15.3, 54.5], target: [0, 0.25, 0], fov: 46 },
  };
  const eyes = new T.CatmullRomCurve3(
    [
      [9.85, 2.72, 21.9],
      [6.35, 2.92, 22.32],
      [0.2, 4.08, 25.0],
      [-5.65, 5.48, 26.5],
      [-10.5, 7.3, 30.2],
      [-14.8, 9.9, 37.8],
      [-18.2, 13.2, 48.2],
      [-20.4, 16.1, 55.5],
    ].map((x) => V(...x)),
    false,
    'centripetal',
  );
  const aims = new T.CatmullRomCurve3(
    [
      [2.7, 0.86, 15.1],
      [1.65, 0.8, 11.8],
      [0.55, 0.6, 5.6],
      [-0.1, 0.55, 3.0],
      [-0.35, 0.4, 1.2],
      [-0.25, 0.34, 0.32],
      [0, 0.26, 0.05],
      [0, 0.24, 0],
    ].map((x) => V(...x)),
    false,
    'centripetal',
  );
  function frameShift() {
    const w = innerWidth,
      h = innerHeight;
    if (!film && w > 700) camera.setViewOffset(w, h, 0.105 * w, -0.018 * h, w, h);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  }
  function pose(eye, target, fov) {
    camera.position.copy(eye);
    orbit.target.copy(target);
    camera.fov = fov;
    camera.up.set(0, 1, 0);
    camera.lookAt(target);
    frameShift();
  }
  function path(t) {
    const f = T.MathUtils.clamp(t / 30, 0, 1),
      tail = T.MathUtils.clamp((f - 0.81) / 0.19, 0, 1);
    const u = f + 0.19 * tail * tail * (1 - tail),
      s = u * u * (3 - 2 * u);
    pose(eyes.getPoint(u), aims.getPoint(u), 53 - 7 * s);
  }
  function setPreset(name) {
    held = false;
    const p = presets[name];
    pose(V(...p.eye), V(...p.target), p.fov);
    for (const b of document.querySelectorAll('[data-mode]'))
      b.setAttribute('aria-pressed', String(b.dataset.mode === name));
  }
  function clearPreset() {
    held = false;
    for (const b of document.querySelectorAll('[data-mode]'))
      b.setAttribute('aria-pressed', 'false');
  }
  function paintSlider(el) {
    el.style.setProperty(
      '--fill',
      (100 * (Number(el.value) - Number(el.min))) / (Number(el.max) - Number(el.min)) + '%',
    );
  }
  function readout(t) {
    const sec = Math.floor(t);
    clock.textContent = '00:' + String(sec).padStart(2, '0');
    timeline.value = t;
    paintSlider(timeline);
  }
  function paint(t, director = false) {
    time.value = t;
    const flash = director ? Math.exp(-((t - 12.8) ** 2) / 1.9) : 0;
    surge.value = Math.max(flash, burst >= 0 ? Math.exp(-Math.max(0, elapsed - burst) * 1.1) : 0);
    sky(camera, canvas.height);
    swarm.animate(t);
    station.animate(t, canvas.height);
    post.render(scene, camera);
    if (title && director) title(t, camera.aspect);
    surgeButton.querySelector('span').textContent =
      elapsed - burst < 2.3 ? 'Surge active' : 'Power beam surge';
  }
  function drawShowcase(t) {
    const v = T.MathUtils.clamp(Number(t) || 0, 0, 30);
    playhead = v;
    path(v);
    readout(v);
    paint(v, true);
    for (const b of document.querySelectorAll('[data-mode]'))
      b.setAttribute(
        'aria-pressed',
        String(b.dataset.mode === (v < 8 ? 'ship' : v < 21 ? 'macro' : 'wide')),
      );
  }
  function setAuto(on) {
    if (auto && !on) {
      elapsed = playhead;
      burst = -10;
    }
    auto = on;
    showcase.setAttribute('aria-pressed', String(on));
    showcase.querySelector('use').setAttribute('href', on ? '#pause' : '#play');
    held = false;
    if (on) {
      clearPreset();
      if (playhead >= 30) playhead = 0;
      if (sound) audio.currentTime = playhead;
    }
  }
  function redraw() {
    if (auto || held) drawShowcase(playhead);
    else if (capture) paint(elapsed);
  }
  showcase.onclick = () => {
    setAuto(!auto);
    held = !auto;
    drawShowcase(playhead);
  };
  timeline.oninput = () => {
    clearPreset();
    held = !auto;
    drawShowcase(+timeline.value);
    if (sound) audio.currentTime = playhead;
  };
  for (const button of document.querySelectorAll('[data-mode]'))
    button.onclick = () => {
      setAuto(false);
      setPreset(button.dataset.mode);
      redraw();
    };
  orbit.addEventListener('start', () => {
    setAuto(false);
    clearPreset();
  });
  orbit.addEventListener('change', () => {
    if (capture) paint(elapsed);
  });
  function countCollectors() {
    $('#collectorCount').textContent =
      swarm.count(completion.value).toLocaleString('en-US') + ' collectors online';
  }
  countCollectors();
  for (const [id, uniform] of [
    ['completion', completion],
    ['activity', flare],
  ]) {
    const input = $('#' + id);
    paintSlider(input);
    input.oninput = () => {
      uniform.value = Number(input.value) / 100;
      $('#' + id + 'Val').value = input.value + '%';
      input.setAttribute('aria-valuetext', input.value + '%');
      paintSlider(input);
      if (id === 'completion') countCollectors();
      redraw();
    };
  }
  surgeButton.onclick = () => {
    if (held) {
      held = false;
      elapsed = playhead;
    }
    burst = elapsed;
    surgeButton.querySelector('span').textContent = 'Surge active';
    redraw();
  };
  $('#audio').onclick = async () => {
    const on = !sound;
    if (on) {
      audio.currentTime = auto ? playhead : elapsed % 30;
      await audio.play();
    } else audio.pause();
    sound = on;
    const btn = $('#audio');
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Mute soundtrack' : 'Enable soundtrack');
    btn.title = btn.getAttribute('aria-label');
    btn.querySelector('use').setAttribute('href', on ? '#sound' : '#mute');
  };
  $('#fullscreen').onclick = async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  };
  function foldDeck(fold) {
    $('#deck').classList.toggle('fold', fold);
    $('#fold').setAttribute('aria-expanded', String(!fold));
    $('#foldMark').textContent = fold ? '+' : '−';
  }
  $('#fold').onclick = () => foldDeck(!$('#deck').classList.contains('fold'));
  foldDeck(innerWidth <= 700 || innerHeight <= 410);
  function resize() {
    renderer.setPixelRatio(capture ? 1 : Math.min(devicePixelRatio, 1.6));
    renderer.setSize(innerWidth, innerHeight, false);
    renderer.getDrawingBufferSize(factor);
    post.resize(factor.x, factor.y);
    camera.aspect = innerWidth / innerHeight;
    frameShift();
  }
  window.addEventListener('resize', () => {
    resize();
    if (auto || held) drawShowcase(playhead);
    else paint(elapsed);
  });
  resize();
  setPreset('macro');
  readout(0);
  paint(0);
  $('#loading').hidden = true;
  window.renderAt = (t) => {
    setAuto(false);
    burst = -10;
    held = true;
    drawShowcase(t);
  };
  // The capture harness advances exclusively by absolute time, including reverse seeks.
  if (!capture) {
    if (film) setAuto(true);
    document.addEventListener('visibilitychange', () => {
      lastTime = 0;
    });
    function tick(ms) {
      const dt = lastTime ? (ms - lastTime) / 1000 : 0;
      lastTime = ms;
      elapsed += dt;
      if (auto) {
        playhead = (playhead + dt) % 30;
        drawShowcase(playhead);
      } else if (!held) {
        orbit.update();
        paint(elapsed);
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
}
init().catch((error) => {
  $('#loading').textContent = error.message;
  console.error(error);
});
