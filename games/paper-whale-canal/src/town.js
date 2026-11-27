import { TAU, rng, mix, shape, line, ellipse, rect, wash, clip, halo } from './ink.js';
import { canalInn, guild, bayWindow } from './inns.js';
const ink = '#172f36',
  shadow = '#294049',
  snow = '#c6d1c2';
export const bank = (x) => (x < 501 ? 428 + (501 - x) * 0.273 : x > 858 ? 428 + (x - 858) * 0.27 : 428);
const chimneys = [];
export const smokePorts = () => chimneys;

function lampWindow(g, x, y, w, h, on, r, arch = false) {
  const d = arch
    ? `M${x} ${y + h}V${y + 5}Q${x + w * 0.45} ${y - 7} ${x + w} ${y + 4}V${y + h}Z`
    : `M${x} ${y}l${w} -1v${h}l${-w} 1Z`;
  if (on) halo(g, x + w * 0.5, y + h * 0.55, w * 1.6, 'rgba(246,173,77,.18)');
  shape(
    g,
    d,
    on
      ? wash(g, x, y, x + w * 0.3, y + h, [
          [0, '#c78949'],
          [0.45, '#f6cc80'],
          [1, '#da9d59']
        ])
      : '#415153',
    ink,
    1.7
  );
  line(g, x + w * 0.47, y, x + w * 0.47, y + h, ink, 1.25);
  line(g, x, y + h * 0.47, x + w, y + h * 0.47 - 1, ink, 1.15);
  line(g, x - 2, y + h + 1, x + w + 2, y + h, '#7b7967', 2.1);
  if (on && r() > 0.56)
    shape(g, `M${x + 1} ${y + 1}l${w * 0.37} -.4q-1 6 ${-w * 0.37} ${h * 0.66}Z`, 'rgba(139,81,50,.53)');
}
export function lantern(g, x, y, s, on = true) {
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  line(g, 0, -22, 0, -8, '#3a3831', 0.8);
  if (on) halo(g, 0, 0, 26, 'rgba(253,169,60,.26)');
  shape(
    g,
    'M-4 -8Q-10 -5 -8 3Q-8 8 -4 9Q1 10 5 8Q9 6 8 -2Q8 -6 4 -8Z',
    on
      ? wash(g, -8, 0, 8, 0, [
          [0, '#af6941'],
          [0.47, '#ffda8b'],
          [1, '#ca8250']
        ])
      : '#697673',
    '#403e36',
    0.85
  );
  for (const x of [-4, 0, 4])
    shape(g, `M${x * 0.65} -7Q${x * 1.45} 1 ${x * 0.7} 8`, null, 'rgba(110,76,48,.65)', 0.55);
  for (const y of [-5, 0, 5]) line(g, -7, y, 7, y + 0.25, 'rgba(119,75,46,.5)', 0.55);
  line(g, -4.5, -8, 4.5, -8, '#393b33', 2);
  line(g, -4, 9, 4, 9, '#403c30', 2);
  line(g, 0, 10, 0, 15, '#b38855', 0.8);
  g.restore();
}
function roof(g, p, r, a, b) {
  shape(
    g,
    p,
    wash(g, 0, -150, 12, -79, [
      [0, a],
      [0.56, b],
      [1, '#35464a']
    ]),
    ink,
    2.1
  );
  clip(g, p, () => {
    for (let z = -148; z < -63; z += 4.5) {
      shape(g, `M-100 ${z + 11}Q-13 ${z + 6} 100 ${z - 14}`, null, '#697b79', 0.85);
      for (let x = -94 + r() * 14; x < 105; x += 8 + r() * 4)
        line(g, x, z - x * 0.14, x + 2, z + 3.7 - x * 0.14, '#203c46', 0.77);
    }
    for (let k = 0; k < 195; k++) {
      const x = -90 + r() * 210,
        y = -160 + r() * 100;
      line(g, x, y, x + 3 + r() * 7, y - 0.6, 'rgba(208,211,183,.27)', 0.58);
    }
  });
}
function house(g, x, y, s, flip, seed, lit, record) {
  const r = rng(seed),
    sg = flip ? -1 : 1,
    plaster = ['#977e64', '#83918b', '#a99778', '#7c7f70', '#b3a287'][seed % 5];
  g.save();
  g.translate(x, y);
  g.scale(s * sg, s);
  // Snow slips off a ridge onto a half-timbered gable and a receding gallery.
  const h = 71 + r() * 31,
    peak = 34 + r() * 24;
  const tile = ['#57757b', '#526b70', '#596468', '#6f716a'][seed % 4];
  const e = -h,
    top = e - peak,
    dy = -12,
    walls = `M-70 0V${e}L-47 ${top}L-17 ${e - 2}L72 ${e + dy - 2}V-13L-17 1Z`;
  shape(g, walls, plaster, ink, 1.65);
  shape(
    g,
    `M-17 ${e}L72 ${e + dy - 2}V-13L-17 1Z`,
    wash(g, 0, e, 7, -4, [
      [0, '#394e50'],
      [0.35, plaster],
      [1, '#645e51']
    ]),
    ink,
    1
  );
  clip(g, walls, () => {
    for (let j = 0; j < 650; j++) {
      const xx = -75 + r() * 155,
        yy = top + r() * (-top + 4),
        length = 0.6 + r() ** 2 * 6;
      line(
        g,
        xx,
        yy,
        xx + length,
        yy - 0.18 * length,
        r() < 0.7 ? 'rgba(48,60,56,.28)' : 'rgba(228,217,181,.38)',
        0.34 + r() * 0.55
      );
    }
    for (let i = 0; i < 4; i++) {
      const yy = -i * h * 0.33;
      shape(g, `M-72 ${yy}L-17 ${yy + 1}L74 ${yy - 13}`, null, ink, i === 0 ? 4 : 2.5);
      shape(g, `M-72 ${yy - 1.4}L-18 ${yy - 0.4}L72 ${yy - 14.6}`, null, '#b8a486', 0.7);
    }
    for (const xx of [-69, -47, -18, 4, 27, 50, 72]) {
      const shift = xx < -16 ? 0 : -(xx + 16) * 0.148;
      line(g, xx, shift + 1, xx - 0.4, xx === -47 ? top : e + shift, ink, 2.4);
      line(g, xx + 1.35, shift, xx + 1.4, e + shift, '#9c937a', 0.62);
    }
    for (const xx of [-68, -46, -16, 28]) {
      let off = xx < -16 ? 0 : -(xx + 16) * 0.148;
      line(g, xx, -h * 0.36 + off, xx + 18, -h * 0.63 + off - 1, shadow, 1.8);
    }
    if (seed % 3 !== 1) {
      for (let j = 0; j < 9; j++) line(g, -68, e + j * 2.1, -19, e + j * 2.1, '#565a51', 0.62);
    }
  });
  const stack = 34 + r() * 22;
  shape(g, `M${stack} ${top - 4}v-24l8 -2 5 2v22Z`, '#516165', ink, 1.3);
  for (let k = 0; k < 5; k++)
    line(g, stack + 1, top - 8 - k * 4, stack + 12, top - 9 - k * 4, '#a39481', 0.74);
  shape(g, `M${stack - 2} ${top - 28}l10 -2 7 2 -1 3 -16 1Z`, snow, ink, 1);
  if (record) chimneys.push([x + (stack + 5) * s * sg, y + (top - 30) * s, s, seed]);
  const p = `M-49 ${top}L39 ${top + dy}Q56 ${top + peak * 0.52 + dy} 82 ${e + dy - 6}L80 ${e + dy - 1}L-17 ${e + 3}L-75 ${e + 3}L-75 ${e - 1}Q-62 ${e - 12} -49 ${top}Z`;
  roof(g, p, r, tile, '#74847e');
  shape(
    g,
    `M-75 ${e + 1}Q-62 ${e - 18} -49 ${top - 3}L39 ${top + dy - 3}Q52 ${top + dy + 13} 57 ${top + dy + 21}Q49 ${top + dy + 19} 43 ${top + dy + 10}L-43 ${top + 6}Q-60 ${e - 8} -73 ${e + 2}Z`,
    snow,
    '#889e9d',
    0.7
  );
  shape(g, `M-50 ${top}Q-37 ${e - 17} -17 ${e}L-73 ${e + 1}Q-62 ${e - 12} -50 ${top}Z`, plaster, ink, 1.7);
  for (let i = 0; i < 5; i++) {
    const yy = e - 4 - i * 4;
    line(g, -69 + i * 2.5, yy, -22 - i * 2.8, yy - 1, '#625f50', 0.72);
  }
  line(g, -49, e - 1, -49, top + 5, ink, 2.4);
  shape(
    g,
    `M-76 ${e + 2}Q-61 ${e - 14} -49 ${top - 2}Q-36 ${e - 16} -16 ${e - 1}L81 ${e + dy - 5}`,
    null,
    '#d2d5bf',
    2.8
  );
  line(g, -16, e + 4, 81, e + dy - 1, ink, 2.9);
  for (let i = 0; i < 13; i++) {
    const xx = -14 + i * 7;
    line(g, xx, e + 4 - (xx + 16) * 0.143, xx, e + 7 - (xx + 16) * 0.143, ink, 1.7);
  }
  // Separate seeds keep architecture identical between the two illumination plates.
  const wr = rng(seed + 189);
  for (const xx of [-64, -42, -12, 10, 33, 55]) {
    const off = xx < -16 ? 0 : -(xx + 16) * 0.147;
    for (const row of [0, 1]) {
      const yy = e + 8 + off + row * h * 0.35,
        w = xx < -16 ? 12.5 : 13.8,
        on = wr() < 0.41;
      lampWindow(g, xx, yy, w, h * 0.19, on || lit, rng(seed + xx + row * 25), row === 1 && seed % 6 === 1);
    }
  }
  if (s > 0.55) {
    const xx = seed % 2 === 0 ? -51 : 20;
    shape(g, `M${xx} -5v-19q5 -6 11 -2v24Z`, '#34464a', ink, 1.1);
    for (let k = 0; k < 3; k++) line(g, xx + 2 + k * 3, -5, xx + 2 + k * 3, -22, '#797363', 0.6);
    const lx = seed % 2 === 0 ? -73 : 66,
      ly = e + 34;
    shape(g, `M${lx + 8} ${ly - 17}q-8 -7 -16 -4`, null, ink, 2);
    lantern(g, lx - 7, ly, 0.69, true);
    if (seed % 2) {
      shape(g, `M-18 ${e + h * 0.61}l47 -7 6 4 -53 8Z`, snow, ink, 1.2);
      for (let k = 0; k < 7; k++)
        line(g, -16 + k * 7, e + h * 0.64 - k, -16 + k * 7, e + h * 0.56 - k, ink, 1);
      line(g, -18, e + h * 0.54, 29, e + h * 0.54 - 7, ink, 1.5);
    }
  }
  g.restore();
}
function stonework(g, p, top, bottom, spacing, seed) {
  const r = rng(seed);
  clip(g, p, () => {
    for (let y = top; y < bottom; y += spacing) {
      let x = -206 - r() * 24;
      while (x < 1340) {
        const w = (1.1 + r() * 2.1) * spacing,
          dy = (r() - 0.5) * 1.9;
        shape(
          g,
          `M${x + 0.5} ${y + 1}l${w - 1} ${dy}l-.6 ${spacing - 1.1}l${-w + 1} ${-dy + 0.3}Z`,
          r() < 0.5 ? 'rgba(172,178,153,.13)' : 'rgba(18,39,49,.12)',
          '#334d54',
          0.64
        );
        line(g, x + 1, y + 1, x + w * 0.64, y + 1 + dy * 0.65, 'rgba(204,205,177,.37)', 0.72);
        x += w;
      }
    }
  });
}
function tower(g, x, y, s, lit) {
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  shape(g, 'M-25 0L-21 -103L-17 -174L18 -178L23 -100L27 0Z', '#85928a', ink, 2);
  shape(g, 'M5 -173L18 -178L26 0H4Z', '#536b70', ink, 1.2);
  for (let j = 0; j < 29; j++) {
    let yy = -j * 6;
    line(g, -20, yy, 17, yy - 1, '#5b6d69', 0.6);
    for (let k = -1; k <= 1; k++)
      line(g, k * 12 + (j % 2) * 6, yy, k * 12 + (j % 2) * 6, yy + 5, '#607671', 0.5);
  }
  for (const yy of [-37, -79, -119, -177]) shape(g, `M-24 ${yy}l39 -2 8 -4v5l-8 4 -39 1Z`, '#a7b2a3', ink, 1);
  for (let yy = -96; yy < 0; yy += 30) shape(g, `M-8 ${yy}v-9q3 -6 6 0v9Z`, ink);
  // The bell is visible through the open belfry.
  shape(g, 'M-22 -174L-23 -204L-17 -207L17 -209L21 -205L21 -177Z', '#89968e', ink, 1.6);
  shape(
    g,
    'M-16 -178V-195Q-11 -206 -5 -195V-178ZM0 -178V-196Q5 -207 11 -196V-179ZM15 -181V-196Q17 -204 19 -198V-185Z',
    ink
  );
  shape(g, 'M-13 -191q3 -4 5 0l1 7 2 2h-10l2 -2Z', '#b6945d');
  ellipse(g, -10, -181, 1.3, 1.4, '#d8aa69');
  shape(g, 'M-26 -204L-17 -213Q-8 -222 -7 -232L4 -234Q6 -218 16 -214L24 -208L18 -204Z', '#3b5159', ink, 1.6);
  shape(g, 'M-23 -205Q-10 -217 -6 -231L-2 -232Q-7 -215 -17 -208L18 -209L24 -207L15 -204Z', snow);
  shape(g, 'M-9 -232Q-7 -240 -4 -242L-2 -262L1 -246Q6 -241 5 -235L8 -232Z', ink);
  line(g, -2, -260, -2, -271, ink, 1.15);
  line(g, -7, -266, 4, -266, ink, 1);
  ellipse(g, -7, -151, 11.8, 13, '#28424b');
  ellipse(g, -7, -151, 9.6, 10.8, lit ? '#efd396' : '#d9cba2');
  for (let i = 0; i < 12; i++) {
    let a = (i * TAU) / 12;
    line(
      g,
      -7 + 8 * Math.sin(a),
      -151 + 9 * Math.cos(a),
      -7 + 6.8 * Math.sin(a),
      -151 + 7.8 * Math.cos(a),
      ink,
      0.84
    );
  }
  for (const side of [-1, 1]) {
    const xx = side === 1 ? 13 : -20;
    for (let k = 0; k < 8; k++) {
      rect(g, xx, -123 + k * 11, 3.3, 5.7, '#a8b1a1');
      line(g, xx, -118 + k * 11, xx + 3, -118 + k * 11, '#617778', 0.62);
    }
  }
  shape(g, 'M-18 -134L-7 -139L3 -135M-21 -170L-8 -174L5 -171M-22 -101L3 -103L21 -110', null, '#bec2ad', 1.1);
  line(g, -7, -151, -7, -157, ink, 1.2);
  line(g, -7, -151, -11, -153, ink, 1.3);
  g.restore();
}
// Three snow-loaded eaves recede into the mountain mist.
function pagoda(g, x, y, s) {
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  for (let i = 0; i < 3; i++) {
    const w = 32 - i * 6;
    g.save();
    g.translate(0, -i * 21);
    shape(g, `M${-w * 0.64} 1v-21l${w * 1.28} -1v22Z`, '#768584');
    for (let j = -2; j <= 2; j++) {
      line(g, (j * w) / 5, -2, (j * w) / 5, -18, '#455e67', 1.8);
      if (j % 2) line(g, (j * w) / 5 + 2, -11, (j * w) / 5 + 2, -7, '#c1b58e', 2.1);
    }
    shape(
      g,
      `M${-w - 6} -23Q${-w * 0.64} -18 -4 -34L4 -35Q${w * 0.68} -20 ${w + 5} -25L${w} -17Q0 -11 ${-w} -17Z`,
      '#425d69'
    );
    shape(
      g,
      `M${-w - 5} -24Q${-w * 0.52} -20 -3 -35L4 -35Q${w * 0.51} -23 ${w + 3} -25Q${w * 0.57} -19 2 -31Q${-w * 0.61} -16 ${-w - 5} -24Z`,
      '#bdc8b8'
    );
    g.restore();
  }
  line(g, 0, -74, 0, -92, '#55717a', 1.4);
  for (let i = 0; i < 4; i++) ellipse(g, 0, -77 - i * 3, 3 - i * 0.48, 1.15, '#597079');
  g.restore();
}
function bridge(g, x, y, s) {
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  const p =
    'M-188 6Q-60 -24 60 -23Q118 -23 183 -10L184 28L148 29Q144 -10 115 -10Q83 -9 82 30L64 31Q64 -11 25 -10Q-17 -8 -22 36L-42 37Q-40 3 -71 4Q-103 7 -112 44L-191 50Z';
  shape(
    g,
    p,
    wash(g, 0, -21, 5, 44, [
      [0, '#97a297'],
      [0.19, '#728781'],
      [0.75, '#577079'],
      [1, '#3e5964']
    ]),
    '#304952',
    2
  );
  stonework(g, p, -26, 50, 5.5, 646);
  for (const [cx, cy, rx, ry] of [
    [-76, 43, 37, 40],
    [22, 34, 44, 45],
    [115, 29, 34, 39]
  ]) {
    const vault = new Path2D();
    vault.ellipse(cx, cy, rx, ry, 0, Math.PI, TAU);
    vault.ellipse(cx + 3.6, cy + 2.4, rx - 3.8, ry - 1.3, 0, TAU, Math.PI, true);
    vault.closePath();
    shape(g, vault, '#465e65');
    g.beginPath();
    g.ellipse(cx, cy, rx, ry, 0, Math.PI, TAU);
    g.strokeStyle = '#b0b8a7';
    g.lineWidth = 4.9;
    g.stroke();
    for (let j = 0; j < 14; j++) {
      let a = Math.PI + (j * Math.PI) / 13;
      line(
        g,
        cx + (rx - 2) * Math.cos(a),
        cy + (ry - 2) * Math.sin(a),
        cx + (rx + 3) * Math.cos(a),
        cy + (ry + 3) * Math.sin(a),
        '#4d666b',
        0.9
      );
    }
  }
  shape(g, 'M-189 4Q28 -46 183 -12', null, '#304951', 4);
  shape(g, 'M-189 2Q28 -47 183 -14', null, '#cfceba', 2.7);
  for (let j = 0; j < 30; j++) {
    let u = j / 29,
      xx = mix(-187, 182, u),
      yy = (1 - u) ** 2 * 2 + 2 * (1 - u) * u * -47 + u * u * -14;
    line(g, xx, yy, xx, yy - 7.3, '#40565a', 1.65);
  }
  shape(g, 'M-189 -6Q28 -55 183 -22', null, '#354f57', 1.4);
  g.restore();
}
export function farTown(g) {
  const r = rng(1445);
  // Distant town, individually offset ridge lines, dormers and chimneys.
  for (let i = 0; i < 67; i++) {
    let x = -15 + i * 20 + r() * 8,
      y = 406 + r() * 12,
      h = 12 + r() * 24,
      w = 10 + r() * 16;
    rect(g, x, y - h, w, h + 10, '#758988');
    shape(g, `M${x - 2} ${y - h + 1}l${w * 0.46} ${-w * 0.52}l${w * 0.64} ${w * 0.47}Z`, '#59737a');
    line(g, x - 2, y - h, x + w * 0.46, y - h - w * 0.52, '#b3b9aa', 1.4);
    for (let j = 0; j < 3; j++) rect(g, x + 2 + j * w * 0.31, y - h + 4, 1.8, 3.4, r() < 0.2 ? '#d6ba85' : '#4d696e');
  }
  pagoda(g, 741, 393, 0.74);
  pagoda(g, 561, 391, 0.38);
  tower(g, 610, 420, 0.37, false);
  for (const [x, y, s, f, id] of [
    [496, 422, 0.35, 0, 14],
    [534, 421, 0.38, 0, 42],
    [573, 422, 0.3, 0, 55],
    [841, 426, 0.43, 1, 40],
    [879, 424, 0.42, 1, 42],
    [924, 425, 0.42, 1, 71],
    [968, 423, 0.4, 1, 63]
  ])
    house(g, x, y, s, f, id, false, false);
  // Through the openings, the viewer sees a second, more distant stretch of water.
  rect(
    g,
    495,
    411,
    371,
    19,
    wash(g, 0, 411, 0, 431, [
      [0, '#839692'],
      [0.4, '#637e82'],
      [1, '#486874']
    ])
  );
  for (let j = 0; j < 170; j++) {
    const xx = 496 + r() * 367,
      yy = 412 + r() * 18;
    line(g, xx, yy, xx + r() * 9 + 0.7, yy, 'rgba(188,199,178,.38)', 0.48);
  }
}
export function belltower(g) {
  tower(g, 910, 420, 1.03, false);
}
export function stoneBridge(g) {
  bridge(g, 683, 411, 1.02);
}
export function paintTown(g, lit = false, record = false) {
  const r = rng(6423);
  if (record) chimneys.length = 0;
  // Embankments follow different vanishing lines so the canal opens toward the viewer.
  for (const right of [false, true]) {
    const l = right ? 852 : -40,
      rr = right ? 1320 : 506,
      bl = bank(l),
      br = bank(rr);
    const p = `M${l} ${bl - 34}L${rr} ${br - 34}V${br}L${l} ${bl}Z`;
    shape(g, p, '#607273', '#263e49', 1.5);
    stonework(g, p, 390, 600, 7.4, right ? 32 : 89);
    line(g, l, bl - 32, rr, br - 32, '#b4bcae', 3.4);
  }
  const buildings = [
    [487, 0.36, 21],
    [453, 0.42, 32],
    [404, 0.51, 8],
    [352, 0.6, 13],
    [285, 0.7, 24],
    [208, 0.83, 37],
    [113, 0.99, 53],
    [0, 1.25, 68],
    [-129, 1.44, 51]
  ];
  for (const [x, s, id] of buildings) house(g, x, bank(x) - 23, s, false, id, lit, record);
  for (const [x, s, id] of [
    [870, 0.38, 72],
    [908, 0.44, 16],
    [950, 0.48, 33],
    [994, 0.58, 7],
    [1054, 0.68, 5],
    [1121, 0.77, 4],
    [1208, 0.94, 15],
    [1316, 1.17, 30]
  ])
    house(g, x, bank(x) - 21, s, true, id, lit, record);
  guild(g, 1048, bank(1048) - 20, 0.73, lit);
  guild(g, 241, bank(241) - 22, 0.65, lit);
  canalInn(g, 39, bank(39) - 20, 1.16, lit);
  canalInn(g, 1293, bank(1293) - 20, 1.24, lit);
  bayWindow(g);
  // Wires sag above the quay. Paper globes catch the whale's moving light.
  for (const [ax, ay, bx, by, n] of [
    [106, 371, 247, 394, 6],
    [1006, 391, 1191, 376, 7]
  ]) {
    const mid = (ay + by) * 0.5 + 17;
    shape(g, `M${ax} ${ay}Q${(ax + bx) * 0.5} ${mid} ${bx} ${by}`, null, '#344a4e', 1);
    for (let i = 1; i <= n; i++) {
      const u = i / (n + 1),
        xx = ax + (bx - ax) * u,
        yy = (1 - u) ** 2 * ay + 2 * (1 - u) * u * mid + u * u * by;
      lantern(g, xx, yy + 5, 0.36 + 0.035 * Math.sin(i), lit || i % 3 !== 0);
    }
  }
  // Iron rings, pilings and snow caught along the stone coping.
  for (const right of [false, true]) {
    const end = right ? 1320 : 502,
      start = right ? 853 : -40;
    for (let x = start + 8; x < end; x += 24 + r() * 21) {
      let y = bank(x) - 8,
        s = 0.48 + Math.abs((right ? 855 : 501) - x) * 0.0014;
      line(g, x, y + 7 * s, x - 0.6 * s, y - 6 * s, '#31474d', 3.1 * s);
      line(g, x - 1 * s, y - 6 * s, x + 1.3 * s, y - 6 * s, '#cbd1bd', 1.1 * s);
      if (r() > 0.58) {
        g.beginPath();
        g.ellipse(x + 6 * s, y - 2 * s, 2 * s, 3 * s, 0, 0, TAU);
        g.strokeStyle = ink;
        g.lineWidth = s;
        g.stroke();
      }
    }
  }
}
