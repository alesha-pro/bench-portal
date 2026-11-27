import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { random, TAU, mix } from './math.js';

function canvasTexture(n, paint) {
  const c = document.createElement('canvas');
  c.width = c.height = n;
  paint(c.getContext('2d'), n);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}
function stoneTexture() {
  return canvasTexture(512, (g, n) => {
    const rng = random(209),
      data = g.createImageData(n, n),
      grids = [];
    for (const size of [4, 9, 21, 54, 128]) {
      grids.push({
        size,
        values: Float32Array.from({ length: size * size }, rng),
      });
    }
    for (let y = 0; y < n; y++)
      for (let x = 0; x < n; x++) {
        let value = 0,
          weight = 0.48;
        for (const { size, values } of grids) {
          const px = (x * size) / n,
            py = (y * size) / n,
            ix = Math.floor(px),
            iy = Math.floor(py);
          let fx = px - ix,
            fy = py - iy;
          fx = fx * fx * (3 - 2 * fx);
          fy = fy * fy * (3 - 2 * fy);
          const at = (a, b) => values[(b % size) * size + (a % size)];
          value +=
            weight *
            mix(
              mix(at(ix, iy), at(ix + 1, iy), fx),
              mix(at(ix, iy + 1), at(ix + 1, iy + 1), fx),
              fy,
            );
          weight *= 0.57;
        }
        const tooth = rng(),
          f = 55 + value * 169 + tooth * 28;
        const i = (x + n * y) * 4;
        data.data.set([f, f * 0.986, f * 0.953, 255], i);
      }
    g.putImageData(data, 0, 0);
    for (let i = 0; i < 1950; i++) {
      let x = rng() * n,
        y = rng() * n;
      g.fillStyle = i % 5 ? 'rgba(8,13,15,.18)' : 'rgba(235,216,157,.19)';
      g.fillRect(x, y, rng() * 3 + 0.6, rng() * 1.6 + 0.5);
    }
    for (let i = 0; i < 36; i++) {
      let x = rng() * n,
        y = rng() * n;
      g.beginPath();
      g.moveTo(x, y);
      for (let j = 0; j < 9; j++) {
        x += rng() * 8 - 2;
        y += rng() * 6 - 3.6;
        g.lineTo(x, y);
      }
      g.strokeStyle = 'rgba(23,21,20,.22)';
      g.lineWidth = 0.7;
      g.stroke();
    }
  });
}
function friezeTexture() {
  return canvasTexture(256, (g, n) => {
    g.clearRect(0, 0, n, n);
    g.strokeStyle = '#b48752';
    for (const y of [42, 55, 201, 214]) {
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(0, y);
      g.lineTo(n, y);
      g.stroke();
    }
    g.lineWidth = 7;
    g.lineJoin = 'miter';
    for (let x = -128; x < 256; x += 128) {
      g.beginPath();
      g.moveTo(x, 164);
      g.lineTo(x + 22, 164);
      g.lineTo(x + 22, 92);
      g.lineTo(x + 101, 92);
      g.lineTo(x + 101, 149);
      g.lineTo(x + 53, 149);
      g.lineTo(x + 53, 119);
      g.lineTo(x + 75, 119);
      g.stroke();
      g.beginPath();
      g.moveTo(x + 75, 175);
      g.lineTo(x + 128, 175);
      g.lineTo(x + 128, 72);
      g.stroke();
    }
  });
}
const stoneVert = `
 varying vec3 wp,wn;
 void main(){vec4 w=modelMatrix*vec4(position,1.);wp=w.xyz;wn=mat3(modelMatrix)*normal;gl_Position=projectionMatrix*viewMatrix*w;}`;
