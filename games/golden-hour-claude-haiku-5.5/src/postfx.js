// Render pipeline:
//   1. sun depth pass (orthographic, casters on CAST_LAYER only)
//   2. world HDR pass (MSAA, depth texture)              3. gun HDR pass (separate depth, premultiplied)
//   4. volumetric light shafts at half resolution         5. composite world * transmittance + in-scatter + gun
//   6. dual-filter bloom                                  7. lens ghosts, ACES filmic, grade, grain, sRGB to screen
import * as THREE from 'three';
import { VS_FULLSCREEN, FS_VOLUMETRIC, FS_COMBINE, FS_BLOOM_DOWN, FS_BLOOM_UP, FS_FINAL } from './shaders.js';
import { seededRandom } from './utils.js';

const SUN_SHADOW_RANGE = 58;
const SUN_SHADOW_NEAR = 40;
const SUN_SHADOW_FAR = 300;
const SUN_DISTANCE = 170;

// Periodic 3D value noise, stored as a byte volume. The volumetric pass samples it for drifting dust.
function makeNoiseVolume(n = 48, seed = 4242) {
  const rand = seededRandom(seed);
  const lat = 6;
  const lattice = new Float32Array(lat * lat * lat);
  for (let i = 0; i < lattice.length; i++) lattice[i] = rand();
  const data = new Uint8Array(n * n * n);
  const at = (x, y, z, L) => lattice[((z % L) * L + (y % L)) * L + (x % L)];
  for (let z = 0; z < n; z++) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        let acc = 0;
        let amp = 0.62;
        let L = lat;
        for (let oct = 0; oct < 2; oct++) {
          const fx = (x / n) * L, fy = (y / n) * L, fz = (z / n) * L;
          const ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz);
          let tx = fx - ix, ty = fy - iy, tz = fz - iz;
          tx = tx * tx * (3 - 2 * tx);
          ty = ty * ty * (3 - 2 * ty);
          tz = tz * tz * (3 - 2 * tz);
          const c = (dx, dy, dz) => at(ix + dx, iy + dy, iz + dz, L);
          const x00 = c(0, 0, 0) + (c(1, 0, 0) - c(0, 0, 0)) * tx;
          const x10 = c(0, 1, 0) + (c(1, 1, 0) - c(0, 1, 0)) * tx;
          const x01 = c(0, 0, 1) + (c(1, 0, 1) - c(0, 0, 1)) * tx;
          const x11 = c(0, 1, 1) + (c(1, 1, 1) - c(0, 1, 1)) * tx;
          const y0 = x00 + (x10 - x00) * ty;
          const y1 = x01 + (x11 - x01) * ty;
          acc += (y0 + (y1 - y0) * tz) * amp;
          amp *= 0.4;
          L *= 2;
        }
        data[(z * n + y) * n + x] = Math.max(0, Math.min(255, Math.round(acc / 0.9 * 255)));
      }
    }
  }
  const tex = new THREE.Data3DTexture(data, n, n, n);
  tex.format = THREE.RedFormat;
  tex.type = THREE.UnsignedByteType;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.wrapR = THREE.RepeatWrapping;
  tex.unpackAlignment = 1;
  tex.needsUpdate = true;
  return tex;
}

function rtOptions(extra = {}) {
  return Object.assign({ type: THREE.HalfFloatType, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter }, extra);
}

export class PostFX {
  constructor({ renderer, scene, camera, gunScene, gunCamera, sunLight, sunDir, sunTarget, cfg, shadowLayer }) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.gunScene = gunScene;
    this.gunCamera = gunCamera;
    this.cfg = cfg;
    this.shadowLayer = shadowLayer;
    this.size = new THREE.Vector2(1, 1);
    this.bloomLevels = cfg.quality.bloomLevels;

    // ---- sun: one shared frustum for the built-in shadow map and the volumetric depth pass ----
    const shadowSize = cfg.quality.shadowSize;
    const target = sunTarget;
    const sunPos = target.clone().addScaledVector(sunDir, SUN_DISTANCE);
    sunLight.position.copy(sunPos);
    sunLight.target.position.copy(target);
    scene.add(sunLight.target);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(shadowSize, shadowSize);
    sunLight.shadow.bias = -0.0004;
    sunLight.shadow.normalBias = 0.035;
    sunLight.shadow.radius = 2.0;
    const sc = sunLight.shadow.camera;
    sc.left = -SUN_SHADOW_RANGE;
    sc.right = SUN_SHADOW_RANGE;
    sc.top = SUN_SHADOW_RANGE;
    sc.bottom = -SUN_SHADOW_RANGE;
    sc.near = SUN_SHADOW_NEAR;
    sc.far = SUN_SHADOW_FAR;
    sc.updateProjectionMatrix();

