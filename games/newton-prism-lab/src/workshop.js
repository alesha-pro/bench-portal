import * as T from "three";
import {
  PI,
  TAU,
  rng,
  group,
  mesh,
  box,
  rod,
  cyl,
  ring,
  flatRing,
  turn,
  ball,
  plane,
  top,
  brass,
  gold,
  antique,
  iron,
  matte,
  mapped,
  canvasTexture,
  batch,
  shade,
} from "./craft.js";
import {
  manuscript,
  dialTexture,
  rulerTexture,
  plateTexture,
  astrolabeFace,
  receivingPaper,
} from "./engravings.js";
import {
  celestialInstruments,
  vessels,
  chamberstick,
  protractor,
  seal,
} from "./antiquities.js";
import { slit, screen, slitHalfWidth } from "./optics.js";

export async function surfaces() {
  const loader = new T.TextureLoader(),
    [wood, norm, wall] = await Promise.all(
      ["oak.jpg", "oak-normal.jpg", "plaster.jpg"].map((f) =>
        loader.loadAsync("./assets/" + f),
      ),
    );
  for (const t of [wood, norm, wall]) {
    t.wrapS = t.wrapT = T.RepeatWrapping;
    t.anisotropy = 8;
  }
  for (const t of [wood, norm]) {
    t.rotation = PI / 2;
    t.repeat.set(1.55, 1.2);
    t.center.set(0.5, 0.5);
  }
  wood.colorSpace = wall.colorSpace = T.SRGBColorSpace;
  wall.repeat.set(3, 1.6);
  const oak = mapped(wood, {
    normalMap: norm,
    normalScale: new T.Vector2(0.36, 0.36),
    roughness: 0.49,
  });
  const trim = oak.clone();
  trim.color.set(0xaf957f);
  trim.roughness = 0.48;
  const ebony = oak.clone();
  ebony.color.set(0x68574d);
  ebony.roughness = 0.62;
  return {
    oak,
    trim,
    ebony,
    wall: mapped(wall, { color: 0x9b958a }),
    paper: mapped(manuscript()),
    dial: mapped(dialTexture(), { metalness: 0.58, roughness: 0.43 }),
    rule: mapped(rulerTexture(), { metalness: 0.53, roughness: 0.36 }),
  };
}
const leather = [
  0x512923, 0x303e37, 0x48352e, 0x383c46, 0x674530, 0x32292a,
].map((v) => matte(v, 0.46));
const leaves = matte(0xcbb28a),
  ink = matte(0x262320, 0.42);
