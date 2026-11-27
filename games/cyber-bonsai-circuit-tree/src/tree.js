import * as T from "three";
import {
  P,
  V,
  tau,
  range,
  random,
  place,
  metal,
  curve,
  pipe,
  taper,
  canvasTexture,
} from "./craft.js";

const ivoryBronze = metal(0xb78a5d, 0.83, 0.36),
  smokedBronze = metal(0x524033, 0.78, 0.38);
const patina = metal(0x695746, 0.77, 0.43),
  darkBark = metal(0x3e3432, 0.76, 0.4);
const fiberCore = metal(0x79b4a8, 0.55, 0.22, {
  emissive: 0x41b8b4,
  emissiveIntensity: 0.72,
});
const sapGold = metal(0xf7a94e, 0.42, 0.3, {
  emissive: 0xffa52f,
  emissiveIntensity: 0.66,
});
const sapBlue = metal(0x4cbbcd, 0.41, 0.27, {
  emissive: 0x1ac1d0,
  emissiveIntensity: 0.98,
});
const jacket = metal(0x98ddd4, 0.4, 0.17, {
  transparent: true,
  opacity: 0.36,
  depthWrite: false,
});
export const sapUniforms = { height: { value: -10 }, clock: { value: 0 } };
for (const material of [fiberCore, sapBlue, sapGold]) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.sapHeight = sapUniforms.height;
    shader.uniforms.sapClock = sapUniforms.clock;
    shader.vertexShader =
      "varying vec3 fiberPosition;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\n fiberPosition=(modelMatrix*vec4(transformed,1.)).xyz;",
      );
    shader.fragmentShader =
      "uniform float sapHeight,sapClock; varying vec3 fiberPosition;\n" +
      shader.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
      float band=(fiberPosition.y-sapHeight)/.22;
      float travel=cos(fiberPosition.y*10.+fiberPosition.x*.9-sapClock*4.5);
      totalEmissiveRadiance*=.63+.58*pow(max(0.,travel),8.)+5.*exp(-band*band);`,
      );
  };
}
const bark = canvasTexture(384, 768, (ctx, w, h) => {
  const img = ctx.createImageData(w, h),
    d = img.data;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const u = (x / w) * tau,
        v = y / h;
      const sweep =
        u +
        v * 1.73 +
        0.11 * Math.sin(v * 11 + u * 2) +
        0.041 * Math.sin(v * 18 - u);
      const fine =
        0.5 + 0.5 * Math.cos(sweep * 73 + 1.3 * Math.sin(v * 44 + u * 4));
      const furrow = Math.pow(
        0.5 + 0.5 * Math.sin(sweep * 23 + 2 * Math.sin(v * 21 + u)),
        7,
      );
      const pits = (Math.sin(x * 98.15 + y * 31.37) * 31571.13) % 1;
      const b = 174 + fine * 29 - furrow * 92 + pits * 13;
      const i = (y * w + x) * 4;
      d[i] = b * 1.04;
      d[i + 1] = b;
      d[i + 2] = b * 0.96;
      d[i + 3] = 255;
    }
  ctx.putImageData(img, 0, 0);
});
bark.wrapS = T.RepeatWrapping;
for (const mat of [darkBark, ivoryBronze, smokedBronze, patina, P.bronze]) {
  mat.map = bark;
  mat.bumpMap = bark;
  mat.bumpScale = mat === darkBark ? 0.026 : 0.009;
}
export const buds = [],
  routes = [];
const path = (pts) => curve(pts);
function strand(c, r0, r1, thick, phase, spiral, mat, root, collect = false) {
  const n = 42,
    f = c.computeFrenetFrames(n, false),
    points = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n,
      a = phase + spiral * t + 0.15 * Math.sin(t * 8 + phase);
    const amp = root ? 0.12 : 0.08,
      turn = root ? 14 : 5;
    const flutes =
      1 +
      amp * Math.sin(5 * a + t * turn) +
      amp * 0.46 * Math.sin(9 * a - t * turn);
    const r = T.MathUtils.lerp(r0, r1, t) * flutes * (root ? 0.995 : 0.982);
    points.push(
      c
        .getPointAt(t)
        .addScaledVector(f.normals[i], Math.cos(a) * r)
        .addScaledVector(f.binormals[i], Math.sin(a) * r),
    );
  }
  const line = path(points);
  taper(line, thick, thick * (root ? 0.3 : 0.45), mat, {
    steps: n,
    sides: 7,
    flute: 0.04,
  });
  if (collect) routes.push(line);
}
function woody(c, r0, r1, isTrunk = false) {
  taper(c, r0, r1, isTrunk ? darkBark : P.bronze, {
    steps: isTrunk ? 84 : 38,
    sides: isTrunk ? 38 : 18,
    flute: isTrunk ? 0.12 : 0.08,
    twist: isTrunk ? 14 : 5,
  });
  const n = isTrunk ? 23 : 8;
  for (let i = 0; i < n; i++) {
    const a = (i * tau) / n + range(-0.035, 0.035),
      twist = isTrunk ? 10.7 : 4.1;
    const mat = [
      ivoryBronze,
      smokedBronze,
      P.bronze,
      P.copper,
      patina,
      P.graphite,
    ][i % 6];
    strand(c, r0, r1, r0 * range(0.046, 0.138), a, twist, mat, isTrunk);
    if (i === 1 || i === 5 || i === 14 || i === 19) {
      strand(
        c,
        r0 * 1.013,
        r1 * 1.013,
        r0 * (isTrunk ? 0.029 : 0.046),
        a + 0.132,
        twist,
        i % 3 === 1 ? sapBlue : sapGold,
        isTrunk,
        true,
      );
    }
  }
}
function ferrule(c, t, r) {
  const p = c.getPointAt(t),
    v = c.getTangentAt(t),
    q = new T.Quaternion().setFromUnitVectors(V(0, 1, 0), v);
  for (const side of [-1, 1]) {
    const geo = new T.CylinderGeometry(r * 1.05, r * 1.07, r * 0.17, 20);
    place(
      geo,
      side > 0 ? P.gold : P.graphite,
      p.clone().addScaledVector(v, side * r * 0.1),
      V(1, 1, 1),
      q,
    );
  }
}
function blossom(p, size) {
  buds.push({
    p,
    size,
    theta: range(-1.15, 1.15),
    tilt: range(-1.22, 0.55),
    roll: range(-Math.PI, Math.PI),
    hue: random(),
  });
}
function sprig(base, end, bend, r = 0.018) {
  const mid = base.clone().lerp(end, 0.53).add(bend);
  const c = path([base, mid, end]);
  taper(c, r * 1.16, 0.006, jacket, { steps: 12, sides: 8, flute: 0.02 });
  taper(c, r * 0.58, 0.0028, fiberCore, { steps: 12, sides: 6, flute: 0.02 });
  if (random() > 0.3) {
    pipe(c, r * 0.28, random() > 0.55 ? sapBlue : sapGold, 12, 4);
    routes.push(c);
  }
  return c;
}
function fan(c, side, weight, spread) {
  // New shoots alternate front and back along each horizontal bough.
  const count = Math.round(7 * weight);
  for (let i = 0; i < count; i++) {
    const t = 0.28 + (0.68 * (i + range(0.05, 0.89))) / count;
    const base = c.getPointAt(t),
      sign = i % 2 ? 1 : -1;
    const ext = (1.22 - t * 0.48) * range(0.53, 0.9) * spread;
    const end = base
      .clone()
      .add(
        V(
          side * ext * range(0.35, 0.85),
          range(0.16, 0.47),
          sign * ext * range(0.52, 0.94),
        ),
      );
    const twig = path([
      base,
      base
        .clone()
        .lerp(end, 0.32)
        .add(V(side * 0.08, -0.069, sign * 0.04)),
      end.clone().add(V(-side * 0.055, -0.13, -sign * 0.03)),
      end,
    ]);
    taper(twig, range(0.03, 0.048), 0.008, P.brass, {
      steps: 16,
      sides: 8,
      flute: 0.06,
    });
    strand(twig, 0.032, 0.006, 0.004, 1.5, 3.1, P.turquoise, false, true);
    for (let j = 0; j < 4; j++) {
      const foot = twig.getPointAt(0.32 + 0.155 * j),
        angle = range(0, tau);
      const tip = foot
        .clone()
        .add(
          V(
            Math.cos(angle) * range(0.13, 0.36) + side * 0.095,
            range(0.11, 0.3),
            Math.sin(angle) * range(0.12, 0.35),
          ),
        );
      const fine = sprig(foot, tip, V(side * 0.037, -0.043, 0.022));
      blossom(tip, range(0.081, 0.143));
      if (random() > 0.17) {
        const elbow = fine.getPointAt(range(0.4, 0.7)),
          p = elbow
            .clone()
            .add(V(range(-0.17, 0.17), range(0.045, 0.19), range(-0.15, 0.15)));
        sprig(elbow, p, V(0.02, -0.02, 0.02), 0.009);
        blossom(p, range(0.055, 0.095));
      }
    }
    blossom(end, range(0.084, 0.14));
  }
}
export function growTree() {
  const trunk = path([
    [-0.28, 0.865, -0.04],
    [-0.18, 1.18, 0],
    [0.16, 1.52, 0.035],
    [0.19, 1.82, 0.06],
    [-0.07, 2.04, 0.07],
    [-0.44, 2.33, 0],
    [-0.47, 2.58, -0.09],
    [-0.23, 2.83, -0.13],
    [0.31, 3.02, -0.12],
    [0.57, 3.28, -0.07],
    [0.49, 3.54, 0],
    [0.17, 3.74, 0.02],
    [0.12, 3.98, 0],
    [0.37, 4.18, -0.04],
    [0.65, 4.31, -0.1],
  ]);
  woody(trunk, 0.305, 0.058, true);
  for (let i = 0; i < 12; i++) {
    const a = (i * tau) / 12 + 0.17,
      rad = range(0.65, 1.07);
    const end = V(-0.26 + Math.cos(a) * rad, 0.88, Math.sin(a) * rad * 0.76);
    const start = V(
      -0.18 + Math.cos(a) * 0.12,
      range(1.08, 1.33),
      Math.sin(a) * 0.12,
    );
    const mid = start.clone().lerp(end, 0.48);
    mid.y = 0.96;
    mid.z += 0.05 * Math.cos(a);
    const root = path([start, mid, end]);
    taper(root, range(0.07, 0.13), 0.01, i % 2 ? P.bronze : smokedBronze, {
      steps: 18,
      sides: 12,
      flute: 0.14,
      twist: 4,
    });
    strand(
      root,
      0.085,
      0.01,
      0.009,
      1.5,
      2.2,
      i % 3 ? P.copper : P.turquoise,
      false,
      i % 3 === 0,
    );
  }
  const limbs = [
    [
      [
        [-0.4, 2.36, 0],
        [-0.86, 2.59, 0.02],
        [-1.25, 2.58, 0.1],
        [-1.55, 2.7, 0.07],
        [-1.97, 2.66, 0.12],
        [-2.32, 2.53, 0.15],
        [-2.71, 2.44, 0.15],
      ],
      -0.99,
      0.152,
      1.34,
      1.06,
    ],
    [
      [
        [0.06, 1.87, 0.05],
        [0.56, 2.0, 0.03],
        [0.84, 2.23, 0.18],
        [1.2, 2.19, 0.25],
        [1.52, 2.24, 0.31],
      ],
      1,
      0.112,
      0.81,
      0.91,
    ],
    [
      [
        [0.35, 3.06, -0.13],
        [0.82, 3.14, -0.18],
        [1.16, 3.31, -0.1],
        [1.67, 3.25, -0.03],
        [2.06, 3.32, -0.02],
        [2.48, 3.22, 0.12],
      ],
      1,
      0.143,
      1.17,
      1.1,
    ],
    [
      [
        [-0.34, 2.77, -0.12],
        [-0.68, 2.98, -0.44],
        [-0.96, 3.14, -0.63],
        [-1.42, 3.15, -0.82],
      ],
      -1,
      0.091,
      0.66,
      0.83,
    ],
    [
      [
        [0.41, 3.56, 0],
        [0.09, 3.6, 0.1],
        [-0.24, 3.72, 0.08],
        [-0.59, 3.84, 0.12],
        [-1.04, 3.8, 0.17],
        [-1.44, 3.77, 0.23],
      ],
      -1,
      0.107,
      0.93,
      1.0,
    ],
    [
      [
        [0.17, 3.9, -0.01],
        [0.49, 3.97, -0.35],
        [0.96, 4.03, -0.43],
        [1.31, 3.96, -0.48],
      ],
      1,
      0.075,
      0.58,
      0.68,
    ],
    [
      [
        [0.25, 4.08, -0.04],
        [0.05, 4.26, -0.1],
        [-0.32, 4.35, -0.17],
        [-0.69, 4.3, -0.22],
      ],
      -1,
      0.073,
      0.64,
      0.73,
    ],
    [
      [
        [0.45, 4.22, -0.04],
        [0.68, 4.36, -0.1],
        [0.93, 4.4, -0.14],
        [1.2, 4.36, -0.11],
      ],
      1,
      0.065,
      0.71,
      0.75,
    ],
  ];
  for (const [points, side, r, w, s] of limbs) {
    const c = path(points);
    woody(c, r, 0.015);
    ferrule(c, 0.31, r * 0.79);
    ferrule(c, 0.68, r * 0.43);
    fan(c, side, w, s);
  }
}
