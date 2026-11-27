import { W, H, TAU, clamp, ease, layer, shape, ellipse, paperTile } from './ink.js';
import { paintSky } from './sky.js';
import { paintTown, farTown, stoneBridge, belltower } from './town.js';
import { makeWater, drawWater, lampColumns, impactWaves, bridgeReflection, waterShape } from './water.js';
import { dock, child, floatingLamps, makeSkiff, skiff, moorings, giftBoat, nearBarge, poleImpact } from './actors.js';
import { makeWhale, drawWhale, whaleReflection, whalePose } from './whale.js';
import { foreground, smoke, snowAt, snowfall, flyingBirds, makeBorder } from './atmosphere.js';

import { sillCat, lanternKeeper } from './inns.js';
import { winterBoughs, makeWillow, willow } from './willow.js';

export const DURATION = 45.0;
const title = 'The Paper Whale';
function opening(g, t) {
  const alpha = 1 - ease(3.3, 6.4, t) + ease(42.6, 45, t);
  if (alpha <= 0) return;
  g.save();
  g.globalAlpha = alpha * 0.96;
  g.translate(500, 157);
  g.textAlign = 'center';
  g.fillStyle = '#f1e0b5';
  g.shadowColor = 'rgba(18,41,52,.48)';
  g.shadowBlur = 3;
  g.shadowOffsetY = 1;
  g.font = 'italic 45px Georgia, "Liberation Serif", serif';
  g.fillText(title, 0, 0);
  g.shadowBlur = 0;
  g.shadowOffsetY = 0;
  const sub = 'OVER THE CANAL';
  g.font = '12px Georgia, "Liberation Serif", serif';
  const widths = [...sub].map((c) => g.measureText(c).width),
    tracking = 3.6;
  let pos = -(widths.reduce((a, b) => a + b, 0) + (sub.length - 1) * tracking) / 2;
  g.textAlign = 'left';
  [...sub].forEach((c, i) => {
    g.fillText(c, pos, 25);
    pos += widths[i] + tracking;
  });
  for (const sign of [-1, 1]) {
    g.save();
    g.scale(sign, 1);
    shape(g, 'M92 21Q106 19 124 21Q109 20.8 94 22Z', '#d2b988');
    ellipse(g, 129, 20.9, 1.3, 1.05, '#d1b985');
    g.restore();
  }
  g.restore();
}

