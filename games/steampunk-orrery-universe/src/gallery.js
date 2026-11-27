import * as T from 'three';
import {V,tau,group,mesh,box,cyl,rod,ball,torus,hoop,lathe,curve,polar,canvasTex,random} from './workshop.js';

function cover(w,h,headline,sub){
  return canvasTex(w,h,(c,w,h)=>{
    c.fillStyle='#183235';c.fillRect(0,0,w,h);
    c.strokeStyle='#a98c57';c.lineWidth=h*.025;c.strokeRect(4,4,w-8,h-8);c.strokeRect(9,9,w-18,h-18);
    c.textAlign='center';c.textBaseline='middle';c.fillStyle='#e7ce95';
    c.font=h*.282+'px Georgia';c.fillText(headline,w/2,h*.44);
    c.font=h*.146+'px Georgia';c.fillText(sub,w/2,h*.73);
    for(const x of [18,w-18])for(const y of [18,h-18]){c.beginPath();c.arc(x,y,3,0,tau);c.fill();}
  });
}
function plane(p,map,w,h,x,y,z){
  return mesh(p,new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map,roughness:.48,metalness:.27}),x,y,z);
}
function clockDial(){
  return canvasTex(640,640,(c,w,h)=>{
    c.translate(w/2,h/2);const r=w/2,g=c.createRadialGradient(-75,-94,4,0,0,r);g.addColorStop(0,'#eee3c4');g.addColorStop(1,'#ac9c7c');c.fillStyle=g;c.fillRect(-r,-r,w,h);
    c.strokeStyle='#4c4438';c.fillStyle='#242a2b';c.textAlign='center';c.textBaseline='middle';
    for(const rad of [305,296,262,198,184]){c.beginPath();c.arc(0,0,rad,0,tau);c.lineWidth=rad===296?4:1.6;c.stroke();}
    for(let i=0;i<60;i++){c.save();c.rotate(i*tau/60);c.fillRect(-1.8,-296,3.6,i%5===0?27:13);c.restore();}
    c.font='48px Georgia';
    for(let i=0;i<12;i++){const a=i*tau/12;c.fillText(['XII','I','II','III','IIII','V','VI','VII','VIII','IX','X','XI'][i],227*Math.sin(a),-227*Math.cos(a));}
    c.font='24px Georgia';c.fillText('REGULATOR',0,-103);c.font='italic 16px Georgia';c.fillText('Sidereal Time',0,91);
    c.fillStyle='#263035';
    for(const [a,l] of [[-.92,173],[1.07,245]]){
      c.save();c.rotate(a);c.beginPath();c.moveTo(-7,45);c.lineTo(-7,-42);c.lineTo(-12,-l*.67);c.lineTo(0,-l);c.lineTo(12,-l*.67);c.lineTo(7,-42);c.lineTo(6,45);c.closePath();c.fill();c.restore();
    }
    c.beginPath();c.arc(0,0,14,0,tau);c.fill();
  });
}
export function gallery(p,M){
  const skyDial=canvasTex(512,256,(c,w,h)=>{
    const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#285269');g.addColorStop(.6,'#193843');g.addColorStop(1,'#102b35');
    c.fillStyle=g;c.fillRect(0,0,w,h);
    for(let i=0;i<260;i++){const x=random()*w,y=random()*h,r=random()**3*1.9+.35;c.fillStyle=i%3?'#c3b687':'#b4d0cb';c.beginPath();c.arc(x,y,r,0,tau);c.fill();}
    c.strokeStyle='#849287';c.lineWidth=1;
    for(let i=0;i<15;i++){c.beginPath();let x=random()*w,y=random()*h;c.moveTo(x,y);for(let j=0;j<4;j++){x+=random()*45-19;y+=random()*39-15;c.lineTo(x,y);}c.stroke();}
  });
  const blueglass=new T.MeshStandardMaterial({map:skyDial,emissiveMap:skyDial,emissive:0x647e86,emissiveIntensity:.43,metalness:.31,roughness:.32});
  const labels=['ASTRONOMIA','MECHANICA','COSMOGRAPHIA','OPTICA'];
  const tags=labels.map((s,i)=>cover(384,84,s,'COLLECTIO   '+['I','II','III','IV'][i]));
  for(let i=0;i<16;i++){
    const a=i*tau/16,b=group(p);b.position.copy(polar(14.4,a));b.rotation.y=-a-Math.PI/2;
    const inset=mesh(b,new T.CircleGeometry(1.99,64,0,Math.PI),blueglass,0,3.53,.22);inset.scale.y=.94;
    plane(b,tags[i%4],1.10,.265,0,3.67,.57);
    for(const sx of [-1,1]){
      const volute=[];
      for(let j=0;j<=36;j++){const t=j/36,an=t*tau*1.38;volute.push(V(sx*(2.43+.20*Math.cos(an)*(1-t*.8)),5.22+.17*Math.sin(an)*(1-t*.8),.64));}
      curve(b,volute,.031,M.gilt,36);
    }
  }
  // The regulator anchors the gallery opposite the entrance.
  const c=group(p),ang=-1.61;c.position.copy(polar(13.02,ang));c.rotation.y=-ang-Math.PI/2;
  box(c,0,2.86,0,2.32,5.57,.61,M.wood);
  for(const x of [-1.06,1.06]){
    lathe(c,x,0,.39,[[.16,.18],[.20,.39],[.13,.58],[.11,3.68],[.17,3.82],[.15,5.16],[.23,5.32]],M.brass,18);
  }
  box(c,0,2.24,.35,1.65,2.79,.09,M.navy);
  for(const x of [-.68,-.32]){rod(c,V(x,1.52,.46),V(x,3.62,.46),.014,M.gilt);cyl(c,x,1.57,.48,.11,.11,.44,M.brass);}
  rod(c,V(.12,1.22,.47),V(.12,3.82,.47),.042,M.gilt);
  const bob=ball(c,.12,1.22,.48,.41,M.brass);bob.scale.z=.15;
  for(const [y,w] of [[.19,2.60],[.36,2.5],[.51,2.36],[3.69,2.36],[5.47,2.57],[5.62,2.7]]){
    box(c,0,y,.08,w,.13,.91,M.wood);box(c,0,y+.067,.48,w,.033,.08,M.gilt);
  }
  mesh(c,new T.CircleGeometry(.89,72),new T.MeshStandardMaterial({map:clockDial(),roughness:.48}),0,4.60,.46);
  torus(c,0,4.60,.46,.92,.072,M.brass);torus(c,0,4.60,.53,.866,.021,M.gilt);
  for(const x of [-.93,.93]){cyl(c,x,5.84,.01,.07,.126,.32,M.brass);ball(c,x,6.05,.01,.112,M.gilt);}
  const arch=[];for(let i=0;i<=40;i++){const a=i*Math.PI/40;arch.push(V(1.11*Math.cos(a),5.66+.48*Math.sin(a),.37));}curve(c,arch,.081,M.wood,40);
  // Opening staircase for access to the dome bearings and shutter walk.
  const st=group(p);st.position.set(-9.45,0,-6.85);
  const stairR=1.17;
  cyl(st,0,2.86,0,.09,.15,5.72,M.iron,18);
  const rail=[];
  for(let i=0;i<30;i++){
    const a=-1.15+i*.258,y=.21+i*.173,rad=polar(stairR*.55,a,y);
    const tread=box(st,rad.x,y,rad.z,stairR*1.10,.083,.37,M.wood);tread.rotation.y=-a;
    const end=polar(stairR,a,y);
    rod(st,V(end.x,y,end.z),V(end.x,y+.72,end.z),.021,M.brass);
    rail.push(V(end.x,y+.73,end.z));
  }
  curve(st,rail,.043,M.brass,110);
  const walk=group(p);walk.position.set(-10.98,5.22,-6.47);walk.rotation.y=-.56;
  box(walk,0,0,0,3.12,.15,1.43,M.wood);
  for(let i=0;i<9;i++)rod(walk,V(-1.5+i*.375,0,-.66),V(-1.5+i*.375,.72,-.66),.025,M.brass);
  rod(walk,V(-1.55,.73,-.66),V(1.55,.73,-.66),.045,M.brass);
  // Maker's plate inset into the plinth between the forward regulators.
  const plate=group(p);plate.position.copy(polar(4.85,1.19,.92));plate.rotation.y=Math.PI/2-1.19;
  box(plate,0,0,.005,1.62,.42,.16,M.bronze);
  plane(plate,cover(640,174,'MACHINA  COELESTIS','LONDINI    •    MDCCCLXXIV'),1.57,.39,0,0,.091);
}
