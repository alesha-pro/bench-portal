import * as THREE from "three";
import { illustratedRider, neckerchief } from "./postman.js";
import { paperTexture, wallTexture, roofTiles } from "./art.js";
import { print, cutout } from "./print.js";
const mats = {};
function mat(c) {
  if (!mats[c])
    mats[c] = new THREE.MeshStandardMaterial({
      map: paperTexture(c),
      roughness: 1,
      side: THREE.DoubleSide,
    });
  return mats[c];
}
export function mesh(g, m, parent, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(g, typeof m === "string" ? mat(m) : m);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}
export function box(parent, w, h, d, c, x = 0, y = 0, z = 0) {
  return mesh(new THREE.BoxGeometry(w, h, d), c, parent, x, y, z);
}
function edge(o, color = "#796c50", opacity = 0.3) {
  const e = new THREE.LineSegments(
    new THREE.EdgesGeometry(o.geometry, 25),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
  );
  o.add(e);
}
export function beam(parent, a, b, r, c) {
  const va = new THREE.Vector3(...a),
    vb = new THREE.Vector3(...b);
  const m = mesh(
    new THREE.CylinderGeometry(r, r, va.distanceTo(vb), 6),
    c,
    parent,
  );
  m.position.copy(va).add(vb).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    vb.sub(va).normalize(),
  );
  return m;
}
export function cottage(color = "#eee1bc", roof = "#b6694e", scale = 1) {
  const g = new THREE.Group();
  g.scale.setScalar(scale);
  const front = new THREE.MeshStandardMaterial({
    map: wallTexture(color),
    roughness: 1,
  });
  const side = new THREE.MeshStandardMaterial({
    map: wallTexture(color, "side"),
    roughness: 1,
  });
  const walls = mesh(
    new THREE.BoxGeometry(1.35, 1.05, 1.1),
    [side, side, mat(color), mat(color), front, side],
    g,
    0,
    0.525,
    0,
  );
  edge(walls);
  const shape = new THREE.Shape();
  shape.moveTo(-0.675, 0);
  shape.lineTo(0.675, 0);
  shape.lineTo(0, 0.64);
  shape.closePath();
  for (const z of [-0.55, 0.55]) {
    const tri = mesh(new THREE.ShapeGeometry(shape), color, g, 0, 1.05, z);
    edge(tri);
  }
  const tile = new THREE.MeshStandardMaterial({
    map: roofTiles(roof),
    roughness: 1,
  });
  for (const sign of [-1, 1]) {
    const r = box(g, 0.99, 0.045, 1.35, roof, sign * 0.38, 1.38, 0);
    r.rotation.z = -sign * 0.7;
    edge(r, "#754d38", 0.5);
    const tilePrint = mesh(
      new THREE.PlaneGeometry(1.35, 0.99),
      tile,
      r,
      0,
      0.024,
      0,
    );
    tilePrint.rotation.order = "YXZ";
    tilePrint.rotation.set(-Math.PI / 2, (sign * Math.PI) / 2, 0, "YXZ");
  }
  beam(g, [0, 1.72, -0.69], [0, 1.72, 0.69], 0.045, roof);
  for (const sign of [-1, 1]) {
    beam(g, [0, 1.69, 0.602], [sign * 0.65, 1.067, 0.602], 0.028, "#9c7351");
    beam(
      g,
      [sign * 0.39, 1.069, 0.57],
      [sign * 0.24, 1.29, 0.57],
      0.017,
      "#ae8d65",
    );
  }
  const chimney = box(g, 0.19, 0.55, 0.2, "#d5b99a", 0.35, 1.67, -0.23);
  edge(chimney);
  box(g, 0.24, 0.07, 0.25, "#b99b7b", 0.35, 1.96, -0.23);
  mesh(new THREE.CircleGeometry(0.108, 20), "#637c70", g, 0, 1.245, 0.557);
  mesh(new THREE.RingGeometry(0.103, 0.125, 20), "#e7d8af", g, 0, 1.245, 0.563);
  box(g, 0.012, 0.194, 0.01, "#e8d9bb", 0, 1.245, 0.565);
  box(g, 0.19, 0.011, 0.01, "#e8d9bb", 0, 1.245, 0.565);
  const hood = box(g, 0.48, 0.037, 0.29, roof, 0, 0.753, 0.642);
  hood.rotation.x = 0.17;
  for (const sign of [-1, 1])
    beam(
      g,
      [sign * 0.198, 0.56, 0.555],
      [sign * 0.198, 0.72, 0.728],
      0.015,
      "#9b8265",
    );
  for (let j = 0; j < 5; j++)
    box(g, 0.192, 0.01, 0.204, "#a68162", 0.35, 1.48 + j * 0.091, -0.23);
  box(g, 0.55, 0.06, 0.3, "#ded4b4", 0, 0.035, 0.66);
  for (const s of [-1, 1]) {
    box(g, 0.2, 0.12, 0.13, "#b76c50", s * 0.5, 0.08, 0.68);
    for (let i = 0; i < 4; i++)
      mesh(
        new THREE.SphereGeometry(0.055, 5, 4),
        "#c99368",
        g,
        s * 0.5 + (i - 1.5) * 0.04,
        0.2,
        0.68,
      );
  }
  return g;
}
export function windmill() {
  const g = new THREE.Group();
  const oak = new THREE.MeshStandardMaterial({
    map: print(112, 256, (ctx, ink) => {
      ctx.fillStyle = "#9d7954";
      ctx.fillRect(0, 0, 112, 256);
      for (let j = 0; j < 20; j++) {
        const x = j * 6;
        ink(
          "M" + x + " -5q-8 49 -2 78t0 67q-9 49 2 124",
          null,
          j % 2 ? "#6a503d94" : "#d8b280aa",
          1.7,
        );
      }
      ink("M36 137q-8 -22 -3 -39 5 -15 8 -2 5 25 -5 41z", null, "#73563e", 2);
    }),
    roughness: 1,
  });
  const limewash = new THREE.MeshStandardMaterial({
    map: print(512, 256, (ctx, ink) => {
      ctx.fillStyle = "#ead9b5";
      ctx.fillRect(0, 0, 512, 256);
      for (let row = 0; row < 18; row++) {
        const y = row * 15;
        for (let j = -1; j < 17; j++) {
          const x = j * 32 + (row % 2) * 16;
          if ((j * 13 + row * 19) % 5 > 1 && row < 13) continue;
          ink(
            "M" + x + " " + y + "l28 -1 2 12 -28 1z",
            (j + row) % 3 ? "#c4b79970" : "#e0c49caa",
            "#a89a786e",
            1.2,
          );
        }
      }
    }),
    roughness: 1,
  });
  const body = mesh(
    new THREE.CylinderGeometry(0.36, 0.56, 1.7, 4),
    limewash,
    g,
    0,
    0.85,
    0,
  );
  body.rotation.y = Math.PI / 4;
  edge(body);
  const shingles = new THREE.MeshStandardMaterial({
    map: roofTiles("#986c52"),
    roughness: 1,
  });
  const cap = mesh(new THREE.ConeGeometry(0.65, 0.7, 4), shingles, g, 0, 2, 0);
  cap.rotation.y = Math.PI / 4;
  edge(cap);
  box(g, 0.22, 0.44, 0.02, "#738477", 0, 0.22, 0.42);
  const sails = new THREE.Group();
  sails.position.set(0, 1.6, 0.53);
  g.add(sails);
  const canvas = print(180, 460, (ctx, ink) => {
    ctx.fillStyle = "#f2dfae";
    ctx.fillRect(0, 0, 180, 460);
    for (let x = 0; x < 180; x += 4)
      ink("M" + x + " 0l3 460", null, "#98795136", 1.5);
    for (let y = 0; y < 460; y += 4)
      ink("M0 " + y + "l180 1", null, "#fff6d366", 1);
    ctx.fillStyle = "#ad5340";
    ctx.fillRect(0, 369, 180, 24);
    ctx.fillRect(0, 406, 180, 7);
    for (const x of [9, 82, 169]) {
      ink("M" + x + " 0v460", null, "#a68d64", 3);
      ctx.setLineDash([7, 5]);
      ink("M" + (x + 3) + " 1v459", null, "#fff4d0", 2);
      ctx.setLineDash([]);
    }
    for (const y of [7, 138, 261, 448])
      ink("M2 " + y + "q88 6 177 0", null, "#a28a64", 3);
    ink("M90 107l-21 24 21 24 21 -24z", "#66847b");
    ink("M90 115v31m-7 -15h14", null, "#f3e2b6", 3);
  });
  const sailMaterial = new THREE.MeshStandardMaterial({
    map: canvas,
    roughness: 1,
    side: THREE.DoubleSide,
  });
  for (let i = 0; i < 4; i++) {
    const arm = new THREE.Group();
    arm.rotation.z = (i * Math.PI) / 2 + 0.4;
    sails.add(arm);
    box(arm, 0.06, 1.39, 0.05, oak, 0, 0.69, 0);
    box(arm, 0.012, 1.35, 0.012, "#c4a273", -0.013, 0.69, 0.025);
    const sail = new THREE.PlaneGeometry(1, 1, 4, 8);
    const attr = sail.attributes.position;
    for (let j = 0; j < attr.count; j++) {
      const u = sail.attributes.uv.getX(j),
        v = sail.attributes.uv.getY(j);
      attr.setXYZ(
        j,
        0.02 + u * (0.22 + 0.12 * v),
        0.42 + v * 0.87 + 0.044 * u,
        0.018 +
          u * (0.11 * v - 0.04) +
          0.062 * Math.sin(u * Math.PI) * Math.sin(v * Math.PI),
      );
    }
    attr.needsUpdate = true;
    sail.computeVertexNormals();
    mesh(sail, sailMaterial, arm);
    for (let j = 0; j < 5; j++) {
      const v = j / 4;
      beam(
        arm,
        [-0.038, 0.42 + v * 0.87, 0.036],
        [0.035 + 0.245 + v * 0.085, 0.45 + v * 0.87, 0.018 + (0.11 * v - 0.04)],
        0.009,
        "#a58b62",
      );
    }
  }
  const hub = mesh(
    new THREE.CylinderGeometry(0.14, 0.14, 0.12, 12),
    oak,
    sails,
    0,
    0,
    0.075,
  );
  hub.rotation.x = Math.PI / 2;
  mesh(new THREE.SphereGeometry(0.073, 10, 6), "#c69a57", sails, 0, 0, 0.16);
  const plaque = cutout(
    print(168, 70, (ctx, ink) => {
      ink("M3 6l160 -3 2 61 -161 3Z", "#557469", "#bdad85", 4);
      ctx.fillStyle = "#f1dfb9";
      ctx.textAlign = "center";
      ctx.font = "bold 27px Georgia";
      ctx.fillText("FLOUR", 84, 33);
      ctx.font = "15px Georgia";
      ctx.fillText("•  1876  •", 84, 54);
    }),
    0.47,
    0.2,
  );
  plaque.position.set(0, 0.8, 0.399);
  g.add(plaque);
  for (const x of [-0.26, 0.26]) {
    box(g, 0.045, 0.66, 0.04, "#a78c65", x, 0.4, 0.389);
    box(g, 0.142, 0.22, 0.045, "#65837b", x, 0.99, 0.346);
    box(g, 0.147, 0.016, 0.05, "#e9d9b2", x, 0.99, 0.349);
  }
  // Short service ladder on the mill wall, clear of the rotating vanes.
  for (const z of [-0.12, 0.12])
    beam(g, [-0.435, 0.06, z], [-0.34, 1.14, z], 0.019, oak);
  for (let j = 0; j < 8; j++) {
    const y = 0.14 + j * 0.13,
      x = -0.438 + y * 0.089;
    beam(g, [x, y, -0.143], [x, y, 0.143], 0.015, oak);
  }
  g.userData.sails = sails;
  return g;
}
export function fence() {
  const g = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    box(g, 0.055, 0.32, 0.04, "#d4c9a6", i * 0.25 - 0.625, 0.16, 0);
  }
  for (const y of [0.12, 0.25]) box(g, 1.4, 0.04, 0.035, "#e3d8b4", 0, y, 0.02);
  return g;
}
export function mailbox() {
  const g = new THREE.Group();
  box(g, 0.05, 0.5, 0.05, "#8b7d58", 0, 0.25, 0);
  const b = box(g, 0.24, 0.2, 0.18, "#b75942", 0, 0.55, 0);
  edge(b);
  const lid = box(g, 0.275, 0.036, 0.203, "#a34c3a", 0, 0.66, 0);
  lid.rotation.x = -0.07;
  const plate = cutout(
    print(94, 50, (_, ink) => {
      ink("M4 4l85 -1 1 43 -86 1z", "#ebd1a1", "#785941", 3);
      ink("M9 9l37 23 39 -23M9 41l24 -19m51 19 -25 -20", null, "#8d674c", 3);
    }),
    0.11,
    0.06,
  );
  plate.position.set(0, 0.512, 0.095);
  g.add(plate);
  box(g, 0.14, 0.016, 0.012, "#f2d7b2", 0, 0.57, 0.096);
  const flag = new THREE.Group();
  flag.position.set(0.137, 0.53, 0.015);
  g.add(flag);
  box(flag, 0.023, 0.24, 0.024, "#816848", 0, 0.1, 0);
  box(flag, 0.11, 0.073, 0.022, "#e1ae58", 0.044, 0.203, 0);
  g.userData.flag = flag;
  return g;
}
export function cyclist() {
  const g = new THREE.Group();
  const wheels = [];
  for (const x of [-0.32, 0.32]) {
    const w = new THREE.Group();
    w.position.set(x, 0.23, 0);
    g.add(w);
    mesh(new THREE.TorusGeometry(0.215, 0.022, 6, 24), "#4b5d54", w);
    mesh(new THREE.TorusGeometry(0.187, 0.009, 4, 24), "#cdbb8e", w);
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      beam(
        w,
        [0, 0, 0],
        [0.19 * Math.cos(a), 0.19 * Math.sin(a), 0],
        0.006,
        "#a6a792",
      );
    }
    const marker = box(w, 0.047, 0.021, 0.018, "#d4a156", 0.126, 0.083, 0.012);
    marker.rotation.z = 0.63;
    mesh(new THREE.SphereGeometry(0.031, 8, 6), "#a48b59", w, 0, 0, 0.01);
    wheels.push(w);
  }
  for (const [a, b] of [
    [
      [-0.32, 0.23, 0],
      [-0.12, 0.54, 0],
    ],
    [
      [-0.12, 0.54, 0],
      [0.11, 0.23, 0],
    ],
    [
      [0.11, 0.23, 0],
      [-0.32, 0.23, 0],
    ],
    [
      [-0.12, 0.54, 0],
      [0.25, 0.53, 0],
    ],
    [
      [0.25, 0.53, 0],
      [0.11, 0.23, 0],
    ],
    [
      [0.25, 0.53, 0],
      [0.32, 0.23, 0],
    ],
    [
      [0.25, 0.53, 0],
      [0.22, 0.67, 0],
    ],
  ])
    beam(g, a, b, 0.018, "#b8533c");
  box(g, 0.17, 0.03, 0.095, "#5e6252", -0.13, 0.57, 0);
  beam(g, [0.22, 0.67, 0], [0.35, 0.67, 0], 0.014, "#5e6252");
  const rider = new THREE.Group();
  g.add(rider);
  rider.add(illustratedRider());
  const bag = box(rider, 0.22, 0.165, 0.11, "#af7e46", -0.215, 0.741, 0.118);
  edge(bag, "#644b38", 0.7);
  const satchel = cutout(
    print(140, 96, (ctx, ink) => {
      ink("M2 4l135 -2 -1 88 -131 3z", "#99613c", "#6c4936", 6);
      ink("M3 3h133v36q-59 35 -132 7z", "#ba8652", "#765039", 4);
      ctx.setLineDash([5, 4]);
      ink("M8 11l122 -1 -1 25q-53 32 -119 6z", null, "#f0c38b", 2.5);
      ctx.setLineDash([]);
      ink("M60 33h18v37H60z", "#79553c");
      ink("M58 47h22v14H58z", null, "#d8b26a", 4);
    }),
    0.25,
    0.18,
  );
  satchel.position.set(-0.215, 0.75, 0.207);
  rider.add(satchel);
  box(rider, 0.205, 0.067, 0.018, "#c59658", -0.215, 0.78, 0.181);
  box(rider, 0.042, 0.043, 0.013, "#dfbf76", -0.21, 0.749, 0.193);
  const letter = box(
    rider,
    0.137,
    0.075,
    0.016,
    "#f1dfb8",
    -0.215,
    0.824,
    0.152,
  );
  letter.rotation.z = -0.12;
  beam(g, [-0.47, 0.4, 0], [-0.32, 0.23, 0], 0.011, "#657064");
  beam(g, [-0.47, 0.41, 0], [-0.2, 0.41, 0], 0.015, "#69746a");
  mesh(new THREE.SphereGeometry(0.033, 8, 6), "#c3a45d", g, 0.25, 0.699, 0);
  const crank = new THREE.Group();
  crank.position.set(0.079, 0.255, 0);
  g.add(crank);
  mesh(new THREE.TorusGeometry(0.072, 0.009, 5, 22), "#bdab78", crank);
  for (const sign of [-1, 1])
    beam(
      crank,
      [0, 0, 0.074 * sign],
      [sign * 0.095, 0, 0.074 * sign],
      0.014,
      "#7c7e68",
    );
  const legs = [-1, 1].map((sign) => {
    const thigh = new THREE.Group(),
      shin = new THREE.Group(),
      boot = new THREE.Group();
    thigh.position.set(-0.084, 0.631, 0.075 * sign);
    shin.position.z = boot.position.z = thigh.position.z;
    rider.add(thigh, shin, boot);
    beam(
      thigh,
      [0, 0, 0],
      [0.27, 0, 0],
      0.04,
      sign > 0 ? "#445863" : "#414e4b",
    );
    beam(shin, [0, 0, 0], [0.29, 0, 0], 0.03, sign > 0 ? "#4f6770" : "#445651");
    box(boot, 0.12, 0.046, 0.068, "#80573d", 0.028, 0, 0);
    box(boot, 0.128, 0.014, 0.071, "#584a3b", 0.031, -0.023, 0);
    box(boot, 0.1, 0.013, 0.082, "#b7a075", 0, -0.034, 0);
    return { thigh, shin, boot, sign };
  });
  const scarf = neckerchief();
  rider.add(scarf.ribbon);
  const pose = (t, ride, route) => {
    const wheel =
      (ride * (route.end - route.start - 2 * route.gap)) / (0.215 * g.scale.x);
    const pedalling = Math.sin(ride * Math.PI),
      angle = -wheel * 0.48 + 0.5;
    wheels.forEach((w) => (w.rotation.z = -wheel));
    crank.rotation.z = angle;
    rider.position.y = 0.011 * pedalling * Math.cos(2 * angle);
    for (const { thigh, shin, boot, sign } of legs) {
      const x = crank.position.x + sign * 0.095 * Math.cos(angle);
      const y =
        crank.position.y +
        sign * 0.095 * Math.sin(angle) +
        0.034 -
        rider.position.y;
      const dx = x - thigh.position.x,
        dy = y - thigh.position.y,
        d = Math.hypot(dx, dy);
      thigh.rotation.z =
        Math.atan2(dy, dx) +
        Math.acos(
          THREE.MathUtils.clamp(
            (d * d + 0.27 ** 2 - 0.29 ** 2) / (2 * d * 0.27),
            -1,
            1,
          ),
        );
      shin.position.x = thigh.position.x + 0.27 * Math.cos(thigh.rotation.z);
      shin.position.y = thigh.position.y + 0.27 * Math.sin(thigh.rotation.z);
      shin.rotation.z = Math.atan2(y - shin.position.y, x - shin.position.x);
      boot.position.x = x;
      boot.position.y = y;
    }
    scarf.flutter(t, pedalling);
  };
  g.userData = {
    wheels,
    rider,
    crank,
    joints: legs.flatMap((leg) => [leg.thigh, leg.shin, leg.boot]),
    scarf: scarf.ribbon,
    pose,
  };
  g.scale.setScalar(1.05);
  return g;
}
export function envelope() {
  const g = new THREE.Group();
  const texture = print(300, 190, (ctx, ink) => {
    ctx.fillStyle = "#f7e7c7";
    ctx.fillRect(0, 0, 300, 190);
    ink("M3 184l104 -90 80 -2 111 91z", "#efdbb6", "#af8e6f", 2);
    ink("M2 2l138 105q10 8 20 -1L298 2z", "#f9edce", "#a88b6c", 3);
    for (let i = 0; i < 14; i++) {
      ctx.fillStyle = i % 2 ? "#698f8a" : "#ba614c";
      ctx.save();
      ctx.translate(7 + i * 22, 181);
      ctx.transform(1, 0, -0.45, 1, 0, 0);
      ctx.fillRect(0, 0, 10, 5);
      ctx.restore();
    }
    ink(
      "M134 100q-1 -14 12 -17 15 -5 24 7 10 15 -5 24 -21 11 -31 -5z",
      "#ad4b3a",
      "#934634",
      2.5,
    );
    ink("M140 100a12 12 0 1 0 24 0a12 12 0 1 0 -24 0", null, "#d88d64", 1.8);
    ink("M147 107q0 -15 14 -16 -1 15 -14 16m-3 4 12 -15", null, "#e7b084", 2.1);
    ink("M4 4h292v182H4z", null, "#af9370", 2.3);
  });
  g.add(cutout(texture, 0.72, 0.45));
  return g;
}
