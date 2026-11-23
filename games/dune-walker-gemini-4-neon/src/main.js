import * as THREE from 'three';
import { CSM } from 'three/addons/csm/CSM.js';
import { registerCSM, SHARED_UNIFORMS, syncAtmosphereUniforms } from './atmosphere.js';
import {
  createStoryLightingController,
  focalMmToVfov,
  getNextShotStartTime,
  OPENING_TIME,
  STORY_DURATION,
} from './story.js';
import { getProceduralTextures } from './textures.js';
import { createSkyDome, createSkyIBL } from './sky.js';
import { createMegastructures } from './megastructures.js';
import { createDesert, getDuneHeight } from './terrain.js';
import { createParticleSystem } from './particles.js';
import { createWoman } from './woman.js';
import { createWalker } from './walker.js';
import { createCameraController } from './camera.js';
import { createAudioEngine } from './audio.js';
import { createVolumetricPass } from './volumetrics.js';
import { createPostPipeline } from './post.js';

/**
 * DUNE WALKER — Coupled-Gait Biomechanical Walker + CSM Ray-Marched Volumetrics + AgX + Oren-Nayar Sand
 * - Coupled phase-clock wave/ripple gait with zero leg-split guarantee (|hip-foot| <= 0.97*(L1+L2), zero slide)
 * - Real CSM shadow-map ray-marched volumetric dust shafts with temporal reprojection (half/quarter-res)
 * - AgX Filmic tone mapping + split toning + local contrast + warm halation + depth-gated anamorphic streak
 * - Screen-space contact shadows grounding feet, robe hem & scarf onto Oren-Nayar wind-rippled desert sand
 * - Live PMREM IBL + warm sunlit-sand bounce holding 8-15% sculpted form in backlit shadow masses
 */

const viewport = document.getElementById('viewport');
const hintEl = document.getElementById('hint');
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

getProceduralTextures();

// --- Renderer ---
const renderer = new THREE.WebGLRenderer({
  antialias: false,
  powerPreference: 'high-performance',
  alpha: false,
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping; // AgX handled once in final HDR grade pass
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x0c1322, 1);
viewport.appendChild(renderer.domElement);

// --- Scene & Camera ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(focalMmToVfov(35), 2.39, 0.25, 8500);
const camCtrl = createCameraController(camera);

// --- Continuous Forward Time-of-Day Lighting Controller ---
const lightingCtrl = createStoryLightingController(OPENING_TIME);
const openTod = lightingCtrl.current;
syncAtmosphereUniforms(openTod);

// --- Live PMREM Image-Based Lighting (live sky + warm sunlit sand bounce -> scene.environment!) ---
const skyIBL = createSkyIBL(renderer, scene);

// --- Cascaded Shadow Maps (CSM) ---
// Custom splits: Cascade 0 (0..38m) razor-sharp on woman & ripples, Cascade 1 (38..380m) full walker legs,
// Cascade 2 (380..2500m) colossal ring & monoliths so real shadow volumes cut through volumetric dust!
const csmMaxFar = isMobile ? 1600 : 2500;
const csm = new CSM({
  maxFar: csmMaxFar,
  cascades: isMobile ? 2 : 3,
  mode: 'custom',
  customSplitsCallback: (cascadeCount, near, far, target) => {
    if (cascadeCount === 2) {
      target.push(0.042, 1.0);
    } else {
      target.push(38 / csmMaxFar, 380 / csmMaxFar, 1.0);
    }
  },
  parent: scene,
  shadowMapSize: isMobile ? 1024 : 2048,
  lightIntensity: openTod.sunIntensity,
  lightColor: openTod.sunColor,
  lightDirection: openTod.sunDir.clone().negate(),
  lightMargin: 240,
  shadowBias: -0.00045,
  camera,
});
csm.fade = true;
registerCSM(csm);

const hemiLight = new THREE.HemisphereLight(openTod.hemiSky, openTod.hemiGround, openTod.hemiIntensity);
scene.add(hemiLight);

// --- Audio ---
const audio = createAudioEngine();

// --- Build World Entities ---
const sky = createSkyDome();
scene.add(sky);

const megastructures = createMegastructures();
scene.add(megastructures.group);

const particles = createParticleSystem();
scene.add(particles.points);

const desert = createDesert(csm);
scene.add(desert.group);

const woman = createWoman(particles, () => audio.playWomanStep());
scene.add(woman.root);
scene.add(woman.worldFXGroup);

const footfallLog = [];
const _footNdc = new THREE.Vector3();

const walker = createWalker(
  particles,
  (footPos) => {
    const dist = camera.position.distanceTo(footPos);
    const shake = THREE.MathUtils.clamp(110 / Math.max(30, dist), 0.10, 0.55) * 0.35;
    camCtrl.addShake(shake);
    audio.playWalkerBoom(dist);
    _footNdc.copy(footPos).project(camera);
    footfallLog.push({
      simTime: totalTime,
      storyTime: camCtrl.getStoryTime(),
      dist,
      pan: THREE.MathUtils.clamp(_footNdc.x * 0.65, -0.72, 0.72),
    });
  },
  (fx, fz, fyaw) => {
    desert.stampWalkerCrater(fx, fz, fyaw);
  }
);
scene.add(walker.root);
scene.add(walker.worldFXGroup);

// Pre-warm opening Shot 5 immediately
walker.snapToStoryTime(OPENING_TIME, openTod, woman.worldPos);
woman.prewarm(OPENING_TIME, openTod);

// --- Viewport, Volumetric Pass & Post-Processing Pipeline ---
function getViewportSize() {
  const rect = viewport.getBoundingClientRect();
  return {
    w: Math.max(2, Math.floor(rect.width)),
    h: Math.max(2, Math.floor(rect.height)),
  };
}

let currentDprCap = isMobile ? 1.35 : 2.0;
const initSize = getViewportSize();
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, currentDprCap));
renderer.setSize(initSize.w, initSize.h, false);
camera.aspect = initSize.w / initSize.h;
camera.updateProjectionMatrix();
csm.updateFrustums();

