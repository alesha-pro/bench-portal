import * as T from 'three';
import { V, TAU, rng, mesh, group, ball, bake, std, basic, u, noiseGL } from './geometry.js';

import { seabed } from './trench.js';

// Lifted silt follows the local rock shelf and settles as the thruster wash loses energy.
function sediment(scene, random) {
  const count = 132,
    positions = new Float32Array(count * 3),
    state = new Float32Array(count * 2);
  const grains = Array.from({ length: count }, (_, i) => ({
    side: i % 2,
    seed: random(),
    spread: random(),
    phase: random() * TAU,
    rate: 0.18 + 0.14 * random(),
  }));
  const g = new T.BufferGeometry();
  const centers = new T.BufferAttribute(positions, 3),
    puffs = new T.BufferAttribute(state, 2);
  g.setAttribute('position', centers);
  g.setAttribute('puff', puffs);
  const veil = new T.Points(
    g,
    new T.ShaderMaterial({
      uniforms: u,
      transparent: true,
      depthWrite: false,
      vertexShader: `attribute vec2 puff;uniform float height;
      varying float age,weight,seed;void main(){
      vec4 p=viewMatrix*vec4(position,1.);age=puff.x;weight=puff.y;seed=position.x*13.+position.z;
      gl_Position=projectionMatrix*p;gl_PointSize=clamp(height*(.12+age*.74)/max(.1,-p.z),1.,170.);}`,
      fragmentShader:
        noiseGL +
        `varying float age,weight,seed;void main(){
      vec2 q=gl_PointCoord-.5; q.y*=1.35;
      float eddy=nv(vec3(q*8.4,seed+age*3.));
      float cloud=(1.-smoothstep(.10,.49,length(q)+.14*(eddy-.5)))*weight;
      vec3 col=mix(vec3(.065,.053,.048),vec3(.23,.19,.14),eddy*.64+age*.24);
      gl_FragColor=vec4(col,cloud*.32);}`,
    })
  );
  veil.frustumCulled = false;
  veil.renderOrder = 2;
  scene.add(veil);
  const sources = [V(), V()];
  return (t, vehicle) => {
    sources.forEach((v, i) =>
      v.set(i ? 1.43 : -1.43, -1.22, -0.61).applyMatrix4(vehicle.root.matrixWorld)
    );
    grains.forEach(({ side, seed, spread, phase, rate }, i) => {
      const source = sources[side],
        age = (seed + t * rate) % 1;
      const force = 1 - T.MathUtils.smoothstep(source.y - seabed(source.x, source.z), 2.1, 6.2);
      const r = 0.09 + (0.55 + spread) * age * force + 0.3 * spread,
        a = phase + 0.62 * age;
      const x = source.x + r * Math.cos(a) - 0.62 * age,
        z = source.z + r * Math.sin(a) - 0.48 * age;
      centers.setXYZ(
        i,
        x,
        seabed(x, z) + 0.13 + force * (0.25 + 0.54 * spread) * Math.sin(age * Math.PI),
        z
      );
      puffs.setXY(i, age, force * Math.sin(age * Math.PI));
    });
    centers.needsUpdate = true;
    puffs.needsUpdate = true;
  };
}

