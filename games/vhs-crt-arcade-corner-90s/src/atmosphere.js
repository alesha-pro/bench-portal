import * as T from 'three';
import {
  group,
  mesh,
  box,
  panel,
  ball,
  cylinder,
  wire,
  canvasTex,
  ink,
  speckle,
  surface,
  lum,
  print,
  rubber,
  iron,
  brass,
  wood,
  shadow,
  rand,
} from './craft.js';
import { posterMaps } from './printshop.js';

const wallMap = canvasTex(1024, 512, (c, w, h) => {
  c.fillStyle = '#55464c';
  c.fillRect(0, 0, w, h);
  for (let i = 0; i < w; i += 4) {
    c.fillStyle = rand() < 0.5 ? 'rgba(235,213,163,.043)' : 'rgba(12,20,22,.07)';
    c.fillRect(i, 0, rand() * 4, h);
  }
  for (let i = 0; i < w; i += 128) {
    c.fillStyle = '#372f34';
    c.fillRect(i, 0, 3, h);
    c.fillStyle = '#837267';
    c.fillRect(i + 4, 0, 2, h);
  }
  speckle(c, w, h, 48000);
});
wallMap.wrapS = T.RepeatWrapping;
wallMap.wrapT = T.RepeatWrapping;
wallMap.repeat.set(2, 1.2);
const wall = surface('#b5a2a7', 0.91, 0, wallMap);
const night = canvasTex(1024, 800, (c, w, h) => {
  let g = c.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#0b1731');
  g.addColorStop(0.49, '#3f6680');
  g.addColorStop(0.83, '#536a82');
  g.addColorStop(1, '#23344b');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
  c.filter = 'blur(2px)';
  for (let j = 0; j < 3; j++)
    for (let i = 0; i < 20; i++) {
      let x = rand() * w,
        y = 265 + rand() * 320 + j * 55,
        ww = 25 + rand() * 128;
      c.fillStyle = ['#314660', '#283b54', '#192d43'][j];
      c.fillRect(x, y, ww, h - y);
      for (let wy = y + 8; wy < h; wy += 14)
        for (let wx = x + 8; wx < x + ww - 5; wx += 12) {
          if (rand() > 0.77) {
            c.fillStyle = rand() < 0.54 ? '#a2907f' : '#7fadb1';
            c.fillRect(wx, wy, 3 + rand() * 4, 4);
          }
        }
    }
  c.strokeStyle = '#192938';
  c.lineWidth = 7;
  c.beginPath();
  c.moveTo(23, 312);
  c.quadraticCurveTo(508, 503, 1024, 210);
  c.stroke();
  c.lineWidth = 3;
  c.beginPath();
  c.moveTo(20, 326);
  c.quadraticCurveTo(508, 519, 1024, 224);
  c.stroke();
  c.filter = 'none';
  for (let i = 0; i < 36; i++) {
    let x = rand() * w,
      y = 530 + rand() * 250,
      g = c.createRadialGradient(x, y, 1, x, y, 12 + rand() * 25);
    g.addColorStop(0, rand() < 0.5 ? '#d3a17f99' : '#a3d7e179');
    g.addColorStop(1, '#a1bdd500');
    c.fillStyle = g;
    c.fillRect(x - 40, y - 40, 80, 80);
  }
  speckle(c, w, h, 22000);
});
function windowGlass(p, x, y, z, w, h) {
  const uniforms = { tm: { value: 0 }, flash: { value: 0 }, night: { value: night } };
  const mat = new T.ShaderMaterial({
    uniforms,
    vertexShader:
      'varying vec2 u; void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `
 varying vec2 u;uniform float tm,flash;uniform sampler2D night;
 float hash(vec2 v){return fract(sin(dot(v,vec2(123.3,74.7)))*4375.5453);}
 void main(){vec2 p=u*vec2(49.,32.);vec2 id=floor(p);float h=hash(id);vec2 d=fract(p)-vec2(.16+.65*h,.17+.64*hash(id+7.));d.y*=.66;
 float drop=(1.-smoothstep(.045,.108,length(d)))*step(.28,h);vec2 r=u+drop*d*.18;
 vec3 c=.86*pow(texture2D(night,r).rgb,vec3(.50));c+=vec3(.30,.43,.5)*drop*max(.1,-d.y*11.);
 vec2 v=vec2((u.x+.067*u.y)*113.,u.y*4.+tm*1.5);float streak=step(.963,fract(v.x))*smoothstep(.76,.98,fract(v.y+hash(vec2(floor(v.x),1.))));c+=vec3(.13,.27,.38)*streak;
 c+=vec3(.40,.48,.57)*flash*(.42+.58*u.y);gl_FragColor=vec4(pow(c,vec3(1.6)),1.);
 #include <colorspace_fragment>
 }`,
  });
  panel(p, x, y, z, w, h, mat);
  const trim = surface('#5a4540', 0.49, 0.18),
    slats = surface('#899099', 0.4, 0.42);
  for (let s of [-1, 1]) {
    box(p, x + s * (w / 2 + 0.062), y, z + 0.07, 0.12, h + 0.22, 0.18, trim, 0.024);
    box(p, x, y + s * (h / 2 + 0.065), z + 0.07, w + 0.24, 0.14, 0.19, trim, 0.02);
  }
  box(p, x, y, z + 0.07, 0.059, h, 0.08, trim);
  box(p, x, y - h / 2 - 0.1, z + 0.14, w + 0.4, 0.105, 0.42, wood, 0.025);
  for (let i = 0; i < 14; i++) {
    let sl = box(p, x, y + h * 0.49 - i * h * 0.044, z + 0.16, w * 0.99, 0.032, 0.111, slats, 0.009);
    sl.rotation.x = -0.3 + 0.026 * Math.sin(i);
    sl.rotation.z = 0.004 * Math.sin(i * 0.4);
  }
  for (let s of [-0.38, 0.36])
    wire(
      p,
      [
        [x + w * s, y + h * 0.51, z + 0.177],
        [x + w * s, y - h * 0.095, z + 0.18],
      ],
      0.006,
      iron,
      3,
      false,
    );
  wire(
    p,
    [
      [x + w * 0.455, y + h * 0.5, z + 0.2],
      [x + w * 0.458, y - h * 0.37, z + 0.22],
      [x + w * 0.45, y - h * 0.39, z + 0.229],
    ],
    0.01,
    brass,
    9,
  );
  return uniforms;
}
function neon(p, x, y, z) {
  let g = group(p, x, y, z);
  let w = 3.04,
    h = 1.28;
  box(g, 0, 0, -0.04, w + 0.07, h + 0.07, 0.16, surface('#483b40', 0.38, 0.43), 0.065);
  const m = canvasTex(1200, 500, (c, W, H) => {
    c.fillStyle = '#28222e';
    c.fillRect(0, 0, W, H);
    c.strokeStyle = '#74605f';
    c.lineWidth = 5;
    c.strokeRect(12, 12, W - 24, H - 24);
    for (let i = 20; i < H - 20; i += 5) {
      c.fillStyle = '#ffffff03';
      c.fillRect(20, i, W - 40, 1);
    }
    ink(c, 'M  I  D  N  I  G  H  T', 600, 90, 36, '#f0aea0', true, 'center', 'monospace');
    c.fillStyle = '#8e605e';
    c.fillRect(115, 71, 248, 2);
    c.fillRect(837, 71, 248, 2);
    c.save();
    c.transform(1, 0, -0.16, 1, 54, 0);
    c.font = '900 254px "Liberation Sans",sans-serif';
    c.textAlign = 'center';
    c.lineJoin = 'round';
    c.shadowColor = '#ff283a';
    c.shadowBlur = 42;
    c.strokeStyle = '#fa3955';
    c.lineWidth = 12;
    c.strokeText('VIDEO', 600, 335);
    c.shadowBlur = 12;
    c.strokeStyle = '#ff786b';
    c.lineWidth = 7;
    c.strokeText('VIDEO', 600, 335);
    c.shadowBlur = 0;
    c.strokeStyle = '#ffb49e';
    c.lineWidth = 2.7;
    c.strokeText('VIDEO', 600, 335);
    c.restore();
    ink(
      c,
      'T A P E   R E N T A L S     •     O P E N   L A T E',
      600,
      425,
      24,
      '#e4a694',
      true,
      'center',
      'monospace',
    );
    speckle(c, W, H, 14500);
  });
  panel(g, 0, 0, 0.045, w, h, print(m, 1.57));
  wire(
    g,
    [
      [1.36, -0.65, -0.04],
      [1.41, -0.95, -0.11],
      [1.32, -1.18, -0.13],
      [1.3, -2.3, -0.14],
    ],
    0.016,
    rubber,
  );
}
function poster(p, x, y, z, w, h, id, angle) {
  let g = group(p, x, y, z);
  g.rotation.z = angle;
  panel(g, 0.018, -0.023, -0.003, w + 0.025, h + 0.02, rubber);
  panel(g, 0, 0, 0.003, w, h, print(posterMaps[id], 0.115));
  let tape = surface('#af9479', 0.83);
  for (let n of [-1, 1])
    box(g, n * (w * 0.37), h / 2, 0.007, w * 0.18, 0.055, 0.007, tape).rotation.z = n * 0.12;
}
export function buildRoom(p) {
  box(p, 0, 3.2, -2.08, 14, 8, 0.17, wall);
  box(p, -5.8, 3.2, 0.5, 0.19, 8, 5.4, wall);
  box(p, 5.95, 3.1, 0.6, 0.18, 8, 5.5, wall);
  box(p, 0, -0.1, 0.4, 14, 0.16, 10, wood);
  const win = windowGlass(p, -3.58, 3.04, -1.965, 3.45, 3.53);
  poster(p, 4.46, 3.72, -1.969, 1.03, 1.45, 0, -0.042);
  poster(p, 5.43, 3.21, -1.958, 0.78, 1.12, 1, 0.047);
  poster(p, -1.32, 4.32, -1.971, 0.7, 0.98, 3, 0.072);
  poster(p, -1.94, 4.03, -1.959, 0.5, 0.72, 2, -0.105);
  poster(p, 3.48, 3.18, -1.944, 0.66, 0.94, 4, 0.054);
  neon(p, 1.78, 4.22, -1.875);
  for (let x of [-4.1, -0.15, 3.15]) shadow(p, x, 2.31, -1.973, 3.6, 4.4, false);
  // Oil-finished desk, bullnose trim and open shelves.
  box(p, 0, 0.86, -0.08, 10.32, 0.19, 3.12, wood, 0.055);
  box(p, 0, 0.772, 1.399, 10.28, 0.082, 0.114, surface('#805438', 0.43), 0.029);
  for (let x of [-4.91, -2.0, 2.35, 4.88]) box(p, x, 0.35, -0.24, 0.15, 0.78, 2.51, wood, 0.025);
  box(p, 0, 0.12, -0.28, 9.8, 0.12, 2.35, wood, 0.025);
  box(p, 0, 0.43, -1.31, 10, 0.8, 0.1, surface('#433537'));
  box(p, 0, 0.54, 0.97, 3.94, 0.37, 0.43, wood, 0.025);
  box(p, 0, 0.42, 1.193, 0.63, 0.065, 0.064, iron, 0.015);
  return win;
}
export function deskLamp(p, x, y, z) {
  let g = group(p, x, y, z),
    paint = surface('#47706b', 0.36, 0.42),
    inside = lum('#ffcb83', 1.65);
  cylinder(g, 0, 0.045, 0, 0.255, 0.29, 0.09, paint);
  cylinder(g, 0, 0.105, 0, 0.188, 0.24, 0.06, paint);
  const joints = [
    [0, 0.14, 0],
    [-0.16, 0.77, -0.12],
    [0.29, 1.24, -0.18],
  ];
  for (let n of [-0.045, 0.045])
    for (let j = 0; j < 2; j++)
      wire(
        g,
        [joints[j], joints[j + 1]].map(([a, b, d]) => [a, b, d + n]),
        0.023,
        brass,
        4,
        false,
      );
  joints.forEach(([a, b, d]) => {
    diskLocal(g, a, b, d, 0.069, paint);
  });
  let sh = group(g, 0.34, 1.24, -0.14);
  sh.rotation.z = 0.42;
  sh.rotation.x = -0.23;
  const profile = [
    [0.022, 0.12],
    [0.105, 0.12],
    [0.123, 0.085],
    [0.13, 0.025],
    [0.24, -0.095],
    [0.293, -0.215],
    [0.297, -0.242],
    [0.278, -0.252],
  ];
  mesh(
    sh,
    new T.LatheGeometry(
      profile
        .slice()
        .reverse()
        .map(([a, b]) => new T.Vector2(a, b)),
      48,
    ),
    paint,
  );
  cylinder(sh, 0, -0.244, 0, 0.276, 0.276, 0.012, inside);
  ball(sh, 0, -0.242, 0, 0.069, 0.061, 0.069, lum('#fff0c1', 2.3));
  wire(
    g,
    [
      [-0.05, 0.1, 0],
      [-0.24, 0.05, 0.13],
      [-0.39, 0.023, 0.08],
      [-0.5, 0.018, -0.38],
      [-0.32, -0.1, -1.1],
    ],
    0.015,
    rubber,
  );
  shadow(p, x, y + 0.007, z, 0.91, 0.85);
}
function diskLocal(p, x, y, z, r, m) {
  let o = cylinder(p, x, y, z, r, r, 0.14, m);
  o.rotation.x = Math.PI / 2;
}
export function lava(p, x, y, z) {
  let g = group(p, x, y, z),
    steel = surface('#adb3af', 0.27, 0.7);
  cylinder(g, 0, 0.14, 0, 0.115, 0.24, 0.28, steel);
  cylinder(g, 0, 0.31, 0, 0.198, 0.115, 0.08, steel);
  const outline = [
    [0.16, 0.34],
    [0.198, 0.41],
    [0.186, 0.55],
    [0.086, 1.02],
    [0.062, 1.1],
  ];
  const glass = new T.MeshPhysicalMaterial({
    color: '#e77c91',
    roughness: 0.16,
    metalness: 0.17,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
    side: T.DoubleSide,
    clearcoat: 1,
  });
  mesh(
    g,
    new T.LatheGeometry(
      outline.map(([a, b]) => new T.Vector2(a, b)),
      40,
    ),
    glass,
  );
  cylinder(g, 0, 1.11, 0, 0.064, 0.086, 0.14, steel);
  let blobs = [];
  for (let i = 0; i < 5; i++) {
    let b = ball(
      g,
      0,
      0.4,
      0,
      0.1,
      0.1,
      0.1,
      new T.MeshStandardMaterial({
        color: i % 2 ? '#f67666' : '#fda845',
        emissive: i % 2 ? '#ed3d42' : '#ef702c',
        emissiveIntensity: 0.73,
        roughness: 0.29,
        metalness: 0.08,
      }),
    );
    b.userData.dynamic = true;
    blobs.push(b);
  }
  shadow(p, x, y + 0.007, z, 0.65, 0.59);
  return (t) =>
    blobs.forEach((b, i) => {
      let a = t * 0.42 + i * 1.8,
        q = 0.5 + 0.5 * Math.sin(a);
      b.position.set(
        0.052 * Math.sin(a * 1.2) * (1 - q * 0.6),
        0.4 + 0.58 * q,
        0.05 * Math.cos(a * 1.31) * (1 - q * 0.6),
      );
      let r = 0.111 - q * 0.067;
      b.scale.set(r, r * (1.05 + 0.53 * q), r);
    });
}
