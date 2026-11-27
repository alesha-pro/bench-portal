import { layer, rand, mix, nib, fill, line, path, oval, gradient } from "./ink.js";
const black = "#222923",
  soot = "#34382c",
  cream = "#eee3c6",
  ochre = "#af864d";
function sprite(x, y, w, h, draw) {
  const cv = layer(w * 2, h * 2),
    c = cv.getContext("2d");
  c.scale(2, 2);
  c.translate(-x, -y);
  draw(c);
  return (c) => c.drawImage(cv, x, y, w, h);
}
function fur(c, outline, seed, box, amount) {
  c.save();
  c.clip(path(outline));
  let r = rand(seed);
  for (let i = 0; i < amount; i++) {
    const x = box[0] + r() * box[2],
      y = box[1] + r() * box[3],
      d = 2 + r() * 14;
    nib(
      c,
      [
        [x, y, 0.1],
        [x - d * 0.4, y + d * 0.13, r() * 1.7 + 0.3],
        [x - d, y + d * 0.4, 0.1],
      ],
      i % 3 ? "rgba(248,229,183,.34)" : "rgba(39,43,33,.28)",
      i,
    );
  }
  c.restore();
}
const body = sprite(-166, -104, 270, 179, (c) => {
  const sh =
    "M-151 0C-160 -20 -151 -46 -132 -57C-110 -73 -87 -64 -62 -60Q-34 -56 -17 -66Q6 -80 29 -82L54 -100 49 -90 65 -96 63 -87 82 -91 73 -76Q86 -62 75 -42L88 -44 77 -32 86 -34 72 -22Q70 2 59 14L61 23 48 24 42 36 34 33Q20 49 -2 39L-12 46 -14 38Q-42 32 -65 25Q-82 25 -105 48L-126 57Q-144 48 -145 28L-154 34 -150 16 -157 17Z";
  fill(
    c,
    sh,
    gradient(c, -70, -68, 5, 48, [
      [0, "#8d723f"],
      [0.23, "#bd9859"],
      [0.51, "#caa66a"],
      [0.71, "#d3bc87"],
      [1, "#ece1c2"],
    ]),
  );
  c.save();
  c.clip(path(sh));
  fill(c, "M-167 -32Q-109 -72 -74 -53Q-22 -32 32 -76L73 -104H-161Z", "#5b573a");
  fill(
    c,
    "M-161 64Q-132 -10 -110 -19Q-123 7 -111 15Q-87 19 -64 6Q-38 22 4 21Q36 16 50 -12Q54 23 32 48Z",
    cream,
  );
  let r = rand(45);
  for (let i = 0; i < 11; i++) {
    const x = -140 + i * 19 + 3 * r(),
      y = -61 + 8 * Math.sin((i - 2) * 0.6),
      bottom = y + 34 + r() * 25;
    nib(
      c,
      [
        [x - 5, y - 12, 3],
        [x, y, 13 + r() * 7],
        [x + 6, y + 15, 8],
        [x + 12, bottom - 13, 4.3],
        [x + 10, bottom, 0.3],
      ],
      i % 3 ? black : soot,
      i,
      1,
      0.32,
    );
    if (i % 3 !== 1)
      nib(
        c,
        [
          [x + 1, y + 4, 5],
          [x - 3, y + 18, 5],
          [x + 2, bottom - 4, 0.3],
        ],
        black,
        i + 22,
      );
  }
  for (let i = 0; i < 7; i++) {
    let x = -135 + i * 25;
    nib(
      c,
      [
        [x + 4, 47, 5],
        [x + 6, 28, 7],
        [x - 2, 17, 6],
        [x - 4, 6, 0.2],
      ],
      black,
      i,
    );
  }
  for (let i = 0; i < 5; i++) {
    const x = 17 + i * 9;
    nib(
      c,
      [
        [x, -88, 2],
        [x - 7, -70, 7],
        [x - 6, -58, 4],
        [x - 21, -42 - i * 2, 0.2],
      ],
      black,
      21 + i,
    );
  }
  // Shoulder blade and haunch model the light through translucent layers of ink.
  for (const [marks, col] of [
    [
      [
        [-151, -4, 2],
        [-131, -35, 18],
        [-109, -44, 18],
        [-91, -38, 0.5],
      ],
      "rgba(62,60,38,.44)",
    ],
    [
      [
        [-125, 28, 1],
        [-108, 4, 15],
        [-92, -7, 11],
        [-70, -10, 0.6],
      ],
      "rgba(108,85,50,.42)",
    ],
    [
      [
        [-20, -7, 0.5],
        [-8, -38, 13],
        [12, -57, 18],
        [35, -63, 0.6],
      ],
      "rgba(68,64,41,.46)",
    ],
    [
      [
        [-12, 14, 0.5],
        [-6, -3, 6],
        [13, -23, 5],
        [22, -41, 0.5],
      ],
      "rgba(111,90,51,.54)",
    ],
    [
      [
        [-96, 5, 0.5],
        [-70, -1, 5],
        [-50, 4, 3],
        [-29, 8, 0.4],
      ],
      "rgba(254,232,181,.5)",
    ],
  ])
    nib(c, marks, col, 372, 1, 0.55);
  c.restore();
  fur(c, sh, 83, [-155, -92, 243, 150], 960);
  nib(
    c,
    [
      [-151, 10, 1],
      [-150, -30, 3],
      [-130, -56, 3.8],
      [-98, -64, 2],
      [-76, -59, 0.2],
    ],
    black,
    4,
  );
  nib(
    c,
    [
      [-75, 24, 0.3],
      [-51, 23, 2],
      [-14, 37, 2],
      [9, 40, 0.3],
    ],
    "#514f39",
    3,
  );
  for (let i = 0; i < 14; i++) {
    let x = 18 + i * 4,
      y = -76 - i * 0.89;
    fill(c, `M${x - 14} ${y + 9}q9 -9 24 -17l-15 14Z`, i % 3 ? soot : "#907747");
  }
});
const face = sprite(-78, -92, 155, 165, (c) => {
  // Outer and inner pinnae, infraorbital stripe, whisker pads, and both rows of fangs.
  fill(c, "M-6 -41Q-12 -68 -1 -69Q15 -69 16 -46L12 -37Z", black);
  fill(c, "M-5 -48Q-6 -62 -1 -62Q8 -61 11 -49Z", "#bd9b64");
  const mane =
    "M-36 -46Q-27 -62 -10 -52Q6 -56 21 -43L32 -37 28 -33Q39 -26 39 -16L49 -8 57 -6 58 3 52 10Q38 8 31 13Q27 23 16 29L7 46 2 39 -12 54 -10 44 -30 57 -25 47 -44 53 -35 41 -55 47 -45 33 -63 38 -51 23 -69 26 -58 13 -72 17 -60 2 -69 3 -54 -12 -63 -15 -47 -28Z";
  fill(
    c,
    mane,
    gradient(c, 0, -49, -15, 43, [
      [0, "#937745"],
      [0.23, "#c5a060"],
      [0.55, "#dec797"],
      [0.8, "#ebdfbd"],
      [1, "#c0b388"],
    ]),
  );
  fill(c, "M-53 -19Q-60 -35 -51 -46Q-43 -56 -32 -53Q-18 -50 -19 -31L-28 -24Z", black);
  fill(c, "M-49 -23Q-54 -38 -46 -45Q-37 -53 -28 -43Q-24 -38 -27 -31Z", "#b99b69");
  fill(c, "M-46 -25Q-51 -42 -45 -45Q-40 -47 -32 -39L-30 -32Z", "#4c4936");
  fill(c, "M-46 -45Q-43 -49 -37 -45L-32 -39Q-41 -44 -46 -41Z", cream);
  const cheek =
    "M-34 -13Q-18 -30 2 -27Q18 -27 26 -15Q15 -12 12 -4Q-2 -7 -19 11L-11 10 -32 27 -25 26 -47 39 -42 30 -57 32 -47 20 -61 22 -48 8 -61 12Z";
  fill(c, cheek, cream);
  for (const d of [
    "M-21 -48Q-5 -51 5 -42L16 -38Q2 -40 -3 -37Q-8 -43 -21 -48Z",
    "M-15 -37Q0 -41 15 -30L25 -27Q9 -26 2 -29Z",
    "M-37 -20Q-24 -31 -10 -29Q-21 -24 -29 -15L-49 -2Z",
    "M-38 -7Q-18 -24 -3 -20Q-19 -17 -24 -9Q-34 2 -51 8Z",
    "M-29 3Q-16 -5 -8 -6Q-14 0 -18 6L-43 23Z",
    "M-7 8Q-11 23 -31 34L-16 15Z",
    "M-56 24L-44 17 -53 30 -63 35Z",
    "M-21 37Q-6 32 1 19Q-1 35 -18 45Z",
    "M9 -47Q20 -42 24 -35L17 -37Z",
  ])
    fill(c, d, black);
  // The near eye is cut into a heavy black sweep of the brow.
  fill(c, "M-4 -23Q9 -32 24 -24L32 -17 24 -18Q16 -10 7 -14L2 -12 5 -18Z", black);
  fill(c, "M8 -21Q16 -24 23 -20Q16 -15 11 -18Z", "#efc66b");
  oval(c, 16, -20, 1.25, 2.8, black);
  oval(c, 19, -21, 0.9, 0.7, "#fff3b6");
  nib(
    c,
    [
      [0, -28, 0.4],
      [10, -32, 2],
      [21, -27, 0.2],
    ],
    cream,
    3,
  );
  fill(c, "M24 -14Q32 -14 38 -9L44 -7 45 -2 32 -1 22 -5Z", "#b69a66");
  fill(c, "M12 10Q23 0 44 3L51 8Q40 13 36 24L31 34Q23 43 13 36L5 27Z", "#222521");
  fill(c, "M12 30Q24 24 36 20Q35 29 28 32L19 37Z", "#974e3b");
  fill(c, "M2 28Q14 36 23 34Q31 31 38 22L42 22Q40 34 28 41Q10 48 -3 37L-9 44Z", cream);
  nib(
    c,
    [
      [0, 33, 0.2],
      [13, 41, 2.4],
      [26, 39, 2],
      [38, 27, 0.4],
    ],
    black,
    39,
  );
  fill(c, "M11 0Q15 -12 29 -9Q38 -6 47 -5L52 3Q49 10 39 11Q33 14 27 10Q20 14 11 9Z", "#f2e5c5");
  fill(c, "M36 -8Q48 -10 56 -5L55 1 49 5 42 2Z", black);
  line(c, "M44 -6Q50 -7 53 -5", "#9f9982", 1.2);
  fill(c, "M36 10L43 9Q43 17 37 23Q39 15 36 10Z", "#fff0cb");
  fill(c, "M25 12L29 11 28 18Z M30 31L31 24 34 27Z", "#f2dfac");
  for (let i = 0; i < 13; i++) oval(c, 17 + ((i * 7) % 24), -3 + (i % 4) * 2.5, 1.05, 0.72, black);
  nib(
    c,
    [
      [-28, -29, 0.3],
      [-18, -37, 3],
      [-10, -36, 0.5],
    ],
    black,
    3,
  );
  nib(
    c,
    [
      [24, -16, 0.3],
      [29, -13, 2.2],
      [33, -10, 0.2],
    ],
    "#454334",
    3,
  );
  for (let i = 0; i < 24; i++) {
    const u = i / 24,
      px = -46 + u * 28,
      py = 16 + Math.sin(u * 3) * 11;
    nib(
      c,
      [
        [px + 8, py - 9, 0.3],
        [px, py, 1.3],
        [px - 8, py + 6, 0.25],
      ],
      i % 3 ? "#a29a78" : "#6e7058",
      i,
    );
  }
  fur(c, mane, 337, [-65, -50, 120, 103], 200);
  for (let i = 0; i < 8; i++) {
    let y = 2 + (i % 3) * 2.2,
      x = 22 + i * 1.5;
    nib(
      c,
      [
        [x, y, 0.3],
        [x + 13, y - 3 + i * 0.5, 0.85],
        [x + 29, y - 3 + i * 1.35, 0.55],
        [x + 43, y - 8 + i * 2.6, 0.16],
      ],
      i % 3 ? "#454537" : "#f3e5c3",
      i,
    );
  }
});
function limb(c, root, knee, paw, far, back) {
  const [x, y] = root,
    [kx, ky] = knee,
    [px, py] = paw,
    dx = px - kx,
    dy = py - ky;
  let coat = far ? "#8c805c" : "#b99a62",
    w = back ? 40 : 33;
  const leg = [
    [x, y, w * 0.72],
    [mix(x, kx, 0.38), mix(y, ky, 0.38), w],
    [kx, ky, w * 0.67],
    [kx + dx * 0.7 - 3, ky + dy * 0.7 + 3, w * 0.48],
    [px, py, w * 0.44],
  ];
  nib(c, leg, far ? "#535542" : black, 8);
  nib(
    c,
    leg.map(([a, b, v]) => [a - 0.5, b, v * 0.87]),
    coat,
    8,
  );
  const segments = [
    [x, y, kx, ky, w],
    [kx, ky, px, py, w * 0.55],
  ];
  for (const [ax, ay, bx, by, ww] of segments) {
    let len = Math.hypot(bx - ax, by - ay) || 1,
      nx = -(by - ay) / len,
      ny = (bx - ax) / len;
    for (let j = 1; j < 4; j++) {
      const u = j / 4,
        ox = mix(ax, bx, u),
        oy = mix(ay, by, u),
        m = ww * (1 - u * 0.28);
      nib(
        c,
        [
          [ox + nx * m * 0.43, oy + ny * m * 0.43, 2],
          [ox + nx * m * 0.15, oy + ny * m * 0.15, 4.8],
          [ox - nx * m * 0.29 + (bx - ax) * 0.12, oy - ny * m * 0.29 + (by - ay) * 0.12, 0.3],
        ],
        far ? "#4c5040" : black,
        j,
      );
    }
  }
  c.save();
  c.translate(px, py);
  c.rotate(Math.atan2(dy, dx) * 0.21 - 0.22);
  fill(
    c,
    "M-7 -6Q1 -10 8 -5L14 -4Q21 -3 22 1Q24 5 18 7Q8 10 -3 8Q-11 7 -8 2Z",
    far ? "#8b856a" : "#d9c9a1",
  );
  line(c, "M-6 7Q3 11 18 7 M8 7Q10 2 7 0 M14 6Q17 2 13 0", black, 1.4);
  for (let i = 0; i < 3; i++) fill(c, `M${10 + i * 4} ${5 - i}q6 -1 10 4q-5 -2 -9 .4Z`, cream);
  c.restore();
}
export function tiger(c, t, pose) {
  const { x, y, s, angle, reach, stride, coil, rest } = pose;
  c.save();
  c.translate(x, y);
  c.rotate(angle);
  c.scale(s, s);
  const beat = Math.sin(t * 3.4),
    fl = Math.sin(t * 2.6),
    breath = Math.sin(t * 3.1);
  const tail = [
    [-128, -23, 24],
    [-163, -21 - coil * 9, 18],
    [-201, -49 - 22 * coil + 6 * fl, 14],
    [-227, -83 - 16 * coil + 12 * beat, 10],
    [-223 + rest * 26, -112 - 8 * beat - rest * 17, 7],
    [-200 + 10 * fl + rest * 34, -123 + 18 * fl - rest * 15, 4],
    [-189 + 13 * fl + rest * 38, -109 + 16 * fl - rest * 12, 0.4],
  ];
  nib(c, tail, black, 23);
  nib(
    c,
    tail.map(([a, b, w]) => [a, b - 1, w * 0.66]),
    ochre,
    24,
  );
  const curve = [];
  for (let i = 0; i < tail.length - 1; i++) {
    const a = tail[i],
      b = tail[i + 1];
    for (let j = 0; j < 3; j++) {
      let u = j / 3;
      curve.push(a.map((v, k) => mix(v, b[k], u)));
    }
  }
  for (let i = 1; i < curve.length - 1; i += 2) {
    const a = curve[i],
      b = curve[i + 1],
      d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1,
      nx = -(b[1] - a[1]) / d,
      ny = (b[0] - a[0]) / d;
    nib(
      c,
      [
        [a[0] + nx * a[2] * 0.45, a[1] + ny * a[2] * 0.45, 1],
        [a[0], a[1], a[2] * 0.55],
        [a[0] - nx * a[2] * 0.45, a[1] - ny * a[2] * 0.45, 0.6],
      ],
      black,
      i,
    );
  }
  limb(c, [-118, -14], [-76, 24], [-125 - 30 * stride, 70 - 24 * reach], true, true);
  limb(c, [42, -21], [44 + 28 * reach, 25], [54 + 53 * reach, 76 - 51 * reach], true, false);
  body(c);
  limb(
    c,
    [-115, -14],
    [-91 - 9 * stride, 29 - 17 * reach],
    [-138 - 30 * stride + rest * 48, 80 - 37 * reach - rest * 31],
    false,
    true,
  );
  limb(
    c,
    [32, -30],
    [58 + 27 * reach, 21 - 42 * reach],
    [97 + 59 * reach - rest * 47, 60 - 85 * reach + fl * 3 - rest * 37],
    false,
    false,
  );
  c.save();
  c.translate(75 + 3 * reach, -60 + breath * 1.6);
  c.rotate(0.055 * breath - 0.14 * reach + 0.09 * coil);
  face(c);
  c.restore();
  c.restore();
}
