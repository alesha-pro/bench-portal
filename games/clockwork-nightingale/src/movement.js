import * as T from 'three';
import {
  M,
  TAU,
  group,
  mesh,
  rod,
  cylinder,
  ring,
  box,
  ball,
  screw,
  jewel,
  bake,
  vec,
  mat
} from './craft.js';
import { aperture, plate, plateFinish } from './finishing.js';
import { wheel } from './gears.js';
import { mod, notes, period, smooth } from './score.js';

const attacks = [...new Set(notes.map((n) => n.time))];
const tracks = [
  { name: 'tail', x: -0.56, law: (a) => 0.5 - 0.5 * Math.cos(4 * a + 0.8) },
  { name: 'wing', x: -0.23, law: (a) => (0.5 + 0.5 * Math.sin(6 * a)) ** 1.45 },
  { name: 'head', x: 0.16, law: (a) => 0.5 + 0.5 * Math.sin(2 * a - 0.3) },
  {
    name: 'bill',
    x: 0.48,
    law: (a) => {
      const t = (a / TAU) * period;
      let lift = 0;
      for (const hit of attacks) {
        const age = mod(t - hit + 0.1, period);
        if (age < 0.42) lift = Math.max(lift, smooth(age / 0.1) * (1 - smooth((age - 0.1) / 0.32)));
      }
      return lift;
    }
  }
];

export function camPosition(t) {
  const angle = (mod(t, period) * TAU) / period;
  return Object.fromEntries([['angle', angle], ...tracks.map((k) => [k.name, k.law(angle)])]);
}

function camBank(parent, profiles) {
  const bank = group(parent, 0.03, 1.39, 0.31);
  bank.rotation.y = -0.29;
  const frame = group(bank);
  rod(frame, M.steel, [-0.74, 0, 0], [0.7, 0, 0], 0.029);
  const sole = group(frame, 0, -0.36, 0);
  sole.rotation.x = -Math.PI / 2;
  const bed = new T.Shape();
  bed.moveTo(-0.72, -0.17);
  bed.lineTo(0.65, -0.17);
  bed.absarc(0.65, 0, 0.17, -Math.PI / 2, Math.PI / 2);
  bed.lineTo(-0.72, 0.17);
  bed.absarc(-0.72, 0, 0.17, Math.PI / 2, (3 * Math.PI) / 2);
  for (let i = 0; i < 5; i++) aperture(bed, -0.53 + i * 0.24, 0, 0.075);
  plate(sole, bed, 0.018, 0.006, plateFinish(true));
  for (const x of [-0.76, 0.7]) {
    screw(sole, x, 0.1, 0.023, 0.031);
    screw(sole, x, -0.1, 0.023, 0.031);
  }
  for (const x of [-0.71, 0.65]) {
    const standard = group(frame, x, 0, 0);
    standard.rotation.y = Math.PI / 2;
    const sh = new T.Shape();
    sh.moveTo(-0.14, -0.38);
    sh.lineTo(-0.082, 0);
    sh.absarc(0, 0, 0.082, Math.PI, 0, true);
    sh.lineTo(0.14, -0.38);
    sh.closePath();
    aperture(sh, 0, -0.23, 0.053);
    plate(standard, sh, 0.038, 0.005);
    jewel(standard, 0, 0, 0.043, 0.036);
    box(standard, M.bronze, 0, -0.375, 0, 0.37, 0.041, 0.13);
  }
  rod(frame, M.blue, [-0.71, 0.3, -0.085], [0.67, 0.3, -0.085], 0.019);
  for (const x of [-0.71, 0.65]) rod(frame, M.gold, [x, 0, -0.03], [x, 0.3, -0.085], 0.022);
  const wheels = [],
    followers = [];
  tracks.forEach(({ name, x }, index) => {
    const pivot = group(bank, x, 0, 0);
    pivot.rotation.y = Math.PI / 2;
    const cam = group(pivot),
      sh = new T.Shape(),
      radii = profiles[index],
      steps = radii.length;
    for (let i = 0; i < steps; i++) {
      const a = (i * TAU) / steps,
        r = radii[(steps + steps / 4 - i) % steps];
      const px = r * Math.cos(a),
        py = r * Math.sin(a);
      if (i === 0) sh.moveTo(px, py);
      else sh.lineTo(px, py);
    }
    sh.closePath();
    for (let j = 0; j < 3; j++)
      aperture(sh, 0.078 * Math.cos((j * TAU) / 3), 0.078 * Math.sin((j * TAU) / 3), 0.028);
    plate(cam, sh, 0.039, 0.0015, index % 2 ? M.rose : M.blue, M.steel);
    ring(cam, M.gold, 0, 0, 0.042, 0.047, 0.009);
    bake(cam);
    wheels.push(cam);
    if (index === 0) {
      const gear = wheel(pivot, 30, 0.015, 0.029, M.gold);
      gear.position.z = -0.064;
      bake(gear);
      wheels.push(gear);
    }
    const slider = group(bank, x + 0.02, 0, 0);
    // The burnished knife edge samples the radial profile at the twelve-o'clock position.
    rod(slider, M.steel, [0, 0, 0], [0, 0.044, 0], 0.002, 0.017);
    cylinder(slider, M.rose, 0, 0.115, 0, 0.014, 0.014, 0.15, 16);
    ring(slider, M.light, 0, 0.202, 0, 0.03, 0.009);
    cylinder(slider, M.blue, 0, 0.202, 0, 0.013, 0.013, 0.058, 16, 'z');
    bake(slider);
    followers.push(slider);
    cylinder(frame, M.gold, x + 0.02, 0.298, 0, 0.029, 0.037, 0.065, 24);
    rod(frame, M.brass, [x + 0.02, 0.3, -0.085], [x + 0.02, 0.3, 0], 0.019);
  });
  bake(frame);
  return {
    followers,
    update(drive, e) {
      bank.position.y = 1.39 + e * 0.47;
      for (const cam of wheels) cam.rotation.z = drive.angle;
    }
  };
}

