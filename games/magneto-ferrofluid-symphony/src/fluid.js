import * as T from 'three';
import { nearestSiteGLSL } from './lattice.js';

const vertexShader = `
out vec3 vWorld;
void main(){
  vec4 w=modelMatrix*vec4(position,1.);
  vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;
}`;
const fragmentShader = `
precision highp float;
#define gl_FragColor frag
in vec3 vWorld;
uniform mat4 projectionMatrix;
uniform samplerCube uRoom;
uniform vec3 uCenter,uBounds,uAccent;
uniform float uAmp,uSpin,uTime,uOrbY,uCrown,uMandala,uRotation,uShrink;
out vec4 frag;
mat2 turn(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hexCell(vec2 p){
  vec2 cell=vec2(1.,1.7320508);
  vec2 a=mod(p+.5*cell,cell)-.5*cell;
  vec2 b=mod(p,cell)-.5*cell;
  return dot(a,a)<dot(b,b)?a:b;
}
float orb(vec3 q){
  q.xz=turn(uSpin)*q.xz;q.yz=turn(uRotation)*q.yz;
  float len=length(q);
  vec3 n=abs(q)/max(.0001,len);
  float dotPeak=0.;
  ${nearestSiteGLSL}
  float radi=.78-uShrink;
  float band=clamp(q.y/max(len,.001),-1.,1.);
  float height=uAmp*(.42+.065*band);
  float crownBand=(band-.43)*2.4;
  height*=mix(1.,.22+1.52*exp(-crownBand*crownBand),uCrown);
  float cell=sqrt(max(0.,2.-2.*dotPeak));
  float width=mix(.315,.29,uCrown);
  float profile=pow(max(0.,1.-cell/width),2.25);
  float swell=sin(9.*band+uTime*1.6)*cos(6.*atan(q.z,q.x)+uTime*.3);
  float radius=radi+height*profile+uMandala*.024*swell*uAmp;
  float slope=2.25*height/(max(radi,.4)*width);
  float conservative=(len-radius)*inversesqrt(1.+slope*slope);
  return max(conservative,len-radi-uAmp*.95-.035*uMandala);
}
float pool(vec3 p){
  float r=length(p.xz),a=atan(p.z,p.x);
  float taper=(1.-smoothstep(1.48,1.76,r));
  vec2 xz=turn(.21)*p.xz;
  float d=length(hexCell(xz/.315))*.315;
  float h=uAmp*(.20+.12*(.5+.5*cos(r*5.5-uTime*1.35))+.19*uCrown)*taper;
  float ch=cos(xz.x*9.+uTime*.72)*cos(xz.y*12.)-cos(xz.x*12.)*cos(xz.y*9.-uTime*.72);
  float ringwave=cos(21.*r-2.2*uTime+1.35*sin(6.*a));
  float petal=sin(7.*a+uTime*.23)*sin(r*13.-uTime*1.3);
  float wave=(.007+.010*uAmp)*ringwave+.092*uMandala*(.55*cos(2.8*ch)+.45*petal);
  float crest=h*pow(max(0.,1.-d/.19),2.1)*(1.-.88*uMandala);
  // Bound the local height slope and skip the empty slab above the tallest crest.
  float lipschitz=1.+(.58+.23*uAmp)+2.1*h*(1.-.88*uMandala)/.19+3.8*uMandala;
  float base=max((p.y-(wave*taper+crest))/lipschitz,
    p.y-(.007+.010*uAmp+.092*uMandala+uAmp*(.32+.19*uCrown)*(1.-.88*uMandala)));
  return max(max(base,r-1.787),-.168-p.y);
}
float field(vec3 p){
#if SHAPE == 0
  return orb(p);
#elif SHAPE == 1
  return pool(p);
#else
  vec3 f=vec3(1.,1.+uCrown,1.);return (length(p/f)-uShrink);
#endif
}
vec3 normalAt(vec3 p){
  // Central differences maintain symmetric normals on the folded lattice.
  vec2 e=vec2(.00052,0.);
  return normalize(vec3(field(p+e.xyy)-field(p-e.xyy),field(p+e.yxy)-field(p-e.yxy),field(p+e.yyx)-field(p-e.yyx)));
}
vec3 reflected(vec3 p, vec3 r){
  // Project onto chamber walls/floor before sampling the probe from its actual origin.
  vec3 bounds=mix(vec3(-7.,.57,-7.),vec3(7.,6.,7.),step(vec3(0.),r));
  vec3 tr=(bounds-p)/(r+vec3(1e-7));
  float travel=min(tr.x,min(tr.y,tr.z));vec3 lookup=p+max(travel,.05)*r-vec3(0.,1.97,0.);
  // cube render targets use the same handedness as the world
  return textureLod(uRoom,lookup,1.35).rgb;
}
void main(){
  vec3 ro=cameraPosition-uCenter,rd=normalize(vWorld-cameraPosition);
  vec3 inv=1./(rd+vec3(1.e-9)),t0=(-uBounds-ro)*inv,t1=(uBounds-ro)*inv;
  vec3 mn=min(t0,t1),mx=max(t0,t1);
  float t=max(max(mn.x,mn.y),max(mn.z,0.)),tEnd=min(mx.x,min(mx.y,mx.z));
  bool hit=false;
  for(int i=0;i<210;i++){
    vec3 p=ro+rd*t;float h=field(p);
    if(h<.00032){hit=true;break;}
    t+=max(.00022,h*
#if SHAPE == 1
      .94
#else
      .96
#endif
    );if(t>tEnd+.0008)break;
  }
  if(!hit)discard;
  vec3 p=ro+rd*t,w=p+uCenter,n=normalAt(p),r=reflect(rd,n);
  float fres=pow(1.-max(dot(n,-rd),0.),4.);
  vec3 env=reflected(w,r);
  float phase=dot(n,vec3(.3,.85,.42))*5.+2.8*fres+p.y*1.7;
  vec3 oil=.5+.5*cos(phase+vec3(.0,2.1,4.1));
  vec3 color=(.003+env*(.31+.40*fres))*(vec3(.86,.91,.95)+.16*oil);
  color+=.0035*oil+.003*max(0.,n.y);
#if SHAPE == 1
  // Reflection of the suspended mass in the fluid below the cube probe.
  vec3 d=vec3(0.,uOrbY,0.)-w;float rayT=dot(r,d);
  float b=length(d-r*rayT);float silhouette=1.-smoothstep(.62,.88,b);
  if(rayT>0.)color=mix(color,vec3(.023,.033,.037)+.10*uAccent*pow(b/.9,5.),silhouette*.74);
  color*=.70+.30*smoothstep(.05,1.32,length(p.xz));
#else
  color+=.019*uAccent*fres;
#endif
  vec4 clip=projectionMatrix*viewMatrix*vec4(w,1.);
  gl_FragDepth=clip.z/clip.w*.5+.5;
  frag=vec4(color,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export function makeFluid(scene, room, accent) {
  const all = new T.Group();
  scene.add(all);
  const uniforms = () => ({
    uRoom: { value: room },
    uCenter: { value: new T.Vector3() },
    uBounds: { value: new T.Vector3() },
    uAccent: { value: new T.Color(accent) },
    uAmp: { value: 1 },
    uSpin: { value: 0 },
    uTime: { value: 0 },
    uOrbY: { value: 2 },
    uCrown: { value: 0 },
    uMandala: { value: 0 },
    uRotation: { value: 0 },
    uShrink: { value: 0 },
  });
  function volume(shape, bounds) {
    const u = uniforms();
    u.uBounds.value.copy(bounds);
    const mat = new T.ShaderMaterial({
      glslVersion: T.GLSL3,
      defines: { SHAPE: shape },
      uniforms: u,
      vertexShader,
      fragmentShader,
    });
    const m = new T.Mesh(new T.BoxGeometry(2 * bounds.x, 2 * bounds.y, 2 * bounds.z), mat);
    all.add(m);
    return m;
  }
  const orbMesh = volume(0, new T.Vector3(2.5, 2.5, 2.5));
  const poolMesh = volume(1, new T.Vector3(1.8, 1.1, 1.8));
  const droplets = Array.from({ length: 13 }, () => volume(2, new T.Vector3(0.36, 0.45, 0.36)));
  function pose(m, x, y, z) {
    m.position.set(x, y, z);
    m.material.uniforms.uCenter.value.copy(m.position);
  }
  function update(s) {
    pose(orbMesh, 0, s.y, 0);
    pose(poolMesh, 0, 0.672, 0);
    for (const m of [orbMesh, poolMesh]) {
      const u = m.material.uniforms;
      u.uTime.value = s.t;
      u.uAmp.value = m === orbMesh ? s.amp : s.pool;
      u.uOrbY.value = s.y;
      u.uCrown.value = s.crown;
      u.uMandala.value = s.mandala;
      u.uShrink.value = s.shrink;
      u.uSpin.value = s.spin;
      u.uRotation.value = s.tilt;
      u.uAccent.value.set(s.accent);
    }
    droplets.forEach((m, i) => {
      const a = i * 2.39996 + s.t * (0.23 + 0.045 * (i % 3)),
        r = 1.0 + (i % 4) * 0.14 + s.drops * 0.19;
      const rise = 0.5 + 0.5 * Math.sin(i * 8.45 + s.t * 0.98);
      const size =
        s.sat * (0.034 + 0.018 * (i % 4) + 0.06 * s.drops) * (i < 6 ? 1 : 0.3 + 0.7 * s.drops);
      m.visible = size > 0.016;
      if (!m.visible) return;
      const y = 0.91 + rise * (1.63 + 0.65 * s.drops) + 0.15 * Math.sin(2 * a);
      pose(m, Math.cos(a) * r, y, Math.sin(a) * r);
      const u = m.material.uniforms;
      u.uShrink.value = size;
      u.uCrown.value = 0.12 + 0.28 * rise;
      u.uAccent.value.set(s.accent);
      // Tight proxy volumes keep empty-space marching away from neighboring satellites.
      m.scale.setScalar(size * 4);
      u.uBounds.value.set(0.36, 0.45, 0.36).multiplyScalar(size * 4);
    });
  }
  return { group: all, update };
}
