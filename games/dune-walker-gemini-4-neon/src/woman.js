import * as THREE from 'three';
import { GLSL_ATMOSPHERE_CHUNK, patchCinematicMaterial, SHARED_UNIFORMS } from './atmosphere.js';
import {
  computeCapsuleSkinWeights,
  polygonizeSDF,
  sdCapsule,
  sdEllipsoid,
  sdTaperedCapsule,
  smin,
} from './sdfMesh.js';
import { getProceduralTextures } from './textures.js';
import { getDuneHeight, getDuneNormal, getRidgeCrestPos } from './terrain.js';

/**
 * THE WOMAN — High-Res Smooth Sculpted SDF Character + Layered Silky Desert Robes:
 * - High-res Marching-Cubes SDF continuous body ([48, 104, 34], 3 Taubin passes, exact ∇SDF normals)
 * - Smooth 32-segment curved draped sleeves (ZERO octagonal faceting!)
 * - Warm wrap-lit + subsurface-tinted skin (never grey/plastic!)
 * - ZERO dark polygon shards under the robe: smooth continuous dark inner slip + 48×64 outer Verlet robe
 *   with finely pleated folds & worn antique gold embroidered hem!
 * - Crisp thin golden rim catching the pointed desert cowl hood edge in Medium OTS & wide shots!
 * - Thinner, longer graphic 19cm × 7.2m (96-segment) Verlet ribbon scarf with lush silk S-waves
 * - Slow weighted steps strictly along the hero dune ridge crest!
 */

function bodySDF(x, y, z) {
  const ax = Math.abs(x);
  const cranium = sdEllipsoid(x, y, z, 0, 1.635, 0.008, 0.076, 0.102, 0.090);
  const jaw = sdEllipsoid(x, y, z, 0, 1.568, -0.022, 0.056, 0.068, 0.068);
  const chin = sdEllipsoid(x, y, z, 0, 1.525, -0.056, 0.026, 0.024, 0.032);
  const nose = sdCapsule(x, y, z, 0, 1.612, -0.078, 0, 1.578, -0.094, 0.011);
  let head = smin(smin(cranium, jaw, 0.038), chin, 0.024);
  head = smin(head, nose, 0.014);

  const neck = sdTaperedCapsule(x, y, z, 0, 1.545, 0.004, 0, 1.405, 0.010, 0.041, 0.047);
  const clav = sdCapsule(ax, y, z, 0.02, 1.405, -0.012, 0.158, 1.392, 0.008, 0.033);
  const chest = sdEllipsoid(x, y, z, 0, 1.295, 0.002, 0.128, 0.135, 0.088);
  const bust = sdEllipsoid(ax, y, z, 0.058, 1.265, -0.055, 0.054, 0.058, 0.052);
  const waist = sdEllipsoid(x, y, z, 0, 1.115, 0.006, 0.098, 0.115, 0.074);
  const pelvis = sdEllipsoid(x, y, z, 0, 0.945, 0.006, 0.142, 0.112, 0.095);

  let torso = smin(head, neck, 0.026);
  torso = smin(torso, clav, 0.036);
  torso = smin(torso, chest, 0.048);
  torso = smin(torso, bust, 0.032);
  torso = smin(torso, waist, 0.052);
  torso = smin(torso, pelvis, 0.055);

  const deltoid = sdEllipsoid(ax, y, z, 0.168, 1.375, 0.010, 0.042, 0.044, 0.042);
  const upperArm = sdTaperedCapsule(ax, y, z, 0.172, 1.368, 0.010, 0.228, 1.095, 0.022, 0.036, 0.028);
  const forearm = sdTaperedCapsule(ax, y, z, 0.228, 1.095, 0.022, 0.268, 0.855, -0.012, 0.028, 0.020);
  const arm = smin(smin(deltoid, upperArm, 0.025), forearm, 0.022);

  // Clean smooth pelvis inside tailored under-tunic (never pokes below hip trouser bridge!)
  const lowerPelvis = sdEllipsoid(x, y, z, 0, 0.94, 0.005, 0.122, 0.070, 0.078);
  return smin(smin(torso, arm, 0.034), lowerPelvis, 0.038);
}

/**
 * Slender sculpted hands with graceful knuckles & tapering fingertips (kept naturally small in frame!).
 */
function createHandGeometry(side) {
  const s = side;
  const handSDF = (x, y, z) => {
    const lx = x * s;
    const wrist = sdTaperedCapsule(lx, y, z, 0, 0.032, 0, 0, -0.018, 0, 0.019, 0.022);
    const palm = sdEllipsoid(lx, y, z, 0.002, -0.054, -0.004, 0.0125, 0.042, 0.031);
    const thumb1 = sdTaperedCapsule(lx, y, z, -0.005, -0.046, -0.025, -0.011, -0.080, -0.052, 0.0088, 0.0068);
    const thumb2 = sdTaperedCapsule(lx, y, z, -0.011, -0.080, -0.052, -0.013, -0.104, -0.066, 0.0068, 0.0046);

    const fingers = [
      { z0: -0.025, l1: 0.042, l2: 0.034, r0: 0.0068, r1: 0.0042, curl: -0.014 },
      { z0: -0.008, l1: 0.048, l2: 0.038, r0: 0.0070, r1: 0.0044, curl: -0.018 },
      { z0:  0.009, l1: 0.043, l2: 0.034, r0: 0.0065, r1: 0.0040, curl: -0.022 },
      { z0:  0.024, l1: 0.033, l2: 0.026, r0: 0.0058, r1: 0.0036, curl: -0.026 },
    ];

    let d = smin(wrist, palm, 0.016);
    d = smin(d, smin(thumb1, thumb2, 0.005), 0.008);
    for (const f of fingers) {
      const yK = -0.090, yM = yK - f.l1, yT = yM - f.l2;
      const knuck = sdEllipsoid(lx, y, z, 0.002, yK, f.z0, f.r0 * 1.15, f.r0 * 1.15, f.r0 * 1.15);
      const s1 = sdTaperedCapsule(lx, y, z, 0.002, yK, f.z0, f.curl * 0.45, yM, f.z0 * 1.05, f.r0, (f.r0 + f.r1) * 0.5);
      const s2 = sdTaperedCapsule(lx, y, z, f.curl * 0.45, yM, f.z0 * 1.05, f.curl, yT, f.z0 * 1.10, (f.r0 + f.r1) * 0.5, f.r1);
      d = smin(d, smin(knuck, smin(s1, s2, 0.004), 0.005), 0.007);
    }
    return d;
  };
  return polygonizeSDF(handSDF, { min: [-0.052, -0.198, -0.088], max: [0.052, 0.045, 0.054] }, [30, 44, 34], 2);
}

