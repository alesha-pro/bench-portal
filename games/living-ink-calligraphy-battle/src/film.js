import { layer, clamp, smooth, keys, rand, nib, path, TAU, gradient, seal, oval } from "./ink.js";
import { ground, objects, paper, backdrop, ledges, grove, fiber } from "./land.js";
import { tiger } from "./tiger.js";
import { dragon } from "./dragon.js";
import {
  inscription,
  colophon,
  shock,
  impacts,
  claws,
  flames,
  vortex,
  petals,
  rockfall,
  tailWave,
  sweepCut,
  burst,
} from "./paint.js";
import { pigmentTile } from "./pigment.js";
export const DURATION = 45;
// Poses are blocked around contact frames. Positions are the tiger's scapula plane
// and the dragon's skull. Limb extension and tail lash have independent channels.
const cat = [
  [4.6, 468, 573, 1.28, 0.06, -0.15, 0, 1],
  [6.15, 487, 546, 1.48, -0.12, 0.18, 0, 0.8],
  [7.1, 478, 544, 1.48, -0.2, 0.35, 0.15, 0.45],
  [8.6, 470, 565, 1.47, 0.08, -0.24, -0.55, 0.95],
  [9.22, 475, 575, 1.51, 0.12, -0.35, -0.8, 1],
  [9.65, 516, 554, 1.51, 0.21, 0.65, 0.95, 0.15],
  [10.25, 493, 548, 1.51, -0.13, 0.36, 0.45, 0.56],
  [11.68, 472, 536, 1.55, -0.18, 0.53, 0.38, 0.47],
  [12.85, 537, 478, 1.42, -0.36, 0.7, 0.96, 0.32],
  [13.2, 606, 449, 1.36, -0.12, 1, 1, 0.2],
  [13.75, 537, 498, 1.41, 0.02, -0.06, 0.52, 0.65],
  [15.24, 454, 564, 1.51, 0.11, -0.35, -0.8, 1],
  [16.52, 572, 491, 1.4, -0.28, 0.61, 0.75, 0.42],
  [17.45, 834, 508, 1.34, 0.22, 1.05, 1.3, 0.09],
  [18.13, 755, 488, 1.43, -0.18, 0.8, 1, 0.38],
  [19.4, 619, 545, 1.48, 0.17, 0.05, -0.4, 0.71],
  [20.95, 522, 569, 1.46, 0.17, -0.3, -0.8, 0.92],
  [21.35, 474, 564, 1.45, 0.08, 0.57, 0.69, 0.46],
  [22.64, 446, 548, 1.42, -0.21, 0.22, -0.2, 0.85],
  [24.65, 485, 557, 1.48, 0.14, -0.41, -0.7, 1],
  [25.55, 653, 458, 1.46, -0.32, 1.23, 1.15, 0.18],
  [26.35, 622, 435, 1.5, -0.31, 0.91, 1.18, 0.18],
  [27.67, 497, 540, 1.51, 0.12, -0.2, -0.6, 0.85],
  [29.42, 480, 566, 1.48, 0.18, -0.42, -0.85, 1],
  [29.98, 558, 526, 1.52, -0.24, 0.45, 0.6, 0.61],
  [31.45, 589, 481, 1.48, -0.46, 0.85, 0.94, 0.4],
  [32.85, 655, 433, 1.37, -0.34, 1.05, 1.29, 0.12],
  [34.53, 642, 467, 1.45, -0.24, 0.72, 0.92, 0.44],
  [34.87, 736, 448, 1.51, -0.14, 1.28, 1.32, 0.03],
  [35.63, 634, 486, 1.46, 0.01, 0.78, 0.94, 0.42],
  [37.4, 539, 538, 1.46, -0.11, 0.26, 0.22, 0.75],
  [39.15, 618, 554, 1.29, -0.4, 0.04, -0.5, 1.05],
  [40.8, 740, 537, 0.97, -0.77, -0.15, -0.61, 1.2],
  [45, 740, 537, 0.97, -0.77, -0.15, -0.61, 1.2],
];
const wyrm = [
  [4.6, 979, 371, 1.19, 0.08, 0, 1],
  [6.8, 924, 360, 1.35, -0.13, 0.2, 0.5],
  [8.9, 936, 345, 1.37, -0.18, -0.3, 0.36],
  [9.65, 901, 355, 1.4, -0.24, 0.9, 0.12],
  [11.68, 912, 352, 1.43, -0.17, 0.23, 0.77],
  [12.8, 930, 334, 1.4, -0.18, -0.5, 0.9],
  [13.2, 829, 390, 1.47, -0.24, 1, 0.1],
  [14.2, 866, 365, 1.42, 0.03, 0.3, 0.3],
  [16.07, 902, 350, 1.38, -0.08, -0.46, 1],
  [17.45, 1036, 381, 1.29, 0.13, 1, 0.25],
  [18.5, 987, 342, 1.36, -0.19, 0.32, 0.4],
  [20.75, 933, 338, 1.34, -0.1, -0.49, 1],
  [21.35, 835, 364, 1.48, -0.29, 1.1, 0],
  [23, 924, 334, 1.41, 0.02, 0.22, 0.7],
  [24.89, 940, 328, 1.42, -0.07, -0.56, 1],
  [25.55, 886, 356, 1.45, -0.18, 1, 0.12],
  [26.7, 953, 318, 1.34, 0.06, 0.32, 0.4],
  [28.9, 1016, 339, 1.32, 0.12, -0.54, 1],
  [29.94, 899, 359, 1.43, -0.16, 0.6, 0.64],
  [32.34, 917, 333, 1.34, -0.23, 1, 0.05],
  [34.5, 984, 349, 1.4, -0.19, -0.3, 0.8],
  [34.87, 888, 402, 1.42, -0.22, 1.1, 0.08],
  [36.25, 975, 343, 1.38, 0.06, 0.23, 0.8],
  [38.1, 901, 342, 1.25, -0.21, -0.23, 0.8],
  [40.8, 776, 333, 0.87, 0.27, -0.26, 1.6],
  [45, 776, 333, 0.87, 0.27, -0.26, 1.6],
];
const camera = [
  [0, 1, 805, 449],
  [7, 1, 805, 449],
  [9.22, 1.03, 787, 457],
  [9.66, 1.12, 768, 467],
  [11.8, 1.02, 803, 449],
  [13.2, 1.17, 814, 427],
  [15, 1.03, 785, 450],
  [17.45, 1.22, 907, 473],
  [19.5, 1.075, 848, 460],
  [21.35, 1.15, 767, 459],
  [23.3, 1.025, 798, 447],
  [26, 1.17, 805, 422],
  [28.8, 1.035, 814, 447],
  [34.9, 1.21, 811, 430],
  [36.85, 1.04, 805, 446],
  [40.8, 1, 805, 449],
  [45, 1, 805, 449],
];
function tigerPose(t) {
  const [x, y, s, angle, reach, stride, coil] = keys(cat, t);
  return { x, y, s, angle, reach, stride, coil, rest: smooth(38, 40.8, t) };
}
function dragonPose(t) {
  const [x, y, s, angle, lash, curl] = keys(wyrm, t);
  return { x, y, s, angle, lash, curl, rest: smooth(38, 40.8, t) };
}
const subjects = layer(1920, 1080),
  sc = subjects.getContext("2d");
