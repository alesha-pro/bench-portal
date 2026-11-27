#version 300 es
precision highp float;
precision highp int;
in vec2 uv;
out vec4 frag;
uniform vec2 resolution;
uniform float clockTime, mass, lens, doppler, azimuth, inclination, roll, fov, plunge;
uniform sampler2D turbulence, sky;
const float PI = 3.14159265359, TAU = 6.28318530718;
const vec3 tidalNormal = vec3(0., .86017, -.51);
const vec3 tidalV = vec3(0., .51, .86017);
vec3 nt(vec2 p, float lod) {return textureLod(turbulence,p,lod).rgb;}
float sq(float x) {return x*x;}
float diskNoise(vec2 p, float lod) {return nt(p,lod).r-.5;}

// The backward photon has the opposite angular momentum to the received light.
vec4 disk(vec3 p, float lambda, float rayWidth, float distanceU) {
    float r=length(p.xz);
    if (r<2.76 || r>13.6) return vec4(0);
    float a=atan(p.z,p.x)/TAU;
    float w=pow(4./r,1.5);
    float orbit=a-clockTime*.021*w+.24*log(r);
    float lod=clamp(log2(max(.68,rayWidth*28.)),0.,5.);
    float swell=diskNoise(vec2(orbit*2.,r*.091),lod);
    float eddy=diskNoise(vec2(orbit*5.+swell*.115, r*.41+swell*.34),lod);
    vec2 flow=vec2(orbit*3.+swell*.26, r*.62+swell*.55+eddy*.22);
    vec3 gas=nt(flow,lod);
    float fine=diskNoise(flow*vec2(2.,2.5)+vec2(eddy*.14,gas.b*.17),lod+.2);
    float sheet=r+swell*.74+eddy*.34+(gas.r-.5)*.29;
    vec2 whorl=vec2(orbit*8.+.14*eddy+.055*(gas.g-.5), sheet*.91+.18*(gas.r-.5));
    vec3 knots=nt(whorl+vec2(0.,.045*sin(TAU*orbit*3.)),lod);
    float grit=nt(whorl*vec2(3.,2.3)+knots.rg*.12,lod+.4).b;
    float veins=.5+.5*cos(sheet*(12.7+.64*swell)+6.4*gas.g+2.8*eddy+2.5*knots.r);
    float fil=pow(veins,4.)*(.17+.78*knots.b);
    float lace=exp(-sq((fine+.61*(gas.g-.5)+.23*(knots.b-.5))/.13));
    float density=clamp(.38+1.22*(gas.r-.46)+.69*eddy+.68*swell+.76*fine+.76*(knots.r-.5),0.,1.55);
    float heat=(.077+2.1*density*density+.53*fil+.44*lace*(.23+density))*(.46+1.17*grit);
    float inner=smoothstep(2.76,3.39,r);
    float outer=1.-smoothstep(7.3,13.6,r+.55*swell);
    float radial=inner*exp(-(r-3.45)*.385)*outer;
    float omega=sqrt(.5*lens/(r*r*r));
    float g=sqrt(max(.12,1.-1.5*lens/r))/(sqrt(1.-lens*distanceU)*max(.34,1.-doppler*omega*lambda));
    float shift=clamp((g-.53)*1.75,0.,1.6);
    vec3 amber=mix(vec3(.73,.07,.014),vec3(1.15,.42,.095),smoothstep(.1,1.,shift));
    vec3 white=mix(vec3(1.36,.89,.49),vec3(.70,.94,1.45),smoothstep(.92,1.32,g));
    float hottest=smoothstep(.69,1.38,shift+.18*(heat-.9)-.051*(r-3.45));
    vec3 spectrum=mix(amber,white,hottest);
    float alpha=inner*outer*clamp(.60+.46*density+.16*fil,.4,.992);
    return vec4(spectrum*radial*heat*pow(g,3.)*1.87,alpha);
}