// A spiral of rectangular spring steel has separate broad faces and a lit edge.
function springStrip() {
  const relaxed = [],
    wound = [],
    indices = [],
    n = 384;
  const corners = [
    [-0.005, -0.048],
    [0.005, -0.048],
    [0.005, 0.048],
    [-0.005, 0.048]
  ];
  for (let i = 0; i <= n; i++) {
    const u = i / n,
      a = TAU * 5.65 * u + 0.42,
      r = 0.047 + 0.301 * u;
    for (let face = 0; face < 4; face++) {
      for (const corner of [face, (face + 1) % 4]) {
        const [dr, z] = corners[corner],
          arc = a + 0.88 * (1 - u) ** 1.4;
        relaxed.push((r + dr) * Math.cos(a), (r + dr) * Math.sin(a), z);
        const rw = r - 0.019 * Math.sin(Math.PI * u);
        wound.push((rw + dr) * Math.cos(arc), (rw + dr) * Math.sin(arc), z);
      }
      if (i < n) {
        const j = i * 8 + face * 2;
        indices.push(j, j + 9, j + 1, j, j + 8, j + 9);
      }
    }
  }
  const g = new T.BufferGeometry(),
    tensioned = new T.BufferGeometry();
  for (const [geo, positions] of [
    [g, relaxed],
    [tensioned, wound]
  ]) {
    geo.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
  }
  g.morphAttributes.position = [tensioned.attributes.position];
  g.morphAttributes.normal = [tensioned.attributes.normal];
  return g;
}

