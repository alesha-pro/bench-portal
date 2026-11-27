import { T, V, group, mesh, mat, orb, bake, canvasTex, random } from './craft.js';
const rand = random(337187),
  TAU = Math.PI * 2;
function scaleSkin(warm) {
  return canvasTex(512, 192, (c, w, h) => {
    const grad = c.createLinearGradient(0, 0, 0, h);
    (warm
      ? [
          [0, '#315952'],
          [0.3, '#729b84'],
          [0.46, '#bfaa55'],
          [0.51, '#ffe9ae'],
          [0.58, '#a28c64'],
          [0.77, '#d4dbb8'],
          [1, '#e0e5c9'],
        ]
      : [
          [0, '#16464f'],
          [0.27, '#288b8d'],
          [0.44, '#4eb9b0'],
          [0.49, '#edf1bc'],
          [0.52, '#81c5bc'],
          [0.58, '#426a82'],
          [0.8, '#b3d0d2'],
          [1, '#f2dfb1'],
        ]
    ).forEach(([s, col]) => grad.addColorStop(s, col));
    c.fillStyle = grad;
    c.fillRect(0, 0, w, h);
    for (let j = -1; j < 18; j++)
      for (let k = 0; k < 45; k++) {
        const x = k * 12 + (j % 2) * 6,
          y = j * 12;
        c.strokeStyle = 'rgba(230,247,219,' + (0.1 + 0.2 * rand()) + ')';
        c.lineWidth = 1.25;
        c.beginPath();
        c.arc(x, y, 7, -1.12, 1.12);
        c.stroke();
      }
    for (let i = 0; i < 7; i++) {
      c.strokeStyle = 'rgba(16,57,63,.24)';
      c.lineWidth = 5;
      c.beginPath();
      c.moveTo(i * 46 + 40, 4);
      c.quadraticCurveTo(i * 46 + 64, 47, i * 46 + 48, 78);
      c.stroke();
    }
    c.strokeStyle = '#476761';
    c.lineWidth = 2;
    c.beginPath();
    c.ellipse(403, 91, 19, 58, -0.22, -1.1, 1.38);
    c.stroke();
  });
}
function model(warm) {
  const root = new T.Group(),
    skin = mat(0xffffff, 0.32, 0.28, { map: scaleSkin(warm) }),
    fin = mat(warm ? 0xbd9356 : 0x91b5a4, 0.44, 0.2, { side: T.DoubleSide });
  const iris = mat(0xf6ca73, 0.25, 0.55),
    eye = mat(0x101b22, 0.13, 0.3);
  const points = [],
    uv = [],
    idx = [];
  for (let j = 0; j <= 18; j++) {
    const u = j / 18,
      r = Math.pow(Math.sin(Math.PI * u), 0.75) * (0.57 + 0.62 * u);
    for (let k = 0; k <= 18; k++) {
      const a = (k / 18) * TAU;
      points.push(-0.21 + u * 0.42, r * 0.095 * Math.sin(a), r * 0.053 * Math.cos(a));
      uv.push(u, (1 + Math.sin(a)) * 0.5);
      if (j < 18 && k < 18) {
        const i = j * 19 + k;
        idx.push(i, i + 1, i + 19, i + 1, i + 20, i + 19);
      }
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(points, 3));
  g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  mesh(root, g, skin);
  function membrane(v) {
    const f = new T.BufferGeometry();
    f.setAttribute('position', new T.Float32BufferAttribute(v.flat(), 3));
    f.setIndex(v.slice(2).flatMap((_, i) => [0, i + 1, i + 2]));
    f.computeVertexNormals();
    mesh(root, f, fin);
  }
  membrane([
    [-0.18, 0, 0],
    [-0.31, 0.092, 0.012],
    [-0.29, 0.028, 0],
    [-0.264, 0, 0],
    [-0.3, -0.073, 0.017],
  ]);
  membrane([
    [-0.1, 0.061, 0],
    [-0.045, 0.129, 0.002],
    [0.07, 0.068, 0],
  ]);
  membrane([
    [-0.14, -0.042, 0],
    [-0.091, -0.084, 0.003],
    [0.012, -0.063, 0],
  ]);
  for (const s of [-1, 1]) {
    membrane([
      [0.057, -0.01, 0.049 * s],
      [-0.023, -0.056, 0.104 * s],
      [-0.017, -0.009, 0.067 * s],
    ]);
    orb(root, iris, 0.132, 0.023, s * 0.041, 0.02, 0.02, 0.009);
    orb(root, eye, 0.136, 0.024, s * 0.047, 0.013, 0.014, 0.006);
  }
  return bake(root, false);
}
export function fishSchools(scene) {
  const schools = [{ n: 13, soundboard: true }, { n: 20 }, { n: 21 }, { n: 11 }],
    instances = [];
  for (let k = 0; k < schools.length; k++) {
    const s = schools[k],
      parts = model(k % 2 === 1).children,
      meshes = [];
    for (const o of parts) {
      o.material.userData.fish = true;
      const m = new T.InstancedMesh(o.geometry, o.material, s.n);
      m.frustumCulled = false;
      scene.add(m);
      meshes.push(m);
    }
    const fish = Array.from({ length: s.n }, (_, j) => ({
      phase: rand() * TAU,
      along: j * 0.052 + rand() * 0.1,
      dx: rand() - 0.5,
      dy: rand() - 0.5,
      dz: rand() - 0.5,
      size: (0.41 + rand() * 0.43) * (k === 0 ? 0.79 : k === 1 ? 0.82 : 1),
    }));
    instances.push({ k, meshes, fish });
  }
  const dummy = new T.Object3D();
  function pos(k, f, t) {
    const a = t * (k === 0 ? 0.32 : 0.19) + f.along + 1.11 * k,
      sw = Math.sin(t * 0.9 + f.phase);
    if (!k)
      return V(
        0.15 + 1.42 * Math.cos(a) + f.dx * 0.27,
        1.91 + 0.12 * Math.sin(a * 2) + f.dy * 0.28 + sw * 0.023,
        -0.53 + 0.96 * Math.sin(a) + f.dz * 0.31,
      );
    if (k === 1)
      return V(
        -1.72 + 1.86 * Math.cos(a) + f.dx * 0.9,
        1.31 + 0.45 * Math.sin(a * 2) + f.dy * 0.51,
        1.6 + 1.11 * Math.sin(a) + f.dz * 0.75,
      );
    if (k === 2)
      return V(
        0.05 + 4.1 * Math.cos(a) + f.dx * 1.7,
        2.92 + 0.4 * Math.sin(a * 1.7) + f.dy * 0.91,
        -3.24 + 2 * Math.sin(a) + f.dz * 0.92,
      );
    return V(
      -2.0 + 2.11 * Math.cos(a) + f.dx * 0.89,
      2.55 + 0.32 * Math.sin(a * 2.2) + f.dy * 0.65,
      -0.94 + 1.88 * Math.sin(a) + f.dz * 0.68,
    );
  }
  return (t) => {
    for (const { k, meshes, fish } of instances) {
      fish.forEach((f, i) => {
        const p = pos(k, f, t),
          d = pos(k, f, t + 0.06)
            .sub(p)
            .normalize();
        dummy.position.copy(p);
        dummy.rotation.order = 'YXZ';
        dummy.rotation.set(
          0.04 * Math.sin(t * 6 + f.phase),
          Math.atan2(-d.z, d.x) + 0.056 * Math.sin(t * 7 + f.phase),
          Math.asin(d.y),
        );
        dummy.scale.setScalar(f.size);
        dummy.updateMatrix();
        for (const m of meshes) m.setMatrixAt(i, dummy.matrix);
      });
      for (const m of meshes) m.instanceMatrix.needsUpdate = true;
    }
  };
}
export function dust(scene) {
  const n = 850,
    arr = [],
    phase = [];
  for (let i = 0; i < n; i++) {
    arr.push((rand() - 0.5) * 19, rand() * 7, (rand() - 0.5) * 17);
    phase.push(rand() * 6.28);
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(arr, 3));
  g.setAttribute('phase', new T.Float32BufferAttribute(phase, 1));
  const m = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { time: { value: 0 }, height: { value: 720 } },
    vertexShader: `
 attribute float phase;uniform float time,height;varying float sparkle;void main(){vec3 p=position+vec3(.19*sin(time*.24+phase),.16*sin(time*.31+position.x),.095*cos(time*.22+phase));vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;gl_PointSize=clamp(height*.009*(.35+.65*fract(phase*12.))/-mv.z,1.,4.5);sparkle=(.22+.43*pow(.5+.5*sin(phase+time*.65),4.))*(1.-smoothstep(3.,19.,-mv.z));}`,
    fragmentShader: `varying float sparkle;void main(){float a=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(.77,.90,.72,(1.-smoothstep(.05,1.,a))*sparkle);}
 `,
  });
  scene.add(new T.Points(g, m));
  return (t, h) => {
    m.uniforms.time.value = t;
    m.uniforms.height.value = h;
  };
}
export function bubbles(world, water) {
  const capacity = 480,
    scene = new T.Scene(),
    geo = new T.SphereGeometry(1, 18, 14);
  const m = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      colorTex: { value: water.composite.texture },
      depthTex: { value: world.depthTexture },
      resolution: { value: new T.Vector2(1, 1) },
      fade: { value: 1 },
    },
    vertexShader: `varying vec3 n,e;void main(){vec4 p=modelViewMatrix*instanceMatrix*vec4(position,1.);e=-p.xyz;n=mat3(modelViewMatrix)*mat3(instanceMatrix)*normal;gl_Position=projectionMatrix*p;}`,
    fragmentShader: `uniform sampler2D colorTex,depthTex;uniform vec2 resolution;uniform float fade;varying vec3 n,e;void main(){
 vec2 uv=gl_FragCoord.xy/resolution;if(gl_FragCoord.z>texture2D(depthTex,uv).r+.000005)discard;
 vec3 N=normalize(n),E=normalize(e);float f=1.-clamp(dot(N,E),0.,1.);
 vec3 under=texture2D(colorTex,uv).rgb, through=texture2D(colorTex,uv-N.xy*(.004+.009*f)).rgb;
 float rim=smoothstep(.21,.87,f),glint=pow(max(dot(N,normalize(vec3(-.43,.62,.67))),0.),36.);
 float gleam=pow(max(dot(N,normalize(vec3(.36,-.7,.44))),0.),15.);
 vec3 c=mix(through,vec3(.045,.18,.19),.19+.41*rim);
 c+=vec3(.67,.86,.86)*rim*(.43+.44*N.y)+vec3(1.,.95,.75)*glint*1.35+vec3(.50,.86,.91)*gleam*.71;
 gl_FragColor=vec4(c,(.69+.30*rim)*fade);}`,
  });
  const inst = new T.InstancedMesh(geo, m, capacity);
  inst.frustumCulled = false;
  scene.add(inst);
  const dummy = new T.Object3D();
  return function draw(renderer, camera, events, t, xAt, fade = 1) {
    let count = 0;
    for (const event of events) {
      const age = t - event.t;
      if (age < 0 || age > 4.6) continue;
      for (let j = 0; j < 5; j++) {
        const a = age - j * 0.078;
        if (a < 0 || a > 4.12 || count >= capacity) continue;
        const phase = Math.sin(event.m * 173.9 + event.t * 8.4 + j * 28.18) * 11.61;
        const [x, y, z] = xAt[event.m];
        const s =
          (0.019 + 0.012 * (0.5 + 0.5 * Math.sin(phase * 4.3))) *
          (j === 0 ? 1.26 : 0.89) *
          Math.min(1, a * 18 + 0.1) *
          Math.min(1, (4.12 - a) * 2);
        dummy.position.set(
          x + Math.sin(a * 2.5 + phase) * (0.02 + 0.02 * a) + 0.045 * a,
          y + a * (0.58 + 0.074 * Math.cos(phase)),
          z + 0.043 * Math.sin(phase + a * 2) - 0.038 * a,
        );
        dummy.scale.set(s * (1 + 0.04 * Math.sin(phase + a * 5)), s * 1.06, s);
        dummy.updateMatrix();
        inst.setMatrixAt(count++, dummy.matrix);
      }
    }
    m.uniforms.fade.value = fade;
    inst.count = count;
    inst.instanceMatrix.needsUpdate = true;
    renderer.getDrawingBufferSize(m.uniforms.resolution.value);
    renderer.render(scene, camera);
  };
}
