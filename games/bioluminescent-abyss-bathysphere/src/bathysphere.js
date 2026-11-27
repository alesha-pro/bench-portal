import * as T from 'three';
import {
  TAU,
  V,
  rng,
  group,
  mesh,
  ball,
  rod,
  pipe,
  hoop,
  box,
  bake,
  std,
  basic,
  metal,
  painted,
  u,
} from './geometry.js';

import { cockpit } from './cockpit.js';

function dial(sonar = false, index = 0, printedHand = false) {
  const tex = painted(256, (c, s) => {
    const g = c.createRadialGradient(124, 116, 3, 128, 128, 124);
    g.addColorStop(0, sonar ? '#38745f' : index ? '#344347' : '#f7e8b8');
    g.addColorStop(0.8, sonar ? '#113a35' : index ? '#233638' : '#ccba8d');
    g.addColorStop(1, sonar ? '#071d1f' : index ? '#112223' : '#968267');
    c.fillStyle = g;
    c.fillRect(0, 0, s, s);
    c.translate(128, 128);
    if (sonar) {
      c.strokeStyle = '#75bf8a';
      c.lineWidth = 1.5;
      for (let i = 1; i <= 5; i++) {
        c.beginPath();
        c.arc(0, 0, i * 21, 0, TAU);
        c.stroke();
      }
      for (let i = 0; i < 12; i++) {
        c.rotate(TAU / 12);
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(0, 106);
        c.stroke();
      }
      c.fillStyle = 'rgba(138,255,150,.26)';
      c.beginPath();
      c.moveTo(0, 0);
      c.arc(0, 0, 102, -1.1, -0.45);
      c.fill();
      c.strokeStyle = '#baffa1';
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(92, -45);
      c.stroke();
      for (const [x, y] of [
        [31, -28],
        [-24, 46],
        [50, -38],
        [-65, -34],
      ]) {
        c.fillStyle = '#d2ffa4';
        c.beginPath();
        c.arc(x, y, 3, 0, TAU);
        c.fill();
      }
    } else {
      c.lineWidth = 4;
      c.strokeStyle = index ? '#a47352' : '#b95937';
      c.beginPath();
      c.arc(0, 0, 107, 0.92 - Math.PI / 2, 2.25 - Math.PI / 2);
      c.stroke();
      c.fillStyle = c.strokeStyle = index ? '#e8debd' : '#38271c';
      c.textAlign = 'center';
      for (let i = 0; i <= 60; i++) {
        const a = -2.25 + (i * 4.5) / 60;
        c.save();
        c.rotate(a);
        c.fillRect(-1.4, -103, 2.8, i % 5 === 0 ? 19 : 8);
        c.restore();
        if (i % 10 === 0) {
          c.font = 'bold 14px serif';
          c.fillText(index ? i / 10 : i, Math.sin(a) * 76, -Math.cos(a) * 76 + 5);
        }
      }
      c.font = 'bold 19px sans-serif';
      c.fillText(index ? 'DEPTH' : 'PRESSURE', 0, 41);
      c.font = '15px serif';
      c.fillText(index ? '× 1000 m' : 'MPa', 0, 60);
      if (!printedHand) return;
      c.rotate(0.75);
      c.fillStyle = index ? '#e4c388' : '#541f10';
      c.beginPath();
      c.moveTo(-4, 14);
      c.lineTo(0, -91);
      c.lineTo(4, 14);
      c.fill();
      c.fillStyle = '#271f17';
      c.beginPath();
      c.arc(0, 0, 8, 0, TAU);
      c.fill();
    }
  });
  const face = new T.MeshBasicMaterial({ map: tex, color: new T.Color().setScalar(sonar ? 1.5 : 1.2) });
  if (sonar)
    face.onBeforeCompile = (shader) => {
      shader.uniforms.sweepTime = u.time;
      shader.uniforms.echoRadius = u.radius;
      shader.fragmentShader =
        'uniform float sweepTime,echoRadius;\n' +
        shader.fragmentShader.replace(
          '#include <map_fragment>',
          `#include <map_fragment>
      vec2 dialUV=vMapUv-.5;float bearing=atan(dialUV.y,dialUV.x);
      float lag=mod(sweepTime*1.18-bearing+6.2831853,6.2831853);
      float sweep=exp(-lag*4.8)*smoothstep(.01,.08,length(dialUV));
      float echo=exp(-abs(length(dialUV)-echoRadius*.033)*84.)*step(0.,echoRadius);
      diffuseColor.rgb+=vec3(.11,.68,.26)*(sweep+.67*echo);`
        );
    };
  return face;
}

