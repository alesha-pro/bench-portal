import { createRenderer } from './renderer.js';
import { TOTAL_DURATION, manual, flight, instrument } from './timeline.mjs';

const $ = (id) => document.getElementById(id);
const icons = {
  scope:
    '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>',
  book: '<path d="M3 5.5c3-1.2 6-.7 9 1.3 3-2 6-2.5 9-1.3v13c-3-1.1-6-.6-9 1.3-3-1.9-6-2.4-9-1.3zM12 7v13"/>',
  sliders:
    '<path d="M3 6h5m5 0h8M3 12h11m5 0h2M3 18h3m5 0h10"/><circle cx="10.5" cy="6" r="2.2"/><circle cx="16.5" cy="12" r="2.2"/><circle cx="8.5" cy="18" r="2.2"/>',
  reset: '<path d="M4 6v5h5M4.8 10a7.5 7.5 0 1 1 .4 6"/>',
  focus: '<path d="M3 9V4h5m8 0h5v5M3 15v5h5m8 0h5v-5"/><circle cx="12" cy="12" r="3.4"/>',
  expand: '<path d="M4 9V4h5m6 0h5v5M4 15v5h5m6 0h5v-5"/>',
  flare:
    '<path d="m4 19 5-5m-6 1 4-4m5 6-3 4"/><circle cx="14.7" cy="8.7" r="4.1"/><path d="m18 5 2-2"/>',
  play: '<path d="m7 4 12 8-12 8z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M7 5h3v14H7zm7 0h3v14h-3z" fill="currentColor" stroke="none"/>',
  mouse: '<rect x="6.5" y="2.5" width="11" height="19" rx="5.5"/><path d="M12 5v4"/>',
  close: '<path d="m5 5 14 14M19 5 5 19"/>',
};
function glyph(name) {
  return (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    icons[name] +
    '</svg>'
  );
}
document
  .querySelectorAll('[data-icon]')
  .forEach((el) => el.insertAdjacentHTML('afterbegin', glyph(el.dataset.icon)));
const params = new URLSearchParams(location.search);
const capture = params.has('capture');
if (params.has('film')) document.body.classList.add('film');
const canvas = $('space'),
  viewport = $('viewport');
const state = { ...manual };
let renderer,
  liveTime = 0,
  eventStart = null,
  elapsed = 0,
  playing = false,
  inFlight = false;
let last = performance.now(),
  scene,
  annotations = true,
  frozen = capture;
