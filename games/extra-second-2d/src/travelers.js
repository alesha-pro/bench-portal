// Three costumes share a heel-to-toe gait. The props give each silhouette a
// different gesture to hold when the station stops.
import { ellipse, line, path } from './draw.js';
const ink = '#303f40';
export function passenger(c, x, y, scale, phase, type = 0) {
  const stride = Math.sin(phase),
    step = stride * 17;
  c.save();
  c.translate(x, y);
  c.scale(scale, scale);
  ellipse(c, -4, 1, 36, 5, '#28423c33');
  if (type === 1 || type === 3) c.scale(-1, 1);
  const colors = [
    ['#556e68', '#405956', '#869384'],
    ['#ad7961', '#79584d', '#cd9876'],
    ['#596775', '#414e5a', '#869095'],
    ['#956b55', '#654d46', '#c3936e'],
  ];
  const [coat, shadow, light] = colors[type];
  for (const [offset, dir] of [
    [-8, -1],
    [8, 1],
  ]) {
    const foot = offset + dir * step,
      lift = Math.max(0, dir * Math.cos(phase)) * 5;
    path(
      c,
      `M${offset - 7} -64 L${offset + 8} -62 Q${offset + dir * step * 0.45 + 6} -36 ${foot + 4} ${-8 - lift} L${foot - 7} ${-7 - lift} Q${offset + dir * step * 0.35 - 5} -28 ${offset - 7} -64Z`,
      dir > 0 ? '#4f544f' : '#394948',
      ink,
      1.2,
    );
    path(c, `M${foot - 8} ${-10 - lift} q7 4 13 0 q1 5 11 6 q4 5 -9 5 l-18 -1Z`, '#33403e', ink, 1);
  }
  c.translate(0, -2 * Math.abs(stride));
  path(c, 'M-7 -147 Q1 -145 10 -148 L10 -132 L4 -118 L-11 -133Z', '#b18d72', ink, 1.2);
  path(
    c,
    'M-13 -136 Q-26 -133 -26 -113 Q-22 -83 -32 -59 Q-19 -51 5 -53 Q18 -51 26 -56 L19 -119 Q16 -135 6 -136 L0 -126Z',
    coat,
    ink,
    1.9,
  );
  path(
    c,
    'M-19 -129 Q-20 -108 -15 -99 Q-14 -74 -21 -58 L-30 -59 Q-23 -85 -26 -110 Q-26 -122 -19 -129Z',
    light,
    null,
  );
  path(c, 'M12 -128 Q15 -94 8 -54 L26 -56 L20 -117Z', shadow, null);
  path(c, 'M-8 -136 L0 -127 L4 -133 L8 -108 L5 -101 L-5 -122Z', '#d0b99b', null);
  path(c, 'M-11 -137 L-17 -123 L-8 -121 L-13 -114 L3 -96 L-4 -124Z', coat, ink, 1);
  path(c, 'M10 -134 L16 -123 L11 -118 L15 -115 L5 -98Z', light, ink, 1);
  for (let j = 0; j < 4; j++) ellipse(c, 5, -98 + j * 10, 1.6, 1.8, '#b6a17d', '#475550', 0.6);
  path(c, 'M-22 -83 l12 2 -2 4 -12 -1Z', shadow, ink, 0.8);
  path(c, 'M-30 -61 Q-9 -55 21 -60', null, light, 0.9);
  // Modelled cheek, ear and a distinct chin in profile.
  path(
    c,
    'M-15 -169 Q-13 -183 3 -180 Q16 -179 15 -164 L21 -155 Q22 -152 16 -152 L14 -144 Q12 -139 3 -140 Q-9 -141 -12 -154Z',
    '#d4b292',
    ink,
    1.5,
  );
  path(c, 'M-12 -167 Q-8 -170 -7 -160 Q-6 -150 2 -145 Q6 -142 12 -144 Q3 -137 -7 -145Z', '#ba957b', null);
  ellipse(c, -9, -156, 4, 6, '#cca486');
  path(c, 'M-11 -157 q3 -3 4 2 M7 -163 q4 -2 7 0 M9 -147 q4 1 6 -1', null, '#796d5b', 0.9);
  ellipse(c, 11, -159, 1.4, 1.5, '#344140');
  if (type === 3 || type === 1) {
    path(
      c,
      'M-18 -152 Q-25 -174 -11 -183 Q8 -194 21 -173 Q9 -169 -2 -174 Q-3 -157 -13 -150 Q-12 -144 -18 -142Z',
      '#57463e',
      ink,
      1,
    );
    ellipse(c, -17, -151, 8, 9, '#624d42', ink, 1);
    path(
      c,
      'M-22 -175 Q-20 -188 -6 -190 Q7 -193 13 -183 L21 -180 Q4 -174 -21 -172Z',
      type === 3 ? '#585d53' : '#81645b',
      ink,
      1.5,
    );
    path(c, 'M-21 -177 Q-4 -179 12 -183', null, '#cfaa86', 2);
    for (let j = 0; j < 4; j++)
      ellipse(c, -17 + j * 1.7, -177 - (j % 2) * 3, 2.7, 2.5, j % 2 ? '#bf8a74' : '#dcaf8a');
    path(c, 'M-13 -134 Q-3 -130 9 -137 L13 -129 L-5 -117 L-17 -127Z', '#b69a72', ink, 1);
    path(c, `M-7 -124 Q-13 -106 ${-22 - stride * 6} -103 L-18 -116 L-14 -126Z`, '#b79971', ink, 0.8);
    path(c, 'M-19 -60 Q-4 -65 16 -59 L27 -43 Q6 -36 -25 -42Z', shadow, ink, 1.4);
  } else {
    path(c, 'M-16 -152 Q-21 -165 -17 -178 Q-4 -185 9 -177 L5 -169 L-4 -169 L-7 -154Z', '#514f49', null);
    path(
      c,
      'M-20 -176 Q-17 -180 -15 -190 Q-13 -195 -3 -192 Q8 -195 13 -188 L17 -178 Q18 -176 25 -175 Q27 -171 13 -171 Q-11 -171 -23 -172 Q-29 -174 -20 -176Z',
      type === 2 ? '#4e5660' : '#4a635e',
      ink,
      1.6,
    );
    path(c, 'M-18 -180 Q0 -177 16 -181 L18 -176 Q0 -172 -19 -176Z', '#36494a', null);
    path(c, 'M-16 -188 Q-7 -192 -2 -188 L6 -191', null, light, 1.1);
    if (type === 2) {
      ellipse(c, 11, -159, 4, 3.7, null, '#796c55', 0.9);
      line(
        c,
        [
          [-7, -160],
          [7, -160],
        ],
        '#796c55',
        0.9,
      );
      path(c, 'M8 -151 Q13 -155 16 -150 L19 -148 Q10 -148 8 -151Z', '#645c50', null);
    }
  }
  if (type === 2) {
    // The newspaper is folded into two inked columns.
    c.save();
    c.translate(31, -104 + stride * 3);
    c.rotate(-0.17);
    path(c, 'M-15 -14 L2 -19 L21 -16 L19 14 L2 10 L-16 15Z', '#e5d8b6', '#677370', 1.3);
    line(
      c,
      [
        [2, -17],
        [2, 9],
      ],
      '#ada58b',
      1,
    );
    path(c, 'M-12 -10 l12 -4 v3 l-12 4Z M5 -13 l12 2 v3 l-12 -2Z', '#6d7470', null);
    for (let j = 0; j < 5; j++) {
      line(
        c,
        [
          [-12, -3 + j * 3],
          [-2, -6 + j * 3],
        ],
        '#959682',
        0.8,
      );
      line(
        c,
        [
          [5, -6 + j * 3],
          [16, -4 + j * 3],
        ],
        '#959682',
        0.8,
      );
    }
    c.restore();
    path(
      c,
      `M-15 -122 Q-6 -125 -4 -113 L-1 -96 L17 ${-102 + stride * 3} L20 ${-95 + stride * 3} Q-2 -80 -10 -87 Q-20 -95 -20 -114Z`,
      coat,
      ink,
      1.5,
    );
    ellipse(c, 19, -99 + stride * 3, 4.3, 5, '#ceab88', ink, 0.8);
  } else {
    const swing = stride * 9;
    c.save();
    c.translate(swing, -1);
    path(c, 'M-3 -76 Q-4 -87 3 -88 Q11 -89 12 -76', null, '#584e42', 2.6);
    path(c, 'M-17 -77 Q-17 -79 -13 -79 L22 -79 Q25 -78 25 -75 L27 -48 L-18 -48Z', '#956f50', ink, 1.7);
    for (let a of [-10, 15]) {
      line(
        c,
        [
          [a, -77],
          [a, -50],
        ],
        '#c4a174',
        3,
      );
      ellipse(c, a, -69, 2, 2, '#dec49c', ink, 0.5);
    }
    c.restore();
    path(
      c,
      `M-17 -123 Q-5 -129 -3 -112 L${swing + 6} -86 L${swing - 3} -82 Q-15 -98 -20 -112Z`,
      coat,
      ink,
      1.5,
    );
    path(c, `M${swing - 5} -88 l10 -4 2 8 -8 3Z`, light, ink, 0.9);
    ellipse(c, swing + 3, -82, 4.4, 5.3, '#d3ad88', ink, 0.8);
  }
  c.restore();
}
