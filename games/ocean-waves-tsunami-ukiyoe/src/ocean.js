import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { random, waterPlate, foamPlate, seaPlate, whitecaps } from './engraving.js';

const V = (x, y, z) => new T.Vector3(x, y, z);
export const tide = {
  clock: { value: 0 },
  surge: { value: 0.67 },
  ink: { value: 0.62 },
  night: { value: 0 }
};
const common = 'uniform float clock, surge, ink, night;';
const waterHeight = `float seaY(vec2 p){
return .24*sin(.62*p.x+.77*p.y+clock*.68)+.18*sin(.35*p.x-.99*p.y+clock*.77)+.12*cos(1.26*p.y-.27*p.x+clock*.87)+.09*sin(1.7*p.x+.37*p.y+clock*1.15);
}`;
const warp =
  waterHeight +
  `
vec3 deform(vec3 p) {
  float w=clamp(p.y/8.,0.,1.3);
  p.x+=w*w*((surge-.65)*2.5+.32*sin(clock*.70+p.z*.48))+.07*w*sin(2.*p.z+clock);
  p.y*=1.+.32*(surge-.65)+.046*sin(clock*.66+p.z*.52);
  p.z+=.23*w*sin(clock*.49+p.x*.58);
  p.y+=seaY(p.xz)*(1.-smoothstep(.05,1.7,p.y));
  return p;
}`;
export function seaLevel(x, z, t) {
  return (
    0.24 * Math.sin(0.62 * x + 0.77 * z + t * 0.68) +
    0.18 * Math.sin(0.35 * x - 0.99 * z + t * 0.77) +
    0.12 * Math.cos(1.26 * z - 0.27 * x + t * 0.87) +
    0.09 * Math.sin(1.7 * x + 0.37 * z + t * 1.15)
  );
}
const seaWarp = waterHeight + `vec3 deform(vec3 p){p.y+=seaY(p.xz);return p;}`;
const dayNight = `vec3 lighting(vec3 c, float n){
 float l=dot(c,vec3(.23,.60,.17));
 return mix(c, c*vec3(.52,.63,.88)+vec3(.020,.031,.061)*(1.-l), n);
}`;
const profile = new T.SplineCurve(
  [
    [-16, -0.6],
    [-12.6, 0.7],
    [-10.35, 2.75],
    [-8.55, 5.25],
    [-7.38, 7.16],
    [-5.68, 8.23],
    [-3.9, 8.56],
    [-2.45, 8.17],
    [-1.6, 7.36],
    [-1.39, 6.83],
    [-1.91, 7.02],
    [-2.78, 7.45],
    [-4.02, 7.33],
    [-4.85, 6.47],
    [-5.05, 5.2],
    [-4.63, 3.43],
    [-3.2, 1.68],
    [-1.1, 0.68],
    [2.5, 0.19],
    [6, -0.53]
  ].map(([x, y]) => new T.Vector2(x, y))
);
const principal = { x: 0, y: 0, z: -0.35, sx: 1, sy: 1, sz: 1 };
const secondary = { x: -4.95, y: -0.28, z: 5.85, sx: 0.58, sy: 0.34, sz: 0.43 };
const far = { x: 10.8, y: -0.36, z: -8.6, sx: -0.72, sy: 0.17, sz: 0.46 };
const ridges = [principal, secondary, far];
function ridgePoint(u, v, o) {
  const p = profile.getPoint(Math.min(1, Math.max(0, u)));
  // The transverse roll comes apart in unequal lobes along the crest.
  const s = v * 2 - 1,
    shoulder = Math.pow(Math.max(0.001, 1 - Math.pow(Math.abs(s), 2.55)), 1.25);
  const lip = Math.exp(-Math.pow((u - 0.415) / 0.135, 2));
  const corr = 0.22 * Math.sin(v * 34 + 0.5) + 0.12 * Math.cos(v * 71) + 0.06 * Math.sin(v * 121);
  let x =
    p.x -
    s * s * 4.6 -
    0.49 * s +
    Math.sin(v * 9.6) * 0.34 +
    lip * shoulder * (1.63 + corr * 2.3 + 0.31 * Math.cos(v * 17));
  let y =
    (p.y + 0.06) * shoulder * (1 + 0.055 * Math.sin(v * 11.4 - 0.4)) +
    lip * corr * shoulder -
    0.24 * Math.pow(Math.abs(s), 5);
  let z = s * 5.75 + 1.04 * Math.sin(u * 4.8 - 0.4) + 0.3 * Math.sin(v * 7 + u * 10);
  const xx = x * o.sx,
    zz = z * o.sz,
    angle = o === principal ? -0.29 : o === secondary ? -0.18 : 0.21;
  return V(
    o.x + xx * Math.cos(angle) + zz * Math.sin(angle),
    o.y + y * o.sy,
    o.z - xx * Math.sin(angle) + zz * Math.cos(angle)
  );
}
function grid(nx, ny, fn) {
  const positions = [],
    uv = [],
    indices = [];
  for (let j = 0; j <= ny; j++)
    for (let i = 0; i <= nx; i++) {
      const u = i / nx,
        v = j / ny,
        p = fn(u, v);
      positions.push(p.x, p.y, p.z);
      uv.push(u, v);
      if (i < nx && j < ny) {
        let a = j * (nx + 1) + i,
          b = a + nx + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  let geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}
function waterMat(sea, ground, caps) {
  return new T.ShaderMaterial({
    uniforms: {
      ...tide,
      caps: { value: caps },
      ground: { value: ground },
      plate: { value: sea ? null : waterPlate() },
      froth: { value: sea ? null : foamPlate() }
    },
    side: T.DoubleSide,
    vertexShader:
      common +
      (sea ? seaWarp : warp) +
      `
    varying vec2 st; varying vec3 wp; varying float baseY;
    void main(){st=uv;baseY=position.y;wp=deform(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(wp,1.);}
   `,
    fragmentShader:
      common +
      dayNight +
      `
    uniform sampler2D plate,froth,ground,caps;varying vec2 st;varying vec3 wp;varying float baseY;
    void main(){
     vec3 n=normalize(cross(dFdx(wp),dFdy(wp))); vec3 eye=normalize(cameraPosition-wp);
     float facing=abs(dot(n,eye));
     vec2 seaCoord=vec2(wp.x*.064+wp.z*.023+clock*.003,wp.z*.118+.062*sin(wp.x*.44+wp.z*.31+clock*.23)+.016*cos(wp.x*.81-wp.z*.52));
     vec3 c=texture2D(ground,seaCoord).rgb;
     float swell=dot(n,normalize(vec3(-.39,.81,.43)));
     c*=.88+.17*smoothstep(.62,.79,swell);
     c=mix(c,vec3(.59,.67,.65),smoothstep(2.,25.,-wp.z)*.70);
     float catches=sin(wp.z*16.+wp.x*.65+2.3*sin(wp.x*1.5-wp.z*1.4+clock*.4));
     float glint=smoothstep(.955,.994,catches)*smoothstep(.07,.43,wp.y)*(.5+.5*sin(wp.x*.77-wp.z*1.1));
     c=mix(c,vec3(.89,.84,.65),glint*.85);
     vec2 ripple=vec2(wp.x*.081+wp.z*.024+.009*sin(clock*.37),wp.z*.109+.029*sin(wp.x*.93+clock*.51));
     vec4 cap=texture2D(caps,ripple);
     c=mix(c,cap.rgb,cap.a*(.37+.63*smoothstep(-.11,.29,wp.y)));

     ` +
      (sea
        ? ''
        : `
     vec3 seaColor=c;
     vec2 coord=vec2(st.x,st.y+.016*sin(st.x*8.+st.y*9.)+.005*sin(clock*.42+st.x*17.+st.y*18.));
     c=texture2D(plate,coord).rgb;
     float cut=smoothstep(.56,.6,dot(n,normalize(vec3(-.45,.85,.30))))*.10;
     float dark=smoothstep(.42,.53,st.x)*(1.-smoothstep(.70,.92,st.x));
     c*=1.-.38*dark; c+=cut*vec3(.46,.40,.25);
     // The white lip has scalloped, split edges and small blue pockets.
     vec4 frothInk=texture2D(froth,st);
     vec3 milk=frothInk.rgb*(.91+.095*smoothstep(-.55,.72,n.y+.3*n.z));
     c=mix(c,milk,frothInk.a);
     c=mix(seaColor,c,smoothstep(.05,1.23,baseY));
     `) +
      `
     c*=mix(.60,1.,smoothstep(.012,.045+ink*.095,facing));
     gl_FragColor=vec4(lighting(c,night),1.);
    }`
  });
}

// Elliptical sections follow the tangent of each fork. The pointed end bends
// back into the wave in the silhouette of a carved foam talon.
function tendril(points, rs, flat = 0.7) {
  const cr = new T.CatmullRomCurve3(points),
    pos = [],
    ind = [],
    segs = 10,
    sides = 8;
  for (let j = 0; j <= segs; j++) {
    const t = j / segs,
      p = cr.getPoint(t),
      tang = cr.getTangent(t).normalize();
    const a = V(0, 0, 1).cross(tang).normalize(),
      b = tang.clone().cross(a).normalize();
    let s = t * (rs.length - 1),
      k = Math.min(rs.length - 2, Math.floor(s)),
      rad = T.MathUtils.lerp(rs[k], rs[k + 1], s - k);
    for (let i = 0; i < sides; i++) {
      const q = (i / sides) * Math.PI * 2,
        pt = p
          .clone()
          .addScaledVector(a, rad * Math.cos(q))
          .addScaledVector(b, rad * flat * Math.sin(q));
      pos.push(pt.x, pt.y, pt.z);
      let h = j * sides + i,
        hn = j * sides + ((i + 1) % sides);
      if (j < segs) ind.push(h, hn, h + sides, hn, hn + sides, h + sides);
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setIndex(ind);
  g.computeVertexNormals();
  return g;
}
function foamMaterial(outline) {
  return new T.ShaderMaterial({
    uniforms: tide,
    side: outline ? T.BackSide : T.FrontSide,
    vertexShader:
      common +
      warp +
      `
 varying vec3 nn,pw;
 void main(){nn=normal;pw=deform(position); vec4 mv=modelViewMatrix*vec4(pw,1.);
 ` +
      (outline
        ? 'mv.xyz+=normalize(normalMatrix*normal)*(.004+.018*ink)*clamp(-mv.z/22.,.65,1.5);'
        : '') +
      `
 gl_Position=projectionMatrix*mv;}`,
    fragmentShader:
      common +
      dayNight +
      `varying vec3 nn,pw;
 void main(){
 ` +
      (outline
        ? 'vec3 c=vec3(.085,.19,.23);'
        : `
 vec3 n=normalize(nn);float l=dot(n,normalize(vec3(-.43,.88,.40)));
 vec3 c=mix(vec3(.48,.64,.65),vec3(.82,.83,.72),smoothstep(-.32,-.24,l));
 c=mix(c,vec3(.98,.927,.776),smoothstep(.12,.19,l));
 c=mix(c,vec3(1.,.964,.835),smoothstep(.69,.81,l));
 `) +
      ` gl_FragColor=vec4(lighting(c,night*.75),1.);}`
  });
}
function foam(o, count, r) {
  const geos = [];
  // The foam is gathered into unequal breaking clusters with ribbons of open water between them.
  for (let i = 0; i < count; i++) {
    const v = 0.065 + (0.87 * (i + 0.55 * r())) / count,
      upper = Math.sin(v * Math.PI);
    const clump = 0.5 + 0.5 * Math.sin(v * 41 + 1.1 * Math.sin(v * 19));
    const s = o.sy * (0.27 + 0.68 * r()) * (0.48 + 0.54 * upper) * (0.48 + 0.81 * clump);
    let u = 0.363 + 0.108 * r(),
      root = ridgePoint(u, v, o);
    const sense = Math.sign(o.sx);
    const angle = (r() - 0.53) * 2.1,
      dx = Math.cos(angle) * sense,
      dz = Math.sin(angle);
    const reach = 0.38 + r() * 0.73,
      rise = 0.12 + r() * 0.61;
    const at = (x, y, z) =>
      root.clone().add(V((dx * x - dz * z) * s, y * s, (dz * x + dx * z) * s));
    let knuckle = at(reach * 0.58, rise + 0.1, 0),
      top = at(reach, rise + 0.13, 0.04);
    geos.push(
      tendril(
        [
          root.clone().add(V(0, -0.1 * s, 0)),
          at(0.15, rise * 0.76, 0),
          knuckle,
          top,
          at(reach + 0.25, rise - 0.07, 0.1),
          at(reach + 0.3, rise - 0.36, 0.12)
        ],
        [0.24 * s, 0.24 * s, 0.175 * s, 0.16 * s, 0.09 * s, 0.009 * s],
        0.86
      )
    );
    const forks = 1 + Math.floor(r() * 3);
    for (let k = 0; k < forks; k++) {
      const zz = (k - forks * 0.45) * 0.32,
        ex = reach + 0.22 + r() * 0.5,
        h = rise + (r() - 0.39) * 0.52;
      geos.push(
        tendril(
          [
            knuckle,
            at(reach * 0.79, h + 0.12, zz * 0.56),
            at(ex, h + 0.09, zz),
            at(ex + 0.13, h - 0.14, zz * 1.24),
            at(ex + 0.09, h - 0.37, zz * 1.32)
          ],
          [0.14 * s, 0.13 * s, 0.1 * s, 0.068 * s, 0.006 * s],
          0.79
        )
      );
    }
    if (i % 3 !== 1) {
      const origin = ridgePoint(0.275 + 0.05 * r(), v, o),
        height = (0.26 + r() * 0.59) * s,
        lean = (0.22 + r() * 0.65) * s;
      const q = (x, y, z) => origin.clone().add(V(x * lean * sense, y * height, z * s));
      geos.push(
        tendril(
          [
            q(0, -0.17, 0),
            q(0.24, 0.38, -0.06),
            q(0.57, 0.83, -0.14),
            q(1.1, 0.99, -0.1),
            q(1.28, 0.87, -0.05)
          ],
          [0.19 * s, 0.18 * s, 0.125 * s, 0.09 * s, 0.008 * s],
          0.82
        )
      );
      if (clump > 0.48)
        geos.push(
          tendril(
            [q(0.3, 0.51, -0.06), q(0.24, 0.84, -0.24), q(0.48, 1.18, -0.3), q(0.72, 1.16, -0.34)],
            [0.11 * s, 0.1 * s, 0.065 * s, 0.006 * s]
          )
        );
    }
  }
  if (o === principal) {
    // Hanging spray breaks free in longer, hooked lappets at the crown.
    for (let j = 0; j < 17; j++) {
      const v = 0.235 + (0.48 * (j + r() * 0.45)) / 17,
        root = ridgePoint(0.419 + r() * 0.05, v, o);
      const f = 0.5 + 0.5 * Math.sin(v * 58),
        l = 0.55 + 0.64 * f + 0.47 * r(),
        h = 0.19 + r() * 0.33,
        z = (r() - 0.55) * 0.94;
      const q = (x, y, d) => root.clone().add(V(x * l, y * l, d));
      geos.push(
        tendril(
          [
            q(-0.13, -0.03, 0),
            q(0.19, h * 0.95, z * 0.28),
            q(0.6, h, z * 0.68),
            q(0.89, h - 0.22, z),
            q(0.94, h - 0.53, z + 0.1),
            q(0.83, h - 0.85, z + 0.16)
          ],
          [0.15, 0.19, 0.16, 0.11, 0.085, 0.009],
          0.82
        )
      );
      geos.push(
        tendril(
          [
            q(0.49, h, z * 0.6),
            q(0.7, h + 0.16, z - 0.15),
            q(0.9, h + 0.09, z - 0.21),
            q(0.97, h - 0.19, z - 0.24)
          ],
          [0.1, 0.105, 0.063, 0.004],
          0.78
        )
      );
    }
  }
  const merged = mergeGeometries(geos);
  geos.forEach((g) => g.dispose());
  return merged;
}
export function addOcean(scene) {
  const ground = seaPlate(),
    caps = whitecaps(),
    seaMat = waterMat(true, ground, caps);
  const sea = new T.Mesh(
    grid(210, 140, (u, v) => V((u - 0.5) * 44, -0.03, -21 + v * 32.8)),
    seaMat
  );
  scene.add(sea);

  const wm = waterMat(false, ground, caps),
    fm = foamMaterial(false),
    om = foamMaterial(true),
    r = random(5022);
  const droplets = [];
  for (const [i, o] of ridges.entries()) {
    scene.add(
      new T.Mesh(
        grid(119, 98, (u, v) => ridgePoint(u, v, o)),
        wm
      )
    );
    const g = foam(o, [86, 49, 30][i], r);
    scene.add(new T.Mesh(g, om), new T.Mesh(g, fm));
    for (let j = 0; j < [730, 145, 65][i]; j++) {
      let v = 0.05 + r() * 0.9,
        crest = ridgePoint(0.34 + r() * 0.1, v, o);
      let sz = (0.019 + 0.083 * r() ** 2) * (0.48 + 0.52 * o.sy),
        phase = r() * Math.PI * 2;
      droplets.push([
        crest,
        (0.19 + r() ** 1.1 * 3.8) * o.sx,
        (0.29 + r() ** 1.18 * 3.2) * o.sy,
        (r() - 0.48) * 3.2 * o.sz,
        sz,
        phase
      ]);
    }
  }
  const geometry = new T.SphereGeometry(1, 7, 5);
  const mat = new T.ShaderMaterial({
    uniforms: tide,
    vertexShader:
      common +
      warp +
      `
 varying vec3 nn;void main(){nn=normal;vec3 p=(instanceMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(deform(p),1.);}`,
    fragmentShader:
      common +
      dayNight +
      `varying vec3 nn;void main(){float l=dot(normalize(nn),vec3(-.4,.7,.6));vec3 c=mix(vec3(.38,.55,.59),vec3(1.,.92,.71),smoothstep(-.4,-.1,l));gl_FragColor=vec4(lighting(c,night*.7),1.);}`
  });
  const spray = new T.InstancedMesh(geometry, mat, droplets.length);
  spray.frustumCulled = false;
  scene.add(spray);
  const obj = new T.Object3D();
  return (t) => {
    tide.clock.value = t;
    droplets.forEach(([p, x, y, z, sz, phase], i) => {
      let flight = (t * (0.104 + 0.013 * (i % 6)) + phase) % 1,
        f = Math.sin(Math.PI * flight);
      obj.position.set(
        p.x + x * flight + 0.18 * Math.sin(phase + t * 0.9),
        p.y + f * y + 0.18 - flight * flight * 0.65,
        p.z + z * flight
      );
      const rad = sz * (0.18 + 0.82 * Math.sqrt(Math.max(0, f)));
      obj.scale.set(rad, rad * (1.2 + 0.8 * flight), rad * 0.87);
      obj.rotation.z = 0.62 - flight * 1.6;
      obj.updateMatrix();
      spray.setMatrixAt(i, obj.matrix);
    });
    spray.instanceMatrix.needsUpdate = true;
  };
}
