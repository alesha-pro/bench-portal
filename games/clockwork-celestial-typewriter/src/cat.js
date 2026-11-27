import {grad,glow,oval,path,line,mask,random,scratches,layer,wave,ramp} from './paint.js';
import {awake} from './timing.js';
const outline='#593e39',ginger='#c98755',amber='#e8ad73',stripe='#925a43',bib='#f5d6a2';
function fur(c,seed,n,x,y,w,h,a){
  const r=random(seed);
  for(let i=0;i<n;i++){const xx=x+w*r(),yy=y+h*r(),len=1.2+r()*3.6,ang=a+(xx-x)/w*1.3+.5*r();
    line(c,[xx,yy,xx+Math.cos(ang)*len,yy+Math.sin(ang)*len],i%3?'#f6c58b74':'#8b594b66',.65+r()*.65);}
}
const trunk='M-59 4 Q-57 -25 -22 -44 Q13 -61 52 -44 C74 -37 86 -16 85 5 Q86 15 79 24 Q59 46 12 42 Q-16 44 -45 31 Q-66 23 -59 4Z';
function body(c){
  path(c,trunk,grad(c,0,-51,-4,42,[[0,'#f6c28b'],[.28,'#dca06b'],[.71,'#bc794e'],[1,'#926046']]),outline,2.1);
  mask(c,trunk,()=>{
    for(let i=0;i<7;i++){c.save();c.translate(-34+i*16,-43+Math.cos(i)*4);c.rotate((i-3)*.13);
      path(c,'M-6 -10 Q-7 5 1 17 Q4 22 7 28 Q5 15 2 11 Q10 17 12 21 Q4 4 6 -8Z',i%2?'#a46a4f':'#99614b');c.restore();}
    path(c,'M46 45 Q28 31 37 12 Q45 -4 60 -7 M53 40 Q38 29 45 16',null,'#a16a4d',2.2);
    fur(c,36,770,-62,-51,149,96,-.45);
  });
  path(c,'M-44 9 Q-39 7 -19 17 Q-1 25 21 22 Q10 36 -7 38 L-47 34Z','#ddad79');
}
function head(c,wake,t){
  const d='M-23 -18 Q-26 -28 -24 -45 Q-11 -43 -2 -31 Q9 -35 20 -30 L36 -43 Q40 -28 34 -15 Q45 -4 41 9 L45 12 L37 17 L38 20 Q27 30 12 30 Q5 34 -5 29 Q-20 29 -28 18 L-35 16 L-31 10 Q-34 -4 -23 -18Z';
  path(c,d,grad(c,-29,-30,30,27,[[0,'#f0b57a'],[.53,'#daa06c'],[1,'#b77954']]),outline,2.05);
  path(c,'M-21 -39 Q-14 -38 -6 -29 L-18 -21Z M32 -36 L32 -21 L23 -26Z','#bc7c69','#9a6954',1);
  mask(c,d,()=>{
    path(c,'M-14 -29 Q-11 -19 -5 -13 Q-8 -25 -5 -30 L-1 -32 Q0 -19 5 -15 Q3 -24 8 -33 L14 -31 Q8 -22 10 -15 Q19 -25 22 -29Z','#995b43');
    path(c,'M38 -9 Q25 -13 13 -6 Q27 -8 36 -2 L43 0Z M40 2 Q29 -2 19 1 Q29 3 36 8Z M-30 -9 Q-23 -10 -16 -7 Q-25 -7 -31 -4Z',stripe);
    path(c,'M-33 7 Q-27 3 -21 6 Q-15 4 -9 8 Q-4 14 4 10 Q15 7 21 13 Q13 23 14 32 L-8 38 L-35 23Z',bib);
    fur(c,595,216,-34,-44,78,78,.8);
  });
  // Eyelids uncurl as the head turns towards the moving window light.
  const blink=1-(ramp(t,34.4,34.51)-ramp(t,34.54,34.69))*.96;
  for(const [x,y,s] of [[-21,-4,.78],[4,-4,1]]){
    c.save();c.translate(x,y);c.rotate(-.12);c.scale(s,1);const e=wake*blink;
    if(e>.07){
      oval(c,0,1,6.4,.5+6.3*e,'#f8d795',outline,1.25);
      oval(c,-.5+1.3*ramp(t,32,36),-1.2,2.2,4.4*e,'#433d3a');oval(c,-1.3+1.3*ramp(t,32,36),-2.9*e,1.05,1.25*e,'#fff2cd');
      path(c,`M-7 1 Q-3 ${-11*e} 6 ${-2*e}`,null,outline,1.6);
    }else path(c,'M-6 -1 Q-2 4 5 -1.5',null,outline,2);
    c.restore();}
  path(c,'M-18 7 Q-14 5 -9 7 Q-10 11 -14 12 Q-17 11 -18 7Z','#98645c','#754944',.9);
  path(c,'M-14 12 Q-15 19 -21 16 M-14 12 Q-13 18 -7 17',null,'#806050',1);
  for(const [x,y] of [[-22,11],[-24,14],[-20,14],[-6,11],[-3,13],[-7,14]])oval(c,x,y,.8,.65,'#806758');
  for(let i=0;i<3;i++){
    path(c,`M-22 ${10+i*3} Q-42 ${4+i*5} ${-52+i*2} ${3+i*5}`,null,'#f7dbad',1);
    path(c,`M-1 ${11+i*3} Q18 ${3+i*4} ${31-i} ${2+i*5}`,null,'#f7dbad',.9);}
  path(c,'M-21 -43 L-18 -42 M1 -31 Q8 -34 16 -30',null,'#ffe0ae',1.6);
}
export function catPainter(){
  const torso=layer(155,103,c=>{c.translate(64,55);body(c);},1.95);
  return function(c,t){
    const w=awake(t),breath=wave(t,11)*1.15;
    c.save();c.translate(1042,460);
    glow(c,2,45,119,13,'68,37,37',.44);
    c.save();c.translate(0,40);c.scale(1-breath*.001,1+breath*.008);c.drawImage(torso,-64,-95,155,103);c.restore();
    // The chest and two tucked paws remain grounded while the neck stretches.
    c.save();c.translate(-43,18);
    if(w>.01){
      const top=-20-41*w;
      path(c,`M-27 15 Q-29 -6 -27 ${top+7} L-12 ${top-7} Q3 ${top-9} 12 -20 Q20 -10 30 6 L18 13 Q-5 25 -27 15Z`,
        grad(c,-24,0,17,-26,[[0,'#e5b782'],[.62,'#d29a67'],[1,'#b87953']]),outline,1.4);
      path(c,`M-24 ${top+8} Q-20 ${top+19} -8 ${top+15} L-10 ${top+20} L-4 ${top+19} Q-9 -6 -18 2 L-16 -4 L-23 1Z`,bib);
    }
    c.scale(1,1+w*.36);
    path(c,'M-20 -16 Q-4 -28 13 -14 Q24 -7 27 9 Q17 21 2 20 Q-9 25 -25 13Z','#d29765',outline,1.5);
    path(c,'M-17 -13 Q-9 -5 3 -4 L0 0 L9 -1 L4 4 L11 6 Q4 16 -8 19 Q-20 18 -23 8Z',bib);c.restore();
    for(const [x,y] of [[-64,38],[-44,41]]){
      oval(c,x,y,17,6.5,'#eac191',outline,1.3,-.09);
      path(c,`M${x-10} ${y+4} q0 -3 2 -4 M${x-5} ${y+5} q0 -3 2 -4`,null,'#ac8160',.9);}
    // Big striped tail wraps around the belly; the tip gives a sleepy twitch.
    c.save();c.translate(0,breath*.22);
    const tip=-56+3.8*wave(t,5)*(.15+w*.85);
    const tail=`M78 -6 Q98 11 81 32 Q61 54 23 54 Q-5 54 -29 45 C-40 39 -55 40 ${tip} 34 Q-62 25 -48 25 Q-38 24 -18 30 Q14 40 36 32 Q67 26 66 8Z`;
    path(c,tail,ginger,outline,1.8);
    mask(c,tail,()=>{
      for(let j=0;j<8;j++){const x=-39+j*17,y=30+14*Math.sin(j/7*Math.PI)-j*j*.32;
        path(c,`M${x} ${y-9} q13 7 10 24 l-7 3 q4 -13 -6 -22Z`,stripe);}
      path(c,'M-45 16 Q-39 25 -44 33 L-37 40 L-59 41 L-66 21Z',bib);
      fur(c,323,155,-55,19,145,35,.12);
    });c.restore();
    c.save();c.translate(-53-5*w,10-43*w+breath*.45);c.rotate(-.29+.40*w);head(c,w,t);c.restore();
    c.restore();
  };
}
