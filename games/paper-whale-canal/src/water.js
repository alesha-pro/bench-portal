import { W, H, TAU, rng, layer, shape, line, rect, ellipse, wash, clip, texture } from './ink.js';
import { bank } from './town.js';

export const waterShape = new Path2D('M-20 571L501 428L858 428L1300 547V740H-20Z');
export function makeWater(scene, scale, tile) {
  const [base, g] = layer(W, H, scale),
    [mirror, m] = layer(W, 325, scale),
    [marks, p] = layer(W, 315, scale);
  const r = rng(64873);
  clip(g, waterShape, () => {
    rect(
      g,
      -10,
      420,
      1300,
      312,
      wash(g, 0, 428, 50, 732, [
        [0, '#889c95'],
        [0.09, '#68858a'],
        [0.36, '#3d636d'],
        [0.68, '#2a4a58'],
        [1, '#203e4a']
      ])
    );
    for (let i = 0; i < 410; i++) {
      const x = r() * 1280,
        y = 425 + r() * 307,
        s = 7 + r() ** 2 * 73;
      ellipse(
        g,
        x,
        y,
        s,
        s * (0.022 + r() * 0.041),
        r() < 0.55 ? 'rgba(187,192,157,.059)' : 'rgba(17,47,61,.064)'
      );
    }
    texture(g, tile, -10, 425, 1300, 316, 0.62);
  });
  // Every column reflects around its local masonry waterline. Fade into deep water.
  m.translate(0, -414);
  for (let x = 0; x < W; x += 2) {
    const b = bank(x),
      depth = Math.min(b, 181);
    m.save();
    m.translate(0, b + 0.8);
    m.scale(1, -0.84);
    m.drawImage(scene, x * scale, (b - depth) * scale, 2 * scale, depth * scale, x, -depth, 2.04, depth);
    m.restore();
  }
  const [mask, mg] = layer(W, 325, scale);
  mg.translate(0, -414);
  for (let x = 0; x < W; x += 5) {
    const b = bank(x);
    rect(
      mg,
      x,
      b - 1,
      5.02,
      161,
      wash(mg, 0, b, 0, b + 152, [
        [0, 'rgba(0,0,0,.80)'],
        [0.22, 'rgba(0,0,0,.66)'],
        [0.64, 'rgba(0,0,0,.37)'],
        [1, 'transparent']
      ])
    );
  }
  m.globalCompositeOperation = 'destination-in';
  m.drawImage(mask, 0, 414, W, 325);
  p.translate(0, -410);
  clip(p, waterShape, () => {
    // Pools of wet ink, punctuated by the dry, split end of the same brush.
    for (let i = 0; i < 580; i++) {
      const x = r() * 1340 - 30,
        y = 430 + r() * 298,
        depth = (y - 428) / 300;
      const w = (8 + r() ** 2 * 91) * (0.24 + depth),
        h = (0.4 + r() ** 2 * 3.2) * depth;
      shape(
        p,
        `M${x} ${y}q${w * 0.25} ${-h * 1.6} ${w * 0.53} ${-h * 0.8}t${w * 0.47} ${h * 0.3}q${-w * 0.31} ${h * 1.7} ${-w * 0.62} ${h * 0.61}Z`,
        i % 3 ? 'rgba(11,37,49,.32)' : 'rgba(143,170,158,.21)'
      );
      if (i % 3 === 0) line(p, x + w * 0.18, y - h * 0.8, x + w * 0.56, y - h, 'rgba(174,192,171,.35)', 0.55);
    }
    // Curved, broken nib strokes open out in perspective across the foreground.
    for (let i = 0; i < 4000; i++) {
      const x = r() * 1320 - 20,
        y = 428 + r() * 302,
        z = (y - 427) / 303;
      const l = (1 + r() ** 2.8 * (16 + z * 60)) * (0.6 + 0.53 * z),
        a = 0.09 + r() * 0.31,
        up = (r() - 0.5) * (0.7 + z * 4);
      shape(
        p,
        `M${x} ${y}q${l * 0.42} ${up - 1.3 * z} ${l} ${up}`,
        null,
        r() < 0.55 ? `rgba(180,202,190,${a})` : `rgba(16,49,66,${a + 0.03})`,
        0.3 + r() * (0.49 + z * 0.56)
      );
    }
    // The broken moon path is drawn as slivers of shell-gold.
    for (let i = 0; i < 600; i++) {
      const u = r(),
        y = 434 + u * 306,
        axis = 897 + u * 66 + 19 * Math.sin(u * 12);
      const x = axis + (r() + r() + r() - 1.5) * (8 + 91 * u),
        l = 1 + r() ** 2 * (3 + u * 26);
      line(
        p,
        x,
        y,
        x + l,
        y + (r() - 0.5) * 0.8,
        `rgba(230,211,155,${0.11 + r() * 0.41})`,
        0.36 + r() * (0.5 + u * 0.53)
      );
    }
  });
  return { base, mirror, marks, scale };
}
export function drawWater(g, water, t, awake, blend, power) {
  const { base, marks, scale } = water,
    th = (t * TAU) / 45;
  let mirror = water.mirror;
  if (power >= 0.999) mirror = awake.mirror;
  else if (power > 0.001) {
    const [pic, p] = blend;
    p.clearRect(0, 0, W, 325);
    p.save();
    p.globalAlpha = 1 - power;
    p.drawImage(mirror, 0, 0, W, 325);
    p.globalCompositeOperation = 'lighter';
    p.globalAlpha = power;
    p.drawImage(awake.mirror, 0, 0, W, 325);
    p.restore();
    mirror = pic;
  }
  g.drawImage(base, 0, 0, W, H);
  for (let y = 0; y < 307; ) {
    const z = y / 307,
      ht = Math.min(307 - y, 1.15 + z * 2.5);
    const dx =
      (Math.sin(y * 1.24 + th * 13) + Math.sin(y * 0.285 - th * 8) * 1.4 + Math.cos(y * 0.099 + th * 5)) *
      (0.48 + z * 2.9);
    const extra = (0.42 + z * 0.7) * Math.sin(y * 0.36 + th * 7);
    g.drawImage(mirror, 0, Math.max(0, y + extra) * scale, W * scale, ht * scale, dx, 414 + y, W, ht + 0.14);
    y += ht;
  }
  g.drawImage(marks, 0, 410, W, 315);
}
export function rings(g, x, y, s, phase, power = 1) {
  for (let k = 0; k < 3; k++) {
    const u = (phase + k / 3) % 1,
      rx = s * (5 + u * 39),
      ry = rx * 0.133;
    g.lineWidth = (1 - u) * 0.8 + 0.38;
    g.strokeStyle = `rgba(249,206,126,${(1 - u) * 0.6 * power})`;
    g.beginPath();
    g.ellipse(x, y, rx, ry, 0, 0.16, 2.85);
    g.stroke();
    g.beginPath();
    g.ellipse(x, y, rx * 1.09, ry, 0, 3.39, 5.87);
    g.stroke();
  }
}
export function lightTrail(g, x, y, s, t, alpha) {
  const th = (t * TAU) / 45;
  g.save();
  g.globalAlpha = alpha;
  for (let i = 1; i < 29; i++) {
    const z = i / 29,
      cy = y + s * (2 + i * 1.68),
      dx = Math.sin(i * 8.58 + th * 9) * (1 + i * 0.17) * s;
    const w = s * (5 + 3 * Math.sin(i * 30.1 + th * 7) + z * 5) * (1 - z * 0.62);
    line(g, x + dx - w, cy, x + dx + w, cy + 0.2 * s, `rgba(244,190,104,${0.72 * (1 - z)})`, s * (0.6 + 1.6 * (1 - z)));
  }
  g.restore();
}

