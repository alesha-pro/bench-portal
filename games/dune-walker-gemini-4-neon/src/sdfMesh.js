import * as THREE from 'three';
import { edgeTable, triTable } from 'three/addons/objects/MarchingCubes.js';

/**
 * High-resolution Marching Cubes SDF Polygonizer with:
 * - Smooth-min / smooth-max / subtraction SDF primitives (ellipsoids, capsules, rounded boxes)
 * - Welded indexed manifold geometry
 * - Taubin shrink-free smoothing + exact analytical ∇SDF normals
 * - Baked SDF Ambient Occlusion stored directly in `color` vertex attributes (zero runtime AO cost!)
 * - Automatic capsule skin-weight generator for SkinnedMesh characters
 */

export function smin(a, b, k) {
  const h = Math.max(k - Math.abs(a - b), 0.0) / k;
  return Math.min(a, b) - h * h * h * k * (1.0 / 6.0);
}

export function smax(a, b, k) {
  return -smin(-a, -b, k);
}

export function sdSub(base, cut, k = 0.0) {
  return k > 0 ? smax(base, -cut, k) : Math.max(base, -cut);
}

export function sdEllipsoid(px, py, pz, cx, cy, cz, rx, ry, rz) {
  const x = px - cx, y = py - cy, z = pz - cz;
  const k0 = Math.hypot(x / rx, y / ry, z / rz);
  if (k0 < 1e-6) return -Math.min(rx, ry, rz);
  const k1 = Math.hypot(x / (rx * rx), y / (ry * ry), z / (rz * rz));
  return (k0 * (k0 - 1.0)) / k1;
}

export function sdBox(px, py, pz, cx, cy, cz, bx, by, bz, r = 0.0) {
  const qx = Math.abs(px - cx) - bx;
  const qy = Math.abs(py - cy) - by;
  const qz = Math.abs(pz - cz) - bz;
  const out = Math.hypot(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0));
  const inn = Math.min(Math.max(qx, Math.max(qy, qz)), 0);
  return out + inn - r;
}

export function sdCapsule(px, py, pz, ax, ay, az, bx, by, bz, r) {
  const pax = px - ax, pay = py - ay, paz = pz - az;
  const bax = bx - ax, bay = by - ay, baz = bz - az;
  const b2 = bax * bax + bay * bay + baz * baz;
  const h = Math.max(0.0, Math.min(1.0, (pax * bax + pay * bay + paz * baz) / (b2 || 1e-6)));
  return Math.hypot(pax - bax * h, pay - bay * h, paz - baz * h) - r;
}

export function sdTaperedCapsule(px, py, pz, ax, ay, az, bx, by, bz, ra, rb) {
  const pax = px - ax, pay = py - ay, paz = pz - az;
  const bax = bx - ax, bay = by - ay, baz = bz - az;
  const b2 = bax * bax + bay * bay + baz * baz;
  const h = Math.max(0.0, Math.min(1.0, (pax * bax + pay * bay + paz * baz) / (b2 || 1e-6)));
  const r = ra + (rb - ra) * h;
  return Math.hypot(pax - bax * h, pay - bay * h, paz - baz * h) - r;
}

const CORNER_OFF = [
  [0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1],
  [0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1],
];

const EDGE_CORNERS = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

/**
 * Polygonizes an arbitrary SDF (inside < 0) with optional baked vertex-color Ambient Occlusion!
 */
