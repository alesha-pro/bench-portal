import { ellipse, glow, line, path, rng, TAU, text } from './draw.js';

const iron = '#263f42';

export function gaslight(c, x, a) {
  c.save();
  c.translate(x, 108);
  const offset = x < 800 ? 0.9 : 2.3;
  const flame =
    0.57 +
    0.17 * Math.sin(29 * a + offset) +
    0.1 * Math.sin(47 * a - offset) +
    0.09 * Math.cos(11 * a + offset);
  line(
    c,
    [
      [0, 0],
      [0, 202],
    ],
    iron,
    2.6,
  );
  for (let y = 170; y < 204; y += 6) ellipse(c, 0, y, 2, 3.7, null, '#a79770', 0.8);
  c.rotate(0.008 * Math.sin(3 * a + offset));
  c.translate(0, 233);
  glow(c, 0, 0, 105, '255,186,93', 0.26 + flame * 0.22);
  path(c, 'M-20 -16 Q-22 6 -13 23 Q0 30 13 23 Q21 6 20 -16Z', '#bb9769', iron, 2.4);
  const lamp = c.createLinearGradient(-17, -10, 17, 10);
  lamp.addColorStop(0, '#cfad7c');
  lamp.addColorStop(0.41, '#ffe3a0');
  lamp.addColorStop(1, '#e8c182');
  path(c, 'M-17 -14 H17 Q19 5 11 21 Q0 25 -11 21 Q-18 6 -17 -14Z', lamp, null);
  glow(c, 0, 3, 29, '255,234,167', flame);
  path(c, `M-3 10 Q-7 2 -1 ${-6 - flame * 7} Q0 -3 3 1 Q8 7 3 11Z`, '#fff3bc', null);
  for (const side of [-1, 1]) {
    path(
      c,
      `M${side * 13} -15 Q${side * 16} 3 ${side * 9} 22 M${side * 19} -8 q${side * 5} 10 ${side * -4} 19`,
      null,
      '#526455',
      1.4,
    );
    path(
      c,
      `M${side * 10} -17 Q${side * 4} -29 0 -32 Q${side * 14} -27 ${side * 19} -17Z`,
      '#547067',
      iron,
      1.3,
    );
  }
  path(
    c,
    'M-25 -15 Q-21 -21 -14 -20 Q-9 -29 0 -31 Q8 -29 14 -21 Q20 -21 25 -15 L20 -12 H-20Z',
    '#3a5a55',
    iron,
    2,
  );
  path(c, 'M-18 -17 Q-7 -21 0 -26 M-18 -13 H19 M-11 24 Q0 30 11 24', null, '#bfaa7b', 1.3);
  ellipse(c, 0, -34, 3.4, 5, '#ad986c', iron, 1.2);
  path(c, 'M-13 22 Q0 27 13 22 Q10 31 3 31 L0 38 L-3 31 Q-9 30 -13 22Z', '#38544e', iron, 1.4);

  for (let i = 0; i < 6; i++) {
    const angle = (2 + (i % 3)) * a + i * 2.4 + offset;
    const radius = 16 + i * 4 + 5 * Math.cos(a * 3 + i);
    const mx = Math.cos(angle) * radius,
      my = Math.sin(angle) * (13 + i * 3) - 6 + 5 * Math.sin(a * 5 + i);
    const wing = 0.4 + 0.6 * Math.abs(Math.sin(a * (42 + i) + 2 * i));
    c.save();
    c.translate(mx, my);
    c.rotate(0.7 * Math.sin(angle + 0.7));
    path(
      c,
      `M0 0 Q-3 -5 -5 ${-6 * wing} Q-7 ${2 * wing} -1 2 Q2 -1 4 ${-5 * wing} Q6 1 1 3Z`,
      i % 2 ? '#ebd9b0' : '#d4bd91',
      '#857c63',
      0.65,
    );
    line(
      c,
      [
        [0, -1],
        [0.6, 3],
      ],
      '#756c55',
      0.9,
    );
    c.restore();
  }
  c.restore();
}

