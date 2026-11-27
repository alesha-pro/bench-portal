import * as THREE from "three";
import { rng } from "./art.js";
import { ease, riderPoint, foldPoint } from "./routes.js";
import { facets } from "./river.js";
import { envelope } from "./objects.js";

function star(color) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4,
      r = i % 2 ? 0.2 : 1;
    const x = Math.cos(a) * r * 0.73,
      y = Math.sin(a) * r;
    if (i) shape.lineTo(x, y);
    else shape.moveTo(x, y);
  }
  shape.closePath();
  return new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }),
  );
}

export function compassNeedle() {
  const root = new THREE.Group();
  root.add(
    facets(
      [
        [0, 0.03, -0.39],
        [-0.066, 0.035, 0],
        [0, 0.065, 0],
        [0.066, 0.035, 0],
        [0, 0.032, 0.31],
      ],
      [
        [0, 1, 2, "#b24b3b"],
        [0, 2, 3, "#d57a54"],
        [4, 2, 1, "#657d77"],
        [4, 3, 2, "#93a19a"],
      ],
    ),
  );
  const pin = new THREE.Mesh(
    new THREE.SphereGeometry(0.047, 10, 6),
    new THREE.MeshStandardMaterial({ color: "#c69f54" }),
  );
  pin.position.y = 0.07;
  root.add(pin);
  return root;
}

export function postalEffects(scene) {
  const random = rng(2198);
  const original = envelope();
  const burst = new THREE.Group(),
    trail = new THREE.Group();
  scene.add(burst, trail);
  const scraps = ["#b94d40", "#e7bc65", "#528279", "#d88668", "#f5e4b3"].map(
    (color) =>
      new THREE.MeshStandardMaterial({
        color,
        side: THREE.DoubleSide,
        roughness: 1,
      }),
  );
  const particles = Array.from({ length: 36 }, (_, i) => {
    const mail = i < 8,
      twinkle = i >= 8 && i < 13;
    const obj = mail
      ? original.clone()
      : twinkle
        ? star("#d6a34e")
        : new THREE.Mesh(
            new THREE.PlaneGeometry(
              0.063 + random() * 0.044,
              0.12 + random() * 0.088,
              1,
              2,
            ),
            scraps[i % 5],
          );
    if (!mail && !twinkle) {
      const pos = obj.geometry.attributes.position;
      pos.setZ(2, 0.033);
      pos.setZ(3, 0.033);
      obj.geometry.computeVertexNormals();
    }
    burst.add(obj);
    const angle = i * 2.39996 + random() * 0.35;
    return {
      obj,
      mail,
      twinkle,
      angle,
      delay: random() * 0.17,
      speed: 0.66 + random() * 0.85,
      lift: 1.45 + random() * 1.65,
      phase: random() * 6,
    };
  });
  const sparks = Array.from({ length: 9 }, (_, i) => {
    const obj = star(i % 3 ? "#d7a246" : "#fff0bc");
    trail.add(obj);
    return obj;
  });
  return (state, r, postbox) => {
    const { ride, t, fold, deliveryAge } = state;
    const age = deliveryAge - 0.76;
    burst.visible = age > 0 && age < 2.45;
    if (burst.visible) {
      burst.position.set(postbox.x, postbox.y + 0.79, postbox.z + 0.11);
      for (const {
        obj,
        mail,
        twinkle,
        angle,
        delay,
        speed,
        lift,
        phase,
      } of particles) {
        const a = age - delay,
          u = Math.max(0, a);
        const fade = ease(u / 0.17) * (1 - ease((u - 1.17) / 1.02));
        obj.visible = fade > 0.001;
        const spread = Math.sin(Math.min(u, 1.85) * 0.85) * speed;
        obj.position.set(
          Math.cos(angle) * spread * 1.42 + 0.14 * u,
          lift * u - 0.98 * u * u + 0.11 * Math.sin(u * 5 + phase) * u,
          0.1 + Math.sin(angle) * spread * 0.69,
        );
        obj.rotation.set(
          0.2 * Math.sin(phase + u * 3) + (mail ? -0.12 : u * 4),
          mail ? 0.62 * Math.sin(phase + u * 3.7) : angle + u * 4,
          0.52 * Math.sin(angle + u * 3) + (mail ? 0 : u * 3),
        );
        obj.scale.setScalar(
          fade * (mail ? 0.34 + 0.11 * speed : twinkle ? 0.067 : 1),
        );
      }
    }
    trail.visible = ride > 0.001 && ride < 1;
    if (trail.visible)
      sparks.forEach((spark, i) => {
        const age = (t * 1.7 + i / 9) % 1;
        const [x, z] = riderPoint(Math.max(0, ride - 0.13 * age), r);
        const q = foldPoint(x, z, fold, r);
        spark.position.set(
          q.x - 0.26 - age * 0.14,
          q.y + 0.54 + 0.38 * age + 0.105 * Math.sin(i * 2.4),
          q.z + 0.16,
        );
        spark.rotation.z = 0.6 * Math.sin(i + t * 3);
        spark.scale.setScalar(
          0.071 *
            Math.sin(age * Math.PI) *
            ease(ride / 0.04) *
            (1 - ease((ride - 0.94) / 0.06)),
        );
      });
  };
}
