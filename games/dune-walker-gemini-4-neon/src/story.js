import * as THREE from 'three';

/**
 * ============================================================================
 * DUNE WALKER — CINEMATOGRAPHY & ART DIRECTION LOOKBOOK (2.39:1 ANAMORPHIC)
 * ============================================================================
 *
 * Global Visual Rules:
 *  - Every frame obeys a strict 3-layer value separation:
 *      [1] DARK FOREGROUND  : shadowed dune slope, crest edge, or silhouetted leg/shoulder
 *      [2] MIDGROUND SUBJECT: clear focal point with >= 4:1 key-to-fill contrast & clean silhouette
 *      [3] BRIGHT BACKGROUND: sunlit desert basin & luminous aerial perspective haze
 *  - Zero fog wash in the first 30 m; height fog hugs low troughs & megastructure bases.
 *  - Telephoto compression (85-135 mm) sells colossal scale on giant shots.
 *  - Full headroom for the walker; woman is never < 3% of frame height when she is the subject.
 *  - Horizontal 36 mm full-frame sensor cropped to 2.39:1 (sensor height = 15.06 mm).
 *
 * SHOT 1 (0 - 13 s) — EXTREME WIDE: LONE FIGURE & MONOLITHS
 *  - Lens      : 50 mm -> 58 mm (vFOV 17.1° -> 14.8°)
 *  - Framing   : Sweeping erg crest; colossal chamfered monoliths & half-buried ring rising into azure sky.
 *  - Placement : Woman on lower-right third (x ≈ 68%, y ≈ 28% from bottom, ~11% frame height),
 *                scarlet ribbon streaming horizontally across the right third.
 *  - Value Plan: Darkest = shadowed foreground dune edge cutting bottom-left + cool monolith shadow faces.
 *                Mid     = crimson woman & sunlit wind-rippled ridge crest (focal point).
 *                Brightest = golden sunlit basin & Mie horizon glow behind the ring.
 *
 * SHOT 2 (13 - 24 s) — MEDIUM OVER-THE-SHOULDER: HOODED PROFILE, SCARF & HORIZON
 *  - Lens      : 85 mm telephoto (vFOV 10.1°, shallow bokeh DOF, positioned UPWIND!)
 *  - Framing   : Medium OTS from ~7.4 m upwind so her hooded profile & cowl sit on left third (full headroom!),
 *                hands small & natural; scarlet scarf streams away across center-right toward the ring in haze.
 *  - Placement : Her hooded profile on left third (x ≈ 32%), scarlet ribbon slashing across center-right.
 *  - Value Plan: Darkest = shadowed cowl interior & deep rust shoulder in foreground.
 *                Mid     = warmly rim-lit hood edge, wrap-lit profile & glowing translucent scarlet scarf (focal point).
 *                Brightest = soft-bokeh golden sky & sunlit horizon behind the ring.
 *
 * SHOT 3 (24 - 33 s) — THE TREMOR: RAKING RIPPLES & STREAMING SAND RIVULETS
 *  - Lens      : 50 mm (vFOV 17.1°), low sweeping elevation ~2.1 m above foreground dune slope.
 *  - Framing   : Sharp wind-rippled dune crest & animated dark-amber rivulets running diagonally across frame.
 *  - Placement : Rivulet-streaked slope occupies left & center thirds; woman stands braced on right third (~14% H).
 *  - Value Plan: Darkest = cool deep shadow lee-face on bottom-left & crisp ripple troughs.
 *                Mid     = warm raking sunlit windward slope & woman's crimson silhouette (focal point).
 *                Brightest = glowing sunlit crest razor-line & amber haze beyond.
 *
 * SHOT 4 (33 - 45 s) — EMERGENCE: TELEPHOTO GIANT-SCALE COMPRESSION
 *  - Lens      : 105 mm -> 85 mm telephoto (vFOV 8.2° -> 10.1°)
 *  - Framing   : Camera ~40 m behind her crest compresses the 108 m biomechanical walker (~420-480 m away)
 *                into a towering apparition beside a 2 km ribbed monolith, with full crown headroom.
 *  - Placement : Woman anchored on lower-right third (~13% H); walker rises on left-center third with full silhouette.
 *  - Value Plan: Darkest = foreground shadowed dune ridge & walker's dark basalt-bronze underside.
 *                Mid     = sunlit bronze carapace rims, pouring sand streams & crimson woman (dual focal axis).
 *                Brightest = blazing Mie golden halo between the monolith & walker's slender heron legs.
 *
 * SHOT 5 (45 - 57 s) [OPENING SHOT @ 48.4 s] — MONUMENTAL LOW PASSAGE
 *  - Lens      : 24 mm (vFOV 34.8°), positioned cleanly OUTSIDE the walker's leg stride (~21 m back-left).
 *  - Framing   : Full arched whale-skull carapace, drooping mask, live Verlet cloth banners,
 *                all 6 slender tapering legs & pouring sand streams with clean sky headroom above crown.
 *  - Placement : Woman on lower-right third (~13% H, full floor-length robe + vivid scarlet scarf);
 *                colossal walker sweeps across left-to-center thirds; blazing sun pierces beneath its vaulted hull.
 *  - Value Plan: Darkest = shadowed foreground dune edge + dark basalt underside & shadowed front leg.
 *                Mid     = woman in crimson & backlit bronze/stone carapace with sun glints (focal point).
 *                Brightest = low sun & volumetric shafts blazing through the half-buried ring beneath its vault.
 *
 * SHOT 6 (57 - 73 s) — THE KNEEL & TOUCH: BURNING SUNSET & COOL TEAL SHADOWS
 *  - Lens      : 35 mm (vFOV 24.3°), composed reverent medium-wide two-shot from ~38 m side-front.
 *  - Framing   : Complete drooping curved skull-mask with glowing almond eye & crown horns on left-center third,
 *                full sky margin above; woman on right-center third (~11% H) touching its bronze brow medallion.
 *  - Placement : Eye contact & touching hand sit squarely on the center-right vertical third line.
 *  - Value Plan: Darkest = cool teal-indigo shadowed foreground dune & shadowed neck flank on left edge.
 *                Mid     = glowing bronze cheek speculars, woman's rim-lit crimson silhouette & warm slit-eye (focal point).
 *                Brightest = fiery orange-crimson sunset horizon behind the distant spire arch.
 *
 * SHOT 7 (73 - 90 s) — GRAND TELEPHOTO SUNSET INTO BLUE HOUR
 *  - Lens      : 24 mm Sunset Crane -> 65 mm Blue Hour Telephoto (vFOV 34.8° -> 13.2°).
 *  - Framing   : Extreme grand scale as walker rises & walks away into deep cobalt twilight;
 *                rows of small warm cabin windows ignite as the lone embers against blue hour.
 *  - Placement : Woman remains readable on lower-right third (~4-8% H); walker strides left-center with full headroom.
 *  - Value Plan: Darkest = deep cobalt-indigo foreground dune silhouette & monolithic dark walker body.
 *                Mid     = twilight violet-slate dunes & distant opaque monoliths.
 *                Brightest = warm blazing amber cabin windows (primary eye magnet) & dying ember horizon glow.
 *
 * SHOT 8 (90 - 96 s -> 0 - 2.5 s) — ROLLING HABOOB DUST STORM SEAM
 *  - Lens      : 65 mm — turbulent sunlit golden-ochre dust wall sweeps across camera, hiding the loop seam.
 * ============================================================================
 */

