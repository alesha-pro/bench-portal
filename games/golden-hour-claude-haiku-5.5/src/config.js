// Tunables for GOLDEN HOUR. Units: metres, seconds, radians. Change numbers here, not in the systems.

export const CFG = {
  quality: {
    shadowSize: 2048, // sun shadow map resolution (both the lit pass and the volumetric pass)
    volSteps: 24, // raymarch steps for light shafts
    maxPixelRatio: 1.5,
    msaa: 4,
    bloomLevels: 5,
  },

  view: {
    fov: 74,
    fovAds: 52,
    fovSprintAdd: 5,
    fovSlideAdd: 8,
    sensitivity: 0.0022,
    adsSensitivityMul: 0.6,
    near: 0.03,
    far: 1600,
  },

  player: {
    radius: 0.36,
    height: 1.8,
    eyeStand: 1.62,
    eyeSlide: 0.8,
    walkSpeed: 5.2,
    sprintSpeed: 8.6,
    adsSpeedMul: 0.5,
    accelGround: 60,
    accelAir: 11,
    friction: 9,
    gravity: 26,
    jumpSpeed: 7.4,
    stepHeight: 0.5,
    slideSpeed: 11,
    slideTime: 0.95,
    slideFriction: 3.4,
    slideMinSpeed: 3.2,
    mantleTime: 0.42,
    leanOffset: 0.42,
    leanRoll: 0.16,
    maxHealth: 100,
    regenDelay: 2.2,
    regenPerSec: 28,
    arena: 38.5,
  },

  weapon: {
    name: 'RAV-9',
    rpm: 760,
    magSize: 30,
    reserve: 210,
    damage: { body: 24, limb: 17, head: 999, plate: 60 },
    reloadBeats: [0.62, 0.6, 0.62], // mag out, mag in, charging handle (seconds)
    spread: { hip: 0.0028, move: 0.0095, ads: 0.0006, bloomPerShot: 0.0011, bloomMax: 0.014, bloomDecay: 5.5 },
    // Learnable climb: pitch per shot grows slightly over a burst; yaw follows a fixed zig-zag pattern.
    recoil: {
      pitchBase: 0.0105,
      pitchRamp: 0.00045,
      pitchMax: 0.0175,
      yawStep: 0.0042,
      pattern: [0, 0.7, -0.9, 1.15, -1.3, 0.85, -0.45, 0.6, -1.0, 1.25, -0.7, 0.35],
      recoverRate: 2.6,
      trauma: 0.07,
    },
    range: 500,
  },

  enemies: {
    rusher: {
      hp: 62, speed: 6.1, lungeSpeed: 11.5, lungeTime: 0.45, lungeRange: [5, 10], lungeCd: 2.4,
      meleeRange: 1.8, meleeDamage: 11, meleeCd: 0.95, score: 100, scale: 1, radius: 0.34,
    },
    gunner: {
      hp: 84, speed: 3.3, sightRange: 42, fireGap: 0.13, burst: 3, hideTime: [1.0, 1.6],
      peekTime: [1.0, 1.6], damage: 7, spread: 0.035, score: 150, scale: 1, radius: 0.34,
    },
    heavy: {
      hp: 135, speed: 2.35, range: 15, fireGap: 0.085, burstLen: [7, 12], pauseTime: 0.9,
      damage: 5.5, spread: 0.055, plateHp: 60, score: 300, scale: 1.12, radius: 0.42,
    },
  },

  waves: {
    introTime: 3.5,
    breakTime: 9,
    firstCount: 6,
    perWave: 3,
    maxCount: 48,
    spawnGapStart: 1.4,
    spawnGapMin: 0.45,
    maxAliveBase: 6,
    maxAliveCap: 13,
    gunnerFromWave: 2,
    heavyFromWave: 4,
    flankAfter: 3.2,
    pushTime: 3.2,
  },
};
