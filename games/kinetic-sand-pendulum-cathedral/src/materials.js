import * as T from 'three';
import { TAU } from './motion.js';
export function random(seed = 731) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
function hash(x, y) {
  let n = Math.imul(x, 374761393) + Math.imul(y, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}
function noise(x, y, n) {
  const i = Math.floor(x),
    j = Math.floor(y);
  let u = x - i,
    v = y - j;
  u = u * u * (3 - 2 * u);
  v = v * v * (3 - 2 * v);
  const a = hash(i % n, j % n),
    b = hash((i + 1) % n, j % n),
    c = hash(i % n, (j + 1) % n),
    d = hash((i + 1) % n, (j + 1) % n);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}
function texture(c, srgb = true) {
  const tex = new T.CanvasTexture(c);
  if (srgb) tex.colorSpace = T.SRGBColorSpace;
  tex.wrapS = tex.wrapT = T.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}
function mineral(kind) {
  const size = 512,
    c = canvas(size, size),
    ctx = c.getContext('2d'),
    img = ctx.createImageData(size, size),
    rng = random(2391);
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const u = x / size,
        v = y / size,
        grain = rng();
      const n =
        0.54 * noise(u * 4, v * 4, 4) +
        0.27 * noise(u * 13, v * 13, 13) +
        0.13 * noise(u * 35, v * 35, 35) +
        0.06 * noise(u * 89, v * 89, 89);
      const wave = Math.sin(TAU * (v * 3 + u + 1.65 * n));
      const vein = Math.pow(Math.max(0, 1 - Math.abs(wave) * 2.9), 7);
      let col;
      if (kind === 'obsidian') {
        const h = 19 + 31 * n + 8 * grain + vein * (22 + 66 * n);
        col = [h * 0.91, h * 1.12, h * 1.09];
      } else {
        const seed = (grain - 0.5) * 0.68 + (n - 0.5) * 0.65 + 0.5;
        col = [255 * seed, 255 * n, 255 * rng()];
      }
      const i = 4 * (x + size * y);
      for (let k = 0; k < 3; k++) img.data[i + k] = col[k];
      img.data[i + 3] = 255;
    }
  ctx.putImageData(img, 0, 0);
  return texture(c, kind !== 'sand');
}
function turnedMetal(engraved) {
  const w = 1024,
    h = 512,
    c = canvas(w, h),
    ctx = c.getContext('2d'),
    rng = random(51);
  ctx.fillStyle = '#ecd7aa';
  ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y++) {
    ctx.fillStyle = 'rgba(59,49,38,' + rng() * 0.18 + ')';
    ctx.fillRect(0, y, w, 1);
  }
  for (let i = 0; i < 4200; i++) {
    ctx.fillStyle = rng() > 0.5 ? '#fff5ce24' : '#4037251f';
    ctx.fillRect(rng() * w, rng() * h, rng() * 15 + 1, 0.7);
  }
  if (engraved) {
    function line(path, dark = 3) {
      for (const [offset, color, width] of [
        [1.5, '#fff1c6', dark + 1],
        [0, '#605239', dark],
      ]) {
        ctx.save();
        ctx.translate(0, offset);
        ctx.beginPath();
        path();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.restore();
      }
    }
    for (const y of [41, 47, 104, 110, 151, 159, 170, 332, 341, 350, 395, 401, 464, 470])
      line(() => {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }, 2);
    for (let k = -1; k < 24; k++) {
      const mid = (k * w) / 20;
      for (let sign of [-1, 1])
        line(() => {
          ctx.moveTo(mid, 252);
          ctx.bezierCurveTo(mid + sign * 25, 220, mid + sign * 19, 197, mid, 178);
          ctx.bezierCurveTo(mid - sign * 4, 193, mid - sign * 8, 227, mid, 252);
          ctx.bezierCurveTo(mid + sign * 23, 273, mid + sign * 15, 304, mid, 325);
          ctx.bezierCurveTo(mid - sign * 7, 295, mid - sign * 9, 271, mid, 252);
        }, 2);
      for (const y of [78, 432])
        line(() => {
          ctx.moveTo(mid - 25, y);
          ctx.lineTo(mid, y - 18);
          ctx.lineTo(mid + 25, y);
          ctx.lineTo(mid, y + 18);
          ctx.closePath();
        }, 2.5);
    }
  }
  return texture(c);
}
export async function finishes() {
  const stoneMap = await new T.TextureLoader().loadAsync('./assets/travertine.jpg');
  stoneMap.colorSpace = T.SRGBColorSpace;
  stoneMap.wrapS = stoneMap.wrapT = T.RepeatWrapping;
  stoneMap.anisotropy = 8;
  const obsidianMap = mineral('obsidian'),
    grains = mineral('sand'),
    brassMap = turnedMetal(false),
    engraving = turnedMetal(true);
  const standard = (opt) => new T.MeshStandardMaterial(opt);
  function stone(color) {
    return standard({ color, map: stoneMap, roughness: 0.89, bumpMap: stoneMap, bumpScale: 0.016 });
  }
  function metal(color, roughness = 0.29, map = brassMap) {
    return standard({ color, map, metalness: 0.88, roughness });
  }
  return {
    grains,
    stone,
    metal,
    limestone: stone('#d0cebf'),
    light: stone('#ddd9c8'),
    weathered: stone('#bab3a6'),
    floor: stone('#aaa799'),
    joint: stone('#655f50'),
    black: standard({
      color: '#cfddd4',
      map: obsidianMap,
      roughness: 0.28,
      metalness: 0.28,
      bumpMap: obsidianMap,
      bumpScale: 0.012,
    }),
    bronze: metal('#9e8057', 0.36),
    brass: metal('#e8ca89', 0.26),
    edge: metal('#fff1af', 0.2),
    patina: metal('#60766b', 0.53),
    dark: metal('#4f4840', 0.39),
    bob: standard({
      color: '#ffdf93',
      map: engraving,
      bumpMap: engraving,
      bumpScale: 0.01,
      metalness: 0.86,
      roughness: 0.25,
    }),
    steel: standard({ color: '#c7d0c6', metalness: 0.93, roughness: 0.2 }),
  };
}

