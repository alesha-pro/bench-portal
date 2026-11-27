import * as THREE from "three";
import { canvasTexture, rng } from "./art.js";

// A two-sided printed character, with an inked profile that remains legible
// in the tracking shots. The wheels, leather satchel and pedalling legs
// occupy separate planes in the miniature.
export function illustratedRider() {
  const c = document.createElement("canvas");
  c.width = 480;
  c.height = 480;
  const g = c.getContext("2d");
  g.lineCap = "round";
  g.lineJoin = "round";
  function path(d, fill, stroke = "#4f4a3d", width = 3) {
    const shape = new Path2D(d);
    if (fill) {
      g.fillStyle = fill;
      g.fill(shape);
    }
    if (stroke) {
      g.lineWidth = width;
      g.strokeStyle = stroke;
      g.stroke(shape);
    }
  }
  // The loose end of the neckerchief is a separately hinged ribbon.
  path(
    "M178 194 Q152 203 138 253 L104 351 Q159 373 222 353 L239 286 251 244 221 205Z",
    "#47676a",
  );
  path("M143 280 Q137 328 121 347 L214 347 211 359 105 354Z", "#36555b", null);
  path("M174 211 L204 239 218 214 211 202Z", "#f4d8a2");
  path("M183 203 L199 229 209 218 222 231 233 217 215 197Z", "#ba5d3d");
  // Face and ear, with the nose and chin cut into the outside contour.
  path(
    "M181 137 Q189 96 226 96 Q258 96 267 122 L265 143 Q269 152 282 162 Q285 168 273 171 L268 171 Q267 190 252 194 L236 192 223 213 195 202 196 183 Q176 175 181 137Z",
    "#deb48b",
  );
  path(
    "M180 134 Q178 109 200 100 Q230 82 260 114 L261 125 Q242 124 225 133 L219 153 207 148 207 163 196 175 Q183 171 180 155Z",
    "#70513d",
  );
  path("M211 152 Q198 141 197 155 T209 167", "#d7a17c");
  path("M248 141 Q255 137 261 141", null, "#694b38", 3);
  path("M256 146v4", null, "#473e32", 4);
  path("M258 177 Q264 180 270 175", null, "#8b5b43", 2);
  // A postal cap with a curved visor, piping and a small brass insignia.
  path(
    "M167 120 Q164 98 181 80 Q191 56 222 58 Q253 59 263 87 L264 106 231 123 187 135Z",
    "#ae5139",
  );
  path(
    "M170 117 Q196 111 222 98 T260 90 L264 104 Q225 125 184 133Z",
    "#784833",
  );
  path(
    "M224 114 Q244 99 263 98 L291 100 Q294 110 260 118 L231 124Z",
    "#56493b",
  );
  path("M175 108 Q181 85 199 76", null, "#df9171", 3);
  path("M227 83l13 -4 2 10 -12 4Z", "#dfb66e", "#935f3c", 2);
  // Sleeve, bent arm and glove meeting the handlebar.
  path(
    "M214 229 Q225 216 238 233 L257 271 288 285 281 301 Q253 296 244 286 L212 252Z",
    "#506e70",
  );
  path("M274 281l12 3 -4 18 -13 -5Z", "#e3ca9a");
  path(
    "M285 285 Q293 283 308 289 L322 293 Q326 301 315 302 L291 300 282 297Z",
    "#dcb08b",
  );
  path("M150 241 Q165 262 210 278", null, "#aa854e", 8);
  for (const [x, y] of [
    [210, 259],
    [206, 284],
    [200, 310],
  ]) {
    g.fillStyle = "#d8b66e";
    g.beginPath();
    g.arc(x, y, 2.7, 0, 7);
    g.fill();
  }
  const rand = rng(281);
  g.globalCompositeOperation = "source-atop";
  for (let i = 0; i < 2200; i++) {
    g.fillStyle = i % 2 ? "#fff3c526" : "#392f2919";
    g.fillRect(rand() * 480, rand() * 480, 1 + rand() * 2, 1);
  }
  const mat = new THREE.MeshStandardMaterial({
    map: canvasTexture(c),
    side: THREE.DoubleSide,
    alphaTest: 0.45,
    roughness: 1,
  });
  const card = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 1.05), mat);
  card.position.set(-0.005, 0.88, 0.012);
  card.castShadow = true;
  card.receiveShadow = true;
  return card;
}

export function neckerchief() {
  const geometry = new THREE.PlaneGeometry(1, 1, 14, 4);
  const attrs = geometry.attributes,
    rest = attrs.position.array.slice();
  const colors = [];
  for (let i = 0; i < attrs.position.count; i++) {
    const u = attrs.uv.getX(i),
      v = attrs.uv.getY(i);
    const color = new THREE.Color(
      v < 0.1
        ? "#8f3d31"
        : v > 0.9 || (u > 0.78 && u < 0.87)
          ? "#e3986a"
          : "#bd4034",
    );
    colors.push(color.r, color.g, color.b);
  }
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const ribbon = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      vertexColors: true,
    }),
  );
  ribbon.position.set(-0.105, 0.946, 0.026);
  ribbon.frustumCulled = false;
  const flutter = (t, moving) => {
    for (let i = 0; i < attrs.position.count; i++) {
      const u = rest[i * 3] + 0.5,
        v = rest[i * 3 + 1],
        ripple = Math.sin(t * 6.7 - u * 6);
      attrs.position.setXYZ(
        i,
        -0.56 * u + (1 - 2 * Math.abs(v)) * 0.09 * u ** 9,
        -0.085 * Math.sin(Math.PI * u) +
          u * (0.085 * ripple + 0.038 * moving) +
          v * (0.081 + 0.045 * u),
        0.024 * u * Math.cos(6 * u - t * 6.7) + 0.019 * v * ripple,
      );
    }
    attrs.position.needsUpdate = true;
    geometry.computeVertexNormals();
  };
  return { ribbon, flutter };
}
