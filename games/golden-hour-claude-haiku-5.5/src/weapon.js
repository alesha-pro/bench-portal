// First-person rifle: procedural viewmodel, iron sights that sit exactly on the camera axis, a fixed recoil
// pattern, spring-driven kick and sway, the three-beat reload, and the slide-into-aim flourish.
// Everything the rest of the game needs (shots, sounds, shells) is emitted as entries in `events`.
import * as THREE from 'three';
import { CFG } from './config.js';
import { Spring, damp, clamp, lerp, smoothstep } from './utils.js';

// Sight line height above the gun origin (gun-local). Front post and rear aperture sit on this line.
export const SIGHT_Y = 0.086;
const HIP_POS = new THREE.Vector3(0.21, -0.25, -0.52);
const ADS_POS = new THREE.Vector3(0, -SIGHT_Y, -0.62); // rear aperture lands at camera z -0.56 on the crosshair axis
const SPRINT_POS = new THREE.Vector3(0.05, -0.16, 0.02);
const SPRINT_ROT = new THREE.Euler(-0.36, 0.22, 0.2);
const TMP_V = new THREE.Vector3();
const TMP_Q = new THREE.Quaternion();

function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function limb(mesh, a, b, radius) {
  const len = a.distanceTo(b);
  mesh.position.copy(a).lerp(b, 0.5);
  TMP_V.copy(b).sub(a).normalize();
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), TMP_V);
  mesh.scale.set(radius, len, radius);
}

export function buildViewModel(textures) {
  const root = new THREE.Group();
  root.name = 'viewmodel';

  const metal = new THREE.MeshStandardMaterial({
    color: 0x3c4046, roughness: 0.4, metalness: 0.85,
    map: textures.steel.map, roughnessMap: textures.steel.roughnessMap, normalMap: textures.steel.normalMap,
    normalScale: new THREE.Vector2(0.7, 0.7),
  });
  const polymer = new THREE.MeshStandardMaterial({ color: 0x4b4636, roughness: 0.72, metalness: 0.0 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x141517, roughness: 0.85, metalness: 0.1 });
  const sleeve = new THREE.MeshStandardMaterial({ color: 0x4d5137, roughness: 0.9, metalness: 0 });
  const skin = new THREE.MeshStandardMaterial({ color: 0x9c7560, roughness: 0.6, metalness: 0 });
  const glow = new THREE.MeshBasicMaterial({ color: 0xff3b2a, toneMapped: false });

  const add = (geo, mat, x, y, z, parent = root) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = false;
    parent.add(m);
    return m;
  };

  // Receiver, top rail, handguard, barrel, muzzle brake, stock.
  add(new THREE.BoxGeometry(0.055, 0.078, 0.26), metal, 0, 0.0, -0.02);
  add(new THREE.BoxGeometry(0.036, 0.02, 0.38), metal, 0, 0.0475, -0.16);
  add(new THREE.BoxGeometry(0.062, 0.062, 0.3), polymer, 0, -0.005, -0.38);
  const barrelGeo = new THREE.CylinderGeometry(0.0115, 0.0125, 0.4, 14, 1);
  barrelGeo.rotateX(Math.PI / 2);
  add(barrelGeo, metal, 0, 0.01, -0.67);
  const brakeGeo = new THREE.CylinderGeometry(0.0185, 0.0185, 0.065, 14, 1);
  brakeGeo.rotateX(Math.PI / 2);
  add(brakeGeo, dark, 0, 0.01, -0.85);
  add(new THREE.BoxGeometry(0.05, 0.085, 0.28), polymer, 0, -0.005, 0.2);
  add(new THREE.BoxGeometry(0.052, 0.1, 0.02), dark, 0, -0.005, 0.345);
  const grip = add(new THREE.BoxGeometry(0.046, 0.15, 0.058), polymer, 0, -0.105, 0.03);
  grip.rotation.x = -0.26;
  add(new THREE.BoxGeometry(0.012, 0.034, 0.06), dark, 0, -0.068, -0.03);

  // Sights: front post and rear aperture both on the sight line.
  add(new THREE.BoxGeometry(0.008, 0.035, 0.012), metal, 0, SIGHT_Y - 0.0175, -0.52);
  add(new THREE.BoxGeometry(0.03, 0.03, 0.02), metal, 0, SIGHT_Y - 0.015, 0.06);
  // A glowing front post dot makes the sight picture readable on the sunset grade.
  add(new THREE.BoxGeometry(0.0045, 0.0045, 0.004), glow, 0, SIGHT_Y + 0.001, -0.524);

  // Ejection port and charging handle.
  add(new THREE.BoxGeometry(0.003, 0.02, 0.06), dark, 0.029, 0.012, -0.05);
  const charge = new THREE.Group();
  charge.position.set(0.032, 0.012, 0.13);
  root.add(charge);
  add(new THREE.BoxGeometry(0.012, 0.014, 0.05), dark, 0, 0, 0, charge);

  // Magazine, pivoted so the reload can drop and reinsert it.
  const magGroup = new THREE.Group();
  magGroup.position.set(0, -0.04, -0.07);
  root.add(magGroup);
  const magMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, 0.068), dark);
  magMesh.position.set(0, -0.08, 0);
  magMesh.rotation.x = 0.12;
  magGroup.add(magMesh);

  // Arms: sleeves reach from the shoulders to the grip and handguard.
  const armR = [new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 10), sleeve), new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 10), sleeve)];
  const armL = [new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 10), sleeve), new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 10), sleeve)];
  const handR = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), skin);
  const handL = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), skin);
  for (const m of [...armR, ...armL, handR, handL]) {
    m.castShadow = false;
    m.frustumCulled = false;
    root.add(m);
  }

  // Muzzle flash sprite at the brake.
  const flashMat = new THREE.SpriteMaterial({
    map: textures.flame.isTexture ? textures.flame : textures.flame.map,
    color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const flash = new THREE.Sprite(flashMat);
  flash.position.set(0, 0.01, -0.9);
  flash.scale.set(0.001, 0.001, 1);
  flash.visible = false;
  root.add(flash);

  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.01, -0.9);
  root.add(muzzle);
  const eject = new THREE.Object3D();
  eject.position.set(0.032, 0.012, -0.05);
  root.add(eject);

  return { root, magGroup, charge, armR, armL, handR, handL, flash, muzzle, eject, grip, flashMat };
}