// The lens settles beside the gift, then rises a little ahead of the unfolding paper.
function camera(t) {
  const a = (t * TAU) / DURATION,
    travel = (1 - Math.cos(a)) * 0.5;
  const near = ease(4.0, 9.95, t) * (1 - ease(10.65, 17.1, t));
  const rise = ease(10.35, 16.2, t) * (1 - ease(26.8, 34, t));
  const z = 1.034 + 0.023 * travel + 0.76 * near + 0.003 * Math.sin(3 * a - 0.5);
  const cx = 640 - 164 * near + 12 * Math.sin(a) - 2.6 * Math.sin(3 * a + 0.3);
  const cy = 360 + 111 * near - 12 * rise + 1.7 * Math.sin(2 * a + 0.55) + 0.8 * Math.sin(5 * a);
  const sweep = 14 * Math.sin(a) - 31 * near,
    roll = 0.002 * Math.sin(a * 2 + 0.42) + 0.0009 * Math.sin(5 * a);
  return { z, cx, cy, roll, near, sweep };
}
function distance(g, x, y, z, anchor = 680) {
  g.translate(x + anchor * (1 - z), y + 428 * (1 - z));
  g.scale(z, z);
}
export function makeFilm(canvas) {
  const scale = canvas.width / W,
    g = canvas.getContext('2d', { alpha: false }),
    paper = paperTile();
  const detail = Math.min(3, scale * 1.65);
  const plate = (paint, resolution = scale) => {
    const [pic, p] = layer(W, H, resolution);
    paint(p);
    return pic;
  };
  const far = plate((p) => {
    paintSky(p, paper);
    farTown(p);
  });
  const tower = plate(belltower),
    bridge = plate(stoneBridge, detail);
  const plates = [false, true].map((lit) => {
    const quay = plate((p) => {
      paintTown(p, lit, !lit);
      dock(p);
      // Keep the grain inside the printed architecture, including its irregular skyline.
      p.globalCompositeOperation = 'source-atop';
      p.globalAlpha = 0.12;
      p.fillStyle = p.createPattern(paper, 'repeat');
      p.fillRect(0, 240, W, 340);
    }, detail);
    const scene = plate((p) => {
      for (const part of [far, tower, quay]) p.drawImage(part, 0, 0, W, H);
    });
    return { quay, water: makeWater(scene, scale, paper) };
  });
  const front = plate((p) => {
    nearBarge(p);
    foreground(p);
    winterBoughs(p);
  });
  const switches = makeWillow(scale),
    whale = makeWhale(paper),
    boat = makeSkiff(scale),
    border = makeBorder(paper, scale),
    reflectionMix = layer(W, 325, scale),
    [surface, waterPen] = layer(W, 315, scale);
  waterPen.translate(0, -410);
  g.setTransform(scale, 0, 0, scale, 0, 0);
  g.lineJoin = 'round';
  g.lineCap = 'round';
  return (t) => {
    t = ((t % DURATION) + DURATION) % DURATION;
    const cam = camera(t),
      snow = snowAt(t),
      pole = poleImpact(t);
    if (pole) snow.impacts.push(pole);
    // Keep all four rotated viewport corners on the painted sky during the dolly.
    const farSpace = (ctx) => {
      const z = 1 - 0.24 * cam.near,
        sin = Math.abs(Math.sin(cam.roll)),
        cos = Math.cos(cam.roll);
      const hx = (W * cos + H * sin) / (2 * cam.z) + 1,
        hy = (H * cos + W * sin) / (2 * cam.z) + 1;
      ctx.translate(
        clamp(cam.sweep * 0.82 + 470 * (1 - z), cam.cx + hx - W * z, cam.cx - hx),
        clamp(cam.near * 1.6 + 428 * (1 - z), cam.cy + hy - H * z, cam.cy - hy)
      );
      ctx.scale(z, z);
    };
    const bridgeSpace = (ctx) => distance(ctx, cam.sweep * 0.24, 0, 1 - 0.095 * cam.near);
    const boatSpace = (ctx) => distance(ctx, -cam.sweep * 0.32, 0, 1 + 0.06 * cam.near);
    g.save();
    g.translate(W * 0.5, H * 0.5);
    g.rotate(cam.roll);
    g.scale(cam.z, cam.z);
    g.translate(-cam.cx, -cam.cy);
    g.save();
    farSpace(g);
    g.drawImage(far, 0, 0, W, H);
    g.drawImage(tower, 0, 0, W, H);
    g.restore();
    g.save();
    bridgeSpace(g);
    g.drawImage(bridge, 0, 0, W, H);
    g.restore();
    g.drawImage(plates[0].quay, 0, 0, W, H);
    if (t > 12 && t < 43) {
      for (let x = 0; x < W; x += 24) {
        const onset = 13 + x / 105;
        const power = ease(onset, onset + 4, t) * (1 - ease(35, 42.8, t));
        if (power <= 0) continue;
        g.globalAlpha = power;
        g.drawImage(plates[1].quay, x * detail, 240 * detail, 24 * detail, 337 * detail, x, 240, 24, 337);
      }
      g.globalAlpha = 1;
    }
    const [wx, wy] = whalePose(t),
      watching = ease(9.4, 15, t) * (1 - ease(35.8, 42, t));
    sillCat(g, t, { x: watching * clamp((wx - 210) / 550), up: watching * clamp((445 - wy) / 240) });
    lanternKeeper(g, ease(7.6, 13.7, t) * (1 - ease(30, 40, t)));
    const light = ease(16, 26, t) * (1 - ease(36, 43, t));
    waterPen.clearRect(0, 410, W, 315);
    drawWater(waterPen, plates[0].water, t, plates[1].water, reflectionMix, light);
    waterPen.save();
    waterPen.clip(waterShape);
    waterPen.save();
    bridgeSpace(waterPen);
    bridgeReflection(waterPen, bridge, detail, t);
    waterPen.restore();
    whaleReflection(waterPen, t, whale);
    lampColumns(waterPen, t);
    waterPen.save();
    boatSpace(waterPen);
    moorings(waterPen, t, true);
    waterPen.restore();
    floatingLamps(waterPen, t, true);
    waterPen.restore();
    g.drawImage(surface, 0, 410, W, 315);
    impactWaves(g, surface, snow.impacts);
    smoke(g, t);
    snowfall(g, snow.flakes, false);
    flyingBirds(g, t);
    drawWhale(g, t, whale);
    if (t > 31 && t < 37.2) {
      g.save();
      farSpace(g);
      g.globalAlpha = ease(31, 32.7, t) * (1 - ease(35.7, 37.2, t));
      g.drawImage(tower, 875 * scale, 128 * scale, 72 * scale, 213 * scale, 875, 128, 72, 213);
      g.restore();
    }
    g.save();
    boatSpace(g);
    moorings(g, t, false);
    g.restore();
    child(g, t);
    skiff(g, t, boat);
    floatingLamps(g, t, false);
    giftBoat(g, t);
    g.save();
    distance(g, -cam.sweep * 0.94, 0, 1 + 0.15 * cam.near);
    g.drawImage(front, 0, 0, W, H);
    willow(g, t, switches);
    g.restore();
    snowfall(g, snow.flakes, true);
    opening(g, t);
    g.restore();
    g.drawImage(border, 0, 0, W, H);
  };
}
