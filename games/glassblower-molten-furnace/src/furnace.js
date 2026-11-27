import {
  T,
  v,
  object,
  box,
  rod,
  group,
  tube,
  lathe,
  clamp,
  random,
  label,
  noiseGLSL,
} from "./studio.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export const kiln = { x: -2.45, front: -1.08, sill: 1.31, spring: 2.12, radius: 1.1 };
const planeVS =
  "varying vec2 q; void main(){q=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}";
export function makeFurnace(root, m, U) {
  const g = group(root, kiln.x, 0, kiln.front),
    rng = random(1866);
  const brick = m.clay.clone();
  brick.vertexColors = true;
  function clayPiece(geo, tone, heat = 0) {
    const color = new T.Color().setRGB(
      tone * (1 + 0.23 * heat),
      tone * (0.91 - 0.2 * heat),
      tone * (0.8 - 0.29 * heat),
    );
    const a = new Float32Array(geo.attributes.position.count * 3);
    for (let i = 0; i < a.length; i += 3) {
      a[i] = color.r;
      a[i + 1] = color.g;
      a[i + 2] = color.b;
    }
    geo.setAttribute("color", new T.BufferAttribute(a, 3));
    return geo;
  }
  function block(x, y, z, w, h, d, heat = 0) {
    if (w < 0.045) return;
    const geo = new RoundedBoxGeometry(w - 0.014, h - 0.012, d, 1, 0.024);
    const smoke = clamp((y - 2.5) * 0.66) * Math.exp((-x * x) / 2.4);
    const tone = (0.32 + rng() * 0.38) * (1 - 0.69 * smoke);
    const uv = geo.attributes.uv,
      ox = rng(),
      oy = rng(),
      scale = 0.52 + 0.34 * rng();
    for (let i = 0; i < uv.count; i++)
      uv.setXY(i, uv.getX(i) * scale + ox, uv.getY(i) * scale + oy);
    const o = object(g, clayPiece(geo, tone, heat), brick, x, y, z);
    o.rotation.z = (rng() - 0.5) * 0.011;
  }
  const r = kiln.radius,
    outer = r + 0.47,
    sy = kiln.spring;
  const W = 2.22;
  function course(x0, x1, yy, layer) {
    const step = 0.53,
      rise = 0.267;
    for (let x = -W - step + (layer % 2) * step * 0.5; x < x1; x += step) {
      const a = Math.max(x0, x),
        b = Math.min(x1, x + step);
      if (b > a + 0.045)
        block(
          (a + b) / 2,
          yy,
          -0.94 + (rng() - 0.5) * 0.025,
          b - a,
          rise,
          1.89,
          1 - clamp((Math.abs((a + b) / 2) - 1) / 1.4),
        );
    }
  }
  for (let row = 0; row < 15; row++) {
    const yy = 0.1335 + row * 0.267;
    if (yy < 1.32 || yy - 0.134 > sy + outer) course(-W, W, yy, row);
    else {
      const cut =
        yy < sy ? outer : Math.sqrt(Math.max(0, outer * outer - Math.max(0, yy - 0.134 - sy) ** 2));
      course(-W, -cut, yy, row);
      course(cut, W, yy, row);
    }
  }
  for (let k = 0; k < 3; k++)
    for (const s of [-1, 1])
      block(s * (r + 0.237), 1.445 + 0.267 * k, -0.29, 0.478, 0.269, 0.71, 1);
  // Tapered voussoirs lock each ring into the jambs and expose their intrados.
  function wedge(a, b, ri, ro, front, depth, tone) {
    const shape = new T.Shape();
    shape.moveTo(Math.cos(a) * ri, sy + Math.sin(a) * ri);
    shape.absarc(0, sy, ri, a, b, false);
    shape.lineTo(Math.cos(b) * ro, sy + Math.sin(b) * ro);
    shape.absarc(0, sy, ro, b, a, true);
    shape.closePath();
    const geo = new T.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      steps: 1,
      bevelSize: 0.012,
      bevelThickness: 0.012,
      bevelSegments: 1,
      curveSegments: 36,
    });
    const pos = geo.attributes.position,
      uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, pos.getX(i) * 0.8 + pos.getZ(i) * 0.44, pos.getY(i) * 0.85 + pos.getZ(i) * 0.21);
    }
    object(g, clayPiece(geo, tone, 1), brick, 0, 0, front - depth);
  }
  for (let k = 0; k < 15; k++) {
    const a = (k * Math.PI) / 15 + 0.005,
      b = ((k + 1) * Math.PI) / 15 - 0.005;
    wedge(
      a,
      b,
      r,
      outer + (k === 7 ? 0.075 : 0),
      0.105 + (k === 7 ? 0.05 : 0),
      0.7,
      0.84 + rng() * 0.45,
    );
    wedge(a, b, outer + 0.018, outer + 0.115, 0.018, 0.24, 0.55 + rng() * 0.25);
  }
  // Firebrick lining disappears into the chamber behind the decorative stone arch.
  for (let k = 0; k < 11; k++)
    wedge(
      (k * Math.PI) / 11 + 0.006,
      ((k + 1) * Math.PI) / 11 - 0.006,
      r * 0.99,
      r + 0.16,
      -0.58,
      1.75,
      0.63 + rng() * 0.4,
    );
  for (const s of [-1, 1]) box(g, m.clay, s * (r + 0.1), 1.75, -1.5, 0.22, 1.0, 2.4);
  box(g, m.clay, 0, 1.27, -1.1, 2.7, 0.16, 2.5);
  box(g, m.dark, 0, 1.255, 0.17, 3.25, 0.12, 0.66, 0.035);
  for (let i = 0; i < 8; i++) block(-1.38 + i * 0.397, 1.365, 0.13, 0.397, 0.12, 0.7, 0.8);
  for (const x of [-2.08, 2.08]) {
    box(g, m.iron, x, 2.07, 0.09, 0.118, 3.95, 0.105, 0.02);
    for (let j = 0; j < 9; j++)
      rod(g, m.steel, v(x, 0.32 + j * 0.44, 0.14), v(x, 0.32 + j * 0.44, 0.171), 0.038, 0.035, 8);
  }
  box(g, m.iron, 0, 0.49, 0.105, 4.47, 0.13, 0.1, 0.013);
  label(
    g,
    [
      ["OFFICINA  •  VENEZIA", "30px serif", 70],
      ["FORNACE", "bold 90px serif", 164],
      ["M U R A N O    /    1 8 7 6", "27px serif", 207],
    ],
    0,
    0.79,
    0.125,
    1.2,
    0.4,
  );
  for (const x of [-0.55, 0.55])
    for (const y of [0.63, 0.95]) rod(g, m.brass, v(x, y, 0.125), v(x, y, 0.143), 0.019, 0.015, 8);
  box(g, m.iron, 0, 0.27, 0.09, 2.76, 0.32, 0.13, 0.024);
  for (let i = 0; i < 19; i++)
    box(g, m.dark, -1.24 + i * 0.137, 0.27, 0.163, 0.067, 0.18, 0.02, 0.011);
  for (const x of [-1.53, 1.53]) {
    rod(g, m.iron, v(x, 0.65, 0.08), v(x, 0.65, 0.215), 0.047);
    rod(g, m.iron, v(x, 0.99, 0.08), v(x, 0.99, 0.215), 0.047);
    rod(g, m.steel, v(x, 0.65, 0.215), v(x, 0.99, 0.215), 0.032);
  }
  const hood = group(g, 0, 0, -0.82);
  const profile = [
    [-2.43, 3.99, 0.0],
    [2.43, 3.99, 0],
    [2.43, 3.99, -2.45],
    [-2.43, 3.99, -2.45],
    [-1.13, 5.21, -0.67],
    [1.13, 5.21, -0.67],
    [1.13, 5.21, -1.93],
    [-1.13, 5.21, -1.93],
  ];
  const pos = [],
    uv = [];
  for (const [a, b, c, d] of [
    [0, 1, 5, 4],
    [1, 2, 6, 5],
    [2, 3, 7, 6],
    [3, 0, 4, 7],
  ]) {
    for (const k of [a, b, c, a, c, d]) {
      const [x, y, z] = profile[k];
      pos.push(x, y, z + 1.02);
      uv.push(x * 0.45 + z * 0.57, y * 0.8);
    }
  }
  const geo = new T.BufferGeometry();
  geo.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new T.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  const hoodMat = m.iron.clone();
  hoodMat.side = T.DoubleSide;
  object(hood, geo, hoodMat);
  box(hood, m.dark, 0, 4.02, 0.95, 4.94, 0.16, 0.17, 0.025);
  for (let i = 0; i < 27; i++) {
    const x = -2.34 + i * 0.18;
    rod(hood, m.steel, v(x, 4.02, 1.028), v(x, 4.02, 1.064), 0.025, 0.022, 8);
  }
  for (let i = 0; i < 7; i++) {
    const x = -2.34 + i * 0.78;
    rod(hood, m.iron, v(x, 4.08, 0.98), v(x * 0.46, 5.21, 0.35), 0.034);
  }
  box(hood, m.iron, 0, 5.68, -0.23, 2.19, 1.03, 1.23, 0.035);
  // Refractory back wall. The dark cellular boundaries remain visible through the flame.
  const fire = new T.ShaderMaterial({
    uniforms: U,
    vertexShader: planeVS,
    fragmentShader: `varying vec2 q;uniform float time,heat;${noiseGLSL}
  void main(){vec2 p=q*vec2(3.0,2.8);float t=time*.32;
    float warp=fb(p*3.+vec2(0,-t));float turbulence=fb(p*vec2(3.5,1.6)+vec2(warp*2.,-t*1.7));
    vec2 cell=p*vec2(3.,5.);cell.x+=.5*mod(floor(cell.y),2.);cell+=.16*vec2(noise2(p*21.),noise2(p*17.));
    vec2 seam=abs(fract(cell)-.5);float joints=smoothstep(.45,.5,max(seam.x,seam.y));
    float bed=1.-smoothstep(.05,.9,q.y);float glow=(.28+1.8*turbulence*turbulence+bed*.86)*(1.-.38*joints);
    float flame=pow(max(0.,1.-abs(turbulence-.48)*4.8),3.)*(1.-q.y)*1.4;
    vec3 c=(vec3(1.59,.23,.012)*glow+vec3(1.51,.51,.049)*glow*glow+vec3(1.8,1.19,.29)*flame)*(heat*.77+.23);
    c*=.60+.40*bed+.35*smoothstep(.48,.77,turbulence);
    gl_FragColor=vec4(c*exp((heat-1.)*vec3(2.3,4.4,6.8)),1.);}`,
  });
  object(g, new T.PlaneGeometry(2.65, 2.38), fire, 0, 2.31, -2.06);
  const flameMat = new T.ShaderMaterial({
    uniforms: U,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader: planeVS,
    fragmentShader: `varying vec2 q;uniform float time,heat;${noiseGLSL}
  void main(){float x=q.x*8.;vec2 p=vec2(x,q.y*3.-time*1.12);float n=fb(p+vec2(fb(p*1.6)*2.,.0));
    float height=.07+.65*pow(fb(vec2(x*1.2-time*.22,time*.31)),1.4);
    float f=smoothstep(-.06,.16,height*.9-q.y+.5*(n-.38))*smoothstep(.0,.21,q.y);
    float edge=sin(q.x*3.14159);
    vec3 flame=mix(vec3(2.2,.39,.031),vec3(3.6,1.21,.18),smoothstep(.33,.70,n));
    gl_FragColor=vec4(flame*exp((heat-1.)*vec3(2.3,4.4,6.8)),f*edge*heat);}`,
  });
  object(g, new T.PlaneGeometry(2.16, 1.93), flameMat, 0, 2.32, -0.46);
  // Radiation from the inner refractory arch rises toward the back of the kiln.
  const liningPos = [],
    liningUV = [];
  function tile(a, b, c, d, s0, s1) {
    for (const [point, u, z] of [
      [a, s0, 0],
      [b, s1, 0],
      [c, s1, 1],
      [a, s0, 0],
      [c, s1, 1],
      [d, s0, 1],
    ]) {
      liningPos.push(...point);
      liningUV.push(u, z);
    }
  }
  const profileInner = [
    [-r, 1.4],
    [-r, sy],
  ];
  for (let i = 1; i <= 44; i++) {
    const a = Math.PI * (1 - i / 44);
    profileInner.push([(r - 0.018) * Math.cos(a), sy + (r - 0.018) * Math.sin(a)]);
  }
  profileInner.push([r, 1.4]);
  for (let i = 1; i < profileInner.length; i++) {
    const a = profileInner[i - 1],
      b = profileInner[i];
    tile([...a, -0.18], [...b, -0.18], [...b, -2.03], [...a, -2.03], (i - 1) / 46, i / 46);
  }
  const lining = new T.BufferGeometry();
  lining.setAttribute("position", new T.Float32BufferAttribute(liningPos, 3));
  lining.setAttribute("uv", new T.Float32BufferAttribute(liningUV, 2));
  object(
    g,
    lining,
    new T.ShaderMaterial({
      side: T.DoubleSide,
      uniforms: U,
      vertexShader: planeVS,
      fragmentShader: `varying vec2 q;uniform float heat,time;${noiseGLSL}
   void main(){vec2 p=q*vec2(8.,5.);p.x+=.5*mod(floor(p.y),2.);p+=.10*vec2(noise2(q*85.),noise2(q*76.));
   vec2 d=abs(fract(p)-.5);float seam=smoothstep(.45,.49,max(d.x,d.y));
   float ash=fb(q*vec2(32.,16.));float crust=fb(q*vec2(6.,5.));float hot=clamp(q.y*.99+.27*(ash-.42),0.,1.);
   vec3 cold=vec3(.17,.031,.008)*(.40+ash);
   vec3 c=cold+vec3(3.1,.42,.018)*pow(hot,1.45)+vec3(2.4,1.35,.105)*pow(hot,3.);
   c*=mix(.75,1.33,ash)*(1.-.38*seam)*(.84+.26*crust);gl_FragColor=vec4(c*(heat*.8+.2)*exp((heat-1.)*vec3(2.3,4.4,6.8)),1.);}`,
    }),
  );
  const coalMat = m.clay.clone();
  coalMat.vertexColors = true;
  coalMat.emissive = new T.Color(0xa42d01);
  coalMat.emissiveIntensity = 0.8;
  coalMat.onBeforeCompile = (shader) => {
    shader.uniforms.kilnHeat = U.heat;
    shader.uniforms.kilnTime = U.time;
    shader.vertexShader =
      "varying vec3 emberPos; uniform float kilnTime;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        emberPos=position;
        // The colour is constant across each individual clinker after batching.
        float seed=color.r*73.;
        float roll=sin(kilnTime*(.72+.28*color.r)+seed);
        float settle=smoothstep(.40,.95,roll)*(.35+.65*fract(seed));
        transformed.x+=.034*settle*cos(seed);
        transformed.y+=.023*settle;
        transformed.z+=.030*settle*sin(seed);`,
      );
    shader.fragmentShader =
      "varying vec3 emberPos;uniform float kilnHeat,kilnTime;\n" +
      noiseGLSL +
      shader.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
      vec2 e=emberPos.xz*9.+emberPos.y*vec2(4.,8.);
      float skin=fb(e*2.4);float crack=pow(max(0.,1.-abs(skin-.46)*3.7),6.);
      float draft=fb(e*.35+vec2(-kilnTime*.45,kilnTime*.18));
      float live=smoothstep(.26,.72,draft+.09*sin(2.3*kilnTime+e.x*.47));
      diffuseColor.rgb*=.24+.41*skin;
      totalEmissiveRadiance=pow(kilnHeat,1.8)*(vec3(.15,.008,.001)*(.4+live)
        +crack*(.36+live*1.6)*vec3(2.8,.31,.013)+live*crack*crack*vec3(1.8,.83,.12));`,
      );
  };
  for (let i = 0; i < 112; i++) {
    const x = (rng() - 0.5) * 2.12,
      z = -rng() * 1.83,
      rad = 0.04 + rng() * 0.12,
      geo = new T.DodecahedronGeometry(rad, 0);
    const coal = object(
      g,
      clayPiece(geo, 0.2 + rng() * 0.7, 1),
      coalMat,
      x,
      1.455 + rng() * 0.09,
      z + 0.19,
    );
    coal.rotation.set(rng() * 2, rng() * 3, rng());
    coal.scale.y = 0.65;
  }
}
