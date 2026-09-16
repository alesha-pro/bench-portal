import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.particles = [];
    this.beams = [];
    this.debris = [];
    this.cursor = 0;
    this.beamCursor = 0;
    this.delta = new THREE.Vector3();
    this.position = new THREE.Vector3();
    this.quaternion = new THREE.Quaternion();
    this.scale = new THREE.Vector3();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < 180; i++) {
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, toneMapped: false });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false; mesh.frustumCulled = false;
      scene.add(mesh);
      this.particles.push({ mesh, velocity: new THREE.Vector3(), life: 0, maxLife: 1, gravity: 0, spin: 0, bounce: false });
    }
    const beamGeometry = new THREE.CylinderGeometry(1, 1, 1, 5, 1, true);
    for (let i = 0; i < 36; i++) {
      const mesh = new THREE.Mesh(beamGeometry, new THREE.MeshBasicMaterial({ color: 0xffd784, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
      mesh.visible = false; mesh.frustumCulled = false;
      scene.add(mesh);
      this.beams.push({ mesh, life: 0, maxLife: 0.08 });
    }
  }

  _particle(point, color, size, life, speed, gravity = 9) {
    const p = this.particles[this.cursor++ % this.particles.length];
    p.mesh.visible = true;
    p.mesh.position.copy(point);
    p.mesh.scale.setScalar(size);
    p.mesh.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    p.mesh.material.color.set(color); p.mesh.material.opacity = 1;
    p.life = p.maxLife = life; p.gravity = gravity; p.spin = 6 + Math.random() * 10; p.bounce = false;
    p.velocity.set((Math.random() - 0.5) * speed, (Math.random() * 0.8 + 0.2) * speed, (Math.random() - 0.5) * speed);
    return p;
  }

  spark(point, dir) {
    for (let i = 0; i < 8; i++) {
      const p = this._particle(point, i % 3 ? 0xffb942 : 0xeaffff, 0.025 + Math.random() * 0.035, 0.13 + Math.random() * 0.22, 5);
      if (dir) p.velocity.addScaledVector(dir, -1.3);
      p.mesh.scale.y *= 2.5;
    }
  }

  explode(point, scale = 1, color = 0xff6633) {
    for (let i = 0; i < Math.min(36, Math.ceil(20 * scale)); i++) {
      this._particle(point, i % 4 ? color : 0xffecc6, (0.05 + Math.random() * 0.1) * scale, 0.3 + Math.random() * 0.6, 7 * scale, 12);
    }
    this._particle(point, color, 0.65 * scale, 0.08, 0, 0);
  }

  tracer(from, to, color = 0xffd083, duration = 0.055, width = 0.014) {
    this.delta.subVectors(to, from);
    const length = this.delta.length();
    if (length < 0.01) return;
    const b = this.beams[this.beamCursor++ % this.beams.length];
    b.mesh.position.copy(from).addScaledVector(this.delta, 0.5);
    b.mesh.quaternion.setFromUnitVectors(UP, this.delta.multiplyScalar(1 / length));
    b.mesh.scale.set(width, length, width);
    b.mesh.material.color.set(color); b.mesh.material.opacity = 0.9;
    b.life = b.maxLife = duration; b.mesh.visible = true;
  }

  muzzle(point) {
    const p = this._particle(point, 0xffeeac, 0.1 + Math.random() * 0.06, 0.038, 0, 0);
    p.mesh.scale.z *= 2.8;
    p.mesh.quaternion.copy(this.camera.quaternion);
  }

  shell(point, direction, shotgun = false) {
    const p = this._particle(point, shotgun ? 0xe65d37 : 0xc5a665, 0.028, 1.5, 0, 9.8);
    p.mesh.scale.set(0.025, 0.025, shotgun ? 0.085 : 0.065);
    p.velocity.copy(direction).multiplyScalar(2.8 + Math.random()).y += 1.6;
    p.bounce = true;
  }

  plasmaBolt(from, to) { this.tracer(from, to, 0x46a9ff, 0.2, 0.055); }
  meleeSwipe(point) {
    for (let i = 0; i < 6; i++) this._particle(point, 0xff9662, 0.035, 0.12, 2, 0);
  }

  addDebris(mesh, dir) {
    // Copy world-space pieces into the bounded particle pool, never dispose shared enemy geometry.
    mesh.updateWorldMatrix(true, false);
    mesh.getWorldPosition(this.position);
    mesh.getWorldQuaternion(this.quaternion);
    mesh.getWorldScale(this.scale);
    const source = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
    const p = this._particle(this.position, source?.color || 0x72373e, 0.16, 1.8 + Math.random() * 0.6, 5, 12);
    p.mesh.quaternion.copy(this.quaternion);
    p.mesh.scale.set(0.14 * this.scale.x, 0.2 * this.scale.y, 0.18 * this.scale.z);
    if (dir) p.velocity.addScaledVector(dir, 4);
    p.bounce = true;
  }

  update(dt) {
    for (const p of this.particles) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.mesh.visible = false; continue; }
      p.velocity.y -= p.gravity * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);
      p.mesh.rotation.x += dt * p.spin; p.mesh.rotation.z += dt * p.spin * 0.7;
      if (p.bounce && p.mesh.position.y < 0.04) {
        p.mesh.position.y = 0.04; p.velocity.y = Math.abs(p.velocity.y) * 0.3;
        p.velocity.x *= 0.6; p.velocity.z *= 0.6; p.spin *= 0.6;
      }
      p.mesh.material.opacity = Math.min(1, p.life / Math.min(0.3, p.maxLife));
    }
    for (const b of this.beams) {
      if (b.life <= 0) continue;
      b.life -= dt;
      b.mesh.visible = b.life > 0;
      b.mesh.material.opacity = Math.max(0, b.life / b.maxLife);
    }
  }
}
