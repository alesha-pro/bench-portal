import { TAU, ink, place, draw, ellipse, pin, stroke, radial, ease, clamp, wave, random, die, linear } from './drawing.js';
import { lantern } from './puppets.js';

// Spine, from the nape to the last joint. Tangents also drive the scale dies.
const spine = [
  [701, 237],
  [754, 253],
  [806, 216],
  [850, 168],
  [922, 151],
  [991, 176],
  [1032, 220],
  [1021, 270],
  [968, 306],
  [883, 318],
  [807, 332],
  [766, 361],
  [785, 387],
  [838, 394],
  [877, 378],
  [889, 349],
  [860, 341],
  [842, 355],
  [851, 365],
];
function onSpine(u, t) {
  const q = clamp(u) * (spine.length - 1),
    j = Math.min(spine.length - 2, Math.floor(q)),
    f = q - j;
  const a = spine[Math.max(0, j - 1)],
    b = spine[j],
    d = spine[j + 1],
    e = spine[Math.min(j + 2, spine.length - 1)];
  function cubic(k) {
    return (
      0.5 *
      (2 * b[k] +
        (-a[k] + d[k]) * f +
        (2 * a[k] - 5 * b[k] + 4 * d[k] - e[k]) * f * f +
        (-a[k] + 3 * b[k] - 3 * d[k] + e[k]) * f * f * f)
    );
  }
  const rise = 1 - ease(9.9 + u * 1.6, 18.4 + u * 1.2, t);
  const lunge = ease(17.8, 21.25, t) * (1 - ease(22.25, 25.75, t)) * Math.exp(-u * 8);
  const recoil = ease(24, 25.3, t) * (1 - ease(26, 28.8, t)) * Math.exp(-u * 7);
  return [
    cubic(0) -
      73 * lunge +
      22 * recoil +
      rise * (110 + 30 * u) +
      7 * wave(t, 2, u * 7) +
      3 * wave(t, 4, u * 9),
    cubic(1) +
      64 * lunge -
      13 * recoil +
      rise * (339 - 94 * u) +
      9 * wave(t, 3, u * 9) -
      12 * ease(24, 29, t) * (1 - u),
  ];
}
function ring(u, t) {
  const [x, y] = onSpine(u, t),
    a = onSpine(u - 0.002, t),
    b = onSpine(u + 0.002, t),
    theta = Math.atan2(b[1] - a[1], b[0] - a[0]),
    r = (27 * (1 - u) ** 0.8 + 1.2) * (1 + 0.17 * Math.sin(u * TAU));
  return { x, y, theta, r };
}
export function jewel(t) {
  const p = ring(0.052, t);
  return [p.x, p.y];
}
const charcoal = '#312529',
  line = '#a97849';
