import * as T from 'three';

// Third-frequency geodesic sampling has 92 sites: twelve pentagonal defects
// in an otherwise hexagonal spherical lattice. Mirror symmetry gives the
// shader only the first octant to search, while discharge tips use all sites.
const poly = new T.IcosahedronGeometry(1, 2);
const sites = new Map(),
  octant = new Map();
function key(v) {
  return v
    .toArray()
    .map((x) => Math.round(1e5 * x))
    .join('/');
}
for (let i = 0; i < poly.attributes.position.count; i++) {
  const n = new T.Vector3().fromBufferAttribute(poly.attributes.position, i).normalize();
  sites.set(key(n), n);
  const a = new T.Vector3(Math.abs(n.x), Math.abs(n.y), Math.abs(n.z));
  octant.set(key(a), a);
}
poly.dispose();
export const directions = [...sites.values()];
export const nearestSiteGLSL = [...octant.values()]
  .map(
    (n) =>
      'dotPeak=max(dotPeak,dot(n,vec3(' +
      n
        .toArray()
        .map((x) => x.toFixed(9))
        .join(',') +
      ')));',
  )
  .join('\n');
