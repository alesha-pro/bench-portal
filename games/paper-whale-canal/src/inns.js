// Landmark facades at opposite ends of the print, drawn in local elevation.
import { rng, shape, line, rect, ellipse, wash, clip, halo } from './ink.js';
const ink = '#1f363f',
  bone = '#c5cdbb',
  wood = '#6e5144';
function sash(g, x, y, w, h, lit, arch = false) {
  const d = `M${x} ${y + h}V${y + (arch ? 7 : 0)}Q${x + w * 0.54} ${y - (arch ? 9 : 1)} ${x + w} ${y + (arch ? 5 : -1)}V${y + h - 1}Z`;
  if (lit) halo(g, x + w * 0.5, y + h * 0.51, w * 1.5, 'rgba(251,178,78,.19)');
  shape(
    g,
    d,
    lit
      ? wash(g, x, y, x + w * 0.7, y + h, [
          [0, '#c57f48'],
          [0.48, '#ffdb88'],
          [1, '#da9b58']
        ])
      : '#485e62',
    ink,
    2.3
  );
  line(g, x + w * 0.5, y + 1, x + w * 0.5, y + h, ink, 1.55);
  line(g, x, y + h * 0.46, x + w, y + h * 0.46 - 0.8, ink, 1.2);
  line(g, x - 2, y + h + 0.8, x + w + 2, y + h - 0.4, '#b3a38a', 2);
}
function roof(g, p, seed) {
  const r = rng(seed);
  shape(
    g,
    p,
    wash(g, 0, -227, 16, -132, [
      [0, '#81928c'],
      [0.52, '#536b70'],
      [1, '#314b55']
    ]),
    ink,
    2.2
  );
  clip(g, p, () => {
    for (let j = -260; j < -75; j += 5) {
      let x = -160 + r() * 8;
      while (x < 165) {
        const w = 6 + r() * 5,
          yy = j + x * 0.21;
        shape(g, `M${x} ${yy}l2.5 4.1q${w * 0.48} 1.8 ${w} ${w * 0.19 - 0.1}`, null, '#334c55', 0.86);
        line(g, x + 2.4, yy + 3.1, x + w * 0.87, yy + 4 + w * 0.15, '#a3afa2', 0.65);
        x += w;
      }
    }
    for (let i = 0; i < 210; i++) {
      let x = r() * 260 - 130,
        y = -250 + r() * 160;
      line(g, x, y, x + 2 + r() * 6, y + 1, '#a2ada0', 0.55);
    }
  });
}
export function canalInn(g, x, y, s, lit) {
  const r = rng(849);
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  // Three-storey timber inn with a projecting gable and a bowed leaded window.
  const front = 'M-108 -7L-104 -145L-39 -226L26 -139L27 3Z',
    side = 'M26 -139L96 -148L96 -12L26 3Z';
  shape(
    g,
    front,
    wash(g, -93, -208, 24, 2, [
      [0, '#b2ac92'],
      [0.55, '#a08e72'],
      [1, '#82715d']
    ]),
    ink,
    2
  );
  shape(g, side, '#786e5d', ink, 1.6);
  for (const [p, a, b] of [
    [front, -111, 31],
    [side, 26, 98]
  ]) {
    clip(g, p, () => {
      for (let k = 0; k < 2150; k++) {
        const xx = a + r() * (b - a),
          yy = -230 + r() * 236,
          l = 0.5 + r() ** 2 * 6;
        line(
          g,
          xx,
          yy,
          xx + l,
          yy + 0.14 * l,
          r() < 0.5 ? 'rgba(46,52,47,.31)' : 'rgba(222,211,177,.52)',
          0.4 + r() * 0.42
        );
      }
      for (const h of [-146, -102, -52, -4]) {
        line(g, a, h, b, h + 4, ink, 4.8);
        line(g, a, h - 2, b, h + 2, '#bea985', 0.95);
      }
      for (let xx = a + 3; xx < b; xx += 21) {
        line(g, xx, 0, xx - 0.9, -230, ink, 2.5);
        line(g, xx + 1.4, -5, xx + 0.6, -221, '#c4ac85', 0.62);
      }
      for (let h = -190; h < -5; h += 47) {
        for (let xx = a + 3; xx < b; xx += 42) {
          line(g, xx, h, xx + 20, h + 38, '#3b4541', 2.2);
          line(g, xx + 20, h + 38, xx + 39, h, '#3b4541', 2.15);
        }
      }
    });
  }
  roof(g, 'M-46 -222L18 -237Q55 -195 106 -151L98 -145L22 -135Z', 223);
  shape(
    g,
    'M-45 -223L17 -239L22 -238Q43 -215 45 -210L38 -214L33 -214L15 -230L-39 -216Z',
    bone,
    '#9ea99c',
    0.74
  );
  shape(
    g,
    'M-117 -139Q-90 -164 -39 -231Q-18 -208 28 -141L24 -134Q-16 -187 -40 -216Q-76 -169 -108 -135Z',
    wood,
    ink,
    2
  );
  shape(
    g,
    'M-117 -142Q-76 -185 -40 -234Q-15 -205 29 -143L24 -141Q-6 -186 -40 -225Q-86 -165 -112 -139Z',
    bone,
    '#8e9e98',
    0.65
  );
  shape(g, 'M23 -139L106 -154', null, ink, 4);
  shape(g, 'M26 -144L105 -157', null, bone, 2.6);
  // Carved scallops, attic oculus, corbels, and a run of weathered shutters.
  for (let i = 0; i < 10; i++) {
    let xx = -104 + i * 11.8,
      yy = -148 - Math.min(i, 10 - i) * 11.9;
    shape(g, `M${xx} ${yy}q3 9 7 -3`, null, '#51554a', 1.5);
  }
  ellipse(g, -40, -168, 13, 15, '#c2bda0');
  ellipse(g, -40, -168, 9.5, 11.6, '#344a52');
  for (let k = -1; k <= 1; k++) {
    line(g, -40 + k * 4, -178, -40 + k * 4, -158, '#b9b59c', 1.1);
  }
  line(g, -50, -168, -30, -168, '#b9b59c', 1);
  for (const xx of [-94, -66, -36, -7]) sash(g, xx, -132, 18, 25, xx === -36 || lit, true);
  for (const xx of [35, 61, 80]) {
    sash(g, xx, -130 - (xx - 32) * 0.19, 12, 22, xx !== 61 || lit);
    sash(g, xx, -81 - (xx - 32) * 0.19, 12, 22, lit);
  }
  shape(g, 'M-92 -96L-17 -99L-10 -89L-16 -57L-86 -53L-95 -62Z', '#6b6555', ink, 2.4);
  for (let j = 0; j < 4; j++) sash(g, -86 + j * 17, -88 - j * 0.75, 15, 28, j !== 1 || lit);
  shape(g, 'M-101 -92L-90 -104L-21 -108L-9 -98L-14 -94L-90 -90Z', bone, ink, 1.4);
  shape(g, 'M-99 -54L-13 -59L-10 -56L-94 -50Z', bone, ink, 1.2);
  for (const xx of [-87, -58, -27]) shape(g, `M${xx} -51l7 -.5 -5 11Z`, wood, ink, 1.1);

  for (const xx of [-89, -62]) sash(g, xx, -40, 17, 29, xx === -62 || lit, true);
  shape(g, 'M-12 0V-33Q-2 -48 10 -33V2Z', '#33494c', ink, 1.7);
  for (let i = 0; i < 4; i++) line(g, -9 + i * 5, -1, -9 + i * 5, -31, '#797362', 0.88);
  // Lacquered shop sign, with a brush-drawn fish and hand-pegged iron bracket.
  shape(g, 'M27 -85Q44 -94 61 -87M30 -84Q39 -71 48 -87', null, ink, 2.8);
  for (const xx of [43, 58]) line(g, xx, -87, xx, -73, ink, 1.1);
  shape(g, 'M39 -72L62 -74L60 -47L41 -44Z', '#865644', ink, 1.6);
  shape(g, 'M41 -70L60 -72L58 -49L43 -47Z', null, '#d6b77d', 0.74);
  shape(g, 'M43 -60Q50 -67 55 -61L58 -65L58 -57L55 -59Q49 -54 43 -60Z', '#d5b77e');
  g.restore();
}
export function guild(g, x, y, s, lit) {
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  // Snow-capped stepped canal gable in faded madder brick.
  const d =
    'M-52 0L-52 -129L-47 -131V-145L-37 -147V-158L-28 -159V-171L-17 -173V-186L-8 -188V-200L3 -202L11 -198V-187L20 -184V-173L31 -171V-160L40 -158V-146L49 -144L50 -132L58 -130V0Z';
  shape(g, d, '#8b6f60', ink, 2);
  const r = rng(1653);
  clip(g, d, () => {
    for (let yy = -211; yy < 6; yy += 5.3) {
      let xx = -65 + r() * 10;
      while (xx < 62) {
        let w = 7 + r() * 7;
        rect(g, xx + 0.5, yy + 1, w - 1, 4.3, r() < 0.7 ? 'rgba(72,62,58,.18)' : 'rgba(198,168,137,.39)');
        line(g, xx, yy, xx + w - 0.7, yy - 0.2, '#9d9382', 0.65);
        xx += w;
      }
    }
  });
  const steps = [
    [-53, -129, -47],
    [-47, -145, -37],
    [-37, -158, -28],
    [-28, -171, -17],
    [-17, -186, -8],
    [-8, -200, 4],
    [11, -186, 20],
    [20, -173, 31],
    [31, -159, 40],
    [40, -146, 49],
    [49, -132, 57]
  ];
  for (const [a, b, c] of steps) {
    line(g, a - 1, b, c + 2, b - 0.8, ink, 3.7);
    line(g, a - 2, b - 2, c + 1, b - 2.5, bone, 2.4);
  }
  for (const yy of [-130, -87, -45, -4]) {
    line(g, -54, yy, 59, yy + 1, ink, 3);
    line(g, -55, yy - 2, 59, yy - 0.5, '#c3b8a0', 1.7);
  }
  for (const yy of [-119, -76, -35])
    for (const xx of [-41, -11, 20]) {
      sash(g, xx, yy, 18, 24, xx === -11 || lit || (yy === -119 && xx === 20), true);
    }
  sash(g, -9, -163, 15, 24, lit, true);
  ellipse(g, -1, -182, 3.6, 4.2, ink);
  line(g, 0, -204, 0, -216, ink, 1.15);
  shape(g, 'M0 -217q7 4 13 0q-6 8 -13 5Z', '#8c8c78', ink, 0.6);
  g.restore();
}

