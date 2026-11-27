// Adjacent wavelength samples bound one continuous spectral interval. Never bridge
// a mirror edge, an intercepted ray, or two different paths onto a receiver.
import * as T from "three";
import { screen, bands } from "./optics.js";

export class SpectrumMesh {
  constructor(scene, parchment) {
    this.geometry = new T.BufferGeometry();
    // 15 intervals, up to 24 primary segments and five aperture samples per footprint.
    const capacity = (bands.length - 1) * (24 + 5) * 6;
    for (const [name, stride] of [
      ["position", 3],
      ["color", 3],
      ["profile", 2],
      ["travel", 1],
    ]) {
      this.geometry.setAttribute(
        name,
        new T.BufferAttribute(
          new Float32Array(capacity * stride),
          stride,
        ).setUsage(T.DynamicDrawUsage),
      );
    }
    this.front = { value: 1000 };
    const material = new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      forceSinglePass: true,
      blending: T.AdditiveBlending,
      vertexColors: true,
      uniforms: {
        front: this.front,
        parchment: { value: parchment },
        paperRect: {
          value: new T.Vector4(screen.x, screen.y, screen.w, screen.h),
        },
      },
      vertexShader: `uniform vec4 paperRect;attribute vec2 profile;attribute float travel;varying vec2 pageUV;varying vec2 uvRay;varying vec3 tint;varying float dist;
      void main(){pageUV=(position.xy-paperRect.xy)/paperRect.zw+.5;uvRay=profile;tint=color;dist=travel;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}`,
      fragmentShader: `uniform sampler2D parchment;uniform float front;varying vec2 pageUV;varying vec2 uvRay;varying vec3 tint;varying float dist;
      void main(){bool onPaper=uvRay.x>1.5;
        float edge=1.-smoothstep(.85,1.,abs(uvRay.y));
        float pencil=.87+.13*cos(6.28318*uvRay.x);
        vec3 dye=onPaper?texture2D(parchment,pageUV).rgb:vec3(1.);
        float reflectance=onPaper?clamp(dot(dye,vec3(.24,.64,.12))*1.75,.10,1.05):1.;
        gl_FragColor=vec4(tint*reflectance*edge*pencil*smoothstep(-.15,.15,front-dist),1.);}`,
    });
    const mesh = new T.Mesh(this.geometry, material);
    mesh.frustumCulled = false;
    mesh.renderOrder = 5;
    scene.add(mesh);
  }
  quad(points, colors, power, heights, distances, lift = 0) {
    const attrs = this.geometry.attributes;
    for (const i of [0, 1, 2, 2, 1, 3]) {
      const p = points[i],
        side = i >> 1,
        c = colors[side],
        k = this.count++;
      attrs.position.setXYZ(k, p.x, p.y, p.z + lift);
      attrs.color.setXYZ(k, c.r * power, c.g * power, c.b * power);
      attrs.profile.setXY(k, (lift ? 2 : 0) + side, heights[i]);
      attrs.travel.setX(k, distances[i]);
    }
  }
  begin() {
    this.count = 0;
  }
  finish() {
    this.geometry.setDrawRange(0, this.count);
    for (const attr of Object.values(this.geometry.attributes)) {
      attr.clearUpdateRanges();
      attr.addUpdateRange(0, this.count * attr.itemSize);
      attr.needsUpdate = true;
    }
  }
  interval(left, right, flux) {
    const colors = [left.color, right.color];
    for (const [key, l] of left.center) {
      const r = right.center.get(key);
      if (!r || key === "/prism" || l.inside !== "air") continue;
      const width = Math.max(l.a.distanceTo(r.a), l.b.distanceTo(r.b));
      if (width < 0.012) continue;
      const power =
        (Math.min(0.31, width * 1.7) *
          Math.sqrt(flux) *
          (l.energy + r.energy)) /
        2;
      this.quad(
        [l.a, l.b, r.a, r.b],
        colors,
        power,
        [0, 0, 0, 0],
        [
          l.distance,
          l.distance + l.a.distanceTo(l.b),
          r.distance,
          r.distance + r.a.distanceTo(r.b),
        ],
      );
    }
    for (let i = 0; i < left.slits.length; i++) {
      const samples = [
        left.slits[i][0],
        left.slits[i][2],
        right.slits[i][0],
        right.slits[i][2],
      ];
      if (
        samples.some((s) => s.at !== "screen" || s.route !== samples[0].route)
      )
        continue;
      const [a, b, c, d] = samples.map((s) => s.b);
      // Radiance increases where the aperture image or the wavelength interval contracts.
      const area =
        new T.Vector3()
          .crossVectors(b.clone().sub(a), c.clone().sub(a))
          .length() *
          0.5 +
        new T.Vector3()
          .crossVectors(c.clone().sub(d), b.clone().sub(d))
          .length() *
          0.5;
      const energy = samples.reduce((sum, s) => sum + s.energy, 0) / 4;
      const power =
        (flux *
          energy *
          T.MathUtils.clamp(0.15 / Math.max(0.003, area), 1.9, 6.5)) /
        left.slits.length;
      this.quad(
        [a, b, c, d],
        colors,
        power,
        [-1, 1, -1, 1],
        samples.map((s) => s.distance + s.a.distanceTo(s.b)),
        0.004,
      );
    }
  }
}
