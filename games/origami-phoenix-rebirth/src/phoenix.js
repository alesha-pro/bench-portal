import * as THREE from 'three';
import { ease, mix } from './math.js';
import { paperMaterial } from './paper.js';

const R = 3.18,
  shoulderFront = 1.1,
  hipRear = -1.15;
const v = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const flat = (x, z) => v(x, 0, z);
const width = (z) => R - Math.abs(z);
const blend = (a, b, k) => a.clone().lerp(b, k);

// Each panel has a flat chart on the same diamond, a pleated cross-section in
// joint space, and a rigid parent. Joint motion survives at a fixed fold value.
export function createPhoenix() {
  const object = new THREE.Group(),
    bones = [],
    points = [],
    wingtips = [],
    surface = paperMaterial();
  const positions = [],
    uv = [],
    bary = [],
    ornament = [],
    nibs = [],
    creases = [];
  function joint(name, parent, rest, goal, pose) {
    const bone = new THREE.Bone();
    bone.name = name;
    const restRelative = rest.clone().sub(parent?.rest ?? v());
    const item = { bone, rest, restRelative, goal, pose };
    (parent?.bone ?? object).add(bone);
    bones.push(item);
    return item;
  }
  const root = joint('spine', null, v(), v(), () => {});
  function vertex(rest, end, nib = [0, 0]) {
    return { rest, end, nib };
  }
  // Split at the eight bird-base rays before folding. The barycentric coordinates
  // of the printed facet are carried through the clip, so hidden diagonals stay hidden.
  function interpolate(a, b, k) {
    return {
      rest: blend(a.rest, b.rest, k),
      end: blend(a.end, b.end, k),
      nib: a.nib.map((n, i) => mix(n, b.nib[i], k)),
      bar: a.bar.map((n, i) => mix(n, b.bar[i], k)),
    };
  }
  function clip(poly, distance) {
    const out = [];
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i],
        b = poly[(i + 1) % poly.length],
        da = distance(a.rest),
        db = distance(b.rest);
      if (da >= -1e-8) out.push(a);
      if (da * db < -1e-14) out.push(interpolate(a, b, da / (da - db)));
    }
    return out;
  }
  const rays = Array.from({ length: 8 }, (_, i) => [
    Math.cos((i * Math.PI) / 4),
    Math.sin((i * Math.PI) / 4),
  ]);
  function triangle(
    bone,
    a,
    b,
    c,
    shade = 0.6,
    foil = 0,
    mark = 0,
    mask = [0.19, 0.32, 0.24],
  ) {
    const chart = [a, b, c].map((p, i) => ({
      ...p,
      bar: [+(i === 0), +(i === 1), +(i === 2)],
    }));
    for (let side = 0; side < 8; side++) {
      const [ax, az] = rays[side],
        [bx, bz] = rays[(side + 1) % 8];
      const poly = clip(
        clip(chart, (p) => ax * p.z - az * p.x),
        (p) => p.x * bz - p.z * bx,
      );
      for (let i = 1; i + 1 < poly.length; i++) {
        const tri = [poly[0], poly[i], poly[i + 1]];
        const [r0, r1, r2] = tri.map((p) => p.rest);
        const winding =
          (r1.x - r0.x) * (r2.z - r0.z) - (r1.z - r0.z) * (r2.x - r0.x);
        if (Math.abs(winding) < 1e-9) continue;
        if (winding > 0) tri.reverse();
        for (const p of tri) {
          const ca = (p.rest.x * bz - p.rest.z * bx) * Math.SQRT2,
            cb = (ax * p.rest.z - az * p.rest.x) * Math.SQRT2;
          points.push({
            rest: p.rest.clone().sub(bone.rest),
            end: p.end,
            bone: bone.bone,
            side,
            ca,
            cb,
          });
          positions.push(0, 0, 0);
          bary.push(...p.bar);
          creases.push(...mask);
          ornament.push(shade, foil, mark);
          nibs.push(...p.nib);
          uv.push(
            0.5 + (p.rest.x + p.rest.z) / (2 * R),
            0.5 + (p.rest.x - p.rest.z) / (2 * R),
          );
        }
      }
    }
  }
  function crossSection(z, half, rx, y, tipZ, depth) {
    return [-1, -0.62, 0, 0.62, 1].map((u, i) =>
      vertex(
        flat(u * half, z),
        v(
          [-0.012, -rx, 0, rx, 0.012][i],
          y + [-depth, -depth * 0.12, depth * 0.65, -depth * 0.12, -depth][i],
          tipZ,
        ),
      ),
    );
  }
  function seam(bone, a, b, base = 0.6, metal = 0) {
    for (let i = 0; i < a.length - 1; i++) {
      triangle(bone, a[i], b[i], a[i + 1], base + 0.17 * (i % 2), metal);
      triangle(bone, a[i + 1], b[i], b[i + 1], base - 0.16 * (i % 2), metal);
    }
  }
  // Petal fold. In the sheet, the outer corners fill the complete quadrilateral.
  // In section, those two dog-ears fold inward to the central blade ridge.
  function petal(
    bone,
    restA,
    restB,
    restC,
    restD,
    a,
    b,
    tip,
    bow,
    ridge,
    metal,
    mark = 1,
  ) {
    const mid = blend(a, b, 0.5),
      span = b.clone().sub(a);
    const midRest = blend(restA, restB, 0.5),
      endRest = blend(restC, restD, 0.5);
    const center = blend(mid, tip, 0.5).add(bow);
    const ridgePoint = center.clone().add(v(0, ridge, 0));
    const va = vertex(restA, a, [-1, 0]),
      vb = vertex(restB, b, [1, 0]);
    const l = vertex(
      blend(restA, restC, 0.53),
      center.clone().addScaledVector(span, -0.7),
      [-1, 0.53],
    );
    const r = vertex(
      blend(restB, restD, 0.53),
      center.clone().addScaledVector(span, 0.7),
      [1, 0.53],
    );
    const e = vertex(
      restC,
      blend(center, tip, 0.62).addScaledVector(span, -0.34),
      [-1, 0.82],
    );
    const f = vertex(
      restD,
      blend(center, tip, 0.7).addScaledVector(span, 0.23),
      [1, 0.85],
    );
    const top = vertex(endRest, tip, [0, 1]);
    const k = vertex(blend(midRest, endRest, 0.44), ridgePoint, [0, 0.46]);
    const m = vertex(midRest, mid.clone().add(v(0, ridge * 0.34, 0)), [0, 0]);
    const outline = [va, l, e, top, f, r, vb, m];
    const tones = [0.66, 0.9, 1, 0.69, 0.31, 0.13, 0.28, 0.56];
    outline.forEach((p, i) =>
      triangle(
        bone,
        p,
        outline[(i + 1) % outline.length],
        k,
        tones[i],
        [0.2, 0.9, 1, 0.56, 0.06, 0.02, 0.15, 0.56][i] * metal,
        mark,
        [
          [0.07, 0.33, 0.28],
          [0.09, 0.07, 0.32],
          [0.93, 0.09, 0.43],
          [0.12, 0.93, 0.48],
          [0.08, 0.12, 0.31],
          [0.28, 0.08, 0.27],
          [0.8, 0.28, 0.17],
          [0.33, 0.8, 0.13],
        ][i],
      ),
    );
  }

  const core = [
    crossSection(hipRear, 0.38, 0.19, 0.015, -0.77, 0.21),
    crossSection(-0.35, 0.38, 0.33, 0.09, -0.27, 0.38),
    crossSection(0.42, 0.38, 0.4, 0.13, 0.28, 0.52),
    crossSection(shoulderFront, 0.38, 0.27, 0.1, 0.69, 0.31),
  ];
  for (let i = 0; i < 3; i++)
    seam(root, core[i], core[i + 1], 0.64, i === 2 ? 0.09 : 0);

  const neck = joint(
    'rising neck',
    root,
    flat(0, shoulderFront),
    v(0, 0.1, 0.69),
    (b, k) => {
      b.rotation.x = -1.01 * k;
    },
  );
  const neck0 = crossSection(
    shoulderFront,
    width(shoulderFront),
    0.267,
    0,
    0,
    0.27,
  );
  const neck1 = crossSection(1.64, width(1.64), 0.19, 0.03, 0.46, 0.18);
  const neck2 = crossSection(2.02, width(2.02), 0.13, 0.015, 0.93, 0.14);
  seam(neck, neck0, neck1, 0.7);
  seam(neck, neck1, neck2, 0.76, 0.12);
  const head = joint(
    'head counterfold',
    neck,
    flat(0, 2.02),
    v(0, 0.02, 0.93),
    (b, k) => {
      b.rotation.x = 0.9 * k;
    },
  );
  const skullA = crossSection(2.02, 0.46, 0.14, 0, 0, 0.13);
  const skullB = crossSection(2.31, 0.37, 0.205, 0.1, 0.3, 0.2);
  const skullC = crossSection(2.6, width(2.6), 0.12, 0.05, 0.55, 0.105);
  seam(head, skullA, skullB, 0.62);
  seam(head, skullB, skullC, 0.86, 0.35);
  const beak = joint(
    'hooked beak',
    head,
    flat(0, 2.6),
    v(0, 0.05, 0.55),
    (b, k) => {
      b.rotation.x = 0.2 * k;
    },
  );
  const bill = crossSection(2.6, width(2.6), 0.121, 0, 0, 0.102);
  const hook = crossSection(2.92, width(2.92), 0.055, 0.006, 0.3, 0.043);
  const point = crossSection(R, 0, 0.002, -0.08, 0.44, 0.002);
  seam(beak, bill, hook, 0.8, 0.94);
  seam(beak, hook, point, 0.55, 0.88);

  for (const s of [-1, 1]) {
    // Side stock of the head becomes three sharply reversed crown points.
    for (let j = 0; j < 3; j++) {
      const u = j / 3,
        q = (j + 1) / 3;
      const side = (z, base, k) => flat(s * mix(base, width(z), k), z);
      const a = side(2.02, 0.46, u),
        b = side(2.02, 0.46, q);
      const c = side(2.31, 0.37, u),
        d = side(2.31, 0.37, q);
      const aa = v(s * (0.05 + 0.105 * u), 0.09 + 0.045 * u, 0.23 - 0.1 * u);
      const bb = v(s * (0.05 + 0.105 * q), 0.09 + 0.045 * q, 0.23 - 0.1 * q);
      petal(
        head,
        a,
        b,
        c,
        d,
        aa,
        bb,
        v(s * (0.07 + 0.28 * u), 0.64 - 0.26 * u, -0.55 + 0.07 * u),
        v(0, 0.07, 0),
        0.028,
        0.97,
      );
      const end = flat(s * width(2.6), 2.6);
      triangle(
        head,
        vertex(c, aa),
        vertex(d, bb),
        vertex(end, v(s * 0.12, 0.05, 0.55)),
        0.42,
        0.38,
      );
    }
  }
  const eyes = [],
    headDetail = new THREE.Group();
  headDetail.matrixAutoUpdate = false;
  for (const s of [-1, 1]) {
    const socket = new THREE.Group();
    headDetail.add(socket);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(1, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xffdf8c }),
    );
    iris.scale.set(0.019, 0.042, 0.065);
    socket.add(iris);
    const pupil = new THREE.Mesh(
      iris.geometry,
      new THREE.MeshBasicMaterial({ color: 0x200e14 }),
    );
    pupil.position.x = s * 0.018;
    pupil.scale.set(0.008, 0.026, 0.035);
    socket.add(pupil);
    socket.userData.side = s;
    eyes.push(socket);
  }
  for (const s of [-1, 1]) {
    const lead = joint(
      'wing shoulder ' + s,
      root,
      flat(s * 0.38, 0),
      v(s * 0.28, 0.03, 0),
      (b, k, t, flight) => {
        const beat = Math.sin(t * 2.48 + 0.38);
        b.rotation.z = s * (0.58 * k + 0.39 * flight * beat);
        b.rotation.y = s * (-0.16 * k + 0.055 * flight * Math.cos(t * 2.48));
      },
    );
    const wrist = joint(
      'wing wrist ' + s,
      lead,
      flat(s * 1.48, 0),
      v(s * 1.0, 0.125, 0),
      (b, k, t, flight) => {
        b.rotation.z =
          s * (0.24 * k + 0.29 * flight * Math.sin(t * 2.48 - 0.9));
        b.rotation.y =
          s * (0.17 * k + 0.06 * flight * Math.sin(t * 2.48 - 0.5));
      },
    );
    const count = 8;
    for (let i = 0; i < count; i++) {
      const u = i / count,
        q = (i + 1) / count,
        h = (u + q) / 2;
      const z = (k) =>
        k < 0.5 ? mix(shoulderFront, 0, 2 * k) : mix(0, hipRear, 2 * k - 1);
      const wristX = (k) => mix(0.38, width(z(k)), 0.5);
      const rootPt = (k) => flat(s * 0.38, z(k)),
        edge = (k) => flat(s * width(z(k)), z(k)),
        wristPt = (k) => flat(s * wristX(k), z(k));
      const rootFold = (k) =>
        v(s * 0.015, 0.04 * Math.sin(Math.PI * k), mix(0.68, -0.75, k));
      const wristFold = (k) =>
        v(
          s * (1.0 + 0.2 * Math.sin(k * Math.PI)),
          0.125 + 0.08 * Math.sin(k * Math.PI),
          mix(0.78, -0.98, k),
        );
      const rim = (k) => wristFold(k).sub(v(s, 0.125, 0));
      // A continuous accordion between shoulder and wrist supports the free primaries.
      const ca = vertex(rootPt(u), rootFold(u), [-1, 0]),
        cb = vertex(rootPt(q), rootFold(q), [1, 0]);
      const cc = vertex(wristPt(u), wristFold(u), [-1, 1]),
        cd = vertex(wristPt(q), wristFold(q), [1, 1]);
      const lip = vertex(
        wristPt(h),
        wristFold(h).add(v(s * 0.16, 0.055, 0)),
        [0, 1],
      );
      const ridge = vertex(
        blend(rootPt(h), wristPt(h), 0.5),
        blend(rootFold(h), wristFold(h), 0.55).add(v(0, 0.095, 0)),
        [0, 0.53],
      );
      const contour = [ca, cc, lip, cd, cb];
      contour.forEach((point, j) =>
        triangle(
          lead,
          point,
          contour[(j + 1) % 5],
          ridge,
          [0.83, 0.9, 0.6, 0.34, 0.5][j],
          (j === 1 ? 0.72 : j === 0 ? 0.29 : 0.035) * (i % 3 === 0 ? 1 : 0.64),
          1,
          [0.17, j === 2 ? 0.72 : 0.12, 0.34],
        ),
      );
      const anchor = wristPt(h),
        goal = rim(h);
      const feather = joint(
        'primary ' + s + '/' + i,
        wrist,
        anchor,
        goal,
        (b, k, t, flight) => {
          b.rotation.y =
            s *
            ((h - 0.38) * 0.26 * k +
              0.032 * flight * Math.cos(t * 2.48 - h * 0.95));
          b.rotation.z =
            s * (h * 0.12 * k + 0.05 * flight * Math.sin(t * 2.48 - h));
        },
      );
      const a = rim(u).sub(goal),
        b = rim(q).sub(goal);
      const tip = v(
        s * (2.18 - 0.83 * h + 0.11 * Math.sin(h * Math.PI)),
        0.32 - 0.29 * h,
        0.67 - 1.42 * h - 0.42 * h * h,
      );
      petal(
        feather,
        wristPt(u),
        wristPt(q),
        edge(u),
        edge(q),
        a,
        b,
        tip,
        v(s * 0.09, 0.08, -0.035),
        0.065,
        i % 3 === 0 ? 0.98 : 0.66,
      );
      if (i === 0 || i === 3 || i === 6)
        wingtips.push({ chain: [lead, wrist, feather], tip });
    }
  }

  const hip = joint(
    'tail fan',
    root,
    flat(0, hipRear),
    v(0, 0.025, -0.76),
    (b, k, t, flight) => {
      b.rotation.x = (-0.27 + 0.08 * flight * Math.sin(t * 2.48 - 0.92)) * k;
    },
  );
  for (let i = 0; i < 7; i++) {
    const u = i / 7,
      q = (i + 1) / 7,
      h = u + q - 1;
    const rear = (k) => flat((2 * k - 1) * width(hipRear), hipRear);
    const a = rear(u),
      b = rear(q),
      anchor = blend(a, b, 0.5);
    const goal = v(h * 0.23, -0.015 * Math.abs(h), 0);
    const plume = joint(
      'train plume ' + i,
      hip,
      anchor,
      goal,
      (b, k, t, flight) => {
        b.rotation.y =
          (-h * 0.34 + 0.037 * flight * Math.sin(t * 1.45 + i * 0.45)) * k;
        b.rotation.x =
          (0.04 * Math.abs(h) +
            0.055 * flight * Math.sin(t * 2.48 - 1.5 - i * 0.12)) *
          k;
      },
    );
    const tip = v(
      h * 0.68,
      -0.24 + 0.19 * Math.abs(h),
      -3.0 + Math.abs(h) * 1.03,
    );
    const ra = v(-0.065, 0, 0),
      rb = v(0.065, 0, 0);
    const mid = tip
      .clone()
      .multiplyScalar(0.43)
      .add(v(h * 0.16, 0.13, 0));
    // Paired pleats widen at the middle like the eye of a phoenix feather.
    const wa = 0.178 + 0.048 * (1 - Math.abs(h)),
      restTip = flat(0, -R);
    const l = vertex(
      blend(a, restTip, 0.42),
      mid.clone().add(v(-wa, 0, 0)),
      [-1, 0.43],
    );
    const r = vertex(
      blend(b, restTip, 0.42),
      mid.clone().add(v(wa, 0, 0)),
      [1, 0.43],
    );
    const end = vertex(restTip, tip, [0, 1]);
    const ridge = vertex(
      blend(anchor, restTip, 0.48),
      mid.clone().add(v(0, 0.074, -0.04)),
      [0, 0.47],
    );
    const aa = vertex(a, ra, [-1, 0]),
      bb = vertex(b, rb, [1, 0]);
    [aa, l, end, r, bb].forEach((p, j, ring) =>
      triangle(
        plume,
        p,
        ring[(j + 1) % 5],
        ridge,
        [0.31, 0.88, 0.34, 0.61, 0.7][j],
        j === 1 ? (i % 2 ? 0.88 : 0.55) : 0,
        1,
      ),
    );
  }

  const geo = new THREE.BufferGeometry();
  const attr = (name, array, size) =>
    geo.setAttribute(name, new THREE.Float32BufferAttribute(array, size));
  attr('position', positions, 3);
  attr('uv', uv, 2);
  attr('bary', bary, 3);
  attr('ornament', ornament, 3);
  attr('nib', nibs, 2);
  attr('creaseMask', creases, 3);
  const pos = geo.attributes.position;
  pos.setUsage(THREE.DynamicDrawUsage);
  const mesh = new THREE.Mesh(geo, surface);
  mesh.frustumCulled = false;
  // The joint matrices are expressed in rig space; the mesh has its own world carrier.
  const carrier = new THREE.Group();
  carrier.add(mesh);
  const transformed = v();
  function update(progress, t, flight, fire, style) {
    const k = ease(0.24, 1, progress);
    // For the symmetric eight-sector base, adjacent unit rays must retain a
    // 45-degree angle. Solving their dot product gives the alternating elevation.
    const beta =
      1.04 * ease(0, 0.3, progress) * (1 - ease(0.3, 0.79, progress));
    const a = Math.cos(beta) / Math.SQRT2,
      b = Math.sin(beta);
    const alpha =
      Math.atan2(b, a) -
      Math.acos(Math.min(1, 1 / (Math.SQRT2 * Math.hypot(a, b))));
    const lifts = rays.map(([x, z], i) => {
      const angle = i % 2 ? alpha : beta;
      return v(
        x * (Math.cos(angle) - 1),
        -Math.sin(angle),
        z * (Math.cos(angle) - 1),
      );
    });
    for (const part of bones) {
      part.bone.position.copy(part.restRelative).lerp(part.goal, k);
      part.pose(part.bone, k, t, flight);
    }
    object.updateMatrixWorld(true);
    headDetail.matrix.copy(head.bone.matrixWorld);
    headDetail.matrixWorldNeedsUpdate = true;
    let minY = 0;
    const pleat = k;
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      transformed
        .copy(p.rest)
        .lerp(p.end, pleat)
        .applyMatrix4(p.bone.matrixWorld);
      transformed
        .addScaledVector(lifts[p.side], p.ca)
        .addScaledVector(lifts[(p.side + 1) % 8], p.cb);
      pos.setXYZ(i, transformed.x, transformed.y, transformed.z);
      minY = Math.min(minY, transformed.y);
    }
    pos.needsUpdate = true;
    for (const eye of eyes) {
      eye.position.set(eye.userData.side * 0.192, 0.115, 0.303);
      eye.scale.setScalar(ease(0.72, 0.97, k));
    }
    // Eyes use the same head matrix, then follow the world carrier.
    const u = surface.uniforms;
    u.fold.value = progress;
    u.time.value = t;
    u.fire.value = fire;
    u.style.value = style;
    return minY;
  }
  // Render the eye sockets through matching world transforms without double-transforming the paper.
  const sceneObject = new THREE.Group();
  sceneObject.add(carrier, headDetail);
  const traceJoint = new THREE.Object3D();
  function wingtip(index, t, flight) {
    const { chain, tip } = wingtips[index],
      result = tip.clone();
    for (let i = chain.length - 1; i >= 0; i--) {
      const part = chain[i];
      traceJoint.position.copy(part.goal);
      traceJoint.rotation.set(0, 0, 0);
      part.pose(traceJoint, 1, t, flight);
      traceJoint.updateMatrix();
      result.applyMatrix4(traceJoint.matrix);
    }
    return result;
  }
  return {
    group: sceneObject,
    update,
    wingtip,
    joints: bones.length,
    triangles: points.length / 3,
  };
}
