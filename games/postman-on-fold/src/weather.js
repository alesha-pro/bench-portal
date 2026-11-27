import * as THREE from "three";
import { print, cutout } from "./print.js";
import { facets } from "./river.js";
import { rng } from "./art.js";

const tau = Math.PI * 2;
let smokePrint;
export function chimneySmoke(house, seed) {
  smokePrint ??= print(128, 128, (ctx, ink) => {
    const shape =
      "M26 83Q6 67 25 54q-4 -19 17 -22 5 -21 29 -14 22 -5 26 18 25 7 15 30 11 22 -12 30 -9 14 -32 8 -14 8 -25 -3 -14 1 -17 -18z";
    ink(shape, "#cdc1acbc", "#ac9b8370", 2);
    ink(
      "M21 65q3 -13 16 -13 -2 -19 17 -20 15 -17 29 -4 17 0 18 17 -11 -9 -20 1 -12 -9 -23 -1 -19 -3 -22 13z",
      "#f6efdcaa",
    );
    ink(
      "M45 85q29 14 42 -3 7 -14 -5 -20 -14 -6 -18 4 -2 7 8 8",
      null,
      "#95877388",
      2.6,
    );
    ink("M29 68q-3 12 8 16m48 11 11 -6", null, "#f8efdc95", 3);
  });
  const sprites = [];
  for (let i = 0; i < 5; i++) {
    const m = new THREE.SpriteMaterial({
      map: smokePrint,
      transparent: true,
      depthWrite: false,
    });
    const puff = new THREE.Sprite(m);
    house.add(puff);
    sprites.push(puff);
  }
  return (t) =>
    sprites.forEach((puff, i) => {
      const a = (t * 0.26 + i / 5 + seed * 0.177) % 1;
      const curl = a * tau * 1.24 + seed + t * 0.45;
      puff.position.set(
        0.35 + a * 0.77 + 0.22 * Math.sin(curl) * a,
        2.0 + a * 1.43,
        -0.23 + a * 0.08 * Math.cos(curl),
      );
      puff.material.opacity = 0.61 * Math.sin(a * Math.PI) ** 0.68;
      puff.material.rotation = 0.28 * Math.sin(curl * 1.1) + a * 0.7;
      const diameter = (0.14 + 0.58 * a) * (1 + 0.08 * Math.sin(i * 2.4));
      puff.scale.set(diameter, diameter * 0.87, 1);
    });
}

function cloudPrint(seed) {
  return print(
    290,
    114,
    (ctx, ink) => {
      ctx.translate(0, seed % 2 ? 5 : 0);
      const d =
        "M5 83q3 -12 24 -14 6 -22 26 -18 6 -31 34 -23 17 -30 46 -15 20 4 23 25 19 -12 31 3 14 -11 26 7 22 -1 27 15 19 -2 22 8 17 0 22 9 -34 7 -73 4 -40 13 -79 3 -57 12 -91 -1z";
      ink(d, "#fbf0d9", "#9aab9c", 2.8);
      ink(
        "M10 82q46 -8 77 -4 42 3 70 -12 16 5 35 -5 -13 20 -38 22 -23 12 -50 5 -58 9 -94 -6z",
        "#ced6c7",
      );
      ink(
        "M84 29q13 -19 33 -16m43 31q13 -8 22 2m26 15q11 -6 18 2M46 61q3 -8 12 -9",
        null,
        "#c1c9b7",
        2.5,
      );
      for (let i = 0; i < 20; i++) {
        const x = 29 + i * 10;
        ink(
          "M" + x + " " + (80 + 3 * Math.sin(i * 0.6)) + "l8 -3",
          null,
          "#9daea03f",
          2,
        );
      }
    },
    seed,
  );
}
function swallow() {
  const root = new THREE.Group(),
    wings = [];
  root.add(
    facets(
      [
        [0, 0.035, 0.16],
        [0, 0, -0.16],
        [-0.068, 0.025, -0.24],
        [0.068, 0.025, -0.24],
        [-0.045, 0.025, 0],
        [0.045, 0.025, 0],
        [0, -0.04, 0.02],
      ],
      [
        [0, 4, 5, "#3b5760"],
        [4, 1, 5, "#35525b"],
        [4, 2, 1, "#425b61"],
        [5, 1, 3, "#425b61"],
        [0, 6, 4, "#b8946f"],
        [0, 5, 6, "#d8b384"],
      ],
    ),
  );
  for (const side of [-1, 1]) {
    const wing = facets(
      [
        [0, 0.02, 0.07],
        [side * 0.14, 0.065, 0.08],
        [side * 0.29, 0.11, -0.11],
        [side * 0.104, 0.025, -0.055],
        [0, 0.01, -0.084],
      ],
      [
        [0, 1, 3, "#506a73"],
        [1, 2, 3, "#38545e"],
        [0, 3, 4, "#dbceb0"],
      ],
    );
    root.add(wing);
    wings.push(wing);
  }
  return { root, wings };
}
export function mountainSky(scene) {
  const clouds = [
    [-5.72, 3.97, -4.1, 1.83],
    [-2.6, 3.55, -4.8, 1.12],
    [3.05, 3.83, -4.8, 1.62],
  ].map(([x, y, z, w], i) => {
    const card = cutout(cloudPrint(i * 17 + 2), w, w * 0.39);
    card.material = new THREE.MeshBasicMaterial({
      map: card.material.map,
      alphaTest: 0.36,
      side: THREE.DoubleSide,
    });
    card.castShadow = false;
    card.receiveShadow = false;
    scene.add(card);
    return { card, x, y, z };
  });
  const random = rng(579);
  const flock = Array.from({ length: 7 }, (_, i) => {
    const bird = swallow();
    const x = (i < 4 ? -3.9 : 3.5) + random() * 1.5,
      y = 3.5 + random() * 0.65,
      z = -4.2 + random() * 0.6;
    bird.root.scale.setScalar(0.62 + random() * 0.34);
    scene.add(bird.root);
    return { ...bird, x, y, z };
  });
  return (t) => {
    clouds.forEach(({ card, x, y, z }, i) => {
      card.position.set(
        x + 0.61 * Math.sin(t * 0.14 + i * 2),
        y + 0.07 * Math.sin(t * 0.27 + i),
        z,
      );
      card.rotation.z = 0.027 * Math.sin(t * 0.3 + i);
    });
    flock.forEach(({ root, wings, x, y, z }, i) => {
      const a = t * 0.43 + i * 0.39,
        dx = 1.12 * Math.cos(a),
        dz = -0.64 * Math.sin(a);
      root.position.set(
        x + 1.12 * Math.sin(a),
        y + 0.17 * Math.sin(a * 2.1) + 0.038 * Math.sin(t * 6.3 + i),
        z + 0.64 * Math.cos(a),
      );
      root.rotation.set(
        0.11 * Math.sin(a),
        Math.atan2(dx, dz),
        0.18 * Math.sin(a),
      );
      wings.forEach(
        (wing, k) =>
          (wing.rotation.z =
            (k ? 1 : -1) * (0.13 + 0.64 * Math.sin(t * 7.5 + i * 1.6))),
      );
    });
  };
}