// An oriel on the near inn. The sill and the figure share this oblique elevation.
const bayX = 103,
  bayY = 438;
function baySpace(g) {
  g.translate(bayX, bayY);
  g.transform(1, -0.145, 0, 1, 0, 0);
}
export function bayWindow(g) {
  g.save();
  baySpace(g);
  shape(g, 'M-40 -36L35 -36L42 -31V2L35 7H-39L-45 2V-29Z', '#453e34', ink, 2);
  shape(
    g,
    'M-37 -31H35V1H-37Z',
    wash(g, -36, -29, 29, 2, [
      [0, '#bb7144'],
      [0.35, '#f4b766'],
      [0.72, '#ffdf99'],
      [1, '#cf8b50']
    ])
  );
  // The paper has thin battens and an irregular deckle against the bottom rail.
  for (let x = -35; x < 36; x += 14) line(g, x, -31, x, -1, '#69513b', 1.4);
  for (const y of [-23, -17, -3]) line(g, -37, y, 35, y, '#977145', 0.85);
  shape(g, 'M-46 -31L-39 -40L35 -42L45 -35L38 -31Z', '#32464a', ink, 1.2);
  shape(g, 'M-45 -34L-38 -41L36 -43L40 -39L27 -39L18 -37L1 -38L-13 -36Z', bone);
  shape(g, 'M-45 2L36 2L44 -1L46 2L38 7L-42 8Z', '#6f5843', ink, 1.2);
  shape(g, 'M-44 2L-21 1L-14 3L6 2L13 .5L23 2L37 1L35 4L-41 5Z', '#d9d5b9');
  for (const x of [-31, 25]) shape(g, `M${x} 7l7 -.2 -7 10Z`, '#514c41', ink, 0.8);
  g.restore();
}
export function sillCat(g, t, gaze) {
  const a = (t * Math.PI * 2) / 45;
  g.save();
  baySpace(g);
  g.translate(6, 1);
  g.scale(1, 1 + 0.022 * Math.sin(10 * a));
  // The tail wraps the haunch, leaving a sliver of lit paper beneath the chin.
  shape(
    g,
    'M-23 -3Q-26 -9 -22 -15Q-17 -23 -8 -21Q0 -22 5 -15L10 -18Q16 -16 15 -7Q13 -1 8 0L-11 1Q-19 2 -23 -3Z',
    '#403c37',
    '#302f2d',
    1.1
  );
  shape(g, 'M-22 -12Q-18 -21 -10 -20Q-3 -20 2 -15Q-10 -19 -17 -13Z', '#79604a');
  for (const x of [-16, -10, -4]) shape(g, `M${x} -19q5 1 5 9q-3 -5 -6 -6Z`, '#322f2d');
  shape(g, 'M-22 -8C-29 1 -9 3 1 -2Q6 -5 9 -3', null, '#332f2e', 4.6);
  shape(g, 'M-23 -4Q-20 2 -7 0', null, '#ac8359', 1);
  shape(g, 'M9 -4q6 -2 9 1l-1 2H7Z', '#625140');
  g.translate(5 + gaze.x * 5, -10 - gaze.up * 4);
  g.rotate(-0.1 - gaze.up * 0.51 + 0.12 * (1 - gaze.x));
  g.scale(0.72 + 0.28 * gaze.x, 1);
  shape(
    g,
    'M-6 -1Q-8 -4 -6 -9L-7 -15L-.5 -11L4 -11L8 -15L9 -8Q12 -6 11 -3L14 -1L12 1L8 2Q5 7 0 6Q-5 5 -6 -1Z',
    '#403932',
    '#302f2d',
    0.9
  );
  shape(g, 'M-6 -13l4 3 -3 1ZM6 -11l2 -2 -.2 4Z', '#a47b58');
  shape(g, 'M1 -10l2 5 1 -5M5 -10l1 4 2 -5', '#282e2c');
  shape(g, 'M8 -1Q10 0 12 -.3L10 2L7 3Z', '#a17e58');
  line(g, 5, -4, 8, -4.5 - gaze.up, '#f2cf80', 1.2);
  for (let j = 0; j < 3; j++) line(g, 10, 1, 16 + j, -1 + j * 1.9, '#d9c49b', 0.46);
  g.restore();
}

