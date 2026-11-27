import * as T from 'three';
import {V,tau,random,group,mesh,box,cyl,rod,ball,hoop,lathe,curve,polar,batch,canvasTex,sprite} from './workshop.js';

const noiseGL=`
float hash3(vec3 p){p=fract(p*.3183099+vec3(.11,.37,.73));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),
 mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),mix(hash3(i+vec3(0,1,1)),hash3(i+1.),f.x),f.y),f.z);}
float fb(vec3 p){return n3(p)*.52+n3(p*2.07+3.4)*.27+n3(p*4.21-2.3)*.14+n3(p*8.62)*.07;}
`;
const sunY=4.58;
const vertex=`varying vec3 vP,vN,vEye;
void main(){vP=position;vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vEye=-mv.xyz;gl_Position=projectionMatrix*mv;}`;
function sun(scene,M){
  const center=group(scene);center.position.y=sunY;
  const sunMaterial=new T.ShaderMaterial({uniforms:{clock:{value:0},flux:{value:1}},vertexShader:vertex,
    fragmentShader:`uniform float clock,flux;varying vec3 vP,vN,vEye;`+noiseGL+`
    void main(){
      vec3 p=normalize(vP), dr=vec3(clock*.046,-clock*.018,clock*.012);
      vec3 warp=vec3(fb(p*3.4+dr),fb(p*3.4+dr+8.1),fb(p*3.4+dr-5.6));
      float continent=fb(p*4.2+warp*2.7+dr), conv=fb(p*22.+warp*7.-dr*2.);
      float fl=1.-abs(2.*fb(p*9.+warp*8.+dr)-1.);
      float cell=clamp((conv-.23)*1.7,0.,1.);
      float fine=n3(p*162.+2.*warp);
      float heat=smoothstep(.37,.72,continent*.48+conv*.42+fine*.10);
      vec3 col=mix(vec3(.35,.019,.002),vec3(3.55,1.14,.10),heat);
      col+=vec3(1.36,.82,.24)*pow(fl,15.)*(.26+.74*cell);
      float limb=pow(1.-max(0.,dot(normalize(vN),normalize(vEye))),3.);
      col=mix(col,vec3(3.5,1.74,.43),limb*.86);
      gl_FragColor=vec4(col*(.85+.21*flux),1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`});
  const star=mesh(center,new T.SphereGeometry(.91,80,52),sunMaterial);
  const corona=new T.ShaderMaterial({uniforms:{clock:{value:0},flux:{value:1}},
    transparent:true,depthWrite:false,blending:T.AdditiveBlending,
    vertexShader:`varying vec2 p;void main(){p=(uv-.5)*8.;vec4 center=modelViewMatrix*vec4(0.,0.,0.,1.);center.xy+=position.xy;gl_Position=projectionMatrix*center;}`,
    fragmentShader:`uniform float clock,flux;varying vec2 p;
    void main(){float r=length(p),a=atan(p.y,p.x);
    float ray=pow(.5+.5*sin(a*19.+.7*sin(a*5.+clock*.21)+.24*clock),10.);
    float fine=pow(.5+.5*sin(a*57.+1.5*sin(a*13.-clock*.09)),14.);
    float strand=pow(.5+.5*sin(a*7.+r*.8+sin(a*4.-clock*.18)),4.);
    float halo=exp(-max(0.,r-.91)*4.7)*.65+exp(-r*1.13)*(.13+.46*ray+.16*fine+.53*strand);
    halo*=smoothstep(.83,.945,r)*(1.-smoothstep(2.95,3.96,r));
    gl_FragColor=vec4(1.,.51,.14,halo*flux);
    }`});
  const coronaPlane=mesh(center,new T.PlaneGeometry(8,8),corona);coronaPlane.frustumCulled=false;coronaPlane.renderOrder=3;
  const prominences=group(center),flareMaterials=[];
  for(let k=0;k<12;k++){
    const flare=group(prominences), phi=k*2.399,lat=.92*Math.sin(k*2.24);
    const norm=V(Math.cos(phi)*Math.cos(lat),Math.sin(lat),Math.sin(phi)*Math.cos(lat));
    flare.quaternion.setFromUnitVectors(V(0,1,0),norm);
    const height=.04+random()**2*.24, length=.11+random()*.24;
    const m=new T.MeshBasicMaterial({color:new T.Color(1.13,.19,.013),transparent:true,opacity:.76,blending:T.AdditiveBlending,depthWrite:false});
    flareMaterials.push(m);
    for(let j=0;j<4;j++){
      const pts=[];
      for(let i=0;i<=32;i++){
        const u=i/32,a=u*Math.PI;
        pts.push(V(Math.cos(a)*(length+j*.012),.84+Math.sin(a)*(height+.085+j*.014)+.025*Math.sin(a*6.+j*.28+k)*Math.sin(a),.080*Math.sin(a*3+k)*Math.sin(a)+.022*Math.sin(a*8+k)+.009*j));
      }
      curve(flare,pts,j===0?.009:.0045,m,36);
    }
  }
  batch(prominences);
  const rings=[];
  const legend=new T.MeshStandardMaterial({metalness:.46,roughness:.35,side:T.DoubleSide,
    map:canvasTex(2048,86,(c,w,h)=>{
      c.fillStyle='#183e48';c.fillRect(0,0,w,h);c.fillStyle='#e1be79';c.strokeStyle='#deb779';
      c.fillRect(0,3,w,3);c.fillRect(0,h-7,w,3);
      for(let i=0;i<360;i++){let x=i*w/360;c.fillRect(x,6,1.4,i%5===0?13:6);c.fillRect(x,h-12,1.2,6);}
      c.font='23px Georgia';c.textAlign='center';c.textBaseline='middle';
      ['♈  ARIES','♉  TAURUS','♊  GEMINI','♋  CANCER','♌  LEO','♍  VIRGO','♎  LIBRA','♏  SCORPIO','♐  SAGITTARIUS','♑  CAPRICORN','♒  AQUARIUS','♓  PISCES'].forEach((s,k)=>c.fillText(s,(k+.5)*w/12,44));
    })});
  for(const [i,r,tilt,zTilt] of [[0,1.19,1.22,.46],[1,1.37,.61,-.54],[2,1.52,1.41,-.89],[3,1.62,.38,.16]]){
    const turn=group(center),ring=group(turn);ring.rotation.set(tilt,0,zTilt);
    const h=i===1?.148:(i===2?.068:.046);
    mesh(ring,new T.CylinderGeometry(r,r,h,120,1,true),i===1?legend:M.brass);
    for(const s of [-1,1])hoop(ring,0,s*h*.5,0,r,.022,i===1?M.gilt:M.brass);
    if(i===2||i===0)for(let k=0;k<48;k++){
      const a=k*tau/48,pt=polar(r,a);if(k%6===0)ball(ring,pt.x,0,pt.z,.066,M.gilt);
      else if(k%2===0)rod(ring,polar(r-.045,a,.012),polar(r+.026,a,.012),.014,M.copper);
    }
    for(let j=0;j<2;j++){
      const pt=polar(r,j*Math.PI);cyl(ring,pt.x,0,pt.z,.082,.082,.13,M.bronze,16);
      ball(ring,pt.x,.078,pt.z,.052,M.gilt);
    }
    batch(ring);rings.push(turn);
  }
  const light=new T.PointLight(0xffb144,43,23,1.8);light.position.y=sunY;scene.add(light);
  return (t,flux)=>{
    sunMaterial.uniforms.clock.value=t;sunMaterial.uniforms.flux.value=flux;star.rotation.y=t*.045;
    corona.uniforms.clock.value=t;corona.uniforms.flux.value=(.22+flux*.82)*Math.min(1,flux*2);
    prominences.rotation.set(.13,t*.069,-.12);
    flareMaterials.forEach((m,i)=>{m.opacity=Math.min(1,.20+flux*.33+Math.sin(t*1.14+i)*.09)*Math.min(1,flux*2);});
    light.intensity=32+flux*(12+Math.sin(t*1.54)*1.4);
    rings.forEach((g,i)=>g.rotation.y=t*(i%2?-1:1)*(.072+i*.015)+i*.27);
  };
}