// Tidal debris lives in an inclined orbital plane. Earlier parcels retain larger
// radii and lag the advancing core, producing an eccentric, sheared spiral.
struct Star { float phase; float phi; float r; float extent; vec3 pos; };
Star starState() {
    Star s;
    s.phase=clamp(plunge,0.,1.);
    float q=s.phase;
    s.phi=-.62+.064*clockTime+5.75*q*q;
    float ellipse=7.65/(1.+.32*cos(s.phi+.6));
    s.r=mix(ellipse,.91,smoothstep(.15,1.,q));
    s.extent=.25+6.35*smoothstep(.04,.93,q);
    s.pos=s.r*(vec3(1.,0.,0.)*cos(s.phi)+tidalV*sin(s.phi));
    return s;
}
vec4 stream(vec3 p, Star s, float footprint) {
    float a=atan(dot(p,tidalV),p.x);
    float lag=mod(s.phi-a+TAU,TAU);
    float r=length(p);
    float width=.051+.165*s.phase+.023*lag;
    float radius=s.r+(.28+.51*s.phase)*lag+.19*(sin(s.phi-lag+.7)-sin(s.phi+.7));
    float across=(r-radius)/width;
    if (abs(across)>7. || lag>s.extent+.12) return vec4(0.);
    float twist=lag*(5.5+.6*lag)-clockTime*.30;
    float lod=clamp(log2(max(1.,footprint*65.)),0.,3.);
    vec3 clump=nt(vec2(lag*.23-clockTime*.023,across*.055+lag*.041),lod);
    vec3 wisps=nt(vec2(lag*.79+.11*clump.r,across*.12+clump.g*.24),lod);
    float split=smoothstep(.02,.44,lag);
    float lane=across+split*(1.45*(clump.g-.5)+.46*sin(twist));
    float core=exp(-sq(lane)*3.8)*(.48+clump.r);
    float threads=exp(-sq((lane-split*(.78*sin(twist)+.68))/.23))
                 +.7*exp(-sq((lane+split*(.65*cos(twist*.81)+.93))/.27));
    float cloud=exp(-sq(across)*.40)*pow(wisps.r+.31,3.);
    float fade=(1.-smoothstep(.47*s.extent,s.extent+.035,lag))
               *(1.-smoothstep(.82,1.,s.phase))*(.28+.72*smoothstep(0.,.27,s.phase));
    float power=(core*1.15+threads*.85+cloud*.48)*fade*(.22+1.2*wisps.g)*exp(-.18*lag);
    float ion=smoothstep(.07,.87,lag/max(s.extent,.25)+.18*(clump.r-.4)+.07*lane);
    vec3 col=mix(vec3(.19,.58,1.62),vec3(1.8,.49,.08),ion);
    return vec4(col*power,clamp(.33*power,0.,.9));
}
float boxSDF(vec3 p,vec3 h) {vec3 d=abs(p)-h;return length(max(d,0.))+min(max(d.x,max(d.y,d.z)),0.);}
vec2 probeMap(vec3 p) {
    vec2 o=vec2(boxSDF(p,vec3(.24,.245,.265)),1.);
    vec3 wing=vec3(abs(p.x)-.83,p.y-.015,p.z);
    vec2 sail=vec2(boxSDF(wing,vec3(.45,.023,.255)),2.);
    if(sail.x<o.x)o=sail;
    float spar=boxSDF(p,vec3(.47,.027,.032));
    float mast=boxSDF(p-vec3(.02,.40,0.),vec3(.022,.21,.025));
    float dish=max(abs(length(p-vec3(.02,.84,0.))-.39)-.014, p.y-.535);
    float metal=min(min(spar,mast),dish);
    if(metal<o.x)o=vec2(metal,3.);
    float lamp=length(p-vec3(-.22,-.20,.26))-.057;
    if(lamp<o.x)o=vec2(lamp,4.);
    return o;
}
mat3 probeBasis(float a) {
    float c=cos(a),s=sin(a), h=-.31;
    return mat3(vec3(c*cos(h),sin(h),s*cos(h)),vec3(-c*sin(h),cos(h),-s*sin(h)),vec3(-s,0.,c));
}
vec3 probe(vec3 color, vec3 eye, vec3 rd, float pixel) {
    float a=.64+.026*clockTime;
    vec3 center=vec3(10.6*sin(a),-1.72+.42*cos(a),10.6*cos(a));
    mat3 basis=probeBasis(-a+.18);
    float size=.43;
    vec3 o=transpose(basis)*(eye-center)/size;
    vec3 v=transpose(basis)*rd;
    float nearT=-dot(o,v);
    float off=length(o+v*nearT);
    if(nearT<0. || off>3.7)return color;
    float blink=.16+.84*pow(.5+.5*cos(clockTime*5.2),10.);
    vec3 lamp=vec3(-.22,-.20,.26);
    vec3 l=o-lamp;
    float ld=length(l-v*dot(l,v));
    color+=vec3(.98,.115,.025)*blink*.23*exp(-ld*ld/.068);
    // Finite, lightly scattered laser pulse from the earthward laser head.
    vec3 ba=normalize(vec3(-.9,-.44,.1));
    vec3 q=o-vec3(-.22,-.13,.24);
    float k=dot(ba,v);
    float along=clamp((dot(q,ba)-dot(q,v)*k)/max(.001,1.-k*k),0.,3.4);
    vec3 beam=q-ba*along;
    float d=length(beam-v*dot(beam,v));
    color+=vec3(1.,.18,.035)*.34*exp(-sq(d/.018))*(1.-along/3.4)*(.4+.6*blink);
    if(off>1.6)return color;
    float t=nearT-1.65;
    for(int i=0;i<54;i++) {
        vec3 p=o+t*v; vec2 hit=probeMap(p);
        if(hit.x<.0035) {
            vec2 e=vec2(.003,0.);
            vec3 n=normalize(vec3(probeMap(p+e.xyy).x-probeMap(p-e.xyy).x,
                                  probeMap(p+e.yxy).x-probeMap(p-e.yxy).x,
                                  probeMap(p+e.yyx).x-probeMap(p-e.yyx).x));
            vec3 light=normalize(transpose(basis)*(-center)+vec3(0.,6.,0.));
            float shine=pow(max(0.,dot(n,normalize(light-v))),20.);
            vec3 albedo=vec3(.50,.54,.58);
            if(hit.y<1.5)albedo=mix(vec3(.27,.12,.035),vec3(1.12,.64,.19),nt(p.xy*.68+p.z,.0).g);
            if(hit.y>1.5&&hit.y<2.5) {
                vec2 grid=abs(fract(vec2((abs(p.x)-.38)*7.,(p.z+.255)*8.))-.5);
                float frame=smoothstep(.37,.49,max(grid.x,grid.y));
                albedo=mix(vec3(.055,.14,.25),vec3(.68,.75,.77),frame*.79);
            }
            if(hit.y>3.5)return vec3(3.,.23,.025)*blink;
            return albedo*(.42+1.25*max(0.,dot(n,light)))+.8*shine;
        }
        t+=max(.0025,hit.x*.90);
        if(t>nearT+1.65)break;
    }
    return color;
}
float firstNode(float a,float b) {return mod(atan(a,-b)+PI,PI);}
float force(float u) {return u*(1.5*lens*u-1.);}
float interpU(float u,float v,float u1,float v1,float h,float t) {
    return mix(u,u1,t)+t*(1.-t)*((1.-t)*(h*v-(u1-u))+t*((u1-u)-h*v1));
}
void main() {
    float cameraR=29./mass;
    vec3 e0=vec3(sin(inclination)*sin(azimuth),cos(inclination),sin(inclination)*cos(azimuth));
    vec3 right=vec3(cos(azimuth),0.,-sin(azimuth)), up=cross(e0,right);
    vec2 xy=(gl_FragCoord.xy-.5*resolution)/resolution.y*2.;
    xy=mat2(cos(roll),-sin(roll),sin(roll),cos(roll))*xy;
    vec3 tangent=right*xy.x+up*xy.y;
    float rho=max(length(tangent),1e-7);
    vec3 e1=rho>1e-6?tangent/rho:right;
    vec3 rd=normalize(-e0+fov*tangent);
    float sinPsi=fov*rho*inversesqrt(1.+sq(fov*rho));
    float b=max(.0001,cameraR*sinPsi/sqrt(1.-lens/cameraR));
    float lambda=-b*cross(e0,e1).y;
    float u=1./cameraR, v=sqrt(max(0.,1.-sinPsi*sinPsi))/b, phi=0.;
    float diskNode=firstNode(e0.y,e1.y);
    float tailNode=firstNode(dot(e0,tidalNormal),dot(e1,tidalNormal));
    vec3 diskDir=cos(diskNode)*e0+sin(diskNode)*e1;
    vec3 tailDir=cos(tailNode)*e0+sin(tailNode)*e1;
    Star star=starState();
    vec3 headDir=star.pos/star.r;
    float headPhi=mod(atan(dot(headDir,e1),dot(headDir,e0))+TAU,TAU);
    float headMiss=abs(dot(headDir,cross(e0,e1)))*star.r;
    float coreSize=mix(.116,.026,smoothstep(.1,1.,star.phase));
    float headFade=1.-smoothstep(.82,.99,star.phase);
    vec3 radiance=vec3(0.);
    float through=1., escaped=0.;
    // RK4 integration of the Schwarzschild Binet equation in the photon's plane.
    // Hermite reconstruction resolves razor-thin surfaces between angular steps.
    const float h=.085;
    for(int j=0;j<152;j++) {
        float k1=force(u), k2=force(u+.5*h*v);
        float k3=force(u+.5*h*(v+.5*h*k1)), k4=force(u+h*(v+.5*h*k2));
        float u1=u+h*(v+h*(k1+k2+k3)/6.);
        float v1=v+h*(k1+2.*k2+2.*k3+k4)/6.;
        float stop=phi+h;
        if(u1<=0.)stop=phi+h*u/(u-u1);
        if(u1>=1./lens)stop=phi+h*clamp((1./lens-u)/(u1-u),0.,1.);
        vec4 surface=vec4(0.);
        if(diskNode<=stop) {
            float r=1./max(.0001,interpU(u,v,u1,v1,h,(diskNode-phi)/h));
            surface=disk(r*diskDir,lambda, r*r/resolution.y,1./cameraR);
        }
        if(tailNode<=stop) {
            float r=1./max(.0001,interpU(u,v,u1,v1,h,(tailNode-phi)/h));
            vec4 tail=stream(r*tailDir,star,r/resolution.y);
            float cover=(diskNode<tailNode)?1.-surface.a:1.;
            radiance+=through*tail.rgb*cover;
            if(tailNode<diskNode)surface.rgb*=1.-tail.a;
            through*=1.-tail.a*.25;
            tailNode+=PI;tailDir=-tailDir;
        }
        // Closest ray point to the stellar centre, corrected for radial slope.
        if(headMiss<coreSize*9. && headPhi<=stop && headFade>0.) {
            float k=(headPhi-phi)/h;
            float uh=max(.0001,interpU(u,v,u1,v1,h,k));
            float dr=1./uh-star.r;
            float offset=dr*uh/max(.0001,length(vec2(uh,mix(v,v1,k))));
            float d=length(vec2(headMiss,offset))/coreSize;
            float corona=exp(-1.34*d)+.13*exp(-.45*d);
            vec3 light=vec3(.23,.67,1.8)*corona*4.+vec3(2.8,2.1,.85)*exp(-sq(d)*1.6)*5.;
            radiance+=through*headFade*light*((diskNode<headPhi)?1.-surface.a:1.);
            headPhi+=TAU;
        }
        if(diskNode<=stop) {
            radiance+=through*surface.rgb*surface.a;
            through*=1.-surface.a;
            diskNode+=PI;diskDir=-diskDir;
        }
        phi=stop;u=u1;v=v1;
        if(u<=0.) {escaped=1.;break;}
        if(u>=1./lens || through<.003)break;
    }
    vec3 d=normalize(cos(phi)*e0+sin(phi)*e1);
    vec2 st=vec2(atan(d.x,d.z)/TAU+.50,asin(clamp(d.y,-1.,1.))/PI+.5);
    vec2 dsx=dFdx(st),dsy=dFdy(st);
    dsx.x-=round(dsx.x); dsy.x-=round(dsy.x);
    vec3 galaxy=textureGrad(sky,st,dsx,dsy).rgb;
    radiance+=through*escaped*pow(galaxy,vec3(1.70))*.88;
    // Unresolved high-order images integrated as a narrow critical-impact profile.
    float bc=2.598076211*lens;
    float px=max(.006,cameraR*fov*2./resolution.y);
    float width=max(.008,.52*px);
    float ring=exp(-min(80.,sq((b-bc)/width))) * (.013/width);
    radiance+=through*ring*mix(vec3(.97,.32,.073),vec3(1.25,.88,.53),clamp(.5+.42*lambda/bc,0.,1.));
    radiance=probe(radiance,e0*cameraR,rd,px);
    frag=vec4(clamp(radiance,0.,64.),1.);
}
