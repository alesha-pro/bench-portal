import * as T from 'three';
import {
  canvasTexture,
  rand,
  tau,
  solid,
  project,
  obj,
  statics,
  mat,
  cyl,
  ring,
} from './workshop.js';
function star(g, x, y, r) {
  g.save();
  g.translate(x, y);
  g.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4,
      s = i % 2 ? r * 0.23 : r;
    if (!i) g.moveTo(s, 0);
    else g.lineTo(s * Math.cos(a), s * Math.sin(a));
  }
  g.closePath();
  g.fill();
  g.restore();
}
function arc(g, x, y, r) {
  g.beginPath();
  g.arc(x, y, r, 0, tau);
  g.stroke();
}
export function dial(x, y, z, r, tilt = 0.02) {
  const tex = canvasTexture(512, 512, (g) => {
    const shade = g.createRadialGradient(225, 195, 2, 256, 256, 250);
    shade.addColorStop(0, '#ead6a6');
    shade.addColorStop(0.83, '#d1b87f');
    shade.addColorStop(1, '#74603a');
    g.fillStyle = shade;
    g.fillRect(0, 0, 512, 512);
    g.strokeStyle = '#655136';
    g.fillStyle = '#3f3425';
    g.lineWidth = 2;
    [229, 222, 184, 95, 89].forEach((r) => arc(g, 256, 256, r));
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    for (let i = 0; i <= 60; i++) {
      const a = 0.77 * Math.PI + (i * 1.46 * Math.PI) / 60;
      g.save();
      g.translate(256, 256);
      g.rotate(a);
      g.fillRect(212 - (i % 5 ? 12 : 26), -1.4, i % 5 ? 12 : 26, i % 5 ? 2.5 : 4.8);
      g.restore();
      if (i % 10 === 0) {
        g.font = '24px Georgia';
        g.fillText('' + i * 2, 256 + 159 * Math.cos(a), 256 + 159 * Math.sin(a));
      }
    }
    g.font = 'italic 24px Georgia';
    g.fillText('Caloricum', 256, 320);
    g.font = '13px serif';
    g.fillText('GRADUS   •   IGNIS', 256, 352);
    g.save();
    g.translate(256, 256);
    g.rotate(-1.1);
    g.beginPath();
    g.moveTo(-42, -6);
    g.lineTo(168, 0);
    g.lineTo(-42, 7);
    g.fill();
    g.restore();
    g.fillStyle = '#8b602e';
    g.beginPath();
    g.arc(256, 256, 12, 0, tau);
    g.fill();
  });
  const m = project(solid(0xffffff, 0.08, 0.63, { map: tex })),
    g = new T.Group();
  statics.add(g);
  g.position.set(x, y, z);
  g.rotation.x = tilt;
  const caseM = cyl(0, 0, 0, r * 1.1, r * 1.08, r * 0.34, mat.bronze, g);
  caseM.rotation.x = Math.PI / 2;
  const face = obj(new T.CircleGeometry(r, 80), m, 0, 0, r * 0.19, g);
  const bezel = ring(0, 0, r * 0.22, r * 1.018, r * 0.055, mat.gold, g);
  bezel.rotation.x = 0;
  return face;
}
export function parchment(x, y, z, w, d, rotation) {
  const map = canvasTexture(1024, 720, (g, W, H) => {
    const grad = g.createRadialGradient(530, 355, 100, 490, 350, 630);
    grad.addColorStop(0, '#e0c698');
    grad.addColorStop(0.75, '#c3a26f');
    grad.addColorStop(1, '#977842');
    g.fillStyle = grad;
    g.fillRect(0, 0, W, H);
    for (let i = 0; i < 18000; i++) {
      g.fillStyle = rand() > 0.48 ? '#56402c13' : '#ffe1af24';
      g.fillRect(rand() * W, rand() * H, rand() * 2.6 + 1, rand() * 1.7 + 1);
    }
    g.strokeStyle = '#775c3d';
    g.lineWidth = 1.5;
    g.strokeRect(30, 30, W - 60, H - 60);
    g.strokeRect(39, 39, W - 78, H - 78);
    g.fillStyle = '#423526';
    g.textAlign = 'center';
    g.font = 'italic 49px Georgia';
    g.fillText('De arte distillandi', 510, 100);
    g.font = '16px Georgia';
    g.fillText('L I B E R   S E C U N D U S      ·      F O L I U M   X V I I', 512, 135);
    const cx = 266,
      cy = 371;
    [138, 132, 108, 66, 30, 22].forEach((r) => arc(g, cx, cy, r));
    for (let j = 0; j < 2; j++) {
      g.beginPath();
      for (let k = 0; k <= 3; k++) {
        const a = ((k * 2) / 3 + j / 3) * Math.PI - Math.PI / 2;
        const xx = cx + 119 * Math.cos(a),
          yy = cy + 119 * Math.sin(a);
        k ? g.lineTo(xx, yy) : g.moveTo(xx, yy);
      }
      g.stroke();
    }
    for (let i = 0; i < 90; i++) {
      g.save();
      g.translate(cx, cy);
      g.rotate((i * tau) / 90);
      g.fillRect(134, 0, i % 5 ? 4 : 10, 1.4);
      g.restore();
    }
    g.font = 'italic 23px Georgia';
    g.textAlign = 'left';
    const lines = [
      'Vitriolum in cucurbita ponatur,',
      'et lento igne solvatur.',
      'Aqua per serpentem ascendit,',
      'spiritus in vitro colligitur.',
      'Luna regit aquas; Sol ignem.',
      'Mercurius ter sublimatus',
      'in vas crystallinum cadit.',
      'Ex una gutta oritur aurum.',
    ];
    lines.forEach((l, i) => g.fillText(l, 468, 228 + i * 40));
    g.font = 'italic 22px Georgia';
    g.fillText('Fig. IV  •  Circulatio', 153, 559);
    g.font = '14px Georgia';
    g.textAlign = 'center';
    g.fillText('S O L V E     E T     C O A G U L A', 510, 630);
    star(g, 510, 665, 9);
  });
  const geo = new T.PlaneGeometry(w, d, 60, 30);
  geo.rotateX(-Math.PI / 2);
  const a = geo.attributes.position;
  for (let i = 0; i < a.count; i++) {
    const u = a.getX(i) / w + 0.5,
      v = a.getZ(i) / d + 0.5;
    const lift =
      0.23 * Math.exp(-u * 16) + 0.07 * Math.exp(-(1 - u) * 21) + 0.012 * Math.sin(v * 5 + u * 7);
    a.setY(i, lift);
    a.setX(i, a.getX(i) + 0.013 * Math.sin(v * 26) * Math.pow(Math.abs(2 * u - 1), 9));
  }
  geo.computeVertexNormals();
  const o = obj(geo, project(solid(0xffffff, 0, 0.9, { map, side: T.DoubleSide })), x, y, z);
  o.rotation.y = rotation;
}
export function plate(x, y, z, text, sub, w = 0.78, angle = -0.75) {
  const map = canvasTexture(600, 190, (g) => {
    g.fillStyle = '#1d2926';
    g.fillRect(0, 0, 600, 190);
    g.strokeStyle = '#b79760';
    g.lineWidth = 3;
    g.strokeRect(7, 7, 586, 176);
    g.lineWidth = 1;
    g.strokeRect(14, 14, 572, 162);
    g.fillStyle = '#e3c591';
    g.textAlign = 'center';
    g.font = '45px Georgia';
    g.fillText(text, 300, 91);
    g.font = '19px Georgia';
    g.fillText(sub, 300, 139);
    for (const xx of [27, 573]) {
      g.beginPath();
      g.arc(xx, 94, 5, 0, tau);
      g.fill();
    }
  });
  const o = obj(
    new T.PlaneGeometry(w, (w * 190) / 600),
    project(solid(0xffffff, 0.27, 0.53, { map, side: T.DoubleSide })),
    x,
    y,
    z,
  );
  o.rotation.x = angle;
  return o;
}

