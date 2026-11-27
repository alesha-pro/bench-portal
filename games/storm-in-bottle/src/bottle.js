import * as T from "three";
import {
  group,
  mesh,
  ball,
  ring,
  lathe,
  rod,
  curve,
  geom,
  batch,
  std,
  rng,
  tau,
  canvasTex,
} from "./craft.js";
import { profileCurve, radius, uniforms } from "./sea.js";

function shellGeometry() {
  const v = [],
    uv = [],
    idx = [],
    xs = profileCurve.getPoints(216),
    n = 144;
  for (let i = 0; i < xs.length; i++) {
    const { x, y: r } = xs[i];
    for (let j = 0; j <= n; j++) {
      let a = (j / n) * tau;
      let rr =
        r * (1 + 0.0038 * Math.sin(3 * a + 0.86 * x) + 0.0026 * Math.sin(5 * a - 1.6 * x)) +
        0.0018 * Math.sin(17 * a + 4 * x);
      // Central kick-up where the pontil pushed back into the molten heel.
      const punt = x < -3.31 ? 0.34 * Math.exp(-((rr / 0.65) ** 2)) : 0;
      v.push(x + punt, rr * Math.cos(a), rr * Math.sin(a));
      uv.push(i / (xs.length - 1), j / n);
      if (i < xs.length - 1 && j < n) {
        let k = i * (n + 1) + j;
        idx.push(k, k + 1, k + n + 1, k + 1, k + n + 2, k + n + 1);
      }
    }
  }
  return geom(v, idx, uv);
}
function fittings(parent, m) {
  const fixed = group(parent),
    r = rng(88842);
  const cork = group(fixed);
  cork.rotation.z = -Math.PI / 2;
  lathe(
    cork,
    [
      [2.95, 0],
      [2.95, 0.296],
      [3.23, 0.322],
      [3.48, 0.367],
      [3.57, 0.368],
      [3.592, 0.35],
      [3.592, 0],
    ],
    m.cork,
  );
  const endGrain = canvasTex(384, 384, (c, w, h) => {
    c.fillStyle = "#b98a59";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 6100; i++) {
      const x = r() * w,
        y = r() * h,
        stratum = Math.sin(y * 0.082 + 0.8 * Math.sin(x * 0.027));
      c.fillStyle = i % 5 ? "rgba(89,53,28,.18)" : "rgba(232,198,140,.47)";
      c.fillRect(x, y, 0.7 + r() ** 3 * 9, 0.65 + r() * (1.2 + stratum * 0.7));
    }
    c.strokeStyle = "#69492f";
    c.lineWidth = 1.9;
    for (let i = 0; i < 33; i++) {
      const x = r() * w,
        y = r() * h;
      c.beginPath();
      c.moveTo(x, y);
      c.bezierCurveTo(x + 8, y - 4, x + 10, y + 2, x + 15 + r() * 18, y - 3);
      c.stroke();
    }
  });
  const end = mesh(
    fixed,
    new T.CircleGeometry(0.345, 72),
    std(0xffffff, 0.86, 0, { map: endGrain, bumpMap: endGrain, bumpScale: 0.026 }),
    3.594,
    0,
    0,
  );
  end.rotation.y = Math.PI / 2;
  const pit = std(0x705136, 0.95);
  for (let i = 0; i < 135; i++) {
    const a = r() * tau,
      x = 3.29 + r() * 0.29,
      rr = 0.329 + (x - 3.29) * 0.13;
    ball(fixed, 0.005 + r() ** 2 * 0.014, pit, x, rr * Math.cos(a), rr * Math.sin(a), 1.8, 0.48, 1);
  }
  for (let i = 0; i < 66; i++) {
    const a = r() * tau,
      rr = 0.331 * Math.sqrt(r());
    ball(fixed, 0.006 + r() * 0.011, pit, 3.591, Math.cos(a) * rr, Math.sin(a) * rr, 0.3, 1.5, 1);
  }
  const strands = [m.cord, std(0x967950, 0.87), std(0xc5ae7d, 0.86)];
  for (let k = 0; k < 3; k++) {
    const pts = [];
    for (let i = 0; i <= 900; i++) {
      let u = i / 900,
        a = tau * (6.45 * u + 0.08),
        tw = tau * (u * 71 + k / 3);
      let rr = radius(2.51 + 0.48 * u) + 0.029 + 0.012 * Math.cos(tw);
      pts.push([2.5 + 0.49 * u + 0.012 * Math.sin(tw), rr * Math.cos(a), rr * Math.sin(a)]);
    }
    curve(fixed, pts, 0.016, strands[k], 800, 5);
  }
  for (let i = 0; i < 62; i++) {
    const x = 2.5 + r() * 0.49,
      a = r() * tau,
      rr = radius(x) + 0.047,
      f = 0.018 + r() * 0.045;
    curve(
      fixed,
      [
        [x, rr * Math.cos(a), rr * Math.sin(a)],
        [x + 0.012, (rr + f * 0.5) * Math.cos(a + 0.04), (rr + f * 0.5) * Math.sin(a + 0.04)],
        [x + 0.018, (rr + f) * Math.cos(a + 0.082), (rr + f) * Math.sin(a + 0.082)],
      ],
      0.0025,
      m.cord,
      6,
      4,
    );
  }
  for (let k = 0; k < 2; k++)
    curve(
      fixed,
      [
        [2.78 + k * 0.06, -0.1, 0.37],
        [2.7 + k * 0.1, -0.28, 0.43],
        [2.73 + k * 0.13, -0.46, 0.48],
        [2.84 + k * 0.07, -0.64, 0.45],
      ],
      0.015,
      strands[k],
      32,
    );
  // A crossed stopper knot and the separated yarns at the cut end.
  for (let strand = 0; strand < 3; strand++) {
    const pts = [];
    for (let i = 0; i <= 72; i++) {
      const a = (tau * i) / 72,
        tw = 3 * a;
      pts.push([
        2.79 + 0.095 * Math.sin(2 * a) + 0.008 * Math.sin(12 * a + strand * 2.09),
        -0.17 + 0.062 * Math.sin(tw),
        0.35 + 0.066 * Math.cos(2 * a) + 0.009 * Math.cos(12 * a + strand * 2.09),
      ]);
    }
    curve(fixed, pts, 0.012, strands[strand], 90, 5);
  }
  for (let i = 0; i < 17; i++) {
    const x = 2.72 + r() * 0.035,
      y = -0.22 + r() * 0.03,
      z = 0.41 + r() * 0.025;
    curve(
      fixed,
      [
        [x, y, z],
        [x - 0.07, y - 0.062, z + 0.045],
        [x - 0.1 - r() * 0.09, y - 0.075 - r() * 0.09, z + 0.035 + r() * 0.07],
      ],
      0.0035,
      strands[i % 3],
      9,
      4,
    );
  }
  const seal = group(fixed);
  seal.position.set(2.87, -0.64, 0.443);
  seal.rotation.z = -0.16;
  const sh = new T.Shape();
  for (let i = 0; i <= 65; i++) {
    let a = (tau * i) / 65,
      rr = 0.226 * (1 + 0.055 * Math.sin(6 * a) + 0.035 * Math.sin(9 * a + 1));
    let x = Math.cos(a) * rr,
      y = Math.sin(a) * rr;
    i ? sh.lineTo(x, y) : sh.moveTo(x, y);
  }
  mesh(
    seal,
    new T.ExtrudeGeometry(sh, {
      depth: 0.028,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.023,
      bevelThickness: 0.023,
    }),
    m.wax,
  );
  const stamp = std(0xae4734, 0.38, 0.15);
  ring(seal, 0.159, 0.009, stamp, 0, 0, 0.056, "z");
  ring(seal, 0.149, 0.004, stamp, 0, 0, 0.062, "z");
  rod(seal, [0, -0.097, 0.061], [0, 0.086, 0.061], 0.009, stamp);
  rod(seal, [-0.049, 0.045, 0.061], [0.049, 0.045, 0.061], 0.008, stamp);
  ring(seal, 0.02, 0.006, stamp, 0, 0.103, 0.061, "z");
  curve(
    seal,
    [
      [-0.095, -0.036, 0.061],
      [-0.075, -0.07, 0.061],
      [0, -0.099, 0.061],
      [0.07, -0.07, 0.061],
      [0.095, -0.033, 0.061],
    ],
    0.011,
    stamp,
  );
  for (const s of [-1, 1])
    rod(seal, [s * 0.095, -0.034, 0.061], [s * 0.06, -0.047, 0.061], 0.011, stamp, 0.002);
  for (const side of [-1, 1])
    for (let i = 0; i < 7; i++) {
      const a = -1.24 + i * 0.31,
        xx = side * 0.12 * Math.cos(a),
        yy = 0.115 * Math.sin(a);
      const leaf = ball(seal, 0.014, stamp, xx, yy, 0.058, 0.48, 1.35, 0.37);
      leaf.rotation.z = side * (0.8 - a);
    }
  for (const x of [-0.031, 0, 0.031]) ball(seal, 0.009, stamp, x, 0.129 - Math.abs(x) * 0.21, 0.059);
  batch(fixed);
}
export function bottledGlass(parent, glassScene, m, target, study) {
  fittings(parent, m);
  const u = {
    ...uniforms,
    back: { value: target.texture },
    depthMap: { value: target.depthTexture },
    study: { value: study },
    size: { value: new T.Vector2() },
  };
  const material = new T.ShaderMaterial({
    uniforms: u,
    side: T.FrontSide,
    vertexShader: `
 varying vec3 wPos,norm,local;void main(){local=position;norm=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);wPos=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}
 `,
    fragmentShader: `
 varying vec3 wPos,norm,local;uniform sampler2D back,depthMap,study,studio;uniform vec2 size;uniform float flash;
 float softrect(vec2 p,vec2 b,float e){vec2 d=abs(p)-b;return 1.-smoothstep(-e,e,max(d.x,d.y));}
 vec3 environment(vec3 R){
  vec2 uv=vec2(fract(.54+atan(R.x,-R.z)*.30),clamp(.46+.50*R.y,0.,1.));vec2 sphere=vec2(atan(R.z,R.x)/6.28318+.62,asin(clamp(R.y,-1.,1.))/3.14159+.5);
 vec3 room=texture2D(study,uv).rgb*.7+(1.35*(1.-exp(-texture2D(studio,sphere).rgb*.75)))*.70+vec3(.015,.026,.027);
  // Two mullioned window reflections and the warm desk-side practical.
  float z=max(.025,-R.z);vec2 w=vec2(R.x,R.y)/z;
  float window=softrect(w-vec2(-.71,.74),vec2(.54,.72),.070);
  float frame=mix(.29,1.,smoothstep(.01,.034,abs(mod(w.x+.12,.34)-.17))*smoothstep(.013,.042,abs(mod(w.y+.04,.47)-.235)));
  room+=vec3(.70,1.01,1.17)*window*frame;
  float strip=softrect(vec2(R.x+.33,R.y-.83),vec2(.42,.031),.022)*smoothstep(-.2,.45,R.z);
  float strip2=softrect(vec2(R.x-.22,R.y-.91),vec2(.54,.022),.016)*smoothstep(-.4,.20,R.z);
  room+=vec3(.75,.88,.84)*(strip+.68*strip2);
  room+=vec3(.16,.105,.055)*softrect(vec2(R.x-.40,R.y-.32),vec2(.37,.043),.036)*smoothstep(.1,.55,R.z);
  room+=vec3(2.1,1.06,.31)*pow(max(0.,dot(R,normalize(vec3(.76,.25,-.47)))),85.);
  return room;
 }
 void main(){vec2 uv=gl_FragCoord.xy/size;float zScene=texture2D(depthMap,uv).r;if(gl_FragCoord.z>zScene+.000012)discard;
 float a=atan(local.z,local.y),x=local.x;vec3 N=normalize(norm+vec3(.014*cos(3.3*x+3.*a)+.005*cos(16.*x+a),.009*sin(12.*a+3.*x),.008*cos(9.*a-x)));
 vec3 V=normalize(cameraPosition-wPos);float ndv=clamp(dot(N,V),.012,1.);vec3 R=reflect(-V,N);
 float rim=pow(1.-ndv,2.35),fres=.044+.90*pow(1.-ndv,4.35);float base=1.-smoothstep(.04,.17,abs(x+3.25));float lip=(1.-smoothstep(.045,.124,abs(x-3.16)));
 vec3 refracted=refract(-V,N,1./1.511);vec3 vN=mat3(viewMatrix)*N,ray=mat3(viewMatrix)*refracted;
 vec2 delta=(ray.xy/(-ray.z+.15)+((mat3(viewMatrix)*V).xy))*(.037+.046*rim+.025*base);delta.x*=size.y/size.x;
 vec2 shift=vN.xy*.0009*rim;vec3 transmission=vec3(texture2D(back,clamp(uv+delta*.970-shift,.001,.999)).r,texture2D(back,clamp(uv+delta,.001,.999)).g,texture2D(back,clamp(uv+delta*1.035+shift,.001,.999)).b);
 float path=.12+.68*rim+.67*base+.44*lip;vec3 absorbed=transmission*exp(-vec3(.68,.105,.37)*path);
 vec3 reflection=environment(R);vec3 col=mix(absorbed,reflection,fres)+reflection*(.057+.10*rim)+vec3(.023,.115,.076)*rim;
 float line=exp(-pow((x+3.18)/.026,2.))+.72*exp(-pow((x+3.08)/.018,2.))+.8*exp(-pow((x-3.22)/.018,2.));col+=line*(vec3(.10,.20,.15)+.14*reflection)*(.34+.66*rim);col+=flash*rim*vec3(.17,.34,.57);gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,
  });
  const bottle = mesh(glassScene, shellGeometry(), material);
  bottle.frustumCulled = false;
  bottle.matrixAutoUpdate = false;
  // Small entrained air seeds follow the wall of the blown vessel.
  const rand = rng(9812),
    count = 378;
  const bubbleMat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    vertexShader: `varying vec3 normalEye,viewEye;void main(){
      mat4 mv=modelViewMatrix*instanceMatrix;vec4 v=mv*vec4(position,1.);
      normalEye=transpose(inverse(mat3(mv)))*normal;viewEye=-v.xyz;gl_Position=projectionMatrix*v;}`,
    fragmentShader: `varying vec3 normalEye,viewEye;void main(){
      vec3 n=normalize(normalEye);float edge=pow(1.-abs(dot(n,normalize(viewEye))),.62);
      float glint=pow(max(0.,dot(n,normalize(vec3(-.42,.59,.72)))),12.);
      gl_FragColor=vec4(mix(vec3(.035,.147,.104),vec3(.75,1.,.90),glint+.41*edge),.14+.60*edge+.24*glint);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  const bubbles = new T.InstancedMesh(new T.SphereGeometry(1, 10, 6), bubbleMat, count);
  const dummy = new T.Object3D();
  for (let i = 0; i < count; i++) {
    const u = rand(),
      v = rand(),
      cluster = i % 4 === 0;
    let x = -3.21 + 5.72 * u,
      a = cluster ? u * 8.3 + 0.18 * (v - 0.5) + 2.04 : v * tau;
    let rr = radius(x) - 0.02 - 0.018 * rand();
    if (i < 58) {
      rr = 0.18 + 1.12 * Math.sqrt(u);
      x = -3.312 + 0.34 * Math.exp(-((rr / 0.65) ** 2));
    }
    const s = 0.004 + 0.02 * rand() ** 3;
    dummy.position.set(x, rr * Math.cos(a), rr * Math.sin(a));
    dummy.scale.set(s * (1.12 + 1.3 * u), s, s * (0.82 + 0.21 * v));
    dummy.rotation.z = 0.19 * Math.sin(a);
    dummy.updateMatrix();
    bubbles.setMatrixAt(i, dummy.matrix);
  }
  bubbles.renderOrder = 3;
  parent.add(bubbles);
  // Inner wall creates a second silhouette through the thick heel and shoulder.
  const liner = mesh(
    parent,
    shellGeometry(),
    new T.ShaderMaterial({
      side: T.BackSide,
      transparent: true,
      depthWrite: false,
      vertexShader: `varying vec3 n,p;void main(){n=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);p=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
      fragmentShader: `varying vec3 n,p;void main(){float rim=pow(1.-abs(dot(normalize(n),normalize(cameraPosition-p))),2.4);gl_FragColor=vec4(vec3(.027,.139,.097)+rim*vec3(.087,.157,.124),.045+.52*rim);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,
    }),
  );
  liner.scale.set(0.977, 0.952, 0.952);
  liner.position.x = 0.016;
  liner.castShadow = false;
  liner.renderOrder = 1;
  return {
    object: bottle,
    resize(w, h) {
      u.size.value.set(w, h);
    },
    update() {
      parent.updateWorldMatrix(true, false);
      bottle.matrix.copy(parent.matrixWorld);
      bottle.matrixWorldNeedsUpdate = true;
    },
  };
}
