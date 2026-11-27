import * as THREE from "three";
import { print, cutout } from "./print.js";
import { box, beam } from "./objects.js";
import { rng } from "./art.js";
import { batch } from "./scenery.js";

const coats = ["#c57843", "#a34c38", "#547b81"];
const shadow = "#4c493e";

function portrait(index) {
  const skin = ["#ae7251", "#e6b38c", "#c58e69"][index];
  const coat = coats[index];
  return print(144, 192, (ctx, ink) => {
    const draw = (d, color) => ink(d, color, shadow, 2.1);
    const stroke = (d, color, width) => ink(d, null, color, width);
    // Boots and two separate trouser legs sit below the hem of the apron.
    draw("M57 137l17 2 -2 35 -13 2z M79 139l15 -1 6 33 -13 5z", "#44565a");
    draw(
      "M58 170l15 -1 1 11 -25 2q-3 -7 9 -12z M86 170l14 -2 10 8q3 6 -22 4z",
      "#724838",
    );
    draw("M60 76q13 -7 27 -1l12 8 5 43 -12 6 -1 17q-19 7 -41 -1l7 -51z", coat);
    draw("M61 57l21 2 3 21 -12 10 -14 -10z", skin);
    if (index !== 1) {
      draw(
        "M60 78l7 4 -3 17 18 1 3 -20 5 3 -2 27 7 36q-22 8 -42 -1l6 -34z",
        index ? "#e5d8b9" : "#497e75",
      );
      stroke(
        "M60 119q10 4 21 0l-2 13q-14 5 -19 -1z",
        index ? "#b3a184" : "#a9b8a0",
        2,
      );
    } else {
      for (let y = 103; y <= 135; y += 9)
        stroke("M57 " + y + "q14 4 32 0", "#d1996f", 2);
    }
    draw(
      "M57 29q12 -13 32 1l4 15 -1 7 5 6 -6 3q-3 13 -17 12l-14 -6 -7 -18z",
      skin,
    );
    draw(
      "M52 52q-5 -12 3 -22 13 -12 31 -4l6 9q-12 6 -23 3l-7 14 -4 8z",
      index === 1 ? "#9c8b75" : "#624537",
    );
    draw("M62 50q-8 -7 -8 2t8 9", skin);
    if (index === 0) {
      draw("M52 31q-15 -13 -20 1t14 18l11 -7z", "#604634");
      draw("M48 40q16 -26 41 -12l4 7q-27 -7 -42 13z", "#bd5443");
      stroke("M55 37q15 -13 26 -9", "#fae4b8", 2);
      draw("M58 76l15 4 10 -6 3 6 -11 8 -8 -4 -9 12 1 -12z", "#b84f3e");
    } else if (index === 1) {
      draw("M54 29q-6 -16 14 -19 17 -4 21 16l10 7q-19 4 -49 0z", "#5b7763");
      stroke("M55 27q14 -5 34 -1", "#d3b071", 4);
      draw("M62 55q6 5 13 2 7 -6 15 -2l1 7 -5 10 -13 5 -12 -7z", "#ece0bd");
      stroke("M80 63q5 3 9 -1", shadow, 1.6);
      stroke(
        "M61 47l10 -2m1 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0m10 0l6 0",
        "#484b42",
        2.4,
      );
    } else {
      draw(
        "M53 32q-14 -11 -5 -18 3 -5 12 -4 11 -11 22 -2 12 -2 15 7 2 9 -7 13l-1 9 -36 0z",
        "#f1e5c7",
      );
      stroke("M55 28q22 -6 36 -3m-31 -12 4 10m14 -10 -1 8", "#b8b398", 2);
      draw("M59 77l15 3 10 -6 4 6 -9 8 8 10 -13 -4 -5 -11z", "#a95039");
    }
    stroke("M77 43q4 -3 8 -1", "#675044", 1.8);
    stroke("M82 48v2", "#3f4240", 3);
    if (index !== 1) stroke("M78 62q5 4 10 -1", "#845647", 2);
    stroke("M84 55l3 1", "#d58d71", 3);
    // The garden bouquet, enamel mug and wheat bundle identify each doorstep.
    if (index === 0) {
      stroke("M87 116l18 -25m-14 22 8 -29m-10 31 22 -16", "#46775b", 3);
      for (const [x, y] of [
        [104, 90],
        [98, 85],
        [111, 98],
        [95, 93],
      ]) {
        ink(
          "M" + x + " " + y + "m-5 0q-3 -7 3 -6 3 -6 6 -2 7 3 2 8l-5 4z",
          "#c15a4d",
          "#955444",
          1.3,
        );
      }
    } else if (index === 1) {
      draw("M90 98h16l-1 13q-7 6 -14 0z M106 100q12 -3 8 6l-8 3z", "#58847c");
      stroke("M90 99h16", "#f5dfb3", 2.5);
    } else {
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(92, 115);
        ctx.rotate(0.18 + i * 0.2);
        stroke("M0 0v-34", "#9b783f", 2);
        for (let y = -29; y < -12; y += 5)
          draw(
            "M0 " + y + "q-6 -1 -6 -7 5 1 6 7q6 -2 6 -8 -5 3 -6 8z",
            "#dbac59",
          );
        ctx.restore();
      }
    }
    draw("M93 86q10 0 12 16l-7 12 -13 -3 1 -8 7 1z", coat);
    draw("M86 102q-7 -2 -8 4t10 6l4 -7z", skin);
    stroke("M60 175l6 -1m25 0 6 -1", "#ccab7a", 1.6);
  });
}

