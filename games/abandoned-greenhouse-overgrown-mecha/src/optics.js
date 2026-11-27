import { T, V, canvasMap } from './workshop.js';

const vertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;
export function optics(renderer, scene, camera) {
  const target = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
  });
  target.samples = 4;
  target.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const veil = new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType, depthBuffer: false });
  const pass = new T.Scene(),
    quad = new T.Mesh(new T.PlaneGeometry(2, 2)),
    screenCam = new T.Camera();
  pass.add(quad);
  quad.frustumCulled = false;
  const vol = new T.ShaderMaterial({
    vertexShader: vertex,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      depth: { value: target.depthTexture },
      inv: { value: new T.Matrix4() },
      eye: { value: V() },
      sun: { value: 0 },
      density: { value: 0.55 },
      pixel: { value: new T.Vector2() },
    },
    fragmentShader: `varying vec2 vUv;uniform sampler2D depth;uniform mat4 inv;
    uniform vec3 eye;uniform float sun,density;
    uniform vec2 pixel;
    vec3 positionAt(vec2 uv){
      vec4 h=inv*vec4(uv*2.-1.,texture2D(depth,uv).r*2.-1.,1.);return h.xyz/h.w;
    }
    float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.54);}
    void main(){
      float d=texture2D(depth,vUv).r;
      vec4 world=inv*vec4(vUv*2.-1.,d*2.-1.,1.);
      vec3 delta=world.xyz/world.w-eye,dir=normalize(delta);
      float dist=min(length(delta),26.),stepSize=dist/36.,sum=0.;
      float offs=hash(floor(gl_FragCoord.xy))*.80+.1;
      vec2 slope=mix(vec2(-.85,-.31),vec2(-.18,.06),smoothstep(0.,.57,sun));
      for(int i=0;i<36;i++){
        vec3 p=eye+dir*(float(i)+offs)*stepSize;
        vec2 roof=p.xz+(6.3-p.y)*slope;
        float hole=exp(-dot((roof-vec2(-3.8,-1.2))*vec2(.99,.67),(roof-vec2(-3.8,-1.2))*vec2(.99,.67)));
        hole+=.73*exp(-dot((roof-vec2(-2.6,-5.8))*vec2(.74,.67),(roof-vec2(-2.6,-5.8))*vec2(.74,.67)));
        float strips=.11+.89*smoothstep(.04,.26,abs(sin(roof.x*3.65+roof.y*.31)));
        strips*=.45+.55*smoothstep(.04,.24,abs(sin((roof.y+8.)*1.186)));
        float inside=(1.-smoothstep(5.7,7.1,p.y))*smoothstep(-.15,.7,p.y)*(1.-smoothstep(5.4,6.4,abs(p.x)));
        sum+=hole*strips*inside*stepSize;
      }
      vec3 point=world.xyz/world.w;
      vec3 normal=normalize(cross(dFdx(point),dFdy(point)));
      if(dot(normal,eye-point)<0.)normal=-normal;
      float ao=0.;
      float rad=clamp(.50/(length(delta)*.73),.009,.13);
      for(int j=0;j<18;j++){
        float f=(float(j)+.6)/18.,a=float(j)*2.39996;
        vec2 off=vec2(cos(a)*pixel.y/pixel.x,sin(a))*rad*(.12+.88*sqrt(f));
        vec3 diff=positionAt(clamp(vUv+off,.0001,.9999))-point;
        float len=length(diff);
        ao+=max(dot(normal,diff/max(len,.0001))-.075,0.)*(1.-smoothstep(.04,.78,len));
      }
      gl_FragColor=vec4(sum*(.10+.92*density)*(1.-smoothstep(.35,.90,sun)),clamp(1.-ao*.147,.40,1.),0.,1.);
    }`,
  });
  const final = new T.ShaderMaterial({
    vertexShader: vertex,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      opening: { value: null },
      isFilm: { value: 0 },
      focus: { value: 5 },
      depth: { value: target.depthTexture },
      frame: { value: target.texture },
      veil: { value: veil.texture },
      size: { value: new T.Vector2() },
      sun: { value: 0 },
      clock: { value: 0 },
    },
    fragmentShader: `varying vec2 vUv;uniform sampler2D frame,veil,depth;uniform float focus,isFilm;uniform sampler2D opening;uniform vec2 size;uniform float sun,clock;
    float lum(vec3 c){return dot(c,vec3(.2126,.7152,.0722));}
    void main(){
      vec3 color=texture2D(frame,vUv).rgb, glow=vec3(0.);
      vec2 dx=1./size;
      float z=.045*85./(85.-texture2D(depth,vUv).r*(85.-.045));
      float circle=clamp(abs(1./max(.3,z)-1./focus)*14.,0.,7.5)*size.y/720.;
      vec3 soft=vec3(0.);float weights=0.;
      for(int i=0;i<15;i++){
        float a=float(i)*2.39996,r=sqrt((float(i)+.5)/15.);
        vec2 lookup=vUv+vec2(cos(a),sin(a))*dx*r*circle;
        float neighbor=.045*85./(85.-texture2D(depth,lookup).r*(85.-.045));
        float weight=smoothstep(-.3,-.025,neighbor-z)+.025;
        soft+=texture2D(frame,lookup).rgb*weight;weights+=weight;
      }
      color=mix(color,soft/weights,smoothstep(.45,2.45,circle));
      vec3 local=(texture2D(frame,vUv+dx*vec2(.64,.4)).rgb+texture2D(frame,vUv-dx*vec2(.64,.4)).rgb)*.5;
      color=mix(color,local,.20);
      for(int i=0;i<12;i++){
        float a=float(i)*2.399963,r=sqrt((float(i)+.5)/12.);
        vec3 sampleC=texture2D(frame,vUv+vec2(cos(a),sin(a))*dx*(3.+r*19.)).rgb;
        glow+=sampleC*smoothstep(1.12,2.8,lum(sampleC))*(1.-r*.68);
      }
      color+=glow*.022;
      vec2 fogAO=texture2D(veil,vUv).rg;float vol=fogAO.r;color*=mix(.96,1.,fogAO.g)*fogAO.g;
      color=color*exp(-vol*.065)+vec3(1.0,.77,.48)*vol*.117;
      color*=1.02-.17*pow(length((vUv-.51)*vec2(1.12,1.)),1.5);
      // A soft film shoulder preserves the color of the sunlit enamel.
      float l=lum(color);
      color=mix(vec3(l),color,.93);
      color*=mix(vec3(.79,.95,1.04),vec3(1.035,1.0,.966),smoothstep(.08,.65,l));
      color=max(vec3(0.),color*.92);
      color=(color*(2.51*color+.03))/(color*(2.43*color+.59)+.14);
      color=clamp(color,0.,1.);
      vec3 srgb=mix(color*12.92,1.055*pow(color,vec3(1./2.4))-.055,step(vec3(.0031308),color));
      float grain=fract(52.9829189*fract(dot(gl_FragCoord.xy+floor(clock*17.),vec2(.06711056,.00583715))))-.5;
      srgb+=grain*.009;
      if(isFilm>.5){
        float a=smoothstep(.35,1.5,clock)*(1.-smoothstep(3.9,5.45,clock));
        vec4 title=texture2D(opening,vUv);
        srgb*=1.-a*.28*(1.-smoothstep(.04,.58,vUv.x))*(1.-smoothstep(.03,.63,vUv.y));
        srgb=mix(srgb,title.rgb,title.a*a);
        srgb*=smoothstep(0.,.70,clock)*(1.-smoothstep(28.85,30.,clock));
      }
      gl_FragColor=vec4(srgb,1.);
    }`,
  });
  return {
    filmTitles() {
      const title = canvasMap(1920, 1080, (c) => {
        c.fillStyle = '#ead2a3';
        c.fillRect(99, 812, 48, 2);
        c.font = '600 18px DM';
        c.letterSpacing = '4px';
        c.fillText('ABANDONED CONSERVATORY', 164, 818);
        c.letterSpacing = '0px';
        c.shadowColor = 'rgba(17,28,19,.50)';
        c.shadowBlur = 18;
        c.fillStyle = '#fff6df';
        c.font = '96px Instrument';
        c.fillText('The Moss-Grown', 94, 918);
        c.fillStyle = '#e9d6a4';
        c.font = 'italic 94px Instrument';
        c.fillText('Guardian', 96, 1002);
      });
      title.colorSpace = T.NoColorSpace;
      final.uniforms.opening.value = title;
      final.uniforms.isFilm.value = 1;
    },
    resize(w, h) {
      target.setSize(w, h);
      vol.uniforms.pixel.value.set(w, h);
      veil.setSize(Math.max(1, Math.round(w * 0.34)), Math.max(1, Math.round(h * 0.34)));
      final.uniforms.size.value.set(w, h);
    },
    draw(t, sun, density, focus) {
      camera.updateMatrixWorld();
      vol.uniforms.inv.value.multiplyMatrices(camera.matrixWorld, camera.projectionMatrixInverse);
      vol.uniforms.eye.value.copy(camera.position);
      vol.uniforms.sun.value = sun;
      vol.uniforms.density.value = density;
      final.uniforms.focus.value = focus;
      final.uniforms.sun.value = sun;
      final.uniforms.clock.value = t;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      quad.material = vol;
      renderer.setRenderTarget(veil);
      renderer.render(pass, screenCam);
      quad.material = final;
      renderer.setRenderTarget(null);
      renderer.render(pass, screenCam);
    },
  };
}