const volumetrics = createVolumetricPass(renderer, camera, csm, initSize.w, initSize.h);
const post = createPostPipeline(renderer, scene, camera, initSize.w, initSize.h);

function handleResize() {
  const { w, h } = getViewportSize();
  const pr = Math.min(window.devicePixelRatio || 1, currentDprCap);
  renderer.setPixelRatio(pr);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  csm.updateFrustums();
  volumetrics.resize(w, h);
  post.resize(w, h);
  particles.setPixelRatio(pr);
}
window.addEventListener('resize', handleResize);

setTimeout(() => {
  if (hintEl) hintEl.classList.add('hidden');
}, 4000);

// --- Interaction: Drag to Orbit (5s auto-return) & Tap to Skip (3.0s smooth light blend!) ---
let pointerActive = false;
let pointerId = null;
let downX = 0, downY = 0, lastX = 0, lastY = 0;
let downTime = 0;
let hasDragged = false;
let lastKneelHornFired = false;

function skipToNextShot() {
  audio.unlock();
  lightingCtrl.beginSmoothTransition();
  const nextT = getNextShotStartTime(camCtrl.getStoryTime());
  camCtrl.setStoryTime(nextT, true);
  volumetrics.resetHistory();
  particles.clear();
  const tod = lightingCtrl.update(0.001, nextT);
  syncAtmosphereUniforms(tod);
  skyIBL.update(0, true);
  walker.snapToStoryTime(nextT, tod, woman.worldPos);
  if (nextT >= 57.0 && nextT < 73.0) {
    audio.playMournfulHorn();
    lastKneelHornFired = true;
  } else {
    lastKneelHornFired = false;
  }
}

const domEl = renderer.domElement;

domEl.addEventListener('pointerdown', (e) => {
  if (pointerActive && e.pointerId !== pointerId) return;
  pointerActive = true;
  pointerId = e.pointerId;
  downX = lastX = e.clientX;
  downY = lastY = e.clientY;
  downTime = performance.now();
  hasDragged = false;
  domEl.setPointerCapture(e.pointerId);
});

