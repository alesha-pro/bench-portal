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
  jewel,
  cylinder,
  lathe,
  bake,
  canvasTex,
  mat,
  rng
} from './craft.js';
import { wheel } from './gears.js';
import { plate } from './finishing.js';
import { timber } from './cabinet.js';

function velvet(teal = false) {
  const rand = rng(171),
    map = canvasTex(512, 512, (c, w, h) => {
      const im = c.createImageData(w, h);
      for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
          const k = (y * w + x) * 4,
            v =
              rand() * 13 +
              Math.sin(x * 0.9 + y * 0.47) * 2.2 +
              2.1 * Math.sin(x * 0.04 + Math.sin(y * 0.027));
          im.data[k] = (teal ? 11 : 27) + v;
          im.data[k + 1] = (teal ? 37 : 14) + v * 0.59;
          im.data[k + 2] = (teal ? 37 : 23) + v * 0.75;
          im.data[k + 3] = 255;
        }
      c.putImageData(im, 0, 0);
    });
  map.wrapS = map.wrapT = T.RepeatWrapping;
  map.repeat.set(5, 4);
  return new T.MeshPhysicalMaterial({
    color: 0xffffff,
    map,
    roughness: 0.93,
    sheen: 0.7,
    sheenRoughness: 0.92,
    sheenColor: teal ? 0x347267 : 0x462639,
    bumpMap: map,
    bumpScale: 0.008
  });
}
function blueprint() {
  return canvasTex(1024, 700, (c, W, H) => {
    const rand = rng(108);
    c.fillStyle = '#b6a27b';
    c.fillRect(0, 0, W, H);
    for (let i = 0; i < 64000; i++) {
      c.fillStyle = rand() < 0.5 ? 'rgba(81,54,29,.10)' : 'rgba(232,219,184,.18)';
      c.fillRect(rand() * W, rand() * H, rand() * 2 + 0.4, 1);
    }
    c.strokeStyle = 'rgba(64,73,66,.24)';
    c.lineWidth = 0.7;
    for (let i = 34; i < W - 30; i += 20) {
      c.beginPath();
      c.moveTo(i, 32);
      c.lineTo(i, H - 32);
      c.stroke();
    }
    for (let i = 32; i < H - 30; i += 20) {
      c.beginPath();
      c.moveTo(31, i);
      c.lineTo(W - 32, i);
      c.stroke();
    }
    c.strokeStyle = '#5e6559';
    c.lineWidth = 2;
    c.strokeRect(23, 23, W - 46, H - 46);
    c.strokeRect(29, 29, W - 58, H - 58);
    const arc = (x, y, r, a = 0, b = TAU) => {
      c.beginPath();
      c.arc(x, y, r, a, b);
      c.stroke();
    };
    function technicalWheel(x, y, r, n) {
      c.strokeStyle = '#4f5e59';
      c.lineWidth = 2;
      c.beginPath();
      for (let i = 0; i < n; i++)
        for (let j = 0; j < 4; j++) {
          const a = ((i + j / 4) * TAU) / n,
            q = r * (j === 0 || j === 3 ? 0.95 : 1.02);
          c.lineTo(x + q * Math.cos(a), y + q * Math.sin(a));
        }
      c.closePath();
      c.stroke();
      [0.86, 0.77, 0.23, 0.12].forEach((q) => arc(x, y, r * q));
      for (let i = 0; i < 7; i++) {
        const a = (i * TAU) / 7;
        for (const off of [-0.05, 0.05]) {
          c.beginPath();
          c.moveTo(x + 0.22 * r * Math.cos(a + off), y + 0.22 * r * Math.sin(a + off));
          c.lineTo(x + 0.77 * r * Math.cos(a + off), y + 0.77 * r * Math.sin(a + off));
          c.stroke();
        }
      }
      c.setLineDash([8, 5]);
      c.beginPath();
      c.moveTo(x - r * 1.3, y);
      c.lineTo(x + r * 1.3, y);
      c.moveTo(x, y - r * 1.3);
      c.lineTo(x, y + r * 1.3);
      c.stroke();
      c.setLineDash([]);
    }
    technicalWheel(310, 311, 153, 45);
    technicalWheel(546, 300, 85, 25);
    technicalWheel(680, 385, 80, 24);
    technicalWheel(741, 178, 97, 29);
    c.fillStyle = '#4f5750';
    c.font = '22px Georgia';
    c.fillText('PL. VII     /     TRAIN DES ROUAGES', 62, 82);
    c.font = 'italic 16px Georgia';
    c.fillText('Fig. 2.  Échappement et barillet', 65, 571);
    c.fillText('Atelier Aurelian', 750, 640);
    for (let j = 0; j < 5; j++) {
      c.strokeRect(523 + j * 87, 552, 87, 49);
      c.fillText(['Échelle', 'Laiton', 'Repère', 'VII', '1876'][j], 530 + j * 87, 582);
    }
    for (let i = 0; i < 7; i++) {
      c.beginPath();
      c.moveTo(69, 611 + i * 5);
      c.lineTo(223 + rand() * 150, 611 + i * 5);
      c.stroke();
    }
  });
}
function contactShadow(scene, x, z, rx, rz, alpha) {
  const map = canvasTex(128, 128, (c, w, h) => {
    const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(5,2,5,.98)');
    g.addColorStop(0.62, 'rgba(5,2,4,.85)');
    g.addColorStop(1, 'rgba(6,3,6,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  });
  const o = mesh(
    scene,
    new T.PlaneGeometry(rx * 2, rz * 2),
    new T.MeshBasicMaterial({ map, transparent: true, opacity: alpha, depthWrite: false }),
    x,
    0.012,
    z
  );
  o.rotation.x = -Math.PI / 2;
  o.castShadow = false;
}
function lamp(scene) {
  const g = group(scene, -3.86, -0.1, -2.51);
  lathe(g, M.enamelDark, [
    [0, 0],
    [0.51, 0.03],
    [0.51, 0.08],
    [0.45, 0.12],
    [0.34, 0.15],
    [0.31, 0.205],
    [0.18, 0.23],
    [0, 0.23]
  ]);
  for (const [r, y] of [
    [0.5, 0.081],
    [0.341, 0.152],
    [0.16, 0.25]
  ])
    ring(g, M.gold, 0, y, 0, r, 0.014, 'y');
  cylinder(g, M.bronze, 0, 1.55, 0, 0.055, 0.078, 2.69);
  for (const y of [0.31, 0.43, 1.87, 2.71]) cylinder(g, M.gold, 0, y, 0, 0.09, 0.086, 0.06);
  const joints = [
    [0, 2.72, 0],
    [-0.45, 3.49, 0],
    [0.48, 4.07, 0],
    [1.06, 3.77, 0]
  ];
  for (let i = 1; i < joints.length; i++) {
    const a = joints[i - 1],
      b = joints[i];
    for (const z of [-0.069, 0.069])
      rod(g, i === 2 ? M.enamel : M.brass, [a[0], a[1], z], [b[0], b[1], z], 0.036);
  }
  for (const [x, y, z] of joints) {
    cylinder(g, M.antique, x, y, z, 0.099, 0.099, 0.19, 36, 'z');
    ring(g, M.light, x, y, z + 0.098, 0.074, 0.009);
    screw(g, x, y, z + 0.105, 0.043);
  }
  const spring = [];
  for (let i = 0; i <= 160; i++) {
    const t = i / 160,
      a = t * TAU * 16;
    spring.push([
      -0.38 + t * 0.78 + 0.025 * Math.cos(a),
      3.39 + t * 0.5 - 0.035 * Math.cos(a),
      0.11 + 0.035 * Math.sin(a)
    ]);
  }
  line(g, M.steel, spring, 0.009, 164);
  for (const p of [spring[0], spring.at(-1)]) ball(g, M.gold, ...p, 0.039);
  const hood = group(g, 1.06, 3.77, 0);
  hood.rotation.z = 0.22;
  lathe(hood, M.enamel, [
    [0.062, 0.05],
    [0.072, -0.02],
    [0.159, -0.063],
    [0.242, -0.145],
    [0.34, -0.221],
    [0.474, -0.266],
    [0.48, -0.292],
    [0.458, -0.305]
  ]);
  const glow = new T.MeshBasicMaterial({ color: new T.Color(2.6, 1.65, 0.78) });
  cylinder(hood, glow, 0, -0.292, 0, 0.451, 0.451, 0.008, 64);
  ring(hood, M.gold, 0, -0.293, 0, 0.474, 0.014, 'y');
  ball(hood, glow, 0, -0.312, 0, 0.116, 0.043, 0.116);
  bake(g);
  const halo = canvasTex(128, 128, (c) => {
    let gr = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,214,141,.47)');
    gr.addColorStop(0.27, 'rgba(255,174,82,.15)');
    gr.addColorStop(1, 'rgba(255,179,91,0)');
    c.fillStyle = gr;
    c.fillRect(0, 0, 128, 128);
  });
  const spr = new T.Sprite(
    new T.SpriteMaterial({
      map: halo,
      transparent: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
      opacity: 0.54
    })
  );
  spr.position.set(-2.74, 3.36, -2.5);
  spr.scale.set(2.5, 2.5, 1);
  scene.add(spr);
}
function benchInstruments(tools) {
  const oil = group(tools, -2.44, 0.03, -0.64);
  lathe(oil, M.brass, [
    [0, 0],
    [0.284, 0],
    [0.298, 0.035],
    [0.276, 0.074],
    [0.205, 0.096],
    [0.175, 0.165],
    [0.202, 0.192],
    [0.196, 0.212],
    [0.156, 0.212],
    [0.125, 0.145],
    [0, 0.135]
  ]);
  ring(oil, M.light, 0, 0.202, 0, 0.191, 0.009, 'y');
  ball(oil, mat(0x684619, 0.18, 0.085), 0, 0.152, 0, 0.139, 0.017, 0.139);
  // A swan-neck rest supports the oiler with its needle dipping into the oil.
  rod(oil, M.gold, [-0.245, 0.041, 0], [-0.245, 0.41, 0], 0.022);
  ring(oil, M.rose, -0.245, 0.425, 0, 0.045, 0.009, 'x');
  rod(oil, M.steel, [0.022, 0.164, 0], [-0.18, 0.36, 0], 0.003, 0.014);
  rod(oil, M.blue, [-0.18, 0.36, 0], [-0.49, 0.67, 0], 0.024, 0.045);
  rod(oil, M.gold, [-0.45, 0.63, 0], [-0.51, 0.69, 0], 0.043, 0.039);

  const dish = group(tools, 2.39, 0.027, 0.83);
  const porcelain = mat(0xc5bdb0, 0.06, 0.22);
  lathe(dish, porcelain, [
    [0, 0],
    [0.24, 0],
    [0.31, 0.023],
    [0.423, 0.092],
    [0.426, 0.122],
    [0.405, 0.131],
    [0.366, 0.095],
    [0.258, 0.049],
    [0.15, 0.042],
    [0, 0.042]
  ]);
  ring(dish, M.light, 0, 0.13, 0, 0.411, 0.009, 'y');
  for (const [x, z, n, angle, m] of [
    [-0.13, -0.07, 25, 0.17, M.brass],
    [0.136, 0.034, 18, -0.12, M.rose],
    [-0.062, 0.143, 15, -0.13, M.steel]
  ]) {
    const spare = wheel(dish, n, 0.009, 0.019, m);
    spare.position.set(x, 0.066, z);
    spare.rotation.set(-Math.PI / 2, angle, x);
  }
  for (let i = 0; i < 7; i++) {
    const a = i * 2.4,
      r = 0.045 + 0.008 * i;
    const j = mesh(
      dish,
      new T.OctahedronGeometry(0.029, 0),
      M.ruby,
      0.15 + r * Math.cos(a),
      0.067,
      -0.14 + r * Math.sin(a)
    );
    j.scale.y = 0.67;
  }

  const cal = group(tools, -2.28, 0.059, 1.63);
  cal.rotation.y = -0.46;
  box(cal, M.steel, 0, 0, 0, 1.61, 0.046, 0.137);
  const marks = canvasTex(1024, 128, (c, w, h) => {
    c.fillStyle = '#c0c3bb';
    c.fillRect(0, 0, w, h);
    c.strokeStyle = c.fillStyle = '#313b3e';
    c.font = '21px Georgia';
    for (let i = 0; i <= 80; i++) {
      const x = 22 + i * 12;
      c.fillRect(x, 4, 1.7, i % 10 === 0 ? 57 : i % 5 === 0 ? 41 : 23);
      if (i % 10 === 0) c.fillText(String(i / 10), x - 4, 88);
    }
    c.font = '16px Georgia';
    c.fillText('AURELIAN    ·    MM', 732, 115);
  });
  const rule = mesh(
    cal,
    new T.PlaneGeometry(1.59, 0.133),
    mat(0xffffff, 0.68, 0.33, { map: marks, bumpMap: marks, bumpScale: 0.0007 }),
    0,
    0.024,
    0
  );
  rule.rotation.x = -Math.PI / 2;
  for (const [x, mirror] of [
    [-0.78, 1],
    [-0.33, -1]
  ]) {
    const jaw = group(cal, x, 0.009, 0);
    jaw.rotation.x = -Math.PI / 2;
    jaw.scale.x = mirror;
    const sh = new T.Shape();
    sh.moveTo(0.02, 0.072);
    sh.lineTo(0.02, -0.34);
    sh.lineTo(-0.042, -0.31);
    sh.lineTo(-0.113, -0.16);
    sh.lineTo(-0.113, 0.068);
    sh.lineTo(-0.068, 0.2);
    sh.lineTo(-0.032, 0.22);
    sh.closePath();
    plate(jaw, sh, 0.033, 0.004, M.steel);
  }
  box(cal, M.brass, -0.28, 0.044, 0, 0.284, 0.061, 0.19);
  for (let i = 0; i < 11; i++)
    box(cal, M.black, -0.403 + i * 0.017, 0.076, -0.055, 0.003, 0.003, i % 5 ? 0.035 : 0.061);
  screw(cal, -0.194, 0.082, 0.026, 0.03, 'y');
  cylinder(cal, M.gold, -0.23, 0.041, -0.113, 0.055, 0.055, 0.036, 24, 'z');
}

function cushion(tools) {
  const pile = velvet(true);
  const rim = group(tools);
  lathe(rim, pile, [
    [1.62, 0.013],
    [1.77, 0.013],
    [1.91, 0.023],
    [1.983, 0.053],
    [1.995, 0.097],
    [1.96, 0.124],
    [1.91, 0.139],
    [1.85, 0.131],
    [1.78, 0.099],
    [1.68, 0.075],
    [1.62, 0.013]
  ]);
  for (const [r, y] of [
    [1.99, 0.07],
    [1.826, 0.124]
  ])
    ring(rim, M.bronze, 0, y, 0, r, 0.009, 'y');
  const silk = mat(0x8e6c47, 0.19, 0.73);
  for (let i = 0; i < 108; i++) {
    const a = (i * TAU) / 108;
    rod(
      rim,
      silk,
      [1.93 * Math.cos(a), 0.136, 1.93 * Math.sin(a)],
      [1.93 * Math.cos(a + 0.027), 0.135, 1.93 * Math.sin(a + 0.027)],
      0.0036,
      0.0036,
      5
    );
  }
}

async function background(scene) {
  const tex = await new T.TextureLoader().loadAsync(new URL('../assets/atelier.jpg', import.meta.url).href);
  tex.colorSpace = T.SRGBColorSpace;
  tex.anisotropy = 4;
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2,
      wall = mesh(
        scene,
        new T.PlaneGeometry(16.06, 8.03),
        new T.MeshBasicMaterial({ map: tex, color: i === 0 ? 0xb7b4a9 : 0x696861 }),
        -8 * Math.sin(a),
        2.92,
        -8 * Math.cos(a)
      );
    wall.rotation.y = a;
    wall.castShadow = wall.receiveShadow = false;
  }
}
export async function workshop(scene) {
  const rand = rng(1894);
  await background(scene);
  const wood = timber(false);
  box(scene, wood, 0, -0.175, -0.4, 27, 0.29, 18);
  const matGroup = group(scene);
  matGroup.rotation.y = -0.064;
  box(matGroup, M.bronze, 0, -0.038, 0, 7.77, 0.041, 4.66);
  box(matGroup, velvet(), 0, -0.012, 0, 7.72, 0.035, 4.61);
  // Hand-sewn double border.
  for (const off of [0.055, 0.094]) {
    const X = 3.86 - off,
      Z = 2.305 - off;
    for (const k of [-1, 1]) {
      rod(matGroup, M.bronze, [-X, 0.009, k * Z], [X, 0.009, k * Z], 0.006);
      rod(matGroup, M.bronze, [k * X, 0.009, -Z], [k * X, 0.009, Z], 0.006);
    }
  }
  bake(matGroup);
  contactShadow(scene, 0.07, 0.1, 2.1, 2.04, 0.83);
  lamp(scene);
  const draw = group(scene, 2.45, 0.021, -0.25);
  draw.rotation.y = -0.43;
  const paper = mat(0xffffff, 0.0, 0.83, { map: blueprint(), side: T.DoubleSide });
  let sheet = mesh(draw, new T.PlaneGeometry(2.3, 1.72), paper, 0.37, 0, 0.05);
  sheet.rotation.x = -Math.PI / 2;
  const tools = group(scene);
  benchInstruments(tools);
  cushion(tools);
  // One hollow watchmaker's loupe, gently tipped on its knurled bezel.
  const lp = group(tools, -2.61, 0.082, 0.96);
  lp.rotation.x = 0.17;
  lp.rotation.z = -0.3;
  lathe(lp, M.black, [
    [0.28, 0],
    [0.3, 0.027],
    [0.27, 0.08],
    [0.207, 0.125],
    [0.158, 0.38],
    [0.204, 0.41],
    [0.205, 0.455],
    [0.178, 0.466]
  ]);
  for (const [r, y, mt] of [
    [0.298, 0.035, M.gold],
    [0.26, 0.084, M.bronze],
    [0.172, 0.36, M.rose],
    [0.203, 0.428, M.brass],
    [0.186, 0.458, M.light]
  ])
    ring(lp, mt, 0, y, 0, r, 0.012, 'y');
  ball(lp, mat(0x2d5960, 0.73, 0.095), 0, 0.441, 0, 0.177, 0.028, 0.177);
  for (let i = 0; i < 56; i++) {
    let a = (i * TAU) / 56;
    rod(
      lp,
      M.blue,
      [0.19 * Math.cos(a), 0.406, 0.19 * Math.sin(a)],
      [0.198 * Math.cos(a), 0.442, 0.198 * Math.sin(a)],
      0.004
    );
  }
  for (let i = 0; i < 2; i++) {
    const d = group(tools, -2.65 + i * 0.27, 0.082, -0.06 + i * 0.42);
    d.rotation.y = 0.41 + i * 0.09;
    for (const [x, rt, rb, h, mt] of [
      [-0.52, 0.065, 0.088, 0.55, M.enamelDark],
      [-0.84, 0.092, 0.089, 0.086, M.gold],
      [-0.2, 0.078, 0.061, 0.1, M.brass],
      [-0.09, 0.032, 0.057, 0.13, M.steel],
      [0.27, 0.018, 0.029, 0.62, M.steel]
    ]) {
      cylinder(d, mt, x, 0, 0, rt, rb, h, 36, 'x');
    }
    const tip = box(d, M.steel, 0.6, 0, 0, 0.06, 0.012, 0.046);
    tip.rotation.z = -0.04;
    for (let k = 0; k < 9; k++) ring(d, M.brass, -0.75 + k * 0.052, 0, 0, 0.079 - k * 0.002, 0.006, 'x');
  }
  const tw = group(tools, 2.57, 0.082, 1.51);
  tw.rotation.y = -0.32;
  for (const s of [-1, 1]) {
    line(
      tw,
      M.gold,
      [
        [-0.73, 0, 0],
        [-0.49, 0, s * 0.03],
        [-0.04, 0.014, s * 0.088],
        [0.35, 0.023, s * 0.106],
        [0.69, -0.028, s * 0.048],
        [0.82, -0.045, s * 0.028]
      ],
      0.022,
      22
    );
    for (let k = 0; k < 13; k++)
      rod(tw, M.antique, [-0.39 + k * 0.028, 0.011, s * 0.044], [-0.38 + k * 0.028, 0.027, s * 0.054], 0.004);
  }
  // Loose parts on the bench, sized differently from the display movement.
  for (let i = 0; i < 6; i++) {
    const x = -2.1 + rand() * 0.58,
      z = -0.5 - rand() * 0.73;
    ring(tools, i % 2 ? M.brass : M.steel, x, 0.029, z, 0.045 + rand() * 0.026, 0.008, 'y');
  }
  bake(tools);
  const pos = new Float32Array(560 * 3),
    seeds = new Float32Array(560);
  for (let i = 0; i < seeds.length; i++) {
    pos.set([(rand() - 0.5) * 9, rand() * 5.7, (rand() - 0.5) * 5.7], i * 3);
    if (i >= 180) {
      const h = rand() * 4.45,
        a = rand() * TAU,
        r = Math.sqrt(rand()) * (0.16 + h * 0.22);
      pos.set(
        [-2.77 + 0.626 * h + r * Math.cos(a), 3.34 - 0.452 * h, -2.51 + 0.632 * h + r * Math.sin(a)],
        i * 3
      );
    }
    seeds[i] = rand();
  }
  const pg = new T.BufferGeometry();
  pg.setAttribute('position', new T.BufferAttribute(pos, 3));
  pg.setAttribute('seed', new T.BufferAttribute(seeds, 1));
  const dustMat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    uniforms: { t: { value: 0 } },
    vertexShader: `attribute float seed;uniform float t;varying float lum;void main(){vec3 p=position;float a=t*(.34+seed*.27)+seed*67.;
    p.xz+=vec2(cos(a),sin(a))*(.045+seed*.09);p.y+=.097*sin(t*.31+seed*23.);
    vec3 q=p-vec3(-2.77,3.34,-2.51),axis=normalize(vec3(2.62,-1.89,2.65));float h=dot(q,axis);
    float beam=(1.-smoothstep(.15,1.,length(q-axis*h)/(.22+max(0.,h)*.27)))*smoothstep(0.,.23,h);
    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=(.72+seed*1.55)*clamp(9./-mv.z,.65,1.6);lum=.036+.12*seed*seed+beam*(.23+.42*seed);}`,
    fragmentShader: `varying float lum;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.95,.74,.46,(1.-smoothstep(.03,.5,d))*lum);}`
  });
  scene.add(new T.Points(pg, dustMat));
  return {
    update(t) {
      dustMat.uniforms.t.value = t;
    }
  };
}
