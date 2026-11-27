import * as T from "three";
import { group, mesh, rng, curve } from "./craft.js";
import { uniforms } from "./sea.js";

const strikes = [10, 10.43, 14.62, 16.14, 20, 20.53, 21.87, 23.24];
export const pulse = (d) => (d < 0 ? 0 : Math.exp(-d * 10) * (0.69 + 0.31 * Math.cos(37 * d)));
export function strike(t) {
  let flash = 0,
    index = 0;
  strikes.forEach((s, i) => {
    const k = pulse(t - s);
    if (k > flash) {
      flash = k;
      index = i;
    }
  });
  return { flash, index };
}
export function weather(parent) {
  const seed = rng(6482);
  // One bounded volume keeps the scud, anvil and narrow spiral in the shoulder
  // continuous when the viewer orbits. The tileable noise stays in bottle space.
  const dim = 40,
    texels = Uint8Array.from({ length: dim ** 3 }, () => seed() * 256);
  const volume = new T.Data3DTexture(texels, dim, dim, dim);
  volume.format = T.RedFormat;
  volume.wrapS = volume.wrapT = volume.wrapR = T.RepeatWrapping;
  volume.magFilter = volume.minFilter = T.LinearFilter;
  volume.unpackAlignment = 1;
  volume.needsUpdate = true;
  const lo = new T.Vector3(-2.99, -0.07, -1.19),
    hi = new T.Vector3(2.55, 1.37, 0.32);
  const bank = mesh(
    parent,
    new T.BoxGeometry(hi.x - lo.x, hi.y - lo.y, hi.z - lo.z).translate(
      (hi.x + lo.x) / 2,
      (hi.y + lo.y) / 2,
      (hi.z + lo.z) / 2,
    ),
    new T.ShaderMaterial({
      uniforms: { ...uniforms, grain: { value: volume }, lo: { value: lo }, hi: { value: hi } },
      transparent: true,
      depthWrite: false,
      side: T.BackSide,
      vertexShader: `varying vec3 point,eye;void main(){point=position;eye=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `precision highp sampler3D;
    varying vec3 point,eye;uniform sampler3D grain;uniform vec3 lo,hi;uniform float clock,storm,flash;
    float billow(vec3 p){
      vec3 q=p*vec3(3.4,4.9,3.8)/40.;
      return texture(grain,q).r*.53+texture(grain,q*2.07+.16).r*.29+texture(grain,q*4.31-.24).r*.18;
    }
    float density(vec3 p){
      float neck=smoothstep(.65,2.30,p.x);
      float center=mix(.89+.075*sin(2.1*p.x-clock*.35),.15,neck);
      vec2 core=p.yz-vec2(center,mix(-.40,-.06,neck));
      float a=.66*sin(p.x*1.7-clock*.58)+p.x*.49;
      vec2 turn=mat2(cos(a),-sin(a),sin(a),cos(a))*core;
      vec3 flow=vec3(p.x-clock*(.073+.095*storm),turn.x,turn.y);
      float n=billow(flow+vec3(.28*sin(flow.z*3.+clock*.39),0.,.19*cos(flow.x*3.2)));
      float lobes=.5+.5*cos(3.83*p.x+1.1*sin(1.73*p.x+clock*.27)-clock*.22);
      core.x+=.075*lobes*(1.-neck);
      float depth=length(core/vec2(mix(.17+.12*lobes+.105*storm,.14,neck),mix(.37+.20*lobes,.17,neck)));
      float ends=smoothstep(-2.97,-2.20,p.x)*(1.-smoothstep(2.10,2.53,p.x));
      // Backlit lower bank tears away in wisps beneath the denser shelf.
      float shelf=max(0.,1.-depth+(n-.48)*2.6);
      vec2 lower=core-vec2(-.22-.105*sin(3.4*p.x+clock*.55),.19+.08*sin(3.2*p.x));
      float scud=max(0.,1.-length(lower/vec2(.11,.22))+(n-.55)*2.7);
      float breaks=smoothstep(.14,.76,lobes)*(1.-neck);
      return clamp((shelf+scud*breaks*storm)*ends,0.,1.)*(.19+.97*storm);
    }
    void main(){
      vec3 dir=normalize(point-eye),a=(lo-eye)/dir,b=(hi-eye)/dir;
      vec3 nearT=min(a,b),farT=max(a,b);float start=max(0.,max(nearT.x,max(nearT.y,nearT.z)));
      float stop=min(farT.x,min(farT.y,farT.z)),stepLen=(stop-start)/24.;
      vec3 sum=vec3(0.);float trans=1.;
      for(int i=0;i<24;i++){
        vec3 p=eye+dir*(start+(float(i)+.5)*stepLen);
        float d=density(p);if(d<.008)continue;
        float rim=clamp(.53+(d-density(p+vec3(-.10,.095,-.09)))*2.3,0.,1.);
        vec3 c=mix(vec3(.018,.039,.058),vec3(.21,.29,.31),rim*rim);
        c*=1.-.53*clamp(density(p+vec3(-.22,.19,-.16)),0.,1.);
        c+=flash*vec3(.47,.68,1.)*(.47+rim)*exp(-.28*abs(p.x-.31));
        float a=1.-exp(-5.2*d*stepLen);
        sum+=trans*a*c;trans*=1.-a;if(trans<.025)break;
      }
      if(trans>.996)discard;gl_FragColor=vec4(sum/max(1.-trans,.001),1.-trans);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
    }),
  );
  bank.castShadow = false;
  bank.renderOrder = 2;
  const bolts = group(parent);
  function bolt(x, y, z, ex, ey, ez, steps, rad, depth) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const u = i / steps,
        s = Math.sin(Math.PI * u);
      pts.push([
        x + (ex - x) * u + s * (seed() - 0.5) * 0.16,
        y + (ey - y) * u + s * (seed() - 0.5) * 0.055,
        z + (ez - z) * u + s * (seed() - 0.5) * 0.12,
      ]);
    }
    const mat = new T.MeshBasicMaterial({
      color: new T.Color(2.8, 4.9, 6.8),
      transparent: true,
      depthWrite: false,
    });
    const b = curve(bolts, pts, rad, mat, steps * 2, 5);
    b.castShadow = false;
    b.renderOrder = 4;
    if (rad >= 0.0055) {
      const halo = curve(
        bolts,
        pts,
        rad * 3.4,
        new T.MeshBasicMaterial({
          color: new T.Color(0.29, 0.6, 1.5),
          transparent: true,
          depthWrite: false,
          blending: T.AdditiveBlending,
        }),
        steps * 2,
        6,
      );
      halo.userData.halo = true;
      halo.renderOrder = 3;
      halo.castShadow = false;
    }
    if (depth)
      for (const i of [Math.floor(steps * 0.28), Math.floor(steps * 0.58), Math.floor(steps * 0.78)]) {
        const [bx, by, bz] = pts[i];
        bolt(
          bx,
          by,
          bz,
          bx + (seed() - 0.5) * 0.57,
          by - 0.2 - seed() * 0.3,
          bz + 0.08,
          5,
          rad * 0.47,
          depth - 1,
        );
      }
    return pts;
  }
  const trunk = bolt(0.42, 1.1, -0.4, 0.74, -0.32, -0.19, 13, 0.01, 2);
  bolt(-2.04, 0.93, -0.45, -2.36, -0.34, -0.1, 11, 0.006, 1);
  const point = new T.PointLight(0xacdfff, 0, 6, 2);
  point.position.set(-0.1, 0.9, -0.23);
  parent.add(point);
  bolt(...trunk[4], 1.84, 0.44, -0.15, 14, 0.0055, 1);
  return (t, f, index) => {
    bolts.visible = f > 0.033;
    bolts.position.x = 0.16 * Math.sin(index * 2.6);
    bolts.scale.x = index % 2 ? -0.77 : 1;
    bolts.children.forEach((b, i) => {
      b.material.opacity =
        (b.userData.halo ? 0.15 : 1) * Math.min(1, f * (1.3 + 0.6 * Math.cos(i * 0.43 + 12 * t)));
    });
    point.position.x = bolts.position.x + 0.42 * bolts.scale.x;
    point.intensity = 9.4 * f;
  };
}
