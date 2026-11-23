import * as THREE from 'three';
import { SHARED_UNIFORMS } from './atmosphere.js';

/**
 * PHYSICALLY-BASED RAYLEIGH + MIE SKY DOME + LIVE PMREM IBL CUBE GENERATOR:
 * - Analytical Rayleigh optical-depth gradient modulated continuously by sun elevation
 * - Solar disc with true limb darkening + luminous Mie forward-scatter corona
 * - Thin high cirrus cloud veil lit warm crimson-gold FROM BELOW at sunset!
 * - Earth-shadow band (slate-indigo shadow + rose-violet Belt of Venus arch) at sunset & blue hour!
 * - Sculpted cumulus/stratus deck + 2-layer 3D hash-jittered desert twilight stars
 * - Live PMREM IBL environment cube with warm sunlit-sand ground bounce (keeps shadows at 8-15% with form!)
 */

function createSkyMaterial(forEnvMap = false) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uTime: SHARED_UNIFORMS.uTime,
      uSunDir: SHARED_UNIFORMS.uSunDir,
      uSunColor: SHARED_UNIFORMS.uSunColor,
      uSkyZenith: SHARED_UNIFORMS.uSkyZenith,
      uSkyMid: SHARED_UNIFORMS.uSkyMid,
      uSkyHorizon: SHARED_UNIFORMS.uSkyHorizon,
      uCloudLit: SHARED_UNIFORMS.uCloudLit,
      uCloudShadow: SHARED_UNIFORMS.uCloudShadow,
      uStarAlpha: SHARED_UNIFORMS.uStarAlpha,
      uShadowCool: SHARED_UNIFORMS.uShadowCool,
      uIsEnvMap: { value: forEnvMap ? 1.0 : 0.0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vWorldDir;
      void main() {
        vWorldDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uSunColor;
      uniform vec3 uSkyZenith;
      uniform vec3 uSkyMid;
      uniform vec3 uSkyHorizon;
      uniform vec3 uCloudLit;
      uniform vec3 uCloudShadow;
      uniform float uStarAlpha;
      uniform vec3 uShadowCool;
      uniform float uIsEnvMap;

      varying vec3 vWorldDir;

      float hash21(vec2 p) {
        p = fract(p * vec2(127.1, 311.7));
        p += dot(p, p + 34.17);
        return fract(p.x * p.y);
      }

      vec3 hash33(vec3 p) {
        p = fract(p * vec3(0.1031, 0.1030, 0.0973));
        p += dot(p, p.yxz + 33.33);
        return fract((p.xxy + p.yxx) * p.zyx);
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
        float s = 0.0;
        float a = 0.52;
        mat2 r = mat2(0.80, -0.60, 0.60, 0.80);
        for (int i = 0; i < 5; i++) {
          s += a * vnoise(p);
          p = r * p * 2.04 + vec2(13.1, 6.7);
          a *= 0.48;
        }
        return s;
      }

      float starLayer(vec3 dir, float scale, float densityCut) {
        vec3 p = dir * scale;
        vec3 cell = floor(p);
        vec3 f = fract(p);
        vec3 rnd = hash33(cell);
        if (rnd.z < densityCut) return 0.0;
        vec3 starPos = 0.18 + 0.64 * rnd;
        float d = length(f - starPos);
        float radius = mix(0.055, 0.105, fract(rnd.x * 17.3));
        float pinpoint = smoothstep(radius, 0.0, d);
        float mag = pow(clamp((rnd.z - densityCut) / (1.0 - densityCut), 0.0001, 1.0), 2.2);
        float twinkle = 0.72 + 0.28 * sin(uTime * (1.8 + rnd.y * 2.5) + rnd.x * 62.8);
        return pinpoint * mag * twinkle;
      }

      void main() {
        vec3 dir = normalize(vWorldDir);
        float aboveH = smoothstep(-0.045, 0.035, uSunDir.y);

        // PMREM IBL Lower Hemisphere: rich sunlit warm desert sand bounce (sand albedo x sun)
        // keeps undersides & dark shadowed forms readable around 8-15% luminance (never dead black!)
        if (uIsEnvMap > 0.5 && dir.y < 0.0) {
          float sunSide = clamp(dot(normalize(vec3(dir.x, 0.0, dir.z) + vec3(0.0001)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z) + vec3(0.0001))) * 0.5 + 0.5, 0.0, 1.0);
          vec3 groundLit = vec3(0.46, 0.30, 0.16) * uSunColor * (0.38 + 0.62 * sunSide) * (0.18 + 0.82 * aboveH);
          vec3 groundCool = uShadowCool * 0.62;
          vec3 groundCol = mix(uSkyHorizon * 0.44, groundCool + groundLit, smoothstep(0.0, -0.35, dir.y));
          gl_FragColor = vec4(groundCol, 1.0);
          return;
        }

        float cosTheta = max(dir.y, 0.001);
        float sunAmt = max(dot(dir, uSunDir), 0.0001);
        float sunElevNorm = clamp((uSunDir.y + 0.05) / 0.55, 0.0, 1.0);

        // Physically-based Rayleigh optical-depth gradient shifting continuously with sun elevation
        // Reaches rich azure/indigo even within telephoto 14-18 deg vertical framing!
        vec3 rayleighSky = mix(uSkyHorizon, uSkyMid, smoothstep(0.0, 0.11, cosTheta));
        rayleighSky = mix(rayleighSky, uSkyZenith, smoothstep(0.09, 0.36, cosTheta));

        float rayPhase = 0.75 * (1.0 + sunAmt * sunAmt);
        vec3 col = rayleighSky * (0.86 + 0.18 * rayPhase);

        // EARTH-SHADOW BAND & BELT OF VENUS at sunset / blue hour!
        float twilightMask = smoothstep(0.14, -0.02, uSunDir.y);
        if (twilightMask > 0.01) {
          float antiSun = clamp(-dot(normalize(vec3(dir.x, 0.0, dir.z) + vec3(0.0001)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z) + vec3(0.0001))) * 0.5 + 0.5, 0.0, 1.0);
          float earthShadowBand = (1.0 - smoothstep(0.01, 0.14, dir.y)) * (0.35 + 0.65 * antiSun);
          float beltOfVenus = exp(-pow((dir.y - 0.11) / 0.065, 2.0)) * (0.35 + 0.65 * antiSun);
          col = mix(col, uSkyZenith * 0.58 + vec3(0.02, 0.04, 0.09), earthShadowBand * twilightMask * 0.75);
          col += vec3(0.34, 0.14, 0.22) * beltOfVenus * twilightMask * 0.48;
        }

        // PMREM Cube Env output: balanced sky dome (~0.48x) + crisp solar specular pinpoint!
        if (uIsEnvMap > 0.5) {
          col *= 0.48;
          float envCorona = pow(sunAmt, 64.0) * 1.55 * aboveH;
          float envDisc = smoothstep(0.996, 0.9995, sunAmt) * 7.2 * aboveH;
          col += uSunColor * envCorona + mix(uSunColor, vec3(1.0, 0.98, 0.92), 0.5) * envDisc;
          gl_FragColor = vec4(col, 1.0);
          return;
        }

        // Henyey-Greenstein Mie aerosol forward-scattering aureole
        float g = 0.78;
        float mieHG = (1.0 - g * g) / pow(max(1.0 + g * g - 2.0 * g * sunAmt, 0.012), 1.5);
        col += uSunColor * clamp(mieHG * 0.072, 0.0, 1.6) * (0.26 + 0.74 * aboveH);

        // SUN DISC WITH REAL SOLAR LIMB DARKENING + LUMINOUS CORONA!
        float corona = pow(sunAmt, 120.0) * 1.25 * aboveH;
        float sunAngularR = acos(clamp(sunAmt, -1.0, 1.0));
        float discR = 0.024; // ~1.37 deg theatrical telephoto sun disc
        float discNorm = clamp(sunAngularR / discR, 0.0, 1.0);
        float insideDisc = 1.0 - smoothstep(0.92, 1.02, discNorm);
        // Limb darkening: core blazes warm white-gold, rim softens to deep golden-amber!
        float limb = pow(max(1.0 - discNorm * discNorm, 0.0001), 0.48);
        vec3 discCol = mix(uSunColor * 2.2, vec3(1.0, 0.97, 0.90) * 6.2, limb);
        col += uSunColor * corona;
        col += discCol * insideDisc * aboveH;

        // 2-layer 3D hash-jittered desert twilight stars
        if (uStarAlpha > 0.01 && dir.y > 0.08) {
          float elevFade = smoothstep(0.08, 0.42, dir.y);
          float s1 = starLayer(dir, 145.0, 0.962);
          float s2 = starLayer(dir + vec3(0.37, 0.19, 0.53), 260.0, 0.975) * 0.62;
          vec3 sTint = mix(vec3(0.84, 0.91, 1.10), vec3(1.08, 0.96, 0.82), fract(dir.x * 31.7 + dir.z * 19.3));
          col += sTint * (s1 + s2) * elevFade * uStarAlpha * 1.15;
        }

        // THIN HIGH CIRRUS CLOUD LAYER LIT WARM FROM BELOW AT SUNSET!
        if (dir.y > 0.015) {
          vec2 cirUv = dir.xz / (dir.y + 0.11) * 1.05;
          vec2 cirDrift = vec2(uTime * 0.0038, uTime * 0.0014);
          float shear = fbm(cirUv * 0.75 + cirDrift * 0.4);
          float streaks = fbm(vec2(cirUv.x * 2.4 + shear * 1.4, cirUv.y * 0.72 - shear * 0.4) + cirDrift);
          float fineWisps = fbm(vec2(cirUv.x * 5.5, cirUv.y * 1.8) + cirDrift * 1.2);
          float cirrusMask = smoothstep(0.50, 0.84, streaks * 0.72 + fineWisps * 0.28)
                           * smoothstep(0.02, 0.22, dir.y) * (1.0 - smoothstep(0.68, 0.96, dir.y));

          // Low sun illuminates cirrus undersides in blazing coral-gold while upper shadows stay cool violet!
          float underLit = smoothstep(0.28, -0.02, uSunDir.y) * smoothstep(-0.08, 0.05, uSunDir.y);
          vec3 cirrusDay = mix(uCloudShadow * 1.15, uCloudLit * 1.08, 0.55 + 0.45 * pow(sunAmt, 2.0));
          vec3 cirrusSunsetUnder = mix(vec3(0.95, 0.34, 0.24), vec3(1.55, 0.82, 0.36), pow(sunAmt, 1.8) * 0.75 + 0.25);
          vec3 cirrusCol = mix(cirrusDay, cirrusSunsetUnder, underLit * 0.85);
          col = mix(col, cirrusCol, cirrusMask * 0.52);

          // Lower sculpted dramatic desert cloud deck
          vec2 cUv = dir.xz / (dir.y + 0.16) * 0.62;
          vec2 drift = vec2(uTime * 0.0052, uTime * 0.0020);
          float warp = fbm(cUv * 0.85 + drift * 0.5);
          float c1 = fbm(cUv * 1.4 + vec2(warp * 0.92, -warp * 0.46) + drift);
          float c2 = fbm(cUv * 3.1 - drift * 0.6 + vec2(4.1, 7.2));
          float cloudMask = smoothstep(0.46, 0.80, c1 * 0.76 + c2 * 0.28)
                          * smoothstep(0.015, 0.18, dir.y) * (1.0 - smoothstep(0.75, 0.98, dir.y)) * 0.68;

          float sunEdge = smoothstep(0.24, 0.74, c1) * (0.30 + 0.88 * pow(sunAmt, 2.2));
          vec3 cloudCol = mix(uCloudShadow, uCloudLit * 1.15, clamp(sunEdge, 0.0, 1.0));
          cloudCol += uSunColor * pow(sunAmt, 7.0) * smoothstep(0.46, 0.66, c1) * 0.65 * aboveH;
          col = mix(col, cloudCol, cloudMask);
        }

        // Smooth atmospheric horizon band matching terrain fog (tight enough that azure sky shows in telephoto!)
        float horizBand = exp(-abs(dir.y) * 22.0);
        vec3 horizonGlow = mix(uSkyHorizon, uSunColor * 0.94, pow(sunAmt, 3.6) * 0.42 * aboveH);
        col = mix(col, horizonGlow, horizBand * 0.36);

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
}

