import { records } from "./print.js";
const icons = {
  volumeOff: '<path d="m11 5-5 4H3v6h3l5 4zM16 9l6 6m0-6-6 6"/>',
  volume:
    '<path d="m11 5-5 4H3v6h3l5 4zM15 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>',
  sliders:
    '<path d="M3 7h5m4 0h9M3 17h10m4 0h4"/><circle cx="10" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  drop: '<path d="M12 3c-2.7 4.3-7 8.7-7 12a7 7 0 0 0 14 0c0-3.3-4.3-7.7-7-12ZM9 15c0 1.7.8 2.7 2.2 3.3"/>',
  updown: '<path d="m7 9 5-5 5 5M7 15l5 5 5-5"/>',
  play: '<path d="M6 3.8 20 12 6 20.2z"/>',
  pause: '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>',
  hand: '<path d="M8.7 12.3V6.8c0-1.9 2.8-1.9 2.8 0v4.6-6.5c0-1.9 2.8-1.9 2.8 0v6.3-4.9c0-1.8 2.7-1.8 2.7 0v6-3.4c0-1.8 2.7-1.8 2.7 0v5.8c0 4-2.4 6.5-6.1 6.5-2.2 0-3.7-.8-5.1-2.6l-4.2-5.2c-1-1.4.6-3 1.9-2l2.5 2"/>',
  music:
    '<path d="M9 17V6l10-2v11M9 10l10-2"/><ellipse cx="6.6" cy="17.7" rx="2.5" ry="1.8"/><ellipse cx="16.6" cy="15.8" rx="2.5" ry="1.8"/>',
};
const $ = (id) => document.getElementById(id);
function icon(name) {
  return (
    '<svg viewBox="0 0 24 24" aria-hidden="true">' + icons[name] + "</svg>"
  );
}
export function controlsUI(state, actions, jackets) {
  document
    .querySelectorAll("[data-icon]")
    .forEach((i) => (i.innerHTML = icon(i.dataset.icon)));
  function panel(id, open) {
    $(id).hidden = !open;
    $(id === "mix" ? "settings" : "record").setAttribute(
      "aria-expanded",
      String(open),
    );
  }
  $("settings").onclick = () => {
    panel("crate", false);
    panel("mix", $("mix").hidden);
  };
  $("record").onclick = () => {
    panel("mix", false);
    panel("crate", $("crate").hidden);
  };
  document
    .querySelectorAll("[data-close]")
    .forEach((b) => (b.onclick = () => panel(b.dataset.close, false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      panel("mix", false);
      panel("crate", false);
      actions.wipe(false);
    }
  });
  $("room").addEventListener("pointerdown", () => {
    panel("crate", false);
    panel("mix", false);
  });
  const arts = jackets.map((j) => {
    const c = document.createElement("canvas");
    c.width = c.height = 104;
    c.getContext("2d").drawImage(j.image, 0, 0, 104, 104);
    return c.toDataURL();
  });
  records.forEach((r, i) => {
    const b = document.createElement("button");
    b.innerHTML =
      '<img alt="" src="' +
      arts[i] +
      '"><span><b>' +
      r.name +
      "</b><small>" +
      r.artist +
      "</small></span><i></i>";
    b.onclick = () => {
      actions.record(i);
      panel("crate", false);
    };
    $("tracks").append(b);
  });
  function record(i) {
    $("title").textContent = records[i].name;
    $("artist").textContent = records[i].artist;
    $("cover").src = arts[i];
    [...$("tracks").children].forEach((b, k) => {
      b.setAttribute("aria-pressed", String(k === i));
      b.querySelector("i").innerHTML = k === i ? icon("music") : "";
    });
  }
  for (const id of ["rain", "fog", "warmth"]) {
    const input = $(id);
    function change() {
      const v = Number(input.value);
      input.style.setProperty("--amount", v + "%");
      document.querySelector('output[for="' + id + '"]').value =
        id === "warmth" ? Math.round(5000 - v * 25) + " K" : v + "%";
      state[id] = v / 100;
      actions.environment(id);
    }
    input.oninput = change;
    change();
  }
  $("sound").onclick = async () => {
    const b = $("sound");
    b.disabled = true;
    try {
      const on = await actions.sound();
      b.setAttribute("aria-pressed", String(on));
      b.setAttribute("aria-label", on ? "Mute sound" : "Enable sound");
      b.querySelector("i").innerHTML = icon(on ? "volume" : "volumeOff");
      b.querySelector("span").textContent = on ? "Sound on" : "Sound off";
    } finally {
      b.disabled = false;
    }
  };
  $("play").onclick = actions.play;
  $("seek").oninput = (e) => actions.seek(+e.target.value);
  $("wipe").onclick = () => actions.wipe(!state.wiping);
  $("clear").onclick = actions.clear;
  record(0);
  return {
    record,
    wipe(on) {
      $("wipe").setAttribute("aria-pressed", String(on));
      $("room").style.cursor = on ? "crosshair" : "";
    },
    play(on) {
      $("play").setAttribute("aria-pressed", String(on));
      $("play").setAttribute(
        "aria-label",
        on ? "Pause auto showcase" : "Play auto showcase (30 seconds)",
      );
      $("play").querySelector("i").innerHTML = icon(on ? "pause" : "play");
    },
    time(t) {
      $("seek").value = t;
      $("seek").style.setProperty("--amount", (t / 30) * 100 + "%");
      $("time").innerHTML =
        "00:" +
        String(Math.floor(t)).padStart(2, "0") +
        " <small>/ 00:30</small>";
    },
  };
}
