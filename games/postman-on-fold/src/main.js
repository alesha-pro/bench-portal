import { Valley } from "./valley.js";
import { routes, clamp, ease, storyState } from "./routes.js";
import { postage } from "./postage.js";
import {
  enableAudio,
  playScore,
  stopScore,
  chime,
  ringBicycle,
  soundtrack,
} from "./music.js";

const el = (id) => document.getElementById(id);
const canvas = el("world"),
  film = new URLSearchParams(location.search).has("film");
document.body.classList.toggle("film", film);
el("postage").innerHTML = postage();
const valley = new Valley(canvas, film);
const notes = [
  "“Come by the river door.”",
  "“I’ve put the kettle on.”",
  "“Ring twice at the mill.”",
];
const cardTitles = ["Across the river.", "Up the hill.", "Around the mill."];
const shownTime = (t) => "00:" + String(Math.floor(t)).padStart(2, "0");
let state,
  story = false,
  playing = false,
  sound = false,
  raf = 0,
  previous = 0,
  motion = null,
  drag = null;
function draw(updateControls = true) {
  const r = routes[state.route],
    pos = valley.render(state, story);
  if (!updateControls) return;
  document.body.classList.toggle("story-mode", story);
  const place = (node, [x, y]) => {
    node.style.left = x + "px";
    node.style.top = y + "px";
  };
  place(el("destination-label"), pos.label);
  place(el("fold-handle"), pos.handle);
  el("destination-text").textContent = "For " + r.person;
  el("recipient").textContent = r.recipient;
  el("note").textContent = notes[state.route];
  const number = String(state.route + 1).padStart(2, "0");
  el("scene-index").textContent = number;
  el("chapter-number").textContent = number + " / " + r.name.toUpperCase();
  document.querySelectorAll(".route").forEach((b, i) => {
    b.classList.toggle("active", i === state.route);
    b.setAttribute("aria-pressed", String(i === state.route));
  });
  const amount = Math.round(state.fold * 100);
  el("fold").value = amount;
  el("fold-value").value = amount + "%";
  el("fold").style.setProperty("--fill", amount + "%");
  el("fold-status").innerHTML =
    "<i></i>" +
    (state.delivered === 1
      ? "Letter delivered"
      : state.fold === 1
        ? "Road connected"
        : state.fold > 0
          ? "Closing the gap"
          : "Road open");
  el("fold-handle").style.visibility =
    story || motion?.type === "ride" || state.delivered > 0
      ? "hidden"
      : "visible";
  el("guide-title").textContent =
    state.delivered === 1
      ? "Signed, sealed, delivered."
      : state.ride > 0
        ? "Special delivery"
        : "Fold the map";
  el("guide-text").textContent =
    state.delivered === 1
      ? "Choose another postal route."
      : story
        ? "Auto Story · Fold Valley"
        : "Drag the crease or click to fold.";
  el("delivery").style.opacity = state.delivered;
  el("receipt").textContent = "Delivered to " + r.person;
  el("story-caption").textContent = story
    ? r.caption
    : "Bring the two red road markers together.";
  el("play-icon").textContent = playing ? "Ⅱ" : "▶";
  el("play-label").textContent = playing
    ? "Pause"
    : story && state.t > 0 && state.t < 35
      ? "Resume"
      : "Auto Story";
  el("progress").style.width = (story ? (state.t / 35) * 100 : 0) + "%";
  el("timeline").setAttribute(
    "aria-valuenow",
    String(story ? state.t.toFixed(2) : 0),
  );
  el("time").textContent = shownTime(story ? state.t : 0) + " / 00:35";
  if (film) {
    const intro = state.t < 2.9,
      ending = state.final > 0,
      card = document.querySelector(".film-titles");
    const opacity = ending
      ? state.final
      : intro
        ? 1 - ease((state.t - 1.85) / 1.05)
        : state.route === 0
          ? 0
          : 1 - ease((state.local - 1.3) / 1.6);
    card.style.opacity = opacity;
    el("film-kicker").textContent = ending
      ? "THREE LETTERS DELIVERED"
      : intro
        ? "A FOLD VALLEY PAPER TALE"
        : "DELIVERY " + number;
    el("film-title").textContent = ending
      ? "Yours, from Fold Valley."
      : intro
        ? "Postman on the Fold"
        : cardTitles[state.route];
    el("film-copy").textContent = ending
      ? "With love from Ada, Theo & Milo."
      : intro
        ? "The morning post, in three folds."
        : r.caption;
    el("film-route").textContent =
      state.delivered === 1
        ? "RECEIVED BY " + r.person.toUpperCase() + "   /   " + number
        : number + " / " + r.name.toUpperCase();
  }
}
function cancel() {
  cancelAnimationFrame(raf);
  raf = 0;
  playing = false;
  motion = null;
  previous = 0;
  stopScore();
}
function choose(route) {
  cancel();
  story = false;
  state = {
    route,
    fold: 0,
    ride: 0,
    delivered: 0,
    deliveryAge: -1,
    local: 0,
    t: 0,
    final: 0,
  };
  draw();
  if (!film) wake();
}
function seek(t) {
  cancel();
  story = true;
  state = storyState(t);
  draw();
}
function wake() {
  if (!raf) raf = requestAnimationFrame(tick);
}
function tick(now) {
  raf = 0;
  const dt = previous ? Math.max(0, (now - previous) / 1000) : 0;
  if (!story && !motion && previous && dt < 1 / 30 - 0.001) {
    wake();
    return;
  }
  previous = now;
  if (playing) {
    state = storyState(state.t + dt);
    if (state.t >= 35) {
      playing = false;
      stopScore();
    }
  } else if (!story) {
    state.t += dt;
    if (state.delivered === 1) state.deliveryAge += dt;
  }
  const updateControls = story || Boolean(motion);
  if (motion) {
    motion.elapsed += dt;
    if (motion.type === "fold") {
      state.fold =
        motion.from +
        (1 - motion.from) * ease(motion.elapsed / motion.duration);
      if (state.fold >= 1) motion = { type: "ride", elapsed: 0 };
    } else {
      const lastRide = state.ride;
      state.ride = ease(motion.elapsed / 3.5);
      if (sound && lastRide < 0.79 && state.ride >= 0.79) ringBicycle();
      state.deliveryAge = motion.elapsed - 3.5;
      state.delivered = ease(state.deliveryAge / 1.15);
      if (state.delivered >= 1) {
        motion = null;
        if (sound) chime();
      }
    }
  }
  draw(updateControls);
  if (playing || motion || (!film && !story)) wake();
  else previous = 0;
}
function play() {
  if (playing) {
    cancel();
    draw();
    return;
  }
  const t = story && state.t < 35 ? state.t : 0;
  cancel();
  story = true;
  state = storyState(t);
  playing = true;
  if (sound) playScore(t);
  draw();
  wake();
}
function manual() {
  if (story || motion) {
    const route = state.route,
      f = state.fold;
    choose(route);
    state.fold = f;
  }
  state.ride = 0;
  state.delivered = 0;
  state.deliveryAge = -1;
  story = false;
}
function foldTo(value) {
  manual();
  state.fold = clamp(value);
  if (state.fold === 1) {
    motion = { type: "ride", elapsed: 0 };
    previous = 0;
    wake();
  }
  draw();
}
function completeFold() {
  if (!story && (motion || state.delivered > 0)) return;
  manual();
  motion = {
    type: "fold",
    from: state.fold,
    elapsed: 0,
    duration: Math.max(0.24, (1 - state.fold) * 1.35),
  };
  previous = 0;
  wake();
}
document
  .querySelectorAll(".route")
  .forEach((b, i) => b.addEventListener("click", () => choose(i)));
