import {
  TAU,
  rng,
  clamp,
  ease,
  layer,
  shape,
  line,
  ellipse,
  wash,
  clip,
  halo,
  star,
  texture
} from './ink.js';

const body =
  'M-241 -63 Q-215 -33 -190 -34 Q-167 -33 -135 -52 Q-107 -64 -96 -68 L-108 -81 Q-91 -79 -72 -71 Q-7 -93 60 -82 Q114 -76 157 -60 L177 -53 Q205 -51 219 -36 L225 -29 Q234 -29 237 -21 Q244 -19 242 -11 Q248 -6 243 4 Q236 24 211 37 Q172 61 126 65 Q66 75 12 59 Q-39 49 -87 23 Q-136 -1 -168 -5 Q-213 -12 -232 -35 Q-243 -46 -248 -52Z';
const fluke =
  'M-228 -39 Q-249 -44 -269 -61 Q-283 -74 -311 -91 Q-286 -95 -259 -86 Q-242 -82 -229 -67 Q-227 -86 -211 -104 Q-195 -122 -177 -127 Q-181 -116 -183 -99 Q-186 -73 -201 -59 Q-211 -49 -222 -42Z';
const fin =
  'M-12 32 Q14 33 45 45 Q42 61 26 78 Q9 101 -26 121 Q-51 136 -78 137 Q-91 135 -79 128 Q-48 108 -38 81 Q-28 52 -12 32Z';
