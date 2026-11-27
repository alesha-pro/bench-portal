// Painted scenery for Bellwick station. All coordinates are in the 1600 × 900 field.
import { ellipse, glow, hatch, line, path, rng, text } from './draw.js';

export function evening(c) {
  const random = rng(703);
  const sky = c.createLinearGradient(0, 0, 0, 640);
  for (const [stop, color] of [
    [0, '#294d68'],
    [0.32, '#608392'],
    [0.57, '#d38d7d'],
    [0.77, '#ffc38b'],
    [1, '#f9d49a'],
  ])
    sky.addColorStop(stop, color);
  c.fillStyle = sky;
  c.fillRect(0, 0, 1600, 670);
  glow(c, 935, 445, 430, '255,196,117', 0.39);
  for (let i = 0; i < 105; i++) {
    const x = random() * 1600,
      y = 55 + random() * 280,
      radius = 0.5 + random() * 1.2;
    ellipse(c, x, y, radius, radius, '#ffebce68');
  }
  // Thin bands of high cloud have broken edges, with a warm lower rim.
  for (let bank = 0; bank < 37; bank++) {
    const x = random() * 1750 - 140,
      y = 145 + random() * 270;
    const width = 42 + random() * 290,
      height = 3 + random() * 16;
    c.save();
    c.translate(x, y);
    c.scale(width / 120, height / 12);
    path(
      c,
      'M0 3 Q17 2 31 -2 Q41 -10 55 -5 Q68 -12 79 -6 Q90 -3 111 -3 L125 -2 Q107 3 80 4 Q42 11 0 6Z',
      y < 240 ? '#d3b2a342' : '#f4be9e9c',
      null,
    );
    path(c, 'M4 6 Q39 7 65 3 T113 0 Q80 7 47 8Z', '#ffe3b770', null);
    c.restore();
  }
  // Mountain planes and the river town beyond the rails.
  path(
    c,
    'M0 430 Q95 395 149 402 T274 390 Q347 336 412 366 Q482 397 541 372 Q638 320 692 336 Q751 354 820 385 Q890 402 943 367 Q1044 319 1111 358 Q1168 394 1246 353 Q1318 310 1412 350 Q1540 402 1600 348 L1600 610 L0 610Z',
    '#9c9290',
    null,
  );
  path(
    c,
    'M0 456 Q126 394 202 425 T366 425 Q437 386 515 411 Q551 419 589 403 Q703 353 781 393 Q855 428 923 408 Q1021 374 1164 405 Q1285 435 1350 401 Q1466 354 1600 398 L1600 606 L0 606Z',
    '#8f8b85',
    null,
  );
  for (let layer = 0; layer < 2; layer++) {
    let x = -20;
    while (x < 1600) {
      const w = 13 + random() * (layer ? 44 : 20),
        base = 486 + layer * 35;
      const y = base - 18 - random() * 44 - 13 * Math.sin(x / 150);
      const wall = layer ? ['#90877b', '#a19481', '#958d7b'] : ['#ab9b8b', '#b39d8a', '#ad9986'];
      const roof = layer ? '#6c7974' : '#948b84';
      c.fillStyle = wall[Math.floor(random() * 3)];
      c.fillRect(x, y, w, base - y + 15);
      path(
        c,
        `M${x - 3} ${y} L${x + w * 0.28} ${y - 5 - w * 0.18} L${x + w * 0.73} ${y - 5 - w * 0.2} L${x + w + 3} ${y + 1}Z`,
        roof,
        null,
      );
      c.fillStyle = roof;
      c.fillRect(x + w * 0.65, y - w * 0.27 - 5, 3, 11);
      for (let xx = x + 5; xx < x + w - 2; xx += 9)
        for (let yy = y + 6; yy < base; yy += 13) {
          c.fillStyle = random() > 0.57 ? '#e8bd87' : '#68797a88';
          c.fillRect(xx, yy, 3, 6);
        }
      x += w - 1;
    }
  }
  for (const [x, y, k] of [
    [1276, 376, 0.86],
    [565, 390, 0.62],
    [914, 400, 0.59],
    [212, 385, 0.65],
  ]) {
    c.save();
    c.translate(x, y);
    c.scale(k, k);
    path(c, 'M-15 109 L-15 0 L15 0 L15 109Z', '#8d897d', null);
    path(c, 'M-19 2 Q-4 -15 0 -43 Q5 -16 19 2Z', '#5f7275', null);
    line(
      c,
      [
        [0, -41],
        [0, -55],
      ],
      '#6e7a79',
      1.3,
    );
    for (let a = -9; a < 12; a += 10) path(c, `M${a} 20 L${a} 10 q3 -5 6 0 v10Z`, '#657977', null);
    c.restore();
  }
  path(
    c,
    'M0 525 Q120 514 260 525 T530 513 T800 519 T1090 512 T1350 512 T1600 514 L1600 600 L0 600Z',
    '#768579',
    null,
  );
  trees(c);
  // Crescent with a sky-coloured opening supplied by the path itself.
  glow(c, 1350, 183, 79, '255,224,167', 0.17);
  path(c, 'M1345 152 A32 32 0 1 1 1320 196 A29 29 0 0 0 1345 152Z', '#ffe2ac', null);
}

