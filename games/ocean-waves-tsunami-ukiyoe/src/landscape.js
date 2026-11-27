import * as T from 'three';
import { random, skyPlate, fibres, insignia, seal } from './engraving.js';
import { tide } from './ocean.js';

export function addLandscape(scene) {
  const day = skyPlate(),
    dusk = skyPlate(true);
  const skyMat = new T.ShaderMaterial({
    side: T.BackSide,
    depthWrite: false,
    uniforms: { ...tide, day: { value: day }, dusk: { value: dusk } },
    vertexShader: `
   varying vec3 dir;void main(){dir=position;vec4 p=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=p.xyww;}`,
    fragmentShader: `varying vec3 dir;uniform sampler2D day,dusk;uniform float night;
   void main(){vec3 d=normalize(dir);vec2 uv=vec2(fract(.5+atan(d.x,-d.z)/6.283185),clamp(.17+d.y*1.58,.005,.995));
   vec3 c=mix(texture2D(day,uv).rgb,texture2D(dusk,uv).rgb,night);
   float dis=length(d-normalize(vec3(.218,.108,-1.)));
   float disk=1.-smoothstep(.053,.0542,dis);
   c+=mix(vec3(.080,.051,.006),vec3(.055,.069,.08),night)*exp(-15.*dis);
   float band=sin(d.y*570.+d.x*.9)+.24*sin(d.x*18.);
   float veil=1.-.40*smoothstep(.75,1.12,band)*(1.-smoothstep(.071,.115,d.y));
   c=mix(c,mix(vec3(1.,.894,.640),vec3(.905,.916,.779),night),disk*veil);
   gl_FragColor=vec4(c,1.);}`
  });
  const sky = new T.Mesh(new T.SphereGeometry(1, 48, 24), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -100;
  scene.add(sky);
  // Radial fluting gives the mountain real spurs and asymmetrical snow fingers.
  let pos = [],
    uv = [],
    ix = [],
    n = 129,
    m = 58;
  for (let j = 0; j <= m; j++)
    for (let i = 0; i <= n; i++) {
      let a = (i / n) * Math.PI * 2,
        h = j / m;
      let ridge =
        Math.sin(9 * a + 0.4 * Math.sin(a * 4)) +
        0.5 * Math.sin(19 * a + 0.7) +
        0.26 * Math.cos(33 * a);
      let rad =
        (0.065 + 0.935 * (1 - h ** 0.77)) * (1 + 0.06 * ridge) +
        0.022 * Math.sin(h * 7 + a * 8) * (1 - h);
      pos.push(
        6.2 + Math.cos(a) * rad * 7.9 + 0.23 * h,
        (4.82 + 0.07 * Math.sin(3 * a) + 0.045 * Math.cos(8 * a)) * h - 0.35,
        -18.7 + Math.sin(a) * rad * 4.4
      );
      uv.push(i / n, h);
      let k = j * (n + 1) + i;
      if (j < m && i < n) ix.push(k, k + 1, k + n + 1, k + 1, k + n + 2, k + n + 1);
    }
  const mg = new T.BufferGeometry();
  mg.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  mg.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  mg.setIndex(ix);
  scene.add(
    new T.Mesh(
      mg,
      new T.ShaderMaterial({
        side: T.DoubleSide,
        uniforms: tide,
        vertexShader: `varying vec2 st;varying vec3 p;void main(){p=position;st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
        fragmentShader: `varying vec2 st;varying vec3 p;uniform float night,ink;
   void main(){
    float a=st.x*6.28318;float h=st.y;float gull=sin(19.*a+1.15*sin(a*7.+h*2.))+.48*sin(41.*a+.6*cos(h*4.+a*6.));
    float shade=sin(9.*a+.45*sin(a*4.))+.4*gull;
    vec3 rock=mix(vec3(.41,.45,.51),vec3(.57,.58,.61),smoothstep(-.32,-.15,shade));
    rock=mix(rock,vec3(.73,.65,.62),smoothstep(.47,.63,shade)*(.55+.45*h));
    rock=mix(rock,vec3(.42,.45,.52),smoothstep(.92,1.12,gull)*.52);
    float cut=sin(77.*a+.87*sin(9.*h+11.*a)+.48*sin(22.*h+22.*a))+.47*sin(137.*a+4.*h);
    rock=mix(rock,vec3(.32,.40,.47),smoothstep(.60,1.05,cut)*smoothstep(.22,.48,h)*.32);
    rock=mix(rock,vec3(.77,.69,.63),smoothstep(.71,1.01,sin(105.*a+1.6*sin(h*6.+a*15.)))*.25);
    float snowline=.705+.042*sin(7.*a)+.065*gull-.155*pow(max(0.,sin(a*27.+h*2.)),8.);
    float snow=smoothstep(snowline,snowline+.01,h);
    vec3 cap=mix(vec3(.81,.79,.74),vec3(.99,.924,.78),smoothstep(-.17,.18,shade));
    cap=mix(cap,vec3(.55,.58,.59),smoothstep(.76,1.23,cut)*(1.-smoothstep(.76,.99,h))*.48);
    float finger=smoothstep(.95,.99,sin(51.*a+1.55*sin(h*5.+a*13.)))*smoothstep(.49,.75,h);
    vec3 c=mix(rock,cap,max(snow,.76*finger));
    c=mix(c,vec3(.83,.77,.67),.48*(1.-h));
    gl_FragColor=vec4(mix(c,c*vec3(.53,.66,.85),night),1.);}`
      })
    )
  );
  const r = random(926);
  for (let layer = 0; layer < 3; layer++) {
    let pts = [],
      ids = [];
    let z = -20.98 + layer * 0.73;
    for (let j = 0; j <= 420; j++) {
      let x = -21.98 + (j * 43.96) / 420;
      let height =
        0.22 +
        (0.37 + 0.55 * Math.sin(x * 0.1 + layer) ** 2) *
          Math.abs(Math.sin(x * 0.14 + layer * 3.1)) +
        0.21 * Math.sin(x * 0.51 + layer) +
        0.17 * Math.cos(x * 0.8 + layer);
      height *= (1.65 - layer * 0.27) * Math.min(1, (22 - Math.abs(x)) / 3);
      const tree = 0.06 * r() + 0.08 * (1 + Math.sin(j * 2.73));
      pts.push(x, -0.68, z, x, height + tree - 0.16, z);
      if (j < 420) {
        let k = j * 2;
        ids.push(k, k + 2, k + 1, k + 2, k + 3, k + 1);
      }
    }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
    g.setIndex(ids);
    const palette = [
      [0.76, 0.68, 0.62],
      [0.64, 0.62, 0.59],
      [0.49, 0.57, 0.57]
    ];
    scene.add(
      new T.Mesh(
        g,
        new T.ShaderMaterial({
          side: T.DoubleSide,
          uniforms: { ...tide, tint: { value: new T.Vector3(...palette[layer]) } },
          vertexShader: `varying float y;void main(){y=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
          fragmentShader: `uniform vec3 tint;uniform float night;varying float y;void main(){vec3 c=tint+.035*(1.-y);gl_FragColor=vec4(mix(c,c*vec3(.45,.56,.78),night),1.);}`
        })
      )
    );
  }
  // Distant terns are folded silhouettes with unequal swept wings.
  const birds = new T.Group();
  scene.add(birds);
  for (let i = 0; i < 11; i++) {
    let x = 3.4 + i * 0.56 + r() * 0.52,
      y = 5.8 + 0.46 * Math.sin(i * 0.79) + r() * 0.52,
      z = -11 - r() * 3;
    const p = [
      -0.56, 0.13, -0.04, -0.3, 0.16, 0, 0, 0, 0.02, -0.3, 0.16, 0, -0.22, 0.08, 0.01, 0, 0, 0.02,
      0, 0, 0.02, 0.2, 0.22, 0, 0.48, 0.26, -0.03, 0, 0, 0.02, 0.14, 0.12, 0.03, 0.2, 0.22, 0
    ];
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(p, 3));
    const bird = new T.Mesh(g, new T.MeshBasicMaterial({ color: '#495759', side: T.DoubleSide }));
    bird.position.set(x, y, z);
    bird.rotation.z = (r() - 0.5) * 0.8;
    bird.scale.setScalar(0.32 + r() * 0.29);
    birds.add(bird);
  }
  return (t) => {
    birds.position.x = Math.sin(t * 0.16) * 0.95;
    birds.position.y = 0.13 * Math.sin(t * 0.27);
  };
}

