import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const tau = 2*Math.PI, V = (x=0,y=0,z=0)=>new T.Vector3(x,y,z);
let seed=1874;
export function random(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
export const group=(parent)=>{const g=new T.Group();parent?.add(g);return g;};
export function mesh(parent,geometry,material,x=0,y=0,z=0){
  const m=new T.Mesh(geometry,material);m.position.set(x,y,z);parent.add(m);return m;
}
const boxG=new T.BoxGeometry(), ballG=new T.SphereGeometry(1,20,14);
const geoCache=new Map();
function cached(key,fn){if(!geoCache.has(key))geoCache.set(key,fn());return geoCache.get(key);}
export function box(p,x,y,z,w,h,d,m){const o=mesh(p,boxG,m,x,y,z);o.scale.set(w,h,d);return o;}
export function ball(p,x,y,z,r,m){const o=mesh(p,ballG,m,x,y,z);o.scale.setScalar(r);return o;}
export function cyl(p,x,y,z,top,bot,h,m,n=48){
  const ratio=bot?top/bot:0, radius=bot||top;
  const geo=cached('c'+[ratio,n,!!bot],()=>new T.CylinderGeometry(bot?ratio:1,bot?1:0,1,n));
  const o=mesh(p,geo,m,x,y,z);o.scale.set(radius,h,radius);return o;
}
export function torus(p,x,y,z,r,t,m,seg=80){
  const g=cached('t'+[r,t,seg],()=>new T.TorusGeometry(r,t,8,seg));
  return mesh(p,g,m,x,y,z);
}
export function hoop(p,x,y,z,r,t,m,seg=96){
  const o=torus(p,x,y,z,r,t,m,seg);o.rotation.x=-Math.PI/2;return o;
}
export function rod(p,a,b,r,m,r2=r,n=12){
  const delta=b.clone().sub(a), mid=a.clone().lerp(b,.5);
  const o=cyl(p,mid.x,mid.y,mid.z,r2,r,delta.length(),m,n);
  o.quaternion.setFromUnitVectors(V(0,1,0),delta.normalize());return o;
}
export function curve(p,points,r,m,segments=32){
  return mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(points),segments,r,7,false),m);
}
export function lathe(p,x,y,z,profile,m,n=72){
  return mesh(p,new T.LatheGeometry(profile.map(([r,h])=>new T.Vector2(r,h)),n),m,x,y,z);
}
export function annulus(p,x,y,z,inner,outer,m,segments=160){
  const o=mesh(p,new T.RingGeometry(inner,outer,segments),m,x,y,z);o.rotation.x=-Math.PI/2;return o;
}
export function polar(r,a,y=0){return V(r*Math.cos(a),y,r*Math.sin(a));}
export function canvasTex(w,h,draw){
  const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);
  const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=4;return t;
}
export async function materials(){
  const names=['walnut','toolmarks','binding','copper','calendar','galaxy','earth','clouds'];
  const loader=new T.TextureLoader(), textures={};
  await Promise.all(names.map(async n=>{
    const t=await loader.loadAsync('assets/'+n+'.jpg');t.anisotropy=4;
    if(n!=='toolmarks'&&n!=='clouds')t.colorSpace=T.SRGBColorSpace;
    t.wrapS=T.RepeatWrapping;t.wrapT=T.RepeatWrapping;textures[n]=t;
  }));
  const M={textures};const mat=(c,metal,rough,opts={})=>new T.MeshStandardMaterial({color:c,metalness:metal,roughness:rough,...opts});
  for(const [name,color,metal,rough] of [
    ['brass',0xb08a49,.83,.39],['gilt',0xf3c77b,.84,.31],['bronze',0x765137,.78,.47],
    ['copper',0xb37351,.78,.4],['steel',0x8a9ba1,.83,.38],['blue',0x19454e,.56,.35],
    ['navy',0x122936,.49,.38],['iron',0x273439,.74,.53],['black',0x171b1b,.55,.56],
    ['ivory',0xcab786,.32,.52],['patina',0x417971,.65,.52]
  ]) M[name]=mat(color,metal,rough,{roughnessMap:textures.toolmarks});
  M.wood=mat(0xb7a18b,.16,.48,{map:textures.walnut});
  M.panel=mat(0xd3c1a1,.61,.52,{map:textures.copper,side:T.DoubleSide});
  M.glass=new T.MeshPhysicalMaterial({color:0x7ea5a2,metalness:.33,roughness:.12,transparent:true,opacity:.11,depthWrite:false,side:T.DoubleSide});
  M.paper=mat(0xccaa72,0,.87);
  M.books=[0x722f28,0x385851,0x79432d,0x2c3a43,0x8b6543,0x482c29].map(c=>mat(c,.13,.52,{map:textures.binding}));
  M.lamp=new T.MeshBasicMaterial({color:new T.Color(2.6,1.35,.47)});
  // Baked lamplight follows the sixteen wall sconces in world space, including instanced books.
  for(const finish of [M.wood,M.black,...M.books]){
    finish.onBeforeCompile=s=>{
      s.vertexShader='varying vec3 vRoomPos;\n'+s.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
      vec4 localRoomPos=vec4(transformed,1.);
      #ifdef USE_INSTANCING
        localRoomPos=instanceMatrix*localRoomPos;
      #endif
      vRoomPos=(modelMatrix*localRoomPos).xyz;`);
      s.fragmentShader='varying vec3 vRoomPos;\n'+s.fragmentShader.replace('#include <opaque_fragment>',`float rr=length(vRoomPos.xz);
      float az=atan(vRoomPos.z,vRoomPos.x);
      float lane=atan(sin(az*16.-2.73),cos(az*16.-2.73))*rr/16.;
      float dy=vRoomPos.y-4.18;float lampDist=lane*lane+dy*dy;
      float lampGlow=smoothstep(10.5,13.3,rr)/(1.+1.05*lampDist);
      outgoingLight+=diffuseColor.rgb*(vec3(2.9,1.48,.55)*lampGlow+vec3(.14,.18,.22)*smoothstep(11.,14.,rr));
      #include <opaque_fragment>`);
    };
  }
  return M;
}
// Preserve a single transform for each independently moving assembly.
export function batch(root){
  root.updateWorldMatrix(true,true);
  const inv=root.matrixWorld.clone().invert(),buckets=new Map(), loose=new Map();
  root.traverse(o=>{
    if(!o.isMesh)return;
    const matrix=new T.Matrix4().multiplyMatrices(inv,o.matrixWorld);
    const key=o.geometry.uuid+o.material.uuid;
    if(!buckets.has(key))buckets.set(key,{geometry:o.geometry,material:o.material,matrices:[]});
    buckets.get(key).matrices.push(matrix);
  });
  root.clear();
  for(const {geometry,material,matrices} of buckets.values()){
    if(matrices.length>=4){
      const i=new T.InstancedMesh(geometry,material,matrices.length);
      matrices.forEach((m,k)=>i.setMatrixAt(k,m));root.add(i);
    }else{
      if(!loose.has(material))loose.set(material,[]);
      for(const m of matrices){
        const g=geometry.index?geometry.toNonIndexed():geometry.clone();
        g.applyMatrix4(m);loose.get(material).push(g);
      }
    }
  }
  for(const [mat,geos] of loose){
    const g=mergeGeometries(geos);root.add(new T.Mesh(g,mat));
    geos.forEach(x=>x.dispose());
  }
  return root;
}
export function studio(renderer,scene){
  const w=400,h=200,data=new Float32Array(w*h*4);
  const strips=[[.06,.37,.023,.18,4.4,3.2,1.9],[.21,.28,.105,.045,2.1,2.8,3.5],[.44,.40,.032,.17,4.1,2.8,1.5],[.61,.27,.08,.055,2.5,3.4,4.3],[.76,.49,.04,.09,2.9,1.8,.91],[.92,.34,.04,.14,2.4,2.8,3.1]];
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const u=x/w,v=y/h,j=4*(y*w+x);let c=v<.48?[.19,.23,.29]:[.115,.078,.049];
    for(const [cx,cy,sx,sy,r,g,b] of strips){
      const dx=Math.min(Math.abs(u-cx),1-Math.abs(u-cx))/sx,dy=(v-cy)/sy;
      const q=Math.exp(-(dx**4)-(dy**4));c=[c[0]+r*q,c[1]+g*q,c[2]+b*q];
    }
    data.set([...c,1],j);
  }
  const src=new T.DataTexture(data,w,h,T.RGBAFormat,T.FloatType);src.flipY=true;
  src.mapping=T.EquirectangularReflectionMapping;src.needsUpdate=true;
  const pm=new T.PMREMGenerator(renderer);const env=pm.fromEquirectangular(src);
  scene.environment=env.texture;scene.environmentIntensity=.54;src.dispose();pm.dispose();
}
export function glowMap(){
  return canvasTex(128,128,(c,w,h)=>{
    const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);
    for(const [k,a] of [[0,1],[.055,.87],[.15,.45],[.32,.18],[.65,.048],[1,0]])g.addColorStop(k,'rgba(255,255,255,'+a+')');
    c.fillStyle=g;c.fillRect(0,0,w,h);
  });
}
export function sprite(p,tex,color,size,x,y,z,opacity=1){
  const o=new T.Sprite(new T.SpriteMaterial({map:tex,color,transparent:true,opacity,blending:T.AdditiveBlending,depthWrite:false}));
  o.scale.setScalar(size);o.position.set(x,y,z);p.add(o);return o;
}