export const STORY_DURATION = 96.0;

/**
 * Converts a cinema focal length (mm on 36mm full-frame horizontal sensor) to
 * vertical FOV in degrees for a 2.39:1 anamorphic frame (sensor height = 15.06mm).
 */
export function focalMmToVfov(focalMm) {
  const sensorHeightMm = 36.0 / 2.39;
  return THREE.MathUtils.radToDeg(2.0 * Math.atan(sensorHeightMm / (2.0 * focalMm)));
}

export const SHOTS = [
  { id: 1, name: 'Extreme Wide — Lone Figure', start: 0.0,  end: 13.0 },
  { id: 2, name: 'Medium OTS — Hood & Scarf',  start: 13.0, end: 24.0 },
  { id: 3, name: 'The Tremor — Sand Rivulets', start: 24.0, end: 33.0 },
  { id: 4, name: 'Emergence — 135mm Scale',    start: 33.0, end: 45.0 },
  { id: 5, name: 'Monumental Passage',         start: 45.0, end: 57.0 },
  { id: 6, name: 'The Kneel & Touch',          start: 57.0, end: 73.0 },
  { id: 7, name: 'Sunset Into Blue Hour',      start: 73.0, end: 90.0 },
  { id: 8, name: 'Haboob Dust Storm',          start: 90.0, end: 96.0 },
];

