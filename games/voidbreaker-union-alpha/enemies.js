import * as THREE from 'three';

const TYPES = {
  grunt: { hp: 70, speed: 5.1, dmg: 10, score: 60, radius: 0.58, stop: 1.55, range: 2.3, cd: 1.15 },
  drone: { hp: 45, speed: 6.0, dmg: 8, score: 100, radius: 0.7, stop: 10, range: 15, cd: 1.85 },
  heavy: { hp: 220, speed: 2.65, dmg: 25, score: 250, radius: 1.0, stop: 2.05, range: 3.0, cd: 1.65 },
};

// Segment against an expanded rectangle; returns its entry fraction or Infinity.
function intersect(x, z, tx, tz, c, radius) {
  const dx = tx - x, dz = tz - z;
  let lo = 0, hi = 1;
  const minX = c.x - c.hx - radius, maxX = c.x + c.hx + radius;
  const minZ = c.z - c.hz - radius, maxZ = c.z + c.hz + radius;
  if (Math.abs(dx) < 0.00001) {
    if (x < minX || x > maxX) return Infinity;
  } else {
    const a = (minX - x) / dx, b = (maxX - x) / dx;
    lo = Math.max(lo, Math.min(a, b)); hi = Math.min(hi, Math.max(a, b));
  }
  if (Math.abs(dz) < 0.00001) {
    if (z < minZ || z > maxZ) return Infinity;
  } else {
    const a = (minZ - z) / dz, b = (maxZ - z) / dz;
    lo = Math.max(lo, Math.min(a, b)); hi = Math.min(hi, Math.max(a, b));
  }
  return lo <= hi ? lo : Infinity;
}

export class EnemySwarm {
  constructor(scene, fx) {
    this.scene = scene;
    this.fx = fx;
    this.list = [];
    this.colliders = [];
    this.onHit = null;
    this.onKill = null;
    this._playerPos = new THREE.Vector3(0, 1.7, 24);
    this._point = new THREE.Vector3();
    this._direction = new THREE.Vector3(0, 1, 0);
    this._beams = [];
    this._beamGeo = new THREE.CylinderGeometry(0.7, 0.7, 1, 10, 1, true);
    this._chunkGeo = new THREE.BoxGeometry(1, 1, 1);
    this._chunkMats = [0x862c30, 0x26758a, 0x766047].map(color =>
      new THREE.MeshStandardMaterial({ color, metalness: 0.7, roughness: 0.45 }));
    this._buildPrototypes();
  }

