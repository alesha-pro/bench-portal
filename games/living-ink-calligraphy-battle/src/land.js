import { layer, rand, gradient, oval, line, fill, path, nib, TAU } from "./ink.js";
export const paper = { x: 62, y: 64, w: 1476, h: 764 };
function tile(seed, amount) {
  const im = layer(480, 480),
    c = im.getContext("2d"),
    data = c.createImageData(480, 480),
    r = rand(seed);
  for (let i = 0; i < data.data.length; i += 4) {
    const v = r() < 0.51 ? 39 : 255;
    data.data[i] = v;
    data.data[i + 1] = v;
    data.data[i + 2] = v - 7;
    data.data[i + 3] = r() * amount;
  }
  c.putImageData(data, 0, 0);
  for (let i = 0; i < 1500; i++) {
    const x = r() * 480,
      y = r() * 480,
      d = 2 + 14 * r(),
      h = (r() - 0.5) * 6;
    c.strokeStyle = i % 3 ? "rgba(71,55,35,.08)" : "rgba(255,253,226,.7)";
    c.lineWidth = 0.25 + r() * 0.5;
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(x + d * 0.3, y + h * 0.1, x + d, y + h);
    c.stroke();
  }
  return im;
}
export const fiber = tile(528, 20);
function desk(c) {
  c.fillStyle = gradient(c, 0, 0, 120, 900, [
    [0, "#2c241f"],
    [0.45, "#5b4131"],
    [1, "#302720"],
  ]);
  c.fillRect(0, 0, 1600, 900);
  const r = rand(192);
  for (let i = 0; i < 1740; i++) {
    const x = r() * 1850 - 200,
      y = r() * 920 - 10,
      d = 30 + r() * 490;
    c.beginPath();
    c.moveTo(x, y);
    c.bezierCurveTo(x + d * 0.37, y - 9 * r(), x + d * 0.71, y + 4 * r(), x + d, y - 2);
    c.strokeStyle = i % 3 ? "rgba(17,13,11,.22)" : "rgba(190,143,94,.18)";
    c.lineWidth = 0.3 + r() * 1.4;
    c.stroke();
  }
}
function jade(c, x, y, rot) {
  c.save();
  c.translate(x, y);
  c.rotate(rot);
  c.scale(1, 0.88);
  const body = "M-74 -5 Q-79 -21 -59 -24 L46 -22 Q75 -23 81 -6 Q87 13 70 18 L-53 23 Q-70 22 -74 10Z";
  c.shadowColor = "#221b16b0";
  c.shadowBlur = 7;
  c.shadowOffsetY = 6;
  fill(
    c,
    body,
    gradient(c, 0, -23, 4, 26, [
      [0, "#b8be96"],
      [0.21, "#899c80"],
      [0.43, "#708b77"],
      [0.74, "#486659"],
      [1, "#344c44"],
    ]),
  );
  c.shadowColor = "transparent";
  c.save();
  c.clip(path(body));
  const r = rand(63);
  for (let i = 0; i < 135; i++)
    oval(c, r() * 170 - 85, r() * 52 - 26, 1 + r() * 5, 0.4 + r() * 2, "rgba(232,220,167,.12)", r());
  for (let i = 0; i < 4; i++) {
    c.save();
    c.translate(-53 + i * 33, -1);
    line(
      c,
      "M-14 10Q-4 -2 0 1Q12 10 11 0Q10 -8 1 -7Q-4 -7 -3 -2Q-2 1 1 -2 M4 10Q14 4 18 -5",
      "#334c44",
      2.5,
    );
    c.translate(0, -1.3);
    line(c, "M-14 10Q-4 -2 0 1Q12 10 11 0Q10 -8 1 -7Q-4 -7 -3 -2Q-2 1 1 -2", "#b4bd96", 1);
    c.restore();
  }
  c.restore();
  line(c, "M-68 -13Q-64 -21 -52 -21L45 -20", "#d5d2aa", 1.4);
  c.restore();
}
function stone(c) {
  c.save();
  c.translate(1519, 811);
  c.rotate(-0.3);
  let sh =
    "M-81 -32C-72 -48 -43 -47 -17 -45L53 -40Q87 -36 84 -9L79 33Q73 46 50 47L-57 41Q-88 39 -87 19Z";
  c.shadowColor = "#191613af";
  c.shadowBlur = 10;
  c.shadowOffsetY = 7;
  fill(
    c,
    sh,
    gradient(c, 0, -45, 0, 50, [
      [0, "#55574b"],
      [0.45, "#323931"],
      [1, "#1f2420"],
    ]),
  );
  c.shadowColor = "transparent";
  line(c, "M-79 0Q-81 -29 -65 -34Q-27 -44 53 -33Q77 -31 77 -10", "#82816b", 1.3);
  oval(c, 14, -3, 58, 27, "#191e1c");
  oval(
    c,
    14,
    -1,
    52,
    22,
    gradient(c, 0, -24, 9, 18, [
      [0, "#0e1111"],
      [0.45, "#191f1e"],
      [0.62, "#333b35"],
      [1, "#181b18"],
    ]),
  );
  line(c, "M-28 6Q-2 21 36 15 M30 -21Q51 -18 60 -8", "#6e7463", 1.3);
  for (let i = 0; i < 5; i++) line(c, `M${-76 + i * 4} 14q-2 -12 8 -20q9 -7 8 -16`, "#77786a", 0.8);
  c.restore();
}
function paperBase() {
  const v = layer(1600, 900),
    c = v.getContext("2d");
  desk(c);
  c.shadowColor = "#181611b0";
  c.shadowBlur = 15;
  c.shadowOffsetY = 9;
  c.fillStyle = "#a69e78";
  c.fillRect(38, 40, 1524, 813);
  c.shadowColor = "transparent";
  c.fillStyle = gradient(c, 0, 40, 0, 854, [
    [0, "#c8bd95"],
    [0.52, "#c3b591"],
    [1, "#a79e7d"],
  ]);
  c.fillRect(38, 40, 1524, 813);
  c.save();
  c.beginPath();
  c.rect(38, 40, 1524, 813);
  c.clip();
  for (let y = 39; y < 860; y += 7)
    for (let x = 40 + (y % 2) * 5; x < 1565; x += 14) {
      if (y > 65 && y < 828 && x > 59 && x < 1538) continue;
      line(c, `M${x - 7} ${y}q4 -5 7 0q4 5 7 0`, "#8e8c6c", 0.7);
    }
  c.restore();
  c.fillStyle = gradient(c, 48, 0, 1540, 300, [
    [0, "#d1c39b"],
    [0.07, "#e8dcbc"],
    [0.38, "#f4e9d1"],
    [0.72, "#ecdfc0"],
    [1, "#daccaa"],
  ]);
  c.fillRect(paper.x, paper.y, paper.w, paper.h);
  const r = rand(71);
  c.save();
  c.beginPath();
  c.rect(paper.x, paper.y, paper.w, paper.h);
  c.clip();
  for (let i = 0; i < 120; i++) {
    const x = r() * 1600,
      y = r() * 900,
      s = 30 + r() * 160,
      g = c.createRadialGradient(x, y, 0, x, y, s);
    g.addColorStop(0, "rgba(155,124,72,.038)");
    g.addColorStop(1, "rgba(170,142,89,0)");
    c.fillStyle = g;
    c.fillRect(x - s, y - s, 2 * s, 2 * s);
  }
  for (let i = 0; i < 1600; i++) {
    const x = r() * 1600,
      y = r() * 900;
    oval(c, x, y, 0.3 + r() * 1.7, 0.2 + r() * 0.8, "rgba(93,70,43,.15)");
  }
  c.restore();
  c.fillStyle = c.createPattern(fiber, "repeat");
  c.fillRect(0, 0, 1600, 900);
  for (const x of [38, 1542]) {
    c.shadowColor = "#3126197a";
    c.shadowBlur = 5;
    c.shadowOffsetX = 2;
    c.fillStyle = gradient(c, x, 0, x + 20, 0, [
      [0, "#594932"],
      [0.18, "#aa9165"],
      [0.44, "#e2cfa1"],
      [0.7, "#b4a07a"],
      [1, "#695b40"],
    ]);
    c.fillRect(x, 36, 20, 821);
    c.shadowColor = "transparent";
    for (const y of [31, 853]) {
      c.fillStyle = "#4c4031";
      c.fillRect(x - 2, y, 24, 7);
    }
  }
  return v;
}
export const ground = paperBase();
export const objects = layer(1600, 900);
{
  let c = objects.getContext("2d");
  jade(c, 139, 72, -0.08);
  c.save();
  c.translate(132, 831);
  c.scale(0.64, 0.63);
  jade(c, 0, 0, 0.14);
  c.restore();
  stone(c);
}

