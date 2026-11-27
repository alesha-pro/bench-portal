import {clamp, mix, ramp} from './paint.js';
export const lines = ['A flock stirs.', 'The rails sing.', 'Small boats sail.', 'Stars go home.'];
export const knocks=[];
let next=.72;
for(let row=0;row<lines.length;row++){
  for(let col=0;col<lines[row].length;col++){
    if(row===0 && col===0)continue;
    const ch=lines[row][col];
    knocks.push({t:+next.toFixed(4),row,col,ch});
    next += [.158,.216,.174,.181,.237,.15,.185][(col+row*2)%7]+(ch===' '?.095:0);
  }
  next+=.63;
}
export const returns=lines.map((_,row)=>knocks.filter(k=>k.row===row).at(-1).t+.29);
export const pitch=9.5, lead=23;
export function mechanics(t){
  let row=0,col=1,feed=0,stroke=null;
  for(const k of knocks){if(k.t>t)break;row=k.row;col=k.col+1;stroke=k;}
  const slide=ramp(t,returns[row],returns[row]+.34);
  const settled=row===3;
  const age=stroke?t-stroke.t:9;
  const advance=stroke ? 1-ramp(age,.045,.112) : 0;
  const carriage=((col-advance)*(1-slide)+(settled?7:0)*slide)*pitch;
  feed=(row+slide)*lead;
  const refresh=ramp(t,38.3,40.5);
  return {x:mix(542-carriage,542-pitch,refresh),feed:mix(feed,0,refresh),stroke,
    age,refresh};
}
export const glyphX=(col)=>25+col*pitch;
export function glyphPoint(t,row,col){const m=mechanics(t);return [m.x+glyphX(col),409+row*lead-m.feed];}
export const keyRows=['1234567890','QWERTYUIOP','ASDFGHJKL','ZXCVBNM,.'];
export function keyPoint(ch){
  let r=keyRows.findIndex(s=>s.includes(ch.toUpperCase()));if(r<0)return [552,594,3];
  let i=keyRows[r].indexOf(ch.toUpperCase());
  return [411+i*(31.3+r*.75)+[0,4,15,25][r]-r*6,493+r*23-i*.40,r];
}
export const awake=t=>ramp(t,28.1,30.6)*(1-ramp(t,39.1,43.4));
export const opening=t=>ramp(t,28,31.3)*(1-ramp(t,40.8,44));
export function cubic(a,b,c,d,u) {
  u=clamp(u);const v=1-u;return [v*v*v*a[0]+3*v*v*u*b[0]+3*v*u*u*c[0]+u*u*u*d[0],v*v*v*a[1]+3*v*v*u*b[1]+3*v*u*u*c[1]+u*u*u*d[1]];
}
