// Little performances on either side of the tracks share the station's clock.
import { ellipse, glow, line, path, TAU, text } from './draw.js';

const iron = '#2d4948';
const brass = '#c6a36a';

export function bookingOffice(c, a) {
  c.save();
  c.translate(1347, 564);
  path(c, 'M-87 0 H82 L88 3 V6 H-89Z', '#898878', '#52655b', 1);
  path(c, 'M-93 6 H88 L94 9 H-97Z', '#b3a98c', '#67756b', 0.9);
  path(c, 'M-83 0 V-102 L-72 -112 H67 L80 -102 V0Z', '#466459', iron, 2);
  for (let x = -77; x < 78; x += 9)
    line(
      c,
      [
        [x, -100],
        [x, -2],
      ],
      '#90a08055',
      1,
    );
  path(c, 'M-92 -97 Q-93 -101 -86 -106 L-75 -123 L70 -123 L86 -107 L90 -98Z', '#834f46', iron, 2);
  for (let x = -73; x < 76; x += 16) path(c, `M${x} -121 l9 0 9 21 -13 0Z`, '#b88165', null);
  path(
    c,
    'M-91 -99 H91 L88 -93 Q83 -89 78 -95 Q70 -87 64 -94 H-66 Q-74 -88 -79 -95 Q-86 -89 -91 -96Z',
    '#dac396',
    iron,
    1.4,
  );
  path(c, 'M-73 -82 H70 V-19 H-73Z', '#e2b87d', '#243e40', 3.2);
  for (let i = 0; i < 3; i++) {
    const x = -41 + i * 32;
    path(c, `M${x} -76 h28 v21 h-28Z`, '#997e60', '#ad8c62', 1);
    for (let j = 0; j < 3; j++) path(c, `M${x + 1} ${-72 + j * 5} l24 -1 0 2 -24 1Z`, '#dbbc87', null);
  }
  path(c, 'M-69 -79 H-44 Q-47 -58 -68 -49Z M66 -78 H44 Q47 -58 66 -53Z', '#a1674e', null);
  c.save();
  c.translate(-14 + 11 * Math.sin(a * 2), 0);
  c.rotate(0.027 * Math.sin(3 * a));
  ellipse(c, 0, -53, 8, 10, '#43554b');
  path(
    c,
    'M-11 -62 Q-7 -72 4 -68 L8 -65 L12 -64 Q7 -60 -11 -62Z M-20 -20 Q-19 -46 -4 -45 Q6 -48 13 -33 L23 -35 L26 -31 L11 -24 L3 -28 L7 -18Z',
    '#384e48',
    null,
  );
  path(c, 'M-5 -43 L0 -38 L4 -44 L3 -32Z', '#ceb78d', null);
  const stamp = Math.sin(4 * a);
  c.translate(14, -31);
  c.rotate(-0.26 + 0.2 * stamp);
  path(c, 'M-4 2 q0 -4 6 -4 l8 1 q4 1 5 4 l-2 2 -7 -1 -7 2Z', '#7f8063', null);
  path(c, 'M10 -6 q2 -3 4 0 l-1 4 4 1 v3 l-9 0 v-3 l3 -1Z', '#5b5847', null);
  c.restore();
  for (const x of [-28, 29])
    line(
      c,
      [
        [x, -81],
        [x, -19],
      ],
      '#40584d',
      3,
    );
  path(c, 'M-78 -21 H76 V-15 H-78Z', '#a18760', iron, 1.5);
  path(c, 'M-51 -120 Q-47 -129 -42 -129 H44 Q49 -126 51 -120 V-102 H-51Z', '#375550', '#bc9e6b', 2.2);
  text(c, 'BOOKING OFFICE', 0, -109, 10, '#f1d69e');
  for (const side of [-1, 1]) {
    const x = side * 77;
    path(c, `M${x - 4} -73 h8 l-1 11 h-6Z`, '#f2cc8b', iron, 1.1);
    path(c, `M${x - 6} -73 l6 -6 6 6Z`, iron, null);
    glow(c, x, -68, 19, '255,207,120', 0.3);
    path(c, `M${x - 2} -13 h5 v10 h-5Z`, '#9d9671', null);
  }
  path(c, 'M-32 -17 h64 v14 h-64Z', '#37564d', '#b1996b', 0.9);
  text(c, 'T I C K E T S', 0, -7, 7.3, '#ddc490');
  for (const x of [-68, 64]) ellipse(c, x, -15, 1.4, 1.4, brass);
  c.restore();
}