function powerBarrel(scene) {
  const base = group(scene, -0.95, 0.91, 0.995);
  base.rotation.x = -0.36;
  const cradle = group(base);
  const bridge = new T.Shape();
  bridge.moveTo(-0.47, -0.25);
  bridge.quadraticCurveTo(-0.5, -0.38, -0.32, -0.38);
  bridge.lineTo(0.34, -0.38);
  bridge.quadraticCurveTo(0.53, -0.36, 0.46, -0.17);
  bridge.lineTo(0.34, 0.21);
  bridge.quadraticCurveTo(0.23, 0.44, 0, 0.43);
  bridge.quadraticCurveTo(-0.27, 0.43, -0.37, 0.18);
  bridge.closePath();
  aperture(bridge, 0, 0, 0.28);
  cradle.position.z = -0.14;
  plate(cradle, bridge, 0.034, 0.009, plateFinish(true));
  for (const x of [-0.37, 0.37]) screw(cradle, x, -0.29, 0.047, 0.04);
  bake(cradle);
  const barrel = group(base),
    cap = group(base);
  cylinder(barrel, M.enamelDark, 0, 0, -0.078, 0.374, 0.374, 0.027, 84, 'z');
  for (const z of [-0.064, 0.065]) {
    ring(barrel, M.rose, 0, 0, z, 0.363, 0.023);
    ring(barrel, M.light, 0, 0, z + 0.009, 0.379, 0.009);
  }
  for (let j = 0; j < 16; j++) {
    const a = (j * TAU) / 16,
      x = 0.365 * Math.cos(a),
      y = 0.365 * Math.sin(a);
    rod(barrel, M.brass, [x, y, -0.07], [x, y, 0.075], 0.012);
  }
  const steel = mat(0x94a9bd, 0.89, 0.24, { side: T.DoubleSide });
  const hook = 5.65 * TAU + 0.42;
  rod(
    barrel,
    M.steel,
    [0.344 * Math.cos(hook), 0.344 * Math.sin(hook), 0],
    [0.371 * Math.cos(hook), 0.371 * Math.sin(hook), 0],
    0.012
  );
  const studs = [];
  for (let j = 0; j < 3; j++) {
    const a = (TAU * j) / 3 + 0.32;
    studs.push(
      cylinder(base, M.blue, -0.336 * Math.sin(a), 0.336 * Math.cos(a), 0.082, 0.009, 0.009, 1, 12, 'z')
    );
  }
  const ratchet = wheel(barrel, 44, 0.016, 0.031, M.antique, true);
  ratchet.position.z = -0.1;
  cylinder(barrel, M.blue, 0, 0, 0, 0.046, 0.046, 0.23, 24, 'z');
  bake(barrel);
  const strip = mesh(barrel, springStrip(), steel);
  for (let j = 0; j < 3; j++) {
    const a = (TAU * j) / 3 + 0.32;
    const strut = group(cap);
    strut.rotation.z = a;
    const sh = new T.Shape();
    sh.moveTo(-0.047, 0);
    sh.quadraticCurveTo(-0.008, 0.17, -0.046, 0.333);
    sh.quadraticCurveTo(-0.012, 0.407, 0.051, 0.342);
    sh.quadraticCurveTo(0.077, 0.17, 0.042, 0.012);
    sh.closePath();
    plate(strut, sh, 0.017, 0.004);
    screw(strut, 0.001, 0.336, 0.024, 0.027);
  }
  jewel(cap, 0, 0, 0.025, 0.046);
  bake(cap);
  return (t, e, wind, reserve) => {
    base.position.set(-0.95 - 0.39 * e, 0.91 + 0.02 * e, 0.995 + 0.62 * e);
    barrel.rotation.z = cap.rotation.z = t * 0.091 + wind * 0.6;
    cap.position.z = 0.089 + 0.22 * e;
    strip.morphTargetInfluences[0] = reserve;
    for (let j = 0; j < studs.length; j++) {
      const a = (TAU * j) / 3 + 0.32 + barrel.rotation.z;
      studs[j].position.set(-0.336 * Math.sin(a), 0.336 * Math.cos(a), 0.079 + 0.11 * e);
      studs[j].scale.y = 0.031 + 0.22 * e;
    }
  };
}

