// Player body and camera: walking, sprint, slide with momentum, jump, mantle onto ledges, lean, bob,
// landing kick, trauma-based shake, and health that only regenerates while out of enemy sight.
import * as THREE from 'three';
import { CFG } from './config.js';
import { colliders, resolveCircleXZ, surfaceHeight, raycast, rayBoxRange } from './collision.js';
import { clamp, lerp, damp, smoothstep, easeInOutCubic } from './utils.js';

const P = CFG.player;
const V = new THREE.Vector3();
const W = new THREE.Vector3();
const EYE = new THREE.Vector3();

export class Player {
  constructor(spawn, yaw = 0) {
    this.pos = spawn.clone();
    this.vel = new THREE.Vector3();
    this.yaw = yaw;
    this.pitch = 0;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.roll = 0;
    this.eyeH = P.eyeStand;
    this.onGround = true;
    this.sliding = false;
    this.slideT = 0;
    this.slideDir = new THREE.Vector3();
    this.mantling = false;
    this.mantleT = 0;
    this.mantleFrom = new THREE.Vector3();
    this.mantleTo = new THREE.Vector3();
    this.lean = 0;
    this.leanTarget = 0;
    this.bobPhase = 0;
    this.bobAmt = 0;
    this.stepDist = 0;
    this.stillTime = 0;
    this.speed = 0;
    this.speedNorm = 0;
    this.sprinting = false;
    this.fovExtra = 0;
    this.landKick = 0;
    this.trauma = 0;
    this.shakeT = 0;
    this.hp = P.maxHealth;
    this.alive = true;
    this.regenTimer = 0;
    this.hurtFlash = 0;
    this.lastDamageDir = new THREE.Vector2();
    this.events = [];
    this.mantleCooldown = 0;
    this.jumpBuffer = 0;
    this.slideCooldown = 0;
  }

  get forward() {
    return V.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
  }

  get right() {
    return W.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
  }

  // Mouse look. Sensitivity is already scaled by the caller (ADS).
  look(dx, dy, sens) {
    this.yaw -= dx * sens;
    this.pitch -= dy * sens;
    this.pitch = clamp(this.pitch, -1.45, 1.45);
  }

  // Shots add to the view climb; the view slowly drifts back when the trigger is released.
  addRecoil(pitch, yaw) {
    this.recoilPitch += pitch;
    this.recoilYaw += yaw;
  }

