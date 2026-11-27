import * as T from 'three';
import { random, shader, V, TAU, geometry, polyline } from './common.js';

const sailVertex = `
  in float batch;in float alloy;out vec2 st;out vec3 world,N;out float id;
  uniform float t,completion;
  void main(){
    vec3 p=position;float angle=.12*sin(t*.23+alloy*23.)+.07*cos(t*.13+batch*6.);
    p.yz=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p.yz;
    mat4 frame=modelMatrix*instanceMatrix;world=(frame*vec4(p,1.)).xyz;
    N=normalize(mat3(frame)*vec3(0.,sin(angle),cos(angle)));
    st=uv;id=alloy;gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);
    if(batch>completion)gl_Position=vec4(3.,3.,3.,1.);
  }`;
const sailFragment = `
  in vec2 st;in vec3 world,N;in float id;uniform sampler2D foilMap;out vec4 f;
  float grid(float x,float w){float deriv=fwidth(x);float e=min(fract(x),1.-fract(x));return (1.-smoothstep(w,w+max(.01,deriv*.75),e))*clamp(1.65-deriv,0.,1.);}
  void main(){
    vec2 xy=st;vec3 v=normalize(cameraPosition-world),n=normalize(N);
    float hex=max(abs(xy.y),dot(abs(xy),vec2(.8660254,.5)))/.8660254;
    float frame=smoothstep(.85,.98,hex);
    float sector=floor((atan(xy.y,xy.x)+3.14159265)/1.04719755);
    float foil=.5+.5*sin(sector*4.1+id*19.);
    vec2 q=xy;float seam=max(grid(q.x*6.,.022),grid(q.y*6.,.022));
    float braces=1.-smoothstep(.0,.033,min(abs(q.x),min(abs(q.y-.57735*q.x),abs(q.y+.57735*q.x))));
    vec3 crinkle=texture(foilMap,q*.32+id*4.3).rgb;
    float crease=crinkle.r-.5;
    float cell=fract(sin(dot(floor(q*6.),vec2(41.23,17.18))+id*5.)*2036.1);
    vec3 reflection=reflect(-v,n);
    float sweep=pow(.5+.5*cos(reflection.x*4.+reflection.z*3.+foil*.52),7.);
    float grazing=pow(1.-abs(dot(v,n)),1.6);
    float metallic=(.07+1.08*sweep+.43*grazing)*(.49+.94*id);
    vec3 gold=mix(vec3(.16,.052,.009),vec3(.83,.395,.083),foil*.54+.24);
    float etch=grid(q.x*69.,.07);
    vec3 c=gold*metallic*(1.-.56*seam)*(.87+.20*cell+.54*crease)*(1.-.10*etch);
    c+=vec3(.45,.23,.06)*pow(clamp(sweep+crease*.48-.20,0.,1.),5.)*(.6+crinkle.g);
    float spike=pow(max(0.,dot(reflection,normalize(vec3(-.72,.39,.55)))),35.);
    c+=vec3(3.7,2.35,.85)*spike;
    c=mix(c,vec3(.13,.087,.048)*(.65+metallic),braces*.65);
    c=mix(c,vec3(.69,.43,.17)*(.14+metallic*.63),frame);
    f=vec4(c,1.);
  }`;
