import * as THREE from 'three';

/**
 * Shared dynamic atmospheric uniforms, CSM material chaining, physically-based sky-matched
 * Rayleigh + Mie aerial perspective (far cools & desaturates into view-direction sky; near < 30m
 * stays warm, crisp & contrasty!), sculpted 8-15% shadow bounce (warm sunlit sand + cool sky wrap),
 * and 2048² triplanar PBR + IBL-tuned + skin-SSS + cloth-translucency material patcher.
 */

export const WIND_DIR = new THREE.Vector3(0.84, 0.0, 0.54).normalize();

export const SHARED_UNIFORMS = {
  uTime: { value: 0 },
  uSunDir: { value: new THREE.Vector3(-0.32, 0.15, -0.93).normalize() },
  uSunColor: { value: new THREE.Color(0xffa44a) },
  uSkyZenith: { value: new THREE.Color(0x102242) },
  uSkyMid: { value: new THREE.Color(0x634452) },
  uSkyHorizon: { value: new THREE.Color(0xeb8236) },
  uCloudLit: { value: new THREE.Color(0xffb256) },
  uCloudShadow: { value: new THREE.Color(0x22243a) },
  uHazeBase: { value: new THREE.Color(0xb66f40) },
  uHazeSun: { value: new THREE.Color(0xffaa52) },
  uHazeDensity: { value: 0.00090 },
  uHeightFogColor: { value: new THREE.Color(0xc07744) },
  uHeightFogDensity: { value: 0.0033 },
  uShadowCool: { value: new THREE.Color(0x162438) },
  uWindowGlow: { value: 1.25 },
  uStarAlpha: { value: 0.0 },
  uTremor: { value: 0.0 },
  uStormVeil: { value: 0.0 },
  uWindDir: { value: WIND_DIR.clone() },
  uWalkerPos: { value: new THREE.Vector3(0, 0, -40) },
  uWalkerHeadPos: { value: new THREE.Vector3(0, 40, -25) },
  uWalkerLegs: {
    value: Array.from({ length: 6 }, () => new THREE.Vector3()),
  },
  uWalkerKnees: {
    value: Array.from({ length: 6 }, () => new THREE.Vector3()),
  },
};

export function syncAtmosphereUniforms(tod) {
  SHARED_UNIFORMS.uSunDir.value.copy(tod.sunDir);
  SHARED_UNIFORMS.uSunColor.value.copy(tod.sunColor);
  SHARED_UNIFORMS.uSkyZenith.value.copy(tod.skyZenith);
  SHARED_UNIFORMS.uSkyMid.value.copy(tod.skyMid);
  SHARED_UNIFORMS.uSkyHorizon.value.copy(tod.skyHorizon);
  SHARED_UNIFORMS.uCloudLit.value.copy(tod.cloudLit);
  SHARED_UNIFORMS.uCloudShadow.value.copy(tod.cloudShadow);
  SHARED_UNIFORMS.uHazeBase.value.copy(tod.hazeBase);
  SHARED_UNIFORMS.uHazeSun.value.copy(tod.hazeSun);
  SHARED_UNIFORMS.uHazeDensity.value = tod.hazeDensity;
  SHARED_UNIFORMS.uHeightFogColor.value.copy(tod.heightFogColor);
  SHARED_UNIFORMS.uHeightFogDensity.value = tod.heightFogDensity;
  SHARED_UNIFORMS.uShadowCool.value.copy(tod.shadowCool);
  SHARED_UNIFORMS.uWindowGlow.value = tod.windowGlow;
  SHARED_UNIFORMS.uStarAlpha.value = tod.starAlpha;
  SHARED_UNIFORMS.uTremor.value = tod.tremor;
  SHARED_UNIFORMS.uStormVeil.value = tod.stormVeil;
}

export const GLSL_ATMOSPHERE_CHUNK = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyMid;
uniform vec3 uSkyHorizon;
uniform vec3 uHazeBase;
uniform vec3 uHazeSun;
uniform float uHazeDensity;
uniform vec3 uHeightFogColor;
uniform float uHeightFogDensity;
uniform vec3 uShadowCool;

