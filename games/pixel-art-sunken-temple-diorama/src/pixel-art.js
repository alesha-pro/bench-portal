// All illustration is drawn on integer pixel grids, including the transparent silhouettes.
export function random(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export function bitmap(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const rect = (x, y, w, h, c) => {
    ctx.fillStyle = c;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  };
  function line(x, y, u, v, c, th = 1) {
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(x - u), Math.abs(y - v))));
    for (let i = 0; i <= n; i++) rect(x + ((u - x) * i) / n, y + ((v - y) * i) / n, th, th, c);
  }
  function poly(points, c) {
    const ys = points.map((p) => p[1]);
    for (let y = Math.floor(Math.min(...ys)); y <= Math.ceil(Math.max(...ys)); y++) {
      const hits = [];
      for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        const [x1, y1] = points[i],
          [x2, y2] = points[j],
          s = y + 0.5;
        if (y1 > s !== y2 > s) hits.push(x1 + ((s - y1) * (x2 - x1)) / (y2 - y1));
      }
      hits.sort((a, b) => a - b);
      for (let i = 0; i + 1 < hits.length; i += 2) {
        const start = Math.ceil(hits[i] - 0.5);
        rect(start, y, Math.ceil(hits[i + 1] - 0.5) - start, 1, c);
      }
    }
  }
  function ellipse(x, y, rx, ry, c) {
    for (let j = Math.ceil(-ry); j <= ry; j++) {
      const half = Math.round(rx * Math.sqrt(Math.max(0, 1 - (j * j) / (ry * ry))));
      rect(x - half, y + j, half * 2 + 1, 1, c);
    }
  }
  return { canvas, ctx, rect, line, poly, ellipse };
}

