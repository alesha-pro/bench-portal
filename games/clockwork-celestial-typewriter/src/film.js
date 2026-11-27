import {W,H,clamp,mix,ramp,wave,glow,oval,random,paperTexture,star} from './paint.js';
import {roomLayer,deskLayer,drawWindow} from './attic.js';
import {stillLife,curtainLayer,steam} from './objects.js';
import {catPainter} from './cat.js';
import {buildMachine} from './machine.js';
import {backTrain,flight,returning} from './flight.js';
export const DURATION=45.0;
export function createFilm(canvas){
  const c=canvas.getContext('2d',{alpha:false,willReadFrequently:true});
  const room=roomLayer(),desk=deskLayer(),props=stillLife(),cat=catPainter(),type=buildMachine(),curtain=curtainLayer();
  const grain=c.createPattern(paperTexture(),'repeat');
  const r=random(331),motes=Array.from({length:48},()=>[r()*1200,r()*675,r()*6.28,.4+r()]);
  function draw(t,gl=1){
    const scale=canvas.width/W;
    c.setTransform(scale,0,0,canvas.height/H,0,0);c.lineJoin=c.lineCap='round';c.imageSmoothingEnabled=true;c.imageSmoothingQuality='medium';
    const exit=ramp(t,28.4,35.3)*(1-ramp(t,38.8,43.9));
    const close=ramp(t,.2,4.5)*(1-ramp(t,6.6,11.5));
    const wide=ramp(t,7.2,12.7)*(1-ramp(t,39.2,44.5));
    const z=1.063+.34*close-.047*wide+.44*exit;
    const ax=mix(516,1170,exit),ay=mix(443,219,exit);
    c.save();c.translate(ax*(1-z),ay*(1-z));c.scale(z,z);
    c.drawImage(room,0,0,W,H);drawWindow(c,t);c.drawImage(desk,0,0,W,H);
    glow(c,151,270,248,218,'255,162,68',.20+.012*wave(t,14));
    backTrain(c,t,gl);c.drawImage(props,0,0,W,H);steam(c,t);cat(c,t);type(c,t,gl);
    c.drawImage(curtain,0,0,W,H);flight(c,t,gl);returning(c,t,gl);
    for(const [x,y,p,s] of motes){const a=.18+.16*wave(t,4,p);
      oval(c,x+13*wave(t,2,p),y+10*wave(t,3,p),s,s*.7,'rgba(255,218,159,'+a+')');}
    c.restore();
    const vignette=c.createRadialGradient(601,330,236,600,333,734);
    vignette.addColorStop(0,'#261c2300');vignette.addColorStop(.7,'#2c1b2b0e');vignette.addColorStop(1,'#22192569');
    c.fillStyle=vignette;c.fillRect(0,0,W,H);
    c.fillStyle=grain;c.fillRect(0,0,W,H);
  }
  return draw;
}
