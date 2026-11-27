import { T, V } from './craft.js';
export function lightCavern(scene, renderer, backdrop) {
  const hemi = new T.HemisphereLight(0xd7eef6, 0x45675c, 0.62);
  scene.add(hemi);
  const sun = new T.DirectionalLight(0xffe3af, 2.75);
  sun.position.set(-3.7, 7.9, 1.3);
  sun.target.position.set(0.45, 0, 0.12);
  scene.add(sun, sun.target);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 0.1, far: 22 });
  sun.shadow.bias = -0.00034;
  sun.shadow.normalBias = 0.012;
  sun.shadow.radius = 3;
  const rim = new T.DirectionalLight(0x71d8e6, 1.08);
  rim.position.set(3, 3, -5);
  scene.add(rim);
  const fill = new T.DirectionalLight(0xb3c5e3, 0.23);
  fill.position.set(2, 2, 6);
  scene.add(fill);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;
  const w = 512,
    h = 256,
    can = document.createElement('canvas');
  can.width = w;
  can.height = h;
  const cx = can.getContext('2d', { willReadFrequently: true });
  cx.drawImage(backdrop.image, 0, 0, w, h);
  const pix = cx.getImageData(0, 0, w, h).data,
    values = new Float32Array(w * h * 4);
  for (let j = 0; j < h; j++)
    for (let i = 0; i < w; i++) {
      const u = i / w,
        v = j / h,
        ix = 4 * ((h - 1 - j) * w + i),
        k = 4 * (j * w + i);
      const sky = Math.exp(-(((u - 0.22) / 0.17) ** 2 + ((v - 0.79) / 0.067) ** 2));
      const strip = Math.exp(-(((u - 0.69) / 0.22) ** 2 + ((v - 0.54) / 0.025) ** 2));
      const lobe = Math.exp(-(((u - 0.85) / 0.055) ** 2 + ((v - 0.64) / 0.17) ** 2));
      for (let c = 0; c < 3; c++)
        values[k + c] =
          0.08 +
          0.85 * (pix[ix + c] / 255) ** 2.2 +
          sky * [5.8, 5.6, 3.9][c] +
          strip * [2.1, 2.7, 2.25][c] +
          lobe * [1.3, 1.5, 1.4][c];
      values[k + 3] = 1;
    }
  const tex = new T.DataTexture(values, w, h, T.RGBAFormat, T.FloatType);
  tex.mapping = T.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  const pmrem = new T.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(tex);
  scene.environment = env.texture;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();
  tex.dispose();
  return { sun, hemi };
}
export function projectCaustics(scene, caustic, clock, power) {
  scene.traverse((o) => {
    if (!o.userData.farwall) return;
    o.material.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, { causticsMap: { value: caustic }, opticTime: clock, beamPower: power });
      sh.vertexShader =
        'varying vec3 wallP;\n' +
        sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nwallP=position;');
      sh.fragmentShader =
        'varying vec3 wallP;uniform sampler2D causticsMap;uniform float opticTime,beamPower;\n' +
        sh.fragmentShader.replace(
          '#include <opaque_fragment>',
          `
 vec2 coords=vec2(atan(wallP.x,wallP.z)*4.,wallP.y*.32);
 float network=texture2D(causticsMap,coords+vec2(.007,-.006)*opticTime).r;
 outgoingLight*=.89+.11*beamPower;
 outgoingLight+=diffuseColor.rgb*pow(network,2.)*.60*beamPower;
 #include <opaque_fragment>`,
        );
    };
  });
  const materials = new Set();
  scene.traverse((o) => {
    if (o.material?.isMeshStandardMaterial) materials.add(o.material);
  });
  for (const material of materials) {
    const ground = material === scene.userData.sand;
    material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, { causticsMap: { value: caustic }, opticTime: clock, beamPower: power });
      shader.vertexShader =
        'varying vec3 cpWorld;\n' +
        shader.vertexShader.replace(
          '#include <project_vertex>',
          `#include <project_vertex>
 vec4 cp=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 cp=instanceMatrix*cp;
 #endif
 cpWorld=(modelMatrix*cp).xyz;`,
        );
      shader.fragmentShader =
        'varying vec3 cpWorld; uniform sampler2D causticsMap; uniform float opticTime,beamPower;\n' +
        shader.fragmentShader.replace(
          '#include <opaque_fragment>',
          `
 vec2 stream=cpWorld.xz+vec2(.52,.31)*cpWorld.y;
 vec2 uvC=stream*vec2(.31,.34);uvC+=.028*vec2(sin(stream.y*.75+opticTime*.27),cos(stream.x*.82-opticTime*.30));
 float c1=texture2D(causticsMap,uvC+vec2(.012,-.008)*opticTime).r;
 float c2=texture2D(causticsMap,uvC*1.32+vec2(-.008,.007)*opticTime+vec2(.49,.21)).r;
 float poolLight=.38+.62*exp(-.030*dot(stream-vec2(.9,-.3),stream-vec2(.9,-.3)));
 float fleck=(pow(c1,1.65)*1.15+pow(c2,2.)*.54)*poolLight;
 ${
   ground
     ? `float ao=1.-.80*exp(-pow((cpWorld.x+.12)/1.72,2.)-pow((cpWorld.z+.39)/2.07,2.));
 ao*=1.-.26*exp(-length((cpWorld.xz-vec2(1.40,1.02))*vec2(3.,2.)));
 ao*=1.-.26*exp(-length((cpWorld.xz-vec2(-1.40,1.02))*vec2(3.,2.)));outgoingLight*=ao*(.30+.70*poolLight);fleck*=ao;`
     : ''
 }
 outgoingLight+= (diffuseColor.rgb*vec3(.85,1.06,.73)+vec3(.008,.016,.012))*fleck*beamPower*1.42;
 #include <opaque_fragment>`,
        );
      if (material.userData.fish) {
        shader.vertexShader =
          'uniform float opticTime;\n' +
          shader.vertexShader.replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
 float flex=smoothstep(.08,.31,-position.x);
 transformed.z+=flex*.046*sin(opticTime*9.2+position.x*17.+instanceMatrix[3].x*2.7);`,
          );
      }
    };
    material.customProgramCacheKey = () =>
      ground ? 'sand-caustics' : material.userData.fish ? 'fish-caustics' : 'object-caustics';
  }
}
const quadV = `varying vec2 uvP;void main(){uvP=uv;gl_Position=vec4(position.xy,0.,1.);}`;
export function optics(renderer, caustic) {
  const world = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    samples: 2,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
  });
  world.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const composite = new T.WebGLRenderTarget(1, 1, { depthBuffer: false });
  const cam = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1),
    pp = new T.Scene(),
    display = new T.Scene(),
    plane = new T.PlaneGeometry(2, 2);
  const U = {
    frame: { value: world.texture },
    depthMap: { value: world.depthTexture },
    field: { value: caustic },
    invPV: { value: new T.Matrix4() },
    eye: { value: V(0, 0, 0) },
    time: { value: 0 },
    strength: { value: 1 },
    tint: { value: 0.5 },
    px: { value: new T.Vector2(1, 1) },
    filmFade: { value: 1 },
    opening: { value: 0 },
    focus: { value: 7 },
    lens: { value: 1 },
  };
  const m = new T.ShaderMaterial({
    depthWrite: false,
    depthTest: false,
    uniforms: U,
    vertexShader: quadV,
    fragmentShader: `
 precision highp float;varying vec2 uvP;uniform sampler2D frame,depthMap,field;uniform mat4 invPV;uniform vec3 eye;uniform vec2 px;
 uniform float time,strength,tint,filmFade,focus,lens,opening;
 float hash(vec2 s){return fract(52.9829189*fract(dot(s,vec2(.06711056,.00583715))));}
 vec3 linearToDisplay(vec3 x){x=max(vec3(0.),x);return mix(12.92*x,1.055*pow(x,vec3(.416667))-.055,step(vec3(.0031308),x));}
 void main(){
 vec2 uv=uvP;vec3 base=texture2D(frame,uv).rgb;
 float depth=texture2D(depthMap,uv).r;vec4 hit=invPV*vec4(uv*2.-1.,depth*2.-1.,1.);vec3 worldPos=hit.xyz/hit.w;
 vec3 rd=normalize(worldPos-eye);float dist=min(length(worldPos-eye),34.);
 // Thin-lens gather, resolving film focus before forward scattering.
 float blur=min(8.,abs(dist-focus)/max(dist,1.)*lens)*px.y*850.;
 if(blur>.38){vec3 sum=base*2.;float ww=2.;for(int k=0;k<13;k++){
 float a=float(k)*2.39996;vec2 off=vec2(cos(a),sin(a))*sqrt((float(k)+.5)/13.)*blur*px;
 float dz=texture2D(depthMap,uv+off).r;float keep=dz+.0018<depth?.12:1.;
 sum+=texture2D(frame,uv+off).rgb*keep;ww+=keep;}base=sum/ww;}
 // Integrate scattering only through illuminated columns before the first surface.
 vec3 scatter=vec3(0.);float travel=min(dist,18.),stepLen=travel/52.;
 float jit=.45+.10*hash(gl_FragCoord.xy);
 for(int i=0;i<52;i++){
 float d=(float(i)+jit)*stepLen;vec3 p=eye+rd*d;
 vec2 q=p.xz+vec2(.60,.34)*p.y-vec2(.44,-.42);
 float broad=exp(-dot(q*vec2(.37,.56),q*vec2(.37,.56)));
 float gold=exp(-dot((q-vec2(-.7,.35))*vec2(.50,.64),(q-vec2(-.7,.35))*vec2(.50,.64)));
 float ripple=texture2D(field,q*.155+vec2(.015*sin(time*.25+q.y*.8),time*.003)).r;
 float strips=.5+.5*cos(q.x*9.4-q.y*4.+1.65*sin(q.y*1.20+q.x*.24)+.48*sin(time*.42+q.y*1.5));
 float threads=.06+1.25*pow(strips,7.)+.95*ripple*ripple;
 float heightGate=smoothstep(-.3,1.75,p.y);float decay=exp(-d*.068);
 scatter+=stepLen*heightGate*broad*threads*decay*mix(vec3(.018,.116,.122),vec3(.39,.288,.135),gold*.83);
 }
 vec3 water=vec3(.009,.071,.089);float density=mix(.026,.115,tint);
 vec3 trans=exp(-min(dist,13.)*density*vec3(1.47,.77,.56));
 base=base*trans+water*(1.-trans);
 base+=scatter*strength*(1.10+.36*tint);
 // A small four-tap halation only around bright surfaces and gilt edges.
 vec3 glow=vec3(0.);for(int j=0;j<4;j++){float a=float(j)*1.571;glow+=max(texture2D(frame,uv+px*3.2*vec2(cos(a),sin(a))).rgb-1.4,0.);}
 base+=glow*.025;
 base*=vec3(.84,.89,.97);base=max(vec3(0.),base-.006);base*=1.-.26*pow(length((uv-.5)*vec2(1.,.91))*1.43,1.75);
 base=(base*(2.51*base+.03))/(base*(2.43*base+.59)+.14);
 vec3 c=linearToDisplay(clamp(base,0.,1.));c+=(hash(gl_FragCoord.xy+fract(time)*93.)-.5)*.010;
 c*=1.-opening*.49*exp(-dot((uv-vec2(.17,.12))*vec2(2.9,5.3),(uv-vec2(.17,.12))*vec2(2.9,5.3)));gl_FragColor=vec4(c*filmFade,1.);
 }`,
  });
  pp.add(new T.Mesh(plane, m));
  display.add(
    new T.Mesh(
      plane,
      new T.ShaderMaterial({
        depthTest: false,
        depthWrite: false,
        uniforms: { frame: { value: composite.texture } },
        vertexShader: quadV,
        fragmentShader:
          'varying vec2 uvP;uniform sampler2D frame;void main(){gl_FragColor=texture2D(frame,uvP);}',
      }),
    ),
  );
  return {
    world,
    composite,
    resize(w, h) {
      world.setSize(w, h);
      composite.setSize(w, h);
      U.px.value.set(1 / w, 1 / h);
    },
    draw(scene, camera, t, power, tint, fade = 1, focus = 6, lens = 2, opening = 0) {
      U.invPV.value.multiplyMatrices(camera.matrixWorld, camera.projectionMatrixInverse);
      U.eye.value.copy(camera.position);
      U.time.value = t;
      U.strength.value = power;
      U.tint.value = tint;
      U.filmFade.value = fade;
      U.opening.value = opening;
      U.focus.value = focus;
      U.lens.value = lens;
      renderer.setRenderTarget(world);
      renderer.clear();
      renderer.render(scene, camera);
      renderer.setRenderTarget(composite);
      renderer.render(pp, cam);
      renderer.setRenderTarget(null);
      renderer.render(display, cam);
    },
  };
}
