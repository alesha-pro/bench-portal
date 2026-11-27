import * as THREE from "three";
import { glassOptics } from "./refraction.js";
import { mesh } from "./materials.js";

export const WATER_LEVEL = 1.06;
export function motionAt(t, events) {
  let x = 0,
    z = 0,
    energy = 0;
  for (const event of events) {
    const dt = t - event.time;
    if (dt < 0 || dt > 14) continue;
    const envelope = Math.exp(-dt * 0.74) * event.force;
    x += Math.sin(dt * 7.7) * envelope * (event.dx ?? 1);
    z += Math.sin(dt * 6.2 + 0.32) * envelope * (event.dz ?? 0.68);
    energy += Math.abs(envelope);
  }
  return { x: Math.tanh(x), z: Math.tanh(z), energy: Math.min(energy, 1.9) };
}
export function waterHeight(x, z, t, m) {
  const r = Math.hypot(x, z);
  return (
    WATER_LEVEL +
    0.0024 * Math.sin(12 * x + 5 * z - 1.6 * t) +
    0.0017 * Math.sin(8 * z - 2.1 * t) +
    0.212 * (m.x * x + m.z * z) +
    0.014 * m.energy * Math.sin(18 * r - 7.5 * t) +
    0.013 * Math.pow(Math.min(1, r / 0.687), 12)
  );
}

