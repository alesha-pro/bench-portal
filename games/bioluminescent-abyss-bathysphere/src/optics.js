import * as T from 'three';
import { u } from './geometry.js';

const quadVert = `varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}`;
const volFrag = `varying vec2 st;uniform sampler2D depths;uniform mat4 invProj,camWorld;
uniform vec3 eye,lampA,lampB,axisA,axisB;uniform float strength,time;
float density(vec3 p,vec3 src,vec3 axis){
  vec3 delta=p-src;float axial=dot(delta,axis);
  if(axial<0.||axial>13.)return 0.;
  float r=.165+axial*.264;float radial=length(delta-axis*axial)/r;
  float angular=1.-smoothstep(.59,1.04,radial);
  float ribs=.86+.14*cos(radial*22.+axial*.4);
  return angular*ribs*exp(-axial*.32)/(1.+.33*axial);
}
vec3 viewPos(vec2 uv){
 vec4 p=invProj*vec4(uv*2.-1.,texture2D(depths,uv).r*2.-1.,1.);return p.xyz/p.w;
}
float contact(vec3 center,vec3 N,float scale){
  float sum=0.;
  for(int i=0;i<12;i++){
    float f=(float(i)+.5)/12.,angle=float(i)*2.39996;
    vec2 delta=vec2(cos(angle),sin(angle))*sqrt(f)*scale;
    delta.x*=invProj[1][1]/invProj[0][0];
    vec3 diff=viewPos(clamp(st+delta,vec2(.0005),vec2(.9995)))-center;
    float len=length(diff);
    sum+=max(0.,dot(N,diff)/max(.001,len)-.055)*(1.-smoothstep(.09,.85,len));
  }
  return max(.47,1.-sum*.22);
}
float veil(vec3 ro,vec3 rd,vec3 ctr,vec3 ax,float width,float reach) {
  vec3 a=ro-ctr;a-=ax*dot(a,ax);vec3 b=rd-ax*dot(rd,ax);float b2=max(.02,dot(b,b));
  float t=-dot(a,b)/b2,spread=width*inversesqrt(b2);
  float inside=smoothstep(-spread,spread,t)*smoothstep(-spread,spread,reach-t);
  vec3 radial=a+b*t;
  return exp(-dot(radial,radial)/(width*width))*spread*inside;
}
void main(){
  float depth=texture2D(depths,st).r;
  vec4 limit=invProj*vec4(st*2.-1.,depth*2.-1.,1.);
  vec3 dir=normalize(mat3(camWorld)*limit.xyz);
  float dist=min(31.,length(limit.xyz/limit.w));
  // Limit the march to the depth interval containing either lamp's plume.
  vec3 mid=(lampA+lampB)*.5+(axisA+axisB)*2.;
  float nearT=max(0.,dot(mid-eye,dir)-8.7),farT=min(dist,dot(mid-eye,dir)+8.7);
  const int steps=52;float ds=max(0.,farT-nearT)/float(steps);
  float jitter=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));
  vec3 p=eye+dir*(nearT+ds*jitter);float a=0.;
  vec2 phase=.32+.68*smoothstep(vec2(-.28),vec2(.89),vec2(dot(-dir,axisA),dot(-dir,axisB)));
  for(int i=0;i<steps;i++){
    float h=phase.x*density(p,lampA,axisA)+phase.y*density(p,lampB,axisB);
    float turb=.90+.10*sin(p.z*2.5+p.y*1.7+sin(p.x*2.+time*.26));
    a+=h*ds*turb;p+=dir*ds;
  }
  vec3 sun=vec3(.92,.82,.55);
  vec3 ax=normalize(vec3(.46,-1.,.15));float drift=.18*sin(time*.12);
  float veilLight=veil(eye,dir,vec3(-3.7+drift,5.,-7.),ax,.71,dist)*.70+
    veil(eye,dir,vec3(-2.6+drift,5.,-7.3),ax,.23,dist)*.42+
    veil(eye,dir,vec3(3.1,5.,-12.3),ax,1.21,dist)*.56;
  vec3 center=limit.xyz/limit.w;vec3 cr=cross(dFdx(center),dFdy(center));
  vec3 normal=dot(cr,cr)>1e-12?normalize(cr):vec3(0.,0.,1.);
  float occ=contact(center,normal,min(.17,.25/max(1.,-center.z)));
  gl_FragColor=vec4(a*strength*sun*.43+vec3(.007,.040,.083)*veilLight,occ);
}`;
const bloomFrag = `varying vec2 st;uniform sampler2D map,beams;uniform vec2 px;uniform float first;
vec3 safe3(vec3 v){return vec3(v.r>=0.&&v.r<65504.?v.r:0.,v.g>=0.&&v.g<65504.?v.g:0.,v.b>=0.&&v.b<65504.?v.b:0.);}
vec3 tap(vec2 p){
  vec3 c=safe3(texture2D(map,p).rgb);
  if(first>.5){c+=safe3(texture2D(beams,p).rgb);float l=max(max(c.r,c.g),c.b);c*=smoothstep(.21,1.1,l);}
  return c;
}
void main(){vec2 s=px*1.45;vec3 c=tap(st)*.20;
  c+=(tap(st+s)+tap(st-s)+tap(st+vec2(s.x,-s.y))+tap(st+vec2(-s.x,s.y)))*.12;
  s*=1.85;c+=(tap(st+vec2(s.x,0))+tap(st-vec2(s.x,0))+tap(st+vec2(0,s.y))+tap(st-vec2(0,s.y)))*.08;
  gl_FragColor=vec4(c,1.);}`;
