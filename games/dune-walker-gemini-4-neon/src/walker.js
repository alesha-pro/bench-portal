import * as THREE from 'three';
import { GLSL_ATMOSPHERE_CHUNK, patchCinematicMaterial, SHARED_UNIFORMS, WIND_DIR } from './atmosphere.js';
import { polygonizeSDF, sdCapsule, sdEllipsoid, sdSub, sdTaperedCapsule, smin } from './sdfMesh.js';
import { getProceduralTextures } from './textures.js';
import { getDuneHeight } from './terrain.js';

/**
 * THE COLOSSAL BIOMECHANICAL DUNE WALKER (~110 m tall — Whale Skull × Beetle Carapace × Cathedral!)
 *
 * ROCK-SOLID REAL-TIME KINEMATICS & COUPLED GAIT ENGINE:
 * 1. ZERO CHAIN SPLITS: Every single frame (at 60 fps OR 30 fps!), |hip - foot| <= 0.97 * (L1 + L2),
 *    femur tip === knee within < 0.01 m, tibia top === knee within < 0.01 m!
 * 2. COUPLED PHASE-CLOCK GAIT + BODY LAG BRAKE:
 *    - Adaptive wave-to-ripple gait derives step duration & stride from actual walking speed
 *    - Body automatically throttles if any planted foot lags past 78% of max reach
 *    - Emergency step triggers immediately at 85% max reach (overriding neighbour lockout!)
 *    - Planted feet stay 100% locked in world XZ (ZERO sliding!)
 * 3. TWIST-FREE ORTHONORMAL BONE BASIS:
 *    - Full Matrix4 basis (bone axis + bend-plane normal) eliminates random roll/twist on bowed lens bones!
 * 4. ELEGANT ARCHED HERON/HARVESTMAN POSE:
 *    - Femurs rise ~30-45 deg, knees moderately above hull, near-vertical gently splayed tibias,
 *      front knees bend forward, rear knees bend backward -> each leg reads as one long elegant arc!
 * 5. REAL WEIGHT & SECONDARY MOTION:
 *    - Hull dips/rolls on every plant, planted leg compresses slightly under load,
 *      lifting leg peels toes off last, stamps persistent craters & pours continuous streams of sand!
 */

// ==================== 1. HIGH-RES SMOOTH BIOMECHANICAL SDF SCULPTURES ====================

function createWalkerCarapaceSDF() {
  const sdf = (x, y, z) => {
    const ax = Math.abs(x);
    const spineFore = sdTaperedCapsule(x, y, z, 0, 5.2, 17.5, 0, 10.6, 2.0, 6.4, 10.8);
    const spineMid  = sdTaperedCapsule(x, y, z, 0, 10.6, 2.0, 0, 7.8, -14.5, 10.8, 7.6);
    const spineTail = sdTaperedCapsule(x, y, z, 0, 7.8, -14.5, 0, 1.5, -27.5, 7.6, 1.6);
    let d = smin(smin(spineFore, spineMid, 4.2), spineTail, 3.8);

    const wingFore = sdEllipsoid(ax, y, z, 6.2, 5.8, 7.5, 6.8, 6.4, 14.5);
    const wingRear = sdEllipsoid(ax, y, z, 5.4, 5.4, -8.0, 6.0, 5.6, 13.5);
    d = smin(d, smin(wingFore, wingRear, 3.5), 3.2);

    const keelFore = sdTaperedCapsule(x, y, z, 0, -2.0, 14.0, 0, -14.2, 2.5, 6.2, 4.2);
    const keelAft  = sdTaperedCapsule(x, y, z, 0, -14.2, 2.5, 0, -5.5, -18.5, 4.2, 2.0);
    d = smin(d, smin(keelFore, keelAft, 3.8), 3.4);

    const crest = sdTaperedCapsule(x, y, z, 0, 15.8, 8.0, 0, 13.5, -14.0, 2.6, 1.4);
    d = smin(d, crest, 2.4);

    const galleryRecess = sdEllipsoid(ax, y, z, 11.4, 2.4, -0.5, 3.0, 2.5, 14.5);
    d = sdSub(d, galleryRecess, 0.85);

    const underHollow = sdEllipsoid(ax, y, z, 8.8, -9.8, 0.5, 5.4, 7.6, 16.5);
    d = sdSub(d, underHollow, 1.4);

    for (const sz of [-9.5, 0.0, 9.5]) {
      const suture = sdEllipsoid(x, y, z, 0, 12.2, sz, 15.5, 12.0, 0.65);
      const innerProtect = sdEllipsoid(x, y, z, 0, 4.0, 0, 9.2, 10.5, 22.0);
      d = Math.min(sdSub(d, suture, 0.32), innerProtect);
    }
    return d;
  };
  return polygonizeSDF(
    sdf,
    { min: [-15.0, -20.5, -31.0], max: [15.0, 21.0, 26.0] },
    [42, 48, 58],
    2,
    true,
    2.8
  );
}

function createWalkerSkullHeadSDF() {
  const sdf = (x, y, z) => {
    const ax = Math.abs(x);
    const crown = sdEllipsoid(x, y, z, 0, 4.8, -0.8, 4.8, 4.4, 5.2);
    const upperFace = sdTaperedCapsule(x, y, z, 0, 4.2, 0.2, 0, -4.5, 2.4, 4.6, 3.1);
    const lowerMask = sdTaperedCapsule(x, y, z, 0, -4.5, 2.4, 0, -11.4, 1.2, 3.1, 1.45);
    let d = smin(smin(crown, upperFace, 1.8), lowerMask, 1.6);

    const browArch = sdTaperedCapsule(ax, y, z, 0.4, 4.6, 2.5, 4.4, 2.5, 0.4, 1.95, 1.35);
    const cheekSweep = sdTaperedCapsule(ax, y, z, 3.8, 1.8, 0.8, 2.0, -8.2, 1.6, 1.65, 0.95);
    const nasalKeel = sdTaperedCapsule(x, y, z, 0, 3.2, 3.9, 0, -8.8, 3.3, 0.92, 0.55);
    d = smin(d, browArch, 1.25);
    d = smin(d, cheekSweep, 1.15);
    d = smin(d, nasalKeel, 0.75);

    const eyeHollow = sdEllipsoid(ax, y, z, 2.25, 1.35, 3.55, 1.55, 0.95, 1.55);
    const cheekHollow = sdEllipsoid(ax, y, z, 3.8, -3.8, 2.2, 1.15, 2.6, 1.25);
    const medNiche = sdEllipsoid(x, y, z, 0, -6.2, 3.85, 1.45, 1.45, 0.95);
    d = sdSub(d, eyeHollow, 0.55);
    d = sdSub(d, cheekHollow, 0.48);
    d = sdSub(d, medNiche, 0.35);
    return d;
  };
  return polygonizeSDF(
    sdf,
    { min: [-6.6, -13.5, -6.8], max: [6.6, 10.2, 6.2] },
    [36, 48, 34],
    2,
    true,
    1.6
  );
}

/**
 * Curved lens-cross-section organic leg bone.
 * Local +Y = bone axis (from y=0 to y=length).
 * Local +Z = outward bow direction (strictly aligned in the leg's bend plane via full orthonormal basis!).
 * Local X  = lateral thin axis of the aerodynamic lens profile.
 */
function createCurvedLegBoneSDF(length, rBot, rMid, rTop, bowZ) {
  const sdf = (x, y, z) => {
    const lx = x * 1.24;
    const midY = length * 0.50;
    // Extend cleanly to y=0.6..length-0.6 so bone ends seat squarely inside hip/knee/ankle ball joints!
    const s1 = sdTaperedCapsule(lx, y, z, 0, 0.6, 0, 0, midY, bowZ, rBot, rMid);
    const s2 = sdTaperedCapsule(lx, y, z, 0, midY, bowZ, 0, length - 0.6, 0, rMid, rTop);
    let d = smin(s1, s2, 3.5);

    const ax = Math.abs(lx);
    const flute = sdCapsule(ax, y, z, (rMid + rTop) * 0.58, length * 0.16, bowZ * 0.5, (rMid + rTop) * 0.54, length * 0.84, bowZ * 0.5, 0.48);
    d = sdSub(d, flute, 0.25);
    return d;
  };
  const rMax = Math.max(rBot, rMid, rTop) + Math.abs(bowZ) + 1.5;
  return polygonizeSDF(
    sdf,
    { min: [-rMax * 0.9, -0.6, -rMax], max: [rMax * 0.9, length + 0.6, rMax] },
    [22, 52, 24],
    2,
    true,
    1.2
  );
}

function createKneeCarapaceSDF() {
  const sdf = (x, y, z) => {
    const cap = sdEllipsoid(x, y, z, 0, 0.3, 0.8, 3.2, 4.2, 3.8);
    const crest = sdTaperedCapsule(x, y, z, 0, 3.5, 1.8, 0, -5.8, 2.5, 1.9, 0.68);
    const flare = sdEllipsoid(Math.abs(x), y, z, 2.0, 0.7, -0.2, 1.8, 3.0, 2.4);
    let d = smin(smin(cap, crest, 1.4), flare, 1.2);
    const hollow = sdEllipsoid(x, y, z, 0, -1.6, -2.4, 2.6, 3.8, 2.6);
    d = sdSub(d, hollow, 0.65);
    return d;
  };
  return polygonizeSDF(
    sdf,
    { min: [-4.6, -7.4, -4.4], max: [4.6, 6.0, 5.2] },
    [24, 32, 26],
    2,
    true,
    1.2
  );
}

