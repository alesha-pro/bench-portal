import { Vector3, Euler, Matrix4, Quaternion } from "three";

export const V = (x = 0, y = 0, z = 0) => new Vector3(x, y, z);
export const bands = [
  [410, 0x6238db],
  [420, 0x5939f1],
  [431, 0x473bf9],
  [444, 0x304cfa],
  [458, 0x176afb],
  [472, 0x098fe9],
  [487, 0x00bccc],
  [502, 0x08bc95],
  [519, 0x23bb58],
  [537, 0x79c642],
  [555, 0xbad03a],
  [573, 0xf4c52b],
  [591, 0xf79a22],
  [616, 0xf56424],
  [643, 0xea372c],
  [675, 0xc92437],
];
export const slit = V(-8.1, 2.32, -1.45);
export const beamDirection = (elevation) =>
  V(1, Math.tan((elevation * Math.PI) / 180), -0.073).normalize();
const eps = 0.0001;
export const triangle = [
  [-1.12, 0.76],
  [1.12, 0.76],
  [0, 0.76 - 1.12 * Math.sqrt(3)],
];
export const halfHeight = 0.67;
export function prismVertices() {
  return [-halfHeight, halfHeight].flatMap((y) =>
    triangle.map(([x, z]) => V(x, y, z)),
  );
}
export const prismFaces = [
  [0, 1, 2],
  [5, 4, 3],
  [0, 3, 4, 1],
  [1, 4, 5, 2],
  [2, 5, 3, 0],
];
const verts = prismVertices();
const planes = prismFaces.map((ids) => {
  const a = verts[ids[0]],
    n = verts[ids[1]]
      .clone()
      .sub(a)
      .cross(verts[ids[2]].clone().sub(a))
      .normalize();
  if (n.dot(a) < 0) n.negate();
  return { n, k: n.dot(a) };
});
export function apparatus() {
  return [
    {
      id: "prism",
      label: "Crown-glass prism",
      kind: "prism",
      p: V(-2.48, 2.0, -1.86),
      yaw: -0.24,
      tilt: 0.28,
      size: 1,
    },
    {
      id: "mirror",
      label: "Speculum mirror",
      kind: "mirror",
      p: V(1.78, 1.07, 1.11),
      yaw: 0.2245,
      tilt: 0.26,
      size: 1.02,
    },
    {
      id: "lens",
      label: "Biconvex lens",
      kind: "lens",
      p: V(2.724, 1.25, -1.01),
      yaw: -0.195,
      tilt: 0.15,
      size: 1.089,
    },
    {
      id: "sphere",
      label: "Water-filled glass sphere",
      kind: "sphere",
      p: V(3.798, 1.53, -2.631),
      yaw: 0,
      tilt: 0,
      size: 0.656,
    },
    {
      id: "flint",
      label: "Flint-glass prism",
      kind: "prism",
      p: V(-4.57, 0.96, -0.02),
      yaw: -0.52,
      tilt: 0.16,
      size: 0.56,
    },
  ];
}
export function syncOptic(o) {
  const q = new Quaternion().setFromEuler(new Euler(o.tilt, o.yaw, 0, "YXZ"));
  o.matrix = new Matrix4().compose(o.p, q, V(o.size, o.size, o.size));
  o.inverse = o.matrix.clone().invert();
}
// Cauchy dispersion about a fixed reference line. The bench can magnify dispersion.
const refractive = {
  crown: [1.518, 0.0105],
  flint: [1.62, 0.016],
  water: [1.333, 0.0031],
};
export function indexOf(material, nm, spread) {
  if (material === "air") return 1;
  const [base, dispersion] = refractive[material];
  return base + dispersion * spread * (1e6 / (nm * nm) - 1e6 / (560 * 560));
}
export const waterRadius = 0.955,
  mirrorCover = 0.044;
export const screen = { x: 5.35, y: 1.86, z: -4.78, w: 3.8, h: 1.85 };
// Width is the opening between the jaws in model space (the scale reads millimetres).
export const slitHalfWidth = (mm) => mm * 0.042;
const lensR = 2.52,
  lensC = Math.sqrt(lensR * lensR - 1);
