import * as T from 'three';

// A small linear-light bloom pyramid and a depth-aware lens pass. Keep the SDF depth
// attachment so the rear wall goes soft while the menisci and copper turns stay sharp.
export function makeOptics(renderer) {
  const opts = { type: T.HalfFloatType, minFilter: T.LinearFilter, magFilter: T.LinearFilter };
  const main = new T.WebGLRenderTarget(1, 1, {
    ...opts,
    samples: Math.min(4, renderer.capabilities.maxSamples),
    depthBuffer: true,
  });
  main.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const low = new T.WebGLRenderTarget(1, 1, { ...opts, depthBuffer: false });
  const bloom = low.clone(),
    quadScene = new T.Scene(),
    eye = new T.Camera();
  const quad = new T.Mesh(new T.PlaneGeometry(2, 2));
  quad.frustumCulled = false;
  quadScene.add(quad);
  const vert = 'varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}';
  const blur = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    vertexShader: vert,
    uniforms: { source: { value: null }, axis: { value: new T.Vector2() }, first: { value: 1 } },
    fragmentShader: `varying vec2 st;uniform sampler2D source;uniform vec2 axis;uniform float first;
    vec3 tap(float x){vec3 c=texture2D(source,st+x*axis).rgb;
      if(first>.5){float v=max(c.r,max(c.g,c.b));c*=smoothstep(.42,1.40,v);}
      return c;}
    void main(){gl_FragColor=vec4(tap(0.)*.227027+(tap(1.3846)+tap(-1.3846))*.316216+
      (tap(3.2308)+tap(-3.2308))*.07027,1.);}`,
  });
  const finish = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    vertexShader: vert,
    uniforms: {
      source: { value: main.texture },
      depthMap: { value: main.depthTexture },
      glow: { value: bloom.texture },
      pixel: { value: new T.Vector2() },
      focus: { value: 8 },
    },
    fragmentShader: `varying vec2 st;uniform sampler2D source,depthMap,glow;uniform vec2 pixel;uniform float focus;
    void main(){float z=texture2D(depthMap,st).r;
      float eyeZ=.09*58./(58.-z*(58.-.09));
      float blur=smoothstep(2.1,6.7,eyeZ-focus)*3.3+.66*smoothstep(2.35,3.35,focus-eyeZ);
      vec3 col=texture2D(source,st).rgb*.31;
      for(int i=0;i<8;i++){float a=float(i)*2.399963;vec2 d=vec2(cos(a),sin(a))*sqrt((float(i)+.5)/8.);
        col+=texture2D(source,st+d*pixel*blur).rgb*.08625;}
      vec2 uv=st*2.-1.;float vignette=1.-.34*smoothstep(.24,1.55,length(uv*vec2(.94,.86)));
      col=col*vec3(.965,.996,1.025)+texture2D(glow,st).rgb*.135;
      gl_FragColor=vec4(col*vignette,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      float grain=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5;
      gl_FragColor.rgb+=grain*.010;
    }`,
  });
  function resize(w, h) {
    main.setSize(w, h);
    low.setSize(Math.ceil(w / 3), Math.ceil(h / 3));
    bloom.setSize(low.width, low.height);
    finish.uniforms.pixel.value.set(1 / w, 1 / h);
  }
  function draw(scene, camera, distance) {
    renderer.setRenderTarget(main);
    renderer.render(scene, camera);
    quad.material = blur;
    blur.uniforms.source.value = main.texture;
    blur.uniforms.first.value = 1;
    blur.uniforms.axis.value.set(2.4 / low.width, 0);
    renderer.setRenderTarget(low);
    renderer.render(quadScene, eye);
    blur.uniforms.source.value = low.texture;
    blur.uniforms.first.value = 0;
    blur.uniforms.axis.value.set(0, 2.4 / low.height);
    renderer.setRenderTarget(bloom);
    renderer.render(quadScene, eye);
    quad.material = finish;
    finish.uniforms.focus.value = distance;
    renderer.setRenderTarget(null);
    renderer.render(quadScene, eye);
  }
  return { resize, draw };
}