// Opens directly on Shot 5 — the strongest full-scale overhead passage frame!
export const OPENING_TIME = 48.4;

export function getShotAt(t) {
  const tm = ((t % STORY_DURATION) + STORY_DURATION) % STORY_DURATION;
  for (let i = 0; i < SHOTS.length; i++) {
    if (tm >= SHOTS[i].start && tm < SHOTS[i].end) {
      const s = SHOTS[i];
      return {
        index: i,
        shot: s,
        localT: tm - s.start,
        progress: (tm - s.start) / (s.end - s.start),
      };
    }
  }
  return { index: 0, shot: SHOTS[0], localT: 0, progress: 0 };
}

export function getNextShotStartTime(t) {
  const { index } = getShotAt(t);
  const nextIdx = index >= 6 ? 0 : index + 1;
  return SHOTS[nextIdx].start + (nextIdx === 0 ? 3.2 : 0.8);
}

// High-contrast AgX-calibrated cinema Time-of-Day presets (daytime sun strictly 25-35° so lee faces stay shadowed!)
const TOD_KEYS = [
  {
    t: 0.0, // Crisp desert day: sun 27.5° (25-35° sweet spot -> sharp lee shadows, clear blue sky & crisp ripples!)
    sunElev: 27.5,
    sunAzim: -38.0,
    sunColor: new THREE.Color(0xffe0ad),
    sunIntensity: 5.2,
    skyZenith: new THREE.Color(0x0f3c7c),
    skyMid: new THREE.Color(0x3a7ec2),
    skyHorizon: new THREE.Color(0xc4b898), // luminous pale sand-cyan horizon (blends to azure without muddy grey!)
    cloudLit: new THREE.Color(0xffe8c4),
    cloudShadow: new THREE.Color(0x2c425e),
    hazeBase: new THREE.Color(0x9a9486), // cooler, desaturated Rayleigh-tinted distant haze!
    hazeSun: new THREE.Color(0xffd288),
    hazeDensity: 0.00050,
    heightFogColor: new THREE.Color(0xbe9568),
    heightFogDensity: 0.0017,
    shadowCool: new THREE.Color(0x182b46),
    hemiSky: new THREE.Color(0x4a7bb0),
    hemiGround: new THREE.Color(0x644020),
    hemiIntensity: 0.32,
    targetExposure: 1.04,
    windowGlow: 0.30,
    starAlpha: 0.0,
    gradeLift: new THREE.Color(0.005, 0.012, 0.022),
    gradeGamma: new THREE.Color(1.00, 0.99, 0.98),
    gradeGain: new THREE.Color(1.05, 1.01, 0.96),
  },
  {
    t: 26.0, // Mid-late afternoon raking light (25.2° -> tactile daytime ripples, scallops & rivulets!)
    sunElev: 25.2,
    sunAzim: -32.0,
    sunColor: new THREE.Color(0xffcf82),
    sunIntensity: 5.2,
    skyZenith: new THREE.Color(0x103162),
    skyMid: new THREE.Color(0x44628c),
    skyHorizon: new THREE.Color(0xde9a56),
    cloudLit: new THREE.Color(0xffd48e),
    cloudShadow: new THREE.Color(0x28344e),
    hazeBase: new THREE.Color(0xa67e5a),
    hazeSun: new THREE.Color(0xffc06c),
    hazeDensity: 0.00058,
    heightFogColor: new THREE.Color(0xc28a56),
    heightFogDensity: 0.0020,
    shadowCool: new THREE.Color(0x16243a),
    hemiSky: new THREE.Color(0x426696),
    hemiGround: new THREE.Color(0x5c361a),
    hemiIntensity: 0.32,
    targetExposure: 1.06,
    windowGlow: 0.55,
    starAlpha: 0.0,
    gradeLift: new THREE.Color(0.005, 0.014, 0.024),
    gradeGamma: new THREE.Color(1.01, 0.99, 0.97),
    gradeGain: new THREE.Color(1.06, 1.00, 0.93),
  },
  {
    t: 46.0, // Dramatic low golden-amber backlight (Shot 4 emergence -> Shot 5 passage!)
    sunElev: 8.8,
    sunAzim: -20.0,
    sunColor: new THREE.Color(0xffaa52),
    sunIntensity: 5.2,
    skyZenith: new THREE.Color(0x112548),
    skyMid: new THREE.Color(0x63485a),
    skyHorizon: new THREE.Color(0xeb883e),
    cloudLit: new THREE.Color(0xffb860),
    cloudShadow: new THREE.Color(0x262942),
    hazeBase: new THREE.Color(0xa6704c),
    hazeSun: new THREE.Color(0xffb25a),
    hazeDensity: 0.00086,
    heightFogColor: new THREE.Color(0xc27a48),
    heightFogDensity: 0.0030,
    shadowCool: new THREE.Color(0x162438), // 10-14% luminous shadow floor!
    hemiSky: new THREE.Color(0x3a567c),
    hemiGround: new THREE.Color(0x5c341a),
    hemiIntensity: 0.34,
    targetExposure: 1.10,
    windowGlow: 1.30,
    starAlpha: 0.0,
    gradeLift: new THREE.Color(0.005, 0.016, 0.026),
    gradeGamma: new THREE.Color(1.01, 0.99, 0.97),
    gradeGain: new THREE.Color(1.08, 0.99, 0.91),
  },
  {
    t: 66.0, // Luminous golden-crimson sunset with cool TEAL-VIOLET shadows (AgX preserves warm amber highlights!)
    sunElev: 3.4,
    sunAzim: -15.0,
    sunColor: new THREE.Color(0xff8438), // Rich golden-amber (AgX won't crush to flat neon red!)
    sunIntensity: 4.8,
    skyZenith: new THREE.Color(0x0d1b38),
    skyMid: new THREE.Color(0x6e3a4a),
    skyHorizon: new THREE.Color(0xf27430),
    cloudLit: new THREE.Color(0xff9244),
    cloudShadow: new THREE.Color(0x1e2842),
    hazeBase: new THREE.Color(0x884c3e),
    hazeSun: new THREE.Color(0xff8c42),
    hazeDensity: 0.00088,
    heightFogColor: new THREE.Color(0xa25638),
    heightFogDensity: 0.0028,
    shadowCool: new THREE.Color(0x132b3e), // Sculpted teal-violet shadow side (never pure black!)
    hemiSky: new THREE.Color(0x2c5270),
    hemiGround: new THREE.Color(0x582c16),
    hemiIntensity: 0.42,
    targetExposure: 1.24, // Per-shot lift for backlit kneel so whale-skull form reads clearly!
    windowGlow: 2.9,
    starAlpha: 0.16,
    gradeLift: new THREE.Color(0.006, 0.022, 0.032),
    gradeGamma: new THREE.Color(1.02, 1.00, 0.97),
    gradeGain: new THREE.Color(1.10, 0.98, 0.90),
  },
  {
    t: 84.0, // Deep Blue Hour — cool cobalt-violet desert (shadow floor ~10-15%!), warm amber windows blazing!
    sunElev: -2.4,
    sunAzim: -11.0,
    sunColor: new THREE.Color(0xe06a38),
    sunIntensity: 1.15,
    skyZenith: new THREE.Color(0x081024),
    skyMid: new THREE.Color(0x182e54),
    skyHorizon: new THREE.Color(0x5c3844),
    cloudLit: new THREE.Color(0x94483a),
    cloudShadow: new THREE.Color(0x101a32),
    hazeBase: new THREE.Color(0x203252),
    hazeSun: new THREE.Color(0x804a44),
    hazeDensity: 0.00082,
    heightFogColor: new THREE.Color(0x1b2b46),
    heightFogDensity: 0.0024,
    shadowCool: new THREE.Color(0x111d34),
    hemiSky: new THREE.Color(0x2c4e82),
    hemiGround: new THREE.Color(0x1a263c),
    hemiIntensity: 0.62,
    targetExposure: 1.38,
    windowGlow: 6.4,
    starAlpha: 0.95,
    gradeLift: new THREE.Color(0.010, 0.018, 0.036),
    gradeGamma: new THREE.Color(0.98, 1.00, 1.05),
    gradeGain: new THREE.Color(0.98, 1.00, 1.08),
  },
];

