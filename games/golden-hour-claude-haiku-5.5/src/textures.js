// textures.js - procedural textures for the golden-hour unfinished concrete rooftop.
// Everything is generated at startup from seeded, periodic noise: no image files, no
// canvas, no global state. Tile sets return { map, normalMap, roughnessMap }; sprites and
// decals return { map }. Normals come from a height field (central differences with
// wrap-around indexing), so every tile set is seamless and identical on every load.
import * as THREE from 'three';

const TAU = Math.PI * 2;
const N = 512; // tile-set size in pixels (the facade is 512 x 256)

// ---------- seeded random numbers and periodic noise ----------

// mulberry32: small seeded PRNG returning floats in [0, 1).
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const quintic = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const wrap = (v, m) => ((v % m) + m) % m;
const dim = (alb, i, k) => { alb[i * 3] *= k; alb[i * 3 + 1] *= k; alb[i * 3 + 2] *= k; };

// Adds amp * periodic value noise to out (W x H). The lattice holds cx x cy random values
// and its indices wrap, so the field repeats exactly every tile.
function addNoise(out, W, H, cx, cy, amp, rnd) {
  const lat = new Float32Array(cx * cy);
  for (let i = 0; i < lat.length; i++) lat[i] = rnd();
  const x0 = new Int32Array(W), x1 = new Int32Array(W), wx = new Float32Array(W);
  for (let x = 0; x < W; x++) {
    const f = (x * cx) / W, i = Math.floor(f);
    x0[x] = i % cx; x1[x] = (i + 1) % cx; wx[x] = quintic(f - i);
  }
  for (let y = 0; y < H; y++) {
    const f = (y * cy) / H, j = Math.floor(f), t = quintic(f - j);
    const r0 = (j % cy) * cx, r1 = ((j + 1) % cy) * cx, o = y * W;
    for (let x = 0; x < W; x++) {
      const a = lat[r0 + x0[x]], b = lat[r0 + x1[x]], c = lat[r1 + x0[x]], d = lat[r1 + x1[x]];
      const top = a + (b - a) * wx[x], bot = c + (d - c) * wx[x];
      out[o + x] += amp * (top + (bot - top) * t);
    }
  }
}

// Stretches a field to [0, 1] in place.
function stretch(a) {
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < a.length; i++) { if (a[i] < lo) lo = a[i]; if (a[i] > hi) hi = a[i]; }
  const s = 1 / (hi - lo || 1);
  for (let i = 0; i < a.length; i++) a[i] = (a[i] - lo) * s;
  return a;
}

// Fractal noise: each octave doubles the lattice frequency and multiplies the amplitude by gain.
function fbm(W, H, cx, cy, octaves, gain, rnd) {
  const out = new Float32Array(W * H);
  for (let o = 0, amp = 1; o < octaves; o++, amp *= gain) addNoise(out, W, H, cx << o, cy << o, amp, rnd);
  return stretch(out);
}

// Calls fn(index, t) for each pixel within radius r of (px, py), with t = distance / r.
// Coordinates wrap at the tile edges, so pebbles, pores and cracks stay seamless.
function stamp(W, H, px, py, r, fn) {
  for (let y = Math.floor(py - r); y <= Math.ceil(py + r); y++) {
    const dy = y + 0.5 - py, row = wrap(y, H) * W;
    for (let x = Math.floor(px - r); x <= Math.ceil(px + r); x++) {
      const dx = x + 0.5 - px, d2 = dx * dx + dy * dy;
      if (d2 < r * r) fn(row + wrap(x, W), Math.sqrt(d2) / r);
    }
  }
}

// Wandering 1 px polyline (cracks, scratches) painted with stamp().
function walk(W, H, x, y, ang, len, turn, rnd, fn) {
  for (let s = 0; s < len; s++) {
    ang += (rnd() - 0.5) * turn;
    x += Math.cos(ang);
    y += Math.sin(ang);
    stamp(W, H, x, y, 0.8, fn);
  }
}

// ---------- output helpers ----------

