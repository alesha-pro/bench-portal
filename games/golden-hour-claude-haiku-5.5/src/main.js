// GOLDEN HOUR: bootstrap, main loop, and the glue between systems. Systems talk through events and hooks;
// this file routes them. Game time is split: the player, weapon and HUD run on real time, the world (enemies,
// waves, particles) runs on slowed time during the slide-aim flourish.
import * as THREE from 'three';
import { CFG } from './config.js';
import { input } from './input.js';
import { hud } from './hud.js';
import { audio } from './audio.js';
import { createTextures } from './textures.js';
import { createSky, createCity, SUN_DIR } from './sky.js';
import { buildWorld, CAST_LAYER, SPAWN_POINT } from './world.js';
import { PostFX } from './postfx.js';
import { Particles, LightPool } from './particles.js';
import { Weapon } from './weapon.js';
import { Player } from './player.js';
import { Enemies } from './enemies.js';
import { Combat } from './combat.js';
import { WaveDirector } from './waves.js';
import { clamp, lerp, damp, smoothstep, panFromWorld, rand } from './utils.js';

const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(new THREE.Color(0.85, 0.5, 0.32), 0.0009);
const camera = new THREE.PerspectiveCamera(CFG.view.fov, 1, CFG.view.near, CFG.view.far);
const gunScene = new THREE.Scene();
const gunCamera = new THREE.PerspectiveCamera(CFG.view.fov, 1, 0.01, 10);

// Lights. The sun is the only shadow caster; the fill is cool so shadows read teal against warm highlights.
const sun = new THREE.DirectionalLight(0xffc27a, 3.4);
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xffd6a8, 0x2c2430, 0.55));
const fill = new THREE.DirectionalLight(0x8fb2ff, 0.28);
fill.position.set(60, 70, 50);
scene.add(fill);
const gunSun = new THREE.DirectionalLight(0xffc27a, 1.7);
gunSun.position.set(-0.6, 0.9, 0.4);
gunScene.add(gunSun);
gunScene.add(new THREE.HemisphereLight(0xffd6a8, 0x2c2430, 0.7));

const sunVec = new THREE.Vector3();
const sunScreen = new THREE.Vector3();
const camForward = new THREE.Vector3();
const windVec = { x: 1, z: 0.4 };
let windLevel = 0.5;

// Game state
let state = 'loading';
let realT = 0;
let timeScale = 1;
let slowmoT = 0;
let blurT = 0;
let fovPunch = 0;
let aliveTime = 0;
let deadTimer = 0;
let sparkAcc = 0;
let heartbeatT = 0;
let textures, world, sky, postfx, particles, lights, weapon, player, enemies, combat, waves;

function snd(x, z) {
  return { pan: panFromWorld(camera, x, z), distance: Math.hypot(x - camera.position.x, z - camera.position.z) };
}

// ---- hooks between systems ---------------------------------------------------------------------------
function onKill(e, headshot) {
  const pts = waves.registerKill(e, headshot);
  const s = snd(e.pos.x, e.pos.z);
  audio.sfx.enemyDeath({ head: headshot, pan: s.pan, distance: s.distance });
  particles.addBloodDecal(e.pos.x, e.pos.z, 0.55 + Math.random() * 0.3);
  const label = e.type === 'heavy' ? 'HEAVY' : e.type === 'gunner' ? 'GUNNER' : 'RUSHER';
  hud.feed(`${label} ${headshot ? 'HEADSHOT' : 'DOWN'}  +${pts}`, headshot ? 'head' : '');
  hud.setScore(waves.score, waves.kills, waves.combo);
}

function bodyLanded(pos, speed) {
  const s = snd(pos.x, pos.z);
  audio.sfx.impact({ material: 'dirt', pan: s.pan, distance: s.distance, power: clamp(speed / 9, 0.2, 1) });
  if (Math.random() < 0.5) particles.addBloodDecal(pos.x, pos.z, 0.25 + Math.random() * 0.2);
}

function plateLanded(pos, speed) {
  const s = snd(pos.x, pos.z);
  audio.sfx.impact({ material: 'metal', pan: s.pan, distance: s.distance, power: clamp(speed / 8, 0.3, 1) });
  particles.sparkBurst(pos.x, pos.y, pos.z, 0, 1, 0, 10, [3.4, 1.8, 0.6], 3.5, 0.8);
}

