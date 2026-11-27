import * as THREE from "three";
import { vesselOptics } from "./vessel-optics.js";
import { FullScreenQuad } from "three/addons/postprocessing/Pass.js";

const atlasSize = 1536;
const columns = 264,
  rows = 224,
  wavelengths = 9;
const mapping = /* glsl */ `
const vec3 probeOrigin=vec3(0.,.86,0.);
vec2 octUV(vec3 d){
  d/=dot(abs(d),vec3(1.));
  vec2 a=d.xz;
  if(d.y>0.)a=(1.-abs(a.yx))*mix(vec2(-1.),vec2(1.),step(vec2(0.),a));
  return a*.5+.5;
}`;

// Bake the first visible receiver in every direction from the middle of the vase.
// A stored tangent plane refines the hit for rays exiting away from the probe.
function captureReceivers(renderer, scene, meshes) {
  const map = new THREE.WebGLCubeRenderTarget(512, {
    type: THREE.HalfFloatType,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
  });
  const camera = new THREE.CubeCamera(0.025, 28, map);
  camera.position.set(0, 0.86, 0);
  camera.layers.set(6);
  meshes.forEach((m) => m.layers.enable(6));
  const plane = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    vertexShader: `varying vec3 p;void main(){p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,
    fragmentShader: `varying vec3 p; void main(){vec3 n=normalize(cross(dFdx(p),dFdy(p))); gl_FragColor=vec4(n,dot(n,p-vec3(0.,.86,0.)));}`,
  });
  const background = scene.background;
  scene.background = new THREE.Color(0);
  scene.overrideMaterial = plane;
  camera.update(renderer, scene);
  scene.overrideMaterial = null;
  scene.background = background;
  meshes.forEach((m) => m.layers.disable(6));
  plane.dispose();
  return map;
}

export function createCaustics(scene, renderer) {
  const meshes = [];
  scene.traverse((m) => {
    if (
      m.isMesh &&
      !m.isInstancedMesh &&
      m.material.isMeshStandardMaterial &&
      !m.material.transparent
    )
      meshes.push(m);
  });
  const receivers = captureReceivers(renderer, scene, meshes);
  const atlas = new THREE.WebGLRenderTarget(atlasSize, atlasSize, {
    type: THREE.HalfFloatType,
    depthBuffer: false,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });
  for (const mat of new Set(meshes.map((m) => m.material))) {
    const original = mat.onBeforeCompile.bind(mat);
    const key = mat.customProgramCacheKey();
    mat.customProgramCacheKey = () => key + "-photon-receiver";
    mat.onBeforeCompile = (shader) => {
      original(shader);
      shader.uniforms.photonAtlas = { value: atlas.texture };
      shader.uniforms.receiverPlanes = { value: receivers.texture };
      shader.vertexShader =
        "varying vec3 photonWorld;\n" +
        shader.vertexShader.replace(
          "#include <project_vertex>",
          "#include <project_vertex>\nphotonWorld=(modelMatrix*vec4(transformed,1.)).xyz;",
        );
      shader.fragmentShader =
        mapping +
        "\nvarying vec3 photonWorld; uniform sampler2D photonAtlas; uniform samplerCube receiverPlanes;\n" +
        shader.fragmentShader.replace(
          "#include <opaque_fragment>",
          `
          vec3 disp=photonWorld-probeOrigin;
          vec4 plane=textureCube(receiverPlanes,disp);
          float seen=1.-smoothstep(.012,.045,abs(dot(plane.xyz,disp)-plane.w));
          vec2 uvFlux=octUV(disp);
          float footprint=max(1.,length(fwidth(uvFlux))*${atlasSize}.);
          float solarDisc=max(0.,log2(footprint)-.65);
          vec3 peak=textureLod(photonAtlas,uvFlux,solarDisc).rgb;
          vec3 waist=textureLod(photonAtlas,uvFlux,solarDisc+1.42).rgb;
          outgoingLight+=(.87*peak+.13*waist)*seen*(.25+1.5*sqrt(diffuseColor.rgb));
          #include <opaque_fragment>`,
        );
    };
    mat.needsUpdate = true;
  }
  const uniforms = {
    receiverPlanes: { value: receivers.texture },
    sun: { value: new THREE.Vector3() },
    tint: { value: new THREE.Color() },
    motion: { value: new THREE.Vector3() },
    time: { value: 0 },
    power: { value: 1 },
    clarity: { value: 1 },
    sunlightDepth: { value: null },
    sunlightMatrix: { value: new THREE.Matrix4() },
  };
  // One texel per ray. Both deposition kernels read the same solved paths.
  const paths = new THREE.WebGLRenderTarget(columns * wavelengths, rows, {
    type: THREE.FloatType,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
  });
  const trace = new FullScreenQuad(
    new THREE.ShaderMaterial({
      uniforms,
      depthTest: false,
      depthWrite: false,
      vertexShader: "void main(){gl_Position=vec4(position.xy,0.,1.);}",
      fragmentShader:
        vesselOptics +
        mapping +
        /* glsl */ `
      uniform samplerCube receiverPlanes;
      uniform highp sampler2DShadow sunlightDepth;uniform mat4 sunlightMatrix;
      uniform vec3 sun,tint,motion;uniform float time,power,clarity;

      bool land(vec3 p,vec3 d,out vec3 delta,out vec3 normal){
        vec3 origin=p-probeOrigin,look=d;
        float distance=0.;
        for(int k=0;k<5;k++){
          vec4 plane=textureLod(receiverPlanes,look,0.);
          float den=dot(d,plane.xyz);
          if(abs(den)<.0001)return false;
          distance=(plane.w-dot(plane.xyz,origin))/den;
          if(distance<=.001 || distance>19.)return false;
          delta=origin+d*distance;normal=plane.xyz;look=delta;
        }
        return true;
      }
      void main(){
        gl_FragColor=vec4(0.);
        ivec2 id=ivec2(gl_FragCoord.xy);int band=id.x%${wavelengths};
        vec2 sampleUV=(vec2(id.x/${wavelengths},id.y)+.5)/vec2(${columns}.,${rows}.);
        // Cauchy dispersion sampled from deep red to violet. Each path carries
        // its own glass and water index before conversion to display RGB.
        float wavelength=mix(.665,.435,float(band)/${wavelengths - 1}.);
        vec2 iors=vec2(1.489,1.317)+vec2(.0094,.0049)/(wavelength*wavelength);
        float a=sampleUV.x*6.2831853,v=sampleUV.y;
        vec2 radial=vec2(cos(a),sin(a));
        vec3 d=-sun,p,n;int medium=1;float area,energy=1.;
        if(v<.56){
          float y=mix(foot+.001,lip-.001,v/.56);
          p=vec3(radial.x*radiusAt(y),y,radial.y*radiusAt(y));n=shellNormal(p);
          area=6.2832*radiusAt(y)*(lip-foot)/(.56*max(.35,length(n.xz)));
        }else if(v<.68){
          // The sun enters the open mouth before crossing the free water surface.
          float r=.457*sqrt((v-.56)/.12);
          p=vec3(radial.x*r,lip-.002,radial.y*r);n=vec3(0.,1.,0.);medium=3;area=.656/.12;
        }else if(v<.82){
          // The rolled lip and heavy foot act as toroidal cylindrical lenses.
          bool rim=v>.75;float b=2.*fract((v-.68)/.07)-1.;
          vec3 axis=vec3(-radial.y,0.,radial.x);
          vec3 crossRay=normalize(d-axis*dot(d,axis));
          n=-crossRay*sqrt(max(.00001,1.-b*b))+cross(axis,crossRay)*b;
          float r=rim?.027:.050,ring=rim?.490:.456;
          vec3 center=vec3(ring*radial.x,rim?1.69:.097,ring*radial.y);
          p=center+n*r;area=6.2832*ring*2.*r/.07;
          energy*=length(cross(d,axis))/max(.10,-dot(n,d));
          vec3 inside=refract(d,n,1./iors.x);
          vec3 transverse=inside-axis*dot(inside,axis);
          float chord=-2.*r*dot(transverse,n)/max(.0001,dot(transverse,transverse));
          vec3 ex=p+chord*inside,en=normalize(r*n+chord*transverse);
          energy*=max(0.,-dot(n,d))*(1.-fresnelWeight(d,n,1.,iors.x));
          d=refract(inside,-en,iors.x);if(dot(d,d)<.1)return;
          p=ex;medium=0;
        }else{
          // Two applied prismatic cords on the shoulder. Intersect their three
          // polished faces in the local meridional section. The orthogonal
          // component of each ray is conserved along the short prism segment.
          bool upper=v>.91;float f=fract((v-.82)/.09)*3.;
          int face=min(2,int(f));
          float h=upper?1.525:1.447,r=radiusAt(h)-.001;
          vec2 tri[3]=vec2[3](vec2(r-.014,h-.04),vec2(r+.048,h-.017),vec2(r-.014,h+.04));
          vec2 edge=tri[(face+1)%3]-tri[face];
          vec2 at=tri[face]+fract(f)*edge;
          vec2 en=normalize(vec2(edge.y,-edge.x)+normalize(edge)*length(edge)*.035*(fract(f)-.5));
          n=vec3(en.x*radial.x,en.y,en.x*radial.y);
          float cosine=-dot(n,d);if(cosine<=0.)return;
          area=6.2832*at.x*length(edge)/.03;
          p=vec3(radial.x*at.x,at.y,radial.y*at.x);
          energy=cosine*(1.-fresnelWeight(d,n,1.,iors.x));
          d=refract(d,n,1./iors.x);medium=1;
          for(int k=0;k<5;k++){
            vec2 slope=vec2(dot(d.xz,radial),d.y);
            float closest=100.;vec2 exitNormal=en;
            for(int j=0;j<3;j++){
              vec2 e=tri[(j+1)%3]-tri[j],N=normalize(vec2(e.y,-e.x));
              float side=dot(N,slope);
              if(side>.001){
                float t=dot(N,tri[j]-at)/side;
                if(t>.00005 && t<closest){closest=t;exitNormal=N;}
              }
            }
            if(closest>1.)return;
            at+=slope*closest;p+=d*closest;
            n=-vec3(exitNormal.x*radial.x,exitNormal.y,exitNormal.x*radial.y);
            vec3 exitRay=refract(d,n,iors.x);
            if(dot(exitRay,exitRay)<.1){d=reflect(d,n);continue;}
            energy*=1.-fresnelWeight(d,n,iors.x,1.);d=exitRay;medium=0;break;
          }
          if(medium!=0)return;
          // An inward exit traverses the vessel as part of the same light path.
          if(dot(d.xz,radial)<-.02){
            float nearWall=shellHit(p,d,0.);
            if(nearWall<.18){p+=d*nearWall;n=shellNormal(p);medium=1;}
          }
        }
        // Query the actual window/flower shadow upstream of the launch interface.
        vec4 sc=sunlightMatrix*vec4(p+sun*.065,1.);
        energy*=texture(sunlightDepth,vec3(sc.xy,sc.z-.0006));
        if(medium!=0){
          if(dot(n,d)>=0.)return;energy*=max(0.,-dot(n,d));
          if(medium==1){energy*=1.-fresnelWeight(d,n,1.,iors.x);d=refract(d,n,1./iors.x);}
          for(int bounce=0;bounce<9;bounce++){
            p+=d*.00055;int next;
            float t=nextBoundary(p,d,medium,motion,time,n,next);
            if(t>20.)return;
            if(medium==2)energy*=exp(-t*(.045+.65*(1.-clarity)));
            p+=d*t;float n1=mediumIOR(medium,iors),n2=mediumIOR(next,iors);
            vec3 bent=refract(d,n,n1/n2);
            if(dot(bent,bent)<.1){d=reflect(d,n);continue;}
            energy*=1.-fresnelWeight(d,n,n1,n2);d=bent;medium=next;
            if(medium==0)break;
          }
        }
        if(medium!=0)return;
        vec3 hit,receiverN;if(!land(p,d,hit,receiverN))return;
        gl_FragColor=vec4(hit,energy*area);
      }`,
    }),
  );
  const deposition = {
    paths: { value: paths.texture },
    power: uniforms.power,
    tint: uniforms.tint,
  };
  const readPaths =
    mapping +
    `
    uniform sampler2D paths; uniform float power;uniform vec3 tint;
    const int W=${columns},H=${rows};const float atlasSize=${atlasSize}.;
    vec4 arrival(ivec2 c,int band){return texelFetch(paths,ivec2(c.x*${wavelengths}+band,c.y),0);}
    vec3 spectral(int band){const vec3 rgb[9]=vec3[9](vec3(.20,0.,0.),vec3(.26,.012,0.),vec3(.27,.07,0.),
      vec3(.17,.186,0.),vec3(.05,.245,0.),vec3(0.,.239,.015),
      vec3(0.,.182,.155),vec3(.01,.061,.443),vec3(.04,.005,.387));
      return tint*rgb[band];}
  `;
  const common = {
    uniforms: deposition,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
  };
  // Deposit isolated samples with a finite solar-disc footprint. Connect adjacent
  // rays on the same receiver for smooth energy reconstruction between samples.
  const dots = new THREE.BufferGeometry();
  dots.setAttribute(
    "position",
    new THREE.BufferAttribute(
      new Float32Array(columns * rows * wavelengths * 3),
      3,
    ),
  );
  const splats = new THREE.Points(
    dots,
    new THREE.ShaderMaterial({
      ...common,
      vertexShader:
        readPaths +
        `
      varying vec3 flux;uniform samplerCube receiverPlanes;
      void main(){
        int id=gl_VertexID/${wavelengths}, band=gl_VertexID%${wavelengths};
        vec4 ray=arrival(ivec2(id%W,id/W),band);
        gl_Position=vec4(3.,3.,0.,1.);gl_PointSize=1.;flux=vec3(0.);
        if(ray.w<=0.)return;
        vec3 hit=ray.xyz,dir=normalize(hit);float l1=dot(abs(dir),vec3(1.));
        vec3 n=textureLod(receiverPlanes,dir,0.).xyz;
        float areaFactor=abs(dot(dir,n))/(dot(hit,hit)*l1*l1*l1);
        float diameter=clamp(18./sqrt(length(hit)),6.,22.);
        flux=spectral(band)*power*ray.w*areaFactor*.09*atlasSize*atlasSize/(float(W*H)*diameter*diameter);
        gl_Position=vec4(octUV(hit)*2.-1.,0.,1.);gl_PointSize=diameter;
      }`,
      fragmentShader: `varying vec3 flux;void main(){vec2 q=gl_PointCoord*2.-1.;float rr=dot(q,q);
      if(rr>1.)discard;gl_FragColor=vec4(flux*exp(-3.2*rr),1.);}`,
      uniforms: { ...deposition, receiverPlanes: uniforms.receiverPlanes },
    }),
  );
  const faces = new THREE.InstancedBufferGeometry();
  faces.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(new Float32Array(18), 3),
  );
  faces.instanceCount = (columns - 1) * (rows - 1) * wavelengths;
  const sheet = new THREE.Mesh(
    faces,
    new THREE.ShaderMaterial({
      ...common,
      side: THREE.DoubleSide,
      forceSinglePass: true,
      vertexShader:
        readPaths +
        `
      varying vec2 source;varying vec3 landing,energy;
      void main(){
        int band=gl_InstanceID%${wavelengths},cell=gl_InstanceID/${wavelengths};
        ivec2 base=ivec2(cell%(W-1),cell/(W-1)),dx=ivec2(1,0),dy=ivec2(0,1);
        bool upper=gl_VertexID>=3;
        ivec2 a=base+(upper?dx+dy:ivec2(0)), b=base+dx,c=base+dy;
        vec4 A=arrival(a,band),B=arrival(b,band),C=arrival(c,band);
        gl_Position=vec4(3.,3.,0.,1.);energy=vec3(0.);landing=vec3(0.);source=vec2(0.);
        float range=length(A.xyz);
        if(range<.02 || length(B.xyz)<.02 || length(C.xyz)<.02)return;
        float spread=max(length(A.xyz-B.xyz),length(A.xyz-C.xyz));
        if(spread>.08+.20*range)return;
        vec2 uv=octUV(A.xyz);
        if(max(length(uv-octUV(B.xyz)),length(uv-octUV(C.xyz)))>.14)return;
        int corner=gl_VertexID%3;ivec2 index=corner==0?a:(corner==1?b:c);
        vec4 ray=corner==0?A:(corner==1?B:C);
        landing=ray.xyz;energy=spectral(band)*power*ray.w;
        source=(vec2(index)+.5)/vec2(float(W),float(H));
        gl_Position=vec4(octUV(landing)*2.-1.,0.,1.);
      }`,
      fragmentShader: `varying vec2 source;varying vec3 landing,energy;
      void main(){vec2 a=dFdx(source),b=dFdy(source);
        float area=length(cross(dFdx(landing),dFdy(landing)));
        float density=abs(a.x*b.y-a.y*b.x)/max(area,1.e-10);
        gl_FragColor=vec4(min(energy*density,vec3(44.)),1.);}`,
    }),
  );
  splats.frustumCulled = sheet.frustumCulled = false;
  const passScene = new THREE.Scene(),
    camera = new THREE.Camera(),
    saved = new THREE.Color();
  passScene.add(sheet, splats);
  return {
    update(t, m, light, power, clarity, color, shadow) {
      uniforms.time.value = t;
      uniforms.motion.value.set(m.x, m.z, m.energy);
      uniforms.sun.value.copy(light);
      uniforms.power.value = power * 4.4;
      uniforms.tint.value.copy(color);
      uniforms.clarity.value = clarity;
      uniforms.sunlightDepth.value = shadow.map.depthTexture;
      uniforms.sunlightMatrix.value.copy(shadow.matrix);
      const previous = renderer.getRenderTarget(),
        alpha = renderer.getClearAlpha();
      renderer.getClearColor(saved);
      renderer.setClearColor(0, 0);
      renderer.setRenderTarget(paths);
      trace.render(renderer);
      renderer.setRenderTarget(atlas);
      renderer.render(passScene, camera);
      renderer.setRenderTarget(previous);
      renderer.setClearColor(saved, alpha);
    },
  };
}
