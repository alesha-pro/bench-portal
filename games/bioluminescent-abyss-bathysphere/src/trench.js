import * as T from 'three';
import { TAU, V, rng, group, mesh, rod, bake, basic, u, noiseGL } from './geometry.js';

export function seabed(x, z) {
  const axis = 0.3 + 1.3 * Math.sin(z * 0.155);
  const chasm = 4.2 * Math.exp(-((x - axis) ** 2) / 9.4);
  return (
    -2.48 -
    chasm +
    0.28 * Math.sin(x * 1.7 + z * 0.76) +
    0.38 * Math.sin(z * 0.72 - x * 0.43) +
    0.14 * Math.sin(x * 2.72 - z * 2.32)
  );
}
const rockVert = `varying vec3 P,N; varying vec3 tint;
void main(){
  P=(modelMatrix*vec4(position,1)).xyz; N=normalize(mat3(modelMatrix)*normal);tint=color;
  gl_Position=projectionMatrix*viewMatrix*vec4(P,1);
}`;
const rockFrag =
  noiseGL +
  `
uniform float radius,strength,time;uniform vec3 origin,lampA,lampB,axisA,axisB;
varying vec3 P,N,tint;
float beam(vec3 src,vec3 axis){vec3 d=P-src;return smoothstep(.908,.984,dot(normalize(d),axis))*exp(-length(d)*.135);}
void main(){
 vec3 n=dot(N,N)>1e-10?normalize(N):vec3(0.,1.,0.),p=P;float d=length(cameraPosition-p);
 float base=fb(p*1.8),strata=sin(p.y*27.+11.*base+p.z*.9);
 float chips=nv(p*19.)+.45*nv(p*54.);float layers=smoothstep(.50,1.,strata);
 float fault=abs(sin(dot(p,vec3(1.86,.61,2.39))+4.5*fb(p*.92)));
 float split=1.-smoothstep(.012,.10,fault);float h=.066*base+.018*layers+.023*chips-.012*split;
 vec3 r1=cross(dFdy(P),n),r2=cross(n,dFdx(P));float det=dot(dFdx(P),r1);
 vec3 perturbed=abs(det)*n-sign(det)*(.56*dFdx(h)*r1+.56*dFdy(h)*r2);
 n=dot(perturbed,perturbed)>1e-10?normalize(perturbed):n;
 float key=max(0.,dot(n,normalize(vec3(-.4,.85,-.40))));
 float lip=smoothstep(.36,.98,n.y)*(.40+.60*base);
 vec3 albedo=tint*(.54+.69*base+.17*chips-.19*layers);
 albedo*=1.-.40*split;albedo+=vec3(.017,.027,.041)*chips*layers;
 vec3 col=albedo*(vec3(.10,.18,.32)+vec3(.28,.66,.79)*key);
 col+=vec3(.016,.055,.066)*lip*(.34+base);
 float glow=exp(-length((p-vec3(-4.,-2.45,-1.8))*vec3(.81,.83,.87))*.76);
 col+=vec3(.80,.19,.035)*glow*(.17+.83*max(n.y,.08));
 col+=albedo*vec3(2.9,2.48,1.66)*strength*(beam(lampA,axisA)+beam(lampB,axisB));
 float echo=abs(length(p-origin)-radius),wave=exp(-echo*echo*1.9);
 float vein=abs(sin(p.y*5.3+p.x*1.7+14.*fb(p*1.17)));
 float crystal=1.-smoothstep(.005,.12,vein);
 col+=vec3(.035,.82,.81)*(wave*(.09+.40*layers)+crystal*exp(-echo*.82)*1.45);
 float fog=1.-exp(-d*d*.0016);
 col=mix(col,vec3(.003,.020,.043),fog*.98); gl_FragColor=vec4(col,1);
}`;
function geom(pos, idx, col) {
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new T.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function makeRockField(scene, random) {
  const rock = new T.ShaderMaterial({
    uniforms: u,
    vertexColors: true,
    vertexShader: rockVert,
    fragmentShader: rockFrag,
    side: T.DoubleSide,
  });
  let pos = [],
    idx = [],
    col = [];
  function vertex(x, y, z, c) {
    pos.push(x, y, z);
    col.push(...c);
    return pos.length / 3 - 1;
  }
  const nx = 113,
    nz = 129;
  for (let iz = 0; iz < nz; iz++)
    for (let ix = 0; ix < nx; ix++) {
      const x = (ix / (nx - 1) - 0.5) * 54 + (random() - 0.5) * 0.25,
        z = -45 + (iz / (nz - 1)) * 61 + (random() - 0.5) * 0.24;
      const n = random() * 0.029;
      vertex(x, seabed(x, z) + random() * 0.16, z, [0.059 + n, 0.081 + n, 0.095 + n]);
      if (ix && iz) {
        const i = pos.length / 3 - 1;
        idx.push(i - nx - 1, i - 1, i, i - nx - 1, i, i - nx);
      }
    }
  mesh(scene, geom(pos, idx, col), rock);
  pos = [];
  idx = [];
  col = [];
  // Shattered, vertically jointed basalt. Separate face rings preserve angular edges.
  function crag(x, y, z, rx, ry, rz, lean = 0) {
    const n = 5 + Math.floor(random() * 4),
      a0 = random() * TAU,
      rings = [],
      off = (random() - 0.5) * rx * 0.6;
    const profile = [1.08, 0.96, 1.01, 0.78, 0.83, 0.54 + random() * 0.23],
      elev = [-0.12, 0.16, 0.44, 0.66, 0.86, 1];
    const c = 0.042 + random() * 0.037,
      cl = [c * 0.78, c * 1.03, c * 1.16],
      aa = [],
      rr = [],
      top = [];
    for (let j = 0; j < n; j++) {
      aa.push(a0 + (TAU * (j + random() * 0.24)) / n);
      rr.push(0.75 + 0.41 * random());
      top.push(random() * 0.28);
    }
    for (let k = 0; k < profile.length; k++) {
      const ring = [];
      for (let j = 0; j < n; j++) {
        const a = aa[j] + 0.043 * Math.sin(k + j),
          r = rr[j] * profile[k] * (0.93 + 0.13 * random());
        ring.push([
          x + Math.cos(a) * rx * r + lean * elev[k],
          y + ry * (elev[k] - top[j] * elev[k] + (random() - 0.5) * 0.065),
          z + Math.sin(a) * rz * r + off * elev[k],
        ]);
      }
      rings.push(ring);
    }
    function fracture([xx, yy, zz]) {
      const grain =
        Math.sin(xx * 6.13 + zz * 3.2) * Math.cos(yy * 4.8 + zz) +
        0.57 * Math.sin(xx * 11.6 + yy * 8.3 + zz * 2.1);
      const dx = xx - x,
        dz = zz - z,
        len = Math.max(0.001, Math.hypot(dx, dz)),
        chip = Math.min(rx, 0.96) * 0.18 * grain;
      return [xx + (dx / len) * chip, yy + chip * 0.33, zz + (dz / len) * chip];
    }
    for (let j = 0; j < n; j++) {
      const shade = 0.73 + 0.37 * random(),
        cc = cl.map((n) => n * shade);
      for (let k = 0; k < rings.length - 1; k++) {
        const j2 = (j + 1) % n,
          a = rings[k][j],
          b = rings[k][j2],
          c = rings[k + 1][j2],
          d = rings[k + 1][j];
        const segments = ry > 2 ? 4 : 1,
          rows = ry > 2 ? 3 : 1,
          start = pos.length / 3;
        for (let v = 0; v <= rows; v++)
          for (let t = 0; t <= segments; t++) {
            const f = t / segments,
              h = v / rows;
            const interp = a.map(
              (value, i) => (1 - h) * ((1 - f) * value + f * b[i]) + h * ((1 - f) * d[i] + f * c[i])
            );
            vertex(...fracture(interp), cc);
            if (t && v) {
              const i = start + v * (segments + 1) + t;
              idx.push(i - segments - 2, i - 1, i, i - segments - 2, i, i - segments - 1);
            }
          }
      }
      const p = rings.at(-1),
        p0 = p[j],
        p1 = p[(j + 1) % n],
        segments = ry > 2 ? 4 : 1;
      for (let t = 0; t < segments; t++) {
        const i = vertex(...fracture(p0.map((v, k) => v + ((p1[k] - v) * t) / segments)), cl);
        vertex(...fracture(p0.map((v, k) => v + ((p1[k] - v) * (t + 1)) / segments)), cl);
        vertex(x + lean, y + ry * 0.98, z + off, cl);
        idx.push(i, i + 2, i + 1);
      }
    }
  }
  for (let i = 0; i < 650; i++) {
    const x = (random() - 0.5) * 38,
      z = -34 + random() * 45,
      r = 0.12 + random() ** 2 * 1.42;
    crag(
      x,
      seabed(x, z) - 0.18,
      z,
      r * (0.7 + random()),
      r * (0.31 + random() * 0.76),
      r * (0.66 + random()),
      (random() - 0.5) * r * 0.56
    );
  }
  for (const s of [-1, 1])
    for (let i = 0; i < 125; i++) {
      const z = -40 + random() * 47,
        x = s * (8.6 + random() * 8 + 0.8 * Math.sin(z * 0.54)),
        r = 0.6 + random() ** 2 * 3.6;
      crag(
        x,
        -4.2,
        z,
        r,
        2 + random() ** 1.4 * 10,
        r * (0.5 + random() * 0.8),
        s * (random() - 0.62) * 2
      );
    }
  for (const [x, z, count, h] of [
    [-7, -2, 21, 5],
    [6.8, -4.6, 27, 4.1],
    [-5.8, -12, 26, 6.7],
    [1.9, -20, 24, 6.2],
    [7, -17, 32, 7],
  ]) {
    for (let i = 0; i < count; i++) {
      const xx = x + (random() - 0.5) * 3,
        zz = z + (random() - 0.5) * 2.6,
        r = 0.25 + random() * 0.98;
      crag(
        xx,
        seabed(xx, zz) - 0.36,
        zz,
        r,
        h * (0.33 + random() * 0.74),
        r * (0.43 + random() * 0.7),
        (random() - 0.5) * 1.12
      );
    }
  }
  mesh(scene, geom(pos, idx, col), rock);
}

function gardens(scene, random) {
  const pos = [],
    idx = [],
    colors = [],
    anchors = [],
    dots = [],
    dotColors = [],
    dotBase = [];
  const coralMat = new T.ShaderMaterial({
    uniforms: u,
    vertexColors: true,
    side: T.DoubleSide,
    vertexShader: `
    attribute float anchor; varying vec3 C,P,N;uniform float time;
    void main(){P=position;P.x+=anchor*.075*sin(time*.85+P.z+P.y*.72);P.z+=anchor*.055*sin(time*.61+P.x);
    C=color;N=normal;gl_Position=projectionMatrix*viewMatrix*vec4(P,1);}`,
    fragmentShader: `
    varying vec3 C,P,N;uniform float time,pulse,radius;uniform vec3 origin;
    void main(){float d=length(P-cameraPosition),e=exp(-abs(length(P-origin)-radius)*1.25);
    float wave=.70+.30*sin(P.y*6.-time*2.+P.x);
    vec3 col=C*(.23+.76*max(0.,normalize(N).y)+pulse*wave*1.04)+vec3(.03,.48,.40)*e;
    gl_FragColor=vec4(mix(col,vec3(.003,.020,.043),1.-exp(-d*d*.0016)),1);}`,
  });
  function branch(a, b, r, t, c1, c2, y0) {
    const n = 5,
      dir = b.clone().sub(a).normalize(),
      axis = V(0, 0, 1).cross(dir).normalize(),
      side = dir.clone().cross(axis);
    const start = pos.length / 3;
    for (const [p, rad, col] of [
      [a, r, c1],
      [b, t, c2],
    ])
      for (let j = 0; j < n; j++) {
        const v = p
          .clone()
          .addScaledVector(axis, rad * Math.cos((TAU * j) / n))
          .addScaledVector(side, rad * Math.sin((TAU * j) / n));
        pos.push(v.x, v.y, v.z);
        colors.push(...col);
        anchors.push(Math.max(0, p.y - y0));
      }
    for (let j = 0; j < n; j++) {
      const i = start + j,
        k = start + ((j + 1) % n);
      idx.push(i, k, i + n, k, k + n, i + n);
    }
  }
  const palettes = [
    [0.033, 0.73, 0.56],
    [0.17, 0.39, 0.98],
    [0.73, 0.18, 0.44],
    [0.66, 0.31, 0.08],
    [0.27, 0.68, 0.81],
  ];
  // Near reef fans are anchored on the lips of the chasm, where the camera can resolve the polyps.
  const featured = [
    [-4.0, 0.9, 1.24],
    [-4.51, 0.35, 1.55],
    [-5.0, 0.69, 0.85],
    [3.28, 1.08, 1.44],
    [3.94, 1.04, 0.95],
    [4.48, 0.5, 1.55],
    [4.83, -0.6, 1.65],
    [-3.36, -2.83, 1.43],
    [3.38, -1.69, 1.35],
    [5.1, 1.98, 1.44],
  ];
  for (let f = 0; f < 128; f++) {
    let x = (random() < 0.5 ? -1 : 1) * (3.3 + random() * 7.2),
      z = -21 + random() * 28;
    let scale = 0.36 + random() ** 1.4 * 1.15,
      plane = random() * 3.14;
    if (f < featured.length) {
      [x, z, scale] = featured[f];
      plane = (random() - 0.5) * 0.85;
    }
    const y = seabed(x, z) + 0.15;
    const ink = palettes[Math.floor(random() * palettes.length)],
      c1 = ink.map((a) => a * 0.13),
      ct = ink.map((a) => a * 0.66);
    function grow(p, angle, length, r, level) {
      const turn = angle + (random() - 0.5) * 0.32;
      const q = p
        .clone()
        .add(
          V(
            Math.sin(turn) * Math.cos(plane),
            Math.cos(turn),
            Math.sin(turn) * Math.sin(plane)
          ).multiplyScalar(length)
        );
      q.z += (random() - 0.5) * length * 0.24;
      const bright = level <= 1 ? ink : ct;
      branch(p, q, r, r * 0.69, level < 2 ? ct : c1, bright, y);
      if (level <= 1) {
        dots.push(...q.toArray());
        dotColors.push(...ink);
        dotBase.push(q.y - y);
      }
      if (level === 0) return;
      grow(q, turn - (0.22 + 0.33 * random()), length * (0.57 + 0.23 * random()), r * 0.63, level - 1);
      grow(q, turn + 0.21 + 0.33 * random(), length * (0.57 + 0.23 * random()), r * 0.63, level - 1);
    }
    for (let a = 0; a < 3; a++)
      grow(
        V(x, y, z),
        (a - 1) * 0.48,
        scale * (0.31 + 0.16 * random()),
        scale * 0.055,
        f < featured.length ? 5 : 4
      );
  }
  // Feathered sea pens, with paired pinnae and pinprick luminous polyps.
  for (let f = 0; f < 82; f++) {
    const x = (f % 2 ? 1 : -1) * (3.55 + random() * 3.7),
      z = -9 + random() * 12,
      y = seabed(x, z) + 0.1;
    const h = 0.59 + random() ** 1.7 * 1.05,
      angle = random() * 3.14,
      ink = palettes[f % 5],
      root = V(x, y, z);
    const axis = V(Math.cos(angle), 0, Math.sin(angle));
    const spine = (t) => root.clone().add(V(0.17 * t * t * t, h * t, 0.075 * Math.sin(t * 2.4)));
    branch(
      root,
      spine(1),
      0.022,
      0.008,
      ink.map((c) => c * 0.12),
      ink,
      y
    );
    for (let j = 2; j < 21; j++)
      for (const side of [-1, 1]) {
        const t = j / 22,
          a = spine(t),
          width = h * 0.155 * Math.pow(Math.sin(t * Math.PI), 0.73);
        const b = a
          .clone()
          .addScaledVector(axis, side * width)
          .add(V(0, 0.13 * h, 0));
        branch(
          a,
          b,
          0.009,
          0.003,
          ink.map((c) => c * 0.35),
          ink,
          y
        );
        for (let n = 1; n < 5; n++) {
          const q = a.clone().lerp(b, n / 5),
            tip = q
              .clone()
              .addScaledVector(axis, side * 0.024)
              .add(V(0, 0.059 * h, 0));
          branch(q, tip, 0.005, 0.002, ink, ink, y);
          dots.push(...tip.toArray());
          dotColors.push(...ink.map((c) => c * 1.9));
          dotBase.push(t * h);
        }
      }
  }
  // Siboglinid colonies, with mineral tubes and fine carmine feeding plumes.
  for (let cluster = 0; cluster < 48; cluster++) {
    const x = (random() < 0.5 ? -1 : 1) * (3.3 + random() * 4.4),
      z = -13 + random() * 18;
    for (let j = 0; j < 14; j++) {
      const xx = x + (random() - 0.5) * 0.64,
        zz = z + (random() - 0.5) * 0.41,
        y = seabed(xx, zz),
        h = 0.17 + random() * 0.53;
      const a = V(xx, y, zz),
        b = V(xx + (random() - 0.5) * 0.13, y + h * 0.7, zz),
        c = b.clone().add(V((random() - 0.5) * 0.12, h * 0.3, 0));
      branch(a, b, 0.029, 0.024, [0.105, 0.075, 0.059], [0.35, 0.39, 0.29], y);
      branch(b, c, 0.024, 0.023, [0.3, 0.3, 0.23], [0.5, 0.44, 0.32], y);
      for (let k = 0; k < 3; k++)
        branch(
          c,
          c.clone().add(V((random() - 0.5) * 0.049, 0.06 + random() * 0.093, (random() - 0.5) * 0.049)),
          0.016,
          0.004,
          [0.31, 0.055, 0.04],
          [0.87, 0.14, 0.053],
          y
        );
    }
  }
  const g = geom(pos, idx, colors);
  g.setAttribute('anchor', new T.Float32BufferAttribute(anchors, 1));
  mesh(scene, g, coralMat);
  const points = new T.BufferGeometry();
  points.setAttribute('position', new T.Float32BufferAttribute(dots, 3));
  points.setAttribute('color', new T.Float32BufferAttribute(dotColors, 3));
  points.setAttribute('anchor', new T.Float32BufferAttribute(dotBase, 1));
  scene.add(
    new T.Points(
      points,
      new T.ShaderMaterial({
        uniforms: u,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: T.AdditiveBlending,
        vertexShader: `attribute float anchor; varying vec3 C;uniform float time,pulse;void main(){
    vec3 p=position;p.x+=anchor*.075*sin(time*.85+p.z+p.y*.72);p.z+=anchor*.055*sin(time*.61+p.x);
    vec4 mv=viewMatrix*vec4(p,1);C=color*(.45+.3*sin(p.x+p.y*7.-time*2.))*pulse;
    gl_Position=projectionMatrix*mv;gl_PointSize=clamp(13./-mv.z,1.,5.);}`,
        fragmentShader: `varying vec3 C;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(C,(1.-smoothstep(0.,1.,r))*.85);}`,
      })
    )
  );
}

function vents(scene, random) {
  const smokers = [
    [-4.65, -1.48, 2.22],
    [-4.04, -2.18, 3.38],
    [-4.93, -3.05, 1.78],
    [5.39, -5.34, 2.65],
    [5.88, -5.53, 1.62],
    [-3.2, -12.9, 3.8],
    [-4.5, 1.22, 2.72],
    [4.26, -0.9, 2.62],
  ];
  const pos = [],
    idx = [],
    col = [],
    origins = [];
  for (const [x, z, h] of smokers) {
    const base = seabed(x, z) - 0.21,
      n = 24,
      start = pos.length / 3;
    const prof = [0.66, 0.48, 0.36, 0.29, 0.33, 0.23, 0.18, 0.22, 0.144, 0.12],
      lev = [0, 0.12, 0.25, 0.42, 0.46, 0.57, 0.81, 0.96, 1, 0.91];
    const ridge = Array.from({ length: n }, () => 0.8 + random() * 0.4);
    for (let k = 0; k < prof.length; k++)
      for (let i = 0; i < n; i++) {
        const a = (TAU * i) / n,
          r = prof[k] * ridge[i] * (1 + 0.1 * Math.sin(i * 16 + k * 2.4));
        pos.push(
          x + Math.sin(lev[k] * 4) * 0.12 + Math.cos(a) * r,
          base + h * lev[k] + 0.018 * Math.sin(i * 4),
          z + Math.sin(a) * r
        );
        const heat = k > 6 ? 0.5 : k < 2 ? 0.3 : 0;
        col.push(0.092 + heat * 0.55, 0.082 + heat * 0.12, 0.071);
        if (k) {
          const j = start + k * n + i,
            l = start + k * n + ((i + 1) % n);
          idx.push(j - n, j, l - n, l - n, j, l);
        }
      }
    origins.push(V(x + Math.sin(4) * 0.12, base + h, z));
    const cracks = group(scene);
    const lip = origins.at(-1);
    // Fresh mineral crust fractures into irregular incandescent crescents around the bore.
    const crust = basic(0xfa7330, 2.35);
    for (let j = 0; j < 24; j++) {
      if (j % 7 === 2) continue;
      const a = (TAU * j) / 24,
        b = a + 0.185,
        r = 0.14 + random() * 0.022;
      const pts = (theta) => [
        lip.x + r * Math.cos(theta),
        lip.y + 0.006 + 0.016 * Math.sin(theta * 5),
        lip.z + r * Math.sin(theta),
      ];
      rod(cracks, crust, pts(a), pts(b), 0.01 + random() * 0.012, 0.009, 6);
    }
    // Light in the recessed bore catches the sides of the fractured rim.
    const throat = mesh(cracks, new T.CircleGeometry(0.139, 24), basic(0xe76627, 1.86), [
      lip.x,
      lip.y - 0.036,
      lip.z,
    ]);
    throat.rotation.x = -Math.PI / 2;
    const ore = basic(0xe96d2e, 1.2);
    for (let j = 0; j < 12; j++) {
      const a = random() * TAU,
        r = 0.48 + random() * 0.42,
        xx = x + r * Math.cos(a),
        zz = z + r * Math.sin(a);
      const y = seabed(xx, zz) + 0.075;
      rod(
        cracks,
        ore,
        [xx, y, zz],
        [xx + 0.07 * Math.cos(a), y + 0.012, zz + 0.09 * Math.sin(a)],
        0.009,
        0.005,
        4
      );
    }
    // Sulfide seams run from the feet of the chimney into the rubble.
    for (let j = 0; j < 7; j++) {
      const a = (j * TAU) / 7 + random() * 0.42,
        r = 0.4 + random() * 0.12;
      let xx = x + r * Math.cos(a),
        zz = z + r * Math.sin(a);
      let yy = seabed(xx, zz) + 0.118;
      for (let n = 0; n < 4; n++) {
        const theta = a + (random() - 0.5) * 0.75,
          dist = 0.12 + random() * 0.14;
        const nx = xx + Math.cos(theta) * dist,
          nz = zz + Math.sin(theta) * dist,
          ny = seabed(nx, nz) + 0.118;
        rod(cracks, ore, [xx, yy, zz], [nx, ny, nz], 0.018 * (1 - n * 0.17), 0.013 * (1 - n * 0.15), 5);
        xx = nx;
        yy = ny;
        zz = nz;
      }
    }
    bake(cracks);
  }
  const lavaMat = new T.ShaderMaterial({
    uniforms: u,
    vertexColors: true,
    vertexShader: rockVert,
    fragmentShader: rockFrag,
    side: T.DoubleSide,
  });
  mesh(scene, geom(pos, idx, col), lavaMat);
  const plume = new T.ShaderMaterial({
    uniforms: u,
    transparent: true,
    depthWrite: false,
    side: T.FrontSide,
    vertexShader: `varying vec3 wp,center;void main(){center=modelMatrix[3].xyz;wp=(modelMatrix*vec4(position,1)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
    fragmentShader:
      noiseGL +
      `varying vec3 wp,center;uniform float time;void main(){
      vec3 rd=normalize(wp-cameraPosition),lo=center-vec3(1.15,2.3,1.15),hi=center+vec3(1.15,2.3,1.15);
      vec3 it0=(lo-cameraPosition)/rd,it1=(hi-cameraPosition)/rd,aa=min(it0,it1),bb=max(it0,it1);
      float entry=max(0.,max(aa.x,max(aa.y,aa.z))),last=min(bb.x,min(bb.y,bb.z));
      float ds=max(0.,last-entry)/26.;vec3 p=cameraPosition+(entry+ds*.5)*rd;float trans=1.;vec3 col=vec3(0.);
      for(int j=0;j<26;j++){vec3 q=p-center;float h=clamp((q.y+2.3)/4.6,0.,1.);
        float a=q.y*2.1-time*.85+center.x;
        vec2 axis=vec2(.45*h*h+.16*sin(a)*h,.15*sin(a*.73+1.)*h);
        float rad=.115+h*.61;vec2 v=q.xz-axis;
        vec3 flow=vec3(v*4.1,q.y*2.9-time*1.12)+center*.41;
        flow.xy+=.68*vec2(sin(flow.z+v.y*3.),cos(flow.z*.81+v.x*3.));
        float fuzz=fb(flow),billow=nv(flow*1.86);
        v+=h*.13*vec2(sin(flow.z+fuzz*7.),cos(flow.z+billow*5.));
        float dens=(1.-smoothstep(.17,1.32,length(v)/rad+1.49*(fuzz-.49)))*(.22+1.75*smoothstep(.24,.75,fuzz+.24*(billow-.5)))*(1.-smoothstep(.48,1.,h));
        float absorb=1.-exp(-dens*ds*4.35);float edge=smoothstep(.21,.96,length(v)/rad);
        vec3 pigment=mix(vec3(.003,.007,.013),vec3(.079,.124,.137),edge*(.26+.78*billow));
        pigment+=vec3(.55,.092,.009)*exp(-h*22.)*(.46+.54*billow);
        col+=trans*absorb*pigment;trans*=1.-absorb;p+=rd*ds;
      }
      gl_FragColor=vec4(col/max(.001,1.-trans),1.-trans);}`,
  });
  for (const p of origins) {
    const cloud = mesh(scene, new T.BoxGeometry(2.3, 4.6, 2.3), plume, [p.x, p.y + 2.28, p.z]);
    cloud.renderOrder = 1;
  }
  const pp = [],
    attr = [];
  for (const p of origins)
    for (let i = 0; i < 90; i++) {
      pp.push(...p.toArray());
      attr.push(random(), random(), random());
    }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pp, 3));
  g.setAttribute('seed', new T.Float32BufferAttribute(attr, 3));
  const smoke = new T.Points(
    g,
    new T.ShaderMaterial({
      uniforms: u,
      transparent: true,
      depthWrite: false,
      vertexShader: `attribute vec3 seed; uniform float time; varying float age,w,seedN;void main(){
      age=fract(seed.x+time*(.071+.028*seed.y));vec3 p=position;
      p.y+=age*4.8;p.x+=age*(.5+.67*sin(age*6.+position.z))+(seed.y-.5)*(.07+1.0*age);
      p.z+=(seed.z-.5)*(.09+1.14*age)+age*age*.65;vec4 mv=viewMatrix*vec4(p,1);
      gl_Position=projectionMatrix*mv;gl_PointSize=clamp((60.+360.*age)/-mv.z,2.,180.);
      w=exp(-max(-mv.z-12.,0.)*.04);seedN=seed.y*31.;}`,
      fragmentShader:
        noiseGL +
        `varying float age,w,seedN;void main(){
      vec2 q=gl_PointCoord-.5;float shape=.48-length(q)+.16*(nv(vec3(q*7.,seedN+age*2.))-.5);
      float a=smoothstep(.0,.36,shape)*(.09+.14*(1.-age))*(1.-smoothstep(.55,1.,age))*w;
      gl_FragColor=vec4(mix(vec3(.15,.105,.075),vec3(.018,.041,.050),smoothstep(.0,.23,age)),a);}`,
    })
  );
  smoke.frustumCulled = false;
  smoke.renderOrder = 2;
  scene.add(smoke);
  // Independent mineral grains tumble out of the hot core, orange to dull red as they cool.
  const embers = new T.Points(
    g,
    new T.ShaderMaterial({
      uniforms: u,
      transparent: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
      vertexShader: `attribute vec3 seed;uniform float time,height;varying float age,heat;
    void main(){
      age=fract(seed.x+time*(.23+.23*seed.y));float theta=seed.z*6.283+age*(3.+seed.y*4.);
      float spread=(.05+.38*age*age)*(.36+.78*seed.y);
      vec3 p=position+vec3(spread*cos(theta)+.27*age*age,age*(.72+1.29*seed.z),spread*sin(theta));
      vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
      gl_PointSize=clamp(height*(.019+.041*seed.z)*(1.-age*.51)/max(.1,-mv.z),1.2,10.);
      heat=(.65+.35*cos(time*4.2+seed.z*35.))*(1.-smoothstep(.49,1.,age));}`,
      fragmentShader: `varying float age,heat;void main(){
      vec2 p=(gl_PointCoord-.5)*2.;float r=length(p);
      float core=exp(-r*r*9.);vec3 c=mix(vec3(2.0,.19,.012),vec3(4.4,1.79,.29),core*(1.-age));
      gl_FragColor=vec4(c,(core+.21*exp(-r*r*2.))*(1.-smoothstep(.7,1.,r))*heat);}`,
    })
  );
  embers.frustumCulled = false;
  embers.renderOrder = 3;
  scene.add(embers);
  return origins;
}
export function trench(scene) {
  const random = rng(434533);
  makeRockField(scene, random);
  gardens(scene, random);
  return vents(scene, random);
}
