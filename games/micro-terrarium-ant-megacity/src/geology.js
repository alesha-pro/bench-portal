import * as T from 'three';
import { v, range, clamp, mix, makeCanvas, canvasTexture, mesh, standard } from './core.js';

export const W = 9.0,
  bottom = -2.75,
  top = 1.2,
  H = top - bottom;
export const nodes = [
  [-4.05, 0.7],
  [-2.95, 0.88],
  [-1.78, 0.41],
  [-0.65, 0.76],
  [0.57, 0.54],
  [1.93, 0.75],
  [3.3, 0.61],
  [4.08, 0.21],
  [-3.82, -0.23],
  [-2.55, -0.45],
  [-1.32, -0.42],
  [-0.21, -0.05],
  [1.15, -0.34],
  [2.57, -0.26],
  [3.65, -0.78],
  [-4.04, -1.36],
  [-2.91, -1.51],
  [-1.72, -1.24],
  [-0.53, -1.16],
  [0.96, -1.56],
  [2.31, -1.1],
  [3.64, -1.85],
  [-3.48, -2.19],
  [-2.04, -2.12],
  [-0.84, -2.3],
  [0.26, -2.19],
  [2.23, -2.17],
  [4.14, -2.38],
  [-3.68, 1.22],
  [-0.22, 1.21],
  [2.78, 1.22],
].map(([x, y]) => v(x, y, 0));
export const rooms = [
  [0, 0.36, 0.22, 'passage'],
  [2, 0.57, 0.29, 'granary'],
  [4, 0.43, 0.25, 'passage'],
  [6, 0.61, 0.3, 'granary'],
  [8, 0.5, 0.3, 'passage'],
  [9, 0.86, 0.42, 'fungus'],
  [11, 0.55, 0.27, 'granary'],
  [13, 0.8, 0.36, 'fungus'],
  [15, 0.37, 0.28, 'passage'],
  [17, 0.54, 0.27, 'granary'],
  [18, 0.46, 0.24, 'passage'],
  [19, 1.07, 0.48, 'queen'],
  [21, 0.62, 0.34, 'fungus'],
  [22, 0.49, 0.24, 'granary'],
  [24, 0.68, 0.29, 'fungus'],
  [26, 0.51, 0.23, 'passage'],
];
const connections = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27],
  [28, 0, 8, 15],
  [1, 9, 16, 22],
  [2, 10, 17, 23],
  [29, 3, 11, 18, 24],
  [4, 12, 19, 25],
  [30, 5, 13, 20, 26],
  [7, 14, 21, 27],
  [0, 9],
  [16, 23],
  [6, 13],
  [12, 20],
];
export const edges = [],
  adj = nodes.map(() => []);
for (const path of connections)
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1],
      b = path[i],
      start = nodes[a],
      end = nodes[b],
      delta = end.clone().sub(start);
    const perp = v(-delta.y, delta.x, 0).normalize(),
      bend = range(-0.21, 0.21);
    const controls = [
      start,
      start.clone().lerp(end, 0.28).addScaledVector(perp, bend),
      start.clone().lerp(end, 0.63).addScaledVector(perp, range(-0.22, 0.22)),
      end,
    ];
    const curve = new T.CatmullRomCurve3(controls),
      samples = curve.getSpacedPoints(54);
    const e = { a, b, samples, len: curve.getLength(), r: range(0.125, 0.168) };
    adj[a].push(edges.length);
    adj[b].push(edges.length);
    edges.push(e);
  }
const cols = 1790,
  rows = Math.round((cols * H) / W);
