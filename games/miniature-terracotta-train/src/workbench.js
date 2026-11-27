import {
  T,
  M,
  mat,
  group,
  mesh,
  box,
  cyl,
  torus,
  egg,
  beam,
  pipe,
  sign,
  canvasTex,
  batch,
  photo,
  repeat,
} from './craft.js';

export function workbench(scene) {
  const g = group(scene),
    top = -1.44,
    veneer = photo('workbench-oak.jpg');
  const benchwood = mat(0xc8a17b, 0.55, 0.04, {
    map: repeat(veneer, 3.25, 0.88),
    bumpMap: veneer,
    bumpScale: 0.028,
  });
  const studio = new T.SpotLight(0xffca8c, 325, 26, 0.61, 0.67, 2);
  studio.position.set(4, 8, 15);
  studio.target.position.set(5, top, 12);
  scene.add(studio, studio.target);
  for (let j = 0; j < 11; j++) box(g, 0, top - 0.32, -22 + j * 4.35, 69, 0.64, 4.337, benchwood);
  const ct = group(g);
  ct.position.set(5.45, top, 12.31);
  ct.rotation.y = -0.23;
  box(ct, 0, 0.12, 0, 3.38, 0.24, 2.48, M.black);
  box(ct, 0, 0.48, 0, 3.25, 0.57, 2.36, M.oldGold);
  box(ct, 0, 0.8, 0, 3.3, 0.112, 2.4, M.brass);
  cyl(ct, -0.64, 0.875, 0, 0.7, 0.7, 0.055, M.cream);
  for (let i = 0; i <= 18; i++) {
    const a = ((i / 18) * 1.44 - 0.72) * Math.PI;
    const b = box(
      ct,
      -0.64 + Math.sin(a) * 0.58,
      0.907,
      -Math.cos(a) * 0.58,
      0.023,
      0.016,
      i % 3 ? 0.062 : 0.098,
      M.iron,
    );
    b.rotation.y = -a;
  }
  cyl(ct, -0.64, 0.961, 0, 0.4, 0.42, 0.093, M.black);
  cyl(ct, -0.64, 1.17, 0, 0.28, 0.37, 0.36, M.iron);
  box(ct, -0.64, 1.355, -0.13, 0.043, 0.012, 0.214, M.cream);
  cyl(ct, 0.85, 0.89, -0.26, 0.164, 0.183, 0.082, M.iron);
  const led = mat(0xff9761, 0.16, 0.08, { emissive: 0xff590c, emissiveIntensity: 4.2 });
  egg(ct, 0.85, 1.0, -0.26, 0.119, 0.146, 0.119, led);
  torus(ct, 0.85, 0.936, -0.26, 0.137, 0.018, M.brass, 'y');
  for (let i = 0; i < 28; i++) {
    const angle = (i * 2 * Math.PI) / 28;
    cyl(
      ct,
      -0.64 + 0.315 * Math.cos(angle),
      1.162,
      0.315 * Math.sin(angle),
      0.018,
      0.026,
      0.255,
      M.black,
      'y',
      6,
    );
  }
  sign(ct, 0.7, 0.865, 0.48, 1.11, 0.48, 'TRACTION', { bg: '#322b24' }).rotation.x = -Math.PI / 2;
  for (const x of [-1.46, 1.46])
    for (const z of [-1.01, 1.01]) {
      cyl(ct, x, 0.862, z, 0.053, 0.053, 0.023, M.steel, 'y', 12);
      box(ct, x, 0.877, z, 0.07, 0.008, 0.01, M.black);
    }
  for (const k of [-1, 1])
    pipe(
      g,
      [
        [5.5 + k * 0.14, top + 0.51, 11.35],
        [6.6 + k * 0.13, top + 0.17, 11.1],
        [8.7 + k * 0.17, top + 0.07, 11.93],
        [9.8 + k * 0.21, top + 0.09, 11.44],
        [10.62 + k * 0.19, top + 0.22, 9.67],
      ],
      0.039,
      k === 1 ? M.black : M.red,
    );
  const blueprint = canvasTex(1024, 640, (c, w, h) => {
    c.fillStyle = '#3a5868';
    c.fillRect(0, 0, w, h);
    for (let j = 10; j < w; j += 22) {
      c.strokeStyle = 'rgba(193,219,218,.16)';
      c.beginPath();
      c.moveTo(j, 0);
      c.lineTo(j, h);
      c.stroke();
    }
    for (let j = 10; j < h; j += 22) {
      c.beginPath();
      c.moveTo(0, j);
      c.lineTo(w, j);
      c.stroke();
    }
    c.strokeStyle = '#d8e4dd';
    c.strokeRect(24, 24, w - 48, h - 48);
    for (let k = 0; k < 2; k++) {
      c.beginPath();
      c.roundRect(105 + k * 11, 146 + k * 11, 802 - k * 22, 280 - k * 22, 132);
      c.stroke();
    }
    c.font = '26px monospace';
    c.fillStyle = '#d8e4dd';
    c.fillText('FALKENGRAT   /   GLEISPLAN', 63, 86);
    c.font = '16px monospace';
    c.fillText('FIG. 01     •     H0 / 1:87', 675, 554);
    for (let k = 0; k < 7; k++) {
      c.strokeRect(235 + k * 74, 391, 57, 66);
    }
    c.fillText('TALVIADUKT', 337, 490);
  });
  const paper = mesh(
    g,
    new T.PlaneGeometry(6.3, 3.94),
    mat(0xffffff, 0.91, 0, { map: blueprint }),
    -4.4,
    top + 0.02,
    12.76,
  );
  paper.rotation.set(-Math.PI / 2, 0, 0.12);
  const cutters = group(g);
  cutters.position.set(-0.23, top + 0.13, 12.87);
  cutters.rotation.y = 0.31;
  for (const k of [-1, 1]) {
    pipe(
      cutters,
      [
        [0, 0.06, 0],
        [-0.47, 0.05, k * 0.34],
        [-1.11, 0.05, k * 0.48],
        [-1.81, 0.07, k * 0.37],
      ],
      0.126,
      M.red,
    );
    beam(cutters, [-0.46, 0.07, k * 0.26], [0.36, 0.07, -k * 0.24], 0.099, M.steel);
    // Forged, tapering flat jaws; the teeth point inward between the two halves.
    const jaw = new T.Shape();
    jaw.moveTo(0.22, -k * 0.12);
    jaw.lineTo(0.38, -k * 0.29);
    jaw.lineTo(1.36, -k * 0.105);
    jaw.lineTo(1.38, -k * 0.067);
    jaw.closePath();
    const o = mesh(
      cutters,
      new T.ExtrudeGeometry(jaw, { depth: 0.105, bevelEnabled: false }),
      M.steel,
      0,
      0.035,
      0,
    );
    o.rotation.x = -Math.PI / 2;
    for (let n = 0; n < 9; n++) {
      const xx = 0.58 + 0.07 * n;
      box(cutters, xx, 0.144, k * (0.197 - 0.012 * n), 0.015, 0.009, 0.077 - 0.004 * n, M.iron);
    }
  }
  cyl(cutters, 0, 0.17, 0, 0.135, 0.135, 0.072, M.steel);
  box(cutters, 0, 0.211, 0, 0.161, 0.008, 0.018, M.iron).rotation.y = 0.41;
  const offcut = group(g);
  offcut.position.set(2.15, top + 0.035, 13.97);
  offcut.rotation.y = -0.25;
  for (let j = 0; j < 11; j++) box(offcut, (j - 5) * 0.245, 0.045, 0, 0.129, 0.083, 1.06, M.wood);
  for (const z of [-0.4, 0.4]) {
    box(offcut, 0, 0.1, z, 3.04, 0.04, 0.09, M.iron);
    box(offcut, 0, 0.155, z, 3.04, 0.084, 0.035, M.iron);
    box(offcut, 0, 0.207, z, 3.04, 0.025, 0.065, M.steel);
    for (let j = 0; j < 11; j++)
      box(offcut, (j - 5) * 0.245, 0.121, z + 0.066, 0.07, 0.033, 0.04, M.oldGold);
  }
  const sprue = group(g);
  sprue.position.set(8.93, top + 0.1, 13.5);
  sprue.rotation.y = 0.17;
  for (const s of [-1, 1])
    beam(sprue, [s * 0.85, 0.03, -1.65], [s * 0.85, 0.03, 1.65], 0.037, M.darkGreen);
  for (const z of [-1.62, 0, 1.62]) beam(sprue, [-0.85, 0.03, z], [0.85, 0.03, z], 0.036, M.darkGreen);
  for (const z of [-0.85, 0.76])
    for (const x of [-0.4, 0.41]) {
      beam(sprue, [x, 0.03, z - 0.64], [x, 0.03, z + 0.57], 0.032, M.darkGreen);
      for (let i = 0; i < 7; i++) {
        const w = (1 - i / 8) * 0.39;
        for (const k of [-1, 1])
          beam(
            sprue,
            [x, 0.03, z - 0.55 + i * 0.15],
            [x + k * w, 0.035, z - 0.69 + i * 0.15],
            0.041,
            M.darkGreen,
          );
      }
    }
  for (let j = 0; j < 12; j++) box(ct, -1.33 + j * 0.235, 0.52, 1.186, 0.12, 0.21, 0.016, M.iron);
  sign(ct, 0, 0.42, 1.212, 1.19, 0.29, 'FELDWERK', { bg: '#2d322a', ink: '#e9ce82' });
  const pilot = new T.PointLight(0xffa03c, 2.15, 2.7, 2);
  pilot.position.set(0.85, 1.16, -0.26);
  ct.add(pilot);
  const plate = group(g);
  plate.position.set(0.0, -0.95, 10.38);
  box(plate, 0, 0, 0, 4.3, 0.37, 0.065, M.brass);
  sign(plate, 0, 0, 0.035, 4.18, 0.31, 'F A L K E N G R A T   •   1 9 1 2', {
    bg: '#41433a',
    ink: '#edce88',
  });
  batch(g);
}
