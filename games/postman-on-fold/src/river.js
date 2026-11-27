import * as THREE from "three";
import { foldPoint, ease } from "./routes.js";

export function riverX(z) {
  return (
    0.35 * Math.sin(1.5 * z) +
    0.15 * Math.cos(3 * z) +
    1.95 * Math.exp(-(((z - 3.1) / 1.22) ** 2)) -
    1.55 * Math.exp(-(((z + 3.05) / 1.18) ** 2))
  );
}
export function riverWidth(z) {
  return 0.39 + 0.075 * Math.cos(z * 2) + 0.025 * Math.sin(z * 7);
}

// Sample the printed river in its original sheet coordinates so a folding
// panel carries its glints with it.
export function waterStencil() {
  const width = 256,
    height = 320,
    data = new Uint8Array(width * height);
  for (let j = 0; j < height; j++) {
    const z = 5 - (10 * (j + 0.5)) / height;
    for (let i = 0; i < width; i++) {
      const x = (16 * (i + 0.5)) / width - 8;
      data[j * width + i] =
        255 * ease((riverWidth(z) - Math.abs(x - riverX(z))) / 0.09);
    }
  }
  const tex = new THREE.DataTexture(data, width, height, THREE.RedFormat);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

export function shimmer(material, time, stencil) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uWaterTime = time;
    shader.uniforms.uWaterMask = { value: stencil };
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uWaterTime;
        uniform sampler2D uWaterMask;`,
      )
      .replace(
        "#include <map_fragment>",
        `#include <map_fragment>
        vec2 paper = vMapUv * vec2(16., 10.);
        float wet = texture2D(uWaterMask, vMapUv).r;
        float rows = paper.y * 5.6 + 0.52 * sin(paper.x * 4. + paper.y * 1.8 - uWaterTime)
                   + 0.54 * uWaterTime;
        float crest = 1. - smoothstep(0.025, 0.17, abs(fract(rows) - 0.5));
        float glint = smoothstep(0.15, 0.86, sin(paper.x * 11. + sin(floor(rows)*6.1) * 9. + uWaterTime * 1.3));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.82, 0.91, 0.74), wet * crest * glint * 0.86);`,
      );
  };
}

// Folded triangles share inked edges but keep the individual paper facets.
export function facets(vertices, faces) {
  const positions = [],
    colors = [];
  for (const [a, b, c, pigment] of faces) {
    const color = new THREE.Color(pigment);
    for (const i of [a, b, c]) {
      positions.push(...vertices[i]);
      colors.push(color.r, color.g, color.b);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const object = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      roughness: 1,
    }),
  );
  object.castShadow = object.receiveShadow = true;
  return object;
}

function skiff() {
  const root = new THREE.Group();
  root.add(
    facets(
      [
        [0, 0.23, -0.36],
        [-0.15, 0.12, -0.07],
        [0.15, 0.12, -0.07],
        [0, 0, -0.07],
        [0, 0.21, 0.36],
        [-0.12, 0.12, 0.13],
        [0.12, 0.12, 0.13],
        [0, 0.024, 0.13],
        [0, 0.43, 0.015],
        [0, 0.11, -0.23],
        [0, 0.11, 0.23],
      ],
      [
        [0, 1, 3, "#ae5140"],
        [0, 3, 2, "#cd7653"],
        [1, 5, 7, "#ae5140"],
        [1, 7, 3, "#9b4d3b"],
        [2, 3, 7, "#ba6043"],
        [2, 7, 6, "#d78055"],
        [5, 4, 7, "#c57152"],
        [6, 7, 4, "#e19769"],
        [0, 2, 1, "#edd9ac"],
        [5, 1, 2, "#f5dfb3"],
        [5, 2, 6, "#e4c697"],
        [4, 5, 6, "#f1dcba"],
        [9, 8, 1, "#fff0c7"],
        [9, 2, 8, "#edcb96"],
        [8, 10, 5, "#e6cc95"],
        [8, 6, 10, "#f9ead0"],
      ],
    ),
  );
  return root;
}

function duck(chick) {
  const group = new THREE.Group();
  function oval(x, y, z, sx, sy, sz, color) {
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshStandardMaterial({ color, flatShading: true }),
    );
    mesh.position.set(x, y, z);
    mesh.scale.set(sx, sy, sz);
    mesh.castShadow = true;
    group.add(mesh);
  }
  oval(0, 0.102, 0, 0.15, 0.105, 0.237, chick ? "#e8bb60" : "#ecdfc1");
  oval(0, 0.238, 0.146, 0.098, 0.108, 0.097, chick ? "#ebc774" : "#477972");
  oval(0, 0.218, 0.252, 0.065, 0.027, 0.086, "#c38745");
  oval(0, 0.113, -0.205, 0.074, 0.043, 0.105, "#736d57");
  for (const side of [-1, 1]) {
    oval(
      side * 0.116,
      0.127,
      -0.045,
      0.05,
      0.062,
      0.128,
      chick ? "#c79b50" : "#aa9271",
    );
    oval(side * 0.079, 0.263, 0.181, 0.017, 0.016, 0.018, "#423e33");
  }
  if (chick) group.scale.setScalar(0.6);
  return group;
}
function wakeLines() {
  const lines = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      const point = (n) => [
        side * (0.09 + (0.2 * n) / 8),
        0.016,
        -0.1 - 0.36 * (n / 8) ** 1.4,
      ];
      lines.push(...point(i), ...point(i + 1));
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(lines, 3));
  return new THREE.LineSegments(
    g,
    new THREE.LineBasicMaterial({ color: "#ffffd5" }),
  );
}

export function riverTraffic(scene) {
  const boats = [skiff(), duck(false), duck(true), duck(true)].map((object) => {
    const anchor = new THREE.Group(),
      bob = new THREE.Group();
    bob.add(object, wakeLines());
    anchor.add(bob);
    scene.add(anchor);
    return { anchor, bob };
  });
  return (t, fold, route) => {
    boats.forEach(({ anchor, bob }, i) => {
      // Quiet eddies at the two bends keep the little flotilla on the sheet.
      const skiff = i === 0;
      const phase = skiff ? t * 0.24 + 0.4 : t * 0.24 - (i - 1) * 0.66;
      const reach = skiff ? 0.66 : 1.0;
      const z = (skiff ? 3.13 : -3.07) + reach * Math.sin(phase);
      const lane = skiff ? 0.11 : 0.19;
      const x = riverX(z) + lane * Math.cos(phase);
      const p = foldPoint(x, z, fold, route);
      const dz = reach * Math.cos(phase);
      const tangent = (riverX(z + 0.025) - riverX(z - 0.025)) / 0.05;
      const dx = tangent * dz - lane * Math.sin(phase);
      const edge =
        Math.abs(x * Math.cos(route.angle) + z * Math.sin(route.angle)) -
        route.gap;
      const clearance =
        1 - ease((fold - 0.32) / 0.68) * (1 - ease((edge + 0.03) / 0.23));
      anchor.visible = clearance > 0.01;
      anchor.position.set(p.x, p.y + 0.018, p.z);
      anchor.quaternion.setFromAxisAngle(
        new THREE.Vector3(-Math.sin(route.angle), 0, Math.cos(route.angle)),
        p.tilt,
      );
      anchor.scale.setScalar(clearance);
      bob.rotation.set(
        0.045 * Math.sin(t * 2 + i),
        Math.atan2(dx, dz) + 0.12 * Math.sin(t + i),
        0.08 * Math.sin(t * 1.6 + i),
      );
      bob.position.y = 0.009 * (1 + Math.sin(t * 2.1 + i));
    });
  };
}
