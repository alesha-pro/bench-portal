// Ballistics. Player shots resolve against enemy parts and world geometry; enemy shots resolve against
// world geometry and the player's body. Both sides get tracers, impacts and sounds from here.
import * as THREE from 'three';
import { CFG } from './config.js';
import { raycast } from './collision.js';
import { panFromWorld, TAU } from './utils.js';

const P_CHEST = new THREE.Vector3();
const DIR = new THREE.Vector3();
const RIGHT = new THREE.Vector3();
const UP = new THREE.Vector3();
const FWD = new THREE.Vector3();

// A direction inside a cone of half-angle `spread` around `dir` (uniform over the disc).
function coneDirection(dir, spread, out) {
  out.copy(dir);
  if (spread <= 0) return out.normalize();
  const ref = Math.abs(dir.y) > 0.95 ? RIGHT.set(1, 0, 0) : RIGHT.set(0, 1, 0);
  const right = UP.crossVectors(dir, ref).normalize();
  const up = RIGHT.crossVectors(right, dir).normalize();
  const r = spread * Math.sqrt(Math.random());
  const a = Math.random() * TAU;
  out.addScaledVector(right, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r);
  return out.normalize();
}

export class Combat {
  constructor({ camera, player, enemies, particles, lights, audio, hud }) {
    this.camera = camera;
    this.player = player;
    this.enemies = enemies;
    this.particles = particles;
    this.lights = lights;
    this.audio = audio;
    this.hud = hud;
    this.shotsFired = 0;
  }

  snd(x, z) {
    const dx = x - this.camera.position.x;
    const dz = z - this.camera.position.z;
    return { pan: panFromWorld(this.camera, x, z), distance: Math.hypot(dx, dz) };
  }

  // Player fire event from the weapon. The shot leaves the eye along the current view (recoil included).
  playerShot(evt, spread) {
    this.shotsFired++;
    const cam = this.camera;
    const origin = DIR.copy(cam.position);
    FWD.set(0, 0, -1).applyQuaternion(cam.quaternion);
    const dir = coneDirection(FWD, spread, new THREE.Vector3());
    const range = CFG.weapon.range;
    const world = raycast(origin.x, origin.y, origin.z, dir.x, dir.y, dir.z, range, true);
    const worldT = world ? world.t : range;
    const enemyHit = this.enemies.raycast(origin, dir, worldT);
    const muzzle = evt.muzzle;
    let endPoint;
    if (enemyHit) {
      endPoint = enemyHit.point;
      const part = enemyHit.part;
      const headshot = part === 'head';
      const isPlate = part.startsWith('plate');
      const dmg = headshot ? CFG.weapon.damage.head : part === 'upper' || part === 'fore' || part === 'thigh' || part === 'shin' ? CFG.weapon.damage.limb : CFG.weapon.damage.body;
      const res = this.enemies.applyHit(enemyHit, dmg, dir, headshot);
      const hp = enemyHit.point;
      if (isPlate) {
        this.particles.impact(hp, enemyHit.normal, 'metal', 1.0);
        this.audio.sfx.bodyHit({ plate: true, pan: this.snd(hp.x, hp.z).pan, distance: this.snd(hp.x, hp.z).distance });
        if (res.plateBroke) {
          this.audio.sfx.plateBreak({ pan: this.snd(hp.x, hp.z).pan, distance: this.snd(hp.x, hp.z).distance });
          this.particles.sparkBurst(hp.x, hp.y, hp.z, enemyHit.normal.x, enemyHit.normal.y, enemyHit.normal.z, 26, [3.6, 2.0, 0.7], 6, 1.2);
        }
      } else {
        const amount = headshot ? 1.8 : part === 'torso' ? 1.0 : 0.6;
        this.particles.bloodSpray(hp.x, hp.y, hp.z, dir, amount, headshot);
        const s = this.snd(hp.x, hp.z);
        this.audio.sfx.bodyHit({ head: headshot, pan: s.pan, distance: s.distance });
      }
      this.audio.sfx.hitMarker({ head: headshot, kill: res.killed });
      this.hud.hitMarker(res.killed ? 'kill' : headshot ? 'head' : isPlate ? 'plate' : 'body');
    } else if (world) {
      endPoint = { x: world.x, y: world.y, z: world.z };
      const n = { x: world.nx, y: world.ny, z: world.nz };
      this.particles.impact({ x: world.x, y: world.y, z: world.z }, n, world.mat, 1.0);
    } else {
      endPoint = { x: origin.x + dir.x * range, y: origin.y + dir.y * range, z: origin.z + dir.z * range };
    }
    if (evt.index % 2 === 0 || enemyHit) {
      this.particles.addTracer(muzzle, endPoint, 0.07 + Math.random() * 0.03);
    }
  }

  // Enemy gunfire toward the player's chest. Blocked by world geometry, or hits the player's body.
  enemyShot(e, muzzle, target, spread, dmg, kind) {
    const dir = coneDirection(DIR.copy(target).sub(muzzle).normalize(), spread, new THREE.Vector3());
    const range = 260;
    const world = raycast(muzzle.x, muzzle.y, muzzle.z, dir.x, dir.y, dir.z, range, true);
    const worldT = world ? world.t : range;
    const player = this.player;
    P_CHEST.set(player.pos.x, player.pos.y + 1.2, player.pos.z);
    // Ray vs sphere (radius 0.42) around the player's chest.
    const ox = muzzle.x - P_CHEST.x, oy = muzzle.y - P_CHEST.y, oz = muzzle.z - P_CHEST.z;
    const b = ox * dir.x + oy * dir.y + oz * dir.z;
    const c = ox * ox + oy * oy + oz * oz - 0.42 * 0.42;
    const disc = b * b - c;
    let hitT = -1;
    let missDist = Infinity;
    if (disc >= 0) {
      const t = -b - Math.sqrt(disc);
      if (t > 0) hitT = t;
    }
    // Closest approach of the shot to the chest, for the whizz sound.
    const tc = -b;
    if (tc > 0) {
      const px = muzzle.x + dir.x * tc - P_CHEST.x;
      const py = muzzle.y + dir.y * tc - P_CHEST.y;
      const pz = muzzle.z + dir.z * tc - P_CHEST.z;
      missDist = Math.hypot(px, py, pz);
    }
    let endX, endY, endZ;
    const playerHit = hitT > 0 && hitT < worldT;
    if (playerHit) {
      endX = muzzle.x + dir.x * hitT;
      endY = muzzle.y + dir.y * hitT;
      endZ = muzzle.z + dir.z * hitT;
      player.takeDamage(dmg, muzzle.x, muzzle.z);
    } else if (world) {
      endX = world.x; endY = world.y; endZ = world.z;
      this.particles.impact({ x: world.x, y: world.y, z: world.z }, { x: world.nx, y: world.ny, z: world.nz }, world.mat, 0.7);
    } else {
      endX = muzzle.x + dir.x * range; endY = muzzle.y + dir.y * range; endZ = muzzle.z + dir.z * range;
    }
    const s = this.snd(muzzle.x, muzzle.z);
    this.audio.sfx.enemyShot({ kind, pan: s.pan, distance: s.distance });
    if (!playerHit && missDist < 1.3 && missDist > 0.4) {
      this.audio.sfx.whizz({ pan: this.snd(P_CHEST.x, P_CHEST.z).pan });
    }
    this.lights.flash(muzzle, 3.2, 0xff8a40);
    this.particles.addTracer(muzzle, { x: endX, y: endY, z: endZ }, 0.09, [2.4, 0.9, 0.3]);
    player.addTrauma(playerHit ? 0.06 : 0.02);
  }
}
