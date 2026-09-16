import * as THREE from 'three';

function signTexture(number, label, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#10202b'; ctx.fillRect(0, 0, 512, 1024);
  ctx.fillStyle = color;
  ctx.fillRect(30, 30, 452, 8); ctx.fillRect(30, 980, 452, 8);
  ctx.globalAlpha = 0.1;
  for (let x = 30; x < 512; x += 100) ctx.fillRect(x, 65, 30, 880);
  ctx.globalAlpha = 1;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '900 248px monospace'; ctx.fillText(number, 256, 400);
  ctx.font = 'bold 46px monospace'; ctx.fillText(label, 256, 680);
  ctx.fillStyle = '#bed3dc'; ctx.font = '24px monospace'; ctx.fillText('CONTAINMENT DIVISION', 256, 755);
  ctx.fillStyle = color;
  for (let x = 90; x < 440; x += 30) ctx.fillRect(x, 855, 12, 44);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function buildArena(scene) {
  const group = new THREE.Group();
  const colliders = [], pads = [];
  scene.add(group);
  const box = new THREE.BoxGeometry(1, 1, 1);
  const cylinder = new THREE.CylinderGeometry(1, 1, 1, 32);
  const steel = new THREE.MeshStandardMaterial({ color: 0x526574, metalness: 0.75, roughness: 0.42 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x253642, metalness: 0.55, roughness: 0.62 });
  const wall = new THREE.MeshStandardMaterial({ color: 0x1b303d, metalness: 0.4, roughness: 0.74 });
  const orangePlate = new THREE.MeshStandardMaterial({ color: 0xb15b2f, metalness: 0.55, roughness: 0.55 });
  const cyan = new THREE.MeshBasicMaterial({ color: 0x34d9ef });
  const orange = new THREE.MeshBasicMaterial({ color: 0xff9946 });
  const black = new THREE.MeshStandardMaterial({ color: 0x080e15, roughness: 0.8, metalness: 0.25 });
  const add = (geo, material, x, y, z, sx, sy, sz, shadow = true) => {
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x, y, z); mesh.scale.set(sx, sy, sz);
    mesh.castShadow = shadow; mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };
  const solid = (x, z, width, depth, height, material = dark) => {
    const mesh = add(box, material, x, height / 2, z, width, height, depth);
    colliders.push({ x, z, hx: width / 2, hz: depth / 2, height });
    return mesh;
  };
  const ring = (radius, y, material, thickness = 0.06) => {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, thickness, 6, 96), material);
    mesh.rotation.x = -Math.PI / 2; mesh.position.y = y; group.add(mesh);
    return mesh;
  };

  // Floor panels and lane markings remain subtle so enemies read clearly.
  const floorCanvas = document.createElement('canvas');
  floorCanvas.width = floorCanvas.height = 256;
  const ctx = floorCanvas.getContext('2d');
  ctx.fillStyle = '#344550'; ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#1c2c35'; ctx.lineWidth = 3; ctx.strokeRect(1, 1, 254, 254);
  ctx.fillStyle = '#61717a';
  for (const x of [10, 242]) for (const y of [10, 242]) ctx.fillRect(x, y, 3, 3);
  const floorMap = new THREE.CanvasTexture(floorCanvas);
  floorMap.colorSpace = THREE.SRGBColorSpace;
  floorMap.wrapS = floorMap.wrapT = THREE.RepeatWrapping;
  floorMap.repeat.set(28, 28); floorMap.anisotropy = 4;
  const floor = new THREE.Mesh(new THREE.CircleGeometry(58, 96), new THREE.MeshStandardMaterial({ map: floorMap, roughness: 0.8, metalness: 0.32 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; group.add(floor);
  ring(9.3, 0.035, orange, 0.08);
  ring(21, 0.03, cyan, 0.035);
  ring(42, 0.03, cyan, 0.035);
  ring(53.5, 0.03, orange, 0.08);
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    const lane = add(box, i % 3 ? cyan : orange, Math.sin(a) * 31.5, 0.025, Math.cos(a) * 31.5, 0.045, 0.03, 10, false);
    lane.rotation.y = a;
  }

  // A faceted perimeter sits outside the playable radial boundary (53m).
  for (let i = 0; i < 48; i++) {
    const a = i * Math.PI / 24, x = Math.sin(a) * 56, z = Math.cos(a) * 56;
    add(box, wall, x, 4.5, z, 7.4, 9, 1.2, false).rotation.y = a;
    add(box, i % 4 ? cyan : orange, x, 9.05, z, 7.4, 0.1, 1.24, false).rotation.y = a;
    if (i % 2 === 0) add(box, steel, x, 5.3, z, 0.5, 10.6, 1.65, false).rotation.y = a;
  }

  // Reactor plinth, exposed energy column, and overhead containment crown.
  solid(0, 0, 7.6, 7.6, 0.8, dark);
  add(box, steel, 0, 0.83, 0, 7.6, 0.06, 7.6);
  for (const z of [-3.76, 3.76]) add(box, orange, 0, 0.61, z, 6.7, 0.12, 0.035, false);
  const coreMaterial = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `varying vec3 vPos; varying vec3 vNormal;
      void main(){vPos=position;vNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `varying vec3 vPos; varying vec3 vNormal; uniform float uTime;
      void main(){
        float bands=pow(0.5+0.5*sin(vPos.y*110.0-uTime*4.0),8.0);
        float swirl=0.5+0.5*sin((vPos.x+vPos.z)*14.0+vPos.y*22.0-uTime*2.0);
        vec3 color=mix(vec3(0.025,0.3,0.42),vec3(0.25,0.9,1.0),swirl);
        color+=vec3(0.25,0.8,1.0)*bands*1.8;
        gl_FragColor=vec4(color,1.0);
      }`,
  });
  solid(0, 0, 2.6, 2.6, 10.4, coreMaterial);
  add(box, steel, 0, 1.15, 0, 3.25, 0.65, 3.25);
  add(box, steel, 0, 10.7, 0, 3.8, 0.6, 3.8);
  for (const x of [-2.6, 2.6]) for (const z of [-2.6, 2.6]) {
    solid(x, z, 0.45, 0.45, 11.8, dark);
    add(box, cyan, x, 6.7, z - 0.235, 0.12, 8.5, 0.025, false);
  }
  const reactorRings = [ring(3.1, 2.0, orange, 0.1), ring(3.1, 6.4, cyan, 0.09), ring(3.4, 11.7, orange, 0.15)];
  for (const y of [1.5, 10.1]) add(cylinder, dark, 0, y, 0, 2.1, 0.3, 2.1);

  // Six structural towers and a continuous overhead hexagonal truss.
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3 + Math.PI / 6;
    const x = Math.sin(a) * 36, z = Math.cos(a) * 36;
    solid(x, z, 1, 1, 14, dark);
    add(box, orange, x, 9.5, z - 0.51, 0.14, 7, 0.025, false);
    const nextA = a + Math.PI / 3;
    const nx = Math.sin(nextA) * 36, nz = Math.cos(nextA) * 36;
    const beam = add(box, dark, (x + nx) / 2, 13.6, (z + nz) / 2, 36, 0.7, 0.65);
    beam.rotation.y = -Math.atan2(nz - z, nx - x);
    const trim = add(box, cyan, (x + nx) / 2, 13.18, (z + nz) / 2, 35.4, 0.06, 0.08, false);
    trim.rotation.y = beam.rotation.y;
    const brace = add(box, steel, x * 0.91, 11.9, z * 0.91, 0.32, 0.32, 7.4);
    brace.rotation.y = a;
    brace.rotation.x = -0.4;
  }

  // Sealed gates on cardinal boundaries, all grounded solids represented exactly.
  const gateSign = new THREE.MeshStandardMaterial({ map: signTexture('07', 'LOCKDOWN', '#ffa555'), roughness: 0.75 });
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2, sx = Math.round(Math.sin(a)), sz = Math.round(Math.cos(a));
    const x = sx * 54.6, z = sz * 54.6;
    solid(x, z, sz ? 12 : 2.2, sz ? 2.2 : 12, 11, steel);
    const door = add(box, black, x - sx * 1.12, 4.2, z - sz * 1.12, 8, 8.4, 0.04, false);
    door.rotation.y = a;
    for (const side of [-1, 1]) {
      const light = add(box, orange, x + sz * side * 4.5 - sx * 1.15, 4.3, z - sx * side * 4.5 - sz * 1.15, 0.16, 8.6, 0.08, false);
      light.rotation.y = a;
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.8), gateSign);
    sign.position.set(x - sx * 1.15, 9.3, z - sz * 1.15); sign.rotation.y = a + Math.PI; group.add(sign);
  }

  // Long industrial pennants frame both the starting view and elevated menu camera.
  const bannerMaterials = [signTexture('01', 'REACTOR', '#56e0ec'), signTexture('07', 'QUARANTINE', '#ffa555')].map(map => new THREE.MeshStandardMaterial({ map, side: THREE.DoubleSide, roughness: 0.8, emissive: 0x243441, emissiveIntensity: 0.25 }));
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3 + Math.PI / 6;
    const x = Math.sin(a) * 32, z = Math.cos(a) * 32;
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(3, 6), bannerMaterials[i % 2]);
    banner.position.set(x, 9.1, z); banner.rotation.y = a + Math.PI; group.add(banner);
    add(box, steel, x, 12.2, z, 3.6, 0.15, 0.15, false).rotation.y = a;
  }

  // Axis-aligned barricades retain broad lanes and a clear starting sightline.
  const barriers = [
    [12, 8, 7, 1.6, 1.5], [-14, 6, 7, 1.6, 1.5], [0, -14, 9, 1.6, 1.5],
    [24, 13, 1.6, 9, 2.2], [-24, -12, 1.6, 9, 2.2],
    [30, -3, 1.6, 7, 2.6], [-30, 4, 1.6, 7, 2.6],
    [17, -8, 5, 1.5, 1.25], [-17, 11, 5, 1.5, 1.25],
    [8, 33, 6, 1.5, 1.6], [-8, -33, 6, 1.5, 1.6], [-9, 24, 4, 1.5, 1.3],
  ];
  for (let i = 0; i < barriers.length; i++) {
    const [x, z, w, d, h] = barriers[i];
    solid(x, z, w, d, h, i % 3 ? dark : orangePlate);
    add(box, steel, x, h - 0.07, z, w, 0.14, d);
    const alongX = w > d;
    add(box, i % 2 ? cyan : orange, x + (alongX ? 0 : w / 2 + 0.016), h - 0.24, z + (alongX ? d / 2 + 0.016 : 0), alongX ? w * 0.83 : 0.025, 0.07, alongX ? 0.025 : d * 0.83, false);
    for (const side of [-1, 1]) {
      add(box, steel, x + (alongX ? side * w * 0.34 : 0), h * 0.43, z + (alongX ? d / 2 + 0.016 : side * d * 0.34), alongX ? 0.09 : w, h * 0.68, alongX ? 0.025 : 0.09, false);
    }
  }
  for (const [x, z, size] of [[10, 18, 1.6], [11.7, 18, 1.1], [-21, 23, 1.8], [26, -24, 1.7], [-6, -26, 1.5], [37, 12, 1.8], [-36, -14, 1.8]]) {
    solid(x, z, size, size, size, steel);
    add(box, orange, x, size - 0.15, z + size / 2 + 0.012, size * 0.7, 0.055, 0.02, false);
  }

  // Launch surfaces are floor-level, not blocking cover.
  const padDisc = new THREE.CylinderGeometry(2.15, 2.4, 0.08, 32);
  const padRing = new THREE.TorusGeometry(2.4, 0.07, 6, 48);
  for (const [x, z] of [[18, 18], [-18, 18], [18, -18], [-18, -18], [0, 34], [0, -34]]) {
    add(padDisc, dark, x, 0.04, z, 1, 1, 1, false);
    const rim = new THREE.Mesh(padRing, cyan); rim.position.set(x, 0.09, z); rim.rotation.x = -Math.PI / 2; group.add(rim);
    for (const offset of [-0.6, 0, 0.6]) add(box, cyan, x, 0.09, z + offset, 1.6 - Math.abs(offset), 0.02, 0.12, false);
    pads.push({ x, z });
  }

  scene.add(new THREE.HemisphereLight(0x9ac8e0, 0x26343b, 1.7));
  const sun = new THREE.DirectionalLight(0xd8e9ed, 2.4);
  sun.position.set(32, 55, 22); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -58, right: 58, top: 58, bottom: -58, near: 1, far: 150 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.025; scene.add(sun);
  const fill = new THREE.DirectionalLight(0x3f869e, 1.0); fill.position.set(-25, 25, -30); scene.add(fill);
  const reactorLight = new THREE.PointLight(0x28cced, 85, 28, 2); reactorLight.position.set(0, 6, 0); group.add(reactorLight);
  const warmLight = new THREE.PointLight(0xff863b, 110, 35, 2); warmLight.position.set(-21, 8, -18); group.add(warmLight);

  const skyMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: 'varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: `varying vec3 vPos;uniform float uTime;
      float hash(vec3 p){p=fract(p*0.3183099+0.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
      void main(){vec3 d=normalize(vPos);float h=max(0.0,d.y);
        vec3 color=mix(vec3(0.09,0.17,0.21),vec3(0.012,0.026,0.052),sqrt(h));
        float neb=pow(max(0.0,dot(d,normalize(vec3(-0.8,0.3,-0.5)))),8.0);
        color+=vec3(0.15,0.05,0.015)*neb;
        float s=hash(floor(d*220.0));
        color+=vec3(0.55,0.75,0.9)*smoothstep(0.997,1.0,s)*step(0.06,d.y)*(0.8+0.2*sin(uTime+s*40.0));
        gl_FragColor=vec4(color,1.0);}`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 24), skyMaterial); group.add(sky);
  scene.userData.sky = sky;
  scene.userData.energyCore = coreMaterial;
  // onBeforeRender animates during both menu orbit and gameplay without another loop.
  const startTime = performance.now();
  const updateTime = () => (performance.now() - startTime) * 0.001;
  sky.onBeforeRender = () => { skyMaterial.uniforms.uTime.value = updateTime(); };
  const coreMesh = group.children.find(mesh => mesh.material === coreMaterial);
  coreMesh.onBeforeRender = () => {
    const time = updateTime(); coreMaterial.uniforms.uTime.value = time;
    reactorRings[1].rotation.y = Math.sin(time * 0.3) * 0.15;
  };
  return { group, colliders, pads };
}
