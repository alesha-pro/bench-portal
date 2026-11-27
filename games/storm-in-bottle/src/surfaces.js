import * as T from "three";
import { canvasTex, rng, tau, std } from "./craft.js";
const random = rng(7419);
const lattice = Float32Array.from({ length: 256 * 256 }, () => random());
function noise(x, y) {
  const ix = Math.floor(x),
    iy = Math.floor(y);
  let a = x - ix,
    b = y - iy;
  a *= a * (3 - 2 * a);
  b *= b * (3 - 2 * b);
  const at = (i, j) => lattice[((j & 255) << 8) + (i & 255)];
  return (
    (at(ix, iy) * (1 - a) + at(ix + 1, iy) * a) * (1 - b) +
    (at(ix, iy + 1) * (1 - a) + at(ix + 1, iy + 1) * a) * b
  );
}
function wood() {
  return canvasTex(1536, 768, (c, w, h) => {
    const im = c.createImageData(w, h),
      d = im.data;
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const u = x / w,
          v = y / h,
          warp = noise(u * 3.4, v * 6) * 10 + noise(u * 9, v * 18) * 1.5;
        const rings = v * 118 + warp + 3 * Math.sin(u * 6 + v * 11),
          grain = noise(u * 27, rings * 2.2),
          pore = Math.max(0, noise(u * 180, rings * 8) - 0.6) * 45;
        const q =
          21 * (noise(u * 5, v * 18) - 0.5) +
          13 * (noise(u * 22, v * 85) - 0.5) +
          Math.sin(rings * tau) * 3.5 -
          13 * Math.pow(Math.max(0, Math.cos(rings * tau)), 8) +
          20 * (grain - 0.5) -
          pore +
          (random() - 0.5) * 7;
        const i = (y * w + x) * 4;
        d[i] = 103 + q;
        d[i + 1] = 65 + q * 0.78;
        d[i + 2] = 39 + q * 0.54;
        d[i + 3] = 255;
      }
    c.putImageData(im, 0, 0);
    for (let i = 0; i < 1500; i++) {
      let x = random() * w,
        y = random() * h;
      c.strokeStyle = "rgba(228,183,122," + random() * 0.12 + ")";
      c.lineWidth = random() * 0.8;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x + 1 + random() ** 3 * 40, y + random() * 1.2);
      c.stroke();
    }
  });
}
function mottled(base, spread, kind) {
  return canvasTex(512, 512, (c, w, h) => {
    const im = c.createImageData(w, h),
      d = im.data;
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        let n =
          (noise(x * 0.016, y * 0.022) - 0.5) * spread +
          (noise(x * 0.11, y * 0.21) - 0.5) * spread * 0.65 +
          (random() - 0.5) * spread * 0.55;
        if (kind === "cork" && noise(x * 0.34, y * 0.72) > 0.75) n -= 56;
        let i = (y * w + x) * 4;
        for (let k = 0; k < 3; k++) d[i + k] = base[k] + n;
        d[i + 3] = 255;
      }
    c.putImageData(im, 0, 0);
  });
}
export function rose(c, x, y, r, ink = "#785331") {
  c.save();
  c.translate(x, y);
  c.strokeStyle = ink;
  c.lineWidth = 1.3;
  for (const s of [0.66, 0.76, 0.98, 1.04]) {
    c.beginPath();
    c.arc(0, 0, r * s, 0, tau);
    c.stroke();
  }
  for (let i = 0; i < 64; i++) {
    const a = (tau * i) / 64;
    c.beginPath();
    c.moveTo(Math.cos(a) * r * 0.98, Math.sin(a) * r * 0.98);
    c.lineTo(Math.cos(a) * r * (i % 4 ? 0.94 : 0.86), Math.sin(a) * r * (i % 4 ? 0.94 : 0.86));
    c.stroke();
  }
  for (let i = 0; i < 16; i++) {
    c.save();
    c.rotate((i * tau) / 16);
    const l = r * (i % 2 ? 0.42 : i % 4 ? 0.66 : 0.91),
      b = r * (i % 2 ? 0.045 : 0.09);
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(-b, -b);
    c.lineTo(0, -l);
    c.lineTo(b, -b);
    c.closePath();
    c.stroke();
    c.fillStyle = ink;
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(-b, -b);
    c.lineTo(0, -l);
    c.fill();
    c.restore();
  }
  c.restore();
}
function chartTexture() {
  return canvasTex(1536, 1024, (c, w, h) => {
    const im = c.createImageData(w, h),
      d = im.data;
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const edge = Math.min(x, y, w - x, h - y),
          n =
            15 * (noise(x * 0.006, y * 0.007) - 0.5) +
            13 * (noise(x * 0.027, y * 0.027) - 0.5) +
            12 * (random() - 0.5) -
            23 * Math.exp(-edge / 30);
        let i = (y * w + x) * 4;
        d[i] = 197 + n;
        d[i + 1] = 167 + n;
        d[i + 2] = 111 + n;
        d[i + 3] = 255;
      }
    c.putImageData(im, 0, 0);
    // Oiled margins catch light along the curl; foxing follows the old folds.
    for (let i = 0; i < 640; i++) {
      const x = random() * w,
        y = random() * h,
        edge = Math.min(x, w - x, y, h - y);
      if (edge > 92 && random() > 0.15) continue;
      const size = 1 + random() ** 3 * 10,
        spot = c.createRadialGradient(x, y, 0, x, y, size);
      spot.addColorStop(0, "#8d562c44");
      spot.addColorStop(1, "#98703c00");
      c.fillStyle = spot;
      c.fillRect(x - size, y - size, size * 2, size * 2);
    }
    for (const xx of [501, 1009]) {
      const fold = c.createLinearGradient(xx - 8, 0, xx + 8, 0);
      fold.addColorStop(0, "#644b2600");
      fold.addColorStop(0.43, "#80582a29");
      fold.addColorStop(0.57, "#edd7a861");
      fold.addColorStop(1, "#e9d6b200");
      c.fillStyle = fold;
      c.fillRect(xx - 8, 20, 16, h - 40);
    }
    function rule(x, y, xx, yy) {
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(xx, yy);
      c.stroke();
    }
    c.strokeStyle = "#785d3f";
    for (let i = 0; i < 3; i++) c.strokeRect(26 + i * 5, 24 + i * 5, w - 52 - i * 10, h - 48 - i * 10);
    c.save();
    c.beginPath();
    c.rect(41, 41, w - 82, h - 82);
    c.clip();
    c.lineWidth = 1;
    for (let x = 70; x < w; x += 76) {
      c.strokeStyle = "#81634250";
      rule(x, 0, x, h);
    }
    for (let y = 70; y < h; y += 76) rule(0, y, w, y);
    for (const [x, y] of [
      [380, 455],
      [1100, 700],
      [850, 115],
    ])
      for (let i = 0; i < 32; i++) {
        const a = (i * Math.PI) / 16;
        c.strokeStyle = i % 4 ? "#644c322b" : "#8c483768";
        rule(x, y, x + 1900 * Math.cos(a), y + 1900 * Math.sin(a));
      }
    function island(x, y, rx, ry, seed) {
      let pts = [];
      for (let i = 0; i < 270; i++) {
        const a = (tau * i) / 270;
        const n =
          0.77 +
          0.35 * noise(Math.cos(a) * 3 + seed, Math.sin(a) * 3) +
          0.14 * Math.sin(a * 7 + seed) +
          0.1 * noise(Math.cos(a) * 29, Math.sin(a) * 29);
        pts.push([Math.cos(a) * rx * n, Math.sin(a) * ry * n]);
      }
      for (const s of [1.09, 1.055, 1.022, 1]) {
        c.beginPath();
        pts.forEach(([a, b], i) =>
          i ? c.lineTo(x + a * s, y + b * s) : c.moveTo(x + a * s, y + b * s),
        );
        c.closePath();
        c.lineWidth = s === 1 ? 2.7 : 0.8;
        c.strokeStyle = s === 1 ? "#5d5137" : "#656847";
        if (s === 1) {
          c.fillStyle = "#a49b6970";
          c.fill();
        }
        c.stroke();
      }
      pts.forEach(([a, b], i) => {
        if (i % 3) return;
        c.strokeStyle = "#60533b90";
        rule(x + a * 0.985, y + b * 0.985, x + a * 0.94 + 3, y + b * 0.94);
      });
    }
    island(1400, 65, 448, 370, 51);
    island(157, 960, 300, 390, 17);
    island(870, 554, 112, 174, 32);
    island(1020, 690, 51, 73, 75);
    island(638, 377, 42, 61, 22);
    // Engraved wavelets and a dead-reckoning course between the islands.
    c.strokeStyle = "#635e404f";
    c.lineWidth = 1.1;
    for (let i = 0; i < 122; i++) {
      const x = 50 + random() * (w - 100),
        y = 48 + random() * (h - 96);
      for (let k = 0; k < 3; k++) {
        const px = x + k * 6,
          py = y + 1.5 * Math.sin(k);
        c.beginPath();
        c.moveTo(px, py);
        c.quadraticCurveTo(px + 3, py + 3, px + 6, py);
        c.stroke();
      }
    }
    const route = [
      [364, 678],
      [530, 595],
      [595, 488],
      [740, 467],
      [813, 388],
      [947, 336],
    ];
    c.strokeStyle = "#934939";
    c.lineWidth = 2.1;
    c.setLineDash([7, 5]);
    c.beginPath();
    route.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
    c.stroke();
    c.setLineDash([]);
    for (const [x, y] of route) {
      c.beginPath();
      c.arc(x, y, 4, 0, tau);
      c.stroke();
    }
    c.fillStyle = "#735436";
    c.font = "italic 14px Georgia";
    c.fillText("Track of the Vesper", 540, 564);
    rose(c, 355, 417, 103);
    c.fillStyle = "#553f2b";
    c.font = "italic 33px Georgia";
    c.fillText("Mare Incognitum", 559, 279);
    c.font = "19px Georgia";
    c.fillText("Isles of Vesper", 857, 577);
    c.fillText("C. Meridian", 1220, 362);
    c.strokeStyle = "#715c3f";
    c.lineWidth = 1.6;
    c.strokeRect(392, 807, 620, 112);
    c.strokeRect(398, 813, 608, 100);
    c.fillStyle = "#66513c";
    c.textAlign = "center";
    c.font = "28px Georgia";
    c.fillText("THE   WESTERN   APPROACHES", 702, 858);
    c.font = "italic 18px Georgia";
    c.fillText("Soundings reduced to the low-water mark", 702, 890);
    c.textAlign = "left";
    c.font = "bold 37px Georgia";
    c.fillText("CARTA   MARINA", 103, 116);
    c.font = "16px Georgia";
    c.fillText("A SURVEY OF THE WESTERN PASSAGE", 106, 148);
    for (let i = 0; i < 100; i++) {
      c.font = "italic 11px Georgia";
      c.fillStyle = "#705c40";
      c.fillText(String(12 + Math.floor(random() * 80)), random() * w, random() * h);
    }
    c.restore();
  });
}
export async function materials() {
  const loader = new T.TextureLoader();
  const [boards, normal, rough, redwood] = await Promise.all(
    ["oak-color.jpg", "oak-normal.jpg", "oak-rough.jpg", "mahogany.jpg"].map((f) =>
      loader.loadAsync("assets/" + f),
    ),
  );
  for (const t of [boards, normal, rough]) {
    t.wrapS = t.wrapT = T.RepeatWrapping;
    t.repeat.set(3.5, 3.5);
    t.anisotropy = 12;
  }
  boards.colorSpace = redwood.colorSpace = T.SRGBColorSpace;
  const table = std(0x8c786a, 0.79, 0, {
    map: boards,
    normalMap: normal,
    normalScale: new T.Vector2(0.48, 0.48),
    roughnessMap: rough,
  });

  const oak = wood();
  const brassMap = mottled([213, 174, 106], 44);
  const parchmentFinish = canvasTex(512, 340, (c, w, h) => {
    const image = c.createImageData(w, h);
    for (let j = 0; j < h; j++)
      for (let i = 0; i < w; i++) {
        const edge = Math.min(i, w - 1 - i, j, h - 1 - j);
        const rough = 230 - 144 * Math.exp(-edge / 8) + 18 * (noise(i * 0.14, j * 0.19) - 0.5);
        image.data.set([rough, rough, rough, 255], 4 * (j * w + i));
      }
    c.putImageData(image, 0, 0);
  });
  parchmentFinish.colorSpace = T.NoColorSpace;
  const cork = mottled([158, 109, 60], 77, "cork");
  const oakM = std(0xffffff, 0.51, 0, { map: oak, bumpMap: oak, bumpScale: 0.047 });
  return {
    table,
    oak: oakM,
    darkWood: std(0xad907e, 0.38, 0, { map: redwood, bumpMap: redwood, bumpScale: 0.018 }),
    hull: std(0xb77c50, 0.43, 0, { map: oak }),
    brass: std(0xdabe88, 0.42, 0.78, { map: brassMap }),
    bright: std(0xf3d9a5, 0.285, 0.84, { map: brassMap }),
    black: std(0x272c28, 0.38, 0.65),
    cork: std(0xffffff, 0.95, 0, { map: cork, bumpMap: cork, bumpScale: 0.07 }),
    chart: std(0xf2e9d3, 0.93, 0, {
      map: chartTexture(),
      roughnessMap: parchmentFinish,
      side: T.DoubleSide,
    }),
    wax: std(0x84251f, 0.34, 0.13),
    cord: std(0xb29462, 0.9),
    ropeDark: std(0x463723, 0.86),
  };
}
