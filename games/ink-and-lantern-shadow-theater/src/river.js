// Small cutouts mounted on their own pins along the waterline.
import { draw, ease, ellipse, ink, mix, pin, place, wave } from './drawing.js';

export function chimes(c, t, storm) {
  for (const [x, y, size] of [[983, 388, 0.7], [1044, 391, 0.39]]) {
    place(c, x, y, size, size, 0, (c) => {
      for (const [sx, sy, k] of [[52, -53, 1], [-52, -52, 1], [39, -72, 0.75], [-39, -72, 0.75]]) {
        const phase = x + sx;
        const swing = 0.14 * wave(t, 6, phase) + storm * 0.48 * wave(t, 19, phase);
        place(c, sx, sy, k, k, swing, (c) => {
          draw(c, 'M0 0 L0 8', null, '#635144', 1.4);
          draw(c, 'M0 6 Q-4 6 -4 12 Q-4 15 -7 17 Q0 20 7 17 Q4 15 4 12 Q4 7 0 6Z', '#826244', '#574b45', 1.2);
          draw(c, 'M-4 15 Q0 17 4 15 M-2 9 L-3 12', null, '#dec18a', 1);
          place(c, 0, 17, 1, 1, 0.22 * wave(t, 8, phase) + storm * 0.5 * wave(t, 19, phase - 0.85), (c) => {
            draw(c, 'M0 0 L0 6', null, '#604f41', 1);
            ellipse(c, 0, 1, 1.5, 2, '#654838');
            draw(c, 'M0 5 Q4 8 1 15 Q-3 12 -2 8Z', '#718675', '#615547', 0.75);
          });
        });
      }
    });
  }
}

function fish(c, x, y, size, heading, t, phase) {
  const beat = wave(t, 52, phase);
  place(c, x, y, size * heading, size, 0.055 * wave(t, 12, phase), (c) => {
    place(c, -11, 0, 1, 1, beat * 0.29, (c) => {
      place(c, -5, 0, 1, 1, 0.25 * wave(t, 52, phase - 0.85), (c) => {
        draw(c, 'M3 0 Q-5 -3 -13 -11 Q-15 -5 -10 0 Q-15 5 -14 10 Q-5 7 3 0Z', '#a77456', '#4b4740', 1.1);
        draw(c, 'M0 0 L-11 -7 M0 1 L-11 6', null, '#d3ad76', 0.8);
      });
      draw(c, 'M-7 -2 Q0 -4 5 -3 L6 3 Q-1 4 -7 2Z', '#655747');
    });
    draw(c, 'M-8 -5 Q-5 -11 -12 -15 Q0 -14 6 -6 M-4 4 Q-2 9 -9 12 Q3 12 8 5Z', '#967756', '#4c4941', 1);
    draw(c, 'M-13 0 Q-7 -8 3 -8 Q13 -7 19 0 L15 1 L17 2 Q6 9 -3 7 Q-9 5 -13 2Z', '#617a69', '#423f38', 1.5);
    draw(c, 'M7 -6 Q2 -1 7 5 M-9 1 Q-6 -4 -3 -2 Q-3 2 -7 3 M-3 -2 Q0 -6 3 -4 M-2 3 Q1 -1 3 1',
      null, '#d3b783', 1);
    pin(c, -10, 0, 0.61);
    ellipse(c, 12, -1.7, 2, 1.9, '#e3bf7e');
    ellipse(c, 12.4, -1.8, 1.05, 1.15, ink);
  });
}
export function shoal(c, t) {
  for (const [home, y, scale, phase, rate] of [
    [507, 573, 0.79, 0, 4], [477, 587, 0.57, 0.43, 4], [454, 574, 0.52, 0.77, 4],
    [777, 568, 0.87, 2.2, 3], [813, 579, 0.66, 2.73, 3], [963, 593, 0.57, 5.3, 5],
  ]) {
    const angle = t * Math.PI * 2 * rate / 45 + phase;
    // The folded tail straightens during the burst, then the fish coasts.
    const run = Math.sin(angle);
    const x = home + 93 * run ** 3 + 32 * run;
    const cy = y + 7 * Math.sin(2 * angle + 0.3) + 2 * wave(t, 8, phase);
    const heading = Math.tanh(7 * Math.cos(angle));
    if (Math.abs(heading) < 0.12) {
      ellipse(c, x, cy, scale * 2.4, scale * 6.9, '#667763', '#4c4a3f', 0.85);
    } else {
      fish(c, x, cy, scale, heading, t, phase);
    }
    place(c, x, cy + 8, -heading * scale, 0.65, 0, (c) =>
      draw(c, 'M13 0 Q21 -2 30 -1 M20 3 Q26 2 36 3', null, '#ecce99a1', 1));
  }
}

