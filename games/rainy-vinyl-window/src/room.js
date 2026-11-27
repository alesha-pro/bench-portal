import {
  T,
  V,
  tau,
  random,
  group,
  mesh,
  mat,
  basic,
  box,
  cyl,
  lathe,
  rim,
  rod,
  tube,
  print,
  canvasMap,
  contact,
} from "./craft.js";
import { porcelain, brewedTea } from "./finishes.js";
import { jacket, notebookPage, spine, tramTicket } from "./print.js";
const rand = random(98421);

function lamp(scene, M) {
  const p = group(scene, 1.86, 0.004, -0.56);
  contact(p, 0, 0, 1.09, 0.8);
  lathe(
    p,
    [
      [0.32, 0],
      [0.38, 0.017],
      [0.382, 0.046],
      [0.361, 0.06],
      [0.351, 0.082],
      [0.306, 0.103],
      [0.27, 0.122],
      [0.17, 0.139],
      [0.12, 0.156],
      [0.086, 0.17],
    ],
    M.brass,
  );
  rim(p, 0.354, 0.01, M.aged, 0, 0.072, 0);
  lathe(
    p,
    [
      [0.105, 0.134],
      [0.107, 0.164],
      [0.079, 0.177],
      [0.08, 0.2],
      [0.056, 0.21],
      [0.052, 0.29],
      [0.059, 0.32],
      [0.042, 0.34],
      [0.038, 1.32],
      [0.054, 1.33],
      [0.055, 1.39],
    ],
    M.brass,
  );
  const hinge = (x, y, z, r) => {
    rod(p, [x, y, z - 0.073], [x, y, z + 0.074], r, M.aged);
    rod(p, [x, y, z + 0.074], [x, y, z + 0.088], r * 0.74, M.brass);
    box(p, r * 0.9, 0.008, 0.005, M.ink, x, y, z + 0.091).rotation.z = 0.43;
  };
  hinge(0, 1.38, 0, 0.091);
  rod(p, [-0.019, 1.39, 0], [-0.36, 1.95, 0.05], 0.031, M.brass);
  rod(p, [0.034, 1.4, 0], [-0.309, 1.96, 0.05], 0.013, M.aged);
  hinge(-0.348, 1.957, 0.054, 0.075);
  tube(
    p,
    [
      [-0.35, 1.956, 0.055],
      [-0.431, 2.053, 0.082],
      [-0.52, 2.08, 0.125],
      [-0.574, 2.029, 0.156],
    ],
    0.033,
    M.brass,
  );
  const shade = group(p, -0.575, 2.002, 0.16);
  shade.rotation.x = -0.39;
  shade.rotation.z = -0.14;
  const shell = [
    [0.014, 0.078],
    [0.087, 0.076],
    [0.097, 0.04],
    [0.14, 0.021],
    [0.178, -0.012],
    [0.252, -0.042],
    [0.326, -0.096],
    [0.396, -0.167],
    [0.465, -0.255],
    [0.505, -0.303],
    [0.526, -0.315],
    [0.531, -0.335],
  ];
  const enamel = mat(0x27514a, 0.22, 0.53, { side: T.DoubleSide });
  lathe(shade, shell, enamel);
  const liner = mat(0xe7c18b, 0.44, 0.19, {
    emissive: 0xff9b46,
    emissiveIntensity: 0.22,
    side: T.DoubleSide,
  });
  lathe(
    shade,
    shell.map(([r, y]) => [Math.max(0.002, r - 0.009), y - 0.004]),
    liner,
  );
  rim(shade, 0.526, 0.012, M.brass, 0, -0.333, 0);
  rim(shade, 0.096, 0.008, M.brass, 0, 0.043, 0);
  cyl(shade, 0.062, 0.063, 0.128, M.aged, 0, 0.121, 0);
  for (let i = 0; i < 5; i++)
    rim(shade, 0.061, 0.005, M.brass, 0, 0.085 + i * 0.016, 0);
  const envelope = new T.MeshPhysicalMaterial({
    color: 0xffdea5,
    roughness: 0.12,
    metalness: 0.25,
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
    clearcoat: 1,
  });
  const bulb = mesh(
    shade,
    new T.SphereGeometry(0.108, 36, 24),
    envelope,
    0,
    -0.277,
    0,
  );
  bulb.scale.set(0.83, 1.19, 0.83);
  bulb.castShadow = false;
  const tungsten = mat(0xffdeb3, 0.32, 0.1, {
    emissive: 0xffb653,
    emissiveIntensity: 5.2,
  });
  for (const sign of [-1, 1]) {
    rod(
      shade,
      [sign * 0.016, -0.17, 0],
      [sign * 0.047, -0.318, 0],
      0.0026,
      M.aged,
    );
  }
  const coil = [];
  for (let i = 0; i <= 72; i++) {
    const u = i / 72,
      a = u * tau * 12;
    coil.push([
      -0.047 + 0.094 * u,
      -0.318 - 0.018 * Math.sin(u * Math.PI) + 0.005 * Math.cos(a),
      0.005 * Math.sin(a),
    ]);
  }
  tube(shade, coil, 0.0027, tungsten);
  // A hanging bead chain and weighted finial.
  const chain = group(p, -0.25, 1.82, 0.083);
  tube(
    chain,
    [
      [0, 0, 0],
      [0.018, -0.23, 0.007],
      [0.014, -0.51, 0.016],
    ],
    0.0024,
    M.aged,
  );
  const bg = new T.SphereGeometry(0.009, 8, 6);
  for (let i = 0; i < 31; i++)
    mesh(
      chain,
      bg,
      M.brass,
      0.017 * Math.sin((i / 40) * Math.PI),
      -i * 0.016,
      (0.016 * i) / 31,
    );
  lathe(
    chain,
    [
      [0.005, 0],
      [0.018, -0.02],
      [0.02, -0.049],
      [0.014, -0.064],
      [0.002, -0.071],
    ],
    M.aged,
    0.012,
    -0.491,
    0.015,
    24,
  );
  tube(
    p,
    [
      [0.14, 0.027, -0.18],
      [0.43, 0.02, -0.37],
      [0.57, 0.023, -0.52],
      [0.83, 0.02, -0.53],
      [1.02, 0.037, -0.7],
    ],
    0.014,
    M.rubber,
  );
  const pos = shade.localToWorld(V(0, -0.3, 0));
  const light = new T.SpotLight(0xffc180, 16.0, 8, 1.03, 0.64, 2);
  light.position.copy(pos);
  light.target.position.set(0.71, 0, 0.66);
  scene.add(light, light.target);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  light.shadow.radius = 3.2;
  light.shadow.camera.near = 0.05;
  light.shadow.bias = -0.0003;
  light.shadow.normalBias = 0.005;
  const fill = new T.PointLight(0xffbc81, 3.7, 6, 2);
  fill.position.copy(pos).y -= 0.07;
  scene.add(fill);
  return { light, fill, liner, tungsten };
}
function cup(scene, M) {
  const p = group(scene, 1.55, 0.005, 0.81);
  contact(p, 0.01, 0.008, 0.92, 0.75);
  const glaze = porcelain(true);
  const coast = mat(0x254664, 0.26, 0.04);
  const foot = mat(0xa9845c, 0.84);
  lathe(
    p,
    [
      [0.038, 0.011],
      [0.15, 0.01],
      [0.185, 0.025],
      [0.24, 0.029],
      [0.326, 0.055],
      [0.355, 0.076],
      [0.359, 0.088],
      [0.349, 0.095],
      [0.319, 0.088],
      [0.24, 0.067],
      [0.16, 0.054],
      [0.01, 0.054],
    ],
    porcelain(),
  );
  rim(p, 0.344, 0.0019, M.brass, 0, 0.092, 0);
  rim(p, 0.33, 0.0045, coast, 0, 0.087, 0);
  lathe(
    p,
    [
      [0.073, 0.054],
      [0.128, 0.055],
      [0.14, 0.074],
      [0.142, 0.091],
      [0.155, 0.1],
      [0.17, 0.128],
      [0.185, 0.188],
      [0.199, 0.275],
      [0.202, 0.356],
      [0.198, 0.377],
      [0.19, 0.382],
      [0.183, 0.376],
      [0.184, 0.345],
      [0.177, 0.259],
      [0.156, 0.16],
      [0.11, 0.12],
      [0.001, 0.117],
    ],
    glaze,
  );
  rim(p, 0.136, 0.008, foot, 0, 0.077, 0);
  rim(p, 0.196, 0.005, coast, 0, 0.374, 0);
  for (const [y, r] of [
    [0.119, 0.168],
    [0.129, 0.171],
  ])
    rim(p, r, 0.0024, coast, 0, y, 0);
  tube(
    p,
    [
      [0.183, 0.301, 0],
      [0.251, 0.321, 0.003],
      [0.3, 0.297, 0],
      [0.314, 0.244, -0.006],
      [0.288, 0.175, -0.004],
      [0.219, 0.141, 0],
      [0.164, 0.158, 0],
    ],
    0.026,
    glaze,
  );
  const tea = brewedTea();
  const surface = mesh(p, new T.CircleGeometry(0.185, 100), tea, 0, 0.34, 0);
  surface.rotation.x = -Math.PI / 2;
  rim(p, 0.178, 0.003, mat(0xb7844a, 0.21, 0.3), 0, 0.342, 0);
  // Small bubbles gather along the meniscus.
  for (let i = 0; i < 32; i++) {
    const a = rand() * 0.95 + 2.4;
    const r = 0.17 + rand() * 0.01;
    const rad = 0.001 + rand() * 0.004;
    rim(p, rad, 0.0008, M.cream, r * Math.cos(a), 0.342, r * Math.sin(a), 8);
  }
  return tea;
}
function succulent(scene, M) {
  const p = group(scene, 2.52, 0, -0.77);
  contact(p, 0, 0, 0.83, 0.67);
  const grain = canvasMap(512, 256, (c, w, h) => {
    const r = random(6843),
      pixels = c.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      const tool = 3 * Math.cos(y * 0.85) + r() * 2;
      for (let x = 0; x < w; x++) {
        const value = (r() - 0.5) * 29 + tool + (r() > 0.982 ? 35 : 0),
          i = (y * w + x) * 4;
        pixels.data.set(
          [177 + value, 110 + value * 0.84, 78 + value * 0.8, 255],
          i,
        );
      }
    }
    c.putImageData(pixels, 0, 0);
  });
  const clay = mat(0xffffff, 0.86, 0.01, {
    side: T.DoubleSide,
    map: grain,
    bumpMap: grain,
    bumpScale: 0.002,
  });
  lathe(
    p,
    [
      [0.095, 0],
      [0.156, 0.016],
      [0.17, 0.045],
      [0.202, 0.25],
      [0.222, 0.27],
      [0.229, 0.294],
      [0.225, 0.32],
      [0.203, 0.324],
      [0.194, 0.309],
      [0.196, 0.28],
    ],
    clay,
  );
  rim(p, 0.215, 0.006, M.aged, 0, 0.277, 0);
  const ridge = mat(0x9b674b, 0.78, 0.02);
  for (let j = 0; j < 8; j++) {
    const y = 0.065 + j * 0.023 + 0.0017 * Math.sin(j * 3.3);
    rim(p, 0.171 + (y - 0.046) * 0.151, 0.0013, ridge, 0, y, 0, 64);
  }
  lathe(
    p,
    [
      [0.159, 0.009],
      [0.2, 0.01],
      [0.222, 0.024],
      [0.222, 0.038],
      [0.212, 0.044],
      [0.177, 0.03],
    ],
    clay,
  );
  cyl(p, 0.198, 0.195, 0.017, mat(0x342e24, 0.94), 0, 0.285, 0, 48);
  const pebble = new T.IcosahedronGeometry(0.015, 0),
    soil = mat(0x746650, 0.96);
  const grit = new T.InstancedMesh(pebble, soil, 210);
  const seed = new T.Object3D(),
    color = new T.Color();
  for (let i = 0; i < grit.count; i++) {
    const a = rand() * tau,
      r = Math.sqrt(rand()) * 0.19,
      size = 0.16 + rand() ** 2 * 0.85;
    seed.position.set(r * Math.cos(a), 0.294 + rand() * 0.006, r * Math.sin(a));
    seed.rotation.set(rand() * 2, a, 0);
    seed.scale.set(size, size * 0.67, size * 1.4);
    seed.updateMatrix();
    grit.setMatrixAt(i, seed.matrix);
    grit.setColorAt(
      i,
      color.set(i % 9 === 0 ? 0xe7d8ab : i % 4 === 0 ? 0xa17b58 : 0x695441),
    );
  }
  p.add(grit);
  const dew = mat(0xb5d5cf, 0.065, 0.66, { envMapIntensity: 1.7 });
  const bead = new T.SphereGeometry(1, 10, 7);
  const pos = [],
    cols = [];
  const c = new T.Color();
  function leaf(angle, length, up, width) {
    const dir = V(Math.cos(angle), 0, Math.sin(angle)),
      side = V(-dir.z, 0, dir.x),
      base = V(0, 0.291, 0);
    const verts = [],
      colors = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const center = base
        .clone()
        .addScaledVector(dir, length * (t * 0.33 + t * t * 0.67));
      center.y += up * (1 - Math.cos(t * 1.49)) + 0.11 * Math.sin(t * 2.4);
      const w = width * Math.pow(Math.sin(Math.PI * t), 0.68) + 0.0004;
      for (const k of [-1, 0, 1]) {
        const v = center.clone().addScaledVector(side, k * w);
        v.y += k === 0 ? w * 0.51 : 0;
        verts.push(v);
        c.set(k === 0 ? 0x72977b : 0x385e4b).lerp(
          new T.Color(0xb29072),
          Math.pow(t, 6) * 0.78,
        );
        colors.push(c.clone());
      }
    }
    if (rand() > 0.28) {
      const n = 3 * (4 + Math.floor(rand() * 5)) + 1,
        center = verts[n];
      const drop = mesh(p, bead, dew, center.x, center.y + 0.0017, center.z);
      const r = 0.0025 + rand() ** 2 * 0.005;
      drop.scale.set(r, r * 0.74, r);
    }
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 2; j++) {
        const a = i * 3 + j;
        for (const k of [a, a + 3, a + 1, a + 1, a + 3, a + 4]) {
          pos.push(...verts[k].toArray());
          cols.push(...colors[k].toArray());
        }
      }
  }
  for (let ring = 0; ring < 4; ring++) {
    let n = 13 - ring * 2;
    for (let j = 0; j < n; j++)
      leaf(
        (j / n) * tau + ring * 1.73,
        0.29 - ring * 0.055 + rand() * 0.025,
        0.085 + ring * 0.056 + rand() * 0.032,
        0.056 - ring * 0.006,
      );
  }
  const geo = new T.BufferGeometry();
  geo.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new T.Float32BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  mesh(
    p,
    geo,
    mat(0xffffff, 0.58, 0.04, { vertexColors: true, side: T.DoubleSide }),
  );
}
function paperGoods(scene, M) {
  const maps = [0, 1, 2].map(jacket);
  const rack = group(scene, -1.72, 0.015, -0.77);
  rack.rotation.y = 0.12;
  rack.scale.setScalar(0.92);
  for (let i = 0; i < 4; i++) {
    const item = group(rack, -i * 0.093, 0, -i * 0.083);
    item.rotation.x = -0.13 - i * 0.032;
    item.rotation.z = [0.09, 0.015, 0.17, -0.025][i];
    const side = 1.28 + i * 0.038;
    box(item, side, side, 0.035, M.cream, 0, side / 2, 0, 0.009);
    const cover = print(
      item,
      side - 0.008,
      side - 0.008,
      maps[[0, 2, 1, 2][i]],
      0,
      side / 2,
      0.019,
    );
    if (i === 0) scene.userData.frontSleeve = cover;
  }
  rod(rack, [-0.74, 0.032, 0.06], [0.72, 0.032, 0.06], 0.021, M.aged);
  // The records under the journal leave their catalogue spines facing the listener.
  for (let i = 0; i < 2; i++) {
    const sleeve = group(
      scene,
      -1.91 + 0.028 * i,
      0.027 + 0.048 * i,
      0.958 + i * 0.019,
    );
    sleeve.rotation.y = -0.085 + i * 0.047;
    box(
      sleeve,
      1.32,
      0.047,
      1.3,
      mat(i ? 0xb99b75 : 0x89795f, 0.92),
      0,
      0,
      0,
      0.006,
    );
    print(sleeve, 1.303, 1.283, maps[2 - i], 0, 0.0242, 0, true);
    print(sleeve, 1.304, 0.042, spine(2 - i), 0, 0, 0.651);
  }
  // The upper leaf lifts away from the page block in the draught by the sash.
  let flutter;

  const open = group(scene, -1.89, 0.101, 1.04);
  open.rotation.y = -0.23;
  contact(open, 0, 0, 1.51, 1.06, -0.013, 0.7);
  const leather = mat(0x583a2c, 0.65, 0, {
    bumpMap: M.wood.bumpMap,
    bumpScale: 0.004,
  });
  box(open, 1.172, 0.034, 0.807, leather, 0, 0.022, 0, 0.019);
  for (const side of [-1, 1]) {
    box(open, 0.55, 0.041, 0.752, M.cream, side * 0.282, 0.058, 0, 0.013);
    const geo = new T.PlaneGeometry(0.566, 0.756, 30, 22);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i) + side * 0.283;
      pos.setX(i, x);
      pos.setY(
        i,
        0.082 +
          0.031 *
            Math.sin(Math.min(1, Math.abs(x) * 4) * Math.PI) *
            Math.exp(-Math.abs(x) * 3),
      );
    }
    if (side < 0) {
      const rest = pos.array.slice();
      flutter = (t) => {
        const wind =
          0.47 + 0.35 * Math.sin(t * 1.63) + 0.18 * Math.sin(t * 3.7 + 0.6);
        for (let i = 0; i < pos.count; i++) {
          const x = rest[i * 3],
            z = rest[i * 3 + 2];
          const corner = Math.max(
            0,
            (-x - 0.31) / 0.26 + (z - 0.23) / 0.16 - 1,
          );
          pos.setY(
            i,
            rest[i * 3 + 1] + corner * corner * (0.014 + 0.062 * wind),
          );
        }
        pos.needsUpdate = true;
        geo.computeVertexNormals();
      };
    }
    geo.computeVertexNormals();
    mesh(
      open,
      geo,
      mat(0xffffff, 0.83, 0, { map: notebookPage(side > 0 ? 1 : 0) }),
    );
  }
  const ticket = group(open, -0.486, 0.086, -0.091);
  ticket.rotation.y = 0.17;
  box(ticket, 0.257, 0.003, 0.118, mat(0xb89468, 0.85), 0, 0, 0);
  print(ticket, 0.257, 0.118, tramTicket(), 0, 0.0016, 0, true);
  box(open, 0.033, 0.005, 0.22, mat(0x9e5837), 0.017, 0.045, 0.398);
  const pen = group(open, 0.32, 0.117, 0.005);
  pen.rotation.y = -0.35;
  rod(pen, [0, 0, -0.27], [0, 0, 0.15], 0.022, M.ink);
  rod(pen, [0, 0, 0.148], [0, 0, 0.24], 0.021, M.aged, 0.006);
  for (const z of [-0.223, -0.209, 0.103])
    rod(pen, [0, 0, z], [0, 0, z + 0.008], 0.023, M.brass);
  tube(
    pen,
    [
      [0, 0.02, -0.245],
      [0, 0.033, -0.218],
      [0, 0.03, -0.115],
      [0, 0.021, -0.106],
    ],
    0.005,
    M.brass,
  );
  // Split gold nib and breather hole are visible against the white page.
  const nib = mesh(pen, new T.OctahedronGeometry(1), M.brass, 0, 0.003, 0.221);
  nib.scale.set(0.019, 0.006, 0.043);
  box(pen, 0.0016, 0.001, 0.033, M.ink, 0, 0.008, 0.238);
  return { jackets: maps, flutter };
}
export function furnish(scene, M) {
  box(scene, 12.0, 0.2, 3.36, M.desk, 0, -0.101, 0.05, 0.046);
  box(scene, 7.89, 0.19, 0.12, M.wood, 0, -0.273, 1.62, 0.025);
  box(scene, 7.92, 0.025, 0.04, M.aged, 0, -0.211, 1.685, 0.008);
  for (let x of [-2.98, -0.99, 1.0, 2.99]) {
    box(scene, 1.91, 0.25, 0.06, M.wood, x, -0.386, 1.59, 0.015);
    rod(
      scene,
      [x - 0.12, -0.369, 1.635],
      [x + 0.12, -0.369, 1.635],
      0.015,
      M.aged,
    );
  }
  const felt = mat(0x2d3935, 0.91, 0.015);
  box(scene, 2.88, 0.011, 2.03, felt, 0, 0.007, 0.39, 0.005);
  // A thin saddle-stitched border in the dark table mat.
  const lines = [];
  for (let x = -1.4; x < 1.4; x += 0.048) {
    for (let z of [-0.587, 1.366]) lines.push(x, 0.014, z, x + 0.025, 0.014, z);
  }
  for (let z = -0.59; z < 1.36; z += 0.048) {
    for (let x of [-1.408, 1.408]) lines.push(x, 0.014, z, x, 0.014, z + 0.025);
  }
  const geo = new T.BufferGeometry();
  geo.setAttribute("position", new T.Float32BufferAttribute(lines, 3));
  scene.add(
    new T.LineSegments(geo, new T.LineBasicMaterial({ color: 0x6f6c52 })),
  );
  const lamps = lamp(scene, M);
  const tea = cup(scene, M);
  succulent(scene, M);
  const { jackets, flutter } = paperGoods(scene, M);
  const frame = mat(0x203530, 0.44, 0.31);
  const z = -1.48;
  box(scene, 13, 0.104, 0.38, M.wood, 0, 0.13, z + 0.043, 0.021);
  const paint = canvasMap(2048, 96, (c, w, h) => {
    const rng = random(980);
    c.fillStyle = "#344d46";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      c.fillStyle = i % 3 ? "rgba(20,33,30,.16)" : "rgba(146,153,126,.23)";
      c.fillRect(rng() * w, rng() * h, 1 + rng() ** 4 * 57, 0.3 + rng() * 0.8);
    }
    for (let i = 0; i < 220; i++) {
      c.fillStyle = i % 3 ? "#84755b" : "#a08c6e";
      c.fillRect(
        rng() * w,
        (i % 2 ? rng() ** 2 : 1 - rng() ** 2) * 3 + (i % 2 ? 0 : h - 3),
        1 + rng() ** 3 * 15,
        0.7,
      );
    }
  });
  const wetness = canvasMap(
    1024,
    128,
    (c, w, h) => {
      const rng = random(613);
      c.fillStyle = "#c7c7c7";
      c.fillRect(0, 0, w, h);
      for (let i = 0; i < 170; i++) {
        c.fillStyle = "rgba(32,32,32,.65)";
        c.beginPath();
        c.ellipse(
          rng() * w,
          rng() * h,
          3 + rng() ** 2 * 29,
          0.9 + rng() ** 2 * 3,
          0.01,
          0,
          tau,
        );
        c.fill();
      }
    },
    false,
  );
  paint.wrapS = wetness.wrapS = T.RepeatWrapping;
  paint.repeat.x = wetness.repeat.x = 3;
  const sill = new T.MeshPhysicalMaterial({
    map: paint,
    roughness: 0.52,
    metalness: 0.06,
    bumpMap: paint,
    bumpScale: 0.0019,
    roughnessMap: wetness,
    clearcoat: 0.91,
    clearcoatRoughness: 0.48,
    clearcoatRoughnessMap: wetness,
  });
  box(scene, 13, 0.038, 0.42, sill, 0, 0.196, z + 0.042, 0.01);
  box(scene, 13, 0.45, 0.12, frame, 0, -0.074, z);
  for (let x of [-5.05, -2.64, 0.84, 4.75]) {
    box(scene, 0.091, 6, 0.145, frame, x, 3, z, 0.011);
    box(scene, 0.022, 6, 0.026, M.aged, x - 0.045, 3, z + 0.074, 0.005);
    box(scene, 0.126, 6, 0.033, frame, x, 3, z - 0.042, 0.005);
  }
  for (let y of [0.278, 2.87, 4.49]) {
    box(scene, 13, 0.095, 0.13, frame, 0, y, z, 0.009);
    box(scene, 13, 0.021, 0.035, M.aged, 0, y - 0.045, z + 0.038, 0.004);
  }
  box(scene, 0.135, 0.24, 0.04, M.aged, 0.84, 0.493, z + 0.078, 0.016);
  rod(scene, [0.84, 0.5, z + 0.1], [0.84, 0.5, z + 0.18], 0.035, M.brass);
  tube(
    scene,
    [
      [0.84, 0.5, z + 0.17],
      [0.85, 0.52, z + 0.18],
      [0.84, 0.6, z + 0.18],
      [0.811, 0.66, z + 0.17],
    ],
    0.018,
    M.brass,
  );
  const catchLight = new T.PointLight(0xaed6d2, 1.12, 2.65, 2);
  catchLight.position.set(0.24, 1.12, -0.98);
  scene.add(catchLight);
  box(scene, 0.112, 0.207, 0.004, M.brass, 0.84, 0.493, z + 0.099, 0.011);
  const lever = lathe(
    scene,
    [
      [0.007, 0],
      [0.02, 0.008],
      [0.023, 0.041],
      [0.023, 0.078],
      [0.018, 0.095],
      [0.007, 0.101],
    ],
    M.brass,
    0.831,
    0.565,
    z + 0.174,
    24,
  );
  lever.rotation.z = 0.27;
  for (const y of [0.412, 0.574]) {
    rod(scene, [0.84, y, z + 0.101], [0.84, y, z + 0.107], 0.012, M.brass);
    box(scene, 0.014, 0.0028, 0.001, M.ink, 0.84, y, z + 0.108).rotation.z =
      0.46;
  }
  rod(scene, [0.84, 0.5, z + 0.103], [0.84, 0.5, z + 0.12], 0.049, M.aged);
  const wet = new T.MeshPhysicalMaterial({
    color: 0x44605b,
    roughness: 0.085,
    metalness: 0.27,
    transparent: true,
    opacity: 0.77,
    clearcoat: 1,
    clearcoatRoughness: 0.065,
  });
  const bead = new T.SphereGeometry(1, 14, 9);
  for (let i = 0; i < 52; i++) {
    const x = 0.773 - rand() ** 2 * 0.67 + (i % 5 === 0 ? 0.14 : 0);
    const zBead = z + 0.068 + rand() ** 2 * 0.137,
      r = 0.0025 + rand() ** 3 * 0.016;
    const o = mesh(scene, bead, wet, x, 0.215 + r * 0.17, zBead);
    o.scale.set(r * 1.28, r * 0.68, r);
  }
  for (let i = 0; i < 26; i++) {
    const distance = rand() ** 2 * 0.4,
      radius = 0.002 + rand() ** 2 * 0.008;
    const x = 0.907 + distance;
    const drop = mesh(scene, bead, wet, x, 0.328, z + 0.032 + rand() * 0.025);
    drop.scale.set(radius * 1.3, radius * 0.8, radius);
  }
  return { lamps, jackets, tea, flutter };
}
