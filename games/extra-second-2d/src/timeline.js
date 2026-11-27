import { mix, smooth, clamp, TAU } from './draw.js';

export const DURATION = 45;
const IMPACT = 9.05;
const FREEZE = 6;
const THAW = 32;
const WORLD_CYCLE = FREEZE + DURATION - THAW;

// Camera moves are composed around an action, in station coordinates. Keep the
// lens inside the painted field even on the transition into a close-up.
const shots = [
  [0, 1, 800, 450],
  [3.4, 1.065, 794, 466],
  [6.28, 1.91, 977, 332],
  [7.35, 2.36, 1026, 358],
  [8.16, 2.46, 1020, 430],
  [9.23, 2.27, 975, 604],
  [10.8, 1.36, 861, 538],
  [12.8, 1.44, 772, 516],
  [16.15, 1.92, 913, 559],
  [18.4, 1.93, 972, 553],
  [20.65, 1.96, 1113, 515],
  [21.61, 2.12, 1152, 492],
  [22.35, 2.71, 1183, 459],
  [22.72, 2.67, 1186, 464],
  [24.94, 2.42, 1170, 566],
  [26.4, 2.16, 1138, 556],
  [28.1, 1.91, 1067, 509],
  [30.65, 2.2, 1034, 410],
  [32.25, 1.84, 1056, 391],
  [34.85, 2.62, 1208, 593],
  [36.15, 2.59, 1206, 595],
  [40.6, 1.29, 951, 466],
  [44.5, 1, 800, 450],
  [45, 1, 800, 450],
];
function camera(t) {
  const index = shots.findIndex((row) => row[0] > t);
  const left = index - 1,
    right = index;
  const span = shots[right][0] - shots[left][0],
    u = (t - shots[left][0]) / span;
  // Monotone Hermite pans carry velocity through intermediate framing marks.
  function slope(i, k) {
    if (i === 0 || i === shots.length - 1) return 0;
    const prev = (shots[i][k] - shots[i - 1][k]) / (shots[i][0] - shots[i - 1][0]);
    const next = (shots[i + 1][k] - shots[i][k]) / (shots[i + 1][0] - shots[i][0]);
    return prev * next > 0 ? (2 * prev * next) / (prev + next) : 0;
  }
  function track(k) {
    const blend = u * u * (3 - 2 * u);
    return (
      mix(shots[left][k], shots[right][k], blend) +
      span * u * (1 - u) * ((1 - u) * slope(left, k) - u * slope(right, k))
    );
  }
  const z = track(1);
  return { z, cx: clamp(track(2), 800 / z, 1600 - 800 / z), cy: clamp(track(3), 450 / z, 900 - 450 / z) };
}