function smoothstep(a, b, x) {
  const u = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return u * u * (3 - 2 * u);
}

function makeTodStruct() {
  return {
    sunDir: new THREE.Vector3(),
    sunElev: 10,
    sunAzim: -20,
    sunColor: new THREE.Color(),
    sunIntensity: 4.8,
    skyZenith: new THREE.Color(),
    skyMid: new THREE.Color(),
    skyHorizon: new THREE.Color(),
    cloudLit: new THREE.Color(),
    cloudShadow: new THREE.Color(),
    hazeBase: new THREE.Color(),
    hazeSun: new THREE.Color(),
    hazeDensity: 0.00085,
    heightFogColor: new THREE.Color(),
    heightFogDensity: 0.0028,
    shadowCool: new THREE.Color(),
    hemiSky: new THREE.Color(),
    hemiGround: new THREE.Color(),
    hemiIntensity: 0.26,
    targetExposure: 1.08,
    windowGlow: 1.0,
    starAlpha: 0.0,
    gradeLift: new THREE.Color(),
    gradeGamma: new THREE.Color(1, 1, 1),
    gradeGain: new THREE.Color(1, 1, 1),
    tremor: 0.0,
    kneelBlend: 0.0,
    touchBlend: 0.0,
    blueHourBlend: 0.0,
    stormVeil: 0.0,
  };
}

