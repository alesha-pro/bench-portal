import * as T from 'three';
import {V,tau,group,mesh,box,cyl,rod,ball,torus,hoop,lathe,curve,polar,batch,annulus,canvasTex} from './workshop.js';

function wheel(teeth){
  // Pitch radius is one. Concentric bevels catch light along both tooth shoulders.
  const xyz=[],idx=[];
  function strip(lower,upper,size){
    let b=xyz.length/3;
    for(let i=0;i<=size;i++){const a=i*tau/size;xyz.push(...lower(i,a),...upper(i,a));}
    for(let i=0;i<size;i++){let k=b+i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}
  }
  const level=(radius,h)=>(i,a)=>[radius(i)*Math.cos(a),h,radius(i)*Math.sin(a)];
  const tooth=i=>[.929,.929,1.055,1.055,.929,.929][i%6];
  const contour=[[()=>.685,-.085],[()=>.685,.047],[()=>.711,.079],[()=>.783,.079],[()=>.79,.052],[()=>.819,.052],[()=>.831,.083],[i=>tooth(i)-.028,.083],[tooth,.040],[tooth,-.065],[i=>tooth(i)-.025,-.085],[()=>.685,-.085]];
  for(let j=1;j<contour.length;j++)strip(level(...contour[j-1]),level(...contour[j]),teeth*6);
  for(let k=0;k<6;k++){
    const base=k*tau/6; const wall=(side,h)=>(i,a)=>{
      const f=i/9,rad=.16+.55*f,ang=base+.15*Math.sin(f*2.8)-.18*f+side*(.095+.04*Math.cos(tau*f));
      return [rad*Math.cos(ang),h,rad*Math.sin(ang)];
    };
    strip(wall(-1,.048),wall(1,.048),9);strip(wall(1,.048),wall(1,-.063),9);
    strip(wall(1,-.063),wall(-1,-.063),9);strip(wall(-1,-.063),wall(-1,.048),9);
  }
  const hub=[[.06,-.12],[.06,.12],[.145,.12],[.19,.078],[.221,.058],[.221,-.065],[.17,-.12],[.06,-.12]];
  for(let j=1;j<hub.length;j++)strip(level(()=>hub[j-1][0],hub[j-1][1]),level(()=>hub[j][0],hub[j][1]),32);
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(xyz,3));g.setIndex(idx);g.computeVertexNormals();
  return g;
}
function meterTexture(title,number){
  return canvasTex(384,384,(c,w,h)=>{
    c.fillStyle='#c8b786';c.fillRect(0,0,w,h);
    c.translate(192,192);c.strokeStyle='#5a503e';c.fillStyle='#342e27';
    for(let r of [181,174,148,93,88]){c.beginPath();c.arc(0,0,r,0,tau);c.lineWidth=r===181?4:1.4;c.stroke();}
    for(let i=0;i<60;i++){
      const a=i*tau/60;c.save();c.rotate(a);c.fillRect(-1.2,-171,2.4,i%5===0?20:9);c.restore();
    }
    c.textAlign='center';c.textBaseline='middle';c.font='25px Georgia';
    for(let i=0;i<12;i++){let a=i*tau/12;c.fillText(['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'][i],129*Math.sin(a),-129*Math.cos(a));}
    c.font='18px Georgia';c.fillText(title,0,-43);c.font='13px monospace';c.fillText(number,0,45);
    c.beginPath();c.moveTo(-7,8);c.lineTo(54,-104);c.lineTo(5,12);c.lineTo(-23,38);c.closePath();c.fill();
    c.beginPath();c.arc(0,0,8,0,tau);c.fill();
  });
}