  addTrauma(amount) {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  takeDamage(amount, fromX, fromZ) {
    if (!this.alive) return;
    this.hp -= amount;
    this.regenTimer = 0;
    this.hurtFlash = 1;
    this.addTrauma(0.22 + amount * 0.012);
    const dx = fromX - this.pos.x;
    const dz = fromZ - this.pos.z;
    this.lastDamageDir.set(dx, dz);
    this.events.push({ type: 'hurt', amount });
    if (this.hp <= 0) {
      this.hp = 0;
      this.alive = false;
      this.events.push({ type: 'death' });
    }
  }

  // Regenerates only while no enemy can see the player.
  updateHealth(dt, inCover) {
    if (!this.alive) return;
    if (inCover) {
      this.regenTimer += dt;
      if (this.regenTimer > P.regenDelay && this.hp < P.maxHealth) {
        this.hp = Math.min(P.maxHealth, this.hp + P.regenPerSec * dt);
      }
    } else {
      this.regenTimer = 0;
    }
    this.hurtFlash = Math.max(0, this.hurtFlash - dt * 2.4);
  }

  // Mantle target: a box with its top between the knee and the chest, reachable in front of the player.
  tryMantle() {
    if (this.mantleCooldown > 0) return false;
    const f = this.forward;
    const feet = this.pos.y;
    const reach = P.radius + 0.42;
    const px = this.pos.x + f.x * reach;
    const pz = this.pos.z + f.z * reach;
    let best = null;
    for (const b of colliders.boxes) {
      if (b.y1 < feet + P.stepHeight + 0.05 || b.y1 > feet + 1.45) continue;
      if (b.y0 > feet + 0.35) continue;
      if (px < b.x0 - 0.05 || px > b.x1 + 0.05 || pz < b.z0 - 0.05 || pz > b.z1 + 0.05) continue;
      const d = (b.x0 + b.x1) * 0.5 - this.pos.x;
      const e = (b.z0 + b.z1) * 0.5 - this.pos.z;
      const score = Math.hypot(d, e);
      if (!best || score < best.score) best = { b, score };
    }
    if (!best) return false;
    const b = best.b;
    // Land on the far side of the box, half a metre inside its top surface.
    const range = rayBoxRange(this.pos.x, feet + 0.6, this.pos.z, f.x, 0, f.z, b);
    let tx = (b.x0 + b.x1) * 0.5;
    let tz = (b.z0 + b.z1) * 0.5;
    if (range) {
      const exit = Math.max(range.exit, reach);
      tx = this.pos.x + f.x * (exit - 0.45);
      tz = this.pos.z + f.z * (exit - 0.45);
      tx = clamp(tx, b.x0 + 0.3, b.x1 - 0.3);
      tz = clamp(tz, b.z0 + 0.3, b.z1 - 0.3);
    }
    this.mantling = true;
    this.mantleT = 0;
    this.mantleFrom.copy(this.pos);
    this.mantleTo.set(tx, b.y1, tz);
    this.sliding = false;
    this.events.push({ type: 'mantle' });
    return true;
  }

  // Slide: needs speed and ground, keeps momentum, and lowers the eye.
  startSlide(dirX, dirZ) {
    this.sliding = true;
    this.slideT = 0;
    this.slideCooldown = 0.25;
    this.slideDir.set(dirX, 0, dirZ).normalize();
    const cur = Math.hypot(this.vel.x, this.vel.z);
    const sp = Math.max(cur, P.slideSpeed);
    this.vel.x = this.slideDir.x * sp;
    this.vel.z = this.slideDir.z * sp;
    this.events.push({ type: 'slideStart' });
  }

  update(dt, input, ctx) {
    if (this.hp <= 0) this.alive = false;
    this.mantleCooldown = Math.max(0, this.mantleCooldown - dt);
    this.slideCooldown = Math.max(0, this.slideCooldown - dt);
    this.recoilPitch = damp(this.recoilPitch, 0, ctx.firing ? 0.7 : CFG.weapon.recoil.recoverRate, dt);
    this.recoilYaw = damp(this.recoilYaw, 0, ctx.firing ? 0.7 : CFG.weapon.recoil.recoverRate, dt);
    this.trauma = Math.max(0, this.trauma - dt * 1.35);
    this.shakeT += dt;

    // Input vector in the view frame.
    let ix = 0, iz = 0;
    if (input.isDown('KeyW') || input.isDown('ArrowUp')) iz -= 1;
    if (input.isDown('KeyS') || input.isDown('ArrowDown')) iz += 1;
    if (input.isDown('KeyA') || input.isDown('ArrowLeft')) ix -= 1;
    if (input.isDown('KeyD') || input.isDown('ArrowRight')) ix += 1;
    const fwd = this.forward;
    const rgt = this.right;
    let wx = fwd.x * -iz + rgt.x * ix;
    let wz = fwd.z * -iz + rgt.z * ix;
    const wl = Math.hypot(wx, wz);
    if (wl > 1) { wx /= wl; wz /= wl; }
    const moving = wl > 0.01;
    const wantSprint = input.isDown('ShiftLeft') || input.isDown('ShiftRight');
    const ads = ctx.ads;
    this.sprinting = wantSprint && iz < 0 && !ads && this.onGround && !this.sliding && !this.mantling;

    // Slide: sprint or fast moving, on ground, tap slide.
    const slidePressed = input.wasPressed('KeyC') || input.wasPressed('ControlLeft') || input.wasPressed('ControlRight');
    const horizSpeed = Math.hypot(this.vel.x, this.vel.z);
    if (slidePressed && this.onGround && !this.sliding && !this.mantling && this.slideCooldown <= 0 && horizSpeed > 5.0) {
      this.startSlide(this.vel.x / Math.max(horizSpeed, 1e-4), this.vel.z / Math.max(horizSpeed, 1e-4));
    }

    // Jump / mantle / slide-jump chain.
    if (input.wasPressed('Space') && !this.mantling) {
      if (!this.sliding && this.tryMantle()) {
        // mantle started; no jump
      } else if (this.onGround) {
        this.vel.y = P.jumpSpeed;
        this.onGround = false;
        if (this.sliding) {
          // Slide-jump keeps momentum and gets a small forward boost.
          this.vel.x += this.slideDir.x * 2.6;
          this.vel.z += this.slideDir.z * 2.6;
          this.endSlide();
        }
        this.events.push({ type: 'jump' });
      }
    }

    if (this.mantling) {
      this.mantleT += dt / P.mantleTime;
      const t = clamp(this.mantleT, 0, 1);
      const yT = smoothstep(0, 0.65, t);
      const xT = easeInOutCubic(smoothstep(0.25, 1, t));
      this.pos.y = lerp(this.mantleFrom.y, this.mantleTo.y, yT);
      this.pos.x = lerp(this.mantleFrom.x, this.mantleTo.x, xT);
      this.pos.z = lerp(this.mantleFrom.z, this.mantleTo.z, xT);
      if (t >= 1) {
        this.mantling = false;
        this.onGround = true;
        this.vel.set(fwd.x * 2.4, 0, fwd.z * 2.4);
        this.mantleCooldown = 0.2;
        this.pos.y = this.mantleTo.y;
      }
    } else {
      // Horizontal acceleration.
      let cap = this.sprinting ? P.sprintSpeed : P.walkSpeed;
      if (ads) cap *= P.adsSpeedMul;
      if (this.sliding) {
        this.slideT += dt;
        const k = Math.exp(-P.slideFriction * dt);
        this.vel.x *= k;
        this.vel.z *= k;
        const spd = Math.hypot(this.vel.x, this.vel.z);
        if (this.slideT > P.slideTime || spd < P.slideMinSpeed) this.endSlide();
      } else if (this.onGround) {
        const accel = moving ? P.accelGround : 0;
        const tx = wx * cap, tz = wz * cap;
        if (moving || Math.hypot(this.vel.x, this.vel.z) > 0.01) {
          const ax = tx - this.vel.x, az = tz - this.vel.z;
          const al = Math.hypot(ax, az);
          const maxStep = (moving ? accel : P.friction * 1.4) * dt;
          if (al <= maxStep || al < 1e-6) {
            this.vel.x = tx; this.vel.z = tz;
          } else {
            this.vel.x += ax / al * maxStep;
            this.vel.z += az / al * maxStep;
          }
        }
        if (!moving) {
          const k = Math.exp(-P.friction * dt);
          this.vel.x *= k;
          this.vel.z *= k;
        }
      } else {
        // Air control is weak: you keep your momentum into a jump or a ledge.
        const tx = wx * cap, tz = wz * cap;
        this.vel.x = damp(this.vel.x, moving ? tx : this.vel.x, P.accelAir * 0.2, dt);
        this.vel.z = damp(this.vel.z, moving ? tz : this.vel.z, P.accelAir * 0.2, dt);
      }

      // Horizontal move with collision. Whatever the collision pushed back against the velocity is a wall:
      // zero that component so the player stops at walls but slides along them.
      this.pos.x += this.vel.x * dt;
      this.pos.z += this.vel.z * dt;
      const preX = this.pos.x, preZ = this.pos.z;
      resolveCircleXZ(this.pos, P.radius, this.pos.y, P.height, P.stepHeight);
      const corrX = this.pos.x - preX, corrZ = this.pos.z - preZ;
      if (corrX * this.vel.x < 0) this.vel.x = 0;
      if (corrZ * this.vel.z < 0) this.vel.z = 0;
      this.pos.x = clamp(this.pos.x, -P.arena, P.arena);
      this.pos.z = clamp(this.pos.z, -P.arena, P.arena);

      // Vertical: stand on boxes, step up low ones, fall otherwise.
      const surf = surfaceHeight(this.pos.x, this.pos.z, this.pos.y, P.stepHeight);
      if (this.onGround) {
        if (surf <= this.pos.y + P.stepHeight && surf >= this.pos.y - 0.7) {
          this.pos.y = surf;
          this.vel.y = 0;
        } else {
          this.onGround = false;
        }
      }
      if (!this.onGround) {
        this.vel.y -= P.gravity * dt;
        this.pos.y += this.vel.y * dt;
        if (this.pos.y <= surf && this.vel.y <= 0) {
          const impact = -this.vel.y;
          this.pos.y = surf;
          this.vel.y = 0;
          this.onGround = true;
          if (impact > 4) {
            this.landKick = Math.min(1, impact / 16);
            this.events.push({ type: 'land', strength: clamp(impact / 16, 0.2, 1) });
          }
        }
      }
    }

    // Lean (Q/E) with a wall check so the camera never pokes through geometry.
    const leanInput = (input.isDown('KeyE') ? 1 : 0) - (input.isDown('KeyQ') ? 1 : 0);
    this.leanTarget = leanInput * (1 - ctx.adsT * 0.6);
    this.lean = damp(this.lean, this.leanTarget, 12, dt);

    // Shape the body for sliding, bob, and kick.
    const eyeTarget = this.sliding ? P.eyeSlide : P.eyeStand;
    this.eyeH = damp(this.eyeH, eyeTarget, this.sliding ? 18 : 10, dt);
    this.landKick = damp(this.landKick, 0, 9, dt);
    this.roll = damp(this.roll, this.sliding ? 0.09 : 0, 10, dt);

    this.speed = Math.hypot(this.vel.x, this.vel.z);
    this.speedNorm = clamp(this.speed / P.sprintSpeed, 0, 1);
    const grounded = this.onGround && !this.mantling;
    if (grounded && this.speed > 0.6 && !this.sliding) {
      this.bobPhase += dt * this.speed * 1.9;
      this.bobAmt = damp(this.bobAmt, this.sprinting ? 1.4 : 1, 8, dt);
      this.stepDist += this.speed * dt;
      const stepLen = this.sprinting ? 2.0 : 1.6;
      if (this.stepDist > stepLen) {
        this.stepDist = 0;
        this.events.push({ type: 'footstep', sprint: this.sprinting });
      }
      this.stillTime = 0;
    } else {
      this.bobAmt = damp(this.bobAmt, 0, 6, dt);
      if (this.speed < 0.3) this.stillTime += dt;
    }

    // Fov kick for sprint and slide.
    const fovTarget = (this.sprinting ? CFG.view.fovSprintAdd : 0) + (this.sliding ? CFG.view.fovSlideAdd : 0);
    this.fovExtra = damp(this.fovExtra, fovTarget, 7, dt);

  }

  endSlide() {
    if (!this.sliding) return;
    this.sliding = false;
    this.events.push({ type: 'slideEnd' });
  }

  // Eye position with bob, landing kick and lean. The lean is shortened if a wall is in the way.
  eyePosition(out = EYE) {
    const r = this.right;
    let leanOff = this.lean * P.leanOffset;
    if (Math.abs(leanOff) > 0.01) {
      const sign = Math.sign(leanOff);
      const hit = raycast(this.pos.x, this.pos.y + this.eyeH, this.pos.z, r.x * sign, 0, r.z * sign, Math.abs(leanOff) + 0.2, false);
      if (hit) leanOff = sign * Math.max(0, hit.t - 0.2);
    }
    const bobX = Math.cos(this.bobPhase) * 0.024 * this.bobAmt;
    const bobY = Math.abs(Math.sin(this.bobPhase)) * 0.03 * this.bobAmt;
    out.set(this.pos.x + r.x * (leanOff + bobX), this.pos.y + this.eyeH - bobY - this.landKick * 0.12, this.pos.z + r.z * (leanOff + bobX));
    return out;
  }

  // Camera orientation includes recoil, shake and slide/lean roll.
  applyCamera(camera) {
    const eye = this.eyePosition();
    camera.position.copy(eye);
    const t = this.trauma * this.trauma;
    const s = this.shakeT;
    const sx = Math.sin(s * 37.0) * 0.6 + Math.sin(s * 23.3 + 1.7) * 0.4;
    const sy = Math.sin(s * 29.1 + 4.2) * 0.6 + Math.sin(s * 17.7) * 0.4;
    const sr = Math.sin(s * 31.3 + 0.9);
    const pitch = this.pitch + this.recoilPitch + sx * t * 0.045;
    const yaw = this.yaw + this.recoilYaw + sy * t * 0.04;
    const roll = this.roll + this.lean * CFG.player.leanRoll + sr * t * 0.03;
    camera.rotation.set(pitch, yaw, roll, 'YXZ');
  }

  // Pitch and yaw that the crosshair and bullets follow (includes recoil).
  get aimPitch() {
    return this.pitch + this.recoilPitch;
  }

  get aimYaw() {
    return this.yaw + this.recoilYaw;
  }
}
