import {W,H,TAU,ink,cream,grad,glow,oval,path,line,box,rr,mask,random,scratches,layer,star,sprig,text,ramp,wave} from './paint.js';
import {awake} from './timing.js';
function turned(c,x,y,w,h){
  c.save();c.translate(x,y);c.scale(w/24,h/50);
  path(c,'M-11 0 Q-15 4 -8 7 Q-5 10 -7 14 Q-14 17 -6 21 Q-2 28 -4 33 Q-12 36 -8 40 L-13 46 Q-16 51 0 51 Q16 51 13 46 L8 40 Q12 36 4 33 Q2 28 6 21 Q14 17 7 14 Q5 10 8 7 Q15 4 11 0Z',grad(c,-14,0,15,2,[[0,'#654633'],[.22,'#cb9759'],[.38,'#f8cc7d'],[.55,'#b4834f'],[.77,'#7b5640'],[1,'#d99f5d']]),'#533d35',1.2);
  for(const [yy,ww] of [[3,11],[7,8],[17,8],[36,7],[40,8],[47,12]]){path(c,`M${-ww} ${yy} Q0 ${yy+2.6} ${ww} ${yy}`,null,'#644836',1.1);}
  c.restore();
}
function lamp(c){
  glow(c,150,281,152,77,'255,186,85',.42);
  c.save();
  const beam='M21 260 Q121 283 283 255 L385 516 Q176 549 -80 495Z';
  mask(c,beam,()=>{glow(c,149,314,190,242,'255,182,70',.22);});
  c.restore();
  glow(c,147,479,109,14,'62,38,40',.62);
  path(c,'M79 475 Q80 458 106 457 Q122 455 129 448 L166 447 Q178 456 191 456 Q212 458 214 471 Q213 483 157 487 Q102 486 79 480Z','#8b603c','#47363a',2.4);
  oval(c,146,473,63,11,'#b88853','#574038',2.2);
  oval(c,147,469,54,10,grad(c,94,460,204,480,[[0,'#a0764b'],[.34,'#e6b874'],[.64,'#987446'],[1,'#705039']]),'#6b503b',1.3);
  oval(c,146,465,39,7,'#9f774c','#e1af69',1.8);
  turned(c,147,405,53,59);turned(c,147,349,24,59);turned(c,147,283,16,69);
  turned(c,147,262,29,30);
  for(let i=0;i<11;i++){const a=i*Math.PI/10;line(c,[146+Math.cos(a)*16,451+Math.sin(a)*3,147+Math.cos(a)*37,462+Math.sin(a)*5],'#805738',1.4);}
  // Warm silk umbrella, fluted panels and scalloped amber glass at its lip.
  const dome='M21 261 C26 230 58 201 90 184 Q121 166 148 163 Q185 165 215 184 Q260 204 279 241 L286 258 Q277 268 265 267 Q257 281 241 273 Q228 286 212 275 Q193 288 176 278 Q156 291 138 280 Q120 289 104 278 Q85 287 69 275 Q55 281 45 270 Q29 275 21 261Z';
  path(c,dome,grad(c,145,158,153,290,[[0,'#ae6c43'],[.2,'#cc8a4d'],[.57,'#f3bb67'],[.86,'#ffe2a0'],[1,'#ffdf95']]),'#574034',2.7);
  mask(c,dome,()=>{
    glow(c,119,256,146,74,'255,235,158',.76);
    const ribs=[22,45,69,104,138,176,212,241,265,286];
    for(let i=0;i<ribs.length-1;i++){
      const x=ribs[i];
      path(c,`M149 164 Q${149+(x-149)*.7} 180 ${x} 283 L${x+6} 284 Q${149+(x-149)*.57} 181 149 164Z`,'#92592f30');
    }
    const seams=[[21,261],[45,270],[69,275],[104,278],[138,280],[176,278],[212,275],[241,273],[265,267],[286,258]];
    for(let i=0;i<seams.length;i++){
      const [x,y]=seams[i],xx=149+(x-149)*.6;
      path(c,`M149 163 Q${xx} 174 ${x} ${y}`,null,'#a46e44',2.4);
      path(c,`M150 164 Q${xx+3} 176 ${x+3} ${y-1}`,null,'#ffdf987d',2.3);
    }
    for(let i=0;i<32;i++){const x=25+i*8;
      path(c,`M${x} 257 q3 -5 5 -1 q-2 4 -5 1Z`,'#af8352');}
    scratches(c,358,840,21,160,270,126,['#fff3b959','#9e6f4138'],3,.95);
    for(let i=0;i<8;i++){const x=52+i*29;
      sprig(c,x,261,.32,(i-4)*.12,'#ac8153','#e4bb7b');}
  });
  path(c,'M22 259 Q34 265 45 265 Q57 274 70 269 Q85 278 103 273 Q120 281 138 275 Q159 282 176 273 Q195 279 212 270 Q228 276 241 266 Q256 270 266 260 Q277 262 284 253',null,'#b18a51',1.4);
  for(let i=0;i<40;i++){
    const x=24+i*6.6,y=262+18*Math.sin((x-21)/265*Math.PI)+2*Math.sin(i*1.4);
    line(c,[x,y,x+.5,y+5+i%4],'#a57b4a',1.2);oval(c,x+.5,y+6+i%4,1.25,1.7,'#f1d698','#8d6948',.65);}
  turned(c,149,157,25,11);oval(c,149,156,7,4,'#e3b16a','#624834',1);
  path(c,'M147 153 Q144 146 150 143 Q156 147 150 154Z','#bd9259','#5b4436',1.2);
  path(c,'M191 285 Q192 317 185 337',null,'#8c6b48',1.2);
  for(let i=0;i<11;i++)oval(c,191-i*i*.055,286+i*4.3,1.1,1.4,'#e9c181');
  turned(c,185,334,6,12);
}
function book(c,x,y,w,h,rot,cover,title){
  c.save();c.translate(x,y);c.rotate(rot);const d=`M0 1 Q2 -2 9 -2 L${w-15} -5 L${w+3} -13 L${w+13} -7 L${w+13} ${h-5} L${w} ${h+3} L6 ${h+7} Q-2 ${h+7} 0 ${h-1}Z`;
  path(c,d,cover,'#3c3033',2);
  path(c,`M5 -2 L${w-1} -5 L${w+11} -11 L13 -9Z`,'#d9b17a','#725343',1.2);
  path(c,`M${w} -3 L${w+12} -9 L${w+12} ${h-5} L${w+1} ${h+1}Z`,'#dcc196','#6a4e40',1);
  for(let j=2;j<h-2;j+=2.3)line(c,[w+1,j,w+11,j-6],'#947755',.7);
  path(c,`M4 0 Q-1 ${h*.45} 5 ${h+3} L${w-2} ${h} M7 2 L${w-4} -1`,null,'#c59b656e',1.3);
  for(const u of [.08,.12,.76,.80,.90]){const a=u*w;
    path(c,`M${a} 0 Q${a-3} ${h/2} ${a+1} ${h+2}`,null,'#d4aa70',1.9);}
  if(title)text(c,title,w*.44,h*.64,Math.max(8,h*.4),'#e3c48d','Georgia,serif','center','italic');
  c.restore();
}
function cup(c){
  c.save();c.translate(208,513);c.rotate(-.065);
  glow(c,4,42,65,13,'50,31,33',.6);
  oval(c,0,39,49,10,'#a78666','#493c3c',1.9);oval(c,0,37,43,7,'#dcc19b','#7b8274',1.6);
  path(c,'M25 -14 C58 -32 66 20 36 27 Q26 29 24 21 L28 17 C50 19 53 -11 33 -6Z','#c1b797','#3f4846',2.2);
  path(c,'M31 -13 C58 -25 58 15 41 21',null,'#e9d5aa',2);
  const d='M-34 -18 Q-1 -28 33 -20 Q37 0 28 25 Q22 38 0 38 Q-22 38 -29 27 Q-34 4 -34 -18Z';
  path(c,d,grad(c,-34,0,34,2,[[0,'#8d9f8c'],[.18,'#d2ceaa'],[.44,'#ede0b9'],[.78,'#d4caa8'],[1,'#899c91']]),'#4e514a',2.1);
  mask(c,d,()=>{
    path(c,'M-34 2 Q-2 11 35 -1 M-34 17 Q-3 27 33 15',null,'#628b86',1.3);
    for(let i=0;i<7;i++){const x=-32+i*10,yy=6+4*Math.sin(i/6*Math.PI);
      path(c,`M${x} ${yy} q6 -6 7 1 q-4 7 -7 4 q5 0 5 -4 q0 -3 -5 -1Z`,'#638b86');}
    scratches(c,633,150,-36,-18,72,59,['#a6875a23','#ffefcf5c'],3,.7);
  });
  oval(c,-.1,-18,33,8.2,'#ede2ba','#59665b',1.7);oval(c,0,-17.5,28.7,5.9,'#624035','#b38c66',1);
  path(c,'M-24 -17 Q-15 -22 2 -20 Q13 -18 9 -17 Q4 -15 -2 -16 M13 -16 Q21 -19 25 -18',null,'#d2a878',1.3);c.restore();
}
function inkPot(c){
  c.save();c.translate(831,527);c.rotate(.06);
  glow(c,2,18,33,8,'46,32,32',.64);
  path(c,'M-15 -21 L13 -21 L14 -12 L23 -5 L22 14 Q19 21 -16 20 Q-23 18 -24 11 L-23 -4 L-16 -11Z','#30484c','#342d36',2);
  path(c,'M-16 -9 L-21 -3 L-20 11 M17 -5 L17 11',null,'#7e958a',1.6);
  rr(c,-14,-28,28,9,2,'#494440','#312e32',1.7);for(let i=-11;i<14;i+=4)line(c,[i,-26,i,-21],'#b09873',1);
  rr(c,-14,-5,30,18,2,'#d1b68a','#977553',1);
  text(c,'INK',1,7,9.5,'#56423d','serif','center','bold');c.restore();
}
function stationery(c){
  c.save();c.translate(851,607);c.rotate(-.13);
  path(c,'M-54 -20 L62 -18 L57 24 L-61 25Z','#795644','#694738',1.2);
  path(c,'M-54 -24 L62 -21 L57 20 L-61 22Z','#d2ae7f','#725747',1.5);
  path(c,'M-60 21 L-10 -2 M57 19 L17 -5 M-53 -22 L-5 9 Q0 12 5 9 L60 -20',null,'#9f7958',1);
  oval(c,0,8,8,5.8,'#854943','#64403a',1.2,-.1);oval(c,0,7,5.3,3.8,null,'#be7359',1);star(c,.3,7,2.7,'#ce8d68');c.restore();
  c.save();c.translate(937,610);c.rotate(-.16);
  path(c,'M0 0 L91 -5 L94 -3 L90 -1 L0 4 L-14 3Z','#c18c49','#513a33',1);
  path(c,'M0 0 L1 4 L-14 3Z','#d7b282');path(c,'M-10 2 L-14 3 L-9 3.6Z',ink);
  line(c,[2,.8,88,-4],'#f2c175',1);c.restore();
}
function curtain(c){
  const d='M1089 -16 L1210 -15 V439 Q1193 432 1182 440 Q1167 420 1160 353 Q1158 312 1148 269 Q1168 163 1119 66Z';
  path(c,d,grad(c,1103,50,1208,42,[[0,'#3e303f'],[.29,'#69434d'],[.55,'#7f4d52'],[.8,'#503644'],[1,'#704751']]),'#422f3b',2);
  mask(c,d,()=>{
    for(let i=0;i<10;i++){const x=1108+i*14;
      path(c,`M${x} -10 Q${x+18} 105 ${1160+i*4} 251 Q${1160+i*4-4} 326 ${1170+i*7} 450`,null,i%2?'#c78e7044':'#241f344d',3+i%3);}
    for(let i=0;i<60;i++){const x=1101+i%7*17,y=(i/7|0)*48+(i%2)*9;star(c,x,y,2,'#c3977261');}
  });
  path(c,'M1148 263 Q1163 274 1198 255 M1149 267 Q1167 278 1200 259',null,'#c69e68',2);
  path(c,'M1153 268 Q1147 285 1144 302',null,'#b38d5e',2);
  turned(c,1145,299,7,9);path(c,'M1144 307 L1137 322 Q1143 327 1150 323 L1147 307Z','#c6a16d','#715541',1.1);
}
export function stillLife(){
  return layer(W,H,c=>{
    lamp(c);
    book(c,-34,529,204,27,-.055,'#77504a','Atlas of Tides');
    book(c,-23,506,172,25,.012,'#505f55','Field Notes');
    book(c,-26,487,154,17,-.035,'#9b624d','');
    cup(c);inkPot(c);stationery(c);
    book(c,903,532,270,21,-.014,'#574252','The Book of Night');
    book(c,922,509,249,21,.024,'#626d61','Natural Histories');
    // Padded velvet cushion under the cat.
    path(c,'M923 506 Q936 488 970 491 Q1066 484 1159 491 Q1181 491 1183 501 Q1186 511 1161 515 Q1042 532 934 515 Q917 516 923 506Z','#9f5d58','#593e44',2);
    path(c,'M924 507 Q1015 528 1160 508 Q1176 506 1181 501',null,'#df9d74',1.7);
  });
}
export const curtainLayer=()=>layer(W,H,curtain);
export function steam(c,t){
  for(let k=0;k<3;k++){
    const p=(t/5*(k===2?1:2)+k*.33)%1;const x=202+(k-1)*9,y=491-49*p;
    const d=wave(t,9,k)*5, a=Math.sin(p*Math.PI)*.56;
    c.save();c.globalAlpha=a;
    path(c,`M${x} ${y} c${-10+d} -12 14 -18 9 -31 s-12 -15 -4 -26`,null,'#ffe3b4',1.7-k*.28);c.restore();}
}
