import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------- renderer / scene
const canvas = document.getElementById('bg');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07070a);
scene.fog = new THREE.Fog(0x07070a, 2.2, 6.5);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.3;

const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.02, 40);

// lights
const key = new THREE.SpotLight(0xffd9b0, 9, 12, Math.PI / 5, 0.5, 1.4);
key.position.set(1.6, 2.6, 1.8); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.00015; key.shadow.normalBias = 0.01;
scene.add(key, key.target);
const rim = new THREE.SpotLight(0x6fb8ff, 7, 12, Math.PI / 4, 0.6, 1.3);
rim.position.set(-1.8, 1.6, -1.6); scene.add(rim, rim.target);
const fill = new THREE.PointLight(0xff6ad0, 1.2, 5, 1.6); fill.position.set(-1.0, 0.6, 1.2); scene.add(fill);
scene.add(new THREE.HemisphereLight(0x3a3a55, 0x050506, 0.35));
const glowM = new THREE.PointLight(0xff2fb0, 0.8, 1.0, 1.5);
const glowC = new THREE.PointLight(0x38d5ff, 0.8, 1.0, 1.5);
scene.add(glowM, glowC);

// floor
const floor = new THREE.Mesh(new THREE.CircleGeometry(7, 64),
  new THREE.MeshStandardMaterial({ color: 0x0c0c12, roughness: 0.42, metalness: 0.35 }));
floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; floor.position.y = -0.002; scene.add(floor);
const ringGeo = new THREE.RingGeometry(0.62, 0.625, 96);
const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x2a2a38, transparent: true, opacity: 0.6 }));
ring.rotation.x = -Math.PI / 2; ring.position.y = 0.0005; scene.add(ring);