let pigment;
function creatures(c, t, opts, cat, wyrm) {
  const width = opts.playing ? Math.min(1920, c.canvas.width) : 1920;
  if (subjects.width !== width) {
    subjects.width = width;
    subjects.height = (width * 9) / 16;
  }
  const density = width / 1600;
  sc.setTransform(density, 0, 0, density, 0, 0);
  sc.clearRect(0, 0, 1600, 900);
  const motion = t < 40.8 ? t : 40.8;
  dragon(sc, motion, wyrm);
  flames(sc, t, wyrm);
  tiger(sc, motion, cat);
  if (!pigment) pigment = sc.createPattern(pigmentTile, "repeat");
  sc.globalCompositeOperation = "source-atop";
  sc.fillStyle = pigment;
  sc.fillRect(0, 0, 1600, 900);
  if (opts.gold) {
    // Gilding catches the light at the crown, scapula and wing spars.
    sc.save();
    sc.translate(cat.x, cat.y);
    sc.rotate(cat.angle);
    sc.scale(cat.s, cat.s);
    let r = rand(2374);
    for (let i = 0; i < 85; i++) {
      const x = -140 + 210 * r(),
        y = -51 - 13 * Math.sin(x * 0.036) + r() * 17;
      oval(sc, x, y, 0.4 + r() * 2, 0.3 + r() * 0.65, i % 3 ? "#c9a054" : "#e2c576", -0.45);
    }
    sc.restore();
    sc.save();
    sc.translate(wyrm.x, wyrm.y);
    sc.rotate(wyrm.angle);
    sc.scale(wyrm.s, wyrm.s);
    for (let i = 0; i < 76; i++) {
      const px = 52 + r() * 194,
        py = (137 - px) * 0.95 + r() * 11 - 39;
      oval(sc, px, py, 0.45 + r() * 2.1, 0.3 + r() * 0.65, "#c2ac78", -0.67);
    }
    sc.restore();
  }
  if (t < 7.05) {
    sc.globalCompositeOperation = "destination-in";
    let u = smooth(4.63, 6.94, t),
      r = rand(562);
    sc.beginPath();
    for (let i = 0; i < 320; i++) {
      let x = i * 5,
        jit = r() * 26;
      let y = 816 - u * 783 + 17 * Math.sin(x * 0.021 + u * 5) + jit;
      sc.rect(x, y, 5, 900 - y);
    }
    sc.fillStyle = "#000";
    sc.fill();
  }
  sc.globalCompositeOperation = "source-over";
  // Local torn brush shapes lift the sampled pigment off the paper at contact.
  const age = t - 34.85,
    breakup = smooth(0.02, 0.42, age) * (1 - smooth(0.52, 2.05, age));
  if (breakup > 0) {
    const r = rand(2678);
    c.save();
    c.globalAlpha *= 1 - breakup * 0.95;
    c.drawImage(subjects, 0, 0, 1600, 900);
    c.restore();
    const flake = path(
      "M-1 .21Q-.81 -.64 -.42 -.72L-.56 -.91 -.1 -.78 .48 -.94 .29 -.7 1 -.35 .74 -.08 .92 .08 .47 .16 .24 .62 -.02 .53 -.41 .93 -.37 .55Z",
    );
    for (let i = 0; i < 480; i++) {
      const x = 250 + 1110 * r(),
        y = 151 + 505 * r(),
        w = 5 + r() * 32,
        h = 2 + r() * 12,
        an = Math.atan2(y - 421, x - 815) + (r() - 0.5) * 1.55;
      const dist = breakup * (16 + 125 * r()),
        px = x + Math.cos(an) * dist,
        py = y + Math.sin(an) * dist;
      c.save();
      c.globalAlpha *= breakup * 0.94;
      c.translate(px, py);
      c.rotate((r() - 0.5) * 1.7 * breakup);
      c.scale(w, h);
      c.clip(flake);
      c.drawImage(
        subjects,
        (x - w) * density,
        (y - h) * density,
        w * (2 * density),
        h * (2 * density),
        -1,
        -1,
        2,
        2,
      );
      c.restore();
    }
    return;
  }
  if (opts.wet) {
    c.save();
    c.globalAlpha *= 0.16;
    c.drawImage(subjects, -1.8, 1.5, 1600, 900);
    c.drawImage(subjects, 1.2, 2.4, 1600, 900);
    c.restore();
  }
  c.drawImage(subjects, 0, 0, 1600, 900);
}
function ring(c, t, gold) {
  const u = smooth(37.6, 40.9, t);
  if (!u) return;
  const r = rand(412);
  c.save();
  c.translate(807, 450);
  c.rotate(-0.28);
  const spine = [];
  for (let i = 0; i <= 52; i++) {
    const f = i / 52,
      an = -1.16 + (TAU - 0.32) * f,
      rr = 193 + 9 * Math.sin(2 * an) + 4 * Math.sin(5 * an);
    spine.push([
      Math.cos(an) * rr * 1.12,
      Math.sin(an) * rr,
      Math.max(0.25, Math.sin(Math.PI * f) ** 0.66 * (22 + 12 * Math.sin(an + 1))),
    ]);
  }
  nib(c, spine, "rgba(61,69,54,.75)", 304, u, 0.37);
  for (let i = 0; i < 38; i++) {
    const frac = (i / 37 - 0.5) * 1.19;
    const p = spine.map(([x, y, w]) => {
      let d = Math.hypot(x, y);
      return [x + (x / d) * w * frac + r() * 0.9, y + (y / d) * w * frac + r() * 0.9, 0.2 + r() * 1.2];
    });
    nib(
      c,
      p,
      i % 8 === 0 && gold ? "#b19a64" : i % 3 ? "rgba(225,219,188,.62)" : "#484f3e",
      i,
      u * (0.89 + r() * 0.11),
      0.6,
    );
  }
  c.restore();
}
function wakes(c, p) {
  const r = rand(504),
    force = clamp(p.reach - 0.28);
  if (!force) return;
  c.save();
  c.translate(p.x, p.y);
  c.rotate(p.angle);
  c.scale(p.s, p.s);
  c.globalAlpha *= force * 0.7;
  for (let i = 0; i < 33; i++) {
    const x = -113 - r() * 120,
      y = r() * 102 - 59,
      d = 20 + r() * 58;
    if (i % 4 === 0) oval(c, x, y, 1 + r() * 3, 0.8 + r() * 2, "#51513c");
    else
      nib(
        c,
        [
          [x - d, y + r() * 9, 0.1],
          [x - d * 0.4, y + 2, r() * 2 + 0.4],
          [x, y, 0.1],
        ],
        i % 4 === 1 ? "#a88b57" : "#555b49",
        i,
      );
  }
  c.restore();
}
// Flatten the large static paintings once for live playback. The full-size
// raster remains available for paused frames and frame-accurate exports.
const originalScenery = { ground, backdrop, ledges, objects };
let previewWidth = 0,
  previewScenery;
