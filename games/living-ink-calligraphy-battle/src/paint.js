import { rand, clamp, smooth, mix, TAU, nib, spline, fill, line, oval, gradient, seal } from "./ink.js";
const writing = [
  [
    [240, 523, 2],
    [289, 528, 18],
    [359, 490, 43],
    [458, 460, 54],
    [551, 463, 30],
    [639, 423, 10],
    [675, 400, 0.6],
  ],
  [
    [388, 399, 1],
    [377, 439, 27],
    [344, 500, 37],
    [330, 546, 29],
    [407, 545, 13],
    [495, 508, 0.3],
  ],
  [
    [523, 402, 1],
    [541, 438, 15],
    [545, 482, 25],
    [579, 520, 21],
    [644, 520, 6],
    [673, 511, 0.6],
  ],
  [
    [1160, 313, 1],
    [1147, 345, 17],
    [1095, 347, 33],
    [1026, 327, 44],
    [949, 334, 29],
    [887, 366, 7],
    [865, 380, 0.4],
  ],
  [
    [1028, 282, 2],
    [1057, 319, 18],
    [1098, 402, 36],
    [1184, 462, 42],
    [1265, 444, 20],
    [1288, 401, 8],
    [1251, 365, 0.4],
  ],
];
const times = [
  [0.28, 1.54],
  [1.79, 2.43],
  [2.62, 3.13],
  [3.53, 4.22],
  [4.43, 5.37],
];
function brush(c, x, y, a, t) {
  c.save();
  c.translate(x, y);
  c.rotate(a);
  c.scale(1 + 0.07 * Math.sin(t * 5), 1);
  const handle = "M88 -12Q152 -14 234 -13L437 -11Q449 -11 450 -1Q450 8 440 9L224 13 90 15Z";
  c.shadowColor = "rgba(55,41,28,.32)";
  c.shadowBlur = 7;
  c.shadowOffsetY = 8;
  fill(
    c,
    handle,
    gradient(c, 0, -15, 0, 16, [
      [0, "#513c29"],
      [0.18, "#aa7542"],
      [0.4, "#d7ac6d"],
      [0.64, "#ae8050"],
      [0.9, "#805936"],
      [1, "#4d3929"],
    ]),
  );
  c.shadowColor = "transparent";
  const r = rand(451);
  for (let i = 0; i < 85; i++) {
    let x = 103 + r() * 292,
      y = r() * 19 - 9;
    nib(
      c,
      [
        [x, y, 0.3],
        [x + 5 + r() * 9, y - 0.4, 0.7],
        [x + 14 + r() * 23, y, 0.3],
      ],
      i % 3 ? "rgba(74,45,25,.32)" : "#e3bc83",
      i,
    );
  }
  for (const x of [162, 302, 421]) {
    fill(c, `M${x} -12q-1 10 1 24l6 -1q-3 -12 -1 -23Z`, "#775835");
    line(c, `M${x + 1} -12q-2 13 2 23`, "#d0a875", 1.1);
  }
  fill(c, "M65 -13Q78 -18 98 -14L100 15Q82 20 67 15Z", "#2d3029");
  for (let i = 0; i < 11; i++)
    line(c, `M${68 + i * 2.7} -14q-1 16 3 29`, i % 2 ? "#84765a" : "#464637", 1.4);
  fill(
    c,
    "M0 0Q17 -3 24 -12Q41 -27 69 -14Q80 0 69 14Q41 25 24 12Q15 5 0 0Z",
    gradient(c, 0, 0, 70, 0, [
      [0, "#131b19"],
      [0.33, "#262d26"],
      [0.62, "#5a5948"],
      [0.83, "#96886b"],
      [1, "#beaa81"],
    ]),
  );
  for (let j = 0; j < 53; j++) {
    const q = j / 52 - 0.5;
    const z = r();
    nib(
      c,
      [
        [r() * 10 - 5, q * 5, 0.2],
        [25, 23 * q, 1],
        [46, 35 * q + z * 2, 0.8],
        [69, 27 * q, 0.3],
      ],
      j % 3 ? "rgba(35,37,30,.52)" : "rgba(226,207,164,.63)",
      j,
    );
  }
  c.restore();
}
function paintStroke(c, pts, p, wet, idx, age) {
  const r = rand(200 + idx);
  if (wet) {
    for (let k = 0; k < 3; k++) {
      nib(
        c,
        pts.map(([x, y, w]) => [
          x + r() * 4 - 2,
          y + r() * 5 - 2,
          w * (1.025 + k * 0.045 + smooth(0, 1.25, age) * 0.11),
        ]),
        "rgba(45,48,37,.12)",
        k + 14,
        p,
        0.45,
      );
    }
  }
  nib(c, pts, "#242922", idx, p, 0.26);
  for (let j = 0; j < 26; j++) {
    const f = j / 25 - 0.5;
    const hp = pts.map(([x, y, w], i) => {
      const a = pts[Math.max(0, i - 1)],
        b = pts[Math.min(pts.length - 1, i + 1)],
        dx = b[0] - a[0],
        dy = b[1] - a[1],
        len = Math.hypot(dx, dy);
      return [x - (dy / len) * w * f, y + (dx / len) * w * f, 0.2 + r() * (j % 4 ? 0.9 : 1.8)];
    });
    const skip = j % 4 === 0 ? 0.35 : 0.1,
      portion = 0.48 + r() * 0.4;
    const arr = spline(hp, 8),
      start = Math.floor(skip * arr.length * r()),
      stop = Math.floor(portion * arr.length);
    const section = arr.slice(start, stop);
    if (section.length > 1 && p * arr.length > start)
      nib(
        c,
        section,
        j % 5 ? "rgba(161,159,130,.34)" : "rgba(213,202,167,.66)",
        j,
        clamp((p * arr.length - start) / (stop - start)),
      );
  }
  const a = spline(pts, 14);
  for (let i = 0; i < a.length * p; i++) {
    let [x, y, w] = a[i];
    const side = i % 2 ? -1 : 1;
    for (let j = 0; j < (wet ? 6 : 2); j++) {
      const x0 = x + (r() - 0.5) * w * 0.9,
        y0 = y + side * w * (0.4 + r() * 0.24);
      nib(
        c,
        [
          [x0, y0, 0.5],
          [x0 + r() * 4, y0 + side * r() * 3, 0.7],
          [x0 + 2 + r() * 5, y0 + side * r() * 5, 0.15],
        ],
        "rgba(45,47,35,.32)",
        i + j,
      );
    }
  }
  if (wet) {
    const n = Math.floor((a.length - 1) * p);
    for (let i = Math.max(2, n - 15); i < n; i += 4) {
      const [x, y, w] = a[i];
      oval(c, x, y - w * 0.17, 1.4 + w * 0.03, 0.55, "rgba(244,233,200,.66)", -0.2);
    }
  }
}
export function inscription(c, t, wet) {
  let tip = null;
  for (let i = 0; i < writing.length; i++) {
    const [a, b] = times[i],
      p = clamp((t - a) / (b - a));
    if (p <= 0) continue;
    paintStroke(c, writing[i], p, wet, i, t - a);
    if (t <= b + 0.09) {
      const s = spline(writing[i], 16),
        k = p * (s.length - 1),
        j = Math.floor(k),
        q = s[Math.min(s.length - 1, j + 1)];
      tip = [mix(s[j][0], q[0], k - j), mix(s[j][1], q[1], k - j)];
    }
  }
  for (let i = 1; i < times.length; i++) {
    const lo = times[i - 1][1],
      hi = times[i][0];
    if (t > lo && t < hi) {
      const u = smooth(lo, hi, t),
        a = writing[i - 1].at(-1),
        b = writing[i][0];
      tip = [mix(a[0], b[0], u), mix(a[1], b[1], u) - Math.sin(u * Math.PI) * 61];
    }
  }
  if (t < 0.28) tip = [mix(160, 240, smooth(0.04, 0.28, t)), mix(434, 523, smooth(0.04, 0.28, t))];
  if (t > 5.37 && t < 5.95) tip = [1251 + (t - 5.37) * 180, 365 - (t - 5.37) * 265];
  if (tip) {
    c.save();
    c.globalAlpha *= smooth(0.04, 0.25, t) * (1 - smooth(5.38, 5.94, t));
    brush(c, ...tip, -0.85 + 0.13 * Math.sin(t * 2.3), t);
    c.restore();
  }
}
const glyphs = [
  [
    [
      [15, 1, 1],
      [15, 8, 3],
      [14, 15, 0.8],
    ],
    [
      [15, 6, 1],
      [23, 5, 3],
      [28, 4, 0.3],
    ],
    [
      [6, 15, 0.8],
      [14, 13, 3],
      [27, 11, 1.7],
      [23, 18, 0.5],
    ],
    [
      [7, 14, 2],
      [7, 24, 3],
      [1, 35, 0.4],
    ],
    [
      [11, 21, 1],
      [19, 18, 2],
      [24, 17, 0.4],
    ],
    [
      [15, 16, 1],
      [15, 24, 2.2],
      [20, 24, 2],
      [24, 21, 0.4],
    ],
    [
      [12, 26, 0.6],
      [11, 31, 2.7],
      [4, 37, 0.3],
    ],
    [
      [18, 26, 1],
      [17, 32, 2.5],
      [19, 35, 2],
      [26, 34, 2],
      [29, 28, 0.3],
    ],
  ],
  [
    [
      [7, 1, 0.6],
      [10, 3, 2.8],
      [11, 5, 0.6],
    ],
    [
      [2, 8, 0.6],
      [11, 6, 2],
      [17, 6, 0.6],
    ],
    [
      [5, 9, 1],
      [8, 13, 2],
      [9, 14, 0.3],
    ],
    [
      [14, 7, 0.5],
      [12, 12, 2],
      [11, 15, 0.4],
    ],
    [
      [1, 16, 0.6],
      [9, 14, 2.8],
      [16, 13, 0.6],
    ],
    [
      [4, 18, 0.5],
      [4, 28, 2.6],
      [3, 36, 0.8],
    ],
    [
      [5, 19, 0.6],
      [13, 17, 2.7],
      [14, 26, 2],
      [12, 35, 1.6],
      [9, 32, 0.4],
    ],
    [
      [5, 23, 1],
      [11, 21, 1.7],
    ],
    [
      [5, 28, 1],
      [11, 26, 1.8],
    ],
    [
      [20, 1, 0.6],
      [19, 7, 2.5],
      [25, 6, 2],
      [29, 5, 0.5],
    ],
    [
      [19, 11, 1],
      [26, 9, 2.2],
      [26, 14, 1.6],
      [19, 15, 2],
      [19, 27, 2.3],
      [19, 33, 2],
      [23, 35, 2],
      [30, 33, 1.5],
      [31, 27, 0.4],
    ],
    [
      [20, 19, 0.7],
      [27, 17, 2.3],
    ],
    [
      [20, 23, 0.8],
      [28, 21, 2.3],
    ],
    [
      [20, 28, 0.7],
      [28, 26, 2.2],
    ],
  ],
];
export function colophon(c, x, y, s = 1) {
  c.save();
  c.translate(x, y);
  c.scale(s, s);
  glyphs.forEach((g, i) => {
    for (let j = 0; j < g.length; j++) nib(c, g[j], "#373b30", j + i, 1, 0.28);
    c.translate(0, 43);
  });
  seal(c, 17, 12, 14, -0.045);
  c.restore();
}
export const beats = [9.65, 13.2, 17.45, 21.35, 25.55, 29.9, 34.85];
export const hits = [
  [670, 604],
  [891, 456],
  [1033, 586],
  [634, 620],
  [861, 409],
  [855, 425],
  [818, 437],
];
export function shock(t) {
  return beats.reduce((s, b) => {
    let d = t - b;
    return s + (d >= 0 && d < 1.65 ? Math.sin(d * 14) * Math.exp(-d * 2.9) : 0);
  }, 0);
}
export function impacts(c, t, gold) {
  beats.forEach((b, h) => {
    let age = t - b;
    if (age < -0.29 || age > 1.85) return;
    const r = rand(820 + h),
      [x, y] = hits[h],
      direction = h % 2 ? 1 : -1;
    if (age >= 0) {
      let a = age;
      c.save();
      c.globalAlpha *= 1 - smooth(0.35, 1.75, a);
      for (let i = 0; i < (h === 6 ? 90 : 58); i++) {
        const an = r() * TAU,
          sp = 70 + r() * 240,
          dx = Math.cos(an) * sp,
          dy = Math.sin(an) * sp * 0.65 - 54,
          px = x + dx * a,
          py = y + dy * a + 86 * a * a,
          w = (2 + r() * 6) * (1 - 0.25 * a);
        if (i % 4 === 0) {
          c.save();
          c.translate(px, py);
          c.rotate(an + a * 3);
          fill(c, "M-1 -3L5 -5 11 1 3 3 -8 1Z", i % 8 ? "#5b5d4f" : "#30392e");
          c.restore();
        } else
          oval(
            c,
            px,
            py,
            w * (i % 3 ? 1 : 0.38),
            w * 0.41,
            i % 6 === 0 && gold ? "#b5893b" : i % 5 ? "#323a30" : "#a4452b",
            an,
          );
      }
      for (let j = 0; j < 3; j++) {
        let sz = 18 + a * (75 + j * 28);
        c.beginPath();
        c.ellipse(x, y, sz, sz * 0.31, -0.3, j * 0.4, 3.7 + j * 0.5);
        c.strokeStyle = gold ? "rgba(171,123,45,.65)" : "rgba(68,73,57,.51)";
        c.lineWidth = 2.5 - j * 0.5;
        c.stroke();
      }
      c.restore();
    }
    c.save();
    const fall = 1 - smooth(-0.29, 0, age),
      fade = age < 0 ? smooth(-0.29, -0.15, age) : 1 - smooth(0.55, 1.7, age);
    c.globalAlpha *= fade;
    c.translate(x + direction * (70 + fall * 65), y - 50 - fall * 99);
    c.rotate(direction * (0.13 + fall * 0.8));
    if (age >= 0 && age < 0.48 && gold) {
      const radius = 22 + age * 78,
        g = c.createRadialGradient(0, 0, 5, 0, 0, radius);
      g.addColorStop(0, "#e0a555ae");
      g.addColorStop(1, "#efb95400");
      c.fillStyle = g;
      c.fillRect(-radius, -radius, 2 * radius, 2 * radius);
    }
    seal(c, 0, 0, (36 + fall * 24) * (1 + 0.2 * Math.exp(-Math.max(0, age) * 16)), 0, "#af3f29", h);
    c.restore();
  });
}
export function claws(c, t) {
  for (const [b, h] of [
    [9.65, 0],
    [17.45, 2],
    [25.55, 4],
  ]) {
    const u = (t - b + 0.26) / 0.68;
    if (u <= 0 || u >= 1) continue;
    const [x, y] = hits[h];
    c.save();
    c.globalAlpha *= Math.sin(u * Math.PI);
    for (let i = 0; i < 4; i++) {
      let dx = i * 9,
        dy = i * 5;
      nib(
        c,
        [
          [x - 100 + dx, y + 41 + dy, 1],
          [x - 24 + dx, y + 8 + dy, 5],
          [x + 39 + dx, y - 34 + dy, 3],
          [x + 80 + dx, y - 79 + dy, 0.3],
        ],
        i % 2 ? "#3b4034" : "#ae7842",
        i,
        clamp(u * 2),
      );
    }
    c.restore();
  }
}
export function flames(c, t, dragon) {
  for (const [b, len] of [
    [13, 1.5],
    [21.18, 1.58],
    [30.7, 3.45],
  ]) {
    const age = t - b,
      phase = age / len;
    if (phase <= 0 || phase >= 1) continue;
    c.save();
    c.translate(dragon.x, dragon.y);
    c.rotate(dragon.angle);
    c.scale(dragon.s, dragon.s);
    c.translate(-86, 17);
    c.rotate(-0.32);
    const r = rand(81);
    c.globalAlpha *= Math.sin(Math.PI * phase) ** 0.5;
    for (let i = 0; i < 15; i++) {
      const off = (r() - 0.5) * 33,
        ny = (r() - 0.5) * 104,
        nx = -115 - r() * 177;
      let p = [
        [0, off * 0.1, 0.8],
        [-41, off + Math.sin(t * 7) * 4, 4 + r() * 9],
        [-79, off + ny * 0.52, 2 + r() * 8],
        [nx * 0.71, ny + 12 * Math.sin(t * 6 + i), 1 + r() * 7],
        [nx, ny + 29 * Math.cos(t * 5 + i), 0.3],
      ];
      nib(
        c,
        p,
        i % 4 === 0 ? "#353d32" : i % 3 ? "#a64d30" : "#c68e4e",
        i,
        smooth(0, 0.3, phase),
        0.42,
      );
    }
    c.restore();
  }
}
export function vortex(c, t, gold) {
  const a = smooth(27.7, 31.3, t) * (1 - smooth(35.15, 37.8, t));
  if (!a) return;
  const r = rand(813);
  c.save();
  c.translate(812, 441);
  c.rotate(-0.24);
  c.globalAlpha *= a;
  for (let i = 0; i < 53; i++) {
    let radius = 60 + r() * 344,
      angle = r() * TAU + t * (i % 3 ? 0.82 : 1.17),
      len = 0.5 + r() * 1.9,
      w = (2 + r() * 17) * (i % 3 ? 0.5 : 1);
    let p = [];
    for (let k = 0; k < 6; k++) {
      const u = k / 5,
        an = angle + len * u,
        rr = radius + u * 18;
      p.push([Math.cos(an) * rr, Math.sin(an) * rr * 0.57, Math.max(0.14, Math.sin(u * Math.PI) * w)]);
    }
    nib(
      c,
      p,
      i % 9 === 0 && gold
        ? "rgba(169,126,52,.64)"
        : i % 6 === 0
          ? "rgba(148,69,44,.57)"
          : i % 3
            ? "rgba(83,93,76,.24)"
            : "rgba(44,54,44,.69)",
      i,
      1,
      0.38,
    );
  }
  c.restore();
}
export function petals(c, t, gold) {
  const age = t - 34.85;
  if (age < 0 || age > 7.7) return;
  const r = rand(1702);
  for (let i = 0; i < 260; i++) {
    const a = r() * TAU,
      v = 40 + r() * 330,
      d = r(),
      w = 1 + r() * 5,
      spin = r() * 4 - 2;
    const goldLeaf = i % 3 !== 0;
    if (goldLeaf && !gold) continue;
    const life = goldLeaf ? 1.2 + d * 2.5 : 4 + d * 3.6;
    if (age > life) continue;
    const drift = 1 - Math.exp(-age * (goldLeaf ? 0.88 : 0.64)),
      x = 812 + Math.cos(a) * v * drift * 2.3 + Math.sin(spin + age) * age * 9,
      y = 432 + Math.sin(a) * v * 0.9 * drift + age * age * (goldLeaf ? 23 : 9) - age * 26;
    c.save();
    c.globalAlpha *= smooth(0, 0.12, age) * (1 - smooth(life * 0.62, life, age));
    c.translate(x, y);
    c.rotate(a + spin * age);
    c.scale(w * Math.max(0.17, Math.abs(Math.cos(age * 2 + d * 4))), w);
    if (goldLeaf) fill(c, "M-1.8 0L-.2 -.43 1.9 0 .1 .61Z", i % 2 ? "#d8ad55" : "#947339");
    else if (i % 12 === 0) {
      for (let j = 0; j < 5; j++) {
        c.rotate(TAU / 5);
        fill(
          c,
          "M0 0C-1.25 -.7 -1.15 -2.2 -.65 -2.5Q-.3 -2.65 -.04 -2.19Q.45 -2.7 .82 -2.38C1.36 -1.8 .95 -.63 0 0Z",
          i % 8 ? "#bf7666" : "#d49a87",
        );
      }
      oval(c, 0, 0, 0.38, 0.38, "#9d713a");
    } else {
      fill(
        c,
        "M0 1.7C-2 .3 -1.6 -1.4 -.65 -1.45Q-.2 -1.48 0 -.91Q.6 -1.5 1 -1.2C1.8 -.2 .7 1.2 0 1.7Z",
        i % 4 ? "#b96857" : "#d49a87",
      );
      line(c, "M0 1.3Q-.4 .1 -.6 -.7", "#e9b5a0", 0.11);
    }
    c.restore();
  }
}

