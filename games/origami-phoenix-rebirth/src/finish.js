import * as THREE from 'three';

// A reduced-resolution optical glow and display-referred grade. The bright pass
// uses warm highlights so the distant mist retains its layers of dark ink.
export function finish(renderer) {
  const scene = new THREE.Scene(),
    camera = new THREE.Camera();
  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3),
  );
  const vert =
    'varying vec2 q;void main(){q=position.xy*.5+.5;gl_Position=vec4(position,1.);}';
  function pass(frag, uniforms) {
    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: 'varying vec2 q;' + frag,
      depthTest: false,
      depthWrite: false,
    });
  }
  const screen = new THREE.Mesh(geo);
  screen.frustumCulled = false;
  scene.add(screen);
  const buffer = new THREE.WebGLRenderTarget(1, 1, { samples: 4 });
  const a = new THREE.WebGLRenderTarget(1, 1, { depthBuffer: false }),
    b = a.clone();
  const bright = pass(
    'uniform sampler2D src;void main(){vec3 c=texture2D(src,q).rgb;float k=smoothstep(.60,.95,c.r)*smoothstep(.25,.65,c.g);gl_FragColor=vec4(c*k,1.);}',
    { src: { value: buffer.texture } },
  );
  const blur = pass(
    `uniform sampler2D src;uniform vec2 stepSize;
    void main(){vec3 c=texture2D(src,q).rgb*.204;
    c+=(texture2D(src,q+stepSize*1.43).rgb+texture2D(src,q-stepSize*1.43).rgb)*.262;
    c+=(texture2D(src,q+stepSize*3.34).rgb+texture2D(src,q-stepSize*3.34).rgb)*.112;
    c+=(texture2D(src,q+stepSize*5.20).rgb+texture2D(src,q-stepSize*5.20).rgb)*.024;
    gl_FragColor=vec4(c,1.);}`,
    { src: { value: null }, stepSize: { value: new THREE.Vector2() } },
  );
  const composite = pass(
    `uniform sampler2D plate,halation;
    void main(){vec3 c=texture2D(plate,q).rgb;
    vec3 b=texture2D(halation,q).rgb;
    c+=b*vec3(.21,.144,.094);
    float lum=dot(c,vec3(.25,.6,.15));
    c=mix(vec3(lum),c,1.10);c=(c-.225)*1.06+.225;
    c+=vec3(-.009,.002,.012)*(1.-smoothstep(.16,.43,lum));
    vec2 v=(q-.5)*vec2(1.1,.90);c*=1.-.24*smoothstep(.19,.80,length(v));
    gl_FragColor=vec4(c,1.);
    }`,
    { plate: { value: buffer.texture }, halation: { value: a.texture } },
  );
  function draw(material, target) {
    screen.material = material;
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
  }
  return (world, eye, w, h) => {
    buffer.setSize(w, h);
    const bw = Math.max(1, Math.floor(w / 4)),
      bh = Math.max(1, Math.floor(h / 4));
    a.setSize(bw, bh);
    b.setSize(bw, bh);
    renderer.setRenderTarget(buffer);
    renderer.render(world, eye);
    draw(bright, a);
    blur.uniforms.src.value = a.texture;
    blur.uniforms.stepSize.value.set(1 / bw, 0);
    draw(blur, b);
    blur.uniforms.src.value = b.texture;
    blur.uniforms.stepSize.value.set(0, 1 / bh);
    draw(blur, a);
    draw(composite, null);
  };
}
