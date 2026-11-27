import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import {
  TAU,
  random,
  fract,
  clamp,
  canvasMap,
  geometry,
  smooth,
} from "./core.js";

const rng = random(20261),
  V = (x, y, z) => new T.Vector3(x, y, z);
const material = (color, roughness = 0.7, extra = {}) =>
  new T.MeshStandardMaterial({ color, roughness, ...extra });
function mesh(parent, g, m, x = 0, y = 0, z = 0) {
  const o = new T.Mesh(g, m);
  o.position.set(x, y, z);
  parent.add(o);
  return o;
}
function rod(parent, a, b, r1, r2, m, steps = 12) {
  const d = b.clone().sub(a),
    o = mesh(parent, new T.CylinderGeometry(r2, r1, d.length(), steps), m);
  o.position.copy(a).lerp(b, 0.5);
  o.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
  return o;
}
function lathe(parent, profile, m, n = 48) {
  return mesh(
    parent,
    new T.LatheGeometry(
      profile.map(([r, y]) => new T.Vector2(r, y)),
      n,
    ),
    m,
  );
}
function grain(x, y) {
  const f = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return fract(f);
}
function noise(x, y) {
  const ix = Math.floor(x),
    iy = Math.floor(y);
  let u = fract(x),
    v = fract(y);
  u = u * u * (3 - 2 * u);
  v = v * v * (3 - 2 * v);
  return (
    (grain(ix, iy) * (1 - u) + grain(ix + 1, iy) * u) * (1 - v) +
    (grain(ix, iy + 1) * (1 - u) + grain(ix + 1, iy + 1) * u) * v
  );
}
function staticBatch(group) {
  // Static forms share draw calls per material. Animated droplets and petals live separately.
  group.updateWorldMatrix(true, true);
  const batches = new Map(),
    inv = group.matrixWorld.clone().invert();
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material)) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(new T.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    if (!g.hasAttribute("uv"))
      g.setAttribute(
        "uv",
        new T.Float32BufferAttribute(
          new Float32Array(g.attributes.position.count * 2),
          2,
        ),
      );
    for (const name of Object.keys(g.attributes))
      if (!["position", "normal", "uv"].includes(name)) g.deleteAttribute(name);
    if (!batches.has(o.material)) batches.set(o.material, []);
    batches.get(o.material).push(g);
  });
  group.clear();
  for (const [m, gs] of batches) {
    mesh(group, mergeGeometries(gs, false), m);
    gs.forEach((g) => g.dispose());
  }
}
function stone(x, z, r, sy, level, mat, group) {
  const sides = 13 + Math.floor(rng() * 5),
    pts = [],
    idx = [],
    uv = [],
    taper = [0.69, 1, 0.93, 0.61, 0.23],
    ys = [-0.7, -0.18, 0.22, 0.65, 0.79];
  const shape = Array.from({ length: sides }, () => 0.84 + 0.26 * rng()),
    offset = rng() * TAU;
  for (let j = 0; j < 5; j++)
    for (let k = 0; k < sides; k++) {
      const a = (k / sides) * TAU + offset,
        R = shape[k] * r * taper[j];
      const xx = Math.cos(a) * R,
        zz = Math.sin(a) * R * 0.72;
      const yy = (ys[j] + 0.1 * Math.sin(a * 3 + offset)) * sy;
      pts.push(xx, yy, zz);
      uv.push(xx * 0.68 + yy * 0.27, zz * 0.7 + yy * 0.5);
      if (j) {
        const a = (j - 1) * sides + k,
          b = (j - 1) * sides + ((k + 1) % sides);
        idx.push(a, a + sides, b, b, a + sides, b + sides);
      }
    }
  for (let k = 1; k < sides - 1; k++)
    idx.push(4 * sides, 4 * sides + k + 1, 4 * sides + k);
  const o = mesh(group, geometry(pts, null, uv, idx), mat, x, level, z);
  o.rotation.y = rng() * TAU;
  return o;
}
function stoneMoss(stones, group) {
  const positions = [],
    colors = [],
    v = new T.Vector3(),
    a = new T.Vector3(),
    b = new T.Vector3(),
    c = new T.Vector3();
  for (const rock of stones) {
    rock.updateMatrixWorld(true);
    const g = rock.geometry,
      p = g.attributes.position,
      ids = g.index.array;
    for (let j = 0; j < ids.length; j += 3) {
      a.fromBufferAttribute(p, ids[j]).applyMatrix4(rock.matrixWorld);
      b.fromBufferAttribute(p, ids[j + 1]).applyMatrix4(rock.matrixWorld);
      c.fromBufferAttribute(p, ids[j + 2]).applyMatrix4(rock.matrixWorld);
      if ((a.y + b.y + c.y) / 3 < 0.045) continue;
      const area = b.clone().sub(a).cross(c.clone().sub(a)).length() * 0.5;
      for (let k = 0; k < Math.floor(area * 440); k++) {
        let u = rng(),
          w = rng();
        if (u + w > 1) {
          u = 1 - u;
          w = 1 - w;
        }
        v.copy(a)
          .multiplyScalar(1 - u - w)
          .addScaledVector(b, u)
          .addScaledVector(c, w);
        const n = noise(v.x * 3.8 + 32, v.z * 3.8 + 92);
        if (n < 0.54) continue;
        const l = 0.008 + rng() * 0.019,
          dx = rng() * 0.017 - 0.008;
        positions.push(
          v.x - 0.009,
          v.y,
          v.z,
          v.x + 0.009,
          v.y,
          v.z + 0.005,
          v.x + dx,
          v.y + l,
          v.z,
        );
        const tint = 0.47 + rng() * 0.45;
        for (let h = 0; h < 3; h++)
          colors.push(0.096 * tint, 0.149 * tint, 0.054 * tint);
      }
    }
  }
  const g = geometry(positions);
  g.setAttribute("color", new T.Float32BufferAttribute(colors, 3));
  mesh(
    group,
    g,
    material(0xffffff, 0.99, { vertexColors: true, side: T.DoubleSide }),
  );
}
function toroidal(parent, r, tube, mat, y, segments = 48) {
  const o = mesh(parent, new T.TorusGeometry(r, tube, 7, segments), mat, 0, y);
  o.rotation.x = Math.PI / 2;
  return o;
}
function lantern(group, stoneMat, bronze, glowMap, scene) {
  const l = new T.Group();
  l.position.set(-3.42, 0.1, -0.67);
  l.rotation.y = 0.27;
  group.add(l);
  lathe(
    l,
    [
      [0.5, 0],
      [0.53, 0.055],
      [0.5, 0.12],
      [0.38, 0.15],
      [0.35, 0.24],
      [0.22, 0.29],
      [0.17, 0.36],
      [0.16, 0.7],
      [0.22, 0.78],
      [0.23, 0.84],
      [0.33, 0.88],
      [0.37, 0.94],
      [0.37, 1.01],
    ],
    stoneMat,
    8,
  );
  toroidal(l, 0.179, 0.019, bronze, 0.45);
  const paper = canvasMap(128, 128, (c, w, h) => {
    const g = c.createRadialGradient(62, 60, 4, 64, 64, 90);
    g.addColorStop(0, "#ffde90");
    g.addColorStop(0.56, "#eba54c");
    g.addColorStop(1, "#92411b");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 1700; i++) {
      c.fillStyle = "rgba(97,56,25,.14)";
      c.fillRect(rng() * w, rng() * h, 1, 2 + rng() * 5);
    }
  });
  const pane = new T.MeshBasicMaterial({
    map: paper,
    color: new T.Color(1.38, 1.12, 1.0),
    side: T.DoubleSide,
  });
  mesh(l, new T.BoxGeometry(0.47, 0.48, 0.47), pane, 0, 1.24);
  for (const x of [-0.27, 0.27])
    for (const z of [-0.27, 0.27])
      mesh(l, new T.BoxGeometry(0.083, 0.53, 0.083), stoneMat, x, 1.255, z);
  for (let k = 0; k < 4; k++) {
    const frame = new T.Group();
    frame.rotation.y = (k * Math.PI) / 2;
    l.add(frame);
    for (const y of [1.075, 1.394])
      mesh(frame, new T.BoxGeometry(0.52, 0.018, 0.021), bronze, 0, y, 0.245);
    for (const x of [-0.155, 0.155])
      mesh(
        frame,
        new T.BoxGeometry(0.016, 0.45, 0.018),
        bronze,
        x,
        1.24,
        0.244,
      );
    mesh(
      frame,
      new T.TorusGeometry(0.08, 0.012, 8, 32),
      bronze,
      0,
      1.245,
      0.245,
    );
    for (const sign of [-1, 1])
      mesh(
        frame,
        new T.BoxGeometry(0.166, 0.012, 0.014),
        bronze,
        sign * 0.162,
        1.245,
        0.245,
      );
  }
  // Broad kasuga-style roof curves up at its four corners.
  const cap = lathe(
    l,
    [
      [0, 1.47],
      [0.46, 1.46],
      [0.69, 1.5],
      [0.73, 1.55],
      [0.63, 1.56],
      [0.45, 1.63],
      [0.29, 1.75],
      [0.18, 1.86],
      [0.1, 1.88],
      [0, 1.89],
    ],
    stoneMat,
    4,
  );
  cap.rotation.y = Math.PI / 4;
  const pa = cap.geometry.attributes.position;
  for (let i = 0; i < pa.count; i++) {
    const r = Math.hypot(pa.getX(i), pa.getZ(i));
    pa.setY(i, pa.getY(i) + 0.1 * Math.pow(r / 0.73, 4));
  }
  cap.geometry.computeVertexNormals();
  lathe(
    l,
    [
      [0.14, 1.85],
      [0.18, 1.89],
      [0.15, 1.94],
      [0.095, 1.96],
      [0.14, 2.03],
      [0.125, 2.12],
      [0.055, 2.19],
      [0, 2.27],
    ],
    stoneMat,
    24,
  );
  const s = new T.Sprite(
    new T.SpriteMaterial({
      map: glowMap,
      color: 0xffa546,
      transparent: true,
      opacity: 0.26,
      depthWrite: false,
      blending: T.AdditiveBlending,
    }),
  );
  s.position.set(-3.42, 1.35, -0.34);
  s.scale.set(1.82, 1.64, 1);
  s.renderOrder = 3;
  scene.add(s);
  const light = new T.PointLight(0xffa34d, 3.25, 7, 2);
  light.position.set(-3.42, 1.4, -0.12);
  scene.add(light);
  return cap;
}
function bamboo(group, scene, glowMap) {
  const skin = canvasMap(192, 256, (c, w, h) => {
    c.fillStyle = "#9b976d";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 290; i++) {
      c.strokeStyle =
        rng() < 0.5 ? "rgba(52,54,21,.19)" : "rgba(218,196,125,.23)";
      c.lineWidth = rng() * 2;
      c.beginPath();
      const x = rng() * w;
      c.moveTo(x, 0);
      c.bezierCurveTo(x + 2, 80, x - 1, 180, x + 1, 256);
      c.stroke();
    }
  });
  const cane = material(0x90976b, 0.67, {
      map: skin,
      bumpMap: skin,
      bumpScale: 0.018,
      envMapIntensity: 0.22,
    }),
    joint = material(0x7c744d),
    cord = material(0x302c21);
  function pole(a, b, r) {
    const delta = b.clone().sub(a);
    rod(group, a, b, r, r * 0.96, cane, 24);
    for (let i = 1; i < 5; i++) {
      const u = i / 5,
        p = a.clone().addScaledVector(delta, u);
      rod(
        group,
        p,
        p.clone().addScaledVector(delta, 0.012),
        r * 1.07,
        r * 1.05,
        joint,
      );
    }
  }
  pole(V(3.94, 0.04, 1.37), V(3.94, 1.49, 1.37), 0.107);
  pole(V(3.94, 0.04, 0.95), V(3.94, 1.4, 0.95), 0.102);
  const pivot = V(3.94, 1.2, 1.16),
    axle = V(0, 0, 1);
  const rocker = new T.Group();
  rocker.position.copy(pivot);
  scene.add(rocker);
  rod(group, V(3.94, 1.2, 0.8), V(3.94, 1.2, 1.52), 0.049, 0.049, joint, 16);
  const heel = V(4.55, 1.33, 1.22).sub(pivot);
  const lip = V(2.92, 0.98, 1.05).sub(pivot);
  const d = lip.clone().sub(heel).normalize();
  const side = d
      .clone()
      .cross(V(0, 1, 0))
      .normalize(),
    up = side.clone().cross(d);
  const inner = material(0x63532e, 0.9);
  const cut = material(0xdfc78e, 0.64);
  const rings = [[], [], [], []];
  for (let i = 0; i <= 32; i++) {
    const ang = (i * TAU) / 32;
    const normal = up
      .clone()
      .multiplyScalar(Math.cos(ang))
      .addScaledVector(side, Math.sin(ang));
    const end = lip.clone().addScaledVector(d, -0.11 * Math.cos(ang));
    rings[0].push(heel.clone().addScaledVector(normal, 0.14));
    rings[1].push(end.clone().addScaledVector(normal, 0.131));
    rings[2].push(end.clone().addScaledVector(normal, 0.105));
    rings[3].push(
      end.clone().addScaledVector(normal, 0.105).addScaledVector(d, -0.35),
    );
  }
  for (const [band, mat] of [cane, cut, inner].entries()) {
    const positions = [],
      uv = [],
      idx = [];
    for (let i = 0; i <= 32; i++) {
      positions.push(...rings[band][i], ...rings[band + 1][i]);
      uv.push(i / 32, 0, i / 32, 1);
      const k = 2 * i;
      if (i) idx.push(k - 2, k, k - 1, k, k + 1, k - 1);
    }
    mat.side = T.DoubleSide;
    mesh(rocker, geometry(positions, null, uv, idx), mat);
  }
  rod(
    rocker,
    heel,
    heel.clone().addScaledVector(d, 0.015),
    0.14,
    0.14,
    cut,
    32,
  );
  const back = lip.clone().addScaledVector(d, -0.36);
  rod(
    rocker,
    back,
    back.clone().addScaledVector(d, 0.006),
    0.117,
    0.117,
    inner,
    24,
  );
  for (const u of [0.18, 0.32, 0.35, 0.38, 0.41, 0.78]) {
    const point = heel.clone().lerp(lip, u);
    rod(
      rocker,
      point,
      point.clone().addScaledVector(d, 0.022),
      0.144,
      0.144,
      u === 0.18 || u === 0.78 ? joint : cord,
      24,
    );
  }
  staticBatch(rocker);
  const period = 3.74,
    offset = 0.78;
  function angle(t) {
    const u = fract(t / period) * period;
    const sinceClack = Math.max(0, u - 1.7);
    return (
      -0.32 +
      0.11 * smooth(0, 0.82, u) +
      0.47 * smooth(0.67, 1.09, u) -
      0.58 * smooth(1.47, 1.7, u) +
      0.085 * Math.sin(sinceClack * 32) * Math.exp(-sinceClack * 9)
    );
  }
  const nozzle = rings[2][16]; // Lowest point of the oblique cut.
  const glass = new T.MeshPhysicalMaterial({
    color: 0xbcdce6,
    metalness: 0.46,
    roughness: 0.065,
    emissive: 0x576b7b,
    clearcoat: 1,
  });
  const sphere = new T.SphereGeometry(1, 12, 10);
  const drops = [1.0, 1.09, 1.21, 1.34].map((release, i) => {
    const start = nozzle
      .clone()
      .applyAxisAngle(axle, angle(release))
      .add(pivot);
    const vx = -0.4 + i * 0.056,
      vy = -0.14 - 0.06 * i;
    const flight = (vy + Math.sqrt(vy * vy + 2 * 8.7 * start.y)) / 8.7;
    const bead = mesh(scene, sphere, glass);
    const glint = new T.Sprite(
      new T.SpriteMaterial({
        map: glowMap,
        color: new T.Color(1.55, 1.88, 2.16),
        transparent: true,
        depthWrite: false,
        blending: T.AdditiveBlending,
      }),
    );
    scene.add(glint);
    return {
      release,
      start,
      vx,
      vy,
      flight,
      bead,
      glint,
      size: [0.035, 0.029, 0.023, 0.016][i],
    };
  });
  return {
    impacts(lo, hi) {
      const hits = [];
      for (const d of drops) {
        const first = d.release + d.flight - offset;
        for (
          let t = first + Math.ceil((lo - first) / period) * period;
          t < hi;
          t += period
        )
          hits.push({
            t,
            x: d.start.x + d.vx * d.flight,
            z: d.start.z,
            power: d.size * 1.8,
            spread: 0.13,
          });
      }
      return hits;
    },
    update(t) {
      t += offset;
      rocker.rotation.z = angle(t);
      for (const d of drops) {
        const age = fract((t - d.release) / period) * period;
        const grow = smooth(period - 0.16, period, age),
          airborne = age < d.flight;
        d.bead.visible = d.glint.visible = airborne || grow > 0.03;
        if (!d.bead.visible) continue;
        const size = d.size * (airborne ? 1 : grow);
        if (airborne) {
          d.bead.position.copy(d.start);
          d.bead.position.x += d.vx * age;
          d.bead.position.y += d.vy * age - 4.35 * age * age;
        } else {
          d.bead.position
            .copy(nozzle)
            .applyAxisAngle(axle, rocker.rotation.z)
            .add(pivot);
        }
        d.bead.scale.set(size, size * (1.25 + age * (airborne ? 1 : 0)), size);
        d.glint.position.copy(d.bead.position);
        d.glint.position.z += size * 0.9;
        d.glint.scale.setScalar(size * (2.8 + 0.5 * Math.sin(age * 30)));
      }
    },
  };
}
function cherry(group) {
  const barkMap = canvasMap(256, 256, (c, w, h) => {
    c.fillStyle = "#71655f";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) {
      let x = rng() * w,
        y = rng() * h;
      c.fillStyle = rng() < 0.4 ? "#9a8a77" : "#453d3a";
      c.fillRect(x, y, rng() * 11, 1 + rng());
    }
  });
  const bark = material(0x6a5149, 0.75, {
    map: barkMap,
    bumpMap: barkMap,
    bumpScale: 0.035,
  });
  const twig = material(0x72564d);
  const petals = [0xcf9c9e, 0xe4b5b5, 0xa87f89, 0xddd0c6].map((c) =>
    material(c, 0.74, { side: T.DoubleSide }),
  );
  const blossom = [],
    anthers = [],
    leaves = [];
  function flower(pt, s) {
    const tilt = rng() * TAU,
      up = V(rng() - 0.5, 0.25 + rng() * 0.6, 0.72 + rng() * 0.35).normalize();
    const x = V(0, 1, 0).cross(up).normalize(),
      y = up.clone().cross(x).normalize();
    for (let k = 0; k < 5; k++) {
      const a = (k * TAU) / 5 + tilt,
        dir = x
          .clone()
          .multiplyScalar(Math.cos(a))
          .addScaledVector(y, Math.sin(a));
      const side = up.clone().cross(dir),
        v = (d, w, h) =>
          pt
            .clone()
            .addScaledVector(dir, d * s)
            .addScaledVector(side, w * s)
            .addScaledVector(up, h * s);
      const verts = [
        v(0.03, 0, 0),
        v(0.48, -0.34, 0.11),
        v(0.87, -0.28, 0.27),
        v(0.95, -0.07, 0.28),
        v(0.88, 0, 0.24),
        v(0.97, 0.14, 0.29),
        v(0.81, 0.32, 0.23),
        v(0.48, 0.34, 0.12),
      ];
      const id =
        k === 0 ? Math.floor(rng() * 4) : Math.floor((tilt * 3 + k * 0.19) % 4);
      if (!blossom[id]) blossom[id] = [];
      for (let j = 1; j < verts.length - 1; j++)
        blossom[id].push(...verts[0], ...verts[j], ...verts[j + 1]);
    }
    anthers.push(...pt.clone().addScaledVector(up, 0.007));
  }
  function branch(nodes, radius, level) {
    const curve = new T.CatmullRomCurve3(nodes),
      N = Math.max(5, Math.round(curve.getLength() * 8)),
      S = level ? 6 : 11,
      verts = [],
      uv = [],
      indices = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N,
        p = curve.getPoint(u),
        t = curve.getTangent(u),
        b = V(0, 0, 1).cross(t).normalize(),
        n = t.clone().cross(b);
      const r = radius * (1 - u * 0.84) * (1 + 0.09 * Math.sin(u * TAU * 3));
      for (let k = 0; k < S; k++) {
        const a = (k * TAU) / S,
          rr = r * (1 + 0.11 * Math.sin(a * 3 + u * 6));
        verts.push(
          ...p
            .clone()
            .addScaledVector(n, rr * Math.cos(a))
            .addScaledVector(b, rr * Math.sin(a)),
        );
        uv.push(k / S, u * 4);
        if (i) {
          const a = (i - 1) * S + k,
            b = (i - 1) * S + ((k + 1) % S);
          indices.push(a, a + S, b, b, a + S, b + S);
        }
      }
    }
    mesh(group, geometry(verts, null, uv, indices), level > 1 ? twig : bark);
    if (level < 3) {
      const count = [8, 5, 3][level];
      for (let i = 0; i < count; i++) {
        const u = 0.18 + (0.8 * (i + rng() * 0.65)) / count,
          p = curve.getPoint(u),
          dir = curve.getTangent(u);
        const angle = (i % 2 ? 1 : -1) * (0.6 + rng() * 0.9);
        dir
          .applyAxisAngle(V(0, 0, 1), angle)
          .add(
            V((rng() - 0.5) * 0.21, (rng() - 0.5) * 0.22, (rng() - 0.5) * 0.85),
          )
          .normalize();
        const len = [
          1.0 + rng() * 0.83,
          0.38 + rng() * 0.51,
          0.16 + rng() * 0.28,
        ][level];
        branch(
          [
            p,
            p
              .clone()
              .addScaledVector(dir, len * 0.44)
              .add(V(0.05, -0.045, 0.01)),
            p.clone().addScaledVector(dir, len),
          ],
          radius * (0.22 + 0.2 * (1 - u)),
          level + 1,
        );
      }
    } else {
      for (let i = 0; i < 3 + rng() * 5; i++) {
        const p = curve.getPoint(0.2 + rng() * 0.8);
        p.add(
          V((rng() - 0.5) * 0.13, (rng() - 0.5) * 0.14, (rng() - 0.5) * 0.1),
        );
        flower(p, 0.031 + rng() * 0.045);
        if (rng() < 0.3) {
          const l = 0.09 + rng() * 0.13;
          leaves.push(
            ...p,
            ...p.clone().add(V(-l * 0.55, 0.012, 0.04)),
            ...p.clone().add(V(-l, 0.08, 0)),
          );
        }
      }
    }
  }
  branch(
    [
      V(11.4, 1.0, -2.8),
      V(7.4, 3.0, -1.5),
      V(5.05, 4.55, -1.43),
      V(4.1, 4.42, -1.12),
      V(3.22, 4.07, -0.88),
      V(2.11, 4.2, -0.73),
      V(1.4, 3.91, -0.66),
    ],
    0.27,
    0,
  );
  blossom.forEach((p, i) => mesh(group, geometry(p), petals[i]));
  mesh(
    group,
    geometry(leaves),
    material(0x69715a, 0.85, { side: T.DoubleSide }),
  );
  return anthers;
}
function fireflies(scene, glowMap) {
  const r = random(652),
    count = 28;
  const g = new T.BufferGeometry(),
    p = new Float32Array(count * 3),
    c = new Float32Array(count * 3);
  g.setAttribute("position", new T.BufferAttribute(p, 3));
  g.setAttribute("color", new T.BufferAttribute(c, 3));
  const flies = new T.Points(
    g,
    new T.PointsMaterial({
      map: glowMap,
      size: 0.12,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
    }),
  );
  flies.frustumCulled = false;
  flies.renderOrder = 3;
  scene.add(flies);
  const seeds = Array.from({ length: count }, (_, i) => ({
    x: (i % 2 ? 3.65 : -3.44) + (r() - 0.5) * 2.2,
    y: 0.28 + 1.25 * r(),
    z: (i % 2 ? 1.05 : -0.55) + (r() - 0.5) * 1.65,
    phase: r() * TAU,
    speed: 0.62 + r() * 0.69,
  }));
  return (t) => {
    seeds.forEach((s, i) => {
      const a = t * s.speed + s.phase,
        k = i * 3;
      p[k] = s.x + 0.24 * Math.sin(a) + 0.08 * Math.cos(a * 2.7);
      p[k + 1] = s.y + 0.19 * Math.sin(a * 1.39) + 0.04 * Math.cos(a * 3.1);
      p[k + 2] = s.z + 0.24 * Math.cos(a * 0.87);
      const glow = 0.1 + 4.4 * Math.pow(0.5 + 0.5 * Math.cos(a * 1.81 + i), 3);
      c[k] = glow;
      c[k + 1] = glow * 0.7;
      c[k + 2] = glow * 0.16;
    });
    g.attributes.position.needsUpdate = g.attributes.color.needsUpdate = true;
  };
}

