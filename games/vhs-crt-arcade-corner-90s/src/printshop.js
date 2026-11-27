import { canvasTex, ink, speckle, rand } from './craft.js';
const palettes = [
  ['NIGHT', 'DRIVE', '#262b4a', '#f28569', '#b05d78', '#f4ccb2'],
  ['LUNAR', 'RELAY', '#152f41', '#73b7af', '#46768a', '#e4d7a5'],
  ['AFTER', 'IMAGE', '#553b50', '#dfa68d', '#a76179', '#e5ccae'],
  ['PACIFIC', 'STATIC', '#223e45', '#a3c49c', '#527d78', '#e8ddc1'],
  ['NEON', 'RUNNER', '#293045', '#d59858', '#4c7785', '#f6d1a1'],
];
export const posterMaps = palettes.map(([a, b, bg, hot, mid, paper], k) =>
  canvasTex(512, 720, (c, w, h) => {
    c.fillStyle = paper;
    c.fillRect(0, 0, w, h);
    c.fillStyle = bg;
    c.fillRect(13, 12, w - 26, h - 24);
    let g = c.createLinearGradient(0, 115, 0, 570);
    g.addColorStop(0, bg);
    g.addColorStop(0.72, mid);
    g.addColorStop(1, hot);
    c.fillStyle = g;
    c.fillRect(26, 108, 460, 438);
    for (let i = 0; i < 175; i++) {
      c.fillStyle = 'rgba(255,239,203,.65)';
      let v = rand() * 2 + 0.6;
      c.fillRect(28 + rand() * 455, 112 + rand() * 395, v, v);
    }
    c.fillStyle = hot;
    c.beginPath();
    c.arc(k % 2 ? 317 : 269, 269, k % 2 ? 121 : 137, 0, Math.PI * 2);
    c.fill();
    if (k % 2 === 0) {
      for (let j = 0; j < 12; j++) {
        c.fillStyle = mid;
        c.fillRect(28, 276 + j * 12, 456, 2 + j * 0.4);
      }
      for (let layer = 0; layer < 2; layer++) {
        c.beginPath();
        c.moveTo(26, 546);
        for (let x = 26; x < 487; x += 11)
          c.lineTo(x, 348 + layer * 45 + Math.sin(x * 0.022 + k) * 27 + rand() * 28);
        c.lineTo(486, 546);
        c.closePath();
        c.fillStyle = layer ? bg : mid;
        c.fill();
      }
      c.strokeStyle = hot;
      c.lineWidth = 2;
      for (let x = -425; x < 1000; x += 82) {
        c.beginPath();
        c.moveTo(250, 403);
        c.lineTo(x, 546);
        c.stroke();
      }
      for (let j = 0; j < 8; j++) {
        c.beginPath();
        c.moveTo(26, 406 + j * j * 2.5);
        c.lineTo(486, 406 + j * j * 2.5);
        c.stroke();
      }
    } else {
      c.save();
      c.translate(315, 269);
      c.rotate(-0.34);
      c.strokeStyle = paper;
      c.lineWidth = 6;
      c.beginPath();
      c.ellipse(0, 0, 157, 27, 0, 0, Math.PI * 2);
      c.stroke();
      c.restore();
      for (let j = 0; j < 9; j++) {
        c.strokeStyle = j % 2 ? paper : mid;
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(26, 470 + j * 7);
        c.bezierCurveTo(143, 180 + j * 12, 178, 490 + j * 7, 485, 316 + j * 15);
        c.stroke();
      }
    }
    ink(c, 'M I D N I G H T   V I D E O', 27, 53, 20, paper, true, 'left', 'monospace');
    ink(c, 'FEATURE PRESENTATION   /   STEREO', 27, 84, 14, hot, true, 'left', 'monospace');
    c.save();
    c.transform(1, 0, -0.13, 1, 75, 0);
    ink(c, a, 34, 513, 86, paper, true, 'left', 'sans-serif');
    ink(c, b, 27, 593, k === 3 ? 77 : 88, paper);
    c.restore();
    ink(c, 'M • V     HOME VIDEO', 30, 641, 20, hot, true, 'left', 'monospace');
    ink(c, 'A MIDNIGHT PICTURES RELEASE', 30, 673, 14, paper, true, 'left', 'monospace');
    ink(c, 'VHS', 406, 675, 24, paper);
    for (let i = 0; i < 36; i++) {
      c.fillStyle = 'rgba(225,215,170,.21)';
      c.fillRect(14 + rand() * 484, 16 + rand() * 681, 2 + rand() * 19, 1);
    }
    speckle(c, w, h, 26500);
  }),
);
export function spineMap(i) {
  const [a, b, bg, hot, mid, paper] = palettes[i % 5];
  return canvasTex(768, 118, (c, w, h) => {
    c.fillStyle = i % 3 === 0 ? '#c5bea6' : bg;
    c.fillRect(0, 0, w, h);
    const f = i % 3 === 0 ? '#2c3337' : paper;
    c.fillStyle = hot;
    c.fillRect(14, 0, 10, h);
    c.fillStyle = mid;
    c.fillRect(26, 0, 6, h);
    ink(c, a + ' ' + b, 50, 76, 46, f, true, 'left', 'serif');
    c.fillStyle = '#cfc7ae';
    c.fillRect(570, 12, 151, 92);
    ink(c, 'MV–0' + (71 + i), 581, 45, 18, '#30343a', true, 'left', 'monospace');
    for (let q = 0; q < 33; q++) {
      c.fillStyle = '#2c2f30';
      c.fillRect(581 + q * 3.8, 54, 1 + rand() * 2, 28);
    }
    ink(c, 'VHS', 728, 83, 14, f);
    speckle(c, w, h, 4000);
  });
}
