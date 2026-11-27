import * as THREE from "three";
import { roadPoint, routes } from "./routes.js";
import { riverX, riverWidth } from "./river.js";

export function rng(seed = 17) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function canvasTexture(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
export function paperTexture(color = "#f1e5c7", seed = 2) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const x = c.getContext("2d"),
    rand = rng(seed);
  x.fillStyle = color;
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 13000; i++) {
    x.globalAlpha = rand() * 0.12;
    x.fillStyle = rand() > 0.5 ? "#fff9e6" : "#7e7353";
    const a = rand() * 256,
      b = rand() * 256;
    x.fillRect(a, b, rand() * 2 + 0.3, rand() * 0.8 + 0.3);
  }
  x.globalAlpha = 1;
  return canvasTexture(c);
}
export function atlasTexture(r) {
  const c = document.createElement("canvas");
  c.width = 2048;
  c.height = 1280;
  const x = c.getContext("2d"),
    random = rng(48);
  const sx = c.width / 16,
    sz = c.height / 10;
  const P = (a, b) => [(a + 8) * sx, (b + 5) * sz];
  x.fillStyle = "#efe5c9";
  x.fillRect(0, 0, c.width, c.height);
  // Many translucent pigment blooms, kept softly irregular like watercolor on cotton rag.
  for (let i = 0; i < 370; i++) {
    const a = random() * 2048,
      b = random() * 1280,
      rad = 30 + random() * 170;
    const grad = x.createRadialGradient(a, b, 0, a, b, rad);
    const colors = ["130,153,95", "159,169,111", "197,173,115", "225,209,163"];
    grad.addColorStop(0, `rgba(${colors[i % 4]},${0.04 + random() * 0.09})`);
    grad.addColorStop(0.65, `rgba(${colors[i % 4]},.035)`);
    grad.addColorStop(1, `rgba(${colors[i % 4]},0)`);
    x.fillStyle = grad;
    x.fillRect(a - rad, b - rad, rad * 2, rad * 2);
  }
  const line = (points, color, width, dash = []) => {
    x.strokeStyle = color;
    x.lineWidth = width;
    x.setLineDash(dash);
    x.beginPath();
    points.forEach(([a, b], i) => {
      const p = P(a, b);
      i ? x.lineTo(...p) : x.moveTo(...p);
    });
    x.stroke();
    x.setLineDash([]);
  };
  // Survey contours and meadow hatching.
  for (const [cx, cz, rad] of [
    [-4, -2.5, 2.1],
    [4, 2.8, 2.4],
    [5, -2, 1.7],
    [-4, 3.1, 1.5],
  ])
    for (let j = 0; j < 10; j++) {
      const pts = [];
      for (let k = 0; k <= 110; k++) {
        const t = (k / 110) * Math.PI * 2;
        const rr =
          (0.53 + 0.105 * j) *
            rad *
            (1 + 0.12 * Math.sin(t * 3 + cz) + 0.06 * Math.cos(t * 5 + cx)) +
          0.022 * Math.sin(9 * t + j * 0.32);
        pts.push([
          cx + Math.cos(t) * rr + 0.18 * Math.sin(t * 2),
          cz + Math.sin(t) * rr * 0.64,
        ]);
      }
      if (j % 3 === 0) {
        x.beginPath();
        pts.forEach(([a, b], i) =>
          i ? x.lineTo(...P(a, b)) : x.moveTo(...P(a, b)),
        );
        x.fillStyle = cz < 0 ? "#72997e14" : "#d8995b15";
        x.fill();
      }
      line(pts, j % 3 ? "#78936e68" : "#81906495", j % 3 ? 1.6 : 2.5);
      if (j === 6) {
        const [a, b] = pts[15];
        x.save();
        x.translate(...P(a, b));
        x.rotate(-0.28);
        x.fillStyle = "#e9dfbc";
        x.fillRect(-19, -10, 38, 17);
        x.font = "italic 15px Georgia";
        x.fillStyle = "#708363";
        x.textAlign = "center";
        x.fillText(cz < 0 ? "180" : "120", 0, 3);
        x.restore();
      }
    }
  // Terraced field patches.
  for (const [a, b, w, h, col] of [
    [-6.6, -3.7, 2.3, 1.2, "#b6ba7855"],
    [2.4, 3.3, 2.8, 1, "#ccaf6855"],
    [-6, 2.2, 2, 1.6, "#a7b18455"],
    [2, -3.8, 2, 1.1, "#a1b49055"],
  ]) {
    const [px, py] = P(a, b);
    x.fillStyle = col;
    x.beginPath();
    x.moveTo(px, py);
    x.lineTo(px + w * sx, py + 15);
    x.lineTo(px + (w - 0.1) * sx, py + h * sz);
    x.lineTo(px - 15, py + (h - 0.1) * sz);
    x.fill();
    for (let j = 0; j < 10; j++)
      line(
        [
          [a + (j * w) / 10, b + 0.1],
          [a + (j * w) / 10 - 0.1, b + h - 0.1],
        ],
        "#8a966452",
        1.5,
      );
  }
  // Moss, orchard rows and ploughed strips. Alternate dry brush marks with
  // transparent washes so the original paper shows through every field.
  const fields = [
    [-7.1, -2.9, 2.5, 1.4, "#839766"],
    [-5, -1.9, 2.1, 1.4, "#aaa65c"],
    [-7.25, 0.1, 1.9, 1.35, "#c69a4e"],
    [-4.9, 1.8, 2.15, 1.4, "#8f9e66"],
    [-3.35, -3.35, 1.6, 1.25, "#889e77"],
    [1.55, -3.85, 2.45, 1.15, "#aca357"],
    [2.5, 1.05, 1.8, 1.16, "#89a076"],
    [5.55, 0.5, 1.4, 1.75, "#c5a556"],
    [1.25, 2.85, 2, 1.05, "#be995e"],
    [5.1, -2.5, 1.85, 1.15, "#9eac83"],
  ];
  for (const [a, b, w, h, col] of fields) {
    const pts = [
      [a, b],
      [a + w * 0.48, b - 0.08],
      [a + w, b + 0.12],
      [a + w - 0.13, b + h],
      [a - 0.12, b + h - 0.14],
    ];
    x.save();
    x.beginPath();
    pts.forEach(([px, py], i) =>
      i ? x.lineTo(...P(px, py)) : x.moveTo(...P(px, py)),
    );
    x.closePath();
    x.clip();
    x.fillStyle = col + "66";
    x.fillRect(...P(a - 0.3, b - 0.3), (w + 0.6) * sx, (h + 0.6) * sz);
    for (let j = 0; j < 32; j++)
      line(
        [
          [a + j * 0.105, b - 0.2],
          [a + j * 0.105 - 0.4, b + h + 0.15],
        ],
        col + "80",
        1 + random() * 2,
      );
    for (let j = 0; j < 90; j++) {
      const [px, py] = P(a + random() * w, b + random() * h);
      x.fillStyle = j % 2 ? "#f0deb938" : col + "38";
      x.beginPath();
      x.ellipse(px, py, random() * 24 + 2, random() * 11 + 2, -0.4, 0, 7);
      x.fill();
    }
    x.restore();
    line([...pts, pts[0]], "#8c8e634d", 1.8);
  }
  const grove = (a, b, w, h, N) => {
    for (let i = 0; i < N; i++) {
      const xx = a + (random() - 0.5) * w,
        zz = b + (random() - 0.5) * h;
      const [px, py] = P(xx, zz),
        rad = 4 + random() * 10;
      x.fillStyle = ["#697f5560", "#91a77980", "#b0b46c77"][i % 3];
      x.beginPath();
      x.ellipse(px, py, rad, rad * 0.65, -0.4, 0, 7);
      x.fill();
      x.strokeStyle = "#5b76504d";
      x.lineWidth = 1.25;
      x.beginPath();
      x.moveTo(px - rad * 0.65, py);
      x.quadraticCurveTo(px, py - rad * 0.8, px + rad * 0.73, py - rad * 0.1);
      x.stroke();
    }
  };
  for (const patch of [
    [-5, -2.5, 4, 0.8, 130],
    [-6.65, 2.75, 1.35, 1.4, 100],
    [-2.9, 3.25, 1.1, 1.3, 70],
    [2.3, -2.9, 2, 1.1, 150],
    [6.4, 2.9, 1.5, 1.2, 100],
    [6, -1, 1.7, 0.7, 60],
  ])
    grove(...patch);
  // A watery seam running through the valley.
  const bank = (z, side) => riverX(z) + side * riverWidth(z);
  const river = [];
  for (let i = 0; i <= 150; i++) {
    const z = -5 + i / 15;
    river.push([bank(z, -1), z]);
  }
  for (let i = 150; i >= 0; i--) {
    const z = -5 + i / 15;
    river.push([bank(z, 1), z]);
  }
  x.save();
  x.beginPath();
  river.forEach(([a, b], i) =>
    i ? x.lineTo(...P(a, b)) : x.moveTo(...P(a, b)),
  );
  x.closePath();
  x.fillStyle = "#74aaa4";
  x.fill();
  x.strokeStyle = "#628d83bd";
  x.lineWidth = 4;
  x.stroke();
  x.clip();
  for (let i = 0; i < 1200; i++) {
    const z = random() * 10 - 5,
      a = riverX(z) + random() * 0.9 - 0.45;
    const [px, py] = P(a, z);
    x.fillStyle = ["#5b9da529", "#b6d6bd53", "#e1e7c560", "#659ea540"][i % 4];
    x.beginPath();
    x.ellipse(
      px,
      py,
      2 + random() * 9,
      4 + random() * 27,
      Math.sin(z) * 0.25,
      0,
      7,
    );
    x.fill();
  }
  for (let i = 0; i < 175; i++) {
    const z = random() * 10 - 5,
      a = riverX(z) + random() * 0.6 - 0.3;
    line(
      [
        [a, z],
        [a + 0.014, z + 0.045],
        [a + 0.006, z + 0.113],
      ],
      "#e1ead1bb",
      1.5,
    );
  }
  x.restore();
  for (let i = 0; i < 300; i++) {
    const z = random() * 10 - 5,
      d = i % 2 ? 1 : -1,
      a = bank(z, d) + d * random() * 0.14;
    line(
      [
        [a, z],
        [a - 0.018, z - 0.055],
      ],
      "#7e94635d",
      2,
    );
  }
  // Secondary fine trails.
  line(
    [
      [-7, 3],
      [-5, 1],
      [-3, 1.4],
      [-2, -1.7],
      [-3, -3.5],
    ],
    "#b9ab8355",
    15,
  );
  line(
    [
      [1.9, -4],
      [2.3, -2],
      [4, 0],
      [6, 1],
      [7, 3.8],
    ],
    "#b9ab8355",
    15,
  );
  for (const other of routes.filter((route) => route !== r)) {
    for (const [lo, hi] of [
      [other.start, -other.gap],
      [other.gap, other.end],
    ]) {
      const trail = Array.from({ length: 72 }, (_, i) =>
        roadPoint(lo + ((hi - lo) * i) / 71, other),
      );
      line(trail, "#ad9b7a65", 15);
      line(trail, "#f8ecd2", 10);
    }
  }
  // Road is deliberately absent inside the folding strip.
  for (const [lo, hi] of [
    [r.start, -r.gap],
    [r.gap, r.end],
  ]) {
    const points = [];
    for (let i = 0; i <= 100; i++)
      points.push(roadPoint(lo + ((hi - lo) * i) / 100, r));
    line(points, "#8f795660", 57);
    line(points, "#f6e9c9", 51);
    line(points, r.color, 4, [8, 11]);
  }
  for (const s of [-r.gap, r.gap]) {
    const [a, b] = roadPoint(s, r),
      [px, py] = P(a, b);
    x.save();
    x.translate(px, py);
    x.rotate(r.angle);
    x.fillStyle = "#b4523c";
    x.fillRect(-5, -30, 10, 60);
    x.strokeStyle = "#f6ead0";
    x.lineWidth = 2;
    for (let j = -25; j < 30; j += 10) {
      x.beginPath();
      x.moveTo(-4, j);
      x.lineTo(4, j + 5);
      x.stroke();
    }
    x.restore();
  }
  // Fine, inset double-line border, registration corners and fold marks.
  x.strokeStyle = "#a99b754d";
  x.lineWidth = 1;
  x.strokeRect(23, 23, 2002, 1234);
  x.strokeRect(29, 29, 1990, 1222);
  for (const a of [-r.gap, 0, r.gap]) {
    const c = Math.cos(r.angle),
      n = Math.sin(r.angle);
    line(
      [
        [a * c + 7 * n, a * n - 7 * c],
        [a * c - 7 * n, a * n + 7 * c],
      ],
      a === 0 ? "#9d8b5945" : "#9d8b5955",
      2,
      [7, 9],
    );
  }
  function text(str, a, b, size = 24, color = "#737d60", italic = false) {
    const p = P(a, b);
    x.fillStyle = color;
    x.font = `${italic ? "italic " : ""}${size}px Georgia`;
    x.textAlign = "center";
    x.fillText(str, ...p);
  }
  // Settlement names have a paper halo so field hatching never breaks the ink.
  function town(name, a, b, angle) {
    x.save();
    x.translate(...P(a, b));
    x.rotate(angle);
    x.textAlign = "center";
    x.font = "italic bold 37px Georgia";
    x.strokeStyle = "#f3e7c8";
    x.lineWidth = 7;
    x.strokeText(name, 0, 0);
    x.fillStyle = "#495f53";
    x.fillText(name, 0, 0);
    x.restore();
  }
  town("Briarwick", -4.65, 0.12, -0.09);
  town("Willowbank", 3.22, 1.55, -0.1);
  town("Thistledown", 5.12, 3.97, -0.05);
  town("Mill End", 4.22, -2.72, -0.12);
  text("THE ALDER RIDGE", -4.8, -3.9, 19, "#6b7f65");
  text("Willow River", 1.04, 4.46, 25, "#547f80", true);
  text("Orchard Lane", -4.75, 1.76, 20, "#66734f", true);
  text("FOLD VALLEY  /  POSTAL DISTRICT No. 03", -4.35, 4.64, 14, "#79735e");
  // Split-ink compass points, graduated rim, and a separate working needle.
  const [ox, oy] = P(-6.65, 3.66);
  x.save();
  x.translate(ox, oy);
  x.strokeStyle = "#657869";
  x.lineWidth = 1.7;
  for (const radius of [43, 49, 57]) {
    x.beginPath();
    x.arc(0, 0, radius, 0, 2 * Math.PI);
    x.stroke();
  }
  for (let i = 0; i < 48; i++) {
    x.save();
    x.rotate((i * Math.PI) / 24);
    x.beginPath();
    x.moveTo(0, -49);
    x.lineTo(0, i % 3 ? -53 : -57);
    x.stroke();
    x.restore();
  }
  for (let i = 0; i < 16; i++) {
    x.save();
    x.rotate((i * Math.PI) / 8);
    const len = i % 2 ? 23 : i % 4 ? 38 : 64,
      half = i % 2 ? 3 : 7;
    x.beginPath();
    x.moveTo(0, -len);
    x.lineTo(half, 0);
    x.lineTo(0, 5);
    x.closePath();
    x.fillStyle = i % 4 ? "#9a9e7a" : "#4e6b60";
    x.fill();
    x.beginPath();
    x.moveTo(0, -len);
    x.lineTo(-half, 0);
    x.lineTo(0, 5);
    x.closePath();
    x.fillStyle = "#e4c995";
    x.fill();
    x.stroke();
    x.restore();
  }
  x.fillStyle = "#586855";
  x.font = "bold 22px Georgia";
  x.textAlign = "center";
  for (const [letter, dx, dy] of [
    ["N", 0, -67],
    ["E", 72, 7],
    ["S", 0, 83],
    ["W", -76, 7],
  ])
    x.fillText(letter, dx, dy);
  x.restore();
  // Postal survey lettering, a neatline and elevation ticks at the edges.
  for (let k = 0; k < 63; k++) {
    const u = 31 + k * 32;
    x.fillStyle = "#887c5666";
    x.fillRect(u, 23, 1, k % 4 === 0 ? 13 : 6);
    x.fillRect(u, 1251, 1, k % 4 === 0 ? -13 : -6);
  }
  text("W I L L O W   V A L L E Y", -4.35, 4.34, 29, "#576d5e");
  text(
    "S U R V E Y   O F   T H E   V A L L E Y     •     1 : 2 5 0 0",
    4.65,
    4.58,
    13,
    "#897f5f",
  );
  // Tiny ink grass, flowers and stippled pigment grain.
  for (let i = 0; i < 2200; i++) {
    const a = random() * 16 - 8,
      b = random() * 10 - 5;
    const s = a * Math.cos(r.angle) + b * Math.sin(r.angle);
    if (Math.abs(s) < r.gap + 0.25) continue;
    const [px, py] = P(a, b);
    x.strokeStyle = ["#7e915344", "#9b9c6644", "#b4936055"][i % 3];
    x.lineWidth = 1.3;
    x.beginPath();
    x.moveTo(px, py);
    x.lineTo(px + random() * 5 - 2, py - 3 - random() * 5);
    x.stroke();
    if (i % 13 === 0) {
      x.fillStyle = "#bd906c88";
      x.beginPath();
      x.arc(px, py - 5, 2, 0, 7);
      x.fill();
    }
  }
  for (let i = 0; i < 115000; i++) {
    x.globalAlpha = 0.035 + random() * 0.075;
    x.fillStyle = i % 2 ? "#5e6342" : "#fff7e2";
    x.fillRect(
      random() * 2048,
      random() * 1280,
      random() * 2 + 0.5,
      random() * 1 + 0.4,
    );
  }
  x.globalAlpha = 1;
  return canvasTexture(c);
}
export function wallTexture(color, kind = "front") {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const x = c.getContext("2d"),
    rand = rng(44);
  x.fillStyle = color;
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 8800; i++) {
    x.fillStyle = i % 2 ? "#fff8dd32" : "#655e4621";
    x.fillRect(rand() * 256, rand() * 256, rand() * 4 + 1, rand() * 2 + 1);
  }
  const line = (a, b, d, e, col, width) => {
    x.strokeStyle = col;
    x.lineWidth = width;
    x.beginPath();
    x.moveTo(a, b);
    x.lineTo(d, e);
    x.stroke();
  };
  for (let y = 12; y < 255; y += 18) line(0, y, 256, y + 1, "#807b552a", 1.2);
  for (const y of [0, 9, 247]) {
    x.fillStyle = "#ae9976";
    x.fillRect(0, y, 256, 3);
  }
  for (const a of [3, 244]) {
    x.fillStyle = "#a18c6f";
    x.fillRect(a, 0, 7, 256);
  }
  for (let k = 0; k < 70; k++) {
    const a = rand() * 250,
      y = rand() * 190 + 35;
    x.strokeStyle = "#98865b37";
    x.strokeRect(a, y, 4 + rand() * 11, 3 + rand() * 3);
  }
  const window = (a, b) => {
    x.fillStyle = "#617869";
    x.fillRect(a - 10, b - 2, 9, 49);
    x.fillRect(a + 43, b - 2, 9, 49);
    for (let j = 0; j < 7; j++) {
      line(a - 9, b + 4 + j * 6, a - 2, b + 4 + j * 6, "#adb494", 1.2);
      line(a + 45, b + 4 + j * 6, a + 51, b + 4 + j * 6, "#adb494", 1.2);
    }
    x.fillStyle = "#476970";
    x.fillRect(a, b, 42, 46);
    x.fillStyle = "#b9cfb3";
    x.beginPath();
    x.moveTo(a, b);
    x.lineTo(a + 16, b);
    x.lineTo(a + 8, b + 25);
    x.lineTo(a, b + 38);
    x.fill();
    x.strokeStyle = "#f5e8ce";
    x.lineWidth = 3;
    x.strokeRect(a - 1, b - 1, 44, 48);
    line(a + 20, b, a + 20, b + 47, "#efdfb9", 2.5);
    line(a, b + 22, a + 42, b + 22, "#efdfb9", 2.5);
    x.fillStyle = "#9b6041";
    x.fillRect(a - 4, b + 46, 50, 6);
    for (let i = 0; i < 16; i++) {
      const xx = a + rand() * 41,
        yy = b + 47 - rand() * 6;
      x.fillStyle = i % 2 ? "#809359" : "#ae5948";
      x.fillRect(xx, yy, 4, 4);
    }
  };
  if (kind === "front") {
    window(20, 98);
    window(187, 98);
    x.fillStyle = "#426557";
    x.fillRect(102, 108, 51, 148);
    x.strokeStyle = "#f6eacb";
    x.lineWidth = 5;
    x.strokeRect(101, 106, 53, 151);
    for (let j = 0; j < 4; j++) {
      x.strokeStyle = "#bbc2a0";
      x.lineWidth = 1.5;
      x.strokeRect(110 + (j % 2) * 18, 132 + Math.floor(j / 2) * 50, 14, 36);
    }
    x.fillStyle = "#d2b15c";
    x.beginPath();
    x.arc(144, 192, 3, 0, 7);
    x.fill();
    x.fillStyle = "#a45940";
    x.fillRect(91, 79, 74, 19);
    x.fillStyle = "#f5e7c9";
    x.font = "bold 11px Georgia";
    x.textAlign = "center";
    x.fillText(
      "No. " +
        (color.includes("be98") ? "01" : color.includes("d9a4") ? "07" : "12"),
      128,
      93,
    );
  } else {
    window(43, 84);
    window(170, 84);
  }
  return canvasTexture(c);
}