export function createVase(scene, roomOptics) {
  const group = new THREE.Group();
  scene.add(group);
  const motion = { value: new THREE.Vector3() },
    time = { value: 0 },
    clarity = { value: 0.92 };
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.035,
    ior: 1.52,
    envMapIntensity: 0.95,
    depthWrite: false,
    transparent: true,
  });
  glassOptics(glassMat, {
    ...roomOptics,
    slosh: motion,
    seconds: time,
    purity: clarity,
  });
  const coords = [
    [0.012, 0.032],
    [0.37, 0.032],
    [0.45, 0.052],
    [0.47, 0.098],
    [0.49, 0.135],
    [0.58, 0.215],
    [0.68, 0.38],
    [0.735, 0.58],
    [0.747, 0.78],
    [0.718, 0.99],
    [0.65, 1.22],
    [0.541, 1.44],
    [0.488, 1.58],
    [0.491, 1.66],
    [0.503, 1.685],
    [0.497, 1.704],
    [0.477, 1.699],
    [0.469, 1.673],
    [0.467, 1.597],
    [0.49, 1.5],
  ];
  const curve = new THREE.SplineCurve(
    coords.map(([x, y]) => new THREE.Vector2(x, y)),
  );
  const shape = new THREE.LatheGeometry(curve.getPoints(104), 192);
  const a = shape.attributes.position;
  for (let i = 0; i < a.count; i++) {
    const x = a.getX(i),
      y = a.getY(i),
      z = a.getZ(i),
      phi = Math.atan2(z, x);
    const flute =
      Math.sin(phi * 16 + 0.43 * y) *
      0.017 *
      THREE.MathUtils.smoothstep(y, 0.08, 0.29) *
      (1 - THREE.MathUtils.smoothstep(y, 1.12, 1.62));
    a.setXYZ(i, x * (1 + flute), y, z * (1 + flute));
  }
  shape.computeVertexNormals();
  const glass = mesh(shape, glassMat, group);
  glass.renderOrder = 2;
  glass.castShadow = true;
  const shadowGlass = new THREE.MeshDepthMaterial({ side: THREE.DoubleSide });
  shadowGlass.onBeforeCompile = (shader) => {
    shader.vertexShader =
      "varying vec3 shellPoint;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nshellPoint=position;",
      );
    shader.fragmentShader =
      "varying vec3 shellPoint;\n" +
      shader.fragmentShader.replace(
        "#include <alphatest_fragment>",
        `
      float flute=.5+.5*cos(16.*atan(shellPoint.z,shellPoint.x)+.43*shellPoint.y);
      float density=.12+.23*pow(flute,3.)+.40*(1.-smoothstep(.07,.15,shellPoint.y));
      if(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))>density)discard;`,
      );
  };
  glass.customDepthMaterial = shadowGlass;
  const rimMat = new THREE.MeshPhysicalMaterial({
    color: 0xf6ffef,
    metalness: 0.86,
    transparent: true,
    opacity: 0.46,
    roughness: 0.065,
    envMapIntensity: 0.8,
    depthWrite: false,
  });
  for (const [y, r, thick] of [
    [1.694, 0.489, 0.011],
    [0.091, 0.462, 0.012],
    [0.057, 0.445, 0.013],
  ]) {
    const rim = mesh(
      new THREE.TorusGeometry(r, thick, 10, 128),
      rimMat,
      group,
      [0, y, 0],
    );
    rim.rotation.x = Math.PI / 2;
  }
  for (const [y, r] of [
    [1.447, 0.547],
    [1.525, 0.509],
  ]) {
    const section = [
      [r - 0.014, y - 0.04],
      [r + 0.048, y - 0.017],
      [r - 0.014, y + 0.04],
      [r - 0.014, y - 0.04],
    ];
    const collar = mesh(
      new THREE.LatheGeometry(
        section.map((p) => new THREE.Vector2(...p)),
        160,
      ),
      glassMat,
      group,
    );
    collar.renderOrder = 3;
  }
  const sole = mesh(
    new THREE.LatheGeometry(
      [
        [0.012, -0.008],
        [0.356, -0.008],
        [0.429, 0.018],
        [0.451, 0.06],
      ].map((p) => new THREE.Vector2(...p)),
      144,
    ),
    rimMat,
    group,
  );
  sole.renderOrder = 2;
  const N = 128,
    R = 15,
    pos = [],
    index = [];
  for (let j = 0; j <= R; j++)
    for (let i = 0; i <= N; i++) {
      const ang = (i / N) * Math.PI * 2,
        r = (j / R) * 0.685;
      pos.push(Math.cos(ang) * r, WATER_LEVEL, Math.sin(ang) * r);
    }
  for (let j = 0; j < R; j++)
    for (let i = 0; i < N; i++) {
      const k = j * (N + 1) + i;
      index.push(k, k + 1, k + N + 1, k + 1, k + N + 2, k + N + 1);
    }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geom.setIndex(index);
  geom.computeVertexNormals();
  const topMat = new THREE.MeshPhysicalMaterial({
    color: 0x609f99,
    metalness: 0.49,
    roughness: 0.058,
    opacity: 0.17,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const top = mesh(geom, topMat, group);
  top.renderOrder = 4;
  const lineGeom = new THREE.BufferGeometry().setFromPoints(
    Array.from({ length: N }, () => new THREE.Vector3()),
  );
  const line = new THREE.LineLoop(
    lineGeom,
    new THREE.LineBasicMaterial({
      color: 0xc6dace,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    }),
  );
  line.renderOrder = 5;
  group.add(line);
  return {
    glass,
    group,
    update(t, m, purity) {
      motion.value.set(m.x, m.z, m.energy);
      time.value = t;
      clarity.value = purity;
      const a = geom.attributes.position,
        edge = lineGeom.attributes.position;
      for (let j = 0; j <= R; j++)
        for (let i = 0; i <= N; i++) {
          const k = j * (N + 1) + i,
            phi = (2 * Math.PI * i) / N,
            c = Math.cos(phi),
            s = Math.sin(phi);
          // The contact line climbs the narrowing shoulder on the high side.
          const y = waterHeight((c * 0.685 * j) / R, (s * 0.685 * j) / R, t, m);
          const r =
            ((0.685 - (y - WATER_LEVEL) * 0.3) *
              (1 + 0.019 * Math.sin(phi * 16 + 0.43 * y)) *
              j) /
            R;
          a.setXYZ(k, c * r, y, s * r);
          if (j === R && i < N) edge.setXYZ(i, c * r, y, s * r);
        }
      a.needsUpdate = true;
      edge.needsUpdate = true;
      geom.computeVertexNormals();
      line.frustumCulled = false;
      topMat.opacity = 0.12 + (1 - purity) * 0.18;
    },
  };
}