function sampleRawTod(storyTime, out) {
  const t = ((storyTime % STORY_DURATION) + STORY_DURATION) % STORY_DURATION;

  let sampleT = t;
  if (t >= 90.0) {
    const u = smoothstep(92.4, 95.2, t);
    sampleT = THREE.MathUtils.lerp(84.0, 0.0, u);
  } else if (t > 84.0) {
    sampleT = 84.0;
  }

  let idx = 0;
  while (idx < TOD_KEYS.length - 2 && sampleT > TOD_KEYS[idx + 1].t) idx++;
  const k0 = TOD_KEYS[idx];
  const k1 = TOD_KEYS[idx + 1];
  const u = THREE.MathUtils.clamp((sampleT - k0.t) / Math.max(0.001, k1.t - k0.t), 0, 1);
  const s = u * u * (3 - 2 * u);

  out.sunElev = THREE.MathUtils.lerp(k0.sunElev, k1.sunElev, s);
  out.sunAzim = THREE.MathUtils.lerp(k0.sunAzim, k1.sunAzim, s);
  const eR = THREE.MathUtils.degToRad(out.sunElev);
  const aR = THREE.MathUtils.degToRad(out.sunAzim);
  out.sunDir.set(Math.sin(aR) * Math.cos(eR), Math.sin(eR), -Math.cos(aR) * Math.cos(eR)).normalize();

  out.sunColor.copy(k0.sunColor).lerp(k1.sunColor, s);
  out.sunIntensity = THREE.MathUtils.lerp(k0.sunIntensity, k1.sunIntensity, s);
  out.skyZenith.copy(k0.skyZenith).lerp(k1.skyZenith, s);
  out.skyMid.copy(k0.skyMid).lerp(k1.skyMid, s);
  out.skyHorizon.copy(k0.skyHorizon).lerp(k1.skyHorizon, s);
  out.cloudLit.copy(k0.cloudLit).lerp(k1.cloudLit, s);
  out.cloudShadow.copy(k0.cloudShadow).lerp(k1.cloudShadow, s);
  out.hazeBase.copy(k0.hazeBase).lerp(k1.hazeBase, s);
  out.hazeSun.copy(k0.hazeSun).lerp(k1.hazeSun, s);
  out.hazeDensity = THREE.MathUtils.lerp(k0.hazeDensity, k1.hazeDensity, s);
  out.heightFogColor.copy(k0.heightFogColor).lerp(k1.heightFogColor, s);
  out.heightFogDensity = THREE.MathUtils.lerp(k0.heightFogDensity, k1.heightFogDensity, s);
  out.shadowCool.copy(k0.shadowCool).lerp(k1.shadowCool, s);
  out.hemiSky.copy(k0.hemiSky).lerp(k1.hemiSky, s);
  out.hemiGround.copy(k0.hemiGround).lerp(k1.hemiGround, s);
  out.hemiIntensity = THREE.MathUtils.lerp(k0.hemiIntensity, k1.hemiIntensity, s);
  out.targetExposure = THREE.MathUtils.lerp(k0.targetExposure, k1.targetExposure, s);
  out.windowGlow = THREE.MathUtils.lerp(k0.windowGlow, k1.windowGlow, s);
  out.starAlpha = THREE.MathUtils.lerp(k0.starAlpha, k1.starAlpha, s);
  out.gradeLift.copy(k0.gradeLift).lerp(k1.gradeLift, s);
  out.gradeGamma.copy(k0.gradeGamma).lerp(k1.gradeGamma, s);
  out.gradeGain.copy(k0.gradeGain).lerp(k1.gradeGain, s);
}

