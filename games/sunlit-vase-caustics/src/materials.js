import * as THREE from "three";
export function random(seed = 271828) {
  return () => {
    seed = (1664525 * seed + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
export function plasterTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d"),
    r = random(81);
  g.fillStyle = "#d8d2c8";
  g.fillRect(0, 0, 512, 512);
  // Layer broad limewash clouds with finer aggregate, periodic at the edges.
  for (const [radius, count] of [
    [90, 75],
    [28, 300],
    [6, 1350],
  ]) {
    for (let i = 0; i < count; i++) {
      const x = r() * 512,
        y = r() * 512,
        d = radius * (0.5 + r()),
        tone = r() > 0.47 ? "99,94,86" : "255,250,239";
      for (const dx of [-512, 0, 512])
        for (const dy of [-512, 0, 512]) {
          if (
            x + dx + d < 0 ||
            x + dx - d > 512 ||
            y + dy + d < 0 ||
            y + dy - d > 512
          )
            continue;
          const grad = g.createRadialGradient(
            x + dx,
            y + dy,
            0,
            x + dx,
            y + dy,
            d,
          );
          grad.addColorStop(0, "rgba(" + tone + ",.085)");
          grad.addColorStop(1, "rgba(" + tone + ",0)");
          g.fillStyle = grad;
          g.fillRect(x + dx - d, y + dy - d, 2 * d, 2 * d);
        }
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(2.6, 1.9);
  return t;
}
export function mesh(geometry, material, parent, pos = [0, 0, 0]) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(...pos);
  if (parent) parent.add(m);
  return m;
}
export function box(parent, size, pos, material) {
  const m = mesh(new THREE.BoxGeometry(...size), material, parent, pos);
  m.receiveShadow = true;
  m.castShadow = true;
  return m;
}
export function tube(parent, points, radius, material, segments = 32) {
  return mesh(
    new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))),
      segments,
      radius,
      8,
      false,
    ),
    material,
    parent,
  );
}
