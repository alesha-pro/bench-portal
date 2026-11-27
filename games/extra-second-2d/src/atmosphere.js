import { ellipse, glow, layer, line, path, rng, smooth, TAU } from './draw.js';

// Small painted cels can be stamped at plume scale without rebuilding their dry-brush edges.
export function steamCels() {
  const r = rng(1067);
  return Array.from({ length: 9 }, (_, n) => {
    const { canvas, c } = layer(144, 120, 1.5);
    c.translate(72, 63);
    const lobes = [];
    for (let i = 0; i < 10; i++) {
      const a = (i * TAU) / 10;
      lobes.push([Math.cos(a) * (32 + r() * 8), Math.sin(a) * (21 + r() * 7), 14 + r() * 9]);
    }
    const wash = c.createLinearGradient(-7, -54, 12, 48);
    wash.addColorStop(0, '#fff0cc');
    wash.addColorStop(0.42, '#ecd3b9');
    wash.addColorStop(0.72, '#cab5ae');
    wash.addColorStop(1, '#978f93');
    c.beginPath();
    for (const [x, y, rr] of lobes) {
      c.moveTo(x + rr, y);
      c.arc(x, y, rr, 0, TAU);
    }
    c.moveTo(38, 0);
    c.ellipse(0, 0, 38, 27, 0, 0, TAU);
    c.fillStyle = wash;
    c.fill();
    for (const [x, y, rr] of lobes) {
      const sy = y + rr * 0.55;
      path(
        c,
        `M${x - rr * 0.85} ${y + 2} Q${x - rr * 0.5} ${sy + rr * 0.6} ${x + rr * 0.65} ${sy} Q${x - rr * 0.25} ${sy + rr * 0.25} ${x - rr * 0.85} ${y + 2}Z`,
        '#8c858449',
        null,
      );
      if (y < 6)
        path(
          c,
          `M${x - rr * 0.88} ${y} Q${x - rr * 0.67} ${y - rr} ${x + rr * 0.35} ${y - rr * 0.83}`,
          null,
          '#fff1d19a',
          1.8,
        );
    }
    path(
      c,
      'M-32 8 Q-25 16 -14 10 Q1 4 -4 -5 Q-9 -13 -16 -7 Q-20 -2 -15 0 M3 13 Q14 18 23 8 Q27 2 21 -2',
      null,
      '#a19a943e',
      1.15 + (n % 3) * 0.4,
    );
    for (let j = 0; j < 94; j++) {
      const a = r() * TAU,
        dist = Math.sqrt(r());
      const x = dist * Math.cos(a) * 53,
        y = dist * Math.sin(a) * 33;
      line(
        c,
        [
          [x, y],
          [x + 1 + r() * 4, y - 0.7],
        ],
        j % 3 ? '#fff5d82b' : '#676d7220',
        0.6 + r(),
      );
    }
    return canvas;
  });
}

export function smoke(c, s, cels) {
  c.save();
  // Thin vapour at the nozzle joins each billow to the next until it rolls over.
  for (let i = 0; i < 14; i++) {
    const age = (i / 14 + (s.phase / TAU) * 3) % 1;
    const x = 691 - 48 * age ** 1.5 + 5 * Math.sin(8 * age);
    const y = 423 - 88 * age;
    const size = 0.07 + 0.24 * age;
    c.globalAlpha = 0.55 * (1 - smooth(0.6, 1, age));
    c.drawImage(cels[(i + 2) % cels.length], x - 72 * size, y - 59 * size, 144 * size, 120 * size);
  }
  c.globalAlpha = 1;
  for (let j = 17; j >= 0; j--) {
    const age = (j / 18 + (s.phase / TAU) * 3) % 1;
    const drift = Math.sin(age * 10) + 0.45 * Math.sin(age * 18);
    const x = 691 - 321 * age ** 1.22 + drift * 11;
    const y = 424 - 202 * age ** 0.72 + 14 * Math.sin(age * 9) - 6 * Math.sin(j * 3.1) * age;
    const size = (0.11 + age * 1.22) * (1 + 0.11 * Math.sin(j * 2.3));
    c.save();
    c.translate(x, y);
    c.rotate(-0.22 + 0.26 * Math.sin(age * 5 + j * 0.8));
    c.scale(size, size * (0.95 + 0.1 * Math.sin(age * 8 + j)));
    c.globalAlpha = smooth(0, 0.07, age) * (1 - smooth(0.62, 1, age)) * (0.66 - 0.1 * age);
    c.drawImage(cels[j % cels.length], -72, -63, 144, 120);
    c.restore();
  }
  const surge = smooth(32, 32.5, s.t) * (1 - smooth(33.3, 36, s.t));
  for (let j = 0; j < 13; j++) {
    const age = (j / 13 + (s.phase / TAU) * 6) % 1;
    const size = 0.07 + age * (0.37 + surge * 0.27);
    const x = 756 + age * (104 + surge * 115),
      y = 598 + 13 * Math.sin(age * 3.6) - 8 * age;
    c.globalAlpha = Math.sin(age * Math.PI) * (0.33 + surge * 0.3);
    c.drawImage(cels[j % cels.length], x - 72 * size, y - 63 * size, 144 * size, 120 * size);
  }
  c.restore();
}

