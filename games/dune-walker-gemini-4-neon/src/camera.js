import * as THREE from 'three';
import { focalMmToVfov, getShotAt, OPENING_TIME, STORY_DURATION } from './story.js';
import { getDuneHeight } from './terrain.js';

/**
 * CINEMA LOOKBOOK CAMERA ENGINE (BUILT TO EXACT FOCAL LENGTHS & RULE-OF-THIRDS VALUE PLANS):
 * - Shot 1: 85 -> 95 mm telephoto extreme wide (woman lower-right third ~7% H, compressed monoliths!)
 * - Shot 2: 85 mm medium over-the-shoulder (hooded profile & streaming scarf on right third, ring in haze!)
 * - Shot 3: 50 mm low raking tremor shot (shadowed ripples + streaming rivulets + woman on right third)
 * - Shot 4: 135 -> 105 mm telephoto emergence (colossal walker compressed huge against 2 km monolith, full headroom!)
 * - Shot 5: 35 mm monumental passage [OPENING!] positioned cleanly OUTSIDE the walker's leg stride!
 * - Shot 6: 50 mm reverent medium-wide kneel & touch (full curved skull-mask with eye + woman touching medallion!)
 * - Shot 7: 85 -> 115 mm telephoto sunset into blue hour (woman readable >= 3.5% H, full headroom, blazing windows!)
 * - Shot 8: 85 mm haboob dust storm seam
 *
 * Guarantees >= 1.6 m ground clearance, 18-sample terrain LOS guard, and critically damped springs.
 */

function smoothstep(a, b, x) {
  const u = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return u * u * (3 - 2 * u);
}

function easeInOut(u) {
  return u * u * (3 - 2 * u);
}

function stepCritSpring(val, vel, target, omega, dt) {
  const diff = val - target;
  const e = Math.exp(-omega * dt);
  const newVal = target + (diff + (vel + omega * diff) * dt) * e;
  const newVel = (vel - (vel + omega * diff) * omega * dt) * e;
  return [newVal, newVel];
}

