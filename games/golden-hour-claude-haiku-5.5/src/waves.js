// Wave director: escalating compositions, spawn selection, flanking when the player camps, and the
// adrenaline meter that feeds the music. Waves are separated by a short break where the music drops.
import * as THREE from 'three';
import { CFG } from './config.js';
import { clamp, rand } from './utils.js';

const W = CFG.waves;

export class WaveDirector {
  constructor({ enemies, world, player, hud, hooks }) {
    this.enemies = enemies;
    this.world = world;
    this.player = player;
    this.hud = hud;
    this.hooks = hooks;
    this.reset();
  }

  reset() {
    this.wave = 0;
    this.phase = 'idle';
    this.timer = 0;
    this.toSpawn = 0;
    this.spawnTimer = 0;
    this.kills = 0;
    this.headshots = 0;
    this.score = 0;
    this.combo = 0;
    this.comboTimer = 0;
    this.adrenaline = 0;
    this.flanking = false;
    this.flankCheckT = 0;
  }

  start() {
    this.reset();
    this.phase = 'intro';
    this.timer = W.introTime;
    this.hud.banner('GOLDEN HOUR', 'HOLD THE ROOF');
  }

  get total() {
    return this.wave === 0 ? 0 : Math.min(W.maxCount, W.firstCount + W.perWave * (this.wave - 1));
  }

  get maxAlive() {
    return Math.min(W.maxAliveCap, W.maxAliveBase + this.wave);
  }

  get spawnGap() {
    return Math.max(W.spawnGapMin, W.spawnGapStart - 0.085 * this.wave);
  }

  // Music intensity 0..1: calm between waves, climbing with the crowd and the adrenaline.
  get musicIntensity() {
    if (this.phase === 'intro' || this.phase === 'break' || this.phase === 'idle') return 0.1;
    const crowd = this.enemies.aliveCount / Math.max(1, this.maxAlive);
    return clamp(0.22 + 0.42 * crowd + 0.3 * (this.adrenaline / 100) + this.wave * 0.012, 0, 1);
  }

  update(dt) {
    this.adrenaline = Math.max(0, this.adrenaline - dt * 5);
    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) this.combo = 0;
    }
    if (this.phase === 'intro' || this.phase === 'break') {
      this.timer -= dt;
      if (this.timer <= 0) this.beginWave();
    } else if (this.phase === 'fighting') {
      this.spawnTimer -= dt;
      if (this.toSpawn > 0 && this.spawnTimer <= 0 && this.enemies.aliveCount < this.maxAlive) {
        this.spawnOne();
        this.spawnTimer = this.spawnGap * rand(0.8, 1.2);
      }
      if (this.toSpawn === 0 && this.enemies.aliveCount === 0) this.waveCleared();
    }
    this.updateFlank(dt);
    this.hud.setWave(this.wave, this.toSpawn + this.enemies.aliveCount, this.phase);
    this.hud.setRush(this.adrenaline / 100);
  }

  beginWave() {
    this.wave++;
    this.toSpawn = this.total;
    this.spawnTimer = 0.4;
    this.phase = 'fighting';
    this.hud.banner(`WAVE ${this.wave}`, this.wave === 1 ? 'Rushers incoming' : `${this.total} hostiles`, 2200);
    if (this.hooks.onWaveStart) this.hooks.onWaveStart(this.wave);
  }

  waveCleared() {
    this.phase = 'break';
    this.timer = W.breakTime;
    this.score += 500 * this.wave;
    this.hud.banner(`WAVE ${this.wave} CLEARED`, `Resupply in ${Math.round(W.breakTime)} seconds. Get behind cover.`, 3600);
    if (this.hooks.onWaveClear) this.hooks.onWaveClear(this.wave);
  }

  chooseType() {
    const w = this.wave;
    const weights = [{ type: 'rusher', weight: 1.0 }];
    if (w >= W.gunnerFromWave) weights.push({ type: 'gunner', weight: 0.55 + 0.12 * w });
    if (w >= W.heavyFromWave) weights.push({ type: 'heavy', weight: 0.2 + 0.06 * (w - W.heavyFromWave) });
    const sum = weights.reduce((a, b) => a + b.weight, 0);
    let r = Math.random() * sum;
    for (const item of weights) {
      r -= item.weight;
      if (r <= 0) return item.type;
    }
    return 'rusher';
  }

  chooseSpawn() {
    const p = this.player.pos;
    const candidates = this.world.spawnPoints.filter((s) => Math.hypot(s.x - p.x, s.z - p.z) >= 18);
    const pool = candidates.length ? candidates : this.world.spawnPoints;
    const s = pool[(Math.random() * pool.length) | 0];
    return s.clone();
  }

  spawnOne() {
    const type = this.chooseType();
    const pos = this.chooseSpawn();
    this.enemies.spawn(type, pos, this.player);
    this.toSpawn--;
  }

  // Player kills, adrenaline and combos. Called from the main loop when an enemy dies.
  registerKill(enemy, headshot) {
    this.kills++;
    if (headshot) this.headshots++;
    this.combo++;
    this.comboTimer = 4.0;
    const base = CFG.enemies[enemy.type].score;
    const bonus = headshot ? 50 : 0;
    const mult = 1 + Math.min(this.combo, 10) * 0.1;
    const pts = Math.round((base + bonus) * mult);
    this.score += pts;
    this.adrenaline = Math.min(100, this.adrenaline + (enemy.type === 'heavy' ? 22 : 14) + (headshot ? 6 : 0));
    return pts;
  }

  // Campers get flanked: half the enemies pick a point to the side of the player and rush it.
  updateFlank(dt) {
    const p = this.player;
    if (p.stillTime > W.flankAfter && !this.flanking && this.enemies.aliveCount > 0) {
      this.flanking = true;
      const side = Math.random() < 0.5 ? -1 : 1;
      for (const e of this.enemies.all) {
        if (!e.alive || e.spawnT > 0 || Math.random() > 0.55) continue;
        const r = p.right;
        const f = p.forward;
        const s = side * (Math.random() < 0.25 ? -1 : 1);
        const d = rand(9, 12) * s;
        const tx = clamp(p.pos.x + r.x * d + f.x * rand(-4, 4), -CFG.player.arena + 1, CFG.player.arena - 1);
        const tz = clamp(p.pos.z + r.z * d + f.z * rand(-4, 4), -CFG.player.arena + 1, CFG.player.arena - 1);
        e.flankTarget = new THREE.Vector3(tx, 0, tz);
      }
    } else if (p.stillTime < 0.2 && this.flanking) {
      this.flanking = false;
      for (const e of this.enemies.all) e.flankTarget = null;
    }
  }
}
