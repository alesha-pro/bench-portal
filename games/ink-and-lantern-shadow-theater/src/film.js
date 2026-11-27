import {
  W,
  H,
  TAU,
  place,
  draw,
  ellipse,
  stroke,
  print,
  wave,
  random,
  clamp,
  ease,
  mix,
  radial,
  die,
  linear,
} from './drawing.js';
import { paperLayers, atmosphere, lampStates, castOffset, castShadow, shadowSheet, moths } from './paper.js';
import { landscape, bambooSheet, mist, deck } from './landscape.js';
import { cabinet, innerShade, nameplate, aperture, trimmings } from './cabinet.js';
import { traveler, travelerState, crane, shrine, butterfly, wingBeat, wingTip } from './puppets.js';
import { dragon, jewel, skyLanterns } from './dragon.js';

import { chimes, shoal, lotusBank } from './river.js';

const r = random(9901);
const eddies = Array.from({ length: 41 }, () => [r(), r(), r(), r()]);
const dust = Array.from({ length: 52 }, () => [r() * W, r() * H, r() * TAU, 0.6 + r()]);
const lampXs = [204, 397, 696, 892, 1073];
function pulse(t) {
  return ease(9.6, 15.7, t) * (1 - ease(29.8, 36.5, t));
}
function squall(c, t, storm) {
  if (!storm) return;
  c.save();
  c.globalAlpha = storm;
  const cloud =
    'M-158 -30 Q-103 -6 -83 -13 Q-59 -20 -43 -5 Q-27 12 -7 4 Q7 0 9 -10 Q19 5 8 15 Q32 14 46 -4 Q46 6 41 11 Q63 8 85 -8 Q78 4 75 8 Q113 -1 155 -17 L187 -40Z';
  for (const [x, y, s] of [
    [317, 82, 1.7],
    [856, 79, 1.3],
    [1136, 125, 1.45],
  ]) {
    place(c, x + (1 - storm) * 160 + wave(t, 2, x) * 12, y, s, s * 0.95, -0.065, (c) => {
      draw(c, cloud, 'rgba(91,71,65,.50)');
      draw(
        c,
        'M-87 -18 Q-57 -25 -38 -10 Q-19 4 0 -4 M26 -2 Q39 -7 53 -18 M62 -7 Q86 -12 98 -20',
        null,
        'rgba(189,154,103,.52)',
        1.7,
      );
    });
  }
  c.restore();
}
function air(c, t, storm) {
  const gust = ease(10, 11, t) * (1 - ease(15, 17, t)) * 0.68 + storm * 0.32;
  if (gust < 0.001) return;
  c.save();
  c.globalAlpha = gust;
  for (const [a, b, d, e] of eddies) {
    const f = (((a - t * (0.115 + 0.09 * d)) % 1) + 1) % 1,
      x = f * 1570 - 130,
      y = 126 + b * 340 + Math.sin(f * 8 + e * 9) * 31;
    if (d > 0.6) {
      place(c, x, y, 0.32 + d * 0.32, 0.38, 2 * Math.sin(t * 2.2 + a * 19), (c) =>
        draw(c, 'M-11 0 Q-2 -5 13 -1 Q4 4 -11 0Z', d > 0.78 ? '#836144' : '#a57a47'),
      );
    } else {
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + 31, y - 9, x + 49 + a * 53, y - 6 - e * 6);
      c.strokeStyle = 'rgba(255,232,178,.61)';
      c.lineWidth = 0.7 + d;
      c.stroke();
    }
  }
  c.restore();
}
function craneState(t) {
  const s = travelerState(t),
    u = ease(24.82, 27.85, t),
    v = ease(27.85, 30.55, t);
  const h = jewel(t),
    tiltHit = 0.57;
  const size = 0.63 + 0.14 * ease(24, 28, t) * (1 - ease(34, 38, t));
  const reachX = (82 * Math.cos(tiltHit) + 32 * Math.sin(tiltHit)) * size;
  const reachY = (82 * Math.sin(tiltHit) - 32 * Math.cos(tiltHit)) * size;
  let x = s.x + 58 * s.dir + wave(t, 3, 1) * 9,
    y = s.y - 151 + wave(t, 11) * 7,
    tilt = -0.04 + 0.11 * wave(t, 7),
    dir = s.dir;
  const back = pulse(t);
  x -= 115 * back;
  y -= 15 * back;
  const gather = ease(22.8, 24.82, t);
  x = mix(x, s.x + 43 - 49, gather);
  y = mix(y, s.y - 105, gather);
  tilt = mix(tilt, 0.69, gather);
  x = mix(x, 590, u);
  y = mix(y, 163, u);
  tilt = mix(tilt, -0.18, u);
  x = mix(x, h[0] - reachX, v);
  y = mix(y, h[1] - reachY, v);
  tilt = mix(tilt, tiltHit, v);
  dir = mix(dir, 1, u);
  const out = ease(30.65, 33.65, t);
  x = mix(x, 833, out);
  y = mix(y, 158, out) - 34 * Math.sin(out * Math.PI);
  tilt = mix(tilt, -0.32, out);
  const home = ease(33.65, 38.8, t);
  x = mix(x, s.x + s.dir * 62 + wave(t, 3, 1) * 9, home);
  y = mix(y, s.y - 151 + wave(t, 11) * 7, home) - 34 * Math.sin(home * Math.PI);
  dir = mix(dir, s.dir, home);
  tilt = mix(tilt, -0.04 + 0.11 * wave(t, 7), home);
  // Restore the same escort spacing when the puppet turns into the opening passage.
  x -= 4 * s.dir * home * ease(42.6, 44.7, t);
  return { x, y, dir, tilt, size };
}
function flight(c, t) {
  const gift = ease(23.8, 26.8, t) * (1 - ease(32.8, 36.5, t));
  const inks = ['#ba475b', '#d7823f', '#cfaa48', '#439c86', '#507b93', '#876b95'];
  // Twelve releases per two seconds, an integer number of repeats in the loop.
  // Seek the wing at the instant of release, so the trail follows both hinges.
  const tick = Math.floor(t * 6);
  for (let j = 13; j >= 0; j--) {
    const n = (tick - j + 270) % 270;
    const age = t * 6 - tick + j;
    const life = age / (8.5 + gift * 5);
    if (life >= 1) continue;
    const born = n / 6, pose = craneState(born);
    const [wx, wy] = wingTip(pose, wingBeat(born), n % 2);
    const x = wx - pose.dir * age * (3 + 1.3 * gift) + age * 0.8 * Math.sin(n * 2.1 + life * 4);
    const y = wy + age * (1.45 + Math.sin(n * 1.4 + life * 4) * 0.7);
    const scale = (0.78 + 0.47 * gift) * (1 - life * 0.55);
    c.save();
    c.globalAlpha = Math.min(1, age * 3) * (1 - life ** 1.6) * (0.84 + 0.16 * gift);
    place(c, x, y, scale * (0.39 + 0.61 * Math.abs(Math.cos(life * 5 + n))), scale,
      life * 2.8 + n, (c) => {
        const foil = n % 3 ? 'M0 -8 Q0 -2 5 0 Q1 2 0 7 Q-1 2 -5 0 Q-1 -2 0 -8Z' :
          'M0 -7 Q5 -3 4 0 Q4 4 0 7 Q-4 4 -4 0 Q-4 -4 0 -7Z';
        draw(c, foil, inks[n % inks.length], '#765744', 0.72);
        draw(c, 'M0 -6 L0 0 L-3 0Z', '#fff1afc4');
      });
    c.restore();
  }
  const a = craneState(t);
  crane(c, a.x, a.y, a.size, a.dir, a.tilt, wingBeat(t), t);
}
function touch(c, t) {
  const u = clamp((t - 30.42) / 1.63);
  if (u === 0 || u === 1) return;
  const [x, y] = jewel(30.55);
  c.save();
  c.globalAlpha = Math.sin(Math.PI * u) ** 0.7;
  radial(c, x, y, 48 + 70 * u, [
    [0, '#fff2a9e3'],
    [0.28, '#ffda8a99'],
    [1, '#ffd98300'],
  ]);
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * TAU + Math.sin(i * 2) * 0.08,
      l = (20 + 50 * u) * (1 + 0.21 * Math.sin(i * 18));
    stroke(
      c,
      [
        [x + Math.cos(a) * l, y + Math.sin(a) * l],
        [x + Math.cos(a) * (l + 6 + 7 * u), y + Math.sin(a) * (l + 6 + 7 * u)],
      ],
      '#ffefac',
      1.4,
    );
  }
  c.restore();
}
function lampLight(c, t) {
  for (const [i, x] of lampXs.entries()) {
    const darkAt = 11.4 + (4 - i) * 0.63;
    const level =
      (1 - ease(darkAt, darkAt + 0.35, t) * (1 - ease(32.2 + i * 0.44, 33 + i * 0.44, t))) *
      (0.92 + wave(t, 48, x) * 0.08);
    shrine(c, x, deck(x) - 2, i === 3 ? 0.99 : 0.84, t, level);
  }
}
function specks(c, t, storm) {
  for (const [x, y, a, s] of dust) {
    const f = 0.5 + 0.5 * wave(t, 7, a);
    c.globalAlpha = (0.13 + f * 0.45) * (1 - 0.48 * storm);
    ellipse(c, x + wave(t, 1, a) * 18, y + wave(t, 2, a + 0.7) * 12, s * 0.83, s * 0.68, '#fff0bb');
  }
  c.globalAlpha = 1;
  // Small glints break up the engraved, almost still water.
  for (let i = 0; i < 26; i++) {
    const x = 219 + ((i * 123) % 821) + 7 * wave(t, 2, i),
      y = 572 + ((i * 31) % 71);
    stroke(
      c,
      [
        [x, y],
        [x + 3 + (1 + wave(t, 4, i)) * 5, y - 0.4],
      ],
      'rgba(249,218,157,.55)',
      0.72,
    );
  }
}
export class Film {
  constructor(canvas) {
    this.canvas = canvas;
    this.c = canvas.getContext('2d', {
      alpha: false,
      willReadFrequently: new URLSearchParams(location.search).has('render'),
    });
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    const scale = Math.min(1.75, Math.max(0.8, width / W));
    if (this.scale === scale) return;
    this.scale = scale;
    this.paper = paperLayers(scale);
    this.land = landscape(scale);
    this.woods = [
      bambooSheet(scale, false, true),
      bambooSheet(scale, true, true),
      bambooSheet(scale, false, false),
      bambooSheet(scale, true, false),
    ];
    this.farShadow = shadowSheet(this.land.far, 7.5);
    this.bridgeShadow = shadowSheet(this.land.bridge, 2.7);
    this.bambooShadows = this.woods.slice(2).map((wood) => shadowSheet(wood, 4));
    this.bearer = document.createElement('canvas');
    this.bearer.width = Math.ceil(238 * scale * 1.25);
    this.bearer.height = Math.ceil(422 * scale * 1.25);
    this.bearerContext = this.bearer.getContext('2d');
    this.bearerContext.lineCap = this.bearerContext.lineJoin = 'round';
    this.frame = cabinet(scale);
    this.shade = innerShade(scale);
  }
  render(t, warmth) {
    const c = this.c,
      storm = pulse(t);
    c.setTransform(this.canvas.width / W, 0, 0, this.canvas.height / H, 0, 0);
    c.lineCap = 'round';
    c.lineJoin = 'round';
    const lamps = lampStates(t, storm, warmth);
    atmosphere(c, this.paper, t, storm, warmth, lamps);
    c.save();
    c.clip(die(aperture));
    const zoom =
      1 +
      0.143 * ease(8, 21, t) * (1 - ease(34.5, 44.4, t)) +
      0.117 * ease(23.5, 29.8, t) * (1 - ease(31.25, 36.5, t));
    c.save();
    c.globalAlpha = 0.47;
    print(c, this.paper.fibers);
    c.restore();
    c.translate(638, 315);
    c.scale(zoom, zoom);
    c.translate(-638 - 3.2 * wave(t, 1), -315);
    castShadow(c, this.farShadow, lamps, 606, 354, 22, 0.37);
    const [farX, farY] = castOffset(lamps, 606, 354, 5);
    c.drawImage(this.land.far, farX, farY, W, H);
    mist(c, t, storm, true);
    squall(c, t, storm);
    skyLanterns(c, t, 'far');
    dragon(c, t);
    print(c, this.land.hills);
    chimes(c, t, storm);
    mist(c, t, storm, false);
    // A cool veil settles between the rear scenery and the contact cutouts.
    const festive = ease(30.4, 34, t) * (1 - ease(39.8, 44.8, t));
    if (storm > 0.001) {
      c.save();
      c.globalAlpha = 0.32 * storm;
      c.fillStyle = linear(c, 0, 165, 0, 641, [
        [0, '#32304755'], [0.39, '#35445499'], [0.66, '#635161'], [1, '#36565b'],
      ]);
      c.fillRect(-100, 50, 1500, 650);
      c.restore();
    }
    c.save();
    c.globalCompositeOperation = 'screen';
    // A weaker wash reaches the middle sheets and the surface of the river.
    for (const [i, lamp] of lamps.entries()) {
      c.globalAlpha = lamp.strength * 0.38;
      c.drawImage(this.paper.pools[i], lamp.x - lamp.rx, lamp.y - lamp.ry * 0.6,
        lamp.rx * 2, lamp.ry * 1.5);
      c.globalAlpha = lamp.strength * 0.37;
      c.drawImage(this.paper.pools[i], lamp.x - 103, 448, 206, 238);
    }
    if (festive > 0.001) {
      c.globalAlpha = festive * 0.68;
      radial(c, 719, 277, 515, [
        [0, '#ffac5c9e'],
        [0.58, '#fb9a5672'],
        [1, '#ffa23c00'],
      ]);
    }
    c.restore();
    const wind = wave(t, 4) * 0.003 + storm * (0.007 + wave(t, 17) * 0.008);
    for (let i = 0; i < 2; i++) {
      c.save();
      c.translate((i ? 1 : -1) * 9, 0);
      c.transform(1, 0, wind * 0.7, 1, -wind * 480, 0);
      c.globalAlpha = 0.73;
      print(c, this.woods[i]);
      c.restore();
    }
    specks(c, t, storm);
    shoal(c, t);
    castShadow(c, this.bridgeShadow, lamps, 623, 526, 4.5, 0.50);
    print(c, this.land.bridge);
    lampLight(c, t);
    const s = travelerState(t);
    if (s.raise > 0.001) {
      const lx = s.x + 48,
        ly = s.y - 82 - 81 * s.raise;
      c.save();
      c.globalCompositeOperation = 'screen';
      c.globalAlpha = s.raise * (0.85 + 0.12 * wave(t, 53));
      radial(c, lx, ly, 93, [
        [0, '#ffdb7fce'],
        [0.24, '#ffc36582'],
        [0.53, '#efa85545'],
        [1, '#ffb74700'],
      ]);
      c.restore();
    }
    // Project the assembled leather figure once, so overlapping limbs cast a
    // single soft outline and its punched holes and brass pins stay sharp.
    const bearer = this.bearer, bc = this.bearerContext;
    const left = s.x - 119, top = s.y - 198;
    bc.setTransform(bearer.width / 238, 0, 0, bearer.height / 422, 0, 0);
    bc.clearRect(0, 0, 238, 422);
    bc.translate(-left, -top);
    traveler(bc, s, t);
    const [dx, dy] = castOffset(lamps, s.x, s.y - 76, 5.5);
    c.save();
    c.shadowColor = 'rgba(66,40,40,0.49)';
    c.shadowBlur = 2.8 * this.scale * zoom;
    c.shadowOffsetX = dx * this.scale * zoom;
    c.shadowOffsetY = dy * this.scale * zoom;
    c.drawImage(bearer, left, top, 238, 422);
    c.restore();
    flight(c, t);
    touch(c, t);
    skyLanterns(c, t, 'middle');
    const flit = 1 - ease(9.2, 11, t) * (1 - ease(37, 40, t));
    if (flit > 0) {
      c.save();
      c.globalAlpha = flit;
      butterfly(c, 383 + wave(t, 2) * 63, 383 + wave(t, 5) * 12, 0.48, t);
      c.restore();
    }
    air(c, t, storm);
    lotusBank(c, t);
    print(c, this.land.foreground);
    for (let i = 2; i < 4; i++) {
      c.save();
      c.transform(1, 0, wind, 1, -wind * 674, 0);
      castShadow(c, this.bambooShadows[i - 2], lamps, i === 2 ? 140 : 1140, 285, 7, 0.38);
      print(c, this.woods[i]);
      c.restore();
    }
    skyLanterns(c, t, 'front');
    c.restore();
    moths(c, lamps, t, storm);
    c.save();
    c.globalAlpha = 0.66;
    print(c, this.paper.fibers);
    c.restore();
    print(c, this.shade);
    print(c, this.frame);
    trimmings(c, t, lamps, storm);
    nameplate(c, t);
  }
}