// Physically-based Rayleigh + Mie fog color matched tightly to the live sky dome in viewDir!
vec3 computeScatterColor(vec3 viewDir) {
  float sunAmt = max(dot(viewDir, uSunDir), 0.0001);
  float sunUp = smoothstep(-0.06, 0.12, uSunDir.y);

  // Elevation-driven Rayleigh sky matching the dome (horizon -> mid -> zenith)
  float h = clamp(viewDir.y, 0.0, 1.0);
  vec3 skyRayleigh = mix(uSkyHorizon, uSkyMid, smoothstep(0.0, 0.24, h));
  skyRayleigh = mix(skyRayleigh, uSkyZenith, smoothstep(0.18, 0.72, h));

  // Blend dusty desert horizon tone with cool anti-solar Rayleigh sky so distant fog NEVER goes flat orange!
  float antiSolar = clamp(0.5 - 0.5 * dot(viewDir, uSunDir), 0.0, 1.0);
  vec3 baseScatter = mix(mix(uHazeBase, skyRayleigh, 0.46), skyRayleigh, antiSolar * 0.42);

  // Strong Mie Henyey-Greenstein forward scattering lobe toward the sun
  float g = 0.74;
  float mieHG = (1.0 - g * g) / pow(max(1.0 + g * g - 2.0 * g * sunAmt, 0.025), 1.5);
  float mieAmt = clamp(mieHG * 0.145, 0.0, 1.0) * (0.25 + 0.75 * sunUp);

  vec3 col = mix(baseScatter, uHazeSun, mieAmt);
  col += uSunColor * pow(sunAmt, 34.0) * 0.30 * sunUp;
  return col;
}

