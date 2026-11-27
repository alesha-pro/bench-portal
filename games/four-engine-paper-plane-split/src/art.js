import {
  W,
  H,
  TAU,
  clamp,
  rng,
  ridge,
  water,
  trees,
  colors,
  mill,
  cottages,
  cloudLobes,
} from './world.js';

export const makeCanvas = (w, h) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
};
export function poly(g, pts, fill, stroke, width = 1) {
  g.beginPath();
  g.moveTo(...pts[0]);
  for (const p of pts.slice(1)) g.lineTo(...p);
  if (fill) {
    g.closePath();
    g.fillStyle = fill;
    g.fill();
  }
  if (stroke) {
    g.strokeStyle = stroke;
    g.lineWidth = width;
    g.stroke();
  }
}
export function oval(g, x, y, rx, ry, fill, angle = 0) {
  g.beginPath();
  g.ellipse(x, y, Math.max(rx, 0.03), Math.max(ry, 0.03), angle, 0, TAU);
  g.fillStyle = fill;
  g.fill();
}
function gradient(g, x, y, x2, y2, stops) {
  const q = g.createLinearGradient(x, y, x2, y2);
  stops.forEach(([v, c]) => q.addColorStop(v, c));
  return q;
}
function orb(g, x, y, rx, ry, stops) {
  g.save();
  g.translate(x, y);
  g.scale(rx, ry);
  const q = g.createRadialGradient(-0.37, -0.48, 0.04, 0, 0, 1.13);
  stops.forEach(([a, b]) => q.addColorStop(a, b));
  oval(g, 0, 0, 1, 1, q);
  g.restore();
}
function inkLine(g, pts, col, width = 1) {
  poly(g, pts, null, col, width);
}
function hillPath(g, l) {
  g.beginPath();
  g.moveTo(-2, H + 5);
  for (let x = -2; x <= W + 4; x += 3) g.lineTo(x, ridge(l, x));
  g.lineTo(W + 4, H + 5);
  g.closePath();
}
export function sky(s, g) {
  const pal = colors[s],
    r = rng(4458);
  g.fillStyle = gradient(g, 0, 18, 0, 510, [
    [0, pal.sky[0]],
    [0.65, pal.sky[1]],
    [1, pal.sky[2]],
  ]);
  g.fillRect(0, 0, W, H);
  // Long, broken cirrus marks establish the farthest depth plane.
  const wisps = ['#f6edce', '#fff2c5', '#c781b8', '#fff1d7'];
  for (let i = 0; i < 220; i++) {
    const x = r() * W,
      y = 135 + r() * 260;
    g.globalAlpha = 0.027 + r() * 0.065;
    oval(g, x, y, 8 + r() * 76, 0.23 + r() * 1.4, wisps[s], -0.032);
  }
  g.globalAlpha = 1;
  if (s === 2) {
    for (let i = 0; i < 470; i++) {
      const x = r() * W,
        y = r() * 380;
      g.globalAlpha = 0.22 + r() * 0.62;
      oval(g, x, y, r() * 0.95 + 0.24, r() * 0.85 + 0.2, '#d9def9');
      if (i % 50 === 0) {
        g.fillRect(x - 2, y, 4, 0.54);
        g.fillRect(x, y - 2, 0.54, 4);
      }
    }
    g.globalAlpha = 1;
  }
  const x = 1030,
    y = 257,
    rad = 38;
  const glow = g.createRadialGradient(x, y, rad * 0.6, x, y, rad * 4.1);
  glow.addColorStop(0, ['#ffe9a489', '#fff0ae68', '#ff669a70', '#ffdb8fb0'][s]);
  glow.addColorStop(1, '#fff0b000');
  g.fillStyle = glow;
  g.fillRect(x - rad * 4.2, y - rad * 4.2, rad * 8.4, rad * 8.4);
  g.save();
  g.beginPath();
  g.arc(x, y, rad, 0, TAU);
  g.clip();
  g.fillStyle = gradient(g, 0, y - rad, 0, y + rad, [
    [0, ['#fff1be', '#fff0bc', '#ffe5a0', '#fff7cd'][s]],
    [1, ['#ffdea3', '#ffe799', '#ff669c', '#ffe7af'][s]],
  ]);
  if (s === 2) {
    for (let yy = -rad; yy < rad; yy += 5)
      g.fillRect(x - rad, y + yy, rad * 2, 5 - Math.max(0, (yy + 10) / 19));
  } else g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  g.restore();
}
// Crests, snow lines and rock faces share the same profile in every medium.
const knots = [
  [-130, 390],
  [-45, 350],
  [34, 370],
  [113, 303],
  [143, 314],
  [195, 254],
  [220, 285],
  [244, 280],
  [312, 354],
  [380, 373],
  [437, 336],
  [468, 349],
  [525, 295],
  [569, 328],
  [601, 315],
  [675, 365],
  [720, 342],
  [795, 375],
  [874, 310],
  [902, 322],
  [947, 274],
  [1000, 338],
  [1034, 316],
  [1107, 363],
  [1160, 339],
  [1203, 354],
  [1274, 294],
  [1303, 302],
  [1353, 248],
  [1392, 295],
  [1415, 283],
  [1460, 339],
  [1504, 314],
  [1558, 350],
  [1630, 300],
  [1715, 340],
];
function rocky(x) {
  return 3 * Math.sin(x * 0.107) + 1.8 * Math.sin(0.247 * x) + 1.2 * Math.sin(0.57 * x);
}
function mountainY(x) {
  let k = 1;
  while (k < knots.length - 1 && x > knots[k][0]) k++;
  const [a, b] = knots[k - 1],
    [c, d] = knots[k];
  return b + ((d - b) * (x - a)) / (c - a) + rocky(x);
}
function mountains(g, s) {
  const pal = colors[s],
    r = rng(908);
  g.save();
  const edge = [];
  for (let x = -2; x <= W + 3; x += 3) edge.push([x, mountainY(x)]);
  poly(g, [...edge, [W + 3, 552], [-2, 552]], pal.mount[0], s === 1 ? '#576f66' : null, 1.3);
  g.clip();
  // Traverse the mountain from its crest toward the camera. Surface derivatives
  // control the pigments and the amount of retained snow on each rock face.
  const base = [
    [91, 118, 125],
    [127, 157, 145],
    [79, 54, 100],
    [150, 137, 125],
  ][s];
  const snow = [
    [223, 228, 212],
    [241, 236, 207],
    [193, 146, 191],
    [238, 221, 195],
  ][s];
  const illum = (x, d) => {
    const shift = d * (27 + 17 * Math.sin(x * 0.015) + 13 * Math.sin(x * 0.031 - d * 3));
    const spine = mountainY(x - shift),
      v = Math.sin(d * Math.PI);
    const f =
      Math.sin(x * 0.094 - d * 4 + 0.7 * Math.sin(x * 0.019 + d * 7)) * 0.55 +
      Math.sin(x * 0.21 + d * 15) * 0.18 +
      Math.sin(x * 0.048 + d * 6.9) * 0.49;
    return spine + (469 - spine) * d + v * (f * 23 + 12 * Math.sin(x * 0.033 - d * 8));
  };
  const step = s === 1 ? 6 : 3,
    rows = 40,
    prev = new Float32Array(Math.ceil(W / step) + 3);
  for (let j = 0; j < prev.length; j++) prev[j] = illum(j * step - 2, 0);
  for (let k = 1; k <= rows; k++) {
    const d = k / rows,
      front = new Float32Array(prev.length);
    for (let j = 0; j < front.length; j++) front[j] = illum(j * step - 2, d);
    for (let j = 0; j < front.length - 1; j++) {
      const x = j * step - 2,
        yy = (prev[j] + front[j + 1]) * 0.5;
      const dx = (front[j + 1] - front[j]) / step,
        dz = (front[j] - prev[j]) / (140 / rows);
      let light = clamp(
        ((-0.77 * dx + 0.35 * dz + 0.39) / Math.hypot(dx, dz, 1)) * 0.57 + 0.55,
        0,
        1,
      );
      let cap = clamp(
        (321 - yy + dx * 7 - Math.max(0, dz - 1) * 13 + 5 * Math.sin(x * 0.1 + d * 10)) / 10,
        0,
        1,
      );
      if (s === 1) {
        light = Math.round(light * 3) / 3;
        cap = Math.round(cap);
      }
      const c = base.map((v, i) =>
        Math.round(
          clamp(
            (v * (0.69 + light * 0.52) + light * 13) * (1 - cap) +
              snow[i] * (0.76 + light * 0.25) * cap +
              d * 6,
            0,
            255,
          ),
        ),
      );
      const tone = 'rgb(' + c.join(',') + ')';
      poly(
        g,
        [
          [x, prev[j] - 0.5],
          [x + step + 0.5, prev[j + 1] - 0.5],
          [x + step + 0.5, front[j + 1] + 0.5],
          [x, front[j] + 0.5],
        ],
        tone,
      );
    }
    prev.set(front);
  }
  g.restore();
  const foothills = [];
  for (let x = 0; x <= W + 4; x += 4)
    foothills.push([
      x,
      389 + Math.sin(x * 0.0076) * 25 + Math.sin(x * 0.019 + 1) * 13 + rocky(x) * 0.45,
    ]);
  poly(
    g,
    [...foothills, [W + 4, 560], [0, 560]],
    ['#8fa9a4', '#adc4af', '#694571', '#afa796'][s],
    s === 1 ? '#4e7266' : null,
    1.6,
  );
}
function paintedLand(g, s) {
  const pal = colors[s],
    r = rng(38481);
  for (let l = 0; l < 5; l++) {
    g.save();
    hillPath(g, l);
    g.fillStyle =
      s === 1
        ? pal.hill[l]
        : gradient(g, 0, 390 + l * 70, 0, 540 + l * 80, [
            [0, pal.light[l]],
            [0.46, pal.hill[l]],
            [1, pal.shade[l]],
          ]);
    g.fill();
    if (s === 1) {
      g.strokeStyle = pal.ink;
      g.lineWidth = 2.1;
      g.stroke();
    }
    g.clip();
    for (let a = 0; a < (s === 1 ? 17 : 270); a++) {
      const x = r() * W,
        y = ridge(l, x) + r() * 179,
        w = (s === 1 ? 27 : 9) + r() * 83;
      g.globalAlpha = s === 1 ? 0.3 : 0.075 + r() * 0.11;
      const col = r() > 0.49 ? pal.light[l] : pal.shade[l];
      g.beginPath();
      g.moveTo(x, y);
      g.bezierCurveTo(x + w * 0.34, y - 8, x + w * 0.68, y - 9, x + w, y - 12);
      g.quadraticCurveTo(x + w * 0.46, y + 8, x, y);
      g.fillStyle = col;
      g.fill();
    }
    if (s === 0)
      for (let j = 0; j < 4300; j++) {
        const x = r() * W,
          y = ridge(l, x) + r() * 159,
          d = 1 + r() * 8;
        g.globalAlpha = 0.11 + r() * 0.22;
        inkLine(
          g,
          [
            [x, y],
            [x + d, y - 1.6 + r() * 2],
          ],
          r() > 0.46 ? pal.light[l] : pal.shade[l],
          0.35 + r() * 1.9,
        );
      }
    g.restore();
  }
}
function tree(g, s, x, y, h, seed, round) {
  const pal = colors[s],
    r = rng(seed),
    k = h / 24;
  g.save();
  g.translate(x, y);
  g.scale(k, k);
  if (h > 12) oval(g, 4.7, 0, 8.7, 1.65, s === 2 ? '#0a193d9e' : '#43523b41', -0.13);
  g.fillStyle = pal.trunk;
  g.fillRect(-0.75, -10, 1.65, 10);
  if (round) {
    for (let i = 0; i < 7; i++) {
      const a = i * 2.4,
        rx = 4 + r() * 2.5,
        xx = Math.cos(a) * (i === 0 ? 0 : 4.2),
        yy = -14 + Math.sin(a) * 4.2;
      if (s === 3)
        orb(g, xx, yy, rx, rx * 1.19, [
          [0, pal.leaf[2]],
          [0.55, pal.leaf[1]],
          [1, pal.leaf[0]],
        ]);
      else oval(g, xx, yy, rx, rx * 1.18, pal.leaf[i < 3 ? 0 : i % 3]);
    }
  } else {
    for (let i = 2; i >= 0; i--) {
      const cy = -24 + i * 5.4,
        rr = 3.65 + i * 1.6;
      const shape = [
        [0, cy - 2.5],
        [-rr * 0.64, cy + 5.8],
        [-rr * 0.58, cy + 6],
        [-rr, cy + 10],
        [rr * 0.2, cy + 10.7],
        [rr * 1.02, cy + 9.6],
        [rr * 0.62, cy + 6.9],
        [rr * 0.74, cy + 7],
      ];
      poly(
        g,
        shape,
        s === 3
          ? gradient(g, -rr, cy, rr, cy + 3, [
              [0, pal.pine[2]],
              [0.47, pal.pine[1]],
              [1, pal.pine[0]],
            ])
          : pal.pine[i === 2 ? 0 : 1],
        s === 1 && h > 13 ? pal.ink : null,
        0.7,
      );
      if (s !== 3)
        poly(
          g,
          [
            [0, cy],
            [-rr * 0.94, cy + 9.5],
            [-rr * 0.23, cy + 8.2],
            [0, cy + 5.4],
          ],
          pal.pine[2],
        );
      if (s === 2)
        inkLine(
          g,
          [
            [0, cy - 2.5],
            [-rr, cy + 10],
            [rr * 0.5, cy + 10.2],
          ],
          '#76bdc2',
          0.42,
        );
    }
  }
  g.restore();
}
function river(g, s) {
  const pal = colors[s],
    r = rng(660),
    width = (x) => 9 + 8 * (1 + Math.sin(x * 0.007 + 1)) + 5 * Math.sin(x * 0.022);
  const edge = (x, side) => water(x) + side * width(x);
  const pts = [];
  for (let x = 0; x <= W; x += 4) pts.push([x, edge(x, -1)]);
  for (let x = W; x >= 0; x -= 4) pts.push([x, edge(x, 1)]);
  g.save();
  poly(g, pts, pal.water, s === 2 ? '#6cdaed' : pal.shade[3], s === 1 ? 2.8 : 2);
  g.clip();
  for (let i = 0; i < 1800; i++) {
    const x = r() * W,
      y = water(x) + (r() * 2 - 1) * width(x),
      w = r() * 13;
    g.globalAlpha = 0.22 + r() * 0.49;
    inkLine(
      g,
      [
        [x, y],
        [x + w, y - 0.5],
      ],
      r() > 0.32 ? pal.foam : pal.shade[1],
      0.33 + r() * 1.4,
    );
  }
  g.restore();
  for (let i = 0; i < 310; i++) {
    const x = r() * W,
      y = edge(x, r() > 0.5 ? 1 : -1),
      a = 1 + r() * 2.8;
    oval(g, x, y, a, a * 0.43, pal.shade[2]);
    oval(g, x - 0.3, y - 0.5, a * 0.77, a * 0.22, pal.light[2]);
  }
}
function fieldRows(g, s) {
  const pal = colors[s],
    r = rng(5448);
  for (let l = 2; l < 5; l++) {
    g.save();
    if (l < 4) {
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 4) g.lineTo(x, ridge(l + 1, x));
      g.closePath();
      g.clip();
    }
    for (const [x0, len] of [
      [-55, 189],
      [342, 240],
      [797, 204],
      [1245, 154],
      [1480, 161],
    ]) {
      let prev = null;
      for (let x = x0; x < x0 + len; x += 14 + l * 2) {
        const y = ridge(l, x) + 12 + 5 * Math.sin(x * 0.017 + l),
          h = 2.4 + l * 1.05;
        if (prev) {
          inkLine(
            g,
            [
              [prev[0], prev[1] - h * 0.72],
              [x, y - h * 0.72],
            ],
            s === 2 ? '#4d99ac' : pal.trunk,
            0.65 + l * 0.13,
          );
        }
        inkLine(
          g,
          [
            [x + 0.5, y + 0.5],
            [x - 0.2, y - h],
          ],
          pal.trunk,
          1 + l * 0.22,
        );
        inkLine(
          g,
          [
            [x - 0.55, y - h],
            [x - 0.45, y - 1],
          ],
          pal.light[l],
          0.6,
        );
        prev = [x, y];
      }
    }
    if (s !== 2)
      for (let j = 0; j < 12; j++) {
        const x0 = 50 + j * 12 + l * 9;
        g.globalAlpha = 0.35;
        const pts = [];
        for (let k = 0; k <= 15; k++) {
          const x = x0 + k * 6 + j * k * 0.14;
          pts.push([x, ridge(l, x) + 10 + k * k * 0.24]);
        }
        inkLine(g, pts, pal.light[l], 2);
      }
    g.restore();
    for (let i = 0; i < (l === 4 ? 2400 : 1050); i++) {
      const x = r() * W,
        y = ridge(l, x) + r() * (l === 4 ? 180 : 73);
      if ((l < 4 && y > ridge(l + 1, x) - 1) || (l === 3 && Math.abs(y - water(x)) < 25)) continue;
      const len = (0.7 + r() * 2.1) * (1 + (l - 2) * 0.75);
      g.globalAlpha = 0.32 + r() * 0.55;
      const color = r() > 0.57 ? pal.shade[l] : pal.light[l];
      inkLine(
        g,
        [
          [x - len * 0.52, y - len * 0.64],
          [x, y],
          [x + len * 0.25, y - len],
        ],
        color,
        s === 2 ? 0.55 : 0.65 + r() * 0.6,
      );
    }
    g.globalAlpha = 1;
  }
}
export function cottage(g, s, x, y, k) {
  const p = colors[s],
    night = s === 2,
    vec = s === 1;
  g.save();
  g.translate(x, y);
  g.scale(k, k);
  const line = vec ? '#283d39' : night ? '#78c5d3' : '#654f42',
    w = vec ? 1.7 : night ? 0.92 : 0.68;
  oval(g, 6, 0, 43, 5.2, night ? '#101f36ad' : '#43513b58');
  const wall = night ? '#3d4961' : s === 3 ? '#ebcb91' : '#f1ddae',
    side = night ? '#29324a' : '#bbab80';
  const roof = night ? '#744767' : s === 1 ? '#d56b50' : '#ae5b46',
    lightRoof = night ? '#c56f9e' : '#d48a67';
  poly(
    g,
    [
      [-28, -25],
      [-7, -43],
      [8, -22],
      [8, 0],
      [-28, -1],
    ],
    wall,
    line,
    w,
  );
  poly(
    g,
    [
      [8, -22],
      [36, -29],
      [36, -6],
      [8, 0],
    ],
    side,
    line,
    w,
  );
  poly(
    g,
    [
      [-33, -23],
      [-9, -48],
      [22, -52],
      [40, -31],
      [8, -21],
      [-9, -42],
      [-28, -22],
    ],
    roof,
    line,
    w,
  );
  poly(
    g,
    [
      [-10, -48],
      [21, -52],
      [26, -47],
      [-5, -42],
    ],
    lightRoof,
  );
  for (let a = 0; a < 4; a++)
    inkLine(
      g,
      [
        [0 + a * 2.8, -40 + a * 3.2],
        [25 + a * 2.8, -45 + a * 3.2],
      ],
      night ? '#e594bc88' : '#764b4569',
      0.8,
    );
  poly(
    g,
    [
      [16, -46],
      [16, -59],
      [21, -60],
      [22, -47],
    ],
    side,
    line,
    w,
  );
  g.fillStyle = roof;
  g.fillRect(14.8, -61, 8, 3);
  g.fillStyle = night ? '#fdbc85' : '#725845';
  g.fillRect(-4, -16, 8, 15);
  for (const [xx, yy] of [
    [-21, -18],
    [15, -20],
    [27, -23],
    [-11, -32],
  ]) {
    g.fillStyle = line;
    g.fillRect(xx - 1, yy - 1, 6.8, 8);
    g.fillStyle = night ? '#ffdd93' : '#c2ccbb';
    g.fillRect(xx, yy, 4.9, 5.8);
    g.fillStyle = line;
    g.fillRect(xx + 1.8, yy, 0.65, 6);
    g.fillRect(xx, yy + 2.6, 5, 0.65);
  }
  g.restore();
}
export function millBody(g, s) {
  const { x, y } = mill,
    p = colors[s],
    n = s === 2,
    vec = s === 1;
  g.save();
  g.translate(x, y);
  const edge = n ? '#8de7ed' : vec ? p.ink : '#73634f',
    width = n ? 1.6 : vec ? 2.2 : 1.1;
  oval(g, 12, 1, 33, 5, n ? '#0b1c32aa' : '#4f583d52');
  const tower = [
    [-23, 0],
    [-11, -72],
    [-2, -80],
    [10, -71],
    [22, -2],
    [10, 2],
    [-8, 4],
  ];
  poly(
    g,
    tower,
    n
      ? '#20394d'
      : gradient(g, -18, 0, 21, 0, [
          [0, '#efce97'],
          [0.4, '#d8b781'],
          [1, '#958567'],
        ]),
    edge,
    width,
  );
  for (let j = 1; j <= 8; j++) {
    const yy = -j * 7.7,
      rr = 22 - j * 1.05;
    inkLine(
      g,
      [
        [-rr, yy],
        [0, yy + 2.5],
        [rr, yy - 0.7],
      ],
      n ? '#4b91ae' : '#89785777',
      n ? 0.9 : 0.65,
    );
    if (n)
      inkLine(
        g,
        [
          [-rr, yy],
          [rr - 1, yy - 8],
        ],
        '#44879a',
        0.65,
      );
  }
  if (n) {
    for (let j = -1; j <= 1; j++)
      inkLine(
        g,
        [
          [j * 15, 0],
          [j * 7, -72],
        ],
        '#7cd9e5',
        0.8,
      );
  }
  poly(
    g,
    [
      [-16, -72],
      [-12, -84],
      [0, -93],
      [12, -84],
      [16, -72],
      [0, -68],
    ],
    n ? '#6b4267' : '#8f5344',
    n ? '#f59cc3' : edge,
    width,
  );
  g.fillStyle = n ? '#ffaac5' : '#665542';
  g.beginPath();
  g.roundRect(-5, -18, 10, 20, [5, 5, 0, 0]);
  g.fill();
  g.fillStyle = n ? '#a4f3f2' : '#715e46';
  g.fillRect(-4, -48, 7, 9);
  g.restore();
}
export function sails(g, s, t) {
  const { x, y } = mill,
    n = s === 2,
    vec = s === 1;
  g.save();
  g.translate(x, y - 74);
  g.rotate((t * TAU) / 15 - 0.36);
  for (let q = 0; q < 4; q++) {
    g.rotate(Math.PI * 0.5);
    const col = n ? '#99ffff' : vec ? '#344541' : '#796553';
    if (n) {
      g.shadowColor = '#2feaff';
      g.shadowBlur = 5;
    }
    inkLine(
      g,
      [
        [0, 3],
        [0, -58],
      ],
      col,
      2.5,
    );
    g.shadowBlur = 0;
    poly(
      g,
      [
        [0.1, -20],
        [10, -24],
        [13, -56],
        [0.1, -61],
      ],
      n ? '#41677e9c' : vec ? '#fff0c4' : '#eedcaa',
      col,
      n ? 1.1 : 1.2,
    );
    for (let i = 0; i < 6; i++)
      inkLine(
        g,
        [
          [0.4, -25 - i * 6.3],
          [10.2 + i * 0.48, -28 - i * 5.6],
        ],
        col,
        0.85,
      );
    inkLine(
      g,
      [
        [5, -22],
        [6, -58],
      ],
      col,
      0.85,
    );
  }
  oval(g, 0, 0, 4.6, 4.6, n ? '#ffb0d2' : '#6e5240');
  oval(g, -1, -1, 2.4, 2.4, n ? '#efffff' : '#e6c398');
  g.restore();
}
function flowers(g, s) {
  const r = rng(14159),
    pal = colors[s];
  for (let i = 0; i < 1480; i++) {
    const x = r() * W,
      front = r() > 0.61,
      l = front ? 4 : 3,
      y = ridge(l, x) + r() * (front ? 160 : 79);
    if (!front && (Math.abs(y - water(x)) < 26 || y > ridge(4, x))) continue;
    if (Math.sin(x * 0.035) + Math.cos(x * 0.067) < -0.45) continue;
    const sz = (front ? 1.4 : 0.68) * (0.48 + r() * 1.55),
      stem = sz * (2 + r() * 3);
    inkLine(
      g,
      [
        [x + 1, y],
        [x, y - stem],
      ],
      pal.shade[l],
      0.65,
    );
    const pick = r(),
      col =
        s === 2
          ? pick > 0.45
            ? '#79e2dd'
            : '#ea8ad1'
          : pick > 0.7
            ? '#e8b754'
            : pick > 0.37
              ? '#f2e1b5'
              : s === 3
                ? '#c57547'
                : '#ce7159';
    for (let k = 0; k < 3; k++)
      oval(
        g,
        x + Math.cos(k * 2.1) * sz * 0.58,
        y - stem + Math.sin(k * 2.1) * sz * 0.39,
        sz * 0.64,
        sz * 0.43,
        col,
      );
    oval(g, x, y - stem, sz * 0.36, sz * 0.27, s === 2 ? '#f3d1c6' : '#b79349');
  }
}
// Print texture is fixed in paper coordinates, so seeking cannot change the grain.
export function paper(g) {
  const { canvas } = g,
    w = canvas.width,
    h = canvas.height,
    im = g.getImageData(0, 0, w, h),
    d = im.data,
    r = rng(992);
  for (let y = 0, i = 0; y < h; y++)
    for (let x = 0; x < w; x++, i += 4) {
      if (!d[i + 3]) continue;
      const grain =
        (r() - 0.5) * 11 + (Math.sin(x * 2.52 + y * 0.12) + Math.sin(y * 2.87 + x * 0.092)) * 1.35;
      d[i] += grain;
      d[i + 1] += grain * 0.97;
      d[i + 2] += grain * 0.88;
    }
  g.putImageData(im, 0, 0);
}
export function land(s, g, baker, scale) {
  mountains(g, s);
  if (s < 2) paintedLand(g, s);
  else g.drawImage(baker.land(s, scale), 0, 0, W, H);
  gardenPath(g, s, 254, ridge(2, 254) + 24, 553);
  gardenPath(g, s, 1429, ridge(2, 1429) + 42, 1328);
  river(g, s);
  fieldRows(g, s);
  bridge(g, s, 553);
  bridge(g, s, 1328);
  for (let l = 0; l < 5; l++) {
    g.save();
    if (l < 4) {
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) g.lineTo(x, ridge(l + 1, x));
      g.closePath();
      g.clip();
    }
    for (const a of trees.filter((a) => a.l === l)) tree(g, s, a.x, a.y, a.h, a.seed, a.round);
    g.restore();
  }
  for (const [x, y, k] of cottages) {
    if (s === 3) {
      oval(g, x + 8 * k, y + 2 * k, 31 * k, 4.8 * k, '#655b4359', -0.09);
      g.drawImage(baker.miniature('cottage'), x - 51 * k, y - 61 * k, 102 * k, 89.25 * k);
    } else cottage(g, s, x, y, k);
  }
  const groves = [
    [20, 3, 89, 1],
    [45, 3, 57, 0],
    [62, 3, 39, 0],
    [332, 3, 40, 0],
    [345, 3, 52, 0],
    [360, 3, 32, 1],
    [489, 2, 27, 1],
    [504, 2, 35, 0],
    [678, 3, 47, 1],
    [699, 3, 36, 1],
    [712, 3, 26, 0],
    [849, 3, 32, 0],
    [861, 3, 51, 0],
    [874, 3, 36, 0],
    [1175, 3, 38, 1],
    [1190, 3, 26, 1],
    [1253, 2, 44, 0],
    [1268, 2, 33, 0],
    [1385, 3, 33, 1],
    [1398, 3, 43, 1],
    [1530, 2, 51, 0],
    [1549, 2, 37, 0],
    [1570, 2, 63, 0],
    [-8, 4, 156, 0],
    [12, 4, 110, 0],
    [90, 4, 64, 1],
    [105, 4, 41, 1],
    [770, 4, 57, 0],
    [783, 4, 44, 0],
    [1505, 4, 65, 1],
    [1527, 4, 49, 1],
    [1591, 4, 148, 0],
    [1574, 4, 92, 0],
  ];
  for (const [x, l, h, round] of groves)
    specimen(g, s, x, ridge(l, x) + 9, h, Math.abs(x) + 20, round, baker);
  flowers(g, s);
  meadowFront(g, s);
  if (s === 0) paper(g);
}
export function inkCloud(s, seed) {
  const c = makeCanvas(372, 197),
    g = c.getContext('2d'),
    lobes = cloudLobes(seed),
    r = rng(seed);
  g.scale(1.2, 197 / 164);
  g.translate(155, 109);
  const shadow = s === 0 ? '#abbfc3' : '#efcb87',
    mid = s === 0 ? '#e5dfca' : '#fff1cc',
    lit = s === 0 ? '#fff0d4' : '#fff5d6';
  for (const [x, y, rx, ry] of lobes) oval(g, x, y, rx, ry, shadow);
  if (s === 1) {
    const shape = makeCanvas(c.width, c.height);
    shape.getContext('2d').drawImage(c, 0, 0);
    const outline = shape.getContext('2d');
    outline.globalCompositeOperation = 'source-in';
    outline.fillStyle = '#384741';
    outline.fillRect(0, 0, c.width, c.height);
    g.save();
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalCompositeOperation = 'destination-over';
    for (let i = 0; i < 10; i++)
      g.drawImage(shape, 2.4 * Math.cos((i * TAU) / 10), 2.4 * Math.sin((i * TAU) / 10));
    g.restore();
  }
  for (let i = 0; i < lobes.length; i++) {
    const [x, y, rx, ry] = lobes[i];
    if (i < 12) {
      oval(g, x - 1, y - ry * 0.12, rx * 0.97, ry * 0.87, mid);
      oval(g, x - rx * 0.16, y - ry * 0.23, rx * 0.78, ry * 0.71, lit);
      if (s === 0) {
        for (let k = 0; k < 32; k++) {
          const a = r() * TAU,
            rr = Math.sqrt(r());
          g.globalAlpha = 0.07 + r() * 0.11;
          oval(
            g,
            x + Math.cos(a) * rr * rx * 0.86,
            y + Math.sin(a) * rr * ry * 0.8,
            2 + r() * 8,
            0.9 + r() * 2,
            r() > 0.5 ? lit : shadow,
            -0.22,
          );
        }
        g.globalAlpha = 1;
      }
    } else if (i % 3 === 0) {
      oval(g, x - 2, y - 2, rx * 0.79, ry * 0.62, mid);
    }
  }
  return c;
}

