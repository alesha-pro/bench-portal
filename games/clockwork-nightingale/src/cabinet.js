import * as T from 'three';
import {
  M,
  TAU,
  group,
  mesh,
  ball,
  ring,
  rod,
  line,
  box,
  screw,
  cylinder,
  jewel,
  lathe,
  bake,
  canvasTex,
  mat,
  rng,
  cached
} from './craft.js';
import { plate, plateFinish } from './finishing.js';

export function timber(dark = false) {
  const rand = rng(dark ? 733 : 827);
  const map = canvasTex(1024, 512, (c, w, h) => {
    const im = c.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      const curl = 6 * Math.sin(y * 0.023) + 3 * Math.sin(y * 0.061);
      for (let x = 0; x < w; x++) {
        const drift = Math.sin(x * 0.005 + y * 0.011) * 7 + Math.sin(x * 0.012 - y * 0.031) * 2 + curl;
        const layer = y + drift,
          grain = Math.sin(layer * 0.53) + Math.sin(layer * 1.83) * 0.28;
        const flame =
          Math.sin(layer * 0.09 + Math.sin(x * 0.0051) * 1.1) + Math.cos(y * 0.04 - x * 0.0015) * 0.5;
        const noise = rand() * 6,
          shade =
            grain * (dark ? 3.6 : 4.7) +
            flame * (dark ? 5 : 9.1) +
            noise -
            (Math.cos(layer * 0.485) > 0.982 ? 11 : 0),
          i = (y * w + x) * 4;
        const rgb = dark ? [72, 36, 26] : [84, 49, 34];
        for (let k = 0; k < 3; k++) im.data[i + k] = rgb[k] + shade * [1, 0.65, 0.45][k];
        im.data[i + 3] = 255;
      }
    }
    c.putImageData(im, 0, 0);
    if (!dark) {
      for (const y of [23, 187, 347]) {
        c.fillStyle = 'rgba(28,17,10,.76)';
        c.fillRect(0, y, w, 2.1);
        c.fillStyle = 'rgba(213,153,91,.26)';
        c.fillRect(0, y + 2.2, w, 1);
      }
      for (let j = 0; j < 22; j++) {
        const x = rand() * w,
          y = rand() * h,
          r = 19 + rand() * 44;
        c.strokeStyle = 'rgba(39,23,12,.13)';
        c.lineWidth = 1.4;
        c.beginPath();
        c.ellipse(x, y, r, r * 0.77, 0.22, 0.5, 5.7);
        c.stroke();
      }
    }
    for (let n = 0; n < 790; n++) {
      const x = rand() * w,
        y = rand() * h;
      c.strokeStyle = rand() > 0.36 ? 'rgba(32,13,9,.18)' : 'rgba(228,160,103,.11)';
      c.lineWidth = rand() * 0.9 + 0.21;
      c.beginPath();
      c.moveTo(x, y);
      c.bezierCurveTo(x + 20, y + 0.9, x + 47, y - 1.3, x + 22 + rand() * 100, y - 1);
      c.stroke();
    }
  });
  map.wrapS = map.wrapT = T.RepeatWrapping;
  map.repeat.set(dark ? 3 : 4, dark ? 1 : 4);
  return mat(dark ? 0xe1c7b7 : 0xac9387, dark ? 0.2 : 0.07, dark ? 0.32 : 0.72, {
    envMapIntensity: dark ? 0.86 : 0.48,
    map,
    bumpMap: map,
    bumpScale: dark ? 0.011 : 0.021
  });
}
export function plinth(scene) {
  const root = group(scene),
    base = group(root),
    wood = timber(true);
  lathe(base, wood, [
    [0, 0.047],
    [1.63, 0.047],
    [1.74, 0.09],
    [1.79, 0.12],
    [1.79, 0.17],
    [1.75, 0.2],
    [1.77, 0.25],
    [1.84, 0.29],
    [1.86, 0.33],
    [1.86, 0.375],
    [1.81, 0.41],
    [1.78, 0.45],
    [0, 0.45]
  ]);
  for (const [r, y, m, t] of [
    [1.746, 0.099, M.bronze, 0.022],
    [1.793, 0.144, M.light, 0.011],
    [1.765, 0.208, M.black, 0.023],
    [1.779, 0.23, M.gold, 0.01],
    [1.845, 0.31, M.rose, 0.02],
    [1.86, 0.354, M.light, 0.011],
    [1.813, 0.405, M.gold, 0.015],
    [1.75, 0.45, M.bronze, 0.033],
    [1.72, 0.466, M.light, 0.012]
  ])
    ring(base, m, 0, y, 0, r, t, 'y');
  cylinder(base, M.enamelDark, 0, 0.454, 0, 1.694, 1.73, 0.036, 128);
  for (const r of [1.6, 1.56, 1.36, 1.32]) ring(base, M.brass, 0, 0.475, 0, r, 0.005, 'y');
  for (let i = 0; i < 120; i++) {
    const a = (i * TAU) / 120;
    const o = ball(base, M.antique, 1.773 * Math.cos(a), 0.256, 1.773 * Math.sin(a), 0.015, 0.028, 0.012);
    o.rotation.z = -0.23;
    o.rotation.y = -a;
    if (i % 3 === 0) {
      const r = 1.63;
      screw(base, r * Math.cos(a), 0.478, r * Math.sin(a), 0.018, 'y');
    }
  }
  for (let i = 0; i < 4; i++) {
    const a = ((i + 0.5) * TAU) / 4;
    ball(base, M.bronze, 1.3 * Math.cos(a), 0.055, 1.3 * Math.sin(a), 0.127, 0.08, 0.127);
  }
  const plaque = group(base, 0.26, 0.252, 1.776);
  plaque.rotation.y = 0.147;
  const cartouche = new T.Shape();
  cartouche.moveTo(-0.615, -0.107);
  cartouche.lineTo(0.615, -0.107);
  cartouche.quadraticCurveTo(0.61, -0.055, 0.67, -0.045);
  cartouche.lineTo(0.67, 0.045);
  cartouche.quadraticCurveTo(0.61, 0.055, 0.615, 0.107);
  cartouche.lineTo(-0.615, 0.107);
  cartouche.quadraticCurveTo(-0.61, 0.055, -0.67, 0.045);
  cartouche.lineTo(-0.67, -0.045);
  cartouche.quadraticCurveTo(-0.61, -0.055, -0.615, -0.107);
  cartouche.closePath();
  plate(plaque, cartouche, 0.063, 0.009);
  const inscription = canvasTex(1024, 160, (c, w, h) => {
    c.fillStyle = '#d6b478';
    c.fillRect(0, 0, w, h);
    const rand = rng(1876);
    for (let i = 0; i < 3500; i++) {
      c.fillStyle = 'rgba(65,40,17,0.055)';
      c.fillRect(rand() * w, rand() * h, rand() * 72, 0.8);
    }
    c.textAlign = 'center';
    c.font = '58px Georgia';
    c.fillStyle = '#422a17';
    c.fillText('L E   R O S S I G N O L', w / 2, 79);
    c.font = '25px Georgia';
    c.fillText('A U R E L I A N    ·    V I I    ·    M D C C C L X X V I', w / 2, 125);
    c.strokeStyle = '#876236';
    c.lineWidth = 2;
    c.strokeRect(5, 6, w - 10, h - 12);
  });
  mesh(
    plaque,
    new T.PlaneGeometry(1.18, 0.186),
    mat(0xffffff, 0.74, 0.34, { map: inscription, bumpMap: inscription, bumpScale: 0.0017 }),
    0,
    0,
    0.073
  );
  for (const x of [-0.623, 0.623]) screw(plaque, x, 0, 0.071, 0.025);
  bake(base);
  const deckTex = canvasTex(1024, 1024, (c, w, h) => {
    c.fillStyle = '#283d37';
    c.fillRect(0, 0, w, h);
    c.translate(w / 2, h / 2);
    for (let j = 0; j < 36; j++) {
      c.strokeStyle = j % 3 === 0 ? 'rgba(198,166,100,.39)' : 'rgba(138,139,98,.3)';
      c.lineWidth = 1;
      c.beginPath();
      for (let i = 0; i <= 1200; i++) {
        const a = (i * TAU) / 1200,
          r = 355 + j * 3.2 + 16 * Math.sin(48 * a + j * 0.18);
        c.lineTo(r * Math.cos(a), r * Math.sin(a));
      }
      c.closePath();
      c.stroke();
    }
    for (let j = 0; j < 140; j++) {
      const a = (j * TAU) / 140;
      c.rotate(a);
      c.fillStyle = '#95845a';
      c.fillRect(472, -1.15, j % 5 === 0 ? 22 : 8, 2.3);
      c.rotate(-a);
    }
  });
  const face = mesh(
    root,
    new T.CircleGeometry(1.68, 128),
    mat(0xffffff, 0.56, 0.47, { map: deckTex }),
    0,
    0.477,
    0
  );
  face.rotation.x = -Math.PI / 2;
  const dial = group(root, 1.06, 0.573, 1.01);
  dial.rotation.x = -0.99;
  dial.rotation.z = 0.23;
  dial.scale.setScalar(0.86);
  const dialParts = group(dial);
  for (const [z, r, mt] of [
    [-0.04, 0.323, M.antique],
    [-0.015, 0.31, M.gold],
    [0.012, 0.29, M.black]
  ])
    cylinder(dialParts, mt, 0, 0, z, r, r, 0.042, 64, 'z');
  const dt = canvasTex(512, 512, (c, w, h) => {
    c.fillStyle = '#ddd0aa';
    c.fillRect(0, 0, w, h);
    c.translate(256, 256);
    for (const r of [228, 216, 178, 79]) {
      c.beginPath();
      c.arc(0, 0, r, 0, TAU);
      c.strokeStyle = '#7d765e';
      c.lineWidth = r === 216 ? 2 : 1;
      c.stroke();
    }
    for (let i = 0; i <= 50; i++) {
      const a = ((-215 + i * 5) * Math.PI) / 180;
      c.save();
      c.rotate(a);
      c.fillStyle = i < 8 ? '#91482c' : '#333e36';
      c.fillRect(185, -(i % 5 ? 1.6 : 3), i % 5 ? 12 : 24, i % 5 ? 3.2 : 6);
      c.restore();
    }
    c.textAlign = 'center';
    c.fillStyle = '#374138';
    c.font = '30px Georgia';
    for (let i = 0; i <= 5; i++) {
      const a = ((-215 + i * 50) * Math.PI) / 180;
      c.fillText(String(i * 20), 151 * Math.cos(a), 151 * Math.sin(a) + 10);
    }
    c.font = '22px Georgia';
    c.fillText('R É S E R V E', 0, 86);
    c.font = 'italic 16px Georgia';
    c.fillText('Aurelian', 0, 116);
  });
  mesh(dialParts, new T.CircleGeometry(0.278, 64), mat(0xffffff, 0.13, 0.45, { map: dt }), 0, 0, 0.036);
  ring(dialParts, M.light, 0, 0, 0.035, 0.281, 0.009);
  bake(dialParts);
  const needle = group(dial, 0, 0, 0.047);
  rod(needle, M.blue, [-0.056, 0, 0], [0.207, 0, 0], 0.016, 0.003, 8);
  ball(needle, M.ruby, 0, 0, 0.008, 0.025, 0.025, 0.012);
  bake(needle);
  const key = group(root, 1.49, 0.42, 0.68);
  key.rotation.y = -0.29;
  const handle = group(key, 0.51, 0, 0);
  const collar = group(key);
  for (const [x, r, d, m] of [
    [0.15, 0.088, 0.4, M.bronze],
    [0.28, 0.107, 0.085, M.gold],
    [0.335, 0.064, 0.1, M.black],
    [0.42, 0.055, 0.2, M.brass]
  ])
    cylinder(collar, m, x, 0, 0, r, r, d, 32, 'x');
  bake(collar);
  for (const s of [-1, 1]) {
    const rr = ring(handle, M.gold, 0.09, s * 0.13, 0, 0.116, 0.03);
    rr.scale.x = 1.23;
    rod(handle, M.gold, [0, 0, 0], [0.075, s * 0.092, 0], 0.046, 0.032);
  }
  screw(handle, 0.084, 0, 0.024, 0.03);
  bake(handle);
  return {
    key: handle,
    update(w, t, reserve) {
      needle.rotation.z = ((215 - reserve * 250) * Math.PI) / 180;
      handle.rotation.x = w * TAU * 2.15;
    }
  };
}
function leaf(p, a, b, width) {
  const A = new T.Vector3(...a),
    D = new T.Vector3(...b).sub(A);
  const g = group(p, ...a),
    shape = new T.Shape();
  const len = D.length();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(-width * 0.38, len * 0.12, -width, len * 0.51, 0, len);
  shape.bezierCurveTo(width * 0.83, len * 0.69, width * 0.65, len * 0.22, 0, 0);
  const geom = new T.ExtrudeGeometry(shape, {
    depth: 0.013,
    bevelSize: 0.006,
    bevelThickness: 0.004,
    bevelSegments: 1,
    curveSegments: 8
  });
  const hammer = cached('planished leaf bronze', () => {
    const relief = canvasTex(
      256,
      256,
      (c, w, h) => {
        c.fillStyle = '#aaa';
        c.fillRect(0, 0, w, h);
        const rand = rng(241);
        for (let i = 0; i < 720; i++) {
          const x = rand() * w,
            y = rand() * h,
            r = 3 + rand() * 9;
          const d = c.createRadialGradient(x - r * 0.28, y - r * 0.32, 0, x, y, r);
          d.addColorStop(0, '#636363');
          d.addColorStop(0.74, '#a3a3a3');
          d.addColorStop(0.9, '#c4c4c4');
          d.addColorStop(1, 'rgba(160,160,160,0)');
          c.fillStyle = d;
          c.fillRect(x - r, y - r, r * 2, r * 2);
        }
      },
      false
    );
    relief.wrapS = relief.wrapT = T.RepeatWrapping;
    relief.repeat.setScalar(3.1);
    return mat(0xb17b46, 0.83, 0.39, { bumpMap: relief, bumpScale: 0.0018 });
  });
  mesh(g, geom, hammer);
  line(
    g,
    M.gold,
    [
      [0, 0, 0.023],
      [-width * 0.11, len * 0.46, 0.034],
      [0, len, 0.018]
    ],
    0.006,
    9
  );
  for (let i = 0; i < 3; i++)
    for (const s of [-1, 1])
      line(
        g,
        M.brass,
        [
          [0, len * (0.18 + i * 0.16), 0.027],
          [width * 0.42 * s, len * (0.32 + i * 0.15), 0.023]
        ],
        0.0036,
        4
      );
  g.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), D.normalize());
}
export function branch(scene) {
  const b = group(scene);
  const main = [
    [-0.79, 0.5, -0.24],
    [-0.73, 0.97, -0.25],
    [-0.65, 1.32, -0.22],
    [-0.42, 1.61, -0.12],
    [-0.22, 1.75, -0.04],
    [0.18, 1.81, 0.04],
    [0.56, 1.84, 0.08],
    [0.89, 1.96, 0.03],
    [1.14, 2.18, -0.06]
  ];
  const curve = new T.CatmullRomCurve3(main.map((a) => new T.Vector3(...a))),
    pts = curve.getPoints(35);
  for (let i = 0; i < pts.length - 1; i++) {
    const r = 0.088 - (0.053 * i) / 35;
    rod(b, M.bronze, pts[i].toArray(), pts[i + 1].toArray(), r, r - 0.001, 20);
    ball(b, M.antique, ...pts[i].toArray(), r * 0.98);
  }
  for (let k = 0; k < 4; k++) {
    const lace = pts.map((v, i) => [
      v.x + 0.057 * Math.cos(i * 0.44 + (k * Math.PI) / 2),
      v.y + 0.048 * Math.sin(i * 0.44 + (k * Math.PI) / 2),
      v.z + 0.06 * Math.sin(i * 0.44 + (k * Math.PI) / 2)
    ]);
    line(b, k % 2 ? M.rose : M.gold, lace, 0.012, 60);
  }
  const curls = [
    [
      [-0.66, 1.17, -0.23],
      [-0.89, 1.41, -0.21],
      [-1.24, 1.49, -0.18],
      [-1.4, 1.7, -0.17],
      [-1.4, 1.9, -0.16],
      [-1.26, 1.95, -0.16],
      [-1.2, 1.84, -0.16],
      [-1.29, 1.79, -0.14]
    ],
    [
      [-0.67, 1.27, -0.25],
      [-0.7, 1.62, -0.28],
      [-0.84, 1.87, -0.31],
      [-1.04, 2.03, -0.29],
      [-1.16, 2.22, -0.24]
    ],
    [
      [0.33, 1.81, 0.08],
      [0.61, 1.67, 0.13],
      [0.91, 1.62, 0.1],
      [1.15, 1.68, 0.1],
      [1.23, 1.84, 0.06],
      [1.13, 1.91, 0.1],
      [1.05, 1.85, 0.11],
      [1.12, 1.79, 0.1]
    ],
    [
      [0.88, 1.96, 0.03],
      [1.15, 2.02, -0.05],
      [1.33, 2.19, -0.06],
      [1.36, 2.39, -0.12]
    ]
  ];
  curls.forEach((arr, i) => {
    line(b, M.gold, arr, 0.027 - i * 0.002, 32);
    for (let j = 2; j < arr.length - 1; j += 2) {
      const [x, y, z] = arr[j],
        s = i < 2 ? -1 : 1;
      leaf(b, [x, y, z], [x + s * (0.14 + 0.019 * j), y + 0.13, z + 0.031], 0.068);
      if (j === 2) leaf(b, [x, y, z], [x - s * 0.044, y + 0.24, z - 0.03], 0.065);
    }
  });
  const garnetEnamel = new T.MeshPhysicalMaterial({
    color: 0x67102b,
    roughness: 0.2,
    metalness: 0.31,
    clearcoat: 1,
    clearcoatRoughness: 0.09
  });
  for (const [cx, cy, cz, side] of [
    [1.31, 2.19, -0.04, 1],
    [0.92, 1.65, 0.11, 1],
    [-1.36, 1.72, -0.16, -1]
  ]) {
    for (let j = 0; j < 3; j++) {
      const dx = (0.042 + 0.079 * j) * side,
        dy = -0.073 - (j % 2) * 0.08,
        dz = 0.042 + j * 0.032;
      const tip = [cx + dx, cy + dy, cz + dz];
      line(b, M.rose, [[cx, cy, cz], [cx + dx * 0.72, cy + 0.018, cz + dz * 0.37], tip], 0.009, 12);
      ball(b, j === 1 ? M.ruby : garnetEnamel, ...tip, 0.051, 0.062, 0.05);
      ring(b, M.gold, tip[0], tip[1] + 0.038, tip[2], 0.035, 0.006, 'y');
    }
  }
  for (const [r, y] of [
    [0.18, 0.494],
    [0.137, 0.53],
    [0.1, 0.58]
  ])
    cylinder(b, M.gold, -0.79, y, -0.24, r, r, 0.041, 36);
  bake(b);
}
export function dome(scene) {
  const dome = group(scene),
    R = 1.85,
    profile = [
      [R - 0.012, 0.429],
      [R + 0.006, 0.448],
      [R + 0.005, 0.478],
      [R, 0.5],
      [R, 2.77]
    ];
  for (let i = 1; i <= 42; i++) {
    const a = (i * Math.PI) / 2 / 42;
    profile.push([R * Math.cos(a), 2.77 + 1.67 * Math.sin(a)]);
  }
  const shader = new T.ShaderMaterial({
    uniforms: { opacity: { value: 1 } },
    transparent: true,
    depthWrite: false,
    side: T.FrontSide,
    vertexShader: `varying vec3 wp; varying vec3 norm; void main(){wp=(modelMatrix*vec4(position,1.)).xyz;norm=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
    fragmentShader: `uniform float opacity; varying vec3 wp; varying vec3 norm;
      float band(float v,float p,float w){return exp(-pow((v-p)/w,2.));}
      void main(){vec3 n=normalize(norm),v=normalize(cameraPosition-wp),r=reflect(-v,n);
      float f=pow(1.-max(0.,dot(n,v)),5.1),az=atan(r.x,r.z),y=r.y;
      float a=band(az,-1.65,.095)*band(y,.25,.34)+.5*band(az,-1.84,.026)*band(y,.35,.36);
      float b=band(az,2.26,.14)*band(y,.37,.45)+.6*band(az,2.51,.045)*band(y,.47,.35);
      float c=band(y,.85,.013)*band(az,-.45,.59);
      float edge=pow(1.-max(0.,dot(n,v)),32.);
      float seam=band(az,-2.84,.026)*band(y,.30,.48)+band(az,2.89,.012)*band(y,.22,.51);
      vec3 col=(vec3(.72,.84,.80)*(f+edge+seam)+vec3(.98,.86,.63)*a+vec3(.68,.82,.94)*b+vec3(1.,.94,.80)*c)/(f+edge+seam+a+b+c+.0001);
      gl_FragColor=vec4(col,opacity*(.002+f*.098+edge*.38+a*.064+b*.064+c*.15+seam*.24));
      #include <colorspace_fragment>
      }`
  });
  const glass = lathe(dome, shader, profile, 160);
  glass.renderOrder = 6;
  glass.castShadow = glass.receiveShadow = false;
  const foot = group(dome);
  for (const [rr, y, t] of [
    [R, 0.455, 0.014],
    [R - 0.007, 0.476, 0.007]
  ])
    ring(foot, M.gold, 0, y, 0, rr, t, 'y');
  const crown = group(foot, 0, 4.438, 0);
  for (const [r, y, h, m] of [
    [0.109, 0, 0.022, M.antique],
    [0.078, 0.019, 0.029, M.light],
    [0.047, 0.042, 0.034, M.gold]
  ])
    cylinder(crown, m, 0, y, 0, r, r * 1.1, h, 48);
  lathe(
    crown,
    M.brass,
    [
      [0.128, 0.012],
      [0.148, 0.022],
      [0.1, 0.047],
      [0.079, 0.079],
      [0.068, 0.13],
      [0.046, 0.154],
      [0.022, 0.197],
      [0, 0.211]
    ],
    60
  );
  for (let j = 0; j < 8; j++) {
    const petal = group(crown);
    petal.rotation.y = (j * TAU) / 8;
    line(
      petal,
      M.light,
      [
        [0.135, 0.028, 0],
        [0.092, 0.058, 0],
        [0.064, 0.126, 0],
        [0.023, 0.173, 0]
      ],
      0.008,
      14
    );
  }
  ring(crown, M.gold, 0, 0.295, 0, 0.108, 0.023);
  ring(crown, M.light, 0, 0.295, 0, 0.089, 0.005);
  ball(crown, M.rose, 0, 0.191, 0, 0.041, 0.022, 0.041);
  bake(foot);
  return {
    update(e, cut) {
      dome.position.y = e * 1.72;
      shader.uniforms.opacity.value = cut ? 0.14 : 1;
      foot.visible = !cut;
    },
    root: dome
  };
}