function setupHooks() {
  enemies.hooks = {
    onSpawn: (e) => {
      for (let i = 0; i < 5; i++) {
        particles.puff(e.pos.x + rand(-0.5, 0.5), 0.1, e.pos.z + rand(-0.5, 0.5), rand(-1, 1), rand(0.4, 1.4), rand(-1, 1), rand(0.8, 1.2), 0.3, 1.1, 0.7, 0.62, 0.52, 0.45, 2.0, 0);
      }
    },
    onLunge: (e) => {
      const s = snd(e.pos.x, e.pos.z);
      audio.sfx.enemyLunge({ pan: s.pan, distance: s.distance });
    },
    onMelee: (e, dmg) => {
      player.takeDamage(dmg, e.pos.x, e.pos.z);
    },
    onEnemyShot: (e, muzzle, target, spread, dmg, kind) => combat.enemyShot(e, muzzle, target, spread, dmg, kind),
    onKill,
    onDebris: (mesh, v, w, rad, kind) => particles.addDebris(mesh, v, w, rad, 9, kind === 'head' ? plateLanded : bodyLanded),
    onPlateDebris: (mesh, v, w) => particles.addDebris(mesh, v, w, 0.16, 9, plateLanded),
  };
  particles.onImpactSound = (kind, x, z, power) => {
    const s = snd(x, z);
    const material = kind === 'floor' ? 'concrete' : kind;
    audio.sfx.impact({ material, pan: s.pan, distance: s.distance, power });
  };
  particles.onShellBounce = (x, y, z, strength) => {
    audio.sfx.shellClink({ pan: panFromWorld(camera, x, z), power: strength });
  };
}

// ---- event routing -------------------------------------------------------------------------------------
function puffsAt(x, z, count, size) {
  for (let i = 0; i < count; i++) {
    particles.puff(x + rand(-0.4, 0.4), 0.08, z + rand(-0.4, 0.4), rand(-1.2, 1.2), rand(0.2, 0.9), rand(-1.2, 1.2), rand(0.5, 0.9), size * 0.5, size, 0.7, 0.64, 0.56, 0.32, 2.2, 0.4);
  }
}

function handlePlayerEvents() {
  for (const ev of player.events) {
    switch (ev.type) {
      case 'jump':
        audio.sfx.jump();
        break;
      case 'land':
        audio.sfx.land(ev.strength);
        puffsAt(player.pos.x, player.pos.z, 6, 0.6);
        break;
      case 'slideStart':
        audio.sfx.slideStart();
        puffsAt(player.pos.x, player.pos.z, 8, 0.7);
        break;
      case 'mantle':
        audio.sfx.mantle();
        break;
      case 'footstep':
        audio.sfx.footstep({ sprint: ev.sprint });
        break;
      case 'hurt':
        audio.sfx.hurt();
        hud.flashDamage(ev.amount);
        break;
      case 'death':
        onPlayerDeath();
        break;
      default:
        break;
    }
  }
  player.events.length = 0;
}

function handleWeaponEvents() {
  for (const ev of weapon.events) {
    switch (ev.type) {
      case 'fire': {
        player.addRecoil(ev.pitch, ev.yaw);
        const spread = weapon.spread(lastCtx);
        combat.playerShot(ev, spread);
        audio.sfx.shot({ kind: 'rifle', distance: 0, pan: 0 });
        lights.flash(ev.muzzle, 9.5, 0xffb060);
        player.addTrauma(CFG.weapon.recoil.trauma);
        break;
      }
      case 'shell':
        particles.ejectShell(ev.pos, ev.vel, ZERO);
        break;
      case 'dry':
        audio.sfx.dryFire();
        break;
      case 'reload':
        audio.sfx.reload(ev.stage);
        break;
      case 'reloadStart':
        enemies.onPlayerReload(player.pos.x, player.pos.z);
        break;
      case 'flourish':
        onFlourish();
        break;
      default:
        break;
    }
  }
  weapon.events.length = 0;
}

const ZERO = new THREE.Vector3();
let lastCtx = { speedNorm: 0, grounded: true, sliding: false };

function onFlourish() {
  slowmoT = 0.42;
  blurT = 0.4;
  fovPunch = 9;
  audio.sfx.whoosh(1);
  audio.sfx.snapAds();
  hud.banner('SLIDE AIM', '', 900);
}

