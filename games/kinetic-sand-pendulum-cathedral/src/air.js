import * as T from 'three';
import { random } from './materials.js';
import { SAND_Y, TAU } from './motion.js';

export const sunDirection = new T.Vector3(-0.8, 0.345, -0.38).normalize();
export function atmosphere(renderer, scene, camera) {
  const target = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    depthBuffer: true,
    samples: 0,
  });
  target.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const screen = new T.Scene(),
    flat = new T.Camera();
  const pass = new T.ShaderMaterial({
    uniforms: {
      plate: { value: target.texture },
      depthTex: { value: target.depthTexture },
      invProj: { value: camera.projectionMatrixInverse },
      viewWorld: { value: camera.matrixWorld },
      lightDir: { value: sunDirection },
      viewport: { value: new T.Vector2() },
    },
    depthTest: false,
    depthWrite: false,
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader: `varying vec2 vUv;uniform sampler2D plate,depthTex;uniform vec2 viewport;
    uniform mat4 invProj,viewWorld;uniform vec3 lightDir;
    float portal(vec3 p){
      // Intersect the ray toward the sun with the cylinder of arcade bays.
      vec2 l=lightDir.xz;
      float b=dot(p.xz,l),c=dot(p.xz,p.xz)-108.1;
      float d=(-b+sqrt(max(0.,b*b-dot(l,l)*c)))/dot(l,l);
      vec3 hit=p+lightDir*d;
      float a=atan(hit.x,hit.z);
      float bay=(fract(a*2.54647909)-.5)*4.13;
      float top=4.05+sqrt(max(0.,2.92-bay*bay));
      return (1.-smoothstep(1.64,1.80,abs(bay)))*(1.-smoothstep(top-.14,top+.1,hit.y))*smoothstep(1.2,1.48,hit.y)*step(0.,d);
    }
    vec3 reconstruct(vec2 uv){
      vec4 p=invProj*vec4(uv*2.-1.,texture2D(depthTex,uv).r*2.-1.,1.);
      return p.xyz/p.w;
    }
    float occlusion(vec3 pos,vec3 n){
      float ao=0.;
      for(int i=0;i<12;i++){
        float j=float(i)+.5, a=j*2.39996,rad=sqrt(j/12.);
        vec2 offset=vec2(cos(a)*viewport.y/viewport.x,sin(a))*rad*.25/max(1.,-pos.z);
        vec3 dif=reconstruct(vUv+offset)-pos;
        float len=length(dif);
        ao+=max(0.,dot(n,dif)/max(.00001,len)-.09)*(1.-smoothstep(.045,.50,len));
      }
      return 1.-.90*ao/12.;
    }
    void main(){
      float depth=texture2D(depthTex,vUv).r;
      vec4 vp=invProj*vec4(vUv*2.-1.,depth*2.-1.,1.);vp.xyz/=vp.w;
      vec3 orig=viewWorld[3].xyz, ray=normalize(mat3(viewWorld)*vp.xyz);
      float extent=min(length(vp.xyz),22.);
      // Stable screen-space quadrature with fixed interleaving, no animated sampling.
      float jitter=fract(dot(mod(gl_FragCoord.xy,4.),vec2(.25,.5625)));
      float fog=0.;
      for(int i=0;i<28;i++){
        vec3 p=orig+ray*(float(i)+jitter)*extent/28.;
        fog+=portal(p)*exp(-max(0.,p.y-4.)*.11);
      }
      fog*=extent/28.*(.012+.031*pow(max(dot(ray,lightDir),0.),3.));
      vec3 n=normalize(cross(dFdx(vp.xyz),dFdy(vp.xyz)));
      vec3 color=texture2D(plate,vUv).rgb;
      if(depth<.99995)color*=occlusion(vp.xyz,n);
      color=color*exp(-fog*.42)+vec3(.96,.68,.38)*fog;
      vec2 v=vUv*2.-1.;color*=1.-.095*pow(dot(v,v)*.5,1.25);
      gl_FragColor=vec4(color,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  screen.add(new T.Mesh(new T.PlaneGeometry(2, 2), pass));
  // Multisampling with a resolved depth texture is supported by WebGL2.
  target.samples = Math.min(4, renderer.capabilities.maxSamples);
  return {
    resize(w, h) {
      target.setSize(w, h);
      pass.uniforms.viewport.value.set(w, h);
    },
    draw() {
      renderer.setRenderTarget(target);
      renderer.setClearColor(0x887e6d, 1);
      renderer.clear();
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(screen, flat);
    },
  };
}

export function particles(scene, point) {
  const rng = random(951),
    dustN = 480,
    dust = new Float32Array(dustN * 3),
    seeds = new Float32Array(dustN);
  for (let i = 0; i < dustN; i++) {
    const a = TAU * rng(),
      r = 10 * Math.sqrt(rng());
    dust.set([r * Math.sin(a), rng() * 7, r * Math.cos(a)], i * 3);
    seeds[i] = rng();
  }
  function points(pos, seed, spray) {
    const geo = new T.BufferGeometry()
      .setAttribute('position', new T.BufferAttribute(pos, 3))
      .setAttribute('seed', new T.BufferAttribute(seed, 1));
    const mat = new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { clock: { value: 0 }, pixelScale: { value: 720 } },
      vertexShader: `attribute float seed;uniform float clock,pixelScale;varying float alpha;
      void main(){vec3 p=position;
      ${spray ? 'alpha=0.66+0.29*seed;' : `p.x+=.21*sin(clock*.14+seed*39.);p.y+=.19*sin(clock*.22+seed*16.);p.z+=.11*cos(clock*.32+seed*28.);alpha=.08+.33*pow(.5+.5*cos(clock*.40+seed*59.),3.);`}
      vec4 v=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*v;
      gl_PointSize=clamp((.013+.014*seed)*pixelScale/max(1.,-v.z),1.1,${spray ? '4.0' : '3.3'});}`,
      fragmentShader: `varying float alpha;void main(){float r=length(gl_PointCoord-.5);
      gl_FragColor=vec4(vec3(1.7,1.20,.63),alpha*(1.-smoothstep(.13,.5,r)));}`,
    });
    const pts = new T.Points(geo, mat);
    pts.frustumCulled = false;
    scene.add(pts);
    return pts;
  }
  const motes = points(dust, seeds, false);
  const n = 92,
    salt = new Float32Array(n * 3),
    seed = Float32Array.from({ length: n }, () => rng()),
    spray = points(salt, seed, true);
  return (t, px, sweeping) => {
    motes.material.uniforms.clock.value = t;
    motes.material.uniforms.pixelScale.value = spray.material.uniforms.pixelScale.value = px;
    spray.visible = !sweeping;
    for (let i = 0; i < n; i++) {
      const s = seed[i],
        life = 0.115 + 0.12 * s,
        start = Math.floor(t / life + s) * life - s * life,
        age = t - start;
      const pos = point(Math.max(0, start)),
        old = point(Math.max(0, start - 0.008));
      const vx = (pos[0] - old[0]) * 26 + Math.cos(s * 264) * (0.3 + 1.55 * s),
        vz = (pos[1] - old[1]) * 26 + Math.sin(s * 264) * (0.3 + 1.55 * s);
      salt.set(
        [
          pos[0] + vx * age,
          SAND_Y + 0.008 + Math.max(0, 4.2 * age * (life - age)),
          pos[1] + vz * age,
        ],
        i * 3,
      );
    }
    spray.geometry.attributes.position.needsUpdate = true;
  };
}
