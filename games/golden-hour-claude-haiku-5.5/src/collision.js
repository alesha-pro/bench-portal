// Static collision world: axis-aligned boxes and vertical cylinders. Floor is the plane y = 0.
// Boxes lower than a body's step height can be walked onto; taller ones block movement.

export const colliders = { boxes: [], cyls: [] };

export function clearColliders() {
  colliders.boxes.length = 0;
  colliders.cyls.length = 0;
}

export function addBox(x0, y0, z0, x1, y1, z1, mat = 'concrete', tag = null) {
  const b = {
    x0: Math.min(x0, x1), y0: Math.min(y0, y1), z0: Math.min(z0, z1),
    x1: Math.max(x0, x1), y1: Math.max(y0, y1), z1: Math.max(z0, z1),
    mat, tag,
  };
  colliders.boxes.push(b);
  return b;
}

export function addCylinder(x, z, r, y0, y1, mat = 'concrete', tag = null) {
  const c = { x, z, r, y0, y1, mat, tag };
  colliders.cyls.push(c);
  return c;
}

// Highest walkable top under (x, z) that is not above feetY + maxStep. Returns 0 for the floor.
export function surfaceHeight(x, z, feetY, maxStep = 0.5) {
  let best = 0;
  const limit = feetY + maxStep + 0.001;
  for (const b of colliders.boxes) {
    if (x < b.x0 || x > b.x1 || z < b.z0 || z > b.z1) continue;
    if (b.y1 > best && b.y1 <= limit) best = b.y1;
  }
  return best;
}

// Pushes a circle (p.x, p.z, radius r) out of every blocking collider. A body occupies [feetY, feetY + height].
export function resolveCircleXZ(p, r, feetY, height, step = 0.5) {
  const top = feetY + height;
  for (let pass = 0; pass < 2; pass++) {
    for (const b of colliders.boxes) {
      if (b.y1 <= feetY + step || b.y0 >= top) continue;
      const cx = p.x < b.x0 ? b.x0 : p.x > b.x1 ? b.x1 : p.x;
      const cz = p.z < b.z0 ? b.z0 : p.z > b.z1 ? b.z1 : p.z;
      const dx = p.x - cx;
      const dz = p.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 > 1e-10) {
        const d = Math.sqrt(d2);
        const push = (r - d) / d;
        p.x += dx * push;
        p.z += dz * push;
      } else {
        // Centre is inside the box: leave through the nearest side.
        const left = p.x - b.x0;
        const right = b.x1 - p.x;
        const back = p.z - b.z0;
        const front = b.z1 - p.z;
        const m = Math.min(left, right, back, front);
        if (m === left) p.x = b.x0 - r;
        else if (m === right) p.x = b.x1 + r;
        else if (m === back) p.z = b.z0 - r;
        else p.z = b.z1 + r;
      }
    }
    for (const c of colliders.cyls) {
      if (c.y1 <= feetY + step || c.y0 >= top) continue;
      const dx = p.x - c.x;
      const dz = p.z - c.z;
      const rr = r + c.r;
      const d2 = dx * dx + dz * dz;
      if (d2 >= rr * rr) continue;
      if (d2 > 1e-10) {
        const d = Math.sqrt(d2);
        const push = (rr - d) / d;
        p.x += dx * push;
        p.z += dz * push;
      } else {
        p.x = c.x + rr;
      }
    }
  }
}

// ---- Ray queries -----------------------------------------------------------

let _nx = 0, _ny = 0, _nz = 0;

