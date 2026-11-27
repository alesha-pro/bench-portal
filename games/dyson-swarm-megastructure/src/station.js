import * as T from 'three';
import { V, TAU, random, shader, geometry } from './common.js';

const armorVert = `
  in vec3 tint;out vec2 st;out vec3 N,P,K;
  void main(){
    mat4 model=modelMatrix;
    #ifdef USE_INSTANCING
      model=modelMatrix*instanceMatrix; K=instanceColor;
      vec3 scale=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz));
      vec3 local=position*scale;
      if(abs(normal.y)>.8)st=local.xz;else if(abs(normal.z)>.8)st=local.xy;else st=local.zy;
      st=st/1.8+K.rb*9.;
    #else
      K=tint;st=uv;
    #endif
    N=normalize(mat3(model)*(normal/vec3(dot(model[0].xyz,model[0].xyz),dot(model[1].xyz,model[1].xyz),dot(model[2].xyz,model[2].xyz))));
    P=(model*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(P,1.);
  }`;
const armorFrag = `
  in vec3 N,P,K;in vec2 st;uniform sampler2D atlas,windows;out vec4 f;
  void main(){
    vec3 n=normalize(N),l=normalize(-P+vec3(0.,1.8,0.)),v=normalize(cameraPosition-P);
    float lit=dot(l,n),sky=n.y*.5+.5;vec3 r=reflect(-v,n);
    vec3 plate=texture(atlas,st).rgb;float gr=plate.r;
    vec3 albedo=K*(.31+gr*2.1);
    vec3 light=vec3(.071,.098,.144)*(.32+sky*.85)+vec3(1.22,.48,.165)*max(0.,lit);
    float spec=pow(max(0.,dot(r,l)*.5+.5),18.)*(.1+gr*gr*1.1);
    float edge=pow(1.-abs(dot(n,v)),3.);
    vec3 c=albedo*light+spec*vec3(.89,.45,.16)+edge*vec3(.059,.080,.10);
    float ports=texture(windows,st).r; c+=ports*ports*mix(vec3(2.85,1.24,.39),vec3(.67,1.36,1.48),step(.39,K.b))*.67;
    f=vec4(c,1.);}`;
const steel = [0.22, 0.26, 0.3],
  bone = [0.49, 0.49, 0.43],
  iron = [0.105, 0.145, 0.19],
  copper = [0.54, 0.275, 0.085],
  night = [0.075, 0.091, 0.103];
const ivory = [0.62, 0.64, 0.59],
  pale = [0.37, 0.41, 0.46];
