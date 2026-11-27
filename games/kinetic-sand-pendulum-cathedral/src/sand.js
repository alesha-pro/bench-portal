import * as T from 'three';
import { RATE, RADIUS, SAND_Y } from './motion.js';

const RES = 1536;
const SPAN = RADIUS * 2;
const fullscreen = `varying vec2 coord;
void main(){coord=uv;gl_Position=vec4(position.xy,0.,1.);}`;

// Each swept steel capsule competes on normalized distance in the GPU depth buffer.
// The closest contact owns the texel and writes its cut and displaced shoulders.
// This retains the deepest incision at crossings and prevents successive round
// end caps from piling false berms down the middle of a continuous furrow.
export function sandBed(renderer, scene, grains, point) {
  const state = new T.WebGLRenderTarget(RES, RES, {
    type: T.HalfFloatType,
    minFilter: T.LinearFilter,
    magFilter: T.LinearFilter,
    depthBuffer: true,
  });
  const normals = new T.WebGLRenderTarget(RES, RES, { depthBuffer: false });
  const cam = new T.Camera();
  const stampScene = new T.Scene(),
    normalScene = new T.Scene();
  const base = new T.PlaneGeometry(2, 2);
  const geo = new T.InstancedBufferGeometry();
  geo.index = base.index;
  geo.setAttribute('position', base.attributes.position);
  const capacity = 2048;
  const strokes = new Float32Array(capacity * 4);
  const paths = new T.InstancedBufferAttribute(strokes, 4).setUsage(T.DynamicDrawUsage);
  geo.setAttribute('segment', paths);
  const stamp = new T.ShaderMaterial({
    side: T.BackSide,
    depthTest: true,
    depthWrite: true,
    blending: T.NoBlending,
    vertexShader: `attribute vec4 segment; varying vec2 site; varying vec4 ends;
    void main(){
      ends=segment;
      vec2 lo=min(segment.xy,segment.zw)-0.091, hi=max(segment.xy,segment.zw)+0.091;
      site=mix(lo,hi,position.xy*0.5+0.5);
      gl_Position=vec4(site*vec2(1.,-1.)/${RADIUS.toFixed(3)},0.,1.);
    }`,
    fragmentShader: `varying vec2 site; varying vec4 ends;
    float aggregate(vec2 p){
      vec2 f=fract(p);f=f*f*(3.-2.*f);
      vec2 cell=floor(p);
      vec4 h=fract(sin(dot(cell,vec2(12.82,31.77))+vec4(0.,12.82,31.77,44.59))*1347.14);
      return mix(mix(h.x,h.y,f.x),mix(h.z,h.w,f.x),f.y);
    }
    void main(){
      vec2 ab=ends.zw-ends.xy;
      float u=clamp(dot(site-ends.xy,ab)/max(1e-8,dot(ab,ab)),0.,1.);
      float d=length(site-ends.xy-u*ab);
      float width=0.032+min(length(ab)*0.115,0.005);
      float clump=aggregate(site*97.);
      float r=d/(width*(.95+.1*clump));
      if(r>2.36)discard;
      float trench=-0.045*exp(-2.9*r*r);
      float berm=0.0215*(.88+.24*clump)*exp(-5.0*pow(r-1.02,2.));
      gl_FragDepth=r/2.37;
      gl_FragColor=vec4(trench+berm,exp(-1.6*r*r),exp(-5.*pow(r-1.02,2.)),1.);
    }`,
  });
  const stamps = new T.Mesh(geo, stamp);
  stamps.frustumCulled = false;
  stampScene.add(stamps);

  const deriv = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: { bed: { value: state.texture } },
    vertexShader: fullscreen,
    fragmentShader: `uniform sampler2D bed;varying vec2 coord;
    void main(){
      vec2 k=vec2(1./${RES}.,0.); vec3 center=texture2D(bed,coord).rgb;
      float x=texture2D(bed,coord-k).r-texture2D(bed,coord+k).r;
      float z=texture2D(bed,coord+k.yx).r-texture2D(bed,coord-k.yx).r;
      vec3 n=normalize(vec3(x,${((2 * SPAN) / RES).toFixed(7)},z));
      gl_FragColor=vec4(n.xz*0.5+0.5,center.gb);
    }`,
  });
  const quad = new T.Mesh(base, deriv);
  quad.frustumCulled = false;
  normalScene.add(quad);
  const material = new T.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.83,
    metalness: 0.12,
  });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.bed = { value: state.texture };
    shader.uniforms.bedNormal = { value: normals.texture };
    shader.uniforms.grains = { value: grains };
    shader.vertexShader =
      'uniform sampler2D bed;varying vec2 bedUV;varying float meshHeight;\n' +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        bedUV=uv;meshHeight=.24*texture2D(bed,uv).r;transformed.z+=meshHeight;`,
      );
    shader.fragmentShader =
      'uniform sampler2D bed;uniform sampler2D bedNormal;uniform sampler2D grains; varying vec2 bedUV;varying float meshHeight;\n' +
      shader.fragmentShader
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
        if(distance(bedUV,vec2(.5))>.5) discard;
        // Resolve the continuous surface between displaced mesh vertices by marching
        // the view ray through the 1536-square physical height attachment.
        vec3 eye=cameraPosition-vec3((bedUV.x-.5)*7.24,1.54+meshHeight,(.5-bedUV.y)*7.24);
        vec2 incline=eye.xz*vec2(1.,-1.)/(7.24*max(.10,eye.y));
        float z=.026, stepH=.00235, gap=.1, prev=.1;
        vec2 coord=bedUV;
        for(int i=0;i<33;i++){
          coord=bedUV+incline*(z-meshHeight);
          gap=z-texture2D(bed,coord).r;
          if(gap<=0.)break;
          prev=gap;z-=stepH;
        }
        z+=stepH*clamp(-gap/max(.00001,prev-gap),0.,1.);
        coord=bedUV+incline*(z-meshHeight);
        vec4 relief=texture2D(bedNormal,coord);
        vec2 p=(coord-0.5)*7.24;
        vec3 g=texture2D(grains,coord*6.7).rgb;
        vec3 salt=texture2D(grains,coord*2.16).rgb;
        float swirl=sin(length(p+vec2(1.3,-5.3))*205.+3.*sin(p.x*2.3)+g.g*.42);
        float band=1.+.034*swirl+.085*(g.g-.5);
        vec3 sand=mix(vec3(.103,.062,.032),vec3(.385,.265,.144),g.r);
        sand*=band;
        sand=mix(sand,vec3(.082,.044,.018),relief.b*.73);
        sand=mix(sand,vec3(.98,.68,.32),relief.a*.82);
        float cavity=texture2D(bed,coord).r;
        sand*=1.-.38*smoothstep(0.,.043,-cavity);
        sand*=.74+.50*salt.r;
        sand*=1.+relief.a*(g.b-.5)*.44;
        sand+=vec3(.15,.13,.095)*smoothstep(.66,.92,salt.b);
        diffuseColor.rgb=sand;`,
        )
        .replace(
          '#include <emissivemap_fragment>',
          `#include <emissivemap_fragment>
        totalEmissiveRadiance+=relief.a*relief.a*vec3(.078,.043,.018);`,
        )
        .replace(
          '#include <normal_fragment_maps>',
          `#include <normal_fragment_maps>
        vec2 n=(relief.rg*2.-1.);
        n+=vec2(g.b-.52,g.r-.52)*(.12+.06*relief.a);
        vec3 bedN=normalize(vec3(n.x,sqrt(max(.045,1.-dot(n,n))),n.y));
        normal=normalize(mat3(viewMatrix)*bedN);`,
        );
  };
  const surface = new T.Mesh(new T.PlaneGeometry(SPAN, SPAN, 240, 240), material);
  surface.rotation.x = -Math.PI / 2;
  surface.position.y = SAND_Y;
  surface.receiveShadow = true;
  scene.add(surface);
  let index = 0;
  renderer.autoClear = false;
  function clear() {
    renderer.setRenderTarget(state);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.setRenderTarget(null);
    index = 0;
  }
  function normalPass() {
    renderer.setRenderTarget(normals);
    renderer.render(normalScene, cam);
    renderer.setRenderTarget(null);
  }
  function advance(t) {
    const end = Math.round(t * RATE);
    if (end < index) clear();
    let last = point(index / RATE);
    while (index < end) {
      const n = Math.min(end - index, capacity);
      for (let i = 0; i < n; i++) {
        const next = point(++index / RATE);
        strokes.set([last[0], last[1], next[0], next[1]], 4 * i);
        last = next;
      }
      geo.instanceCount = n;
      paths.clearUpdateRanges();
      paths.addUpdateRange(0, n * 4);
      paths.needsUpdate = true;
      renderer.setRenderTarget(state);
      renderer.render(stampScene, cam);
    }
    normalPass();
  }
  // The rake moves in world x. A scissored clear flattens only the swept texels.
  function rake(f) {
    renderer.setRenderTarget(state);
    renderer.setScissor(0, 0, Math.ceil(RES * f), RES);
    renderer.setScissorTest(true);
    renderer.setClearColor(0, 0);
    renderer.clear();
    renderer.setScissorTest(false);
    renderer.setRenderTarget(null);
    normalPass();
    if (f >= 1) index = 0;
  }
  function measure() {
    const raw = new Uint16Array(RES * RES * 4),
      normal = new Uint8Array(RES * RES * 4);
    renderer.readRenderTargetPixels(state, 0, 0, RES, RES, raw);
    renderer.readRenderTargetPixels(normals, 0, 0, RES, RES, normal);
    let low = 0,
      high = 0,
      cut = 0,
      bank = 0,
      slopes = 0;
    for (let y = 0; y < RES; y += 5)
      for (let x = 0; x < RES; x += 5) {
        const offset = 4 * (y * RES + x),
          h = T.DataUtils.fromHalfFloat(raw[offset]);
        low = Math.min(low, h);
        high = Math.max(high, h);
        if (h < -0.004) cut++;
        if (h > 0.004) bank++;
        if (Math.abs(normal[offset] - 128) + Math.abs(normal[offset + 1] - 128) > 24) slopes++;
      }
    return { low, high, cut, bank, slopes };
  }
  clear();
  return { advance, rake, clear, resolution: RES, measure };
}