export function water(scene) {
  u.height = { value: 720 };
  const random = rng(4000);
  const updateSediment = sediment(scene, rng(337));
  const dome = new T.ShaderMaterial({
    uniforms: u,
    side: T.BackSide,
    depthWrite: false,
    vertexShader: `varying vec3 P;void main(){P=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1);}`,
    fragmentShader:
      noiseGL +
      `varying vec3 P;uniform float time;
    void main(){vec3 ray=normalize(P-cameraPosition);float lift=smoothstep(-.40,.83,ray.y);
      float glow=pow(max(0.,dot(ray,normalize(vec3(-.13,.46,-1.)))),3.5);
      float angle=atan(ray.x, -ray.z);float band=angle*.83-ray.y*.41;
      float drift=time*.013;
      float rays=.38*pow(.5+.5*sin(band*31.+1.8*sin(band*15.+drift)),5.)+
                 .48*pow(.5+.5*cos(band*13.+2.5+drift),8.)+.14*nv(ray*16.+drift);
      vec3 c=mix(vec3(.0009,.006,.017),vec3(.007,.050,.098),lift);
      c+=vec3(.007,.061,.102)*glow*(.38+1.62*rays)+vec3(.002,.025,.058)*lift*rays;
      gl_FragColor=vec4(c,1.);}`,
  });
  mesh(scene, new T.SphereGeometry(56, 48, 32), dome).renderOrder = -5;
  const gg = new T.BufferGeometry(),
    pos = [],
    attrs = [];
  for (let i = 0; i < 11100; i++) {
    if (i < 7800) pos.push((random() - 0.5) * 38, -7 + random() * 20, (random() - 0.5) * 44 - 6);
    else pos.push((random() - 0.5) * 15, -5 + random() * 11, (random() - 0.5) * 17 + 1);
    attrs.push(random(), random(), random(), random());
  }
  gg.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  gg.setAttribute('seed', new T.Float32BufferAttribute(attrs, 4));
  const dust = new T.Points(
    gg,
    new T.ShaderMaterial({
      uniforms: u,
      transparent: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
      vertexShader: `attribute vec4 seed;uniform float time,radius,strength,height;uniform vec3 origin,lampA,lampB,axisA,axisB;varying vec3 C;varying float dof,lit;
    float shaft(vec3 p,vec3 src,vec3 a){vec3 d=p-src;return smoothstep(.90,.986,dot(normalize(d),a))*exp(-length(d)*.14);}
    void main(){vec3 p=position;p.y=mod(p.y+7.-time*(.028+.043*seed.x),20.)-7.;
      p.x+=.19*sin(time*.31+seed.y*51.+p.y)+.12*sin(time*.53+p.z);
      p.z+=.22*cos(time*.37+p.x*.47+seed.y*21.);
      float ed=length(p-origin)-radius;float e=exp(-abs(ed)*1.55);
      p+=normalize(p-origin)*e*.12;vec4 v=viewMatrix*vec4(p,1);
      dof=(1.-smoothstep(.25,1.9,-v.z));float shaftL=strength*(shaft(p,lampA,axisA)+shaft(p,lampB,axisB));lit=clamp(shaftL,0.,1.);
      gl_PointSize=clamp(height*(.007+.023*pow(seed.z,3.))*(1.+dof)/max(.1,-v.z),1.,height*.043);
      gl_Position=projectionMatrix*v;
      vec3 c=mix(vec3(.18,.33,.38),vec3(.14,.72,.70),pow(seed.w,12.));
      C=(c*(.46+.60*seed.z)+vec3(1.72,1.56,1.18)*shaftL*(.53+.67*seed.w)+vec3(.14,1.02,1.21)*e)*exp(-max(-v.z,0.)*.059)*(1.-dof*.79);}
    `,
      fragmentShader: `varying vec3 C;varying float dof,lit;void main(){vec2 q=gl_PointCoord-.5;float r=length(q)*2.;
      float a=mix(exp(-r*r*4.7),(.15+.27*exp(-abs(r-.74)*6.))*(1.-smoothstep(.65,1.,r)),dof);
      a+=lit*.84*exp(-dot(q*vec2(9.,4.5),q*vec2(9.,4.5)));gl_FragColor=vec4(C,a*(1.-smoothstep(.78,1.,r)));}`,
    })
  );
  dust.frustumCulled = false;
  dust.renderOrder = 7;
  scene.add(dust);
  const bubbleGeo = new T.BufferGeometry(),
    seeds = [];
  for (let i = 0; i < 400; i++) seeds.push(random(), random(), random(), i % 2);
  bubbleGeo.setAttribute('seed', new T.Float32BufferAttribute(seeds, 4));
  bubbleGeo.setAttribute('position', new T.Float32BufferAttribute(new Float32Array(1200), 3));
  const bubbleU = { ...u, body: { value: new T.Matrix4() } };
  const bubbles = new T.Points(
    bubbleGeo,
    new T.ShaderMaterial({
      uniforms: bubbleU,
      transparent: true,
      depthWrite: false,
      vertexShader: `attribute vec4 seed;uniform mat4 body;uniform float time,height;varying float age;void main(){
      age=fract(seed.x+time*(.22+.08*seed.y));float a=seed.z*6.283+age*13.;
      vec3 p=vec3((seed.w-.5)*2.62+(.041+.28*age)*cos(a),-.18+age*age*1.54+(.06+.22*age)*sin(a),-1.5-age*2.15);
      vec4 v=viewMatrix*body*vec4(p,1);gl_Position=projectionMatrix*v;gl_PointSize=clamp(height*(.008+.022*seed.y)/-v.z,1.2,24.);}`,
      fragmentShader: `varying float age;void main(){vec2 q=gl_PointCoord-.5;float r=2.*length(q);
      float ring=exp(-abs(r-.75)*9.);float hi=exp(-length(q-vec2(-.16,-.20))*13.);
      gl_FragColor=vec4(vec3(.24,.54,.64)+hi,(ring*.59+hi*.82)*(1.-age*.82));}`,
    })
  );
  bubbles.frustumCulled = false;
  bubbles.renderOrder = 6;
  scene.add(bubbles);

  const shell = mesh(
    scene,
    new T.SphereGeometry(1, 96, 64),
    new T.ShaderMaterial({
      uniforms: u,
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      blending: T.AdditiveBlending,
      vertexShader: `varying vec3 P,N;uniform vec3 origin;uniform float radius;void main(){N=normal;P=origin+position*max(radius,.001);gl_Position=projectionMatrix*viewMatrix*vec4(P,1);}`,
      fragmentShader: `varying vec3 P,N;uniform float radius;void main(){
      float f=pow(1.-abs(dot(normalize(cameraPosition-P),normalize(N))),5.);
      float band=pow(.5+.5*cos(P.y*18.+P.z*2.4),13.);
      float a=(.018+f*(.52+.26*band))*smoothstep(0.,.5,radius)*(1.-smoothstep(13.,22.,radius));
      gl_FragColor=vec4(.052,.86,1.,a);}`,
    })
  );
  shell.frustumCulled = false;
  shell.renderOrder = 8;

  const source = new T.Group(),
    fishSkin = std(0xa8bfc3, 0.58, 0.39, { vertexColors: true }),
    fin = std(0x4a646b, 0.28, 0.51, { side: T.DoubleSide }),
    eye = std(0x071013, 0.22, 0.21),
    light = basic(0xb9ead8, 1.09);
  const bodyPos = [],
    bodyUV = [],
    bodyColor = [],
    bodyIdx = [];
  for (let j = 0; j <= 24; j++)
    for (let k = 0; k <= 16; k++) {
      const t = j / 24,
        a = (TAU * k) / 16;
      const r = 0.048 * Math.sin(Math.PI * t) ** 0.67 * (0.36 + t * 1.32) + 0.002;
      const y = r * Math.sin(a);
      bodyPos.push(-0.155 + 0.32 * t, y + 0.009 * Math.sin(Math.PI * t), 0.71 * r * Math.cos(a));
      bodyUV.push(t, k / 16);
      const pigment = Math.max(0, Math.sin(a));
      const shimmer = 0.5 + 0.5 * Math.cos(t * 96 + Math.sin(a * 7) * 2);
      bodyColor.push(
        0.18 + 0.14 * shimmer - 0.14 * pigment,
        0.32 + 0.16 * shimmer - 0.24 * pigment,
        0.34 + 0.14 * shimmer - 0.2 * pigment
      );
      if (j && k) {
        const i = j * 17 + k;
        bodyIdx.push(i - 18, i, i - 17, i - 18, i - 1, i);
      }
    }
  const body = new T.BufferGeometry();
  body.setAttribute('position', new T.Float32BufferAttribute(bodyPos, 3));
  body.setAttribute('uv', new T.Float32BufferAttribute(bodyUV, 2));
  body.setAttribute('color', new T.Float32BufferAttribute(bodyColor, 3));
  body.setIndex(bodyIdx);
  body.computeVertexNormals();
  mesh(source, body, fishSkin);
  function membrane(vertices, indices) {
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(vertices.flat(), 3));
    g.setIndex(indices);
    g.computeVertexNormals();
    mesh(source, g, fin);
  }
  for (const side of [-1, 1]) {
    membrane(
      [
        [-0.151, 0, 0],
        [-0.175, side * 0.035, 0.004],
        [-0.231, side * 0.071, 0.006],
        [-0.203, side * 0.031, 0.003],
        [-0.183, 0, 0],
      ],
      [0, 1, 2, 0, 2, 3, 0, 3, 4]
    );
    membrane(
      [
        [0.048, -0.005, side * 0.024],
        [0.023, -0.013, side * 0.032],
        [-0.022, -0.033, side * 0.061],
        [-0.021, -0.009, side * 0.05],
      ],
      [0, 1, 2, 0, 2, 3]
    );
    ball(source, eye, [0.115, 0.01, side * 0.021], [0.014, 0.015, 0.008], 10);
    ball(source, light, [0.119, 0.015, side * 0.028], [0.0038, 0.0038, 0.0025], 8);
    for (let j = 0; j < 7; j++) {
      const t = 0.26 + j * 0.085,
        a = -0.65;
      const r = 0.048 * Math.sin(Math.PI * t) ** 0.67 * (0.36 + t * 1.32) + 0.002;
      ball(
        source,
        light,
        [
          -0.155 + 0.32 * t,
          r * Math.sin(a) + 0.009 * Math.sin(Math.PI * t),
          side * 0.71 * r * Math.cos(a),
        ],
        [0.0046, 0.0034, 0.0037],
        8
      );
    }
  }
  membrane(
    [
      [0.04, 0.055, 0],
      [-0.028, 0.067, 0],
      [-0.068, 0.047, 0],
      [-0.094, 0.024, 0],
      [0.04, 0.029, 0],
    ],
    [0, 1, 2, 0, 2, 3, 0, 3, 4]
  );
  // Fins use the same vertex layout as the lathed body before batching.
  source.traverse((o) => {
    if (o.isMesh && !o.geometry.attributes.uv)
      o.geometry.setAttribute(
        'uv',
        new T.Float32BufferAttribute(new Float32Array(o.geometry.attributes.position.count * 2), 2)
      );
  });
  bake(source);
  const fish = source.children.map((o) => {
    const m = new T.InstancedMesh(o.geometry, o.material, 150);
    scene.add(m);
    m.frustumCulled = false;
    return m;
  });
  const schools = Array.from({ length: 150 }, (_, i) => [
    i % 3,
    (random() - 0.5) * 4.35,
    (random() - 0.5) * 1.65,
    (random() - 0.5) * 1.78,
    random() * TAU,
    0.48 + random() * 0.76,
  ]);
  const dummy = new T.Object3D(),
    tmp = V(),
    dl = V();
  return function updateWater(t, vehicle) {
    updateSediment(t, vehicle);
    bubbleU.body.value.copy(vehicle.root.matrixWorld);
    shell.visible = u.radius.value > 0 && u.radius.value < 22;
    schools.forEach(([k, x, y, z, phase, size], i) => {
      const speed = 0.31 + k * 0.039,
        theta = t * speed + k * 1.96;
      tmp.set(
        (k === 0 ? 0.3 : k === 1 ? 2 : -1) + x + Math.sin(theta) * 2.37,
        (k === 0 ? 0.13 : k === 1 ? 1.71 : 1.2) +
          y +
          0.42 * Math.sin(theta * 2 + x * 0.73) +
          0.075 * Math.sin(t * 2.3 + phase),
        (k === 0 ? 0.85 : k === 1 ? -5.5 : -8.1) + z + Math.cos(theta + x * 0.14) * 1.52
      );
      let turn = 0,
        dy = 0;
      for (const [src, axis] of [
        [u.lampA.value, u.axisA.value],
        [u.lampB.value, u.axisB.value],
      ]) {
        dl.copy(tmp).sub(src);
        const range = dl.length(),
          along = dl.dot(axis);
        if (along <= 0) continue;
        dl.addScaledVector(axis, -along);
        const fear =
          (1 - T.MathUtils.smoothstep(dl.length(), 0.14, 0.48 + along * 0.49)) *
          Math.exp(-range * 0.14) *
          u.strength.value;
        dl.normalize();
        tmp.addScaledVector(dl, fear * 0.81);
        turn += fear * 0.63;
        dy += dl.y * fear * 0.32;
      }
      dummy.position.copy(tmp);
      dummy.rotation.set(
        0.1 * Math.sin(phase + t * 1.7),
        Math.atan2(Math.sin(theta + x * 0.14) * 1.52, Math.cos(theta) * 2.37) +
          0.14 * Math.sin(t * 7 + phase) +
          turn,
        dy + 0.2 * Math.cos(theta * 2 + x * 0.73)
      );
      dummy.scale.setScalar(size);
      dummy.updateMatrix();
      fish.forEach((m) => m.setMatrixAt(i, dummy.matrix));
    });
    fish.forEach((m) => (m.instanceMatrix.needsUpdate = true));
  };
}
