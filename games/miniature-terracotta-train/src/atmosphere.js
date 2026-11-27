import { T, V, mesh, random, canvasTex, clamp, smooth, mix } from './craft.js';
import { track, Y } from './route.js';
const rnd = random(9971);
function vapourTexture() {
  return canvasTex(192, 192, (c, w, h) => {
    const noise = new Float32Array(64 * 64);
    for (let i = 0; i < noise.length; i++) noise[i] = rnd();
    function field(x, y) {
      const ix = Math.floor(x),
        iy = Math.floor(y),
        a = x - ix,
        b = y - iy,
        fx = a * a * (3 - 2 * a),
        fy = b * b * (3 - 2 * b);
      const n = (i, j) => noise[(i & 63) + (j & 63) * 64];
      return mix(mix(n(ix, iy), n(ix + 1, iy), fx), mix(n(ix, iy + 1), n(ix + 1, iy + 1), fx), fy);
    }
    const im = c.createImageData(w, h);
    for (let j = 0; j < h; j++)
      for (let i = 0; i < w; i++) {
        const x = (i / w - 0.5) * 2,
          y = (j / h - 0.5) * 2,
          ang = Math.atan2(y, x);
        const eddy =
          field(7 + x * 3, 6 + y * 3) * 0.5 + field(x * 8, y * 8) * 0.33 + field(x * 20, y * 20) * 0.17;
        const extent = 0.68 + 0.13 * Math.sin(ang * 4 + 0.8) + 0.09 * Math.cos(ang * 7) + eddy * 0.14;
        const r = Math.hypot(x, y),
          density = clamp((extent - r) * 3.8 + (eddy - 0.53) * 1.85, 0, 1),
          shade = clamp(0.5 + 0.34 * eddy - 0.2 * y - 0.09 * x + 0.071 * Math.sin(2 * ang), 0, 1);
        im.data.set(
          [155 + shade * 90, 170 + shade * 75, 183 + shade * 62, 255 * density * (0.58 + 0.42 * eddy)],
          4 * (j * w + i),
        );
      }
    c.putImageData(im, 0, 0);
  });
}
// Billboard each wisp from a fixed chimney mouth. Absolute particle ages also work on a reverse seek.
function hearthSmoke(scene, mouths, map) {
  const geo = new T.InstancedBufferGeometry().copy(new T.PlaneGeometry(1, 1));
  const vents = [],
    phases = [];
  for (const [j, mouth] of mouths.entries()) {
    for (let i = 0; i < 15; i++) {
      vents.push(mouth.x, mouth.y, mouth.z);
      phases.push(i / 15, j * 0.783 + i * 1.37, j === 0 ? 1 : 0.76 + (j % 3) * 0.09);
    }
  }
  geo.setAttribute('vent', new T.InstancedBufferAttribute(new Float32Array(vents), 3));
  geo.setAttribute('phase', new T.InstancedBufferAttribute(new Float32Array(phases), 3));
  geo.instanceCount = vents.length / 3;
  const material = new T.ShaderMaterial({
    uniforms: { time: { value: 0 }, cloud: { value: map } },
    transparent: true,
    depthWrite: false,
    vertexShader: `attribute vec3 vent,phase;uniform float time;varying vec2 uvCloud;varying float age;
      void main(){age=fract(phase.x+time*(.238+.018*phase.z));
        float curl=age*8.-time*1.46+vent.x*.66;
        vec3 drift=vec3(age*age*1.7+sin(curl)*age*.34,age*2.35,
                       -.55*age*age+cos(curl)*age*.26)*phase.z;
        vec4 mv=modelViewMatrix*vec4(vent+drift,1.);
        float turn=phase.y+age*1.6;
        vec2 card=mat2(cos(turn),sin(turn),-sin(turn),cos(turn))*position.xy;
        mv.xy+=card*vec2(1.1,1.)*(.13+age*1.05)*phase.z;
        uvCloud=uv;gl_Position=projectionMatrix*mv;}`,
    fragmentShader: `uniform sampler2D cloud;varying vec2 uvCloud;varying float age;
      void main(){vec4 w=texture2D(cloud,uvCloud);
        vec3 tint=mix(vec3(.88,.61,.39),vec3(.56,.60,.68),smoothstep(.05,.85,age));
        gl_FragColor=vec4(tint*(.61+.47*w.r),w.a*.39*smoothstep(0.,.055,age)*pow(1.-age,1.3));}`,
  });
  const plumes = new T.Mesh(geo, material);
  plumes.frustumCulled = false;
  scene.add(plumes);
  return (t) => {
    material.uniforms.time.value = t;
  };
}

