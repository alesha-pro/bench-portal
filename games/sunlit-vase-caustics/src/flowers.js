import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { mesh, tube, random } from "./materials.js";

function surface(nu, nv, fn) {
  const pos = [],
    rgb = [],
    uv = [],
    faces = [];
  for (let j = 0; j <= nv; j++)
    for (let i = 0; i <= nu; i++) {
      const [x, y, z, r, g, b] = fn((2 * i) / nu - 1, j / nv);
      pos.push(x, y, z);
      rgb.push(r, g, b);
      uv.push(i / nu, j / nv);
      if (j && i) {
        const a = j * (nu + 1) + i;
        faces.push(a - nu - 2, a - nu - 1, a, a - nu - 2, a, a - 1);
      }
    }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(rgb, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  return geometry;
}

// A petal wraps around the bud, opens toward the light and rolls back at its lip.
function rosePetal(f, seed, tint, peony) {
  return surface(20, 14, (u, v) => {
    const breadth = Math.pow(Math.sin(Math.PI * 0.79 * v), 0.81);
    const angle =
      u * (1.55 - 0.36 * f) * breadth +
      (1 - f) * (0.9 * v - 0.32) +
      0.1 * Math.sin(seed);
    const lip = Math.pow(v, 6);
    const radius =
      0.012 +
      0.085 * f +
      (0.022 + 0.145 * f) * Math.sin(v * 1.63) +
      (0.008 + 0.099 * f) * lip * (1 - 0.32 * u * u) +
      0.017 * v * v * Math.cos(u * 3.6 + seed);
    const curl = peony
      ? (0.02 * Math.sin(8 * u + seed) + 0.01 * Math.cos(13 * u - seed)) * v * v
      : 0.01 * Math.sin(4 * u + seed) * lip;
    const h =
      (peony ? 0.3 : 0.34) +
      0.08 * (1 - f) -
      0.09 * f * f +
      0.022 * Math.sin(seed);
    const y =
      0.038 * (1 - f) +
      v * h +
      curl -
      u * u * 0.082 * breadth * v +
      (0.009 * Math.sin(6 * u + seed) + 0.005 * Math.sin(u * 12 - seed)) * lip -
      0.026 * lip * f;
    const vein = 0.94 + 0.06 * Math.cos(u * 23 + Math.sin(v * 5 + seed));
    const edge = 1 + 0.51 * Math.pow(v, 8);
    return [
      Math.sin(angle) * (radius + curl * 0.7) * (peony ? 1.18 : 1),
      y,
      Math.cos(angle) * (radius + curl * 0.7) * (peony ? 1.18 : 1),
      tint.r * vein * edge * (0.49 + 0.51 * v),
      tint.g * (0.52 + 0.48 * v) * edge + 0.013 * lip,
      tint.b * (0.5 + 0.5 * v) * edge + 0.01 * lip,
    ];
  });
}

function leafGeometry(size, shade) {
  return surface(8, 36, (u, v) => {
    const w =
      Math.pow(Math.sin(v * Math.PI), 0.86) *
      size *
      0.24 *
      (1 + 0.075 * Math.cos(v * Math.PI * 30));
    const rib = Math.exp(-Math.abs(u) * 27);
    const vein = Math.pow(
      0.5 + 0.5 * Math.cos(2 * Math.PI * (8 * v - 1.9 * Math.abs(u))),
      14,
    );
    const green = 0.74 + 0.34 * v + 0.2 * vein + 0.55 * rib;
    return [
      u * w,
      size * v,
      size *
        (0.19 * Math.sin(v * Math.PI) - 0.07 * u * u - 0.13 * v * v) *
        Math.sin(Math.PI * v) +
        0.018 * v,
      shade.r * (green + 0.42 * rib),
      shade.g * green,
      shade.b * green,
    ];
  });
}

// Each independently animated stem uses a single draw per material.
function batch(group) {
  group.updateMatrixWorld(true);
  const local = new THREE.Matrix4().copy(group.matrixWorld).invert(),
    batches = new Map();
  group.traverse((obj) => {
    if (!obj.isMesh) return;
    const geometry = obj.geometry
      .clone()
      .applyMatrix4(
        new THREE.Matrix4().multiplyMatrices(local, obj.matrixWorld),
      );
    if (!batches.has(obj.material)) batches.set(obj.material, []);
    batches.get(obj.material).push(geometry);
    obj.geometry.dispose();
  });
  group.clear();
  for (const [mat, parts] of batches) {
    const merged = mergeGeometries(parts);
    const m = mesh(merged, mat, group);
    m.castShadow = true;
    m.receiveShadow = true;
    parts.forEach((p) => p.dispose());
  }
}

export function createFlowers(parent) {
  const rng = random(733),
    blooms = [],
    innerPaths = [];
  const velvet = new THREE.MeshPhysicalMaterial({
    sheen: 0.39,
    sheenColor: 0xba4a51,
    sheenRoughness: 0.86,
    vertexColors: true,
    roughness: 0.86,
    side: THREE.DoubleSide,
  });
  // Thin petals scatter light back toward the viewer along their curled edges.
  velvet.defines = { USE_UV: "" };
  velvet.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      `
      #include <normal_fragment_maps>
      float fold=(vUv.x-.5)*(11.+9.*vUv.y)+.38*sin(5.*vUv.y+4.*vUv.x);
      float filament=sin(6.2832*fold);
      vec3 dp=dFdx(vViewPosition)*dFdy(vUv.y)-dFdy(vViewPosition)*dFdx(vUv.y);
      normal=normalize(normal+dp/max(length(dp),.00001)*filament*.047*smoothstep(.25,.93,vUv.y));
      diffuseColor.rgb*=.94+.06*filament;
    `,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `
      #include <lights_fragment_end>
      float back=max(0.,-dot(normal,directionalLights[0].direction));
      float edge=pow(1.-abs(dot(normal,normalize(vViewPosition))),2.);
      reflectedLight.indirectDiffuse+=diffuseColor.rgb*directionalLights[0].color*(.052*back+.11*edge)*(.30+.70*vUv.y);
    `,
    );
  };
  const stemMat = new THREE.MeshStandardMaterial({
    color: 0x3e5a28,
    roughness: 0.74,
  });
  const foliage = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.5,
    side: THREE.DoubleSide,
  });
  foliage.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `
      #include <lights_fragment_end>
      reflectedLight.indirectDiffuse+=diffuseColor.rgb*vec3(.50,.72,.25)*directionalLights[0].color*
        (.06+.22*max(0.,-dot(normal,directionalLights[0].direction)));
    `,
    );
  };
  const specs = [
    [-0.72, 2.4, 0.16, 1.04, 0.55, -0.72],
    [-0.26, 2.95, -0.26, 1.03, 0.27, -0.37],
    [0.5, 2.7, -0.11, 1.02, 0.8, 0.69],
    [0.91, 2.36, -0.04, 0.65, 0.53, 0.91],
    [0.1, 2.28, 0.54, 1.08, 0.96, -0.04],
    [-0.9, 2.93, -0.45, 0.63, 0.42, -0.81],
    [0.48, 3.16, -0.5, 0.66, 0.51, 0.37],
    [-1.09, 2.14, 0.17, 0.53, 0.69, -0.99],
    [0.06, 2.52, -0.59, 0.83, 0.37, 0.64],
  ];
  for (const [idx, [x, y, z, s, tilt, lean]] of specs.entries()) {
    const group = new THREE.Group();
    parent.add(group);
    const bx = (rng() - 0.5) * 0.6,
      bz = (rng() - 0.5) * 0.5;
    const path = new THREE.CatmullRomCurve3(
      [
        [bx, 0.11, bz],
        [bx * 0.5, 0.75, bz * 0.65],
        [x * 0.44, 1.68, z * 0.54],
        [x * 0.8, y - 0.32, z * 0.86],
        [x, y, z],
      ].map((p) => new THREE.Vector3(...p)),
    );
    const samples = [0, 0.17, 0.34, 0.51, 0.68].map((k) => path.getPoint(k));
    innerPaths.push(samples);
    mesh(
      new THREE.TubeGeometry(path, 35, 0.012 + s * 0.003, 8, false),
      stemMat,
      group,
    );
    const head = new THREE.Group();
    head.position.set(x, y, z);
    head.rotation.set(tilt, 0.1 + lean * 0.35, -lean * 0.57);
    head.scale.setScalar(s);
    group.add(head);
    const peony = [0, 2, 4, 8].includes(idx);
    const N = s < 0.7 ? 26 : peony ? 51 : 43;
    for (let j = 0; j < N; j++) {
      const f = Math.pow((j + 0.7) / N, 0.86) * (s < 0.7 ? 0.68 : 1);
      const hue = (peony ? 0.977 : 0.95) + 0.028 * rng(),
        sat = 0.69 + 0.16 * rng(),
        lum =
          (s < 0.7 ? 0.225 : idx === 2 ? 0.34 : 0.27) + 0.17 * f + 0.09 * rng();
      const tint = new THREE.Color().setHSL(
        hue % 1,
        sat,
        lum,
        THREE.SRGBColorSpace,
      );
      const p = mesh(rosePetal(f, rng() * 8, tint, peony), velvet, head);
      if (peony && f < 0.48) {
        const pocket = (j % 4) * Math.PI * 0.5;
        p.position.set(
          0.043 * Math.cos(pocket),
          0.01 * Math.sin(j),
          0.043 * Math.sin(pocket),
        );
        p.rotation.z = 0.15 * Math.cos(pocket);
      }
      p.rotation.y = j * 2.39996 + idx * 0.7;
    }
    if (peony && s > 0.8) {
      const pollen = new THREE.Color(0xda9a48);
      for (let j = 0; j < 26; j++) {
        const theta = j * 2.4,
          r = 0.042 + 0.046 * rng();
        const anther = mesh(
          new THREE.SphereGeometry(0.01, 5, 4),
          velvet,
          head,
          [r * Math.cos(theta), 0.317 + 0.016 * rng(), r * Math.sin(theta)],
        );
        const attr = anther.geometry.attributes.position;
        const rgb = Array.from({ length: attr.count }, () =>
          pollen.toArray(),
        ).flat();
        anther.geometry.setAttribute(
          "color",
          new THREE.Float32BufferAttribute(rgb, 3),
        );
        anther.scale.set(0.62, 1.33, 0.62);
      }
    }
    const sepals = new THREE.Color(0x476128);
    for (let j = 0; j < 5; j++) {
      const sepal = mesh(
        leafGeometry(0.18, sepals),
        foliage,
        head,
        [0, -0.045, 0],
      );
      sepal.rotation.order = "YXZ";
      sepal.rotation.y = (j * 2 * Math.PI) / 5;
      sepal.rotation.x = 0.8;
    }
    for (let j = 0; j < 2; j++) {
      const fraction = 0.61 + j * 0.15,
        start = path.getPoint(fraction);
      const a = idx * 2.31 + j * 2.8,
        dx = Math.cos(a),
        dz = Math.sin(a);
      const length = 0.22 + rng() * 0.09;
      const end = start
        .clone()
        .add(new THREE.Vector3(dx * length, 0.09, dz * length));
      tube(group, [start.toArray(), end.toArray()], 0.006, stemMat, 4);
      for (const k of [-1, 0, 1]) {
        const at = end.clone().lerp(start, k === 0 ? 0 : 0.48);
        const blade = mesh(
          leafGeometry(
            (k === 0 ? 0.4 : 0.23) + rng() * 0.09,
            new THREE.Color().setHSL(
              0.24 + rng() * 0.03,
              0.32,
              0.19 + rng() * 0.08,
              THREE.SRGBColorSpace,
            ),
          ),
          foliage,
          group,
          at.toArray(),
        );
        blade.rotation.order = "YXZ";
        blade.rotation.y = Math.PI / 2 - a + k * 0.85;
        blade.rotation.x = 0.98 + rng() * 0.42;
        blade.rotation.z = (rng() - 0.5) * 0.52;
      }
    }
    batch(group);
    blooms.push(group);
  }
  for (const [x, z, a] of [
    [1.16, 0.79, 0.2],
    [1.42, 0.69, 2.5],
    [-0.88, 0.95, 3.2],
  ]) {
    const loose = surface(18, 12, (u, v) => {
      const w = Math.pow(Math.sin(Math.PI * v), 0.58) * 0.12;
      const y =
        0.008 + 0.036 * u * u * Math.sin(Math.PI * v) + 0.034 * Math.pow(v, 5);
      return [
        u * w,
        y,
        0.26 * v,
        0.29 + 0.13 * v,
        0.008 + 0.011 * v,
        0.025 + 0.019 * v,
      ];
    });
    const p = mesh(loose, velvet, parent, [x, -0.009, z]);
    p.rotation.y = a;
    p.castShadow = true;
  }
  const ends = Array.from(
    { length: blooms.length * 5 },
    () => new THREE.Vector3(),
  );
  // Lower stems are ray traced in the vessel shader. Remove them from the
  // background plate so they cannot appear twice in the refracted view.
  const cut = { value: 0 };
  stemMat.onBeforeCompile = (shader) => {
    shader.uniforms.hideInside = cut;
    shader.vertexShader =
      "varying vec3 stemWorld;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nstemWorld=(modelMatrix*vec4(position,1.)).xyz;",
      );
    shader.fragmentShader =
      "varying vec3 stemWorld;uniform float hideInside;\n" +
      shader.fragmentShader.replace(
        "#include <clipping_planes_fragment>",
        "#include <clipping_planes_fragment>\nif(hideInside>.5 && stemWorld.y<1.72 && length(stemWorld.xz)<.76) discard;",
      );
  };
  return {
    ends,
    cut,
    update(t, m, breeze) {
      blooms.forEach((group, i) => {
        group.rotation.z =
          m.x * (0.13 + i * 0.005) +
          m.z * 0.022 * Math.sin(i) +
          Math.sin(t * 1.18 + i) * 0.015 * breeze;
        group.rotation.x =
          m.z * (0.14 + i * 0.004) + Math.sin(t * 0.91 + i) * 0.012 * breeze;
        group.updateMatrix();
        innerPaths[i].forEach((p, k) =>
          ends[i * 5 + k].copy(p).applyMatrix4(group.matrix),
        );
      });
    },
  };
}