function onPlayerDeath() {
  if (state !== 'playing') return;
  state = 'dead';
  deadTimer = 1.3;
  audio.setSlide(false, 0);
  audio.sfx.playerDeath();
  audio.music.sting('death');
}

// ---- world helpers ---------------------------------------------------------------------------------
function updateWind(t) {
  const gust = 0.5 + 0.5 * Math.sin(t * 0.23) * Math.sin(t * 0.61 + 1.1);
  windLevel = clamp(0.3 + gust * 0.7, 0, 1);
  const a = 0.6 + 0.35 * Math.sin(t * 0.05);
  windVec.x = Math.cos(a) * windLevel * 1.5;
  windVec.z = Math.sin(a) * windLevel * 1.5;
}

function updateSunScreen() {
  sunVec.copy(camera.position).addScaledVector(SUN_DIR, 800);
  sunScreen.copy(sunVec).project(camera);
  camera.getWorldDirection(camForward);
  const facing = camForward.dot(SUN_DIR);
  const edge = Math.max(Math.abs(sunScreen.x), Math.abs(sunScreen.y));
  const vis = smoothstep(0.72, 0.92, facing) * (1 - smoothstep(0.95, 1.35, edge));
  return { uv: new THREE.Vector2(sunScreen.x * 0.5 + 0.5, sunScreen.y * 0.5 + 0.5), vis };
}

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const pr = Math.min(window.devicePixelRatio || 1, CFG.quality.maxPixelRatio);
  renderer.setPixelRatio(pr);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  gunCamera.aspect = w / h;
  gunCamera.updateProjectionMatrix();
  if (postfx) {
    const v = new THREE.Vector2();
    renderer.getDrawingBufferSize(v);
    postfx.setSize(v.x, v.y);
  }
}

// ---- state flow --------------------------------------------------------------------------------------
// Puts the player into play and asks for the mouse. Pointer lock needs a user gesture, which the buttons give.
function enterPlaying() {
  audio.init();
  audio.resume();
  audio.music.start();
  state = 'playing';
  hud.resetCache();
  hud.show('none');
  hud.setHealth(player.hp, CFG.player.maxHealth);
  input.requestLock(canvas);
  // If pointer lock is refused, keep the pause panel up so the player knows to click.
  setTimeout(() => {
    if (state === 'playing' && !input.locked) {
      state = 'paused';
      hud.show('pause');
    }
  }, 350);
}

function resetPlayer() {
  player.hp = CFG.player.maxHealth;
  player.alive = true;
  player.pos.copy(SPAWN_POINT);
  player.vel.set(0, 0, 0);
  player.events.length = 0;
  player.trauma = 0;
  player.stillTime = 0;
  player.onGround = true;
  player.sliding = false;
  player.mantling = false;
  player.regenTimer = 0;
  player.hurtFlash = 0;
  player.yaw = 0;
  player.pitch = 0;
  player.recoilPitch = 0;
  player.recoilYaw = 0;
  weapon.mag = CFG.weapon.magSize;
  weapon.reserve = CFG.weapon.reserve;
  weapon.reloading = false;
  weapon.events.length = 0;
  aliveTime = 0;
  timeScale = 1;
  slowmoT = 0;
}

function restartGame() {
  enemies.clear();
  resetPlayer();
  waves.start();
  enterPlaying();
}

function onLockChange(locked) {
  if (locked) {
    if (state === 'paused') {
      state = 'playing';
      hud.show('none');
    }
  } else if (state === 'playing') {
    state = 'paused';
    audio.setSlide(false, 0);
    hud.show('pause');
  }
}