const ringR = 16.65;
function towerFrame(angle, r = ringR) {
  return new T.Matrix4()
    .makeRotationY(angle)
    .setPosition(r * Math.sin(angle), 0, r * Math.cos(angle));
}
function frameAt(parent, x, y, z, s = 1) {
  return parent
    .clone()
    .multiply(new T.Matrix4().makeTranslation(x, y, z))
    .scale(V(s, s, s));
}
function makeArmor(maps) {
  return shader(armorVert, armorFrag, {
    atlas: { value: maps.plate },
    windows: { value: maps.windows },
  });
}
function annulus(root, mat, r, profile, repeat) {
  const p = [],
    st = [],
    idx = [],
    K = [];
  const seg = 320;
  for (let j = 0; j < profile.length; j++) {
    const [dr, h] = profile[j],
      [br, bh] = profile[(j + 1) % profile.length];
    for (let i = 0; i <= seg; i++) {
      const a = (i * TAU) / seg;
      const k = p.length / 3;
      for (const [rad, y, v] of [
        [dr, h, 0],
        [br, bh, Math.hypot(br - dr, bh - h) / 1.8],
      ]) {
        p.push((r + rad) * Math.sin(a), y, (r + rad) * Math.cos(a));
        st.push((i / seg) * repeat, v + 0.17 * j);
        K.push(...(j % 3 === 0 ? pale : steel));
      }
      if (i) idx.push(k - 2, k, k - 1, k, k + 1, k - 1);
    }
  }
  const g = geometry(p, st, idx);
  g.setAttribute('tint', new T.Float32BufferAttribute(K, 3));
  const m = new T.Mesh(g, mat);
  root.add(m);
}
// Faceted keel with a blunt stern, chamfered shoulders and an asymmetric bow.
function hull(root, parent, mat) {
  const sections = [
    [-2.55, 0.39, 0.24],
    [-2.32, 0.58, 0.32],
    [-1.65, 0.64, 0.35],
    [-0.94, 0.61, 0.34],
    [-0.7, 0.52, 0.32],
    [0.68, 0.53, 0.3],
    [1.24, 0.43, 0.27],
    [1.56, 0.42, 0.22],
    [2.33, 0.19, 0.12],
    [2.66, 0.055, 0.065],
  ];
  const contour = [
    [0.6, 1],
    [-0.62, 1],
    [-1, 0.45],
    [-0.95, -0.49],
    [-0.55, -0.9],
    [0.55, -0.9],
    [0.95, -0.5],
    [1, 0.44],
  ];
  const p = [],
    st = [],
    idx = [],
    c = [];
  for (let i = 1; i < sections.length; i++)
    for (let j = 0; j < 8; j++) {
      if (i === 7 && (j === 1 || j === 2 || j === 7)) continue;
      const id = p.length / 3;
      for (const [k, q] of [
        [i - 1, j],
        [i, j],
        [i, (j + 1) % 8],
        [i - 1, (j + 1) % 8],
      ]) {
        const [x, w, h] = sections[k],
          [y, z] = contour[q];
        p.push(x, h * z, w * y);
        st.push(x / 2.9, (j + Number(q !== j)) * 0.19);
        c.push(...(j === 0 ? ivory : j === 2 || j === 6 ? pale : steel));
      }
      idx.push(id, id + 1, id + 2, id, id + 2, id + 3);
    }
  const geo = geometry(p, st, idx);
  geo.setAttribute('tint', new T.Float32BufferAttribute(c, 3));
  const skin = mat.clone();
  skin.side = T.DoubleSide;
  const mesh = new T.Mesh(geo, skin);
  mesh.applyMatrix4(parent);
  root.add(mesh);
}