function scenery(width) {
  if (width === previewWidth) return previewScenery;
  previewWidth = width;
  previewScenery = {};
  for (const [key, source] of Object.entries(originalScenery)) {
    const reduced = layer(width, (width * 9) / 16),
      ctx = reduced.getContext("2d");
    ctx.drawImage(source, 0, 0, reduced.width, reduced.height);
    previewScenery[key] = reduced;
  }
  return previewScenery;
}
function paintScene(c, t, opts, surfaces) {
  c.save();
  const cat = tigerPose(t),
    dr = dragonPose(t),
    jolt = shock(t),
    [zoom, cx, cy] = keys(camera, t);
  if (t >= 15.44 && t < 22.11) {
    c.translate(1600, 0);
    c.scale(-1, 1);
  }
  c.translate(805 + 2 * jolt, 449 + 3 * jolt);
  c.scale(zoom, zoom);
  c.translate(-cx, -cy);
  const rise = smooth(4.1, 7.9, t),
    settle = smooth(37.8, 40.9, t);
  if (rise > 0) {
    c.save();
    c.globalAlpha *= rise * (1 - 0.82 * settle);
    if (t < 8.2) {
      const u = smooth(4.1, 8.2, t),
        r = rand(784);
      c.beginPath();
      for (let j = 0; j < 100; j++) {
        const y = j * 10,
          edge = -115 + u * 1870 + Math.sin(y * 0.023) * 42 + r() * 75;
        c.rect(-30, y, Math.max(0, edge + 30), 10);
      }
      c.clip();
    }
    c.drawImage(surfaces.backdrop, 0, 0, 1600, 900);
    grove(c, t, jolt);
    c.drawImage(surfaces.ledges, 0, 0, 1600, 900);
    rockfall(c, t);
    c.restore();
  }
  if (t < 6.1) {
    c.save();
    c.globalAlpha *= 0.14 * smooth(0.1, 0.8, t) * (1 - smooth(4.85, 6.1, t));
    c.strokeStyle = "#9b755b";
    c.lineWidth = 0.7;
    c.beginPath();
    for (let x = 202; x < 1450; x += 115) {
      c.moveTo(x, 186);
      c.lineTo(x, 690);
    }
    for (let y = 224; y <= 690; y += 115) {
      c.moveTo(158, y);
      c.lineTo(1440, y);
    }
    c.stroke();
    c.restore();
  }
  if (t < 6.95) {
    c.save();
    c.globalAlpha *= 1 - smooth(5.2, 6.94, t);
    c.translate(Math.sin(60 * t) * smooth(4.9, 5.4, t) * 1.7, 0);
    inscription(c, t, opts.wet);
    c.restore();
  }
  if (t >= 4.63) {
    vortex(c, t, opts.gold);
    ring(c, t, opts.gold);
    wakes(c, cat);
    tailWave(c, t, opts.gold);
    creatures(c, t, opts, cat, dr);
    claws(c, t);
    impacts(c, t, opts.gold);
    burst(c, t, opts.gold);
    petals(c, t, opts.gold);
  }
  c.restore();
  sweepCut(c, t);
  if (rise > 0) {
    c.save();
    c.globalAlpha *= rise;
    colophon(c, 133, 155, 1.16);
    c.restore();
  }
  if (t > 40) {
    c.save();
    const a = smooth(40.02, 40.44, t);
    c.globalAlpha *= a;
    const x = 1065,
      y = 588;
    if (opts.gold) {
      let rr = 26 + 11 * Math.sin((t - 40) * 3) ** 2,
        g = c.createRadialGradient(x, y, 0, x, y, rr);
      g.addColorStop(0, "rgba(221,145,57,.56)");
      g.addColorStop(1, "rgba(221,145,57,0)");
      c.fillStyle = g;
      c.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    seal(c, x, y, 36 + (1 - a) * 22, -0.075, "#a23926", 1);
    c.restore();
  }
}
let texture;
export function renderFilm(canvas, time, options) {
  const c = canvas.getContext("2d", { alpha: false }),
    t = ((time % 45) + 45) % 45;
  const scale = canvas.width / 1600;
  c.setTransform(scale, 0, 0, canvas.height / 900, 0, 0);
  c.globalAlpha = 1;
  c.globalCompositeOperation = "source-over";
  const surfaces = options.playing ? scenery(canvas.width) : originalScenery;
  c.drawImage(surfaces.ground, 0, 0, 1600, 900);
  c.save();
  c.beginPath();
  c.rect(paper.x, paper.y, paper.w, paper.h);
  c.clip();
  const rewind = smooth(43.43, 44.96, t),
    edge = paper.x + paper.w * (1 - rewind);
  c.save();
  c.beginPath();
  c.rect(paper.x, paper.y, Math.max(0, edge - paper.x), paper.h);
  c.clip();
  paintScene(c, t, options, surfaces);
  c.restore();
  if (rewind > 0 && rewind < 1) {
    let alpha = Math.sin(Math.PI * rewind) ** 0.45;
    c.save();
    c.globalAlpha *= alpha;
    let g = gradient(c, edge - 24, 0, edge + 23, 0, [
      [0, "#53493600"],
      [0.42, "#594d3670"],
      [0.49, "#998563"],
      [0.59, "#eee1c2"],
      [0.76, "#f7ecd3"],
      [1, "#d9cbaa00"],
    ]);
    c.fillStyle = g;
    c.fillRect(edge - 24, paper.y, 47, paper.h);
    c.restore();
  }
  if (!texture) texture = c.createPattern(fiber, "repeat");
  c.globalAlpha = 0.33;
  c.fillStyle = texture;
  c.fillRect(paper.x, paper.y, paper.w, paper.h);
  c.restore();
  c.drawImage(surfaces.objects, 0, 0, 1600, 900);
}