function poseAt(t) {
  const world = Math.min(t, FREEZE) + Math.max(0, t - THAW);
  const phase = (world / WORLD_CYCLE) * TAU;
  const frozen = smooth(FREEZE, FREEZE + 0.48, t) * (1 - smooth(THAW, THAW + 1.05, t));
  const approach = smooth(11.8, 16, t),
    cross = smooth(18.25, 21, t);
  const stepUp = smooth(20.65, 21.6, t),
    stepDown = smooth(23.35, 24.55, t);
  const back = smooth(25.8, 27.85, t),
    home = smooth(34.1, 42.4, t);
  const bound = smooth(21.64, 22.33, t) - smooth(22.65, 23.12, t);
  const sx = -4 * bound + 451 + 461 * approach + 233 * cross - 9 * stepDown - 126 * back - 559 * home;
  const walk = (a, b, beats) =>
    Math.sin(smooth(a, b, t) * beats * TAU) * smooth(a, a + 0.24, t) * (1 - smooth(b - 0.24, b, t));
  const stride = walk(11.8, 16, 5) + walk(18.25, 21, 3) + walk(25.8, 27.85, 1.8) + walk(34.1, 42.4, 7);
  const climb = smooth(28, 29.85, t) - smooth(31.35, 33.4, t);
  const leapTime = clamp((t - 21.73) / 1.26);
  const jump = 4 * leapTime * (1 - leapTime);
  const crouch =
    smooth(21.25, 21.6, t) -
    smooth(21.6, 21.75, t) +
    0.65 * (smooth(22.91, 23.09, t) - smooth(23.09, 23.28, t));
  const skipTime = clamp((t - 23.24) / 0.48);
  const skip = 4 * skipTime * (1 - skipTime);
  const sy = 704 - 54 * (stepUp - stepDown) - 70 * jump - 15 * skip - 137 * climb - 3 * Math.abs(stride);
  const turn =
    smooth(25.75, 26.1, t) - smooth(27.55, 27.95, t) + smooth(33.55, 34.1, t) - smooth(42.4, 42.95, t);
  const facing = 1 - 2 * turn;
  const face = (facing >= 0 ? 1 : -1) * (0.72 + 0.28 * Math.abs(facing));
  const lean =
    smooth(15.65, 16.45, t) * (1 - smooth(17.45, 18, t)) * 0.18 -
    0.1 * (stepUp - stepDown) +
    0.033 * stride +
    0.16 * crouch -
    0.11 * jump;
  const hug = smooth(32.35, 34.6, t) * (1 - smooth(38.5, 42.85, t));
  const bob = Math.sin(phase) * 1.35;
  const childHand = { x: 1192 - 5 * hug, y: 625 + bob + 7 * hug };
  const holdX = 1181 + Math.sin(phase) * 5,
    holdY = 488 + Math.cos(phase) * 4;
  const lift = smooth(16.6, 17.45, t),
    pocket = smooth(17.45, 18.2, t);
  const catchString = smooth(20.8, 22.27, t) * (1 - smooth(22.82, 24.84, t));
  const handoff = smooth(23.5, 24.89, t) * (1 - smooth(25.65, 26.05, t));
  const insert = smooth(29.25, 30.72, t),
    release = smooth(31.15, 31.75, t);
  const shx = sx + facing * (32 + 27 * catchString + 24 * handoff + 9 * (insert - release));
  const shy = sy - 101 - 38 * catchString + 23 * handoff - 12 * (insert - release) + 11 * crouch;
  // The last bit of ribbon flutters into his fingers. After contact its trajectory
  // is driven by the hand all the way down to the child's open palm.
  const float = smooth(FREEZE, 21.8, t);
  const grip = smooth(22.12, 22.31, t),
    give = smooth(24.8, 25.08, t);
  const freeX = mix(childHand.x, 1220, float),
    freeY = mix(childHand.y, 445, float);
  const ex = mix(mix(freeX, shx + 2, grip), childHand.x, give);
  const ey = mix(mix(freeY, shy - 1, grip), childHand.y, give);
  const belay = grip * (1 - give);
  const bx = mix(mix(holdX, 1241, float * (1 - give)) + (ex - freeX) * belay * 0.42, 1188, hug);
  const by = mix(mix(holdY, 341, float * (1 - give)) + (ey - freeY) * belay * 0.8, 625 + bob, hug);
  const sweeping = 1 - smooth(5.6, 7, t) + smooth(41.7, 43.2, t);
  const sweep = Math.sin((t / DURATION) * TAU * 16) * sweeping;
  const brushAngle =
    1.13 + 0.39 * sweep + 0.15 * stride - 1.2 * lift * (1 - pocket) + 1.1 * catchString + 0.35 * handoff;
  const brushLength = 106;
  const tipX = shx + facing * Math.cos(brushAngle) * brushLength;
  const freeTipY = shy + Math.sin(brushAngle) * brushLength;
  const brushFlex =
    clamp((freeTipY - 686) / 20) * (sweeping * Math.cos((t / DURATION) * TAU * 16) + 0.24 * stride);
  const tipY = Math.min(696, freeTipY);
  const pocketX = sx + face * 5,
    pocketY = sy - 108;
  let ox = 1050,
    oy = 454;
  if (t >= 7.3 && t < IMPACT) {
    const u = clamp((t - 7.3) / (IMPACT - 7.3));
    ox = mix(1050, 981, u);
    oy = mix(454, 689, u * u);
  } else if (t >= IMPACT && t < 16.4) {
    const u = t - IMPACT;
    ox = 981 - 4 * smooth(0, 0.9, u);
    oy = 689 - Math.abs(Math.sin(u * 9)) * 26 * Math.exp(-u * 4);
  } else if (t >= 16.4 && t < 18.2) {
    const scoop = smooth(16.4, 16.8, t);
    ox = mix(mix(977, tipX, scoop), pocketX, pocket);
    oy = mix(mix(689, tipY, scoop), pocketY, pocket) - Math.sin(pocket * Math.PI) * 23;
  } else if (t >= 18.2 && t < 30.72) {
    ox = mix(pocketX, 1050, insert);
    oy = mix(pocketY, 454, insert) - Math.sin(insert * Math.PI) * 6;
  }
  return {
    t,
    world,
    phase,
    frozen,
    sx,
    sy,
    walk: stride,
    jump,
    crouch,
    skip,
    sweep,
    hem: Math.sin((t / 45) * TAU * 18 - 0.6) * 0.22 + 0.36 * stride + 0.82 * jump - 0.22 * crouch,
    wrist: -32 + 3.5 * sweep + 3 * stride,
    facing,
    lean,
    face,
    climb,
    hug,
    bob,
    shx,
    shy,
    tipX,
    tipY,
    brushFlex,
    insert,
    release,
    bx,
    by,
    ex,
    ey,
    ox,
    oy,
    orb: t >= 7.3 && t < 30.72,
    catchString,
    handoff,
  };
}