export function rails(c) {
  const wash = c.createLinearGradient(0, 556, 0, 665);
  wash.addColorStop(0, '#778375');
  wash.addColorStop(0.65, '#585f55');
  wash.addColorStop(1, '#4b534b');
  c.fillStyle = wash;
  c.fillRect(0, 557, 1600, 106);
  const random = rng(783);
  for (let i = 0; i < 4000; i++) {
    const x = random() * 1600,
      y = 577 + random() * 86;
    c.fillStyle = i % 2 ? '#cab39333' : '#263d4145';
    c.fillRect(x, y, random() * 4 + 1, 1.5);
  }
  for (let i = -6; i < 70; i++) {
    const x = i * 30;
    path(c, `M${x} 613 l10 0 l-26 44 -15 0Z`, '#494f47', null);
  }
  for (const y of [583, 613, 644]) {
    line(
      c,
      [
        [0, y + 4],
        [1600, y + 4],
      ],
      '#354c4c',
      4,
    );
    line(
      c,
      [
        [0, y],
        [1600, y],
      ],
      '#c4b292',
      2,
    );
  }
}

export function ironwork(c) {
  // Repeating roof glazing, cast-iron spandrels and rivets.
  for (let bay = 0; bay < 2; bay++) {
    c.save();
    c.translate(bay * 800, 0);
    for (let i = 0; i < 20; i++) {
      const x = i * 40;
      const roofY = (n) => 48 + 77 * ((n - 400) / 400) ** 2;
      const y = roofY(x),
        y2 = roofY(x + 40);
      path(c, `M${x} ${y - 17} l0 -22 L${x + 40} ${y2 - 18}Z`, i % 3 ? '#617b7870' : '#748c8278', null);
      line(
        c,
        [
          [x, y - 18],
          [x + 40, y2 - 38],
          [x + 40, y2 - 18],
        ],
        '#9d9c7a77',
        1.3,
      );
      ellipse(c, x, y - 6, 2, 2, '#b4a879');
    }
    c.restore();
  }
  for (const x of [84, 1518]) {
    for (const flip of [1, -1]) {
      c.save();
      c.translate(x, 0);
      c.scale(flip, 1);
      path(
        c,
        'M7 230 Q29 170 89 150 Q105 140 114 144 Q114 155 100 158 Q90 159 92 152 M9 192 Q24 175 22 163 Q17 153 11 162 Q7 173 23 177 M10 257 Q23 218 55 195 Q72 183 68 173 Q64 165 58 171 Q54 178 61 179',
        null,
        '#3e615a',
        3.5,
      );
      path(c, 'M14 209 Q44 164 82 154 M17 223 Q34 193 54 183', null, '#b3a171', 1);
      for (let i = 0; i < 6; i++) {
        let xx = 21 + i * 9,
          yy = 195 - i * 5;
        path(c, `M${xx} ${yy} q-2 -10 6 -16 q4 9 -6 16Z`, '#768a73', null);
      }
      c.restore();
    }
  }
}

