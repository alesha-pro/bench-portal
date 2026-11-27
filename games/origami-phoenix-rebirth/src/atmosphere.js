import * as THREE from 'three';
import { TAU, mix, random } from './math.js';

export function flightPath(t, flight) {
  const a = (t - 11.8) * 0.555;
  return new THREE.Vector3(
    flight * (0.87 * Math.cos(a) - 0.22),
    flight * (1.99 + 0.25 * Math.sin(a - 0.2)),
    flight * 0.77 * Math.sin(a),
  );
}
export function heading(t, flight) {
  return -0.73 + flight * 0.37 * Math.sin((t - 12.5) * 0.555 + 0.28);
}
export function createAir(scene) {
  const rng = random(9824),
    count = 580;
  const geo = new THREE.BufferGeometry();
  const coords = new Float32Array(count * 3),
    params = new Float32Array(count * 3),
    seed = [];
  for (let i = 0; i < count; i++)
    seed.push([rng(), rng(), rng(), rng(), rng()]);
  geo.setAttribute(
    'position',
    new THREE.BufferAttribute(coords, 3).setUsage(THREE.DynamicDrawUsage),
  );
  geo.setAttribute(
    'glint',
    new THREE.BufferAttribute(params, 3).setUsage(THREE.DynamicDrawUsage),
  );
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { pixelScale: { value: 1 } },
    vertexShader: `attribute vec3 glint;uniform float pixelScale;varying vec3 a;
    void main(){a=glint;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(glint.y*pixelScale/max(-p.z,.2),1.,43.);gl_Position=projectionMatrix*p;}`,
    fragmentShader: `varying vec3 a;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;
    if(r>1.)discard;float glow=exp(-5.7*r*r),core=exp(-40.*r*r);
    vec3 c=mix(vec3(.55,.61,.62),mix(vec3(1.,.34,.075),vec3(1.,.85,.47),core),a.z);
    gl_FragColor=vec4(c,a.x*(glow*.57+core*.90));}`,
  });
  const air = new THREE.Points(geo, mat);
  air.frustumCulled = false;
  air.renderOrder = 6;
  scene.add(air);
  return (t, flight, fire, ember, h) => {
    mat.uniforms.pixelScale.value = h / 1.3;
    const clock = t / 30,
      phase = clock * TAU;
    for (let i = 0; i < count; i++) {
      const [a, b, c, d, e] = seed[i];
      let x, y, z, alpha, size, gold;
      if (i < 200) {
        const p = (a + clock * (1 + (i % 3))) % 1;
        x = (b - 0.5) * 22 + 0.64 * Math.sin(p * TAU + d * 9);
        z = (c - 0.5) * 15;
        y = mix(6, -1.8, p);
        alpha = (0.11 + 0.29 * e) * Math.sin(p * Math.PI);
        size = 0.018 + 0.05 * d;
        gold = i % 5 === 0 ? 0.8 : 0.08;
      } else if (i < 315) {
        const p = (a + clock * (2 + (i % 5))) % 1;
        const angle = b * TAU + p * 1.47;
        x = (1.4 + 3.4 * c) * Math.cos(angle);
        z = (1.4 + 2.7 * c) * Math.sin(angle);
        y = -0.42 + p * (1.3 + d * 2.1);
        size = 0.032 + 0.082 * e;
        alpha = 0.55 * Math.sin(p * Math.PI) * (0.31 + 0.69 * fire) * ember;
        gold = 1;
      } else {
        const p = (a + clock * (8 + (i % 6))) % 1,
          age = p * (1.55 + 0.8 * c),
          birth = t - age;
        const who = i % 2 ? 1 : -1,
          source = flightPath(birth, flight);
        const local = new THREE.Vector3(
          who * (1.55 + 0.62 * Math.cos(birth * 2.48)),
          0.6 + 0.76 * Math.sin(birth * 2.48 + 0.34),
          -0.72,
        );
        local.applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          heading(birth, flight),
        );
        x = source.x + local.x + (b - 0.5) * p * 0.78;
        z = source.z + local.z - (0.38 + 0.39 * b) * age;
        y =
          source.y +
          0.66 +
          local.y -
          0.6 * age +
          0.22 * Math.sin(d * TAU + age * 3);
        alpha = (1 - p) ** 1.4 * (0.33 + 0.64 * d) * fire * flight * ember;
        size = 0.026 + 0.11 * e * (1 - p * 0.7);
        gold = 1;
      }
      coords.set([x, y, z], i * 3);
      params.set([alpha, size, gold], i * 3);
    }
    geo.attributes.position.needsUpdate =
      geo.attributes.glint.needsUpdate = true;
  };
}

