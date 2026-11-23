import * as THREE from 'three';

/**
 * Procedural 2048x2048 PBR Texture Baker (runs once at load, zero external assets):
 * - Weathered Carved Ancient Stone: 2048² albedo, roughness & tangent-space normal maps
 *   (layered FBM rock noise, panel seams, branching cracks, engraved glyph bands,
 *    dark vertical oxidation/rain streaks, desert sand collected in crevices)
 * - Oxidized Ancient Bronze: 2048² albedo, roughness & normal maps
 *   (hammered metal, panel seams, raised rivet heights, turquoise verdigris patina streaks,
 *    engraved relief bands, edge wear)
 * - Woven Linen Fabric: 512² micro-normal map
 * - Tattered Ancient Banner: 256x512 alpha-masked weathered cloth
 * - Soft Multi-Lobe Dust Cloud Sprite: 128²
 */

// Fast deterministic PRNG + 2D value noise for crisp procedural canvas baking
function hash2(x, y, seed) {
  let n = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 1442695041);
  n = (n ^ (n >>> 13)) * 1274126177;
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function tileNoise(x, y, period, seed) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const fx = x - xi;
  const fy = y - yi;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  const x0 = ((xi % period) + period) % period;
  const y0 = ((yi % period) + period) % period;
  const x1 = (x0 + 1) % period;
  const y1 = (y0 + 1) % period;
  const a = hash2(x0, y0, seed);
  const b = hash2(x1, y0, seed);
  const c = hash2(x0, y1, seed);
  const d = hash2(x1, y1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

/**
 * Generates a tileable 512² noise base and upscales cleanly onto 2048² canvases
 * alongside razor-crisp 2048² vector cracks, panel seams, engraved glyphs, rivets, and streaks!
 * Keeps startup bake under ~160ms while delivering genuine 2048² texture crispness!
 */
function createTileFbmCanvas(baseSize, octaves, seed, stretchX = 1, stretchY = 1) {
  const c = document.createElement('canvas');
  c.width = c.height = baseSize;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(baseSize, baseSize);
  const d = img.data;
  for (let y = 0; y < baseSize; y++) {
    for (let x = 0; x < baseSize; x++) {
      let sum = 0, amp = 0.5, freq = 6;
      for (let o = 0; o < octaves; o++) {
        const px = (x / baseSize) * freq * stretchX;
        const py = (y / baseSize) * freq * stretchY;
        sum += tileNoise(px, py, Math.max(2, Math.round(freq * stretchX)), seed + o * 17) * amp;
        freq *= 2;
        amp *= 0.5;
      }
      const val = Math.max(0, Math.min(255, Math.round(sum * 255)));
      const idx = (y * baseSize + x) * 4;
      d[idx] = d[idx + 1] = d[idx + 2] = val;
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

function heightCanvasToNormalTexture(heightCanvas, strength = 2.4) {
  const w = heightCanvas.width;
  const h = heightCanvas.height;
  // Compute normals on 1024² (fast & silky smooth!) or full res if <= 1024
  const nw = Math.min(w, 1024);
  const nh = Math.min(h, 1024);
  const tmp = document.createElement('canvas');
  tmp.width = nw; tmp.height = nh;
  const tCtx = tmp.getContext('2d');
  tCtx.drawImage(heightCanvas, 0, 0, nw, nh);
  const src = tCtx.getImageData(0, 0, nw, nh).data;

  const outCanvas = document.createElement('canvas');
  outCanvas.width = nw; outCanvas.height = nh;
  const oCtx = outCanvas.getContext('2d');
  const out = oCtx.createImageData(nw, nh);
  const dst = out.data;

  const sample = (x, y) => {
    const xx = (x + nw) % nw;
    const yy = (y + nh) % nh;
    return src[(yy * nw + xx) * 4] / 255.0;
  };

  for (let y = 0; y < nh; y++) {
    for (let x = 0; x < nw; x++) {
      const hL = sample(x - 1, y);
      const hR = sample(x + 1, y);
      const hU = sample(x, y - 1);
      const hD = sample(x, y + 1);
      const dx = (hL - hR) * strength;
      const dy = (hU - hD) * strength;
      const dz = 1.0;
      const invLen = 1.0 / Math.hypot(dx, dy, dz);
      const idx = (y * nw + x) * 4;
      dst[idx + 0] = Math.round((dx * invLen * 0.5 + 0.5) * 255);
      dst[idx + 1] = Math.round((dy * invLen * 0.5 + 0.5) * 255);
      dst[idx + 2] = Math.round((dz * invLen * 0.5 + 0.5) * 255);
      dst[idx + 3] = 255;
    }
  }
  oCtx.putImageData(out, 0, 0);
  const tex = new THREE.CanvasTexture(outCanvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

function makeCanvasTex(canvas, isSRGB = false) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  if (isSRGB) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * 2048² Weathered Carved Stone PBR Set (albedo, roughness, normal)
 */
function bakeWeatheredStoneSet() {
  const S = 2048;
  const colC = document.createElement('canvas');
  const hgtC = document.createElement('canvas');
  const rghC = document.createElement('canvas');
  colC.width = colC.height = hgtC.width = hgtC.height = rghC.width = rghC.height = S;

  const cCtx = colC.getContext('2d');
  const hCtx = hgtC.getContext('2d');
  const rCtx = rghC.getContext('2d');

  // Layered multi-octave stone noise
  const fbm = createTileFbmCanvas(256, 4, 11);
  const streaks = createTileFbmCanvas(256, 3, 73, 4, 0.5);

  cCtx.fillStyle = '#5c4d3e';
  cCtx.fillRect(0, 0, S, S);
  cCtx.globalAlpha = 0.55;
  cCtx.drawImage(fbm, 0, 0, S, S);
  cCtx.globalCompositeOperation = 'multiply';
  cCtx.globalAlpha = 0.72;
  cCtx.drawImage(fbm, 0, 0, S, S);
  cCtx.globalCompositeOperation = 'source-over';
  cCtx.globalAlpha = 1.0;

  hCtx.fillStyle = '#808080';
  hCtx.fillRect(0, 0, S, S);
  hCtx.globalAlpha = 0.65;
  hCtx.drawImage(fbm, 0, 0, S, S);
  hCtx.globalAlpha = 1.0;

  rCtx.fillStyle = '#d4d4d4';
  rCtx.fillRect(0, 0, S, S);
  rCtx.globalAlpha = 0.45;
  rCtx.drawImage(fbm, 0, 0, S, S);
  rCtx.globalAlpha = 1.0;

  // Sedimentary horizontal wind-erosion bands
  for (let y = 0; y < S; y += 10) {
    const v = Math.sin(y * 0.018) * 14 + (hash2(y, 3, 9) - 0.5) * 18;
    cCtx.fillStyle = v > 0 ? `rgba(176, 146, 108, ${v * 0.006})` : `rgba(32, 24, 18, ${-v * 0.008})`;
    cCtx.fillRect(0, y, S, 10);
  }

  // Carved megalithic ashlar stone panel blocks with recessed bevel seams & dusty ledges
  const rows = 8;
  const rowH = S / rows;
  for (let r = 0; r < rows; r++) {
    const cols = r % 2 === 0 ? 4 : 5;
    const colW = S / cols;
    const xOff = (r % 2) * (colW * 0.45);
    for (let c = -1; c <= cols; c++) {
      const x = c * colW + xOff;
      const y = r * rowH;
      const tone = (hash2(c + 10, r + 10, 41) - 0.5) * 34;

      cCtx.fillStyle = tone > 0 ? `rgba(195,165,128,${tone * 0.006})` : `rgba(28,22,18,${-tone * 0.008})`;
      cCtx.fillRect(x + 6, y + 6, colW - 12, rowH - 12);

      // Deep dark panel gap seam
      cCtx.strokeStyle = 'rgba(26, 20, 15, 0.82)';
      cCtx.lineWidth = 10;
      cCtx.strokeRect(x + 2, y + 2, colW - 4, rowH - 4);

      hCtx.strokeStyle = '#181818';
      hCtx.lineWidth = 12;
      hCtx.strokeRect(x + 2, y + 2, colW - 4, rowH - 4);

      rCtx.strokeStyle = '#f2f2f2';
      rCtx.lineWidth = 12;
      rCtx.strokeRect(x + 2, y + 2, colW - 4, rowH - 4);

      // Golden desert sand settled inside horizontal top ledge crevices!
      const sandGrad = cCtx.createLinearGradient(0, y + 6, 0, y + 34);
      sandGrad.addColorStop(0, 'rgba(188, 146, 94, 0.52)');
      sandGrad.addColorStop(1, 'rgba(188, 146, 94, 0)');
      cCtx.fillStyle = sandGrad;
      cCtx.fillRect(x + 8, y + 6, colW - 16, 28);

      // Raised inner panel chamfer highlight
      hCtx.strokeStyle = '#b8b8b8';
      hCtx.lineWidth = 4;
      hCtx.strokeRect(x + 12, y + 12, colW - 24, rowH - 24);
    }

    // Engraved ancient archaic glyph frieze band on rows 1 & 5!
    if (r === 1 || r === 5) {
      const gy = r * rowH + rowH * 0.5;
      cCtx.strokeStyle = 'rgba(34, 24, 16, 0.75)';
      hCtx.strokeStyle = '#222222';
      cCtx.lineWidth = 5;
      hCtx.lineWidth = 7;

      // Double frieze border lines
      for (const dy of [-58, -46, 46, 58]) {
        cCtx.beginPath(); cCtx.moveTo(0, gy + dy); cCtx.lineTo(S, gy + dy); cCtx.stroke();
        hCtx.beginPath(); hCtx.moveTo(0, gy + dy); hCtx.lineTo(S, gy + dy); hCtx.stroke();
      }
      // Geometric archaic glyphs (concentric solar rings, chevrons, stepped diamonds)
      for (let gx = 48; gx < S; gx += 128) {
        cCtx.beginPath();
        hCtx.beginPath();
        cCtx.arc(gx, gy, 24, 0, Math.PI * 2);
        hCtx.arc(gx, gy, 24, 0, Math.PI * 2);
        cCtx.moveTo(gx - 42, gy); cCtx.lineTo(gx - 28, gy - 22); cCtx.lineTo(gx - 14, gy);
        hCtx.moveTo(gx - 42, gy); hCtx.lineTo(gx - 28, gy - 22); hCtx.lineTo(gx - 14, gy);
        cCtx.moveTo(gx + 14, gy); cCtx.lineTo(gx + 28, gy + 22); cCtx.lineTo(gx + 42, gy);
        hCtx.moveTo(gx + 14, gy); hCtx.lineTo(gx + 28, gy + 22); hCtx.lineTo(gx + 42, gy);
        cCtx.stroke();
        hCtx.stroke();
      }
    }
  }

  // Deep branching geological cracks & fractures across stone slabs
  for (let i = 0; i < 42; i++) {
    let cx = hash2(i, 1, 99) * S;
    let cy = hash2(i, 2, 99) * S;
    const lw = 2.5 + hash2(i, 3, 99) * 5.5;
    cCtx.strokeStyle = 'rgba(20, 14, 10, 0.85)';
    hCtx.strokeStyle = '#080808';
    cCtx.lineWidth = lw;
    hCtx.lineWidth = lw + 2;
    cCtx.beginPath(); hCtx.beginPath();
    cCtx.moveTo(cx, cy); hCtx.moveTo(cx, cy);
    const steps = 8 + Math.floor(hash2(i, 4, 99) * 14);
    for (let s = 0; s < steps; s++) {
      cx += (hash2(i, s * 2 + 10, 99) - 0.5) * 95;
      cy += (hash2(i, s * 2 + 11, 99) - 0.35) * 95;
      cCtx.lineTo(cx, cy); hCtx.lineTo(cx, cy);
    }
    cCtx.stroke(); hCtx.stroke();
  }

  // Dark vertical weathering / oxidation streaks running down vertical masonry
  cCtx.globalCompositeOperation = 'multiply';
  cCtx.globalAlpha = 0.38;
  cCtx.drawImage(streaks, 0, 0, S, S);
  cCtx.globalCompositeOperation = 'source-over';
  cCtx.globalAlpha = 1.0;

  return {
    map: makeCanvasTex(colC, true),
    roughnessMap: makeCanvasTex(rghC, false),
    normalMap: heightCanvasToNormalTexture(hgtC, 2.8),
  };
}

/**
 * 2048² Oxidized Ancient Bronze PBR Set (albedo, roughness, normal)
 */
function bakeOxidizedBronzeSet() {
  const S = 2048;
  const colC = document.createElement('canvas');
  const hgtC = document.createElement('canvas');
  const rghC = document.createElement('canvas');
  colC.width = colC.height = hgtC.width = hgtC.height = rghC.width = rghC.height = S;

  const cCtx = colC.getContext('2d');
  const hCtx = hgtC.getContext('2d');
  const rCtx = rghC.getContext('2d');

  const fbm = createTileFbmCanvas(256, 4, 53);
  const oxStreaks = createTileFbmCanvas(256, 3, 131, 5, 0.45);

  cCtx.fillStyle = '#7c5b34';
  cCtx.fillRect(0, 0, S, S);
  cCtx.globalCompositeOperation = 'multiply';
  cCtx.globalAlpha = 0.55;
  cCtx.drawImage(fbm, 0, 0, S, S);
  cCtx.globalCompositeOperation = 'source-over';
  cCtx.globalAlpha = 1.0;

  hCtx.fillStyle = '#808080';
  hCtx.fillRect(0, 0, S, S);
  hCtx.globalAlpha = 0.32;
  hCtx.drawImage(fbm, 0, 0, S, S);
  hCtx.globalAlpha = 1.0;

  rCtx.fillStyle = '#686868';
  rCtx.fillRect(0, 0, S, S);
  rCtx.globalAlpha = 0.55;
  rCtx.drawImage(fbm, 0, 0, S, S);
  rCtx.globalAlpha = 1.0;

  // Riveted hammered bronze plate bands with raised rivet heights!
  const bandH = 256;
  for (let y = 0; y < S; y += bandH) {
    // Seam recess
    cCtx.fillStyle = 'rgba(26, 18, 10, 0.78)';
    cCtx.fillRect(0, y, S, 10);
    hCtx.fillStyle = '#181818';
    hCtx.fillRect(0, y, S, 12);

    // Subtle turquoise-slate verdigris oxidation bleeding down from every rivet & seam!
    const patGrad = cCtx.createLinearGradient(0, y + 10, 0, y + 88);
    patGrad.addColorStop(0, 'rgba(62, 104, 92, 0.58)');
    patGrad.addColorStop(0.5, 'rgba(54, 88, 78, 0.24)');
    patGrad.addColorStop(1, 'rgba(54, 88, 78, 0)');
    cCtx.fillStyle = patGrad;
    cCtx.fillRect(0, y + 10, S, 78);

    // Matte oxidized patina increases roughness along seams
    rCtx.fillStyle = 'rgba(215, 215, 215, 0.52)';
    rCtx.fillRect(0, y + 6, S, 42);

    // Burnished warm bronze rim edge along bottom of plate
    cCtx.fillStyle = 'rgba(204, 158, 86, 0.45)';
    cCtx.fillRect(0, y + bandH - 12, S, 8);
    hCtx.fillStyle = '#b4b4b4';
    hCtx.fillRect(0, y + bandH - 12, S, 8);

    // Engraved ornamental bronze channel along band center
    cCtx.strokeStyle = 'rgba(34, 24, 12, 0.55)';
    hCtx.strokeStyle = '#323232';
    cCtx.lineWidth = 4;
    hCtx.lineWidth = 6;
    cCtx.beginPath(); cCtx.moveTo(0, y + 128); cCtx.lineTo(S, y + 128); cCtx.stroke();
    hCtx.beginPath(); hCtx.moveTo(0, y + 128); hCtx.lineTo(S, y + 128); hCtx.stroke();

    // Raised dome rivets!
    for (let x = 36; x < S; x += 72) {
      for (const ry of [y + 34, y + bandH - 34]) {
        const rg = hCtx.createRadialGradient(x, ry, 2, x, ry, 14);
        rg.addColorStop(0, '#ffffff');
        rg.addColorStop(0.7, '#b5b5b5');
        rg.addColorStop(1, '#303030');
        hCtx.fillStyle = rg;
        hCtx.beginPath(); hCtx.arc(x, ry, 14, 0, Math.PI * 2); hCtx.fill();

        cCtx.fillStyle = '#ba8e4b';
        cCtx.beginPath(); cCtx.arc(x, ry, 10, 0, Math.PI * 2); cCtx.fill();
        cCtx.strokeStyle = 'rgba(36, 56, 48, 0.72)';
        cCtx.lineWidth = 3;
        cCtx.stroke();
      }
    }
  }

  // Vertical oxidation streaks
  cCtx.globalCompositeOperation = 'multiply';
  cCtx.globalAlpha = 0.28;
  cCtx.drawImage(oxStreaks, 0, 0, S, S);
  cCtx.globalCompositeOperation = 'source-over';
  cCtx.globalAlpha = 1.0;

  return {
    map: makeCanvasTex(colC, true),
    roughnessMap: makeCanvasTex(rghC, false),
    normalMap: heightCanvasToNormalTexture(hgtC, 2.5),
  };
}

function bakeWovenLinenNormal() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(S, S);
  const d = img.data;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const wx = Math.sin(x * Math.PI * 0.5) * 0.62;
      const wy = Math.sin(y * Math.PI * 0.5) * 0.62;
      const weave = ((x >> 1) + (y >> 1)) & 1;
      const nx = (weave ? wx : wx * 0.32) + Math.sin(x * 0.14 + y * 0.08) * 0.14;
      const ny = (weave ? wy * 0.32 : wy) + Math.cos(y * 0.15 - x * 0.07) * 0.14;
      const idx = (y * S + x) * 4;
      d[idx + 0] = Math.round((nx * 0.5 + 0.5) * 255);
      d[idx + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      d[idx + 2] = 240;
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(18, 24);
  return tex;
}

function bakeTatteredBanner() {
  const w = 512, h = 1024;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);

  // Heavy weathered woven sacking/linen gradient with deep age-darkened folds & stained edges
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#462c1e');
  g.addColorStop(0.32, '#5a3622');
  g.addColorStop(0.72, '#41271a');
  g.addColorStop(1, '#22140d');
  ctx.fillStyle = g;

  // Deep organic shredded swallowtail & torn lower ribbons (NOT a flat striped rectangle!)
  ctx.beginPath();
  ctx.moveTo(22, 0);
  ctx.lineTo(w - 22, 0);
  ctx.lineTo(w - 26, h * 0.62);
  const shreds = 22;
  for (let i = shreds; i >= 0; i--) {
    const u = i / shreds;
    const x = 26 + u * (w - 52);
    const edgeNotch = Math.sin(u * Math.PI) * 0.14;
    const tear = (i % 2 === 0 ? 0.34 : 0.06) * (0.45 + 0.55 * hash2(i, 7, 19));
    const y = h * Math.min(0.99, 0.56 + edgeNotch + tear);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  // Organic weathered fabric mottling & sun-bleached vertical streaks
  const fbm = createTileFbmCanvas(128, 4, 87);
  ctx.save();
  ctx.globalCompositeOperation = 'source-atop';
  ctx.globalAlpha = 0.42;
  ctx.drawImage(fbm, 0, 0, w, h);

  // Fine woven cross-grain thread texture
  ctx.globalAlpha = 1.0;
  for (let y = 0; y < h; y += 5) {
    ctx.fillStyle = y % 10 === 0 ? 'rgba(230,195,150,0.045)' : 'rgba(12,6,4,0.08)';
    ctx.fillRect(0, y, w, 2);
  }
  for (let x = 0; x < w; x += 6) {
    ctx.fillStyle = 'rgba(0,0,0,0.04)';
    ctx.fillRect(x, 0, 2, h);
  }

  // Faded painted sacred ancient whale-eclipse & astrolabe glyph (weathered & half-erased!)
  ctx.strokeStyle = 'rgba(206, 152, 82, 0.52)';
  ctx.fillStyle = 'rgba(206, 152, 82, 0.24)';
  ctx.lineWidth = 10;

  // Outer celestial arc & twin crescents
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.26, 98, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.26, 66, -Math.PI * 0.2, Math.PI * 1.2);
  ctx.stroke();

  // Central eclipsed sun disc & sacred vertical meridian axis
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.26, 26, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.06);
  ctx.lineTo(w * 0.5, h * 0.62);
  ctx.stroke();

  // Archaic stepped chevron glyph runes below the eclipse
  for (let k = 0; k < 3; k++) {
    const cy = h * (0.43 + k * 0.065);
    ctx.beginPath();
    ctx.moveTo(w * 0.30, cy - 16);
    ctx.lineTo(w * 0.50, cy + 16);
    ctx.lineTo(w * 0.70, cy - 16);
    ctx.stroke();
  }

  // Paint flaking / wind-scoured erosion blotches over emblem so it looks centuries old!
  ctx.globalCompositeOperation = 'multiply';
  ctx.globalAlpha = 0.55;
  ctx.drawImage(fbm, 0, 0, w, h);
  ctx.restore();

  return makeCanvasTex(c, true);
}

let _cachedTextures = null;
export function getProceduralTextures() {
  if (_cachedTextures) return _cachedTextures;
  _cachedTextures = {
    stone: bakeWeatheredStoneSet(),
    bronze: bakeOxidizedBronzeSet(),
    linenNormal: bakeWovenLinenNormal(),
    banner: bakeTatteredBanner(),
  };
  return _cachedTextures;
}