export function stationSign(c, phase) {
  const x = 345,
    y = 174;
  c.save();
  c.translate(x, y - 113);
  c.rotate(0.026 * Math.sin(phase * 3) + 0.009 * Math.sin(phase * 7));
  c.translate(0, 113);
  for (const off of [-127, 127]) {
    line(
      c,
      [
        [off, -113],
        [off, -14],
      ],
      '#2d4344',
      3,
    );
    for (let j = -100; j < -16; j += 9) ellipse(c, off, j, 2.2, 4.5, null, '#9a9a7f', 0.8);
  }
  path(
    c,
    'M-151 0 Q-139 0 -137 -12 L-78 -12 Q-66 -12 -60 -19 L60 -19 Q67 -12 77 -12 L138 -12 Q140 0 152 0 L152 62 Q139 62 136 74 L-136 74 Q-139 62 -151 62Z',
    '#152f39',
    '#bfa575',
    3,
  );
  path(
    c,
    'M-144 5 Q-136 5 -132 -6 L-75 -6 Q-65 -6 -58 -13 L58 -13 Q64 -7 75 -6 L132 -6 Q135 5 145 5 L145 56 Q136 56 131 68 L-132 68 Q-135 58 -144 56Z',
    null,
    '#728576',
    1.1,
  );
  text(c, 'E A S T E R N    R A I L W A Y', 0, 8, 8, '#d8bb87');
  text(c, 'B E L L W I C K', 0, 42, 32, '#f4d9a6');
  text(c, 'P L A T F O R M     0 2', 0, 59, 9, '#d7ba88');
  for (const k of [-1, 1]) {
    line(
      c,
      [
        [k * 60, 56],
        [k * 103, 56],
      ],
      '#8f9579',
      1,
    );
    ellipse(c, k * 110, 56, 2, 2, '#b8a175');
  }
  c.restore();
}

export function garden(c, x, y, scale, seed) {
  const r = rng(seed);
  c.save();
  c.translate(x, y);
  c.scale(scale, scale);
  for (let i = 0; i < 54; i++) {
    const a = (r() - 0.5) * 2.45,
      len = 22 + r() * 82,
      xx = Math.sin(a) * len,
      yy = -Math.cos(a) * len;
    path(c, `M0 5 Q${xx * 0.35} ${yy * 0.62} ${xx} ${yy}`, null, '#536956', 1.7);
    for (let j = 1; j <= 4; j++) {
      const u = j / 5,
        lx = xx * u,
        ly = yy * u,
        side = (i + j) % 2 ? 1 : -1;
      path(
        c,
        `M${lx} ${ly} q${side * 3} -13 ${side * 15} -17 q${side * -1} 12 ${side * -15} 17Z`,
        ['#3a6059', '#607b62', '#889477'][i % 3],
        null,
      );
    }
    if (i % 3 === 0) {
      for (let j = 0; j < 5; j++)
        ellipse(
          c,
          xx + Math.cos(j * 1.26) * 3,
          yy + Math.sin(j * 1.26) * 3,
          3.5,
          2.8,
          i % 2 ? '#dc966d' : '#e6c792',
        );
      ellipse(c, xx, yy, 2, 2, '#866951');
    }
  }
  c.restore();
}

export function paving(c) {
  const r = rng(190);
  // Broken aquarelle pools pick up the lamps and sunset.
  for (let i = 0; i < 220; i++) {
    let y = 684 + r() * 211,
      x = r() * 1600,
      w = 7 + r() * 74;
    path(c, `M${x} ${y} q${w * 0.6} -2 ${w} -1 q-2 2 ${-w} 2Z`, i % 3 ? '#e7c29329' : '#354e5133', null);
  }
  for (let i = 0; i < 30; i++) {
    let x = r() * 1600,
      y = 707 + r() * 180;
    path(c, `M${x} ${y} l6 -2 5 1 8 -3`, null, '#4f655b66', 0.9);
  }
  hatch(c, 0, 676, 1600, 224, '#e2c79755', 1300, 77);
}

