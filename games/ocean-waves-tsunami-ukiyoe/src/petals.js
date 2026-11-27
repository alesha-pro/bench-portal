import * as T from 'three';
import { random } from './engraving.js';
import { tide } from './ocean.js';

export function windfall(scene) {
  const r = random(299),
    seeds = [];
  const g = new T.BufferGeometry();
  // The cleft at the broad end and the central fold catch different inks.
  const p = [
    0, -1, 0, -0.54, -0.03, 0, 0, 0.38, 0.2, -0.54, -0.03, 0, -0.48, 0.56, 0.025, 0, 0.38, 0.2,
    -0.48, 0.56, 0.025, -0.23, 0.77, 0, 0, 0.38, 0.2, -0.23, 0.77, 0, 0, 0.54, 0, 0, 0.38, 0.2, 0,
    -1, 0, 0, 0.38, 0.2, 0.53, 0.04, 0, 0.53, 0.04, 0, 0, 0.38, 0.2, 0.44, 0.6, 0, 0.44, 0.6, 0, 0,
    0.38, 0.2, 0.17, 0.79, -0.02, 0.17, 0.79, -0.02, 0, 0.38, 0.2, 0, 0.54, 0
  ];
  g.setAttribute('position', new T.Float32BufferAttribute(p, 3));
  g.computeVertexNormals();
  const mat = new T.ShaderMaterial({
    uniforms: tide,
    side: T.DoubleSide,
    vertexShader: `varying float fold;void main(){fold=step(0.,normal.x);gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,
    fragmentShader: `varying float fold;uniform float night;void main(){vec3 c=mix(vec3(.83,.54,.46),vec3(1.,.79,.65),fold);gl_FragColor=vec4(c*mix(vec3(1.),vec3(.74,.73,.84),night),1.);}`
  });
  const mesh = new T.InstancedMesh(g, mat, 26);
  mesh.frustumCulled = false;
  scene.add(mesh);
  for (let i = 0; i < mesh.count; i++) seeds.push([r(), r(), r(), r(), r(), r()]);
  const obj = new T.Object3D();
  return (t) => {
    seeds.forEach(([u, v, w, h, a, b], i) => {
      const f = (u + t * (0.024 + 0.012 * b)) % 1,
        k = Math.sin(Math.PI * f);
      obj.position.set(
        -4.4 + 14.2 * f + Math.sin(v * 8 + t * 0.63) * 0.29,
        0.38 + h * 2.6 + k * (1.6 + 2.6 * a) + Math.sin(f * 8 + v * 13) * 0.34,
        -3.7 + w * 10.6 + Math.sin(f * 6 + v * 15) * 0.8
      );
      obj.rotation.set(v * 6 + t * 0.55, w * 6 + t * 0.76, a * 6 + t * 0.52);
      obj.scale.setScalar((0.038 + 0.064 * h) * Math.min(1, k * 12));
      obj.updateMatrix();
      mesh.setMatrixAt(i, obj.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  };
}