function volume(p, x, y, z, w, h, d, mat) {
  const g = group(p, x, y, z);
  box(g, 0, 0, 0, w * 0.92, h * 0.93, d * 0.96, leaves);
  for (let a of [-1, 1]) box(g, a * w * 0.48, 0, 0, w * 0.09, h, d, mat);
  box(g, 0, 0, d * 0.49, w, h, d * 0.09, mat);
  for (let k of [-0.39, -0.32, 0.19, 0.33, 0.39])
    box(g, 0, k * h, d * 0.545, w * 0.97, 0.012, 0.012, brass);
  box(g, 0, h * 0.014, d * 0.546, w * 0.78, h * 0.16, 0.009, antique);
  for (let k of [-0.012, 0.032])
    box(g, 0, h * k, d * 0.553, w * 0.57, 0.009, 0.009, gold);
  return g;
}
function astrolabe(p, s) {
  const g = group(p, -5.76, 0.64, -5.16);
  g.scale.setScalar(0.44);
  g.rotation.y = -0.18;
  turn(
    g,
    0,
    0,
    0,
    [
      [0.63, 0],
      [0.7, 0.055],
      [0.69, 0.12],
      [0.52, 0.16],
      [0.48, 0.22],
      [0.48, 0.3],
      [0.24, 0.37],
      [0.18, 0.51],
      [0.12, 0.58],
      [0.15, 0.66],
    ],
    s.ebony,
  );
  flatRing(g, 0, 0.22, 0, 0.49, 0.024, brass);
  for (let k of [-1, 1])
    rod(g, [k * 0.42, 0.22, 0], [k * 0.7, 0.72, 0], 0.042, brass);
  const disk = group(g, 0, 1.53, 0);
  disk.rotation.x = -0.16;
  const diskBody = cyl(disk, 0, 0, 0, 1.02, 1.02, 0.11, brass, 80);
  diskBody.rotation.x = PI / 2;
  mesh(
    disk,
    new T.CircleGeometry(1, 96),
    mapped(astrolabeFace(), { metalness: 0.56, roughness: 0.46 }),
    0,
    0,
    0.061,
  );
  for (let r of [0.62, 0.74, 0.96, 1.02])
    ring(disk, 0, 0, 0.081, r, 0.018, gold);
  ring(disk, 0, 0.2, 0.1, 0.54, 0.025, antique);
  for (let i = 0; i < 12; i++) {
    const a = (i * TAU) / 12;
    rod(
      disk,
      [Math.sin(a) * 0.24, Math.cos(a) * 0.24, 0.108],
      [Math.sin(a + 0.26) * 0.73, Math.cos(a + 0.26) * 0.73, 0.108],
      0.012,
      gold,
    );
  }
  rod(disk, [-0.72, -0.48, 0.14], [0.72, 0.48, 0.14], 0.023, iron);
  ball(disk, 0, 0, 0.16, 0.067, gold);
  ring(disk, 0, 1.16, 0, 0.11, 0.026, brass);
}
function lamp(p) {
  const g = group(p, -5.16, 0.015, -2.92);
  shade(p, -5.16, -2.92, 1.45, 1.35);
  turn(
    g,
    0,
    0,
    0,
    [
      [0.37, 0],
      [0.43, 0.04],
      [0.43, 0.1],
      [0.33, 0.15],
      [0.24, 0.2],
      [0.15, 0.27],
      [0.18, 0.32],
      [0.13, 0.4],
      [0.14, 0.48],
      [0.33, 0.55],
      [0.41, 0.66],
      [0.39, 0.75],
      [0.23, 0.86],
      [0.17, 0.89],
      [0.18, 0.96],
    ],
    brass,
  );
  flatRing(g, 0, 0.65, 0, 0.403, 0.018, gold);
  const glass = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: T.FrontSide,
    uniforms: {},
    vertexShader: `varying vec3 wp,n;void main(){wp=(modelMatrix*vec4(position,1.)).xyz;n=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
    fragmentShader: `varying vec3 wp,n;void main(){vec3 eye=normalize(cameraPosition-wp);float rim=pow(1.-abs(dot(eye,normalize(n))),2.8);float glint=pow(max(0.,dot(reflect(-eye,normalize(n)),normalize(vec3(-.5,.35,.7)))),55.);gl_FragColor=vec4(mix(vec3(.33,.27,.16),vec3(1.4,1.1,.68),glint),.035+.42*rim+.38*glint);}`,
  });
  turn(
    g,
    0,
    0,
    0,
    [
      [0.19, 0.9],
      [0.235, 1.02],
      [0.265, 1.15],
      [0.22, 1.28],
      [0.14, 1.41],
      [0.14, 1.7],
      [0.155, 1.74],
    ],
    glass,
  );
  flatRing(g, 0, 1.74, 0, 0.146, 0.008, gold);
  cyl(g, 0, 0.92, 0, 0.155, 0.162, 0.08, antique);
  cyl(g, 0, 0.977, 0, 0.059, 0.05, 0.085, ink);
  for (let j = 0; j < 12; j++) {
    const a = (j * TAU) / 12;
    rod(
      g,
      [0.17 * Math.cos(a), 0.89, 0.17 * Math.sin(a)],
      [0.184 * Math.cos(a), 0.995, 0.184 * Math.sin(a)],
      0.009,
      brass,
    );
  }
  const flame = new T.MeshBasicMaterial({ color: new T.Color(6.2, 2.8, 0.37) });
  turn(
    g,
    0,
    0,
    0,
    [
      [0.017, 0.995],
      [0.042, 1.033],
      [0.057, 1.085],
      [0.049, 1.13],
      [0.023, 1.2],
      [0.004, 1.3],
    ],
    flame,
    24,
  );
  rod(g, [0.2, 0.77, 0], [0.38, 0.78, 0], 0.019, brass);
  const key = cyl(g, 0.39, 0.78, 0, 0.082, 0.082, 0.038, brass);
  key.rotation.z = PI / 2;
  const light = new T.PointLight(0xffb461, 16, 8, 2);
  light.position.set(-5.16, 1.24, -2.92);
  p.add(light);
  return { light, pos: new T.Vector3(-5.16, 1.16, -2.92) };
}
function notebook(p, s) {
  const g = group(p, -3.98, 0.022, 1.7);
  g.rotation.y = -0.23;
  shade(p, -3.94, 1.71, 3.05, 2.12);
  const cover = leather[0];
  box(g, 0, 0.072, 0, 2.22, 0.13, 1.47, cover);
  for (let side of [-1, 1]) {
    const leaf = group(g, side * 0.53, 0.15, 0);
    leaf.rotation.z = -side * 0.061;
    box(leaf, 0, 0, 0, 1.04, 0.13, 1.39, leaves);
    for (let i = 0; i < 5; i++)
      box(leaf, 0, -0.048 + i * 0.021, 0.698, 1.03, 0.004, 0.007, antique);
    if (side === -1) top(leaf, 0, 0.068, 0, 1.03, 1.39, s.paper);
    else {
      const t = canvasTexture(512, 704, (c, w, h) => {
        c.fillStyle = "#ddc89c";
        c.fillRect(0, 0, w, h);
        c.strokeStyle = "#826443";
        c.strokeRect(22, 22, w - 44, h - 44);
        c.fillStyle = "#5f442e";
        c.textAlign = "center";
        c.font = "italic 52px serif";
        c.fillText("Experiment VI.", 256, 105);
        c.font = "16px serif";
        c.fillText("OF THE REFRANGIBILITY OF RAYS", 256, 145);
        const rand = rng(21);
        c.lineWidth = 2.4;
        c.beginPath();
        c.moveTo(70, 259);
        c.lineTo(197, 250);
        c.lineTo(245, 278);
        c.lineTo(428, 230);
        c.moveTo(158, 293);
        c.lineTo(212, 202);
        c.lineTo(265, 299);
        c.closePath();
        c.stroke();
        for (let n = 0; n < 7; n++) {
          c.beginPath();
          c.moveTo(245, 278);
          c.lineTo(428, 230 + n * 11);
          c.stroke();
        }
        c.font = "italic 19px serif";
        c.fillText("B", 211, 196);
        c.fillText("A", 146, 300);
        c.fillText("C", 277, 308);
        for (let j = 0; j < 12; j++) {
          let x = 57;
          const y = 360 + j * 23;
          while (x < 435) {
            let l = 10 + rand() * 55;
            c.beginPath();
            c.moveTo(x, y);
            for (let k = 1; k < l; k += 3)
              c.lineTo(x + k, y - Math.pow(rand(), 3) * 8);
            c.stroke();
            x += l + 6;
          }
        }
      });
      top(leaf, 0, 0.068, 0, 1.03, 1.39, mapped(t));
    }
  }
  const ribbon = matte(0x843c31);
  box(g, -0.45, 0.053, 0.85, 0.12, 0.019, 0.41, ribbon);
  seal(g, -0.45, 0.018, 0.99, 0.92);
  const well = group(p, -5.32, 0.016, 1.12);
  turn(
    well,
    0,
    0,
    0,
    [
      [0.21, 0],
      [0.24, 0.06],
      [0.21, 0.25],
      [0.14, 0.28],
      [0.11, 0.38],
      [0.14, 0.4],
    ],
    new T.MeshStandardMaterial({ color: 0xd5cdb7, roughness: 0.24 }),
    32,
  );
  for (let i = 0; i < 12; i++) {
    const a = (i * TAU) / 12,
      mark = ball(
        well,
        0.221 * Math.cos(a),
        0.145,
        0.221 * Math.sin(a),
        0.026,
        matte(0x465a73),
        12,
      );
    mark.scale.y = 2;
  }
  cyl(well, 0, 0.388, 0, 0.106, 0.106, 0.01, ink);
  flatRing(well, 0, 0.39, 0, 0.137, 0.021, brass);
  const quill = group(well, 0, 0.31, 0);
  quill.rotation.z = 0.42;
  quill.rotation.x = -0.13;
  rod(quill, [0, 0, 0], [0.06, 1.36, 0], 0.011, leaves, 0.004);
  const plume = canvasTexture(256, 768, (c, w, h) => {
    const rand = rng(1667);
    c.translate(w * 0.48, h * 0.96);
    c.scale(1, -1);
    for (let i = 0; i < 690; i++) {
      const u = i / 690,
        spine = 11 * Math.sin(u * 2.9) + 18 * u * u,
        r = Math.pow(Math.sin(Math.PI * u), 0.8) * (1 - 0.31 * u);
      for (let side of [-1, 1]) {
        const reach = side * r * (side < 0 ? 99 : 123) * (0.89 + 0.11 * rand()),
          rise = (1 - u * 0.69) * 93 * r;
        const y = u * 670,
          lum = 155 + rand() * 82;
        c.strokeStyle =
          "rgba(" +
          [lum, lum * 0.935, lum * 0.8].map(Math.round).join(",") +
          ",.91)";
        c.lineWidth = 1.15 + rand() * 1.7;
        c.beginPath();
        c.moveTo(spine, y);
        c.quadraticCurveTo(
          spine + reach * 0.7,
          y + rise * 0.21,
          spine + reach,
          y + rise + rand() * 5,
        );
        c.stroke();
      }
    }
    c.strokeStyle = "#dacdb0";
    c.lineWidth = 4;
    c.beginPath();
    c.moveTo(0, -6);
    c.quadraticCurveTo(17, 390, 21, 668);
    c.stroke();
  });
  const feather = new T.MeshStandardMaterial({
    map: plume,
    alphaTest: 0.18,
    side: T.DoubleSide,
    roughness: 0.86,
  });
  const f = plane(quill, 0.04, 0.91, 0, 0.45, 1.07, feather);
  f.rotation.y = -0.12;
}
function handTools(p, s) {
  const ruler = group(p, -1.38, 0.035, 2.93);
  ruler.rotation.y = -0.07;
  box(ruler, 0, 0, 0, 3.46, 0.052, 0.235, brass);
  top(ruler, 0, 0.028, 0, 3.43, 0.227, s.rule);
  const g = group(p, 4.52, 0.046, 2.19);
  g.rotation.y = 0.52;
  for (const side of [-1, 1]) {
    const arm = group(g);
    arm.rotation.y = side * 0.24;
    box(arm, 0, 0.055, 0.03, 0.082, 0.057, 1.11, brass);
    box(arm, 0, 0.085, 0.05, 0.018, 0.006, 0.5, iron);
    rod(arm, [0, 0.054, 0.585], [0, 0.052, 0.91], 0.042, iron, 0.004);
    rod(arm, [0, 0.054, -0.525], [0, 0.052, -0.71], 0.038, iron, 0.004);
    for (let i = 0; i < 11; i++)
      box(arm, 0.021, 0.086, -0.21 + i * 0.043, 0.025, 0.005, 0.007, antique);
  }
  cyl(g, 0, 0.094, -0.08, 0.092, 0.08, 0.05, brass);
  box(g, 0, 0.12, -0.08, 0.096, 0.005, 0.011, iron);
  const note = group(p, 3.72, 0.018, 2.74);
  note.rotation.y = -0.33;
  box(note, 0, 0.009, 0, 0.79, 0.018, 0.44, leaves);
  for (const k of [-1, 1])
    rod(note, [k * 0.385, 0.022, -0.21], [0, 0.022, 0.083], 0.004, antique);
  seal(note, 0, 0.024, 0.055, 0.72);
  const book = group(p, 5.55, 0.01, -2.81);
  book.rotation.y = 0.22;
  box(book, 0, 0.18, 0, 1.32, 0.28, 0.96, leaves);
  box(book, 0, 0.035, 0, 1.4, 0.065, 1.03, leather[0]);
  box(book, 0, 0.332, 0, 1.41, 0.065, 1.03, leather[0]);
  const cover = canvasTexture(512, 384, (c, w, h) => {
    c.fillStyle = "#502c23";
    c.fillRect(0, 0, w, h);
    c.strokeStyle = "#be9861";
    c.lineWidth = 2;
    for (let d of [16, 22, 34]) c.strokeRect(d, d, w - 2 * d, h - 2 * d);
    c.fillStyle = "#d4b276";
    c.textAlign = "center";
    c.font = "42px serif";
    c.fillText("PRINCIPIA", w / 2, 177);
    c.font = "17px serif";
    c.fillText("MATHEMATICA", w / 2, 211);
  });
  top(book, 0, 0.367, 0, 1.4, 1.025, mapped(cover));
}
function cabinets(p, s) {
  const rand = rng(8391);
  for (const [cx, width] of [
    [-5.49, 4.27],
    [2.18, 2.58],
  ]) {
    box(p, cx, 2.12, -5.72, width, 5.36, 0.23, s.ebony);
    for (let side of [-1, 1]) {
      const x = cx + side * (width * 0.5 - 0.1);
      box(p, x, 2.15, -5.37, 0.21, 5.5, 0.72, s.trim);
      for (let a of [-0.045, 0.045])
        box(p, x + a, 2.22, -4.988, 0.018, 5.1, 0.025, antique);
    }
    for (let y of [-0.48, 0.57, 1.85, 3.15, 4.54, 4.78]) {
      box(p, cx, y, -5.38, width, 0.12, 0.85, s.trim);
      box(p, cx, y + 0.046, -4.925, width + 0.05, 0.058, 0.065, s.oak);
    }
    for (let y of [0.64, 1.92, 3.22]) {
      let x = cx - width * 0.5 + 0.23,
        end = cx + width * 0.5 - 0.22;
      while (x + 0.2 < end) {
        const w = 0.115 + rand() * 0.17,
          h = 0.68 + rand() * 0.42,
          d = 0.34 + rand() * 0.17;
        if (
          (cx > 0 && y > 1.9) ||
          (cx < 0 && y === 1.92 && x > -5.25) ||
          (cx < 0 && y === 0.64 && x > -6.48 && x < -5.03)
        ) {
          x += 0.19;
          continue;
        }
        if (rand() < 0.1) {
          x += rand() * 0.27;
          continue;
        }
        const o = volume(
          p,
          x + w / 2,
          y + h / 2,
          -5.28 + rand() * 0.07,
          w,
          h,
          d,
          leather[Math.floor(rand() * leather.length)],
        );
        o.rotation.z = (rand() - 0.5) * 0.065;
        x += w + 0.024;
      }
    }
  }
}
export function workshop(scene, s) {
  const p = group(scene);
  box(p, 0.05, -0.24, 0.14, 13.1, 0.48, 8.0, s.oak);
  box(p, 0.05, -0.52, 0.14, 13.19, 0.11, 8.06, s.trim);
  box(p, 0.05, -0.75, 3.93, 12.92, 0.43, 0.2, s.trim);
  for (let x of [-4.78, -1.58, 1.63, 4.84]) {
    box(p, x, -0.77, 4.047, 3.05, 0.34, 0.075, s.oak);
    box(p, x, -0.77, 4.092, 2.85, 0.23, 0.026, s.trim);
    ball(p, x, -0.77, 4.16, 0.069, brass);
  }
  for (let x of [-5.95, 5.95])
    for (let z of [-3.3, 3.45]) {
      turn(
        p,
        x,
        -2.3,
        z,
        [
          [0.29, 0],
          [0.35, 0.12],
          [0.31, 0.27],
          [0.2, 0.49],
          [0.22, 0.69],
          [0.34, 0.91],
          [0.34, 1.04],
          [0.26, 1.14],
          [0.3, 1.34],
          [0.38, 1.48],
          [0.36, 1.81],
        ],
        s.trim,
        16,
      );
    }
  box(p, 0, 2.4, -6.08, 17, 0.0 + 9, 0.28, s.wall);
  box(p, 8.63, 2.3, 0, 0.31, 9, 15, s.wall);
  box(p, -8.44, 2.3, 0, 0.32, 9, 15, s.ebony);
  box(p, 0, -2.46, 0, 17.1, 0.3, 15, s.ebony);
  for (let x of [-8, -3.1, 1.65, 7.95])
    box(p, x, 2.4, -5.84, 0.22, 9, 0.2, s.trim);
  for (let y of [-0.32, 4.92, 5.14])
    box(p, 0, y, -5.78, 16.8, 0.16, 0.26, s.trim);
  for (let x of [-4.78, -1.58, 1.63, 4.84]) {
    for (const side of [-1, 1]) {
      for (let i = 0; i < 5; i++) {
        const leaf = ball(
          p,
          x + side * (0.36 + i * 0.175),
          -0.77 + 0.03 * Math.sin(i * 1.3),
          4.104,
          0.1,
          s.trim,
          12,
        );
        leaf.scale.set(1, 0.29, 0.16);
        leaf.rotation.z = side * (i % 2 ? 0.31 : -0.31);
      }
    }
  }
  cabinets(p, s);
  // A framed copperplate print above the instrument shelf.
  box(p, -0.71, 3.07, -5.84, 2.58, 2.98, 0.14, s.ebony);
  box(p, -0.71, 3.07, -5.75, 2.43, 2.84, 0.09, brass);
  box(p, -0.71, 3.07, -5.69, 2.34, 2.75, 0.055, s.trim);
  plane(p, -0.71, 3.07, -5.653, 2.19, 2.57, s.paper);
  box(p, -0.42, 0.1, -4.93, 3.67, 0.2, 1.32, s.trim);
  astrolabe(p, s);
  celestialInstruments(p, s);
  vessels(p);
  // Recessed shutter panels; light enters through the brass-edged aperture.
  for (let k = -3; k <= 3; k++) {
    const z = slit.z + k * 0.64;
    box(p, -8.25, 2.25, z, 0.18, 4.45, 0.615, s.trim);
    for (const y of [0.82, 3.52]) box(p, -8.14, y, z, 0.1, 1.38, 0.48, s.ebony);
  }
  for (let y of [0.07, 1.66, 2.82, 4.44])
    box(p, -8.12, y, slit.z, 0.17, 0.13, 4.66, s.oak);
  for (let z of [slit.z - 2.35, slit.z + 2.35])
    box(p, -8.08, 2.22, z, 0.23, 4.64, 0.14, s.trim);
  box(p, -8.107, slit.y, slit.z, 0.11, 0.73, 0.83, brass);
  const opening = group(scene, -8.035, slit.y, slit.z);
  const aperture = box(
    opening,
    0,
    0,
    0,
    0.041,
    0.365,
    1,
    new T.MeshBasicMaterial({ color: new T.Color(3.2, 2.25, 1.2) }),
  );
  const jaws = [-1, 1].map((side) =>
    box(opening, 0.027, 0, side * 0.2, 0.039, 0.46, 0.32, iron),
  );
  const { x, y, z, w, h } = screen;
  for (const side of [-1, 1]) {
    const foot = x + side * (w * 0.275);
    box(p, foot, 0.065, -3.61, 0.27, 0.13, 0.49, s.trim);
    rod(p, [foot, 0.08, -3.54], [foot, y - h * 0.48, z - 0.11], 0.048, brass);
    rod(p, [foot, 0.09, -3.77], [foot, y - h * 0.5, z - 0.1], 0.075, s.ebony);
  }
  box(p, x, y, z - 0.105, w + 0.24, h + 0.235, 0.15, s.trim);
  box(p, x, y, z - 0.054, w + 0.12, h + 0.12, 0.08, s.ebony);
  const parchment = receivingPaper();
  plane(p, x, y, z, w, h, mapped(parchment));
  for (const v of [-1, 1]) {
    const roller = cyl(
      p,
      x,
      y + v * (h / 2 + 0.045),
      z + 0.007,
      0.046,
      0.046,
      w + 0.22,
      brass,
    );
    roller.rotation.z = PI / 2;
    for (const u of [-1, 1])
      ball(
        p,
        x + u * (w / 2 - 0.108),
        y + v * (h / 2 - 0.106),
        z + 0.014,
        0.024,
        antique,
        12,
      );
  }
  for (const z of [-2.89, -1.92, -0.98, 0.06, 1.13, 2.19, 3.18]) {
    box(p, 0.05, 0.002, z, 13.06, 0.006, 0.012, s.ebony);
    for (let x of [-6.16, 6.18])
      cyl(p, x, 0.004, z + 0.15, 0.025, 0.025, 0.009, s.ebony, 12);
  }
  for (let y of [0.61, 3.95]) {
    for (let side of [-1, 1]) {
      const z = slit.z + side * 1.32;
      box(p, -8.059, y, z, 0.055, 0.095, 1.62, iron);
      for (let dz of [-0.67, -0.22, 0.21, 0.69]) {
        let bolt = ball(p, -8.02, y, z + dz, 0.027, antique, 10);
        bolt.scale.x = 0.4;
      }
    }
  }
  const lock = group(p, -8.03, 2.02, slit.z + 0.43);
  box(lock, 0, 0, 0, 0.08, 0.26, 0.18, iron);
  rod(lock, [0.035, 0.03, 0], [0.1, 0.03, -0.36], 0.027, antique);
  ball(lock, 0.11, 0.032, -0.36, 0.055, brass);
  const bleed = new T.PointLight(0xffcd88, 3.1, 3.2, 2);
  bleed.position.set(-7.85, slit.y, slit.z);
  p.add(bleed);
  const l = lamp(p);
  const candle = chamberstick(scene, s);
  notebook(p, s);
  protractor(p);
  handTools(p, s);
  const plaque = mapped(
    plateTexture("EXPERIMENTUM   CRUCIS", "I. NEWTON  •  OPTICAL BENCH"),
    { metalness: 0.55, roughness: 0.44 },
  );
  plane(p, 0.1, -0.28, 4.147, 1.46, 0.33, plaque);
  batch(p);
  return {
    light: l.light,
    parchment,
    update(t, mm) {
      const half = slitHalfWidth(mm);
      aperture.scale.z = half * 2;
      jaws.forEach((jaw, i) => (jaw.position.z = (2 * i - 1) * (0.16 + half)));
      candle(t);
    },
  };
}
