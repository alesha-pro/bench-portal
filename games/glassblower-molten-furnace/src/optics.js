import { T, v, noiseGLSL } from "./studio.js";
import { filmCard } from "./titles.js";
const vs = "varying vec2 q;void main(){q=uv;gl_Position=vec4(position.xy,0.,1.);}";
export function optics(renderer, U, film) {
  const env = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
  });
  env.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const frame = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
  });
  frame.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  frame.texture.generateMipmaps = true;
  frame.texture.minFilter = T.LinearMipmapLinearFilter;
  const glow = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    minFilter: T.LinearMipmapLinearFilter,
    magFilter: T.LinearFilter,
    generateMipmaps: true,
    depthBuffer: false,
  });
  U.back.value = env.texture;
  const quad = new T.Scene(),
    quadCam = new T.Camera(),
    screen = new T.Mesh(new T.PlaneGeometry(2, 2), undefined);
  quad.add(screen);
  screen.frustumCulled = false;
  const pass = (fragmentShader, uniforms, depth = false) =>
    new T.ShaderMaterial({
      vertexShader: vs,
      fragmentShader,
      uniforms,
      depthTest: depth,
      depthWrite: depth,
      depthFunc: T.AlwaysDepth,
    });
  const transfer = pass(
    `varying vec2 q;uniform sampler2D src,depthTex;uniform float time,heat;uniform mat4 inversePV;uniform vec3 eye;
 ${noiseGLSL}
 void main(){float depth=texture2D(depthTex,q).x;
 vec4 farPoint=inversePV*vec4(q*2.-1.,1.,1.);vec3 ray=farPoint.xyz/farPoint.w-eye;
 float d=(-.84-eye.z)/(abs(ray.z)<.000001?.000001:ray.z);vec3 pos=eye+ray*d;
 vec4 world=inversePV*vec4(q*2.-1.,depth*2.-1.,1.);
 float behind=length(world.xyz/world.w-eye)-length(pos-eye);
 float height=pos.y-1.38;
 float center=pos.x+2.45-.12*sin(height*2.7-time*1.1)-.10*height;
 float width=1.04+.10*height;
 float mask=(1.-smoothstep(.40,1.06,abs(center)/max(width,.1)))*smoothstep(0.,.39,height)
           *(1.-smoothstep(2.46,3.42,height))*smoothstep(-.02,.18,behind)*step(0.,d);
 vec2 uv=q;
 if(mask>.001){
   vec2 flow=vec2(center*3.7,height*3.3-time*2.8);
   float eddy=fb(flow*.67);
   flow+=vec2(eddy*2.,.6*sin(center*4.+height*2.-time));
   vec2 jitter=vec2(sin(flow.y*3.2+6.*eddy)*.43+noise2(flow*2.)-.5,
                    .52*(noise2(flow.yx*2.2+13.)-.5));
   uv+=mask*heat*vec2(.010,.009)*jitter;
 }
 gl_FragColor=texture2D(src,uv);gl_FragDepth=depth;}`,
    {
      src: { value: env.texture },
      depthTex: { value: env.depthTexture },
      inversePV: { value: new T.Matrix4() },
      eye: { value: v(0, 0, 0) },
      time: U.time,
      heat: U.heat,
    },
    true,
  );
  const bright = pass(
    `varying vec2 q;uniform sampler2D src;uniform vec2 res;
 void main(){vec3 c=vec3(0.);for(int i=0;i<4;i++){vec2 off=vec2(float(i%2)-.5,float(i/2)-.5)*2./res;vec3 s=texture2D(src,q+off).rgb;c+=min(s,vec3(9.0))*smoothstep(.64,1.9,max(s.r,max(s.g,s.b)));}gl_FragColor=vec4(c*.25,1.);}`,
    { src: { value: frame.texture }, res: U.res },
  );
  const finish = pass(
    `varying vec2 q;uniform sampler2D src,bloom,depthMap;uniform float time,focus;uniform sampler2D intro,outro;uniform vec2 res;
 vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
 void main(){float depth=texture2D(depthMap,q).r;float dist=.055*60./(60.-depth*(60.-.055));
 float coc=clamp(abs(dist-focus)/max(dist,.1)*res.y*.011/max(focus*.3,.72),0.,8.);
 float lod=log2(1.+coc);vec3 base=textureLod(src,q,lod).rgb;
 vec3 halo=textureLod(bloom,q,1.6).rgb*.085+textureLod(bloom,q,3.4).rgb*.048+textureLod(bloom,q,5.).rgb*.032+textureLod(bloom,q,6.8).rgb*.009;
 vec3 c=base+halo*vec3(.86,.77,.71);
 c*=1.-.18*pow(length((q-.5)*1.42),2.);
 c=aces(max(c,vec3(0.))*.97);
 c=mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));
 float grain=fract(52.9829189*fract(dot(gl_FragCoord.xy+floor(time*30.)*.73,vec2(.06711056,.00583715))))-.5;
 c+=grain*.010;
 ${
   film
     ? `float rise=smoothstep(.25,.91,time)*(1.-smoothstep(3.44,4.56,time));float end=smoothstep(26.21,27.18,time)*(1.-smoothstep(28.88,29.72,time));
 vec2 st=(q-vec2(.044,.037))/vec2(.463,.244);
 if(st.x>0.&&st.y>0.&&st.x<1.&&st.y<1.){vec4 ink=texture2D(intro,st);vec4 last=texture2D(outro,st);c=mix(c,ink.rgb,ink.a*rise);c=mix(c,last.rgb,last.a*end);}
 c*=smoothstep(0.,.60,time)*(1.-smoothstep(29.21,30.,time));`
     : ""
 }
 gl_FragColor=vec4(c,1.);}`,
    {
      src: { value: frame.texture },
      bloom: { value: glow.texture },
      time: U.time,
      depthMap: { value: frame.depthTexture },
      focus: U.focus,
      res: U.res,
      intro: { value: film ? filmCard(false) : null },
      outro: { value: film ? filmCard(true) : null },
    },
  );
  return {
    resize(w, h) {
      env.setSize(w, h);
      frame.setSize(w, h);
      glow.setSize(Math.max(1, w >> 2), Math.max(1, h >> 2));
      U.res.value.set(w, h);
    },
    render(room, front, cam) {
      cam.updateMatrixWorld();
      transfer.uniforms.eye.value.copy(cam.position);
      transfer.uniforms.inversePV.value.multiplyMatrices(
        cam.matrixWorld,
        cam.projectionMatrixInverse,
      );
      renderer.setRenderTarget(env);
      renderer.clear();
      renderer.render(room, cam);
      renderer.setRenderTarget(frame);
      renderer.clear();
      screen.material = transfer;
      renderer.render(quad, quadCam);
      renderer.render(front, cam);
      renderer.setRenderTarget(glow);
      screen.material = bright;
      renderer.render(quad, quadCam);
      renderer.setRenderTarget(null);
      screen.material = finish;
      renderer.render(quad, quadCam);
    },
  };
}
