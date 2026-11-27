import { T, M, tau, canvasTex, mesh, mat, cyl, torus, box, egg, pipe } from './craft.js';
const soot = mat(0x373c3b, 0.62, 0.45, { map: M.iron.map }),
  oil = mat(0x554d3e, 0.42, 0.67, { map: M.brass.map });
function foundryPlate(p, x, y, z, k) {
  const texture = canvasTex(512, 320, (c, w, h) => {
    c.fillStyle = '#193e37';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#d8b879';
    c.textAlign = 'center';
    c.strokeStyle = '#d8b879';
    c.lineWidth = 5;
    c.beginPath();
    c.ellipse(w / 2, h / 2, w * 0.47, h * 0.44, 0, 0, tau);
    c.stroke();
    c.font = 'bold 36px Georgia';
    c.fillText('F E L D W E R K', w / 2, 114);
    c.font = 'bold 60px Georgia';
    c.fillText('No. 107', w / 2, 186);
    c.font = '27px Georgia';
    c.fillText('WINTERTHUR · 1912', w / 2, 230);
  });
  const badge = mesh(
    p,
    new T.CircleGeometry(1, 48),
    mat(0xffe2ac, 0.36, 0.29, { map: texture }),
    x,
    y,
    z,
  );
  badge.scale.set(0.165, 0.096, 1);
  badge.rotation.y = k < 0 ? Math.PI : 0;
}
export function ironwork(p) {
  // Boiler lap seams and domed rivet heads on each rolled sheet.
  for (const xx of [-0.58, -0.19, 0.242, 0.718, 1.085, 1.494])
    for (let j = 0; j < 27; j++) {
      const a = (tau * j) / 27,
        r = 0.399;
      egg(
        p,
        xx - 0.03,
        1.04 + Math.cos(a) * r,
        Math.sin(a) * r,
        0.014,
        0.014,
        0.014,
        xx > 1.08 ? soot : M.oldGold,
      );
    }
  for (const k of [-1, 1]) {
    const z = k * 0.467;
    foundryPlate(p, -0.05, 1.04, k * 0.408, k);
    // Air reservoirs, oilers, injector pipe unions and clamped feed lines.
    cyl(p, -0.22, 0.553, k * 0.38, 0.086, 0.086, 0.65, soot, 'x');
    for (const xx of [-0.43, -0.05]) torus(p, xx, 0.553, k * 0.38, 0.086, 0.011, M.oldGold, 'x');
    pipe(
      p,
      [
        [-0.84, 0.77, z],
        [-0.61, 0.77, z],
        [-0.51, 0.72, z],
        [-0.11, 0.72, z],
        [0.12, 0.795, z],
        [0.71, 0.795, z],
        [0.8, 0.65, z],
        [0.97, 0.56, z],
      ],
      0.017,
      M.brass,
    );
    pipe(
      p,
      [
        [0.26, 1.46, k * 0.13],
        [0.31, 1.31, k * 0.29],
        [0.4, 1.22, k * 0.36],
        [0.42, 0.99, k * 0.42],
        [0.54, 0.83, z],
      ],
      0.018,
      oil,
    );
    for (const [x, y] of [
      [-0.73, 0.774],
      [-0.29, 0.718],
      [0.29, 0.799],
      [0.63, 0.799],
    ])
      cyl(p, x, y, z, 0.031, 0.031, 0.041, M.oldGold, 'x', 6);
    for (const xx of [-0.72, 0.01, 0.74]) {
      const fender = new T.Shape();
      fender.absarc(0, 0, 0.363, 0.25, Math.PI - 0.25, false);
      fender.absarc(0, 0, 0.341, Math.PI - 0.25, 0.25, true);
      fender.closePath();
      mesh(
        p,
        new T.ExtrudeGeometry(fender, { depth: 0.105, bevelEnabled: false }),
        M.green,
        xx,
        0.322,
        k > 0 ? 0.368 : -0.473,
      );
      for (let j = 0; j < 4; j++) {
        const span = 0.25 - j * 0.039;
        pipe(
          p,
          [
            [xx - span, 0.519 + j * 0.016, k * 0.315],
            [xx, 0.562 + j * 0.016, k * 0.315],
            [xx + span, 0.519 + j * 0.016, k * 0.315],
          ],
          0.012,
          soot,
        );
      }
    }
    for (let j = 0; j < 32; j++) {
      const xx = -1.5 + j * 0.097;
      cyl(p, xx, 0.639, k * 0.546, 0.011, 0.011, 0.012, M.oldGold, 'z', 8);
    }
    for (let j = 0; j < 6; j++) {
      cyl(p, 1.2 - j * 0.048, 0.41, k * 0.43, 0.145, 0.145, 0.012, soot, 'x', 36);
    }
    for (const x of [0.937, 1.223]) {
      torus(p, x, 0.412, k * 0.43, 0.141, 0.012, M.oldGold, 'x');
      pipe(
        p,
        [
          [x, 0.3, k * 0.43],
          [x, 0.246, k * 0.46],
          [x + 0.027, 0.215, k * 0.49],
        ],
        0.017,
        M.brass,
      );
    }
    for (const xx of [-1.58, -1.49, -0.81])
      for (const y of [0.78, 0.89, 1.03, 1.13]) egg(p, xx, y, k * 0.53, 0.012, 0.012, 0.008, M.brass);
    for (const xx of [-1.51, -0.81]) {
      box(p, xx, 1.385, k * 0.494, 0.032, 0.54, 0.049, M.green);
      box(p, xx, 1.385, k * 0.52, 0.009, 0.5, 0.007, M.oldGold);
    }
    for (const h of [0.35, 0.47])
      for (const xx of [-1.39, -1.15, -0.92]) box(p, xx, h, k * 0.62, 0.08, 0.013, 0.017, M.steel);
  }
  // Boiler-top safety valve and the twin brass whistle pipes.
  for (const [x, z, h] of [
    [-0.33, -0.11, 0.143],
    [-0.4, -0.1, 0.21],
  ]) {
    cyl(p, x, 1.67 + h / 2, z, 0.034, 0.032, h, M.brass);
    torus(p, x, 1.67 + h, z, 0.03, 0.005, M.iron, 'y');
  }
  pipe(
    p,
    [
      [-0.51, 1.45, 0.18],
      [-0.5, 1.59, 0.16],
      [-0.44, 1.61, 0.06],
      [-0.31, 1.61, 0.045],
    ],
    0.018,
    M.brass,
  );
  for (let j = 0; j < 9; j++) {
    const x = -0.65 + j * 0.21;
    box(p, x, 0.7, 0.493, 0.056, 0.014, 0.037, soot).rotation.y = 0.58;
  }
  for (const x of [1.67, -1.67])
    for (const z of [-0.49, -0.31, 0.31, 0.49])
      for (const y of [0.37, 0.455])
        cyl(p, x + Math.sign(x) * 0.07, y, z, 0.022, 0.022, 0.017, M.steel, 'x', 6);
}