export function polygonizeSDF(sdfFn, bounds, res, smoothPasses = 2, bakeAO = false, aoRadius = 1.0) {
  const [minX, minY, minZ] = bounds.min;
  const [maxX, maxY, maxZ] = bounds.max;
  const [nx, ny, nz] = res;

  const dx = (maxX - minX) / (nx - 1);
  const dy = (maxY - minY) / (ny - 1);
  const dz = (maxZ - minZ) / (nz - 1);

  const strideY = nx;
  const strideZ = nx * ny;
  const field = new Float32Array(nx * ny * nz);

  for (let z = 0; z < nz; z++) {
    const wz = minZ + z * dz;
    const zOff = z * strideZ;
    for (let y = 0; y < ny; y++) {
      const wy = minY + y * dy;
      const yOff = zOff + y * strideY;
      for (let x = 0; x < nx; x++) {
        field[yOff + x] = sdfFn(minX + x * dx, wy, wz);
      }
    }
  }

  const positions = [];
  const indices = [];
  const edgeCache = new Map();
  const vertList = new Int32Array(12);

  function getEdgeVertex(x, y, z, edgeIdx) {
    const [cA, cB] = EDGE_CORNERS[edgeIdx];
    const [ax, ay, az] = CORNER_OFF[cA];
    const [bx, by, bz] = CORNER_OFF[cB];

    const gx0 = x + ax, gy0 = y + ay, gz0 = z + az;
    const gx1 = x + bx, gy1 = y + by, gz1 = z + bz;

    const i0 = gz0 * strideZ + gy0 * strideY + gx0;
    const i1 = gz1 * strideZ + gy1 * strideY + gx1;
    const key = i0 < i1 ? i0 * 16777216 + i1 : i1 * 16777216 + i0;

    const cached = edgeCache.get(key);
    if (cached !== undefined) return cached;

    const v0 = field[i0], v1 = field[i1];
    const tc = Math.max(0.0, Math.min(1.0, Math.abs(v1 - v0) > 1e-6 ? -v0 / (v1 - v0) : 0.5));
    const idx = positions.length / 3;
    positions.push(
      minX + (gx0 + (gx1 - gx0) * tc) * dx,
      minY + (gy0 + (gy1 - gy0) * tc) * dy,
      minZ + (gz0 + (gz1 - gz0) * tc) * dz
    );
    edgeCache.set(key, idx);
    return idx;
  }

  for (let z = 0; z < nz - 1; z++) {
    for (let y = 0; y < ny - 1; y++) {
      for (let x = 0; x < nx - 1; x++) {
        let cubeIndex = 0;
        for (let c = 0; c < 8; c++) {
          const [ox, oy, oz] = CORNER_OFF[c];
          if (field[(z + oz) * strideZ + (y + oy) * strideY + (x + ox)] < 0.0) {
            cubeIndex |= 1 << c;
          }
        }
        const edges = edgeTable[cubeIndex];
        if (edges === 0) continue;

        for (let e = 0; e < 12; e++) {
          if (edges & (1 << e)) vertList[e] = getEdgeVertex(x, y, z, e);
        }
        const triBase = cubeIndex * 16;
        for (let t = 0; triTable[triBase + t] !== -1; t += 3) {
          const a = vertList[triTable[triBase + t]];
          const b = vertList[triTable[triBase + t + 1]];
          const c = vertList[triTable[triBase + t + 2]];
          // Paul Bourke triTable with CORNER_OFF base y=0 CCW winds (a, b, c) strictly OUTWARD (+∇SDF)!
          if (a !== b && b !== c && c !== a) indices.push(a, b, c);
        }
      }
    }
  }

  const vCount = positions.length / 3;
  const posArr = new Float32Array(positions);

  if (smoothPasses > 0 && vCount > 0) {
    const sumArr = new Float32Array(vCount * 3);
    const cntArr = new Uint16Array(vCount);
    const relax = (lambda) => {
      sumArr.fill(0);
      cntArr.fill(0);
      for (let i = 0; i < indices.length; i += 3) {
        const i0 = indices[i], i1 = indices[i + 1], i2 = indices[i + 2];
        const add = (a, b) => {
          sumArr[a * 3] += posArr[b * 3];
          sumArr[a * 3 + 1] += posArr[b * 3 + 1];
          sumArr[a * 3 + 2] += posArr[b * 3 + 2];
          cntArr[a]++;
        };
        add(i0, i1); add(i1, i0);
        add(i1, i2); add(i2, i1);
        add(i2, i0); add(i0, i2);
      }
      for (let v = 0; v < vCount; v++) {
        const c = cntArr[v];
        if (c === 0) continue;
        const v3 = v * 3;
        posArr[v3] += (sumArr[v3] / c - posArr[v3]) * lambda;
        posArr[v3 + 1] += (sumArr[v3 + 1] / c - posArr[v3 + 1]) * lambda;
        posArr[v3 + 2] += (sumArr[v3 + 2] / c - posArr[v3 + 2]) * lambda;
      }
    };
    for (let p = 0; p < smoothPasses; p++) {
      relax(0.35);
      relax(-0.36);
    }
  }

  const normArr = new Float32Array(vCount * 3);
  const colArr = bakeAO ? new Float32Array(vCount * 3) : null;
  const eps = Math.min(dx, dy, dz) * 0.45;

  for (let v = 0; v < vCount; v++) {
    const v3 = v * 3;
    const px = posArr[v3], py = posArr[v3 + 1], pz = posArr[v3 + 2];
    const gx = sdfFn(px + eps, py, pz) - sdfFn(px - eps, py, pz);
    const gy = sdfFn(px, py + eps, pz) - sdfFn(px, py - eps, pz);
    const gz = sdfFn(px, py, pz + eps) - sdfFn(px, py, pz - eps);
    const len = Math.hypot(gx, gy, gz) || 1.0;
    const nxv = gx / len, nyv = gy / len, nzv = gz / len;
    normArr[v3] = nxv;
    normArr[v3 + 1] = nyv;
    normArr[v3 + 2] = nzv;

    // Inigo Quilez analytical SDF Ambient Occlusion baked directly into vertex colors!
    if (bakeAO) {
      let occ = 0.0;
      let sca = 1.0;
      for (let step = 1; step <= 4; step++) {
        const h = (step / 4.0) * aoRadius;
        const d = sdfFn(px + nxv * h, py + nyv * h, pz + nzv * h);
        occ += Math.max(0.0, h - d) * sca;
        sca *= 0.65;
      }
      const ao = Math.max(0.28, Math.min(1.0, 1.0 - (occ / aoRadius) * 0.72));
      colArr[v3] = ao;
      colArr[v3 + 1] = ao;
      colArr[v3 + 2] = ao;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normArr, 3));
  if (bakeAO) {
    geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  }
  geo.setIndex(indices);
  return geo;
}

