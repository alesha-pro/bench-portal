import { bookingOffice, departures, engineer, farewell, firebox, porter } from './platform-life.js';
import { canopyLights, escapement, florist, gaslight, vines } from './fixtures.js';
import { tabby } from './tabby.js';
import { steamCels, smoke, streakLight, foreground, flyaway } from './atmosphere.js';
import { passenger } from './travelers.js';
import { parcel, stationSign } from './scenery.js';
import { bench, canopy, locomotive, platform, railYard, skyline } from './station.js';
import { sweeper, child, cuddle, balloon, pigeon } from './characters.js';
import { stateAt } from './timeline.js';
import { path, ellipse, line, glow, layer, paper, rng, TAU, smooth } from './draw.js';

export class Film {
  constructor(canvas) {
    this.canvas = canvas;
    this.c = canvas.getContext('2d', {
      alpha: false,
      willReadFrequently: new URLSearchParams(location.search).has('readback'),
    });
    this.sky = skyline();
    this.yard = railYard();
    this.engine = locomotive();
    this.stage = platform();
    const seat = layer();
    bench(seat.c);
    this.seat = seat.canvas;
    this.roof = canopy();
    this.steam = steamCels();
    const near = layer();
    parcel(near.c);
    florist(near.c);
    foreground(near.c);
    vines(near.c);
    this.near = near.canvas;
    const shafts = layer();
    streakLight(shafts.c);
    this.shafts = shafts.canvas;
    this.grain = paper();
    this.motes = [];
    let r = rng(910);
    for (let i = 0; i < 64; i++)
      this.motes.push({ x: r() * 1600, y: 150 + r() * 600, r: 0.5 + r() * 1.2, p: r() * TAU });
  }
  clock(c, s) {
    const { t } = s;
    // The long hand returns to its opening mark behind the pullback. A separate
    // brass seconds hand advances in discrete beats and recoils at midnight.
    const tick = (v) => Math.floor(v) + smooth(0.02, 0.19, v % 1);
    const angle = -0.15 * (1 - smooth(0, 6, s.world)) - 0.15 * smooth(39.5, 44.5, t);
    const recoil = 0.038 * Math.sin((t - 5.52) * 35) * smooth(5.52, 5.65, t) * (1 - smooth(5.65, 6, t));
    const sec =
      t < 32
        ? recoil + ((tick(s.world) - 6) * TAU) / 60
        : (tick(t - 32) * TAU) / 60 + (TAU - (19 * TAU) / 60) * smooth(38, 44.85, t);
    c.save();
    c.translate(1050, 259);
    c.rotate(angle);
    path(c, 'M-3 10 L-2 -68 L0 -74 L3 -68 L3 10Z', '#4a5142', null);
    c.restore();
    c.save();
    c.translate(1050, 259);
    c.rotate(-0.07);
    path(c, 'M-4 9 L-4 -40 L0 -47 L4 -40 L4 9Z', '#3a4a42', null);
    c.restore();
    c.save();
    c.translate(1050, 259);
    c.rotate(sec);
    line(
      c,
      [
        [0, 15],
        [0, -77],
      ],
      '#a25436',
      1.7,
    );
    ellipse(c, 0, 13, 2.6, 3.8, '#aa5e40');
    c.restore();
    ellipse(c, 1050, 259, 6, 6, '#b59459', '#384b42', 1.5);
    ellipse(c, 1050, 259, 2, 2, '#f5d390');
    // Exposed little gears and pendulum make the repair legible.
    escapement(c, s);
    const pend = Math.sin(s.phase * 19) * 0.165;
    c.save();
    c.translate(1050, 392);
    c.rotate(pend);
    line(
      c,
      [
        [0, 0],
        [0, 62],
      ],
      '#b29a65',
      2.5,
    );
    ellipse(c, 0, 62, 14, 16, s.orb ? '#3b5145' : '#d5b76e', '#b19a62', 2);
    if (s.orb) {
      ellipse(c, 0, 62, 7, 8, '#142f32', '#8b8054', 1);
    } else {
      glow(c, 0, 62, 42, '255,213,118', 0.22);
      path(c, 'M0 53 Q1 60 7 62 Q1 64 0 71 Q-1 64 -7 62 Q-1 60 0 53Z', '#ffebad', null);
    }
    c.restore();
    for (let onset of [6.0, 32.0]) {
      let u = (t - onset) / 1.6;
      if (u > 0 && u < 1) {
        c.globalAlpha = Math.sin(u * Math.PI) * (1 - u) * 0.6;
        ellipse(c, 1050, 259, 98 + u * 85, 98 + u * 85, null, '#ffe0a2', 1.5);
        ellipse(c, 1050, 259, 99 + u * 60, 99 + u * 60, null, '#ffe0a2', 0.8);
        c.globalAlpha = 1;
        glow(c, 1050, 259, 190, '255,222,147', Math.sin(u * Math.PI) * 0.18);
      }
    }
  }
  render(t) {
    const s = stateAt(t),
      c = this.c,
      w = this.canvas.width,
      h = this.canvas.height;
    c.setTransform(w / 1600, 0, 0, h / 900, 0, 0);
    c.clearRect(0, 0, 1600, 900);
    c.save();
    c.translate(800, 450);
    c.scale(s.z, s.z);
    c.translate(-s.cx, -s.cy);
    const a = s.phase,
      dx = s.cx - 800,
      dy = s.cy - 450;
    const paint = (cel) => c.drawImage(cel, 0, 0, 1600, 900);
    // The horizon, far platform, train, actors and close ironwork travel at
    // different rates. Smoke and the firebox ride on the locomotive's plane.
    c.save();
    c.translate(dx * 0.25, dy * 0.12);
    paint(this.sky);
    c.restore();
    c.save();
    c.translate(dx * 0.115, dy * 0.065);
    paint(this.yard);
    bookingOffice(c, a);
    farewell(c, a);
    c.restore();
    c.save();
    c.translate(dx * 0.058, dy * 0.035);
    paint(this.engine);
    engineer(c, a);
    firebox(c, a);
    smoke(c, s, this.steam);
    c.restore();
    paint(this.stage);
    departures(c, a);
    porter(c, a);
    paint(this.shafts);
    // Passengers form a legible frozen crowd, separated from the hero's silhouette.

    passenger(c, (((a / TAU) * 1770 + 1640) % 1770) - 85, 670, 0.58, a * 15, 0);
    passenger(c, 1685 - (((a / TAU) * 1770 + 470) % 1770), 676, 0.77, a * 14 + 1, 1);
    passenger(c, 732 + Math.sin(a) * 51, 691, 0.89, a * 5, 2);
    passenger(c, 1336 + Math.sin(a) * 8, 685, 0.98, a * 4, 3);
    passenger(c, 1420 + Math.sin(a) * 24, 677, 0.68, a * 6 + 2, 0);
    paint(this.seat);
    this.clock(c, s);
    // Overhead hardware is fixed to the canopy, ahead of the passing smoke.
    c.save();
    c.translate(-0.038 * dx, -0.026 * dy);
    paint(this.roof);
    canopyLights(c, a);
    stationSign(c, a);
    gaslight(c, 175, a);
    gaslight(c, 1408, a);
    c.restore();
    // Time stops in a cool pool of light; the sweeper keeps his amber warmth.
    if (s.frozen) {
      c.fillStyle = `rgba(39,77,112,${s.frozen * 0.24})`;
      c.fillRect(-200, -200, 2000, 1400);
    }
    let wake = (t - 9.05) / 1.2;
    if (wake > 0 && wake < 1) {
      c.globalAlpha = (1 - wake) * 0.63;
      ellipse(c, 981, 689, 4 + wake * 1050, 1 + wake * 174, null, '#ffe9b5', 2 * (1 - wake) + 0.4);
      c.globalAlpha = 1;
    }
    for (let i = 0; i < 5; i++) {
      const flight = [220, 313, 499, 927, 1379];
      let x = ((flight[i] + (a / TAU) * 1810) % 1810) - 105,
        y = 276 + Math.sin(i * 1.7) * 75 + Math.cos(a + i) * 26;
      pigeon(c, x, y, 0.63 + i * 0.08, a * 12 + i * 1.9);
    }
    // Loose tickets hang motionless in the same stopped time.
    for (let i = 0; i < 3; i++) {
      let x = 650 + i * 220 + Math.sin(a + i) * 40,
        y = 595 + Math.cos(a + i * 2) * 24;
      c.save();
      c.translate(x, y);
      c.rotate(Math.sin(a + i) * 0.6);
      path(c, 'M-8 -4 L7 -5 L8 4 L-7 5Z', '#d9c59b', '#8d9173', 0.6);
      line(
        c,
        [
          [-4, -1],
          [4, -1],
        ],
        '#aaa07b',
        0.6,
      );
      c.restore();
    }
    // Rust-coloured petals at the broom's feet lift in its forward stroke.
    for (let i = 0; i < 13; i++) {
      const wind = 1 - smooth(5.7, 6, t) + smooth(42.4, 44, t);
      const drift = Math.sin(a * 6 + i * 0.77);
      const touch = wind * Math.max(0, s.sweep) * Math.max(0, drift);
      const x = 460 + i * 6 + 9 * drift + touch * 10,
        y = 708 + (i % 3) * 2 - touch * (5 + (i % 5));
      c.save();
      c.translate(x, y);
      c.rotate(drift * 0.4 - touch * 0.6);
      path(c, 'M-4 0 Q-1 -3 4 -1 Q1 2 -4 0Z', i % 2 ? '#a47a52' : '#bc8f5e', null);
      c.restore();
    }
    child(c, s);
    sweeper(c, s);
    balloon(c, s);
    cuddle(c, s);
    tabby(c, s);
    flyaway(c, s);
    // A returned moment spreads gently across the floor.
    let resume = (s.t - 31.8) / 2;
    if (resume > 0 && resume < 1) {
      c.globalAlpha = (1 - resume) * 0.3;
      ellipse(c, 1050, 681, 60 + resume * 780, 12 + resume * 70, null, '#ffe1a0', 2);
      c.globalAlpha = 1;
    }
    for (const p of this.motes) {
      let x = p.x + Math.sin(a + p.p) * 13,
        y = p.y + Math.cos(a + p.p) * 9;
      c.globalAlpha = 0.17 + Math.sin(p.p + a) * 0.08;
      ellipse(c, x, y, p.r, p.r, '#f8e3b1');
    }
    c.globalAlpha = 1;
    c.save();
    c.translate(-0.16 * dx, -0.14 * dy);
    paint(this.near);
    c.restore();
    c.restore();
    // Paper grain is spatially fixed: seeking never changes the random seed.
    c.globalAlpha = 0.7;
    c.drawImage(this.grain, 0, 0, 1600, 900);
    c.globalAlpha = 1;
    let vig = c.createRadialGradient(800, 440, 290, 800, 440, 940);
    vig.addColorStop(0, '#102d3500');
    vig.addColorStop(0.65, '#102d3505');
    vig.addColorStop(1, '#102b3580');
    c.fillStyle = vig;
    c.fillRect(0, 0, 1600, 900);
    return s;
  }
}
