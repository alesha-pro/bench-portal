import * as T from "three";
import { speculum } from "./mirror.js";
import { crystalMaterial, registerGlass } from "./glass.js";
import {
  PI,
  TAU,
  group,
  mesh,
  box,
  cyl,
  rod,
  turn,
  ball,
  ring,
  flatRing,
  brass,
  gold,
  antique,
  iron,
  shade,
  batch,
} from "./craft.js";
import { triangle, halfHeight, lensDepth } from "./optics.js";
function prismGlass(p, o) {
  const shape = new T.Shape(triangle.map(([x, z]) => new T.Vector2(x, -z)));
  const geo = new T.ExtrudeGeometry(shape, {
    depth: 2 * halfHeight - 0.036,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.018,
    bevelThickness: 0.018,
    curveSegments: 1,
  });
  geo.translate(0, 0, -halfHeight + 0.018);
  geo.rotateX(-PI / 2);
  registerGlass(mesh(p, geo, crystalMaterial(o)));
  const edges = new T.LineSegments(
    new T.EdgesGeometry(geo, 22),
    new T.LineBasicMaterial({
      color: 0xadd9df,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    }),
  );
  edges.renderOrder = 4;
  p.add(edges);
}
function curvedGlass(p, o) {
  const profile = [];
  for (let i = 0; i <= 32; i++)
    profile.push(new T.Vector2(i / 32, -lensDepth(i / 32)));
  for (let i = 31; i >= 0; i--)
    profile.push(new T.Vector2(i / 32, lensDepth(i / 32)));
  const geo = new T.LatheGeometry(profile, 80);
  geo.rotateX(PI / 2);
  registerGlass(mesh(p, geo, crystalMaterial(o)));
}
function thumb(p, x, y, z, r, mat = brass) {
  cyl(p, x, y, z, r, r, 0.056, mat, 28);
  for (let i = 0; i < 18; i++) {
    let a = (i * TAU) / 18;
    cyl(
      p,
      x + r * Math.cos(a),
      y,
      z + r * Math.sin(a),
      0.004,
      0.004,
      0.048,
      gold,
      5,
    );
  }
  box(p, x, y + 0.03, z, r * 1.15, 0.004, 0.012, iron);
}
export function mount(scene, o, s) {
  const root = group(scene, o.p.x, 0, o.p.z);
  root.userData.optic = o;
  const base = group(root),
    head = group(root, 0, o.p.y, 0),
    body = group(head);
  body.scale.setScalar(o.size);
  head.rotation.order = "YXZ";
  const big = o.id === "prism",
    r = big ? 1.05 : o.kind === "prism" ? 0.63 : 0.48;
  shade(root, 0, 0, r * 3.5, r * 3.1, 0.62);
  for (let i = 0; i < 3; i++) {
    const a = (i * TAU) / 3 + 0.55,
      x = Math.sin(a) * r * 0.93,
      z = Math.cos(a) * r * 0.93;
    cyl(base, x, 0.064, z, r * 0.115, r * 0.085, 0.128, iron, 16);
  }
  turn(
    base,
    0,
    0,
    0,
    [
      [r * 0.85, 0.08],
      [r, 0.11],
      [r, 0.18],
      [r * 0.95, 0.205],
      [r * 0.94, 0.25],
      [r * 0.86, 0.28],
      [r * 0.83, 0.31],
    ],
    big ? antique : s.ebony,
    64,
  );
  flatRing(base, 0, 0.185, 0, r * 0.977, 0.016, brass);
  if (big || o.id === "flint") {
    const dial = mesh(
      base,
      new T.CircleGeometry(r * 0.895, 80),
      s.dial,
      0,
      0.314,
      0,
    );
    dial.rotation.x = -PI / 2;
    flatRing(base, 0, 0.315, 0, r * 0.907, 0.021, brass);
    for (let i = 0; i < 3; i++) {
      let a = (i * TAU) / 3 + 0.55;
      thumb(
        base,
        Math.sin(a) * r * 0.73,
        0.345,
        Math.cos(a) * r * 0.73,
        r * 0.054,
      );
    }
    const cap = o.p.y - o.size * 0.82;
    turn(
      base,
      0,
      0,
      0,
      [
        [r * 0.29, 0.32],
        [r * 0.34, 0.37],
        [r * 0.32, 0.42],
        [r * 0.18, 0.47],
        [r * 0.155, cap - 0.13],
        [r * 0.21, cap - 0.1],
        [r * 0.21, cap],
        [r * 0.34, cap + 0.04],
      ],
      brass,
    );
    const cradle = group(head);
    cradle.scale.setScalar(o.size);
    cyl(cradle, 0, -0.735, 0, 0.64, 0.66, 0.12, antique);
    for (let [x, z] of [
      [-0.78, 0.53],
      [0.78, 0.53],
      [0, -0.94],
    ]) {
      rod(cradle, [0, -0.77, 0], [x, -0.74, z], 0.054, brass);
      cyl(cradle, x, -0.697, z, 0.084, 0.078, 0.11, iron);
    }
    prismGlass(body, o);
  } else {
    const stemTop = o.kind === "sphere" ? o.p.y - 0.53 : o.p.y;
    turn(
      base,
      0,
      0,
      0,
      [
        [r * 0.4, 0.3],
        [r * 0.45, 0.34],
        [r * 0.3, 0.4],
        [r * 0.2, 0.44],
        [r * 0.18, Math.max(0.46, stemTop - 0.22)],
        [r * 0.25, stemTop - 0.16],
        [r * 0.25, stemTop - 0.08],
        [r * 0.12, stemTop],
      ],
      brass,
    );
    if (o.kind === "sphere") {
      turn(
        base,
        0,
        0,
        0,
        [
          [0.13, stemTop - 0.13],
          [0.22, stemTop - 0.05],
          [0.31, stemTop],
          [0.36, stemTop + 0.025],
        ],
        antique,
      );
      turn(
        body,
        0,
        0.967,
        0,
        [
          [0.18, 0],
          [0.127, 0.05],
          [0.117, 0.13],
          [0.14, 0.14],
          [0.14, 0.18],
          [0.1, 0.18],
        ],
        new T.MeshPhysicalMaterial({
          color: 0xa7cec5,
          metalness: 0.2,
          roughness: 0.16,
          transparent: true,
          opacity: 0.49,
        }),
      );
      cyl(body, 0, 1.166, 0, 0.1, 0.114, 0.083, antique);
      flatRing(body, 0, 1.143, 0, 0.122, 0.012, gold);
      const bubble = new T.MeshPhysicalMaterial({
        color: 0xb8d9d5,
        metalness: 0.55,
        roughness: 0.17,
        transparent: true,
        opacity: 0.43,
      });
      for (const [x, y, z, r] of [
        [0.11, 0.89, 0.18, 0.044],
        [-0.18, 0.85, -0.2, 0.031],
        [0.27, 0.76, 0.25, 0.018],
        [-0.4, 0.67, 0.46, 0.025],
      ]) {
        ball(body, x, y, z, r, bubble, 12);
      }
      registerGlass(ball(body, 0, 0, 0, 1, crystalMaterial(o), 64));
    } else {
      const holder = group(base);
      holder.rotation.y = o.yaw;
      for (let side of [-1, 1]) {
        rod(
          holder,
          [0, 0.37, -0.1],
          [side * o.size * 0.95, o.p.y - 0.26, -0.1],
          0.045,
          antique,
        );
        rod(
          holder,
          [side * o.size * 0.95, o.p.y - 0.26, -0.1],
          [side * o.size * 1.11, o.p.y, -0.1],
          0.048,
          brass,
        );
        ball(holder, side * o.size * 1.07, o.p.y, -0.085, 0.075, gold);
      }
      for (let z of [-0.065, 0.055]) ring(body, 0, 0, z, 1.014, 0.045, brass);
      ring(body, 0, 0, 0.09, 1.005, 0.014, gold);
      ring(body, 0, 0, 0, 1.048, 0.028, antique);
      for (let i = 0; i < 96; i++) {
        const a = (i * TAU) / 96,
          x = Math.sin(a) * 1.059,
          y = Math.cos(a) * 1.059;
        rod(body, [x, y, -0.049], [x, y, 0.05], 0.007, brass, 0.007, 5);
      }
      if (o.kind === "mirror") {
        speculum(body);
      } else curvedGlass(body, o);
    }
  }
  batch(base);
  // The planar reflector carries its own render callback and stays a separate mesh.
  batch(body);
  o.root = root;
  o.head = head;
  o.base = base;
  o.mountYaw = o.yaw;
  pose(o);
}
export function pose(o) {
  if (o.kind === "mirror" || o.kind === "lens")
    o.base.rotation.y = o.yaw - o.mountYaw;
  o.root.position.set(o.p.x, 0, o.p.z);
  o.head.rotation.set(o.tilt, o.yaw, 0, "YXZ");
}