// Paired pierced scales. The same die cuts the hide and lays the transparent
// backing into the opening, so mountains and lamp gradients show through.
const panels = [
  'M-13 -14 Q1 -16 10 -3 Q2 -6 -5 -4 Q-11 -6 -13 -14Z',
  'M-11 8 Q-2 -2 11 -1 Q6 11 -11 13 Q-6 10 -11 8Z',
];
const panelHoles = die(panels.join(' '));
const films = [
  ['#973448d6', '#ee5a58ce', '#ffb36e9e'],
  ['#286559d9', '#4db398c7', '#d5dc89ab'],
];
function vertebra(c, n, idx, t) {
  const { x, y, r, theta } = n;
  place(c, x, y, r / 27, r / 27, theta, (c) => {
    // The ridge of flame stays on the outside of each bend.
    draw(
      c,
      'M-14 -18 Q-6 -29 0 -35 Q5 -40 9 -51 Q10 -36 5 -30 Q13 -33 18 -40 Q17 -28 11 -20 L15 -15Z',
      charcoal,
    );
    draw(c, 'M-4 -24 Q4 -30 8 -39 Q6 -29 1 -24Z', '#b18150');
    draw(
      c,
      'M-11 -22 Q3 -17 7 -4 Q-2 -14 -13 -13 M-7 20 Q8 14 11 2 M-12 -8 Q1 -8 5 1 Q-6 0 -12 -8Z',
      null,
      line,
      1.15,
    );
    // Each lacquered saddle laps over the neighboring section at its pivot.
    draw(c, 'M-15 -21 Q0 -24 13 -11 Q19 -3 14 8 Q10 17 -4 21 M-14 19 Q3 17 11 8',
      null, '#c19459', 1.5);
    draw(c, 'M-12 -21 Q-3 -24 4 -25 Q10 -27 13 -32 Q13 -23 8 -20 L3 -17Z',
      idx % 3 ? '#b5504c' : '#5a9e8b', '#513b33', 1);
    const gleam = (1 + wave(t, 11, -idx * 0.64)) / 2;
    for (const [j, cell] of panels.entries()) {
      const [dark, mid, light] = films[(idx + j) % 2];
      draw(c, cell, linear(c, -13, -8, 12, 9, [
        [0, dark], [0.22 + 0.38 * gleam, light], [0.76, mid], [1, dark],
      ]), '#e5af70', 1);
    }
    draw(c, 'M-11 -12 Q-1 -11 6 -6 M-8 10 Q0 5 8 1', null, '#f7dca18f', 0.85);
    draw(c, 'M7 -19 Q18 -15 18 -3 Q17 5 12 11', null, '#64473d', 1.7);
    pin(c, 12, -3, 0.91);
    for (let j = 0; j < 4; j++) ellipse(c, -8 + j * 3, 12 - j * 0.95, 1, 1, '#c29a61');
    draw(c, 'M-7 -17 Q-1 -15 2 -11 Q-5 -12 -7 -17Z', idx % 3 === 0 ? '#a77a4d' : '#778574');
    for (let i = 0; i < 3; i++)
      draw(c, new Path2D('M' + (-3 + i * 4) + ' 16 q2 1 4 -1'), null, '#d0a16a', 0.75);
    if (idx % 3 === 1) pin(c, 3, 5, 1);
  });
}
function whiskers(c, t, roar) {
  for (const [i, rootY, length, lift] of [[0,-11,79,-30],[1,-8,95,-4],[2,8,65,26]]) {
    const bend = (4 + roar * 6) * wave(t, 8 + i, i * 1.4);
    const lag = (5 + roar * 8) * wave(t, 8 + i, i * 1.4 - 1.1);
    place(c, -102, rootY, 1, 1, 0, (c) => {
      const p = new Path2D();
      p.moveTo(0, 0);
      p.bezierCurveTo(-24, 1 + bend * 0.35, -length * 0.42, lift + bend, -length * 0.74, lift + lag);
      p.bezierCurveTo(-length * 1.15, lift + lag + 1, -length * 1.04, lift + lag - 22, -length * 0.93, lift + lag - 15);
      p.quadraticCurveTo(-length * 0.87, lift + lag - 11, -length * 0.94, lift + lag - 7);
      draw(c, p, null, '#493333', i === 1 ? 2.2 : 1.7);
      if (i === 1) draw(c, p, null, '#cf8e56', 0.65);
      draw(c, 'M1 -2 Q-8 -3 -15 -1 Q-8 1 1 1Z', '#896344');
    });
  }
}
function antler(c, x, y, s) {
  place(c, x, y, s, s, 0, (c) =>
    draw(
      c,
      'M-4 1 Q5 -13 9 -26 Q12 -37 8 -49 Q16 -44 17 -33 Q21 -39 21 -54 Q29 -46 23 -29 Q33 -32 42 -47 Q40 -32 27 -22 Q39 -22 49 -30 Q42 -17 25 -15 Q13 -8 5 4Z',
      '#43302b',
      '#96714c',
      1,
    ),
  );
}
const headShape =
  'M19 -20 Q31 -38 28 -48 Q20 -46 10 -34 Q4 -59 -8 -63 Q-3 -47 -10 -42 Q-25 -52 -38 -45 Q-35 -41 -32 -38 Q-49 -40 -61 -32 Q-70 -30 -82 -32 Q-76 -22 -65 -23 Q-68 -16 -79 -12 Q-89 -11 -97 -18 Q-108 -29 -114 -22 Q-120 -14 -113 -6 Q-102 6 -83 6 L-62 5 Q-43 7 -28 23 Q-20 32 -2 33 Q21 35 33 20 Q45 1 32 -18Z M-35 -24 Q-45 -33 -60 -25 Q-50 -17 -35 -24Z M10 -27 Q16 -38 22 -40 Q20 -31 10 -27Z M18 1 Q26 -7 31 -8 Q29 1 18 1Z';