function fallingPetals(scene) {
  const p = [
    0, 0, 0, -0.034, 0.006, 0.021, -0.032, 0.014, 0.067, -0.012, 0.011, 0.09, 0,
    0.007, 0.082, 0.015, 0.012, 0.092, 0.035, 0.014, 0.063, 0.031, 0.006, 0.022,
  ];
  const idx = [];
  for (let j = 1; j < 7; j++) idx.push(0, j, j + 1);
  const geom = geometry(p, null, null, idx),
    m = material(0xe6adae, 0.65, { side: T.DoubleSide });
  // A pale notched tip, rosy base and a lighter crease follow the folded mesh.
  geom.setAttribute(
    "color",
    new T.Float32BufferAttribute(
      [
        0.63, 0.21, 0.31, 0.9, 0.59, 0.65, 1, 0.82, 0.85, 1, 0.92, 0.91, 0.91,
        0.64, 0.69, 1, 0.94, 0.9, 1, 0.75, 0.8, 0.87, 0.47, 0.55,
      ],
      3,
    ),
  );
  m.vertexColors = true;
  const N = 81,
    inst = new T.InstancedMesh(geom, m, N),
    dummy = new T.Object3D(),
    seeds = [];
  inst.frustumCulled = false;
  inst.renderOrder = 2;
  scene.add(inst);
  for (let i = 0; i < N; i++) {
    seeds.push({
      period: 11 + rng() * 12,
      offset: rng() * 21,
      x: 1.1 + rng() * 4.7,
      z: -3.1 + rng() * 7.3,
      y: 3.7 + rng() * 1.35,
      drift: 1.4 + rng() * 5.8,
      phase: rng() * TAU,
      scale: 0.69 + rng() * 0.86,
    });
    inst.setColorAt(
      i,
      new T.Color().setHSL(
        0.965 + rng() * 0.023,
        0.21 + rng() * 0.18,
        0.59 + rng() * 0.23,
      ),
    );
  }
  function at(s, u, t, gust = 0) {
    const a = clamp(u / 0.59),
      f = Math.max(0, u - 0.59);
    return V(
      s.x -
        s.drift * a +
        0.19 * Math.sin(s.phase + a * 7) +
        gust * Math.sin(a * Math.PI) -
        1.35 * f +
        0.09 * Math.sin(f * 12) * Math.sin(s.phase),
      s.y * (1 - a) + 0.018 + 0.004 * Math.sin(t * 2 + s.phase),
      s.z + 0.4 * Math.sin(s.phase + a * 5) + f * 0.65,
    );
  }
  return {
    impacts(lo, hi) {
      const hits = [];
      for (const s of seeds) {
        const zero = 0.59 * s.period - s.offset;
        for (
          let t = zero + Math.ceil((lo - zero) / s.period) * s.period;
          t < hi;
          t += s.period
        ) {
          const p = at(s, 0.59, t);
          hits.push({ t, x: p.x, z: p.z });
        }
      }
      return hits;
    },
    update(t, gust, heightAt) {
      seeds.forEach((s, i) => {
        const u = fract((t + s.offset) / s.period),
          air = u < 0.59;
        dummy.position.copy(at(s, u, t, gust * Math.sin(s.phase + t)));
        dummy.rotation.set(
          air ? 0.5 + u * 6 + s.phase : 0.02,
          air ? t * 0.8 + s.phase : s.phase + t * 0.13,
          air ? Math.sin(t + s.phase) * 1.1 : 0.06,
        );
        if (!air) {
          const { x, z } = dummy.position;
          const h = heightAt(x, z);
          dummy.position.y = h + 0.016;
          dummy.rotation.x =
            0.065 * Math.sin(t * 1.7 + s.phase) -
            (heightAt(x, z + 0.09) - h) / 0.09;
          dummy.rotation.z =
            0.052 * Math.sin(t * 1.3 + s.phase) +
            (heightAt(x + 0.09, z) - h) / 0.09;
        }
        dummy.scale.setScalar(s.scale * Math.min(1, u * 28, (1 - u) * 21));
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
    },
  };
}
export function buildGarden(
  scene,
  backdrop,
  glowMap,
  rockTexture,
  bankTexture,
) {
  backdrop.colorSpace = T.SRGBColorSpace;
  backdrop.anisotropy = 4;
  // Curve the distant garden around the basin. The shoreline meets the real water plane.
  const verts = [],
    uv = [],
    idx = [];
  // The main photographic register is rectilinear. Only the terminal tree banks curve around the court.
  const columns = [
    [-54, 18, -1.38],
    [-52, -21, -0.61],
    [-33, -38, -0.16],
    [-25, -40, 0],
    [25, -40, 1],
    [33, -38, 1.16],
    [52, -21, 1.61],
    [54, 18, 2.38],
  ];
  for (let k = 0; k < columns.length; k++) {
    const [x, z, u] = columns[k],
      d = k * 3;
    for (let j = 0; j < 3; j++) {
      verts.push(x, [-0.24, 14.96, 54][j], z);
      uv.push(u, [0.087, 1, 1][j]);
    }
    if (k)
      for (let j = 0; j < 2; j++)
        idx.push(d + j - 3, d + j, d + j - 2, d + j - 2, d + j, d + j + 1);
  }
  bankTexture.colorSpace = T.SRGBColorSpace;
  bankTexture.wrapS = T.MirroredRepeatWrapping;
  bankTexture.anisotropy = 4;
  const distanceMat = new T.MeshBasicMaterial({
    map: backdrop,
    side: T.DoubleSide,
    toneMapped: false,
    fog: false,
  });
  // Two advecting noise scales carry a thin veil across the moon in the
  // sky painting. The reflected camera sees the very same density field.
  const mistTime = { value: 0 };
  const vapor = canvasMap(
    256,
    128,
    (c, w, h) => {
      const data = c.createImageData(w, h),
        r = random(7905);
      const octaves = [4, 8, 16, 32].map((n) => ({
        n,
        lattice: Array.from({ length: n * n }, () => r()),
      }));
      for (let j = 0; j < h; j++)
        for (let i = 0; i < w; i++) {
          let sum = 0;
          for (const [k, { n, lattice }] of octaves.entries()) {
            const x = (i * n) / w,
              y = (j * n) / h,
              a = Math.floor(x),
              b = Math.floor(y);
            const u = smooth(0, 1, fract(x)),
              v = smooth(0, 1, fract(y));
            const at = (dx, dy) => lattice[((b + dy) % n) * n + ((a + dx) % n)];
            sum +=
              (0.535 / 2 ** k) *
              T.MathUtils.lerp(
                T.MathUtils.lerp(at(0, 0), at(1, 0), u),
                T.MathUtils.lerp(at(0, 1), at(1, 1), u),
                v,
              );
          }
          data.data.set(
            [sum * 255, sum * 255, sum * 255, 255],
            4 * (j * w + i),
          );
        }
      c.putImageData(data, 0, 0);
    },
    false,
  );
  distanceMat.onBeforeCompile = (sh) => {
    sh.uniforms.bank = { value: bankTexture };
    sh.uniforms.vapor = { value: vapor };
    sh.uniforms.mistTime = mistTime;
    sh.fragmentShader =
      "uniform sampler2D bank, vapor; uniform float mistTime;\n" +
      sh.fragmentShader.replace(
        "#include <map_fragment>",
        `
      vec4 garden=texture2D(map,clamp(vMapUv,0.,1.));
      vec4 trees=texture2D(bank,vec2(vMapUv.x+.33,clamp(vMapUv.y,0.,1.)));
      float inside=smoothstep(-.015,.115,vMapUv.x)*(1.-smoothstep(.91,1.015,vMapUv.x));
      vec2 skyUV=vMapUv-vec2(.268,.49);
      vec2 cloud=vMapUv*vec2(3.4,5.6)-vec2(mistTime*.011, .013*sin(mistTime*.19));
      float n=texture2D(vapor,cloud).r;
      float wisps=texture2D(vapor,cloud*2.4+vec2(.23,mistTime*.003)).r;
      vec2 bankOffset=vec2(skyUV.x/.19,(skyUV.y+.02-.055*sin(vMapUv.x*24.-mistTime*.17))/.099);
      float veil=smoothstep(.33,.71,.73*n+.27*wisps)*exp(-dot(bankOffset,bankOffset));
      vec3 sky=mix(trees,garden,inside).rgb;
      sky=mix(sky,vec3(.24,.30,.37),.63*veil);
      diffuseColor.rgb*=sky;`,
      );
  };
  mesh(scene, geometry(verts, null, uv, idx), distanceMat);
  const group = new T.Group();
  scene.add(group);
  const map = rockTexture;
  map.wrapS = map.wrapT = T.RepeatWrapping;
  map.colorSpace = T.SRGBColorSpace;
  map.anisotropy = 8;
  const rock = material(0x879991, 0.71, {
    map,
    bumpMap: map,
    bumpScale: 0.115,
    metalness: 0.015,
    envMapIntensity: 0.11,
  });
  const carved = material(0xaaa69a, 0.82, {
    map,
    bumpMap: map,
    bumpScale: 0.072,
    envMapIntensity: 0.12,
  });
  const bronze = material(0x504939, 0.41, { metalness: 0.59 });
  const floor = mesh(
    group,
    new T.PlaneGeometry(124, 124),
    material(0x182a28, 0.78, { map }),
    0,
    -0.24,
    -4,
  );
  floor.rotation.x = -Math.PI / 2;
  for (let i = 0; i < 195; i++) {
    const x = (rng() - 0.5) * 15,
      z = (rng() - 0.5) * 14;
    stone(x, z, 0.045 + rng() ** 2 * 0.26, 0.11, -0.16, rock, group);
  }
  const stepping = [];
  for (const [x, z, r, h] of [
    [-4.45, 2.53, 1.19, 0.46],
    [-3.7, 1.4, 0.99, 0.33],
    [-3.6, -0.63, 1.4, 0.36],
    [-4.9, -2.14, 1.05, 0.42],
    [-5.62, 1.45, 1.18, 0.39],
    [4.38, 1.1, 1.34, 0.44],
    [4.9, 2.66, 1.18, 0.43],
    [3.44, 3.9, 0.98, 0.32],
    [2.8, 5.4, 1.25, 0.27],
    [5.5, -1.83, 1.2, 0.54],
    [4.1, -3.35, 0.77, 0.42],
    [-3.8, 4.12, 0.83, 0.29],
    [-5.7, 4.18, 1.34, 0.4],
  ])
    stepping.push(stone(x, z, r, h, -0.03, rock, group));
  // Black grasses grow between water-worn paving stones.
  const blades = [];
  for (let i = 0; i < 83; i++) {
    const sign = i % 2 ? 1 : -1,
      x = sign * (3.57 + rng() * 2.15),
      z = -3.1 + rng() * 5.8;
    for (let k = 0; k < 4; k++) {
      const a = rng() * TAU,
        h = 0.12 + rng() ** 2 * 0.43,
        dx = Math.cos(a) * h * 0.55,
        dz = Math.sin(a) * h * 0.55;
      blades.push(x - 0.012, 0, z, x + 0.012, 0, z, x + dx, h, z + dz);
    }
  }
  mesh(
    group,
    geometry(blades),
    material(0x4b614b, 0.68, { side: T.DoubleSide }),
  );
  const roof = lantern(group, carved, bronze, glowMap, scene);
  scene.updateMatrixWorld();
  const drop = bamboo(group, scene, glowMap);
  const stamens = cherry(group);
  staticBatch(group);
  stoneMoss([...stepping, roof], scene);
  const pollen = new T.BufferGeometry();
  pollen.setAttribute("position", new T.Float32BufferAttribute(stamens, 3));
  scene.add(
    new T.Points(
      pollen,
      new T.PointsMaterial({ color: 0xd2b090, size: 0.013 }),
    ),
  );
  const petals = fallingPetals(scene);
  const insects = fireflies(scene, glowMap);
  return {
    impacts: (lo, hi) => [...petals.impacts(lo, hi), ...drop.impacts(lo, hi)],
    update(t, gust, heightAt = () => 0) {
      mistTime.value = t;
      insects(t);
      drop.update(t);
      petals.update(t, gust, heightAt);
    },
  };
}