export function recipient(index) {
  const root = new THREE.Group();
  const unit = 0.0071,
    w = 144 * unit,
    h = 192 * unit;
  root.add(cutout(portrait(index), w, h, 0, h / 2 - 0.07));
  const sleeve = print(68, 82, (_, ink) => {
    ink(
      "M46 65Q32 53 22 42L17 24 27 20 36 38 56 50Q64 60 56 66Z",
      coats[index],
      shadow,
      2.6,
    );
    ink("M16 29l13 -5 2 7 -13 6z", "#e9d8ad", shadow, 1.6);
    ink(
      "M17 26L11 19 6 13q-2 -5 3 -4l5 5 -4 -10q1 -5 5 -1l6 10 -1 -9q2 -4 4 0l3 13 3 -6q4 -2 4 2l-4 11 -9 5z",
      ["#ae7251", "#e6b38c", "#c58e69"][index],
      shadow,
      1.8,
    );
  });
  const arm = cutout(
    sleeve,
    68 * unit,
    82 * unit,
    (34 - 55) * unit,
    (56 - 41) * unit,
  );
  arm.position.set(-0.11, (192 - 88) * unit - 0.07, 0.012);
  root.add(arm);
  const mail = print(84, 54, (_, ink) => {
    ink("M2 3l78 -1 2 48 -79 1z", "#fbebc5", "#695d4e", 3);
    ink("M4 5l39 26 34 -27M4 48l26 -23m47 23 -24 -23", null, "#a17f60", 2.8);
    ink("M38 26q3 -6 8 -1t-4 9q-5 -3 -4 -8", "#b8543f");
  });
  const letter = cutout(mail, 0.215, 0.14);
  letter.position.set(0.13, 0.5, 0.027);
  letter.rotation.z = -0.14;
  root.add(letter);
  return { root, arm, letter };
}

const signs = [
  ["RIVERSIDE", "#447773", "≈"],
  ["HILLTOP", "#9d623c", "△"],
  ["THE MILL", "#557164", "✳"],
];
export function fingerpost(index) {
  const root = new THREE.Group(),
    head = new THREE.Group();
  const [name, color, symbol] = signs[index];
  box(root, 0.052, 0.79, 0.06, "#997955", 0, 0.395, 0);
  const texture = print(270, 81, (ctx, ink) => {
    ink("M5 10l213 -4 47 31 -46 33 -214 3z", color, "#5e533e", 4);
    ink("M12 16l202 -4 37 25 -36 25 -202 4z", null, "#e8cea0", 2);
    ctx.fillStyle = "#fff0d0";
    ctx.font = "bold 28px Georgia";
    ctx.textBaseline = "middle";
    ctx.fillText(symbol, 19, 41);
    ctx.fillText(name, 55, 41);
    ink("M228 35a3 3 0 1 0 1 0z", "#e9c780");
  });
  head.add(cutout(texture, 0.92, 0.29, 0.18, 0));
  head.position.set(0, 0.69, 0.048);
  root.add(head);
  return { root, head };
}

export function flowerBank(seed, warm) {
  const texture = print(
    264,
    119,
    (ctx, ink) => {
      const rand = rng(seed);
      for (let i = 0; i < 48; i++) {
        const x = 12 + rand() * 240,
          edge = Math.abs(x - 132) / 132;
        const y =
          19 + rand() * 58 + edge ** 1.8 * 31 + 9 * Math.sin(x * 0.053 + seed);
        const lean = (rand() - 0.5) * 20;
        const bottom = 111 - edge * 12 + rand() * 6;
        ctx.save();
        ctx.translate(x, y);
        const height = bottom - y;
        ink(
          "M0 0Q" + lean + " 25 " + lean + " " + height,
          null,
          i % 2 ? "#5e7654" : "#779152",
          2.5,
        );
        ink(
          "M1 22q-10 -4 -12 -14 10 2 12 14m0 4q12 -13 15 -10 -3 9 -15 10",
          "#738e64",
        );
        if (i % 3) {
          const r = 3 + 3 * rand();
          for (let j = 0; j < 5; j++) {
            ctx.rotate((Math.PI * 2) / 5);
            ink(
              "M0 0q-" + r + " -2 -2 -" + r * 1.6 + "q5 -2 5 2z",
              warm && i % 4 ? "#ca5842" : "#fff0c5",
            );
          }
          ink(
            "M-2 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
            warm ? "#73563c" : "#d4a951",
          );
        }
        ctx.restore();
      }
    },
    seed,
  );
  return cutout(texture, 1.23, 0.47, 0, 0.235);
}

