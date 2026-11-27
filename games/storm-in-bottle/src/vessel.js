import * as T from "three";
import {
  group,
  mesh,
  rod,
  curve,
  ball,
  box,
  ring,
  batch,
  geom,
  canvasTex,
  linework,
  radialTexture,
  std,
  rng,
  tau,
} from "./craft.js";

function linen(emblem) {
  const tex = canvasTex(512, 512, (c, w, h) => {
    c.fillStyle = "#e6d6b5";
    c.fillRect(0, 0, w, h);
    const r = rng(35);
    for (let x = 0; x < w; x++) {
      c.fillStyle = "rgba(106,78,48," + (0.034 + r() * 0.09) + ")";
      c.fillRect(x, 0, 0.7, h);
    }
    for (let y = 0; y < h; y += 2) {
      c.fillStyle = "rgba(94,77,44," + (0.016 + r() * 0.105) + ")";
      c.fillRect(0, y, w, 0.7);
    }
    for (let x = 0; x <= w; x += 64) {
      const g = c.createLinearGradient(x - 5, 0, x + 6, 0);
      g.addColorStop(0, "#77634300");
      g.addColorStop(0.52, "#76603a52");
      g.addColorStop(0.6, "#fcecc39a");
      g.addColorStop(1, "#9c7a4100");
      c.fillStyle = g;
      c.fillRect(x - 5, 0, 11, h);
    }
    c.strokeStyle = "#a08a60";
    c.lineWidth = 3;
    c.strokeRect(5, 5, 502, 502);
    const age = c.createRadialGradient(241, 236, 140, 256, 256, 352);
    age.addColorStop(0, "#553d2100");
    age.addColorStop(0.8, "#74542b0b");
    age.addColorStop(1, "#63412145");
    c.fillStyle = age;
    c.fillRect(0, 0, 512, 512);
    for (let j = 0; j < 800; j++) {
      c.fillStyle = "rgba(112,85,47," + r() * 0.13 + ")";
      c.fillRect(r() * w, r() * h, 0.7 + r() * 3, 0.7 + r() * 1.7);
    }

    for (const y of [145, 293]) {
      c.fillStyle = "#bdae886b";
      c.fillRect(0, y, w, 5);
      for (let x = 17; x < w; x += 29) {
        c.strokeStyle = "#977950";
        c.lineWidth = 1.5;
        c.beginPath();
        c.moveTo(x, y);
        c.quadraticCurveTo(x + 1, y + 9, x + 5, y + 13);
        c.stroke();
      }
    }
    if (emblem) {
      c.save();
      c.translate(256, 249);
      c.fillStyle = "#994f3f";
      c.globalAlpha = 0.9;
      c.beginPath();
      const pts = [
        [-47, -97],
        [47, -97],
        [18, -68],
        [16, -16],
        [70, -18],
        [96, -44],
        [96, 44],
        [70, 17],
        [16, 15],
        [18, 68],
        [47, 97],
        [-47, 97],
        [-18, 68],
        [-16, 15],
        [-70, 17],
        [-96, 44],
        [-96, -44],
        [-70, -18],
        [-16, -16],
        [-18, -68],
      ];
      pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
      c.closePath();
      c.fill();
      c.restore();
    }
  });
  return std(0xffffff, 0.91, 0, { map: tex, side: T.DoubleSide });
}
export function galleon(parent, m) {
  const ship = group(parent),
    fixed = group(ship),
    ropes = [];
  const addLine = (a, b) => ropes.push([a, b]);
  function beam(u) {
    return 0.33 * Math.pow(Math.sin(Math.PI * (u * 0.76)), 0.76) + 0.009;
  }
  function deck(u) {
    return 0.205 + 0.12 * Math.pow(1 - u, 4) + 0.16 * Math.pow(u, 5);
  }
  const X = (u) => -1.24 + 2.33 * u;
  const hullV = [],
    idx = [],
    uv = [],
    N = 52,
    J = 20;
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    for (let j = 0; j <= J; j++) {
      const a = -Math.PI / 2 + (Math.PI * j) / J;
      hullV.push(
        X(u),
        deck(u) - (0.4 + 0.065 * Math.sin(Math.PI * u)) * Math.pow(Math.cos(a), 0.77),
        Math.sin(a) * beam(u),
      );
      uv.push(u * 2.5, j / J);
      if (i < N && j < J) {
        const n = i * (J + 1) + j;
        idx.push(n, n + 1, n + J + 1, n + 1, n + J + 2, n + J + 1);
      }
    }
  }
  const hullmat = m.hull.clone();
  hullmat.side = T.DoubleSide;
  mesh(fixed, geom(hullV, idx, uv), hullmat);
  let dv = [],
    di = [],
    du = [];
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    for (const s of [-1, 1]) {
      dv.push(X(u), deck(u), s * beam(u));
      du.push(u, s * 0.5 + 0.5);
    }
    if (i < N) {
      const n = i * 2;
      di.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
    }
  }
  mesh(fixed, geom(dv, di, du), std(0xb88a56, 0.72, 0, { map: m.oak.map, side: T.DoubleSide }));
  const cabinLight = std(0xffb456, 0.22, 0.18, { emissive: 0xff841d, emissiveIntensity: 2.1 });
  for (const s of [-1, 1]) {
    for (const [a, rad, mat] of [
      [1.54, 0.018, m.bright],
      [1.29, 0.014, m.brass],
      [1.03, 0.017, m.darkWood],
      [0.89, 0.011, m.bright],
      [0.67, 0.009, m.darkWood],
    ]) {
      const pts = [];
      for (let i = 0; i <= 26; i++) {
        const u = i / 26;
        pts.push([
          X(u),
          deck(u) - (0.4 + 0.065 * Math.sin(Math.PI * u)) * Math.cos(a) ** 0.77,
          s * beam(u) * Math.sin(a),
        ]);
      }
      curve(fixed, pts, rad, mat, 54);
    }
    const rail = [];
    for (let i = 0; i <= 23; i++) {
      const u = i / 23;
      let x = X(u),
        y = deck(u),
        z = s * beam(u);
      rod(fixed, [x, y, z], [x, y + 0.076, z], 0.009, m.brass, 0.008, 6);
      rail.push([x, y + 0.079, z]);
    }
    curve(fixed, rail, 0.013, m.brass, 43);
    for (let i = 0; i < 10; i++) {
      const u = 0.17 + i * 0.079,
        x = X(u),
        z = s * beam(u) * 0.994,
        y = deck(u) - 0.076;
      box(fixed, 0.074, 0.061, 0.01, m.black, x, y, z);
      box(fixed, 0.079, 0.012, 0.021, m.brass, x, y + 0.035, z);
      if (i % 3 !== 1) {
        ring(fixed, 0.023, 0.0045, m.bright, x, y, z + s * 0.009, "z");
        ball(fixed, 0.02, cabinLight, x, y, z + s * 0.01, 1, 1, 0.25);
      }
    }
  }
  // Raised quarterdeck, transom gallery and five glazed stern windows.
  const cabin = std(0x704332, 0.63);
  box(fixed, 0.4, 0.23, 0.48, cabin, 0.87, 0.355, 0, 0.025);
  box(fixed, 0.45, 0.031, 0.55, m.brass, 0.87, 0.48, 0, 0.015);
  const glow = std(0xffc276, 0.28, 0.12, { emissive: 0xffa13f, emissiveIntensity: 1.1 });
  for (let i = 0; i < 5; i++) {
    const z = -0.197 + i * 0.098;
    box(fixed, 0.019, 0.106, 0.07, glow, 1.077, 0.37, z);
    box(fixed, 0.021, 0.009, 0.072, m.brass, 1.092, 0.37, z);
    box(fixed, 0.021, 0.109, 0.009, m.brass, 1.092, 0.37, z);
  }
  for (const s of [-1, 1])
    for (let i = 0; i < 4; i++)
      box(fixed, 0.041, 0.084, 0.012, glow, 0.73 + i * 0.084, 0.38, s * 0.245);
  for (const y of [0.245, 0.285, 0.451]) rod(fixed, [1.09, y, -0.25], [1.09, y, 0.25], 0.016, m.bright);
  rod(fixed, [-0.94, 0.27, 0], [-1.65, 0.61, 0], 0.028, m.hull, 0.01);
  for (const s of [-1, 1]) addLine([-1.63, 0.6, 0], [-1.07, 0.2, s * 0.095]);
  const mainMat = linen(false),
    crest = linen(true),
    cloths = [];
  const specs = [
    [-0.6, 1.48, 0.77],
    [0.16, 1.77, 0.94],
    [0.85, 1.29, 0.53],
  ];
  function sail(mx, top, bottom, wide, angle, mat, seed) {
    const w = 30,
      h = 18,
      verts = [],
      idx = [],
      uv = [],
      pos = [];
    const ax = Math.cos(angle),
      az = Math.sin(angle),
      nx = -az,
      nz = ax;
    function pt(u, v) {
      const lateral = (u - 0.5) * wide * (1 - 0.18 * v),
        bulge = 0.2 * Math.sin(Math.PI * u) * Math.sin(Math.PI * (0.095 + 0.85 * v));
      return [
        mx + ax * lateral + nx * bulge,
        bottom + (top - bottom) * v - 0.054 * Math.sin(Math.PI * u) * (1 - v),
        az * lateral + nz * bulge,
      ];
    }
    for (let j = 0; j <= h; j++)
      for (let i = 0; i <= w; i++) {
        const u = i / w,
          v = j / h;
        verts.push(...pt(u, v));
        uv.push(u, v);
        pos.push([u, v]);
        if (i < w && j < h) {
          let n = j * (w + 1) + i;
          idx.push(n, n + 1, n + w + 1, n + 1, n + w + 2, n + w + 1);
        }
      }
    const geometry = geom(verts, idx, uv);
    mesh(ship, geometry, mat);
    cloths.push({ geo: geometry, base: verts, uv: pos, seed, nx, nz });
    const a = pt(-0.12, 1),
      b = pt(1.12, 1);
    rod(fixed, a, b, 0.015, m.hull, 0.013, 10);
    for (const u of [0, 1]) {
      const a = pt(u, 0);
      addLine(a, [mx + (u - 0.5) * 0.49, 0.24, (u - 0.5) * 0.51]);
      addLine(pt(u, 1), [mx, top + 0.12, 0]);
    }
  }
  const pennantTex = canvasTex(256, 96, (c, w, h) => {
    c.fillStyle = "#a63429";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#e0b56c";
    c.fillRect(0, 12, w, 4);
    c.fillRect(0, h - 18, w, 3);
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.moveTo(17 + i * 15, 48);
      c.lineTo(22 + i * 15, 36);
      c.lineTo(27 + i * 15, 48);
      c.lineTo(22 + i * 15, 60);
      c.fill();
    }
  });
  const bunting = std(0xffffff, 0.89, 0, { map: pennantTex, side: T.DoubleSide });
  for (let j = 0; j < 3; j++) {
    const [x, h, w] = specs[j];
    rod(fixed, [x, 0.19, 0], [x, h, 0], 0.03, m.hull, 0.01, 12);
    const tiers =
      j === 1
        ? [
            [0.4, 0.97, w],
            [1.03, 1.4, w * 0.74],
            [1.44, 1.65, w * 0.49],
          ]
        : j === 0
          ? [
              [0.4, 0.88, w],
              [0.92, 1.26, w * 0.77],
              [1.29, 1.4, w * 0.42],
            ]
          : [
              [0.51, 0.87, w],
              [0.92, 1.17, w * 0.71],
            ];
    for (let n = 0; n < tiers.length; n++) {
      const [lo, hi, ww] = tiers[n];
      sail(x, hi, lo, ww, 0.45 + j * 0.11, n === 0 && j === 1 ? crest : mainMat, j * 3 + n);
    }
    const y = tiers[0][1] + 0.045;
    rod(fixed, [x, y - 0.025, 0], [x, y, 0], 0.059, m.hull, 0.091, 16);
    ring(fixed, 0.083, 0.007, m.brass, x, y + 0.025, 0, "y");
    for (const s of [-1, 1]) {
      const sh = [];
      for (let k = 0; k < 5; k++) {
        let a = [x - 0.055 + k * 0.111, deck((x + 1.24) / 2.33) + 0.04, s * beam((x + 1.24) / 2.33)],
          b = [x + (k - 2) * 0.007, y + 0.06, s * 0.022];
        addLine(a, b);
        ball(fixed, 0.013, m.darkWood, a[0], a[1] + 0.012, a[2], 1, 1.3, 0.72);
        sh.push([a, b]);
      }
      for (let k = 1; k <= 13; k++) {
        let v = k / 15;
        const mix = ([a, b]) => a.map((n, i) => n + (b[i] - n) * v);
        addLine(mix(sh[0]), mix(sh[4]));
      }
    }
    // The topmast shrouds spread aft over the crosstrees, clear of the yardarm.
    for (const side of [-1, 1]) {
      const foot = [x + 0.18, y + 0.022, side * 0.12],
        outer = [x + 0.36, y + 0.018, side * 0.15];
      rod(fixed, [x, y, 0], outer, 0.009, m.hull, 0.006, 7);
      const head = [x + 0.017, h - 0.086, side * 0.012];
      addLine(foot, head);
      addLine(outer, head);
      for (let k = 1; k < 9; k++) {
        const t = k / 11;
        addLine(
          foot.map((n, i) => n + (head[i] - n) * t),
          outer.map((n, i) => n + (head[i] - n) * t),
        );
      }
    }
    if (j < 2) addLine([x, h - 0.035, 0], [specs[j + 1][0], 0.37, 0]);
    addLine([x, h - 0.015, 0], [j === 0 ? -1.62 : specs[j - 1][0], j === 0 ? 0.6 : 0.4, 0]);
    const verts = [],
      triangles = [],
      coords = [],
      flagUV = [];
    const rows = 8,
      cols = 18;
    const tails = [1, 0.93, 0.82, 0.95, 0.71, 0.86, 0.94, 0.89, 1.04];
    for (let v = 0; v <= rows; v++)
      for (let u = 0; u <= cols; u++) {
        const f = u / cols,
          g = v / rows,
          span = (0.42 + 0.04 * j) * f * (1 - (1 - tails[v]) * f ** 3);
        verts.push(x + span, h - 0.125 + g * 0.125 - 0.035 * f, 0.007 * f);
        coords.push(f, g);
        flagUV.push([f, g]);
        if (u < cols && v < rows) {
          const k = v * (cols + 1) + u;
          triangles.push(k, k + 1, k + cols + 1, k + 1, k + cols + 2, k + cols + 1);
        }
      }
    const banner = geom(verts, triangles, coords);
    mesh(ship, banner, bunting);
    cloths.push({ geo: banner, base: verts, uv: flagUV, flag: true, seed: j });
  }
  // Triangular staysail under the fore topmast stay.
  const tri = geom(
    [-1.55, 0.62, 0, -0.63, 1.39, 0, -0.86, 0.52, 0.055, -0.98, 0.81, 0.099],
    [0, 3, 1, 1, 3, 2, 0, 2, 3],
    [0, 0, 1, 1, 0.8, 0, 0.59, 0.38],
  );
  mesh(fixed, tri, mainMat);
  // The lantern hangs from a gooseneck davit; its hinge stays fixed as the hull rolls.
  const lamps = [];
  const haloMap = radialTexture([
    [0, "rgba(255,231,140,.9)"],
    [0.19, "rgba(255,167,54,.56)"],
    [1, "rgba(255,107,16,0)"],
  ]);
  for (const side of [-1, 1]) {
    const z = side * 0.24;
    curve(
      fixed,
      [
        [1.01, 0.45, z],
        [1.07, 0.71, z],
        [1.21, 0.78, z],
        [1.28, 0.73, z],
      ],
      0.012,
      m.brass,
    );
    const lamp = group(ship);
    lamp.position.set(1.28, 0.735, z);
    for (let k = 0; k < 3; k++)
      ring(lamp, 0.018, 0.004, m.bright, 0, -0.013 - k * 0.024, 0, k % 2 ? "x" : "z");
    rod(lamp, [0, -0.09, 0], [0, -0.068, 0], 0.066, m.bright, 0.017, 6);
    rod(lamp, [0, -0.198, 0], [0, -0.094, 0], 0.043, cabinLight, 0.058, 6);
    rod(lamp, [0, -0.21, 0], [0, -0.195, 0], 0.031, m.brass, 0.054, 6);
    for (let k = 0; k < 6; k++) {
      const a = (k * tau) / 6;
      rod(
        lamp,
        [0.045 * Math.sin(a), -0.198, 0.045 * Math.cos(a)],
        [0.059 * Math.sin(a), -0.09, 0.059 * Math.cos(a)],
        0.0055,
        m.black,
        0.005,
        6,
      );
    }
    batch(lamp);
    const halo = new T.Sprite(
      new T.SpriteMaterial({ map: haloMap, blending: T.AdditiveBlending, depthWrite: false }),
    );
    halo.position.y = -0.15;
    halo.scale.setScalar(0.27);
    lamp.add(halo);
    lamps.push(lamp);
  }
  // Oilskins, caps and outstretched arms give the deck a human scale.
  const coat = std(0x293b41, 0.89),
    scarf = std(0xaa4937, 0.83),
    face = std(0xb18960, 0.8);
  for (const [x, y, z, heading] of [
    [-0.87, 0.226, 0.16, 0.34],
    [-0.35, 0.212, 0.27, -0.8],
    [0.43, 0.226, 0.25, 0.24],
    [0.83, 0.499, 0.14, -0.42],
    [0.06, 0.213, -0.23, 0.78],
  ]) {
    const crew = group(fixed);
    crew.position.set(x, y, z);
    crew.rotation.y = heading;
    for (const side of [-1, 1]) {
      rod(crew, [side * 0.039, 0.004, 0.013 * side], [side * 0.018 + 0.004, 0.065, 0], 0.012, coat);
      rod(crew, [-0.012, 0.117, side * 0.018], [-0.053, 0.086, 0.034 * side], 0.011, coat);
      rod(crew, [-0.053, 0.086, 0.034 * side], [-0.08, 0.105, 0.043 * side], 0.007, face);
    }
    rod(crew, [0, 0.058, 0], [-0.018, 0.121, 0], 0.022, coat, 0.031);
    ball(crew, 0.019, scarf, -0.019, 0.126, 0, 1.28, 0.51, 1.2);
    ball(crew, 0.022, face, -0.022, 0.15, 0, 0.84, 1.08, 0.83);
    ball(crew, 0.026, coat, -0.024, 0.164, 0, 1.23, 0.46, 0.95);
  }
  // Gilt quarter-gallery scrolls and transom balusters.
  for (const side of [-1, 1]) {
    for (let k = 0; k < 5; k++) {
      const x = 0.7 + k * 0.08;
      curve(
        fixed,
        [
          [x, 0.302, side * 0.249],
          [x + 0.023, 0.32, side * 0.262],
          [x + 0.034, 0.35, side * 0.254],
        ],
        0.008,
        m.bright,
        8,
        5,
      );
    }
    curve(
      fixed,
      [
        [0.65, 0.452, side * 0.26],
        [0.78, 0.498, side * 0.267],
        [0.97, 0.5, side * 0.269],
        [1.09, 0.48, side * 0.25],
      ],
      0.009,
      m.bright,
      15,
      5,
    );
  }
  for (let k = 0; k < 11; k++) {
    const z = -0.24 + k * 0.048;
    rod(fixed, [1.083, 0.456, z], [1.083, 0.524, z], 0.006, m.brass, 0.005, 6);
  }
  rod(fixed, [1.086, 0.528, -0.255], [1.086, 0.528, 0.255], 0.01, m.bright);
  batch(fixed);
  linework(ship, ropes, 0x392c21, 0.94);
  ship.scale.set(1.05, 0.88, 1.02);
  ship.position.x = -0.77;
  ship.rotation.y = 0.19;
  return {
    ship,
    animate(t, storm, tilt) {
      lamps.forEach((lamp, i) => {
        lamp.rotation.z =
          -0.7 * ship.rotation.z + 0.27 * tilt + (0.05 + 0.16 * storm) * Math.sin(4.22 * t + i * 0.37);
        lamp.rotation.x = -0.65 * ship.rotation.x + 0.09 * storm * Math.cos(3.13 * t + i * 0.19);
      });
      for (const { geo, base, uv, seed, nx, nz, flag } of cloths) {
        const p = geo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const [u, v] = uv[i];
          if (flag) {
            const gust = Math.sin(11 * u - t * (6 + storm * 2) + v * 0.72 + seed);
            p.setXYZ(
              i,
              base[i * 3] - 0.014 * u * gust,
              base[i * 3 + 1] + 0.025 * u * gust,
              base[i * 3 + 2] + u * (0.043 + 0.069 * storm) * gust,
            );
          } else {
            const ripple =
              (0.012 + 0.024 * storm) *
              (1 - v) *
              Math.sin(Math.PI * u) *
              Math.sin(9 * u + 4 * v - 3.8 * t + seed);
            p.setXYZ(
              i,
              base[3 * i] + nx * ripple,
              base[3 * i + 1] + ripple * 0.3,
              base[3 * i + 2] + nz * ripple,
            );
          }
        }
        p.needsUpdate = true;
        geo.computeVertexNormals();
      }
    },
  };
}
