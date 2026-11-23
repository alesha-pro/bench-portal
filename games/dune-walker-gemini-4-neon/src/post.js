import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';

/**
 * AAA FILM-TRAILER POST-PROCESSING PIPELINE (60 FPS ADAPTIVE):
 * - Dedicated HDR HalfFloat sceneRT WITH DepthTexture (zero WebGL2 FBO feedback!)
 * - Pass 1 (CombinedDepthFXShader):
 *     * Horizon-style Depth SSAO darkening joints, carapace recesses & dune folds
 *     * Screen-Space Contact Shadows (6-step view-space ray-march toward sun!) grounding walker feet,
 *       woman's robe hem, and trailing scarf directly onto the desert sand
 *     * Depth-aware bilateral upsample of REAL CSM shadow-map ray-marched volumetrics (`volumetrics.js`)
 *     * Circular Bokeh Depth-of-Field on medium OTS & kneel shots
 *     * HDR NaN sanitizer
 * - Pass 2: Selective half-res UnrealBloomPass (high threshold -> ONLY sun, eyes/windows & hottest glints!)
 * - Pass 3 (CinematicGradeShader):
 *     * Soft warm film halation bleeding around bright silhouette edges
 *     * Subtle depth-occlusion-gated horizontal anamorphic sun streak
 *     * Swirling Haboob Dust Storm Wall transition veil
 *     * True AgX Filmic Tone Mapping (Rec.2020 + Troy Sobotka inset/polynomial/outset -> creamy warm-white sunset rolloff!)
 *     * Split Toning (warm highlights + cool teal-violet shadows) + Per-TOD Grade + Subtle Local Contrast + Vignette
 * - Pass 4 (SMAAPass): Real morphological antialiasing smoothing thin legs, cables, scarf & silhouettes
 * - Pass 5 (FinalGrainShader): Crisp luminance-weighted 35mm film grain & subtle radial CA (post-SMAA)
 */