// post
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.38, 0.45, 1.0);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------------------------------------------------------------- honeycomb alpha map for GPU brackets
function honeycombTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, 256, 256);
  g.fillStyle = '#000';
  const pitch = 32, rows = 256 / (pitch * 0.866);
  for (let j = -1; j < rows + 1; j++) for (let i = -1; i < 10; i++) {
    const x = i * pitch + (j % 2 ? pitch / 2 : 0), y = j * pitch * 0.866;
    g.beginPath(); g.arc(x, y, pitch * 0.36, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
const honey = honeycombTexture();
function planarUV(geo) {
  geo.computeBoundingBox();
  const b = geo.boundingBox, s = new THREE.Vector3().subVectors(b.max, b.min);
  const axes = [0, 1, 2].sort((a, c) => s.getComponent(a) - s.getComponent(c)); // thinnest first
  const [u, v] = [axes[1], axes[2]];
  const p = geo.attributes.position, uv = new Float32Array(p.count * 2);
  const scale = 1 / (0.003 * 8); // 8 holes per tile, 3 mm pitch
  for (let i = 0; i < p.count; i++) { uv[i * 2] = p.getComponent(i, u) * scale; uv[i * 2 + 1] = p.getComponent(i, v) * scale; }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

// ---------------------------------------------------------------- grouping rules
const RULES = [
  ['gpuA', n => n.startsWith('GPU_A')],
  ['gpuB', n => n.startsWith('GPU_B')],
  ['gpuC', n => n.startsWith('GPU_C')],
  ['gpuD', n => n.startsWith('GPU_D')],
  ['cooler', n => /^(CPU_Socket|Cooler_|Heatpipe|CoolerFan)/.test(n)],
  ['fans', n => n.startsWith('RGBFan')],
  ['psuE', n => n.startsWith('Eagle_')],
  ['psuT', n => n.startsWith('TR_')],
  ['storage', n => /^(SSD_|Cardboard_bottom|Foam_Orange)/.test(n)],
  ['props', n => /^(Canon_|Egg_|Cardboard_top|Cardboard_Btail|Cardboard_underA|Cardboard_underD)/.test(n)],
  ['mobo', n => /^(MB_|IO_|DIMM|RAM_|VRM|Chipset|CMOS|Cap_|CapTop|ATX|SATA_\d|SATA_hole|FP_Header|LED_|PowerBtn|PCIe_|Riser_x1|Foam_Mat)/.test(n)],
  ['frame', n => /^(Post_|Rail_|Sheet_|Screw_|Chrome_Rod|ZipTie)/.test(n)],
  ['cables', () => true],
];
const groups = {}, base = {};
const root = new THREE.Group(); scene.add(root);

// ---------------------------------------------------------------- load
const loaderEl = document.getElementById('loader'), pctEl = loaderEl.querySelector('.ld-pct'), barEl = loaderEl.querySelector('.ld-bar i');
const draco = new DRACOLoader().setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/libs/draco/gltf/');
const loader = new GLTFLoader().setDRACOLoader(draco);
loader.load('assets/rig_draco.glb', onLoad, e => {
  if (e.total) { const p = Math.round(100 * e.loaded / e.total); pctEl.textContent = p + '%'; barEl.style.width = p + '%'; }
}, err => { console.error(err); pctEl.textContent = 'failed to load'; });

function onLoad(gltf) {
  const model = gltf.scene;
  const cableMats = [];
  for (const k of RULES.map(r => r[0])) { groups[k] = new THREE.Group(); groups[k].name = 'G_' + k; root.add(groups[k]); }
  const roots = [...model.children];
  for (const ob of roots) {
    const rule = RULES.find(r => r[1](ob.name));
    groups[rule[0]].add(ob);
    ob.traverse(m => {
      if (!m.isMesh) return;
      m.castShadow = true; m.receiveShadow = true;
      const mats = Array.isArray(m.material) ? m.material : [m.material];
      mats.forEach(mt => { if (mt.emissiveIntensity > 1) { const e = mt.emissive; const white = Math.min(e.r, e.g, e.b) > 0.6; mt.emissiveIntensity = white ? 0.25 : 1.35; } });
      if (/^RGBFan\d_Frame$/.test(m.name)) { m.material = m.material.clone(); m.material.color.setScalar(0.62); m.material.roughness = 0.6; }
      if (/^Sheet_/.test(m.name)) { m.material = m.material.clone(); m.material.color.multiplyScalar(0.55); m.material.roughness = 0.62; }
      if (/_Bracket$/.test(m.name)) {
        planarUV(m.geometry);
        m.material = new THREE.MeshStandardMaterial({ color: 0x2b2b30, metalness: 0.9, roughness: 0.35, alphaMap: honey, alphaTest: 0.5, side: THREE.DoubleSide });
      }
      if (rule[0] === 'cables') {
        m.material = m.material.clone(); m.material.transparent = true; cableMats.push(m.material);
      }
    });
  }
  // pivot each group at its bounding-box center
  const box = new THREE.Box3(), c = new THREE.Vector3();
  for (const [k, g] of Object.entries(groups)) {
    box.setFromObject(g); box.getCenter(c);
    for (const ch of g.children) ch.position.sub(c);
    g.position.copy(c);
    base[k] = { p: c.clone(), r: new THREE.Euler() };
  }
  root.position.set(-0.318, 0, 0.17); // center rig on origin (after pivots are computed in root space)
  root.updateMatrixWorld(true);
  // static extras
  glowM.position.copy(groups.fans.position).add(new THREE.Vector3(0.04, 0.05, 0.05)); root.add(glowM);
  glowC.position.copy(groups.fans.position).add(new THREE.Vector3(0.2, 0.05, 0.05)); root.add(glowC);
  buildTimeline(cableMats);
  loaderEl.classList.add('done');
}

// ---------------------------------------------------------------- choreography
const cam = { px: -0.85, py: 0.5, pz: 1.05, tx: -0.2, ty: 0.3, tz: 0, fov: 38 };
const mouse = { x: 0, y: 0 };
addEventListener('pointermove', e => { mouse.x = (e.clientX / innerWidth - 0.5) * 2; mouse.y = (e.clientY / innerHeight - 0.5) * 2; });
const state = { sway: 1, prog: 0 };

function buildTimeline(cableMats) {
  const EX = { // exploded offsets (x, y, z) and rotations (rx, ry, rz)
    gpuA: [-0.3, 0.22, 0.12, 0.6, -0.35, 0],
    gpuB: [0.0, 0.42, 0.22, 0.95, 0.0, 0],
    gpuC: [0.3, 0.3, 0.1, 1.1, 0.25, 0],
    gpuD: [0.42, 0.18, 0.22, 0, -1.1, 0],
    cooler: [-0.02, 0.28, 0.32, 0, 0.25, 0],
    mobo: [0.0, 0.07, 0.34, 0.15, 0, 0],
    fans: [0.0, 0.18, -0.34, 0, 0, 0],
    psuE: [-0.28, 0.02, 0.38, 0, 0.35, 0],
    psuT: [-0.45, 0.06, -0.05, 0, 0, 0],
    storage: [0.3, 0.03, 0.4, 0, -0.3, 0],
    props: [-0.4, 0.26, -0.15, 0, 0.3, 0],
    frame: [0, 0, 0, 0, 0, 0],
    cables: [0, 0, 0, 0, 0, 0],
  };
  const exPos = k => new THREE.Vector3().fromArray(EX[k]).add(base[k].p);
  const look = (k, off, fov = 34) => {
    const t = exPos(k).add(root.position); // world
    return { px: t.x + off[0], py: t.y + off[1], pz: t.z + off[2], tx: t.x, ty: t.y, tz: t.z, fov };
  };
  const fade = { v: 1 };
  const applyFade = () => cableMats.forEach(m => { m.opacity = fade.v; m.visible = fade.v > 0.02; });

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
  const E = 'power3.inOut';
  // 0-8 hero: slow drift
  tl.to(cam, { px: -0.55, py: 0.42, pz: 1.15, duration: 8, ease: 'none' }, 0);
  tl.fromTo('#hero', { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -40, duration: 3 }, 5);
  // 8-22 explode
  for (const [k, v] of Object.entries(EX)) {
    if (k === 'frame' || k === 'cables') continue;
    const g = groups[k], p = exPos(k);
    tl.to(g.position, { x: p.x, y: p.y, z: p.z, duration: 12, ease: E }, 8);
    tl.to(g.rotation, { x: v[3], y: v[4], z: v[5], duration: 12, ease: E }, 8);
  }
  tl.to(fade, { v: 0, duration: 5, onUpdate: applyFade, ease: 'power1.in' }, 8);
  tl.to(state, { sway: 0, duration: 6 }, 8);
  tl.to(cam, { px: 0.15, py: 1.05, pz: 2.05, tx: 0, ty: 0.38, tz: 0.05, fov: 40, duration: 13 }, 8);
  tl.fromTo('#cap0', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 2.5 }, 13);
  tl.to('#cap0', { autoAlpha: 0, y: -20, duration: 2 }, 22);
  // 23-38 GPU close-up (gpuC): fast flight, then slow drift with a hold
  tl.to(cam, { ...look('gpuC', [0.16, 0.3, 0.6], 32), duration: 6 }, 23);
  tl.to(cam, { ...look('gpuC', [-0.1, 0.28, 0.6], 32), duration: 9, ease: 'none' }, 29);
  tl.to(groups.gpuC.rotation, { y: EX.gpuC[4] - 0.5, duration: 15, ease: 'none' }, 23);
  tl.fromTo('#cap1', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 2.5 }, 27);
  tl.to('#cap1', { autoAlpha: 0, y: -20, duration: 2 }, 37);
  // 38-52 motherboard + cooler
  tl.to(cam, { ...look('mobo', [-0.16, 0.42, 0.4], 32), duration: 6 }, 38);
  tl.to(cam, { ...look('mobo', [-0.02, 0.4, 0.44], 32), duration: 8, ease: 'none' }, 44);
  tl.to(groups.cooler.rotation, { y: EX.cooler[4] + 0.8, duration: 14, ease: 'none' }, 38);
  tl.fromTo('#cap2', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 2.5 }, 42);
  tl.to('#cap2', { autoAlpha: 0, y: -20, duration: 2 }, 51);
  // 52-70 fans, then PSUs
  tl.to(cam, { ...look('fans', [0.02, 0.1, 0.78], 34), duration: 5 }, 52);
  tl.to(cam, { ...look('fans', [0.14, 0.14, 0.78], 34), duration: 4, ease: 'none' }, 57);
  tl.to(cam, { ...look('psuE', [-0.26, 0.3, 0.5], 34), duration: 5 }, 61);
  tl.to(cam, { ...look('psuE', [-0.34, 0.28, 0.5], 34), duration: 5, ease: 'none' }, 66);
  tl.to(groups.psuT.rotation, { y: -0.9, duration: 14, ease: 'none' }, 55);
  tl.fromTo('#cap3', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 2.5 }, 55);
  tl.to('#cap3', { autoAlpha: 0, y: -20, duration: 2 }, 69);
  // 70-80 props
  tl.to(cam, { ...look('props', [-0.5, 0.36, 0.8], 34), duration: 6 }, 70);
  tl.to(cam, { ...look('props', [-0.36, 0.34, 0.84], 34), duration: 5, ease: 'none' }, 76);
  tl.to(groups.props.rotation, { y: EX.props[4] + 0.6, duration: 12, ease: 'none' }, 70);
  tl.fromTo('#cap4', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 2.5 }, 73);
  tl.to('#cap4', { autoAlpha: 0, y: -20, duration: 2 }, 80);
  // 80-94 reassemble
  tl.to(cam, { px: 0.85, py: 0.62, pz: 1.35, tx: 0, ty: 0.02, tz: 0, fov: 38, duration: 12 }, 80);
  for (const k of Object.keys(EX)) {
    if (k === 'frame' || k === 'cables') continue;
    tl.to(groups[k].position, { x: base[k].p.x, y: base[k].p.y, z: base[k].p.z, duration: 12, ease: E }, 81);
    tl.to(groups[k].rotation, { x: 0, y: 0, z: 0, duration: 12, ease: E }, 81);
  }
  tl.to(fade, { v: 1, duration: 4, onUpdate: applyFade }, 90);
  tl.to(state, { sway: 1, duration: 6 }, 90);
  // 94-100 final
  tl.to(cam, { px: -0.5, py: 0.55, pz: 1.4, ty: 0.02, duration: 8, ease: 'none' }, 92);
  tl.fromTo('#final', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 4 }, 94);
  tl.to({}, { duration: 2 }, 98);

  ScrollTrigger.create({
    trigger: '#scroller', start: 'top top', end: 'bottom bottom', scrub: 1.1, animation: tl,
    onUpdate: st => { state.prog = st.progress; document.getElementById('pbar').style.width = (st.progress * 100) + '%'; }
  });
}

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
const tgt = new THREE.Vector3(), pos = new THREE.Vector3();
function frame() {
  const t = clock.getElapsedTime();
  root.rotation.y = state.sway * 0.06 * Math.sin(t * 0.35);
  pos.set(cam.px + mouse.x * 0.05 * state.sway, cam.py - mouse.y * 0.03 * state.sway, cam.pz);
  tgt.set(cam.tx, cam.ty, cam.tz);
  camera.position.lerp(pos, 0.12); camera.lookAt(tgt);
  if (Math.abs(camera.fov - cam.fov) > 0.01) { camera.fov += (cam.fov - camera.fov) * 0.1; camera.updateProjectionMatrix(); }
  key.target.position.copy(tgt); rim.target.position.copy(tgt);
  composer.render();
  requestAnimationFrame(frame);
}
frame();
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
});
