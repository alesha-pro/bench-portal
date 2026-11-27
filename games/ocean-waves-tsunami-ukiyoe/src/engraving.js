// Seeded pigment plates and kozo fibres. All textures are generated locally.
import * as T from 'three';

export function random(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
function board(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}
function texture(c, repeat = false) {
  const tex = new T.CanvasTexture(c);
  if (repeat) tex.wrapS = tex.wrapT = T.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

export function fibres() {
  const [c, g] = board(512, 512),
    r = random(108);
  const img = g.createImageData(512, 512);
  for (let i = 0; i < img.data.length; i += 4) {
    let n = 120 + (r() + r() - 1) * 92;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = n;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  for (let i = 0; i < 4400; i++) {
    let x = r() * 512,
      y = r() * 512,
      l = 1 + r() ** 3 * 18,
      a = r() * Math.PI;
    let dx = Math.cos(a) * l,
      dy = Math.sin(a) * l * 0.6;
    g.strokeStyle = r() < 0.5 ? 'rgba(255,255,245,.33)' : 'rgba(33,25,18,.22)';
    g.lineWidth = 0.24 + r() * 0.7;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + dx * 0.5 + 0.7, y + dy * 0.5 - 0.4, x + dx, y + dy);
    g.stroke();
  }
  return texture(c, true);
}

// Long tapered cuts, split nibs and intermittent veins follow the water's flow.
export function waterPlate() {
  const w = 2048,
    h = 1536,
    [c, g] = board(w, h),
    r = random(453);
  g.fillStyle = '#296486';
  g.fillRect(0, 0, w, h);
  const colors = ['#102f52', '#184c74', '#3d819d', '#71a3b0', '#183d5b', '#a0bebb', '#c3d1c2'];
  function cut(start, end, y, width, k, phase, color, bend) {
    const points = [];
    for (let j = 0; j <= 60; j++) {
      let t = j / 60,
        x = start + (end - start) * t;
      const flow = 38 * Math.sin(x * 0.003 + y * 0.004) + 21 * Math.sin(x * 0.007 + y * 0.009);
      let mid = y + flow + Math.sin(t * 3.2 + phase) * bend + k * t;
      let a =
        width *
        Math.pow(Math.max(0.0001, Math.sin(t * Math.PI)), 0.63) *
        (1 + 0.21 * Math.sin(phase + t * 9));
      points.push([x, mid, a]);
    }
    g.fillStyle = color;
    g.beginPath();
    for (let j = 0; j < points.length; j++) {
      let [x, y, a] = points[j];
      j ? g.lineTo(x, y - a) : g.moveTo(x, y - a);
    }
    for (let j = points.length - 1; j >= 0; j--) {
      let [x, y, a] = points[j];
      g.lineTo(x, y + a);
    }
    g.closePath();
    g.fill();
  }
  for (let row = -12; row < 135; row++) {
    let y = row * 13.5 + r() * 7;
    let x = -900 + r() * 760;
    while (x < w) {
      let len = 350 + r() ** 1.2 * 1300,
        phase = r() * 6,
        shift = (r() - 0.5) * 26,
        bend = (r() - 0.5) * 30;
      const idx = Math.floor(r() * 5);
      cut(x, x + len, y, 2 + r() ** 2 * 12, shift, phase, colors[idx], bend);
      if (r() < 0.73)
        cut(
          x + len * 0.025,
          x + len * 0.86,
          y + 3 + r() * 7,
          0.7 + r() * 2.2,
          shift,
          phase,
          colors[r() < 0.66 ? 3 : 5],
          bend
        );
      if (r() < 0.23)
        cut(x + len * 0.08, x + len * 0.46, y + 6, 1 + r() * 2, shift, phase, colors[6], bend);
      x += len + 10 + r() * 85;
    }
  }
  return texture(c);
}

// A transparent keyblock. Pools, narrow ligaments and flecks are drawn in
// the local coordinates of the breaking sheet and stay attached as it rolls.
export function foamPlate() {
  const w = 2048,
    h = 2048,
    [c, g] = board(w, h),
    r = random(703);
  const edge = (y) =>
    w *
    (0.343 +
      0.022 * Math.sin((y / h) * 28 + 0.6 * Math.sin((y / h) * 57)) +
      0.009 * Math.sin((y / h) * 89));
  const lip = (y) => w * (0.497 + 0.012 * Math.sin((y / h) * 57 + 0.5 * Math.sin((y / h) * 43)));
  const bone = '#efe8cf',
    chalk = '#fff3d8',
    cool = '#a1bab8',
    blue = '#447589';
  g.fillStyle = bone;
  g.beginPath();
  g.moveTo(edge(0), -2);
  for (let y = -2; y <= h + 4; y += 3) g.lineTo(edge(y), y);
  for (let y = h + 4; y >= -2; y -= 3) g.lineTo(lip(y), y);
  g.closePath();
  g.fill();
  // Swept tongues split along the scalloped rear edge. Each tongue returns
  // to the main mass, leaving a little crescent of Prussian blue in the cut.
  for (let i = 0; i < 255; i++) {
    const y = r() * h,
      x = edge(y) + 5,
      len = 8 + r() ** 1.65 * 132,
      b = 3 + r() ** 1.2 * 17,
      dy = (r() - 0.48) * 46;
    g.fillStyle = r() < 0.26 ? cool : bone;
    g.beginPath();
    g.moveTo(x + 4, y - b);
    g.bezierCurveTo(x - len * 0.36, y - b * 1.1, x - len * 0.78, y + dy - b * 1.5, x - len, y + dy);
    g.bezierCurveTo(
      x - len * 0.97,
      y + dy + b * 1.17,
      x - len * 0.92,
      y + dy + b * 1.56,
      x - len * 0.78,
      y + dy + b * 1.6
    );
    g.bezierCurveTo(
      x - len * 0.97,
      y + dy + b * 0.32,
      x - len * 0.75,
      y + dy - b * 0.31,
      x - len * 0.61,
      y + dy + b * 0.2
    );
    g.bezierCurveTo(x - len * 0.4, y + dy + b * 1.3, x - len * 0.15, y + b * 0.2, x + 4, y + b);
    g.fill();
  }
  function pool(x, y, l, b, tilt, col) {
    g.save();
    g.translate(x, y);
    g.rotate(tilt);
    g.fillStyle = col;
    g.beginPath();
    g.moveTo(-l * 0.55, 0);
    g.bezierCurveTo(-l * 0.35, -b * 0.78, l * 0.13, -b, l * 0.46, -b * 0.22);
    g.bezierCurveTo(l * 0.62, b * 0.53, l * 0.23, b * 0.85, -l * 0.05, b * 0.69);
    g.bezierCurveTo(-l * 0.34, b * 0.61, -l * 0.31, b * 0.2, -l * 0.55, 0);
    g.fill();
    g.restore();
  }
  for (let i = 0; i < 5300; i++) {
    const y = r() * h,
      x = T.MathUtils.lerp(edge(y) - 4, lip(y) - 6, r()),
      angle = -0.23 + 0.47 * Math.sin(x * 0.025 + y * 0.032);
    const l = 2 + r() ** 2.2 * 36,
      b = 0.85 + r() ** 1.8 * 6;
    pool(x, y, l + 4, b + 1.4, angle, r() < 0.62 ? cool : chalk);
    if (r() < 0.75) pool(x - 1, y, l, b * 0.83, angle, r() < 0.26 ? blue : '#70969e');
  }
  for (let i = 0; i < 5000; i++) {
    let y = r() * h,
      pos = r() ** 1.7,
      x = edge(y) - pos * 147;
    if (r() > 1 - pos * 0.72) continue;
    pool(
      x,
      y,
      0.7 + r() ** 2.8 * 14,
      0.5 + r() ** 2 * 3,
      (r() - 0.55) * 1.4,
      r() < 0.82 ? bone : cool
    );
  }
  return texture(c);
}

// A seamless sea plate. Each group is printed across both edges of the tile.
export function seaPlate() {
  const w = 1536,
    h = 1024,
    [c, g] = board(w, h),
    r = random(1723);
  g.fillStyle = '#30637d';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 780; i++) {
    const x = r() * w,
      y = r() * h,
      l = 20 + r() ** 1.4 * 370,
      width = 0.8 + r() ** 2 * 8,
      amp = (r() - 0.54) * 20,
      roll = r() * 6.28;
    const col = ['#194663', '#234e68', '#55879b', '#6995a4', '#87a7a8', '#396f88'][
      Math.floor(r() * 6)
    ];
    for (let dx of [-w, 0, w])
      for (let dy of [-h, 0, h]) {
        const xx = x + dx,
          yy = y + dy;
        if (xx + l < 0 || xx > w || yy + 35 < 0 || yy - 35 > h) continue;
        for (let k = 0; k < (i % 3 === 0 ? 3 : 1); k++) {
          g.beginPath();
          for (let side of [-1, 1])
            for (let j = 0; j <= 25; j++) {
              const u = side === -1 ? j / 25 : 1 - j / 25;
              const py =
                yy +
                k * (width + 2) +
                amp * Math.sin(u * 3.8 + roll) +
                side * width * (k ? 0.19 : 1) * Math.sin(Math.PI * u) ** 0.76;
              if (side === -1 && !j) g.moveTo(xx, py);
              else g.lineTo(xx + l * u, py);
            }
          g.closePath();
          g.fillStyle = k ? '#94aca8' : col;
          g.fill();
        }
      }
  }
  return texture(c, true);
}
export function whitecaps() {
  const w = 1024,
    h = 1024,
    [c, g] = board(w, h),
    r = random(3008);
  for (let i = 0; i < 52; i++) {
    let x = r() * w,
      y = r() * h,
      len = 19 + 92 * r() ** 1.3,
      b = 2 + r() * 6;
    for (let ox of [-w, 0, w])
      for (let oy of [-h, 0, h]) {
        const xx = x + ox,
          yy = y + oy;
        if (xx + len + 4 < 0 || xx - 3 > w || yy + 22 < 0 || yy - 22 > h) continue;
        for (let j = 0; j < 3; j++) {
          let shift = j * 2.2,
            extent = len * (1 - j * 0.18);
          g.beginPath();
          g.moveTo(xx, yy + shift);
          g.bezierCurveTo(
            xx + 0.27 * extent,
            yy + shift + b,
            xx + 0.54 * extent,
            yy + shift - b * 1.3,
            xx + extent,
            yy + shift - b * 0.49
          );
          g.bezierCurveTo(
            xx + 0.59 * extent,
            yy + shift - b * 1.05,
            xx + 0.38 * extent,
            yy + shift + b * 1.34,
            xx,
            yy + shift
          );
          g.fillStyle = j === 1 ? '#9bb9ba' : '#e6e4c9';
          g.fill();
        }
        for (let j = 0; j < 17; j++) {
          const u = r(),
            px = xx + u * len,
            py = yy + (r() - 0.4) * b * 2.4 - b * 0.7 * u;
          g.fillStyle = r() < 0.63 ? '#e9e4c9' : '#a2bebc';
          g.beginPath();
          g.ellipse(px, py, 0.4 + r() * 1.9, 0.4 + r() * 0.92, -0.27, 0, Math.PI * 2);
          g.fill();
        }
      }
  }
  return texture(c, true);
}
export function skyPlate(night = false) {
  const [c, g] = board(4096, 1024),
    r = random(3267);
  const gradient = g.createLinearGradient(0, 0, 0, 1024);
  const stops = night
    ? [
        [0, '#101c37'],
        [0.44, '#273858'],
        [0.7, '#657088'],
        [0.85, '#9b9b9e'],
        [1, '#6a7e8d']
      ]
    : [
        [0, '#8b9da4'],
        [0.32, '#d89b8a'],
        [0.52, '#edb295'],
        [0.72, '#f6ce9c'],
        [0.88, '#f6e2b4'],
        [1, '#c5c0a7']
      ];
  for (const [s, col] of stops) gradient.addColorStop(s, col);
  g.fillStyle = gradient;
  g.fillRect(0, 0, c.width, c.height);
  if (night)
    for (let i = 0; i < 950; i++) {
      let x = r() * 4096,
        y = r() * 680;
      g.fillStyle = 'rgba(250,235,189,' + r() * 0.65 + ')';
      g.fillRect(x, y, 0.7 + r() * 1.4, 0.9 + r());
    }
  // Flat-bottomed cloud banks with gently piled, engraved crowns.
  for (let i = 0; i < 100; i++) {
    let x = r() * 4096,
      y = 300 + r() * 650,
      w = 45 + r() ** 1.8 * 350,
      h = 2 + r() ** 2 * 20;
    let tones = night
      ? ['#7c8193', '#646e85', '#88909c', '#a0a4a6']
      : ['#e6aa91', '#eeb296', '#efc0a0', '#f9d9b0', '#f8ddbb'];
    let color = tones[Math.floor(r() * tones.length)];
    g.fillStyle = color;
    g.beginPath();
    g.moveTo(x - w * 0.6, y);
    g.bezierCurveTo(
      x - w * 0.48,
      y - h * 0.25,
      x - w * 0.28,
      y - h * 0.44,
      x - w * 0.17,
      y - h * 0.5
    );
    g.bezierCurveTo(
      x - w * 0.12,
      y - h * 1.4,
      x + w * 0.04,
      y - h * 1.3,
      x + w * 0.11,
      y - h * 0.7
    );
    g.bezierCurveTo(
      x + w * 0.2,
      y - h * 0.95,
      x + w * 0.31,
      y - h * 0.48,
      x + w * 0.34,
      y - h * 0.36
    );
    g.quadraticCurveTo(x + w * 0.57, y - h * 0.18, x + w * 0.7, y);
    g.closePath();
    g.fill();
    g.globalAlpha = 0.7;
    g.fillRect(x - w * 0.48, y + 2, w * 0.93, 1 + r() * 1.5);
    g.globalAlpha = 1;
  }
  // Embossed bands of kasumi, with scalloped gold tops and horizontal cuts.
  function cloud(x, y, w, h, depth) {
    g.save();
    g.translate(x, y);
    g.scale(w, h);
    g.beginPath();
    g.moveTo(-0.69, 0);
    g.bezierCurveTo(-0.54, -0.06, -0.45, -0.11, -0.32, -0.12);
    g.bezierCurveTo(-0.3, -0.32, -0.23, -0.35, -0.17, -0.32);
    g.bezierCurveTo(-0.13, -0.77, -0.03, -0.88, 0.04, -0.67);
    g.bezierCurveTo(0.085, -1.12, 0.2, -1.06, 0.247, -0.71);
    g.bezierCurveTo(0.32, -0.79, 0.39, -0.53, 0.42, -0.31);
    g.bezierCurveTo(0.48, -0.33, 0.55, -0.12, 0.57, -0.1);
    g.lineTo(0.86, 0);
    g.closePath();
    g.fillStyle = night ? (depth ? '#73798b' : '#646c82') : depth ? '#e2aa90' : '#dc9e89';
    g.fill();
    g.restore();
    g.fillStyle = night ? '#a0a1a5' : '#f6d0a7';
    g.fillRect(x - w * 0.6, y + 1, w * 1.35, 1.8);
    g.fillStyle = night ? '#747c90' : '#dfaa93';
    g.fillRect(x - w * 0.46, y + 4, w * 1.41, 1.05);
    for (let j = 0; j < 12; j++) {
      let u = r() * 0.76 - 0.24;
      g.fillStyle = night ? 'rgba(196,192,176,.25)' : 'rgba(255,218,170,.58)';
      g.fillRect(x + u * w, y - (1 + r() * 4), w * (0.1 + r() * 0.21), 0.6 + r() * 0.96);
    }
  }
  for (let [x, y, w, h, d] of [
    [1720, 588, 108, 14, 0],
    [1855, 670, 122, 13, 1],
    [2241, 600, 138, 20, 0],
    [2165, 724, 105, 9, 1],
    [2350, 759, 183, 16, 1],
    [1600, 755, 109, 10, 1],
    [1994, 482, 222, 11, 0],
    [2400, 500, 170, 18, 0]
  ])
    cloud(x, y, w, h, d);
  return texture(c);
}

export function insignia() {
  const [c, g] = board(200, 460);
  g.fillStyle = '#efdfba';
  g.fillRect(2, 2, 195, 455);
  g.strokeStyle = '#352f30';
  g.lineWidth = 4;
  g.strokeRect(5, 5, 188, 447);
  g.lineWidth = 1.7;
  g.strokeRect(12, 12, 174, 433);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = '#232e39';
  const family = '"Noto Serif CJK JP","Studio Mincho","Yu Mincho",serif';
  g.font = 'bold 63px ' + family;
  [...'神奈川沖'].forEach((s, i) => g.fillText(s, 135, 69 + i * 92));
  g.font = 'bold 58px ' + family;
  [...'浪裏'].forEach((s, i) => g.fillText(s, 57, 160 + i * 90));
  return texture(c);
}
export function seal() {
  const [c, g] = board(128, 128),
    r = random(829);
  g.fillStyle = '#ae3b2c';
  g.fillRect(5, 4, 118, 119);
  g.strokeStyle = '#f3d7ac';
  g.lineWidth = 3;
  g.strokeRect(11, 10, 105, 107);
  g.fillStyle = '#f6dbb4';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = 'bold 47px "Noto Serif CJK JP","Studio Mincho",serif';
  ['木', '版', '波', '印'].forEach((s, i) =>
    g.fillText(s, 40 + 49 * (i % 2), 39 + 50 * Math.floor(i / 2))
  );
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 570; i++) g.fillRect(r() * 128, r() * 128, r() * 3 + 0.4, r() * 1.9 + 0.2);
  return texture(c);
}
