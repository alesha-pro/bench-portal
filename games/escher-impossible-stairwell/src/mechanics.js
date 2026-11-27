import * as T from 'three';
import { V, TAU, P, group, box, part, cyl, beam, torus, tint, bake } from './workshop.js';
import { arch } from './architecture.js';
import { routes, lamps, pools } from './sanctuary.js';

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d'),
    g = ctx.createRadialGradient(64, 64, 1, 64, 64, 64);
  for (const [s, col] of [
    [0, 'rgba(255,247,207,.97)'],
    [0.09, 'rgba(255,209,133,.78)'],
    [0.23, 'rgba(254,166,83,.28)'],
    [0.54, 'rgba(246,114,47,.085)'],
    [1, 'rgba(240,106,41,0)'],
  ])
    g.addColorStop(s, col);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new T.CanvasTexture(c);
}
function lightPool(scene, p) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  for (let i = 0; i < 12; i++) {
    const x = 64 + 37 * Math.cos((i * TAU) / 12),
      y = 64 + 40 * Math.sin((i * TAU) / 12),
      grad = ctx.createRadialGradient(x, y, 1, x, y, 23);
    grad.addColorStop(0, ['#ffb35ac0', '#67e8e8b0', '#ff8178b0'][i % 3]);
    grad.addColorStop(1, '#00000000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
  }
  const map = new T.CanvasTexture(c);
  map.colorSpace = T.SRGBColorSpace;
  const mesh = new T.Mesh(
    new T.PlaneGeometry(p.size * 2, p.size * 1.22),
    new T.MeshBasicMaterial({
      map,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      toneMapped: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.copy(p.at);
  mesh.updateMatrix();
  mesh.matrix.premultiply(p.node.matrixWorld).decompose(mesh.position, mesh.quaternion, mesh.scale);
  scene.add(mesh);
}
function pilgrim(cloth, mats) {
  const g = new T.Group();
  // A dark recess sits inside a pointed cowl. Overlapping gores break the cloak hem.
  cyl(g, 0, 0.09, 0, 0.064, 0.085, 0.16, P.iron, 8);
  cyl(g, 0, 0.223, 0, 0.095, 0.164, 0.3, cloth, 10);
  for (let k = 0; k < 7; k++) {
    const a = (TAU * k) / 7;
    const panel = part(
      g,
      new T.ConeGeometry(0.052, 0.29, 4),
      tint(cloth, 0.36),
      0.106 * Math.sin(a),
      0.216,
      0.106 * Math.cos(a),
      [1, 1, 0.74],
    );
    panel.rotation.y = a;
  }
  cyl(g, 0, 0.394, 0, 0.073, 0.126, 0.12, tint(cloth), 10);
  const hood = part(
    g,
    new T.IcosahedronGeometry(0.107, 1),
    tint(cloth),
    0,
    0.478,
    -0.004,
    [0.89, 1.23, 1],
  );
  hood.rotation.y = 0.25;
  part(g, new T.IcosahedronGeometry(0.072, 1), 0x3c3438, 0, 0.467, 0.067, [0.71, 0.91, 0.65]);
  box(g, 0.007, 0.458, 0.111, 0.044, 0.016, 0.014, 0xb68867);
  beam(g, V(0.082, 0.364, 0.012), V(0.165, 0.319, 0.09), 0.036, cloth);
  beam(g, V(0.165, 0.319, 0.09), V(0.192, 0.345, 0.157), 0.022, P.pale);
  torus(g, 0.194, 0.294, 0.158, 0.041, 0.009, P.brass, 12);
  cyl(g, 0.194, 0.198, 0.158, 0.047, 0.042, 0.111, 0xffcf89, 6, 'glow');
  cyl(g, 0.194, 0.266, 0.158, 0.019, 0.064, 0.037, P.brass, 6);
  cyl(g, 0.194, 0.13, 0.158, 0.054, 0.026, 0.026, P.iron, 6);
  return bake(g, mats);
}
// A low-resolution radiance volume lets every moving lantern actually illuminate
// nearby stone. The halo and the surface light share the same world-space flame.
function lanternVolume(material) {
  const n = 56,
    cell = 0.34,
    corner = V(-9.52, -8.1, -9.52),
    data = new Uint8Array(n * n * n);
  const tex = new T.Data3DTexture(data, n, n, n);
  tex.format = T.RedFormat;
  tex.minFilter = tex.magFilter = T.LinearFilter;
  tex.needsUpdate = true;
  const heat = { value: 0.78 },
    previous = material.onBeforeCompile;
  material.onBeforeCompile = function (shader, ...args) {
    previous.call(this, shader, ...args);
    shader.uniforms.lanternLight = { value: tex };
    shader.uniforms.heat = heat;
    shader.fragmentShader =
      'uniform highp sampler3D lanternLight;uniform float heat;\n' + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `float lamplight=texture(lanternLight,(vWorld-vec3(-9.52,-8.1,-9.52))/19.04).r;
      outgoingLight+=diffuseColor.rgb*lamplight*mix(vec3(.24,.58,1.),vec3(2.0,.65,.12),heat);
      #include <opaque_fragment>`,
    );
  };
  return (points, warm) => {
    data.fill(0);
    heat.value = warm;
    for (let j = 0; j < points.length; j += 3) {
      const cx = (points[j] - corner.x) / cell - 0.5,
        cy = (points[j + 1] - corner.y) / cell - 0.5,
        cz = (points[j + 2] - corner.z) / cell - 0.5;
      for (let z = Math.max(0, Math.floor(cz) - 3); z <= Math.min(n - 1, cz + 3); z++)
        for (let y = Math.max(0, Math.floor(cy) - 3); y <= Math.min(n - 1, cy + 3); y++)
          for (let x = Math.max(0, Math.floor(cx) - 3); x <= Math.min(n - 1, cx + 3); x++) {
            const d2 = (x - cx) ** 2 + (y - cy) ** 2 + (z - cz) ** 2;
            if (d2 > 10) continue;
            const i = x + n * (y + n * z);
            data[i] = Math.min(255, data[i] + Math.max(0, Math.round(215 / (1 + d2 * 1.35) - 13)));
          }
    }
    tex.needsUpdate = true;
  };
}
function procession(scene, mats) {
  const illuminate = lanternVolume(mats.surface);
  const colors = [0x8f4342, 0x385965, 0xb77c46, 0x456d64, 0x65506a],
    walkers = [];
  const prototypes = colors.map((c) => pilgrim(c, mats));
  let index = 0;
  for (const r of routes)
    for (let j = 0; j < r.people; j++) {
      walkers.push({
        r,
        model: index % colors.length,
        slot: Math.floor(index / colors.length),
        phase: (j + 0.19 + (index % 3) * 0.13) / r.people,
        routeSpeed: 0.29 + r.len * 0.038,
      });
      index++;
    }
  const batches = prototypes.map((p, i) =>
    p.children.map((m) => {
      const inst = new T.InstancedMesh(
        m.geometry,
        m.material,
        walkers.filter((w) => w.model === i).length,
      );
      inst.instanceMatrix.setUsage(T.DynamicDrawUsage);
      inst.frustumCulled = false;
      inst.receiveShadow = true;
      scene.add(inst);
      return inst;
    }),
  );
  const aura = new T.BufferGeometry(),
    glowPositions = new Float32Array((walkers.length + lamps.length) * 3);
  const sizes = new Float32Array(glowPositions.length / 3).fill(0.86);
  lamps.forEach((l, i) => {
    l.getWorldPosition(new T.Vector3()).toArray(glowPositions, (walkers.length + i) * 3);
    sizes[walkers.length + i] = 1.62;
  });
  aura.setAttribute('position', new T.BufferAttribute(glowPositions, 3));
  aura.setAttribute('diameter', new T.BufferAttribute(sizes, 1));
  const light = new T.ShaderMaterial({
    uniforms: { halo: { value: glowTexture() }, pixels: { value: 60 }, warm: { value: 0.75 } },
    vertexShader:
      'attribute float diameter;uniform float pixels;uniform float warm;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=diameter*pixels*(.64+.66*warm);}',
    fragmentShader:
      'uniform sampler2D halo;uniform float warm;void main(){vec4 s=texture2D(halo,gl_PointCoord);gl_FragColor=vec4(mix(vec3(.66,.83,1.),s.rgb,warm),s.a*(.48+.48*warm));}',
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
  });
  const glows = new T.Points(aura, light);
  glows.frustumCulled = false;
  glows.renderOrder = 6;
  scene.add(glows);
  const body = new T.Object3D(),
    pos = new T.Vector3();
  const footGeom = new T.CircleGeometry(1, 12).rotateX(-Math.PI / 2);
  const feet = new T.InstancedMesh(
    footGeom,
    new T.MeshBasicMaterial({
      color: 0x4b3641,
      transparent: true,
      opacity: 0.29,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    }),
    walkers.length,
  );
  feet.frustumCulled = false;
  scene.add(feet);
  return (time, warm, pixels) => {
    walkers.forEach(({ r, model, slot, phase, routeSpeed }, i) => {
      const inset = Math.min(0.2, r.len * 0.08),
        len = r.len - 2 * inset,
        radius = Math.min(r.w * 0.235, 0.25);
      const turn = Math.PI * radius,
        cycle = 2 * (len + turn),
        travel = (time * routeSpeed + phase * cycle) % cycle;
      let x, z, heading;
      if (travel < len) {
        x = radius;
        z = inset + travel;
        heading = 0;
      } else if (travel < len + turn) {
        const a = (travel - len) / radius;
        x = Math.cos(a) * radius;
        z = inset + len + Math.sin(a) * radius;
        heading = -a;
      } else if (travel < 2 * len + turn) {
        x = -radius;
        z = inset + len - (travel - len - turn);
        heading = Math.PI;
      } else {
        const a = (travel - 2 * len - turn) / radius;
        x = -Math.cos(a) * radius;
        z = inset - Math.sin(a) * radius;
        heading = Math.PI - a;
      }
      z = T.MathUtils.clamp(z, 0.006, r.len - 0.006);
      const t = z / r.len,
        step = t * r.n,
        f = step % 1;
      const tread = ((Math.floor(step) + 1 + T.MathUtils.smoothstep(f, 0.65, 1)) * r.rise) / r.n;
      const gait = time * routeSpeed * 17 + phase * 30;
      const stature = Math.min(1, r.w / 0.99);
      body.position.set(x, tread + 0.01, z);
      body.rotation.set(0, heading, 0);
      body.scale.set(0.143 * stature, 1, 0.112 * stature);
      body.updateMatrix();
      feet.setMatrixAt(i, body.matrix.clone().premultiply(r.node.matrixWorld));
      body.position.y += 0.013 * Math.abs(Math.sin(gait));
      body.rotation.z = 0.039 * Math.sin(gait);
      body.scale.setScalar(stature);
      body.updateMatrix();
      const matrix = body.matrix.clone().premultiply(r.node.matrixWorld);
      batches[model].forEach((m) => m.setMatrixAt(slot, matrix));
      pos
        .set(0.194, 0.199, 0.158)
        .applyMatrix4(matrix)
        .toArray(glowPositions, i * 3);
    });
    illuminate(glowPositions, warm);
    batches.flat().forEach((b) => (b.instanceMatrix.needsUpdate = true));
    feet.instanceMatrix.needsUpdate = true;
    aura.attributes.position.needsUpdate = true;
    light.uniforms.warm.value = warm;
    light.uniforms.pixels.value = pixels;
  };
}
function waterworks(scene, mats) {
  const g = new T.Group(),
    wheel = new T.Group(),
    x = 3.1;
  const path = [
    V(x, 2.71, -1.82),
    V(x, 2.69, -0.91),
    V(x, 1.6, -0.78),
    V(x, 1.57, 0.63),
    V(x, 0.48, 0.74),
    V(x, 0.44, 2.27),
    V(x, -0.73, 2.41),
    V(x, -0.8, 4.44),
  ];
  const tracks = [path];
  for (let i = 0; i < path.length - 1; i += 2) {
    const a = path[i],
      b = path[i + 1],
      len = b.z - a.z;
    box(g, x, a.y - 0.19, (a.z + b.z) / 2, 0.53, 0.27, len + 0.05, P.teal, 'stone');
    for (const sign of [-1, 1])
      box(g, x + sign * 0.268, a.y - 0.015, (a.z + b.z) / 2, 0.065, 0.17, len + 0.08, P.pale);
    if (i < 6)
      arch(g, x, a.y - 1.37, (a.z + b.z) / 2, Math.max(len, 0.89), 1.1, 0.39, Math.PI / 2, P.rose);
  }
  // The return channel ascends behind the terraced spillway.
  const ret = [V(x, -0.79, 4.47), V(3.85, -0.79, 4.47), V(3.85, 2.72, -1.82), V(x, 2.72, -1.82)];
  tracks.push(ret);
  for (let i = 0; i < 3; i++) {
    const a = ret[i],
      b = ret[i + 1],
      mid = a.clone().lerp(b, 0.5),
      dir = b.clone().sub(a);
    const bar = box(g, mid.x, mid.y - 0.085, mid.z, 0.24, 0.15, dir.length(), P.blue);
    bar.quaternion.setFromUnitVectors(V(0, 0, 1), dir.normalize());
    for (const side of [-1, 1]) {
      const offset = V()
        .crossVectors(dir, V(0, 1, 0))
        .normalize()
        .multiplyScalar(0.13 * side);
      beam(g, a.clone().add(offset), b.clone().add(offset), 0.038, P.brass, 6);
    }
  }
  for (const sx of [-1, 1]) {
    const ring = torus(wheel, sx * 0.19, 0, 0, 0.82, 0.052, P.brass, 48);
    ring.rotation.y = Math.PI / 2;
    torus(wheel, sx * 0.19, 0, 0, 0.63, 0.024, P.gold, 48).rotation.y = Math.PI / 2;
    for (let j = 0; j < 12; j++) {
      const a = (j * TAU) / 12,
        dy = Math.cos(a),
        dz = Math.sin(a);
      beam(wheel, V(sx * 0.19, 0, 0), V(sx * 0.19, dy * 0.8, dz * 0.8), 0.037, P.umber);
      if (sx === 1) {
        const paddle = box(
          wheel,
          0,
          0.81 * dy,
          0.81 * dz,
          0.53,
          0.116,
          0.24,
          j % 2 ? P.brass : P.umber,
        );
        paddle.rotation.x = a;
      }
    }
  }
  beam(wheel, V(-0.5, 0, 0), V(0.5, 0, 0), 0.105, P.brass, 16);
  const rotating = bake(wheel, mats);
  rotating.position.set(x, -1.59, 4.55);
  scene.add(rotating);
  for (const sign of [-1, 1])
    beam(g, V(x + sign * 0.46, -1.59, 4.56), V(x + sign * 0.46, -2.19, 3.73), 0.09, P.brass);
  scene.add(bake(g, mats));

  const water = new T.ShaderMaterial({
    side: T.DoubleSide,
    uniforms: { t: { value: 0 } },
    vertexShader:
      'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec2 v;uniform float t;void main(){
      float lane=sin(v.x*52.+sin(v.y*6.-t*2.)*.6);float wave=.5+.5*sin(v.y*16.-t*5.+lane*1.8);
      float lace=smoothstep(.79,.99,wave)*(.4+.6*pow(.5+.5*sin(v.x*108.),2.));
      float edge=pow(abs(v.x*2.-1.),6.);
      gl_FragColor=vec4(mix(vec3(.17,.52,.54),vec3(.73,.94,.83),.20*wave+.67*lace+.18*edge),1.);}`,
  });
  tracks.forEach((pts, idx) => {
    let distance = 0;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1],
        b = pts[i],
        dir = b.clone().sub(a),
        length = dir.length();
      const across = Math.abs(dir.x) > 0.4 ? V(0, 0, 1) : V(1, 0, 0);
      across.multiplyScalar(idx ? 0.095 : 0.231);
      const verts = [
        a.clone().sub(across),
        a.clone().add(across),
        b.clone().add(across),
        b.clone().sub(across),
      ];
      const geo = new T.BufferGeometry().setFromPoints(verts);
      geo.setIndex([0, 1, 2, 0, 2, 3]);
      geo.setAttribute(
        'uv',
        new T.Float32BufferAttribute(
          [0, distance, 1, distance, 1, distance + length, 0, distance + length],
          2,
        ),
      );
      const mesh = new T.Mesh(geo, water);
      scene.add(mesh);
      distance += length;
    }
  });
  const foam = new T.InstancedMesh(
    new T.IcosahedronGeometry(1),
    new T.MeshBasicMaterial({ color: 0xc4ebe2 }),
    54,
  );
  const drop = new T.Object3D();
  foam.frustumCulled = false;
  scene.add(foam);
  return (t) => {
    water.uniforms.t.value = t;
    rotating.rotation.x = t * 0.61;
    for (let i = 0; i < 54; i++) {
      const age = (t * (0.83 + (i % 5) * 0.13) + i * 0.618034) % 1;
      if (i < 36) {
        const k = (i % 3) * 2 + 2,
          p = path[k],
          theta = i * 2.39996;
        drop.position.set(
          p.x + 0.19 * Math.sin(i * 131) + 0.11 * age * Math.cos(theta),
          p.y + 0.14 * 4 * age * (1 - age),
          p.z + 0.1 + 0.19 * age,
        );
        drop.scale.setScalar(0.012 + 0.016 * Math.sin(Math.PI * age));
      } else {
        const u = (t * 0.095 + i / 18) % 1;
        drop.position.lerpVectors(ret[1], ret[2], u);
        drop.position.y += 0.025;
        drop.position.x += 0.044 * Math.sin(i * 7.1);
        drop.scale.set(0.014, 0.01, 0.048);
      }
      drop.updateMatrix();
      foam.setMatrixAt(i, drop.matrix);
    }
    foam.instanceMatrix.needsUpdate = true;
  };
}
function relics(scene, mats) {
  const list = [];
  for (const [x, y, z, s] of [
    [-6.15, 1.65, -1.7, 0.45],
    [5.82, 3.33, -3.9, 0.35],
    [-0.5, 5.24, -2.14, 0.29],
  ]) {
    const g = new T.Group();
    part(g, new T.OctahedronGeometry(1), P.teal, 0, 0, 0, [s, s * 1.98, s]);
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2,
        point = V(s * Math.cos(a), 0, s * Math.sin(a));
      for (const sign of [-1, 1]) beam(g, V(0, sign * s * 1.98, 0), point, 0.017, P.gold);
    }
    const inner = new T.OctahedronGeometry(1);
    for (let k = 0; k < 4; k++) {
      const angle = ((k + 0.5) * Math.PI) / 2,
        facet = group(g, Math.cos(angle) * s * 0.44, 0, Math.sin(angle) * s * 0.44);
      facet.rotation.y = -angle;
      part(facet, inner, 0x80ded1, 0, 0, 0, [s * 0.295, s * 0.82, s * 0.295], 'glow');
    }
    for (let k = 0; k < 3; k++)
      torus(g, 0, (k - 1) * s * 0.32, 0, s * (0.79 + 0.1 * (k % 2)), 0.012, P.gold, 24).rotation.x =
        Math.PI / 2;
    const ring = torus(g, 0, 0, 0, s * 1.42, 0.013, P.gold);
    ring.rotation.x = 1.2;
    const m = bake(g, mats);
    m.position.set(x, y, z);
    scene.add(m);
    list.push({ m, y, phase: x });
  }
  const pends = [];
  for (const [x, y, z, roll] of [
    [-4.44, 6.25, -0.85, 0],
    [4.1, 0.62, -3.85, -Math.PI / 2],
  ]) {
    const holder = group(scene, x, y, z);
    holder.rotation.z = roll;
    const p = new T.Group();
    beam(p, V(0, 0, 0), V(0, -1.07, 0), 0.02, P.brass);
    part(p, new T.OctahedronGeometry(0.2), P.gold, 0, -1.22, 0, [0.87, 1.34, 0.87]);
    torus(p, 0, -1.2, 0, 0.255, 0.022, P.brass);
    const m = bake(p, mats);
    holder.add(m);
    pends.push(m);
  }
  return (t) => {
    for (const { m, y, phase } of list) {
      m.position.y = y + 0.105 * Math.sin(0.75 * t + phase);
      m.rotation.y = 0.38 * t + phase;
    }
    pends.forEach((p, i) => (p.rotation.z = 0.43 * Math.sin(t * 1.67 + i * 1.91)));
  };
}
export function mechanics(scene, mats) {
  const walkers = procession(scene, mats),
    water = waterworks(scene, mats),
    relic = relics(scene, mats);
  pools.forEach((p) => lightPool(scene, p));
  return (t, warm, pixels) => {
    walkers(t, warm, pixels);
    water(t);
    relic(t);
  };
}
