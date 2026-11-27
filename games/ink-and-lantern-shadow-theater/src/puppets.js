import {
  TAU,
  ink,
  draw,
  ellipse,
  stroke,
  place,
  pin,
  linear,
  radial,
  mix,
  ease,
  clamp,
  wave,
} from './drawing.js';
import { deck } from './landscape.js';

const glass = {
  amber: ['#bc602e', '#eb963e', '#ffda78', '#fff1ac'],
  red: ['#882e31', '#c14d3e', '#f18a51', '#ffd190'],
  jade: ['#385b59', '#618a76', '#aec394', '#eae1a8'],
};
export function lantern(c, x, y, size, angle, t, tint = 'amber', kind = 0, halo = 1) {
  place(c, x, y, size, size, angle, (c) => {
    const palette = glass[tint],
      f = 0.8 + 0.09 * wave(t, 31, x) + 0.06 * wave(t, 47, y);
    if (halo > 0) {
      c.save();
      c.globalAlpha *= halo * f;
      radial(c, 0, 0, 49, [
        [0, tint === 'red' ? '#f99b557a' : '#ffce729c'],
        [0.42, '#ffc4653d'],
        [1, '#ffc46500'],
      ]);
      c.restore();
    }
    const cut =
      kind === 2
        ? 'M-8 -18 Q-8 -14 -16 -9 Q-21 -4 -17 4 Q-16 12 -7 19 L7 19 Q16 12 17 4 Q21 -4 16 -9 Q8 -14 8 -18Z'
        : kind === 1
        ? 'M-10 -18 Q-23 -12 -20 5 Q-18 15 -10 19 L10 19 Q19 15 20 5 Q23 -12 10 -18Z'
        : 'M-11 -18 L-18 -11 L-14 13 L-8 19 L9 19 L15 13 L19 -11 L11 -18Z';
    draw(
      c,
      cut,
      linear(c, -20, 0, 19, 2, [
        [0, palette[0]],
        [0.24, palette[1]],
        [0.47, palette[2]],
        [0.61, palette[3]],
        [0.8, palette[1]],
        [1, palette[0]],
      ]),
      '#583628',
      1.6,
    );
    place(c, 0, 7, 1, 0.86 + 0.14 * wave(t, 41, x), wave(t, 28, y) * 0.14, (c) => {
      draw(c, 'M0 3 Q-6 0 -4 -5 Q-1 -8 0 -15 Q6 -7 4 -2 Q4 2 0 3Z', '#fff0a6a6');
      draw(c, 'M0 2 Q-2 0 1 -5 Q3 0 0 2Z', '#fff4c6');
    });
    draw(c, 'M-8 -16 Q-13 -2 -9 16 M8 -16 Q13 -2 9 16 M0 -16 Q-1 0 0 16', null, '#865034', 0.85);
    for (let i = -9; i < 16; i += 5)
      draw(c, new Path2D('M-15 ' + i + ' Q0 ' + (i + 3) + ' 15 ' + i), null, 'rgba(113,60,39,.47)', 0.65);
    if (kind === 1) {
      draw(c, 'M-9 1 Q-2 -4 0 -10 Q3 -5 9 -2 Q4 -1 2 4 L0 9 Q-2 3 -9 1Z', null, '#925435', 0.82);
      ellipse(c, 0, 0, 2, 2, '#fee294', '#a26b37', 0.7);
    } else if (kind === 2) {
      draw(c, 'M-14 1 Q-8 1 -4 7 Q-5 0 0 -7 Q5 -1 4 7 Q9 0 14 1 Q11 9 2 14 L0 15 L-2 14 Q-11 9 -14 1Z',
        '#a14e4c78', '#80503c', 0.9);
      draw(c, 'M0 12 Q-3 3 0 -2 Q3 3 0 12Z', '#ffe5a6');
    } else {
      draw(c, 'M-11 -3 L-3 -1 L1 -7 L3 -1 L10 -4 L4 2 L1 4 L-1 8 L-3 3Z', 'rgba(125,62,40,.44)');
    }
    draw(c, 'M-11 -17 L-12 -20 L12 -20 L11 -17Z M-9 18 L9 18 L10 21 L-10 21Z', '#5a3929', '#cb9957', 0.8);
    draw(c, 'M-6 -20 Q0 -35 6 -20 M0 21 L0 27', null, '#533929', 1.4);
    ellipse(c, 0, 27, 1.9, 2.1, '#a64930');
    place(c, 0, 28, 1, 1, wave(t, 5, x) * 0.16, (c) =>
      draw(c, 'M0 -1 Q-3 2 -3 12 L0 10 L2 13 L3 12 Q3 2 0 -1Z', '#a54a32'),
    );
  });
}
export function shrine(c, x, y, scale, t, on) {
  place(c, x, y, scale, scale, 0, (c) => {
    draw(
      c,
      'M-12 1 L-12 -3 L-6 -5 L-4 -27 L-9 -30 L-9 -34 L9 -34 L9 -30 L4 -27 L6 -5 L12 -3 L12 1Z',
      '#513c32',
    );
    if (on > 0.005) {
      c.save();
      c.globalAlpha = on;
      radial(c, 0, -45, 35, [
        [0, '#ffe593ce'],
        [0.35, '#ffcc6075'],
        [1, '#ffbe5100'],
      ]);
      c.restore();
    }
    draw(c, 'M-8 -50 L8 -50 L7 -34 L-7 -34Z', '#4d3b33');
    c.save();
    c.globalAlpha = on;
    draw(c, 'M-6 -48 L-1 -48 L-1 -36 L-5 -36Z M1 -48 L6 -48 L5 -36 L1 -36Z', '#ffce70');
    c.restore();
    draw(c, 'M-15 -48 Q-6 -50 0 -59 Q5 -51 15 -49 L13 -47 L-13 -46Z', '#46362e', '#846545', 1);
    ellipse(c, 0, -58, 1.4, 2.8, '#4a382e');
    stroke(
      c,
      [
        [-3, -24],
        [-3, -8],
      ],
      '#ab8458',
      1,
    );
    if (on < 1 && on > 0) {
      draw(c, 'M0 -54 Q8 -63 0 -67 Q-4 -74 11 -78', null, 'rgba(109,86,64,.5)', 1);
    }
  });
}
const STRIDE = 47;
export function travelerState(t) {
  // Integrate eased starts and stops so the walk connects through the loop.
  const vel = 25,
    opening = 268;
  let x,
    dir = 1,
    walk;
  if (t < 11) {
    const dt = Math.max(0, t - 9);
    x = opening + vel * (Math.min(t, 9) + dt - (dt * dt) / 4);
    walk = 1 - clamp(dt / 2);
  } else if (t < 36) {
    x = opening + vel * 10;
    walk = 0;
  } else if (t < 42.4) {
    const u = (t - 36) / 6.4;
    x = mix(opening + vel * 10, opening - 41, ease(0, 1, u));
    dir = 1 - 2 * ease(36.1, 36.8, t);
    walk = Math.sin(u * Math.PI);
  } else {
    const dt = t - 42.4,
      acc = 1.92;
    x = opening - 41 + vel * (dt < acc ? (dt * dt) / (2 * acc) : dt - acc / 2);
    dir = -1 + 2 * ease(42.4, 43.2, t);
    walk = clamp(dt / acc);
  }
  const distance = t < 36 ? x - opening : t < 42.4 ? 250 + opening + 250 - x : 541 + x - (opening - 41);
  // A whole number of strides through the circuit gives both shoes a matching seam.
  const step = (distance * TAU) / (582 / Math.round(582 / STRIDE)),
    raise = ease(23.6, 27, t) * (1 - ease(34.9, 38, t));
  const flinch = ease(11.1, 12.3, t) * (1 - ease(21.6, 24.8, t));
  const y = deck(x) - 1;
  return { x, y, dir, step, walk, raise, flinch, bob: -Math.cos(step * 2) * 1.7 * walk };
}
function limb(c, a, b, width, color, detail = true) {
  const dx = b[0] - a[0],
    dy = b[1] - a[1],
    len = Math.hypot(dx, dy);
  place(c, ...a, 1, 1, Math.atan2(dy, dx) - Math.PI / 2, (c) => {
    const p = new Path2D();
    p.moveTo(-width * 0.57, 0);
    p.quadraticCurveTo(0, -width * 0.7, width * 0.55, 0);
    p.quadraticCurveTo(width * 0.69, len * 0.28, width * 0.26, len);
    p.quadraticCurveTo(0, len + width * 0.59, -width * 0.35, len);
    p.quadraticCurveTo(-width * 0.3, len * 0.4, -width * 0.57, 0);
    draw(c, p, color);
    if (detail)
      stroke(
        c,
        [
          [-width * 0.3, 3],
          [-width * 0.16, len - 3],
        ],
        '#977047',
        0.85,
      );
  });
}
function leg(c, hip, phase, walk, bob, far) {
  const u = (((phase / TAU) % 1) + 1) % 1,
    swing = u >= 0.5;
  const f = swing ? (u - 0.5) * 2 : u * 2;
  const dx = (swing ? mix(-10.9, 10.9, ease(0, 1, f)) : mix(10.9, -10.9, f)) * walk;
  const dy = swing ? -Math.sin(Math.PI * f) * 8.5 * walk : 0;
  const ankle = [hip[0] + dx + (far ? -5 : 5), -5 + dy - bob];
  const knee = [(hip[0] + ankle[0]) * 0.5 + 5 + Math.max(0, Math.cos(phase)) * 6 * walk, -24 + dy * 0.6];
  limb(c, hip, knee, 10, far ? '#3e302c' : ink);
  limb(c, knee, ankle, 7.7, far ? '#3e302c' : ink);
  place(c, ...ankle, 1, 1, 0.12 * Math.sin(phase) * walk, (c) =>
    draw(c, 'M-4 -2 Q-1 0 3 -3 L6 0 Q12 3 15 0 Q14 6 2 5 L-5 5Z', ink),
  );
  pin(c, ...knee, 0.66);
}
const coat =
  'M-7 -89 Q-21 -88 -26 -70 Q-32 -51 -44 -42 Q-40 -40 -36 -42 Q-42 -37 -48 -34 Q-40 -30 -32 -34 Q-38 -29 -40 -27 Q-17 -25 -6 -35 Q0 -29 11 -32 Q9 -47 5 -63 Q7 -77 1 -83Z M-25 -45 Q-20 -56 -15 -57 Q-17 -47 -25 -45Z M-33 -39 Q-28 -45 -25 -44 Q-27 -39 -33 -39Z M-17 -43 Q-13 -51 -9 -51 Q-10 -45 -17 -43Z';
