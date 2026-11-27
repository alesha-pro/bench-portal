import { canvasTexture, rng, TAU } from "./craft.js";
function line(c, points) {
  c.beginPath();
  points.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
  c.stroke();
}
function rule(c, x, y, w) {
  line(c, [
    [x, y],
    [x + w, y],
  ]);
}
export function manuscript(cover = false) {
  return canvasTexture(768, 896, (c, w, h) => {
    const rand = rng(831);
    c.fillStyle = cover ? "#733d2c" : "#dbc393";
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 58000; i++) {
      const v = rand();
      c.fillStyle =
        "rgba(" +
        (v > 0.5 ? "73,39,19" : "255,249,209") +
        "," +
        rand() * 0.14 +
        ")";
      c.fillRect(rand() * w, rand() * h, 1 + rand() * 4, rand() * 2 + 1);
    }
    let edge = c.createRadialGradient(
      w * 0.51,
      h * 0.51,
      240,
      w * 0.51,
      h * 0.51,
      620,
    );
    edge.addColorStop(0, "transparent");
    edge.addColorStop(1, "#7d543494");
    c.fillStyle = edge;
    c.fillRect(0, 0, w, h);
    c.strokeStyle = cover ? "#c49a53" : "#6c5439";
    c.fillStyle = c.strokeStyle;
    c.lineWidth = 2;
    for (let d of [24, 30, 41]) c.strokeRect(d, d, w - 2 * d, h - 2 * d);
    c.textAlign = "center";
    c.font = "24px serif";
    c.fillText("N A T U R A L   P H I L O S O P H Y", w / 2, 92);
    c.font = "italic 78px serif";
    c.fillText(cover ? "Principia" : "Opticks.", w / 2, 187);
    c.font = "22px serif";
    c.fillText(cover ? "MATHEMATICA" : "EXPERIMENTUM   CRUCIS", w / 2, 236);
    rule(c, 130, 260, 508);
    c.save();
    c.translate(30, 25);
    for (let row = 0; row < 2; row++) {
      let dy = row * 205;
      c.save();
      c.translate(0, dy);
      c.lineWidth = 2.5;
      if (row === 0) {
        line(c, [
          [252, 440],
          [346, 292],
          [428, 445],
          [252, 440],
        ]);
        for (let i = 0; i < 7; i++) {
          c.strokeStyle = [
            "#924e35",
            "#986a2f",
            "#a28e46",
            "#5a7150",
            "#4e7273",
            "#505970",
            "#74556e",
          ][i];
          line(c, [
            [48, 380 + i * 0.8],
            [291, 375 + i],
            [396, 393 + i * 2],
            [653, 397 + i * 13],
          ]);
        }
        c.fillStyle = "#5a4833";
        c.font = "italic 22px serif";
        c.fillText("A", 340, 287);
        c.fillText("B", 239, 454);
        c.fillText("C", 438, 464);
      } else {
        c.strokeStyle = "#715b40";
        c.beginPath();
        c.ellipse(342, 370, 24, 91, 0, 0, TAU);
        c.stroke();
        for (let i = -2; i <= 2; i++)
          line(c, [
            [60, 370 + i * 31],
            [341, 370 + i * 31],
            [515, 370],
            [654, 370 - i * 25],
          ]);
      }
      c.restore();
    }
    c.restore();
    c.strokeStyle = "#6f5542";
    c.fillStyle = "#695039";
    c.textAlign = "left";
    c.font = "italic 22px serif";
    c.fillText("Fig. I.    De radiis diversè refrangibilibus.", 89, 532);
    c.fillText("Fig. II.    Axis lentis et focus radiorum.", 90, 728);
    for (let y = 764; y < 819; y += 13) {
      let x = 85;
      while (x < 665) {
        let len = 10 + rand() * 80;
        line(c, [
          [x, y],
          [x + len * 0.35, y - 1 - rand() * 2],
          [x + len, y],
        ]);
        x += len + 5 + rand() * 12;
      }
    }
    c.font = "18px serif";
    c.textAlign = "center";
    c.fillText("•     CANTABRIGIÆ     •", 384, 852);
  });
}
export function dialTexture() {
  return canvasTexture(768, 768, (c, w) => {
    c.translate(384, 384);
    c.fillStyle = "#867147";
    c.beginPath();
    c.arc(0, 0, 383, 0, TAU);
    c.fill();
    const rand = rng(23);
    for (let i = 0; i < 10000; i++) {
      c.fillStyle = rand() > 0.5 ? "#e1c38832" : "#20170924";
      c.fillRect(rand() * w - 384, rand() * w - 384, 1 + rand() * 4, 1);
    }
    c.strokeStyle = "#2c2920";
    for (const r of [378, 369, 356, 282, 269, 208, 195, 91]) {
      c.lineWidth = r === 356 ? 3 : 1.5;
      c.beginPath();
      c.arc(0, 0, r, 0, TAU);
      c.stroke();
    }
    for (let i = 0; i < 180; i++) {
      c.save();
      c.rotate((i * TAU) / 180);
      c.lineWidth = i % 5 === 0 ? 3 : 1.5;
      line(c, [
        [0, -354],
        [0, -(i % 5 === 0 ? 328 : 343)],
      ]);
      if (i % 15 === 0) {
        c.fillStyle = "#2c241a";
        c.textAlign = "center";
        c.font = "26px serif";
        c.fillText(String(i * 2), 0, -299);
      }
      c.restore();
    }
    for (let i = 0; i < 32; i++) {
      c.save();
      c.rotate((i * TAU) / 32);
      c.beginPath();
      c.moveTo(0, -(i % 4 === 0 ? 256 : 216));
      c.lineTo(11, -106);
      c.lineTo(0, -132);
      c.closePath();
      c.fill();
      c.restore();
    }
  });
}
export function rulerTexture() {
  return canvasTexture(1536, 112, (c, w, h) => {
    c.fillStyle = "#b89b65";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#34291c";
    c.strokeStyle = "#4a3925";
    c.lineWidth = 2;
    rule(c, 0, 6, w);
    rule(c, 0, 106, w);
    for (let i = 0; i < 160; i++) {
      let x = 24 + i * 9.4,
        major = i % 10 === 0;
      c.fillRect(x, 8, major ? 2.5 : 1.5, major ? 42 : i % 5 === 0 ? 31 : 18);
      if (major) {
        c.font = "24px serif";
        c.fillText(i / 10, x - 6, 82);
      }
    }
  });
}
export function plateTexture(a, b) {
  return canvasTexture(640, 154, (c, w, h) => {
    c.fillStyle = "#514331";
    c.fillRect(0, 0, w, h);
    c.strokeStyle = "#b69764";
    c.lineWidth = 3;
    c.strokeRect(8, 8, w - 16, h - 16);
    c.fillStyle = "#eed5a5";
    c.textAlign = "center";
    c.font = "32px serif";
    c.fillText(a, w / 2, 68);
    c.font = "18px monospace";
    c.fillText(b, w / 2, 110);
    for (let x of [24, w - 24]) {
      c.beginPath();
      c.arc(x, h / 2, 7, 0, TAU);
      c.fill();
      c.strokeStyle = "#372a1a";
      line(c, [
        [x - 4, h / 2 + 4],
        [x + 4, h / 2 - 4],
      ]);
    }
  });
}
export function astrolabeFace() {
  return canvasTexture(1024, 1024, (c, w) => {
    c.drawImage(dialTexture().image, 0, 0, w, w);
    c.save();
    c.translate(512, 512);
    c.fillStyle = "#987e4f";
    c.beginPath();
    c.arc(0, 0, 370, 0, TAU);
    c.fill();
    c.save();
    c.clip();
    c.strokeStyle = "#4b402b";
    c.lineWidth = 1.4;
    const circle = (x, y, r) => {
      c.beginPath();
      c.arc(x, y, r, 0, TAU);
      c.stroke();
    };
    for (let i = 0; i < 19; i++) {
      let u = i / 18;
      circle(0, 276 + u * 348, 90 + u * 580);
    }
    for (let i = -6; i <= 6; i++) {
      let k = i * 0.19;
      if (!k) continue;
      circle(328 / Math.tan(k), -108, Math.hypot(328 / Math.tan(k), 295));
    }
    c.lineWidth = 3;
    circle(0, 0, 312);
    circle(0, 0, 253);
    circle(0, 0, 131);
    c.restore();
    c.strokeStyle = "#443721";
    c.lineWidth = 8;
    circlePath(c, 0, -57, 253);
    c.lineWidth = 2;
    circlePath(c, 0, -57, 264);
    c.fillStyle = "#423522";
    c.font = "italic 22px serif";
    [
      ["Vega", -199, -145],
      ["Altair", 87, 175],
      ["Sirius", -60, 244],
      ["Arcturus", 89, -222],
      ["Procyon", -216, 96],
    ].forEach(([n, x, y]) => {
      c.fillText(n, x, y);
      c.beginPath();
      c.arc(x - 5, y - 5, 3, 0, TAU);
      c.fill();
    });
    c.restore();
  });
}
function circlePath(c, x, y, r) {
  c.beginPath();
  c.arc(x, y, r, 0, TAU);
  c.stroke();
}

