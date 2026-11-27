import * as THREE from "three";
import { atlasTexture, canvasTexture, rng } from "./art.js";
import {
  cottage,
  windmill,
  fence,
  mailbox,
  cyclist,
  envelope,
} from "./objects.js";
import {
  recipient,
  fingerpost,
  flowerBank,
  washLine,
  sortingOffice,
  millSacks,
} from "./village.js";
import { chimneySmoke, mountainSky } from "./weather.js";
import { waterStencil, riverTraffic, shimmer } from "./river.js";
import { compassNeedle, postalEffects } from "./postal-effects.js";
import { batch, mountain, brushTree, paperPine } from "./scenery.js";
import { routes, foldPoint, riderPoint, worldPoint, ease } from "./routes.js";

function surfaceGeometry(r) {
  // Clip the sheet into parallel ribbons in crease coordinates. Both lips
  // have their own vertices, preserving a crisp normal on either side.
  const corners = [
    [-8, -5],
    [-8, 5],
    [8, 5],
    [8, -5],
  ].map(([x, z]) => [
    x * Math.cos(r.angle) + z * Math.sin(r.angle),
    -x * Math.sin(r.angle) + z * Math.cos(r.angle),
  ]);
  const points = [],
    uv = [],
    indices = [];
  function clip(poly, limit, sign) {
    const out = [];
    poly.forEach((b, i) => {
      const a = poly[(i + poly.length - 1) % poly.length],
        inside = (p) => (p[0] - limit) * sign >= -1e-9;
      if (inside(a) !== inside(b)) {
        const t = (limit - a[0]) / (b[0] - a[0]);
        out.push([limit, a[1] + (b[1] - a[1]) * t]);
      }
      if (inside(b)) out.push(b);
    });
    return out;
  }
  const cuts = [
    -11,
    -r.gap - 0.3,
    -r.gap - 0.075,
    -r.gap - 0.025,
    -r.gap,
    -r.gap + 0.09,
    -0.36,
    -0.1,
    -0.06,
    -0.03,
    0,
    0.03,
    0.06,
    0.1,
    0.36,
    r.gap - 0.09,
    r.gap,
    r.gap + 0.025,
    r.gap + 0.075,
    r.gap + 0.3,
    11,
  ];
  for (let j = 1; j < cuts.length; j++) {
    const face = clip(clip(corners, cuts[j - 1], 1), cuts[j], -1);
    const offset = points.length / 3;
    face.forEach(([s, l]) => {
      const [x, z] = worldPoint(s, l, r);
      points.push(x, 0, z);
      uv.push((x + 8) / 16, 1 - (z + 5) / 10);
    });
    for (let k = 1; k < face.length - 1; k++)
      indices.push(offset, offset + k, offset + k + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(
      new Float32Array(points.length).fill(1),
      3,
    ),
  );
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}
function deskShadow() {
  const c = document.createElement("canvas");
  c.width = 640;
  c.height = 432;
  const p = c.getContext("2d");
  const tex = canvasTexture(c);
  return {
    tex,
    draw(f, r) {
      p.clearRect(0, 0, c.width, c.height);
      p.save();
      p.filter = "blur(13px)";
      p.beginPath();
      const corners = [
        [-8, -5],
        [8, -5],
        [8, 5],
        [-8, 5],
      ];
      for (let i = 0; i < 4; i++) {
        const [x, z] = corners[i],
          [ex, ez] = corners[(i + 1) % 4];
        for (let j = 0; j < 50; j++) {
          const k = j / 50,
            pt = foldPoint(x + (ex - x) * k, z + (ez - z) * k, f, r);
          const u = (pt.x + 0.27 + 10) * 32,
            v = (pt.z + 0.27 + 6.75) * 32;
          if (i === 0 && j === 0) p.moveTo(u, v);
          else p.lineTo(u, v);
        }
      }
      p.closePath();
      p.fillStyle = "#6b563b";
      p.fill();
      p.restore();
      tex.needsUpdate = true;
    },
  };
}
export class Valley {
  constructor(canvas, film) {
    this.canvas = canvas;
    this.film = film;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-10, 10, 6, -6, 0.1, 110);
    this.scene.add(new THREE.HemisphereLight(0xfff7e9, 0xafbdab, 1.74));
    const light = new THREE.DirectionalLight(0xffedcf, 2.05);
    light.position.set(-7, 15, 6);
    light.castShadow = true;
    Object.assign(light.shadow.camera, {
      left: -12,
      right: 12,
      top: 10,
      bottom: -10,
      near: 0.1,
      far: 39,
    });
    light.shadow.mapSize.set(2048, 2048);
    light.shadow.radius = 4;
    light.shadow.normalBias = 0.013;
    light.shadow.bias = -0.00016;
    this.scene.add(light);
    this.deskShadow = deskShadow();
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 13.5),
      new THREE.MeshBasicMaterial({
        map: this.deskShadow.tex,
        transparent: true,
        depthWrite: false,
        opacity: 0.24,
      }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.28;
    this.scene.add(shadow);
    this.shadow = shadow;
    this.waterTime = { value: 0 };
    const stencil = waterStencil();
    this.sheets = routes.map((r) => {
      const geom = surfaceGeometry(r);
      const rest = geom.attributes.position.array.slice();
      const top = new THREE.Mesh(
        geom,
        new THREE.MeshStandardMaterial({
          map: atlasTexture(r),
          vertexColors: true,
          roughness: 1,
          side: THREE.DoubleSide,
        }),
      );
      shimmer(top.material, this.waterTime, stencil);
      top.receiveShadow = true;
      top.castShadow = true;
      this.scene.add(top);
      const layers = ["#aa9373", "#e3d3af", "#c8b392", "#f4e7c8"].map(
        (color, i) => {
          const layer = new THREE.Mesh(
            geom,
            new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide }),
          );
          layer.position.y = -(4 - i) * 0.017;
          layer.scale.set(1 + (i % 2) * 0.0009, 1, 1.0015);
          this.scene.add(layer);
          return layer;
        },
      );
      return { top, layers, rest };
    });
    this.assets = [];
    const place = (obj, x, z, angle = 0, hinge = 0.04) => {
      const wrapper = new THREE.Group();
      wrapper.add(obj);
      obj.rotation.y += angle;
      this.scene.add(wrapper);
      this.assets.push({ wrapper, x, z, hinge });
      return wrapper;
    };
    this.smoke = [];
    const house = (x, z, scale, color, roof, angle = 0, decorate) => {
      const obj = cottage(color, roof, scale);
      if (decorate) decorate(obj);
      batch(obj);
      this.smoke.push(chimneySmoke(obj, this.smoke.length));
      return place(obj, x, z, angle, 0.055);
    };
    this.homes = [];
    this.homes.push(house(...routes[0].dest, 0.96, "#f2d9a4", "#b4573f", -0.1));
    this.homes.push(house(...routes[1].dest, 0.94, "#d5d9ad", "#7e8870", 0.1));
    this.mill = windmill();
    batch(this.mill, [this.mill.userData.sails]);
    batch(this.mill.userData.sails);
    this.homes.push(place(this.mill, ...routes[2].dest, -0.12, 0.055));
    house(-6.45, -0.77, 0.82, "#e8be98", "#98503d", 0.12, sortingOffice);
    house(-4.1, -3.13, 0.67, "#e6d5aa", "#817c63", -0.07);
    house(2.86, -3.25, 0.62, "#e7c8a5", "#a96348", 0.12);
    house(-5.6, 2.19, 0.6, "#e6d7b3", "#aa694c", 0.18);
    [
      [-6.3, -3.8, 2.9, 1.4],
      [-4.9, -4.12, 3.3, 2.04],
      [-3.42, -4.02, 2.3, 1.25],
      [1.8, -4.35, 2.05, 1.04],
    ].forEach(([x, z, w, h], i) => {
      const o = mountain(w, h, i + 71);
      batch(o);
      place(o, x, z, -0.16, 0.12);
    });
    const rand = rng(2027);
    const trees = [
      [-7, -2.4, 1.05],
      [-6.72, -1.9, 0.74],
      [-5.57, -2.95, 0.92],
      [-3.12, -3.12, 0.82],
      [-2.81, -3.28, 1.0],
      [-4.05, 1.99, 0.78],
      [-4.78, 1.98, 0.94],
      [-6.73, 2.34, 0.8],
      [-6.98, 1.8, 1.02],
      [-2.72, 4.22, 0.68],
      [-1.86, -2.65, 0.81],
      [1.21, -3.06, 0.91],
      [1.85, -2.53, 1.13],
      [2.31, -2.75, 0.73],
      [3.35, -1.47, 0.79],
      [7.12, -2.23, 0.98],
      [6.82, -1.89, 0.68],
      [7.12, 1.13, 0.93],
      [7.3, 2.27, 0.73],
      [3.28, 2.82, 1.02],
      [3.57, 3.17, 0.76],
      [-0.78, 3.37, 0.77],
      [0.82, -1.69, 0.63],
    ];
    this.trees = [];
    trees.forEach(([x, z, h], i) => {
      const o =
        i % 3 === 0 || z < -2.5
          ? paperPine(h, i + 113)
          : brushTree(
              h,
              i + 63,
              ["#91a66e", "#adb366", "#8b9d64", "#c3aa63"][i % 4],
            );
      batch(o);
      this.trees.push(o);
      place(o, x, z, -0.04 + rand() * 0.3, 0.12);
    });
    [
      [-5.86, -0.1],
      [-4.26, 1.98],
      [4.95, 0.29],
      [6.76, 2.6],
      [4.7, -3.2],
    ].forEach(([x, z]) => {
      const o = fence();
      batch(o);
      place(o, x, z, 0.15);
    });
    this.residents = routes.map((r, i) => {
      const person = recipient(i);
      place(
        person.root,
        r.dest[0] + (i === 2 ? 0.78 : 0.65),
        r.dest[1] + 0.82,
        -0.2,
        0.018,
      );
      return person;
    });
    this.signs = [
      [-3.55, 0.79],
      [2.69, 1.14],
      [3.55, -2.2],
    ].map(([x, z], i) => {
      const sign = fingerpost(i);
      place(sign.root, x, z, -0.09, 0.016);
      return sign.head;
    });
    this.flowers = [
      [-6.75, -0.13],
      [-5.05, 2.63],
      [-3.87, 2.08],
      [-3.65, -1.85],
      [-1.85, 1.94],
      [1.45, -1.28],
      [2.52, 1.72],
      [4.63, 0.37],
      [6.55, 3.55],
      [4.62, -3.02],
      [2.97, 3.56],
      [-1.5, 3.87],
      [-6.4, -2.67],
      [6.8, -0.25],
    ].map(([x, z], i) => {
      const flowers = flowerBank(71 + i, i % 3 !== 1);
      flowers.scale.set(0.73 + 0.39 * rand(), 0.72 + 0.34 * rand(), 1);
      place(flowers, x, z, 0.4 * Math.sin(i));
      return flowers;
    });
    const sacks = millSacks();
    batch(sacks);
    place(sacks, 5.0, -3.17);
    this.laundry = washLine();
    place(this.laundry.root, -4.91, -0.76, 0.16);
    this.needle = compassNeedle();
    place(this.needle, -6.65, 3.66, 0, 0);
    this.sky = mountainSky(this.scene);
    this.river = riverTraffic(this.scene);
    this.postboxes = routes.map((r) => {
      const [x, z] = r.dest;
      const o = mailbox();
      o.scale.setScalar(1.12);
      batch(o, [o.userData.flag]);
      const anchor = place(o, x + 1.23, z + 0.91);
      return { anchor, flag: o.userData.flag };
    });
    this.bike = cyclist();
    this.bike.scale.setScalar(1.22);
    const { wheels, rider, crank, joints, scarf } = this.bike.userData;
    batch(this.bike, [...wheels, rider, crank]);
    for (const part of [...wheels, crank, ...joints]) batch(part);
    batch(rider, [...joints, scarf]);
    this.scene.add(this.bike);
    this.letter = envelope();
    this.scene.add(this.letter);
    this.postalEffects = postalEffects(this.scene);
    this.prevFold = null;
  }
  render(state, story = false) {
    const { route, fold, ride, delivered, t, local, final } = state,
      r = routes[route];
    const { clientWidth: w, clientHeight: h } = this.canvas;
    if (this.width !== w || this.height !== h) {
      this.renderer.setSize(w, h, false);
      this.width = w;
      this.height = h;
    }
    const shapeChanged = this.prevRoute !== route || this.prevFold !== fold;
    if (shapeChanged) {
      this.deskShadow.draw(fold, r);
      this.shadow.position.y = 1.3 - fold * 1.08;
      this.sheets.forEach(({ top, layers }, i) => {
        top.visible = i === route;
        layers.forEach((l) => (l.visible = i === route));
      });
      const { top, rest } = this.sheets[route],
        attr = top.geometry.attributes.position;
      for (let j = 0; j < rest.length; j += 3) {
        const p = foldPoint(rest[j], rest[j + 2], fold, r);
        attr.setXYZ(j / 3, p.x, p.y, p.z);
        const signed =
          rest[j] * Math.cos(r.angle) + rest[j + 2] * Math.sin(r.angle);
        const s = Math.abs(signed);
        const pigment =
          1 -
          fold *
            (0.47 * Math.exp(-s / 0.21) +
              (signed < 0 ? 0.39 : 0.18) *
                Math.exp(-Math.abs(s - r.gap) / 0.065));
        top.geometry.attributes.color.setXYZ(
          j / 3,
          pigment,
          pigment * 0.995,
          pigment * 0.983,
        );
      }
      attr.needsUpdate = true;
      top.geometry.attributes.color.needsUpdate = true;
      top.geometry.computeVertexNormals();
      top.geometry.computeBoundingSphere();
      const axis = new THREE.Vector3(-Math.sin(r.angle), 0, Math.cos(r.angle));
      for (const { wrapper, x, z, hinge } of this.assets) {
        const p = foldPoint(x, z, fold, r);
        wrapper.position.set(p.x, p.y + 0.008, p.z);
        wrapper.quaternion.setFromAxisAngle(
          axis,
          p.tilt * 0.88 + hinge * (1 - fold),
        );
        // A cutout inside the pleat folds its tab flat as the panels touch.
        // Keep its printed face inside the shrinking space between the lips.
        const inPleat =
          Math.abs(x * Math.cos(r.angle) + z * Math.sin(r.angle)) < r.gap;
        const clearance = inPleat ? 1 - ease((fold - 0.4) / 0.6) : 1;
        wrapper.visible = clearance > 0.001;
        wrapper.scale.set(
          0.45 + 0.55 * clearance,
          (0.93 + 0.07 * fold) * clearance,
          clearance,
        );
      }
      this.prevRoute = route;
      this.prevFold = fold;
    }
    this.waterTime.value = t;
    this.river(t, fold, r);
    this.sky(t);
    this.smoke.forEach((animate) => animate(t));
    const gust = Math.sin(t * 1.23);
    this.mill.userData.sails.rotation.z =
      t * 0.85 + 0.14 * Math.sin(t * 0.73) + 0.24;
    this.needle.rotation.y =
      -0.11 + 0.15 * Math.sin(t * 1.19) + 0.035 * Math.sin(t * 2.6);
    this.trees.forEach((tree, i) => {
      tree.rotation.z = 0.039 * Math.sin(t * 1.45 + i * 0.72) + 0.021 * gust;
      tree.rotation.x = 0.025 * Math.cos(t * 1.16 + i);
    });
    this.flowers.forEach(
      (flowers, i) =>
        (flowers.rotation.z = 0.04 * gust + 0.042 * Math.sin(t * 2 + i * 0.54)),
    );
    this.signs.forEach(
      (sign, i) =>
        (sign.rotation.z = -0.042 + 0.066 * Math.sin(t * 1.75 + i * 1.9)),
    );
    this.laundry.cloths.forEach((cloth, i) => {
      cloth.rotation.x = -0.18 + 0.26 * Math.sin(t * 2.8 + i * 0.9);
      cloth.rotation.z = 0.06 * Math.sin(t * 2.5 + i);
    });
    this.residents.forEach(({ root, arm, letter }, i) => {
      const greeting = i === route ? ease((ride - 0.57) / 0.41) : 0;
      arm.rotation.z =
        -0.19 + (0.16 + 0.55 * greeting) * Math.sin(t * (i + 4.3) + i);
      root.position.y =
        (0.009 + 0.022 * greeting) * (1 + Math.sin(t * 3.6 + i));
      root.rotation.z = 0.023 * Math.sin(t * 1.6 + i);
      letter.visible =
        (i === route && delivered > 0.88) || (story && i < route);
    });
    const [bx, bz] = riderPoint(ride, r),
      p = foldPoint(bx, bz, fold, r);
    this.bike.position.set(p.x, p.y + 0.025, p.z);
    const [ax, az] = riderPoint(Math.max(0, ride - 0.002), r),
      [cx, cz] = riderPoint(Math.min(1, ride + 0.002), r);
    const prev = foldPoint(ax, az, fold, r),
      next = foldPoint(cx, cz, fold, r);
    this.bike.rotation.y = -Math.atan2(next.z - prev.z, next.x - prev.x);
    this.bike.userData.pose(t, ride, r);
    const dest = this.homes[route].position;
    const postbox = this.postboxes[route].anchor.position;
    const flight = Math.sin(Math.PI * delivered),
      insert = ease((delivered - 0.67) / 0.33);
    this.letter.visible = delivered > 0.001 && delivered < 0.999;
    this.letter.position.set(
      p.x + (postbox.x - p.x) * delivered,
      p.y + 0.88 + 0.98 * flight + (postbox.y + 0.64 - p.y - 0.88) * delivered,
      p.z + (postbox.z - p.z) * delivered + 0.15 + 0.18 * flight,
    );
    this.letter.rotation.set(-0.17 - insert * 1.25, 0.09, 0.22 * flight);
    this.letter.scale.setScalar(0.23 + 0.82 * flight - 0.11 * insert);
    this.postboxes.forEach(({ flag }, i) => {
      const received = i === route ? insert : story && i < route ? 1 : 0;
      flag.rotation.z = -Math.PI * 0.49 * (1 - received);
    });
    this.postalEffects(state, r, postbox);
    const aspect = w / h;
    let span = Math.max(10.3, 18.35 / aspect);
    const target = new THREE.Vector3(0, this.film ? 1.78 : 2.2, 0);
    const direction = new THREE.Vector3(4.1, 14.9, 19.8);
    if (aspect < 1 && !this.film) direction.set(13.8, 25, 11.5);
    if (story) {
      if (this.film) {
        const follow =
          route === 0 ? ease((local - 2) / 3.2) : ease(local / 2.8);
        const pullback = final;
        const credits =
          (route === 0
            ? 1 - ease((local - 1.6) / 1.8)
            : 1 - ease(local / 2.3)) + pullback;
        const zoom = 1 + (route === 0 ? 0.64 : 0.8) * follow * (1 - pullback);
        span =
          (Math.max(11.45, 20.4 / aspect) * (1 + 0.12 * credits)) /
          (zoom + 0.17 * ease((local - 6) / 2) * (1 - pullback));
        target.x = p.x * 0.76 * follow * (1 - pullback) - 0.7 * credits;
        const greeting = ease((local - 6.95) / 1.55) * (1 - pullback);
        span /= 1 + 0.22 * greeting;
        target.x += (0.25 * p.x + 0.36) * greeting;
        target.y += 1.75 * credits + 0.37 * greeting;
        target.z = p.z * (0.65 + 0.35 * greeting) * follow * (1 - pullback);
        direction.set(
          [-6.1, -2.8, 4.4][route] + 0.9 * Math.sin(local * 0.25),
          14.0 + 1.4 * greeting + 2.4 * pullback,
          20.5,
        );
      } else {
        span /= 1 + 0.045 * Math.sin(Math.PI * Math.min(local / 10, 1));
        target.x = p.x * 0.07;
        if (route === 1 && aspect >= 1) direction.x = -3.0;
      }
    }
    this.camera.left = (-span * aspect) / 2;
    this.camera.right = (span * aspect) / 2;
    this.camera.top = span / 2;
    this.camera.bottom = -span / 2;
    this.camera.position.copy(target).add(direction);
    this.camera.lookAt(target);
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
    this.renderer.render(this.scene, this.camera);
    const project = (v) => {
      const q = v.clone().project(this.camera);
      return [(q.x * 0.5 + 0.5) * w, (-q.y * 0.5 + 0.5) * h];
    };
    const grip = worldPoint(0, 3.95, r),
      gp = foldPoint(...grip, fold, r);
    return {
      label: project(
        dest.clone().add(new THREE.Vector3(0, route === 2 ? 3.0 : 2.1, 0)),
      ),
      handle: project(new THREE.Vector3(gp.x, gp.y + 0.03, gp.z)),
    };
  }
}
