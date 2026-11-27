import * as T from "three";
import { group, mesh, lathe, ring, rod, std, batch, canvasTex, rng, tau } from "./craft.js";

// The thin instrument glass picks up a sharp pane and the candle at glancing angles.
export function instrumentGlass() {
  return new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: T.FrontSide,
    vertexShader: `varying vec3 normalW,eye;void main(){normalW=mat3(modelMatrix)*normal;
      vec4 w=modelMatrix*vec4(position,1.);eye=cameraPosition-w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader: `varying vec3 normalW,eye;void main(){vec3 n=normalize(normalW),v=normalize(eye),r=reflect(-v,n);
      float edge=pow(1.-abs(dot(n,v)),2.3);
      float pane=exp(-pow((r.x+.46)*8.,2.))*smoothstep(.0,.28,r.y);
      float warm=pow(max(0.,dot(r,normalize(vec3(.84,.42,-.28)))),20.);
      gl_FragColor=vec4(vec3(.24,.41,.41)+vec3(.55,.68,.72)*pane+vec3(.92,.53,.14)*warm,.024+.38*edge+.15*pane+.16*warm);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
}

export function hourglass(scene, m) {
  const frame = group(scene);
  frame.position.set(-4.34, 0.018, 0.66);
  const sandTexture = canvasTex(256, 256, (c, w, h) => {
    const r = rng(1195);
    c.fillStyle = "#d1a463";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 21000; i++) {
      c.fillStyle = i % 2 ? "rgba(249,219,142,.49)" : "rgba(120,78,33,.32)";
      c.fillRect(r() * w, r() * h, 1.1 + r(), 1.3);
    }
  });
  const sand = std(0xffdda3, 0.88, 0.07, { map: sandTexture, bumpMap: sandTexture, bumpScale: 0.009 });
  const fixed = group(frame);
  for (const h of [0, 1.58]) {
    lathe(
      fixed,
      [
        [0, 0],
        [0, 0.356],
        [0.027, 0.387],
        [0.066, 0.38],
        [0.082, 0.34],
        [0.108, 0.313],
        [0.108, 0],
      ],
      m.brass,
      0,
      h,
      0,
    );
    for (const [dy, r] of [
      [0.023, 0.38],
      [0.065, 0.369],
      [0.095, 0.318],
    ])
      ring(fixed, r, 0.009, m.bright, 0, h + dy, 0, "y");
  }
  for (let i = 0; i < 4; i++) {
    const a = 0.48 + (i * tau) / 4,
      x = 0.31 * Math.cos(a),
      z = 0.31 * Math.sin(a);
    lathe(
      fixed,
      [
        [0.09, 0.059],
        [0.14, 0.05],
        [0.18, 0.042],
        [0.22, 0.052],
        [0.28, 0.032],
        [0.32, 0.019],
        [1.36, 0.019],
        [1.4, 0.033],
        [1.47, 0.05],
        [1.52, 0.036],
        [1.58, 0.055],
      ],
      m.bright,
      x,
      0,
      z,
      28,
    );
    for (const y of [0.3, 0.35, 1.35, 1.4]) ring(fixed, 0.028, 0.006, m.brass, x, y, z, "y");
  }
  batch(fixed);
  const profile = [
    [0.1, 0.12],
    [0.13, 0.196],
    [0.2, 0.242],
    [0.32, 0.257],
    [0.45, 0.246],
    [0.59, 0.194],
    [0.72, 0.101],
    [0.8, 0.027],
    [0.85, 0.021],
    [0.93, 0.083],
    [1.09, 0.199],
    [1.22, 0.248],
    [1.37, 0.256],
    [1.48, 0.216],
    [1.58, 0.131],
  ];
  const glass = lathe(frame, profile, instrumentGlass());
  glass.castShadow = false;
  // The sand surface intersects the glass at its interpolated inner radius.
  const bottom = lathe(
    frame,
    [
      [0.113, 0],
      [0.113, 0.135],
      [0.15, 0.193],
      [0.23, 0.234],
      [0.3, 0.247],
      [0.31, 0],
    ],
    sand,
  );
  const pile = lathe(
    frame,
    [
      [0, 0.244],
      [0.038, 0.18],
      [0.133, 0],
    ],
    sand,
    0,
    0.3,
    0,
  );
  const fillProfile = [
    [0.846, 0.012],
    [0.932, 0.068],
    [1.09, 0.183],
    [1.22, 0.232],
    [1.37, 0.24],
  ];
  const upper = lathe(frame, [...fillProfile, [1.36, 0.13], [1.34, 0]], sand);
  const surface = upper.geometry.attributes.position,
    base = surface.array.slice();
  const r = rng(972),
    grains = 75;
  const stream = new T.InstancedMesh(new T.IcosahedronGeometry(0.007, 0), sand, grains);
  const offsets = Array.from({ length: grains }, () => [r(), (r() - 0.5) * 0.013, (r() - 0.5) * 0.013]);
  frame.add(stream);
  const dummy = new T.Object3D();
  return (t) => {
    const u = (t % 60) / 60,
      level = 1.354 - 0.155 * u;
    // Clip the upper rings to a descending, slightly funneled free surface.
    for (let i = 0; i < surface.count; i++) {
      const x = base[i * 3],
        y = base[i * 3 + 1],
        z = base[i * 3 + 2];
      if (y < 1.219) continue;
      const shrink = (level < 1.22 ? 0.95 : 1) - 0.02 * u;
      surface.setXYZ(
        i,
        x * shrink,
        Math.min(y, level - 0.022 * Math.max(0, 1 - Math.hypot(x, z) / 0.22)),
        z * shrink,
      );
    }
    surface.needsUpdate = true;
    pile.position.y = 0.3 + 0.082 * u;
    bottom.scale.y = pile.position.y / 0.3;
    for (let i = 0; i < grains; i++) {
      const [phase, x, z] = offsets[i],
        fall = (phase + t * 1.55) % 1;
      dummy.position.set(
        x * (1 + fall),
        0.852 - (0.852 - pile.position.y - 0.123) * fall * fall,
        z * (1 + fall),
      );
      dummy.scale.setScalar(0.53 + 0.57 * phase);
      dummy.updateMatrix();
      stream.setMatrixAt(i, dummy.matrix);
    }
    stream.instanceMatrix.needsUpdate = true;
  };
}