export function washLine() {
  const root = new THREE.Group(),
    cloths = [];
  const wood = "#907052";
  for (const x of [-0.79, 0.79])
    beam(root, [x, 0, 0], [x, 0.79, 0], 0.022, wood);
  for (let i = 0; i < 8; i++) {
    const knot = (j) => [
      (j / 8 - 0.5) * 1.58,
      0.77 - 0.085 * Math.sin((j / 8) * Math.PI),
      0,
    ];
    beam(root, knot(i), knot(i + 1), 0.009, wood);
  }
  for (let i = 0; i < 4; i++) {
    const cloth = cutout(
      print(90, 97, (_, ink) => {
        const shirt = i % 2 === 0;
        ink(
          shirt
            ? "M12 12l17 -7q12 15 26 0l21 3 12 25 -17 8 -5 -7 -2 51q-21 5 -42 1l-1 -49 -9 6 -11 -16z"
            : "M8 7q35 4 68 -1l7 79q-32 9 -72 -1z",
          ["#d3ded4", "#b9634c", "#f5e6c0", "#698d94"][i],
          "#8d826d",
          2,
        );
        for (let y = 48; y <= 76; y += 9)
          ink(
            "M23 " + y + "q19 4 40 -1",
            null,
            shirt ? "#7a9c99" : "#f0d9ae",
            3,
          );
      }),
      0.31,
      0.34,
      0,
      -0.145,
    );
    cloth.position.set(
      -0.53 + i * 0.35,
      0.7 + Math.abs(i - 1.5) * 0.025,
      0.015,
    );
    root.add(cloth);
    cloths.push(cloth);
    for (const dx of [-0.066, 0.066])
      box(
        root,
        0.014,
        0.054,
        0.022,
        "#b49162",
        cloth.position.x + dx,
        cloth.position.y,
        0.028,
      );
  }
  batch(root, cloths);
  return { root, cloths };
}

// The sorting office has a striped canopy and a stack of parcels bound in string.
export function sortingOffice(house) {
  const awning = cutout(
    print(320, 128, (ctx, ink) => {
      for (let i = 0; i < 11; i++) {
        const x = i * 29;
        ink(
          "M" + x + " 1h30v103q-13 30 -30 1z",
          i % 2 ? "#f4dfb2" : "#457b76",
          "#9e8b6d",
          1.3,
        );
        ink("M" + x + " 89h29", null, "#a78e70", 2);
      }
    }),
    1.04,
    0.38,
  );
  awning.rotation.x = -0.74;
  awning.position.set(0, 0.89, 0.68);
  house.add(awning);
  const sign = cutout(
    print(280, 86, (ctx, ink) => {
      ink("M3 6l274 -4 1 77 -273 4z", "#9c4a38", "#6b5241", 5);
      ink("M12 13l256 -4 1 61 -256 5z", null, "#e7c895", 2);
      ctx.font = "bold 30px Georgia";
      ctx.textAlign = "center";
      ctx.fillStyle = "#fbe7bc";
      ctx.fillText("POST OFFICE", 140, 51);
    }),
    0.95,
    0.26,
  );
  sign.position.set(0, 1.13, 0.574);
  house.add(sign);
  for (const [x, y, z, w, h, d] of [
    [-0.56, 0.1, 0.82, 0.34, 0.2, 0.24],
    [-0.43, 0.235, 0.82, 0.23, 0.085, 0.18],
    [-0.8, 0.085, 0.72, 0.23, 0.17, 0.2],
  ]) {
    box(house, w, h, d, "#b98e5c", x, y, z);
    box(house, 0.018, h + 0.005, d + 0.01, "#f2dbad", x - w * 0.1, y, z);
    box(house, w + 0.008, h + 0.006, 0.012, "#e7cda2", x, y, z + 0.018);
  }
}

export function millSacks() {
  const root = new THREE.Group();
  const sack = print(110, 135, (_, ink) => {
    ink(
      "M38 18l-7 -14 39 2 -8 15q2 12 21 29 16 29 13 63 -1 18 -41 18 -44 -1 -44 -17 -4 -26 9 -53 17 -26 18 -43z",
      "#c7ac79",
      "#8b7353",
      3,
    );
    ink("M36 20q12 4 29 -1m-29 6q17 4 28 -2", null, "#705b42", 3);
    ink("M20 98q2 -32 14 -42m45 15q7 16 7 28", null, "#a38961", 3);
    ink("M26 75q27 -4 49 0v27q-26 7 -48 0z", "#657f73");
    ink(
      "M38 90q9 -10 17 -2 9 -9 15 -8 -5 12 -16 10 -9 7 -16 0",
      null,
      "#e8d8ab",
      3,
    );
  });
  for (const [x, z, scale, angle] of [
    [-0.21, 0, 0.84, -0.14],
    [0.06, -0.08, 1, 0.08],
    [0.26, 0.06, 0.7, -0.17],
  ]) {
    const bag = cutout(sack, 0.33 * scale, 0.45 * scale, 0, 0.225 * scale);
    bag.position.set(x, 0, z);
    bag.rotation.z = angle;
    root.add(bag);
  }
  return root;
}