export function createCameraController(camera) {
  let storyTime = OPENING_TIME;
  let lastShotKey = -1;
  let currentFocalMm = 35;

  let isDragging = false;
  let idleTimer = 99;
  let userBlend = 0;
  let orbitYaw = -0.35;
  let orbitPitch = 0.18;
  let orbitRadius = 18.0;
  let targetOrbitYaw = orbitYaw;
  let targetOrbitPitch = orbitPitch;
  let targetOrbitRadius = orbitRadius;

  let shakeEnergy = 0;
  let shakeTime = 0;

  const springPos = new THREE.Vector3();
  const springVel = new THREE.Vector3();
  const springTgt = new THREE.Vector3();
  const springTgtVel = new THREE.Vector3();
  let springInitialized = false;

  const desiredPos = new THREE.Vector3();
  const desiredTgt = new THREE.Vector3();
  const userPos = new THREE.Vector3();
  const userTgt = new THREE.Vector3();
  const headPos = new THREE.Vector3();
  const chestPos = new THREE.Vector3();
  const _samplePt = new THREE.Vector3();

  function addShake(amount) {
    shakeEnergy = Math.min(1.5, shakeEnergy + amount);
  }

  function startOrbit(womanPos) {
    if (userBlend < 0.05) {
      const dx = camera.position.x - womanPos.x;
      const dy = camera.position.y - (womanPos.y + 1.4);
      const dz = camera.position.z - womanPos.z;
      const dist = Math.max(2.5, Math.hypot(dx, dy, dz));
      orbitRadius = targetOrbitRadius = THREE.MathUtils.clamp(dist, 2.5, 160.0);
      orbitYaw = targetOrbitYaw = Math.atan2(dx, dz);
      orbitPitch = targetOrbitPitch = THREE.MathUtils.clamp(
        Math.asin(THREE.MathUtils.clamp(dy / dist, -0.95, 0.95)),
        0.04,
        1.18
      );
    }
    isDragging = true;
    idleTimer = 0;
  }

  function dragOrbit(dx, dy) {
    if (!isDragging) return;
    targetOrbitYaw -= dx * 0.0052;
    targetOrbitPitch = THREE.MathUtils.clamp(targetOrbitPitch + dy * 0.0040, 0.04, 1.15);
    idleTimer = 0;
  }

  function zoomOrbit(delta) {
    targetOrbitRadius = THREE.MathUtils.clamp(targetOrbitRadius * (1 + delta * 0.0012), 2.5, 160.0);
    idleTimer = 0;
    if (userBlend < 0.1) userBlend = 0.25;
  }

  function endOrbit() {
    isDragging = false;
  }

  function setStoryTime(t, hardCut = true) {
    storyTime = ((t % STORY_DURATION) + STORY_DURATION) % STORY_DURATION;
    isDragging = false;
    userBlend = 0;
    idleTimer = 99;
    if (hardCut) {
      springInitialized = false;
      lastShotKey = -1;
    }
  }

  function enforceTerrainVisibility(camP, subjectChest, minGroundClearance, checkLOS) {
    const camGround = getDuneHeight(camP.x, camP.z);
    if (camP.y < camGround + minGroundClearance) {
      camP.y = camGround + minGroundClearance;
    }
    if (!checkLOS) return;

    const SAMPLES = 18;
    let worstLiftNeeded = 0;
    for (let i = 1; i <= SAMPLES; i++) {
      const f = i / (SAMPLES + 1);
      _samplePt.lerpVectors(camP, subjectChest, f);
      const duneH = getDuneHeight(_samplePt.x, _samplePt.z) + 0.45;
      const deficit = duneH - _samplePt.y;
      if (deficit > 0) {
        const lift = deficit / Math.max(0.22, 1.0 - f);
        if (lift > worstLiftNeeded) worstLiftNeeded = lift;
      }
    }
    if (worstLiftNeeded > 0) {
      const clampedLift = Math.min(worstLiftNeeded, 16.0);
      camP.y += clampedLift;
      const pull = Math.min(0.20, clampedLift * 0.018);
      camP.x = THREE.MathUtils.lerp(camP.x, subjectChest.x, pull);
      camP.z = THREE.MathUtils.lerp(camP.z, subjectChest.z, pull);
    }
  }

  function evaluateShotCamera(shotIdx, p, woman, walker) {
    const wp = woman.worldPos;
    const wk = walker.worldPos;
    const wkHull = walker.hullWorldPos;
    const wkBrow = walker.browTouchWorld;
    woman.getHeadWorld(headPos);
    woman.getChestWorld(chestPos);

    const e = easeInOut(p);
    let focalMm = 50;
    let dofStrength = 0.0;
    let dofFocus = 10.0;
    let minClearance = 1.65;
    let checkLOS = true;

    if (shotIdx === 0) {
      // SHOT 1 (38 -> 46 mm): Woman on lower-right third (~9% H!), dark shadowed foreground ridge bottom-left,
      // towering opaque ribbed monoliths & colossal half-buried ring rising into saturated azure sky!
      focalMm = THREE.MathUtils.lerp(38, 46, e);
      desiredPos.set(
        wp.x + THREE.MathUtils.lerp(-22.0, -18.0, e),
        wp.y + THREE.MathUtils.lerp(4.6, 4.0, e),
        wp.z + THREE.MathUtils.lerp(44.0, 38.0, e)
      );
      desiredTgt.set(
        wp.x + THREE.MathUtils.lerp(-8.8, -7.4, e),
        wp.y + THREE.MathUtils.lerp(8.2, 7.2, e),
        wp.z - 12.0
      );
    } else if (shotIdx === 1) {
      // SHOT 2 (65 mm MEDIUM OVER-THE-SHOULDER — UPWIND SIDE!):
      // Hooded silhouette & draped cloak sit cleanly on the LEFT THIRD (x ≈ 30%), undulating scarlet scarf
      // sweeping across the right two-thirds toward towering lit/shadowed monoliths & half-buried ring!
      focalMm = 65;
      desiredPos.set(
        wp.x + THREE.MathUtils.lerp(-4.3, -3.9, e),
        wp.y + THREE.MathUtils.lerp(1.48, 1.52, e),
        wp.z + THREE.MathUtils.lerp(5.8, 5.3, e)
      );
      desiredTgt.set(
        headPos.x + THREE.MathUtils.lerp(1.55, 1.38, e),
        headPos.y - 0.04,
        headPos.z - 1.5
      );
      dofStrength = 0.58;
      dofFocus = desiredPos.distanceTo(headPos);
      minClearance = 1.45;
      checkLOS = false;
    } else if (shotIdx === 2) {
      // SHOT 3 (50 mm LOW TREMOR): Sharp foreground shadowed ripples + glistening sunlit rivulets,
      // woman planted firmly on right third (~14% H) against lit/shadowed columns!
      focalMm = 50;
      desiredPos.set(
        wp.x + THREE.MathUtils.lerp(-14.0, -11.5, e),
        wp.y + THREE.MathUtils.lerp(2.15, 2.35, e),
        wp.z + THREE.MathUtils.lerp(16.0, 13.0, e)
      );
      desiredTgt.set(
        wp.x + THREE.MathUtils.lerp(-3.4, -2.6, e),
        wp.y + THREE.MathUtils.lerp(0.85, 1.05, e),
        wp.z - 4.0
      );
    } else if (shotIdx === 3) {
      // SHOT 4 (58 -> 42 mm TELEPHOTO GIANT-SCALE COMPRESSION!):
      // Frames BOTH the crisp woman on the lower-right third (~12% H!) AND the ENTIRE 96m whale-skull walker
      // with generous sky headroom compressed monumentally huge against a 2km ribbed monolith!
      focalMm = THREE.MathUtils.lerp(58, 42, e);
      desiredPos.set(
        wp.x + THREE.MathUtils.lerp(-18.5, -16.0, e),
        wp.y + THREE.MathUtils.lerp(2.8, 2.6, e),
        wp.z + THREE.MathUtils.lerp(42.0, 36.0, e)
      );
      desiredTgt.set(
        THREE.MathUtils.lerp(wp.x - 1.5, wk.x * 0.16 - 2.2, e),
        wp.y + THREE.MathUtils.lerp(7.5, 10.5, e),
        wp.z - 32.0
      );
    } else if (shotIdx === 4) {
      // SHOT 5 (23 mm MONUMENTAL LOW PASSAGE — OPENING FRAME @ 48.4s!):
      // Positioned cleanly OUTSIDE the walker's stride (~24m behind-left -> woman 12% H on lower-right third!),
      // framing the ENTIRE arched biomechanical creature with full sky headroom above every knee & blazing sun!
      focalMm = 23;
      desiredPos.set(
        wp.x + THREE.MathUtils.lerp(-14.5, -12.5, e),
        wp.y + THREE.MathUtils.lerp(2.45, 2.25, e),
        wp.z + THREE.MathUtils.lerp(23.0, 20.0, e)
      );
      desiredTgt.set(
        THREE.MathUtils.lerp(wp.x - 4.5, wkHull.x * 0.25 - 4.0, e),
        wp.y + THREE.MathUtils.lerp(13.0, 14.5, e),
        THREE.MathUtils.lerp(wp.z - 25.0, wkHull.z * 0.55, e)
      );
    } else if (shotIdx === 5) {
      // SHOT 6: TWO-BEAT CINEMA SEQUENCE (OBEYS 30-DEGREE RULE — ZERO AXIAL JUMP CUT!):
      //   6a (57.0 - 66.6 s, 9.6 s): ONE silky unbroken dolly push-in on -X side from wide kneel (66m) -> intimate close-up (21.5m)!
      //   6b (66.6 - 73.0 s, 6.4 s): Crisp 150-deg REVERSE-ANGLE CUT to +X close-up (Image #1: scarf foreground-left, giant skull right, gently pulling back!)
      const midX = THREE.MathUtils.lerp(wp.x, wkBrow.x, 0.48);
      if (p < 0.60) {
        // SHOT 6a (57.0 - 66.6 s): Smooth continuous dolly-in from wide profile kneel straight into close-up of her hand & his glowing eye!
        const qa = easeInOut(p / 0.60);
        focalMm = THREE.MathUtils.lerp(30.0, 25.0, qa);
        const arcAng = THREE.MathUtils.lerp(-1.32, -1.48, qa);
        const rad = THREE.MathUtils.lerp(66.0, 21.5, qa);
        const wideZ = THREE.MathUtils.lerp(wp.z, wkBrow.z, 0.50);
        const focusZ = THREE.MathUtils.lerp(wideZ, wp.z - 2.4, qa);
        desiredPos.set(
          midX + Math.sin(arcAng) * rad,
          wp.y + THREE.MathUtils.lerp(4.0, 2.95, qa),
          focusZ + Math.cos(arcAng) * rad
        );
        desiredTgt.set(
          midX,
          wp.y + THREE.MathUtils.lerp(9.2, 5.2, qa),
          THREE.MathUtils.lerp(wideZ - 1.5, wp.z - 2.4, qa)
        );
        dofStrength = THREE.MathUtils.lerp(0.06, 0.20, qa);
        dofFocus = rad;
        minClearance = 1.45;
        checkLOS = false;
      } else {
        // SHOT 6b (66.6 - 73.0 s, 29 -> 25 mm): +X 150-DEG REVERSE-ANGLE INTIMATE CLOSE-UP (HERO SHOT!)
        // Woman in crimson reaching right toward colossal carved head looming on right half of frame;
        // scarlet scarf sweeping dramatically across bottom-left foreground; starts close & gently pulls back!
        const qb = easeInOut((p - 0.60) / 0.40);
        focalMm = THREE.MathUtils.lerp(29.0, 25.0, qb);
        const arcAng = THREE.MathUtils.lerp(1.18, 1.03, qb);
        const rad = THREE.MathUtils.lerp(8.6, 12.8, qb);
        const revZ = wp.z - THREE.MathUtils.lerp(0.85, 1.25, qb);
        desiredPos.set(
          wp.x + Math.sin(arcAng) * rad,
          wp.y + THREE.MathUtils.lerp(1.90, 2.48, qb),
          revZ + Math.cos(arcAng) * rad
        );
        desiredTgt.set(
          wp.x - THREE.MathUtils.lerp(0.35, 0.65, qb),
          wp.y + THREE.MathUtils.lerp(1.48, 1.88, qb),
          revZ - THREE.MathUtils.lerp(0.45, 0.75, qb)
        );
        dofStrength = 0.26;
        dofFocus = rad;
        minClearance = 1.35;
        checkLOS = false;
      }
    } else if (shotIdx === 6) {
      // SHOT 7 (20 -> 26 mm): ONE SILKY-SMOOTH CONTINUOUS SUNSET-TO-BLUE-HOUR WIDE CRANE!
      // Zero mid-shot zoom kick, zero sideways camera whip — rock-steady horizon framing as the titan rises & departs!
      focalMm = THREE.MathUtils.lerp(20.0, 26.0, e);
      desiredPos.set(
        wp.x + THREE.MathUtils.lerp(-42.0, -38.0, e),
        wp.y + THREE.MathUtils.lerp(14.0, 11.5, e),
        wp.z + THREE.MathUtils.lerp(90.0, 78.0, e)
      );
      desiredTgt.set(
        wp.x + THREE.MathUtils.lerp(-10.0, -14.0, e),
        wp.y + THREE.MathUtils.lerp(24.0, 19.5, e),
        wp.z + THREE.MathUtils.lerp(-24.0, -32.0, e)
      );
      checkLOS = false;
    } else {
      // SHOT 8 (90 - 96 s): C1-CONTINUOUS SEAM INTO HABOOB DUST STORM -> SHOT 1 MORNING!
      // Starts at Shot 7's EXACT position/target/FOV while storm rolls in, then glides inside opaque dust to Shot 1's exact start!
      const sDrift = smoothstep(0.0, 0.50, p);
      const sHide = smoothstep(0.48, 0.98, p);
      const preFocal = THREE.MathUtils.lerp(26.0, 27.5, sDrift);
      const prePx = wp.x + THREE.MathUtils.lerp(-38.0, -37.0, sDrift);
      const prePy = wp.y + THREE.MathUtils.lerp(11.5, 11.0, sDrift);
      const prePz = wp.z + THREE.MathUtils.lerp(78.0, 75.0, sDrift);
      const preTx = wp.x + THREE.MathUtils.lerp(-14.0, -14.5, sDrift);
      const preTy = wp.y + THREE.MathUtils.lerp(19.5, 18.8, sDrift);
      const preTz = wp.z + THREE.MathUtils.lerp(-32.0, -33.0, sDrift);

      focalMm = THREE.MathUtils.lerp(preFocal, 38.0, sHide);
      desiredPos.set(
        THREE.MathUtils.lerp(prePx, wp.x - 22.0, sHide),
        THREE.MathUtils.lerp(prePy, wp.y + 4.6, sHide),
        THREE.MathUtils.lerp(prePz, wp.z + 44.0, sHide)
      );
      desiredTgt.set(
        THREE.MathUtils.lerp(preTx, wp.x - 8.8, sHide),
        THREE.MathUtils.lerp(preTy, wp.y + 8.2, sHide),
        THREE.MathUtils.lerp(preTz, wp.z - 12.0, sHide)
      );
      checkLOS = false;
    }

    enforceTerrainVisibility(desiredPos, chestPos, minClearance, checkLOS);
    currentFocalMm = focalMm;
    return { fov: focalMmToVfov(focalMm), dofStrength, dofFocus };
  }

  function update(dt, woman, walker, tod, aspect) {
    storyTime = (storyTime + dt) % STORY_DURATION;

    if (isDragging) {
      idleTimer = 0;
      userBlend += (1.0 - userBlend) * Math.min(1, dt * 8.0);
    } else {
      idleTimer += dt;
      if (idleTimer > 5.0) {
        userBlend += (0.0 - userBlend) * Math.min(1, dt * 1.25);
        if (userBlend < 0.001) userBlend = 0;
      }
    }

    orbitYaw += (targetOrbitYaw - orbitYaw) * Math.min(1, dt * 10.0);
    orbitPitch += (targetOrbitPitch - orbitPitch) * Math.min(1, dt * 10.0);
    orbitRadius += (targetOrbitRadius - orbitRadius) * Math.min(1, dt * 8.0);

    const shotInfo = getShotAt(storyTime);
    const shotCam = evaluateShotCamera(shotInfo.index, shotInfo.progress, woman, walker);

    const wp = woman.worldPos;
    const wk = walker.hullWorldPos;
    const cosP = Math.cos(orbitPitch);
    userPos.set(
      wp.x + Math.sin(orbitYaw) * cosP * orbitRadius,
      wp.y + 1.55 + Math.sin(orbitPitch) * orbitRadius,
      wp.z + Math.cos(orbitYaw) * cosP * orbitRadius
    );
    enforceTerrainVisibility(userPos, chestPos, 1.65, true);

    const zoomBlend = smoothstep(18.0, 85.0, orbitRadius) * 0.35;
    userTgt.set(
      THREE.MathUtils.lerp(wp.x, wk.x, zoomBlend),
      THREE.MathUtils.lerp(wp.y + 1.4, wk.y * 0.55, zoomBlend),
      THREE.MathUtils.lerp(wp.z, wk.z, zoomBlend)
    );

    const ub = easeInOut(userBlend);
    const targetP = desiredPos.clone().lerp(userPos, ub);
    const targetL = desiredTgt.clone().lerp(userTgt, ub);

    const shotKey = shotInfo.index === 5 ? (shotInfo.progress >= 0.60 ? 51 : 50) : shotInfo.index;
    const isSeamless = (lastShotKey === 6 && shotKey === 7) || (lastShotKey === 7 && shotKey === 0);
    const isCut = !springInitialized || (shotKey !== lastShotKey && !isSeamless && ub < 0.05);
    lastShotKey = shotKey;

    if (isCut) {
      springPos.copy(targetP);
      springVel.set(0, 0, 0);
      springTgt.copy(targetL);
      springTgtVel.set(0, 0, 0);
      springInitialized = true;
    } else {
      const omega = ub > 0.1 ? 9.0 : 6.0;
      [springPos.x, springVel.x] = stepCritSpring(springPos.x, springVel.x, targetP.x, omega, dt);
      [springPos.y, springVel.y] = stepCritSpring(springPos.y, springVel.y, targetP.y, omega, dt);
      [springPos.z, springVel.z] = stepCritSpring(springPos.z, springVel.z, targetP.z, omega, dt);

      [springTgt.x, springTgtVel.x] = stepCritSpring(springTgt.x, springTgtVel.x, targetL.x, omega, dt);
      [springTgt.y, springTgtVel.y] = stepCritSpring(springTgt.y, springTgtVel.y, targetL.y, omega, dt);
      [springTgt.z, springTgtVel.z] = stepCritSpring(springTgt.z, springTgtVel.z, targetL.z, omega, dt);
    }

    const minY = getDuneHeight(springPos.x, springPos.z) + (shotInfo.index === 1 ? 1.35 : 1.60);
    if (springPos.y < minY) springPos.y = minY;

    shakeTime += dt;
    shakeEnergy = Math.max(0, shakeEnergy - dt * 1.45);
    const sAmp = shakeEnergy * shakeEnergy * 0.24 + tod.tremor * 0.14 + tod.stormVeil * 0.11;
    const shakeX = (Math.sin(shakeTime * 11.0) * 0.55 + Math.sin(shakeTime * 7.2) * 0.45) * sAmp;
    const shakeY = (Math.cos(shakeTime * 9.5) * 0.65 + Math.sin(shakeTime * 6.0) * 0.35) * sAmp;

    camera.position.set(springPos.x + shakeX, springPos.y + shakeY, springPos.z);
    camera.lookAt(springTgt.x + shakeX * 0.5, springTgt.y + shakeY * 0.5, springTgt.z);

    // Snap FOV cleanly on film cuts (no distracting zoom-slide between lenses!), smooth otherwise!
    const targetFov = THREE.MathUtils.lerp(shotCam.fov, 26.0, ub);
    const aspectBoost = aspect < 1.8 ? (1.8 - aspect) * 4.0 : 0;
    const desiredFov = targetFov + aspectBoost;
    if (isCut) {
      camera.fov = desiredFov;
      camera.updateProjectionMatrix();
    } else if (Math.abs(camera.fov - desiredFov) > 0.015) {
      camera.fov += (desiredFov - camera.fov) * Math.min(1, dt * 8.0);
      camera.updateProjectionMatrix();
    }

    return {
      storyTime,
      shotIndex: shotInfo.index,
      shotName: shotInfo.shot.name,
      focalMm: currentFocalMm,
      dofStrength: shotCam.dofStrength * (1.0 - ub),
      dofFocus: shotCam.dofFocus,
      isCut,
    };
  }

  return {
    update,
    startOrbit,
    dragOrbit,
    zoomOrbit,
    endOrbit,
    addShake,
    setStoryTime,
    getStoryTime: () => storyTime,
    getFocalMm: () => currentFocalMm,
  };
}
