import {W,H,TAU,ink,grad,glow,oval,path,box,line,rr,mask,random,scratches,layer,star,sprig,text,wave} from './paint.js';
import {opening} from './timing.js';

const arch='M635 468 L635 205 C638 78 736 -11 884 -17 C1032 -23 1151 64 1154 201 L1154 461 Q914 473 635 468Z';
const citySeed=random(232);
const stars=Array.from({length:265},()=>({x:627+citySeed()*545,y:citySeed()*326,r:.4+citySeed()**3*2.55,p:citySeed()*TAU}));
function moon(c){
  c.save();c.translate(987,115);
  glow(c,0,0,104,104,'255,214,148',.19);
  for(const r of [51,54,70])oval(c,0,0,r,r,null,'#dfcd9b50',r===54?.5:.8);
  oval(c,0,0,43,43,'#f4d79c','#f9eab7',1.8);
  const disc='M43 0 A43 43 0 1 1 -43 0 A43 43 0 1 1 43 0';
  mask(c,disc,()=>{
    path(c,'M-48 -51 Q-14 -52 -3 -34 C4 -26 -1 -21 6 -17 Q14 -12 10 -6 L19 2 Q20 5 12 6 Q13 10 10 12 Q16 15 10 17 Q10 26 -3 26 Q-19 25 -24 47 L-48 48Z','#d5b47f');
    path(c,'M-4 -19 Q3 -23 9 -17 M1 -13 Q5 -8 10 -12 M11 9 L15 8 M9 14 L13 13',null,'#86785e',1.15);
    const r=random(405);for(let i=0;i<380;i++){const x=r()*88-44,y=r()*88-44;
      line(c,[x,y,x+1+r()*4,y-.4-r()*1.4],i%2?'#fff2ba66':'#a3876535',.8);}
    for(const [x,y,s] of [[-22,-12,5],[-12,-28,2],[-29,9,3],[24,-10,2],[-11,17,3]]){oval(c,x,y,s,s*.72,'#b8a07261');}
  });
  c.restore();
}
function skyline(c){
  const r=random(338);
  box(c,600,-40,600,540,grad(c,620,0,960,453,[[0,'#14263f'],[.32,'#294667'],[.75,'#6c8796'],[1,'#d4b698']]));
  glow(c,978,105,209,179,'176,203,203',.17);
  // Semi-dry gouache dragged sideways over the darker blue ground.
  for(let j=0;j<280;j++){
    const x=600+r()*590,y=-20+r()*330,w=5+r()**2*68;
    path(c,`M${x} ${y} q${w*.36} ${-2-r()*3} ${w} -3 q${-w*.33} 3 ${-w} 4Z`,
      ['#a1b1b01b','#657c9224','#182f4d23'][j%3]);
  }
  // Cool, broken brush marks describe the long river of starlight.
  for(let i=0;i<2400;i++){let x=620+r()*545;let y=170-92*Math.sin((x-650)/270)+32*Math.sin(x/146)+(r()+r()+r()-1.5)*45;
    line(c,[x,y,x+1+r()*4,y-.4-r()],['#cad0c040','#abc3c341','#e6d8bd46','#7a9da95c'][i%4],.4+r()*.9);}
  for(const s of stars){oval(c,s.x,s.y,s.r*.68,s.r*.64,'#eed9ad');if(s.r>2.35)star(c,s.x,s.y,s.r*1.55,'#f7d9a7');}
  moon(c);
  for(let i=0;i<23;i++){const x=610+r()*552,y=207+r()*107;
    path(c,`M${x} ${y} q19 -4 36 -2 q14 -6 29 -3 q-23 6 -65 5Z`,'#bcbba733');}
  path(c,'M602 309 Q661 272 699 282 Q764 229 821 261 Q884 221 927 258 Q978 226 1035 241 Q1104 222 1175 253 V486 H602Z','#627381');
  // Distant chimneys, belfries and pointed roofs.
  for(let i=0;i<71;i++){
    const x=610+i*8.2,y=271+13*Math.sin(i*.13)+r()*12,w=7+r()*12,up=4+r()*15;
    box(c,x,y,w,60,'#4c6171');path(c,`M${x-2} ${y+1} l${w*.53} ${-up} l${w*.64} ${up}Z`,'#475e6e');
    if(i%4===0)box(c,x+3,y+5,1.4,3.3,'#d6ba8a');
  }
  for(const [x,y,s] of [[794,257,.74],[1090,254,1],[922,263,.58],[695,286,.7]]){
    c.save();c.translate(x,y);c.scale(s,s);box(c,-8,-22,16,49,'#405565');
    path(c,'M-12 -22 L-7 -27 Q-10 -33 -3 -40 L0 -56 L3 -40 Q10 -32 7 -27 L12 -22Z','#31465b');
    line(c,[0,-59,0,-65],'#354759',1);for(let k=-1;k<=1;k++)rr(c,k*4-1,-17,2.4,8,1.2,'#d1ba8c');c.restore();
  }
  path(c,'M618 328 Q735 292 792 302 Q869 310 921 285 Q982 269 1055 285 Q1119 296 1174 265 V475 H618Z','#435c6d');
  const river='M1110 274 Q1095 307 1013 313 Q918 321 957 337 Q1022 356 978 375 Q930 400 815 459 L690 470 Q760 417 868 381 Q967 347 917 339 Q861 318 972 307 Q1064 300 1110 274Z';
  path(c,river,grad(c,903,278,891,465,[[0,'#aebbb2'],[.4,'#8caaa9'],[.75,'#7995a1'],[1,'#536f84']]));
  mask(c,river,()=>{
    for(let j=0;j<2600;j++){const y=274+r()*196,x=678+r()*448,sz=1+r()**2*22;
      path(c,`M${x} ${y} q${sz*.4} -1.7 ${sz} -.6`,null,['#e4cfac99','#6e8d975e','#d0c9a770','#4f72855c'][j%4],.6+r()*.8);}
  });
  // Low stone bridge with cut-out arches painted in the water colour.
  path(c,'M843 325 Q926 303 1042 308 L1042 321 Q1030 310 1018 323 L1011 324 Q1004 305 990 325 L983 326 Q972 306 957 331 L950 332 Q937 310 920 336 L913 338 Q903 319 888 342 L881 343 Q868 328 854 348 L844 349Z','#465c69','#617381',.8);
  path(c,'M841 324 Q930 300 1044 307',null,'#d3b89a',2.1);
  for(let i=0;i<31;i++){const x=845+i*6.5,y=324-38*(i/30)+21*(i/30)**2;
    line(c,[x,y-3,x,y-.2],'#46586a',.85);
    if(i%6===0){line(c,[x,y-1,x,y-9],'#43596b',1);oval(c,x,y-9,1.5,1.8,'#ffd18d');}}
  path(c,'M843 321 Q930 297 1044 304',null,'#7c8a8a',.7);
  // Stone quays and their lamps trace the curve of the nearer bank.
  path(c,'M984 349 Q1027 360 998 379 Q968 397 934 418 L938 426 Q989 398 1008 384 Q1033 362 991 348Z','#506779');
  path(c,'M985 349 Q1027 359 1001 378 Q975 397 934 419',null,'#b6ae9d',2.1);
  function house(x,y,w,h,pal){
    const rise=16+r()*26, skew=(r()-.46)*w*.4;
    c.save();c.translate(x,y);
    const [wall,roof,edge]=pal;
    path(c,`M0 0 l${w} -3 v${h} l${-w} 6Z`,wall,'#324557',1);
    path(c,`M${w*.77} -3 L${w} -4 L${w} ${h-2} L${w*.75} ${h+1}Z`,'#263d5224');
    for(let m=0;m<11;m++){const a=r()*w,b=5+r()*(h-9);
      line(c,[a,b,Math.min(w,a+1.5+r()*3),b-.2],'#d3bd993e',.65);}
    const rd=`M-5 1 L${skew+w*.24} ${-rise} L${w*.91} ${-rise-3} L${w+5} -3Z`;
    path(c,rd,roof,'#303c4e',1.6);
    mask(c,rd,()=>{for(let j=-42;j<4;j+=5.2){line(c,[-6,j+2,w+3,j-2],edge,.8);
      for(let a=-4+(Math.round(-j/5)%2)*4;a<w+6;a+=9)line(c,[a,j,a+1.4,j-3.8],edge,.7);}});
    path(c,`M${w*.91} ${-rise-3} L${w+5} -3 L${w*.7} -2Z`,'#28394d44');
    line(c,[-5,1,w+5,-3],edge,2);
    line(c,[0,3,w,0],'#344459',1.2);
    const k=w*.68;box(c,k,-rise-7,5,12,roof);box(c,k-1.3,-rise-8,7.7,2.5,edge);
    for(let a=4;a<w-4;a+=10){for(let b=7;b<h-4;b+=14){box(c,a,b,4.5,6.8,r()>.58?'#efc489':'#35495a');line(c,[a+2,b,a+2,b+6],'#625e5e',.65);}}
    if(w>36){
      path(c,'M8 -6 L9 -18 L15 -26 L23 -20 L23 -8Z',wall,'#334255',1.2);
      path(c,'M5 -17 L15 -29 L26 -20',null,edge,2);box(c,13,-18,5.4,8,'#f8cb8a');line(c,[15.6,-18,15.6,-10],'#60595a',1);
    }c.restore();
  }
  const pals=[['#8d8180','#495a70','#8c9b9e'],['#797884','#3c5063','#80939a'],['#ae9383','#5f687a','#acaaa3'],['#596777','#34475e','#728797']];
  for(const bank of [0,1])for(let j=0;j<10;j++){
    const w=24+r()*26,x=bank?989+j*24:602+j*25,y=314+(bank?j*.9:j*1.9)+r()*14;
    house(x,y,w,52,pals[j%4]);}
  // The clockmaker's belfry breaks the two banks of tiled roofs.
  c.save();c.translate(1050,345);
  path(c,'M-12 39 L-12 -47 L-8 -52 L10 -53 L14 -48 L14 38Z','#b19884','#485867',1.6);
  path(c,'M5 -50 L13 -49 L13 38 L5 39Z','#827d7d');
  path(c,'M-16 -47 L-15 -51 L-11 -54 L-10 -69 L-13 -71 Q-6 -77 -4 -83 L0 -99 L3 -83 Q5 -78 12 -73 L10 -70 L10 -54 L15 -50 L16 -47Z','#3e5366','#394c60',1.3);
  path(c,'M-11 -55 L-10 -68 L8 -69 L8 -55Z','#d1b18c','#687282',.9);
  for(const x of [-7,-2,3]){rr(c,x,-66,2.8,10,1.4,'#485967');}
  oval(c,-2,-37,7.1,7.3,'#eed0a0','#4e6170',1.6);
  for(let j=0;j<12;j++){const a=j*TAU/12;line(c,[-2+Math.cos(a)*5.15,-37+Math.sin(a)*5.15,-2+Math.cos(a)*5.8,-37+Math.sin(a)*5.8],'#6b655c',.7);}
  line(c,[-4.7,-38.7,-2,-37,-2.5,-42],'#4d5258',1.1);
  line(c,[0,-100,0,-105],'#334556',.9);path(c,'M0 -105 l8 1 l-8 2Z','#cca474');
  for(const x of [-8,0,7])rr(c,x,-20,2,8,.8,'#596575');c.restore();
  for(const bank of [0,1])for(let j=0;j<7;j++){const x=bank?984+j*31:583+j*32;
    house(x,373+j*2+r()*21,38+r()*24,84,pals[(j+1)%4]);}
  // Nearer slates frame the river like a street seen from an attic.
  house(1075,438,95,68,pals[3]);house(1115,446,88,64,pals[0]);
  house(610,439,76,62,pals[1]);
  for(const [x,y] of [[1095,394],[1140,394],[658,412]]){
    path(c,`M${x} ${y} l-1 -17 l8 -2 l2 18Z`,'#6f6262','#354951',1);
    path(c,`M${x-3} ${y-16} l11 -2 l-1 -4 l-10 1Z`,'#ab8877','#495264',.9);
    path(c,`M${x+2} ${y-24} q10 -8 4 -14 q-5 -5 4 -12`,null,'#bbc2b647',2);}

}
function specimen(c,x,y){
  c.save();c.translate(x,y);c.rotate(-.055);
  rr(c,-65,-63,134,133,2,'#35272d');rr(c,-66,-68,130,131,2,'#69432f','#241f29',2);
  rr(c,-62,-65,123,124,0,'#b58b5a','#d9a76c',1);
  rr(c,-57,-60,113,114,0,'#7c5948','#48343a',2);
  box(c,-53,-55,104,104,'#c3a77f');box(c,-46,-49,90,92,'#dbbf8d');
  oval(c,-1,-8,31,31,null,'#997e65',.8);oval(c,-1,-8,34,34,null,'#af9170',.6);
  for(let i=0;i<18;i++){c.save();c.translate(0,-8);c.rotate(i*TAU/18);line(c,[0,-34,0,-36.5],'#967c65',.9);c.restore();}
  path(c,'M-29 8 Q-12 2 -10 -9 Q-23 -12 -33 -30 Q-7 -15 2 -13 Q15 -31 31 -32 Q23 -19 9 -8 Q12 -11 17 -9 L24 -8 L17 -5 Q11 0 4 0 Q-7 0 -29 17 L-21 8Z','#3c4950');
  path(c,'M-28 -26 L-8 -11 L-22 -21 M24 -27 L4 -10 L17 -23 M-16 7 L2 -2',null,'#d4b78a',1);
  text(c,'Hirundo',0,32,13,'#624d44','Georgia,serif','center','italic');c.restore();
}
function backdrop(c){
  box(c,0,0,W,H,grad(c,0,130,679,409,[[0,'#47343e'],[.34,'#704449'],[.75,'#915950'],[1,'#55404a']]));
  const r=random(712);
  for(let i=0;i<1700;i++){const x=r()*1200,y=r()*500;
    line(c,[x,y,x+1+r()*2,y+2+r()*11],i%2?'#ecc38b12':'#211f3218',.5+r()*2);}
  // Faded block-printed wallpaper.
  for(let j=0;j<13;j++)for(let i=-1;i<28;i++){const x=i*48+(j%2)*24,y=j*43;
    c.save();c.translate(x,y);path(c,'M0 -13 Q0 -3 6 0 Q1 2 0 10 Q-1 2 -6 0 Q0 -3 0 -13Z',null,'#ddb28638',.85);
    path(c,'M-17 7 Q-7 10 -4 16 M18 7 Q7 10 4 16',null,'#ecc59a23',.8);oval(c,0,17,1.2,1.5,'#d2a47c57');c.restore();}
  glow(c,146,291,354,272,'255,143,54',.39);
  glow(c,184,225,190,126,'255,194,110',.14);
  path(c,'M-5 -12 L68 -8 L378 162 L369 182 L338 185 L-5 31Z','#382d35',ink,3);
  path(c,'M-5 19 L353 174 L369 164 L368 178 L345 184 L-5 31Z','#805747');
  for(let j=0;j<7;j++)path(c,`M0 ${-17+j*5} Q149 ${60+j*4} 339 ${148+j*4}`,null,j%2?'#94644b':'#512f35',1+r()*2);
  path(c,'M445 -8 L477 -8 L418 457 L393 464Z','#6b4642','#53383b',2);
  path(c,'M450 -4 L458 -4 L408 456 L398 460Z','#926148');
  path(c,'M-4 425 Q323 410 641 417 L638 447 Q310 435 -4 460Z','#573b3a',ink,2);
  path(c,'M-4 428 Q340 412 635 421',null,'#b17d59',2.6);
  specimen(c,136,108);
  c.save();c.translate(353,200);c.rotate(.075);
  path(c,'M-35 -31 L37 -33 L39 34 L-37 36Z','#5b3e3d');
  path(c,'M-37 -33 L36 -36 L36 31 L-39 33Z','#cda777','#815b4a',1.2);
  rr(c,-32,-30,63,56,1,null,'#957657',.8);
  sprig(c,-7,22,.92,-.27,'#777952','#b8a375');sprig(c,-8,20,.55,.6,'#8d6d54');
  oval(c,0,-30,3.8,3.2,'#795f43','#dfb47b',1);
  c.restore();
  // Rosewood arch with successive raised mouldings.
  path(c,arch,'#241f32','#3b2b32',43);
  path(c,arch,null,'#8e614b',32);path(c,arch,null,'#bc8c64',23);
  path(c,arch,null,'#5c4342',18);path(c,arch,null,'#896a56',12);
  mask(c,arch,()=>skyline(c));
  path(c,arch,null,'#352f38',4);path(c,'M623 379 L623 205 C623 85 729 -17 874 -27',null,'#d29e73',2);
  // Engraver's marks on the curved wooden moulding.
  for(let i=0;i<80;i++){const a=Math.PI+(i+.5)*Math.PI/80,x=894+267*Math.cos(a),y=202+228*Math.sin(a);
    line(c,[x,y,x+2.8*Math.cos(a),y+2.8*Math.sin(a)],'#dcc08a99',.85);}
  path(c,'M605 458 Q901 462 1174 450 L1190 458 L1176 471 Q887 485 609 478 L598 469Z','#ae7e56','#45333a',2);
  path(c,'M601 467 Q867 478 1183 457',null,'#e1b07a',2.5);
  path(c,'M608 473 Q911 480 1176 465',null,'#735344',2.2);
}
function sashHalf(c,left){
  c.save();c.scale(left?1:-1,1);
  const d='M0 459 L0 201 C2 80 111 -6 259 -13 L259 462Z';
  path(c,d,'#8aa4af0a','#40393e',6);path(c,d,null,'#957056',3);
  path(c,'M1 235 Q105 233 257 230',null,'#4b4143',5);
  path(c,'M2 233 Q115 231 257 228',null,'#bf9a70',1.3);
  path(c,'M1 202 Q106 205 257 200',null,'#493f40',4);
  path(c,'M1 200 Q124 203 257 198',null,'#bc9269',1);
  path(c,'M112 -25 L111 201 M112 235 L111 459',null,'#504448',4.1);
  path(c,'M110 -25 L109 201 M110 236 L109 458',null,'#ac8769',1.1);
  path(c,'M254 -12 L254 461',null,'#634e43',7);
  path(c,'M251 -11 L251 462',null,'#c1966d',1.8);
  const refl='M149 21 L163 14 L109 188 L98 189Z M169 8 L172 7 L121 190 L118 190Z M75 253 L84 251 L32 438 L23 439Z';
  path(c,refl,'#d0d2c011');
  if(left){rr(c,242,287,10,25,4,'#826e56','#443d40',1.2);
    path(c,'M247 297 Q240 302 233 310',null,'#493d38',4);path(c,'M247 296 L233 308',null,'#d0ac70',2);}
  c.restore();
}
export function drawWindow(c,t){
  const f=opening(t);
  c.save();c.clip(new Path2D(arch));
  for(const s of stars){if(s.r<2)continue;const a=.5+.5*wave(t,8,s.p);star(c,s.x,s.y,s.r*(1+a*.8),'rgba(255,238,188,'+(.23+a*.64)+')');}
  for(const left of [true,false]){c.save();c.translate(left?636:1153,0);
    c.transform(1-.935*f,(left?-.1:.1)*f,0,1,0,0);sashHalf(c,left);c.restore();}
  c.restore();
}
function tabletop(c){
  const d='M-30 456 Q448 452 821 468 L1230 470 L1230 700 H-30Z';
  path(c,d,grad(c,0,445,90,688,[[0,'#ae714e'],[.14,'#bf8156'],[.48,'#996248'],[1,'#593d3b']]),'#48343a',3);
  mask(c,d,()=>{
    const r=random(7613);
    for(let j=0;j<260;j++){
      const y=451+r()**1.24*233,x=-20+r()*1220,l=12+r()**3*230;
      path(c,`M${x} ${y} q${l*.32} ${-.5-r()*3} ${l*.57} ${-1-r()*2} t${l*.43} ${r()*3-2}`,null,['#f3b77949','#693c3885','#cf8f635a','#59383844'][j%4],.4+r()*1.55);
    }
    for(const [x,y,k] of [[280,504,.7],[884,637,1],[46,626,.7],[1097,581,.6]]){
      c.save();c.translate(x,y);c.scale(k,k*.25);
      for(let i=1;i<=7;i++)path(c,`M${-i*18} ${i*2} Q${-i*8} ${i*2} -16 ${-i*3} Q0 ${-i*5} 28 ${-i*2} Q${i*11} ${i*2} ${i*19} ${-i}`,null,'#673c388a',2);c.restore();}
    path(c,'M-6 525 Q540 493 1204 506 M-8 632 Q501 572 1210 557',null,'#623f3d',2.4);
    path(c,'M-7 527 Q540 495 1205 507 M-5 635 Q508 574 1210 559',null,'#e2a774',1.7);
    scratches(c,391,850,0,448,1200,230,['#f3ba783b','#55313944'],23,-.03);
  });
  glow(c,190,493,317,79,'255,175,78',.52);
  for(const [x,y,rx,ry,a] of [[371,499,165,13,.30],[286,521,94,12,.37],[1089,553,167,15,.46],[862,550,48,7,.34],[942,633,65,5,.28]]){
    glow(c,x,y,rx,ry,'57,33,40',a);}

}
export const roomLayer=()=>layer(W,H,backdrop);
export const deskLayer=()=>layer(W,H,tabletop);
