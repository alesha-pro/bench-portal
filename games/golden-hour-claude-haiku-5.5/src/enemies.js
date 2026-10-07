// Enemies: three archetypes (rusher, gunner, heavy) drawn as instanced body parts for speed.
// Each enemy has a bone hierarchy for posing; the bones drive instance matrices every frame. A death turns the
// bones into physics debris. Heavies carry armour plates that break off as separate physical objects.
import * as THREE from 'three';
import { CFG } from './config.js';
import { resolveCircleXZ, surfaceHeight, hasLineOfSight } from './collision.js';
import { clamp, rand, damp, TAU } from './utils.js';
import { CAST_LAYER, ARENA } from './world.js';

const MAX_PER_ARCH = 24;
const ARCHS = ['rusher', 'gunner', 'heavy'];
const SIDES_LIMB = 2;

const UP = new THREE.Vector3(0, 1, 0);
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _n = new THREE.Vector3();

// ---- geometry ------------------------------------------------------------------------------------
function prim(geo, x, y, z, rx = 0, rz = 0) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, 0, rz));
  m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(1, 1, 1));
  return { geo, m };
}

// Merges primitives into one non-indexed geometry. All geometry is in bone space: the bone origin is the joint.
function mergeGeos(items) {
  let count = 0;
  const parts = items.map(({ geo, m }) => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    g.applyMatrix4(m);
    count += g.attributes.position.count;
    return g;
  });
  const pos = new Float32Array(count * 3);
  const nrm = new Float32Array(count * 3);
  let o = 0;
  for (const g of parts) {
    pos.set(g.attributes.position.array, o * 3);
    nrm.set(g.attributes.normal.array, o * 3);
    o += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  out.computeBoundingSphere();
  return out;
}

const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const sphere = (r) => new THREE.SphereGeometry(r, 10, 8);
const cyl = (rt, rb, h) => new THREE.CylinderGeometry(rt, rb, h, 10, 1);

function buildPartGeometries(type) {
  const g = {
    torso: mergeGeos([prim(box(0.44, 0.5, 0.26), 0, 0.26, 0), prim(box(0.36, 0.14, 0.24), 0, -0.06, 0)]),
    head: mergeGeos([prim(sphere(0.125), 0, 0.1, 0), prim(cyl(0.05, 0.05, 0.09), 0, -0.02, 0)]),
    upper: mergeGeos([prim(cyl(0.07, 0.062, 0.3), 0, -0.15, 0), prim(sphere(0.075), 0, 0, 0)]),
    fore: mergeGeos([prim(cyl(0.06, 0.055, 0.28), 0, -0.14, 0), prim(sphere(0.06), 0, -0.3, 0)]),
    thigh: mergeGeos([prim(cyl(0.1, 0.085, 0.46), 0, -0.23, 0), prim(sphere(0.1), 0, 0, 0)]),
    shin: mergeGeos([prim(cyl(0.085, 0.07, 0.44), 0, -0.22, 0), prim(box(0.13, 0.08, 0.26), 0, -0.48, 0.06)]),
  };
  if (type === 'gunner') {
    g.gun = mergeGeos([
      prim(box(0.06, 0.1, 0.55), 0.1, 0.25, 0.4),
      prim(box(0.05, 0.08, 0.2), 0.1, 0.23, 0.1),
      prim(box(0.04, 0.14, 0.06), 0.1, 0.14, 0.36, 0.2),
      prim(cyl(0.012, 0.012, 0.2), 0.1, 0.25, 0.72, Math.PI / 2),
    ]);
  } else if (type === 'heavy') {
    g.gun = mergeGeos([
      prim(box(0.08, 0.12, 0.84), 0.1, 0.26, 0.44),
      prim(box(0.05, 0.14, 0.1), 0.1, 0.1, 0.5),
      prim(cyl(0.016, 0.016, 0.3), 0.1, 0.27, 0.95, Math.PI / 2),
    ]);
    g.plateChest = mergeGeos([prim(box(0.46, 0.44, 0.1), 0, 0.27, 0.16)]);
    g.plateSh = mergeGeos([prim(box(0.24, 0.14, 0.24), 0, 0.02, 0)]);
    g.plateTh = mergeGeos([prim(box(0.2, 0.36, 0.13), 0, -0.2, 0.07)]);
  }
  return g;
}

// ---- colours ----------------------------------------------------------------------------------------
const PALETTE = {
  rusher: { cloth: [0.28, 0.07, 0.06], legs: [0.07, 0.07, 0.08], head: [0.03, 0.03, 0.035], fore: [0.04, 0.04, 0.045] },
  gunner: { cloth: [0.2, 0.21, 0.13], legs: [0.24, 0.2, 0.13], head: [0.035, 0.03, 0.025], fore: [0.04, 0.04, 0.04], gun: [0.05, 0.05, 0.055] },
  heavy: { cloth: [0.05, 0.055, 0.06], legs: [0.05, 0.055, 0.06], head: [0.03, 0.03, 0.035], fore: [0.03, 0.03, 0.035], gun: [0.06, 0.06, 0.065], plate: [0.2, 0.22, 0.25] },
};

