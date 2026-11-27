import * as T from 'three';

export function reflectionSky() {
  const w = 128,
    h = 64,
    px = new Float32Array(w * h * 4);
  const stops = [
    new T.Color(0x8f767a),
    new T.Color(0xddd1bc),
    new T.Color(0x7f9dba),
    new T.Color(0xcbdae2),
  ];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const v = y / h,
        u = x / w,
        i = Math.min(2, Math.floor(v * 3));
      const c = stops[i].clone().lerp(stops[i + 1], v * 3 - i);
      const glow = 3 * Math.exp(-((u - 0.67) ** 2 / 0.004 + (v - 0.62) ** 2 / 0.018));
      px.set([c.r + glow, c.g + glow * 0.76, c.b + glow * 0.5, 1], 4 * (y * w + x));
    }
  const t = new T.DataTexture(px, w, h, T.RGBAFormat, T.FloatType);
  t.mapping = T.EquirectangularReflectionMapping;
  t.needsUpdate = true;
  return t;
}

// Voxelize the static architecture and integrate occupancy at three radii.
// The fragment shader samples just above the visible surface to keep isolated
// edges light and darken the contact between perpendicular pieces of stone.
export function ambientField(scene, material) {
  const n = 88,
    side = 19.36,
    cell = side / n,
    origin = new T.Vector3(-9.68, -8.1, -9.68);
  let vox = new Float32Array(n * n * n);
  const a = new T.Vector3(),
    b = new T.Vector3(),
    c = new T.Vector3();
  const put = (x, y, z) => {
    const ix = Math.floor((x - origin.x) / cell),
      iy = Math.floor((y - origin.y) / cell),
      iz = Math.floor((z - origin.z) / cell);
    if (ix >= 0 && ix < n && iy >= 0 && iy < n && iz >= 0 && iz < n)
      vox[ix + n * (iy + n * iz)] = 1;
  };
  scene.updateMatrixWorld(true);
  scene.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.material !== material || !o.castShadow) return;
    const points = o.geometry.attributes.position;
    for (let i = 0; i < points.count; i += 3) {
      a.fromBufferAttribute(points, i).applyMatrix4(o.matrixWorld);
      b.fromBufferAttribute(points, i + 1).applyMatrix4(o.matrixWorld);
      c.fromBufferAttribute(points, i + 2).applyMatrix4(o.matrixWorld);
      const steps = Math.max(
        1,
        Math.ceil((Math.max(a.distanceTo(b), a.distanceTo(c), b.distanceTo(c)) / cell) * 1.12),
      );
      for (let j = 0; j <= steps; j++)
        for (let k = 0; k <= steps - j; k++) {
          const u = j / steps,
            v = k / steps;
          put(
            a.x + (b.x - a.x) * u + (c.x - a.x) * v,
            a.y + (b.y - a.y) * u + (c.y - a.y) * v,
            a.z + (b.z - a.z) * u + (c.z - a.z) * v,
          );
        }
    }
  });
  const result = new Uint8Array(vox.length * 4);
  for (let pass = 0; pass < 3; pass++) {
    const r = [1, 2, 4][pass],
      width = 2 * r + 1;
    for (const stride of [1, n, n * n]) {
      const out = new Float32Array(vox.length);
      for (let z = 0; z < n; z++)
        for (let y = 0; y < n; y++)
          for (let x = 0; x < n; x++) {
            const i = x + y * n + z * n * n,
              coord = stride === 1 ? x : stride === n ? y : z;
            let sum = 0;
            for (let j = Math.max(-r, -coord); j <= Math.min(r, n - 1 - coord); j++)
              sum += vox[i + j * stride];
            out[i] = sum / width;
          }
      vox = out;
    }
    for (let i = 0; i < vox.length; i++) result[4 * i + pass] = Math.round(255 * vox[i]);
  }
  const field = new T.Data3DTexture(result, n, n, n);
  field.format = T.RGBAFormat;
  field.minFilter = field.magFilter = T.LinearFilter;
  field.needsUpdate = true;
  const previous = material.onBeforeCompile;
  material.onBeforeCompile = function (shader, ...args) {
    previous.call(this, shader, ...args);
    shader.uniforms.occupancy = { value: field };
    shader.vertexShader = 'varying vec3 vWorld;varying vec3 vOut;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <project_vertex>',
      `#include <project_vertex>
      vec4 ap=vec4(transformed,1.);vec3 an=normal;
      #ifdef USE_INSTANCING
      ap=instanceMatrix*ap;an=normalize(mat3(instanceMatrix)*an);
      #endif
      vWorld=(modelMatrix*ap).xyz;vOut=mat3(modelMatrix)*an;`,
    );
    shader.fragmentShader =
      'uniform highp sampler3D occupancy;varying vec3 vWorld;varying vec3 vOut;\n' +
      shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <aomap_fragment>',
      `#include <aomap_fragment>
      vec3 uvw=(vWorld-vec3(-9.68,-8.1,-9.68))/19.36;vec3 ray=normalize(vOut)/19.36;
      float nearAO=texture(occupancy,uvw+ray*.37).r;
      float midAO=texture(occupancy,uvw+ray*.72).g;
      float farAO=texture(occupancy,uvw+ray*1.12).b;
      float ao=clamp(1.-nearAO*.86-midAO*.79-farAO*.64,.32,1.);
      reflectedLight.indirectDiffuse*=ao;reflectedLight.directDiffuse*=mix(.69,1.,ao);
      reflectedLight.indirectSpecular*=ao;`,
    );
  };
}
