import * as T from 'three';
import {gallery} from './gallery.js';
import {V,tau,random,mesh,group,box,cyl,rod,ball,torus,hoop,lathe,curve,polar,batch,canvasTex,sprite} from './workshop.js';

function chartTexture(){
  return canvasTex(768,480,(c,w,h)=>{
    c.fillStyle='#bea577';c.fillRect(0,0,w,h);c.strokeStyle='#755936';c.fillStyle='#4a4235';
    for(let i=0;i<5000;i++){c.globalAlpha=random()*.09;c.fillRect(random()*w,random()*h,random()*16+1,1);}
    c.globalAlpha=1;c.lineWidth=3;c.strokeRect(14,14,w-28,h-28);c.lineWidth=1;c.strokeRect(19,19,w-38,h-38);
    c.font='28px Georgia';c.textAlign='center';c.fillText('ATLAS   COELESTIS',w/2,56);
    c.font='11px serif';c.fillText('TABULA  VII.     •     HEMISPHÆRIUM  BOREALE',w/2,77);
    for(const x of [212,556]){
      c.save();c.translate(x,261);
      for(let r of [140,143,147,153]){c.beginPath();c.arc(0,0,r,0,tau);c.stroke();}
      for(let i=0;i<12;i++){
        c.save();c.rotate(i*tau/12);
        c.beginPath();c.ellipse(0,0,140,47,0,0,tau);c.stroke();c.restore();
      }
      for(let i=0;i<17;i++){
        c.beginPath();let a=random()*tau,r=random()*112,px=Math.cos(a)*r,py=Math.sin(a)*r;c.moveTo(px,py);
        for(let k=0;k<4;k++){px+=random()*18-9;py+=random()*25-12;c.lineTo(px,py);c.fillRect(px-1,py-1,2.5,2.5);}c.stroke();
      }
      c.restore();
    }
    c.font='italic 14px Georgia';c.fillText('Londini   •   ex officina instrumentorum astronomicorum',w/2,448);
  });
}

function roomFloor(p,M){
  const map=canvasTex(1024,1024,(c,w,h)=>{
    c.fillStyle='#271f1b';c.fillRect(0,0,w,h);
    for(let y=-1;y<12;y++)for(let x=-1;x<7;x++){
      const l=x*182+(y%2)*91,t=y*94,g=Math.floor(random()*14);
      c.fillStyle='rgb('+[76+g,54+g,43+g].join(',')+')';c.fillRect(l+2,t+2,179,91);
      c.strokeStyle='#513e32';c.strokeRect(l+5,t+5,173,85);
      for(let j=0;j<30;j++){
        c.fillStyle='rgba(190,149,108,.08)';c.fillRect(l+5+random()*124,t+6+random()*80,8+random()*43,1);
      }
    }
  });
  map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(6,6);
  const ground=mesh(p,new T.PlaneGeometry(36,36),new T.MeshStandardMaterial({map,roughness:.59,metalness:.15}),0,-.055,0);ground.rotation.x=-Math.PI/2;
  cyl(p,0,-.026,0,8.35,8.43,.09,M.bronze,160);
  const dial=mesh(p,new T.CircleGeometry(8.31,180),new T.MeshStandardMaterial({map:M.textures.calendar,roughness:.47,metalness:.39}),0,.026,0);
  dial.rotation.x=-Math.PI/2;
  for(const r of [8.32,8.42,11.65,11.74,13.74])hoop(p,0,.006,0,r,.028,M.brass,160);
  for(let i=0;i<48;i++){
    const a=i*tau/48;rod(p,polar(8.45,a,.002),polar(13.7,a,.002),.013,M.bronze);
    if(i%4===0)for(let n=0;n<4;n++){
      const pt=polar(8.75+n*.86,a,.015);const f=box(p,pt.x,.009,pt.z,.16,.023,.16,M.brass);
      f.rotation.y=Math.PI/4-a;
    }
  }
}