  _buildPrototypes() {
    const box = new THREE.BoxGeometry(1, 1, 1);
    const limb = new THREE.BoxGeometry(1, 1, 1);
    limb.translate(0, -0.5, 0);
    const part = (parent, geometry, material, name, x, y, z, sx, sy, sz) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = name;
      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.headshot = name === 'head' || name === 'visor' || name === 'core';
      parent.add(mesh);
      return mesh;
    };
    this.prototypes = {};
    for (const type of ['grunt', 'heavy']) {
      const heavy = type === 'heavy';
      const group = new THREE.Group();
      const armor = new THREE.MeshStandardMaterial({ color: heavy ? 0x555060 : 0x84333c, roughness: 0.46, metalness: 0.7, emissive: heavy ? 0x211508 : 0x270607, emissiveIntensity: 0.4 });
      const joint = new THREE.MeshStandardMaterial({ color: 0x171f29, roughness: 0.5, metalness: 0.75 });
      const glow = new THREE.MeshBasicMaterial({ color: heavy ? 0xffae42 : 0xff3945 });
      const hip = heavy ? 1.12 : 0.96, shoulder = heavy ? 2.2 : 1.65;
      part(group, box, armor, 'torso', 0, heavy ? 1.73 : 1.35, 0, heavy ? 1.42 : 0.8, heavy ? 1.35 : 0.94, heavy ? 0.9 : 0.5);
      part(group, box, joint, 'waist', 0, hip, 0, heavy ? 1.05 : 0.63, 0.25, 0.5);
      part(group, box, armor, 'head', 0, heavy ? 2.7 : 2.0, -0.035, heavy ? 0.6 : 0.43, 0.43, 0.45);
      part(group, box, glow, 'visor', 0, heavy ? 2.72 : 2.02, -0.273, heavy ? 0.53 : 0.39, 0.08, 0.035);
      part(group, box, glow, 'chestLight', 0, heavy ? 1.95 : 1.45, heavy ? -0.466 : -0.266, heavy ? 0.58 : 0.28, 0.07, 0.035);
      for (const s of [-1, 1]) {
        const suffix = s < 0 ? 'L' : 'R';
        const x = s * (heavy ? 0.94 : 0.54);
        part(group, box, armor, 'shoulder', x, shoulder, 0, heavy ? 0.64 : 0.35, heavy ? 0.5 : 0.28, heavy ? 0.86 : 0.57);
        part(group, limb, armor, 'arm' + suffix, x, shoulder - 0.05, 0, heavy ? 0.42 : 0.22, heavy ? 1.3 : 0.85, heavy ? 0.45 : 0.25);
        part(group, limb, joint, 'leg' + suffix, s * (heavy ? 0.4 : 0.23), hip, 0, heavy ? 0.43 : 0.26, hip - 0.07, heavy ? 0.48 : 0.29);
      }
      group.userData.proto = type;
      this.prototypes[type] = group;
    }
    const drone = new THREE.Group();
    const armor = new THREE.MeshStandardMaterial({ color: 0x284553, roughness: 0.3, metalness: 0.85, emissive: 0x042632, emissiveIntensity: 0.65 });
    const glow = new THREE.MeshBasicMaterial({ color: 0x31e5ff });
    part(drone, new THREE.OctahedronGeometry(0.53), armor, 'core', 0, 0, 0, 1, 1, 1);
    const ring = part(drone, new THREE.TorusGeometry(0.78, 0.05, 6, 24), glow, 'ring', 0, 0, 0, 1, 1, 1);
    ring.rotation.x = Math.PI / 2;
    part(drone, box, glow, 'visor', 0, 0, -0.5, 0.3, 0.13, 0.08);
    for (const s of [-1, 1]) part(drone, box, armor, 'wing', s * 0.6, 0, 0, 0.48, 0.14, 0.38);
    drone.userData.proto = 'drone';
    this.prototypes.drone = drone;
  }

  spawn(type = 'grunt') {
    if (this.list.length >= 90) return null;
    if (!TYPES[type]) type = 'grunt';
    const spec = TYPES[type];
    let x = 0, z = -46, best = -1;
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const sx = Math.sin(angle) * 46, sz = Math.cos(angle) * 46;
      let clear = true;
      for (const c of this.colliders) {
        if (Math.abs(sx - c.x) < c.hx + spec.radius && Math.abs(sz - c.z) < c.hz + spec.radius) { clear = false; break; }
      }
      const d = (sx - this._playerPos.x) ** 2 + (sz - this._playerPos.z) ** 2;
      if (clear && d > best) { x = sx; z = sz; best = d; }
    }
    const mesh = this.prototypes[type].clone(true);
    const clones = new Map();
    mesh.traverse(object => {
      if (!object.isMesh) return;
      const original = object.material;
      if (!clones.has(original)) {
        const material = original.clone();
        material.userData.baseEmissive = material.emissive ? material.emissive.getHex() : 0;
        material.userData.baseIntensity = material.emissiveIntensity;
        clones.set(original, material);
      }
      object.material = clones.get(original);
    });
    mesh.position.set(x, type === 'drone' ? 3.2 : 0, z);
    const e = {
      mesh, pos: mesh.position, type, hp: spec.hp, maxHp: spec.hp, score: spec.score,
      speed: spec.speed * (0.92 + Math.random() * 0.16), radius: spec.radius,
      attackT: 1.3 + Math.random(), flashT: 0, flashed: false, dead: false,
      phase: Math.random() * Math.PI * 2, strafe: Math.random() < 0.5 ? -1 : 1,
      wayX: x, wayZ: z, routeT: 0, routed: false,
      materials: [...clones.values()],
      legL: mesh.getObjectByName('legL'), legR: mesh.getObjectByName('legR'),
      armL: mesh.getObjectByName('armL'), armR: mesh.getObjectByName('armR'),
      ring: mesh.getObjectByName('ring'),
    };
    mesh.userData.enemy = e;
    this._resolve(e);
    this.scene.add(mesh);
    mesh.updateMatrixWorld(true);
    this.list.push(e);
    const beam = new THREE.Mesh(this._beamGeo, new THREE.MeshBasicMaterial({ color: type === 'drone' ? 0x32dfff : 0xff7733, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    beam.position.set(e.pos.x, 5, e.pos.z);
    beam.scale.y = 10;
    this.scene.add(beam);
    this._beams.push({ mesh: beam, life: 0.65 });
    return e;
  }

  hit(e, damage, point, direction, headshot = false) {
    if (!e || e.dead) return false;
    e.hp -= damage;
    e.flashT = 0.09;
    if (point) this.fx.spark(point, direction || this._direction);
    if (headshot && point) this.fx.explode(point, 0.3, 0xffe5a0);
    const killed = e.hp <= 0;
    if (this.onHit) this.onHit(killed);
    if (killed) this._kill(e, direction || this._direction, headshot);
    return killed;
  }

  _kill(e, direction, headshot) {
    e.dead = true;
    this._point.copy(e.pos);
    if (e.type !== 'drone') this._point.y += 1.35;
    this.fx.explode(this._point, e.type === 'heavy' ? 1.8 : 1, e.type === 'drone' ? 0x32dfff : 0xff7733);
    const material = this._chunkMats[e.type === 'grunt' ? 0 : e.type === 'drone' ? 1 : 2];
    for (let i = 0; i < 5; i++) {
      const chunk = new THREE.Mesh(this._chunkGeo, material);
      chunk.userData.sharedResources = true;
      chunk.scale.set(0.15 + Math.random() * 0.23, 0.15 + Math.random() * 0.35, 0.16 + Math.random() * 0.18);
      chunk.position.set(this._point.x + (Math.random() - 0.5) * 0.8, this._point.y + Math.random() * 0.6, this._point.z + (Math.random() - 0.5) * 0.8);
      this.fx.addDebris(chunk, direction);
    }
    this.scene.remove(e.mesh);
    for (const material of e.materials) material.dispose();
    const index = this.list.indexOf(e);
    if (index !== -1) this.list.splice(index, 1);
    if (this.onKill) this.onKill(e.score * (headshot ? 2 : 1), `${headshot ? 'HEADSHOT · ' : ''}${e.type.toUpperCase()} DOWN`);
  }

  _blocker(e, tx, tz, x = e.pos.x, z = e.pos.z) {
    let nearest = Infinity, blocker = null;
    const bottom = e.type === 'drone' ? e.pos.y - 0.6 : 0;
    for (const c of this.colliders) {
      if (c.height <= bottom) continue;
      const entry = intersect(x, z, tx, tz, c, e.radius + 0.08);
      if (entry < nearest) { nearest = entry; blocker = c; }
    }
    return blocker;
  }

  _route(e, target) {
    e.routed = false;
    const c = this._blocker(e, target.x, target.z);
    if (!c) return;
    let best = Infinity;
    const margin = e.radius + 0.24;
    for (let i = 0; i < 4; i++) {
      const x = c.x + (i & 1 ? 1 : -1) * (c.hx + margin);
      const z = c.z + (i & 2 ? 1 : -1) * (c.hz + margin);
      const distance = Math.hypot(x - e.pos.x, z - e.pos.z);
      if (distance < 0.24 || this._blocker(e, x, z)) continue;
      const blockedAfter = this._blocker(e, target.x, target.z, x, z) !== null;
      const cost = distance + Math.hypot(target.x - x, target.z - z) + (blockedAfter ? 12 : 0);
      if (cost < best) { best = cost; e.wayX = x; e.wayZ = z; e.routed = true; }
    }
  }

  _resolve(e) {
    const bottom = e.type === 'drone' ? e.pos.y - 0.6 : 0;
    for (let pass = 0; pass < 2; pass++) {
      for (const c of this.colliders) {
        if (c.height <= bottom) continue;
        const dx = e.pos.x - c.x, dz = e.pos.z - c.z;
        const px = c.hx + e.radius - Math.abs(dx), pz = c.hz + e.radius - Math.abs(dz);
        if (px <= 0 || pz <= 0) continue;
        if (px < pz) e.pos.x += (dx < 0 ? -1 : 1) * px;
        else e.pos.z += (dz < 0 ? -1 : 1) * pz;
      }
    }
    const radius = Math.hypot(e.pos.x, e.pos.z), limit = 53 - e.radius;
    if (radius > limit) { e.pos.x *= limit / radius; e.pos.z *= limit / radius; }
  }

  _clearShot(e, target) {
    const y = e.type === 'drone' ? e.pos.y : e.pos.y + 1.2;
    for (const c of this.colliders) {
      const at = intersect(e.pos.x, e.pos.z, target.x, target.z, c, 0);
      if (at === Infinity) continue;
      if (Math.min(y, y + (target.y - y) * at) <= c.height + 0.08) return false;
    }
    return true;
  }

  update(dt, t, P, damagePlayer) {
    this._playerPos.copy(P.pos);
    for (let i = this._beams.length - 1; i >= 0; i--) {
      const beam = this._beams[i];
      beam.life -= dt;
      beam.mesh.material.opacity = Math.max(0, beam.life);
      beam.mesh.scale.x = beam.mesh.scale.z = 1 + (0.65 - beam.life) * 1.5;
      if (beam.life <= 0) {
        this.scene.remove(beam.mesh);
        beam.mesh.material.dispose();
        this._beams.splice(i, 1);
      }
    }
    for (const e of this.list) {
      const spec = TYPES[e.type];
      e.flashT = Math.max(0, e.flashT - dt);
      const flashing = e.flashT > 0;
      if (flashing !== e.flashed) {
        for (const material of e.materials) {
          if (!material.emissive) continue;
          material.emissive.setHex(flashing ? 0xffffff : material.userData.baseEmissive);
          material.emissiveIntensity = flashing ? 2.5 : material.userData.baseIntensity;
        }
        e.flashed = flashing;
      }
      if (e.type === 'drone') e.pos.y = 3.2 + Math.sin(t * 2.4 + e.phase) * 0.3;
      if (!P.alive) continue;
      const dx = P.pos.x - e.pos.x, dz = P.pos.z - e.pos.z;
      const distance = Math.hypot(dx, dz) || 0.001;
      e.routeT -= dt;
      if (e.routeT <= 0 || (e.routed && Math.hypot(e.wayX - e.pos.x, e.wayZ - e.pos.z) < 0.32)) {
        this._route(e, P.pos);
        e.routeT = 0.35;
      }
      let mx = dx / distance, mz = dz / distance;
      let move = distance > spec.stop ? 1 : 0;
      if (e.routed) {
        mx = e.wayX - e.pos.x; mz = e.wayZ - e.pos.z;
        const length = Math.hypot(mx, mz) || 1;
        mx /= length; mz /= length; move = 1;
      } else if (e.type === 'drone' && distance < spec.range) {
        const advance = distance > spec.stop ? 0.7 : distance < 7 ? -0.8 : 0;
        mx = dx / distance * advance - dz / distance * e.strafe * 0.5;
        mz = dz / distance * advance + dx / distance * e.strafe * 0.5;
        move = 1;
      }
      e.pos.x += mx * e.speed * move * dt;
      e.pos.z += mz * e.speed * move * dt;
      this._resolve(e);
      // Robot fronts face local -Z, matching their visors.
      e.mesh.rotation.y = Math.atan2(-dx, -dz);
      if (e.ring) e.ring.rotation.z = t * 3.5 + e.phase;
      if (e.legL) {
        const gait = Math.sin(t * (e.type === 'heavy' ? 7 : 12) + e.phase) * move;
        e.legL.rotation.x = gait * 0.65; e.legR.rotation.x = -gait * 0.65;
        e.armL.rotation.x = -gait * 0.5 - 0.3; e.armR.rotation.x = gait * 0.5 - 0.3;
      }
      e.attackT -= dt;
      const reach = Math.hypot(P.pos.x - e.pos.x, P.pos.z - e.pos.z);
      if (P.alive && reach < spec.range && e.attackT <= 0 && this._clearShot(e, P.pos)) {
        if (e.type !== 'drone' && P.pos.y > (e.type === 'heavy' ? 4.3 : 3.3)) continue;
        e.attackT = spec.cd;
        if (e.type === 'drone') this.fx.plasmaBolt(e.pos, P.pos);
        else {
          this._point.copy(e.pos); this._point.y += 1.2;
          this.fx.meleeSwipe(this._point);
          e.armL.rotation.x = e.armR.rotation.x = -1.4;
        }
        damagePlayer(spec.dmg, e.pos);
      }
    }
    if (P.alive) {
      for (let i = 0; i < this.list.length; i++) {
        const a = this.list[i];
        for (let j = i + 1; j < this.list.length; j++) {
          const b = this.list[j];
          if ((a.type === 'drone') !== (b.type === 'drone')) continue;
          let dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
          const minimum = a.radius + b.radius + 0.12;
          let d2 = dx * dx + dz * dz;
          if (d2 >= minimum * minimum) continue;
          if (d2 < 0.00001) { dx = 0.01; dz = 0; d2 = 0.0001; }
          const distance = Math.sqrt(d2), push = Math.min(0.15, (minimum - distance) * 0.5);
          dx *= push / distance; dz *= push / distance;
          a.pos.x -= dx; a.pos.z -= dz; b.pos.x += dx; b.pos.z += dz;
        }
      }
    }
    for (const e of this.list) {
      this._resolve(e);
      e.mesh.updateMatrixWorld(true);
    }
  }

  reset() {
    for (const e of this.list) {
      e.dead = true;
      this.scene.remove(e.mesh);
      for (const material of e.materials) material.dispose();
    }
    this.list.length = 0;
    for (const beam of this._beams) { this.scene.remove(beam.mesh); beam.mesh.material.dispose(); }
    this._beams.length = 0;
    this._playerPos.set(0, 1.7, 24);
  }
}
