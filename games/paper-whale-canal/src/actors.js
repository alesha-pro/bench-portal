import { TAU, rng, clamp, mix, ease, layer, shape, line, ellipse, wash, halo, star } from './ink.js';
import { rings, lightTrail } from './water.js';
import { lantern } from './town.js';

function hull(g, moored = false) {
  shape(
    g,
    'M-105 -21Q-95 -14 -67 -12Q-12 -11 57 -16Q87 -19 108 -30Q99 -12 77 -4Q37 7 -42 6Q-83 5 -96 -6Z',
    moored ? '#344448' : '#534740',
    '#192f36',
    2
  );
  shape(g, 'M-104 -21Q-79 -9 -17 -11Q62 -12 108 -30Q74 -9 5 -5Q-74 1 -104 -21Z', '#263a3e', '#89765c', 1.45);
  shape(g, 'M-88 -6Q-32 11 71 -8M-75 0Q-16 10 50 0', null, '#9c805e', 1.05);
  shape(g, 'M-104 -22Q-74 -8 -13 -12Q65 -15 108 -31', null, moored ? '#c4ccbb' : '#e0c499', 1.65);
  for (let i = 0; i < 22; i++) {
    const x = -79 + i * 7,
      y = 3 - ((x + 19) / 93) ** 2 * 10;
    line(g, x, y - 3, x + 3.1, y - 3.35, '#af8f69', 0.57);
  }
  for (const x of [-62, -29, 3, 66])
    line(g, x, -11 - (x + 20) ** 2 * 0.0006, x + 10, -7 - (x + 20) ** 2 * 0.00064, '#958064', 2.1);
}
export function dock(g) {
  const x = 376,
    y = 463;
  g.save();
  g.translate(x, y);
  const deck = 'M-57 -7L24 -24L54 -17L-28 3Z';
  shape(g, deck, '#9b957d', '#334748', 1.6);
  shape(g, 'M-28 3L54 -17V-10L-28 11L-58 0V-7Z', '#4d5350', '#293c40', 1.2);
  for (let i = 0; i < 12; i++) {
    const u = i / 12;
    line(g, -56 + 80 * u, -7 - 17 * u, -28 + 82 * u, 3 - 20 * u, '#535b55', 0.86);
  }
  shape(g, 'M-55 -8L23 -25L35 -22L-46 -5Z', '#c9cebc');
  for (const [xx, yy] of [
    [-29, 4],
    [45, -14],
    [-55, -4]
  ]) {
    shape(g, `M${xx - 2} ${yy - 7}q2 -2 5 -1l-1 27 -3 1Z`, '#414b48', '#243b44', 1);
    ellipse(g, xx + 0.4, yy - 7, 3, 1.5, '#b4bead');
    line(g, xx + 1, yy + 1, xx + 0.3, yy + 14, '#8e8b71', 0.65);
  }
  g.restore();
}
export function child(g, t) {
  const gift = ease(5.4, 8.8, t) * (1 - ease(10, 13, t));
  g.save();
  g.translate(389, 447);
  g.scale(0.97, 0.97);
  shape(g, 'M-6 -4L-4 -14L4 -12L6 -4L4 1L1 0L1 -7L-1 0L-6 1Z', '#283d42');
  shape(g, 'M-6 -19Q-5 -25 0 -24Q5 -24 7 -17L9 -9Q3 -6 -8 -8Z', '#a3654e', '#363c38', 1);
  shape(g, 'M-4 -18Q-1 -21 4 -20L5 -18Q1 -15 -5 -16Z', '#dfb678');
  ellipse(g, 0, -25, 5, 5.2, '#d8b68c');
  shape(g, 'M-6 -25Q-7 -32 -2 -33Q4 -34 6 -27L5 -25Q-1 -28 -6 -24Z', '#586b70', '#344a4e', 0.7);
  ellipse(g, -4, -32, 2.7, 2.6, '#d0cbb1');
  line(g, 3, -25, 4, -25, '#394447', 0.9);
  const handX = 9 + gift * 5,
    handY = -17 + gift * 4;
  line(g, 1, -18, handX, handY, '#934f43', 3.3);
  ellipse(g, handX + 0.5, handY, 1.7, 1.4, '#e0c495');
  if (t < 8.5 || t > 42) {
    g.globalAlpha = t < 9 ? 1 - ease(7.7, 8.5, t) : ease(42, 45, t);
    paperBoat(g, handX + 3, handY - 1.9, 0.36, 0);
  }
  g.restore();
}
function paperBoat(g, x, y, s, rot) {
  g.save();
  g.translate(x, y);
  g.rotate(rot);
  g.scale(s, s);
  shape(g, 'M-15 -6L-6 -3L3 -11L10 -5L16 -7L10 2L-8 4Z', '#e8dcb2', '#7d816e', 0.85);
  shape(g, 'M-6 -3L3 -11L1 -2L15 -7L9 1L-8 4Z', '#c3b795');
  shape(g, 'M-15 -6L0 -1L16 -7M1 -2L3 -10', null, '#fff1c1', 0.9);
  g.restore();
}
export function giftBoat(g, t) {
  if (t < 7.7 || t > 12.9) return;
  const u = ease(7.7, 10.28, t),
    x = mix(405, 454, u),
    y = mix(433, 510, u) + 16 * Math.sin(Math.PI * u);
  // The third lantern sheds a wick-light. Its reflection meets the paper first.
  const spark = ease(8.18, 10.04, t);
  if (spark > 0 && spark < 1) {
    const [bx, by, bs] = boatPose(ignition[2]),
      sx = bx + 68 * bs,
      sy = by - 8 * bs;
    const point = (u) => [mix(sx, x, u) - 11 * Math.sin(Math.PI * u), mix(sy, y - 5, u) - 36 * Math.sin(Math.PI * u)];
    g.save();
    g.globalAlpha = Math.sin(Math.PI * spark) ** 0.52;
    const trail = new Path2D();
    for (let k = 0; k <= 12; k++) {
      const [px, py] = point(Math.max(0, spark - k * 0.009));
      if (k) trail.lineTo(px, py);
      else trail.moveTo(px, py);
    }
    shape(g, trail, null, '#f5d693', 1.35);
    const [px, py] = point(spark);
    halo(g, px, py, 13, 'rgba(255,195,89,.51)');
    star(g, px, py, 3.3, '#fff1b7');
    g.restore();
  }
  g.save();
  g.globalAlpha = ease(7.7, 8.2, t) * (1 - ease(10.6, 12.45, t));
  halo(g, x, y, 12 + 24 * u, 'rgba(255,207,114,.42)');
  paperBoat(g, x, y, 0.45 + 0.58 * u, -0.12 + u * 0.09);
  rings(g, x, y + 2, 0.82, (t * 0.48) % 1, u);
  g.restore();
  const power = ease(8.1, 9.9, t) * (1 - ease(10.65, 12.6, t));
  if (power) {
    g.save();
    g.globalAlpha = power;
    halo(g, x, y - 6, 47, 'rgba(255,199,92,.37)');
    for (let k = 0; k < 40; k++) {
      const a = k * 2.399 + t * 1.22,
        v = (k / 40 + t * 0.29) % 1,
        radius = 4 + 19 * v;
      const xx = x + Math.cos(a) * radius,
        yy = y - 4 - v * 31 + Math.sin(a) * 5;
      if (k % 5 === 0) star(g, xx, yy, 1 + 2 * (1 - v), '#fff0b0');
      else ellipse(g, xx, yy, 0.7, 0.6, '#f2cf80');
    }
    star(g, x, y - 5, 4 + 2 * Math.sin(t * 4), '#fff3c3');
    g.restore();
  }
}
const ignition = [1.7, 4.85, 8.05];
function boatPose(t) {
  if (t >= 25) {
    const u = clamp((t - 32) / 13),
      x = -174 + 389 * u * u * (2.3 - 1.3 * u);
    return [x, 599 - 26 * u, 1.04 - 0.04 * u];
  }
  const a = (t * TAU) / 45,
    q = (1 - Math.cos(a)) / 2,
    approach = ease(14, 24, t);
  return [
    mix(215 + 480 * q + 95 * Math.sin(a), 705, approach),
    mix(573 - 135 * q - 22 * Math.sin(a), 414, approach),
    mix(1 - 0.48 * q, 0.13, approach)
  ];
}
function floating(g, x, y, s, on, t, id, reflected) {
  const ang = (t * TAU) / 45;
  x += Math.sin(ang * 2 + id) * 2.8 * s;
  y += Math.sin(ang * 7 + id) * 0.9 * s;
  if (reflected) {
    if (on <= 0.002) return;
    lightTrail(g, x, y + 1, s, t + id, on);
    rings(g, x, y + 1, s, (t * (18 / 45) + id * 0.13) % 1, on);
    return;
  }
  g.save();
  g.translate(x, y);
  g.rotate(0.041 * Math.sin(ang * 5 + id));
  g.scale(s, s);
  if (on > 0.003) {
    g.globalAlpha = on;
    halo(g, 0, -10, 34, 'rgba(255,184,65,.36)');
    g.globalAlpha = 1;
  }
  shape(g, 'M-13 -4L-6 -8L12 -7L14 -3L7 1L-9 0Z', '#4c4840', '#283e44', 0.9);
  shape(g, 'M-9 -4L-9 -19L4 -21L10 -17L9 -5L-3 -2Z', '#a7ac93', '#4d5851', 0.8);
  g.save();
  g.globalAlpha = on;
  shape(
    g,
    'M-9 -4L-9 -19L4 -21L10 -17L9 -5L-3 -2Z',
    wash(g, -10, -18, 10, -6, [
      [0, '#f5bd6b'],
      [0.48, '#ffe5a1'],
      [1, '#d9904e']
    ])
  );
  ellipse(g, -1, -10, 2, 3.8, '#fff0b4');
  g.restore();
  shape(g, 'M-9 -19L-2 -16L10 -17M-2 -16L-3 -3M4 -20L4 -18', null, '#907858', 0.9);
  g.restore();
}
export function floatingLamps(g, t, reflected) {
  ignition.forEach((ts, i) => {
    const [bx, by, s] = boatPose(ts),
      elapsed = t - ts;
    const on = ease(-0.11, 0.43, elapsed) * (1 - ease(29 + i * 2, 43.6, t)),
      p = (t * TAU) / 45;
    const drift = (1 - Math.cos(p - (ts * TAU) / 45)) * 9;
    floating(g, bx + 68 * s + drift, by + 11 * s + drift * 0.14, s * 0.89, on, t, i + 1, reflected);
    if (!reflected && elapsed > 0 && elapsed < 2.3) {
      g.save();
      g.globalAlpha = (1 - elapsed / 2.3) * 0.9;
      star(g, bx + 67 * s, by - 12 * s - 6 * elapsed, (2.3 - elapsed) * 2.7, '#ffdf8d');
      g.restore();
    }
  });
}
const quantPeriod = 4.5,
  firstDip = 0.9;