function flyGovernor(scene) {
  const base = group(scene, 1.3, 0.73, -0.03),
    frame = group(base),
    fly = group(base, 0, 0.76, 0);
  for (const y of [0, 0.11, 0.27, 0.69, 0.81])
    cylinder(frame, M.gold, 0, y, 0, y === 0 ? 0.12 : 0.047, y === 0 ? 0.15 : 0.051, 0.041, 32);
  rod(frame, M.steel, [0, 0, 0], [0, 0.82, 0], 0.019);
  const cock = group(frame, 0, 0, -0.012);
  const sh = new T.Shape();
  sh.moveTo(-0.13, -0.19);
  sh.quadraticCurveTo(-0.06, 0.085, 0.035, 0.215);
  sh.quadraticCurveTo(0.091, 0.35, 0.053, 0.59);
  sh.quadraticCurveTo(0.002, 0.69, -0.018, 0.59);
  sh.quadraticCurveTo(0.029, 0.37, -0.068, 0.22);
  sh.lineTo(-0.21, -0.19);
  sh.closePath();
  plate(cock, sh, 0.029, 0.004);
  screw(cock, -0.158, -0.154, 0.036, 0.031);
  jewel(cock, 0.02, 0.593, 0.036, 0.019);
  cylinder(frame, M.bronze, -0.14, -0.214, 0, 0.13, 0.15, 0.051, 36);
  const transfer = wheel(base, 30, 0.012, 0.025, M.rose);
  transfer.position.set(-0.288, 0.17, 0);
  transfer.rotation.x = -Math.PI / 2;
  bake(transfer);
  rod(frame, M.blue, [-0.288, -0.2, 0], [-0.288, 0.203, 0], 0.022);
  cylinder(frame, M.antique, -0.288, -0.198, 0, 0.07, 0.087, 0.048, 26);
  const drive = wheel(fly, 18, 0.012, 0.025, M.blue);
  drive.position.y = -0.59;
  drive.rotation.x = -Math.PI / 2;
  for (let j = 0; j < 2; j++) {
    const arm = group(fly);
    arm.rotation.y = j * Math.PI;
    rod(arm, M.rose, [0, 0, 0], [0.25, 0, 0], 0.016);
    const pad = group(arm, 0.095, 0, 0);
    pad.rotation.x = -0.47;
    const blade = new T.Shape();
    blade.moveTo(0, -0.035);
    blade.quadraticCurveTo(0.04, -0.102, 0.21, -0.115);
    blade.quadraticCurveTo(0.26, -0.09, 0.25, 0.09);
    blade.lineTo(0.049, 0.057);
    blade.closePath();
    aperture(blade, 0.167, -0.015, 0.034);
    plate(pad, blade, 0.014, 0.004, plateFinish(), M.rose);
    screw(pad, 0.045, 0.004, 0.019, 0.021);
  }
  ball(fly, M.blue, 0, 0.036, 0, 0.045);
  bake(fly);
  bake(frame);
  return (t, e) => {
    base.position.set(1.3 + 0.73 * e, 0.73 + 0.64 * e, -0.03 - 0.26 * e);
    fly.rotation.y = t * 9.4;
    transfer.rotation.order = 'YXZ';
    transfer.rotation.y = (-t * 9.4 * 18) / 30;
  };
}

const up = vec(0, 1, 0);
function fitRod(rod, a, b, direction) {
  direction.subVectors(b, a);
  rod.scale.y = direction.length();
  rod.position.copy(a).lerp(b, 0.5);
  rod.quaternion.setFromUnitVectors(up, direction.normalize());
}