// Working buffers for one tile: height (any scale), sRGB albedo, roughness and its clamp range.
const field = (W, H, strength, rmin = 0, rmax = 1) => ({
  W, H, strength, rmin, rmax,
  h: new Float32Array(W * H),
  rough: new Float32Array(W * H),
  alb: new Float32Array(W * H * 3),
});

const byte = (v) => (v <= 0 ? 0 : v >= 1 ? 255 : (v * 255 + 0.5) | 0);
const enc = (c) => (c * 127.5 + 128) | 0; // normal component in [-1, 1] to a byte

// Wraps RGBA bytes in a DataTexture with the shared colour-space and filter rules.
function makeTex(data, W, H, srgb, repeat, aniso) {
  const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat, THREE.UnsignedByteType);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = true;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

// Turns a field into { map, normalMap, roughnessMap }. Normal = normalize(-dh/du * s, -dh/dv * s, 1)
// from central differences with wrap-around; roughness goes into R, G and B; alpha is 255.
function finish(f, aniso) {
  const { W, H, h, alb, rough, strength: s } = f;
  const map = new Uint8Array(W * H * 4), nrm = new Uint8Array(W * H * 4), rgh = new Uint8Array(W * H * 4);
  for (let y = 0; y < H; y++) {
    const up = wrap(y + 1, H) * W, dn = wrap(y - 1, H) * W, row = y * W;
    for (let x = 0; x < W; x++) {
      const i = row + x, o = i * 4;
      const dx = (h[row + wrap(x + 1, W)] - h[row + wrap(x - 1, W)]) * 0.5 * s;
      const dy = (h[up + x] - h[dn + x]) * 0.5 * s;
      const k = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      nrm[o] = enc(-dx * k); nrm[o + 1] = enc(-dy * k); nrm[o + 2] = enc(k); nrm[o + 3] = 255;
      map[o] = byte(alb[i * 3]); map[o + 1] = byte(alb[i * 3 + 1]); map[o + 2] = byte(alb[i * 3 + 2]); map[o + 3] = 255;
      const q = byte(Math.min(f.rmax, Math.max(f.rmin, rough[i])));
      rgh[o] = q; rgh[o + 1] = q; rgh[o + 2] = q; rgh[o + 3] = 255;
    }
  }
  return {
    map: makeTex(map, W, H, true, true, aniso),
    normalMap: makeTex(nrm, W, H, false, true, aniso),
    roughnessMap: makeTex(rgh, W, H, false, true, aniso),
  };
}

// ---------- concrete family: concrete, concreteDark, floor ----------

