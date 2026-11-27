// Winter willow switches are painted once. Each one swings from its own insertion
// on the bough, so loose clusters leave the moving tip at the moment they fall.
import { TAU, rng, layer, shape, line, ellipse, wash } from './ink.js';

const boughs = [
  [1298, 63, -1, 1],
  [-21, 100, 1, 0.58]
];
function stemSpace(g, [x, y, dir, s]) {
  g.translate(x, y);
  g.scale(dir * s, s);
}
function trunkY(x) {
  return -26 * Math.sin((Math.PI * x) / 233) - 0.1 * x;
}
export function winterBoughs(g) {
  for (const bough of boughs) {
    g.save();
    stemSpace(g, bough);
    shape(
      g,
      'M-9 -15C34 -4 81 -35 125 -39S195 -32 231 -29Q205 -24 179 -29C121 -41 89 -21 47 -7Q8 9 -9 5Z',
      '#263b40',
      '#142e38',
      1.7
    );
    shape(
      g,
      'M-6 -14Q25 -11 58 -23Q108 -42 139 -41Q121 -37 110 -36L101 -36Q72 -26 48 -20L36 -15L22 -13L13 -9Z',
      '#bfccbe'
    );
    shape(g, 'M2 -3Q40 -8 70 -23M78 -24Q126 -43 161 -36M169 -34l24 2', null, '#748782', 1);
    shape(g, 'M104 -31Q135 -58 176 -64Q138 -54 116 -31Z', '#2d4141');
    g.restore();
  }
  // A cropped tiled eave, seen from beneath. A blue glass furin hangs from the last rafter.
  g.save();
  g.translate(1280, 13);
  shape(g, 'M-158 -8L12 -12V36L-97 18Z', '#25353a', '#112b35', 2);
  for (let i = 0; i < 8; i++) {
    const x = -124 + i * 20,
      y = 9 + i * 2.7;
    shape(g, `M${x} ${y - 9}l8 -1 8 12 -7 -.2Z`, '#514e42', '#243538', 1);
    line(g, x + 8, y - 9, x + 14, y + 1, '#9d9173', 0.8);
  }
  shape(g, 'M-172 -9Q-125 2 -89 3L8 13V22Q-69 13 -105 10Q-146 5 -172 -5Z', '#415452', '#243941', 1.4);
  shape(g, 'M-173 -9Q-125 -1 -82 0L9 8V13L-37 10L-52 7L-70 8L-99 4Q-146 2 -173 -5Z', '#c7d0be');
  g.restore();
}
export function makeWillow(scale) {
  const r = rng(827),
    twigs = [];
  for (const b of boughs) {
    for (let j = 0; j < 22; j++) {
      const x = 12 + j * 9.3 + r() * 9,
        y = trunkY(x) + 0.9;
      const length = 26 + (1 - x / 270) * (29 + r() * 89),
        bend = 3 + r() * 19;
      const [pic, p] = layer(58, Math.ceil(length) + 8, scale);
      p.translate(12, 3);
      const at = (u) => bend * (1 - Math.cos(u * Math.PI)) * 0.5 + 4 * Math.sin(u * Math.PI * 1.7);
      const path = new Path2D();
      path.moveTo(0, 0);
      for (let k = 1; k <= 23; k++) path.lineTo(at(k / 23), (length * k) / 23);
      shape(p, path, null, j % 5 === 0 ? '#857e61' : '#425751', 0.85 + r() * 0.62);
      for (let u = 0.08 + r() * 0.12; u <= 1; u += 0.064 + r() * 0.074) {
        const xx = at(u),
          yy = length * u,
          sign = r() < 0.5 ? -1 : 1,
          w = (1 + r() * 2.4) * sign,
          h = 3 + r() * 7;
        shape(
          p,
          `M${xx} ${yy}q${w * 1.6} ${h * 0.14} ${w} ${h}q${-w * 1.4} ${-h * 0.22} ${-w} ${-h}Z`,
          r() < 0.6 ? '#51675f' : '#7c826a'
        );
        if (r() < 0.53) {
          line(p, xx, yy, xx + w * 0.85, yy + h * 0.58, '#bbc7b6', 0.77);
          ellipse(p, xx, yy, 0.7 + r() * 1.65, 0.5 + r() * 0.72, '#cbd1bd');
        }
      }
      twigs.push({ b, x, y, length, tip: at(1), pic, phase: r() * TAU, sheds: j % 6 === 2 });
    }
  }
  return twigs;
}
const swing = (t, phase) =>
  0.038 * Math.sin((t * TAU * 5) / 45 + phase) + 0.023 * Math.sin((t * TAU * 9) / 45 + 0.4 * phase);
export function willow(g, t, twigs) {
  for (const { b, x, y, length, tip, pic, phase, sheds } of twigs) {
    g.save();
    stemSpace(g, b);
    g.translate(x, y);
    g.save();
    g.rotate(swing(t, phase));
    g.drawImage(pic, -12, -3, 58, Math.ceil(length) + 8);
    g.restore();
    if (sheds) {
      const period = 45 / 4,
        age = (t + phase * 1.7) % period;
      if (age < 2.2) {
        const theta = swing(t - age, phase);
        const xx = tip * Math.cos(theta) - length * Math.sin(theta);
        const yy = tip * Math.sin(theta) + length * Math.cos(theta);
        for (let k = 0; k < 6; k++) {
          const u = age / 2.2;
          g.globalAlpha = Math.sin(Math.PI * u) ** 0.65 * (0.85 - k * 0.06);
          ellipse(
            g,
            xx + age * (k - 3) * 2.7 + Math.sin(age * 3 + k) * age * 2,
            yy + age * age * (13 + k) + k * 0.45,
            1.6 - k * 0.14,
            1.16 - k * 0.09,
            '#dae0cb'
          );
        }
      }
    }
    g.restore();
  }
  g.save();
  g.translate(1194, 25);
  g.rotate(0.038 * Math.sin((t * TAU * 8) / 45) + 0.022 * Math.sin((t * TAU * 13) / 45));
  line(g, 0, 0, 0, 30, '#b8ac86', 0.75);
  shape(
    g,
    'M-8 42Q-8 30 -.5 29Q7 29 8 41Q3 45 -8 42Z',
    wash(g, -8, 35, 8, 39, [
      [0, '#45636c'],
      [0.45, '#cad2bb'],
      [0.7, '#627f81'],
      [1, '#365560']
    ]),
    '#aebeb0',
    0.8
  );
  line(g, -6, 42, 6, 42, '#c4b081', 1.4);
  line(g, 0.6, 41, -0.6, 53, '#bfad82', 0.7);
  g.rotate(0.1 * Math.sin((t * TAU * 8) / 45 - 0.65));
  shape(g, 'M-1 51l3 1 -1 15 -4 -2Z', '#bcaa86', '#657673', 0.6);
  g.restore();
}
