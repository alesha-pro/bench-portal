import {TAU,ink,gold,clamp,mix,ramp,ease,glow,oval,path,line,rr,star,text,random} from './paint.js';
import {lines,glyphPoint,cubic} from './timing.js';
import {liftTime} from './machine.js';
const navy='#253947',pale='#f8d697';
// Each word keeps its paper coordinates until its individual glyphs lift.
const actors=[
  {kind:'bird',row:0,lo:0,hi:3,end:[554,186],size:1.03},
  {kind:'bird',row:0,lo:3,hi:8,end:[674,166],size:.74},
  {kind:'bird',row:0,lo:8,hi:11,end:[624,109],size:.91},
  {kind:'bird',row:0,lo:11,hi:14,end:[768,132],size:.67},
  {kind:'train',row:1,lo:0,hi:15,end:[326,202],size:.92},
  {kind:'boat',row:2,lo:0,hi:6,end:[419,301],size:.91},
  {kind:'boat',row:2,lo:6,hi:12,end:[699,277],size:.79},
  {kind:'boat',row:2,lo:12,hi:17,end:[816,253],size:.57},
  {kind:'stars',row:3,lo:0,hi:6,end:[414,99],size:.86},
  {kind:'stars',row:3,lo:6,hi:14,end:[840,196],size:.65},
];
actors.forEach((a,i)=>{a.id=i;a.birth=liftTime(a.row,a.lo)+(i===1?.13:i===3?.24:0);a.origin=glyphPoint(a.birth,a.row,(a.lo+a.hi-1)/2);
  a.leave=28.8+[0,.7,.35,1.1,1.0,1.48,.9,1.55,.65,1.8][i];
  a.finish=37.3+[0,-.55,.18,-.9,.55,.45,-.08,.22,-.85,-.6][i];});
