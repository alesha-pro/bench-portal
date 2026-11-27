import { layer, rand, gradient, oval, fill, line, path, nib, spline } from "./ink.js";
const ink = "#242d29",
  light = "#d9ccb0",
  green = "#526052",
  gold = "#bba16c";
const headCanvas = layer(540, 420);
{
  const c = headCanvas.getContext("2d");
  c.scale(2, 2);
  c.translate(135, 106);
  // Two branching antlers, fine pale medullary lines.
  for (let k = 0; k < 2; k++) {
    c.save();
    c.translate(k * 18, -k * 4);
    c.rotate(k * 0.15);
    const pts = [
      [0, -20, 11],
      [9, -43, 9],
      [26, -60, 6],
      [46, -72, 4],
      [63, -91, 0.4],
    ];
    nib(c, pts, ink, 12);
    nib(
      c,
      pts.map(([x, y, w]) => [x - 1, y - 1, w * 0.39]),
      "#ab9c73",
      12,
    );
    nib(
      c,
      [
        [18, -52, 6],
        [17, -65, 4],
        [22, -78, 0.4],
      ],
      ink,
      3,
    );
    nib(
      c,
      [
        [37, -67, 4],
        [46, -64, 3],
        [59, -70, 0.4],
      ],
      ink,
      3,
    );
    c.restore();
  }
  // Serrated crest and locks blown towards the flank.
  const locks = [
    [
      [-12, -29, 10],
      [4, -49, 12],
      [31, -51, 8],
      [50, -65, 0.2],
    ],
    [
      [9, -31, 16],
      [29, -48, 13],
      [60, -49, 9],
      [87, -64, 0.3],
    ],
    [
      [12, -22, 19],
      [47, -34, 18],
      [77, -28, 7],
      [105, -47, 0.3],
    ],
    [
      [18, -11, 17],
      [49, -18, 15],
      [78, -9, 8],
      [110, -15, 0.4],
    ],
    [
      [17, 0, 19],
      [44, 1, 16],
      [72, 12, 8],
      [101, 9, 0.4],
    ],
    [
      [15, 10, 16],
      [38, 17, 11],
      [62, 34, 8],
      [90, 38, 0.3],
    ],
    [
      [1, 15, 15],
      [22, 33, 10],
      [39, 51, 6],
      [64, 62, 0.3],
    ],
    [
      [-5, 19, 10],
      [8, 40, 9],
      [18, 62, 4],
      [37, 73, 0.2],
    ],
  ];
  locks.forEach((p, i) => {
    nib(c, p, i % 3 ? ink : green, i, 1, 0.3);
    nib(
      c,
      p.map(([x, y, w]) => [x, y - 2, w * 0.16]),
      i % 3 ? "#7e8068" : gold,
      9 + i,
    );
  });
  const skull =
    "M39 -22Q28 -36 11 -39L15 -46 -7 -38 -5 -44 -26 -36 -35 -36 -32 -30Q-44 -27 -48 -14L-67 -7 -86 -10 -93 -5 -96 3 -88 13 -68 13 -55 9 -37 10 -24 21 -13 22 -2 13 12 18 9 11 31 16 24 6 45 7 35 -3 49 -4Z";
  fill(
    c,
    skull,
    gradient(c, -22, -45, -4, 27, [
      [0, "#28312b"],
      [0.32, "#4e594b"],
      [0.65, "#78806b"],
      [1, "#464e42"],
    ]),
  );
  fill(
    c,
    "M-83 5Q-61 5 -49 0Q-32 -7 -20 -1L-13 9Q-27 9 -35 24Q-44 39 -65 43L-82 40 -89 35Q-71 38 -58 27Q-45 16 -43 10Q-64 18 -80 13Z",
    "#292723",
  );
  fill(c, "M-80 35Q-57 32 -48 20Q-36 7 -26 7Q-35 14 -39 24Q-50 38 -68 39Z", "#9c5844");
  fill(c, "M-88 33Q-83 37 -70 36Q-48 35 -35 18L-22 22Q-39 43 -61 48L-78 46 -85 42 -94 41Z", ink);
  nib(
    c,
    [
      [-89, 37, 1],
      [-72, 41, 3.8],
      [-49, 36, 3],
      [-33, 22, 0.2],
    ],
    light,
    8,
  );
  fill(c, "M-88 -7L-77 -9 -69 -5 -58 -7Q-43 -12 -33 -10Q-44 -4 -54 0L-73 4 -88 6 -94 2Z", "#a19e80");
  fill(c, "M-94 -6L-83 -10 -78 -7 -86 -2 -94 -1Z", ink);
  oval(c, -86, -4, 3.3, 1.5, "#151f1a", -0.2);
  fill(c, "M-53 -14Q-44 -29 -27 -34L-9 -35 -20 -28 0 -31 -12 -22 -27 -21 -38 -16Z", ink);
  fill(c, "M-46 -14Q-34 -24 -18 -24L-26 -17 -38 -12Z", "#e4c172");
  oval(c, -34, -18, 1.6, 3.8, "#232920", 0.65);
  oval(c, -37, -18, 1, 0.7, "#fff2c8");
  nib(
    c,
    [
      [-48, -22, 0.5],
      [-33, -31, 3],
      [-21, -31, 0.65],
    ],
    "#c5bb96",
    1,
  );
  for (const d of [
    "M-22 -12Q-1 -26 11 -22L24 -27Q16 -15 -4 -12L-14 -5Z",
    "M-12 -5Q6 -13 24 -11L39 -14Q28 -4 8 -3L-4 1Z",
    "M-5 3Q12 0 26 7L9 5 1 10Z",
  ])
    fill(c, d, ink);
  for (let i = 0; i < 9; i++) {
    let x = -85 + i * 4.8,
      y = 10 - i * 0.32,
      len = i === 2 ? 14 : 4 + (i % 3);
    fill(c, `M${x} ${y}l4 -1q-1 ${len * 0.65} -5 ${len}Z`, "#f0dfb8");
  }
  for (let i = 0; i < 5; i++) {
    let x = -79 + i * 6,
      y = 36 - i * 0.82;
    fill(c, `M${x} ${y}l1 -6 3 5Z`, light);
  }
  const r = rand(541);
  for (let i = 0; i < 90; i++) {
    const x = -17 + r() * 53,
      y = -24 + r() * 31;
    if ((x - 4) ** 2 / 1050 + (y + 9) ** 2 / 300 > 1) continue;
    line(c, `M${x} ${y}q4 -2 7 -1`, i % 3 ? "#989a7e" : "#42483b", 0.48 + r() * 0.4);
  }
  for (let i = 0; i < 4; i++) {
    const p = [
      [-77 + i * 4, 1 + i * 2, 2.7 - i * 0.24],
      [-102 + i * 2, 8 + i * 4, 1.8],
      [-116 + i * 5, 29 + i * 5, 1.4],
      [-110 + i * 6, 47 + i * 4, 0.9],
      [-88 + i * 7, 52 + i * 2, 0.26],
    ];
    nib(c, p, i % 2 ? ink : gold, i);
  }
  nib(
    c,
    [
      [-29, 22, 4],
      [-38, 41, 3],
      [-57, 57, 1.7],
      [-72, 77, 0.3],
    ],
    ink,
    9,
  );
}
function paintWing(c, far) {
  c.save();
  const sh =
    "M-10 22Q-12 -14 4 -48Q28 -103 84 -138Q119 -161 172 -180Q140 -142 142 -114Q119 -120 91 -90Q87 -65 94 -55Q65 -69 49 -45Q35 -27 39 -10Q16 -19 3 8Z";
  fill(
    c,
    sh,
    gradient(c, 6, 0, 94, -132, [
      [0, far ? "#656d58" : "#303c33"],
      [0.45, far ? "#9ba087" : "#546452"],
      [1, far ? "#b3b39b" : "#8e987f"],
    ]),
  );
  c.save();
  c.clip(path(sh));
  const wash = rand(345);
  for (let i = 0; i < 140; i++) {
    const p = wash(),
      q = wash();
    const ex = 151 - p * 130 + q * 30,
      ey = -161 + p * 138 + q * 15;
    const ox = 6 + wash() * 16,
      oy = -32 - wash() * 29;
    nib(
      c,
      [
        [ox, oy, 0.2],
        [ox + (ex - ox) * 0.27, oy + (ey - oy) * 0.4, 1 + wash() * 3],
        [ox + (ex - ox) * 0.63, oy + (ey - oy) * 0.82, 1 + wash() * 2],
        [ex, ey, 0.2],
      ],
      i % 4 ? "rgba(24,41,33,.28)" : "rgba(216,206,163,.40)",
      i,
      1,
      0.42,
    );
  }
  for (let j = 0; j < 11; j++) {
    const f = j / 11;
    nib(
      c,
      [
        [24 + f * 92, -78 - f * 72, 0.3],
        [35 + f * 92, -96 - f * 63, 3.3],
        [62 + f * 88, -123 - f * 52, 0.4],
      ],
      "rgba(225,218,178,.33)",
      j,
    );
  }
  c.restore();
  const bones = [
    [
      [0, 14, 10],
      [6, -49, 8],
      [54, -115, 6],
      [112, -157, 3],
      [172, -180, 0.5],
    ],
    [
      [4, -32, 7],
      [36, -78, 5],
      [94, -113, 3],
      [142, -114, 0.4],
    ],
    [
      [5, -28, 5],
      [39, -62, 3.2],
      [74, -67, 2],
      [94, -55, 0.2],
    ],
    [
      [0, -18, 4],
      [19, -31, 3],
      [39, -10, 0.3],
    ],
  ];
  bones.forEach((p, i) => {
    nib(c, p, far ? "#69735e" : ink, i);
    nib(
      c,
      p.map(([x, y, w]) => [x, y - 1, w * 0.2]),
      gold,
      i,
    );
  });
  const r = rand(32);
  for (let i = 0; i < 33; i++) {
    let u = (i + 0.5) / 33,
      xx = 8 + u * 118,
      yy = -52 - 111 * u + 21 * u * u;
    nib(
      c,
      [
        [xx, yy, 0.4],
        [xx + 6, yy - 4 + r() * 4, 1],
        [xx + 18 + r() * 16, yy - 10 + r() * 7, 0.2],
      ],
      far ? "#9caa91" : "#909c82",
      9 + i,
    );
  }
  line(
    c,
    "M171 -179Q141 -141 142 -114Q120 -120 91 -90Q87 -66 94 -55Q65 -69 49 -45Q35 -27 39 -10",
    far ? "#858c76" : "#374439",
    1.5,
  );
  c.restore();
}
const wings = [false, true].map((far) => {
  const cv = layer(400, 428),
    ctx = cv.getContext("2d");
  ctx.scale(2, 2);
  ctx.translate(15, 185);
  paintWing(ctx, far);
  return cv;
});
function wing(c, flap, far, rest) {
  c.save();
  c.translate(far ? 116 : 96, far ? 44 : 40);
  c.rotate((far ? 0.19 : -0.05) + flap * 0.19 + rest * 0.46);
  c.scale(far ? 0.85 : 1, (far ? 0.66 : 0.84) * (1 - 0.46 * rest));
  c.drawImage(wings[Number(far)], -15, -185, 200, 214);
  c.restore();
}
function talon(c, x, y, len, angle, flip = 1) {
  c.save();
  c.translate(x, y);
  c.rotate(angle);
  c.scale(flip, 1);
  let p = [
    [0, 0, 17],
    [8, 12, 15],
    [18, 27, 10],
    [6, 35, 8],
    [-8, len, 5],
  ];
  nib(c, p, ink, 11);
  nib(
    c,
    p.map(([a, b, w]) => [a - 1, b, w * 0.45]),
    green,
    13,
  );
  for (let i = 0; i < 3; i++) {
    const xx = -8 - i * 4,
      yy = len + i * 3;
    nib(
      c,
      [
        [-7, len - 2, 5],
        [xx - 3, yy + 3, 3],
        [xx - 9, yy + 5, 2],
        [xx - 13, yy + 3, 0.2],
      ],
      ink,
      i,
    );
    nib(
      c,
      [
        [xx - 10, yy + 5, 1.3],
        [xx - 13, yy + 3, 0.15],
      ],
      light,
      i,
    );
  }
  c.restore();
}
export function dragon(c, t, pose) {
  const { x, y, s, angle, lash, curl, rest } = pose;
  c.save();
  c.translate(x, y);
  c.rotate(angle);
  c.scale(s, s);
  const wave = Math.sin(t * 3.15),
    sw = Math.sin(t * 2.22),
    tail = lash * 38;
  const controls = [
    [9, 1, 34],
    [58, 1 + 5 * sw, 47],
    [105, 24 + 5 * wave, 51],
    [145, 74 + 7 * sw, 53],
    [170, 118 + 10 * wave, 51],
    [216, 148 + 9 * sw - 13 * curl, 46],
    [271, 143 + wave * 11 - 17 * curl, 39],
    [318 + tail * 0.3, 110 - curl * 17, 31],
    [338 + tail * 0.6, 59 + 12 * sw, 23],
    [326 + tail, 22 + wave * 19, 17],
    [290 + tail * 0.7, 4 + 12 * sw, 12],
    [272 + tail * 0.6, -16 + wave * 14, 8],
    [290 + tail * 0.8, -42 + sw * 20, 4],
    [314 + tail, -49 + wave * 22, 0.2],
  ];
  wing(c, sw + 0.35, true, rest);
  talon(c, 142, 85, 45, 0.11 + 0.22 * sw, -1);
  const spine = spline(controls, 6);
  // Dorsal pennants follow the outward normal as the tail winds back on itself.
  for (let i = 3; i < spine.length - 2; i += 2) {
    const [x, y, w] = spine[i],
      a = spine[i - 1],
      b = spine[i + 1],
      d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1,
      tx = (b[0] - a[0]) / d,
      ty = (b[1] - a[1]) / d,
      nx = ty,
      ny = -tx;
    const bx = x + nx * w * 0.34,
      by = y + ny * w * 0.34,
      ax = bx + nx * (w * 0.58) + tx * w * 0.42,
      ay = by + ny * (w * 0.58) + ty * w * 0.42;
    c.beginPath();
    c.moveTo(bx - tx * 5, by - ty * 5);
    c.quadraticCurveTo(bx + nx * w * 0.3, by + ny * w * 0.3, ax, ay);
    c.quadraticCurveTo(bx + tx * 6 + nx * 3, by + ty * 6 + ny * 3, bx + tx * 7, by + ty * 7);
    c.fillStyle = i % 3 ? ink : "#67725c";
    c.fill();
  }
  nib(c, controls, ink, 29, 1, 0.04);
  nib(
    c,
    controls.map(([x, y, w]) => [x, y - 1, w * 0.88]),
    green,
    31,
    1,
    0.03,
  );
  for (let i = 2; i < spine.length - 2; i++) {
    const [x, y, w] = spine[i],
      a = spine[i - 1],
      b = spine[i + 1],
      angle = Math.atan2(b[1] - a[1], b[0] - a[0]);
    c.save();
    c.translate(x, y);
    c.rotate(angle);
    if (i % 2 === 0) {
      let q = w * 0.45;
      c.beginPath();
      c.moveTo(-4, q * 0.25);
      c.quadraticCurveTo(-1, q * 0.75, 5, q * 0.78);
      c.quadraticCurveTo(5, q * 0.92, 2, q);
      c.quadraticCurveTo(-4, q * 0.94, -8, q * 0.65);
      c.closePath();
      c.fillStyle = i % 4 ? "#aaa78a" : "#969b7f";
      c.fill();
    }
    if (w > 5) {
      for (let j = 0; j < 4; j++) {
        const xx = (j % 2) * 2,
          yy = (j - 1.8) * w * 0.16,
          ww = w * 0.09;
        c.beginPath();
        c.moveTo(xx - ww, yy - ww * 0.7);
        c.quadraticCurveTo(xx + ww * 1.4, yy - ww * 0.35, xx + ww * 0.9, yy + ww * 0.8);
        c.strokeStyle = (i + j) % 4 ? "#2f3b31" : "#9b9e7e";
        c.lineWidth = 0.7 + w * 0.011;
        c.stroke();
      }
    }
    c.restore();
  }
  wing(c, wave, false, rest);
  talon(c, 64, 19, 52, 0.47 + wave * 0.16);
  talon(c, 171, 119, 40, -0.66 + lash * 0.65, -1);
  c.save();
  c.rotate(-0.05 + wave * 0.045 + lash * 0.07);
  c.drawImage(headCanvas, -135, -106, 270, 210);
  c.restore();
  c.restore();
}