// Short shutter streaks follow ballistic paths from the ashpan and the brake blocks.
function cinders(engine) {
  const geo = new T.InstancedBufferGeometry().copy(new T.PlaneGeometry(1, 1));
  const seeds = [];
  for (let i = 0; i < 132; i++) seeds.push(rnd(), rnd(), rnd(), i < 42 ? 0 : 1);
  geo.setAttribute('seed', new T.InstancedBufferAttribute(new Float32Array(seeds), 4));
  geo.instanceCount = seeds.length / 4;
  const material = new T.ShaderMaterial({
    uniforms: { time: { value: 0 }, speed: { value: 0 }, brake: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader: `attribute vec4 seed;uniform float time,speed,brake;
      varying vec2 sparkUV;varying float heat,alpha;
      void main(){
        bool shoe=seed.w>.5;
        float side=seed.x>.5?1.:-1.;
        float life=mix(.19,.48,seed.z);
        float cycle=time/(life*(shoe?1.9:3.2))+seed.y*13.;
        float age=fract(cycle)*(shoe?1.9:3.2);
        float salt=fract(sin(floor(cycle)*17.+seed.x*71.)*4135.67);
        vec3 origin=shoe?vec3(floor(seed.y*3.)*.735-.95,.105,side*.445)
                        :vec3(-.6-.27*seed.x,.43+.045*seed.z,side*.393);
        vec3 velocity=vec3(-(.34+.9*salt+speed*.48),shoe?.42+.82*seed.z:.05+.46*seed.z,
                           side*(.12+.47*seed.y));
        float seconds=age*life;
        vec3 p=origin+velocity*seconds;
        p.y-=(shoe?3.2:2.65)*seconds*seconds;
        velocity.y-=2.*(shoe?3.2:2.65)*seconds;
        vec4 mv=modelViewMatrix*vec4(p,1.);
        vec2 tangent=(mat3(modelViewMatrix)*velocity).xy;
        float len=max(.001,length(tangent));tangent/=len;
        float width=(shoe?.011:.014)*(.66+.61*seed.z);
        mv.xy+=tangent*position.x*(width+len*.037)+vec2(-tangent.y,tangent.x)*position.y*width;
        heat=1.-clamp(age,0.,1.);
        float burst=smoothstep(-.36,.60,sin(time*8.+floor(seed.y*3.)*2.+side));
        alpha=step(age,1.)*smoothstep(-.018,.025,p.y)*min(1.,heat*3.)
             *(shoe?brake*(.25+burst*.75)*smoothstep(.04,.5,speed):.77);
        sparkUV=uv;gl_Position=projectionMatrix*mv;
      }`,
    fragmentShader: `varying vec2 sparkUV;varying float heat,alpha;
      void main(){float dist=length(2.*sparkUV-1.);
        vec3 light=mix(vec3(2.8,.28,.023),vec3(6.,2.9,.53),heat);
        gl_FragColor=vec4(light,alpha*(1.-smoothstep(.3,1.,dist)));}`,
  });
  const flecks = new T.Mesh(geo, material);
  flecks.frustumCulled = false;
  engine.add(flecks);
  return (time, speed, brake) => {
    material.uniforms.time.value = time;
    material.uniforms.speed.value = speed;
    material.uniforms.brake.value = brake;
  };
}
export function atmos(scene, train, chimneys) {
  const cloud = vapourTexture(),
    hearths = hearthSmoke(scene, chimneys, cloud),
    sparks = cinders(train.engine),
    puffs = [];
  for (let i = 0; i < 56; i++) {
    const m = new T.SpriteMaterial({
      map: cloud,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      color: 0xd9dfe1,
    });
    const s = new T.Sprite(m);
    scene.add(s);
    puffs.push(s);
  }
  const count = 7300,
    seeds = new Float32Array(count * 3),
    sizes = new Float32Array(count),
    locality = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    seeds.set([rnd(), rnd(), rnd()], i * 3);
    sizes[i] = rnd();
    locality[i] = i < 4500 ? 0 : i < 6150 ? 1 : 2;
  }
  const geom = new T.BufferGeometry();
  geom.setAttribute('position', new T.BufferAttribute(seeds, 3));
  geom.setAttribute('flake', new T.BufferAttribute(sizes, 1));
  geom.setAttribute('locality', new T.BufferAttribute(locality, 1));
  const snowMat = new T.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      weather: { value: 0.43 },
      pixels: { value: 720 },
      eye: { value: V() },
      focusDepth: { value: 10 },
      aperture: { value: 0.54 },
      lamp: { value: V() },
      forward: { value: V(1, 0, 0) },
    },
    transparent: true,
    depthWrite: false,
    vertexShader: `
      attribute float flake,locality;
      uniform float time,weather,pixels,focusDepth,aperture;
      uniform vec3 lamp,forward,eye;
      varying float alpha,lit,soft;
      void main(){
        vec3 drift=vec3(time*(.19+.24*weather)+sin(time*1.3+position.y*37.)*.14,
                        -time*(.48+.73*flake+.23*weather),.16*sin(time*.9+position.x*27.));
        vec3 span=vec3(39.,15.,24.), center=vec3(0.,7.,-1.);
        if(locality>.5){span=vec3(6.4,2.45,5.8);center=lamp+forward*2.;}
        if(locality>1.5){span=vec3(13.,8.,12.);center=eye;}
        vec3 wrap=fract(position+(drift-center)/span+.5)-.5;
        vec3 p=center+span*wrap;
        float edge=1.-smoothstep(.43,.5,max(abs(wrap.x),max(abs(wrap.y),abs(wrap.z))));
        vec3 delta=p-lamp;
        float along=dot(delta,forward);
        lit=smoothstep(-.04,.12,along)*(1.-smoothstep(.07,.18+max(along,0.)*.23,length(delta-forward*along)))
              *(1.-smoothstep(2.,5.4,along));
        vec4 mv=modelViewMatrix*vec4(p,1.);
        float depth=max(.14,-mv.z);
        float grain=(.006+.016*flake)*pixels*projectionMatrix[1][1]*(1.+1.8*lit)/depth;
        soft=clamp((focusDepth/depth-1.)*.52,0.,1.)*aperture;
        float blur=soft*pixels*.033;
        gl_PointSize=clamp(sqrt(grain*grain+blur*blur),1.,pixels*.042);
        gl_Position=projectionMatrix*mv;
        alpha=(.21+.47*flake)*smoothstep(.27,1.1,depth)*edge*step(flake,.45+.55*weather);
        alpha*=clamp((grain+1.3)/(gl_PointSize+.1),.10,1.)*(locality>1.5?.58:1.);
        if(locality>.5 && locality<1.5) alpha*=.08+lit*1.9;
        if(locality>1.5) alpha*=1.-smoothstep(10.4,13.8,p.z);
      }`,
    fragmentShader: `varying float alpha,lit,soft;
      void main(){float d=length(2.*gl_PointCoord-1.);
        float shape=(1.-smoothstep(.4+.27*soft,1.,d))*(1.-.22*soft*exp(-4.*d*d));
        gl_FragColor=vec4(mix(vec3(.85,.94,1.1),vec3(5.5,2.85,.75),lit),shape*alpha);}`,
  });
  const flakes = new T.Points(geom, snowMat);
  flakes.frustumCulled = false;
  scene.add(flakes);
  const beamMaterial = new T.ShaderMaterial({
    transparent: true,
    blending: T.AdditiveBlending,
    depthWrite: false,
    side: T.BackSide,
    vertexShader: `varying vec3 exitPoint,eye;
      void main(){
        eye=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;
        exitPoint=position;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }`,
    fragmentShader: `varying vec3 exitPoint,eye;
      void main(){
        vec3 ray=normalize(eye-exitPoint);
        float stepLength=min(1.56/max(.001,length(ray.xz)),3.9/max(.001,abs(ray.y)))/14.;
        float light=0.;
        for(int i=0;i<14;i++){
          vec3 p=exitPoint+ray*((float(i)+.5)*stepLength);
          float along=1.95-p.y;
          float radius=.041+.194*clamp(along,0.,3.9);
          float envelope=(1.-smoothstep(.27,1.,length(p.xz)/radius))
                        *smoothstep(0.,.08,along)*(1.-smoothstep(2.2,3.9,along));
          light+=envelope*stepLength/(.63+along*along*.22);
        }
        gl_FragColor=vec4(1.9,1.04,.32,light*.31);
      }`,
  });
  const cone = mesh(
    train.engine,
    new T.ConeGeometry(0.78, 3.9, 38, 1, false),
    beamMaterial,
    3.6,
    1.46,
    0,
  );
  cone.rotation.z = Math.PI / 2;
  cone.castShadow = cone.receiveShadow = false;
  const lux = new T.SpotLight(0xffbb64, 15, 7, 0.24, 0.8, 1.5);
  train.engine.add(lux, lux.target);
  lux.position.set(1.68, 1.47, 0);
  lux.target.position.set(6, 1.14, 0);
  return (t, d, speed, weather, pixels, distanceAtAge, brake, camera, subject, focus) => {
    hearths(t);
    sparks(t, speed, brake);
    snowMat.uniforms.eye.value.copy(camera.position);
    snowMat.uniforms.focusDepth.value = camera.position.distanceTo(subject);
    snowMat.uniforms.aperture.value = focus;
    snowMat.uniforms.time.value = t;
    snowMat.uniforms.weather.value = weather;
    snowMat.uniforms.pixels.value = pixels;
    const pose = track(d);
    snowMat.uniforms.forward.value.set(Math.cos(pose.angle), 0, -Math.sin(pose.angle));
    snowMat.uniforms.lamp.value
      .copy(train.engine.position)
      .addScaledVector(snowMat.uniforms.forward.value, 1.7);
    snowMat.uniforms.lamp.value.y += 1.46;
    const stackCount = 34;
    for (let i = 0; i < puffs.length; i++) {
      const stack = i < stackCount,
        k = stack ? i : i - stackCount,
        side = k % 2 ? 1 : -1,
        life = stack ? 3.18 : 1.03,
        n = stack ? stackCount : 22;
      const age = (((t + (life * k) / n) % life) + life) % life,
        u = age / life,
        bd = distanceAtAge ? distanceAtAge(age) : d - speed * age,
        b = track(bd),
        f = stack ? 1.12 : 1.25,
        z = stack ? 0 : 0.436 * side;
      const a = Math.floor((t + (life * k) / n) / life) * 1.82 + k * 19.6,
        drift = stack ? age * 0.28 + age * age * 0.15 : age * 0.18,
        curl = Math.sin(age * 4.3 - t * 0.92) * (0.05 + u * 0.4) + Math.sin(a) * u * 0.1;
      const px = b.x + Math.cos(b.angle) * (f - drift) + Math.sin(b.angle) * (z + curl),
        pz = b.z - Math.sin(b.angle) * (f - drift) + Math.cos(b.angle) * (z + curl);
      const s = puffs[i];
      s.position.set(
        px + u * u * 0.28,
        Y +
          (stack ? 1.92 : 0.34) +
          (stack
            ? age * 0.85 + Math.sin(age * 4.8 - t) * u * 0.29 + Math.sin(a) * u * 0.13
            : age * 0.26),
        pz + (stack ? -u * u * 0.36 : side * age * 0.62),
      );
      const scale = stack ? 0.2 + Math.pow(u, 0.81) * 1.6 : 0.09 + u * 0.55;
      s.scale.set(scale * (1 + u * 0.27), scale, 1);
      s.material.rotation = a + u * 0.93;
      s.material.opacity =
        (stack ? 0.63 : 0.41) *
        Math.pow(1 - u, 0.97) *
        smooth(0, 0.055, u) *
        (stack
          ? 0.57 + 0.43 * Math.cos((bd / 0.321) * 4 + a * 0.07) ** 2
          : 0.4 + 0.6 * Math.sin(bd * 6 + a * 0.18) ** 2);
      s.material.color.setRGB(0.67 + u * 0.3, 0.71 + u * 0.24, 0.74 + u * 0.2);
    }
  };
}
