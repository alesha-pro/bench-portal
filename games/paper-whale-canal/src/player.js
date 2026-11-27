import { makeFilm, DURATION } from './film.js';
const cinema = document.querySelector('.cinema'),
  canvas = document.querySelector('canvas');
const slider = document.querySelector('.timeline'),
  btn = document.querySelector('.toggle'),
  clock = document.querySelector('#elapsed');
const width = Math.min(2560, Math.max(640, Math.round((canvas.clientWidth * devicePixelRatio) / 16) * 16));
canvas.width = width;
canvas.height = (width * 9) / 16;
const paint = makeFilm(canvas);
let current = 0,
  playing = true,
  epoch = performance.now(),
  last = -1,
  timer;
function display(t) {
  current = t;
  paint(t);
  slider.value = t;
  slider.style.setProperty('--pct', (100 * t) / DURATION + '%');
  clock.textContent = '0:' + String(Math.floor(t)).padStart(2, '0');
}
function state(on) {
  playing = on;
  epoch = performance.now() - current * 1000;
  cinema.classList.toggle('paused', !on);
  btn.setAttribute('aria-label', on ? 'Pause' : 'Play');
  if (!on) cinema.classList.remove('ui-idle');
}
function wake() {
  clearTimeout(timer);
  cinema.classList.remove('ui-idle');
  if (playing) timer = setTimeout(() => cinema.classList.add('ui-idle'), 2200);
}
function toggle() {
  state(!playing);
  wake();
}
function hide() {
  cinema.classList.toggle('ui-hidden');
  if (!cinema.classList.contains('ui-hidden')) wake();
}
btn.addEventListener('click', toggle);
canvas.addEventListener('click', toggle);
document.querySelector('.hide').addEventListener('click', hide);
slider.addEventListener('input', () => {
  state(false);
  display(Number(slider.value));
});
document.addEventListener('pointermove', wake);
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'h') {
    e.preventDefault();
    hide();
  }
  if (e.code === 'Space' && !e.repeat) {
    e.preventDefault();
    toggle();
  }
});
window.TOTAL_DURATION = DURATION;
window.renderAt = (t) => {
  if (!Number.isFinite(t)) throw new TypeError('A finite time in seconds is required');
  state(false);
  display(t === DURATION ? t : ((t % DURATION) + DURATION) % DURATION);
};
function frame(now) {
  if (playing) {
    const t = ((now - epoch) / 1000) % DURATION,
      idx = Math.floor(t * 30);
    if (last !== idx) {
      display(t);
      last = idx;
    }
  }
  requestAnimationFrame(frame);
}
display(0);
epoch = performance.now();
wake();
requestAnimationFrame(frame);
