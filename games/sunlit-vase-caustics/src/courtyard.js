import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { random } from "./materials.js";

// A branch just outside the open casement gives the courtyard a near plane
// and breaks the window light into small patches as the leaves move.
export function createOlive(parent) {
  const rng = random(527),
    branch = new THREE.Group(),
    branches = [],
    leaves = [];
  const blade = new THREE.Shape();
  blade.moveTo(0, 0);
  blade.quadraticCurveTo(-0.07, 0.12, 0, 0.31);
  blade.quadraticCurveTo(0.068, 0.13, 0, 0);
  const leaf = new THREE.ShapeGeometry(blade, 5);
  const pos = leaf.attributes.position;
  for (let i = 0; i < pos.count; i++)
    pos.setZ(i, 0.045 * Math.sin((Math.PI * pos.getY(i)) / 0.31));
  leaf.computeVertexNormals();
  function shoot(from, delta, level) {
    const tip = from.clone().add(delta),
      mid = from.clone().lerp(tip, 0.5);
    mid.z += 0.06;
    const curve = new THREE.CatmullRomCurve3([from, mid, tip]);
    branches.push(
      new THREE.TubeGeometry(curve, 8, 0.005 + 0.005 * level, 5, false),
    );
    for (let i = 1; i <= 7; i++) {
      const p = curve.getPoint(i / 8);
      for (const side of [-1, 1]) {
        const d = new THREE.Vector3(
          side * (0.6 + rng() * 0.5),
          0.15 + rng() * 0.5,
          rng() * 0.8 - 0.4,
        ).normalize();
        const q = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          d,
        );
        q.multiply(
          new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            rng() * 2.6,
          ),
        );
        const scale = 0.72 + rng() * 0.68;
        leaves.push({
          matrix: new THREE.Matrix4().compose(
            p,
            q,
            new THREE.Vector3(scale, scale, scale),
          ),
          color: new THREE.Color().setHSL(
            0.2 + rng() * 0.04,
            0.2 + rng() * 0.19,
            0.26 + rng() * 0.19,
            THREE.SRGBColorSpace,
          ),
        });
      }
      if (level > 0 && (i === 3 || i === 6)) {
        shoot(
          p,
          new THREE.Vector3(
            (i === 3 ? -0.56 : 0.61) + delta.x * 0.38,
            0.3 + rng() * 0.36,
            rng() * 0.36 - 0.18,
          ),
          level - 1,
        );
      }
    }
  }
  shoot(
    new THREE.Vector3(-0.5, -0.2, 0),
    new THREE.Vector3(0.84, 1.7, -0.11),
    2,
  );
  shoot(
    new THREE.Vector3(-1.32, 2.95, -0.55),
    new THREE.Vector3(1.36, -0.38, -0.22),
    2,
  );
  shoot(
    new THREE.Vector3(1.48, 3.45, -1.05),
    new THREE.Vector3(-1.06, -0.78, 0.24),
    2,
  );
  const twigs = new THREE.Mesh(
    mergeGeometries(branches),
    new THREE.MeshStandardMaterial({ color: 0x665942 }),
  );
  branch.add(twigs);
  const canopy = new THREE.InstancedMesh(
    leaf,
    new THREE.MeshStandardMaterial({ roughness: 0.8, side: THREE.DoubleSide }),
    leaves.length,
  );
  leaves.forEach(({ matrix, color }, i) => {
    canopy.setMatrixAt(i, matrix);
    canopy.setColorAt(i, color);
  });
  canopy.castShadow = true;
  branch.add(canopy);
  parent.add(branch);
  branch.position.set(-2.97, 0.97, -4.4);
  branch.rotation.z = 0.22;
  return (t, breeze) => {
    branch.rotation.z = 0.22 + 0.024 * breeze * Math.sin(t * 1.03);
    branch.rotation.x = 0.025 * breeze * Math.cos(t * 0.78);
  };
}