// Concrete: mottled albedo, aggregate chips, pores, hairline cracks and faint form-work seams.
// Options: lum/var (albedo level and spread), rmin/rmax (roughness range), stain (damp drips),
// dust (grey film settling in the low areas), plus pebble, pore and crack counts.
function concreteField(seed, o) {
  const rnd = mulberry32(seed), f = field(N, N, o.strength, o.rmin, o.rmax);
  const { h, alb, rough } = f;
  const lo = fbm(N, N, 4, 4, 3, 0.5, rnd);       // large mottling
  const mid = fbm(N, N, 16, 16, 3, 0.55, rnd);   // mid-scale relief
  const grit = fbm(N, N, 64, 64, 3, 0.5, rnd);   // micro bumps, 2 to 8 px
  const drip = fbm(N, N, 20, 2, 3, 0.5, rnd);    // vertical damp streaks
  for (let i = 0; i < N * N; i++) {
    const st = o.stain * smooth(0.55, 0.85, drip[i]);
    const dust = o.dust ? 0.35 * smooth(0.62, 0.3, 0.5 * (lo[i] + mid[i])) : 0;
    const L = (o.lum + o.var * (lo[i] - 0.5) * 2 + 0.03 * (grit[i] - 0.5) * 2) * (1 - 0.3 * st);
    const Ld = L + (0.5 - L) * dust;
    alb[i * 3] = Ld; alb[i * 3 + 1] = Ld * 0.964; alb[i * 3 + 2] = Ld * 0.893;
    h[i] = 0.4 * lo[i] + 0.35 * mid[i] + 0.25 * grit[i];
    rough[i] = o.rough + 0.12 * (mid[i] - 0.5) - 0.15 * st - 0.06 * dust;
  }
  // Aggregate: domed stone chips, mostly lighter, some darker.
  for (let k = 0; k < o.pebbles; k++) {
    const m = rnd() < 0.55 ? 1.12 + 0.12 * rnd() : 0.6 + 0.2 * rnd();
    stamp(N, N, rnd() * N, rnd() * N, 1.5 + 3 * rnd(), (i, t) => {
      h[i] += 0.45 * Math.sqrt(1 - t * t); dim(alb, i, m); rough[i] -= 0.04;
    });
  }
  // Pores: 1 to 2 px pits, darker and rougher.
  for (let k = 0; k < o.pores; k++) {
    stamp(N, N, rnd() * N, rnd() * N, 0.7 + 0.5 * rnd(), (i, t) => {
      h[i] -= 0.5 * (1 - t * t); dim(alb, i, 0.7); rough[i] += 0.08;
    });
  }
  // Hairline cracks.
  for (let k = 0; k < o.cracks; k++) {
    walk(N, N, rnd() * N, rnd() * N, rnd() * TAU, 180 + 160 * rnd(), 0.5, rnd, (i) => {
      h[i] -= 0.4; dim(alb, i, 0.55); rough[i] += 0.05;
    });
  }
  // Form-work: eight 64 px boards, each with its own tone and a faint seam line.
  for (let b = 0; b < 8; b++) {
    const k = 0.94 + 0.12 * rnd(), seam = b * 64 + 58 + ((rnd() * 4) | 0);
    for (let y = b * 64; y < b * 64 + 64; y++) {
      for (let x = 0; x < N; x++) {
        const i = y * N + x;
        dim(alb, i, k);
        if (y === seam) { h[i] -= 0.15; dim(alb, i, 0.85); }
      }
    }
  }
  return f;
}

// Saw-cut joints on the tile edges. The tile is 4 m, so the joints fall every 4 m when tiled.
// Each joint is a dark groove about 3 px wide with slightly raised lips.
function sawCuts(f) {
  const { W, h, alb, rough } = f;
  for (let y = 0; y < W; y++) {
    for (let x = 0; x < W; x++) {
      const d = Math.min(x, W - x, y, W - y), i = y * W + x; // distance to the nearest joint line
      if (d < 1.5) { h[i] -= 0.5; dim(alb, i, 0.45); rough[i] = 0.95; }
      else if (d < 5) h[i] += 0.08 * (1 - (d - 1.5) / 3.5);
    }
  }
  return f;
}

// ---------- wood, drywall, steel, rebar, plastic, asphalt, gravel, facade ----------

// Pallet timber: four boards with dark gaps, grain running along U, knots and weathering.
function woodField() {
  const rnd = mulberry32(0x7a11e7), f = field(N, N, 2, 0.8, 0.95);
  const { h, alb, rough } = f;
  const warp = fbm(N, N, 2, 3, 3, 0.5, rnd);     // wavy grain
  const streak = fbm(N, N, 6, 96, 3, 0.5, rnd);  // fine streaks, long along U
  const weather = fbm(N, N, 3, 3, 3, 0.55, rnd); // weathered stains
  const pitch = N / 4, tone = [0, 1, 2, 3].map(() => 0.88 + 0.24 * rnd());
  const BASE = [0.45, 0.32, 0.2];
  for (let y = 0; y < N; y++) {
    const board = Math.floor(y / pitch), p = y % pitch, gap = p < 6 || p > pitch - 6;
    for (let x = 0; x < N; x++) {
      const i = y * N + x;
      // Lines constant in V give grain along U; the warp wiggles them.
      const g = 0.5 + 0.5 * Math.sin(TAU * ((y / N) * 44 + 2.2 * warp[i]));
      const k = tone[board] * (0.8 + 0.2 * g) * (0.9 + 0.2 * streak[i]);
      const wg = 0.45 * smooth(0.55, 0.8, weather[i]); // grey weathering
      for (let c = 0; c < 3; c++) alb[i * 3 + c] = BASE[c] * k * (1 - wg) + 0.3 * wg;
      h[i] = 0.05 * g + 0.03 * (streak[i] - 0.5);
      rough[i] = 0.87 + 0.06 * (streak[i] - 0.5);
      if (gap) { h[i] -= 0.4; dim(alb, i, 0.35); }
    }
  }
  for (let k = 0; k < 5; k++) { // knots: dark rings, slightly raised
    stamp(N, N, rnd() * N, rnd() * N, 9 + 6 * rnd(), (i, t) => {
      h[i] += 0.12 * (1 - t * t); dim(alb, i, 0.6 + 0.3 * smooth(0.4, 1, t)); rough[i] = 0.8;
    });
  }
  return f;
}

