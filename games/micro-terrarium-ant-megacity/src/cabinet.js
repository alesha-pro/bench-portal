import * as T from 'three';
import { v, mesh, standard, box, ell, rod, batch, mats, makeCanvas, canvasTexture } from './core.js';
const { brass, gold, tarnish, black, ebony } = mats;
const tableY = -3.19;
function printed(w, h, paint) {
  let c = makeCanvas(w, h),
    ctx = c.getContext('2d');
  paint(ctx, w, h);
  return canvasTexture(c);
}
function face(parent, x, y, z, w, h, texture, matOpts = {}) {
  return mesh(
    parent,
    new T.PlaneGeometry(w, h),
    standard(0xffffff, 0.58, 0.12, { map: texture, ...matOpts }),
    x,
    y,
    z,
  );
}
function screw(parent, x, y, z, r) {
  ell(parent, x, y, z, r, r, r * 0.38, gold);
  let s = box(parent, x, y, z + 0.34 * r, r * 1.18, r * 0.15, r * 0.06, black);
  s.rotation.z = x * 3 + y * 6;
}
function oak(img) {
  return printed(1024, 512, (c, w, h) => {
    c.drawImage(
      img,
      img.width * 0.18,
      img.height * 0.79,
      img.width * 0.6,
      img.height * 0.116,
      0,
      0,
      w,
      h,
    );
    c.fillStyle = 'rgba(56,32,18,.27)';
    c.fillRect(0, 0, w, h);
  });
}
function journalTexture() {
  return printed(768, 550, (c, w, h) => {
    c.fillStyle = '#cdbf98';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#5e5943';
    c.textAlign = 'center';
    c.font = 'italic 34px Georgia';
    c.fillText('Botanica', w * 0.26, 65);
    c.font = '15px monospace';
    c.fillText('HERBARIUM   •   IV', w * 0.26, 97);
    for (let i = 0; i < 16; i++) {
      c.fillStyle = 'rgba(80,71,53,.55)';
      c.fillRect(48, 143 + i * 18, 170 + Math.sin(i * 11) * 64, 1);
    }
    c.strokeStyle = '#8c8065';
    c.strokeRect(20, 19, w - 40, h - 38);
    const grad = c.createLinearGradient(325, 0, 410, 0);
    grad.addColorStop(0, '#cabd9800');
    grad.addColorStop(0.68, '#675e40a8');
    grad.addColorStop(1, '#ede0c000');
    c.fillStyle = grad;
    c.fillRect(325, 0, 85, h);
    function frond(x, y, a, len) {
      c.save();
      c.translate(x, y);
      c.rotate(a);
      c.strokeStyle = '#55593b';
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(0, 0);
      c.quadraticCurveTo(-12, -len * 0.6, 0, -len);
      c.stroke();
      for (let i = 1; i < 19; i++)
        for (let s of [-1, 1]) {
          let t = i / 20,
            ww = len * 0.16 * Math.sin(Math.PI * t) ** 0.68;
          c.fillStyle = i % 2 ? '#5c6744' : '#6b7350';
          c.beginPath();
          c.moveTo(-6 * Math.sin(t * Math.PI), -t * len);
          c.quadraticCurveTo(s * ww * 0.55, -t * len - ww * 0.55, s * ww, -t * len - ww * 0.9);
          c.quadraticCurveTo(s * ww * 0.41, -t * len - ww * 0.11, -6 * Math.sin(t * Math.PI), -t * len);
          c.fill();
        }
      c.restore();
    }
    frond(541, 465, 0.16, 380);
    frond(542, 463, -0.48, 263);
    frond(540, 461, 0.7, 245);
    c.font = 'italic 18px Georgia';
    c.fillStyle = '#504a36';
    c.fillText('Polypodium vulgare', 593, 502);
  });
}
export function cabinet(scene, img, earthImg) {
  const group = new T.Group();
  scene.add(group);
  const wood = oak(img);
  wood.wrapS = wood.wrapT = T.MirroredRepeatWrapping;
  wood.repeat.set(2.4, 2);
  const woodMat = standard(0xd5b087, 0.57, 0.04, { map: wood });
  box(group, 0, tableY - 0.18, 1, 42, 0.35, 24, woodMat);
  const bgTexture = canvasTexture(img);
  mesh(
    scene,
    new T.PlaneGeometry(49, 27.56),
    new T.MeshBasicMaterial({ map: bgTexture, color: 0xd5c9ab }),
    0,
    2.3,
    -22,
  );
  // Ground contact shadows from the cabinet and its feet.
  const shadow = printed(160, 160, (c, w, h) => {
    let g = c.createRadialGradient(80, 80, 0, 80, 80, 80);
    g.addColorStop(0, 'rgba(19,12,7,.89)');
    g.addColorStop(0.54, 'rgba(24,14,9,.65)');
    g.addColorStop(1, 'rgba(26,17,10,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  });
  const shadowMesh = mesh(
    scene,
    new T.PlaneGeometry(13, 4.7),
    new T.MeshBasicMaterial({ map: shadow, transparent: true, depthWrite: false }),
    0.16,
    tableY + 0.005,
    -0.38,
  );
  shadowMesh.rotation.x = -Math.PI / 2;
  const base = tableY + 0.19;
  box(group, 0, base, -0.2, 9.52, 0.27, 1.86, ebony);
  box(group, 0, base + 0.1, -0.2, 9.48, 0.038, 1.83, gold);
  box(group, 0, base + 0.175, -0.2, 9.31, 0.14, 1.66, tarnish);
  const upper = 2.76,
    lower = -2.78,
    glass = standard(0x9db7a1, 0.15, 0.55);
  const recess = standard(0x382e23, 0.45, 0.55);
  for (let z of [-1.08, 0.36])
    for (let x of [-4.55, 4.55]) {
      box(group, x, (upper + lower) / 2, z, 0.117, upper - lower, 0.119, brass);
      box(group, x - 0.037, (upper + lower) / 2, z + 0.061, 0.016, upper - lower, 0.015, gold);
      box(group, x + 0.04, (upper + lower) / 2, z + 0.06, 0.012, upper - lower, 0.012, tarnish);
      for (let y of [upper - 0.07, lower + 0.06]) {
        box(group, x, y, z, 0.192, 0.25, 0.177, tarnish);
        box(group, x, y + 0.065, z, 0.199, 0.039, 0.19, gold);
      }
    }
  for (let z of [-1.08, 0.36])
    for (let y of [upper, lower]) {
      box(group, 0, y, z, 9.25, 0.126, 0.143, brass);
      box(group, 0, y + 0.035, z + 0.074, 9.28, 0.023, 0.023, gold);
      box(group, 0, y - 0.057, z + 0.07, 9.24, 0.023, 0.017, recess);
    }
  for (let x of [-4.55, 4.55])
    for (let y of [upper, lower]) box(group, x, y, -0.36, 0.129, 0.123, 1.53, brass);
  const earth = canvasTexture(earthImg);
  let soilSide = standard(0xb08b74, 0.98, 0, { map: earth });
  for (let x of [-4.49, 4.49]) {
    let side = mesh(group, new T.PlaneGeometry(1.31, 3.96), soilSide, x, -0.775, -0.447);
    side.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
  }

  box(group, 0, -0.78, -1.075, 9, 3.94, 0.026, soilSide);
  for (let x of [-4.46, 4.46]) box(group, x, -0.01, 0.341, 0.021, 5.48, 0.04, glass);
  for (let y of [upper - 0.084, lower + 0.084]) box(group, 0, y, 0.33, 9.02, 0.014, 0.028, glass);
  const gauge = printed(104, 1400, (c, w, h) => {
    c.fillStyle = '#675235';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#edcd8e';
    c.font = '17px monospace';
    for (let i = 0; i <= 84; i++) {
      let y = 28 + i * 16;
      c.fillRect(0, y, i % 10 === 0 ? 57 : i % 5 === 0 ? 39 : 20, i % 5 === 0 ? 3 : 2);
      if (i % 10 === 0) c.fillText(String(i / 10), 62, y + 6);
    }
  });
  face(group, -4.47, -0.76, 0.406, 0.144, 3.83, gauge);
  const plateTex = printed(1100, 105, (c, w, h) => {
    c.fillStyle = '#92713e';
    c.fillRect(0, 0, w, h);
    c.strokeStyle = '#e5c382';
    c.lineWidth = 2;
    c.strokeRect(8, 7, w - 16, h - 14);
    c.fillStyle = '#302a1c';
    c.textAlign = 'center';
    c.font = '500 45px Georgia';
    c.fillText('F O R M I C A R I U M', w / 2, 55);
    c.font = '15px monospace';
    c.fillText('MYRMECOLOGY COLLECTION     •     SPECIMEN NO. 04', w / 2, 83);
  });
  box(group, 0, -2.984, 0.754, 2.89, 0.224, 0.056, tarnish);
  face(group, 0, -2.983, 0.785, 2.84, 0.212, plateTex);
  for (let x of [-1.32, 1.32]) screw(group, x, -2.98, 0.794, 0.031);
  for (let x of [-4.55, 4.55])
    for (let y of [upper - 0.075, lower + 0.06]) screw(group, x, y, 0.461, 0.054);
  const page = new T.Group();
  page.position.set(-5.2, tableY + 0.075, 0.84);
  page.rotation.y = -0.48;
  group.add(page);
  box(page, 0, 0, 0, 2.27, 0.085, 1.54, standard(0x44503d, 0.78));
  box(page, 0, 0.058, 0, 2.17, 0.052, 1.45, mats.paper);
  const p = face(page, 0, 0.086, 0, 2.17, 1.45, journalTexture());
  p.rotation.x = -Math.PI / 2;
  // Brass divider/caliper with a sliding jaw, thumb screw and engraved rule.
  const cal = new T.Group();
  cal.position.set(-3.42, tableY + 0.048, 1.48);
  cal.rotation.y = 0.34;
  group.add(cal);
  box(cal, 0, 0, 0, 1.83, 0.046, 0.105, brass);
  box(cal, -0.84, 0.014, 0.16, 0.09, 0.06, 0.4, brass);
  box(cal, -0.36, 0.019, 0.15, 0.12, 0.06, 0.37, gold);
  box(cal, -0.36, 0.05, 0, 0.3, 0.075, 0.19, brass);
  ell(cal, -0.36, 0.104, 0, 0.077, 0.039, 0.077, tarnish);
  for (let i = 0; i < 35; i++)
    box(cal, -0.78 + i * 0.046, 0.026, -0.025, 0.007, 0.003, i % 5 ? 0.026 : 0.065, recess);
  const vialMat = new T.MeshPhysicalMaterial({
    color: 0xcde7cf,
    metalness: 0.16,
    roughness: 0.09,
    transparent: true,
    opacity: 0.24,
    side: T.DoubleSide,
    depthWrite: false,
  });
  for (let j = 0; j < 3; j++) {
    let x = 5.06 + 0.48 * j,
      z = 0.07 - 0.44 * j,
      h = 0.82 + j * 0.18,
      r = 0.19 + 0.019 * j;
    const outline = [
      [0, 0.02],
      [r * 0.89, 0.02],
      [r, 0.055],
      [r, h * 0.65],
      [r * 0.66, h * 0.79],
      [r * 0.64, h * 0.94],
      [r * 0.78, h * 0.95],
      [r * 0.78, h],
      [r * 0.54, h],
    ];
    mesh(
      group,
      new T.LatheGeometry(
        outline.map(([x, y]) => new T.Vector2(x, y)),
        26,
      ),
      vialMat,
      x,
      tableY,
      z,
    );
    rod(
      group,
      v(x, tableY + h * 0.96, z),
      v(x, tableY + h + 0.103, z),
      r * 0.58,
      r * 0.68,
      standard(0x886947, 0.91),
      16,
    );
    rod(
      group,
      v(x, tableY + 0.043, z),
      v(x, tableY + h * 0.29, z),
      r * 0.89,
      r * 0.9,
      standard(j === 1 ? 0x696e3b : 0x9e5824, 0.25, 0.17),
      19,
    );
    box(group, x, tableY + h * 0.51, z + r * 0.95, r * 1.18, h * 0.17, 0.015, mats.paper);
    box(group, x, tableY + h * 0.51, z + r, r * 0.77, 0.014, 0.007, tarnish);
  }
  batch(group);
  // Low-reflectance front pane with a grazing reflection and window streak.
  const paneMat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide,
    vertexShader:
      'varying vec2 st; varying vec3 eye; void main(){st=uv;vec4 p=modelMatrix*vec4(position,1.);eye=cameraPosition-p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}',
    fragmentShader: `varying vec2 st;varying vec3 eye;void main(){float a=pow(1.-abs(normalize(eye).z),2.);float q=st.x+.28*st.y;float band=exp(-pow((q-.12)*10.,2.))+.6*exp(-pow((q-.22)*32.,2.));gl_FragColor=vec4(.77,.87,.75,.007+a*.24+band*.033);}`,
  });
  mesh(scene, new T.PlaneGeometry(9.03, 5.43), paneMat, 0, -0.014, 0.326);
}
