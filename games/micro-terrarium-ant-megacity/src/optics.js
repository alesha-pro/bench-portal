import * as T from 'three';
import { v, mesh, ring, rod, ell, box, batch, mats } from './core.js';
import { photography } from './photography.js';
const RIM = 1.015,
  sag = 0.185,
  sphereR = (RIM * RIM + sag * sag) / (2 * sag),
  center = sphereR - sag;
export function magnifier(scene, renderer, camera) {
  const finish = photography(renderer, camera);
  const mount = new T.Group(),
    head = new T.Group(),
    bezel = new T.Group();
  scene.add(mount, head);
  head.add(bezel);
  const { brass, gold, tarnish, ebony } = mats;
  const pivot = v(4.69, -2.37, 1.08),
    base = v(4.69, -3.18, 1.08);
  rod(mount, base, base.clone().add(v(0, 0.105, 0)), 0.49, 0.46, ebony, 48);
  rod(mount, base.clone().add(v(0, 0.1, 0)), base.clone().add(v(0, 0.163, 0)), 0.41, 0.35, brass, 48);
  rod(mount, base.clone().add(v(0, 0.164, 0)), pivot, 0.126, 0.084, brass, 24);
  for (let i = 0; i < 6; i++) {
    const p = base.clone().add(v(0, 0.2 + i * 0.051, 0));
    rod(mount, p, p.clone().add(v(0, 0.025, 0)), 0.142, 0.142, i % 2 ? gold : tarnish, 20);
  }
  batch(mount);
  for (let [z, r, t, mat] of [
    [-0.036, 1.047, 0.047, tarnish],
    [0.0, 1.051, 0.052, brass],
    [0.046, 1.048, 0.032, gold],
    [0.059, 1.017, 0.016, tarnish],
    [0.069, 1.005, 0.009, gold],
  ])
    ring(bezel, 0, 0, z, r, t, mat, 144);
  for (let i = 0; i < 120; i++) {
    let a = (2 * Math.PI * i) / 120,
      m = box(
        bezel,
        1.07 * Math.cos(a),
        1.07 * Math.sin(a),
        0.045,
        0.016,
        0.006,
        0.015,
        i % 5 === 0 ? gold : tarnish,
      );
    m.rotation.z = a;
  }
  rod(bezel, v(1.045, 0, -0.02), v(1.29, 0, -0.02), 0.111, 0.092, brass, 20);
  for (let i = 0; i < 4; i++)
    rod(
      bezel,
      v(1.1 + i * 0.036, 0, -0.02),
      v(1.116 + i * 0.036, 0, -0.02),
      0.116,
      0.116,
      i % 2 ? gold : tarnish,
      16,
    );
  batch(bezel);
  const arm = new T.Group();
  scene.add(arm);
  const bars = [];
  function shaft(r, mat) {
    const o = mesh(arm, new T.CylinderGeometry(r, r, 1, 16), mat);
    bars.push(o);
    return o;
  }
  shaft(0.072, brass);
  shaft(0.037, gold);
  shaft(0.064, brass);
  shaft(0.029, gold);
  function hinge(r) {
    let g = new T.Group();
    arm.add(g);
    for (let [z, rad, t, mat] of [
      [0, r, 0.08, tarnish],
      [0.052, r * 0.89, 0.04, brass],
      [0.086, r * 0.53, 0.04, gold],
    ]) {
      let o = mesh(g, new T.CylinderGeometry(rad, rad, t, 32), mat, 0, 0, z);
      o.rotation.x = Math.PI / 2;
    }
    let s = box(g, 0, 0, 0.111, r * 0.67, 0.018, 0.005, ebony);
    s.rotation.z = 0.58;
    batch(g);
    return g;
  }
  const joints = [hinge(0.22), hinge(0.192), hinge(0.119)];
  function bar(i, a, b) {
    let m = bars[i],
      d = b.clone().sub(a);
    m.position.copy(a).lerp(b, 0.5);
    m.quaternion.setFromUnitVectors(v(0, 1, 0), d.clone().normalize());
    m.scale.y = d.length();
  }
  const pos = head.position;
  function set(x, y) {
    pos.set(x, y, 1.23);
    const tip = v(x + 1.29, y, 1.21);
    const mid = v(
      Math.min(5.42, Math.max(2.32, (pivot.x + tip.x) / 2 + 0.57)),
      Math.min(-0.36, (pivot.y + tip.y) / 2 + 0.65),
      1.11,
    );
    const dz = v(0, 0.101, -0.015);
    bar(0, pivot, mid);
    bar(1, pivot.clone().add(dz), mid.clone().add(dz));
    bar(2, mid, tip);
    bar(3, mid.clone().add(dz), tip.clone().add(dz));
    joints[0].position.copy(pivot);
    joints[1].position.copy(mid);
    joints[2].position.copy(tip);
  }
  const lp = [];
  for (let i = 0; i <= 46; i++) {
    let r = (RIM * i) / 46;
    lp.push(new T.Vector2(r, Math.sqrt(sphereR * sphereR - r * r) - center));
  }
  const g = new T.LatheGeometry(lp, 128);
  g.rotateX(Math.PI / 2);
  const rt = new T.WebGLRenderTarget(1024, 1024, {
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
    generateMipmaps: false,
    samples: 0,
  });
  rt.texture.colorSpace = T.SRGBColorSpace;
  const U = {
    plate: { value: rt.texture },
    eye: { value: v() },
    lensOrigin: { value: pos },
    viewProj: { value: new T.Matrix4() },
    crop: { value: new T.Vector4() },
  };
  const material = new T.ShaderMaterial({
    uniforms: U,
    side: T.DoubleSide,
    vertexShader: `
 varying vec3 surf;void main(){surf=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
 `,
    fragmentShader: `
 uniform sampler2D plate; uniform vec3 eye,lensOrigin;uniform mat4 viewProj;uniform vec4 crop;varying vec3 surf;
 const float rad=${sphereR.toFixed(8)},c=${center.toFixed(8)};
 vec2 traceRay(vec3 p,vec3 ray,vec3 norm,float ior){
   vec3 inside=refract(ray,norm,1./ior),q=p-vec3(0.,0.,c);
   float b=dot(q,inside),t=-b+sqrt(max(0.,b*b-dot(q,q)+rad*rad));vec3 back=p+t*inside;
   vec3 outRay=refract(inside,-normalize(back-vec3(0.,0.,c)),ior);
   vec3 hit=back+outRay*((-.155-lensOrigin.z-back.z)/min(-.015,outRay.z));
   vec4 proj=viewProj*vec4(hit+lensOrigin,1.);vec2 uv=proj.xy/proj.w*.5+.5;return (uv-crop.xy)/crop.zw;
 }
 void main(){
   vec3 p=surf,ray=normalize(p-eye),norm=normalize(p+vec3(0.,0.,c));vec2 uv=traceRay(p,ray,norm,1.514);
   vec2 delta=traceRay(p,ray,norm,1.526)-uv;
   vec3 col=vec3(texture2D(plate,uv-delta*.24).r,texture2D(plate,uv).g,texture2D(plate,uv+delta*.31).b);
   float rho=length(p.xy)/1.015;vec3 refl=reflect(ray,norm);
   float glow=exp(-pow((refl.x+.35)*5.,2.)-pow((refl.y-.61)*9.,2.));
   float pane=pow(max(0.,dot(normalize(vec3(-.30,.31,1.)),refl)),45.);
   float glint=pow(rho,9.)*(.20+.80*pow(max(0.,dot(normalize(p.xy),normalize(vec2(-.64,.78)))),2.));
   col=col*vec3(.983,1.015,.985)+vec3(.85,.98,.86)*(.019*pane+.15*glow+.12*glint);
   gl_FragColor=vec4(col,1.);
   #include <colorspace_fragment>
 }`,
  });
  const glass = mesh(head, g, material);
  glass.renderOrder = 2;
  const opticCam = camera.clone();
  function render(focus, light, time) {
    camera.updateMatrixWorld();
    const size = renderer.getDrawingBufferSize(new T.Vector2()),
      w = size.x,
      h = size.y;
    const centerScreen = pos.clone().project(camera),
      px = pos
        .clone()
        .add(v(1.24, 0, 0))
        .project(camera),
      py = pos
        .clone()
        .add(v(0, 1.24, 0))
        .project(camera);
    const cx = (centerScreen.x + 1) * 0.5,
      cy = (centerScreen.y + 1) * 0.5,
      dx = Math.abs(px.x - centerScreen.x) * 0.5,
      dy = Math.abs(py.y - centerScreen.y) * 0.5;
    if (cx + dx > 0 && cx - dx < 1 && cy + dy > 0 && cy - dy < 1) {
      // Render only the glass's angular field at high sample density. Clamp-free
      // view offsets also cover rays near the edge of the main photograph.
      const sx = Math.max(dx, 0.025) * 1.15,
        sy = Math.max(dy, 0.025) * 1.15;
      U.crop.value.set(cx - sx, cy - sy, 2 * sx, 2 * sy);
      opticCam.copy(camera);
      opticCam.setViewOffset(w, h, (cx - sx) * w, (1 - cy - sy) * h, 2 * sx * w, 2 * sy * h);
      U.eye.value.copy(camera.position).sub(pos);
      U.viewProj.value.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      head.visible = false;
      arm.visible = false;
      renderer.setRenderTarget(rt);
      renderer.render(scene, opticCam);
      renderer.setRenderTarget(null);
      head.visible = true;
      arm.visible = true;
    }
    finish.target.setSize(w, h);
    renderer.setRenderTarget(finish.target);
    renderer.render(scene, camera);
    finish.finish(focus, light, time);
  }
  set(0.63, -0.04);
  return { set, render, pos, head, radius: RIM };
}