// Paper-faced gypsum board: off-white paper, faint fibres, soft roughness, seams at the 1.2 m edges.
function drywallField() {
  const rnd = mulberry32(0xd27a11), f = field(N, N, 0.8, 0.87, 0.93);
  const { h, alb, rough } = f;
  const fine = fbm(N, N, 128, 128, 3, 0.5, rnd), fibre = fbm(N, N, 4, 64, 3, 0.5, rnd), blotch = fbm(N, N, 3, 3, 3, 0.5, rnd);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const i = y * N + x, seam = Math.min(x, N - x, y, N - y);
      const L = 0.86 + 0.012 * (fine[i] + blotch[i] - 1);
      alb[i * 3] = L; alb[i * 3 + 1] = L * 0.988; alb[i * 3 + 2] = L * 0.953;
      h[i] = 0.12 * fine[i] + 0.1 * fibre[i];
      rough[i] = 0.9 + 0.03 * (fibre[i] - 0.5) * 2;
      if (seam < 2) { h[i] -= 0.02; dim(alb, i, 0.96); } else if (seam < 6) h[i] += 0.01;
    }
  }
  return f;
}

// Brushed steel: row streaks along U, scratches and slight oxidation; roughness spans 0.25 to 0.55.
function steelField() {
  const rnd = mulberry32(0x57ee1), f = field(N, N, 2.5, 0.25, 0.55);
  const { h, alb, rough } = f, n = N * N;
  const brush = new Float32Array(n); // noise constant along x, so the streaks run along U
  addNoise(brush, N, N, 1, 256, 1, rnd);
  addNoise(brush, N, N, 2, 96, 0.6, rnd);
  addNoise(brush, N, N, 1, 512, 0.35, rnd);
  stretch(brush);
  const patch = fbm(N, N, 3, 3, 3, 0.5, rnd), oxid = fbm(N, N, 5, 5, 4, 0.55, rnd);
  const COOL = [0.976, 1, 1.049], RUST = [0.42, 0.31, 0.24];
  for (let i = 0; i < n; i++) {
    const L = 0.41 * (0.9 + 0.2 * brush[i]), ox = 0.45 * smooth(0.6, 0.75, oxid[i]);
    for (let c = 0; c < 3; c++) alb[i * 3 + c] = L * COOL[c] * (1 - ox) + RUST[c] * ox;
    h[i] = 0.25 * brush[i];
    rough[i] = 0.25 + 0.3 * clamp01(0.6 * patch[i] + 0.4 * brush[i]) + 0.05 * ox;
  }
  for (let k = 0; k < 320; k++) { // scratches, nearly parallel to the brushing
    const depth = 0.15 + 0.35 * rnd();
    walk(N, N, rnd() * N, rnd() * N, (rnd() - 0.5) * 0.4, 40 + 260 * rnd(), 0.04, rnd, (i) => {
      h[i] -= depth; dim(alb, i, 1.12);
    });
  }
  return f;
}

