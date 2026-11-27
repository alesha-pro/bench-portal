import {
  W,
  H,
  TAU,
  random,
  linear,
  radial,
  ellipse,
  stroke,
  draw,
  place,
  sheet,
  print,
  ease,
  wave,
} from './drawing.js';

function texture(c) {
  const cv = document.createElement('canvas');
  cv.width = 1536;
  cv.height = 864;
  const tc = cv.getContext('2d'),
    pix = tc.createImageData(cv.width, cv.height);
  const r = random(22751),
    grids = [9, 32, 104].map((n) => ({ n, v: Array.from({ length: (n + 1) * (n + 1) }, r) }));
  function noise(g, x, y) {
    const fx = x * g.n,
      fy = y * g.n,
      i = Math.floor(fx),
      j = Math.floor(fy),
      u = fx - i,
      v = fy - j,
      k = j * (g.n + 1) + i;
    return (
      (g.v[k] * (1 - u) + g.v[k + 1] * u) * (1 - v) +
      (g.v[k + g.n + 1] * (1 - u) + g.v[k + g.n + 2] * u) * v -
      0.5
    );
  }
  for (let y = 0; y < cv.height; y++)
    for (let x = 0; x < cv.width; x++) {
      const u = x / cv.width,
        v = y / cv.height;
      const k = 4 * (y * cv.width + x),
        n =
          68 * noise(grids[0], u, v) +
          52 * noise(grids[1], u, v) +
          31 * noise(grids[2], u, v) +
          (r() - 0.5) * 49;
      pix.data[k] = n > 0 ? 255 : 76;
      pix.data[k + 1] = n > 0 ? 243 : 46;
      pix.data[k + 2] = n > 0 ? 192 : 36;
      pix.data[k + 3] = Math.abs(n) * 0.85;
    }
  tc.putImageData(pix, 0, 0);
  c.drawImage(cv, 0, 0, W, H);
  for (let i = 0; i < 13800; i++) {
    const x = r() * W,
      y = r() * H,
      a = r() * TAU,
      len = 1 + r() ** 3 * 17;
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(
      x + len * 0.55 * Math.cos(a + 0.4),
      y + len * 0.4 * Math.sin(a),
      x + len * Math.cos(a),
      y + len * 0.66 * Math.sin(a),
    );
    c.strokeStyle = r() < 0.49 ? 'rgba(108,67,35,.13)' : 'rgba(255,246,196,.24)';
    c.lineWidth = 0.25 + r() * 0.65;
    c.stroke();
  }
  for (let i = 0; i < 1900; i++) {
    const x = r() * W,
      y = r() * H;
    ellipse(c, x, y, 0.3 + r() ** 2 * 1.35, 0.3 + r() * 0.7, 'rgba(93,55,30,.16)');
  }
}
function bastFibers(c) {
  const r = random(3452);
  for (let i = 0; i < 1100; i++) {
    const x = 32 + r() * 1216, y = 52 + r() * 600;
    const span = 4 + r() ** 2 * 32, bend = (r() - 0.5) * 9;
    const strands = 2 + Math.floor(r() * 3), heading = r() * TAU;
    place(c, x, y, 1, 1, heading, (c) => {
      for (let j = 0; j < strands; j++) {
        const end = span * (0.5 + r() * 0.5), split = r() * 3.2 - 1.6;
        const p = new Path2D();
        p.moveTo(-end * 0.5, 0);
        p.quadraticCurveTo(0, bend + split, end * 0.5, split);
        p.quadraticCurveTo(0, bend + split + 0.5 + r(), -end * 0.5, 0);
        draw(c, p, '#fff0bb8a');
      }
    });
  }
}
export function paperLayers(scale) {
  const base = sheet(scale, (c) => {
    c.fillStyle = linear(c, 0, 55, 50, 665, [
      [0, '#be8147'],
      [0.29, '#f5cb81'],
      [0.53, '#ffdf9c'],
      [0.8, '#e9a65c'],
      [1, '#a3613b'],
    ]);
    c.fillRect(0, 0, W, H);
    radial(c, 556, 290, 560, [
      [0, 'rgba(255,242,190,.83)'],
      [0.52, 'rgba(255,223,159,.34)'],
      [1, 'rgba(255,203,129,0)'],
    ]);
    radial(c, 776, 198, 108, [
      [0, '#fff2bd'],
      [0.65, 'rgba(255,236,171,.76)'],
      [0.82, 'rgba(255,226,157,.3)'],
      [1, 'rgba(255,220,149,0)'],
    ]);
    ellipse(c, 776, 198, 68, 68, '#fff1bc', 'rgba(179,126,65,.36)', 1);
    ellipse(c, 776, 198, 72, 72, null, 'rgba(255,235,173,.68)', 1.4);
    ellipse(c, 776, 198, 76, 76, null, 'rgba(187,133,62,.32)', 0.65);
    // A woodblock impression of thin cloud scrolls and a ring of sun needles.
    for (let i = 0; i < 112; i++) {
      const a = (i / 112) * TAU,
        r = i % 4 ? 78 : 80;
      stroke(
        c,
        [
          [776 + Math.cos(a) * r, 198 + Math.sin(a) * r],
          [776 + Math.cos(a) * (r + (i % 4 ? 2 : 4)), 198 + Math.sin(a) * (r + (i % 4 ? 2 : 4))],
        ],
        'rgba(177,126,65,.38)',
        0.75,
      );
    }
  });
  // A wick has a pale core and a much wider amber penumbra. Cache at low
  // resolution so the grain of the screen stays finer than the light behind it.
  const pools = [
    ['#fff5bde8', '#ffd072be', '#eb892d68'],
    ['#fff7d5e3', '#ffe7adad', '#f3a76252'],
    ['#fff0a9e8', '#ffbb6ac7', '#e47b495f'],
  ].map(([core, honey, edge]) => {
    const lamp = document.createElement('canvas');
    lamp.width = lamp.height = 384;
    radial(lamp.getContext('2d'), 192, 192, 191, [
      [0, core], [0.2, honey], [0.54, edge], [1, '#f39c4800'],
    ]);
    return lamp;
  });
  const twilight = sheet(0.45, (c) => {
    c.fillStyle = linear(c, 0, 63, W, 465, [
      [0, '#45314c'], [0.28, '#916a63'], [0.56, '#3c5562'], [0.82, '#344955'], [1, '#715562'],
    ]);
    c.fillRect(0, 0, W, H);
  });
  const pulp = sheet(Math.min(scale, 1), bastFibers);
  const litPulp = document.createElement('canvas');
  litPulp.width = pulp.width;
  litPulp.height = pulp.height;
  return { base, pools, twilight, pulp, litPulp, fibers: sheet(scale, texture) };
}

