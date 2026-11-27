import { T, object, group, v, rod, tube, smooth, mix, noiseGLSL } from "./studio.js";

const vertex = `
uniform float stage, shape, family;
varying vec3 world,normalW;varying vec2 surface,viewSlope;
const float PI=3.14159265;
float sig(float a,float b,float x){return smoothstep(a,b,x);}
// The profile continues over the lip and a short way down the inside of the neck.
vec3 vessel(vec2 st){
  float u=st.x*6.2831853, k=st.y;
  float h=min(k/.94,1.);
  float grow=sig(.07,.57,stage),form=sig(.24,.73,stage);
  float gather=.32*pow(max(.0001,sin(PI*pow(h,.77))),.62)+.073*sig(.78,1.,h);
  float belly=.46*pow(max(.00001,sin(PI*pow(clamp((h-.141)/.63,0.,1.),.86))),.76);
  float foot=.166*exp(-pow(h/.047,2.))+.114*exp(-pow((h-.024)/.019,2.))+.081*exp(-pow((h-.078)/.044,2.));
  float neck=.105+.032*cos(h*PI*2.);
  float lip=.121*sig(.838,.963,h)-.044*sig(.977,1.,h)+.042*exp(-pow((h-.976)/.016,2.));
  float amphora=belly+neck+foot+lip;
  float balloon=(.51*pow(max(.0001,sin(PI*pow(h,.80))),.65)+.107*sig(.73,1.,h))*sig(-.01,.025,h);
  float rad=mix(gather,mix(balloon,amphora,form),grow);
  if(family>.5){
    float core=pow(max(.0001,sin(PI*clamp((h-.06)/.65,0.,1.))),.64);
    if(family<1.5) rad=(.095+.49*core+.05*sig(.91,.96,h))*sig(-.01,.045,h);
    else if(family<2.5)rad=(.12+.40*sig(.18,.67,h)-.20*sig(.71,.95,h)+.04*sig(.92,.98,h))*sig(-.01,.04,h);
    else if(family<3.5) rad=(.083+.218*exp(-pow((h-.04)/.03,2.))+.40*sig(.32,.84,h)-.036*sig(.87,1.,h))*sig(-.01,.019,h);
    else if(family<4.5) rad=.083+.51*exp(-pow((h-.30)/.24,2.))+.063*sig(.92,.99,h);
    else rad=.16+.39*sin(PI*pow(h,.68))+.13*sig(.87,.99,h);
  }
  rad*=1.+shape*.15*cos(h*6.28);
  float wave=sin(u*12.+h*(6.3+form*8.8)+.43*sin(h*8.));
  float ribs=family<.5?1.:(family>3.5?.12:.35);
  rad*=1.+(.021+.060*form)*ribs*wave*sig(.01,.22,h)*(1.-.65*sig(.76,.95,h));
  float y=h*mix(.73,1.92,grow);
  if(k>.94){float inner=(k-.94)/.06;rad=(rad-.016-.036*inner)*(1.-.15*inner);y-=inner*.19*grow+.045*inner;}
  return vec3(rad*cos(u),y,rad*sin(u));
}
void main(){ vec2 q=uv;vec3 p=vessel(q);
  vec3 du=vessel(q+vec2(.00045,0))-vessel(q-vec2(.00045,0));
  vec3 dv=vessel(vec2(q.x,min(.99998,q.y+.00045)))-vessel(vec2(q.x,max(.00002,q.y-.00045)));
  vec3 n=normalize(cross(dv,du));world=(modelMatrix*vec4(p,1)).xyz;
  normalW=normalize((vec4(normalize(normalMatrix*n),0.)*viewMatrix).xyz);
  vec3 eye=normalize(cameraPosition-world);
  viewSlope=vec2(dot(eye,normalize(mat3(modelMatrix)*du)),dot(eye,normalize(mat3(modelMatrix)*dv)));
  surface=q;gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);}`;
