import * as THREE from 'three';
import { GLSL_ATMOSPHERE_CHUNK, SHARED_UNIFORMS, WIND_DIR } from './atmosphere.js';

/**
 * THE HERO SAND — DAYTIME TACTILE RELIEF + OREN-NAYAR BRDF + SHARP CRESTS (MeshStandardMaterial + CSM):
 * - Denser near-camera terrain clipmap (180m / 300 segs = 0.60m spacing -> razor-sharp crests, zero blurry ridges!)
 * - Sun-elevation-scaled wind ripples (3-5x stronger by day at 25-35° sun so daytime sand is deeply textured!)
 * - Mid-scale 2-10m desert wind undulations, crescentic wind scallops & elongated wind streaks
 * - Oren-Nayar rough mineral diffuse BRDF (sigma=0.72) + broad opposition backscatter surge + subtle grazing darkening
 * - Rich mineral albedo variation: pale fine crest sand, darker coarse trough & base sand, smooth lee faces, color bands
 * - Sparse view-dependent quartz sparkle fading with distance + persistent woman footprints & giant walker craters!
 */

function sharpDuneWave(p) {
  const u = Math.sin(0.5 * p + 0.30 * Math.sin(p));
  const ridge = 1.0 - Math.sqrt(u * u + 0.0022);
  return Math.pow(Math.max(0.0, ridge), 1.48);
}

export function getDuneHeight(x, z) {
  const warp1 = Math.sin(x * 0.0085 + z * 0.0035) * 1.1 + Math.cos(x * 0.0045 - z * 0.0028) * 0.8;

  // 1. Hero commanding dune crest passing through (x = 0, z = 0)
  const pHero = z * 0.036 + x * 0.0065 + warp1 - 0.80;
  const hHero = sharpDuneWave(pHero) * 16.5;

  // 2. Vast macro erg swells out to 6.5 km horizon
  const pErg = (z * 0.011 - x * 0.0075) + Math.sin(x * 0.0032 + z * 0.0021) * 1.4;
  const hErg = sharpDuneWave(pErg) * 28.0;

  // 3. Secondary wind-cut cross ridges
  const pCross = (x * 0.048 + z * 0.031) + Math.sin(z * 0.024 - x * 0.018) * 0.75;
  const hCross = sharpDuneWave(pCross) * 3.4;

  // 4. Mid-scale 2-10m wind undulations & scalloped sand swells
  const hMid = Math.sin(x * 0.18 + z * 0.13) * 0.24 + Math.cos(x * 0.12 - z * 0.21) * 0.18;

  const basinMask = Math.exp(-Math.pow((z + 115) / 85, 2) - Math.pow(x / 110, 2));
  return (hHero + hErg * (1.0 - basinMask * 0.42) + hCross + hMid) - 18.5;
}

const _nTmp = new THREE.Vector3();
export function getDuneNormal(x, z, target = _nTmp) {
  const e = 0.30;
  const hL = getDuneHeight(x - e, z);
  const hR = getDuneHeight(x + e, z);
  const hD = getDuneHeight(x, z - e);
  const hU = getDuneHeight(x, z + e);
  return target.set(hL - hR, 2.0 * e, hD - hU).normalize();
}

export function getRidgeCrestPos(x, out = new THREE.Vector3()) {
  let bestZ = 0;
  let bestH = -1e9;
  for (let tz = -8.0; tz <= 8.0; tz += 0.25) {
    const h = getDuneHeight(x, tz);
    if (h > bestH) { bestH = h; bestZ = tz; }
  }
  let refinedZ = bestZ;
  for (let tz = bestZ - 0.3; tz <= bestZ + 0.3; tz += 0.04) {
    const h = getDuneHeight(x, tz);
    if (h > bestH) { bestH = h; refinedZ = tz; }
  }
  return out.set(x, bestH, refinedZ);
}

export const GLSL_DUNE_HEIGHT = /* glsl */ `
float sharpDuneWave(float p) {
  float u = sin(0.5 * p + 0.30 * sin(p));
  float ridge = 1.0 - sqrt(u * u + 0.0022);
  return pow(max(0.0, ridge), 1.48);
}

float getDuneHeight(vec2 xz) {
  float x = xz.x;
  float z = xz.y;
  float warp1 = sin(x * 0.0085 + z * 0.0035) * 1.1 + cos(x * 0.0045 - z * 0.0028) * 0.8;
  float pHero = z * 0.036 + x * 0.0065 + warp1 - 0.80;
  float hHero = sharpDuneWave(pHero) * 16.5;

  float pErg = (z * 0.011 - x * 0.0075) + sin(x * 0.0032 + z * 0.0021) * 1.4;
  float hErg = sharpDuneWave(pErg) * 28.0;

  float pCross = (x * 0.048 + z * 0.031) + sin(z * 0.024 - x * 0.018) * 0.75;
  float hCross = sharpDuneWave(pCross) * 3.4;

  float hMid = sin(x * 0.18 + z * 0.13) * 0.24 + cos(x * 0.12 - z * 0.21) * 0.18;

  float bx = x / 110.0;
  float bz = (z + 115.0) / 85.0;
  float basinMask = exp(-(bz * bz + bx * bx));
  return (hHero + hErg * (1.0 - basinMask * 0.42) + hCross + hMid) - 18.5;
}

vec3 getDuneNormal(vec2 xz) {
  float e = 0.30;
  float hL = getDuneHeight(xz - vec2(e, 0.0));
  float hR = getDuneHeight(xz + vec2(e, 0.0));
  float hD = getDuneHeight(xz - vec2(0.0, e));
  float hU = getDuneHeight(xz + vec2(0.0, e));
  return normalize(vec3(hL - hR, 2.0 * e, hD - hU));
}
`;