// Ink and gilt markings follow the blown contour. A small angular patch
// preserves the clear sight line into the centre of the bowl.
export function etching(scene, x, z, body, lo, hi, azimuth, spread, symbol, title) {
  const map = canvasTexture(448, 512, (g, w, h) => {
    g.fillStyle = '#e0d1a8';
    g.strokeStyle = '#e0d1a8';
    g.lineWidth = 2.2;
    g.textAlign = 'center';
    g.font = '73px Georgia';
    g.fillText(symbol, 144, 184);
    [54, 62].forEach((r) => arc(g, 144, 155, r));
    star(g, 144, 67, 10);
    g.font = '17px Georgia';
    g.fillText(title, 144, 253);
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(285, 47);
    g.lineTo(285, 466);
    g.stroke();
    for (let j = 0; j <= 30; j++) {
      const y = 50 + j * 13.6;
      g.fillRect(285, y, j % 5 === 0 ? 45 : j % 2 ? 18 : 25, j % 5 === 0 ? 2.7 : 1.6);
      if (j % 5 === 0) {
        g.textAlign = 'left';
        g.font = '17px Georgia';
        g.fillText(String(70 - j), 339, y + 6);
      }
    }
  });
  const N = 32,
    M = 42,
    ps = [],
    uv = [],
    inds = [];
  function radius(y) {
    let k = 1;
    while (k < body.length - 1 && body[k][1] < y) k++;
    const [r0, h0] = body[k - 1],
      [r1, h1] = body[k];
    return T.MathUtils.lerp(r0, r1, (y - h0) / (h1 - h0)) + 0.003;
  }
  for (let j = 0; j <= M; j++)
    for (let i = 0; i <= N; i++) {
      const yy = lo + ((hi - lo) * j) / M,
        r = radius(yy),
        a = azimuth + spread * (i / N - 0.5);
      ps.push(x + r * Math.sin(a), yy, z + r * Math.cos(a));
      uv.push(i / N, j / M);
      if (i < N && j < M) {
        const k = j * (N + 1) + i;
        inds.push(k, k + 1, k + N + 1, k + 1, k + N + 2, k + N + 1);
      }
    }
  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.Float32BufferAttribute(ps, 3));
  geo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  geo.setIndex(inds);
  geo.computeVertexNormals();
  const m = new T.MeshBasicMaterial({
    map,
    transparent: true,
    opacity: 0.63,
    depthWrite: false,
    side: T.DoubleSide,
  });
  const o = obj(geo, m, 0, 0, 0, scene);
  o.renderOrder = 6;
}