export function buildStation(scene, maps, time, surge) {
  const root = new T.Group(),
    spin = new T.Group();
  root.rotation.z = -0.135;
  root.rotation.x = 0.045;
  root.add(spin);
  scene.add(root);
  scene.add(new T.HemisphereLight(0xc9d9e1, 0x28211e, 1.1));
  const mat = makeArmor(maps),
    rng = random(615),
    blocks = [],
    lamps = [],
    unit = new T.Quaternion(),
    up = V(0, 1, 0);
  const emissive = new T.MeshBasicMaterial({ color: 0xffffff });
  function box(parent, x, y, z, dx, dy, dz, tone = steel, lit = false, rot = unit) {
    const m = parent.clone().multiply(new T.Matrix4().compose(V(x, y, z), rot, V(dx, dy, dz)));
    (lit ? lamps : blocks).push([m, tone]);
  }
  function bar(parent, a, b, w, tone = steel, h = w) {
    const vec = b.clone().sub(a),
      mid = a.clone().lerp(b, 0.5);
    box(
      parent,
      ...mid.toArray(),
      w,
      vec.length(),
      h,
      tone,
      false,
      new T.Quaternion().setFromUnitVectors(up, vec.normalize()),
    );
  }
  const strips = [
    [-0.52, -0.23],
    [-0.46, -0.33],
    [0.44, -0.33],
    [0.55, -0.23],
    [0.55, 0.17],
    [0.42, 0.27],
    [-0.42, 0.27],
    [-0.52, 0.17],
  ];
  annulus(spin, mat, ringR, strips, 59);
  for (const side of [-1, 1])
    annulus(
      spin,
      mat,
      ringR + side * 0.64,
      [
        [-0.07, -0.55],
        [0.07, -0.55],
        [0.08, -0.43],
        [-0.07, -0.43],
      ],
      67,
    );
  for (let i = 0; i < 288; i++) {
    const a = (i * TAU) / 288,
      M = towerFrame(a),
      width = (TAU * ringR) / 288;
    for (const sign of [-1, 1]) {
      const z = sign * 0.64;
      bar(M, V(-width * 0.49, -0.44, z), V(width * 0.5, -0.11, z), 0.028, bone);
      if (i % 3 === 0) box(M, 0, -0.26, z, 0.044, 0.49, 0.065, iron);
      box(M, 0, 0.235, sign * 0.53, width * 0.85, 0.05, 0.085, i % 6 ? bone : copper);
      for (let j = 0; j < 3; j++) {
        box(
          M,
          (j - 1) * 0.095,
          0.01,
          sign * 0.554,
          0.046,
          0.021,
          0.014,
          (i + j) % 5 ? [1.9, 0.87, 0.29] : [0.55, 1.1, 1.4],
          true,
        );
      }
    }
    const h = 0.08 + Math.pow(rng(), 2) * 0.48,
      d = 0.085 + rng() * 0.14,
      z = (rng() - 0.5) * 0.51;
    box(M, 0, 0.27 + h * 0.5, z, width * 0.74, h, d, i % 4 ? pale : bone);
    box(M, 0, 0.28 + h, z, width * 0.62, 0.024, d * 0.74, iron);
    if (i % 3 === 0) {
      box(M, -0.08, 0.32 + h, z, 0.019, h * 0.76, 0.018, bone);
      box(M, -0.08, 0.32 + h * 1.38, z, 0.024, 0.015, 0.024, [2.5, 0.24, 0.055], true);
    }
  }

  const beamPos = [],
    beamUV = [],
    beamIdx = [],
    ends = [],
    seeds = [],
    nodeLocations = [];
  function beam(a, b, phase, w) {
    const k = beamPos.length / 3;
    for (const [p, q, u, sign] of [
      [a, b, 0, -1],
      [a, b, 0, 1],
      [b, a, 1, -1],
      [b, a, 1, 1],
    ]) {
      beamPos.push(...p.toArray());
      ends.push(...q.toArray());
      beamUV.push(u, sign);
      seeds.push(phase, w);
    }
    beamIdx.push(k, k + 1, k + 2, k + 2, k + 1, k + 3);
  }
  for (let i = 0; i < 14; i++) {
    const a = (TAU * (i + 0.52)) / 14,
      M = towerFrame(a);
    const H = i % 4 === 0 ? 1.62 : 1.17;
    box(M, 0, 0.34, 0, 0.66, 0.2, 0.77, iron);
    box(M, 0, 0.44 + H * 0.28, 0, 0.28, H * 0.56, 0.31, pale);
    for (const sign of [-1, 1]) {
      bar(M, V(sign * 0.34, 0.35, 0.2), V(sign * 0.09, 0.35 + H * 0.78, 0.08), 0.084, bone);
      bar(M, V(sign * 0.32, 0.35, -0.22), V(sign * 0.1, 0.35 + H * 0.78, -0.1), 0.08, steel);
    }
    for (let k = 0; k < 7; k++)
      box(
        M,
        0,
        0.56 + k * 0.083,
        0,
        0.5 - 0.03 * k,
        0.033,
        0.49 - 0.025 * k,
        k % 3 ? iron : copper,
      );
    box(M, 0, H + 0.27, 0, 0.125, 0.48, 0.14, ivory);
    box(M, 0, H + 0.33, 0, 0.21, 0.09, 0.2, [1.8, 3.1, 3.4], true);
    const dest = V(0, H + 0.33, 0).applyMatrix4(M);
    for (const side of [-1, 1]) {
      const start = V(side * (1.5 + rng() * 2.4), side * (1.0 + rng() * 2.3) + 2, -3 - rng() * 1.8);
      if (i % 3 === 1) start.y *= -1;
      const N = frameAt(M, ...start.toArray());
      // A relay terminus holds six collection mirrors on two deployable wings.
      box(N, 0, 0, 0, 0.55, 0.11, 0.16, iron);
      for (const wing of [-1, 1])
        for (let j = 0; j < 3; j++) {
          box(N, wing * (0.36 + j * 0.26), 0, 0, 0.23, 0.035, 0.43, copper);
          box(N, wing * (0.36 + j * 0.26), 0.025, 0, 0.17, 0.009, 0.35, [0.75, 0.46, 0.16]);
        }
      box(N, 0, 0, 0, 0.13, 0.14, 0.17, [1.65, 3, 3.2], true);
      const source = start.applyMatrix4(M);
      beam(source, dest, i * 0.51 + side * 0.2, 0.095);
      nodeLocations.push(source, dest);
    }
  }
  function dock(a, scale, marker) {
    const M = frameAt(towerFrame(a), 0, 0.4, 1.22, scale);
    const ship = frameAt(M, 0.0, 0.84, 0.0);
    hull(spin, ship, mat);
    box(M, 0, -0.14, 0, 5.96, 0.22, 1.83, iron);
    for (const s of [-1, 1]) {
      box(M, 0, -0.03, s * 0.92, 5.84, 0.14, 0.18, pale);
      box(M, -0.1, 1.87, s * 0.82, 5.8, 0.12, 0.14, bone);
      box(M, -0.1, 1.7, s * 0.82, 5.8, 0.06, 0.09, iron);
      for (let j = 0; j < 12; j++) {
        const x = -2.65 + j * 0.47;
        bar(M, V(x, 1.71, s * 0.82), V(x + 0.39, 1.87, s * 0.82), 0.033, copper);
        if (j % 2 === 0) box(M, x, 1.94, s * 0.82, 0.105, 0.025, 0.085, [2.2, 0.83, 0.24], true);
      }
      for (let j = 0; j < 4; j++) {
        const x = -2.67 + j * 1.74;
        // Four chords and triangular webbing keep the work bay open to the star.
        for (const edge of [-1, 1]) {
          box(M, x + edge * 0.084, 0.9, s * 0.84, 0.039, 1.87, 0.075, bone);
          box(M, x + edge * 0.094, 0.12, s * 0.84, 0.082, 0.22, 0.16, iron);
        }
        for (let k = 0; k < 6; k++) {
          const h = 0.08 + k * 0.29,
            dx = (k % 2 ? 1 : -1) * 0.076;
          bar(
            M,
            V(x + dx, h, s * 0.86),
            V(x - dx, h + 0.29, s * 0.86),
            0.028,
            k % 3 ? steel : copper,
            0.04,
          );
        }
        bar(M, V(x - 0.22, 0.04, s * 0.96), V(x, 0.92, s * 0.84), 0.084, iron);
        bar(M, V(x, 1.4, s * 0.84), V(x, 1.89, s * 0.43), 0.072, copper);
        box(M, x, 0.41, s * 0.84, 0.21, 0.12, 0.2, copper);
        box(M, x, 1.48, s * 0.84, 0.17, 0.12, 0.18, iron);
        box(M, x, 0.75, s * 0.71, 0.12, 0.24, 0.24, steel);
        if (s === 1) {
          box(M, x, 1.88, 0, 0.132, 0.11, 1.8, bone);
          box(M, x, 1.78, 0, 0.36, 0.07, 0.42, iron);
        }
      }
      // Armored side sponsons, illuminated portholes and segmented engine housing.
      box(ship, -0.73, -0.01, s * 0.53, 2.85, 0.16, 0.15, iron);
      box(ship, -1.7, 0.015, s * 0.53, 1.38, 0.33, 0.3, bone);
      for (let j = 0; j < 8; j++)
        box(ship, -2.27 + j * 0.125, 0.029, s * 0.68, 0.063, 0.27, 0.048, steel);
      for (let j = 0; j < 20; j++)
        box(
          ship,
          -1.64 + j * 0.145,
          0.091,
          s * 0.566,
          0.062,
          0.025,
          0.019,
          j % 4 ? [0.65, 1.34, 1.7] : [1.6, 0.84, 0.27],
          true,
        );
      box(ship, -2.38, 0, s * 0.53, 0.17, 0.23, 0.27, night);
      box(ship, -2.48, 0.0, s * 0.53, 0.018, 0.1, 0.17, [0.3, 1.25, 2.2], true);
    }
    // Two rail-mounted work cranes lean over the unplated bow and drive section.
    for (const [x, sign] of [
      [1.24, 1],
      [-1.55, -1],
    ]) {
      box(M, x, 0.035, sign * 0.76, 0.41, 0.1, 0.34, iron);
      const p0 = V(x, 0.1, sign * 0.76),
        p1 = V(x + 0.24, 0.56, sign * 0.71),
        p2 = V(x - 0.02, 0.82, sign * 0.55);
      bar(M, p0, p1, 0.068, copper, 0.088);
      bar(M, p1, p2, 0.06, copper, 0.079);
      box(M, ...p1.toArray(), 0.115, 0.114, 0.108, night);
      box(M, ...p2.toArray(), 0.07, 0.052, 0.041, [2.3, 3.0, 3.8], true);
    }
    for (let k = 0; k < 6; k++) {
      const x = 1.25 + k * 0.065;
      bar(ship, V(x, 0.24, 0.235), V(x, 0.095, 0.42), 0.019, copper);
      bar(ship, V(x, 0.24, -0.235), V(x, 0.095, -0.42), 0.019, bone);
    }
    // Exposed aft thrust assemblies, including progressively flared nozzle rings.
    const nozzleMat = new T.MeshStandardMaterial({
      color: 0x343b41,
      metalness: 0.46,
      roughness: 0.7,
    });
    for (const zz of [-0.32, 0, 0.32]) {
      const bell = new T.Mesh(new T.CylinderGeometry(0.143, 0.097, 0.31, 12, 1, true), nozzleMat);
      const b = frameAt(ship, -2.63, -0.014, zz);
      b.multiply(new T.Matrix4().makeRotationZ(Math.PI / 2));
      bell.applyMatrix4(b);
      spin.add(bell);
      for (let r = 0; r < 4; r++) {
        const rim = new T.Mesh(
          new T.TorusGeometry(0.108 + r * 0.011, 0.012, 5, 16),
          new T.MeshBasicMaterial({ color: r === 3 ? 0x697679 : 0x40484d }),
        );
        const f = frameAt(ship, -2.53 - r * 0.063, -0.014, zz).multiply(
          new T.Matrix4().makeRotationY(Math.PI / 2),
        );
        rim.applyMatrix4(f);
        spin.add(rim);
      }
    }
    for (let j = 0; j < 12; j++) {
      const x = -1.92 + j * 0.29;
      box(ship, x, 0.3, 0, 0.21, 0.13 + 0.14 * rng(), 0.29, j % 3 ? steel : bone);
      if (j % 2 === 0) box(ship, x, 0.42, 0.0, 0.08, 0.12, 0.17, iron);
    }
    box(ship, 0.64, 0.33, 0, 0.84, 0.21, 0.4, bone);
    box(ship, 0.64, 0.439, 0.02, 0.65, 0.041, 0.33, night);
    for (let j = 0; j < 8; j++)
      box(ship, 0.39 + j * 0.068, 0.436, 0.19, 0.05, 0.038, 0.012, [0.81, 1.67, 2.0], true);
    // Identification boards on the outward face of each dock.
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 96;
    const c = canvas.getContext('2d');
    c.fillStyle = '#2b3538';
    c.fillRect(0, 0, 512, 96);
    c.fillStyle = '#c59954';
    c.fillRect(0, 0, 12, 96);
    c.font = 'bold 53px sans-serif';
    c.fillStyle = '#e2d8bc';
    c.fillText('KEEL  /  ' + marker, 35, 66);
    const tex = new T.CanvasTexture(canvas);
    tex.colorSpace = T.SRGBColorSpace;
    const board = new T.Mesh(
      new T.PlaneGeometry(1.13, 0.212),
      new T.MeshBasicMaterial({ map: tex }),
    );
    board.applyMatrix4(frameAt(M, 1.5, -0.1, 1.009));
    spin.add(board);
  }
  dock(0.18, 1.25, '04');
  dock(2.1, 1.0, '12');
  dock(-1.62, 1.04, '19');
  dock(-2.73, 0.91, '23');
  function batch(geom, material, b) {
    const mesh = new T.InstancedMesh(geom, material, b.length);
    b.forEach(([m, c], i) => {
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, new T.Color(...c));
    });
    spin.add(mesh);
    return mesh;
  }
  batch(new T.BoxGeometry(), mat, blocks);
  batch(new T.BoxGeometry(), emissive, lamps);
  const geo = geometry(beamPos, beamUV, beamIdx);
  geo.setAttribute('other', new T.Float32BufferAttribute(ends, 3));
  geo.setAttribute('seedWidth', new T.Float32BufferAttribute(seeds, 2));
  const rays = new T.Mesh(
    geo,
    shader(
      `in vec3 other;in vec2 seedWidth;out vec2 st;out float code;
    uniform float surge;void main(){st=uv;code=seedWidth.x;vec4 p=modelViewMatrix*vec4(position,1.);
    vec4 q=modelViewMatrix*vec4(other,1.);vec2 tangent=normalize(q.xy/q.w-p.xy/p.w)*(1.-2.*uv.x);
    vec2 normal=vec2(-tangent.y,tangent.x);
    p.xy+=uv.y*normal*seedWidth.y*(1.+surge*.85);gl_Position=projectionMatrix*p;}`,
      `in vec2 st;in float code;out vec4 f;uniform float t,surge;
    void main(){float x=abs(st.y);float a=exp(-x*x*7.5),core=exp(-x*x*120.);
    float pulse=pow(max(0.,cos(st.x*13.-t*4.+code)),11.);
    float power=.76+.19*sin(t*.7+code*5.)+pulse*.75+surge*1.8;
    f=vec4((vec3(.011,.52,.81)*a+vec3(1.18,2.13,2.64)*core)*power,1.);}`,
      { t: time, surge },
      { transparent: true, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide },
    ),
  );
  spin.add(rays);
  rays.renderOrder = 3;
  const dots = new T.Points(
    new T.BufferGeometry().setFromPoints(nodeLocations),
    shader(
      `
    uniform float height,surge;void main(){vec4 p=modelViewMatrix*vec4(position,1.);
    gl_Position=projectionMatrix*p;gl_PointSize=clamp(height*.53*(1.+surge*.6)/(-p.z),3.,95.);}`,
      `out vec4 f;void main(){vec2 q=gl_PointCoord*2.-1.;float r=dot(q,q);
    f=vec4(vec3(.09,.96,1.45)*exp(-r*8.)+vec3(2.9,2.7,2.25)*exp(-r*58.),1.);}`,
      { height: { value: 720 }, surge },
      { transparent: true, blending: T.AdditiveBlending, depthWrite: false },
    ),
  );
  dots.renderOrder = 4;
  spin.add(dots);
  const count = 58,
    ships = new T.InstancedMesh(new T.BoxGeometry(), mat, count),
    beacons = new T.InstancedMesh(new T.BoxGeometry(), emissive, count);
  const flights = Array.from({ length: count }, (_, i) => ({
    a: rng() * TAU,
    r: ringR + 1.75 + rng() * 2.9,
    h: -0.8 + rng() * 2.7,
    speed: (i % 3 === 0 ? -1 : 1) * (0.008 + rng() * 0.009),
    scale: 0.043 + rng() * 0.068,
  }));
  flights.forEach((_, i) => {
    ships.setColorAt(i, new T.Color(...pale));
    beacons.setColorAt(i, new T.Color(...(i % 3 ? [0.4, 1.9, 2.6] : [2.7, 0.52, 0.12])));
  });
  ships.frustumCulled = beacons.frustumCulled = false;
  spin.add(ships, beacons);
  return {
    root,
    spin,
    animate(t, h) {
      spin.rotation.y = t * 0.0025;
      dots.material.uniforms.height.value = h;
      flights.forEach((f, i) => {
        const base = towerFrame(f.a + t * f.speed, f.r),
          m = frameAt(base, 0, f.h, 0);
        ships.setMatrixAt(i, m.clone().scale(V(f.scale * 3, f.scale * 0.55, f.scale)));
        const blink = 0.13 + 0.87 * Math.pow(0.5 + 0.5 * Math.cos(t * 3.2 + i), 8);
        beacons.setMatrixAt(
          i,
          frameAt(m, -Math.sign(f.speed) * f.scale * 1.45, 0, 0).scale(
            V(f.scale * 0.25, f.scale * blink, f.scale * blink),
          ),
        );
      });
      ships.instanceMatrix.needsUpdate = beacons.instanceMatrix.needsUpdate = true;
    },
  };
}