const stoneFrag = `
 varying vec3 wp,wn;uniform vec3 tint;uniform sampler2D grain;uniform float tiles;
 void main(){
 vec3 n=normalize(wn),a=abs(n);vec2 uv=a.y>max(a.z,a.x)?wp.xz:(a.x>a.z?wp.zy:wp.xy);
 float g=texture2D(grain,uv*.40).r;
 float macro=texture2D(grain,uv*.088+vec2(.43)).g;
 float val=.48+.52*max(0.,dot(n,normalize(vec3(-.45,.82,.31))));
 vec3 col=tint*(.40+.95*g+.35*macro)*val;
 col+=vec3(.047,.050,.052)*pow(1.-max(0.,dot(n,normalize(cameraPosition-wp))),3.);
 for(int i=0;i<4;i++){
 vec3 l=vec3(i%2==0?-4.35:4.35,.24,i<2?.95:-4.7)-wp;
 col+=vec3(.33,.142,.041)*(.24+.76*max(0.,dot(n,normalize(l))))/(.80+dot(l,l)*.62);
 }
 if(tiles>.5){
 vec2 q=wp.xz/2.35;q.x+=floor(q.y)*.5;
 vec2 d=min(fract(q),1.-fract(q));float line=smoothstep(.001,.008,min(d.x,d.y));
 col*=.67+.33*line;
 }
 float haze=1.-exp(-.00088*dot(wp-cameraPosition,wp-cameraPosition));
 col=mix(col,vec3(.26,.31,.33),haze*.74);
 gl_FragColor=vec4(col,1.);}`;