function mountain(c, x, y, w, h, seed, strength) {
  c.save();
  c.translate(x, y);
  c.scale(w, h);
  const r = rand(seed);
  const ridge = [
    [0, 1],
    [0.04, 0.91],
    [0.1, 0.77],
    [0.17, 0.74],
    [0.22, 0.59],
    [0.3, 0.63],
    [0.36, 0.41],
    [0.4, 0.37],
    [0.46, 0.18],
    [0.51, 0.23],
    [0.56, 0.07],
    [0.61, 0.11],
    [0.65, 0.28],
    [0.7, 0.31],
    [0.76, 0.56],
    [0.83, 0.61],
    [0.88, 0.8],
    [1, 1],
  ];
  for (let i = 1; i < ridge.length - 1; i++) {
    ridge[i][1] += (r() - 0.5) * 0.21;
    ridge[i][0] += (r() - 0.5) * 0.037;
  }
  const pts = [];
  for (let i = 0; i < ridge.length - 1; i++) {
    const [a, b] = ridge[i],
      [d, e] = ridge[i + 1];
    for (let k = 0; k < 4; k++) {
      const u = k / 4;
      pts.push([a + (d - a) * u, b + (e - b) * u + (r() - 0.5) * 0.037]);
    }
  }
  pts.push([1, 1]);
  c.beginPath();
  c.moveTo(0, 1);
  pts.forEach((p) => c.lineTo(...p));
  c.lineTo(1, 1.02);
  c.closePath();
  let mask = new Path2D();
  mask.moveTo(0, 1);
  pts.forEach((p) => mask.lineTo(...p));
  mask.lineTo(1, 1.02);
  mask.closePath();
  c.clip(mask);
  c.fillStyle = gradient(c, 0, 0.09, 0.12, 1, [
    [0, `rgba(70,83,75,${strength})`],
    [0.65, `rgba(106,115,100,${strength * 0.61})`],
    [1, "rgba(151,151,124,0)"],
  ]);
  c.fillRect(0, 0, 1, 1.03);
  for (let i = 2; i < pts.length; i += 2) {
    const [a, b] = pts[i];
    let l = 0.09 + r() * 0.33;
    nib(
      c,
      [
        [a, b, 0.003],
        [a - 0.013, b + l * 0.2, 0.008 + r() * 0.018],
        [a - 0.014 - r() * 0.04, b + l * 0.58, 0.005 + r() * 0.014],
        [a - 0.075, b + l, 0.001],
      ],
      `rgba(39,58,53,${strength * (0.13 + r() * 0.34)})`,
      i,
    );
  }
  c.restore();
}
function sun(c) {
  c.save();
  c.translate(784, 263);
  const r = rand(14),
    disc = new Path2D();
  for (let i = 0; i <= 220; i++) {
    const a = (i / 220) * TAU,
      rr = 71 + r() * 1.8;
    const x = Math.cos(a) * rr,
      y = Math.sin(a) * rr;
    i ? disc.lineTo(x, y) : disc.moveTo(x, y);
  }
  disc.closePath();
  c.clip(disc);
  c.fillStyle = gradient(c, 0, -72, 10, 72, [
    [0, "#c45c3c"],
    [0.52, "#b74d32"],
    [1, "#d1895f"],
  ]);
  c.fillRect(-74, -74, 148, 148);
  for (let i = 0; i < 1500; i++) {
    let x = r() * 148 - 74,
      y = r() * 148 - 74;
    oval(c, x, y, r() * 1.2 + 0.2, r() * 0.7 + 0.15, `rgba(246,228,190,${r() * 0.65})`);
  }
  for (let i = 0; i < 24; i++) {
    let x = r() * 145 - 72,
      y = r() * 145 - 72;
    nib(
      c,
      [
        [x, y, 0.2],
        [x + 8, y - 1, 0.7],
        [x + 16 + r() * 12, y - 1.4, 0.1],
      ],
      "#e1ad84",
      i,
    );
  }
  c.restore();
}
function pine(c, x, y, s, seed) {
  c.save();
  c.translate(x, y);
  c.scale(s, s);
  const r = rand(seed);
  nib(
    c,
    [
      [0, 2, 6],
      [-3, -12, 4],
      [2, -22, 3],
      [-3, -32, 2],
      [2, -43, 0.4],
    ],
    "#394338",
    12,
  );
  for (let k = 0; k < 8; k++) {
    let u = k / 8,
      sy = -8 - k * 4.3,
      ex = (k % 2 ? -1 : 1) * (21 * (1 - u) + 6),
      ey = sy - 4 - r() * 4;
    nib(
      c,
      [
        [0, sy, 2.3],
        [ex * 0.42, sy + 1, 1.4],
        [ex, ey, 0.4],
      ],
      "#495447",
      k,
    );
    for (let cluster = 0; cluster < 3; cluster++) {
      let ax = ex + (cluster - 1) * 3.7,
        ay = ey - r() * 2,
        rad = 4 + r() * 3;
      for (let j = 0; j < 25; j++) {
        let angle = Math.PI * (0.94 + (1.1 * j) / 24),
          len = rad * (0.53 + 0.6 * r());
        nib(
          c,
          [
            [ax, ay, 0.55],
            [ax + Math.cos(angle) * len * 0.48, ay + Math.sin(angle) * len * 0.43, 0.78],
            [ax + Math.cos(angle) * len, ay + Math.sin(angle) * len * 0.67, 0.12],
          ],
          j % 4 ? "#404e42" : "#6b765e",
          j,
        );
      }
    }
  }
  c.restore();
}
function cliff(c, x, y, sx, sy, seed) {
  c.save();
  c.translate(x, y);
  c.scale(sx, sy);
  const r = rand(seed);
  const d =
    "M-240 128L-237 45 -188 28 -163 17 -112 11 -70 -1 -41 4 -22 -8 24 -13 44 -23 79 -26 99 -22 137 -26 161 -19 140 -4 132 8 109 15 127 20 115 31 100 39 97 58 82 64 84 76 66 91 58 114 44 132Z";
  c.save();
  c.clip(path(d));
  fill(
    c,
    d,
    gradient(c, 0, -20, 26, 137, [
      [0, "#525b4e"],
      [0.23, "#788172"],
      [0.58, "#9ea28a"],
      [1, "#c0bea3"],
    ]),
  );
  for (let j = 0; j < 32; j++) {
    const x = -220 + r() * 365,
      y = -28 + r() * 51,
      l = 18 + r() * 66,
      w = 3 + r() * 19;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + w * 0.35, y + l * 0.15);
    c.lineTo(x + w * 0.27, y + l * 0.45);
    c.lineTo(x + w, y + l);
    c.lineTo(x - w * 0.3, y + l * 0.72);
    c.lineTo(x - w * 0.66, y + l * 0.32);
    c.closePath();
    c.fillStyle = j % 3 ? "rgba(44,54,47,.25)" : "rgba(234,223,184,.44)";
    c.fill();
  }
  for (let i = 0; i < 180; i++) {
    const px = r() * 440 - 252,
      py = -26 + r() * 20,
      w = r() * 23 + 1,
      dx = -(r() * 36 + 12);
    nib(
      c,
      [
        [px, py, 0.6],
        [px + dx * 0.31, py + 12, w],
        [px + dx * 0.22, py + 28, w * 0.65],
        [px + dx, py + 46 + r() * 55, 0.4],
      ],
      i % 4 ? "rgba(40,50,44,.30)" : "rgba(227,222,190,.55)",
      i,
      1,
      0.3,
    );
  }
  for (let i = 0; i < 50; i++) {
    let x = r() * 400 - 230,
      y = 40 + r() * 100;
    nib(
      c,
      [
        [x, y, 0.5],
        [x + 7, y - 5, 2],
        [x + 12, y - 17, 0.3],
      ],
      "#687264",
      i,
    );
  }
  c.restore();
  nib(
    c,
    [
      [-225, 43, 2],
      [-160, 16, 9],
      [-110, 12, 7],
      [-58, 1, 4],
      [-20, -7, 8],
      [30, -14, 5],
      [70, -24, 7],
      [96, -22, 3],
      [135, -26, 5],
      [161, -19, 0.3],
    ],
    "#333d34",
    22,
    1,
    0.45,
  );
  for (let i = 0; i < 90; i++) {
    const a = r() * 340 - 224,
      y = 17 - a * 0.22 + Math.sin(a * 0.1) * 3;
    oval(c, a, y - r() * 6, 1 + r() * 5, 0.5 + r() * 2, "#414c3f", -0.2);
  }
  for (let i = 0; i < 10; i++) {
    const px = -190 + r() * 206;
    pine(c, px, 11 - px * 0.19, 0.32 + r() * 0.53, 100 + i);
  }
  c.restore();
}
export const backdrop = layer(1600, 900),
  ledges = layer(1600, 900);
{
  const c = backdrop.getContext("2d");
  sun(c);
  const r = rand(222);
  for (let i = 0; i < 12; i++)
    mountain(
      c,
      -155 + i * 150,
      325 + r() * 68,
      190 + r() * 185,
      113 + r() * 90,
      i * 7,
      0.13 + r() * 0.12,
    );
  for (let i = 0; i < 8; i++)
    mountain(
      c,
      -250 + i * 235,
      374 + r() * 85,
      350 + r() * 120,
      145 + r() * 108,
      31 + i,
      0.23 + r() * 0.18,
    );
  for (let i = 0; i < 140; i++) {
    let x = r() * 1600,
      y = 530 + r() * 167,
      w = 24 + r() * 120;
    nib(
      c,
      [
        [x, y, 0.25],
        [x + w * 0.27, y - 1.3, 1.2],
        [x + w * 0.73, y - 1, 0.6],
        [x + w, y - 2, 0.1],
      ],
      "rgba(107,119,103,.18)",
      i,
    );
  }
  for (let i = 0; i < 9; i++) {
    let x = 622 + i * 15 + r() * 11,
      y = 286 - i * 3 + r() * 12;
    c.save();
    c.translate(x, y);
    c.scale(0.45 + r() * 0.48, 0.55);
    fill(c, "M-9 -4Q-2 -4 0 1Q4 -3 10 -1Q4 -1 0 4Q-3 0 -9 -4", "#666c58");
    c.restore();
  }
  const l = ledges.getContext("2d");
  cliff(l, 368, 664, 1.48, 1.25, 91);
  cliff(l, 1335, 730, -1.48, 1.64, 441);
  pine(l, 1351, 700, 1.92, 94);
  pine(l, 1341, 703, 1.03, 23);
  pine(l, 1275, 706, 0.81, 88);
  pine(l, 309, 660, 1.03, 44);
  // A second, low shelf grounds the foreground ink against the paper margin.
  cliff(l, 103, 783, 0.89, 0.53, 943);
}

