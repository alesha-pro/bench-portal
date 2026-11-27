import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { seaLevel, tide } from './ocean.js';
import { random } from './engraving.js';

const V = (x, y, z) => new T.Vector3(x, y, z);
const palette = {
  ink: 0x293d43,
  wood: 0xb27247,
  dark: 0x654838,
  rail: 0xedc689,
  deck: 0xc89358,
  lacquer: 0x943d30,
  coat: 0x28526b,
  blue: 0x456f7b,
  cotton: 0xd8cdb4,
  skin: 0xca9872,
  straw: 0xd5b174,
  rope: 0x91754f
};
function makeBoat(seed) {
  const r = random(seed),
    parts = [];
  function add(geo, col, where = null, scale = null, rotation = null) {
    if (geo.index) {
      const indexed = geo;
      geo = indexed.toNonIndexed();
      indexed.dispose();
    }
    geo.deleteAttribute('uv');
    if (scale) geo.scale(...scale);
    if (rotation) geo.rotateZ(rotation);
    if (where) geo.translate(where.x, where.y, where.z);
    const c = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255],
      arr = new Float32Array(geo.attributes.position.count * 3);
    for (let i = 0; i < arr.length; i += 3) arr.set(c, i);
    geo.setAttribute('color', new T.BufferAttribute(arr, 3));
    parts.push(geo);
  }
  function sphere(p, sc, color, tilt = 0) {
    add(new T.SphereGeometry(1, 10, 7), color, p, sc, tilt);
  }
  function stick(a, b, rad, color, tip = rad, sides = 7) {
    const d = b.clone().sub(a),
      g = new T.CylinderGeometry(tip, rad, d.length(), sides, 1);
    g.applyQuaternion(new T.Quaternion().setFromUnitVectors(V(0, 1, 0), d.normalize()));
    add(g, color, a.clone().lerp(b, 0.5));
  }
  function tube(points, rad, col) {
    add(
      new T.TubeGeometry(
        new T.CatmullRomCurve3(points),
        Math.max(10, points.length * 3),
        rad,
        6,
        false
      ),
      col
    );
  }
  function strip(rows, col) {
    let positions = [];
    for (let j = 0; j < rows.length - 1; j++)
      for (let k = 0; k < rows[0].length - 1; k++) {
        const a = rows[j][k],
          b = rows[j + 1][k],
          c = rows[j][k + 1],
          d = rows[j + 1][k + 1];
        for (let p of [a, b, c, c, b, d]) positions.push(p.x, p.y, p.z);
      }
    let g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    g.computeVertexNormals();
    add(g, col);
  }
  const hull = (u, v, side) => {
    const bowl = Math.max(0, 1 - Math.pow(Math.abs(u), 3.2));
    const width = 0.51 * Math.pow(bowl, 0.75) * (0.22 + 0.78 * v ** 0.7) + 0.014;
    return V(
      u * (2.95 + 0.27 * v),
      -0.2 + 0.65 * v + 0.57 * Math.pow(Math.abs(u), 3.7) + 0.12 * Math.max(u, 0) ** 5,
      side * width
    );
  };
  const ko = palette;
  for (let side of [-1, 1]) {
    for (let [a, b, color] of [
      [0, 0.32, ko.dark],
      [0.32, 0.63, ko.wood],
      [0.63, 0.69, ko.dark],
      [0.69, 0.86, ko.deck],
      [0.86, 0.92, ko.ink],
      [0.92, 1, ko.rail]
    ]) {
      let rows = [];
      for (let i = 0; i <= 40; i++) {
        let u = i / 20 - 1;
        rows.push([hull(u, a, side), hull(u, b, side)]);
      }
      strip(rows, color);
    }
    const rim = [];
    for (let i = 0; i <= 14; i++) rim.push(hull(i / 7 - 1, 1, side));
    tube(rim, 0.043, ko.ink);
    tube(
      rim.map((p) => p.clone().add(V(0, 0.035, 0))),
      0.025,
      ko.rail
    );
    for (let j = 0; j < 13; j++) {
      let u0 = -0.96 + r() * 0.65,
        u1 = u0 + 0.17 + r() * 0.75,
        level = 0.37 + r() * 0.46;
      const pen = [];
      for (let k = 0; k <= 11; k++) {
        let u = T.MathUtils.lerp(u0, u1, k / 11);
        pen.push(hull(u, level + 0.01 * Math.sin(k * 0.7 + j), side).add(V(0, 0, side * 0.007)));
      }
      tube(pen, 0.005, j % 3 === 1 ? 0xd5a470 : 0x895e45);
    }
    const inner = [];
    for (let i = 0; i <= 32; i++) {
      let u = i / 16 - 1;
      inner.push([hull(u, 0.97, side), hull(u, 0.72, side).multiply(V(1, 1, 0.8))]);
    }
    strip(inner, ko.wood);
  }
  const deck = [];
  for (let i = 0; i <= 34; i++) {
    let u = i / 17 - 1;
    deck.push([hull(u, 0.72, -1), hull(u, 0.72, 1)]);
  }
  strip(deck, ko.deck);
  for (let j = -12; j <= 12; j++) {
    const u = j / 13;
    const a = hull(u, 0.74, -1),
      b = hull(u, 0.74, 1);
    stick(a, b, 0.014, ko.dark);
    if (j % 4 === 0) stick(hull(u, 0.87, -1), hull(u, 0.87, 1), 0.045, ko.wood);
  }
  // Bent backs, split sleeves, headcloths, conical hats, hands and oar blades.
  for (let j = 0; j < 6; j++) {
    let x = -1.93 + j * 0.67,
      z = j % 2 === 0 ? 0.12 : -0.09,
      y = 0.35 + 0.04 * Math.abs(x);
    let coat = j % 3 === 0 ? ko.blue : ko.coat,
      lean = 0.12 + r() * 0.1;
    for (let side of [-1, 1]) {
      let hip = V(x - 0.06, y + 0.12, z + side * 0.07),
        knee = V(x + 0.23, y + 0.13, z + side * 0.11),
        ankle = V(x + 0.01, y - 0.025, z + side * 0.13);
      stick(hip, knee, 0.095, ko.ink, 0.08);
      stick(knee, ankle, 0.073, ko.blue, 0.052);
    }
    sphere(V(x, y + 0.11, z), [0.18, 0.13, 0.185], ko.ink);
    sphere(V(x + lean, y + 0.31, z), [0.175, 0.28, 0.18], coat, -0.67);
    sphere(V(x + lean - 0.03, y + 0.32, z + 0.157), [0.043, 0.04, 0.013], ko.cotton, -0.55);
    sphere(V(x + lean + 0.145, y + 0.57, z), [0.113, 0.14, 0.113], ko.skin, -0.27);
    sphere(V(x + lean + 0.127, y + 0.636, z), [0.124, 0.084, 0.122], ko.ink);
    if (j % 3 !== 1) {
      let hat = new T.ConeGeometry(0.22, 0.117, 14);
      add(hat, ko.straw, V(x + lean + 0.14, y + 0.715, z), null, -0.13);
      sphere(V(x + lean + 0.14, y + 0.66, z), [0.209, 0.022, 0.205], ko.dark, -0.13);
      for (let k = 0; k < 10; k++) {
        let a = (k / 10) * Math.PI * 2;
        stick(
          V(x + lean + 0.14, y + 0.766, z),
          V(
            x + lean + 0.14 + 0.202 * Math.cos(a),
            y + 0.666 - 0.02 * Math.cos(a),
            z + 0.194 * Math.sin(a)
          ),
          0.004,
          0xa28355
        );
      }
    } else sphere(V(x + lean + 0.14, y + 0.65, z), [0.126, 0.031, 0.125], ko.cotton, -0.2);
    sphere(V(x + lean + 0.23, y + 0.56, z + 0.054), [0.041, 0.035, 0.045], ko.skin);
    sphere(V(x + lean + 0.214, y + 0.594, z + 0.083), [0.013, 0.01, 0.012], ko.ink);
    tube(
      [
        V(x + lean - 0.1, y + 0.42, z + 0.142),
        V(x + lean - 0.04, y + 0.38, z + 0.176),
        V(x + lean + 0.02, y + 0.32, z + 0.172)
      ],
      0.012,
      ko.cotton
    );
    let side = j % 2 === 0 ? 1 : -1,
      shoulder = V(x + lean + 0.03, y + 0.4, z + side * 0.1);
    let elbow = V(x + lean + 0.16, y + 0.195, z + side * 0.17),
      hand = V(x + lean + 0.36, y + 0.2, z + side * 0.24);
    stick(shoulder, elbow, 0.085, coat, 0.07);
    stick(elbow, hand, 0.065, coat, 0.048);
    sphere(hand, [0.06, 0.055, 0.06], ko.skin);
    let grip = hand.clone().add(V(0.14, 0.07, -side * 0.28)),
      end = hand.clone().add(V(-0.66, -0.48, side * 1.02));
    stick(grip, end, 0.026, 0xd3a169, 0.033);
    let otherHand = hand.clone().lerp(grip, 0.76);
    stick(
      V(x + lean + 0.02, y + 0.37, z - side * 0.09),
      V(x + lean + 0.2, y + 0.28, z - side * 0.16),
      0.071,
      coat,
      0.057
    );
    stick(V(x + lean + 0.2, y + 0.28, z - side * 0.16), otherHand, 0.054, coat, 0.043);
    sphere(otherHand, [0.05, 0.046, 0.044], ko.skin);
    let blade = end.clone().add(V(-0.19, -0.12, side * 0.31));
    stick(end, blade, 0.061, ko.wood, 0.045, 6);
  }
  // Coiled hemp on the afterdeck and five lashings on the lifted stem.
  for (let j = 0; j < 3; j++) {
    let points = [];
    for (let i = 0; i <= 28; i++) {
      let a = (i / 28) * Math.PI * 2;
      points.push(
        V(
          -2.45 + Math.cos(a) * (0.18 - j * 0.033),
          0.54 + j * 0.014,
          0.03 + Math.sin(a) * (0.113 - j * 0.014)
        )
      );
    }
    tube(points, 0.014, ko.rope);
  }
  for (let i = 0; i < 5; i++) {
    let u = 0.81 + i * 0.026;
    stick(hull(u, 0.82, -1), hull(u, 0.82, 1), 0.021, ko.dark);
  }
  const post = V(2.54, 1.44, 0.04),
    hook = V(2.87, 1.43, 0.04);
  stick(V(2.54, 0.63, 0.04), post, 0.035, ko.ink);
  stick(post, hook, 0.03, ko.wood);
  stick(hook, V(2.87, 1.29, 0.04), 0.013, ko.ink);
  const lantern = V(2.87, 1.1, 0.04);
  sphere(lantern, [0.157, 0.209, 0.147], 0xffb74c);
  sphere(lantern.clone().add(V(0.01, 0.0, 0.074)), [0.129, 0.179, 0.083], 0xffde74);
  for (let j = -2; j <= 2; j++) {
    const dy = j * 0.072,
      rad = 0.161 * Math.sqrt(1 - (dy / 0.219) ** 2);
    add(
      new T.CylinderGeometry(rad, rad, 0.014, 16),
      0xc27f3d,
      V(lantern.x, lantern.y + dy, lantern.z)
    );
  }
  for (let dy of [-0.195, 0.195])
    add(
      new T.CylinderGeometry(0.081, 0.09, 0.036, 10),
      ko.ink,
      V(lantern.x, lantern.y + dy, lantern.z)
    );
  const g = mergeGeometries(parts);
  parts.forEach((p) => p.dispose());
  const mat = new T.ShaderMaterial({
    vertexColors: true,
    side: T.DoubleSide,
    uniforms: tide,
    vertexShader: `
 varying vec3 col,nn;void main(){col=color;nn=mat3(modelMatrix)*normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform float night;varying vec3 col,nn;void main(){
 float shade=dot(normalize(nn),vec3(-.35,.84,.41));float lamp=step(.93,col.r)*step(.5,col.g)*step(col.b,.49);
 vec3 c=col*mix(.83,1.04,smoothstep(-.23,.02,shade));c=mix(c,c*vec3(.53,.67,.85),night*(1.-lamp));gl_FragColor=vec4(c,1.);}`
  });
  const group = new T.Group();
  group.add(new T.Mesh(g, mat));
  const glow = new T.Sprite(
    new T.SpriteMaterial({
      map: halo(),
      color: '#ffc35d',
      transparent: true,
      depthWrite: false,
      opacity: 0.52,
      blending: T.AdditiveBlending
    })
  );
  glow.position.copy(lantern);
  glow.scale.set(1.06, 1.06, 1);
  group.add(glow);
  return group;
}
let glowTex;
function halo() {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d'),
    grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,244,178,.92)');
  grad.addColorStop(0.17, 'rgba(255,208,96,.5)');
  grad.addColorStop(0.52, 'rgba(255,162,48,.13)');
  grad.addColorStop(1, 'rgba(255,132,40,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  glowTex = new T.CanvasTexture(c);
  return glowTex;
}
// Painted wake lines conform to the same surface as the hull. Their tips
// break apart into flecks in the lee of each oar.
function wake(scene, seed) {
  const r = random(seed),
    positions = [],
    indices = [],
    coords = [],
    colors = [];
  for (let side of [-1, 1]) {
    for (let j = 0; j < 36; j++) {
      const start = -4.6 + r() * 6.5,
        len = 0.15 + r() ** 1.8 * 1.65;
      const offset = 0.06 + r() ** 2 * 0.5,
        thick = 0.007 + r() ** 2 * 0.032;
      const color = r() < 0.48 ? [0.78, 0.82, 0.74] : [0.48, 0.65, 0.68];
      let base = positions.length / 3;
      for (let k = 0; k <= 12; k++) {
        let t = k / 12,
          x = start + t * len,
          breadth = Math.sqrt(Math.max(0.01, 1 - Math.min(1, Math.abs(x / 3.25)) ** 3));
        const z =
          side *
          (breadth * (0.39 + offset) + Math.max(0, -x - 1.7) * 0.17 + 0.076 * Math.sin(x * 2 + j));
        let w = thick * Math.sin(Math.PI * t) ** 0.6;
        for (let e of [-1, 1]) {
          coords.push(x, z + e * w);
          positions.push(0, 0, 0);
          colors.push(...color);
        }
        if (k < 12) {
          let i = base + k * 2;
          indices.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
        }
      }
    }
  }
  let g = new T.BufferGeometry(),
    pos = new T.Float32BufferAttribute(positions, 3);
  g.setAttribute('position', pos);
  g.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  g.setIndex(indices);
  const mesh = new T.Mesh(
    g,
    new T.ShaderMaterial({
      uniforms: tide,
      vertexColors: true,
      side: T.DoubleSide,
      vertexShader:
        'varying vec3 c;void main(){c=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:
        'uniform float night;varying vec3 c;void main(){gl_FragColor=vec4(mix(c,c*vec3(.55,.63,.83),night),1.);}'
    })
  );
  mesh.frustumCulled = false;
  scene.add(mesh);
  return (t, xx, zz, yaw, s) => {
    const a = Math.cos(yaw) * s,
      b = Math.sin(yaw) * s;
    for (let j = 0; j < coords.length; j += 2) {
      const x = xx + a * coords[j] + b * coords[j + 1],
        z = zz - b * coords[j] + a * coords[j + 1];
      pos.setXYZ(j / 2, x, seaLevel(x, z, t) + 0.024, z);
    }
    pos.needsUpdate = true;
  };
}
export function addBoats(scene) {
  const fleet = [
    [3.4, 5.65, -0.19, 1.03],
    [4.2, -0.32, 0.24, 0.83],
    [-0.45, -5.0, -0.3, 0.75]
  ].map(([x, z, yaw, s], i) => {
    const boat = makeBoat(93 + i);
    boat.scale.setScalar(s);
    scene.add(boat);
    return { boat, x, z, yaw, i, wash: wake(scene, 81 + i), s };
  });
  return (t) =>
    fleet.forEach(({ boat, x, z, yaw, i, wash, s }) => {
      const xx = x + 0.38 * Math.sin(t * 0.36 + i * 2),
        zz = z + 0.31 * Math.sin(t * 0.43 + i);
      wash(t, xx, zz, yaw + 0.035 * Math.sin(t * 0.46 + i), s);
      let slope = (seaLevel(xx + 1, zz, t) - seaLevel(xx - 1, zz, t)) * 0.5;
      boat.position.set(
        xx,
        0.58 * seaLevel(xx, zz, t) +
          0.21 * seaLevel(xx - 1.8, zz, t) +
          0.21 * seaLevel(xx + 1.8, zz, t) -
          0.07 +
          0.053 * Math.sin(t * 0.76 + i),
        zz
      );
      boat.rotation.order = 'YXZ';
      boat.rotation.set(
        0.055 * Math.sin(t * 1.17 + i),
        yaw + 0.035 * Math.sin(t * 0.46 + i),
        slope * 0.85 + 0.04 * Math.cos(t * 0.87 + i)
      );
    });
}