function jitterColor(rgb, amount = 0.14) {
  const k = 1 + (Math.random() - 0.5) * amount * 2;
  return new THREE.Color(clamp(rgb[0] * k, 0, 1), clamp(rgb[1] * k, 0, 1), clamp(rgb[2] * k, 0, 1));
}

function lerpAngle(a, b, t) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return a + d * t;
}

// ---- archetype (instanced parts) ------------------------------------------------------------------
function buildArchetype(type, scene, mats) {
  const geos = buildPartGeometries(type);
  const scale = CFG.enemies[type].scale;
  const kinds = ['torso', 'head', 'upper', 'fore', 'thigh', 'shin'];
  if (type !== 'rusher') kinds.push('gun');
  if (type === 'heavy') kinds.push('plateChest', 'plateSh', 'plateTh');
  const limbKinds = new Set(['upper', 'fore', 'thigh', 'shin', 'plateSh', 'plateTh']);
  const matFor = (k) => {
    if (k.startsWith('plate')) return mats.plate;
    if (k === 'gun') return mats.metal;
    return mats.cloth;
  };
  const parts = {};
  for (const k of kinds) {
    const sides = limbKinds.has(k) ? SIDES_LIMB : 1;
    const mesh = new THREE.InstancedMesh(geos[k], matFor(k), MAX_PER_ARCH * sides);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.count = 0;
    mesh.layers.enable(CAST_LAYER);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.name = `${type}-${k}`;
    mesh.userData = { arch: type, kind: k, sides };
    scene.add(mesh);
    parts[k] = { mesh, sides, geo: geos[k], mat: matFor(k) };
  }
  return { type, scale, radius: CFG.enemies[type].radius, parts, kinds, list: [], lastActive: [], palette: PALETTE[type] };
}

// ---- bones ---------------------------------------------------------------------------------------------
function makeBones() {
  const o = () => new THREE.Object3D();
  const root = o();
  const hips = o();
  hips.position.set(0, 0.98, 0);
  root.add(hips);
  const torso = o();
  torso.position.set(0, 0.02, 0);
  hips.add(torso);
  const thighL = o(); thighL.position.set(-0.115, 0, 0); hips.add(thighL);
  const thighR = o(); thighR.position.set(0.115, 0, 0); hips.add(thighR);
  const shinL = o(); shinL.position.set(0, -0.46, 0); thighL.add(shinL);
  const shinR = o(); shinR.position.set(0, -0.46, 0); thighR.add(shinR);
  const head = o(); head.position.set(0, 0.56, 0); torso.add(head);
  const armL = o(); armL.position.set(-0.3, 0.46, 0); torso.add(armL);
  const armR = o(); armR.position.set(0.3, 0.46, 0); torso.add(armR);
  const foreL = o(); foreL.position.set(0, -0.3, 0); armL.add(foreL);
  const foreR = o(); foreR.position.set(0, -0.3, 0); armR.add(foreR);
  return { root, hips, torso, head, armL, armR, foreL, foreR, thighL, thighR, shinL, shinR };
}

// Which bone each part kind follows, and which side index (for limb pairs).
const KIND_BONE = {
  torso: ['torso'], head: ['head'], upper: ['armL', 'armR'], fore: ['foreL', 'foreR'],
  thigh: ['thighL', 'thighR'], shin: ['shinL', 'shinR'], gun: ['torso'],
  plateChest: ['torso'], plateSh: ['armL', 'armR'], plateTh: ['thighL', 'thighR'],
};

