// Small math and timing helpers shared by every system.
import * as THREE from 'three';

export const TAU = Math.PI * 2;

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const saturate = (x) => clamp(x, 0, 1);
export const rand = (a, b) => a + Math.random() * (b - a);
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];

export function smoothstep(a, b, x) {
  const t = saturate((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

// Frame-rate independent approach of `a` toward `b`.
export function damp(a, b, lambda, dt) {
  return a + (b - a) * (1 - Math.exp(-lambda * dt));
}

export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export const easeInCubic = (t) => t * t * t;
export const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Damped spring with semi-implicit Euler. Sub-steps keep it stable on slow frames.
export class Spring {
  constructor(stiffness = 120, damping = 14) {
    this.k = stiffness;
    this.c = damping;
    this.x = 0;
    this.v = 0;
    this.target = 0;
  }

  update(dt) {
    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      const f = (this.target - this.x) * this.k - this.v * this.c;
      this.v += f * h;
      this.x += this.v * h;
    }
    return this.x;
  }

  kick(impulse) {
    this.v += impulse;
  }

  reset(x = 0) {
    this.x = x;
    this.v = 0;
    this.target = x;
  }
}

// Stereo pan (-1 left .. 1 right) of a world position relative to the camera.
const _toPos = new THREE.Vector3();
const _right = new THREE.Vector3();
export function panFromWorld(camera, x, z) {
  _toPos.set(x - camera.position.x, 0, z - camera.position.z);
  if (_toPos.lengthSq() < 1e-4) return 0;
  _toPos.normalize();
  _right.set(1, 0, 0).applyQuaternion(camera.quaternion);
  _right.y = 0;
  _right.normalize();
  return clamp(_toPos.dot(_right) * 0.9, -1, 1);
}

// Unit vector from a yaw angle (rotation around +Y). Forward at yaw 0 is -Z.
export function yawToDir(yaw, out = new THREE.Vector3()) {
  return out.set(-Math.sin(yaw), 0, -Math.cos(yaw));
}

export function yawToRight(yaw, out = new THREE.Vector3()) {
  return out.set(Math.cos(yaw), 0, -Math.sin(yaw));
}

export function randomUnitVector(out = new THREE.Vector3()) {
  const u = Math.random() * 2 - 1;
  const a = Math.random() * TAU;
  const s = Math.sqrt(1 - u * u);
  return out.set(s * Math.cos(a), u, s * Math.sin(a));
}

// Lightweight seeded random for repeatable layout decisions.
export function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
