import { T } from "./studio.js";

export function filmCard(closing) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 320;
  const c = canvas.getContext("2d");
  c.shadowColor = "rgba(10,9,7,.8)";
  c.shadowBlur = 12;
  c.shadowOffsetY = 2;
  c.fillStyle = "#eeaa77";
  c.fillRect(6, 65, 51, 3);
  c.font = "21px monospace";
  c.fillText(
    closing
      ? "M U R A N O    /    V E T R O   S O F F I A T O"
      : "F O R N A C E    /    M A T E R I A L   S T U D Y",
    79,
    73,
  );
  c.fillStyle = "#f6efdc";
  if (closing) {
    c.font = "italic 72px Georgia, serif";
    c.fillText("Cobalt & gold leaf", 3, 177);
  } else {
    c.font = "61px Georgia, serif";
    c.fillText("The Glassblower’s", 3, 157);
    c.font = "italic 81px Georgia, serif";
    c.fillText("Molten Furnace", 3, 249);
  }
  const tex = new T.CanvasTexture(canvas);
  tex.minFilter = T.LinearFilter;
  return tex;
}