export function lanternKeeper(g, lift) {
  // The projecting window of the right inn has four leaded lights. A figure
  // passes behind the two middle lights, with the original battens in front.
  g.save();
  g.translate(1293 - 54 * 1.24, 525.45 - 62 * 1.24);
  g.transform(1.24, -0.045, 0, 1.24, 0, 0);
  g.clip(new Path2D('M-15.7 -26H15.8V.6H-15.7Z'));
  shape(
    g,
    'M-16 -27H17V1H-16Z',
    wash(g, -15, -25, 15, 2, [
      [0, '#a2744d'],
      [0.6, '#eac185'],
      [1, '#e3ad6a']
    ])
  );
  const y = -7 - 11 * lift;
  halo(g, 6, y + 4, 16, 'rgba(255,226,149,.74)');
  // At this distance the gesture reads through the sleeve, the wrist, and the lamp.
  ellipse(g, -6, -15, 3.5, 4.1, '#806448');
  ellipse(g, -9, -17, 2, 2, '#735c45');
  shape(g, 'M-9 -12Q-4 -14 -2 -10L.5 2H-13Z', '#796047');
  shape(g, `M-5 -11Q-2 -13 0 -9L5 ${y - 2}l2 1 -7 ${-6 - y}L-4 -5Z`, '#765b42');
  line(g, 6, y - 2, 7, y + 1, '#684e34', 0.85);
  ellipse(g, 7, y + 4.5, 3, 4, '#ffe2a0');
  line(g, 4.5, y + 1, 9, y + 1, '#966d40', 1);
  line(g, 5, y + 8, 9, y + 8, '#966d40', 0.95);
  const shutter = -11 - lift * 5;
  shape(g, `M-16 -27H${shutter}V1H-16Z`, '#685e4b');
  for (let j = 0; j < 5; j++) line(g, -16, -23 + j * 5, shutter, -23 + j * 5, '#968b6d', 0.65);
  for (const x of [-8.4, 0.9, 9]) line(g, x, -28, x, 1, ink, x === 0.9 ? 2.6 : 1.3);
  line(g, -16, -13.6, 16, -13.6, '#574f3b', 1.2);
  g.restore();
}