const CombinedDepthFXShader = {
  uniforms: {
    tScene: { value: null },
    tDepth: { value: null },
    tVolumetric: { value: null },
    uHasVolumetric: { value: 0.0 },
    uVolTexelSize: { value: new THREE.Vector2(1 / 960, 1 / 402) },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1920, 804) },
    uNear: { value: 0.25 },
    uFar: { value: 8500.0 },
    uInvProj: { value: new THREE.Matrix4() },
    uProj: { value: new THREE.Matrix4() },
    uSunViewDir: { value: new THREE.Vector3(0, 0.4, -0.9) },
    uSunAbove: { value: 1.0 },
    uFocusDist: { value: 3.8 },
    uDofStrength: { value: 0.0 },
    uAoStrength: { value: 0.54 },
    uAoTaps: { value: 8.0 },
    uContactStrength: { value: 0.72 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tScene;
    uniform sampler2D tDepth;
    uniform sampler2D tVolumetric;
    uniform float uHasVolumetric;
    uniform vec2 uVolTexelSize;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uNear;
    uniform float uFar;
    uniform mat4 uInvProj;
    uniform mat4 uProj;
    uniform vec3 uSunViewDir;
    uniform float uSunAbove;
    uniform float uFocusDist;
    uniform float uDofStrength;
    uniform float uAoStrength;
    uniform float uAoTaps;
    uniform float uContactStrength;
    varying vec2 vUv;

    vec3 sanitizeHDR(vec3 c) {
      bvec3 bad = bvec3(!(c.r >= 0.0 && c.r <= 64.0), !(c.g >= 0.0 && c.g <= 64.0), !(c.b >= 0.0 && c.b <= 64.0));
      return vec3(bad.r ? 0.0 : c.r, bad.g ? 0.0 : c.g, bad.b ? 0.0 : c.b);
    }

    float linearizeDepth(float d) {
      float z = d * 2.0 - 1.0;
      return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
    }

    vec3 reconstructViewPos(vec2 uv, float rawD) {
      vec4 clip = vec4(uv * 2.0 - 1.0, rawD * 2.0 - 1.0, 1.0);
      vec4 vp = uInvProj * clip;
      return vp.xyz / vp.w;
    }

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec3 col = sanitizeHDR(texture2D(tScene, vUv).rgb);
      float rawD = texture2D(tDepth, vUv).r;
      float linD = linearizeDepth(rawD);

      // 1. HORIZON-STYLE SCREEN-SPACE AMBIENT OCCLUSION (SSAO)
      if (uAoStrength > 0.01 && rawD < 0.9994 && linD < 480.0) {
        float radiusPx = clamp(240.0 / max(linD, 1.5), 4.0, 25.0);
        vec2 texel = (1.0 / uResolution) * radiusPx;
        float jitter = hash12(gl_FragCoord.xy) * 6.2831853;
        float occ = 0.0;
        int nTaps = int(uAoTaps);

        for (int i = 0; i < 8; i++) {
          if (i >= nTaps) break;
          float ang = jitter + float(i) * (6.2831853 / uAoTaps);
          float rFrac = 0.42 + 0.58 * fract(float(i) * 0.6180339);
          vec2 sUv = clamp(vUv + vec2(cos(ang), sin(ang)) * texel * rFrac, 0.002, 0.998);
          float sD = linearizeDepth(texture2D(tDepth, sUv).r);
          float diff = linD - sD;
          float rangeCheck = smoothstep(0.0, 1.0, (linD * 0.14 + 0.65) / max(abs(diff), 0.001));
          occ += step(0.035 + linD * 0.004, diff) * rangeCheck;
        }
        float ao = 1.0 - clamp((occ / uAoTaps) * uAoStrength, 0.0, 0.62);
        ao = mix(ao, 1.0, smoothstep(220.0, 480.0, linD));
        col *= ao;
      }

      // 2. SCREEN-SPACE CONTACT SHADOWS (grounds woman's hem, scarf & walker feet directly onto sand!)
      if (uContactStrength > 0.01 && uSunAbove > 0.05 && rawD < 0.9992 && linD < 260.0) {
        vec3 vPos = reconstructViewPos(vUv, rawD);
        // Adaptive short ray length: crisp 0.85m near the woman/scarf, scales gently up to 3.8m at walker feet!
        float rayLen = clamp(0.45 + linD * 0.022, 0.45, 3.8);
        float thickness = clamp(0.14 + linD * 0.016, 0.14, 2.2);
        float bias = clamp(0.018 + linD * 0.0016, 0.018, 0.24);
        float jitter = hash12(gl_FragCoord.xy + vec2(17.3, 9.1));
        float hit = 0.0;

        for (int i = 0; i < 6; i++) {
          float frac = (float(i) + 0.35 + jitter * 0.65) / 6.0;
          vec3 samplePos = vPos + uSunViewDir * (rayLen * frac);
          vec4 proj = uProj * vec4(samplePos, 1.0);
          vec2 sUv = (proj.xy / max(proj.w, 0.0001)) * 0.5 + 0.5;
          if (sUv.x < 0.004 || sUv.x > 0.996 || sUv.y < 0.004 || sUv.y > 0.996) break;
          float sceneD = linearizeDepth(texture2D(tDepth, sUv).r);
          float rayD = -samplePos.z;
          float delta = rayD - sceneD;
          if (delta > bias && delta < thickness) {
            // Smooth fade near edge of ray & thickness window
            float w = (1.0 - frac * 0.45) * smoothstep(thickness, bias, delta);
            hit = max(hit, w);
          }
        }
        float distFade = 1.0 - smoothstep(140.0, 260.0, linD);
        col *= 1.0 - hit * uContactStrength * uSunAbove * distFade * 0.56;
      }

      // 3. CIRCULAR BOKEH DEPTH OF FIELD (Shot 2 OTS & Shot 6 Kneel — zero cost on wides!)
      if (uDofStrength > 0.01) {
        float coc = abs(linD - uFocusDist) / max(linD, 0.45);
        coc = smoothstep(0.08, 0.72, coc) * uDofStrength;
        if (coc > 0.01) {
          vec2 texel = (1.0 / uResolution) * (coc * 6.5);
          vec3 acc = col;
          vec2 offs[8];
          offs[0] = vec2( 1.0,  0.0); offs[1] = vec2(-1.0,  0.0);
          offs[2] = vec2( 0.0,  1.0); offs[3] = vec2( 0.0, -1.0);
          offs[4] = vec2( 0.707,  0.707); offs[5] = vec2(-0.707,  0.707);
          offs[6] = vec2( 0.707, -0.707); offs[7] = vec2(-0.707, -0.707);
          for (int i = 0; i < 8; i++) {
            acc += sanitizeHDR(texture2D(tScene, clamp(vUv + offs[i] * texel, 0.002, 0.998)).rgb);
          }
          col = acc / 9.0;
        }
      }

      // 4. BILATERAL DEPTH-AWARE UPSAMPLE OF REAL CSM RAY-MARCHED VOLUMETRICS (zero silhouette bleed!)
      if (uHasVolumetric > 0.5) {
        vec2 tOff = uVolTexelSize * 0.5;
        vec2 taps[4];
        taps[0] = vUv + vec2(-tOff.x, -tOff.y);
        taps[1] = vUv + vec2( tOff.x, -tOff.y);
        taps[2] = vUv + vec2(-tOff.x,  tOff.y);
        taps[3] = vUv + vec2( tOff.x,  tOff.y);

        vec3 volAcc = vec3(0.0);
        float wTotal = 0.0;
        for (int i = 0; i < 4; i++) {
          vec4 vSamp = texture2D(tVolumetric, clamp(taps[i], 0.002, 0.998));
          float relDiff = abs(vSamp.a - linD) / max(linD, 1.5);
          float w = exp(-relDiff * 18.0) + 0.001;
          volAcc += sanitizeHDR(vSamp.rgb) * w;
          wTotal += w;
        }
        vec3 volLight = volAcc / max(wTotal, 0.001);
        // Preserve deep 3-layer foreground contrast right on the woman (< 16m)
        float fgPreserve = mix(0.24, 1.0, smoothstep(8.0, 42.0, linD));
        col += volLight * fgPreserve;
      }

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

const CinematicGradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    tDepth: { value: null },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1920, 804) },
    uExposure: { value: 1.06 },
    uGradeLift: { value: new THREE.Color(0.005, 0.015, 0.026) },
    uGradeGamma: { value: new THREE.Color(1.0, 0.99, 0.97) },
    uGradeGain: { value: new THREE.Color(1.08, 1.0, 0.92) },
    uStormVeil: { value: 0.0 },
    uStormColor: { value: new THREE.Color(0xc98a4c) },
    uSunScreenPos: { value: new THREE.Vector2(0.35, 0.55) },
    uSunColor: { value: new THREE.Color(0xffb058) },
    uAnamorphicStrength: { value: 0.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uExposure;
    uniform vec3 uGradeLift;
    uniform vec3 uGradeGamma;
    uniform vec3 uGradeGain;
    uniform float uStormVeil;
    uniform vec3 uStormColor;
    uniform vec2 uSunScreenPos;
    uniform vec3 uSunColor;
    uniform float uAnamorphicStrength;
    varying vec2 vUv;

    // --- TRUE AgX FILMIC TONE MAPPING (Troy Sobotka / Three.js r170 exact matrices!) ---
    // Sunset orange-gold highlights roll smoothly to creamy warm white instead of flat neon red!
    const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
      vec3(0.6274, 0.0691, 0.0164),
      vec3(0.3293, 0.9195, 0.0880),
      vec3(0.0433, 0.0113, 0.8956)
    );
    const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
      vec3(1.6605, -0.1246, -0.0182),
      vec3(-0.5876, 1.1329, -0.1006),
      vec3(-0.0728, -0.0083, 1.1187)
    );
    const mat3 AgXInsetMatrix = mat3(
      vec3(0.856627153315983, 0.137318972929847, 0.11189821299995),
      vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903),
      vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859)
    );
    const mat3 AgXOutsetMatrix = mat3(
      vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),
      vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),
      vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405)
    );

    vec3 agxDefaultContrastApprox(vec3 x) {
      vec3 x2 = x * x;
      vec3 x4 = x2 * x2;
      return 15.5 * x4 * x2
        - 40.14 * x4 * x
        + 31.96 * x4
        - 6.868 * x2 * x
        + 0.4298 * x2
        + 0.1191 * x
        - 0.00232;
    }

    vec3 agxToneMapping(vec3 col) {
      const float minEv = -12.47393;
      const float maxEv = 4.026069;
      col = LINEAR_SRGB_TO_LINEAR_REC2020 * max(col, vec3(0.0));
      col = AgXInsetMatrix * col;
      col = max(col, vec3(1e-10));
      col = (log2(col) - minEv) / (maxEv - minEv);
      col = clamp(col, 0.0, 1.0);
      col = agxDefaultContrastApprox(col);
      col = AgXOutsetMatrix * col;
      col = pow(max(vec3(0.0), col), vec3(2.2));
      col = LINEAR_REC2020_TO_LINEAR_SRGB * col;
      col = clamp(col, 0.0, 1.0);
      // Punchy cinema AgX look: rich saturation & crisp contrast while keeping warm-white highlight rolloff
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, 1.12);
      return clamp(col, 0.0, 1.0);
    }

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
        mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float s = 0.0, a = 0.52;
      for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.05 + vec2(4.7, 2.3); a *= 0.48; }
      return s;
    }

    void main() {
      vec2 texel = 1.0 / uResolution;
      vec3 hdrRaw = texture2D(tDiffuse, vUv).rgb;
      vec3 hdr = hdrRaw * uExposure;

      // 1. LOCAL CONTRAST + SOFT WARM FILM HALATION AROUND BRIGHT SILHOUETTE EDGES!
      vec3 n1 = texture2D(tDiffuse, clamp(vUv + texel * vec2( 3.0,  0.0), 0.002, 0.998)).rgb * uExposure;
      vec3 n2 = texture2D(tDiffuse, clamp(vUv + texel * vec2(-3.0,  0.0), 0.002, 0.998)).rgb * uExposure;
      vec3 n3 = texture2D(tDiffuse, clamp(vUv + texel * vec2( 0.0,  3.0), 0.002, 0.998)).rgb * uExposure;
      vec3 n4 = texture2D(tDiffuse, clamp(vUv + texel * vec2( 0.0, -3.0), 0.002, 0.998)).rgb * uExposure;

      vec3 w1 = texture2D(tDiffuse, clamp(vUv + texel * vec2( 7.5,  5.5), 0.002, 0.998)).rgb * uExposure;
      vec3 w2 = texture2D(tDiffuse, clamp(vUv + texel * vec2(-7.5,  5.5), 0.002, 0.998)).rgb * uExposure;
      vec3 w3 = texture2D(tDiffuse, clamp(vUv + texel * vec2( 7.5, -5.5), 0.002, 0.998)).rgb * uExposure;
      vec3 w4 = texture2D(tDiffuse, clamp(vUv + texel * vec2(-7.5, -5.5), 0.002, 0.998)).rgb * uExposure;

      float cLum = dot(hdr, vec3(0.2126, 0.7152, 0.0722));
      float nearAvgLum = dot((n1 + n2 + n3 + n4) * 0.25, vec3(0.2126, 0.7152, 0.0722));

      // Subtle photographic micro-contrast (sharpens wind ripples, stone ribs & scarf folds without haloing)
      float localDiff = clamp(cLum - nearAvgLum, -0.14, 0.14);
      hdr *= (1.0 + localDiff * 0.44);

      // Soft warm halation: bright sky/sun (>0.88) bleeding warm red-orange film scatter around darker silhouettes!
      vec3 wideBright = (max(w1 - 0.85, vec3(0.0)) + max(w2 - 0.85, vec3(0.0))
                       + max(w3 - 0.85, vec3(0.0)) + max(w4 - 0.85, vec3(0.0))) * 0.25;
      float edgeMask = 1.0 - smoothstep(0.18, 0.85, cLum);
      hdr += wideBright * vec3(1.18, 0.42, 0.14) * (0.045 + 0.13 * edgeMask);

      // 2. SUBTLE HORIZONTAL ANAMORPHIC SUN STREAK (depth-occlusion gated!)
      if (uAnamorphicStrength > 0.005) {
        vec2 sd = vUv - uSunScreenPos;
        if (abs(sd.y) < 0.09) {
          // 5-tap occlusion test around live sun disc in tDepth
          float sVis = 0.0;
          sVis += smoothstep(0.9990, 0.9998, texture2D(tDepth, clamp(uSunScreenPos, 0.002, 0.998)).r);
          sVis += smoothstep(0.9990, 0.9998, texture2D(tDepth, clamp(uSunScreenPos + vec2( 0.010, 0.0), 0.002, 0.998)).r);
          sVis += smoothstep(0.9990, 0.9998, texture2D(tDepth, clamp(uSunScreenPos + vec2(-0.010, 0.0), 0.002, 0.998)).r);
          sVis += smoothstep(0.9990, 0.9998, texture2D(tDepth, clamp(uSunScreenPos + vec2( 0.0,  0.012), 0.002, 0.998)).r);
          sVis += smoothstep(0.9990, 0.9998, texture2D(tDepth, clamp(uSunScreenPos + vec2( 0.0, -0.012), 0.002, 0.998)).r);
          sVis *= 0.20;

          if (sVis > 0.02) {
            float vCore = exp(-abs(sd.y) * 115.0);
            float vHalo = exp(-abs(sd.y) * 28.0) * 0.28;
            float hFall = exp(-abs(sd.x) * 2.5);
            vec3 streakCol = mix(uSunColor * vec3(1.25, 0.96, 0.72), vec3(1.0, 0.92, 0.80), vCore * 0.6);
            hdr += streakCol * (vCore + vHalo) * hFall * sVis * uAnamorphicStrength;
          }
        }
      }

      // 3. DUST STORM WALL TRANSITION VEIL (turbulent backlit golden-ochre haboob swallowing the camera!)
      if (uStormVeil > 0.005) {
        vec2 aspectUv = vec2(vUv.x * 2.39, vUv.y);
        vec2 drift1 = vec2(-uTime * 0.42, uTime * 0.06);
        vec2 drift2 = vec2(-uTime * 0.78, -uTime * 0.09);
        float sw1 = fbm(aspectUv * 1.4 + drift1);
        float sw2 = fbm(aspectUv * 2.4 + vec2(sw1 * 1.35, -sw1 * 0.85) + drift2 * 0.6);
        float billows = fbm(aspectUv * 3.6 + vec2(sw2 * 1.6, sw1 * 1.1) + drift2);
        float fineDust = fbm(vec2(aspectUv.x * 6.5 - uTime * 2.1, aspectUv.y * 12.0 + sw1 * 2.2));

        float sunGlow = exp(-length((vUv - vec2(0.42, 0.52)) * vec2(1.5, 1.1)) * 1.65);
        vec3 deepOchre = uStormColor * vec3(0.44, 0.34, 0.24);
        vec3 midAmber  = uStormColor * vec3(1.08, 0.90, 0.68);
        vec3 coreGold  = uStormColor * vec3(1.62, 1.30, 0.84);

        vec3 sandGlow = mix(deepOchre, midAmber, clamp(billows * 1.18 + fineDust * 0.25, 0.0, 1.0));
        sandGlow = mix(sandGlow, coreGold, clamp(sunGlow * (0.42 + 0.58 * sw2), 0.0, 0.92));

        float opacity = smoothstep(0.0, 0.90, uStormVeil * (0.76 + 0.44 * billows));
        opacity = clamp(opacity + smoothstep(0.84, 0.98, uStormVeil) * 0.30, 0.0, 0.99);
        hdr = mix(hdr, sandGlow, opacity);
      }

      // 4. TRUE AgX FILMIC TONE MAPPING -> display sRGB
      vec3 col = agxToneMapping(hdr);
      col = pow(col, vec3(1.0 / 2.2));

      // 5. SPLIT TONING (warm highlights + cool teal-violet shadows) + Per-TOD Film Grade
      float lumD = dot(col, vec3(0.2126, 0.7152, 0.0722));
      float shadowW = pow(1.0 - smoothstep(0.06, 0.54, lumD), 1.5);
      float highW = smoothstep(0.46, 0.92, lumD);
      vec3 splitTint = mix(vec3(1.0), vec3(0.88, 0.96, 1.10), shadowW * 0.42);
      splitTint = mix(splitTint, vec3(1.06, 1.01, 0.92), highW * 0.38);
      col *= splitTint;

      col = col * uGradeGain + uGradeLift * (1.0 - col);
      col = pow(max(col, vec3(0.0001)), vec3(1.0) / max(uGradeGamma, vec3(0.2)));

      // Gentle filmic toe/shoulder contrast without crushing 8-15% shadow form!
      col = mix(col, col * col * (3.0 - 2.0 * col), 0.16);

      // Gentle cinematic vignette
      vec2 vPos = (vUv - 0.5) * vec2(1.18, 1.02);
      float vig = 1.0 - dot(vPos, vPos) * 0.34;
      col *= clamp(vig, 0.54, 1.0);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `,
};

const FinalGrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrainStrength: { value: 0.020 },
    uChromaticAberration: { value: 0.0012 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrainStrength;
    uniform float uChromaticAberration;
    varying vec2 vUv;

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec2 toEdge = vUv - 0.5;
      float edgeDist2 = dot(toEdge, toEdge);
      vec2 caOff = toEdge * edgeDist2 * uChromaticAberration * 2.6;

      float r = texture2D(tDiffuse, clamp(vUv + caOff, 0.0, 1.0)).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, clamp(vUv - caOff, 0.0, 1.0)).b;
      vec3 col = vec3(r, g, b);

      // Organic luminance-weighted 35mm film grain (applied AFTER SMAA so grain stays crisp!)
      float grain = hash12(gl_FragCoord.xy + fract(uTime * 19.7) * 100.0) - 0.5;
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col += grain * uGrainStrength * (1.0 - smoothstep(0.72, 1.0, lum) * 0.55);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `,
};

