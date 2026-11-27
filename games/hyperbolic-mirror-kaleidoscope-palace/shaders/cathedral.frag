#version 300 es
precision highp float;
precision highp int;

uniform vec2 uSize;
uniform float uTime, uFold, uGlow;
uniform int uPalette;
uniform vec3 uTravel;
uniform vec2 uLook;
uniform bool uFree;
out vec4 fragColor;

const float PI=3.14159265359, TAU=6.28318530718, DECK=10.5;
vec3 brass;
const vec3 limestone=vec3(.68,.615,.50);
float fold, angle, footprint;
float sat(float n){return clamp(n,0.,1.);}
float sq(float n){return n*n;}
float rep(float x,float n){return mod(x+.5*n,n)-.5*n;}
mat2 rot(float a){return mat2(cos(a),sin(a),-sin(a),cos(a));}
vec2 closest(vec2 a,vec2 b){return a.x<b.x?a:b;}
float oct(vec2 p){p=abs(p);return max(max(p.x,p.y),dot(p,vec2(.70710678)));}
vec2 wedge(vec2 p,float n){
    float a=rep(atan(p.y,p.x+.000001),TAU/n);
    return length(p)*vec2(cos(a),abs(sin(a)));
}
float hash(vec3 p){
    p=fract(p*vec3(.1031,.1030,.0973));
    p+=dot(p,p.yxz+33.33); return fract((p.x+p.y)*p.z);
}
float noise3(vec3 p){
    vec3 c=floor(p), f=fract(p); f=f*f*(3.-2.*f);
    return mix(mix(mix(hash(c),hash(c+vec3(1,0,0)),f.x),
                   mix(hash(c+vec3(0,1,0)),hash(c+vec3(1,1,0)),f.x),f.y),
               mix(mix(hash(c+vec3(0,0,1)),hash(c+vec3(1,0,1)),f.x),
                   mix(hash(c+vec3(0,1,1)),hash(c+1.),f.x),f.y),f.z);
}
// Pointed centers migrate apart as the fold opens; the segmented crown is a cusped ogee.
float arch(vec2 p,float span,float spring){
    float offset=span*(.22+.19*fold);
    vec2 v=vec2(abs(p.x)+offset,max(p.y-spring,0.));
    float a=atan(v.y,v.x);
    float cusps=(.035+.10*fold)*span*.24*abs(sin(a*19.));
    float roundArch=length(v)-(span+offset)+cusps;
    vec2 vp=vec2(abs(p.x),max(p.y-spring,0.));
    float crystal=max(vp.x-span,max(dot(vp,vec2(.7071))-.994*span,vp.y-1.23*span));
    return mix(roundArch,crystal,smoothstep(.49,.98,fold));
}
float railingPost(vec2 p,float y){
    float molding=.035+.065*exp(-10.*abs(y-.32))+.08*exp(-7.*abs(y-5.1));
    return oct(p)-.115-molding;
}
// Spatial KIFS: reflect into the octant, fold a box, invert the inner sphere,
// then apply a similarity. The inverse accumulated scale bounds each nested niche.
float muqarnas(vec2 p){
    vec2 q=abs(p); float scale=1., relief=0.;
    for(int k=0;k<4;k++){
        q=abs(clamp(q,-.72,.72)*2.-q);
        q=abs(rot(angle)*q);
        if(q.y>q.x) q=q.yx;
        float inv=clamp(.39/max(dot(q,q),.065),1.,2.15);
        relief+=max(0.,.50-max(q.x*.72,q.y))* .52/scale;
        q=q*inv*1.82-vec2(.86,.32);
        scale*=1.82*inv;
    }
    return relief;
}
float lampHeight(float z){return 5.72+.28*cos(TAU*(z-4.)/24.);}
vec2 lamp(vec3 p){
    float r=length(p.xz);
    // Faceted central pear, stepped gallery, pierced crown and suspension.
    float o=oct(p.xz);
    vec2 h=vec2(max(o*.88+abs(p.y+.16)*.65-.45,abs(p.y+.16)-.56),8.);
    float rim=max(abs(o-.49)-.055,abs(p.y-.12)-.075);
    float finial=max(o*.86+abs(p.y+.85)*.32-.13,abs(p.y+.85)-.35);
    float crown=max(abs(o-(.49-.43*clamp((p.y-.18)/.50,0.,1.)))-.042,abs(p.y-.43)-.25);
    h=closest(h,vec2(min(min(rim,finial),min(crown,max(r-.030,-p.y-.12))),3.));
    vec2 q=wedge(p.xz,8.);
    float arm=max(abs(p.y-.08-.22*sq(r-.28))-.030,max(q.y-.029,abs(q.x-.61)-.36));
    float hoop=max(abs(o-.89)-.032,abs(p.y-.19)-.045);
    float cage=max(q.y-.022,abs(o-(.49-.68*abs(p.y+.13)))-.030);
    h=closest(h,vec2(min(min(arm,hoop),max(cage,abs(p.y+.13)-.56)),3.));
    float drop=length(q-vec2(.87,0.));
    float prism=drop*.86+abs(p.y+.17)*.30-.098;
    return closest(h,vec2(min(prism,max(drop-.023,abs(p.y-.15)-.16)),9.));
}
vec2 mapScene(vec3 p){
    float y=mod(p.y+.55,DECK)-.55, x=abs(p.x), z=rep(p.z,8.);
    float courtZ=rep(p.z-12.,24.), shaft=oct(vec2(p.x,courtZ));
    float slab=min(abs(y),abs(y-DECK));
    vec2 hit=vec2(max(slab-.14,3.15-shaft),1.);
    // Voussoirs, stepped archivolts and pierced tympanum.
    float a=arch(vec2(x,y),4.04,2.88);
    float reveal=.16+.11*exp(-9.*abs(a-.11))+.115*exp(-8.*abs(a-.57));
    float rose=length(vec2(x-4.38,y-6.84));
    float gate=max(max(-a,abs(z)-reveal),max(-y,.71-rose));
    // The triangular spandrels are pierced by a small interlaced screen.
    vec2 screen=mod(vec2(x,y)*2.6+.5,1.)-.5;
    float screenHole=(.18-oct(screen)) / 2.6;
    gate=max(gate,min(screenHole,min(a-.88,min(y-4.5,rose-.91))));
    hit=closest(hit,vec2(gate,2.));
    // Separate archivolts sit in front of the main gate on turned colonnettes.
    // Their curving brass moldings cast narrow contact shadows onto the jamb.
    float trimD=length(vec2(a+.092,abs(z)-.33))- .073;
    trimD=min(trimD,length(vec2(a-.122,abs(z)-.38))-.055);
    float ropePhase=atan(max(y-2.88,0.),x+1.13)*83.+min(y-2.88,0.)*12.;
    trimD=min(trimD,length(vec2(a+.094-.027*cos(ropePhase),abs(z)-.385-.027*sin(ropePhase)))-.028);
    hit=closest(hit,vec2(max(-y,trimD),3.));
    // Mullions and glass are recessed behind a ring of carved stone.
    float rosette=max(abs(rose-.72)-.085,abs(z)-.32);
    hit=closest(hit,vec2(rosette,3.));
    hit=closest(hit,vec2(max(rose-.74,abs(z)-.066),6.));
    // Clustered piers with octagonal plinths and muqarnas capitals.
    vec2 pier=vec2(x-4.42,z);
    float cap=sat((y-2.58)/.64);
    float profile=.34+.24*cap+.04*cos(y*39.)*cap+
        .18*exp(-4.*max(0.,y-.18))+.056*exp(-16.*abs(y-.55));
    float col=oct(pier)-profile;
    vec2 flute=wedge(pier,8.);
    col=min(col,length(flute-vec2(profile*.92,0.))-.088);
    hit=closest(hit,vec2(max(col,max(-y,y-3.24)),4.));
    // Side galleries open into a second, recessed bank of illuminated windows.
    float sideArch=arch(vec2(rep(p.z-4.,8.),y),3.30,2.32);
    hit=closest(hit,vec2(max(max(-sideArch,abs(x-5.60)-.22),-y),5.));
    hit=closest(hit,vec2(7.05-x,7.));
    // Groin vault. The relief is evaluated only inside a conservative ceiling bound.
    vec2 panel=vec2(p.x,rep(p.z-4.,8.));
    float roof=9.57-.064*sq(min(x,6.))-.058*sq(panel.y);
    float diag=abs(abs(panel.x)*.73-abs(panel.y))*.81;
    float rib=min(diag,min(abs(panel.x),abs(panel.y)));
    float cofferDepth=.37*exp(-9.*rib)+.09*exp(-19.*abs(rib-.17));
    // Centre the roof on its own repetition so its upper face is continuous
    // while a descending ray crosses the floor coordinate's wrapping plane.
    float roofY=rep(p.y-(DECK-.95),DECK)+DECK-.95;
    float ceilD=(roof-roofY)*.65;
    if(ceilD<.85){
        vec2 cell=abs(mod(panel*.77+1.,2.)-1.);
        float cup=oct(cell);
        float pendant=.25*max(0.,1.-2.*cup)+.09*max(0.,1.-3.8*abs(cup-.65));
        ceilD-=muqarnas(cell)*.38+cofferDepth+pendant;
    } else ceilD-=.75;
    ceilD=max(ceilD,roofY-(DECK-.32));
    if(ceilD>0.)ceilD=.32*ceilD+.63*max(0.,ceilD-.78);
    hit=closest(hit,vec2(max(ceilD,3.26-shaft),10.));
    // Eight open arcades encircle the continuous vertical light well.
    vec2 sector=wedge(rot(PI/8.)*vec2(p.x,courtZ),8.);
    if(shaft<4.75){
        vec2 pierUV=sector-vec2(3.47,0.);
        float post=railingPost(pierUV,y);
        vec2 reeds=wedge(pierUV,8.);
        post=min(post,length(reeds-vec2(.155,0.))-.035);
        hit=closest(hit,vec2(max(post,max(-y,y-5.58)),11.));
        vec2 side=wedge(vec2(p.x,courtZ),8.);
        float arcade=arch(vec2(side.y,y),1.26,3.74);
        float drum=max(abs(side.x-3.19)-.109,max(-arcade,abs(y-4.51)-1.05));
        float lip=max(abs(shaft-3.22)-.13,abs(y-.14)-.095);
        float upper=max(abs(shaft-3.19)-.17,abs(y-5.50)-.075);
        float bead=length(vec2(shaft-3.33,y-5.39))-.050;
        hit=closest(hit,vec2(min(upper,bead),3.));
        float bezel=length(sector-vec2(3.47,0.));
        float jewel=max(bezel*.85+abs(y-2.83)*.42-.244,abs(y-2.83)-.36);
        hit=closest(hit,vec2(jewel,12.));
        float bands=max(abs(bezel-.179)-.05,abs(abs(y-2.83)-.24)-.043);
        float cage=max(max(abs(bezel-.207+.28*abs(y-2.83))-.028,reeds.y-.018),abs(y-2.83)-.32);
        hit=closest(hit,vec2(min(bands,cage),3.));
        hit=closest(hit,vec2(min(drum,lip),11.));
    } else hit.x=min(hit.x,shaft-3.85);
    float lampZ=p.z-rep(p.z-4.,8.);
    vec3 lp=vec3(p.x,y-lampHeight(lampZ),p.z-lampZ);
    if(abs(rep(lampZ-12.,24.))>1.){
        float bound=max(length(lp.xz)-1.08,-lp.y-1.29);
        if(bound<hit.x){
            if(bound>.26) hit.x=min(hit.x,bound);
            else hit=closest(hit,lamp(lp));
        }
    }
    return hit;
}

