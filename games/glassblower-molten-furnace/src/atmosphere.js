import { T, random, noiseGLSL } from "./studio.js";

export function atmosphere(scene, U) {
  const rng = random(4507);
  function seeds(count) {
    const values = new Float32Array(count * 4);
    for (let i = 0; i < values.length; i++) values[i] = rng();
    return values;
  }
  // Ballistic cinders carry their own projected velocity into the streak shader.
  for (const spark of [true, false]) {
    const count = spark ? 108 : 85;
    const geo = new T.BufferGeometry();
    geo.setAttribute("position", new T.Float32BufferAttribute(new Float32Array(count * 3), 3));
    geo.setAttribute("seed", new T.Float32BufferAttribute(seeds(count), 4));
    const material = new T.ShaderMaterial({
      uniforms: U,
      transparent: true,
      depthWrite: false,
      blending: spark ? T.AdditiveBlending : T.NormalBlending,
      vertexShader: `
        uniform float time,heat; uniform vec2 res; attribute vec4 seed;
        varying float alpha,hot; varying vec2 direction;
        void main() {
          vec3 p; float size; direction=vec2(0.,1.);
          ${
            spark
              ? `
          float speed=2.5+2.2*seed.y, g=4.3, duration=2.*speed/g;
          float f=fract(time/duration+seed.w), age=f*duration;
          vec3 velocity=vec3((seed.z-.46)*1.34,speed,.32+.61*seed.w);
          p=vec3(-2.45+(seed.x-.5)*1.82,1.51,-1.24-.32*seed.y)+age*velocity;
          p.y-=.5*g*age*age;
          p.x+=.06*age*sin(age*2.6+seed.x*15.);
          velocity.y-=g*age;
          vec2 motion=(mat3(viewMatrix)*velocity).xy;
          direction=normalize(motion*vec2(1.,-1.)+vec2(.0001));
          size=(.019+.037*seed.z)*(.62+.43*length(motion));
          hot=heat*(1.-.82*f);
          alpha=smoothstep(0.,.035,f)*(1.-smoothstep(.63,1.,f))*(.36+.64*seed.z);
          `
              : `
          float f=fract(seed.w+time*(.024+seed.y*.028));
          p=vec3(-4.+seed.x*9.+.14*sin(time*.48+seed.w*24.),.6+f*3.9,-2.4+seed.z*5.3);
          size=.005+.007*seed.y; alpha=sin(f*3.14159)*.41;hot=0.;
          `
          }
          vec4 mv=viewMatrix*vec4(p,1.);
          gl_Position=projectionMatrix*mv;
          gl_PointSize=clamp(size*res.y*projectionMatrix[1][1]/(-2.*mv.z),1.,36.);
        }`,
      fragmentShader: `
        varying float alpha,hot; varying vec2 direction;
        void main(){
          vec2 q=gl_PointCoord*2.-1.;
          ${
            spark
              ? `
          q=vec2(dot(q,direction),dot(q,vec2(-direction.y,direction.x))*
                 (1.3+min(3.,1./max(fwidth(q.x),.01)*.33)));
          float core=exp(-3.6*dot(q,q))*(1.-smoothstep(.65,1.,length(q)));
          vec3 tint=mix(vec3(1.25,.16,.008),vec3(5.9,2.45,.50),hot*hot);
          gl_FragColor=vec4(tint,core*alpha);
          `
              : `gl_FragColor=vec4(vec3(.61,.57,.53),alpha*(1.-smoothstep(.15,1.,length(q))));`
          }
        }`,
    });
    const points = new T.Points(geo, material);
    points.frustumCulled = false;
    points.renderOrder = 2;
    scene.add(points);
  }

  function particles(count, vertexShader, fragmentShader, order) {
    const plane = new T.PlaneGeometry(1, 1);
    const geo = new T.InstancedBufferGeometry();
    geo.index = plane.index;
    geo.setAttribute("position", plane.attributes.position);
    geo.setAttribute("uv", plane.attributes.uv);
    geo.setAttribute("seed", new T.InstancedBufferAttribute(seeds(count), 4));
    geo.instanceCount = count;
    const mat = new T.ShaderMaterial({
      uniforms: U,
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      forceSinglePass: true,
      vertexShader,
      fragmentShader,
    });
    const mesh = new T.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = order;
    scene.add(mesh);
  }

  // Each parcel remembers its (absolute) birth time. A bucket impulse therefore
  // travels up the plume and the trailing vapour outlives contact with the water.
  particles(
    132,
    `
    attribute vec4 seed;
    uniform float time,contact,quenchAge; uniform vec3 steamOrigin,tub;
    varying vec2 st; varying vec4 parcel; varying float opacity;
    void main(){
      st=uv*2.-1.; bool wet=seed.w<.5;
      float span=(wet?1.55:1.96)*(.83+.32*seed.x);
      float f=fract(time/span+seed.z), age=f*span, born=quenchAge-age;
      float pulse=smoothstep(-.05,.12,born)*(1.-smoothstep(.24,1.42,born));
      float drive=wet?contact:pulse;
      float a=seed.y*6.28318, eddy=a+2.8*f+1.3*seed.x;
      vec2 rim=vec2(cos(a),sin(a));
      vec3 p=wet?steamOrigin:tub;
      p.xz+=rim*(wet?.37:.028+.12*seed.z);
      p.y+=.085+age*(wet?.49:.71)+age*age*(.17+.12*seed.x);
      p.xz+=rim*(.13+seed.z*.11)*sin(3.14*f)+age*(wet?vec2(-.25,-.14):vec2(.15,.032));
      p.xz+=f*(.07+.17*f)*vec2(sin(eddy+age*2.),cos(eddy-age*.6));
      float radius=(wet?.062:.075)+(.19+.20*seed.x)*f;
      vec4 eye=viewMatrix*vec4(p,1.);
      eye.xy+=st*radius*vec2(1.+.21*f,.90+.19*seed.y);
      parcel=vec4(seed.xy,age,a+.5*age);
      opacity=drive*smoothstep(0.,.095,f)*(1.-smoothstep(.39,1.,f))*(wet?.21:.40);
      if(opacity<.001)eye.xy+=vec2(1000.);
      gl_Position=projectionMatrix*eye;
    }`,
    `
    varying vec2 st; varying vec4 parcel; varying float opacity;
    ${noiseGLSL}
    void main(){
      vec2 q=mat2(cos(parcel.w),-sin(parcel.w),sin(parcel.w),cos(parcel.w))*st;
      float rr=dot(q,q); if(rr>=1.) discard;
      float chord=sqrt(1.-rr);
      vec2 domain=q*1.56+parcel.xy*53.+vec2(0.,-.42*parcel.z);
      domain+=.75*vec2(noise2(domain*1.7),noise2(domain*1.7+17.));
      // Three density samples along the viewing chord approximate a lit volume.
      float column=0.;
      for(int i=0;i<3;i++){
        float z=(float(i)-1.)*chord*.66;
        column+=smoothstep(.35,.69,fb(domain+z*vec2(.83,-.71)))*(.88-.22*abs(z));
      }
      float opticalDepth=opacity*column*chord*chord;
      float scatter=1.-exp(-opticalDepth);
      vec3 light=mix(vec3(.33,.36,.39),vec3(.84,.82,.73),
                     clamp(.42+.37*chord-.33*st.x+.15*st.y,0.,1.));
      gl_FragColor=vec4(light,scatter);
    }`,
    4,
  );

  // Torn leaf tumbles as it falls; it lies flat and glints on the iron before recycling.
  particles(
    45,
    `
    attribute vec4 seed; uniform float time;
    varying vec2 sheet; varying float alpha,sheen; varying vec3 viewNormal;
    void main(){
      float f=fract(time*(.105+seed.w*.062)+seed.z);
      float drop=min(1.,f/.76), loose=1.-smoothstep(.84,1.,drop);
      float turn=seed.x*23.+drop*(8.+8.*seed.y), flap=(.85*sin(turn)+turn)*loose;
      vec3 p=vec3(.74+.72*seed.x,1.477+(1.-drop)*(.42+.57*seed.w),1.25+.58*seed.y);
      p.xz+=.15*drop*vec2(sin(turn*.72),cos(turn*.63));
      vec3 across=vec3(cos(turn),0.,sin(turn));
      vec3 along=cos(flap)*vec3(-across.z,0.,across.x)+vec3(0.,sin(flap),0.);
      sheet=uv*2.-1.;
      p+=(across*(sheet.x+.2*sheet.y)+along*sheet.y*.66)*(.005+.009*seed.z);
      viewNormal=normalize(cross(across,along));
      sheen=dot(reflect(-normalize(cameraPosition-p),viewNormal),normalize(vec3(-.63,.62,-.47)));
      alpha=smoothstep(0.,.09,f)*(1.-smoothstep(.90,1.,f));
      gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);
    }`,
    `
    varying vec2 sheet; varying float alpha,sheen; varying vec3 viewNormal;
    void main(){
      if(abs(sheet.x+.35*sheet.y)+.52*abs(sheet.y)>1.18) discard;
      float fold=.5+.5*cos(sheet.x*5.+sheet.y*2.);
      gl_FragColor=vec4(vec3(.65,.32,.047)*(.54+.48*abs(viewNormal.y)+.35*fold)
                       +vec3(2.7,1.66,.42)*pow(max(0.,sheen+.10*fold),8.),alpha);
    }`,
    3,
  );
}
