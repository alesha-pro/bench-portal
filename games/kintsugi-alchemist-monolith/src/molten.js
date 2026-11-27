import * as T from "three";
import { amountAt, clamp, random, smooth, TAU } from "./core.js";

const GRAVITY = 7.4;
export const RING_LIFE = 1.05;

// Each source is a specific cut on a shard. Once the neck pinches off, the
// bead keeps its own initial conditions, even if the slider reverses.
export function moltenFlow(scene, sources, seamAt) {
  const rng = random(6807);
  const emitters = sources.map((seam, i) => ({
    seam,
    interval: 2.15 + rng() * 1.65,
    offset: i * 0.31 + rng() * 0.27,
    gather: 0.35 + rng() * 0.28,
    size: 0.03 + rng() * 0.016,
  }));
  const body = new T.LatheGeometry(
    [
      [0, -1],
      [0.62, -0.86],
      [0.94, -0.46],
      [1, -0.08],
      [0.86, 0.3],
      [0.49, 0.73],
      [0.24, 1.04],
      [0.1, 1.53],
      [0.045, 2.09],
      [0, 2.25],
    ].map(([x, y]) => new T.Vector2(x, y)),
    16,
  );
  const metal = new T.MeshPhysicalMaterial({
    color: 0xffcb57,
    metalness: 0.77,
    roughness: 0.17,
    clearcoat: 0.7,
    emissive: 0xff9b22,
    emissiveIntensity: 1.05,
  });
  const beads = new T.InstancedMesh(body, metal, emitters.length);
  beads.frustumCulled = false;
  beads.instanceMatrix.setUsage(T.DynamicDrawUsage);
  scene.add(beads);
  const dummy = new T.Object3D(),
    sample = new T.Vector3();

  function births(lo, hi, accept) {
    for (const source of emitters) {
      const first = Math.max(
        0,
        Math.floor((lo - source.offset) / source.interval) + 1,
      );
      for (let i = first; ; i++) {
        const birth = source.offset + i * source.interval;
        if (birth > hi) break;
        accept({
          source,
          birth,
          release: birth + source.gather,
          hit: Infinity,
        });
      }
    }
  }

  function detach(drop, f, before) {
    const { source, release } = drop;
    const p = seamAt(source.seam, release, f, new T.Vector3());
    // The last attached pose gives the horizontal velocity of the moving lip.
    const v = p
      .clone()
      .sub(seamAt(source.seam, release - 0.02, before, sample))
      .multiplyScalar(50)
      .clampLength(0, 1.1);
    v.y = -0.12;
    p.y -= 2.25 * source.size;
    if (f < 0.09 || p.y < 0.09) return false;
    const flight = (v.y + Math.sqrt(v.y * v.y + 2 * GRAVITY * p.y)) / GRAVITY;
    drop.p = p;
    drop.v = v;
    drop.hit = release + flight;
    drop.x = p.x + v.x * flight;
    drop.z = p.z + v.z * flight;
    drop.tick = Math.ceil(drop.hit * 30);
    drop.spread = 0.1;
    drop.power = 0.032 + source.size * 0.6;
    return true;
  }

  const film = [];
  births(-1, 30, (d) => {
    if (
      amountAt(d.birth) > 0.13 &&
      detach(d, amountAt(d.release), amountAt(d.release - 0.02))
    )
      film.push(d);
  });
  let live = [],
    previous = null,
    previousF = 0;
  return (time, f, show, balance) => {
    if (show) {
      previous = null;
    } else {
      if (previous === null || previous > time) {
        previous = time;
        previousF = f;
        live = [];
      }
      const last = previous,
        span = time - last;
      const at = (t) =>
        span > 0 ? T.MathUtils.lerp(previousF, f, clamp((t - last) / span)) : f;
      births(last, time, (d) => {
        if (at(d.birth) > 0.13) live.push(d);
      });
      live = live.filter((d) => {
        if (
          !d.p &&
          d.release <= time &&
          !detach(d, at(d.release), at(d.release - 0.02))
        )
          return false;
        return time < d.hit + RING_LIFE && (d.p || f > 0.09);
      });
      previous = time;
      previousF = f;
    }
    const drops = show ? film : live;
    let count = 0;
    for (const d of drops) {
      if (time < d.birth || time >= d.hit) continue;
      const age = time - d.release;
      const r = d.source.size;
      if (age < 0) {
        const u = clamp((time - d.birth) / d.source.gather);
        seamAt(d.source.seam, time, f, dummy.position);
        const size = r * smooth(0, 0.75, u);
        dummy.scale.set(size, size * (0.57 + 0.43 * u * u), size);
        dummy.position.y -= 2.25 * dummy.scale.y;
      } else {
        dummy.position.copy(d.p).addScaledVector(d.v, age);
        dummy.position.y -= 0.5 * GRAVITY * age * age;
        const stretch =
          1 + 0.44 * Math.sin(age * TAU * 2) * Math.exp(-4 * age) + age * 0.94;
        dummy.scale.set(
          r / Math.sqrt(stretch),
          r * stretch,
          r / Math.sqrt(stretch),
        );
      }
      dummy.updateMatrix();
      beads.setMatrixAt(count++, dummy.matrix);
    }
    beads.count = count;
    beads.instanceMatrix.needsUpdate = true;
    metal.emissiveIntensity = 0.95 + balance * 1.74;
    return drops;
  };
}