// ---- per-frame updates ----------------------------------------------------------------------------------
function updatePlaying(dt, dw) {
  const [dx, dy] = input.consumeLook();
  const ads = input.isDown('Mouse2');
  const fire = input.isDown('Mouse0');

  // Slide-aim flourish: right-click during the first part of a slide.
  if (input.wasPressed('Mouse2') && player.sliding && player.slideT < 0.6 && weapon.flourishT > 1.2 && !weapon.reloading) {
    weapon.startFlourish();
  }
  if (input.wasPressed('KeyR')) weapon.startReload();

  const sens = CFG.view.sensitivity * lerp(1, CFG.view.adsSensitivityMul, weapon.adsT);
  player.look(dx, dy, sens);
  player.update(dt, input, { firing: fire, ads, adsT: weapon.adsT });
  lastCtx = {
    fireHeld: fire,
    ads,
    sprinting: player.sprinting,
    dead: !player.alive,
    speedNorm: player.speedNorm,
    grounded: player.onGround,
    sliding: player.sliding,
    lean: player.lean,
    lookDX: dx,
    lookDY: dy,
    adsT: weapon.adsT,
  };
  weapon.update(dt, lastCtx);
  handleWeaponEvents();
  handlePlayerEvents();
  audio.setSlide(player.sliding, player.speedNorm);

  // World time.
  enemies.update(dw, { player });
  waves.update(dw);
  if (state === 'playing') {
    if (!player.alive) onPlayerDeath();
  }
  const inCover = !enemies.all.some((e) => e.alive && e.lastLos && Math.hypot(e.pos.x - player.pos.x, e.pos.z - player.pos.z) < 55);
  player.updateHealth(dt, inCover);
  hud.setCover(inCover);
  audio.music.setIntensity(waves.musicIntensity);
  aliveTime += dt;

  if (player.hp < 30 && player.alive) {
    heartbeatT -= dt;
    if (heartbeatT <= 0) {
      audio.sfx.heartbeat();
      heartbeatT = 0.85;
    }
  }

  // Grinder sparks from the rebar on the trestles.
  const spark = world.sparkers[0];
  sparkAcc += dw * spark.rate;
  const n = Math.floor(sparkAcc);
  sparkAcc -= n;
  if (n > 0) particles.emitSparks(spark.pos, spark.dir, n, windVec);

  hud.setHealth(player.hp, CFG.player.maxHealth);
  hud.setAmmo(weapon.mag, weapon.reserve, weapon.reloading);
  hud.setScore(waves.score, waves.kills, waves.combo);
  hud.setCrosshair(weapon.spread(lastCtx), weapon.adsT > 0.6);
}

// Menu backdrop: a slow sideways drift at the south edge, looking into the sunset past the core. The path
// stays clear of the columns so the camera never sits inside geometry.
function updateMenuCamera(t) {
  camera.fov = 62;
  camera.updateProjectionMatrix();
  camera.position.set(Math.sin(t * 0.05) * 4.5, 1.9 + Math.sin(t * 0.13) * 0.05, 30);
  camera.lookAt(Math.sin(t * 0.04) * 5, 2.4, -22);
  gunCamera.fov = 62;
  gunCamera.updateProjectionMatrix();
}

function frame(nowMs) {
  if (state === 'loading') return;
  const dt = Math.min(1 / 30, (nowMs - (frame.last || nowMs)) / 1000);
  frame.last = nowMs;
  realT += dt;

  // Slow-mo ramps the world time scale in and out.
  slowmoT = Math.max(0, slowmoT - dt);
  blurT = Math.max(0, blurT - dt);
  fovPunch = damp(fovPunch, 0, 7, dt);
  const targetScale = slowmoT > 0 ? 0.42 : 1;
  timeScale = damp(timeScale, targetScale, 8, dt);
  const dw = dt * timeScale;

  updateWind(realT);
  audio.setWind(windLevel * 0.9);
  sky.update(camera, realT);
  world.update(realT, dw, windLevel);
  particles.update(dw, windVec, realT);
  lights.update(dw);

  if (state === 'menu') {
    updateMenuCamera(realT);
  } else if (state === 'playing') {
    updatePlaying(dt, dw);
  } else if (state === 'dead') {
    // The world winds down: corpses settle, enemies stop acting.
    deadTimer -= dt;
    player.updateHealth(0, false);
    if (deadTimer <= 0) {
      const mins = Math.floor(aliveTime / 60);
      const secs = String(Math.floor(aliveTime % 60)).padStart(2, '0');
      hud.showDead([
        ['WAVE REACHED', String(waves.wave)],
        ['KILLS', String(waves.kills)],
        ['HEADSHOTS', String(waves.headshots)],
        ['SCORE', waves.score.toLocaleString('en-US')],
        ['TIME', `${mins}:${secs}`],
      ]);
      hud.show('dead');
      state = 'over';
      if (document.pointerLockElement) document.exitPointerLock();
    }
  }

  if (state !== 'menu' && state !== 'over') {
    // Camera follows the player body; the weapon uses the same view.
    player.applyCamera(camera);
  }
  const fovNow = lerp(CFG.view.fov + player.fovExtra + fovPunch, CFG.view.fovAds, weapon ? weapon.adsT : 0);
  if (Math.abs(camera.fov - fovNow) > 0.01 && state !== 'menu') {
    camera.fov = fovNow;
    camera.updateProjectionMatrix();
    gunCamera.fov = fovNow;
    gunCamera.updateProjectionMatrix();
  }
  camera.updateMatrixWorld();
  gunCamera.updateMatrixWorld();
  particles.setView(postfx.size.y, camera.fov);

  // The viewmodel only exists while playing; in menus and overlays it would sit in front of the lens.
  weapon.view.root.visible = state === 'playing';

  const sunInfo = updateSunScreen();
  const hurt = player ? player.hurtFlash : 0;
  const lowHP = player ? clamp((38 - player.hp) / 26, 0, 1) : 0;
  postfx.render({
    time: realT,
    wind: windVec,
    haze: 0.0045,
    dust: 0.06,
    sunUV: sunInfo.uv,
    sunVis: sunInfo.vis,
    damage: hurt,
    lowHP: state === 'playing' ? lowHP : 0,
    blur: blurT > 0 ? 0.55 * (blurT / 0.4) : 0,
    bloom: 0.32,
    exposure: 0.92,
    adrenaline: waves ? waves.adrenaline / 100 : 0,
  });
  input.endFrame();
}

