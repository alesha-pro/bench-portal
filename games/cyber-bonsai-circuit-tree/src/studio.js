import * as T from "three";
import { V, range, random, tau } from "./craft.js";

function reflectionCards(renderer, scene) {
  const w = 256,
    h = 128,
    data = new Float32Array(w * h * 4);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const u = x / w,
        v = y / h,
        d = (x + y * w) * 4;
      const card = (cx, cy, sx, sy) =>
        Math.exp(-Math.pow((u - cx) / sx, 4) - Math.pow((v - cy) / sy, 4));
      const a = card(0.27, 0.62, 0.09, 0.13),
        b = card(0.72, 0.61, 0.038, 0.24),
        c = card(0.47, 0.78, 0.06, 0.05),
        e = card(0.91, 0.56, 0.04, 0.11);
      data.set(
        [
          0.13 + a * 2.7 + b * 1.2 + c * 2.2 + e * 0.6,
          0.15 + a * 2.1 + b * 2.2 + c * 1.55 + e * 0.2,
          0.16 + a * 1.9 + b * 2.1 + c * 0.9 + e * 0.2,
          1,
        ],
        d,
      );
    }
  const tex = new T.DataTexture(data, w, h, T.RGBAFormat, T.FloatType);
  tex.mapping = T.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  const pm = new T.PMREMGenerator(renderer);
  scene.environment = pm.fromEquirectangular(tex).texture;
  scene.environmentIntensity = 0.55;
  pm.dispose();
  tex.dispose();
}
function brush() {
  const c = document.createElement("canvas");
  c.width = c.height = 768;
  const ctx = c.getContext("2d"),
    ox = 384,
    oy = 384;
  for (let k = 0; k < 840; k++) {
    const layer = random(),
      rad = 250 + layer * 46,
      start = range(-2.48, -1.8),
      len = range(4.13, 6.05),
      phase = range(-0.08, 0.08);
    ctx.beginPath();
    for (let j = 0; j <= 72; j++) {
      const q = j / 72,
        a = start + len * q;
      const swell =
        (layer - 0.5) * (33 * Math.sin(a + 0.6) + 19 * Math.cos(a * 2 + 1.3)) +
        4 * Math.sin(3 * a + 0.5) +
        2 * Math.cos(6 * a + phase);
      const r = rad + swell + 0.45 * Math.sin(11 * a) + range(-0.72, 0.72);
      const x = ox + Math.cos(a) * r,
        y = oy + Math.sin(a) * r;
      if (!j) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(255,255,255," + range(0.018, 0.1) + ")";
    ctx.lineWidth = range(0.42, 2.2);
    ctx.stroke();
  }
  return new T.CanvasTexture(c);
}
const vert = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.999999,1.);}`;
export function studio(renderer, scene) {
  reflectionCards(renderer, scene);
  scene.add(new T.HemisphereLight(0xece3da, 0x4c4946, 0.68));
  const lamp = (x, y, z, col, intensity) => {
    const l = new T.DirectionalLight(col, intensity);
    l.position.set(x, y, z);
    scene.add(l);
    return l;
  };
  const key = lamp(-3, 7, 4, 0xffdfc5, 2.24);
  key.target.position.y = 1.75;
  scene.add(key.target);
  key.castShadow = true;
  Object.assign(key.shadow.camera, {
    left: -4.5,
    right: 4.5,
    top: 4.1,
    bottom: -4.1,
    near: 0.4,
    far: 17,
  });
  key.shadow.camera.updateProjectionMatrix();
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.normalBias = 0.008;
  key.shadow.bias = -0.00018;
  lamp(4, 4, -4, 0x98f0ed, 2.65);
  lamp(-4, 2, -3, 0xffa675, 1.46);
  lamp(2, 2, 4, 0xdfcbd4, 0.34);
  lamp(-0.5, 1, 5, 0xdac1ad, 0.62);
  const bgU = {
    aspect: { value: 1 },
    hero: { value: 1 },
    centre: { value: 0.56 },
    wash: { value: brush() },
  };
  const bg = new T.Mesh(
    new T.PlaneGeometry(2, 2),
    new T.ShaderMaterial({
      uniforms: bgU,
      depthTest: false,
      depthWrite: false,
      vertexShader: vert,
      fragmentShader: `
    varying vec2 vUv;uniform float aspect,hero,centre;uniform sampler2D wash;
    float gauss(vec2 v){return exp(-dot(v,v));}
    void main(){vec2 p=vUv;
      vec3 c=vec3(.0043,.0074,.0085);
      c+=vec3(.008,.021,.022)*gauss((p-vec2(.53,.58))*vec2(2.4,2.75));
      c+=vec3(.030,.014,.011)*gauss((p-vec2(.76,.62))*vec2(3.2,3.4));
      c+=vec3(.011,.007,.007)*gauss((p-vec2(.46,.18))*vec2(2.5,6.));
      vec2 xy=(p-vec2(centre,.56))*vec2(aspect,1.)/.99+.5;
      float enso=texture2D(wash,clamp(xy,0.,1.)).a;
      c+=vec3(.024,.018,.015)*enso*hero;
      gl_FragColor=vec4(c,1.);}`,
    }),
  );
  bg.frustumCulled = false;
  bg.renderOrder = -100;
  scene.add(bg);
  const ground = new T.Mesh(
    new T.PlaneGeometry(21, 18),
    new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader: `varying vec3 wp;void main(){vec4 p=modelMatrix*vec4(position,1.);wp=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
      fragmentShader: `varying vec3 wp;void main(){vec2 p=wp.xz;float pool=exp(-dot(p*vec2(.27,.36),p*vec2(.27,.36)));
      float shadow=exp(-pow(length((p-vec2(.09,.1))*vec2(.44,.68)),4.)*1.6);
      float base=exp(-pow(length(p*vec2(.53,.85)),4.)*1.35);
      vec3 c=mix(vec3(.035,.029,.026),vec3(.003,.0045,.005),shadow*.75+base*.24);
      gl_FragColor=vec4(c,pool*.88);}`,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.284;
  ground.renderOrder = -5;
  scene.add(ground);
  return bgU;
}

