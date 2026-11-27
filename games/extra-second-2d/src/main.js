import { Film } from './film.js';
import { DURATION } from './timeline.js';
const canvas = document.querySelector('#film');
const film = new Film(canvas);
const play = document.querySelector('#play'),
  icon = document.querySelector('#play-icon'),
  slider = document.querySelector('#timeline'),
  elapsed = document.querySelector('#elapsed');
const params = new URLSearchParams(location.search);
let paused = params.has('capture'),
  time = 0,
  raf = 0,
  last = performance.now();
window.TOTAL_DURATION = DURATION;
function hud() {
  slider.value = time;
  elapsed.textContent = `00:${Math.floor(time).toString().padStart(2, '0')}`;
  icon.textContent = paused ? '▶' : 'Ⅱ';
  play.setAttribute('aria-label', paused ? 'Play film' : 'Pause film');
  slider.style.background = `linear-gradient(to right,#efd19d ${(time / 45) * 100}%,#e7c99540 ${(time / 45) * 100}%)`;
}
function draw(t) {
  time = (((Number(t) || 0) % DURATION) + DURATION) % DURATION;
  film.render(time);
  hud();
}
function tick(now) {
  if (paused) return;
  const dt = (now - last) / 1000;
  last = now;
  draw(time + dt);
  raf = requestAnimationFrame(tick);
}
function pause() {
  paused = true;
  cancelAnimationFrame(raf);
  hud();
}
function resume() {
  if (!paused) return;
  paused = false;
  last = performance.now();
  hud();
  raf = requestAnimationFrame(tick);
}
// Public offline rendering contract: pure absolute time, cancel playback first.
window.renderAt = (t) => {
  pause();
  draw(t);
  return { time, duration: DURATION, width: canvas.width, height: canvas.height };
};
window.setFilmHUD = (visible) => document.body.classList.toggle('hud-hidden', !visible);
window.setFilmPlaying = (playing) => (playing ? resume() : pause());
play.addEventListener('click', () => (paused ? resume() : pause()));
slider.addEventListener('input', () => window.renderAt(Number(slider.value)));
document.querySelector('#hide').addEventListener('click', () => window.setFilmHUD(false));
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'h') document.body.classList.toggle('hud-hidden');
  if (e.code === 'Space' && e.target !== slider) {
    e.preventDefault();
    paused ? resume() : pause();
  }
  if (e.key === 'ArrowRight' && e.target !== slider) {
    e.preventDefault();
    window.renderAt(time + 1);
  }
  if (e.key === 'ArrowLeft' && e.target !== slider) {
    e.preventDefault();
    window.renderAt(time - 1);
  }
});
canvas.addEventListener('click', () => (paused ? resume() : pause()));
if (params.get('hud') === '0' || params.has('capture')) window.setFilmHUD(false);
draw(0);
if (!paused) raf = requestAnimationFrame(tick);
