import * as T from 'three';
import { TAU, V, rng, mesh, u, noiseGL } from './geometry.js';

// Parametric patches share one draw, but keep their own UVs for skin, webbing and eyes.
function animalSkin() {
  const vertices = [],
    indices = [],
    coords = [],
    parts = [];
  return {
    patch(part, columns, rows, sample) {
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= columns; i++) {
          const s = i / columns,
            v = j / rows,
            k = parts.length;
          vertices.push(...sample(s, v));
          coords.push(s, v);
          parts.push(part);
          if (i && j) {
            const a = k - columns - 2;
            indices.push(a, k - 1, k, a, k, a + 1);
          }
        }
      }
    },
    finish() {
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(vertices, 3));
      g.setAttribute('uv', new T.Float32BufferAttribute(coords, 2));
      g.setAttribute('part', new T.Float32BufferAttribute(parts, 1));
      g.setIndex(indices);
      g.computeVertexNormals();
      return g;
    },
  };
}

const squidMaterial = new T.ShaderMaterial({
  uniforms: u,
  side: T.DoubleSide,
  vertexShader: `
    attribute float part; varying float organ; varying vec2 st; varying vec3 P,N,skin;
    uniform float time;
    void main(){
      st=uv;organ=part;skin=position;vec3 p=position;
      float drag=smoothstep(.95,7.9,-p.x);
      p.y+=drag*(.58*sin(p.x*.93+time*.96+p.z*.77)+.21*sin(p.x*1.88+time*1.28+p.y));
      p.z+=drag*(.55*cos(p.x*.74+time*.77+p.y*.84));
      if(part==2.) p.y+=sin(st.x*3.14159265)*st.y*(.28*sin(st.x*7.3-time*1.9)+.10*sin(st.x*14.-time*2.4));
      p.yz*=1.+.022*sin(time*1.35-p.x*.64);
      P=(modelMatrix*vec4(p,1.)).xyz;N=mat3(modelMatrix)*normal;
      gl_Position=projectionMatrix*viewMatrix*vec4(P,1.);
    }`,
  fragmentShader:
    noiseGL +
    `
    uniform float time,radius,strength,pulse;uniform vec3 origin,lampA,lampB,axisA,axisB;
    varying float organ; varying vec2 st; varying vec3 P,N,skin;
    float beam(vec3 lamp,vec3 axis){
      vec3 delta=P-lamp;
      float d2=dot(delta,delta);
      vec3 dir=d2>1e-10?delta*inversesqrt(d2):axis;
      return smoothstep(.93,.982,dot(dir,axis))*exp(-sqrt(d2)*.075);
    }
    void main(){
      vec3 n=dot(N,N)>1e-10?normalize(N):vec3(0.,1.,0.);
      vec3 vp=cameraPosition-P;
      vec3 view=dot(vp,vp)>1e-10?normalize(vp):vec3(0.,0.,1.);
      float facing=clamp(abs(dot(view,n)),0.,1.);
      float fres=pow(max(0.,1.-facing),1.8),grain=fb(skin*3.1);
      n*=dot(view,n)<0.?-1.:1.;
      float diff=max(0.,dot(n,normalize(vec3(-.35,.82,.42))));
      float echo=length(P-origin)-radius;
      float hit=exp(-abs(echo)*mix(.37,1.75,step(0.,echo)))+
                strength*(beam(lampA,axisA)+beam(lampB,axisB));
      float traveling=pow(max(0.,.5+.5*cos(skin.x*2.7-time*4.3+skin.z*.8)),3.);
      vec3 cold=mix(vec3(.15,.95,.92),vec3(.62,.45,1.1),.5+.5*sin(skin.x*.74+skin.y*1.6));
      float mottling=fb(skin*vec3(3.2,7.8,7.8)+grain*2.);
      vec3 flesh=mix(vec3(.022,.045,.074),vec3(.29,.142,.21),smoothstep(.25,.72,mottling));
      vec3 skinColor=flesh*(.32+1.36*diff)+vec3(.024,.043,.063)*diff;
      vec3 hv=view+vec3(-.25,.89,.35);
      float highlight=pow(max(0.,dot(n,dot(hv,hv)>1e-10?normalize(hv):n)),29.);
      skinColor+=vec3(.35,.49,.48)*highlight*(.45+grain);
      skinColor+=vec3(.12,.33,.39)*fres*(.5+grain);
      float lights=0.;
      if(organ<1.5){
        // Paired lines of discrete lens organs along the mantle and the head.
        float longitude=st.y*8.+.095*sin(st.x*8.)+.055*sin(st.x*16.+st.y*7.);
        vec2 cell=vec2(st.x*(organ<.5?39.:11.),longitude);
        float row=mod(floor(cell.y),2.);
        vec2 tile=vec2(fract(cell.x+.24*floor(cell.y)),fract(cell.y))-.5;
        float dots=exp(-dot(tile*vec2(4.7,14.),tile*vec2(4.7,14.)));
        lights=dots*(.52+1.1*mottling)*mix(1.,.38,row);
        float meshwork=abs(sin(st.x*93.+grain*6.+st.y*17.)*sin(st.y*51.-grain*5.-st.x*16.));
        skinColor+=vec3(.040,.10,.12)*exp(-meshwork*17.)*(.30+.70*diff);
        if(organ<.5) skinColor+=vec3(.10,.18,.17)*exp(-abs(st.x-.035-.007*cos(st.y*18.))*71.);
        float myotomes=pow(.5+.5*cos(st.x*170.+grain*3.8),7.);
        skinColor+=vec3(.028,.073,.087)*myotomes*(.24+fres);
      }else if(organ<2.5){
        float ribs=pow(.5+.5*cos(st.x*118.+st.y*8.),11.);
        float lace=pow(.5+.5*cos(st.x*172.+st.y*13.+3.*mottling),7.);
        skinColor=mix(skinColor,vec3(.064,.15,.24),st.y*.57)+cold*(ribs*(.024+.072*st.y)+.039*lace);
        lights=.27*pow(max(0.,st.y),5.);
      }else if(organ<3.5){
        float sockets=pow(.5+.5*cos(st.x*160.),5.)*pow(.5+.5*cos(st.y*12.566),8.);
        skinColor+=vec3(.16,.11,.19)*sockets; lights=.55*sockets;
      }else if(organ<4.5){
        // Concentric iris with a dark horizontal aperture and a corneal catchlight.
        vec2 iris=st.y*vec2(cos(st.x*6.2831853),sin(st.x*6.2831853));float r=st.y;
        float fibres=nv(vec3(iris*23.,1.))+.21*cos(st.x*230.+r*15.);
        vec3 amber=mix(vec3(.105,.051,.014),vec3(.63,.42,.16),smoothstep(.22,.81,fibres));
        vec3 orbit=mix(vec3(.008,.016,.019),flesh,smoothstep(.84,.99,r));
        skinColor=mix(amber*(.76+.45*hit),orbit,smoothstep(.59,.78,r));
        skinColor=mix(vec3(.003,.008,.013),skinColor,smoothstep(.94,1.,length(iris/vec2(.52,.32))));
        skinColor+=vec3(.8,1.13,1.2)*(exp(-length(iris-vec2(-.19,.22))*20.)+.19*exp(-abs(r-.82)*38.)*max(0.,iris.y));
      }else if(organ<5.5){
        skinColor=mix(flesh*.54,skinColor,smoothstep(0.,.22,st.x));
        skinColor+=vec3(.08,.12,.12)*exp(-abs(st.x-.16)*35.);
      }else{
        float annulus=exp(-abs(st.y-.72)*7.);
        skinColor=mix(vec3(.031,.016,.028),vec3(.32,.20,.23),annulus);
        lights=.21*annulus;
      }
      float power=.24+(.16+2.65*hit)*pulse*(.19+2.15*traveling);
      vec3 color=skinColor+cold*lights*power+cold*.13*fres*hit;
      float fog=1.-exp(-length(P-cameraPosition)*.044);
      gl_FragColor=vec4(mix(color,vec3(.008,.048,.076),fog),1.);
    }`,
});