function library(p,M,glows,glow){
  const bays=16,R=14.4,sw=5.43,colors=M.books;
  const archPoints=(r,cy,z)=>Array.from({length:33},(_,i)=>V(r*Math.cos(i*Math.PI/32),cy+r*Math.sin(i*Math.PI/32),z));
  for(let i=0;i<bays;i++){
    const a=i*tau/bays,bay=group(p);bay.position.copy(polar(R,a));bay.rotation.y=-a-Math.PI/2;
    box(bay,0,3.02,-.22,5.83,6.2,.42,M.wood);
    box(bay,0,2.46,.025,4.72,4.22,.1,M.black);
    for(const y of [.19,.43,3.72,5.76,5.95]){
      box(bay,0,y,.18,sw,.13,.42,M.wood);
      box(bay,0,y+.07,.38,sw,.032,.05,M.brass);
    }
    for(const sx of [-1,1]){
      const x=sx*2.49;
      box(bay,x,2.85,.27,.36,5.6,.42,M.bronze);
      for(let k=0;k<3;k++)cyl(bay,x+(k-1)*.085,2.88,.52,.029,.029,4.78,M.brass,8);
      for(let k=0;k<4;k++)box(bay,x,.42+k*.10,.32,.53-k*.055,.10,.62-k*.05,M.wood);
      for(let k=0;k<3;k++)box(bay,x,5.35+k*.105,.32,.39+k*.09,.11,.57+k*.07,M.gilt);
    }
    // Recessed mahogany cases, with ribbed leather bindings of unequal height.
    for(let j=0;j<4;j++){
      const y=.62+j*.77;
      box(bay,0,y,.28,4.55,.10,.53,M.wood);box(bay,0,y+.035,.56,4.57,.055,.045,M.brass);
      let x=-2.16;
      while(x<2.05){
        const w=.11+random()*.17,h=.44+random()*.24;
        if(random()<.06){x+=.12;continue;}
        const b=box(bay,x+w/2,y+.05+h/2,.28,w,h,.39+random()*.09,colors[Math.floor(random()*colors.length)]);
        b.rotation.z=(random()-.5)*.065;x+=w+.018;
      }
    }
    for(let k=0;k<3;k++){
      const pts=archPoints(2.29-k*.09,3.32,.38+k*.03);
      curve(bay,pts,k===0?.084:.032,k===1?M.gilt:M.bronze,48);
    }
    // A radial fanlight sits above each shelf.
    const fan=group(bay);fan.position.set(0,3.61,.24);
    for(let k=0;k<=10;k++){
      const a=k*Math.PI/10;rod(fan,V(0,0,.03),V(1.9*Math.cos(a),1.65*Math.sin(a),.04),.021,M.brass, .011);
    }
    for(const r of [.53,1.22,1.72]){const t=archPoints(r,0,.07);for(let q of t)q.y*=.87;curve(fan,t,.021,M.brass,32);}
    const lamp=group(bay);lamp.position.set(2.49,3.66,.59);
    rod(lamp,V(0,-.2,0),V(0,.16,.65),.054,M.gilt);
    cyl(lamp,0,.19,.65,.24,.12,.16,M.brass);
    const shade=ball(lamp,0,.48,.65,.22,M.lamp);shade.scale.y=.36;
    hoop(lamp,0,.52,.65,.223,.02,M.brass);cyl(lamp,0,.8,.65,.07,.16,.09,M.brass);
    lamp.updateWorldMatrix(true,false);const pt=lamp.localToWorld(V(0,.49,.65));glows.push(sprite(glow.parent,glow.map,0xffac50,1.9,pt.x,pt.y,pt.z,.44));
  }
  for(const [y,r,t,mat] of [[5.83,14,.12,M.copper],[6.07,14,.09,M.brass],[6.28,14.12,.15,M.blue],[6.43,14.12,.06,M.gilt]])hoop(p,0,y,0,r,t,mat,160);
}
const RD=14.48, YD=6.28, HD=10.72;
function roofPoint(a,q,inset=0){return V((RD-inset)*Math.cos(q)*Math.cos(a),YD+(HD-inset)*Math.sin(q),(RD-inset)*Math.cos(q)*Math.sin(a));}
function roofSheet(a0,a1,q0,q1,inset){
  const pos=[],uv=[],idx=[],na=5,nq=18;
  for(let j=0;j<=nq;j++)for(let i=0;i<=na;i++){
    const u=i/na,v=j/nq;pos.push(...roofPoint(a0+u*(a1-a0),q0+v*(q1-q0),inset).toArray());uv.push(u,v);
    if(i<na&&j<nq){let k=j*(na+1)+i;idx.push(k,k+1,k+na+1,k+1,k+na+2,k+na+1);}
  }
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;
}
function dome(p,scene,M){
  const shutters=[],bays=8,step=tau/bays,leaf=step/5,tip=1.505;
  for(let j=0;j<bays;j++){
    const a=j*step;
    for(const d of [-.017,.017])curve(p,Array.from({length:35},(_,i)=>roofPoint(a+d,tip*i/34,.18)),.075,M.brass,55);
    for(let k=0;k<16;k++){
      const q=k*tip/16,qn=(k+1)*tip/16;
      rod(p,roofPoint(a-.017,q,.18),roofPoint(a+.017,qn,.18),.027,M.bronze);
      const pt=roofPoint(a,q,.26);ball(p,pt.x,pt.y,pt.z,.075,M.gilt);
    }
    for(let k=0;k<5;k++){
      const b=group(scene),off=.017*k;
      mesh(b,roofSheet(-leaf*.51,leaf*.51,.005,tip,-off),M.panel);
      for(const s of [-1,1])curve(b,Array.from({length:26},(_,i)=>roofPoint(s*leaf*.49,.008+tip*i/25,-off+.03)),.034,M.bronze,40);
      for(const q of [.37,.76,1.16])curve(b,Array.from({length:8},(_,i)=>roofPoint(-leaf*.49+i*leaf*.98/7,q,-off+.04)),.025,M.brass,8);
      batch(b);shutters.push({b,a,offset:(k+.5)*leaf});
    }
  }
  for(const q of [.11,.68,1.28,1.49]){
    const v=roofPoint(0,q,.19);hoop(p,0,v.y,0,v.x,.042,M.bronze,180);
  }
  cyl(p,0,YD+HD-.09,0,1.17,1.12,.18,M.blue,64);
  hoop(p,0,YD+HD-.18,0,1.15,.085,M.gilt);
  return shutters;
}