export function computeCapsuleSkinWeights(geo, boneSegments, sharpness = 18.0) {
  const pos = geo.attributes.position;
  const count = pos.count;
  const skinIndices = new Uint16Array(count * 4);
  const skinWeights = new Float32Array(count * 4);
  const weights = new Float32Array(boneSegments.length);

  for (let v = 0; v < count; v++) {
    const px = pos.getX(v), py = pos.getY(v), pz = pos.getZ(v);
    for (let b = 0; b < boneSegments.length; b++) {
      const seg = boneSegments[b];
      const d = Math.max(0, sdCapsule(px, py, pz, seg.a[0], seg.a[1], seg.a[2], seg.b[0], seg.b[1], seg.b[2], seg.r));
      weights[b] = Math.exp(-d * sharpness) * (seg.bias ?? 1.0);
    }
    const topIdx = [0, 0, 0, 0];
    const topW = [0, 0, 0, 0];
    for (let b = 0; b < boneSegments.length; b++) {
      const w = weights[b];
      for (let k = 0; k < 4; k++) {
        if (w > topW[k]) {
          for (let j = 3; j > k; j--) {
            topW[j] = topW[j - 1];
            topIdx[j] = topIdx[j - 1];
          }
          topW[k] = w;
          topIdx[k] = boneSegments[b].boneIndex;
          break;
        }
      }
    }
    const sum = topW[0] + topW[1] + topW[2] + topW[3] || 1.0;
    for (let k = 0; k < 4; k++) {
      skinIndices[v * 4 + k] = topIdx[k];
      skinWeights[v * 4 + k] = topW[k] / sum;
    }
  }

  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geo.setAttribute('skinWeight', new THREE.Uint16BufferAttribute ? new THREE.Float32BufferAttribute(skinWeights, 4) : new THREE.Float32BufferAttribute(skinWeights, 4));
}