export function buildMovement(scene,M){
  const fixed=group(scene),gears=[],worms=[],stations=12;
  const gearMats=[M.brass,M.copper,M.gilt,M.steel].map(m=>{const mat=m.clone();mat.side=T.DoubleSide;mat.roughnessMap=null;return mat;});
  const caches=new Map();
  function gear(x,y,z,teeth,r,speed,phase,mat=0,orientation=null){
    const key=teeth+'/'+mat;
    if(!caches.has(key))caches.set(key,{geo:wheel(teeth),material:gearMats[mat],items:[]});
    const row={position:V(x,y,z),rotation:orientation||new T.Quaternion(),radius:r,speed,phase};
    caches.get(key).items.push(row);return row;
  }
  // Solid timber plinth with stepped brass beading and a ventilated, glazed engine gallery.
  lathe(fixed,0,0,0,[[5.02,.03],[5.17,.11],[5.17,.18],[5.10,.22],[5.02,.25],[5.01,.33],[4.93,.39],[4.90,.48],[4.88,.52]],M.wood,128);
  for(const [r,y,t,m] of [[5.15,.15,.043,M.brass],[5.04,.27,.027,M.gilt],[4.94,.4,.046,M.bronze],[4.86,.54,.064,M.brass],[4.80,1.26,.078,M.brass],[4.75,1.47,.052,M.gilt],[4.7,1.52,.042,M.bronze]])hoop(fixed,0,y,0,r,t,m,160);
  cyl(fixed,0,.475,0,4.83,4.83,.10,M.navy,128);
  annulus(fixed,0,1.45,0,4.37,4.80,M.blue);
  for(const r of [4.37,4.44,4.69,4.75])hoop(fixed,0,1.463,0,r,.017,M.gilt,160);
  for(let i=0;i<240;i++){
    const a=i*tau/240;rod(fixed,polar(i%5===0?4.44:4.59,a,1.47),polar(4.69,a,1.47),i%5===0?.015:.008,M.gilt,.009,6);
  }
  annulus(fixed,0,1.39,0,1.42,4.37,M.glass,128);
  for(let i=0;i<stations;i++){
    const angle=i*tau/stations,pt=polar(4.72,angle);
    lathe(fixed,pt.x,0,pt.z,[[.12,.48],[.15,.54],[.15,.61],[.092,.68],[.078,1.14],[.13,1.2],[.15,1.27],[.13,1.42]],M.brass,14);
    let mid=angle+tau/32;const bolt=polar(4.55,mid,1.477);
    cyl(fixed,bolt.x,bolt.y,bolt.z,.048,.048,.029,M.gilt,6);
    // A divider below the glass marks each individual train.
    rod(fixed,polar(1.53,angle,1.402),polar(4.36,angle,1.402),.016,M.bronze,.027,8);
    for(let layer=0;layer<4;layer++){
      const toothCounts=[16,24,20,32],pitch=.0192;let R=1.23;
      const base=angle;
      const counts=layer%2===1?[22,18,26,26]:toothCounts;
      counts.forEach((n,k)=>{
        let r=n*pitch;
        if(k)R+=pitch*(counts[k-1]+n);
        const point=polar(R,base,.665+layer*.174);
        gear(point.x,point.y,point.z,n,r,(k%2?-1:1)*13/n,-base+(k%2?Math.PI/n:0),(k+layer+i)%4===1?1:(layer===1?2:0));
        if(layer===3){
          cyl(fixed,point.x,.899,point.z,.039,.039,.81,M.steel,10);
          cyl(fixed,point.x,1.28,point.z,.072,.087,.055,M.brass,10);
        }
      });
    }
  }
  // Six exposed vertical winding wheels and ivory regulator faces on the skirt.
  const dialMats=['SIDEREAL','SOLAR','LUNAR'].map((s,i)=>new T.MeshStandardMaterial({map:meterTexture(s,'No. 0'+(i+1)),roughness:.55,metalness:.13}));
  for(let i=0;i<12;i++){
    const a=(i+.5)*tau/12,pt=polar(4.71,a,.89),axis=polar(1,a);
    const q=new T.Quaternion().setFromUnitVectors(V(0,1,0),axis);
    if(i%2===0){
      gear(pt.x,pt.y,pt.z,30,.54,1.15,a,2,q);
      rod(fixed,polar(4.39,a,.89),polar(4.84,a,.89),.079,M.steel);
    }else{
      const b=group(fixed);b.position.copy(pt);b.quaternion.setFromUnitVectors(V(0,0,1),axis);
      torus(b,0,0,.077,.323,.044,M.gilt,48);
      mesh(b,new T.CircleGeometry(.318,48),dialMats[(i>>1)%3],0,0,.079);
    }
  }
  for(let i=0;i<8;i++){
    const a=(i+.27)*tau/8,pos=polar(3.65,a,.93),w=group(scene);
    w.position.copy(pos);w.rotation.y=-a;const screwRotor=group(w);rod(screwRotor,V(-.61,0,0),V(.61,0,0),.075,M.steel);
    const screw=[];
    for(let s=0;s<=104;s++){let f=s/104;screw.push(V(-.49+.98*f,.115*Math.cos(f*6*tau),.115*Math.sin(f*6*tau)));}
    curve(screwRotor,screw,.035,M.brass,104);batch(screwRotor);worms.push(screwRotor);
  }
  // Epicyclic heart, turned and fluted, carries the cantilevered arms.
  lathe(fixed,0,0,0,[[1.83,.52],[1.89,.59],[1.83,.76],[1.58,.84],[1.53,1.32],[1.59,1.43],[1.56,1.56],[1.28,1.61],[1.03,1.76],[.9,1.98],[.77,2.17],[.67,2.24],[.64,2.48],[.83,2.56],[.82,2.69],[.55,2.75],[.46,3.12],[.35,3.22],[.28,4.44]],M.brass);
  lathe(fixed,0,0,0,[[1.51,.89],[1.54,.97],[1.54,1.28],[1.49,1.35],[1.49,.89]],M.navy);
  for(let i=0;i<32;i++){
    const a=i*tau/32;curve(fixed,[polar(1.23,a,1.64),polar(1.09,a,1.76),polar(.8,a+.028,2.13),polar(.67,a+.04,2.23)],.025,M.gilt,12);
  }
  for(const [r,y] of [[1.83,.71],[1.53,.93],[1.54,1.31],[1.55,1.5],[.70,2.26],[.75,2.53],[.81,2.64],[.47,3.04]])hoop(fixed,0,y,0,r,.042,M.gilt);
  for(let i=0;i<8;i++){
    const a=i*tau/8,pt=polar(1.48,a,1.72);
    const axis=polar(1,a),q=new T.Quaternion().setFromUnitVectors(V(0,1,0),axis);
    gear(pt.x,pt.y,pt.z,36,.36,(i%2?-1:1)*.76,0,2,q);
  }
  const chains=[];
  for(let i=0;i<2;i++){
    const assembly=group(scene),a=(i+.39)*Math.PI;
    assembly.rotation.y=-a;
    const r=.174,span=1.12,links=50, run=2*span+tau*r;
    const linkGeo=new T.TorusGeometry(.047,.012,5,10),im=new T.InstancedMesh(linkGeo,M.steel,links);assembly.add(im);
    assembly.position.copy(polar(2.85,a,.995));
    for(const x of [-span/2,span/2]){
      const local=V(x,0,0).applyAxisAngle(V(0,1,0),-a).add(assembly.position);
      gear(local.x,local.y,local.z,18,r,2.3,0,0);
    }
    chains.push({im,links,span,r,run});
  }
  batch(fixed);
  for(const bucket of caches.values()){
    bucket.inst=new T.InstancedMesh(bucket.geo,bucket.material,bucket.items.length);
    bucket.inst.frustumCulled=false;scene.add(bucket.inst);gears.push(bucket);
  }
  const dummy=new T.Object3D(),rot=new T.Quaternion(),up=V(0,1,0);
  return (time)=>{
    for(const worm of worms)worm.rotation.x=time*2.83;
    for(const {inst,items} of gears){
      items.forEach((g,i)=>{
        dummy.position.copy(g.position);rot.setFromAxisAngle(up,time*g.speed+g.phase);
        dummy.quaternion.copy(g.rotation).multiply(rot);dummy.scale.setScalar(g.radius);dummy.updateMatrix();inst.setMatrixAt(i,dummy.matrix);
      });inst.instanceMatrix.needsUpdate=true;
    }
    for(const {im,links,span,r,run} of chains){
      for(let i=0;i<links;i++){
        const d=(i*run/links+time*r*2.3)%run,half=Math.PI*r;
        let x,z,heading;
        if(d<span){x=-span/2+d;z=r;heading=0;}
        else if(d<span+half){const a=(d-span)/r;x=span/2+r*Math.sin(a);z=r*Math.cos(a);heading=a;}
        else if(d<2*span+half){x=span/2-(d-span-half);z=-r;heading=Math.PI;}
        else{const a=(d-2*span-half)/r;x=-span/2-r*Math.sin(a);z=-r*Math.cos(a);heading=Math.PI+a;}
        dummy.position.set(x,.02,z);dummy.rotation.set(0,heading,0);dummy.rotateX(i%2?.3:1.36);
        dummy.scale.set(1.12,.72,1);dummy.updateMatrix();im.setMatrixAt(i,dummy.matrix);
      }im.instanceMatrix.needsUpdate=true;
    }
  };
}
