import * as T from 'three';
import {
  world,
  glassWorld,
  statics,
  mat,
  V,
  tau,
  rand,
  obj,
  cyl,
  box,
  ball,
  lathe,
  ring,
  rod,
  tube,
  curve,
  glow,
  phase,
} from './workshop.js';
import {
  glass,
  ghostGlass,
  tubeGlass,
  makeGlass,
  fluid,
  streamMaterial,
  dropletMaterial,
} from './optics.js';
import { headspace } from './vapour.js';
import { dial, plate, etching } from './print.js';

const bulbs = [],
  flames = [],
  drops = [],
  ripples = [],
  sparks = [],
  splash = [];
const green = -2.16,
  blue = 0.5,
  blueZ = 0.12;
let bubbles, goldDust, airMotes;
const flameGeo = new T.SphereGeometry(1, 24, 30);
const flameMat = new T.ShaderMaterial({
  transparent: true,
  depthWrite: false,
  blending: T.AdditiveBlending,
  uniforms: { time: phase },
  vertexShader: `
  varying vec2 st;uniform float time;void main(){
    st=uv;float h=(position.y+1.)*.5;
    vec3 p=position;p.xz*=max(.025,(1.-h)*1.48);
    p.x+=h*h*(.26*sin(time*9.+h*5.)+.11*sin(time*17.-h*9.));p.z+=h*h*.15*cos(time*11.+h*3.);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
  fragmentShader: `varying vec2 st;uniform float time;void main(){
    float h=st.y;float hot=clamp(1.-h+.18*sin(7.*h+time*4.),0.,1.);
    vec3 c=mix(vec3(2.8,.62,.046),vec3(1.8,2.2,1.2),smoothstep(.2,.86,hot));
    gl_FragColor=vec4(c,.74*(1.-smoothstep(.52,1.,h)));}`,
});
const blueFlame = flameMat.clone();
blueFlame.uniforms.time = phase;
blueFlame.fragmentShader = flameMat.fragmentShader
  .replace('vec3(2.8,.62,.046)', 'vec3(1.8,.46,.025)')
  .replace('vec3(1.8,2.2,1.2)', 'vec3(.015,.21,2.5)');
function flareTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  for (const [s, a] of [
    [0, 1],
    [0.07, 0.7],
    [0.22, 0.27],
    [0.55, 0.06],
    [1, 0],
  ])
    grd.addColorStop(s, 'rgba(255,255,255,' + a + ')');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return new T.CanvasTexture(c);
}
let haloMap;
export function halo(x, y, z, color, w, intensity = 1) {
  haloMap ??= flareTexture();
  const m = new T.SpriteMaterial({
    map: haloMap,
    color,
    opacity: intensity,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
  });
  const s = new T.Sprite(m);
  s.position.set(x, y, z);
  s.scale.setScalar(w);
  world.add(s);
  s.renderOrder = 4;
  return s;
}
export function flame(x, y, z, width, height, blue = false) {
  const f = obj(flameGeo, blue ? blueFlame : flameMat, x, y + height / 2, z, world);
  f.scale.set(width, height / 2, width);
  f.renderOrder = 3;
  flames.push([f, width, height, rand() * 10, y]);
  halo(
    x,
    y + height * 0.39,
    z,
    blue ? 0x4591ff : 0xffa240,
    height * (blue ? 1.9 : 2.8),
    blue ? 0.67 : 0.86,
  );
  if (blue) {
    for (let i = 0; i < 7; i++) {
      const a = (i * tau) / 7,
        xx = x + 0.083 * Math.cos(a),
        zz = z + 0.083 * Math.sin(a);
      const o = obj(flameGeo, blueFlame, xx, y + 0.094, zz, world);
      o.renderOrder = 4;
      flames.push([o, width * 0.34, height * (0.32 + 0.12 * rand()), i * 2.7, y]);
    }
  }
}
function turned(x, y, z, scale = 1, p = statics, m = mat.brass) {
  const profile = [
    [0, 0],
    [0.31, 0],
    [0.34, 0.025],
    [0.34, 0.065],
    [0.28, 0.085],
    [0.26, 0.11],
    [0.25, 0.14],
    [0.14, 0.17],
    [0.12, 0.2],
    [0.12, 0.25],
    [0.095, 0.28],
    [0.08, 0.3],
  ];
  const o = lathe(x, y, z, profile, m, p);
  o.scale.setScalar(scale);
}
function collar(x, y, z, r, h = 0.13, m = mat.brass, p = statics, knurl = false) {
  cyl(x, y, z, r, r, h, m, p);
  ring(x, y - h * 0.4, z, r, 0.014, mat.gold, p);
  ring(x, y + h * 0.4, z, r, 0.014, mat.gold, p);
  if (knurl)
    for (let i = 0; i < 32; i++) {
      const a = (i * tau) / 32;
      rod(
        [x + r * Math.cos(a), y - h * 0.32, z + r * Math.sin(a)],
        [x + r * Math.cos(a + 0.035), y + h * 0.31, z + r * Math.sin(a + 0.035)],
        0.006,
        mat.bronze,
        p,
        0.006,
        5,
      );
    }
}
function stand(x, z, H, arms) {
  turned(x, 0.01, z, 1.19);
  cyl(x, 0.34 + H * 0.5, z, 0.041, 0.052, H, mat.brass);
  for (const y of [0.38, 0.49, H + 0.26]) collar(x, y, z, 0.075, 0.09);
  ball(x, H + 0.4, z, 0.077, 0.11, 0.077, mat.gold);
  for (const [y, xx, zz, r] of arms) {
    collar(x, y, z, 0.099, 0.17, mat.bronze, statics, true);
    rod([x, y, z], [xx, y, zz], 0.043, mat.brass);
    const a = Math.atan2(zz - z, xx - x);
    const dx = Math.sin(a) * 0.14,
      dz = -Math.cos(a) * 0.14;
    rod([x - dx, y, z - dz], [x + dx, y, z + dz], 0.021, mat.gold);
    ball(x + dx, y, z + dz, 0.054, 0.043, 0.054, mat.iron);
    ring(xx, y, zz, r, 0.026, mat.brass);
    ring(xx, y - 0.034, zz, r, 0.014, mat.aged);
  }
}
function shell(x, y, z, profile, m = glass, n = 84) {
  return lathe(x, y, z, profile, m, glassWorld, n);
}
function lip(x, y, z, r, m = tubeGlass, p = glassWorld) {
  return ring(x, y, z, r, 0.024, m, p);
}
function contents(x, y, z, profile, kind, n = 84) {
  const fill = profile.at(-1)[1],
    r = profile.at(-1)[0];
  const prof = [
    ...profile,
    [r * 0.986, fill + 0.012],
    [r * 0.93, fill - 0.002],
    [r * 0.7, fill - 0.009],
    [r * 0.38, fill - 0.011],
    [0.001, fill - 0.012],
  ];
  const m = fluid(kind, fill),
    o = lathe(x, y, z, prof, m, world, n);
  o.renderOrder = 1;
  const men = new T.MeshBasicMaterial({
    color: [0x8ef9bb, 0x83d9ff, 0xeec1db, 0xccd4ce][kind],
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
  });
  ring(x, y + fill + 0.007, z, r * 0.98, 0.007, men, world).renderOrder = 2;
  return o;
}
function pathGlass(path, r, color, offset, span, mercury = false, steps = 80) {
  const cc = Array.isArray(path) ? curve(path) : path;
  tube(cc, r, tubeGlass, glassWorld, steps, 14);
  tube(
    cc,
    r * (mercury ? 0.64 : 0.48),
    streamMaterial(color, offset, span, mercury),
    world,
    steps,
    12,
  );
}
function helix(a, b, r, turns, first = 0) {
  a = V(...a);
  b = V(...b);
  const axis = b.clone().sub(a).normalize(),
    ex = V(0, 0, 1).cross(axis).normalize(),
    ez = axis.clone().cross(ex);
  const points = [];
  for (let i = 0; i <= Math.ceil(turns * 26); i++) {
    const q = i / Math.ceil(turns * 26),
      ang = first + turns * tau * q;
    points.push(
      a
        .clone()
        .lerp(b, q)
        .addScaledVector(ex, r * Math.cos(ang))
        .addScaledVector(ez, r * Math.sin(ang)),
    );
  }
  return curve(points);
}
function retort() {
  const x = green,
    z = 0.1;
  // The body and neck share a single blown profile.
  const body = [
    [0.01, 0.81],
    [0.26, 0.86],
    [0.46, 0.96],
    [0.62, 1.12],
    [0.73, 1.33],
    [0.77, 1.56],
    [0.755, 1.75],
    [0.68, 1.95],
    [0.55, 2.11],
    [0.35, 2.24],
    [0.207, 2.35],
    [0.16, 2.51],
    [0.15, 2.84],
    [0.155, 2.96],
  ];
  etching(world, x, z, body, 1.17, 2.09, 0.58, 0.83, '♁', 'VITRIOL.');
  shell(x, 0, z, body);
  lip(x, 2.94, z, 0.157);
  contents(
    x,
    0,
    z,
    [
      [0.01, 0.846],
      [0.251, 0.89],
      [0.443, 0.988],
      [0.595, 1.146],
      [0.704, 1.345],
      [0.739, 1.55],
      [0.735, 1.675],
    ],
    0,
  );
  bulbs.push([x, z, 1.01, 1.675, 0.64, 80, 0]);
  headspace(x, 1.94, z, 0.54, 0.29, 0.54);
  // Three feet, dark fire cup, perforated burner crown and flame.
  lathe(
    x,
    0,
    z,
    [
      [0.01, 0.025],
      [0.28, 0.025],
      [0.37, 0.065],
      [0.39, 0.12],
      [0.38, 0.19],
      [0.32, 0.245],
      [0.22, 0.267],
      [0.19, 0.31],
      [0.18, 0.36],
      [0.01, 0.36],
    ],
    mat.copper,
  );
  [
    [0.365, 0.1],
    [0.32, 0.215],
    [0.19, 0.33],
  ].forEach(([r, y]) => ring(x, y, z, r, 0.018, mat.gold));
  for (let i = 0; i < 24; i++) {
    const a = (tau * i) / 24;
    ball(x + 0.182 * Math.cos(a), 0.33, z + 0.182 * Math.sin(a), 0.014, 0.035, 0.014, mat.iron);
  }
  flame(x, 0.37, z, 0.143, 0.45, true);
  for (let i = 0; i < 3; i++) {
    const a = (i * tau) / 3 + 0.2;
    rod(
      [x + 0.68 * Math.cos(a), 0.035, z + 0.68 * Math.sin(a)],
      [x + 0.44 * Math.cos(a), 1.0, z + 0.44 * Math.sin(a)],
      0.045,
      mat.iron,
    );
    ball(x + 0.68 * Math.cos(a), 0.04, z + 0.68 * Math.sin(a), 0.085, 0.038, 0.085, mat.brass);
  }
  ring(x, 1.025, z, 0.513, 0.052, mat.bronze);
  ring(x, 1.09, z, 0.57, 0.023, mat.gold);
  stand(x - 0.95, -0.14, 2.52, [
    [2.61, x, z, 0.18],
    [1.12, x, z, 0.586],
  ]);
  collar(x, 2.7, z, 0.176, 0.14, mat.brass, statics, true);
  collar(x, 2.88, z, 0.17, 0.06);
  const swan = [
    [x, 2.89, z],
    [x - 0.025, 3.17, z],
    [x + 0.1, 3.47, z],
    [x + 0.39, 3.57, z],
    [x + 0.61, 3.5, z],
    [x + 0.72, 3.31, z],
  ];
  pathGlass(swan, 0.118, 0xb2f5b7, 0, 0.37, false, 83);
  // The silver worm is enclosed in a horizontal, angled Liebig water jacket.
  const A = V(x + 0.72, 3.31, z),
    B = V(0.03, 2.9, -0.29),
    axis = B.clone().sub(A).normalize();
  const hel = helix(A.toArray(), B.toArray(), 0.121, 6.25, 0.1);
  tube(hel, 0.032, streamMaterial(0xbeced6, 0.37, 0.56, true), world, 174, 12);
  const mid = A.clone().lerp(B, 0.5);
  const jacket = obj(
    new T.CylinderGeometry(0.202, 0.202, A.distanceTo(B), 56, 1, true),
    ghostGlass,
    mid.x,
    mid.y,
    mid.z,
    glassWorld,
  );
  jacket.quaternion.setFromUnitVectors(V(0, 1, 0), axis);
  for (const t of [0.015, 0.098, 0.902, 0.985]) {
    const c = A.clone().lerp(B, t),
      o = cyl(c.x, c.y, c.z, 0.224, 0.224, 0.05, mat.gold);
    o.quaternion.copy(jacket.quaternion);
  }
  // Expansion trap at the low end catches a visible, agitated pool of quicksilver.
  const xx = B.x,
    zz = B.z;
  shell(
    xx,
    2.39,
    zz,
    [
      [0.006, 0],
      [0.097, 0.026],
      [0.153, 0.113],
      [0.163, 0.193],
      [0.139, 0.246],
      [0.074, 0.291],
      [0.057, 0.35],
      [0.057, 0.49],
    ],
    glass,
    56,
  );
  contents(
    xx,
    2.39,
    zz,
    [
      [0.006, 0.016],
      [0.087, 0.04],
      [0.141, 0.118],
      [0.148, 0.158],
    ],
    3,
    56,
  );
  collar(xx, 2.752, zz, 0.071, 0.066, mat.bronze);
  // Oblique coolant nipples and their amber compression ferrules.
  for (const u of [0.18, 0.8]) {
    const v = A.clone().lerp(B, u),
      end = v.clone().add(V(0.06, 0.29, -0.12));
    const nipple = curve([
      v.clone().add(V(0, 0.14, -0.06)),
      end,
      end.clone().add(V(0.09, 0.04, -0.04)),
    ]);
    tube(nipple, 0.041, tubeGlass, glassWorld, 24, 10);
    const nut = cyl(end.x, end.y, end.z, 0.062, 0.062, 0.055, mat.brass, statics, 8);
    nut.rotation.z = -0.69;
  }
  pathGlass(
    [
      B,
      B.clone().add(V(0.16, -0.028, -0.035)),
      V(0.32, 3.06, -0.46),
      V(0.37, 3.55, -0.45),
      V(0.59, 3.78, -0.24),
    ],
    0.085,
    0x97e8ed,
    0.93,
    0.34,
    false,
    75,
  );
  dial(x - 0.94, 1.89, -0.032, 0.241, -0.1);
  plate(x, 0.13, z + 0.83, 'VITRIOLUM', 'I   ·   IGNIS', 0.72);
}
function column() {
  const x = blue,
    z = blueZ;
  const top = 3.74,
    bottom = 1.87;
  const hel = helix([x, top, z], [x, bottom, z], 0.405, 5.58, 0.5);
  const s = hel.getPoint(0),
    e = hel.getPoint(1);
  pathGlass(
    [V(0.59, 3.78, -0.24), V(0.67, 3.92, -0.2), V(0.89, 3.91, -0.03), s],
    0.074,
    0x68d9fc,
    1.27,
    0.22,
  );
  pathGlass(hel, 0.083, 0x32bffc, 1.49, 1.24, false, 365);
  pathGlass(
    [
      e,
      e.clone().add(V(0.02, -0.1, -0.05)),
      V(x + 0.13, 1.69, z - 0.015),
      V(x, 1.65, z),
      V(x, 1.53, z),
    ],
    0.063,
    0x66d9fc,
    2.73,
    0.21,
  );
  lip(x, 1.53, z, 0.061);
  // Open-sided brass cage, separately supported from the delicate coil.
  const R = 0.538;
  for (const y of [bottom - 0.045, top + 0.045]) {
    ring(x, y, z, R, 0.044, mat.brass);
    ring(x, y + 0.055, z, R, 0.017, mat.gold);
    for (let j = 0; j < 3; j++) {
      const a = (j * tau) / 3 + 1.92;
      const xx = x + R * Math.cos(a),
        zz = z + R * Math.sin(a);
      ball(xx, y, zz, 0.058, 0.064, 0.058, mat.gold);
      if (y < 2) rod([xx, y, zz], [xx, top + 0.05, zz], 0.018, mat.brass);
    }
  }
  stand(x - 0.84, z - 0.53, 3.54, [
    [3.78, x, z, R],
    [1.817, x, z, R],
  ]);
  // Graduation scale in the rear of the condenser and inlet/outlet hose spigots.
  const hx = x + R * 0.89,
    hz = z - 0.22;
  box(hx, 2.81, hz, 0.061, 1.63, 0.039, mat.bronze);
  for (let i = 0; i < 35; i++) {
    const y = 2.02 + i * 0.046;
    box(hx - 0.012, y, hz + 0.023, i % 5 ? 0.028 : 0.063, 0.006, 0.004, mat.gold);
  }
  const recv = [
    [0.001, 0.035],
    [0.35, 0.035],
    [0.45, 0.08],
    [0.52, 0.19],
    [0.55, 0.49],
    [0.48, 0.71],
    [0.32, 0.87],
    [0.205, 0.955],
    [0.191, 1.055],
    [0.209, 1.125],
    [0.259, 1.18],
    [0.263, 1.215],
  ];
  shell(x, 0, z, recv, glass, 12);
  lip(x, 1.211, z, 0.256);
  contents(
    x,
    0,
    z,
    [
      [0.001, 0.069],
      [0.338, 0.07],
      [0.432, 0.108],
      [0.485, 0.2],
      [0.515, 0.46],
      [0.473, 0.645],
    ],
    1,
    12,
  );
  cyl(x, 0.048, z, 0.43, 0.41, 0.065, mat.brass, statics, 12);
  ring(x, 0.086, z, 0.432, 0.012, mat.gold);
  collar(x, 1.017, z, 0.215, 0.055);
  for (let i = 0; i < 12; i++) {
    const a = (i * tau) / 12,
      pt = (r, y) => [x + r * Math.sin(a), y, z + r * Math.cos(a)];
    tube(
      [pt(0.42, 0.091), pt(0.502, 0.208), pt(0.536, 0.462), pt(0.483, 0.65)],
      0.009,
      tubeGlass,
      glassWorld,
      25,
      6,
    );
  }
  bulbs.push([x, z, 0.19, 0.64, 0.415, 23, 1]);
  const m = dropletMaterial();
  for (let i = 0; i < 2; i++) {
    const o = ball(x, 1.52, z, 0.034, 0.06, 0.034, m, world);
    o.renderOrder = 3;
    drops.push(o);
  }
  for (let i = 0; i < 3; i++) {
    const m = new T.MeshBasicMaterial({
      color: 0xc8faff,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });
    const o = ring(x, 0.653 + i * 0.001, z, 1, 0.011, m, world, 72);
    o.renderOrder = 4;
    ripples.push(o);
  }
  const jet = m;
  for (let j = 0; j < 7; j++) {
    const o = ball(x, 0.65, z, 0.012, 0.013, 0.012, jet, world);
    o.renderOrder = 4;
    splash.push(o);
  }
  halo(x, 0.43, z, 0x16abff, 1.55, 0.18);
  plate(x, 0.13, z + 0.77, 'AQUA VITAE', 'II   ·   DISTILLATIO', 0.81);
}
function nebula() {
  const x = 2.5,
    z = -0.38;
  const P = [
    [0.001, 0.11],
    [0.35, 0.11],
    [0.415, 0.15],
    [0.413, 0.19],
    [0.306, 0.27],
    [0.33, 0.36],
    [0.47, 0.46],
    [0.58, 0.65],
    [0.619, 0.91],
    [0.594, 1.13],
    [0.495, 1.34],
    [0.37, 1.47],
    [0.214, 1.59],
    [0.155, 1.72],
    [0.139, 2.05],
    [0.175, 2.13],
    [0.181, 2.2],
  ];
  etching(world, x, z, P, 0.62, 1.34, 0.66, 0.73, '☾', 'NOCTIS');
  shell(x, 0, z, P, makeGlass(0xd8b3ff, 0.031, 0.88), 48);
  lip(x, 2.18, z, 0.18);
  contents(
    x,
    0,
    z,
    [
      [0.003, 0.144],
      [0.305, 0.15],
      [0.274, 0.265],
      [0.298, 0.372],
      [0.445, 0.485],
      [0.553, 0.67],
      [0.587, 0.908],
      [0.58, 1.031],
    ],
    2,
  );
  bulbs.push([x, z, 0.45, 1.032, 0.47, 32, 2]);
  collar(x, 0.15, z, 0.424, 0.087);
  collar(x, 1.89, z, 0.155, 0.13, mat.brass, statics, true);
  collar(x, 2.19, z, 0.201, 0.12);
  const facets = 10;
  for (let i = 0; i < facets; i++) {
    const a = (i * tau) / facets,
      pt = (r, y, tw = 0) => [x + r * Math.sin(a + tw), y, z + r * Math.cos(a + tw)];
    tube(
      [
        pt(0.326, 0.246),
        pt(0.325, 0.35, 0.05),
        pt(0.471, 0.462, 0.13),
        pt(0.589, 0.665, 0.21),
        pt(0.615, 0.903, 0.28),
      ],
      0.012,
      mat.gold,
      statics,
      41,
      7,
    );
  }
  lathe(
    x,
    2.21,
    z,
    [
      [0.12, 0],
      [0.13, 0.09],
      [0.061, 0.14],
      [0.06, 0.19],
      [0.126, 0.24],
      [0.109, 0.32],
      [0.001, 0.426],
    ],
    glass,
    glassWorld,
    8,
  );
  ring(x, 2.415, z, 0.072, 0.014, mat.gold);
  const p = [
    [0.85, 2.04, -0.16],
    [1.06, 1.9, -0.3],
    [1.32, 1.91, -0.61],
    [1.58, 2.18, -0.63],
    [1.76, 2.52, -0.6],
    [2.1, 2.56, -0.56],
    [2.26, 2.31, -0.48],
    [2.32, 2.08, z],
    [x, 1.93, z],
  ];
  pathGlass(p, 0.061, 0xb99ad9, 2.9, 0.9, false, 130);
  plate(x, 0.13, z + 0.84, 'TINCTURA', 'III   ·   ASTRUM', 0.69);
}
function makeParticles() {
  const geo = new T.SphereGeometry(1, 9, 7);
  const bubbleMat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    vertexShader: `varying vec3 n,v; void main(){vec4 p=modelViewMatrix*instanceMatrix*vec4(position,1.);
     v=normalize(-p.xyz);n=normalMatrix*mat3(instanceMatrix)*normal;gl_Position=projectionMatrix*p;}`,
    fragmentShader: `varying vec3 n,v;void main(){vec3 N=normalize(n);float r=pow(1.-abs(dot(N,normalize(v))),1.35);
     float sp=pow(max(0.,dot(N,normalize(vec3(-.4,.65,.7)))),12.);
     gl_FragColor=vec4(vec3(.46,.80,.74)*r+vec3(1.8,2.,1.7)*sp,.07+.73*r+.25*sp);}`,
  });
  const particles = [];
  for (const [x, z, lo, hi, r, count, kind] of bulbs)
    for (let i = 0; i < count; i++)
      particles.push({
        x,
        z,
        lo,
        hi,
        r,
        kind,
        angle: rand() * tau,
        dist: Math.sqrt(rand()) * 0.92,
        offset: rand(),
        speed: 0.43 + 0.74 * rand(),
        size: 0.011 + rand() ** 2 * 0.046,
      });
  bubbles = new T.InstancedMesh(geo, bubbleMat, particles.length);
  bubbles.userData.items = particles;
  bubbles.frustumCulled = false;
  bubbles.renderOrder = 3;
  world.add(bubbles);
  for (let i = 0; i < 46; i++) sparks.push([rand() * tau, rand(), rand(), rand()]);
  const makePoints = (items, col, dust) => {
    const geom = new T.BufferGeometry();
    geom.setAttribute(
      'position',
      new T.Float32BufferAttribute(new Float32Array(items.length * 3), 3),
    );
    geom.setAttribute('strength', new T.Float32BufferAttribute(new Float32Array(items.length), 1));
    const m = new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
      uniforms: { col: { value: new T.Color(col) }, screenH: { value: 720 } },
      vertexShader: `attribute float strength;varying float a;uniform float screenH;void main(){a=strength;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(screenH*${dust ? '.016' : '.026'}/(-p.z),1.4,${dust ? '5.' : '9.'});}`,
      fragmentShader: `uniform vec3 col;varying float a;void main(){vec2 uv=gl_PointCoord-.5;float l=length(uv);
      float peak=exp(-l*l*30.);${dust ? '' : 'peak+=.3*exp(-100.*abs(uv.x))*exp(-4.*abs(uv.y))+.3*exp(-100.*abs(uv.y))*exp(-4.*abs(uv.x));'}
      gl_FragColor=vec4(col*1.8,peak*a);}`,
    });
    const points = new T.Points(geom, m);
    points.frustumCulled = false;
    points.renderOrder = 4;
    world.add(points);
    points.userData.items = items;
    return points;
  };
  goldDust = makePoints(sparks, 0xffc04d, false);
  airMotes = makePoints(
    Array.from({ length: 115 }, () => [
      (rand() - 0.5) * 11,
      rand() * 5.5,
      (rand() - 0.5) * 5,
      rand() * tau,
    ]),
    0xffcf90,
    true,
  );
}
export function apparatus() {
  retort();
  column();
  nebula();
  makeParticles();
}
const dummy = new T.Object3D();
export const impactPhase = 0.83;
export const dripFrequency = 1.11;
export function animate(t, heat, height) {
  const elapsed = phase.value,
    q = (elapsed * dripFrequency) % 1;
  flames.forEach(([o, w, h, s, y]) => {
    const flutter = 1 + 0.09 * Math.sin(11 * t + s) + 0.055 * Math.sin(19 * t - s);
    const hh = h * flutter * (o.material === blueFlame ? 0.71 + 0.29 * Math.sqrt(heat) : 1);
    o.scale.set(w * (2 - flutter), hh * 0.5, w);
    o.position.y = y + hh * 0.5;
  });
  for (const [i, o] of drops.entries()) {
    const q2 = i === 0 ? q : (q + 0.5) % 1;
    if (i === 0) {
      // Grow at the spout, detach, accelerate through the open mouth, then impact.
      const fall = Math.min(1, Math.max(0, (q2 - 0.33) / 0.5)),
        grow = Math.min(1, 0.15 + q2 / 0.3);
      o.visible = q2 < impactPhase;
      o.position.set(blue, 1.505 - 0.855 * fall * fall, blueZ);
      o.scale.set(0.026 * grow, 0.032 * grow * (1 + 0.72 * fall), 0.026 * grow);
    } else {
      o.visible = q > 0.33;
      o.position.set(blue, 1.508, blueZ);
      o.scale.setScalar(0.016 + 0.01 * q2);
    }
  }
  ripples.forEach((o, i) => {
    const since = (q - impactPhase + 1) % 1,
      p = (since - i * 0.105) / 0.79;
    o.visible = p > 0 && p < 1;
    if (o.visible) {
      const r = 0.023 + 0.396 * p;
      o.scale.set(r, r, Math.max(0.28, 1 - p * 0.65));
      o.material.opacity = 0.78 * (1 - p) ** 1.6;
    }
  });
  splash.forEach((o, i) => {
    const u = ((q - impactPhase + 1) % 1) / 0.23,
      a = i * 2.39996 + Math.floor(elapsed * dripFrequency - impactPhase) * 1.73;
    o.visible = u < 1;
    if (o.visible) {
      const r = (0.028 + 0.097 * u) * (1 + i * 0.045);
      o.position.set(
        blue + r * Math.sin(a),
        0.648 + (0.27 + i * 0.016) * 4 * u * (1 - u),
        blueZ + r * Math.cos(a),
      );
      o.scale.setScalar(0.012 * (1 - u * 0.45));
    }
  });
  bubbles.userData.items.forEach((b, i) => {
    const u = (elapsed * b.speed + b.offset) % 1,
      r = b.r * b.dist * (0.44 + 0.56 * Math.sin((u * Math.PI) / 2));
    dummy.position.set(
      b.x + r * Math.cos(b.angle + 0.4 * u) + 0.021 * Math.sin(u * 15 + b.angle),
      b.lo + (b.hi - b.lo) * u,
      b.z + r * Math.sin(b.angle + 0.4 * u),
    );
    dummy.scale.setScalar(b.size * (0.44 + 0.7 * u) * Math.min(1, u * 12, (1 - u) * 22));
    dummy.updateMatrix();
    bubbles.setMatrixAt(i, dummy.matrix);
  });
  bubbles.instanceMatrix.needsUpdate = true;
  for (const [o, dust] of [
    [goldDust, false],
    [airMotes, true],
  ]) {
    const pos = o.geometry.attributes.position,
      str = o.geometry.attributes.strength;
    o.material.uniforms.screenH.value = height;
    o.userData.items.forEach(([a, b, c, d], i) => {
      if (dust) {
        pos.setXYZ(
          i,
          a + 0.1 * Math.sin(t * 0.2 + d),
          b + 0.13 * Math.cos(t * 0.21 + d),
          c + 0.11 * Math.sin(t * 0.14 + d),
        );
        str.setX(i, 0.15 + 0.22 * (0.5 + 0.5 * Math.sin(t * 0.64 + d)) ** 3);
      } else {
        const burst = (q - impactPhase + 1) % 1,
          u = (elapsed * (0.31 + c * 0.37) + b) % 1;
        const r = Math.sqrt(d) * 0.34 * (0.5 + 0.5 * Math.sin(u * Math.PI));
        pos.setXYZ(
          i,
          blue + r * Math.sin(a + u * 0.6),
          0.19 + u * (0.56 + 0.17 * c),
          blueZ + r * Math.cos(a + u * 0.6),
        );
        str.setX(
          i,
          Math.sin(Math.PI * u) ** 0.7 *
            (0.4 + 0.6 * Math.sin(7 * u + a) ** 2) *
            (0.5 + glow.value * 0.53) *
            (1 + 0.6 * Math.exp(-7 * burst)),
        );
      }
    });
    pos.needsUpdate = str.needsUpdate = true;
  }
}
