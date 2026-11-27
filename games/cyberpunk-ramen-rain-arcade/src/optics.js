import * as T from "three";
import { FullScreenQuad } from "three/addons/postprocessing/Pass.js";
const vert = "varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}";
function pass(uniforms, frag) {
  return new T.ShaderMaterial({
    uniforms,
    vertexShader: vert,
    fragmentShader: "varying vec2 st;" + frag,
    depthTest: false,
    depthWrite: false,
  });
}
export function optics(renderer) {
  const frame = new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType, samples: 0 });
  const levels = Array.from(
    { length: 5 },
    () => new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType, depthBuffer: false }),
  );
  const down = pass(
    { src: { value: null }, one: { value: new T.Vector2() }, first: { value: 1 } },
    `uniform sampler2D src;uniform vec2 one;uniform float first;
 void main(){vec3 c=texture2D(src,st).rgb*4.;c+=texture2D(src,st+one).rgb+texture2D(src,st-one).rgb+texture2D(src,st+one*vec2(1,-1)).rgb+texture2D(src,st+one*vec2(-1,1)).rgb;c*=.125;float lum=max(c.r,max(c.g,c.b));c*=mix(1.,smoothstep(.26,1.13,lum),first);gl_FragColor=vec4(c,1.);}`,
  );
  const finish = pass(
    {
      src: { value: frame.texture },
      l0: { value: levels[0].texture },
      l1: { value: levels[1].texture },
      l2: { value: levels[2].texture },
      l3: { value: levels[3].texture },
      l4: { value: levels[4].texture },
      one: { value: new T.Vector2() },
      clock: { value: 0 },
    },
    `
 uniform sampler2D src,l0,l1,l2,l3,l4;uniform vec2 one;uniform float clock;
 void main(){vec3 c=texture2D(src,st).rgb;
 vec3 n=texture2D(src,st+one*vec2(0,1)).rgb,s=texture2D(src,st-one*vec2(0,1)).rgb,e=texture2D(src,st+vec2(one.x,0)).rgb,w=texture2D(src,st-vec2(one.x,0)).rgb;
 vec3 avg=(n+s+e+w)*.25;float edges=length(n-s)+length(e-w);c=mix(c,avg,.23*smoothstep(.11,.9,edges));
 vec3 glow=.13*texture2D(l0,st).rgb+.15*texture2D(l1,st).rgb+.21*texture2D(l2,st).rgb+.26*texture2D(l3,st).rgb+.25*texture2D(l4,st).rgb;
 c+=glow*.69;float vignette=1.-.22*pow(min(1.,length((st-.5)*1.47)),2.);c*=vignette*1.12;
 c=(c*(2.51*c+.03))/(c*(2.43*c+.59)+.14);c=pow(clamp(c,0.,1.),vec3(1./2.2));
 float grain=fract(sin(dot(mod(gl_FragCoord.xy,256.)+floor(clock*24.),vec2(12.9898,78.233)))*43758.5453)-.5;
 gl_FragColor=vec4(clamp(c+grain*.018,0.,1.),1.);}`,
  );
  const quad = new FullScreenQuad(down);
  return {
    size(w, h) {
      frame.setSize(w, h);
      levels.forEach((r, i) =>
        r.setSize(Math.max(2, Math.round(w / 2 ** (i + 1))), Math.max(2, Math.round(h / 2 ** (i + 1)))),
      );
      finish.uniforms.one.value.set(1 / w, 1 / h);
    },
    render(scene, camera, t) {
      renderer.setRenderTarget(frame);
      renderer.render(scene, camera);
      let prev = frame;
      quad.material = down;
      levels.forEach((r, i) => {
        down.uniforms.src.value = prev.texture;
        down.uniforms.one.value.set(1.45 / prev.width, 1.45 / prev.height);
        down.uniforms.first.value = i === 0 ? 1 : 0;
        renderer.setRenderTarget(r);
        quad.render(renderer);
        prev = r;
      });
      quad.material = finish;
      finish.uniforms.clock.value = t;
      renderer.setRenderTarget(null);
      quad.render(renderer);
    },
  };
}