function createFootprintSystem() {
  const MAX_PRINTS = 60;
  const geo = new THREE.PlaneGeometry(0.24, 0.44, 1, 1);
  geo.rotateX(-Math.PI / 2);

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
    uniforms: {
      uTime: SHARED_UNIFORMS.uTime,
      uSunDir: SHARED_UNIFORMS.uSunDir,
      uSunColor: SHARED_UNIFORMS.uSunColor,
      uSkyZenith: SHARED_UNIFORMS.uSkyZenith,
      uSkyMid: SHARED_UNIFORMS.uSkyMid,
      uSkyHorizon: SHARED_UNIFORMS.uSkyHorizon,
      uHazeBase: SHARED_UNIFORMS.uHazeBase,
      uHazeSun: SHARED_UNIFORMS.uHazeSun,
      uHazeDensity: SHARED_UNIFORMS.uHazeDensity,
      uHeightFogColor: SHARED_UNIFORMS.uHeightFogColor,
      uHeightFogDensity: SHARED_UNIFORMS.uHeightFogDensity,
      uShadowCool: SHARED_UNIFORMS.uShadowCool,
    },
    vertexShader: /* glsl */ `
      attribute float aSide;
      varying vec2 vUv;
      varying float vSide;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vSide = aSide;
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      varying float vSide;
      varying vec3 vWorldPos;
      ${GLSL_ATMOSPHERE_CHUNK}
      void main() {
        vec2 p = (vUv - 0.5) * 2.0;
        p.x *= vSide;
        float fore = length((p - vec2(0.05, -0.28)) * vec2(1.55, 1.15));
        float heel = length((p - vec2(-0.04, 0.36)) * vec2(1.95, 1.35));
        float d = min(fore, heel);
        float pit = smoothstep(0.68, 0.22, d);
        float rim = smoothstep(0.92, 0.66, d) * smoothstep(0.45, 0.72, d);
        vec3 col = mix(mix(vec3(0.26, 0.17, 0.10), uShadowCool * 1.05, 0.52), uSunColor * 0.60, rim * 0.32);
        col = applyAtmosphere(col, vWorldPos, cameraPosition, 1.0);
        float distFade = 1.0 - smoothstep(28.0, 75.0, length(cameraPosition - vWorldPos));
        float alpha = (pit * 0.60 + rim * 0.16) * distFade;
        if (alpha < 0.01) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, MAX_PRINTS);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1;

  const sides = new Float32Array(MAX_PRINTS).fill(1);
  geo.setAttribute('aSide', new THREE.InstancedBufferAttribute(sides, 1));

  const dummy = new THREE.Object3D();
  const up = new THREE.Vector3(0, 1, 0);
  const qN = new THREE.Quaternion(), qY = new THREE.Quaternion(), norm = new THREE.Vector3();
  dummy.position.set(0, -9999, 0);
  dummy.updateMatrix();
  for (let i = 0; i < MAX_PRINTS; i++) mesh.setMatrixAt(i, dummy.matrix);
  mesh.instanceMatrix.needsUpdate = true;

  let idx = 0;
  function stamp(x, z, heading, side) {
    getDuneNormal(x, z, norm);
    qN.setFromUnitVectors(up, norm);
    qY.setFromAxisAngle(up, heading + (side > 0 ? -0.06 : 0.06));
    dummy.position.set(x, getDuneHeight(x, z) + 0.022, z);
    dummy.quaternion.copy(qN).multiply(qY);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(idx, dummy.matrix);
    sides[idx] = side;
    idx = (idx + 1) % MAX_PRINTS;
    mesh.instanceMatrix.needsUpdate = true;
    geo.attributes.aSide.needsUpdate = true;
  }

  return { mesh, stamp };
}

export function createWoman(particles, onStepAudio) {
  const root = new THREE.Group();
  const worldFXGroup = new THREE.Group();

  const { linenNormal } = getProceduralTextures();

  // --- Materials: Warm wrap-lit skin + MeshPhysicalMaterial cloth with sheen, IBL & crisp hood rim! ---
  const skinMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0xa87a58,
      roughness: 0.62,
      metalness: 0.0,
      envMapIntensity: 0.55,
    }),
    { rimStrength: 0.68, rimPower: 3.0, bounceStrength: 0.28, skinWrap: true }
  );

  const outerRobeMat = patchCinematicMaterial(
    new THREE.MeshPhysicalMaterial({
      color: 0x5c150e,
      normalMap: linenNormal,
      normalScale: new THREE.Vector2(0.42, 0.42),
      roughness: 0.88,
      metalness: 0.0,
      sheen: 0.92,
      sheenRoughness: 0.58,
      sheenColor: new THREE.Color(0xd25c34),
      envMapIntensity: 0.62,
      side: THREE.DoubleSide,
    }),
    {
      rimStrength: 0.92,
      rimPower: 2.9,
      bounceStrength: 0.30,
      subsurfaceStrength: 0.44,
      subsurfaceColor: new THREE.Color(0xc43812),
      wornGoldHem: true,
    }
  );

  const innerRobeMat = patchCinematicMaterial(
    new THREE.MeshPhysicalMaterial({
      color: 0x2c1610,
      normalMap: linenNormal,
      normalScale: new THREE.Vector2(0.38, 0.38),
      roughness: 0.90,
      metalness: 0.0,
      sheen: 0.55,
      sheenRoughness: 0.72,
      sheenColor: new THREE.Color(0x6e2a18),
      envMapIntensity: 0.48,
      side: THREE.DoubleSide,
    }),
    {
      rimStrength: 0.34,
      bounceStrength: 0.24,
      subsurfaceStrength: 0.06,
      subsurfaceColor: new THREE.Color(0x5e1808),
    }
  );

  const bootLeatherMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0x3b2214,
      roughness: 0.66,
      metalness: 0.06,
      envMapIntensity: 0.55,
    }),
    { rimStrength: 0.48, rimPower: 3.2, bounceStrength: 0.28 }
  );

  const hairMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0x160f0c,
      roughness: 0.72,
      metalness: 0.04,
      envMapIntensity: 0.45,
    }),
    { rimStrength: 0.52, rimPower: 3.4, bounceStrength: 0.16 }
  );

  // Hood catches a razor-crisp golden silhouette rim along its thin cowl edge!
  const hoodMat = patchCinematicMaterial(
    new THREE.MeshPhysicalMaterial({
      color: 0x56130d,
      normalMap: linenNormal,
      normalScale: new THREE.Vector2(0.44, 0.44),
      roughness: 0.86,
      sheen: 0.94,
      sheenRoughness: 0.56,
      sheenColor: new THREE.Color(0xd65e34),
      envMapIntensity: 0.64,
      side: THREE.DoubleSide,
    }),
    {
      rimStrength: 1.28,
      rimPower: 2.6,
      bounceStrength: 0.28,
      subsurfaceStrength: 0.40,
      subsurfaceColor: new THREE.Color(0xbe3410),
    }
  );

  const veilMat = patchCinematicMaterial(
    new THREE.MeshPhysicalMaterial({
      color: 0x360c08,
      normalMap: linenNormal,
      normalScale: new THREE.Vector2(0.36, 0.36),
      roughness: 0.90,
      sheen: 0.80,
      sheenRoughness: 0.64,
      sheenColor: new THREE.Color(0xac4426),
      envMapIntensity: 0.50,
      side: THREE.DoubleSide,
    }),
    {
      rimStrength: 0.68,
      rimPower: 3.0,
      bounceStrength: 0.22,
      subsurfaceStrength: 0.34,
      subsurfaceColor: new THREE.Color(0xac3112),
    }
  );

  const scarfMat = patchCinematicMaterial(
    new THREE.MeshPhysicalMaterial({
      color: 0x6f170f,
      normalMap: linenNormal,
      normalScale: new THREE.Vector2(0.34, 0.34),
      roughness: 0.80,
      metalness: 0.0,
      sheen: 0.95,
      sheenRoughness: 0.54,
      sheenColor: new THREE.Color(0xe66438),
      envMapIntensity: 0.68,
      side: THREE.DoubleSide,
    }),
    {
      rimStrength: 1.22,
      rimPower: 2.6,
      bounceStrength: 0.28,
      subsurfaceStrength: 0.92,
      subsurfaceColor: new THREE.Color(0xe84818),
    }
  );

  // ==================== 1. HIGH-RES CONTINUOUS SDF MARCHING-CUBES BODY + BONE RIG ====================
  const bodyGeo = polygonizeSDF(
    bodySDF,
    { min: [-0.34, 0.72, -0.20], max: [0.34, 1.78, 0.16] },
    [48, 84, 34],
    3
  );

  const bHips = new THREE.Bone(); bHips.position.set(0, 0.95, 0.005);
  const bSpine = new THREE.Bone(); bSpine.position.set(0, 0.18, 0); bHips.add(bSpine);
  const bChest = new THREE.Bone(); bChest.position.set(0, 0.22, 0); bSpine.add(bChest);
  const bNeck = new THREE.Bone(); bNeck.position.set(0, 0.12, 0); bChest.add(bNeck);
  const bHead = new THREE.Bone(); bHead.position.set(0, 0.11, 0); bNeck.add(bHead);

  const bLUpperArm = new THREE.Bone(); bLUpperArm.position.set(-0.172, 0.018, 0.005); bChest.add(bLUpperArm);
  const bLForearm = new THREE.Bone(); bLForearm.position.set(-0.056, -0.273, 0.012); bLUpperArm.add(bLForearm);
  const bLHand = new THREE.Bone(); bLHand.position.set(-0.040, -0.240, -0.034); bLForearm.add(bLHand);

  const bRUpperArm = new THREE.Bone(); bRUpperArm.position.set(0.172, 0.018, 0.005); bChest.add(bRUpperArm);
  const bRForearm = new THREE.Bone(); bRForearm.position.set(0.056, -0.273, 0.012); bRUpperArm.add(bRForearm);
  const bRHand = new THREE.Bone(); bRHand.position.set(0.040, -0.240, -0.034); bRForearm.add(bRHand);

  const bLThigh = new THREE.Bone(); bLThigh.position.set(-0.084, -0.045, 0); bHips.add(bLThigh);
  const bLShin = new THREE.Bone(); bLShin.position.set(0.008, -0.415, 0); bLThigh.add(bLShin);
  const bRThigh = new THREE.Bone(); bRThigh.position.set(0.084, -0.045, 0); bHips.add(bRThigh);
  const bRShin = new THREE.Bone(); bRShin.position.set(-0.008, -0.415, 0); bRThigh.add(bRShin);

  const bones = [
    bHips, bSpine, bChest, bNeck, bHead,
    bLUpperArm, bLForearm, bLHand,
    bRUpperArm, bRForearm, bRHand,
    bLThigh, bLShin, bRThigh, bRShin,
  ];

  const boneSegments = [
    { boneIndex: 0,  a: [0, 0.88, 0],         b: [0, 1.06, 0],         r: 0.12 },
    { boneIndex: 1,  a: [0, 1.06, 0],         b: [0, 1.24, 0],         r: 0.10 },
    { boneIndex: 2,  a: [0, 1.24, 0],         b: [0, 1.42, 0],         r: 0.12 },
    { boneIndex: 3,  a: [0, 1.42, 0],         b: [0, 1.54, 0],         r: 0.045 },
    { boneIndex: 4,  a: [0, 1.54, -0.01],     b: [0, 1.72, 0],         r: 0.085, bias: 1.4 },
    { boneIndex: 5,  a: [-0.172, 1.37, 0.01], b: [-0.228, 1.10, 0.02], r: 0.036 },
    { boneIndex: 6,  a: [-0.228, 1.10, 0.02], b: [-0.268, 0.85, -0.01], r: 0.028 },
    { boneIndex: 8,  a: [0.172, 1.37, 0.01],  b: [0.228, 1.10, 0.02],  r: 0.036 },
    { boneIndex: 9,  a: [0.228, 1.10, 0.02],  b: [0.268, 0.85, -0.01], r: 0.028 },
  ];
  computeCapsuleSkinWeights(bodyGeo, boneSegments, 24.0);

  const bodyMesh = new THREE.SkinnedMesh(bodyGeo, skinMat);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  bodyMesh.add(bHips);
  bodyMesh.bind(new THREE.Skeleton(bones));
  root.add(bodyMesh);

  // Sculpted slender hands with knuckles & tapered fingers
  const leftHandMesh = new THREE.Mesh(createHandGeometry(-1), skinMat);
  leftHandMesh.castShadow = true;
  bLHand.add(leftHandMesh);

  const rightHandMesh = new THREE.Mesh(createHandGeometry(1), skinMat);
  rightHandMesh.castShadow = true;
  bRHand.add(rightHandMesh);

  // Smooth 32-segment draped organic linen sleeves seamlessly blending into shoulder mantle!
  function makeDrapedSleeve(upperBone, lowerBone, side) {
    const upPts = [
      new THREE.Vector2(0.056, 0.05),
      new THREE.Vector2(0.054, -0.04),
      new THREE.Vector2(0.052, -0.14),
      new THREE.Vector2(0.054, -0.24),
      new THREE.Vector2(0.052, -0.29),
    ];
    const upMesh = new THREE.Mesh(new THREE.LatheGeometry(upPts, 32), outerRobeMat);
    upMesh.rotation.z = side * 0.18;
    upMesh.castShadow = true;
    upperBone.add(upMesh);

    const elbowDrape = new THREE.Mesh(new THREE.SphereGeometry(0.054, 24, 16), outerRobeMat);
    elbowDrape.scale.set(0.95, 1.10, 0.95);
    lowerBone.add(elbowDrape);

    const loPts = [
      new THREE.Vector2(0.054, 0.028),
      new THREE.Vector2(0.058, -0.07),
      new THREE.Vector2(0.060, -0.175),
      new THREE.Vector2(0.046, -0.225),
      new THREE.Vector2(0.035, -0.258),
    ];
    const loMesh = new THREE.Mesh(new THREE.LatheGeometry(loPts, 32), outerRobeMat);
    loMesh.rotation.z = side * 0.15;
    loMesh.rotation.x = 0.13;
    loMesh.castShadow = true;
    lowerBone.add(loMesh);
  }
  makeDrapedSleeve(bLUpperArm, bLForearm, -1);
  makeDrapedSleeve(bRUpperArm, bRForearm, 1);

  // ==================== 2. FULL SCULPTED LEGS, WRAPPED DESERT BOOTS, EYES & DARK HAIR BRAID ====================
  // Tailored dark desert tunic-trouser hip bridge (completely encloses pelvis -> zero skin gap from any angle!)
  const hipTrouserPts = [
    new THREE.Vector2(0.060, -0.15),
    new THREE.Vector2(0.136, -0.13),
    new THREE.Vector2(0.148, -0.02),
    new THREE.Vector2(0.130, 0.08),
    new THREE.Vector2(0.106, 0.16),
  ];
  const hipTrouserGeo = new THREE.LatheGeometry(hipTrouserPts, 32);
  hipTrouserGeo.scale(1.04, 1.0, 0.82);
  const hipTrouserMesh = new THREE.Mesh(hipTrouserGeo, innerRobeMat);
  hipTrouserMesh.castShadow = true;
  hipTrouserMesh.receiveShadow = true;
  bHips.add(hipTrouserMesh);

  // Subtle sculpted dark desert brows & shaded eyes tucked naturally above the lower-face veil!
  for (const sx of [-1, 1]) {
    const eyeSocket = new THREE.Mesh(new THREE.SphereGeometry(0.0115, 12, 10), hairMat);
    eyeSocket.scale.set(1.25, 0.62, 0.55);
    eyeSocket.position.set(sx * 0.028, 0.046, -0.080);
    bHead.add(eyeSocket);

    const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.0038, 0.020, 4, 8), hairMat);
    brow.rotation.z = Math.PI / 2 - sx * 0.12;
    brow.position.set(sx * 0.028, 0.062, -0.082);
    bHead.add(brow);
  }

  function buildSculptedLeg(thighBone, shinBone, side) {
    // Anatomical tapered thigh (hip y=+0.05 down to knee y=-0.425)
    const thighPts = [
      new THREE.Vector2(0.050, -0.435),
      new THREE.Vector2(0.054, -0.35),
      new THREE.Vector2(0.064, -0.22),
      new THREE.Vector2(0.074, -0.08),
      new THREE.Vector2(0.072, 0.04),
      new THREE.Vector2(0.032, 0.07),
    ];
    const thighGeo = new THREE.LatheGeometry(thighPts, 28);
    thighGeo.scale(0.95, 1.0, 1.06);
    const thighMesh = new THREE.Mesh(thighGeo, innerRobeMat);
    thighMesh.castShadow = true;
    thighMesh.receiveShadow = true;
    thighBone.add(thighMesh);

    // Smooth knee joint cap
    const kneeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.052, 20, 14), innerRobeMat);
    kneeMesh.scale.set(0.96, 1.05, 1.02);
    shinBone.add(kneeMesh);

    // Anatomical calf (knee y=0 down to mid-shin y=-0.26)
    const calfPts = [
      new THREE.Vector2(0.040, -0.27),
      new THREE.Vector2(0.050, -0.17),
      new THREE.Vector2(0.054, -0.11),
      new THREE.Vector2(0.049, -0.02),
      new THREE.Vector2(0.046, 0.02),
    ];
    const calfGeo = new THREE.LatheGeometry(calfPts, 28);
    calfGeo.scale(0.94, 1.0, 1.06);
    const calfMesh = new THREE.Mesh(calfGeo, innerRobeMat);
    calfMesh.castShadow = true;
    calfMesh.receiveShadow = true;
    shinBone.add(calfMesh);

    // Wrapped leather desert boot shaft (mid-shin y=-0.20 down to ankle y=-0.445)
    const bootShaftPts = [
      new THREE.Vector2(0.042, -0.455),
      new THREE.Vector2(0.039, -0.40),
      new THREE.Vector2(0.043, -0.33),
      new THREE.Vector2(0.049, -0.25),
      new THREE.Vector2(0.052, -0.205),
      new THREE.Vector2(0.044, -0.195),
    ];
    const bootShaftMesh = new THREE.Mesh(new THREE.LatheGeometry(bootShaftPts, 24), bootLeatherMat);
    bootShaftMesh.castShadow = true;
    bootShaftMesh.receiveShadow = true;
    shinBone.add(bootShaftMesh);

    // Subtle wrapped leather boot straps
    for (const sy of [-0.23, -0.31, -0.39]) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.044 + (sy + 0.39) * 0.04, 0.0045, 8, 20), bootLeatherMat);
      strap.rotation.x = Math.PI / 2 + 0.08 * side;
      strap.position.y = sy;
      shinBone.add(strap);
    }

    // Sculpted leather desert boot foot (resting solidly on sand y=-0.490, toe pointing forward along -Z!)
    const footProfile = new THREE.Shape();
    footProfile.moveTo(0.048, -0.490);   // heel bottom
    footProfile.lineTo(0.052, -0.442);   // heel back
    footProfile.quadraticCurveTo(0.015, -0.422, -0.035, -0.432); // instep
    footProfile.quadraticCurveTo(-0.115, -0.445, -0.168, -0.466); // toe top
    footProfile.quadraticCurveTo(-0.180, -0.482, -0.160, -0.490); // toe tip
    footProfile.lineTo(0.048, -0.490);   // sole

    const footExtrude = new THREE.ExtrudeGeometry(footProfile, {
      depth: 0.064,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.012,
      bevelThickness: 0.014,
    });
    footExtrude.translate(0, 0, -0.032);
    // Rotate so Shape +X maps to local +Z (heel=+0.05, toe=-0.17 along -Z!) and Extrude Z maps to width X
    footExtrude.rotateY(-Math.PI / 2);
    const bootFootMesh = new THREE.Mesh(footExtrude, bootLeatherMat);
    bootFootMesh.position.x = side * 0.005;
    bootFootMesh.castShadow = true;
    bootFootMesh.receiveShadow = true;
    shinBone.add(bootFootMesh);
  }
  buildSculptedLeg(bLThigh, bLShin, -1);
  buildSculptedLeg(bRThigh, bRShin, 1);

  // Dark hair cap hugging cranium cleanly inside hood + sculpted dark braid resting down back/shoulder
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.088, 24, 18), hairMat);
  hairCap.scale.set(0.95, 1.12, 1.04);
  hairCap.position.set(0, 0.052, 0.016);
  bHead.add(hairCap);

  const braidCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.0, -0.01, 0.085),
    new THREE.Vector3(-0.045, -0.12, 0.095),
    new THREE.Vector3(-0.075, -0.28, 0.078),
    new THREE.Vector3(-0.065, -0.46, 0.058),
    new THREE.Vector3(-0.045, -0.60, 0.045),
  ]);
  const braidMesh = new THREE.Mesh(new THREE.TubeGeometry(braidCurve, 22, 0.022, 10, false), hairMat);
  braidMesh.castShadow = true;
  bHead.add(braidMesh);

  // ==================== 2B. HIGH-RES SMOOTH POINTED DESERT COWL HOOD & ARCHED VEIL ====================
  const U_SEGS = 44, V_SEGS = 28;
  const hPos = [], hUv = [], hIdx = [];
  for (let iv = 0; iv <= V_SEGS; iv++) {
    const v = iv / V_SEGS;
    for (let iu = 0; iu <= U_SEGS; iu++) {
      const u = iu / U_SEGS;
      const phi = (u - 0.5) * Math.PI * 1.62;
      const absPhi = Math.abs(phi);
      const peakLift = Math.exp(-Math.pow(phi / 0.58, 2)) * 0.028;
      const rimX = Math.sin(phi) * (0.106 + 0.010 * Math.sin(v * Math.PI));
      const rimY = Math.cos(phi) * 0.126 + 0.058 + peakLift;
      const rimZ = -0.122 + 0.036 * (1.0 - Math.cos(phi));

      const tailX = Math.sin(phi) * (0.014 + Math.max(0, (absPhi - 1.1) * 0.09));
      const tailY = 0.050 - Math.max(0, absPhi - 0.8) * 0.115 + peakLift * 0.65;
      const tailZ = 0.172 + peakLift * 0.80;

      const s = v * v * (3 - 2 * v);
      const domeBulge = Math.sin(v * Math.PI) * 0.056;
      const foldWave = Math.sin(phi * 6.0 + v * 4.8) * 0.0046 * Math.sin(v * Math.PI);
      const lipTuck = Math.exp(-v * 14.0) * 0.009;
      hPos.push(
        THREE.MathUtils.lerp(rimX, tailX, s) + Math.sin(phi) * (domeBulge * 0.62 - lipTuck + foldWave),
        THREE.MathUtils.lerp(rimY, tailY, s) + Math.cos(phi) * (domeBulge * 0.50 - lipTuck) + Math.sin(v * Math.PI) * 0.018,
        THREE.MathUtils.lerp(rimZ, tailZ, v) - lipTuck * 0.4
      );
      hUv.push(u, v);
    }
  }
  for (let iv = 0; iv < V_SEGS; iv++) {
    for (let iu = 0; iu < U_SEGS; iu++) {
      const a = iv * (U_SEGS + 1) + iu, b = a + 1, c = a + U_SEGS + 1, d = c + 1;
      hIdx.push(a, c, b, b, c, d);
    }
  }
  const hoodGeo = new THREE.BufferGeometry();
  hoodGeo.setAttribute('position', new THREE.Float32BufferAttribute(hPos, 3));
  hoodGeo.setAttribute('uv', new THREE.Float32BufferAttribute(hUv, 2));
  hoodGeo.setIndex(hIdx);
  hoodGeo.computeVertexNormals();

  const hoodMesh = new THREE.Mesh(hoodGeo, hoodMat);
  hoodMesh.position.set(0, 0.006, 0.004);
  hoodMesh.castShadow = true;
  hoodMesh.receiveShadow = true;
  bHead.add(hoodMesh);

  // Smooth arched organic lower-face desert veil
  const veilGeo = new THREE.CylinderGeometry(0.088, 0.106, 0.105, 32, 10, true, Math.PI * 0.64, Math.PI * 0.72);
  const vp = veilGeo.attributes.position;
  for (let i = 0; i < vp.count; i++) {
    let x = vp.getX(i), y = vp.getY(i), z = vp.getZ(i);
    const center = Math.exp(-Math.pow(x / 0.042, 2));
    const topMask = THREE.MathUtils.clamp((y + 0.052) / 0.105, 0, 1);
    y += center * 0.022 * topMask;
    z -= center * 0.014 * topMask - Math.sin(x * 48.0 + y * 24.0) * 0.0022;
    vp.setXYZ(i, x, y, z);
  }
  veilGeo.computeVertexNormals();
  const veilMesh = new THREE.Mesh(veilGeo, veilMat);
  veilMesh.position.set(0, -0.016, -0.016);
  veilMesh.castShadow = true;
  bHead.add(veilMesh);

  // Tailored draped desert shoulder shawl (tapers gracefully from shoulders into waist — zero bell dome!)
  const mantlePts = [
    new THREE.Vector2(0.068, 0.145),
    new THREE.Vector2(0.116, 0.090),
    new THREE.Vector2(0.194, 0.015),
    new THREE.Vector2(0.202, -0.08),
    new THREE.Vector2(0.184, -0.20),
    new THREE.Vector2(0.162, -0.31),
  ];
  const mantleGeo = new THREE.LatheGeometry(mantlePts, 40);
  mantleGeo.scale(1.04, 1.0, 0.78);
  const mantleMesh = new THREE.Mesh(mantleGeo, hoodMat);
  mantleMesh.position.set(0, 0.04, 0.008);
  mantleMesh.castShadow = true;
  mantleMesh.receiveShadow = true;
  bChest.add(mantleMesh);

  // Soft upper bodice under-tunic (stops at mid-hips; lower skirt is 100% live Verlet cloth — ZERO rigid cone!)
  const bodicePts = [
    new THREE.Vector2(0.142, -0.06),
    new THREE.Vector2(0.112, 0.14),
    new THREE.Vector2(0.136, 0.34),
    new THREE.Vector2(0.132, 0.44),
  ];
  const bodiceGeo = new THREE.LatheGeometry(bodicePts, 32);
  bodiceGeo.scale(1.02, 1.0, 0.84);
  const bodiceMesh = new THREE.Mesh(bodiceGeo, innerRobeMat);
  bodiceMesh.position.set(0, -0.02, 0.004);
  bodiceMesh.castShadow = true;
  bHips.add(bodiceMesh);

  // Folded neck scarf collar loop (tucked cleanly inside hood mantle)
  const collarCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-0.082, 0.044, -0.032),
      new THREE.Vector3(0.0, 0.024, -0.092),
      new THREE.Vector3(0.084, 0.046, -0.028),
      new THREE.Vector3(0.076, 0.064, 0.068),
      new THREE.Vector3(0.0, 0.052, 0.092),
      new THREE.Vector3(-0.082, 0.058, 0.062),
    ],
    true
  );
  const scarfWrapMesh = new THREE.Mesh(new THREE.TubeGeometry(collarCurve, 36, 0.022, 12, true), scarfMat);
  scarfWrapMesh.castShadow = true;
  bNeck.add(scarfWrapMesh);

  // Tucked seamlessly inside collar fold so no exposed knot shows in Medium OTS!
  const scarfAnchor = new THREE.Object3D();
  scarfAnchor.position.set(-0.022, 0.042, 0.072);
  bNeck.add(scarfAnchor);

  // ==================== 3. HIGH-RES FLOOR-SWEEPING OUTER VERLET ROBE (48×64 = 3,072 PARTICLES!) ====================
  // Glides cleanly outside the smooth dark inner slip with fine organic pleats and ZERO clipping shards!
  function createRobeClothLayer(cols, rows, lenFront, lenBack, radTop, radBot, yTopOffset, mat) {
    const count = cols * rows;
    const pos = new Float32Array(count * 3);
    const prev = new Float32Array(count * 3);
    const uvs = new Float32Array(count * 2);
    const restLocal = new Float32Array(count * 3);
    const indices = [];

    for (let r = 0; r < rows; r++) {
      const v = r / (rows - 1);
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const ang = (c / cols) * Math.PI * 2;
        uvs[idx * 2 + 0] = c / cols;
        uvs[idx * 2 + 1] = v;

        const backBias = 0.5 + 0.5 * Math.cos(ang);
        const len = lenFront + (lenBack - lenFront) * backBias;
        const flare = Math.pow(v, 1.12);
        // Subtle natural vertical fabric pleat waves built into rest silhouette
        const pleat = Math.sin(ang * 9.0) * 0.014 * flare;
        const rad = radTop + (radBot - radTop) * flare + backBias * 0.16 * flare + pleat;
        restLocal[idx * 3 + 0] = Math.sin(ang) * rad * 1.08;
        restLocal[idx * 3 + 1] = yTopOffset - v * len;
        restLocal[idx * 3 + 2] = Math.cos(ang) * rad * 0.98 + backBias * 0.24 * flare;
      }
    }

    for (let r = 0; r < rows - 1; r++) {
      for (let c = 0; c < cols; c++) {
        const cn = (c + 1) % cols;
        const a = r * cols + c, b = r * cols + cn, d = (r + 1) * cols + c, e = (r + 1) * cols + cn;
        indices.push(a, d, b, b, d, e);
      }
    }

    const cA = [], cB = [], cRest = [], cStiff = [];
    const addC = (ia, ib, stiff) => {
      cA.push(ia); cB.push(ib);
      cRest.push(Math.hypot(
        restLocal[ib * 3] - restLocal[ia * 3],
        restLocal[ib * 3 + 1] - restLocal[ia * 3 + 1],
        restLocal[ib * 3 + 2] - restLocal[ia * 3 + 2]
      ));
      cStiff.push(stiff);
    };
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c, cn = (c + 1) % cols;
        if (r < rows - 1) {
          addC(idx, (r + 1) * cols + c, 0.96);
          addC(idx, (r + 1) * cols + cn, 0.48);
        }
        addC(idx, r * cols + cn, 0.76);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.setIndex(indices);

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    worldFXGroup.add(mesh);

    return {
      cols, rows, count,
      pos, prev, restLocal,
      cA: new Uint16Array(cA),
      cB: new Uint16Array(cB),
      cRest: new Float32Array(cRest),
      cStiff: new Float32Array(cStiff),
      geo, mesh,
    };
  }

  // Single high-res outer Verlet silk-linen robe pinned cleanly at waist/under-mantle (yTopOffset=0.22)
  // so it flows seamlessly out from beneath the shoulder mantle with zero chest crease!
  const outerRobe = createRobeClothLayer(48, 64, 1.24, 1.76, 0.152, 0.60, 0.22, outerRobeMat);

  // ==================== 4. GRAPHIC 19cm × 7.2m VERLET RIBBON SCARF (96 SEGMENTS!) ====================
  const SCARF_SEGS = 96;
  const SCARF_COLS = 3;
  const SCARF_SEG_LEN = 0.076;
  const SCARF_HALF_W = 0.095;
  const scarfCount = SCARF_SEGS * SCARF_COLS;

  const scarfPos = new Float32Array(scarfCount * 3);
  const scarfPrev = new Float32Array(scarfCount * 3);
  const scarfUvs = new Float32Array(scarfCount * 2);
  const scarfIndices = [];
  const scA = [], scB = [], scRest = [], scStiff = [];

  for (let r = 0; r < SCARF_SEGS; r++) {
    const v = r / (SCARF_SEGS - 1);
    for (let c = 0; c < SCARF_COLS; c++) {
      const idx = r * SCARF_COLS + c;
      scarfUvs[idx * 2 + 0] = c / (SCARF_COLS - 1);
      scarfUvs[idx * 2 + 1] = v;
    }
  }
  for (let r = 0; r < SCARF_SEGS - 1; r++) {
    for (let c = 0; c < SCARF_COLS - 1; c++) {
      const a = r * SCARF_COLS + c, b = a + 1, d = a + SCARF_COLS, e = d + 1;
      scarfIndices.push(a, d, b, b, d, e);
    }
  }
  const addSC = (a, b, rest, stiff) => { scA.push(a); scB.push(b); scRest.push(rest); scStiff.push(stiff); };
  for (let r = 0; r < SCARF_SEGS; r++) {
    const t = r / (SCARF_SEGS - 1);
    const hw = SCARF_HALF_W * (0.85 + Math.sin(t * Math.PI) * 0.18);
    addSC(r * 3 + 0, r * 3 + 1, hw, 0.96);
    addSC(r * 3 + 1, r * 3 + 2, hw, 0.96);
    addSC(r * 3 + 0, r * 3 + 2, hw * 2.0, 0.88);
    if (r < SCARF_SEGS - 1) {
      const diag = Math.hypot(SCARF_SEG_LEN, hw);
      for (let c = 0; c < 3; c++) addSC(r * 3 + c, (r + 1) * 3 + c, SCARF_SEG_LEN, 1.0);
      addSC(r * 3 + 0, (r + 1) * 3 + 1, diag, 0.62);
      addSC(r * 3 + 1, (r + 1) * 3 + 0, diag, 0.62);
      addSC(r * 3 + 1, (r + 1) * 3 + 2, diag, 0.62);
      addSC(r * 3 + 2, (r + 1) * 3 + 1, diag, 0.62);
    }
    if (r < SCARF_SEGS - 2) addSC(r * 3 + 1, (r + 2) * 3 + 1, SCARF_SEG_LEN * 2.0, 0.10);
  }
  const scarfCA = new Uint16Array(scA);
  const scarfCB = new Uint16Array(scB);
  const scarfCRest = new Float32Array(scRest);
  const scarfCStiff = new Float32Array(scStiff);

  const scarfGeo = new THREE.BufferGeometry();
  scarfGeo.setAttribute('position', new THREE.BufferAttribute(scarfPos, 3));
  scarfGeo.setAttribute('uv', new THREE.BufferAttribute(scarfUvs, 2));
  scarfGeo.setIndex(scarfIndices);

  const scarfMesh = new THREE.Mesh(scarfGeo, scarfMat);
  scarfMesh.castShadow = true;
  scarfMesh.receiveShadow = true;
  scarfMesh.frustumCulled = false;
  worldFXGroup.add(scarfMesh);

  const footprints = createFootprintSystem();
  worldFXGroup.add(footprints.mesh);

  // ==================== 5. RIDGE-CREST WEIGHTED CHOREOGRAPHY ====================
  const worldPos = getRidgeCrestPos(0, new THREE.Vector3());
  let simTime = 0;
  let clothQuality = 'high';
  let lastFootstepIdx = -1;

  const _v0 = new THREE.Vector3();
  const _hipsW = new THREE.Vector3();
  const _hipsQ = new THREE.Quaternion();
  const _chestW = new THREE.Vector3();
  const _headW = new THREE.Vector3();
  const _lKneeW = new THREE.Vector3();
  const _rKneeW = new THREE.Vector3();
  const _lThighW = new THREE.Vector3();
  const _rThighW = new THREE.Vector3();
  const _lCalfW = new THREE.Vector3();
  const _rCalfW = new THREE.Vector3();
  const _lAnkleW = new THREE.Vector3();
  const _rAnkleW = new THREE.Vector3();
  const _scarfRoot = new THREE.Vector3();
  const _scarfRight = new THREE.Vector3();

  function smoothstep(a, b, x) {
    const u = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
    return u * u * (3 - 2 * u);
  }

  function applyWeightedPose(storyTime, tod) {
    const stepWalkFrac = smoothstep(46.0, 56.5, storyTime);
    const ridgeX = -2.4 * stepWalkFrac;
    getRidgeCrestPos(ridgeX, worldPos);
    root.position.copy(worldPos);
    root.rotation.y = 0.14 * stepWalkFrac + 0.04 * Math.sin(storyTime * 0.12);

    const breath = Math.sin(simTime * 1.45);
    const weightShift = Math.sin(simTime * 0.38) * 0.018 * (1.0 - tod.touchBlend);

    const stepSpeed = (storyTime > 46.0 && storyTime < 56.5) ? 1.0 : 0.0;
    const stepPhase = stepWalkFrac * Math.PI * 3.0;
    const stepS = Math.sin(stepPhase) * stepSpeed;
    const stepC = Math.cos(stepPhase) * stepSpeed;

    if (stepSpeed > 0.5) {
      const stepIdx = Math.floor(stepWalkFrac * 3.0);
      if (stepIdx !== lastFootstepIdx) {
        lastFootstepIdx = stepIdx;
        const side = stepIdx % 2 === 0 ? -1 : 1;
        footprints.stamp(worldPos.x, worldPos.z + side * 0.14, root.rotation.y + Math.PI * 0.5, side);
        if (particles) {
          particles.emitWomanFootPuff(
            new THREE.Vector3(worldPos.x, worldPos.y, worldPos.z),
            new THREE.Vector3(-1, 0, 0)
          );
        }
        if (onStepAudio) onStepAudio();
      }
    } else if (storyTime < 45.0) {
      lastFootstepIdx = -1;
    }

    const brace = tod.tremor * 0.06;
    bHips.position.set(weightShift, 0.95 - brace * 0.32 + Math.abs(stepS) * 0.02, 0.005);
    bHips.rotation.set(brace * 0.5, stepS * 0.07, -weightShift * 0.7);
    bSpine.rotation.set(0.03 + breath * 0.015 + brace * 0.4, -stepS * 0.05, weightShift * 0.5);
    bChest.rotation.set(0.02 + breath * 0.02, -tod.touchBlend * 0.14, 0);

    // Shot 2 Medium OTS: slow, contemplative hooded profile head turn looking toward distant megastructures!
    const shot2Turn = smoothstep(14.0, 22.8, storyTime);
    const inShot2 = (1.0 - smoothstep(23.5, 25.0, storyTime)) * smoothstep(12.2, 13.4, storyTime);
    const headYawShot2 = THREE.MathUtils.lerp(0.54, 0.12, shot2Turn);
    const headPitchLookUp =
      smoothstep(44.5, 48.0, storyTime) * (1.0 - smoothstep(57.5, 62.0, storyTime)) * 0.28
      + smoothstep(73.0, 82.0, storyTime) * 0.20;
    const headPitchTouch = tod.touchBlend * 0.10;

    bNeck.rotation.set(headPitchLookUp * 0.4 + headPitchTouch * 0.4, inShot2 ? headYawShot2 * 0.35 : 0, 0);
    bHead.rotation.set(
      -0.05 + headPitchLookUp * 0.6 + headPitchTouch * 0.6 + breath * 0.012,
      inShot2 ? headYawShot2 * 0.65 : Math.sin(simTime * 0.22) * 0.04,
      inShot2 ? -0.03 : 0
    );

    bLThigh.rotation.set(stepS * 0.20 + 0.02, 0, 0.02);
    bLShin.rotation.set(-Math.max(0, stepC) * 0.24 - 0.03, 0, 0);
    bRThigh.rotation.set(-stepS * 0.20 - 0.02, 0, -0.02);
    bRShin.rotation.set(-Math.max(0, -stepC) * 0.24 - 0.03, 0, 0);

    bLUpperArm.rotation.set(-0.08 - stepS * 0.12, 0.06, -0.06);
    bLForearm.rotation.set(0.22 + breath * 0.02, 0.08, 0.04);
    bLHand.rotation.set(0.05, 0.10, 0.04);

    // Hands stay understated & graceful in Shot 2 OTS; raised slowly in Shot 6 to touch the walker's medallion!
    const touch = tod.touchBlend;
    bRUpperArm.rotation.set(-0.06 + stepS * 0.12 + touch * 1.48, -touch * 0.12, 0.06 - touch * 0.18);
    bRForearm.rotation.set(0.22 + touch * 0.22, -0.10, -0.04);
    bRHand.rotation.set(-touch * 0.45, -0.18, -0.12);

    root.updateMatrixWorld(true);
  }

  function resetRobeLayer(layer, anchorBone) {
    anchorBone.getWorldPosition(_hipsW);
    anchorBone.getWorldQuaternion(_hipsQ);
    for (let i = 0; i < layer.count; i++) {
      const i3 = i * 3;
      _v0.set(layer.restLocal[i3], layer.restLocal[i3 + 1], layer.restLocal[i3 + 2])
        .applyQuaternion(_hipsQ)
        .add(_hipsW);
      layer.pos[i3] = layer.prev[i3] = _v0.x;
      layer.pos[i3 + 1] = layer.prev[i3 + 1] = _v0.y;
      layer.pos[i3 + 2] = layer.prev[i3 + 2] = _v0.z;
    }
  }

  function initCloth() {
    root.updateMatrixWorld(true);
    resetRobeLayer(outerRobe, bHips);

    scarfAnchor.getWorldPosition(_scarfRoot);
    for (let r = 0; r < SCARF_SEGS; r++) {
      const t = r / (SCARF_SEGS - 1);
      const hw = SCARF_HALF_W * (0.85 + Math.sin(t * Math.PI) * 0.18);
      const cx = _scarfRoot.x + r * SCARF_SEG_LEN * 0.84;
      const cy = _scarfRoot.y + Math.sin(t * 9.5) * 0.42 * t - t * 0.22;
      const cz = _scarfRoot.z + r * SCARF_SEG_LEN * 0.48 + Math.cos(t * 7.5) * 0.34 * t;
      const twist = t * 4.6;
      for (let c = 0; c < SCARF_COLS; c++) {
        const idx = r * SCARF_COLS + c;
        const wOff = (c - 1) * hw;
        scarfPos[idx * 3 + 0] = scarfPrev[idx * 3 + 0] = cx + Math.sin(twist) * wOff * 0.35;
        scarfPos[idx * 3 + 1] = scarfPrev[idx * 3 + 1] = cy + Math.cos(twist) * wOff;
        scarfPos[idx * 3 + 2] = scarfPrev[idx * 3 + 2] = cz + Math.sin(twist) * wOff * 0.85;
      }
    }

    for (let k = 8; k >= 1; k--) {
      const p = getRidgeCrestPos(k * 0.62, new THREE.Vector3());
      footprints.stamp(p.x, p.z + (k % 2 === 0 ? -0.14 : 0.14), Math.PI * 0.5, k % 2 === 0 ? -1 : 1);
    }
  }

  function stepRobeLayer(layer, anchorBone, dt2, windX, windZ, iters, colliders) {
    anchorBone.getWorldPosition(_hipsW);
    anchorBone.getWorldQuaternion(_hipsQ);
    const { cols, rows, count, pos, prev, restLocal, cA, cB, cRest, cStiff } = layer;
    const damp = 0.962;
    const waistRow = Math.floor(rows * 0.24);

    for (let r = 0; r < rows; r++) {
      const vFrac = r / (rows - 1);
      const isPin = r === 0;
      const isWaist = r === waistRow;
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const i3 = idx * 3;
        if (isPin || isWaist) {
          _v0.set(restLocal[i3], restLocal[i3 + 1], restLocal[i3 + 2]).applyQuaternion(_hipsQ).add(_hipsW);
          if (isPin) {
            pos[i3] = prev[i3] = _v0.x; pos[i3 + 1] = prev[i3 + 1] = _v0.y; pos[i3 + 2] = prev[i3 + 2] = _v0.z;
          } else {
            pos[i3] += (_v0.x - pos[i3]) * 0.55;
            pos[i3 + 1] += (_v0.y - pos[i3 + 1]) * 0.55;
            pos[i3 + 2] += (_v0.z - pos[i3 + 2]) * 0.55;
          }
          continue;
        }
        const x = pos[i3], y = pos[i3 + 1], z = pos[i3 + 2];
        const vx = (x - prev[i3]) * damp, vy = (y - prev[i3 + 1]) * damp, vz = (z - prev[i3 + 2]) * damp;
        prev[i3] = x; prev[i3 + 1] = y; prev[i3 + 2] = z;

        const billow = vFrac * vFrac * (0.42 + 0.58 * vFrac);
        const ang = (c / cols) * Math.PI * 2;
        // Front hem drapes naturally downward around her legs while back & sides billow strongly in the wind!
        const isFront = Math.cos(ang) < -0.1 ? 0.12 : (Math.cos(ang) < 0.25 ? 0.55 : 1.0);
        const windFactor = (0.14 + 0.88 * billow) * (0.28 + 0.72 * isFront);
        const turb = Math.sin(simTime * 5.2 + c * 0.50 - r * 0.24) * 2.2 * billow * isFront;

        pos[i3] = x + vx + (windX * windFactor + turb) * dt2;
        pos[i3 + 1] = y + vy + (-10.6 + Math.cos(simTime * 4.2 + c * 0.38) * 1.0 * billow) * dt2;
        pos[i3 + 2] = z + vz + (windZ * windFactor + Math.cos(simTime * 4.8 - r * 0.22) * 1.7 * billow * isFront) * dt2;
      }
    }

    const nC = cA.length;
    for (let it = 0; it < iters; it++) {
      for (let k = 0; k < nC; k++) {
        const ia = cA[k], ib = cB[k];
        const a3 = ia * 3, b3 = ib * 3;
        const dx = pos[b3] - pos[a3], dy = pos[b3 + 1] - pos[a3 + 1], dz = pos[b3 + 2] - pos[a3 + 2];
        const dist = Math.hypot(dx, dy, dz) || 1e-5;
        const diff = ((dist - cRest[k]) / dist) * cStiff[k];
        const pinA = ia < cols, pinB = ib < cols;
        if (pinA && !pinB) { pos[b3] -= dx * diff; pos[b3 + 1] -= dy * diff; pos[b3 + 2] -= dz * diff; }
        else if (!pinA && pinB) { pos[a3] += dx * diff; pos[a3 + 1] += dy * diff; pos[a3 + 2] += dz * diff; }
        else if (!pinA && !pinB) {
          const h = diff * 0.5;
          pos[a3] += dx * h; pos[a3 + 1] += dy * h; pos[a3 + 2] += dz * h;
          pos[b3] -= dx * h; pos[b3 + 1] -= dy * h; pos[b3 + 2] -= dz * h;
        }
      }
    }

    const margin = 0.052;
    for (let i = cols; i < count; i++) {
      const i3 = i * 3;
      let px = pos[i3], py = pos[i3 + 1], pz = pos[i3 + 2];
      for (let j = 0; j < colliders.length; j++) {
        const [cen, rad] = colliders[j];
        const rr = rad + margin;
        const dx = px - cen.x, dy = py - cen.y, dz = pz - cen.z;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < rr * rr && d2 > 1e-6) {
          const d = Math.sqrt(d2), p = (rr - d) / d;
          px += dx * p; py += dy * p; pz += dz * p;
        }
      }
      const gh = getDuneHeight(px, pz) + 0.028;
      if (py < gh) py = gh;
      pos[i3] = px; pos[i3 + 1] = py; pos[i3 + 2] = pz;
    }

    layer.geo.attributes.position.needsUpdate = true;
    layer.geo.computeVertexNormals();
  }

  function stepClothPhysics(dt, stormBoost = 0) {
    const subDt = Math.min(dt, 0.028) * 0.5;
    const dt2 = subDt * subDt;

    bHips.getWorldPosition(_hipsW);
    bHips.getWorldQuaternion(_hipsQ);
    bChest.getWorldPosition(_chestW);
    bHead.getWorldPosition(_headW);
    bLShin.getWorldPosition(_lKneeW);
    bRShin.getWorldPosition(_rKneeW);
    // Mid-thigh, mid-calf & ankle colliders so outer robe NEVER clips through her real sculpted legs & boots!
    _lThighW.set(0, -0.20, 0).applyMatrix4(bLThigh.matrixWorld);
    _rThighW.set(0, -0.20, 0).applyMatrix4(bRThigh.matrixWorld);
    _lCalfW.set(0, -0.20, 0).applyMatrix4(bLShin.matrixWorld);
    _rCalfW.set(0, -0.20, 0).applyMatrix4(bRShin.matrixWorld);
    _lAnkleW.set(0, -0.40, -0.04).applyMatrix4(bLShin.matrixWorld);
    _rAnkleW.set(0, -0.40, -0.04).applyMatrix4(bRShin.matrixWorld);
    scarfAnchor.getWorldPosition(_scarfRoot);

    _scarfRight.set(0.18, 0.94, -0.28).applyQuaternion(_hipsQ).normalize();

    const gust = (1.0 + 0.48 * Math.sin(simTime * 1.45) + 0.30 * Math.sin(simTime * 3.4 + 0.8)) * (1.0 + stormBoost * 0.8);
    const windX = (7.2 + 2.8 * Math.sin(simTime * 0.72)) * gust;
    const windZ = (4.2 + 1.6 * Math.cos(simTime * 0.58)) * gust;

    const colliders = [
      [_chestW, 0.165],
      [_hipsW, 0.185],
      [_lThighW, 0.125],
      [_rThighW, 0.125],
      [_lKneeW, 0.115],
      [_rKneeW, 0.115],
      [_lCalfW, 0.105],
      [_rCalfW, 0.105],
      [_lAnkleW, 0.115],
      [_rAnkleW, 0.115],
    ];

    const robeIters = clothQuality === 'low' ? 2 : clothQuality === 'medium' ? 3 : 4;
    const scarfIters = clothQuality === 'low' ? 4 : 6;

    for (let sub = 0; sub < 2; sub++) {
      if (clothQuality !== 'low' || sub === 0) {
        stepRobeLayer(outerRobe, bHips, dt2, windX * 0.72, windZ * 0.72, robeIters, colliders);
      }

      const sDamp = 0.985;
      for (let r = 0; r < SCARF_SEGS; r++) {
        const t = r / (SCARF_SEGS - 1);
        const hw = SCARF_HALF_W * (0.85 + Math.sin(t * Math.PI) * 0.18);
        for (let c = 0; c < SCARF_COLS; c++) {
          const idx = r * SCARF_COLS + c;
          const i3 = idx * 3;
          if (r === 0) {
            const wOff = (c - 1) * hw;
            scarfPos[i3] = scarfPrev[i3] = _scarfRoot.x + _scarfRight.x * wOff;
            scarfPos[i3 + 1] = scarfPrev[i3 + 1] = _scarfRoot.y + _scarfRight.y * wOff;
            scarfPos[i3 + 2] = scarfPrev[i3 + 2] = _scarfRoot.z + _scarfRight.z * wOff;
            continue;
          }
          const x = scarfPos[i3], y = scarfPos[i3 + 1], z = scarfPos[i3 + 2];
          const vx = (x - scarfPrev[i3]) * sDamp, vy = (y - scarfPrev[i3 + 1]) * sDamp, vz = (z - scarfPrev[i3 + 2]) * sDamp;
          scarfPrev[i3] = x; scarfPrev[i3 + 1] = y; scarfPrev[i3 + 2] = z;

          const edgeSign = c - 1;
          const wPhase = simTime * 5.6 - r * 0.28;
          const nearRipple = Math.min(1.0, r / 4.5);
          // Expressive silk S-wave dip & roll right from the neck collar so Shot 2 OTS scarf flows organically!
          const sWave = Math.sin(wPhase) * 16.0 + Math.sin(wPhase * 2.1 + 1.1) * 9.5;
          const yWave = Math.sin(wPhase * 1.05 + 0.5) * 26.0 + Math.cos(simTime * 3.1 - r * 0.20) * 16.0;
          const zWave = Math.cos(wPhase * 1.25 - 0.6) * 14.5;
          const twist = Math.sin(simTime * 4.0 - r * 0.24) * 19.0 * edgeSign;

          const ax = windX * (0.78 + t * 0.56) + sWave * (0.55 * nearRipple + t * 0.78) + twist * 0.30;
          const ay = -4.8 + (1.4 + yWave * 0.95) * (0.58 * nearRipple + t * 0.85) + twist * nearRipple;
          const az = windZ * (0.72 + t * 0.48) + zWave * (0.48 * nearRipple + t * 0.80);

          scarfPos[i3] = x + vx + ax * dt2;
          scarfPos[i3 + 1] = y + vy + ay * dt2;
          scarfPos[i3 + 2] = z + vz + az * dt2;
        }
      }

      const nSC = scarfCA.length;
      for (let it = 0; it < scarfIters; it++) {
        for (let k = 0; k < nSC; k++) {
          const ia = scarfCA[k], ib = scarfCB[k];
          const a3 = ia * 3, b3 = ib * 3;
          const dx = scarfPos[b3] - scarfPos[a3], dy = scarfPos[b3 + 1] - scarfPos[a3 + 1], dz = scarfPos[b3 + 2] - scarfPos[a3 + 2];
          const dist = Math.hypot(dx, dy, dz) || 1e-5;
          const diff = ((dist - scarfCRest[k]) / dist) * scarfCStiff[k];
          const pinA = ia < 3, pinB = ib < 3;
          if (pinA && !pinB) { scarfPos[b3] -= dx * diff; scarfPos[b3 + 1] -= dy * diff; scarfPos[b3 + 2] -= dz * diff; }
          else if (!pinA && pinB) { scarfPos[a3] += dx * diff; scarfPos[a3 + 1] += dy * diff; scarfPos[a3 + 2] += dz * diff; }
          else if (!pinA && !pinB) {
            const h = diff * 0.5;
            scarfPos[a3] += dx * h; scarfPos[a3 + 1] += dy * h; scarfPos[a3 + 2] += dz * h;
            scarfPos[b3] -= dx * h; scarfPos[b3 + 1] -= dy * h; scarfPos[b3 + 2] -= dz * h;
          }
        }
      }

      const minSep = 0.20, minSepSq = minSep * minSep;
      for (let r1 = 3; r1 < SCARF_SEGS - 5; r1 += 2) {
        const i1 = (r1 * 3 + 1) * 3;
        for (let r2 = r1 + 5; r2 < SCARF_SEGS; r2 += 2) {
          const i2 = (r2 * 3 + 1) * 3;
          const dx = scarfPos[i2] - scarfPos[i1], dy = scarfPos[i2 + 1] - scarfPos[i1 + 1], dz = scarfPos[i2 + 2] - scarfPos[i1 + 2];
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < minSepSq && d2 > 1e-6) {
            const d = Math.sqrt(d2), push = ((minSep - d) / d) * 0.35;
            for (let c = 0; c < 3; c++) {
              const a3 = (r1 * 3 + c) * 3, b3 = (r2 * 3 + c) * 3;
              scarfPos[a3] -= dx * push; scarfPos[a3 + 1] -= dy * push; scarfPos[a3 + 2] -= dz * push;
              scarfPos[b3] += dx * push; scarfPos[b3 + 1] += dy * push; scarfPos[b3 + 2] += dz * push;
            }
          }
        }
      }

      for (let i = 3; i < scarfCount; i++) {
        const i3 = i * 3;
        let px = scarfPos[i3], py = scarfPos[i3 + 1], pz = scarfPos[i3 + 2];
        for (const [cen, rad] of [[_headW, 0.18], [_chestW, 0.21]]) {
          const dx = px - cen.x, dy = py - cen.y, dz = pz - cen.z;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < rad * rad && d2 > 1e-6) {
            const d = Math.sqrt(d2), p = (rad - d) / d;
            px += dx * p; py += dy * p; pz += dz * p;
          }
        }
        const gh = getDuneHeight(px, pz) + 0.06;
        if (py < gh) py = gh;
        scarfPos[i3] = px; scarfPos[i3 + 1] = py; scarfPos[i3 + 2] = pz;
      }
    }

    scarfGeo.attributes.position.needsUpdate = true;
    scarfGeo.computeVertexNormals();
  }

  function prewarm(storyTime, tod) {
    applyWeightedPose(storyTime, tod);
    initCloth();
    for (let i = 0; i < 48; i++) {
      simTime += 0.016;
      stepClothPhysics(0.016, tod.stormVeil || 0);
    }
  }

  function update(dt, storyTime, tod) {
    simTime += dt;
    applyWeightedPose(storyTime, tod);
    stepClothPhysics(dt, tod.stormVeil || 0);
  }

  function getRightHandWorld(out = new THREE.Vector3()) {
    bRHand.getWorldPosition(out);
    out.y -= 0.08;
    return out;
  }

  function getHeadWorld(out = new THREE.Vector3()) {
    bHead.getWorldPosition(out);
    out.y += 0.05;
    return out;
  }

  function getChestWorld(out = new THREE.Vector3()) {
    bChest.getWorldPosition(out);
    return out;
  }

  function setClothQuality(tier) {
    clothQuality = tier;
  }

  return {
    root,
    worldFXGroup,
    worldPos,
    getRightHandWorld,
    getHeadWorld,
    getChestWorld,
    setClothQuality,
    prewarm,
    update,
  };
}