// Ribbed rebar: 18 transverse ribs per tile (rib lines run along U), rust with bare-metal patches.
function rebarField() {
  const rnd = mulberry32(0x7eba2), f = field(N, N, 3, 0.5, 0.8);
  const { h, alb, rough } = f;
  const grime = fbm(N, N, 6, 6, 3, 0.5, rnd), micro = fbm(N, N, 64, 64, 3, 0.5, rnd);
  const period = N / 18, RUST = [0.5, 0.3, 0.16], BARE = [0.28, 0.28, 0.29]; // bare metal reads darker than rust
  for (let y = 0; y < N; y++) {
    const p = (y % period) / period - 0.5, crest = Math.exp(-((p / 0.14) ** 2)); // rib profile along V
    for (let x = 0; x < N; x++) {
      const i = y * N + x, bump = 0.8 + 0.4 * micro[i];
      const bare = smooth(0.55, 0.75, 0.6 * grime[i] + 0.4 * crest * bump); // bare metal on crests and patches
      const k = 0.9 + 0.2 * micro[i];
      for (let c = 0; c < 3; c++) alb[i * 3 + c] = RUST[c] * k * (1 - bare) + BARE[c] * bare;
      h[i] = 0.9 * crest * bump + 0.08 * micro[i];
      rough[i] = 0.8 - 0.3 * bare + 0.03 * (micro[i] - 0.5);
    }
  }
  return f;
}

// Polyethylene sheeting: broad soft wrinkles, sharp creases and fine crinkles. Near-white with
// faint grey in the folds and low roughness. The height scale makes the wrinkles read at 2 m.
function plasticField() {
  const rnd = mulberry32(0x91a57), f = field(N, N, 1.2, 0.3, 0.45);
  const { h, alb, rough } = f;
  const soft = fbm(N, N, 2, 2, 3, 0.5, rnd), creases = fbm(N, N, 3, 3, 3, 0.5, rnd), crinkle = fbm(N, N, 16, 16, 3, 0.5, rnd);
  for (let i = 0; i < N * N; i++) {
    const fold = 1 - Math.abs(2 * creases[i] - 1), sharp = fold * fold; // soft ridges where the sheet folds
    h[i] = 14 * (0.5 * soft[i] + 0.5 * sharp) + 0.8 * crinkle[i];
    const shade = 1 - 0.04 * sharp;
    alb[i * 3] = 0.92 * shade; alb[i * 3 + 1] = 0.92 * shade; alb[i * 3 + 2] = 0.9 * shade;
    rough[i] = 0.32 + 0.1 * sharp;
  }
  return f;
}

// Distant asphalt: very high-frequency grit with scattered light chips.
function asphaltField() {
  const rnd = mulberry32(0xa5f417), f = field(N, N, 2, 0.88, 0.94);
  const { h, alb, rough } = f;
  const grit = fbm(N, N, 128, 128, 3, 0.6, rnd), big = fbm(N, N, 4, 4, 3, 0.5, rnd);
  for (let i = 0; i < N * N; i++) {
    const L = 0.12 * (0.85 + 0.3 * grit[i]) * (0.95 + 0.1 * big[i]);
    alb[i * 3] = L; alb[i * 3 + 1] = L; alb[i * 3 + 2] = L * 1.08;
    h[i] = grit[i];
    rough[i] = 0.9;
  }
  for (let k = 0; k < 1400; k++) { // light chips
    stamp(N, N, rnd() * N, rnd() * N, 0.8 + 1.4 * rnd(), (i, t) => {
      h[i] += 0.3 * Math.sqrt(1 - t * t); dim(alb, i, 1.8);
    });
  }
  return f;
}

