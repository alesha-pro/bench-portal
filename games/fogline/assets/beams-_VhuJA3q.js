import{g as w,B as v,Z as x,n as m,V as d,p as A,A as f,i as y,m as C,k as b,K as M,as as S,Q as F,a1 as T,at as L,F as p,M as B}from"./index-DxzvcXmo.js";const g=new F,D=new d(0,0,-1);new B;const W=`
attribute vec2 corner;
uniform vec3 uA; uniform vec3 uB; uniform float uWidth;
varying vec2 vC; varying float vAlong;
void main() {
  vec3 p = mix(uA, uB, corner.y);
  vec3 dir = normalize(uB - uA);
  vec3 toCam = normalize(cameraPosition - p);
  vec3 side = cross(dir, toCam);
  float sl = length(side); side = sl > 1e-4 ? side / sl : vec3(1.0, 0.0, 0.0);
  p += side * corner.x * uWidth * 0.5 * (1.0 + corner.y * 1.5);
  vC = corner; vAlong = corner.y * length(uB - uA);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,_=`
uniform vec3 uColor; uniform float uAtmo;
varying vec2 vC; varying float vAlong;
void main() {
  float e = 1.0 - abs(vC.x); e = e * e;
  float fade = exp(-vAlong * 0.018) * smoothstep(0.0, 0.25, vAlong);
  vec3 c = uColor * e * fade * uAtmo;
  gl_FragColor = vec4(c, 1.0);
}`;let r=null;function q(){if(r)return r;const s=64,t=new Uint8Array(s*s*4);for(let e=0;e<s;e++)for(let o=0;o<s;o++){const l=(o+.5)/s*2-1,h=(e+.5)/s*2-1,i=Math.hypot(l,h),u=Math.exp(-i*i*26),a=Math.exp(-i*i*4)*.28,c=Math.min(1,u+a),n=(e*s+o)*4;t[n]=t[n+1]=t[n+2]=255,t[n+3]=c*255}return r=new T(t,s,s),r.colorSpace=L,r.magFilter=p,r.minFilter=p,r.needsUpdate=!0,r}class O{constructor(t){const e=new w;e.setAttribute("position",new v(new Float32Array(12),3)),e.setAttribute("corner",new v(new Float32Array([-1,0,1,0,1,1,-1,1]),2)),e.setIndex([0,1,2,0,2,3]),this.mat=new x({vertexShader:W,fragmentShader:_,transparent:!0,depthWrite:!1,blending:f,side:A,fog:!1,uniforms:{uA:{value:new d},uB:{value:new d},uWidth:{value:.006},uColor:{value:new m(6,.25,.15)},uAtmo:{value:.35}}}),this.mesh=new y(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=40,this.mesh.visible=!1,this.dotMat=new C({map:q(),color:new m(9,.5,.3),blending:f,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1}),this.dot=new b(this.dotMat),this.dot.visible=!1,this.dot.renderOrder=41,t.add(this.mesh),t.add(this.dot),this.scene=t}set(t,e,o,l,h,i,u,a){if(this.mesh.visible=!0,this.mat.uniforms.uA.value.copy(t),this.mat.uniforms.uB.value.copy(e),this.mat.uniforms.uAtmo.value=a,o){const c=e.distanceTo(u);this.dot.visible=!0,this.dot.position.set(e.x+l*.015,e.y+h*.015,e.z+i*.015);const n=Math.max(.035,c*.0075);this.dot.scale.set(n,n,1)}else this.dot.visible=!1}hide(){this.mesh.visible=!1,this.dot.visible=!1}dispose(){this.scene.remove(this.mesh),this.scene.remove(this.dot),this.mesh.geometry.dispose(),this.mat.dispose(),this.dotMat.dispose()}}const z=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,N=`
uniform vec3 uApex; uniform vec3 uDir; uniform float uTan; uniform float uLen;
uniform vec3 uColor; uniform float uDensity; uniform float uTime;
varying vec3 vW;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec3 ro = cameraPosition;
  vec3 rd = normalize(vW - ro);
  float tFar = length(vW - ro);
  // march from the closest of (0, cone entry) → the back-face fragment
  vec3 mid = uApex + uDir * uLen * 0.5;
  vec3 oc = ro - mid;
  float rad = uLen * 0.5 * sqrt(1.0 + 4.0 * uTan * uTan) + 0.5;
  float b = dot(oc, rd), c = dot(oc, oc) - rad * rad;
  float disc = b * b - c;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc);
  float t0 = max(0.0, -b - sq), t1 = min(tFar, -b + sq);
  if (t1 <= t0) discard;
  const int N = 22;
  float dt = (t1 - t0) / float(N);
  float j = hash(gl_FragCoord.xy + fract(uTime) * 91.0);
  float acc = 0.0;
  for (int i = 0; i < N; i++) {
    float t = t0 + (float(i) + j) * dt;
    vec3 p = ro + rd * t;
    vec3 ap = p - uApex;
    float s = dot(ap, uDir);
    if (s <= 0.02 || s >= uLen) continue;
    float r = length(ap - uDir * s);
    float R = s * uTan;
    float radial = 1.0 - smoothstep(0.35, 1.0, r / R);
    float axial = 1.0 / (1.0 + 0.045 * s * s) + 0.06;
    float endFade = 1.0 - smoothstep(uLen * 0.75, uLen, s);
    float near = smoothstep(0.05, 0.6, s);
    acc += radial * radial * axial * endFade * near * dt;
  }
  float ph = 0.55 + 0.45 * max(0.0, dot(rd, -uDir));
  float shimmer = 0.9 + 0.2 * hash(floor(vW.xz * 4.0) + floor(uTime * 12.0));
  vec3 col = uColor * acc * uDensity * ph * shimmer;
  gl_FragColor = vec4(col, 1.0);
}`;class P{constructor(t){const e=new M(1,1,24,1,!1);e.translate(0,-.5,0),e.rotateX(Math.PI/2),this.mat=new x({vertexShader:z,fragmentShader:N,transparent:!0,depthWrite:!1,blending:f,side:S,fog:!1,uniforms:{uApex:{value:new d},uDir:{value:new d(0,0,-1)},uTan:{value:.3},uLen:{value:20},uColor:{value:new m(.8,.9,1)},uDensity:{value:.05},uTime:{value:0}}}),this.mesh=new y(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=39,this.mesh.visible=!1,t.add(this.mesh),this.scene=t}set(t,e,o,l,h,i){this.mesh.visible=!0,this.mesh.position.copy(t),g.setFromUnitVectors(D,e),this.mesh.quaternion.copy(g);const u=o*l*1.08;this.mesh.scale.set(u,u,o);const a=this.mat.uniforms;a.uApex.value.copy(t),a.uDir.value.copy(e),a.uTan.value=l,a.uLen.value=o,a.uDensity.value=h,a.uTime.value=i,this.mesh.updateMatrix(),this.mesh.updateMatrixWorld(!0)}hide(){this.mesh.visible=!1}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}export{O as L,P as a};