const finishFrag = `varying vec2 st;uniform sampler2D raw,beams,b0,b1,b2,b3;uniform float glass,time,aspect,film;uniform vec2 px;
uniform vec4 mouths[VENT_COUNT];uniform vec2 plumeTips[VENT_COUNT];
uniform sampler2D title,depths;uniform mat4 invProj,camWorld,worldToBell;uniform vec3 eye;
float hash(vec2 n){return fract(52.9829189*fract(dot(n,vec2(.06711056,.00583715))));}
// Each vent bends only rays within its rising column, up to the nearest opaque surface.
vec2 thermalOffset(float dist){
  vec2 shift=vec2(0.);
  for(int i=0;i<VENT_COUNT;i++){
    vec4 mouth=mouths[i]; if(mouth.w<=0. || dist<mouth.w-.30)continue;
    vec2 q=(st-mouth.xy)*vec2(aspect,1.),axis=(plumeTips[i]-mouth.xy)*vec2(aspect,1.);
    float h=clamp(dot(q,axis)/max(.00001,dot(axis,axis)),0.,1.);
    float r=length(q-axis*h)/(mouth.z*(.48+.97*h));
    if(r<1.) {
      float phase=h*18.-time*4.+float(i);
      vec2 curl=vec2(sin(phase+q.x*318.+1.7*cos(phase*.62)),cos(phase*1.2+q.y*287.));
      shift+=curl*mouth.z*.086*(1.-smoothstep(.16,1.,r))*(1.-smoothstep(.48,1.,h));
    }
  }
  return shift/vec2(aspect,1.);
}
// A lens-local height field bends the view across each bead and its hanging meniscus.
vec4 droplets(vec2 lens,float cells){
  vec2 cell=floor(lens*cells),p=fract(lens*cells)-.5;
  float seed=hash(cell+83.),size=.089+.23*pow(hash(cell*2.13-5.),4.);
  p-=.40*(vec2(hash(cell+3.),hash(cell+17.))-.5);
  p.y+=.035;p.x/=1.-.28*smoothstep(0.,size,p.y);
  vec2 bead=p/(size*vec2(.84,1.+seed*.60));
  float r=length(bead),mask=(1.-smoothstep(.83,1.,r))*step(.39,seed);
  float edge=exp(-abs(r-.77)*8.);
  float gleam=(edge*max(0.,dot(normalize(bead+.0001),vec2(-.50,.86)))+
      .9*exp(-length(bead-vec2(-.30,.35))*6.))*mask;
  return vec4(bead*mask,gleam,mask);
}
vec3 safeSrc3(vec3 v){return vec3(v.r>=0.&&v.r<65504.?v.r:0.,v.g>=0.&&v.g<65504.?v.g:0.,v.b>=0.&&v.b<65504.?v.b:0.);}
vec3 src(vec2 uv){vec4 v=texture2D(beams,uv);float a=(v.a>=0.&&v.a<=1.)?v.a:1.;return safeSrc3(texture2D(raw,uv).rgb)*a+safeSrc3(v.rgb);}
void main(){
 vec2 p=st-.5;
 vec4 view=invProj*vec4(st*2.-1.,texture2D(depths,st).r*2.-1.,1.);
 vec3 ray=normalize(mat3(camWorld)*view.xyz),dir=mat3(worldToBell)*ray,localEye=(worldToBell*vec4(eye,1.)).xyz;
 float along=(1.355-localEye.z)/(abs(dir.z)>.001?dir.z:.001);vec2 lens=localEye.xy+along*dir.xy;
 float radius=length(lens)/.684,dist=length(view.xyz/view.w);
 float present=step(.0,along)*step(along-.034,dist)*(1.-smoothstep(.94,1.,radius));
 float rim=present*radius*radius;
 vec3 normalView=transpose(mat3(camWorld))*transpose(mat3(worldToBell))*vec3(lens,0.);
 vec2 drift=thermalOffset(dist);
 float wet=glass*present*smoothstep(.43,.91,radius);
 vec4 beads=vec4(0.);float wipe=0.,caustic=0.;
 if(wet>.001){
    beads=droplets(lens,27.)+.43*droplets(lens+4.17,53.)+droplets(lens-2.25,11.)*smoothstep(.74,.86,radius);
    vec2 arm=lens-vec2(-.53,-.37);
    float track=length(arm),bearing=atan(arm.x,arm.y);
    float arc=smoothstep(-.18,.06,bearing)*(1.-smoothstep(.72,.92,bearing));
    float cleaned=arc*smoothstep(.085,.14,track)*(1.-smoothstep(.33,.37,track));
    wet*=1.-.85*cleaned;
    wipe=arc*(exp(-abs(track-.351-.002*sin(bearing*15.))*310.)+
              .34*exp(-abs(track-.335)*360.));
    float a=atan(lens.y,lens.x);
    float filament=radius+.011*sin(a*19.+sin(a*8.+time*.47))+.007*sin(a*29.-time*.63);
    caustic=exp(-abs(filament-.926)*93.)*(.34+.66*pow(.5+.5*cos(a*7.+time*.49),3.));
    vec3 tilt=transpose(mat3(camWorld))*transpose(mat3(worldToBell))*vec3(beads.xy,0.);
    drift+=wet*tilt.xy*vec2(1./aspect,1.)*.0055;
 }
 vec2 uv=clamp(st+drift+normalView.xy*vec2(1./aspect,1.)*rim*(glass>.5?.019:.004),.0005,.9995);
 vec3 c=src(uv);
 if(present>.001){vec2 d=normalView.xy*rim*.0028;c.r=src(uv+d).r;c.b=src(uv-d).b;
    float grit=pow(hash(floor(lens*770.)),47.)*rim; c+=vec3(.09,.18,.17)*grit*.32;
    c*=1.-.085*present*radius;
    c*=1.-.23*wet*beads.w;
    c+=vec3(.54,.88,1.)*beads.z*wet*.77;
    c+=glass*present*(vec3(.20,.70,.69)*caustic*.50+vec3(.14,.24,.23)*wipe*.39);
 }
 float coc=mix(smoothstep(11.,25.,dist)*1.48,smoothstep(4.,10.,dist)*1.08,glass);
 vec2 a=px*(.46+coc);vec3 smoothColor=(src(uv+vec2(a.x,a.y))+src(uv-a)+src(uv+vec2(-a.x,a.y))+src(uv+vec2(a.x,-a.y)))*.25;
 c=mix(c,smoothColor,.18+.41*min(coc,1.));
 vec3 glow=texture2D(b0,uv).rgb*.12+texture2D(b1,uv).rgb*.17+texture2D(b2,uv).rgb*.22+texture2D(b3,uv).rgb*.33;
 c+=glow*mix(.83,.56,glass);c*=1.04-.20*pow(clamp(length(p*1.42),0.,1.),1.8);
 c*=vec3(1.035,1.00,.998);
 // Highlight shoulder preserves chroma in the deep blues and the amber Fresnel lamps.
 c=max(vec3(0.),c-.0028);c=pow(c*(1.12+c*.13)/(1.+c*.94),vec3(1.09));
 c=pow(clamp(c,0.,1.),vec3(1./2.22));c+=(hash(gl_FragCoord.xy+floor(time*24.))-.5)*.010;
 if(film>.5){
   float opening=smoothstep(.48,1.26,time)*(1.-smoothstep(3.1,4.27,time));
   vec2 tt=(st-vec2(.046,.065))/vec2(.50,.20);
   if(opening>.0 && min(tt.x,tt.y)>=0. && max(tt.x,tt.y)<=1.){
      vec4 ink=texture2D(title,tt);c=mix(c,ink.rgb,ink.a*opening);
   }
   c*=smoothstep(.0,.63,time)*(1.-smoothstep(29.,30.,time));
 }
 gl_FragColor=vec4(c,1.);
}`;
function target(depth = false) {
  const t = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    depthBuffer: depth,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
  });
  if (depth) t.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  return t;
}
export function optics(renderer, film, ventMouths) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 270;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#b3e4cd';
  ctx.font = '21px "IBM Plex Mono"';
  ctx.fillText('H A D A L    O B S E R V A T O R Y     /     D I V E   0 0 4', 4, 74);
  ctx.shadowColor = '#061416';
  ctx.shadowBlur = 9;
  ctx.fillStyle = '#f0eee1';
  ctx.font = '94px "Instrument Serif"';
  ctx.fillText('Bioluminescent', 0, 183);
  const start = ctx.measureText('Bioluminescent ').width;
  ctx.font = 'italic 94px "Instrument Serif"';
  ctx.fillStyle = '#cdebdc';
  ctx.fillText('Abyss', start, 183);
  ctx.font = '25px "DM Sans"';
  ctx.fillStyle = '#d5ded8';
  ctx.fillText('Bathysphere descent, 4,000 m', 4, 233);
  const title = new T.CanvasTexture(canvas);

  const sceneTarget = target(true),
    volume = target(),
    levels = Array.from({ length: 4 }, () => target());
  const quad = new T.Mesh(new T.PlaneGeometry(2, 2)),
    passScene = new T.Scene(),
    flat = new T.Camera();
  passScene.add(quad);
  const pass = (frag, uniforms) =>
    new T.ShaderMaterial({
      vertexShader: quadVert,
      fragmentShader: frag,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });
  const vol = pass(volFrag, {
    ...u,
    depths: { value: sceneTarget.depthTexture },
    invProj: { value: new T.Matrix4() },
    camWorld: { value: new T.Matrix4() },
    eye: { value: new T.Vector3() },
  });
  const blur = pass(bloomFrag, {
    map: { value: null },
    beams: { value: volume.texture },
    px: { value: new T.Vector2() },
    first: { value: 1 },
  });
  const ventScreens = ventMouths.map(() => new T.Vector4());
  const ventTips = ventMouths.map(() => new T.Vector2());
  const projected = new T.Vector3();
  const finish = pass(finishFrag.replaceAll('VENT_COUNT', String(ventMouths.length)), {
    mouths: { value: ventScreens },
    plumeTips: { value: ventTips },
    ...vol.uniforms,
    time: u.time,
    worldToBell: { value: new T.Matrix4() },
    title: { value: title },
    film: { value: film ? 1 : 0 },
    px: { value: new T.Vector2() },
    raw: { value: sceneTarget.texture },
    beams: { value: volume.texture },
    b0: { value: levels[0].texture },
    b1: { value: levels[1].texture },
    b2: { value: levels[2].texture },
    b3: { value: levels[3].texture },
    glass: { value: 0 },
    aspect: { value: 1 },
  });
  // The full-screen passes read the raw scene depth while writing to separate attachments.
  function draw(material, dest) {
    renderer.setRenderTarget(dest);
    quad.material = material;
    renderer.render(passScene, flat);
  }
  return {
    resize(w, h) {
      sceneTarget.setSize(w, h);
      volume.setSize(Math.ceil(w / 2), Math.ceil(h / 2));
      levels.forEach((t, i) =>
        t.setSize(Math.max(2, Math.ceil(w / 2 ** (i + 2))), Math.max(2, Math.ceil(h / 2 ** (i + 2))))
      );
      finish.uniforms.px.value.set(1 / w, 1 / h);
      finish.uniforms.aspect.value = w / h;
      u.height.value = h;
    },
    render(scene, camera, inside, body) {
      finish.uniforms.worldToBell.value.copy(body.matrixWorld).invert();
      renderer.setRenderTarget(sceneTarget);
      renderer.render(scene, camera);
      ventMouths.forEach((p, i) => {
        projected.copy(p).applyMatrix4(camera.matrixWorldInverse);
        const z = -projected.z;
        projected.copy(p).project(camera);
        ventScreens[i].set(
          0.5 + 0.5 * projected.x,
          0.5 + 0.5 * projected.y,
          (0.19 * camera.projectionMatrix.elements[5]) / Math.max(0.1, z),
          z > 0 ? camera.position.distanceTo(p) : -1
        );
        projected.copy(p);
        projected.y += 1.16;
        projected.x += 0.065;
        projected.project(camera);
        ventTips[i].set(0.5 + 0.5 * projected.x, 0.5 + 0.5 * projected.y);
      });
      vol.uniforms.invProj.value.copy(camera.projectionMatrixInverse);
      vol.uniforms.camWorld.value.copy(camera.matrixWorld);
      vol.uniforms.eye.value.copy(camera.position);
      draw(vol, volume);
      let prev = sceneTarget;
      for (const [i, level] of levels.entries()) {
        blur.uniforms.map.value = prev.texture;
        blur.uniforms.first.value = i === 0 ? 1 : 0;
        blur.uniforms.px.value.set(1 / prev.width, 1 / prev.height);
        draw(blur, level);
        prev = level;
      }
      finish.uniforms.glass.value = inside ? 1 : 0;
      draw(finish, null);
    },
  };
}