export function createPostPipeline(renderer, scene, camera, width, height) {
  const pr = renderer.getPixelRatio();
  const rw = Math.max(2, Math.floor(width * pr));
  const rh = Math.max(2, Math.floor(height * pr));

  const depthTexture = new THREE.DepthTexture(rw, rh);
  depthTexture.type = THREE.UnsignedIntType;

  const sceneRT = new THREE.WebGLRenderTarget(rw, rh, {
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthTexture,
  });

  const composerRT = new THREE.WebGLRenderTarget(rw, rh, {
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  });
  const composer = new EffectComposer(renderer, composerRT);

  // Pass 1: SSAO + Contact Shadows + Bilateral CSM Volumetric Composite + Bokeh DOF + NaN Guard
  const fxPass = new ShaderPass(CombinedDepthFXShader);
  fxPass.uniforms.tScene.value = sceneRT.texture;
  fxPass.uniforms.tDepth.value = depthTexture;
  fxPass.uniforms.uNear.value = camera.near;
  fxPass.uniforms.uFar.value = camera.far;
  fxPass.uniforms.uResolution.value.set(rw, rh);
  composer.addPass(fxPass);

  // Pass 2: Selective half-res bloom — HIGH threshold (1.36) -> ONLY sun, glowing windows/eyes & hottest glints!
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(Math.max(1, Math.floor(width * 0.5)), Math.max(1, Math.floor(height * 0.5))),
    0.24,
    0.52,
    1.36
  );
  composer.addPass(bloomPass);

  // Pass 3: Halation + Anamorphic Sun Streak + Haboob Veil + AgX Filmic + Split Toning + Local Contrast
  const gradePass = new ShaderPass(CinematicGradeShader);
  gradePass.uniforms.tDepth.value = depthTexture;
  gradePass.uniforms.uResolution.value.set(rw, rh);
  composer.addPass(gradePass);

  // Pass 4: Real Morphological Antialiasing (SMAA)
  const smaaPass = new SMAAPass(rw, rh);
  composer.addPass(smaaPass);

  // Pass 5: Crisp post-SMAA 35mm film grain & subtle radial CA
  const grainPass = new ShaderPass(FinalGrainShader);
  composer.addPass(grainPass);

  let bloomScale = 0.5;
  let adaptedExposure = 1.06;
  const _sunProj = new THREE.Vector3();
  const _camForward = new THREE.Vector3();
  const _sunViewDir = new THREE.Vector3();
  const _invProj = new THREE.Matrix4();

  function resize(w, h) {
    const dpr = renderer.getPixelRatio();
    const tw = Math.max(2, Math.floor(w * dpr));
    const th = Math.max(2, Math.floor(h * dpr));
    sceneRT.setSize(tw, th);
    composer.setPixelRatio(dpr);
    composer.setSize(w, h);
    fxPass.uniforms.uResolution.value.set(tw, th);
    gradePass.uniforms.uResolution.value.set(tw, th);
    smaaPass.setSize(tw, th);
    bloomPass.resolution.set(
      Math.max(1, Math.floor(w * bloomScale)),
      Math.max(1, Math.floor(h * bloomScale))
    );
  }

  function setQuality(tier) {
    if (tier === 'low') {
      bloomScale = 0.25;
      bloomPass.strength = 0.22;
      fxPass.uniforms.uAoStrength.value = 0.0;
      fxPass.uniforms.uAoTaps.value = 4.0;
      fxPass.uniforms.uContactStrength.value = 0.45;
      smaaPass.enabled = false;
    } else if (tier === 'medium') {
      bloomScale = 0.38;
      bloomPass.strength = 0.23;
      fxPass.uniforms.uAoStrength.value = 0.48;
      fxPass.uniforms.uAoTaps.value = 4.0;
      fxPass.uniforms.uContactStrength.value = 0.65;
      smaaPass.enabled = true;
    } else {
      bloomScale = 0.50;
      bloomPass.strength = 0.24;
      fxPass.uniforms.uAoStrength.value = 0.54;
      fxPass.uniforms.uAoTaps.value = 8.0;
      fxPass.uniforms.uContactStrength.value = 0.72;
      smaaPass.enabled = true;
    }
    const sz = renderer.getSize(new THREE.Vector2());
    resize(sz.x, sz.y);
  }

  function render(dt, time, tod, dofStrength, dofFocus, snapExposure = false, volPass = null, isCut = false) {
    // 1. Render main HDR scene + DepthTexture + update CSM shadow maps
    renderer.setRenderTarget(sceneRT);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);

    // 2. Render real CSM shadow-map ray-marched volumetrics + temporal reprojection
    if (volPass) {
      const volOut = volPass.render(sceneRT.depthTexture, time, tod, isCut);
      fxPass.uniforms.tVolumetric.value = volOut.texture;
      fxPass.uniforms.uVolTexelSize.value.copy(volOut.texelSize);
      fxPass.uniforms.uHasVolumetric.value = 1.0;
    } else {
      fxPass.uniforms.uHasVolumetric.value = 0.0;
    }

    // 3. View-space sun direction & projection matrices for contact shadows + anamorphic sun streak
    camera.getWorldDirection(_camForward);
    const sunAlign = _camForward.dot(tod.sunDir);
    _sunProj.copy(camera.position).addScaledVector(tod.sunDir, 5000.0).project(camera);
    const sunU = _sunProj.x * 0.5 + 0.5;
    const sunV = _sunProj.y * 0.5 + 0.5;

    _sunViewDir.copy(tod.sunDir).transformDirection(camera.matrixWorldInverse).normalize();
    _invProj.copy(camera.projectionMatrix).invert();

    const sunAbove = THREE.MathUtils.clamp((tod.sunDir.y + 0.03) / 0.14, 0, 1);
    const facingSun = THREE.MathUtils.clamp((sunAlign - 0.12) / 0.65, 0, 1);
    const onScreen = sunU > -0.15 && sunU < 1.15 && sunV > -0.15 && sunV < 1.15 ? 1.0 : 0.0;

    fxPass.uniforms.tScene.value = sceneRT.texture;
    fxPass.uniforms.tDepth.value = sceneRT.depthTexture;
    fxPass.uniforms.uTime.value = time;
    fxPass.uniforms.uInvProj.value.copy(_invProj);
    fxPass.uniforms.uProj.value.copy(camera.projectionMatrix);
    fxPass.uniforms.uSunViewDir.value.copy(_sunViewDir);
    fxPass.uniforms.uSunAbove.value = sunAbove;
    fxPass.uniforms.uDofStrength.value = dofStrength;
    fxPass.uniforms.uFocusDist.value = dofFocus;

    const glareDamp = 1.0 - facingSun * sunAbove * 0.07;
    const targetExp = tod.targetExposure * glareDamp;
    if (snapExposure) {
      adaptedExposure = targetExp;
    } else {
      adaptedExposure += (targetExp - adaptedExposure) * (1.0 - Math.exp(-dt / 2.2));
    }

    gradePass.uniforms.tDepth.value = sceneRT.depthTexture;
    gradePass.uniforms.uTime.value = time;
    gradePass.uniforms.uExposure.value = adaptedExposure;
    gradePass.uniforms.uGradeLift.value.copy(tod.gradeLift);
    gradePass.uniforms.uGradeGamma.value.copy(tod.gradeGamma);
    gradePass.uniforms.uGradeGain.value.copy(tod.gradeGain);
    gradePass.uniforms.uStormVeil.value = tod.stormVeil;
    gradePass.uniforms.uStormColor.value.setRGB(0.84, 0.56, 0.28);
    gradePass.uniforms.uSunScreenPos.value.set(sunU, sunV);
    gradePass.uniforms.uSunColor.value.copy(tod.sunColor);
    gradePass.uniforms.uAnamorphicStrength.value =
      0.22 * sunAbove * facingSun * onScreen * (1.0 - tod.stormVeil * 0.90);

    grainPass.uniforms.uTime.value = time;

    composer.render();
  }

  return { composer, resize, setQuality, render, getExposure: () => adaptedExposure };
}
