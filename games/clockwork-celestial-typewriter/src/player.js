import {createFilm,DURATION} from './film.js';
const canvas=document.querySelector('#film'),play=document.querySelector('#play'),time=document.querySelector('#time'),seek=document.querySelector('#seek'),glow=document.querySelector('#glow');
const paint=createFilm(canvas);
let t=0,playing=true,last=performance.now(),request=0;
function draw(){
  paint(t,Number(glow.value));seek.value=t;
  time.value='0:'+String(Math.floor(t)).padStart(2,'0');seek.style.setProperty('--pct',(100*t/DURATION)+'%');
  glow.style.setProperty('--pct',(100*glow.value/glow.max)+'%');
}
function frame(now){if(!playing)return;t=(t+(now-last)/1000)%DURATION;last=now;draw();request=requestAnimationFrame(frame);}
function setPlaying(value){
  cancelAnimationFrame(request);playing=value;play.classList.toggle('paused',!playing);
  play.setAttribute('aria-label',playing?'Pause':'Play');last=performance.now();if(value)request=requestAnimationFrame(frame);
}
function resize(){
  const w=Math.min(innerWidth,innerHeight*16/9)*Math.min(devicePixelRatio,2);
  canvas.width=Math.max(16,Math.round(w/16)*16);canvas.height=canvas.width*9/16;draw();
}
window.TOTAL_DURATION=DURATION;
window.renderAt=(seconds)=>{setPlaying(false);t=((Number(seconds)%DURATION)+DURATION)%DURATION;draw();};
function toggleHud(){document.body.classList.toggle('clean');}
play.addEventListener('click',()=>setPlaying(!playing));
seek.addEventListener('input',()=>window.renderAt(Number(seek.value)));
glow.addEventListener('input',draw);
document.querySelector('#hide').addEventListener('click',toggleHud);
canvas.addEventListener('click',()=>{if(document.body.classList.contains('clean'))toggleHud();});
document.addEventListener('keydown',e=>{
  if(e.ctrlKey||e.altKey||e.metaKey||e.repeat)return;
  if(e.key.toLowerCase()==='h')toggleHud();
  if(e.code==='Space' && !['INPUT','BUTTON'].includes(e.target.tagName)){e.preventDefault();setPlaying(!playing);}
});
window.addEventListener('resize',resize);
resize();setPlaying(true);