function costume(c, t, flinch) {
  draw(
    c,
    'M-13 -72 Q-1 -80 7 -73 L10 -52 Q13 -39 23 -32 L18 -29 L15 -30 L13 -26 L9 -27 L6 -24 Q-6 -22 -22 -29 L-16 -48Z',
    ink,
  );
  draw(c, 'M-4 -60 Q1 -43 15 -32 Q10 -27 5 -29 Q-4 -41 -8 -48Z', '#804736', '#bd8e53', 0.7);
  for (let i = 0; i < 4; i++)
    stroke(
      c,
      [
        [-13 + i * 4, -40],
        [-14 + i * 7, -29],
      ],
      '#bb8b50',
      0.8,
    );
  draw(c, coat, ink, '#4e352b', 0.85);
  draw(
    c,
    'M-39 -37 Q-22 -44 -18 -64 Q-15 -79 -5 -84 M-27 -37 Q-14 -41 -10 -59 M-21 -34 Q-10 -36 -6 -47',
    null,
    '#b48955',
    1.1,
  );
  draw(c, 'M-29 -37 Q-17 -40 -13 -52 Q-14 -43 -20 -39 Q-12 -43 -10 -46 Q-12 -38 -22 -35Z', '#854d36');
  const dots = [
    [-31, -38],
    [-27, -41],
    [-22, -48],
    [-20, -52],
    [-18, -57],
    [-16, -62],
    [-14, -67],
    [-11, -72],
  ];
  for (const [x, y] of dots) ellipse(c, x, y, 0.95, 0.95, '#d0a368');
  draw(
    c,
    'M-15 -79 Q-21 -82 -23 -90 Q-27 -95 -33 -93 Q-32 -100 -25 -98 Q-18 -97 -16 -90 Q-15 -86 -9 -84Z',
    '#713c30',
  );
  place(c, -0.5, -87, 1, 1, -0.14 * flinch + 0.025 * wave(t, 3), (c) => {
    draw(
      c,
      'M-10 -16 Q-2 -29 10 -23 Q15 -21 15 -16 L14 -13 Q16 -11 20 -9 L16 -8 L16 -6 L14 -5 Q16 -2 13 0 Q10 1 6 0 L4 8 L-6 5 L-4 -2 Q-12 -3 -10 -16Z',
      ink,
    );
    draw(c, 'M-4 -10 Q-11 -16 -11 -5 Q-12 1 -17 6 Q-8 7 -4 0 M5 0 Q9 3 14 2 Q12 6 5 7Z', ink);
    draw(c, 'M-6 -7 Q-4 -11 -1 -7 Q-1 -4 -4 -3', null, '#c19662', 1);
    ellipse(c, -4, -2, 1.7, 2.4, null, '#d0a160', 0.8);
    stroke(
      c,
      [
        [10, -15],
        [13, -15.5],
      ],
      '#d4ae74',
      1.1,
    );
    // Woven salakot, with fan ribs punched around its brim.
    draw(
      c,
      'M-36 -12 Q-15 -20 0 -39 Q3 -41 6 -36 Q18 -24 34 -21 L36 -19 Q17 -13 -6 -11 Q-22 -9 -36 -10Z',
      '#392a28',
      '#b48a51',
      1.05,
    );
    draw(c, 'M-27 -13 Q-8 -23 2 -35 Q13 -25 25 -21 Q3 -16 -27 -13Z', '#9a6940');
    for (let i = 0; i < 10; i++) {
      const x = -26 + i * 5.55;
      stroke(
        c,
        [
          [2, -35],
          [x, -13.5 - (x + 26) * 0.135],
        ],
        '#60432e',
        0.8,
      );
    }
    draw(c, 'M-20 -17 Q1 -21 18 -25 M-15 -20 Q1 -23 13 -28 M-31 -11 Q4 -13 32 -21', null, '#d2a668', 0.72);
    ellipse(c, 2, -38, 2.1, 2.5, '#a47e4c');
  });
}
export function traveler(c, s, t) {
  const { x, y, dir, step, walk, raise, flinch, bob } = s;
  place(c, x, y + bob, dir * 1.11, 1.11, 0, (c) => {
    c.save();
    c.rotate(flinch * 0.065);
    leg(c, [-8, -36], step + Math.PI, walk, bob / 1.11, true);
    leg(c, [-2, -36], step, walk, bob / 1.11, false);
    const sh = [0, -77],
      el = [mix(13, 22, raise) - 4 * flinch, mix(-58, -91, raise)],
      hand = [mix(31, 35, raise) - 4 * flinch, mix(-71, -113, raise) + Math.sin(step) * 2.4 * walk];
    const swing = (0.065 * Math.sin(step - 0.7) * walk + 0.035 * wave(t, 5)) * (1 - raise * 0.7);
    const lx = hand[0] + 8,
      ly = hand[1] + 11;
    // The pole lets the bearer present the flame above their bowed head.
    const pole = raise * 31;
    stroke(
      c,
      [
        [hand[0] - 4, hand[1] + 8],
        [lx + 3, ly - 25 - pole],
      ],
      '#553d2b',
      1.8,
    );
    lantern(c, lx + 3, ly - 10 - pole, 0.56, swing, t, 'amber');
    limb(c, [-10, -73], [-24, -57], 8, '#45322a');
    limb(c, [-24, -57], [-27, -44], 5, '#47352d');
    costume(c, t, flinch);
    limb(c, sh, el, 11, ink);
    limb(c, el, hand, 6.5, ink);
    draw(c, 'M-7 -79 Q-3 -85 4 -80 L8 -69 L1 -66 L-6 -73Z', '#704431', '#c49a61', 0.9);
    place(c, ...hand, 1, 1, -0.26, (c) =>
      draw(c, 'M-3 -2 Q0 -5 4 -4 L8 -8 Q10 -8 9 -6 L6 -2 Q12 -5 12 -3 Q10 0 6 1 Q3 4 -2 3Z', ink),
    );
    pin(c, ...sh, 1.05);
    pin(c, ...el, 0.8);
    pin(c, ...hand, 0.57);
    stroke(
      c,
      [
        [hand[0], hand[1] + 1],
        [hand[0] + 50, 174],
      ],
      'rgba(64,46,32,.65)',
      1.07,
    );
    stroke(
      c,
      [
        [-5, -38],
        [-15, 172],
      ],
      'rgba(67,48,34,.58)',
      1.12,
    );
    c.restore();
  });
}
export function butterfly(c, x, y, s, t) {
  place(c, x, y, s, s, -0.2 + 0.12 * wave(t, 12), (c) => {
    c.scale(0.38 + 0.62 * Math.abs(wave(t, 59)), 1);
    draw(
      c,
      'M0 0 Q-14 -24 -21 -17 Q-25 -5 -13 1 Q-21 2 -16 8 Q-12 14 -3 4 L0 0 M1 -1 Q13 -23 21 -19 Q24 -6 14 -1 Q21 1 17 7 Q12 13 3 3Z',
      '#9c5036',
      ink,
      1.4,
    );
    for (const flip of [-1, 1])
      place(c, 0, 0, flip, 1, 0, (c) => {
        draw(c, 'M3 -2 Q11 -17 17 -16 Q14 -7 3 -2Z', '#e7aa56');
        draw(c, 'M4 2 Q12 0 14 4 Q10 8 4 2Z', '#74978a');
      });
    stroke(
      c,
      [
        [0, -5],
        [0, 6],
      ],
      ink,
      1.7,
    );
  });
}
const feather =
  'M-4 1 Q-20 -6 -40 -24 Q-38 -17 -33 -11 Q-48 -18 -55 -31 Q-53 -17 -43 -6 Q-61 -15 -67 -30 Q-66 -11 -52 1 Q-62 -2 -73 -17 Q-69 5 -48 14 Q-59 12 -68 5 Q-60 22 -38 21 Q-17 19 -4 10Z';