    this.sunCam = new THREE.OrthographicCamera(-SUN_SHADOW_RANGE, SUN_SHADOW_RANGE, SUN_SHADOW_RANGE, -SUN_SHADOW_RANGE, SUN_SHADOW_NEAR, SUN_SHADOW_FAR);
    this.sunCam.position.copy(sunPos);
    this.sunCam.lookAt(target);
    this.sunCam.updateMatrixWorld(true);
    this.sunCam.layers.set(shadowLayer);
    this.sunVP = new THREE.Matrix4();
    this.sunVP.multiplyMatrices(this.sunCam.projectionMatrix, this.sunCam.matrixWorldInverse);
    this.sunDepthMat = new THREE.MeshBasicMaterial({ colorWrite: false });
    this.sunRT = new THREE.WebGLRenderTarget(shadowSize, shadowSize, {
      depthBuffer: true,
      depthTexture: new THREE.DepthTexture(shadowSize, shadowSize),
    });

    // ---- targets (sized in setSize) ----
    this.rtScene = null;
    this.rtGun = null;
    this.rtVol = null;
    this.rtComb = null;
    this.down = [];
    this.up = [];

    this.noise = makeNoiseVolume();

    // ---- fullscreen quad ----
    this.postScene = new THREE.Scene();
    this.postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.quad.frustumCulled = false;
    this.postScene.add(this.quad);

