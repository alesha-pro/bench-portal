// Forward-map a fluted glass pupil into light space. Overlapping folds accumulate
// irradiance, and the inverse area of a ray patch sets the brightness of its cusp.
import { T, noiseGLSL } from "./studio.js";

export function causticProjector(renderer, U) {
  const target = new T.WebGLRenderTarget(512, 512, {
    type: T.HalfFloatType,
    depthBuffer: false,
    minFilter: T.LinearMipmapLinearFilter,
    generateMipmaps: true,
  });
  const rays = new T.Scene();
  const camera = new T.Camera();
  const disk = new T.PlaneGeometry(1, 1, 192, 56);
  for (const foil of [0, 1]) {
    const material = new T.ShaderMaterial({
      uniforms: { clock: U.time, spin: U.angle, foil: { value: foil } },
      side: T.DoubleSide,
      transparent: true,
      forceSinglePass: true,
      depthTest: false,
      depthWrite: false,
      blending: T.AdditiveBlending,
      vertexShader: `
        uniform float clock,spin,foil;
        varying vec2 pupil,landing;
        varying float flux;
        void main(){
          float a=uv.x*6.2831853, r=mix(.002,1.,uv.y);
          vec2 radial=vec2(cos(a),sin(a)), tangent=vec2(-radial.y,radial.x);
          pupil=r*radial;
          float phase=a+spin*.65+.095*sin(clock*1.5)+.035*sin(clock*2.7+r*2.);
          float ribs=6.*phase+4.5*r;
          // The spiral relief steers neighbouring rays sideways into narrow folds.
          vec2 slope=radial*(.13*sin(3.*phase+2.*r)+.14*cos(ribs))
                    +tangent*(.26*sin(ribs)+.075*sin(2.*ribs));
          float bend=.49*r+.20*sin(6.1*r-.65)+.115*sin(12.4*r+.52*foil);
          landing=radial*bend+slope*(.23+.77*r)+vec2(.14*foil,.055*sin(a*2.+spin))*r;
          float helix=.5+.5*cos(3.*phase+8.*r);
          flux=smoothstep(0.,.12,r)*(1.-smoothstep(.85,1.,r))*
               mix(.43+.57*(1.-helix),pow(helix,3.),foil);
          gl_Position=vec4(landing,0.,1.);
        }`,
      fragmentShader: `
        uniform float foil;
        varying vec2 pupil,landing;
        varying float flux;
        float area(vec2 p){vec2 x=dFdx(p),y=dFdy(p);return abs(x.x*y.y-x.y*y.x);}
        void main(){
          float gain=min(23.,area(pupil)/max(area(landing),1.e-8));
          float density=gain*(.046+.21*smoothstep(2.5,13.,gain))*flux;
          gl_FragColor=vec4((1.-foil)*density,foil*density,0.,1.);
        }`,
    });
    const sheet = new T.Mesh(disk, material);
    sheet.frustumCulled = false;
    rays.add(sheet);
  }

  // Project the light onto each real receiving fragment so plank gaps, surface
  // grain, the curved turntable edge and objects in front interrupt the image.
  function receiver(base, surface = "metal") {
    const mat = base.clone();
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, {
        causticMap: { value: target.texture },
        glassCenter: U.glassCenter,
        clarity: U.clarity,
      });
      shader.vertexShader =
        "varying vec3 receiverPos;\n" +
        shader.vertexShader.replace(
          "#include <project_vertex>",
          "#include <project_vertex>\n receiverPos=(modelMatrix*vec4(transformed,1.)).xyz;",
        );
      shader.fragmentShader =
        `uniform sampler2D causticMap;
        uniform vec3 glassCenter; uniform float clarity; varying vec3 receiverPos;
        ${noiseGLSL}
        vec2 readCaustic(vec2 ray,float drop){
        vec2 delta=receiverPos.xz-glassCenter.xz-drop*ray;
        vec2 axes=vec2(dot(delta,vec2(.85,.527)),dot(delta,vec2(-.527,.85)));
        vec2 uvLight=.5+.5*axes/(vec2(1.69,.94)*(.84+.26*drop));
        float visible=1.;
        if(receiverPos.y < .10){
          float height=glassCenter.y-1.41;
          vec2 crossing=glassCenter.xz+height*ray+delta*(.84+.26*height)/(.84+.26*drop);
          vec2 outside=abs(crossing-vec2(1.66,1.58))-vec2(2.35,.84);
          visible=smoothstep(-.10,.10,max(outside.x,outside.y));
        }
        return texture2D(causticMap,clamp(uvLight,0.,1.)).rg*visible;
        }
        ` +
        shader.fragmentShader
          .replace(
            "#include <map_fragment>",
            `
        #include <map_fragment>
        ${
          surface === "oak"
            ? `
        vec2 grain=receiverPos.xz;
        float charred=fb(grain*vec2(2.,7.));
        float scar=smoothstep(.74,.85,noise2(grain*vec2(12.,160.)));
        float ring=abs(length((grain-vec2(2.93,1.88))*vec2(.91,1.))- .33+.015*charred);
        diffuseColor.rgb*=1.-.65*smoothstep(.44,.71,charred)-.21*exp(-75.*ring);
        diffuseColor.rgb+=scar*vec3(.073,.043,.018);
        `
            : surface === "stone"
              ? `
        float soot=fb(receiverPos.xz*1.7);
        diffuseColor.rgb*=mix(vec3(.29,.32,.34),vec3(.81,.84,.86),smoothstep(.26,.70,soot));
        diffuseColor.rgb+=vec3(.018,.017,.016)*smoothstep(.49,.70,soot);
        `
              : ""
        }
        `,
          )
          .replace(
            "#include <opaque_fragment>",
            `
        float drop=glassCenter.y-receiverPos.y;
        if(clarity>.0 && drop>.0){
          float cobalt=readCaustic(vec2(.39,.80),drop).r;
          float gold=readCaustic(vec2(.87,.54),drop).g;
          vec3 beam=cobalt*vec3(.018,.21,1.59)+gold*vec3(2.40,.96,.096);
          float facing=clamp(dot(inverseTransformDirection(normal,viewMatrix),normalize(vec3(-.54,1.,-.68))),.06,1.);
          float bounce=receiverPos.y<.1?2.18:1.31;
          outgoingLight+=bounce*clarity*facing*beam*(.27+1.8*sqrt(diffuseColor.rgb))/(.65+.15*drop*drop);
        }
        #include <opaque_fragment>`,
          );
    };
    mat.customProgramCacheKey = () => "caustic-" + surface;
    return mat;
  }
  const clear = new T.Color();
  function render() {
    if (U.clarity.value <= 0) return;
    renderer.getClearColor(clear);
    const alpha = renderer.getClearAlpha();
    renderer.setClearColor(0, 0);
    renderer.setRenderTarget(target);
    renderer.clear(true, false, false);
    renderer.render(rays, camera);
    renderer.setClearColor(clear, alpha);
    renderer.setRenderTarget(null);
  }
  return { receiver, render };
}