function giantSquid(scene) {
  const skin = animalSkin();
  const girth = (t) => (0.69 + 0.59 * Math.sin(Math.PI * t)) * (1 - t) ** 0.73 + 0.012;
  skin.patch(0, 72, 48, (s, v) => {
    const a = v * TAU,
      r = girth(s) * (1 + 0.032 * Math.cos(a * 6) + 0.115 * Math.exp(-s * 50));
    return [
      s * 5.35 - 0.1 * (1 + Math.cos(a * 3)) * Math.exp(-s * 18),
      0.19 * s + r * Math.sin(a),
      r * 0.85 * Math.cos(a),
    ];
  });
  skin.patch(1, 34, 44, (s, v) => {
    const a = TAU * v,
      r = 0.72 * Math.sin(Math.PI * s) ** 0.78 + 0.012;
    return [-1.52 + 2.16 * s, -0.06 + r * Math.sin(a), r * Math.cos(a)];
  });
  for (const side of [-1, 1]) {
    skin.patch(2, 56, 12, (s, v) => {
      const fan = Math.sin(Math.PI * s) ** 1.32;
      return [
        1.65 + s * 3.69 + 0.71 * v * fan,
        0.06 + 0.17 * s + v * fan * (0.22 + 0.45 * Math.sin(s * 4.6)),
        side * (girth((1.65 + s * 3.69) / 5.35) * 0.61 + 1.52 * fan * v),
      ];
    });
    skin.patch(4, 48, 20, (s, v) => {
      const x = 0.4 * v * Math.cos(s * TAU),
        y = 0.37 * v * Math.sin(s * TAU);
      return [-0.72 + x, -0.17 + y, side * (0.56 + 0.23 * (1 - v * v))];
    });
  }
  // The funnel sits between the mantle collar and the arm crown.
  skin.patch(5, 26, 24, (s, v) => {
    const a = v * TAU,
      rad = 0.14 + 0.09 * (1 - s) ** 2;
    return [
      -1.04 + 1.12 * s,
      -0.49 - 0.16 * (1 - s) + rad * Math.sin(a),
      0.33 + 0.19 * (1 - s) + rad * Math.cos(a),
    ];
  });
  for (let i = 0; i < 10; i++) {
    const a = (i * TAU) / 10,
      club = i === 2 || i === 7;
    const length = club ? 7.95 : 3.8 + 0.72 * Math.sin(i * 3.7);
    const center = (t) => {
      const curl = t * t,
        spread = 0.4 + 1.1 * Math.sin(t * 2.2);
      return V(
        -1.08 - length * t + 0.32 * curl * Math.sin(t * 8 + a),
        -0.08 +
          spread * Math.sin(a) -
          0.61 * t +
          0.44 * Math.sin(t * 4.7 + a * 1.8) * t +
          curl * (0.94 * Math.sin(6.4 * t + a)),
        spread * Math.cos(a) + 0.45 * t * Math.sin(t * 6 + a) + curl * (0.95 * Math.cos(5.7 * t + a))
      );
    };
    const armRadius = (s) =>
      (0.158 * (1 - s) ** 0.72 + 0.009) * (club ? 0.8 : 1) +
      (club ? 0.14 * Math.exp(-(((s - 0.89) / 0.085) ** 2)) * Math.sin(Math.PI * s) ** 0.4 : 0);
    skin.patch(3, 70, 10, (s, v) => {
      const p = center(s),
        r = armRadius(s);
      p.y += r * Math.sin(v * TAU);
      p.z += r * Math.cos(v * TAU);
      return p.toArray();
    });
    for (let j = 0; j < 18; j++)
      for (const row of [-1, 1]) {
        const t = (j + 0.23 * row + 1) / 21,
          p = center(t),
          r = armRadius(t);
        const roll = a + 0.75 * Math.sin(t * 5 + a) + row * 0.47,
          ny = Math.sin(roll),
          nz = Math.cos(roll);
        skin.patch(6, 10, 3, (s, v) => {
          const rim = 0.43 * r * v,
            offset = r * (0.96 + 0.17 * Math.sin(Math.PI * v));
          return [
            p.x + rim * Math.cos(TAU * s),
            p.y + ny * offset + nz * rim * Math.sin(TAU * s),
            p.z + nz * offset - ny * rim * Math.sin(TAU * s),
          ];
        });
      }
  }
  const body = mesh(scene, skin.finish(), squidMaterial);
  return (t) => {
    body.position.set(
      -4.2 + t * 0.33,
      4.02 + 0.29 * Math.sin(t * 0.19),
      -13.7 + 0.63 * Math.sin(0.15 * t)
    );
    body.rotation.set(
      -0.64 + 0.13 * Math.sin(0.2 * t),
      -0.1 + 0.13 * Math.sin(0.15 * t),
      0.08 + 0.07 * Math.cos(0.23 * t)
    );
  };
}