function gardenPath(g, s, x, y, end) {
  const destY = water(end) - 20,
    points = [];
  for (let i = 0; i <= 55; i++) {
    const u = i / 55,
      v = 1 - u;
    points.push([
      v * x + u * end + Math.sin(u * TAU) * 41 * Math.sin(u * Math.PI),
      y + u * (destY - y) + Math.sin(u * TAU) * 12,
    ]);
  }
  const w = (i) => 0.75 + (3 * i) / 55;
  const shape = points
    .map(([x, y], i) => [x - w(i), y])
    .concat(points.map(([x, y], i) => [x + w(i), y + 0.6]).reverse());
  poly(g, shape, ['#d3be91', '#e6cf91', '#61849f', '#d9b887'][s]);
  const r = rng(818);
  for (let j = 0; j < 61; j++) {
    const i = Math.floor(r() * 56),
      [xx, yy] = points[i];
    oval(
      g,
      xx + (r() - 0.5) * w(i),
      yy,
      0.6 + r() * 0.85,
      0.35,
      ['#9b9578', '#b1a776', '#75adbe', '#aa966d'][s],
    );
  }
}
function bridge(g, s, x) {
  const p = colors[s],
    wide = 9 + 8 * (1 + Math.sin(x * 0.007 + 1)) + 5 * Math.sin(x * 0.022);
  const y = water(x),
    stone = s === 2 ? '#3c5b77' : s === 3 ? '#938365' : '#9a9d83';
  const beam = s === 2 ? '#8ccdd3' : s === 1 ? '#495044' : '#755c47',
    deck = s === 2 ? '#426279' : s === 1 ? '#c5a575' : '#ba9870';
  g.save();
  g.translate(x, y);
  const span = wide + 4,
    xx = 12;
  poly(
    g,
    [
      [-xx - 6, -span + 4],
      [-xx + 5, -span + 1],
      [xx + 7, span + 2],
      [xx - 4, span + 6],
    ],
    '#34413e41',
  );
  oval(g, -xx, -span, 9, 3.6, stone);
  oval(g, xx, span, 10, 4, stone);
  poly(
    g,
    [
      [-xx - 6, -span],
      [-xx + 5, -span - 2],
      [xx + 6, span - 1],
      [xx - 6, span + 2],
    ],
    deck,
    beam,
    1,
  );
  for (let i = 0; i <= 12; i++) {
    const u = i / 12,
      px = -xx + u * xx * 2,
      py = -span + u * 2 * span;
    inkLine(
      g,
      [
        [px - 5, py + 1],
        [px + 5, py - 1],
      ],
      beam,
      0.72,
    );
    if (i % 3 === 0)
      for (const side of [-5, 5])
        inkLine(
          g,
          [
            [px + side, py],
            [px + side, py - 6],
          ],
          beam,
          1.4,
        );
  }
  for (const side of [-5, 5])
    inkLine(
      g,
      [
        [-xx + side, -span - 6],
        [xx + side, span - 6],
      ],
      beam,
      1.25,
    );
  g.restore();
}
function specimen(g, s, x, y, h, seed, round, baker) {
  const r = rng(seed),
    p = colors[s],
    n = s === 2,
    vec = s === 1;
  g.save();
  g.translate(x, y);
  g.scale(h / 100, h / 100);
  oval(g, 13, 1, 22, 3.2, n ? '#17223b9c' : '#48503746', -0.08);
  if (s === 3) {
    const c = baker.miniature(round ? 'oak' : 'fir', seed % 3);
    g.drawImage(c, -(round ? 58 : 53), -(round ? 134 : 107), round ? 116 : 106, round ? 153 : 122);
    g.restore();
    return;
  }
  const trunk = n ? '#325166' : vec ? '#394b3c' : '#655e47';
  poly(
    g,
    [
      [-2, 1],
      [-0.8, -70],
      [1.5, -69],
      [3, 0],
    ],
    trunk,
  );
  if (round) {
    for (let j = 0; j < 12; j++) {
      const a = j * 0.8;
      inkLine(
        g,
        [
          [0, -13 - j * 2],
          [Math.cos(a) * 11, -32 - j * 2],
          [Math.cos(a) * 21, -47 - j],
        ],
        trunk,
        1.4,
      );
    }
    for (let j = 0; j < 83; j++) {
      const a = j * 2.4,
        u = Math.sqrt(r()),
        rx = 8 + r() * 5;
      const xx = Math.cos(a) * u * 26,
        yy = -64 + Math.sin(a) * u * 30,
        light = (33 - xx - yy - 64) / 66 + r() * 0.45;
      const col = p.leaf[light > 0.83 ? 2 : light > 0.36 ? 1 : 0];
      g.beginPath();
      for (let k = 0; k < 12; k++) {
        const turn = (k / 12) * TAU,
          rr = rx * (0.78 + r() * 0.3);
        const px = xx + Math.cos(turn) * rr,
          py = yy + Math.sin(turn) * rr * 0.84;
        if (k === 0) g.moveTo(px, py);
        else g.lineTo(px, py);
      }
      g.closePath();
      g.fillStyle = col;
      g.fill();
      if (n && j % 4 === 0)
        inkLine(
          g,
          [
            [xx - rx * 0.7, yy],
            [xx - rx * 0.35, yy - rx * 0.66],
            [xx + rx * 0.23, yy - rx * 0.7],
          ],
          '#75bec1',
          0.65,
        );
      if (s === 0)
        for (let z = 0; z < 5; z++)
          oval(
            g,
            xx + (r() - 0.65) * rx,
            yy + (r() - 0.6) * rx,
            1.5 + r() * 2,
            0.7 + r() * 0.7,
            p.leaf[light > 0.5 ? 2 : 1],
            -0.4,
          );
    }
  } else {
    for (let j = 0; j < 17; j++) {
      const u = 1 - j / 17,
        yy = -97 + u * 80,
        rr = 3 + u * 23,
        dx = Math.sin(j + seed) * 2.1;
      const edge = [];
      edge.push([dx, yy - 17 - u * 9]);
      for (let k = 0; k < 7; k++)
        edge.push([dx - (rr * (k + 1)) / 7, yy - 15 + k * 2.6 + r() * 3.1]);
      for (let k = 0; k < 14; k++)
        edge.push([dx + rr * (k / 6.5 - 1), yy + Math.sin((k / 14) * Math.PI) * 2.5 + r() * 4.2]);
      edge.push([dx + rr * 0.58, yy - 8], [dx + rr * 0.61, yy - 6]);
      poly(g, edge, p.pine[j % 4 === 0 ? 0 : 1], vec ? p.ink : null, vec ? 0.8 : 0);
      poly(
        g,
        [
          [dx, yy - 15],
          [dx - rr, yy + 1],
          [dx - rr * 0.45, yy - 0.5],
          [dx - rr * 0.49, yy + 1.2],
          [dx - rr * 0.15, yy - 2],
        ],
        p.pine[2],
      );
      if (n) inkLine(g, edge.slice(0, 8), '#63b8ba', 0.8);
      if (s === 0)
        for (let z = 0; z < 22; z++) {
          const px = dx + (r() - 0.5) * rr * 1.6,
            py = yy - r() * 5;
          inkLine(
            g,
            [
              [px, py],
              [px - 2.2, py + 2.1],
            ],
            r() > 0.5 ? p.pine[2] : p.pine[0],
            0.65,
          );
        }
    }
  }
  g.restore();
}
function meadowFront(g, s) {
  const r = rng(364916),
    p = colors[s];
  // Seed heads, oxeye daisies and poppies grow in drifts along the near bank.
  for (let i = 0; i < 2000; i++) {
    const x = r() * W,
      y = ridge(4, x) + r() * 175;
    const patch = 0.5 + 0.5 * Math.sin(x * 0.031 + Math.sin(x * 0.009) * 3);
    if (r() > 0.24 + 0.64 * patch) continue;
    const h = (3 + r() * 10) * (1 + (y - 740) / 270),
      bend = (r() - 0.5) * 7;
    const tx = x + bend,
      ty = y - h;
    g.strokeStyle = r() > 0.43 ? p.shade[4] : p.light[4];
    g.lineWidth = s === 1 ? 1.2 : 0.7 + r() * 0.65;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + bend * 0.25, y - h * 0.64, tx, ty);
    g.stroke();
    if (r() > 0.4) continue;
    const poppy = Math.sin(x * 0.016) > 0,
      rad = 1.3 + r() * 2.3;
    const col =
      s === 2
        ? poppy
          ? '#e997d6'
          : '#91e1d5'
        : poppy
          ? s === 3
            ? '#d27949'
            : '#de7954'
          : '#f7e6bf';
    for (let j = 0; j < (poppy ? 4 : 6); j++) {
      const a = (j * TAU) / (poppy ? 4 : 6);
      oval(
        g,
        tx + Math.cos(a) * rad * 0.68,
        ty + Math.sin(a) * rad * 0.46,
        rad * 0.8,
        rad * 0.48,
        col,
        a,
      );
    }
    oval(g, tx, ty, rad * 0.48, rad * 0.29, poppy ? '#795b43' : '#d1a751');
  }
}