domEl.addEventListener('pointermove', (e) => {
  if (!pointerActive || e.pointerId !== pointerId) return;
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  if (!hasDragged && Math.hypot(e.clientX - downX, e.clientY - downY) > 7) {
    hasDragged = true;
    camCtrl.startOrbit(woman.worldPos);
  }
  if (hasDragged) camCtrl.dragOrbit(dx, dy);
});

function finishPointer(e) {
  if (!pointerActive || e.pointerId !== pointerId) return;
  pointerActive = false;
  try { domEl.releasePointerCapture(e.pointerId); } catch {}
  if (hasDragged) {
    camCtrl.endOrbit();
  } else if (performance.now() - downTime < 420) {
    skipToNextShot();
  }
}
domEl.addEventListener('pointerup', finishPointer);
domEl.addEventListener('pointercancel', finishPointer);

domEl.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();
    camCtrl.startOrbit(woman.worldPos);
    camCtrl.zoomOrbit(e.deltaY);
    camCtrl.endOrbit();
  },
  { passive: false }
);

// --- Adaptive Performance Scaler (targets ~60 fps on M-series laptop; scales volumetric res/steps, AO, SMAA & cloth!) ---
let qualityTier = isMobile ? 'medium' : 'high';
let emaFrameMs = 16.6;
let perfTimer = 0;
let shadowSkip = 0;
let manualClock = false;

function applyQualityTier(tier) {
  qualityTier = tier;
  currentDprCap = tier === 'low' ? (isMobile ? 1.0 : 1.25) : tier === 'medium' ? (isMobile ? 1.25 : 1.55) : (isMobile ? 1.5 : 2.0);
  volumetrics.setQuality(tier);
  post.setQuality(tier);
  walker.setVolumetricQuality(tier);
  woman.setClothQuality(tier);
  particles.setQuality(tier);
  desert.setVeilQuality(tier);
  handleResize();
}
applyQualityTier(qualityTier);

// --- Main Loop ---
let totalTime = 0;
let lastNow = performance.now();
const _csmDir = new THREE.Vector3();

function stepSimulation(dt, forceIBL = false) {
  totalTime += dt;
  SHARED_UNIFORMS.uTime.value = totalTime;

  const storyT = camCtrl.getStoryTime();
  const tod = lightingCtrl.update(dt, storyT);
  syncAtmosphereUniforms(tod);

  if (forceIBL || !manualClock) {
    skyIBL.update(dt, forceIBL);
  }

  if (tod.kneelBlend > 0.12 && !lastKneelHornFired) {
    lastKneelHornFired = true;
    audio.playMournfulHorn();
  } else if (tod.kneelBlend < 0.02) {
    lastKneelHornFired = false;
  }

  _csmDir.copy(tod.sunDir).negate();
  if (_csmDir.y > -0.10) {
    _csmDir.y = -0.10;
    _csmDir.normalize();
  }
  csm.lightDirection.copy(_csmDir);
  const sunShadowFade = THREE.MathUtils.clamp((tod.sunDir.y + 0.04) / 0.12, 0.05, 1.0);
  for (let i = 0; i < csm.lights.length; i++) {
    csm.lights[i].color.copy(tod.sunColor);
    csm.lights[i].intensity = (tod.sunIntensity / csm.lights.length) * sunShadowFade * 1.50;
  }
  hemiLight.color.copy(tod.hemiSky);
  hemiLight.groundColor.copy(tod.hemiGround);
  hemiLight.intensity = tod.hemiIntensity;

  woman.update(dt, storyT, tod);
  walker.update(dt, storyT, tod, woman.worldPos);

  const camState = camCtrl.update(dt, woman, walker, tod, camera.aspect);

  csm.update();
  sky.position.copy(camera.position);

  desert.update(woman.worldPos, walker.legWorldFeet);
  particles.update(dt, woman.worldPos, walker.worldPos, storyT, tod.tremor, tod.stormVeil);
  audio.update(totalTime, tod);

  return { tod, camState };
}

