import {
  T,
  V,
  pipe,
  M,
  mat,
  group,
  mesh,
  box,
  cyl,
  egg,
  beam,
  torus,
  batch,
  random,
  sign,
  canvasTex,
  tau,
} from './craft.js';
import { Y, Z } from './route.js';
import { snowCap } from './finishes.js';
import { ground } from './landscape.js';
const rnd = random(812),
  red = mat(0xac493c),
  plaster = mat(0xd8c49f),
  trim = mat(0x603d2d),
  linen = mat(0xcebb93),
  green = mat(0x38564a),
  stone = mat(0x8d8274, 0.9, 0, { map: M.stone.map });
const glowMap = canvasTex(128, 128, (c, w, h) => {
  const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,223,155,.68)');
  g.addColorStop(0.13, 'rgba(255,191,87,.27)');
  g.addColorStop(0.4, 'rgba(255,170,69,.081)');
  g.addColorStop(1, 'rgba(255,145,48,0)');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
});
const glowMat = new T.SpriteMaterial({
  map: glowMap,
  color: 0xffc284,
  transparent: true,
  depthWrite: false,
  blending: T.AdditiveBlending,
});
export function halo(p, x, y, z, size) {
  const s = new T.Sprite(glowMat);
  s.position.set(x, y, z);
  s.scale.set(size, size, 1);
  p.add(s);
  return s;
}
const glass = mat(0xffffff, 0.55, 0, {
  map: canvasTex(128, 192, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, 43, h);
    g.addColorStop(0, '#a15c2c');
    g.addColorStop(0.62, '#ffd893');
    g.addColorStop(1, '#b17b42');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 18; i++) {
      c.fillStyle = 'rgba(180,110,46,.20)';
      c.fillRect(i * 8 + rnd() * 3, 0, 1, h);
    }
    // Backlit muslin panels with a narrow glimpse of the warm room between them.
    for (const side of [-1, 1]) {
      c.save();
      c.translate(side < 0 ? 0 : w, 0);
      c.scale(-side, 1);
      c.fillStyle = 'rgba(110,67,39,.7)';
      c.beginPath();
      c.moveTo(0, 4);
      c.lineTo(35, 4);
      c.quadraticCurveTo(35, 55, 13, 105);
      c.lineTo(24, h);
      c.lineTo(0, h);
      c.closePath();
      c.fill();
      c.strokeStyle = 'rgba(251,214,151,.47)';
      for (let i = 0; i < 4; i++) {
        c.beginPath();
        c.moveTo(4 + i * 7, 2);
        c.lineTo(3 + i * 2.5, 105);
        c.lineTo(4 + i * 4, h);
        c.stroke();
      }
      c.restore();
    }
    c.fillStyle = '#634d3b';
    c.fillRect(79, 147, 3, 38);
    c.fillRect(69, 183, 23, 4);
    c.fillStyle = '#ffe5ab';
    c.beginPath();
    c.moveTo(69, 131);
    c.lineTo(89, 131);
    c.lineTo(97, 150);
    c.lineTo(63, 150);
    c.closePath();
    c.fill();
  }),
  emissive: 0xff9b3e,
  emissiveIntensity: 2.1,
});
glass.emissiveMap = glass.map;
function windowBay(p, x, y, z, w, h, shutters = true) {
  box(p, x, y, z, w + 0.09, h + 0.09, 0.07, trim);
  box(p, x, y, z + 0.043, w, h, 0.035, glass);
  box(p, x, y, z + 0.075, 0.034, h, 0.029, M.wood);
  box(p, x, y + h * 0.1, z + 0.075, w, 0.034, 0.029, M.wood);
  box(p, x, y - h * 0.53, z + 0.055, w + 0.19, 0.052, 0.16, M.cream);
  if (shutters) {
    for (const s of [-1, 1]) {
      const xx = x + (w * 0.67 + 0.025) * s;
      box(p, xx, y, z + 0.015, w * 0.26, h, 0.045, green);
      for (let j = 0; j < 7; j++)
        box(p, xx, y - h * 0.39 + j * h * 0.125, z + 0.049, w * 0.235, 0.016, 0.02, M.darkGreen);
    }
  }
}
const roofSnow = snowCap();
function pitched(p, w, d, eave, rise) {
  const a = Math.atan2(rise, d / 2),
    len = Math.hypot(d / 2, rise);
  for (const k of [-1, 1]) {
    const z = (k * d) / 4,
      y = eave + rise / 2;
    const slab = box(p, 0, y, z, w, 0.105, len + 0.12, M.roof);
    slab.rotation.x = k * a;
    const snow = box(p, 0, y + 0.092, z, w + 0.03, 0.09, len + 0.14, roofSnow);
    snow.rotation.x = k * a;
    // Courses of slate peek through wind-scoured cornices, with scalloped caps of powder.
    for (let j = 0; j < Math.ceil(w / 0.19); j++) {
      const x = -w / 2 + ((j + 0.5) * w) / Math.ceil(w / 0.19);
      const t = box(
        p,
        x,
        eave - 0.006,
        k * (d / 2 + 0.05),
        0.18,
        0.044,
        0.18,
        j % 3 === 0 ? M.rock : M.roof,
      );
      t.rotation.x = k * a;
    }
    for (let j = 0; j < 5; j++) {
      const x = (j / 4 - 0.5) * (w - 0.13);
      beam(p, [x, eave + 0.112, (k * d) / 2], [x, eave + rise + 0.115, 0], 0.019, roofSnow);
    }
    const guardY = eave + 0.35;
    for (let j = 0; j < 3; j++) {
      const xx = (j - 1) * w * 0.37;
      beam(
        p,
        [xx, guardY - 0.12, k * (d / 2 - 0.11)],
        [xx, guardY + 0.045, k * (d / 2 - 0.045)],
        0.02,
        trim,
      );
    }
    beam(
      p,
      [-w * 0.49, guardY + 0.036, k * (d / 2 - 0.045)],
      [w * 0.49, guardY + 0.036, k * (d / 2 - 0.045)],
      0.019,
      M.iron,
    );
    for (let j = 0; j < Math.ceil(w / 0.3); j++) {
      const x = -w / 2 + ((j + 0.5) * w) / Math.ceil(w / 0.3);
      egg(p, x, eave + 0.06, (k * d) / 2, 0.22 + rnd() * 0.07, 0.037 + rnd() * 0.015, 0.08, M.snow);
      if (rnd() > 0.64)
        cyl(p, x, eave - 0.13, (k * d) / 2, 0.019, 0.002, 0.17 + rnd() * 0.13, M.snow, 'y', 6);
    }
    for (const x of [-w / 2, w / 2]) beam(p, [x, eave, (k * d) / 2], [x, eave + rise, 0], 0.074, trim);
  }
}
function gable(p, w, d, eave, rise) {
  const s = new T.Shape();
  s.moveTo(-d / 2, 0);
  s.lineTo(0, rise);
  s.lineTo(d / 2, 0);
  s.closePath();
  const o = mesh(
    p,
    new T.ExtrudeGeometry(s, { depth: w, bevelEnabled: false }),
    M.wood,
    -w / 2,
    eave,
    0,
  );
  o.rotation.y = Math.PI / 2;
}
function chalet(p, x, y, z, scale, station = false) {
  const g = group(p);
  g.position.set(x, y, z);
  g.scale.setScalar(scale);
  const w = station ? 4.25 : 2.3,
    d = station ? 1.82 : 1.72,
    e = station ? 1.78 : 1.57,
    r = station ? 0.95 : 1.02;
  box(g, 0, 0.14, 0, w + 0.08, 0.28, d + 0.08, stone);
  box(g, 0, e * 0.5 + 0.12, 0, w, e - 0.15, d, plaster);
  for (let j = 0; j < 7; j++) {
    const yy = e - 0.66 + j * 0.102;
    box(g, 0, yy, 0, w + 0.036, 0.089, d + 0.035, j % 3 ? M.teak : M.wood);
  }
  gable(g, w, d, e, r);
  pitched(g, w + 0.57, d + 0.59, e, r + 0.25);
  for (const k of [-1, 1]) {
    box(g, k * w * 0.49, e * 0.5, 0, 0.086, e, d + 0.06, trim);
    box(g, 0, 0.25, k * d * 0.51, w, 0.082, 0.08, trim);
    box(g, 0, 1.05, k * d * 0.51, w, 0.097, 0.08, trim);
  }
  if (station) {
    for (const xx of [-1.58, -0.86, 0.81, 1.58])
      windowBay(g, xx, 0.69, d / 2 + 0.031, 0.43, 0.58, false);
    box(g, -0.02, 0.63, d / 2 + 0.063, 0.47, 1.1, 0.11, green);
    windowBay(g, -0.02, 0.77, d / 2 + 0.119, 0.3, 0.46, false);
    for (const xx of [-1.91, -0.71, 0.71, 1.91]) {
      box(g, xx, 0.73, d / 2 + 0.76, 0.068, 1.47, 0.068, trim);
      beam(g, [xx, 1.12, d / 2 + 0.76], [xx, 1.52, d / 2 + 0.44], 0.037, trim);
    }
    const lean = box(g, 0, 1.56, d / 2 + 0.46, w + 0.41, 0.073, 0.97, M.roof);
    lean.rotation.x = 0.14;
    const cap = box(g, 0, 1.61, d / 2 + 0.46, w + 0.43, 0.047, 0.98, M.snow);
    cap.rotation.x = 0.14;
    // Enamel clock, hung side-on to the platform, with individually engraved hour indexes.
    pipe(
      g,
      [
        [w * 0.5, 1.47, 0.64],
        [2.33, 1.62, 0.74],
        [2.53, 1.95, 1.56],
        [2.62, 1.93, 1.97],
      ],
      0.025,
      M.black,
    );
    beam(g, [2.62, 1.93, 1.97], [2.62, 1.82, 1.97], 0.02, M.iron);
    const clock = canvasTex(256, 256, (c) => {
      c.fillStyle = '#ecdfb7';
      c.fillRect(0, 0, 256, 256);
      c.translate(128, 128);
      c.strokeStyle = '#2a3433';
      c.fillStyle = '#2a3433';
      for (let i = 0; i < 60; i++) {
        c.save();
        c.rotate((i * tau) / 60);
        c.fillRect(-1.4, -113, i % 5 ? 2 : 6, i % 5 ? 7 : 18);
        c.restore();
      }
      c.lineCap = 'round';
      for (const [a, l, ww] of [
        [-0.94, 65, 9],
        [1.07, 92, 6],
      ]) {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(Math.sin(a) * l, -Math.cos(a) * l);
        c.lineWidth = ww;
        c.stroke();
      }
    });
    cyl(g, 2.62, 1.61, 1.97, 0.255, 0.255, 0.12, M.oldGold, 'z');
    mesh(g, new T.CircleGeometry(0.227, 40), mat(0xffeac8, 0.68, 0, { map: clock }), 2.62, 1.61, 2.037);
  } else {
    for (const xx of [-0.61, 0.64]) windowBay(g, xx, 0.73, d / 2 + 0.035, 0.47, 0.56);
    windowBay(g, 0, 1.32, d / 2 + 0.045, 0.34, 0.35, false);
  }
  for (const k of [-1, 1]) {
    const side = group(g);
    side.position.x = k * (w / 2 + 0.025);
    side.rotation.y = (k * Math.PI) / 2;
    windowBay(side, 0, 0.75, 0.012, 0.46, 0.55);
    windowBay(side, 0, e + 0.25, 0.013, 0.39, 0.4, false);
  }
  if (station) {
    sign(g, 0, 1.492, d / 2 + 0.972, 2.04, 0.197, 'F A L K E N G R A T', {
      bg: '#213c37',
      ink: '#ffeac0',
    });
    for (let j = 0; j < 17; j++) {
      const x = -w * 0.47 + (j * w * 0.94) / 16,
        y = 1.406 - 0.062 * Math.sin((j * Math.PI) / 4) ** 2;
      cyl(g, x, y, d / 2 + 0.9, 0.018, 0.022, 0.038, M.lamp, 'y', 7);
    }
  }
  const ch = box(g, w * 0.29, e + r * 0.8, -0.29, 0.29, 0.92, 0.31, stone);
  box(g, ch.position.x, ch.position.y + 0.46, -0.29, 0.39, 0.1, 0.42, trim);
  box(g, ch.position.x, ch.position.y + 0.52, -0.29, 0.41, 0.045, 0.43, M.snow);
  cyl(g, ch.position.x, ch.position.y + 0.584, -0.29, 0.105, 0.123, 0.15, trim);
  cyl(g, ch.position.x, ch.position.y + 0.661, -0.29, 0.078, 0.078, 0.007, M.black);
  return g.localToWorld(V(ch.position.x, ch.position.y + 0.665, -0.29));
}
function lantern(p, x, y, z, high = 1.36) {
  cyl(p, x, y + 0.05, z, 0.119, 0.139, 0.1, M.iron);
  cyl(p, x, y + high * 0.48, z, 0.034, 0.047, high * 0.93, M.darkGreen);
  torus(p, x, y + high * 0.73, z, 0.045, 0.015, M.brass, 'y');
  pipe(
    p,
    [
      [x, y + high * 0.85, z],
      [x + 0.09, y + high + 0.16, z],
      [x + 0.25, y + high + 0.22, z],
      [x + 0.36, y + high + 0.15, z],
    ],
    0.025,
    M.darkGreen,
  );
  beam(p, [x, y + high * 0.78, z], [x + 0.28, y + high + 0.16, z], 0.016, M.oldGold);
  const pendant = group(p);
  pendant.position.set(x + 0.36, y + high + 0.15, z);
  torus(pendant, 0, -0.04, 0, 0.042, 0.012, M.iron);
  cyl(pendant, 0, -0.126, 0, 0.04, 0.18, 0.103, M.darkGreen, 'y', 4).rotation.y = Math.PI / 4;
  cyl(pendant, 0, -0.27, 0, 0.143, 0.104, 0.2, M.lamp, 'y', 4).rotation.y = Math.PI / 4;
  cyl(pendant, 0, -0.385, 0, 0.119, 0.071, 0.064, M.iron, 'y', 4).rotation.y = Math.PI / 4;
  for (const dx of [-1, 1])
    for (const dz of [-1, 1])
      beam(pendant, [dx * 0.104, -0.169, dz * 0.104], [dx * 0.076, -0.367, dz * 0.076], 0.012, M.iron);
  egg(pendant, 0, -0.44, 0, 0.028, 0.043, 0.028, M.oldGold);
  halo(pendant, 0, -0.26, 0, 1.25);
  return pendant;
}
const midnight = mat(0x243d50),
  skin = mat(0xbd8d73),
  charcoal = mat(0x383b40),
  cranberry = mat(0x8c4247),
  pine = mat(0x486056),
  blueWool = mat(0x455973),
  leather = mat(0x69432f, 0.63);