export function gouacheCloud(volume, seed) {
  const w = volume.width,
    h = volume.height,
    c = makeCanvas(w, h);
  const g = c.getContext('2d', { willReadFrequently: true });
  g.drawImage(volume, 0, 0);
  const im = g.getImageData(0, 0, w, h),
    px = im.data,
    r = rng(seed);
  const value = new Float32Array(w * h);
  const pigments = [
    [132, 157, 168],
    [161, 178, 181],
    [191, 200, 194],
    [217, 217, 198],
    [235, 229, 204],
    [247, 237, 209],
    [255, 244, 217],
  ];
  for (let i = 0; i < value.length; i++) {
    const j = i * 4,
      l = clamp((px[j] * 0.27 + px[j + 1] * 0.58 + px[j + 2] * 0.15 - 103) / 131, 0, 1);
    value[i] = l;
    if (!px[j + 3]) continue;
    const v = clamp(l * 6 + (r() - 0.5) * 0.28, 0, 6),
      k = Math.floor(v),
      a = pigments[k],
      b = pigments[Math.min(6, k + 1)];
    for (let cc = 0; cc < 3; cc++) px[j + cc] = a[cc] + (b[cc] - a[cc]) * (v - k) + (r() - 0.5) * 4;
  }
  g.putImageData(im, 0, 0);
  g.globalCompositeOperation = 'source-atop';
  for (let j = 0; j < 6500; j++) {
    const x = 2 + Math.floor(r() * (w - 4)),
      y = 2 + Math.floor(r() * (h - 4)),
      i = y * w + x;
    if (px[i * 4 + 3] < 230) continue;
    const dx = value[i + 2] - value[i - 2],
      dy = value[i + 2 * w] - value[i - 2 * w];
    const v = clamp(Math.round(value[i] * 6 + (r() - 0.5) * 1.45), 0, 6),
      color = pigments[v];
    g.globalAlpha = 0.17 + r() * 0.38;
    oval(
      g,
      x,
      y,
      1 + r() * 4.5,
      0.45 + r() * 0.87,
      'rgb(' + color.join(',') + ')',
      Math.atan2(dy, dx) + Math.PI / 2 + (r() - 0.5) * 0.5,
    );
  }
  g.globalAlpha = 1;
  return c;
}
