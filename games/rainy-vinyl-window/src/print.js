import { canvasMap, random, tau } from "./craft.js";
export const records = [
  {
    name: "After the Rain",
    artist: "Haru Ensemble",
    serial: "SR—001",
    ink: "#173337",
    paper: "#e2b989",
    accent: "#c95e38",
    bpm: 72,
  },
  {
    name: "Blue Hour FM",
    artist: "Mio Takeda",
    serial: "SR—002",
    ink: "#162e48",
    paper: "#dfd6ae",
    accent: "#629f9f",
    bpm: 80,
  },
  {
    name: "Last Tram Home",
    artist: "The Night Lines",
    serial: "SR—003",
    ink: "#392c31",
    paper: "#e2c5a3",
    accent: "#c78a50",
    bpm: 66,
  },
];
function stock(c, w, h, seed, n = 16000) {
  const r = random(seed);
  for (let i = 0; i < n; i++) {
    c.fillStyle = r() > 0.5 ? "rgba(255,239,207,.10)" : "rgba(22,15,12,.09)";
    c.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 1.4);
  }
}
export function jacket(id) {
  const s = records[id];
  return canvasMap(768, 768, (c, w, h) => {
    c.fillStyle = s.paper;
    c.fillRect(0, 0, w, h);
    c.fillStyle = s.ink;
    c.font = "bold 22px sans-serif";
    c.fillText("S T I L L R O O M    R E C O R D S", 36, 52);
    c.textAlign = "right";
    c.font = "18px monospace";
    c.fillText(s.serial, 732, 52);
    c.textAlign = "left";
    c.fillRect(35, 70, 698, 2);
    c.fillStyle = s.ink;
    c.fillRect(34, 93, 700, 447);
    c.save();
    c.beginPath();
    c.rect(34, 93, 700, 447);
    c.clip();
    const cx = [446, 400, 464][id],
      cy = 266;
    c.fillStyle = s.accent;
    c.beginPath();
    c.arc(cx, cy, 152, 0, tau);
    c.fill();
    c.strokeStyle = s.paper;
    c.lineWidth = 1.6;
    for (let i = 0; i < 43; i++) {
      c.beginPath();
      for (let x = 0; x <= 770; x += 4) {
        const y =
          380 +
          i * 4.6 +
          48 * Math.sin(x * 0.008 + i * 0.022 + id * 0.8) +
          24 * Math.sin(x * 0.015 + i * 0.015);
        if (x) c.lineTo(x, y);
        else c.moveTo(x, y);
      }
      c.stroke();
    }
    c.fillStyle = s.paper;
    c.font = "15px monospace";
    c.fillText("音  の  風  景", 57, 128);
    c.restore();
    c.fillStyle = s.ink;
    c.font = "italic 82px Georgia, serif";
    c.fillText(s.name, 31, 640, 705);
    c.fillRect(35, 661, 697, 2);
    c.font = "bold 26px sans-serif";
    c.fillText(s.artist.toUpperCase(), 38, 707);
    c.font = "15px monospace";
    c.fillText("HIGH FIDELITY  /  STEREO", 39, 739);
    c.textAlign = "right";
    c.fillText("33⅓   ●   LP", 730, 708);
    // Ring wear and broken ink expose the paper fibres where the LP rubs.
    const wear = random(7281 + id);
    for (let j = 0; j < 3300; j++) {
      const a = wear() * tau;
      const r = 334 + (wear() + wear() - 1) * 9;
      c.fillStyle = "rgba(220,200,161," + (0.04 + wear() * 0.22) + ")";
      c.fillRect(
        382 + Math.cos(a) * r,
        372 + Math.sin(a) * r,
        1 + wear() * 4,
        1,
      );
    }
    for (let i = 0; i < 620; i++) {
      c.save();
      c.translate(w / 2, h / 2);
      c.rotate((Math.floor(wear() * 4) * Math.PI) / 2);
      c.fillStyle = "#bca78b";
      c.fillRect(
        -384 + wear() * 6,
        wear() * 768 - 384,
        1 + wear() * 4,
        1 + wear() * 13,
      );
      c.restore();
    }
    // A paper obi folds over the right edge. Its series number follows the record.
    c.save();
    c.translate(664, 0);
    c.transform(1, 0, -0.006, 1, 0, 0);
    c.fillStyle = "rgba(30,26,22,.38)";
    c.fillRect(-2, 0, 67, h);
    const strip = c.createLinearGradient(0, 0, 64, 0);
    strip.addColorStop(0, "#baaa84");
    strip.addColorStop(0.08, "#e2cf9f");
    strip.addColorStop(0.86, "#e9d3aa");
    strip.addColorStop(1, "#c5af8c");
    c.fillStyle = strip;
    c.fillRect(0, 0, 62, h);
    c.fillStyle = "#86432e";
    c.fillRect(5, 20, 52, 74);
    c.textAlign = "center";
    c.fillStyle = "#eed7ad";
    c.font = "bold 32px Georgia";
    c.fillText("33", 31, 60);
    c.font = "10px monospace";
    c.fillText("R.P.M.", 31, 79);
    c.fillStyle = s.ink;
    c.font = "bold 23px Georgia";
    c.fillText("0" + (id + 1), 31, 705);
    c.translate(22, 126);
    c.rotate(Math.PI / 2);
    c.textAlign = "left";
    c.font = "bold 27px Georgia";
    c.fillText("Midnight Series", 0, 0);
    c.font = "13px monospace";
    c.fillText("STILLROOM  •  STEREO", 263, 0);
    c.restore();
    stock(c, w, h, 548 + id, 27000);
    c.strokeStyle = "rgba(248,231,197,.53)";
    c.lineWidth = 6;
    c.strokeRect(2, 2, 764, 764);
  });
}
// The jackets in the listening pile lie flat with their printed folds facing out.
export function spine(id) {
  const s = records[id];
  return canvasMap(1408, 60, (c, w, h) => {
    c.fillStyle = s.ink;
    c.fillRect(0, 0, w, h);
    c.fillStyle = s.accent;
    c.fillRect(0, 0, 115, h);
    c.fillStyle = "#f1dfbd";
    c.font = "bold 27px monospace";
    c.fillText(s.serial, 7, 39, 102);
    c.font = "bold 33px Georgia";
    c.fillText(s.name.toUpperCase(), 148, 42);
    c.font = "25px monospace";
    c.fillText(s.artist.toUpperCase(), 738, 39);
    c.fillText("STEREO   33", 1205, 39);
    stock(c, w, h, 91 + id, 3000);
    c.fillStyle = "#b7a38a";
    for (let i = 0; i < 85; i++)
      c.fillRect((i * 433) % w, i % 2 ? 0 : 57, 2 + (i % 21), 3);
  });
}
export function tramTicket() {
  return canvasMap(640, 294, (c, w, h) => {
    c.fillStyle = "#d6a26d";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#833c2c";
    c.fillRect(0, 0, w, 54);
    c.fillStyle = "#f4dfb8";
    c.font = "bold 26px monospace";
    c.fillText("MUNICIPAL TRAMWAYS", 19, 37);
    c.fillStyle = "#382d27";
    c.font = "italic 53px Georgia";
    c.fillText("Last service", 18, 125);
    c.font = "bold 30px monospace";
    c.fillText("N° 03   /   23:48", 24, 193);
    c.font = "21px monospace";
    c.fillText("NIGHT SINGLE    02741", 23, 257);
    c.setLineDash([6, 7]);
    c.strokeStyle = "#725641";
    c.beginPath();
    c.moveTo(488, 0);
    c.lineTo(488, h);
    c.stroke();
    c.translate(568, 230);
    c.rotate(-Math.PI / 2);
    c.font = "bold 34px monospace";
    c.fillText("P A I D", 0, 0);
    stock(c, w, h, 241, 3000);
  });
}
export function label(id) {
  const s = records[id];
  return canvasMap(512, 512, (c, w, h) => {
    c.fillStyle = s.paper;
    c.fillRect(0, 0, w, h);
    c.fillStyle = s.accent;
    c.fillRect(0, 0, w, 230);
    c.fillStyle = s.ink;
    c.fillRect(0, 225, w, 11);
    c.textAlign = "center";
    c.fillStyle = s.paper;
    c.font = "bold 26px sans-serif";
    c.fillText("S T I L L R O O M", 256, 117);
    c.font = "14px monospace";
    c.fillText("R E C O R D I N G S", 256, 145);
    c.fillStyle = s.ink;
    c.font = "italic 43px Georgia";
    c.fillText(s.name, 256, 341, 420);
    c.font = "bold 18px sans-serif";
    c.fillText(s.artist.toUpperCase(), 256, 373);
    c.font = "16px monospace";
    c.fillText(s.serial + "     •     SIDE A", 256, 404);
    c.textAlign = "left";
    c.fillText("STEREO", 31, 270);
    c.textAlign = "right";
    c.fillText("33⅓", 467, 270);
    for (const r of [224, 229, 244]) {
      c.strokeStyle = "rgba(34,42,36,.55)";
      c.lineWidth = 1.4;
      c.beginPath();
      c.arc(256, 256, r, 0, tau);
      c.stroke();
    }
    stock(c, w, h, 328 + id, 7000);
  });
}
export function meterFace() {
  return canvasMap(512, 220, (c) => {
    const g = c.createLinearGradient(0, 0, 0, 220);
    g.addColorStop(0, "#a56b35");
    g.addColorStop(0.5, "#ffe2a1");
    g.addColorStop(1, "#c49152");
    c.fillStyle = g;
    c.fillRect(0, 0, 512, 220);
    c.textAlign = "center";
    c.fillStyle = "#413329";
    c.font = "bold 23px Georgia";
    c.fillText("V U", 256, 167);
    for (let i = 0; i < 35; i++) {
      let a = -2.3 + i * 0.043;
      const r = 230;
      c.strokeStyle = i > 25 ? "#ab4129" : "#40382d";
      c.lineWidth = i % 5 === 0 ? 4 : 2;
      c.beginPath();
      c.moveTo(256 + Math.cos(a) * r, 284 + Math.sin(a) * r);
      c.lineTo(
        256 + Math.cos(a) * (r + (i % 5 === 0 ? 18 : 9)),
        284 + Math.sin(a) * (r + (i % 5 === 0 ? 18 : 9)),
      );
      c.stroke();
    }
    c.font = "17px monospace";
    c.fillText("−20       −10       0      +3", 256, 43);
    c.font = "13px sans-serif";
    c.fillText("VOLUME UNITS", 256, 193);
  });
}
export function lettering(txt, sub) {
  return canvasMap(768, 144, (c) => {
    c.fillStyle = "#1e2929";
    c.fillRect(0, 0, 768, 144);
    c.textAlign = "center";
    c.fillStyle = "#e0caa1";
    c.font = "italic bold 65px Georgia";
    c.fillText(txt, 384, 72);
    c.font = "21px monospace";
    c.fillText(sub, 384, 114);
  });
}
export function notebookPage(page) {
  return canvasMap(512, 640, (c, w, h) => {
    c.fillStyle = "#d7c9a5";
    c.fillRect(0, 0, w, h);
    stock(c, w, h, 62 + page);
    c.strokeStyle = "#a4aaa0";
    c.lineWidth = 1;
    for (let y = 108; y < 610; y += 30) {
      c.beginPath();
      c.moveTo(21, y);
      c.lineTo(490, y);
      c.stroke();
    }
    c.fillStyle = "#535b58";
    c.font = "15px monospace";
    c.fillText(page ? "SIDE B   /   02" : "STUDIO JOURNAL    11.27", 31, 43);
    c.font = "italic 38px Georgia";
    c.fillText(page ? "Night changes" : "Evening session", 29, 91);
    const lines = page
      ? ["rain on the sill", "a distant train", "tea before dawn"]
      : [
          "Rhodes & tape",
          "   slow, behind the beat",
          "let the room breathe",
          "  Fmaj7  /  Em7",
          "  Dm9   /  G13",
        ];
    lines.forEach((line, i) => {
      c.save();
      c.translate(35, 144 + i * 48);
      c.rotate(-0.018);
      c.font = "italic 27px cursive";
      c.fillText(line, 0, 0);
      c.restore();
    });
    // A field sketch of the car outside, in iron-gall ink on ruled paper.
    if (!page) {
      const ink = random(441);
      c.save();
      c.translate(71, 406);
      c.rotate(-0.035);
      c.strokeStyle = "#405863";
      c.lineWidth = 2.8;
      const line = (points) => {
        c.beginPath();
        c.moveTo(...points[0]);
        for (const [x, y] of points.slice(1))
          c.lineTo(x + ink() * 1.9, y + ink() * 1.9);
        c.stroke();
      };
      line([
        [9, 111],
        [15, 58],
        [47, 43],
        [281, 27],
        [308, 38],
        [310, 97],
        [42, 127],
        [9, 111],
        [9, 101],
        [42, 116],
        [308, 89],
      ]);
      line([
        [12, 54],
        [37, 35],
        [278, 18],
        [304, 32],
      ]);
      line([
        [24, 61],
        [40, 55],
        [40, 85],
        [20, 82],
        [24, 61],
      ]);
      for (let i = 0; i < 8; i++) {
        const x = 53 + 31 * i,
          y = 48 - 2.1 * i;
        line([
          [x, y],
          [x + 24, y - 2],
          [x + 23, y + 23],
          [x, y + 26],
          [x, y],
        ]);
        c.lineWidth = 1;
        line([
          [x + 4, y + 21],
          [x + 17, y + 3],
        ]);
        c.lineWidth = 2.8;
      }
      line([
        [109, 30],
        [152, 9],
        [197, 23],
      ]);
      line([
        [140, 8],
        [166, 6],
      ]);
      for (const x of [62, 241]) {
        c.beginPath();
        c.ellipse(x, 115 - (x - 62) * 0.113, 12, 15, 0.1, 0, tau);
        c.stroke();
      }
      c.lineWidth = 1;
      for (let i = 0; i < 63; i++) {
        const x = 39 + ink() * 267,
          y = 131 - x * 0.102 + ink() * 7;
        line([
          [x, y],
          [x - 14 - ink() * 9, y + 4],
        ]);
      }
      c.font = "italic 18px Georgia";
      c.fillText("from the north window, 11:48", 41, 166);
      c.restore();
    }
    if (page) {
      c.strokeStyle = "#626f6a";
      c.lineWidth = 2;
      c.beginPath();
      for (let x = 30; x < 480; x++) {
        let y =
          375 +
          Math.sin(x * 0.57) * Math.sin(x * 0.074) * 14 +
          Math.cos(x * 0.018) * 4;
        x === 30 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.stroke();
    }
  });
}