// The left shelf loses its projecting slabs on the first claw strike. Every shard
// carries its fracture face and a ballistic transform until it dissolves in wash.
const fragments = [
  ["M588 646L604 620 624 615 641 587 647 592 644 614 634 626 641 628 627 641 608 650Z", 619, 625],
  ["M620 642L640 616 649 611 657 595 664 599 661 617 649 637Z", 646, 619],
  ["M627 643L646 628 658 627 675 608 681 610 673 628 656 646Z", 654, 632],
];
export function rockfall(c, t) {
  const u = Math.max(0, t - 9.65);
  if (u > 1.85) return;
  fragments.forEach(([shape, x, y], i) => {
    c.save();
    c.translate(x + (38 + i * 49) * u, y - (86 + i * 26) * u + 129 * u * u);
    c.rotate(u * (i - 1.6) * 2.7);
    c.translate(-x, -y);
    c.globalAlpha *= 1 - smooth(0.8, 1.85, u);
    fill(
      c,
      shape,
      gradient(c, 610, 608, 632, 645, [
        [0, "#52604f"],
        [0.46, "#777e65"],
        [1, "#a6a58b"],
      ]),
    );
    for (let k = 0; k < 4; k++)
      nib(
        c,
        [
          [x + 8 + k, y - 16, 0.3],
          [x + 5 + k, y - 4, 1.5],
          [x - 7 + k, y + 9, 0.2],
        ],
        "#394638",
        k,
      );
    c.restore();
  });
}
export function tailWave(c, t, gold) {
  for (const b of [12.98, 21.12, 29.68]) {
    const age = t - b;
    if (age < 0 || age > 1.28) continue;
    c.save();
    c.globalAlpha *= Math.sin((Math.PI * age) / 1.28) ** 0.7;
    const r = rand(342);
    for (let j = 0; j < 18; j++) {
      let rad = 90 + age * 345 + j * 1.65,
        cy = 486 + r() * 17,
        pts = [];
      for (let k = 0; k < 8; k++) {
        let f = k / 7,
          a = 0.16 + f * 2.86;
        pts.push([
          1125 + Math.cos(a) * rad * 1.23,
          cy + Math.sin(a) * rad * 0.32,
          (0.15 + Math.sin(f * Math.PI)) * (j % 4 ? 1.2 : 3.2),
        ]);
      }
      nib(c, pts, j % 5 === 0 && gold ? "rgba(165,130,61,.63)" : "rgba(58,74,59,.43)", j);
    }
    for (let j = 0; j < 30; j++) {
      const px = 1130 + age * (110 + r() * 186) + r() * 89,
        py = 467 + (r() - 0.5) * 146 - age * 45;
      nib(
        c,
        [
          [px, py, 0.2],
          [px + 6, py - 3, 3],
          [px + 14, py - 10, 0.3],
        ],
        "#536448",
        j,
      );
    }
    c.restore();
  }
}
export function sweepCut(c, t) {
  for (const b of [15.18, 21.85]) {
    let u = (t - b) / 0.52;
    if (u < 0 || u > 1) continue;
    const r = rand(429);
    for (let i = 0; i < 65; i++) {
      let y = 32 + r() * 827,
        w = 10 + r() * 57,
        x = -1550 + u * 4550 + y * 0.28,
        pts = [
          [x - 300, y + 89, 0.8],
          [x + 36, y + 13, w],
          [x + 445, y - 57, w * 1.5],
          [x + 750, y - 82, w * 0.65],
          [x + 941, y - 77, 0.4],
        ];
      nib(c, pts, i % 7 === 0 ? "#7e8066" : i % 3 ? "#2f3930" : "#444c3e", i, 1, 0.36);
    }
  }
}

