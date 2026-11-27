import { W, H, TAU, draw, ellipse, stroke, place, random, linear, sheet, lettering, wave } from './drawing.js';
export const aperture =
  'M40 101 Q40 91 51 88 Q71 86 75 63 L87 57 L1193 57 L1205 63 Q1209 86 1229 88 Q1240 91 1240 101 L1240 628 Q1238 648 1217 649 L63 649 Q42 646 40 628Z';
const vine =
  'M0 0 C18 4 27 -4 42 -4 C59 -4 70 6 90 0 M20 0 Q10 -7 6 -5 Q10 1 20 0Z M33 -3 Q25 -14 20 -10 Q22 -4 33 -3Z M44 -4 Q40 -15 33 -15 Q33 -8 44 -4Z M55 -3 Q67 -15 72 -12 Q70 -5 55 -3Z M67 0 Q82 -6 84 -5 Q82 0 67 0Z M31 -1 Q34 8 43 9 Q42 2 31 -1Z M48 -2 Q52 9 60 9 Q59 2 48 -2Z';
function rosette(c, x, y, r, col) {
  place(c, x, y, r / 12, r / 12, 0, (c) => {
    for (let j = 0; j < 8; j++)
      place(c, 0, 0, 1, 1, (j * TAU) / 8, (c) => draw(c, 'M0 -2 Q-5 -7 0 -12 Q5 -7 0 -2Z', col));
    ellipse(c, 0, 0, 2.3, 2.3, '#efc98a');
  });
}
function screw(c, x, y, r) {
  ellipse(c, x + 0.4, y + 1, r + 0.5, r + 0.5, '#2c201b');
  ellipse(
    c,
    x,
    y,
    r,
    r,
    linear(c, x - r, y - r, x + r, y + r, [
      [0, '#e1bd7e'],
      [0.35, '#ac8550'],
      [1, '#60432b'],
    ]),
  );
  stroke(
    c,
    [
      [x - r * 0.49, y + r * 0.28],
      [x + r * 0.49, y - r * 0.28],
    ],
    '#503b2b',
    0.9,
  );
}
function bracket(c) {
  const metal = linear(c, 0, 0, 45, 40, [
    [0, '#a27b46'],
    [0.17, '#d1ac70'],
    [0.34, '#936b3e'],
    [0.6, '#a58151'],
    [1, '#533c29'],
  ]);
  draw(
    c,
    'M4 4 L104 4 L91 10 Q84 13 79 10 L44 12 Q33 13 30 23 Q28 29 18 32 L12 47 L11 74 Q12 82 5 88Z',
    metal,
    '#3b2c22',
    1,
  );
  draw(c, 'M9 8 L75 8 M9 10 L9 61 M16 24 Q23 23 25 17 Q28 11 36 10', null, '#e2bd82', 0.9);
  screw(c, 16, 16, 3.8);
  screw(c, 59, 8, 1.9);
  screw(c, 8, 51, 1.9);
}
function spandrel(c) {
  // Pierced corner: carved flame, split palm, two nested scrolling tendrils.
  const p =
    'M0 1 L172 1 Q149 4 140 13 Q139 8 142 7 Q120 8 112 22 Q110 27 102 28 Q109 19 105 15 Q91 14 82 32 Q83 20 74 22 Q60 25 58 39 Q57 48 46 50 Q51 44 48 38 Q33 41 30 55 Q25 69 16 77 Q18 69 16 65 Q5 77 0 98Z M22 41 Q21 22 42 16 Q55 13 60 18 Q34 19 22 41Z M58 21 Q69 10 83 10 Q71 16 58 21Z M9 64 Q9 43 20 36 Q14 49 9 64Z';
  draw(c, p, '#39271f', '#a87d46', 1.35);
  draw(
    c,
    'M4 71 Q9 29 40 16 Q63 7 94 7 M34 32 Q46 24 57 28 Q65 30 62 37 M75 18 Q84 10 101 10',
    null,
    '#be9358',
    1.1,
  );
  for (const [x, y, s] of [
    [14, 32, 6],
    [41, 12, 5],
    [107, 6, 4],
  ])
    rosette(c, x, y, s, '#ba8d50');
}
const silk = ['#641e2b', '#b83f42', '#e97a5a', '#882737', '#ce5354', '#f39a68'];
const knot =
  'M0 0 C-3 7 -10 8 -8 13 C-6 18 0 11 5 7 C11 2 13 9 8 14 L-3 24 ' +
  'C-9 30 -15 22 -9 17 L2 7 C8 1 14 8 8 14 L-3 25 Q-1 28 0 30 ' +
  'M0 0 C3 7 10 8 8 13 C6 18 0 11 -5 7 C-11 2 -13 9 -8 14 L3 24 ' +
  'C9 30 15 22 9 17 L-2 7 C-8 1 -14 8 -8 14 L3 25 Q1 28 0 30';