export class Weapon {
  constructor({ gunScene, camera, textures }) {
    this.camera = camera;
    this.cfg = CFG.weapon;
    this.view = buildViewModel(textures);
    gunScene.add(this.view.root);
    this.mag = this.cfg.magSize;
    this.reserve = this.cfg.reserve;
    this.events = [];
    this.adsT = 0;
    this.sprintT = 0;
    this.fireTimer = 0;
    this.shotIndex = 0;
    this.lastShotAt = -10;
    this.time = 0;
    this.bloom = 0;
    this.flash = 0;
    this.reloading = false;
    this.reloadT = 0;
    this.reloadStage = -1;
    this.flourishT = 99;
    this.bobT = 0;
    this.kickZ = new Spring(170, 15);
    this.kickRot = new Spring(190, 17);
    this.swayX = new Spring(60, 9);
    this.swayY = new Spring(60, 9);
    this.muzzleWorld = new THREE.Vector3();
    this.ejectWorld = new THREE.Vector3();
    this.lastDryAt = -10;
    this.beats = this.cfg.reloadBeats;
  }

  get canReload() {
    return !this.reloading && this.mag < this.cfg.magSize && this.reserve > 0;
  }

  startReload() {
    if (!this.canReload) return false;
    this.reloading = true;
    this.reloadT = 0;
    this.reloadStage = -1;
    this.events.push({ type: 'reloadStart' });
    return true;
  }

  startFlourish() {
    this.flourishT = 0;
    this.events.push({ type: 'flourish' });
  }

  // Current cone half-angle in radians for the crosshair and the shots.
  spread(ctx) {
    const s = this.cfg.spread;
    let v = lerp(s.hip, s.ads, this.adsT);
    v += ctx.speedNorm * s.move;
    if (!ctx.grounded) v += 0.006;
    if (ctx.sliding) v += 0.002;
    v += this.bloom;
    return v;
  }