export function burst(c, t, gold) {
  const age = t - 34.85;
  if (age < 0 || age > 2.65) return;
  c.save();
  c.translate(814, 421);
  const r = rand(317),
    rush = 1 - Math.exp(-age * 2.4);
  for (let i = 0; i < 132; i++) {
    let a = r() * TAU,
      v = 38 + r() * 363,
      k = 0.4 + r() * 1.7,
      rr = v * rush,
      dx = Math.cos(a),
      dy = Math.sin(a) * 0.65;
    let x = dx * rr,
      y = dy * rr + age * age * 8,
      drag = (1 - rush * 0.84) * (0.55 + r() * 0.5),
      le = (10 + v * 0.22) * drag,
      w = 0.6 + r() * 5.2;
    c.globalAlpha = (1 - smooth(k * 0.53, k + 0.42, age)) * 0.86;
    if (!c.globalAlpha) continue;
    nib(
      c,
      [
        [x - dx * le, y - dy * le, 0.2],
        [x - dx * le * 0.21, y - dy * le * 0.18, w],
        [x + dx * le * 0.22, y + dy * le * 0.22, 0.3],
      ],
      i % 7 === 0 ? "#a35538" : i % 4 === 0 && gold ? "#c6a452" : i % 3 ? "#4a5547" : "#787859",
      i,
      1,
      0.53,
    );
  }
  c.restore();
}
