import * as THREE from 'three';
import { AudioSys } from './audio.js';
import { buildArena } from './arena.js';
import { EnemySwarm } from './enemies.js';
import { Effects } from './effects.js';
import { WeaponSystem } from './weapons.js';
import { PostFX } from './postfx.js';

const $ = id => document.getElementById(id);
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0b1720, 0.012);
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, .05, 600);
scene.add(camera);
const audio = new AudioSys();
const arena = buildArena(scene);
const P = {
  pos: new THREE.Vector3(0, 1.7, 24), vel: new THREE.Vector3(), yaw: 0, pitch: 0,
  onGround: true, hp: 100, maxHp: 100, sprint: false, ads: false, adsT: 0,
  bobT: 0, bobAmt: 0, alive: true, score: 0, kills: 0, combo: 0, comboT: 0,
  lastDamageT: -10, shake: new THREE.Vector3(), kickPitch: 0, kickYaw: 0, fovBase: 75,
};
const fx = new Effects(scene, camera);
const post = new PostFX(renderer, scene, camera);
const swarm = new EnemySwarm(scene, fx);
swarm.colliders = arena.colliders || [];
const wpn = new WeaponSystem(camera, scene, audio, swarm, fx, P);
wpn.colliders = arena.colliders || [];
const keys = Object.create(null);
const wave = { n: 0, queue: [], timer: 0, breakTime: 2.5, cleared: false };
let running = false, paused = false, t = 0, visualTime = 0, last = performance.now();
let hitTime = 0, bannerTime = 0, padCooldown = 0, mouseX = 0, mouseY = 0;
const camEuler = new THREE.Euler(0,0,0,'YXZ');

function clearInput() { for (const k in keys) keys[k] = false; P.ads = false; wpn.triggerUp(); }
async function lock() {
  try { await canvas.requestPointerLock(); }
  catch { $('error').textContent = 'Click the arena to capture your mouse. Escape releases it.'; $('error').style.display = 'block'; setTimeout(()=>$('error').style.display='none',3500); }
}
function pause() {
  if (!running || !P.alive) return;
  paused = true; clearInput(); $('pause').style.display = 'flex';
  if(document.pointerLockElement) document.exitPointerLock();
}
function resume() { paused = false; $('pause').style.display = 'none'; lock(); }
function banner(big, small, duration = 2.6) {
  $('banner').querySelector('.big').textContent = big;
  $('banner').querySelector('.small').textContent = small;
  bannerTime = duration;
}
function feed(text) {
  const el = document.createElement('div'); el.className = 'kf'; el.textContent = text;
  $('killfeed').prepend(el);
  if($('killfeed').children.length > 5) $('killfeed').lastChild.remove();
  setTimeout(()=>el.style.opacity=0,1800); setTimeout(()=>el.remove(),2500);
}
swarm.onHit = killed => { hitTime = .16; $('hitmark').classList.toggle('kill',killed); };
swarm.onKill = (score,text) => {
  P.combo++; P.comboT = 3; P.kills++; P.score += score;
  feed(text); if(P.combo >= 3) $('combo').textContent = `${P.combo}× KILL CHAIN`;
};
function damagePlayer(amount) {
  if(!P.alive) return;
  P.hp = Math.max(0,P.hp-amount); P.lastDamageT=t; P.shake.x += .017; P.shake.y += .02;
  audio.hit();
  if(P.hp === 0) {
    P.alive=false; clearInput(); $('hud').style.display='none';
    $('deadstats').textContent=`WAVE ${wave.n} / ${P.kills} ELIMINATIONS / ${P.score.toLocaleString()} PTS`;
    $('dead').style.display='flex'; document.exitPointerLock();
  }
}
function startGame() {
  clearInput(); P.pos.set(0,1.7,24); P.vel.set(0,0,0); P.shake.set(0,0,0);
  Object.assign(P,{yaw:0,pitch:0,hp:100,alive:true,score:0,kills:0,combo:0,comboT:0,adsT:0,kickPitch:0,kickYaw:0,onGround:true,lastDamageT:-10});
  swarm.reset(); wpn.resetAll(); wave.n=0; wave.queue=[]; wave.breakTime=2.5; wave.cleared=false;
  t=0; paused=false; running=true; padCooldown=0;
  for(const id of ['start','dead','pause']) $(id).style.display='none';
  $('hud').style.display='block'; $('killfeed').replaceChildren();
  audio.resume?.(); lock(); banner('HOLD THE LINE','CONTAINMENT PROTOCOL ENGAGED');
}
$('play').onclick=startGame; $('replay').onclick=startGame; $('resume').onclick=resume;
document.addEventListener('pointerlockchange',()=>{if(!document.pointerLockElement && running && P.alive && !paused) pause();});
canvas.addEventListener('click',()=>{if(running && P.alive && !document.pointerLockElement) resume();});
addEventListener('blur',()=>{if(running) pause();});
addEventListener('contextmenu',e=>e.preventDefault());
addEventListener('keydown', e=>{
  if(['Space','ArrowUp','ArrowDown','Tab'].includes(e.code)) e.preventDefault();
  if(e.code==='Escape'){ if(running && !paused) pause(); return; }
  if(!running || paused || !P.alive) return;
  keys[e.code]=true;
  if(e.repeat) return;
  if(/^Digit[123]$/.test(e.code)) wpn.select(Number(e.code.slice(-1))-1);
  if(e.code==='KeyR') wpn.reload();
  if(e.code==='KeyV') wpn.melee();
});
addEventListener('keyup',e=>keys[e.code]=false);
addEventListener('mousemove',e=>{
  if(!running){mouseX=(e.clientX/innerWidth-.5);mouseY=e.clientY/innerHeight-.5;return;}
  if(paused || !P.alive || document.pointerLockElement!==canvas)return;
  const sens=.0021 * (1-.64*P.adsT) * (wpn.current.sensMul || 1);
  P.yaw -= e.movementX*sens; P.pitch=THREE.MathUtils.clamp(P.pitch-e.movementY*sens,-1.45,1.45);
});
addEventListener('mousedown',e=>{if(!running||paused||!P.alive||document.pointerLockElement!==canvas)return;if(e.button===0)wpn.triggerDown();if(e.button===2)P.ads=true;});
addEventListener('mouseup',e=>{if(e.button===0)wpn.triggerUp();if(e.button===2)P.ads=false;});
addEventListener('wheel',e=>{if(running&&!paused&&P.alive)wpn.cycle(Math.sign(e.deltaY));});