function wheel(c, x, y, r, teeth, rotation, metal) {
  c.save();
  c.translate(x, y);
  c.rotate(rotation);
  c.beginPath();
  for (let i = 0; i < teeth; i++) {
    for (const [fraction, radius] of [
      [-0.5, r - 2],
      [-0.3, r - 2],
      [-0.2, r + 1.3],
      [0.15, r + 1.3],
      [0.26, r - 2],
    ]) {
      const a = ((i + fraction) * TAU) / teeth;
      if (!i && fraction === -0.5) c.moveTo(radius * Math.cos(a), radius * Math.sin(a));
      else c.lineTo(radius * Math.cos(a), radius * Math.sin(a));
    }
  }
  c.closePath();
  c.moveTo(r - 4, 0);
  c.arc(0, 0, r - 4, 0, TAU, true);
  c.fillStyle = metal;
  c.fill('evenodd');
  for (let i = 0; i < 5; i++) {
    c.rotate(TAU / 5);
    path(c, `M-2 -1 Q-3 -5 -1 ${4 - r} L2 ${4 - r} Q0 -5 2 0Z`, metal, null);
  }
  ellipse(c, 0, 0, 2.7, 2.7, '#ecce92', '#685f47', 0.8);
  c.restore();
}

export function escapement(c, s) {
  const a = s.phase;
  path(
    c,
    'M1023 361 Q1046 351 1077 361 V404 Q1062 398 1049 407 Q1036 399 1023 405Z',
    '#3e514a',
    '#918760',
    1.2,
  );
  path(c, 'M1025 384 L1030 362 Q1043 356 1053 361 L1075 378 L1069 400Z', '#344a46', '#7f7959', 1);
  wheel(c, 1037, 372, 13, 16, 3 * a, '#bc995d');
  wheel(c, 1059, 379, 12, 12, -4 * a + 0.18, '#ddbc77');
  wheel(c, 1045, 394, 10, 12, 4 * a, '#ac8859');
  // The escapement fork and the reflection are seen through the same pane.
  const fork = 2.3 * Math.sin(a * 19);
  path(c, `M1069 399 l${-3 + fork} -10 m-2 -3 l2 4 5 -2`, null, '#d3ba80', 1.6);
  path(c, 'M1022 364 l14 -6 -13 51Z M1076 408 l-17 77 7 -2 11 -54Z', '#c0d7bd16', null);
  path(c, 'M1024 364 V485 M1077 388 V482', null, '#d0d3ab50', 0.8);
}

// An illustrated florist's crate at the near edge, with wrapped bunches of railway violets.
export function florist(c) {
  const random = rng(2607);
  c.save();
  c.translate(128, 854);
  c.rotate(-0.055);
  path(c, 'M-51 -19 l113 -3 15 8 -114 8Z', '#a38663', iron, 1.6);
  const kinds = [
    ['#8a585c', '#c88886', '#e3af98'],
    ['#bb7959', '#dc9d70', '#f2c391'],
    ['#687880', '#9290a1', '#c3afae'],
  ];
  for (const [k, root, height] of [
    [0, -34, 62],
    [1, -3, 48],
    [2, 33, 60],
  ]) {
    const colors = kinds[k];
    for (let j = 0; j < 30; j++) {
      const xx = root + (random() - 0.5) * 42,
        yy = -22 - height * random() * 0.78;
      path(c, `M${root} -12 Q${xx + 3} -33 ${xx} ${yy}`, null, '#617960', 1.5);
      path(c, `M${xx} ${yy + 7} q-9 -7 -10 -15 q10 5 10 15Z`, '#759177', null);
      const size = 2 + random() * 3;
      for (let i = 0; i < 4; i++)
        ellipse(
          c,
          xx + Math.cos(i * 1.55) * size,
          yy + Math.sin(i * 1.55) * size,
          size,
          size * 0.7,
          colors[(j + i) % 3],
        );
      ellipse(c, xx, yy, 1.4, 1.4, '#e8c287');
    }
    path(c, `M${root - 19} -38 l15 8 18 -10 -12 34 -12 1Z`, '#bba684', iron, 1);
    path(c, `M${root - 15} -35 l13 8 14 -8 -12 16Z`, '#d1bb93', null);
    path(c, `M${root - 8} -15 q8 4 16 -1`, null, '#866d57', 1.4);
  }
  path(c, 'M-51 -17 l114 -4 1 39 -108 7Z', '#725b4a', iron, 2);
  path(c, 'M63 -21 l14 6 -3 35 -10 -2Z', '#584d41', iron, 1.5);
  for (const y of [-13, 3, 16]) path(c, `M-47 ${y} l106 -5`, null, '#ae896355', 2);
  path(c, 'M-13 -11 l45 -2 1 22 -44 2Z', '#d7c29a', '#a79676', 1);
  text(c, 'VIOLETS', 10, 0, 7.2, '#75574e');
  text(c, '3d   A BUNCH', 10, 6, 4.2, '#586358');
  c.restore();
}

