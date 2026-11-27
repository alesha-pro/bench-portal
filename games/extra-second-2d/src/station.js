import {
  evening,
  glasshouse,
  semaphore,
  dampStone,
  rails,
  ironwork,
  garden,
  paving,
  engineTrim,
  clockCase,
  paintedLight,
} from './scenery.js';
import { path, ellipse, line, glow, text, hatch, rng, layer, TAU } from './draw.js';
const ink = '#233b3e';
export function skyline() {
  const { canvas, c } = layer();
  evening(c);
  glasshouse(c);
  return canvas;
}

export function railYard() {
  const { canvas, c } = layer();
  rails(c);
  path(c, 'M0 558 Q510 554 1600 558 V572 Q730 569 0 575Z', '#acac92', null);
  path(c, 'M0 572 Q730 566 1600 571 V577 H0Z', '#64796f', null);
  semaphore(c);
  // Far platform arcade.
  for (let x = 10; x < 1600; x += 156) {
    path(c, `M${x} 557 L${x} 487 Q${x + 66} 444 ${x + 132} 487 L${x + 132} 557`, null, '#7a8577', 4);
    line(
      c,
      [
        [x - 8, 544],
        [x + 140, 544],
      ],
      '#556e66',
      3,
    );
  }
  for (let x = 60; x < 1600; x += 270) {
    line(
      c,
      [
        [x, 490],
        [x, 578],
      ],
      '#3d5a55',
      4,
    );
    path(c, `M${x - 7} 475 l14 0 -2 14 -9 0Z`, '#f3ce89', '#617368', 1.5);
    path(c, `M${x - 10} 475 q7 -4 10 -10 q3 6 10 10Z`, '#52685f', null);
    line(
      c,
      [
        [x, 476],
        [x, 489],
      ],
      '#a5a07c',
      1,
    );
    glow(c, x, 481, 64, '255,203,115', 0.22);
  }
  return canvas;
}