function pelagicRays(scene, random) {
  const skin = animalSkin();
  skin.patch(0, 44, 22, (s, v) => {
    const span = 2 * s - 1,
      f = Math.abs(span);
    const chord = 1 - f ** 1.25;
    return [
      -0.38 - 0.4 * f + 0.31 * f * f + (v - 0.25) * 1.3 * chord,
      0.12 * (1 - f) ** 2 + 0.075 * Math.sin(Math.PI * v) * chord - 0.12 * f,
      span * 1.13,
    ];
  });
  skin.patch(1, 25, 12, (s, v) => {
    const girth = 0.2 * (1 - s) ** 3 + 0.012 * (1 - s);
    return [
      -0.34 - 1.45 * s,
      0.065 + 0.09 * Math.sin(3.9 * s) + girth * 0.55 * Math.sin(TAU * v),
      0.12 * s * s + girth * Math.cos(TAU * v),
    ];
  });
  for (const side of [-1, 1]) {
    skin.patch(1, 14, 12, (s, v) => {
      const r = 0.073 * (1 - 0.93 * s);
      return [
        0.68 + 0.3 * s,
        0.1 + 0.09 * s * s + r * Math.sin(v * TAU),
        side * (0.13 + 0.085 * s) + r * Math.cos(v * TAU),
      ];
    });
  }
  const material = new T.ShaderMaterial({
    side: T.DoubleSide,
    uniforms: u,
    vertexShader: `attribute float part;varying vec3 N;varying vec2 st;varying float depth,id;
      uniform float time;void main(){vec3 p=position;st=uv;id=part;
      float wing=abs(p.z)/1.13, phase=time*2.6+instanceMatrix[3].x*.93;
      p.y+=wing*wing*(.46*sin(phase-wing*2.2+p.x)+.18);
      p.z+=smoothstep(.46,1.8,-p.x)*.15*sin(phase+p.x*2.5);
      vec4 eye=viewMatrix*modelMatrix*instanceMatrix*vec4(p,1.);
      N=normalMatrix*mat3(instanceMatrix)*normal;depth=-eye.z;gl_Position=projectionMatrix*eye;}`,
    fragmentShader: `varying vec2 st;varying vec3 N;varying float depth,id;uniform float time,pulse;
      void main(){float span=abs(2.*st.x-1.);
      float scallop=pow(.5+.5*cos(span*77.+sin(st.y*5.)*2.),8.);
      float wave=.55+.45*sin(span*9.-time*2.5);
      float rim=exp(-min(st.y,1.-st.y)*32.);
      float body=exp(-span*span*47.);
      float spine=body*pow(sin(3.14159*st.y),2.);
      vec3 nn=dot(N,N)>1e-10?normalize(N):vec3(0.,1.,0.);
      vec3 col=mix(vec3(.009,.042,.064),vec3(.031,.123,.13),abs(nn.y));
      col+=vec3(.035,.082,.065)*spine;
      float sockets=exp(-length(vec2((span-.095)*27.,(st.y-.83)*23.))*2.);
      col+=vec3(.67,.92,.56)*sockets;
      if(id<.5) col+=mix(vec3(.26,1.05,.79),vec3(.25,.54,1.1),span)*
        (.52*rim+.12*scallop*span+.19*pow(scallop,3.)*pow(.5+.5*cos(st.y*39.),6.))*(.60+pulse*wave);
      gl_FragColor=vec4(mix(col,vec3(.009,.042,.06),1.-exp(-max(0.,depth)*.052)),1.);}`,
  });
  const school = new T.InstancedMesh(skin.finish(), material, 13);
  school.frustumCulled = false;
  scene.add(school);
  const shoal = Array.from({ length: school.count }, (_, i) => ({
    side: i < 7 ? -1 : 1,
    x: random() * 3.8,
    z: random() * 1.7,
    y: random() * 1.16,
    phase: random() * TAU,
    size: 0.2 + random() * 0.17,
  }));
  const pose = new T.Object3D();
  return (t) => {
    shoal.forEach(({ side, x, y, z, phase, size }, i) => {
      const turn = 0.2 * t + (side < 0 ? 0 : 2.6);
      pose.position.set(
        side * (3.45 + x * 0.78) + 1.45 * Math.sin(turn + x * 0.37),
        -0.42 + y + 0.23 * Math.sin(turn * 1.7 + phase),
        1.24 - z + 1.02 * Math.cos(turn + x * 0.37)
      );
      pose.rotation.set(
        0.49 + 0.28 * Math.cos(turn + phase),
        turn + x * 0.37,
        0.11 * Math.sin(t * 0.85 + phase),
        'YXZ'
      );
      pose.scale.setScalar(size);
      pose.updateMatrix();
      school.setMatrixAt(i, pose.matrix);
    });
    school.instanceMatrix.needsUpdate = true;
  };
}

export function pelagic(scene) {
  const glide = giantSquid(scene),
    flutter = pelagicRays(scene, rng(18546));
  return (t) => {
    glide(t);
    flutter(t);
  };
}
