import * as T from 'three';
export const TAU = Math.PI * 2;
export const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
export function random(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function shader(vertexShader, fragmentShader, uniforms = {}, options = {}) {
  return new T.ShaderMaterial({
    glslVersion: T.GLSL3,
    vertexShader,
    fragmentShader,
    uniforms,
    ...options,
  });
}
export async function textures(renderer) {
  const loader = new T.TextureLoader();
  const names = ['convection.jpg', 'interstellar.jpg', 'armor.jpg', 'ports.png'];
  const maps = await Promise.all(names.map((n) => loader.loadAsync('./assets/' + n)));
  for (const tex of maps) {
    tex.wrapS = tex.wrapT = T.RepeatWrapping;
    tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  }
  return { flow: maps[0], sky: maps[1], plate: maps[2], windows: maps[3] };
}
export function geometry(positions, uvs, idx) {
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  if (uvs) g.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
  if (idx) g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
export function polyline(parent, segments, color, opacity = 1) {
  const g = new T.BufferGeometry().setFromPoints(segments);
  const m = new T.LineBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: false,
  });
  const mesh = new T.LineSegments(g, m);
  parent.add(mesh);
  return mesh;
}
