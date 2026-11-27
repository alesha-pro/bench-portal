import * as T from "three";
import { reflectWorkshop } from "./mirror.js";
import { triangle, halfHeight, waterRadius, indexOf } from "./optics.js";
const surfaces = [];
const uniforms = {
  backplate: { value: null },
  panorama: { value: null },
  pixelSize: { value: new T.Vector2(1, 1) },
};
const vertex = `varying vec3 wp,wn,lp;
void main(){lp=position;wp=(modelMatrix*vec4(position,1.)).xyz;wn=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`;
const fragment = `
uniform sampler2D backplate,panorama;uniform vec2 pixelSize;uniform int kind;
uniform mat4 modelMatrix,projectionMatrix,worldToLocal;
uniform vec4 faces[5]; uniform vec3 indices, waterIndex;
varying vec3 wp,wn,lp;
vec3 environment(vec3 d){vec2 uv=vec2(atan(d.z,d.x)*.15915494+.5,asin(clamp(d.y,-1.,1.))*.31831+.5);return texture2D(panorama,uv).rgb;}
vec3 sceneRay(vec3 p,vec3 d){
 float t=16.;
 if(d.y<-.005){float s=-p.y/d.y;vec3 q=p+d*s;if(s>0. && abs(q.x)<6.55 && abs(q.z)<4.14)t=min(t,s);}
 if(d.z<-.005)t=min(t,max(.01,(-5.6-p.z)/d.z));
 if(d.x>.005)t=min(t,max(.01,(8.3-p.x)/d.x));if(d.x<-.005)t=min(t,max(.01,(-8.1-p.x)/d.x));
 vec4 clip=projectionMatrix*viewMatrix*vec4(p+d*t,1.);vec2 uv=clip.xy/max(.001,clip.w)*.5+.5;
 vec2 edge=min(uv,1.-uv);float blend=smoothstep(-.015,.07,min(edge.x,edge.y))*step(0.,clip.w);
 return mix(environment(d)*.24,texture2D(backplate,clamp(uv,.001,.999)).rgb,blend);
}
float leave(vec3 p,vec3 d,out vec3 norm){
 float t=100.;norm=vec3(0.,1.,0.);
 if(kind==0){
  for(int i=0;i<5;i++){vec3 n=faces[i].xyz;float den=dot(n,d);if(den>.00001){float q=(faces[i].w-dot(p,n))/den;if(q>.0003 && q<t){norm=n;t=q;}}}
 }else if(kind==1){float q=dot(p,d);t=-q+sqrt(max(0.,q*q+1.-dot(p,p)));norm=normalize(p+d*t);}
 else{
  for(int i=0;i<2;i++){vec3 center=vec3(0.,0.,i==0?2.313092:-2.313092);vec3 v=p-center;float q=dot(v,d);float discr=q*q-dot(v,v)+6.3504;
   if(discr>0.){float s=-q+sqrt(discr);if(s>.0003 && s<t){t=s;norm=normalize(p+s*d-center);}}}
 }
 return t;
}
float fresnel(float eta,float ci){float r=(eta-1.)/(eta+1.);return r*r+(1.-r*r)*pow(1.-clamp(ci,0.,1.),5.);}
vec3 transmit(float ior,float water,vec3 incident,vec3 normal){
 vec3 d=normalize(mat3(worldToLocal)*refract(incident,normal,1./ior)),p=lp+d*.0006;
 float throughput=1.;vec3 ghost=vec3(0.);bool wet=false;
 for(int i=0;i<6;i++){
  vec3 n;float dist=leave(p,d,n);bool inner=false;
  if(kind==1){
   float q=dot(p,d),disc=q*q-dot(p,p)+${waterRadius ** 2};
   if(disc>0.){float root=sqrt(disc),t=wet?-q+root:-q-root;
    if(t>.0001 && t<dist){inner=true;dist=t;n=normalize(p+t*d);}}
  }
  if(dist>20.)break;
  p+=dist*d;if(dot(n,d)>0.)n=-n;
  float eta=inner?(wet?water/ior:ior/water):ior;
  vec3 outRay=refract(d,n,eta);
  if(dot(outRay,outRay)<.01){d=reflect(d,n);p+=d*.0006;continue;}
  float R=fresnel(eta,-dot(n,d));
  if(!inner){
   vec3 back=reflect(d,n),n2;float db=leave(p+back*.0006,back,n2);
   vec3 r2=refract(back,-n2,ior);vec3 world=(modelMatrix*vec4(p,1.)).xyz;
   if(dot(r2,r2)>.01 && db<20.)ghost+=throughput*R*sceneRay((modelMatrix*vec4(p+back*db,1.)).xyz,normalize(mat3(modelMatrix)*r2));
   return ghost+throughput*(1.-R)*sceneRay(world,normalize(mat3(modelMatrix)*outRay));
  }
  ghost+=throughput*R*environment(normalize(mat3(modelMatrix)*reflect(d,n)))*.22;
  throughput*=1.-R;d=outRay;p+=d*.0006;wet=!wet;
 }
 return ghost+throughput*environment(normalize(mat3(modelMatrix)*d))*.23;
}
void main(){vec3 n=normalize(wn),rd=normalize(wp-cameraPosition);if(dot(n,rd)>0.)n=-n;
 float cosi=clamp(-dot(rd,n),0.,1.),fr=fresnel(indices.g,cosi);
 vec3 trans=vec3(transmit(indices.r,waterIndex.r,rd,n).r,transmit(indices.g,waterIndex.g,rd,n).g,transmit(indices.b,waterIndex.b,rd,n).b);
 vec3 behind=texture2D(backplate,gl_FragCoord.xy/pixelSize).rgb;
 vec3 reflection=reflect(rd,n);
 vec3 reflected=mix(sceneRay(wp,reflection),environment(reflection)*.35,.50);
 vec3 result=mix(mix(trans,behind,.10)*vec3(.84,.96,.99),reflected,fr*.85);
 float lightCard=pow(max(0.,dot(reflection,normalize(vec3(-.65,.46,.60)))),55.);
 float rim=pow(1.-cosi,3.);
 result+=vec3(.032,.078,.088)*(.25+rim)+vec3(.78,.91,1.)*(lightCard*.78+rim*.095);
 gl_FragColor=vec4(result,1.);
}`;
const faces = [
  new T.Vector4(0, -1, 0, halfHeight),
  new T.Vector4(0, 1, 0, halfHeight),
];
for (let i = 0; i < 3; i++) {
  const a = triangle[i],
    b = triangle[(i + 1) % 3],
    n = new T.Vector2(a[1] - b[1], b[0] - a[0]).normalize();
  if (n.x * a[0] + n.y * a[1] < 0) n.negate();
  faces.push(new T.Vector4(n.x, 0, n.y, n.x * a[0] + n.y * a[1]));
}
export function crystalMaterial(o) {
  const mat = new T.ShaderMaterial({
    uniforms: {
      ...uniforms,
      indices: { value: new T.Vector3() },
      waterIndex: { value: new T.Vector3() },
      kind: { value: o.kind === "prism" ? 0 : o.kind === "sphere" ? 1 : 2 },
      faces: { value: faces },
      worldToLocal: { value: new T.Matrix4() },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    depthWrite: false,
  });
  o.glassMat = mat;
  return mat;
}
export function updateGlass(o, spread) {
  const u = o.glassMat.uniforms,
    material = o.id === "flint" ? "flint" : "crown";
  for (const [i, nm] of [643, 537, 444].entries()) {
    u.indices.value.setComponent(i, indexOf(material, nm, spread));
    u.waterIndex.value.setComponent(i, indexOf("water", nm, spread));
  }
  u.worldToLocal.value.copy(o.inverse);
}
export function registerGlass(obj) {
  surfaces.push(obj);
  obj.renderOrder = 3;
  obj.castShadow = false;
  return obj;
}
export function glassPass(renderer, scene, camera, hdr) {
  const rt = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    depthBuffer: true,
  });
  uniforms.panorama.value = hdr;
  uniforms.backplate.value = rt.texture;
  return {
    size(w, h) {
      rt.setSize(Math.round(w * 0.75), Math.round(h * 0.75));
      uniforms.pixelSize.value.set(w, h);
    },
    capture() {
      surfaces.forEach((o) => (o.visible = false));
      reflectWorkshop(renderer, scene, camera);
      renderer.setRenderTarget(rt);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      surfaces.forEach((o) => (o.visible = true));
    },
  };
}