// Inverse kinematics of the program drum. The pin on a rocker describes a
// circle. Its intersection with the sphere swept by a rigid upper rod fixes the
// rocker angle. The lower rod then determines the required radial cam height.
function rockers(scene, bird) {
  const supports = [
    [-0.49, 2.02, 0.16, -0.14, 0.093],
    [-0.07, 1.98, 0.27, 0.14, -0.11],
    [0.18, 2.04, 0.21, 0.14, -0.13],
    [0.445, 2.075, 0.12, 0.135, -0.112]
  ];
  const tip = vec(),
    local = vec(),
    lower = vec(),
    upper = vec(),
    direction = vec();
  return tracks.map(({ name, x }, i) => {
    const [px, py, pz, outArm, inArm] = supports[i],
      pivot = vec(px, py, pz);
    const follower = vec(0.03 + (x + 0.02) * Math.cos(0.29), 1.39, 0.31 + (x + 0.02) * Math.sin(0.29));
    const mount = group(scene, px, py, pz);
    rod(mount, M.antique, [0, -0.015, -0.025], [0, -0.2, -0.11], 0.023, 0.033);
    const railZ = 0.31 + (px - 0.03) * Math.tan(0.29) - 0.085 / Math.cos(0.29);
    rod(mount, M.brass, [0, -0.2, -0.11], [0, 1.69 - py, railZ - pz], 0.033, 0.018);
    cylinder(mount, M.blue, 0, 0, 0, 0.045, 0.045, 0.09, 24, 'z');
    bake(mount);
    const rocker = group(scene, px, py, pz);
    const sh = new T.Shape();
    sh.moveTo(inArm, -0.025);
    sh.quadraticCurveTo(inArm * 1.32, -0.003, inArm, 0.012);
    sh.quadraticCurveTo(0, 0.024, outArm, 0.034);
    sh.quadraticCurveTo(outArm * 1.26, 0.018, outArm, 0.002);
    sh.quadraticCurveTo(0, -0.036, inArm, -0.025);
    sh.closePath();
    plate(rocker, sh, 0.022, 0.003, i % 2 ? M.rose : plateFinish());
    jewel(rocker, 0, 0, 0.027, 0.027);
    screw(rocker, inArm, -0.009, 0.026, 0.016);
    screw(rocker, outArm, 0.018, 0.026, 0.016);
    bake(rocker);
    const input = vec(inArm, -0.009, 0.01),
      output = vec(outArm, 0.018, 0.01);
    const lowerRod = cylinder(scene, M.blue, 0, 0, 0, 0.012, 0.012, 1, 12);
    const upperRod = cylinder(scene, M.steel, 0, 0, 0, 0.009, 0.009, 1, 12);
    bird.pins[name].getWorldPosition(tip);
    const upperLength = tip.distanceTo(upper.copy(output).add(pivot));
    lower.copy(input).add(pivot);
    const neutral = 0.17,
      eyeHeight = 0.202,
      lowerLength = lower.distanceTo(local.copy(follower).addScaledVector(up, neutral + eyeHeight));
    // Pick the intersection passing through zero at calibration.
    local.copy(tip).sub(pivot);
    const branch = Math.sign(local.x * -output.y + local.y * output.x) || 1;
    return (e, draw = false) => {
      bird.pins[name].getWorldPosition(tip);
      local.copy(tip).sub(pivot);
      local.y -= 0.47 * e;
      const a = local.x * output.x + local.y * output.y;
      const b = local.y * output.x - local.x * output.y;
      const c = (local.lengthSq() + output.lengthSq() - upperLength ** 2) / 2 - local.z * output.z;
      const angle = Math.atan2(b, a) - branch * Math.acos(T.MathUtils.clamp(c / Math.hypot(a, b), -1, 1));
      const cos = Math.cos(angle),
        sin = Math.sin(angle);
      lower.set(px + input.x * cos - input.y * sin, py + input.x * sin + input.y * cos, pz + input.z);
      const dx = lower.x - follower.x,
        dz = lower.z - follower.z;
      const height =
        lower.y - Math.sqrt(Math.max(0, lowerLength ** 2 - dx * dx - dz * dz)) - follower.y - eyeHeight;
      if (draw) {
        mount.position.y = rocker.position.y = py + 0.47 * e;
        rocker.rotation.z = angle;
        upper.set(
          px + output.x * cos - output.y * sin,
          rocker.position.y + output.x * sin + output.y * cos,
          pz + output.z
        );
        local.copy(follower);
        local.y += height + eyeHeight + 0.47 * e;
        lower.y += 0.47 * e;
        fitRod(lowerRod, local, lower, direction);
        fitRod(upperRod, upper, tip, direction);
      }
      return height;
    };
  });
}

export function automatonDrive(scene, bird) {
  bird.update(0, 0, false, camPosition(0));
  const linkages = rockers(scene, bird);
  const profiles = tracks.map(({ name }) => new Float64Array(name === 'bill' ? 1536 : 256));
  const steps = 1536;
  for (let i = 0; i < steps; i++) {
    const t = (i * period) / steps;
    bird.update(t, 0, false, camPosition(t));
    profiles.forEach((profile, j) => {
      const stride = steps / profile.length;
      if (i % stride === 0) profile[i / stride] = linkages[j](0);
    });
  }
  const bank = camBank(scene, profiles),
    barrel = powerBarrel(scene),
    governor = flyGovernor(scene);
  return (t, e, wind, drive, reserve) => {
    bank.update(drive, e);
    barrel(t, e, wind, reserve);
    governor(t, e);
    linkages.forEach((position, i) => {
      bank.followers[i].position.y = position(e, true);
    });
  };
}
