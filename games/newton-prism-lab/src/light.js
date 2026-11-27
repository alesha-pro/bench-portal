import * as T from "three";
import {
  bands,
  slit,
  beamDirection,
  trace,
  syncOptic,
  slitHalfWidth,
  V,
} from "./optics.js";
import { rng, TAU } from "./craft.js";
import { SpectrumMesh } from "./spectrum.js";
const rand = rng(2701),
  up = V(0, 1, 0);
const volumeVert = `
attribute vec3 startP,endP,tint;
attribute vec4 shape;
varying vec3 wp;
varying vec3 a,b,col;
varying vec4 spec;
void main(){
 a=startP;b=endP;col=tint;spec=shape;
 vec3 axis=normalize(b-a),u=normalize(cross(axis,abs(axis.y)>.94?vec3(1,0,0):vec3(0,1,0))),v=cross(axis,u);
 float f=position.y+.5;
 wp=mix(a,b,f)+(u*position.x+v*position.z)*mix(spec.x,spec.y,f)*1.05;
 gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);
}`;
const volumeFrag = `
uniform float uTime,uDust,uFront;varying vec3 wp,a,b,col;varying vec4 spec;
float field(vec3 p){
 float w=sin(dot(p,vec3(2.6,4.2,1.3))+uTime*.26+2.*sin(p.z*3.-p.x*1.3-uTime*.13));
 return .78+.19*w+.12*sin(dot(p,vec3(-3.2,7.0,6.0))+w*2.+uTime*.22);
}
void main(){
 vec3 ab=b-a;float len=length(ab);vec3 ax=ab/len,rd=normalize(wp-cameraPosition),ro=cameraPosition-a;
 float nd=dot(rd,ax),nt=dot(ro,ax);vec3 dp=rd-nd*ax,op=ro-nt*ax;
 float A=max(dot(dp,dp),.00001),B=dot(dp,op),R=max(spec.x,spec.y);
 float disc=B*B-A*(dot(op,op)-R*R);if(disc<=0.)discard;
 float h=sqrt(disc),lo=max(0.,(-B-h)/A),hi=(-B+h)/A;
 if(abs(nd)>.00001){float l=-nt/nd,r=(len-nt)/nd;lo=max(lo,min(l,r));hi=min(hi,max(l,r));}
 if(hi<=lo)discard;
 float stepL=(hi-lo)/6.,sum=0.;
 for(int j=0;j<6;j++){
  float t=lo+(float(j)+.5)*stepL;vec3 p=ro+rd*t;
  float s=clamp(dot(p,ax)/len,0.,1.);float rr=mix(spec.x,spec.y,s);
  vec3 radial=p-ax*dot(p,ax);
  float r2=dot(radial,radial)/(rr*rr);
  float soft=exp(-4.8*r2)*max(0.,1.-r2);float core=exp(-28.*r2);
  float threads=.93+.07*sin(dot(radial,vec3(93.,156.,71.))+3.*sin(s*3.));
  float opening=smoothstep(-.22,.22,uFront-spec.w-s*len);
  sum+=(soft+.38*core)*field(p+a)*threads*stepL*opening/max(.04,rr);
 }
 float value=sum*spec.z*(.14+uDust*.84);
 gl_FragColor=vec4(col*value,1.);
}`;
function instancedGeo(base, attributes) {
  const g = new T.InstancedBufferGeometry();
  g.index = base.index;
  for (const k in base.attributes) g.setAttribute(k, base.attributes[k]);
  for (let [key, size, count] of attributes)
    g.setAttribute(
      key,
      new T.InstancedBufferAttribute(
        new Float32Array(count * size),
        size,
      ).setUsage(T.DynamicDrawUsage),
    );
  g.instanceCount = 0;
  return g;
}
const spotVert = `
attribute vec3 pointP,along,across,tint;attribute vec2 power;
varying vec2 st;varying vec3 c;varying vec2 info;
void main(){st=position.xy*2.;c=tint;info=power;vec3 p=pointP+along*st.x+across*st.y;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}
`;
const spotFrag = `
uniform float uFront;varying vec2 st;varying vec3 c;varying vec2 info;
void main(){float q=dot(st,st);float core=exp(-q*15.),air=exp(-q*4.2);
 float bands=.80+.2*cos(st.x*19.+st.y*11.+2.8*sin(st.x*5.));
 gl_FragColor=vec4(c*(core*info.x*bands+air*info.y)*max(0.,1.-q)*smoothstep(8.,13.,uFront),1.);}
`;
const additive = {
  transparent: true,
  depthWrite: false,
  blending: T.AdditiveBlending,
  toneMapped: false,
};
const dustVert = `
attribute vec4 phase;uniform float uTime,uDust,uHeight;uniform int nSeg;
uniform vec3 segA[47],segB[47],segC[47];varying vec3 dustColor;
void main(){
 vec3 p=position;
 p.x+=.22*sin(uTime*.22+phase.x+p.y)+.14*sin(uTime*.33+phase.y+p.z*1.5);
 p.y+=.17*cos(uTime*.27+phase.y+p.x*.7)+.06*sin(uTime*.61+phase.x);
 p.z+=.21*sin(uTime*.18+phase.z+p.y*.8);
 vec3 light=vec3(.079,.064,.041);
 for(int i=0;i<47;i++){if(i>=nSeg)break;
  vec3 ab=segB[i]-segA[i],ap=p-segA[i];float f=clamp(dot(ap,ab)/max(dot(ab,ab),.001),0.,1.);
  vec3 dif=ap-ab*f;float r2=dot(dif,dif);
  light+=segC[i]*(exp(-r2*10.)*.64+exp(-r2*82.)*3.2);
 }
 vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
 gl_PointSize=clamp((.008+phase.w*.031)*uHeight/max(.5,-mv.z),.8,5.6);
 dustColor=light*(.26+1.08*phase.w)*uDust;
}`;
const dustFrag = `varying vec3 dustColor;void main(){vec2 uv=gl_PointCoord*2.-1.;float r=dot(uv,uv);if(r>1.)discard;gl_FragColor=vec4(dustColor*exp(-3.7*r),1.);}`;
function set3(attr, i, v) {
  attr.setXYZ(i, v.x, v.y, v.z);
}
export class LightField {
  constructor(scene, parchment) {
    this.spectrum = new SpectrumMesh(scene, parchment);
    const attrs = (a, n) => a.map(([k, s]) => [k, s, n]);
    this.vg = instancedGeo(
      new T.CylinderGeometry(1, 1, 1, 12, 1, false),
      attrs(
        [
          ["startP", 3],
          ["endP", 3],
          ["tint", 3],
          ["shape", 4],
        ],
        8192,
      ),
    );
    const uniforms = {
      uTime: { value: 0 },
      uDust: { value: 1 },
      uFront: { value: 1000 },
    };
    this.vol = new T.Mesh(
      this.vg,
      new T.ShaderMaterial({
        ...additive,
        uniforms,
        vertexShader: volumeVert,
        fragmentShader: volumeFrag,
        side: T.BackSide,
      }),
    );
    this.vol.frustumCulled = false;
    this.vol.renderOrder = 6;
    scene.add(this.vol);
    this.sg = instancedGeo(
      new T.PlaneGeometry(1, 1),
      attrs(
        [
          ["pointP", 3],
          ["along", 3],
          ["across", 3],
          ["tint", 3],
          ["power", 2],
        ],
        4096,
      ),
    );
    this.spots = new T.Mesh(
      this.sg,
      new T.ShaderMaterial({
        ...additive,
        uniforms,
        vertexShader: spotVert,
        fragmentShader: spotFrag,
        side: T.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -3,
      }),
    );
    this.spots.frustumCulled = false;
    this.spots.renderOrder = 5;
    scene.add(this.spots);
    const N = 17800,
      pos = [],
      ph = [];
    for (let i = 0; i < N; i++) {
      if (i < 2500) {
        const f = rand(),
          w = (rand() + rand() + rand() - 1.5) * 0.46;
        pos.push(
          slit.x + f * 5.9,
          slit.y - f * 0.3 + w,
          slit.z - f * 0.43 + (rand() + rand() - 1) * 0.45,
        );
      } else
        pos.push(
          rand() * 16.4 - 8.2,
          rand() * (i % 3 === 0 ? 6.7 : 3.1) - 0.2,
          rand() * 11.7 - 5.8,
        );
      ph.push(rand() * TAU, rand() * TAU, rand() * TAU, rand() ** 2);
    }
    const dg = new T.BufferGeometry();
    dg.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
    dg.setAttribute("phase", new T.Float32BufferAttribute(ph, 4));
    const vs = () => Array.from({ length: 47 }, () => V());
    this.du = {
      ...uniforms,
      uHeight: { value: 720 },
      nSeg: { value: 0 },
      segA: { value: vs() },
      segB: { value: vs() },
      segC: { value: vs() },
    };
    const motes = new T.Points(
      dg,
      new T.ShaderMaterial({
        ...additive,
        uniforms: this.du,
        vertexShader: dustVert,
        fragmentShader: dustFrag,
      }),
    );
    motes.renderOrder = 8;
    scene.add(motes);
    // Beam-local dust follows the moving optical train, including its reflected leg.
    const localDust = new T.ShaderMaterial({
      ...additive,
      uniforms: this.du,
      vertexShader: `attribute vec4 phase;uniform float uTime,uDust,uHeight,uFront;
      uniform int nSeg;uniform vec3 segA[47],segB[47],segC[47]; varying vec3 dustColor;
      void main(){int i=int(position.x); if(i>=nSeg){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=1.;return;}
        vec3 a=segA[i],b=segB[i],ax=normalize(b-a);
        vec3 u=normalize(cross(ax,abs(ax.y)>.96?vec3(0.,0.,1.):vec3(0.,1.,0.))),v=cross(ax,u);
        float s=fract(position.y+uTime*.012),phi=phase.x+uTime*(.22+.13*phase.w)+s*4.;
        float r=position.z*(.8+.2*sin(uTime*.34+phase.y+4.*s));
        vec3 p=mix(a,b,s)+r*(cos(phi)*u+sin(phi)*v)+.035*sin(phase.y+uTime*.37+s*9.)*v;
        vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
        gl_PointSize=clamp((.005+.019*phase.w)*uHeight/max(.5,-mv.z),.8,3.8);
        dustColor=segC[i]*(.21+1.65*phase.w)*exp(-r*r*12.)*uDust*smoothstep(0.,12.,uFront);
      }`,
      fragmentShader: dustFrag,
    });
    const specks = [],
      spin = [];
    for (let i = 0; i < 47; i++)
      for (let j = 0; j < 110; j++) {
        specks.push(i, rand(), 0.52 * Math.sqrt(rand()));
        spin.push(rand() * TAU, rand() * TAU, 0, rand() ** 2);
      }
    const grains = new T.BufferGeometry();
    grains.setAttribute("position", new T.Float32BufferAttribute(specks, 3));
    grains.setAttribute("phase", new T.Float32BufferAttribute(spin, 4));
    const illuminated = new T.Points(grains, localDust);
    illuminated.frustumCulled = false;
    illuminated.renderOrder = 8;
    scene.add(illuminated);
    this.uniforms = uniforms;
  }
  tube(a, b, r1, r2, color, power) {
    if (a.distanceToSquared(b) < 0.00001) return;
    const i = this.vg.instanceCount++,
      s = this.vg.attributes;
    set3(s.startP, i, a);
    set3(s.endP, i, b);
    s.tint.setXYZ(i, color.r, color.g, color.b);
    s.shape.setXYZW(i, r1, r2, power, this.distance);
  }
  spot(p, dir, n, w, h, c, core, halo) {
    const u = dir.clone().addScaledVector(n, -dir.dot(n));
    if (u.lengthSq() < 1e-4) u.copy(V(1, 0, 0));
    u.normalize();
    const v = n.clone().cross(u).normalize(),
      i = this.sg.instanceCount++,
      s = this.sg.attributes;
    set3(s.pointP, i, p.clone().addScaledVector(n, 0.009));
    set3(s.along, i, u.multiplyScalar(w));
    set3(s.across, i, v.multiplyScalar(h));
    s.tint.setXYZ(i, c.r, c.g, c.b);
    s.power.setXY(i, core, halo);
  }
  update(optics, params) {
    this.vg.instanceCount = 0;
    this.sg.instanceCount = 0;
    this.du.nSeg.value = 0;
    optics.forEach(syncOptic);
    const dir = beamDirection(params.elevation),
      sun = new T.Color(1, 0.78, 0.42);
    const hits = new Set();
    const register = (a, b, c, k) => {
      let n = this.du.nSeg.value;
      if (n === 47) return;
      this.du.segA.value[n].copy(a);
      this.du.segB.value[n].copy(b);
      this.du.segC.value[n].set(c.r * k, c.g * k, c.b * k);
      this.du.nSeg.value++;
    };
    const width = slitHalfWidth(params.slit),
      height = 0.175;
    const flux = Math.sqrt(params.slit / 1.55);
    this.spectrum.begin();
    let previous;
    for (let bi = 0; bi < bands.length; bi++) {
      const [nm, hex] = bands[bi],
        color = new T.Color(hex);
      const slits = [],
        neighbours = [];
      let central;
      for (const z of [-1, -0.5, 0, 0.5, 1]) {
        const column = [];
        for (const y of [-1, 0, 1]) {
          const isCenter = !z && !y;
          const path = trace(
            optics,
            slit.clone().add(V(0, y * height, z * width)),
            dir,
            nm,
            params.spread,
            isCenter,
          );
          const primary = new Map(
            path.filter((s) => !s.order).map((s) => [s.route, s]),
          );
          column.push(path.at(-1));
          if (isCenter) central = { path, primary };
          else neighbours.push(primary);
        }
        slits.push(column);
      }
      const band = { color, slits, center: central.primary };
      if (previous) this.spectrum.interval(previous, band, flux);
      previous = band;
      for (const seg of central.path) {
        const { a, b, at, energy, order, distance, route } = seg;
        this.distance = distance;
        const incoming = distance === 0;
        const commonReflection =
          route.startsWith("/prism'/") && route.indexOf("/", 8) === -1;
        if ((incoming || commonReflection) && bi !== 0) continue;
        const c = incoming || commonReflection ? sun : color;
        if (incoming) {
          this.tube(
            a,
            b,
            0.15 + width * 0.6,
            0.19 + width * 0.7,
            c,
            1.02 * flux,
          );
          this.tube(
            a,
            b,
            0.048 + width * 0.35,
            0.06 + width * 0.45,
            new T.Color(1, 0.89, 0.68),
            0.49 * flux,
          );
          this.tube(a, b, 0.33, 0.51, c, 0.095 * flux);
          register(a, b, c, 0.91 * flux);
        } else {
          hits.add(at);
          const inside = seg.inside !== "air";
          const power =
            (order
              ? (commonReflection ? 0.82 : 0.58) * energy ** 0.78
              : energy) *
            (inside ? 0.35 : 0.69) *
            flux;
          const radius = (inside ? 0.032 : 0.049) + width * 0.22;
          this.tube(a, b, radius, radius * (inside ? 1 : 1.12), c, power);
          if (!order && !inside && bi % 3 === 0)
            register(a, b, c, 0.63 * energy * flux);
          if (
            !order &&
            !inside &&
            (route.includes("lens") || route.includes("sphere"))
          ) {
            this.causticCone(seg, neighbours, c, flux);
          }
        }
        const n =
          at === "oak" || at === "floor"
            ? up
            : at === "wall" || at === "screen"
              ? V(0, 0, 1)
              : at === "right" || at === "left"
                ? V(at === "right" ? -1 : 1, 0, 0)
                : null;
        if (!n) continue;
        const d = b.clone().sub(a).normalize(),
          stretch = 1 / Math.max(0.2, Math.abs(d.dot(n)));
        if (at === "screen" && !order) {
          const footprint = neighbours.map((r) => r.get(route)).filter(Boolean);
          if (footprint.length) {
            const rms = Math.sqrt(
              footprint.reduce((sum, r) => sum + b.distanceToSquared(r.b), 0) /
                footprint.length,
            );
            const concentration = Math.min(2, 0.1 / Math.max(0.025, rms));
            this.spot(
              b,
              d,
              n,
              0.155 * stretch,
              0.15,
              c,
              1.1 * concentration * energy * flux,
              0.17 * energy * flux,
            );
          }
        } else {
          const k = (order ? energy ** 0.78 : energy) * flux;
          this.spot(b, d, n, 0.25 * stretch, 0.21, c, 0.95 * k, 0.34 * k);
        }
      }
      // A finite bundle deposits its energy where rays cluster, including folds on the oak.
      for (const column of slits)
        for (const s of column) {
          if (!["screen", "wall", "oak", "right"].includes(s.at)) continue;
          const n =
            s.at === "oak" ? up : s.at === "right" ? V(-1, 0, 0) : V(0, 0, 1);
          const d = s.b.clone().sub(s.a).normalize();
          const k = s.energy * flux * (s.at === "screen" ? 0.15 : 0.38);
          this.spot(
            s.b,
            d,
            n,
            0.09 / Math.max(0.15, Math.abs(d.dot(n))),
            0.081,
            color,
            k,
            0.26 * k,
          );
        }
    }
    this.spectrum.finish();
    for (const g of [this.sg, this.vg])
      for (const a of Object.values(g.attributes))
        if (a.isInstancedBufferAttribute) a.needsUpdate = true;
    this.hits = [...hits];
  }
  causticCone(seg, neighbours, color, flux) {
    const axis = seg.b.clone().sub(seg.a).normalize(),
      length = seg.a.distanceTo(seg.b);
    if (length < 0.22) return;
    let count = 0,
      aa = 0,
      ab = 0,
      bb = 0;
    for (const sample of neighbours) {
      const ray = sample.get(seg.route);
      if (!ray) continue;
      // Compare each marginal ray at the same axial stations as the chief ray.
      const v = ray.b.clone().sub(ray.a),
        cosine = v.dot(axis);
      if (Math.abs(cosine) < 0.001) continue;
      const offset = ray.a.clone().sub(seg.a);
      const u = offset.addScaledVector(v, -offset.dot(axis) / cosine);
      const delta = v
        .multiplyScalar(length / cosine)
        .addScaledVector(axis, -length);
      aa += u.lengthSq();
      ab += u.dot(delta);
      bb += delta.lengthSq();
      count++;
    }
    if (count < 2) return;
    const r = (t) =>
      0.024 +
      1.25 * Math.sqrt(Math.max(0, (aa + 2 * ab * t + bb * t * t) / count));
    const waist = T.MathUtils.clamp(-ab / Math.max(1e-8, bb), 0, 1);
    const mid = seg.a.clone().lerp(seg.b, waist),
      power = seg.energy * flux * 0.2;
    this.distance = seg.distance;
    this.tube(seg.a, mid, r(0), r(waist), color, power);
    this.distance += length * waist;
    this.tube(mid, seg.b, r(waist), r(1), color, power);
    const gain = Math.min(r(0), r(1)) / r(waist);
    if (waist > 0 && waist < 1 && gain > 1.12) {
      const extent = Math.min(length * 0.16, Math.max(0.025, 0.13 / gain));
      const before = mid
        .clone()
        .addScaledVector(axis, -Math.min(extent, waist * length));
      const after = mid
        .clone()
        .addScaledVector(axis, Math.min(extent, (1 - waist) * length));
      this.distance -= mid.distanceTo(before);
      this.tube(
        before,
        after,
        r(waist) * 0.56,
        r(waist) * 0.56,
        color,
        Math.min(2.1, gain * 0.48) * seg.energy * flux,
      );
    }
  }
  time(t, density, h, opening) {
    this.uniforms.uFront.value = opening ? Math.min(1000, t * 15.5) : 1000;
    this.spectrum.front.value = this.uniforms.uFront.value;
    this.spots.visible = !opening || t > 0.88;
    this.uniforms.uTime.value = t;
    this.uniforms.uDust.value = density;
    this.du.uHeight.value = h;
  }
}
