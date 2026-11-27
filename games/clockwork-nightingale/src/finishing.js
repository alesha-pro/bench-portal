import * as T from 'three';
import { M, TAU, cached, canvasTex, extrude, mat, mesh, rng } from './craft.js';

// Each overlapping perlage print cuts across the previous one. The same relief
// drives the roughness and the surface normal, including in grazing lamplight.
export function plateFinish(perlage = false) {
  return cached(perlage ? 'perlage brass' : 'Geneva stripes', () => {
    const noise = rng(1963);
    const grain = canvasTex(
      512,
      512,
      (c, w, h) => {
        const im = c.createImageData(w, h);
        const pitch = 64,
          radius = 56;
        for (let y = 0; y < h; y++)
          for (let x = 0; x < w; x++) {
            let level;
            if (perlage) {
              const row = Math.floor(y / pitch);
              for (let j = row + 1; j >= row - 1; j--) {
                const cx = Math.round((x - (j * pitch) / 2) / pitch) * pitch + (j * pitch) / 2;
                const dx = x - cx,
                  dy = y - j * pitch,
                  r = Math.hypot(dx, dy);
                if (r > radius) continue;
                level = 137 + (45 * (dx - dy)) / (1 + r) + 21 * Math.cos(r * 2.3);
                break;
              }
            } else {
              const offset = 5 * Math.cos((x * TAU) / w);
              const stripe = ((y + offset + pitch) % pitch) / pitch;
              level =
                82 + stripe * 102 + 16 * Math.cos(((y + offset) * TAU) / 4) - 27 * Math.exp(-stripe * 52);
            }
            const i = (y * w + x) * 4;
            im.data[i] = im.data[i + 1] = im.data[i + 2] = level + 11 * noise();
            im.data[i + 3] = 255;
          }
        c.putImageData(im, 0, 0);
      },
      false
    );
    grain.wrapS = grain.wrapT = T.RepeatWrapping;
    grain.repeat.setScalar(perlage ? 1.3 : 1.05);
    grain.rotation = perlage ? 0 : 0.29;
    return mat(perlage ? 0xb88951 : 0xd4a25e, 0.89, 0.61, {
      bumpMap: grain,
      bumpScale: perlage ? 0.0018 : 0.0015,
      roughnessMap: grain
    });
  });
}

// ExtrudeGeometry distinguishes the plate faces from its profiled edges.
// Keep those finishes separate through the rigid-assembly batching step.
export function plate(p, shape, depth, bevel, face = plateFinish(), edge = M.light) {
  const solid = extrude(shape, depth, bevel, 12);
  const materials = [face, edge];
  for (const { start, count, materialIndex } of solid.groups) {
    const part = new T.BufferGeometry();
    for (const [key, attr] of Object.entries(solid.attributes)) {
      const n = attr.itemSize;
      part.setAttribute(key, new T.BufferAttribute(attr.array.slice(start * n, (start + count) * n), n));
    }
    mesh(p, part, materials[materialIndex]);
  }
  solid.dispose();
}

export function aperture(shape, x, y, r) {
  const hole = new T.Path();
  hole.absarc(x, y, r, 0, TAU, true);
  shape.holes.push(hole);
}
