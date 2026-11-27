import { W, random, linear, draw, stroke, ellipse, place, sheet, wave } from './drawing.js';

function ridge(c, r, baseline, heights, color, shade, light) {
  const knots = heights.map(([x, y]) => [x, baseline - y]);
  const line = [];
  for (let i = 1; i < knots.length; i++) {
    const [xa, ya] = knots[i - 1],
      [xb, yb] = knots[i],
      steps = Math.ceil((xb - xa) / 4);
    for (let k = 0; k < steps; k++) {
      const f = k / steps,
        rough = Math.sin(f * Math.PI) * (r() - 0.5) * 6;
      line.push([xa + (xb - xa) * f, ya + (yb - ya) * f + rough]);
    }
  }
  line.push(knots.at(-1));
  const path = new Path2D();
  path.moveTo(line[0][0], baseline + 24);
  for (const p of line) path.lineTo(...p);
  path.lineTo(line.at(-1)[0], baseline + 24);
  path.closePath();
  draw(c, path, color);
  c.save();
  c.clip(path);
  // Each summit is engraved down one face with broken contour strokes.
  for (let i = 1; i < knots.length - 1; i++) {
    const [x, y] = knots[i],
      [nx, ny] = knots[i + 1];
    if (knots[i - 1][1] < y || ny < y) continue;
    const h = baseline - y,
      lean = (r() - 0.62) * h * 0.59;
    const flank = new Path2D();
    flank.moveTo(x, y);
    flank.bezierCurveTo(x + lean * 0.25, y + h * 0.31, x + lean, y + h * 0.36, x + lean - 8, baseline + 24);
    flank.lineTo(nx + 55, baseline + 24);
    flank.lineTo(nx, ny);
    flank.closePath();
    draw(c, flank, shade);
    for (let j = 0; j < 30; j++) {
      const u = r(),
        v = r() * 0.7,
        xx = x + u * (nx - x) * 0.89,
        yy = y + (ny - y) * u + v * h;
      const l = 4 + r() ** 1.5 * 33;
      c.beginPath();
      c.moveTo(xx, yy);
      c.bezierCurveTo(xx - 1, yy + l * 0.28, xx - 5, yy + l * 0.62, xx - 8 - r() * 6, yy + l);
      c.strokeStyle = j % 4 ? light : shade;
      c.lineWidth = r() * 0.9 + 0.5;
      c.stroke();
    }
  }
  c.restore();
}
const roof =
  'M-57 -7 Q-44 -3 -35 -7 Q-15 -14 -4 -22 L0 -27 L4 -21 Q17 -12 36 -7 Q46 -4 56 -10 Q53 -1 40 1 Q12 2 0 -1 Q-23 4 -44 2 Q-54 1 -57 -7Z';