function stalk(seed, h, bend) {
  const cv = layer(240, 590),
    c = cv.getContext("2d"),
    r = rand(seed);
  c.translate(120, 575);
  let old = [0, 0];
  for (let j = 1; j <= 9; j++) {
    let u = j / 9,
      xx = bend * u * u,
      yy = -h * u,
      th = (1 - u * 0.88) * 7;
    nib(
      c,
      [
        [old[0], old[1], th + 0.7],
        [(old[0] + xx) / 2, (old[1] + yy) / 2, th],
        [xx, yy + 1, th * 0.84],
      ],
      "#414f43",
      j,
    );
    line(c, `M${xx - th * 0.63} ${yy + 2}q${th * 0.75} -2 ${th * 1.35} -.5`, "#354338", 1.8);
    if (j >= 3) {
      const side = j % 2 ? 1 : -1,
        len = (0.3 + r() * 0.7) * 70;
      for (let b = 0; b < 2; b++) {
        const ex = xx + side * len * (b ? 0.65 : 1),
          ey = yy - (10 + r() * 32);
        nib(
          c,
          [
            [xx, yy, 1.9],
            [xx + side * len * 0.43, yy - 10, 1.1],
            [ex, ey, 0.4],
          ],
          "#435248",
          j,
        );
        for (let k = 0; k < 7; k++) {
          const u = 0.25 + k * 0.11,
            ax = xx + (ex - xx) * u,
            ay = yy + (ey - yy) * u,
            dx = (8 + r() * 22) * side,
            dy = (k % 2 ? -1 : 1) * (7 + r() * 30);
          nib(
            c,
            [
              [ax, ay, 0.4],
              [ax + dx * 0.46, ay + dy * 0.35, 3.1 + r() * 2],
              [ax + dx, ay + dy, 0.15],
            ],
            k % 3 ? "#47574a" : "#586652",
            k,
          );
        }
      }
    }
    old = [xx, yy];
  }
  return cv;
}
const bamboo = Array.from({ length: 9 }, (_, i) =>
  stalk(400 + i, 385 + ((i * 63) % 145), (i % 2 ? 1 : -1) * (25 + i * 4)),
);
export function grove(c, t, shock) {
  for (let i = 0; i < 14; i++) {
    const right = i >= 7,
      k = i % 7,
      s = 0.62 + ((k * 17) % 39) / 100,
      x = right ? 1518 - k * 26 : 71 + k * 23,
      y = right ? 715 + k * 7 : 713 + k * 9;
    c.save();
    c.translate(x, y);
    c.rotate(
      (right ? -0.13 : 0.11) +
        Math.sin(k * 7) * 0.145 +
        (0.018 * Math.sin(t * 1.8 + k) + shock * 0.22) * (right ? 1 : -1),
    );
    c.scale(s, s);
    c.globalAlpha *= 0.29 + (k % 3) * 0.12;
    c.drawImage(bamboo[(i * 5) % 9], -120, -575);
    c.restore();
  }
}
