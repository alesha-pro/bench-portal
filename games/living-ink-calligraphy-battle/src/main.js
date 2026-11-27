import { DURATION, renderFilm } from "./film.js";
import { seal, line } from "./ink.js";
const film = document.querySelector("#film"),
  play = document.querySelector("#play"),
  seek = document.querySelector("#seek");
const opts = { wet: true, gold: true };
let t = 0,
  playing = false,
  poster = true,
  last = 0,
  raf = 0;
const clock = document.querySelector("#clock"),
  chapters = [...document.querySelectorAll("[data-time]")];
function draw() {
  opts.playing = playing;
  renderFilm(film, poster ? 11.68 : t, opts);
}
function hud() {
  seek.value = t;
  document.documentElement.style.setProperty("--progress", (100 * t) / 45 + "%");
  clock.textContent = "00:" + String(Math.floor(t)).padStart(2, "0");
  play.classList.toggle("playing", playing);
  play.setAttribute("aria-label", playing ? "Pause film" : "Play film");
  const current = chapters.filter((b) => +b.dataset.time <= t).at(-1);
  for (const b of chapters) {
    if (b === current) b.setAttribute("aria-current", "true");
    else b.removeAttribute("aria-current");
  }
}
let previewQuality = 1,
  slowFrames = 0;
function setResolution() {
  const full = Math.min(innerWidth, (innerHeight * 16) / 9) * Math.min(devicePixelRatio, 2);
  const visible = playing
    ? Math.min(full, film.clientWidth * Math.min(devicePixelRatio, 1.5)) * previewQuality
    : full;
  const width = Math.max(16, Math.round(visible / 16) * 16);
  if (film.width !== width || film.height !== (width * 9) / 16) {
    film.width = width;
    film.height = (width * 9) / 16;
  }
}
function resize() {
  setResolution();
  draw();
}
function tick(now) {
  if (!playing) return;
  const elapsed = now - last;
  t = (t + elapsed / 1000) % 45;
  slowFrames = elapsed > 42 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
  if (slowFrames >= 5 && previewQuality > 0.56) {
    previewQuality = Math.max(0.56, previewQuality * 0.75);
    setResolution();
    slowFrames = 0;
  }
  last = now;
  draw();
  hud();
  raf = requestAnimationFrame(tick);
}
function toggle() {
  if (playing) {
    cancelAnimationFrame(raf);
    playing = false;
    resize();
  } else {
    poster = false;
    playing = true;
    previewQuality = 1;
    slowFrames = 0;
    setResolution();
    last = performance.now();
    draw();
    raf = requestAnimationFrame(tick);
  }
  hud();
}
function seekTo(v) {
  poster = false;
  playing = false;
  cancelAnimationFrame(raf);
  t = ((v % 45) + 45) % 45;
  setResolution();
  draw();
  hud();
}
function clean() {
  document.body.classList.toggle("clean");
  if (playing) resize();
}
for (const el of document.querySelectorAll("[data-icon]")) {
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  el.setAttribute("aria-hidden", "true");
  const c = s.getContext("2d");
  c.scale(2, 2);
  switch (el.dataset.icon) {
    case "brand":
      seal(c, 16, 16, 31, -0.037, "#bb543b", 1);
      break;
    case "drop":
      line(c, "M16 3Q12 10 8 16C1 29 23 34 25 21Q26 16 16 3Z M9 21Q10 25 14 26", "#b8beaa", 1.8);
      break;
    case "spark":
      line(c, "M15 3Q15 13 25 16Q16 17 15 29Q13 18 4 16Q13 14 15 3Z M25 3V9 M22 6H28", "#d2b77a", 1.5);
      break;
    case "silent":
      line(c, "M3 13H9L16 7V25L9 19H3Z M22 12L29 20 M29 12L22 20", "#bdc0b0", 1.7);
  }
  el.style.background = "center / contain no-repeat url(" + s.toDataURL() + ")";
}
play.onclick = toggle;
seek.oninput = () => seekTo(Math.min(DURATION - 1 / 30, Number(seek.value)));
chapters.forEach((b) => (b.onclick = () => seekTo(+b.dataset.time)));
for (const k of ["wet", "gold"])
  document.getElementById(k).onclick = (e) => {
    opts[k] = !opts[k];
    e.currentTarget.setAttribute("aria-pressed", String(opts[k]));
    draw();
  };
document.querySelector("#hide").onclick = clean;
document.querySelector("#show").onclick = clean;
film.onclick = toggle;
window.addEventListener("keydown", (e) => {
  if (e.altKey || e.metaKey || e.ctrlKey) return;
  if (e.key.toLowerCase() === "h") {
    e.preventDefault();
    clean();
  } else if (e.code === "Space" && !["INPUT", "BUTTON"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    toggle();
  }
});
window.addEventListener("resize", resize);
resize();
hud();
window.TOTAL_DURATION = DURATION;
window.renderAt = seekTo;
