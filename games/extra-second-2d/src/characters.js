import { path, ellipse, line, glow, smooth, mix, TAU } from './draw.js';
const ink = '#2b4140',
  skin = '#d5ad7e';
export function lantern(c, x, y, lit = 1) {
  glow(c, x, y, 110, '255,190,76', 0.43 * lit);
  glow(c, x, y, 32, '255,203,99', 0.36 * lit);

  path(
    c,
    `M${x - 8} ${y - 15} Q${x - 12} ${y - 31} ${x} ${y - 30} Q${x + 12} ${y - 29} ${x + 8} ${y - 15}`,
    null,
    '#8b7958',
    2,
  );
  path(
    c,
    `M${x - 12} ${y - 13} L${x + 12} ${y - 13} L${x + 10} ${y + 17} L${x - 10} ${y + 17}Z`,
    '#e7b75e',
    ink,
    2,
  );
  path(c, `M${x - 7} ${y - 10} l3 -1 -3 23 -2 0Z M${x + 7} ${y - 8} l2 -2 -2 13 -1 0Z`, '#ffdf889c', null);
  ellipse(c, x, y + 2, 4.5, 10, '#ffe6a1');
  path(c, `M${x - 9} ${y + 11} l17 -19 m-16 1 15 19`, null, '#957650', 0.95);
  line(
    c,
    [
      [x - 13, y - 14],
      [x + 13, y - 14],
    ],
    '#45554a',
    4,
  );
  line(
    c,
    [
      [x - 10, y + 17],
      [x + 10, y + 17],
    ],
    '#45554a',
    4,
  );
  line(
    c,
    [
      [x, y - 12],
      [x, y + 16],
    ],
    '#8c7854',
    1.5,
  );
}
export function sweeper(c, s) {
  const { t, sx: x, sy: y, walk, face } = s;
  ellipse(c, x + 1, 706, 40 - 12 * s.jump, 7 - 3 * s.jump, '#1c40382e');
  c.save();
  c.translate(x + face * s.wrist, 705);
  c.scale(1, 0.15);
  glow(c, 0, 0, 60, '255,196,104', 0.37 * (1 - smooth(40, 110, 704 - y)));
  c.restore();
  glow(c, x + 15, y - 88, 90, '255,209,119', s.orb && t > 17.6 && t < 30.6 ? 0.15 : 0);
  c.save();
  c.translate(x, y);
  c.scale(face, 1);
  // Soft folded trousers and the unhurried heel-to-toe gait.
  const step = walk * 15 + Math.sin(s.climb * Math.PI * 8) * 8;
  // Back heel kicks up first; the front boot then reaches for the step.
  for (const side of [-1, 1]) {
    const back = side < 0;
    const heel = (back ? 28 : 16) * s.jump + (back ? 9 : 5) * s.skip;
    const ankleX = (back ? -19 : 10) - side * step + (back ? -28 : 1) * s.jump;
    const kneeX = (back ? -20 : 6) - side * step * 0.45 + (back ? -14 : 19) * s.jump + 10 * s.crouch;
    const hip = back ? -17 : 6,
      kneeY = -30 - heel * 0.32 + 8 * s.crouch,
      ankleY = -6 - heel;
    path(
      c,
      `M${hip - 8} -59 L${hip + 11} -58 Q${kneeX + 10} ${kneeY} ${ankleX + 8} ${ankleY} L${ankleX - 8} ${ankleY + 1} Q${kneeX - 7} ${kneeY + 4} ${hip - 8} -59Z`,
      back ? '#3e534e' : '#344c48',
      ink,
      1.8,
    );
    line(
      c,
      [
        [kneeX - 3, kneeY],
        [kneeX + 4, kneeY - 1],
      ],
      '#768471',
      1.05,
    );
    c.save();
    c.translate(ankleX, ankleY);
    c.rotate((back ? 0.81 : -0.28) * s.jump);
    path(c, 'M-9 -5 Q-2 -3 5 -5 Q8 -1 14 0 Q19 1 18 5 Q12 8 -12 6 L-12 1Z', '#354340', ink, 1.6);
    path(c, 'M-11 5 Q1 8 17 4 M3 -2 l5 -1 m-2 3 l5 -1', null, '#a18f70', 1.05);
    c.restore();
  }
  c.save();
  c.translate(0, -55 + 12 * s.crouch);
  c.rotate(s.lean);
  c.translate(0, 55);
  // Each tail has a separate lining and a delayed fold.
  const hem = s.hem,
    tailX = -42 - 17 * hem,
    tailY = -51 - 11 * hem;
  path(
    c,
    `M-28 -106 Q-33 -76 ${tailX - 7} ${tailY - 4} L${tailX} ${tailY + 4} Q-26 -51 -13 -65 L-12 -89Z`,
    '#ad986c',
    ink,
    1.8,
  );
  path(c, `M-29 -82 Q-35 -64 ${tailX - 5} ${tailY - 3} l6 4 Q-31 -57 -24 -67Z`, '#a96750', null);
  path(c, `M-32 -91 Q-32 -66 ${tailX + 3} ${tailY - 1}`, null, '#dbc08a', 1.3);
  // Ragged ochre work coat, backlit seams.
  path(
    c,
    'M-19 -139 Q-38 -123 -35 -93 L-42 -56 Q-13 -45 22 -56 L19 -114 Q17 -132 4 -138Z',
    '#8f8c65',
    ink,
    2.3,
  );
  path(c, 'M-20 -136 Q-34 -111 -27 -61 L-38 -57 Q-29 -95 -33 -116Z', '#afaa78', null);
  path(c, 'M0 -131 Q11 -103 7 -57 L22 -57 L20 -115Z', '#686f52', null);
  path(c, 'M-12 -131 L-8 -59', null, '#c3b47e', 1.5);
  for (let yy of [-111, -92, -73]) ellipse(c, -5, yy, 1.8, 2, '#495846');
  path(c, 'M-26 -88 L-11 -87 L-12 -72 Q-22 -67 -27 -74Z', '#9a9770', '#606c52', 1);
  const wind = Math.sin((t / 45) * TAU * 21 + 0.4);
  const scarfX = -49 - 17 * hem,
    scarfY = -117 - 18 * hem + 4 * wind;
  path(
    c,
    `M-14 -138 C-34 -139 -35 ${scarfY - 9} ${scarfX - 7} ${scarfY - 5} L${scarfX - 4} ${scarfY} L${scarfX - 9} ${scarfY + 3} Q-36 ${scarfY + 12} -19 -126Z`,
    '#b55f48',
    ink,
    1.4,
  );
  path(c, `M-19 -133 Q-35 ${scarfY + 3} ${scarfX - 4} ${scarfY - 1}`, null, '#e1a374', 1.5);
  for (let j = 0; j < 5; j++)
    line(
      c,
      [
        [scarfX - j, scarfY - 4 + j * 1.6],
        [scarfX - 5 - j, scarfY - 3 + j * 1.6 + wind],
      ],
      '#d69e73',
      1,
    );
  c.save();
  c.translate(-5, -135);
  c.rotate(0.13 * smooth(15.7, 16.5, t) * (1 - smooth(17.4, 18, t)) - 0.25 * s.catchString);
  c.translate(5, 135);
  // Scarf, bent neck and wise, large profile.
  path(c, 'M-15 -142 L8 -143 L12 -131 Q-5 -125 -20 -134Z', '#ad7657', ink, 1.5);
  path(c, 'M-14 -132 L-20 -110 L-10 -114 L-5 -133Z', '#ad7657', ink, 1);
  path(
    c,
    'M-15 -171 Q-1 -185 12 -173 L14 -160 L23 -153 Q25 -147 14 -146 L12 -132 Q2 -127 -10 -139 L-16 -150Z',
    skin,
    ink,
    1.8,
  );
  ellipse(c, -13, -154, 6, 8, '#c29970');
  line(
    c,
    [
      [-14, -156],
      [-11, -152],
    ],
    '#957957',
    1,
  );
  path(
    c,
    'M-12 -168 Q-9 -156 -9 -148 Q0 -144 12 -149 L15 -140 Q-1 -124 -11 -141 L-16 -154Z',
    '#e0d4b2',
    null,
  );
  path(c, 'M7 -150 Q17 -153 19 -147 L9 -144Z', '#ede0b9', null);
  line(
    c,
    [
      [8, -160],
      [15, -159],
    ],
    '#57594b',
    1.3,
  );
  const blink = 1 - 0.9 * Math.max(0, Math.cos((t / 45) * TAU * 9 + 0.6)) ** 100;
  ellipse(c, 11 + s.catchString, -155 - s.catchString, 1.6, 1.65 * blink, '#2c3a37');
  path(
    c,
    `M3 -142 Q8 ${-138 + 3 * s.catchString} 13 ${-142 - 2 * s.catchString} Q9 ${-137 + 4 * s.catchString} 3 -142Z`,
    '#925e4d',
    null,
  );
  ellipse(c, 1, -149, 3.5, 1.8, '#d99d78');
  path(c, 'M-24 -171 Q-21 -191 -4 -190 Q15 -191 17 -173Z', '#547066', ink, 2);
  path(c, 'M-28 -173 Q-2 -180 25 -170 Q18 -165 -3 -168 L-24 -166Z', '#48645b', ink, 2);
  line(
    c,
    [
      [-19, -179],
      [10, -181],
    ],
    '#85917a',
    1.4,
  );
  // A knitted cap, creases, spectacles and a stitched canvas coat.
  path(c, 'M-22 -179 Q-16 -194 1 -192 Q13 -191 17 -181 Q-4 -185 -22 -177Z', '#70857a', ink, 1);
  for (let k = 0; k < 8; k++)
    line(
      c,
      [
        [-20 + k * 4, -178],
        [-16 + k * 4, -187 - Math.sin((k / 7) * Math.PI) * 3],
      ],
      '#a0a18a',
      0.8,
    );
  ellipse(c, 12, -155, 6, 5, null, '#806e53', 1);
  line(
    c,
    [
      [-10, -157],
      [6, -155],
    ],
    '#827252',
    1,
  );
  path(c, 'M-8 -146 q0 7 5 10 m-1 -9 q3 5 5 7 m0 -8 q3 4 5 4', null, '#a49a80', 0.85);
  c.restore();
  path(c, 'M-18 -130 Q-13 -126 2 -128 L7 -121 Q-10 -117 -23 -126Z', '#aa6248', ink, 1.2);
  for (let k = 0; k < 4; k++)
    line(
      c,
      [
        [-18 + k * 5, -129],
        [-15 + k * 5, -123],
      ],
      '#ddb081',
      1.4,
    );
  path(c, 'M-1 -117 L13 -116 L12 -104 Q4 -100 -2 -106Z', '#798466', '#596853', 1);
  // A darn at the elbow, the grain of wool and saddler's running stitches.
  path(c, 'M-30 -90 l8 -2 2 9 -9 2Z', '#8a805e', '#65705a', 0.8);
  for (let j = 0; j < 5; j++) path(c, `M${-29 + j * 1.7} -89 l2 6`, null, '#c6ae79', 0.55);
  for (let j = 0; j < 11; j++) {
    const y = -118 + j * 5.1;
    line(
      c,
      [
        [-14 + (j % 3) * 0.4, y],
        [-13 + (j % 3) * 0.4, y + 2],
      ],
      '#e0c291',
      0.7,
    );
  }
  path(c, 'M-26 -82 q-1 9 1 13 M-28 -80 l1 6 M8 -91 l7 -3 M9 -88 l5 -2 M-5 -63 l5 1', null, '#777a5e', 0.8);
  path(c, 'M-30 -60 Q-8 -53 17 -60 M-29 -88 Q-23 -93 -20 -110 M8 -66 l6 -12', null, '#586c58', 1.2);
  // The coat tilts from the waist, while the hands use world-space targets.
  path(c, 'M-27 -125 Q-42 -111 -44 -90 L-31 -79 L-22 -92 L-23 -115Z', '#929273', ink, 2);
  ellipse(c, s.wrist, -83, 6, 8, skin, ink, 1);
  c.save();
  c.translate(s.wrist, -83);
  c.rotate(s.swing);
  lantern(c, 0, 30, 0.94 + 0.06 * Math.cos((t / 45) * TAU * 31));
  c.restore();
  // Chain and enamel service pin, picked out by the lantern on close-ups.
  path(c, 'M4 -101 Q-2 -88 -13 -94', null, '#d5b778', 1.1);
  ellipse(c, -19, -112, 3.7, 4.3, '#526e66', '#d5b778', 0.9);
  path(c, 'M-19 -115 v5 m-2 -2 h4', null, '#ddc699', 0.65);
  c.restore();
  let hx = (s.shx - x) / face,
    hy = s.shy - y;
  let tipX = (s.tipX - x) / face,
    tipY = s.tipY - y,
    handX = hx,
    handY = hy;
  // During the repair the broom rests in the elbow; the fingertips guide the second.
  if (t > 28.9 && t < 31.75) {
    const collect = smooth(28.9, 29.26, t) * (1 - s.release);
    hx = mix(hx, mix(5, 40, s.insert), collect);
    hy = mix(hy, mix(-108, 454 - y, s.insert), collect);
  }
  const elbowX = 23 + 17 * s.catchString + 6 * s.handoff,
    elbowY = -95 - 21 * s.catchString + 12 * s.crouch;
  path(
    c,
    `M8 -126 Q21 -132 24 -117 L${elbowX + 3} ${elbowY - 6} L${hx - 4} ${hy - 7} L${hx + 1} ${hy + 3} Q${elbowX} ${elbowY + 8} ${elbowX - 6} ${elbowY + 5} Q13 -99 8 -108Z`,
    '#9e9973',
    ink,
    2,
  );
  path(c, `M${hx - 9} ${hy - 6} l7 -3 4 10 -7 3Z`, '#797f62', ink, 1);
  ellipse(c, hx, hy, 7, 5, skin, ink, 1.2);
  const dx = tipX - handX,
    dy = tipY - handY;
  line(
    c,
    [
      [handX - dx * 0.29, handY - dy * 0.29],
      [tipX, tipY],
    ],
    '#3b4b3e',
    5,
  );
  line(
    c,
    [
      [handX - dx * 0.29 - 1, handY - dy * 0.29],
      [tipX - 1, tipY],
    ],
    '#c8a777',
    2.4,
  );
  c.save();
  c.translate(tipX, tipY);
  c.rotate(Math.atan2(dy, dx) - Math.PI / 2);
  const flex = s.brushFlex * 10;
  path(
    c,
    `M-5 -14 L5 -14 Q7 -2 ${17 + flex} 9 Q${flex + 2} 16 ${-17 + flex} 10 Q-6 -1 -5 -14Z`,
    '#c5a572',
    '#6b624d',
    1.5,
  );
  for (let i = -16; i <= 16; i += 2.2) {
    const end = 10 + Math.cos(i * 1.5) * 1.8;
    path(
      c,
      `M${i * 0.22} -10 Q${i * 0.52} 2 ${i + flex} ${end}`,
      null,
      i % 4 < 2 ? '#8e7952' : '#e0c48b',
      0.85,
    );
  }
  line(
    c,
    [
      [-7, -5],
      [7, -5],
    ],
    '#92724e',
    3,
  );
  c.restore();
  // Fingers close over both the shaft and the ribbon on the reach.
  path(
    c,
    `M${hx - 2} ${hy - 4} q2 -3 4 -2 l3 2 q2 2 0 3 l-4 -2 q2 2 4 3 q1 2 -2 2 l-6 -3Z`,
    skin,
    '#8c765e',
    0.8,
  );
  c.restore();
}
export function child(c, s) {
  const t = s.t,
    blink = 1 - 0.9 * Math.max(0, Math.cos(s.phase * 4 + 0.5)) ** 90,
    smile = s.hug,
    bob = s.bob;
  c.save();
  c.translate(1209, 704 + bob);
  ellipse(c, 0, 3, 31, 6, '#28453d2e');
  path(c, 'M-15 -30 L-4 -28 L-6 -4 L-20 -4Z', '#c39c71', ink, 1.5);
  path(c, 'M5 -29 L16 -28 L20 -4 L7 -4Z', '#c39c71', ink, 1.5);
  path(c, 'M-20 -9 Q-10 -9 -4 -3 L-5 2 L-25 2 L-26 -2Z', '#624f43', ink, 1.5);
  path(c, 'M7 -8 L20 -8 Q30 -2 26 2 L6 2Z', '#624f43', ink, 1.5);
  path(c, 'M-19 -83 Q0 -91 18 -82 L24 -29 Q3 -22 -25 -30Z', '#cc9756', ink, 2);
  path(c, 'M-19 -75 L-25 -30 L-16 -29 L-9 -77Z', '#e0af65', null);
  path(c, 'M1 -77 L4 -29', null, '#e8ba75', 1.5);
  for (let y of [-66, -50, -36]) ellipse(c, 7, y, 1.6, 1.6, '#785b43');
  path(c, 'M-12 -86 L-12 -96 L11 -97 L12 -85Z', skin, ink, 1);
  // Hand waits visibly open until the string is returned.
  const armY = -79 - smile * 20;
  path(c, `M-17 -80 Q-29 -82 -28 -66 L-23 -57 L-15 ${armY}Z`, '#d6a15b', ink, 1.5);
  ellipse(c, -17, armY, 5, 5, '#e5bb88', ink, 1);
  if (t >= 6 && t < 32) {
    line(
      c,
      [
        [-21, armY],
        [-25, armY - 6],
      ],
      '#e7c393',
      2,
    );
    line(
      c,
      [
        [-18, armY - 2],
        [-18, armY - 8],
      ],
      '#e7c393',
      2,
    );
  }
  path(
    c,
    `M16 -80 Q26 -69 ${14 - smile * 20} ${-51 - smile * 20} L${7 - smile * 17} ${-56 - smile * 20} Q14 -66 10 -76Z`,
    '#bd8950',
    ink,
    1.5,
  );
  ellipse(c, 10 - smile * 20, -55 - smile * 20, 5, 5, '#e2b987', ink, 1);
  path(
    c,
    'M-23 -115 Q-24 -139 -5 -145 Q16 -145 24 -125 L20 -101 Q8 -85 -10 -94 Q-25 -99 -23 -115Z',
    '#e4bc8b',
    ink,
    1.8,
  );
  path(
    c,
    'M-25 -113 Q-34 -140 -11 -151 Q15 -156 26 -135 L27 -119 L18 -116 L14 -133 Q6 -119 -4 -126 Q-12 -112 -22 -115Z',
    '#634b3e',
    ink,
    1.5,
  );
  path(c, 'M-24 -135 Q-10 -153 11 -140', null, '#9f7751', 2);
  ellipse(c, -23, -111, 5, 6, '#d9ac7c', null);
  if (smile < 0.6) {
    const gaze = Math.cos(s.phase) * 1.2;
    ellipse(c, 5 + gaze, -114, 2, 2.6 * blink, '#3c4036');
    ellipse(c, -10 + gaze, -114, 2, 2.6 * blink, '#3c4036');
    path(c, 'M-14 -122 q4 -2 7 -1 M2 -122 q4 -2 8 0', null, '#976f51', 1);
  } else {
    path(c, 'M-14 -111 q4 -5 8 -1 M1 -112 q4 -4 8 0', null, ink, 1.6);
  }
  ellipse(c, 12, -105, 4, 2, '#cf8f70');
  if (t >= 6 && t < 32) {
    ellipse(c, 2, -100, 2.8, 3.4, '#996955', null);
  } else {
    path(c, `M-4 -100 Q2 ${-97 + smile * 7} 9 -102`, null, '#8f654e', 1.3);
  }
  line(
    c,
    [
      [2, -108],
      [0, -104],
      [4, -104],
    ],
    '#b18763',
    0.8,
  );
  path(c, 'M-17 -91 Q0 -86 18 -93 L20 -84 Q0 -77 -19 -83Z', '#b35f49', ink, 1);
  const ribbon = 4 * Math.sin(s.phase * 6 + 0.25);
  path(c, `M12 -85 Q15 -72 ${22 + ribbon} -61 L${13 + ribbon} -64 L6 -82Z`, '#c37250', ink, 1);
  for (let i = 0; i < 4; i++) path(c, `M${12 + i} ${-78 + i * 3} l5 -2`, null, '#edb67c', 1);
  path(c, 'M-19 -57 l10 1 -1 10 q-7 4 -11 -2Z', '#cb9152', '#9d784d', 0.9);
  path(c, 'M-18 -54 l6 1 M-16 -42 l4 1', null, '#e4b875', 0.9);
  for (let j = 0; j < 6; j++) path(c, `M${-16 + j * 5} -31 l2 .4`, null, '#9d774e', 0.65);
  // Knitted beret with an off-centre stem and satin ribbon.
  path(
    c,
    'M-29 -131 Q-33 -141 -23 -150 Q-17 -158 2 -159 Q23 -161 28 -146 Q31 -136 19 -132 Q2 -143 -25 -126Z',
    '#984d42',
    ink,
    1.6,
  );
  path(c, 'M-25 -137 Q-12 -155 12 -152 M-22 -134 Q-3 -145 16 -139', null, '#c67b61', 1.3);
  path(c, 'M-1 -157 q-5 -8 3 -10 l3 2 -2 7Z', '#6f5141', ink, 1);
  path(c, 'M-19 -75 Q-15 -54 -20 -35 M-13 -33 Q4 -28 18 -34', null, '#e8b875', 1.4);
  c.restore();
}
export function balloon(c, s) {
  const { bx: x, by: y, ex, ey } = s;
  const breeze = 7 * Math.sin(s.phase * 4) + s.catchString * 5 * Math.sin(s.t * 4);
  path(
    c,
    `M${x} ${y + 31} C${x + 12 + breeze} ${y + 71} ${ex - 18} ${ey - 38} ${ex} ${ey}`,
    null,
    '#f1d8ad',
    1.8,
  );
  path(
    c,
    `M${x} ${y + 31} C${x + 12 + breeze} ${y + 71} ${ex - 18} ${ey - 38} ${ex} ${ey}`,
    null,
    '#775a4b88',
    0.6,
  );
  path(c, `M${x + 1} ${y + 35} q7 -8 9 -5 q3 5 -8 6 q8 3 9 9 q4 6 7 5`, null, '#bd7258', 1.25);
  glow(c, x - 4, y - 6, 57, '255,134,89', 0.12);
  let g = c.createRadialGradient(x - 10, y - 15, 1, x + 4, y + 4, 41);
  g.addColorStop(0, '#f27d60');
  g.addColorStop(0.45, '#d4493c');
  g.addColorStop(1, '#9c3234');
  path(
    c,
    `M${x} ${y + 33} C${x - 9} ${y + 27} ${x - 27} ${y + 6} ${x - 25} ${y - 11} C${x - 23} ${y - 42} ${x + 22} ${y - 41} ${x + 26} ${y - 13} C${x + 30} ${y + 8} ${x + 10} ${y + 29} ${x} ${y + 33}Z`,
    g,
    '#873d34',
    1.5,
  );
  path(c, `M${x - 15} ${y - 14} Q${x - 15} ${y - 27} ${x - 4} ${y - 27}`, null, '#ffb18a99', 4);
  path(c, `M${x} ${y + 30} L${x - 4} ${y + 38} Q${x} ${y + 40} ${x + 5} ${y + 37}Z`, '#bc493b', '#8d4036', 1);
}
export function cuddle(c, s) {
  if (s.hug < 0.02) return;
  const u = s.hug;
  c.save();
  c.translate(1209, 704 + s.bob);
  c.globalAlpha = u;
  path(
    c,
    'M17 -77 Q27 -70 21 -62 Q16 -54 3 -57 L-15 -65 L-12 -72 L5 -68 Q11 -68 12 -76Z',
    '#c8904e',
    ink,
    1.4,
  );
  path(c, 'M-10 -71 q-4 -4 -10 -4 q-5 0 -7 2 q1 6 8 7 l7 2Z', '#e7ba85', ink, 1.1);
  c.restore();
}
export function pigeon(c, x, y, scale, phase) {
  c.save();
  c.translate(x, y);
  c.scale(scale, scale);
  c.rotate(-0.12 + 0.09 * Math.sin(phase));
  const up = Math.sin(phase),
    high = 14 + 18 * up;
  path(
    c,
    `M-5 0 Q-16 ${-15 - high * 0.4} -36 ${-high * 0.65} Q-28 ${-3 - high * 0.6} -26 -3 Q-16 5 -4 7Z`,
    '#71898b',
    '#3e5c63',
    1,
  );
  path(
    c,
    'M-12 2 Q-3 0 2 -5 Q5 -13 11 -11 Q17 -10 15 -4 L21 -2 L14 0 Q7 13 -6 12 L-29 13 L-36 10Z',
    '#849797',
    '#405d62',
    1.1,
  );
  path(c, 'M0 4 Q8 4 13 -5 Q14 2 8 7 Q4 9 0 8Z', '#60817e', null);
  path(
    c,
    `M-7 6 Q-12 0 -14 ${-high * 0.44} Q-17 ${-high * 0.82} -26 ${-high - 8} Q-15 ${-high - 5} -11 ${-high + 1} L-12 ${-high - 4} Q-4 ${-high + 1} -1 ${-high + 9} Q6 -4 2 4Z`,
    '#b9bdb0',
    '#546e71',
    1.1,
  );
  path(
    c,
    `M-15 ${-high * 0.61} Q-8 ${-high * 0.43} -4 -4 M-17 ${-high * 0.79} Q-13 ${-high * 0.56} -11 ${-high * 0.46}`,
    null,
    '#768a8a',
    1.4,
  );
  line(
    c,
    [
      [-31, 10],
      [-14, 7],
    ],
    '#c2c5b5',
    1,
  );
  ellipse(c, 11, -7, 1.4, 1.4, '#2c4b50');
  path(c, 'M15 -5 L21 -3 L15 -2Z', '#cba77c', null);
  c.restore();
}
