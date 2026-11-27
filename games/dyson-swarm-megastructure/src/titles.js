import * as T from 'three';
import { shader } from './common.js';

// An alpha plate composited after the film curve stays legible as exposure changes.
export function openingTitle(renderer) {
  const plate = document.createElement('canvas');
  plate.width = 1080;
  plate.height = 320;
  const g = plate.getContext('2d');
  g.scale(2, 2);
  g.shadowColor = '#050708';
  g.shadowBlur = 8;
  g.fillStyle = '#d7b988';
  g.fillRect(4, 19, 25, 1);
  g.font = '11px monospace';
  g.letterSpacing = '2px';
  g.fillText('HELIOGRAPH OBSERVATORY', 43, 23);
  g.letterSpacing = '-2px';
  g.fillStyle = '#f1eade';
  g.font = '56px Georgia, serif';
  g.fillText('Dyson Swarm', 1, 86);
  g.letterSpacing = '0px';
  g.fillStyle = '#e0c7a7';
  g.font = 'italic 24px Georgia, serif';
  g.fillText('Harvesting a Dying Star', 4, 124);
  const texture = new T.CanvasTexture(plate);
  const m = shader(
    `out vec2 coord;uniform float aspect;
    void main(){coord=uv;vec2 xy=vec2(-1.+.081/aspect,1.-.095);
    xy+=vec2(uv.x*1.29/aspect,-(1.-uv.y)*.38222);gl_Position=vec4(xy,0.,1.);}`,
    `in vec2 coord;out vec4 f;uniform sampler2D plate;uniform float opacity;
    void main(){vec4 c=texture(plate,coord);f=vec4(c.rgb,c.a*opacity);}`,
    { aspect: { value: 1 }, plate: { value: texture }, opacity: { value: 1 } },
    { depthWrite: false, depthTest: false, transparent: true },
  );
  const scene = new T.Scene(),
    cam = new T.Camera(),
    mesh = new T.Mesh(new T.PlaneGeometry(2, 2), m);
  mesh.frustumCulled = false;
  scene.add(mesh);
  return (t, aspect) => {
    if (t <= 0.3 || t >= 5.05) return;
    m.uniforms.opacity.value =
      T.MathUtils.smoothstep(t, 0.3, 1.38) * (1 - T.MathUtils.smoothstep(t, 3.63, 5.05));
    m.uniforms.aspect.value = aspect;
    renderer.autoClear = false;
    renderer.render(scene, cam);
    renderer.autoClear = true;
  };
}
