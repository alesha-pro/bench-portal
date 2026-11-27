import * as T from "three";
import { Reflector } from "three/addons/objects/Reflector.js";
import { world, random, canvasTex } from "./workshop.js";
const field = {
  clock: { value: 0 },
  wind: { value: 0.72 },
  shock: { value: 0 },
};
const noise = `
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
`;
function ground() {
  const asphalt = canvasTex(768, 768, (c, w, h) => {
    const image = c.createImageData(w, h);
    for (let i = 0; i < image.data.length; i += 4) {
      const n = random(0, 1);
      let k = 38 + Math.floor(random(0, 50)) + (n > 0.967 ? random(20, 100) : 0);
      image.data[i] = k * 0.95;
      image.data[i + 1] = k;
      image.data[i + 2] = k * 1.03;
      image.data[i + 3] = 255;
    }
    c.putImageData(image, 0, 0);
    for (let j = 0; j < 5; j++) {
      let x = random(0, w),
        y = random(0, h);
      c.beginPath();
      c.moveTo(x, y);
      for (let i = 0; i < 19; i++) {
        x += random(-3, 24);
        y += random(-12, 11);
        c.lineTo(x, y);
      }
      c.lineWidth = random(1.1, 2.7);
      c.strokeStyle = "#191e20";
      c.stroke();
    }
  });
  asphalt.wrapS = asphalt.wrapT = T.RepeatWrapping;
  asphalt.anisotropy = 8;
  const shader = {
    uniforms: { ...Reflector.ReflectorShader.uniforms, ...field, grit: { value: asphalt } },
    vertexShader: `uniform mat4 textureMatrix;varying vec4 proj;varying vec3 wp;void main(){proj=textureMatrix*vec4(position,1.);wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:
      `uniform sampler2D tDiffuse,grit;uniform float clock,wind,shock;varying vec4 proj;varying vec3 wp;` +
      noise +
      `
 void main(){vec2 p=wp.xz,uv=proj.xy/proj.w;float gritValue=texture2D(grit,p*.64).r;
 float pools=noise2(p*vec2(1.04,.94))*.54+.26*noise2(p*3.5)+.20*noise2(p*.32);float wet=smoothstep(.28,.69,pools);
 vec2 q=p*2.55,cell=floor(q),distort=vec2(0);float rim=0.;
 for(int y=-1;y<=1;y++){for(int x=-1;x<=1;x++){vec2 id=cell+vec2(float(x),float(y));float seed=hash(id+1.75);vec2 pt=id+.15+.70*vec2(seed,hash(id+8.6));vec2 d=q-pt;float r=length(d);float age=fract(clock*(.7+.47*seed)+hash(id+2.1));float diff=r-age*.90;float wave=sin(diff*56.)*exp(-abs(diff)*14.)*(1.-age)*smoothstep(0.,.09,age);distort+=wave*d/(r+.01);rim+=max(wave,0.);}}
 float rough=(1.-wet)*.76+.24;vec2 wobble=vec2(noise2(p*vec2(9.,32.)+clock*.24)-.5,noise2(p*vec2(13.,24.)-clock*.18)-.5);
 uv+=wobble*(.0013+.011*rough)+distort*.0065*wind;uv.y+=sin(p.x*21.+clock*24.)*.0029*shock;
 float blur=.0008+.0041*rough;vec3 mir=texture2D(tDiffuse,uv).rgb*.42;mir+=texture2D(tDiffuse,uv+vec2(blur,.001)).rgb*.20;mir+=texture2D(tDiffuse,uv-vec2(blur,.001)).rgb*.20;mir+=texture2D(tDiffuse,uv+vec2(0.,blur*1.9)).rgb*.18;
 vec3 view=normalize(cameraPosition-wp);float fres=pow(1.-abs(view.y),2.);float contact=1.-.62*(1.-smoothstep(.86,1.78,abs(p.y-.06)))*(1.-smoothstep(2.7,3.4,abs(p.x+1.05)));
 vec3 base=vec3(.030,.046,.053)*(gritValue*3.2+.36);float paint=(1.-smoothstep(.013,.034,abs(abs(p.x-4.6)-.074)))*smoothstep(.07,.21,gritValue+.17*noise2(p*38.));base=mix(base,vec3(.39,.223,.071),paint*.74);
 float k=(.105+.60*wet+.20*fres)*(1.-.40*clamp(gritValue,0.,1.));vec3 col=(base*(1.-.58*wet)+mir*k*(.84+.18*noise2(p*25.0)))*contact+vec3(.052,.085,.093)*rim*wet*wind;gl_FragColor=vec4(col,1.);}`,
  };
  const puddle = new Reflector(new T.PlaneGeometry(120, 140), {
    shader,
    textureWidth: 1000,
    textureHeight: 600,
    clipBias: 0.001,
    multisample: 0,
  });
  puddle.rotation.x = -Math.PI / 2;
  puddle.position.set(0, 0.002, -17);
  world.add(puddle);
  const u = puddle.material.uniforms;
  for (let k of Object.keys(field)) u[k] = field[k];
  return puddle;
}
function rain() {
  const geom = new T.BufferGeometry(),
    pos = [],
    seeds = [],
    end = [];
  function streak(x, y, z, a, drip) {
    for (let i = 0; i < 2; i++) {
      pos.push(x, y, z);
      seeds.push(a, drip);
      end.push(i);
    }
  }
  for (let i = 0; i < 6500; i++) streak(random(-12, 12), random(0, 12), random(-18, 9), random(), 0);
  for (let j = 0; j < 120; j++) streak(-4.2 + (j % 38) * 0.169, random(0, 3), 1.104, random(), 1);
  geom.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  geom.setAttribute("seed", new T.Float32BufferAttribute(seeds, 2));
  geom.setAttribute("tip", new T.Float32BufferAttribute(end, 1));
  const m = new T.ShaderMaterial({
    uniforms: field,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader: `uniform float clock,wind;attribute vec2 seed;attribute float tip;varying float alpha;varying vec3 tint;void main(){bool drip=seed.y>.5;float h=drip?2.83:12.;float y=mod(position.y-clock*(drip?3.9:(4.2+2.8*wind+seed.x*2.)),h);vec3 p=vec3(position.x,y,position.z);float dx=drip?.025:.18+.19*wind;float len=drip?.039:.061+.10*wind+.059*seed.x;p.x+=drip?0.:(h-y)*dx;p.y+=tip*len;p.x-=tip*len*dx;
 float under=float(p.y<3.18&&p.x>-4.3&&p.x<2.16&&p.z<1.10&&p.z>-1.5);alpha=(drip?.52:.20)*(.4+.6*tip)*smoothstep(seed.x*.83,seed.x*.83+.10,wind)*(1.-under);alpha*=1.-smoothstep(7.5,20.,distance(cameraPosition,p))*.61;
 float warm=exp(-.19*distance(p,vec3(-2.,2.1,.9)));tint=mix(vec3(.29,.50,.64),vec3(1.,.67,.45),warm);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,
    fragmentShader: `varying float alpha;varying vec3 tint;void main(){gl_FragColor=vec4(tint,alpha);}`,
  });
  let lines = new T.LineSegments(geom, m);
  lines.frustumCulled = false;
  world.add(lines);
}
function steam() {
  const geometry = new T.InstancedBufferGeometry().copy(new T.PlaneGeometry(1, 1));
  let origins = [],
    params = [],
    shades = [];
  function plume(x, y, z, s, count, color) {
    for (let i = 0; i < count; i++) {
      origins.push(x + random(-0.05, 0.05) * s, y, z + random(-0.05, 0.05) * s);
      params.push(random(), random(), s, random(0.61, 1));
      shades.push(...color);
    }
  }
  plume(-0.74, 1.52, -0.08, 0.9, 21, [0.98, 0.78, 0.55]);
  for (let j = 0; j < 4; j++) plume(-3.16 + j * 1.13, 1.25, 0.73, 0.43, 8, [0.88, 0.8, 0.63]);
  plume(2.8, 0.04, 2.42, 1.17, 18, [0.39, 0.66, 0.75]);
  plume(-3.0, 0.04, 2.83, 0.85, 12, [0.61, 0.48, 0.37]);
  plume(4.9, 0.04, -9, 1.39, 12, [0.26, 0.48, 0.56]);
  for (const [k, a, n] of [
    ["origin", origins, 3],
    ["param", params, 4],
    ["shade", shades, 3],
  ])
    geometry.setAttribute(k, new T.InstancedBufferAttribute(new Float32Array(a), n));
  geometry.instanceCount = params.length / 4;
  const m = new T.ShaderMaterial({
    uniforms: field,
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide,
    vertexShader: `uniform float clock,wind;attribute vec3 origin,shade;attribute vec4 param;varying vec2 st;varying float fade,phase;varying vec3 vapor;void main(){float life=fract(clock*(.28+.12*param.y)+param.x);phase=clock*.28+param.y*41.;vec3 p=origin;p.y+=life*1.27*param.z;p.x+=(sin(life*7.+param.y*8.)*.12+.27*life*wind)*life*param.z;p.z+=cos(life*5.+param.x*2.)*.094*life*param.z;vec4 mv=viewMatrix*vec4(p,1.);float size=(.18+.59*life)*param.z;mv.xy+=position.xy*vec2(size,size*1.62);gl_Position=projectionMatrix*mv;st=uv;fade=sin(life*3.14159)*.22*param.w;vapor=shade;}`,
    fragmentShader:
      `varying vec2 st;varying float fade,phase;varying vec3 vapor;` +
      noise +
      `void main(){vec2 p=st*2.-1.;p.x+=sin(p.y*3.+phase*2.)*.20;float core=max(0.,1.-dot(p,p));float n=noise2(p*3.+phase)*.55+noise2(p*7.-phase)*.30+noise2(p*15.+phase*.4)*.15;gl_FragColor=vec4(vapor,fade*core*core*smoothstep(.24,.76,n));}`,
  });
  let o = new T.Mesh(geometry, m);
  o.frustumCulled = false;
  o.renderOrder = 3;
  world.add(o);
}
export function weather() {
  const puddle = ground();
  rain();
  steam();
  return {
    puddle,
    update(t, w, pass) {
      field.clock.value = t;
      field.wind.value = w;
      field.shock.value = Math.exp(-Math.pow((pass - 2.04) / 0.9, 2));
    },
  };
}