// Cutting-sheet coordinates, also used when a sliver leaves a wing tip.
export const wingBeat = (t) => 0.77 * wave(t, 34) + 0.2 * wave(t, 68, 0.5);
export function wingTip(a, flap, far) {
  const theta = far ? -0.52 - 0.42 * flap : -0.12 + 0.68 * flap;
  const lx = -67 * (far ? 0.8 : 1), ly = -30 * (far ? 0.67 : 0.92);
  const x = ((far ? -4 : 0.5) + lx * Math.cos(theta) - ly * Math.sin(theta)) * a.size * a.dir;
  const y = ((far ? -5 : 1) + lx * Math.sin(theta) + ly * Math.cos(theta)) * a.size;
  return [a.x + x * Math.cos(a.tilt) - y * Math.sin(a.tilt),
    a.y + x * Math.sin(a.tilt) + y * Math.cos(a.tilt)];
}
export function crane(c, x, y, s, direction, tilt, flap, t) {
  place(c, x, y, s * direction, s, tilt, (c) => {
    place(c, -4, -5, 0.8, 0.67, -0.52 - 0.42 * flap, (c) => draw(c, feather, '#ae8961', '#49392e', 1.5));
    draw(
      c,
      'M-16 4 Q-29 6 -41 2 Q-42 3 -34 8 L-54 8 L-56 6 L-57 9 L-41 12 L-23 12 L-12 9 M-17 8 Q-33 17 -44 16 L-50 18 L-52 16 L-53 19 Q-35 21 -11 12Z',
      '#45362d',
    );
    draw(
      c,
      'M-34 0 Q-18 1 -8 -5 Q2 -13 15 -8 Q26 -4 33 -9 Q39 -14 40 -27 Q41 -39 53 -39 Q59 -40 63 -35 L82 -32 L61 -30 Q54 -33 50 -29 Q48 -16 45 -8 Q40 8 23 9 Q17 11 8 17 Q-12 20 -26 12 L-41 13 L-34 8 L-46 7Z',
      '#e2ca94',
      '#3c3029',
      2.1,
    );
    draw(c, 'M26 4 Q40 0 44 -17 Q46 -31 52 -34 Q49 -27 49 -21 Q47 -2 37 4Z', '#664f3d');
    draw(c, 'M51 -38 Q57 -41 61 -36 L55 -35Z', '#a54031');
    draw(c, 'M62 -35 L82 -32 L61 -31Z', '#69503a');
    ellipse(c, 57, -34, 1.2, 1.2, ink);
    place(c, 0.5, 1, 1, 0.92, -0.12 + flap * 0.68, (c) => {
      draw(c, feather, '#e9d1a0', '#3d322c', 2.15);
      draw(
        c,
        'M-7 6 Q-28 -1 -52 -22 Q-41 -6 -15 8 Q-39 2 -61 -18 Q-44 2 -21 10 Q-45 8 -64 -6 Q-43 13 -21 13 Q-38 16 -56 10 Q-39 21 -18 16Z',
        '#685848',
      );
      draw(c, 'M-25 6 Q-39 0 -49 -10 Q-41 2 -29 9Z', '#4c967e');
      draw(c, 'M-31 10 Q-49 5 -58 -3 Q-47 9 -34 12Z', '#ad6572');
      draw(c, 'M-29 14 Q-46 13 -55 8 Q-43 16 -33 16Z', '#deaa55');
      draw(c, 'M-7 4 Q-18 -2 -27 -9 Q-22 1 -11 6Z', '#a9553c');
      stroke(
        c,
        [
          [-6, 9],
          [-17, 13],
          [-30, 15],
        ],
        '#b59460',
        1,
      );
    });
    pin(c, 0, 2, 1.05);
    place(c, 0.5, 1, 1, 0.92, -0.12 + flap * 0.68, (c) => {
      draw(c, 'M-13 3 Q-22 0 -28 -5 Q-23 4 -14 6Z', '#a88f69');
      pin(c, -23, 1, 0.69);
    });
    stroke(
      c,
      [
        [0, 2],
        [-90, 900],
      ],
      'rgba(66,49,36,.42)',
      0.87,
    );
  });
}