export function engineTrim(c) {
  // Brake plumbing, running board, steam dome, cast number plate and bell.
  c.save();
  c.translate(-75, 0);
  path(c, 'M594 490 L594 479 Q598 475 605 477 L606 490Z', '#9d976f', '#304a47', 1.5);
  path(
    c,
    'M706 489 L706 460 Q695 460 695 456 L722 456 Q720 462 715 462 L714 488Z',
    '#b8a06a',
    '#394b45',
    1.4,
  );
  path(c, 'M699 456 Q700 446 707 444 Q714 445 718 456Z', '#ccad70', '#394b45', 1);
  line(
    c,
    [
      [568, 557],
      [810, 557],
    ],
    '#283e40',
    4,
  );
  for (let x = 580; x < 812; x += 30) {
    line(
      c,
      [
        [x, 553],
        [x, 560],
      ],
      '#ba9b6c',
      2,
    );
    ellipse(c, x + 2, 503, 1.4, 1.3, '#d9be87');
  }
  path(c, 'M563 534 Q583 535 584 547 L584 564 Q585 573 615 572 L767 572', null, '#344c4b', 4);
  path(c, 'M563 533 Q582 534 582 547 L582 564 Q583 571 615 570 L767 570', null, '#b09265', 1.3);
  for (let x of [448, 540]) {
    line(
      c,
      [
        [x, 521],
        [x, 567],
      ],
      '#bdac85',
      2.2,
    );
    ellipse(c, x, 525, 2, 2, '#5f6b58');
  }
  path(
    c,
    'M461 539 Q462 535 469 535 L515 535 Q519 535 521 540 L519 561 L462 561Z',
    '#754c40',
    '#c3a16d',
    1.5,
  );
  text(c, 'Nº 07', 490, 554, 15, '#f1d39b');
  for (let i = 0; i < 3; i++) {
    line(
      c,
      [
        [430, 579 + i * 8],
        [448, 579 + i * 8],
      ],
      '#b4a384',
      2,
    );
  }
  c.restore();
}

export function clockCase(c) {
  c.save();
  c.translate(1050, 259);
  for (let i = 0; i < 36; i++) {
    const a = (i * Math.PI) / 18;
    ellipse(c, 93 * Math.cos(a), 93 * Math.sin(a), 1.5, 1.5, '#dfbd7e', '#786e54', 0.5);
  }
  for (const side of [-1, 1]) {
    c.save();
    c.scale(side, 1);
    path(
      c,
      'M83 -36 Q96 -47 91 -66 Q86 -76 81 -70 Q77 -64 83 -63 M88 -52 Q110 -67 105 -80 Q102 -84 97 -80',
      null,
      '#ae996d',
      2.2,
    );
    path(c, 'M17 -102 Q31 -107 35 -119 Q24 -116 17 -102Z', '#afae86', '#4d6256', 1);
    for (let j = 0; j < 4; j++)
      line(
        c,
        [
          [34, 113 + j * 36],
          [34, 130 + j * 36],
        ],
        '#a49465',
        1.5,
      );
    c.restore();
  }
  for (const [x, y] of [
    [-35, 96],
    [35, 96],
    [-35, 238],
    [35, 238],
  ])
    ellipse(c, x, y, 2, 2, '#b8a16d', '#293f3d', 0.8);
  path(
    c,
    'M-34 110 Q-30 91 -5 93 M34 110 Q30 91 5 93 M-34 216 Q-31 235 -14 238 M34 216 Q31 235 14 238',
    null,
    '#aba171',
    1.3,
  );
  c.restore();
}