export function locomotive() {
  const { canvas, c } = layer();
  // Locomotive, drawn as rounded painted masses, brass bands and ink seams.
  c.save();
  c.translate(-75, 0);
  path(c, 'M0 416 L390 416 Q408 416 409 440 L409 607 L0 607Z', '#405b55', ink, 3);
  path(c, 'M-10 414 Q180 403 401 415 L414 431 L-10 433Z', '#203e40', ink, 3);
  for (let x = 20; x < 375; x += 69) {
    path(c, `M${x} 447 Q${x + 24} 442 ${x + 46} 447 L${x + 46} 510 L${x} 510Z`, '#e4b678', '#203e3f', 5);
    let g = c.createLinearGradient(x, 445, x, 512);
    g.addColorStop(0, '#f4d09a');
    g.addColorStop(1, '#a17c52');
    c.fillStyle = g;
    c.fillRect(x + 3, 449, 40, 57);
    line(
      c,
      [
        [x + 23, 449],
        [x + 23, 508],
      ],
      '#566558',
      2,
    );
    path(c, `M${x + 3} 450 Q${x + 13} 477 ${x + 3} 503 L${x + 3} 450Z`, '#91745a', null);
    ellipse(c, x + 31, 495, 8, 13, '#4a6058');
  }
  line(
    c,
    [
      [0, 526],
      [406, 526],
    ],
    '#bba373',
    3,
  );
  line(
    c,
    [
      [0, 591],
      [410, 591],
    ],
    '#a28f60',
    3,
  );
  for (let x = 20; x < 400; x += 50)
    line(
      c,
      [
        [x, 536],
        [x, 581],
      ],
      '#6a7961',
      1,
    );
  // Cab and boiler.
  path(c, 'M421 432 L566 432 L574 580 L421 580Z', '#294b4c', ink, 3);
  path(c, 'M404 427 Q492 414 580 429 L586 444 L410 444Z', '#19383c', ink, 3);
  path(c, 'M443 451 L487 451 L487 512 L443 512Z', '#d9b47c', '#1e3b3c', 4);
  path(c, 'M508 451 L549 451 L552 512 L508 512Z', '#c39f67', '#1e3b3c', 4);
  ellipse(c, 469, 488, 9, 11, '#344b48');
  path(c, 'M455 510 Q457 493 470 495 L482 511Z', '#344b48', null);
  path(c, 'M565 491 Q684 477 815 495 Q857 522 824 581 L565 581Z', '#345250', ink, 3);
  let boiler = c.createLinearGradient(0, 483, 0, 585);
  boiler.addColorStop(0, '#667d67');
  boiler.addColorStop(0.3, '#45625a');
  boiler.addColorStop(1, '#203f42');
  path(c, 'M568 495 Q689 484 810 499 L815 577 L568 577Z', boiler, null);
  for (let x of [590, 690, 790]) {
    path(c, `M${x} 493 Q${x - 11} 532 ${x} 579`, null, '#b39b65', 5);
    path(c, `M${x + 5} 494 Q${x - 5} 533 ${x + 5} 579`, null, '#253f3f', 2);
  }
  ellipse(c, 821, 537, 32, 47, '#213e41', '#7e896a', 4);
  ellipse(c, 824, 537, 21, 31, '#2c4a49', '#a99562', 2);
  path(c, 'M748 496 L754 438 L743 428 L788 428 L780 440 L785 496Z', '#294447', ink, 3);
  path(c, 'M743 427 Q766 421 789 427 L789 436 L744 436Z', '#a18c5d', ink, 2);
  path(c, 'M626 492 L626 476 Q641 449 656 476 L657 491Z', '#72816a', ink, 2);
  line(
    c,
    [
      [578, 512],
      [810, 512],
    ],
    '#a49870',
    3,
  );
  for (let x = 580; x < 810; x += 17) ellipse(c, x, 570, 2, 2, '#af9c6b');
  c.fillStyle = '#1c363a';
  c.fillRect(401, 579, 456, 24);
  line(
    c,
    [
      [413, 604],
      [878, 604],
    ],
    '#a47751',
    8,
  );
  for (let x of [83, 302, 465, 574, 693, 792]) {
    let rr = x < 400 ? 30 : 39;
    ellipse(c, x, 610, rr, rr, '#1c3438', '#6b7965', 4);
    ellipse(c, x, 610, rr - 9, rr - 9, '#314e4b', '#938b65', 2);
    for (let a = 0; a < TAU; a += TAU / 9)
      line(
        c,
        [
          [x, 610],
          [x + Math.cos(a) * (rr - 10), 610 + Math.sin(a) * (rr - 10)],
        ],
        '#78816a',
        2.5,
      );
    ellipse(c, x, 610, 7, 7, '#b39a6c', '#223d3e', 2);
  }
  line(
    c,
    [
      [457, 619],
      [576, 623],
      [697, 618],
      [791, 621],
    ],
    '#b5a17c',
    7,
  );
  line(
    c,
    [
      [457, 617],
      [576, 621],
      [697, 616],
      [791, 619],
    ],
    '#52645a',
    2,
  );
  path(c, 'M851 581 L881 611 L838 611Z', '#253d3f', ink, 2);
  ellipse(c, 858, 523, 17, 20, '#c6a571', '#263d3b', 4);
  ellipse(c, 860, 522, 10, 13, '#ffe2a3');
  glow(c, 861, 522, 95, '255,214,139', 0.45);
  text(c, 'Nº 07', 490, 555, 17, '#d0b786');
  text(c, 'N O R T H   L I N E', 192, 565, 13, '#c7b48a');
  hatch(c, 0, 432, 810, 169, '#cfbf8b20', 420, 443);
  c.restore();
  engineTrim(c);
  return canvas;
}