// Integrate a damped lantern once on a periodic track. The wrist accelerates
// under a walking arm, a jump or a direction change. The lamp is free to keep
// going after the hand stops, even when the viewer seeks straight to that beat.
const SAMPLE_RATE = 90;
function lanternTrack() {
  const count = DURATION * SAMPLE_RATE;
  const wrists = Array.from({ length: count }, (_, i) => {
    const s = poseAt(i / SAMPLE_RATE);
    return {
      x: s.sx + s.facing * (s.wrist * Math.cos(s.lean) + 28 * Math.sin(s.lean)),
      y: s.sy - 55 + 12 * s.crouch + s.wrist * Math.sin(s.lean) - 28 * Math.cos(s.lean),
    };
  });
  const angles = new Float64Array(count);
  let angle = 0,
    velocity = 0;
  // A second lap includes the decay from the final return walk in the opening.
  for (let n = 0; n < 2 * count; n++) {
    const i = n % count,
      here = wrists[i];
    // Average acceleration over the compliance of the leather handle (2/15 s).
    const width = 6,
      before = wrists[(i - width + count) % count],
      after = wrists[(i + width) % count];
    const scale = (SAMPLE_RATE / width) ** 2;
    const ax = clamp((after.x - 2 * here.x + before.x) * scale, -900, 900);
    const ay = clamp((after.y - 2 * here.y + before.y) * scale, -800, 570);
    const torque = (ax * Math.cos(angle) - (760 - ay) * Math.sin(angle)) / 31;
    velocity += (torque - 3.2 * velocity) / SAMPLE_RATE;
    angle += velocity / SAMPLE_RATE;
    angles[i] = angle;
  }
  return angles;
}
const lampAngles = lanternTrack();

export function stateAt(input) {
  const t = (((Number.isFinite(input) ? input : 0) % DURATION) + DURATION) % DURATION;
  const pose = poseAt(t),
    sample = t * SAMPLE_RATE;
  const i = Math.floor(sample);
  const angle = mix(lampAngles[i], lampAngles[(i + 1) % lampAngles.length], sample - i);
  // Convert the world-space pendulum back into the tilted, facing coat's frame.
  pose.swing = Math.atan2(Math.sin(angle) / pose.face, Math.cos(angle)) - pose.lean;
  return Object.assign(pose, camera(t));
}