// A linear-radiance environment for the polished metal. Tall bright arcade openings
// and the thin solar reflection remain legible across the curved engraved brass.
export function lightingEnvironment(renderer) {
  const w = 512,
    h = 256,
    data = new Uint16Array(w * h * 4);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const a = (TAU * x) / w,
        elev = ((h / 2 - y) / h) * Math.PI,
        bay = Math.cos(14 * a);
      const sky = elev > -0.08 && elev < 0.73 + Math.min(0, bay) * 0.22 && bay > -0.5;
      const key = Math.exp(-Math.pow(Math.atan2(Math.sin(a - 3.5), Math.cos(a - 3.5)) / 0.4, 2));
      const strip = Math.exp(-Math.pow((elev - 0.11) / 0.045, 2));
      const warm = sky ? 1.3 + key * 5.2 : 0.14 + 0.15 * Math.max(0, Math.cos(a * 14));
      const floor = elev < -0.12 ? 0.24 + 0.6 * Math.pow(Math.max(0, -Math.sin(elev)), 3) : 0;
      const v = [
        warm * (1.12 + key * 0.38) + floor + 0.7 * strip,
        warm * (1.07 - key * 0.06) + 0.78 * floor + 0.57 * strip,
        warm * (1.05 - key * 0.44) + 0.49 * floor + 0.35 * strip,
        1,
      ];
      for (let i = 0; i < 4; i++) data[4 * (y * w + x) + i] = T.DataUtils.toHalfFloat(v[i]);
    }
  const env = new T.DataTexture(data, w, h, T.RGBAFormat, T.HalfFloatType);
  env.mapping = T.EquirectangularReflectionMapping;
  env.needsUpdate = true;
  const pm = new T.PMREMGenerator(renderer),
    target = pm.fromEquirectangular(env);
  pm.dispose();
  env.dispose();
  return target.texture;
}