function stepFrame(dt, snapExposure = false, forceIBL = false) {
  const { tod, camState } = stepSimulation(dt, forceIBL);

  if (qualityTier === 'low') {
    shadowSkip = (shadowSkip + 1) % 2;
    renderer.shadowMap.autoUpdate = shadowSkip === 0;
    if (shadowSkip === 0) renderer.shadowMap.needsUpdate = true;
  } else {
    renderer.shadowMap.autoUpdate = true;
  }

  post.render(
    dt,
    totalTime,
    tod,
    camState.dofStrength,
    camState.dofFocus,
    snapExposure,
    volumetrics,
    camState.isCut
  );
}

stepFrame(0.016, true, true);

function animate(now) {
  requestAnimationFrame(animate);
  if (manualClock) {
    lastNow = now;
    return;
  }
  const rawMs = now - lastNow;
  lastNow = now;
  const dt = Math.min(0.05, Math.max(0.001, rawMs * 0.001));

  if (rawMs > 2 && rawMs < 200) {
    emaFrameMs = emaFrameMs * 0.92 + rawMs * 0.08;
    perfTimer += dt;
    if (perfTimer > 2.5) {
      perfTimer = 0;
      const down = isMobile ? 34.0 : 21.0;
      const up = isMobile ? 22.0 : 14.5;
      if (emaFrameMs > down && qualityTier !== 'low') {
        applyQualityTier(qualityTier === 'high' ? 'medium' : 'low');
      } else if (emaFrameMs < up && qualityTier !== 'high' && !isMobile) {
        applyQualityTier(qualityTier === 'low' ? 'medium' : 'high');
      }
    }
  }

  stepFrame(dt, false, false);
}
requestAnimationFrame(animate);

