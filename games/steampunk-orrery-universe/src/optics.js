import * as T from 'three';

// A four-level radiance pyramid collects halation from the Sun, lamp glass and polished edges.
export function optics(renderer,world,camera){
  const target=(depthBuffer=false)=>new T.WebGLRenderTarget(1,1,{type:T.HalfFloatType,depthBuffer,minFilter:T.LinearFilter,magFilter:T.LinearFilter});
  const plate=target(true);plate.samples=4;plate.depthTexture=new T.DepthTexture(1,1,T.UnsignedIntType);
  const atmosphere=target();
  const levels=Array.from({length:4},()=>target()),quadScene=new T.Scene(),lens=new T.Camera();
  const vertexShader='varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}';
  const mat=(fragmentShader,uniforms)=>new T.ShaderMaterial({vertexShader,fragmentShader,uniforms,depthTest:false,depthWrite:false});
  const reduce=mat(`uniform sampler2D src;uniform vec2 dx;uniform float first;varying vec2 vUv;
    vec3 tap(vec2 off){vec3 c=texture2D(src,vUv+off*dx).rgb;
      float lum=max(c.r,max(c.g,c.b));return c*mix(1.,smoothstep(.73,1.65,lum),first);}
    void main(){vec3 c=tap(vec2(0.))*.20;
      c+=.12*(tap(vec2(1,0))+tap(vec2(-1,0))+tap(vec2(0,1))+tap(vec2(0,-1)));
      c+=.08*(tap(vec2(1,1))+tap(vec2(-1,1))+tap(vec2(1,-1))+tap(vec2(-1,-1)));gl_FragColor=vec4(c,1.);}`,
      {src:{},dx:{value:new T.Vector2()},first:{}});
  const scatter=mat(`uniform sampler2D depthMap;uniform mat4 invProj,viewWorld;
    uniform vec3 eye;uniform float flux,clock;varying vec2 vUv;
    void main(){
      vec2 clip=vUv*2.-1.;float d=texture2D(depthMap,vUv).r;
      vec4 view=invProj*vec4(clip,d*2.-1.,1.);view/=view.w;
      vec3 end=(viewWorld*view).xyz,ray=normalize(end-eye),source=vec3(0.,4.58,0.);
      vec3 offset=eye-source;float mid=-dot(ray,offset),delta=mid*mid-dot(offset,offset)+46.;
      if(delta<=0.){gl_FragColor=vec4(0.);return;}
      float halfSpan=sqrt(delta),start=max(0.,mid-halfSpan),stop=min(length(end-eye),mid+halfSpan);
      float stepSize=max(0.,stop-start)/16.,sum=0.;
      for(int i=0;i<16;i++){
        vec3 q=offset+ray*(start+(float(i)+.5)*stepSize);float r=max(.5,length(q));vec3 n=q/r;
        float phi=atan(n.z,n.x),theta=asin(clamp(n.y,-1.,1.));
        float vane=.5+.5*sin(10.*phi+2.3*sin(theta*4.+clock*.047)+3.*theta);
        float lobe=pow(vane,5.)*(.26+.74*pow(.5+.5*sin(theta*14.-phi*2.+clock*.078),2.));
        float density=exp(-r*.33)/(r*r+.4)*(.11+.96*lobe)*smoothstep(.88,1.25,r);
        sum+=density*stepSize;
      }
      gl_FragColor=vec4(vec3(.91,.42,.104)*sum*flux,1.);
    }`,{depthMap:{value:plate.depthTexture},invProj:{value:camera.projectionMatrixInverse},viewWorld:{value:camera.matrixWorld},eye:{value:camera.position},flux:{value:1},clock:{value:0}});
  const finish=mat(`uniform sampler2D image,b0,b1,b2,b3,air;uniform float fade;varying vec2 vUv;
    void main(){vec3 c=texture2D(image,vUv).rgb;
      vec3 h=.18*texture2D(b0,vUv).rgb+.28*texture2D(b1,vUv).rgb+.42*texture2D(b2,vUv).rgb+.66*texture2D(b3,vUv).rgb;
      c+=h*.155+texture2D(air,vUv).rgb;vec2 p=vUv-.5;float vignette=smoothstep(.16,.7,length(p*vec2(1.,.87)));
      c*=1.-.37*vignette;
      float lum=dot(c,vec3(.2126,.7152,.0722));c*=mix(vec3(.83,.955,1.09),vec3(1.065,1.,.934),smoothstep(.025,.61,lum));
      c=max(vec3(0.),(c-.013)*1.017);
      gl_FragColor=vec4(c,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      gl_FragColor.rgb*=fade;
      gl_FragColor.rgb+=fade*(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5)/320.;
    }`,{image:{value:plate.texture},air:{value:atmosphere.texture},...Object.fromEntries(levels.map((t,i)=>['b'+i,{value:t.texture}])),fade:{value:1}});
  const quad=new T.Mesh(new T.PlaneGeometry(2,2),finish);quad.frustumCulled=false;quadScene.add(quad);
  const size=new T.Vector2();
  return ()=>{
    renderer.getDrawingBufferSize(size);
    if(plate.width!==size.x||plate.height!==size.y){
      plate.setSize(size.x,size.y);atmosphere.setSize(Math.max(1,size.x>>2),Math.max(1,size.y>>2));
      levels.forEach((l,i)=>l.setSize(Math.max(1,size.x>>(2+i)),Math.max(1,size.y>>(2+i))));
    }
    renderer.setRenderTarget(plate);renderer.render(world,camera);
    quad.material=scatter;scatter.uniforms.flux.value=world.userData.solarFlux*.68;scatter.uniforms.clock.value=world.userData.clock;
    renderer.setRenderTarget(atmosphere);renderer.render(quadScene,lens);
    quad.material=reduce;
    levels.forEach((l,i)=>{
      const src=i===0?plate:levels[i-1];reduce.uniforms.src.value=src.texture;reduce.uniforms.first.value=i===0?1:0;
      reduce.uniforms.dx.value.set(1.35/src.width,1.35/src.height);renderer.setRenderTarget(l);renderer.render(quadScene,lens);
    });
    finish.uniforms.fade.value=world.userData.fade??1;quad.material=finish;renderer.setRenderTarget(null);renderer.render(quadScene,lens);
  };
}
