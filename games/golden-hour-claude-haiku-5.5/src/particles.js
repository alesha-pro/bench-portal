// Effects: dust and mist puffs (point sprites), grinder sparks, blood, ejected shells, tracers, decals,
// physics debris for ragdolls and armour plates, and a small pool of flickering muzzle lights.
import * as THREE from 'three';
import { resolveSphere } from './collision.js';
import { rand, clamp, randomUnitVector } from './utils.js';

const MAX_PUFFS = 1400;
const MAX_SPARKS = 420;
const MAX_BLOOD = 360;
const MAX_SHELLS = 48;
const MAX_TRACERS = 48;
const MAX_HOLES = 220;
const MAX_BLOOD_DECALS = 160;
const MAX_DEBRIS = 90;

const _q = new THREE.Quaternion();
const _qa = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();
const AXIS_Z = new THREE.Vector3(0, 0, 1);
const UP = new THREE.Vector3(0, 1, 0);

function asTexture(t) {
  return t && t.isTexture ? t : t.map;
}

// ---- point-sprite puffs --------------------------------------------------------------------
const PUFF_VS = /* glsl */ `
attribute float size;
attribute vec4 color;
uniform float uScale;
varying vec4 vColor;
void main() {
  vColor = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = max(size * uScale / max(-mv.z, 0.05), 0.0);
  gl_Position = projectionMatrix * mv;
}
`;
const PUFF_FS = /* glsl */ `
uniform sampler2D map;
varying vec4 vColor;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  float a = vColor.a * t.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}
`;

class Puffs {
  constructor(scene, texture) {
    this.count = MAX_PUFFS;
    this.pos = new Float32Array(MAX_PUFFS * 3);
    this.col = new Float32Array(MAX_PUFFS * 4);
    this.size = new Float32Array(MAX_PUFFS);
    this.state = [];
    for (let i = 0; i < MAX_PUFFS; i++) {
      this.state.push({ x: 0, y: -10, z: 0, vx: 0, vy: 0, vz: 0, age: 1, life: 1, s0: 0, s1: 0, r: 0, g: 0, b: 0, a: 0, drag: 2, grav: 0, alive: false });
    }
    this.head = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 4));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.uniforms = {
      map: { value: texture },
      uScale: { value: 800 },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: PUFF_VS,
      fragmentShader: PUFF_FS,
      transparent: true,
      depthWrite: false,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.name = 'puffs';
    scene.add(this.points);
    this.geo = geo;
  }

  spawn(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, drag = 2.2, grav = 0.0) {
    const i = this.head;
    this.head = (this.head + 1) % MAX_PUFFS;
    const p = this.state[i];
    Object.assign(p, { x, y, z, vx, vy, vz, age: 0, life, s0, s1, r, g, b, a, drag, grav, alive: true });
    return p;
  }

  update(dt, wind) {
    for (let i = 0; i < MAX_PUFFS; i++) {
      const p = this.state[i];
      if (p.alive) {
        p.age += dt;
        if (p.age >= p.life) {
          p.alive = false;
        } else {
          // Drag pulls velocity toward the wind's drift speed, so light puffs get carried along.
          const k = Math.exp(-p.drag * dt);
          p.vx += (wind.x * 0.9 - p.vx) * (1 - k);
          p.vz += (wind.z * 0.9 - p.vz) * (1 - k);
          p.vy = p.vy * k - p.grav * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.z += p.vz * dt;
          if (p.y < 0.02) { p.y = 0.02; p.vy = 0; }
        }
      }
      const t = p.alive ? p.age / p.life : 1;
      const fade = p.alive ? (t < 0.15 ? t / 0.15 : Math.pow(1 - (t - 0.15) / 0.85, 1.4)) : 0;
      this.pos[i * 3] = p.x;
      this.pos[i * 3 + 1] = p.alive ? p.y : -100;
      this.pos[i * 3 + 2] = p.z;
      this.size[i] = p.alive ? p.s0 + (p.s1 - p.s0) * clamp(t, 0, 1) : 0;
      this.col[i * 4] = p.r;
      this.col[i * 4 + 1] = p.g;
      this.col[i * 4 + 2] = p.b;
      this.col[i * 4 + 3] = p.a * clamp(fade, 0, 1);
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true;
  }
}

