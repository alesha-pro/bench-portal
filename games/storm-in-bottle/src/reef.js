import * as T from "three";
import { group, mesh, geom, box, ball, batch, std, rng, tau } from "./craft.js";
import { radius, uniforms, noiseGL } from "./sea.js";

// Sample the inside of the lower wall so the gravel and wreckage follow the belly.
export function reef(parent, m) {
  const bed = group(parent),
    random = rng(39017);
  const floor = (x, z) => -Math.sqrt(Math.max(0.01, (radius(x) - 0.12) ** 2 - z * z));
  const basalt = std(0xffffff, 0.82, 0.09, { vertexColors: true, flatShading: true });
  const stones = [],
    faces = [],
    tones = [];
  const palette = [0x354944, 0x696956, 0x53645c, 0x837862, 0x3d4c52].map((c) => new T.Color(c));
  // Broken, tilted bedding planes with a lighter freshly split face.
  function stone(x, z, width, depth, height) {
    const count = 6,
      start = stones.length / 3,
      base = floor(x, z);
    const corners = Array.from({ length: count }, (_, i) => {
      const a = ((i + 0.3 * random()) * tau) / count;
      return [width * Math.cos(a) * (0.7 + 0.3 * random()), depth * Math.sin(a)];
    });
    const color = palette[Math.floor(random() * palette.length)];
    for (const [scale, level] of [
      [0.72, -0.1],
      [1, 0.34],
      [0.67, 0.76],
      [0.19, 0.98],
    ]) {
      for (const [dx, dz] of corners) {
        stones.push(
          x + scale * dx - width * level * 0.36,
          base + height * (level + (0.11 * dx) / width + 0.11 * random()),
          z + scale * dz,
        );
        const tint = color.clone().multiplyScalar(0.6 + level * 0.63 + 0.4 * random());
        tones.push(tint.r, tint.g, tint.b);
      }
    }
    for (let j = 0; j < 3; j++)
      for (let k = 0; k < count; k++) {
        const a = start + j * count + k,
          b = start + j * count + ((k + 1) % count);
        faces.push(a, a + count, b, b, a + count, b + count);
      }
    for (let k = 1; k < count - 1; k++) faces.push(start + 18, start + 19 + k, start + 18 + k);
  }
  for (const [cx, cz, rise, spread] of [
    [-2.77, 0.23, 0.67, 0.35],
    [-2.05, 0.65, 0.29, 0.43],
    [-0.35, -0.3, 0.43, 0.69],
    [0.74, 0.35, 0.55, 0.54],
    [1.39, -0.11, 0.32, 0.32],
  ]) {
    for (let k = 0; k < 18; k++) {
      const a = random() * tau,
        d = Math.sqrt(random());
      const x = cx + Math.cos(a) * d * spread,
        z = cz + Math.sin(a) * d * spread;
      stone(
        x,
        z,
        0.09 + 0.24 * random(),
        0.1 + 0.16 * random(),
        rise * (1.1 - 0.7 * d) + 0.09 * random(),
      );
    }
  }
  for (let i = 0; i < 650; i++) {
    const x = -3.11 + 4.81 * random(),
      z = (random() - 0.5) * 1.55 * (radius(x) - 0.2);
    const size = 0.015 + 0.06 * random() ** 2;
    stone(x, z, size * 1.7, size, size * 0.9);
  }
  const rock = geom(stones, faces);
  rock.setAttribute("color", new T.Float32BufferAttribute(tones, 3));
  mesh(bed, rock, basalt);

  const fixed = group(bed);
  const green = std(0x69e0aa, 0.29, 0.3),
    blue = std(0x61d4d6, 0.23, 0.34),
    honey = std(0xda9f4f, 0.37, 0.29);
  for (let i = 0; i < 44; i++) {
    const x = -2.92 + 4.53 * random(),
      z = (random() - 0.36) * 1.42;
    const shard = mesh(
      fixed,
      new T.TetrahedronGeometry(1),
      [green, blue, honey][i % 3],
      x,
      floor(x, z) + 0.067,
      z,
    );
    shard.scale.set(0.055 + 0.07 * random(), 0.037 + 0.053 * random(), 0.019 + 0.033 * random());
    shard.rotation.set(random(), random() * tau, random());
  }
  const crate = group(fixed);
  crate.position.set(-1.2, floor(-1.2, 0.97) + 0.014, 0.97);
  crate.rotation.set(-0.21, -0.2, -0.14);
  crate.scale.setScalar(1.18);
  const timber = std(0xba905b, 0.82, 0, { map: m.oak.map }),
    iron = std(0x576350, 0.72, 0.35);
  for (let i = 0; i < 4; i++) {
    box(crate, 0.59, 0.035, 0.072, timber, 0, 0.06, i * 0.077 - 0.12);
    box(
      crate,
      i === 3 ? 0.39 : 0.59,
      0.064,
      0.025,
      timber,
      i === 3 ? 0.1 : 0,
      0.11 + 0.067 * i,
      -0.153,
    );
  }
  for (const x of [-0.24, 0.25]) {
    box(crate, 0.049, 0.34, 0.038, timber, x, 0.19, -0.15);
    box(crate, 0.04, 0.29, 0.018, iron, x, 0.17, -0.128);
    for (const y of [0.07, 0.28]) ball(crate, 0.013, m.brass, x, y, -0.114);
  }
  const brace = box(crate, 0.54, 0.047, 0.038, timber, 0.004, 0.21, -0.105);
  brace.rotation.z = 0.44;
  for (let i = 0; i < 5; i++) {
    const x = -0.52 + i * 0.17,
      z = 0.67 + 0.16 * Math.sin(i * 3.6);
    const splinter = box(
      fixed,
      0.24 + random() * 0.19,
      0.029,
      0.046,
      timber,
      x,
      floor(x, z) + 0.071,
      z,
    );
    splinter.rotation.set(-0.29, i * 0.7, 0.14);
  }
  batch(fixed);
  // Moving refracted bands cross rock faces, nail heads and the silicate facets alike.
  for (const material of [basalt, green, blue, honey, timber, iron]) {
    material.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, { tideTime: uniforms.clock, burst: uniforms.flash });
      sh.vertexShader =
        "varying vec3 reefPos;\n" +
        sh.vertexShader.replace(
          "#include <project_vertex>",
          "#include <project_vertex>\nreefPos=(modelMatrix*vec4(transformed,1.)).xyz;",
        );
      const stoneSurface =
        material === basalt
          ? `
        vec2 strata = vec2(reefPos.x*1.5+reefPos.z*.64,reefPos.y*3.5+reefPos.x*.65);
        float grit=fb(strata*13.), cracks=abs(sin(strata.y*26.+4.*fb(strata*3.7)));
        diffuseColor.rgb*= (.67+.40*grit)*(.67+.33*smoothstep(.04,.26,cracks));
        diffuseColor.rgb+=vec3(.05,.056,.037)*smoothstep(.55,.78,grit);
      `
          : "";
      sh.fragmentShader =
        noiseGL +
        "\n" +
        "varying vec3 reefPos;uniform float tideTime,burst;\n" +
        sh.fragmentShader
          .replace("#include <color_fragment>", "#include <color_fragment>\n" + stoneSurface)
          .replace(
            "#include <opaque_fragment>",
            `float ray=sin(7.*reefPos.x+3.8*reefPos.y+1.8*sin(reefPos.z*8.+tideTime*.9)-tideTime*.74);
         outgoingLight *= vec3(.73,.98,1.04) * (.81 + .85*exp(-10.*abs(ray)));
         outgoingLight += diffuseColor.rgb*vec3(.12,.44,.49)*(.65+burst);
         #include <opaque_fragment>`,
          );
    };
  }
  bed.traverse((o) => {
    o.receiveShadow = false;
  });
  return bed;
}