export function roofTiles(color) {
  const canvas = document.createElement("canvas");
  canvas.width = 384;
  canvas.height = 512;
  const ctx = canvas.getContext("2d"),
    rand = rng(784);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 384, 512);
  // Draw towards the eave. Each run of handmade tiles overlaps the one below.
  for (let row = 8; row >= -1; row--) {
    for (let col = -1; col < 9; col++) {
      const x = col * 55 + (row % 2) * 27.5,
        y = row * 63;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 54, y + 0.8);
      ctx.lineTo(x + 52, y + 60 + rand() * 3);
      ctx.quadraticCurveTo(x + 29, y + 72, x + 2, y + 63);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.fillStyle =
        rand() > 0.5
          ? "rgba(255,224,161," + rand() * 0.18 + ")"
          : "rgba(60,45,35," + rand() * 0.18 + ")";
      ctx.fill();
      ctx.strokeStyle = "#654c3a75";
      ctx.lineWidth = 2.3;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 4, y + 58);
      ctx.quadraticCurveTo(x + 27, y + 67, x + 49, y + 58);
      ctx.strokeStyle = "#eed29785";
      ctx.lineWidth = 2;
      ctx.stroke();
      for (let i = 0; i < 6; i++) {
        const a = x + 5 + rand() * 40,
          b = y + rand() * 40;
        ctx.fillStyle = i % 2 ? "#efd6a942" : "#785e4b44";
        ctx.fillRect(a, b, 0.6 + rand() * 1.4, 4 + rand() * 13);
      }
    }
  }
  return canvasTexture(canvas);
}
