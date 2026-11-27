import * as THREE from '../vendor/three/build/three.module.js';
import { mergeGeometries } from '../vendor/three/examples/jsm/utils/BufferGeometryUtils.js';
import { mill, TAU } from './world.js';

// Both shaders photograph the same modeled tower, cap, mill shaft and linen sails.
export function windmill(renderer) {
  const scene = new THREE.Scene(),
    cam = new THREE.OrthographicCamera(-84, 84, 84, -84, 0.1, 430);
  cam.position.set(0, 25, 270);
  cam.lookAt(0, 14, 0);
  const rotor = new THREE.Group(),
    tower = new THREE.Group();
  scene.add(tower, rotor);
  const clay = ['#d9b982', '#945642', '#71533e', '#f4dbac', '#434b42', '#b69a6f'];
  const neon = ['#293753', '#72496e', '#8adddf', '#537796', '#ff9dbc', '#46768b'];
  const pbr = clay.map(
    (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.82, side: THREE.DoubleSide }),
  );
  const holo = neon.map((c) => new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
  const bins = new Map();
  function part(group, material, geometry, x, y, z, rz = 0, ry = 0) {
    geometry = geometry.toNonIndexed().deleteAttribute('uv');
    geometry.rotateZ(rz);
    geometry.rotateY(ry);
    geometry.translate(x, y, z);
    const id = (group === rotor ? 'r' : 't') + material;
    if (!bins.has(id)) bins.set(id, { group, material, geos: [] });
    bins.get(id).geos.push(geometry);
  }
  const box = (group, m, w, h, d, x, y, z, angle = 0) =>
    part(group, m, new THREE.BoxGeometry(w, h, d), x, y, z, angle);
  const hubY = 15;
  part(tower, 0, new THREE.CylinderGeometry(11.2, 23, 71, 12), 0, hubY - 34, -4);
  part(tower, 1, new THREE.ConeGeometry(16, 17, 12), 0, hubY + 9.5, -4);
  for (let j = 0; j < 8; j++) {
    const y = hubY - 67 + j * 8.6,
      rr = 22.6 - j * 1.42;
    part(tower, 5, new THREE.CylinderGeometry(rr, rr + 0.24, 1.1, 12), 0, y, -4);
  }
  box(tower, 4, 8, 16, 1.7, 1, hubY - 60, 17);
  box(tower, 4, 6.1, 8.4, 1.7, -2, hubY - 32, 13);
  box(tower, 2, 0.75, 8.6, 1.9, -2, hubY - 32, 14);
  box(tower, 2, 6.3, 0.8, 1.9, -2, hubY - 32, 14);
  rotor.position.set(0, hubY, 13);
  for (let j = 0; j < 4; j++) {
    const rot = (j * Math.PI) / 2;
    function bladeBox(m, w, h, d, x, y, z) {
      box(
        rotor,
        m,
        w,
        h,
        d,
        x * Math.cos(rot) - y * Math.sin(rot),
        x * Math.sin(rot) + y * Math.cos(rot),
        z,
        rot,
      );
    }
    bladeBox(2, 2.1, 59, 2.4, 0, 29, 0);
    bladeBox(3, 8.8, 33, 0.6, 5.4, 41.5, -0.9);
    bladeBox(2, 1, 36, 1.2, 10.4, 42, 0);
    bladeBox(2, 0.7, 34, 1.2, 5.4, 42, 0);
    for (let i = 0; i < 7; i++) bladeBox(2, 11.2, 0.88, 1.3, 5.25, 24.7 + i * 5.4, 0.1);
  }
  part(rotor, 2, new THREE.SphereGeometry(3.9, 12, 8), 0, 0, 1.5);
  const pieces = [];
  bins.forEach(({ group, material, geos }) => {
    const merged = mergeGeometries(geos);
    geos.forEach((g) => g.dispose());
    const solid = new THREE.Mesh(merged, pbr[material]);
    group.add(solid);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(merged, 21),
      new THREE.LineBasicMaterial({
        color: material === 1 ? 0xff9fc4 : 0x8af0ee,
        transparent: true,
        opacity: material === 0 ? 0.78 : 0.96,
      }),
    );
    group.add(edges);
    pieces.push({ solid, edges, material });
  });
  scene.add(new THREE.HemisphereLight(0xffead0, 0x9ca6a6, 1.45));
  const sun = new THREE.DirectionalLight(0xffddb2, 2.35);
  sun.position.set(-3, 5, 4);
  scene.add(sun);
  return function (g, s, t) {
    const n = s === 2;
    pieces.forEach(({ solid, edges, material }) => {
      solid.material = (n ? holo : pbr)[material];
      edges.visible = n;
    });
    rotor.rotation.z = (-t * TAU) / 15 + 0.36;
    renderer.render(scene, cam);
    g.save();
    if (n) {
      g.shadowColor = '#54e5ff';
      g.shadowBlur = 4;
    }
    // Camera center is 14 units above the tower's local origin; hub maps to y -74.
    g.drawImage(renderer.domElement, mill.x - 84, mill.y - 74 - 84, 168, 168);
    g.restore();
  };
}
