import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildTemple } from './temple.js';
import { makePipeline } from './materials.js';
import { landscape } from './pixel-art.js';

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search),
  film = params.has('film'),
  capture = params.has('capture');
document.documentElement.classList.toggle('film', film);
const icons = {
  film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 10h4m-4 4h4m10-4h4m-4 4h4"/>',
  volumeOff: '<path d="M11 5 6 9H3v6h3l5 4zm5 5 5 5m0-5-5 5"/>',
  volume: '<path d="M11 5 6 9H3v6h3l5 4zm4 3a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  sliders: '<path d="M3 6h7m4 0h7M3 12h12m4 0h2M3 18h3m4 0h11"/><path d="M10 3v6m5 0v6M7 15v6"/>',
  expand: '<path d="M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6"/>',
  pause: '<path fill="currentColor" stroke="none" d="M5 3h5v18H5zm9 0h5v18h-5z"/>',
  play: '<path fill="currentColor" stroke="none" d="m6 3 15 9-15 9z"/>',
  reset: '<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>',
  orbit:
    '<ellipse cx="12" cy="12" rx="11" ry="5.5" transform="rotate(-28 12 12)"/><circle cx="12" cy="12" r="2"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  rain: '<path d="M6 15a4 4 0 1 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 0 1 0 9M8 16l-2 4m7-4-2 5m7-5-2 4"/>',
  close: '<path d="M5 5l14 14m0-14L5 19"/>',
};
function icon(type) {
  return (
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    icons[type] +
    '</svg>'
  );
}
document.querySelectorAll('[data-icon]').forEach((el) => {
  el.outerHTML = icon(el.dataset.icon);
});
function glyph(ctx, x, y, k, c) {
  const rows = [
    '      aa      ',
    '     abba     ',
    '     baab     ',
    '   abbbbbba   ',
    '   abaccaba   ',
    '  abbaccabba  ',
    '  abbbbbbbba  ',
    ' abbbaccabbba ',
    ' abbbaccabbba ',
    'abbbbaccabbbba',
    'aaaaaaaaaaaaaa',
  ];
  rows.forEach((row, j) =>
    [...row].forEach((a, i) => {
      if (a !== ' ') {
        ctx.fillStyle = c[a];
        ctx.fillRect(x + i * k, y + j * k, k, k);
      }
    }),
  );
}
const mark = $('#mark').getContext('2d');
mark.fillStyle = '#e4e6ce';
mark.fillRect(0, 0, 32, 32);
glyph(mark, 2, 6, 2, { a: '#29463d', b: '#658254', c: '#c6ad70' });
mark.fillStyle = '#ce9453';
mark.fillRect(24, 4, 4, 4);
const thumbnails = document.querySelectorAll('.preset canvas');
thumbnails.forEach((c, i) => {
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(landscape(i), 0, 0, 720, 340, 0, 0, 64, 40);
  const inks = [
    ['#32574b', '#799368', '#ccb97c'],
    ['#5b6046', '#ad995f', '#e8c47c'],
    ['#253745', '#526077', '#caa674'],
  ][i];
  glyph(ctx, 21, 15, 2, { a: inks[0], b: inks[1], c: inks[2] });
});

const canvas = $('#world'),
  renderer = new T.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    preserveDrawingBuffer: capture,
    powerPreference: 'high-performance',
  });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
const scene = new T.Scene(),
  camera = new T.OrthographicCamera(-12, 12, 6.75, -6.75, 0.1, 100);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.09;
controls.enablePan = false;
controls.minZoom = 0.68;
controls.maxZoom = 3.2;
controls.minPolarAngle = 0.32;
controls.maxPolarAngle = Math.PI * 0.48;
const sceneArt = buildTemple(scene),
  pipeline = makePipeline(renderer);
let auto = true,
  t = 0,
  worldTime = 0,
  mode = 1,
  wet = false,
  appliedMode = null;