export function bathysphere(scene) {
  const root = group(scene),
    fixed = group(root),
    random = rng(721);
  const bronze = metal(0x9e6c39),
    brass = metal(0xd4a263, 'bright'),
    iron = metal(0x484d48, 'iron');
  const copper = metal(0xab603d),
    dark = std(0x162220, 0.57, 0.39),
    rubber = std(0x10191b, 0.05, 0.72);
  const cream = std(0xbbb293, 0.18, 0.73),
    amber = basic(0xffa83c, 2.5),
    lamp = basic(0xffedc2, 6.2);
  const phosphor = dial(true),
    gauges = [dial(false, 0, true), dial(false, 1, true)];
  const at = (theta, phi, r = 1.5) => [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(theta),
  ];
  for (let band = 0; band < 6; band++) {
    const low = 0.51 + (band * (Math.PI - 0.51)) / 6,
      high = 0.51 + ((band + 1) * (Math.PI - 0.51)) / 6;
    for (let j = 0; j < 8; j++) {
      const geom = new T.SphereGeometry(
        1.5,
        14,
        9,
        (j * TAU) / 8 + (band % 2) * 0.27 + 0.003,
        TAU / 8 - 0.006,
        low + 0.002,
        high - low - 0.004
      );
      geom.rotateX(Math.PI / 2);
      mesh(fixed, geom, (band + j) % 7 === 0 ? copper : bronze);
    }
    // Raised scalloped butt welds follow each meridional plate joint.
    for (let j = 0; j < 8; j++) {
      const angle = (j * TAU) / 8 + (band % 2) * 0.27 + Math.PI;
      const line = [];
      for (let i = 0; i <= 36; i++) {
        const theta = low + ((high - low) * i) / 36;
        line.push(at(theta, angle + 0.0024 * Math.sin(i * 2.4), 1.505 + 0.002 * Math.cos(i * 2.4)));
      }
      pipe(fixed, iron, line, 0.0105, 5, 42);
      for (let n = 1; n < 5; n++) {
        const theta = low + ((high - low) * n) / 5;
        for (const offset of [-0.02, 0.02])
          ball(fixed, brass, at(theta, angle + offset, 1.508), [0.011, 0.011, 0.011], 8);
      }
    }
    // Compression bands and paired rows of mushroom-head rivets.
    if (band < 5) {
      hoop(
        fixed,
        band % 2 ? iron : brass,
        [0, 0, 1.5 * Math.cos(high)],
        1.5 * Math.sin(high),
        band % 2 ? 0.02 : 0.033
      );
      const n = Math.max(12, Math.round(50 * Math.sin(high)));
      for (let j = 0; j < n; j++)
        for (const offset of [-0.032, 0.032]) {
          const p = at(high + offset, (j * TAU) / n + band * 0.12, 1.508);
          ball(fixed, j % 4 ? brass : iron, p, [0.024, 0.024, 0.024], 8);
        }
    }
  }
  // An engraved ceramic registry plate fixed to the port cheek.
  const plate = group(fixed);
  plate.rotation.set(-0.59, -0.76, -0.035, 'YXZ');
  const badge = painted(512, (c, s) => {
    c.fillStyle = '#263733';
    c.fillRect(0, 0, s, s);
    c.strokeStyle = '#bda878';
    c.lineWidth = 6;
    c.strokeRect(14, 14, s - 28, s - 28);
    c.textAlign = 'center';
    c.fillStyle = '#e8dfbd';
    c.font = 'bold 43px sans-serif';
    c.fillText('H A D A L', 256, 100);
    c.fillRect(88, 132, 336, 5);
    c.font = 'bold 170px serif';
    c.fillText('IV', 256, 326);
    c.font = 'bold 36px monospace';
    c.fillText('BELL · 04', 256, 407);
  });
  box(plate, brass, [0, 0.06, 1.527], [0.55, 0.45, 0.078]);
  mesh(
    plate,
    new T.PlaneGeometry(0.51, 0.404),
    std(0xffffff, 0.24, 0.46, { map: badge }),
    [0, 0.06, 1.567]
  );
  const dialAt = (par, x, y, z, r, face) => {
    rod(par, iron, [x, y, z - 0.028], [x, y, z + 0.012], r * 1.14, r * 1.14, 32);
    mesh(par, new T.CircleGeometry(r, 36), face, [x, y, z + 0.015]);
    hoop(par, brass, [x, y, z + 0.023], r, 0.013, 36);
  };
  let exteriorPanel;
  function port(par, r, z, main = false) {
    const section = [
      [r + 0.14, -0.225],
      [r + 0.203, -0.157],
      [r + 0.18, -0.082],
      [r + 0.133, -0.007],
      [r + 0.044, 0.024],
      [r - 0.045, -0.015],
      [r - 0.05, -0.163],
      [r - 0.074, -0.25],
    ];
    const casting = new T.LatheGeometry(
      section.map(([rad, depth]) => new T.Vector2(rad, depth)),
      80
    );
    casting.rotateX(Math.PI / 2);
    mesh(par, casting, bronze, [0, 0, z]);
    for (const [dr, dz, t, m] of [
      [0.14, -0.17, 0.105, iron],
      [0.115, -0.065, 0.096, bronze],
      [0.04, 0.017, 0.064, brass],
      [-0.024, -0.006, 0.027, rubber],
      [-0.058, -0.041, 0.021, brass],
    ]) {
      hoop(par, m, [0, 0, z + dz], r + dr, t);
    }
    for (let i = 0; i < 16; i++) {
      const a = (i * TAU) / 16,
        x = (r + 0.124) * Math.cos(a),
        y = (r + 0.124) * Math.sin(a);
      rod(par, i % 2 ? iron : brass, [x, y, z - 0.07], [x, y, z + 0.035], 0.046, 0.042, 6);
    }
    const glass = new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      vertexShader: `
      varying vec3 n,p; void main(){p=(modelMatrix*vec4(position,1)).xyz;n=normalize(mat3(viewMatrix*modelMatrix)*normal);
      gl_Position=projectionMatrix*viewMatrix*vec4(p,1);}`,
      fragmentShader: `
      varying vec3 n,p;void main(){vec3 N=normalize(n);float fres=pow(1.-abs(N.z),2.);
      float glint=pow(max(0.,dot(N,normalize(vec3(-.46,.7,.55)))),20.);
      gl_FragColor=vec4(vec3(.035,.15,.17)+vec3(.51,.84,.86)*glint, .09+.51*fres+.20*glint);}`,
    });
    const cap = new T.SphereGeometry(1, 48, 16, 0, TAU, 0, Math.PI / 2);
    cap.rotateX(Math.PI / 2);
    const lens = mesh(par, cap, glass, [0, 0, z - 0.077]);
    lens.scale.set(r - 0.056, r - 0.056, 0.093);
    if (main) {
      const interior = group(root, [0, 0, z - 0.31]);
      exteriorPanel = interior;
      const amberWall = std(0x63442a, 0.35, 0.5, { emissive: 0xa46022, emissiveIntensity: 0.44 });
      rod(interior, amberWall, [0, 0, -0.04], [0, 0, 0], r * 1.16, r * 1.16, 56);
      hoop(interior, copper, [0, 0, 0.01], r * 0.87, 0.026);
      for (let j = 0; j < 5; j++) {
        const a = 0.38 + j * 0.62,
          x = 0.57 * Math.cos(a),
          y = 0.57 * Math.sin(a);
        rod(interior, amber, [x - 0.026, y, 0.019], [x + 0.026, y, 0.019], 0.012, 0.012, 10);
      }
      for (const x of [-0.59, 0.56])
        pipe(
          interior,
          brass,
          [
            [x, -0.22, 0.016],
            [x, 0.05, 0.018],
            [x * 0.88, 0.31, 0.026],
          ],
          0.022
        );
      const trim = painted(512, (c) => {
        c.fillStyle = '#322e25';
        c.fillRect(0, 0, 512, 512);
        c.strokeStyle = '#a88750';
        c.lineWidth = 5;
        c.strokeRect(8, 12, 496, 488);
        c.textAlign = 'center';
        c.fillStyle = '#dfc58b';
        c.font = 'bold 61px serif';
        c.fillText('PELAGIC IV', 256, 146);
        c.fillRect(70, 207, 372, 6);
        c.font = '42px monospace';
        c.fillText('HYDROSTATIC', 256, 310);
        c.font = '31px monospace';
        c.fillText('45 MPa  /  OIL', 256, 410);
      });
      mesh(
        interior,
        new T.PlaneGeometry(0.43, 0.138),
        std(0xffe0a4, 0.18, 0.5, { map: trim }),
        [0, 0.414, 0.072]
      );
      for (let i = 0; i < 5; i++) {
        const x = -0.275 + i * 0.139;
        box(interior, iron, [x, -0.382, 0.036], [0.088, 0.116, 0.06]);
        rod(interior, brass, [x, -0.384, 0.072], [x - 0.012, -0.348, 0.107], 0.013, 0.013, 8);
      }
      for (const sx of [-1, 1])
        for (let i = 0; i < 4; i++) {
          const y = -0.2 + i * 0.13,
            x = sx * (0.495 + 0.033 * Math.cos(i));
          rod(interior, copper, [x, y, 0.018], [x, y + 0.075, 0.056], 0.01);
        }
      dialAt(interior, -0.29, 0.11, 0.025, 0.19, gauges[0]);
      dialAt(interior, 0.15, 0.155, 0.025, 0.154, phosphor);
      dialAt(interior, 0.43, -0.006, 0.025, 0.087, gauges[1]);
      for (let j = 0; j < 7; j++) {
        const x = -0.36 + j * 0.11;
        rod(interior, j % 3 ? amber : brass, [x, -0.24, 0.025], [x, -0.24, 0.064], 0.027, 0.024, 12);
      }
      for (let j = 0; j < 4; j++) {
        box(interior, iron, [-0.33 + j * 0.17, -0.081, 0.046], [0.12, 0.037, 0.017]);
      }
      for (const x of [-0.46, 0.31]) {
        const valve = hoop(interior, copper, [x, -0.14, 0.08], 0.083, 0.016, 20);
        for (let k = 0; k < 3; k++) {
          const a = (TAU * k) / 3;
          rod(
            interior,
            brass,
            [x, -0.14, 0.08],
            [x + 0.08 * Math.cos(a), -0.14 + 0.08 * Math.sin(a), 0.08],
            0.009
          );
        }
      }
      bake(interior);
    } else dialAt(par, 0, 0, z - 0.074, r - 0.06, gauges[1]);
  }
  port(fixed, 0.739, 1.405, true);
  const sidePort = group(fixed);
  sidePort.rotation.y = -1.64;
  sidePort.rotation.x = 0.15;
  port(sidePort, 0.35, 1.605);
  const second = group(fixed);
  second.rotation.y = 1.61;
  port(second, 0.29, 1.6);

  // Forged upper hatch, yoke, shackles and three interlocked helical cable strands.
  rod(fixed, iron, [0, 1.38, 0], [0, 1.6, 0], 0.55, 0.48, 40);
  for (const h of [1.45, 1.59]) hoop(fixed, brass, [0, h, 0], 0.5, 0.047).rotation.x = Math.PI / 2;
  for (const s of [-1, 1])
    pipe(
      fixed,
      iron,
      [
        [s * 0.5, 1.48, 0],
        [s * 0.35, 1.79, 0],
        [s * 0.13, 1.91, 0],
        [0, 1.9, 0],
      ],
      0.074
    );
  const hoist = group(root, [0, 1.91, 0]);
  for (let k = 0; k < 3; k++) {
    const link = group(hoist, [0, 0.11 + k * 0.214, 0]);
    link.rotation.y = 0.46 + (k * Math.PI) / 2;
    const crown = hoop(link, k === 1 ? iron : brass, [0, 0, 0], 0.105, 0.031, 36);
    crown.scale.y = 1.36;
    if (k !== 1) {
      rod(link, iron, [-0.132, -0.062, 0], [0.132, -0.062, 0], 0.025, 0.025, 10);
      rod(link, brass, [0.12, -0.062, 0], [0.144, -0.062, 0], 0.038, 0.037, 6);
    }
  }
  rod(hoist, iron, [0, 0.64, 0], [0, 0.91, 0], 0.088, 0.068, 16);
  for (let i = 0; i < 6; i++) {
    const points = [];
    for (let j = 0; j <= 480; j++) {
      const y = j * 0.032,
        a = j * 0.36 + (i * TAU) / 6;
      points.push([0.042 * Math.cos(a) + 0.003 * y * y, 0.84 + y, 0.042 * Math.sin(a) - 0.013 * y]);
    }
    pipe(hoist, i % 3 ? iron : brass, points, 0.025, 6, 550);
  }
  bake(hoist);
  // External coolant manifolds, brass unions, lifting lugs and landing skids.
  for (const s of [-1, 1]) {
    pipe(
      fixed,
      brass,
      [
        [s * 0.45, 1.33, -0.31],
        [s * 0.77, 1.26, -0.63],
        [s * 1.16, 0.83, -0.71],
        [s * 1.31, 0.23, -0.73],
        [s * 1.23, -0.64, -0.6],
      ],
      0.057
    );
    pipe(
      fixed,
      copper,
      [
        [s * 0.56, 1.34, -0.19],
        [s * 0.92, 1.16, -0.4],
        [s * 1.37, 0.55, -0.49],
        [s * 1.46, 0.05, -0.5],
      ],
      0.035
    );
    for (const z of [-0.7, 0.68]) rod(fixed, iron, [s * 0.72, -1.1, z], [s * 0.9, -1.76, z], 0.07);
    pipe(
      fixed,
      brass,
      [
        [s * 0.9, -1.51, -1.19],
        [s * 0.9, -1.74, -0.92],
        [s * 0.9, -1.77, 0.78],
        [s * 0.9, -1.68, 1.07],
        [s * 0.9, -1.55, 1.23],
      ],
      0.069
    );
    for (const y of [-0.25, 0.08, 0.41]) {
      const sh = hoop(fixed, iron, [s * 1.34, y, -0.56], 0.12, 0.025, 24);
      sh.rotation.x = 1.4;
    }
  }
  // Clamped high-pressure lines and a ribbed compensator run back to the portside drive.
  for (const side of [-1, 1]) {
    const rig = group(fixed);
    rig.rotation.y = side * 1.25;
    rig.rotation.z = -side * 0.19;
    for (const dx of [-0.14, 0, 0.14]) {
      pipe(
        rig,
        dx === 0 ? iron : copper,
        [
          [dx, 0.71, 1.29],
          [dx, 0.53, 1.45],
          [dx + 0.025, 0.3, 1.49],
          [dx + 0.09, 0.25, 1.5],
          [dx + 0.2, 0.23, 1.48],
        ],
        0.022,
        8,
        18
      );
    }
    for (const yy of [0.41, 0.55]) {
      box(rig, iron, [0, yy, 1.451], [0.37, 0.037, 0.066]);
      for (const x of [-0.145, 0.145]) rod(rig, brass, [x, yy, 1.46], [x, yy, 1.505], 0.015, 0.014, 6);
    }
    const tank = group(fixed, [side * 0.91, -0.1, -1.07]);
    tank.rotation.x = -0.22;
    rod(tank, iron, [0, -0.54, 0], [0, 0.44, 0], 0.2, 0.2, 20);
    ball(tank, bronze, [0, 0.44, 0], [0.2, 0.13, 0.2]);
    ball(tank, bronze, [0, -0.54, 0], [0.2, 0.13, 0.2]);
    for (let k = 0; k < 9; k++)
      hoop(
        tank,
        k === 1 || k === 7 ? brass : iron,
        [0, -0.45 + k * 0.1, 0],
        0.205,
        0.023,
        24
      ).rotation.x = Math.PI / 2;
  }
  // Clustered calcified barnacles with open opercula.
  for (let c = 0; c < 14; c++) {
    const a = random() * TAU,
      th = 0.66 + random() * 1.93;
    for (let j = 0; j < 6 + random() * 6; j++) {
      const p = V(...at(th + (random() - 0.5) * 0.21, a + (random() - 0.5) * 0.2, 1.498)),
        n = p.clone().normalize();
      const r = 0.014 + random() ** 2 * 0.051,
        h = r * (0.45 + random() * 0.69);
      const o = mesh(
        fixed,
        new T.CylinderGeometry(r * 0.46, r, h, 7, 1, true),
        random() < 0.25 ? iron : cream
      );
      o.position.copy(p).addScaledVector(n, h * 0.46);
      o.quaternion.setFromUnitVectors(V(0, 1, 0), n);
    }
  }
  const arms = [],
    lamps = [],
    propellers = [];
  for (const s of [-1, 1]) {
    const arm = group(root, [s * 1.1, -0.59, 0.52]);
    arms.push(arm);
    const shoulder = [0, 0, 0],
      elbow = [s * 0.48, -0.66, 0.29],
      wrist = [s * 0.4, -0.8, 0.98];
    ball(arm, iron, shoulder, [0.25, 0.23, 0.23]);
    rod(arm, bronze, shoulder, elbow, 0.135, 0.11, 10);
    rod(arm, iron, elbow, wrist, 0.112, 0.088, 10);
    for (const [joint, r] of [
      [elbow, 0.17],
      [wrist, 0.127],
    ]) {
      const [x, y, z] = joint;
      rod(arm, brass, [x - s * 0.12, y, z], [x + s * 0.12, y, z], r, r, 20);
      rod(arm, dark, [x + s * 0.12, y, z], [x + s * 0.144, y, z], r * 0.64, r * 0.64, 8);
    }
    rod(arm, brass, [s * 0.09, -0.1, 0.13], [s * 0.38, -0.43, 0.38], 0.069, 0.061);
    rod(arm, brass, [s * 0.35, -0.42, 0.36], [s * 0.47, -0.62, 0.4], 0.033);
    pipe(
      arm,
      rubber,
      [
        [s * 0.14, 0.04, -0.1],
        [s * 0.48, -0.29, -0.02],
        [s * 0.61, -0.65, 0.28],
        [s * 0.52, -0.7, 0.8],
      ],
      0.039
    );
    rod(arm, brass, wrist, [s * 0.42, -0.83, 1.13], 0.11, 0.13);
    for (let k = 0; k < 3; k++) {
      const a = (TAU * k) / 3 + 0.15,
        cx = Math.cos(a),
        cy = Math.sin(a);
      const p = [s * 0.42 + cx * 0.19, -0.83 + cy * 0.19, 1.37],
        q = [s * 0.42 + cx * 0.12, -0.83 + cy * 0.12, 1.62];
      rod(arm, iron, [s * 0.42 + cx * 0.08, -0.83 + cy * 0.08, 1.1], p, 0.068, 0.052, 6);
      rod(arm, brass, p, q, 0.052, 0.012, 6);
    }
    bake(arm);
    const mount = [s * 1.19, 0.32, 0.79];
    rod(fixed, iron, [s * 1.04, 0.18, 0.62], mount, 0.115);
    const light = group(root, mount);
    lamps.push(light);
    rod(light, iron, [0, 0, -0.28], [0, 0, 0.1], 0.2, 0.253, 32);
    for (const z of [-0.18, -0.12, -0.06, 0.1, 0.15])
      hoop(light, brass, [0, 0, z], z > 0 ? 0.25 : 0.215, 0.024, 36);
    ball(light, lamp, [0, 0, 0.118], [0.216, 0.216, 0.087]);
    for (let j = 0; j < 8; j++) {
      const a = (j * TAU) / 8,
        x = Math.cos(a),
        y = Math.sin(a);
      pipe(
        light,
        iron,
        [
          [0.253 * x, 0.253 * y, 0.03],
          [0.252 * x, 0.252 * y, 0.16],
          [0.205 * x, 0.205 * y, 0.225],
          [0.036 * x, 0.036 * y, 0.236],
        ],
        0.013,
        6,
        10
      );
    }
    bake(light);
    const engine = group(fixed, [s * 1.31, -0.18, -0.92]);
    rod(engine, bronze, [0, 0, -0.47], [0, 0, 0.29], 0.184, 0.211, 28);
    hoop(engine, iron, [0, 0, -0.52], 0.48, 0.043, 48);
    for (let j = 0; j < 3; j++) {
      const a = (TAU * j) / 3;
      rod(engine, brass, [0, 0, -0.31], [0.48 * Math.cos(a), 0.48 * Math.sin(a), -0.52], 0.027);
    }
    const prop = group(root, [s * 1.31, -0.18, -1.48]);
    propellers.push(prop);
    for (let j = 0; j < 4; j++) {
      const blade = group(prop);
      blade.rotation.z = (TAU * j) / 4;
      const b = ball(blade, brass, [0.09, 0.24, 0.01], [0.113, 0.24, 0.031], 16);
      b.rotation.z = -0.37;
      b.rotation.y = 0.44;
    }
    ball(prop, bronze, [0, 0, -0.015], [0.103, 0.103, 0.095]);
    bake(prop);
  }
  bake(fixed);
  const instruments = cockpit(
    root,
    { brass, iron, dark, rubber, copper },
    dialAt,
    [dial(false, 0), dial(false, 1)],
    phosphor
  );
  const binnacle = instruments.sill,
    cabin = instruments.cabin;
  binnacle.visible = false;
  const wall = new T.SphereGeometry(1.478, 96, 48, 0, TAU, 0.523, Math.PI - 0.523);
  wall.rotateX(Math.PI / 2);
  const inner = metal(0x725f42);
  inner.side = T.BackSide;
  mesh(cabin, wall, inner);
  for (const [r, z, m, tube] of [
    [0.727, 1.27, iron, 0.068],
    [0.79, 1.22, brass, 0.035],
    [0.875, 1.14, copper, 0.03],
  ])
    hoop(cabin, m, [0, 0, z], r, tube);
  for (let j = 0; j < 24; j++) {
    const a = (j * TAU) / 24,
      x = 0.794 * Math.cos(a),
      y = 0.794 * Math.sin(a);
    rod(cabin, brass, [x, y, 1.205], [x, y, 1.17], 0.029, 0.03, 6);
  }
  bake(cabin);
  return {
    root,
    binnacle,
    exteriorPanel,
    cabin,
    update(t, angle, power, scripted) {
      root.position.set(
        -1.64 + 0.12 * Math.sin(t * 0.32),
        1.18 + 0.88 * (1 - T.MathUtils.smoothstep(t, 0, 8)) + 0.08 * Math.sin(t * 0.9),
        -0.18 + 0.12 * Math.sin(t * 0.37)
      );
      root.rotation.set(
        0.032 * Math.sin(t * 0.65),
        0.8 + 0.1 * Math.sin(t * 0.33),
        0.042 * Math.sin(t * 0.56)
      );
      instruments.update(t);
      hoist.rotation.set(
        0.023 * Math.sin(t * 0.82),
        0.051 * Math.sin(t * 0.37),
        0.05 * Math.sin(t * 0.69)
      );
      propellers.forEach((p, i) => (p.rotation.z = t * (i ? -12 : 12)));
      arms.forEach((p, i) => (p.rotation.x = 0.09 * Math.sin(t * 0.72 + i * 1.8)));
      lamps.forEach((l, i) => {
        l.rotation.order = 'YXZ';
        l.rotation.y = 0.19 + (i ? 0.13 : -0.12) + 0.09 * Math.sin(t * 0.54 + i * 0.7);
        l.rotation.x = T.MathUtils.degToRad(angle) + 0.095 * Math.sin(t * 0.48 + i * 0.6);
        if (scripted && i === 1) {
          const sweep =
            T.MathUtils.smoothstep(t, 8.15, 10.8) * (1 - T.MathUtils.smoothstep(t, 13.2, 15.25));
          l.rotation.y = T.MathUtils.lerp(l.rotation.y, 2.23, sweep);
          l.rotation.x = T.MathUtils.lerp(l.rotation.x, -0.19, sweep);
        }
        l.updateWorldMatrix(true, false);
        (i ? u.lampB : u.lampA).value.copy(l.localToWorld(V(0, 0, 0.22)));
        l.getWorldDirection((i ? u.axisB : u.axisA).value);
      });
      lamp.color.set(0xffedc2).multiplyScalar(0.036 + 6.16 * power);
      u.strength.value = power;
    },
  };
}