// Two adults and a child on the far platform. A pale handkerchief breaks their silhouette.
export function farewell(c, a) {
  c.save();
  c.translate(1233, 573);
  c.scale(0.9, 0.9);
  for (const [x, height, coat] of [
    [-25, 54, '#596763'],
    [0, 39, '#91745e'],
    [20, 62, '#625e54'],
  ]) {
    c.save();
    c.translate(x, 0);
    const bob = 1.8 * Math.sin(a * 4 + x);
    line(
      c,
      [
        [-4, -16],
        [-6 + bob, 0],
      ],
      '#475953',
      4,
    );
    line(
      c,
      [
        [3, -16],
        [6 - bob, 0],
      ],
      '#475953',
      4,
    );
    ellipse(c, 0, -height, 5, 6.4, '#a08568');
    path(c, `M-7 ${-height - 3} q1 -7 7 -6 q5 0 6 5 l4 2 q-6 3 -17 1Z`, '#4b5a51', null);
    path(
      c,
      `M-4 ${-height + 6} Q0 ${-height + 9} 4 ${-height + 6} Q9 ${-height + 7} 9 -28 L12 -15 Q1 -11 -11 -15 L-8 -36Z`,
      coat,
      '#586257',
      1,
    );
    if (x <= 0) {
      const wave = Math.sin(a * (x ? 6 : 8) + x);
      const hand = [15 + wave * 4, -height - 3 + 4 * wave];
      line(c, [[4, -height + 12], [12, -height + 18], hand], coat, 4);
      ellipse(c, ...hand, 2.5, 3, '#c6a47e');
      if (x === -25)
        path(
          c,
          `M${hand[0]} ${hand[1]} q4 -8 1 -13 q7 4 ${13 + 3 * wave} 0 q-5 10 -14 13Z`,
          '#ead9ae',
          '#9c9984',
          0.7,
        );
    } else {
      path(c, 'M-15 -33 h14 v13 h-14Z', '#907155', iron, 1);
      line(
        c,
        [
          [-5, -48],
          [-10, -35],
        ],
        coat,
        4,
      );
    }
    c.restore();
  }
  c.restore();
}

export function departures(c, a) {
  c.save();
  c.translate(222, 638);
  ellipse(c, 0, 22, 76, 4, '#273d3c38');
  for (const x of [-68, 68]) {
    path(c, `M${x - 3} 20 l1 -150 h5 l2 150Z`, '#3c574f', iron, 1.5);
    ellipse(c, x, -132, 3.7, 4, brass, iron, 1);
  }
  path(c, 'M-74 -126 L-64 -136 H-20 Q0 -150 20 -136 H64 L74 -126 V2 H-74Z', '#36574f', '#273e3d', 2.6);
  path(c, 'M-68 -122 L-63 -129 H63 L68 -123 V-4 H-68Z', null, '#b79a69', 1.3);
  text(c, 'EASTERN   •   RAILWAY', 0, -132, 5.2, '#ecd4a1');
  // Block-printed travel lithograph. The lower edge lifts off the backing in the draught.
  c.save();
  c.translate(-62, -122);
  const curl = 3.5 + 3.2 * Math.sin(4 * a + 0.6);
  c.transform(1, 0, 0.018 * Math.sin(3 * a), 1 - curl * 0.0018, 0, 0);
  path(c, 'M2 2 H61 L62 111 L4 114Z', '#203e3a', null);
  path(c, 'M0 0 L59 1 L60 111 L0 110Z', '#ead6a4', '#7e775b', 0.8);
  path(c, 'M4 5 H55 V87 H4Z', '#74a6a1', null);
  ellipse(c, 37, 29, 12, 12, '#f5ca82');
  path(c, 'M4 55 Q17 48 25 52 L42 46 L55 50 V86 H4Z', '#487e7d', null);
  path(c, 'M4 42 L15 46 L22 58 L35 64 L28 70 L4 73Z', '#305a60', null);
  path(c, 'M11 47 l2 -17 h5 l3 21Z', '#f5d9aa', null);
  path(c, 'M11 30 v-4 l4 -4 5 4 v4Z M13 37 h5 v3 h-5Z', '#a65f4d', null);
  path(c, 'M32 64 l9 -13 0 13Z M43 57 l5 7 h-5Z M30 66 h19 l-5 3 h-11Z', '#f4dfad', null);
  for (let i = 0; i < 7; i++)
    line(
      c,
      [
        [8 + (i % 3) * 7, 74 + i * 1.7],
        [28 + (i % 4) * 5, 73 + i * 1.7],
      ],
      '#b1c3a1',
      0.8,
    );
  text(c, 'M A R É E', 29, 17, 8.4, '#234f56');
  text(c, 'BY THE SEA', 29, 97, 8.6, '#944f43');
  text(c, 'NORTH COAST EXPRESS', 29, 104, 3.7, '#516554');
  path(c, `M${60 - curl * 2} 111 Q56 110 60 ${106 - curl} L60 111Z`, '#fff1c9', '#9c9478', 0.6);
  c.restore();
  c.save();
  c.translate(5, -122);
  path(c, 'M0 0 H57 V111 H0Z', '#d7bd8c', '#af9264', 1);
  path(c, 'M3 4 H54 V25 H3Z', '#844e44', null);
  text(c, 'DEPARTURES', 28.5, 17, 7.7, '#ffedbf');
  const sheet = 2.8 * Math.sin(a * 5 + 1.3);
  c.transform(1, 0, 0.012 * sheet, 1, 0, 0);
  for (const [i, name] of ['MARÉE', 'WESTPORT', 'LINDEN', 'NORTH QUAY', 'BELLWICK'].entries()) {
    const y = 37 + i * 12;
    text(c, name, 4, y, 4.3, '#3e5148', 'left');
    text(c, ['7.12', '8.04', '8.50', '9.17', '9.42'][i], 52, y, 4.9, '#7e5844', 'right');
    line(
      c,
      [
        [4, y + 3],
        [51, y + 3],
      ],
      '#a59b77',
      0.65,
    );
  }
  path(
    c,
    `M2 97 Q28 ${98 + sheet} 55 94 L52 ${103 + sheet} Q23 ${108 + sheet} 2 106Z`,
    '#ecdbb0',
    '#a39778',
    0.6,
  );
  text(c, 'SUNDAY SERVICE', 27, 102 + sheet * 0.5, 4.5, '#80594c');
  c.restore();
  for (const x of [-59, -8, 8, 59]) ellipse(c, x, -119, 1.2, 1.1, '#846c51');
  c.restore();
}

