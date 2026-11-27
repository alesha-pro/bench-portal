import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { v, rng, range, clamp, mix, standard } from './core.js';
import { nodes, edges, adj, rooms, relief } from './geology.js';

export const population = 264;
const clock = { value: 0 };
const brown = new T.Color(),
  rig = new T.Object3D();
function insect(queen = false) {
  const pieces = [],
    sphere = new T.SphereGeometry(1, queen ? 24 : 10, queen ? 14 : 7),
    up = v(0, 1, 0);
  function part(g, color, motion = [0, 0, 0]) {
    g = g.index ? g.toNonIndexed() : g;
    const p = g.attributes.position,
      n = p.count,
      c = [],
      j = [];
    brown.set(color);
    for (let i = 0; i < n; i++) {
      c.push(brown.r, brown.g, brown.b);
      j.push(...(typeof motion === 'function' ? motion(p.getX(i), p.getY(i), p.getZ(i)) : motion));
    }
    g.setAttribute('color', new T.Float32BufferAttribute(c, 3));
    g.setAttribute('joint', new T.Float32BufferAttribute(j, 3));
    pieces.push(g);
  }
  function ball(x, y, z, sx, sy, sz, color, rot = 0) {
    let g = sphere.clone().scale(sx, sy, sz).rotateZ(rot).translate(x, y, z);
    part(g, color);
  }
  function stick(a, b, r1, r2, c, m) {
    let d = b.clone().sub(a),
      g = new T.CylinderGeometry(r2, r1, d.length(), queen ? 8 : 5, 1, false);
    g.applyQuaternion(new T.Quaternion().setFromUnitVectors(up, d.normalize())).translate(
      ...a.clone().lerp(b, 0.5).toArray(),
    );
    part(g, c, m);
  }
  // A longitudinal profile controls taper, segment overlap and the narrow petiole.
  function shell(profile, width, height, color, centerZ) {
    const points = profile.map(([x, r]) => new T.Vector2(r, x));
    let g = new T.LatheGeometry(points, queen ? 42 : 20);
    g.rotateZ(-Math.PI / 2)
      .scale(1, width, height)
      .translate(0, 0, centerZ);
    part(g, color);
  }
  const ebony = queen ? 0x231918 : 0x261b19,
    chest = queen ? 0x683825 : 0x75381e,
    leg = 0x4b2c1f;
  const back = queen ? -1.29 : -0.92,
    front = -0.31,
    bodyLen = front - back,
    gr = queen ? 0.269 : 0.174;
  const profile = [
    [0, 0.015],
    [0.035, 0.32],
    [0.115, 0.66],
    [0.28, 0.92],
    [0.48, 1],
    [0.68, 0.94],
    [0.84, 0.76],
    [0.94, 0.46],
    [1, 0.045],
  ];
  const dorsal = (u) => {
    let i = 1;
    while (i < profile.length - 1 && profile[i][0] < u) i++;
    let [a, h] = profile[i - 1],
      [b, k] = profile[i];
    return mix(h, k, (u - a) / (b - a));
  };
  shell(
    profile.map(([u, r]) => [back + bodyLen * u, gr * r]),
    1,
    0.89,
    ebony,
    0.215,
  );
  for (const u of [0.19, 0.36, 0.54, 0.71, 0.85]) {
    const x = back + bodyLen * u,
      rr = gr * dorsal(u);
    shell(
      [
        [x - 0.02, rr * 0.985],
        [x - 0.012, rr * 1.011],
        [x - 0.005, rr * 1.016],
        [x + 0.002, rr * 1.005],
        [x + 0.007, rr * 0.981],
      ],
      1,
      0.89,
      0x533224,
      0.215,
    );
  }
  stick(v(-0.42, 0, 0.2), v(-0.03, 0, 0.21), 0.039, 0.047, leg);
  ball(-0.267, 0, 0.231, 0.072, 0.063, 0.091, 0x714028);
  ball(-0.151, 0, 0.236, 0.065, 0.061, 0.072, 0x7c4830);
  shell(
    [
      [-0.105, 0.04],
      [-0.085, 0.087],
      [-0.04, 0.123],
      [0.021, 0.139],
      [0.084, 0.155],
      [0.16, queen ? 0.18 : 0.15],
      [0.228, 0.145],
      [0.3, 0.087],
      [0.314, 0.047],
    ],
    1,
    0.82,
    chest,
    0.23,
  );
  ball(0.027, 0, 0.3, 0.071, 0.086, 0.074, 0x69331f);
  stick(v(0.29, 0, 0.23), v(0.42, 0, 0.249), 0.053, 0.065, leg);
  shell(
    [
      [0.37, 0.076],
      [0.39, 0.131],
      [0.43, 0.161],
      [0.52, 0.182],
      [0.6, 0.179],
      [0.654, 0.146],
      [0.7, 0.114],
      [0.727, 0.061],
    ],
    1,
    0.81,
    queen ? 0x783d25 : 0x844224,
    0.239,
  );
  for (const side of [-1, 1]) {
    ball(0.563, side * 0.139, 0.305, 0.061, 0.043, 0.044, 0x161411, -0.26 * side);
    ball(0.572, side * 0.158, 0.338, 0.015, 0.01, 0.008, 0x999079);
    const m = v(0.681, side * 0.095, 0.228),
      joint = v(0.792, side * 0.118, 0.192),
      tip = v(0.844, side * 0.036, 0.18);
    stick(m, joint, 0.047, 0.029, 0x512b1c);
    stick(joint, tip, 0.031, 0.003, 0x452c1c);
    const a = v(0.621, side * 0.11, 0.346),
      b = v(0.786, side * 0.248, 0.41),
      elbow = v(0.834, side * 0.391, 0.47),
      c = v(1.097, side * 0.449, 0.398);
    const am = (x, y) => [side, Math.max(x - 0.58, 0) * 0.3, 1];
    stick(a, b, 0.02, 0.014, leg, am);
    stick(b, elbow, 0.014, 0.012, leg, am);
    stick(elbow, c, 0.018, 0.008, 0x8a5433, am);
    for (let k = 0; k < 3; k++) {
      const a = v(0.194 - 0.113 * k, side * 0.081, 0.21),
        b = v(0.26 - 0.19 * k, side * (0.22 + 0.022 * k), 0.278);
      const knee = v(0.33 - 0.29 * k, side * (0.4 + 0.04 * k), 0.26),
        heel = v(0.5 - 0.445 * k, side * (0.54 + 0.032 * k), 0.071);
      const foot = heel.clone().add(v(0.12 - 0.11 * k, side * 0.055, -0.028));
      const move = (x, y) => [
        (k % 2 === 0 ? 1 : -1) * side,
        clamp((Math.abs(y) - 0.09) * 0.36, 0, 0.19),
        0,
      ];
      stick(a, b, 0.033, 0.026, chest, move);
      stick(b, knee, 0.028, 0.02, chest, move);
      stick(knee, heel, 0.021, 0.014, leg, move);
      stick(heel, foot, 0.014, 0.007, 0x815134, move);
    }
  }
  if (queen) {
    // Fine amber setae catch rim light across the gaster and cheeks.
    for (let k = 0; k < 280; k++) {
      const u = range(0.07, 0.91),
        a = range(0, Math.PI * 2),
        r = gr * dorsal(u),
        x = back + bodyLen * u;
      const n = v(-0.39, Math.cos(a), 0.89 * Math.sin(a)).normalize(),
        at = v(x, r * Math.cos(a), 0.215 + 0.89 * r * Math.sin(a));
      stick(at, at.clone().addScaledVector(n, range(0.012, 0.029)), 0.0022, 0.00035, 0xa07c4d);
    }
  }
  let g = mergeGeometries(pieces);
  pieces.forEach((g) => g.dispose());
  return g;
}
function animatedMaterial() {
  let m = standard(0xffffff, 0.32, 0.2, { vertexColors: true });
  m.onBeforeCompile = (s) => {
    s.uniforms.tWalk = clock;
    s.vertexShader = 'varying vec3 cuticle;\n' + s.vertexShader;
    s.fragmentShader = 'varying vec3 cuticle;\n' + s.fragmentShader;
    s.fragmentShader = s.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
      float pore=fract(sin(dot(floor(cuticle*490.),vec3(15.13,37.7,61.17)))*4567.93);
      float ridge=sin(cuticle.x*245.+1.45*sin(cuticle.y*87.)+.66*sin(cuticle.z*105.));
      diffuseColor.rgb*=.84+.16*pore+.078*ridge;`,
    );

    s.vertexShader = s.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nattribute vec3 joint; attribute float phase; uniform float tWalk;',
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
      cuticle=position; float gait=sin(tWalk*13.5+phase)*joint.x;
      transformed.x+=gait*joint.y;
      transformed.z+=max(0.,cos(tWalk*13.5+phase)*joint.x)*joint.y*.50;
      transformed.y+=joint.z*joint.y*sin(tWalk*5.1+phase)*.35;
      transformed.z+=joint.z*joint.y*cos(tWalk*4.4+phase)*.4;`,
      );
  };
  return m;
}
function instance(scene, geo, mat, n) {
  let m = new T.InstancedMesh(geo, mat, n);
  m.frustumCulled = false;
  m.instanceMatrix.setUsage(T.DynamicDrawUsage);
  scene.add(m);
  return m;
}
function cyclicRoute(start) {
  let node = start,
    previous = -1,
    forward = [];
  for (let k = 0; k < 10; k++) {
    let choices = adj[node].filter((i) => i !== previous);
    if (!choices.length) choices = adj[node];
    let i = choices[Math.floor(rng() * choices.length)],
      e = edges[i];
    forward.push({ i, from: node });
    node = e.a === node ? e.b : e.a;
    previous = i;
  }
  let back = forward
    .slice()
    .reverse()
    .map(({ i, from }) => ({ i, from: edges[i].a === from ? edges[i].b : edges[i].a }));
  return route([...forward, ...back]);
}
function route(steps) {
  let sum = 0;
  for (const s of steps) {
    s.begin = sum;
    sum += edges[s.i].len;
    s.end = sum;
  }
  return { steps, len: sum };
}
function locate(r, dist) {
  let d = ((dist % r.len) + r.len) % r.len;
  let s = r.steps.find((s) => s.end > d) || r.steps[r.steps.length - 1],
    e = edges[s.i];
  let f = (d - s.begin) / e.len,
    dir = s.from === e.a ? 1 : -1;
  return { i: s.i, from: s.from, f, dir };
}
function point(p, lane) {
  const e = edges[p.i],
    t = clamp((p.dir > 0 ? p.f : 1 - p.f) * 54, 0, 53.9999);
  const a = e.samples[Math.floor(t)],
    b = e.samples[Math.floor(t) + 1],
    k = t % 1,
    ang = Math.atan2(b.y - a.y, b.x - a.x) + (p.dir < 0 ? Math.PI : 0);
  return [mix(a.x, b.x, k) - Math.sin(ang) * lane, mix(a.y, b.y, k) + Math.cos(ang) * lane, ang];
}
function shortest(start, end) {
  const queue = [start],
    parent = new Map([[start, null]]);
  for (let k = 0; k < queue.length; k++) {
    const n = queue[k];
    if (n === end) break;
    for (const i of adj[n]) {
      const e = edges[i],
        to = e.a === n ? e.b : e.a;
      if (!parent.has(to)) {
        parent.set(to, { i, from: n });
        queue.push(to);
      }
    }
  }
  const way = [];
  for (let n = end; n !== start; ) {
    const step = parent.get(n);
    way.unshift(step);
    n = step.from;
  }
  return way;
}
function transform(m, i, x, y, z, a, s, sx = 1, sy = 1, sz = 1, roll = 0) {
  rig.position.set(x, y, z);
  rig.rotation.set(roll, 0, a, 'ZYX');
  rig.scale.set(s * sx, s * sy, s * sz);
  rig.updateMatrix();
  m.setMatrixAt(i, rig.matrix);
}
export function colony(scene) {
  const g = insect(),
    mat = animatedMaterial();
  const phases = new Float32Array(population),
    workers = instance(scene, g, mat, population);
  const seeds = instance(scene, new T.SphereGeometry(1, 9, 6), standard(0xe3a74c, 0.45), population);
  const drops = instance(
    scene,
    new T.SphereGeometry(1, 10, 7),
    standard(0xf5ab34, 0.14, 0.32, { emissive: 0x974700, emissiveIntensity: 0.18 }),
    population,
  );
  const leafShape = new T.Shape();
  leafShape.moveTo(-1, 0);
  leafShape.quadraticCurveTo(-0.2, 0.75, 1, 0.22);
  leafShape.quadraticCurveTo(0.18, -0.58, -1, 0);
  const leaves = instance(
    scene,
    new T.ShapeGeometry(leafShape, 6),
    standard(0x86be46, 0.47, 0, { side: T.DoubleSide }),
    population,
  );
  const ants = [];
  for (let i = 0; i < population; i++) {
    let path = cyclicRoute(Math.floor(rng() * 28));
    phases[i] = range(0, 25);
    ants.push({
      path,
      offset: rng() * path.len,
      speed: range(0.115, 0.33),
      size: range(0.103, 0.168),
      lane: range(-0.037, 0.037),
      cargo: rng() < 0.4 ? Math.floor(rng() * 3) : -1,
    });
    workers.setColorAt(i, new T.Color().setScalar(range(0.66, 1.18)));
  }
  g.setAttribute('phase', new T.InstancedBufferAttribute(phases, 1));
  const qg = insect(true);
  qg.setAttribute('phase', new T.InstancedBufferAttribute(new Float32Array([1.33]), 1));
  let queen = instance(scene, qg, animatedMaterial(), 1);
  const feast = instance(
    scene,
    new T.SphereGeometry(1, 24, 14),
    standard(0xffb537, 0.13, 0.34, { emissive: 0xbc5800, emissiveIntensity: 0.32 }),
    1,
  );
  let event = null;
  function follow(ant, i, t) {
    const r = event?.routes[i];
    if (!r || t < event.t) return { edge: locate(ant.path, ant.offset + t * ant.speed) };
    const d = r.offset + (t - event.t) * ant.speed * 2.9;
    if (d < 0 && r.start) {
      const n = nodes[r.depart],
        k = clamp(1 + d / r.approach, 0, 1),
        [x, y] = r.start;
      return { local: [mix(x, n.x, k), mix(y, n.y, k), Math.atan2(n.y - y, n.x - x)], depart: r.depart };
    }
    if (d < r.track.len) return { edge: locate(r.track, d) };
    const p = nodes[event.id],
      u = i * 2.399963 + 0.1 * Math.sin(t + i),
      rr = 0.15 + (0.17 * (i % 7)) / 7;
    const x = p.x + Math.cos(u) * rr,
      y = p.y + Math.sin(u) * rr * 0.61;
    const walk = (d - r.track.len) / Math.max(0.001, rr),
      k = clamp(walk, 0, 1);
    return { local: [mix(p.x, x, k), mix(p.y, y, k), u + Math.PI], depart: event.id };
  }
  function drop(t, view) {
    const available = rooms.filter(([id]) => id !== event?.id);
    const distance = (id) => Math.hypot(nodes[id].x - view.x, nodes[id].y - view.y);
    const [id] = available.reduce((a, b) => (distance(a[0]) < distance(b[0]) ? a : b));
    const routes = ants.map((ant, i) => {
      if (i % 5 !== 0) return null;
      const present = follow(ant, i, t);
      if (present.edge) {
        const p = present.edge,
          e = edges[p.i],
          next = e.a === p.from ? e.b : e.a;
        return { track: route([{ i: p.i, from: p.from }, ...shortest(next, id)]), offset: p.f * e.len };
      }
      const [x, y] = present.local,
        n = nodes[present.depart],
        approach = Math.max(0.001, Math.hypot(n.x - x, n.y - y));
      return {
        track: route(shortest(present.depart, id)),
        start: [x, y],
        approach,
        offset: -approach,
        depart: present.depart,
      };
    });
    event = { t, id, routes };
  }
  function update(t) {
    clock.value = t;
    let counts = [0, 0, 0];
    const qs = nodes[19];
    transform(
      queen,
      0,
      qs.x + 0.035,
      qs.y + 0.058,
      -0.074,
      0.08 + 0.015 * Math.sin(t * 0.65),
      0.65,
      1 + 0.012 * Math.cos(t * 1.5),
      1,
      1,
      -0.33 + 0.018 * Math.sin(t * 0.85),
    );
    queen.instanceMatrix.needsUpdate = true;
    feast.count = event ? 1 : 0;
    if (event) {
      let p = nodes[event.id],
        fall = clamp((t - event.t) / 0.44, 0, 1);
      transform(feast, 0, p.x, p.y + 0.19 * (1 - fall * fall), -0.07, 0, 0.105, 1.23, 0.86, 1);
      feast.instanceMatrix.needsUpdate = true;
    }
    ants.forEach((ant, i) => {
      const state = follow(ant, i, t);
      const [x, y, angle] = state.local || point(state.edge, ant.lane);
      const z = relief(x, y) + 0.024,
        s = ant.size;
      transform(workers, i, x, y, z, angle, s);
      if (ant.cargo >= 0) {
        const a = angle + 0.32,
          k = ant.cargo,
          sz = s * (k === 1 ? 0.4 : 0.27);
        transform(
          [seeds, leaves, drops][k],
          counts[k]++,
          x + Math.cos(angle) * s * 0.72,
          y + Math.sin(angle) * s * 0.72,
          z + s * 0.3,
          a,
          sz,
          k === 0 ? 1.65 : 1,
          k === 0 ? 0.72 : 1,
          0.82,
        );
      }
    });
    workers.instanceMatrix.needsUpdate = true;
    [seeds, leaves, drops].forEach((m, i) => {
      m.count = counts[i];
      m.instanceMatrix.needsUpdate = true;
    });
  }
  return {
    update,
    drop,
    reset: () => {
      event = null;
    },
  };
}