// Roof gravel and dust: domed stones of varied tone with dust settled between them.
function gravelField() {
  const rnd = mulberry32(0x6a4e1), f = field(N, N, 3.5, 0.8, 0.92);
  const { h, alb, rough } = f;
  const grit = fbm(N, N, 64, 64, 3, 0.5, rnd), dust = fbm(N, N, 4, 4, 3, 0.5, rnd);
  for (let i = 0; i < N * N; i++) {
    const D = 0.42 * (0.9 + 0.2 * dust[i]);
    h[i] = 0.12 * grit[i];
    alb[i * 3] = D; alb[i * 3 + 1] = D * 0.952; alb[i * 3 + 2] = D * 0.881;
    rough[i] = 0.9;
  }
  for (let k = 0; k < 1600; k++) { // stones: the higher dome wins where they overlap
    const tone = 0.6 + 0.7 * rnd(), warm = 0.06 * (2 * rnd() - 1);
    const pc = [0.42 * tone * (1 + warm), 0.4 * tone, 0.37 * tone * (1 - warm)];
    stamp(N, N, rnd() * N, rnd() * N, 3 + 6 * rnd() * rnd(), (i, t) => {
      const dome = 0.9 * Math.sqrt(1 - t * t);
      if (dome > h[i]) {
        h[i] = dome; alb[i * 3] = pc[0]; alb[i * 3 + 1] = pc[1]; alb[i * 3 + 2] = pc[2]; rough[i] = 0.8;
      }
    });
  }
  return f;
}

// High-rise concrete facade, 6 m x 3 m (512 x 256, seamless): four window modules per tile,
// dark glass with a warm sky reflection near the sill, concrete between, and slab joints at rows 0, 56 and 205.
function facadeField() {
  const W = 512, H = 256, rnd = mulberry32(0xfacade), f = field(W, H, 2.5, 0.3, 0.9);
  const { h, alb, rough } = f;
  const conc = fbm(W, H, 32, 16, 4, 0.5, rnd), stain = fbm(W, H, 32, 2, 3, 0.5, rnd), refl = fbm(W, H, 1, 24, 3, 0.5, rnd);
  const sill = 56, head = 205, DARK = [0.1, 0.12, 0.14], WARM = [0.45, 0.3, 0.18], CONC = [0.62, 0.6, 0.57];
  for (let y = 0; y < H; y++) {
    const joint = Math.min(y, H - y, Math.abs(y - sill), Math.abs(y - head));
    const inBand = y > sill && y < head, edge = Math.min(y - sill, head - y);
    const warm = Math.pow(clamp01(1 - (y - sill) / (head - sill)), 3) * 0.9; // warm light near the sill
    const dirt = y < sill && y > sill - 40 ? 1 - (sill - y) / 40 : 0;        // staining below the sill
    for (let x = 0; x < W; x++) {
      const i = y * W + x, mx = Math.min(x % 128, 128 - (x % 128)); // distance to the nearest mullion
      const base = 0.3 + 0.25 * conc[i];
      if (inBand && edge >= 5 && mx >= 5) { // glass
        for (let c = 0; c < 3; c++) alb[i * 3 + c] = DARK[c] + (WARM[c] - DARK[c]) * warm + 0.02 * (refl[i] - 0.5);
        h[i] = base - 0.12;
        rough[i] = 0.3 + 0.04 * (refl[i] - 0.5);
      } else { // concrete; mullions and frames stand proud of the glass
        const k = (0.95 + 0.1 * conc[i]) * (1 - 0.15 * dirt * stain[i]);
        for (let c = 0; c < 3; c++) alb[i * 3 + c] = CONC[c] * k;
        h[i] = base + (inBand ? 0.1 : 0);
        rough[i] = 0.85 + 0.03 * (conc[i] - 0.5);
      }
      if (joint < 1.5) { h[i] -= 0.4; dim(alb, i, 0.6); rough[i] = 0.9; }
    }
  }
  return f;
}

// ---------- sprites and decals: RGBA, alpha is the shape, RGB left unpremultiplied ----------

// Fills a W x H RGBA buffer. fn(px, py, o, i) sets o = [r, g, b, a] in 0..1 for px, py in [-1, 1].
function fill(W, H, fn) {
  const d = new Uint8Array(W * H * 4), o = [0, 0, 0, 0];
  for (let i = 0; i < W * H; i++) {
    fn(((i % W) + 0.5) / W * 2 - 1, (Math.floor(i / W) + 0.5) / H * 2 - 1, o, i);
    d[i * 4] = byte(o[0]); d[i * 4 + 1] = byte(o[1]); d[i * 4 + 2] = byte(o[2]); d[i * 4 + 3] = byte(o[3]);
  }
  return d;
}