export function createShadow(scene, bird) {
  const c = document.createElement('canvas');
  c.width = c.height = 192;
  const ctx = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c),
    size = 9.7,
    n = c.width;
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      mask: { value: tex },
      blur: { value: 0.004 },
      opacity: { value: 0.4 },
    },
    vertexShader:
      'varying vec2 q;void main(){q=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `uniform sampler2D mask;uniform float blur,opacity;varying vec2 q;void main(){
    float a=0.;for(int i=-2;i<=2;i++)for(int j=-2;j<=2;j++){a+=texture2D(mask,q+vec2(float(i),float(j))*blur).a;}
    if(length(q-.5)>.462)discard;gl_FragColor=vec4(.037,.038,.046,a/25.*opacity);}`,
    transparent: true,
    depthWrite: false,
  });
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = 0.023;
  plane.renderOrder = 1;
  scene.add(plane);
  const paper = bird.group.children[0].children[0],
    p = paper.geometry.attributes.position,
    tmp = new THREE.Vector3();
  return (flight) => {
    bird.group.updateMatrixWorld(true);
    ctx.clearRect(0, 0, n, n);
    ctx.beginPath();
    for (let i = 0; i < p.count; i += 3) {
      const tri = [];
      for (let j = 0; j < 3; j++) {
        tmp.fromBufferAttribute(p, i + j).applyMatrix4(bird.group.matrixWorld);
        tri.push([
          ((tmp.x + tmp.y * 0.23) / size) * n + n * 0.5,
          ((tmp.z + tmp.y * 0.11) / size) * n + n * 0.5,
        ]);
      }
      const [a, b, d] = tri;
      if ((b[0] - a[0]) * (d[1] - a[1]) - (b[1] - a[1]) * (d[0] - a[0]) < 0)
        tri.reverse();
      ctx.moveTo(...tri[0]);
      ctx.lineTo(...tri[1]);
      ctx.lineTo(...tri[2]);
      ctx.closePath();
    }
    ctx.fillStyle = 'black';
    ctx.fill();
    tex.needsUpdate = true;
    mat.uniforms.blur.value = 0.002 + flight * 0.024;
    mat.uniforms.opacity.value = 0.47 - flight * 0.28;
  };
}

// Each ribbon samples the past FK pose of a particular primary. A broken gold
// filament follows the actual wingbeat through space, fading into a wake of ash.
export function createTrails(scene, bird) {
  const trails = 6,
    segments = 42,
    ribbon = new THREE.BufferGeometry(),
    data = new Float32Array(trails * (segments + 1) * 2 * 3);
  const uv = [],
    indices = [];
  for (let j = 0; j < trails; j++)
    for (let i = 0; i <= segments; i++) {
      const offset = 2 * (j * (segments + 1) + i);
      uv.push(0, i / segments, 1, i / segments);
      if (i < segments)
        indices.push(
          offset,
          offset + 1,
          offset + 2,
          offset + 1,
          offset + 3,
          offset + 2,
        );
    }
  ribbon.setAttribute(
    'position',
    new THREE.BufferAttribute(data, 3).setUsage(THREE.DynamicDrawUsage),
  );
  ribbon.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  ribbon.setIndex(indices);
  const mat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    uniforms: { strength: { value: 1 }, time: { value: 0 } },
    vertexShader:
      'varying vec2 q;void main(){q=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec2 q; uniform float strength,time;void main(){
      float band=1.-abs(q.x*2.-1.);float hot=pow(band,3.);
      float breaks=.30+.70*smoothstep(-.32,.43,sin(q.y*41.-time*3.)+sin(q.y*83.+time));
      float alpha=(1.-q.y)*(1.-q.y)*band*breaks*strength;
      gl_FragColor=vec4(mix(vec3(1.,.23,.038),vec3(1.,.77,.32),hot),alpha*.87);
    }`,
  });
  const mesh = new THREE.Mesh(ribbon, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 4;
  scene.add(mesh);
  const total = 240,
    p = new Float32Array(total * 3),
    sparks = new THREE.BufferGeometry();
  sparks.setAttribute(
    'position',
    new THREE.BufferAttribute(p, 3).setUsage(THREE.DynamicDrawUsage),
  );
  const speckMat = new THREE.ShaderMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    uniforms: {
      size: { value: 500 },
      strength: { value: 1 },
      time: { value: 1 },
    },
    vertexShader: `uniform float size,time;varying float glow;void main(){vec4 pt=modelViewMatrix*vec4(position,1.);
    float seed=float(gl_VertexID);glow=.43+.54*abs(sin(seed*65.15+time*2.));gl_PointSize=clamp(size*(.013+.059*glow)/(-pt.z),1.,18.);gl_Position=projectionMatrix*pt;}`,
    fragmentShader: `varying float glow;uniform float strength;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;
    gl_FragColor=vec4(mix(vec3(1.,.38,.065),vec3(1.,.80,.37),glow),strength*glow*exp(-4.*d*d));}`,
  });
  const dust = new THREE.Points(sparks, speckMat);
  dust.frustumCulled = false;
  dust.renderOrder = 5;
  scene.add(dust);
  const rng = random(768),
    seeds = Array.from({ length: total }, () => [rng(), rng(), rng(), rng()]);
  const rot = new THREE.Euler(),
    axis = new THREE.Vector3(),
    eye = new THREE.Vector3(),
    last = new THREE.Vector3(),
    now = new THREE.Vector3();
  return (t, flight, fire, ember, camera, h) => {
    const strength = fire * ember * Math.max(0, (flight - 0.3) / 0.7);
    mesh.visible = dust.visible = strength > 0.001;
    if (!mesh.visible) return;
    mat.uniforms.strength.value = strength;
    mat.uniforms.time.value = t;
    speckMat.uniforms.size.value = h;
    speckMat.uniforms.time.value = t;
    speckMat.uniforms.strength.value = strength;
    const paths = [];
    for (let j = 0; j < trails; j++) {
      const path = [];
      paths.push(path);
      for (let i = 0; i <= segments; i++) {
        const f = i / segments,
          age = f * (1.23 + (j % 3) * 0.18),
          at = t - age;
        const pivot = flightPath(at, flight);
        rot.set(
          -0.1 * flight + 0.035 * flight * Math.sin(at * 2.48),
          heading(at, flight),
          0.08 * flight * Math.sin((at - 12) * 0.555),
        );
        now
          .copy(bird.wingtip(j, at, flight))
          .applyEuler(rot)
          .add(pivot);
        now.y += 0.065 + flight * 0.28 - 0.42 * age;
        now.z -= age * 0.51;
        now.x += 0.12 * age * Math.sin(at * 2.5 + j * 0.75);
        path.push(now.clone());
      }
      for (let i = 0; i <= segments; i++) {
        now.copy(path[i]);
        last
          .copy(path[Math.min(segments, i + 1)])
          .sub(path[Math.max(0, i - 1)]);
        eye.copy(camera.position).sub(now);
        axis
          .crossVectors(last, eye)
          .normalize()
          .multiplyScalar(
            (0.026 + (j % 3 === 0 ? 0.016 : 0)) * (1 - (0.67 * i) / segments),
          );
        const idx = (j * (segments + 1) + i) * 6;
        data.set(
          [
            now.x - axis.x,
            now.y - axis.y,
            now.z - axis.z,
            now.x + axis.x,
            now.y + axis.y,
            now.z + axis.z,
          ],
          idx,
        );
      }
    }
    for (let j = 0; j < total; j++) {
      const [a, b, c, d] = seeds[j],
        u = (a + t * (0.24 + d * 0.12)) % 1,
        at = u * (segments - 1);
      const path = paths[j % trails];
      now.copy(path[Math.floor(at)]).lerp(path[Math.ceil(at)], at % 1);
      const spread = 0.06 + u * 0.38;
      p.set(
        [
          now.x + (b - 0.5) * spread,
          now.y + (c - 0.5) * spread - u * 0.11,
          now.z + (d - 0.5) * spread,
        ],
        j * 3,
      );
    }
    ribbon.attributes.position.needsUpdate =
      sparks.attributes.position.needsUpdate = true;
  };
}