// Trailing foliage is cached at the foreground depth, as on a multiplane rostrum.
export function vines(c) {
  const random = rng(943);
  for (const side of [-1, 1]) {
    c.save();
    c.translate(side === 1 ? 1 : 1599, 10);
    c.scale(side, 1);
    path(c, 'M-6 3 Q31 43 55 57 Q103 88 151 71 Q179 59 203 66', null, '#354d47', 3);
    for (let i = 0; i < 105; i++) {
      const u = random(),
        x = 4 + 191 * u,
        y = 22 + 52 * Math.sin(u * 2.1) + random() * 10;
      const len = 7 + random() * 10,
        d = i % 2 ? -1 : 1;
      path(
        c,
        `M${x} ${y} q${len * d} -1 ${len * d * 1.4} ${-len} q${-len * d} 1 ${-len * d * 1.4} ${len}Z`,
        ['#456653', '#577354', '#72906a', '#849778'][i % 4],
        null,
      );
      if (i % 13 === 0) {
        const n = 6 + Math.floor(random() * 5);
        for (let j = 0; j < n; j++) {
          const width = (1 - j / n) * 5 + 1;
          ellipse(
            c,
            x + Math.sin(j * 2) * width * 0.55,
            y + 3 + j * 3.2,
            width,
            3.8,
            ['#8f8191', '#a599a6', '#b6a7a5'][j % 3],
          );
        }
      }
    }
    c.restore();
  }
}

export function canopyLights(c, phase) {
  for (let bay = 0; bay < 2; bay++) {
    const start = bay * 800;
    path(c, `M${start} 37 Q${start + 390} 122 ${start + 800} 36`, null, '#3c514b', 1.3);
    for (let j = 0; j < 12; j++) {
      const u = (j + 0.5) / 12,
        x = start + 800 * u,
        y = 37 + 169 * u * (1 - u);
      line(
        c,
        [
          [x, y],
          [x + 0.4, y + 4.6],
        ],
        '#294643',
        1.7,
      );
      const light = 0.47 + 0.17 * Math.sin(phase * (9 + (j % 3)) + j);
      glow(c, x, y + 7, 15, '255,188,91', light * 0.53);
      ellipse(c, x, y + 6.6, 1.8, 2.7, '#f9d495', '#9d8964', 0.55);
    }
  }
  c.save();
  c.translate(1518, 416);
  ellipse(c, 0, 0, 17.5, 23, '#26474e', '#b39b6b', 1.8);
  ellipse(c, 0, 0, 14.6, 20.2, null, '#8a9b86', 0.85);
  text(c, '2', 0, 8, 23, '#e5c99a');
  ellipse(c, 0, -16, 1.2, 1.2, '#bea87f');
  c.restore();
}
