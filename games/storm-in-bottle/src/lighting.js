import * as T from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";

export async function lighting(scene, renderer) {
  const backdrop = await new T.TextureLoader().loadAsync("assets/study.jpg");
  backdrop.colorSpace = T.SRGBColorSpace;
  const bg = new T.Mesh(
    new T.CylinderGeometry(24, 24, 25, 112, 1, true),
    new T.ShaderMaterial({
      side: T.BackSide,
      depthWrite: false,
      uniforms: { study: { value: backdrop } },
      vertexShader: `varying vec3 pt;void main(){pt=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `varying vec3 pt;uniform sampler2D study;void main(){float a=atan(pt.x,-pt.z);float u=acos(cos(a*2.18+1.26))/3.14159;float v=clamp(.48+pt.y*.048,0.,1.);vec3 c=texture2D(study,vec2(u,v)).rgb;gl_FragColor=vec4(c*.80+vec3(.013,.020,.020),1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,
    }),
  );
  bg.position.y = 4;
  bg.renderOrder = -5;
  scene.add(bg);
  scene.background = new T.Color(0x202b2b);
  const studio = await new HDRLoader().loadAsync("assets/studio.hdr");
  studio.mapping = T.EquirectangularReflectionMapping;
  studio.wrapS = T.RepeatWrapping;
  scene.environment = studio;
  scene.environmentIntensity = 0.55;
  scene.environmentRotation.y = 0.74;
  scene.add(new T.HemisphereLight(0xabccd7, 0x573820, 0.56));
  const moon = new T.DirectionalLight(0xaacfdc, 1.75);
  moon.position.set(-4, 6, -3);
  moon.castShadow = true;
  moon.shadow.mapSize.set(2048, 2048);
  Object.assign(moon.shadow.camera, {
    left: -6.6,
    right: 6.6,
    top: 5.5,
    bottom: -5.5,
    near: 0.2,
    far: 20,
  });
  moon.shadow.normalBias = 0.014;
  moon.shadow.bias = -0.00025;
  moon.shadow.radius = 2.5;
  scene.add(moon);
  const key = new T.DirectionalLight(0xffdaa8, 1.26);
  key.position.set(-2.6, 5.8, 4.3);
  scene.add(key);
  const rim = new T.DirectionalLight(0xffb572, 0.94);
  rim.position.set(4.2, 2.4, -2.2);
  scene.add(rim);
  return { backdrop, studio };
}