let field;
export function relief(x, y) {
  const u = clamp(Math.round((x / W + 0.5) * (cols - 1)), 0, cols - 1),
    j = clamp(Math.round(((top - y) / H) * (rows - 1)), 0, rows - 1);
  return field[j * cols + u];
}
export function makeGeology(parent, img) {
  const dist = new Float32Array(cols * rows).fill(-3);
  function stamp(x, y, rx, ry) {
    let cx = (x / W + 0.5) * (cols - 1),
      cy = ((top - y) / H) * (rows - 1),
      sx = (rx / W) * cols,
      sy = (ry / H) * rows;
    for (
      let j = Math.max(0, Math.floor(cy - sy * 1.45));
      j <= Math.min(rows - 1, Math.ceil(cy + sy * 1.45));
      j++
    )
      for (
        let i = Math.max(0, Math.floor(cx - sx * 1.45));
        i <= Math.min(cols - 1, Math.ceil(cx + sx * 1.45));
        i++
      ) {
        let n = j * cols + i,
          d = (1 - Math.hypot((i - cx) / sx, (j - cy) / sy)) * Math.min(rx, ry);
        dist[n] = Math.max(d, dist[n]);
      }
  }
  for (const e of edges)
    e.samples.forEach((p, i) => {
      let r = e.r * (1 + 0.13 * Math.sin(i * 0.093 + e.a));
      stamp(p.x, p.y, r, r);
    });
  for (const [id, rx, ry] of rooms) {
    const p = nodes[id];
    stamp(p.x, p.y, rx, ry);
    stamp(p.x - rx * 0.37, p.y - 0.04, rx * 0.76, ry * 0.85);
    stamp(p.x + rx * 0.36, p.y + 0.03, rx * 0.77, ry * 0.81);
  }
  let w = img.width,
    h = img.height,
    source = makeCanvas(w, h),
    sc = source.getContext('2d');
  sc.drawImage(img, 0, 0);
  let pixels = sc.getImageData(0, 0, w, h).data;
  let c = makeCanvas(cols, rows),
    ctx = c.getContext('2d'),
    output = ctx.createImageData(cols, rows),
    rgba = output.data;
  field = new Float32Array(cols * rows);
  let excavated = new Float32Array(cols * rows);
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      let n = j * cols + i,
        x = (i / (cols - 1) - 0.5) * W,
        y = top - (j / (rows - 1)) * H;
      let s =
        (Math.min(h - 1, Math.floor((j / rows) * h)) * w + Math.min(w - 1, Math.floor((i / cols) * w))) *
        4;
      let lum = (pixels[s] + pixels[s + 1]) / 510;
      let rough =
        0.01 * Math.sin(x * 37 + y * 14) +
        0.012 * Math.sin(y * 53 - x * 16) +
        0.008 * Math.cos(x * 93 + y * 55) +
        (lum - 0.32) * 0.04;
      let d = dist[n] + rough * 0.58,
        lip = clamp((d + 0.024) / 0.112, 0, 1);
      excavated[n] = lip;
      field[n] =
        0.18 -
        0.328 * (lip * lip * (3 - 2 * lip)) -
        0.038 * Math.min(1, Math.max(d, 0) * 3) +
        0.026 * (lum - 0.4) +
        rough * 0.3;
    }
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      let n = j * cols + i,
        s = (Math.floor((j / rows) * h) * w + Math.floor((i / cols) * w)) * 4,
        l = excavated[n],
        x = (i / cols - 0.5) * W,
        y = top - (j / rows) * H;
      let gx = (field[j * cols + Math.min(cols - 1, i + 1)] - field[j * cols + Math.max(0, i - 1)]) * 22;
      let gy = (field[Math.min(rows - 1, j + 1) * cols + i] - field[Math.max(0, j - 1) * cols + i]) * 22;
      let reliefLight = clamp(1 + gx * 0.46 + gy * 0.62, 0.48, 1.31);
      let grain = (pixels[s] * 0.44 + pixels[s + 1] * 0.4 + pixels[s + 2] * 0.16) / 255;
      let local1 = 0,
        local2 = 0,
        amber = 0;
      if (l > 0.01)
        for (const [id, rx, ry, type] of rooms) {
          const p = nodes[id],
            dx = (x - p.x) / rx,
            dy = (y - p.y + ry * 0.28) / ry,
            g = Math.exp(-2 * (dx * dx + dy * dy));
          if (type === 'fungus') {
            local1 += g;
            local2 += g * (1 + 0.22 * Math.sin(x * 11));
          }
          if (type === 'queen' || type === 'granary') amber += g;
        }
      let density = 0.92 + 0.08 * Math.sin(x * 4 + y * 4),
        hollow = clamp(dist[n] * 4, 0, 1);
      const rich = Math.sin(x * 25.3 + y * 11.2) * 0.02 + grain;
      const cave = [
        151 + rich * 61 + amber * 26 - local1 * 108,
        108 + rich * 56 + amber * 20 + local2 * 38,
        77 + rich * 47 + local2 * 52,
      ];
      for (let k = 0; k < 3; k++) {
        const shell = (pixels[s + k] * 0.8 + [12, 9, 8][k]) * density;
        const shade = reliefLight * (1 - l * 0.1) * (1 - hollow * 0.07);
        rgba[4 * n + k] = Math.min(255, mix(shell, cave[k], l) * shade);
      }
      rgba[4 * n + 3] = 255;
    }
  ctx.putImageData(output, 0, 0);
  const g = new T.PlaneGeometry(W, H, 470, 205),
    pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setZ(i, relief(pos.getX(i), pos.getY(i) + (top + bottom) / 2));
  g.computeVertexNormals();
  const material = standard(0xffffff, 0.99, 0, { map: canvasTexture(c) });
  // A fine mineral grain in world space continues across the steep tunnel walls.
  const micro = makeCanvas(256, 256),
    mc = micro.getContext('2d');
  mc.drawImage(img, 530, 480, 340, 340, 0, 0, 256, 256);
  const grainMap = canvasTexture(micro);
  grainMap.wrapS = grainMap.wrapT = T.RepeatWrapping;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.grainMap = { value: grainMap };
    shader.vertexShader =
      'varying vec3 rock;\n' +
      shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nrock=position;');
    shader.fragmentShader =
      'varying vec3 rock; uniform sampler2D grainMap;\n' +
      shader.fragmentShader.replace(
        '#include <map_fragment>',
        `#include <map_fragment>
      vec2 grainUV=vec2(rock.x*2.4+rock.z*.78,rock.y*2.4+rock.z*1.87);
      vec3 grain=texture2D(grainMap,grainUV).rgb;
      float k=clamp(dot(grain,vec3(.38,.42,.20))*3.5,.0,1.4);
      diffuseColor.rgb*=.76+.56*k;
   `,
      );
  };
  mesh(parent, g, material, 0, (top + bottom) / 2, 0);
  return material;
}
