import * as THREE from 'three';

export const WEAPONS = Object.freeze([
  Object.freeze({ id: 'rifle', name: 'MK-7 PULSE RIFLE', capacity: 30, reserve: 300, modeLabel: 'FULL AUTO · 5.56 MM', sensMul: 1, adsZoom: 0.53, interval: 0.092, reloadTime: 1.8, damage: 25, pellets: 1, spread: 0.008, adsSpread: 0.0009, recoil: 0.016, sightY: 0.19 }),
  Object.freeze({ id: 'shotgun', name: 'BREACH-12', capacity: 8, reserve: 80, modeLabel: 'PUMP ACTION · 12 GAUGE', sensMul: 1, adsZoom: 0.4, interval: 0.78, reloadTime: 0.56, damage: 12, pellets: 10, spread: 0.056, adsSpread: 0.038, recoil: 0.052, sightY: 0.115 }),
  Object.freeze({ id: 'marksman', name: 'M-14 EXECUTOR', capacity: 10, reserve: 100, modeLabel: 'SEMI AUTO · ACOG 4×', sensMul: 0.85, adsZoom: 1.29, interval: 0.47, reloadTime: 2.3, damage: 96, pellets: 1, spread: 0.019, adsSpread: 0.00012, recoil: 0.046, sightY: 0.225 }),
]);

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;

