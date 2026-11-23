import * as THREE from 'three';
import { GLSL_ATMOSPHERE_CHUNK, SHARED_UNIFORMS, WIND_DIR } from './atmosphere.js';
import { getDuneHeight, getDuneNormal } from './terrain.js';

/**
 * ZERO FLOATING BLOBS — PURE PHYSICAL DESERT SAND RIBBONS & POURING STREAMS:
 * Uses velocity-aligned elongated ribbon quads (InstancedMesh) instead of round sprite puffs!
 *  - Kind 1 (Pouring Streams): thin vertical falling streams of sand pouring continuously from
 *    the walker's arched belly & 6 slender joints straight down into the dunes!
 *  - Kind 2 (Ground-Skimming Streaks): long thin wind-sheared streaks hugging < 0.45 m above sand
 *    (footfall shockwave ground sprays, Shot 3 slope rivulets, & windblown desert drift!)
 */

export function createParticleSystem() {
  const MAX_STREAKS = 960;

  // Elongated unit ribbon plane (length along +Y from -0.5 to +0.5, width along X from -0.5 to +0.5)
  const baseGeo = new THREE.PlaneGeometry(1, 1, 1, 1);
  const instGeo = new THREE.InstancedBufferGeometry();
  instGeo.index = baseGeo.index;
  instGeo.attributes.position = baseGeo.attributes.position;
  instGeo.attributes.uv = baseGeo.attributes.uv;

  const aCenter = new Float32Array(MAX_STREAKS * 3);
  const aDir = new Float32Array(MAX_STREAKS * 3);
  const aDims = new Float32Array(MAX_STREAKS * 3); // x = width, y = length, z = alpha

  for (let i = 0; i < MAX_STREAKS; i++) {
    aCenter[i * 3 + 1] = -9999;
    aDir[i * 3 + 0] = 1;
    aDims[i * 3 + 2] = 0;
  }

  instGeo.setAttribute('aCenter', new THREE.InstancedBufferAttribute(aCenter, 3));
  instGeo.setAttribute('aDir', new THREE.InstancedBufferAttribute(aDir, 3));
  instGeo.setAttribute('aDims', new THREE.InstancedBufferAttribute(aDims, 3));
  instGeo.instanceCount = MAX_STREAKS;

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
      attribute vec3 aCenter;
      attribute vec3 aDir;
      attribute vec3 aDims;
      varying vec2 vUv;
      varying float vAlpha;
      varying vec3 vWorldPos;

      void main() {
        vUv = uv;
        vAlpha = aDims.z;
        if (vAlpha <= 0.002) {
          gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          return;
        }
        // Camera-facing axis-aligned billboard strictly stretched along velocity/pour vector aDir!
        vec3 axis = normalize(aDir);
        vec3 toCam = normalize(cameraPosition - aCenter);
        vec3 side = cross(axis, toCam);
        float sLen = length(side);
        side = sLen > 0.001 ? side / sLen : vec3(1.0, 0.0, 0.0);

        vec3 wp = aCenter + side * (position.x * aDims.x) + axis * (position.y * aDims.y);
        vWorldPos = wp;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;
      varying float vAlpha;
      varying vec3 vWorldPos;
      ${GLSL_ATMOSPHERE_CHUNK}

      float hash21(vec2 p) {
        p = fract(p * vec2(127.1, 311.7));
        p += dot(p, p + 34.17);
        return fract(p.x * p.y);
      }

      void main() {
        if (vAlpha <= 0.002) discard;
        // Razor-sleek tapered filamentous ribbon profile (ZERO round circles/blobs!)
        float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
        across = pow(max(across, 0.0001), 2.1);
        float along = smoothstep(0.0, 0.22, vUv.y) * smoothstep(1.0, 0.16, vUv.y);
        float grain = 0.72 + 0.28 * hash21(floor(vUv * vec2(6.0, 26.0)) + floor(uTime * 18.0));

        float a = across * along * grain * vAlpha;
        if (a < 0.005) discard;

        vec3 V = normalize(cameraPosition - vWorldPos);
        float sunUp = smoothstep(-0.02, 0.10, uSunDir.y);
        float sunBack = pow(max(dot(-V, uSunDir), 0.0001), 2.2);

        vec3 baseSand = mix(uShadowCool * 0.55, vec3(0.68, 0.48, 0.26), 0.28 + 0.72 * sunUp);
        vec3 litSand = mix(baseSand, uSunColor * 1.18, (0.35 + 0.65 * sunBack) * sunUp);
        vec3 col = applyAtmosphere(litSand, vWorldPos, cameraPosition, 0.85);
        float twilightAtten = mix(0.28, 1.0, sunUp);
        gl_FragColor = vec4(col, a * twilightAtten);
      }
    `,
  });

  const mesh = new THREE.Mesh(instGeo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 4;

  // CPU simulation arrays
  const vel = new Float32Array(MAX_STREAKS * 3);
  const ages = new Float32Array(MAX_STREAKS);
  const maxAges = new Float32Array(MAX_STREAKS);
  const widths = new Float32Array(MAX_STREAKS);
  const lengths = new Float32Array(MAX_STREAKS);
  const baseAlphas = new Float32Array(MAX_STREAKS);
  const gravs = new Float32Array(MAX_STREAKS);
  const drags = new Float32Array(MAX_STREAKS);
  const kinds = new Uint8Array(MAX_STREAKS); // 0=dead, 1=pour stream, 2=ground streak

  let cursor = 0;
  let activeBudget = MAX_STREAKS;

  function spawn(x, y, z, vx, vy, vz, w, len, life, alpha, grav, drag, kind) {
    const idx = cursor;
    cursor = (cursor + 1) % activeBudget;
    const i3 = idx * 3;
    aCenter[i3] = x; aCenter[i3 + 1] = y; aCenter[i3 + 2] = z;
    vel[i3] = vx; vel[i3 + 1] = vy; vel[i3 + 2] = vz;
    ages[idx] = 0; maxAges[idx] = life;
    widths[idx] = w; lengths[idx] = len; baseAlphas[idx] = alpha;
    gravs[idx] = grav; drags[idx] = drag;
    kinds[idx] = kind;
  }

  function emitWomanFootPuff(pos, runDir) {
    // Tiny low ground-skimming sand wisps around her trailing hem (no round puffs!)
    for (let i = 0; i < 4; i++) {
      spawn(
        pos.x + (Math.random() - 0.5) * 0.25, pos.y + 0.05, pos.z + (Math.random() - 0.5) * 0.25,
        WIND_DIR.x * 3.8 - runDir.x * 0.5, 0.08 + Math.random() * 0.14, WIND_DIR.z * 3.8 - runDir.z * 0.5,
        0.09, 0.85 + Math.random() * 0.5, 0.75 + Math.random() * 0.4, 0.24, -0.4, 0.9, 2
      );
    }
  }

  function emitWalkerFootfallRing(pos, intensity = 1.0) {
    // Low horizontal ground-hugging radial sand-spray ribbons racing strictly along the sand!
    const n = Math.round(28 * intensity);
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.14;
      const r = 2.8 + Math.random() * 2.2;
      const sp = (11.5 + Math.random() * 7.5) * intensity;
      spawn(
        pos.x + Math.cos(ang) * r, pos.y + 0.35 + Math.random() * 0.55, pos.z + Math.sin(ang) * r,
        Math.cos(ang) * sp + WIND_DIR.x * 3.0, 0.45 + Math.random() * 0.7, Math.sin(ang) * sp + WIND_DIR.z * 3.0,
        0.95 + Math.random() * 0.55, 8.5 + Math.random() * 6.0,
        2.2 + Math.random() * 1.1, 0.26 * intensity, -1.2, 0.72, 2
      );
    }
  }

  function emitWalkerSandCascade(pos, spread = 1.6, count = 2) {
    // Delicate thin pouring streams of dry desert sand cascading softly from joints & arched belly!
    for (let i = 0; i < count; i++) {
      spawn(
        pos.x + (Math.random() - 0.5) * spread,
        pos.y + (Math.random() - 0.5) * 0.6,
        pos.z + (Math.random() - 0.5) * spread,
        WIND_DIR.x * (2.6 + Math.random() * 1.4),
        -8.5 - Math.random() * 5.0,
        WIND_DIR.z * (2.6 + Math.random() * 1.4),
        0.26 + Math.random() * 0.18,
        5.5 + Math.random() * 5.0,
        1.7 + Math.random() * 0.9,
        0.20,
        -11.5,
        0.16,
        1
      );
    }
  }

  function clear() {
    for (let i = 0; i < MAX_STREAKS; i++) {
      kinds[i] = 0;
      aDims[i * 3 + 2] = 0;
      aCenter[i * 3 + 1] = -9999;
    }
    instGeo.attributes.aCenter.needsUpdate = true;
    instGeo.attributes.aDims.needsUpdate = true;
  }

  const _nTmp = new THREE.Vector3();
  let driftTimer = 0;

  function update(dt, womanPos, walkerPos, storyTime, tremor, stormVeil = 0) {
    // Shot 3 streaming sand rivulet filaments sliding down foreground steep dune slopes
    if (tremor > 0.05) {
      const cnt = Math.ceil(tremor * dt * 42);
      for (let i = 0; i < cnt; i++) {
        const rx = womanPos.x + (Math.random() - 0.5) * 28;
        const rz = womanPos.z + (Math.random() - 0.5) * 28;
        getDuneNormal(rx, rz, _nTmp);
        if (1.0 - _nTmp.y < 0.035) continue;
        spawn(
          rx, getDuneHeight(rx, rz) + 0.06, rz,
          _nTmp.x * 5.8 + WIND_DIR.x * 1.6, -0.5, _nTmp.z * 5.8 + WIND_DIR.z * 1.6,
          0.11, 1.45 + Math.random() * 0.9, 1.1 + Math.random() * 0.6, 0.28 * tremor, -2.0, 0.45, 2
        );
      }
    }

    // Long thin wind-sheared low ground-drift streaks hugging tightly (< 0.4m) over the sand!
    driftTimer += dt * (1.0 + stormVeil * 3.0);
    while (driftTimer >= 0.032) {
      driftTimer -= 0.032;
      const rx = womanPos.x + (Math.random() - 0.5) * 62 - 6;
      const rz = womanPos.z + (Math.random() - 0.55) * 66;
      const gh = getDuneHeight(rx, rz);
      const ry = gh + 0.08 + Math.random() * (0.34 + stormVeil * 3.8);
      const speed = (10.5 + Math.random() * 6.5) * (1.0 + stormVeil * 1.4);
      spawn(
        rx, ry, rz,
        WIND_DIR.x * speed, 0.02 + stormVeil * 0.25, WIND_DIR.z * speed,
        0.16 + Math.random() * 0.14 + stormVeil * 0.4,
        3.6 + Math.random() * 4.2 + stormVeil * 6.0,
        1.4 + Math.random() * 0.9,
        0.13 + Math.random() * 0.06 + stormVeil * 0.12,
        -0.12, 0.08, 2
      );
    }

    const windX = WIND_DIR.x * 6.5 * (1 + stormVeil);
    const windZ = WIND_DIR.z * 6.5 * (1 + stormVeil);

    for (let i = 0; i < MAX_STREAKS; i++) {
      const i3 = i * 3;
      if (kinds[i] === 0) {
        aDims[i3 + 2] = 0;
        continue;
      }
      ages[i] += dt;
      if (ages[i] >= maxAges[i]) {
        kinds[i] = 0;
        aDims[i3 + 2] = 0;
        aCenter[i3 + 1] = -9999;
        continue;
      }

      const t = ages[i] / maxAges[i];
      const d = Math.exp(-drags[i] * dt);
      vel[i3] = vel[i3] * d + windX * (1 - d) * 0.45;
      vel[i3 + 1] = vel[i3 + 1] * d + gravs[i] * dt;
      vel[i3 + 2] = vel[i3 + 2] * d + windZ * (1 - d) * 0.45;

      let px = aCenter[i3] + vel[i3] * dt;
      let py = aCenter[i3 + 1] + vel[i3 + 1] * dt;
      let pz = aCenter[i3 + 2] + vel[i3 + 2] * dt;

      const gh = getDuneHeight(px, pz);
      if (kinds[i] === 2) {
        // Strictly hug the dune contour so ground streaks NEVER float into the sky!
        const minY = gh + 0.08;
        const maxY = gh + 0.72 + stormVeil * 5.0;
        if (py < minY) { py = minY; vel[i3 + 1] = 0; }
        else if (py > maxY) { py += (maxY - py) * Math.min(1, dt * 6.0); }
      } else if (py < gh + 0.15) {
        // Pouring stream hits sand and dissipates cleanly
        kinds[i] = 0;
        aDims[i3 + 2] = 0;
        aCenter[i3 + 1] = -9999;
        continue;
      }

      aCenter[i3] = px; aCenter[i3 + 1] = py; aCenter[i3 + 2] = pz;

      const vLen = Math.hypot(vel[i3], vel[i3 + 1], vel[i3 + 2]) || 1.0;
      aDir[i3] = vel[i3] / vLen;
      aDir[i3 + 1] = vel[i3 + 1] / vLen;
      aDir[i3 + 2] = vel[i3 + 2] / vLen;

      const fadeIn = Math.min(1.0, t / 0.14);
      const fadeOut = 1.0 - Math.pow(Math.max(0, (t - 0.30) / 0.70), 1.4);
      aDims[i3 + 0] = widths[i] * (0.85 + t * 0.55);
      aDims[i3 + 1] = lengths[i] * (0.75 + t * 0.55);
      aDims[i3 + 2] = baseAlphas[i] * fadeIn * fadeOut;
    }

    instGeo.attributes.aCenter.needsUpdate = true;
    instGeo.attributes.aDir.needsUpdate = true;
    instGeo.attributes.aDims.needsUpdate = true;
  }

  function setPixelRatio() {}
  function setQuality(tier) {
    activeBudget = tier === 'low' ? 380 : tier === 'medium' ? 680 : MAX_STREAKS;
    instGeo.instanceCount = activeBudget;
  }

  return {
    points: mesh,
    update,
    clear,
    emitWomanFootPuff,
    emitWalkerFootfallRing,
    emitWalkerSandCascade,
    setPixelRatio,
    setQuality,
  };
}