function updateWaves(dt) {
  if(wave.queue.length===0 && swarm.list.length===0) {
    if(wave.n>0 && !wave.cleared) {
      wave.cleared=true; wave.breakTime=5;
      banner('SECTOR CLEAR','AMMUNITION RESUPPLIED / NEXT WAVE IN 5');
      for(const w of (wpn.weapons||[])) w.reserve=Math.max(w.reserve,w.capacity*5||90);
    }
    wave.breakTime-=dt;
    if(wave.breakTime<=0) {
      wave.n++; wave.cleared=false;
      const total=Math.min(60,10+wave.n*4);
      for(let i=0;i<total;i++) wave.queue.push(wave.n>1 && i%9===0?'heavy':i%4===0?'drone':'grunt');
      wave.timer=0;
      banner(`WAVE ${String(wave.n).padStart(2,'0')}`,`${total} HOSTILES / STAY MOBILE`); audio.waveStart();
    }
  }
  if(wave.queue.length) {
    wave.timer-=dt;
    if(wave.timer<=0){swarm.spawn(wave.queue.pop());wave.timer=Math.max(.18,.8-wave.n*.05);}
  }
}
function resolveAxis(axis) {
  for(const c of swarm.colliders) {
    if(P.pos.y-1.7 >= c.height-.08)continue;
    const dx=P.pos.x-c.x,dz=P.pos.z-c.z;
    if(Math.abs(dx)<c.hx+.36 && Math.abs(dz)<c.hz+.36){
      P.pos[axis]=c[axis]+Math.sign(axis==='x'?dx:dz)*(c[axis==='x'?'hx':'hz']+.36);P.vel[axis]=0;
    }
  }
}
function updatePlayer(dt) {
  P.adsT=THREE.MathUtils.clamp(P.adsT+(P.ads&&wpn.canAds()?1:-1)*dt*7.5,0,1);
  const ix=Number(!!keys.KeyD)-Number(!!keys.KeyA), iz=Number(!!keys.KeyS)-Number(!!keys.KeyW);
  P.sprint=!!(keys.ShiftLeft||keys.ShiftRight)&&iz<0&&P.adsT<.1;
  const speed=(P.sprint?11.5:7.2)*(1-.45*P.adsT), len=Math.hypot(ix,iz)||1;
  const cos=Math.cos(P.yaw),sin=Math.sin(P.yaw),acc=1-Math.exp(-(P.onGround?14:3.5)*dt);
  P.vel.x+=((ix*cos+iz*sin)/len*speed-P.vel.x)*acc;
  P.vel.z+=((-ix*sin+iz*cos)/len*speed-P.vel.z)*acc;
  if(keys.Space&&P.onGround){P.vel.y=8.4;P.onGround=false;audio.jump();}
  P.vel.y-=24*dt;
  const oldFeet=P.pos.y-1.7;
  P.pos.x+=P.vel.x*dt;resolveAxis('x');P.pos.z+=P.vel.z*dt;resolveAxis('z');P.pos.y+=P.vel.y*dt;
  let ground=0;
  for(const c of swarm.colliders){if(Math.abs(P.pos.x-c.x)<c.hx+.22&&Math.abs(P.pos.z-c.z)<c.hz+.22&&oldFeet>=c.height-.1)ground=Math.max(ground,c.height);}
  if(P.pos.y<=ground+1.7){if(!P.onGround&&P.vel.y<-6){audio.land();P.shake.y-=.07;}P.pos.y=ground+1.7;P.vel.y=0;P.onGround=true;}else P.onGround=false;
  const r=Math.hypot(P.pos.x,P.pos.z);if(r>53.8){P.pos.x*=53.8/r;P.pos.z*=53.8/r;}
  padCooldown-=dt;
  if(padCooldown<=0&&P.onGround)for(const pad of arena.pads||[]){if(Math.hypot(P.pos.x-pad.x,P.pos.z-pad.z)<2.3){P.vel.y=13;P.onGround=false;padCooldown=1;audio.jump();break;}}
  const moving=Math.hypot(P.vel.x,P.vel.z)>.5&&P.onGround;
  P.bobT+=dt*(P.sprint?13:9.5)*Number(moving);P.bobAmt+=((moving?1:0)-P.bobAmt)*Math.min(1,dt*8);
  P.kickPitch*=Math.exp(-dt*6);P.kickYaw*=Math.exp(-dt*7);P.shake.multiplyScalar(Math.exp(-dt*11));
  if(t-P.lastDamageT>4)P.hp=Math.min(100,P.hp+dt*22);
  P.comboT-=dt;if(P.comboT<=0)P.combo=0;
}
function updateCamera(dt) {
  const bobX=Math.cos(P.bobT)*.035*P.bobAmt*(1-P.adsT*.9);
  const bobY=Math.abs(Math.sin(P.bobT))*.045*P.bobAmt*(1-P.adsT*.9);
  camera.position.copy(P.pos);camera.position.y+=bobY+P.shake.y;
  camEuler.set(P.pitch+P.kickPitch,P.yaw+P.kickYaw,bobX*.4+P.shake.x,'YXZ');camera.quaternion.setFromEuler(camEuler);
  const target=75-38*P.adsT*wpn.current.adsZoom+(P.sprint?6:0)*(1-P.adsT);
  camera.fov+=(target-camera.fov)*(1-Math.exp(-dt*13));camera.updateProjectionMatrix();camera.updateMatrixWorld();
}
function hud(dt) {
  const w=wpn.current;
  $('mag').textContent=w.mag;$('res').textContent='/ '+w.reserve;$('wname').textContent=w.name;$('firemode').textContent=w.modeLabel;
  $('hpfill').style.width=P.hp+'%';$('hpfill').style.background=P.hp<30?'#ff6336':'#b2e6d2';$('hpnum').textContent=`+ ${Math.ceil(P.hp)} / 100`;
  $('wave-num').textContent='WAVE '+String(wave.n||1).padStart(2,'0');$('wave-sub').textContent=`${swarm.list.length+wave.queue.length} HOSTILES REMAINING`;
  $('score').textContent=P.score.toLocaleString()+' PTS';$('combo').style.opacity=P.combo>=3?1:0;
  hitTime=Math.max(0,hitTime-dt);$('hitmark').style.opacity=hitTime/.16;
  bannerTime=Math.max(0,bannerTime-dt);$('banner').style.opacity=Math.min(1,bannerTime*2);
  $('dmgflash').style.opacity=Math.max((1-P.hp/100)*.35,Math.max(0,1-(t-P.lastDamageT)*2)*.8);
}
// Read-only telemetry for diagnostics; no gameplay mutation hooks.
window.voidbreaker={snapshot:()=>({running,paused,alive:P.alive,hp:P.hp,score:P.score,kills:P.kills,wave:wave.n,enemies:swarm.list.length,weapon:wpn.current.name,mag:wpn.current.mag,reserve:wpn.current.reserve,ads:P.adsT,fov:camera.fov,position:P.pos.toArray(),drawCalls:renderer.info.render.calls})};
function tick(now) {
  requestAnimationFrame(tick);
  const dt=Math.min(.04,(now-last)/1000);last=now;visualTime+=dt;
  if(!running) {
    camera.position.set(29+Math.sin(visualTime*.06)*2+mouseX*.8,16+mouseY*.7,35);
    camera.lookAt(-3,3,-6);camera.fov=60;camera.updateProjectionMatrix();
    camera.visible=false;post.render(visualTime);camera.visible=true;return;
  }
  if(!paused && P.alive){t+=dt;updatePlayer(dt);updateCamera(dt);updateWaves(dt);wpn.update(dt,t);swarm.update(dt,t,P,damagePlayer);fx.update(dt,t);hud(dt);}
  post.render(visualTime,1-P.hp/100);
}
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);post.resize(innerWidth,innerHeight);});
$('loading').style.display='none';
requestAnimationFrame(tick);