function roaming(a,t){
  const v=t-a.birth-2.32, d=a.id;
  if(a.kind==='train'){
    const th=Math.max(0,v)*.71;
    return [180+146*Math.cos(th),202+49*Math.sin(th)-8*(1-Math.cos(th))];}
  const [x,y]=a.end,f=a.kind==='bird';
  return [x+(f?63:28)*(Math.sin(v*(f?.75:.69)+d)-Math.sin(d)),y+(f?28:15)*(Math.sin(v*(f?1.1:.89)+d*.7)-Math.sin(d*.7))];
}
function position(a,t){
  const elapsed=t-a.birth;
  if(elapsed<2.32){const u=ease(elapsed/2.32),[ox,oy]=a.origin,[ex,ey]=a.end;
    return cubic([ox,oy],[ox+55-11*a.id,oy-55],[ex+(a.kind==='train'?100:-73),ey+35],a.end,u);}
  if(t<=a.leave)return roaming(a,t);
  const from=roaming(a,a.leave),u=clamp((t-a.leave)/(a.finish-a.leave));
  // Through the near window, then banking low over the distant, lit roofs.
  const gate=[849+a.id*14,143+a.id*12],dest=[
    [1110,255],[999,273],[884,247],[1071,220],[1040,321],[790,297],[908,338],[997,279],[886,218],[1103,301]][a.id];
  if(u<.55)return cubic(from,[from[0]+52,from[1]-45],[gate[0]-85,gate[1]+40],gate,ease(u/.55));
  return cubic(gate,[gate[0]+130,gate[1]-83],[dest[0]+45,dest[1]-64],dest,ease((u-.55)/.45));
}
function bird(c,t,id){
  const beat=t*6.35+id*1.8;
  // The primary feathers sweep down past the body, then fold in on the upstroke.
  const flap=Math.sin(beat)*(.60+.38*Math.sin(t*1.03+id));
  const tipY=-17+flap*33,tipX=-48+7*Math.cos(beat);
  path(c,'M-6 -3 Q-20 -2 -44 8 L-28 7 L-42 19 Q-21 8 -7 7Z',navy,'#efc782',1.35);
  path(c,'M-41 8 L-12 0 M-36 14 L-15 4',null,'#a2ac9b',.95);
  const far=-12-flap*30;
  path(c,`M-4 1 Q-1 ${far*.8} -19 ${far-18} Q-1 ${far-9} 11 ${far*.35} Q16 -1 10 5Z`,'#6f8c94','#e8ca90',1.2);
  const d=`M-11 0 C-18 ${tipY*.45} -33 ${tipY*.74} ${tipX} ${tipY} Q${tipX+13} ${tipY+1} -14 ${tipY*.65-4} Q0 ${tipY*.64-3} 11 -4 Q18 -6 20 -7 Q28 -9 32 -3 L40 -1 L32 1 Q27 8 18 10 Q3 13 -10 4 L-16 2Z`;
  path(c,d,navy,'#ffdb8e',1.6);
  for(let k=0;k<5;k++){
    const x=tipX+4+k*5,y=tipY+(Math.abs(tipY)*.08)*k;
    path(c,`M${x} ${y} Q${x+9} ${y-1} ${-9+k*3.7} ${-3+k*.5}`,null,k===0?'#edce91':'#889f9c',k===0?1.2:.8);}
  path(c,'M-11 2 Q5 8 17 4 Q21 1 26 2 L29 4 Q24 10 15 11 Q1 11 -11 2Z','#eed2a0');
  path(c,'M17 4 Q21 0 27 1 L30 3 Q25 7 20 7Z','#be7860');
  oval(c,25.6,-1.4,1.65,1.65,'#f6d58e');oval(c,26,-1.5,.78,.83,ink);
  line(c,[31,.1,38,1],'#f8d492',1);star(c,-11,-9,2,'#f6d290');
}
function banking(c,t,id){
  const lift=Math.sin(t*6.35+id*1.8)*13;
  for(const dir of [-1,1]){c.save();c.scale(dir,1);
    path(c,`M1 3 Q19 -4 38 ${-14+lift} Q27 ${-3+lift} 18 4 Q7 10 1 9Z`,navy,'#f6d08d',1.2);
    path(c,`M8 4 Q22 0 34 ${-10+lift}`,null,'#91a6a3',.85);c.restore();}
  path(c,'M-4 4 Q-7 -6 0 -7 Q7 -6 5 4 L1 14Z',navy,'#f1cd90',1.1);
  oval(c,0,3,4.8,4.6,'#e2af80');path(c,'M-2 0 L0 3 L2 0Z','#966750');
}
function boilerEnd(c){
  rr(c,-12,-26,24,28,4,navy,'#e1c28b',1.2);
  oval(c,0,-10,10,10,'#52636a','#e0bb7d',1.4);
  oval(c,0,-10,6.2,6.2,null,'#a7aa90',.8);
  oval(c,0,-20,3.7,3.7,'#ffdda2','#98764f',.9);
  path(c,'M-8 0 L-13 6 L12 6 L8 0Z','#48515b','#d5ad78',1);
}
function coach(c,x,w){
  c.save();c.translate(x,0);
  rr(c,0,-17,w,17,1.8,'#3d5261','#e7c48a',1.35);
  for(let i=3;i<w-3;i+=8){rr(c,i,-14,5.6,7.7,1,'#f6cf8b','#293c48',.75);line(c,[i+2.6,-14,i+2.6,-6.4],'#9d775e',.65);}
  path(c,`M-2 -17 Q-2 -21 2 -21 L${w-1} -21 L${w+3} -18 L${w+1} -16Z`,navy,'#edca90',1.1);
  line(c,[1,-3,w-1,-3],'#c59b6d',1);c.restore();
}
function train(c,t){
  coach(c,-87,34);coach(c,-47,25);
  line(c,[-92,1,55,1],'#e6c083',2.6);line(c,[-88,4,47,4],navy,2.2);
  rr(c,-18,-31,23,30,1.8,'#384853','#f0ca87',1.6);
  rr(c,-15,-27,12,13,2,'#eebf79',ink,1.1);line(c,[-9,-26,-9,-15],'#755b49',1.4);
  path(c,'M-22 -31 L-18 -35 L6 -35 L10 -31 L8 -29 L-22 -29Z','#39424c','#f4d19c',1.2);
  rr(c,3,-23,40,23,6,'#506268','#f0cb88',1.5);
  for(let i=8;i<43;i+=12){path(c,`M${i} -22 q-3 8 0 19`,null,'#bd9566',2.4);}
  path(c,'M24 -24 L26 -35 L22 -40 L23 -42 L37 -42 L38 -40 L34 -34 L35 -22Z',navy,'#f9d79a',1.3);
  rr(c,23,-42.5,15,3,1,'#c19b6c',ink,.7);
  rr(c,8,-28,9,6,3,'#c29764','#6b6052',1);
  oval(c,43,-10,5,11,'#344752','#e1bf82',1.4);oval(c,45,-18,4.3,4.4,'#ffe3a4','#685743',1.3);
  path(c,'M44 -4 L56 7 L42 7Z','#48515a','#e3bc7e',1.2);
  for(let q=0;q<3;q++)line(c,[45+q*2,-2+q,44+q*4,6],'#e5c286',.7);
  for(const [x,r] of [[-81,4],[-61,4],[-43,4],[-28,4],[-11,7],[8,7],[27,6],[42,4]]){
    oval(c,x,4,r,r,navy,'#e9bf81',1.3);oval(c,x,4,r*.70,r*.70,'#a06852');
    for(let i=0;i<5;i++){const u=t*6+i*TAU/5;line(c,[x,4,x+Math.cos(u)*r*.8,4+Math.sin(u)*r*.8],'#e4be88',.8);}
    oval(c,x,4,1.4,1.4,'#ffe0a2');}
  const ax=2.8*Math.cos(t*6),ay=2.8*Math.sin(t*6);
  line(c,[-11+ax,4+ay,27+ax,4+ay],'#342f34',2.9);
  line(c,[-11+ax,3.5+ay,27+ax,3.5+ay],'#eac793',1.5);
  // Discrete curls of steam swell into paper-coloured pencil spirals.
  for(let i=0;i<7;i++){
    const u=(t*.56+i/7)%1; c.save();c.globalAlpha*=Math.sin(u*Math.PI)*.88;
    c.translate(30-81*u,-44-24*u-6*Math.sin(Math.PI*u));c.scale(.4+u*.77,.4+u*.77);
    path(c,'M5 2 Q13 -1 9 -6 Q8 -11 2 -10 Q0 -17 -6 -15 Q-11 -15 -11 -10 Q-21 -9 -18 -3 Q-17 4 -9 4 Q-2 11 5 2Z','#e3ca9e','#ecca93',1.4);
    path(c,'M-12 -3 Q-14 -9 -8 -9 Q-2 -10 -3 -5 Q-4 -2 -7 -4',null,'#8e9090',1);c.restore();}
}
function boat(c,t,id){
  c.rotate(.08*Math.sin(t*1.7+id));
  path(c,'M-49 0 L-12 -8 L2 -31 L13 -13 L43 -18 L37 3 L15 16 L-24 15Z','#f4deac','#483f40',1.9);
  path(c,'M-48 0 L-16 -2 L2 -30 L6 -4 L39 -16 L13 12 L-24 15Z','#f0c88b','#7c644d',1.1);
  path(c,'M-47 0 L-13 6 L41 -17 L24 9 L10 16 L-24 15Z','#f6dca7','#584a43',1.3);
  path(c,'M-47 0 L-12 6 L8 15 L-25 14Z','#bd8e65');
  path(c,'M-12 6 L-2 11 L14 10 M2 -28 L-5 -3 L5 -4',null,'#b39a71',1);
  for(let i=0;i<4;i++){line(c,[-37+i*3,4+i*2,-21+i*3,6+i*2],'#816d57',.75);
    line(c,[7+i*3,5-i*1.5,18+i*3,i*-1.7],'#a48a60',.9);}
  path(c,'M-48 0 L-23 16 L11 17 L26 9 L42 -16',null,'#ffc975',1.6);
  star(c,-1,-14,3,'#c59a5f');
}
const figures=[[[-47,2],[-28,-13],[-16,-7],[-5,-23],[-10,-40],[0,-28],[7,-39],[8,-22],[18,-10],[10,-7],[27,8],[10,3],[-3,7],[-24,5],[-42,12]],
  [[-39,12],[-23,6],[-13,-8],[4,-11],[13,-20],[31,-16],[28,-3],[6,-6]]];
