import { W, H, ridge, rng, TAU } from './world.js';
import { makeCanvas, oval, poly } from './art.js';

export function fieldPrint(s) {
  const canvas = makeCanvas(1920, 1080),
    g = canvas.getContext('2d', { willReadFrequently: true }),
    r = rng(39);
  g.scale(1920 / W, 1080 / H);
  const color = [
    ['#bac28a', '#d7c895', '#9aaa79'],
    ['#e5cf87', '#f1daa0', '#83a879'],
    ['#55788a', '#80c6c0', '#2a5a73'],
    ['#c3a66c', '#e0bd7d', '#89905c'],
  ][s];
  for (const [x0, width, layer, depth] of [
    [94, 83, 2, 31],
    [416, 52, 1, 21],
    [582, 115, 2, 34],
    [935, 74, 2, 36],
    [1294, 86, 2, 27],
    [1470, 68, 1, 24],
  ]) {
    const xy = (u, v) => {
      const x = x0 + width * u + v * (24 + u * 15);
      const crest = ridge(layer, x),
        gap = ridge(layer + 1, x) - crest;
      return [x, crest + Math.max(3, gap) * (0.19 + depth * 0.002 + v * (0.105 + 0.09 * u))];
    };
    const boundary = [];
    for (let i = 0; i <= 24; i++) boundary.push(xy(i / 24, 0));
    for (let i = 24; i >= 0; i--) boundary.push(xy(i / 24, 1));
    g.save();
    g.globalAlpha = s === 2 ? 0.46 : 0.78;
    poly(g, boundary, color[0]);
    g.clip();
    for (let j = 0; j < 22; j++) {
      const u = j / 21;
      const row = [];
      for (let k = 0; k <= 8; k++) row.push(xy(u, k / 8));
      poly(g, row, null, j % 4 === 0 ? color[2] : color[1], j % 4 === 0 ? 1.3 : 0.95);
    }
    if (s !== 1)
      for (let j = 0; j < 150; j++) {
        const [x, y] = xy(r(), r());
        g.globalAlpha = 0.58;
        oval(g, x, y, 0.95, 0.48, color[j % 3]);
      }
    g.restore();
  }
  return canvas;
}
const flocks = [
  [132, 2, 54, 0.83, 4],
  [605, 2, 71, 0.81, 5],
  [968, 2, 63, 0.66, 4],
  [1458, 2, 66, 0.81, 4],
  [378, 4, 33, 1.18, 3],
  [1323, 4, 29, 1.16, 3],
];
export function grazing(g, s, t, left, right) {
  for (const [base, l, dy, scale, count] of flocks) {
    for (let i = 0; i < count; i++) {
      const x = base + i * 13 + (i % 3) * 5 + Math.sin((t * TAU) / 30 + i) * 1.5;
      if (x < left - 15 || x > right + 15) continue;
      const crest = ridge(l, x),
        space = l < 4 ? Math.max(5, ridge(l + 1, x) - crest) : 180;
      const y =
        crest + Math.min(dy, space * 0.59) + Math.sin(i * 2.83 + base) * Math.min(5, space * 0.08);
      g.save();
      g.translate(x, y);
      g.scale(scale * (i % 3 === 0 ? -1 : 1), scale);
      const wool = ['#eee8ce', '#fff0c9', '#7d9eae', '#e5d3ad'][s],
        shade = ['#a6ad91', '#bebc99', '#375375', '#a79670'][s],
        hooves = s === 2 ? '#244257' : '#525646';
      oval(g, 2, 1, 8, 1.8, s === 2 ? '#182339a8' : '#47543c55');
      for (const leg of [-4, -1, 3, 5])
        poly(
          g,
          [
            [leg, -4],
            [leg + 0.7, 0.3],
          ],
          null,
          hooves,
          0.9,
        );
      oval(g, 0, -5.3, 6.7, 3.8, shade);
      for (let j = 0; j < 6; j++)
        oval(g, -4.7 + j * 1.9, -6.2 - Math.sin(j * 0.62) * 1.2, 2.1, 1.9, wool);
      oval(g, -5.5, -5.2, 2, 1.8, wool);
      const tilt = 0.6 + 0.52 * Math.sin((t * TAU) / 6 + i + base);
      g.translate(5, -6);
      g.rotate(tilt);
      oval(g, 1.7, 0.1, 2.5, 1.55, hooves);
      oval(g, 0.3, -1, 1.1, 0.65, shade);
      g.restore();
    }
  }
}
