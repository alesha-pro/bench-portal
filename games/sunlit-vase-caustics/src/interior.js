import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mesh, box, tube, random } from "./materials.js";

const standard = (color, roughness = 0.62) =>
  new THREE.MeshStandardMaterial({ color, roughness });
function rounded(parent, size, pos, mat, r = 0.025) {
  const m = mesh(new RoundedBoxGeometry(...size, 3, r), mat, parent, pos);
  m.castShadow = m.receiveShadow = true;
  return m;
}
function turned(parent, profile, pos, mat) {
  const m = mesh(
    new THREE.LatheGeometry(
      profile.map(([r, y]) => new THREE.Vector2(r, y)),
      56,
    ),
    mat,
    parent,
    pos,
  );
  m.castShadow = m.receiveShadow = true;
  return m;
}
function canvasTexture(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function readingPage() {
  const c = document.createElement("canvas");
  c.width = 576;
  c.height = 780;
  const g = c.getContext("2d");
  g.fillStyle = "#e7d3aa";
  g.fillRect(0, 0, 576, 780);
  g.textAlign = "center";
  g.fillStyle = "#6b5947";
  g.font = "16px Georgia";
  g.fillText("B O T A N I C A", 288, 54);
  g.fillRect(50, 70, 476, 1);
  g.font = "italic 44px Georgia";
  g.fillText("The garden rose", 288, 155);
  g.font = "18px Georgia";
  g.fillText("XII", 288, 105);
  const content = [
    "In the still hours of the morning the petals unfold,",
    "their outer edges curling back to catch the light.",
    "Within the calyx are the younger leaves of the",
    "corolla, folded close about the golden stamens.",
    "The leaves occur in pairs along the slender stem.",
    "Each is finely toothed, with a pale central vein",
    "from which the smaller veins run to the margin.",
  ];
  g.textAlign = "left";
  g.font = "18px Georgia";
  for (let p = 0; p < 2; p++)
    for (let i = 0; i < content.length; i++)
      g.fillText(
        content[(i + p * 3) % content.length],
        57,
        226 + p * 232 + i * 26,
      );
  g.textAlign = "center";
  g.font = "italic 16px Georgia";
  g.fillText("Gardens of the Mediterranean", 288, 685);
  g.fillText("42", 288, 731);
  return c;
}
function openBook(scene, plate, brass) {
  const book = new THREE.Group();
  scene.add(book);
  book.position.set(1.65, 0.002, 0.51);
  book.rotation.y = -0.34;
  const linen = standard(0x36584d),
    paper = standard(0xd4ba8a, 0.9);
  const W = 0.62,
    H = 0.87;
  for (const side of [-1, 1]) {
    rounded(
      book,
      [W + 0.04, 0.035, H + 0.055],
      [side * (W * 0.5 + 0.005), 0.017, 0],
      linen,
      0.014,
    );
    const pageMat = new THREE.MeshStandardMaterial({
      map: side < 0 ? canvasTexture(readingPage()) : plate,
      side: THREE.DoubleSide,
      roughness: 0.94,
    });
    for (let i = 0; i <= 6; i++) {
      const geo = new THREE.PlaneGeometry(W, H, 28, 5),
        p = geo.attributes.position;
      for (let j = 0; j < p.count; j++) {
        const x = p.getX(j) + side * W * 0.5,
          z = -p.getY(j),
          u = Math.abs(x) / W;
        const y =
          0.034 +
          0.007 * i +
          (0.054 + 0.004 * i) * Math.sin(Math.PI * Math.pow(u, 0.64)) +
          0.012 * u +
          0.009 * u * u * z;
        p.setXYZ(j, x * (0.97 + i * 0.004), y, z);
      }
      geo.computeVertexNormals();
      const sheet = mesh(geo, i === 6 ? pageMat : paper, book);
      sheet.receiveShadow = sheet.castShadow = true;
    }
  }
  const ribbon = box(
    book,
    [0.048, 0.005, 0.23],
    [0.014, 0.045, 0.48],
    standard(0x83342b),
  );
  ribbon.rotation.y = -0.12;
  const glasses = new THREE.Group();
  book.add(glasses);
  glasses.position.set(0.015, 0.172, 0.16);
  glasses.rotation.y = -0.3;
  const lensMat = new THREE.MeshPhysicalMaterial({
    color: 0xbec7b8,
    metalness: 0.32,
    roughness: 0.09,
    transparent: true,
    opacity: 0.11,
    depthWrite: false,
  });
  for (const side of [-1, 1]) {
    const rim = mesh(
      new THREE.TorusGeometry(0.112, 0.009, 8, 48),
      brass,
      glasses,
      [side * 0.137, 0, 0],
    );
    rim.rotation.x = Math.PI / 2;
    rim.scale.y = 0.78;
    rim.castShadow = true;
    const lens = mesh(new THREE.CircleGeometry(0.109, 48), lensMat, glasses, [
      side * 0.137,
      0,
      0,
    ]);
    lens.rotation.x = -Math.PI / 2;
    lens.scale.y = 0.78;
    tube(
      glasses,
      [
        [side * 0.244, 0, -0.018],
        [side * 0.236, 0.012, -0.083],
        [side * 0.12, 0.021, -0.23],
        [side * 0.03, 0.027, -0.25],
      ],
      0.007,
      brass,
      14,
    ).castShadow = true;
  }
  tube(
    glasses,
    [
      [-0.035, 0, 0],
      [0, 0.018, -0.016],
      [0.035, 0, 0],
    ],
    0.007,
    brass,
    10,
  );
}

export function furnish(scene, walnut, brass, floorMat, painting, plate) {
  const oak = new THREE.MeshStandardMaterial({
    map: walnut,
    color: 0xb99873,
    roughness: 0.46,
  });
  const darkWood = new THREE.MeshStandardMaterial({
    map: walnut,
    color: 0x79543b,
    roughness: 0.48,
  });
  openBook(scene, plate, brass);
  const furniture = new THREE.Group();
  scene.add(furniture);
  furniture.position.set(1.3, -1.72, -2.59);
  // Framed cabinet with a recessed open shelf and two drawers on turned feet.
  for (const x of [-1.31, 1.31])
    for (const z of [-0.3, 0.3])
      turned(
        furniture,
        [
          [0.072, 0],
          [0.088, 0.045],
          [0.053, 0.18],
          [0.1, 0.26],
          [0.1, 0.3],
        ],
        [x, 0, z],
        darkWood,
      );
  for (const [w, h, d, x, y, z] of [
    [2.93, 0.13, 0.84, 0, 0.32, 0],
    [2.86, 0.1, 0.81, 0, 1.24, 0],
    [3.05, 0.11, 0.91, 0, 1.79, 0],
    [0.11, 1.47, 0.78, -1.39, 1.04, 0],
    [0.11, 1.47, 0.78, 1.39, 1.04, 0],
    [2.69, 1.4, 0.055, 0, 1.04, -0.355],
    [2.94, 0.037, 0.85, 0, 1.705, 0],
    [0.075, 0.89, 0.76, 0.26, 0.78, 0],
  ])
    rounded(furniture, [w, h, d], [x, y, z], oak);
  for (const x of [-0.68, 0.68]) {
    rounded(furniture, [1.31, 0.365, 0.078], [x, 1.48, 0.387], darkWood, 0.014);
    rounded(furniture, [1.2, 0.278, 0.048], [x, 1.49, 0.438], oak, 0.013);
    for (const dx of [-0.36, 0.36])
      turned(
        furniture,
        [
          [0.027, 0],
          [0.045, 0.032],
          [0.027, 0.052],
        ],
        [x + dx, 1.49, 0.475],
        brass,
      ).rotation.x = Math.PI * 0.5;
  }
  const cloths = [
    0x4b635d, 0x8e563d, 0x90815b, 0x6e302d, 0x33484d, 0x434f35, 0x93674a,
    0x927e63,
  ].map((v) => standard(v, 0.89));
  const rng = random(616);
  function binding(x, y, z, w, h, d, col, angle = 0) {
    const b = new THREE.Group();
    furniture.add(b);
    b.position.set(x, y, z);
    b.rotation.z = angle;
    rounded(b, [w, h, d], [0, h * 0.5, 0], col, 0.011);
    for (const band of [0.1, 0.16, 0.82])
      box(b, [w * 0.84, 0.012, 0.008], [0, h * band, d * 0.5], brass);
  }
  let x = -1.2;
  for (let i = 0; i < 14; i++) {
    const w = 0.075 + rng() * 0.092,
      h = 0.52 + rng() * 0.24;
    if (x > 0.12 && x < 0.39) x = 0.42;
    binding(x, 0.39, 0.02, w, h, 0.48, cloths[i % 8], i === 11 ? -0.11 : 0);
    x += w + 0.014;
  }
  for (let j = 0; j < 3; j++) {
    const stack = rounded(
      furniture,
      [0.68, 0.077, 0.43],
      [-0.9, 1.88 + j * 0.081, 0.1],
      cloths[j + 2],
    );
    stack.rotation.y = 0.09 * j;
  }
  let rowX = -0.5;
  for (let i = 0; i < 7; i++) {
    const width = 0.073 + rng() * 0.051;
    binding(
      rowX,
      1.854,
      -0.02,
      width,
      0.4 + rng() * 0.2,
      0.32,
      cloths[(i + 3) % 8],
      i === 6 ? -0.19 : 0,
    );
    rowX += width + 0.009;
  }
  const celadon = new THREE.MeshPhysicalMaterial({
    color: 0x91a798,
    roughness: 0.28,
    clearcoat: 0.45,
  });
  turned(
    furniture,
    [
      [0.08, 0],
      [0.135, 0.04],
      [0.165, 0.18],
      [0.13, 0.27],
      [0.063, 0.31],
      [0.057, 0.42],
      [0.078, 0.43],
    ],
    [0.53, 1.85, 0.04],
    celadon,
  );
  for (const [cx, h] of [
    [0.91, 0.57],
    [1.17, 0.41],
  ]) {
    turned(
      furniture,
      [
        [0.09, 0],
        [0.1, 0.025],
        [0.057, 0.058],
        [0.023, 0.12],
        [0.022, h * 0.66],
        [0.067, h * 0.74],
        [0.05, h * 0.79],
      ],
      [cx, 1.84, 0.03],
      brass,
    );
    turned(
      furniture,
      [
        [0.031, 0],
        [0.03, h * 0.69],
        [0.022, h * 0.71],
      ],
      [cx, 1.84 + h * 0.79, 0.03],
      standard(0xdec9a3),
    );
  }
  // Gilded outer bead, dark fillet, cream mount and printed botanical plate.
  const frame = new THREE.Group();
  scene.add(frame);
  frame.position.set(1.86, 2.46, -3.1);
  rounded(frame, [1.62, 2.08, 0.095], [0, 0, 0], darkWood, 0.018);
  box(frame, [1.56, 2.02, 0.04], [0, 0, 0.058], brass);
  box(frame, [1.515, 1.976, 0.04], [0, 0, 0.081], darkWood);
  box(frame, [1.43, 1.89, 0.026], [0, 0, 0.107], standard(0xc9b38c));
  const print = mesh(
    new THREE.PlaneGeometry(1.3, 1.61),
    new THREE.MeshStandardMaterial({ map: painting, roughness: 0.88 }),
    frame,
    [0, 0, 0.123],
  );
  print.receiveShadow = true;
  // Bentwood reading chair. A continuous steam-bent hoop encloses a woven back.
  const chair = new THREE.Group();
  scene.add(chair);
  chair.position.set(-3.62, -1.7, -0.86);
  chair.rotation.y = 0.55;
  chair.scale.setScalar(1.1);
  const velvet = standard(0x8a623c, 0.95);
  for (const x of [-0.42, 0.42])
    for (const z of [-0.35, 0.35])
      tube(
        chair,
        [
          [x * 1.25, 0, z * 1.26],
          [x * 0.97, 0.65, z],
          [x, 0.92, z],
        ],
        0.047,
        darkWood,
        9,
      ).castShadow = true;
  rounded(chair, [1.07, 0.12, 1.0], [0, 0.87, 0], darkWood, 0.055);
  rounded(chair, [1.07, 0.2, 0.99], [0, 1.01, 0.018], velvet, 0.094);
  tube(
    chair,
    [
      [-0.44, 0.64, -0.34],
      [-0.48, 1.5, -0.48],
      [-0.46, 1.99, -0.56],
      [-0.3, 2.17, -0.585],
      [0, 2.22, -0.6],
      [0.3, 2.17, -0.585],
      [0.46, 1.99, -0.56],
      [0.48, 1.5, -0.48],
      [0.44, 0.64, -0.34],
    ],
    0.05,
    oak,
    48,
  ).castShadow = true;
  const cane = standard(0xbb9463, 0.82);
  for (let i = -10; i <= 10; i++) {
    const x = i * 0.04,
      y2 = 2.12 - 0.16 * Math.pow(Math.abs(i / 10), 3);
    tube(
      chair,
      [
        [x, 1.23, -0.45],
        [x, 1.65, -0.52],
        [x, y2, -0.56],
      ],
      0.014,
      cane,
      6,
    );
  }
  for (let j = 0; j < 23; j++) {
    const y = 1.24 + j * 0.037,
      w = 0.425 - 0.095 * Math.pow(j / 22, 6);
    tube(
      chair,
      [
        [-w, y, -0.44 - (y - 1.2) * 0.15],
        [0, y, -0.435 - (y - 1.2) * 0.15],
        [w, y, -0.44 - (y - 1.2) * 0.15],
      ],
      0.01,
      cane,
      6,
    );
  }
  for (const sx of [-1, 1])
    tube(
      chair,
      [
        [sx * 0.46, 1.56, -0.45],
        [sx * 0.56, 1.49, -0.05],
        [sx * 0.55, 1.43, 0.26],
        [sx * 0.44, 1.01, 0.29],
      ],
      0.036,
      oak,
      15,
    );
  // Lay oak parquet as alternating boards with the photographic grain following each stave.
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1024;
  const g = canvas.getContext("2d"),
    grain = walnut.image;
  g.fillStyle = "#5b4939";
  g.fillRect(0, 0, 1024, 1024);
  const k = 32,
    L = 4;
  function board(x, y, vertical) {
    g.save();
    g.translate(x * k, y * k);
    if (vertical) g.rotate(Math.PI / 2);
    g.drawImage(
      grain,
      rng() * grain.width * 0.55,
      rng() * grain.height * 0.6,
      grain.width * 0.4,
      grain.height * 0.09,
      1,
      1,
      L * k - 1,
      k - 1,
    );
    g.fillStyle = "rgba(174,123,71," + (0.12 + rng() * 0.28) + ")";
    g.fillRect(1, 1, L * k - 1, k - 1);
    g.restore();
  }
  for (let i = -7; i <= 7; i++)
    for (let j = -10; j <= 44; j++) {
      const x = L * i + j,
        y = -L * i + j;
      board(x, y, false);
      board(x + L + 1, y - L + 1, true);
    }
  const parquet = canvasTexture(canvas);
  parquet.wrapS = parquet.wrapT = THREE.RepeatWrapping;
  parquet.center.set(0.5, 0.5);
  parquet.rotation = Math.PI / 4;
  parquet.repeat.set(2.4, 2.4);
  floorMat.map = parquet;
  floorMat.color.setHex(0xba9b75);
}
