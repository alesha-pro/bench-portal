import * as T from "three";
import { V, tau, range, random, place, P } from "./craft.js";
import { buds, routes } from "./tree.js";

const palettes = [
  ["#ff91ba", "#a82b60", "#ffb781", "#49d6db"],
  ["#4aedee", "#198aa6", "#fe73d4", "#d82b9b"],
  ["#ffc070", "#df7539", "#ffe29a", "#ee884a"],
];
function petalGeometry(single = false) {
  const vertices = [],
    indexes = [],
    colors = [];
  function vert(x, y, z, edge, t, fold, a) {
    vertices.push(
      x * Math.cos(a) - y * Math.sin(a),
      y * Math.cos(a) + x * Math.sin(a),
      z,
    );
    colors.push(edge, t, fold);
  }
  const outline = [
    [0, 0.12, 0.055],
    [-0.17, 0.26, 0.035],
    [-0.32, 0.53, 0.09],
    [-0.34, 0.77, 0.18],
    [-0.23, 0.94, 0.24],
    [-0.07, 1, 0.3],
    [0, 0.91, 0.262],
    [0.13, 0.984, 0.29],
    [0.27, 0.91, 0.28],
    [0.34, 0.73, 0.19],
    [0.3, 0.49, 0.095],
    [0.15, 0.25, 0.045],
  ];
  for (let petal = 0; petal < (single ? 1 : 5); petal++) {
    const a = (petal * tau) / 5,
      start = vertices.length / 3;
    vert(-0.035, 0.56, 0.035, 0, 0.56, 0.18, a);
    for (const [x, y, z] of outline)
      vert(x, y, z + (petal % 2) * 0.04, 1, y, x * 0.8 + 0.45, a);
    for (let i = 0; i < outline.length; i++)
      indexes.push(
        start,
        start + 1 + ((i + 1) % outline.length),
        start + 1 + i,
      );
  }
  const g = new T.BufferGeometry();
  g.setIndex(indexes);
  g.setAttribute("position", new T.Float32BufferAttribute(vertices, 3));
  g.setAttribute("detail", new T.Float32BufferAttribute(colors, 3));
  g.computeVertexNormals();
  return g;
}
export function blossomSystem(scene) {
  const U = {
    time: { value: 0 },
    wave: { value: -10 },
    palette: { value: palettes[0].map((h) => new T.Color(h)) },
  };
  const flowerMat = new T.ShaderMaterial({
    uniforms: U,
    side: T.DoubleSide,
    transparent: true,
    depthWrite: true,
    vertexShader: `
      uniform float wave,time; attribute vec3 detail; attribute float hue;
      varying vec3 d; varying float tint; varying vec3 n; varying vec3 viewDir; varying vec3 wp;
      void main(){d=detail;tint=hue;float h=instanceMatrix[3].y;float flowerWave=exp(-pow(abs(h-wave)/.40,2.));
        vec3 petal=position;petal.xy*=1.+.19*flowerWave;
        petal.z+=detail.y*(.028*sin(time*.85+hue*21.)-.10*flowerWave);
        vec4 p=modelMatrix*instanceMatrix*vec4(petal,1.);
        wp=p.xyz;n=normalize(mat3(modelMatrix*instanceMatrix)*normal);
        viewDir=cameraPosition-p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
    fragmentShader: `
      uniform vec3 palette[4];uniform float time,wave;
      varying vec3 d,n,viewDir,wp; varying float tint;
      void main(){
        vec3 petal=palette[0];if(tint<.13)petal=palette[3];else if(tint<.32)petal=palette[2];else if(tint>.75)petal=mix(palette[0],palette[1],.48);
        float edge=smoothstep(.88,1.,d.x), radial=d.y;
        float sheen=pow(clamp(1.-abs(dot(normalize(n),normalize(viewDir))),0.,1.),2.);
        float folds=.78+.38*d.z+.18*dot(normalize(n),normalize(vec3(-.5,1.,.7)));
        vec3 c=mix(petal*.19,petal*(1.26+.35*tint),pow(radial,1.28))*folds;
        c*=.83+.31*step(.44,d.z)+.09*step(.60,d.z);
        c+=petal*.21*sheen+mix(petal,vec3(1.,.81,.65),.34)*edge*.69;
        float veins=pow(max(0.,cos((d.z*16.+radial*3.)*3.14159)),18.)*.19;
        c+=petal*veins;
        float flash=exp(-pow(abs(wp.y-wave)/.36,2.));c+=flash*(petal*1.55+vec3(.36,.18,.1));
        gl_FragColor=vec4(c,.80+.17*edge);
      }`,
  });
  const o = new T.Object3D(),
    geometry = petalGeometry(),
    hues = [];
  const flowers = new T.InstancedMesh(geometry, flowerMat, buds.length);
  const bead = new T.IcosahedronGeometry(1, 1),
    rod = new T.CylinderGeometry(0.019, 0.028, 0.26, 5);
  for (let i = 0; i < buds.length; i++) {
    const b = buds[i];
    o.position.copy(b.p);
    o.scale.setScalar(b.size);
    o.rotation.set(b.tilt, b.theta, b.roll, "YXZ");
    o.updateMatrix();
    flowers.setMatrixAt(i, o.matrix);
    hues.push(b.hue);
    const stamp = (p) => p.applyMatrix4(o.matrix);
    place(
      bead,
      P.gold,
      stamp(V(0, 0, 0.075)),
      V(0.16, 0.16, 0.13).multiplyScalar(b.size),
      o.quaternion,
    );
    for (let k = 0; k < 5; k++) {
      const a = (k * tau) / 5;
      const contact = V(Math.cos(a) * 0.17, Math.sin(a) * 0.17, 0.26);
      const rotation = new T.Quaternion()
        .setFromUnitVectors(V(0, 1, 0), contact.clone().normalize())
        .premultiply(o.quaternion);
      place(
        rod,
        P.brass,
        stamp(contact.clone().multiplyScalar(0.65)),
        V(1, 1, 1).multiplyScalar(b.size),
        rotation,
      );
      place(
        bead,
        P.cream,
        stamp(contact),
        V(0.055, 0.052, 0.051).multiplyScalar(b.size),
        o.quaternion,
      );
    }
  }
  geometry.setAttribute(
    "hue",
    new T.InstancedBufferAttribute(new Float32Array(hues), 1),
  );
  flowers.castShadow = true;
  scene.add(flowers);
  const falling = Array.from({ length: 64 }, (_, i) => {
    const b = buds[Math.floor(random() * buds.length)];
    return {
      from: b.p.clone(),
      to: V(
        b.p.x * 0.42 + range(-0.16, 0.16),
        0.882,
        b.p.z * 0.62 + range(-0.32, 0.32),
      ),
      offset: random(),
      period: range(5, 10),
      phi: range(0, tau),
      size: range(0.022, 0.051),
      hue: b.hue,
    };
  });
  const shardG = petalGeometry(true);
  shardG.setAttribute(
    "hue",
    new T.InstancedBufferAttribute(
      Float32Array.from(falling, (x) => x.hue),
      1,
    ),
  );
  const shards = new T.InstancedMesh(shardG, flowerMat, falling.length);
  shards.frustumCulled = false;
  scene.add(shards);
  const refColor = new T.Color(),
    reflections = new T.InstancedMesh(
      new T.PlaneGeometry(1, 1),
      new T.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.28,
        blending: T.AdditiveBlending,
        depthWrite: false,
        map: haloMap(),
      }),
      falling.length,
    );
  reflections.frustumCulled = false;
  scene.add(reflections);
  const lines = [],
    frac = [],
    particles = [];
  for (const c of routes) {
    const jitter = random(),
      p = c.getSpacedPoints(36);
    for (let k = 1; k < p.length; k++) {
      lines.push(...p[k - 1].toArray(), ...p[k].toArray());
      frac.push((k - 1) / 36 + jitter, k / 36 + jitter);
    }
    particles.push({ p, jitter, rate: range(0.22, 0.62) });
  }
  const wires = new T.BufferGeometry();
  wires.setAttribute("position", new T.Float32BufferAttribute(lines, 3));
  wires.setAttribute("frac", new T.Float32BufferAttribute(frac, 1));
  const lineMat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    uniforms: U,
    vertexShader: `attribute float frac;varying float f,h;void main(){f=frac;h=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform float time,wave;varying float f,h;void main(){float pulse=pow(max(0.,cos(6.283*(f-time*.48))),19.);
      float surge=exp(-pow(abs(h-wave)/.24,2.));gl_FragColor=vec4(mix(vec3(.12,.80,1.),vec3(1.,.56,.20),step(.5,fract(f*.45))),.07+.48*pulse+surge*1.9);}`,
  });
  scene.add(new T.LineSegments(wires, lineMat));
  const pg = new T.BufferGeometry();
  const pp = new Float32Array(particles.length * 3);
  pg.setAttribute(
    "position",
    new T.BufferAttribute(pp, 3).setUsage(T.DynamicDrawUsage),
  );
  pg.setAttribute(
    "hue",
    new T.Float32BufferAttribute(
      particles.map((p) => p.jitter),
      1,
    ),
  );
  const pm = new T.ShaderMaterial({
    transparent: true,
    blending: T.AdditiveBlending,
    depthWrite: false,
    uniforms: { scale: { value: 1 }, wave: U.wave },
    vertexShader: `attribute float hue;varying float v;uniform float scale;uniform float wave;void main(){v=hue;vec4 p=modelViewMatrix*vec4(position,1.);
      gl_PointSize=clamp(scale*(.021+.012*hue+.035*exp(-pow(abs(position.y-wave)/.27,2.)))/-p.z,1.4,18.);gl_Position=projectionMatrix*p;}`,
    fragmentShader: `varying float v;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(v>.48?vec3(.34,1.6,1.7):vec3(2.,1.14,.39),exp(-r*r*3.2)*(1.-smoothstep(.6,1.,r)));}`,
  });
  const dots = new T.Points(pg, pm);
  dots.frustumCulled = false;
  scene.add(dots);
  return {
    palette(id) {
      U.palette.value = palettes[id].map((h) => new T.Color(h));
    },
    update(t, phase, surge, pixelScale) {
      U.time.value = phase;
      U.wave.value = surge;
      pm.uniforms.scale.value = pixelScale;
      particles.forEach((packet, i) => {
        const f = ((phase * packet.rate + packet.jitter) % 1) * 36,
          k = Math.floor(f);
        const a = packet.p[k],
          b = packet.p[k + 1];
        pp[3 * i] = T.MathUtils.lerp(a.x, b.x, f - k);
        pp[3 * i + 1] = T.MathUtils.lerp(a.y, b.y, f - k);
        pp[3 * i + 2] = T.MathUtils.lerp(a.z, b.z, f - k);
      });
      pg.attributes.position.needsUpdate = true;
      falling.forEach((s, i) => {
        const age = (t / s.period + s.offset) % 1,
          fly = Math.min(1, age / 0.9),
          arc = Math.sin(Math.PI * fly);
        o.position.copy(s.from).lerp(s.to, fly);
        o.position.x += arc * 0.27 * Math.sin(8 * fly + s.phi);
        o.position.z += arc * 0.32 * Math.cos(6 * fly + s.phi);
        o.rotation.set(
          -1.48 + arc * Math.sin(fly * 8 + s.phi),
          arc * (s.phi + fly * 2),
          s.phi + arc * fly * 5,
        );
        o.scale.setScalar(s.size * Math.min(1, age * 17, (1 - age) * 15));
        o.updateMatrix();
        shards.setMatrixAt(i, o.matrix);
        const light = Math.max(0, 1 - (o.position.y - 0.88) * 3);
        o.position.y = 0.874;
        o.rotation.set(-Math.PI / 2, 0, 0);
        o.scale.set(0.13, 0.08, 1).multiplyScalar(light);
        o.updateMatrix();
        reflections.setMatrixAt(i, o.matrix);
        refColor
          .copy(U.palette.value[s.hue < 0.13 ? 3 : 0])
          .multiplyScalar(light);
        reflections.setColorAt(i, refColor);
      });
      shards.instanceMatrix.needsUpdate = true;
      reflections.instanceMatrix.needsUpdate = true;
      reflections.instanceColor.needsUpdate = true;
    },
  };
}
function haloMap() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "white");
  g.addColorStop(0.35, "rgba(255,255,255,.57)");
  g.addColorStop(1, "transparent");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new T.CanvasTexture(c);
}
