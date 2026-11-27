// Drawing coordinates are a 1200 × 675 picture-book spread.
export const W = 1200, H = 675, TAU = Math.PI * 2;
export const ink = '#31262e', gold = '#ffce78', cream = '#fff0c2';
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const mix = (a,b,k) => a+(b-a)*k;
export const ease = x => {x=clamp(x);return x*x*(3-2*x);};
export const ramp = (t,a,b) => ease((t-a)/(b-a));
export const wave = (t,cycles,phase=0) => Math.sin(TAU*t*cycles/45+phase);
export function random(seed) {
  let s=seed>>>0;
  return () => {s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};
}
export function grad(c,x,y,xx,yy,stops) {
  const g=c.createLinearGradient(x,y,xx,yy);
  for(const [i,col] of stops)g.addColorStop(i,col);
  return g;
}
export function glow(c,x,y,rx,ry,rgb,amount) {
  if(amount<=0)return;
  c.save();c.translate(x,y);c.scale(rx,ry);
  const g=c.createRadialGradient(0,0,0,0,0,1);
  g.addColorStop(0,'rgba('+rgb+','+Math.min(.96,amount)+')');
  g.addColorStop(.44,'rgba('+rgb+','+Math.min(.8,amount*.48)+')');
  g.addColorStop(1,'rgba('+rgb+',0)');
  c.fillStyle=g;c.fillRect(-1,-1,2,2);c.restore();
}
const paths = new Map();
export function path(c,d,fill,stroke,width=1.5) {
  let p=paths.get(d);
  if(!p){p=new Path2D(d);if(paths.size<40000)paths.set(d,p);}
  if(fill){c.fillStyle=fill;c.fill(p);}
  if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke(p);}
}
export function line(c,pts,col,width=1) {
  c.beginPath();c.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)c.lineTo(pts[i],pts[i+1]);
  c.strokeStyle=col;c.lineWidth=width;c.stroke();
}
export function oval(c,x,y,rx,ry,fill,stroke=null,w=1,tilt=0) {
  c.beginPath();c.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),tilt,0,TAU);
  if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.lineWidth=w;c.strokeStyle=stroke;c.stroke();}
}
export function box(c,x,y,w,h,col){c.fillStyle=col;c.fillRect(x,y,w,h);}
export function rr(c,x,y,w,h,r,fill,stroke=null,lw=1){
  c.beginPath();c.roundRect(x,y,w,h,r);
  if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=lw;c.stroke();}
}
export function star(c,x,y,r,col,turn=0) {
  c.save();c.translate(x,y);c.rotate(turn);c.scale(r,r);
  path(c,'M0 -1 Q.12 -.14 .77 0 Q.13 .12 0 1 Q-.12 .14 -.77 0 Q-.14 -.12 0 -1Z',col);c.restore();
}
export function text(c,s,x,y,size,col,family='Georgia,serif',align='left',style=''){
  c.font=(style?style+' ':'')+size+'px '+family;c.fillStyle=col;c.textAlign=align;c.fillText(s,x,y);
}
export function layer(w,h,fn,scale=1.65){
  const canvas=document.createElement('canvas');canvas.width=Math.ceil(w*scale);canvas.height=Math.ceil(h*scale);
  const ctx=canvas.getContext('2d');ctx.scale(canvas.width/w,canvas.height/h);ctx.lineJoin=ctx.lineCap='round';
  fn(ctx);return canvas;
}
export function mask(c,d,fn) {c.save();c.clip(new Path2D(d));fn();c.restore();}
export function scratches(c,seed,n,x,y,w,h,palette,span=10,slope=0){
  const r=random(seed);
  for(let i=0;i<n;i++){
    const a=x+w*r(),b=y+h*r(),len=(.1+r()**2)*span;
    line(c,[a,b,a+len*.55,b+len*slope*.48-.4*r(),a+len,b+len*slope],palette[i%palette.length],.35+1.25*r()**2);
  }
}
export function paperTexture(){
  const w=512, tile=document.createElement('canvas');tile.width=tile.height=w;const c=tile.getContext('2d');
  const img=c.createImageData(w,w),r=random(1309);
  for(let i=0;i<img.data.length;i+=4){const v=r(),light=v>.50;img.data[i]=light?255:34;img.data[i+1]=light?239:21;img.data[i+2]=light?201:35;img.data[i+3]=Math.floor(Math.abs(v-.5)*43);}
  c.putImageData(img,0,0);
  for(let i=0;i<3550;i++){const x=r()*w,y=r()*w;line(c,[x,y,x+r()*3+.4,y-r()*1.4],i%2?'#ffe9b31b':'#311d341c',.45+r()*.7);}
  return tile;
}
// An engraved leaf spray, painted about the stem before its highlights are added.
export function sprig(c,x,y,size,angle,col,vein){
  c.save();c.translate(x,y);c.rotate(angle);c.scale(size,size);
  path(c,'M0 0 Q9 -15 3 -39',null,col,1.3);
  for(let i=0;i<4;i++){const yy=-6-i*7,xx=3+Math.sin(i)*2;
    for(const side of [-1,1]){c.save();c.translate(xx,yy);c.scale(side,1);
      path(c,'M0 0 Q-10 -1 -13 -10 Q-3 -10 0 0Z',col);if(vein)line(c,[-2,-2,-10,-8],vein,.65);c.restore();}}
  path(c,'M3 -36 Q-2 -45 2 -49 Q8 -43 3 -36Z',col);c.restore();
}
