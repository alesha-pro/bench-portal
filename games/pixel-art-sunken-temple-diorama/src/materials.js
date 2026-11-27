import * as T from 'three';

export const clock = { value: 0 },
  surge = { value: 0 },
  pixelSize = { value: new T.Vector2(480, 270) };
export function pixelTexture(canvas) {
  const tex = new T.CanvasTexture(canvas);
  tex.colorSpace = T.SRGBColorSpace;
  tex.magFilter = tex.minFilter = T.NearestFilter;
  tex.generateMipmaps = false;
  return tex;
}

const common = `
uniform float artTime;
uniform float surge;
varying vec3 artPos;
varying vec3 artNormal;
varying vec2 artUV;
float noise2(vec2 p){
  vec3 a=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));
  a+=dot(a,a.yzx+33.33);
  return fract((a.x+a.y)*a.z);
}
`;
const rock = `
  vec2 p=abs(artNormal.y)>.62 ? artPos.xz : (abs(artNormal.x)>.68?artPos.zy:artPos.xy);
  vec2 px=floor(p*13.0)/13.0;
  float course=floor(px.y*2.36);
  vec2 grid=vec2(px.x*.97+mod(course,2.)*.49,px.y*2.36);
  vec2 f=fract(grid);
  float n=noise2(floor(grid));
  float chip=noise2(floor(px*vec2(6.5,9.)));
  diffuseColor.rgb*=.80+.35*n;
  if(f.x<.041 || f.y<.083) diffuseColor.rgb*=.77;
  else if(f.y>.84 || (f.x<.10 && chip>.34)) diffuseColor.rgb*=1.12;
  if(chip>.86)diffuseColor.rgb*=.88;
  if(n>.70 && f.y>.64+chip*.24)diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.155,.215,.057),.47);
`;
const cliff = `
  vec2 p=vec2(artPos.x*.88+artPos.z*.45,artPos.y);
  float layer=noise2(floor(vec2(p.x*.8+p.y*.3,p.y*3.2)));
  float vein=noise2(floor(vec2(p.x*3.8,p.y*7.4)));
  diffuseColor.rgb*=.74+.32*layer+step(.90,vein)*.13;
`;
const pool = `
  vec2 p=floor(artPos.xz*21.)/21.;
  float waves=sin(p.y*12.+1.3*sin(p.x*2.+artTime*1.2)+artTime*3.);
  float fleck=noise2(floor(vec2(p.x*3.+artTime*.6,p.y*14.)));
  float tide=sin(p.x*.8+p.y*1.9+artTime*.7);
  diffuseColor.rgb=mix(vec3(.010,.230,.196),vec3(.028,.420,.328),tide*.5+.5);
  if(waves>.55 && fleck>.56) diffuseColor.rgb=vec3(.132,.57,.449);
  if(waves>.88 && fleck>.81) diffuseColor.rgb=vec3(.48,.80,.59);
`;
const waterfall = `
  vec2 p=artUV;
  float edge=min(p.x,1.-p.x);
  float lane=floor(p.x*13.);
  float k=noise2(vec2(lane,13.));
  float y=p.y*4.5-artTime*(2.+k+surge*1.7);
  float band=noise2(vec2(lane,floor(y)));
  diffuseColor.rgb=mix(vec3(.012,.24,.25),vec3(.14,.53,.43),smoothstep(.08,.94,k));
  if(band>.51 && fract(y)<.66) diffuseColor.rgb=vec3(.24,.64,.54);
  if(band>.84 && fract(y)<.27 || p.y<.05 || (edge<.045 && band>.47))diffuseColor.rgb=vec3(.69,.92,.76);
`;
export function surface(type = 'plain', options = {}) {
  const mat = new T.MeshLambertMaterial(options);
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, { artTime: clock, surge, pixelSize });
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
      varying vec3 artPos; varying vec3 artNormal; varying vec2 artUV; uniform vec2 pixelSize;`,
      )
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vec4 ap=vec4(transformed,1.); vec3 an=objectNormal;
        #ifdef USE_INSTANCING
        ap=instanceMatrix*ap; an=mat3(instanceMatrix)*an;
        #endif
        artPos=(modelMatrix*ap).xyz;
        artNormal=normalize(mat3(modelMatrix)*an); artUV=uv;
        vec2 raster=(gl_Position.xy/gl_Position.w*.5+.5)*pixelSize;
        gl_Position.xy=((floor(raster*2.+.5)*.5)/pixelSize*2.-1.)*gl_Position.w;
      `,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + common)
      .replace(
        '#include <color_fragment>',
        '#include <color_fragment>\n' + ({ rock, cliff, pool, waterfall }[type] || ''),
      )
      .replace(
        '#include <opaque_fragment>',
        `
        ${type === 'waterfall' ? 'outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.16,.68);' : ''}
        ${type === 'pool' ? 'outgoingLight=mix(outgoingLight,diffuseColor.rgb,.42);' : ''}
        float lightness=max(.01,dot(outgoingLight,vec3(.25,.55,.20)));
        float tone=sqrt(lightness)*12.;
        outgoingLight*=mix(1.,pow((floor(tone)+.44)/max(tone,.1),2.),.46);
        float shade=sin(artPos.x*.57+artTime*.22+sin(artPos.z*.87-artTime*.19)*1.2);
        outgoingLight*=mix(.88,1.03,smoothstep(-.25,.47,shade));
        #include <opaque_fragment>`,
      );
  };
  mat.customProgramCacheKey = () => type;
  return mat;
}

