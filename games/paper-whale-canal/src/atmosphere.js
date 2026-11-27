import { W, H, TAU, rng, ease, layer, shape, line, rect, ellipse } from './ink.js';
import { bank, smokePorts } from './town.js';

function pine(g) {
  const r = rng(9931);
  function tuft(x, y, s, dir) {
    // Needles emerge in fans, individual hooked strokes on a dry black brush.
    const start = -2.73 + dir * 0.29;
    for (let i = 0; i < 32; i++) {
      const a = start + r() * 3.69,
        l = (5 + r() * 12) * s,
        xx = x + Math.cos(a) * l,
        yy = y + Math.sin(a) * l;
      shape(
        g,
        `M${x} ${y}Q${x + Math.cos(a) * l * 0.61} ${y + Math.sin(a) * l * 0.42 + 1.6 * s} ${xx} ${yy}`,
        null,
        ['#193038', '#203c42', '#2e4848', '#4d6260'][Math.floor(r() * 4)],
        (0.46 + r() * 0.71) * s
      );
    }
    if (r() < 0.78) {
      shape(
        g,
        `M${x - 7 * s} ${y - 4 * s}q${2 * s} ${-3 * s} ${4 * s} ${-2 * s}q${3 * s} ${-5 * s} ${7 * s} ${-1 * s}l${3 * s} ${1 * s}q${-4 * s} ${2 * s} ${-14 * s} ${2 * s}Z`,
        r() < 0.5 ? '#a1b0a6' : '#bdc6b6'
      );
    }
  }
  function branch(x, y, len, angle, w, depth) {
    const h = angle + (r() - 0.5) * 0.29,
      xx = x + Math.cos(h) * len,
      yy = y + Math.sin(h) * len,
      bend = (r() - 0.5) * len * 0.4;
    const cx = x + Math.cos(h) * len * 0.47 - Math.sin(h) * bend,
      cy = y + Math.sin(h) * len * 0.47 + Math.cos(h) * bend;
    shape(
      g,
      `M${x} ${y - w * 0.53}Q${cx} ${cy - w * 0.42} ${xx} ${yy - w * 0.2}L${xx} ${yy + w * 0.28}Q${cx} ${cy + w * 0.48} ${x} ${y + w * 0.59}Z`,
      '#263b3e',
      '#1a3239',
      Math.max(0.6, w * 0.075)
    );
    if (w > 2) {
      shape(
        g,
        `M${x} ${y - w * 0.57}Q${cx} ${cy - w * 0.6 - 1} ${xx} ${yy - w * 0.3}`,
        null,
        w > 6 ? '#a7b5aa' : '#81948c',
        Math.max(0.6, w * 0.12)
      );
      shape(
        g,
        `M${x} ${y + w * 0.11}Q${cx} ${cy - w * 0.12} ${xx} ${yy}`,
        null,
        '#667875',
        Math.max(0.4, w * 0.067)
      );
    }
    if (depth === 0) {
      tuft(xx, yy, 0.64 + r() * 0.47, h);
      return;
    }
    for (let i = 0; i < (depth > 1 ? 3 : 4); i++) {
      const u = 0.45 + i * 0.18,
        ox = (1 - u) ** 2 * x + 2 * u * (1 - u) * cx + u * u * xx,
        oy = (1 - u) ** 2 * y + 2 * u * (1 - u) * cy + u * u * yy;
      const off = (i % 2 === 0 ? -1 : 1) * (0.35 + r() * 0.57);
      branch(ox, oy, len * (0.36 + r() * 0.23), h + off, w * (0.38 + r() * 0.16), depth - 1);
    }
  }
  branch(-52, 5, 149, 0.28, 20, 3);
  branch(-34, 22, 111, 1.04, 15, 3);
  branch(28, -22, 110, 0.28, 12, 3);
  branch(-19, 284, 70, -0.45, 7, 2);
}
function sparrow(g, x, y, s, dir) {
  g.save();
  g.translate(x, y);
  g.scale(s * dir, s);
  shape(g, 'M-7 -4L-15 -8L-11 -3L-6 0Q-2 6 5 3Q9 2 8 -3Q9 -8 5 -9Q1 -11 -1 -6Z', '#263b40', '#26383a', 0.7);
  shape(g, 'M-6 -3Q-1 -7 3 -4Q-1 0 -5 0Z', '#687770');
  shape(g, 'M8 -6L12 -5L8 -4Z', '#665c48');
  ellipse(g, 5.8, -6.8, 0.83, 0.8, '#d8bf8c');
  line(g, 1, 3, -1, 6, '#394239', 0.85);
  line(g, 4, 3, 4, 6, '#394239', 0.8);
  g.restore();
}
export function foreground(g) {
  pine(g);
  sparrow(g, 103, 38, 0.81, 1);
  sparrow(g, 131, 49, 0.64, -1);
  const r = rng(497);
  // Worn timber at the viewer's bank anchors the wider canal composition.
  for (const [x, y, w] of [
    [-9, 665, 22],
    [53, 705, 13],
    [1256, 662, 14],
    [1293, 640, 19]
  ]) {
    const h = 61 + w * 0.55;
    shape(
      g,
      `M${x - w * 0.53} ${y - h}q${w * 0.45} -5 ${w} -.5l-2 ${h}q-5 6 ${-w} 1Z`,
      '#3a4949',
      '#233d43',
      1.7
    );
    for (let i = 0; i < 42; i++) {
      const xx = x - w * 0.47 + r() * w * 0.84,
        yy = y - h + 4 + r() * (h - 12);
      line(g, xx, yy, xx - 0.3, yy + 3 + r() * 13, r() < 0.5 ? '#6e7467' : '#293d40', 0.58 + r() * 0.72);
    }
    ellipse(g, x, y - h, w * 0.55, 3.1, '#a9b3a2');
    ellipse(g, x - 1, y - h - 0.8, w * 0.46, 1.8, '#c9cdb8');
    for (const [dx, h] of [
      [-0.31, 11],
      [0.16, 16],
      [0.33, 7]
    ]) {
      const xx = x + dx * w,
        yy = y - w * 0.55 - 61;
      shape(g, `M${xx - 1.5} ${yy}l3 .3 -1.6 ${h}Z`, '#94aeb1', '#68858a', 0.45);
      line(g, xx - 0.4, yy + 1, xx - 0.3, yy + h * 0.72, '#e0dec3', 0.63);
    }
    for (let i = 0; i < 3; i++)
      shape(g, `M${x - w * 0.52} ${y - h + 13 + i * 2.5}q${w * 0.52} 3 ${w} -.5`, null, '#978766', 1.48);
  }
  shape(g, 'M-8 602Q18 661 54 644Q29 683 -10 640M1255 605Q1279 615 1296 574', null, '#364240', 3.9);
  shape(g, 'M-8 601Q18 660 54 643M1255 604Q1279 614 1296 573', null, '#9c9273', 1);
  for (let i = 0; i < 31; i++) {
    const x = 1257 + r() * 48,
      y = 689 + r() * 43,
      h = 14 + r() * 60,
      xx = x + (r() - 0.4) * 32;
    shape(
      g,
      `M${x} ${y}Q${x - 2} ${y - h * 0.54} ${xx} ${y - h}`,
      null,
      r() < 0.5 ? '#435855' : '#738079',
      0.7 + r() * 1.1
    );
  }
}
const snow = (() => {
  const r = rng(619);
  return Array.from({ length: 420 }, () => [r(), r(), r(), r(), r(), r()]);
})();
function snowX(i, t) {
  const [x, , b, c, d, e] = snow[i],
    a = (t * TAU) / 45;
  return (
    ((x +
      1 +
      Math.sin(a * (1 + Math.floor(e * 2)) + c * TAU) * (i >= 305 ? 0.024 : 0.013) +
      Math.sin(a * 3 + d * TAU) * 0.005) %
      1) *
      1330 -
    25
  );
}
// Both the last airborne position and the first wavefront use the same contact.
export function snowAt(t) {
  const flakes = [],
    impacts = [];
  for (let i = 0; i < snow.length; i++) {
    const [, phase, b, c, d, e] = snow[i],
      front = i >= 305;
    const period = 45 / ((front ? 2 : 1) + Math.floor(c * 2));
    const age = (t + phase * period) % period;
    const settle = front ? 1.95 : 1.27,
      airborne = age >= settle;
    const contact = t - age + (airborne ? period : 0),
      cx = snowX(i, contact);
    const shore = bank(cx) + 4;
    const cy = shore + (front ? 0.32 + 0.68 * e : 0.4 * e) * (716 - shore);
    if (!airborne) {
      impacts.push({ x: cx, y: cy, age, life: settle, size: (front ? 0.72 : 0.24) + b * 0.48 });
    } else {
      const u = (age - settle) / (period - settle),
        x = snowX(i, t);
      const sz = (front ? 0.65 : 0.28) + b * b * (front ? 1.56 : 1.05);
      flakes.push({
        front,
        x,
        y: -22 + (cy + 22) * u,
        sz,
        rx: sz * (0.65 + 0.38 * Math.abs(Math.sin((t * TAU) / 15 + b * 6))),
        alpha: (front ? 0.38 : 0.28) + d * 0.45,
        crystal: front && i % 17 === 0
      });
    }
  }
  return { flakes, impacts };
}
export function snowfall(g, flakes, front) {
  for (const f of flakes) {
    if (f.front !== front) continue;
    ellipse(g, f.x, f.y, f.rx, f.sz, `rgba(229,232,209,${f.alpha})`);
    if (f.crystal) line(g, f.x - f.sz * 1.24, f.y + 0.3, f.x + f.sz * 1.24, f.y - 0.3, 'rgba(230,231,207,.64)', 0.65);
  }
}
export function smoke(g, t) {
  const a = (t * TAU) / 45;
  for (const [x, y, s, seed] of smokePorts()) {
    if (s < 0.56 || seed % 3 === 1) continue;
    // A few sparks leave the same flue as the ink wash and cool in the eddy.
    for (let j = 0; j < 8; j++) {
      const u = ((t * 7) / 45 + j * 0.137 + seed * 0.173) % 1;
      const dx = u * 33 + u * u * 20 + (4 + u * 8) * Math.sin(u * 10 - a * 3 + seed) * u;
      const px = x + s * (dx + Math.sin(j * 4 + u * 6) * 3 * u);
      const py = y - s * (u * 80 + Math.sin(j + u * 8) * 2);
      const glow = Math.sin(Math.PI * u) ** 0.65;
      ellipse(
        g,
        px,
        py,
        s * (1.25 - 0.65 * u),
        s * (1.6 - 0.7 * u),
        `rgba(247,${Math.round(158 + 44 * (1 - u))},97,${glow * 0.84})`
      );
    }
    for (let j = 0; j < 6; j++) {
      const p = new Path2D(),
        u0 = j * 0.045;
      for (let k = 0; k <= 32; k++) {
        const u = u0 + (k / 32) * 0.71,
          px = x + s * (u * 25 + u * u * 18 + u * (8 + j * 1.3) * Math.sin(9 * u - a * 3 + seed) + j * 0.55),
          py = y - s * (u * 70 + u * 3 * Math.sin(a * 2 + seed + u * 5));
        if (k) p.lineTo(px, py);
        else p.moveTo(px, py);
      }
      shape(g, p, null, `rgba(204,209,187,${0.067 - j * 0.006})`, s * (2.6 + j * 0.32));
    }
  }
}
export function flyingBirds(g, t) {
  // A small flock lifts from the ridge as the whale clears the roofs.
  let vis = ease(12.5, 15, t) * (1 - ease(27, 30, t));
  if (!vis) return;
  g.save();
  g.globalAlpha = 0.82 * vis;
  for (let i = 0; i < 8; i++) {
    const u = (t - 13) * 0.058,
      x = 626 + i * 9 - u * 163,
      y = 318 - (i % 4) * 8 - u * 122 + Math.sin(t * 0.61 + i) * 3;
    const h = 2.3 * Math.sin(t * (4 + i * 0.13) + i);
    shape(g, `M${x - 4} ${y + h}q2 -1 4 ${-h + 0.7}q2 ${h - 1} 4 ${h - 0.4}`, null, '#324b53', 1);
  }
  g.restore();
}
export function makeBorder(paper, scale) {
  const [el, g] = layer(W, H, scale),
    r = rng(127);
  const color = '#b1af96';
  for (const [y, sign] of [
    [0, 1],
    [720, -1]
  ]) {
    const p = new Path2D();
    p.moveTo(0, y);
    for (let x = 0; x <= 1282; x += 2) p.lineTo(x, y + sign * (4.8 + Math.sin(x * 0.034) * 0.49 + r() * 1.6));
    p.lineTo(1282, y);
    p.closePath();
    shape(g, p, color);
  }
  for (const [x, sign] of [
    [0, 1],
    [1280, -1]
  ]) {
    const p = new Path2D();
    p.moveTo(x, 0);
    for (let y = 0; y <= 722; y += 2) p.lineTo(x + sign * (4.8 + Math.sin(y * 0.039) * 0.55 + r() * 1.45), y);
    p.lineTo(x, 722);
    p.closePath();
    shape(g, p, color);
  }
  for (let i = 0; i < 6800; i++) {
    let x = r() * 1280,
      y = r() * 720,
      dist = 3 + r() ** 3 * 13,
      side = i % 4;
    if (side === 0) y = dist;
    if (side === 1) x = 1280 - dist;
    if (side === 2) y = 720 - dist;
    if (side === 3) x = dist;
    rect(
      g,
      x,
      y,
      0.25 + r() * 1.2,
      0.3 + r() * 0.86,
      r() < 0.72 ? 'rgba(213,205,165,.48)' : 'rgba(43,57,54,.5)'
    );
  }
  g.save();
  g.globalCompositeOperation = 'source-atop';
  g.globalAlpha = 0.29;
  rect(g, 0, 0, W, H, g.createPattern(paper, 'repeat'));
  g.restore();
  return el;
}
