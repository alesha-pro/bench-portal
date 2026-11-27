import * as T from 'three';
import { world, glassWorld, phase, clock, glow, reaction, canvasTexture } from './workshop.js';

const commonVert = `
varying vec3 p,n,wp; varying vec2 st;
void main(){
  st=uv;p=position;vec4 w=modelMatrix*vec4(position,1.);
  wp=w.xyz;n=normalize(transpose(inverse(mat3(modelMatrix)))*normal);
  gl_Position=projectionMatrix*viewMatrix*w;
}`;
const envGL = `uniform sampler2D sky;
vec3 room(vec3 d){return texture2D(sky,vec2(atan(d.z,d.x)*.159155+.5,asin(clamp(d.y,-1.,1.))*.31831+.5)).rgb;}`;
export let glass, ghostGlass, tubeGlass, env;
const size = { value: new T.Vector2() },
  refractMap = { value: null };
const vary = 'varying vec3 p,n,wp; varying vec2 st;';
export function makeGlass(tint, thick, weight) {
  return new T.ShaderMaterial({
    vertexShader: commonVert,
    transparent: true,
    depthWrite: true,
    uniforms: {
      sky: { value: env },
      plate: refractMap,
      size,
      tint: { value: new T.Color(tint) },
      thick: { value: thick },
      weight: { value: weight },
    },
    fragmentShader: `${vary}${envGL}
    uniform sampler2D plate;uniform vec2 size;uniform vec3 tint;uniform float thick,weight;
    void main(){
      vec3 N=normalize(n),V=normalize(cameraPosition-wp);
      // Very low-amplitude striae and cords left by hand blowing.
      N=normalize(N+vec3(.0028*sin(93.*p.y+4.*sin(p.x*7.)),.0027*sin(39.*p.x+37.*p.z+sin(9.*p.y)),.0032*sin(85.*p.y+5.*p.z)));
      float d=abs(dot(N,V)), f=.04+.86*pow(1.-d,3.1);
      vec3 R=reflect(-V,N);vec3 reflections=room(R);
      vec3 ray=mat3(viewMatrix)*(refract(-V,N,1./1.49)+V);
      vec2 uv=gl_FragCoord.xy/size,offset=ray.xy*thick/max(.6,gl_FragCoord.w*2.+1.);
      vec3 base=vec3(texture2D(plate,clamp(uv+offset*1.04,.001,.999)).r,
                    texture2D(plate,clamp(uv+offset,.001,.999)).g,
                    texture2D(plate,clamp(uv+offset*.958,.001,.999)).b);
      float edge=pow(1.-d,4.6);float micro=.98+.02*sin(p.y*215.+p.x*31.);
      vec3 color=base*mix(vec3(1.),tint,.09+.34*edge)*(.994-.18*edge);
      color=mix(color,reflections,min(.84,f*.78))+reflections*(.065+.13*edge)*micro;
      color+=tint*(edge*.105+.007*pow(1.-d,.8));
      gl_FragColor=vec4(color,weight);
    }`,
  });
}
export function fluid(kind, fill) {
  const palette = [
    [0x002715, 0x10d376, 0x9dffc5],
    [0x031d4a, 0x168bff, 0x88f8ff],
    [0x230a38, 0x9049e8, 0xffad3e],
    [0x505a60, 0xb8d2d6, 0xffdfac],
  ][kind];
  const liquidVertex =
    'uniform float t,fill,kind;\n' +
    commonVert.replace(
      'vec4 w=modelMatrix*vec4(position,1.);',
      `
    vec3 pos=position;
    float nearSurface=smoothstep(fill-.06,fill-.004,pos.y);
    float ripple=sin(p.x*19.+2.*sin(p.z*8.+t*1.8)+t*2.8)+.48*sin(p.z*23.-p.x*5.-t*3.1);
    pos.y+=nearSurface*ripple*(kind<.5?.009:.004);
    vec4 w=modelMatrix*vec4(pos,1.);`,
    );
  return new T.ShaderMaterial({
    vertexShader: liquidVertex,
    transparent: true,
    depthWrite: false,
    uniforms: {
      sky: { value: env },
      t: phase,
      gain: glow,
      react: reaction,
      fill: { value: fill },
      kind: { value: kind },
      low: { value: new T.Color(palette[0]) },
      high: { value: new T.Color(palette[1]) },
      accent: { value: new T.Color(palette[2]) },
    },
    fragmentShader: `${vary}${envGL}
    uniform float t,gain,react,fill,kind;uniform vec3 low,high,accent;
    float field(vec3 q){
      return sin(q.x*3.2+1.4*sin(q.y*4.4+q.z*2.+t*.52))+
      .64*sin(q.y*4.+2.2*cos(q.z*4.2+q.x+t*.42))+.33*sin(q.x*9.-q.y*3.+sin(q.z*5.-t*.4));
    }
    void main(){
      vec3 N=normalize(n),V=normalize(cameraPosition-wp);
      float wave=field(p*1.6+vec3(t*.095,0.,0.)),surface=smoothstep(fill-.025,fill-.002,p.y);
      N=normalize(N+vec3(wave*.032,0.,sin(6.*p.x+wave*2.+t)*.035)*(surface+.2));
      float facing=max(.0,dot(N,V)),rim=pow(1.-facing,2.2), light=dot(N,normalize(vec3(-.45,.76,.51)))*.5+.5;
      vec3 reflected=room(reflect(-V,N)),transmitted=room(refract(-V,N,.73));
      float cloud=.5+.5*wave/2., thread=pow(max(0.,1.-abs(sin(wave*4.7+t*.18))),4.);
      float depth=clamp(1.-(fill-p.y)*.77,.05,1.);
      float vapor=0., veins=0.;
      vec3 ray=refract(-V,N,.78);
      for(int j=0;j<6;j++){
        vec3 sampleP=p+ray*(.075+float(j)*.115);
        float density=field(sampleP*2.1+vec3(t*.085,0.,-.08*t));
        float strand=exp(-16.*abs(density+.4*sin(7.*sampleP.y+.33*t)));
        vapor+=smoothstep(-.25,1.55,density)*(.13-float(j)*.011);
        veins+=strand*(.41-float(j)*.04);
      }
      float tex=.045+.32*light+.30*cloud+.23*depth+.22*vapor;
      vec3 c=mix(low*.68,high,clamp(tex*tex*.78,0.,1.));
      c*=.56+.59*gain;c+=transmitted*high*.18;
      c+=high*(rim*.34+thread*(.035+.07*cloud)+surface*(.045+.14*thread)+.74*veins)*gain;
      if(kind>1.5 && kind<2.5){
        float vein=smoothstep(.40,.89,cloud+.16*sin(p.y*7.-wave*2.+t*.34));
        c=mix(c,accent*(.26+1.1*thread+.44*cloud),vein*.85);c+=accent*veins*.48;
      }
      if(kind>2.5)c=mix(low,reflected,.79)+high*thread*.26;
      c*=mix(.68,1.03,pow(light,.75));
      c+=min(reflected,vec3(3.5))*(.045+.19*rim+.048*surface);
      c=mix(c,c*(vec3(.38)+.62*normalize(high+vec3(.06))),.48*surface);
      c+=vec3(1.4,.65,.09)*exp(-3.5*abs((wp.x+2.8)*.42-react))*(.24+thread)*gain;
      gl_FragColor=vec4(c,.86+surface*.10);
    }`,
  });
}
export function streamMaterial(color, offset, span, silver = false) {
  return new T.ShaderMaterial({
    vertexShader: commonVert,
    uniforms: {
      sky: { value: env },
      t: phase,
      react: reaction,
      gain: glow,
      color: { value: new T.Color(color) },
      offset: { value: offset },
      span: { value: span },
      silver: { value: +silver },
    },
    fragmentShader: `${vary}${envGL}
      uniform float t,react,gain,offset,span,silver;uniform vec3 color;
      void main(){
        vec3 N=normalize(n),V=normalize(cameraPosition-wp);float q=st.x;
        float filament=.5+.5*sin(50.*q-2.7*t+sin(st.y*6.283+q*12.-t));float bead=pow(max(0.,cos(19.*q-t*1.73)),13.);
        float travel=exp(-pow((offset+q*span-react)*4.3,2.));
        vec3 mirror=room(reflect(-V,N));float rim=pow(1.-abs(dot(V,N)),2.);
        vec3 c=mix(color*(.06+.37*filament+.58*bead+.15*rim)*(.48+.62*gain)+mirror*.18,
          mirror*(.65+.60*filament)+vec3(.11,.15,.16)*filament+bead*vec3(.19,.22,.23),silver);
        c+=vec3(3.1,1.26,.16)*travel*(.65+.55*filament)*gain;
        gl_FragColor=vec4(c,1.);
      }`,
  });
}
export function optics(renderer, environment) {
  env = environment;
  glass = makeGlass(0x9ee9dd, 0.04, 0.9);
  tubeGlass = makeGlass(0xc6f6f3, 0.009, 0.68);
  ghostGlass = makeGlass(0xceeef2, 0.012, 0.37);
  const sceneRT = new T.WebGLRenderTarget(2, 2, { type: T.HalfFloatType, samples: 4 });
  sceneRT.depthTexture = new T.DepthTexture(2, 2, T.UnsignedIntType);
  const copy = new T.WebGLRenderTarget(2, 2, { type: T.HalfFloatType, depthBuffer: false });
  const bloom = new T.WebGLRenderTarget(2, 2, {
    type: T.HalfFloatType,
    depthBuffer: false,
    generateMipmaps: true,
    minFilter: T.LinearMipmapLinearFilter,
  });
  refractMap.value = copy.texture;
  const screen = new T.Scene(),
    cam = new T.Camera();
  const tri = new T.BufferGeometry();
  tri.setAttribute('position', new T.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const vertexShader =
    'varying vec2 at; void main(){at=position.xy*.5+.5;gl_Position=vec4(position,1.);}';
  const pass = (fragmentShader, uniforms) =>
    new T.ShaderMaterial({
      vertexShader,
      fragmentShader: 'varying vec2 at;\n' + fragmentShader,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });
  const source = { value: sceneRT.texture },
    copyMat = pass('uniform sampler2D src;void main(){gl_FragColor=texture2D(src,at);}', {
      src: source,
    });
  const bright = pass(
    `uniform sampler2D src;void main(){
    vec3 c=min(vec3(5.),texture2D(src,at).rgb);
    float l=max(c.r,max(c.g,c.b));gl_FragColor=vec4(c*smoothstep(.55,1.9,l),1.);
  }`,
    { src: source },
  );
  const titles = canvasTexture(1024, 280, (ctx) => {
    ctx.shadowColor = '#101310';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = '#e6cc9a';
    ctx.font = '26px Georgia';
    let x = 10;
    for (const ch of 'THE MIDNIGHT ALCHEMIST’S') {
      ctx.fillText(ch, x, 79);
      x += ctx.measureText(ch).width + 4.0;
    }
    ctx.fillStyle = '#f6ead1';
    ctx.font = '105px Georgia';
    ctx.fillText('Glass Distillery', 6, 194);
    ctx.fillStyle = '#cfa568';
    ctx.fillRect(13, 231, 127, 2);
    ctx.beginPath();
    ctx.moveTo(149, 226);
    ctx.lineTo(154, 232);
    ctx.lineTo(149, 238);
    ctx.lineTo(144, 232);
    ctx.fill();
  });
  titles.colorSpace = T.NoColorSpace;
  const final = pass(
    `uniform sampler2D src,bloom,zMap,titles;uniform float gain,t,fade,titleAlpha,focus;uniform vec2 viewport;
  float depthAt(vec2 uv){return 2.*.035*80./(80.+.035-(2.*texture2D(zMap,uv).r-1.)*(80.-.035));}
  vec3 lens(){
    float z=depthAt(at);
    // Thin-lens circle of confusion in pixels with foreground rejection.
    float blur=clamp(abs(1./z-1./focus)*viewport.y*.046,0.,viewport.y*.009);
    vec3 sum=texture2D(src,at).rgb;float w=1.;
    if(blur>.52){
      for(int k=0;k<18;k++){
        float a=float(k)*2.399963,r=sqrt((float(k)+.5)/18.);
        vec2 uv=at+vec2(cos(a),sin(a))*r*blur/viewport;
        float sampleZ=depthAt(uv),f=smoothstep(-.12,.22,sampleZ-z+.24);
        sum+=texture2D(src,uv).rgb*f;w+=f;
      }
    }return sum/w;
  }
  vec3 softLight(float lod){
    vec2 d=vec2(exp2(lod))/vec2(textureSize(bloom,0));
    return (textureLod(bloom,at,lod).rgb*2.+textureLod(bloom,at+d*vec2(.7,.5),lod).rgb+
    textureLod(bloom,at-d*vec2(.7,.5),lod).rgb+textureLod(bloom,at+d*vec2(.5,-.7),lod).rgb+
    textureLod(bloom,at-d*vec2(.5,-.7),lod).rgb)/6.;
  }
  void main(){
    vec3 c=lens()+(softLight(2.)*.18+softLight(4.)*.30+softLight(5.5)*.20)*gain;
    c*=.84; c*=1.-.24*pow(length((at-.5)*1.42),2.);
    c=c*(2.51*c+.03)/(c*(2.43*c+.59)+.14);
    c=clamp(c,0.,1.);c=mix(12.92*c,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));
    float grain=fract(sin(dot(gl_FragCoord.xy+floor(t*24.),vec2(12.9898,78.233)))*43758.5453)-.5;
    vec2 uv=(at-vec2(.046,.940-.37*280./1024.*viewport.x/viewport.y))/vec2(.37,.37*280./1024.*viewport.x/viewport.y);
    if(titleAlpha>.001 && all(greaterThan(uv,vec2(0.)))&&all(lessThan(uv,vec2(1.)))){
      vec4 ink=texture2D(titles,uv);c=mix(c,ink.rgb,ink.a*titleAlpha);
    }
    gl_FragColor=vec4((c+grain*.009)*fade,1.);
  }`,
    {
      src: source,
      bloom: { value: bloom.texture },
      gain: glow,
      t: clock,
      fade: { value: 1 },
      zMap: { value: sceneRT.depthTexture },
      viewport: size,
      focus: { value: 8 },
      titles: { value: titles },
      titleAlpha: { value: 0 },
    },
  );
  const quad = new T.Mesh(tri, copyMat);
  quad.frustumCulled = false;
  screen.add(quad);
  function draw(target, m) {
    quad.material = m;
    renderer.setRenderTarget(target);
    renderer.render(screen, cam);
  }
  return {
    resize(w, h) {
      size.value.set(w, h);
      sceneRT.setSize(w, h);
      copy.setSize(w, h);
      bloom.setSize(Math.max(8, w >> 1), Math.max(8, h >> 1));
    },
    render(camera, focus, fade = 1, titleAlpha = 0) {
      renderer.autoClear = true;
      renderer.setRenderTarget(sceneRT);
      renderer.render(world, camera);
      draw(copy, copyMat);
      renderer.autoClear = false;
      renderer.setRenderTarget(sceneRT);
      renderer.render(glassWorld, camera);
      final.uniforms.focus.value = focus;
      final.uniforms.titleAlpha.value = titleAlpha;
      final.uniforms.fade.value = fade;
      draw(bloom, bright);
      draw(null, final);
      renderer.autoClear = true;
    },
  };
}

export function dropletMaterial() {
  return new T.ShaderMaterial({
    vertexShader: commonVert,
    uniforms: { sky: { value: env } },
    depthWrite: true,
    fragmentShader: `${vary}${envGL}
  void main(){
    vec3 N=normalize(n),V=normalize(cameraPosition-wp);
    float f=pow(1.-abs(dot(N,V)),1.9);
    vec3 L=normalize(vec3(-.5,.82,.42)),H=normalize(L+V);
    vec3 c=mix(vec3(.003,.087,.28),vec3(.16,.86,1.5),f);
    c+=room(reflect(-V,N))*.47+vec3(2.3,2.5,2.5)*pow(max(.0,dot(N,H)),38.);
    c+=vec3(.012,.28,.38)*pow(max(.0,dot(-N,L)),3.);
    gl_FragColor=vec4(c,1.);
  }`,
  });
}
