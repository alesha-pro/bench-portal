import { W, TAU, rng, shape, line, rect, ellipse, wash, halo, clip, star, texture } from './ink.js';

function cloudBank(g, x, y, w, h, seed, light) {
  const r = rng(seed),
    lobes = [];
  for (let i = 0; i < 10; i++) lobes.push([r(), 0.025 + r() * 0.15, 0.12 + r() * 0.86]);
  const crest = (u) =>
    lobes.reduce((a, [p, s, v]) => a + v * Math.exp(-(((u - p) / s) ** 2)), 0) *
    0.52 *
    Math.sin(Math.PI * u) ** 0.6;
  const edge = (u, j) =>
    y - h * crest(u) * (1 - j * 0.041) + j * 1.32 + h * 0.038 * Math.sin(u * 32 + seed + j * 0.09);
  const p = new Path2D();
  p.moveTo(x, y);
  for (let k = 0; k <= 125; k++) {
    const u = k / 125;
    p.lineTo(x + u * w, edge(u, 0));
  }
  p.quadraticCurveTo(x + w * 0.55, y + h * 0.41, x, y);
  p.closePath();
  shape(
    g,
    p,
    wash(g, x, y - h, x, y + h * 0.4, [
      [0, light ? '#68868a' : '#466370'],
      [1, 'rgba(62,87,98,0)']
    ])
  );
  for (let j = 0; j < 15; j++) {
    const a = r() * 0.22,
      b = 0.71 + r() * 0.28;
    const q = new Path2D();
    let started = false;
    for (let k = 0; k <= 135; k++) {
      const u = k / 135;
      if (u < a || u > b || (j > 1 && Math.sin(u * 15 + j * 0.4 + seed) < -0.84)) {
        started = false;
        continue;
      }
      if (started) q.lineTo(x + u * w, edge(u, j));
      else q.moveTo(x + u * w, edge(u, j));
      started = true;
    }
    shape(
      g,
      q,
      null,
      j === 0 ? 'rgba(219,216,174,.58)' : j % 3 === 0 ? 'rgba(189,198,178,.34)' : 'rgba(163,186,180,.21)',
      j % 4 === 0 ? 0.83 : 0.5
    );
  }
}
function cloudScroll(g, x, y, s, flip) {
  g.save();
  g.translate(x, y);
  g.scale(s * flip, s);
  const outer =
    'M-107 18Q-76 17 -44 15Q-50 10 -41 7Q-32 2 -19 8Q-20 -4 -6 -6Q3 -12 17 -6Q21 -23 39 -26Q58 -31 69 -17Q76 -22 87 -18Q99 -17 100 -6Q120 -12 129 1Q135 6 132 10Q164 8 181 15Q207 19 239 18Q185 21 141 18Q113 17 91 21Q28 25 -3 19Q-43 15 -107 18Z';
  shape(g, outer, 'rgba(124,150,149,.14)', 'rgba(201,203,171,.46)', 1);
  const curls = [
    'M-79 16Q-42 14 -19 15Q-26 11 -21 7Q-14 2 -6 9Q-8 1 0 -3Q13 -7 21 4Q20 -11 38 -17Q56 -22 64 -10Q68 -1 60 3Q54 7 49 2Q46 -2 50 -5Q54 -8 57 -4',
    'M-61 19Q-11 16 18 18Q43 21 71 17Q95 14 111 16Q102 10 93 13Q95 4 86 0Q78 -3 71 3Q76 -8 87 -9Q99 -10 102 1Q113 -3 120 3',
    'M-24 22Q-4 20 21 24Q48 27 80 22Q117 17 148 21Q165 24 192 22',
    'M23 0Q23 -13 39 -19Q56 -24 64 -14M51 8Q60 12 68 5Q71 1 70 -4',
    'M-113 23Q-75 19 -46 20M100 25Q128 21 150 25Q171 27 198 25'
  ];
  for (const [i, d] of curls.entries())
    shape(g, d, null, i === 0 ? 'rgba(225,213,166,.54)' : 'rgba(192,198,170,.42)', i === 0 ? 1.25 : 0.85);
  g.restore();
}
function ridge(g, base, amp, seed, fill, light, details) {
  const r = rng(seed),
    phase = r() * 7,
    peaks = [];
  for (let i = -1; i < 14; i++)
    peaks.push({ x: i * 119 + r() * 93, y: base - amp * (0.24 + r() * 0.79), w: 60 + r() * 140 });
  const ridgeAt = (x) =>
    Math.min(...peaks.map((p) => p.y + (Math.abs(x - p.x) / p.w) * (base - p.y))) +
    4 * Math.sin(x * 0.027 + phase) +
    2 * Math.sin(x * 0.091);
  const p = new Path2D();
  p.moveTo(-15, 470);
  for (let x = -15; x <= 1300; x += 3) p.lineTo(x, ridgeAt(x));
  p.lineTo(1300, 470);
  p.closePath();
  shape(g, p, fill);
  clip(g, p, () => {
    for (const a of peaks) {
      const y = ridgeAt(a.x),
        l = a.w * (0.35 + r() * 0.48),
        q = new Path2D();
      q.moveTo(a.x - 7, y - 2);
      q.lineTo(a.x + 4, y + 1);
      for (let k = 1; k <= 12; k++) {
        let u = k / 12;
        q.lineTo(a.x + l * u + 5 * Math.sin(k), y + (base - y) * u * 0.95 + 3 * r());
      }
      for (let k = 12; k >= 0; k--) {
        let u = k / 12;
        q.lineTo(a.x + l * 0.53 * u + 4 * Math.sin(k * 3), y + (base - y) * u + 2 * r());
      }
      q.closePath();
      shape(g, q, light);
    }
    for (let k = 0; k < details; k++) {
      let x = r() * 1310,
        y = ridgeAt(x) + 2 + r() ** 1.5 * 77,
        d = 1 + r() * 10;
      line(
        g,
        x,
        y,
        x + d,
        y + d * (0.18 + r() * 0.8),
        r() < 0.5 ? 'rgba(204,212,192,.21)' : 'rgba(22,56,67,.22)',
        0.5 + r() * 0.55
      );
    }
  });
}
export function paintSky(g, paper) {
  rect(
    g,
    -25,
    -15,
    1330,
    750,
    wash(g, 0, 0, 19, 460, [
      [0, '#0b2030'],
      [0.27, '#173447'],
      [0.58, '#305666'],
      [0.82, '#687e83'],
      [1, '#969e94']
    ])
  );
  const r = rng(8201);
  // Patchy, translucent pools of pigment in the upper register.
  for (let i = 0; i < 1550; i++) {
    const x = r() * W,
      y = r() * 408,
      s = 2 + r() ** 2 * 43;
    ellipse(
      g,
      x,
      y,
      s,
      s * (0.14 + r() * 0.37),
      r() < 0.58 ? 'rgba(9,38,55,.014)' : 'rgba(197,198,165,.017)'
    );
  }
  for (let i = 0; i < 385; i++) {
    const x = r() * W,
      y = r() ** 1.22 * 332,
      s = 0.28 + r() ** 3 * 1.2;
    ellipse(g, x, y, s, s * 0.85, `rgba(232,221,178,${0.15 + r() * 0.48})`);
    if (s > 1.39) star(g, x, y, 2 + r() * 1.6, 'rgba(247,227,170,.68)');
  }
  const mx = 973,
    my = 139,
    R = 73;
  halo(g, mx, my, 160, 'rgba(239,206,130,.22)');
  const moon = new Path2D();
  moon.arc(mx, my, R, 0, TAU);
  shape(
    g,
    moon,
    wash(g, mx - 60, my - 75, mx + 48, my + 66, [
      [0, '#fbebbf'],
      [0.58, '#e8cf95'],
      [1, '#ceb77e']
    ]),
    '#e6d6a6',
    1.2
  );
  clip(g, moon, () => {
    for (let i = 0; i < 620; i++) {
      const x = mx + (r() - 0.5) * 150,
        y = my + (r() - 0.5) * 150,
        k = 1 + r() ** 3 * 13;
      ellipse(
        g,
        x,
        y,
        k,
        k * (0.21 + r() * 0.77),
        r() < 0.65 ? 'rgba(102,110,88,.058)' : 'rgba(255,245,204,.16)'
      );
    }
    for (let i = 0; i < 1600; i++) {
      let x = mx - 74 + r() * 148,
        y = my - 74 + r() * 148;
      line(g, x, y, x + 1 + r() ** 2 * 11, y - r() * 1.6, 'rgba(122,116,75,.14)', 0.36 + r() * 0.56);
    }
    texture(g, paper, mx - 80, my - 80, 160, 160, 0.59);
  });
  for (const [rr, start, end, a] of [
    [79, -1.9, 0.21, 0.5],
    [79, 0.46, 2.7, 0.38],
    [86, 2.1, 4.5, 0.21],
    [93, -0.86, 0.43, 0.19]
  ]) {
    g.beginPath();
    g.arc(mx, my, rr, start, end);
    g.strokeStyle = `rgba(230,208,151,${a})`;
    g.lineWidth = 0.58;
    g.stroke();
  }
  for (let i = 0; i < 62; i++) {
    let a = r() * TAU,
      l = 83 + r() * 28;
    line(
      g,
      mx + Math.cos(a) * l,
      my + Math.sin(a) * l,
      mx + Math.cos(a) * (l + 2 + r() * 4),
      my + Math.sin(a) * (l + 2 + r() * 4),
      'rgba(219,211,167,.26)',
      0.6
    );
  }
  cloudBank(g, -90, 123, 417, 34, 73, false);
  cloudBank(g, 330, 72, 384, 31, 41, false);
  cloudBank(g, 1030, 98, 325, 33, 38, false);
  cloudBank(g, 725, 193, 411, 35, 87, true);
  cloudBank(g, -121, 272, 547, 40, 52, true);
  cloudBank(g, 369, 251, 324, 19, 61, true);
  cloudBank(g, 995, 282, 381, 31, 14, true);
  cloudScroll(g, 238, 204, 0.68, -1);
  cloudScroll(g, 775, 94, 0.58, 1);
  cloudScroll(g, 1169, 223, 0.85, -1);
  cloudScroll(g, 452, 293, 0.48, 1);
  ridge(g, 382, 93, 180, '#718a8e', '#9fada7', 640);
  ridge(g, 411, 88, 286, '#526f77', '#849893', 950);
  // Fir woods stippled into the descending mountain foothills.
  const forest = (x) =>
    373 + 15 * Math.sin(x * 0.012) + 9 * Math.sin(x * 0.026 + 0.4) + 7 * Math.sin(x * 0.047);
  for (let i = 0; i < 2250; i++) {
    let x = r() * 1320 - 20,
      y = forest(x) + r() ** 0.8 * 41,
      s = 2 + r() ** 2 * 10;
    shape(g, `M${x} ${y - s}l${s * 0.26} ${s}h${-s * 0.55}Z`, r() < 0.45 ? '#668386' : '#587980');
  }
  texture(g, paper, -20, -12, 1320, 492, 0.55);
}