function quant(t) {
  const angle = ((t - firstDip) * TAU) / quantPeriod,
    stroke = Math.sin(angle);
  return {
    stroke,
    top: [3 + stroke * 15, -121 + 4 * Math.cos(angle)],
    tip: [43 - stroke * 22, 4 + stroke * (stroke < 0 ? 15 : 7)]
  };
}
export function poleImpact(t) {
  const age = (t - firstDip + 45) % quantPeriod,
    at = (t - age + 45) % 45;
  if (age >= 2.5 || (at > 21.5 && at < 32)) return null;
  const [x, y, s] = boatPose(at),
    a = (at * TAU) / 45,
    rot = Math.sin(a * 8) * 0.0085;
  const [px, py] = quant(at).tip;
  return {
    x: x + s * (px * Math.cos(rot) - py * Math.sin(rot)),
    y: y + Math.sin(a * 11) * 0.76 + s * (px * Math.sin(rot) + py * Math.cos(rot)),
    age,
    life: 2.5,
    size: s * 1.95,
    pole: true
  };
}
function boatman(g, t) {
  const { stroke, top: poleTop, tip: poleBottom } = quant(t),
    lift = Math.max(...ignition.map((v) => Math.exp(-(((t - v) / 0.77) ** 2))));
  // One hand holds the quant, the other lowers the glowing spill to the paper.
  line(g, ...poleTop, ...poleBottom, '#24383a', 2.7);
  line(g, poleTop[0] - 0.55, poleTop[1], poleBottom[0] - 0.7, poleBottom[1], '#ad996e', 0.86);
  hull(g);
  for (let i = 0; i < 3; i++) {
    g.save();
    g.translate(-61 + i * 12, -16);
    shape(g, 'M-5 0v-10l8 -2 4 2v9Z', i === 1 ? '#a57d52' : '#70705d', '#3a423c', 0.85);
    line(g, -5, -9, 6, -11, '#c3aa79', 1);
    g.restore();
  }
  const lean = lift * 6 + stroke * 1.25;
  g.save();
  g.translate(lean, 0);
  shape(
    g,
    'M10 -38L24 -39L28 -17L34 -14Q29 -11 21 -13L15 -29L14 -14L5 -13L3 -15L9 -18Z',
    '#2a3b3e',
    '#1c3036',
    1.2
  );
  shape(
    g,
    'M13 -75Q20 -78 26 -71Q28 -65 27 -60L34 -36Q21 -30 6 -33L1 -38Q7 -52 8 -61Z',
    '#657570',
    '#23383e',
    1.6
  );
  shape(g, 'M14 -73Q13 -63 7 -52L0 -42Q5 -37 11 -40Q20 -54 25 -69Z', '#976e50', '#3d4642', 1);
  for (let i = 0; i < 11; i++) {
    let k = i / 11;
    shape(
      g,
      `M${13 + k * 9} ${-72 + k * 3}Q${11 + k * 7} -58 ${2 + k * 11} ${-42 + k}`,
      null,
      i % 2 ? '#c9af7f' : '#675b4c',
      0.72
    );
  }
  for (let i = 0; i < 5; i++) line(g, 13 + i * 2.7, -51, 9 + i * 4.7, -35, '#34494c', 0.85);
  shape(g, 'M15 -80L27 -81L28 -75L31 -73L27 -70L24 -66L17 -69Z', '#c4a380', '#4a4940', 0.85);
  shape(g, 'M13 -81L23 -78L21 -71L16 -69Z', '#383d37');
  // Conical reed hat with irregular brim and fine radial stitching.
  shape(g, 'M-3 -78Q4 -83 17 -97Q31 -89 43 -83Q27 -75 9 -75Z', '#c3ae7b', '#293a3c', 1.45);
  shape(g, 'M-3 -78Q18 -76 43 -83Q26 -74 8 -75Z', '#7e7358');
  for (let i = 0; i < 22; i++) {
    const x = -1 + i * 1.92;
    line(
      g,
      17 + (x - 17) * 0.12,
      -95 + Math.abs(x - 17) * 0.019,
      x,
      -77.8 - Math.max(0, x - 9) * 0.132,
      i % 3 ? '#8e805e' : '#dfc995',
      0.59
    );
  }
  line(g, 0, -78, 14, -76.6, '#e0cb98', 1.15);
  const hx = 35 + lift * 13,
    hy = -56 + lift * 20;
  shape(g, `M21 -66Q27 -68 30 -60L${hx} ${hy - 1}l-1 5q-11 -1 -15 -9Z`, '#62746f', '#2e4144', 1.15);
  ellipse(g, hx, hy + 1, 2.8, 2.2, '#c8a279');
  const tipX = hx + 14 + lift * 3,
    tipY = hy + 13 + lift * 15;
  line(g, hx, hy, tipX, tipY, '#ae8651', 1.45);
  halo(g, tipX, tipY, 11, 'rgba(255,182,63,.36)');
  ellipse(g, tipX, tipY, 1.4, 2, '#ffdc8a');
  const xx = poleTop[0] + (poleBottom[0] - poleTop[0]) * 0.5 - lean;
  line(g, 13, -64, xx, -58, '#455957', 5);
  ellipse(g, xx, -58, 2.3, 2.3, '#ba9a72');
  g.restore();
  line(g, -43, -15, -42, -41, '#292f2c', 2);
  shape(g, 'M-42 -40q6 -7 11 -1', null, '#4c4538', 1.4);
  lantern(g, -31, -27, 0.64, true);
}
export function makeSkiff(scale) {
  return layer(248, 150, scale);
}
export function skiff(g, t, art) {
  if (t > 24.5 && t < 32) return;
  const [el, p] = art,
    [x, y, s] = boatPose(t),
    a = (t * TAU) / 45,
    bob = Math.sin(a * 11) * 0.76;
  p.save();
  p.clearRect(0, 0, 248, 150);
  p.translate(119, 132);
  p.rotate(Math.sin(a * 8) * 0.0085);
  boatman(p, t);
  p.restore();
  g.save();
  g.translate(x, y + bob);
  g.scale(s, s);
  g.globalAlpha = t > 20 && t < 25 ? 1 - ease(20.6, 24.5, t) : 1;
  // The reflected silhouette breaks into narrow shifting ink bands.
  g.save();
  g.globalAlpha = 0.34;
  const k = el.height / 150;
  for (let h = 0; h < 90; h += 3) {
    g.globalAlpha = 0.34 * (1 - h / 91);
    g.drawImage(
      el,
      0,
      (135 - h - 3) * k,
      el.width,
      3 * k,
      -119 + Math.sin(h * 1.3 + a * 9) * (1 + h * 0.045),
      4 + h * 0.48,
      248,
      1.6
    );
  }
  g.restore();
  for (let i = 0; i < 9; i++) {
    const u = ((t * 9) / 45 + i / 9) % 1;
    shape(
      g,
      `M${-77 - u * 42} ${3 + u * 7}q${-12 - u * 17} 2 ${-23 - u * 41} ${u * 7}`,
      null,
      `rgba(186,202,184,${0.38 * (1 - u)})`,
      0.6
    );
  }
  lightTrail(g, -31, 4, 0.62, t, 0.75);
  g.drawImage(el, -119, -132, 248, 150);
  g.restore();
}
const berths = [
  [126, 547, 0.56, 1],
  [1114, 512, 0.52, -1],
  [1183, 548, 0.79, -1]
];
export function moorings(g, t, reflected) {
  for (let i = 0; i < berths.length; i++) {
    const [x, y, s, flip] = berths[i],
      a = (t * TAU) / 45;
    const bob = 1.5 * Math.sin(a * (6 + i) + i),
      roll = 0.025 * Math.sin(a * (8 + i) + 2 * i);
    const tetherX = 121,
      tetherY = -24;
    g.save();
    g.translate(x, y);
    g.scale(s * flip, s);
    if (reflected) {
      ellipse(g, 0, 4 + bob, 100, 5, 'rgba(23,42,49,.44)');
      lightTrail(g, -49, 5, s * 0.86, t + i, 0.66);
      for (let j = 0; j < 5; j++) {
        const k = Math.sin(a * 7 + i + j);
        shape(
          g,
          `M${-92 + j * 7 + k * 4} ${5 + j * 2.4}q48 7 ${94 + k * 8} 2t${67 - j * 5} -4`,
          null,
          j % 2 ? '#8b9c91' : '#465d60',
          0.9
        );
      }
    } else {
      // The rope moves at the bow, the other end stays fast to the piling.
      shape(g, `M${tetherX - 4} 10l-.6 -39q3 -3 8 -1l.3 40Z`, '#50574e', '#2b4145', 1.2);
      ellipse(g, tetherX, -30, 5.2, 2, '#dae0c8');
      shape(g, `M${tetherX - 4} -29l2 1 -1.3 12Z M${tetherX + 2} -29l2 .6 -1.3 8Z`, '#bfd2cc');
      line(g, tetherX + 1, -22, tetherX + 1, 5, '#8e8872', 0.75);
      shape(g, `M90 ${-19 + bob + roll * 90}Q103 ${-6 + bob} ${tetherX} ${tetherY}`, null, '#4e483d', 1.8);
      g.translate(0, bob);
      g.rotate(roll);
      hull(g, true);
      shape(g, 'M-40 -12Q-32 -35 -20 -35L13 -35Q25 -32 32 -16Z', '#596b69', '#283d44', 1.6);
      for (let j = 0; j < 13; j++) line(g, -35 + j * 4.6, -15, -23 + j * 3.3, -33, '#929780', 0.9);
      shape(g, 'M-30 -30Q-23 -39 -15 -38L12 -37L20 -32Z', '#cbd0ba');
      line(g, -61, -12, -59, -39, '#314046', 1.9);
      line(g, -59, -39, -49, -38, '#968464', 1.3);
      lantern(g, -49, -28, 0.52, true);
    }
    g.restore();
  }
}