  update(dt, ctx) {
    this.time += dt;
    const wantAds = ctx.ads && !ctx.sprinting;
    this.adsT = damp(this.adsT, wantAds ? 1 : 0, 15, dt);
    this.sprintT = damp(this.sprintT, ctx.sprinting ? 1 : 0, 9, dt);
    this.bloom *= Math.exp(-this.cfg.spread.bloomDecay * dt);
    this.flash = Math.max(0, this.flash - dt * 26);
    this.flourishT = Math.min(99, this.flourishT + dt);
    this.bobT += dt * (2.0 + ctx.speedNorm * 8.5);

    // Reload choreography: out, in, charge.
    if (this.reloading) this.updateReload(dt);

    // Trigger.
    this.fireTimer -= dt;
    const fireAllowed = !this.reloading && !ctx.sprinting && !ctx.dead;
    if (ctx.fireHeld && fireAllowed && this.fireTimer <= 0) {
      if (this.mag > 0) {
        this.fire();
        this.fireTimer += 60 / this.cfg.rpm;
        if (this.fireTimer < -0.05) this.fireTimer = 0;
      } else if (this.time - this.lastDryAt > 0.25) {
        this.lastDryAt = this.time;
        this.events.push({ type: 'dry' });
        this.fireTimer = 0.2;
      }
    }
    if (this.time - this.lastShotAt > 0.32) this.shotIndex = 0;

    // Sway springs follow mouse motion, so the gun lags the view and settles.
    this.swayX.target = clamp(-ctx.lookDX * 0.0011, -0.05, 0.05);
    this.swayY.target = clamp(-ctx.lookDY * 0.0011, -0.04, 0.04);
    this.swayX.update(dt);
    this.swayY.update(dt);
    this.swayX.target = 0;
    this.swayY.target = 0;
    this.kickZ.update(dt);
    this.kickRot.update(dt);

    this.applyPose(dt, ctx);
    this.view.root.updateMatrixWorld(true);
    this.updateArms();
    this.updateFlash(dt);

    this.view.muzzle.getWorldPosition(this.muzzleWorld).applyMatrix4(this.camera.matrixWorld);
    this.view.eject.getWorldPosition(this.ejectWorld).applyMatrix4(this.camera.matrixWorld);
  }

  fire() {
    const r = this.cfg.recoil;
    const i = this.shotIndex;
    this.shotIndex++;
    this.lastShotAt = this.time;
    this.mag--;
    const pattern = r.pattern;
    const yaw = pattern[i % pattern.length] * r.yawStep;
    const pitch = Math.min(r.pitchBase + r.pitchRamp * Math.min(i, 14), r.pitchMax);
    this.bloom = Math.min(this.cfg.spread.bloomMax, this.bloom + this.cfg.spread.bloomPerShot);
    this.kickZ.kick(0.55 * (1 - this.adsT * 0.35));
    this.kickRot.kick(0.9 * (1 - this.adsT * 0.35));
    this.flash = 1;
    this.view.flash.visible = true;
    this.view.flash.material.rotation = Math.random() * Math.PI * 2;
    const sc = 0.2 + Math.random() * 0.06;
    this.view.flash.scale.set(sc, sc, 1);
    this.events.push({
      type: 'fire', index: i, yaw, pitch,
      muzzle: this.muzzleWorld.clone(),
    });
    // Brass leaves the port to the right and slightly back; the particle system adds the tumble.
    const cq = this.camera.quaternion;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(cq);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(cq);
    const back = new THREE.Vector3(0, 0, 1).applyQuaternion(cq);
    const vel = right.multiplyScalar(2.1 + Math.random() * 0.8).addScaledVector(up, 1.8 + Math.random() * 0.7).addScaledVector(back, 0.35 + Math.random() * 0.3);
    this.events.push({ type: 'shell', pos: this.ejectWorld.clone(), vel });
  }

  updateReload(dt) {
    const [b0, b1, b2] = this.beats;
    this.reloadT += dt;
    const t = this.reloadT;
    if (t > 0.08 && this.reloadStage < 0) {
      this.reloadStage = 0;
      this.events.push({ type: 'reload', stage: 0 });
    }
    if (t >= b0 + b1 * 0.9 && this.reloadStage < 1) {
      this.reloadStage = 1;
      const need = this.cfg.magSize - this.mag;
      const moved = Math.min(need, this.reserve);
      this.mag += moved;
      this.reserve -= moved;
      this.events.push({ type: 'reload', stage: 1 });
    }
    if (t >= b0 + b1 + b2 * 0.45 && this.reloadStage < 2) {
      this.reloadStage = 2;
      this.events.push({ type: 'reload', stage: 2 });
    }
    if (t >= b0 + b1 + b2) {
      this.reloading = false;
      this.reloadStage = -1;
    }
  }

