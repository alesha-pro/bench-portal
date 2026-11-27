// A deterministic granulating pigment. Low-frequency pools, capillary stipple and
// parallel dry skips are composited only inside the live silhouette.
import { layer, rand } from "./ink.js";
function pigment() {
  const cv = layer(512, 512),
    c = cv.getContext("2d"),
    r = rand(6285),
    image = c.createImageData(512, 512);
  const octaves = [8, 16, 32, 64].map((n) => [n, Float32Array.from({ length: n * n }, () => r())]);
  function noise(x, y, n, map) {
    let u = (x * n) / 512,
      v = (y * n) / 512,
      i = Math.floor(u),
      j = Math.floor(v);
    u -= i;
    v -= j;
    u = u * u * (3 - 2 * u);
    v = v * v * (3 - 2 * v);
    let a = map[j * n + i],
      b = map[j * n + ((i + 1) % n)],
      d = map[((j + 1) % n) * n + i],
      e = map[((j + 1) % n) * n + ((i + 1) % n)];
    return (a + (b - a) * u) * (1 - v) + (d + (e - d) * u) * v;
  }
  for (let y = 0; y < 512; y++)
    for (let x = 0; x < 512; x++) {
      const i = (x + y * 512) * 4;
      let f = 0;
      for (let k = 0; k < 4; k++) f += (noise(x, y, ...octaves[k]) - 0.5) * [1, 0.64, 0.38, 0.22][k];
      const sand = r(),
        pooled = f > 0.05,
        dry = sand > 0.969,
        base = dry ? [242, 225, 182] : pooled ? [24, 33, 29] : [229, 219, 186];
      for (let k = 0; k < 3; k++) image.data[i + k] = base[k];
      image.data[i + 3] = dry ? 45 + 110 * r() : Math.abs(f) * 114 + r() * 19;
    }
  c.putImageData(image, 0, 0);
  for (let i = 0; i < 1000; i++) {
    let x = r() * 512,
      y = r() * 512,
      d = 1 + 13 * r();
    c.strokeStyle = i % 3 ? "rgba(239,222,179,.25)" : "rgba(32,37,28,.28)";
    c.lineWidth = 0.3 + r() * 0.6;
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(x + d * 0.4, y - d * 0.18, x + d, y - d * 0.23);
    c.stroke();
  }
  return cv;
}
export const pigmentTile = pigment();