export function doubloons(scene, m) {
  const random = rng(7218);
  const die = canvasTex(512, 512, (c, w, h) => {
    const gold = c.createRadialGradient(181, 144, 18, 256, 256, 259);
    gold.addColorStop(0, "#e6c481");
    gold.addColorStop(0.67, "#ba9454");
    gold.addColorStop(1, "#a4783b");
    c.fillStyle = gold;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 6200; i++) {
      c.fillStyle = i % 4 ? "#5b421c19" : "#fff0ad56";
      c.fillRect(random() * w, random() * h, 1 + random() * 2, 1.2);
    }
    c.translate(256, 256);
    const circle = (r) => {
      c.beginPath();
      c.arc(0, 0, r, 0, tau);
      c.stroke();
    };
    c.strokeStyle = "#745529";
    c.lineWidth = 4;
    for (const r of [161, 172, 228, 244]) circle(r);
    for (let i = 0; i < 92; i++) {
      const a = (i * tau) / 92;
      c.fillStyle = "#f0cc86";
      c.beginPath();
      c.arc(235 * Math.cos(a), 235 * Math.sin(a), 3.2, 0, tau);
      c.fill();
    }
    const legend = "✦  PHILIPPVS  ·  D  ·  G  ·  HISPANIARVM  ·  REX  ";
    c.font = "bold 29px Georgia";
    c.textAlign = "center";
    c.fillStyle = "#60441e";
    Array.from(legend).forEach((ch, i) => {
      c.save();
      c.rotate((i * tau) / legend.length);
      c.fillText(ch, 0, -185);
      c.restore();
    });
    c.fillStyle = "#b28a49";
    c.strokeStyle = "#725023";
    c.lineWidth = 8;
    c.beginPath();
    c.moveTo(-92, -70);
    c.lineTo(92, -70);
    c.lineTo(83, 35);
    c.quadraticCurveTo(70, 96, 0, 119);
    c.quadraticCurveTo(-70, 96, -83, 35);
    c.closePath();
    c.fill();
    c.stroke();
    c.fillStyle = "#e9c579";
    c.fillRect(-6, -68, 12, 172);
    c.fillRect(-84, 5, 169, 11);
    for (const [x, y] of [
      [-47, -43],
      [45, 43],
    ]) {
      c.fillRect(x - 21, y + 2, 43, 17);
      for (let i = 0; i < 3; i++) c.fillRect(x - 20 + i * 15, y - 9, 9, 15);
    }
    c.beginPath();
    c.moveTo(-69, -88);
    c.lineTo(-85, -130);
    c.lineTo(-39, -106);
    c.lineTo(0, -143);
    c.lineTo(37, -106);
    c.lineTo(84, -130);
    c.lineTo(68, -88);
    c.closePath();
    c.fill();
    c.stroke();
  });
  const face = std(0xf9e0a0, 0.43, 0.65, { map: die, bumpMap: die, bumpScale: 0.014 });
  const coins = group(scene);
  for (const [x, y, z, angle, size] of [
    [-3.07, 0.03, 2.97, 0.27, 0.187],
    [-2.65, 0.033, 2.83, 0.83, 0.16],
    [-2.77, 0.077, 2.89, -0.65, 0.185],
    [2.18, 0.075, 2.28, 1.2, 0.173],
    [2.48, 0.034, 2.76, -0.84, 0.185],
    [2.51, 0.073, 2.71, -0.41, 0.182],
    [2.56, 0.112, 2.69, 0.74, 0.17],
    [3.0, 0.031, 2.51, 0.3, 0.17],
  ]) {
    const coin = group(coins);
    coin.position.set(x, y, z);
    coin.rotation.y = angle;
    lathe(
      coin,
      [
        [-0.02, 0],
        [-0.02, size - 0.009],
        [-0.015, size],
        [0.014, size],
        [0.02, size - 0.008],
        [0.02, 0],
      ],
      m.brass,
      0,
      0,
      0,
      64,
    );
    const disk = mesh(coin, new T.CircleGeometry(size - 0.006, 64), face, 0, 0.021, 0);
    disk.rotation.x = -Math.PI / 2;
    ring(coin, size - 0.009, 0.005, m.bright, 0, 0.021, 0, "y");
    for (let k = 0; k < 62; k++) {
      const a = (k * tau) / 62,
        dx = size * Math.cos(a),
        dz = size * Math.sin(a);
      rod(coin, [dx, -0.012, dz], [dx, 0.012, dz], 0.0025, m.bright, 0.0025, 4);
    }
  }
  batch(coins);
}