function buildWeapon(config) {
  const root = new THREE.Group();
  root.name = config.id;
  const metal = new THREE.MeshStandardMaterial({ color: 0x27323b, metalness: 0.78, roughness: 0.35, emissive: 0x101c28, emissiveIntensity: 0.24 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x10171d, metalness: 0.4, roughness: 0.58 });
  const edge = new THREE.MeshStandardMaterial({ color: 0x667079, metalness: 0.8, roughness: 0.3 });
  const tan = new THREE.MeshStandardMaterial({ color: config.id === 'marksman' ? 0x7d7760 : 0x364849, metalness: 0.18, roughness: 0.72 });
  const glove = new THREE.MeshStandardMaterial({ color: 0x1c252b, roughness: 0.94 });
  const sleeve = new THREE.MeshStandardMaterial({ color: 0x34414b, roughness: 0.9 });
  const skin = new THREE.MeshStandardMaterial({ color: 0x9e7561, roughness: 0.83 });
  const cyan = new THREE.MeshBasicMaterial({ color: 0x6ff5ff, toneMapped: false });
  const red = new THREE.MeshBasicMaterial({ color: 0xff492d, toneMapped: false, depthTest: true });
  function box(w, h, d, x, y, z, mat = metal, parent = root) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z); parent.add(m); return m;
  }
  function cylinder(radius, length, x, y, z, mat = metal, parent = root, segments = 12) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, segments), mat);
    m.rotation.x = Math.PI / 2; m.position.set(x, y, z); parent.add(m); return m;
  }
  function ring(radius, thickness, x, y, z, mat = dark) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(radius, thickness, 8, 24), mat);
    m.position.set(x, y, z); root.add(m); return m;
  }

  const shotgun = config.id === 'shotgun';
  const marksman = config.id === 'marksman';
  box(0.135, 0.13, 0.4, 0, 0, -0.27);
  box(0.115, 0.09, 0.3, 0, -0.082, -0.18, dark);
  box(0.12, 0.12, 0.25, 0, -0.015, 0.055, tan);
  box(0.15, 0.165, 0.045, 0, -0.01, 0.18, dark);
  const grip = box(0.092, 0.205, 0.105, 0, -0.17, -0.105, dark);
  grip.rotation.x = -0.26;
  box(0.012, 0.075, 0.12, 0.057, -0.128, -0.22, edge);
  box(0.06, 0.012, 0.12, 0.028, -0.17, -0.22, edge);
  box(0.026, 0.035, 0.065, 0.077, 0.034, -0.235, dark);
  box(0.006, 0.035, 0.13, 0.07, 0.011, -0.33, edge);
  box(0.026, 0.017, 0.032, 0.087, 0.02, -0.26, edge);
  box(0.009, 0.026, 0.11, -0.072, 0.015, -0.24, tan);
  for (let i = 0; i < 3; i++) cylinder(0.009, 0.15, 0, -0.034, -0.18 - i * 0.08, edge).rotation.z = Math.PI / 2;

  const barrelEnd = shotgun ? -0.98 : marksman ? -1.08 : -0.92;
  const barrelStart = -0.43;
  cylinder(shotgun ? 0.038 : 0.024, Math.abs(barrelEnd - barrelStart), 0, 0.012, (barrelStart + barrelEnd) / 2, dark);
  cylinder(shotgun ? 0.043 : 0.034, 0.085, 0, 0.012, barrelEnd, metal);
  cylinder(shotgun ? 0.029 : 0.019, 0.008, 0, 0.012, barrelEnd - 0.046, new THREE.MeshBasicMaterial({ color: 0x020407 }));
  if (shotgun) {
    cylinder(0.025, 0.37, 0, -0.073, -0.64, metal);
  } else {
    box(0.12, 0.13, 0.31, 0, 0.005, -0.56, tan);
    for (let i = 0; i < 6; i++) {
      box(0.126, 0.013, 0.017, 0, 0.083, -0.43 - i * 0.052, dark);
      for (const side of [-1, 1]) box(0.006, 0.043, 0.024, side * 0.062, 0.014, -0.44 - i * 0.045, dark);
    }
    cylinder(0.011, 0.4, 0, 0.056, -0.68, edge);
  }
  for (let i = 0; i < 9; i++) box(0.125, 0.012, 0.018, 0, 0.075, -0.1 - i * 0.039, edge);

  const magazine = new THREE.Group(); root.add(magazine); magazine.position.set(0, -0.14, -0.32);
  if (!shotgun) {
    const mag = box(0.098, marksman ? 0.19 : 0.255, 0.13, 0, -0.065, 0, dark, magazine);
    mag.rotation.x = marksman ? 0 : 0.1;
    for (let i = 0; i < 3; i++) box(0.101, 0.01, 0.134, 0, -0.01 - i * 0.06, 0, tan, magazine);
    box(0.112, 0.026, 0.145, 0, marksman ? -0.15 : -0.19, 0, metal, magazine);
  }
  const pump = new THREE.Group(); root.add(pump);
  if (shotgun) {
    box(0.145, 0.115, 0.24, 0, -0.04, -0.6, tan, pump);
    for (let i = 0; i < 7; i++) box(0.152, 0.124, 0.012, 0, -0.04, -0.5 - i * 0.032, dark, pump);
    box(0.14, 0.025, 0.09, 0, 0.085, -0.2, metal);
    box(0.027, 0.042, 0.028, -0.052, 0.109, -0.19, edge);
    box(0.027, 0.042, 0.028, 0.052, 0.109, -0.19, edge);
    box(0.012, 0.072, 0.025, 0, 0.079, -0.85, metal);
    box(0.009, 0.009, 0.022, 0, config.sightY, -0.85, cyan);
  } else if (marksman) {
    box(0.09, 0.045, 0.2, 0, 0.112, -0.265, dark);
    for (const z of [-0.17, -0.38]) {
      box(0.045, 0.082, 0.045, 0, 0.156, z, metal);
      ring(0.063, 0.01, 0, config.sightY, z, edge);
    }
    // Open scope tube rings retain a true sight line before the 4× overlay takes over.
    for (let i = 0; i < 8; i++) ring(0.065 - i * 0.001, 0.013, 0, config.sightY, -0.105 - i * 0.043, dark);
    cylinder(0.027, 0.036, 0, 0.302, -0.25, metal).rotation.x = 0;
    cylinder(0.026, 0.045, 0.085, config.sightY, -0.25, metal).rotation.z = Math.PI / 2;
    box(0.014, 0.0018, 0.002, 0, config.sightY, -0.42, red);
    box(0.0018, 0.014, 0.002, 0, config.sightY, -0.42, red);
  } else {
    box(0.1, 0.026, 0.14, 0, 0.101, -0.235, dark);
    box(0.017, 0.126, 0.06, -0.062, 0.175, -0.235, metal);
    box(0.017, 0.126, 0.06, 0.062, 0.175, -0.235, metal);
    box(0.138, 0.018, 0.06, 0, 0.237, -0.235, metal);
    box(0.135, 0.013, 0.06, 0, 0.115, -0.235, metal);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.003, 8, 6), red);
    dot.position.set(0, config.sightY, -0.31); root.add(dot);
    box(0.033, 0.032, 0.035, 0.089, 0.153, -0.23, dark);
  }

  const rightHand = new THREE.Group(); root.add(rightHand);
  const palm = box(0.108, 0.126, 0.115, 0.034, -0.19, -0.085, glove, rightHand); palm.rotation.x = -0.25;
  box(0.031, 0.03, 0.115, 0.071, -0.108, -0.18, skin, rightHand);
  for (let i = 0; i < 3; i++) box(0.106, 0.022, 0.024, 0.02, -0.158 - i * 0.03, -0.146, glove, rightHand);
  const rightArm = box(0.13, 0.15, 0.4, 0.11, -0.27, 0.115, sleeve, rightHand); rightArm.rotation.y = -0.24; rightArm.rotation.x = -0.3;
  box(0.133, 0.033, 0.072, 0.045, -0.235, -0.011, dark, rightHand);
  const leftHand = new THREE.Group(); root.add(leftHand);
  const leftPalm = box(0.16, 0.08, 0.13, -0.025, -0.127, -0.55, glove, leftHand); leftPalm.rotation.z = -0.18;
  for (let i = 0; i < 4; i++) box(0.034, 0.065, 0.024, -0.084, -0.091, -0.5 - i * 0.029, glove, leftHand);
  const leftArm = box(0.125, 0.13, 0.48, -0.16, -0.24, -0.35, sleeve, leftHand); leftArm.rotation.y = -0.53; leftArm.rotation.x = -0.34;
  box(0.055, 0.035, 0.059, -0.135, -0.174, -0.52, dark, leftHand);
  box(0.045, 0.004, 0.037, -0.135, -0.153, -0.52, cyan, leftHand);
  // Receiver status strip and machined serial marks.
  box(0.004, 0.012, 0.06, 0.07, -0.028, -0.12, cyan);
  for (let i = 0; i < 4; i++) box(0.003, 0.012, 0.014, 0.07, 0.021, -0.135 - i * 0.02, edge);

  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.012, barrelEnd - 0.065); root.add(muzzle);
  const eject = new THREE.Object3D(); eject.position.set(0.105, 0.026, -0.27); root.add(eject);
  const flashMaterial = new THREE.MeshBasicMaterial({ color: 0xffdf92, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false });
  const flash = new THREE.Group(); muzzle.add(flash);
  for (let i = 0; i < 3; i++) {
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.26), flashMaterial);
    plane.rotation.x = Math.PI / 2; plane.rotation.y = i * Math.PI / 3; plane.position.z = -0.095; flash.add(plane);
  }
  root.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 4; } });
  root.visible = false;
  return { root, magazine, pump, leftHand, muzzle, eject, flash, flashMaterial };
}