function mistMap() {
  return canvasTexture(256, (g, n) => {
    const rng = random(19);
    for (let i = 0; i < 146; i++) {
      const x = (0.14 + 0.72 * rng()) * n,
        y = (0.2 + 0.6 * rng()) * n,
        r = (0.05 + 0.13 * rng()) * n;
      const grad = g.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, 'rgba(223,223,223,.11)');
      grad.addColorStop(1, 'rgba(200,200,200,0)');
      g.fillStyle = grad;
      g.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
  });
}
export async function createTemple(scene) {
  const map = await new THREE.TextureLoader().loadAsync('./assets/horizon.jpg');
  map.wrapS = THREE.RepeatWrapping;
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(86, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { matte: { value: map } },
      vertexShader: `varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `varying vec3 dir;uniform sampler2D matte;void main(){vec3 d=normalize(dir);
    vec2 uv=vec2(.5+atan(d.x,-d.z)/6.283185,.36+asin(clamp(d.y,-1.,1.))*.815);
    gl_FragColor=vec4(texture2D(matte,vec2(uv.x,clamp(uv.y,.002,.998))).rgb,1.);}`,
    }),
  );
  sky.renderOrder = -100;
  scene.add(sky);
  const grain = stoneTexture();
  const rock = (tint, tiles = 0) =>
    new THREE.ShaderMaterial({
      vertexShader: stoneVert,
      fragmentShader: stoneFrag,
      uniforms: {
        tint: { value: new THREE.Vector3(...tint) },
        grain: { value: grain },
        tiles: { value: tiles },
      },
    });
  const basalt = rock([0.195, 0.216, 0.22]),
    edge = rock([0.26, 0.275, 0.267]),
    soot = rock([0.105, 0.12, 0.123]),
    floor = rock([0.14, 0.17, 0.18], 1);
  const brass = rock([0.6, 0.43, 0.245]),
    darkBrass = rock([0.37, 0.27, 0.167]),
    wood = rock([0.25, 0.119, 0.087]);
  const batches = new Map();
  function add(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
    geo.applyMatrix4(
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
        new THREE.Vector3(1, 1, 1),
      ),
    );
    if (geo.index) geo = geo.toNonIndexed();
    if (!batches.has(mat)) batches.set(mat, []);
    batches.get(mat).push(geo);
  }
  function cyl(mat, x, z, y, bottom, top, h, sides = 64, phase = 0) {
    add(
      new THREE.CylinderGeometry(top, bottom, h, sides, 1, false, phase),
      mat,
      x,
      y,
      z,
    );
  }
  function box(mat, x, y, z, w, h, d, rx = 0, ry = 0, rz = 0) {
    add(new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz);
  }
  function ring(mat, r, y, thick, x = 0, z = 0, segments = 128) {
    add(
      new THREE.TorusGeometry(r, thick, 5, segments),
      mat,
      x,
      y,
      z,
      Math.PI / 2,
    );
  }
  // Shrine terrace ends at a cliff above the cloud sea.
  cyl(floor, 0, 0, -1.79, 7.57, 7.38, 0.27, 24, 0.06);
  cyl(soot, 0, 0, -2.5, 7.11, 7.53, 1.19, 24, 0.06);
  cyl(basalt, 0, 0, -3.7, 6.4, 7.13, 1.22, 24, 0.06);
  const cliffRng = random(614);
  for (let i = 0; i < 103; i++) {
    const a = cliffRng() * TAU,
      r = 6.93 + cliffRng() * 0.57,
      sz = 0.15 + cliffRng() * 0.55;
    const g = new THREE.DodecahedronGeometry(sz, 0);
    g.scale(1, 1.18 + cliffRng() * 1.8, 0.65 + cliffRng() * 0.56);
    add(
      g,
      i % 4 === 0 ? edge : basalt,
      r * Math.sin(a),
      -2.18 - cliffRng() * 1.02,
      r * Math.cos(a),
      0.3 * cliffRng(),
      a,
      0.16,
    );
  }
  // A broken approach winds behind the lanterns to the mountain gate.
  for (let i = 0; i < 16; i++) {
    const z = -4.2 - i * 0.63,
      x = 2.7 + i * 0.205;
    box(basalt, x, -1.85, z, 3.46, 0.37, 0.635, 0, -0.3);
    box(edge, x, -1.648, z, 3.36, 0.06, 0.56, 0, -0.3);
  }
  // Hewn ascending basalt courses. Front surfaces keep their engraved key band.
  for (const [y, lo, hi, h, mat] of [
    [-1.51, 5.48, 5.44, 0.27, basalt],
    [-1.33, 5.34, 5.09, 0.12, edge],
    [-1.18, 4.98, 4.98, 0.19, basalt],
    [-1.04, 4.96, 4.73, 0.1, edge],
    [-0.81, 4.49, 4.49, 0.37, soot],
    [-0.6, 4.52, 4.61, 0.07, darkBrass],
    [-0.46, 4.62, 4.62, 0.22, basalt],
    [-0.32, 4.68, 4.76, 0.065, edge],
    [-0.23, 4.77, 4.77, 0.12, soot],
    [-0.135, 4.77, 4.64, 0.07, edge],
    [-0.055, 4.63, 4.62, 0.095, basalt],
  ])
    cyl(mat, 0, 0, y, lo, hi, h, 16, Math.PI / 16);
  const frieze = friezeTexture();
  frieze.repeat.set(48, 1);
  const fret = new THREE.MeshBasicMaterial({
    map: frieze,
    color: 0xa28461,
    transparent: true,
    depthWrite: false,
  });
  add(
    new THREE.CylinderGeometry(4.495, 4.495, 0.37, 16, 1, true, Math.PI / 16),
    fret,
    0,
    -0.8,
    0,
  );
  for (const [r, t] of [
    [3.6, 0.01],
    [3.66, 0.014],
    [3.92, 0.013],
    [4.16, 0.017],
    [4.21, 0.011],
  ])
    ring(darkBrass, r, 0.003, t);
  for (let i = 0; i < 144; i++) {
    const q = (i * TAU) / 144,
      major = i % 6 === 0,
      r = major ? 3.804 : 3.83;
    box(
      major ? brass : darkBrass,
      r * Math.sin(q),
      0.005,
      r * Math.cos(q),
      major ? 0.027 : 0.014,
      0.01,
      major ? 0.18 : 0.07,
      0,
      q,
    );
  }
  for (let i = 0; i < 12; i++) {
    const a = (i * TAU) / 12,
      r = 4.07;
    box(
      brass,
      r * Math.sin(a),
      0.012,
      r * Math.cos(a),
      0.068,
      0.012,
      0.068,
      0,
      a + Math.PI / 4,
    );
  }
  // Carved floor medallion is progressively revealed at liftoff.
  for (const r of [0.22, 0.31, 1.0, 1.06, 1.47])
    ring(darkBrass, r, 0.003, 0.01);
  for (let i = 0; i < 16; i++) {
    const q = (i * TAU) / 16;
    box(
      darkBrass,
      0.68 * Math.sin(q),
      0.002,
      0.68 * Math.cos(q),
      0.009,
      0.009,
      0.68,
      0,
      q + 0.23,
    );
  }
  const lanternWindows = [],
    haloes = [];
  const glow = canvasTexture(128, (g, n) => {
    const gradient = g.createRadialGradient(
      n / 2,
      n / 2,
      0,
      n / 2,
      n / 2,
      n / 2,
    );
    for (const [stop, alpha] of [
      [0, 0.76],
      [0.08, 0.67],
      [0.21, 0.29],
      [0.48, 0.079],
      [1, 0],
    ])
      gradient.addColorStop(stop, 'rgba(255,212,153,' + alpha + ')');
    g.fillStyle = gradient;
    g.fillRect(0, 0, n, n);
  });
  const windowTex = canvasTexture(256, (g, n) => {
    const grad = g.createRadialGradient(
      n * 0.47,
      n * 0.6,
      2,
      n * 0.48,
      n * 0.55,
      n * 0.7,
    );
    grad.addColorStop(0, '#fff4c0');
    grad.addColorStop(0.44, '#ffd38c');
    grad.addColorStop(1, '#bd643b');
    g.fillStyle = grad;
    g.fillRect(0, 0, n, n);
    const rand = random(65);
    for (let i = 0; i < 4700; i++) {
      g.fillStyle = 'rgba(114,63,27,.065)';
      g.fillRect(rand() * n, rand() * n, 0.9, rand() * 7 + 1);
    }
  });
  function lantern(x, z, s, base, i) {
    const post = (mat, y, lo, hi, h, n = 8) =>
      cyl(mat, x, z, base + y * s, lo * s, hi * s, h * s, n, Math.PI / 8);
    const beam = (mat, dx, y, dz, w, h, d, ry = 0) =>
      box(
        mat,
        x + dx * s,
        base + y * s,
        z + dz * s,
        w * s,
        h * s,
        d * s,
        0,
        ry,
      );
    post(basalt, 0.09, 0.62, 0.62, 0.18);
    post(edge, 0.23, 0.6, 0.44, 0.1);
    post(basalt, 0.34, 0.43, 0.34, 0.15);
    post(soot, 0.61, 0.25, 0.22, 0.48);
    post(edge, 0.88, 0.32, 0.36, 0.1);
    post(basalt, 1.01, 0.39, 0.55, 0.16);
    post(darkBrass, 1.12, 0.55, 0.55, 0.055);
    post(edge, 1.18, 0.56, 0.49, 0.09);
    const lamp = new THREE.MeshBasicMaterial({
      map: windowTex,
      color: 0xffe5b5,
    });
    lanternWindows.push(lamp);
    beam(lamp, 0, 1.48, 0, 0.655, 0.53, 0.655);
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        beam(soot, sx * 0.345, 1.48, sz * 0.345, 0.09, 0.61, 0.09);
    for (const k of [-1, 1]) {
      for (const dx of [-0.13, 0.13]) {
        beam(darkBrass, dx, 1.49, k * 0.336, 0.022, 0.52, 0.022);
        beam(darkBrass, k * 0.336, 1.49, dx, 0.022, 0.52, 0.022);
      }
      for (const y of [1.3, 1.63]) {
        beam(soot, 0, y, k * 0.344, 0.64, 0.021, 0.022);
        beam(soot, k * 0.344, y, 0, 0.022, 0.021, 0.64);
      }
    }
    // Hipped cap with a concave sweep and four kicked-up corners.
    const roofs = [
      [-0.005, 0.4],
      [0.07, 0.77],
      [0.15, 0.69],
      [0.19, 0.51],
      [0.3, 0.32],
      [0.42, 0.2],
    ];
    const geom = new THREE.BufferGeometry(),
      p = [];
    function roofVertex(level, j) {
      const [y, r] = roofs[level],
        a = (j * Math.PI) / 4;
      const corner = j % 2 === 1 ? 1 : 0.84;
      return [
        x + r * corner * Math.sin(a) * s,
        base +
          (1.74 +
            y +
            ((level === 1 || level === 2) && j % 2 === 1 ? 0.095 : 0)) *
            s,
        z + r * corner * Math.cos(a) * s,
      ];
    }
    for (let l = 0; l < roofs.length - 1; l++)
      for (let j = 0; j < 8; j++) {
        const a = roofVertex(l, j),
          b = roofVertex(l, j + 1),
          c = roofVertex(l + 1, j),
          d = roofVertex(l + 1, j + 1);
        p.push(...a, ...b, ...c, ...b, ...d, ...c);
      }
    geom.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    geom.computeVertexNormals();
    geom.setAttribute(
      'uv',
      new THREE.Float32BufferAttribute(new Float32Array((p.length / 3) * 2), 2),
    );
    add(geom, edge);
    post(soot, 2.17, 0.22, 0.16, 0.17);
    post(darkBrass, 2.29, 0.12, 0.14, 0.085);
    post(basalt, 2.42, 0.14, 0.03, 0.2);
    post(brass, 2.55, 0.042, 0, 0.09);
    const m = new THREE.SpriteMaterial({
      map: glow,
      color: 0xff9948,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      opacity: 0.43,
    });
    const sprite = new THREE.Sprite(m);
    sprite.position.set(x, base + 1.48 * s, z + 0.05);
    sprite.scale.setScalar(2.22 * s);
    sprite.renderOrder = 5;
    scene.add(sprite);
    haloes.push(m);
  }
  lantern(-4.35, 0.95, 0.99, -1.27, 0);
  lantern(4.35, 0.95, 0.99, -1.27, 1);
  lantern(-4.35, -4.7, 1.17, -1.65, 2);
  lantern(4.35, -4.7, 1.17, -1.65, 3);
  lantern(5.36, -8.1, 0.82, -1.64, 4);
  lantern(3.93, -10.45, 0.75, -1.64, 5);
  // Weathered torii, set beyond the shrine at the edge of the pass.
  function gate(cx, cz, scale) {
    const gateBox = (mat, x, y, w, h, d, angle = 0) =>
      box(
        mat,
        cx + x * scale,
        -1.64 + y * scale,
        cz,
        w * scale,
        h * scale,
        d * scale,
        0,
        0,
        angle,
      );
    for (const s of [-1, 1]) {
      const xx = cx + s * 1.66 * scale;
      cyl(
        basalt,
        xx,
        cz,
        -1.64 + 0.2 * scale,
        0.3 * scale,
        0.27 * scale,
        0.4 * scale,
        12,
      );
      cyl(
        wood,
        xx,
        cz,
        -1.64 + 1.74 * scale,
        0.177 * scale,
        0.153 * scale,
        3.15 * scale,
        12,
      );
      cyl(
        darkBrass,
        xx,
        cz,
        -1.64 + 0.49 * scale,
        0.19 * scale,
        0.19 * scale,
        0.1 * scale,
        12,
      );
    }
    gateBox(wood, 0, 2.62, 4.18, 0.15, 0.21);
    gateBox(wood, 0, 3.27, 4.46, 0.18, 0.32);
    gateBox(soot, 0, 3.43, 3.8, 0.15, 0.43);
    gateBox(darkBrass, 0, 3.35, 3.78, 0.04, 0.42);
    for (const s of [-1, 1])
      gateBox(soot, s * 2.1, 3.48, 0.72, 0.15, 0.43, s * 0.12);
    gateBox(darkBrass, 0, 2.98, 0.23, 0.5, 0.18);
  }
  gate(5.76, -11.8, 1.3);
  const twig = rock([0.115, 0.105, 0.093]),
    needles = rock([0.105, 0.165, 0.161]),
    tips = rock([0.159, 0.209, 0.181]);
  function limb(a, b, r0, r1, mat) {
    const axis = b.clone().sub(a);
    const length = axis.length();
    const g = new THREE.CylinderGeometry(r1, r0, length, 6);
    g.applyQuaternion(
      new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        axis.normalize(),
      ),
    );
    const mid = a.clone().lerp(b, 0.5);
    add(g, mat, mid.x, mid.y, mid.z);
  }
  // Gnarled cliff pines: recursive, upswept limbs terminate in flattened needle pads.
  const sprigRng = random(815);
  const pineInk = canvasTexture(192, (g, n) => {
    const r = random(466);
    g.clearRect(0, 0, n, n);
    for (let i = 0; i < 63; i++) {
      const x = 13 + r() * (n - 26),
        len = 8 + 26 * r(),
        base = n * 0.65 + 13 * Math.sin(x * 0.025) + r() * 14;
      const direction = ((x - n / 2) / n) * 1.75 + r() * 0.65 - 0.32;
      for (let j = 0; j < 19; j++) {
        const t = j / 20,
          xx = x + len * direction * t,
          yy = base - len * t;
        const dx = (r() - 0.5) * 15,
          dy = 3 + r() * 11;
        g.strokeStyle = i % 4 ? '#b3bcad' : '#e1d1ae';
        g.lineWidth = 0.85 + r() * 0.86;
        g.beginPath();
        g.moveTo(xx, yy);
        g.lineTo(xx + dx, yy - dy);
        g.stroke();
      }
    }
  });
  const brush = new THREE.MeshBasicMaterial({
    map: pineInk,
    color: 0x788674,
    alphaTest: 0.27,
    side: THREE.DoubleSide,
  });

  function pine(x, y, z, scale, lean) {
    const base = new THREE.Vector3(x, y, z);
    const coords = (dx, dy, dz) =>
      base.clone().add(new THREE.Vector3(dx * scale, dy * scale, dz * scale));
    const nodes = [
      [0, 0, 0],
      [0.1, 0.65, 0.02],
      [-0.04, 1.25, -0.04],
      [0.22, 1.86, 0.05],
      [0.55, 2.33, -0.03],
      [0.75, 2.72, 0.04],
      [1.02, 2.98, 0.03],
    ];
    const spine = nodes.map(([a, b, c]) => coords(a * lean, b, c));
    for (let j = 0; j < spine.length - 1; j++)
      limb(
        spine[j],
        spine[j + 1],
        (0.15 - 0.018 * j) * scale,
        (0.13 - 0.019 * j) * scale,
        twig,
      );
    const pads = (origin, span) => {
      for (let k = 0; k < 14; k++) {
        const a = sprigRng() * TAU,
          r = Math.sqrt(sprigRng()) * span;
        const g = new THREE.IcosahedronGeometry(1, 0);
        const w =
          (0.16 + 0.2 * sprigRng()) * scale * (0.55 + (span / scale) * 0.55);
        g.scale(
          w * 0.84,
          w * (0.22 + 0.14 * sprigRng()),
          w * (0.51 + 0.29 * sprigRng()),
        );
        const px = origin.x + Math.cos(a) * r,
          py = origin.y + 0.1 * scale * sprigRng() - r * 0.1,
          pz = origin.z + Math.sin(a) * r * 0.59;
        add(g, k % 5 === 0 ? tips : needles, px, py, pz, 0, a);
        add(
          new THREE.PlaneGeometry(w * 2.28, w * 1.22),
          brush,
          px,
          py + 0.12 * w,
          pz,
          0,
          a,
        );
      }
    };
    for (let j = 1; j < 6; j++)
      for (let k = 0; k < 3; k++) {
        const a = j * 1.92 + k * 2.11,
          span = (1.54 - 0.16 * j) * scale * (0.76 + 0.32 * sprigRng());
        const anchor = spine[j],
          bend = anchor
            .clone()
            .add(
              new THREE.Vector3(
                Math.cos(a) * span * 0.53,
                -0.045 * scale,
                Math.sin(a) * span * 0.51,
              ),
            );
        const end = bend
          .clone()
          .add(
            new THREE.Vector3(
              Math.cos(a + 0.18) * span * 0.62,
              0.3 * scale,
              Math.sin(a + 0.18) * span * 0.6,
            ),
          );
        limb(anchor, bend, 0.054 * scale, 0.035 * scale, twig);
        limb(bend, end, 0.037 * scale, 0.012 * scale, twig);
        pads(end, span * 0.47);
        const fork = bend
          .clone()
          .add(
            new THREE.Vector3(
              Math.cos(a + 0.8) * span * 0.48,
              0.23 * scale,
              Math.sin(a + 0.8) * span * 0.46,
            ),
          );
        limb(bend, fork, 0.025 * scale, 0.008 * scale, twig);
        pads(fork, span * 0.3);
      }
    pads(spine[6], 0.49 * scale);
  }
  pine(-6.55, -1.65, -1.3, 1.78, -1);
  pine(6.15, -1.65, -2.8, 1.69, 1);
  pine(-4.92, -1.65, -5.2, 0.97, 1);
  pine(6.64, -1.7, -7.9, 1.06, -1);
  for (const [mat, list] of batches) {
    const merged = mergeGeometries(list);
    const mesh = new THREE.Mesh(merged, mat);
    scene.add(mesh);
    list.forEach((g) => g.dispose());
  }
  const hazeMap = mistMap(),
    mist = [];
  const rng = random(293);
  for (let i = 0; i < 49; i++) {
    const m = new THREE.SpriteMaterial({
      map: hazeMap,
      transparent: true,
      depthWrite: false,
      color: i % 4 ? 0x9baaad : 0xb99b86,
      opacity: 0.27,
    });
    const s = new THREE.Sprite(m),
      x = (rng() - 0.5) * 29,
      z = i < 9 ? 2 + rng() * 3 : -3 - rng() * 17;
    s.position.set(x, -1.56 + rng() * 1.67, z);
    s.scale.set(5 + rng() * 9, 0.7 + rng() * 1.44, 1);
    s.renderOrder = 2;
    scene.add(s);
    mist.push({ s, x, z, y: s.position.y, phase: rng() * TAU });
  }
  return (t, camera) => {
    sky.position.copy(camera.position);
    const a = (TAU * t) / 30;
    lanternWindows.forEach((m, i) => {
      const v =
        0.94 +
        0.045 * Math.sin(a * 43 + i * 2.2) +
        0.025 * Math.sin(a * 77 + i);
      m.color.setRGB(v, 0.83 * v, 0.64 * v, THREE.SRGBColorSpace);
      haloes[i].opacity = 0.38 + 0.085 * Math.sin(a * 27 + i * 2);
    });
    mist.forEach(({ s, x, y, z, phase }) => {
      s.position.set(
        x + 1.8 * Math.sin(a + phase),
        y + 0.14 * Math.sin(a * 2 + phase),
        z + 0.6 * Math.cos(a + phase),
      );
    });
  };
}