export function compositor(renderer) {
  const rt = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    samples: 4,
  });
  rt.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const glow = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    depthBuffer: false,
    generateMipmaps: true,
    minFilter: T.LinearMipmapLinearFilter,
  });
  const camera = new T.Camera(),
    sc = new T.Scene(),
    plane = new T.Mesh(new T.PlaneGeometry(2, 2));
  plane.frustumCulled = false;
  sc.add(plane);
  const u = {
    inputMap: { value: rt.texture },
    bright: { value: glow.texture },
    size: { value: new T.Vector2() },
    fade: { value: 1 },
    depthMap: { value: rt.depthTexture },
    focus: { value: 6 },
    aperture: { value: 0 },
    titles: { value: null },
    plate: { value: new T.Vector2() },
  };
  const threshold = new T.ShaderMaterial({
    uniforms: u,
    depthTest: false,
    depthWrite: false,
    vertexShader: vert,
    fragmentShader: `uniform sampler2D inputMap;varying vec2 vUv;void main(){vec3 c=texture2D(inputMap,vUv).rgb;if(!(dot(c,c)>=0.))c=vec3(0.);c=clamp(c,0.,32.);float m=max(c.r,max(c.g,c.b));gl_FragColor=vec4(c*smoothstep(.60,1.58,m),1.);}`,
  });
  const finish = new T.ShaderMaterial({
    glslVersion: T.GLSL3,
    uniforms: u,
    depthTest: false,
    depthWrite: false,
    vertexShader: `out vec2 uvs;void main(){uvs=uv;gl_Position=vec4(position.xy,0.,1.);}`,
    fragmentShader: `uniform sampler2D inputMap,bright,depthMap,titles;uniform vec2 size,plate;uniform float focus,aperture;uniform float fade;in vec2 uvs;out vec4 result;
    vec3 halo(float level){
      vec2 stride=exp2(level)*2./size;
      return (textureLod(bright,uvs+stride*vec2(.37,.57),level).rgb+
        textureLod(bright,uvs+stride*vec2(-.57,.37),level).rgb+
        textureLod(bright,uvs+stride*vec2(-.37,-.57),level).rgb+
        textureLod(bright,uvs+stride*vec2(.57,-.37),level).rgb)*.25;
    }
    vec3 srgb(vec3 c){return mix(12.92*c,1.055*pow(max(c,vec3(0.)),vec3(1./2.4))-.055,step(vec3(.0031308),c));}
    void main(){vec3 c=texture(inputMap,uvs).rgb;
      if(any(isnan(c))||any(isinf(c)))c=vec3(0.);
      if(aperture>.001){
        float z=texture(depthMap,uvs).r;
        float dist=(.06*80.)/(80.-z*(80.-.06));
        float coc=min(5.,abs(focus/dist-1.)*aperture)*size.y/1080.;
        vec3 blurred=c*2.;
        for(int k=0;k<12;k++){
          float a=float(k)*2.39996, r=sqrt((float(k)+.5)/12.);
          vec2 uv=uvs+coc*r*vec2(cos(a),sin(a))/size;
          vec3 sampleColor=texture(inputMap,uv).rgb;
          blurred+=any(isnan(sampleColor))||any(isinf(sampleColor))?c:sampleColor;
        }
        c=blurred/14.;
      }
      c+=halo(1.)*.19+halo(2.8)*.21+halo(4.5)*.23+halo(6.)*.10;
      c*=1.-.22*pow(length((uvs-.5)*1.26),2.);
      c=c*(1.+c*.14)/(1.+c*.84);
      float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;
      vec3 display=srgb(c);
      if(plate.y>.001){
        vec2 topUV=vec2(uvs.x,1.-uvs.y);
        vec2 origin=plate.x<.5?vec2(.050,.091):vec2(.05,.846);
        float width=plate.x<.5?.40:.34;
        vec2 local=(topUV-origin)*vec2(1.,size.y/size.x)/width;
        if(local.x>=0.&&local.x<=1.&&local.y>=0.&&local.y<.256){
          vec4 title=texture(titles,vec2(local.x,1.-(plate.x*256.+local.y*1000.)/768.));
          display=mix(display,title.rgb,title.a*plate.y);
        }
      }
      result=vec4(clamp(display*fade+grain*.009,0.,1.),1.);}`,
  });
  return {
    uniforms: u,
    size(w, h) {
      rt.setSize(w, h);
      glow.setSize(Math.ceil(w / 2), Math.ceil(h / 2));
      u.size.value.set(w, h);
    },
    draw(scene, cam, fade = 1) {
      u.fade.value = fade;
      renderer.setRenderTarget(rt);
      renderer.render(scene, cam);
      plane.material = threshold;
      renderer.setRenderTarget(glow);
      renderer.render(sc, camera);
      plane.material = finish;
      renderer.setRenderTarget(null);
      renderer.render(sc, camera);
    },
  };
}