const wicks = [
  { x: 330, y: 339, rx: 330, ry: 260, sway: 32, rate: 3, flicker: 37 },
  { x: 684, y: 218, rx: 257, ry: 229, sway: 21, rate: 2, flicker: 43 },
  { x: 985, y: 358, rx: 318, ry: 266, sway: 38, rate: 4, flicker: 53 },
];
export function lampStates(t, storm, warmth) {
  return wicks.map(({x, y, rx, ry, sway, rate, flicker}, i) => {
    const phase = i * 2.3 + 0.6;
    const draft = wave(t, rate, phase) + 0.24 * wave(t, rate + 3, phase);
    const flame = 0.85 + 0.075 * wave(t, flicker, phase) + 0.05 * wave(t, flicker - 13, i)
      + 0.025 * wave(t, 2 * flicker + 1, phase);
    return {
      x: x + sway * draft, y: y + 16 * wave(t, rate + 1, phase),
      rx: rx * (0.98 + 0.05 * flame), ry: ry * (1 + 0.16 * (flame - 0.85)),
      strength: flame * (0.60 + 0.39 * warmth) * (1 - storm * [0.41, 0.77, 0.59][i]),
    };
  });
}

// The shift is opposite the motion of the lamps. Distance measures separation
// from the screen in stage units; contact pieces barely move away from the ink.
export function castOffset(lamps, x, y, distance) {
  let dx = 0, dy = 0, sum = 0;
  for (const lamp of lamps) {
    const sx = (x - lamp.x) / lamp.rx, sy = (y - lamp.y) / lamp.ry;
    const weight = lamp.strength / (0.24 + sx * sx + sy * sy) ** 2;
    dx += sx * weight;
    dy += sy * weight;
    sum += weight;
  }
  return [distance * dx / sum, distance * (dy / sum + 0.38)];
}

export function shadowSheet(source, blur) {
  const scale = Math.min(0.75, source.width / W);
  return sheet(scale, (c) => {
    c.filter = 'blur(' + blur * scale + 'px)';
    print(c, source);
    c.filter = 'none';
    c.globalCompositeOperation = 'source-in';
    c.fillStyle = '#563a3d';
    c.fillRect(0, 0, W, H);
  });
}
export function castShadow(c, shadow, lamps, x, y, distance, opacity) {
  const [dx, dy] = castOffset(lamps, x, y, distance);
  c.save();
  c.globalAlpha *= opacity;
  c.drawImage(shadow, dx, dy, W, H);
  c.restore();
}
const cloud =
  'M-89 11 Q-54 8 -39 5 Q-25 2 -24 -4 Q-23 -11 -33 -9 Q-27 -24 -11 -19 Q-13 -33 3 -37 Q22 -41 29 -23 Q44 -34 52 -17 Q63 -22 69 -13 Q74 -6 63 -1 Q82 -2 101 2 Q71 3 57 6 Q33 14 6 12 Z';
