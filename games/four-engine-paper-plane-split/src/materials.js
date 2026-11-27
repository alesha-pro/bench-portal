import * as THREE from '../vendor/three/build/three.module.js';
import { sculptures } from './miniatures.js';
import { W, H, colors, cloudLobes, ridge } from './world.js';

const vertex = `varying vec2 uv0;
void main(){uv0=uv; gl_Position=vec4(position.xy,0.,1.);}`;
const noise = `
float hash(vec3 p) {
  p=fract(p*vec3(.1031,.11369,.13787)); p+=dot(p,p.yxz+19.19);
  return fract((p.x+p.y)*p.z);
}
float noise3(vec3 p){
  vec3 a=floor(p),f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(mix(hash(a),hash(a+vec3(1,0,0)),f.x),mix(hash(a+vec3(0,1,0)),hash(a+vec3(1,1,0)),f.x),f.y),
   mix(mix(hash(a+vec3(0,0,1)),hash(a+vec3(1,0,1)),f.x),mix(hash(a+vec3(0,1,1)),hash(a+1.),f.x),f.y),f.z);
}
`;
const cloudShader = `varying vec2 uv0;
uniform vec4 lobes[25]; uniform float depth[25]; uniform float cyber;
${noise}
float cloud(vec3 p){
  float d=10000.;
  for(int i=0;i<25;i++) {
    vec4 l=lobes[i];
    vec3 r=vec3(l.z,l.w,l.z*.79);
    vec3 q=(p-vec3(l.xy,depth[i]))/r;
    float a=(length(q)-1.)*min(r.x,min(r.y,r.z));
    float h=max(5.-abs(d-a),0.)/5.; d=min(d,a)-h*h*1.25;
  }
  return d + (noise3(p*.056)-.5)*2.5+(noise3(p*.18)-.5)*.28;
}
void main(){
  vec2 pos=vec2((uv0.x-.5)*310.,(1.-uv0.y)*164.-109.);
  vec3 p=vec3(pos,69.);
  float d=0.;
  for(int i=0;i<55;i++){ d=cloud(p); if(d<.16 || p.z < -53.)break; p.z-=max(.18,d*.9);}
  if(p.z < -53. || d>.5){gl_FragColor=vec4(0.);return;}
  vec2 e=vec2(.45,0.); vec3 n=normalize(vec3(cloud(p+e.xyy)-cloud(p-e.xyy),cloud(p+e.yxy)-cloud(p-e.yxy),cloud(p+e.yyx)-cloud(p-e.yyx)));
  vec3 light=normalize(vec3(-.75,-.85,.57));
  float diffuse=dot(n,light)*.5+.5; float ao=clamp(cloud(p+light*12.)/12.,0.,1.);
  float rim=pow(1.-max(n.z,0.),2.);
  float grain=hash(p*7.);
  vec3 c;
  if(cyber>.5) {
    c=mix(vec3(.165,.12,.29),vec3(.69,.37,.69),smoothstep(.17,.93,diffuse)*(.69+.31*ao));
    c+=vec3(.34,.18,.24)*pow(diffuse,5.)+vec3(.32,.08,.28)*rim;
    c+=vec3(.075,.13,.20)*max(0.,dot(n,normalize(vec3(1.,.6,.3))));
  }else {
    c=mix(vec3(.48,.44,.46),vec3(1.,.92,.76),smoothstep(.10,.92,diffuse)*(.67+.33*ao));
    c+=vec3(.056,.031,.007)*rim;
  }
  gl_FragColor=vec4(c+(grain-.5)*.018,1.);
}`;
const landShader = `varying vec2 uv0;
uniform sampler2D heights; uniform vec3 lights[5], shades[5]; uniform float cyber;
${noise}
float line(float x,float w){return 1.-smoothstep(w,w+.014,abs(fract(x+.5)-.5));}
void main(){
 vec2 xy=vec2(uv0.x*1600.,(1.-uv0.y)*900.);
 int layer=-1; float yy=0.;float slope=0.;
 for(int i=0;i<5;i++){
  vec2 hs=texture2D(heights,vec2(uv0.x,(float(i)+.5)/5.)).rg;
  if(xy.y>=hs.x){layer=i;yy=xy.y-hs.x;slope=hs.y;}
 }
 if(layer<0){gl_FragColor=vec4(0.);return;}
 float l=float(layer);
 // Intersect an elliptical hillside cross-section along the orthographic view ray.
 float radius=185.+l*47., q=(yy-radius)/radius;
 float z=radius*1.07; float sd=0.;
 for(int j=0;j<50;j++){
  sd=(length(vec2(q,z/radius))-1.)*radius;
  if(sd<.12)break;
  z-=max(.1,sd);
 }
 float soil=noise3(vec3(xy*.018,l)), strata=noise3(vec3(xy.x*.008,xy.y*.07,l));
 float detail=noise3(vec3(xy*.22,1.2));
 vec3 n=normalize(vec3(-slope*q,-q,z/radius)+vec3((soil-.5)*.12,(strata-.5)*.06,0.));
 float sun=clamp(dot(n,normalize(vec3(-.64,.64,.43)))*.73+.32,0.,1.);
 vec3 col=mix(shades[layer],lights[layer],sun*.78+.12);
 if(cyber>.5){
   col*=.73+soil*.18;
   float u=xy.x/(42.+l*3.)+.20*sin(z*.028+l)+sin(xy.x*.008+l)*.28;
   float v=z/(13.+l*1.75)+.35*sin(xy.x*.012+l)+.18*sin(z*.019+xy.x*.008);
   float minor=max(line(u*4.,.012),line(v*3.,.009));
   float major=max(line(u,.012),line(v,.013));
   vec3 grid=mix(vec3(.98,.28,.73),vec3(.16,.91,.93),smoothstep(.6,2.9,l));
   col+=grid*(minor*.105+major*.66+.11*exp(-abs(fract(v+.5)-.5)*16.));
   col+=grid*exp(-yy*(.77-l*.07))*.72;
 } else {
   float landform=sin(xy.x*.015+sin(z*.024)*1.9+l*2.3);
   float fieldMask=smoothstep(-.12,.05,landform);
   col=mix(col*.86,col*1.03,smoothstep(.12,.87,sun));
   col+=vec3(.05,.011,-.032)*fieldMask+(soil-.5)*.076+(strata-.5)*.040;
   col+=(detail-.5)*.044;
 }
 gl_FragColor=vec4(col,1.);
}`;
const srgb = (hex) =>
  new THREE.Vector3(
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  );
export function materialBaker() {
  const gl = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
    preserveDrawingBuffer: true,
    premultipliedAlpha: false,
  });
  gl.setClearColor(0, 0);
  const geometry = new THREE.PlaneGeometry(2, 2),
    scene = new THREE.Scene(),
    cam = new THREE.Camera();
  const mesh = new THREE.Mesh(geometry);
  scene.add(mesh);
  function paint(w, h, shader, uniforms) {
    gl.setSize(w, h, false);
    mesh.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: shader,
      uniforms,
    });
    gl.render(scene, cam);
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    c.getContext('2d').drawImage(gl.domElement, 0, 0);
    mesh.material.dispose();
    return c;
  }
  const data = new Float32Array(W * 5 * 4);
  for (let l = 0; l < 5; l++)
    for (let i = 0; i < W; i++) {
      const o = (l * W + i) * 4;
      data[o] = ridge(l, i + 0.5);
      data[o + 1] = (ridge(l, i + 1) - ridge(l, i - 1)) * 0.5;
    }
  const tex = new THREE.DataTexture(data, W, 5, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return {
    miniature: sculptures(gl),
    land(s, scale) {
      return paint(W * scale, H * scale, landShader, {
        heights: { value: tex },
        lights: { value: colors[s].light.map(srgb) },
        shades: { value: colors[s].shade.map(srgb) },
        cyber: { value: +(s === 2) },
      });
    },
    cloud(s, seed) {
      const lobes = cloudLobes(seed);
      return paint(372, 197, cloudShader, {
        lobes: { value: lobes.map((a) => new THREE.Vector4(...a.slice(0, 4))) },
        depth: { value: lobes.map((a) => a[4]) },
        cyber: { value: +(s === 2) },
      });
    },
    dispose() {
      tex.dispose();
      geometry.dispose();
      gl.dispose();
    },
  };
}
