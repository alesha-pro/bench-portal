// GLSL for the post pipeline. All passes are fullscreen triangles-as-quads using the same vertex shader.
// Pipeline order: volumetric light shafts -> composite -> bloom (dual filter) -> final grade and output.

export const VS_FULLSCREEN = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// Raymarched haze and dust lit by the sun shadow map. Writes (in-scatter RGB, transmittance A).
// Sky pixels keep transmittance 1 so the sky is never darkened, only brightened by in-scatter.
export const FS_VOLUMETRIC = /* glsl */ `
uniform sampler2D tDepth;
uniform sampler2D tSunDepth;
uniform sampler3D tNoise;
uniform mat4 uInvViewProj;
uniform mat4 uSunVP;
uniform vec3 uCamPos;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uAmbient;
uniform vec3 uWind;
uniform float uTime;
uniform float uDensity;
uniform float uDust;
uniform float uMaxDist;
uniform float uG;
varying vec2 vUv;

float hg(float cosT, float g) {
  float g2 = g * g;
  return (1.0 - g2) / (4.0 * 3.14159265 * pow(max(1.0 + g2 - 2.0 * g * cosT, 1e-3), 1.5));
}

float interleavedGradient(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}

// 1 = lit by the sun, 0 = in shadow. Single tap with a small slope-free bias (depth is orthographic and linear).
float sunVisibility(vec3 p) {
  vec4 lp = uSunVP * vec4(p, 1.0);
  vec3 sc = lp.xyz / lp.w * 0.5 + 0.5;
  if (sc.x < 0.0 || sc.x > 1.0 || sc.y < 0.0 || sc.y > 1.0) return 1.0;
  float d = texture(tSunDepth, sc.xy).r;
  return (sc.z - 0.0008 > d) ? 0.0 : 1.0;
}

void main() {
  float depth = texture(tDepth, vUv).r;
  bool isSky = depth >= 0.99999;
  vec4 ndc = vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
  vec4 wp = uInvViewProj * ndc;
  wp.xyz /= wp.w;
  vec3 toP = wp.xyz - uCamPos;
  float surfDist = length(toP);
  vec3 rd = toP / max(surfDist, 1e-4);
  float dist = isSky ? uMaxDist : min(surfDist, uMaxDist);

  float phase = hg(dot(rd, uSunDir), uG);
  float stepLen = dist / float(STEPS);
  float jitter = interleavedGradient(gl_FragCoord.xy);

  vec3 S = vec3(0.0);
  float T = 1.0;
  for (int i = 0; i < STEPS; i++) {
    float t = (float(i) + jitter) * stepLen;
    vec3 p = uCamPos + rd * t;
    float h = max(p.y, 0.0);
    float falloff = exp(-h * 0.2);
    // Two octaves of the 3D noise texture move with the wind to form drifting dust.
    vec3 q1 = vec3(p.x, p.y * 1.6, p.z) * 0.021 + uWind * uTime * 0.02;
    vec3 q2 = vec3(p.x, p.y * 2.2, p.z) * 0.07 - uWind * uTime * 0.05;
    float n = texture(tNoise, q1).r * 0.65 + texture(tNoise, q2).r * 0.35;
    float dustN = smoothstep(0.46, 0.78, n);
    float dens = uDensity * (0.6 + 0.4 * falloff) + uDust * dustN * falloff;
    float sh = sunVisibility(p);
    vec3 inscatter = (uSunCol * sh * phase + uAmbient) * dens;
    float tr = exp(-dens * stepLen);
    S += T * inscatter * (1.0 - tr) / max(dens, 1e-5);
    T *= tr;
  }
  if (isSky) T = 1.0;
  gl_FragColor = vec4(S, T);
}
`;

// Scene HDR * transmittance + in-scatter, then gun layer (premultiplied) on top.
export const FS_COMBINE = /* glsl */ `
uniform sampler2D tScene;
uniform sampler2D tVol;
uniform sampler2D tGun;
varying vec2 vUv;
void main() {
  vec3 c = texture(tScene, vUv).rgb;
  vec4 v = texture(tVol, vUv);
  c = c * v.a + v.rgb;
  vec4 g = texture(tGun, vUv);
  c = g.rgb + c * (1.0 - g.a);
  gl_FragColor = vec4(c, 1.0);
}
`;