const forest = ['#162f32', '#23473d', '#315947', '#477143', '#638849', '#94a351', '#c4bc6a'];
export function foliage(kind, seed, colors = forest) {
  const s = bitmap(96, 104),
    r = random(seed),
    { line, rect, poly, ellipse } = s;
  const c = colors,
    ox = 47,
    oy = 101;
  if (kind === 'palm') {
    const lean = (r() - 0.5) * 30,
      cx = ox + lean,
      cy = 29 + r() * 6;
    for (let j = 0; j < 67; j++) {
      const k = j / 66,
        x = ox + lean * k * k + 4 * Math.sin(k * Math.PI);
      const w = 6 - 3 * k,
        y = oy + (cy - oy) * k;
      rect(x - w / 2, y, w + 1, 2, c[0]);
      rect(x - w / 2, y, w * 0.55, 2, c[2]);
      if (j % 7 === 0) rect(x - w / 2, y, w, 1, c[4]);
    }
    // Individual pinnae share a curved central rib. The broad, serrated
    // silhouette survives the reduction to just a few dozen screen pixels.
    const fans = [
      [-28, -11, 14],
      [25, -13, 14],
      [-40, 2, 12],
      [41, 5, 13],
      [-33, 15, 13],
      [33, 18, 13],
      [-20, 24, 11],
      [19, 26, 11],
      [-10, -11, 12],
      [11, -10, 12],
    ];
    fans.forEach(([span, fall, lift], i) => {
      const dx = span * (0.92 + r() * 0.1),
        end = fall + r() * 3;
      const col = c[i < 2 ? 2 : i % 2 ? 3 : 4],
        lit = c[i % 2 ? 4 : 5];
      const arc = (t) => [cx + dx * t, cy + end * t - Math.sin(t * Math.PI) * lift];
      for (let j = 1; j <= 14; j++) {
        const k = j / 14,
          [x, y] = arc(k),
          [px, py] = arc((j - 1) / 14);
        const spread = (2 + 6 * Math.sin(Math.pow(k, 0.78) * Math.PI)) * (1.12 - k * 0.38);
        const ex = x + Math.sign(dx) * spread * 0.95,
          ey = y + spread * (0.85 + k * 0.15);
        poly(
          [
            [px, py],
            [x, y - 1],
            [ex, ey],
            [ex - Math.sign(dx) * 3, ey - 1],
            [px, py + 2],
          ],
          col,
        );
        if (j % 3 !== 0) line(px, py, ex - Math.sign(dx) * 1.4, ey - 2, lit);
        line(px, py, x, y, i % 3 ? col : lit, 1);
      }
    });
    ellipse(cx, cy, 3, 2, c[2]);
  } else if (kind === 'tree') {
    const cx = 43 + r() * 12,
      cy = 36;
    poly(
      [
        [37, 102],
        [44, 75],
        [41, 40],
        [48, 40],
        [49, 68],
        [58, 43],
        [53, 74],
        [50, 97],
        [55, 102],
      ],
      c[0],
    );
    line(46, 95, 47, 67, c[3], 2);
    for (let i = 0; i < 18; i++) {
      let x = 12 + r() * 72,
        y = 23 + r() * 29;
      line(46, 77, x, y, c[1], 3);
    }
    const lobes = [];
    for (let i = 0; i < 31; i++) {
      const angle = r() * Math.PI * 2,
        spread = Math.sqrt(r());
      lobes.push([cx + Math.cos(angle) * spread * 32, cy + Math.sin(angle) * spread * 18, 5 + r() * 9]);
    }
    lobes.sort((a, b) => b[1] - a[1]);
    function clump(x, y, rad) {
      const main = rad * 0.75;
      ellipse(x, y, rad, main, c[1]);
      for (let j = 0; j < 24; j++) {
        const a = r() * Math.PI * 2,
          d = Math.sqrt(r());
        const tx = x + Math.cos(a) * d * rad,
          ty = y + Math.sin(a) * d * main;
        const lit = ((x / 96) * 0.2 + 1 - (ty - y + main) / (main * 2)) * 0.64 + r() * 0.42;
        const shade = lit > 0.89 ? 5 : lit > 0.74 ? 4 : lit > 0.56 ? 3 : 2;
        poly(
          [
            [tx - 3, ty + 1],
            [tx - 1, ty - 2],
            [tx + 3, ty - 3],
            [tx + 2, ty],
            [tx, ty + 2],
          ],
          c[shade],
        );
        if (shade >= 4) rect(tx - 1, ty - 2, 2, 1, c[Math.min(5, shade + 1)]);
      }
    }
    lobes.forEach(([x, y, rad]) => clump(x, y, rad));
    for (let i = 0; i < 13; i++) {
      let x = 14 + r() * 65,
        y = 49 + r() * 5,
        len = r() * 20;
      line(x, y, x - 1, y + len, c[1]);
      rect(x - 2, y + len - 2, 2, 2, c[3]);
    }
  } else {
    const count = kind === 'fern' ? 13 : 16;
    for (let i = 0; i < count; i++) {
      let angle = -Math.PI * 0.99 + ((i + 0.4) * Math.PI) / count + (r() - 0.5) * 0.23;
      let length = 24 + r() * 25;
      let dx = Math.cos(angle) * length,
        dy = Math.sin(angle) * length;
      const col = c[2 + Math.floor(r() * 3)];
      if (kind === 'fern') {
        for (let j = 1; j < 14; j++) {
          let k = j / 14,
            x = ox + k * dx,
            y = oy + k * dy - Math.sin(k * Math.PI) * 7;
          let spread = (1 - k) * 6 + 1;
          line(
            x,
            y,
            x + dx * 0.09 - (dy * 0.11 * spread) / 4,
            y + dy * 0.09 + (dx * 0.11 * spread) / 4,
            col,
            2,
          );
          line(
            x,
            y,
            x + dx * 0.09 + (dy * 0.11 * spread) / 4,
            y + dy * 0.09 - (dx * 0.11 * spread) / 4,
            col,
            2,
          );
          rect(x, y, 1, 1, c[5]);
        }
      } else {
        const k = 0.45,
          off = 3 + r() * 3,
          ex = ox + dx,
          ey = oy + dy;
        const midY = oy + dy * k - 6;
        poly(
          [
            [ox, oy],
            [ox + dx * k + (dy / length) * off, midY - (dx / length) * off],
            [ex, ey],
            [ox + dx * k - (dy / length) * off, midY + (dx / length) * off],
          ],
          col,
        );
        line(ox, oy, ox + dx * k, midY, c[5]);
        line(ox + dx * k, midY, ex, ey, c[4]);
      }
    }
    if (kind === 'flower')
      for (let i = 0; i < 5; i++) {
        const x = 26 + r() * 41,
          y = 55 + r() * 25;
        line(ox, oy, x, y, c[3]);
        for (let j = 0; j < 3; j++) {
          poly(
            [
              [x, y + j * 3],
              [x + (j % 2 ? 5 : -5), y + j * 3 - 4],
              [x + (j % 2 ? 4 : -4), y + j * 3 + 1],
              [x, y + j * 3 + 3],
            ],
            j % 2 ? '#ef8b51' : '#d65d49',
          );
        }
        rect(x - 1, y - 2, 2, 3, '#ffd27a');
      }
  }
  return s.canvas;
}

const skies = [
  ['#a3c3a8', '#f6dba8', '#fff1bd', '#a4ba9c', '#739e8f', '#568b80', '#386e68', '#255853', '#204541'],
  ['#eabb86', '#f9dca0', '#fff2bc', '#bab995', '#91a995', '#71988a', '#567f74', '#3b6861', '#305751'],
  ['#252e50', '#667589', '#c9dcda', '#59687a', '#455d71', '#334d63', '#263f52', '#213648', '#192d3b'],
];