function constellation(c,t,id){
  const pts=figures[id%2];
  line(c,pts.flat(),'#f7d58e',1.05);
  for(let j=0;j<pts.length;j++){const [x,y]=pts[j],r=2.5+1.3*Math.sin(t*2.3+j);
    oval(c,x,y,1.4,1.4,'#ffedc6');if(j%2===0)star(c,x,y,r+1.5,'#ffda8a');}
}
function scales(a,t){
  return a.size*(1-.92*ramp(t,a.leave+3.45,a.finish+.20))*(.56+.44*ramp(t,a.birth+.5,a.birth+2.2));
}
function facing(a,t){
  if(a.kind==='train'){
    const v=(t-a.birth-2.32)*.71;
    const turn=mix(-1,-Math.tanh(5*Math.sin(v)),ramp(t,a.birth+2.32,a.birth+2.77));
    return mix(turn,1,ramp(t,a.leave,a.leave+1));}
  if(a.kind!=='bird')return 1;
  const dx=position(a,t+.04)[0]-position(a,t-.04)[0];
  return Math.tanh(1.18*dx);
}
function actor(c,a,t,gl){
  if(t<a.birth-.05 || t>a.finish+.1)return;
  const [x,y]=position(a,t),progress=ramp(t,a.birth+.27,a.birth+1.63);
  const opacity=progress*(1-ramp(t,a.finish-.68,a.finish));
  const size=scales(a,t);
  if(opacity>.002){
    c.save();c.globalAlpha*=opacity;
    // A thin illuminated wake follows the actual curved path through time.
    const r=random(180+a.id);const n=a.kind==='train'?43:27;
    for(let j=0;j<n;j++){const u=(j+.2)/n;
      const [px,py]=position(a,Math.max(a.birth,t-u*(a.kind==='train'?.93:.68)));
      const ax=(r()-.5)*u*17,ay=(r()-.5)*u*14;
      c.save();c.globalAlpha*=gl*(1-u)*.8;oval(c,px+ax,py+ay,.6+r()*1.15,.55+r(),pale);c.restore();}
    glow(c,x,y,Math.max(12,(a.kind==='train'?106:67)*size),Math.max(9,43*size),'255,179,61',.44*gl);
    c.translate(x,y);const dir=facing(a,t);
    c.rotate(a.kind==='bird'?clamp((position(a,t+.05)[1]-y)*.12,-.42,.42)*Math.sign(dir):a.kind==='train'?.045*Math.sin(t*3):-.045);
    c.scale(size,size);
    const profile=ramp(Math.abs(dir),.09,.79);
    if(profile<1){c.save();c.globalAlpha*=1-profile;
      if(a.kind==='bird')banking(c,t,a.id);
      if(a.kind==='train')boilerEnd(c);
      c.restore();}
    c.scale(dir,1);c.globalAlpha*=profile;
    if(a.kind==='bird')bird(c,t,a.id);
    else if(a.kind==='train')train(c,t);
    else if(a.kind==='boat')boat(c,t,a.id);
    else constellation(c,t,a.id);
    c.restore();
  }
}
function peel(c,t,gl){
  for(const a of actors){for(let j=a.lo;j<a.hi;j++){
    const ch=lines[a.row][j];if(ch===' ')continue;
    const birth=liftTime(a.row,j),e=t-birth;if(e<0||e>1.85)continue;
    const p=e/1.85,from=glyphPoint(birth,a.row,j),to=position(a,t),offset=j-(a.lo+a.hi)/2;
    const ctrl=[from[0]+offset*2+36*Math.sin(j*.7),from[1]-40-j%4*6];
    const v=cubic(from,ctrl,[to[0]-25+offset*9,to[1]+18*Math.cos(j*1.6)], [to[0]+offset*2,to[1]],ease(p));
    c.save();c.translate(...v);c.rotate(Math.sin(p*Math.PI)*(offset*.19+.6));c.globalAlpha=1-ramp(p,.73,1);
    glow(c,1,-5,17,16,'255,192,71',.52*gl);text(c,ch,0,0,16+4*Math.sin(p*Math.PI),p<.26?'#986634':'#ffde91','"Courier New",monospace','left','bold');
    for(let k=0;k<3;k++){const u=Math.sin(p*Math.PI);star(c,-2-k*4*u,3+k*3*u,1.4*u*gl,gold);}
    c.restore();
  }}
}
function trainBehind(t){
  const a=actors[4];return t>a.birth+2.32&&t<a.leave&&Math.sin((t-a.birth-2.32)*.71)<-.08;
}
function rails(c,t,gl,front){
  const strength=ramp(t,15.2,17.2)*(1-ramp(t,28.8,31.7));
  if(strength<=0)return;
  c.save();c.globalAlpha=.61*strength*gl;
  const begin=front?0:Math.PI,end=begin+Math.PI;
  for(const dy of [11,14]){
    c.beginPath();for(let i=0;i<=72;i++){const th=begin+(end-begin)*i/72,x=180+146*Math.cos(th),y=202+49*Math.sin(th)-8*(1-Math.cos(th))+dy;
      if(i)c.lineTo(x,y);else c.moveTo(x,y);}
    c.strokeStyle=dy===11?'#ffda84':'#b48d63';c.lineWidth=dy===11?1:.65;c.stroke();}
  for(let i=0;i<29;i++){const th=begin+i*Math.PI/29,x=180+146*Math.cos(th),y=202+49*Math.sin(th)-8*(1-Math.cos(th));
    line(c,[x-1,y+10,x+2,y+15],'#edc388',.8);if(i%5===0)star(c,x,y+10,1.6,gold);}
  c.restore();
}
export function backTrain(c,t,gl){rails(c,t,gl,false);if(trainBehind(t))actor(c,actors[4],t,gl);}
export function flight(c,t,gl){
  rails(c,t,gl,true);peel(c,t,gl);
  for(const a of actors){if(a.kind==='train'&&trainBehind(t))continue;actor(c,a,t,gl);}
  // Loose punctuation and capitals carry the last fragments of the poem out.
  for(let i=0;i<26;i++){const start=28.2+(i%8)*.43,end=start+5.5+i%4*.36;
    if(t<start||t>end)continue;const u=(t-start)/(end-start);
    const p=cubic([532+i%7*21,321-i%4*17],[602,165-i%4*28],[950,99+i%6*21],[1056-i%5*38,294-i%3*18],u);
    c.save();c.translate(...p);c.rotate(Math.sin(i+t*1.7)*.35);c.globalAlpha=Math.sin(u*Math.PI)*.95;
    text(c,'flight. home,'[i%13],0,0,15*(1-.65*u),gold,'Georgia,serif','center','italic');
    c.restore();}
}
function returnPoint(t){
  const dest=glyphPoint(44.5,0,0);
  if(t<40.25)return cubic([990,268],[1035,195],[941,147],[840,168],ramp(t,37.8,40.25));
  return cubic([840,168],[701,155],[570,318],dest,ramp(t,40.25,44.58));
}
export function returning(c,t,gl){
  if(t<37.8||t>44.75)return;
  const [x,y]=returnPoint(t),sz=16+16*ramp(t,37.8,39.3)*(1-ramp(t,42.4,44.58)),a=ramp(t,37.8,38.7)*(1-ramp(t,44.43,44.75));
  c.save();c.globalAlpha=a;
  for(let i=1;i<=18;i++){const [px,py]=returnPoint(Math.max(37.8,t-i*.038));const u=i/19;
    c.save();c.globalAlpha*=(1-u)*.68;star(c,px+4*Math.sin(i),py+Math.sin(i*4)*u*11,(1-u)*2.7,gold);c.restore();}
  glow(c,x+4,y-8,44,39,'255,190,78',.64*gl);
  c.translate(x,y);c.rotate(.34*Math.sin((t-37.8)*2)*(1-ramp(t,43.7,44.58)));text(c,'A',0,0,sz,'#ffe3a0','"Courier New",monospace','left','bold');c.restore();
}