function createScope() {
  const scope = document.createElement('div');
  scope.id = 'weapon-scope';
  scope.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:8;display:none;opacity:0;';
  scope.innerHTML = `<div style="position:absolute;left:50%;top:50%;width:76vmin;height:76vmin;transform:translate(-50%,-50%);border-radius:50%;border:12px solid #0b0e13;box-shadow:0 0 0 200vmax rgba(1,3,7,.97),inset 0 0 45px 16px rgba(0,0,0,.72);background:radial-gradient(circle,transparent 45%,rgba(20,45,49,.18) 75%,rgba(0,0,0,.8) 100%);">
  <svg viewBox="0 0 400 400" style="width:100%;height:100%;overflow:visible" aria-hidden="true"><g fill="none" stroke="#121817" stroke-width="1.1"><path d="M0 200H190 M210 200H400 M200 0V190 M200 210V400"/><path d="M160 196v8 M120 196v8 M80 196v8 M240 196v8 M280 196v8 M320 196v8 M192 240h16 M188 280h24 M184 320h32"/></g><path d="M191 205L200 194L209 205" fill="none" stroke="#ef5637" stroke-width="2"/><circle cx="200" cy="200" r="1.15" fill="#ff7242"/><g fill="#68807a" font-size="8" font-family="monospace"><text x="216" y="243">4</text><text x="219" y="283">6</text><text x="223" y="323">8</text><text x="142" y="358">ACOG • 4×32</text></g></svg></div>`;
  document.body.appendChild(scope);
  return scope;
}

