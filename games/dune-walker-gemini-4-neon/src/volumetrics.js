import * as THREE from 'three';
import { SHARED_UNIFORMS, WIND_DIR } from './atmosphere.js';

/**
 * REAL SHADOW-MAP RAY-MARCHED VOLUMETRIC SCATTERING WITH TEMPORAL REPROJECTION:
 * - Samples the actual live Three.js CSM sun shadow maps (`unpackRGBAToDepth`) at every ray step
 *   across all active cascades (0..38m, 38..380m, 380..2500m) so the walker's 6 legs, skull,
 *   colossal half-buried ring, and ribbed monoliths cut REAL 3D light shafts & shadow volumes!
 * - Blowing desert dust density modeled as layered 3D wind-drifted noise sheets hugging the dunes.
 * - Runs at half-res (high) / 0.35x (medium) / quarter-res (low) with Interleaved Gradient Noise
 *   jitter + ping-pong HalfFloat temporal reprojection (with 3x3 neighborhood clamping, depth
 *   discontinuity rejection, and instant reset on shot cuts -> noise-free & zero ghosting!).
 * - Stores linear depth in `.a` for crisp bilateral depth-aware upsampling in post.js!
 */

const VOL_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const VOL_MARCH_FRAG = /* glsl */ `
  #include <packing>

  uniform sampler2D tDepth;
  uniform sampler2D uShadowMap0;
  uniform sampler2D uShadowMap1;
  uniform sampler2D uShadowMap2;
  uniform mat4 uShadowMatrix0;
  uniform mat4 uShadowMatrix1;
  uniform mat4 uShadowMatrix2;
  uniform float uCascadeCount;
  uniform float uHasShadowMaps;

  uniform mat4 uInvViewProj;
  uniform vec3 uCameraPos;
  uniform float uNear;
  uniform float uFar;
  uniform float uTime;
  uniform float uFrameIndex;
  uniform float uStepCount;

  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uHazeSun;
  uniform vec3 uHazeBase;
  uniform vec3 uSkyHorizon;
  uniform vec3 uWindDir;
  uniform float uStormVeil;
  uniform float uVolStrength;

  varying vec2 vUv;

  float linearizeDepth(float d) {
    float z = d * 2.0 - 1.0;
    return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
  }

  // Interleaved Gradient Noise (Jimenez 2014) + golden-ratio temporal offset
  float ign(vec2 fragCoord, float frameIdx) {
    vec2 p = fragCoord + vec2(frameIdx * 5.588238, frameIdx * 3.178392);
    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
  }

  float hash31(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));
    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);
    return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
  }

  float evalShadowCascade(sampler2D smap, mat4 smat, vec3 wp, float bias, out bool inside) {
    vec4 sc = smat * vec4(wp, 1.0);
    vec3 proj = sc.xyz / max(sc.w, 0.0001);
    inside = (proj.x >= 0.01 && proj.x <= 0.99 && proj.y >= 0.01 && proj.y <= 0.99 && proj.z >= 0.0 && proj.z <= 1.0);
    if (!inside) return 1.0;
    float mapDepth = unpackRGBAToDepth(texture2D(smap, proj.xy));
    return (proj.z - bias <= mapDepth) ? 1.0 : 0.0;
  }

  float sampleCSMVisibility(vec3 wp) {
    if (uHasShadowMaps < 0.5) return 1.0;
    bool in0 = false;
    float v0 = evalShadowCascade(uShadowMap0, uShadowMatrix0, wp, 0.0014, in0);
    if (in0) return v0;

    bool in1 = false;
    float v1 = evalShadowCascade(uShadowMap1, uShadowMatrix1, wp, 0.0018, in1);
    if (in1) return v1;

    if (uCascadeCount > 2.5) {
      bool in2 = false;
      float v2 = evalShadowCascade(uShadowMap2, uShadowMatrix2, wp, 0.0024, in2);
      if (in2) return v2;
    }
    return 1.0;
  }

  float phaseHG(float cosT, float g) {
    float g2 = g * g;
    return (1.0 - g2) / (12.5663706 * pow(max(1.0 + g2 - 2.0 * g * cosT, 0.02), 1.5));
  }

  void main() {
    float rawD = texture2D(tDepth, vUv).r;
    float linD = linearizeDepth(rawD);

    // Reconstruct world-space ray
    vec4 farClip = uInvViewProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
    vec3 farWorld = farClip.xyz / farClip.w;
    vec3 rayDir = normalize(farWorld - uCameraPos);

    float maxRayDist = 1750.0;
    if (rawD < 0.99985) {
      vec4 hitClip = uInvViewProj * vec4(vUv * 2.0 - 1.0, rawD * 2.0 - 1.0, 1.0);
      vec3 hitWorld = hitClip.xyz / hitClip.w;
      maxRayDist = min(length(hitWorld - uCameraPos), maxRayDist);
    }

    float sunUp = smoothstep(-0.04, 0.08, uSunDir.y);
    if (uVolStrength < 0.005 || sunUp < 0.01 || maxRayDist <= 6.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, linD);
      return;
    }

    float cosTheta = dot(rayDir, uSunDir);
    // Sharp dual-lobe Mie scattering: sculpted golden shafts toward low sun WITHOUT washing out legs!
    float phaseFwd = phaseHG(cosTheta, 0.82) * 2.15;
    float phaseMid = phaseHG(cosTheta, 0.36) * 0.46;
    float phase = phaseFwd + phaseMid;

    // Sculpted shadow-cut shafts at low sun (< 16 deg: Shots 4, 5, 6); crisp clean desert air by day (Shots 1-3)!
    float lowSunFactor = mix(1.45, 0.18, smoothstep(0.08, 0.36, max(uSunDir.y, 0.0)));
    float baseDensity = (0.00044 + uStormVeil * 0.00075) * lowSunFactor;

    float tMin = 12.0;
    float marchSpan = max(maxRayDist - tMin, 1.0);
    float jitter = ign(gl_FragCoord.xy, uFrameIndex);
    int nSteps = int(uStepCount);

    vec3 inScatter = vec3(0.0);
    float transmittance = 1.0;
    float prevDist = tMin;
    vec3 windShift = uWindDir * (uTime * 11.5);
    float litSteps = 0.0;
    float shadowSteps = 0.0;

    for (int i = 0; i < 40; i++) {
      if (i >= nSteps) break;
      float s0 = float(i) / uStepCount;
      float s1 = float(i + 1) / uStepCount;
      // Exponential distribution packs samples tightly across walker legs (18..420m) while reaching ring/monoliths (1750m)
      float dEdge0 = tMin + marchSpan * pow(s0, 1.50);
      float dEdge1 = tMin + marchSpan * pow(s1, 1.50);
      float sampleDist = mix(dEdge0, dEdge1, jitter);
      float stepLen = max(dEdge1 - prevDist, 0.5);
      prevDist = dEdge1;

      vec3 wp = uCameraPos + rayDir * sampleDist;

      // Height-stratified desert dust with drifting 3D wind-sheared noise sheets
      float hAbove = max(0.0, wp.y + 6.0);
      float heightProfile = exp(-hAbove * 0.0055) + 0.30 * exp(-hAbove * 0.0014);

      // 2-octave animated dust sheets drifting across the dune basin
      vec3 np = (wp - windShift) * vec3(0.0055, 0.018, 0.0055);
      float n1 = noise3D(np);
      float n2 = noise3D(np * 2.15 + vec3(4.3, -1.7, 2.9));
      float sheetNoise = 0.34 + 1.08 * (n1 * 0.65 + n2 * 0.35);

      float sigmaS = baseDensity * heightProfile * sheetNoise;
      float sigmaT = sigmaS * 1.15;

      // ACTUAL CSM SHADOW MAP VISIBILITY — legs, skull, ring & monoliths carve crisp 3D light & shadow beams!
      float vis = sampleCSMVisibility(wp);
      litSteps += vis;
      shadowSteps += (1.0 - vis);

      // Keep foreground walker legs & woman high-contrast while shafts blaze behind & between legs!
      float nearFade = smoothstep(14.0, 68.0, sampleDist);

      vec3 sunTerm = uSunColor * phase * vis * 1.38;

      float stepExt = exp(-sigmaT * stepLen);
      float integ = (1.0 - stepExt) / max(sigmaT, 1e-6);
      inScatter += transmittance * sunTerm * sigmaS * integ * nearFade;
      transmittance *= stepExt;
      if (transmittance < 0.06) break;
    }

    // Subtle shaft contrast sharpening: rays slicing cleanly next to shadow volumes read clearly without milky glare!
    float shadowFrac = shadowSteps / max(litSteps + shadowSteps, 1.0);
    float beamContrast = mix(0.82, 1.18, smoothstep(0.05, 0.55, shadowFrac));
    vec3 outCol = inScatter * beamContrast * uVolStrength * sunUp * (1.0 - uStormVeil * 0.55);
    outCol = clamp(outCol, vec3(0.0), vec3(1.38));
    gl_FragColor = vec4(outCol, linD);
  }
`;