export function receivingPaper() {
  return canvasTexture(1536, 748, (c, w, h) => {
    const random = rng(1672);
    const wash = c.createLinearGradient(0, 0, w, h);
    wash.addColorStop(0, "#bd9e6b");
    wash.addColorStop(0.26, "#deca9e");
    wash.addColorStop(0.68, "#decca8");
    wash.addColorStop(1, "#bda77e");
    c.fillStyle = wash;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 36000; i++) {
      c.fillStyle = random() < 0.46 ? "#49302410" : "#fff8d322";
      c.fillRect(
        random() * w,
        random() * h,
        1 + random() * 6,
        0.6 + random() * 2,
      );
    }
    // Broken laid lines, chain lines, and oxidised margins of a handmade sheet.
    for (let i = 0; i < 184; i++) {
      c.strokeStyle = i % 4 ? "#614f3312" : "#fff5d623";
      c.lineWidth = 0.9;
      line(c, [
        [0, i * 4.1],
        [w * 0.55, i * 4.1 + random() * 1.3],
        [w, i * 4.1 - 0.5],
      ]);
    }
    for (let x = 32; x < w; x += 95) {
      c.fillStyle = "#664f2b0e";
      c.fillRect(x, 0, 2.8, h);
    }
    c.strokeStyle = c.fillStyle = "#614a33";
    for (const d of [19, 27]) {
      c.lineWidth = d === 19 ? 2.4 : 1;
      c.strokeRect(d, d, w - 2 * d, h - 2 * d);
    }
    c.textAlign = "center";
    c.font = "small-caps 52px Georgia,serif";
    c.fillText("Spectrum Solis", w / 2, 107);
    c.font = "italic 24px Georgia,serif";
    c.fillText("Tabula II.   De diversa radiorum refrangibilitate", w / 2, 148);
    rule(c, 153, 173, w - 306);
    c.globalAlpha = 0.4;
    c.lineWidth = 1.2;
    for (let i = 0; i <= 80; i++) {
      const x = 83 + (i * (w - 166)) / 80;
      line(c, [
        [x, 530],
        [x, 530 + (i % 10 === 0 ? 28 : i % 5 === 0 ? 18 : 9)],
      ]);
      if (i % 10 === 0) {
        c.font = "22px Georgia,serif";
        c.fillText(
          ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][i / 10],
          x,
          589,
        );
      }
    }
    rule(c, 83, 529, w - 166);
    // Scribed witness lines remain visible through the projected slit image.
    c.globalAlpha = 0.34;
    c.lineWidth = 1.8;
    for (let i = 0; i < 17; i++) {
      const x = 83 + (i * (w - 166)) / 16;
      line(c, [
        [x, 506],
        [x, 224],
      ]);
      if (i % 2 === 0)
        line(c, [
          [x - 8, 371],
          [x + 8, 371],
        ]);
    }
    c.setLineDash([4, 8]);
    rule(c, 83, 371, w - 166);
    c.setLineDash([]);
    c.globalAlpha = 0.55;
    for (const x of [64, w - 64])
      for (let i = 0; i <= 16; i++) {
        const y = 218 + i * 17,
          side = x === 64 ? 1 : -1;
        line(c, [
          [x, y],
          [x + side * (i % 4 ? 8 : 19), y],
        ]);
      }
    c.globalAlpha = 1;
    c.font = "italic 26px Georgia,serif";
    c.fillText("Fig. 2.", 109, 675);
    c.fillText("Ex observatione.", w - 178, 675);
    for (const x of [44, w - 44])
      for (const y of [44, h - 44]) {
        c.beginPath();
        c.arc(x, y, 5, 0, TAU);
        c.fill();
      }
  });
}
