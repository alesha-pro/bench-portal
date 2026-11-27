import * as T from 'three';

import { directions } from './lattice.js';

const X = new T.Vector3(1, 0, 0),
  Y = new T.Vector3(0, 1, 0);
const noise = (i, s) => {
  const n = Math.sin(i * 35.43 + s * 71.15) * 43758.53;
  return n - Math.floor(n) - 0.5;
};
function tipOfFluid(tip, s) {
  let best = -Infinity,
    result;
  for (const n of directions) {
    // Invert the two local folding rotations used by the field function.
    const height =
      s.amp *
      (0.42 + 0.065 * n.y) *
      (1 + s.crown * (-0.78 + 1.52 * Math.exp(-Math.pow((n.y - 0.43) * 2.4, 2))));
    const swell =
      0.024 *
      s.mandala *
      s.amp *
      Math.sin(9 * n.y + s.t * 1.6) *
      Math.cos(6 * Math.atan2(n.z, n.x) + s.t * 0.3);
    const p = n
      .clone()
      .multiplyScalar(0.78 - s.shrink + height + swell)
      .applyAxisAngle(X, s.tilt)
      .applyAxisAngle(Y, -s.spin);
    p.y += s.y;
    const merit = -p.distanceToSquared(tip) + 0.48 * p.y;
    if (merit > best) {
      best = merit;
      result = p;
    }
  }
  return result;
}
export function makeArcs(scene, tips) {
  const group = new T.Group();
  scene.add(group);
  const paths = [];
  for (let n = 0; n < 3; n++) {
    const count = 29,
      pos = new Float32Array(count * 2 * 3),
      side = new Float32Array(count * 2),
      idx = [];
    for (let i = 0; i < count; i++) {
      side[i * 2] = -1;
      side[i * 2 + 1] = 1;
      if (i < count - 1) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.BufferAttribute(pos, 3));
    geo.setAttribute('edge', new T.BufferAttribute(side, 1));
    geo.setIndex(idx);
    const mat = new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      blending: T.AdditiveBlending,
      uniforms: { power: { value: 1 } },
      vertexShader:
        'attribute float edge; varying float vEdge; void main(){vEdge=edge;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}',
      fragmentShader: `varying float vEdge;uniform float power;void main(){float e=abs(vEdge);
      vec3 c=vec3(.82,.32,1.8)*exp(-e*3.7)+vec3(1.6,3.4,3.8)*exp(-e*17.);
      gl_FragColor=vec4(c,power*(1.-smoothstep(.3,1.,e)));
      #include <colorspace_fragment>
      }`,
    });
    const m = new T.Mesh(geo, mat);
    m.frustumCulled = false;
    m.renderOrder = 5;
    group.add(m);
    paths.push(m);
  }
  function update(s, camera) {
    group.visible = s.arc > 0.095;
    if (!group.visible) return;
    paths.forEach((m, j) => {
      m.visible = j < 2 || s.arc > 0.5;
      if (!m.visible) return;
      const seed = s.arcSeed * 5 + j,
        from = tips[(seed * 3 + 1) % 8],
        end = tipOfFluid(from, s);
      const dir = end.clone().sub(from),
        tangent = dir.clone().cross(camera.position.clone().sub(from)).normalize();
      const points = m.geometry.attributes.position,
        width = (j === 2 ? 0.017 : 0.029) * (0.7 + 0.3 * s.arc);
      for (let i = 0; i < 29; i++) {
        const t = i / 28,
          p = from.clone().addScaledVector(dir, t),
          env = Math.sin(Math.PI * t);
        const spark = seed + Math.floor(s.phase * 14) * 0.83;
        p.x += env * (noise(i, spark) * 0.085 + 0.028 * Math.sin(13 * t + seed));
        p.y += env * (0.083 + noise(i + 32, spark) * 0.09);
        p.z += env * noise(i + 64, spark) * 0.1;
        points.setXYZ(2 * i, p.x - tangent.x * width, p.y - tangent.y * width, p.z - tangent.z * width);
        points.setXYZ(
          2 * i + 1,
          p.x + tangent.x * width,
          p.y + tangent.y * width,
          p.z + tangent.z * width,
        );
      }
      points.needsUpdate = true;
      m.material.uniforms.power.value = s.arc * 0.96;
    });
  }
  return { group, update };
}