// Broken leaf dragged down from the lit inn, the quay lanterns and the guild window.
const columns = [
  [102, 1.25],
  [188, 0.51],
  [241, 0.57],
  [331, 0.38],
  [1010, 0.47],
  [1048, 0.73],
  [1162, 0.68],
  [1238, 0.87]
];
const reflectionDabs = (() => {
  const r = rng(5163),
    out = [];
  for (const [x, s] of columns) {
    const y = bank(x),
      count = Math.ceil(54 * s);
    for (let j = 0; j < count; j++) {
      const u = (j + r()) / count;
      out.push({
        x: x + (r() + r() - 1) * (5 + 17 * u) * s,
        y: y + (7 + u * 115) * s,
        w: (3 + r() ** 1.6 * (8 + 17 * u)) * s,
        h: (0.6 + r() * 1.4) * s,
        u,
        phase: r() * TAU,
        alpha: (0.2 + r() * 0.48) * (1 - u ** 1.6)
      });
    }
  }
  return out;
})();
export function bridgeReflection(g, bridge, scale, t) {
  const a = (t * TAU) / 45;
  g.save();
  for (let j = 0; j < 49; j += 1.35) {
    const u = j / 49,
      dx = (1.1 + 3.8 * u) * (Math.sin(j * 0.84 + a * 6) + 0.72 * Math.sin(j * 0.31 - a * 5));
    g.globalAlpha = (1 - u) ** 0.7 * (0.55 + 0.12 * Math.sin(j * 1.93 + a * 7));
    g.drawImage(bridge, 485 * scale, (427 - j) * scale, 394 * scale, 1.8 * scale, 485 + dx, 428 + j * 0.7, 394, 0.97);
  }
  g.restore();
}
export function lampColumns(g, t) {
  const a = (t * TAU) / 45;
  for (const d of reflectionDabs) {
    const phase = a * 7 + d.phase + d.y * 0.16,
      dx = Math.sin(phase) * (1 + d.u * 4);
    const x = d.x + dx,
      w = d.w * (0.65 + 0.3 * Math.cos(a * 9 + d.phase));
    shape(
      g,
      `M${x - w * 0.54} ${d.y}q${w * 0.35} ${-d.h * 0.75} ${w} ${-d.h * 0.28}q${-w * 0.38} ${d.h * 1.28} ${-w * 0.77} ${d.h * 0.8}Z`,
      `rgba(241,184,106,${d.alpha * (0.77 + 0.23 * Math.sin(phase))})`
    );
  }
}

