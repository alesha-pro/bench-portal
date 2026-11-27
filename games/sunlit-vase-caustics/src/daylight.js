import * as THREE from "three";
import { Pass, FullScreenQuad } from "three/addons/postprocessing/Pass.js";

const vertex =
  "varying vec2 coord;void main(){coord=uv;gl_Position=vec4(position.xy,0.,1.);}";

// Integrate single scattering only along the visible camera segment. The same
// shadow map lights the surfaces, the airborne dust and the participating medium.
export class Sunbeams extends Pass {
  constructor(camera, sun, roomDepth) {
    super();
    this.sun = sun;
    this.camera = camera;
    this.target = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      depthBuffer: false,
    });
    this.scatter = new FullScreenQuad(
      new THREE.ShaderMaterial({
        depthTest: false,
        depthWrite: false,
        uniforms: {
          sceneDepth: roomDepth,
          shadowDepth: { value: null },
          shadowProjection: { value: sun.shadow.matrix },
          cameraWorld: { value: camera.matrixWorld },
          inverseProjection: { value: camera.projectionMatrixInverse },
          radiance: { value: new THREE.Color() },
          sunDirection: { value: new THREE.Vector3() },
        },
        vertexShader: vertex,
        fragmentShader: /* glsl */ `
        varying vec2 coord;uniform sampler2D sceneDepth;uniform highp sampler2DShadow shadowDepth;
        uniform mat4 inverseProjection,cameraWorld,shadowProjection;
        uniform vec3 radiance,sunDirection;
        void main(){
          float depth=texture2D(sceneDepth,coord).r;
          vec4 eye=inverseProjection*vec4(coord*2.-1.,depth*2.-1.,1.);
          vec3 origin=cameraWorld[3].xyz,ray=(mat3(cameraWorld)*eye.xyz)/eye.w;
          float end=min(length(ray),15.);ray=normalize(ray);
          // Clip the integration to the apartment between the viewer and window.
          float begin=max(0.,(3.6-origin.z)/min(ray.z,-.001));
          end=min(end,(-3.08-origin.z)/min(ray.z,-.001));
          float stepLen=max(0.,end-begin)/72.;
          float jitter=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));
          vec3 p=origin+ray*(begin+stepLen*jitter);
          vec3 shadow=(shadowProjection*vec4(p,1.)).xyz;
          vec3 ds=(shadowProjection*vec4(ray*stepLen,0.)).xyz;
          float light=0.;
          for(int i=0;i<72;i++){
            float vis=texture(shadowDepth,vec3(shadow.xy,shadow.z-.00016));
            vec2 aperture=(p+sunDirection*((-3.15-p.z)/min(sunDirection.z,-.01))).xy;
            vec2 edge=vec2(2.60,2.06)-abs(aperture-vec2(-3.55,2.75));
            float window=smoothstep(-.045,.045,min(edge.x,edge.y));
            // Denser dust hangs just inside the open casement. An extended
            // low-density tail keeps beams continuous into the room.
            float veil=exp(-.84*(p.z+1.25)*(p.z+1.25));
            float air=.91+.09*sin(1.5*p.y+.83*p.x+sin(1.17*p.z));
            float density=(.26+1.64*veil)*air*exp(-.075*max(0.,p.y));
            light+=vis*window*density*stepLen;
            p+=ray*stepLen;shadow+=ds;
          }
          float phase=.38+.95*pow(max(0.,dot(ray,sunDirection)),5.);
          gl_FragColor=vec4(radiance*light*phase,end);
        }`,
      }),
    );
    this.combine = new FullScreenQuad(
      new THREE.ShaderMaterial({
        depthTest: false,
        depthWrite: false,
        uniforms: {
          sceneColor: { value: null },
          lightVolume: { value: this.target.texture },
          sceneDepth: roomDepth,
          inverseProjection: { value: camera.projectionMatrixInverse },
          texel: { value: new THREE.Vector2() },
        },
        vertexShader: vertex,
        fragmentShader: `varying vec2 coord;uniform sampler2D sceneColor,lightVolume,sceneDepth;
        uniform mat4 inverseProjection;uniform vec2 texel;
        void main(){vec3 scene=texture2D(sceneColor,coord).rgb;
          float depth=texture2D(sceneDepth,coord).r;
          vec4 eye=inverseProjection*vec4(coord*2.-1.,depth*2.-1.,1.);
          vec3 center=eye.xyz/eye.w;
          vec3 normal=normalize(cross(dFdx(center),dFdy(center)));
          float ao=0.;vec2 screenRadius=vec2(.105,.105*texel.y/texel.x)/max(1.,-center.z);
          for(int j=0;j<16;j++){
            float a=float(j)*2.39996,r=sqrt((float(j)+.6)/16.);
            vec2 uv=coord+screenRadius*r*vec2(cos(a),sin(a));
            float z=texture2D(sceneDepth,uv).r;
            vec4 sampleEye=inverseProjection*vec4(uv*2.-1.,z*2.-1.,1.);
            vec3 delta=sampleEye.xyz/sampleEye.w-center;
            float dist=length(delta);
            ao+=max(0.,dot(normal,delta)/max(.001,dist)-.10)*(1.-smoothstep(.045,.55,dist));
          }
          scene*=1.-min(.46,ao*.15);
          float range=length(center); vec3 light=vec3(0.);float weights=0.;
          for(int i=0;i<4;i++){vec2 offset=vec2(i%2,i/2)-.5;vec4 v=texture2D(lightVolume,coord+offset*texel);
            float w=1./(1.+12.*max(0.,v.a-range));light+=v.rgb*w;weights+=w;}
          gl_FragColor=vec4(scene+light/weights,1.);}`,
      }),
    );
  }
  setSize(w, h) {
    this.target.setSize(Math.ceil(w / 2), Math.ceil(h / 2));
    this.combine.material.uniforms.texel.value.set(
      1 / this.target.width,
      1 / this.target.height,
    );
  }
  render(renderer, write, read) {
    const u = this.scatter.material.uniforms;
    u.sunDirection.value.copy(this.sun.position).normalize();
    u.radiance.value
      .copy(this.sun.color)
      .multiplyScalar(this.sun.intensity * 0.074);
    u.shadowDepth.value = this.sun.shadow.map.depthTexture;
    renderer.setRenderTarget(this.target);
    this.scatter.render(renderer);
    this.combine.material.uniforms.sceneColor.value = read.texture;
    renderer.setRenderTarget(write);
    this.combine.render(renderer);
  }
}
