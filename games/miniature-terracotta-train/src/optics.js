import { T, canvasTex } from './craft.js';

export function optics(renderer, scene, camera, film = false) {
  const lettering = canvasTex(1280, 720, (c) => {
    c.shadowColor = 'rgba(10,19,23,.8)';
    c.shadowBlur = 9;
    c.shadowOffsetY = 2;
    c.fillStyle = '#edc88b';
    c.font = 'bold 12px monospace';
    c.fillText('F E L D W E R K     /     W I N T E R   S T U D Y   0 1', 66, 507);
    c.fillStyle = '#fff5db';
    c.font = '52px Georgia';
    c.fillText('Alpine Midnight', 62, 570);
    c.font = 'italic 46px Georgia';
    c.fillText('Miniature Express', 63, 620);
  });
  const target = new T.WebGLRenderTarget(1, 1, {
    type: T.HalfFloatType,
    depthBuffer: true,
    samples: 4,
    minFilter: T.LinearMipmapLinearFilter,
    magFilter: T.LinearFilter,
  });
  target.texture.generateMipmaps = true;
  target.depthTexture = new T.DepthTexture(1, 1, T.UnsignedIntType);
  const uniforms = {
    lettering: { value: lettering },
    film: { value: film ? 1 : 0 },
    image: { value: target.texture },
    depthMap: { value: target.depthTexture },
    size: { value: new T.Vector2() },
    near: { value: camera.near },
    far: { value: camera.far },
    plane: { value: new T.Vector4() },
    rayScale: { value: new T.Vector2() },
    band: { value: 0.04 },
    amount: { value: 0.5 },
    weather: { value: 0.45 },
    clock: { value: 0 },
    fade: { value: 1 },
  };
  const m = new T.ShaderMaterial({
    uniforms,
    depthTest: false,
    depthWrite: false,
    vertexShader: `varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}`,
    fragmentShader: `
 varying vec2 st;
 uniform sampler2D image, depthMap, lettering;
 uniform vec2 size, rayScale;
 uniform vec4 plane;
 uniform float near, far, amount, band, film, weather, clock, fade;

 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}

 // Signed circle of confusion for a ray intersecting a tilted object plane.
 // The negative lobe belongs to objects between the lens and the subject.
 float defocus(vec2 uv) {
   float depth = texture2D(depthMap,uv).r;
   float invDepth = (far + (near-far)*depth)/(near*far);
   vec3 ray = vec3((2.*uv-1.)*rayScale,-1.);
   float error = dot(plane.xyz,ray)-plane.w*invDepth;
   float falloff = max(0.,abs(error)-band);
   float aperture = 1.-exp(-4.0*falloff*falloff-1.15*falloff);
   return sign(error)*aperture*amount*size.y*.036;
 }
 vec2 pupil(float i,float n) {
   float angle = i*2.39996323;
   return sqrt((i+.5)/n)*vec2(cos(angle),sin(angle));
 }
 void main(){
   vec2 pixel = 1./size;
   float coc = defocus(st);
   float radius = abs(coc);
   vec3 base = textureLod(image,st,0.).rgb;
   vec3 col = base;
   if(radius > .55) {
     vec3 integral = vec3(0.);
     float weight = 0.;
     float lod = max(0.,log2(max(1.,radius*.21)));
     for(int i=0;i<48;i++){
       vec2 uv = st+pupil(float(i),48.)*radius*pixel;
       float sampleCoC = defocus(uv);
       // Reject nearer silhouettes when gathering the far field. They are
       // composited by their own pupil coverage below.
       float coverage = coc>0. ? smoothstep(-1.,1.+.28*radius,sampleCoC) : 1.;
       vec3 light = textureLod(image,uv,lod).rgb;
       float w = coverage*(1.+.17*min(4.,max(light.r,max(light.g,light.b))));
       integral += light*w;
       weight += w;
     }
     col = mix(base,integral/max(weight,.0001),smoothstep(.55,1.8,radius)*min(weight,1.));
   }
   // Let a defocused branch or table lip spread outside its sharp silhouette.
   float reach = amount*size.y*.036;
   if(reach>1. && coc>-.75*reach) {
     vec3 nearLight = vec3(0.);
     float cover = 0.;
     for(int i=0;i<24;i++){
       vec2 offset = pupil(float(i),24.)*reach;
       vec2 uv = st+pixel*offset;
       float spread = -defocus(uv);
       float w = smoothstep(length(offset)-1.,length(offset)+1.,spread)
                 *smoothstep(2.,5.,spread)*step(-spread,coc-1.);
       nearLight += textureLod(image,uv,max(0.,log2(max(1.,spread*.22)))).rgb*w;
       cover += w;
     }
     col = mix(col,nearLight/max(.001,cover),min(.92,cover/24.));
   }
   vec3 bloom=vec3(0.);
   for(int i=0;i<10;i++){
     vec2 uv = st+pupil(float(i),10.)*(size.y*.012)*pixel;
     bloom += max(textureLod(image,uv,1.2).rgb-vec3(.86),vec3(0.));
   }
   col += bloom*.027;
   col *= mix(vec3(1.11,1.025,.95),vec3(.92,1.,1.10),weather);
   col = aces(col*mix(1.05,.70,weather));
   col = pow(col,vec3(1.04,1.015,.99)/2.2);
 float vignette=1.-.18*pow(clamp(length((st-.5)*vec2(1.32,1.)),0.,1.),1.8);col*=vignette;
 col+=(hash(gl_FragCoord.xy+mod(floor(clock*30.),71.))-.5)*.009;
 float title=film*smoothstep(.10,.68,clock)*(1.-smoothstep(3.40,4.45,clock));
 if(title>.0){float gradient=(1.-smoothstep(.0,.55,st.y))*(1.-smoothstep(.01,.68,st.x));col*=1.-.57*title*gradient;
 vec4 ink=texture2D(lettering,st);col=mix(col,pow(ink.rgb,vec3(1./2.2)),title*ink.a);}
 gl_FragColor=vec4(col*fade,1.);}`,
  });
  const stage = new T.Scene();
  stage.add(new T.Mesh(new T.PlaneGeometry(2, 2), m));
  const flat = new T.Camera(),
    normal = new T.Vector3(),
    axis = new T.Vector3();
  return {
    resize(w, h) {
      target.setSize(w, h);
      uniforms.size.value.set(w, h);
    },
    draw(subject, shot, amount, weather, time, fade = 1) {
      camera.updateMatrixWorld();
      camera.getWorldDirection(normal);
      axis.set(Math.cos(shot.railAngle), 0, -Math.sin(shot.railAngle));
      // Swing toward the rail alignment and tilt the plane upright through the masonry.
      normal.addScaledVector(axis, -shot.swing * normal.dot(axis));
      normal.y *= 1 - 0.77 * shot.swing;
      normal.normalize().transformDirection(camera.matrixWorldInverse);
      const dist = normal.dot(subject.clone().applyMatrix4(camera.matrixWorldInverse));
      uniforms.plane.value.set(normal.x, normal.y, normal.z, dist);
      const half = Math.tan(T.MathUtils.degToRad(camera.fov * 0.5));
      uniforms.rayScale.value.set(half * camera.aspect, half);
      uniforms.band.value = shot.band;
      uniforms.amount.value = amount;
      uniforms.weather.value = weather;
      uniforms.clock.value = time;
      uniforms.fade.value = fade;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(stage, flat);
    },
  };
}
