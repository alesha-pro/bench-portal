import * as T from "three";
import {
  group,
  mesh,
  box,
  cyl,
  rod,
  turn,
  ring,
  flatRing,
  ball,
  plane,
  top,
  shade,
  brass,
  gold,
  antique,
  iron,
  matte,
  mapped,
  canvasTexture,
  rng,
  TAU,
  PI,
} from "./craft.js";

function graduatedBand(parent, radius, width, material, tilt, azimuth) {
  const band = group(parent);
  band.rotation.order = "YXZ";
  band.rotation.set(tilt, azimuth, 0);
  mesh(
    band,
    new T.CylinderGeometry(radius, radius, width, 80, 1, true),
    material,
  );
  for (const y of [-width / 2, width / 2])
    flatRing(band, 0, y, 0, radius, 0.009, gold);
  return band;
}

function latitudeScale() {
  return canvasTexture(2048, 112, (c, w, h) => {
    c.fillStyle = "#b89552";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#413323";
    c.textAlign = "center";
    for (let i = 0; i < 360; i++) {
      const x = (i * w) / 360;
      c.fillRect(x, 0, i % 5 ? 1 : 2, i % 10 ? (i % 5 ? 12 : 21) : 32);
      c.fillRect(x, h - 13, 1, 13);
      if (i % 30 === 15) {
        c.font = "italic 34px serif";
        c.fillText(
          [
            "Aries",
            "Taurus",
            "Gemini",
            "Cancer",
            "Leo",
            "Virgo",
            "Libra",
            "Scorpio",
            "Sagitt.",
            "Capric.",
            "Aquar.",
            "Pisces",
          ][Math.floor(i / 30)],
          x,
          76,
        );
      }
    }
  });
}
function orreryFoot(p, s, r) {
  turn(
    p,
    0,
    0,
    0,
    [
      [0.49, 0],
      [0.52, 0.04],
      [0.5, 0.11],
      [0.41, 0.15],
      [0.36, 0.19],
      [0.34, 0.23],
      [0.2, 0.25],
      [0.13, 0.31],
      [0.15, 0.38],
      [0.11, 0.44],
      [0.12, 0.5],
    ],
    s.ebony,
  );
  flatRing(p, 0, 0.125, 0, 0.46, 0.019, brass);
  for (const side of [-1, 1])
    rod(p, [side * 0.22, 0.23, 0], [side * r, 0.88, 0], 0.032, brass);
}
export function celestialInstruments(p, s) {
  const bandMat = mapped(latitudeScale(), {
    metalness: 0.61,
    roughness: 0.36,
    side: T.DoubleSide,
  });
  const table = group(p, 0.12, 0.21, -4.58);
  table.rotation.y = -0.32;
  orreryFoot(table, s, 0.67);
  const sky = group(table, 0, 1.29, 0);
  graduatedBand(sky, 0.84, 0.11, bandMat, 0.08, 0);
  graduatedBand(sky, 0.81, 0.065, bandMat, PI / 2, 0.2);
  const poles = group(sky);
  poles.rotation.z = -0.4;
  graduatedBand(poles, 0.735, 0.108, bandMat, 0.41, 0.4);
  graduatedBand(poles, 0.666, 0.045, bandMat, 0, 0);
  for (const a of [0, PI / 2])
    graduatedBand(poles, 0.65, 0.037, bandMat, PI / 2, a);
  for (const y of [-0.32, 0.32]) flatRing(poles, 0, y, 0, 0.56, 0.016, brass);
  rod(poles, [0, -0.88, 0], [0, 0.94, 0], 0.028, gold);
  for (const y of [-0.87, 0.93]) ball(poles, 0, y, 0, 0.057, antique);
  ball(poles, 0, 0, 0, 0.223, brass, 40);
  flatRing(poles, 0, 0, 0, 0.228, 0.012, gold);

  const globeBase = group(p, -1.66, 0.21, -4.72);
  globeBase.scale.setScalar(0.89);
  globeBase.rotation.y = 0.24;
  orreryFoot(globeBase, s, 0.54);
  const meridian = group(globeBase, 0, 1.11, 0);
  meridian.rotation.z = -0.37;
  const parchment = canvasTexture(1536, 768, (c, w, h) => {
    const random = rng(1666);
    c.fillStyle = "#41585a";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 12500; i++) {
      c.fillStyle = random() < 0.5 ? "#eed69b25" : "#1d28252c";
      c.fillRect(random() * w, random() * h, random() * 7 + 0.6, 1);
    }
    c.strokeStyle = "#d2b8779c";
    c.lineWidth = 1.6;
    for (let x = 0; x < w; x += 64) {
      c.beginPath();
      c.moveTo(x, 0);
      c.lineTo(x, h);
      c.stroke();
    }
    for (let y = 0; y < h; y += 64) {
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(w, y);
      c.stroke();
    }
    c.strokeStyle = "#e2bc6e";
    c.lineWidth = 5;
    c.beginPath();
    for (let x = 0; x <= w; x += 3)
      c.lineTo(x, h / 2 + Math.sin((x / w) * TAU) * 98);
    c.stroke();
    c.fillStyle = "#efdfb0";
    for (let i = 0; i < 1250; i++) {
      const x = random() * w,
        y = random() * h,
        r = 0.4 + random() ** 4 * 2.3;
      c.beginPath();
      c.arc(x, y, r, 0, TAU);
      c.fill();
    }
    const figures = [
      [
        "Ursa Major",
        [
          [0, 0],
          [24, 8],
          [53, -3],
          [83, 15],
          [95, 44],
          [129, 40],
          [128, 15],
          [83, 15],
        ],
      ],
      [
        "Cygnus",
        [
          [0, 24],
          [32, 3],
          [60, -13],
          [34, 2],
          [60, 21],
          [34, 2],
          [17, -14],
        ],
      ],
      [
        "Orion",
        [
          [0, -35],
          [35, -27],
          [29, 0],
          [21, 4],
          [16, 8],
          [-9, 33],
          [16, 8],
          [49, 39],
          [29, 0],
          [0, -35],
        ],
      ],
      [
        "Cassiopeia",
        [
          [0, -8],
          [25, 14],
          [40, -8],
          [64, 13],
          [88, -12],
        ],
      ],
    ];
    for (let i = 0; i < 12; i++) {
      const [name, pts] = figures[i % 4],
        x = 38 + (i % 6) * 245,
        y = 180 + Math.floor(i / 6) * 317 + (i % 3) * 32;
      c.strokeStyle = "#f2d094";
      c.lineWidth = 2.3;
      c.beginPath();
      for (const [u, v] of pts) c.lineTo(x + u * 1.35, y + v * 1.35);
      c.stroke();
      for (const [u, v] of pts) {
        c.beginPath();
        c.arc(x + u * 1.35, y + v * 1.35, 3.8, 0, TAU);
        c.fill();
      }
      c.font = "italic 23px serif";
      c.fillText(name, x - 4, y + 84);
    }
  });
  ball(meridian, 0, 0, 0, 0.58, mapped(parchment, { roughness: 0.56 }), 56);
  graduatedBand(meridian, 0.619, 0.059, bandMat, PI / 2, 0);
  graduatedBand(globeBase, 0.686, 0.064, bandMat, 0.14, -0.12).position.y =
    1.11;
  rod(meridian, [0, -0.71, 0], [0, 0.73, 0], 0.023, brass);
  ball(meridian, 0, 0.73, 0, 0.049, gold);
}

