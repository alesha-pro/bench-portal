import * as T from "three";
import {
  P,
  V,
  tau,
  range,
  random,
  place,
  metal,
  curve,
  pipe,
  cylinder,
  ring,
  lineBetween,
  box,
  canvasTexture,
} from "./craft.js";

function circuitMask() {
  return canvasTexture(1536, 1024, (c, w, h) => {
    c.fillStyle = "#073d2e";
    c.fillRect(0, 0, w, h);
    const pixels = c.getImageData(0, 0, w, h);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const v = range(-5, 5);
      for (let j = 0; j < 3; j++) pixels.data[i + j] += v;
    }
    c.putImageData(pixels, 0, 0);
    const pad = (x, y, r = 4) => {
      c.fillStyle = "#c8a057";
      c.beginPath();
      c.arc(x, y, r, 0, tau);
      c.fill();
      c.fillStyle = "#213b32";
      c.beginPath();
      c.arc(x, y, r * 0.47, 0, tau);
      c.fill();
    };
    for (let group = 0; group < 81; group++) {
      const x = range(-160, w),
        y = range(-50, h),
        sg = random() > 0.5 ? 1 : -1;
      const first = range(18, 125),
        bend = range(17, 103),
        last = range(15, 118);
      const count = Math.floor(range(3, 9));
      for (let lane = 0; lane < count; lane++) {
        const dy = (lane - count / 2) * 6.5,
          shift = dy * sg * 0.42;
        c.beginPath();
        c.moveTo(x, y + dy);
        c.lineTo(x + first - shift, y + dy);
        c.lineTo(x + first + bend - shift, y + dy + bend * sg);
        c.lineTo(x + first + bend + last, y + dy + bend * sg);
        c.strokeStyle = "#0e302b";
        c.lineWidth = 5;
        c.stroke();
        c.strokeStyle =
          group % 4 === 0 ? "#c6a561" : group % 4 === 1 ? "#68987a" : "#397458";
        c.lineWidth = group % 4 === 0 ? 2.3 : 1.7;
        c.stroke();
        if (lane % 2 === 0) {
          pad(x, y + dy, 3);
          pad(x + first + bend + last, y + dy + bend * sg, 3);
        }
      }
    }
    for (let i = 0; i < 26; i++) {
      const x = range(40, w - 80),
        y = range(40, h - 70);
      for (let j = 0; j < 8; j++)
        for (let k = 0; k < 5; k++) {
          c.fillStyle = "#cfb67b";
          c.fillRect(x + j * 7, y + k * 7, 3, 3);
        }
      c.font = "10px monospace";
      c.fillStyle = "#c0c7a2";
      c.fillText("J" + (i + 10), x, y - 4);
    }
    for (let i = 0; i < 45; i++) {
      c.save();
      c.translate(range(50, w - 140), range(80, h - 80));
      c.rotate(((i % 2) * Math.PI) / 2);
      c.strokeStyle = "#99bc9e";
      c.lineWidth = 1.4;
      c.strokeRect(0, 0, 43, 21);
      c.fillStyle = "#c3cdb5";
      c.font = "11px monospace";
      c.fillText(["R", "C", "U", "JP"][i % 4] + (17 + i), 0, -4);
      c.restore();
    }
    c.font = "bold 21px monospace";
    c.fillStyle = "#d3dabe";
    c.fillText("UME // REV. A", 540, 835);
  });
}
const traceUniforms = { surge: { value: -10 } };
function etchedDetails() {
  const energized = new T.ShaderMaterial({
    uniforms: traceUniforms,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader: `varying vec3 wp;void main(){wp=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform float surge;varying vec3 wp;void main(){
      float d=(length(wp.xz-vec2(-1.32,.55))*.29-surge+.75)/.25;
      gl_FragColor=vec4(2.5,1.14,.30,exp(-d*d)*.95);}`,
  });

  const foil = metal(0xe1b05e, 0.71, 0.38);
  const pad = (x, z) => {
    cylinder(x, 0.873, z, 0.024, 0.024, 0.007, P.brass, 14);
    cylinder(x, 0.878, z, 0.01, 0.01, 0.004, P.enamel, 12);
  };
  // Differential pairs fan out at 45 degrees from the valve/keyed socket to the controller.
  for (const [x, z, dir, len] of [
    [-1.25, 0.91, 1, 0.81],
    [-0.14, 0.67, 1, 0.71],
    [0.72, -0.64, 1, 0.65],
    [-1.53, -0.12, 1, 0.66],
  ]) {
    for (let n = 0; n < 5; n++) {
      const zz = z - n * 0.027,
        dx = n * 0.011;
      const pts = [
        [x, 0.873, zz],
        [x + 0.12 + dx, 0.873, zz],
        [x + 0.25 + dx, 0.873, zz + 0.13 * dir],
        [x + len, 0.873, zz + 0.13 * dir],
      ];
      for (let k = 1; k < pts.length; k++) {
        const a = V(...pts[k - 1]),
          b = V(...pts[k]);
        lineBetween(a, b, 0.0053, foil, 5);
        a.y += 0.004;
        b.y += 0.004;
        lineBetween(a, b, 0.0038, energized, 5);
      }
      pad(x, zz);
      pad(x + len, zz + 0.13 * dir);
    }
  }
  for (const [x, z, tag] of [
    [-1.2, 0.93, "V1  /  HV"],
    [-1.61, 0.56, "V2"],
    [0.41, 1.13, "BGA - 24"],
    [1.19, 0.7, "HS 02"],
  ]) {
    const tex = canvasTexture(256, 64, (c) => {
      c.fillStyle = "#d4d6b2";
      c.font = "bold 34px monospace";
      c.fillText(tag, 5, 42);
      c.fillRect(4, 51, 130, 2);
    });
    place(
      new T.PlaneGeometry(0.3, 0.075),
      new T.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        opacity: 0.85,
      }),
      V(x, 0.882, z),
      V(1, 1, 1),
      [-Math.PI / 2, 0, 0],
    );
  }
  for (const [x, z] of [
    [0.87, 0.78],
    [1.07, 0.73],
    [-0.56, -0.82],
    [-0.75, -0.82],
  ]) {
    cylinder(x, 0.91, z, 0.066, 0.071, 0.065, P.graphite, 20);
    cylinder(x, 0.977, z, 0.056, 0.056, 0.09, P.jade, 20);
    cylinder(x, 1.026, z, 0.055, 0.055, 0.009, P.chrome, 20);
    for (const turn of [-0.58, 0.58])
      box(x, 1.032, z, 0.071, 0.002, 0.004, P.graphite, [0, turn, 0]);
  }
  // A few upright axial resistors sit on tinned legs, with readable colour bands.
  for (const [x, z] of [
    [-0.31, 1.04],
    [0.86, -0.39],
    [1.14, -0.43],
    [-0.99, -0.2],
  ]) {
    for (const d of [-0.095, 0.095])
      lineBetween(V(x + d, 0.872, z), V(x + d, 0.925, z), 0.007, P.chrome, 6);
    lineBetween(
      V(x - 0.096, 0.925, z),
      V(x + 0.096, 0.925, z),
      0.008,
      P.chrome,
    );
    lineBetween(
      V(x - 0.063, 0.925, z),
      V(x + 0.063, 0.925, z),
      0.024,
      P.brass,
      12,
    );
    for (const [d, mat] of [
      [-0.04, P.bronze],
      [-0.015, P.graphite],
      [0.005, P.jade],
      [0.043, P.gold],
    ]) {
      lineBetween(
        V(x + d, 0.925, z),
        V(x + d + 0.009, 0.925, z),
        0.0248,
        mat,
        12,
      );
    }
  }
}
function nameplate() {
  const tex = canvasTexture(1024, 160, (c, w, h) => {
    const grad = c.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#84634b");
    grad.addColorStop(0.42, "#d4b693");
    grad.addColorStop(1, "#99775e");
    c.fillStyle = grad;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 300; i++) {
      c.strokeStyle = "rgba(63,43,30,.10)";
      c.beginPath();
      const y = range(0, h);
      c.moveTo(range(0, w), y);
      c.lineTo(range(0, w), y);
      c.stroke();
    }
    c.fillStyle = "#302823";
    c.textAlign = "center";
    c.font = "58px serif";
    c.fillText("梅", 117, 99);
    c.fillRect(195, 30, 2, 99);
    c.textAlign = "left";
    c.font = "bold 35px monospace";
    c.fillText("K O B O   /   0 0 1", 239, 79);
    c.font = "20px monospace";
    c.fillText("SILICON  &  PLUM BLOSSOMS", 241, 113);
  });
  place(
    new T.PlaneGeometry(0.99, 0.155),
    metal(0xffffff, 0.45, 0.38, { map: tex }),
    V(0, 0.359, 1.088),
    V(1, 1, 1),
    [0.612, 0, 0],
  );
  for (const x of [-0.466, 0.466]) {
    place(
      new T.SphereGeometry(0.014, 10, 7),
      P.graphite,
      V(x, 0.362, 1.095),
      V(1, 1, 0.45),
    );
  }
}
function valve(x, z, height, digit) {
  const y = 0.875,
    r = 0.155;
  cylinder(x, y + 0.034, z, r * 1.42, r * 1.48, 0.07, P.graphite);
  cylinder(x, y + 0.094, z, r * 1.2, r * 1.35, 0.063, P.brass);
  for (let i = 0; i < 12; i++) {
    const a = (i * tau) / 12;
    cylinder(
      x + Math.cos(a) * r * 1.32,
      y + 0.077,
      z + Math.sin(a) * r * 1.32,
      0.014,
      0.015,
      0.028,
      P.chrome,
      8,
    );
  }
  ring(x, y + 0.133, z, r, 0.016, P.copper);
  const bottom = y + 0.14;
  const profile = [
    [0.82, 0],
    [0.96, 0.04],
    [1, 0.16],
    [1, 0.76],
    [0.98, 0.85],
    [0.85, 0.92],
    [0.62, 0.96],
    [0.24, 0.98],
    [0.11, 1.045],
    [0, 1.06],
  ];
  const glass = metal(0xc9f8ec, 0.25, 0.14, {
    transparent: true,
    opacity: 0.145,
    depthWrite: false,
    side: T.FrontSide,
  });
  place(
    new T.LatheGeometry(
      profile.map(([a, b]) => new T.Vector2(a * r, b * height)),
      40,
    ),
    glass,
    V(x, bottom, z),
  );
  for (const side of [-1, 1]) {
    lineBetween(
      V(x + side * 0.077, bottom, z - 0.028),
      V(x + side * 0.077, bottom + height * 0.85, z - 0.028),
      0.009,
      P.chrome,
    );
  }
  for (let i = 0; i < 13; i++) {
    const a = 0.65 + (i * (tau - 1.3)) / 12;
    lineBetween(
      V(x + Math.sin(a) * r * 0.78, bottom + 0.06, z + Math.cos(a) * r * 0.78),
      V(
        x + Math.sin(a) * r * 0.78,
        bottom + height * 0.8,
        z + Math.cos(a) * r * 0.78,
      ),
      0.0023,
      P.copper,
      4,
    );
  }
  for (let i = 0; i < 7; i++) {
    ring(
      x,
      bottom + height * (0.12 + i * 0.11),
      z,
      r * 0.78,
      0.0025,
      P.brass,
      28,
    );
  }
  const coords =
    digit === 0
      ? [
          [0, 0.2],
          [-0.63, 0.26],
          [-0.72, 0.46],
          [-0.66, 0.7],
          [-0.39, 0.8],
          [0.35, 0.81],
          [0.68, 0.71],
          [0.72, 0.41],
          [0.61, 0.26],
          [0, 0.2],
        ]
      : [
          [-0.55, 0.64],
          [0.1, 0.8],
          [0.22, 0.78],
          [0.2, 0.22],
          [-0.53, 0.22],
          [0.57, 0.22],
        ];
  const glyph = curve(
    coords.map(([a, b]) => V(x + a * r * 0.97, bottom + height * b, z + 0.09)),
  );
  pipe(glyph, 0.0068, P.hot, 48, 7);
  const glow = metal(0xff7126, 0, 1, {
    emissive: 0xff540f,
    emissiveIntensity: 1.3,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
    blending: T.AdditiveBlending,
  });
  pipe(glyph, 0.026, glow, 48, 8);
  ring(x, bottom + 0.025, z, r * 0.92, 0.0045, P.cream);
  for (let layer = 0; layer < 4; layer++) {
    const back = curve(
      coords.map(([a, b]) =>
        V(
          x + a * r * 0.87 + 0.007 * layer,
          bottom + height * b - 0.004 * layer,
          z + 0.064 - layer * 0.015,
        ),
      ),
    );
    pipe(back, 0.0028, P.bronze, 32, 4);
  }
  for (let i = 0; i < 12; i++) {
    const a = (i * tau) / 12;
    cylinder(
      x + Math.sin(a) * r * 0.91,
      y + 0.02,
      z + Math.cos(a) * r * 0.91,
      0.011,
      0.011,
      0.08,
      P.gold,
      7,
    );
  }
}
export function substrate(scene) {
  const tubeLight = new T.PointLight(0xff983f, 0.38, 1.87, 2);
  tubeLight.position.set(-1.29, 1.23, 0.53);
  scene.add(tubeLight);
  const woodTex = canvasTexture(1024, 256, (c, w, h) => {
    c.fillStyle = "#4a3025";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 1700; i++) {
      const y = range(0, h),
        x = range(-w, w),
        l = range(60, w * 1.1);
      c.strokeStyle = i % 3 ? "rgba(29,19,18,.19)" : "rgba(181,124,77,.18)";
      c.lineWidth = range(0.3, 2);
      c.beginPath();
      c.moveTo(x, y);
      c.bezierCurveTo(
        x + l * 0.33,
        y + range(-12, 12),
        x + l * 0.7,
        y + range(-8, 8),
        x + l,
        y,
      );
      c.stroke();
    }
  });
  const wood = metal(0xffffff, 0.13, 0.51, { map: woodTex });
  cylinder(0, -0.216, 0, 2.27, 2.2, 0.13, P.graphite, 8, 0.7);
  cylinder(0, -0.11, 0, 2.35, 2.28, 0.14, wood, 8, 0.7);
  cylinder(0, -0.032, 0, 2.345, 2.345, 0.017, P.copper, 8, 0.7);
  const stoneTex = canvasTexture(768, 384, (ctx, w, h) => {
    const img = ctx.createImageData(w, h);
    for (let j = 0; j < h; j++)
      for (let i = 0; i < w; i++) {
        const noise = (Math.sin(i * 14.68 + j * 21.48) * 38210.18) % 1;
        const band = Math.pow(
          0.5 +
            0.5 *
              Math.sin(
                (12 * i) / w +
                  (5 * j) / h +
                  0.39 * Math.sin(j / 34) +
                  0.13 * Math.sin(i / 23),
              ),
          23,
        );
        const tone = 31 + noise * 4 + band * 8,
          at = (j * w + i) * 4;
        img.data.set([tone * 0.86, tone, tone * 1.03, 255], at);
      }
    ctx.putImageData(img, 0, 0);
  });
  cylinder(
    0,
    0.013,
    0,
    2.32,
    2.36,
    0.075,
    metal(0xc5cfca, 0.33, 0.43, {
      map: stoneTex,
      bumpMap: stoneTex,
      bumpScale: 0.012,
    }),
    8,
    0.7,
  );
  for (const x of [-1.05, 1.05])
    for (const z of [-0.63, 0.63])
      box(x, 0.108, z, 0.38, 0.15, 0.24, P.graphite);
  cylinder(0, 0.172, 0, 1.52, 1.43, 0.09, P.copper, 8, 0.66);
  cylinder(0, 0.414, 0, 1.99, 1.51, 0.43, P.ceramic, 8, 0.69);
  const brushTex = canvasTexture(512, 128, (ctx, w, h) => {
    ctx.fillStyle = "#d18d69";
    ctx.fillRect(0, 0, w, h);
    for (let j = 0; j < h; j++) {
      ctx.fillStyle =
        "rgba(55,32,26," + (0.11 + 0.09 * Math.sin(j * 159.6)) + ")";
      ctx.fillRect(0, j, w, 1);
    }
  });
  cylinder(
    0,
    0.652,
    0,
    2.023,
    1.975,
    0.083,
    metal(0xffffff, 0.64, 0.36, { map: brushTex }),
    8,
    0.69,
  );
  for (let k = 0; k < 4; k++) {
    const y = 0.475 + k * 0.022,
      rad = 1.51 + ((y - 0.199) * 0.48) / 0.43;
    cylinder(0, y, 0, rad + 0.001, rad - 0.002, 0.005, P.graphite, 8, 0.69);
  }
  for (let i = 0; i < 17; i++) {
    const x = (i - 8) * 0.069;
    box(
      x,
      0.647,
      1.282,
      0.021,
      0.009,
      0.009,
      i % 4 === 0 ? P.gold : P.graphite,
    );
  }
  cylinder(0, 0.701, 0, 2.04, 2.005, 0.025, P.gold, 8, 0.69);
  cylinder(0, 0.753, 0, 2.038, 2.038, 0.079, P.ceramic, 8, 0.69);
  cylinder(0, 0.81, 0, 2.075, 2.045, 0.035, P.brass, 8, 0.69);
  cylinder(0, 0.837, 0, 2.04, 2.04, 0.022, P.graphite, 8, 0.69);
  cylinder(0, 0.851, 0, 1.994, 1.994, 0.017, P.jade, 8, 0.69);
  const boardMat = metal(0x9cc4a9, 0.29, 0.66, { map: circuitMask() });
  place(
    new T.CircleGeometry(1, 8, Math.PI / 8),
    boardMat,
    V(0, 0.866, 0),
    V(1.99, 1.335, 1),
    [-Math.PI / 2, 0, 0],
  );
  for (let i = 0; i < 21; i++)
    box(
      0.55 + i * 0.029,
      0.872,
      0.998 - 0.009 * i,
      0.017,
      0.004,
      0.091,
      P.gold,
    );
  nameplate();
  etchedDetails();
  const silicon = metal(0x272c30, 0.36, 0.59);
  const chip = (x, z, w, d, idx) => {
    box(x, 0.895, z, w, 0.05, d, silicon);
    box(x, 0.923, z, w * 0.75, 0.009, d * 0.69, P.graphite);
    for (let i = 0; i < 9; i++)
      for (const side of [-1, 1]) {
        box(
          x + (i / 8 - 0.5) * w * 0.88,
          0.885,
          z + side * d * 0.57,
          0.016,
          0.023,
          0.047,
          P.chrome,
        );
      }
    for (let i = 0; i < 5; i++)
      for (const s of [-1, 1])
        box(
          x + s * w * 0.54,
          0.882,
          z + (i / 4 - 0.5) * d * 0.8,
          0.042,
          0.021,
          0.017,
          P.chrome,
        );
    cylinder(x - w * 0.32, 0.93, z + d * 0.26, 0.014, 0.014, 0.005, P.brass, 8);
    const label = canvasTexture(256, 100, (c) => {
      c.fillStyle = "#262c2e";
      c.fillRect(0, 0, 256, 100);
      c.fillStyle = "#c2bdae";
      c.font = "26px monospace";
      c.fillText("KBX  " + (217 + idx), 12, 40);
      c.font = "18px monospace";
      c.fillText("SILICON / A1", 12, 73);
    });
    place(
      new T.PlaneGeometry(w * 0.67, d * 0.55),
      metal(0xffffff, 0.22, 0.55, { map: label }),
      V(x, 0.93, z),
      V(1, 1, 1),
      [-Math.PI / 2, 0, 0],
    );
  };
  [
    [0.15, 0.89, 0.44, 0.27],
    [-0.79, 0.48, 0.37, 0.28],
    [0.9, -0.2, 0.35, 0.35],
    [-1.39, 0.03, 0.32, 0.33],
    [0.67, 0.42, 0.22, 0.14],
    [-0.7, -0.73, 0.27, 0.3],
  ].forEach((p, i) => chip(...p, i));
  for (const [x, z, w] of [
    [1.32, 0.43, 0.45],
    [-1.13, -0.45, 0.38],
    [0.57, -0.85, 0.45],
  ]) {
    box(x, 0.89, z, w, 0.055, 0.29, P.bronze);
    for (let i = 0; i < 10; i++)
      box(x + (i / 9 - 0.5) * w * 0.92, 0.99, z, 0.019, 0.18, 0.265, P.copper);
  }
  for (let i = 0; i < 98; i++) {
    const a = range(0, tau),
      r = Math.sqrt(random()) * 1.66,
      x = Math.cos(a) * r,
      z = Math.sin(a) * r * 0.65;
    const mat = i % 5 === 0 ? P.jade : i % 5 === 1 ? P.brass : P.black;
    box(x, 0.888, z, 0.058, 0.029, 0.03, mat);
    for (const end of [-1, 1])
      box(x + end * 0.032, 0.885, z, 0.013, 0.022, 0.031, P.chrome);
  }
  for (const [x, z] of [
    [-0.55, 0.89],
    [1.35, -0.29],
    [-1.36, -0.21],
  ]) {
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 4; j++) {
        cylinder(
          x + i * 0.032,
          0.873,
          z + j * 0.032,
          0.01,
          0.01,
          0.009,
          P.gold,
          8,
        );
      }
  }
  // Woven copper ground straps rise above the solder mask in small mounds.
  for (const [x, z, wide, deep] of [
    [-0.59, 0.1, 0.39, 0.32],
    [0.43, -0.18, 0.41, 0.36],
    [-0.14, -0.48, 0.38, 0.27],
  ]) {
    const earth = metal(0x43332b, 0.64, 0.65);
    place(
      new T.SphereGeometry(1, 24, 12, 0, tau, 0, Math.PI / 2),
      earth,
      V(x, 0.867, z),
      V(wide * 0.91, 0.11, deep * 0.93),
    );
    for (let k = 0; k < 2; k++)
      for (let i = -8; i <= 8; i++) {
        const s = i / 9,
          ext = Math.sqrt(1 - s * s),
          pts = [];
        for (let j = 0; j <= 14; j++) {
          const q = (j / 7 - 1) * ext,
            h = (1 - q * q - s * s) * 0.15;
          pts.push(
            V(
              x + (k ? s : q) * wide,
              0.879 + h + 0.004 * Math.sin((j * Math.PI) / 2 + i),
              z + (k ? q : s) * deep,
            ),
          );
        }
        pipe(curve(pts), 0.005, k ? P.brass : P.bronze, 18, 4);
      }
  }
  for (let i = 0; i < 7; i++) {
    const pts = [
      [-1.25, 0.9, 0.29],
      [-1.03, 1.01, 0.15],
      [-0.94, 1.04, -0.13],
      [-0.67, 0.95, -0.27],
      [-0.35, 0.94, -0.25],
    ];
    pipe(
      curve(
        pts.map(([x, y, z], j) =>
          V(x, y + 0.011 * Math.sin(i + j), z + i * 0.022),
        ),
      ),
      0.012,
      [P.copper, P.graphite, P.gold][i % 3],
      24,
      6,
    );
  }
  valve(-1.18, 0.63, 0.62, 0);
  valve(-1.54, 0.31, 0.48, 1);
  const idle = P.hot.color.clone();
  return (t, height) => {
    traceUniforms.surge.value = height;
    const ignition = Math.exp(-Math.pow((height - 0.95) / 0.53, 2));
    const glow = 0.98 + 0.055 * Math.sin(t * 3.3) + 0.017 * Math.cos(t * 17.9);
    P.hot.color.copy(idle).multiplyScalar(glow + 2.3 * ignition);
    tubeLight.intensity = 0.41 * glow + 0.92 * ignition;
  };
}
