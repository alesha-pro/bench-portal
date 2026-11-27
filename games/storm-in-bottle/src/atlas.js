import * as T from "three";
import { group, box, mesh, std, canvasTex, rng, batch } from "./craft.js";

export function atlases(scene, m) {
  const r = rng(9186);
  const pageTex = canvasTex(768, 128, (c, w, h) => {
    c.fillStyle = "#c5a87e";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 290; i++) {
      c.fillStyle = "rgba(" + Math.round(75 + r() * 55) + ",77,49," + r() * 0.44 + ")";
      c.fillRect(r() * -250, r() * h, 300 + r() * w, 0.5 + r());
    }
  });
  const pages = std(0xa99572, 0.92, 0, { map: pageTex });
  function volume(x, y, z, ang, w, d, h, color, title) {
    const p = group(scene);
    p.position.set(x, y, z);
    p.rotation.y = ang;
    const cover = std(color, 0.76, 0.025, { bumpMap: pageTex, bumpScale: 0.016 });
    box(p, w - 0.09, h - 0.085, d - 0.06, pages, 0, h / 2, 0, 0.023);
    for (const yy of [0.023, h - 0.023]) box(p, w, 0.052, d, cover, 0, yy, 0, 0.019);
    box(p, w, h, d * 0.12, cover, 0, h / 2, d * 0.465, 0.051);
    const spine = canvasTex(1024, 140, (c, W, H) => {
      c.fillStyle = color;
      c.fillRect(0, 0, W, H);
      for (let i = 0; i < 5800; i++) {
        c.fillStyle = r() > 0.56 ? "#d7c49528" : "#070b082b";
        c.fillRect(r() * W, r() * H, r() * 3 + 0.3, r() * 1.5 + 0.3);
      }
      c.fillStyle = "#c6a16a";
      c.strokeStyle = "#977844";
      c.lineWidth = 2;
      c.strokeRect(195, 18, 634, 104);
      c.strokeRect(202, 24, 620, 92);
      c.textAlign = "center";
      c.font = "39px Georgia";
      c.fillText(title, 512, 84);
      for (const xx of [76, 138, 885, 947]) {
        c.fillRect(xx, 4, 3, 132);
        c.fillRect(xx + 8, 4, 1, 132);
      }
    });
    mesh(
      p,
      new T.PlaneGeometry(w - 0.05, h - 0.024),
      std(0xbeac91, 0.7, 0.12, { map: spine }),
      0,
      h / 2,
      d * 0.526,
    );
    for (const xx of [-0.39, -0.32, 0.32, 0.39]) {
      box(p, 0.038, h * 0.97, 0.055, cover, xx * w, h / 2, d * 0.523, 0.013);
    }
    for (const xx of [-1, 1])
      for (const zz of [-1, 1]) {
        box(p, 0.17, 0.009, 0.09, m.brass, xx * (w / 2 - 0.112), h + 0.004, zz * (d / 2 - 0.074), 0.004);
      }
    batch(p);
  }
  volume(-5.05, 0.03, -2.78, 0.14, 2.65, 1.72, 0.32, "#373629", "ATLANTIC PILOT");
  volume(-5.1, 0.35, -2.81, 0.04, 2.48, 1.57, 0.27, "#55332d", "TIDAL TABLES");
}
