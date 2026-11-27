import {
  T,
  group,
  mesh,
  mat,
  basic,
  box,
  cyl,
  rim,
  rod,
  tube,
  print,
  contact,
  lathe,
  canvasMap,
  random,
  tau,
} from "./craft.js";
import { cabinetTop } from "./finishes.js";
import { label, meterFace, lettering, records } from "./print.js";

function vinylSurface() {
  // Dust and cleaning marks live in record coordinates and cross the fixed lamp reflection.
  const wear = canvasMap(
    1536,
    1536,
    (c, w, h) => {
      const rng = random(7318);
      c.fillStyle = "black";
      c.fillRect(0, 0, w, h);
      for (let i = 0; i < 145; i++) {
        const x = rng() * w,
          y = rng() * h,
          len = 2 + rng() ** 4 * 94;
        c.strokeStyle = "rgba(255,255,255," + (0.13 + rng() * 0.4) + ")";
        c.lineWidth = 0.45 + rng() * 0.85;
        c.beginPath();
        c.moveTo(x, y);
        c.quadraticCurveTo(
          x + len * 0.58,
          y - len * 0.12,
          x + len,
          y - len * rng() * 0.5,
        );
        c.stroke();
      }
      for (let i = 0; i < 3100; i++) {
        c.fillStyle = "rgba(255,255,255," + (0.22 + rng() * 0.6) + ")";
        c.fillRect(
          rng() * w,
          rng() * h,
          0.7 + rng() ** 3 * 3.2,
          0.7 + rng() * 1.5,
        );
      }
    },
    false,
  );
  return new T.ShaderMaterial({
    uniforms: { warm: { value: 0.68 }, wear: { value: wear } },
    vertexShader: `varying vec2 tex; varying vec3 world;
    void main(){tex=uv;vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
    fragmentShader: `varying vec2 tex;varying vec3 world;uniform float warm;uniform sampler2D wear;
    void main(){vec2 q=tex-.5;float r=length(q);float a=atan(q.y,q.x);
      vec3 eye=normalize(cameraPosition-world);
      vec2 rad=normalize(vec2(world.x+.30,world.z-.39));
      vec2 h=normalize(normalize(vec2(1.12, -.74)-world.xz)+eye.xz);
      float ang=dot(rad,h);float sheen=pow(abs(ang),19.);
      float blue=pow(abs(dot(rad,normalize(vec2(-.98,.32)+eye.xz*.30))),16.);
      float bands=.5+.5*cos(r*219.+.75*sin(r*99.));
      float groove=.5+.5*cos(r*1610.+.7*sin(a*2.))*(1.-smoothstep(.0006,.004,fwidth(r)));
      float cut=1.;for(int i=0;i<5;i++){float u=.227+float(i)*.052;cut*=.67+.33*smoothstep(.0006,.0028,abs(r-u));}
      vec3 col=vec3(.007,.010,.013)+vec3(.0028,.0034,.0042)*bands;
      col+=mix(vec3(.26,.27,.25),vec3(.39,.24,.135),warm)*sheen*(.48+.29*groove+.083*bands);
      col+=vec3(.061,.128,.138)*blue*(.28+.38*groove);
      col+=vec3(.007)*pow(.5+.5*cos(r*2020.),3.)*(1.-smoothstep(.001,.005,fwidth(r)));
      float debris=texture2D(wear,tex).r;
      col+=vec3(.85,.68,.44)*debris*(.048+.63*pow(sheen,.38)+.16*blue);
      col*=cut*(.96+.04*groove);gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
}
export function turntable(scene, M) {
  const p = group(scene, 0, 0, 0.39);
  contact(p, 0, 0, 3.15, 2.2, 0.008, 0.89);
  for (const x of [-0.91, 0.91])
    for (const z of [-0.54, 0.54]) {
      cyl(p, 0.103, 0.091, 0.105, M.rubber, x, 0.064, z);
      rim(p, 0.094, 0.009, M.aged, x, 0.076, z);
    }
  box(p, 2.55, 0.28, 1.74, M.wood, 0, 0.213, 0, 0.073);
  box(p, 2.48, 0.018, 1.68, M.aged, 0, 0.353, 0, 0.028);
  box(p, 2.45, 0.044, 1.65, cabinetTop(), 0, 0.378, 0, 0.032);
  // Inlaid walnut front, a manufacturer's plate, polished control and twin meters.
  box(p, 1.16, 0.141, 0.023, M.ink, -0.38, 0.218, 0.866, 0.011);
  print(
    p,
    0.42,
    0.091,
    lettering("Stillroom", "MODEL 73  •  STEREOPHONIC"),
    -0.02,
    0.221,
    0.881,
  );
  const needles = [],
    face = meterFace();
  for (const x of [-0.78, -0.491]) {
    box(p, 0.276, 0.116, 0.012, M.aged, x, 0.222, 0.881, 0.007);
    print(p, 0.258, 0.1, face, x, 0.221, 0.889, false, false);
    const pivot = group(p, x, 0.177, 0.892);
    rod(pivot, [0, 0, 0], [0, 0.084, 0], 0.0028, basic(0x82311b));
    needles.push(pivot);
  }
  for (const x of [0.61, 0.92]) {
    const k = group(p, x, 0.222, 0.875);
    k.rotation.x = Math.PI / 2;
    cyl(k, 0.079, 0.078, 0.075, M.aged, 0, 0.016, 0, 40);
    cyl(k, 0.067, 0.073, 0.014, M.brass, 0, 0.061, 0);
    box(k, 0.007, 0.004, 0.037, M.ink, 0, 0.071, -0.032);
  }
  for (const x of [-1.13, 1.13])
    for (const z of [-0.7, 0.71]) {
      cyl(p, 0.028, 0.028, 0.007, M.chrome, x, 0.404, z, 16);
      const s = box(p, 0.032, 0.002, 0.005, M.ink, x, 0.409, z);
      s.rotation.y = x + z;
    }
  const cx = -0.3,
    cz = 0;
  cyl(p, 0.811, 0.79, 0.045, M.rubber, cx, 0.421, cz, 144);
  cyl(p, 0.805, 0.799, 0.093, M.chrome, cx, 0.475, cz, 160);
  for (const y of [0.445, 0.465, 0.493, 0.511])
    rim(p, 0.799, 0.006, M.ink, cx, y, cz, 160);
  const machined = mat(0xcdd1ce, 0.29, 0.86);
  // Localized neon illumination across the turning rows, fixed to the lamp on the plinth.
  machined.onBeforeCompile = (shader) => {
    shader.vertexShader =
      "varying vec3 dotWorld;\n" +
      shader.vertexShader.replace(
        "#include <project_vertex>",
        "#include <project_vertex>\ndotWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;",
      );
    shader.fragmentShader =
      "varying vec3 dotWorld;\n" +
      shader.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
       vec2 offset=(dotWorld.xz-vec2(-.99,.93))*vec2(4.3,5.8);
       totalEmissiveRadiance+=vec3(1.9,.39,.045)*exp(-dot(offset,offset));`,
      );
  };
  const rows = [108, 120, 132];
  const marks = new T.InstancedMesh(
    new T.SphereGeometry(1, 10, 6),
    machined,
    rows.reduce((a, b) => a + b),
  );
  marks.position.set(cx, 0, cz);
  const dummy = new T.Object3D();
  let index = 0;
  rows.forEach((count, row) => {
    for (let i = 0; i < count; i++) {
      const a = (tau * (i + row * 0.42)) / count;
      dummy.position.set(
        Math.sin(a) * 0.802,
        0.454 + 0.023 * row,
        Math.cos(a) * 0.802,
      );
      dummy.rotation.y = a;
      dummy.scale.set(0.016 - row * 0.0015, 0.007, 0.0055);
      dummy.updateMatrix();
      marks.setMatrixAt(index++, dummy.matrix);
    }
  });
  p.add(marks);
  cyl(p, 0.79, 0.796, 0.026, M.rubber, cx, 0.532, cz, 160);
  const disc = group(p, cx, 0.552, cz),
    vinyl = vinylSurface();
  cyl(disc, 0.786, 0.785, 0.013, M.ink, 0, 0, 0, 180);
  const top = mesh(disc, new T.CircleGeometry(0.785, 192), vinyl, 0, 0.0074, 0);
  top.rotation.x = -Math.PI / 2;
  const labels = [0, 1, 2].map(label);
  const stamp = mesh(
    disc,
    new T.CircleGeometry(0.248, 96),
    mat(0xffffff, 0.62, 0, { map: labels[0] }),
    0,
    0.009,
    0,
  );
  stamp.rotation.x = -Math.PI / 2;
  rim(p, 0.247, 0.0018, M.aged, cx, 0.563, cz);
  const weight = group(disc, 0, 0.009, 0);
  lathe(
    weight,
    [
      [0.001, 0],
      [0.091, 0],
      [0.098, 0.007],
      [0.097, 0.019],
      [0.083, 0.025],
      [0.071, 0.032],
      [0.069, 0.065],
      [0.062, 0.073],
      [0.016, 0.073],
    ],
    M.brass,
  );
  for (const y of [0.01, 0.017, 0.036, 0.044, 0.052, 0.06])
    rim(weight, y < 0.02 ? 0.097 : 0.069, 0.0019, M.aged, 0, y, 0, 64);
  cyl(weight, 0.013, 0.014, 0.014, M.chrome, 0, 0.075, 0, 32);
  const ax = 0.81,
    az = -0.44;
  cyl(p, 0.199, 0.22, 0.059, M.ink, ax, 0.435, az);
  cyl(p, 0.16, 0.167, 0.044, M.brass, ax, 0.476, az);
  cyl(p, 0.13, 0.135, 0.154, M.chrome, ax, 0.566, az);
  rim(p, 0.134, 0.012, M.ink, ax, 0.568, az);
  const arm = group(p, ax, 0.655, az);
  tube(
    arm,
    [
      [0, 0.004, -0.2],
      [0, 0.012, 0.12],
      [0.037, 0.029, 0.39],
      [-0.068, 0.023, 0.67],
      [-0.215, -0.014, 0.88],
      [-0.234, -0.051, 1.03],
    ],
    0.023,
    M.chrome,
  );
  rod(arm, [-0.08, 0, 0], [0.085, 0, 0], 0.067, M.aged);
  rod(arm, [0, 0.012, -0.12], [0, 0.012, -0.306], 0.083, M.ink);
  for (let i = 0; i < 7; i++)
    rod(
      arm,
      [0, 0.012, -0.161 - i * 0.019],
      [0, 0.012, -0.172 - i * 0.019],
      0.086,
      M.chrome,
    );
  const scaleMap = canvasMap(512, 96, (c, w, h) => {
    c.fillStyle = "#232b29";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#f9e1ac";
    c.font = "26px monospace";
    for (let i = 0; i < 40; i++) {
      const x = (i * w) / 40;
      c.fillRect(x, 4, i % 5 ? 2 : 4, i % 5 ? 15 : 28);
      if (i % 5 === 0) c.fillText((i / 10).toFixed(1), x + 2, 67);
    }
  });
  const collar = group(arm, 0, 0.012, -0.15);
  collar.rotation.x = Math.PI / 2;
  cyl(
    collar,
    0.087,
    0.087,
    0.056,
    mat(0xffffff, 0.46, 0.28, { map: scaleMap }),
    0,
    0,
    0,
  );
  const dial = group(p, 1.033, 0.422, -0.29);
  cyl(dial, 0.063, 0.072, 0.042, M.aged, 0, 0.012, 0);
  cyl(
    dial,
    0.057,
    0.06,
    0.044,
    mat(0xffffff, 0.48, 0.2, { map: scaleMap }),
    0,
    0.049,
    0,
  );
  cyl(dial, 0.051, 0.054, 0.006, M.ink, 0, 0.074, 0);
  box(dial, 0.004, 0.003, 0.025, M.cream, 0.006, 0.078, -0.023);
  print(
    p,
    0.228,
    0.047,
    lettering("ANTI-SKATE", "BIAS COMPENSATION"),
    1.038,
    0.403,
    -0.159,
    true,
  );
  const head = group(arm, -0.229, -0.036, 1.01);
  head.rotation.y = -0.47;
  box(head, 0.113, 0.044, 0.175, M.ink, 0, 0, 0, 0.011);
  box(
    head,
    0.083,
    0.035,
    0.11,
    mat(0xab5936, 0.32, 0.18),
    0,
    -0.034,
    0.019,
    0.007,
  );
  for (const x of [-0.03, 0, 0.03])
    box(head, 0.012, 0.001, 0.04, M.rubber, x, 0.023, -0.043, 0.001);
  for (const x of [-0.034, 0.034])
    cyl(head, 0.011, 0.011, 0.005, M.chrome, x, 0.026, 0, 12);
  box(head, 0.061, 0.008, 0.05, M.cream, 0, -0.046, 0.039, 0.003);
  rod(head, [0, -0.044, 0.054], [0, -0.052, 0.094], 0.0022, M.chrome);
  const diamond = mesh(
    head,
    new T.OctahedronGeometry(0.0046),
    mat(0xc2e6e7, 0.09, 0.58),
    0,
    -0.0552,
    0.094,
  );
  for (const [i, color] of [0xb36149, 0x627c98, 0xd4bf92, 0x508574].entries()) {
    const x = (i - 1.5) * 0.011;
    tube(
      head,
      [
        [x, -0.012, -0.081],
        [x * 1.7, -0.026, -0.092],
        [x * 1.2, -0.036, -0.063],
        [x, -0.033, -0.031],
      ],
      0.0026,
      mat(color),
    );
  }
  tube(
    head,
    [
      [0.039, 0.011, 0.015],
      [0.083, 0.026, 0.034],
      [0.116, 0.064, 0.055],
    ],
    0.007,
    M.chrome,
  );
  cyl(p, 0.043, 0.047, 0.17, M.aged, 0.79, 0.48, 0.029);
  box(p, 0.118, 0.034, 0.057, M.ink, 0.79, 0.576, 0.029, 0.014);
  for (const [x, z, r] of [
    [0.96, 0.49, 0.082],
    [0.7, 0.56, 0.047],
  ]) {
    cyl(p, r * 1.1, r * 1.1, 0.019, M.ink, x, 0.413, z);
    cyl(p, r, r, 0.063, M.brass, x, 0.451, z);
    box(p, 0.008, 0.004, r * 0.6, M.ink, x, 0.485, z - 0.022);
    rim(p, r * 0.97, 0.0028, M.chrome, x, 0.472, z, 42);
    const lines = [];
    for (let j = 0; j < 36; j++) {
      const a = (j / 36) * tau;
      lines.push(
        x + Math.cos(a) * r,
        0.427,
        z + Math.sin(a) * r,
        x + Math.cos(a) * r,
        0.47,
        z + Math.sin(a) * r,
      );
    }
    const geo = new T.BufferGeometry();
    geo.setAttribute("position", new T.Float32BufferAttribute(lines, 3));
    p.add(
      new T.LineSegments(geo, new T.LineBasicMaterial({ color: 0x675137 })),
    );
    const ticks = [];
    for (let j = 0; j < 15; j++) {
      const a = -2.65 + j * 0.267;
      const r1 = r + 0.026,
        r2 = r + 0.04 + (j % 7 === 0 ? 0.013 : 0);
      ticks.push(
        x + Math.sin(a) * r1,
        0.403,
        z - Math.cos(a) * r1,
        x + Math.sin(a) * r2,
        0.403,
        z - Math.cos(a) * r2,
      );
    }
    const g = new T.BufferGeometry();
    g.setAttribute("position", new T.Float32BufferAttribute(ticks, 3));
    p.add(new T.LineSegments(g, new T.LineBasicMaterial({ color: 0xb5b399 })));
  }
  const light = mat(0xffaa32, 0.23, 0.2, {
    emissive: 0xff6e10,
    emissiveIntensity: 2.2,
  });
  box(p, 0.135, 0.044, 0.068, M.aged, -1.029, 0.43, 0.573, 0.018);
  box(p, 0.096, 0.017, 0.039, light, -1.03, 0.457, 0.575, 0.007);
  print(
    p,
    0.47,
    0.085,
    lettering("DIRECT DRIVE", "33⅓     •     QUARTZ LOCK"),
    0.83,
    0.402,
    0.721,
    true,
  );
  let bpm = records[0].bpm;
  return {
    setTrack(i) {
      stamp.material.map = labels[i];
      bpm = records[i].bpm;
    },
    update(t, warm) {
      disc.rotation.y = (-t * tau * 33.333) / 60;
      marks.rotation.y = disc.rotation.y;
      vinyl.uniforms.warm.value = warm;
      arm.rotation.y = -0.46 - 0.029 * (1 - Math.cos((t * Math.PI) / 30));
      diamond.position.y = -0.0552 + 0.00025 * Math.sin(disc.rotation.y);
      const beat = (t * bpm) / 60;
      needles.forEach((needle, channel) => {
        // Fast attack and damped return on the bass, Rhodes and brush accents.
        const env = (phase, decay) =>
          (1 - Math.exp(-phase * 36)) * Math.exp(-phase * decay);
        const bass = env(beat % 2, 1.9);
        const keys = env((beat + 1.42 + channel * 0.04) % 4, 2.5);
        const brush = env((beat + 1) % 2, 4.2);
        needle.rotation.z =
          0.54 -
          0.93 * bass -
          0.58 * keys -
          0.41 * brush +
          0.038 * Math.sin(t * 8 + channel);
      });
    },
  };
}
