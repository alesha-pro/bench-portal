import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {V,materials,studio,glowMap,random,tau} from './workshop.js';
import {optics} from './optics.js';
import {buildRoom} from './observatory.js';
import {buildMovement} from './movement.js';
import {celestial} from './celestial.js';

const $=id=>document.getElementById(id);
const qs=new URLSearchParams(location.search), capture=qs.has('capture');
if(qs.has('film'))document.body.classList.add('film');
const renderer=new T.WebGLRenderer({canvas:$('observatory'),antialias:true,alpha:false,preserveDrawingBuffer:capture,powerPreference:'high-performance'});
renderer.setPixelRatio(capture?1:Math.min(devicePixelRatio,1.65));
renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;
renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.06;
const scene=new T.Scene();scene.background=new T.Color(0x101d2b);scene.fog=new T.FogExp2(0x243037,.026);
const camera=new T.PerspectiveCamera(44,1,.06,125);
const orbit=new OrbitControls(camera,renderer.domElement);orbit.enableDamping=true;orbit.dampingFactor=.076;
orbit.minDistance=1.52;orbit.maxDistance=14.1;orbit.maxPolarAngle=Math.PI*.53;orbit.enablePan=true;
function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
window.addEventListener('resize',resize);resize();
const M=await materials();studio(renderer,scene);
const glow=glowMap(),room=buildRoom(scene,M,glow),movement=buildMovement(scene,M),astro=celestial(scene,M,glow);
scene.traverse(o=>{
  if(!o.isMesh||!o.material?.isMeshStandardMaterial||o.material.transparent)return;
  o.receiveShadow=true;
  // The directional shadow frustum covers the mechanism and its immediate floor.
  o.castShadow=o.geometry.type!=='PlaneGeometry' && o.geometry.type!=='CircleGeometry' && o.material!==M.panel;
});
const expose=optics(renderer,scene,camera);
const motesGeo=new T.BufferGeometry(), motes=[];
for(let i=0;i<540;i++){const r=1+random()**.65*12,a=random()*tau;motes.push(r*Math.cos(a),.7+random()*7,r*Math.sin(a));}
motesGeo.setAttribute('position',new T.Float32BufferAttribute(motes,3));
const motesObj=new T.Points(motesGeo,new T.PointsMaterial({color:0xecc68b,size:.036,opacity:.46,transparent:true,depthWrite:false,blending:T.AdditiveBlending,map:glow}));scene.add(motesObj);