function temple(c, x, y, s, col, trim) {
  place(c, x, y, s, s, 0, (c) => {
    draw(
      c,
      'M-38 0 L-38 -8 L-31 -9 L-30 -49 L30 -49 L31 -9 L39 -8 L39 0Z M-18 -10 L-17 -34 Q-10 -44 -3 -35 L-3 -10Z M6 -10 L6 -35 Q14 -42 21 -34 L21 -10Z',
      col,
    );
    for (const [dy, sz] of [
      [-47, 1],
      [-68, 0.75],
      [-84, 0.51],
    ]) {
      place(c, 0, dy, sz, sz, 0, (c) => {
        draw(c, 'M-24 0 L-23 -20 L24 -20 L25 0Z', col);
        draw(c, roof, col);
        draw(c, 'M-49 -5 Q-34 -1 0 -13 Q28 -4 47 -6', null, trim, 1.35);
      });
    }
    draw(c, 'M-8 -93 Q-4 -101 -2 -106 L0 -122 L2 -106 L8 -93Z', col);
    stroke(
      c,
      [
        [-47, 1],
        [44, 1],
      ],
      col,
      4,
    );
  });
}
export function landscape(scale) {
  const far = sheet(scale, (c) => {
    const r = random(22);
    c.filter = 'blur(' + 1.35 * scale + 'px)';
    ridge(
      c,
      r,
      456,
      [
        [-40, 61],
        [44, 96],
        [100, 82],
        [182, 147],
        [205, 151],
        [226, 192],
        [252, 211],
        [270, 176],
        [288, 177],
        [336, 123],
        [384, 134],
        [438, 92],
        [497, 131],
        [519, 128],
        [551, 160],
        [569, 183],
        [588, 188],
        [611, 146],
        [645, 122],
        [706, 83],
        [755, 118],
        [796, 106],
        [843, 137],
        [875, 150],
        [901, 136],
        [942, 205],
        [967, 223],
        [991, 206],
        [1021, 211],
        [1053, 158],
        [1080, 170],
        [1123, 117],
        [1179, 144],
        [1211, 198],
        [1240, 188],
        [1340, 98],
      ],
      '#c89f77',
      '#b88e6e',
      '#dfbc8a',
    );
  });
  const hills = sheet(scale, (c) => {
    const r = random(826);
    ridge(
      c,
      r,
      500,
      [
        [-40, 120],
        [20, 177],
        [50, 193],
        [83, 153],
        [105, 159],
        [144, 105],
        [189, 101],
        [222, 112],
        [260, 86],
        [300, 93],
        [324, 125],
        [345, 137],
        [360, 130],
        [380, 159],
        [394, 163],
        [412, 138],
        [431, 136],
        [460, 96],
        [514, 73],
        [566, 85],
        [610, 57],
        [667, 80],
        [711, 84],
        [753, 109],
        [779, 100],
        [824, 127],
        [854, 155],
        [872, 142],
        [889, 149],
        [925, 93],
        [975, 108],
        [1020, 88],
        [1074, 127],
        [1104, 155],
        [1125, 151],
        [1154, 181],
        [1172, 188],
        [1213, 138],
        [1315, 114],
      ],
      '#a38169',
      '#937266',
      '#c3a07d',
    );
    const bank = new Path2D(
      'M-20 422 Q58 377 114 392 Q210 368 285 425 Q358 446 415 428 Q492 392 534 414 Q604 453 685 446 Q752 440 803 417 Q846 396 895 400 Q953 377 1020 381 Q1095 370 1163 399 Q1240 393 1311 351 L1320 510 L-20 510Z',
    );
    draw(c, bank, '#826f60');
    for (let i = 0; i < 115; i++) {
      const x = 870 + r() * 276;
      const y = 397 - 12 * Math.sin(((x - 870) / 276) * Math.PI);
      const h = 3 + r() ** 2 * 16;
      stroke(
        c,
        [
          [x, y],
          [x + 1, y - h],
        ],
        '#80695a',
        1.2,
      );
      for (let k = 0; k < 3; k++) ellipse(c, x + (r() - 0.5) * 6, y - h + k * 2, 2 + r() * 3, 2, '#80695a');
    }
    // A small humpback footbridge spans the inlet below the distant temple.
    place(c, 893, 435, 0.75, 0.75, 0, (c) => {
      draw(
        c,
        'M-73 4 Q-51 -1 -36 -14 Q-15 -32 6 -31 Q31 -30 45 -14 Q58 0 77 4 L76 9 L39 9 Q33 -9 10 -14 Q-19 -19 -38 8 L-73 9Z',
        '#7d6b5b',
      );
      draw(c, 'M-69 1 Q-48 -5 -33 -18 Q-11 -37 10 -33 Q34 -31 47 -15 Q61 -1 72 0', null, '#83715d', 2.2);
      for (let j = -4; j <= 4; j++) {
        const xx = j * 14,
          yy = -32 + xx * xx * 0.009;
        stroke(
          c,
          [
            [xx, yy - 3],
            [xx, yy + 3],
          ],
          '#7d6b5b',
          1.9,
        );
      }
    });
    temple(c, 983, 388, 0.7, '#715c52', '#bfa17c');
    temple(c, 1044, 391, 0.39, '#80695c', '#bfa17c');
    const water = linear(c, 0, 435, 0, 672, [
      [0, '#bba781'], [0.14, '#cfb890'], [0.46, '#baaa87'], [0.78, '#a39277'], [1, '#71645c'],
    ]);
    draw(c, 'M-60 445 Q30 441 111 444 T261 443 Q338 437 406 443 T558 444 Q660 439 737 443 T872 443 Q930 438 1036 444 T1340 441 L1340 740 L-60 740Z', water);
    for (let i = 0; i < 1170; i++) {
      const x = r() * 1410 - 50,
        y = 447 + r() ** 1.17 * 247,
        len = (2 + r() ** 3 * 44) * (1 + (y - 446) / 430);
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + len * 0.35, y - 1, x + len, y);
      c.strokeStyle = i % 3 ? 'rgba(255,228,169,.48)' : 'rgba(110,87,64,.27)';
      c.lineWidth = 0.35 + r() * 0.95;
      c.stroke();
    }
    // Long, low islets separate the back shore from the bridge.
    draw(
      c,
      'M-20 464 Q50 443 102 450 Q178 429 223 452 Q249 451 278 458 Q310 457 341 463 Q232 469 -20 469Z M821 464 Q863 461 912 451 Q946 447 967 451 Q990 449 1021 445 Q1085 433 1122 441 Q1196 405 1310 414 L1310 467Z',
      '#978267',
    );
  });
  const bridge = sheet(scale, (c) => {
    // A splayed foot and wavering reflection anchor each pier in the water.
    for (const x of [143, 361, 591, 826, 1053, 1285]) {
      const foot = 'M-12 -9 L11 -9 L11 -6 L14 -5 L14 -2 L18 0 L16 2 L-16 2 L-19 0 L-14 -3 L-14 -6Z';
      place(c, x, 621, 1, 1, 0, (c) => {
        for (let j = 0; j < 10; j++) {
          const off = Math.sin(j * 2.3) * 3;
          stroke(
            c,
            [
              [-13 + off, 3 + j * 2],
              [(12 - j) * 1.4 + off, 3 + j * 2],
            ],
            'rgba(77,63,54,' + 0.24 * (1 - j / 10) + ')',
            1.6,
          );
        }
        draw(c, foot, '#59473b');
        stroke(
          c,
          [
            [-12, -5],
            [12, -5],
          ],
          '#bb976b',
          1,
        );
        stroke(
          c,
          [
            [-21, 3],
            [-8, 3.6],
          ],
          '#dbbd90',
          1.1,
        );
        stroke(
          c,
          [
            [6, 4],
            [23, 4],
          ],
          '#dbbd90',
          1,
        );
      });
    }
    bridgePattern(c);
  });
  const foreground = sheet(scale, (c) => {
    const r = random(702);
    draw(
      c,
      'M-10 548 Q73 536 136 571 Q179 581 198 599 Q224 609 251 613 Q281 624 321 631 Q330 635 356 640 Q269 649 227 654 L204 674 L-10 683Z M965 652 Q1009 643 1042 623 Q1067 614 1091 609 Q1137 581 1168 576 Q1214 550 1300 534 L1302 686 L955 687Z',
      '#493b36',
    );
    for (let i = 0; i < 70; i++) {
      const left = i % 2 === 0,
        x = left ? r() * 307 : 995 + r() * 300,
        y = left ? 559 + x * 0.27 : 645 - (x - 995) * 0.31;
      const h = (4 + r() ** 1.6 * 46) * (left ? 1 - x / 410 : (x - 900) / 380);
      place(c, x, y, 1, 1, r() * 0.4 - 0.2, (c) =>
        draw(
          c,
          new Path2D(
            'M0 8 Q-2 -8 -7 -' +
              h +
              ' Q0 -' +
              h * 0.68 +
              ' 1 1 Q3 -' +
              h * 0.8 +
              ' 9 -' +
              h * 1.1 +
              ' Q5 -4 4 7Z',
          ),
          '#493b36',
        ),
      );
    }
  });
  return { far, hills, bridge, foreground };
}
export const deck = (x) => 485 + 0.000116 * (x - 575) ** 2;
function bridgePattern(c) {
  const body = new Path2D();
  body.moveTo(-45, deck(-45));
  for (let x = -45; x <= 1335; x += 6) body.lineTo(x, deck(x));
  body.lineTo(1335, 637);
  body.lineTo(-45, 637);
  body.closePath();
  const spans = [
    [-75, 131],
    [155, 348],
    [374, 578],
    [604, 813],
    [839, 1040],
    [1065, 1274],
    [1297, 1482],
  ];
  for (const [a, b] of spans) {
    const m = (a + b) / 2,
      peak = deck(m) + 28;
    body.moveTo(a, 659);
    body.lineTo(a, 595);
    body.bezierCurveTo(a + 4, peak + 18, m - 35, peak, m, peak);
    body.bezierCurveTo(m + 43, peak, b - 4, peak + 23, b, 595);
    body.lineTo(b, 659);
    body.closePath();
  }
  c.save();
  // Restrict the holes to the stonework above water level.
  c.beginPath();
  c.rect(-60, 460, 1400, 155);
  c.clip();
  draw(c, body, '#514038');
  c.clip(body, 'evenodd');
  const r = random(372);
  for (let row = 0; row < 13; row++) {
    const y = 496 + row * 10;
    for (let x = -70 + (row % 2) * 17; x < 1340; x += 33) {
      stroke(
        c,
        [
          [x, y + 1],
          [x + 27 + r() * 5, y],
        ],
        'rgba(204,164,112,.24)',
        0.9,
      );
      stroke(
        c,
        [
          [x, y],
          [x - 2 + r() * 4, y + 7 + r() * 3],
        ],
        'rgba(204,164,112,.27)',
        1,
      );
    }
  }
  for (const [a, b] of spans) {
    const m = (a + b) / 2,
      peak = deck(m) + 28;
    for (const ofs of [3, 11, 14]) {
      const p = new Path2D();
      p.moveTo(a - ofs, 620);
      p.lineTo(a - ofs, 595);
      p.bezierCurveTo(a - ofs, peak + 13, m - 33, peak - ofs, m, peak - ofs);
      p.bezierCurveTo(m + 44, peak - ofs, b + ofs, peak + 21, b + ofs, 595);
      p.lineTo(b + ofs, 620);
      draw(c, p, null, ofs === 11 ? '#aa845c' : '#bb9569', ofs === 11 ? 1.8 : 0.9);
    }
    for (let j = 1; j < 20; j++) {
      const a0 = (j / 20) * Math.PI,
        x = m + (Math.cos(a0) * (b - a)) / 2,
        y = 596 - Math.sin(a0) * (596 - peak);
      stroke(
        c,
        [
          [x + Math.cos(a0) * 3, y - Math.sin(a0) * 3],
          [x + Math.cos(a0) * 11, y - Math.sin(a0) * 11],
        ],
        '#b18b61',
        1.3,
      );
    }
  }
  c.restore();
  function archLine(y, col, w) {
    const p = new Path2D();
    p.moveTo(-35, deck(-35) + y);
    for (let x = -35; x < 1330; x += 6) p.lineTo(x, deck(x) + y);
    draw(c, p, null, col, w);
  }
  archLine(-22, '#635044', 3);
  archLine(-19, '#af8962', 1);
  archLine(0, '#33272a', 5);
  archLine(5, '#ac8965', 1.6);
  archLine(8, '#332a2a', 2.2);
  for (let x = -20; x < 1320; x += 30) {
    const y = deck(x);
    draw(c, new Path2D('M' + (x - 2) + ' ' + y + 'l0 -26 q-4 -3 2 -8 q6 5 2 8 l0 26Z'), '#5b453a');
    if ((x + 20) % 90 === 0) {
      ellipse(c, x, y - 29, 3, 3, '#574038');
      stroke(
        c,
        [
          [x - 3, y - 26],
          [x + 3, y - 26],
        ],
        '#92714e',
        1.4,
      );
    }
  }
}
const leaf = 'M0 0 Q9 -5 27 -3 Q17 4 0 0Z';
export function bambooSheet(scale, right, back) {
  return sheet(scale, (c) => {
    const r = random(92 + (right ? 50 : 0) + (back ? 200 : 0));
    if (right) {
      c.translate(W, 0);
      c.scale(-1, 1);
    }
    const col = back ? '#806d52' : '#312a29',
      highlight = back ? '#ac936d' : '#7f684d';
    const stalks = back
      ? [
          [50, 235, 6],
          [93, 202, 5],
          [146, 122, 5],
          [153, -32, 5],
          [10, 65, 6],
        ]
      : [
          [87, 23, 11],
          [22, 147, 9],
          [105, -69, 10],
          [24, 225, 6],
          [142, 66, 6],
          [47, -28, 12],
        ];
    for (const [bx, tx, width] of stalks) {
      const bend = (r() - 0.3) * 65,
        point = (v) => [bx + (tx - bx) * v + Math.sin(v * Math.PI) * bend, 681 - v * 732];
      for (let j = 0; j < 12; j++) {
        const v = j / 12,
          [x, y] = point(v),
          [ex, ey] = point((j + 1) / 12),
          w = width * (1 - 0.52 * v);
        const p = new Path2D();
        p.moveTo(x - w / 2, y);
        p.lineTo(ex - w * 0.44, ey);
        p.lineTo(ex + w * 0.44, ey);
        p.lineTo(x + w / 2, y);
        p.closePath();
        draw(c, p, col);
        stroke(
          c,
          [
            [x - w * 0.31, y - 3],
            [ex - w * 0.27, ey + 3],
          ],
          highlight,
          0.7,
        );
        stroke(
          c,
          [
            [ex - w * 0.56, ey + 1],
            [ex + w * 0.56, ey - 1],
          ],
          col,
          2.9,
        );
        stroke(
          c,
          [
            [ex - w * 0.48, ey + 2.4],
            [ex + w * 0.48, ey + 0.8],
          ],
          highlight,
          0.9,
        );
        if (j < 2 || r() < 0.29) continue;
        const dir = r() < 0.36 ? -1 : 1,
          len = 32 + r() * (back ? 55 : 89),
          h = 12 + r() * 46;
        const branch = new Path2D();
        branch.moveTo(x, y);
        branch.quadraticCurveTo(x + dir * len * 0.47, y - h * 1.22, x + dir * len, y - h);
        draw(c, branch, null, col, 1.5);
        for (let k = 1; k < 10; k++) {
          const f = k / 10,
            xx = x + dir * len * f,
            yy = y - h * (2.44 * f - 1.44 * f * f),
            angle = (k % 2 ? -1 : 1) * (0.16 + r() * 0.9);
          place(c, xx, yy, dir * (0.45 + r() * 0.68), 0.72 + r() * 0.7, dir * angle, (c) =>
            draw(c, leaf, col),
          );
          if (!back && k % 3 === 0)
            place(c, xx, yy, dir * 0.78, 1, dir * (angle + 0.65), (c) => draw(c, leaf, col));
        }
      }
    }
  });
}
export function mist(c, t, storm, back) {
  c.save();
  c.globalAlpha = (back ? 0.44 : 0.29) + storm * 0.07;
  for (const [x, y, w, s] of [
    [255, 378, 271, 0.87],
    [685, 403, 226, 0.76],
    [980, 343, 215, 0.73],
    [474, 454, 175, 0.65],
  ]) {
    place(c, x + wave(t, 1, x) * 29 + storm * 21, y + (back ? 0 : 38), w / 210, s, 0, (c) => {
      draw(
        c,
        'M-125 5 Q-72 5 -46 0 Q-14 -8 11 -5 Q31 -3 49 -14 Q69 -24 87 -16 Q107 -7 126 -9 Q90 -2 76 -8 Q59 -13 44 -5 Q21 6 -5 2 Q-34 -1 -54 4 Q-83 9 -125 5Z',
        '#fce5b2',
      );
      draw(c, 'M-53 11 Q-23 4 -4 7 Q22 13 51 1 Q66 -5 77 -1', null, '#fce5b2', 1.4);
    });
  }
  c.restore();
}