const TAU = 2 * Math.PI;
let orbitMomentum = false;
function setCamera(angle, elev, height, x, y, z) {
  if (orbitMomentum) {
    controls.enableDamping = false;
    controls.update();
    controls.enableDamping = true;
    orbitMomentum = false;
  }
  camera.zoom = 6.75 / height;
  camera.updateProjectionMatrix();
  controls.target.set(x, y, z);
  camera.position.set(
    x + 30 * Math.sin(angle) * Math.cos(elev),
    y + 30 * Math.sin(elev),
    z + 30 * Math.cos(angle) * Math.cos(elev),
  );
  camera.lookAt(controls.target);
  controls.update();
}
function cameraTrack(sec) {
  const p = (sec / 30) * TAU;
  if (sec >= 8 && sec < 15) {
    const k = (sec - 8) / 7;
    setCamera(-0.46 + 0.17 * k, 0.37 - 0.04 * k, 4.14 - 0.23 * k, -0.3 + k * 0.55, 2.17, 0.9);
  } else if (sec >= 15 && sec < 22) {
    const k = (sec - 15) / 7;
    setCamera(0.2 + 0.22 * k, 0.24 + 0.05 * k, 3.7 + 0.14 * k, 0, 5.77 - 0.12 * k, -0.45);
  } else if (sec >= 22 && sec < 28) {
    const k = (sec - 22) / 6;
    setCamera(-0.26 - 0.13 * k, 0.34 + 0.035 * k, 7.26 + 0.15 * k, 0, 2.35, 0.03);
  } else {
    setCamera(
      0.4 + 0.22 * Math.sin(p),
      0.39 + 0.032 * Math.sin(p),
      7.53 - 0.14 * Math.sin(p),
      0,
      2.31,
      0.12,
    );
  }
}
function chooseMode(n) {
  mode = n;
  wet = n === 2;
  $('#rain').checked = wet;
  document.querySelectorAll('[data-mode]').forEach((el, i) => {
    el.classList.toggle('chosen', i === n);
    el.setAttribute('aria-pressed', i === n);
  });
}
function draw(track = false) {
  if (track) cameraTrack(t);
  const active = film ? (t >= 22 && t < 28 ? 2 : t >= 8 && t < 15 ? 0 : 1) : mode;
  if (active !== appliedMode) {
    sceneArt.atmosphere(active);
    appliedMode = active;
  }
  const rel = camera.position.clone().sub(controls.target);
  sceneArt.update(
    worldTime,
    Math.atan2(rel.x, rel.z),
    film ? active === 2 : wet,
    Math.atan2(rel.y, Math.hypot(rel.x, rel.z)),
  );
  pipeline.draw(scene, camera);
}
const stamp = (n) => '00:' + String(Math.min(30, Math.floor(n))).padStart(2, '0');
function timeUI() {
  $('#timeline').value = t;
  $('#timeline').style.setProperty('--pct', (t / 30) * 100 + '%');
  $('#time').innerHTML = stamp(t) + ' <b>/</b> 00:30';
}
function setAuto(value) {
  auto = value;
  $('#play').innerHTML = icon(value ? 'pause' : 'play');
  $('#play').setAttribute('aria-pressed', String(value));
  $('#play').setAttribute('aria-label', (value ? 'Pause' : 'Play') + ' auto showcase');
}
function resize() {
  const rect = canvas.getBoundingClientRect();
  renderer.setSize(
    Math.max(1, Math.round(rect.width * devicePixelRatio)),
    Math.max(1, Math.round(rect.height * devicePixelRatio)),
    false,
  );
  draw(auto);
}
controls.addEventListener('start', () => {
  orbitMomentum = true;
  setAuto(false);
});
controls.addEventListener('change', () => {
  if (capture && !auto && orbitMomentum) draw();
});
$('#play').onclick = () => {
  setAuto(!auto);
  if (auto) {
    if (audible) music.currentTime = t % 30;
    cameraTrack(t);
    draw();
  }
};
$('#reset').onclick = () => {
  t = worldTime = 0;
  if (audible) music.currentTime = 0;
  cameraTrack(0);
  timeUI();
  draw();
};
$('#timeline').oninput = (e) => {
  t = worldTime = Number(e.target.value);
  if (audible) music.currentTime = t % 30;
  timeUI();
  draw(true);
};
$('#bayer').oninput = (e) => {
  const v = Number(e.target.value);
  pipeline.material.uniforms.strength.value = v / 100;
  $('#amount').textContent = v + '%';
  e.target.style.setProperty('--pct', v + '%');
  draw();
};
$('#res').onchange = (e) => {
  pipeline.resize(Number(e.target.value));
  draw();
};
document.querySelectorAll('[data-mode]').forEach((el) => {
  el.onclick = () => {
    chooseMode(Number(el.dataset.mode));
    draw();
  };
});
$('#rain').onchange = (e) => {
  wet = e.target.checked;
  draw();
};
$('#full').onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await $('#housing').requestFullscreen();
};
document.addEventListener('fullscreenchange', () =>
  $('#full').setAttribute(
    'aria-label',
    document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen',
  ),
);

const music = $('#music'),
  movie = $('#movie'),
  dialog = $('#film-dialog');
let audible = false;
function soundUI() {
  $('#sound').innerHTML =
    icon(audible ? 'volume' : 'volumeOff') + '<span>Sound ' + (audible ? 'on' : 'off') + '</span>';
  $('#sound').setAttribute('aria-pressed', audible);
}
$('#sound').onclick = async () => {
  if (audible) {
    music.pause();
    audible = false;
  } else {
    music.currentTime = t % 30;
    await music.play();
    audible = true;
  }
  soundUI();
};
$('#film').onclick = () => {
  music.pause();
  dialog.showModal();
  if (!movie.getAttribute('src')) movie.src = './out/pixel-temple-1080p.mp4';
  movie.play().catch(() => {});
};
$('#explorer').onclick = () => {
  dialog.close();
  canvas.focus({ preventScroll: true });
};
$('#close-film').onclick = () => dialog.close();
dialog.onclick = (e) => {
  if (e.target === dialog) {
    const b = dialog.getBoundingClientRect();
    if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom)
      dialog.close();
  }
};
dialog.addEventListener('close', () => {
  movie.pause();
  if (audible)
    music.play().catch(() => {
      audible = false;
      soundUI();
    });
});

cameraTrack(0);
resize();
new ResizeObserver(resize).observe($('#viewport'));
window.TOTAL_DURATION = 30.0;
window.renderAt = (seconds) => {
  t = worldTime = Math.max(0, Math.min(30, Number(seconds) || 0));
  timeUI();
  draw(true);
};
window.templeFrameInfo = () => ({
  width: pipeline.raw.width,
  height: pipeline.raw.height,
  paletteWidth: pipeline.indexed.width,
  nearest: pipeline.indexed.texture.magFilter === T.NearestFilter,
  shadowMaps: scene.children.filter((x) => x.isLight && x.shadow?.map).length,
});
if (!capture) {
  let prev = performance.now();
  renderer.setAnimationLoop((now) => {
    const dt = Math.min(0.1, (now - prev) / 1000);
    prev = now;
    if (document.hidden || dialog.open) return;
    worldTime += dt;
    if (auto) {
      t = (t + dt) % 30;
      worldTime = t;
      timeUI();
    } else controls.update();
    draw(auto);
  });
}