// Quality-Gate & Continuous Real-Time Kinematics Audit Hook
window.__DUNE_WALKER__ = {
  setManualClock(enabled) {
    manualClock = Boolean(enabled);
  },
  clearFootfallLog() {
    footfallLog.length = 0;
    return totalTime;
  },
  getFootfallLog() {
    return footfallLog.slice();
  },
  resetToStoryTime(sec) {
    camCtrl.setStoryTime(sec, true);
    volumetrics.resetHistory();
    particles.clear();
    desert.clearCraters();
    const tod = lightingCtrl.snapInstant(sec);
    syncAtmosphereUniforms(tod);
    skyIBL.update(0, true);
    walker.snapToStoryTime(sec, tod, woman.worldPos);
    walker.resetKinematicsAudit();
    stepFrame(1 / 60, true, true);
  },
  // Continuous real-time playback step (NO jumpToTime / NO snap!) for 1-second quality-gate capture!
  stepRealTime(seconds, fps = 60, renderEveryFrame = false) {
    const dt = 1 / fps;
    const totalSteps = Math.max(1, Math.round(seconds * fps));
    let lastRenderMs = 0;
    for (let i = 0; i < totalSteps; i++) {
      const isLast = i === totalSteps - 1;
      // Render final 6 frames so temporal reprojection converges identically to live playback!
      const shouldRender = renderEveryFrame || i >= totalSteps - 6;
      if (shouldRender) {
        const t0 = performance.now();
        skyIBL.update(dt, i === totalSteps - 6);
        stepFrame(dt, false, false);
        lastRenderMs = performance.now() - t0;
      } else {
        stepSimulation(dt, false);
      }
      if (isLast && !shouldRender) {
        stepFrame(dt, false, false);
      }
    }
    return {
      storyTime: Number(camCtrl.getStoryTime().toFixed(2)),
      renderMs: Number(lastRenderMs.toFixed(2)),
      audit: walker.getKinematicsAudit(),
    };
  },
  // Full 96s continuous real-time kinematics audit at exact fixed dt = 1/fps (tests 60fps & 30fps without jumpToTime!)
  runKinematicsAudit(fps = 60, durationSec = STORY_DURATION) {
    const prevManual = manualClock;
    manualClock = true;
    const dt = 1 / fps;
    const startSec = 0.0;
    camCtrl.setStoryTime(startSec, true);
    particles.clear();
    desert.clearCraters();
    const tod0 = lightingCtrl.snapInstant(startSec);
    syncAtmosphereUniforms(tod0);
    walker.snapToStoryTime(startSec, tod0, woman.worldPos);
    walker.resetKinematicsAudit();

    const steps = Math.round(durationSec * fps);
    for (let i = 0; i < steps; i++) {
      stepSimulation(dt, false);
    }
    const report = walker.getKinematicsAudit();
    manualClock = prevManual;
    return { fps, durationSec, steps, ...report };
  },
  jumpToTime(sec) {
    camCtrl.setStoryTime(sec, true);
    volumetrics.resetHistory();
    particles.clear();
    const tod = lightingCtrl.snapInstant(sec);
    syncAtmosphereUniforms(tod);
    skyIBL.update(0, true);
    walker.snapToStoryTime(sec, tod, woman.worldPos);
    for (let i = 0; i < 24; i++) stepFrame(0.02, i === 0, i === 0);
  },
  setQuality(tier) {
    applyQualityTier(tier);
  },
  simulateTapAndWait(waitSec) {
    skipToNextShot();
    const steps = Math.max(1, Math.round(waitSec / 0.03));
    for (let i = 0; i < steps; i++) stepFrame(0.03, false, i === 0);
  },
  getKinematicsAudit() {
    return walker.getKinematicsAudit();
  },
  // Renders the current scene from any arbitrary orbit camera angle around woman.worldPos (for 360° visual audits)
  renderOrbitView(yawRad, pitchRad, radius, targetOffsetY = 1.0, fovDeg = 32) {
    const wp = woman.worldPos;
    const tx = wp.x, ty = wp.y + targetOffsetY, tz = wp.z;
    const cosP = Math.cos(pitchRad);
    camera.position.set(
      tx + Math.sin(yawRad) * cosP * radius,
      ty + Math.sin(pitchRad) * radius,
      tz + Math.cos(yawRad) * cosP * radius
    );
    camera.fov = fovDeg;
    camera.updateProjectionMatrix();
    camera.lookAt(tx, ty, tz);
    csm.update();
    sky.position.copy(camera.position);
    post.render(1 / 60, totalTime, lightingCtrl.current, 0, 10, true, volumetrics, true);
    return {
      womanPos: wp.toArray().map((v) => Number(v.toFixed(2))),
      browTouchWorld: walker.browTouchWorld.toArray().map((v) => Number(v.toFixed(2))),
      headWorldPos: walker.headWorldPos.toArray().map((v) => Number(v.toFixed(2))),
      rightHandWorld: woman.getRightHandWorld().toArray().map((v) => Number(v.toFixed(2))),
    };
  },
  getStats() {
    const t = camCtrl.getStoryTime();
    const tod = lightingCtrl.current;
    return {
      storyTime: Number(t.toFixed(1)),
      focalMm: Number(camCtrl.getFocalMm().toFixed(0)),
      vFov: Number(camera.fov.toFixed(1)),
      sunElev: Number(tod.sunElev.toFixed(1)),
      hasIBL: Boolean(scene.environment),
      volRes: volumetrics.getResolution(),
      stormVeil: Number(tod.stormVeil.toFixed(2)),
      exposure: Number(post.getExposure().toFixed(2)),
      qualityTier,
      emaFrameMs: Number(emaFrameMs.toFixed(1)),
      camAboveSand: Number((camera.position.y - getDuneHeight(camera.position.x, camera.position.z)).toFixed(2)),
      womanPos: woman.worldPos.toArray().map((v) => Number(v.toFixed(1))),
      walkerDist: Number(woman.worldPos.distanceTo(walker.worldPos).toFixed(1)),
      kinematics: walker.getKinematicsAudit(),
    };
  },
};
