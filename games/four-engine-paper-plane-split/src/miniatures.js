import * as THREE from '../vendor/three/build/three.module.js';
import { rng } from './world.js';

// A reusable photographic setup for the kiln-fired figures on the clay plate.
export function sculptures(renderer) {
  const cache = new Map();
  function stamp(kind, seed = 0) {
    const id = kind + ':' + seed;
    if (cache.has(id)) return cache.get(id);
    const random = rng(seed + 3145),
      scene = new THREE.Scene(),
      root = new THREE.Group();
    scene.add(root);
    const materials = [],
      geometries = [];
    function mat(c) {
      const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.91, metalness: 0 });
      materials.push(m);
      return m;
    }
    function put(geo, m, x, y, z) {
      geometries.push(geo);
      const obj = new THREE.Mesh(geo, m);
      obj.position.set(x, y, z);
      obj.castShadow = true;
      obj.receiveShadow = true;
      root.add(obj);
      return obj;
    }
    const block = (w, h, d, m, x, y, z) => put(new THREE.BoxGeometry(w, h, d), m, x, y, z);
    const ball = (r, m, x, y, z, scale) => {
      const a = put(new THREE.IcosahedronGeometry(r, 1), m, x, y, z);
      a.scale.set(...scale);
      return a;
    };
    const wood = mat('#78513a'),
      bark = mat('#5d4c35');
    if (kind === 'cottage') {
      const wall = mat('#f2d69b'),
        stone = mat('#a59070'),
        dark = mat('#443c36'),
        glass = mat('#698883'),
        tile = mat('#ae5237');
      block(33, 22, 38, wall, 0, 11, 0);
      block(35, 2.5, 40, stone, 0, 1.25, 0);
      const gable = new THREE.Shape();
      gable.moveTo(-16.5, 0);
      gable.lineTo(0, 17);
      gable.lineTo(16.5, 0);
      gable.closePath();
      put(new THREE.ExtrudeGeometry(gable, { depth: 38, bevelEnabled: false }), wall, 0, 22, -19);
      for (const side of [-1, 1]) {
        const roof = block(27.6, 2.2, 44, tile, side * 9, 30.5, 0);
        roof.rotation.z = -side * 0.79;
      }
      const tiles = ['#ae573b', '#b96044', '#bf694a', '#a6543b', '#c46d48'].map(mat);
      for (const side of [-1, 1])
        for (let row = 0; row < 6; row++)
          for (let j = 0; j < 11; j++) {
            const x = 1.3 + row * 3.35,
              zz = -20 + j * 4 + (row % 2) * 0.65;
            const shingle = block(
              5.0,
              1.05,
              3.85,
              tiles[Math.floor(random() * 5)],
              x * side,
              40.7 - x,
              zz,
            );
            shingle.rotation.z = -side * 0.79;
          }
      block(5, 13, 5, stone, 6, 39, -8);
      block(6.5, 2, 6.5, tile, 6, 46, -8);
      const door = mat('#62766a');
      block(7.4, 13, 1, dark, 4, 7, 19.6);
      block(5.9, 11.5, 1, door, 4, 6.4, 20.25);
      for (const [x, y] of [
        [-9, 12],
        [0, 27],
      ]) {
        block(7.5, 8, 1.1, wood, x, y, 19.7);
        block(5.7, 6.3, 0.8, glass, x, y, 20.5);
        block(0.64, 6.2, 1, wall, x, y, 21);
        block(6, 0.64, 1, wall, x, y, 21);
      }
      for (const z of [-10, 8]) {
        block(0.9, 7.4, 7, wood, 17, 12, z);
        block(0.8, 5.7, 5.3, glass, 17.6, 12, z);
        block(0.9, 5.7, 0.6, wall, 18.1, 12, z);
      }
      for (const x of [-15, 15]) block(1.2, 18, 1.4, wood, x, 12, 19.7);
      block(9, 1, 3, stone, 4, 0.6, 21);
      block(10, 1.2, 3.9, stone, 4, 1.8, 20.1);
    } else {
      const pine = kind === 'fir',
        h = pine ? 36 : 29;
      put(new THREE.CylinderGeometry(0.65, 1.25, h * 0.69, 8), bark, 0, h * 0.345, 0);
      const foliage = (
        pine
          ? ['#536342', '#5d7048', '#788454', '#858c55', '#626f48']
          : ['#8b934f', '#849151', '#9d9c58', '#ad9f5b', '#77834a']
      ).map(mat);
      if (pine) {
        for (let j = 0; j < 6; j++) {
          const y = 8 + j * 4.8,
            rr = 10.4 - j * 1.38;
          const branch = put(
            new THREE.ConeGeometry(rr, 12.4 - j * 0.8, 11),
            foliage[j % 5],
            Math.sin(j) * 0.55,
            y,
            0,
          );
          branch.rotation.y = j * 0.68;
          branch.rotation.z = 0.052 * Math.sin(j);
          for (let a = 0; a < 8; a++) {
            const angle = (a * Math.PI) / 4 + j;
            const b = ball(
              rr * 0.55,
              foliage[(j + 1) % 5],
              Math.cos(angle) * rr * 0.54,
              y - 3 + random(),
              Math.sin(angle) * rr * 0.54,
              [1, 0.52, 0.66],
            );
            b.rotation.y = -angle;
          }
        }
      } else {
        for (let j = 0; j < 38; j++) {
          const angle = j * 2.4,
            yy = j / 37,
            rr = Math.sqrt(Math.max(0, 1 - (yy * 2 - 1) ** 2));
          ball(
            3.8 + random() * 1.5,
            foliage[Math.floor(random() * 5)],
            Math.cos(angle) * rr * 8,
            10 + yy * 18,
            Math.sin(angle) * rr * 7,
            [1, 1.13, 0.85],
          );
        }
      }
    }
    const cam = new THREE.OrthographicCamera(-40, 40, 47, -23, 1, 340);
    cam.position.set(55, 46, 97);
    cam.lookAt(0, 0, 0);
    cam.updateMatrixWorld();
    if (kind !== 'cottage') {
      cam.left = -21;
      cam.right = 21;
      cam.top = 43;
      cam.bottom = -6;
      cam.updateProjectionMatrix();
    }
    const hemi = new THREE.HemisphereLight('#ffedca', '#a2957b', 1.28);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffdfad', 3.35);
    sun.position.set(-34, 63, 43);
    sun.castShadow = true;
    sun.shadow.mapSize.set(512, 512);
    Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 55, bottom: -35, far: 170 });
    sun.shadow.normalBias = 0.1;
    sun.shadow.bias = -0.00015;
    scene.add(sun);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(288, 252, false);
    renderer.render(scene, cam);
    const img = document.createElement('canvas');
    img.width = 288;
    img.height = 252;
    img.getContext('2d').drawImage(renderer.domElement, 0, 0);
    renderer.shadowMap.enabled = false;
    for (const m of materials) m.dispose();
    for (const gg of geometries) gg.dispose();
    sun.shadow.dispose();
    cache.set(id, img);
    return img;
  }
  return stamp;
}
