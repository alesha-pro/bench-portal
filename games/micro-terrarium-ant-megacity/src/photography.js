import * as T from 'three';

// A depth-aware macro finish. Neighbour depths provide contact shading beneath
// individual legs and a small circle of confusion away from the focal plane.
import { filmTitles } from './titles.js';
export function photography(renderer, camera) {
  const sensor = new T.WebGLRenderTarget(1, 1, {
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
    samples: 2,
  });
  sensor.texture.colorSpace = T.SRGBColorSpace;
  sensor.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const scene = new T.Scene(),
    ortho = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const u = {
    frame: { value: sensor.texture },
    zMap: { value: sensor.depthTexture },
    px: { value: new T.Vector2() },
    focus: { value: 6 },
    invP: { value: new T.Matrix4() },
    world: { value: new T.Matrix4() },
    light: { value: 0.55 },
  };
  const mat = new T.ShaderMaterial({
    uniforms: u,
    depthTest: false,
    depthWrite: false,
    vertexShader: 'varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader: `
 varying vec2 st;uniform sampler2D frame,zMap;uniform vec2 px;uniform float focus,light;uniform mat4 invP,world;
 float depthAt(vec2 uv){float d=texture2D(zMap,uv).r;return 4.5/(100.-d*99.955);}
 void main(){
   float raw=texture2D(zMap,st).r,z=depthAt(st);
   vec4 wp=invP*vec4(st*2.-1.,raw*2.-1.,1.);vec3 p=(world*vec4(wp.xyz/wp.w,1.)).xyz;
   float blur=clamp(abs(1./max(z,.4)-1./focus)*8.0,0.,4.0);
   vec3 base=texture2D(frame,st).rgb,col=base*.38;float occ=0.;
   for(int i=0;i<8;i++){float a=(float(i)+.3)*.785398;
     vec2 dir=vec2(cos(a),sin(a));vec2 uv=st+dir*px*blur;
     col+=texture2D(frame,uv).rgb*.0775;
     float n=depthAt(st+dir*px*clamp(18./z,2.,9.));
     float delta=z-n;occ+=smoothstep(.007,.063,delta)*(1.-smoothstep(.17,.46,delta));
   }
   col*=1.-occ*.038;
   // Backscatter from the study window sits above the soil line.
   float canopy=smoothstep(1.05,1.58,p.y)*(1.-smoothstep(2.,6.,p.z));
   float shaft=exp(-pow((p.x+.65*p.y+1.18)*1.75,2.))+.34*exp(-pow((p.x+.71*p.y-.27)*4.2,2.));
   col+=vec3(.094,.077,.034)*shaft*canopy*(.5+light);
   float lum=dot(col,vec3(.24,.65,.11));col=mix(vec3(lum),col,1.04);
   col=col/(1.+.13*col)*1.03;
   float vign=smoothstep(.19,.79,length((st-.5)*vec2(1.,.91)));col*=1.-vign*.24;
   float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.545)-.5;
   col+=grain*(.002+.006*sqrt(max(lum,0.)));gl_FragColor=vec4(max(col,0.),1.);
   #include <colorspace_fragment>
 }`,
  });
  const quad = new T.Mesh(new T.PlaneGeometry(2, 2), mat);
  quad.frustumCulled = false;
  scene.add(quad);
  const titles = filmTitles(scene);
  return {
    target: sensor,
    finish(focus, light, time) {
      titles(time);
      u.focus.value = focus;
      u.light.value = light;
      u.invP.value.copy(camera.projectionMatrixInverse);
      u.world.value.copy(camera.matrixWorld);
      u.px.value.set(1 / sensor.width, 1 / sensor.height);
      renderer.setRenderTarget(null);
      renderer.render(scene, ortho);
    },
  };
}