// Related color ramps keep the stone warm, the water jade and the canopy cool.
const ramps = [
  '142b32 1b3538 233f3d 2f4c44 3e5b4e 506c58 69836b 859b7c a3ae8b c2ba93 d8cb9f ebdeb2',
  '142e35 1d3b40 25494b 325958 406963 507971 688e80 81a18e 9bb59c bad0ae d4dfbd',
  '203528 2a432e 385332 49643c 5e7642 758745 8a984e a6a659 c0b967 d6ca80 e6d89b',
  '232f2e 343d35 4a4c39 5d5940 75694a 887a52 a28c5c b89e6d c8ae7a d9bb85 e5ca95 f3d9a2 f7e6b5',
  '2f3535 464743 5d5950 716d5d 8a8170 a49b84 bbb39a d0c9af',
  '3a3838 52443a 6d5141 876344 a5784e bd8a56 d5a264 e4b879 f2c98a f8d59b fce2ad fff0c4',
  '114449 145650 19665b 20776b 278b79 369d88 4ab19a 68c4aa 8cd6b8 aae3c8 c9eed4 e5f3d5',
  '203447 27485a 305d6c 3e7789 4c91a9 62b5ca 81d6e6 b1edec e2ffeb',
  '191e35 242c46 30394f 3b485e 4b596e 5c6b7f 73849a 90a0ae b4c1c2',
  'eabb86 f9dca0 fff2bc bab995 91a995 71988a 567f74 3b6861 305751 a3c3a8 f6dba8 a4ba9c 739e8f 568b80 386e68 255853',
  '522f37 784039 a44f3b cb6640 e98146 f59c4e ffb959 ffda77 fff1ae fff9d6',
];
const colors = [...new Set(ramps.join(' ').split(' '))].map((hex) =>
  [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)),
);
function lutTexture(data, w, h) {
  const tex = new T.DataTexture(data, w, h, T.RGBAFormat);
  tex.minFilter = tex.magFilter = T.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}
