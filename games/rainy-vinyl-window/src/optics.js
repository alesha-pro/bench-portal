import { T, random, canvasMap } from "./craft.js";
export function atmosphere(scene) {
  const steam = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide,
    uniforms: { time: { value: 0 }, tint: { value: new T.Color(0xffe2b7) } },
    vertexShader: `varying vec3 pos;void main(){vec4 p=modelMatrix*vec4(position,1.);pos=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
    fragmentShader: `uniform float time;uniform vec3 tint;varying vec3 pos;
    // The horizontal curl of a scalar potential advects the rising sheets of vapor.
    vec2 curlField(vec2 p,float h) {
      vec2 a=p*14.+vec2(h*7.8-time*1.6,h*5.4-time*.94);
      vec2 b=p*24.+vec2(-h*11.4+time*1.59,h*4.3-time*.8);
      return vec2(-sin(a.x)*sin(a.y),-cos(a.x)*cos(a.y))
        +.36*vec2(cos(b.y)*cos(b.x),sin(b.x)*sin(b.y));
    }
    void main(){vec3 ray=normalize(pos-cameraPosition);
      vec3 org=pos-vec3(1.55,.344,.81);
      vec3 farCorner=mix(vec3(-.29,0.,-.32),vec3(.39,1.04,.32),step(vec3(0.),ray));
      vec3 distances=(farCorner-org)/(sign(ray)*max(abs(ray),vec3(.0001))+vec3(.000001));
      float stepSize=clamp(min(distances.x,min(distances.y,distances.z)),0.,1.4)/28.;
      float opacity=0.;
      for(int i=0;i<28;i++){
        vec3 p=org+ray*(float(i)+.5)*stepSize;
        float h=p.y, f=h*10.-time*1.62;
        float spread=smoothstep(.035,.74,h);
        vec2 mid=vec2(h*.094+.087*sin(f*.80)*spread,.057*cos(f*.72)*spread);
        vec2 v=p.xz-mid;
        v+=curlField(v,h)*(.004+.031*spread);
        vec2 turn=vec2(sin(f*1.14+.72*sin(f)),cos(f*.93));
        vec2 core=v-turn*(.022+.065*spread);
        float w=.012+.038*spread;
        float filament=exp(-dot(core,core)/(w*w));
        vec2 separate=v+turn*(.033+.089*spread);
        float second=exp(-dot(separate,separate)/(w*w*.49));
        float roll=length(v*vec2(.88,1.13))/(.049+.098*spread);
        float veil=exp(-pow((roll-.78)*4.4,2.))*(.35+.23*cos(f*1.4+v.x*23.));
        float density=(filament+.61*second+veil)*smoothstep(.0,.055,h)
          *pow(max(0.,1.-h/.97),1.15);
        opacity+=density*stepSize;
      }
      if(opacity<.0002)discard;
      gl_FragColor=vec4(tint*1.16,1.-exp(-opacity*3.35));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  // Front faces mark ray entry into the vapor volume.
  steam.side = T.FrontSide;
  const vapor = new T.Mesh(new T.BoxGeometry(0.68, 1.04, 0.64), steam);
  vapor.position.set(1.6, 0.864, 0.81);
  vapor.renderOrder = 5;
  scene.add(vapor);
  const haze = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: T.FrontSide,
    vertexShader: steam.vertexShader,
    fragmentShader: `varying vec3 pos;
    void main(){vec3 ray=normalize(pos-cameraPosition);float glow=0.;
      for(int i=0;i<22;i++){vec3 p=pos+ray*(float(i)+.5)*.14;float h=1.68-p.y;
        if(h<0.||h>1.67)continue;vec2 center=vec2(1.30-.25*h,-.33+.32*h);
        float rad=.37+h*.39;float dist=length((p.xz-center)/rad);
        glow+=(1.-smoothstep(.28,1.15,dist))*exp(-h*1.7)*smoothstep(0.,.12,h);}
      gl_FragColor=vec4(.91,.57,.27,clamp(glow*.008,0.,.10));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  const beam = new T.Mesh(new T.BoxGeometry(3, 1.7, 3.2), haze);
  beam.position.set(1.13, 0.85, -0.08);
  beam.renderOrder = 4;
  scene.add(beam);
  const rng = random(741),
    n = 200,
    src = new Float32Array(n * 4),
    positions = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    src[i * 4] = rng() * 3.25 - 0.65;
    src[i * 4 + 1] = 0.1 + rng() * 1.9;
    src[i * 4 + 2] = rng() * 2.2 - 1;
    src[i * 4 + 3] = rng() * 20;
  }
  const geom = new T.BufferGeometry();
  geom.setAttribute("position", new T.BufferAttribute(positions, 3));
  const dust = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { height: { value: 720 } },
    vertexShader: `uniform float height;varying float brightness;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;
      float dist=length((position.xz-vec2(1.25,.13))*vec2(.8,1.));brightness=exp(-dist*dist*2.2)*(.3+.7*fract(position.x*21.45));gl_PointSize=clamp(height/720.*5./-mv.z,.65,2.3);}`,
    fragmentShader: `varying float brightness;void main(){float a=1.-smoothstep(.03,.50,length(gl_PointCoord-.5));gl_FragColor=vec4(.96,.69,.39,a*brightness*.53);}`,
  });
  const motes = new T.Points(geom, dust);
  motes.frustumCulled = false;
  scene.add(motes);
  return (time, height) => {
    steam.uniforms.time.value = time;
    dust.uniforms.height.value = height;
    for (let i = 0; i < n; i++) {
      const k = i * 4,
        j = i * 3,
        f = src[k + 3];
      positions[j] =
        src[k] + 0.074 * Math.sin(time * 0.45 + f + src[k + 1] * 2.1);
      positions[j + 1] = src[k + 1] + 0.085 * Math.sin(time * 0.41 + f * 2);
      positions[j + 2] =
        src[k + 2] + 0.061 * Math.cos(time * 0.45 + f + src[k + 1] * 2.1);
    }
    geom.attributes.position.needsUpdate = true;
  };
}
const vertex = `varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}`;
export function lens(renderer, film) {
  const titles = canvasMap(
    1100,
    340,
    (c) => {
      c.fillStyle = "#e5bc87";
      c.fillRect(4, 32, 46, 2);
      c.font = "16px monospace";
      c.fillText("S T I L L R O O M   R E C O R D S", 68, 40);
      c.fillStyle = "#f3ebd9";
      c.font = '92px Georgia, "Liberation Serif", serif';
      c.fillText("Midnight Vinyl", 0, 148);
      c.fillStyle = "#e4d4b6";
      c.font = 'italic 90px Georgia, "Liberation Serif", serif';
      c.fillText("& Rainy Window", 0, 245);
    },
    false,
  );
  const hdr = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    samples: 4,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
  });
  hdr.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const blurA = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    depthBuffer: false,
  });
  const blurB = blurA.clone();
  const screen = new T.Scene(),
    cam = new T.Camera(),
    quad = new T.Mesh(new T.PlaneGeometry(2, 2));
  quad.frustumCulled = false;
  screen.add(quad);
  const blur = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    vertexShader: vertex,
    uniforms: {
      img: { value: null },
      stepUV: { value: new T.Vector2() },
      threshold: { value: 1 },
    },
    fragmentShader: `varying vec2 v;uniform sampler2D img;uniform vec2 stepUV;uniform float threshold;
    vec3 tap(float n){vec3 c=texture2D(img,v+stepUV*n).rgb;float peak=max(c.r,max(c.g,c.b)); return c*mix(1.,smoothstep(.48,1.9,peak)/(1.+peak*.32),threshold);}
    void main(){gl_FragColor=vec4(.227*tap(0.)+.1946*(tap(1.4)+tap(-1.4))+.1216*(tap(3.3)+tap(-3.3))+.07*(tap(5.2)+tap(-5.2)),1.);}`,
  });
  const composite = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    vertexShader: vertex,
    uniforms: {
      titles: { value: titles },
      film: { value: film ? 1 : 0 },
      img: { value: hdr.texture },
      depth: { value: hdr.depthTexture },
      bloom: { value: blurA.texture },
      pixels: { value: new T.Vector2() },
      focus: { value: 4 },
      aperture: { value: 0.7 },
      time: { value: 0 },
    },
    fragmentShader: `varying vec2 v;uniform sampler2D img,depth,bloom,titles;uniform float film;uniform vec2 pixels;uniform float time,focus,aperture;
    void main(){float z=texture2D(depth,v).r;float d=.06*45./(45.-z*(45.-.06));
      float coc=min(5.,abs(1.-focus/max(d,.1))*aperture)*pixels.y*1080.;vec2 off=coc*vec2(pixels.x/pixels.y,1.)/1080.;
      vec3 col=texture2D(img,v).rgb*2.;for(int i=0;i<10;i++){float a=float(i)*2.39996;float r=sqrt((float(i)+.5)/10.);col+=texture2D(img,v+off*r*vec2(cos(a),sin(a))).rgb;}col/=12.;
      col+=texture2D(bloom,v).rgb*.145;
      vec2 edge=(v-.5)*vec2(1.02,.89);col*=1.-.58*dot(edge,edge);
      gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      float grain=fract(52.9829189*fract(dot(gl_FragCoord.xy+floor(time*24.)*.734,vec2(.06711056,.00583715))))-.5;
      gl_FragColor.rgb+=grain*.012;
      if(film>.5){vec2 titleUV=(vec2(v.x,1.-v.y)-vec2(.059,.075))/vec2(.54,.297);
        if(min(titleUV.x,titleUV.y)>=0.&&max(titleUV.x,titleUV.y)<=1.){
          vec4 ink=texture2D(titles,vec2(titleUV.x,1.-titleUV.y));
          gl_FragColor.rgb=mix(gl_FragColor.rgb,ink.rgb,ink.a*smoothstep(.30,1.12,time)*(1.-smoothstep(3.00,4.35,time)));}
        gl_FragColor.rgb*=smoothstep(0.,.58,time)*(1.-smoothstep(28.94,29.966,time));}
    }`,
  });
  return {
    resize(w, h) {
      hdr.setSize(w, h);
      blurA.setSize(Math.max(1, w >> 2), Math.max(1, h >> 2));
      blurB.setSize(Math.max(1, w >> 2), Math.max(1, h >> 2));
      composite.uniforms.pixels.value.set(1 / w, 1 / h);
    },
    draw(scene, camera, time, focus, aperture) {
      renderer.setRenderTarget(hdr);
      renderer.render(scene, camera);
      quad.material = blur;
      blur.uniforms.img.value = hdr.texture;
      blur.uniforms.stepUV.value.set(3 / hdr.width, 0);
      blur.uniforms.threshold.value = 1;
      renderer.setRenderTarget(blurB);
      renderer.render(screen, cam);
      blur.uniforms.img.value = blurB.texture;
      blur.uniforms.stepUV.value.set(0, 3 / hdr.height);
      blur.uniforms.threshold.value = 0;
      renderer.setRenderTarget(blurA);
      renderer.render(screen, cam);
      quad.material = composite;
      composite.uniforms.focus.value = focus;
      composite.uniforms.aperture.value = aperture;
      composite.uniforms.time.value = time;
      renderer.setRenderTarget(null);
      renderer.render(screen, cam);
    },
  };
}