function createWalkerCraterSystem() {
  const MAX_CRATERS = 48;
  const geo = new THREE.PlaneGeometry(16.0, 16.0, 1, 1);
  geo.rotateX(-Math.PI / 2);

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
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
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      ${GLSL_ATMOSPHERE_CHUNK}
      void main() {
        vec2 p = (vUv - 0.5) * 2.0;
        float r = length(p);
        if (r > 0.98) discard;

        float ang = atan(p.y, p.x);
        float claws = 0.5 + 0.5 * cos(ang * 3.0);
        float bowl = smoothstep(0.68 + claws * 0.14, 0.24, r);
        float berm = smoothstep(0.95, 0.72, r) * smoothstep(0.52, 0.76, r);

        float sunSide = dot(normalize(p + vec2(0.0001)), normalize(uSunDir.xz + vec2(0.0001)));
        float sunUp = smoothstep(-0.04, 0.10, uSunDir.y);

        vec3 darkBowl = mix(vec3(0.20, 0.12, 0.06), uShadowCool * 0.75, 0.58);
        vec3 litWall = mix(darkBowl, vec3(0.74, 0.52, 0.28) * uSunColor, smoothstep(-0.3, 0.7, -sunSide) * 0.58 * sunUp);
        vec3 litBerm = mix(darkBowl * 1.08, vec3(0.82, 0.60, 0.34) * uSunColor, smoothstep(-0.2, 0.8, sunSide) * 0.65 * sunUp);

        vec3 col = mix(litWall, litBerm, berm / max(bowl + berm, 0.001));
        col = applyAtmosphere(col, vWorldPos, cameraPosition, 1.0);
        float alpha = clamp(bowl * 0.68 + berm * (0.14 + 0.26 * sunUp), 0.0, 0.74);
        if (alpha < 0.01) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, MAX_CRATERS);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1;

  const dummy = new THREE.Object3D();
  function clear() {
    dummy.position.set(0, -9999, 0);
    dummy.scale.set(1, 1, 1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    for (let i = 0; i < MAX_CRATERS; i++) mesh.setMatrixAt(i, dummy.matrix);
    mesh.instanceMatrix.needsUpdate = true;
    nextIdx = 0;
  }

  const up = new THREE.Vector3(0, 1, 0);
  const qN = new THREE.Quaternion(), qY = new THREE.Quaternion(), norm = new THREE.Vector3();
  let nextIdx = 0;
  clear();

  function stamp(x, z, yaw) {
    getDuneNormal(x, z, norm);
    qN.setFromUnitVectors(up, norm);
    qY.setFromAxisAngle(up, yaw);
    dummy.position.set(x, getDuneHeight(x, z) + 0.08, z);
    dummy.quaternion.copy(qN).multiply(qY);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(nextIdx, dummy.matrix);
    nextIdx = (nextIdx + 1) % MAX_CRATERS;
    mesh.instanceMatrix.needsUpdate = true;
  }

  return { mesh, stamp, clear };
}

export function createDesert(csm) {
  const group = new THREE.Group();

  // Denser near-camera clipmap (0.60m spacing -> razor-crisp sharp dune crests, zero blurry ridges!)
  const INNER_SIZE = 180;
  const INNER_SEGS = 300;
  const INNER_STEP = INNER_SIZE / INNER_SEGS;

  const OUTER_SIZE = 7600;
  const OUTER_SEGS = 220;
  const OUTER_STEP = OUTER_SIZE / OUTER_SEGS;

  const innerGeo = new THREE.PlaneGeometry(INNER_SIZE, INNER_SIZE, INNER_SEGS, INNER_SEGS);
  innerGeo.rotateX(-Math.PI / 2);

  const outerGeo = new THREE.PlaneGeometry(OUTER_SIZE, OUTER_SIZE, OUTER_SEGS, OUTER_SEGS);
  outerGeo.rotateX(-Math.PI / 2);

  const sharedTerrainUniforms = {
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
    uTremor: SHARED_UNIFORMS.uTremor,
    uWindDir: SHARED_UNIFORMS.uWindDir,
    uWomanPos: { value: new THREE.Vector3(0, 0, 0) },
    uWalkerLegs: SHARED_UNIFORMS.uWalkerLegs,
    uInnerCenter: { value: new THREE.Vector2(0, -15) },
    uInnerHalfSize: { value: INNER_SIZE * 0.5 - 6.0 },
  };

  function makeTerrainMaterial(isOuter) {
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.92,
      metalness: 0.0,
      envMapIntensity: 0.42, // Rich cool twilight sky ambient in shadowed lee faces (never dead black!)
    });

    if (csm) csm.setupMaterial(mat);
    const prevCompile = mat.onBeforeCompile;

    const uGridOffset = { value: new THREE.Vector2(0, 0) };
    mat.userData.uGridOffset = uGridOffset;

    mat.onBeforeCompile = (shader, renderer) => {
      if (prevCompile) prevCompile(shader, renderer);

      Object.assign(shader.uniforms, sharedTerrainUniforms, {
        uGridOffset,
        uIsOuter: { value: isOuter ? 1.0 : 0.0 },
      });

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
           uniform vec2 uGridOffset;
           uniform float uIsOuter;
           uniform vec2 uInnerCenter;
           uniform float uInnerHalfSize;
           varying vec3 vSandWorldPos;
           varying vec3 vSandMacroN;
           varying float vCrestness;
           ${GLSL_DUNE_HEIGHT}`
        )
        .replace(
          '#include <beginnormal_vertex>',
          `vec2 worldXZ_v = position.xz + uGridOffset;
           vec3 objectNormal = getDuneNormal(worldXZ_v);
           vSandMacroN = objectNormal;`
        )
        .replace(
          '#include <begin_vertex>',
          `float h_v = getDuneHeight(worldXZ_v);
           if (uIsOuter > 0.5) {
             vec2 dIn = abs(worldXZ_v - uInnerCenter);
             float inside = 1.0 - smoothstep(uInnerHalfSize - 20.0, uInnerHalfSize + 5.0, max(dIn.x, dIn.y));
             h_v -= inside * 2.2;
           }
           vec3 transformed = vec3(worldXZ_v.x, h_v, worldXZ_v.y);
           vSandWorldPos = transformed;
           float hAvg = 0.25 * (
             getDuneHeight(worldXZ_v + vec2(1.2, 0.0)) +
             getDuneHeight(worldXZ_v - vec2(1.2, 0.0)) +
             getDuneHeight(worldXZ_v + vec2(0.0, 1.2)) +
             getDuneHeight(worldXZ_v - vec2(0.0, 1.2))
           );
           vCrestness = clamp((h_v - hAvg) * 3.0, 0.0, 1.0);`
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
           uniform float uTime;
           uniform float uTremor;
           uniform vec3 uWindDir;
           uniform vec3 uWomanPos;
           uniform vec3 uWalkerLegs[6];
           varying vec3 vSandWorldPos;
           varying vec3 vSandMacroN;
           varying float vCrestness;
           ${GLSL_DUNE_HEIGHT}
           ${GLSL_ATMOSPHERE_CHUNK}

           float hash21S(vec2 p) {
             p = fract(p * vec2(234.34, 435.345));
             p += dot(p, p + 34.23);
             return fract(p.x * p.y);
           }
           vec2 hash22S(vec2 p) {
             vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
             p3 += dot(p3, p3.yzx + 33.33);
             return fract((p3.xx + p3.yz) * p3.zy);
           }
           float vnoiseS(vec2 p) {
             vec2 i = floor(p);
             vec2 f = fract(p);
             vec2 u = f * f * (3.0 - 2.0 * f);
             return mix(
               mix(hash21S(i), hash21S(i + vec2(1.0, 0.0)), u.x),
               mix(hash21S(i + vec2(0.0, 1.0)), hash21S(i + vec2(1.0, 1.0)), u.x),
               u.y
             );
           }

           // Oren-Nayar rough mineral sand diffuse BRDF ratio (sigma = 0.72) relative to Lambert!
           float orenNayarRatio(vec3 N, vec3 V, vec3 L, float sigma) {
             float NdotL = max(dot(N, L), 0.001);
             float NdotV = max(dot(N, V), 0.001);
             float s2 = sigma * sigma;
             float A = 1.0 - 0.5 * (s2 / (s2 + 0.33));
             float B = 0.45 * (s2 / (s2 + 0.09));
             float thetaI = acos(clamp(NdotL, -1.0, 1.0));
             float thetaR = acos(clamp(NdotV, -1.0, 1.0));
             float alpha = max(thetaI, thetaR);
             float beta  = min(thetaI, thetaR);
             vec3 lProj = L - N * NdotL;
             vec3 vProj = V - N * NdotV;
             float cosPhi = dot(lProj, vProj) / max(length(lProj) * length(vProj), 0.0001);
             return A + B * max(0.0, cosPhi) * sin(alpha) * tan(beta);
           }

           // 3-SCALE DESERT SAND RELIEF (explicitly scaled per octave for crystal-clear daytime legibility
           // from 1m right out to 420m with ZERO grid sawtooth or aliasing cancellation!):
           //  - Scale 1 (5-11m): wind-carved sand waves, crescentic scallops & elongated wind streaks
           //  - Scale 2 (1.5-2.2m): crisp midground wind ripples clearly visible across all erg flanks
           //  - Scale 3 (0.35-0.65m): fine wind-cut ripples & micro-grain near camera
           vec3 evalSandReliefGradAndOcc(vec2 xz, float dist, vec2 sunXZ) {
             vec2 wDir = normalize(uWindDir.xz);
             vec2 wPerp = vec2(-wDir.y, wDir.x);
             float along = dot(xz, wDir);
             float across = dot(xz, wPerp);

             // --- SCALE 1: Macro wind-carved sand waves & crescentic scallops (wavelength ~5-9m, visible 12..420m!) ---
             float s1Fade = 1.0 - smoothstep(160.0, 440.0, dist);
             float warp1 = vnoiseS(vec2(along * 0.045, across * 0.14)) * 2.6;
             float ph1 = along * 0.85 + warp1;
             float wave1 = sin(ph1) + 0.34 * sin(ph1 * 2.0 + 0.55);
             float dWave1 = (cos(ph1) + 0.68 * cos(ph1 * 2.0 + 0.55)) * 0.82;
             float crossMod = 0.64 + 0.36 * cos(across * 0.32 + vnoiseS(xz * 0.05) * 2.2);
             vec2 grad = wDir * (dWave1 * crossMod * 0.66 * s1Fade)
                       + wPerp * (-sin(across * 0.32) * wave1 * 0.18 * s1Fade);
             float sunSign = sign(dot(wDir, sunXZ) + 0.001);
             float occ = clamp(-dWave1 * crossMod * 0.56 * s1Fade * sunSign, 0.0, 1.0);

             // --- SCALE 2: Crisp midground desert wind ripples (wavelength ~1.6m, clearly textured 5..240m in Shots 1-3!) ---
             float s2Fade = 1.0 - smoothstep(70.0, 240.0, dist);
             if (s2Fade > 0.005) {
               float warp2 = vnoiseS(vec2(along * 0.14, across * 0.10)) * 2.4
                           + vnoiseS(vec2(along * 0.40, across * 0.25)) * 0.70;
               float ph2 = along * 3.9 + warp2;
               float dWave2 = cos(ph2) + 0.72 * cos(ph2 * 2.0 + 0.58) + 0.30 * cos(ph2 * 3.0 + 1.15);
               float env2 = 0.68 + 0.32 * vnoiseS(vec2(along * 0.07, across * 0.32));
               grad += wDir * (dWave2 * env2 * 0.54 * s2Fade);
               occ = max(occ, clamp(-dWave2 * env2 * 0.68 * s2Fade * sunSign, 0.0, 1.0));
             }

             // --- SCALE 3: Fine crisp foreground wind ripples (wavelength ~0.46m, tactile 1..70m!) ---
             float s3Fade = 1.0 - smoothstep(18.0, 70.0, dist);
             if (s3Fade > 0.005) {
               float warp3 = vnoiseS(vec2(along * 0.30, across * 0.20)) * 2.1
                           + vnoiseS(vec2(along * 0.80, across * 0.50)) * 0.62;
               float ph3 = along * 13.6 + warp3;
               float dWave3 = cos(ph3) + 0.64 * cos(ph3 * 2.0 + 0.55);
               grad += wDir * (dWave3 * 0.46 * s3Fade);
               occ = max(occ, clamp(-dWave3 * 0.70 * s3Fade * sunSign, 0.0, 1.0));
             }

             // --- SCALE 4: Close wind-streaked micro-grain (~14cm, 0.5..24m) ---
             float s4Fade = 1.0 - smoothstep(5.0, 24.0, dist);
             if (s4Fade > 0.005) {
               float ph4 = along * 42.0 + vnoiseS(xz * 1.6) * 2.4;
               grad += wDir * (cos(ph4) * 0.16 * s4Fade);
             }

             return vec3(grad.x, grad.y, occ);
           }`
        )
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           // INFINITE-RESOLUTION PER-PIXEL DUNE NORMAL & CRESTNESS (100% eliminates 0.60m grid sawtooth teeth!)
           vec3 sandN = getDuneNormal(vSandWorldPos.xz);
           float hCenterP = getDuneHeight(vSandWorldPos.xz);
           float hAvgP = 0.25 * (
             getDuneHeight(vSandWorldPos.xz + vec2(0.85, 0.0)) +
             getDuneHeight(vSandWorldPos.xz - vec2(0.85, 0.0)) +
             getDuneHeight(vSandWorldPos.xz + vec2(0.0, 0.85)) +
             getDuneHeight(vSandWorldPos.xz - vec2(0.0, 0.85))
           );
           float pixelCrestness = clamp((hCenterP - hAvgP) * 4.2, 0.0, 1.0);

           float sandDist = length(cameraPosition - vSandWorldPos);
           float sandSlope = 1.0 - sandN.y;

           vec2 wDirC = normalize(uWindDir.xz);
           vec2 wPerpC = vec2(-wDirC.y, wDirC.x);
           float alongC = dot(vSandWorldPos.xz, wDirC);
           float acrossC = dot(vSandWorldPos.xz, wPerpC);

           // True physical lee slip-face: ONLY steep downwind slip faces (angle of repose), NEVER camera-facing windward slopes!
           float downwindAlign = dot(normalize(sandN.xz + vec2(0.0001)), wDirC);
           float leeMask = smoothstep(0.11, 0.24, sandSlope) * smoothstep(0.18, 0.58, downwindAlign);
           float windwardMask = 1.0 - leeMask * 0.88;

           // Rich mineral albedo stratification: pale fine quartz sand on sharp crests,
           // darker coarse ochre-sienna sand in troughs & windward bases, wind-sorted mineral bands!
           float heightFrac = smoothstep(-20.0, 26.0, vSandWorldPos.y);
           float coarseVar = vnoiseS(vSandWorldPos.xz * 0.014);
           float windBand = vnoiseS(vec2(alongC * 0.032, acrossC * 0.22));
           float scallopCol = 0.5 + 0.5 * sin(alongC * 0.72 + vnoiseS(vec2(alongC * 0.045, acrossC * 0.14)) * 2.6);

           vec3 troughSand = vec3(0.35, 0.20, 0.10);
           vec3 slopeSand  = vec3(0.68, 0.46, 0.24);
           vec3 crestSand  = vec3(0.92, 0.73, 0.46);

           vec3 sandCol = mix(troughSand, slopeSand, smoothstep(0.05, 0.72, heightFrac * 0.68 + coarseVar * 0.34));
           // Distinct wind-sorted terracotta-ochre mineral streaks & macro wind-wave bands!
           sandCol = mix(sandCol, vec3(0.50, 0.29, 0.14), windBand * 0.34 * windwardMask);
           sandCol = mix(sandCol, troughSand * 1.15, (1.0 - scallopCol) * 0.22 * windwardMask * (1.0 - smoothstep(160.0, 440.0, sandDist)));
           sandCol = mix(sandCol, crestSand, clamp(pixelCrestness * 0.85 + heightFrac * 0.18, 0.0, 1.0));

           // Smooth delicate avalanche streaks strictly on steep lee slip-faces
           vec2 downSlope = normalize(vec2(sandN.x, sandN.z) + vec2(0.0001));
           vec2 acrossSlope = vec2(-downSlope.y, downSlope.x);
           float uAcross = dot(vSandWorldPos.xz, acrossSlope);
           float uDown = dot(vSandWorldPos.xz, downSlope);
           float avalancheN = vnoiseS(vec2(uAcross * 0.65, uDown * 0.14));
           float avalancheStreak = smoothstep(0.56, 0.86, avalancheN) * leeMask;
           sandCol = mix(sandCol, troughSand * 1.12, avalancheStreak * 0.32);

           // Shot 3 animated sand rivulets streaming delicately down sunlit slopes
           float rivuletMask = 0.0;
           if (uTremor > 0.01) {
             float sunFacingRiv = smoothstep(-0.08, 0.22, dot(sandN, uSunDir));
             float flow = uDown * 1.15 - uTime * 4.2;
             float nStr = vnoiseS(vec2(uAcross * 4.2 + vnoiseS(vec2(uAcross, flow) * 0.65) * 1.4, flow * 0.45));
             float fineStr = vnoiseS(vec2(uAcross * 10.0, flow * 2.0));
             rivuletMask = smoothstep(0.52, 0.82, nStr * 0.68 + fineStr * 0.36) * smoothstep(0.03, 0.14, sandSlope) * sunFacingRiv * uTremor * (1.0 - smoothstep(26.0, 140.0, sandDist));
             sandCol = mix(sandCol, troughSand * 0.78, rivuletMask * 0.48);
           }

           // Subtle contact occlusion under woman & walker talons
           float wFootD = length(vSandWorldPos.xz - uWomanPos.xz);
           float contactAO = mix(0.46, 1.0, smoothstep(0.18, 0.85, wFootD));
           for (int i = 0; i < 6; i++) {
             float wkD = length(vSandWorldPos.xz - uWalkerLegs[i].xz);
             contactAO = min(contactAO, mix(0.42, 1.0, smoothstep(2.4, 9.0, wkD)));
           }
           diffuseColor.rgb = sandCol * contactAO;`
        )
        .replace(
          '#include <normal_fragment_maps>',
          `#include <normal_fragment_maps>
           // Reset normal to exact per-pixel analytical macro dune normal in view space (ZERO polygon grid teeth!)
           vec3 sandPerturbedW = sandN;

           // DAYTIME SAND OVERHAUL:
           // - Analytical 4-scale wind ripples + crescentic scallops scaled ~4x stronger by day (25-35 deg sun)!
           // - Strictly applied to SUNLIT windward faces (sunFaceMask) so shadowed lee faces remain velvety smooth
           //   with ZERO pale streaks bleeding across the foreground ridge terminator!
           float dayElevFactor = smoothstep(0.10, 0.42, uSunDir.y);
           float rippleStrength = mix(0.24, 0.96, dayElevFactor);
           float sunFaceMask = smoothstep(0.05, 0.30, dot(sandN, uSunDir));
           float crestGuard = mix(1.0, 0.14, smoothstep(0.16, 0.68, pixelCrestness));
           float rFade = windwardMask * sunFaceMask * crestGuard * (1.0 - smoothstep(220.0, 460.0, sandDist));
           float rippleSelfShadow = 1.0;

           if (rFade > 0.004) {
             vec3 rel = evalSandReliefGradAndOcc(vSandWorldPos.xz, sandDist, uSunDir.xz);
             vec3 worldPerturb = vec3(rel.x, 0.0, rel.y) * (rippleStrength * rFade);
             float pLen = length(worldPerturb);
             if (pLen > 0.58) worldPerturb *= (0.58 / pLen);
             sandPerturbedW = normalize(sandN + worldPerturb);

             float sunVisR = smoothstep(-0.02, 0.10, uSunDir.y);
             float troughWeight = mix(0.22, 0.52, dayElevFactor);
             rippleSelfShadow = 1.0 - clamp(rel.z * troughWeight * rFade * sunVisR, 0.0, 0.48);

             // Crisp mineral darkening inside daytime ripple & scallop troughs + subtle pale ridge highlight!
             float crestTint = clamp(dot(rel.xy, normalize(uSunDir.xz + vec2(0.0001))) * 0.14 * dayElevFactor * rFade, -0.14, 0.16);
             diffuseColor.rgb *= (1.0 + crestTint - clamp(rel.z * 0.30 * dayElevFactor * rFade, 0.0, 0.32));
           }

           if (rivuletMask > 0.01) {
             float rv = sin(uAcross * 26.0 + uTime * 3.0) * 0.06 * rivuletMask;
             sandPerturbedW = normalize(sandPerturbedW + vec3(acrossSlope.x * rv, 0.0, acrossSlope.y * rv));
           }
           normal = normalize((viewMatrix * vec4(sandPerturbedW, 0.0)).xyz);`
        )
        .replace(
          '#include <lights_fragment_end>',
          `#include <lights_fragment_end>
           // True Oren-Nayar mineral sand BRDF evaluated with PERTURBED multi-scale rippled normal!
           vec3 V_on = normalize(cameraPosition - vSandWorldPos);
           float onMult = orenNayarRatio(sandPerturbedW, V_on, uSunDir, 0.75);
           reflectedLight.directDiffuse *= clamp(onMult, 0.62, 1.38) * rippleSelfShadow;
           reflectedLight.directSpecular *= rippleSelfShadow;`
        )
        .replace(
          '#include <dithering_fragment>',
          `
          vec3 V_s = normalize(cameraPosition - vSandWorldPos);
          vec3 N_s = sandPerturbedW;
          float sunUpS = smoothstep(-0.04, 0.09, uSunDir.y);
          float macroSunSlope = dot(sandN, uSunDir);
          float sunSlope = dot(N_s, uSunDir);

          // Lee faces stay richly shadowed by day (smooth per-pixel terminator, ~12-16% cool slate-ochre shadow!)
          float coolShadeMask = smoothstep(0.22, -0.08, macroSunSlope);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * 0.42 + uShadowCool * 0.34, coolShadeMask * 0.74);

          // Broad opposition backscatter brightening (looking away from sun) + subtle grazing-angle darkening!
          float ndvS = max(dot(N_s, V_s), 0.0);
          float opposition = pow(max(dot(V_s, uSunDir), 0.0001), 2.0) * 0.24 * sunUpS;
          float grazingDark = mix(0.86, 1.0, smoothstep(0.0, 0.34, ndvS));
          gl_FragColor.rgb *= grazingDark;
          gl_FragColor.rgb += diffuseColor.rgb * uSunColor * opposition * rippleSelfShadow;

          // Razor-thin bright sunlit crest rim line (per-pixel smooth, zero grid锯齿!)
          float fresS = pow(clamp(1.0 - ndvS, 0.0001, 1.0), 3.4);
          float backSunS = pow(max(dot(-V_s, uSunDir), 0.0001), 2.2);
          float razorCrest = pow(clamp(pixelCrestness, 0.0001, 1.0), 2.2);
          gl_FragColor.rgb += uSunColor * fresS * (0.14 + 0.54 * backSunS) * (0.20 + 0.80 * razorCrest) * sunUpS * rippleSelfShadow;
          gl_FragColor.rgb += uSunColor * razorCrest * smoothstep(-0.04, 0.45, macroSunSlope) * 0.44 * sunUpS;

          gl_FragColor.rgb += uSunColor * rivuletMask * 0.22 * sunUpS;

          // SPARSE VIEW-DEPENDENT QUARTZ SPARKLE near camera, fading cleanly with distance!
          float sparkleFade = (1.0 - smoothstep(10.0, 48.0, sandDist)) * smoothstep(0.3, 1.4, sandDist) * sunUpS * rippleSelfShadow;
          if (sparkleFade > 0.005) {
            vec3 Hs = normalize(uSunDir + V_s);
            vec2 uvA = vSandWorldPos.xz * 78.0;
            vec2 cellA = floor(uvA);
            vec2 rndA = hash22S(cellA);
            float dotA = smoothstep(0.28, 0.04, length(fract(uvA) - (0.2 + rndA * 0.6)));
            vec3 mNA = normalize(N_s + vec3(rndA.x - 0.5, 0.14, rndA.y - 0.5) * 0.92);
            float glA = pow(max(dot(mNA, Hs), 0.0001), 240.0) * dotA * step(0.68, hash21S(cellA + 17.3));

            vec2 uvB = vSandWorldPos.xz * 42.0;
            vec2 cellB = floor(uvB);
            vec2 rndB = hash22S(cellB + 43.1);
            float dotB = smoothstep(0.24, 0.04, length(fract(uvB) - (0.2 + rndB * 0.6)));
            vec3 mNB = normalize(N_s + vec3(rndB.x - 0.5, 0.15, rndB.y - 0.5) * 0.88);
            float glB = pow(max(dot(mNB, Hs), 0.0001), 210.0) * dotB * step(0.76, hash21S(cellB + 91.7));

            float ndlS = smoothstep(-0.02, 0.35, sunSlope);
            gl_FragColor.rgb += uSunColor * vec3(1.65, 1.42, 1.15) * (glA * 3.8 + glB * 2.8) * sparkleFade * ndlS;
          }

          // Physically-based sky-matched aerial perspective + low height fog
          gl_FragColor.rgb = applyAtmosphere(gl_FragColor.rgb, vSandWorldPos, cameraPosition, 1.0);

          #include <dithering_fragment>`
        );
    };

    mat.customProgramCacheKey = () => `sand_on_${isOuter ? 1 : 0}`;
    return mat;
  }

  const innerMat = makeTerrainMaterial(false);
  const outerMat = makeTerrainMaterial(true);

  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  innerMesh.receiveShadow = true;
  innerMesh.frustumCulled = false;

  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  outerMesh.receiveShadow = true;
  outerMesh.frustumCulled = false;

  group.add(outerMesh, innerMesh);

  const craters = createWalkerCraterSystem();
  group.add(craters.mesh);

  const veils = createCrestVeils();
  group.add(veils.mesh);

  function update(womanPos, walkerLegs) {
    const snapInX = Math.round(womanPos.x / INNER_STEP) * INNER_STEP;
    const snapInZ = Math.round((womanPos.z - 22.0) / INNER_STEP) * INNER_STEP;
    innerMat.userData.uGridOffset.value.set(snapInX, snapInZ);
    sharedTerrainUniforms.uInnerCenter.value.set(snapInX, snapInZ);

    const snapOutX = Math.round(womanPos.x / OUTER_STEP) * OUTER_STEP;
    const snapOutZ = Math.round((womanPos.z - 450.0) / OUTER_STEP) * OUTER_STEP;
    outerMat.userData.uGridOffset.value.set(snapOutX, snapOutZ);

    sharedTerrainUniforms.uWomanPos.value.copy(womanPos);
    for (let i = 0; i < 6; i++) {
      sharedTerrainUniforms.uWalkerLegs.value[i].copy(walkerLegs[i]);
    }
    veils.update(womanPos);
  }

  return {
    group,
    update,
    stampWalkerCrater: craters.stamp,
    clearCraters: craters.clear,
    setVeilQuality: veils.setQuality,
  };
}

