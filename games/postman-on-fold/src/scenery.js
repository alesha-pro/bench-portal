import * as THREE from "three";
import { mergeGeometries } from "../vendor/three/examples/jsm/utils/BufferGeometryUtils.js";
import { mesh } from "./objects.js";
import { print, cutout } from "./print.js";
import { canvasTexture, rng } from "./art.js";

// Bake static pieces of each paper cutout together, retaining its hinge as
// the parent transform. This also batches the fine ink edges into one draw.
export function batch(group, preserve = []) {
  group.updateWorldMatrix(true, true);
  const inv = group.matrixWorld.clone().invert();
  const batches = new Map(),
    remove = [];
  group.traverse((obj) => {
    if (
      !(obj.isMesh || obj.isLineSegments) ||
      preserve.some((node) => {
        for (let p = obj; p; p = p.parent) if (p === node) return true;
        return false;
      })
    )
      return;
    if (Array.isArray(obj.material)) return;
    const material = obj.material;
    const key = obj.isLineSegments
      ? "line-" + material.color.getHex() + "-" + material.opacity
      : material.uuid;
    if (!batches.has(key))
      batches.set(key, { material, geoms: [], lines: obj.isLineSegments });
    let g = obj.geometry.index
      ? obj.geometry.toNonIndexed()
      : obj.geometry.clone();
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, obj.matrixWorld));
    batches.get(key).geoms.push(g);
    remove.push(obj);
  });
  // Edges can be children of a mesh that is itself being combined.
  remove.forEach((obj) => obj.removeFromParent());
  for (const { material, geoms, lines } of batches.values()) {
    const geometry = mergeGeometries(geoms);
    geoms.forEach((g) => g.dispose());
    const obj = lines
      ? new THREE.LineSegments(geometry, material)
      : new THREE.Mesh(geometry, material);
    obj.castShadow = !lines;
    obj.receiveShadow = !lines;
    group.add(obj);
  }
}
function card(points, color, group) {
  const shape = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? shape.lineTo(x, y) : shape.moveTo(x, y)));
  shape.closePath();
  return mesh(
    new THREE.ExtrudeGeometry(shape, { depth: 0.026, bevelEnabled: false }),
    color,
    group,
  );
}
export function mountain(w, h, seed) {
  const group = new THREE.Group(),
    rand = rng(seed);
  const silhouette = [
    [-w * 0.55, 0],
    [-w * 0.38, h * 0.31],
    [-w * 0.29, h * 0.36],
    [-w * 0.17, h * 0.63],
    [-w * 0.085, h * 0.67],
    [0, h],
    [w * 0.09, h * 0.86],
    [w * 0.13, h * 0.72],
    [w * 0.24, h * 0.56],
    [w * 0.3, h * 0.36],
    [w * 0.55, 0],
  ];
  card(silhouette, "#899b80", group);
  const shade = card(
    [
      [0, h],
      [-w * 0.05, h * 0.6],
      [w * 0.05, h * 0.42],
      [-w * 0.01, h * 0.23],
      [w * 0.16, 0.01],
      [w * 0.55, 0],
      ...silhouette.slice(6, 10).reverse(),
    ],
    "#657e70",
    group,
  );
  shade.position.z = 0.03;
  const snow = card(
    [
      [-w * 0.17, h * 0.63],
      [-w * 0.085, h * 0.67],
      [0, h],
      [w * 0.09, h * 0.86],
      [w * 0.13, h * 0.72],
      [w * 0.19, h * 0.63],
      [w * 0.07, h * 0.73],
      [w * 0.09, h * 0.61],
      [w * 0.02, h * 0.7],
      [-w * 0.025, h * 0.62],
      [-w * 0.018, h * 0.74],
      [-w * 0.11, h * 0.6],
      [-w * 0.09, h * 0.68],
    ],
    "#e9e4c8",
    group,
  );
  snow.position.z = 0.06;
  const relief = print(
    420,
    258,
    (ctx, ink) => {
      const xy = ([x, y]) => [210 + (x * 420) / (w * 1.1), 258 - (y * 258) / h];
      ctx.beginPath();
      silhouette.forEach((point, i) =>
        i ? ctx.lineTo(...xy(point)) : ctx.moveTo(...xy(point)),
      );
      ctx.clip();
      // Broken rock bands follow the two slopes; short gouges catch the sunlight.
      for (let i = 0; i < 130; i++) {
        const x = rand() * 420,
          y = rand() * 258,
          length = 4 + rand() * 29,
          side = x < 210 ? -1 : 1;
        ink(
          "M" +
            x +
            " " +
            y +
            "q" +
            side * length * 0.2 +
            " " +
            length * 0.55 +
            " " +
            side * length * 0.66 +
            " " +
            length,
          null,
          side < 0 ? "#c6c8a4" : "#83998c",
          1 + rand() * 2.1,
        );
      }
      ink(
        "M201 41l-11 36 -28 25 -13 27 -17 8 -12 28 -24 19",
        null,
        "#516f6c",
        2.7,
      );
      ink(
        "M204 56l-9 22 -12 7m-17 27 -12 10m100 -10 13 9 13 22 22 17",
        null,
        "#b6c0a6",
        2.3,
      );
    },
    seed,
  );
  const printLayer = cutout(relief, w * 1.1, h, 0, h * 0.5);
  printLayer.position.z = 0.083;
  group.add(printLayer);
  return group;
}
export function paperPine(size, seed) {
  const g = new THREE.Group(),
    rand = rng(seed);
  mesh(new THREE.BoxGeometry(0.085, 0.65, 0.05), "#947d58", g, 0, 0.325, 0);
  for (let side = 0; side < 2; side++) {
    const half = new THREE.Group();
    half.rotation.y = (side * Math.PI) / 2 + 0.13;
    g.add(half);
    const pts = [
      [-0.51, 0.35],
      [-0.3, 0.68],
      [-0.4, 0.65],
      [-0.18, 1.05],
      [-0.29, 1.02],
      [-0.05, 1.5],
      [0.01, 1.77],
      [0.13, 1.4],
      [0.27, 1.14],
      [0.16, 1.17],
      [0.41, 0.76],
      [0.26, 0.8],
      [0.53, 0.36],
    ];
    card(pts, side ? "#588372" : "#6d927a", half);
    const darker = card(
      [
        [0.01, 1.77],
        [0.13, 1.4],
        [0.27, 1.14],
        [0.16, 1.17],
        [0.41, 0.76],
        [0.26, 0.8],
        [0.53, 0.36],
        [0.02, 0.34],
      ],
      "#526f60",
      half,
    );
    darker.position.z = 0.028;
    const lines = [];
    for (let k = 0; k < 18; k++) {
      const y = 0.46 + rand() * 1.02,
        s = k % 2 ? 1 : -1;
      const x = s * rand() * 0.3 * (1.7 - y);
      lines.push(x, y, 0.057, x + s * 0.065, y - 0.072, 0.057);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(lines, 3));
    half.add(
      new THREE.LineSegments(
        geo,
        new THREE.LineBasicMaterial({
          color: "#d1ce97",
          transparent: true,
          opacity: 0.62,
        }),
      ),
    );
  }
  g.scale.setScalar(size);
  return g;
}
export function brushTree(size, seed, col) {
  const rand = rng(seed),
    g = new THREE.Group();
  const texture = (() => {
    const c = document.createElement("canvas");
    c.width = 220;
    c.height = 300;
    const p = c.getContext("2d");
    const path = new Path2D();
    path.moveTo(106, 267);
    path.bezierCurveTo(61, 267, 27, 228, 40, 208);
    path.bezierCurveTo(10, 195, 21, 149, 35, 135);
    path.bezierCurveTo(17, 108, 39, 67, 61, 62);
    path.bezierCurveTo(61, 16, 110, 10, 123, 25);
    path.bezierCurveTo(152, 8, 182, 39, 179, 69);
    path.bezierCurveTo(201, 77, 213, 116, 199, 140);
    path.bezierCurveTo(213, 166, 201, 202, 180, 214);
    path.bezierCurveTo(181, 244, 150, 263, 106, 267);
    p.fillStyle = col;
    p.fill(path);
    p.save();
    p.clip(path);
    for (let i = 0; i < 620; i++) {
      const x = rand() * 220,
        y = rand() * 270;
      p.fillStyle = ["#e3d17d32", "#e3dca433", "#4f70444a", "#78874b47"][i % 4];
      p.beginPath();
      p.ellipse(x, y, rand() * 14 + 1, rand() * 10 + 2, -0.4, 0, 7);
      p.fill();
    }
    for (let i = 0; i < 95; i++) {
      const x = rand() * 220,
        y = rand() * 270;
      p.strokeStyle = "#546c4977";
      p.lineWidth = 1.5;
      p.beginPath();
      p.moveTo(x - 3, y);
      p.quadraticCurveTo(x, y - 4, x + 3, y - 2);
      p.stroke();
    }
    const shade = p.createLinearGradient(25, 80, 190, 195);
    shade.addColorStop(0, "#f8d98838");
    shade.addColorStop(0.45, "#d5cc8a00");
    shade.addColorStop(1, "#31594e55");
    p.fillStyle = shade;
    p.fillRect(0, 0, 220, 275);
    for (let i = 0; i < 52; i++) {
      const x = 24 + rand() * 155,
        y = 26 + rand() * 215;
      p.save();
      p.translate(x, y);
      p.rotate((rand() - 0.5) * 1.2);
      p.strokeStyle = "#5a745c";
      p.lineWidth = 1.4;
      p.beginPath();
      p.moveTo(-5, 6);
      p.quadraticCurveTo(1, 1, 9, -6);
      p.stroke();
      for (let j = 0; j < 3; j++) {
        p.fillStyle = i % 3 ? "#b4ba7b" : "#d2bf78";
        p.beginPath();
        p.ellipse(j * 3 - 1, 2 - j * 2.6, 3.9, 1.8, j % 2 ? 0.5 : -1.15, 0, 7);
        p.fill();
      }
      p.restore();
    }
    p.restore();
    p.lineCap = "round";
    p.strokeStyle = "#746e4d";
    p.lineWidth = 7;
    p.beginPath();
    p.moveTo(112, 297);
    p.quadraticCurveTo(118, 209, 104, 128);
    p.stroke();
    for (let j = 0; j < 8; j++) {
      const y = 125 + j * 14,
        s = j % 2 ? 1 : -1;
      p.lineWidth = 2 + j * 0.3;
      p.beginPath();
      p.moveTo(111, y + 16);
      p.quadraticCurveTo(
        110 + s * 19,
        y + 1,
        107 + s * (22 + rand() * 22),
        y - 16,
      );
      p.stroke();
    }
    return canvasTexture(c);
  })();
  const m = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
    alphaTest: 0.5,
    roughness: 1,
  });
  mesh(new THREE.PlaneGeometry(0.99, 1.52), m, g, 0, 0.76, 0);
  g.scale.setScalar(size);
  return g;
}