el("reset").addEventListener("click", () => choose(state.route));
el("fold").addEventListener("input", (e) =>
  foldTo(Number(e.target.value) / 100),
);
el("play").addEventListener("click", play);
el("sound").addEventListener("click", async () => {
  sound = !sound;
  el("sound").setAttribute("aria-pressed", String(sound));
  el("sound").setAttribute("aria-label", sound ? "Mute sound" : "Enable sound");
  el("sound-label").textContent = sound ? "Sound on" : "Sound off";
  if (sound) {
    await enableAudio();
    if (playing) playScore(state.t);
    else chime();
  } else stopScore();
});
for (const node of [canvas, el("fold-handle")]) {
  node.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || (!story && (motion || state.delivered))) return;
    manual();
    node.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY, fold: state.fold, moved: false };
  });
  node.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x,
      dy = drag.y - e.clientY;
    if (Math.hypot(dx, dy) > 4) drag.moved = true;
    if (drag.moved) {
      state.fold = clamp(
        drag.fold +
          (Math.abs(dx) > Math.abs(dy) ? dx : dy) /
            Math.min(180, canvas.clientWidth * 0.27),
      );
      draw();
    }
  });
  node.addEventListener("pointerup", () => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    if (!moved || state.fold > 0.965) completeFold();
  });
  node.addEventListener("pointercancel", () => {
    drag = null;
  });
}
el("fold-handle").addEventListener("keydown", (e) => {
  if (["Enter", " "].includes(e.key)) {
    e.preventDefault();
    completeFold();
  }
});
const timeline = el("timeline");
function scrub(e) {
  const b = timeline.getBoundingClientRect();
  seek(35 * clamp((e.clientX - b.left) / b.width));
}
timeline.addEventListener("pointerdown", (e) => {
  timeline.setPointerCapture(e.pointerId);
  scrub(e);
});
timeline.addEventListener("pointermove", (e) => {
  if (timeline.hasPointerCapture(e.pointerId)) scrub(e);
});
timeline.addEventListener("keydown", (e) => {
  const steps = { ArrowLeft: -1, ArrowRight: 1, Home: -35, End: 35 };
  if (e.key in steps) {
    e.preventDefault();
    seek((story ? state.t : 0) + steps[e.key]);
  }
});
new ResizeObserver(() => {
  if (state) draw();
}).observe(canvas);
choose(0);
window.TOTAL_DURATION = 35.0;
window.renderAt = seek;
window.renderSoundtrack = soundtrack;
