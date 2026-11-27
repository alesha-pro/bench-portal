// Small, original ink-and-wash illustrations printed onto the cut paper props.
import * as THREE from "three";
import { canvasTexture, rng } from "./art.js";

export function print(width, height, paint, seed = 19) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.lineJoin = ctx.lineCap = "round";
  const ink = (d, fill, stroke, weight = 2) => {
    const path = new Path2D(d);
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill(path);
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = weight;
      ctx.stroke(path);
    }
  };
  paint(ctx, ink);
  const random = rng(seed);
  ctx.globalCompositeOperation = "source-atop";
  for (let i = 0; i < (width * height) / 18; i++) {
    ctx.fillStyle = i % 3 ? "#fff9d821" : "#342d3624";
    ctx.fillRect(random() * width, random() * height, 0.5 + random() * 2, 1);
  }
  return canvasTexture(canvas);
}

export function cutout(texture, width, height, x = 0, y = 0) {
  const geometry = new THREE.PlaneGeometry(width, height);
  geometry.translate(x, y, 0);
  const card = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      map: texture,
      alphaTest: 0.36,
      side: THREE.DoubleSide,
      roughness: 1,
    }),
  );
  card.castShadow = card.receiveShadow = true;
  return card;
}
