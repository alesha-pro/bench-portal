import * as T from 'three';
import { shader } from './common.js';

const quadVert =
  'out vec2 v; void main(){v=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}';
function pass(body, uniforms) {
  return shader(quadVert, 'in vec2 v;out vec4 result;' + body, uniforms, {
    depthTest: false,
    depthWrite: false,
  });
}
const target = () => new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType, depthBuffer: false });
export function createPost(renderer) {
  const sceneTarget = target();
  sceneTarget.depthBuffer = true;
  sceneTarget.samples = 2;
  const layers = Array.from({ length: 3 }, () => [target(), target()]);
  const screen = new T.Scene(),
    camera = new T.Camera();
  const surface = new T.Mesh(new T.PlaneGeometry(2, 2));
  screen.add(surface);
  const down = pass(
    `uniform sampler2D src;uniform vec2 stepSize;uniform float extract;
    void main(){vec3 c=vec3(0);for(int i=0;i<4;i++){
      vec2 p=vec2(i%2,i/2)-.5;c+=texture(src,v+p*stepSize).rgb*.25;}
      c*=mix(1.,smoothstep(.34,1.3,max(c.r,max(c.g,c.b))),extract);result=vec4(c,1.);}`,
    { src: {}, stepSize: { value: new T.Vector2() }, extract: { value: 0 } },
  );
  const blur = pass(
    `uniform sampler2D src;uniform vec2 delta;
    void main(){vec3 c=.227027*texture(src,v).rgb;
      c+=.316216*(texture(src,v+delta*1.384615).rgb+texture(src,v-delta*1.384615).rgb);
      c+=.070270*(texture(src,v+delta*3.230769).rgb+texture(src,v-delta*3.230769).rgb);
      result=vec4(c,1.);}`,
    { src: {}, delta: { value: new T.Vector2() } },
  );
  const finish = pass(
    `uniform sampler2D src,b0,b1,b2;
    vec3 srgb(vec3 x){return mix(12.92*x,1.055*pow(max(x,0.),vec3(1./2.4))-.055,step(vec3(.0031308),x));}
    void main(){vec3 c=texture(src,v).rgb+.105*texture(b0,v).rgb+.125*texture(b1,v).rgb+.165*texture(b2,v).rgb;
      c*=1.-.15*pow(length(v-.5)*1.42,2.);c=max(c,vec3(0));
      vec3 mapped=(c*(2.51*c+.03))/(c*(2.43*c+.59)+.14);
      float grain=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5;
      result=vec4(clamp(srgb(mapped)+grain*.007,0.,1.),1.);}`,
    {
      src: { value: sceneTarget.texture },
      b0: { value: layers[0][0].texture },
      b1: { value: layers[1][0].texture },
      b2: { value: layers[2][0].texture },
    },
  );
  function draw(material, destination) {
    surface.material = material;
    renderer.setRenderTarget(destination);
    renderer.render(screen, camera);
  }
  return {
    resize(w, h) {
      sceneTarget.setSize(w, h);
      layers.forEach((pair, i) =>
        pair.forEach((t) => t.setSize(Math.max(1, w >> (i + 2)), Math.max(1, h >> (i + 2)))),
      );
    },
    render(scene, cam) {
      renderer.setRenderTarget(sceneTarget);
      renderer.render(scene, cam);
      let source = sceneTarget;
      layers.forEach(([a, b], i) => {
        down.uniforms.src.value = source.texture;
        down.uniforms.extract.value = Number(i === 0);
        down.uniforms.stepSize.value.set(1 / a.width, 1 / a.height);
        draw(down, a);
        blur.uniforms.src.value = a.texture;
        blur.uniforms.delta.value.set(1.4 / a.width, 0);
        draw(blur, b);
        blur.uniforms.src.value = b.texture;
        blur.uniforms.delta.value.set(0, 1.4 / a.height);
        draw(blur, a);
        source = a;
      });
      draw(finish, null);
    },
  };
}