function lotusPad(c, x, y, s, flip) {
  place(c, x, y, s * flip, s, 0, (c) => {
    draw(c, 'M-41 3 Q-33 -6 -12 -6 Q0 -10 10 -7 Q23 -8 30 -3 Q43 -1 37 3 Q28 9 11 7 L-1 0 L3 8 Q-19 12 -34 8 Q-46 8 -41 3Z',
      '#52634e', '#413c32', 1.5);
    draw(c, 'M-36 4 Q-12 1 -1 0 M-26 -3 L-2 0 L15 -5 M2 1 L27 2 M-17 7 L-1 1', null, '#b0a373', 1);
    draw(c, 'M-41 6 Q-30 12 -9 9 M11 9 Q28 11 37 6', null, '#644f40', 1.15);
    draw(c, 'M-43 12 Q-30 11 -20 12 M18 13 Q33 11 42 12', null, '#e0be8a', 1.1);
  });
}
function lotusFlower(c, t) {
  place(c, 292, 626, 1, 1, 0.055 * wave(t, 4, 0.4), (c) => {
    draw(c, 'M0 1 Q-1 -15 -8 -27 M-18 6 Q-25 -5 -31 -9', null, '#4a4e3e', 2.3);
    place(c, -8, -26, 0.84, 0.84, -0.18, (c) => {
      draw(c, 'M0 1 Q-15 -1 -18 -15 Q-9 -13 -4 -8 Q-8 -19 -3 -25 Q3 -18 5 -12 Q8 -21 14 -22 Q16 -8 4 0Z',
        '#b95e57', '#583d39', 1.35);
      draw(c, 'M0 0 Q-12 -4 -12 -18 Q-5 -15 0 -7 Q1 -16 7 -21 Q11 -6 0 0Z', '#ed9a78', '#85453f', 1);
      draw(c, 'M0 1 Q-8 1 -12 -5 Q-4 -5 0 -2 Q5 -7 11 -8 Q8 -1 0 1Z', '#667451', '#464637', 0.9);
    });
    draw(c, 'M-31 -9 Q-44 -9 -48 -16 Q-38 -19 -30 -14 Q-22 -20 -16 -17 Q-19 -9 -31 -9Z', '#555e48', '#453e34', 1);
  });
}
function frog(c, stretch) {
  const knee = 0.14 + 1.65 * stretch;
  place(c, -5, -5, 1, 1, knee, (c) => {
    draw(c, 'M1 -4 Q9 -1 10 6 Q8 11 3 9 Q-1 5 -3 0Z', '#654f3b', ink, 1.4);
    place(c, 7, 7, 1, 1, -1.63 * stretch, (c) => {
      draw(c, 'M2 -2 Q-1 -2 -12 0 L-19 -1 L-14 2 L-20 3 L-14 4 L-19 6 Q-8 5 0 3Z', '#413c32', ink, 1.15);
      pin(c, 0, 0, 0.7);
    });
  });
  draw(c, 'M-15 -4 Q-16 -17 -4 -19 Q3 -21 7 -17 Q9 -25 15 -22 Q19 -21 18 -16 Q23 -16 26 -12 Q24 -6 16 -6 Q8 -5 4 -3 Q-7 3 -15 -4Z',
    '#3c3b32', ink, 1.45);
  draw(c, 'M-12 -12 Q-6 -18 0 -16 Q-7 -14 -12 -9Z M-8 -8 Q-5 -12 0 -11 Q-3 -8 -8 -8Z', '#a19763');
  draw(c, 'M12 -9 Q20 -10 24 -12', null, '#c8a273', 1);
  ellipse(c, 13.2, -18.4, 3.1, 2.9, '#ddbc76');
  ellipse(c, 13.7, -18.7, 1.6, 1.6, ink);
  place(c, 9, -7, 1, 1, -0.92 * stretch, (c) => {
    draw(c, 'M-2 -1 Q1 0 2 3 L5 7 L13 7 L16 5 L14 8 L17 8 L14 10 L5 10 Q2 9 0 5Z', '#4f4938', ink, 1.2);
    pin(c, 0, 0, 0.57);
  });
  pin(c, -6, -5, 0.89);
  for (const [x,y] of [[-5,-14],[0,-15],[4,-13]]) ellipse(c,x,y,0.95,0.75,'#d1ac74');
}
export function lotusBank(c, t) {
  // The returning traveler flushes the same frog back onto the opening leaf.
  const outbound = ease(1.26, 2.53, t), inbound = ease(39.18, 40.35, t);
  const position = outbound - inbound;
  const arc = Math.sin(Math.PI * outbound) + Math.sin(Math.PI * inbound);
  const crouch = ease(0.85, 1.25, t) * (1 - ease(1.26, 1.59, t)) +
    ease(38.75, 39.15, t) * (1 - ease(39.18, 39.48, t));
  const turn = 1 - 2 * ease(37.8, 38.35, t) + 2 * ease(41.2, 42.0, t);
  const settle = (start) => {
    const dt = t - start;
    return dt < 0 || dt > 2 ? 0 : Math.sin(dt * 11) * Math.exp(-3 * dt) * (1 - ease(1.6, 2, dt)) * 3.8;
  };
  const left = 604 + 1.2 * wave(t, 5) + settle(40.35);
  const right = 607 + 1.4 * wave(t, 4, 1.2) + settle(2.53);
  lotusFlower(c, t);
  lotusPad(c, 326, left, 0.8, 1);
  lotusPad(c, 479, right, 0.71, -1);
  const x = mix(326, 479, position), y = mix(left, right, position);
  ellipse(c, x, y + 1, 13 - 5 * arc, 2.3, 'rgba(63,49,41,' + (0.35 - arc * 0.22) + ')');
  const pitch = -0.35 * Math.sin(2 * Math.PI * outbound) + 0.35 * Math.sin(2 * Math.PI * inbound);
  place(c, x, y - 1.2 - 60 * arc, turn * 0.88, 0.88 - crouch * 0.22 + wave(t, 17) * 0.014, pitch,
    (c) => frog(c, arc));
  for (const [landed, lx, ly] of [[2.53, 479, right], [40.35, 326, left]]) {
    const dt = t - landed;
    if (dt > 0 && dt < 1.5) {
      c.save();
      c.globalAlpha = Math.sin(Math.PI * dt / 1.5) * 0.75;
      ellipse(c, lx, ly + 3, 21 + 37 * dt, 3 + 4 * dt, null, '#ffe2a1', 1.25);
      c.restore();
    }
  }
}