function setRange(el, value) {
  el.value = value;
  el.style.setProperty('--percent', (100 * (el.value - el.min)) / (el.max - el.min) + '%');
}
function refreshControls() {
  for (const key of ['mass', 'lens', 'azimuth', 'inclination']) {
    const value =
      inFlight && ['azimuth', 'inclination'].includes(key)
        ? (scene[key] * 180) / Math.PI
        : state[key];
    setRange($(key), value);
    $(key + '-out').value =
      key === 'mass' || key === 'lens' ? value.toFixed(2) + ' ×' : Math.round(value) + '°';
  }
  $('doppler').checked = !!state.doppler;
}
function setPlay(on) {
  playing = on;
  $('play').innerHTML = glyph(on ? 'pause' : 'play');
  $('play').setAttribute('aria-pressed', String(on));
  $('play').setAttribute('aria-label', (on ? 'Pause' : 'Play') + ' auto showcase');
}
function paint() {
  const w = viewport.clientWidth,
    h = viewport.clientHeight;
  const dpr = capture
    ? params.has('film')
      ? 2
      : 1
    : Math.min(window.devicePixelRatio || 1, 1.65, Math.sqrt(2200000 / (w * h)));
  renderer.size(Math.max(1, Math.round(w * dpr)), Math.max(1, Math.round(h * dpr)));
  scene = inFlight
    ? flight(elapsed)
    : instrument(liveTime, state, eventStart === null ? null : liveTime - eventStart);
  if (inFlight)
    Object.assign(scene, { mass: state.mass, lens: state.lens, doppler: state.doppler });
  // Keep the disk and orbiting probe in frame on portrait viewports.
  scene.fov *= Math.max(1, Math.min(1.85, (1.52 * h) / w));
  renderer.render(scene);
  refreshControls();
  setRange($('seek'), elapsed);
  $('time').innerHTML =
    '00:' + String(Math.floor(elapsed)).padStart(2, '0') + ' <span>/ 00:30</span>';
  $('event-status').value =
    scene.plunge < 0.012
      ? 'Star in orbit'
      : scene.plunge > 0.96
        ? 'Debris accreted'
        : 'Tidal disruption active';
  $('view-name').textContent = inFlight
    ? scene.inclination < 0.7
      ? 'Polar approach'
      : scene.inclination > 1.39
        ? 'Equatorial transit'
        : 'Orbital descent'
    : 'Orbital camera';
  const r = 29 / scene.mass;
  const sinPsi = (2.598076 * scene.lens * Math.sqrt(1 - scene.lens / r)) / r;
  const radius = (h * 0.5 * sinPsi) / Math.sqrt(1 - sinPsi * sinPsi) / scene.fov;
  $('mark').style.left = w * 0.5 + 0.56 * radius + 'px';
  $('mark').style.top = h * 0.5 - 0.83 * radius + 'px';
  $('scale-bar').style.width = (h * 2.5) / r / scene.fov + 'px';
}
function temporalSeek(t) {
  inFlight = true;
  elapsed = Math.max(0, Math.min(30, Number(t) || 0));
  setPlay(false);
  paint();
}
function manualMode() {
  if (inFlight) {
    Object.assign(state, {
      azimuth: (scene.azimuth * 180) / Math.PI,
      inclination: (scene.inclination * 180) / Math.PI,
    });
    liveTime = elapsed;
    // Preserve disruption age when the observer takes the camera.
    const progress = Math.max(0, Math.min(1, (elapsed - 6) / 22));
    eventStart = progress > 0 ? liveTime - progress * 14 : null;
  }
  inFlight = false;
  frozen = false;
  setPlay(false);
  last = performance.now();
}
for (const key of ['mass', 'lens', 'azimuth', 'inclination', 'doppler']) {
  $(key).addEventListener('input', () => {
    const value = key === 'doppler' ? Number($(key).checked) : Number($(key).value);
    manualMode();
    state[key] = value;
    paint();
  });
}
$('trigger').onclick = () => {
  manualMode();
  eventStart = liveTime;
  paint();
};
$('reset').onclick = () => {
  manualMode();
  Object.assign(state, manual);
  liveTime = 0;
  eventStart = null;
  elapsed = 0;
  paint();
};
$('play').onclick = () => {
  if (playing) {
    setPlay(false);
    return;
  }
  if (!inFlight || elapsed >= TOTAL_DURATION) elapsed = 0;
  inFlight = true;
  frozen = false;
  last = performance.now();
  setPlay(true);
  paint();
};
$('seek').oninput = () => {
  frozen = false;
  temporalSeek($('seek').value);
};
$('annotate').onclick = () => {
  annotations = !annotations;
  $('mark').classList.toggle('hidden', !annotations);
  $('annotate').setAttribute('aria-pressed', String(annotations));
};
$('expand').onclick = async () => {
  const el = document.querySelector('.observation');
  if (el.classList.contains('expanded')) el.classList.remove('expanded');
  else if (document.fullscreenElement) await document.exitFullscreen();
  else if (el.requestFullscreen)
    await el.requestFullscreen().catch(() => el.classList.toggle('expanded'));
  else el.classList.toggle('expanded');
};
document.addEventListener('fullscreenchange', () => requestAnimationFrame(paint));
$('notes').onclick = () => $('field-notes').showModal();
$('close-notes').onclick = () => $('field-notes').close();
$('nav-view').onclick = () => {
  if ($('field-notes').open) $('field-notes').close();
  canvas.focus();
};
$('field-notes').addEventListener('click', (e) => {
  if (e.target === $('field-notes')) {
    const r = e.target.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      e.target.close();
  }
});
let drag;
canvas.tabIndex = 0;
canvas.onpointerdown = (e) => {
  manualMode();
  drag = [e.clientX, e.clientY, state.azimuth, state.inclination];
  canvas.setPointerCapture(e.pointerId);
};
canvas.onpointermove = (e) => {
  if (!drag) return;
  state.azimuth = ((drag[2] - (e.clientX - drag[0]) * 0.32 + 540) % 360) - 180;
  state.inclination = Math.max(0.5, Math.min(89.5, drag[3] + (e.clientY - drag[1]) * 0.22));
  paint();
};
canvas.onlostpointercapture = () => {
  drag = null;
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelector('.observation').classList.remove('expanded');
});
document.addEventListener('visibilitychange', () => {
  last = performance.now();
});
function animate(now) {
  const dt = Math.max(0, (now - last) * 0.001);
  last = now;
  if (!frozen && !document.hidden && (!inFlight || playing)) {
    if (playing) {
      elapsed = Math.min(TOTAL_DURATION, elapsed + dt);
      if (elapsed >= TOTAL_DURATION) setPlay(false);
    } else liveTime += dt;
    paint();
  }
  requestAnimationFrame(animate);
}
try {
  renderer = await createRenderer(canvas);
  if (params.has('film')) inFlight = true;
  paint();
  $('loading').classList.add('hidden');
  await document.fonts.ready;
  window.TOTAL_DURATION = TOTAL_DURATION;
  window.renderAt = (t) => {
    Object.assign(state, manual);
    frozen = true;
    temporalSeek(t);
  };
  window.inspectRadiance = renderer.inspect;
  new ResizeObserver(() => paint()).observe(viewport);
  requestAnimationFrame(animate);
} catch (error) {
  $('loading').textContent = error.message;
  console.error(error);
  throw error;
}
