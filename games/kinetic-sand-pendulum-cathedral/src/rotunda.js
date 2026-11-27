import * as T from 'three';
import { add, turn, disk, hoop, annulus, rod, fluted, batch } from './geometry.js';
import { TAU } from './motion.js';

const N = 16,
  R = 10.6,
  half = R * Math.sin(Math.PI / N);
function ashlar(group, lo, hi, raw, outer, mat, spandrel = false) {
  const shape = new T.Shape();
  const point = (a, r) => [Math.cos(a) * r, Math.sin(a) * r];
  const a = point(lo, raw);
  shape.moveTo(...a);
  for (let j = 1; j <= 4; j++) shape.lineTo(...point(lo + ((hi - lo) * j) / 4, raw));
  if (spandrel) {
    shape.lineTo(Math.cos(hi) * outer, outer + 0.19);
    shape.lineTo(Math.cos(lo) * outer, outer + 0.19);
  } else {
    for (let j = 4; j >= 0; j--) shape.lineTo(...point(lo + ((hi - lo) * j) / 4, outer));
  }
  shape.closePath();
  const g = new T.ExtrudeGeometry(shape, { depth: spandrel ? 0.58 : 0.8, bevelEnabled: false });
  add(group, g, mat, 0, 4.05, spandrel ? -0.28 : -0.4);
}
export async function rotunda(scene, m) {
  const masonry = new T.Group();
  scene.add(masonry);
  disk(masonry, 14, -0.2, 0.33, m.floor);
  // The inlaid tesserae follow the circular plan of the building.
  for (const r of [4.72, 4.79, 5.4, 5.48, 6.9, 6.98, 8.65, 8.72, 9.32]) {
    annulus(masonry, r, r + 0.029, -0.028, m.bronze);
  }
  for (let i = 0; i < 64; i++) {
    const a = (i * TAU) / 64,
      s = Math.sin(a),
      c = Math.cos(a);
    const l = 9.97 - (i % 2 ? 5.49 : 4.8),
      r = 9.97 - l * 0.5;
    const line = add(masonry, new T.BoxGeometry(0.018, 0.012, l), m.joint, s * r, -0.034, c * r);
    line.rotation.y = a;
    if (i % 2 === 0) {
      const stone = add(
        masonry,
        new T.BoxGeometry(0.22, 0.014, 0.22),
        m.patina,
        s * 6.16,
        -0.03,
        c * 6.16,
      );
      stone.rotation.y = a + Math.PI / 4;
    }
  }
  // Three steps run continuously along the perimeter, behind the table.
  for (const [rin, rout, y, h] of [
    [9, 12, 0.09, 0.2],
    [9.38, 12, 0.3, 0.23],
    [9.72, 12, 0.54, 0.25],
  ]) {
    annulus(masonry, rin, rout, y, m.limestone);
    turn(
      masonry,
      [
        [rin, y],
        [rin, y - h],
        [rin + 0.02, y - h],
      ],
      m.weathered,
    );
  }
  for (let i = 0; i < N; i++) {
    const a = (i * TAU) / N,
      s = Math.sin(a),
      c = Math.cos(a);
    const cl = new T.Group();
    cl.position.set(R * s, 0, R * c);
    cl.rotation.y = a;
    masonry.add(cl);
    add(cl, new T.BoxGeometry(0.91, 0.32, 0.91), m.weathered, 0, 0.81, 0);
    add(cl, new T.BoxGeometry(0.84, 0.11, 0.84), m.light, 0, 1.015, 0);
    turn(
      cl,
      [
        [0.45, 1.06],
        [0.47, 1.11],
        [0.44, 1.16],
        [0.37, 1.18],
        [0.35, 1.23],
        [0.38, 1.25],
        [0.36, 1.31],
        [0.32, 1.32],
      ],
      m.light,
      48,
    );
    fluted(cl, 0.33, 0.27, 1.3, 2.45, 0.037, 20, m.limestone);
    turn(
      cl,
      [
        [0.27, 3.74],
        [0.32, 3.76],
        [0.34, 3.81],
        [0.3, 3.84],
        [0.4, 3.94],
        [0.43, 3.99],
        [0.43, 4.04],
      ],
      m.light,
      48,
    );
    hoop(cl, 0.315, 3.78, 0.018, m.bronze, 40);
    add(cl, new T.BoxGeometry(0.88, 0.14, 0.84), m.light, 0, 4.05, 0);
    const bay = new T.Group(),
      ang = a + Math.PI / N;
    bay.position.set(
      R * Math.cos(Math.PI / N) * Math.sin(ang),
      0,
      R * Math.cos(Math.PI / N) * Math.cos(ang),
    );
    bay.rotation.y = ang;
    masonry.add(bay);
    const inner = half - 0.34;
    for (let j = 0; j < 13; j++) {
      const lo = (j * Math.PI) / 13 + 0.005,
        hi = ((j + 1) * Math.PI) / 13 - 0.005;
      ashlar(
        bay,
        lo,
        hi,
        inner - (j === 6 ? 0.075 : 0),
        half + 0.005,
        j % 4 === 1 ? m.weathered : m.light,
      );
      ashlar(bay, lo, hi, half + 0.01, half + 0.02, j % 3 === 0 ? m.weathered : m.limestone, true);
    }
    for (const [y, w, h] of [
      [6.39, 0.84, 0.14],
      [6.51, 0.93, 0.12],
      [6.69, 1, 0.23],
      [6.88, 1.14, 0.11],
    ]) {
      add(bay, new T.BoxGeometry(half * 2 + 0.16, h, w), m.light, 0, y, 0);
    }
    // A low pierced parapet leaves the mountain horizon and shafts of light exposed.
    add(bay, new T.BoxGeometry(half * 2, 0.12, 0.39), m.light, 0, 1.31, 0.29);
    for (let j = -3; j <= 3; j++) {
      const b = new T.Group();
      b.position.set(j * 0.47, 0, 0.29);
      bay.add(b);
      turn(
        b,
        [
          [0.14, 0.56],
          [0.14, 0.66],
          [0.08, 0.72],
          [0.09, 0.78],
          [0.14, 0.89],
          [0.12, 1.0],
          [0.066, 1.13],
          [0.1, 1.2],
          [0.12, 1.27],
        ],
        m.limestone,
        12,
      );
    }
    // Radial roof ribs climb from the cornice to the central suspension bearing.
    rod(bay, [0, 6.89, 0.05], [0, 9.33, -R + 1.2], 0.083, m.bronze, 10);
  }
  for (const [r, y, h, mat] of [
    [1.34, 9.36, 0.16, m.bronze],
    [1.16, 9.25, 0.13, m.dark],
    [0.96, 9.17, 0.08, m.brass],
  ]) {
    annulus(masonry, r - 0.28, r, y, mat);
    hoop(masonry, r, y, 0.055, mat);
    turn(
      masonry,
      [
        [r, y + h],
        [r, y],
      ],
      mat,
    );
  }
  rod(masonry, [-1.12, 9.29, 0], [1.12, 9.29, 0], 0.062, m.brass);
  // A shallow ribbed cupola, open at its gilded central eye.
  const ceiling = m.stone('#919689'),
    coffers = m.stone('#9a9c89');
  const shell = [];
  for (let j = 0; j <= 28; j++) {
    const v = (1.438 * j) / 28;
    shell.push([10.86 * Math.cos(v), 6.89 + 3.12 * Math.sin(v)]);
  }
  ceiling.side = T.DoubleSide;
  turn(masonry, shell.slice().reverse(), ceiling, 128);
  for (let j = 1; j <= 5; j++) {
    const v = j * 0.24;
    hoop(masonry, 10.86 * Math.cos(v), 6.85 + 3.12 * Math.sin(v), 0.052, coffers);
  }
  for (let i = 0; i < N; i++) {
    const a = (TAU * i) / N + Math.PI / N;
    for (let j = 0; j < 14; j++) {
      const pt = (v) => [
        10.78 * Math.cos(v) * Math.sin(a),
        6.855 + 3.12 * Math.sin(v),
        10.78 * Math.cos(v) * Math.cos(a),
      ];
      rod(masonry, pt((j * 1.438) / 14), pt(((j + 1) * 1.438) / 14), 0.075, m.bronze);
    }
    rod(
      masonry,
      [1.43 * Math.sin(a), 9.99, 1.43 * Math.cos(a)],
      [1.27 * Math.sin(a), 9.37, 1.27 * Math.cos(a)],
      0.052,
      m.brass,
    );
  }
  for (const [r, y, w] of [
    [1.46, 9.97, 0.1],
    [1.35, 9.89, 0.055],
    [1.28, 9.41, 0.045],
    [1.17, 9.29, 0.035],
  ])
    hoop(masonry, r, y, w, m.brass);
  batch(masonry);

  const panorama = await new T.TextureLoader().loadAsync('./assets/valley.jpg');
  panorama.colorSpace = T.SRGBColorSpace;
  panorama.wrapS = T.MirroredRepeatWrapping;
  const sky = new T.Mesh(
    new T.SphereGeometry(125, 64, 32),
    new T.ShaderMaterial({
      side: T.BackSide,
      depthWrite: false,
      uniforms: { valley: { value: panorama } },
      vertexShader:
        'varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: `varying vec3 dir;uniform sampler2D valley;
    void main(){
      vec3 d=normalize(dir);
      float u=atan(d.x,-d.z)*.6366198+.53;
      float v=atan(d.y,length(d.xz))*1.62+.59;
      vec3 hills=texture2D(valley,vec2(u,clamp(v,.002,.998))).rgb;
      vec3 zenith=vec3(.47,.57,.61);
      gl_FragColor=vec4(mix(hills*1.02,zenith,smoothstep(.96,1.90,v)),1.);
    }`,
    }),
  );
  scene.add(sky);
}