function head(c, t, alpha) {
  if (alpha <= 0) return;
  const { x, y } = ring(0, t),
    roar = ease(14, 19, t) * (1 - ease(25, 30, t)),
    a = 0.02 * wave(t, 6) + roar * 0.05;
  place(c, x, y, 1, 1, a, (c) => {
    c.globalAlpha *= alpha;
    antler(c, 10, -25, 0.93);
    antler(c, -9, -38, 0.73);
    whiskers(c, t, roar);
    // A separate lower jaw opens on its brass gudgeon.
    place(c, -17, 11, 1, 1, -0.10 - roar * (0.26 + 0.13 * wave(t, 7)) + 0.055 * wave(t, 12) + 0.12 * ease(26, 30.5, t), (c) => {
      draw(
        c,
        'M7 -8 Q-12 -8 -29 2 Q-54 18 -79 14 Q-88 13 -94 5 Q-95 19 -82 26 Q-62 36 -33 27 Q-41 33 -50 34 Q-25 37 -8 23 Q7 20 11 8Z',
        charcoal,
        '#614233',
        1,
      );
      place(c, -28, 13, 1, 1, 0.07 * wave(t, 13), (c) =>
        draw(c, 'M1 -2 Q-15 2 -35 -5 Q-51 -13 -64 -2 Q-55 -5 -49 -3 L-58 1 Q-46 -2 -36 1 Q-11 13 1 5Z',
          '#bb5157', '#69403a', 1.1));
      draw(c, 'M-86 19 Q-60 27 -33 16 Q-51 32 -76 26Z', '#9e533c');
      draw(
        c,
        'M-81 15 Q-78 11 -78 5 Q-73 10 -73 16 M-65 17 L-62 10 L-59 16 M-53 13 L-49 8 L-47 12Z',
        '#edd5a0',
      );
      draw(c, 'M-76 23 Q-55 30 -29 17 M-31 22 Q-19 17 -11 9', null, '#dc9967', 1);
      for (let j = 0; j < 7; j++) ellipse(c, -71 + 6.6 * j, 26 - 0.18 * j * j, 1.2, 0.9, '#e9bd7e');
      draw(c, 'M-81 30 Q-65 40 -44 32 Q-55 44 -74 42 Q-68 40 -67 38 Q-79 38 -81 30Z', charcoal);
    });
    draw(c, headShape, charcoal, '#60452f', 1.2);
    draw(
      c,
      'M-99 4 Q-97 13 -102 19 Q-90 15 -88 5Z M-83 5 L-82 12 L-76 5Z M-72 4 L-70 11 L-64 5Z M-61 5 Q-58 16 -64 23 Q-51 15 -50 7Z',
      '#ead3a0',
      charcoal,
      0.8,
    );
    draw(c, 'M-66 -23 Q-52 -37 -32 -28 Q-24 -23 -18 -27 Q-21 -16 -38 -16 Q-53 -14 -66 -23Z', '#a47a4c');
    draw(c, 'M-61 -23 Q-49 -31 -36 -24 Q-45 -16 -61 -23Z', '#9cbe91', '#211e20', 1.7);
    ellipse(c, -49 + 1.8 * wave(t, 5), -23.3, 2 + roar, 4.1, '#402b26');
    const blink = Math.max(0, wave(t, 8, 1.1)) ** 50;
    place(c, -49, -27.2, 1, 0.15 + 0.82 * blink, 0, (c) =>
      draw(c, 'M-12 4 Q-2 -3 12 3 Q2 10 -12 4Z', '#71523b'));
    ellipse(c, -49, -25, 1.05, 1.1, '#fff1c3');
    draw(c, 'M-70 -29 Q-53 -45 -34 -36 Q-19 -29 -15 -37 Q-15 -24 -30 -28 Q-49 -37 -63 -28Z', '#b7834d');
    draw(c, 'M-112 -18 Q-104 -25 -100 -13 Q-105 -16 -111 -13Z', '#bd965c');
    // Pierced cheek in the form of a curling fern.
    draw(
      c,
      'M-40 -4 C-17 -12 -2 -17 0 -30 C8 -18 -3 -8 -19 -5 C-4 -5 5 -9 14 -19 C16 -6 5 2 -10 4 C4 8 13 6 21 0 C17 10 6 16 -5 14 C-17 11 -26 1 -40 -4Z',
      '#8a5a3f',
    );
    draw(c, 'M-39 -4 Q-16 -8 -5 -18 M-19 -1 Q-4 -1 7 -9 M-10 6 Q5 11 15 5', null, '#d1a366', 1.45);
    for (let i = 0; i < 12; i++)
      ellipse(c, -87 + i * 4.4, -1.2 + Math.sin(i * 0.43) * 1.9, 1.1, 1.05, '#c19a60');
    draw(
      c,
      'M10 -19 Q26 -46 45 -43 Q40 -38 36 -31 Q51 -40 63 -37 Q56 -29 45 -24 Q55 -25 66 -20 Q51 -19 39 -10 Q49 -13 57 -7 Q43 -7 29 8 Q23 17 14 16 Q24 6 23 -2Z',
      charcoal,
    );
    draw(c, 'M20 -12 Q36 -29 45 -34 M28 -5 Q35 -13 48 -17', null, '#b98a52', 1.2);
    draw(c, 'M-32 -12 Q-16 -18 -8 -31 Q-7 -16 -22 -10Z', '#d16054', '#e4ad6d', 0.9);
    draw(c, 'M-19 -4 Q-5 -8 2 -18 Q3 -7 -12 -1Z M-8 3 Q5 3 13 -6 Q12 6 0 8Z',
      '#699e87', '#dcb378', 0.8);
    draw(c, 'M19 -17 Q30 -33 42 -37 Q34 -31 27 -19Z M29 -11 Q40 -23 53 -25 Q40 -20 34 -12Z',
      '#bd514d', '#dea46a', 0.72);
    for (let j = 0; j < 5; j++) {
      ellipse(c, -25 + j * 4.2, 7 + Math.sin(j * 0.6) * 3, 1.35, 1.15, '#e7b77a');
    }
    pin(c, -17, 12, 2.05);

  });
}
function claw(c, u, t, flip) {
  const { x, y } = ring(u, t);
  place(c, x, y, flip, 0.93, 0.09 * wave(t, 4, u * 39), (c) => {
    draw(
      c,
      'M-7 -6 Q-12 9 -17 18 L-41 27 L-50 45 Q-58 53 -62 51 Q-59 56 -52 53 L-42 45 Q-47 58 -54 60 Q-43 62 -38 50 L-30 40 Q-31 53 -36 56 Q-27 56 -24 42 L-22 34 L-7 29 Q1 28 6 17 L10 2Z',
      charcoal,
    );
    draw(c, 'M-7 4 Q-8 19 -17 22 L-34 29 M-27 33 L-37 40', null, '#bc8f57', 1.3);
    pin(c, -12, 21, 1.16);
    pin(c, -33, 31, 0.68);
  });
}
export const releaseAt = (u) => 30.5 + u * 4.8;
export function dragon(c, t) {
  if (t < 9.85 || t > 36.15) return;
  const nodes = Array.from({ length: 64 }, (_, i) => ring(i / 63, t));
  // Sew each plate over the adjacent one with a single uninterrupted belly contour.
  const start = clamp((t - 30.5) / 4.8);
  if (start < 1) {
    const piece = [ring(start, t), ...nodes.filter((_, i) => i / 63 > start)];
    const shape = new Path2D();
    for (const [side, seq] of [
      [-1, piece],
      [1, [...piece].reverse()],
    ]) {
      seq.forEach((p, i) => {
        const x = p.x - Math.sin(p.theta) * p.r * side,
          y = p.y + Math.cos(p.theta) * p.r * side;
        if (side === -1 && i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      });
    }
    shape.closePath();
    for (let i = 1; i < 32; i++) {
      const u = i / 35;
      if (u < start + 0.01) continue;
      const p = ring(u, t),
        k = p.r / 27;
      const matrix = new DOMMatrix()
        .translate(p.x, p.y)
        .rotate((p.theta * 180) / Math.PI)
        .scale(k, k);
      const cut = new Path2D(panelHoles);
      cut.ellipse(2, -9, 1.05, 1.05, 0, 0, TAU);
      shape.addPath(cut, matrix);
    }
    c.save();
    c.shadowColor = 'rgba(72,40,31,.38)';
    c.shadowBlur = 3;
    c.shadowOffsetY = 2;
    draw(c, shape, charcoal, '#624833', 1);
    c.restore();
    c.save();
    c.clip(shape, 'evenodd');
    const belly = new Path2D(),
      ventral = new Path2D();
    piece.forEach((p, i) => {
      const dx = -Math.sin(p.theta) * p.r,
        dy = Math.cos(p.theta) * p.r;
      if (!i) {
        belly.moveTo(p.x + dx * 0.68, p.y + dy * 0.68);
        ventral.moveTo(p.x + dx * 0.77, p.y + dy * 0.77);
      } else {
        belly.lineTo(p.x + dx * 0.68, p.y + dy * 0.68);
        ventral.lineTo(p.x + dx * 0.77, p.y + dy * 0.77);
      }
    });
    draw(c, belly, null, '#82523e', 2.2);
    draw(c, ventral, null, '#b98c56', 0.9);
    c.restore();
  }
  for (let i = 35; i >= 0; i--) {
    const u = i / 35;
    if (u + 0.008 < start) continue;
    vertebra(c, ring(u, t), i, t);
  }
  if (t < releaseAt(0.39)) claw(c, 0.39, t, -0.65);
  if (t < releaseAt(0.085)) claw(c, 0.085, t, 0.98);
  head(c, t, 1 - ease(30.55, 31.7, t));
  // A hot, ragged paper edge travels down the body as the sheets peel free.
  if (start > 0 && start < 1) {
    const p = ring(start, t),
      heat = Math.sin(Math.PI * start) ** 0.29;
    place(c, p.x, p.y, 1, 1, p.theta, (c) => {
      c.globalAlpha = heat;
      radial(c, 0, 0, p.r + 20, [
        [0, '#ffe7a7d9'],
        [0.46, '#eda45473'],
        [1, '#f3b45700'],
      ]);
      for (let j = 0; j < 9; j++) {
        const f = j / 8,
          y = p.r * (f * 2 - 1);
        const curl = 4 + 7 * (1 + wave(t, 21, j * 1.9));
        const strip = new Path2D();
        strip.moveTo(3, y);
        strip.bezierCurveTo(-8, y - 3, -curl, y + 4, -curl - 6, y - 8);
        strip.quadraticCurveTo(-curl, y - 2, 3, y - 2);
        strip.closePath();
        draw(c, strip, j % 3 === 1 ? '#b75c38' : '#efbc6e');
        const k = (t * 1.45 + j * 0.43) % 1;
        place(c, -curl - k * 20, y - 18 * k, 1 - k * 0.7, 1 - k * 0.7, k * 3 + j, (c) => {
          draw(c, 'M0 -3 L2.4 0 L0 3.9 L-1.9 0Z', '#ffe6a1');
        });
      }
    });
  }
  const [hx, hy] = jewel(t),
    power = ease(24, 30.55, t);
  if (t < 31.38) {
    place(c, hx, hy, 1, 1, 0, (c) => {
      c.globalAlpha *= 1 - ease(30.65, 31.38, t);
      radial(c, 0, 0, 24 + power * 28, [
        [0, '#ffcd8188'],
        [0.4, '#d887514d'],
        [1, '#f5ad6400'],
      ]);
      for (let j = 0; j < 8; j++)
        place(c, 0, 0, 1, 1, (j * TAU) / 8, (c) =>
          draw(c, 'M-3 -12 Q-6 -20 0 -23 Q5 -18 3 -12Z', '#ba8a50', ink, 0.9),
        );
      draw(c, 'M0 -15 Q6 -9 12 -5 Q12 5 0 17 Q-12 5 -12 -5 Q-5 -8 0 -15Z', '#a64038', '#e5bb75', 1.6);
      draw(c, 'M0 -11 L6 -4 L0 11 L-5 -3Z', power > 0.9 ? '#ffce75' : '#e7734d');
      stroke(
        c,
        [
          [-6, -4],
          [-1, -9],
        ],
        '#f4c17b',
        1,
      );
    });
  }
}
const rand = random(76);
const festival = Array.from({ length: 72 }, (_, i) => {
  const u = i / 71, birth = releaseAt(u);
  return {
    birth, origin: onSpine(u, birth), u, h: rand(), x: rand(), s: rand(), phase: rand() * TAU,
    kind: i % 3, layer: i % 12 === 4 ? 'front' : i % 4 === 0 ? 'far' : 'middle',
    tint: i % 7 === 3 ? 'jade' : i % 3 === 1 ? 'red' : 'amber',
  };
});
export function skyLanterns(c, t, layer) {
  if (t < 30.4 || t > 44.94) return;
  for (const k of festival) {
    const dt = t - k.birth;
    if (k.layer !== layer || dt < 0) continue;
    const [ox, oy] = k.origin, front = layer === 'front', far = layer === 'far';
    const life = clamp(dt / (9 + 1.4 * k.h));
    const spread = ease(0.1, 4.9, dt);
    // Successive plates travel around the same widening helix as they unfold.
    const curl = k.u * TAU * 2.5 + dt * (front ? 1.35 : 1.72);
    const radius = (1 - Math.exp(-dt * 1.35)) * (63 + k.s * 34) * Math.exp(-dt * 0.16);
    const x = ox + (k.x - 0.65) * 875 * spread + Math.cos(curl) * radius;
    const y = oy - dt * (16 + k.h * 28) + (k.s - 0.4) * 135 * spread + Math.sin(curl) * radius * 0.65;
    const grown = (0.42 + k.s * 0.58) * (front ? 1.42 : far ? 0.57 : 1);
    const size = grown * (0.30 + 0.70 * ease(0.1, 1.0, dt)) * (1 + dt * (front ? 0.04 : -0.012));
    c.save();
    c.globalAlpha = (far ? 0.72 : 1) * (1 - ease(0.82, 1, life)) * (1 - ease(42.8, 44.9, t));
    const open = ease(0.15, 0.85, dt);
    if (open < 1) {
      place(c, x, y, 0.95, 0.95, curl, (c) => {
        c.globalAlpha *= (1 - open) * ease(0, 0.18, dt);
        draw(c, panels[0], k.tint === 'jade' ? '#66be9a' : '#da695e', '#efbe7b', 1.1);
        draw(c, 'M-12 -13 L4 -6', null, '#fff3b5', 1);
      });
    }
    c.globalAlpha *= open;
    if (c.globalAlpha > 0.002)
      lantern(c, x, y, size, Math.sin(curl) * 0.16, t, k.tint, k.kind, 0.79);
    c.restore();
  }
}