function instrument(p,M,a,r){
  const stand=group(p);stand.position.copy(polar(r,a));stand.rotation.y=-.64;
  for(let j=0;j<3;j++){
    const a=j*tau/3;rod(stand,polar(1.12,a,.12),polar(.22,a,2.97),.105,M.wood,.15);
    rod(stand,polar(1.12,a,.09),polar(1.02,a,.38),.12,M.brass,.11);
    rod(stand,polar(.86,a,.8),V(0,1.03,0),.045,M.brass);
  }
  cyl(stand,0,2.95,0,.39,.32,.25,M.brass);cyl(stand,0,3.2,0,.17,.23,.45,M.blue);
  const tube=group(stand);tube.position.y=3.48;tube.rotation.z=-.96;tube.rotation.x=.24;
  lathe(tube,0,0,0,[[.14,-2.3],[.16,-2.24],[.13,-2.18],[.13,-1.7],[.25,-1.67],[.27,-1.24],[.36,1.54],[.4,1.6],[.43,2.02],[.49,2.04],[.49,2.16],[.39,2.16]],M.brass);
  cyl(tube,0,.13,0,.342,.26,2.46,M.blue);
  for(const [y,r] of [[-2.2,.17],[-1.62,.24],[-1.42,.26],[-.96,.28],[.22,.32],[.41,.33],[1.32,.36],[1.55,.39],[2.1,.49]])hoop(tube,0,y,0,r,.043,M.gilt);
  cyl(tube,0,2.12,0,.414,.414,.025,M.patina);
  rod(tube,V(.43,-.76,0),V(.43,1.2,0),.075,M.brass);
  for(const z of [-.36,.36]){
    const w=torus(stand,0,3.38,z,.42,.082,M.brass);
    for(let i=0;i<8;i++){const a=i*tau/8;rod(stand,V(0,3.38,z),V(.4*Math.cos(a),3.38+.4*Math.sin(a),z),.026,M.brass);}
  }
}
function furnishings(p,M){
  instrument(p,M,Math.PI*.96,9.8);
  const paper=new T.MeshStandardMaterial({map:chartTexture(),roughness:.88,side:T.DoubleSide});
  for(const a of [-.79,2.47]){
    const d=group(p);d.position.copy(polar(10.5,a));d.rotation.y=-a;
    box(d,0,1.53,0,3.55,.19,1.75,M.wood);
    for(const x of [-1.34,1.34])for(const z of [-.61,.61]){
      lathe(d,x,0,z,[[.13,0],[.17,.1],[.095,.27],[.08,.85],[.17,1.14],[.1,1.23],[.19,1.45]],M.wood,16);
    }
    const sheet=mesh(d,new T.PlaneGeometry(2.32,1.43),paper,-.18,1.632,0);sheet.rotation.set(-Math.PI/2,0,-.07);
    for(const z of [-.62,.62])rod(d,V(-1.34,1.72,z),V(1.02,1.72,z),.077,M.paper);
    for(let i=0;i<3;i++){
      const b=box(d,1.36,1.74+i*.17,-.12,.64,.15,.84,M.books[i]);b.rotation.y=i*.17;
    }
  }
  for(const a of [-.55,-2.45,2.29,2.94]){
    const o=group(p);o.position.copy(polar(10.7,a,5.78));o.rotation.y=-a+.5;
    rod(o,V(0,1,0),V(0,5.27,0),.023,M.brass);
    torus(o,0,1.04,0,.17,.04,M.gilt);
    for(const [r,t,m] of [[.94,.055,M.brass],[.83,.024,M.gilt],[.64,.034,M.brass],[.38,.022,M.copper]])torus(o,0,.01,0,r,t,m);
    for(let i=0;i<36;i++){
      const a=i*tau/36,r=i%3===0?.68:.77;
      rod(o,V(r*Math.cos(a),r*Math.sin(a),0),V(.84*Math.cos(a),.84*Math.sin(a),0),.015,M.gilt);
    }
    const h=torus(o,.13,.17,.018,.51,.035,M.brass);h.rotation.z=.43;
    rod(o,V(-.62,-.57,.06),V(.72,.67,.06),.037,M.gilt);ball(o,0,0,.06,.11,M.blue);
  }
}
export function buildRoom(scene,M,map){
  const fixed=group(scene), glows=[];
  roomFloor(fixed,M);library(fixed,M,glows,{parent:scene,map});furnishings(fixed,M);gallery(fixed,M);
  const shutters=dome(fixed,scene,M);batch(fixed);
  const sky=mesh(scene,new T.SphereGeometry(85,60,36),new T.MeshBasicMaterial({map:M.textures.galaxy,side:T.BackSide,fog:false,toneMapped:false}));
  sky.rotation.y=.64;
  const light=new T.HemisphereLight(0x9dbbdf,0x48312c,.48);scene.add(light);
  for(const [pos,c,i] of [[[-5,12,3],0xe6d3b2,1.23],[[-7,12,-7],0x8ebcee,.84],[[9,5,-3],0xffa15b,.35]]){
    const l=new T.DirectionalLight(c,i);l.position.set(...pos);scene.add(l);
    if(pos[0]===-5){
      l.castShadow=true;l.shadow.mapSize.set(1536,1536);
      Object.assign(l.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.3,far:28});
      l.shadow.bias=-.00022;l.shadow.normalBias=.017;l.shadow.radius=2;
    }
  }
  // Meteors are drawn in the sky sphere, behind the moving roof.
  const streaks=Array.from({length:3},(_,i)=>{
    const tail=mesh(scene,new T.ConeGeometry(.066,3.7,8),new T.MeshBasicMaterial({color:0xb3d7ff,transparent:true,depthWrite:false,fog:false}));
    const origin=polar(40,-2.45+i*.80,34+i*2), dir=V(1,-.42,.17).normalize();
    tail.quaternion.setFromUnitVectors(V(0,1,0),dir.clone().negate());return {tail,origin,dir};
  });
  return (time,open)=>{
    for(const {b,a,offset} of shutters)b.rotation.y=-(a+offset*(1-open*.96));
    glows.forEach((s,k)=>s.material.opacity=.42+.057*Math.sin(time*3.81+k)*Math.cos(time*5.71-k));
    streaks.forEach(({tail,origin,dir},i)=>{
      const t=(time+16-i*4.72)%17;tail.visible=t<1.17;
      if(tail.visible){tail.position.copy(origin).addScaledVector(dir,t*11);tail.material.opacity=Math.min(1,t*8,(1.17-t)*5);}
    });
    sky.rotation.y=.64+time*.0015;
  };
}