export function createSkyDome() {
  const geo = new THREE.SphereGeometry(7600, 48, 32);
  const mesh = new THREE.Mesh(geo, createSkyMaterial(false));
  mesh.frustumCulled = false;
  mesh.renderOrder = -20;
  return mesh;
}

export function createSkyIBL(renderer, scene) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileCubemapShader();

  const cubeRT = new THREE.WebGLCubeRenderTarget(128, {
    type: THREE.HalfFloatType,
    generateMipmaps: false,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  });
  const cubeCam = new THREE.CubeCamera(1, 500, cubeRT);

  const envScene = new THREE.Scene();
  const envDome = new THREE.Mesh(new THREE.SphereGeometry(120, 28, 18), createSkyMaterial(true));
  envScene.add(envDome);

  let currentPMREM = null;
  let elapsed = 99;

  function refresh() {
    cubeCam.update(renderer, envScene);
    const nextPMREM = pmrem.fromCubemap(cubeRT.texture);
    scene.environment = nextPMREM.texture;
    if (currentPMREM) currentPMREM.dispose();
    currentPMREM = nextPMREM;
    elapsed = 0;
  }

  function update(dt, force = false) {
    elapsed += dt;
    if (force || elapsed >= 0.5) {
      refresh();
    }
  }

  refresh();
  return { update, refresh };
}
