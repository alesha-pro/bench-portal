import * as THREE from 'three';
import { random, TAU } from './math.js';

function engraving() {
  const n = 1536,
    c = document.createElement('canvas');
  c.width = c.height = n;
  const g = c.getContext('2d');
  const rand = random(132);
  g.fillStyle = '#000';
  g.fillRect(0, 0, n, n);
  // Square UVs follow the paper grain even when a panel turns away.
  g.strokeStyle = '#ad0000';
  g.lineWidth = 2;
  for (const w of [22, 29, 45, 62]) g.strokeRect(w, w, n - 2 * w, n - 2 * w);
  for (let k = 0; k < 4; k++) {
    g.save();
    g.translate(n / 2, n / 2);
    g.rotate((k * Math.PI) / 2);
    g.translate(-n / 2, -n / 2);
    g.lineWidth = 5;
    g.beginPath();
    g.moveTo(49, 158);
    g.lineTo(49, 50);
    g.lineTo(158, 50);
    g.moveTo(62, 128);
    g.lineTo(91, 128);
    g.lineTo(91, 91);
    g.lineTo(128, 91);
    g.lineTo(128, 62);
    g.stroke();
    g.restore();
  }
  // Seigaiha engraved into two corners; staggered arcs form overlapping waves.
  g.save();
  g.beginPath();
  g.moveTo(65, 65);
  g.lineTo(755, 65);
  g.lineTo(65, 710);
  g.closePath();
  g.clip();
  for (let y = 62; y < 760; y += 25)
    for (let x = -80; x < 840; x += 100) {
      let xx = x + (Math.round((y - 62) / 25) % 2) * 50;
      g.fillStyle = '#000';
      g.beginPath();
      g.arc(xx, y, 50, Math.PI, TAU);
      g.fill();
      g.strokeStyle = '#890000';
      g.lineWidth = 1.9;
      for (const r of [10, 20, 30, 40, 49]) {
        g.beginPath();
        g.arc(xx, y, r, Math.PI, TAU);
        g.stroke();
      }
    }
  g.restore();
  // A rubbed foil disc, brushed ink arc and drifting metallic dust.
  g.save();
  g.translate(n * 0.5, n * 0.48);
  g.rotate(-0.085);
  g.fillStyle = '#9b0000';
  g.beginPath();
  g.arc(0, 0, 204, 0, TAU);
  g.fill();
  for (let i = 0; i < 2900; i++) {
    const a = rand() * TAU,
      r = 204 * Math.sqrt(rand());
    g.fillStyle = 'rgba(0,0,0,' + (0.1 + 0.66 * rand()) + ')';
    g.fillRect(
      r * Math.cos(a),
      r * Math.sin(a),
      rand() * 9 + 1,
      rand() * 4 + 0.7,
    );
  }
  for (let i = 0; i < 150; i++) {
    const r = 202 + rand() * 23,
      a = 3.56 + rand() * 0.33;
    g.lineWidth = 0.3 + rand() * 2.2;
    g.strokeStyle = 'rgba(0,130,0,' + (0.1 + 0.41 * rand()) + ')';
    g.beginPath();
    g.ellipse(-4, 4, r, r * 0.96, -0.09, a, a + 2.85 + rand() * 0.38);
    g.stroke();
  }
  g.strokeStyle = '#9d0000';
  g.lineWidth = 2;
  for (const r of [202, 212, 226]) {
    g.beginPath();
    g.arc(0, 0, r, 0, TAU);
    g.stroke();
  }
  // The dry ink and its bristle marks share the surface atlas.
  g.font = '315px "Noto Serif CJK JP", serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = '#00ed00';
  g.fillText('鳳', 0, -12);
  g.restore();
  g.textAlign = 'center';
  g.fillStyle = '#00d000';
  g.font = '83px "Noto Serif CJK JP",serif';
  ['火', '中', '再', '生'].forEach((s, i) => g.fillText(s, 1171, 655 + i * 94));
  g.fillStyle = '#b90000';
  g.fillRect(1112, 1044, 106, 106);
  g.fillStyle = '#000';
  g.fillRect(1117, 1049, 96, 96);
  g.fillStyle = '#df0000';
  g.font = '67px "Noto Serif CJK JP",serif';
  g.fillText('印', 1164, 1120);
  for (let i = 0; i < 31500; i++) {
    const x = rand() * n,
      y = rand() * n;
    g.fillStyle = i % 4 === 0 ? 'rgba(238,0,0,.35)' : 'rgba(0,0,0,.32)';
    g.fillRect(x, y, rand() * 3 + 0.4, rand() * 1.8 + 0.5);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

const vert = `
  attribute vec3 bary, creaseMask;
  varying vec3 vMask;
  attribute vec3 ornament;
  attribute vec2 nib;
  varying vec2 vNib;
  varying vec3 vBary, vInfo, vWorld;
  varying vec2 vUv;
  void main(){
    vec4 world=modelMatrix*vec4(position,1.);
    vMask=creaseMask;vNib=nib;vWorld=world.xyz;vBary=bary;vInfo=ornament;vUv=uv;
    gl_Position=projectionMatrix*viewMatrix*world;
  }`;
const frag = `
  varying vec2 vNib;
  varying vec3 vMask;
  uniform sampler2D ink;
  uniform float time, fold, fire, style;
  varying vec3 vBary,vInfo,vWorld;
  varying vec2 vUv;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  void main(){
    vec3 n=normalize(cross(dFdx(vWorld),dFdy(vWorld)));
    vec3 viewDir=normalize(cameraPosition-vWorld);
    if(dot(n,viewDir)<0.)n=-n;
    vec3 lightDir=normalize(vec3(-.55,.88,.61));
    float diffuse=.80+.36*dot(n,lightDir);
    float silk=pow(abs(dot(n,normalize(lightDir+viewDir))),13.);
    float graze=pow(1.-max(0.,dot(n,viewDir)),3.);
    vec3 red=vec3(.78,.150,.116), dark=vec3(.34,.042,.080), gold=vec3(.99,.72,.36);
    if(style>.5&&style<1.5){red=vec3(.88,.824,.696);dark=vec3(.34,.34,.34);gold=vec3(.79,.62,.34);}
    if(style>1.5){red=vec3(.235,.245,.27);dark=vec3(.07,.085,.12);gold=vec3(1.,.42,.19);}
    vec2 atlas=texture2D(ink,vUv).rg;
    float facet=vInfo.x;
    float foil=vInfo.y;
    float variation=hash(floor(vUv*170.));
    float fiber=hash(floor(vUv*vec2(1370.,940.)));
    vec3 lacquer=mix(dark,red,.64+.28*facet);
    vec3 color=mix(lacquer,red,.48*(1.-fold));
    float foilMask=max(atlas.r*.88,foil*fold);
    float lozenge=abs(vNib.x)*1.28+abs(vNib.y-.72)*6.8;
    float glyph=(1.-smoothstep(.025,.095,abs(lozenge-.55)))+
                (1.-smoothstep(.06,.14,lozenge))*.75;
    float bar=1.-smoothstep(.009,.023,abs(vNib.y-.84-.096*abs(vNib.x)));
    foilMask=max(foilMask,fold*vInfo.z*min(1.,glyph*.90+bar*.78));
    if(!gl_FrontFacing){
      float redMargin=smoothstep(.12,.65,abs(vNib.x))*vInfo.z;
      float gilding=mix(.90,.25,redMargin)*(.86+.14*facet);
      foilMask=max(foilMask,gilding);
    }
    color=mix(color,gold*(.92+.08*variation),foilMask);
    color=mix(color,vec3(.065,.056,.057),atlas.g*(gl_FrontFacing?.93:.12));
    color*=diffuse+.12*facet*fold;
    color+=vec3(1.,.78,.50)*(silk*(.045+foilMask*.33)+graze*.054);
    color+=(fiber-.5)*(.022+.018*foilMask);
    vec3 width=max(fwidth(vBary),vec3(.00001));
    float dist=min(min(vBary.x/width.x,vBary.y/width.y),vBary.z/width.z);
    vec3 edges=(1.-smoothstep(vec3(.0),vec3(.86),vBary/width))*vMask;
    float crease=max(edges.x,max(edges.y,edges.z));
    vec2 duv=abs(vUv-.5);
    float baseRay=min(min(duv.x,duv.y),abs(duv.x-duv.y)*.707);
    float baseEdge=1.-smoothstep(.0002,.0014,baseRay);
    crease=mix(baseEdge*.42+crease*.09,crease,smoothstep(.12,.78,fold));
    float pulse=.65+.35*sin(19.*vUv.x+13.*vUv.y-4.*time+2.*sin(vUv.y*15.+time*.6));
    float heat=fire*(.55+.45*pulse);
    color=mix(color, mix(vec3(.53,.27,.15),gold,.76), crease*(.17+.28*fold));
    color+=vec3(1.,.44,.092)*heat*(crease*.69+.035*exp(-.7*dist)*fold);
    gl_FragColor=vec4(color,1.);
  }`;

export function paperMaterial() {
  return new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
      ink: { value: engraving() },
      time: { value: 0 },
      fold: { value: 0 },
      fire: { value: 0 },
      style: { value: 0 },
    },
  });
}