export class WeaponSystem {
  constructor(camera, scene, audio, swarm, fx, P) {
    this.camera = camera; this.scene = scene; this.audio = audio; this.swarm = swarm; this.fx = fx; this.P = P;
    this.weapons = WEAPONS.map(w => ({ ...w, mag: w.capacity, cooldown: 0 }));
    this.models = WEAPONS.map(buildWeapon);
    this.index = 0; this.current = this.weapons[0];
    this.rig = new THREE.Group(); this.rig.name = 'first-person-weapons'; camera.add(this.rig);
    for (const model of this.models) this.rig.add(model.root);
    const light = new THREE.PointLight(0xc5e9ff, 1.9, 3, 2); light.position.set(-0.35, 0.5, 0.15); this.rig.add(light);
    this.colliders = []; this.held = false; this.queueT = 0; this.reloading = false; this.reloadT = 0; this.reloadDuration = 0;
    this.switchT = 0; this.switchDuration = 0.3; this.meleeT = 0; this.meleeCooldown = 0;
    this.recoil = 0; this.recoilVelocity = 0; this.lastShotT = -10; this.time = 0; this.flashT = 0;
    this.lastYaw = P.yaw; this.lastPitch = P.pitch; this.swayX = 0; this.swayY = 0;
    this.raycaster = new THREE.Raycaster(); this.origin = new THREE.Vector3(); this.direction = new THREE.Vector3();
    this.right = new THREE.Vector3(); this.up = new THREE.Vector3(); this.shotDirection = new THREE.Vector3();
    this.end = new THREE.Vector3(); this.muzzlePosition = new THREE.Vector3(); this.ejectPosition = new THREE.Vector3(); this.localHit = new THREE.Vector3();
    this.wallBox = new THREE.Box3(); this.wallHit = new THREE.Vector3();
    this.roots = []; this.intersections = []; this.enemyRoots = new Map();
    this.scope = createScope(); this.dot = document.getElementById('dot'); this.crosshair = document.getElementById('xlines');
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement) return;
      this.scope.style.display = 'none'; this.held = false; this.queueT = 0;
    });
    this.models[0].root.visible = true;
  }

  triggerDown() {
    this.audio.resume();
    if (!this.held) this.queueT = 0.2;
    this.held = true;
    if (this.reloading && this.current.id === 'shotgun' && this.current.mag > 0) this.reloading = false;
  }
  triggerUp() { this.held = false; }
  cycle(delta) { if (delta) this.select((this.index + Math.sign(delta) + this.weapons.length) % this.weapons.length); }
  select(index) {
    if (!Number.isInteger(index) || !this.weapons[index] || index === this.index || !this.P.alive) return;
    this.models[this.index].root.visible = false;
    this.index = index; this.current = this.weapons[index];
    this.models[index].root.visible = true;
    this.reloading = false; this.reloadT = 0; this.switchT = this.switchDuration;
    this.queueT = 0; this.held = false; this.flashT = 0; this.recoil = 0; this.recoilVelocity = 0;
    this.P.adsT = 0; this.scope.style.display = 'none'; this.audio.switchWeapon();
  }
  canAds() { return !this.reloading && this.switchT <= 0 && this.meleeT <= 0 && !this.P.sprint; }
  getSprintKickFov() { return Math.min(2.1, this.recoil * 18); }
  reload() {
    const w = this.current;
    if (this.reloading || this.switchT > 0 || !this.P.alive || w.mag >= w.capacity || w.reserve <= 0) return;
    this.reloading = true; this.reloadDuration = w.id === 'shotgun' ? 0.75 : w.reloadTime;
    this.reloadT = this.reloadDuration; this.queueT = 0; this.audio.reload(w.id);
  }
  resetAll() {
    for (let i = 0; i < this.weapons.length; i++) { this.weapons[i].mag = WEAPONS[i].capacity; this.weapons[i].reserve = WEAPONS[i].reserve; this.weapons[i].cooldown = 0; this.models[i].root.visible = i === 0; }
    this.index = 0; this.current = this.weapons[0]; this.held = false; this.queueT = 0;
    this.reloading = false; this.reloadT = 0; this.switchT = 0; this.meleeT = 0; this.meleeCooldown = 0;
    this.recoil = 0; this.recoilVelocity = 0; this.flashT = 0; this.lastShotT = -10;
    this.lastYaw = this.P.yaw; this.lastPitch = this.P.pitch; this.swayX = this.swayY = 0;
    this.scope.style.display = 'none';
  }

  _worldDistance(origin, direction, maxDistance) {
    this.raycaster.ray.set(origin, direction);
    let nearest = maxDistance;
    for (const c of this.colliders) {
      this.wallBox.min.set(c.x - c.hx, c.y ?? 0, c.z - c.hz);
      this.wallBox.max.set(c.x + c.hx, (c.y ?? 0) + c.height, c.z + c.hz);
      if (this.wallBox.containsPoint(origin)) return 0;
      if (this.raycaster.ray.intersectBox(this.wallBox, this.wallHit)) nearest = Math.min(nearest, origin.distanceTo(this.wallHit));
    }
    if (direction.y < -0.0001) nearest = Math.min(nearest, Math.max(0, -origin.y / direction.y));
    return nearest;
  }

  _collectEnemies() {
    this.roots.length = 0; this.enemyRoots.clear();
    for (const e of this.swarm.list) {
      if (e.dead || e.hp <= 0) continue;
      e.mesh.updateWorldMatrix(true, true);
      this.roots.push(e.mesh); this.enemyRoots.set(e.mesh, e);
    }
  }

  _hitRay(direction, maxDistance, damage, allowHeadshot = true) {
    const wallDistance = this._worldDistance(this.origin, direction, maxDistance);
    this.raycaster.near = 0; this.raycaster.far = wallDistance;
    this.intersections.length = 0;
    this.raycaster.intersectObjects(this.roots, true, this.intersections);
    let hit = null, enemy = null;
    for (const candidate of this.intersections) {
      let root = candidate.object;
      while (root && !this.enemyRoots.has(root)) root = root.parent;
      const e = this.enemyRoots.get(root);
      if (e && !e.dead && e.hp > 0 && candidate.distance < wallDistance) { hit = candidate; enemy = e; break; }
    }
    if (hit) {
      this.end.copy(hit.point);
      this.localHit.copy(hit.point); enemy.mesh.worldToLocal(this.localHit);
      const height = enemy.type === 'heavy' ? 2.18 : 1.62;
      const headshot = allowHeadshot && (enemy.type === 'drone' ? hit.object.name === 'core' : this.localHit.y > height || hit.object.name === 'head');
      const killed = this.swarm.hit(enemy, damage * (headshot ? 2 : 1), this.end, direction, headshot);
      this.audio.hit(!!killed);
      return true;
    }
    this.end.copy(this.origin).addScaledVector(direction, wallDistance);
    if (wallDistance < maxDistance) this.fx.spark(this.end, direction);
    return false;
  }

  _fire() {
    const w = this.current;
    if (w.mag <= 0) { this.audio.empty(); this.held = false; this.queueT = 0; this.reload(); return; }
    w.mag--; w.cooldown = w.interval; this.queueT = 0; this.lastShotT = this.time;
    const ads = this.P.adsT || 0;
    this.P.sprint = false;
    this.P.kickPitch += w.recoil * lerp(1, 0.64, ads);
    this.P.kickYaw += (Math.random() - 0.5) * w.recoil * 0.42;
    this.P.shake.y += w.id === 'shotgun' ? 0.018 : 0.006;
    this.recoilVelocity += w.id === 'shotgun' ? 2.4 : w.id === 'marksman' ? 1.85 : 0.95;
    this.flashT = 0.055;
    this.camera.getWorldPosition(this.origin);
    this.camera.getWorldDirection(this.direction);
    this.right.set(1, 0, 0).applyQuaternion(this.camera.quaternion);
    this.up.set(0, 1, 0).applyQuaternion(this.camera.quaternion);
    const model = this.models[this.index];
    model.muzzle.getWorldPosition(this.muzzlePosition);
    model.eject.getWorldPosition(this.ejectPosition);
    this._collectEnemies();
    const movement = Math.hypot(this.P.vel.x, this.P.vel.z);
    const spread = lerp(w.spread * (1 + Math.min(1, movement / 10) * 0.35), w.adsSpread, ads);
    for (let i = 0; i < w.pellets; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * spread;
      this.shotDirection.copy(this.direction).addScaledVector(this.right, Math.cos(angle) * radius).addScaledVector(this.up, Math.sin(angle) * radius).normalize();
      const falloff = w.id === 'shotgun' ? 100 : 180;
      this._hitRay(this.shotDirection, falloff, w.damage);
      if (w.pellets === 1 || i % 2 === 0) this.fx.tracer(this.muzzlePosition, this.end, w.id === 'marksman' ? 0xb4f6ff : 0xffd993);
    }
    this.fx.muzzle(this.muzzlePosition);
    this.fx.shell(this.ejectPosition, this.right, w.id === 'shotgun');
    this.audio.fire(w.id);
    this.onShot?.(w);
  }

  melee() {
    if (!this.P.alive || this.meleeCooldown > 0 || this.switchT > 0) return;
    this.reloading = false; this.meleeT = 0.38; this.meleeCooldown = 0.7; this.queueT = 0;
    this.camera.getWorldPosition(this.origin); this.camera.getWorldDirection(this.direction);
    this._collectEnemies(); this._hitRay(this.direction, 3.1, 95, false);
    this.fx.meleeSwipe(this.end); this.audio.melee(); this.P.kickPitch -= 0.018;
  }

  update(dt, t) {
    this.time = t;
    for (const w of this.weapons) w.cooldown = Math.max(0, w.cooldown - dt);
    this.switchT = Math.max(0, this.switchT - dt); this.meleeT = Math.max(0, this.meleeT - dt); this.meleeCooldown = Math.max(0, this.meleeCooldown - dt);
    const w = this.current;
    if (!this.P.alive) { this.held = false; this.queueT = 0; this.reloading = false; }
    if (this.reloading) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        const amount = Math.min(w.id === 'shotgun' ? 1 : w.capacity - w.mag, w.reserve);
        w.mag += amount; w.reserve -= amount;
        if (w.id === 'shotgun' && w.mag < w.capacity && w.reserve > 0) {
          this.reloadDuration = w.reloadTime; this.reloadT += this.reloadDuration; this.audio.reload('shell');
        } else { this.reloading = false; this.audio.reloadEnd(); }
      }
    }
    if (this.P.alive && !this.reloading && this.switchT <= 0 && this.meleeT <= 0 && w.cooldown <= 0 && (w.id === 'rifle' ? this.held || this.queueT > 0 : this.queueT > 0)) this._fire();
    this.queueT = Math.max(0, this.queueT - dt);
    this.recoilVelocity += (-this.recoil * 180 - this.recoilVelocity * 20) * dt;
    this.recoil = Math.max(-0.03, this.recoil + this.recoilVelocity * dt);
    this.flashT = Math.max(0, this.flashT - dt);

    const ads = this.P.adsT || 0;
    const hip = 1 - ads;
    const yawDelta = Math.atan2(Math.sin(this.P.yaw - this.lastYaw), Math.cos(this.P.yaw - this.lastYaw));
    const pitchDelta = this.P.pitch - this.lastPitch;
    this.lastYaw = this.P.yaw; this.lastPitch = this.P.pitch;
    this.swayX = lerp(this.swayX, clamp(yawDelta * 1.6, -0.07, 0.07), Math.min(1, dt * 12));
    this.swayY = lerp(this.swayY, clamp(pitchDelta * 1.6, -0.06, 0.06), Math.min(1, dt * 12));
    const model = this.models[this.index];
    const root = model.root;
    const moving = this.P.bobAmt || 0, bob = this.P.bobT || 0;
    const sprint = this.P.sprint && t - this.lastShotT > 0.2 ? hip : 0;
    const switchProgress = this.switchT / this.switchDuration;
    const reloadProgress = this.reloading ? 1 - clamp(this.reloadT / this.reloadDuration, 0, 1) : 0;
    const reloadPose = this.reloading ? Math.sin(Math.PI * Math.pow(reloadProgress, 0.55)) : 0;
    const meleePose = this.meleeT > 0 ? Math.sin((1 - this.meleeT / 0.38) * Math.PI) : 0;
    root.position.set(
      lerp(0.24, 0, ads) + Math.sin(bob) * 0.012 * moving * hip - this.swayX * hip + meleePose * 0.22,
      lerp(-0.22, -w.sightY, ads) + Math.abs(Math.cos(bob)) * 0.012 * moving * hip - this.swayY * hip - switchProgress * 0.4 - reloadPose * 0.15 - sprint * 0.085,
      lerp(-0.34, -0.21, ads) + this.recoil * 0.65 + sprint * 0.08 - meleePose * 0.32,
    );
    root.rotation.set(-this.recoil * 0.75 - switchProgress * 0.5 - reloadPose * 0.35 + sprint * 0.36 + meleePose * 0.25,
      -this.swayX * 0.7 * hip + sprint * 0.2 + meleePose * 0.4,
      -this.swayX * hip + Math.sin(bob) * 0.009 * moving * hip + reloadPose * 0.48 + sprint * 0.12 - meleePose * 0.45);
    model.magazine.position.y = -0.14 - (w.id !== 'shotgun' ? reloadPose * 0.28 : 0);
    model.magazine.rotation.x = reloadPose * 0.25;
    const pumpAge = t - this.lastShotT;
    const pumpKick = w.id === 'shotgun' && pumpAge > 0.16 && pumpAge < 0.56 ? Math.sin((pumpAge - 0.16) / 0.4 * Math.PI) * 0.12 : 0;
    model.pump.position.z = pumpKick;
    model.leftHand.position.set(reloadPose * 0.08, -reloadPose * 0.15, pumpKick + reloadPose * 0.22);
    model.leftHand.rotation.z = reloadPose * -0.3;
    model.flashMaterial.opacity = this.flashT > 0 ? 0.9 : 0;
    model.flash.rotation.z = Math.sin(t * 743) * 3;
    model.flash.scale.setScalar(w.id === 'shotgun' ? 1.8 : 1);
    const scoped = w.id === 'marksman' && ads > 0.74 && this.P.alive;
    this.scope.style.display = scoped ? 'block' : 'none';
    this.scope.style.opacity = String(clamp((ads - 0.74) / 0.2, 0, 1));
    root.visible = !(scoped && ads > 0.94);
    if (this.dot) this.dot.style.opacity = String((1 - ads) * 0.85);
    if (this.crosshair) { this.crosshair.style.opacity = String((1 - ads) * 0.38); this.crosshair.style.transform = `scale(${1 + this.recoil * 7 + moving * 0.15})`; }
    root.updateMatrixWorld(true);
  }
}