export const lensDepth = (r) => Math.sqrt(lensR * lensR - r * r) - lensC;
function hitOptic(o, org, dir) {
  const p = org.clone().applyMatrix4(o.inverse);
  const d = dir.clone().transformDirection(o.inverse);
  let best = Infinity,
    normal,
    surface;
  function accept(t, n, face = "outer") {
    if (t > eps && t < best) {
      best = t;
      normal = n;
      surface = face;
    }
  }
  if (o.kind === "prism") {
    let near = -Infinity,
      far = Infinity,
      nn,
      fn;
    for (const { n, k } of planes) {
      const a = n.dot(d),
        b = k - n.dot(p);
      if (Math.abs(a) < 1e-9) {
        if (b < 0) return null;
        continue;
      }
      const t = b / a;
      if (a < 0 && t > near) {
        near = t;
        nn = n;
      }
      if (a > 0 && t < far) {
        far = t;
        fn = n;
      }
    }
    if (near > far + eps) return null;
    accept(near, nn);
    accept(far, fn);
  } else if (o.kind === "mirror") {
    const radial = d.x * d.x + d.y * d.y,
      proj = p.x * d.x + p.y * d.y;
    const disc = proj * proj - radial * (p.x * p.x + p.y * p.y - 1);
    if (disc >= 0 && radial > 1e-9) {
      for (const t of [
        (-proj - Math.sqrt(disc)) / radial,
        (-proj + Math.sqrt(disc)) / radial,
      ]) {
        if (Math.abs(p.z + t * d.z) < mirrorCover)
          accept(t, V(p.x + t * d.x, p.y + t * d.y, 0).normalize(), "rim");
      }
    }
    for (const z of [-mirrorCover, 0, mirrorCover]) {
      const t = (z - p.z) / d.z,
        b = p.clone().addScaledVector(d, t);
      if (b.x * b.x + b.y * b.y <= 1)
        accept(t, V(0, 0, Math.sign(z) || 1), z ? "outer" : "metal");
    }
  } else {
    const sphere = o.kind === "sphere";
    const surfaces = sphere
      ? [
          [0, 1],
          [0, waterRadius],
        ]
      : [
          [-lensC, lensR],
          [lensC, lensR],
        ];
    for (const [cz, r] of surfaces) {
      const v = p.clone().sub(V(0, 0, cz)),
        m = v.dot(d),
        disc = m * m - v.lengthSq() + r * r;
      if (disc < 0) continue;
      for (const t of [-m - Math.sqrt(disc), -m + Math.sqrt(disc)]) {
        if (t <= eps || t >= best) continue;
        const b = p.clone().addScaledVector(d, t);
        if (!sphere && b.x * b.x + b.y * b.y + (b.z + cz) ** 2 > r * r + 1e-6)
          continue;
        accept(
          t,
          b.sub(V(0, 0, cz)).normalize(),
          r === waterRadius ? "water" : "outer",
        );
      }
    }
  }
  if (!normal) return null;
  return {
    distance: best * o.size,
    surface,
    n: normal.clone().transformDirection(o.matrix),
    o,
  };
}
export const tableBounds = { xmin: -6.5, xmax: 6.6, zmin: -3.85, zmax: 4.14 };
function boundaries(p, d) {
  const h = [];
  function plane(ax, k, type, test = () => true) {
    const t = (k - p[ax]) / d[ax];
    if (t > eps && Number.isFinite(t) && test(p.clone().addScaledVector(d, t)))
      h.push({ distance: t, type });
  }
  const b = tableBounds;
  plane(
    "y",
    0.012,
    "oak",
    (v) => v.x > b.xmin && v.x < b.xmax && v.z > b.zmin && v.z < b.zmax,
  );
  plane(
    "z",
    screen.z,
    "screen",
    (v) =>
      Math.abs(v.x - screen.x) < screen.w / 2 &&
      Math.abs(v.y - screen.y) < screen.h / 2,
  );
  plane("z", -5.91, "wall");
  plane("x", 8.46, "right");
  plane("x", -8.18, "left");
  plane("z", 7, "end");
  plane("y", -2.3, "floor");
  plane("y", 6.9, "end");
  return (
    h.sort((a, b) => a.distance - b.distance)[0] || {
      distance: 22,
      type: "end",
    }
  );
}
// Each branch carries radiometric throughput. Show first- and second-order ghosts
// only while their energy is visible. TIR stays on the current path at full power.
export function trace(optics, origin, direction, nm, spread, ghosts = false) {
  const rays = [];
  function follow(p, d, medium, energy, order, depth, distance, route) {
    for (; depth < 24; depth++) {
      let hit = boundaries(p, d);
      for (const o of optics) {
        const candidate = hitOptic(o, p, d);
        if (candidate && candidate.distance < hit.distance) hit = candidate;
      }
      const b = p.clone().addScaledVector(d, hit.distance),
        o = hit.o;
      const at = o?.id || hit.type;
      route +=
        "/" +
        at +
        (hit.surface === "water" ? "~" : hit.surface === "metal" ? "*" : "");
      rays.push({
        a: p,
        b,
        at,
        inside: medium,
        energy,
        order,
        distance,
        route,
      });
      if (!o || hit.surface === "rim") return;
      distance += hit.distance;
      const n = hit.n,
        inward = d.dot(n) < 0;
      if (!inward) n.negate();
      const cos = Math.min(1, Math.max(0, -n.dot(d)));
      if (hit.surface === "metal") {
        // Polished brass absorbs more short-wave light. Grazing reflection approaches unity.
        const normalR = 0.71 + (0.17 * (nm - 410)) / 265;
        energy *= normalR + (1 - normalR) * (1 - cos) ** 5;
        d = d.clone().reflect(n);
      } else {
        const glass = at === "flint" ? "flint" : "crown";
        const next =
          hit.surface === "water"
            ? inward
              ? "water"
              : glass
            : inward
              ? glass
              : "air";
        const ni = indexOf(medium, nm, spread),
          nt = indexOf(next, nm, spread);
        const eta = ni / nt,
          k = 1 - eta * eta * (1 - cos * cos);
        if (k <= 0) {
          d = d.clone().reflect(n);
        } else {
          const ct = Math.sqrt(k);
          const rs = (ni * cos - nt * ct) / (ni * cos + nt * ct);
          const rp = (nt * cos - ni * ct) / (nt * cos + ni * ct);
          const R = 0.5 * (rs * rs + rp * rp);
          if (ghosts && order < 2 && energy * R > 0.012) {
            const reflected = d.clone().reflect(n);
            follow(
              b.clone().addScaledVector(reflected, 4 * eps),
              reflected,
              medium,
              energy * R,
              order + 1,
              depth + 1,
              distance,
              route + "'",
            );
          }
          energy *= 1 - R;
          if (energy < 0.004) return;
          d = d
            .clone()
            .multiplyScalar(eta)
            .addScaledVector(n, eta * cos - ct)
            .normalize();
          medium = next;
        }
      }
      p = b.clone().addScaledVector(d, 4 * eps);
    }
  }
  follow(origin, direction, "air", 1, 0, 0, 0, "");
  return rays;
}