export function paintedLight(c) {
  // Dapple the pigment in broad, dry marks; these stay attached to the set on a pan.
  const r = rng(276);
  c.save();
  for (let i = 0; i < 5100; i++) {
    const x = r() * 1600,
      y = r() * 900,
      len = 2 + r() ** 2 * 24;
    c.strokeStyle = i % 3 ? '#f5dbb110' : '#173e4810';
    c.lineWidth = 0.4 + r() * 1.7;
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(x + len * 0.65, y - 1.3, x + len, y - 0.7);
    c.stroke();
  }
  c.restore();
}

export function trees(c) {
  const random = rng(404);
  for (const [baseX, baseY, radius] of [
    [17, 502, 69],
    [102, 510, 45],
    [1169, 525, 35],
    [1387, 527, 57],
    [1558, 501, 78],
    [832, 539, 31],
  ]) {
    for (let j = 0; j < 24; j++) {
      const a = random() * Math.PI,
        xx = baseX + Math.cos(a) * radius * random(),
        yy = baseY - Math.sin(a) * radius * 0.7 * random();
      const rr = 5 + random() * radius * 0.21;
      ellipse(
        c,
        xx,
        yy,
        rr,
        rr * (0.68 + random() * 0.27),
        ['#828976', '#84917b', '#959981', '#8c927b'][j % 4],
      );
      for (let k = 0; k < 8; k++) {
        const dx = (random() - 0.5) * rr,
          dy = (random() - 0.5) * rr;
        line(
          c,
          [
            [xx + dx, yy + dy],
            [xx + dx + 3, yy + dy - 1],
          ],
          '#c5b18977',
          1.5,
        );
      }
    }
  }
}

export function parcel(c) {
  // Foreground left, the guard's battered trunk and destination label.
  c.save();
  c.translate(-33, 794);
  c.rotate(-0.043);
  path(c, 'M-14 17 L142 14 Q149 16 150 23 L153 79 L-15 86Z', '#855d45', '#303e3c', 2.5);
  path(c, 'M-15 8 L124 4 L144 15 L-9 21Z', '#b48a63', '#43493d', 1.8);
  path(c, 'M141 16 L157 11 L159 70 L153 79Z', '#624e3e', '#39463c', 1.8);
  for (const x of [14, 112]) {
    path(c, `M${x} 9 l8 -1 9 8 2 63 -9 1 -2 -61Z`, '#bc9764', '#625442', 1);
    path(c, `M${x + 4} 34 h12 v10 h-12Z`, null, '#dec28c', 2.5);
  }
  path(c, 'M53 28 Q55 20 66 21 L78 21 Q85 21 85 29', null, '#493e33', 4);
  c.save();
  c.translate(77, 51);
  c.rotate(0.08);
  path(c, 'M-18 -9 h37 v18 h-37Z', '#d4bc90', '#5c6551', 1);
  text(c, 'BELLWICK', 0, 1, 6, '#70564a');
  line(
    c,
    [
      [-9, 4],
      [9, 4],
    ],
    '#8b765d',
    1,
  );
  c.restore();
  c.restore();
}

export function glasshouse(c) {
  c.save();
  c.translate(907, 517);
  // The winter garden's warm panes carry the sunset behind the far platform.
  path(
    c,
    'M-97 0 V-35 L-74 -47 H-51 Q-34 -81 0 -83 Q32 -82 49 -48 H74 L96 -35 V0Z',
    '#8e998d',
    '#788b83',
    1.6,
  );
  const pane = c.createLinearGradient(0, -82, 0, -4);
  pane.addColorStop(0, '#c2b6a1');
  pane.addColorStop(0.45, '#dfaF8f');
  pane.addColorStop(1, '#b8ad93');
  path(c, 'M-91 -4 V-33 L-73 -43 H-48 Q-36 -75 0 -79 Q32 -76 46 -43 H73 L91 -33 V-4Z', pane, null);
  for (let side of [-1, 1]) {
    c.save();
    c.scale(side, 1);
    for (let i = 1; i < 5; i++) path(c, `M0 -80 Q${i * 9} -63 ${i * 10.9} -43 V-6`, null, '#73887f', 1.2);
    for (let j = 0; j < 3; j++)
      line(
        c,
        [
          [50 + j * 15, -41],
          [50 + j * 15, -5],
        ],
        '#788b81',
        1.4,
      );
    path(
      c,
      'M1 -63 Q18 -63 33 -59 M1 -52 Q26 -52 41 -49 M1 -42 H74 L92 -32 M1 -24 H91',
      null,
      '#879789',
      1.5,
    );
    path(c, 'M5 -74 l12 23 -7 1Z M30 -39 l5 1 -10 22Z', '#ead5af66', null);
    c.restore();
  }
  path(c, 'M-98 -2 H97 M-96 -36 l22 -11 23 0 M-48 -43 H49 M0 -80 V-5', null, '#677e77', 2);
  path(c, 'M-3 -82 l3 -11 3 11Z', '#627b76', null);
  c.restore();
}

