import {
  T,
  V,
  TAU,
  rand,
  group,
  m,
  G,
  mesh,
  ball,
  pebble,
  rod,
  texture,
  standard,
  canvasMap,
  ease,
} from './workshop.js';

function bird(scene, x, y, z, k) {
  const body = group(scene, x, y, z);
  body.rotation.y = k ? 1.13 : -1.12;
  const feather = standard(k ? 0x697f75 : 0x655744, 0.94, 0),
    breast = standard(k ? 0xe8d4a2 : 0xbe784d, 0.94, 0),
    dark = standard(0x373c32, 0.87, 0);
  ball(body, feather, 0, 0.115, 0, 0.066, 0.081, 0.116).rotation.x = -0.21;
  ball(body, breast, 0, 0.128, 0.055, 0.062, 0.07, 0.073);
  ball(body, feather, 0, 0.204, 0.052, 0.064, 0.064, 0.063);
  const wings = [];
  for (const s of [-1, 1]) {
    const w = group(body, s * 0.045, 0.15, -0.012);
    wings.push(w);
    const cover = ball(w, feather, s * 0.018, -0.005, -0.024, 0.034, 0.055, 0.09);
    cover.rotation.x = 0.24;
    for (let i = 0; i < 3; i++)
      ball(
        w,
        dark,
        s * (0.038 - i * 0.006),
        -0.019 + i * 0.008,
        -0.059 - i * 0.01,
        0.01,
        0.013,
        0.065,
      ).rotation.x = 0.23;
    pebble(body, m.dark, s * 0.055, 0.215, 0.078, 0.014, 0.014, 0.012);
    pebble(body, m.ivory, s * 0.065, 0.22, 0.081, 0.004);
    rod(body, m.bronze, [s * 0.027, 0.088, 0], [s * 0.031, 0.005, 0.019], 0.006);
    for (let i = 0; i < 3; i++)
      rod(
        body,
        m.bronze,
        [s * 0.031, 0.006, 0.019],
        [s * 0.031 + (i - 1) * 0.017, 0.003, 0.054],
        0.003,
      );
  }
  const beak = mesh(body, new T.ConeGeometry(0.021, 0.065, 12), m.brass, 0, 0.198, 0.133);
  beak.rotation.x = Math.PI / 2;
  for (let i = -1; i <= 1; i++)
    ball(body, feather, i * 0.02, 0.116, -0.137, 0.017, 0.012, 0.09).rotation.x = -0.18;
  return (t, flight) => {
    const u = ease(0, 3.6, flight - k * 0.3);
    body.position.set(
      x + (k ? 2.9 : -3.5) * u,
      y + u * (1.64 + 0.18 * Math.sin(t * 3)),
      z - u * (3.2 + k),
    );
    body.rotation.z = 0.045 * Math.sin(t * 2 + k) + u * 0.17;
    wings.forEach((w, j) => {
      w.rotation.z = (j ? 1 : -1) * (0.1 + u * (0.75 + Math.sin(t * 24))) * 1.2;
    });
    body.scale.setScalar(1 + 0.27 * k);
  };
}
function butterfly(scene, mat, size) {
  const p = group(scene),
    wings = [];
  for (const sign of [-1, 1]) {
    const pivot = group(p);
    wings.push(pivot);
    const geo = new T.PlaneGeometry(1, 1),
      uv = geo.attributes.uv;
    for (let j = 0; j < uv.count; j++) uv.setX(j, uv.getX(j) * 0.5 + (sign < 0 ? 0 : 0.5));
    const wing = mesh(pivot, geo, mat, sign * size * 0.25, 0, 0, size * 0.5, size * 0.66, 1);
    wing.castShadow = false;
  }
  return {
    p,
    setFlap(a) {
      wings[0].rotation.y = a;
      wings[1].rotation.y = -a;
    },
  };
}
export function wildlife(scene, tip) {
  const tex = texture('morpho.webp'),
    mat = new T.MeshBasicMaterial({
      map: tex,
      side: T.DoubleSide,
      alphaTest: 0.4,
      color: 0xe7f5ff,
    });
  const golden = mat.clone();
  golden.onBeforeCompile = (s) =>
    (s.fragmentShader = s.fragmentShader.replace(
      '#include <map_fragment>',
      `#include <map_fragment>
    float b=max(diffuseColor.b,diffuseColor.g);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(b*1.58,b*.70,b*.072),smoothstep(.016,.12,b-diffuseColor.r));`,
    ));
  const hero = butterfly(scene, mat, 0.32),
    guests = Array.from({ length: 9 }, (_, i) =>
      butterfly(scene, i % 3 ? golden : mat, rand(0.105, 0.19)),
    );
  const birds = [bird(scene, -1.16, 3.414, 0.05, 0), bird(scene, -0.82, 3.403, -0.06, 1)];
  const scatter = new T.BufferGeometry(),
    N = 420,
    pos = new Float32Array(N * 3),
    attr = new T.BufferAttribute(pos, 3);
  const motes = Array.from({ length: N }, () => [
    rand(-5.2, 5.2),
    rand(0.27, 6.2),
    rand(-5.8, 5.7),
    rand(0, TAU),
  ]);
  scatter.setAttribute('position', attr);
  const pointMap = canvasMap(64, 64, (c) => {
    const grad = c.createRadialGradient(32, 32, 0, 32, 32, 31);
    grad.addColorStop(0, '#fff9d7');
    grad.addColorStop(0.22, 'rgba(255,243,194,.90)');
    grad.addColorStop(1, 'rgba(255,236,166,0)');
    c.fillStyle = grad;
    c.fillRect(0, 0, 64, 64);
  });
  const points = new T.PointsMaterial({
    color: 0xffdf91,
    size: 0.032,
    map: pointMap,
    transparent: true,
    opacity: 0.76,
    depthWrite: false,
    blending: T.AdditiveBlending,
  });
  const pollen = new T.Points(scatter, points);
  pollen.frustumCulled = false;
  scene.add(pollen);
  const fireGeometry = new T.BufferGeometry();
  fireGeometry.setAttribute(
    'position',
    new T.Float32BufferAttribute(
      motes.slice(0, 130).flatMap((q) => [q[0], q[1] * 0.65, q[2]]),
      3,
    ),
  );
  const fireMaterial = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    uniforms: { t: { value: 0 }, level: { value: 0 } },
    vertexShader: `uniform float t;varying float flash;void main(){
      vec3 p=position;float phase=p.x*3.4+p.z;
      p+=vec3(sin(t*.61+phase)*.13,cos(t*.73+phase)*.14,sin(t*.83+phase)*.10);
      vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(35./(-mv.z),2.,17.);
      flash=.21+.79*pow(.5+.5*sin(t*1.9+phase),3.);
    }`,
    fragmentShader: `uniform float level;varying float flash;void main(){
      float d=length(gl_PointCoord-.5)*2.;float g=exp(-5.*d*d)*(1.-smoothstep(.73,1.,d));
      gl_FragColor=vec4(vec3(1.45,1.26,.30),g*flash*level);
    }`,
  });
  const fireflies = new T.Points(fireGeometry, fireMaterial);
  scene.add(fireflies);
  const seedMap = canvasMap(96, 96, (c) => {
    c.strokeStyle = '#ffefc4';
    c.lineWidth = 2.2;
    c.beginPath();
    c.moveTo(45, 39);
    c.quadraticCurveTo(55, 71, 64, 82);
    c.stroke();
    c.fillStyle = '#e1b563';
    c.beginPath();
    c.ellipse(65, 83, 2.8, 6, -0.5, 0, TAU);
    c.fill();
    for (let i = 0; i < 34; i++) {
      const a = (TAU * i) / 34,
        r = rand(22, 40),
        x = 45 + Math.cos(a) * r,
        y = 35 + Math.sin(a) * r * 0.67;
      c.lineWidth = 1.2;
      c.beginPath();
      c.moveTo(46, 42);
      c.quadraticCurveTo(43 + (x - 43) * 0.42, 34 + (y - 34) * 0.35, x, y);
      c.stroke();
      c.lineWidth = 0.9;
      for (let j = -1; j <= 1; j++) {
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x + j * 4 + Math.cos(a) * 3, y - 3 + Math.sin(a) * 4);
        c.stroke();
      }
    }
  });
  const seedMat = new T.SpriteMaterial({
    map: seedMap,
    color: 0xffedb3,
    depthWrite: false,
    transparent: true,
  });
  const seeds = Array.from({ length: 90 }, (_, i) => {
    const o = new T.Sprite(seedMat);
    scene.add(o);
    return {
      o,
      a: rand(0, TAU),
      rate: rand(0.63, 1.4),
      delay: (i / 90) * 4.4,
      size: rand(0.048, 0.118),
    };
  });
  return (t, wake, flight, density, sun) => {
    const u = ease(0, 1, wake);
    hero.p.position.set(
      tip.x + (1 - u) * (0.8 + 0.72 * Math.sin(t * 1.27)),
      tip.y + 0.015 + (1 - u) * (0.38 + 0.47 * Math.sin(t * 1.69)),
      tip.z + (1 - u) * (0.2 + 0.43 * Math.cos(t * 1.19)),
    );
    hero.p.rotation.set(
      -0.53 + 0.25 * (1 - u) * Math.sin(t * 2),
      -0.32 + (1 - u) * Math.sin(t * 1.3),
      0.12 + 0.21 * (1 - u) * Math.cos(t * 1.1),
    );
    hero.setFlap(
      0.38 + (1 - u) * 0.46 + (0.27 + (1 - u) * 0.45) * Math.sin(t * (u > 0.95 ? 3.8 : 16)),
    );
    guests.forEach(({ p, setFlap }, i) => {
      p.position.set(
        Math.sin(t * 0.24 + i * 2.59) * (2.4 + (i % 3)),
        1.55 + Math.sin(t * 0.47 + i * 1.86) * 0.48 + (i % 3) * 0.63,
        Math.cos(t * 0.28 + i * 1.97) * 2.22 - 1.77,
      );
      p.rotation.set(-0.47, Math.sin(t * 0.51 + i) * 0.96, Math.sin(t * 1.35 + i) * 0.33);
      setFlap(0.72 + 0.62 * Math.sin(t * (11 + i * 0.45) + i));
    });
    birds.forEach((fn) => fn(t, flight));
    for (let i = 0; i < N; i++) {
      const [x, y, z, phase] = motes[i];
      attr.setXYZ(
        i,
        x + 0.18 * Math.sin(t * 0.33 + phase),
        y + 0.14 * Math.sin(t * 0.43 + phase + z),
        z + 0.15 * Math.cos(t * 0.31 + phase),
      );
    }
    attr.needsUpdate = true;
    scatter.setDrawRange(0, Math.floor(N * density));
    fireflies.visible = sun > 0.58 && density > 0.005;
    fireMaterial.uniforms.t.value = t;
    fireMaterial.uniforms.level.value = ease(0.56, 1, sun);
    fireGeometry.setDrawRange(0, Math.round(130 * density));
    points.size = 0.024 + sun * sun * 0.03;
    points.opacity = 0.48 + 0.48 * sun;
    for (const { o, a, rate, delay, size } of seeds) {
      const age = flight - 5.3 - delay;
      o.visible = age >= 0 && age < 10.5;
      if (!o.visible) continue;
      const drift = age * rate;
      o.position.set(
        0.02 +
          drift * (0.29 + 0.17 * Math.sin(a)) +
          0.17 * Math.sin(age * 1.3 + a) * Math.min(1, age),
        2.45 +
          drift * (0.16 + 0.14 * Math.cos(a)) +
          0.16 * Math.sin(age * 0.96 + a) * Math.min(1, age),
        0.61 + drift * (0.14 + 0.16 * Math.sin(a * 3.2)),
      );
      o.scale.setScalar(size * ease(0, 0.35, age) * (1 - ease(8.2, 10.5, age)));
      o.center.set(0.48, 0.44);
    }
  };
}