    const sunCol = new THREE.Vector3(1.0, 0.72, 0.42).multiplyScalar(2.2);
    this.matVol = new THREE.ShaderMaterial({
      vertexShader: VS_FULLSCREEN,
      fragmentShader: FS_VOLUMETRIC,
      defines: { STEPS: cfg.quality.volSteps },
      uniforms: {
        tDepth: { value: null },
        tSunDepth: { value: this.sunRT.depthTexture },
        tNoise: { value: this.noise },
        uInvViewProj: { value: new THREE.Matrix4() },
        uSunVP: { value: this.sunVP },
        uCamPos: { value: new THREE.Vector3() },
        uSunDir: { value: sunDir.clone() },
        uSunCol: { value: sunCol },
        uAmbient: { value: new THREE.Vector3(0.36, 0.34, 0.44).multiplyScalar(0.05) },
        uWind: { value: new THREE.Vector3(1, 0, 0.6) },
        uTime: { value: 0 },
        uDensity: { value: 0.0065 },
        uDust: { value: 0.06 },
        uMaxDist: { value: 150 },
        uG: { value: 0.62 },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.matCombine = new THREE.ShaderMaterial({
      vertexShader: VS_FULLSCREEN,
      fragmentShader: FS_COMBINE,
      uniforms: { tScene: { value: null }, tVol: { value: null }, tGun: { value: null } },
      depthTest: false,
      depthWrite: false,
    });
    this.matDown = new THREE.ShaderMaterial({
      vertexShader: VS_FULLSCREEN,
      fragmentShader: FS_BLOOM_DOWN,
      uniforms: { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1.1 }, uUseThreshold: { value: 0 } },
      depthTest: false,
      depthWrite: false,
    });
    this.matUp = new THREE.ShaderMaterial({
      vertexShader: VS_FULLSCREEN,
      fragmentShader: FS_BLOOM_UP,
      uniforms: { tSrc: { value: null }, tBase: { value: null }, uTexel: { value: new THREE.Vector2() } },
      depthTest: false,
      depthWrite: false,
    });
    this.matFinal = new THREE.ShaderMaterial({
      vertexShader: VS_FULLSCREEN,
      fragmentShader: FS_FINAL,
      uniforms: {
        tComb: { value: null },
        tBloom: { value: null },
        tBright: { value: null },
        tDepth: { value: null },
        uSunUV: { value: new THREE.Vector2(0.5, 0.5) },
        uSunVis: { value: 0 },
        uTime: { value: 0 },
        uDamage: { value: 0 },
        uLowHP: { value: 0 },
        uBlur: { value: 0 },
        uAspect: { value: 1 },
        uBloomAmt: { value: 0.5 },
        uExposure: { value: 1.0 },
        uAdrenaline: { value: 0 },
        uRes: { value: new THREE.Vector2(1, 1) },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.ivp = new THREE.Matrix4();
  }

  setSize(width, height) {
    const w = Math.max(2, Math.floor(width));
    const h = Math.max(2, Math.floor(height));
    if (this.size.x === w && this.size.y === h && this.rtScene) return;
    this.size.set(w, h);
    if (this.rtScene) {
      this.rtScene.dispose();
      this.rtGun.dispose();
      this.rtVol.dispose();
      this.rtComb.dispose();
      for (const t of [...this.down, ...this.up]) t.dispose();
    }
    const samples = this.cfg.quality.msaa;
    this.rtScene = new THREE.WebGLRenderTarget(w, h, rtOptions({
      samples,
      depthBuffer: true,
      depthTexture: new THREE.DepthTexture(w, h),
    }));
    this.rtGun = new THREE.WebGLRenderTarget(w, h, rtOptions({ samples, depthBuffer: true }));
    this.rtVol = new THREE.WebGLRenderTarget(Math.ceil(w / 2), Math.ceil(h / 2), rtOptions());
    this.rtComb = new THREE.WebGLRenderTarget(w, h, rtOptions());
    // Bloom mip chain: each level is half the previous one. `up[i]` holds the accumulated upsample.
    this.down = [];
    let bw = Math.ceil(w / 2), bh = Math.ceil(h / 2);
    for (let i = 0; i < this.bloomLevels; i++) {
      this.down.push(new THREE.WebGLRenderTarget(bw, bh, rtOptions()));
      bw = Math.max(1, Math.ceil(bw / 2));
      bh = Math.max(1, Math.ceil(bh / 2));
    }
    this.up = this.down.slice(0, -1).map((d) => new THREE.WebGLRenderTarget(d.width, d.height, rtOptions()));
    this.matFinal.uniforms.uRes.value.set(w, h);
    this.matFinal.uniforms.uAspect.value = w / h;
  }

  // Uniform setup and pass execution. `s` carries per-frame state (see main.js).
  render(s) {
    const r = this.renderer;
    const cam = this.camera;
    const quad = this.quad;
    const draw = (material, target) => {
      quad.material = material;
      r.setRenderTarget(target);
      r.render(this.postScene, this.postCam);
    };

    // The built-in shadow map is rendered once per frame, explicitly, during the world pass.
    r.shadowMap.autoUpdate = false;

    // 1. Sun depth for volumetric shadows.
    this.sunCam.updateMatrixWorld(true);
    this.sunVP.multiplyMatrices(this.sunCam.projectionMatrix, this.sunCam.matrixWorldInverse);
    this.scene.overrideMaterial = this.sunDepthMat;
    r.setClearColor(0x000000, 1);
    r.setRenderTarget(this.sunRT);
    r.clear(true, true, true);
    r.render(this.scene, this.sunCam);
    this.scene.overrideMaterial = null;

    // 2. World (MSAA HDR) with built-in shadows.
    r.shadowMap.needsUpdate = true;
    r.setRenderTarget(this.rtScene);
    r.setClearColor(0x000000, 1);
    r.clear(true, true, true);
    r.render(this.scene, cam);

    // 3. Gun on its own target so it is never haze-attenuated or depth-mixed with the world.
    r.setRenderTarget(this.rtGun);
    r.setClearColor(0x000000, 0);
    r.clear(true, true, true);
    r.render(this.gunScene, this.gunCamera);

    // 4. Volumetric light shafts.
    this.ivp.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).invert();
    const u = this.matVol.uniforms;
    u.tDepth.value = this.rtScene.depthTexture;
    u.uInvViewProj.value.copy(this.ivp);
    u.uCamPos.value.copy(cam.position);
    u.uTime.value = s.time;
    u.uWind.value.set(s.wind.x, 0, s.wind.z);
    u.uDensity.value = s.haze;
    u.uDust.value = s.dust;
    draw(this.matVol, this.rtVol);

    // 5. Composite.
    this.matCombine.uniforms.tScene.value = this.rtScene.texture;
    this.matCombine.uniforms.tVol.value = this.rtVol.texture;
    this.matCombine.uniforms.tGun.value = this.rtGun.texture;
    draw(this.matCombine, this.rtComb);

    // 6. Bloom: thresholded 13-tap downsample chain, then tent upsample accumulation.
    let src = this.rtComb;
    for (let i = 0; i < this.down.length; i++) {
      const d = this.matDown;
      d.uniforms.tSrc.value = src.texture;
      d.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
      d.uniforms.uUseThreshold.value = i === 0 ? 1 : 0;
      draw(d, this.down[i]);
      src = this.down[i];
    }
    let upSrc = this.down[this.down.length - 1];
    for (let i = this.down.length - 2; i >= 0; i--) {
      const m = this.matUp;
      m.uniforms.tSrc.value = upSrc.texture;
      m.uniforms.tBase.value = this.down[i].texture;
      m.uniforms.uTexel.value.set(1 / upSrc.width, 1 / upSrc.height);
      draw(m, this.up[i]);
      upSrc = this.up[i];
    }
    const bloomTex = upSrc.texture;

    // 7. Final grade to the canvas.
    const f = this.matFinal.uniforms;
    f.tComb.value = this.rtComb.texture;
    f.tBloom.value = bloomTex;
    f.tBright.value = this.down[0].texture;
    f.tDepth.value = this.rtScene.depthTexture;
    f.uSunUV.value.copy(s.sunUV);
    f.uSunVis.value = s.sunVis;
    f.uTime.value = s.time;
    f.uDamage.value = s.damage;
    f.uLowHP.value = s.lowHP;
    f.uBlur.value = s.blur;
    f.uBloomAmt.value = s.bloom;
    f.uExposure.value = s.exposure;
    f.uAdrenaline.value = s.adrenaline;
    draw(this.matFinal, null);
  }
}