const fragment = `
uniform sampler2D panorama,background; uniform vec2 res;
uniform float celsius,stage,hasBackdrop,variant,contact;uniform vec3 tint,steamOrigin;
varying vec3 world,normalW;varying vec2 surface,viewSlope;
${noiseGLSL}
vec3 env(vec3 d){return texture2D(panorama,vec2(atan(d.z,d.x)*.15915494+.5,asin(clamp(d.y,-1.,1.))*.31830989+.5)).rgb;}
vec3 radiance(float C){
  // Planck radiance at 650, 555 and 455 nm, relative to the red band at 1473 K.
  float T=C+273.15;vec3 wave=vec3(650.,555.,455.);
  return pow(vec3(650.)/wave,vec3(5.))*exp(clamp(vec3(15.027)-1.438777e7/(wave*T),vec3(-70.),vec3(12.)));
}
float strand(float a,float w){float d=abs(fract(a+.5)-.5);return 1.-smoothstep(w,w+max(fwidth(a)*.8,.002),d);}
// Refract a tiny spherical void beneath the casing. The deeper population
// slides farther under the gold cane as the viewer moves around the vessel.
vec3 seedsInGlass(vec3 body,vec2 uv,float depth,vec3 light){
  vec2 cell=uv+depth*viewSlope, id=floor(cell);
  float pick=h21(id+depth);
  vec2 jitter=vec2(h21(id+19.),h21(id+32.))-.5;
  vec2 d=(fract(cell)-.5-.52*jitter)*vec2(1.,.87);
  float radius=.045+.104*pick*pick, dist=length(d)/radius;
  float aa=clamp(length(fwidth(cell))*.53/radius,.04,.72);
  float cover=(1.-smoothstep(1.-aa,1.+aa,dist))*smoothstep(.69,.82,pick);
  vec2 n=d/radius;
  float bead=exp(-9.*dot(n-vec2(-.37,.42),n-vec2(-.37,.42)));
  float rim=smoothstep(.41,.89,dist)*(.24+.76*smoothstep(-.7,.7,n.x-n.y));
  vec3 air=body*.38+(.22*rim+.83*bead)*light;
  return mix(body,air,cover);
}
void main(){
  vec3 N=normalize(normalW),V=normalize(cameraPosition-world);if(!gl_FrontFacing)N=-N;
  if(surface.y==0.) N=normalize(cross(dFdx(world),dFdy(world)));
  float f=clamp(abs(dot(N,V)),.015,1.),fr=.042+.958*pow(1.-f,4.4);
  float u=surface.x,v=surface.y/.94, angle=u*6.283185;
  vec2 cane=vec2(cos(angle),sin(angle));float weave=v*1.76+u*3.+.078*sin(v*8.+angle*2.);
  float flutes=sin(angle*12.+v*14.9+.43*sin(v*8.));
  vec2 paper=vec2(weave*2.,v*2.-u);
  float tissue=fb(vec2(sin(angle)*7.+v*15.,cos(angle)*7.-v*9.));
  float patina=fb(vec2(weave*84.,v*119.));
  float foil=strand(weave+.029*(tissue-.5),.028)*smoothstep(.23,.6,tissue);
  float wire=strand(weave+.066,.006)+.67*strand(weave-.055,.004);
  vec2 flakeUV=vec2(u*248.,v*142.+.06*sin(angle)*12.);
  float flakes=pow(h21(floor(flakeUV)),21.)*(1.-smoothstep(.18,.42,length(fract(flakeUV)-.5)));
  float dust=flakes*(.14+1.8*smoothstep(.4,.61,tissue));
  float gild=clamp(foil+.56*wire+.30*dust,0.,1.)*smoothstep(.22,.68,stage);
  float ribTip=(1.-smoothstep(.005,.015,abs(v-.976)))+.58*(1.-smoothstep(.003,.012,abs(v-.023)));
  gild=max(gild,ribTip*.64*smoothstep(.5,.8,stage));
  vec3 refl=env(reflect(-V,N)), through=env(refract(-V,N,1./1.51));
  vec2 nview=(mat3(viewMatrix)*N).xy;
  vec2 offset=-nview*(.012+.026*(1.-f));offset.x*=res.y/res.x;
  vec2 screen=gl_FragCoord.xy/res;
  vec3 refracted=through;
  if(hasBackdrop>.5){vec2 proj=screen+offset;
    vec3 plate=vec3(texture2D(background,proj+offset*.062).r,texture2D(background,proj).g,texture2D(background,proj-offset*.067).b);
    refracted=mix(through,plate,.77);
  }
  vec3 absorption=clamp(tint,vec3(.006),vec3(.97));
  float opticalPath=.65+.51*(1.-f)+.22*cos(angle*6.+v*11.);
  vec3 transmission=pow(absorption,vec3(opticalPath));
  float gleam=pow(max(0.,dot(reflect(-V,N),normalize(vec3(-.45,.64,.59)))),56.);
  vec3 irid=.5+.5*cos(vec3(.1,2.2,4.3)+f*9.+tissue*3.);
  vec3 cold=(refracted+.16)*transmission*(.72+.27*flutes)+refl*(.064+.73*fr)+fr*.064*irid;
  cold+=pow(.5+.5*flutes,6.)*transmission*.51+gleam*vec3(2.8,2.6,2.2);
  vec3 gold=mix(vec3(.47,.19,.039),vec3(1.22,.83,.26),smoothstep(.22,.72,patina))*(.52+1.32*tissue+refl*.9)+vec3(.98,.72,.28)*pow(max(0.,dot(reflect(-V,N),normalize(vec3(-.65,.45,.5)))),9.)*4.;
  if(hasBackdrop>.5 && celsius<675.){
    cold=seedsInGlass(cold,vec2(u*67.,v*29.),.24,vec3(.53,.77,1.05));
    cold=seedsInGlass(cold,vec2(u*43.,v*19.),.09,vec3(.75,.91,1.03));
  }
  if(hasBackdrop<.5){
    // The rack contains several families of work, including unadorned coloured glass.
    gild*=mix(.04,.50,smoothstep(.1,.7,variant));
    cold+=transmission*(.19+.41*pow(1.-f,2.));
    cold+=sqrt(tint)*(.035+.57*pow(1.-f,3.))*(.47+.53*pow(.5+.5*flutes,4.));
  }
  cold=mix(cold,gold,gild);
  float molten=smoothstep(365.,770.,celsius);
  float swirl=sin(angle*9.+v*17.+1.1*sin(v*7.+angle*2.));
  float core=pow(f,.72);
  float skin=fb(cane*4.7+vec2(v*6.3,-v*2.2));
  float localC=celsius+molten*(41.*swirl+92.*(skin-.5)+118.*core-124.*(1.-f)
                        -47.*smoothstep(.72,.97,v));
  vec3 blockOffset=world-steamOrigin;
  float wetSkin=exp(-14.*pow(length(blockOffset.xz)-.34,2.)-7.*pow(blockOffset.y-.02,2.));
  // The wet rim takes heat from the casing first; the thick core stays luminous.
  localC-=hasBackdrop*molten*contact*wetSkin*(86.+54.*(1.-f))*(.68+.46*skin);
  vec3 bb=radiance(localC)*vec3(2.93,5.30,7.55);
  vec3 amber=vec3(.125,.004,.001)*(.32+1.8*f)+refracted*vec3(.39,.017,.0015)*(.27+.54*f)+refl*(.058+.70*fr);
  vec3 hot=mix(amber,vec3(.37,.025,.002)+amber*.62,smoothstep(700.,1010.,celsius))+bb;
  hot+=vec3(.69,.16,.022)*pow(.5+.5*swirl,7.)*smoothstep(585.,900.,celsius)*(.18+core)+gild*vec3(.31,.13,.022);
  vec3 color=mix(cold,hot,smoothstep(350.,660.,celsius));
  if(surface.y>.94)color*=.84;
  if(hasBackdrop<.5)color*=.37;
  gl_FragColor=vec4(color,1.);}`;
