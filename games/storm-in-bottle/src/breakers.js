import * as T from "three";
import { geom, mesh, rng } from "./craft.js";
import { radius, uniforms, waterMath, noiseGL } from "./sea.js";

export function breakers(parent) {
  // Sheets climb the wet wall above the contact line, then tear into lace and runnels.
  const positions = [],
    indices = [];
  const cols = 137,
    rows = 20;
  for (const side of [-1, 1]) {
    const offset = positions.length / 3;
    for (let j = 0; j <= rows; j++)
      for (let i = 0; i <= cols; i++) {
        const x = -3.26 + (5.25 * i) / cols;
        positions.push(x, radius(x) - 0.089, side * (1 + j / rows));
        if (i < cols && j < rows) {
          const k = offset + j * (cols + 1) + i;
          indices.push(k, k + 1, k + cols + 1, k + 1, k + cols + 2, k + cols + 1);
        }
      }
  }
  const sheet = mesh(
    parent,
    geom(positions, indices),
    new T.ShaderMaterial({
      uniforms,
      side: T.DoubleSide,
      transparent: true,
      depthWrite: false,
      vertexShader: `${waterMath}
    uniform float impact; varying vec2 st;varying float energy;
    void main(){float x=position.x,r=position.y,side=sign(position.z),v=abs(position.z)-1.;
      float z=side*sqrt(max(.004,r*r-.20));float h;vec2 grad,drift;surface(vec2(x,z),h,grad,drift);
      float group=.5+.5*sin(3.*x+side*1.9-clock*2.7+.93*sin(x*3.3+clock*.71));
      energy=clamp(.12*storm+.78*storm*pow(group,3.)+impact*(.44+.55*group),0.,1.3);
      float lip=.028+.29*energy*energy+.025*energy*sin(x*27.-clock*3.);
      float y=clamp(h-.032+v*lip,-r+.001,r-.001);st=vec2(x,v);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(x,y,side*sqrt(max(.001,r*r-y*y)),1.);}`,
      fragmentShader: `${noiseGL}
    uniform float clock,flash;varying vec2 st;varying float energy;
    void main(){float grain=fb(vec2(st.x*26.,st.y*4.-clock*1.9));
      float lace=smoothstep(.48,.69,grain)+.52*exp(-abs(st.y-.78-.14*sin(st.x*33.+clock))*15.);
      float alpha=smoothstep(.16,.48,energy)*(1.-smoothstep(.76,1.,st.y))*smoothstep(0.,.14,st.y);
      gl_FragColor=vec4(mix(vec3(.14,.43,.38),vec3(.81,1.,.90),min(1.,lace))+flash*.29,alpha*(.11+.86*lace));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
    }),
  );
  sheet.castShadow = false;
  sheet.frustumCulled = false;
  sheet.renderOrder = 3;

  // A slip of luminous plankton follows the wave troughs. Spray takes a ballistic
  // arc outwards and sticks to the curved wall for the last part of its flight.
  const rand = rng(731),
    seeds = [],
    types = [];
  for (let i = 0; i < 930; i++) {
    const spray = i < 490;
    const x = -3.14 + 4.91 * rand(),
      r = radius(x) - 0.12;
    seeds.push(x, rand(), rand(), rand());
    types.push(r, spray ? (i % 2 ? 1 : -1) : 0, rand(), rand());
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(new Float32Array((types.length / 4) * 3), 3));
  g.setAttribute("grain", new T.Float32BufferAttribute(seeds, 4));
  g.setAttribute("kind", new T.Float32BufferAttribute(types, 4));
  const points = new T.Points(
    g,
    new T.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
      vertexShader: `${waterMath}
    uniform float impact;uniform vec2 viewport;attribute vec4 grain,kind;varying float alpha,foam;
    void main(){float x=grain.x,r=kind.x,s=kind.y;float h;vec2 grad,dr;float z,y;foam=abs(s);
      if(foam>.5){
        float age=fract(clock*(.83+.43*grain.w)+grain.y);
        z=s*(.74+.26*smoothstep(0.,.64,age))*sqrt(max(.002,r*r-.198));
        surface(vec2(x,z),h,grad,dr);float pulse=.5+.5*sin(3.*x+s*1.9-clock*2.7+.93*sin(x*3.3+clock*.71));
        float energy=clamp(storm*pow(pulse,3.)+.96*impact,0.,1.35);
        y=h+.024+energy*(.16+.47*grain.z)*4.*age*(1.-age);
        y=clamp(y,-r+.003,r-.003);z=sign(z)*min(abs(z),sqrt(max(.001,r*r-y*y)));
        alpha=energy*smoothstep(.0,.12,age)*(1.-smoothstep(.66,1.,age));
      }else{
        x+=.095*sin(clock*1.2+grain.z*19.);
        z=(grain.y*2.-1.)*(r-.18)+.075*cos(clock+grain.z*19.);
        surface(vec2(x,z),h,grad,dr);y=h+.009-.037*kind.z;
        float trough=1.-smoothstep(-.09,.09,h+.445-sloshing*x*.40);
        alpha=(.16+.84*trough)*(.25+.75*storm)*pow(.5+.5*sin(clock*3.+grain.w*38.),2.);
        x+=dr.x*.75;z+=dr.y*.75;
      }
      vec4 mv=modelViewMatrix*vec4(x,y,z,1.);gl_Position=projectionMatrix*mv;
      gl_PointSize=clamp((.015+.034*kind.w)*viewport.y/max(.3,-mv.z),1.5,14.);
    }`,
      fragmentShader: `varying float alpha,foam;void main(){
      vec2 p=gl_PointCoord*2.-1.;float d=dot(p,p);if(d>1.)discard;
      float glow=exp(-4.*d)+1.8*exp(-18.*d);
      vec3 color=mix(vec3(.05,1.5,1.23),vec3(.65,.90,1.02),foam);
      gl_FragColor=vec4(color,clamp(alpha*(1.-d)*glow,0.,1.));}`,
    }),
  );
  points.frustumCulled = false;
  points.renderOrder = 4;
  points.layers.enable(1);
  parent.add(points);
}