function mineral(kind){
  const stone=new T.MeshStandardMaterial({color:0xffffff,roughness:kind==='Mars'?.52:.29,metalness:kind==='Mars'?.24:.32,flatShading:true});
  const patterns={
    Saturn:`float b=fb(p*4.5);float lat=p.y+fb(p*5.+3.)*.041+.032*sin(p.x*12.+b*12.);
      float vein=.5+.5*sin(lat*75.+2.*b);float finer=.5+.5*sin(lat*195.+b*4.);
      vec3 dye=mix(vec3(.185,.042,.006),vec3(.90,.39,.075),smoothstep(-.45,.75,.3+sin(lat*19.+b)*.5+vein*.30));
      dye*=.78+.16*vein+.11*finer;diffuseColor.rgb=dye;`,
    Neptune:`float b=fb(p*4.);float lat=p.y+.12*sin(p.x*5.+b*6.)+.07*fb(p*12.);
      float streak=.5+.5*sin(lat*34.+3.*b);diffuseColor.rgb=mix(vec3(.012,.06,.24),vec3(.085,.46,.79),b*.65+streak*.42);`,
    Mars:`float b=fb(p*4.+fb(p*9.)*1.7);float big=smoothstep(.38,.65,b);diffuseColor.rgb=mix(vec3(.20,.033,.018),vec3(.75,.21,.07),big)*(.72+.42*n3(p*43.));diffuseColor.rgb+=vec3(.25)*smoothstep(.83,.97,abs(p.y));`
  };
  stone.onBeforeCompile=s=>{
    s.vertexShader='varying vec3 vStone;\n'+s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvStone=position;');
    s.fragmentShader='varying vec3 vStone;\n'+noiseGL+s.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\n{vec3 p=normalize(vStone);'+patterns[kind]+'}');
  };stone.customProgramCacheKey=()=>kind;return stone;
}