function silkTassel(c, t, phase, storm, glow) {
  const angle = wave(t, 4, phase) * 0.045 + wave(t, 7, phase) * 0.022 + storm * wave(t, 15, phase) * 0.074;
  c.rotate(angle);
  draw(c, 'M-1 0 Q-3 11 0 17 Q3 10 1 0Z', '#922e38', '#da9260', 0.75);
  c.translate(0, 16);
  draw(c, knot, null, '#4c2329', 4.3);
  draw(c, knot, null, '#bf4942', 2.7);
  draw(c, knot, null, '#efaa6f', 0.65);
  ellipse(c, 0, 30, 4, 5.7, '#803746', '#edb778', 0.85);
  ellipse(c, -1, 28.2, 1, 1.5, '#ffcc8a');
  c.translate(0, 35);
  c.rotate(0.055 * wave(t, 4, phase - 0.8) + storm * 0.055 * wave(t, 15, phase - 0.9));
  draw(c, 'M-4 1 Q-10 16 -9 39 Q-10 46 -12 51 Q-5 49 -4 53 L-1 51 L3 54 L6 50 L10 51 Q7 44 8 33 Q10 15 4 1Z',
    linear(c, -11, 3, 10, 9, [[0, '#762737'], [0.31, '#c94446'], [0.49, '#e4634c'], [0.72, '#a43040'], [1, '#682535']]));
  for (let j = 0; j < 26; j++) {
    const u = j / 25 * 2 - 1, end = 47 + 5 * Math.cos(j * 2.71) + 3 * Math.sin(j);
    const slip = 3 * wave(t, 5, phase + u) + storm * 3 * wave(t, 16, phase + u * 0.8);
    c.beginPath();
    c.moveTo(u * 4.1, 1);
    c.bezierCurveTo(u * 9, 12, u * 6.4 + slip, 33, u * 10.5 + slip, end);
    c.strokeStyle = silk[j % silk.length];
    c.lineWidth = j % 3 ? 0.7 : 1.05;
    c.stroke();
  }
  draw(c, 'M-4 -3 Q0 -6 4 -3 L5 2 Q0 5 -5 2Z', '#b58950', '#4e3629', 1);
  draw(c, 'M-4 -1 Q0 1 4 -1 M-4 2 Q0 4 4 2', null, '#ffd99c', 0.9);
  c.globalAlpha *= glow;
  draw(c, 'M-3 -2 L0 -3', null, '#fff2bc', 1.5);
}
export function trimmings(c, t, lamps, storm) {
  for (const side of [0, 1]) {
    const glow = lamps[side * 2].strength;
    c.save();
    if (side) { c.translate(W, 0); c.scale(-1, 1); }
    const dip = 2 * wave(t, 3, side * 2) + storm * 2 * wave(t, 12, side);
    c.beginPath();
    c.moveTo(47, 64);
    c.bezierCurveTo(69, 85 + dip, 114, 89 + dip, 152, 56);
    c.strokeStyle = '#50252a';
    c.lineWidth = 3.2;
    c.stroke();
    c.strokeStyle = '#c08052';
    c.lineWidth = 1.25;
    c.setLineDash([2.2, 1.9]);
    c.stroke();
    c.setLineDash([]);
    place(c, 152, 56, 0.96, 0.96, 0, (c) => silkTassel(c, t, 0.8 + 2.6 * side, storm, glow));
    for (const [x, y, r] of [[152, 55, 6.1], [47, 64, 3.3], [16, 16, 4.3], [16, H - 13, 3.9]]) {
      ellipse(c, x, y, r + 1.5, r + 1.5, '#412922', '#bd9257', 0.8);
      screw(c, x, y, r);
      c.save();
      c.globalAlpha = 0.25 + glow * 0.74;
      ellipse(c, x - r * 0.35 + wave(t, 3, side) * 0.5, y - r * 0.45, r * 0.37, r * 0.19, '#fff0b1', null, 0, -0.5);
      c.restore();
    }
    c.restore();
  }
}
export function cabinet(scale) {
  return sheet(scale, (c) => {
    const r = random(531);
    c.fillStyle = linear(c, 0, 0, 100, H, [
      [0, '#2a1d19'],
      [0.048, '#503429'],
      [0.095, '#37241e'],
      [0.42, '#4c3026'],
      [0.87, '#36251f'],
      [1, '#211a19'],
    ]);
    c.fillRect(0, 0, W, H);
    for (let i = 0; i < 6000; i++) {
      const y = r() * H,
        x = r() * W,
        len = 3 + r() ** 2 * 109;
      c.beginPath();
      c.moveTo(x, y);
      c.bezierCurveTo(x + len * 0.3, y - 1 - r() * 1.6, x + len * 0.5, y + 1.6, x + len, y - 0.6);
      c.lineWidth = 0.3 + r() * 0.7;
      c.strokeStyle = i % 3 ? 'rgba(214,146,91,.12)' : 'rgba(14,9,9,.36)';
      c.stroke();
    }
    c.save();
    c.globalCompositeOperation = 'destination-out';
    draw(c, aperture, 'black');
    c.restore();
    for (const [pad, color, width] of [
      [2, '#140f10', 3],
      [5, '#9a774a', 1],
      [11, '#251b18', 2],
      [14, '#85633d', 1],
      [18, '#36241d', 2],
    ]) {
      c.strokeStyle = color;
      c.lineWidth = width;
      c.strokeRect(pad, pad, W - pad * 2, H - pad * 2);
    }
    draw(c, aperture, null, '#1e1816', 9);
    draw(c, aperture, null, '#b79259', 3.2);
    draw(c, aperture, null, '#4e3927', 1.1);
    for (const flip of [false, true]) {
      c.save();
      if (flip) {
        c.translate(W, 0);
        c.scale(-1, 1);
      }
      c.fillStyle = linear(c, 16, 0, 38, 0, [
        [0, '#38271f'],
        [0.36, '#654a36'],
        [0.58, '#493526'],
        [1, '#2a211d'],
      ]);
      c.fillRect(17, 88, 19, 551);
      for (let y = 102; y <= 631; y += 32) {
        place(c, 26, y, 1, 1, 0, (c) => {
          draw(c, 'M0 -12 Q2 -6 6 0 Q2 7 0 12 Q-2 7 -6 0 Q-2 -6 0 -12Z', null, '#a07d4d', 0.8);
          draw(c, 'M0 -5 Q4 0 0 5 Q-4 0 0 -5Z', '#987347');
        });
        ellipse(c, 26, y + 16, 1.1, 1.1, '#c3a06b');
      }
      place(c, 41, 57, 1, 1, 0, spandrel);
      place(c, 41, 649, 1, -0.55, 0, spandrel);
      // A band of chased scallops runs under the brass gallery.
      for (let x = 65; x < 630; x += 13)
        place(c, x, 53, 1, 1, 0, (c) =>
          draw(c, 'M-6 0 L0 -4 L6 0 M-2 0 L0 -1.6 L2 0', null, '#bf975c', 0.79),
        );
      for (const y of [51, 655, 660]) {
        stroke(
          c,
          [
            [39, y],
            [639.9, y],
          ],
          y === 655 ? '#d5ad70' : '#947044',
          y === 655 ? 1.4 : 0.8,
        );
      }
      place(c, 0, 0, 1, 1, 0, bracket);
      place(c, 0, 720, 1, -0.81, 0, bracket);
      c.restore();
    }
    // Title cartouche set into the crown rail.
    draw(
      c,
      'M362 11 L918 11 L931 20 L944 29 L931 35 L919 46 L361 46 L350 37 L335 29 L350 20Z',
      '#30231e',
      '#a88554',
      1,
    );
    draw(c, 'M365 14 L915 14 M365 43 L915 43', null, '#775b3e', 0.7);
    lettering(c, 'The Shadow Theater of Oiled Rice Paper', 640, 29, '22px Georgia, serif', '#f0d49e', 0.75);
    for (const s of [-1, 1]) {
      place(c, 640 + s * 304, 31, s, 1, 0, (c) => draw(c, vine, '#a78150', '#c29a61', 0.64));
      place(c, 640 + s * 402, 29, s, 1, 0, (c) => {
        stroke(
          c,
          [
            [0, 0],
            [120, 0],
          ],
          '#88653e',
          0.8,
        );
        rosette(c, 3, 0, 5.5, '#d1a566');
      });
    }
    c.fillStyle = linear(c, 0, 662, 0, 718, [
      [0, '#241c19'],
      [0.45, '#32251f'],
      [1, '#241b18'],
    ]);
    c.fillRect(35, 664, 1210, 49);
    draw(
      c,
      'M480 666 L800 666 Q802 677 814 685 Q802 692 800 705 L480 705 Q479 694 466 685 Q479 677 480 666Z',
      '#32271f',
      '#896b43',
      1,
    );
    for (const x of [485, 795]) screw(c, x, 685, 2.3);
    for (const s of [-1, 1])
      place(c, 640 + s * 166, 686, s * 0.66, 0.63, 0, (c) => draw(c, vine, '#937044', '#af8550', 0.7));
  });
}
export function innerShade(scale) {
  return sheet(scale, (c) => {
    c.save();
    c.clip(new Path2D(aperture));
    const grad = linear(c, 0, 54, 0, 650, [
      [0, 'rgba(48,26,20,.5)'],
      [0.075, 'rgba(83,45,21,.07)'],
      [0.21, 'rgba(70,46,24,0)'],
      [0.7, 'rgba(67,39,24,0)'],
      [1, 'rgba(49,31,24,.27)'],
    ]);
    c.fillStyle = grad;
    c.fillRect(37, 54, 1207, 600);
    c.fillStyle = linear(c, 40, 0, 1240, 0, [
      [0, 'rgba(53,35,25,.47)'],
      [0.12, 'rgba(65,45,28,.08)'],
      [0.28, 'rgba(60,42,25,0)'],
      [0.73, 'rgba(60,42,25,0)'],
      [0.88, 'rgba(65,45,28,.06)'],
      [1, 'rgba(49,29,23,.5)'],
    ]);
    c.fillRect(38, 53, 1205, 600);
    c.restore();
  });
}
const acts = [
  ['I', 'The Crossing'],
  ['II', 'The Storm Dragon'],
  ['III', 'The Gift of Fire'],
  ['IV', 'A Sky of Lanterns'],
];
export function nameplate(c, t) {
  let i = t < 10 ? 0 : t < 24 ? 1 : t < 36 ? 2 : 3;
  const end = [10, 24, 36, 45][i],
    start = [0, 10, 24, 36][i];
  const u = Math.min(1, Math.max(0, Math.min(t - start, end - t) / 0.5));
  // The first inscription returns before the final frame.
  if (t > 43.5) i = 0;
  c.save();
  c.globalAlpha =
    t < 1 || t > 44 ? 1 : t > 43 ? 0.62 + 0.38 * Math.min(1, Math.abs(t - 43.5) * 2) : 0.62 + 0.38 * u;
  lettering(
    c,
    'ACT ' + acts[i][0] + '   ·   ' + acts[i][1].toUpperCase(),
    640,
    686,
    '13px Georgia, serif',
    '#e7cb98',
    1.65,
  );
  c.restore();
}
