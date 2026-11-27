import * as T from 'three';

// Single-pass optical finish. The multisampled beauty buffer and its resolved
// depth serve both contact shading and the shallow focus of the detail shots.
export function optics(renderer) {
  const target = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    samples: 4,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter
  });
  target.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const scene = new T.Scene(),
    cam = new T.Camera();
  const uniforms = {
    inverseProjection: { value: new T.Matrix4() },
    cameraWorld: { value: new T.Matrix4() },
    beauty: { value: target.texture },
    depth: { value: target.depthTexture },
    pixel: { value: new T.Vector2(1, 1) },
    focus: { value: 10 },
    near: { value: 0.045 },
    far: { value: 95 },
    lens: { value: 0.7 },
    viewCenter: { value: new T.Vector2(0.5, 0.5) }
  };
  const shader = new T.ShaderMaterial({
    depthWrite: false,
    depthTest: false,
    uniforms,
    vertexShader: `varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}`,
    fragmentShader: `varying vec2 st;uniform sampler2D beauty,depth;uniform vec2 pixel,viewCenter;
      uniform float focus,near,far,lens;uniform mat4 inverseProjection,cameraWorld;
      float lamplight(float z){
        vec4 rp=inverseProjection*vec4(st*2.-1.,1.,1.);vec3 cr=normalize(rp.xyz/rp.w);
        vec3 ray=mat3(cameraWorld)*cr,eye=cameraWorld[3].xyz;
        vec3 lamp=vec3(-2.77,3.34,-2.51),axis=normalize(vec3(2.62,-1.89,2.65));
        vec3 bound=lamp+axis*2.35,u=bound-eye;float along=dot(u,ray),disc=7.9-dot(u,u)+along*along;
        if(disc<0.)return 0.;
        float halfLen=sqrt(disc),a=max(0.,along-halfLen),b=min(along+halfLen,z/max(.01,-cr.z));
        if(b<=a)return 0.;
        float light=0.;
        for(int k=0;k<14;k++){
          vec3 q=eye+ray*mix(a,b,(float(k)+.5)/14.)-lamp;float h=dot(q,axis);
          float radial=length(q-h*axis)/(.31+max(0.,h)*.24);
          light+=(1.-smoothstep(.16,1.,radial))*smoothstep(0.,.18,h)*(1.-smoothstep(3.7,4.63,h))/(1.+h*h*.53);
        }
        return light*(b-a)/14.;
      }
      float zAt(vec2 uv){float d=texture2D(depth,uv).x;return near*far/(far-d*(far-near));}
      void main(){
        float z=zAt(st),coc=min(4.4,max(0.,abs(z-focus)-.85)*lens*2.7/max(1.,z*.24));
        vec3 rgb=texture2D(beauty,st).rgb*2.,glow=vec3(0.);
        float count=2.,occlusion=0.;
        for(int j=0;j<16;j++){
          float a=(float(j)+.43)*2.399963,rad=sqrt((float(j)+.5)/16.);
          vec2 dir=vec2(cos(a),sin(a)),uv=st+dir*pixel*rad*coc;
          float other=zAt(uv),weight=clamp(1.-abs(other-z)*.52,.04,1.);
          rgb+=texture2D(beauty,uv).rgb*weight;count+=weight;
          vec3 h=texture2D(beauty,st+dir*pixel*(2.5+rad*8.5)).rgb;
          glow+=max(h-1.5,vec3(0.));
          float dz=z-zAt(st+pixel*dir*(2.1+rad*13.)*clamp(8./z,.55,1.8));
          occlusion+=smoothstep(.009,.075,dz)*(1.-smoothstep(.10,.42,dz));
        }
        rgb=rgb/count*(1.-occlusion*.042)+glow*.0023+lamplight(z)*vec3(.039,.020,.008);
        vec2 q=(st-viewCenter)*vec2(1.07,.9);rgb*=1.-.25*smoothstep(.17,.79,length(q));
        gl_FragColor=vec4(max(vec3(0.),rgb),1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;
        gl_FragColor.rgb+=grain*.011;
      }`
  });
  const quad = new T.Mesh(new T.PlaneGeometry(2, 2), shader);
  quad.frustumCulled = false;
  scene.add(quad);
  return {
    resize(w, h, cx, cy) {
      target.setSize(w, h);
      uniforms.pixel.value.set(1 / w, 1 / h);
      uniforms.viewCenter.value.set(cx, 1 - cy);
    },
    draw(world, camera, distance, macro) {
      uniforms.inverseProjection.value.copy(camera.projectionMatrixInverse);
      camera.updateMatrixWorld();
      uniforms.cameraWorld.value.copy(camera.matrixWorld);
      uniforms.focus.value = distance;
      uniforms.lens.value = macro ? 1.6 : 0.8;
      renderer.setRenderTarget(target);
      renderer.render(world, camera);
      renderer.setRenderTarget(null);
      renderer.render(scene, cam);
    }
  };
}