// Muzzle flash: a soft white-warm core and 7 irregular spikes; alpha falls to 0 at the edge.
function flameFn() {
  const rnd = mulberry32(0xf1a3e), K = 7;
  const spikes = Array.from({ length: K }, (_, k) => ({
    a: (k / K) * TAU + 0.5 * (rnd() - 0.5), len: 0.55 + 0.4 * rnd(), w: 0.06 + 0.05 * rnd(),
  }));
  return (px, py, o) => {
    const r = Math.hypot(px, py), ang = Math.atan2(py, px);
    let s = 0;
    for (const k of spikes) {
      if (r >= k.len) continue;
      const dA = Math.abs(Math.atan2(Math.sin(ang - k.a), Math.cos(ang - k.a)));
      const sig = k.w * (0.3 + 0.7 * (1 - r / k.len));
      s = Math.max(s, Math.exp(-0.5 * (dA / sig) ** 2) * (1 - r / k.len) ** 0.8);
    }
    const I = Math.min(1, Math.exp(-((r / 0.2) ** 2)) + 0.9 * s), t = smooth(0, 0.75, r);
    o[0] = 1; o[1] = 0.92 - 0.37 * t; o[2] = 0.78 - 0.62 * t; // (255,235,200) core to (255,140,40) outer
    o[3] = I * (1 - smooth(0.75, 1, r));
  };
}

// Soft white dot with a gaussian-like falloff to 0 at the edge.
function softFn(px, py, o) {
  const d2 = px * px + py * py, k = 4;
  o[0] = 1; o[1] = 1; o[2] = 1;
  o[3] = d2 < 1 ? (Math.exp(-k * d2) - Math.exp(-k)) / (1 - Math.exp(-k)) : 0;
}

// Contact shadow: black, alpha 0.75 at the centre, smooth to 0 at the edge.
function contactFn(px, py, o) {
  const d2 = px * px + py * py;
  o[0] = 0; o[1] = 0; o[2] = 0;
  o[3] = d2 < 1 ? 0.75 * (1 - d2) ** 2 : 0;
}

// Bullet impact: near-black centre, dusty grey rim fading out, and 7 radial chips.
function bulletFn() {
  const rnd = mulberry32(0xb0115e), chips = Array.from({ length: 7 }, () => rnd() * TAU), rc = 0.2;
  return (px, py, o) => {
    const r = Math.hypot(px, py), ang = Math.atan2(py, px);
    let chip = 0;
    for (const c of chips) chip = Math.max(chip, 1 - Math.abs(Math.atan2(Math.sin(ang - c), Math.cos(ang - c))) / 0.08);
    chip = clamp01(chip) * (1 - smooth(rc, 2.6 * rc, r));
    const edge = Math.max(0.85 * (1 - smooth(rc, 1, r)) ** 1.5, 0.9 * chip); // dusty rim and chips
    const core = 1 - smooth(rc * 0.85, rc * 1.05, r);                         // near-black centre
    const grey = 0.6 - 0.4 * chip, shade = grey + (0.07 - grey) * core;
    o[0] = shade; o[1] = shade * 0.97; o[2] = shade * 0.93;
    o[3] = edge + (1 - edge) * core;
  };
}