export function cloudScroll(c, x, y, s, flip = 1) {
  place(c, x, y, s * flip, s * 0.76, 0, (c) => {
    draw(c, cloud, 'rgba(253,223,165,.41)', 'rgba(151,105,62,.42)', 1.3);
    draw(
      c,
      'M-55 7 Q-8 4 -14 -9 Q-18 -16 -25 -12 M-12 -17 Q2 -27 9 -16 Q12 -11 6 -8 Q20 -8 23 -17 Q27 -23 35 -21 M-13 7 Q30 8 37 -3 Q41 -10 51 -6 Q58 -3 53 0',
      null,
      'rgba(163,116,65,.52)',
      1.2,
    );
    stroke(
      c,
      [
        [-55, 16],
        [-8, 15],
        [27, 15],
      ],
      'rgba(161,108,61,.29)',
      1,
    );
  });
}
export function atmosphere(c, l, t, storm, warmth, lamps) {
  print(c, l.base);
  for (const [x, y, s, f] of [
    [306, 166, 0.79, 1],
    [646, 136, 0.39, -1],
    [880, 202, 0.79, 1],
    [526, 244, 0.66, -1],
    [1085, 122, 0.58, -1],
    [204, 253, 0.42, 1],
  ])
    cloudScroll(c, x + wave(t, 1, x) * 12 + storm * 20, y, s, f);
  c.fillStyle = 'rgba(231,132,53,' + warmth * 0.15 + ')';
  c.fillRect(0, 0, W, H);
  c.fillStyle = 'rgba(110,143,158,' + (1 - warmth) * 0.18 + ')';
  c.fillRect(0, 0, W, H);
  const ember = ease(30.4, 34.5, t) * (1 - ease(39.5, 44, t));
  c.fillStyle = 'rgba(66,37,42,' + (0.16 - ember * 0.07) + ')';
  c.fillRect(0, 0, W, H);
  c.save();
  c.globalAlpha = storm * 0.68;
  print(c, l.twilight);
  c.restore();
  c.save();
  for (const [i, lamp] of lamps.entries()) {
    const { x, y, rx, ry, strength } = lamp;
    c.globalAlpha = strength;
    c.drawImage(l.pools[i], x - rx, y - ry, 2 * rx, 2 * ry);
  }
  c.restore();

  // The lamp moves; the bast bundles caught in its pool stay in the paper.
  const pc = l.litPulp.getContext('2d');
  pc.setTransform(l.pulp.width / W, 0, 0, l.pulp.height / H, 0, 0);
  pc.clearRect(0, 0, W, H);
  for (const [i, light] of lamps.entries()) {
    pc.globalAlpha = light.strength;
    pc.drawImage(l.pools[i], light.x - light.rx, light.y - light.ry, light.rx * 2, light.ry * 2);
  }
  pc.globalAlpha = 1;
  pc.globalCompositeOperation = 'destination-in';
  print(pc, l.pulp);
  pc.globalCompositeOperation = 'source-over';
  print(c, l.litPulp);
}

// Moths on the audience side of the screen briefly eclipse the wicks.
export function moths(c, lamps, t, storm) {
  for (const [i, dx, dy, size, phase, pace] of [
    [0,-94,-126,0.70,0.3,5], [0,-66,-143,0.46,2.5,8],
    [1,115,-84,0.51,1.4,6], [2,61,-103,0.79,3.7,5], [2,93,-85,0.45,5.4,7],
  ]) {
    const lamp = lamps[i];
    const x = lamp.x + dx + wave(t, pace, phase) * 22 + wave(t, 2, phase) * 19;
    const y = lamp.y + dy + wave(t, pace + 2, phase + 1) * 17;
    const wing = 0.22 + Math.abs(wave(t, 113 + pace, phase)) * 0.78;
    place(c, x, y, size, size, wave(t, pace + 1, phase) * 0.8, (c) => {
      for (const side of [-1, 1]) {
        place(c, 0, 0, side * wing, 1, 0, (c) => {
          draw(c, 'M0 -1 Q3 -6 9 -8 Q11 -4 7 0 Q10 3 7 5 Q3 5 0 1Z M3 0 Q5 -4 7 -4 Q6 -1 3 0Z',
            '#463631', '#77543e', 0.65);
        });
      }
      draw(c, 'M-2 -7 Q0 -5 0 -2 Q1 -6 3 -6', null, '#4a3830', 0.85);
      ellipse(c, 0, 0, 1.15, 3.8, '#382e2a');
      const glint = (0.5 + 0.5 * wave(t, 13, phase)) ** 3;
      c.globalAlpha = glint * (1 - 0.72 * storm);
      ellipse(c, 0, 3, 1.1, 1.1, '#fff1a3');
    });
  }
}