// ---- boot ------------------------------------------------------------------------------------------------
async function boot() {
  hud.init();
  input.attach(canvas);
  input.onLockChange = onLockChange;
  resize();
  window.addEventListener('resize', resize);
  // Yield once so the page can paint before the heavier generation work. A timer rather than a frame callback,
  // so boot also runs in a background tab where animation frames are paused.
  await new Promise((r) => setTimeout(r, 0));

  textures = createTextures(renderer);
  sky = createSky(scene, renderer);
  gunScene.environment = scene.environment;
  world = buildWorld({ scene, textures, renderer });
  createCity(scene, textures);

  particles = new Particles({ scene, textures, camera });
  lights = new LightPool(scene, 3);
  weapon = new Weapon({ gunScene, camera, textures });
  player = new Player(SPAWN_POINT, 0);
  enemies = new Enemies({ scene, world, hooks: {} });
  combat = new Combat({ camera, player, enemies, particles, lights, audio, hud });
  waves = new WaveDirector({
    enemies, world, player, hud,
    hooks: {
      onWaveStart: () => {
        audio.sfx.waveStart();
        audio.music.sting('wave');
      },
      onWaveClear: () => {
        audio.sfx.waveClear();
        audio.music.sting('clear');
      },
    },
  });
  setupHooks();

  postfx = new PostFX({
    renderer, scene, camera, gunScene, gunCamera,
    sunLight: sun, sunDir: SUN_DIR.clone(), sunTarget: new THREE.Vector3(0, 0, 0),
    cfg: CFG, shadowLayer: CAST_LAYER,
  });
  resize();
  // Shared lighting for the viewmodel: match the sun direction and colour.
  gunSun.color.copy(sun.color);

  hud.show('menu');
  state = 'menu';
  document.getElementById('start-btn').addEventListener('click', () => {
    if (state === 'menu') restartGame();
  });
  document.getElementById('restart-btn').addEventListener('click', () => {
    if (state === 'over') restartGame();
  });
  document.getElementById('resume-btn').addEventListener('click', () => {
    if (state === 'paused') input.requestLock(canvas);
  });
  // ?debug exposes the running systems for inspection in the browser console.
  if (new URLSearchParams(window.location.search).has('debug')) {
    let fakeNow = performance.now();
    window.__golden = {
      start: restartGame, state: () => state, setState: (v) => { state = v; },
      camera, scene, renderer, player, weapon, enemies, waves, world, particles, postfx, input, combat, lights,
      // Advance the simulation by n fixed 60 Hz steps (animation frames do not run in background tabs).
      tick: (n = 1) => { for (let i = 0; i < n; i++) { fakeNow += 1000 / 60; frame(fakeNow); } return state; },
    };
  }
}

boot().catch((err) => {
  console.error(err);
  const el = document.getElementById('boot-error');
  if (el) {
    el.textContent = 'Could not start: ' + (err && err.message ? err.message : err);
    el.classList.add('on');
  }
});

function loop(nowMs) {
  requestAnimationFrame(loop);
  frame(nowMs);
}
requestAnimationFrame(loop);
