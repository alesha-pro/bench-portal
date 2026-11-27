import * as T from 'three';
import { makeCanvas, canvasTexture, clamp } from './core.js';
export function filmTitles(scene) {
  if (!document.documentElement.classList.contains('film')) return () => {};
  const titles = [
    [
      0,
      4.55,
      'FIELD CABINET     /     SPECIMEN Nº 04',
      'The Glass Formicarium',
      'Underground Ant Megacity',
    ],
    [4.65, 8.2, 'SURFACE ECOLOGY', 'A forest in miniature', ''],
    [9.8, 13.35, 'OPTICAL STUDY', 'Beneath the glass', ''],
    [21.02, 24.4, 'ROYAL NURSERY', 'The queen and her brood', ''],
    [26.2, 29.94, 'FUNGAL GARDENS', 'Cultivating the glow', ''],
  ];
  const plates = titles.map(([, , label, title, sub]) => {
    let c = makeCanvas(1920, 330),
      ctx = c.getContext('2d'),
      w = c.width,
      h = c.height;
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#14181100');
    grad.addColorStop(0.45, '#13181152');
    grad.addColorStop(1, '#10150ec7');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    const y = sub ? 147 : 189;
    ctx.fillStyle = '#d5c18e';
    ctx.fillRect(85, y - 7, 40, 2);
    ctx.font = '16px Plex';
    ctx.letterSpacing = '3px';
    ctx.fillText(label, 142, y);
    ctx.letterSpacing = '0px';
    ctx.fillStyle = '#fff3d8';
    ctx.font = (sub ? '78px' : 'italic 60px') + ' Instrument';
    ctx.fillText(title, 82, y + (sub ? 78 : 65));
    if (sub) {
      ctx.font = 'italic 32px Instrument';
      ctx.fillStyle = '#e3d8bd';
      ctx.fillText(sub, 85, 273);
    }
    return canvasTexture(c);
  });
  const m = new T.MeshBasicMaterial({
    map: plates[0],
    transparent: true,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
  });
  const q = new T.Mesh(new T.PlaneGeometry(2, (330 / 1080) * 2), m);
  q.position.y = -1 + 330 / 1080;
  q.renderOrder = 2;
  q.frustumCulled = false;
  scene.add(q);
  return (t) => {
    const i = titles.findIndex(([a, b]) => t >= a && t <= b);
    q.visible = i >= 0;
    if (i < 0) return;
    const [a, b] = titles[i];
    m.map = plates[i];
    m.opacity = clamp(Math.min((t - a) / 0.5, (b - t) / 0.55), 0, 1);
  };
}