export function platform() {
  const { canvas, c } = layer();
  const r = rng(1023);
  // Rails behind the platform lip.
  line(
    c,
    [
      [0, 650],
      [1600, 650],
    ],
    '#354f49',
    8,
  );
  line(
    c,
    [
      [0, 656],
      [1600, 656],
    ],
    '#c3ac7b',
    3,
  );
  // Platform gouache wash, irregular tiles and reflected light.
  let ground = c.createLinearGradient(0, 647, 0, 900);
  ground.addColorStop(0, '#d1b28a');
  ground.addColorStop(0.45, '#a89b81');
  ground.addColorStop(1, '#4f6a68');
  c.fillStyle = ground;
  c.fillRect(0, 661, 1600, 239);
  path(c, 'M0 661 Q550 655 1600 662 L1600 677 Q730 670 0 680Z', '#d9c18e', '#6f7f6b', 1);
  for (let i = 0; i < 14; i++) {
    let x = i * 132 - 100;
    line(
      c,
      [
        [800 + (x - 800) * 0.7, 681],
        [x, 900],
      ],
      '#425f5645',
      1,
    );
  }
  for (let y of [713, 760, 825]) path(c, `M0 ${y} Q780 ${y - 8} 1600 ${y + 3}`, null, '#435f5540', 1.3);
  for (let i = 0; i < 550; i++) {
    let x = r() * 1600,
      y = 680 + r() * 220;
    c.globalAlpha = 0.035 + r() * 0.09;
    line(
      c,
      [
        [x, y],
        [x + r() * 80 + 6, y - r() * 2],
      ],
      i % 3 ? '#dfc38f' : '#204344',
      1 + r() * 3,
    );
  }
  c.globalAlpha = 1;
  for (let x of [155, 1050, 1460]) {
    glow(c, x, 720, 150, '255,214,137', 0.17);
    for (let i = 0; i < 32; i++) {
      let y = 710 + i * 4,
        w = (25 + i * 0.8) * r();
      line(
        c,
        [
          [x - w, y],
          [x + w, y],
        ],
        '#e7c18b24',
        2,
      );
    }
  }
  paving(c);
  dampStone(c);
  // Clock column, gold finial, and accessible pendulum cabinet.
  ellipse(c, 1050, 685, 72, 11, '#2d4c453d');
  path(
    c,
    'M1028 498 L1072 498 L1069 669 L1084 678 L1084 686 L1016 686 L1016 678 L1031 669Z',
    '#36534e',
    ink,
    2,
  );
  line(
    c,
    [
      [1040, 518],
      [1040, 665],
    ],
    '#7d8a6e',
    3,
  );
  line(
    c,
    [
      [1062, 520],
      [1062, 666],
    ],
    '#183d3f',
    2,
  );
  path(c, 'M1006 334 Q1050 314 1094 334 L1094 503 Q1050 522 1006 503Z', '#39524a', ink, 3);
  path(c, 'M1020 348 Q1050 337 1080 348 L1080 492 Q1050 502 1020 492Z', '#1e3839', '#a58e5f', 2);
  line(
    c,
    [
      [1027, 359],
      [1027, 487],
    ],
    '#b5ad7d40',
    3,
  );
  ellipse(c, 1050, 259, 105, 105, '#2d4847', ink, 3);
  ellipse(c, 1050, 259, 97, 97, '#a98e5f', ink, 2);
  ellipse(c, 1050, 259, 89, 89, '#eed7a7', '#435449', 3);
  let face = c.createRadialGradient(1030, 236, 10, 1050, 259, 90);
  face.addColorStop(0, '#f8e4b8');
  face.addColorStop(1, '#d4b984');
  ellipse(c, 1050, 259, 86, 86, face);
  for (let i = 0; i < 60; i++) {
    let a = (i / 60) * TAU - Math.PI / 2,
      major = i % 5 === 0;
    line(
      c,
      [
        [1050 + Math.cos(a) * (major ? 73 : 78), 259 + Math.sin(a) * (major ? 73 : 78)],
        [1050 + Math.cos(a) * 82, 259 + Math.sin(a) * 82],
      ],
      '#4d594b',
      major ? 2.5 : 1,
    );
  }
  const romans = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  for (let i = 0; i < 12; i++) {
    let a = (i / 12) * TAU - Math.PI / 2;
    text(c, romans[i], 1050 + Math.cos(a) * 61, 265 + Math.sin(a) * 61, 14, '#3f5148');
  }
  text(c, 'NORTH', 1050, 237, 7, '#7e7858');
  text(c, 'EST. 1896', 1050, 289, 6, '#7e7858');
  path(c, 'M1036 155 Q1050 136 1064 155Z', '#b49a66', ink, 2);
  ellipse(c, 1050, 140, 5, 7, '#ac935e', ink, 1);
  clockCase(c);
  // A modest maintenance ladder, already part of the station.
  line(
    c,
    [
      [982, 700],
      [1004, 533],
    ],
    '#7c6650',
    7,
  );
  line(
    c,
    [
      [1031, 700],
      [1048, 533],
    ],
    '#7c6650',
    7,
  );
  line(
    c,
    [
      [1004, 533],
      [1078, 699],
    ],
    '#5f6250',
    5,
  );
  for (let i = 0; i < 5; i++) {
    let y = 682 - i * 29;
    line(
      c,
      [
        [985 + (682 - y) * 0.13, y],
        [1033 + (682 - y) * 0.1, y - 1],
      ],
      '#c0a475',
      5,
    );
  }
  // Low porter step under the balloon.
  path(c, 'M1113 692 L1117 650 L1168 650 L1173 692Z', '#796c51', '#3c5147', 2);
  path(c, 'M1112 648 L1172 647 L1173 655 L1112 656Z', '#c5a67a', ink, 1.5);
  line(
    c,
    [
      [1123, 661],
      [1121, 684],
    ],
    '#b49a70',
    2,
  );
  // Foreground suitcase and flowers, grounding the painted scene.
  path(c, 'M1340 720 L1420 715 L1427 767 L1343 773Z', '#946b4e', '#354a42', 3);
  path(c, 'M1366 718 Q1364 701 1384 703 Q1398 702 1399 717', null, '#534c3e', 4);
  line(
    c,
    [
      [1355, 723],
      [1359, 767],
    ],
    '#c49b65',
    5,
  );
  line(
    c,
    [
      [1405, 721],
      [1410, 762],
    ],
    '#c49b65',
    5,
  );
  hatch(c, 1345, 724, 72, 40, '#d2b27c55', 40, 14);
  path(c, 'M1440 676 L1505 676 L1495 733 L1451 733Z', '#7a6950', ink, 2);
  ellipse(c, 1472, 675, 33, 8, '#3c5143');
  for (let i = 0; i < 23; i++) {
    let x = 1442 + r() * 65,
      y = 610 + r() * 61;
    path(c, `M1472 681 Q${x - 18} ${y + 16} ${x} ${y}`, null, '#3e6651', 2);
    ellipse(c, x, y, 4 + r() * 5, 3 + r() * 4, i % 3 ? '#c7ad72' : '#c88665');
  }
  garden(c, 1472, 677, 0.84, 63);
  hatch(c, 0, 668, 1600, 232, '#e5d8ad13', 840, 971);
  paintedLight(c);
  return canvas;
}