function engraved(g, d, seed, amount, extent) {
  const r = rng(seed);
  clip(g, d, () => {
    for (let i = 0; i < amount; i++) {
      const x = extent[0] + r() * extent[2],
        y = extent[1] + r() * extent[3],
        len = 0.6 + r() ** 2 * 8;
      line(
        g,
        x,
        y,
        x + len,
        y + len * (0.27 + 0.25 * Math.sin(x * 0.018)),
        r() < 0.62 ? 'rgba(62,75,68,.27)' : 'rgba(255,247,202,.65)',
        0.25 + r() * 0.48
      );
    }
  });
}
// Leaf sits on a dark lacquer bed. Small losses along either lip expose the paper.
function gild(g, points, seed, width) {
  const r = rng(seed),
    path = new Path2D();
  path.moveTo(...points[0]);
  for (let i = 1; i < points.length; i++) path.lineTo(...points[i]);
  shape(g, path, null, '#80633b', width + 1.45);
  shape(g, path, null, '#dfaa4f', width);
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i - 1],
      [ex, ey] = points[i],
      dx = ex - x,
      dy = ey - y;
    const len = Math.hypot(dx, dy),
      nx = -dy / len,
      ny = dx / len;
    for (let at = 0; at < len;) {
      const end = Math.min(len, at + 1.4 + r() ** 2 * 10),
        off = (r() - 0.62) * width;
      const xx = x + (dx * at) / len + nx * off,
        yy = y + (dy * at) / len + ny * off;
      line(
        g,
        xx,
        yy,
        x + (dx * end) / len + nx * off,
        y + (dy * end) / len + ny * off,
        r() < 0.68 ? '#fff0ae' : '#b48039',
        0.45 + r() * 0.85
      );
      if (r() < 0.65) {
        const spread = (r() - 0.5) * 6;
        shape(g, `M${xx + nx * spread} ${yy + ny * spread}l1.6 -.7 1 .7 -1.4 1.1Z`, '#f5d283');
      }
      at = end + 0.7 + r() * 2;
    }
  }
}
function makeFin(tile) {
  const [pic, g] = layer(160, 132, 2);
  g.translate(96, -16);
  shape(
    g,
    fin,
    wash(g, 12, 39, -45, 132, [
      [0, '#acb29d'],
      [0.24, '#e5d5ad'],
      [0.54, '#e4c18a'],
      [0.87, '#b5905c'],
      [1, '#ebce8b']
    ]),
    '#f1d99d',
    1.3
  );
  clip(g, fin, () => {
    shape(
      g,
      'M37 48L-82 135L-29 90Z',
      wash(g, -38, 75, -19, 100, [
        [0, '#607a7c'],
        [0.58, '#7a8d84'],
        [1, '#adb19a']
      ])
    );
    shape(g, 'M-17 43Q-35 85 -53 110Q-32 78 -23 49Z', '#697e78');
    shape(g, 'M37 48L-82 135L-8 105Z', 'rgba(255,227,165,.65)');
    for (let k = 0; k < 11; k++)
      shape(
        g,
        `M${30 - k * 2.6} ${46 + k * 0.6}Q${-6 - k * 3} ${99 - k * 0.65} ${-80 + k * 1.7} ${134 - k * 0.7}`,
        null,
        k % 2 ? '#a79a77' : '#d8cba6',
        0.65
      );
  });
  clip(g, fin, () => {
    gild(
      g,
      [
        [36, 46],
        [18, 59],
        [13, 66],
        [-2, 76],
        [-7, 83],
        [-22, 93],
        [-38, 110],
        [-79, 134]
      ],
      191,
      1.9
    );
    gild(
      g,
      [
        [-7, 83],
        [-4, 90],
        [-16, 103],
        [-21, 114]
      ],
      192,
      0.78
    );
  });
  engraved(g, fin, 246, 1800, [-90, 30, 140, 112]);
  texture(g, tile, -90, 23, 142, 118, 0.72); // isolated below to preserve the transparent margins
  g.globalCompositeOperation = 'destination-in';
  shape(g, fin, '#fff');
  return pic;
}
export function makeWhale(tile) {
  const [pic, g] = layer(584, 290, 2);
  g.translate(322, 139);
  shape(
    g,
    fluke,
    wash(g, -250, -111, -212, -35, [
      [0, '#f6d89a'],
      [0.42, '#e6d4ae'],
      [0.62, '#97aaa3'],
      [1, '#5d7478']
    ]),
    '#ead197',
    1.2
  );
  clip(g, fluke, () => {
    shape(g, 'M-311 -91L-229 -66L-219 -43L-267 -77Z', '#b3a78e');
    shape(g, 'M-229 -66L-177 -127L-209 -63L-222 -43Z', '#c6b18b');
    line(g, -177, -127, -227, -61, '#ffdf91', 1.85);
    line(g, -310, -91, -228, -62, '#fff0bf', 1.22);
    for (let i = 0; i < 15; i++)
      shape(g, `M${-305 + i * 4} ${-90 + i * 0.9}Q-254 -76 -229 -52`, null, 'rgba(101,99,77,.39)', 0.5);
  });
  clip(g, fluke, () => {
    gild(
      g,
      [
        [-310, -91],
        [-287, -87],
        [-278, -83],
        [-268, -81],
        [-247, -73],
        [-230, -63],
        [-222, -46]
      ],
      384,
      1.9
    );
    gild(
      g,
      [
        [-228, -64],
        [-218, -78],
        [-215, -87],
        [-195, -106],
        [-179, -125]
      ],
      385,
      2.15
    );
    gild(
      g,
      [
        [-216, -84],
        [-204, -84],
        [-194, -95],
        [-189, -106]
      ],
      386,
      0.92
    );
  });
  engraved(g, fluke, 963, 720, [-312, -129, 135, 91]);
  shape(
    g,
    body,
    wash(g, -50, -87, 24, 73, [
      [0, '#ffedbe'],
      [0.23, '#eddbac'],
      [0.53, '#e6cf9e'],
      [0.75, '#a5afa0'],
      [1, '#6d8888']
    ]),
    '#7f816e',
    2.05
  );
  clip(g, body, () => {
    const facets = [
      ['M-247 -65L-136 -47L-168 -6Z', '#839993'],
      ['M-222 -36L-102 -54L-168 -4Z', '#bab6a1'],
      ['M-168 -5L-100 -56L-62 -14Z', '#d6c7a7'],
      ['M-102 -56L-71 -72L-62 -14Z', '#f5e5b9'],
      ['M-62 -14L-71 -72L43 -47Z', '#cabc96'],
      ['M-62 -14L43 -47L16 12Z', '#eee0b7'],
      ['M43 -47L71 -85L142 -63Z', '#f6e3af'],
      ['M43 -47L142 -63L152 -25Z', '#bfaa7e'],
      ['M43 -47L152 -25L16 12Z', '#ead7ad'],
      ['M16 12L152 -25L94 25Z', '#cfbf9a'],
      ['M-162 -5L-62 -14L16 12L41 64Z', '#748c89'],
      ['M-62 -14L16 12L-28 5Z', '#b8b9a1'],
      ['M-168 -5L-111 -15L-94 9Z', '#9aab9e'],
      ['M152 -25L239 -20L173 -54Z', '#f1dca8']
    ];
    for (const [p, c] of facets) shape(g, p, c);
    // A folded edge catches light on one lip and casts a narrow graduated shadow on the other.
    shape(
      g,
      'M-70 -71L43 -47L-62 -14Z',
      wash(g, -18, -42, -11, -20, [
        [0, '#ddd0a7'],
        [0.7, '#cbb991'],
        [1, '#a19574']
      ])
    );
    shape(
      g,
      'M43 -47L142 -63L152 -25Z',
      wash(g, 94, -55, 98, -33, [
        [0, '#e8d3a3'],
        [0.63, '#c1aa80'],
        [1, '#a08a62']
      ])
    );
    shape(g, 'M-225 -35Q-138 0 -68 -17Q-15 -26 44 -47L151 -25L206 -41', null, '#b09667', 1.2);
    shape(g, 'M-133 -48L-62 -14L44 -47L73 -80M-62 -14L16 12L152 -25L174 -53M16 12L41 62', null, '#f5e5b5', 1.55);
    shape(g, 'M-96 -69Q-104 -77 -108 -81L-86 -71Z', '#b2aa8c');
    // Engraved ventral grooves sweep from the lip to the paper belly.
    shape(
      g,
      'M29 38Q71 19 128 17Q202 19 245 -9Q257 15 212 45Q140 85 61 63Z',
      wash(g, 90, 19, 118, 70, [
        [0, '#f1dfb5'],
        [0.76, '#d3c69f'],
        [1, '#a5ad99']
      ])
    );
    for (let k = 0; k < 19; k++) {
      const x = 27 + k * 7.85,
        y = 41 - 19 * Math.sin((k / 25) * Math.PI);
      shape(
        g,
        `M${x} ${y}Q${x + 16} ${y + 25} ${81 + k * 8.65} ${73 - k * 0.95}`,
        null,
        k % 3 === 0 ? '#879487' : '#a5a58d',
        k % 4 === 0 ? 1.12 : 0.74
      );
    }
    shape(g, 'M57 34Q102 14 149 16Q210 18 244 -8', null, '#687a74', 2.1);
    shape(g, 'M65 31Q111 12 150 14Q205 15 239 -7', null, '#ffe8b4', 1.22);
    // Small overlapping wave stamps and a few chips of gilding in the dorsal paper.
    const r = rng(268);
    for (let row = 0; row < 5; row++)
      for (let col = 0; col < 20; col++) {
        let x = -121 + col * 9 + (row % 2) * 4.5,
          y = -56 + row * 4 - 12 * Math.sin((x + 34) * 0.011);
        if (Math.sin(col * 0.48 + row * 0.71) + r() * 0.85 < 0.47) continue;
        for (let j = 0; j < 2; j++) {
          g.beginPath();
          g.arc(x, y, 2 + j * 1.6, Math.PI * 1.04, Math.PI * 1.95);
          g.strokeStyle = j ? 'rgba(147,120,72,.58)' : 'rgba(255,236,170,.95)';
          g.lineWidth = 0.67;
          g.stroke();
        }
      }
    for (let i = 0; i < 570; i++) {
      const x = -225 + r() * 452,
        y = -70 + r() * 92,
        w = 0.25 + r() ** 3 * 2.4;
      if (Math.sin(x * 0.067 + y * 0.1) < 0.15) continue;
      shape(
        g,
        `M${x} ${y}l${w} ${-w * 0.51}l${w * 0.6} ${w * 0.7}l${-w} ${w * 0.42}Z`,
        r() < 0.54 ? '#fae099' : '#b7995c'
      );
    }
    // Dry indigo along the pinched valley and the half-registered hemp-leaf stamp.
    const shadowFold = 'M-159 -5L-62 -14L16 12L40 63L-87 24Z';
    clip(g, shadowFold, () => {
      shape(
        g,
        shadowFold,
        wash(g, -30, -17, -37, 47, [
          [0, '#566f73'],
          [0.48, '#91a49b'],
          [1, '#b4bc9f']
        ])
      );
      for (let j = 0; j < 6; j++)
        for (let i = 0; i < 17; i++) {
          const x = -157 + i * 13 + (j % 2) * 6.5,
            y = -6 + j * 7.5;
          if (Math.sin(i * 0.44 + j * 0.64) < -0.35) continue;
          shape(
            g,
            `M${x} ${y}l6.5 -3.75v7.5Z m0 0l6.5 0m0 -3.75 -2.2 3.75 2.2 3.75m0 -7.5 6.5 3.75 -6.5 3.75`,
            null,
            'rgba(233,216,164,.50)',
            0.58
          );
        }
    });
    shape(g, 'M-135 -48L-64 -10L44 -45L72 -81L42 -49L-62 -16Z', '#a0936d');
    shape(g, 'M-71 -71L-64 -16L-62 -14L-66 -51Z', '#fff1c6');
    shape(g, 'M43 -47L150 -24L173 -53L154 -28Z', '#988665');
    shape(g, 'M16 12L41 62L34 35Z', '#6c817c');
    for (let i = 0; i < 21; i++) {
      let x = 163 + r() * 72,
        y = -45 + r() * 34;
      ellipse(g, x, y, 1 + r() * 2, 0.7 + r() * 1.1, 'rgba(145,138,103,.45)');
    }
    engraved(g, body, 901, 5500, [-245, -87, 495, 161]);
    texture(g, tile, -247, -90, 496, 167, 0.85);
  });
  clip(g, body, () => {
    gild(
      g,
      [
        [-222, -36],
        [-192, -30],
        [-181, -26],
        [-151, -23],
        [-133, -19],
        [-116, -20],
        [-93, -16],
        [-79, -17],
        [-63, -14],
        [-39, -22],
        [-30, -23],
        [-11, -32],
        [6, -34],
        [20, -42],
        [44, -47],
        [56, -61],
        [64, -66],
        [73, -81]
      ],
      973,
      2.45
    );
    gild(
      g,
      [
        [-63, -14],
        [-38, -7],
        [-29, -5],
        [-16, 1],
        [0, 5],
        [16, 12],
        [44, 3],
        [52, 3],
        [80, -7],
        [90, -8],
        [113, -17],
        [125, -17],
        [152, -25],
        [163, -40],
        [174, -53]
      ],
      974,
      1.65
    );
    gild(
      g,
      [
        [44, -47],
        [64, -44],
        [81, -39],
        [94, -39],
        [107, -34],
        [130, -31],
        [152, -25]
      ],
      975,
      1.56
    );
    gild(
      g,
      [
        [-116, -20],
        [-121, -33],
        [-136, -48]
      ],
      976,
      1
    );
    gild(
      g,
      [
        [16, 12],
        [22, 27],
        [27, 30],
        [32, 46],
        [41, 62]
      ],
      977,
      1.08
    );
  });
  // The hand-inked lid and a single corneal catchlight read at theatrical distance.
  shape(g, 'M103 -5Q114 -13 125 -8Q118 0 111 -1Q106 -1 103 -5Z', '#45534d', '#a79978', 0.9);
  ellipse(g, 115.5, -6.2, 4, 3.8, '#273d3c');
  ellipse(g, 116.9, -7.6, 1.3, 1.12, '#fff3c4');
  shape(g, 'M99 -9Q114 -17 128 -10M105 1Q114 4 122 0', null, '#a49d82', 0.77);
  shape(g, 'M173 -53Q194 -52 205 -43M214 -35l8 5', null, '#fff1c7', 2.1);
  shape(g, 'M-88 -71Q-26 -89 40 -84Q91 -81 131 -68', null, '#fff2c1', 2);
  const breakup = layer(584, 290, 1.5),
    reflection = layer(640, 147);
  return { pic, fin: makeFin(tile), breakup, reflection };
}
// Hermite interpolation in real seconds keeps the ascent and the turn continuous.
const marks = [
  [9.7, 454, 510, 0.022, -0.69, 1],
  [11, 455, 474, 0.13, -0.74, 1],
  [13, 456, 385, 0.43, -0.64, 1],
  [16, 468, 254, 0.8, -0.32, 1],
  [19, 521, 188, 1.03, -0.13, 1],
  [23, 608, 181, 1.12, -0.045, 1],
  [27, 708, 181, 1.12, 0.03, 1],
  [30.5, 800, 178, 0.93, 0.065, 0.97],
  [33, 899, 172, 0.76, -0.12, 0.83],
  [34.8, 969, 196, 0.68, -0.23, 0.27],
  [36.1, 938, 207, 0.77, 0.1, -0.72],
  [38.6, 830, 224, 0.71, 0.1, -1],
  [41.3, 757, 157, 0.52, 0.13, -1]
];
export function whalePose(t) {
  const i = marks.findIndex((m, k) => k < marks.length - 1 && t < marks[k + 1][0]),
    j = i < 0 ? marks.length - 2 : i;
  const a = marks[Math.max(0, j - 1)],
    b = marks[j],
    c = marks[j + 1],
    d = marks[Math.min(marks.length - 1, j + 2)],
    dt = c[0] - b[0],
    u = clamp((t - b[0]) / dt),
    v = u * u;
  return b.slice(1).map((b0, k) => {
    k++;
    return (
      (2 * v * u - 3 * v + 1) * b0 +
      (-2 * v * u + 3 * v) * c[k] +
      ((v * u - 2 * v + u) * dt * (c[k] - a[k])) / (c[0] - a[0]) +
      ((v * u - v) * dt * (d[k] - b0)) / (d[0] - b[0])
    );
  });
}
const motes = (() => {
  const r = rng(100071);
  return Array.from({ length: 510 }, () => [r(), r(), r(), r(), r(), r()]);
})();
function journey(g, t) {
  const age = t - 9.7;
  const strokeFade = ease(11, 15, t) * (1 - ease(34.5, 39, t));
  if (strokeFade > 0) {
    for (let i = 0; i < 5; i++) {
      const path = new Path2D();
      let start = true;
      for (let j = 1; j < 67; j++) {
        const lag = j * 0.088 + i * 0.03,
          at = t - lag;
        if (at < 9.7 || at > 38) continue;
        const [x, y, s, angle, yaw] = whalePose(at),
          lx = -225 * s * yaw,
          ly = -45 * s;
        const px =
          x +
          lx * Math.cos(angle) -
          ly * Math.sin(angle) -
          lag * (15 + i * 2) +
          Math.sin(lag * 2 + i * 0.8 + t * 0.56) * (lag * 2);
        const py =
          y +
          lx * Math.sin(angle) +
          ly * Math.cos(angle) +
          lag * (5 + i * 1.5) +
          Math.sin(lag * 2.4 - i * 0.7 + t * 0.83) * lag * 2.5;
        if (start) path.moveTo(px, py);
        else path.lineTo(px, py);
        start = false;
      }
      shape(g, path, null, `rgba(240,197,114,${strokeFade * (0.27 - i * 0.031)})`, 0.63 + i * 0.055);
    }
  }
  for (let i = 0; i < 255; i++) {
    const [a, b, c, d, e, f] = motes[i],
      lag = 0.25 + a * 6.8,
      sample = t - lag;
    if (sample < 9.7 || sample > 38) continue;
    const [x, y, s, angle, yaw] = whalePose(sample);
    const xx = -211 * s * yaw,
      yy = -42 * s;
    const px =
      x +
      xx * Math.cos(angle) -
      yy * Math.sin(angle) -
      lag * (14 + 15 * b) +
      Math.sin(t * 0.8 + c * TAU) * (2 + lag * 2);
    const py =
      y +
      xx * Math.sin(angle) +
      yy * Math.cos(angle) +
      lag * (5 + 8 * d) +
      Math.sin(lag * 2 + b * 6) * 6 +
      (c - 0.5) * lag * 9;
    g.globalAlpha =
      clamp(age / 1.5) * (1 - a * 0.91) * (0.32 + 0.47 * Math.sin(t * 2 + e * TAU) ** 2) * (1 - ease(37.5, 42, t));
    if (i % 17 === 0) {
      halo(g, px, py, 6 * s, 'rgba(255,199,94,.39)');
      star(g, px, py, (1.6 + f * 2.8) * s, '#ffdd91');
    } else ellipse(g, px, py, 0.43 + f * s * 1.3, 0.4 + f * s * 0.95, i % 3 ? '#f4c878' : '#fdf0bb');
  }
  g.globalAlpha = 1;
}
// Each escort follows an earlier fluke position, including the turn round the bell.
function paperCranes(g, t) {
  for (let i = 0; i < 5; i++) {
    const lag = 0.85 + i * 0.48,
      at = t - lag;
    const opacity = ease(13.2, 16, at) * (1 - ease(33.8, 37.8, at));
    if (!opacity) continue;
    const [x, y, s, angle, yaw] = whalePose(at);
    const dx = (-273 - 18 * lag) * s * yaw,
      dy = (-49 + (i % 2) * 22) * s;
    const flap = Math.sin(t * (3.6 + i * 0.09) + i * 2.4),
      flutter = Math.sin(t * 1.56 + i * 3);
    g.save();
    g.translate(
      x + dx * Math.cos(angle) - dy * Math.sin(angle) - 18 * lag,
      y + dx * Math.sin(angle) + dy * Math.cos(angle) + lag * 12 + flutter * 5
    );
    g.rotate(angle * 0.44 + 0.083 * flutter);
    const scale = 0.59 + (i % 3) * 0.14;
    g.scale(scale * yaw, scale);
    g.globalAlpha = opacity * 0.95;
    shape(g, `M-6 2L${-15 + flap * 3} ${-9 - flap * 9}L4 0Z`, '#b9b396', '#887c62', 0.75);
    shape(g, 'M-3 1L-21 -7L-10 5L0 7L9 0L13 -9L20 -7L13 -13L9 -11L4 -3Z', '#f7e8c0', '#726f60', 0.85);
    shape(g, 'M-20 -7L-2 3L1 6L-10 4Z', '#c6ad7c');
    shape(g, `M-6 3L${-7 - flap * 5} ${-5 - flap * 15}L5 0L-.5 7Z`, '#e4d1a3', '#8e8064', 0.85);
    shape(g, `M-6 3L${-7 - flap * 5} ${-5 - flap * 15}L-.6 6Z`, '#ffedba');
    line(g, -6, 3, -7 - flap * 5, -5 - flap * 15, '#fff5d0', 1.05);
    line(g, 9, -7, 13, -12, '#f7d785', 1.05);
    g.restore();
  }
}
function dissolve(g, t) {
  for (let i = 0; i < motes.length; i++) {
    const [a, b, c, d, e, f] = motes[i],
      birth = 32.8 + a * 6.2,
      age = t - birth;
    if (age <= 0 || age > 7.2) continue;
    const [x, y, s, angle, yaw] = whalePose(birth),
      lx = (b - 0.5) * 392 * s * yaw,
      ly = ((c - 0.5) * 77 - 12) * s;
    const px =
      x +
      lx * Math.cos(angle) -
      ly * Math.sin(angle) +
      age * (-65 + 87 * f) +
      Math.sin(age * 1.5 + d * 6) * age * (2.6 + e * 2.1);
    const py =
      y + lx * Math.sin(angle) + ly * Math.cos(angle) + age * (12 + 22 * e) + age * age * (3 + d * 2.4);
    let sz = 0.68 + f * f * 3.1;
    g.globalAlpha =
      ease(0, 0.42, age) *
      (1 - ease(4.8, 7.2, age)) *
      (1 - ease(42.1, 44.8, t)) *
      (0.58 + 0.39 * Math.sin(t * 2 + b * 6) ** 2);
    if (i % 8 === 0) {
      g.save();
      g.translate(px, py);
      g.rotate(b + age * 0.36);
      for (let k = 0; k < 3; k++) {
        line(g, -sz, 0, sz, 0, '#ffe7a0', 0.75);
        g.rotate(Math.PI / 3);
      }
      g.restore();
    } else if (i % 5 === 0) star(g, px, py, sz * 1.5, '#ffe3a0');
    else ellipse(g, px, py, sz * 0.75, sz * 0.6, i % 3 ? '#e8b864' : '#ffeebd');
  }
  g.globalAlpha = 1;
}
export function drawWhale(g, t, art) {
  if (t < 9.7 || t > 44.8) return;
  journey(g, t);
  paperCranes(g, t);
  if (t < 41.2) {
    const [x, y, s, angle, yaw] = whalePose(t),
      opacity = ease(9.7, 10.48, t) * (1 - ease(33.8, 40.7, t));
    g.save();
    g.translate(x, y + Math.sin(t * 1.06) * 2.1 * s);
    g.rotate(angle);
    const breath = Math.sin((t * TAU) / 4.8);
    g.scale(s * yaw, s * (1 + 0.022 * breath));
    g.globalAlpha = opacity;
    halo(g, 8, -5, 269, 'rgba(250,215,138,.15)', 104);
    const peeling = t > 33.4,
      ctx = peeling ? art.breakup[1] : g;
    if (peeling) {
      ctx.clearRect(0, 0, 584, 290);
      ctx.save();
      ctx.translate(322, 139);
    }
    shape(ctx, 'M89 26Q93 54 127 78Q145 88 156 85Q144 72 139 57Q135 39 124 23Z', '#a7a78c', '#ddcc97', 1);
    shape(ctx, 'M117 34L153 84L132 65Z', '#d7c69a');
    // Deflect successive strips of the translucent paper tail along a travelling wave.
    for (let u = 0; u < 190; u += 5) {
      const v = (190 - u) / 190,
        def = v * v * (16 * Math.sin(t * 1.05 - v * 1.7) + 5 * Math.sin(t * 0.52));
      ctx.drawImage(art.pic, u * 2, 0, 10, 580, u - 322, -139 + def, 5.31, 290);
    }
    ctx.drawImage(art.pic, 380, 0, 788, 580, -132, -139, 394, 290);
    ctx.save();
    // A narrow burnish travels across the dorsal crease as the stock flexes.
    const glint = 0.5 + 0.5 * breath;
    ctx.save();
    ctx.globalAlpha *= 0.32 + 0.5 * glint;
    shape(ctx, 'M-80 -17L-63 -14L-39 -22M-9 -32L6 -34L20 -42M44 -47L56 -61', null, '#fff4c3', 0.78 + glint * 0.75);
    ctx.restore();
    ctx.translate(8, 37);
    ctx.rotate(0.085 * Math.sin(t * 1.18));
    ctx.scale(1, 0.87 + 0.16 * Math.sin(t * 0.92));
    ctx.drawImage(art.fin, -104, -21, 160, 132);
    ctx.restore();
    if (peeling) {
      ctx.globalCompositeOperation = 'destination-out';
      const amount = ease(33.4, 40.8, t);
      const holes = new Path2D();
      for (const [a, b, c, d, e, f] of motes) {
        const reach = clamp((amount - (a * 0.49 + b * 0.35)) / 0.34),
          rr = reach * (6 + 17 * f);
        if (rr <= 0.01) continue;
        const px = -309 + b * 556,
          py = -127 + c * 264;
        holes.moveTo(px - rr, py + rr * 0.22);
        holes.lineTo(px - rr * 0.36, py - rr * (0.4 + d * 0.55));
        holes.lineTo(px + rr * 0.43, py - rr * 0.38);
        holes.lineTo(px + rr, py - rr * 0.22);
        holes.lineTo(px + rr * 0.13, py + rr * (0.4 + 0.58 * e));
        holes.closePath();
      }
      shape(ctx, holes, '#000');
      ctx.restore();
      g.drawImage(art.breakup[0], -322, -139, 584, 290);
    }
    g.restore();
  }
  if (t > 32.8) dissolve(g, t);
}

export function whaleReflection(g, t, art) {
  if (t < 10.2 || t > 39.9) return;
  const [x, y, s, angle, yaw] = whalePose(t),
    [pic, p] = art.reflection,
    level = ease(10.2, 13, t) * (1 - ease(32.8, 39.9, t));
  p.clearRect(0, 0, 640, 147);
  p.save();
  p.scale(0.5, 0.5);
  p.translate(0, -426);
  p.translate(x, 427 + (427 - y) * 0.8);
  p.scale(s * yaw, -s * 0.8);
  p.rotate(angle);
  p.drawImage(art.pic, -322, -139, 584, 290);
  p.drawImage(art.fin, -96, 16, 160, 132);
  p.restore();
  const a = (t * TAU) / 45;
  g.save();
  for (let h = 0; h < 146; h += 1.7) {
    const u = h / 147,
      dx = (Math.sin(h * 0.77 + a * 7) + Math.sin(h * 0.21 - a * 9)) * u * 15;
    g.globalAlpha = level * (0.07 + 0.12 * Math.sin(h * 2.3 + a * 5) ** 2);
    g.drawImage(pic, 0, h, 640, 1.35, dx, 426 + h * 2, 1280, 1 + u * 1.3);
  }
  g.restore();
}