// 13-tap downsample (Jimenez, "Next Generation Post Processing"). The first level applies a soft threshold.
export const FS_BLOOM_DOWN = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uThreshold;
uniform float uUseThreshold;
varying vec2 vUv;
vec3 tap(vec2 o) { return texture(tSrc, vUv + o * uTexel).rgb; }
void main() {
  vec3 c = tap(vec2(0.0)) * 0.125;
  c += (tap(vec2(-2.0, 2.0)) + tap(vec2(2.0, 2.0)) + tap(vec2(-2.0, -2.0)) + tap(vec2(2.0, -2.0))) * 0.03125;
  c += (tap(vec2(0.0, 2.0)) + tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0))) * 0.0625;
  c += (tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)) + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0))) * 0.125;
  if (uUseThreshold > 0.5) {
    float br = max(c.r, max(c.g, c.b));
    float knee = uThreshold * 0.5;
    float soft = clamp(br - uThreshold + knee, 0.0, 2.0 * knee);
    soft = soft * soft / (4.0 * knee + 1e-4);
    float contrib = max(soft, br - uThreshold) / max(br, 1e-4);
    c *= max(contrib, 0.0);
  }
  gl_FragColor = vec4(c, 1.0);
}
`;

// 3x3 tent upsample of the coarser level, added onto this level's downsample.
export const FS_BLOOM_UP = /* glsl */ `
uniform sampler2D tSrc;
uniform sampler2D tBase;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 o = uTexel;
  vec3 up = texture(tSrc, vUv + vec2(-1.0, 1.0) * o).rgb
          + texture(tSrc, vUv + vec2(0.0, 1.0) * o).rgb * 2.0
          + texture(tSrc, vUv + vec2(1.0, 1.0) * o).rgb
          + texture(tSrc, vUv + vec2(-1.0, 0.0) * o).rgb * 2.0
          + texture(tSrc, vUv).rgb * 4.0
          + texture(tSrc, vUv + vec2(1.0, 0.0) * o).rgb * 2.0
          + texture(tSrc, vUv + vec2(-1.0, -1.0) * o).rgb
          + texture(tSrc, vUv + vec2(0.0, -1.0) * o).rgb * 2.0
          + texture(tSrc, vUv + vec2(1.0, -1.0) * o).rgb;
  gl_FragColor = vec4(texture(tBase, vUv).rgb + up / 16.0, 1.0);
}
`;

// Lens ghosts, anamorphic streak, bloom, ACES filmic tone map, colour grade, damage and low-health looks,
// vignette, grain, radial blur for the slide-aim flourish, and sRGB encode.
export const FS_FINAL = /* glsl */ `
uniform sampler2D tComb;
uniform sampler2D tBloom;
uniform sampler2D tBright;
uniform sampler2D tDepth;
uniform vec2 uSunUV;
uniform float uSunVis;
uniform float uTime;
uniform float uDamage;
uniform float uLowHP;
uniform float uBlur;
uniform float uAspect;
uniform float uBloomAmt;
uniform float uExposure;
uniform float uAdrenaline;
uniform vec2 uRes;
varying vec2 vUv;

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 flare(vec2 uv) {
  vec2 p = uv - 0.5;
  // Mirrored samples of the bright pass produce ghosts that travel through the screen centre.
  vec3 acc = texture(tBright, 0.5 + p * -0.42).rgb * vec3(1.0, 0.62, 0.28) * 0.22;
  acc += texture(tBright, 0.5 + p * -0.78).rgb * vec3(0.45, 0.7, 1.0) * 0.13;
  acc += texture(tBright, 0.5 + p * -1.22).rgb * vec3(1.0, 0.85, 0.5) * 0.09;
  acc += texture(tBright, 0.5 + p * -1.7).rgb * vec3(0.6, 1.0, 0.75) * 0.06;
  // Horizontal anamorphic streak along the sun's row.
  float row = exp(-abs(uv.y - uSunUV.y) * 70.0);
  vec3 streak = vec3(0.0);
  for (int i = -8; i <= 8; i++) {
    float fi = float(i);
    streak += texture(tBright, vec2(uv.x + fi * 0.035, uSunUV.y)).rgb * (1.0 - abs(fi) / 9.0);
  }
  acc += streak * row * vec3(1.0, 0.72, 0.42) * 0.03;
  float occl = texture(tDepth, uSunUV).r < 0.99999 ? 0.3 : 1.0;
  return acc * uSunVis * occl;
}

void main() {
  vec2 uv = vUv;
  vec2 cen = uv - 0.5;
  float r = length(cen * vec2(uAspect, 1.0));
  vec3 col;
  if (uBlur > 0.001) {
    vec3 acc = vec3(0.0);
    for (int i = 0; i < 8; i++) {
      float f = float(i) / 8.0;
      acc += texture(tComb, uv - cen * uBlur * f * 0.22).rgb;
    }
    col = acc / 8.0;
  } else {
    vec2 ca = cen * (0.0015 + 0.0032 * r * r);
    col = vec3(texture(tComb, uv + ca).r, texture(tComb, uv).g, texture(tComb, uv - ca).b);
  }
  col += texture(tBloom, uv).rgb * uBloomAmt;
  col += flare(uv);
  col *= uExposure;
  col = aces(col);

  // Colour grade: teal shadows, warm highlights, mild S-curve and saturation lift.
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col * vec3(0.86, 0.97, 1.1), col * vec3(1.08, 1.0, 0.9), smoothstep(0.12, 0.85, lum));
  col = mix(vec3(lum), col, 1.12);
  col = col * col * (3.0 - 2.0 * col) * 0.3 + col * 0.7;
  col = mix(col, col * vec3(1.06, 0.98, 0.92), uAdrenaline * 0.5);

  float lumNow = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, vec3(lumNow), uLowHP * 0.6);

  float edge = smoothstep(0.2, 0.95, r * 1.2);
  col = mix(col, vec3(0.42, 0.02, 0.01) * (0.3 + lumNow), uDamage * edge * 0.85);

  float vig = smoothstep(0.98, 0.25, r);
  col *= mix(0.6, 1.0, vig);

  float g = hash12(uv * uRes + fract(uTime) * 91.7) - 0.5;
  col += g * 0.03;

  col = pow(max(col, 0.0), vec3(1.0 / 2.2));
  gl_FragColor = vec4(col, 1.0);
}
`;
