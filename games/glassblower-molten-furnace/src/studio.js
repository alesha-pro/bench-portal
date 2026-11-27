import * as T from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

export { T };
export const v = (x, y, z) => new T.Vector3(x, y, z);
export const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
export const smooth = (a, b, n) => {
  const k = clamp((n - a) / (b - a));
  return k * k * (3 - 2 * k);
};
export const mix = T.MathUtils.lerp;
export function random(seed) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function object(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new T.Mesh(geo, mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
export function group(parent, x = 0, y = 0, z = 0) {
  const g = new T.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
export function box(p, m, x, y, z, w, h, d, edge = 0) {
  const g = edge
    ? new RoundedBoxGeometry(w, h, d, 1, Math.min(edge, w * 0.24, h * 0.24, d * 0.24))
    : new T.BoxGeometry(w, h, d);
  return object(p, g, m, x, y, z);
}
export function rod(p, m, a, b, r, r2 = r, n = 18) {
  const dir = b.clone().sub(a);
  const mesh = object(p, new T.CylinderGeometry(r2, r, dir.length(), n), m);
  mesh.position.copy(a).lerp(b, 0.5);
  mesh.quaternion.setFromUnitVectors(v(0, 1, 0), dir.normalize());
  return mesh;
}
export function tube(p, m, points, r, n = 24) {
  return object(
    p,
    new T.TubeGeometry(new T.CatmullRomCurve3(points.map((a) => v(...a))), n, r, 8, false),
    m,
  );
}
export function lathe(p, m, x, y, z, profile, n = 64) {
  return object(
    p,
    new T.LatheGeometry(
      profile.map(([r, h]) => new T.Vector2(r, h)),
      n,
    ),
    m,
    x,
    y,
    z,
  );
}
export const pbr = (c, metalness = 0, roughness = 0.65) =>
  new T.MeshStandardMaterial({ color: c, metalness, roughness });
export function batch(root) {
  root.updateMatrixWorld(true);
  const batches = new Map();
  root.traverse((o) => {
    if (!o.isMesh || !o.material.isMeshStandardMaterial) return;
    const mat = o.material;
    if (!batches.has(mat)) batches.set(mat, []);
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    for (const key of Object.keys(g.attributes))
      if (!["position", "normal", "uv", "color"].includes(key)) g.deleteAttribute(key);
    g.clearGroups();
    batches.get(mat).push([o, g]);
  });
  for (const [m, items] of batches) {
    const mesh = object(root, mergeGeometries(items.map((i) => i[1])), m);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    for (const [o, g] of items) {
      o.removeFromParent();
      g.dispose();
      o.geometry.dispose();
    }
  }
}
export async function palette(renderer, scene) {
  const loader = new T.TextureLoader();
  async function surface(name, color, metal, rough, strength) {
    const [map, normalMap] = await Promise.all(
      ["", "-n"].map((s) => loader.loadAsync("assets/" + name + s + ".jpg")),
    );
    for (const tex of [map, normalMap]) {
      tex.wrapS = tex.wrapT = T.RepeatWrapping;
      tex.anisotropy = 4;
    }
    map.colorSpace = T.SRGBColorSpace;
    return new T.MeshStandardMaterial({
      map,
      normalMap,
      color,
      normalScale: new T.Vector2(strength, strength),
      roughness: rough,
      metalness: metal,
    });
  }
  const [clay, wall, wood, iron, char] = await Promise.all([
    surface("refractory", 0xd2c2b2, 0.02, 0.92, 1.08),
    surface("masonry", 0xcec7ba, 0, 0.98, 1.2),
    surface("timber", 0xc8c4b7, 0.035, 0.5, 0.92),
    surface("blued-iron", 0xb6b5b0, 0.67, 0.47, 0.68),
    surface("cherry-char", 0xbba592, 0.16, 0.32, 0.88),
  ]);
  const [plasterMap, lagoon] = await Promise.all(
    ["soot-plaster", "lagoon"].map((n) => loader.loadAsync("assets/" + n + ".jpg")),
  );
  lagoon.colorSpace = T.SRGBColorSpace;
  plasterMap.colorSpace = T.SRGBColorSpace;
  plasterMap.wrapS = plasterMap.wrapT = T.RepeatWrapping;
  plasterMap.anisotropy = 6;
  const plaster = new T.MeshStandardMaterial({
    map: plasterMap,
    bumpMap: plasterMap,
    bumpScale: 0.037,
    color: 0x898c88,
    roughness: 0.97,
  });
  const env = reflectionMap();
  // Cylinder UV.y runs from the socket toward the heated working edge.
  const tempered = iron.clone();
  tempered.color.set(0xe5e1d7);
  tempered.metalness = 0.82;
  tempered.roughness = 0.34;
  tempered.onBeforeCompile = (shader) => {
    shader.fragmentShader =
      noiseGLSL +
      shader.fragmentShader
        .replace(
          "#include <map_fragment>",
          `
      #include <map_fragment>
      float oxide=vMapUv.y+.09*noise2(vMapUv*vec2(17.,5.));
      vec3 temper=mix(vec3(.54,.51,.43),vec3(.72,.40,.14),smoothstep(.18,.40,oxide));
      temper=mix(temper,vec3(.33,.13,.29),smoothstep(.42,.61,oxide));
      temper=mix(temper,vec3(.085,.23,.44),smoothstep(.58,.77,oxide));
      temper=mix(temper,vec3(.62,.67,.70),smoothstep(.84,.99,oxide));
      float worn=pow(noise2(vMapUv*vec2(184.,7.)),9.);
      diffuseColor.rgb=mix((.21+diffuseColor.rgb)*temper,vec3(.68,.63,.53),worn);
    `,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `
      #include <emissivemap_fragment>
      float blueBand=smoothstep(.57,.73,oxide)*(1.-smoothstep(.83,.97,oxide));
      totalEmissiveRadiance+=vec3(.009,.026,.061)*blueBand;
    `,
        );
  };
  const gen = new T.PMREMGenerator(renderer);
  scene.environment = gen.fromEquirectangular(env).texture;
  scene.environmentIntensity = 0.46;
  gen.dispose();
  return {
    clay,
    wall,
    plaster,
    wood,
    iron,
    tempered,
    char,
    lagoon,
    env,
    steel: pbr(0x939493, 0.92, 0.27),
    dark: pbr(0x232728, 0.61, 0.58),
    brass: pbr(0xa8824d, 0.79, 0.32),
    copper: pbr(0x945334, 0.68, 0.4),
    mortar: pbr(0x3e342f, 0.02, 0.95),
    ceramic: pbr(0x777365, 0.03, 0.83),
    gold: pbr(0xefbc50, 0.89, 0.27),
  };
}
// An HDR panorama of the hot shop provides continuous reflections between the visible light sources.
function reflectionMap() {
  const w = 512,
    h = 256,
    data = new Uint16Array(w * h * 4);
  for (let j = 0; j < h; j++)
    for (let i = 0; i < w; i++) {
      const u = i / w,
        y = j / h;
      const rect = (cx, cy, sx, sy) =>
        Math.exp(
          -Math.pow(Math.min(Math.abs(u - cx), 1 - Math.abs(u - cx)) / sx, 4) -
            Math.pow((y - cy) / sy, 4),
        );
      const furnace = rect(0.68, 0.48, 0.064, 0.105),
        sky = rect(0.24, 0.6, 0.095, 0.14);
      const mullion =
        Math.abs(Math.sin((u - 0.15) * 115)) > 0.105 && Math.abs(Math.sin(y * 55)) > 0.105
          ? 1
          : 0.11;
      const strip = rect(0.43, 0.65, 0.012, 0.22) + rect(0.04, 0.59, 0.013, 0.23) * 0.9;
      const top = rect(0.87, 0.83, 0.14, 0.021);
      const fill =
        0.035 + 0.095 * Math.pow(Math.sin(y * Math.PI), 2) + 0.032 * Math.sin(u * 54 + y * 17) ** 2;
      const color = [
        fill + 5.5 * furnace + 0.75 * sky * mullion + 2.2 * strip + 0.8 * top,
        fill * 0.82 + 1.48 * furnace + 1.0 * sky * mullion + 2.05 * strip + 0.6 * top,
        fill * 0.73 + 0.18 * furnace + 1.25 * sky * mullion + 1.7 * strip + 0.41 * top,
        1,
      ];
      color.forEach((c, k) => (data[(j * w + i) * 4 + k] = T.DataUtils.toHalfFloat(c)));
    }
  const tex = new T.DataTexture(data, w, h, T.RGBAFormat, T.HalfFloatType);
  tex.mapping = T.EquirectangularReflectionMapping;
  tex.minFilter = tex.magFilter = T.LinearFilter;
  tex.wrapS = T.RepeatWrapping;
  tex.needsUpdate = true;
  return tex;
}
export const noiseGLSL = `
float h21(vec2 p){vec3 q=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}
float fb(vec2 p){return noise2(p)*.54+noise2(p*2.07+8.)*.28+noise2(p*4.21-3.)*.13+noise2(p*8.5)*.05;}
`;
export function label(p, lines, x, y, z, w, h, back = "#302a22", ink = "#d7bf88") {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 256;
  const c = canvas.getContext("2d");
  c.fillStyle = back;
  c.fillRect(0, 0, 768, 256);
  c.strokeStyle = ink;
  c.lineWidth = 3;
  c.strokeRect(11, 12, 746, 232);
  c.strokeRect(18, 18, 732, 220);
  c.textAlign = "center";
  c.fillStyle = ink;
  for (const [s, font, yy] of lines) {
    c.font = font;
    c.fillText(s, 384, yy);
  }
  const map = new T.CanvasTexture(canvas);
  map.colorSpace = T.SRGBColorSpace;
  return object(
    p,
    new T.PlaneGeometry(w, h),
    new T.MeshStandardMaterial({ map, roughness: 0.58, metalness: 0.19 }),
    x,
    y,
    z,
  );
}
