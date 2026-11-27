import * as T from 'three';
import { V, TAU, random, shader, geometry } from './common.js';

const surfaceVert = `out vec3 n,p;out vec2 st;
void main(){n=normalize(mat3(modelMatrix)*normal);p=(modelMatrix*vec4(position,1.)).xyz;st=uv;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`;
const sphereUV = `vec2 latlon(vec3 d){return vec2(atan(d.z,d.x)/6.2831853+.5,asin(clamp(d.y,-1.,1.))/3.1415926+.5);}`;
export function celestial(scene, maps, time, flare) {
  const rand = random(7429);
  const sky = new T.Mesh(
    new T.SphereGeometry(450, 64, 32),
    shader(
      surfaceVert,
      `
    in vec2 st;out vec4 frag;uniform sampler2D dust;
    void main(){vec3 d=texture(dust,st).rgb;frag=vec4(.002+d*d*.90,1.);}`,
      { dust: { value: maps.sky } },
      { side: T.BackSide, depthWrite: false },
    ),
  );
  sky.renderOrder = -20;
  scene.add(sky);

  const stars = [],
    col = [],
    s = [];
  for (let i = 0; i < 8100; i++) {
    const a = TAU * rand(),
      y = rand() * 2 - 1,
      r = Math.sqrt(1 - y * y);
    stars.push(390 * r * Math.cos(a), 390 * y, 390 * r * Math.sin(a));
    const k = rand(),
      b = 0.18 + 1.9 * Math.pow(rand(), 5);
    col.push(b * (0.76 + 0.38 * k), b * (0.86 + 0.13 * k), b * (1.3 - 0.58 * k));
    s.push(0.6 + 1.1 * rand() + 4 * Math.pow(rand(), 32));
  }
  const g = new T.BufferGeometry();
  for (const [name, array, dim] of [
    ['position', stars, 3],
    ['colorStar', col, 3],
    ['size', s, 1],
  ])
    g.setAttribute(name, new T.Float32BufferAttribute(array, dim));
  const viewport = { value: 720 };
  const points = new T.Points(
    g,
    shader(
      `in vec3 colorStar;in float size;out vec3 c;uniform float height;
    void main(){c=colorStar;gl_PointSize=clamp(size*height/680.,1.,10.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      `in vec3 c;out vec4 f;void main(){vec2 xy=gl_PointCoord*2.-1.;float a=max(0.,1.-dot(xy,xy));f=vec4(c*a*a,1.);}`,
      { height: viewport },
      { transparent: true, blending: T.AdditiveBlending, depthWrite: false },
    ),
  );
  points.renderOrder = -10;
  scene.add(points);

  const sun = new T.Mesh(
    new T.SphereGeometry(6.4, 128, 72),
    shader(
      surfaceVert,
      `
    in vec3 n,p; in vec2 st;out vec4 f;uniform sampler2D flow;uniform float t,activity;
    ${sphereUV}
    void main(){
      vec3 normal=normalize(n);vec2 uv=latlon(normal); uv=vec2(uv.x*2.,uv.y);
      vec4 vort=texture(flow,uv*.997+vec2(t*.00065,0.));
      vec2 drift=(vort.rg-.5)*(.017+.005*sin(t*.21)) + vec2(t*.00053,-t*.00021);
      vec3 m=texture(flow,uv+drift).rgb;
      vec3 micro=texture(flow,uv*2.+m.gr*.023-vec2(t*.0004,0.)).rgb;
      float mu=max(0.,dot(normalize(cameraPosition-p),normal));
      float hotLane=pow(clamp((m.g-.22)*1.64,0.,1.),3.0);
      float thread=hotLane*(.32+.68*micro.g);
      float heat=clamp(.49+1.62*(m.r-.51)+.38*(micro.r-.5)+.49*(m.g-.52)+.24*(m.b-.52),0.,1.);
      vec3 c=mix(vec3(.054,.0008,.004),vec3(.59,.011,.006),smoothstep(.05,.46,heat));
      c=mix(c,vec3(1.90,.119,.009),smoothstep(.39,.70,heat));
      c=mix(c,vec3(3.35,.59,.069),smoothstep(.67,.90,heat));
      c+=vec3(.89,.23,.019)*thread*(.6+activity*.75);
      float mottling=.71+.34*micro.b+.31*m.b+.15*sin(12.*micro.g+8.*m.r);
      c*=mottling*(.44+.58*pow(mu,.49));
      c+=vec3(.36,.16,.026)*pow(max(0.,m.g*.72+micro.g*.48),5.);
      c+=vec3(2.2,.36,.035)*exp(-mu*17.);
      f=vec4(c,1.);}`,
      { flow: { value: maps.flow }, t: time, activity: flare },
    ),
  );
  scene.add(sun);
  const halo = new T.Mesh(
    new T.PlaneGeometry(55, 55),
    shader(
      `out vec2 xy;
    void main(){xy=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      `
    in vec2 xy;out vec4 f;uniform float activity,t,distanceFactor;uniform sampler2D flow;
    void main(){
      vec2 pos=xy/distanceFactor;float d=length(pos),h=(d-6.4)/6.4;
      if(h<-.009) discard;
      float a=atan(pos.y,pos.x)/6.2831853+.5;
      float r=texture(flow,vec2(a*3.,.39+h*.10+t*.001)).r;
      float fine=texture(flow,vec2(a*8.-h*.15,.21+h*.26-t*.003)).g;
      float rays=pow(max(.01,r*.7+fine*.6),2.8);
      float k=max(h,0.);
      vec3 c=vec3(1.25,.17,.014)*exp(-k*31.)+vec3(.69,.086,.016)*exp(-k*(5.5+4.*r))*(.2+rays*(.65+activity));
      c+=vec3(.20,.038,.011)*exp(-k*2.7)*(.25+rays);
      f=vec4(c*smoothstep(-.009,.006,h),1.);}`,
      { flow: { value: maps.flow }, t: time, activity: flare, distanceFactor: { value: 1 } },
      { transparent: true, blending: T.AdditiveBlending, depthWrite: false },
    ),
  );
  halo.renderOrder = 1;
  scene.add(halo);

  // Each sheet is a bundle of field lines with two distinct stellar footpoints.
  const pos = [],
    coords = [],
    index = [],
    phases = [];
  for (let loop = 0; loop < 40; loop++) {
    const a = loop * 2.39996 + 0.1,
      y = rand() * 1.85 - 0.925;
    const base = V(Math.sqrt(1 - y * y) * Math.cos(a), y, Math.sqrt(1 - y * y) * Math.sin(a));
    if (loop === 0) base.set(0.87, 0.46, 0.14).normalize();
    if (loop === 1) base.set(-0.87, 0.41, 0.12).normalize();
    if (loop === 2) base.set(-0.42, 0.86, -0.08).normalize();
    const east = V()
      .crossVectors(base, V(0, 1, 0))
      .normalize();
    const across = east.clone().applyAxisAngle(base, rand() * TAU);
    if (loop < 3) across.crossVectors(V(0, 0, 1), base).normalize();
    const side = V().crossVectors(base, across);
    const height = loop < 3 ? 1.9 + rand() * 0.63 : (loop % 7 === 0 ? 1.35 : 0.27) + rand() * 0.72,
      width = loop < 3 ? 1.62 : 0.46 + rand() * 0.9,
      phase = rand() * 20;
    for (let strand = 0; strand < 6; strand++) {
      const id = pos.length / 3,
        q = strand / 5 - 0.5;
      for (let i = 0; i <= 54; i++) {
        const u = i / 54,
          ang = u * Math.PI;
        const v = base
          .clone()
          .multiplyScalar(
            6.31 + Math.sin(ang) * (height + q * 0.42 + 0.065 * Math.sin(ang * 7 + phase)),
          )
          .addScaledVector(across, -Math.cos(ang) * width + Math.sin(2 * ang + q) * 0.18)
          .addScaledVector(side, Math.sin(ang) * (q * 0.65 + Math.sin(ang * 2 + phase) * 0.21));
        const axis = base
          .clone()
          .multiplyScalar(Math.sin(ang))
          .addScaledVector(across, -Math.cos(ang))
          .normalize();
        for (const sign of [-1, 1]) {
          const o = v
            .clone()
            .addScaledVector(
              axis,
              sign * (strand === 2 ? 0.1 : 0.035) * (1 + 0.25 * Math.sin(ang * 5 + phase)),
            );
          pos.push(...o.toArray());
          coords.push(u, sign);
          phases.push(phase + strand * 0.46);
        }
        const j = id + 2 * i;
        if (i) index.push(j - 2, j - 1, j, j, j - 1, j + 1);
      }
    }
  }
  const loops = geometry(pos, coords, index);
  loops.setAttribute('phase', new T.Float32BufferAttribute(phases, 1));
  const arc = new T.Mesh(
    loops,
    shader(
      `in float phase;out vec2 st;out float seed;uniform float t,activity;
    void main(){st=uv;seed=phase;float w=sin(uv.x*3.14159265);vec3 dir=normalize(position);
      vec3 p=dir*(6.35+(length(position)-6.35)*(.52+activity*.85))+dir*w*.045*sin(uv.x*13.+t*.64+phase);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
      `in vec2 st;in float seed;uniform float t,activity;uniform sampler2D flow;out vec4 f;
    void main(){float n=texture(flow,vec2(st.x*1.2-t*.037,seed*.13)).g;
      float light=(.16+n*n*2.6)*(.35+activity*1.1)*max(0.,1.-abs(st.y));
      f=vec4(vec3(2.0,.23,.034)*light,1.);}`,
      { t: time, activity: flare, flow: { value: maps.flow } },
      { side: T.DoubleSide, transparent: true, blending: T.AdditiveBlending, depthWrite: false },
    ),
  );
  scene.add(arc);
  arc.renderOrder = 2;

  const planetGroup = new T.Group();
  planetGroup.position.set(69, 29, -78);
  planetGroup.rotation.z = -0.29;
  scene.add(planetGroup);
  const planet = new T.Mesh(
    new T.SphereGeometry(3.55, 64, 40),
    shader(
      surfaceVert,
      `
    in vec3 p,n;in vec2 st;out vec4 f;uniform sampler2D clouds;
    void main(){float q=texture(clouds,st*vec2(2.,1.)).r;
      float b=sin(st.y*126.+q*4.)*.1+sin(st.y*55.+q*2.)*.16+q*.24;
      vec3 N=normalize(n);float light=dot(N,normalize(-p));
      float fres=pow(1.-abs(dot(normalize(cameraPosition-p),N)),3.);
      vec3 color=mix(vec3(.026,.032,.085),vec3(.074,.110,.24),clamp(.49+b,0.,1.));
      vec3 rel=p-vec3(69.,29.,-78.),plane=normalize(vec3(.263,.884,.39)),L=normalize(-p);
      float path=-dot(rel,plane)/dot(L,plane);
      float ringR=length(rel+L*path);
      float ringShadow=step(.0,path)*smoothstep(4.25,4.43,ringR)*(1.-smoothstep(6.50,6.7,ringR));
      f=vec4(color*(.035+smoothstep(-.06,.93,light)*.96)*(1.-.59*ringShadow)+vec3(.10,.22,.47)*fres*clamp(light+.28,0.,1.),1.);}`,
      { clouds: { value: maps.flow } },
    ),
  );
  planetGroup.add(planet);
  const rings = new T.Mesh(
    new T.RingGeometry(4.25, 6.7, 128),
    shader(
      `out float r;void main(){r=length(position.xy);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      `in float r;out vec4 f;void main(){float band=.28+.32*sin(r*8.)+.18*sin(r*48.);float a=.6+.18*sin(r*30.);
    f=vec4(vec3(.095,.126,.224)*(.55+band),a*smoothstep(.01,.10,abs(r-5.54)));}`,
      {},
      { side: T.DoubleSide, transparent: true, depthWrite: false },
    ),
  );
  rings.rotation.x = -1.17;
  planetGroup.add(rings);
  return (cam, h) => {
    halo.lookAt(cam.position);
    halo.material.uniforms.distanceFactor.value =
      1 / Math.sqrt(Math.max(0.08, 1 - (6.4 / cam.position.length()) ** 2));
    viewport.value = h;
  };
}
