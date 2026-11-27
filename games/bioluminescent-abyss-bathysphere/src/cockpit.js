import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  TAU,
  group,
  mesh,
  pipe,
  rod,
  ball,
  box,
  hoop,
  bake,
  std,
  basic,
  painted,
  rng,
} from './geometry.js';

// The artwork is vitreous enamel screened onto the same plate that holds the hardware.
function nameplate(parent, width, height, legends) {
  const map = painted(1024, (c, s) => {
    const h = (s * height) / width;
    c.scale(1, s / h);
    c.fillStyle = '#192c2a';
    c.fillRect(0, 0, s, h);
    const rand = rng(3632);
    for (let i = 0; i < 3600; i++) {
      c.fillStyle = i % 4 ? 'rgba(195,170,117,.05)' : 'rgba(0,9,10,.13)';
      c.fillRect(rand() * s, rand() * h, 0.5 + rand() * 2, 0.85);
    }
    c.strokeStyle = '#af9667';
    c.lineWidth = 2.1;
    c.strokeRect(8, 8, s - 16, h - 16);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    for (const [label, x, y, size] of legends) {
      c.font = '500 ' + (size * s) / width + 'px "IBM Plex Mono", monospace';
      c.fillStyle = '#e1d6af';
      c.fillText(label, (x / width + 0.5) * s, (0.5 - y / height) * h);
    }
  });
  mesh(parent, new T.PlaneGeometry(width, height), std(0xfff5d7, 0.28, 0.36, { map }), [0, 0, 0.0065]);
}