const specs=[
  {name:'Earth',a:2.56,e:.0167,period:1,phase:2.49,y:4.10,r:.385,slant:.080},
  {name:'Mars',a:3.45,e:.0934,period:1.8808,phase:3.52,y:3.45,r:.305,slant:-.085},
  {name:'Saturn',a:4.44,e:.0565,period:29.457,phase:.14,y:4.02,r:.585,slant:.085},
  {name:'Neptune',a:5.38,e:.0086,period:164.79,phase:3.06,y:3.03,r:.375,slant:.060}
];
// Display radii and clock rate are chosen for the model. Anomalies use real period ratios.
function ellipse(a,e,mean){
  let E=mean%tau;
  for(let j=0;j<6;j++)E-=(E-e*Math.sin(E)-mean%tau)/(1-e*Math.cos(E));
  return [a*(Math.cos(E)-e),a*Math.sqrt(1-e*e)*Math.sin(E)];
}
function ringSystem(body,M,r){
  const band=group(body);band.rotation.set(.24,0,-.34);
  const shader=new T.ShaderMaterial({side:T.DoubleSide,transparent:true,depthWrite:false,
    vertexShader:`varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec3 vPos;void main(){
      float r=length(vPos.xy)/`+r.toFixed(4)+`,u=(r-1.27)/.99;
      float dust=.5+.5*sin(r*171.+2.9*sin(r*56.));float grit=.5+.5*sin(r*516.);
      float gap=smoothstep(.007,.027,abs(r-1.89))*smoothstep(.002,.009,abs(r-2.12));
      float opacity=(.62+.25*dust+.08*grit)*gap*smoothstep(0.,.10,u)*(1.-smoothstep(.95,1.,u));
      vec3 c=mix(vec3(.24,.125,.051),vec3(.81,.56,.30),.32+.4*dust+.19*grit);
      gl_FragColor=vec4(c,opacity);
    }`});
  const ring=mesh(band,new T.RingGeometry(r*1.27,r*2.26,192,6),shader);ring.rotation.x=-Math.PI/2;ring.renderOrder=2;
  const rocks=new T.InstancedMesh(new T.IcosahedronGeometry(1,0),M.ivory,530),d=new T.Object3D();
  for(let i=0;i<rocks.count;i++){
    const a=random()*tau,rad=r*(1.35+random()*.92),s=.002+random()**3*.009;
    d.position.copy(polar(rad,a,(random()-.5)*.028));d.rotation.set(a,rad,i);d.scale.set(s*1.62,s*.74,s);
    d.updateMatrix();rocks.setMatrixAt(i,d.matrix);
  }
  band.add(rocks);return rocks;
}
export function celestial(scene,M,glow){
  const updateSun=sun(scene,M), planets=[],heads={Sun:V(0,sunY,0)}, tracks=group(scene);
  for(const [i,sp] of specs.entries()){
    const height=1.94+i*.17,carrier=group(scene),arm=group(carrier);
    const pts=[V(.19,height,0),V(.61,height-.05,0),V(sp.a*.46,height+.15,0),V(sp.a*.82,height+.30,0),V(sp.a,height+.71,0)];
    curve(arm,pts,.077,M.brass,48);
    curve(arm,[V(.41,height-.048,0),V(sp.a*.45,height-.22,0),V(sp.a*.72,height-.12,0),V(sp.a*.88,height+.025,0),pts[4]],.043,M.copper,44);
    for(let k=0;k<6;k++){
      const u=.32+k*.105;
      rod(arm,V(sp.a*u,height+(.05+.25*u),0),V(sp.a*(u+.05),height-.23+.28*u,0),.019,M.gilt);
    }
    for(const z of [-.078,.078])curve(arm,pts.map(p=>V(p.x,p.y+.038,z)),.015,M.gilt,40);
    cyl(arm,sp.a,height+.60,0,.138,.102,.21,M.brass,20);
    hoop(arm,0,height,0,.46+i*.052,.07,M.gilt);
    batch(arm);
    const head=group(scene),ped=group(head),brace=cyl(scene,0,0,0,.046,.056,1,M.brass,16);
    lathe(ped,0,0,0,[[.09,-sp.r-.31],[.137,-sp.r-.26],[.12,-sp.r-.16],[.077,-sp.r-.11],[.16,-sp.r-.045],[.18,-sp.r+.022]],M.gilt,32);
    cyl(ped,0,sp.r+.026,0,.038,.068,.08,M.brass,16);ball(ped,0,sp.r+.077,0,.036,M.gilt);
    batch(ped);
    let material=sp.name==='Earth'?new T.MeshStandardMaterial({map:M.textures.earth,metalness:.21,roughness:.24,flatShading:true}):mineral(sp.name);
    if(sp.name==='Saturn'){
      const amber=new T.MeshPhysicalMaterial({color:0xffffff,roughness:.26,metalness:.18,clearcoat:.55,clearcoatRoughness:.22,transparent:true,opacity:.96,flatShading:true});
      amber.onBeforeCompile=material.onBeforeCompile;amber.customProgramCacheKey=material.customProgramCacheKey;material=amber;
    }
    const globe=mesh(head,new T.IcosahedronGeometry(sp.r,sp.name==='Mars'?6:9),material);
    let moon,clouds,rocks;
    if(sp.name==='Earth'){
      clouds=mesh(head,new T.SphereGeometry(sp.r*1.012,48,30),new T.MeshStandardMaterial({color:0xfff4d8,alphaMap:M.textures.clouds,transparent:true,opacity:.72,roughness:.6,depthWrite:false}));
      moon=group(head);rod(moon,V(0,-.37,0),V(.665,-.16,0),.018,M.brass);rod(moon,V(.665,-.16,0),V(.665,.18,0),.018,M.brass);
      mesh(moon,new T.IcosahedronGeometry(.116,2),M.steel,.665,.22,0);
      hoop(moon,0,-.16,0,.665,.012,M.gilt);
    }
    if(sp.name==='Saturn')rocks=ringSystem(head,M,sp.r);
    const track=[];
    for(let k=0;k<=144;k++){
      const a=k*tau/144,[x,z]=ellipse(sp.a,sp.e,a);track.push(V(x,height+.032+z*sp.slant*.14,z));
    }curve(tracks,track,.014,i%2?M.bronze:M.gilt,144);
    heads[sp.name]=head.position;planets.push({sp,carrier,arm,brace,head,globe,moon,clouds,rocks,height});
  }
  batch(tracks);
  const ice=group(scene);
  mesh(ice,new T.IcosahedronGeometry(.143,0),new T.MeshPhysicalMaterial({color:0x9fe7ee,metalness:.25,roughness:.18,flatShading:true,clearcoat:1}));
  const icage=hoop(ice,0,0,0,.168,.022,M.gilt,32);icage.rotation.z=.72;
  const dustN=360,dustGeo=new T.BufferGeometry(),positions=new Float32Array(dustN*3),colors=[],particles=[];
  for(let i=0;i<dustN;i++){
    const u=random()**1.6;particles.push([u,random()-.5,random()-.5,random()-.5]);
    colors.push(.32+.37*(1-u),.56+.30*(1-u),.66+.28*(1-u));
  }
  dustGeo.setAttribute('position',new T.BufferAttribute(positions,3));dustGeo.setAttribute('color',new T.Float32BufferAttribute(colors,3));
  const tail=new T.Points(dustGeo,new T.PointsMaterial({size:.037,map:glow,vertexColors:true,transparent:true,opacity:.89,blending:T.AdditiveBlending,depthWrite:false}));
  tail.frustumCulled=false;scene.add(tail);
  function comet(t){
    const [x,z]=ellipse(4.63,.61,t*.154-1.6);
    return V(x*.75-z*.58,4.72+z*.20,x*.58+z*.75);
  }
  return {heads,update(time,mechanism,flux){
    updateSun(mechanism,flux);
    for(const {sp,carrier,arm,brace,head,globe,moon,clouds,rocks,height} of planets){
      const [x,z]=ellipse(sp.a,sp.e,sp.phase+mechanism*.185/sp.period);
      const y=sp.y+z*sp.slant,rad=Math.hypot(x,z);
      carrier.rotation.y=-Math.atan2(z,x);arm.scale.x=rad/sp.a;
      head.position.set(x,y,z);const low=height+.68,hi=y-sp.r-.22;
      brace.position.set(x,(hi+low)/2,z);brace.scale.y=hi-low;globe.rotation.y=.96+mechanism*(sp.name==='Earth'?.31:.17);
      if(moon){moon.rotation.y=-mechanism*.185*13.37-.45;clouds.rotation.y=globe.rotation.y+mechanism*.007;}
      if(rocks)rocks.rotation.y=mechanism*.053;
    }
    ice.position.copy(comet(mechanism));ice.rotation.set(time*.34,mechanism*.74,.28);
    const samples=Array.from({length:34},(_,i)=>comet(mechanism-i*.098));
    particles.forEach(([u,j,k,l],i)=>{
      const f=u*32,lo=Math.floor(f),p=samples[lo].clone().lerp(samples[lo+1],f-lo),spread=.027+u*.29;
      positions.set([p.x+j*spread,p.y+k*spread+.026*Math.sin(time*.7+u*9),p.z+l*spread],i*3);
    });dustGeo.attributes.position.needsUpdate=true;
  }};
}
