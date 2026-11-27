import {ink,cream,grad,glow,oval,path,line,box,rr,mask,random,scratches,layer,star,sprig,text,ramp,clamp} from './paint.js';
import {lines,knocks,mechanics,glyphX,lead,keyPoint,pitch,keyRows} from './timing.js';
export const births = [
  [8.0,8.0,8.0,8.0,8.0,8.0,8.0,8.0,9.65,9.65,9.65,9.65,9.65,9.65],
  Array(15).fill(13.65),Array(17).fill(19.85),Array(14).fill(23.6)];
export const liftTime=(row,col)=>births[row][col]+col*(row===2?.09:.045);
const brass='#bf9360',shine='#f2d196',dark='#443a38';
function screw(c,x,y,r=3){
  oval(c,x,y,r,r*.8,brass,ink,1.1);line(c,[x-r*.56,y+.65,x+r*.62,y-.7],dark,1);
}
function flourish(c,x,y,f){
  c.save();c.translate(x,y);c.scale(f,1);
  path(c,'M0 1 Q20 4 36 -3 C49 -10 47 -18 40 -16 Q34 -13 41 -10 M19 1 Q24 -8 32 -10 M3 0 Q15 -1 21 -9',null,'#d5af74',1.3);
  path(c,'M16 -2 Q13 -9 7 -10 Q8 -4 16 -2Z M24 -5 Q25 -13 31 -14 Q31 -8 24 -5Z M34 -3 Q44 -7 47 -4 Q42 -1 34 -3Z','#c79e60');c.restore();
}
function body(c){
  // Rubber feet, then the deep lacquered casting, then the sloped bank of keys.
  for(const [x,y] of [[327,602],[366,626],[698,625],[761,597]])rr(c,x,y,26,13,5,'#302a2f','#221f27',2);
  const shell='M344 482 Q344 464 360 458 L382 435 Q386 426 403 425 L700 422 Q722 423 731 441 L746 463 Q752 466 755 477 L772 581 Q775 598 760 608 L724 632 Q714 637 704 637 L356 638 Q340 638 333 628 L311 606 Q305 600 309 586Z';
  path(c,shell,grad(c,310,454,736,658,[[0,'#769187'],[.2,'#416a65'],[.57,'#305852'],[.88,'#263e40'],[1,'#1f363b']]),'#292b32',3.4);
  mask(c,shell,()=>scratches(c,158,1600,304,422,473,218,['#c2c19b38','#182f3544','#74a08d44'],6,-.22));
  path(c,'M316 590 Q315 599 333 604 L701 607 Q721 608 736 600 L769 580 L771 594 Q768 604 756 611 L725 631 Q717 636 704 635 L356 636 Q348 636 340 630 L316 607Z','#284747','#26363b',2);
  path(c,'M325 606 Q334 612 351 613 L705 613 Q719 614 730 607 L766 587',null,'#769281',2);
  path(c,'M336 619 Q343 628 356 630 L702 629 Q713 630 722 625 L753 607',null,'#b19b68',1.3);
  const deck='M366 480 Q375 470 390 469 L704 466 Q720 464 728 480 L750 569 Q754 582 739 589 L712 600 Q705 603 693 603 L342 601 Q326 600 331 586Z';
  path(c,deck,'#294544','#172e34',2.7);
  path(c,'M337 581 L371 480 Q375 473 391 473 L702 470 Q717 469 721 477',null,'#95a28a',2.6);
  path(c,'M358 573 L389 484 L695 480 L716 570 Q718 577 710 580 L363 584Z','#333b3d','#192e32',2);
  mask(c,deck,()=>scratches(c,799,490,336,469,410,126,['#b0ab8138','#15272f52'],8,-.25));
  // One key lever for each stem: visible behind and between the keys.
  for(const row of keyRows){for(const ch of row){let [x,y,k]=keyPoint(ch);
    path(c,`M${x-2} ${y+6} l${(547-x)*.08} -18`,null,'#ab9c80',2.45);
    line(c,[x+1,y+8,x+(547-x)*.075+1,y-10],'#59584f',1.4);}}
  // Conspicuous half-moon type basket and fan of separate metal arms.
  path(c,'M371 454 Q373 430 400 425 Q442 416 487 431 Q553 450 609 427 Q659 406 699 424 Q728 431 731 455 L724 469 L380 476Z',
    grad(c,0,419,0,474,[[0,'#92a395'],[.28,'#45716b'],[.87,'#2d5450'],[1,'#1e3b3e']]),'#263139',2.6);
  path(c,'M453 435 Q551 466 653 429 Q644 456 620 466 Q547 483 481 464 Q463 455 453 435Z','#26343a','#c1a172',2);
  for(let i=0;i<39;i++){const u=i/38,x=463+182*u,y=437+17*Math.sin(Math.PI*u)-4*u;
    line(c,[x,y,521+61*u,466+3*Math.sin(Math.PI*u)],i%3?'#a29a86':'#676f69',1.2);}
  path(c,'M457 434 Q551 468 653 428',null,'#ebc990',1.5);
  path(c,'M374 451 C383 435 396 433 413 434 M676 428 Q705 426 717 439',null,'#adc0a0',2);
  for(const [x,y] of [[413,434],[682,428]]){
    oval(c,x,y,26,8,'#222e33','#a48b69',1.8);oval(c,x,y-1,17,4.6,'#42373d','#775f5b',1.4);
    oval(c,x,y-1,6,2.8,'#a48963','#222d32',1);oval(c,x,y-1,2.1,.95,'#32343a');
  }
  path(c,'M414 437 Q477 428 559 429 L572 426 Q618 423 681 431 L681 435 Q616 429 572 432 Q512 431 418 440Z','#412d3a');
  path(c,'M419 439 Q486 431 561 431 L571 430 Q620 427 679 434',null,'#985158',1.25);
  // Brass paper guide at the strike point.
  path(c,'M548 442 L552 410 Q553 405 557 405 L558 416 L573 415 L575 403 Q579 404 580 408 L581 439',null,'#3f3836',4.8);
  path(c,'M548 441 L553 409 L556 406 L557 418 L574 417 L576 405 L578 409 L580 438',null,shine,2);
  for(const [x,y] of [[372,461],[722,456],[339,592],[741,579],[722,620],[355,624]])screw(c,x,y,2.7);
  // Scuffed enamel catches a narrow, cool reflection along the casting.
  path(c,'M321 581 Q327 554 347 490 Q351 477 355 473 M363 467 Q368 459 375 455',null,'#aec0a096',2.15);
  path(c,'M322 587 Q345 513 348 509',null,'#91b5a18a',1);
  for(const [x,y,s] of [[354,577,.5],[725,559,.34]]){
    c.save();c.translate(x,y);c.rotate(.2);sprig(c,0,0,s,0,'#c2a973','#637c68');c.restore();}
  // Front maker's inscription and the sprung space bar.
  rr(c,438,580,208,14,7,'#222d32','#1f2a2c',2);
  path(c,'M444 581 Q446 577 452 577 L637 575 Q643 574 646 579 Q649 584 643 585 L447 589 Q441 589 444 581Z','#5b5347','#bba378',1.5);
  path(c,'M450 580 L637 577',null,'#d3bc90',1.6);
  text(c,'Nocturne',535,625,19,'#ead2a0','Georgia,serif','center','italic');
  flourish(c,477,619,-1);flourish(c,595,618,1);
  for(const [x,y,side] of [[374,543,1],[721,537,-1]]){
    c.save();c.translate(x,y);c.rotate(side*.2);sprig(c,0,0,.33,0,'#b19b6e');c.restore();}
  text(c,'Nº  7',693,621,7,'#c3af85','serif','center');
}
function key(c,ch,x,y,row,press=0,light=0){
  c.save();c.translate(x,y);c.rotate(-.025);
  const rx=ch===' '?18:12.4+row*.48, ry=8.4+row*.40;
  oval(c,.4,4,rx+1.1,ry+1.1,'#22292e');box(c,-2.3,-1,5.2,13-press*5,'#ac9c7f');
  c.translate(0,press*5.1);
  oval(c,0,1.8,rx,ry+1,'#5a503f','#262e31',1.4);
  oval(c,0,-1,rx,ry,brass,'#493e34',1.1);
  oval(c,-.1,-1.4,rx-2.1,ry-1.6,light>.15?'#fbe2a4':row===0?'#cbba94':'#decca6','#746750',.75);
  path(c,'M-10 -3 Q-8 -9 2 -9',null,'#fff1c7',1);
  text(c,ch,0,1.9,9.5+row*.34,'#3d3935','Georgia,serif','center','bold');c.restore();
}
function platen(c,m){
  c.save();c.translate(m.x-493,0);
  path(c,'M345 423 L350 405 Q350 401 358 401 L693 397 L707 405 L706 423Z','#42494a','#272c32',2.2);
  rr(c,328,403,392,15,6,'#928b77','#303237',2);
  rr(c,352,395,339,25,9,grad(c,0,395,0,420,[[0,'#262e32'],[.18,'#4b5050'],[.55,'#272e36'],[1,'#584f50']]),'#292e32',1.6);
  for(const x of [326,703]){rr(c,x,392,18,36,6,'#4e473f','#282d32',2);for(let j=2;j<17;j+=3)line(c,[x+j,397,x+j,424],j%2?'#b59a6c':'#84765b',1.35);}
  // Bent chrome carriage return lever with a thumb paddle.
  path(c,'M363 409 L355 390 Q352 385 343 385 L306 384 Q301 384 299 380 L291 369',null,'#3c3a38',6);
  path(c,'M363 407 L355 390 Q353 385 343 384 L305 383 L292 367',null,'#d0b68a',3.6);
  path(c,'M298 370 Q298 374 291 374 L274 368 Q269 365 271 362 Q274 358 281 360Z','#6e6252','#342f31',1.7);
  line(c,[275,362,292,367],shine,1.3);c.restore();
}
function sheet(c,t,m,gl){
  const x=m.x, travel=m.feed*.57, y=269-travel;
  c.save();c.translate(x,0);
  const d=`M-6 ${y+3} Q38 ${y-5} 105 ${y-3} Q162 ${y-2} 208 ${y-10} C216 ${y+10} 208 310 209 355 Q208 398 215 428 L4 432 Q-1 408 2 361 Q5 311 -6 ${y+3}Z`;
  path(c,d,grad(c,0,y,40,434,[[0,'#ffe9ad'],[.12,'#f6d99e'],[.72,'#efce94'],[.88,'#f5dea8'],[1,'#af875d']]),'#735741',1.65);
  mask(c,d,()=>{
    scratches(c,13,270,0,y,214,201,['#906b4530','#fff9d873'],5,-.05);
    line(c,[10,y+11,16,340,15,421],'#b6745b94',.8);
    line(c,[14,y+10,20,341,19,423],'#d0977280',.6);
    path(c,`M2 ${y+6} Q119 ${y-2} 205 ${y-6}`,null,'#ffefc0',1.6);
    // A small printer's ornament and hairline rule at the head of the sheet.
    const hy=y+28;
    line(c,[51,hy+1,91,hy], '#a59068',.8);line(c,[121,hy,164,hy-2],'#a59068',.8);
    star(c,106,hy,6,'#a98c5f');star(c,98,hy,2,'#aa8a61');star(c,115,hy,2,'#aa8a61');
    for(let row=0;row<lines.length;row++){
      for(let col=0;col<lines[row].length;col++){
        const start=(row===0 && col===0)?0:knocks.find(k=>k.row===row&&k.col===col).t;
        const born=liftTime(row,col);
        if(t<start+(start===0?0:.053) || t>=born)continue;
        const gx=glyphX(col),gy=409+row*lead-m.feed, spark=ramp(t,born-1.2,born);
        if(spark>0 && lines[row][col]!==' ')glow(c,gx+3,gy-5,10,13,'255,205,91',spark*.6*gl);
        text(c,lines[row][col],gx,gy,16,spark>.6?'#a96a2d':row===0&&col===0&&t<.8?'#9c6d36':'#45353a','"Courier New",monospace','left','bold');
      }
    }
    if(t>=44.43){
      c.save();c.globalAlpha=ramp(t,44.43,44.74);
      text(c,'A',glyphX(0),409,16,'#9c6d36','"Courier New",monospace','left','bold');c.restore();
    }
  });
  // Rolled-over corner, shaded underside and a thread of reflected lamplight.
  path(c,`M-6 ${y+3} Q0 ${y-2} 12 ${y+1} Q70 ${y-5} 128 ${y-3} Q178 ${y-4} 208 ${y-10} Q207 ${y-5} 202 ${y-4} Q153 ${y+3} 117 ${y+2} Q48 ${y} -6 ${y+6}Z`,'#ffedbd','#b39061',.7);
  if(t>38 && t<40.7){const q=ramp(t,38,40.7);glow(c,108,427-(1-q)*172,138,19,'255,243,179',Math.sin(q*Math.PI)*.5*gl);}
  c.restore();
}
export function buildMachine(){
  const casting=layer(490,230,c=>{c.translate(-299,-416);body(c);},1.95);
  const caps=new Map();for(const row of keyRows)for(const ch of row){const [,,k]=keyPoint(ch);caps.set(ch,layer(35,37,c=>key(c,ch,17,15,k),2));}
  return (c,t,gl)=>{
    const m=mechanics(t);
    glow(c,546,623,282,32,'38,27,33',.73);glow(c,496,624,209,17,'39,26,30',.72);
    platen(c,m);
    // The platen takes the spent sheet completely below the ribbon; a new edge
    // rises on the next half-turn and catches the returning initial.
    c.save();c.beginPath();c.rect(260,125,600,305);c.clip();
    const exchange=224*(ramp(t,37.65,38.84)-ramp(t,38.94,40.72));
    c.translate(0,exchange);sheet(c,t,m,gl);c.restore();
    c.save();c.translate(m.x-493,0);rr(c,344,418,357,6,2,'#927e61','#363538',1);
    for(let i=0;i<75;i++){const x=351+i*4.5;line(c,[x,419,x,419+(i%5===0?3.6:1.7)],'#3b3935',.65);}
    c.restore();c.drawImage(casting,299,416,490,230);
    let hit=m.stroke,age=m.age;
    const active=hit && age<.19, dep=active?Math.max(0,1-Math.abs(age-.06)/.115):0;
    for(const row of keyRows)for(const ch of row){const [x,y,k]=keyPoint(ch);
      if(active && ch===hit.ch.toUpperCase())key(c,ch,x,y,k,dep,dep);
      else c.drawImage(caps.get(ch),x-17,y-15,35,37);}
    // The moving type slug spans the basket-to-ribbon distance in 55 ms.
    if(active && hit.ch!==' '){
      const [kx,ky]=keyPoint(hit.ch),strike=age<.055?ramp(age,0,.055):1-ramp(age,.055,.165);
      const pivot=526+(kx-412)*.16, tipX=pivot+(565-pivot)*strike,tipY=462-52*strike;
      const rise=19*strike;
      path(c,`M416 436 Q492 429 553 ${428-rise} L577 ${426-rise} Q626 426 681 431 L681 434 Q624 431 578 ${431-rise} L552 ${433-rise} Q496 435 417 439Z`,'#49303c');
      path(c,`M418 438 Q489 434 553 ${432-rise} L577 ${430-rise} Q632 429 678 433`,null,'#ab5e5f',1);
      line(c,[pivot,468,tipX,tipY],ink,4.1);line(c,[pivot,467,tipX,tipY],'#e1bd83',1.8);
      rr(c,tipX-3,tipY-3,6.3,5.8,1.1,'#4a4440','#cca977',.9);
      if(strike>.62){star(c,565,409,4*strike,'#ffdc98');glow(c,565,409,21,15,'255,182,79',strike*.5*gl);}
    }
    // A wandering pool of amber picks out the next key, even between impacts.
    const upcoming=knocks.find(k=>k.t>t&&k.ch!==' ');
    if(upcoming && upcoming.t-t<.42 && t>.12){
      const [nx,ny]=keyPoint(upcoming.ch),prev=hit?keyPoint(hit.ch):[nx,ny];
      const a=hit?clamp(age/Math.max(.001,upcoming.t-hit.t)):1;
      const x=prev[0]+(nx-prev[0])*a,y=prev[1]+(ny-prev[1])*a-7*Math.sin(Math.PI*a);
      glow(c,x,y-2,33,22,'255,178,59',.7*gl);star(c,x-5,y-7,3.2*gl,'#fff0ad');}
    if(active&&hit.ch===' ')glow(c,546,582,75,9,'255,201,103',dep*.7*gl);
  };
}