const sides = 144;
const geo = new T.PlaneGeometry(1, 1, sides, 108);
// UV rows follow the vessel from its pontil mark to the inner lip. The outer winding faces out.
const faces = Array.from(geo.index.array).reverse();
// Close the polished sole with the same rim vertices at every stage of forming.
const sole = geo.attributes.position.count - sides - 1;
for (let i = 1; i < sides - 1; i++) faces.push(sole, sole + i, sole + i + 1);
geo.setIndex(faces);
export function glass(
  parent,
  m,
  U,
  { stage = 1, celsius = 22, tint = 0x1644ab, variant = 0, family = 0, backdrop = false } = {},
) {
  const uniforms = {
    contact: U.contact,
    steamOrigin: U.steamOrigin,
    res: U.res,
    panorama: { value: m.env },
    background: backdrop ? U.back : { value: m.env },
    stage: { value: stage },
    shape: { value: variant },
    family: { value: family },
    celsius: { value: celsius },
    tint: { value: new T.Color(tint) },
    variant: { value: variant },
    hasBackdrop: { value: backdrop ? 1 : 0 },
  };
  const material = new T.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms,
    side: T.DoubleSide,
  });
  const mesh = object(parent, geo, material);
  mesh.frustumCulled = false;
  return { mesh, uniforms };
}
export const anneal = (stage, heat) =>
  mix(mix(heat, heat * 0.79, smooth(0, 0.39, stage)), 23, smooth(0.5, 1, stage));