export function nearBarge(g) {
  const r = rng(9683);
  g.save();
  g.translate(1280, 683);
  g.rotate(-0.115);
  const hull = 'M-196 -12Q-158 -2 -103 -6Q-36 -12 42 -34L65 -7Q-23 26 -106 23Q-151 23 -173 13Z';
  shape(g, 'M-193 -6Q-116 9 50 -21L63 19Q-94 49 -157 29Z', 'rgba(18,41,50,.38)');
  shape(g, hull, '#35474b', '#1e353d', 2.15);
  shape(g, 'M-196 -13Q-163 -25 -123 -31Q-64 -39 39 -48L51 -31Q-95 11 -196 -13Z', '#283d43', '#7b8072', 1.9);
  shape(g, 'M-194 -13Q-161 -2 -99 -8Q-16 -18 51 -38', null, '#c9c4a8', 2.4);
  for (let i = 0; i < 4; i++)
    shape(
      g,
      `M${-179 + i * 8} ${-5 + i * 4}Q-114 ${16 + i * 4} 54 ${-28 + i * 5}`,
      null,
      i % 2 ? '#40565a' : '#788071',
      0.98
    );
  for (let j = 0; j < 110; j++) {
    let x = -140 + r() * 183,
      y = 2 + r() * 11 - x * 0.13;
    line(g, x, y, x + 2 + r() * 6, y - 0.5, 'rgba(157,145,115,.44)', 0.51);
  }
  for (const x of [-144, -108, -72])
    shape(g, `M${x} ${-21 - x * 0.037}l12 6 16 -2 -15 -7Z`, '#75796a', '#273d42', 1);
  // Bent willow hoops support a snow-laden reed awning.
  const canopy = 'M-81 -17Q-73 -51 -57 -58Q-17 -69 41 -70Q60 -52 60 -38Z';
  shape(g, canopy, '#747965', '#31434a', 1.6);
  for (let i = 0; i < 32; i++)
    shape(
      g,
      `M${-79 + i * 4.1} ${-18 - i * 0.6}Q${-72 + i * 4.1} ${-49 - i * 0.35} ${-53 + i * 3.15} ${-57 - i * 0.4}`,
      null,
      i % 3 ? '#4d605d' : '#aaa58a',
      0.9
    );
  shape(
    g,
    'M-73 -39Q-68 -58 -55 -61Q-23 -71 38 -74L47 -66Q19 -69 -15 -59Q-29 -61 -43 -54Q-59 -55 -73 -39Z',
    '#c4cbbc',
    '#899b94',
    0.85
  );
  for (const xx of [-62, -23, 15])
    shape(
      g,
      `M${xx} ${-21 - (xx + 62) * 0.16}Q${xx + 1} ${-50 - (xx + 62) * 0.13} ${xx + 17} ${-63 - (xx + 62) * 0.12}`,
      null,
      '#334a4e',
      2
    );
  line(g, -171, -17, -57, -36, '#282f2e', 3.8);
  line(g, -170, -18, -57, -37, '#b5a17c', 1.35);
  shape(g, 'M-184 -13Q-216 6 -236 -1Q-213 12 -183 -8', null, '#415451', 1.3);
  g.restore();
}
