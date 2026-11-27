import { W, H, TAU, clouds, flight, mill, cottages, clamp, water } from './world.js';
import { poly, oval, sails, millBody, makeCanvas } from './art.js';
import { makePlane } from './plane.js';
import { windmill } from './windmill.js';
import { fieldPrint, grazing } from './pasture.js';

const media = [
  ['Gouache & Ink', 'CANVAS 2D', '#aecc9a'],
  ['Motion Vector', 'EASING HUD', '#f2c169'],
  ['Neon Cyber', 'THREE.JS', '#7dded9'],
  ['Clay Sculpture', 'RAYMARCHED PBR', '#e8ac87'],
];
const seeds = [...new Set(clouds.map((a) => a[3]))];
async function loadAsset(path) {
  const im = new Image();
  im.src = path;
  await im.decode();
  return im;
}
function cloud(g, atlas, item, t) {
  const [x, y, k, seed, depth] = item,
    i = seeds.indexOf(seed);
  const phase = (t * TAU) / 30 + seed * 0.15;
  const dx = Math.sin(phase) * (5 + depth * 3),
    dy = Math.cos(phase) * 2.1;
  g.drawImage(
    atlas,
    (i % 3) * 372,
    Math.floor(i / 3) * 197,
    372,
    197,
    x - 155 * k + dx,
    y - 109 * k + dy,
    310 * k,
    164 * k,
  );
}
function birds(g, s, t, left, right) {
  const col = ['#465654', '#304840', '#b4d9e2', '#5a594c'][s];
  for (let flock = 0; flock < 5; flock++) {
    for (let i = 0; i < [6, 4, 5, 4, 6][flock]; i++) {
      const p = (t * TAU) / 30 + flock,
        spread = i * 0.64;
      const x = 49 + flock * 342 + Math.sin(p) * 39 + i * 12,
        y =
          253 + Math.sin(flock * 2.2) * 51 + Math.cos(p + spread * 0.18) * 9 + Math.abs(i - 2) * 4;
      if (x < left - 10 || x > right + 10) continue;
      const a = Math.sin((t * TAU) / 2.5 + i * 0.9 + flock),
        k = 2.5 + (i % 3) * 0.73;
      g.beginPath();
      g.moveTo(x - k * 1.45, y - k * a * 0.6);
      g.quadraticCurveTo(x - k * 0.43, y - k * 0.9, x, y + 0.65);
      g.quadraticCurveTo(x + k * 0.61, y - k * 1.05, x + k * 1.24, y - k * (0.35 + a * 0.7));
      g.strokeStyle = col;
      g.lineWidth = s === 1 ? 1.45 : 1;
      g.stroke();
    }
  }
}
function smoke(g, s, t, left, right) {
  cottages.forEach(([x, y, k], j) => {
    if (x < left - 30 || x > right + 30) return;
    for (let i = 0; i < 11; i++) {
      const u = (t / 5 + i / 11 + j * 0.35) % 1,
        xx =
          x +
          19 * k +
          u * u * (20 + 5 * Math.sin((t * TAU) / 10 + j)) +
          Math.sin(u * 9 - j) * u * 3,
        yy = y - (61 + u * 45) * k;
      g.globalAlpha = (1 - u) * (0.3 + 0.13 * Math.sin(Math.PI * u));
      oval(
        g,
        xx,
        yy,
        (2 + u * 7) * k,
        (2 + u * 4) * k,
        ['#f8ecd5', '#fff1ce', '#c0a9e4', '#f8e6cd'][s],
      );
    }
  });
  g.globalAlpha = 1;
}
function life(g, s, t, left, right, drawMill) {
  smoke(g, s, t, left, right);
  if (mill.x + 70 >= left && mill.x - 70 <= right) {
    if (s < 2) {
      millBody(g, s);
      sails(g, s, t);
    } else drawMill(g, s, t);
  }
  for (let i = 0; i < 95; i++) {
    const x = (i * 73.43) % 1600;
    if (x < left - 8 || x > right + 8) continue;
    const phase = (t * TAU) / 5 + i;
    if (i % 3 === 0) {
      const xx = x + Math.sin(phase * 0.5 + i) * 3,
        yy = 530 + ((i * 37.51) % 260) + Math.cos(phase) * 2;
      g.globalAlpha = 0.32 + 0.28 * Math.sin(phase);
      oval(g, xx, yy, 1.5, 0.95, s === 2 ? '#a2fff3' : '#fff0aa');
    } else {
      const yy = water(x) + Math.sin(i) * 3;
      const width = (1 + Math.sin(phase)) * (1.6 + (i % 4));
      g.globalAlpha = 0.26 + 0.11 * Math.cos(phase);
      poly(
        g,
        [
          [x - width, yy],
          [x + width, yy - 0.5],
        ],
        null,
        s === 2 ? '#a3ffff' : '#fff9d7',
        0.9,
      );
    }
  }
  g.globalAlpha = 1;
}
const route = (() => {
  const p = new Path2D();
  let prev = null;
  for (let i = 0; i <= 1200; i++) {
    const pt = flight(i / 40);
    if (!prev || Math.abs(pt.x - prev.x) > 350) p.moveTo(pt.x, pt.y);
    else p.lineTo(pt.x, pt.y);
    prev = pt;
  }
  return p;
})();
function cubicEaseOutElastic(x) {
  return x === 0 || x === 1 ? x : 2 ** (-10 * x) * Math.sin(((x * 10 - 0.75) * TAU) / 3) + 1;
}
function motionHud(g, t, p) {
  // The opening curve shows the overshoot used by the velocity readout.
  g.save();
  g.translate(528, 246);
  g.rotate(-0.048);
  const pulse = cubicEaseOutElastic(Math.min(1, ((t + 1.4) % 5) / 1.15));
  g.scale(0.92 + 0.08 * pulse, 0.92 + 0.08 * pulse);
  const w = 141,
    h = 59;
  g.fillStyle = '#35443a';
  g.beginPath();
  g.roundRect(3.6, 4.2, w, h, 4);
  g.fill();
  g.fillStyle = '#fff2c8';
  g.strokeStyle = '#35443a';
  g.lineWidth = 1.75;
  g.beginPath();
  g.roundRect(0, 0, w, h, 4);
  g.fill();
  g.stroke();
  g.fillStyle = '#343f36';
  g.font = '600 12px "DM Sans"';
  g.fillText('easeOutElastic', 9, 16);
  poly(
    g,
    [
      [8, 22],
      [w - 8, 22],
    ],
    null,
    '#8c947a',
    0.75,
  );
  const graph = [];
  for (let i = 0; i <= 52; i++) graph.push([10 + i, 49 - cubicEaseOutElastic(i / 52) * 14]);
  poly(
    g,
    [
      [10, 49],
      [10, 30],
    ],
    null,
    '#9eab89',
    0.65,
  );
  poly(g, graph, null, '#ca6940', 1.65);
  const n = ((t + 1.4) % 5) / 5;
  oval(g, 10 + n * 52, 49 - cubicEaseOutElastic(n) * 14, 2.2, 2.2, '#3b514a');
  g.font = '9px "IBM Plex Mono"';
  g.fillText('VELOCITY', 78, 35);
  g.font = '600 13px "DM Sans"';
  g.fillText(p.speed.toFixed(0) + ' u/s', 78, 50);
  g.restore();
  if (t > 10.6 && t < 15.7) {
    const bounce = Math.sin(((t - 10.6) / 5.1) * Math.PI);
    g.save();
    g.translate(755, 380);
    g.rotate(-0.15);
    g.scale(bounce, bounce);
    g.font = 'italic 700 22px "DM Sans"';
    g.lineWidth = 4;
    g.strokeStyle = '#ffe7aa';
    g.strokeText('LOOP!', -22, 0);
    g.fillStyle = '#34443a';
    g.fillText('LOOP!', -22, 0);
    poly(
      g,
      [
        [-36, -9],
        [-31, -13],
        [-33, -19],
      ],
      null,
      '#b9633f',
      1.7,
    );
    poly(
      g,
      [
        [35, 0],
        [41, 1],
        [44, -4],
      ],
      null,
      '#b9633f',
      1.6,
    );
    g.restore();
  } else if (p.x >= 370 && p.x <= 1060) {
    const loop = p.x > 845;
    g.save();
    g.translate(p.x - 20, p.y + 43);
    g.rotate(-0.15);
    g.font = 'italic 700 16px "DM Sans"';
    g.lineWidth = 3.6;
    g.strokeStyle = '#f9df9e';
    g.strokeText(loop ? 'LOOP!' : 'WHOOSH!', 0, 0);
    g.fillStyle = '#364238';
    g.fillText(loop ? 'LOOP!' : 'WHOOSH!', 0, 0);
    g.restore();
  }
}
function trail(g, s, t, p, left, right) {
  const age = [1.6, 1.25, 3.9, 1.65][s],
    pts = [];
  for (let i = 0; i <= 54; i++) {
    const u = i / 54,
      pt = flight(t - u * age);
    if (pts.length && Math.abs(pt.x - pts.at(-1).x) > 400) break;
    pts.push({
      x: pt.x - Math.cos(pt.angle) * 22,
      y: pt.y - Math.sin(pt.angle) * 22,
      u,
      angle: pt.angle,
    });
  }
  if (!pts.some((a) => a.x > left - 90 && a.x < right + 90)) return;
  g.save();
  g.lineCap = 'round';
  if (s === 2) {
    g.globalCompositeOperation = 'lighter';
    for (const [strand, col] of [
      [-1, '#64e7fb'],
      [1, '#58bdfa'],
    ]) {
      const arc = [];
      for (const a of pts) {
        const breadth =
          3.4 * Math.sin(Math.PI * a.u) ** 0.75 + 2.0 * a.u * Math.sin(18 * a.u + (t * TAU) / 3);
        arc.push([
          a.x - strand * Math.sin(a.angle) * breadth,
          a.y + strand * Math.cos(a.angle) * breadth,
        ]);
      }
      g.globalAlpha = 0.53;
      g.shadowColor = '#1adffa';
      g.shadowBlur = 4;
      poly(g, arc, null, col, 1.25);
    }
    g.shadowBlur = 0;
  }
  const strokes =
    s === 2
      ? [
          [20, '#123e74', 0.4],
          [9, '#149dbf', 0.65],
          [4, '#53f4f5', 0.96],
          [1.2, '#e2fff2', 1],
        ]
      : s === 0
        ? [
            [4, '#fff0cc', 0.67],
            [1.5, '#edaa78', 0.75],
          ]
        : s === 3
          ? [
              [8, '#ffc586', 0.28],
              [2, '#ffebaf', 0.78],
            ]
          : [[2.7, '#ef7043', 0.87]];
  for (const [width, col, a] of strokes) {
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1],
        curr = pts[i];
      g.globalAlpha = (1 - curr.u) ** 0.85 * a;
      poly(
        g,
        [
          [prev.x, prev.y],
          [curr.x, curr.y],
        ],
        null,
        col,
        Math.max(0.35, width * (1 - curr.u)),
      );
    }
  }
  for (let i = 2; i < pts.length; i += 3) {
    const pt = pts[i],
      d = pt.u * (5 + Math.sin(i + (t * TAU) / 3) * 9);
    g.globalAlpha = (1 - pt.u) * 0.8;
    const x = pt.x - Math.sin(pt.angle) * d,
      y = pt.y + Math.cos(pt.angle) * d;
    if (s === 1) {
      g.save();
      g.translate(x, y);
      g.rotate(i + (t * TAU) / 5);
      g.strokeStyle = '#34433c';
      g.lineWidth = 1.2;
      if (i % 4 === 0) g.strokeRect(-2, -2, 4, 4);
      else if (i % 4 === 1)
        poly(
          g,
          [
            [-2, 2],
            [0, -2],
            [2, 2],
          ],
          '#f6c75f',
          '#34433c',
          1,
        );
      else oval(g, 0, 0, 1.6, 1.6, '#374c40');
      g.restore();
    } else oval(g, x, y, 1.2 + pt.u, 1.1, s === 2 ? '#adf8ff' : '#f8d6ae');
  }
  g.restore();
}
function badge(g, s, left, right, top, height, film) {
  const available = right - left;
  if (available < 24) return;
  const k = film ? 1.35 : height < 300 ? 0.82 : 1,
    pad = film ? 21 : Math.min(14, available * 0.05),
    x = left + pad,
    y = top + (film ? 25 : 14);
  const info = media[s];
  g.save();
  g.translate(x, y);
  g.scale(k, k);
  const wide = (available - pad * 2) / k;
  const title = info[0],
    sub = info[1];
  g.font = '600 13px "DM Sans"';
  const labelW = Math.max(g.measureText(title).width, sub.length * 5.34) + 53;
  const compact = wide < 112,
    w = compact ? 30 : Math.min(wide, labelW);
  g.fillStyle = '#1b2624ed';
  g.beginPath();
  g.roundRect(0, 0, w, compact ? 29 : 39, 5);
  g.fill();
  g.fillStyle = info[2];
  g.beginPath();
  g.roundRect(5, compact ? 5 : 7, compact ? 20 : 25, compact ? 19 : 25, 3);
  g.fill();
  g.fillStyle = '#21302a';
  g.font = '500 10px "IBM Plex Mono"';
  g.textAlign = 'center';
  g.fillText('0' + (s + 1), compact ? 15 : 17.5, compact ? 18 : 23);
  if (!compact) {
    g.textAlign = 'left';
    g.fillStyle = '#faf8ef';
    g.font = '600 13px "DM Sans"';
    g.fillText(title, 37, 17, w - 42);
    g.fillStyle = '#c5cdc4';
    g.font = '8px "IBM Plex Mono"';
    g.letterSpacing = '.7px';
    g.fillText(sub, 37, 30, w - 42);
    g.letterSpacing = '0px';
  }
  g.restore();
}
export async function buildScene(canvas) {
  const plane = makePlane(),
    g = canvas.getContext('2d', { alpha: false });
  const drawMill = windmill(plane.renderer);
  const veil = makeCanvas(620, 380),
    vg = veil.getContext('2d');
  const assets = await Promise.all(
    media.map(async (_, s) => {
      const [sky, terrain, clouds] = await Promise.all(
        ['sky', 'land', 'clouds'].map((part) => loadAsset('./assets/' + part + '-' + s + '.webp')),
      );
      const land = fieldPrint(s),
        ctx = land.getContext('2d');
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = 'destination-over';
      ctx.drawImage(terrain, 0, 0);
      ctx.restore();
      return { sky, land: await createImageBitmap(land), clouds };
    }),
  );
  return {
    webgl2: plane.renderer.getContext() instanceof WebGL2RenderingContext,
    draw(t, state) {
      const { width, height, dpr, mode, bounds, hud, film } = state;
      const phase = (t * TAU) / 30,
        zoom = 1.026 + 0.018 * (1 - Math.cos(phase));
      const worldW = W / zoom,
        fit = width / worldW,
        pan = (W - worldW) * (0.5 - 0.38 * Math.sin(phase + 0.68));
      const worldH = Math.min(H / zoom, height / fit),
        top = (H - worldH) * (0.54 + 0.024 * Math.sin(phase));
      const sy = height / worldH;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.fillStyle = '#809e9c';
      g.fillRect(0, 0, width, height);
      const p = flight(t),
        spans =
          mode < 0
            ? media.map((_, s) => [s, pan + bounds[s] * worldW, pan + bounds[s + 1] * worldW])
            : [[mode, pan, pan + worldW]];
      for (const [s, left, right] of spans) {
        const a = assets[s];
        g.save();
        g.scale(fit, sy);
        g.translate(-pan, -top);
        g.beginPath();
        g.rect(left, top, right - left, worldH);
        g.clip();
        g.drawImage(a.sky, 0, 0, W, H);
        const hero = (ctx) => {
          trail(ctx, s, t, p, left, right);
          if (p.x > left - 75 && p.x < right + 75) plane.paint(ctx, s, t, p);
        };
        for (const c of clouds)
          if (c[0] + c[2] * 170 > left && c[0] - c[2] * 170 < right) cloud(g, a.clouds, c, t);
        birds(g, s, t, left, right);
        g.drawImage(a.land, 0, 0, W, H);
        grazing(g, s, t, left, right);
        life(g, s, t, left, right, drawMill);
        if (s === 1) {
          g.save();
          g.setLineDash([6.5, 7.5]);
          g.lineDashOffset = -t * ((14 * 28) / 30);
          g.strokeStyle = '#435448be';
          g.lineWidth = 1.75;
          g.stroke(route);
          g.restore();
          motionHud(g, t, p);
        }
        plane.shadow(g, s, t, p);
        if (t > 9.2 && t < 12.8 && p.x > left - 180 && p.x < right + 240) {
          const ox = Math.floor(p.x - 355),
            oy = Math.floor(p.y - 205);
          vg.clearRect(0, 0, veil.width, veil.height);
          vg.save();
          vg.translate(-ox, -oy);
          hero(vg);
          vg.globalCompositeOperation = 'destination-out';
          vg.globalAlpha = clamp(Math.min((t - 9.2) * 2.5, (12.8 - t) * 2.5), 0, 1);
          cloud(vg, a.clouds, clouds[4], t);
          vg.restore();
          g.drawImage(veil, ox, oy);
        } else hero(g);
        g.restore();
      }
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (film || !hud) {
        g.fillStyle = '#f6f1e5c9';
        if (mode < 0)
          bounds
            .slice(1, -1)
            .forEach((b) => g.fillRect(Math.round(b * width) - 0.5, 0, 1.2, height));
      }
      if (hud || film)
        for (const [s, left, right] of spans)
          badge(g, s, (left - pan) * fit, (right - pan) * fit, 0, height, film);
      if (film) {
        const q = g.createLinearGradient(0, height - 110, 0, height);
        q.addColorStop(0, '#18231c00');
        q.addColorStop(1, '#16221dba');
        g.fillStyle = q;
        g.fillRect(0, height - 110, width, 110);
        g.fillStyle = '#f7f4e8';
        g.font = '600 21px "DM Sans"';
        g.fillText('One Scene, Four Rendering Worlds', 26, height - 28);
        g.font = '13px "IBM Plex Mono"';
        g.textAlign = 'right';
        g.fillText('FOLDFRAME   /   MOTION STUDIES', width - 26, height - 31);
        g.textAlign = 'left';
      }
    },
  };
}
