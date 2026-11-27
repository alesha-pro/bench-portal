import * as T from "three";
import {
  tau,
  group,
  mesh,
  box,
  ball,
  ring,
  lathe,
  rod,
  curve,
  canvasTex,
  batch,
  radialTexture,
  geom,
  std,
  rng,
} from "./craft.js";
import { atlases } from "./atlas.js";
import { hourglass, doubloons, instrumentGlass } from "./instruments.js";
import { rose } from "./surfaces.js";

function plaque(p, m) {
  const tex = canvasTex(1024, 160, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#a77c48");
    g.addColorStop(0.36, "#e5c48a");
    g.addColorStop(0.66, "#b28e58");
    g.addColorStop(1, "#987046");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    c.lineWidth = 2;
    c.strokeStyle = "#755930";
    c.strokeRect(12, 11, w - 24, h - 22);
    c.fillStyle = "#30291f";
    c.textAlign = "center";
    c.font = "46px Georgia";
    c.fillText("M A R E   I N   V I T R O", w / 2, 81);
    c.font = "21px Georgia";
    c.fillText("PELAGIC COLLECTION     •     No. 017", w / 2, 120);
  });
  const mat = std(0xffffff, 0.43, 0.3, { map: tex });
  const a = box(p, 2.1, 0.33, 0.032, m.brass, -0.65, 0.27, 1.17, 0.014);
  mesh(p, new T.PlaneGeometry(2.06, 0.304), mat, a.position.x, a.position.y, a.position.z + 0.017);
  for (const x of [-1.61, 0.31]) ball(p, 0.026, m.bright, x, 0.27, 1.207, 1, 1, 0.36);
}
function buildCradle(p, m) {
  const base = group(p);
  box(base, 5.36, 0.12, 2.42, m.darkWood, -0.64, 0.1, 0, 0.055);
  box(base, 5.22, 0.24, 2.33, m.oak, -0.64, 0.246, 0, 0.064);
  box(base, 5.15, 0.034, 2.27, m.brass, -0.64, 0.377, 0, 0.016);
  box(base, 5.04, 0.073, 2.2, m.darkWood, -0.64, 0.422, 0, 0.034);
  plaque(base, m);
  for (const x of [-2.57, 0.98]) {
    for (const z of [-0.66, 0.66]) {
      box(base, 0.43, 0.12, 0.5, m.brass, x, 0.485, z, 0.047);
      rod(base, [x, 0.48, z], [x, 0.75, z * 0.94], 0.115, m.bright, 0.085, 20);
    }
    const s = new T.Shape(),
      rad = 1.544,
      cy = 2.02;
    for (let i = 0; i <= 60; i++) {
      const a = -1.21 + (i * 2.42) / 60;
      const z = Math.sin(a) * rad,
        y = cy - Math.cos(a) * rad;
      i ? s.lineTo(z, y) : s.moveTo(z, y);
    }
    for (let i = 60; i >= 0; i--) {
      const a = -1.21 + (i * 2.42) / 60;
      let rr = rad + 0.07 + 0.16 * Math.pow(Math.cos(a), 5);
      s.lineTo(Math.sin(a) * rr, cy - Math.cos(a) * rr);
    }
    s.closePath();
    const saddle = mesh(
      base,
      new T.ExtrudeGeometry(s, {
        depth: 0.16,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.017,
        bevelThickness: 0.012,
      }),
      m.brass,
      x + 0.08,
      0,
      0,
    );
    saddle.rotation.y = -Math.PI / 2;
    for (const side of [-1, 1]) {
      const pts = [];
      for (let i = 0; i <= 22; i++) {
        const a = -1.2 + (i * 2.4) / 22;
        pts.push([x + side * 0.095, cy - 1.59 * Math.cos(a), 1.59 * Math.sin(a)]);
      }
      curve(base, pts, 0.019, m.bright, 45, 6);
    }
  }
  batch(base);
}
function chart(p, m) {
  const g = group(p);
  g.position.set(0.81, 0.046, 1.16);
  g.rotation.y = 0.35;
  const v = [],
    idx = [],
    uv = [],
    nx = 132,
    nz = 24;
  for (let j = 0; j <= nz; j++)
    for (let i = 0; i <= nx; i++) {
      const u = i / nx,
        k = j / nz;
      let x = -3.15 + 6.3 * u,
        y = 0.014 * Math.sin(5 * x + 6 * k),
        z = (k - 0.5) * 3.7;
      // The final margin curls continuously into a volute with visible paper layers.
      if (u > 0.81) {
        const a = ((u - 0.81) / 0.19) * 8.25,
          r = 0.245 - 0.0145 * a + 0.009 * Math.sin(5 * k + u);
        x = 1.953 + Math.sin(a) * r;
        y += (1 - Math.cos(a)) * r + 0.014 * a;
      }
      if (u < 0.07) y += 0.07 * (1 - u / 0.07) ** 2;
      const margin = (1 - Math.min(k, 1 - k) * 2) ** 10;
      z += margin * (0.012 * Math.sin(13 * x) + 0.009 * Math.cos(22 * x));
      y += margin * 0.01 * Math.sin(8 * x + k);
      v.push(x, y, z);
      uv.push(u, 1 - k);
      if (i < nx && j < nz) {
        const q = j * (nx + 1) + i;
        idx.push(q, q + nx + 1, q + 1, q + 1, q + nx + 1, q + nx + 2);
      }
    }
  mesh(g, geom(v, idx, uv), m.chart);
  const waxed = std(0xb58b4f, 0.42, 0.09);
  const edges = group(g);
  for (const row of [0, nz]) {
    const start = row * (nx + 1),
      pts = [];
    for (let i = 0; i <= nx; i++) {
      const j = (start + i) * 3;
      pts.push([v[j], v[j + 1] - 0.004, v[j + 2]]);
    }
    curve(edges, pts, 0.009, waxed, 212, 6);
  }
  batch(edges);
}
function compass(p, m) {
  const g = group(p);
  g.position.set(-3.48, 0.065, 2.13);
  g.rotation.y = 0.36;
  lathe(
    g,
    [
      [0, 0],
      [0, 0.56],
      [0.05, 0.64],
      [0.12, 0.65],
      [0.19, 0.59],
      [0.19, 0],
    ],
    m.brass,
  );
  for (const y of [0.05, 0.105, 0.18]) ring(g, 0.615, 0.019, m.bright, 0, y, 0, "y");
  const face = canvasTex(768, 768, (c, w, h) => {
    c.fillStyle = "#202c2d";
    c.fillRect(0, 0, w, h);
    c.textAlign = "center";
    c.fillStyle = "#f2d8a0";
    rose(c, 384, 384, 260, "#c3a979");
    for (let i = 0; i < 72; i++) {
      c.save();
      c.translate(384, 384);
      c.rotate((tau * i) / 72);
      c.fillStyle = "#e1c89a";
      c.fillRect(-1, -350, 2, i % 6 ? 13 : 28);
      c.restore();
    }
    c.font = "bold 44px Georgia";
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      c.fillText(["N", "E", "S", "W"][i], 384 + Math.sin(a) * 298, 398 - Math.cos(a) * 298);
    }
  });
  const disk = mesh(
    g,
    new T.CircleGeometry(0.565, 80),
    std(0xffffff, 0.42, 0.38, { map: face, bumpMap: face, bumpScale: 0.012 }),
    0,
    0.2,
    0,
  );
  disk.rotation.x = -Math.PI / 2;
  ring(g, 0.575, 0.029, m.bright, 0, 0.215, 0, "y");
  const needle = group(g);
  needle.rotation.y = -0.56;
  for (const side of [-1, 1]) {
    mesh(
      needle,
      geom([-0.058, 0.232, 0, 0, 0.278, 0, 0, 0.239, side * 0.46, 0.058, 0.232, 0], [0, 1, 2, 1, 3, 2]),
      side === 1
        ? std(0xccd3c8, 0.26, 0.66, { side: T.DoubleSide })
        : std(0xa33b2f, 0.34, 0.55, { side: T.DoubleSide }),
    );
  }
  ball(g, 0.065, m.bright, 0, 0.27, 0, 1, 0.5, 1);
  ring(g, 0.145, 0.025, m.brass, 0, 0.13, -0.76, "y");
  for (let i = 0; i < 96; i++) {
    const a = (tau * i) / 96;
    rod(
      g,
      [0.64 * Math.cos(a), 0.066, 0.64 * Math.sin(a)],
      [0.64 * Math.cos(a), 0.126, 0.64 * Math.sin(a)],
      0.007,
      m.brass,
      0.006,
      5,
    );
  }
  // The lens has a true bevel above the pivot and a bright gold retaining wire.
  const lens = lathe(
    g,
    [
      [0.226, 0.572],
      [0.241, 0.563],
      [0.287, 0.532],
      [0.301, 0.44],
      [0.306, 0],
    ],
    instrumentGlass(),
  );
  lens.castShadow = false;
  g.remove(needle, lens);
  for (let i = 0; i < 8; i++) {
    const a = (tau * i) / 8,
      x = 0.596 * Math.cos(a),
      z = 0.596 * Math.sin(a);
    ball(g, 0.015, m.bright, x, 0.222, z, 1, 0.47, 1);
  }
  batch(g);
  g.add(needle, lens);
  return (t, impact) => {
    needle.rotation.y =
      -0.56 + 0.015 * Math.sin(t * 3.3) + impact * (0.12 * Math.sin(t * 16) + 0.05 * Math.cos(t * 27));
  };
}
function spyglass(p, m) {
  const g = group(p);
  g.position.set(4.08, 0.3, 1.5);
  g.rotation.y = 1.04;
  g.rotation.z = -0.04;
  const telescope = group(g);
  telescope.rotation.z = -Math.PI / 2;
  lathe(
    telescope,
    [
      [-1.31, 0],
      [-1.31, 0.23],
      [-1.25, 0.27],
      [-0.37, 0.245],
      [-0.34, 0.198],
      [0.36, 0.181],
      [0.39, 0.153],
      [0.88, 0.144],
      [0.91, 0.12],
      [1.13, 0.117],
      [1.16, 0.153],
      [1.25, 0.151],
      [1.25, 0],
    ],
    m.brass,
  );
  lathe(
    telescope,
    [
      [-1.17, 0.264],
      [-1.15, 0.276],
      [-0.48, 0.259],
      [-0.46, 0.25],
    ],
    std(0x462c20, 0.73, 0.02),
  );
  for (const [y, r] of [
    [-1.28, 0.265],
    [-1.2, 0.274],
    [-0.46, 0.256],
    [-0.39, 0.25],
    [0.32, 0.192],
    [0.39, 0.169],
    [0.85, 0.151],
    [0.92, 0.145],
    [1.17, 0.15],
    [1.24, 0.151],
  ])
    ring(telescope, r, 0.022, m.bright, 0, y, 0, "y");
  for (let i = 0; i < 23; i++)
    ring(telescope, 0.266 - i * 0.0007, 0.004, m.ropeDark, 0, -1.14 + i * 0.029, 0, "y");
  const lens = std(0x183e40, 0.09, 0.68);
  ball(telescope, 0.228, lens, 0, -1.316, 0, 1, 0.24, 1);
  batch(g);
}
function candle(p, m) {
  const g = group(p);
  g.position.set(4.02, 0.035, -2.35);
  lathe(
    g,
    [
      [0, 0],
      [0, 0.49],
      [0.045, 0.55],
      [0.11, 0.48],
      [0.14, 0.34],
      [0.22, 0.24],
      [0.28, 0.16],
      [0.34, 0.22],
      [0.38, 0.22],
      [0.41, 0.182],
    ],
    m.brass,
  );
  ring(g, 0.49, 0.024, m.bright, 0, 0.088, 0, "y");
  lathe(
    g,
    [
      [0.34, 0.16],
      [0.43, 0.15],
      [0.51, 0.1],
      [0.62, 0.15],
      [0.68, 0.165],
      [0.74, 0.11],
      [0.81, 0.075],
      [1.0, 0.073],
      [1.09, 0.155],
      [1.14, 0.23],
      [1.18, 0.205],
    ],
    m.brass,
  );
  for (const [y, r] of [
    [0.48, 0.117],
    [0.67, 0.164],
    [1.1, 0.17],
    [1.155, 0.217],
  ])
    ring(g, r, 0.012, m.bright, 0, y, 0, "y");
  const waxGroup = group(g);
  waxGroup.position.y = 0.82;
  const wax = std(0xd7bb8d, 0.53);
  lathe(
    waxGroup,
    [
      [0.36, 0],
      [0.36, 0.183],
      [0.39, 0.195],
      [1.61, 0.185],
      [1.66, 0.165],
      [1.6, 0.105],
      [1.56, 0],
    ],
    wax,
  );
  const rand = rng(92);
  for (let i = 0; i < 15; i++) {
    const a = rand() * tau,
      d = 0.05 + rand() ** 2 * 0.31;
    ball(
      waxGroup,
      0.044,
      wax,
      Math.cos(a) * 0.172,
      1.64 - d / 2,
      Math.sin(a) * 0.172,
      0.65,
      d / 0.08,
      1,
    );
  }
  // Hardened rivulets have a broad shoulder and a rounded drop over the brass saucer.
  for (const [a, depth] of [
    [0.93, 0.78],
    [1.44, 0.61],
    [1.88, 0.32],
    [2.51, 0.92],
    [-0.74, 0.46],
  ]) {
    const pts = [];
    for (let i = 0; i <= 14; i++) {
      const u = i / 14,
        angle = a + 0.08 * Math.sin(u * 7 + a),
        r = 0.182 + 0.013 * Math.sin(u * Math.PI);
      pts.push([r * Math.cos(angle), 1.62 - depth * u, r * Math.sin(angle)]);
    }
    curve(waxGroup, pts, 0.023, wax, 18, 7);
    const [x, y, z] = pts.at(-1);
    ball(waxGroup, 0.034, wax, x, y, z, 0.79, 1.35, 0.76);
  }
  for (let k = 0; k < 11; k++) {
    const a = k * 0.64;
    ball(
      g,
      0.067,
      wax,
      0.16 * Math.cos(a),
      1.165 + 0.012 * Math.sin(a),
      0.16 * Math.sin(a),
      1,
      0.32,
      1.24,
    );
  }
  rod(waxGroup, [0, 1.57, 0], [0.012, 1.72, 0], 0.018, m.black);
  batch(g);
  const f = group(g);
  f.position.y = 2.48;
  const fm = new T.MeshBasicMaterial({ color: new T.Color(4, 1.85, 0.38) });
  const flame = lathe(
    f,
    [
      [0, 0],
      [0.015, 0.042],
      [0.065, 0.067],
      [0.135, 0.057],
      [0.21, 0.03],
      [0.31, 0],
    ],
    fm,
    0,
    0,
    0,
    28,
  );
  flame.castShadow = false;
  ball(
    f,
    0.045,
    new T.MeshBasicMaterial({ color: new T.Color(5, 4, 1.8) }),
    0,
    0.064,
    0.012,
    1,
    1.6,
    1,
  );
  const halo = new T.Sprite(
    new T.SpriteMaterial({
      map: radialTexture([
        [0, "rgba(255,214,124,.65)"],
        [0.16, "rgba(244,154,75,.22)"],
        [0.55, "rgba(233,100,22,.045)"],
        [1, "rgba(255,140,23,0)"],
      ]),
      transparent: true,
      blending: T.AdditiveBlending,
      depthWrite: false,
    }),
  );
  halo.scale.setScalar(1.32);
  halo.position.y = 0.12;
  f.add(halo);
  const light = new T.PointLight(0xff9a48, 17, 11, 2);
  light.position.set(4.02, 2.68, -2.35);
  p.add(light);
  return (t) => {
    const flicker = 0.5 * Math.sin(t * 7.4) + 0.31 * Math.sin(t * 16.8 + 1) + 0.19 * Math.sin(t * 27);
    f.scale.set(1 - 0.11 * flicker, 1 + 0.14 * flicker, 1);
    f.rotation.z = 0.07 * flicker;
    light.intensity = 17 + 2.8 * flicker;
  };
}
export function desk(scene, m) {
  const top = group(scene);
  const surface = mesh(top, new T.PlaneGeometry(22, 17), m.table, 0, -0.002, 0);
  surface.rotation.x = -Math.PI / 2;
  box(top, 22, 0.24, 17, m.darkWood, 0, -0.13, 0, 0.045);
  batch(top);
  atlases(scene, m);
  chart(scene, m);
  buildCradle(scene, m);
  const needle = compass(scene, m),
    sand = hourglass(scene, m);
  doubloons(scene, m);
  spyglass(scene, m);
  const shadow = radialTexture([
    [0, "rgba(0,0,0,.91)"],
    [0.48, "rgba(0,0,0,.61)"],
    [1, "rgba(0,0,0,0)"],
  ]);
  function ao(x, z, w, d, y) {
    const q = mesh(
      scene,
      new T.PlaneGeometry(w, d),
      new T.MeshBasicMaterial({
        map: shadow,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
      }),
      x,
      y,
      z,
    );
    q.rotation.x = -Math.PI / 2;
    q.castShadow = false;
  }
  ao(-0.63, 0, 6.65, 3.36, 0.089);
  ao(-3.46, 2.13, 1.6, 1.55, 0.033);
  ao(4.02, -2.35, 1.28, 1.18, 0.025);
  ao(-4.34, 0.66, 0.96, 0.95, 0.015);
  const flame = candle(scene, m);
  return (t, impact) => {
    flame(t);
    needle(t, impact);
    sand(t);
  };
}
