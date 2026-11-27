import * as T from "three";
import { Reflector } from "three/addons/objects/Reflector.js";
import { LOCK, clamp } from "./core.js";
import { RING_LIFE } from "./molten.js";

const NX = 153,
  NZ = 137,
  DX = 0.105,
  DT = 1 / 30;
const X0 = -8,
  Z0 = -6.7;
// Centered differences for h_tt = c² ∇²h - damping*h_t, with an absorbing margin.
class RippleField {
  constructor() {
    this.height = new Float32Array(NX * NZ);
    this.old = this.height.slice();
    this.next = this.height.slice();
    this.pixels = new Uint8Array(NX * NZ * 4);
    this.damping = this.height.slice();
    for (let z = 0; z < NZ; z++)
      for (let x = 0; x < NX; x++) {
        const margin = Math.min(z, x, NX - 1 - x, NZ - 1 - z);
        this.damping[z * NX + x] = 0.986 - 0.18 * Math.max(0, 1 - margin / 7);
      }
    this.map = new T.DataTexture(this.pixels, NX, NZ, T.RGBAFormat);
    this.map.magFilter = this.map.minFilter = T.LinearFilter;
    this.reset();
  }
  reset() {
    this.height.fill(0);
    this.old.fill(0);
    this.next.fill(0);
    this.tick = 0;
    this.checkpoints = new Map();
    this.events = [];
  }
  impulse(x, z, power, spread) {
    const xx = (x - X0) / DX,
      zz = (z - Z0) / DX,
      width = spread / DX,
      radius = Math.ceil(width * 3);
    for (
      let j = Math.max(1, Math.floor(zz) - radius);
      j < Math.min(NZ - 1, zz + radius + 1);
      j++
    )
      for (
        let i = Math.max(1, Math.floor(xx) - radius);
        i < Math.min(NX - 1, xx + radius + 1);
        i++
      ) {
        const r2 = ((i - xx) ** 2 + (j - zz) ** 2) / (width * width);
        this.height[j * NX + i] += power * (1 - 0.55 * r2) * Math.exp(-r2);
      }
  }
  heightAt(x, z) {
    const u = clamp((x - X0) / DX, 0, NX - 1.001),
      v = clamp((z - Z0) / DX, 0, NZ - 1.001);
    const i = Math.floor(u),
      j = Math.floor(v),
      k = i + j * NX;
    const h = this.height,
      a = u - i,
      b = v - j;
    return (
      (1 - b) * ((1 - a) * h[k] + a * h[k + 1]) +
      b * ((1 - a) * h[k + NX] + a * h[k + NX + 1])
    );
  }
  step(impacts, gold) {
    const t = ++this.tick;
    for (const e of impacts)
      if (e.tick === t) this.impulse(e.x, e.z, e.power, e.spread);
    for (const e of gold)
      if (e.tick === t) this.impulse(e.x, e.z, e.power, e.spread);
    for (const e of this.events)
      if (e.tick === t) this.impulse(e.x, e.z, e.power, e.spread);
    const h = this.height,
      o = this.old,
      n = this.next,
      k = ((1.52 * DT) / DX) ** 2;
    for (let z = 1; z < NZ - 1; z++)
      for (let x = 1, i = z * NX + 1; x < NX - 1; x++, i++)
        n[i] =
          h[i] +
          this.damping[i] * (h[i] - o[i]) +
          k * (h[i - 1] + h[i + 1] + h[i + NX] + h[i - NX] - 4 * h[i]);
    this.old = h;
    this.height = n;
    this.next = o;
  }
  seek(time, impacts, gold, cache) {
    const target = Math.max(0, Math.round(time / DT));
    if (target < this.tick) {
      let at = Math.floor(target / 30) * 30;
      while (at && !this.checkpoints.has(at)) at -= 30;
      const frame = this.checkpoints.get(at);
      if (frame) {
        this.height.set(frame[0]);
        this.old.set(frame[1]);
      } else {
        this.height.fill(0);
        this.old.fill(0);
      }
      this.tick = at;
    }
    while (this.tick < target) {
      this.step(impacts, gold);
      if (cache && this.tick % 30 === 0 && !this.checkpoints.has(this.tick))
        this.checkpoints.set(this.tick, [
          this.height.slice(),
          this.old.slice(),
        ]);
    }
    const h = this.height,
      pixel = (v) => Math.max(0, Math.min(255, Math.round(127.5 + v * 127.5)));
    for (let z = 1; z < NZ - 1; z++)
      for (let x = 1, i = z * NX + 1; x < NX - 1; x++, i++) {
        const j = i * 4;
        this.pixels[j] = pixel(((h[i + 1] - h[i - 1]) / (2 * DX)) * 2.4);
        this.pixels[j + 1] = pixel(((h[i + NX] - h[i - NX]) / (2 * DX)) * 2.4);
        this.pixels[j + 2] = pixel(h[i] * 5);
        this.pixels[j + 3] = 255;
      }
    this.map.needsUpdate = true;
  }
}
const vertexShader = `
uniform mat4 textureMatrix; uniform sampler2D field;
varying vec4 projected; varying vec3 world;
vec2 coord(vec2 w){return (w-vec2(-8.,-6.7))/vec2(15.96,14.28);}
void main(){
  vec3 p=position;
  world=(modelMatrix*vec4(p,1.)).xyz;
  vec2 uv=coord(world.xz);
  if(all(greaterThan(uv,vec2(.007)))&&all(lessThan(uv,vec2(.993))))p.z+=(texture2D(field,uv).b-.5)*.4;
  projected=textureMatrix*vec4(p,1.);
  gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
}`;
const fragmentShader = `
uniform sampler2D tDiffuse, field; uniform float clock, balance, impactAge;
uniform int ringCount;
uniform vec4 rings[16];
varying vec4 projected; varying vec3 world;
void main(){
  vec2 p=world.xz,uv=(p-vec2(-8.,-6.7))/vec2(15.96,14.28);
  float valid=smoothstep(.007,.025,min(min(uv.x,uv.y),min(1.-uv.x,1.-uv.y)));
  vec2 wave=(texture2D(field,uv).rg-vec2(128./255.))*0.83*valid;
  float a=sin(p.y*13.1+p.x*1.76+1.3*sin(p.x*1.41+clock*.33)-clock*1.18);
  float b=sin(p.y*22.6-p.x*2.95+1.6*sin(p.x*.71+p.y*1.5)+clock*.96);
  float c=sin(7.1*p.x+9.3*p.y+.87*clock+1.7*sin(p.y*2.16));
  vec2 slope=wave+smoothstep(-24.,-2.,p.y)*vec2(.0021*c+.0016*b,.0058*a+.0036*b+.0025*c);
  vec3 n=normalize(vec3(-slope.x,1.,-slope.y)),V=normalize(cameraPosition-world);
  float fres=pow(1.-max(0.,dot(n,V)),3.);
  vec2 q=projected.xy/projected.w;
  q+=vec2(slope.x*.088,slope.y*.14+slope.x*.018)/(1.+2.6*length(slope));
  vec3 reflected=texture2D(tDiffuse,clamp(q,.001,.999)).rgb;
  vec3 body=vec3(.005,.019,.021)*(1.+.11*c);
  vec3 water=mix(body,reflected, .62+.33*fres);
  float slopeLight=max(0.,wave.y*.86+wave.x*.32);
  water+=vec3(.29,.52,.53)*slopeLight*.94;
  water+=vec3(.60,.29,.06)*exp(-.5*dot(p,p))*slopeLight*(.6+balance);
  // A molten impact lights the leading capillary crest and a quieter wake.
  // The gravity wave underneath is injected into the same field as the petals.
  if(abs(p.x)<5. && abs(p.y)<5.) {
    vec2 dx=dFdx(p), dy=dFdy(p);
    for(int i=0;i<16;i++) {
      if(i>=ringCount) break;
      vec4 hit=rings[i];
      vec2 delta=p-hit.xy;
      float age=hit.z, radius=.024+age*1.50;
      if(max(abs(delta.x),abs(delta.y))>radius+.08) continue;
      float distanceToHit=length(delta);
      vec2 direction=delta/max(distanceToHit,.001);
      float shimmer=.61+.23*cos(dot(direction,vec2(3.4,4.7))+age*5.)
        +.16*sin(dot(direction,vec2(-6.7,5.3))-age*7.);
      float d=distanceToHit-radius+.009*sin(dot(direction,vec2(7.,-9.))+age*3.)*age;
      float aa=.49*(abs(dot(dx,direction))+abs(dot(dy,direction)));
      float width=.015+.008*age;
      float filtered=sqrt(width*width+aa*aa);
      float crest=width/filtered*exp(-d*d/(filtered*filtered));
      float wake=(d+.105)/filtered;
      float rim=crest+.16*(width/filtered)*exp(-wake*wake)*smoothstep(.08,.28,age);
      float fade=pow(max(0.,1.-age/${RING_LIFE}),1.6);
      float flash=exp(-distanceToHit*distanceToHit/.004-age*18.);
      water+=vec3(2.5,1.08,.19)*(rim*shimmer*fade+flash*1.4)*hit.w*(.65+.5*balance);
    }
  }
  if(impactAge>=0.&&impactAge<3.35){
    float r=length(p-vec2(.12,0.)),travel=r-impactAge*1.52;
    vec2 d=vec2(travel/.045,(travel+.18)/.040);
    float crest=exp(-d.x*d.x)+.35*exp(-d.y*d.y);
    water+=vec3(.35,.22,.085)*crest*smoothstep(.03,.22,impactAge)*exp(-1.15*impactAge);
  }
  float alpha=clamp(.83+.15*fres-.15*smoothstep(2.,5.,length(p-vec2(0.,2.))),.65,.99);
  gl_FragColor=vec4(water,alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
export function buildWater(scene, width, height, gardenImpacts) {
  const field = new RippleField();
  const water = new Reflector(new T.PlaneGeometry(112, 112, 262, 262), {
    textureWidth: width,
    textureHeight: height,
    clipBias: 0.0007,
    multisample: 4,
    shader: {
      name: "Obsidian mirror",
      vertexShader,
      fragmentShader,
      uniforms: {
        color: { value: null },
        tDiffuse: { value: null },
        textureMatrix: { value: null },
        field: { value: null },
        clock: { value: 0 },
        balance: { value: 0.5 },
        impactAge: { value: -1 },
        ringCount: { value: 0 },
        rings: { value: Array.from({ length: 16 }, () => new T.Vector4()) },
      },
    },
  });
  water.rotation.x = -Math.PI / 2;
  water.position.z = -3;
  water.material.transparent = true;
  water.material.depthWrite = false;
  water.renderOrder = 1;
  water.material.uniforms.field.value = field.map;
  scene.add(water);
  let schedule = [],
    until = -1,
    showMode = null;
  function impact(t, x, z, power, spread) {
    return { tick: Math.round(t / DT), x, z, power, spread };
  }
  function update(t, balance, show, impactAge, gold = []) {
    if (show !== showMode) {
      field.reset();
      until = -1;
      schedule = [];
      showMode = show;
    }
    if (t + 2 > until) {
      const end = Math.ceil((t + 8) / 10) * 10;
      for (let time = 0.63; time < end; time += 4.81)
        if (time >= until) schedule.push(impact(time, 0.12, 0, 0.046, 0.24));
      for (const p of gardenImpacts(Math.max(0, until), end))
        schedule.push(
          impact(p.t, p.x, p.z, p.power ?? 0.017, p.spread ?? 0.11),
        );
      if (show && LOCK >= until && LOCK < end)
        schedule.push(impact(LOCK, 0.12, 0, 0.22, 0.29));
      if (show && LOCK + 0.23 >= until && LOCK + 0.23 < end)
        schedule.push(impact(LOCK + 0.23, 0.12, 0, -0.085, 0.24));
      if (!show) schedule = schedule.filter((e) => e.tick >= field.tick);
      until = end;
    }
    field.seek(t, schedule, gold, show);
    const u = water.material.uniforms;
    let count = 0;
    for (const d of gold) {
      const age = t - d.hit;
      if (age >= 0 && age < RING_LIFE)
        u.rings.value[count++].set(d.x, d.z, age, d.source.size / 0.034);
    }
    u.ringCount.value = count;
    water.material.uniforms.clock.value = t;
    water.material.uniforms.balance.value = balance;
    water.material.uniforms.impactAge.value = impactAge;
  }
  return {
    mesh: water,
    heightAt: field.heightAt.bind(field),
    update,
    click(x, z, power = 0.14, spread = 0.19) {
      field.events.push({ tick: field.tick + 1, x, z, power, spread });
    },
    clear() {
      showMode = null;
    },
  };
}
