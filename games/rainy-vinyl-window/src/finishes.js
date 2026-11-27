import { T, mat, canvasMap, random } from "./craft.js";
export function porcelain(cup = false) {
  const tex = canvasMap(1536, 512, (c, w, h) => {
    const rng = random(9931);
    c.fillStyle = "#e8e2c9";
    c.fillRect(0, 0, w, h);
    if (cup) {
      // Underglaze grasses follow the outside wall of the thrown cup.
      for (let sprig = 0; sprig < 8; sprig++) {
        c.save();
        c.translate((sprig * w) / 8 + 43, 345 + rng() * 12);
        c.rotate(-0.13 + rng() * 0.3);
        for (let stalk = 0; stalk < 6; stalk++) {
          const x = (stalk - 2.1) * (14 + rng() * 11),
            y = -38 - rng() * 74;
          c.strokeStyle = "rgba(37,67,89,.8)";
          c.lineWidth = 2.3;
          c.beginPath();
          c.moveTo(0, 0);
          c.quadraticCurveTo(x * 0.19, y * 0.63, x, y);
          c.stroke();
          for (let k = 1; k < 5; k++) {
            const f = 0.33 + k * 0.12,
              bx = x * f * f,
              by = y * f;
            const dx = (k % 2 ? 1 : -1) * (9 + rng() * 10);
            c.fillStyle = k % 2 ? "#476584" : "#667f90";
            c.beginPath();
            c.moveTo(bx, by);
            c.quadraticCurveTo(bx + dx * 0.12, by - 11, bx + dx, by - 18);
            c.quadraticCurveTo(bx + dx * 0.63, by - 5, bx, by);
            c.fill();
          }
        }
        c.restore();
      }
    } else {
      c.fillStyle = "#345179";
      for (let j = 0; j < 58; j++) {
        const x = (j * w) / 58;
        c.beginPath();
        c.ellipse(x, 159, 8, 16, -0.48, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.ellipse(x + 8, 144, 3, 8, 0.36, 0, 2 * Math.PI);
        c.fill();
      }
    }
    for (let i = 0; i < 26000; i++) {
      c.fillStyle = i % 4 ? "rgba(81,65,50,.072)" : "rgba(255,251,224,.24)";
      c.fillRect(rng() * w, rng() * h, 1 + rng() * 1.8, 1 + rng());
    }
  });
  return new T.MeshPhysicalMaterial({
    map: tex,
    roughness: 0.23,
    metalness: 0.015,
    clearcoat: 0.76,
    clearcoatRoughness: 0.14,
    side: T.DoubleSide,
  });
}
export function brewedTea() {
  const material = new T.ShaderMaterial({
    uniforms: { city: { value: null }, time: { value: 0 } },
    vertexShader: `varying vec2 v;varying vec3 pos;
    void main(){v=uv-.5;vec4 w=modelMatrix*vec4(position,1.);pos=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader: `varying vec2 v;varying vec3 pos;uniform sampler2D city;uniform float time;
    void main(){float r=length(v)*2.;vec3 e=normalize(cameraPosition-pos);float meniscus=smoothstep(.87,1.,r);
      vec2 radial=v/max(.001,length(v));
      float wave=sin(51.*r-time*3.4)*(.25+.75*meniscus);
      vec2 echo=v-vec2(.16,-.23);float ring=length(echo);
      vec2 slope=radial*(.22*meniscus+.018*wave)
        +echo/max(.001,ring)*.012*sin(ring*68.-time*4.)*exp(-3.*ring);
      vec3 n=normalize(vec3(slope.x,1.,-slope.y));
      vec3 refl=reflect(-e,n);vec3 light=normalize(vec3(1.28,1.69,-.38)-pos);
      float highlight=pow(max(0.,dot(light,refl)),72.);
      vec2 uv=(pos.xy+refl.xy*(pos.z+1.57)/max(.25,-refl.z))/vec2(10.65,4.63)+vec2(.51,.29);
      vec3 cityLight=pow(textureLod(city,clamp(uv,.002,.998),3.5).rgb,vec3(2.2));
      float edge=pow(min(1.,r),4.2);float fres=.03+.75*pow(1.-max(dot(e,n),0.),3.5);
      vec3 tea=mix(vec3(.033,.012,.0035),vec3(.20,.067,.012),edge*.81);
      tea+=vec3(.82,.48,.18)*highlight*.79+cityLight*(fres*2.6+.053);
      float lip=exp(-pow((r-.953-.004*wave)/.016,2.));
      tea+=vec3(.23,.12,.03)*pow(meniscus,6.)+lip*vec3(.36,.21,.085)*(.3+.7*abs(radial.y));
      gl_FragColor=vec4(tea,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  return material;
}
export function cabinetTop() {
  const map = canvasMap(1024, 680, (c, w, h) => {
    const r = random(8820),
      im = c.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      const brush = r() * 3;
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4,
          n = r() * 5 + brush;
        im.data[i] = 51 + n;
        im.data[i + 1] = 58 + n;
        im.data[i + 2] = 54 + n;
        im.data[i + 3] = 255;
      }
    }
    c.putImageData(im, 0, 0);
    c.strokeStyle = "#788075";
    c.lineWidth = 1.2;
    c.beginPath();
    c.roundRect(12, 12, w - 24, h - 24, 13);
    c.stroke();
  });
  return mat(0xf6f1e8, 0.37, 0.56, { map });
}
