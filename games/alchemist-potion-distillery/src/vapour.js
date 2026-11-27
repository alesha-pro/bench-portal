import * as T from 'three';
import { world, phase, obj } from './workshop.js';

// Integrate two twisting filaments through the retort headspace. Working in
// the ellipsoid's local coordinates keeps the wisps inside the curved glass.
export function headspace(x, y, z, rx, ry, rz) {
  const material = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { t: phase },
    vertexShader: `varying vec3 p,eye;
 void main(){p=position;eye=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;
 gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `varying vec3 p,eye;uniform float t;
 void main(){
   vec3 dir=normalize(p-eye);
   float lengthInside=max(.0,-2.*dot(p,dir)),density=0.;
   for(int i=0;i<14;i++){
     vec3 q=p+dir*(float(i)+.5)*lengthInside/14.;
     float y=q.y,turn=y*5.-t*1.12;
     vec2 drift=vec2(sin(turn+1.6*sin(y*3.1+t*.36)),cos(turn+y*.6))*(.24+.13*(1.-y));
     vec2 d=q.xz-drift;
     float fog=exp(-19.*dot(d,d))*(.43+.57*sin(y*8.+q.z*8.-t*1.85)*sin(y*3.+t*.64));
     vec2 e=q.xz+drift*vec2(1.,-.72);
     fog+=.47*exp(-29.*dot(e,e));
     density+=fog*max(0.,1.-dot(q,q))*(1.-smoothstep(.25,1.,y));
   }
   gl_FragColor=vec4(.45,.72,.59,clamp(.082*density*lengthInside,0.,.32));
 }`,
  });
  const o = obj(new T.SphereGeometry(1, 32, 22), material, x, y, z, world);
  o.scale.set(rx, ry, rz);
  o.renderOrder = 3;
}