function valise(c, x, y, w, h, color) {
  c.save();
  c.translate(x, y);
  path(c, `M0 0 Q0 -3 3 -3 H${w - 3} Q${w} -3 ${w} 1 L${w + 1} ${h} H1Z`, color, '#3f4841', 1.4);
  path(c, `M${w * 0.34} -4 q0 -7 5 -7 h8 q4 0 4 7`, null, '#514c3e', 2);
  for (const u of [0.17, 0.8]) {
    line(
      c,
      [
        [u * w, -2],
        [u * w + 1, h],
      ],
      '#c3a06f',
      3.5,
    );
    ellipse(c, u * w + 0.5, 3, 2.2, 1.8, '#ddc38b', '#765e43', 0.7);
  }
  path(c, `M4 3 h${w - 8} M3 ${h - 3} h${w - 6}`, null, '#d5b07a77', 0.9);
  c.restore();
}

export function porter(c, a) {
  // He trundles across the platform and exits behind the wings before wrapping.
  const progress = (a / TAU + 0.27) % 1;
  c.save();
  c.translate(-190 + progress * 2000, 679);
  c.scale(0.77, 0.77);
  const gait = Math.sin(24 * a),
    rock = Math.sin(24 * a + 0.6);
  ellipse(c, -18, 0, 94, 4.5, '#30443833');
  for (const side of [-1, 1]) {
    const step = side * gait;
    path(
      c,
      `M-76 -45 l12 0 Q${-66 + step * 9} -26 ${-69 + step * 16} -7 l7 3 q1 5 -13 3 l-4 -3 Q${-76 + step * 8} -31 -76 -45Z`,
      side === 1 ? '#3c5351' : '#55685f',
      iron,
      1.2,
    );
  }
  c.save();
  c.translate(0, -Math.abs(gait) * 2);
  path(c, 'M-71 -88 Q-61 -94 -53 -82 L-57 -43 Q-69 -37 -84 -43 Q-81 -65 -71 -88Z', '#596f67', iron, 1.8);
  path(c, 'M-64 -85 l8 -4 5 5 -5 10Z', '#bb8060', iron, 1);
  ellipse(c, -57, -99, 9, 12, '#c59e78', iron, 1.1);
  path(c, 'M-66 -99 l-3 -9 q13 -8 22 -1 l2 3 -13 4Z', '#3d5655', iron, 1.2);
  path(c, 'M-65 -81 Q-59 -83 -56 -74 L-48 -61 L-32 -53 L-34 -48 Q-58 -54 -62 -63Z', '#738477', iron, 1);
  ellipse(c, -32, -51, 4, 3, '#d5ae81');
  c.restore();
  path(c, 'M-37 -54 L-28 -52 L-18 -16 H94 L95 -11 H-22Z', '#8c8b6a', iron, 2);
  for (const x of [-12, 80]) {
    ellipse(c, x, -8, 9, 9, '#334948', '#c3aa7c', 1.8);
    c.save();
    c.translate(x, -8);
    c.rotate(a * 48);
    for (let j = 0; j < 5; j++) {
      c.rotate(TAU / 5);
      line(
        c,
        [
          [0, 0],
          [0, 6.5],
        ],
        '#c1af87',
        1.3,
      );
    }
    c.restore();
  }
  c.translate(0, rock * 0.8);
  valise(c, -15, -37, 59, 18, '#9d6c51');
  valise(c, 42, -48, 47, 30, '#60776c');
  valise(c, -7, -56, 45, 15, '#b3875c');
  path(c, 'M38 -51 l9 -18 38 1 5 18Z', '#b8996b', '#676c54', 1.2);
  for (let j = 0; j < 4; j++)
    line(
      c,
      [
        [46, -65 + j * 4],
        [85, -64 + j * 4],
      ],
      '#7d805d',
      1,
    );
  ellipse(c, 13, -65, 19, 10, '#98695b', iron, 1.3);
  path(c, 'M-5 -65 q17 6 36 0', null, '#c09b77', 1.8);
  c.restore();
}

