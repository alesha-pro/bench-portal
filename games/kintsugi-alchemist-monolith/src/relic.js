import * as T from "three";
import {
  TAU,
  clamp,
  smooth,
  fract,
  random,
  geometry,
  canvasMap,
} from "./core.js";

import { moltenFlow } from "./molten.js";

const W = 6.45,
  H = 2.65,
  rng = random(711);
const profile = new T.SplineCurve(
  [
    [0.0001, -1.24],
    [0.53, -1.24],
    [0.55, -1.2],
    [0.55, -1.13],
    [0.61, -1.105],
    [0.64, -1.04],
    [0.78, -0.87],
    [1.02, -0.55],
    [1.22, -0.16],
    [1.28, 0.21],
    [1.23, 0.52],
    [1.09, 0.77],
    [0.88, 0.95],
    [0.62, 1.09],
    [0.48, 1.16],
    [0.46, 1.24],
    [0.48, 1.3],
    [0.515, 1.32],
    [0.51, 1.36],
  ].map((v) => new T.Vector2(...v)),
);
// Sample by meridian arc length to give the lip, shoulder and foot continuous curvature.
const curve = Array.from({ length: 1025 }, (_, i) =>
  profile.getPointAt(i / 1024),
);
function section(t) {
  const f = clamp(t) * 1024,
    i = Math.min(1023, Math.floor(f));
  return curve[i].clone().lerp(curve[i + 1], f - i);
}
function surface(x, y, depth = 0) {
  let a = (x / W) * TAU,
    v = clamp(y / H);
  const envelope = Math.sin(v * Math.PI);
  const angle =
    a +
    0.02 * Math.sin(12 * v + 2 * a) +
    0.01 * Math.cos(a * 9 - 29 * v) +
    0.003 * Math.sin(a * 29 + 89 * v);
  v = clamp(
    v +
      envelope *
        (0.0045 * Math.asin(Math.sin(a * 17 - v * 57)) +
          0.019 * Math.sin(a * 3 + v * 10) +
          0.008 * Math.cos(a * 9 - 23 * v) +
          0.0028 * Math.sin(a * 30 + v * 75)),
  );
  const pt = section(v),
    lo = section(v - 0.0007),
    hi = section(v + 0.0007);
  const normal = new T.Vector3(
    Math.sin(angle) * (hi.y - lo.y),
    lo.x - hi.x,
    Math.cos(angle) * (hi.y - lo.y),
  ).normalize();
  const radius = depth < 0 ? Math.max(0.0001, pt.x + depth) : pt.x;
  const pos = new T.Vector3(
    Math.sin(angle) * radius,
    pt.y,
    Math.cos(angle) * radius,
  );
  if (depth < 0) pos.y += -depth * 0.6 * (1 - smooth(-1.24, -0.93, pt.y));
  else pos.addScaledVector(normal, depth);
  return { pos, normal, uv: [angle / TAU + 0.62, clamp((pt.y + 1.24) / 2.6)] };
}
function clip(poly, s, t) {
  const dx = t.x - s.x,
    dy = t.y - s.y,
    h = (t.lengthSq() - s.lengthSq()) * 0.5;
  const side = (v) => v.x * dx + v.y * dy - h;
  const out = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i],
      b = poly[(i + 1) % poly.length],
      da = side(a),
      db = side(b);
    if (da <= 0) out.push(a);
    if (da < 0 !== db < 0) out.push(a.clone().lerp(b, da / (da - db)));
  }
  return out;
}
function makeCells() {
  const seeds = [];
  for (let row = 0; row < 5; row++)
    for (let col = 0; col < 8; col++) {
      seeds.push(
        new T.Vector2(
          ((col + 0.18 + 0.67 * rng()) * W) / 8,
          ((row + 0.05 + 0.9 * rng()) * H) / 5,
        ),
      );
    }
  return seeds.map((s, idx) => {
    let p = [
      [s.x - W / 2, 0],
      [s.x + W / 2, 0],
      [s.x + W / 2, H],
      [s.x - W / 2, H],
    ].map((a) => new T.Vector2(...a));
    seeds.forEach((t, i) => {
      for (let k = -1; k <= 1; k++) {
        if ((i !== idx || k !== 0) && p.length)
          p = clip(p, s, new T.Vector2(t.x + k * W, t.y));
      }
    });
    return { s, p };
  });
}
function crackle() {
  // Draw each boundary in the same direction on both of its cells, so the
  // kiln crazing wanders without drawing two different cracks along one cut.
  const r = random(123),
    step = 46;
  return canvasMap(
    2048,
    1024,
    (c, w, h) => {
      c.fillStyle = "#ddd";
      c.fillRect(0, 0, w, h);
      const cols = Math.ceil(w / step),
        rows = Math.ceil(h / step);
      const seeds = Array.from({ length: rows }, (_, y) =>
        Array.from(
          { length: cols },
          (_, x) =>
            new T.Vector2(
              ((x + 0.13 + 0.74 * r()) * w) / cols,
              ((y + r()) * h) / rows,
            ),
        ),
      );
      function seed(x, y) {
        const col = T.MathUtils.euclideanModulo(x, cols),
          row = T.MathUtils.euclideanModulo(y, rows);
        return seeds[row][col]
          .clone()
          .add(new T.Vector2(((x - col) * w) / cols, ((y - row) * h) / rows));
      }
      for (let y = -1; y <= rows; y++)
        for (let x = -1; x <= cols; x++) {
          const a = seed(x, y);
          let cell = [
            [-2, -2],
            [2, -2],
            [2, 2],
            [-2, 2],
          ].map(([dx, dy]) => new T.Vector2(a.x + dx * step, a.y + dy * step));
          for (let j = -2; j <= 2; j++)
            for (let i = -2; i <= 2; i++)
              if (i || j) cell = clip(cell, a, seed(x + i, y + j));
          for (let i = 0; i < cell.length; i++) {
            const start = cell[i],
              end = cell[(i + 1) % cell.length];
            if (start.x > end.x) continue;
            const dx = end.x - start.x,
              dy = end.y - start.y;
            c.beginPath();
            c.moveTo(start.x, start.y);
            c.bezierCurveTo(
              start.x + 0.26 * dx - 0.09 * dy,
              start.y + 0.26 * dy + 0.09 * dx,
              start.x + 0.71 * dx + 0.07 * dy,
              start.y + 0.71 * dy - 0.07 * dx,
              end.x,
              end.y,
            );
            c.strokeStyle = "#9d9d9d";
            c.lineWidth = 2.6;
            c.stroke();
            c.strokeStyle = "#353535";
            c.lineWidth = 1.1;
            c.stroke();
          }
          if (r() > 0.38 && cell.length > 3) {
            const start = cell[0].clone().lerp(cell[1], 0.63);
            const tip = cell[3].clone().lerp(cell[2], 0.35);
            c.beginPath();
            c.moveTo(start.x, start.y);
            c.quadraticCurveTo(a.x + 5, a.y - 5, tip.x, tip.y);
            c.strokeStyle = "#929292";
            c.lineWidth = 0.95;
            c.stroke();
          }
        }
    },
    false,
  );
}
function buffer() {
  return { p: [], n: [], u: [], idx: [] };
}
function vertex(b, s, center, flip = false) {
  b.p.push(...s.pos.clone().sub(center));
  b.n.push(...s.normal.clone().multiplyScalar(flip ? -1 : 1));
  b.u.push(...s.uv);
}
function finish(b) {
  return geometry(b.p, b.n, b.u, b.idx);
}
function edgeKey(a, b) {
  const q = a.clone().lerp(b, 0.5);
  return Math.round(fract(q.x / W) * 10000) + "," + Math.round(q.y * 10000);
}
function buildShard(cell, mats, edges, ordinal) {
  const { s, p } = cell,
    center = surface(s.x, s.y, -0.045).pos,
    group = new T.Group();
  const skin = buffer(),
    lining = buffer(),
    wall = buffer(),
    gold = buffer();
  const dripTip = new T.Vector3(0, Infinity, 0);
  const depth = 0.117,
    sub = 11;
  for (let j = 0; j < p.length; j++) {
    const a = p[j],
      b = p[(j + 1) % p.length],
      len = a.distanceTo(b);
    const count = Math.max(3, Math.ceil(len / 0.044));
    const rim =
      Math.abs(a.y - b.y) < 0.000001 && (a.y < 0.000001 || a.y > H - 0.000001);
    const key = edgeKey(a, b);
    const mid = a.clone().lerp(b, 0.48);
    if (!rim) {
      if (!edges.has(key)) edges.set(key, []);
      edges.get(key).push({
        idx: ordinal,
        point: surface(mid.x, mid.y, 0.006).pos.sub(center),
      });
    }
    const start = skin.p.length / 3,
      startWall = wall.p.length / 3,
      startGold = gold.p.length / 3;
    for (let i = 0; i <= count; i++) {
      const e = a.clone().lerp(b, i / count);
      for (let k = 0; k <= sub; k++) {
        const pt = s.clone().lerp(e, k / sub);
        vertex(skin, surface(pt.x, pt.y), center);
        vertex(lining, surface(pt.x, pt.y, -depth), center, true);
        if (i && k) {
          const d = start + i * (sub + 1) + k,
            c = d - 1,
            aa = c - sub - 1,
            bb = aa + 1;
          skin.idx.push(aa, bb, d, aa, d, c);
          lining.idx.push(aa, d, bb, aa, c, d);
        }
      }
      const outer = surface(e.x, e.y),
        inner = surface(e.x, e.y, -depth);
      if (!rim && outer.pos.y < dripTip.y) dripTip.copy(outer.pos);
      const next = surface(
        e.x + (b.x - a.x) * 0.0004,
        e.y + (b.y - a.y) * 0.0004,
      );
      const tangent = next.pos.clone().sub(outer.pos);
      if (tangent.lengthSq() < 1e-15) {
        const prev = surface(
          e.x - (b.x - a.x) * 0.0004,
          e.y - (b.y - a.y) * 0.0004,
        );
        tangent.copy(outer.pos).sub(prev.pos);
      }
      tangent.normalize();
      const edgeNormal = tangent.clone().cross(outer.normal).normalize();
      const grit =
        Math.sin(e.x * 214 + e.y * 171) * Math.cos(e.y * 96 - e.x * 73);
      const middle = outer.pos
        .clone()
        .lerp(inner.pos, 0.46 + grit * 0.12)
        .addScaledVector(edgeNormal, rim ? 0 : 0.012 * grit);
      for (const [pos, d] of [
        [outer.pos, 0],
        [middle, 0.5],
        [inner.pos, 1],
      ]) {
        const n = edgeNormal
          .clone()
          .addScaledVector(outer.normal, (d - 0.5) * grit * 0.7)
          .normalize();
        vertex(
          wall,
          { pos, normal: n, uv: [(i / count) * len * 2, d * 0.24] },
          center,
        );
      }
      if (i) {
        for (let k = 0; k < 2; k++) {
          const d = startWall + 3 * i + k;
          wall.idx.push(d - 3, d - 2, d + 1, d - 3, d + 1, d);
        }
      }
      // An elliptical lacquer bead across the exposed cut, with a fine raised crown.
      const width =
        (rim ? 0.011 : 0.0105) *
        (1 +
          0.3 * Math.sin(e.x * 31 + e.y * 42) +
          0.15 * Math.cos(e.y * 97 - e.x * 44));
      for (let k = 0; k < 5; k++) {
        const theta = (Math.PI * k) / 4;
        const norm = outer.normal
          .clone()
          .multiplyScalar(0.55 + Math.sin(theta))
          .addScaledVector(edgeNormal, -0.42 * Math.cos(theta))
          .normalize();
        const pos = outer.pos
          .clone()
          .addScaledVector(edgeNormal, width * (Math.cos(theta) - 1) * 0.52)
          .addScaledVector(
            outer.normal,
            0.003 + width * 0.8 * Math.pow(1 - k / 4, 0.65),
          );
        vertex(gold, { pos, normal: norm, uv: outer.uv }, center);
        if (i && k) {
          const d = startGold + 5 * i + k;
          gold.idx.push(d - 6, d - 5, d, d - 6, d, d - 1);
        }
      }
    }
  }
  [skin, lining, wall, gold].forEach((b, i) =>
    group.add(new T.Mesh(finish(b), mats[i])),
  );
  group.position.copy(center);
  const ang = Math.atan2(center.x, center.z),
    rad = 0.65 + rng() * 1.15,
    lift = (s.y / H - 0.45) * 1.55 + (rng() - 0.5) * 0.7;
  const direction = new T.Vector3(
    Math.sin(ang) * rad,
    lift,
    Math.cos(ang) * rad * 0.74,
  );
  const axis = new T.Vector3(rng() - 0.5, rng() - 0.5, rng() - 0.5).normalize();
  return {
    group,
    dripTip: dripTip.sub(center),
    center,
    direction,
    axis,
    spin: (rng() - 0.5) * 2.5,
    phase: rng() * TAU,
  };
}
function makeThreads(pairs, root, glowMap) {
  const seg = 24,
    sides = 4,
    positions = new Float32Array(pairs.length * (seg + 1) * sides * 3),
    idx = [];
  for (let j = 0; j < pairs.length; j++)
    for (let i = 0; i < seg; i++)
      for (let k = 0; k < sides; k++) {
        const a = (j * (seg + 1) + i) * sides + k,
          b = a - k + ((k + 1) % sides);
        idx.push(a, b, a + sides, b, b + sides, a + sides);
      }
  const g = new T.BufferGeometry();
  g.setAttribute(
    "position",
    new T.BufferAttribute(positions, 3).setUsage(T.DynamicDrawUsage),
  );
  g.setIndex(idx);
  const mat = new T.MeshBasicMaterial({
    color: new T.Color(2.7, 1.04, 0.19),
    side: T.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
  });
  const mesh = new T.Mesh(g, mat);
  mesh.frustumCulled = false;
  root.add(mesh);
  const axis = new T.Vector3(0, 1, 0),
    side = new T.Vector3(),
    normal = new T.Vector3(),
    pt = new T.Vector3(),
    dir = new T.Vector3();
  const emberGeometry = new T.BufferGeometry();
  const sparks = new Float32Array(pairs.length * 3);
  const radiance = new Float32Array(sparks.length);
  emberGeometry.setAttribute("position", new T.BufferAttribute(sparks, 3));
  emberGeometry.setAttribute("color", new T.BufferAttribute(radiance, 3));
  const embers = new T.Points(
    emberGeometry,
    new T.PointsMaterial({
      map: glowMap,
      vertexColors: true,
      size: 0.089,
      transparent: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
    }),
  );
  embers.frustumCulled = false;
  root.add(embers);
  return (shards, t, f, heat) => {
    mesh.visible = embers.visible = f > 0.012;
    if (!mesh.visible) return;
    mat.opacity = 0.48 + 0.27 * heat;
    embers.material.opacity = smooth(0.07, 0.65, f);
    let slot = 0;
    pairs.forEach(([a, b], j) => {
      const end = (n) =>
        n.point
          .clone()
          .applyQuaternion(shards[n.idx].group.quaternion)
          .add(shards[n.idx].group.position);
      const x = end(a),
        y = end(b);
      dir.subVectors(y, x).normalize();
      side.crossVectors(dir, axis).normalize();
      normal.crossVectors(dir, side);
      const orbit = t * (1.1 + 0.09 * (j % 7)) + j * 7.2;
      const along = 0.5 + 0.46 * Math.sin(orbit * 0.47);
      const radius = f * (0.04 + 0.11 * Math.sin(along * Math.PI));
      pt.lerpVectors(x, y, along)
        .addScaledVector(side, radius * Math.cos(orbit))
        .addScaledVector(normal, radius * Math.sin(orbit));
      pt.toArray(sparks, j * 3);
      const pulse = 0.45 + 3.6 * Math.pow(0.5 + 0.5 * Math.sin(orbit * 2.1), 3);
      radiance.set(
        [pulse * 1.7, pulse * (0.26 + 0.13 * (j % 3)), pulse * 0.06],
        j * 3,
      );
      for (let i = 0; i <= seg; i++) {
        const u = i / seg,
          arc = Math.sin(u * Math.PI) * f;
        pt.lerpVectors(x, y, u);
        pt.y += arc * (0.085 * Math.sin(t * 0.7 + j * 0.8 + u * 4) - 0.14);
        pt.addScaledVector(
          side,
          arc * 0.045 * Math.cos(j * 2.1 + u * 6 + t * 0.65),
        );
        const r =
          0.0044 + 0.006 * Math.pow(0.5 + 0.5 * Math.cos(u * 7 - t * 3 + j), 8);
        for (let k = 0; k < sides; k++) {
          const angle = (k * TAU) / sides;
          for (const c of ["x", "y", "z"])
            positions[slot++] =
              pt[c] +
              r * (side[c] * Math.cos(angle) + normal[c] * Math.sin(angle));
        }
      }
    });
    g.attributes.position.needsUpdate = true;
    emberGeometry.attributes.position.needsUpdate =
      emberGeometry.attributes.color.needsUpdate = true;
  };
}
export function buildRelic(scene, painting, glowMap) {
  const root = new T.Group();
  scene.add(root);
  painting.colorSpace = T.SRGBColorSpace;
  painting.wrapS = T.RepeatWrapping;
  painting.anisotropy = 8;
  const bump = crackle();
  const glaze = new T.MeshPhysicalMaterial({
    map: painting,
    color: 0xc2d9ce,
    roughness: 0.195,
    metalness: 0.045,
    clearcoat: 0.75,
    clearcoatRoughness: 0.19,
    bumpMap: bump,
    bumpScale: 0.014,
    side: T.DoubleSide,
  });
  glaze.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
       float craze = clamp((.86 - texture2D(bumpMap, vBumpMapUv).r) * 1.6, 0., 1.);
       diffuseColor.rgb *= mix(vec3(1.), vec3(.44,.54,.55), craze);`,
    );
  };
  const lining = new T.MeshStandardMaterial({
    color: 0x425f63,
    roughness: 0.53,
    metalness: 0.035,
    bumpMap: bump,
    bumpScale: 0.015,
    side: T.DoubleSide,
  });
  const biscuit = new T.MeshStandardMaterial({
    color: 0xd3b89a,
    roughness: 0.94,
    side: T.DoubleSide,
  });
  const grainMap = canvasMap(128, 128, (c, w, h) => {
    const image = c.createImageData(w, h),
      r = random(915);
    for (let i = 0; i < image.data.length; i += 4) {
      const value = r() < 0.037 ? 95 + r() * 32 : 175 + Math.floor(r() * 76);
      image.data.set([value, value, value - 5, 255], i);
    }
    c.putImageData(image, 0, 0);
  });
  biscuit.map = grainMap;
  biscuit.bumpMap = grainMap;
  biscuit.bumpScale = 0.02;
  biscuit.envMapIntensity = 0.32;
  const gold = new T.MeshPhysicalMaterial({
    color: 0xf8b74d,
    metalness: 0.93,
    roughness: 0.225,
    clearcoat: 0.44,
    emissive: 0xff8f29,
    side: T.DoubleSide,
  });
  const uniforms = { clock: { value: 0 }, fire: { value: 0 } };
  gold.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader =
      "varying vec2 veinUV;\n" +
      sh.vertexShader.replace(
        "#include <uv_vertex>",
        "#include <uv_vertex>\nveinUV=uv;",
      );
    sh.fragmentShader =
      "varying vec2 veinUV; uniform float clock,fire;\n" +
      sh.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
      float wave=.5+.5*cos(veinUV.y*13.+veinUV.x*27.-clock*3.);
      totalEmissiveRadiance *= .55+fire*(.55+2.15*pow(wave,6.));`,
      );
  };
  const edges = new Map(),
    shards = makeCells().map((cell, i) =>
      buildShard(cell, [glaze, lining, biscuit, gold], edges, i),
    );
  shards.forEach((s) => root.add(s.group));
  const pairs = [...edges.values()].filter(
    (p, i) => p.length === 2 && i % 3 !== 1,
  );
  const threads = makeThreads(pairs, root, glowMap);
  const vesselPose = new T.Object3D(),
    piecePose = new T.Object3D();
  function poseVessel(pose, t, f) {
    pose.position.set(0.12, 1.88 + 0.058 * Math.sin(t * 0.78) + 0.6 * f, 0);
    pose.rotation.set(
      0.155 + 0.055 * Math.cos(t * 0.31),
      0.17 + 0.14 * Math.sin(t * 0.23) + f * 0.27,
      0.045 * Math.sin(0.34 * t) + 0.035,
    );
  }
  function poseShard(pose, sh, t, f) {
    pose.position.copy(sh.center).addScaledVector(sh.direction, f);
    pose.position.x += f * 0.18 * Math.sin(t * 0.62 + sh.phase);
    const footLift = 0.7 * (1 - smooth(-1.1, -0.22, sh.center.y));
    pose.position.y += f * (footLift + 0.13 * Math.sin(t * 0.84 + sh.phase));
    pose.quaternion.setFromAxisAngle(
      sh.axis,
      f * (sh.spin + 0.34 * Math.sin(t * 0.65 + sh.phase)),
    );
  }
  const nozzles = [8, 9, 13, 15, 16, 17, 19, 21, 22, 23, 25, 30].map(
    (i) => shards[i],
  );
  const flow = moltenFlow(scene, nozzles, (sh, t, f, out) => {
    poseShard(piecePose, sh, t, f);
    poseVessel(vesselPose, t, f);
    return out
      .copy(sh.dripTip)
      .applyQuaternion(piecePose.quaternion)
      .add(piecePose.position)
      .applyQuaternion(vesselPose.quaternion)
      .add(vesselPose.position);
  });
  const N = 255,
    pts = new Float32Array(N * 3),
    colors = new Float32Array(N * 3),
    dust = [];
  for (let i = 0; i < N; i++) {
    dust.push([rng() * TAU, rng(), rng(), rng()]);
    const c = new T.Color().setRGB(
      2.9,
      0.68 + rng() * 0.95,
      0.06 + rng() * 0.25,
    );
    colors.set(c.toArray(), i * 3);
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.BufferAttribute(pts, 3));
  g.setAttribute("color", new T.BufferAttribute(colors, 3));
  const mist = new T.Points(
    g,
    new T.PointsMaterial({
      map: glowMap,
      vertexColors: true,
      size: 0.052,
      blending: T.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    }),
  );
  mist.frustumCulled = false;
  scene.add(mist);
  return {
    shardCount: shards.length,
    update(t, f, balance, shock, restored, show) {
      const heat = smooth(3.6, 9, t) * (1 - smooth(23.25, 26, t));
      poseVessel(root, t, f);
      uniforms.clock.value = t;
      uniforms.fire.value = Math.max(heat, f);
      gold.emissiveIntensity =
        (0.19 + f * 0.86 + 0.9 * heat + (restored ? 0.22 : 0)) *
        (0.44 + balance * 1.32);
      for (const sh of shards) poseShard(sh.group, sh, t, f);
      threads(shards, t, f, heat);
      const burst = shock >= 0 && shock < 4;
      mist.visible = f > 0.005 || burst;
      if (mist.visible) {
        for (let i = 0; i < N; i++) {
          const [a, b, c, d] = dust[i],
            u = fract(t * 0.17 + c);
          const flash = burst && i > N * 0.32;
          const r = flash
            ? 0.4 + shock * (0.7 + 2.4 * b)
            : 0.55 + f * (0.37 + 1.8 * b);
          const angle =
            a + (flash ? 0.035 * shock : 0.11 * t + 0.17 * Math.sin(u * TAU));
          pts[i * 3] = Math.cos(angle) * r + 0.12;
          pts[i * 3 + 2] = Math.sin(angle) * r * 0.88;
          pts[i * 3 + 1] = flash
            ? 0.025 +
              Math.max(
                0,
                Math.sin(clamp(shock / 3) * Math.PI) *
                  (0.1 + d * 1.1) *
                  (1 - shock / 4),
              )
            : 1.8 + (u - 0.5) * 3.5 * f + 0.16 * Math.sin(a + t);
        }
        g.attributes.position.needsUpdate = true;
        mist.material.opacity =
          clamp(f * 0.9 + (burst ? 1 - shock / 4 : 0)) * (0.64 + balance * 0.4);
      }
      return flow(t, f, show, balance);
    },
  };
}