function hex() {
  const pos = [0, 0, 0],
    uv = [0, 0],
    idx = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3,
      x = Math.cos(a),
      y = Math.sin(a);
    pos.push(x, y, 0);
    uv.push(x, y);
    idx.push(0, i + 1, ((i + 1) % 6) + 1);
  }
  return geometry(pos, uv, idx);
}
export function collectors(scene, time, completion, maps) {
  const rng = random(555),
    bands = [];
  const material = shader(
    sailVertex,
    sailFragment,
    { t: time, completion, foilMap: { value: maps.flow } },
    { side: T.DoubleSide },
  );
  // A shell's populated latitudes are continuous, with maintenance corridors between banks.
  const layout = [
    [10.6, 0.41, -0.64, -0.27, 5, 136],
    [11.8, -0.81, 0.84, 0.4, 6, 156],
    [13.0, 0.29, 0.0, -0.58, 7, 168],
    [14.6, -0.39, -0.9, 0.5, 7, 184],
    [16.2, 0.98, 0.63, -0.18, 5, 198],
    [18.8, -0.52, 1.2, -0.62, 6, 210],
    [19.4, 0.43, -0.77, 0.68, 8, 204],
    [20.2, -0.19, -0.18, -0.21, 4, 222],
  ];
  for (const [k, [r, ix, iz, lat, rows, cols]] of layout.entries()) {
    const group = new T.Group();
    group.rotation.set(ix, 0.4 * k, iz);
    scene.add(group);
    const belt = new T.Group();
    group.add(belt);
    const mats = [],
      alloys = [],
      threshold = [];
    const scale = ((TAU * r) / cols) * 0.66,
      step = (scale * 1.84) / r;
    const gates = Array.from({ length: Math.ceil(cols / 9) }, () => rng() * 0.96);
    for (let col = 0; col < cols; col++) {
      const cluster = gates[Math.floor(col / 9)];
      for (let j = 0; j < rows; j++) {
        if (col % 9 === 8 || (col + j * 3 + k) % 73 === 0) continue;
        const b = lat + (j - (rows - 1) / 2) * step,
          a = (TAU * (col + (j % 2) * 0.5)) / cols;
        const n = V(Math.cos(b) * Math.sin(a), Math.sin(b), Math.cos(b) * Math.cos(a));
        const orbital = n.clone().multiplyScalar(r).applyQuaternion(group.quaternion);
        if (orbital.z > 9.8 && orbital.y > -4.1 && orbital.y < 4.1 && Math.abs(orbital.x) < 12.8)
          continue;
        const right = V(Math.cos(a), 0, -Math.sin(a)),
          up = V().crossVectors(n, right);
        const m = new T.Matrix4().makeBasis(right, up, n);
        m.scale(V(scale * 0.91 * Math.cos(b), scale * 0.93, scale));
        m.setPosition(n.clone().multiplyScalar(r + 0.018 * j));
        mats.push(m);
        alloys.push(0.16 + 0.7 * (0.5 + 0.5 * Math.sin(col * 0.16 + j * 0.23 + k)) + 0.14 * rng());
        threshold.push(cluster * 0.77 + rng() * 0.19);
      }
    }
    const geom = hex();
    geom.setAttribute('alloy', new T.InstancedBufferAttribute(new Float32Array(alloys), 1));
    geom.setAttribute('batch', new T.InstancedBufferAttribute(new Float32Array(threshold), 1));
    const sails = new T.InstancedMesh(geom, material, mats.length);
    mats.forEach((m, i) => sails.setMatrixAt(i, m));
    belt.add(sails);
    const lines = [];
    for (let sector = 0; sector < 30; sector++) {
      if ((sector + k) % 7 === 0) continue;
      for (const sign of [-1, 1]) {
        const b = lat + sign * (rows / 2 + 0.18) * step;
        for (let l = 0; l < 8; l++) {
          for (const d of [l, l + 1]) {
            const a = (TAU * (sector + (d / 8) * 0.92)) / 30;
            lines.push(
              V(r * Math.cos(b) * Math.sin(a), r * Math.sin(b), r * Math.cos(b) * Math.cos(a)),
            );
          }
        }
      }
    }
    polyline(belt, lines, 0xb69b74, 0.24);
    bands.push({ belt, direction: k % 2 === 0 ? 1 : -1, speed: 0.0009 + 0.00019 * k, threshold });
  }
  // The final construction phase skins the gaps between the inclined working orbits.
  // Sort by installation order so the completed prefix is a single instanced draw.
  const infill = [],
    radius = 20.7,
    size = 0.48,
    latitudes = 73;
  for (let row = 0; row < latitudes; row++) {
    const b = -Math.PI / 2 + ((row + 0.5) * Math.PI) / latitudes,
      cs = Math.cos(b);
    const columns = Math.max(5, Math.round((TAU * radius * cs) / (size * 1.55)));
    for (let col = 0; col < columns; col++) {
      if (col % 25 === 24 || (row % 16 === 15 && col % 7 !== 0)) continue;
      const a = ((col + (row % 2) * 0.5) * TAU) / columns;
      const n = V(cs * Math.sin(a), Math.sin(b), cs * Math.cos(a));
      const tangent = V(Math.cos(a), 0, -Math.sin(a)),
        up = V().crossVectors(n, tangent);
      const m = new T.Matrix4().makeBasis(tangent, up, n).scale(V(size * 0.98, size * 0.98, size));
      m.setPosition(n.multiplyScalar(radius));
      const bay = ((Math.floor(col / 7) * 37 + Math.floor(row / 4) * 71) % 139) / 139;
      infill.push({
        m,
        alloy: 0.26 + 0.6 * rng(),
        at: 0.751 + 0.194 * (bay * 0.71 + rng() * 0.09 + 0.2 * Math.cos(b)),
      });
    }
  }
  infill.sort((a, b) => a.at - b.at);
  const outer = hex(),
    thresholds = infill.map((cell) => cell.at);
  outer.setAttribute(
    'alloy',
    new T.InstancedBufferAttribute(
      Float32Array.from(infill, (cell) => cell.alloy),
      1,
    ),
  );
  outer.setAttribute('batch', new T.InstancedBufferAttribute(new Float32Array(thresholds), 1));
  const skin = new T.InstancedMesh(outer, material, infill.length);
  infill.forEach((cell, id) => skin.setMatrixAt(id, cell.m));
  skin.frustumCulled = false;
  scene.add(skin);
  let last = -1;
  return {
    count(p) {
      return (
        bands.reduce((v, b) => v + b.threshold.filter((x) => x <= p).length, 0) +
        thresholds.filter((x) => x <= p).length
      );
    },
    animate(t) {
      bands.forEach((b) => (b.belt.rotation.y = b.direction * t * b.speed));
      skin.rotation.set(0.16, t * 0.00053, -0.18);
      if (last !== completion.value) {
        last = completion.value;
        const end = thresholds.findIndex((value) => value > last);
        skin.count = end < 0 ? infill.length : end;
        skin.visible = skin.count > 0;
      }
    },
  };
}
