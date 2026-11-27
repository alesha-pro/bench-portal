import * as THREE from '../vendor/three/build/three.module.js';
import { poly, oval } from './art.js';
import { TAU, mill, ridge } from './world.js';

const folds = [
  [52, 7, 1],
  [-42, 30, 0],
  [-21, 0, 9],
  [-24, -12, -7],
  [-47, -21, 3],
];
const facets = [
  [0, 1, 2],
  [0, 2, 3],
  [0, 3, 4],
];
const paints = [
  ['#ff9760', '#a13634', '#f06446'],
  ['#ff8e51', '#8e3034', '#fe6340'],
  ['#ff965d', '#b93065', '#fd5757'],
  ['#ff965c', '#b34330', '#e15d43'],
];
export function makePlane() {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(1);
  renderer.setSize(240, 240, false);
  renderer.setClearColor(0, 0);
  const scene = new THREE.Scene(),
    cam = new THREE.OrthographicCamera(-67, 67, 67, -67, 0.1, 500);
  cam.position.z = 230;
  cam.lookAt(0, 0, 0);
  const root = new THREE.Group();
  root.rotation.order = 'ZYX';
  scene.add(root);
  const positions = facets.flatMap((face) => face.flatMap((i) => folds[i]));
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.computeVertexNormals();
  facets.forEach((_, i) => geom.addGroup(i * 3, 3, i));
  const pbr = paints[3].map(
    (color) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.76,
        metalness: 0.035,
        side: THREE.DoubleSide,
        flatShading: true,
      }),
  );
  const wire = paints[2].map(
    (color) =>
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.4,
        roughness: 0.42,
        metalness: 0.23,
        side: THREE.DoubleSide,
      }),
  );
  const mesh = new THREE.Mesh(geom, pbr);
  root.add(mesh);
  const hems = new THREE.LineSegments(
    new THREE.EdgesGeometry(geom, 0),
    new THREE.LineBasicMaterial({ color: 0xffe3a5, transparent: true, opacity: 0.85 }),
  );
  root.add(hems);
  scene.add(new THREE.HemisphereLight(0xfff0df, 0xb5bac6, 1.53));
  const sun = new THREE.DirectionalLight(0xffe2c1, 2.5);
  sun.position.set(-4, 7, 6);
  scene.add(sun);
  const scratch = new THREE.Vector3();
  function pose(t, p) {
    root.rotation.set(
      0.25 + 0.41 * Math.sin((t * TAU) / 5),
      0.19 * Math.sin((t * TAU) / 6),
      -p.angle,
      'ZYX',
    );
    root.updateMatrixWorld();
  }
  function corners() {
    return folds.map((v) => {
      scratch.set(...v).applyMatrix4(root.matrixWorld);
      return [scratch.x, -scratch.y];
    });
  }
  return {
    renderer,
    shadow(g, s, t, p) {
      if (s !== 3) return;
      pose(t, p);
      const pts = corners();
      // Parallel sunlight projects the folds onto the receiving hillside.
      const ground = Math.max(p.y + 14, ridge(2, p.x) + 32);
      const altitude = ground - p.y;
      const draw = (dx, y, sy, alpha) => {
        g.save();
        g.translate(p.x + dx, y);
        g.scale(0.92, sy);
        g.globalAlpha = alpha;
        poly(g, [pts[0], pts[1], pts[2], pts[4]], '#624d48');
        g.restore();
      };
      draw(altitude * 0.24, ground, 0.24, 0.2);
      // Intercept the same projection at the windmill tower and sail plane.
      const { x, y } = mill;
      g.save();
      g.beginPath();
      g.moveTo(x - 23, y);
      g.lineTo(x - 12, y - 74);
      g.lineTo(x, y - 93);
      g.lineTo(x + 12, y - 74);
      g.lineTo(x + 22, y);
      g.closePath();
      g.clip();
      draw(altitude * 0.19, p.y + altitude * 0.64, 0.58, 0.43);
      g.restore();
    },
    paint(g, s, t, p) {
      pose(t, p);
      g.save();
      g.translate(p.x, p.y);
      if (s < 2) {
        const pts = corners(),
          outline = s === 1 ? '#362f28' : '#925d48';
        if (s === 0) {
          g.shadowBlur = 8;
          g.shadowColor = '#ffc471a8';
        }
        facets.forEach((f, i) =>
          poly(
            g,
            f.map((k) => pts[k]),
            paints[s][i],
            outline,
            s === 1 ? 2.2 : 0.9,
          ),
        );
        g.shadowBlur = 0;
        const [a, b, c] = pts;
        poly(
          g,
          [
            [a[0] * 0.85 + c[0] * 0.15, a[1] * 0.85 + c[1] * 0.15],
            [b[0] * 0.84 + a[0] * 0.16, b[1] * 0.84 + a[1] * 0.16],
          ],
          null,
          '#ffddac',
          1.05,
        );
        if (s === 0) {
          for (let i = 1; i < 16; i++) {
            const v = i / 16;
            const x = b[0] * (1 - v) + a[0] * v,
              y = b[1] * (1 - v) + a[1] * v;
            poly(
              g,
              [
                [x, y + 1],
                [x + 2, y + 3],
              ],
              null,
              '#ffe1b978',
              0.8,
            );
          }
        }
      } else {
        mesh.material = s === 2 ? wire : pbr;
        hems.material.color.set(s === 2 ? 0xc3ffff : 0xffbc8d);
        hems.material.opacity = s === 2 ? 0.99 : 0.48;
        renderer.render(scene, cam);
        if (s === 2) {
          g.shadowColor = '#ff6867';
          g.shadowBlur = 13;
        }
        g.drawImage(renderer.domElement, -67, -67, 134, 134);
      }
      g.restore();
    },
  };
}
