import * as T from 'three';
import { TAU, V, rng, group, mesh, ball, u, noiseGL } from './geometry.js';

import { pelagic } from './pelagic.js';

const membranes = new T.ShaderMaterial({
  glslVersion: T.GLSL3,
  uniforms: u,
  transparent: true,
  depthWrite: false,
  side: T.DoubleSide,
  vertexShader: `
  out vec2 st;out vec3 P,N,local;uniform float time,pulse;
  void main(){
    st=uv;local=position;vec3 p=position;float k=sin(time*2.05-position.y*3.);
    p.xz*=1.+.049*k*clamp(pulse,0.,1.8);p.y+=.045*k*st.y;
    P=(modelMatrix*vec4(p,1)).xyz;N=normalize(mat3(modelMatrix)*normal);
    gl_Position=projectionMatrix*viewMatrix*vec4(P,1);}`,
  fragmentShader:
    noiseGL +
    `
  in vec2 st;in vec3 P,N,local;uniform float time,pulse;out vec4 outColor;
  const float tau=6.2831853;
  void main(){
    float s=st.x*tau,t=st.y;vec3 n=normalize(N);float fr=pow(1.-abs(dot(n,normalize(cameraPosition-P))),1.40);
    float ripple=sin(s*16.+t*7.+time*.65)*.25+nv(local*7.)*.45;
    float meridian=abs(sin(s*16.+.48*sin(t*8.+s*3.)*smoothstep(.15,.64,t)));
    float canal=exp(-meridian*(13.+10.*t));
    float split=exp(-abs(meridian-.38*smoothstep(.30,.83,t))*24.)*.50;
    float grain=fb(local*17.+vec3(.0,time*.1,.0));float micro=pow(.5+.5*cos(s*172.+9.*grain+2.*sin(t*18.)),8.);
    float ribs=pow(.5+.5*cos(t*170.+s*1.2+4.*grain),7.);
    float edge=exp(-abs(1.-t)*42.);float inner=exp(-abs(t-.82-.027*sin(s*8.))*55.);
    float w=pow(.5+.5*cos(t*10.-time*2.35+s*.0),4.);
    vec3 teal=vec3(.016,1.21,1.68), violet=vec3(.39,.086,1.69), rose=vec3(1.48,.093,.49), gold=vec3(1.76,.64,.078);
    vec3 hue=mix(teal,violet,.5+.48*sin(s*2.+3.*t+.7*fr));
    hue=mix(hue,rose,.54*smoothstep(.45,.85,t)*(.55+.45*cos(s*3.+t*9.)));
    hue=mix(hue,gold,.66*pow(.5+.5*sin(s*2.+t*9.-.4),7.));
    float lattice=(canal+split)*(.5+.5*ribs);
    vec3 col=vec3(.012,.065,.12)+hue*(.12*grain+.59*fr+.08*micro+(.88+1.48*pulse*w)*lattice+
        (1.15+1.80*pulse*w)*edge+.58*inner+.14*ribs*micro);
    col+=vec3(.43,.96,1.)*pow(max(0.,dot(reflect(-normalize(cameraPosition-P),n),normalize(vec3(-.43,.81,.4)))),22.)*.90;
    float opacity=clamp(.105+.53*fr+.24*lattice+.35*edge+.09*micro,.09,.85);
    float dist=length(cameraPosition-P);outColor=vec4(mix(col,vec3(.009,.039,.065),1.-exp(-dist*dist*.00075)),opacity);
  }`,
});
function bell(parent, where, r, h, phase = 0) {
  const pos = [],
    uv = [],
    idx = [],
    cols = 148,
    rows = 42;
  for (let j = 0; j <= rows; j++)
    for (let i = 0; i <= cols; i++) {
      const t = j / rows,
        a = (TAU * i) / cols,
        theta = t * 1.89 + 0.0002;
      const scallop = Math.cos(16 * a + phase) * t ** 5;
      const rad =
        r * Math.sin(theta) * (1 + 0.045 * Math.cos(8 * a) * Math.sin(theta) ** 2 + 0.044 * scallop);
      pos.push(
        rad * Math.cos(a),
        h * Math.cos(theta) + r * 0.077 * scallop + r * 0.028 * Math.sin(a * 7 + phase) * t ** 4,
        rad * Math.sin(a)
      );
      uv.push(i / cols, t);
      if (j && i) {
        const k = j * (cols + 1) + i;
        idx.push(k - cols - 2, k - 1, k, k - cols - 2, k, k - cols - 1);
      }
    }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = mesh(parent, g, membranes, where);
  m.renderOrder = 5;
  return m;
}
const silk = new T.ShaderMaterial({
  glslVersion: T.GLSL3,
  uniforms: u,
  transparent: true,
  depthWrite: false,
  side: T.DoubleSide,
  vertexShader: `in vec3 fiber;out vec3 info,P;out float side;uniform float time;
  void main(){info=fiber;vec3 p=position;float s=fiber.x,id=fiber.y;
    p.x+=(.055+.23*s)*sin(s*8.-time*1.22+id)+s*.10*sin(s*17.+time*.62+id*.25);
    p.z+=(.04+.15*s)*sin(s*10.-time*.87+id*1.8);p.y+=.031*sin(time*1.51+s*13.+id);
    P=(modelMatrix*vec4(p,1)).xyz;side=uv.x;
    gl_Position=projectionMatrix*viewMatrix*vec4(P,1);}`,
  fragmentShader: `
    in vec3 info,P;in float side;uniform float time,pulse;out vec4 outColor;
    void main(){float s=info.x,id=info.y,k=info.z;
    float w=pow(.5+.5*cos(s*13.-time*2.4+id*.18),7.);
    vec3 cyan=vec3(.018,.86,1.41),pink=vec3(1.31,.095,.51),gold=vec3(1.68,.80,.11);
    vec3 c=mix(cyan,pink,.5+.49*sin(id*3.+s*7.));c=mix(c,gold,.65*pow(.5+.5*cos(id*.8+s*9.),6.));
    float beads=pow(.5+.5*sin(s*(k>.5?133.:96.)+id),8.);
    float ruffle=pow(.5+.5*sin(side*15.+s*230.+id),3.);
    float e=abs(2.*side-1.);float value=.24+.54*e+.69*beads+pulse*w*(.75+1.52*beads);
    if(k>.5)value=.17+.58*e+.37*ruffle+.32*beads+.63*pulse*w;
    c*=value;float d=length(P-cameraPosition);
    outColor=vec4(mix(c,vec3(.009,.039,.065),1.-exp(-d*d*.00085)),k>.5?.36+.27*e:.56+.30*beads);}`,
});
function filaments(parent, random) {
  const pos = [],
    uv = [],
    fib = [],
    idx = [];
  for (let j = 0; j < 64; j++) {
    const a = (TAU * j) / 64,
      id = random() * TAU,
      lace = j < 8,
      start = pos.length / 3;
    const length = lace ? 2.05 + random() * 1.13 : 1.0 + random() ** 0.8 * 3.1;
    const rootR = lace ? 0.1 + random() * 0.24 : 0.74 + random() * 0.24;
    for (let k = 0; k <= 96; k++) {
      const s = k / 96,
        rad = rootR * (1 - 0.48 * s);
      const phase = a + (lace ? s * 4.4 : s * 0.72);
      const px =
        Math.cos(phase) * rad + s * s * (0.58 + 0.26 * Math.sin(id)) + 0.12 * s * Math.sin(11 * s + id);
      const py = -0.18 - s * length,
        pz = Math.sin(phase) * rad + 0.12 * s * Math.cos(s * 9 + id);
      const width = lace
        ? (0.11 + 0.045 * Math.sin(23 * s + id)) * (1 - s * 0.85)
        : (0.0095 + random() * 0.002) * (1 - 0.69 * s);
      const count = lace ? 5 : 3;
      for (let l = 0; l < count; l++) {
        const v = l / (count - 1),
          edge = v * 2 - 1,
          wave = s * 12 + id;
        const dx = lace ? edge * Math.cos(wave) : Math.cos(TAU * v),
          dz = lace ? edge * Math.sin(wave) : Math.sin(TAU * v);
        pos.push(
          px + width * dx,
          py + (lace ? 0.045 * edge * Math.sin(103 * s + id) : 0),
          pz + width * dz
        );
        uv.push(v, s);
        fib.push(s, id, lace ? 1 : 0);
        if (k && l) {
          const n = start + k * count + l;
          idx.push(n - count - 1, n - 1, n, n - count - 1, n, n - count);
        }
      }
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setAttribute('fiber', new T.Float32BufferAttribute(fib, 3));
  g.setIndex(idx);
  const m = mesh(parent, g, silk);
  m.renderOrder = 4;
}

const combMat = new T.ShaderMaterial({
  glslVersion: T.GLSL3,
  uniforms: u,
  transparent: true,
  side: T.DoubleSide,
  depthWrite: false,
  vertexShader: `out vec3 P,N;out vec2 st;uniform float time;void main(){vec3 p=position;st=uv;
    p.xz*=(1.+.041*cos(st.x*50.265)+.044*sin(time*2.+p.y*7.))*(.91+.11*cos(st.y*3.14));vec3 n=normal;
    #ifdef USE_INSTANCING
      p=(instanceMatrix*vec4(p,1.)).xyz;n=mat3(instanceMatrix)*n;
    #endif
    P=(modelMatrix*vec4(p,1)).xyz;N=normalize(normalMatrix*n);gl_Position=projectionMatrix*viewMatrix*vec4(P,1);}`,
  fragmentShader: `in vec3 P,N;in vec2 st;out vec4 outColor;uniform float time,pulse;
    void main(){float q=abs(sin(st.x*25.1327+.21*sin(st.y*8.)));
    float row=exp(-q*17.),comb=pow(.5+.5*cos(st.y*194.+st.x*15.),3.);
    float fr=pow(1.-abs(normalize(N).z),1.6);float w=.5+.5*sin(st.y*13.-time*3.);
    vec3 c=.58+.52*cos(vec3(.1,2.2,4.2)+st.y*10.-time*1.25+st.x*4.);
    vec3 col=vec3(.018,.082,.14)+vec3(.13,.66,.83)*fr*.85+c*(.35+1.67*comb)*row*(.60+1.38*pulse*w);
    outColor=vec4(col,.12+.48*fr+.29*row);}`,
});
export function life(scene) {
  const random = rng(8064),
    colony = group(scene);
  bell(colony, [0, 0, 0], 1.04, 0.86);
  // Nectophores line the curved colonial stem below the main swimming bell.
  for (let i = 0; i < 7; i++) {
    const p = i / 7,
      a = i * 2.44,
      r = 0.27 - 0.11 * p;
    const sac = mesh(colony, new T.SphereGeometry(1, 28, 18), combMat, [
      0.17 * Math.cos(a) + p * 0.21,
      -0.25 - i * 0.2,
      0.17 * Math.sin(a),
    ]);
    sac.scale.set(r, r * 1.38, r * 0.77);
    sac.rotation.z = -0.4 + 0.79 * Math.sin(a);
    sac.renderOrder = 4;
  }
  // Four folded gastric canals visible through the mesoglea.
  const gastral = new T.ShaderMaterial({
    uniforms: u,
    glslVersion: T.GLSL3,
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide,
    vertexShader: `out vec2 st;uniform float time;void main(){st=uv;vec3 p=position;p.y+=.017*sin(time*2.05+st.x*6.28);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1);}`,
    fragmentShader: `in vec2 st;uniform float time,pulse;out vec4 outColor;void main(){float rib=pow(.5+.5*cos(st.x*204.+st.y*7.),3.);
      float w=pow(.5+.5*sin(st.x*14.-time*2.),4.);vec3 c=mix(vec3(.64,.12,.083),vec3(1.26,.53,.17),rib);
      outColor=vec4(c*(.48+.66*pulse*w),.22+.23*rib);}`,
  });
  for (let k = 0; k < 4; k++) {
    const pts = [];
    const angle = (k * TAU) / 4 + 0.28;
    for (let j = 0; j < 31; j++) {
      const a = -2.47 + (j / 30) * 4.94,
        r = 0.235 + 0.13 * Math.cos(a);
      pts.push(
        V(
          r * Math.cos(angle) - 0.11 * Math.sin(a) * Math.sin(angle),
          0.18 + 0.29 * Math.cos(a),
          r * Math.sin(angle) + 0.11 * Math.sin(a) * Math.cos(angle)
        )
      );
    }
    const organ = mesh(
      colony,
      new T.TubeGeometry(new T.CatmullRomCurve3(pts), 80, 0.021, 9, false),
      gastral
    );
    organ.renderOrder = 4;
  }
  filaments(colony, random);
  const jellies = [];
  for (let i = 0; i < 19; i++) {
    let p =
      i < 3
        ? [
            [3.68, 1.01, -1.91],
            [1.03, 3.52, -3.85],
            [-3.98, 3.63, -2.5],
          ][i]
        : [(random() - 0.5) * 18, -1 + random() * 7, -5 - random() * 16];
    const s = i < 3 ? 0.25 + random() * 0.12 : 0.15 + random() * 0.26;
    const g = group(scene);
    const m = mesh(g, new T.SphereGeometry(1, 36, 28), combMat);
    m.scale.set(s, s * 1.53, s * 0.78);
    m.renderOrder = 4;
    jellies.push([g, p, i * 0.73]);
  }
  // Three loose strings of ctenophores follow the current around the reef ledges.
  const schoolCount = 54;
  const combs = new T.InstancedMesh(new T.SphereGeometry(1, 20, 14), combMat, schoolCount);
  combs.renderOrder = 4;
  combs.frustumCulled = false;
  scene.add(combs);
  const swarm = Array.from({ length: schoolCount }, (_, i) => ({
    bank: i % 3,
    offset: random() * 3.5,
    lift: random() * 0.82,
    drift: random() * 1.15,
    size: 0.048 + random() ** 2 * 0.1,
    phase: random() * TAU,
  }));
  const pose = new T.Object3D();
  const updatePelagic = pelagic(scene);
  const path = [
    [0, 2.52, 2.65, -1.1],
    [7, 2.6, 2.4, -0.92],
    [12, 2.19, 2.61, -0.16],
    [16, 1.85, 2.28, 0.91],
    [20, 1.15, 1.86, 1.51],
    [22.6, 0.7, 1.63, 1.74],
    [26, 1.9, 2.25, 2.44],
    [30, 3.08, 2.67, 1.9],
  ];
  const track = new T.CatmullRomCurve3(path.map((p) => V(...p.slice(1))));
  return {
    colony,
    update(t) {
      updatePelagic(t);
      swarm.forEach(({ bank, offset, lift, drift, size, phase }, i) => {
        const bankX = [-5.8, 2.7, 0.3][bank],
          bankZ = [1.85, 0.45, -7.3][bank];
        const phaseX = t * 0.29 + offset * 0.88 + bank;
        pose.position.set(
          bankX + offset + 0.57 * Math.sin(phaseX),
          -0.57 + lift + 0.48 * Math.sin(phaseX + 0.32 * drift) + bank * 0.61,
          bankZ + drift + 0.43 * Math.cos(phaseX)
        );
        pose.rotation.set(
          0.24 * Math.sin(phase),
          phase + t * 0.32,
          0.31 * Math.sin(phaseX) + 0.24 * Math.sin(phase)
        );
        pose.scale.set(size, size * 1.48, size * 0.83);
        pose.updateMatrix();
        combs.setMatrixAt(i, pose.matrix);
      });
      combs.instanceMatrix.needsUpdate = true;
      let k = 0;
      while (k < path.length - 2 && t > path[k + 1][0]) k++;
      const f = (t - path[k][0]) / (path[k + 1][0] - path[k][0]);
      track.getPoint((k + f) / (path.length - 1), colony.position);
      colony.rotation.set(
        0.11 * Math.sin(t * 0.51),
        0.25 * Math.sin(t * 0.25),
        -0.18 + 0.16 * Math.sin(t * 0.43)
      );
      jellies.forEach(([g, p, o]) => {
        g.position.set(
          p[0] + 0.34 * Math.sin(t * 0.25 + o),
          p[1] + 0.19 * Math.sin(t * 0.74 + o),
          p[2] + 0.19 * Math.cos(t * 0.43 + o)
        );
        g.rotation.set(0.23 * Math.sin(o + t * 0.45), o + 0.32 * t, 0.54 * Math.sin(o + t * 0.31));
      });
    },
  };
}