export function canopy() {
  const { canvas, c } = layer();
  // Ornate canopy frames the image like the edge of a storybook.
  path(c, 'M0 0 L1600 0 L1600 101 Q1130 24 812 117 Q435 12 0 115Z', '#19383f', null);
  path(c, 'M-20 125 Q390 4 811 125 Q1192 15 1620 122', null, '#91a087', 7);
  path(c, 'M-20 137 Q390 18 811 137 Q1192 29 1620 134', null, '#223f43', 13);
  for (let i = 0; i < 17; i++) {
    let x = i * 100;
    line(
      c,
      [
        [x, 0],
        [800 + (x - 800) * 1.12, 103 - Math.sin((i / 16) * Math.PI) * 45],
      ],
      '#405854',
      2,
    );
  }
  for (let x of [84, 1518]) {
    path(
      c,
      `M${x - 14} 111 L${x + 13} 111 L${x + 8} 717 L${x + 25} 730 L${x + 25} 744 L${x - 25} 744 L${x - 25} 730 L${x - 8} 717Z`,
      '#284b4c',
      ink,
      3,
    );
    line(
      c,
      [
        [x - 4, 131],
        [x - 4, 711],
      ],
      '#8e9b7d',
      3,
    );
    line(
      c,
      [
        [x + 6, 130],
        [x + 6, 714],
      ],
      '#15383d',
      4,
    );
    for (let y of [155, 564, 704]) {
      c.fillStyle = '#5a7463';
      c.fillRect(x - 15, y, 30, 8);
    }
    path(
      c,
      `M${x} 292 Q${x + 10} 158 ${x + 159} 129 M${x} 213 Q${x + 42} 203 ${x + 58} 166 M${x} 199 Q${x + 29} 148 ${x + 48} 167 Q${x + 65} 191 ${x + 37} 191`,
      null,
      '#2c4c4c',
      7,
    );
    path(c, `M${x} 292 Q${x - 10} 158 ${x - 159} 129`, null, '#2c4c4c', 7);
  }
  ironwork(c);
  return canvas;
}

export function bench(c) {
  // Left bench with carved iron curls.
  for (let y of [652, 665, 678]) {
    path(c, `M151 ${y} Q235 ${y - 5} 320 ${y} L320 ${y + 8} L151 ${y + 8}Z`, '#8c6c4e', ink, 2);
    line(
      c,
      [
        [160, y + 2],
        [312, y + 2],
      ],
      '#b18b5d',
      1,
    );
  }
  path(c, 'M145 697 Q237 688 330 697 L330 708 L145 708Z', '#ac855a', ink, 2);
  for (let x of [163, 309]) {
    line(
      c,
      [
        [x, 683],
        [x - 5, 734],
      ],
      '#284744',
      5,
    );
    path(c, `M${x} 695 C${x - 28} 671 ${x + 9} 669 ${x + 7} 688`, null, '#284744', 4);
  }
}