export function makeHero(root, m, U) {
  const assembly = group(root),
    axis = group(assembly),
    hero = glass(axis, m, U, { backdrop: true });
  const pipe = group(axis);
  rod(pipe, m.steel, v(0, 0, 0), v(0, 4.92, 0), 0.06, 0.047, 36);
  for (let i = 0; i < 8; i++)
    rod(
      pipe,
      i % 2 ? m.iron : m.brass,
      v(0, 0.025 + i * 0.027, 0),
      v(0, 0.051 + i * 0.027, 0),
      0.081 - i * 0.001,
      0.08 - i * 0.001,
      28,
    );
  for (let i = 0; i < 5; i++)
    rod(pipe, m.dark, v(0, 2.7 + i * 0.085, 0), v(0, 2.754 + i * 0.085, 0), 0.066, 0.066, 24);
  const tool = group(root),
    arms = [];
  for (const sign of [-1, 1]) {
    const arm = group(tool);
    arms.push(arm);
    tube(
      arm,
      m.dark,
      [
        [sign * 0.095, -0.1, 0],
        [sign * 0.145, 0.2, -0.025],
        [sign * 0.19, 0.6, 0],
        [sign * 0.16, 0.93, 0.03],
      ],
      0.03,
    );
    const blade = rod(
      arm,
      m.tempered,
      v(sign * 0.16, 0.92, 0.03),
      v(sign * 0.058, 1.27, 0.035),
      0.055,
      0.012,
      8,
    );
    blade.scale.z = 0.55;
    rod(arm, m.wood, v(sign * 0.09, -0.43, 0), v(sign * 0.1, -0.06, 0), 0.061, 0.046);
  }
  rod(tool, m.brass, v(0, 0.06, -0.055), v(0, 0.06, 0.055), 0.045, 0.045, 16);
  tube(
    tool,
    m.iron,
    [
      [-0.095, -0.39, 0],
      [-0.09, -0.49, 0],
      [0, -0.52, 0],
      [0.09, -0.49, 0],
      [0.095, -0.39, 0],
    ],
    0.033,
  );
  const block = group(root);
  const bowl = object(
    block,
    new T.SphereGeometry(0.42, 40, 18, 0, Math.PI * 2, Math.PI * 0.51, Math.PI * 0.48),
    m.char,
  );
  bowl.material = m.char.clone();
  bowl.material.side = T.DoubleSide;
  bowl.material.color.set(0xb7a594);
  bowl.material.onBeforeCompile = (shader) => {
    shader.fragmentShader =
      noiseGLSL +
      shader.fragmentShader
        .replace(
          "#include <map_fragment>",
          `
      #include <map_fragment>
      vec2 wood=vMapUv*vec2(60.,12.);
      float grain=fb(wood), bands=vMapUv.y*22.+2.*grain+.3*sin(vMapUv.x*12.566);
      float scorch=smoothstep(.28,.9,vMapUv.y)*(.4+.6*pow(.5+.5*cos(bands),3.));
      diffuseColor.rgb=mix(diffuseColor.rgb*vec3(1.24,.83,.59),vec3(.013,.009,.007)*(grain+.46),scorch);
    `,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `
      #include <roughnessmap_fragment>
      roughnessFactor=mix(.55,.19,smoothstep(.42,.90,vMapUv.y))+.06*grain;
    `,
        );
  };
  const rim = object(block, new T.TorusGeometry(0.42, 0.038, 10, 48), m.char);
  rim.rotation.x = Math.PI / 2;
  rod(block, m.wood, v(0.26, -0.17, 0), v(1.28, -0.28, 0.12), 0.091, 0.064);
  rod(block, m.iron, v(0.39, -0.184, 0.015), v(0.48, -0.194, 0.026), 0.092, 0.087);
  const focus = v(0, 0, 0),
    neck = v(0, 0, 0);
  return {
    focus,
    neck,
    update(p, temp, angle, t, age) {
      const emerges = smooth(0.0, 0.27, p),
        release = smooth(0.746, 0.913, p),
        length = mix(0.73, 1.92, smooth(0.07, 0.57, p));
      const tilt = mix(-1.16, -0.79, emerges) * (1 - release);
      assembly.rotation.set(0.11 * (1 - release), -0.88 * (1 - emerges), tilt);
      assembly.position.set(
        mix(-2.36, 0.18, emerges) + 2.02 * release,
        mix(1.92, 1.88, emerges) - 0.29 * release,
        mix(-1.76, 1.32, emerges) + 0.04 * release,
      );
      axis.rotation.y = angle;
      hero.uniforms.stage.value = p;
      hero.uniforms.celsius.value = temp;
      const withdraw = smooth(0.91, 0.98, p);
      pipe.position.y = length - 0.02 + withdraw * 3.6;
      pipe.visible = withdraw < 0.999;
      assembly.updateMatrixWorld(true);
      focus.set(0, length * 0.46, 0).applyMatrix4(assembly.matrixWorld);
      neck.set(0, length * 0.82, 0).applyMatrix4(assembly.matrixWorld);
      const engage = smooth(0.31, 0.49, p) * (1 - smooth(0.64, 0.72, p));
      // The spring jacks approach in the camera plane. Their tips close at opposite sides of the neck.
      tool.rotation.set(-0.28 * engage, 0, mix(1.56, 0.74, engage));
      const tip = v(0, 1.26, 0.035).applyEuler(tool.rotation);
      tool.position.copy(neck).sub(tip);
      tool.position.z += 0.13;
      tool.position.lerp(v(0.89, 1.51, 1.86), 1 - engage);
      const dip = smooth(-1.45, -0.05, age) * (1 - smooth(1.0, 2.28, age));
      if (dip > 0) {
        tool.rotation.z = mix(tool.rotation.z, 2.59, dip);
        tool.rotation.x = mix(tool.rotation.x, -0.32, dip);
        const immersed = U.tub.value
          .clone()
          .add(v(0.01, -0.075, 0.012))
          .sub(v(0, 1.27, 0.035).applyEuler(tool.rotation));
        tool.position.lerp(immersed, dip);
        tool.position.y += 0.54 * Math.sin(dip * Math.PI);
      }
      for (let i = 0; i < 2; i++)
        arms[i].rotation.z =
          (i === 0 ? 1 : -1) *
          (0.068 + 0.17 * (1 - engage) + 0.021 * Math.sin(t * 2.6)) *
          (1 - 0.86 * dip);
      const touch = smooth(0.16, 0.295, p) * (1 - smooth(0.585, 0.69, p));
      block.position.copy(focus);
      block.position.y -= 0.4;
      block.position.x += 0.08;
      block.position.z += 0.08;
      block.position.lerp(v(3.78, 1.82, 0.86), 1 - touch);
      block.rotation.z = -0.22;
      U.steamOrigin.value.copy(block.position);
      return smooth(0.94, 0.999, touch);
    },
  };
}