vec3 normalAt(vec3 p,float e){
    const vec2 k=vec2(1.,-1.);
    return normalize(k.xyy*mapScene(p+k.xyy*e).x+k.yyx*mapScene(p+k.yyx*e).x+
                     k.yxy*mapScene(p+k.yxy*e).x+k.xxx*mapScene(p+k.xxx*e).x);
}
vec2 trace(vec3 ro,vec3 rd,int limit,float farClip,float bias){
    float t=bias, previous=bias;
    for(int i=0;i<392;i++){
        vec2 h=mapScene(ro+rd*t);
        if(h.x<max(.0014,t*.00017)){
            // Relief and slender joinery are distance estimates. If the last
            // step straddled a surface, recover its first bracketed crossing.
            if(h.x<-.0006 && t>previous){
                float lo=previous, hi=t;
                for(int j=0;j<12;j++){
                    float mid=.5*(lo+hi);
                    if(mapScene(ro+mid*rd).x>0.) lo=mid;
                    else hi=mid;
                }
                t=.5*(lo+hi);
                h=mapScene(ro+rd*t);
            }
            return vec2(t,h.y);
        }
        previous=t;
        t+=max(.0009,h.x*.84);
        if(t>farClip || i+1>=limit) break;
    }
    return vec2(t,-1.);
}
float shadow(vec3 p,vec3 dir,float end){
    float t=.055, shade=1.;
    for(int i=0;i<30;i++){
        float d=mapScene(p+dir*t).x;
        if(d<.002) return .10;
        shade=min(shade,9.*d/t);
        t+=clamp(d*.86,.025,1.);
        if(t>=end)break;
    }
    return mix(.10,1.,sat(shade));
}
vec3 blue(){return uPalette==1?vec3(.11,.205,.225):(uPalette==2?vec3(.023,.060,.205):vec3(.009,.054,.12));}
vec3 jade(){return uPalette==1?vec3(.48,.56,.49):(uPalette==2?vec3(.009,.20,.34):vec3(.010,.224,.154));}
float line(float d,float w,float scale){
    float aa=clamp(footprint*scale,.001,.13);
    return 1.-smoothstep(w,w+aa,abs(d));
}
// Two superimposed squares form the khatam. Neighbouring stars share their
// diagonal straps; the eight petals contain a second, scaled knot.
float star(vec2 p,float r){
    vec2 a=abs(p),b=abs(rot(PI*.25)*p);
    return min(max(a.x,a.y),max(b.x,b.y))-r;
}
vec3 zellij(vec2 uv,float scale,vec3 stone,float metal){
    vec2 p=uv*scale;
    vec2 q=fract(p+.5)-.5, k=vec2(.5)-abs(q);
    float s=star(q,.254), small=star(k,.135);
    float ribbons=min(abs(s),abs(small));
    float kite=abs(abs(q.x)-abs(q.y))-.12;
    vec3 tile=mix(blue(),jade(),.17+.63*float(s<0.));
    tile=mix(tile,stone*.60,smoothstep(.085,.10,abs(kite))*float(s>0. && small>0.));
    tile=mix(tile,blue()*.72,float(star(q,.16)<0.));
    tile=mix(tile,jade(),float(small<0.));
    float trim=max(line(ribbons,.0055,scale),line(star(q,.166),.004,scale));
    trim=max(trim,line(kite,.007,scale)*float(s>0. && small>0.));
    return mix(tile,brass*(.76+.30*metal),trim);
}
vec3 windowGlass(vec2 p,float count,out float light){
    float r=length(p);
    float sector=TAU/count;
    float az=atan(p.y,p.x+.000001), petalID=floor(az/sector+.5);
    vec2 w=wedge(p,count);
    float petal=length((w-vec2(.565,0.))*vec2(.93,1.80));
    float rings=min(abs(r-.91),min(abs(r-.82),abs(r-.185)));
    float border=min(rings,min(abs(petal-.275),abs(petal-.166)));
    border=min(border,min(abs(star(p,.234)),abs(star(rot(PI/8.)*p,.132))));
    float teeth=abs(rep(az,sector*.5))*r;
    if(r>.82)border=min(border,teeth);
    if(petal<.275 && petal>.166)border=min(border,abs(w.x-.55));
    vec2 medallion=(w-vec2(.565,0.))*vec2(1.,1.65);
    float intaglio=star(medallion,.071);
    border=min(border,min(abs(intaglio),abs(length(medallion)-.116))*.92);
    float lead=line(border,.0085,.7);
    float glass=.88+.19*noise3(vec3(p*33.,1.))+.14*cos(dot(p,vec2(12.,6.))+2.*sin(p.y*9.));
    vec3 c=mix(vec3(.004,.12,.24),vec3(.010,.36,.20),.5+.5*cos(2.*az));
    if(petal<.275)c=mix(vec3(.92,.30,.037),vec3(.70,.12,.022),.35+.35*cos(petalID*PI));
    if(petal<.166)c=mix(vec3(.005,.21,.16),vec3(.013,.53,.31),w.x);
    if(intaglio<0.)c=mix(vec3(.003,.076,.22),vec3(.88,.52,.12),float(length(medallion)<.038));
    if(r<.27)c=mix(vec3(.006,.22,.45),vec3(.96,.51,.06),float(star(p,.176)<0.));
    if(r<.115)c=vec3(.78,.77,.34);
    if(r>.82)c=mix(vec3(.014,.35,.31),vec3(.84,.37,.04),float(mod(floor(az/(sector*.5)),2.)==0.));
    light=(1.-lead)*glass;
    return mix(c,vec3(.065,.044,.026),lead);
}
struct Surface{vec3 color;float metal;float rough;vec3 emission;};
Surface surface(vec3 p,vec3 n,float id){
    float y=mod(p.y+.55,DECK)-.55, x=abs(p.x), z=rep(p.z,8.);
    vec3 local=vec3(p.x,y,rep(p.z,24.));
    float grain=noise3(local*4.7)*.7+.3*noise3(local*15.2);
    float vein=abs(sin(dot(local,vec3(4.2,.8,-1.4))+4.*noise3(local*1.65)+2.*grain));
    vec3 marble=mix(limestone,vec3(.37,.31,.25),.28*grain+.44*exp(-12.*vein));
    if(uPalette==1)marble*=vec3(1.12,1.17,1.2);
    if(uPalette==2)marble*=vec3(.53,.67,.90);
    vec3 gold=brass*(.71+.47*grain);
    vec3 c=marble, em=vec3(0.);
    float m=.06, r=.36;
    if(id==1.){
        vec2 uv=p.xz;
        float ax=abs(p.x), dist=oct(vec2(p.x,rep(p.z-12.,24.)));
        bool runner=ax<1.30 || (dist>3.16 && dist<3.72);
        if(runner){
            c=zellij(uv,4./3.,blue()*1.40,.84);
            m=.25; r=.19;
        }else{
            vec2 tiles=abs(fract(uv*(2./3.)+.5)-.5);
            float seam=max(tiles.x,tiles.y);
            c=mix(blue()*(.28+.39*grain),marble*.58,float(ax>1.64 && ax<3.04));
            c=mix(c,gold*.61,line(seam-.497,.003,.68));
            c=mix(c,gold,max(line(ax-1.40,.027,1.),line(ax-3.09,.020,1.)));
            m=.29; r=.15;
        }
    }else if(id==2. || id==5. || id==11.){
        float a=id==2.?arch(vec2(x,y),4.04,2.88):arch(vec2(rep(p.z-4.,8.),y),3.30,2.32);
        vec2 uv=id==5.?vec2(p.z,y):vec2(p.x,y);
        float ang=atan(max(y-(id==5.?2.32:2.88),0.),abs(uv.x-(id==5.?p.z-rep(p.z-4.,8.):0.))+1.);
        float vous=ang*19. + min(y-2.88,0.)*3.;
        if(id==11.){
            float sh=oct(vec2(p.x,rep(p.z-12.,24.)));
            vec2 poles=wedge(rot(PI/8.)*vec2(p.x,rep(p.z-12.,24.)),8.)-vec2(3.47,0.);
            float grooves=cos(8.*atan(poles.y,poles.x+.000001));
            c=mix(mix(blue()*1.3,marble*.79,smoothstep(-.6,.24,grooves)),gold,
                  float(y<.28 || y>5.31 || abs(rep(y,.78))<.042));
            if(y<.6 || abs(y-2.83)<.52)c=mix(c,gold,.55);
            if(abs(sh-3.19)<.14 && y>3.1)c=zellij(vec2(atan(p.x,rep(p.z-12.,24.))*3.4,y),1.9,marble,1.);
            m=.36;
        }else if(a<.68){
            c=mix(marble,mix(blue(),jade(),.2)*1.35,float(mod(floor(vous),2.)==0.));
            float trim=max(line(a-.075,.032,1.),line(a-.57,.039,1.));
            trim=max(trim,max(line(a-.19,.015,1.),line(a-.46,.012,1.)));
            c=mix(c,gold,trim);
            if(a>.21 && a<.42)c=mix(c,gold*.86,.58*line(sin(vous*PI*4.)*.07+(.32-a),.014,1.));
            m=.18+trim*.58;
        }else{
            c=zellij(uv,1.25,mix(blue()*1.45,marble,.44),.65);
            float frieze=line(rep(y+.1,.84),.023,1.);
            c=mix(c,gold,.65*frieze);m=.31;
        }
    }else if(id==4.){
        float band=max(line(y-.53,.055,1.),line(y-2.59,.075,1.));
        if(y<.28 || y>2.80)band=max(band,.70+.3*cos(y*41.));
        c=mix(mix(blue()*(.37+.25*grain),marble,float(abs(z)>.15)),gold,band);
        m=.18+.61*band;r=.23;
    }else if(id==3.){
        c=gold;m=.88;r=.23;
    }else if(id==6. || id==7.){
        vec2 uv=id==6.?vec2(x-4.38,y-6.84)/.71:vec2(rep(p.z-4.,8.)*.64,(y-4.58)*.64);
        float radius=length(uv);
        if(id==6. || radius<1.){
            float lit;c=windowGlass(uv,12.,lit);em=c*lit*(id==6.?1.95:2.3);m=.43;r=.17;
        }else{
            c=zellij(vec2(p.z,y),5./6.,marble,1.);
            if(y<1.07)c=mix(marble,gold,line(rep(y,.30),.021,1.));
            if(radius<1.12)c=gold;m=.20;
        }
    }else if(id==12.){
        float facets=.5+.5*cos(7.*atan(n.z,n.x+.000001));
        c=mix(vec3(.008,.071,.060),vec3(.030,.46,.25),facets);
        em=c*(.32+.62*sat(n.y+.4));m=.53;r=.17;
    }else if(id==8. || id==9.){
        vec3 lp=vec3(p.x,y-lampHeight(p.z-rep(p.z-4.,8.)),rep(p.z-4.,8.));
        vec2 facetPlane=id==9.?wedge(lp.xz,8.)-vec2(.87,0.):lp.xz;
        float facets=.5+.5*cos(8.*atan(facetPlane.y,facetPlane.x+.00001));
        c=mix(vec3(1.,.30,.036),vec3(1.,.84,.40),facets);
        if(id==9.)c=mix(vec3(.007,.54,.37),vec3(.30,.91,.86),facets);
        em=c*(1.24+.81*facets+.31*cos(lp.y*31.));
        em+=.14*vec3(max(n.x,0.),.15,max(-n.x,0.));m=.36;r=.12;
    }else{
        vec2 uv=vec2(x,rep(p.z-4.,8.));
        vec2 cell=abs(mod(uv*.77+1.,2.)-1.);
        float niche=muqarnas(cell);
        float rib=min(abs(abs(uv.x)*.73-abs(uv.y))*.81,min(uv.x,abs(uv.y)));
        c=mix(blue()*1.7,marble*.61,smoothstep(.065,.25,niche));
        c=mix(c,gold*.90,line(niche-.155,.004,.27));
        if(rib<.23)c=mix(marble*.76,gold,max(line(rib-.175,.031,1.),line(rib,.047,1.)));
        if(abs(n.y)<.42 && oct(vec2(p.x,rep(p.z-12.,24.)))<3.38){
            float f=abs(rep(y,.36));
            vec2 polar=vec2(3.25*atan(p.x,rep(p.z-12.,24.)),y);
            c=mix(zellij(polar,2.45,blue(),.6),gold,line(f-.15,.023,1.));
        }
        m=.12;r=.54;
    }
    c*=.93+.12*grain;
    return Surface(c,m,r,em);
}
vec3 brdf(Surface s,vec3 n,vec3 v,vec3 l,vec3 color){
    vec3 h=normalize(l+v);
    float nl=max(dot(n,l),0.),nv=max(dot(n,v),.025),nh=max(dot(n,h),0.);
    float a2=sq(sq(max(.28,s.rough))), d=a2/(PI*sq(nh*nh*(a2-1.)+1.));
    float k=sq(s.rough+1.)*.125;
    vec3 f0=mix(vec3(.042),s.color,s.metal);
    vec3 fres=f0+(1.-f0)*pow(1.-max(dot(v,h),0.),5.);
    vec3 spec=d*fres/(4.*(nl*(1.-k)+k)*(nv*(1.-k)+k));
    return (s.color*(1.-s.metal)*(.82/PI)+spec)*color*nl;
}
vec3 shade(vec3 p,vec3 n,vec3 eye,Surface s,bool primary){
    float y=mod(p.y+.55,DECK)-.55;
    vec3 pos=vec3(p.x,y,p.z);
    float locZ=p.z-rep(p.z-4.,8.);
    vec3 light=vec3(0.,lampHeight(locZ)-.45,locZ);
    bool court=abs(rep(locZ-12.,24.))<1.;
    if(court)light=vec3(1.6,5.70,locZ-.80);
    vec3 toLight=light-pos;
    float len=length(toLight);
    vec3 l=toLight/max(len,.01);
    float vis=1.;
    if(primary && dot(l,n)>0.)vis=shadow(p+n*.027,l,len-(court?.1:1.18));
    float ao=1.;
    if(primary){
        ao=clamp(.42+.58*mapScene(p+n*.18).x/.18,.37,1.);
    }
    vec3 hemi=mix(vec3(.035,.065,.097),vec3(.12,.235,.36),sat(n.y*.5+.5));
    vec3 col=s.color*hemi*ao*(1.-.42*s.metal)+s.emission;
    vec3 envDir=reflect(-eye,n);
    float glint=pow(sat(.5+.5*dot(envDir,normalize(vec3(.45,.64,-.74)))),9.);
    col+=s.metal*s.color*(vec3(.075,.11,.15)+vec3(.75,.57,.31)*glint)*ao;
    if(length(s.emission)<.1) col+=brdf(s,n,eye,l,vec3(1.,.59,.28)*83./(3.+len*len)*vis);
    // Opposing clerestories cast raking warm light and cool turquoise fill.
    vec3 windowPos=vec3((p.x>0.?1.:-1.)*6.85,5.65,p.z-rep(p.z-4.,8.));
    vec3 w=windowPos-pos;
    vec3 wl=normalize(w);
    float wvis=1.;
    if(primary && dot(n,wl)>.01)wvis=shadow(p+n*.035,wl,length(w)-.28);
    if(length(s.emission)<.1) col+=brdf(s,n,eye,wl,vec3(.24,.80,1.)*85./(3.+dot(w,w))*wvis);
    col+=brdf(s,n,eye,normalize(vec3(-.55,.46,.82)),vec3(.15,.29,.39)*.46)*ao;
    // Filtered rose-window caustics laid over the floor and the opposite piers.
    vec2 projected=vec2(rep(p.z-4.+1.05*(p.x+1.),8.),y-1.07-.64*p.x);
    float radial=length(projected);
    float rose=cos(10.*atan(projected.y,projected.x+.001));
    float pool=exp(-.33*radial*radial)*(.12+.88*smoothstep(-.70,.80,rose+cos(5.*radial)));
    col+=s.color*pool*vec3(.055,.64,.86)*(1.-s.metal);
    return col;
}
// Integrate a repeating fan of warm light through the western clerestories.
// Sample at fixed positions along the ray with a pixel-sized, stationary dither.
vec3 aerial(vec3 ro,vec3 rd,float depth){
    float dist=min(depth,46.), sum=0., wellLight=0.;
    float jitter=fract(dot(mod(gl_FragCoord.xy,128.),vec2(.75487766,.5698403)));
    for(int i=0;i<36;i++){
        float t=(float(i)+.5+.11*(jitter-.5))*dist/36.;
        vec3 p=ro+rd*t;
        float y=mod(p.y+.55,DECK)-.55;
        float sy=y-4.66-.42*p.x, sz=rep(p.z-4.-.47*(p.x-6.9),8.);
        float g=exp(-.93*sy*sy-1.55*sz*sz);
        float ribs=.31+.69*smoothstep(-.62,.59,cos(sz*7.+sy*2.8));
        float trans=exp(-.045*t);
        sum+=g*ribs*trans;
        float shaft=oct(vec2(p.x,rep(p.z-12.,24.)));
        wellLight+=exp(-1.4*sq(shaft-.87))*trans*.20;
    }
    vec3 shafts=dist/36.*(vec3(.095,.069,.040)*sum+vec3(.013,.046,.045)*wellLight);
    // Integrate a compact scattering lobe around each real lantern. The
    // surface depth clips the lobe as a pier passes in front of the lantern.
    float lampFog=0.;
    float row=ro.z-rep(ro.z-4.,8.), level=ro.y-(mod(ro.y+.55,DECK)-.55);
    for(int k=-2;k<=2;k++){
        float z=row+8.*float(k);
        if(abs(rep(z-12.,24.))<1.)continue;
        vec3 toLamp=vec3(0.,level+lampHeight(z)-.12,z)-ro;
        float along=dot(toLamp,rd);
        float miss2=dot(toLamp,toLamp)-along*along;
        float gate=smoothstep(-.50,.7,along)*smoothstep(along-1.15,along+.3,depth);
        lampFog+=gate*exp(-.038*max(along,0.))*(.56*exp(-2.1*max(miss2,0.))+.12*exp(-.39*max(miss2,0.)));
    }
    return uGlow*(shafts+vec3(.97,.51,.16)*lampFog);
}
// Sample particle cells pierced by the ray. Each transverse cell owns one
// suspended mote in each slab; periodic indices make the seam deterministic.
float dust(vec3 ro,vec3 rd,float hit){
    bool vertical=abs(rd.y)>abs(rd.z) && abs(rd.y)>abs(rd.x);
    bool lateral=!vertical && abs(rd.x)>abs(rd.z);
    vec3 o=vertical?ro.xzy:(lateral?ro.zyx:ro);
    vec3 d=vertical?rd.xzy:(lateral?rd.zyx:rd);
    vec3 unit=vec3(.75);
    float plane=floor(o.z/unit.z),acc=0.;
    for(int i=0;i<44;i++){
        float iz=plane+sign(d.z)*float(i);
        float t=((iz+.5)*unit.z-o.z)/d.z;
        if(t<0.)continue;
        if(t>hit || t>32.)break;
        vec2 xy=o.xy+d.xy*t;
        vec2 cell=floor(xy/unit.xy);
        vec3 idx=vec3(cell,iz);
        idx=vertical?idx.xzy:(lateral?idx.zyx:idx);
        idx.y=mod(idx.y,14.);idx.z=mod(idx.z,32.);
        vec2 center=(cell+.20+.60*vec2(hash(idx),hash(idx+16.3)))*unit.xy;
        center+=.035*vec2(sin(uTime*TAU/30.+hash(idx)*TAU),cos(uTime*TAU/30.+hash(idx+3.)*TAU));
        float radius=.0028+.0042*hash(idx+13.);
        float delta=length(center-xy), pix=max(radius,t/uSize.y);
        acc+=smoothstep(.30,.88,hash(idx+4.2))*(1.-smoothstep(.18*pix,1.6*pix,delta))*min(1.,radius/pix)*exp(-t*.077);
    }
    return acc;
}
void main(){
    float phase=uTime/30., wave=TAU*phase;
    brass=uPalette==1?vec3(.57,.45,.26):(uPalette==2?vec3(.55,.39,.165):vec3(.56,.255,.061));
    fold=clamp(uFold+(uFree?0.:.19*sin(wave-.28)),0.,1.);
    angle=.08+.76*fold;
    float dive=smoothstep(.530,.813,phase);
    float lean=smoothstep(.418,.619,phase)*(1.-smoothstep(.688,.864,phase));
    vec3 eye=vec3(.48*sin(wave)-.57*sin(2.*wave)+.64*lean,
                   2.18+.30*sin(wave)-DECK*dive,
                   -4.+24.*phase+.52*sin(wave));
    float hold=smoothstep(.46,.61,phase)*(1.-smoothstep(.73,.86,phase));
    eye.z=mix(eye.z,12.+(phase-.67)*6.,.76*hold);
    float yaw=.102*sin(wave+.23)-.14*lean;
    float pitch=.104+.075*sin(wave+.52)-1.48*lean;
    float bank=.040*sin(wave-.66)+.32*lean*sin(2.*wave-1.);
    vec3 atriumAxis=normalize(vec3(-eye.x*.76,-4.1,12.-eye.z));
    vec3 filmFront=vec3(sin(yaw)*cos(pitch),sin(pitch),cos(yaw)*cos(pitch));
    if(uFree){
        eye=uTravel; yaw=uLook.x; pitch=uLook.y; bank=0.;
    }
    vec2 uv=(2.*gl_FragCoord.xy-uSize)/uSize.y;
    uv=rot(bank)*uv;
    vec3 front=vec3(sin(yaw)*cos(pitch),sin(pitch),cos(yaw)*cos(pitch));
    if(!uFree)front=normalize(mix(filmFront,atriumAxis,lean*.67));
    vec3 azimuthRight=vec3(cos(yaw),0.,-sin(yaw));
    vec3 right=normalize(azimuthRight-front*dot(front,azimuthRight));
    vec3 up=cross(front,right);
    vec3 rd=normalize(front*(1.52-.12*lean)+right*uv.x+up*uv.y);
    vec2 hit=trace(eye,rd,392,69.,.018);
    vec3 horizon=mix(vec3(.008,.028,.046),vec3(.117,.10,.079),.26+.53*max(rd.z,0.));
    vec3 col=horizon;
    float depth=hit.y<0.?69.:hit.x;
    if(hit.y>=0.){
        vec3 p=eye+rd*depth;
        footprint=max(.0011,depth/uSize.y);
        vec3 n=normalAt(p,max(.0021,depth*.00025));
        Surface mat=surface(p,n,hit.y);
        col=shade(p,n,-rd,mat,true);
        if(mat.rough<.26 || mat.metal>.52){
            vec3 refl=reflect(rd,n);
            vec2 bounce=trace(p+n*.026,refl,106,31.,.026);
            vec3 reflection=horizon;
            if(bounce.y>=0.){
                vec3 p2=p+n*.026+refl*bounce.x;
                vec3 n2=normalAt(p2,.008);
                footprint=(depth+bounce.x)*1.6/uSize.y;
                reflection=shade(p2,n2,-refl,surface(p2,n2,bounce.y),false);
                reflection=mix(reflection,horizon,1.-exp(-bounce.x*.033));
            }
            float fres=.035+.41*pow(1.-sat(dot(-rd,n)),3.)+.15*mat.metal;
            col+=min(reflection,vec3(5.))*fres*mix(vec3(1.),mat.color,mat.metal*.48);
        }
    }
    float fog=1.-exp(-.032*depth);
    col=mix(col,horizon,fog*.89)+aerial(eye,rd,depth);
    col+=vec3(1.8,.94,.28)*dust(eye,rd,depth)*(.32+.68*uGlow);
    fragColor=vec4(sqrt(max(col,0.)/(1.+max(col,0.))),1.);
}
