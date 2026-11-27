import * as T from 'three';
import {
  mat,
  group,
  obj,
  ring,
  rod,
  ball,
  cyl,
  canvasTexture,
  solid,
  project,
  tau,
} from './workshop.js';

// The mater, engraved plate, pierced rete and rotating rule are separate pieces.
export function astrolabe(x, z) {
  const root = group(x, 0, z);
  root.rotation.y = 0.12;
  const r = 0.62,
    y = 0.85;
  cyl(0, 0.057, 0, 0.3, 0.36, 0.11, mat.bronze, root);
  rod([0, 0.1, -0.12], [0, 1.02, -0.2], 0.055, mat.brass, root);
  const g = group(0, y, 0, root);
  g.rotation.x = -0.2;
  const map = canvasTexture(768, 768, (c, w) => {
    c.translate(384, 384);
    const gr = c.createRadialGradient(-97, -110, 6, 0, 0, 407);
    gr.addColorStop(0, '#6b7665');
    gr.addColorStop(0.59, '#3a514b');
    gr.addColorStop(1, '#243f3e');
    c.fillStyle = gr;
    c.fillRect(-384, -384, 768, 768);
    c.strokeStyle = '#d3af6f';
    c.fillStyle = '#ebc78a';
    c.lineWidth = 2;
    function arc(x, y, r) {
      c.beginPath();
      c.arc(x, y, r, 0, tau);
      c.stroke();
    }
    for (const r of [146, 193, 237, 282, 300, 306, 351, 356, 370]) arc(0, 0, r);
    c.save();
    c.beginPath();
    c.arc(0, 0, 282, 0, tau);
    c.clip();
    for (let i = -3; i <= 3; i++) {
      arc(i * 39, 64, 153 + Math.abs(i) * 48);
      arc(-250 + i * 17, 214, 198 + i * 43);
    }
    c.restore();
    const roman = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    c.textAlign = 'center';
    c.font = '19px Georgia';
    for (let i = 0; i < 180; i++) {
      c.save();
      c.rotate((i * tau) / 180);
      c.fillRect(-1, -369, 2, i % 5 ? 8 : 16);
      c.restore();
      if (i % 15 === 0) {
        const a = (i * tau) / 180;
        c.fillText(roman[i / 15], 328 * Math.sin(a), -328 * Math.cos(a) + 6);
      }
    }
  });
  const face = obj(
    new T.CircleGeometry(r, 90),
    project(solid(0xffffff, 0.28, 0.51, { map })),
    0,
    0,
    0.002,
    g,
  );
  for (const [rad, t, zz] of [
    [r, 0.028, 0],
    [r * 0.97, 0.009, 0.02],
    [r * 0.77, 0.013, 0.025],
    [r * 0.46, 0.012, 0.039],
  ]) {
    const o = ring(0, 0, zz, rad, t, mat.gold, g);
    o.rotation.x = 0;
  }
  const ecc = ring(0.033, 0.074, 0.038, r * 0.63, 0.014, mat.brass, g);
  ecc.rotation.x = 0;
  for (let i = 0; i < 8; i++) {
    const a = (i * tau) / 8 + 0.27,
      p1 = [Math.cos(a) * r * 0.24, Math.sin(a) * r * 0.24, 0.048],
      p2 = [Math.cos(a + 0.31) * r * 0.53, Math.sin(a + 0.31) * r * 0.53, 0.048];
    rod(p1, p2, 0.012, mat.brass, g, 0.006);
    ball(...p2, 0.019, 0.019, 0.013, mat.gold, g);
  }
  rod([-0.43, -0.23, 0.062], [0.44, 0.24, 0.062], 0.016, mat.gold, g);
  ball(0, 0, 0.075, 0.045, 0.045, 0.025, mat.gold, g);
  const shackle = ring(0, r + 0.075, 0, 0.068, 0.014, mat.gold, g);
  shackle.rotation.x = 0;
  return face;
}