// Blood splat: an irregular blotch with edge droplets and short tendrils. Alpha is the shape;
// the colour runs from dark red to brighter red, with a soft gloss highlight.
function bloodFn() {
  const rnd = mulberry32(0xb100d);
  const harm = Array.from({ length: 5 }, (_, k) => ({ f: k + 2, a: 0.03 + 0.05 * rnd(), p: rnd() * TAU }));
  const drops = Array.from({ length: 48 }, () => {
    const a = rnd() * TAU, d = 0.5 * (1.04 + 0.6 * rnd() * rnd());
    return { x: Math.cos(a) * d, y: Math.sin(a) * d, rad: 0.012 + 0.05 * rnd() ** 3 };
  });
  const tendrils = Array.from({ length: 7 }, () => ({ a: rnd() * TAU, len: 0.15 + 0.3 * rnd() }));
  const tone = fbm(256, 256, 4, 4, 3, 0.5, rnd);
  return (px, py, o, i) => {
    const r = Math.hypot(px, py), ang = Math.atan2(py, px);
    let R = 0.5; // blotch radius with a wobbly outline
    for (const hm of harm) R += 0.5 * hm.a * Math.sin(hm.f * ang + hm.p);
    let a = 1 - smooth(R - 0.015, R + 0.015, r);
    for (const d of drops) a = Math.max(a, 1 - smooth(d.rad - 0.01, d.rad + 0.01, Math.hypot(px - d.x, py - d.y)));
    for (const t of tendrils) {
      const dA = Math.abs(Math.atan2(Math.sin(ang - t.a), Math.cos(ang - t.a)));
      if (r > R && r < R + t.len) {
        const w = 0.02 * (1 - (r - R) / t.len);
        a = Math.max(a, 1 - smooth(0.6 * w, w, dA * r));
      }
    }
    const s = 0.25 + 0.75 * tone[i], hl = 0.5 * Math.exp(-((px + 0.2) ** 2 + (py - 0.25) ** 2) / 0.01);
    o[0] = 0.36 + 0.3 * s + 0.2 * hl; o[1] = 0.02 + 0.05 * s + 0.05 * hl; o[2] = 0.03 + 0.05 * s + 0.05 * hl;
    o[3] = a;
  };
}

// Tracer glow strip, 8 x 64: the 64 axis is the length; hot centre column, alpha 1 mid-length.
function tracerFn(px, py, o) {
  const along = (1 - Math.abs(py)) ** 1.5, w = Math.exp(-3 * px * px);
  o[0] = 1; o[1] = 0.62 + 0.36 * w; o[2] = 0.25 + 0.7 * w;
  o[3] = along * (0.45 + 0.55 * w);
}

// ---------- public API ----------

// Generates every texture the game uses. The renderer is read only for its max anisotropy
// (capped at 8; 4 when no renderer is given). Tile sets repeat; decals and sprites clamp.
export function createTextures(renderer) {
  const aniso = Math.min(8, renderer?.capabilities?.getMaxAnisotropy?.() ?? 4);
  const set = (f) => finish(f, aniso);
  const decal = (W, H, fn) => ({ map: makeTex(fill(W, H, fn), W, H, true, false, aniso) });
  return {
    concrete: set(concreteField(0xc0c1e, {
      lum: 0.56, var: 0.08, rough: 0.86, rmin: 0.78, rmax: 0.95, strength: 3.5,
      pebbles: 900, pores: 2600, cracks: 4, stain: 0, dust: false,
    })),
    concreteDark: set(concreteField(0xd0a1e, {
      lum: 0.36, var: 0.06, rough: 0.8, rmin: 0.62, rmax: 0.92, strength: 3.0,
      pebbles: 500, pores: 2200, cracks: 3, stain: 1, dust: false,
    })),
    floor: set(sawCuts(concreteField(0xf1002, {
      lum: 0.5, var: 0.07, rough: 0.86, rmin: 0.78, rmax: 0.95, strength: 2.0,
      pebbles: 700, pores: 2000, cracks: 2, stain: 0.2, dust: true,
    }))),
    wood: set(woodField()),
    drywall: set(drywallField()),
    steel: set(steelField()),
    rebar: set(rebarField()),
    plastic: set(plasticField()),
    facade: set(facadeField()),
    asphalt: set(asphaltField()),
    gravel: set(gravelField()),
    flame: decal(128, 128, flameFn()),
    soft: decal(64, 64, softFn),
    bulletHole: decal(128, 128, bulletFn()),
    bloodSplat: decal(256, 256, bloodFn()),
    contactAO: decal(128, 128, contactFn),
    tracer: decal(8, 64, tracerFn),
  };
}