export function cockpit(root, materials, dialAt, gauges, phosphor) {
  const { brass, iron, dark, rubber, copper } = materials;
  const enamel = std(0x213635, 0.53, 0.36),
    edge = std(0x977148, 0.76, 0.33);
  const red = std(0x792e21, 0.5, 0.44),
    needle = std(0x482118, 0.25, 0.4);
  const lens = [0xf2a546, 0x78e5b5, 0xcb5538].map((c) =>
    std(c, 0.16, 0.23, { emissive: c, emissiveIntensity: 1.22 })
  );
  const sill = group(root, [0, -0.375, 1.094]);
  sill.scale.setScalar(0.9);
  sill.rotation.y = Math.PI;
  const gaugePivots = [];
  function screw(g, x, y) {
    rod(g, edge, [x, y, 0], [x, y, 0.012], 0.013, 0.011, 12);
    const slot = box(g, dark, [x, y, 0.0122], [0.017, 0.0028, 0.002]);
    slot.rotation.z = x * 19 + y * 7;
  }
  function pilot(g, x, y, index, scale = 1) {
    const socket = group(g, [x, y, 0]);
    socket.scale.setScalar(scale);
    rod(socket, iron, [0, 0, 0], [0, 0, 0.026], 0.035, 0.029, 12);
    hoop(socket, brass, [0, 0, 0.028], 0.024, 0.005, 20);
    ball(socket, lens[index], [0, 0, 0.028], [0.021, 0.021, 0.016], 16);
  }
  function toggle(g, x, y, up) {
    const a = [x + 0.007, y + (up ? 0.045 : -0.036), 0.06];
    rod(g, brass, [x, y, 0], [x, y, 0.015], 0.032, 0.031, 6);
    hoop(g, dark, [x, y, 0.016], 0.02, 0.004, 16);
    ball(g, iron, [x, y, 0.018], [0.018, 0.018, 0.016], 12);
    rod(g, brass, [x, y, 0.022], a, 0.01, 0.009, 12);
    ball(g, brass, a, [0.014, 0.016, 0.014], 14);
  }
  function casework(g, w, h) {
    mesh(g, new RoundedBoxGeometry(w + 0.016, h + 0.014, 0.092, 3, 0.018), edge, [0, 0, -0.044]);
    mesh(g, new RoundedBoxGeometry(w, h, 0.034, 3, 0.012), enamel, [0, 0, -0.014]);
    for (const x of [-1, 1]) for (const y of [-1, 1]) screw(g, x * (w / 2 - 0.028), y * (h / 2 - 0.028));
  }
  const face = group(sill);
  face.rotation.x = -0.09;
  const fixed = group(face);
  casework(fixed, 1.49, 0.35);
  nameplate(fixed, 1.46, 0.333, [
    ['ECHO', -0.505, 0.126, 0.026],
    ['LAMP', 0.389, 0.081, 0.023],
    ['PUMP', 0.516, 0.081, 0.023],
    ['TRIM', 0.642, 0.081, 0.023],
    ['AUXILIARY BUS', 0.513, -0.11, 0.021],
  ]);
  dialAt(fixed, -0.503, -0.014, 0.003, 0.107, phosphor);
  for (const [x, r, i] of [
    [-0.191, 0.132, 0],
    [0.132, 0.119, 1],
  ]) {
    dialAt(fixed, x, -0.002, 0.003, r, gauges[i]);
    const pivot = group(face, [x, -0.002, 0.026]);
    const hand = new T.Shape();
    hand.moveTo(-r * 0.038, -r * 0.18);
    hand.lineTo(-r * 0.026, r * 0.42);
    hand.lineTo(0, r * 0.77);
    hand.lineTo(r * 0.028, r * 0.4);
    hand.lineTo(r * 0.038, -r * 0.18);
    hand.closePath();
    mesh(pivot, new T.ShapeGeometry(hand), i ? basic(0xf5cc88) : needle);
    ball(pivot, brass, [0, 0, 0.002], [r * 0.075, r * 0.075, r * 0.033], 12);
    gaugePivots.push(pivot);
  }
  for (let i = 0; i < 3; i++) {
    const x = 0.389 + i * 0.126;
    pilot(fixed, x, 0.027, i, 0.67);
    toggle(fixed, x, -0.043, i !== 1);
  }
  for (const x of [0.304, 0.72]) {
    pipe(
      fixed,
      brass,
      [
        [x, -0.084, 0.01],
        [x, -0.078, 0.061],
        [x, -0.055, 0.086],
        [x, 0.039, 0.086],
        [x, 0.061, 0.059],
        [x, 0.067, 0.01],
      ],
      0.007,
      8,
      22
    );
  }
  bake(fixed);

  const cabin = group(root);
  // Floating umbilical with a strain relief at either end, wrapped around the casting.
  for (const side of [-1, 1]) {
    const wire = [],
      core = [];
    for (let i = 0; i <= 320; i++) {
      const t = i / 320,
        a = -0.53 + t * 1.54;
      const r = 0.832 + 0.022 * Math.cos(t * TAU * 29) + 0.032 * Math.sin(t * Math.PI);
      wire.push([side * r * Math.cos(a), r * Math.sin(a), 1.138 + 0.022 * Math.sin(t * TAU * 29)]);
      if (i % 8 === 0) {
        const axis = 0.832 + 0.032 * Math.sin(t * Math.PI);
        core.push([side * axis * Math.cos(a), axis * Math.sin(a), 1.138]);
      }
    }
    pipe(cabin, copper, core, 0.021, 8, 64);
    pipe(cabin, rubber, wire, 0.012, 7, 420);
    for (const a of [-0.54, 0.46, 1.02]) {
      const g = group(cabin, [side * 0.84 * Math.cos(a), 0.84 * Math.sin(a), 1.135]);
      g.rotation.z = side * a;
      box(g, brass, [0, 0, 0], [0.068, 0.04, 0.067]);
      box(g, dark, [0, 0, -0.035], [0.045, 0.013, 0.007]);
    }
  }
  // A shielded work light illuminates the valve labels from above.
  const practical = group(cabin, [0.779, 0.355, 1.015]);
  practical.rotation.set(0, Math.PI + 0.6, -0.08, 'YXZ');
  mesh(practical, new RoundedBoxGeometry(0.198, 0.074, 0.052, 3, 0.014), iron);
  const bulb = basic(0xffbd70, 2.35);
  rod(practical, bulb, [-0.071, 0, 0.033], [0.071, 0, 0.033], 0.018, 0.018, 16);
  for (const x of [-0.078, 0.078])
    rod(practical, brass, [x - 0.013, 0, 0.033], [x + 0.013, 0, 0.033], 0.029, 0.029, 12);
  for (const x of [-0.055, -0.026, 0.003, 0.032, 0.058]) {
    pipe(
      practical,
      brass,
      [
        [x, -0.027, 0.016],
        [x, -0.023, 0.051],
        [x, 0.009, 0.059],
        [x, 0.026, 0.041],
        [x, 0.027, 0.015],
      ],
      0.0035,
      6,
      12
    );
  }
  // The port-side isolating valve stands proud of a panel bolted to the pressure hull.
  const valve = group(cabin, [0.818, 0.01, 0.995]);
  valve.rotation.set(0.03, Math.PI + 0.66, -0.046, 'YXZ');
  casework(valve, 0.257, 0.486);
  nameplate(valve, 0.249, 0.472, [
    ['OXYGEN', 0, 0.174, 0.032],
    ['ISOLATION', 0, 0.136, 0.017],
    ['OPEN   /   SHUT', 0, -0.174, 0.015],
  ]);
  rod(valve, brass, [0, -0.025, 0.006], [0, -0.025, 0.061], 0.048, 0.026, 8);
  const wheel = group(valve, [0, -0.025, 0.078]);
  hoop(wheel, red, [0, 0, 0], 0.08, 0.014, 40);
  for (let j = 0; j < 5; j++) {
    const a = (j * TAU) / 5;
    rod(wheel, red, [0, 0, 0.002], [0.08 * Math.cos(a), 0.08 * Math.sin(a), 0], 0.0085);
    ball(wheel, red, [0.08 * Math.cos(a), 0.08 * Math.sin(a), 0], [0.018, 0.018, 0.016], 10);
  }
  ball(wheel, brass, [0, 0, 0.012], [0.019, 0.019, 0.01], 12);
  const boxRight = group(cabin, [-0.819, 0.105, 0.992]);
  boxRight.rotation.set(0.02, Math.PI - 0.66, 0.035, 'YXZ');
  casework(boxRight, 0.235, 0.48);
  nameplate(boxRight, 0.225, 0.469, [
    ['BALLAST', 0, 0.165, 0.026],
    ['VENT', 0, 0.062, 0.021],
    ['FLOOD', 0, -0.066, 0.021],
  ]);
  for (let i = 0; i < 2; i++) {
    pilot(boxRight, -0.05, 0.004 - i * 0.13, i === 0 ? 1 : 0, 0.84);
    toggle(boxRight, 0.043, 0.005 - i * 0.13, !!i);
  }
  for (const [x, mat] of [
    [-0.055, rubber],
    [0.01, copper],
    [0.055, rubber],
  ]) {
    pipe(
      boxRight,
      mat,
      [
        [x, 0.238, -0.05],
        [x, 0.28, -0.045],
        [x * 0.77, 0.34, -0.081],
        [x - 0.03, 0.39, -0.13],
      ],
      0.012,
      8,
      18
    );
    rod(boxRight, brass, [x, 0.218, -0.05], [x, 0.263, -0.05], 0.02, 0.017, 8);
  }
  // The rubber blade and bronze spindle sit on the wet side of the quartz.
  const wiper = group(root, [-0.53, -0.37, 1.47]);
  rod(wiper, brass, [0, 0, -0.085], [0, 0, 0.013], 0.032, 0.025, 8);
  pipe(
    wiper,
    iron,
    [
      [0, 0, 0],
      [-0.022, 0.08, 0.004],
      [-0.032, 0.16, 0.003],
      [-0.041, 0.22, -0.01],
    ],
    0.006,
    8,
    18
  );
  pipe(
    wiper,
    rubber,
    [
      [-0.07, 0.126, -0.012],
      [-0.041, 0.22, -0.012],
      [0.003, 0.36, -0.015],
    ],
    0.009,
    8,
    18
  );
  bake(wiper);

  return {
    sill,
    cabin,
    update(t) {
      const descent = T.MathUtils.smoothstep(t, 0, 8);
      gaugePivots.forEach((g, i) => {
        const vibration = 0.012 * Math.sin(t * 18 + i) + 0.008 * Math.sin(t * 32.7 + i * 2.1);
        g.rotation.z = -(2.25 * (2 * (0.6662 + 0.0005 * descent) - 1) + vibration * (i ? 0.62 : 1));
      });
      wiper.rotation.z = 0.06 - 0.77 * Math.pow(0.5 + 0.5 * Math.cos((t - 19.65) * 1.75), 7);
    },
  };
}
