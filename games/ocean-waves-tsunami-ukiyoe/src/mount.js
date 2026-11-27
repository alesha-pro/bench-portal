import * as T from 'three';
import { tide } from './ocean.js';

// A cut edge for the relief. Its upper row follows the waves, while the
// rebated cedar and its brass inlay stay level under the impression.
export function mount(scene) {
  const positions = [],
    indices = [],
    width = 44,
    front = 11.8,
    back = -21;
  function side(x0, z0, x1, z1) {
    const base = positions.length / 3,
      n = 135;
    for (let i = 0; i <= n; i++) {
      const u = i / n,
        x = x0 + (x1 - x0) * u,
        z = z0 + (z1 - z0) * u;
      positions.push(x, 0, z, x, -0.85, z);
      let k = base + i * 2;
      if (i < n) indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  side(-width / 2, front, width / 2, front);
  side(-width / 2, back, -width / 2, front);
  side(width / 2, front, width / 2, back);
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  g.setIndex(indices);
  const cut = new T.ShaderMaterial({
    side: T.DoubleSide,
    uniforms: tide,
    vertexShader: `uniform float clock;varying float deep;
 void main(){vec3 p=position;deep=-p.y;
 if(p.y>-.1)p.y+=-.03+.24*sin(.62*p.x+.77*p.z+clock*.68)+.18*sin(.35*p.x-.99*p.z+clock*.77)+.12*cos(1.26*p.z-.27*p.x+clock*.87)+.09*sin(1.7*p.x+.37*p.z+clock*1.15);
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
    fragmentShader: `varying float deep;uniform float night;void main(){vec3 c=mix(vec3(.17,.32,.40),vec3(.08,.18,.23),deep);gl_FragColor=vec4(c*(1.-.35*night),1.);}`
  });
  scene.add(new T.Mesh(g, cut));
  const wood = new T.ShaderMaterial({
    uniforms: tide,
    vertexShader: `varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `varying vec3 p;uniform float night;void main(){
 float grain=sin(p.y*90.+sin(p.x*.92+p.z*.54)*2.+sin(p.x*2.4+p.z*.7));
 vec3 c=mix(vec3(.183,.106,.090),vec3(.295,.181,.121),smoothstep(-.82,.78,grain)*.67);
 c=mix(c,vec3(.63,.46,.26),.85*(1.-smoothstep(.008,.022,abs(p.y-.15))));
 gl_FragColor=vec4(c*(1.-.37*night),1.);}`
  });
  const slab = new T.Mesh(new T.BoxGeometry(width + 0.19, 0.55, front - back + 0.2), wood);
  slab.position.set(0, -1.06, (front + back) / 2);
  scene.add(slab);
}