export function firebox(c, a) {
  c.save();
  c.translate(498, 580);
  path(c, 'M-15 1 Q-15 -12 -3 -14 H10 Q22 -11 20 2 L18 11 H-13Z', '#612f26', '#273f3c', 2);
  const flicker = 0.52 + 0.22 * Math.sin(31 * a) + 0.14 * Math.sin(47 * a + 0.7);
  glow(c, 2, 1, 52, '255,132,40', flicker * 0.7);
  path(c, 'M-23 15 Q0 18 30 13 L24 16 Q2 20 -19 17Z', '#d98a484d', null);
  for (let i = 0; i < 7; i++) {
    const x = -11 + i * 4.7,
      y = 1 - 4 * Math.sin(a * 22 + i * 1.9);
    path(c, `M${x - 3} 7 q-2 -6 3 ${y - 10} q-1 6 4 7 q2 6 0 10Z`, i % 2 ? '#df7742' : '#f7ad5c', null);
  }
  for (let x = -11; x < 20; x += 6)
    line(
      c,
      [
        [x, -9],
        [x + 1, 9],
      ],
      '#4a4b3e',
      2.2,
    );
  for (let i = 0; i < 17; i++) {
    const u = (i / 17 + (a / TAU) * (3 + (i % 3))) % 1;
    const x = 9 + 44 * u + Math.sin(u * 12 + i) * 7 * u,
      y = 5 - 37 * u + 4 * Math.sin(i + 9 * u);
    c.globalAlpha = Math.sin(Math.PI * u) * 0.9;
    line(
      c,
      [
        [x - 1, y + 1.8],
        [x + 1.3, y - 1.6],
      ],
      i % 3 ? '#ffd181' : '#f29958',
      1.4 + (i % 2) * 0.4,
    );
  }
  c.restore();
}

export function engineer(c, a) {
  // Seen only through the second cab window.
  c.save();
  c.translate(451, 511);
  c.beginPath();
  c.rect(-17, -59, 39, 59);
  c.clip();
  const lean = 3.2 * Math.sin(a * 3);
  c.translate(lean, 0.8 * Math.cos(a * 6));
  path(
    c,
    'M-12 2 Q-12 -14 -7 -21 L2 -24 Q10 -23 12 -15 L16 -13 L22 -16 L24 -12 L14 -7 L7 -9 L9 2Z',
    '#43594f',
    null,
  );
  path(c, 'M-5 -24 q-5 -6 -4 -14 q0 -9 8 -9 q9 0 10 9 l3 5 -4 1 -1 6 -5 1 -1 5Z', '#536051', null);
  path(c, 'M-11 -39 l-1 -7 q2 -5 11 -5 q8 0 10 4 l4 3 q-10 3 -24 5Z', '#3f5149', null);
  path(c, 'M-5 -22 l4 5 5 -7 -4 12Z', '#ba9164', null);
  path(c, 'M8 -33 q3 -.5 5 1 l-5 2Z', '#655f4c', null);
  c.restore();
}
