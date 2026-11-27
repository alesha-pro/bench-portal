import * as T from "three";

// Three fixed plates share one texture. They remain crisp at native film resolution.
export async function filmLettering() {
  await Promise.all([
    document.fonts.load("70px Instrument"),
    document.fonts.load("italic 42px Instrument"),
    document.fonts.load("16px Plex"),
  ]);
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 768;
  const ctx = canvas.getContext("2d");
  const titles = [
    ["SPECIMEN NO. 001", "The Cyber-Bonsai", "Silicon & Plum Blossoms"],
    ["FIG. 02   /   SUBSTRATE", "Root circuitry", ""],
    ["FIG. 03   /   CANOPY", "Optical plum blossoms", ""],
  ];
  titles.forEach(([over, main, sub], i) => {
    const y = i * 256;
    ctx.shadowColor = "#0a1012";
    ctx.shadowBlur = 9;
    ctx.fillStyle = "#e8ad9b";
    ctx.fillRect(2, y + 26, 32, 2);
    ctx.font = "17px Plex";
    ctx.letterSpacing = "2px";
    ctx.fillText(over, 51, y + 32);
    ctx.letterSpacing = "0px";
    ctx.fillStyle = "#f7eee4";
    ctx.font = (i ? "63" : "95") + "px Instrument";
    ctx.fillText(main, 0, y + (i ? 112 : 135));
    ctx.fillStyle = "#e4beac";
    ctx.font = "italic 49px Instrument";
    ctx.fillText(sub, 1, y + 196);
  });
  const tex = new T.CanvasTexture(canvas);
  tex.minFilter = T.LinearFilter;
  tex.generateMipmaps = false;
  return tex;
}
export function plateAt(t) {
  for (const [start, end, id] of [
    [0.25, 4.35, 0],
    [7.7, 11.16, 1],
    [14.01, 17.62, 2],
  ]) {
    if (t >= start && t <= end)
      return [id, Math.min(1, (t - start) / 0.58, (end - t) / 0.66)];
  }
  return [0, 0];
}