const state={open:.86,speed:1,flux:1,auto:false,focus:'Dome Wide',time:0,sim:0,tour:0};
const clamp=T.MathUtils.clamp, mix=T.MathUtils.lerp;
const smooth=x=>{x=clamp(x,0,1);return x*x*(3-2*x);};
const chapters=['The copper vault','Under the Milky Way','The sidereal movement','Saturn in amber','The solar furnace','The celestial observatory'];
const cuts=[0,5.75,10.8,16.1,20.9,25.25,30],romans=['I','II','III','IV','V','VI'];
function chapter(t){let i=0;while(i<5&&t>=cuts[i+1])i++;return i;}
function interpolate(a,b,u){return V(...a).lerp(V(...b),u);}
function shot(t){
  const i=chapter(t),u=clamp((t-cuts[i])/(cuts[i+1]-cuts[i]),0,1);
  let pos,look,fov;
  if(i===0){
    // A low move looks up through the cage as the copper leaves telescope.
    pos=interpolate([6.6,3.1,10.3],[4.15,3.38,9.95],u);
    look=interpolate([0,4.92,0],[-.15,5.88,-.30],u);fov=mix(53,58,u);
  }else if(i===1){
    pos=interpolate([-5.9,2.65,10.35],[-7.65,3.95,8.55],u);
    look=interpolate([0,5.65,0],[0,4.68,0],u);fov=mix(63,52,u);
  }else if(i===2){
    const a=mix(1.78,1.1,u),r=mix(6.65,5.42,u);
    pos=V(r*Math.cos(a),mix(4.2,3.48,u),r*Math.sin(a));
    look=interpolate([-.54,1.07,2.27],[.82,1.32,2.64],u);fov=mix(46,49,u);
  }else if(i===3){
    const h=astro.heads.Saturn;
    pos=interpolate([4.23,1.64,4.35],[1.7,.76,3.04],u).add(h);
    look=h.clone().add(interpolate([-.77,-.11,0],[-.48,.08,0],u));fov=mix(46,49,u);
  }else if(i===4){
    const a=mix(.94,1.67,u),r=mix(5.44,4.42,u);pos=V(Math.cos(a)*r,5.03+u*.61,Math.sin(a)*r);
    look=interpolate([.33,4.39,0],[-.22,4.48,0],u);fov=mix(46,49,u);
  }else{
    const a=mix(.97,1.53,u),r=mix(10.55,13.24,smooth(u));
    pos=V(Math.cos(a)*r,mix(6.85,8.54,smooth(u)),Math.sin(a)*r);
    look=interpolate([0,3.24,0],[0,2.78,0],smooth(u));fov=mix(52,54,u);
  }
  camera.position.copy(pos);orbit.target.copy(look);camera.fov=fov;camera.updateProjectionMatrix();camera.lookAt(look);
  return i;
}
// Integral of the eased rate change; scrubbing works in either direction.
function mechanicalClock(t){
  const x=clamp((t-5.6)/7,0,1);
  return t*.36+1.7*(7*(x**3-.5*x**4)+Math.max(0,t-12.6));
}
function tourState(t){
  const travel=smooth((t-.42)/7.9);
  return {open:clamp(.018+.956*travel+.009*Math.sin(13.1*t)*Math.sin(Math.PI*travel),0,1),
    flux:.86+.62*smooth((t-15)/7)-.35*smooth((t-24)/5),sim:mechanicalClock(t)};
}
function world(t,sim,open,flux){
  scene.userData.solarFlux=flux;scene.userData.clock=sim;room(t,open);movement(sim*1.85);astro.update(t,sim,flux);
  motesObj.rotation.y=t*.011;motesObj.position.y=.09*Math.sin(t*.35);
}
function readouts(open,speed,flux){
  for(const [id,val,txt] of [['dome',Math.round(open*100),Math.round(open*100)+'%'],['speed',Math.round(speed*10),speed.toFixed(1)+'×'],['flux',Math.round(flux*100),Math.round(flux*100)+'%']]){
    const el=$(id);el.value=val;el.style.setProperty('--pct',(val-Number(el.min))/(Number(el.max)-Number(el.min))*100+'%');$(id+'-out').textContent=txt;
    el.setAttribute('aria-valuetext',txt);
  }
}
function labels(active,i,t){
  $('chapter-index').textContent=active?romans[i]:'✧';$('chapter-kicker').textContent=active?'Showcase  /  '+String(i+1).padStart(2,'0')+' of 06':'Orrery chamber';
  $('chapter-name').textContent=active?chapters[i]:state.focus;
  $('time').textContent=active?('00:'+String(Math.floor(t)).padStart(2,'0')):'';
  $('play').textContent=active?'Ⅱ':'▷';$('show').setAttribute('aria-pressed',String(active));
  document.querySelectorAll('[data-focus]').forEach(b=>{const selected=!active&&b.dataset.focus===state.focus;b.classList.toggle('chosen',selected);b.setAttribute('aria-pressed',selected);});
}
function drawTour(t){
  const {open,flux,sim}=tourState(t);
  state.time=t;state.sim=sim;state.open=open;state.flux=flux;
  world(t,sim,open,flux);scene.userData.fade=qs.has('film')?smooth(t/.42)*smooth((30-t)/.87):1;const i=shot(t);
  const instantaneous=.36+1.7*smooth((t-5.6)/7);
  readouts(open,instantaneous,flux);labels(true,i,t);expose();
}
window.TOTAL_DURATION=30.0;
window.renderAt=t=>{const s=clamp(Number(t)||0,0,30);state.auto=false;frozen=true;state.tour=s;drawTour(s);};
let transition=null,tracked=null,frozen=false;
function select(name,snap=false){
  state.auto=false;state.focus=name;tracked=name==='Dome Wide'?null:astro.heads[name];
  const target=tracked?tracked.clone():V(0,3.10,0);
  const offset={'Dome Wide':V(7.35,4.2,11.48),Sun:V(2.3,1.07,4.45),Earth:V(.79,.67,2.22),Saturn:V(1.81,1.26,3.21)}[name];
  const fov=name==='Dome Wide'?52:44;
  transition={from:camera.position.clone(),aim:orbit.target.clone(),to:offset,elapsed:0,fov:camera.fov,endFov:fov};
  if(snap){camera.position.copy(target).add(offset);orbit.target.copy(target);camera.fov=fov;camera.updateProjectionMatrix();orbit.update();transition=null;}
  labels(false,0,0);
}
function manual(){
  frozen=false;scene.userData.fade=1;
  if(state.auto || $('show').getAttribute('aria-pressed')==='true'){
    state.auto=false;tracked=null;state.focus='Free orbit';transition=null;orbit.update();
    readouts(state.open,state.speed,state.flux);labels(false,0,0);
  }
}
orbit.addEventListener('start',()=>{manual();transition=null;tracked=null;state.focus='Free orbit';labels(false,0,0);});
for(const id of ['dome','speed','flux'])$(id).addEventListener('input',()=>{
  const v=Number($(id).value);manual();if(id==='dome')state.open=v/100;else if(id==='speed')state.speed=v/10;else state.flux=v/100;
  readouts(state.open,state.speed,state.flux);world(state.time,state.sim,state.open,state.flux);expose();
});
document.querySelectorAll('[data-focus]').forEach(b=>b.onclick=()=>{manual();select(b.dataset.focus,capture);if(capture)expose();});
$('show').onclick=()=>{
  if(state.auto){manual();return;}
  frozen=false;state.auto=true;previous=performance.now();state.tour=0;transition=null;tracked=null;drawTour(0);
};
$('panel-toggle').onclick=()=>{const hidden=!$('instruments').hidden;$('instruments').hidden=hidden;$('panel-toggle').setAttribute('aria-expanded',String(!hidden));$('fold').textContent=hidden?'+':'−';};
if(innerWidth<660)$('panel-toggle').click();
world(0,0,state.open,state.flux);select('Dome Wide',true);readouts(state.open,state.speed,state.flux);
expose();$('loading').hidden=true;
let previous=performance.now();
function loop(now){
  const elapsed=Math.max(0,(now-previous)/1000),dt=Math.min(.1,elapsed);previous=now;
  if(state.auto){state.tour=Math.min(30,state.tour+elapsed);drawTour(state.tour);if(state.tour===30){manual();}}
  else if(!capture&&!frozen){
    const old=tracked?.clone();
    state.time+=dt;state.sim+=dt*state.speed;world(state.time,state.sim,state.open,state.flux);
    if(transition){
      const tr=transition;tr.elapsed+=dt;const u=smooth(tr.elapsed/1.15),to=tracked||V(0,3.10,0);
      orbit.target.copy(tr.aim).lerp(to,u);camera.position.copy(tr.from).lerp(to.clone().add(tr.to),u);camera.fov=mix(tr.fov,tr.endFov,u);camera.updateProjectionMatrix();
      if(u>=1)transition=null;
    }else if(tracked&&old){const delta=tracked.clone().sub(old);orbit.target.add(delta);camera.position.add(delta);}
    orbit.update();expose();
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