vec3 applyAtmosphere(vec3 col, vec3 worldPos, vec3 camPos, float densityScale) {
  vec3 toFrag = worldPos - camPos;
  float dist = length(toFrag);
  vec3 viewDir = toFrag / max(dist, 0.0001);

  // 30m foreground dead-zone: near subjects keep full warm saturation & sharp photographic contrast!
  float effDist = max(0.0, dist - 30.0);
  float aerialOpt = max(effDist * uHazeDensity * densityScale, 0.00001);
  float aerialF = 1.0 - exp(-pow(aerialOpt, 1.14));

  // Low desert height fog hugs troughs & megastructure bases (decays rapidly with elevation)
  float hLow = max(0.0, worldPos.y + 18.0);
  float heightWeight = exp(-hLow * 0.042);
  float heightF = 1.0 - exp(-effDist * uHeightFogDensity * densityScale * heightWeight);

  // Distance cooling & gentle desaturation (far goes cooler & quieter; near stays warm & punchy!)
  float farFactor = 1.0 - exp(-effDist * 0.00078 * max(densityScale, 0.45));
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  vec3 cooledSurface = mix(col, vec3(lum), farFactor * 0.32);
  cooledSurface *= mix(vec3(1.0), vec3(0.90, 0.96, 1.07), farFactor * 0.36);

  // Cap max haze below 0.88 so distant megastructures retain lit-vs-shadow architectural form
  float totalFog = clamp(1.0 - (1.0 - aerialF) * (1.0 - heightF * 0.60), 0.0, 0.88);
  vec3 scatterCol = computeScatterColor(viewDir);
  vec3 fogCol = mix(uHeightFogColor, scatterCol, clamp(aerialF / max(totalFog, 0.001), 0.42, 1.0));

  float sunAmt = max(dot(viewDir, uSunDir), 0.0001);
  float sunUp = smoothstep(-0.04, 0.08, uSunDir.y);
  vec3 mieBoost = uHazeSun * pow(sunAmt, 7.5) * (1.0 - exp(-effDist * 0.0011)) * 0.16 * sunUp;

  return mix(cooledSurface, fogCol, totalFog) + mieBoost * (1.0 - totalFog * 0.52);
}
`;

let _activeCSM = null;
export function registerCSM(csm) {
  _activeCSM = csm;
}

/**
 * Patches MeshStandardMaterial / MeshPhysicalMaterial while safely chaining Three.js CSM + PMREM IBL!
 * - 2048² real triplanar PBR (albedo, roughness 0.24-0.60 bronze / 0.78-0.95 stone, normal)
 * - Sculpted 8-15% shadow form via warm sunlit-sand upward bounce + cool sky ambient wrap + bronze IBL edge glints
 * - Warm skin wrap lighting + translucent dermal subsurface tint
 * - Cloth sheen + backlit thin-fabric transmission + crisp silhouette rim light
 * - Sky-matched Rayleigh + Mie aerial perspective
 */
export function patchCinematicMaterial(material, opts = {}) {
  const {
    hazeScale = 1.0,
    rimStrength = 0.55,
    rimPower = 3.2,
    bounceStrength = 0.24,
    subsurfaceStrength = 0.0,
    subsurfaceColor = new THREE.Color(0xc43a16),
    skinWrap = false,
    wornGoldHem = false,
    triplanarSet = null,
    triplanarScale = 0.065,
    isBronze = false,
    useCSM = true,
  } = opts;

  if (useCSM && _activeCSM) {
    _activeCSM.setupMaterial(material);
  }
  const prevCompile = material.onBeforeCompile;

  material.onBeforeCompile = (shader, renderer) => {
    if (prevCompile) prevCompile(shader, renderer);

    shader.uniforms.uSunDir = SHARED_UNIFORMS.uSunDir;
    shader.uniforms.uSunColor = SHARED_UNIFORMS.uSunColor;
    shader.uniforms.uSkyZenith = SHARED_UNIFORMS.uSkyZenith;
    shader.uniforms.uSkyMid = SHARED_UNIFORMS.uSkyMid;
    shader.uniforms.uSkyHorizon = SHARED_UNIFORMS.uSkyHorizon;
    shader.uniforms.uHazeBase = SHARED_UNIFORMS.uHazeBase;
    shader.uniforms.uHazeSun = SHARED_UNIFORMS.uHazeSun;
    shader.uniforms.uHazeDensity = SHARED_UNIFORMS.uHazeDensity;
    shader.uniforms.uHeightFogColor = SHARED_UNIFORMS.uHeightFogColor;
    shader.uniforms.uHeightFogDensity = SHARED_UNIFORMS.uHeightFogDensity;
    shader.uniforms.uShadowCool = SHARED_UNIFORMS.uShadowCool;
    shader.uniforms.uHazeScale = { value: hazeScale };
    shader.uniforms.uRimStrength = { value: rimStrength };
    shader.uniforms.uRimPower = { value: rimPower };
    shader.uniforms.uBounceStrength = { value: bounceStrength };
    shader.uniforms.uSubsurfaceStrength = { value: subsurfaceStrength };
    shader.uniforms.uSubsurfaceColor = { value: subsurfaceColor };

    if (triplanarSet) {
      shader.uniforms.uTriAlbedo = { value: triplanarSet.map };
      shader.uniforms.uTriRough = { value: triplanarSet.roughnessMap };
      shader.uniforms.uTriNormal = { value: triplanarSet.normalMap };
      shader.uniforms.uTriScale = { value: triplanarScale };
    }

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
         varying vec3 vWorldPosC;
         varying vec3 vWorldNormalC;
         ${triplanarSet ? 'varying vec3 vTriPosC; varying vec3 vTriNormC;' : ''}
         ${wornGoldHem ? 'varying vec2 vClothUvC;' : ''}`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
         vec4 wpC = vec4(transformed, 1.0);
         #ifdef USE_INSTANCING
           wpC = instanceMatrix * wpC;
         #endif
         wpC = modelMatrix * wpC;
         vWorldPosC = wpC.xyz;
         vec3 nC = objectNormal;
         #ifdef USE_INSTANCING
           nC = mat3(instanceMatrix) * nC;
         #endif
         vWorldNormalC = normalize(mat3(modelMatrix) * nC);
         ${triplanarSet ? 'vTriPosC = transformed; vTriNormC = normalize(objectNormal);' : ''}
         ${wornGoldHem ? 'vClothUvC = uv;' : ''}`
      );

    const triDecls = triplanarSet
      ? /* glsl */ `
        varying vec3 vTriPosC;
        varying vec3 vTriNormC;
        uniform sampler2D uTriAlbedo;
        uniform sampler2D uTriRough;
        uniform sampler2D uTriNormal;
        uniform float uTriScale;

        vec3 triBlendWeights(vec3 n) {
          vec3 w = pow(max(abs(n), vec3(0.001)), vec3(4.0));
          return w / (w.x + w.y + w.z);
        }

        vec3 sampleTriAlbedo(vec3 p, vec3 w) {
          vec3 cx = texture2D(uTriAlbedo, p.zy * uTriScale).rgb;
          vec3 cy = texture2D(uTriAlbedo, p.xz * uTriScale).rgb;
          vec3 cz = texture2D(uTriAlbedo, p.xy * uTriScale).rgb;
          return cx * w.x + cy * w.y + cz * w.z;
        }

        float sampleTriRough(vec3 p, vec3 w) {
          float rx = texture2D(uTriRough, p.zy * uTriScale).r;
          float ry = texture2D(uTriRough, p.xz * uTriScale).r;
          float rz = texture2D(uTriRough, p.xy * uTriScale).r;
          return rx * w.x + ry * w.y + rz * w.z;
        }

        vec3 sampleTriNormalPerturb(vec3 p, vec3 w) {
          vec3 nx = texture2D(uTriNormal, p.zy * uTriScale).xyz * 2.0 - 1.0;
          vec3 ny = texture2D(uTriNormal, p.xz * uTriScale).xyz * 2.0 - 1.0;
          vec3 nz = texture2D(uTriNormal, p.xy * uTriScale).xyz * 2.0 - 1.0;
          vec3 wx = vec3(0.0, nx.y, nx.x);
          vec3 wy = vec3(ny.x, 0.0, ny.y);
          vec3 wz = vec3(nz.x, nz.y, 0.0);
          return (wx * w.x + wy * w.y + wz * w.z) * 0.78;
        }
      `
      : '';

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
         varying vec3 vWorldPosC;
         varying vec3 vWorldNormalC;
         ${wornGoldHem ? 'varying vec2 vClothUvC;' : ''}
         ${triDecls}
         uniform float uHazeScale;
         uniform float uRimStrength;
         uniform float uRimPower;
         uniform float uBounceStrength;
         uniform float uSubsurfaceStrength;
         uniform vec3 uSubsurfaceColor;
         ${GLSL_ATMOSPHERE_CHUNK}`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         ${
           wornGoldHem
             ? `
         // Worn antique gold embroidery along hem
         float hemZone = smoothstep(0.920, 0.935, vClothUvC.y) * (1.0 - smoothstep(0.986, 0.998, vClothUvC.y));
         float bTop = smoothstep(0.008, 0.002, abs(vClothUvC.y - 0.938));
         float bBot = smoothstep(0.009, 0.002, abs(vClothUvC.y - 0.978));
         float chev = abs(fract(vClothUvC.x * 38.0) * 2.0 - 1.0);
         float motif = smoothstep(0.011, 0.003, abs((vClothUvC.y - 0.958) * 2.2 - (chev - 0.5) * 0.04));
         float wear = 0.52 + 0.48 * sin(vClothUvC.x * 91.0) * cos(vClothUvC.x * 29.0);
         float gMask = clamp(hemZone * (bTop + bBot + motif * 0.85) * wear, 0.0, 1.0);
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.45, 0.17), gMask * 0.86);
         diffuseColor.rgb *= mix(0.72, 1.06, smoothstep(0.0, 0.65, abs(vWorldNormalC.y)));
         `
             : ''
         }
         ${
           triplanarSet
             ? `
         vec3 triW = triBlendWeights(vTriNormC);
         vec3 triTex = sampleTriAlbedo(vTriPosC, triW);
         vec3 dNdx = dFdx(vWorldNormalC);
         vec3 dNdy = dFdy(vWorldNormalC);
         float curv = clamp(length(dNdx) + length(dNdy), 0.0, 1.0);
         float edgeWear = smoothstep(0.05, 0.34, curv);
         float sandLedge = smoothstep(0.56, 0.92, vWorldNormalC.y);

         // Weathered ancient surface contrast while preserving luminous shadowed planes
         diffuseColor.rgb *= mix(vec3(0.42), triTex * 1.02, 0.92);
         ${
           isBronze
             ? `diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.64, 0.32), edgeWear * 0.60);`
             : `diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.24, edgeWear * 0.32);`
         }
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.48, 0.36, 0.22), sandLedge * 0.24);
         `
             : ''
         }`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
         ${
           triplanarSet
             ? isBronze
               ? `
         // Authentic bronze specular range: 0.22 (burnished edges) to 0.58 (patina/recesses)
         float triR = sampleTriRough(vTriPosC, triW);
         roughnessFactor = clamp(mix(0.22, 0.58, triR) + sandLedge * 0.20 - edgeWear * 0.16, 0.16, 0.70);
         `
               : `
         // Weathered carved stone: 0.78 to 0.94 with gritty dust in crevices
         float triR = sampleTriRough(vTriPosC, triW);
         roughnessFactor = clamp(mix(0.78, 0.94, triR) + sandLedge * 0.06 - edgeWear * 0.08, 0.70, 0.97);
         `
             : ''
         }`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
         ${
           triplanarSet
             ? `
         vec3 triWorldW = triBlendWeights(vWorldNormalC);
         vec3 triP = sampleTriNormalPerturb(vWorldPosC, triWorldW);
         vec3 triViewP = (viewMatrix * vec4(triP, 0.0)).xyz;
         normal = normalize(normal + triViewP * 0.58);
         `
             : ''
         }`
      )
      .replace(
        '#include <dithering_fragment>',
        `
        vec3 viewDirC = normalize(cameraPosition - vWorldPosC);
        vec3 nC = normalize(vWorldNormalC);
        if (!gl_FrontFacing) nC = -nC;
        float sunUpC = smoothstep(-0.06, 0.10, uSunDir.y);

        // 1. Warm sunlit-sand ground bounce onto shadowed undersides (sand albedo * sun -> prevents black blobs!)
        float downFace = clamp(-nC.y * 0.65 + 0.42, 0.0, 1.0);
        float sideFace = 1.0 - abs(nC.y);
        vec3 sandBounce = vec3(0.78, 0.52, 0.26) * uSunColor * max(diffuseColor.rgb, vec3(0.08)) * (downFace * 0.85 + sideFace * 0.25) * uBounceStrength * (0.14 + 0.86 * sunUpC);
        gl_FragColor.rgb += sandBounce;

        // 2. Sculpted cool-sky shadow wrap fill so backlit forms (Shot 6 kneel & Shot 7 walk-away) hold 8-15% detail!
        float skyFacing = clamp(nC.y * 0.5 + 0.5, 0.0, 1.0);
        float viewGrazing = 1.0 - max(dot(nC, viewDirC), 0.0);
        vec3 skyFillCol = mix(uShadowCool * 1.45, uSkyMid * 0.52, skyFacing * 0.55);
        gl_FragColor.rgb += skyFillCol * max(diffuseColor.rgb, vec3(0.10)) * (0.20 + 0.18 * viewGrazing) * (0.62 + 0.38 * uBounceStrength);

        ${
          skinWrap
            ? `
        // Warm skin wrap lighting + translucent dermal subsurface tint
        float wrapNdl = clamp((dot(nC, uSunDir) + 0.45) / 1.45, 0.0, 1.0);
        float sssBand = smoothstep(0.0, 0.55, wrapNdl) * (1.0 - smoothstep(0.45, 1.0, max(dot(nC, uSunDir), 0.0)));
        gl_FragColor.rgb += vec3(0.82, 0.34, 0.18) * uSunColor * (sssBand * 0.42 + wrapNdl * 0.14) * sunUpC;
        `
            : ''
        }

        // 3. Sun-aligned backlit rim light & silhouette edge lift
        float fresnelC = pow(clamp(1.0 - max(dot(nC, viewDirC), 0.0), 0.0001, 1.0), uRimPower);
        float sunBack = pow(max(dot(-viewDirC, uSunDir), 0.0001), 2.0);
        float sunSide = clamp(dot(nC, uSunDir) * 0.5 + 0.5, 0.0, 1.0);
        gl_FragColor.rgb += uSunColor * fresnelC * (0.28 + 1.40 * sunBack) * (0.35 + 0.65 * sunSide) * uRimStrength * (0.12 + 0.88 * sunUpC);

        ${
          triplanarSet && isBronze
            ? `
        // 4. Metallic bronze specular edge glints catching BOTH the sun AND cool sky horizon on shadowed edges!
        vec3 hBronze = normalize(uSunDir + viewDirC);
        float specGlint = pow(max(dot(nC, hBronze), 0.0001), 64.0) * (0.32 + 0.95 * edgeWear) * sunUpC;
        gl_FragColor.rgb += uSunColor * vec3(1.45, 1.16, 0.76) * specGlint * 0.82;
        float skyEdgeGlint = pow(viewGrazing, 2.4) * (0.28 + 0.85 * edgeWear);
        gl_FragColor.rgb += mix(uSkyHorizon, uSkyMid, 0.45) * vec3(1.15, 0.92, 0.65) * skyEdgeGlint * 0.32;
        `
            : ''
        }

        // 5. Backlit thin-fabric transmission for crimson robe, hood & scarf
        if (uSubsurfaceStrength > 0.001) {
          float backFacingSun = clamp(-dot(nC, uSunDir) * 0.6 + 0.4, 0.0, 1.0);
          float viewThrough = pow(max(dot(-viewDirC, uSunDir), 0.0001), 2.4);
          gl_FragColor.rgb += uSubsurfaceColor * uSunColor * (0.34 + 0.66 * backFacingSun) * (0.24 + 1.05 * viewThrough) * uSubsurfaceStrength * sunUpC;
        }

        // 6. Physically-based sky-matched Rayleigh + Mie aerial perspective
        gl_FragColor.rgb = applyAtmosphere(gl_FragColor.rgb, vWorldPosC, cameraPosition, uHazeScale);

        #include <dithering_fragment>`
      );
  };

  material.customProgramCacheKey = () =>
    `art2_${hazeScale}_${rimStrength}_${rimPower}_${bounceStrength}_${subsurfaceStrength}_${skinWrap ? 1 : 0}_${wornGoldHem ? 1 : 0}_${triplanarSet ? (isBronze ? 2 : 1) : 0}_${useCSM ? 1 : 0}`;
  return material;
}