export function landscape(mode, seed = 211) {
  const W = 720,
    H = 340,
    s = bitmap(W, H),
    { ctx, rect, ellipse, line, poly } = s,
    r = random(seed),
    C = skies[mode];
  const grad = ctx.createLinearGradient(0, 0, 0, H * 0.72);
  grad.addColorStop(0, C[0]);
  grad.addColorStop(0.63, C[1]);
  grad.addColorStop(1, C[3]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  ellipse(190, 74, 24, 24, C[2]);
  for (let i = 0; i < 54; i++) {
    const x = r() * W,
      y = 20 + r() * 111,
      w = 5 + r() * 48;
    ctx.globalAlpha = 0.15 + r() * 0.3;
    rect(x, y, w, 1 + Math.floor(r() * 3), C[2]);
    rect(x + 4, y - 2, w * 0.58, 2, C[2]);
  }
  ctx.globalAlpha = 1;
  if (mode === 2) for (let i = 0; i < 95; i++) rect(r() * W, r() * 83, 1, 1, C[2]);
  for (let layer = 0; layer < 5; layer++) {
    const ridge = [],
      base = 112 + layer * 34;
    let fine = 0;
    for (let x = -2; x < W + 2; x += 2) {
      fine = fine * 0.81 + (r() - 0.48) * (3 + layer);
      let y = base + Math.sin(x * 0.018 + layer * 1.91) * 15 + Math.sin(x * 0.041 + layer) * 5 + fine;
      y += 19 * Math.sin((x / W) * Math.PI);
      if (layer === 0 || layer === 2) y -= Math.pow((Math.sin(x * 0.029 + layer) + 1) / 2, 8) * 22;
      ridge.push([x, Math.round(y)]);
    }
    const col = C[3 + layer];
    poly([...ridge, [W, H], [0, H]], col);
    for (let j = 3; j < ridge.length - 4; j += 2 + Math.floor(r() * 3)) {
      let [x, y] = ridge[j];
      const size = (3 + layer * 1.05) * (0.5 + r());
      line(x, y, x + 1, y - size, col);
      ellipse(x + 1, y - size, size * 0.65, size * 0.58, col);
      if (r() < 0.2) {
        line(x, y, x + 1, y - size * 2, col);
        for (let n = 0; n < 6; n++) {
          const dx = (n % 2 ? 1 : -1) * size * (0.5 + r() * 0.7);
          line(x + 1, y - size * 2, x + dx * 0.6, y - size * 2 - 2, col);
          line(x + dx * 0.6, y - size * 2 - 2, x + dx, y - size * 2 + r() * 3, col);
        }
      }
    }
    ctx.globalAlpha = 0.36;
    for (let j = 0; j < 22; j++)
      rect(r() * W, base + 20 + r() * 20, 8 + r() * 63, 1 + Math.floor(r() * 2), C[layer + 2]);
    ctx.globalAlpha = 1;
  }
  // Framing branches on the outer edges of the painted, distant canopy.
  for (let side = 0; side < 2; side++) {
    ctx.save();
    if (side) {
      ctx.translate(W, 0);
      ctx.scale(-1, 1);
    }
    const ink = C[8];
    poly(
      [
        [0, 0],
        [42, 0],
        [52, 10],
        [77, 11],
        [94, 18],
        [66, 14],
        [49, 15],
        [31, 9],
        [0, 18],
      ],
      ink,
    );
    for (let i = 0; i < 39; i++) {
      const x = r() * 92,
        y = (x / 92) * 12 - 2 + r() * 3,
        dx = 3 + r() * 5,
        dy = 3 + r() * 10;
      poly(
        [
          [x, y],
          [x + dx, y + 2],
          [x + dx * 1.3, y + dy],
          [x + 2, y + dy * 0.6],
        ],
        ink,
      );
    }
    ctx.restore();
  }
  // Closer leaves and aerial roots bracket the painted valley.
  for (let side = 0; side < 2; side++) {
    ctx.save();
    if (side) {
      ctx.translate(W, 0);
      ctx.scale(-1, 1);
    }
    let ink = C[8],
      light = C[7];
    for (let j = 0; j < 3; j++) {
      const x = 22 + j * 17,
        top = j * 3,
        len = 19 + r() * 29;
      line(x, top, x - 3, top + len * 0.54, ink, 2);
      line(x - 3, top + len * 0.54, x + 1, len, ink);
      for (let k = 0; k < 4; k++) {
        const y = top + (len * k) / 5;
        poly(
          [
            [x - 2, y],
            [x + (k % 2 ? -6 : 5), y + 1],
            [x + (k % 2 ? -8 : 6), y + 8],
            [x - 2, y + 4],
          ],
          ink,
        );
      }
    }
    const ox = 13,
      oy = H - 5;
    for (let j = 0; j < 18; j++) {
      const dx = 4 + r() * 91,
        dy = -(12 + r() * 69);
      const x = ox + dx,
        y = oy + dy,
        mid = [ox + dx * 0.46, oy + dy * 0.67];
      poly(
        [
          [ox, oy],
          [mid[0] - 6, mid[1] - 1],
          [x, y],
          [mid[0] + 3, mid[1] + 10],
        ],
        ink,
      );
      if (j % 3 === 0) line(ox, oy, mid[0], mid[1], light);
    }
    // One long feathered palm frond entering from each upper corner.
    for (let j = 0; j < 25; j++) {
      const k = j / 24,
        x = 4 + k * 118,
        y = 2 + k * 12 - 15 * Math.sin(k * Math.PI),
        v = Math.sin(k * Math.PI) * 10 + 2;
      poly(
        [
          [x - 4, y],
          [x + 2, y],
          [x + v * 0.75, y + v * 1.6],
          [x - 3, y + 4],
        ],
        ink,
      );
    }
    ctx.restore();
  }
  return s.canvas;
}