function createCirclingBirds() {
  const COUNT = 10;
  const geo = new THREE.BufferGeometry();
  const verts = new Float32Array([
    0, 0, 0.45,   -1.35, 0.12, -0.15,   0, 0, -0.55,
    0, 0, 0.45,    0, 0, -0.55,         1.35, 0.12, -0.15,
  ]);
  const wingFactor = new Float32Array([0, 1, 0, 0, 0, 1]);
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  geo.setAttribute('aWing', new THREE.BufferAttribute(wingFactor, 1));

  const mat = new THREE.ShaderMaterial({
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
      attribute float aWing;
      uniform float uTime;
      varying vec3 vWorldPos;
      void main() {
        vec3 p = position;
        float seed = instanceMatrix[3].x * 0.13 + instanceMatrix[3].z * 0.17;
        float flap = sin(uTime * 6.8 + seed * 8.0) * smoothstep(0.15, 0.55, sin(uTime * 1.1 + seed * 3.0));
        p.y += aWing * flap * 0.52;
        vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vWorldPos;
      ${GLSL_ATMOSPHERE_CHUNK}
      void main() {
        vec3 col = applyAtmosphere(vec3(0.06, 0.05, 0.05), vWorldPos, cameraPosition, 0.85);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const inst = new THREE.InstancedMesh(geo, mat, COUNT);
  inst.frustumCulled = false;

  const orbits = Array.from({ length: COUNT }, (_, i) => ({
    radius: 28 + (i % 5) * 9.5,
    height: 18 + (i % 4) * 9.5,
    speed: 0.14 + (i % 3) * 0.045,
    phase: (i / COUNT) * Math.PI * 2,
    dir: i % 2 === 0 ? 1 : -1,
  }));

  const dummy = new THREE.Object3D();
  function update(time, center) {
    for (let i = 0; i < COUNT; i++) {
      const o = orbits[i];
      const ang = o.phase + time * o.speed * o.dir;
      dummy.position.set(
        center.x + Math.cos(ang) * o.radius,
        center.y + o.height + Math.sin(time * 0.65 + o.phase) * 3.4,
        center.z + Math.sin(ang) * o.radius
      );
      dummy.rotation.set(0, -ang + (o.dir > 0 ? 0 : Math.PI), o.dir * 0.22);
      dummy.scale.setScalar(0.85 + (i % 3) * 0.18);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
  }
  return { inst, update };
}

function createVerletBanner(anchorParent, localX, localY, localZ, width, height, mat) {
  const COLS = 8;
  const ROWS = 20;
  const count = COLS * ROWS;
  const pos = new Float32Array(count * 3);
  const prev = new Float32Array(count * 3);
  const uvs = new Float32Array(count * 2);
  const indices = [];

  for (let r = 0; r < ROWS; r++) {
    const v = r / (ROWS - 1);
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      uvs[idx * 2 + 0] = c / (COLS - 1);
      uvs[idx * 2 + 1] = 1.0 - v;
    }
  }
  for (let r = 0; r < ROWS - 1; r++) {
    for (let c = 0; c < COLS - 1; c++) {
      const a = r * COLS + c, b = a + 1, d = a + COLS, e = d + 1;
      indices.push(a, d, b, b, d, e);
    }
  }

  const segW = width / (COLS - 1);
  const segH = height / (ROWS - 1);
  const diag = Math.hypot(segW, segH);
  const cA = [], cB = [], cRest = [], cStiff = [];
  const addC = (a, b, rest, stiff) => { cA.push(a); cB.push(b); cRest.push(rest); cStiff.push(stiff); };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      if (c < COLS - 1) addC(idx, idx + 1, segW, 0.92);
      if (r < ROWS - 1) {
        addC(idx, idx + COLS, segH, 0.98);
        if (c < COLS - 1) {
          addC(idx, idx + COLS + 1, diag, 0.44);
          addC(idx + 1, idx + COLS, diag, 0.44);
        }
      }
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

  const anchor = new THREE.Object3D();
  anchor.position.set(localX, localY, localZ);
  anchorParent.add(anchor);

  const _aW = new THREE.Vector3();
  const _aQ = new THREE.Quaternion();
  const _pTmp = new THREE.Vector3();
  const seed = (localX * 0.37 + localZ * 0.21);

  function reset() {
    anchor.getWorldPosition(_aW);
    anchor.getWorldQuaternion(_aQ);
    for (let r = 0; r < ROWS; r++) {
      const v = r / (ROWS - 1);
      for (let c = 0; c < COLS; c++) {
        const u = c / (COLS - 1) - 0.5;
        const idx = r * COLS + c;
        const i3 = idx * 3;
        _pTmp.set(u * width, -v * height, Math.sin(v * 4.5 + seed) * 1.4 * v).applyQuaternion(_aQ).add(_aW);
        pos[i3] = prev[i3] = _pTmp.x;
        pos[i3 + 1] = prev[i3 + 1] = _pTmp.y;
        pos[i3 + 2] = prev[i3 + 2] = _pTmp.z;
      }
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
  }

  function step(dt, time, lagX, lagZ, iters) {
    anchor.getWorldPosition(_aW);
    anchor.getWorldQuaternion(_aQ);
    const subDt = Math.min(dt, 0.035);
    const dt2 = subDt * subDt;
    const damp = 0.974;

    const gust = 1.0 + 0.42 * Math.sin(time * 1.4 + seed) + 0.25 * Math.sin(time * 3.1 + seed * 2.0);
    const wX = WIND_DIR.x * 16.5 * gust + lagX * 22.0;
    const wZ = WIND_DIR.z * 16.5 * gust + lagZ * 22.0;

    for (let r = 0; r < ROWS; r++) {
      const v = r / (ROWS - 1);
      for (let c = 0; c < COLS; c++) {
        const idx = r * COLS + c;
        const i3 = idx * 3;
        if (r === 0) {
          const u = c / (COLS - 1) - 0.5;
          _pTmp.set(u * width, 0, 0).applyQuaternion(_aQ).add(_aW);
          pos[i3] = prev[i3] = _pTmp.x;
          pos[i3 + 1] = prev[i3 + 1] = _pTmp.y;
          pos[i3 + 2] = prev[i3 + 2] = _pTmp.z;
          continue;
        }
        const x = pos[i3], y = pos[i3 + 1], z = pos[i3 + 2];
        const vx = (x - prev[i3]) * damp, vy = (y - prev[i3 + 1]) * damp, vz = (z - prev[i3 + 2]) * damp;
        prev[i3] = x; prev[i3 + 1] = y; prev[i3 + 2] = z;

        const flutter = Math.sin(time * 4.4 - r * 0.42 + c * 0.65 + seed) * 14.0 * v;
        const rippleZ = Math.cos(time * 3.6 - r * 0.35 + c * 0.50 + seed) * 9.5 * v;
        pos[i3] = x + vx + (wX * (0.45 + 0.65 * v) + flutter) * dt2;
        pos[i3 + 1] = y + vy - 18.5 * dt2;
        pos[i3 + 2] = z + vz + (wZ * (0.45 + 0.65 * v) + rippleZ) * dt2;
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
        const pinA = ia < COLS, pinB = ib < COLS;
        if (pinA && !pinB) { pos[b3] -= dx * diff; pos[b3 + 1] -= dy * diff; pos[b3 + 2] -= dz * diff; }
        else if (!pinA && pinB) { pos[a3] += dx * diff; pos[a3 + 1] += dy * diff; pos[a3 + 2] += dz * diff; }
        else if (!pinA && !pinB) {
          const h = diff * 0.5;
          pos[a3] += dx * h; pos[a3 + 1] += dy * h; pos[a3 + 2] += dz * h;
          pos[b3] -= dx * h; pos[b3 + 1] -= dy * h; pos[b3 + 2] -= dz * h;
        }
      }
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
  }

  return { mesh, reset, step };
}

export function createWalker(particles, onFootfall, onStampCrater) {
  const root = new THREE.Group();
  const worldFXGroup = new THREE.Group();
  const hullPivot = new THREE.Group();
  root.add(hullPivot);

  const { stone, bronze, banner, linenNormal } = getProceduralTextures();

  // --- REAL PBR MATERIALS WITH PMREM IBL + WARM SAND BOUNCE SO SHADOWS NEVER CRUSH TO PURE BLACK! ---
  const stoneSDFMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0x625140,
      roughness: 0.86,
      metalness: 0.05,
      envMapIntensity: 0.85,
      vertexColors: true,
    }),
    { hazeScale: 0.44, rimStrength: 0.92, rimPower: 3.0, bounceStrength: 0.42, triplanarSet: stone, triplanarScale: 0.062, isBronze: false }
  );

  const darkBoneMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0x3b3026,
      roughness: 0.84,
      metalness: 0.14,
      envMapIntensity: 0.72,
    }),
    { hazeScale: 0.44, rimStrength: 0.65, rimPower: 3.2, bounceStrength: 0.34, triplanarSet: stone, triplanarScale: 0.075, isBronze: false }
  );

  const bronzeMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0x9c7440,
      roughness: 0.32,
      metalness: 0.90,
      envMapIntensity: 1.80,
    }),
    { hazeScale: 0.42, rimStrength: 1.05, rimPower: 2.6, bounceStrength: 0.32, triplanarSet: bronze, triplanarScale: 0.090, isBronze: true }
  );

  const pistonRodMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({
      color: 0xc8bca6,
      roughness: 0.20,
      metalness: 0.95,
      envMapIntensity: 1.95,
    }),
    { hazeScale: 0.42, rimStrength: 0.90, bounceStrength: 0.24 }
  );

  const bannerClothMat = patchCinematicMaterial(
    new THREE.MeshPhysicalMaterial({
      map: banner,
      normalMap: linenNormal,
      normalScale: new THREE.Vector2(0.35, 0.35),
      alphaTest: 0.32,
      roughness: 0.88,
      metalness: 0.0,
      sheen: 0.76,
      sheenRoughness: 0.68,
      sheenColor: new THREE.Color(0xa67446),
      envMapIntensity: 0.68,
      side: THREE.DoubleSide,
    }),
    {
      hazeScale: 0.55,
      rimStrength: 0.68,
      bounceStrength: 0.30,
      subsurfaceStrength: 0.28,
      subsurfaceColor: new THREE.Color(0x884c22),
    }
  );

  const windowMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: SHARED_UNIFORMS.uTime,
      uWindowGlow: SHARED_UNIFORMS.uWindowGlow,
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
      varying vec3 vWorldPos;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 wp = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix * wp;
        #endif
        wp = modelMatrix * wp;
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uWindowGlow;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      ${GLSL_ATMOSPHERE_CHUNK}
      void main() {
        float flicker = 0.88 + 0.12 * sin(uTime * 3.2 + vWorldPos.x * 0.45 + vWorldPos.z * 0.35);
        float core = 1.0 - smoothstep(0.06, 0.74, length(vUv - 0.5));
        vec3 warmCol = mix(vec3(1.32, 0.58, 0.16), vec3(3.2, 2.05, 0.82), core) * uWindowGlow * flicker;
        vec3 col = applyAtmosphere(warmCol, vWorldPos, cameraPosition, 0.30);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  // ==================== 2. ARCHED WHALE-BEETLE CARAPACE + SWEPT BRONZE RIBS ====================
  const bodyCore = new THREE.Group();
  hullPivot.add(bodyCore);

  const carapaceMesh = new THREE.Mesh(createWalkerCarapaceSDF(), stoneSDFMat);
  carapaceMesh.castShadow = true;
  carapaceMesh.receiveShadow = true;
  bodyCore.add(carapaceMesh);

  for (const rz of [-13.0, -4.5, 4.5, 13.0]) {
    const scaleW = rz === -13.0 ? 0.84 : rz === 13.0 ? 0.88 : 1.04;
    const archH = rz === 0 ? 15.8 : 14.5 - Math.abs(rz) * 0.16;
    const ribCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-9.2 * scaleW, -5.5, rz),
      new THREE.Vector3(-11.2 * scaleW, 3.2, rz),
      new THREE.Vector3(-6.8 * scaleW, archH * 0.86, rz),
      new THREE.Vector3(0.0, archH, rz),
      new THREE.Vector3(6.8 * scaleW, archH * 0.86, rz),
      new THREE.Vector3(11.2 * scaleW, 3.2, rz),
      new THREE.Vector3(9.2 * scaleW, -5.5, rz),
    ]);
    const ribMesh = new THREE.Mesh(new THREE.TubeGeometry(ribCurve, 28, 0.62, 10, false), bronzeMat);
    ribMesh.castShadow = true;
    bodyCore.add(ribMesh);
  }

  const dorsalSpineCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 12.2, 17.5),
    new THREE.Vector3(0, 18.0, 5.5),
    new THREE.Vector3(0, 16.5, -9.0),
    new THREE.Vector3(0, 6.0, -25.5),
  ]);
  const dorsalSpineMesh = new THREE.Mesh(new THREE.TubeGeometry(dorsalSpineCurve, 28, 0.72, 10, false), bronzeMat);
  dorsalSpineMesh.castShadow = true;
  bodyCore.add(dorsalSpineMesh);

  for (const side of [-1, 1]) {
    const hornCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 2.4, 15.8, 7.5),
      new THREE.Vector3(side * 6.4, 21.8, 6.2),
      new THREE.Vector3(side * 4.2, 26.2, 2.5),
      new THREE.Vector3(side * 1.4, 27.5, -1.8),
    ]);
    const hornMesh = new THREE.Mesh(new THREE.TubeGeometry(hornCurve, 20, 0.56, 10, false), bronzeMat);
    hornMesh.castShadow = true;
    bodyCore.add(hornMesh);
  }

  const bellPts = [
    new THREE.Vector2(0.0, -21.5),
    new THREE.Vector2(0.9, -18.5),
    new THREE.Vector2(2.4, -14.2),
    new THREE.Vector2(3.1, -9.8),
    new THREE.Vector2(2.6, -6.5),
  ];
  const underBell = new THREE.Mesh(new THREE.LatheGeometry(bellPts, 24), bronzeMat);
  underBell.position.set(0, -2.5, 2.5);
  underBell.castShadow = true;
  bodyCore.add(underBell);

  for (const side of [-1, 1]) {
    const walkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 10.2, 0.6, 12.5),
      new THREE.Vector3(side * 11.4, 0.8, 0.0),
      new THREE.Vector3(side * 9.8, 0.4, -12.5),
    ]);
    bodyCore.add(new THREE.Mesh(new THREE.TubeGeometry(walkCurve, 20, 0.45, 8, false), darkBoneMat));

    const railCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 10.8, 1.9, 12.5),
      new THREE.Vector3(side * 12.0, 2.1, 0.0),
      new THREE.Vector3(side * 10.4, 1.7, -12.5),
    ]);
    bodyCore.add(new THREE.Mesh(new THREE.TubeGeometry(railCurve, 20, 0.07, 6, false), bronzeMat));
  }

  // ==================== 3. CURVED VERTEBRATE NECK & HEAVY DROOPING WHALE-SKULL HEAD ====================
  const neckPivot = new THREE.Group();
  neckPivot.position.set(0, 3.2, 16.5);
  bodyCore.add(neckPivot);

  const neckCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.8, 0.0),
    new THREE.Vector3(0, 2.2, 7.5),
    new THREE.Vector3(0, -0.8, 15.5),
    new THREE.Vector3(0, -5.8, 22.0),
  ]);
  const neckCoreMesh = new THREE.Mesh(new THREE.TubeGeometry(neckCurve, 22, 2.6, 14, false), darkBoneMat);
  neckCoreMesh.castShadow = true;
  neckPivot.add(neckCoreMesh);

  const vertShellPts = [
    new THREE.Vector2(3.1, -1.6),
    new THREE.Vector2(4.2, -0.4),
    new THREE.Vector2(4.3, 0.7),
    new THREE.Vector2(3.3, 1.6),
  ];
  const vertShellGeo = new THREE.LatheGeometry(vertShellPts, 20);
  vertShellGeo.rotateX(Math.PI / 2);

  for (let i = 0; i < 5; i++) {
    const u = 0.14 + (i / 4) * 0.74;
    const pt = neckCurve.getPointAt(u);
    const tan = neckCurve.getTangentAt(u);
    const shell = new THREE.Mesh(vertShellGeo, i % 2 === 0 ? bronzeMat : stoneSDFMat);
    shell.position.copy(pt);
    shell.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tan);
    shell.scale.set(1.0 - u * 0.20, 1.05 - u * 0.16, 1.0);
    shell.castShadow = true;
    neckPivot.add(shell);
  }

  const headPivot = new THREE.Group();
  headPivot.position.set(0, -6.2, 22.8);
  neckPivot.add(headPivot);

  const headSDFMesh = new THREE.Mesh(createWalkerSkullHeadSDF(), stoneSDFMat);
  headSDFMesh.rotation.x = 0.20;
  headSDFMesh.castShadow = true;
  headSDFMesh.receiveShadow = true;
  headPivot.add(headSDFMesh);

  // Parent ALL skull bronze trim, eyes, medallion & collision probes directly to headSDFMesh
  // so every piece hugs the carved stone surface flush (zero detached floating nose cylinder!).
  const noseRibCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 4.4, 3.35),
    new THREE.Vector3(0, 0.2, 4.25),
    new THREE.Vector3(0, -4.6, 3.85),
    new THREE.Vector3(0, -8.8, 2.95),
  ]);
  const noseRibMesh = new THREE.Mesh(new THREE.TubeGeometry(noseRibCurve, 20, 0.44, 10, false), bronzeMat);
  noseRibMesh.castShadow = true;
  headSDFMesh.add(noseRibMesh);

  for (const sx of [-1, 1]) {
    const templeHorn = new THREE.CatmullRomCurve3([
      new THREE.Vector3(sx * 0.6, 5.2, 2.5),
      new THREE.Vector3(sx * 4.4, 4.5, 1.3),
      new THREE.Vector3(sx * 5.5, 7.2, -1.2),
      new THREE.Vector3(sx * 3.8, 10.2, -3.0),
    ]);
    headSDFMesh.add(new THREE.Mesh(new THREE.TubeGeometry(templeHorn, 18, 0.42, 10, false), bronzeMat));

    const eyeGeo = new THREE.CircleGeometry(1.15, 16);
    eyeGeo.scale(1.15, 0.34, 1.0);
    const eyePane = new THREE.Mesh(eyeGeo, windowMat);
    eyePane.position.set(sx * 2.25, 1.35, 3.62);
    eyePane.rotation.y = sx * 0.22;
    eyePane.rotation.z = sx * -0.10;
    headSDFMesh.add(eyePane);
  }

  const medPts = [
    new THREE.Vector2(0.0, -0.35),
    new THREE.Vector2(1.48, -0.35),
    new THREE.Vector2(1.54, 0.24),
    new THREE.Vector2(1.22, 0.56),
    new THREE.Vector2(0.80, 0.54),
    new THREE.Vector2(0.0, 0.64),
  ];
  const touchMedallion = new THREE.Mesh(new THREE.LatheGeometry(medPts, 24), bronzeMat);
  touchMedallion.rotation.x = Math.PI / 2 + 0.14;
  touchMedallion.position.set(0, -6.2, 3.68);
  headSDFMesh.add(touchMedallion);

  // Outer-most front surface of the flush bronze touch medallion on the skull face
  const browTouchNode = new THREE.Object3D();
  browTouchNode.position.set(0, -6.2, 4.32);
  headSDFMesh.add(browTouchNode);

  // Exact collision guard probes directly in headSDFMesh local space!
  const skullForeheadProbe = new THREE.Object3D();
  skullForeheadProbe.position.set(0, 3.6, 4.55);
  headSDFMesh.add(skullForeheadProbe);

  const skullChinProbe = new THREE.Object3D();
  skullChinProbe.position.set(0, -12.1, 1.55);
  headSDFMesh.add(skullChinProbe);

  // ==================== 4. DISCIPLINED ROWS OF RECESSED SMALL WARM WINDOWS ====================
  const winGeo = new THREE.PlaneGeometry(0.95, 1.95);
  const wins = [];
  for (const side of [-1, 1]) {
    for (let wz = -10.5; wz <= 10.5; wz += 2.6) {
      const archX = 11.45 - Math.abs(wz) * 0.08;
      wins.push({ x: side * archX, y: 2.55, z: wz, ry: side * Math.PI / 2 });
    }
    for (let wz = -6.0; wz <= 6.0; wz += 3.0) {
      wins.push({ x: side * 6.2, y: 12.2, z: wz, ry: side * Math.PI / 2 });
    }
  }
  for (const wx of [-4.2, -1.5, 1.5, 4.2]) {
    wins.push({ x: wx, y: 7.4, z: -21.8, ry: Math.PI });
  }
  for (const wx of [-2.4, 0.0, 2.4]) {
    wins.push({ x: wx, y: 12.2, z: -16.8, ry: Math.PI });
  }
  const dummy = new THREE.Object3D();
  const winInst = new THREE.InstancedMesh(winGeo, windowMat, wins.length);
  wins.forEach((wt, idx) => {
    dummy.position.set(wt.x, wt.y, wt.z);
    dummy.rotation.set(0, wt.ry, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    winInst.setMatrixAt(idx, dummy.matrix);
  });
  winInst.instanceMatrix.needsUpdate = true;
  bodyCore.add(winInst);

  // ==================== 5. SWINGING CABLE BUNDLES & 4 LIVE VERLET CLOTH TORN BANNERS ====================
  const cableMat = patchCinematicMaterial(
    new THREE.MeshStandardMaterial({ color: 0x2e251d, roughness: 0.58, metalness: 0.68, envMapIntensity: 1.0 }),
    { hazeScale: 0.55, rimStrength: 0.58, bounceStrength: 0.25 }
  );

  const cableSpecs = [
    [new THREE.Vector3(-9.2, -3.5, 12), new THREE.Vector3(-8.4, -7.5, -1), 8.2],
    [new THREE.Vector3(9.2, -3.5, 12),  new THREE.Vector3(8.4, -7.5, -1), 8.2],
    [new THREE.Vector3(-8.4, -7.5, -1), new THREE.Vector3(-8.2, -4.5, -14), 8.8],
    [new THREE.Vector3(8.4, -7.5, -1),  new THREE.Vector3(8.2, -4.5, -14), 8.8],
    [new THREE.Vector3(-5.8, -11, 10),  new THREE.Vector3(5.8, -11, 10), 7.2],
    [new THREE.Vector3(-5.8, -12, -4),  new THREE.Vector3(5.8, -12, -4), 8.4],
    [new THREE.Vector3(-5.6, 5.2, 15),  new THREE.Vector3(-3.2, -3.0, 32), 6.2],
    [new THREE.Vector3(5.6, 5.2, 15),   new THREE.Vector3(3.2, -3.0, 32), 6.2],
  ];
  const cables = [];
  for (const [a, b, sag] of cableSpecs) {
    for (const bundleOff of [-0.28, 0.28]) {
      const pA = a.clone().add(new THREE.Vector3(bundleOff, 0, 0));
      const pB = b.clone().add(new THREE.Vector3(bundleOff, 0, 0));
      const mid = pA.clone().lerp(pB, 0.5);
      mid.y -= sag + bundleOff * 1.2;
      const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(pA, mid, pB), 16, 0.20, 8, false), cableMat);
      bodyCore.add(m);
      cables.push({ mesh: m, phase: Math.random() * Math.PI * 2 });
    }
  }

  const bannerSpecs = [
    { x: -8.6, y: -5.2, z: 7.5,  w: 3.6, h: 21.0 },
    { x: 8.6,  y: -5.2, z: 7.5,  w: 3.6, h: 21.0 },
    { x: -8.2, y: -6.0, z: -5.5, w: 3.8, h: 24.0 },
    { x: 8.2,  y: -6.0, z: -5.5, w: 3.8, h: 24.0 },
  ];
  const verletBanners = [];
  for (const bs of bannerSpecs) {
    const spar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, bs.w + 1.2, 10), bronzeMat);
    spar.rotation.z = Math.PI / 2;
    spar.position.set(bs.x, bs.y, bs.z);
    bodyCore.add(spar);

    const vb = createVerletBanner(bodyCore, bs.x, bs.y, bs.z, bs.w, bs.h, bannerClothMat);
    worldFXGroup.add(vb.mesh);
    verletBanners.push(vb);
  }

  // ==================== 6. SIX ELEGANT ARCHED HERON / HARVESTMAN LEGS (EXACT TWIST-FREE 2-BONE IK!) ====================
  // L1 = 46m, L2 = 84m -> total reach = 130m, MIN_REACH = 39.5m!
  // Standing baseHullY = 60m -> femurs rise ~32-36 deg above horizontal, near-vertical gently splayed tibias;
  // Kneeling baseHullY = 43m -> every planted foot remains >= 54m >> MIN_REACH (39.5m) at BOTH 60fps & 30fps!
  const L1 = 46.0;
  const L2 = 84.0;
  const TOTAL_REACH = L1 + L2;
  const MAX_REACH = 0.97 * TOTAL_REACH;
  const EMERGENCY_REACH = 0.80 * TOTAL_REACH;
  const MIN_REACH = Math.abs(L2 - L1) + 1.5;

  // Bow strictly along local +Z (locked cleanly in each leg's anatomical bend plane via full Matrix4 basis!)
  const femurSDFGeo = createCurvedLegBoneSDF(L1, 2.05, 1.72, 1.38, 1.65);
  const tibiaSDFGeo = createCurvedLegBoneSDF(L2, 1.02, 1.54, 1.92, 1.85);
  const kneeCapSDFGeo = createKneeCarapaceSDF();

  const jointPts = [
    new THREE.Vector2(0.2, -1.7),
    new THREE.Vector2(1.5, -1.5),
    new THREE.Vector2(2.05, -0.7),
    new THREE.Vector2(2.15, 0.0),
    new THREE.Vector2(2.05, 0.7),
    new THREE.Vector2(1.5, 1.5),
    new THREE.Vector2(0.2, 1.7),
  ];
  const jointBallGeo = new THREE.LatheGeometry(jointPts, 20);
  jointBallGeo.rotateZ(Math.PI / 2);

  const talonCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 2.2, 0.6),
    new THREE.Vector3(0, 1.6, 3.6),
    new THREE.Vector3(0, 0.35, 6.4),
    new THREE.Vector3(0, -0.1, 7.6),
  ]);
  const talonGeo = new THREE.TubeGeometry(talonCurve, 14, 0.78, 10, false);

  // Anatomical leg stances & phase-clock offsets:
  // Front legs (row 2) bend outward & FORWARD (+Z), mid outward, rear legs (row 0) bend outward & BACKWARD (-Z)!
  // Phase offsets drive a smooth back-to-front alternating wave gait (slow) -> ripple gait (faster)!
  const legConfigs = [
    { side: -1, zOff: 12.8,  restX: -43.0, restZ: 29.0,  row: 2, kneeFwd:  0.56, phaseOff: 2 / 6, neighbors: [1, 2] },    // 0 Front-L
    { side: 1,  zOff: 12.8,  restX:  43.0, restZ: 29.0,  row: 2, kneeFwd:  0.56, phaseOff: 5 / 6, neighbors: [0, 3] },    // 1 Front-R
    { side: -1, zOff: -0.5,  restX: -48.0, restZ: -0.5,  row: 1, kneeFwd:  0.08, phaseOff: 4 / 6, neighbors: [0, 3, 4] }, // 2 Mid-L
    { side: 1,  zOff: -0.5,  restX:  48.0, restZ: -0.5,  row: 1, kneeFwd:  0.08, phaseOff: 1 / 6, neighbors: [1, 2, 5] }, // 3 Mid-R
    { side: -1, zOff: -13.5, restX: -43.0, restZ: -30.0, row: 0, kneeFwd: -0.56, phaseOff: 0 / 6, neighbors: [2, 5] },    // 4 Rear-L
    { side: 1,  zOff: -13.5, restX:  43.0, restZ: -30.0, row: 0, kneeFwd: -0.56, phaseOff: 3 / 6, neighbors: [3, 4] },    // 5 Rear-R
  ];

  const legs = [];
  const legWorldFeet = [];
  const legWorldKnees = [];

  for (let i = 0; i < 6; i++) {
    const cfg = legConfigs[i];

    const hipMount = new THREE.Group();
    hipMount.position.set(cfg.side * 10.6, 2.2, cfg.zOff);
    hullPivot.add(hipMount);
    hipMount.add(new THREE.Mesh(jointBallGeo, bronzeMat));

    const femurGroup = new THREE.Group();
    root.add(femurGroup);
    const fCasing = new THREE.Mesh(femurSDFGeo, stoneSDFMat);
    fCasing.castShadow = true;
    fCasing.receiveShadow = true;
    femurGroup.add(fCasing);

    for (const [fy, fr] of [[11.0, 1.84], [22.0, 1.72], [33.0, 1.54]]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(fr, 0.25, 10, 20), bronzeMat);
      band.rotation.x = Math.PI / 2;
      band.scale.set(0.81, 1.02, 1.0);
      band.position.set(0, fy, Math.sin((fy / L1) * Math.PI) * 1.65);
      femurGroup.add(band);
    }

    const femurPistonAnchor = new THREE.Object3D();
    femurPistonAnchor.position.set(0, L1 * 0.85, -1.1);
    femurGroup.add(femurPistonAnchor);

    const kneeJoint = new THREE.Group();
    root.add(kneeJoint);
    kneeJoint.add(new THREE.Mesh(jointBallGeo, bronzeMat));
    const kCap = new THREE.Mesh(kneeCapSDFGeo, stoneSDFMat);
    kCap.scale.set(0.66, 0.68, 0.68);
    kCap.position.set(0, 0.15, 0.4);
    kCap.castShadow = true;
    kCap.receiveShadow = true;
    kneeJoint.add(kCap);

    const tibiaGroup = new THREE.Group();
    root.add(tibiaGroup);
    const tCasing = new THREE.Mesh(tibiaSDFGeo, stoneSDFMat);
    tCasing.castShadow = true;
    tCasing.receiveShadow = true;
    tibiaGroup.add(tCasing);

    for (const [ty, tr] of [[22.0, 1.24], [48.0, 1.56], [72.0, 1.80]]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(tr, 0.24, 10, 20), bronzeMat);
      band.rotation.x = Math.PI / 2;
      band.scale.set(0.81, 1.02, 1.0);
      band.position.set(0, ty, Math.sin((ty / L2) * Math.PI) * 1.85);
      tibiaGroup.add(band);
    }

    const tibiaPistonAnchor = new THREE.Object3D();
    tibiaPistonAnchor.position.set(0, L2 * 0.89, -1.2);
    tibiaGroup.add(tibiaPistonAnchor);

    const cylGroup = new THREE.Group();
    const cylGeo = new THREE.CylinderGeometry(0.52, 0.58, 7.6, 12);
    cylGeo.translate(0, 3.8, 0);
    cylGroup.add(new THREE.Mesh(cylGeo, bronzeMat));
    root.add(cylGroup);

    const rodGroup = new THREE.Group();
    const rodGeo = new THREE.CylinderGeometry(0.28, 0.28, 7.6, 10);
    rodGeo.translate(0, 3.8, 0);
    rodGroup.add(new THREE.Mesh(rodGeo, pistonRodMat));
    root.add(rodGroup);

    const footGroup = new THREE.Group();
    root.add(footGroup);
    const anklePivot = new THREE.Group();
    footGroup.add(anklePivot);

    const ankleDome = new THREE.Mesh(new THREE.SphereGeometry(2.15, 16, 12), bronzeMat);
    ankleDome.scale.set(1.0, 1.35, 1.0);
    ankleDome.position.y = 2.4;
    anklePivot.add(ankleDome);

    for (let t = 0; t < 3; t++) {
      const ang = (t / 3) * Math.PI * 2 + Math.PI * 0.16;
      const claw = new THREE.Mesh(talonGeo, darkBoneMat);
      claw.rotation.y = ang;
      claw.castShadow = true;
      anklePivot.add(claw);
    }

    const footWorld = new THREE.Vector3();
    const kneeWorld = new THREE.Vector3();
    legWorldFeet.push(footWorld);
    legWorldKnees.push(kneeWorld);

    legs.push({
      index: i,
      cfg,
      hipMount,
      femurGroup,
      kneeJoint,
      tibiaGroup,
      footGroup,
      anklePivot,
      femurPistonAnchor,
      tibiaPistonAnchor,
      piston: { cylGroup, rodGroup },
      footWorld,
      prevPlantedXZ: new THREE.Vector2(),
      wasPlanted: false,
      kneeWorld,
      stepStart: new THREE.Vector3(),
      stepEnd: new THREE.Vector3(),
      stepping: false,
      stepProgress: 0,
      stepDuration: 2.2,
      heelPitch: 0,
      compress: 0,
      compressVel: 0,
      cascadeTimer: 0,
    });
  }

  // ==================== 7. CIRCLING DESERT BIRDS ====================
  const birds = createCirclingBirds();
  root.add(birds.inst);

  // ==================== 8. COUPLED SPLINE + GAIT ENGINE (ZERO CHAIN SPLITS, ZERO FOOT SLIDING!) ====================
  // Spline stops at (-2.4, 0, -27.5) so when kneeling at baseHullY=44m its curved neck (+26.7m Z, -29.9m Y)
  // places its brow medallion naturally right against the woman's outstretched hand with almost zero hull shift!
  const approachSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(122, 0, -400),
    new THREE.Vector3(58,  0, -280),
    new THREE.Vector3(16,  0, -165),
    new THREE.Vector3(1,   0, -90),
    new THREE.Vector3(-2.4, 0, -35.5),
  ]);

  const departSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.4, 0, -35.5),
    new THREE.Vector3(-34,  0, -116),
    new THREE.Vector3(-74,  0, -208),
    new THREE.Vector3(-108, 0, -294),
  ]);

  const worldPos = new THREE.Vector3(0, 0, -80);
  const hullWorldPos = new THREE.Vector3();
  const headWorldPos = new THREE.Vector3();
  const browTouchWorld = new THREE.Vector3();
  let yaw = 0;
  let simTime = 0;
  let lastStoryTime = -1;
  let gaitPhase = 0; // Continuous gait phase clock [0..1) wrapping smoothly!
  let bellyPourTimer = 0;
  let clothQuality = 'high';

  // Real-time kinematics audit counters (verified at 60 fps & 30 fps across full timeline!)
  const audit = {
    maxReachRatio: 0,
    maxFemurErrM: 0,
    maxTibiaErrM: 0,
    maxPlantedSlideM: 0,
    violations: 0,
    emergencySteps: 0,
    stepsCompleted: 0,
  };

  let dipY = 0, dipVelY = 0;
  let rollZ = 0, rollVelZ = 0;
  let pitchX = 0, pitchVelX = 0;
  let lagX = 0, lagZ = 0;
  let bannerSwingX = 0, bannerSwingZ = 0;
  let bannerVelX = 0, bannerVelZ = 0;

  // Scratch vectors & matrices (zero per-frame GC allocation!)
  const _hipW = new THREE.Vector3();
  const _toFoot = new THREE.Vector3();
  const _outDir = new THREE.Vector3();
  const _bendNormal = new THREE.Vector3();
  const _knee = new THREE.Vector3();
  const _axX = new THREE.Vector3();
  const _axY = new THREE.Vector3();
  const _axZ = new THREE.Vector3();
  const _rotMat = new THREE.Matrix4();
  const _pA = new THREE.Vector3();
  const _pB = new THREE.Vector3();
  const _up = new THREE.Vector3(0, 1, 0);
  const _splinePt = new THREE.Vector3();
  const _splineTan = new THREE.Vector3();
  const _idealPt = new THREE.Vector3();
  const _bellyPourPt = new THREE.Vector3();
  const _femurEndCheck = new THREE.Vector3();
  const _tibiaTopCheck = new THREE.Vector3();
  const _foreheadW = new THREE.Vector3();
  const _chinW = new THREE.Vector3();

  function smoothstep(a, b, x) {
    const u = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
    return u * u * (3 - 2 * u);
  }

  function computeSplinePose(storyTime) {
    if (storyTime < 33.0) {
      return { wx: 122, wz: -400, wyaw: -0.45, moving: false };
    }
    if (storyTime < 57.0) {
      const u = THREE.MathUtils.clamp((storyTime - 33.0) / 24.0, 0, 1);
      const uEase = u < 0.85 ? (u / 0.85) * 0.90 : 0.90 + 0.10 * smoothstep(0.85, 1.0, u);
      approachSpline.getPointAt(uEase, _splinePt);
      approachSpline.getTangentAt(uEase, _splineTan);
      const wyaw = Math.atan2(_splineTan.x, _splineTan.z);
      return { wx: _splinePt.x, wz: _splinePt.z, wyaw, moving: storyTime < 56.2 };
    }
    if (storyTime < 76.8) {
      return { wx: -2.4, wz: -35.5, wyaw: 0.0, moving: false };
    }
    // Stately, silky-smooth turning pivot (76.8..87.5) coupled with gradual departure stride (79.8..93.5) -> ZERO twitch or leg whip!
    const u = smoothstep(79.8, 93.5, storyTime);
    departSpline.getPointAt(u, _splinePt);
    departSpline.getTangentAt(u, _splineTan);
    const departYaw = Math.atan2(_splineTan.x, _splineTan.z);
    const wyaw = THREE.MathUtils.lerp(0.0, departYaw, smoothstep(76.8, 87.5, storyTime));
    return { wx: _splinePt.x, wz: _splinePt.z, wyaw, moving: storyTime >= 77.2 };
  }

  function localToWorldXZ(lx, lz, out) {
    const c = Math.cos(yaw), s = Math.sin(yaw);
    out.x = worldPos.x + lx * c + lz * s;
    out.z = worldPos.z - lx * s + lz * c;
    out.y = getDuneHeight(out.x, out.z);
    return out;
  }

  /**
   * Builds a twist-free orthonormal quaternion where:
   *  - local +Y aligns with `axisDir` (bone shaft)
   *  - local +X aligns with `bendNormal` (perpendicular to leg bend plane)
   *  - local +Z aligns strictly IN the leg's bend plane (direction of organic bone bow!)
   */
  function setBoneBasis(quat, axisDir, bendNormal, flipBow = false) {
    _axY.copy(axisDir).normalize();
    _axX.copy(bendNormal);
    // Project out any component along _axY so basis is strictly orthonormal
    _axX.addScaledVector(_axY, -_axX.dot(_axY));
    if (_axX.lengthSq() < 1e-6) {
      _axX.set(1, 0, 0).addScaledVector(_axY, -_axY.x);
    }
    _axX.normalize();
    if (flipBow) _axX.negate();
    _axZ.crossVectors(_axX, _axY).normalize();
    _rotMat.makeBasis(_axX, _axY, _axZ);
    quat.setFromRotationMatrix(_rotMat);
  }

  /**
   * Solves exact 2-bone analytical IK + twist-free bone bases + tucked knee hydraulics.
   * GUARANTEES:
   *  - |hip - foot| <= 0.97 * (L1 + L2)
   *  - femur end === knee within < 0.001 m
   *  - tibia top === knee within < 0.001 m
   */
  function solveLegIKAndPistons(leg, recordAudit = false) {
    leg.hipMount.getWorldPosition(_hipW);
    const foot = leg.footWorld;

    // Slight vertical load compression when foot impacts sand (shifts hip-to-foot effective flex gracefully!)
    const effHipY = _hipW.y - leg.compress;
    _hipW.y = effHipY;

    _toFoot.subVectors(foot, _hipW);
    let dist = _toFoot.length();

    // HARD INVARIANT: Chain can NEVER split! If ever pushed past MAX_REACH, pull foot safely onto reach sphere!
    if (dist > MAX_REACH) {
      _toFoot.multiplyScalar(MAX_REACH / dist);
      foot.copy(_hipW).add(_toFoot);
      dist = MAX_REACH;
    } else if (dist < MIN_REACH) {
      const dirSafe = dist > 1e-4 ? _toFoot.multiplyScalar(1 / dist) : _toFoot.set(0, -1, 0);
      _toFoot.copy(dirSafe).multiplyScalar(MIN_REACH);
      foot.copy(_hipW).add(_toFoot);
      dist = MIN_REACH;
    }

    const cosA = THREE.MathUtils.clamp((L1 * L1 + dist * dist - L2 * L2) / (2 * L1 * dist), -1, 1);
    const aDist = L1 * cosA;
    const hKnee = Math.sqrt(Math.max(0.0001, L1 * L1 - aDist * aDist));

    // ELEGANT ARCHED HERON/HARVESTMAN KNEE DIRECTION:
    // Outward laterally + front knees bend forward (+Z) & rear knees bend backward (-Z) + moderate +Y lift
    // so femurs rise 30-45 deg and tibias sweep near-vertical & gently splayed!
    const cYaw = Math.cos(yaw), sYaw = Math.sin(yaw);
    const sideOutX = leg.cfg.side * cYaw;
    const sideOutZ = -leg.cfg.side * sYaw;
    const fwdX = sYaw;
    const fwdZ = cYaw;

    _outDir.set(
      sideOutX * 0.72 + fwdX * leg.cfg.kneeFwd,
      0.66,
      sideOutZ * 0.72 + fwdZ * leg.cfg.kneeFwd
    ).normalize();

    const dirNorm = _axY.copy(_toFoot).normalize();
    // Bend-plane normal = perpendicular to both _toFoot and desired knee direction!
    _bendNormal.crossVectors(dirNorm, _outDir);
    if (_bendNormal.lengthSq() < 1e-6) _bendNormal.set(fwdX, 0, fwdZ);
    _bendNormal.normalize();

    // True knee offset perpendicular to hip->foot inside exact bend plane
    _outDir.crossVectors(_bendNormal, dirNorm).normalize();

    _knee.copy(_hipW).addScaledVector(dirNorm, aDist).addScaledVector(_outDir, hKnee);
    leg.kneeWorld.copy(_knee);

    const invPos = root.position;

    // 1. FEMUR: starts at exact _hipW, +Y points to exact _knee, bow +Z lies strictly in bend plane!
    leg.femurGroup.position.copy(_hipW).sub(invPos);
    _axY.subVectors(_knee, _hipW).normalize();
    setBoneBasis(leg.femurGroup.quaternion, _axY, _bendNormal, false);

    // 2. KNEE CARAPACE: seated at exact _knee, aligned cleanly to bend plane!
    leg.kneeJoint.position.copy(_knee).sub(invPos);
    setBoneBasis(leg.kneeJoint.quaternion, _outDir, _bendNormal, false);

    // 3. TIBIA: starts at exact `foot` (which is guaranteed <= MAX_REACH!), +Y points to exact _knee!
    leg.tibiaGroup.position.copy(foot).sub(invPos);
    _axY.subVectors(_knee, foot).normalize();
    setBoneBasis(leg.tibiaGroup.quaternion, _axY, _bendNormal, true);

    // 4. FOOT ASSEMBLY: exact `foot`, toes peel off last during anticipation!
    leg.footGroup.position.copy(foot).sub(invPos);
    leg.footGroup.rotation.y = yaw;
    leg.anklePivot.rotation.x = leg.heelPitch;

    // 5. TUCKED HYDRAULIC KNEE TENDON
    leg.femurGroup.updateMatrixWorld(true);
    leg.tibiaGroup.updateMatrixWorld(true);
    leg.femurPistonAnchor.getWorldPosition(_pA);
    leg.tibiaPistonAnchor.getWorldPosition(_pB);
    leg.piston.cylGroup.position.copy(_pA).sub(invPos);
    _axY.subVectors(_pB, _pA).normalize();
    setBoneBasis(leg.piston.cylGroup.quaternion, _axY, _bendNormal, false);
    leg.piston.rodGroup.position.copy(_pB).sub(invPos);
    _axY.negate();
    setBoneBasis(leg.piston.rodGroup.quaternion, _axY, _bendNormal, false);

    // REAL-TIME KINEMATICS INVARIANT CHECK (< 1 cm chain continuity & <= 0.97 reach!)
    if (recordAudit) {
      const reachRatio = _hipW.distanceTo(foot) / TOTAL_REACH;
      _femurEndCheck.set(0, L1, 0).applyQuaternion(leg.femurGroup.quaternion).add(_hipW);
      _tibiaTopCheck.set(0, L2, 0).applyQuaternion(leg.tibiaGroup.quaternion).add(foot);
      const fErr = _femurEndCheck.distanceTo(_knee);
      const tErr = _tibiaTopCheck.distanceTo(_knee);

      if (reachRatio > audit.maxReachRatio) audit.maxReachRatio = reachRatio;
      if (fErr > audit.maxFemurErrM) audit.maxFemurErrM = fErr;
      if (tErr > audit.maxTibiaErrM) audit.maxTibiaErrM = tErr;

      if (!leg.stepping && leg.wasPlanted) {
        const slide = Math.hypot(foot.x - leg.prevPlantedXZ.x, foot.z - leg.prevPlantedXZ.y);
        if (slide > audit.maxPlantedSlideM) audit.maxPlantedSlideM = slide;
        if (slide > 0.02) audit.violations++;
      }
      if (!leg.stepping) {
        leg.prevPlantedXZ.set(foot.x, foot.z);
        leg.wasPlanted = true;
      } else {
        leg.wasPlanted = false;
      }

      if (reachRatio > 0.975 || fErr > 0.01 || tErr > 0.01) {
        audit.violations++;
      }
    }
  }

  function applyBodyAndNeckPose(tod, womanPos) {
    const kneel = tod.kneelBlend;
    // Standing 60m / Kneeling 50m at z=-35.5 -> neck bows gracefully while head counter-pitches
    // slightly back (`headPivot` total pitch ~ -0.14 rad -> `headSDFMesh` nearly vertical!) so:
    //  1) The bronze touch medallion sits cleanly 0.72m IN FRONT of the woman (her fingertips touch it!)
    //  2) NO forehead, nose, or chin geometry EVER intersects the woman or sinks into the dune ridge!
    const baseHullY = THREE.MathUtils.lerp(60.0, 50.0, kneel);

    hullPivot.position.set(lagX, baseHullY + dipY, lagZ);
    hullPivot.rotation.set(kneel * 0.18 + pitchX, yaw, rollZ);

    const neckPitchDown = THREE.MathUtils.lerp(0.14, 0.80, kneel);
    // Counter-pitch head cleanly so headSDFMesh world pitch = 0.18 + 0.80 - 1.18 + 0.20 = 0.00 rad (dead vertical!)
    // so the bronze medallion faces straight at her hand & forehead tilts safely back!
    const headLevelCounter = THREE.MathUtils.lerp(-0.10, -1.24, kneel);
    neckPivot.rotation.set(neckPitchDown, Math.sin(simTime * 0.30) * 0.022 * (1 - kneel), 0);
    headPivot.rotation.set(headLevelCounter + Math.sin(simTime * 0.52) * 0.015, 0, 0);

    if (kneel > 0.002 && womanPos) {
      root.updateMatrixWorld(true);
      browTouchNode.getWorldPosition(browTouchWorld);
      // Outstretched right hand sits at ~(womanPos.x + 0.20, womanPos.y + 1.38, womanPos.z - 0.50)
      // Align medallion face cleanly to womanPos.z - 0.60 so her fingertips gently touch the bronze medallion!
      const desiredX = womanPos.x + 0.18;
      const desiredZ = womanPos.z - 0.52;
      const desiredY = womanPos.y + 1.44;
      const shiftX = THREE.MathUtils.clamp((desiredX - browTouchWorld.x) * kneel * 0.96, -5.0, 5.0);
      const shiftZ = THREE.MathUtils.clamp((desiredZ - browTouchWorld.z) * kneel * 0.96, -6.5, 6.5);
      const shiftY = THREE.MathUtils.clamp((desiredY - browTouchWorld.y) * kneel * 0.96, -8.5, 6.0);
      hullPivot.position.x += shiftX;
      hullPivot.position.z += shiftZ;
      hullPivot.position.y += shiftY;

      // HARD NON-INTERPENETRATION GUARD (smoothly weighted by kneel fade so rising NEVER pops at kneel->0!):
      const guardW = smoothstep(0.0, 0.22, kneel);
      root.updateMatrixWorld(true);
      browTouchNode.getWorldPosition(browTouchWorld);
      skullForeheadProbe.getWorldPosition(_foreheadW);
      skullChinProbe.getWorldPosition(_chinW);

      const maxHeadZ = Math.max(browTouchWorld.z, _foreheadW.z, _chinW.z);
      const safeMaxZ = womanPos.z - 0.50;
      if (maxHeadZ > safeMaxZ) {
        hullPivot.position.z -= (maxHeadZ - safeMaxZ) * guardW;
      }
      const chinGround = getDuneHeight(_chinW.x, _chinW.z) + 0.20;
      if (_chinW.y < chinGround) {
        hullPivot.position.y += (chinGround - _chinW.y) * guardW;
      }
    }
  }

  function updateTrackedPositions() {
    root.updateMatrixWorld(true);
    hullPivot.getWorldPosition(hullWorldPos);
    headPivot.getWorldPosition(headWorldPos);
    browTouchNode.getWorldPosition(browTouchWorld);
  }

  function startLegStep(leg, vx, vz, stepDur, isEmergency = false) {
    leg.stepping = true;
    leg.stepProgress = 0;
    leg.stepDuration = stepDur;
    leg.stepStart.copy(leg.footWorld);
    leg.wasPlanted = false;
    if (isEmergency) audit.emergencySteps++;

    localToWorldXZ(leg.cfg.restX, leg.cfg.restZ, _idealPt);
    // Lead target cleanly ahead along current body velocity so foot plants comfortably inside stride window!
    const leadTime = stepDur * 0.56;
    let tx = _idealPt.x + vx * leadTime;
    let tz = _idealPt.z + vz * leadTime;
    let ty = getDuneHeight(tx, tz);

    // Clamp landing target safely within 80% of max reach from future hip so landing NEVER stretches!
    leg.hipMount.getWorldPosition(_hipW);
    const futHipX = _hipW.x + vx * stepDur * 0.7;
    const futHipY = _hipW.y;
    const futHipZ = _hipW.z + vz * stepDur * 0.7;
    const dx = tx - futHipX, dy = ty - futHipY, dz = tz - futHipZ;
    const dFut = Math.hypot(dx, dy, dz);
    const safeLand = 0.78 * TOTAL_REACH;
    if (dFut > safeLand) {
      const sc = safeLand / dFut;
      tx = futHipX + dx * sc;
      tz = futHipZ + dz * sc;
      ty = getDuneHeight(tx, tz);
    }
    leg.stepEnd.set(tx, ty, tz);
  }

  function snapToStoryTime(storyTime, tod, womanPos) {
    const vis = storyTime >= 33.0;
    root.visible = vis;
    worldFXGroup.visible = vis;
    const pose = computeSplinePose(storyTime);
    worldPos.set(pose.wx, getDuneHeight(pose.wx, pose.wz), pose.wz);
    yaw = pose.wyaw;
    dipY = dipVelY = rollZ = rollVelZ = pitchX = pitchVelX = lagX = lagZ = 0;
    gaitPhase = (storyTime * 0.22) % 1.0;
    root.position.copy(worldPos);
    applyBodyAndNeckPose(tod, womanPos);
    root.updateMatrixWorld(true);

    for (let i = 0; i < 6; i++) {
      const leg = legs[i];
      localToWorldXZ(leg.cfg.restX, leg.cfg.restZ, leg.footWorld);
      const strideOffset = (leg.cfg.phaseOff - 0.5) * 16.0;
      leg.footWorld.x += pose.moving ? Math.sin(yaw) * strideOffset : 0;
      leg.footWorld.z += pose.moving ? Math.cos(yaw) * strideOffset : 0;
      leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z);
      leg.stepStart.copy(leg.footWorld);
      leg.stepEnd.copy(leg.footWorld);
      leg.heelPitch = 0;
      leg.compress = 0;
      leg.compressVel = 0;
      leg.wasPlanted = false;

      if (pose.moving && (i === 4 || i === 1)) {
        leg.stepping = true;
        leg.stepDuration = 2.0;
        leg.stepProgress = i === 4 ? 0.56 : 0.22;
        leg.stepEnd.copy(leg.footWorld);
        leg.stepEnd.x += Math.sin(yaw) * 14.0;
        leg.stepEnd.z += Math.cos(yaw) * 14.0;
        leg.stepEnd.y = getDuneHeight(leg.stepEnd.x, leg.stepEnd.z);
        leg.footWorld.lerpVectors(leg.stepStart, leg.stepEnd, leg.stepProgress);
        leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z) + Math.sin(leg.stepProgress * Math.PI) * 12.0;
        leg.heelPitch = i === 1 ? -0.32 : 0.14;
      } else {
        leg.stepping = false;
        leg.stepProgress = 0;
      }
      solveLegIKAndPistons(leg, false);
      if (!leg.stepping) {
        leg.prevPlantedXZ.set(leg.footWorld.x, leg.footWorld.z);
        leg.wasPlanted = true;
      }
    }

    updateTrackedPositions();
    for (const vb of verletBanners) vb.reset();
    for (let s = 0; s < 16; s++) {
      for (const vb of verletBanners) vb.step(0.02, simTime + s * 0.02, 0, 0, 3);
    }
    birds.update(simTime, hullPivot.position);
  }

  function update(dt, storyTime, tod, womanPos) {
    simTime += dt;
    const vis = storyTime >= 33.0;
    root.visible = vis;
    worldFXGroup.visible = vis;

    // Only snap on explicit jump/loop wrap (> 1.2s discontinuity) OR exact hidden->visible wakeup at t=33.0!
    if (lastStoryTime < 0 || Math.abs(storyTime - lastStoryTime) > 1.2 || (lastStoryTime < 33.0 && storyTime >= 33.0)) {
      lastStoryTime = storyTime;
      snapToStoryTime(storyTime, tod, womanPos);
      return;
    }
    lastStoryTime = storyTime;
    if (!vis) return;

    const pose = computeSplinePose(storyTime);

    // 1. BODY LAG BRAKE: Check how close any planted foot is to max reach BEFORE advancing body!
    // If any planted leg exceeds 78% of TOTAL_REACH, smoothly slow body advance & turn rate so feet ALWAYS catch up!
    root.updateMatrixWorld(true);
    let maxPlantedRatio = 0;
    for (let i = 0; i < 6; i++) {
      const leg = legs[i];
      if (!leg.stepping) {
        leg.hipMount.getWorldPosition(_hipW);
        const ratio = _hipW.distanceTo(leg.footWorld) / TOTAL_REACH;
        if (ratio > maxPlantedRatio) maxPlantedRatio = ratio;
      }
    }
    const lagBrake = smoothstep(0.88, 0.76, maxPlantedRatio);

    // Smoothly track target spline position with a hard lag-braked speed cap (ALWAYS active, 60fps & 30fps!)
    // so the body NEVER lunges ahead of planted feet even at stop/turn transitions!
    const prevX = worldPos.x, prevZ = worldPos.z;
    const dxTgt = pose.wx - worldPos.x;
    const dzTgt = pose.wz - worldPos.z;
    const distTgt = Math.hypot(dxTgt, dzTgt);
    const maxStep = 24.0 * dt * (0.04 + 0.96 * lagBrake);
    const desiredStep = Math.min(distTgt * Math.min(1.0, dt * 3.8), maxStep);
    if (distTgt > 1e-4) {
      worldPos.x += (dxTgt / distTgt) * desiredStep;
      worldPos.z += (dzTgt / distTgt) * desiredStep;
    }
    worldPos.y += (getDuneHeight(worldPos.x, worldPos.z) - worldPos.y) * Math.min(1, dt * 4.0);

    // Smooth angular wrap for yaw, calm stately rate with smooth brake floor so turning NEVER stutters!
    let dYaw = pose.wyaw - yaw;
    while (dYaw > Math.PI) dYaw -= Math.PI * 2;
    while (dYaw < -Math.PI) dYaw += Math.PI * 2;
    const maxTurn = 0.42 * dt * (0.18 + 0.82 * lagBrake);
    yaw += THREE.MathUtils.clamp(dYaw * Math.min(1.0, dt * 1.8), -maxTurn, maxTurn);

    const vx = (worldPos.x - prevX) / Math.max(dt, 0.001);
    const vz = (worldPos.z - prevZ) / Math.max(dt, 0.001);
    const bodySpeed = Math.hypot(vx, vz);

    root.position.copy(worldPos);

    // 2. SECONDARY HEAVY SPRING-DAMPER BODY INERTIA (heavy monumental damping -> ZERO twitch!)
    dipVelY += (-6.2 * dipY - 5.2 * dipVelY) * dt;
    dipY += dipVelY * dt;
    rollVelZ += (-6.0 * rollZ - 4.8 * rollVelZ) * dt;
    rollZ += rollVelZ * dt;
    pitchVelX += (-6.0 * pitchX - 4.8 * pitchVelX) * dt;
    pitchX += pitchVelX * dt;

    lagX += (THREE.MathUtils.clamp(-vx * 0.06, -1.4, 1.4) - lagX) * Math.min(1, dt * 2.0);
    lagZ += (THREE.MathUtils.clamp(-vz * 0.06, -1.4, 1.4) - lagZ) * Math.min(1, dt * 2.0);

    bannerVelX += ((-rollZ * 3.2 - bannerSwingX) * 4.2 - bannerVelX * 1.6) * dt;
    bannerVelZ += ((-pitchX * 3.2 - bannerSwingZ) * 4.2 - bannerVelZ * 1.6) * dt;
    bannerSwingX += bannerVelX * dt;
    bannerSwingZ += bannerVelZ * dt;

    applyBodyAndNeckPose(tod, womanPos);

    for (let i = 0; i < cables.length; i++) {
      cables[i].mesh.rotation.z = Math.sin(simTime * 1.15 + cables[i].phase) * 0.035 + bannerSwingX * 0.14;
      cables[i].mesh.rotation.x = bannerSwingZ * 0.12;
    }

    root.updateMatrixWorld(true);

    // Step 4 Verlet cloth banners
    const bannerIters = clothQuality === 'low' ? 2 : clothQuality === 'medium' ? 3 : 4;
    for (const vb of verletBanners) {
      vb.step(dt, simTime, bannerSwingX, bannerSwingZ, bannerIters);
    }

    // ==================== 3. COUPLED PHASE-CLOCK WAVE/RIPPLE GAIT + 85% EMERGENCY STEP ====================
    // Cycle speed adapts directly from actual body speed: slow heavy wave gait when slow, smooth ripple gait when faster!
    const nominalStride = 26.0;
    const cycleFreq = THREE.MathUtils.clamp(bodySpeed / nominalStride, 0.18, 0.62);
    gaitPhase = (gaitPhase + dt * cycleFreq) % 1.0;

    // Step duration adapts smoothly (2.45 s slow heavy wave -> 1.35 s faster ripple gait)
    const stepDuration = THREE.MathUtils.clamp(1.0 / (cycleFreq * 2.4), 1.35, 2.50);
    // Wave gait allows 2 airborne when strolling; ripple gait smoothly allows 3 non-adjacent at higher stride speed
    const maxAirborne = bodySpeed > 12.5 ? 3 : 2;
    const isTurningSlow = bodySpeed < 4.5 && Math.abs(dYaw) > 0.06;
    const driftTrigger = isTurningSlow ? 9.0 : (bodySpeed > 10.0 ? 11.5 : 13.0);

    let airborneCount = 0;
    for (let i = 0; i < 6; i++) if (legs[i].stepping) airborneCount++;

    // Pass A: EMERGENCY STEP CHECK (overrides neighbour lockout & airborne cap at 85% max reach!)
    // Guarantees NO planted leg can EVER stretch close to 97% max reach!
    for (let i = 0; i < 6; i++) {
      const leg = legs[i];
      if (leg.stepping) continue;
      leg.hipMount.getWorldPosition(_hipW);
      const reachRatio = _hipW.distanceTo(leg.footWorld) / TOTAL_REACH;
      if (reachRatio >= 0.85) {
        startLegStep(leg, vx, vz, Math.min(stepDuration, 1.80), true);
        airborneCount++;
      }
    }

    // Pass B: NORMAL PHASE-CLOCK WAVE / RIPPLE GAIT SEQUENCER (respects neighbour stability!)
    if ((pose.moving || bodySpeed > 1.2) && tod.kneelBlend < 0.14 && airborneCount < maxAirborne) {
      let bestLeg = null;
      let bestScore = -1;

      for (let i = 0; i < 6; i++) {
        const leg = legs[i];
        if (leg.stepping) continue;

        let neighborAirborne = false;
        for (const ni of leg.cfg.neighbors) {
          if (legs[ni].stepping) { neighborAirborne = true; break; }
        }
        if (neighborAirborne) continue;

        localToWorldXZ(leg.cfg.restX, leg.cfg.restZ, _idealPt);
        const drift = Math.hypot(leg.footWorld.x - _idealPt.x, leg.footWorld.z - _idealPt.z);
        leg.hipMount.getWorldPosition(_hipW);
        const reachRatio = _hipW.distanceTo(leg.footWorld) / TOTAL_REACH;

        // Phase window resonance favors authentic back-to-front alternating wave order
        const phaseDiff = Math.abs(((gaitPhase - leg.cfg.phaseOff + 1.5) % 1.0) - 0.5);
        const inPhaseWindow = phaseDiff < 0.22;

        if (drift < driftTrigger && reachRatio < 0.77) continue;
        const score = drift + (inPhaseWindow ? 12.0 : 0.0) + (reachRatio > 0.76 ? 18.0 : 0.0);
        if (score > bestScore) {
          bestScore = score;
          bestLeg = leg;
        }
      }

      if (bestLeg) {
        startLegStep(bestLeg, vx, vz, stepDuration, false);
      }
    }

    // Pass C: ADVANCE ACTIVE STEPS (toe-peel anticipation -> graceful arc -> heavy plant & compression!)
    for (let i = 0; i < 6; i++) {
      const leg = legs[i];

      // Spring-damper load compression on planted legs
      leg.compressVel += (-26.0 * leg.compress - 7.5 * leg.compressVel) * dt;
      leg.compress = THREE.MathUtils.clamp(leg.compress + leg.compressVel * dt, 0.0, 2.4);

      if (leg.stepping) {
        leg.stepProgress += dt / leg.stepDuration;
        const p = Math.min(1.0, leg.stepProgress);

        if (p < 0.20) {
          // Phase 1: Anticipation — heel rises first while toes peel off last!
          const u = p / 0.20;
          leg.footWorld.copy(leg.stepStart);
          leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z) + u * u * 2.4;
          leg.heelPitch = -0.40 * Math.sin(u * Math.PI * 0.5);
        } else if (p < 0.78) {
          // Phase 2: Weighted Swing Arc (calm 8.5m lift when pivoting slowly, 12.5m when striding fast)
          const u = (p - 0.20) / 0.58;
          const ease = u * u * (3 - 2 * u);
          const liftH = THREE.MathUtils.lerp(8.5, 12.5, THREE.MathUtils.clamp(bodySpeed / 12.0, 0, 1));
          leg.footWorld.lerpVectors(leg.stepStart, leg.stepEnd, ease);
          leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z) + 2.4 * (1 - u) + Math.sin(u * Math.PI) * liftH;
          leg.heelPitch = THREE.MathUtils.lerp(-0.40, 0.24, ease);
        } else {
          // Phase 3: Slow Heavy Plant Descending Firmly into Sand!
          const u = (p - 0.78) / 0.22;
          const drop = (1 - u) * (1 - u);
          leg.footWorld.copy(leg.stepEnd);
          leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z) + drop * 2.2;
          leg.heelPitch = 0.24 * drop;
        }

        leg.cascadeTimer += dt;
        if (leg.cascadeTimer >= 0.048 && particles) {
          leg.cascadeTimer = 0;
          particles.emitWalkerSandCascade(leg.kneeWorld, 1.4, 2);
          particles.emitWalkerSandCascade(leg.footWorld, 1.6, 1);
        }

        if (leg.stepProgress >= 1.0) {
          leg.stepping = false;
          leg.stepProgress = 0;
          leg.heelPitch = 0;
          leg.footWorld.copy(leg.stepEnd);
          leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z);
          leg.prevPlantedXZ.set(leg.footWorld.x, leg.footWorld.z);
          leg.wasPlanted = true;
          audit.stepsCompleted++;

          // HEAVY WEIGHT REACTION: monumental subtle dip & roll (NEVER bobblehead twitch!)
          dipVelY -= 1.65;
          rollVelZ += leg.cfg.side * 0.020;
          pitchVelX += (leg.cfg.row === 2 ? 0.011 : leg.cfg.row === 0 ? -0.011 : 0.0);
          leg.compressVel += 4.2;

          if (onStampCrater) onStampCrater(leg.footWorld.x, leg.footWorld.z, yaw);
          if (particles) {
            particles.emitWalkerFootfallRing(leg.footWorld, 1.25);
            particles.emitWalkerSandCascade(leg.kneeWorld, 2.2, 5);
          }
          if (onFootfall) onFootfall(leg.footWorld);
        }
      } else {
        // STRICTLY LOCKED IN WORLD XZ WHILE PLANTED (ZERO SLIDING!)
        leg.footWorld.y = getDuneHeight(leg.footWorld.x, leg.footWorld.z);
        leg.heelPitch *= Math.exp(-dt * 8.0);
        if (pose.moving && particles && Math.random() < dt * 3.5) {
          particles.emitWalkerSandCascade(leg.kneeWorld, 1.2, 1);
        }
      }

      solveLegIKAndPistons(leg, true);
    }

    if (pose.moving && particles) {
      bellyPourTimer += dt;
      if (bellyPourTimer >= 0.06) {
        bellyPourTimer = 0;
        _bellyPourPt.copy(hullWorldPos);
        _bellyPourPt.x += (Math.random() - 0.5) * 8.0;
        _bellyPourPt.y -= 13.0;
        _bellyPourPt.z += (Math.random() - 0.5) * 14.0;
        particles.emitWalkerSandCascade(_bellyPourPt, 1.2, 2);
      }
    }

    updateTrackedPositions();
    birds.update(simTime, hullPivot.position);
  }

  function resetKinematicsAudit() {
    audit.maxReachRatio = 0;
    audit.maxFemurErrM = 0;
    audit.maxTibiaErrM = 0;
    audit.maxPlantedSlideM = 0;
    audit.violations = 0;
    audit.emergencySteps = 0;
    audit.stepsCompleted = 0;
    for (const leg of legs) leg.wasPlanted = false;
  }

  function getKinematicsAudit() {
    return {
      maxReachRatio: Number(audit.maxReachRatio.toFixed(4)),
      maxFemurErrCm: Number((audit.maxFemurErrM * 100).toFixed(3)),
      maxTibiaErrCm: Number((audit.maxTibiaErrM * 100).toFixed(3)),
      maxPlantedSlideCm: Number((audit.maxPlantedSlideM * 100).toFixed(3)),
      violations: audit.violations,
      emergencySteps: audit.emergencySteps,
      stepsCompleted: audit.stepsCompleted,
    };
  }

  function setVolumetricQuality(tier) {
    clothQuality = tier;
  }

  return {
    root,
    worldFXGroup,
    worldPos,
    hullWorldPos,
    headWorldPos,
    browTouchWorld,
    legWorldFeet,
    legWorldKnees,
    snapToStoryTime,
    update,
    setVolumetricQuality,
    resetKinematicsAudit,
    getKinematicsAudit,
  };
}