export function semaphore(c) {
  c.save();
  c.translate(835, 551);
  path(c, 'M-5 0 L-4 -125 H3 L5 0Z', '#7d8a77', '#566f65', 1);
  path(c, 'M-4 -78 L3 -79 L4 -48 H-4Z', '#c8b393', null);
  line(
    c,
    [
      [9, -6],
      [9, -114],
    ],
    '#647a6b',
    1.4,
  );
  for (let i = 0; i < 13; i++)
    line(
      c,
      [
        [4, -9 - 8 * i],
        [10, -9 - 8 * i],
      ],
      '#72816e',
      1,
    );
  c.save();
  c.translate(0, -111);
  c.rotate(-0.37);
  path(c, 'M-2 -3 l41 -4 -2 6 3 5 -43 1Z', '#9d6859', '#6e7868', 1);
  path(c, 'M25 -6 l6 -.3 0 10 -6 .4Z', '#d9c7a3', null);
  c.restore();
  ellipse(c, 0, -112, 6, 7, '#52695e', '#a8a082', 1.1);
  ellipse(c, 0, -114, 2.6, 2.6, '#eccb80');
  line(
    c,
    [
      [0, -129],
      [0, -125],
    ],
    '#b9a47b',
    2,
  );
  c.restore();
}

export function dampStone(c) {
  // Broken reflections cling to a few uneven flagstones.
  const r = rng(553);
  for (const [x, y, w, h] of [
    [192, 760, 90, 9],
    [388, 818, 116, 7],
    [650, 748, 71, 5],
    [1073, 772, 109, 7],
    [1413, 798, 101, 9],
  ]) {
    c.save();
    c.translate(x, y);
    path(
      c,
      `M${-w} 0 Q${-w * 0.5} ${-h * 0.6} -6 ${-h * 0.3} L${w * 0.48} ${-h} L${w} ${-h * 0.82} Q${w * 0.43} -1 ${w * 0.6} 1 Q${w * 0.2} ${h * 0.6} ${-w * 0.4} ${h * 0.4}Z`,
      '#64808448',
      null,
    );
    for (let j = 0; j < 24; j++) {
      const xx = (r() - 0.5) * w * 1.7,
        yy = (r() - 0.5) * h * 0.65;
      line(
        c,
        [
          [xx, yy],
          [xx + 4 + r() * 18, yy - 0.3],
        ],
        j % 4 ? '#cbbb962f' : '#f5c58788',
        0.8 + r() * 0.65,
      );
    }
    c.restore();
  }
  for (const [x, y, rot] of [
    [353, 753, 0.13],
    [998, 725, -0.22],
    [1310, 774, -0.13],
  ]) {
    c.save();
    c.translate(x, y);
    c.rotate(rot);
    c.transform(1, 0, -0.6, 0.42, 0, 0);
    path(c, 'M-9 -4 L13 -4 L12 5 L-10 6Z', '#c2a381', '#827b63', 0.8);
    path(c, 'M-6 -2 h10 m-11 3 h8 M7 -3 v7', null, '#967a65', 0.8);
    c.restore();
  }
}