export function createStoryLightingController(initialTime = OPENING_TIME) {
  const current = makeTodStruct();
  const target = makeTodStruct();
  const blendFrom = makeTodStruct();

  sampleRawTod(initialTime, current);
  sampleRawTod(initialTime, target);
  let blendElapsed = 99;
  const BLEND_DURATION = 3.0;

  function copyTod(dst, src) {
    dst.sunDir.copy(src.sunDir);
    dst.sunElev = src.sunElev;
    dst.sunAzim = src.sunAzim;
    dst.sunColor.copy(src.sunColor);
    dst.sunIntensity = src.sunIntensity;
    dst.skyZenith.copy(src.skyZenith);
    dst.skyMid.copy(src.skyMid);
    dst.skyHorizon.copy(src.skyHorizon);
    dst.cloudLit.copy(src.cloudLit);
    dst.cloudShadow.copy(src.cloudShadow);
    dst.hazeBase.copy(src.hazeBase);
    dst.hazeSun.copy(src.hazeSun);
    dst.hazeDensity = src.hazeDensity;
    dst.heightFogColor.copy(src.heightFogColor);
    dst.heightFogDensity = src.heightFogDensity;
    dst.shadowCool.copy(src.shadowCool);
    dst.hemiSky.copy(src.hemiSky);
    dst.hemiGround.copy(src.hemiGround);
    dst.hemiIntensity = src.hemiIntensity;
    dst.targetExposure = src.targetExposure;
    dst.windowGlow = src.windowGlow;
    dst.starAlpha = src.starAlpha;
    dst.gradeLift.copy(src.gradeLift);
    dst.gradeGamma.copy(src.gradeGamma);
    dst.gradeGain.copy(src.gradeGain);
  }

  function lerpTod(out, a, b, s) {
    out.sunElev = THREE.MathUtils.lerp(a.sunElev, b.sunElev, s);
    out.sunAzim = THREE.MathUtils.lerp(a.sunAzim, b.sunAzim, s);
    const eR = THREE.MathUtils.degToRad(out.sunElev);
    const aR = THREE.MathUtils.degToRad(out.sunAzim);
    out.sunDir.set(Math.sin(aR) * Math.cos(eR), Math.sin(eR), -Math.cos(aR) * Math.cos(eR)).normalize();
    out.sunColor.copy(a.sunColor).lerp(b.sunColor, s);
    out.sunIntensity = THREE.MathUtils.lerp(a.sunIntensity, b.sunIntensity, s);
    out.skyZenith.copy(a.skyZenith).lerp(b.skyZenith, s);
    out.skyMid.copy(a.skyMid).lerp(b.skyMid, s);
    out.skyHorizon.copy(a.skyHorizon).lerp(b.skyHorizon, s);
    out.cloudLit.copy(a.cloudLit).lerp(b.cloudLit, s);
    out.cloudShadow.copy(a.cloudShadow).lerp(b.cloudShadow, s);
    out.hazeBase.copy(a.hazeBase).lerp(b.hazeBase, s);
    out.hazeSun.copy(a.hazeSun).lerp(b.hazeSun, s);
    out.hazeDensity = THREE.MathUtils.lerp(a.hazeDensity, b.hazeDensity, s);
    out.heightFogColor.copy(a.heightFogColor).lerp(b.heightFogColor, s);
    out.heightFogDensity = THREE.MathUtils.lerp(a.heightFogDensity, b.heightFogDensity, s);
    out.shadowCool.copy(a.shadowCool).lerp(b.shadowCool, s);
    out.hemiSky.copy(a.hemiSky).lerp(b.hemiSky, s);
    out.hemiGround.copy(a.hemiGround).lerp(b.hemiGround, s);
    out.hemiIntensity = THREE.MathUtils.lerp(a.hemiIntensity, b.hemiIntensity, s);
    out.targetExposure = THREE.MathUtils.lerp(a.targetExposure, b.targetExposure, s);
    out.windowGlow = THREE.MathUtils.lerp(a.windowGlow, b.windowGlow, s);
    out.starAlpha = THREE.MathUtils.lerp(a.starAlpha, b.starAlpha, s);
    out.gradeLift.copy(a.gradeLift).lerp(b.gradeLift, s);
    out.gradeGamma.copy(a.gradeGamma).lerp(b.gradeGamma, s);
    out.gradeGain.copy(a.gradeGain).lerp(b.gradeGain, s);
  }

  function beginSmoothTransition() {
    copyTod(blendFrom, current);
    blendElapsed = 0.0;
  }

  function snapInstant(storyTime) {
    sampleRawTod(storyTime, current);
    blendElapsed = 99;
    applyEventCurves(storyTime, current);
    return current;
  }

  function applyEventCurves(storyTime, out) {
    const t = ((storyTime % STORY_DURATION) + STORY_DURATION) % STORY_DURATION;
    out.tremor = smoothstep(24.0, 26.2, t) * (1.0 - smoothstep(32.5, 35.5, t));
    // Smoothly rises during Shot 7a (73.4..77.2) BEFORE departure turn & stride (77.4..92.5)!
    out.kneelBlend = smoothstep(57.2, 61.2, t) * (1.0 - smoothstep(73.4, 77.2, t));
    out.touchBlend = smoothstep(61.0, 64.2, t) * (1.0 - smoothstep(72.0, 74.5, t));
    out.blueHourBlend = smoothstep(77.5, 84.5, t) * (1.0 - smoothstep(92.0, 95.5, t));

    let storm = 0;
    if (t >= 89.2) {
      storm = smoothstep(89.2, 93.0, t);
    } else if (t <= 3.0) {
      storm = 1.0 - smoothstep(0.0, 3.0, t);
    }
    out.stormVeil = storm;
  }

  function update(dt, storyTime) {
    sampleRawTod(storyTime, target);
    if (blendElapsed < BLEND_DURATION) {
      blendElapsed = Math.min(BLEND_DURATION, blendElapsed + dt);
      const u = blendElapsed / BLEND_DURATION;
      const s = u * u * (3 - 2 * u);
      lerpTod(current, blendFrom, target, s);
    } else {
      copyTod(current, target);
    }
    applyEventCurves(storyTime, current);
    return current;
  }

  applyEventCurves(initialTime, current);

  return { update, beginSmoothTransition, snapInstant, current };
}