const signalGlass = mat(0x79d998, 0.22, 0.1, { emissive: 0x29ed68, emissiveIntensity: 3.4 });
function handLamp(p, x, y, z, go) {
  torus(p, x, y - 0.027, z, 0.042, 0.008, M.iron);
  cyl(p, x, y - 0.081, z, 0.035, 0.066, 0.04, M.black);
  cyl(p, x, y - 0.143, z, 0.049, 0.045, 0.088, go ? signalGlass : M.lamp, 'y', 8);
  cyl(p, x, y - 0.202, z, 0.062, 0.05, 0.031, M.oldGold);
  for (const dx of [-0.046, 0.046])
    beam(p, [x + dx, y - 0.19, z + 0.019], [x + dx, y - 0.097, z + 0.019], 0.005, M.iron);
  const aura = halo(p, x, y - 0.146, z, go ? 0.62 : 0.42);
  if (go) {
    aura.material = glowMat.clone();
    aura.material.map = whiteGlow;
    aura.material.color.set(0x33ff81);
  }
}
const whiteGlow = canvasTex(64, 64, (ctx, w, h) => {
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,.8)');
  g.addColorStop(0.25, 'rgba(255,255,255,.19)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
});
function person(p, x, y, z, k, master = false) {
  const g = group(p);
  g.position.set(x, y, z);
  const coat = master ? midnight : [red, green, linen, midnight, trim][k % 5];
  g.rotation.y = master ? -0.39 : Math.sin(k * 2.38) * 1.34;
  g.scale.setScalar(master ? 1.13 : 0.96 + 0.08 * Math.sin(k * 0.8));
  const stride = master ? 0.015 : 0.054 * Math.cos(k * 2.4);
  for (const side of [-1, 1]) {
    const step = side * stride;
    beam(g, [side * 0.043, 0.242, 0], [side * 0.051, 0.046, step], 0.032, charcoal, 12);
    egg(g, side * 0.05, 0.034, step + 0.022, 0.043, 0.034, 0.068, leather);
  }
  const hem = cyl(g, 0, 0.335, 0, 0.089, 0.116, 0.228, coat, 'y', 16);
  hem.scale.z = 0.83;
  egg(g, 0, 0.466, 0, 0.102, 0.126, 0.081, coat);
  const head = group(g);
  head.position.set(0, 0.63, 0);
  head.rotation.y = master ? -0.32 : 0.32 * Math.sin(k * 2);
  egg(head, 0, 0, 0, 0.064, 0.082, 0.06, skin);
  egg(head, 0, -0.003, 0.057, 0.016, 0.02, 0.018, skin);
  egg(head, 0, 0.012, -0.018, 0.066, 0.071, 0.053, leather);
  for (const side of [-1, 1]) {
    egg(head, side * 0.061, 0, -0.001, 0.014, 0.021, 0.014, skin);
    egg(head, side * 0.024, 0.014, 0.055, 0.007, 0.006, 0.004, charcoal);
  }
  const scarf = master ? charcoal : [cranberry, linen, blueWool, pine][k % 4];
  if (master) {
    cyl(head, 0, 0.064, 0, 0.085, 0.073, 0.045, midnight);
    egg(head, 0, 0.039, 0.041, 0.078, 0.012, 0.061, M.black);
    egg(head, 0, 0.065, 0.078, 0.013, 0.012, 0.006, M.brass);
    egg(head, 0, -0.026, 0.052, 0.025, 0.008, 0.009, leather);
  } else {
    egg(head, 0, 0.053, -0.004, 0.074, 0.063, 0.071, scarf);
    torus(head, 0, 0.044, 0, 0.065, 0.011, scarf, 'y');
    if (k % 3 === 0) egg(head, 0, 0.117, -0.013, 0.023, 0.023, 0.023, linen);
    else if (k % 3 === 1) egg(head, 0, 0.046, 0.039, 0.075, 0.012, 0.058, scarf);
    else egg(head, 0, -0.017, -0.059, 0.038, 0.042, 0.038, leather);
  }
  torus(g, 0, 0.553, 0, 0.063, 0.018, scarf, 'y');
  const tail = box(g, 0.042, 0.497, 0.073, 0.045, 0.115, 0.015, scarf);
  tail.rotation.z = -0.15;
  for (let j = 0; j < 2; j++)
    box(g, 0.044, 0.449 + j * 0.018, 0.083, 0.041, 0.007, 0.007, master ? midnight : linen);
  for (let j = 0; j < 3; j++) egg(g, -0.017, 0.343 + j * 0.066, 0.084, 0.008, 0.008, 0.006, M.oldGold);
  const arm = group(g);
  arm.position.set(-0.081, 0.499, 0.012);
  const lift = master ? 0.12 : -0.076 + 0.043 * Math.cos(k * 1.7);
  beam(arm, [0, 0, 0], [-0.092, -0.072, 0.036], 0.037, coat);
  beam(arm, [-0.092, -0.072, 0.036], [-0.146, lift, 0.093], 0.031, coat);
  egg(arm, -0.15, lift, 0.095, 0.034, 0.033, 0.032, trim);
  if (master || k % 3 !== 1) handLamp(arm, -0.154, lift - 0.019, 0.114, master);
  beam(g, [0.077, 0.49, 0], [0.131, 0.329, 0.025], 0.034, coat);
  egg(g, 0.133, 0.316, 0.029, 0.032, 0.039, 0.031, trim);
  if (!master) {
    box(g, 0.145, 0.178, 0.03, 0.084, 0.147, 0.213, k % 2 ? M.teak : M.wood);
    for (const dz of [-0.068, 0.068]) box(g, 0.145, 0.178, 0.03 + dz, 0.088, 0.151, 0.014, M.oldGold);
    torus(g, 0.145, 0.266, 0.03, 0.033, 0.009, M.iron, 'x');
  }
  return arm;
}
const roadHeight = (x, z) => Math.max(ground(x, z) + 0.066, 4.2);
function car(p) {
  const g = group(p);
  g.position.set(12, roadHeight(12, 5.85), 5.85);
  g.rotation.y = Math.PI / 2;
  const enamel = mat(0x6a3433, 0.25, 0.59);
  const tail = mat(0xb3231a, 0.29, 0.14, { emissive: 0xff2912, emissiveIntensity: 1.68 });
  box(g, 0, 0.19, 0, 1.3, 0.13, 0.61, M.iron);
  egg(g, 0, 0.33, 0, 0.71, 0.204, 0.328, enamel);
  box(g, 0.36, 0.44, 0, 0.59, 0.18, 0.46, enamel);
  box(g, -0.19, 0.56, 0, 0.54, 0.26, 0.445, mat(0x6e9398, 0.16, 0.52));
  egg(g, -0.18, 0.714, 0, 0.36, 0.059, 0.265, enamel);
  for (const s of [-1, 1]) {
    for (const x of [-0.48, 0.44]) {
      cyl(g, x, 0.206, s * 0.286, 0.2, 0.2, 0.109, M.black, 'z');
      cyl(g, x, 0.206, s * 0.349, 0.106, 0.106, 0.018, M.steel, 'z');
      egg(g, x, 0.355, s * 0.29, 0.257, 0.105, 0.095, enamel);
    }
    box(g, -0.2, 0.565, s * 0.23, 0.03, 0.24, 0.025, enamel);
    for (const x of [-0.45, 0.07]) box(g, x, 0.568, s * 0.23, 0.032, 0.26, 0.029, enamel);
    egg(g, 0.653, 0.42, s * 0.216, 0.05, 0.07, 0.07, M.lamp);
    egg(g, -0.64, 0.337, s * 0.226, 0.035, 0.048, 0.041, tail);
    const tailGlow = halo(g, -0.683, 0.337, s * 0.226, 0.32);
    tailGlow.material = glowMat.clone();
    tailGlow.material.color.set(0xff392a);
    halo(g, 0.673, 0.42, s * 0.216, 0.45);
  }
  box(g, 0.678, 0.332, 0, 0.04, 0.222, 0.223, M.steel);
  for (let j = 0; j < 6; j++) box(g, 0.703, 0.25 + j * 0.031, 0, 0.013, 0.013, 0.18, M.black);
  for (const x of [-0.71, 0.72]) box(g, x, 0.205, 0, 0.07, 0.048, 0.67, M.steel);
}
function signal(p, scene) {
  const x = -6.95,
    z = 2.19,
    y = 4.25;
  // Stone plinth carries a slender signal even where the terrain drops into the cut.
  box(p, x, 2.13, z, 0.37, 4.32, 0.38, stone);
  box(p, x, y + 0.04, z, 0.45, 0.14, 0.46, M.snow);
  cyl(p, x, y + 1.07, z, 0.055, 0.094, 2.17, M.cream);
  cyl(p, x, y + 0.28, z, 0.1, 0.117, 0.54, M.black);
  for (let j = 0; j < 10; j++) {
    beam(
      p,
      [x - 0.18, y + 0.29 + j * 0.181, z - 0.03],
      [x - 0.06, y + 0.29 + j * 0.181, z - 0.03],
      0.013,
      M.iron,
    );
  }
  for (const xx of [-0.19, -0.053])
    beam(p, [x + xx, y + 0.21, z - 0.03], [x + xx, y + 2.04, z - 0.03], 0.014, M.iron);
  const arm = group(scene);
  arm.position.set(x, y + 1.94, z + 0.051);
  box(arm, 0.36, 0, 0, 0.87, 0.139, 0.067, red);
  box(arm, 0.6, 0, 0.04, 0.145, 0.139, 0.022, M.white);
  cyl(arm, 0, 0, 0.052, 0.1, 0.1, 0.068, M.black, 'z');
  batch(arm);
  cyl(p, x, y + 1.76, z + 0.037, 0.139, 0.139, 0.11, M.black, 'z');
  const lens = mat(0xff4a27, 0.3, 0.12, { emissive: 0xe33927, emissiveIntensity: 2 });
  cyl(p, x, y + 1.76, z + 0.105, 0.088, 0.088, 0.019, lens, 'z');
  const foot = group(p);
  foot.position.set(x + 1.05, y + 0.085, z + 0.13);
  sign(foot, 0, 0.43, 0, 0.42, 0.21, '07');
  beam(foot, [0, 0, -0.02], [0, 0.49, -0.02], 0.031, M.black);
  return { arm, lens };
}
export function village(scene) {
  const p = group(scene),
    platform = group(p);
  platform.position.z = -3.22;
  box(platform, 2.15, 3.98, 0.14, 13.05, 0.72, 4.09, stone);
  box(platform, 2.15, 4.36, 0.14, 13.12, 0.105, 4.14, M.rock);
  const passengerPositions = [-3.15, -2.72, -0.34, 0.11, 2.08, 4.72, 6.13, 7.56].map((x, k) => [
    x,
    1.16 + 0.27 * Math.sin(k * 2.6),
    k,
  ]);
  passengerPositions.push(
    [-2.08, 1.81, 9],
    [1.69, 1.66, 10],
    [3.48, 1.56, 11],
    [5.18, 0.4, 12],
    [7.24, 0.54, 13],
  );
  const platformSnow = canvasTex(2048, 648, (ctx, w, h) => {
    const r = random(529);
    ctx.fillStyle = '#eef1f3';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 18500; i++) {
      ctx.fillStyle = i % 2 ? 'rgba(95,114,124,.07)' : 'rgba(255,255,255,.32)';
      ctx.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2);
    }
    ctx.translate(w * (0.5 - 2.15 / 13.12), h * (0.5 - 0.14 / 4.15));
    ctx.scale(w / 13.12, h / 4.15);
    for (const [x, z, k] of [...passengerPositions, [0.46, 1.83, 0]]) {
      ctx.save();
      ctx.translate(x, z);
      ctx.scale(0.32, 0.16);
      const ao = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      ao.addColorStop(0, 'rgba(53,63,77,.59)');
      ao.addColorStop(0.45, 'rgba(86,93,101,.25)');
      ao.addColorStop(1, 'rgba(105,110,118,0)');
      ctx.fillStyle = ao;
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore();
      for (let j = 1; j < 9; j++) {
        ctx.save();
        ctx.translate(x - j * 0.14, z - 0.04 * j + 0.08 * Math.sin(j * 2.9 + k));
        ctx.rotate(1.02 + 0.17 * Math.cos(j));
        ctx.fillStyle = 'rgba(143,153,160,.23)';
        ctx.beginPath();
        ctx.ellipse(0, 0, 0.027, 0.059, 0, 0, tau);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.66)';
        ctx.fillRect(-0.024, 0.049, 0.043, 0.014);
        ctx.restore();
      }
    }
  });
  box(platform, 2.15, 4.428, 0.14, 13.12, 0.041, 4.15, mat(0xe5eaf0, 0.91, 0, { map: platformSnow }));
  for (let i = 0; i < 52; i++)
    box(platform, -4.32 + i * 0.25, 4.45, 2.17, 0.238, 0.024, 0.14, i % 4 === 0 ? M.cream : M.rock);
  const chimneys = [chalet(p, 2.37, 4.45, -3.21, 1, true)];
  for (const [x, z, s] of [
    [-5.4, -2.8, 0.83],
    [-8.3, -4.18, 0.65],
    [8.26, -8.44, 0.75],
    [11.2, -8.8, 0.71],
    [5.8, -9.4, 0.68],
    [-1, -9.4, 0.69],
    [-5, -10.1, 0.79],
    [14.6, -9.4, 0.64],
  ])
    chimneys.push(chalet(p, x, ground(x, z), z, s));
  const pendants = [-3.78, -1.32, 5.65, 8.25].map((x) => lantern(platform, x, 4.45, 1.72, 1.64));
  const waving = person(platform, 0.46, 4.452, 1.83, 0, true);
  const master = waving.parent;
  // Keep the pivot in the master's coordinates as the rest of the platform is batched.
  scene.attach(master);
  waving.removeFromParent();
  batch(master);
  master.add(waving);
  batch(waving);
  for (const light of pendants) {
    scene.attach(light);
    batch(light);
  }
  for (const [x, z, k] of passengerPositions) person(platform, x, 4.45, z, k);
  for (const x of [-1.65, 4.93]) {
    box(platform, x, 4.67, 0.81, 0.63, 0.049, 0.21, M.wood);
    box(platform, x, 4.83, 0.735, 0.63, 0.208, 0.039, M.teak);
    for (const dx of [-0.23, 0.23]) box(platform, x + dx, 4.56, 0.822, 0.048, 0.21, 0.135, M.iron);
  }
  for (let i = 0; i < 4; i++) {
    const x = -3.5 + i * 0.24;
    box(platform, x, 4.61, -0.48, 0.228, 0.29, 0.33, M.wood);
    for (const s of [-1, 1]) box(platform, x + s * 0.074, 4.758, -0.48, 0.024, 0.013, 0.34, M.oldGold);
  }
  for (const [x, z] of [
    [-3.6, 1.04],
    [7.07, 1.09],
  ]) {
    const g = group(platform);
    g.position.set(x, 4.45, z);
    for (const s of [-1, 1]) box(g, s * 0.39, 0.38, 0, 0.043, 0.76, 0.046, M.iron);
    sign(g, 0, 0.76, 0, 1.05, 0.23, 'FALKENGRAT');
  }
  // A copper-spired village chapel breaks the rear skyline.
  const ch = group(p);
  ch.position.set(-2.75, ground(-2.75, -9.3), -9.3);
  chalet(ch, 0, 0, 0, 0.88);
  box(ch, 0.61, 1.52, 0.26, 0.66, 2.98, 0.68, plaster);
  for (const z of [0.61, -0.09]) {
    box(ch, 0.61, 2.42, z, 0.37, 0.55, 0.043, trim);
    for (let k = 0; k < 5; k++) box(ch, 0.61, 2.23 + k * 0.086, z + 0.02, 0.34, 0.04, 0.028, M.iron);
  }
  box(ch, 0.61, 2.99, 0.26, 0.81, 0.13, 0.82, M.snow);
  cyl(ch, 0.61, 3.78, 0.26, 0.023, 0.63, 1.55, M.darkGreen, 'y', 4).rotation.y = Math.PI / 4;
  egg(ch, 0.61, 4.58, 0.26, 0.07, 0.09, 0.07, M.brass);
  beam(ch, [0.61, 4.6, 0.26], [0.61, 4.96, 0.26], 0.019, M.oldGold);
  beam(ch, [0.51, 4.82, 0.26], [0.71, 4.82, 0.26], 0.016, M.oldGold);
  for (let i = 0; i < 19; i++) {
    const x = -8.65 + i * 0.6,
      z = -0.94 + 0.09 * Math.sin(i);
    if (x > -4.25) break;
    const y = ground(x, z);
    box(p, x, y + 0.37, z, 0.077, 0.74, 0.077, trim);
    if (i < 7)
      for (const h of [0.26, 0.52])
        beam(p, [x, y + h, z], [x + 0.6, ground(x + 0.6, z) + h, z], 0.034, M.wood);
  }
  const lampPools = [
    [-3.78, 5.63, 1.58, 11],
    [-0.9, 5.66, 1.6, 10],
    [5.65, 5.62, 1.6, 11],
    [2.37, 5.38, 0.49, 15],
  ];
  for (const [x, y, z, power] of lampPools) {
    const l = new T.PointLight(0xffb86d, power * 0.47, 3.6, 2);
    l.position.set(x + 0.28, y + 0.28, z - 3.22);
    scene.add(l);
  }
  const { arm, lens } = signal(p, scene);
  // Road surface follows the eastern bank and crosses flush with the rail heads.
  const pavement = [],
    tex = [];
  for (let j = 0; j < 56; j++) {
    const z = -0.66 + j * 0.165;
    for (let strip = 0; strip < 8; strip++) {
      for (const [column, dz] of [
        [0, 0],
        [0, 0.165],
        [1, 0],
        [0, 0.165],
        [1, 0.165],
        [1, 0],
      ]) {
        const x = 11.21 + ((strip + column) * 1.58) / 8,
          zz = z + dz;
        pavement.push(x, roadHeight(x, zz), zz);
        tex.push(x * 0.55, zz * 0.55);
      }
    }
  }
  const bed = new T.BufferGeometry();
  bed.setAttribute('position', new T.Float32BufferAttribute(pavement, 3));
  bed.setAttribute('uv', new T.Float32BufferAttribute(tex, 2));
  bed.computeVertexNormals();
  mesh(p, bed, matRoad);
  for (let j = 0; j < 9; j++) box(p, 11.29 + j * 0.178, Y - 0.021, Z, 0.161, 0.059, 1.16, M.wood);
  const bars = [];
  for (const [x, z, k] of [
    [10.98, 4.05, 1],
    [13.04, 2.21, -1],
  ]) {
    cyl(p, x, 4.57, z, 0.085, 0.093, 0.7, M.iron);
    const g = group(scene);
    g.position.set(x, 4.85, z);
    const lever = group(g);
    lever.scale.x = k;
    box(lever, 0.7, 0, 0, 1.8, 0.084, 0.08, M.cream);
    for (let i = 0; i < 5; i++) box(lever, 0.07 + i * 0.33, 0, 0, 0.16, 0.089, 0.083, red);
    cyl(lever, -0.1, 0, 0, 0.115, 0.115, 0.15, M.iron, 'z');
    batch(lever);
    bars.push({ g, k });
  }
  car(p);
  const beacons = [];

  for (const [x, z] of [
    [10.72, 5.35],
    [13.48, 1.62],
  ]) {
    const y = ground(x, z);
    beam(p, [x, y, z], [x, y + 1.22, z], 0.045, M.black);
    egg(p, x, y + 1.29, z, 0.118, 0.115, 0.118, M.oldGold);
    cyl(p, x, y + 1.239, z, 0.11, 0.141, 0.046, M.brass);
    const bulbs = [];
    for (const side of [-1, 1]) {
      const xx = x + side * 0.142,
        yy = y + 0.815;
      const bulb = M.amber.clone();
      cyl(p, xx, yy, z, 0.101, 0.1, 0.114, M.iron, 'z');
      egg(p, xx, yy, z + 0.07, 0.072, 0.071, 0.035, bulb);
      const aura = halo(p, xx, yy, z + 0.112, 0.57);
      aura.material = glowMat.clone();
      bulbs.push({ bulb, aura });
    }
    beacons.push(bulbs);
    for (const a of [-0.62, 0.62]) {
      const b = box(p, x, y + 1.01, z, 0.62, 0.09, 0.05, M.cream);
      b.rotation.z = a;
    }
  }
  batch(p);
  return {
    chimneys,
    update(time, t, weather) {
      for (const [i, light] of pendants.entries()) {
        light.rotation.z =
          (0.09 + 0.035 * weather) * Math.sin(1.8 * time + i * 0.8) + 0.024 * Math.sin(3.1 * time + i);
        light.rotation.x = 0.037 * Math.cos(1.45 * time + i);
      }
      waving.rotation.z = -0.54 - 0.43 * Math.sin(3.65 * time);
      for (const bulbs of beacons)
        bulbs.forEach(({ bulb, aura }, i) => {
          const pulse = (0.5 + 0.5 * Math.sin(time * 7.54 + i * Math.PI)) ** 2 * t;
          bulb.emissiveIntensity = 0.09 + 3.8 * pulse;
          aura.material.opacity = 0.05 + 0.95 * pulse;
        });
      arm.rotation.z = -0.91 * t;
      lens.color.set(t > 0.52 ? 0x7fce8b : 0xf6422f);
      lens.emissive.set(t > 0.52 ? 0x39d66c : 0xf2341b);
      bars.forEach(({ g, k }) => (g.rotation.z = k * (1 - t) * 1.22));
    },
  };
}
const matRoad = mat(0x6a7274, 0.95);
