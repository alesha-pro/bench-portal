import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export class PostFX {
  constructor(renderer, scene, camera) {
    this.scene = scene;
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.43, 0.52, 1.15);
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass({
      uniforms: { tDiffuse: { value: null }, time: { value: 0 }, damage: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: `uniform sampler2D tDiffuse; uniform float time; uniform float damage; varying vec2 vUv;
        float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
        void main(){
          vec2 p=vUv-.5; float r=dot(p,p);
          vec2 aberration=p*r*(.0015+damage*.006);
          vec3 c=vec3(texture2D(tDiffuse,vUv+aberration).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-aberration).b);
          c*=1.-smoothstep(.12,.7,r)*.36;
          c+=vec3(.008,.013,.016)*(1.-clamp(max(c.r,max(c.g,c.b)),0.,1.));
          c+=(hash(vUv*1700.+fract(time)*100.)-.5)*.007;
          gl_FragColor=vec4(c,1.);
        }`
    });
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());
  }
  render(time, damage = 0) {
    this.grade.uniforms.time.value = time;
    this.grade.uniforms.damage.value = damage;
    this.scene.traverse(o => { if(o.material?.uniforms?.uTime) o.material.uniforms.uTime.value = time; });
    this.composer.render();
  }
  resize(w, h) { this.composer.setSize(w, h); }
}
