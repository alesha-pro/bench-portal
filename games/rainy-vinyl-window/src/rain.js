import { T, random, canvasMap } from "./craft.js";
const W = 1536,
  H = 740,
  FPS = 30,
  STEP = 1 / FPS;

// Capillary pinning holds small beads. Drops depin as their mass grows, accelerate
// under gravity, and absorb nearby beads. A mass-weighted velocity conserves momentum.
function rainfall() {
  const rnd = random(22315),
    drops = [],
    frames = [];
  function seed(scattered = false) {
    const r = 0.93 + rnd() ** 2.6 * 3.55;
    drops.push({
      x: rnd() * W,
      y: scattered ? rnd() * H : rnd() < 0.19 ? H + 2 : rnd() * H,
      mass: r * r,
      v: 0,
      phase: rnd() * 40,
      pin: 8.2 + rnd() * 12,
      age: 0,
      tail: 0,
      weight: rnd(),
      dead: false,
    });
  }
  for (let i = 0; i < 1780; i++) seed(true);
  for (let step = -300; step <= FPS * 30; step++) {
    const time = step * STEP;
    for (let j = 0; j < 3 + (step % 4 === 0); j++) seed();
    const grid = new Map();
    for (const d of drops) {
      d.age += STEP;
      d.mass += STEP * 0.045;
      const r = Math.sqrt(d.mass),
        mobile = d.mass > d.pin;
      const limit = mobile ? Math.min(155, (d.mass - d.pin) * 3.5 + 7) : 0;
      d.v += (limit - d.v) * STEP * (mobile ? 2.4 : 4.3);
      d.y -= d.v * STEP;
      const gust =
        Math.sin(time * 0.74 + d.y * 0.005) + 0.42 * Math.sin(time * 1.51);
      d.x += gust * Math.min(d.v, 120) * 0.105 * STEP;
      d.x += Math.sin(d.y * 0.073 + d.phase) * Math.min(d.v, 40) * 0.135 * STEP;
      d.tail = Math.max(
        0,
        Math.min(104, d.tail + d.v * STEP * 0.71 - 0.42 * STEP),
      );
      if (d.y < -5 || d.age > 46) {
        d.dead = true;
        continue;
      }
      const gx = Math.floor(d.x / 13),
        gy = Math.floor(d.y / 13);
      for (let dx = -1; dx <= 1; dx++)
        for (let dy = -1; dy <= 1; dy++) {
          const nearby = grid.get(gx + dx + 200 * (gy + dy));
          if (!nearby) continue;
          for (const b of nearby) {
            if (b.dead) continue;
            const limit = 0.88 * (r + Math.sqrt(b.mass));
            if ((d.x - b.x) ** 2 + (d.y - b.y) ** 2 > limit * limit) continue;
            const sum = d.mass + b.mass;
            d.v = (d.v * d.mass + b.v * b.mass) / sum;
            d.x = (d.x * d.mass + b.x * b.mass) / sum;
            d.y = (d.y * d.mass + b.y * b.mass) / sum;
            d.mass = Math.min(85, sum);
            d.tail = Math.max(d.tail, b.tail);
            b.dead = true;
          }
        }
      const idx = gx + 200 * gy;
      if (!grid.has(idx)) grid.set(idx, []);
      grid.get(idx).push(d);
    }
    let n = 0;
    for (const d of drops) if (!d.dead) drops[n++] = d;
    drops.length = n;
    if (step >= 0) {
      const frame = new Uint16Array(n * 5);
      let i = 0;
      for (const d of drops) {
        frame[i++] = Math.max(0, d.x * 16);
        frame[i++] = Math.max(0, d.y * 16);
        frame[i++] = Math.sqrt(d.mass) * 256;
        frame[i++] = d.tail * 128;
        frame[i++] = d.weight * 65535;
      }
      frames.push(frame);
    }
  }
  return frames;
}
function dropPass(renderer) {
  const frames = rainfall(),
    count = Math.max(...frames.map((f) => f.length / 5));
  const base = new T.PlaneGeometry(1, 1);
  const geo = new T.InstancedBufferGeometry();
  geo.index = base.index;
  geo.setAttribute("position", base.attributes.position);
  geo.setAttribute("uv", base.attributes.uv);
  const state = new T.InstancedBufferAttribute(
    new Float32Array(count * 4),
    4,
  ).setUsage(T.DynamicDrawUsage);
  geo.setAttribute("drop", state);
  const material = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    uniforms: { time: { value: 0 } },
    vertexShader: `uniform float time; attribute vec4 drop;varying vec2 p;varying float tail;varying float rad;varying float phase;
    void main(){rad=drop.z;tail=drop.w;phase=drop.x*.081;
    p=vec2((uv.x-.5)*3.7,mix(-1.13,1.3+tail/rad,uv.y));
    vec2 xy=drop.xy+p*rad;
    float wind=sin(time*.74+drop.y*.005)+.42*sin(time*1.51);
    xy.x-=max(0.,p.y*rad)*wind*.105;gl_Position=vec4(xy/vec2(1536.,740.)*2.-1.,0,1.);}`,
    fragmentShader: `varying vec2 p;varying float tail;varying float rad;varying float phase;
    void main(){vec2 q=p;q.x-=.105*sin(p.y*rad*.073+phase)*min(max(p.y,0.),2.);
    q.y/=1.+min(tail*.008,.44);float d=length(q*vec2(1.+.12*max(q.y,0.),1.));
    float drop=1.-smoothstep(.84,1.,d);
    float thread=(1.-smoothstep(.075,.25,abs(q.x)))*smoothstep(.3,1.,p.y)*(1.-smoothstep(.65,1.,max(0.,p.y-1.)*rad/max(1.,tail)));
    // A smaller tributary joins the winding main trail where a heavy drop drained.
    float forkX=q.x-.79*sin(clamp((p.y-1.)*rad/max(tail,1.),0.,1.)*2.);
    float fork=(1.-smoothstep(.06,.17,abs(forkX)))*smoothstep(19.,44.,tail)
      *smoothstep(1.,2.,p.y)*(1.-smoothstep(.46,.93,p.y*rad/max(1.,tail)));
    thread=max(thread,fork*.57);
    if(drop+thread<.008)discard;
    vec2 n=q*min(1.25,1./sqrt(max(.12,1.-min(dot(q,q),.99))))*.68;
    gl_FragColor=vec4(.5+.48*clamp(n*drop+vec2(q.x*thread,0.),-1.,1.),max(drop,thread*.53),max(drop,thread*.72));}`,
  });
  const s = new T.Scene(),
    quad = new T.Mesh(geo, material);
  quad.frustumCulled = false;
  s.add(quad);
  const cam = new T.Camera();
  const rt = new T.WebGLRenderTarget(W, H, {
    depthBuffer: false,
    generateMipmaps: false,
  });
  const prev = new T.Color();
  function update(t, intensity) {
    const frame = frames[Math.min(900, Math.round(t * FPS))];
    let n = 0;
    for (let i = 0; i < frame.length; i += 5) {
      if (frame[i + 4] / 65535 > intensity) continue;
      state.setXYZW(
        n++,
        frame[i] / 16,
        frame[i + 1] / 16,
        (frame[i + 2] / 256) * (0.88 + 0.27 * intensity),
        frame[i + 3] / 128,
      );
    }
    material.uniforms.time.value = t;
    geo.instanceCount = n;
    state.needsUpdate = true;
    renderer.getClearColor(prev);
    let alpha = renderer.getClearAlpha();
    const old = renderer.getRenderTarget();
    renderer.setRenderTarget(rt);
    renderer.setClearColor(new T.Color(0.5, 0.5, 0), 1);
    renderer.clear();
    renderer.render(s, cam);
    renderer.setRenderTarget(old);
    renderer.setClearColor(prev, alpha);
  }
  return { texture: rt.texture, update };
}
// Painted in street perspective at dusk, with the roof visible from upstairs.
function tramPlate() {
  return canvasMap(
    384,
    240,
    (c) => {
      function panel(color, corners) {
        c.fillStyle = color;
        c.beginPath();
        c.moveTo(...corners[0]);
        corners.slice(1).forEach(([x, y]) => c.lineTo(x, y));
        c.closePath();
        c.fill();
      }
      c.lineJoin = "round";
      panel("#242f34", [
        [26, 50],
        [66, 40],
        [334, 103],
        [342, 116],
        [342, 187],
        [298, 207],
        [27, 103],
      ]);
      panel("#435455", [
        [26, 50],
        [68, 39],
        [336, 102],
        [290, 117],
      ]);
      panel("#576360", [
        [68, 48],
        [90, 46],
        [285, 93],
        [261, 98],
      ]);
      panel("#3b4743", [
        [26, 52],
        [291, 119],
        [294, 193],
        [26, 100],
      ]);
      panel("#2d393b", [
        [294, 119],
        [338, 106],
        [340, 181],
        [296, 195],
      ]);
      for (let i = 0; i < 10; i++) {
        const x = 34 + i * 25.4,
          upper = 61 + i * 6.54,
          lower = 80 + i * 8.3;
        panel(i % 3 === 0 ? "#739794" : i % 3 === 1 ? "#bdc6a5" : "#d9c5a0", [
          [x, upper],
          [x + 18, upper + 4.6],
          [x + 18, lower + 5.9],
          [x, lower],
        ]);
        panel("#556a66", [
          [x, upper + 5],
          [x + 18, upper + 9.6],
          [x + 18, upper + 11.2],
          [x, upper + 6.6],
        ]);
        if (i % 3 === 1)
          panel("#58635d", [
            [x + 4, lower],
            [x + 5, lower - 7],
            [x + 9, lower - 8],
            [x + 13, lower + 4],
          ]);
      }
      panel("#8ab1ab", [
        [299, 128],
        [332, 118],
        [332, 144],
        [300, 156],
      ]);
      panel("#deb377", [
        [305, 123],
        [327, 117],
        [327, 121],
        [305, 128],
      ]);
      panel("#c58d62", [
        [26, 90],
        [294, 172],
        [294, 177],
        [26, 92],
      ]);
      panel("#b98150", [
        [294, 172],
        [339, 156],
        [339, 160],
        [294, 177],
      ]);
      panel("#e88658", [
        [299, 175],
        [306, 172],
        [306, 177],
        [299, 180],
      ]);
      panel("#f9ad7b", [
        [327, 165],
        [335, 162],
        [335, 167],
        [327, 170],
      ]);
      panel("#323e3e", [
        [34, 105],
        [289, 190],
        [289, 198],
        [35, 109],
      ]);
      c.strokeStyle = "#586263";
      c.lineWidth = 2.5;
      c.beginPath();
      c.moveTo(134, 64);
      c.lineTo(154, 43);
      c.lineTo(194, 72);
      c.stroke();
    },
    false,
  );
}
export async function rainGlass(scene, renderer) {
  const city = await new T.TextureLoader().loadAsync(
    "assets/midnight-street.jpg",
  );
  city.colorSpace = T.NoColorSpace;
  city.anisotropy = 4;
  const drops = dropPass(renderer);
  const wipe = document.createElement("canvas");
  wipe.width = 1024;
  wipe.height = 492;
  const c = wipe.getContext("2d");
  c.fillStyle = "black";
  c.fillRect(0, 0, wipe.width, wipe.height);
  const wiped = new T.CanvasTexture(wipe);
  wiped.generateMipmaps = false;
  wiped.minFilter = T.LinearFilter;
  const uniforms = {
    city: { value: city },
    tram: { value: tramPlate() },
    drops: { value: drops.texture },
    wiped: { value: wiped },
    fog: { value: 0.48 },
    rain: { value: 0.74 },
    time: { value: 0 },
    showcase: { value: 0 },
  };
  const shader = new T.ShaderMaterial({
    uniforms,
    vertexShader: `varying vec2 vUv;varying vec3 world;void main(){vUv=uv;vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
    fragmentShader: `varying vec2 vUv;varying vec3 world;uniform sampler2D city,drops,wiped,tram;uniform float fog,rain,time,showcase;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
    // All vehicles are projected into street coordinates before the glass bends the ray.
    float lampSpot(vec2 q,vec2 size){
      vec2 p=q/size; return exp(-dot(p,p));
    }
    vec3 headlamps(vec2 uv){
      float u=fract((time+11.4)/12.5);
      float depth=u*u;
      vec2 center=mix(vec2(.881,.585),vec2(.805,.115),depth);
      vec2 q=uv-center;
      float scale=.23+.77*depth;
      vec2 bulbs=vec2(abs(q.x)-.023*scale,q.y);
      float pair=lampSpot(bulbs,vec2(.005,.006)*scale)+.24*lampSpot(bulbs,vec2(.017,.019)*scale);
      float below=-q.y-.025*scale;
      float reflection=exp(-abs(abs(q.x+.010*below)-.023*scale)/(.003+.005*scale))
        *smoothstep(-.009,.013,below)*exp(-max(0.,below)/(.095*scale));
      float breakup=.36+.64*noise2(vec2(uv.x*210.,uv.y*510.));
      return vec3(.92,.83,.63)*(pair+reflection*.72*breakup)
        *smoothstep(0.,.11,u)*(1.-smoothstep(.85,1.,u));
    }
    vec4 lastTram(vec2 uv){
      float u=fract((time+2.7)/15.);
      float depth=1.-u;
      vec2 center=mix(vec2(.887,.562),vec2(.949,.207),depth*depth);
      vec2 size=vec2(.051,.144)*(.34+.66*depth);
      vec2 p=(uv-center)/size+.5;
      float fade=smoothstep(0.,.11,u)*(1.-smoothstep(.80,1.,u));
      vec4 car=textureLod(tram,clamp(p,.002,.998),3.9);
      // Reflections break up on patches of asphalt between the rails.
      float dist=.38-p.y;
      vec2 mirror=vec2(p.x+.019*sin(uv.y*830.),.39+dist*.38);
      vec4 reflected=textureLod(tram,clamp(mirror,.002,.998),3.8);
      float puddle=smoothstep(.0,.16,dist)*exp(-max(0.,dist)*1.9);
      vec3 glints=reflected.rgb*reflected.a*puddle*(.12+.26*noise2(uv*vec2(207.,422.)));
      vec2 stop=vec2(abs(p.x-.822)-.035,p.y-.278);
      float rearLight=lampSpot(stop,vec2(.023,.018))+.22*lampSpot(stop,vec2(.057,.039));
      float redTrail=exp(-abs(abs(p.x-.822)-.035)*40.)*smoothstep(.0,.08,-stop.y)
        *exp(-max(0.,-stop.y)*3.7)*noise2(uv*vec2(199.,499.));
      vec3 neon=vec3(.79,.195,.084)*(rearLight+.54*redTrail);
      return vec4((car.rgb*car.a*.64+glints+neon)*fade,car.a*fade*.72);
    }
    vec3 street(vec2 uv,float lod){
      vec4 vehicle=lastTram(uv);
      return textureLod(city,uv,lod).rgb*(1.-vehicle.a)+vehicle.rgb+headlamps(uv);
    }
    // Intersect the reflected sightline with the lamp and meter depths. A second
    // interface farther out forms a fainter image that separates at grazing angles.
    vec3 interior(vec3 ray,float gap){
      vec2 slope=ray.xy/max(.3,-ray.z);
      vec2 lamp=world.xy+slope*(1.18+gap)-vec2(1.30,1.70);
      lamp.y-=.13*lamp.x;
      float ellipse=length(lamp/vec2(.50,.089));
      float shade=exp(-abs(ellipse-1.)*12.)+.24*(1.-smoothstep(.12,1.,ellipse));
      float bulb=lampSpot(lamp+vec2(0,.007),vec2(.081,.06));
      vec2 stand=world.xy+slope*(1.02+gap)-vec2(1.86,.78);
      float stem=exp(-abs(stand.x)*65.)*(1.-smoothstep(.52,.70,abs(stand.y)));
      vec2 vu=world.xy+slope*(2.86+gap)-vec2(-.637,.22);
      float meters=lampSpot(vec2(abs(vu.x)-.144,vu.y),vec2(.093,.038));
      return vec3(.52,.32,.145)*(shade+.34*stem+.70*meters)+vec3(.85,.55,.31)*bulb;
    }
    void main(){vec3 ray=world-cameraPosition;
      vec2 bearing=ray.xy/max(.4,-ray.z);
      bearing.x=atan(.64*bearing.x)/.64;
      vec2 sky=(world.xy+bearing*1.85)/vec2(10.65,4.63)+vec2(.51,.34);
      sky=clamp(sky,.002,.998);vec3 d=texture2D(drops,vUv).rgb;vec2 norm=(d.rg-.5)*2.;
      vec2 cells=vUv*vec2(535.,255.);vec2 cell=floor(cells);float seed=hash(cell);
      vec2 q=fract(cells)-.5-(vec2(seed,hash(cell+3.7))-.5)*.62;
      float small=(1.-smoothstep(.085,.22,length(q)))*smoothstep(.62,.92,seed)*rain;
      float sashX=min(min(abs(world.x-.84),abs(world.x+2.64)),abs(world.x-4.75));
      float edge=exp(-min(sashX,abs(world.y-.325))*4.6);
      float insideFog=fog*(1.-texture2D(wiped,vUv).r);
      vec2 mistCell=world.xy*155.;
      vec2 mi=floor(mistCell);
      vec2 mq=fract(mistCell)-.5-.55*(vec2(hash(mi+2.),hash(mi+5.))-.5);
      float dotRadius=.064+.14*hash(mi+17.);
      float aa=min(.20,max(fwidth(mq.x),fwidth(mq.y)));
      float cluster=smoothstep(.20,.72,noise2(world.xy*8.3));
      float pinMist=(1.-smoothstep(dotRadius-aa,dotRadius+aa+.001,length(mq)))
        *edge*insideFog*(.36+.64*cluster);
      norm+=q*3.4*small+mq/max(.05,dotRadius)*pinMist;
      vec2 medium=vUv*vec2(186.,89.);vec2 index=floor(medium);float birth=hash(index+19.);
      vec2 local=fract(medium)-.5-(vec2(hash(index+1.21),hash(index+6.4))-.5)*.52;
      float beadRadius=.048+.154*pow(hash(index+4.2),2.);
      vec2 beadN=local/beadRadius*vec2(1.13,.95);
      float bead=(1.-smoothstep(.73,1.,length(beadN)))*step(birth,rain*.39)*(1.-d.b);
      norm+=beadN*bead*.92;
      float wet=clamp(d.b+small+bead+pinMist,0.,1.);
      float cloud=.29+.44*noise2(world.xy*2.3)+.22*noise2(world.xy*8.1);
      float channels=noise2(vec2(world.x*76.+.60*sin(world.y*4.+world.x),world.y*1.2));
      float coldStreak=smoothstep(.58,.92,channels);
      cloud*=1.-.41*coldStreak;
      float mist=clamp(insideFog*(cloud+.30*edge)*(1.-.90*wet),0.,1.);
      // During the window close-up a fingertip follows a shallow arc across the inside.
      float progress=smoothstep(20.45,22.65,time);
      vec2 finger=vec2(world.x,world.y-(1.06+.15*sin((world.x+.45)*3.4)));
      float wipedArc=1.-smoothstep(.041,.104,length(vec2(finger.x-clamp(finger.x,-.60,-.60+1.16*progress),finger.y)));
      mist*=1.-wipedArc*showcase*smoothstep(20.43,20.68,time)*(1.-smoothstep(24.5,24.72,time));
      vec2 bend=norm*vec2(.024,.048);
      vec3 base=street(sky+bend,1.10+mist*4.4);
      vec3 light=street(sky+bend*1.8+vec2(0,.024),2.3);
      float fleck=noise2(vUv*vec2(1040.,548.));
      base=mix(base,vec3(.30,.39,.39)+.12*light,mist*.52);
      base+=vec3(.50,.69,.70)*pow(max(0.,dot(norm,vec2(-.55,.83))),5.)*(.23+.65*light.g);
      float arc=pow(max(0.,dot(normalize(norm+vec2(.00003)),normalize(vec2(-.48,.87)))),9.);
      float rim=wet*smoothstep(.31,1.00,length(norm));
      base+=rim*(vec3(.09,.14,.15)+arc*(vec3(.42,.51,.48)+.46*light));
      base+=vec3(.047,.060,.056)*coldStreak*mist;
      base-=wet*.018;base+=mist*(fleck-.5)*.070;
      base+=pinMist*(vec3(.13,.16,.165)+.12*light);
      float fresnel=.16+.51*pow(1.-abs(normalize(ray).z),2.);
      base+=(interior(ray,0.)+.32*interior(ray,.056))*(fresnel+.08*mist);
      vec3 lin=pow(max(vec3(0),base),vec3(2.18))*1.12;
      gl_FragColor=vec4(lin,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  const pane = new T.Mesh(new T.PlaneGeometry(12.2, 5.87), shader);
  pane.position.set(0, 2.48, -1.575);
  scene.add(pane);
  function stroke(uv, last) {
    const x = uv.x * wipe.width,
      y = (1 - uv.y) * wipe.height;
    let px = last ? last.x * wipe.width : x,
      py = last ? (1 - last.y) * wipe.height : y;
    const steps = Math.max(1, Math.ceil(Math.hypot(x - px, y - py) / 3));
    for (let i = 1; i <= steps; i++) {
      const mx = px + ((x - px) * i) / steps,
        my = py + ((y - py) * i) / steps;
      const g = c.createRadialGradient(mx, my, 2, mx, my, 17);
      g.addColorStop(0, "white");
      g.addColorStop(0.64, "rgba(255,255,255,.88)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g;
      c.fillRect(mx - 17, my - 17, 34, 34);
    }
    wiped.needsUpdate = true;
  }
  function clear(all = true) {
    c.fillStyle = all ? "white" : "black";
    c.fillRect(0, 0, wipe.width, wipe.height);
    wiped.needsUpdate = true;
  }
  return {
    pane,
    city,
    stroke,
    clear,
    update(t, r, f, show) {
      uniforms.showcase.value = show ? 1 : 0;
      uniforms.time.value = t;
      uniforms.fog.value = f;
      uniforms.rain.value = r;
      drops.update(t, r);
    },
  };
}
