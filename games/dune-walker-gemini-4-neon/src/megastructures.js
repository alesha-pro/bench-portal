import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLSL_ATMOSPHERE_CHUNK, SHARED_UNIFORMS } from './atmosphere.js';
import { getProceduralTextures } from './textures.js';
import { getDuneHeight } from './terrain.js';

/**
 * COHERENT ANCIENT ALIEN ARCHITECTURE (1-3 KM OPAQUE MASS, LIT & SHADOWED):
 * - Unified architectural language: razor-tall chamfered basalt-stone slabs with repeating
 *   recessed vertical flutes & stepped structural rib tiers, a colossal ribbed half-buried ring,
 *   broken ribbed cyclopean arches, and half-buried leaning obelisk monoliths.
 * - Real world-space triplanar normal map relief (fine vertical wind-erosion grooves!)
 * - Real opaque mass: strong 5:1 sunlit face vs cool deep shadowed face + bright crisp sun-side rim!
 * - Low sand drifts piled organically around bases; thin hairline dusk-only glowing seams;
 *   casts long kilometer CSM shadows across the dunes!
 */

export function createMegastructures() {
  const group = new THREE.Group();
  const { stone } = getProceduralTextures();

  const megaMat = new THREE.ShaderMaterial({
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
      uWindowGlow: SHARED_UNIFORMS.uWindowGlow,
      uStoneMap: { value: stone.map },
      uStoneNormal: { value: stone.normalMap },
    },
    vertexShader: /* glsl */ `
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix * wp;
        #endif
        wp = modelMatrix * wp;
        vWorldPos = wp.xyz;
        vec3 n = normal;
        #ifdef USE_INSTANCING
          n = mat3(instanceMatrix) * n;
        #endif
        vWorldNormal = normalize(mat3(modelMatrix) * n);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uWindowGlow;
      uniform sampler2D uStoneMap;
      uniform sampler2D uStoneNormal;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      ${GLSL_ATMOSPHERE_CHUNK}

      void main() {
        vec3 baseN = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);

        // World-space triplanar 2048² stone albedo + normal perturbation + vertical wind-erosion grooves!
        vec3 w = pow(max(abs(baseN), vec3(0.001)), vec3(4.0));
        w /= (w.x + w.y + w.z);
        float sc = 0.0042;
        vec3 tx = texture2D(uStoneMap, vWorldPos.zy * sc).rgb;
        vec3 ty = texture2D(uStoneMap, vWorldPos.xz * sc).rgb;
        vec3 tz = texture2D(uStoneMap, vWorldPos.xy * sc).rgb;
        vec3 stoneTex = tx * w.x + ty * w.y + tz * w.z;

        // Sample triplanar stone normal map + fine vertical wind-erosion fluting!
        vec3 nx = texture2D(uStoneNormal, vWorldPos.zy * sc * 1.4).xyz * 2.0 - 1.0;
        vec3 ny = texture2D(uStoneNormal, vWorldPos.xz * sc * 1.4).xyz * 2.0 - 1.0;
        vec3 nz = texture2D(uStoneNormal, vWorldPos.xy * sc * 1.4).xyz * 2.0 - 1.0;
        vec3 triPerturb = vec3(0.0, nx.y, nx.x) * w.x + vec3(ny.x, 0.0, ny.y) * w.y + vec3(nz.x, nz.y, 0.0) * w.z;
        // Analytical vertical architectural erosion grooves
        float fluteWave = sin(vWorldPos.x * 0.22 + vWorldPos.z * 0.22);
        vec3 N = normalize(baseN + triPerturb * 0.38 + vec3(fluteWave, 0.0, -fluteWave) * 0.14);

        // Repeating architectural rib recesses every ~68m vertically
        float ribBand = smoothstep(0.86, 0.96, abs(sin(vWorldPos.y * 0.046)));
        float vertFlute = 0.80 + 0.20 * fluteWave;
        vec3 darkBasalt = stoneTex * vec3(0.24, 0.21, 0.19) * vertFlute * (1.0 - ribBand * 0.42);

        // Desert sand piled organically around buried bases (< 130m) & upper ledges
        float baseDrift = 1.0 - smoothstep(-20.0, 125.0, vWorldPos.y);
        float topSand = smoothstep(0.55, 0.92, N.y);
        vec3 driftCol = mix(vec3(0.56, 0.40, 0.24), uHazeBase * 0.65, 0.35);
        vec3 albedo = mix(darkBasalt, driftCol, clamp(baseDrift * 0.68 + topSand * 0.45, 0.0, 0.82));

        // REAL OPAQUE MASS: dramatic lit face vs sculpted 10-14% cool shadowed face (never pure black!)
        float sunUp = smoothstep(-0.03, 0.10, uSunDir.y);
        float ndl = max(dot(N, uSunDir), 0.0);
        vec3 shadowFace = mix(albedo * 0.34, uShadowCool * 0.62, 0.56) * (0.48 + 0.52 * max(N.y, 0.0));
        vec3 litFace = albedo * uSunColor * (2.65 * pow(max(ndl, 0.0001), 0.88)) * sunUp;
        vec3 col = shadowFace + litFace;

        // Crisp bright rim strictly on the SUN-FACING chamfered silhouette edge!
        float fres = pow(clamp(1.0 - max(dot(N, V), 0.0), 0.0001, 1.0), 3.6);
        float sunSideRim = smoothstep(-0.15, 0.65, dot(baseN, uSunDir));
        float sunBack = pow(max(dot(-V, uSunDir), 0.0001), 2.0);
        col += uSunColor * fres * (0.28 + 0.95 * sunBack) * (0.35 + 0.65 * sunSideRim) * sunUp * 0.92;

        // Hairline eroded ancient inscription seams (glimmer faintly ONLY at sunset & blue hour)
        float duskGate = smoothstep(1.4, 4.5, uWindowGlow);
        float fineBand = smoothstep(0.9968, 0.9998, abs(sin(vWorldPos.y * 0.048 + 0.7)));
        float breakMask = smoothstep(0.65, 0.92, sin(vWorldPos.x * 0.045 + vWorldPos.z * 0.038) * cos(vWorldPos.y * 0.013));
        col += vec3(1.22, 0.62, 0.20) * fineBand * breakMask * (1.0 - baseDrift) * duskGate * 0.44;

        // Restrained aerial haze (densityScale = 0.24) so megastructures keep solid dark-vs-lit mass
        // through the atmosphere instead of flattening into translucent fog cut-outs!
        col = applyAtmosphere(col, vWorldPos, cameraPosition, 0.24);

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  // Swept curved Gaussian dune-apron skirts piled smoothly against buried monolith bases (ZERO sharp cone tents!)
  const apronPts = [];
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    const r = 0.25 + t * 0.95;
    const h = Math.pow(1.0 - t, 2.2);
    apronPts.push(new THREE.Vector2(r, h));
  }
  const driftGeo = new THREE.LatheGeometry(apronPts, 40);
  const driftMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
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
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      ${GLSL_ATMOSPHERE_CHUNK}
      void main() {
        float sunUp = smoothstep(-0.03, 0.10, uSunDir.y);
        float ndl = smoothstep(-0.12, 0.72, dot(normalize(vWorldNormal), uSunDir)) * sunUp;
        vec3 col = mix(uShadowCool * 0.65, vec3(0.70, 0.50, 0.28) * uSunColor, ndl);
        col = applyAtmosphere(col, vWorldPos, cameraPosition, 0.42);
        // Feathered edge fade at outer & inner apron rims -> blends seamlessly into desert dunes!
        float a = smoothstep(0.0, 0.28, vUv.y) * smoothstep(1.0, 0.35, vUv.y) * 0.72;
        if (a < 0.01) discard;
        gl_FragColor = vec4(col, a);
      }
    `,
  });

  function addBaseDrift(x, z, radius, height) {
    const m = new THREE.Mesh(driftGeo, driftMat);
    m.position.set(x, getDuneHeight(x, z) - 22, z);
    m.scale.set(radius * 1.15, height * 0.78, radius * 1.45);
    m.rotation.y = 0.54;
    group.add(m);
  }

  // 1. TOWERING CHAMFERED RIBBED MONOLITH SLABS (flush attached ribs, zero floating ledges!)
  const monolithSpecs = [
    { x: 340,  y: 780,  z: -1620, w: 175, h: 2150, d: 54, rotY: 0.58,  tiltZ: 0.026 },
    { x: -940, y: 1120, z: -2850, w: 225, h: 2850, d: 68, rotY: -0.52, tiltZ: -0.020 },
    { x: 1480, y: 860,  z: -2450, w: 150, h: 2250, d: 48, rotY: 0.64,  tiltZ: 0.042 },
    { x: 520,  y: 520,  z: -1820, w: 82,  h: 1520, d: 34, rotY: 0.52,  tiltZ: 0.032 },
  ];

  for (const m of monolithSpecs) {
    const mGroup = new THREE.Group();
    mGroup.position.set(m.x, m.y, m.z);
    mGroup.rotation.set(0, m.rotY, m.tiltZ);
    group.add(mGroup);

    const mainMesh = new THREE.Mesh(new RoundedBoxGeometry(m.w, m.h, m.d, 2, 7.5), megaMat);
    mainMesh.castShadow = true;
    mGroup.add(mainMesh);

    // Subtle flush chamfered architectural collar ribs integrated cleanly around each monolith!
    for (let r = -3; r <= 3; r++) {
      const rib = new THREE.Mesh(new RoundedBoxGeometry(m.w * 1.05, 22, m.d * 1.12, 2, 4.0), megaMat);
      rib.position.y = r * (m.h * 0.12);
      mGroup.add(rib);
    }

    const step = new THREE.Mesh(new RoundedBoxGeometry(m.w * 0.46, m.h * 0.48, m.d * 1.25, 2, 5.5), megaMat);
    step.position.set(m.w * 0.36, -m.h * 0.22, 0);
    step.castShadow = true;
    mGroup.add(step);

    addBaseDrift(m.x, m.z, m.w * 1.6, 130);
  }

  // 2. COLOSSAL HALF-BURIED RIBBED RING (ribs tightly integrated around torus!)
  const ringGroup = new THREE.Group();
  ringGroup.position.set(-480, -210, -2250);
  ringGroup.rotation.set(0.28, 0.36, -0.19);
  group.add(ringGroup);

  const ringRadius = 1100;
  const ringMesh = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, 50, 12, 96, Math.PI * 1.62), megaMat);
  ringMesh.castShadow = true;
  ringGroup.add(ringMesh);

  const innerRing = new THREE.Mesh(new THREE.TorusGeometry(ringRadius - 94, 20, 8, 72, Math.PI * 1.22), megaMat);
  ringGroup.add(innerRing);

  const ringRibGeo = new RoundedBoxGeometry(116, 26, 114, 2, 5.0);
  const ringRibCount = 24;
  const ringRibs = new THREE.InstancedMesh(ringRibGeo, megaMat, ringRibCount);
  ringRibs.castShadow = true;
  const rDummy = new THREE.Object3D();
  for (let i = 0; i < ringRibCount; i++) {
    const ang = (i / (ringRibCount - 1)) * Math.PI * 1.56;
    rDummy.position.set(Math.cos(ang) * ringRadius, Math.sin(ang) * ringRadius, 0);
    rDummy.rotation.set(0, 0, ang);
    rDummy.updateMatrix();
    ringRibs.setMatrixAt(i, rDummy.matrix);
  }
  ringRibs.instanceMatrix.needsUpdate = true;
  ringGroup.add(ringRibs);

  // 3. BROKEN RIBBED CYCLOPEAN ARCHES (ribs parented directly to piers -> ZERO floating blocks!)
  const archGroup = new THREE.Group();
  archGroup.position.set(-1240, -60, -1880);
  archGroup.rotation.y = 0.62;
  group.add(archGroup);

  const pL = new THREE.Mesh(new RoundedBoxGeometry(118, 1280, 110, 2, 8.0), megaMat);
  pL.position.set(-340, 620, 0);
  pL.rotation.z = -0.12;
  pL.castShadow = true;
  archGroup.add(pL);

  const pR = new THREE.Mesh(new RoundedBoxGeometry(118, 1020, 110, 2, 8.0), megaMat);
  pR.position.set(340, 490, 0);
  pR.rotation.z = 0.14;
  pR.castShadow = true;
  archGroup.add(pR);

  // Flush ribs parented directly in local pier space!
  for (let i = -2; i <= 2; i++) {
    const rbL = new THREE.Mesh(new RoundedBoxGeometry(132, 24, 124, 2, 4.5), megaMat);
    rbL.position.set(0, i * 195, 0);
    pL.add(rbL);
    const rbR = new THREE.Mesh(new RoundedBoxGeometry(132, 24, 124, 2, 4.5), megaMat);
    rbR.position.set(0, i * 165, 0);
    pR.add(rbR);
  }

  const lintelL = new THREE.Mesh(new RoundedBoxGeometry(450, 92, 120, 2, 7.0), megaMat);
  lintelL.position.set(-140, 1185, 0);
  lintelL.rotation.z = 0.08;
  lintelL.castShadow = true;
  archGroup.add(lintelL);

  const lintelR = new THREE.Mesh(new RoundedBoxGeometry(250, 86, 114, 2, 7.0), megaMat);
  lintelR.position.set(220, 955, 0);
  lintelR.rotation.z = -0.22;
  lintelR.castShadow = true;
  archGroup.add(lintelR);
  addBaseDrift(-1240, -1880, 380, 135);

  // 4. FIELD OF 16 HALF-BURIED LEANING CHAMFERED SPIRES (coherent faceted stone silhouette!)
  const obeliskGeo = new THREE.CylinderGeometry(12, 46, 1, 6);
  obeliskGeo.translate(0, 0.5, 0);
  const obCount = 16;
  const obInst = new THREE.InstancedMesh(obeliskGeo, megaMat, obCount);
  obInst.castShadow = true;
  const dummy = new THREE.Object3D();

  for (let i = 0; i < obCount; i++) {
    const s = (i * 1.6180339) % 1;
    const s2 = ((i * 3.719 + 0.21) % 1);
    const angle = -1.32 + (i / (obCount - 1)) * 2.68;
    const dist = 1620 + s * 2150;
    const h = 680 + s2 * 960;
    const w = 0.85 + s * 0.72;
    dummy.position.set(Math.sin(angle) * dist, -110, -Math.cos(angle) * dist);
    dummy.rotation.set((s - 0.5) * 0.22, s2 * Math.PI, (i % 2 === 0 ? 1 : -1) * (0.10 + s * 0.18));
    dummy.scale.set(w, h, w);
    dummy.updateMatrix();
    obInst.setMatrixAt(i, dummy.matrix);
  }
  obInst.instanceMatrix.needsUpdate = true;
  group.add(obInst);

  // 5. DISTANT ROLLING HORIZON HABOOB FRONT (subtly anchors the far desert edge)
  const stormGeo = new THREE.CylinderGeometry(2850, 2950, 560, 64, 6, true, Math.PI * 0.62, Math.PI * 0.78);
  const stormMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    uniforms: {
      uTime: SHARED_UNIFORMS.uTime,
      uSunDir: SHARED_UNIFORMS.uSunDir,
      uSunColor: SHARED_UNIFORMS.uSunColor,
      uHazeBase: SHARED_UNIFORMS.uHazeBase,
      uShadowCool: SHARED_UNIFORMS.uShadowCool,
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uSunColor;
      uniform vec3 uHazeBase;
      uniform vec3 uShadowCool;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      float hash21(vec2 p) {
        p = fract(p * vec2(127.1, 311.7));
        p += dot(p, p + 34.17);
        return fract(p.x * p.y);
      }
      float vnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
          mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }
      float fbm(vec2 p) {
        float s = 0.0, a = 0.55;
        for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.06 + vec2(5.1, 2.7); a *= 0.48; }
        return s;
      }

      void main() {
        vec2 p = vec2(vUv.x * 9.0 - uTime * 0.020, vUv.y * 2.8);
        float billow = fbm(p) * 0.65 + fbm(p * 2.1 + vec2(-uTime * 0.025, 1.4)) * 0.35;
        float topCut = 0.46 + billow * 0.38;
        float vMask = smoothstep(topCut, topCut - 0.30, vUv.y) * smoothstep(0.0, 0.14, vUv.y);
        float sMask = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);

        vec3 V = normalize(vWorldPos - cameraPosition);
        float sunUp = smoothstep(-0.02, 0.10, uSunDir.y);
        float sunBack = pow(max(dot(V, uSunDir), 0.0001), 3.0);
        vec3 baseCol = mix(uShadowCool * 1.1, uHazeBase * 0.82, 0.55);
        vec3 rimCol = mix(uHazeBase, uSunColor * 1.12, (0.45 + 0.50 * sunBack) * sunUp);
        vec3 col = mix(baseCol, rimCol, smoothstep(0.18, 0.78, vUv.y) * (0.45 + 0.55 * billow));

        float a = vMask * sMask * (0.34 + 0.28 * billow);
        if (a < 0.005) discard;
        gl_FragColor = vec4(col, a);
      }
    `,
  });

  const stormWall = new THREE.Mesh(stormGeo, stormMat);
  stormWall.position.set(0, 195, 0);
  stormWall.renderOrder = 2;
  group.add(stormWall);

  return { group };
}
