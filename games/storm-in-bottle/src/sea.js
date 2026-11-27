import * as T from "three";
import { mesh, geom } from "./craft.js";

const profile = [
  [-3.37, 0.01],
  [-3.355, 0.85],
  [-3.32, 1.26],
  [-3.26, 1.43],
  [-3.16, 1.5],
  [-2.91, 1.529],
  [-2.2, 1.542],
  [-1, 1.547],
  [0.45, 1.535],
  [0.96, 1.505],
  [1.24, 1.45],
  [1.44, 1.36],
  [1.64, 1.2],
  [1.86, 0.91],
  [2.08, 0.62],
  [2.29, 0.425],
  [2.47, 0.362],
  [2.77, 0.349],
  [3.02, 0.358],
  [3.06, 0.423],
  [3.12, 0.441],
  [3.26, 0.435],
  [3.29, 0.379],
];
export const profileCurve = new T.SplineCurve(profile.map(([x, r]) => new T.Vector2(x, r)));
export function radius(x) {
  let i = 1;
  while (i < profile.length - 1 && profile[i][0] < x) i++;
  const [x0, r0] = profile[i - 1],
    [x1, r1] = profile[i];
  return T.MathUtils.lerp(r0, r1, T.MathUtils.clamp((x - x0) / (x1 - x0), 0, 1));
}
const waves = [
  // direction, angular wavenumber, angular velocity, amplitude, phase
  [0.93, 0.37, 3.3, 2.36, 0.101, 0.3],
  [-0.41, 0.91, 5.4, 3.07, 0.056, 1.3],
  [0.72, -0.69, 8.2, 3.89, 0.035, 3.4],
  [0.15, 0.989, 13.7, 4.93, 0.017, 0.7],
  [0.95, 0.31, 21.4, 5.83, 0.009, 2.68],
];
// A shake launches a crest from the raised end. Mirror its centre at the
// heel and shoulder, with a trailing trough and a decaying reflected return.
const packets = Array.from({ length: 4 }, () => new T.Vector4(0, 0, 1, 0));
export function setWavePackets(t, impulses) {
  let n = 0;
  for (let i = impulses.length - 1; i >= 0 && n < packets.length; i--) {
    const age = t - impulses[i].t,
      force = impulses[i].a;
    if (age < 0 || age >= 6) continue;
    const span = 4.55,
      distance = (age * 2.82) % (2 * span);
    const along = span - Math.abs(span - distance);
    const center = force > 0 ? 1.62 - along : -2.93 + along;
    const strength = Math.abs(force) * 0.25 * (1 - Math.exp(-12 * age)) * Math.exp(-0.64 * age);
    packets[n++].set(center, strength, 0.33 + 0.045 * age, (force > 0 ? 1 : -1) * (0.42 + age * 0.65));
  }
  while (n < packets.length) packets[n++].y = 0;
}
export function seaHeight(x, z, t, s, sl) {
  let h = -0.445 + sl * x * 0.4;
  for (const [dx, dz, k, w, a, p] of waves)
    h += a * (0.33 + 1.63 * s) * Math.sin(k * (dx * x + dz * z) - w * t + p);
  for (const packet of packets) {
    if (!packet.y) continue;
    const q = (x - packet.x + 0.125 * Math.sin(2.1 * z + packet.w)) / packet.z;
    h += packet.y * (1 - 2 * q * q) * Math.exp(-q * q);
  }
  return h;
}
export const waterMath = `
uniform float clock,storm,sloshing;uniform vec4 packets[4];
void wave(in vec2 p,in vec2 d,in float k,in float w,in float a,in float phase,inout float h,inout vec2 grad,inout vec2 drift){
 float f=k*dot(d,p)-w*clock+phase;float amp=a*(.33+1.63*storm);h+=amp*sin(f);grad+=d*k*amp*cos(f);drift+=.43*amp*d*cos(f);
}
void surface(vec2 p,out float h,out vec2 grad,out vec2 drift){
 h=-.445+sloshing*p.x*.40;grad=vec2(sloshing*.40,0.);drift=vec2(0.);
 ${waves.map(([x, z, k, w, a, p]) => "wave(p,vec2(" + x + "," + z + ")," + [k, w, a, p].map((n) => n.toFixed(4)).join(",") + ",h,grad,drift);").join("\n")}
 for(int i=0;i<4;i++){
   vec4 k=packets[i];if(k.y==0.)continue;
   float a=2.1*p.y+k.w,q=(p.x-k.x+.125*sin(a))/k.z,peak=k.y*exp(-q*q);
   h+=peak*(1.-2.*q*q);grad+=peak*(4.*q*q*q-6.*q)/k.z*vec2(1.,.2625*cos(a));
 }
}`;
export const noiseGL = `
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
float fb(vec2 p){return .55*noise2(p)+.29*noise2(p*2.09+4.3)+.16*noise2(p*4.13-9.1);}
`;
export const uniforms = {
  clock: { value: 0 },
  storm: { value: 0.3 },
  sloshing: { value: 0 },
  clarity: { value: 0.63 },
  flash: { value: 0 },
  impact: { value: 0 },
  packets: { value: packets },
  intensity: { value: 0.72 },
  bottle: { value: new T.Matrix4() },
};
const waterVertex = `
${waterMath}
varying vec3 vPoint,vWorld,vN;varying float crest,depth;
void main(){float r=position.y;float h;vec2 g,dr;float z0=position.z*sqrt(max(.001,r*r-.445*.445));surface(vec2(position.x,z0),h,g,dr);h=clamp(h,-r+.002,r-.002);float width=sqrt(max(.00001,r*r-h*h));
 float edge=1.-pow(abs(position.z),3.);
 float endFade=smoothstep(0.,.24,min(position.x+3.314,2.216-position.x));
 vec3 top=vec3(position.x+dr.x*edge*endFade*.86,h,position.z*width+dr.y*edge);vec3 P;vec3 N;
#ifdef WALL
 float ang=acos(clamp(-h/r,-1.,1.))*position.z;P=vec3(position.x,-cos(ang)*r,sin(ang)*r);N=normalize(vec3(0.,P.y,P.z));
 #ifdef END_FACE
  P=mix(P,top,uv.x);N=vec3(sign(position.x),0.,0.);
 #endif
 depth=max(0.,h-P.y);
#else
 P=top;N=normalize(vec3(-g.x,1.,-g.y));depth=0.;
#endif
 vN=mat3(modelMatrix)*N;crest=h+.445-sloshing*position.x*.40;vPoint=P;vWorld=(modelMatrix*vec4(P,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);
}`;
const waterFrag = `
uniform sampler2D ripples,studio,beneath;uniform vec2 viewport;
${noiseGL}
uniform float clock,storm,clarity,flash;varying vec3 vPoint,vWorld,vN;varying float crest,depth;
void main(){vec3 V=normalize(cameraPosition-vWorld);vec2 p=vPoint.xz;float f=fb(p*12.+vec2(clock*.7,-clock*.48)),fine=fb(p*47.+vec2(-clock,clock*.77));vec3 col;
#ifdef WALL
 float fil=fb(vec2(vPoint.x*4.+vPoint.z*2.,vPoint.y*2.)+vec2(clock*.10,clock*.19));float beams=pow(.5+.5*cos(11.*vPoint.x+5.*fil+3.*vPoint.y-clock*.66),9.);
 float surf=exp(-depth*3.8);col=mix(vec3(.002,.021,.028),vec3(.009,.145,.100),surf*.87+.14*fil);col+=vec3(.012,.089,.070)*beams*(.25+.75*surf);
 float vein=fb(vec2(vPoint.x*8.+vPoint.z*3.,vPoint.y*5.)-clock*.09);col*=.72+.55*vein;col=mix(col,col*vec3(.65,.99,1.32),clarity);col+=vec3(.068,.250,.214)*exp(-depth*74.)*(.26+.74*f);
 vec3 sn=normalize(vN);vec2 direction=(mat3(viewMatrix)*sn).xy;vec2 uv=gl_FragCoord.xy/viewport;vec3 under=texture2D(beneath,clamp(uv+direction*vec2(.012,.026)+.003*(vec2(f,fil)-.5),.001,.999)).rgb;
 float thick=.35+.50*clamp(depth,0.,1.);vec3 beer=exp(-thick*mix(vec3(2.95,1.40,1.74),vec3(1.15,.28,.75),clarity));
 col=col*.58+under*beer*(.89+.49*clarity);col*=.87+.13*fil;
 col+=flash*vec3(.018,.19,.13)*beams*surf;
#else
 vec3 texA=texture2D(ripples,p*.53+vec2(clock*.018,-clock*.013)).xyz*2.-1.;vec3 texB=texture2D(ripples,p.yx*1.33+vec2(clock*.027,clock*.011)).xyz*2.-1.;
 vec2 micro=texA.xy*.30+texB.yx*.14;vec3 N=normalize(vN+vec3(micro.x+(f-.5)*.12,0.,micro.y));vec3 R=reflect(-V,N);
 float fres=.055+.77*pow(1.-max(dot(N,V),0.),3.2);float sky=.4+.6*smoothstep(-.16,.82,R.y);
 col=mix(vec3(.002,.043,.032),vec3(.010,.158,.094),smoothstep(-.15,.24,crest)*(.46+.54*max(0.,dot(N,normalize(vec3(-.57,.35,-.65))))));col=mix(col,col*vec3(.61,.95,1.30),clarity);
 vec2 envUV=vec2(atan(R.z,R.x)/6.28318+.62,asin(clamp(R.y,-1.,1.))/3.14159+.5);vec3 env=texture2D(studio,envUV).rgb;col+=fres*(vec3(.055,.13,.16)*sky+(1.-exp(-env*.97))*vec3(.38,.60,.72));
 vec2 uv=gl_FragCoord.xy/viewport;vec2 bend=(mat3(viewMatrix)*N).xy;
 vec3 deep=texture2D(beneath,clamp(uv+bend*.017+.002*micro,.001,.999)).rgb;
 col+=deep*mix(vec3(.11,.33,.29),vec3(.40,.71,.59),clarity)*(1.-fres);
 vec3 H=normalize(V+normalize(vec3(-.58,.91,-.80)));float glint=pow(max(0.,dot(N,H)),176.);col+=vec3(.68,.98,1.08)*glint;
 float slick=pow(max(dot(normalize(R),normalize(vec3(.75,.38,-.50))),0.),32.);
 col+=vec3(.48,.23,.055)*slick*(.55+.45*f);
 float peak=crest/(.045+.12*storm);float foam=smoothstep(1.09,1.80,peak+(f-.5)*2.12+(fine-.5)*1.5);float lace=smoothstep(.22,.79,fine+.2*sin(47.*p.y+5.*f));float boatDist=length(vec2((p.x+.77)/1.30,(p.y-.06*sin(clock*.84))/.34));float wake=exp(-abs(boatDist-1.04)*12.)*smoothstep(.42,.79,fine)*(.23+.35*storm);col=mix(col,vec3(.34,.61,.55),wake);col=mix(col,vec3(.58,.84,.81),foam*(.14+.86*lace)*(.36+.64*min(storm,1.)));
#endif
 col+=flash*vec3(.095,.19,.29)*(.17+.83*f);gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;
function grid(nx, nz, start = -3.314, end = 2.216) {
  const verts = [],
    idx = [],
    uv = [];
  for (let j = 0; j <= nz; j++)
    for (let i = 0; i <= nx; i++) {
      const x = T.MathUtils.lerp(start, end, i / nx);
      verts.push(x, radius(x) - 0.106, (j / nz) * 2 - 1);
      uv.push(i / nx, j / nz);
      if (i < nx && j < nz) {
        const n = j * (nx + 1) + i;
        idx.push(n, n + nx + 1, n + 1, n + 1, n + nx + 1, n + nx + 2);
      }
    }
  return geom(verts, idx, uv);
}
export function ocean(p) {
  const geo = grid(166, 76);
  const patches = [
    [geo, {}],
    [geo, { WALL: 1 }],
    ...[-3.314, 2.216].map((x) => [grid(1, 76, x, x), { WALL: 1, END_FACE: 1 }]),
  ];
  for (const [geometry, defines] of patches) {
    const patch = mesh(
      p,
      geometry,
      new T.ShaderMaterial({
        defines,
        uniforms,
        vertexShader: waterVertex,
        fragmentShader: waterFrag,
        side: T.DoubleSide,
      }),
    );
    patch.frustumCulled = false;
    patch.castShadow = false;
  }
}
// Forward trace a triad of wavelength bands through the moving surface and the
// lower glass wall. Overlapping projections sum energy along optical folds.
export function causticField(renderer, materials) {
  const target = new T.WebGLRenderTarget(1152, 768, {
    type: T.HalfFloatType,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
    depthBuffer: false,
  });
  const world = new T.Scene(),
    camera = new T.Camera();
  const g = grid(184, 90);
  for (let band = 0; band < 3; band++) {
    const mat = new T.ShaderMaterial({
      uniforms: { ...uniforms, band: { value: band } },
      side: T.DoubleSide,
      transparent: true,
      blending: T.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      vertexShader: `
 ${waterMath}
 uniform float band;uniform mat4 bottle;varying vec2 source,dest;varying float mask;
 void main(){float r=position.y;vec2 p=vec2(position.x,position.z*sqrt(max(.01,r*r-.198)));float h;vec2 slope,drift;surface(p,h,slope,drift);vec3 N=normalize(vec3(-slope.x,1.,-slope.y));vec3 localP=vec3(p.x,h,p.y);
 float ior=1.326+.008*band;vec3 ray=refract(transpose(mat3(bottle))*normalize(vec3(.40,-1.,.94)),N,1./ior);
 float a=ray.y*ray.y+ray.z*ray.z,b=h*ray.y+p.y*ray.z;float path=max(.02,(-b+sqrt(max(.0001,b*b-a*(h*h+p.y*p.y-r*r))))/a);
 vec3 exitP=localP+path*ray;vec3 normal=normalize(vec3(.035, h+path*ray.y,p.y+path*ray.z));
 vec3 glass=refract(ray,-normal,ior/(1.51+.011*band));vec3 outgoing=refract(glass,-normal,(1.51+.011*band));if(length(outgoing)<.2||outgoing.y>-.13)outgoing=normalize(mix(ray,vec3(.21,-.65,.78),.54));exitP=(bottle*vec4(exitP+.065*glass,1.)).xyz;outgoing=mat3(bottle)*outgoing;vec2 landed=exitP.xz+outgoing.xz*max(0.,exitP.y)/max(.19,-outgoing.y);
 source=p;dest=landed;mask=(1.-smoothstep(.78,.99,abs(position.z)))*smoothstep(-3.314,-3.04,p.x)*(1.-smoothstep(1.84,2.216,p.x));gl_Position=vec4((landed+vec2((band-1.)*.032,(band-1.)*.021)-vec2(0.,1.4))/vec2(5.5,3.4),0.,1.);}
 `,
      fragmentShader: `uniform float band;varying vec2 source,dest;varying float mask;float area(vec2 a,vec2 b){return abs(a.x*b.y-a.y*b.x);}void main(){float ratio=area(dFdx(source),dFdy(source))/max(.000001,area(dFdx(dest),dFdy(dest)));float e=mask*min(4.0,ratio)*.19;vec3 waveband=band<.5?vec3(.90,.115,.027):band<1.5?vec3(.040,.77,.24):vec3(.07,.22,.91);gl_FragColor=vec4(e*waveband,1.);}`,
    });
    const q = new T.Mesh(g, mat);
    q.frustumCulled = false;
    world.add(q);
    // A second bundle enters the upper heel from the window. Trace both sides of
    // the air cavity before its lower meniscus sends a broader fan onto the wood.
    const heel = mat.clone();
    heel.uniforms = { ...uniforms, band: { value: band } };
    heel.vertexShader = `
 ${waterMath}
 uniform float band;uniform mat4 bottle;varying vec2 source,dest;varying float mask;
 void main(){float r=position.y+.106;float a=mix(-1.3,.16,position.z*.5+.5);vec3 n=normalize(vec3(.034,cos(a),sin(a)));vec3 d=normalize(vec3(-.93,-1.,.75));float glassIor=1.49+.012*band;
 vec3 glassRay=refract(d,n,1./glassIor);vec3 innerN=normalize(n+vec3(.016*cos(3.*position.x),.025*sin(a*4.),.036*cos(a*3.+position.x)));
 vec3 ray=refract(glassRay,innerN,glassIor);if(length(ray)<.01)ray=d;vec3 entry=vec3(position.x,r*cos(a),r*sin(a));
 float path=-2.*dot(entry.yz,ray.yz)/dot(ray.yz,ray.yz);vec3 exitP=entry+ray*max(.01,path);
 float h;vec2 grad,dr;surface(exitP.xz,h,grad,dr);vec3 exitN=normalize(vec3(-.035,exitP.y,exitP.z));vec3 outDir=normalize(ray+exitN*.37+vec3(grad.x*.13,0.,grad.y*.13));
 vec3 w=(bottle*vec4(exitP,1.)).xyz;outDir=mat3(bottle)*outDir;vec2 landed=w.xz+outDir.xz*w.y/max(.25,-outDir.y);
 source=vec2(position.x,a*r);dest=landed;mask=(1.-smoothstep(.27,1.,abs(position.z)))*smoothstep(-3.32,-2.92,position.x)*(1.-smoothstep(1.,2.2,position.x))*.52;
 gl_Position=vec4((landed-vec2(0.,1.4))/vec2(5.5,3.4),0.,1.);}
 `;
    const catchlight = new T.Mesh(g, heel);
    catchlight.frustumCulled = false;
    world.add(catchlight);
  }
  for (const m of materials) {
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, {
        causticMap: { value: target.texture },
        intensity: uniforms.intensity,
        flash: uniforms.flash,
        clock: uniforms.clock,
        sloshing: uniforms.sloshing,
      });
      sh.vertexShader =
        "varying vec3 receiver;\n" +
        sh.vertexShader.replace(
          "#include <project_vertex>",
          "#include <project_vertex>\n receiver=(modelMatrix*vec4(transformed,1.)).xyz;",
        );
      sh.fragmentShader =
        "uniform sampler2D causticMap;uniform float intensity,flash,clock,sloshing;varying vec3 receiver;\n" +
        sh.fragmentShader.replace(
          "#include <opaque_fragment>",
          `vec2 landing=receiver.xz-receiver.y*vec2(.29,.66);vec2 cuv=(landing-vec2(0.,1.4))/vec2(11.,6.8)+.5;vec3 focus=texture2D(causticMap,clamp(cuv,0.,1.)).rgb;float edge=step(0.,cuv.x)*step(0.,cuv.y)*step(cuv.x,1.)*step(cuv.y,1.);float pool=exp(-.5*dot((receiver.xz-vec2(-.90,.96))/vec2(4.7,3.0),(receiver.xz-vec2(-.90,.96))/vec2(4.7,3.0)));outgoingLight*=.46+.50*pool;
 float windowLight=smoothstep(-1.2,1.4,receiver.z-.64*receiver.x)*(.77+.23*smoothstep(.03,.17,abs(sin(receiver.x*1.74-receiver.z*1.10))));outgoingLight*=.74+.26*windowLight;
 // A thin fan from the rolled heel resolves narrower folds than the sampled ray bundle.
 vec2 fan=landing-vec2(-1.1+.28*sloshing,1.90);
 float envelope=exp(-.46*dot(fan/vec2(2.3,.84),fan/vec2(2.3,.84)));
 float fold=fan.y+.13*fan.x+.26*sin(2.13*fan.x-clock*.74+sloshing)+.10*cos(4.4*fan.x+clock*.49);
 float pinch=.78*sin(fan.x*1.92+clock*.31)+.33*cos(3.3*fan.y+fan.x);
 float phase=8.7*fold+2.45*sin(4.6*fan.y-1.3*fan.x+clock*.59)+pinch*sin(6.*fold+fan.x);
 vec3 fringe=abs(sin(phase+vec3(-.24,0.,.27)));
 vec3 thread=exp(-fringe*fringe*32.)*vec3(.73,1.12,1.28);
 float breakup=.28+.72*pow(.5+.5*cos(3.1*fan.x-4.7*fan.y+clock*.41),2.);
 vec3 focusedLight=focus*1.42+thread*envelope*breakup*.80;
 outgoingLight+=sqrt(diffuseColor.rgb)*focusedLight*intensity*(1.38+flash*2.4)*edge;\n#include <opaque_fragment>`,
        );
    };
  }
  return () => {
    renderer.setRenderTarget(target);
    renderer.setClearColor(0, 1);
    renderer.clear();
    renderer.render(world, camera);
  };
}