export function vessels(p) {
  // Window images, two narrow spectral glints, and settled dust on upward-facing glass.
  const glass = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    vertexShader: `varying vec3 wp,norm;void main(){wp=(modelMatrix*vec4(position,1.)).xyz;
      norm=normalize(mat3(viewMatrix*modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
    fragmentShader: `varying vec3 wp,norm;void main(){vec3 e=normalize((viewMatrix*vec4(cameraPosition-wp,0.)).xyz),n=normalize(norm);
      vec3 r=reflect(-e,n);float rim=pow(1.-abs(dot(n,e)),2.);
      float window=pow(max(0.,dot(r,normalize(vec3(-.5,.44,.78)))),21.);
      float violet=pow(max(0.,dot(r,normalize(vec3(.53,.22,.77)))),32.);
      float dust=smoothstep(.35,.99,n.y)*(.5+.5*sin(wp.x*163.+sin(wp.z*112.)));
      vec3 col=vec3(.036,.051,.034)+rim*vec3(.11,.18,.16)+window*vec3(.76,.60,.42)+violet*vec3(.35,.19,.55)+dust*.062;
      gl_FragColor=vec4(col,.16+.47*rim+.36*window+.19*violet+.1*dust);}`,
  });
  const cork = matte(0x796047, 0.94);
  const labels = mapped(
    canvasTexture(256, 112, (c, w, h) => {
      c.fillStyle = "#cbb888";
      c.fillRect(0, 0, w, h);
      c.strokeStyle = c.fillStyle = "#574735";
      c.strokeRect(7, 8, w - 14, h - 16);
      c.font = "italic 35px serif";
      c.textAlign = "center";
      c.fillText("Aq. fort.", w / 2, 70);
    }),
  );
  function vessel(x, y, z, scale, shape, tint) {
    const g = group(p, x, y, z);
    g.scale.setScalar(scale);
    const profile =
      shape === "phial"
        ? [
            [0.15, 0],
            [0.17, 0.04],
            [0.17, 0.48],
            [0.095, 0.54],
            [0.08, 0.74],
            [0.096, 0.75],
            [0.097, 0.79],
          ]
        : [
            [0.12, 0],
            [0.18, 0.035],
            [0.26, 0.15],
            [0.28, 0.29],
            [0.25, 0.39],
            [0.19, 0.47],
            [0.088, 0.57],
            [0.074, 0.79],
            [0.092, 0.81],
            [0.088, 0.85],
          ];
    turn(g, 0, 0, 0, profile, glass, 36);
    const liquid = matte(tint, 0.28);
    const level = shape === "phial" ? 0.27 : 0.3,
      r = shape === "phial" ? 0.157 : 0.261;
    turn(
      g,
      0,
      0.008,
      0,
      [
        [0.11, 0],
        [r * 0.78, 0.07],
        [r, level - 0.08],
        [r, level],
        [r * 0.92, level - 0.012],
        [0, level - 0.011],
      ],
      liquid,
    );
    flatRing(g, 0, level, 0, r, 0.007, glass);
    if (shape === "retort") {
      const path = new T.CatmullRomCurve3(
        [
          [0, 0.81, 0],
          [-0.02, 0.96, 0],
          [-0.17, 1, 0],
          [-0.33, 0.9, 0.01],
          [-0.64, 0.57, 0.05],
        ].map((q) => new T.Vector3(...q)),
      );
      const neck = new T.TubeGeometry(path, 32, 1, 16, false),
        pos = neck.attributes.position;
      for (let j = 0; j <= 32; j++) {
        const t = j / 32,
          axis = path.getPointAt(t),
          radius = 0.078 * (1 - 0.71 * t) + 0.009 * Math.sin(t * PI);
        for (let k = 0; k <= 16; k++) {
          const i = j * 17 + k,
            v = new T.Vector3()
              .fromBufferAttribute(pos, i)
              .sub(axis)
              .multiplyScalar(radius)
              .add(axis);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
      }
      neck.computeVertexNormals();
      mesh(g, neck, glass);
      ring(g, -0.64, 0.57, 0.05, 0.029, 0.006, glass).rotation.y = 1.07;
    } else {
      cyl(g, 0, profile.at(-1)[1] + 0.023, 0, 0.064, 0.071, 0.09, cork, 16);
      plane(g, 0, 0.23, r + 0.008, 0.23, 0.105, labels);
    }
  }
  for (const row of [
    [1.53, 1.92, -5.07, 0.72, "flask", 0x425331],
    [2.34, 1.92, -5.19, 1.09, "retort", 0x593718],
    [3.0, 1.92, -5.14, 1.1, "phial", 0x394d43],
    [1.54, 3.22, -5.12, 0.84, "flask", 0x48665d],
    [2.12, 3.22, -5.15, 1.05, "phial", 0x856040],
    [2.91, 3.22, -5.17, 0.86, "flask", 0x374d49],
    [-4.91, 1.92, -5.09, 0.91, "phial", 0x626f58],
    [-4.05, 1.92, -5.15, 1.07, "retort", 0x996e3f],
  ])
    vessel(...row);
}

export function chamberstick(scene, s) {
  const g = group(scene, -1.9, 0.012, 1.91);
  shade(g, 0, 0, 0.99, 0.74, 0.47);
  turn(
    g,
    0,
    0,
    0,
    [
      [0.13, 0],
      [0.25, 0.014],
      [0.31, 0.048],
      [0.33, 0.085],
      [0.33, 0.115],
      [0.28, 0.1],
      [0.16, 0.075],
      [0.085, 0.1],
      [0.105, 0.19],
      [0.13, 0.22],
    ],
    brass,
  );
  const loop = ring(g, -0.31, 0.18, 0, 0.143, 0.029, brass);
  loop.scale.y = 0.84;
  const wax = matte(0xe0be80, 0.7);
  turn(
    g,
    0,
    0,
    0,
    [
      [0.1, 0.12],
      [0.116, 0.19],
      [0.111, 0.55],
      [0.117, 0.76],
      [0.106, 0.82],
      [0.079, 0.806],
      [0.044, 0.78],
      [0, 0.78],
    ],
    wax,
  );
  const random = rng(1643);
  for (let i = 0; i < 13; i++) {
    const a = random() * TAU,
      h = 0.052 + random() ** 2 * 0.42;
    const drop = ball(
      g,
      Math.cos(a) * 0.108,
      0.81 - h / 2,
      Math.sin(a) * 0.108,
      0.025,
      wax,
      14,
    );
    drop.scale.y = h / 0.05;
  }
  rod(g, [0, 0.78, 0], [-0.007, 0.864, 0], 0.011, iron, 0.008, 10);
  const flame = group(g, -0.007, 0.844, 0);
  const goldFlame = new T.ShaderMaterial({
    vertexShader: `varying float h,facing;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);
      h=position.y/.22;facing=abs(dot(normalize(normalMatrix*normal),normalize(-mv.xyz)));
      gl_Position=projectionMatrix*mv;}`,
    fragmentShader: `varying float h,facing;void main(){
      float core=pow(facing,1.3)*(1.-smoothstep(.27,.88,h));
      gl_FragColor=vec4(mix(vec3(2.5,1.07,.24),vec3(5.2,4.25,2.6),core),1.);}`,
  });
  turn(
    flame,
    0,
    0,
    0,
    [
      [0, 0],
      [0.039, 0.027],
      [0.048, 0.069],
      [0.033, 0.119],
      [0.009, 0.192],
      [0, 0.22],
    ],
    goldFlame,
    20,
  );
  const heart = ball(
    flame,
    0,
    0.055,
    0.013,
    0.028,
    new T.MeshBasicMaterial({ color: new T.Color(4.9, 2.9, 0.64) }),
    16,
  );
  heart.scale.y = 1.5;
  const light = new T.PointLight(0xffae62, 3.6, 5.3, 2);
  light.position.set(0, 1.03, 0);
  g.add(light);
  light.castShadow = true;
  light.shadow.mapSize.set(256, 256);
  light.shadow.camera.near = 0.06;
  light.shadow.camera.far = 5.3;
  light.shadow.bias = -0.0015;
  light.shadow.normalBias = 0.012;
  flame.traverse((o) => {
    o.castShadow = false;
  });
  return (t) => {
    const f =
      0.55 * Math.sin(t * 5.2 + 0.4) +
      0.29 * Math.sin(t * 8.71) +
      0.16 * Math.sin(t * 13.3 + 1.9);
    flame.scale.set(1 - 0.12 * f, 1 + 0.19 * f, 1);
    flame.rotation.z = 0.11 * f;
    light.position.x = 0.021 * f;
    light.intensity = 3.25 + 0.53 * f;
  };
}

export function protractor(p) {
  const g = group(p, 1.24, 0.029, 2.77);
  g.rotation.y = -0.31;
  const r = 0.69,
    shape = new T.Shape();
  shape.absarc(0, 0, r, 0, PI, false);
  shape.lineTo(-r, -0.085);
  shape.lineTo(r, -0.085);
  shape.closePath();
  const hole = new T.Path();
  hole.moveTo(-0.52, 0.075);
  hole.absarc(0, 0.075, 0.52, PI, 0, true);
  hole.closePath();
  shape.holes.push(hole);
  const body = mesh(
    g,
    new T.ExtrudeGeometry(shape, {
      depth: 0.026,
      bevelEnabled: false,
      curveSegments: 54,
    }),
    brass,
  );
  body.rotation.x = -PI / 2;
  for (let i = 0; i <= 60; i++) {
    const a = (i * PI) / 60,
      len = i % 5 ? 0.035 : 0.085;
    rod(
      g,
      [(r - 0.018) * Math.cos(a), 0.03, -(r - 0.018) * Math.sin(a)],
      [(r - 0.018 - len) * Math.cos(a), 0.03, -(r - 0.018 - len) * Math.sin(a)],
      i % 5 ? 0.0025 : 0.005,
      iron,
      undefined,
      5,
    );
  }
  rod(g, [-0.04, 0.055, 0.02], [0.51, 0.055, -0.37], 0.016, antique, 0.009);
  cyl(g, 0, 0.047, 0, 0.043, 0.043, 0.024, gold);
}

export function seal(p, x, y, z, size) {
  const g = group(p, x, y, z);
  g.scale.setScalar(size);
  const wax = matte(0x922c20, 0.35),
    impression = matte(0x581f19, 0.5),
    rand = rng(148);
  for (let i = 0; i < 11; i++) {
    const a = (i * TAU) / 11,
      r = 0.065 + rand() * 0.024;
    const drop = ball(
      g,
      r * Math.sin(a),
      0.012,
      r * Math.cos(a),
      0.061 + rand() * 0.018,
      wax,
      14,
    );
    drop.scale.y = 0.23 + rand() * 0.12;
  }
  cyl(g, 0, 0.023, 0, 0.11, 0.113, 0.03, wax);
  flatRing(g, 0, 0.043, 0, 0.09, 0.008, impression);
  for (let i = 0; i < 4; i++) {
    const a = (i * PI) / 4;
    rod(
      g,
      [-0.061 * Math.cos(a), 0.046, -0.061 * Math.sin(a)],
      [0.061 * Math.cos(a), 0.046, 0.061 * Math.sin(a)],
      0.005,
      impression,
    );
  }
}