const VOL_REPROJ_FRAG = /* glsl */ `
  uniform sampler2D tRaw;
  uniform sampler2D tHistory;
  uniform sampler2D tDepth;
  uniform mat4 uInvViewProj;
  uniform mat4 uPrevViewProj;
  uniform vec3 uCameraPos;
  uniform vec2 uTexelSize;
  uniform float uNear;
  uniform float uFar;
  uniform float uHistoryValid;

  varying vec2 vUv;

  float linearizeDepth(float d) {
    float z = d * 2.0 - 1.0;
    return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
  }

  void main() {
    vec4 curr = texture2D(tRaw, vUv);
    float currLinD = curr.a;

    if (uHistoryValid < 0.5) {
      gl_FragColor = curr;
      return;
    }

    // 3x3 neighborhood clamp around current raw volumetric sample -> ZERO ghosting behind moving legs!
    vec3 nMin = curr.rgb;
    vec3 nMax = curr.rgb;
    vec3 nAvg = curr.rgb;
    float wSum = 1.0;
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        if (dx == 0 && dy == 0) continue;
        vec2 oUv = clamp(vUv + vec2(float(dx), float(dy)) * uTexelSize, 0.002, 0.998);
        vec4 s = texture2D(tRaw, oUv);
        float dDiff = abs(s.a - currLinD) / max(currLinD, 1.0);
        float w = exp(-dDiff * 14.0);
        nMin = min(nMin, s.rgb);
        nMax = max(nMax, s.rgb);
        nAvg += s.rgb * w;
        wSum += w;
      }
    }
    vec3 spatialSmooth = mix(curr.rgb, nAvg / wSum, 0.42);

    // Reproject world reference point into previous frame's clip space
    float rawD = texture2D(tDepth, vUv).r;
    vec3 wpRef;
    if (rawD >= 0.99985) {
      vec4 farClip = uInvViewProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
      vec3 rayDir = normalize(farClip.xyz / farClip.w - uCameraPos);
      wpRef = uCameraPos + rayDir * 1100.0;
    } else {
      vec4 hitClip = uInvViewProj * vec4(vUv * 2.0 - 1.0, rawD * 2.0 - 1.0, 1.0);
      wpRef = hitClip.xyz / hitClip.w;
    }

    vec4 prevClip = uPrevViewProj * vec4(wpRef, 1.0);
    vec2 prevUv = (prevClip.xy / max(prevClip.w, 0.0001)) * 0.5 + 0.5;

    bool inBounds = prevClip.w > 0.0 && prevUv.x > 0.003 && prevUv.x < 0.997 && prevUv.y > 0.003 && prevUv.y < 0.997;
    if (!inBounds) {
      gl_FragColor = vec4(spatialSmooth, currLinD);
      return;
    }

    vec4 hist = texture2D(tHistory, prevUv);
    float depthRatio = abs(hist.a - currLinD) / max(min(hist.a, currLinD), 1.5);
    float depthAccept = 1.0 - smoothstep(0.04, 0.14, depthRatio);

    // Softly widen clamp bounds slightly for smooth convergence while killing ghost trails
    vec3 pad = (nMax - nMin) * 0.18 + vec3(0.004);
    vec3 clampedHist = clamp(hist.rgb, max(vec3(0.0), nMin - pad), nMax + pad);

    float alpha = mix(1.0, 0.16, depthAccept);
    vec3 finalRgb = mix(clampedHist, spatialSmooth, alpha);
    gl_FragColor = vec4(finalRgb, currLinD);
  }
`;

