import { T, v, group, object, box, rod, tube, lathe, pbr, noiseGLSL, label } from "./studio.js";
import { glass } from "./glass.js";

function tiled(mat, rx, ry) {
  const o = mat.clone();
  for (const slot of ["map", "normalMap", "bumpMap"]) {
    if (!mat[slot]) continue;
    o[slot] = mat[slot].clone();
    o[slot].repeat.set(rx, ry);
    o[slot].needsUpdate = true;
  }
  return o;
}
function caustic(parent, color, x, y, z, w, h, rotation, seed, U, strength = 1) {
  const uniforms = {
    time: U.time,
    shade: { value: new T.Color(color) },
    seed: { value: seed },
    power: { value: strength },
  };
  const mat = new T.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader:
      "varying vec2 st;void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    fragmentShader: `varying vec2 st;uniform float seed,power,time;uniform vec3 shade;${noiseGLSL}
 void main(){vec2 q=st*2.-1.;float a=atan(q.y,q.x),r=length(q);float l=0.;
 for(int j=0;j<3;j++){float i=float(j);float wave=.49+.10*sin(a*3.+seed+i)+.079*cos(a*5.-seed+i*.6)+.026*sin(a*11.+i+seed)+.027*sin(time*.65+a*4.+seed);
 float d=abs(r-wave-i*.093);l+=.024/(d+.013)*(.28+.72*pow(.5+.5*cos(a*3.-seed+i),2.));}
 float mask=1.-smoothstep(.68,1.,r);gl_FragColor=vec4(shade*(l*.37+.067)*power,mask);}`,
  });
  const o = object(parent, new T.PlaneGeometry(w, h), mat, x, y, z);
  o.rotation.x = rotation;
  return uniforms;
}
function lamp(root, m, x, y, z) {
  const p = group(root, x, y, z);
  rod(p, m.dark, v(0, 0, 0), v(0, 1.58, 0), 0.015);
  lathe(
    p,
    m.iron,
    0,
    0,
    0,
    [
      [0.08, 0.16],
      [0.12, 0.14],
      [0.13, 0.1],
      [0.21, 0.04],
      [0.285, -0.09],
      [0.29, -0.108],
      [0.27, -0.115],
    ],
    48,
  );
  const bulb = new T.MeshBasicMaterial({ color: new T.Color(2.6, 1.35, 0.53) });
  object(p, new T.SphereGeometry(0.068, 18, 12), bulb, 0, -0.1, 0);
  const light = new T.PointLight(0xffbc79, 7, 4.7, 2);
  light.position.set(x, y - 0.19, z);
  root.add(light);
}
function shadowSpot(p, x, y, z, sx, sz) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  const grad = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
  grad.addColorStop(0, "rgba(16,10,8,.79)");
  grad.addColorStop(0.55, "rgba(16,10,8,.43)");
  grad.addColorStop(1, "rgba(16,10,8,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  const o = object(
    p,
    new T.PlaneGeometry(sx, sz),
    new T.MeshBasicMaterial({
      map: t,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    }),
    x,
    y,
    z,
  );
  o.rotation.x = -Math.PI / 2;
}
function windowBay(root, m, x, z) {
  const g = group(root, x, 0, z),
    w = 2.3,
    sy = 3.48,
    bottom = 2.02;
  const sh = new T.Shape();
  sh.moveTo(-w / 2, bottom);
  sh.lineTo(w / 2, bottom);
  sh.lineTo(w / 2, sy);
  sh.absarc(0, sy, w / 2, 0, Math.PI, false);
  sh.closePath();
  const mat = new T.ShaderMaterial({
    uniforms: { lagoon: { value: m.lagoon } },
    vertexShader:
      "varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    fragmentShader: `varying vec2 p;uniform sampler2D lagoon;${noiseGLSL}
 void main(){vec2 uv=vec2(p.x*.255+.50,(p.y-2.02)*.377);float dirt=fb(p*vec2(6.,1.8));float crown=noise2(p*44.);
 vec3 plate=texture2D(lagoon,uv+vec2(dirt-.5,crown-.5)*.002).rgb;
 gl_FragColor=vec4(plate*(1.05+.55*dirt)+vec3(.014,.028,.033)*dirt,1.);}`,
  });
  object(g, new T.ShapeGeometry(sh, 48), mat);
  for (const s of [-1, 1])
    box(
      g,
      m.iron,
      s * (w / 2 + 0.055),
      (sy + bottom) * 0.5,
      0.065,
      0.12,
      sy - bottom + 0.1,
      0.17,
      0.02,
    );
  for (const offset of [0, 0.11]) {
    const arc = [];
    for (let i = 0; i <= 32; i++) {
      const a = (Math.PI * i) / 32;
      arc.push([(w / 2 + offset) * Math.cos(a), sy + (w / 2 + offset) * Math.sin(a), 0.055]);
    }
    tube(g, m.iron, arc, offset ? 0.063 : 0.041, 42);
  }
  box(g, m.wood, 0, bottom - 0.052, 0.1, 2.65, 0.11, 0.42, 0.025);
  for (let i = -3; i <= 3; i++) {
    const xx = i * 0.293,
      top = sy + Math.sqrt((w / 2) ** 2 - xx * xx);
    box(g, m.dark, xx, (top + bottom) / 2, 0.07, 0.029, top - bottom, 0.04);
  }
  for (let j = 0; j < 6; j++) {
    const yy = bottom + j * 0.425,
      ww = yy <= sy ? w : 2 * Math.sqrt(Math.max(0.0, (w / 2) ** 2 - (yy - sy) ** 2));
    box(g, m.dark, 0, yy, 0.074, ww, 0.035, 0.04);
  }
}
function vaseRack(root, m, U) {
  const g = group(root, 2.97, 0, -3.53);
  for (const yy of [1.13, 2.59]) {
    box(g, m.wood, 0, yy, 0, 3.56, 0.13, 0.85, 0.033);
    box(g, m.brass, 0, yy - 0.024, 0.438, 3.54, 0.025, 0.025);
    for (const x of [-1.4, 1.4]) {
      box(g, m.iron, x, yy - 0.3, -0.32, 0.085, 0.58, 0.081, 0.012);
      rod(g, m.iron, v(x, yy - 0.47, -0.31), v(x, yy - 0.09, 0.3), 0.037);
      rod(g, m.steel, v(x, yy - 0.42, -0.28), v(x, yy - 0.42, -0.24), 0.042, 0.032, 8);
    }
  }
  const items = [
    [-1.28, 1.2, 0.59, 0.38, 0x783e89, 0.25, 5],
    [-0.61, 1.2, 0.43, 0.65, 0xcd7832, -0.6, 4],
    [0.1, 1.2, 0.68, 0.4, 0x258163, 0.9, 1],
    [0.94, 1.2, 0.49, 0.59, 0x17639f, -0.75, 2],
    [1.49, 1.2, 0.25, 0.3, 0xab3743, -0.2, 3],
    [-1.25, 2.66, 0.54, 0.55, 0x1a9284, -0.5, 4],
    [-0.5, 2.66, 0.47, 0.38, 0xc24a41, 0.6, 3],
    [0.45, 2.66, 0.54, 0.62, 0x254e89, 0.2, 0],
    [1.29, 2.66, 0.4, 0.4, 0xab842f, -0.5, 5],
  ];
  for (const [x, y, w, h, color, variant, family] of items) {
    const { mesh } = glass(g, m, U, { tint: color, variant, family });
    mesh.scale.set(w, h, w);
    mesh.position.set(x, y, 0);
    mesh.rotation.y = x * 3.7;
    shadowSpot(g, x, y + 0.003, 0, w * 1.16, w * 1.04);
    caustic(g, color, x + 0.075, y + 0.002, 0.15, w * 1.38, 0.45, -Math.PI / 2, x * 34, U, 2.0);
    caustic(g, color, x + 0.15, y + 0.35, -0.394, w * 1.6, h * 1.35, 0, x * 34, U, 0.76);
  }
}
function gauge(g, m, x, y, z) {
  const p = group(g, x, y, z);
  rod(p, m.brass, v(0, 0, -0.06), v(0, 0, 0.05), 0.198, 0.191, 48);
  const cv = document.createElement("canvas");
  cv.width = cv.height = 384;
  const c = cv.getContext("2d");
  c.fillStyle = "#c7bba0";
  c.fillRect(0, 0, 384, 384);
  c.translate(192, 192);
  for (let i = 0; i <= 50; i++) {
    const a = -2.28 + (i * 4.56) / 50;
    c.save();
    c.rotate(a);
    c.strokeStyle = i > 40 ? "#a43e24" : "#302b26";
    c.lineWidth = i % 5 ? 2 : 4;
    c.beginPath();
    c.moveTo(0, -147);
    c.lineTo(0, i % 5 ? -136 : -119);
    c.stroke();
    c.restore();
  }
  c.textAlign = "center";
  c.fillStyle = "#27221f";
  c.font = "bold 27px serif";
  c.fillText("°C", 0, 62);
  c.font = "19px serif";
  c.fillText("MURANO", 0, 88);
  c.rotate(1.37);
  c.fillRect(-4, -113, 8, 130);
  c.beginPath();
  c.arc(0, 0, 9, 0, 7);
  c.fill();
  const map = new T.CanvasTexture(cv);
  map.colorSpace = T.SRGBColorSpace;
  object(
    p,
    new T.CircleGeometry(0.17, 48),
    new T.MeshStandardMaterial({ map, roughness: 0.48 }),
    0,
    0,
    0.052,
  );
}
function bench(root, m, U, receiver) {
  const g = group(root, 1.66, 0, 1.44);
  const boards = receiver(m.wood, "oak"),
    iron = receiver(m.iron);
  for (let i = 0; i < 6; i++) box(g, boards, 0, 1.33, (i - 2) * 0.281, 4.7, 0.156, 0.276, 0.027);
  box(g, iron, 0, 1.17, 0.912, 4.7, 0.19, 0.1, 0.016);
  for (const x of [-2.15, 2.15])
    for (const z of [-0.54, 0.54]) {
      box(g, m.iron, x, 0.58, z, 0.14, 1.16, 0.14, 0.022);
      rod(g, m.iron, v(x, 0.31, z), v(x * 0.79, 1.15, z), 0.043);
      if (z > 0) rod(g, m.brass, v(x, 1.17, 0.961), v(x, 1.17, 0.98), 0.039, 0.035, 8);
    }
  box(g, m.wood, 0, 0.43, 0, 4.53, 0.09, 1.05, 0.023);
  for (let i = 0; i < 5; i++) {
    box(g, m.wood, -1.4 + i * 0.51, 0.54 + (i % 2) * 0.047, -0.1, 0.47, 0.13, 0.55, 0.03);
  }
  box(g, iron, 0.2, 1.437, 0, 2.44, 0.065, 1.14, 0.031);
  lathe(
    g,
    receiver(m.dark),
    0.54,
    1.47,
    -0.08,
    [
      [0.7, 0],
      [0.72, 0.025],
      [0.7, 0.09],
      [0.62, 0.105],
      [0.62, 0.12],
      [0.01, 0.12],
    ],
    64,
  );
  for (let i = 0; i < 3; i++) {
    const t = group(g, -1.6 + i * 0.19, 1.43, 0.12);
    t.rotation.y = -0.3 + i * 0.19;
    rod(t, m.wood, v(0, 0.031, -0.52), v(0, 0.031, -0.16), 0.043, 0.038);
    rod(t, m.brass, v(0, 0.031, -0.18), v(0, 0.031, -0.11), 0.042);
    rod(t, m.steel, v(0, 0.03, -0.11), v(0, 0.03, 0.25), 0.018);
    if (i !== 1) {
      const paddle = box(t, m.dark, 0, 0.031, 0.32, 0.14, 0.044, 0.26, 0.02);
      paddle.rotation.y = 0.06;
    }
  }
  // Forged diamond shears, laid open across the front of the marver.
  const shears = group(g, -0.94, 1.421, 0.57);
  shears.rotation.y = -0.16;
  for (const sign of [-1, 1]) {
    const arm = group(shears, 0, sign * 0.008 + 0.028, 0);
    arm.rotation.y = sign * 0.23;
    const loop = object(arm, new T.TorusGeometry(0.082, 0.014, 8, 32), m.iron, -0.28, 0, 0);
    loop.rotation.x = Math.PI / 2;
    loop.scale.x = 1.55;
    rod(arm, m.iron, v(-0.18, 0, 0), v(0.04, 0, 0), 0.026, 0.021);
    const blade = rod(arm, m.tempered, v(0.015, 0, 0), v(0.4, 0, sign * 0.035), 0.042, 0.002, 4);
    blade.scale.z = 0.72;
  }
  rod(shears, m.brass, v(0, 0.012, 0), v(0, 0.062, 0), 0.025, 0.021);
  const goldGeo = new T.PlaneGeometry(0.31, 0.24, 14, 10),
    p = goldGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    p.setZ(
      i,
      0.006 * Math.sin(p.getX(i) * 65 + 3 * Math.sin(p.getY(i) * 28)) +
        0.013 * Math.cos(p.getY(i) * 31 + p.getX(i) * 9),
    );
  }
  goldGeo.computeVertexNormals();
  for (let i = 0; i < 3; i++) {
    const sheet = object(
      g,
      goldGeo.clone(),
      m.gold,
      1.23 + 0.15 * i,
      1.429 + 0.006 * i,
      0.33 - 0.047 * i,
    );
    sheet.rotation.set(-Math.PI / 2, 0.025, i * 0.34);
  }
  for (let j = 0; j < 2; j++) {
    const jx = 1.72 + j * 0.34,
      jz = -0.25 + j * 0.18,
      jar = pbr(j ? 0x584823 : 0x123d65, 0.25, 0.18);
    lathe(
      g,
      jar,
      jx,
      1.41,
      jz,
      [
        [0, 0],
        [0.117, 0],
        [0.138, 0.031],
        [0.136, 0.26],
        [0.109, 0.3],
        [0.107, 0.345],
        [0.11, 0.35],
      ],
      32,
    );
    rod(g, m.brass, v(jx, 1.753, jz), v(jx, 1.785, jz), 0.117, 0.117, 32);
    label(
      g,
      [[j ? "FOGLIA" : "COBALTO", "bold 86px serif", 153]],
      jx,
      1.565,
      jz + 0.137,
      0.217,
      0.095,
      "#a99b78",
      "#30251d",
    );
  }
  const bucket = group(root, U.tub.value.x, 0, U.tub.value.z);
  lathe(
    bucket,
    m.iron,
    0,
    0,
    0,
    [
      [0.33, 0.08],
      [0.36, 0.07],
      [0.4, 0.16],
      [0.48, 0.91],
      [0.49, 0.95],
      [0.48, 0.98],
      [0.46, 0.98],
      [0.45, 0.91],
      [0.38, 0.21],
    ],
    64,
  );
  for (const y of [0.21, 0.82, 0.958]) {
    const tor = object(
      bucket,
      new T.TorusGeometry(0.368 + y * 0.118, 0.023, 8, 64),
      m.steel,
      0,
      y,
      0,
    );
    tor.rotation.x = Math.PI / 2;
  }
  const handle = [];
  for (let i = 0; i <= 18; i++) {
    const a = (Math.PI * i) / 18;
    handle.push([0.484 * Math.cos(a), 0.82 + 0.64 * Math.sin(a), -0.2 * Math.sin(a)]);
  }
  tube(bucket, m.iron, handle, 0.019);
  const water = new T.ShaderMaterial({
    uniforms: U,
    vertexShader: `varying vec3 world;
      void main(){world=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);}`,
    fragmentShader: `varying vec3 world; uniform vec3 tub; uniform float time,quenchAge,heat;
      ${noiseGLSL}
      float packet(float r,float age){
        float x=r-age*.85;
        return sin(62.*x)*exp(-53.*x*x)*smoothstep(-.05,.11,age)*exp(-1.2*max(age,0.));
      }
      void main(){
        vec2 q=world.xz-tub.xz;
        vec2 impact=q-vec2(.018,.014);float r=length(impact);
        float rings=packet(r,quenchAge)+.65*packet(r,quenchAge-.29)
                   -.4*packet(.91-r,quenchAge);
        vec2 chop=vec2(sin(q.y*29.+time*2.2)+.42*sin(q.x*52.-time),
                       cos(q.x*22.-time*1.4)+.62*sin(q.y*44.+time));
        vec2 slope=.026*chop+.16*rings*impact/max(.018,r);
        vec3 N=normalize(vec3(slope.x,1.,slope.y)), V=normalize(cameraPosition-world);
        vec3 R=reflect(-V,N);
        vec2 arch=(world+R*max(0.,(-1.08-world.z)/min(-.015,R.z))).xy-vec2(-2.45,2.12);
        float opening=(1.-smoothstep(.78,1.31,length(vec2(arch.x,max(0.,arch.y)))))*smoothstep(-1.03,-.51,arch.y);
        float streak=exp(-pow((q.x+.11+.65*q.y+slope.x*1.45)/.16,2.));
        float fresnel=.06+.94*pow(1.-max(0.,dot(N,V)),3.);
        float facets=.5+.5*cos(q.y*106.+18.*q.x+2.9*chop.x+4.*rings-time*2.);
        float fire=(opening*(.14+.46*fb(arch*vec2(4.,2.)+vec2(0.,-time*.78)))+streak*.69)
                  *(.28+.72*smoothstep(.14,.86,facets))*(1.+.11*sin(5.7*time))*heat;
        vec3 c=vec3(.009,.024,.028)+(.06+fresnel)*vec3(.13,.24,.30);
        c+=vec3(2.22,.31,.021)*fire+vec3(.07,.12,.15)*max(0.,rings)*(.5+.5*chop.x);
        c*=1.-.32*smoothstep(.417,.455,length(q));
        gl_FragColor=vec4(c,1.);
      }`,
  });
  const waterMesh = object(bucket, new T.CircleGeometry(0.462, 72), water, 0, U.tub.value.y, 0);
  waterMesh.rotation.x = -Math.PI / 2;
}
export function makeWorkshop(root, m, U, receiver) {
  const wall = tiled(m.plaster, 3.9, 1.56);
  box(root, wall, 0, 3.23, -4.1, 16, 6.5, 0.29);
  const side = tiled(m.plaster, 3.0, 1.56);
  for (const s of [-1, 1]) box(root, side, s * 7.2, 3.24, 0.6, 0.26, 6.5, 11);
  const floor = tiled(m.wall, 4.8, 4.1);
  floor.color.set(0x938e85);
  const fl = object(root, new T.PlaneGeometry(19, 17), receiver(floor, "stone"), 0, 0, 0);
  fl.rotation.x = -Math.PI / 2;
  const ceiling = tiled(m.wood, 4, 3);
  box(root, ceiling, 0, 6.31, 0, 15, 0.19, 12);
  for (let i = 0; i < 6; i++) {
    box(root, m.wood, 0, 6.02, -3.75 + i * 1.72, 14.65, 0.38, 0.33, 0.03);
  }
  for (const x of [-6.1, -0.35, 5.47]) {
    box(root, m.wood, x, 3.03, -3.8, 0.31, 6.12, 0.32, 0.033);
    for (const yy of [1.01, 3.85, 5.71]) box(root, m.iron, x, yy, -3.8, 0.335, 0.11, 0.35, 0.011);
    rod(root, m.wood, v(x, 4.99, -3.75), v(x + 0.84, 5.98, -3.75), 0.109, 0.109, 4);
  }
  windowBay(root, m, 0.52, -3.937);
  vaseRack(root, m, U);
  lamp(root, m, 2.69, 4.67, -2.67);
  lamp(root, m, -5.46, 3.79, -2.03);
  // Gas manifold with flanges, pressure gauge, valve wheel and a rising flue.
  const plant = group(root, -0.04, 0, -2.39);
  tube(
    plant,
    m.copper,
    [
      [-0.39, 0.3, 0.08],
      [-0.19, 0.3, 0.08],
      [-0.08, 0.43, 0.08],
      [-0.08, 2.02, 0.08],
      [0.03, 2.18, 0.08],
      [0.39, 2.18, 0.08],
    ],
    0.067,
  );
  for (const y of [0.58, 1.28, 1.8])
    rod(plant, m.brass, v(-0.08, y, 0.08), v(-0.08, y + 0.092, 0.08), 0.093, 0.093, 8);
  gauge(plant, m, 0.16, 1.99, 0.12);
  object(plant, new T.TorusGeometry(0.157, 0.023, 10, 36), m.copper, -0.08, 1.39, 0.239);
  for (let i = 0; i < 4; i++) {
    const a = (Math.PI * i) / 2;
    rod(
      plant,
      m.brass,
      v(-0.08, 1.39, 0.239),
      v(-0.08 + 0.15 * Math.cos(a), 1.39 + 0.15 * Math.sin(a), 0.239),
      0.012,
    );
  }
  const vent = group(root, -5.07, 0, -2.66);
  rod(vent, m.iron, v(0, 0, 0), v(0, 5.8, 0), 0.245, 0.245, 48);
  for (let j = 0; j < 7; j++)
    rod(vent, m.iron, v(0, 0.55 + j * 0.78, 0), v(0, 0.61 + j * 0.78, 0), 0.27, 0.27, 40);
  for (let k = 0; k < 7; k++) {
    const x = 4.98 + k * 0.121,
      off = (k % 3) * 0.055;
    rod(
      root,
      m.steel,
      v(x - 0.18, 0.06, -3.05 + off),
      v(x + 0.09, 2.6 + k * 0.22, -3.37),
      0.022 + (k % 2) * 0.009,
    );
  }
  const rack = group(root, -5.55, 0, -3.76);
  box(rack, m.wood, 0, 2.97, 0, 2.5, 0.22, 0.22, 0.018);
  for (let i = 0; i < 6; i++) {
    const x = -1.0 + i * 0.37,
      h = 1.45 + (i % 3) * 0.18;
    rod(rack, m.brass, v(x, 2.98, 0.11), v(x, 2.98, 0.23), 0.025);
    object(rack, new T.TorusGeometry(0.075, 0.014, 8, 24), m.steel, x, 2.94, 0.2);
    rod(rack, i % 2 ? m.iron : m.steel, v(x, 2.88, 0.18), v(x + 0.064, h, 0.2), 0.025);
    if (i % 2) box(rack, m.dark, x + 0.064, h - 0.13, 0.2, 0.21, 0.27, 0.05, 0.021);
    else
      for (const d of [-1, 1])
        tube(
          rack,
          m.steel,
          [
            [x + 0.064, h + 0.18, 0.2],
            [x + 0.064 + d * 0.092, h - 0.04, 0.2],
            [x + 0.064 + d * 0.05, h - 0.25, 0.2],
          ],
          0.012,
        );
  }
  bench(root, m, U, receiver);
}
