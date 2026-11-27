import * as T from 'three';
import { canvasTex, ink, mesh } from './craft.js';

export const zapTime = 14.62;
export function beatAt(t) {
  return Math.exp(-5.5 * ((t * 1.6) % 1));
}
const titles = [
  ['NIGHT DRIVE', 'STAGE  01             186 KM/H'],
  ['PLAY ▶ 11:42 PM', 'NOV. 18 1994               SP'],
  ['1UP  003840', 'HI-SCORE  008500'],
  ['X-Y   DUAL TRACE', 'CH1  2V/DIV           1kHz'],
  ['SMPTE  /  75%', 'NTSC-M              LINE 21'],
  ['STORMWATCH', 'PDX   23:47         LIVE'],
  ['MOONFALL', 'ZONE  02           ♥ ♥ ♥'],
];
const atlas = canvasTex(512, 320 * 7, (c) => {
  titles.forEach(([a, b], i) => {
    c.save();
    c.translate(0, (6 - i) * 320);
    const fg = ['#fdc398', '#e8fdff', '#91fafa', '#9dffa1', '#fff6d0', '#adffb4', '#c8ecfc'][i];
    c.shadowColor = '#081322';
    c.shadowBlur = 3;
    ink(c, a, 26, 43, i === 0 ? 23 : 20, fg, true, 'left', 'monospace');
    ink(c, b, 27, 289, 15, fg, true, 'left', 'monospace');
    c.restore();
  });
});
const vtx = `
varying vec2 vUv;
varying vec3 vN,vWorld;
void main() {
    vUv=uv;
    vec4 world=modelMatrix*vec4(position,1.);
    vWorld=world.xyz;
    vN=normalize(mat3(modelMatrix)*normal);
    gl_Position=projectionMatrix*viewMatrix*world;
}
`;
const frag = `
varying vec2 vUv;
varying vec3 vN,vWorld;
uniform float tm,channel,tracking,phosphor,zap,beat,maskType;
uniform sampler2D atlas;
float hash(vec2 p) {
    vec3 q=fract(vec3(p.xyx)*.1031);
    q+=dot(q,q.yzx+33.33);
    return fract((q.x+q.y)*q.z);
}

float line(float d,float w) {
    return 1.-smoothstep(w,w+max(fwidth(d),.00075),abs(d));
}

float cell(float a) {
    return abs(fract(a+.5)-.5);
}

float grid(float a,float w) {
    return (1.-smoothstep(w,w+max(fwidth(a)*.8,.009),cell(a)))*(1.-smoothstep(.32,.8,fwidth(a)));
}

float mountain(float x) {
    return .39+.16*abs(sin(x*9.4+.4))+.05*sin(x*28.)+.024*sin(x*57.);
}

vec3 road(vec2 p) {
    float x=p.x,y=p.y;
    vec3 col=mix(vec3(.97,.225,.34),vec3(.075,.032,.225),smoothstep(.31,.99,y));
    col+=vec3(.32,.10,.06)*exp(-length((p-vec2(.55,.64))*vec2(2.1,1.4))*4.);
    float star=step(.991,hash(floor(p*vec2(224.,140.))))*smoothstep(.65,.97,y);
    col+=star*.7;
    vec2 sun=(p-vec2(.55,.649))*vec2(1.37,1.);
    float bands=step(.30*(1.-smoothstep(.44,.74,y)),fract(y*46.));
    col=mix(col,mix(vec3(1.,.27,.31),vec3(1.,.90,.44),smoothstep(.51,.79,y)),(1.-smoothstep(.156,.161,length(sun)))*bands);
    float mh=mountain(x);
    if(y<mh) {
        col=mix(vec3(.21,.056,.35),vec3(.10,.115,.32),clamp((mh-y)*4.,0.,1.));
        float gy=(mh-y)*(8.+x*2.);
        float gx=x*15.+(mh-y)*8.;
        float net=max(grid(gx,.022),max(grid(gy,.029),grid(gx+gy,.022)));
        col+=net*vec3(.65,.12,.37)+line(y-mh,.002)*vec3(.87,.29,.52);
    }
    float d=.407-y;
    if(d>0.) {
        float xx=(x-.51)/max(d,.002),depth=1./max(d,.002);
        float movement=tm*1.6;
        float ground=max(grid(xx*1.65,.022),grid(depth*.72-movement,.028));
        col=vec3(.108,.047,.233)+ground*vec3(.52,.10,.49);
        if(abs(xx)<1.19) {
            col=mix(vec3(.12,.08,.225),vec3(.23,.12,.31),d*2.);
            col+=line(abs(xx)-1.16,.022)*vec3(.91,.37,.59);
            col+=line(abs(xx)-.53,.019)*smoothstep(.32,.43,fract(depth*.27-movement*.54))*vec3(.95,.68,.45);
        }
    }
    // Wide, stepped rear silhouette and paired tail lamps of the player's coupe.
    vec2 car=(floor(p*vec2(220.,152.))/vec2(220.,152.)-vec2(.508+.022*sin(tm*.7),.138))*vec2(1.,1.4);
    float cx=abs(car.x);
    if(cx<.120&&car.y>-.034&&car.y<.045-.25*cx || cx<.084&&car.y>.016&&car.y<.088-.38*cx) {
        col=vec3(.115,.071,.19);
        if(car.y>.044)col=vec3(.32,.19,.42)+.14*step(.55,fract(car.y*220.));
        if(car.y>.005&&car.y<.025&&cx>.042)col=vec3(1.2,.24,.23)*(.73+.27*step(.2,fract(cx*220.)));
        if(abs(car.y+.016)<.005)col=vec3(.73,.22,.43);
        if(cx<.022&&abs(car.y)<.009)col=vec3(.94,.76,.46);
    }
    return col;
}

vec3 night(vec2 p) {
    float y=p.y,x=p.x;
    vec3 c=mix(vec3(.36,.48,.66),vec3(.047,.091,.22),y);
    float refl=y<.32?1.:0.;
    float yy=mix(y,.64-y,refl);
    float xx=x+refl*.024*sin(y*210.+tm*3.);
    for(int i=0;i<2;i++) {
        float f=13.+float(i)*6.,idx=floor(xx*f+float(i)*3.);
        float b=.35+hash(vec2(idx,float(i)+3.))*(.36-float(i)*.1);
        if(yy<b) {
            c=mix(vec3(.073,.11,.217),vec3(.10,.18,.26),float(i));
            vec2 a=vec2(xx*f*5.,yy*41.);
            float win=step(.47,fract(a.x))*step(.55,fract(a.y))*step(.53,hash(floor(a)));
            c+=win*mix(vec3(.3,.64,.70),vec3(.96,.48,.27),hash(vec2(idx,3.)));
        }
    }
    c*=mix(1.,.52+.22*sin(y*240.),refl);
    float pole=line(abs(x-.73)-.003,.002)*step(y,.74);
    c=mix(c,vec3(.05,.06,.12),pole);
    vec2 l=(p-vec2(.706,.74))*vec2(1.4,1.);
    c+=vec3(1.,.55,.26)*(.75*exp(-length(l)*42.)+exp(-length(l)*200.));
    vec2 q=vec2((x+.12*y)*135.,y*11.+tm*4.);
    c+=vec3(.26,.37,.48)*step(.88,fract(q.x))*step(.72,fract(q.y+hash(vec2(floor(q.x),0.))))*.65;
    return c;
}

float sprite(vec2 q) {
    q=floor(q);
    float x=abs(q.x),y=q.y;
    return float((y==3.&&x==2.)||(y==2.&&x<=2.)||(y==1.&&x<=3.&&x!=1.)||(y==0.&&x<=4.)||(y==-1.&&(x==3.||x==1.)));
}

vec3 shooter(vec2 p) {
    vec2 pix=floor(p*vec2(180.,140.));
    vec3 c=mix(vec3(.035,.066,.19),vec3(.175,.047,.25),p.y);
    vec2 a=pix+vec2(0.,floor(tm*14.));
    c+=step(.996,hash(a))*vec3(.74,.79,1.);
    vec2 formation=pix-vec2(20.+floor(6.*sin(tm)),70.);
    vec2 idx=floor(formation/vec2(21.,13.));
    vec2 e=mod(formation,vec2(21.,13.))-vec2(9.,6.);
    if(idx.x>=0.&&idx.x<7.&&idx.y>=0.&&idx.y<4.)c+=sprite(e)*mix(vec3(.16,.88,.91),vec3(1.,.29,.43),idx.y/3.);
    float shipx=87.+floor(25.*sin(tm*.7));
    vec2 s=pix-vec2(shipx,21.);
    if(abs(s.x)<8.-abs(s.y)*.65&&s.y<11.-abs(s.x)*2.&&s.y>-6.)c=abs(s.x)<2.?vec3(1.,.47,.19):vec3(.42,.9,1.);
    if(abs(pix.x-shipx)<1.1&&mod(pix.y-tm*52.,32.)<5.&&pix.y>31.)c+=vec3(1.,.66,.3);
    return c;
}

vec3 scope(vec2 p) {
    vec2 q=(p-.5)*vec2(1.22,1.);
    vec3 c=vec3(.025,.12,.085)+vec3(.06,.17,.09)*max(grid(p.x*10.,.016),grid(p.y*8.,.016));
    float d=1.;
    for(int i=0;i<72;i++) {
        float a=float(i)*6.28318/72.,b=a+6.28318/72.;
        vec2 s=vec2(sin(2.*a+tm*.59),sin(3.*a+tm*.23))*(.31+.026*beat);
        vec2 e=vec2(sin(2.*b+tm*.59),sin(3.*b+tm*.23))*(.31+.026*beat)-s;
        d=min(d,length(q-s-e*clamp(dot(q-s,e)/max(dot(e,e),1e-6),0.,1.)));
    }
    return c+vec3(.32,1.,.46)*(exp(-d*240.)+.47*exp(-d*63.));
}

vec3 bars(vec2 p) {
    float i=floor(clamp(p.x,.0,.999)*7.);
    vec3 c=vec3(float(i==0.||i==1.||i==4.||i==5.),float(i<4.),float(i==0.||i==2.||i==4.||i==6.))*.87+.06;
    if(p.y<.25)c=mix(vec3(.09,.12,.23),vec3(.81),step(.7,fract(p.x*4.)));
    if(p.y<.12)c=vec3(.12+.25*floor(p.x*4.));
    return c;
}

vec3 radar(vec2 p) {
    vec2 q=(p-.5)*vec2(1.32,1.);
    float r=length(q),a=atan(q.y,q.x);
    vec3 c=vec3(.024,.13,.13);
    c+=vec3(.07,.32,.24)*max(max(grid(p.x*12.,.013),grid(p.y*9.,.013)),grid(r*9.,.023));
    float sweep=exp(-mod(tm*1.26-a,6.283)*2.7)*step(r,.44);
    c+=vec3(.13,.52,.27)*sweep;
    float cloud=sin(q.x*17.+q.y*13.+tm*.18)+sin(q.y*23.-q.x*7.)*.51+hash(floor(p*118.))*.53;
    if(cloud>.87&&r<.43)c+=mix(vec3(.09,.52,.29),vec3(.98,.69,.17),smoothstep(.87,1.8,cloud));
    return c;
}

vec3 falls(vec2 p) {
    vec2 q=floor(p*vec2(175.,132.))/vec2(175.,132.);
    vec3 c=mix(vec3(.51,.32,.56),vec3(.063,.13,.31),q.y);
    float moon=length((q-vec2(.68,.72))*vec2(1.35,1.));
    if(moon<.118)c=vec3(.95,.81,.66);
    float ridge=.45+.1*sin(q.x*10.)+.045*sin(q.x*35.);
    if(q.y<ridge)c=vec3(.20,.18,.39);
    float ledge=.30+.08*sin(q.x*17.);
    if(q.y<ledge)c=vec3(.10,.22,.31);
    if(q.x>.28&&q.x<.40&&q.y<.47)c=mix(vec3(.25,.64,.75),vec3(.68,.91,.92),step(.5,fract(q.y*8.+tm*2.+hash(vec2(floor(q.x*175.),2.)))));
    if(q.y<.12)c+=vec3(.13,.32,.44)*(.4+grid(q.y*42.+sin(q.x*9.+tm),.08));
    return c;
}

vec3 signal(vec2 p) {
    if(channel<.5)return road(p);
    if(channel<1.5)return night(p);
    if(channel<2.5)return shooter(p);
    if(channel<3.5)return scope(p);
    if(channel<4.5)return bars(p);
    if(channel<5.5)return radar(p);
    return falls(p);
}

void main() {
    vec2 n=vUv*2.-1.;
    vec2 p=.5+.5*n*(1.+.057*dot(n,n));
    float row=floor(vUv.y*220.),tick=floor(tm*30.);
    // Line jitter and the head-switch tear precede magnetic deflection.
    float tear=exp(-abs(vUv.y-fract(tm*.21+.25*channel))*110.);
    p.x+=tracking*(.004*(hash(vec2(row,tick))-.5)+tear*.04*sin(23.*tm));
    float phase=tm*19.+dot(n,n)*6.;
    p+=zap*.082*vec2(sin(phase+n.y*4.),cos(phase+n.x*6.))*(.45+length(n));
    vec3 s=signal(p);
    vec4 os=texture2D(atlas,vec2(clamp(p.x,.001,.999),(channel+clamp(p.y,.005,.995))/7.));
    s=mix(s,os.rgb,os.a*.93);
    s+=tracking*(hash(vec2(floor(p.x*470.),row+tick))-.45)*(.19+.55*tear);
    vec3 mag=.57+.54*cos(phase+p.x*6.+p.y*3.+vec3(0.,2.09,4.18));
    s=mix(s,s*.48+mag*.87,zap*.87);

    // Grille and scanlines stay fixed on the glass as the signal warps beneath them.
    vec2 lattice=vUv*vec2(196.,155.);
    float band=lattice.y;
    float lod=1.-smoothstep(.32,1.1,fwidth(band));
    float scan=.5+.5*cos(band*6.283);
    s*=1.-(.1+.32*phosphor)*lod*scan;
    float gx=lattice.x+.5*maskType*mod(floor(band),2.);
    vec3 grille=.5+.5*cos((gx+vec3(0.,-.3333,-.6667))*6.283);
    float resolve=1.-smoothstep(.14,.43,fwidth(lattice.x));
    s*=mix(vec3(1.),.42+1.18*grille,(.45+.55*phosphor)*resolve);
    s*=1.-.20*pow(min(1.,length(n)*.73),3.);
    s+=.022*vec3(.56,.83,1.);

    // View-dependent lamp and blind reflections sit above the phosphor surface.
    vec3 eye=normalize(cameraPosition-vWorld),R=reflect(-eye,normalize(vN));
    vec3 lamp=normalize(vec3(-4.34,1.98,.74)-vWorld);
    float shine=pow(max(0.,dot(R,lamp)),90.);
    s+=vec3(.61,.37,.17)*shine;
    s+=vec3(.12,.16,.23)*pow(1.-max(dot(normalize(vN),eye),0.),3.);
    s+=vec3(.04,.06,.08)*smoothstep(.56,.94,vUv.y)*(.5+.5*cos(vUv.y*68.+n.x*n.x*2.));
    gl_FragColor=vec4(pow(max(s,vec3(.0)),vec3(2.0))*(1.08+phosphor*.46),1.);
    #include <colorspace_fragment>
}
`;
const tubes = [];
export function crt(p, x, y, z, w, h, id, bulge) {
  const geom = new T.PlaneGeometry(w, h, 52, 42),
    pos = geom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let u = pos.getX(i) / (w * 0.5),
      v = pos.getY(i) / (h * 0.5);
    pos.setXYZ(
      i,
      u * w * 0.5 * (1 - 0.074 * Math.pow(v, 6)),
      v * h * 0.5 * (1 - 0.083 * Math.pow(u, 6)),
      bulge * (1 - 0.54 * u * u - 0.46 * v * v),
    );
  }
  geom.computeVertexNormals();
  const uniforms = {
    tm: { value: 0 },
    channel: { value: id },
    maskType: { value: id % 2 },
    tracking: { value: 0.18 },
    phosphor: { value: 0.64 },
    zap: { value: 0 },
    beat: { value: 0 },
    atlas: { value: atlas },
  };
  const mat = new T.ShaderMaterial({ vertexShader: vtx, fragmentShader: frag, uniforms });
  mesh(p, geom, mat, x, y, z);
  tubes.push({ uniforms, id });
}
export function setSignals(t, tracking, glow, eventAge, offset) {
  let env = eventAge >= 0 ? Math.exp(-eventAge * 3.1) * Math.min(1, eventAge * 32) : 0;
  for (const { id, uniforms: u } of tubes) {
    u.tm.value = t;
    u.tracking.value = tracking;
    u.phosphor.value = glow;
    u.zap.value = env;
    u.channel.value = (id + offset) % 7;
    u.beat.value = beatAt(t);
  }
  return env;
}