function createCrestVeils() {
  const MAX_VEILS = 54;
  const geo = new THREE.PlaneGeometry(1, 1, 8, 2);
  const posAttr = geo.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const y = posAttr.getY(i);
    posAttr.setZ(i, Math.sin((x + 0.5) * Math.PI) * 0.18);
    posAttr.setY(i, y + 0.5);
  }

  const offsets = new Float32Array(MAX_VEILS * 4);
  const sizes = new Float32Array(MAX_VEILS * 3);

  const instGeo = new THREE.InstancedBufferGeometry();
  instGeo.index = geo.index;
  instGeo.attributes.position = geo.attributes.position;
  instGeo.attributes.uv = geo.attributes.uv;
  instGeo.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 4));
  instGeo.setAttribute('aSize', new THREE.InstancedBufferAttribute(sizes, 3));
  instGeo.instanceCount = MAX_VEILS;

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
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
      attribute vec4 aOffset;
      attribute vec3 aSize;
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying float vSeed;
      void main() {
        vUv = uv;
        vSeed = aOffset.w;
        float ang = -0.32 + sin(vSeed * 11.7) * 0.30;
        float ca = cos(ang), sa = sin(ang);
        vec3 local = vec3(position.x * aSize.x, position.y * aSize.y, position.z * aSize.x * 0.22);
        local.z += sin(uv.x * 4.8 - uTime * aSize.z + vSeed * 17.0) * 0.72 * uv.y;
        vec3 rot = vec3(local.x * ca - local.z * sa, local.y, local.x * sa + local.z * ca);
        vec3 wp = aOffset.xyz + rot;
        vWorldPos = wp;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying float vSeed;
      ${GLSL_ATMOSPHERE_CHUNK}

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
      void main() {
        vec2 flowUv = vec2(vUv.x * 4.0 - uTime * 0.88 + vSeed * 5.0, vUv.y * 2.2);
        float wisp = smoothstep(0.28, 0.82, vnoise(flowUv) * 0.65 + vnoise(flowUv * 2.4 + vec2(-uTime * 0.45, 2.3)) * 0.35);
        float edgeX = smoothstep(0.0, 0.28, vUv.x) * smoothstep(1.0, 0.72, vUv.x);
        float edgeY = smoothstep(0.0, 0.24, vUv.y) * smoothstep(1.0, 0.08, vUv.y);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float sunUpV = smoothstep(-0.02, 0.10, uSunDir.y);
        float sunBack = pow(max(dot(-V, uSunDir), 0.0001), 2.4);
        vec3 col = mix(uHazeBase * 0.85, uSunColor * 1.15, (0.28 + 0.65 * sunBack) * sunUpV);
        col = applyAtmosphere(col, vWorldPos, cameraPosition, 0.82);
        float distFade = smoothstep(3.5, 16.0, length(cameraPosition - vWorldPos));
        float alpha = wisp * edgeX * edgeY * distFade * (0.08 + 0.14 * sunBack * sunUpV + 0.05 * sunUpV);
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new THREE.Mesh(instGeo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 3;

  const slots = [];
  for (let i = 0; i < MAX_VEILS; i++) {
    const isCrest = i < 32;
    const s = (i * 1.6180339) % 1;
    const s2 = ((i * 7.319 + 0.37) % 1);
    slots.push({
      isCrest,
      relX: isCrest ? (s - 0.5) * 260 : (s - 0.5) * 90,
      relZ: isCrest ? 28 - s2 * 210 : 18 - s2 * 75,
      w: isCrest ? 26 + s * 34 : 10 + s * 16,
      h: isCrest ? 2.4 + s2 * 3.8 : 0.7 + s2 * 1.1,
      speed: 1.5 + s * 2.0,
      seed: i * 0.37,
    });
  }

  let initialized = false;
  function update(womanPos) {
    if (initialized) return;
    initialized = true;
    for (let i = 0; i < MAX_VEILS; i++) {
      const sl = slots[i];
      const wx = womanPos.x + sl.relX;
      let wz = womanPos.z + sl.relZ;
      if (sl.isCrest) {
        let bestZ = wz, bestH = getDuneHeight(wx, wz);
        for (let k = -3; k <= 3; k++) {
          const tz = wz + k * 5.0;
          const th = getDuneHeight(wx, tz);
          if (th > bestH) { bestH = th; bestZ = tz; }
        }
        wz = bestZ;
      }
      offsets[i * 4 + 0] = wx;
      offsets[i * 4 + 1] = getDuneHeight(wx, wz) - 0.2;
      offsets[i * 4 + 2] = wz;
      offsets[i * 4 + 3] = sl.seed;
      sizes[i * 3 + 0] = sl.w;
      sizes[i * 3 + 1] = sl.h;
      sizes[i * 3 + 2] = sl.speed;
    }
    instGeo.attributes.aOffset.needsUpdate = true;
    instGeo.attributes.aSize.needsUpdate = true;
  }

  function setQuality(tier) {
    instGeo.instanceCount = tier === 'low' ? 24 : tier === 'medium' ? 38 : MAX_VEILS;
  }

  return { mesh, update, setQuality };
}
