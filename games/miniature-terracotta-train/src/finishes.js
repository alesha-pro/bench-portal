import { T, M, canvasTex, random, repeat, mat, photo } from './craft.js';
const rnd = random(1912);
export const rockScan = photo('alpine-schist.jpg');
rockScan.wrapS = rockScan.wrapT = T.RepeatWrapping;
const patina = canvasTex(512, 512, (c, w, h) => {
  const pix = c.createImageData(w, h);
  for (let i = 0; i < w * h; i++) {
    let v = 218 + rnd() * 22 + 4 * Math.sin((i / w) * 0.23);
    pix.data.set([v, v, v, 255], i * 4);
  }
  c.putImageData(pix, 0, 0);
  for (let i = 0; i < 3400; i++) {
    const x = rnd() * w,
      y = rnd() * h,
      l = rnd() ** 3 * 22;
    c.strokeStyle = rnd() > 0.57 ? 'rgba(255,247,207,.25)' : 'rgba(54,48,35,.19)';
    c.lineWidth = 0.35 + rnd() * 0.75;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + l * 0.87, y + l * (rnd() - 0.5));
    c.stroke();
  }
  for (let i = 0; i < 430; i++) {
    const x = rnd() * w,
      y = rnd() * h,
      r = 2 + rnd() * 21,
      g = c.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(108,94,74,.09)');
    g.addColorStop(1, 'rgba(108,94,74,0)');
    c.fillStyle = g;
    c.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
});
repeat(patina, 2, 2);
for (const m of [M.green, M.darkGreen, M.brass, M.steel, M.iron, M.black, M.red, M.oldGold]) {
  m.map = patina;
  m.roughnessMap = patina;
  m.bumpMap = patina;
  m.bumpScale = 0.003;
}
M.brass.color.set(0xc69857);
M.oldGold.color.set(0x9a7448);
M.steel.color.set(0xa0adaa);
M.red.color.set(0x76372b);
M.wood.color.set(0x755b47);
const fleck = canvasTex(512, 512, (c, w, h) => {
  c.fillStyle = '#585659';
  c.fillRect(0, 0, w, h);
  for (let j = 0; j < 11800; j++) {
    const x = rnd() * w,
      y = rnd() * h,
      r = 0.7 + rnd() * 2.7,
      v = Math.floor(65 + rnd() * 87);
    c.fillStyle = 'rgb(' + v + ',' + (v - 3) + ',' + (v - 7) + ')';
    c.beginPath();
    c.moveTo(x - r, y);
    c.lineTo(x - r * 0.34, y - r);
    c.lineTo(x + r * 0.88, y - r * 0.49);
    c.lineTo(x + r, y + r * 0.49);
    c.lineTo(x, y + r * 0.7);
    c.fill();
    c.fillStyle = 'rgba(214,217,211,.22)';
    c.fillRect(x - r * 0.4, y - r * 0.78, r * 0.65, 0.6);
  }
});
export const ballast = mat(0xb6b7b8, 0.95, 0.01, {
  map: repeat(fleck, 0.67, 1.15),
  bumpMap: fleck,
  bumpScale: 0.037,
});
let shadowInk;
const contact = canvasTex(768, 440, (c, w, h) => {
  shadowInk = c;
  c.fillStyle = 'white';
  c.fillRect(0, 0, w, h);
});
export function contactShadow(x, z, rx, rz, power) {
  const c = shadowInk;
  c.save();
  c.translate(((x + 19) / 38) * 768, ((z + 12) / 22) * 440);
  c.scale((rx / 38) * 768, (rz / 22) * 440);
  const g = c.createRadialGradient(0, 0, 0, 0, 0, 1);
  g.addColorStop(0, 'rgba(0,0,0,' + power + ')');
  g.addColorStop(0.4, 'rgba(0,0,0,' + power * 0.79 + ')');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g;
  c.fillRect(-1, -1, 2, 2);
  c.restore();
  contact.needsUpdate = true;
}
export function terrainFinish() {
  const m = mat(0xffffff, 0.91, 0.0, { vertexColors: true });
  m.onBeforeCompile = (shader) => {
    shader.uniforms.schist = { value: rockScan };
    shader.uniforms.contactMap = { value: contact };
    shader.vertexShader =
      'varying vec3 earth, earthNormal;\n' +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nearth=position;earthNormal=normal;',
      );
    shader.fragmentShader =
      'varying vec3 earth, earthNormal; uniform sampler2D schist,contactMap;\n' +
      shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
 vec3 gn=normalize(earthNormal);float scarp=1.-abs(gn.y);
 vec3 weights=pow(abs(gn),vec3(3.));weights/=dot(weights,vec3(1.));
 vec3 strata=texture2D(schist,earth.zy*.49).rgb*weights.x+texture2D(schist,earth.xz*.46).rgb*weights.y+texture2D(schist,earth.xy*.49).rgb*weights.z;
 float broken=smoothstep(.15,.51,scarp+.17*sin(earth.x*2.1+earth.z)+.14*(strata.r-.23));
 diffuseColor.rgb=mix(diffuseColor.rgb*(.88+.23*strata.r),strata*vec3(.73,.79,.85),broken*.94);
 diffuseColor.rgb*=.35+.65*texture2D(contactMap,vec2((earth.x+19.)/38.,1.-(earth.z+12.)/22.)).r;
 float center=-1.5+sqrt(max(0.,4.65*4.65-pow(min(0.,earth.x+12.),2.)));
 float dz=abs(earth.z-center);
 if(earth.x < -11.89 && earth.x > -16.64 && dz<.89 && earth.y>4.27 && (earth.y <5.57 || pow(dz/.89,2.)+pow((earth.y-5.57)/.89,2.)<1.))discard;
 `,
      );
  };
  return m;
}
export function snowCap() {
  const m = mat(0xf3f2f1, 0.92, 0.01, { map: patina, bumpMap: patina, bumpScale: 0.015 });
  return m;
}