export function streakLight(c) {
  // Soft shafts are applied to the set before the figures enter.
  for (const [x, width] of [
    [130, 90],
    [380, 27],
    [740, 135],
    [1320, 88],
  ]) {
    const g = c.createLinearGradient(x, 110, x + 100, 815);
    g.addColorStop(0, '#fdd19100');
    g.addColorStop(0.5, '#ffd5970a');
    g.addColorStop(1, '#ffde9d16');
    path(c, `M${x} 100 l${width} 0 315 700 -${width * 1.8} 8Z`, g, null);
  }
}

export function foreground(c) {
  const r = rng(974);
  // Close iron rail and climbing jasmine below the eye line.
  path(c, 'M-20 839 Q110 825 237 873 L235 880 Q109 839 -20 854Z', '#263f40', null);
  path(c, 'M-20 842 Q110 831 235 874', null, '#8e947463', 2);
  for (const [root, k, side] of [
    [-22, 96, 1],
    [23, 66, 1],
    [1620, 105, -1],
    [1586, 68, -1],
  ]) {
    for (let b = 0; b < 13; b++) {
      const x = root + side * r() * 81,
        y = 912,
        dx = side * (12 + r() * 107),
        dy = -k * (0.5 + r());
      path(c, `M${x} ${y} q${dx * 0.7} ${dy * 0.58} ${dx} ${dy}`, null, '#284847', 2);
      for (let j = 1; j < 6; j++) {
        let px = x + (dx * j) / 6,
          py = y + (dy * j) / 6,
          off = (j % 2 ? 1 : -1) * (9 + r() * 8);
        path(
          c,
          `M${px} ${py} q${off * 1.3} -1 ${off} -16 q${-off} 4 ${-off} 16Z`,
          ['#243e41', '#365550', '#486658'][b % 3],
          null,
        );
      }
      if (b % 6 === 0)
        for (let j = 0; j < 3; j++) ellipse(c, x + dx + r() * 7, y + dy + r() * 8, 3.6, 3, '#ac9779');
    }
  }
}

export function flyaway(c, s) {
  const { t, ox, oy } = s;
  if (!s.orb) return;
  if (t >= 7.3 && t < 9.05) {
    // Three broken filaments follow the ballistic arc and taper into the socket.
    const u = (t - 7.3) / 1.75;
    c.save();
    for (let j = 0; j < 21; j++) {
      const v = Math.max(0, u - j * 0.009);
      const x = 1050 - 69 * v,
        y = 454 + 235 * v * v;
      c.globalAlpha = (1 - j / 21) * Math.min(1, u * 10) * 0.76;
      const w = (j / 21) * 5;
      ellipse(c, x + w * Math.sin(j * 0.8), y, 2.5 - j * 0.08, 2.3, '#ffe17e');
      if (j % 3 === 0) ellipse(c, x - w * 1.4, y + 1, 1.2, 1.2, '#fff0ab');
    }
    c.restore();
  }
  const pulse = 0.5 + 0.5 * Math.cos(t * 5);
  glow(c, ox, oy, 68, '255,187,56', 0.35 + 0.1 * pulse);
  glow(c, ox, oy, 28, '255,203,66', 0.86);
  // A luminous brass second bears the same star as its empty socket.
  c.save();
  c.translate(ox, oy);
  c.rotate(0.14 * Math.sin(t * 3));
  ellipse(c, 0, 0, 9, 10, '#efb64e', '#fff1b0', 1.4);
  path(c, 'M0 -8 Q1 -2 6 0 Q1 1 0 8 Q-1 1 -6 0 Q-1 -2 0 -8Z', '#fff7bf', null);
  c.restore();
  for (let i = 0; i < 8; i++) {
    const a = i * 2.4 + t * 0.48,
      r = 15 + Math.sin(i * 6 + t * 2) * 6;
    ellipse(c, ox + Math.cos(a) * r, oy + Math.sin(a) * r, 1.3, 0.9, '#ffdf87');
  }
}