function makeLut() {
  const size = 32,
    data = new Uint8Array(size ** 3 * 4),
    table = new Uint8Array(colors.length * 4);
  colors.forEach((c, i) => table.set([...c, 255], i * 4));
  const weight = [0.28, 0.53, 0.19];
  for (let z = 0; z < size; z++)
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++) {
        const rgb = [x, y, z].map((v) => (v * 255) / (size - 1));
        const dst = colors.map((c) => c.reduce((sum, n, i) => sum + (n - rgb[i]) ** 2 * weight[i], 0));
        let a = dst.indexOf(Math.min(...dst)),
          b = a,
          mix = 0,
          best = dst[a],
          base = colors[a];
        colors.forEach((c, i) => {
          if (i === a || dst[i] > dst[a] + 1600) return;
          const d = c.map((n, j) => n - base[j]);
          const length = d.reduce((sum, n, j) => sum + n * n * weight[j], 0);
          const t = Math.max(
            0,
            Math.min(0.5, d.reduce((sum, n, j) => sum + (rgb[j] - base[j]) * n * weight[j], 0) / length),
          );
          const score =
            rgb.reduce((sum, n, j) => sum + (n - base[j] - d[j] * t) ** 2 * weight[j], 0) +
            length * 0.085;
          if (score < best) {
            best = score;
            b = i;
            mix = t;
          }
        });
        data.set([a, b, Math.round(mix * 255), 255], 4 * (x + size * z + size * size * y));
      }
  return { lut: lutTexture(data, size * size, size), palette: lutTexture(table, colors.length, 1) };
}

export function makePipeline(renderer) {
  const makeTarget = (srgb) =>
    new T.WebGLRenderTarget(480, 270, {
      format: T.RGBAFormat,
      type: T.UnsignedByteType,
      minFilter: T.NearestFilter,
      magFilter: T.NearestFilter,
      colorSpace: srgb ? T.SRGBColorSpace : T.NoColorSpace,
      generateMipmaps: false,
      depthBuffer: srgb,
      samples: 0,
    });
  const raw = makeTarget(true),
    indexed = makeTarget(false);
  const { lut, palette } = makeLut();
  const vertexShader =
    'varying vec2 screenUV; void main(){screenUV=uv;gl_Position=vec4(position.xy,0.,1.);}';
  const material = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      source: { value: raw.texture },
      lut: { value: lut },
      palette: { value: palette },
      strength: { value: 0.75 },
    },
    vertexShader,
    fragmentShader: `
    varying vec2 screenUV; uniform sampler2D source,lut,palette; uniform float strength;
    const int bayer[16]=int[](0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5);
    void main(){
      vec3 rgb=sRGBTransferOETF(vec4(texelFetch(source,ivec2(gl_FragCoord.xy),0).rgb,1.)).rgb;
      ivec3 bin=ivec3(floor(clamp(rgb,0.,1.)*31.+.5));
      vec3 choice=texelFetch(lut,ivec2(bin.x+32*bin.z,bin.y),0).rgb;
      ivec2 p=ivec2(gl_FragCoord.xy)%4;
      float threshold=(float(bayer[p.x+4*p.y])+.5)/16.;
      int index=int(floor(255.*(threshold<choice.b*strength?choice.g:choice.r)+.5));
      gl_FragColor=texelFetch(palette,ivec2(index,0),0);
    }`,
  });
  const blit = new T.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: { source: { value: indexed.texture } },
    vertexShader,
    fragmentShader:
      'varying vec2 screenUV;uniform sampler2D source;void main(){gl_FragColor=texture2D(source,screenUV);}',
  });
  const quad = new T.Mesh(new T.PlaneGeometry(2, 2), material),
    camera = new T.Camera();
  quad.frustumCulled = false;
  return {
    raw,
    indexed,
    material,
    resize(w) {
      pixelSize.value.set(w, (w * 9) / 16);
      raw.setSize(w, (w * 9) / 16);
      indexed.setSize(w, (w * 9) / 16);
    },
    draw(scene, view) {
      renderer.setRenderTarget(raw);
      renderer.render(scene, view);
      quad.material = material;
      renderer.setRenderTarget(indexed);
      renderer.render(quad, camera);
      quad.material = blit;
      renderer.setRenderTarget(null);
      renderer.render(quad, camera);
    },
  };
}