export class Enemies {
  constructor({ scene, world, hooks }) {
    this.scene = scene;
    this.world = world;
    this.hooks = hooks;
    this.raycaster = new THREE.Raycaster();
    this.raycaster.firstHitOnly = false;
    this.mats = {
      cloth: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0 }),
      plate: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.36, metalness: 0.75, envMapIntensity: 1.2 }),
      metal: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0.7 }),
    };
    this.archs = {};
    for (const t of ARCHS) this.archs[t] = buildArchetype(t, scene, this.mats);
    this.all = [];
    this.hitMeshes = [];
    for (const t of ARCHS) for (const k of this.archs[t].kinds) this.hitMeshes.push(this.archs[t].parts[k].mesh);
    this.time = 0;
    this.boostTimer = 0;
  }

  get aliveCount() {
    let n = 0;
    for (const e of this.all) if (e.alive) n++;
    return n;
  }

  countOf(type) {
    let n = 0;
    for (const e of this.all) if (e.alive && e.type === type) n++;
    return n;
  }

  spawn(type, pos, player) {
    const arch = this.archs[type];
    const cfg = CFG.enemies[type];
    const bones = makeBones();
    const colors = {};
    const pal = arch.palette;
    colors.torso = jitterColor(pal.cloth);
    colors.legs = jitterColor(pal.legs);
    colors.head = jitterColor(pal.head, 0.3);
    colors.fore = jitterColor(pal.fore, 0.2);
    colors.gun = pal.gun ? jitterColor(pal.gun, 0.1) : null;
    colors.plate = pal.plate ? jitterColor(pal.plate, 0.08) : null;
    const e = {
      type, arch, cfg, bones, colors,
      alive: true,
      hp: cfg.hp,
      pos: pos.clone(),
      vel: new THREE.Vector3(),
      yaw: Math.atan2(player.pos.x - pos.x, player.pos.z - pos.z),
      targetYaw: 0,
      state: 'spawn',
      stateT: 0,
      spawnT: 0.8,
      phase: Math.random() * TAU,
      speedNow: 0,
      flinch: 0,
      flinchDir: new THREE.Vector3(),
      pushT: 0,
      cd: { melee: 0, lunge: rand(0.2, 1.2), fire: 0 },
      punch: 0,
      lunge: { t: 0, dir: new THREE.Vector3() },
      cover: null,
      hideSpot: null,
      peekSpot: null,
      burstLeft: 0,
      burstCd: 0,
      crouch: 0,
      lean: 0,
      flankTarget: null,
      stuckT: 0,
      sidestepT: 0,
      sidestepSign: Math.random() < 0.5 ? -1 : 1,
      plates: {},
      muzzle: new THREE.Vector3(),
      index: -1,
      lastLos: false,
      losCheckT: 0,
      id: this.time++,
    };
    e.root = bones.root;
    e.scale = arch.scale;
    e.root.scale.setScalar(arch.scale);
    e.root.position.copy(e.pos);
    e.root.position.y = -1.2;
    e.root.rotation.y = e.yaw;
    if (type === 'heavy') {
      for (const k of ['chest', 'shL', 'shR', 'thL', 'thR']) e.plates[k] = { hp: cfg.plateHp, broken: false };
    }
    this.all.push(e);
    if (this.hooks.onSpawn) this.hooks.onSpawn(e);
    return e;
  }

  // Moves an enemy toward (tx, tz). Returns the horizontal speed actually used.
  moveTo(e, tx, tz, speed, dt, faceX = null, faceZ = null) {
    const dx = tx - e.pos.x;
    const dz = tz - e.pos.z;
    const d = Math.hypot(dx, dz);
    let vx = 0, vz = 0;
    if (d > 0.08) {
      let ux = dx / d, uz = dz / d;
      if (e.sidestepT > 0) {
        // Sidestep around an obstacle that blocked us.
        const sx = -uz * e.sidestepSign, sz = ux * e.sidestepSign;
        ux = ux * 0.35 + sx * 0.65;
        uz = uz * 0.35 + sz * 0.65;
        const l = Math.hypot(ux, uz) || 1;
        ux /= l; uz /= l;
      }
      vx = ux * speed;
      vz = uz * speed;
      e.targetYaw = Math.atan2(ux, uz);
    }
    // Separation from neighbours.
    for (const o of this.all) {
      if (o === e || !o.alive || o.spawnT > 0) continue;
      const sx = e.pos.x - o.pos.x, sz = e.pos.z - o.pos.z;
      const sd2 = sx * sx + sz * sz;
      if (sd2 < 0.9 * 0.9 && sd2 > 1e-6) {
        const sd = Math.sqrt(sd2);
        const push = (0.9 - sd) * 3.2;
        vx += (sx / sd) * push;
        vz += (sz / sd) * push;
      }
    }
    if (faceX !== null) e.targetYaw = Math.atan2(faceX - e.pos.x, faceZ - e.pos.z);
    const startX = e.pos.x, startZ = e.pos.z;
    e.pos.x += vx * dt;
    e.pos.z += vz * dt;
    resolveCircleXZ(e.pos, e.arch.radius, e.pos.y, 1.7, 0.5);
    e.pos.x = clamp(e.pos.x, -ARENA, ARENA);
    e.pos.z = clamp(e.pos.z, -ARENA, ARENA);
    e.pos.y = surfaceHeight(e.pos.x, e.pos.z, e.pos.y, 0.55);
    const moved = Math.hypot(e.pos.x - startX, e.pos.z - startZ);
    const want = Math.hypot(vx, vz) * dt;
    // Stuck detection: asked to move, moved far less than that for half a second -> sidestep.
    if (want > 0.02 && moved < want * 0.3) {
      e.stuckT += dt;
      if (e.stuckT > 0.5 && e.sidestepT <= 0) {
        e.sidestepT = 0.7;
        e.sidestepSign = Math.random() < 0.5 ? -1 : 1;
        e.stuckT = 0;
      }
    } else {
      e.stuckT = Math.max(0, e.stuckT - dt);
    }
    if (e.sidestepT > 0) e.sidestepT -= dt;
    const sp = moved / Math.max(dt, 1e-4);
    e.vel.set(vx, 0, vz);
    return sp;
  }

  hurtKnockback(e, dx, dz) {
    e.flinch = 1;
    e.flinchDir.set(dx, 0, dz).normalize();
  }

  // Burst of fire aimed at the player's chest with spread. Returns the hit, if any (combat decides).
  fireAt(e, player, spread, damage, kind) {
    const muzzle = this.muzzleOf(e);
    const chest = _v2.set(player.pos.x, player.pos.y + 1.2, player.pos.z);
    if (this.hooks.onEnemyShot) this.hooks.onEnemyShot(e, muzzle, chest, spread, damage, kind);
  }

  muzzleOf(e) {
    const t = e.bones.torso;
    const local = e.type === 'heavy' ? _v.set(0.1, 0.26, 1.12) : _v.set(0.1, 0.25, 0.84);
    e.bones.root.updateMatrixWorld(true);
    return t.localToWorld(local.clone()).clone();
  }

  // ---- AI ----------------------------------------------------------------------------------------
  update(dt, ctx) {
    this.time += dt;
    this.boostTimer = Math.max(0, this.boostTimer - dt);
    const player = ctx.player;
    for (const e of this.all) {
      if (!e.alive) continue;
      e.stateT += dt;
      e.cd.melee = Math.max(0, e.cd.melee - dt);
      e.cd.lunge = Math.max(0, e.cd.lunge - dt);
      e.cd.fire = Math.max(0, e.cd.fire - dt);
      e.flinch = Math.max(0, e.flinch - dt * 5.5);
      e.pushT = Math.max(0, e.pushT - dt);
      e.punch = Math.max(0, e.punch - dt * 4);
      e.losCheckT -= dt;
      if (e.losCheckT <= 0) {
        e.losCheckT = 0.2;
        e.lastLos = hasLineOfSight(e.pos.x, e.pos.y + 1.5, e.pos.z, player.pos.x, player.pos.y + 1.2, player.pos.z);
      }
      if (e.spawnT > 0) {
        e.spawnT -= dt;
        const k = clamp(1 - e.spawnT / 0.8, 0, 1);
        e.root.position.y = e.pos.y - 1.2 * (1 - k * k);
        e.speedNow = 0;
        this.faceDirection(e, player.pos.x, player.pos.z, dt);
        e.bones.root.updateMatrixWorld(true);
        continue;
      }
      const dx = player.pos.x - e.pos.x;
      const dz = player.pos.z - e.pos.z;
      const dist = Math.hypot(dx, dz);
      const boost = e.pushT > 0 ? 1.3 : 1;
      const slowed = e.flinch > 0.5 ? 0.45 : 1;
      if (e.type === 'rusher') this.aiRusher(e, dt, player, dist, dx, dz, boost * slowed);
      else if (e.type === 'gunner') this.aiGunner(e, dt, player, dist, boost * slowed, ctx);
      else this.aiHeavy(e, dt, player, dist, boost * slowed);
    }
    this.writeInstances();
    // Dead enemies are fully handled by their debris now.
    this.all = this.all.filter((e) => e.alive);
  }

  faceDirection(e, tx, tz, dt) {
    e.yaw = lerpAngle(e.yaw, Math.atan2(tx - e.pos.x, tz - e.pos.z), 1 - Math.exp(-9 * dt));
  }

  aiRusher(e, dt, player, dist, dx, dz, speedMul) {
    const cfg = e.cfg;
    const tx = e.flankTarget ? e.flankTarget.x : player.pos.x;
    const tz = e.flankTarget ? e.flankTarget.z : player.pos.z;
    if (e.state === 'lunge') {
      e.lunge.t -= dt;
      const sp = cfg.lungeSpeed;
      const sx = e.lunge.dir.x * sp, sz = e.lunge.dir.z * sp;
      e.pos.x += sx * dt;
      e.pos.z += sz * dt;
      resolveCircleXZ(e.pos, e.arch.radius, e.pos.y, 1.7, 0.5);
      e.pos.x = clamp(e.pos.x, -ARENA, ARENA);
      e.pos.z = clamp(e.pos.z, -ARENA, ARENA);
      e.pos.y = surfaceHeight(e.pos.x, e.pos.z, e.pos.y, 0.55);
      e.vel.set(sx, 0, sz);
      e.targetYaw = Math.atan2(e.lunge.dir.x, e.lunge.dir.z);
      this.animate(e, dt, 'lunge', sp);
      if (dist < cfg.meleeRange) this.melee(e, player);
      if (e.lunge.t <= 0) e.state = 'move';
      return;
    }
    if (dist < cfg.meleeRange + 0.2 && e.cd.melee <= 0 && e.lastLos) {
      this.melee(e, player);
      e.state = 'melee';
      this.animate(e, dt, 'attack', 0);
      this.faceDirection(e, player.pos.x, player.pos.z, dt);
      return;
    }
    const [lmin, lmax] = cfg.lungeRange;
    if (dist > lmin && dist < lmax && e.cd.lunge <= 0 && e.lastLos && !e.flankTarget) {
      const d = Math.max(dist, 0.01);
      e.lunge.dir.set(dx / d, 0, dz / d);
      e.lunge.t = cfg.lungeTime;
      e.cd.lunge = cfg.lungeCd * (e.pushT > 0 ? 0.6 : 1);
      e.state = 'lunge';
      if (this.hooks.onLunge) this.hooks.onLunge(e);
      this.animate(e, dt, 'lunge', 0);
      return;
    }
    e.state = 'move';
    const sp = this.moveTo(e, tx, tz, cfg.speed * speedMul * (this.boostTimer > 0 ? 1.12 : 1), dt);
    e.speedNow = sp;
    this.animate(e, dt, 'run', sp);
  }

  melee(e, player) {
    if (e.cd.melee > 0) return;
    e.cd.melee = e.cfg.meleeCd;
    e.punch = 1;
    if (this.hooks.onMelee) this.hooks.onMelee(e, e.cfg.meleeDamage);
  }

  aiGunner(e, dt, player, dist, speedMul) {
    const cfg = e.cfg;
    e.coverAge = (e.coverAge || 0) + dt;
    if (!e.cover || e.coverAge > 10) {
      e.cover = this.pickCover(e, player);
      e.coverAge = 0;
      e.state = 'seek';
      e.stateT = 0;
    }
    const cov = e.cover;
    if (!cov) {
      // No cover within reach: hold at standoff range and suppress from open ground.
      e.crouch = damp(e.crouch, 0, 8, dt);
      if (dist > 18) {
        e.speedNow = this.moveTo(e, player.pos.x, player.pos.z, cfg.speed * speedMul, dt, player.pos.x, player.pos.z);
        this.animate(e, dt, 'run', e.speedNow);
      } else {
        e.speedNow = 0;
        this.faceDirection(e, player.pos.x, player.pos.z, dt);
        this.animate(e, dt, 'aim', 0);
      }
      this.fireBurst(e, dt, player, cfg, dist);
      return;
    }
    if (e.state === 'seek') {
      const sp = this.moveTo(e, cov.hide.x, cov.hide.z, cfg.speed * speedMul, dt, player.pos.x, player.pos.z);
      e.speedNow = sp;
      this.animate(e, dt, 'run', sp);
      if (Math.hypot(cov.hide.x - e.pos.x, cov.hide.z - e.pos.z) < 0.6 || e.stateT > 4.5) {
        e.state = 'hide';
        e.stateT = 0;
        e.hideT = rand(cfg.hideTime[0], cfg.hideTime[1]);
      }
      return;
    }
    if (e.state === 'hide') {
      // Crouched behind cover. Pressure from the reload push makes the gunner come back out sooner.
      e.crouch = damp(e.crouch, 1, 10, dt);
      e.lean = damp(e.lean, 0, 8, dt);
      e.speedNow = 0;
      this.faceDirection(e, player.pos.x, player.pos.z, dt);
      this.animate(e, dt, 'crouch', 0);
      e.hideT -= dt * (e.pushT > 0 ? 1.7 : 1);
      if (e.hideT <= 0) {
        e.state = 'peek';
        e.stateT = 0;
        e.peekT = rand(cfg.peekTime[0], cfg.peekTime[1]);
        e.burstLeft = cfg.burst;
        e.cd.fire = 0.2;
      }
      return;
    }
    // Peek: stand up, lean toward the player and suppress. Bullets that hit cover still pin the player down.
    e.crouch = damp(e.crouch, 0, 12, dt);
    const ang = Math.atan2(player.pos.x - e.pos.x, player.pos.z - e.pos.z);
    e.lean = damp(e.lean, Math.sign(Math.sin(ang - e.yaw)) * 0.5, 8, dt);
    e.speedNow = 0;
    this.faceDirection(e, player.pos.x, player.pos.z, dt);
    this.animate(e, dt, 'aim', 0);
    this.fireBurst(e, dt, player, cfg, dist);
    e.peekT -= dt;
    if (e.peekT <= 0) {
      e.state = 'hide';
      e.stateT = 0;
      e.hideT = rand(cfg.hideTime[0], cfg.hideTime[1]);
    }
  }

  // Three-round bursts with a short pause between them. Spread widens without line of sight.
  fireBurst(e, dt, player, cfg, dist) {
    if (dist > cfg.sightRange + 12) return;
    if (e.pauseT > 0) {
      e.pauseT -= dt;
      if (e.pauseT <= 0) e.burstLeft = cfg.burst;
      return;
    }
    if (e.cd.fire <= 0) {
      const spread = cfg.spread * (e.lastLos ? 1 : 1.5) * (e.pushT > 0 ? 0.85 : 1);
      this.fireAt(e, player, spread, cfg.damage, e.type);
      e.cd.fire = cfg.fireGap;
      e.burstLeft--;
      if (e.burstLeft <= 0) {
        e.burstLeft = cfg.burst;
        e.pauseT = 0.55;
      }
    }
  }

  pickCover(e, player) {
    const spots = this.world.coverSpots;
    let best = null;
    let bestScore = Infinity;
    for (const c of spots) {
      const toP = Math.hypot(c.x - player.pos.x, c.z - player.pos.z);
      if (toP < 8 || toP > 30) continue;
      const fromE = Math.hypot(c.x - e.pos.x, c.z - e.pos.z);
      if (fromE > 70) continue;
      const ux = (c.x - player.pos.x) / toP;
      const uz = (c.z - player.pos.z) / toP;
      const hx = c.x + ux * (c.r + 0.7);
      const hz = c.z + uz * (c.r + 0.7);
      if (Math.abs(hx) > ARENA - 1 || Math.abs(hz) > ARENA - 1) continue;
      const score = Math.hypot(hx - e.pos.x, hz - e.pos.z) + Math.random() * 3;
      if (score < bestScore) {
        bestScore = score;
        best = { x: c.x, z: c.z, r: c.r, hide: { x: hx, z: hz } };
      }
    }
    return best;
  }

  aiHeavy(e, dt, player, dist, speedMul) {
    const cfg = e.cfg;
    const tx = e.flankTarget ? e.flankTarget.x : player.pos.x;
    const tz = e.flankTarget ? e.flankTarget.z : player.pos.z;
    if (e.state !== 'spray' || dist > cfg.range) {
      if (dist > 11 || e.flankTarget) {
        e.state = 'advance';
        const sp = this.moveTo(e, tx, tz, cfg.speed * speedMul * (e.pushT > 0 ? 1.1 : 1), dt);
        e.speedNow = sp;
        this.animate(e, dt, 'heavy', sp);
        return;
      }
      e.state = 'spray';
      e.stateT = 0;
      e.burstLeft = Math.round(rand(cfg.burstLen[0], cfg.burstLen[1]));
      e.cd.fire = 0.4;
    }
    e.speedNow = 0;
    this.faceDirection(e, player.pos.x, player.pos.z, dt);
    this.animate(e, dt, 'spray', 0);
    if (e.pauseT > 0) {
      e.pauseT -= dt;
      if (e.pauseT <= 0) e.burstLeft = Math.round(rand(cfg.burstLen[0], cfg.burstLen[1]));
      return;
    }
    if (e.cd.fire <= 0) {
      this.fireAt(e, player, cfg.spread, cfg.damage, 'heavy');
      e.cd.fire = cfg.fireGap;
      e.burstLeft--;
      if (e.burstLeft <= 0) {
        e.pauseT = cfg.pauseTime;
      }
    }
  }

  // ---- posing ---------------------------------------------------------------------------------------
  // mode: run, lunge, attack, crouch, aim, heavy, spray. Drives bone rotations from the cycle phase.
  animate(e, dt, mode, speed) {
    const b = e.bones;
    const k = clamp(speed / 6, 0, 1.4);
    e.phase += dt * (2.2 + speed * 1.7);
    const s = Math.sin(e.phase);
    const c = Math.cos(e.phase);
    const crouch = e.crouch;
    b.hips.position.y = 0.98 - crouch * 0.42 + (mode === 'run' ? Math.abs(s) * 0.03 : 0);
    const legSwing = mode === 'run' || mode === 'heavy' || mode === 'lunge' || mode === 'run' ? s * 0.8 * Math.min(1, k + 0.2) : 0;
    b.thighL.rotation.x = legSwing - crouch * 1.25;
    b.thighR.rotation.x = -legSwing - crouch * 1.25;
    b.shinL.rotation.x = Math.max(0, -s) * 0.9 * Math.min(1, k) + crouch * 1.5;
    b.shinR.rotation.x = Math.max(0, s) * 0.9 * Math.min(1, k) + crouch * 1.5;
    b.torso.rotation.x = -e.flinch * 0.42 + crouch * 0.4 + (mode === 'lunge' ? 0.85 : mode === 'run' ? 0.12 + k * 0.08 : 0);
    b.torso.rotation.z = e.lean * 0.4 + Math.sin(this.time * 0.9 + e.id) * 0.02;
    b.torso.rotation.y = e.flinch * e.flinchDir.x * 0.0;
    b.head.rotation.x = -e.flinch * 0.3 - (mode === 'lunge' ? 0.2 : 0);
    b.head.rotation.z = e.lean * -0.25;
    if (mode === 'lunge') {
      b.armL.rotation.x = -1.45;
      b.armR.rotation.x = -1.4;
      b.foreL.rotation.x = -0.2;
      b.foreR.rotation.x = -0.2;
    } else if (mode === 'attack') {
      b.armR.rotation.x = -1.4 - e.punch * 0.5;
      b.foreR.rotation.x = -0.3 - e.punch * 0.8;
      b.armL.rotation.x = -0.2;
      b.foreL.rotation.x = -0.4;
    } else if (mode === 'aim' || mode === 'spray') {
      b.armR.rotation.x = -1.3;
      b.armR.rotation.z = -0.12;
      b.foreR.rotation.x = -0.25;
      b.armL.rotation.x = -1.25;
      b.armL.rotation.z = 0.25;
      b.foreL.rotation.x = -0.6;
      b.torso.rotation.x += 0.05;
      if (mode === 'spray') b.torso.rotation.x += Math.abs(c) * 0.05;
    } else if (mode === 'crouch') {
      b.armR.rotation.x = -0.9;
      b.armL.rotation.x = -0.9;
      b.foreR.rotation.x = -0.7;
      b.foreL.rotation.x = -0.7;
    } else {
      const sw = s * 0.7 * Math.min(1, k + 0.15);
      b.armL.rotation.x = sw * 0.9 - 0.08;
      b.armR.rotation.x = -sw * 0.9 - 0.08;
      b.armL.rotation.z = -0.06;
      b.armR.rotation.z = 0.06;
      b.foreL.rotation.x = -0.35 - Math.max(0, -s) * 0.5;
      b.foreR.rotation.x = -0.35 - Math.max(0, s) * 0.5;
    }
    if (mode === 'heavy' && e.type === 'heavy') {
      b.armR.rotation.x = -1.1;
      b.armL.rotation.x = -1.1;
      b.foreR.rotation.x = -0.5;
      b.foreL.rotation.x = -0.4;
    }
    // The root takes yaw from the frame's facing target, smoothed.
    e.yaw = lerpAngle(e.yaw, e.targetYaw, 1 - Math.exp(-10 * dt));
    e.root.rotation.y = e.yaw;
    e.root.position.copy(e.pos);
    e.root.scale.setScalar(e.scale);
    e.root.position.y = e.pos.y;
    b.root.updateMatrixWorld(true);
  }

  // Writes per-part instance matrices for living enemies, compacting each archetype's list.
  writeInstances() {
    for (const t of ARCHS) {
      const arch = this.archs[t];
      const live = this.all.filter((e) => e.alive && e.type === t);
      arch.list = live;
      arch.lastActive = live;
      for (const k of arch.kinds) {
        const part = arch.parts[k];
        const mesh = part.mesh;
        const bonesFor = KIND_BONE[k];
        let i = 0;
        for (let n = 0; n < live.length; n++) {
          const e = live[n];
          for (let side = 0; side < part.sides; side++) {
            const boneName = bonesFor[side] || bonesFor[0];
            const bone = e.bones[boneName];
            let visible = true;
            if (k.startsWith('plate')) {
              const key = k === 'plateChest' ? 'chest' : k === 'plateSh' ? (side ? 'shR' : 'shL') : (side ? 'thR' : 'thL');
              visible = !e.plates[key] || !e.plates[key].broken;
            }
            if (visible) {
              mesh.setMatrixAt(i, bone.matrixWorld);
              if (e.colors) {
                let col = e.colors.torso;
                if (k === 'head') col = e.colors.head;
                else if (k === 'upper') col = e.colors.torso;
                else if (k === 'fore') col = e.colors.fore;
                else if (k === 'thigh' || k === 'shin') col = e.colors.legs;
                else if (k === 'gun') col = e.colors.gun || e.colors.torso;
                else if (k.startsWith('plate')) col = e.colors.plate || e.colors.torso;
                mesh.setColorAt(i, col);
              }
            } else {
              _m.makeScale(0, 0, 0);
              mesh.setMatrixAt(i, _m);
            }
            i++;
          }
        }
        mesh.count = i;
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        mesh.boundingSphere = null;
      }
    }
  }

  // ---- hits -------------------------------------------------------------------------------------------
  raycast(origin, dir, maxT) {
    this.raycaster.set(origin, dir);
    this.raycaster.far = maxT;
    let best = null;
    for (const mesh of this.hitMeshes) {
      if (mesh.count === 0) continue;
      const hits = this.raycaster.intersectObject(mesh, false);
      for (const h of hits) {
        if (!best || h.distance < best.h.distance) best = { h, mesh };
      }
    }
    if (!best) return null;
    const { h, mesh } = best;
    const ud = mesh.userData;
    const idx = Math.floor(h.instanceId / ud.sides);
    const side = h.instanceId % ud.sides;
    const enemy = this.archs[ud.arch].lastActive[idx];
    if (!enemy || !enemy.alive) return null;
    mesh.getMatrixAt(h.instanceId, _m);
    _n.copy(h.face.normal).transformDirection(_m);
    return { enemy, part: ud.kind, side, point: h.point.clone(), normal: _n.clone(), distance: h.distance, mesh };
  }

  // Applies a hit to an enemy. Returns { killed, headshot, plateBroke }.
  applyHit(hit, dmg, dir, headshot) {
    const e = hit.enemy;
    const k = hit.part;
    const res = { killed: false, headshot: false, plateBroke: false, plate: false };
    e.punch = 0;
    if (k.startsWith('plate')) {
      const key = k === 'plateChest' ? 'chest' : k === 'plateSh' ? (hit.side ? 'shR' : 'shL') : (hit.side ? 'thR' : 'thL');
      const plate = e.plates[key];
      res.plate = true;
      if (plate && !plate.broken) {
        plate.hp -= dmg;
        if (plate.hp <= 0) {
          plate.broken = true;
          res.plateBroke = true;
          this.spawnPlateDebris(e, k, hit.side, dir, hit.point);
        }
      }
      e.hp -= dmg * (plate && plate.broken ? 0.35 : 0.04);
      this.hurtKnockback(e, dir.x, dir.z);
      if (e.hp <= 0) {
        res.killed = true;
        this.kill(e, dir, false);
      }
      return res;
    }
    if (k === 'head') {
      res.headshot = true;
      res.killed = true;
      this.kill(e, dir, true, hit.point);
      return res;
    }
    e.hp -= dmg;
    this.hurtKnockback(e, dir.x, dir.z);
    if (e.hp <= 0) {
      res.killed = true;
      this.kill(e, dir, false, hit.point);
    }
    return res;
  }

  spawnPlateDebris(e, kind, side, dir, point) {
    const geo = this.archs[e.type].parts[kind].geo;
    const mat = new THREE.MeshStandardMaterial({ color: e.colors.plate ? e.colors.plate.clone() : 0x444444, roughness: 0.34, metalness: 0.75 });
    const mesh = new THREE.Mesh(geo, mat);
    const bone = e.bones[KIND_BONE[kind][side] || KIND_BONE[kind][0]];
    bone.updateMatrixWorld(true);
    bone.matrixWorld.decompose(_p, _q, _s);
    mesh.position.copy(_p);
    mesh.quaternion.copy(_q);
    mesh.scale.copy(_s);
    mesh.castShadow = true;
    mesh.layers.enable(CAST_LAYER);
    this.scene.add(mesh);
    const vel = new THREE.Vector3(dir.x * 3.2 + (Math.random() - 0.5) * 2, 3.8 + Math.random() * 1.6, dir.z * 3.2 + (Math.random() - 0.5) * 2);
    const w = new THREE.Vector3(rand(-14, 14), rand(-14, 14), rand(-14, 14));
    this.hooks.onPlateDebris && this.hooks.onPlateDebris(mesh, vel, w, point);
  }

  // Death: the bones become physical debris. The enemy keeps no hitboxes once dead.
  kill(e, dir, headshot, point = null) {
    if (!e.alive) return;
    e.alive = false;
    e.hp = 0;
    // Hide this frame's instances immediately so later shots this frame can't hit the corpse.
    this.hideInstancesOf(e);
    e.bones.root.updateMatrixWorld(true);
    const parts = [
      ['torso', e.bones.torso, 'torso', e.colors.torso, 0.2],
      ['head', e.bones.head, 'head', e.colors.head, 0.13],
      ['upperL', e.bones.armL, 'upper', e.colors.torso, 0.1],
      ['upperR', e.bones.armR, 'upper', e.colors.torso, 0.1],
      ['foreL', e.bones.foreL, 'fore', e.colors.fore, 0.1],
      ['foreR', e.bones.foreR, 'fore', e.colors.fore, 0.1],
      ['thighL', e.bones.thighL, 'thigh', e.colors.legs, 0.12],
      ['thighR', e.bones.thighR, 'thigh', e.colors.legs, 0.12],
      ['shinL', e.bones.shinL, 'shin', e.colors.legs, 0.12],
      ['shinR', e.bones.shinR, 'shin', e.colors.legs, 0.12],
    ];
    if (e.type === 'gunner' || e.type === 'heavy') parts.push(['gun', e.bones.torso, 'gun', e.colors.gun || e.colors.torso, 0.12]);
    const base = new THREE.Vector3(dir.x * 4.4, 3.1, dir.z * 4.4);
    for (const [name, bone, geoKey, color, rad] of parts) {
      const geo = this.archs[e.type].parts[geoKey].geo;
      const mat = new THREE.MeshStandardMaterial({ color: color ? color.clone() : 0x333333, roughness: 0.86 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.name = 'debris-' + name;
      mesh.castShadow = true;
      mesh.layers.enable(CAST_LAYER);
      bone.matrixWorld.decompose(_p, _q, _s);
      mesh.position.copy(_p);
      mesh.quaternion.copy(_q);
      mesh.scale.copy(_s);
      this.scene.add(mesh);
      // Each part gets its own kick: head and torso go furthest, limbs spin.
      const kick = name === 'head' ? 1.4 : name === 'torso' ? 0.6 : 0.9;
      const v = base.clone().multiplyScalar(kick * (0.6 + Math.random() * 0.6));
      v.x += (Math.random() - 0.5) * 2.2;
      v.z += (Math.random() - 0.5) * 2.2;
      v.y += (Math.random() - 0.3) * 2.5;
      const w = new THREE.Vector3(rand(-12, 12), rand(-12, 12), rand(-12, 12));
      if (headshot && name === 'head') {
        v.y += 3.5;
        w.multiplyScalar(2.2);
      }
      this.hooks.onDebris && this.hooks.onDebris(mesh, v, w, rad, name === 'head' ? 'head' : 'body', e);
    }
    // Unbroken plates come off too, on death.
    if (e.type === 'heavy') {
      for (const [key, kind, side] of [['chest', 'plateChest', 0], ['shL', 'plateSh', 0], ['shR', 'plateSh', 1], ['thL', 'plateTh', 0], ['thR', 'plateTh', 1]]) {
        if (e.plates[key] && !e.plates[key].broken) {
          e.plates[key].broken = true;
          this.spawnPlateDebris(e, kind, side, dir, point || e.pos);
        }
      }
    }
    // Blood pool under the body.
    if (this.hooks.onKill) this.hooks.onKill(e, headshot, point);
  }

  hideInstancesOf(e) {
    const arch = this.archs[e.type];
    const idx = arch.lastActive.indexOf(e);
    if (idx < 0) return;
    for (const k of arch.kinds) {
      const part = arch.parts[k];
      for (let side = 0; side < part.sides; side++) {
        const at = idx * part.sides + side;
        if (at >= part.mesh.count) continue;
        _m.makeScale(0, 0, 0);
        part.mesh.setMatrixAt(at, _m);
      }
      part.mesh.instanceMatrix.needsUpdate = true;
      part.mesh.boundingSphere = null;
    }
  }

  onPlayerReload(x, z, radius = 45) {
    for (const e of this.all) {
      if (!e.alive) continue;
      if (Math.hypot(e.pos.x - x, e.pos.z - z) < radius) {
        e.pushT = CFG.waves.pushTime;
        if (e.type === 'gunner') e.hideT = Math.min(e.hideT || 0, 0.4);
      }
    }
    this.boostTimer = CFG.waves.pushTime;
  }

  // Remove everything (restart).
  clear() {
    for (const e of this.all) {
      if (e.alive) {
        e.alive = false;
        this.hideInstancesOf(e);
      }
    }
    this.all.length = 0;
    for (const t of ARCHS) {
      const arch = this.archs[t];
      arch.list = [];
      arch.lastActive = [];
      for (const k of arch.kinds) arch.parts[k].mesh.count = 0;
    }
  }
}