export function paperOverlay() {
  const overlay = new T.Scene(),
    cam = new T.Camera();
  const uniforms = {
    paper: { value: fibres() },
    title: { value: insignia() },
    seal: { value: seal() },
    size: { value: new T.Vector2() },
    ...tide
  };
  const mat = new T.ShaderMaterial({
    uniforms,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    vertexShader: 'varying vec2 st;void main(){st=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader: `uniform vec2 size;uniform sampler2D paper,title,seal; varying vec2 st;
 void main(){
 vec2 px=st*size;float scale=clamp(size.y/740.,.72,1.9);
 float grain=texture2D(paper,px/(490.*scale)).r-.47;
 vec3 c=grain>0.?vec3(.99,.95,.83):vec3(.16,.13,.13);
 float a=abs(grain)*.205+.012;

 vec2 cart=(vec2(px.x,size.y-px.y)/scale-vec2(21.,20.))/vec2(38.,89.);
 if(all(greaterThanEqual(cart,vec2(0.)))&&all(lessThanEqual(cart,vec2(1.)))){
 vec4 mark=texture2D(title,vec2(cart.x,1.-cart.y));c=mark.rgb+grain*.079;a=max(a,.96*mark.a);}
 vec2 sp=(vec2(size.x-px.x,px.y)/scale-vec2(19.,17.))/34.;
 if(all(greaterThanEqual(sp,vec2(0.)))&&all(lessThanEqual(sp,vec2(1.)))){
 vec4 s=texture2D(seal,vec2(1.-sp.x,sp.y));if(s.a>.05){c=s.rgb+grain*.08;a=.93*s.a;}}
 gl_FragColor=vec4(c,a);}`
  });
  overlay.add(new T.Mesh(new T.PlaneGeometry(2, 2), mat));
  return (renderer) => {
    renderer.getDrawingBufferSize(uniforms.size.value);
    renderer.autoClear = false;
    renderer.render(overlay, cam);
    renderer.autoClear = true;
  };
}
