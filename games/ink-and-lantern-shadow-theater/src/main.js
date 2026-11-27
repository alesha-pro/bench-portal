import { Film } from './film.js';
const DURATION = 45.0;
const theater = document.querySelector('.theater'),
  canvas = theater.querySelector('canvas');
const playback = document.querySelector('#play'),
  timeline = document.querySelector('#timeline'),
  warmth = document.querySelector('#warmth');
const hud = document.querySelector('.transport'),
  clock = document.querySelector('#time');
const film = new Film(canvas);
let time = 0,
  playing = true,
  last = performance.now(),
  request = 0;
function render() {
  film.render(time, Number(warmth.value) / 100);
  timeline.value = time;
  timeline.style.setProperty('--fill', (time * 100) / DURATION + '%');
  clock.value = '0:' + String(Math.floor(time)).padStart(2, '0');
}
function resize() {
  const box = canvas.getBoundingClientRect(),
    ratio = Math.min(2, window.devicePixelRatio || 1);
  film.resize(Math.max(1, Math.round(box.width * ratio)), Math.max(1, Math.round(box.height * ratio)));
  render();
}
function tick(now) {
  if (!playing) return;
  time = (time + Math.max(0, now - last) / 1000) % DURATION;
  last = now;
  render();
  request = requestAnimationFrame(tick);
}
function setPlaying(value) {
  cancelAnimationFrame(request);
  playing = value;
  last = performance.now();
  playback.classList.toggle('paused', !value);
  playback.setAttribute('aria-label', value ? 'Pause' : 'Play');
  if (value) request = requestAnimationFrame(tick);
}
function seek(value) {
  setPlaying(false);
  time = ((Number(value) % DURATION) + DURATION) % DURATION;
  render();
}
function toggleHud() {
  hud.hidden = !hud.hidden;
}
playback.addEventListener('click', () => setPlaying(!playing));
timeline.addEventListener('input', () => seek(Math.min(DURATION - 1 / 100, Number(timeline.value))));
warmth.addEventListener('input', () => {
  warmth.style.setProperty('--fill', warmth.value + '%');
  render();
});
document.querySelector('#hide').addEventListener('click', toggleHud);
canvas.addEventListener('click', () => {
  if (hud.hidden) toggleHud();
  else setPlaying(!playing);
});
window.addEventListener('keydown', (e) => {
  if (e.altKey || e.metaKey || e.ctrlKey) return;
  if (e.key.toLowerCase() === 'h') {
    e.preventDefault();
    toggleHud();
  }
  if (e.code === 'Space' && e.target.tagName !== 'BUTTON') {
    e.preventDefault();
    setPlaying(!playing);
  }
});
window.addEventListener('resize', resize);
document.addEventListener('visibilitychange', () => {
  last = performance.now();
});
resize();
window.TOTAL_DURATION = DURATION;
window.renderAt = seek;
setPlaying(!new URLSearchParams(location.search).has('render'));
