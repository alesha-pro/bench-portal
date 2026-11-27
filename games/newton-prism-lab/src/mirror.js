import * as T from "three";
import { Reflector } from "three/addons/objects/Reflector.js";
// Capture the incident workshop light before the glass backplate is rendered.
const mirrors = [];
export function speculum(parent) {
  const face = new Reflector(new T.CircleGeometry(1, 96), {
    color: 0xbca980,
    textureWidth: 640,
    textureHeight: 640,
    clipBias: 0.002,
    multisample: 0,
  });
  const capture = face.onBeforeRender.bind(face);
  face.onBeforeRender = () => {};
  parent.add(face);
  mirrors.push({ face, capture });
  return face;
}
export function reflectWorkshop(renderer, scene, camera) {
  scene.updateMatrixWorld(true);
  camera.updateMatrixWorld(true);
  for (const { face, capture } of mirrors) {
    face.rotation.y = 0;
    face.updateWorldMatrix(true, false);
    const view = camera.position
      .clone()
      .sub(face.getWorldPosition(new T.Vector3()));
    if (view.dot(face.getWorldDirection(new T.Vector3())) < 0)
      face.rotation.y = Math.PI;
    face.updateWorldMatrix(true, false);
    capture(renderer, scene, camera);
  }
}