export function impactWaves(g, surface, events) {
  const breaks = new Path2D();
  const highlights = [];
  for (const { x, y, age, life, size, pole } of events) {
    for (let j = 0; j < 3; j++) {
      const u = (age / life - j * 0.14) / (1 - j * 0.14);
      if (u <= 0 || u >= 1) continue;
      const rx = size * (1 + (pole ? 38 : 27) * (1 - (1 - u) ** 1.5));
      const ry = rx * (0.145 + (0.075 * (y - 428)) / 300);
      const strength = (1 - u) * Math.min(1, u * 14),
        height = strength * size * 1.55;
      // Move the actual reflected pigment through the raised face of the wave.
      for (const [from, to] of [
        [0.13, 2.78],
        [3.34, 5.93]
      ]) {
        const q = new Path2D();
        q.ellipse(x, y, rx, ry + height, 0, from, to);
        q.ellipse(x, y, rx, ry, 0, to, from, true);
        q.closePath();
        breaks.addPath(q);
      }
      const arc = new Path2D();
      arc.ellipse(x, y, rx, ry, 0, 0.08 + 0.31 * u, 2.96 - 0.35 * u);
      highlights.push([arc, strength, pole]);
      const dark = new Path2D();
      dark.ellipse(x, y + 0.6, rx, ry, 0, 3.32, 5.81);
      shape(g, dark, null, `rgba(21,46,53,${strength * (pole ? 0.69 : 0.44)})`, 0.7 + strength * 0.7);
    }
  }
  g.save();
  g.clip(breaks);
  g.drawImage(surface, 2.6, 412.3, W, 315);
  g.restore();
  for (const [arc, strength, pole] of highlights)
    shape(
      g,
      arc,
      null,
      pole ? `rgba(248,213,153,${strength * 0.9})` : `rgba(207,215,191,${strength * 0.81})`,
      pole ? 1.29 : 0.97
    );
}