  applyPose(dt, ctx) {
    const v = this.view;
    const p = TMP_V.copy(HIP_POS).lerp(ADS_POS, this.adsT);
    const rot = new THREE.Euler(0, 0, 0);

    // Sprint pose: muzzle dips, gun drops and swings toward the hip.
    p.lerp(SPRINT_POS, this.sprintT);
    rot.x += SPRINT_ROT.x * this.sprintT;
    rot.y += SPRINT_ROT.y * this.sprintT;
    rot.z += SPRINT_ROT.z * this.sprintT;

    // Movement bob, breathing, and lean roll.
    const bobAmp = (0.5 + ctx.speedNorm * 0.8) * (1 - this.adsT * 0.7);
    p.x += Math.cos(this.bobT) * 0.007 * bobAmp;
    p.y -= Math.abs(Math.sin(this.bobT)) * 0.011 * bobAmp;
    p.y += Math.sin(this.time * 1.3) * 0.0015 * (0.4 + this.adsT);
    rot.z += -ctx.lean * 0.1;
    p.x += ctx.lean * 0.05;

    // Recoil springs (kick back toward the camera and muzzle up).
    p.z += this.kickZ.x;
    rot.x += this.kickRot.x;

    // Mouse sway.
    rot.y += this.swayX.x * (1 - this.adsT * 0.6);
    rot.x += this.swayY.x * (1 - this.adsT * 0.6);

    // Reload choreography: tilt left and drop for the mag swap, then settle for the charge.
    if (this.reloading) {
      const [b0, b1] = this.beats;
      const t = this.reloadT;
      const outK = smoothstep(0, b0 * 0.5, t) * (1 - smoothstep(b0 + b1 * 0.5, b0 + b1 + 0.1, t));
      p.y -= 0.075 * outK;
      rot.z += 0.22 * outK;
      rot.x += 0.1 * outK;
    }

    // Slide-into-aim flourish: the gun whips in from a tucked low pose and overshoots into place.
    if (this.flourishT < 0.5) {
      const f = easeOutBack(clamp(this.flourishT / 0.42, 0, 1));
      const k = 1 - f;
      p.x += 0.25 * k;
      p.y += -0.34 * k;
      p.z += 0.18 * k;
      rot.z += 0.95 * k;
      rot.y -= 0.42 * k;
      rot.x -= 0.2 * k;
    }

    v.root.position.copy(p);
    v.root.rotation.copy(rot);

    // Mag swap: out and down, then up into the well.
    const [b0, b1, b2] = this.beats;
    let magY = 0;
    if (this.reloading) {
      const t = this.reloadT;
      if (t < b0) magY = -0.26 * smoothstep(0, b0 * 0.7, t);
      else if (t < b0 + b1) magY = -0.26 * (1 - smoothstep(b0 + b1 * 0.1, b0 + b1 * 0.95, t));
    }
    v.magGroup.position.y = -0.04 + magY;
    v.magGroup.rotation.x = 0.14 * (magY < -0.01 ? 1 : 0);

    // Charging handle slides back and forth on beat three.
    let chargeZ = 0;
    if (this.reloading && this.reloadT > b0 + b1) {
      const u = clamp((this.reloadT - b0 - b1) / b2, 0, 1);
      chargeZ = -Math.sin(u * Math.PI) * 0.06;
    }
    v.charge.position.z = 0.13 + chargeZ;
  }

  // Arms: shoulders are fixed in camera space, hands follow the grip and the handguard.
  updateArms() {
    const v = this.view;
    const shoulderR = new THREE.Vector3(0.3, -0.44, 0.04);
    const shoulderL = new THREE.Vector3(-0.3, -0.46, 0.02);
    const gripLocal = new THREE.Vector3(0, -0.1, 0.05);
    const guardLocal = new THREE.Vector3(0, -0.03, -0.4);
    const handR = v.root.localToWorld(gripLocal.clone());
    const handL = v.root.localToWorld(guardLocal.clone());
    // Elbows bend down and out from the straight line.
    const elbowR = shoulderR.clone().lerp(handR, 0.5).add(new THREE.Vector3(0.05, -0.12, 0.06));
    const elbowL = shoulderL.clone().lerp(handL, 0.5).add(new THREE.Vector3(-0.05, -0.14, 0.04));
    limb(v.armR[0], shoulderR, elbowR, 0.034);
    limb(v.armR[1], elbowR, handR, 0.03);
    limb(v.armL[0], shoulderL, elbowL, 0.034);
    limb(v.armL[1], elbowL, handL, 0.03);
    v.handR.position.copy(handR);
    v.handL.position.copy(handL);
    v.handR.scale.setScalar(0.035);
    v.handL.scale.setScalar(0.035);
    // Hide the arms while the flourish whips the gun in, so the sleeves don't clip through the frame.
    const armVis = this.flourishT > 0.25;
    for (const m of [...v.armR, ...v.armL, v.handR, v.handL]) m.visible = armVis;
  }

  updateFlash(dt) {
    const f = this.flash;
    if (f <= 0.001) {
      this.view.flash.visible = false;
      return;
    }
    this.view.flashMat.opacity = Math.min(1, f * 1.4);
  }
}