export function createVolumetricPass(renderer, camera, csm, width, height) {
  let scale = 0.5;
  let stepCount = 28;

  const makeRT = (w, h) =>
    new THREE.WebGLRenderTarget(Math.max(2, w), Math.max(2, h), {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    });

  const pr = renderer.getPixelRatio();
  let vw = Math.max(2, Math.floor(width * pr * scale));
  let vh = Math.max(2, Math.floor(height * pr * scale));

  const rawRT = makeRT(vw, vh);
  let histRead = makeRT(vw, vh);
  let histWrite = makeRT(vw, vh);

  // Fallback 1x1 white depth texture before frame 0 shadow map exists
  const dummyTex = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
  dummyTex.needsUpdate = true;

  const fsGeo = new THREE.PlaneGeometry(2, 2);
  const orthoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const marchMat = new THREE.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tDepth: { value: null },
      uShadowMap0: { value: dummyTex },
      uShadowMap1: { value: dummyTex },
      uShadowMap2: { value: dummyTex },
      uShadowMatrix0: { value: new THREE.Matrix4() },
      uShadowMatrix1: { value: new THREE.Matrix4() },
      uShadowMatrix2: { value: new THREE.Matrix4() },
      uCascadeCount: { value: csm.lights.length },
      uHasShadowMaps: { value: 0.0 },
      uInvViewProj: { value: new THREE.Matrix4() },
      uCameraPos: { value: new THREE.Vector3() },
      uNear: { value: camera.near },
      uFar: { value: camera.far },
      uTime: { value: 0 },
      uFrameIndex: { value: 0 },
      uStepCount: { value: stepCount },
      uSunDir: SHARED_UNIFORMS.uSunDir,
      uSunColor: SHARED_UNIFORMS.uSunColor,
      uHazeSun: SHARED_UNIFORMS.uHazeSun,
      uHazeBase: SHARED_UNIFORMS.uHazeBase,
      uSkyHorizon: SHARED_UNIFORMS.uSkyHorizon,
      uWindDir: { value: WIND_DIR.clone() },
      uStormVeil: SHARED_UNIFORMS.uStormVeil,
      uVolStrength: { value: 1.0 },
    },
    vertexShader: VOL_VERT,
    fragmentShader: VOL_MARCH_FRAG,
  });

  const reprojMat = new THREE.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tRaw: { value: rawRT.texture },
      tHistory: { value: histRead.texture },
      tDepth: { value: null },
      uInvViewProj: { value: new THREE.Matrix4() },
      uPrevViewProj: { value: new THREE.Matrix4() },
      uCameraPos: { value: new THREE.Vector3() },
      uTexelSize: { value: new THREE.Vector2(1 / vw, 1 / vh) },
      uNear: { value: camera.near },
      uFar: { value: camera.far },
      uHistoryValid: { value: 0.0 },
    },
    vertexShader: VOL_VERT,
    fragmentShader: VOL_REPROJ_FRAG,
  });

  const marchScene = new THREE.Scene();
  marchScene.add(new THREE.Mesh(fsGeo, marchMat));

  const reprojScene = new THREE.Scene();
  reprojScene.add(new THREE.Mesh(fsGeo, reprojMat));

  const _viewProj = new THREE.Matrix4();
  const _invViewProj = new THREE.Matrix4();
  const _prevViewProj = new THREE.Matrix4();
  let hasHistory = false;
  let frameIndex = 0;

  function resize(w, h) {
    const dpr = renderer.getPixelRatio();
    vw = Math.max(2, Math.floor(w * dpr * scale));
    vh = Math.max(2, Math.floor(h * dpr * scale));
    rawRT.setSize(vw, vh);
    histRead.setSize(vw, vh);
    histWrite.setSize(vw, vh);
    reprojMat.uniforms.uTexelSize.value.set(1 / vw, 1 / vh);
    hasHistory = false;
  }

  function setQuality(tier) {
    if (tier === 'low') {
      scale = 0.25;
      stepCount = 14;
    } else if (tier === 'medium') {
      scale = 0.35;
      stepCount = 22;
    } else {
      scale = 0.50;
      stepCount = 36;
    }
    marchMat.uniforms.uStepCount.value = stepCount;
    const sz = renderer.getSize(new THREE.Vector2());
    resize(sz.x, sz.y);
  }

  function resetHistory() {
    hasHistory = false;
  }

  function render(depthTexture, time, tod, isCut = false) {
    if (isCut) hasHistory = false;
    frameIndex = (frameIndex + 1) % 64;

    camera.updateMatrixWorld();
    _viewProj.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    _invViewProj.copy(_viewProj).invert();

    // Bind live CSM shadow maps & shadow matrices populated by the scene pass
    const lights = csm.lights;
    let readyCount = 0;
    for (let i = 0; i < 3; i++) {
      const l = lights[i];
      if (l && l.shadow && l.shadow.map && l.shadow.map.texture) {
        marchMat.uniforms[`uShadowMap${i}`].value = l.shadow.map.texture;
        marchMat.uniforms[`uShadowMatrix${i}`].value.copy(l.shadow.matrix);
        readyCount++;
      } else {
        marchMat.uniforms[`uShadowMap${i}`].value = dummyTex;
      }
    }

    marchMat.uniforms.tDepth.value = depthTexture;
    marchMat.uniforms.uCascadeCount.value = lights.length;
    marchMat.uniforms.uHasShadowMaps.value = readyCount >= 2 ? 1.0 : 0.0;
    marchMat.uniforms.uInvViewProj.value.copy(_invViewProj);
    marchMat.uniforms.uCameraPos.value.copy(camera.position);
    marchMat.uniforms.uNear.value = camera.near;
    marchMat.uniforms.uFar.value = camera.far;
    marchMat.uniforms.uTime.value = time;
    marchMat.uniforms.uFrameIndex.value = frameIndex;
    marchMat.uniforms.uVolStrength.value = 1.15;

    reprojMat.uniforms.tRaw.value = rawRT.texture;
    reprojMat.uniforms.tHistory.value = histRead.texture;
    reprojMat.uniforms.tDepth.value = depthTexture;
    reprojMat.uniforms.uInvViewProj.value.copy(_invViewProj);
    reprojMat.uniforms.uPrevViewProj.value.copy(_prevViewProj);
    reprojMat.uniforms.uCameraPos.value.copy(camera.position);
    reprojMat.uniforms.uNear.value = camera.near;
    reprojMat.uniforms.uFar.value = camera.far;
    reprojMat.uniforms.uHistoryValid.value = hasHistory ? 1.0 : 0.0;

    const prevTarget = renderer.getRenderTarget();
    const prevAutoClear = renderer.autoClear;
    const prevShadowAuto = renderer.shadowMap.autoUpdate;
    renderer.autoClear = false;
    renderer.shadowMap.autoUpdate = false;

    // 1. Half/quarter-res CSM ray-march
    renderer.setRenderTarget(rawRT);
    renderer.render(marchScene, orthoCam);

    // 2. Neighborhood-clamped temporal reprojection
    renderer.setRenderTarget(histWrite);
    renderer.render(reprojScene, orthoCam);

    renderer.setRenderTarget(prevTarget);
    renderer.autoClear = prevAutoClear;
    renderer.shadowMap.autoUpdate = prevShadowAuto;

    // Swap ping-pong history buffers
    const outTex = histWrite.texture;
    const tmp = histRead;
    histRead = histWrite;
    histWrite = tmp;

    _prevViewProj.copy(_viewProj);
    hasHistory = true;

    return { texture: outTex, texelSize: reprojMat.uniforms.uTexelSize.value };
  }

  return {
    render,
    resize,
    setQuality,
    resetHistory,
    getResolution: () => ({ width: vw, height: vh, scale, stepCount }),
  };
}
