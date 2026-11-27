import * as THREE from "three";
import { plasterTexture, random, mesh, box, tube } from "./materials.js";
import { createOlive } from "./courtyard.js";
import { furnish } from "./interior.js";
export function createRoom(scene, wood, panorama, painting, plate) {
  const room = new THREE.Group();
  scene.add(room);
  const windowOffset = -2.3;
  room.position.x = windowOffset;
  const limewash = plasterTexture();
  const plaster = new THREE.MeshStandardMaterial({
    color: 0xb1a386,
    roughness: 0.95,
    map: limewash,
    bumpMap: limewash,
    bumpScale: 0.009,
  });

  // Four solid pieces leave a real opening to the courtyard.
  box(room, [12, 9, 0.24], [7.38, 2, -3.3], plaster);
  box(room, [12, 9, 0.24], [-9.88, 2, -3.3], plaster);
  box(room, [5.3, 2.3, 0.24], [-1.25, -0.5, -3.3], plaster);
  box(room, [5.3, 3, 0.24], [-1.25, 6.3, -3.3], plaster);
  const floor = new THREE.MeshStandardMaterial({
    color: 0x766148,

    roughness: 0.73,
  });
  box(room, [18, 0.15, 18], [0, -1.8, 0], floor);
  const trim = new THREE.MeshStandardMaterial({
    map: wood,
    color: 0xd0ab80,
    roughness: 0.5,
  });
  box(room, [14, 0.13, 0.13], [0, -1.4, -3.1], trim);
  // Painted moulding catches grazing light along the lower wall.
  const panelPaint = new THREE.MeshStandardMaterial({
    color: 0x48564d,
    roughness: 0.76,
  });
  for (const cx of [-6.42, 3.94]) {
    box(room, [5.05, 2.6, 0.09], [cx, -0.15, -3.12], panelPaint);
    box(room, [5.1, 0.07, 0.15], [cx, 1.17, -3.07], panelPaint);
    box(room, [5.1, 0.027, 0.19], [cx, 1.22, -3.05], panelPaint);
    for (let k = -2; k <= 2; k++) {
      const x = cx + k;
      for (const dx of [-0.43, 0.43])
        box(room, [0.025, 1.44, 0.036], [x + dx, 0.23, -3.05], panelPaint);
      for (const dy of [-0.72, 0.72])
        box(room, [0.885, 0.025, 0.036], [x, 0.23 + dy, -3.05], panelPaint);
    }
  }
  box(scene, [0.2, 9, 12], [4.33, 2.7, 1.3], plaster);
  box(scene, [0.12, 2.85, 12], [4.19, -0.3, 1.3], panelPaint);
  for (const [y, h, w] of [
    [1.16, 0.095, 0.18],
    [1.23, 0.032, 0.2],
    [-1.6, 0.18, 0.18],
  ])
    box(scene, [w, h, 12], [4.16, y, 1.3], panelPaint);
  for (let z = -2.6; z < 6; z += 1.23) {
    for (const dz of [-0.52, 0.52])
      box(scene, [0.07, 2.0, 0.032], [4.1, -0.18, z + dz], panelPaint);
    for (const dy of [-1, 1])
      box(scene, [0.07, 0.034, 1.07], [4.1, -0.18 + dy, z], panelPaint);
  }
  // A corner stile closes the two runs of panelling and a fine picture rail
  // returns around the upper wall.
  box(scene, [0.16, 2.92, 0.18], [4.1, -0.29, -3.01], panelPaint);
  box(scene, [0.2, 6, 0.2], [4.23, 3.13, -3.16], plaster);
  for (const [y, height, depth] of [
    [3.82, 0.082, 0.105],
    [3.88, 0.024, 0.13],
  ]) {
    box(scene, [5.23, height, depth], [1.67, y, -3.14], trim);
    box(scene, [depth, height, 8], [4.16, y, 0.85], trim);
  }
  // Window joinery and deep sunlit sill.
  for (const x of [-3.88, 1.38])
    box(room, [0.13, 4.25, 0.26], [x, 2.75, -3.13], trim);
  for (const y of [0.65, 4.85])
    box(room, [5.4, 0.14, 0.3], [-1.25, y, -3.13], trim);
  box(room, [5.7, 0.14, 0.65], [-1.25, 0.61, -2.99], trim);
  box(room, [0.075, 4.1, 0.14], [-1.25, 2.75, -3.19], trim);
  box(room, [5.25, 0.055, 0.12], [-1.25, 3.44, -3.19], trim);
  const sash = new THREE.Group();
  sash.position.set(-3.77, 0.76, -3.05);
  sash.rotation.y = -0.53;
  room.add(sash);
  for (let x of [0, 2.42]) box(sash, [0.055, 3.94, 0.065], [x, 1.97, 0], trim);
  for (let y of [0, 3.94, 2.7])
    box(sash, [2.45, 0.055, 0.065], [1.21, y, 0], trim);
  const brass = new THREE.MeshStandardMaterial({
    color: 0xa8894c,
    metalness: 0.75,
    roughness: 0.28,
  });
  box(sash, [0.025, 0.17, 0.06], [2.35, 1.7, 0.07], brass);
  const knob = tube(
    sash,
    [
      [2.39, 1.71, 0.1],
      [2.38, 1.72, 0.18],
      [2.24, 1.72, 0.19],
    ],
    0.024,
    brass,
    9,
  );
  knob.castShadow = true;
  for (const y of [0.25, 1.87, 3.67])
    box(sash, [0.08, 0.18, 0.08], [0.018, y, 0.055], brass);
  for (const x of [-2.53, 0.03])
    box(room, [0.046, 4.1, 0.095], [x, 2.75, -3.22], trim);
  // A half-open plantation shutter cuts the direct light into distinct shafts.
  const shutter = new THREE.Group();
  room.add(shutter);
  shutter.position.set(-1.36, 0.72, -3.35);
  shutter.rotation.y = 0.24;
  for (const x of [-1.24, 0])
    box(shutter, [0.07, 4.02, 0.092], [x, 2.0, 0], trim);
  for (let j = 0; j < 19; j++) {
    const slat = box(
      shutter,
      [1.23, 0.036, 0.162],
      [-0.62, 0.14 + j * 0.21, 0.008],
      trim,
    );
    slat.rotation.x = 0.35;
  }
  for (const x of [-3.94, 1.47]) {
    box(room, [0.088, 4.43, 0.345], [x, 2.74, -3.1], trim);
    box(
      room,
      [0.085, 4.47, 0.31],
      [x + (x < 0 ? -0.08 : 0.08), 2.74, -3.15],
      trim,
    );
  }
  box(room, [5.82, 0.096, 0.23], [-1.25, 0.49, -2.93], trim);
  // A folded shutter on the far jamb admits a narrow fan of light alongside
  // the linen. Its individual slats participate in the sun shadow pass.
  const folding = new THREE.Group();
  room.add(folding);
  folding.position.set(1.31, 0.74, -3.34);
  folding.rotation.y = 0.62;
  for (const x of [0, -0.79])
    box(folding, [0.047, 4.04, 0.09], [x, 2.0, 0], trim);
  for (let j = 0; j < 16; j++) {
    const lath = box(
      folding,
      [0.78, 0.038, 0.15],
      [-0.395, 0.17 + j * 0.248, 0],
      trim,
    );
    lath.rotation.x = 0.43;
  }
  // A softly focused photographic courtyard beyond the real opening.

  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      photo: { value: panorama },
      warmth: { value: 0 },
      day: { value: 1 },
    },
    vertexShader:
      "varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    fragmentShader: `varying vec3 dir;uniform sampler2D photo;uniform float warmth,day;
  void main(){vec3 d=normalize(dir);vec2 uv=vec2(fract(atan(d.z,d.x)/6.283185+.402),clamp(asin(d.y)/3.141593+.578,0.,1.));
  vec3 c=texture2D(photo,uv).rgb;
  vec3 haze=mix(vec3(.72,.68,.52),vec3(.94,.40,.18),warmth);
  c=mix(c*haze*2.0,haze,.080)*mix(vec3(.23,.30,.49),vec3(1.),day);gl_FragColor=vec4(c,1.);}`,
  });
  mesh(new THREE.SphereGeometry(36, 40, 24), skyMat, scene, [0, -2.5, 0]);
  const moveBranch = createOlive(room);
  const r = random(31);
  // Sheer linen: pleats are actual geometry; weave is shaded at thread scale.
  const curtains = [];
  for (const [cx, width, phase] of [
    [-3.4, 0.93, 0],
    [0.88, 1.18, 2.1],
  ]) {
    const g = new THREE.PlaneGeometry(width, 4.55, 50, 85);
    const base = g.attributes.position.array.slice();
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xe7dfca,
      roughness: 0.92,
      metalness: 0,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    mat.onBeforeCompile = (s) => {
      s.fragmentShader = s.fragmentShader.replace(
        "#include <alphamap_fragment>",
        "#include <alphamap_fragment>\nfloat pleat=sin(vUv.x*24.+vUv.y*.9);float hem=1.-smoothstep(.008,.02,min(vUv.y,1.-vUv.y));float weave=.95+.05*sin(vUv.x*490.)*sin(vUv.y*700.);diffuseColor.a*=weave*(.69+.24*pleat+.46*hem);diffuseColor.rgb*=(.85+.15*pleat);",
      );
    };
    mat.defines = { USE_UV: "" };
    const m = mesh(g, mat, room, [cx, 2.57, -2.77]);
    m.castShadow = true;
    const shade = new THREE.MeshDepthMaterial({ side: THREE.DoubleSide });
    shade.defines = { USE_UV: "" };
    shade.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace(
        "#include <alphatest_fragment>",
        `
        float pleats=.5+.5*cos(vUv.x*27.+vUv.y*.9);
        float threshold=.19+.63*pow(pleats,1.8);
        float noise=fract(52.9829189*fract(dot(floor(gl_FragCoord.xy),vec2(.06711056,.00583715))));
        if(noise>threshold)discard;`,
      );
    };
    m.customDepthMaterial = shade;
    curtains.push({ m, base, phase });
    for (let j = 0; j < 9; j++) {
      const ring = mesh(
        new THREE.TorusGeometry(0.034, 0.006, 6, 14),
        brass,
        room,
        [cx - width / 2 + (j * width) / 8, 4.89, -2.78],
      );
      ring.rotation.y = Math.PI / 2;
    }
  }
  tube(
    room,
    [
      [-4, 4.94, -2.78],
      [1.7, 4.94, -2.78],
    ],
    0.024,
    brass,
    2,
  );
  // Walnut table, bevelled edge and tapered legs.
  const woodMat = new THREE.MeshStandardMaterial({
    map: wood,
    roughness: 0.54,
    bumpMap: wood,
    bumpScale: 0.015,
    color: 0xa07047,
    envMapIntensity: 0.22,
  });
  const sunVector = { value: new THREE.Vector3() },
    sunVisibility = { value: 1 };
  woodMat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, {
      lightDirection: sunVector,
      directVisibility: sunVisibility,
    });
    shader.vertexShader =
      "varying vec3 receiver;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nreceiver=(modelMatrix*vec4(position,1.)).xyz;",
      );
    shader.fragmentShader =
      "varying vec3 receiver; uniform vec3 lightDirection;uniform float directVisibility;\n" +
      shader.fragmentShader.replace(
        "#include <lights_fragment_end>",
        `#include <lights_fragment_end>
     vec3 rel=(receiver-vec3(0.,.78,0.))/vec3(.72,.80,.72);
     vec3 ray=normalize(lightDirection/vec3(.72,.80,.72));
     float nearest=max(0.,-dot(rel,ray));
     float shadow=1.-smoothstep(.79,1.09,length(rel+nearest*ray));
     reflectedLight.directDiffuse*=1.-.76*shadow*directVisibility;
     reflectedLight.directSpecular*=1.-.79*shadow*directVisibility;
     float contact=smoothstep(.40,.80,length(receiver.xz));
     reflectedLight.indirectDiffuse*=mix(.26,1.,contact);
   `,
      );
  };
  const table = mesh(
    new THREE.CylinderGeometry(2.83, 2.87, 0.16, 144),
    woodMat,
    scene,
    [0, -0.09, 0],
  );
  table.receiveShadow = true;
  table.castShadow = true;
  const edge = mesh(
    new THREE.TorusGeometry(2.83, 0.035, 10, 160),
    woodMat,
    scene,
    [0, -0.015, 0],
  );
  edge.rotation.x = Math.PI / 2;
  for (let i = 0; i < 4; i++) {
    let a = (i * Math.PI) / 2 + 0.6;
    let l = mesh(
      new THREE.CylinderGeometry(0.085, 0.055, 1.65, 16),
      woodMat,
      scene,
      [Math.cos(a) * 1.95, -0.96, Math.sin(a) * 1.95],
    );
    l.castShadow = true;
  }
  // Small personal objects give scale without stealing the focus.
  furnish(scene, wood, brass, floor, painting, plate);
  const ceramic = new THREE.MeshPhysicalMaterial({
    color: 0xa8b6a5,
    roughness: 0.28,
    clearcoat: 0.3,
  });
  const dish = [
    [0.01, 0.007],
    [0.22, 0.007],
    [0.32, 0.015],
    [0.39, 0.05],
    [0.39, 0.061],
    [0.34, 0.051],
    [0.24, 0.024],
    [0.01, 0.022],
  ];
  mesh(
    new THREE.LatheGeometry(
      dish.map((v) => new THREE.Vector2(...v)),
      80,
    ),
    ceramic,
    scene,
    [-1.56, 0.004, 0.51],
  ).castShadow = true;
  const cupPoints = [
    [0.13, 0],
    [0.21, 0.035],
    [0.23, 0.23],
    [0.22, 0.26],
    [0.201, 0.26],
    [0.195, 0.05],
    [0.13, 0.025],
  ].map((p) => new THREE.Vector2(...p));
  mesh(
    new THREE.LatheGeometry(cupPoints, 64),
    ceramic,
    scene,
    [-1.56, 0.036, 0.51],
  ).castShadow = true;
  const crema = document.createElement("canvas");
  crema.width = crema.height = 256;
  const coffeeInk = crema.getContext("2d"),
    foam = random(941);
  const brew = coffeeInk.createRadialGradient(124, 135, 5, 128, 128, 128);
  brew.addColorStop(0, "#311506");
  brew.addColorStop(0.83, "#42200c");
  brew.addColorStop(1, "#b68442");
  coffeeInk.fillStyle = brew;
  coffeeInk.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 330; i++) {
    const a = foam() * Math.PI * 2,
      r = 121 - 15 * Math.pow(foam(), 2);
    coffeeInk.fillStyle = foam() > 0.4 ? "#d7aa6988" : "#5b361b99";
    coffeeInk.beginPath();
    coffeeInk.arc(
      128 + r * Math.cos(a),
      128 + r * Math.sin(a),
      0.7 + foam() * 2.1,
      0,
      Math.PI * 2,
    );
    coffeeInk.fill();
  }
  const coffeeMap = new THREE.CanvasTexture(crema);
  coffeeMap.colorSpace = THREE.SRGBColorSpace;
  const coffee = mesh(
    new THREE.CircleGeometry(0.198, 64),
    new THREE.MeshPhysicalMaterial({
      map: coffeeMap,
      roughness: 0.42,
      clearcoat: 0.04,
      specularIntensity: 0.22,
      envMapIntensity: 0.1,
    }),
    scene,
    [-1.56, 0.273, 0.51],
  );
  coffee.rotation.x = -Math.PI / 2;
  const handle = mesh(
    new THREE.TorusGeometry(0.105, 0.026, 10, 32),
    ceramic,
    scene,
    [-1.29, 0.176, 0.51],
  );
  handle.rotation.y = 0.15;
  const stripeMat = new THREE.MeshStandardMaterial({
    color: 0x2d5755,
    roughness: 0.41,
  });
  for (const [y, rad] of [
    [0.451, 0.23],
    [0.438, 0.228],
    [0.248, 0.382],
  ]) {
    const stripe = mesh(
      new THREE.TorusGeometry(rad, 0.004, 8, 80),
      stripeMat,
      scene,
      [-1.56, y - 0.185, 0.51],
    );
    stripe.rotation.x = Math.PI / 2;
  }
  // Fine, sparse motes; deterministic movement never accumulates frame error.
  const n = 1150,
    positions = new Float32Array(n * 3),
    seeds = [];
  for (let i = 0; i < n; i++)
    seeds.push([r() * 7 - 3.5, r() * 4.4, r() * 5 - 3, r() * 6.28]);
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.ShaderMaterial({
      uniforms: {
        seconds: { value: 0 },
        energy: { value: 1 },
        tint: { value: new THREE.Color() },
        shadowDepth: { value: null },
        shadowProjection: { value: new THREE.Matrix4() },
      },
      depthWrite: false,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexShader: `uniform highp sampler2DShadow shadowDepth;uniform mat4 shadowProjection;uniform float seconds,energy;
        varying float glow;void main(){
          vec3 sc=(shadowProjection*vec4(position,1.)).xyz;
          float lit=texture(shadowDepth,vec3(sc.xy,sc.z-.0002));
          float seed=fract(float(gl_VertexID)*.618034);
          float spark=pow(.5+.5*sin(seconds*(.72+seed)+seed*172.),7.);
          glow=energy*lit*(.11+spark*1.25);
          vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv;
          gl_PointSize=clamp((6.+11.*seed)/max(1.,-mv.z),1.0,5.);
        }`,
      fragmentShader: `varying float glow;uniform vec3 tint;
        void main(){vec2 q=2.*gl_PointCoord-1.;float r=dot(q,q);if(r>1.)discard;
        gl_FragColor=vec4(tint*vec3(1.,.83,.54),glow*exp(-3.7*r));}`,
    }),
  );
  scene.add(dust);
  return {
    skyMat,
    update(t, breeze, daylight, sun, color, shadow) {
      moveBranch(t, breeze);
      sunVector.value.copy(sun);
      sunVisibility.value = daylight;
      skyMat.uniforms.day.value = daylight;

      for (const { m, base, phase } of curtains) {
        let a = m.geometry.attributes.position;
        for (let i = 0; i < a.count; i++) {
          const x = base[i * 3],
            y = base[i * 3 + 1],
            bottom = (2.275 - y) / 4.55;
          a.setXYZ(
            i,
            x +
              Math.sin(t * 0.7 + y * 0.6 + phase) * 0.41 * bottom * breeze +
              0.1 * bottom * Math.sin(y * 1.3 + phase),
            y + 0.055 * bottom * Math.cos(x * 18 + phase),
            (0.115 + 0.048 * bottom) *
              Math.sin(
                x * 20 +
                  y * 0.29 +
                  0.31 * bottom * Math.sin(t * 0.84 + phase) +
                  phase,
              ) +
              bottom *
                bottom *
                (0.16 + Math.sin(t * 1.1 + x * 3 + phase) * 0.72 * breeze),
          );
        }
        a.needsUpdate = true;
        m.geometry.computeVertexNormals();
      }
      for (let i = 0; i < n; i++) {
        const [x, y, z, p] = seeds[i];
        positions[i * 3] = x + Math.sin(t * 0.17 + p) * 0.15;
        positions[i * 3 + 1] = (y + t * 0.025 * (0.4 + breeze)) % 4.4;
        positions[i * 3 + 2] = z + Math.cos(t * 0.22 + p) * 0.1;
      }
      dustGeo.attributes.position.needsUpdate = true;
      const u = dust.material.uniforms;
      u.seconds.value = t;
      u.energy.value = daylight;
      u.tint.value.copy(color);
      dust.onBeforeRender = () => {
        u.shadowDepth.value = shadow.map.depthTexture;
        u.shadowProjection.value.copy(shadow.matrix);
      };
    },
  };
}