// ---- lights for muzzle flashes ---------------------------------------------------------------
// A fixed set of point lights so the light count never changes (changing it recompiles shaders).
export class LightPool {
  constructor(scene, count = 3) {
    this.lights = [];
    for (let i = 0; i < count; i++) {
      const l = new THREE.PointLight(0xffb060, 0, 14, 1.7);
      l.castShadow = false;
      scene.add(l);
      this.lights.push({ light: l, power: 0, base: 0 });
    }
    this.next = 0;
  }

  flash(pos, power, color = 0xffb060) {
    const s = this.lights[this.next];
    this.next = (this.next + 1) % this.lights.length;
    s.light.position.copy(pos);
    s.light.color.set(color);
    s.power = Math.max(s.power, power);
  }

  update(dt) {
    for (const s of this.lights) {
      s.power *= Math.exp(-dt * 26);
      s.light.intensity = s.power;
    }
  }
}

export class Particles {
  constructor({ scene, textures, camera }) {
    this.scene = scene;
    this.camera = camera;
    this.tex = {
      soft: asTexture(textures.soft),
      flame: asTexture(textures.flame),
      hole: asTexture(textures.bulletHole),
      blood: asTexture(textures.bloodSplat),
      tracer: asTexture(textures.tracer),
    };
    this.puffs = new Puffs(scene, this.tex.soft);
    this.onImpactSound = null;
    this.onShellBounce = null;

    // Grinder sparks: thin additive streaks oriented along their velocity.
    const sparkGeo = new THREE.BoxGeometry(0.0045, 0.0045, 1);
    sparkGeo.translate(0, 0, 0.5);
    this.sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, depthWrite: false, toneMapped: false,
      blending: THREE.AdditiveBlending,
    });
    this.sparks = new THREE.InstancedMesh(sparkGeo, this.sparkMat, MAX_SPARKS);
    this.sparks.frustumCulled = false;
    this.sparks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.sparks);
    this.sparkState = Array.from({ length: MAX_SPARKS }, () => ({ alive: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, age: 0, life: 1, col: [1, 1, 1], len: 0.04 }));
    this.sparkHead = 0;
    for (let i = 0; i < MAX_SPARKS; i++) this.sparks.setColorAt(i, _c.setRGB(0, 0, 0));

    // Blood droplets: small wet spheres that fall, splash and leave decals.
    const dropGeo = new THREE.SphereGeometry(0.022, 5, 4);
    this.dropMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0 });
    this.drops = new THREE.InstancedMesh(dropGeo, this.dropMat, MAX_BLOOD);
    this.drops.frustumCulled = false;
    this.drops.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.drops.castShadow = false;
    scene.add(this.drops);
    this.dropState = Array.from({ length: MAX_BLOOD }, () => ({ alive: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, age: 0, life: 1 }));
    this.dropHead = 0;
    for (let i = 0; i < MAX_BLOOD; i++) this.drops.setColorAt(i, _c.setRGB(0, 0, 0));

    // Shells: brass casings that tumble, bounce and ring.
    const shellGeo = new THREE.CylinderGeometry(0.0048, 0.0048, 0.036, 8);
    this.shellMat = new THREE.MeshStandardMaterial({ color: 0xd9a85a, metalness: 1, roughness: 0.3, envMapIntensity: 1.4 });
    this.shells = new THREE.InstancedMesh(shellGeo, this.shellMat, MAX_SHELLS);
    this.shells.frustumCulled = false;
    this.shells.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.shells);
    this.shellState = Array.from({ length: MAX_SHELLS }, () => ({ alive: false, p: new THREE.Vector3(), v: new THREE.Vector3(), q: new THREE.Quaternion(), w: new THREE.Vector3(), bounces: 0, age: 0 }));
    this.shellHead = 0;

    // Tracers: hot additive streaks from the muzzle to the impact point.
    const tracerGeo = new THREE.BoxGeometry(0.013, 0.013, 1);
    this.tracerMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending });
    this.tracers = new THREE.InstancedMesh(tracerGeo, this.tracerMat, MAX_TRACERS);
    this.tracers.frustumCulled = false;
    this.tracers.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.tracers);
    this.tracerState = Array.from({ length: MAX_TRACERS }, () => ({ alive: false, a: new THREE.Vector3(), b: new THREE.Vector3(), age: 0, life: 0.1, col: [1, 1, 1] }));
    this.tracerHead = 0;
    for (let i = 0; i < MAX_TRACERS; i++) this.tracers.setColorAt(i, _c.setRGB(0, 0, 0));

    // Decals on floors and walls: bullet holes and blood splats.
    const decalGeo = new THREE.PlaneGeometry(1, 1);
    this.holeMat = new THREE.MeshBasicMaterial({ map: this.tex.hole, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.holes = new THREE.InstancedMesh(decalGeo, this.holeMat, MAX_HOLES);
    this.holes.frustumCulled = false;
    scene.add(this.holes);
    this.holeHead = 0;
    this.bloodMat = new THREE.MeshStandardMaterial({
      map: this.tex.blood, color: 0xffffff, roughness: 0.14, metalness: 0,
      transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
      envMapIntensity: 1.2,
    });
    this.bloodDecals = new THREE.InstancedMesh(decalGeo, this.bloodMat, MAX_BLOOD_DECALS);
    this.bloodDecals.frustumCulled = false;
    scene.add(this.bloodDecals);
    this.bloodDecalHead = 0;
    for (let i = 0; i < MAX_HOLES; i++) this.holes.setColorAt(i, _c.setRGB(0, 0, 0));
    for (let i = 0; i < MAX_BLOOD_DECALS; i++) this.bloodDecals.setColorAt(i, _c.setRGB(0, 0, 0));
    // Unused instance slots must start hidden: InstancedMesh defaults to identity matrices.
    _m.makeScale(0, 0, 0);
    for (const mesh of [this.holes, this.bloodDecals, this.sparks, this.drops, this.shells, this.tracers]) {
      for (let i = 0; i < mesh.count; i++) mesh.setMatrixAt(i, _m);
      mesh.instanceMatrix.needsUpdate = true;
    }

    // Physics debris (ragdoll parts and armour plates). These are real meshes, so the list is capped.
    this.debris = [];
  }

  setView(pixelHeight, fovDeg) {
    this.puffs.uniforms.uScale.value = pixelHeight / (2 * Math.tan(THREE.MathUtils.degToRad(fovDeg) / 2));
  }

  // ---- impacts ------------------------------------------------------------------------------
  // Surface reactions: dust on concrete, sparks on metal, splinters on wood, white dust on drywall, glints on glass.
  impact(p, n, material, power = 1) {
    const x = p.x, y = p.y, z = p.z;
    const nx = n.x, ny = n.y, nz = n.z;
    const kind = material;
    const hole = kind !== 'glass' && kind !== 'plastic';
    if (kind === 'metal' || kind === 'steel' || kind === 'rebar') {
      this.sparkBurst(x, y, z, nx, ny, nz, Math.round(14 + 12 * power), [3.2, 1.7, 0.6], 4.2 * power);
      for (let i = 0; i < 2; i++) this.puff(x, y, z, nx * 0.5, ny * 0.5, nz * 0.5, 0.25, 0.04, 0.22, 0.42, 0.42, 0.42, 0.25, 4);
    } else if (kind === 'glass') {
      this.sparkBurst(x, y, z, nx, ny, nz, Math.round(10 + 8 * power), [2.4, 2.8, 3.2], 3.4 * power);
    } else if (kind === 'wood') {
      for (let i = 0; i < 4; i++) this.puff(x, y, z, nx * 1.5 + rand(-1, 1), ny * 1.5 + rand(0, 1.5), nz * 1.5 + rand(-1, 1), 0.5, 0.02, 0.05, 0.36, 0.25, 0.14, 0.9, 1.2, 9);
      this.puff(x, y, z, nx * 0.5, ny * 0.5, nz * 0.5, 0.5, 0.25, 0.7, 0.5, 0.42, 0.34, 0.16, 3);
    } else if (kind === 'drywall') {
      for (let i = 0; i < 5; i++) this.puff(x, y, z, nx * 1.2 + rand(-0.8, 0.8), ny * 1.2 + rand(0, 1.2), nz * 1.2 + rand(-0.8, 0.8), 0.9, 0.2, 0.7, 0.9, 0.88, 0.84, 0.32, 1.6, 0.8);
    } else {
      // concrete / dirt / floor: dust and crumbs
      for (let i = 0; i < 6; i++) this.puff(x, y, z, nx * 1.1 + rand(-1, 1), ny * 1.1 + rand(0, 1.4), nz * 1.1 + rand(-1, 1), rand(0.6, 1.1), 0.12, 0.42, 0.66, 0.62, 0.56, 0.36, 2.0, 1.4);
    }
    if (hole) this.addHole(x, y, z, nx, ny, nz, kind === 'metal' || kind === 'steel' ? 0.05 : 0.08);
    if (this.onImpactSound) this.onImpactSound(kind, x, z, power);
  }

  puff(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, drag = 2.2, grav = 0.0) {
    this.puffs.spawn(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, drag, grav);
  }

  // Sparks spray in a cone around the surface normal; `color` is HDR so bloom catches them.
  sparkBurst(x, y, z, nx, ny, nz, count, color = [3.2, 1.7, 0.6], speed = 4, spread = 1.0) {
    for (let i = 0; i < count; i++) {
      const d = randomUnitVector(_v);
      const dx = nx + d.x * spread;
      const dy = ny + d.y * spread;
      const dz = nz + d.z * spread;
      const sp = speed * (0.45 + Math.random() * 0.9);
      this.addSpark(x, y, z, dx * sp, dy * sp + 0.6, dz * sp, 0.25 + Math.random() * 0.5, color);
    }
  }

  addSpark(x, y, z, vx, vy, vz, life, color) {
    const i = this.sparkHead;
    this.sparkHead = (this.sparkHead + 1) % MAX_SPARKS;
    const s = this.sparkState[i];
    Object.assign(s, { alive: true, x, y, z, vx, vy, vz, age: 0, life, col: color, len: 0.03 + Math.hypot(vx, vy, vz) * 0.012 });
  }

  // Grinder sparks streaming from a source with a fixed direction, plus wind.
  emitSparks(pos, dir, count, wind) {
    for (let i = 0; i < count; i++) {
      const sp = 2.2 + Math.random() * 3.6;
      const jitter = 0.35;
      this.addSpark(
        pos.x, pos.y, pos.z,
        dir.x * sp + (Math.random() - 0.5) * jitter + wind.x * 0.6,
        dir.y * sp + Math.random() * 0.9,
        dir.z * sp + (Math.random() - 0.5) * jitter + wind.z * 0.6,
        0.5 + Math.random() * 0.9,
        [3.4, 1.8 + Math.random() * 0.6, 0.55]
      );
    }
  }

  // ---- blood --------------------------------------------------------------------------------
  bloodSpray(x, y, z, dir, amount = 1, head = false) {
    const drops = Math.round((head ? 40 : 14) * amount);
    for (let i = 0; i < drops; i++) {
      const d = randomUnitVector(_v);
      const sp = (head ? 5.5 : 3.6) * (0.4 + Math.random() * 1.1);
      const vx = dir.x * sp + d.x * sp * 0.6;
      const vy = Math.abs(dir.y) * sp * 0.3 + d.y * sp * 0.5 + 1.2;
      const vz = dir.z * sp + d.z * sp * 0.6;
      this.addDrop(x, y, z, vx, vy, vz, 1.6 + Math.random() * 0.8);
    }
    const mists = head ? 7 : 3;
    for (let i = 0; i < mists; i++) {
      const d = randomUnitVector(_v2);
      this.puff(x, y, z, dir.x * 1.6 + d.x * 1.4, 0.6 + d.y * 0.5, dir.z * 1.6 + d.z * 1.4,
        0.5 + Math.random() * 0.4, head ? 0.25 : 0.14, head ? 0.9 : 0.5, 0.44 + Math.random() * 0.12, 0.02, 0.02, head ? 0.6 : 0.45, 2.4, 0.8);
    }
  }

  addDrop(x, y, z, vx, vy, vz, life) {
    const i = this.dropHead;
    this.dropHead = (this.dropHead + 1) % MAX_BLOOD;
    Object.assign(this.dropState[i], { alive: true, x, y, z, vx, vy, vz, age: 0, life });
    _c.setRGB(0.45 + Math.random() * 0.2, 0.0, 0.01);
    this.drops.setColorAt(i, _c);
  }

  // ---- decals ----------------------------------------------------------------------------------
  // Decals sit on the surface: orientation from the normal, random roll, slight offset to avoid z-fight.
  placeDecal(mesh, head, cap, x, y, z, nx, ny, nz, size, tint) {
    _v.set(nx, ny, nz).normalize();
    _q.setFromUnitVectors(AXIS_Z, _v);
    _qa.setFromAxisAngle(AXIS_Z, Math.random() * Math.PI * 2);
    _q.multiply(_qa);
    _m.compose(_v2.set(x + nx * 0.004, y + ny * 0.004, z + nz * 0.004), _q, _s.set(size, size, 1));
    mesh.setMatrixAt(head, _m);
    if (tint) mesh.setColorAt(head, _c.setRGB(tint[0], tint[1], tint[2]));
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    return (head + 1) % cap;
  }

  addHole(x, y, z, nx, ny, nz, size) {
    this.holeHead = this.placeDecal(this.holes, this.holeHead, MAX_HOLES, x, y, z, nx, ny, nz, size * (0.8 + Math.random() * 0.4), null);
  }

  addBloodDecal(x, z, size) {
    this.bloodDecalHead = this.placeDecal(this.bloodDecals, this.bloodDecalHead, MAX_BLOOD_DECALS, x, 0, z, 0, 1, 0, size * (0.8 + Math.random() * 0.5), [0.85 + Math.random() * 0.15, 0.85, 0.85]);
  }

  // ---- shells -----------------------------------------------------------------------------------
  ejectShell(p, v, w) {
    const s = this.shellState[this.shellHead];
    this.shellHead = (this.shellHead + 1) % MAX_SHELLS;
    s.alive = true;
    s.p.copy(p);
    s.v.copy(v);
    s.w.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30).add(w);
    s.q.setFromAxisAngle(UP, Math.random() * Math.PI * 2);
    s.bounces = 0;
    s.age = 0;
  }

  // ---- tracers ------------------------------------------------------------------------------------
  addTracer(a, b, life = 0.09, color = [2.6, 1.9, 1.0]) {
    const t = this.tracerState[this.tracerHead];
    this.tracerHead = (this.tracerHead + 1) % MAX_TRACERS;
    t.alive = true;
    t.a.copy(a);
    t.b.copy(b);
    t.age = 0;
    t.life = life;
    t.col = color;
  }

  // ---- debris --------------------------------------------------------------------------------------
  // Hands a mesh over to the physics pool. The mesh must not be parented anywhere else.
  addDebris(mesh, vel, angVel, radius, life = 9, onLand = null) {
    this.scene.attach(mesh);
    if (this.debris.length >= MAX_DEBRIS) {
      const old = this.debris.shift();
      this.scene.remove(old.mesh);
      old.mesh.material.dispose();
    }
    this.debris.push({ mesh, vel: vel.clone(), w: angVel.clone(), radius, age: 0, life, touching: false, onLand });
  }

  // ---- per frame -------------------------------------------------------------------------------------
  update(dt, wind) {
    // Sparks
    for (let i = 0; i < MAX_SPARKS; i++) {
      const s = this.sparkState[i];
      if (!s.alive) {
        _m.makeScale(0, 0, 0);
        this.sparks.setMatrixAt(i, _m);
        continue;
      }
      s.age += dt;
      if (s.age >= s.life) { s.alive = false; _m.makeScale(0, 0, 0); this.sparks.setMatrixAt(i, _m); continue; }
      s.vy -= 9.8 * dt;
      const k = Math.exp(-0.9 * dt);
      s.vx = s.vx * k + wind.x * 1.4 * dt;
      s.vz = s.vz * k + wind.z * 1.4 * dt;
      s.vy *= k;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.z += s.vz * dt;
      if (s.y < 0.01) { s.y = 0.01; s.vy = -s.vy * 0.25; s.vx *= 0.6; s.vz *= 0.6; }
      const speed = Math.hypot(s.vx, s.vy, s.vz) || 1e-4;
      _v.set(s.vx / speed, s.vy / speed, s.vz / speed);
      _q.setFromUnitVectors(AXIS_Z, _v);
      const fade = 1 - s.age / s.life;
      const len = s.len * (0.5 + 0.5 * fade);
      _m.compose(_v2.set(s.x, s.y, s.z), _q, _s.set(1, 1, len));
      this.sparks.setMatrixAt(i, _m);
      const f = Math.max(fade, 0);
      this.sparks.setColorAt(i, _c.setRGB(s.col[0] * f, s.col[1] * f, s.col[2] * f));
    }
    this.sparks.instanceMatrix.needsUpdate = true;
    if (this.sparks.instanceColor) this.sparks.instanceColor.needsUpdate = true;

    // Blood droplets
    for (let i = 0; i < MAX_BLOOD; i++) {
      const d = this.dropState[i];
      if (!d.alive) { _m.makeScale(0, 0, 0); this.drops.setMatrixAt(i, _m); continue; }
      d.age += dt;
      if (d.age >= d.life) { d.alive = false; _m.makeScale(0, 0, 0); this.drops.setMatrixAt(i, _m); continue; }
      d.vy -= 16 * dt;
      const k = Math.exp(-0.5 * dt);
      d.vx *= k; d.vz *= k;
      d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt;
      if (d.y < 0.012) {
        if (Math.random() < 0.55) this.addBloodDecal(d.x, d.z, 0.16 + Math.random() * 0.22);
        d.alive = false;
        _m.makeScale(0, 0, 0);
        this.drops.setMatrixAt(i, _m);
        continue;
      }
      _m.makeTranslation(d.x, d.y, d.z);
      this.drops.setMatrixAt(i, _m);
    }
    this.drops.instanceMatrix.needsUpdate = true;
    if (this.drops.instanceColor) this.drops.instanceColor.needsUpdate = true;

    // Shells
    for (let i = 0; i < MAX_SHELLS; i++) {
      const s = this.shellState[i];
      if (!s.alive) { _m.makeScale(0, 0, 0); this.shells.setMatrixAt(i, _m); continue; }
      s.age += dt;
      if (s.age > 7) { s.alive = false; continue; }
      s.v.y -= 9.8 * dt;
      s.v.multiplyScalar(Math.exp(-0.12 * dt));
      s.p.addScaledVector(s.v, dt);
      const wlen = s.w.length() * dt;
      if (wlen > 1e-6) {
        _qa.setFromAxisAngle(_v.copy(s.w).normalize(), wlen);
        s.q.premultiply(_qa);
      }
      s.w.multiplyScalar(Math.exp(-1.8 * dt));
      const before = s.v.y;
      const hit = resolveSphere(s.p, s.v, 0.005, 0.32, 0.7);
      if (hit && before < -1.2 && s.bounces < 3) {
        s.bounces++;
        s.w.multiplyScalar(0.6);
        if (this.onShellBounce) this.onShellBounce(s.p.x, s.p.y, s.p.z, Math.min(1, -before / 6));
      }
      _m.compose(s.p, s.q, _v.set(1, 1, 1));
      this.shells.setMatrixAt(i, _m);
    }
    this.shells.instanceMatrix.needsUpdate = true;

    // Tracers
    for (let i = 0; i < MAX_TRACERS; i++) {
      const tr = this.tracerState[i];
      if (!tr.alive) { _m.makeScale(0, 0, 0); this.tracers.setMatrixAt(i, _m); this.tracers.setColorAt(i, _c.setRGB(0, 0, 0)); continue; }
      tr.age += dt;
      if (tr.age >= tr.life) { tr.alive = false; _m.makeScale(0, 0, 0); this.tracers.setMatrixAt(i, _m); continue; }
      _v.subVectors(tr.b, tr.a);
      const len = _v.length();
      _v.multiplyScalar(1 / Math.max(len, 1e-4));
      _q.setFromUnitVectors(AXIS_Z, _v);
      const f = 1 - tr.age / tr.life;
      _v2.addVectors(tr.a, tr.b).multiplyScalar(0.5);
      _m.compose(_v2, _q, _s.set(f * 0.9 + 0.1, f * 0.9 + 0.1, Math.max(len, 0.05)));
      this.tracers.setMatrixAt(i, _m);
      this.tracers.setColorAt(i, _c.setRGB(tr.col[0] * f, tr.col[1] * f, tr.col[2] * f));
    }
    this.tracers.instanceMatrix.needsUpdate = true;
    if (this.tracers.instanceColor) this.tracers.instanceColor.needsUpdate = true;

    // Debris (ragdolls and plates)
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.age += dt;
      const m = d.mesh;
      if (d.age > d.life) {
        this.scene.remove(m);
        m.material.dispose();
        this.debris.splice(i, 1);
        continue;
      }
      d.vel.y -= 18 * dt;
      m.position.addScaledVector(d.vel, dt);
      const wlen = d.w.length() * dt;
      if (wlen > 1e-6) {
        _qa.setFromAxisAngle(_v.copy(d.w).normalize(), wlen);
        m.quaternion.premultiply(_qa);
      }
      d.w.multiplyScalar(Math.exp(-0.6 * dt));
      const impactSpeed = -d.vel.y;
      const hit = resolveSphere(m.position, d.vel, d.radius, 0.28, 0.6);
      if (hit) {
        d.w.multiplyScalar(0.8);
        // Call back once per touchdown, only for real impacts (not resting contact).
        if (!d.touching && impactSpeed > 1.2 && d.onLand) d.onLand(m.position, impactSpeed);
        d.touching = true;
      } else {
        d.touching = false;
      }
      const fadeStart = d.life - 1.2;
      if (d.age > fadeStart) m.scale.setScalar(Math.max(0.001, 1 - (d.age - fadeStart) / 1.2));
    }

    this.puffs.update(dt, wind);
  }
}