// Slab test. Returns entry distance, or -1 on miss / origin inside. Writes the entry normal to _nx/_ny/_nz.
function rayBox(ox, oy, oz, dx, dy, dz, b, maxT) {
  let tmin = -Infinity;
  let tmax = Infinity;
  let nx = 0, ny = 0, nz = 0;

  if (Math.abs(dx) < 1e-9) {
    if (ox < b.x0 || ox > b.x1) return -1;
  } else {
    const inv = 1 / dx;
    let t1 = (b.x0 - ox) * inv;
    let t2 = (b.x1 - ox) * inv;
    const s = dx > 0 ? -1 : 1; // entry face is the low face when moving +x, so the normal points -x
    if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
    if (t1 > tmin) { tmin = t1; nx = s; ny = 0; nz = 0; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return -1;
  }
  if (Math.abs(dy) < 1e-9) {
    if (oy < b.y0 || oy > b.y1) return -1;
  } else {
    const inv = 1 / dy;
    let t1 = (b.y0 - oy) * inv;
    let t2 = (b.y1 - oy) * inv;
    const s = dy > 0 ? -1 : 1;
    if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
    if (t1 > tmin) { tmin = t1; nx = 0; ny = s; nz = 0; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return -1;
  }
  if (Math.abs(dz) < 1e-9) {
    if (oz < b.z0 || oz > b.z1) return -1;
  } else {
    const inv = 1 / dz;
    let t1 = (b.z0 - oz) * inv;
    let t2 = (b.z1 - oz) * inv;
    const s = dz > 0 ? -1 : 1;
    if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
    if (t1 > tmin) { tmin = t1; nx = 0; ny = 0; nz = s; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return -1;
  }
  if (tmax < 0 || tmin < 0 || tmin > maxT) return -1;
  _nx = nx; _ny = ny; _nz = nz;
  return tmin;
}

// Vertical cylinder test (side surface only). Returns distance or -1.
function rayCyl(ox, oy, oz, dx, dy, dz, c, maxT) {
  const ex = ox - c.x;
  const ez = oz - c.z;
  const a = dx * dx + dz * dz;
  if (a < 1e-12) return -1;
  const bq = 2 * (ex * dx + ez * dz);
  const cq = ex * ex + ez * ez - c.r * c.r;
  const disc = bq * bq - 4 * a * cq;
  if (disc < 0) return -1;
  const sq = Math.sqrt(disc);
  let t = (-bq - sq) / (2 * a);
  if (t < 0) return -1;
  if (t > maxT) return -1;
  const y = oy + dy * t;
  if (y < c.y0 || y > c.y1) return -1;
  const px = ox + dx * t - c.x;
  const pz = oz + dz * t - c.z;
  _nx = px / c.r;
  _ny = 0;
  _nz = pz / c.r;
  return t;
}

// Closest hit of a ray (unit direction) against boxes, cylinders and optionally the floor.
export function raycast(ox, oy, oz, dx, dy, dz, maxT, withFloor = true) {
  let bestT = maxT;
  let hit = null;
  for (const b of colliders.boxes) {
    const t = rayBox(ox, oy, oz, dx, dy, dz, b, bestT);
    if (t >= 0 && t < bestT) {
      bestT = t;
      hit = { t, nx: _nx, ny: _ny, nz: _nz, mat: b.mat, obj: b };
    }
  }
  for (const c of colliders.cyls) {
    const t = rayCyl(ox, oy, oz, dx, dy, dz, c, bestT);
    if (t >= 0 && t < bestT) {
      bestT = t;
      hit = { t, nx: _nx, ny: _ny, nz: _nz, mat: c.mat, obj: c };
    }
  }
  if (withFloor && dy < -1e-6 && oy > 0) {
    const t = -oy / dy;
    if (t >= 0 && t < bestT) {
      bestT = t;
      hit = { t, nx: 0, ny: 1, nz: 0, mat: 'floor', obj: null };
    }
  }
  if (hit) {
    hit.x = ox + dx * hit.t;
    hit.y = oy + dy * hit.t;
    hit.z = oz + dz * hit.t;
  }
  return hit;
}

export function hasLineOfSight(ax, ay, az, bx, by, bz) {
  const dx = bx - ax;
  const dy = by - ay;
  const dz = bz - az;
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-4) return true;
  return raycast(ax, ay, az, dx / len, dy / len, dz / len, len - 0.05, false) === null;
}

// Slab entry/exit distances of a ray against one box (used for mantle targets). Returns null on miss.
export function rayBoxRange(ox, oy, oz, dx, dy, dz, b) {
  let tmin = -Infinity;
  let tmax = Infinity;
  const axes = [[ox, dx, b.x0, b.x1], [oy, dy, b.y0, b.y1], [oz, dz, b.z0, b.z1]];
  for (const [o, d, lo, hi] of axes) {
    if (Math.abs(d) < 1e-9) {
      if (o < lo || o > hi) return null;
      continue;
    }
    let t1 = (lo - o) / d;
    let t2 = (hi - o) / d;
    if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
  }
  if (tmin > tmax || tmax < 0) return null;
  return { enter: tmin, exit: tmax };
}

// Pushes a sphere (debris) out of boxes, cylinders and the floor. Mutates p and v. Returns true on contact.
export function resolveSphere(p, v, r, restitution = 0.3, friction = 0.55) {
  let contact = false;
  if (p.y < r) {
    p.y = r;
    if (v.y < 0) v.y = -v.y * restitution;
    v.x *= friction;
    v.z *= friction;
    contact = true;
  }
  for (const b of colliders.boxes) {
    if (p.y + r < b.y0 || p.y - r > b.y1) continue;
    const cx = p.x < b.x0 ? b.x0 : p.x > b.x1 ? b.x1 : p.x;
    const cy = p.y < b.y0 ? b.y0 : p.y > b.y1 ? b.y1 : p.y;
    const cz = p.z < b.z0 ? b.z0 : p.z > b.z1 ? b.z1 : p.z;
    let dx = p.x - cx, dy = p.y - cy, dz = p.z - cz;
    const d2 = dx * dx + dy * dy + dz * dz;
    if (d2 >= r * r) continue;
    let nx, ny, nz, d;
    if (d2 > 1e-10) {
      d = Math.sqrt(d2);
      nx = dx / d; ny = dy / d; nz = dz / d;
      const push = r - d;
      p.x += nx * push; p.y += ny * push; p.z += nz * push;
    } else {
      // Inside: exit through the top if it is the nearest face, otherwise through the nearest side.
      const up = b.y1 - p.y;
      const left = p.x - b.x0, right = b.x1 - p.x, back = p.z - b.z0, front = b.z1 - p.z;
      const m = Math.min(up, left, right, back, front);
      if (m === up) { nx = 0; ny = 1; nz = 0; p.y = b.y1 + r; }
      else if (m === left) { nx = -1; ny = 0; nz = 0; p.x = b.x0 - r; }
      else if (m === right) { nx = 1; ny = 0; nz = 0; p.x = b.x1 + r; }
      else if (m === back) { nx = 0; ny = 0; nz = -1; p.z = b.z0 - r; }
      else { nx = 0; ny = 0; nz = 1; p.z = b.z1 + r; }
    }
    const vn = v.x * nx + v.y * ny + v.z * nz;
    if (vn < 0) {
      v.x -= (1 + restitution) * vn * nx;
      v.y -= (1 + restitution) * vn * ny;
      v.z -= (1 + restitution) * vn * nz;
      v.x *= friction;
      v.z *= friction;
    }
    contact = true;
  }
  for (const c of colliders.cyls) {
    if (p.y + r < c.y0 || p.y - r > c.y1) continue;
    const dx = p.x - c.x, dz = p.z - c.z;
    const rr = r + c.r;
    const d2 = dx * dx + dz * dz;
    if (d2 >= rr * rr) continue;
    const d = Math.sqrt(Math.max(d2, 1e-10));
    const nx = dx / d, nz = dz / d;
    const push = rr - d;
    p.x += nx * push;
    p.z += nz * push;
    const vn = v.x * nx + v.z * nz;
    if (vn < 0) {
      v.x -= (1 + restitution) * vn * nx;
      v.z -= (1 + restitution) * vn * nz;
    }
    contact = true;
  }
  return contact;
}
