// Lightfield: the homepage is lit like one of the pixel-art light scenes.
//
// A low-resolution WebGL pass treats the page itself as the scene. Elements with
// data-light="<height>" become height-field occluders, so the title glyphs, the
// filter shelf and every card cast shadows from a lamp that follows the cursor.
// data-light-text draws an element's words into the occluder map; data-light-glass
// is an analytic glass body that bends light into caustics instead of blocking it.
// The frame is snapped to a fixed palette with 4x4 Bayer dithering and upscaled
// with nearest filtering, so every pixel stays a hard square.
//
// Cost control: the buffer is ~360px wide whatever the screen, the loop drops to
// a slow idle rate, pauses in hidden tabs, freezes for reduced motion, and gives up
// on WebGL entirely for weak devices (the page then uses a static CSS backdrop).
// Debug/screenshot params: ?light=x,y (0..1 viewport) pins the lamp, ?t=s freezes time.

const PALETTE = [
  // cold ramp: shadows, glass, ambient
  "05070c", "0a1018", "0e1820", "122129", "162b33", "1b363e", "21434a", "2a5257",
  "356267", "437479", "56888a", "6f9e9c", "8fb6af", "b3cdc3", "d6e4d9",
  // warm ramp: lamp and lit plaster
  "1a0f0a", "28160d", "3a1f10", "4f2a14", "663619", "7e441d", "985423", "b0642a",
  "c67733", "d98c40", "e8a352", "f2bb6a", "f8d18a", "fce4b0", "fff3d8",
  // desaturated earth: lit plaster midtones
  "2a2420", "3d342d", "524539", "6b5847", "86705a", "a28a6f", "bfa688", "dac4a6",
  // dark neutrals
  "141519", "1f2026",
  // spectral: caustic fringes
  "c3324a", "e8573c", "f0a33a", "e9d84a", "7cc257", "3fb39a", "3c86d6", "6a5ad1", "a65bc9",
];

const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

const FRAG = `precision highp float;
uniform sampler2D uMask;
uniform vec2 uRes;
uniform vec3 uLight;
uniform vec3 uLightCol;
uniform vec3 uAmbient;
uniform vec3 uAmbient2;
uniform vec3 uWall;
uniform float uTime;
uniform float uRadius;
uniform float uDisperse;
uniform float uVol;
uniform float uScroll;
uniform vec3 uPal[PALN];

float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float bayer2(vec2 a){a=floor(a);return fract(dot(a,vec2(.5,a.y*.75)));}
float bayer4(vec2 a){return bayer2(.5*a)*.25+bayer2(a);}
vec4 M(vec2 p){return texture2D(uMask,(p+.5)/uRes);}

float caustic(vec2 uv,float t){
  vec2 p=mod(uv*6.2831,6.2831)-250.;vec2 i=p;float c=1.;float inten=.005;
  for(int n=0;n<4;n++){float tt=t*(1.-(3.5/float(n+1)));
    i=p+vec2(cos(tt-i.x)+sin(tt+i.y),sin(tt-i.y)+cos(tt+i.x));
    c+=1./length(vec2(p.x/(sin(i.x+tt)/inten),p.y/(cos(i.y+tt)/inten)));}
  c/=4.;c=1.17-pow(c,1.4);return clamp(pow(abs(c),5.),0.,2.5);
}

// March from (p,z0) toward the lamp through the height field.
// Opaque samples block; samples just above an occluder give a widening penumbra;
// glass samples pass light on and focus it into dispersed caustics.
vec3 trace(vec2 p,float z0,const int STEPS){
  vec2 d2=uLight.xy-p;float dz=uLight.z-z0;float len=length(d2);
  float vis=1.;float glass=0.;vec2 gq=vec2(0.);
  float jit=bayer4(p)*.9;
  for(int i=0;i<40;i++){
    if(i>=STEPS)break;
    float t=(float(i)+jit)/float(STEPS);
    vec2 q=p+d2*t;float z=z0+dz*t;
    vec4 m=M(q);float h=m.r*64.;
    if(h>z){ if(m.g>.5){ if(glass<.5){glass=1.;gq=q;} } else {vis=0.;break;} }
    else if(h>.5&&m.g<.5){ vis=min(vis,clamp(3.*(z-h)/(t*len*.18+1.),0.,1.)); }
  }
  vec3 tr=vec3(vis);
  if(glass>.5){
    vec2 d=normalize(d2+1e-4)*uDisperse;
    float tt=uTime*.3;
    vec2 cuv=gq*.028+(p-gq)*.012;
    vec3 c=vec3(caustic(cuv+d,tt),caustic(cuv,tt),caustic(cuv-d,tt));
    tr*=vec3(.22,.27,.3)+c*1.1;
  }
  return tr;
}

vec3 snapPal(vec3 c,vec2 fc){
  c+=(bayer4(fc)-.5)*vec3(.034);
  float best=1e9;vec3 o=c;
  for(int i=0;i<PALN;i++){vec3 d=(c-uPal[i])*vec3(1.,1.15,.85);float e=dot(d,d);if(e<best){best=e;o=uPal[i];}}
  return o;
}

float lampAt(vec2 p,vec3 n,out float fall,out vec3 ld){
  vec3 d=vec3(uLight.xy-p,uLight.z);float dist=length(d);ld=d/dist;
  fall=1./(1.+pow(dist/uRadius,2.));
  return max(dot(n,ld),0.);
}

void main(){
  vec2 fc=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y);
  vec2 p=floor(fc);
  vec4 here=M(p);
  vec2 wp=p+vec2(0.,uScroll);
  // plaster: faint low-frequency relief, scrolls with the page
  float big=noise(wp*.035)*.6+noise(wp*.11)*.4;
  float fine=noise(wp*.5);
  float nx=noise((wp+vec2(1.,0.))*.18)-noise((wp-vec2(1.,0.))*.18);
  float ny=noise((wp+vec2(0.,1.))*.18)-noise((wp-vec2(0.,1.))*.18);
  vec3 n=normalize(vec3(-nx*.22,-ny*.22,1.));
  vec3 albedo=uWall*(.95+.05*big+.03*fine);

  float fall;vec3 ld;
  float lam=lampAt(p,n,fall,ld);
  vec3 vis=trace(p,here.r*64.,40);
  vec3 amb=mix(uAmbient2,uAmbient,clamp(fc.y/uRes.y,0.,1.));
  vec3 col=albedo*(amb+uLightCol*lam*fall*vis*1.4);

  // in-scatter: dusty air above the page, sampled at dithered heights
  vec3 v1=vec3(0.);vec3 vsum=vec3(0.);
  for(int k=0;k<6;k++){
    float bj=bayer4(p+vec2(float(k)*1.7,float(k)*2.3));
    vec3 v=trace(p,(float(k)+bj)*7.,10);
    vsum+=v; if(k==1)v1=v;
  }
  vsum/=6.;
  float dust=.8+.2*noise(wp*.05+vec2(uTime*.04,-uTime*.025));
  float volFall=1./(1.+pow(length(uLight.xy-p)/(uRadius*.75),2.));
  col+=uLightCol*vsum*dust*volFall*uVol;

  // motes catching the beam
  vec2 mp=floor(p+vec2(uTime*1.3,-uTime*2.1+uScroll*.5));
  col+=uLightCol*step(.9975,hash(mp+7.))*(v1.r+v1.g+v1.b)*.73*volFall;

  // glass body: cool refractive interior, fresnel darkening, lit rim and crescent
  if(here.g>.5){
    float gx=M(p+vec2(1,0)).b-M(p-vec2(1,0)).b;
    float gy=M(p+vec2(0,1)).b-M(p-vec2(0,1)).b;
    float e=M(p+vec2(1,0)).g+M(p-vec2(1,0)).g+M(p+vec2(0,1)).g+M(p-vec2(0,1)).g;
    float rim=1.-step(3.5,e);
    float th=here.b;
    vec2 gd=-vec2(gx,gy);float gl=length(gd);vec2 nd=gl>1e-4?gd/gl:vec2(0.);
    float side=dot(nd,normalize(uLight.xy-p+1e-4));
    vec2 rp=p-nd*(1.-th)*12.;
    float rf;vec3 rld;float rl=lampAt(rp,vec3(0,0,1),rf,rld);
    vec3 behind=uWall*(amb+uLightCol*rl*rf*1.2);
    vec3 cold=vec3(.03,.075,.09);
    float edge=1.-th;
    vec3 g=mix(cold,behind*vec3(.55,.8,.88),.55);
    g=mix(g,cold*.6,smoothstep(.55,.95,edge)*.6);
    float crescent=smoothstep(.25,.6,side)*smoothstep(.3,.5,edge)*(1.-smoothstep(.62,.8,edge));
    float hot=smoothstep(.75,.95,side)*smoothstep(.15,.25,edge)*(1.-smoothstep(.3,.42,edge));
    float back=smoothstep(.3,.8,-side)*smoothstep(.6,.85,edge);
    float tt=uTime*.3;
    float inner=caustic(p*.03+vec2(0.,tt*.05),tt)*smoothstep(.45,.9,th);
    float lf=max(fall,.35);
    g+=uLightCol*(crescent*.55+hot*1.6+rim*(.25+.6*max(side,0.)))*lf;
    g+=uLightCol*back*.35*lf;
    g+=uLightCol*inner*.28*lf;
    col=g;
  }
  col=col/(1.+col*.5);
  gl_FragColor=vec4(snapPal(col,fc),1.);
}`;

const hexToRgb = (h) => [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);

function weakDevice() {
  const mem = navigator.deviceMemory;
  const cores = navigator.hardwareConcurrency;
  return (
    navigator.connection?.saveData === true ||
    (mem !== undefined && mem < 4) ||
    (cores !== undefined && cores < 4)
  );
}

export function createLightfield(canvas, options = {}) {
  const o = {
    lightColor: [1.18, 0.66, 0.32],
    ambient: [0.09, 0.2, 0.25],
    ambient2: [0.05, 0.12, 0.17],
    wall: [0.52, 0.46, 0.4],
    radius: 140,
    lampHeight: 56,
    disperse: 0.08,
    vol: 0.17,
    home: [0.62, 0.2],
    ...options,
  };
  const root = document.documentElement;
  const fail = () => {
    root.classList.add("no-lightfield");
    root.classList.remove("has-lightfield", "lightfield-ready");
    return null;
  };
  if (weakDevice()) return fail();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  // Note: do not pass depth:false here; ANGLE on Metal then presents a black canvas.
  const gl = canvas.getContext("webgl", {
    antialias: false,
    alpha: false,
    failIfMajorPerformanceCaveat: true,
    powerPreference: "low-power",
  });
  if (!gl) return fail();
  let lost = false;

  // Compile without blocking: with KHR_parallel_shader_compile the driver builds
  // the program in the background and the first frame waits for it.
  const parallel = gl.getExtension("KHR_parallel_shader_compile");
  const shader = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    gl.attachShader(prog, s);
    return s;
  };
  const prog = gl.createProgram();
  const shaders = [
    shader(gl.VERTEX_SHADER, VERT),
    shader(gl.FRAGMENT_SHADER, FRAG.replaceAll("PALN", String(PALETTE.length))),
  ];
  gl.linkProgram(prog);
  const U = {};
  let linked = false;
  // returns true once the program is usable; disables the light pass on failure
  function programReady() {
    if (linked) return true;
    if (parallel && !gl.getProgramParameter(prog, parallel.COMPLETION_STATUS_KHR)) return false;
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn("Lightfield disabled:", shaders.map((x) => gl.getShaderInfoLog(x)).join(" ") || "link failed");
      lost = true;
      fail();
      return false;
    }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    for (const n of ["uMask", "uRes", "uLight", "uLightCol", "uAmbient", "uAmbient2", "uWall", "uTime", "uRadius", "uDisperse", "uVol", "uScroll", "uPal"])
      U[n] = gl.getUniformLocation(prog, n);
    gl.uniform3fv(U.uPal, new Float32Array(PALETTE.flatMap(hexToRgb)));
    gl.uniform1i(U.uMask, 0);
    linked = true;
    return true;
  }
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  for (const [k, v] of [
    [gl.TEXTURE_MIN_FILTER, gl.LINEAR],
    [gl.TEXTURE_MAG_FILTER, gl.LINEAR],
    [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE],
    [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE],
  ])
    gl.texParameteri(gl.TEXTURE_2D, k, v);

  const mask = document.createElement("canvas");
  const mx = mask.getContext("2d");
  const qs = new URLSearchParams(location.search);
  const pinned = qs.get("light")?.split(",").map(Number).filter(Number.isFinite);
  const frozen = qs.has("t") && Number.isFinite(Number(qs.get("t"))) ? Number(qs.get("t")) : null;
  const pin = pinned?.length === 2 ? pinned : null;
  const light = { x: (pin ?? o.home)[0], y: (pin ?? o.home)[1], tx: 0, ty: 0, lastUser: -1e9 };
  light.tx = light.x;
  light.ty = light.y;
  let W = 0, H = 0, S = 4, extraScale = 0;
  let dirty = true, maskDirty = true, last = 0, raf = 0, shown = false, lastT = 0;
  const t0 = performance.now();
  let slowFrames = 0, sampled = 0, prevNow = 0, idleAllowed = true;
  const listeners = new Set();

  function resize() {
    const vw = innerWidth, vh = innerHeight;
    if (!vw || !vh) return; // collapsed or hidden viewport: nothing to light
    S = (vw < 700 ? 2 : Math.max(3, Math.round(vw / 360))) + extraScale;
    W = Math.ceil(vw / S);
    H = Math.ceil(vh / S);
    canvas.width = W;
    canvas.height = H;
    canvas.style.width = `${W * S}px`;
    canvas.style.height = `${H * S}px`;
    mask.width = W;
    mask.height = H;
    gl.viewport(0, 0, W, H);
    maskDirty = dirty = true;
    // resizing clears the drawing buffer: repaint now, not on the next tick
    if (linked && !lost) render();
    wake();
  }

  function drawGlass(r, h) {
    const x = r.left / S, y = r.top / S, w = r.width / S, hh = r.height / S;
    const cx = x + w / 2;
    const P = (u, v) => [cx + u * w, y + v * hh];
    mx.save();
    mx.beginPath();
    // vase: flared lip, narrow neck, round belly
    mx.moveTo(...P(-0.21, 0.02));
    mx.lineTo(...P(0.21, 0.02));
    mx.bezierCurveTo(...P(0.13, 0.08), ...P(0.11, 0.2), ...P(0.13, 0.3));
    mx.bezierCurveTo(...P(0.5, 0.45), ...P(0.52, 0.92), ...P(0.18, 0.98));
    mx.lineTo(...P(-0.18, 0.98));
    mx.bezierCurveTo(...P(-0.52, 0.92), ...P(-0.5, 0.45), ...P(-0.13, 0.3));
    mx.bezierCurveTo(...P(-0.11, 0.2), ...P(-0.13, 0.08), ...P(-0.21, 0.02));
    mx.closePath();
    mx.clip();
    // blue channel = glass thickness, thickest in the belly
    const g = mx.createRadialGradient(x + w * 0.42, y + hh * 0.55, 1, cx, y + hh * 0.6, Math.max(w, hh) * 0.55);
    g.addColorStop(0, `rgb(${h},255,255)`);
    g.addColorStop(1, `rgb(${h},255,30)`);
    mx.fillStyle = g;
    mx.fillRect(x - 2, y - 2, w + 4, hh + 4);
    mx.restore();
  }

  const range = document.createRange();
  function drawText(el, r) {
    const cs = getComputedStyle(el);
    mx.font = `${cs.fontStyle} ${cs.fontWeight} ${parseFloat(cs.fontSize) / S}px ${cs.fontFamily}`;
    mx.textBaseline = "alphabetic";
    if ("letterSpacing" in mx) mx.letterSpacing = `${(parseFloat(cs.letterSpacing) || 0) / S}px`;
    const asc = parseFloat(el.dataset.lightAscent || "0.8");
    const upper = cs.textTransform === "uppercase";
    // word by word, so wrapped lines land where the browser put them
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let node; (node = walker.nextNode()); ) {
      for (const m of node.nodeValue.matchAll(/\S+/g)) {
        range.setStart(node, m.index);
        range.setEnd(node, m.index + m[0].length);
        const wr = range.getBoundingClientRect();
        if (wr.width) mx.fillText(upper ? m[0].toUpperCase() : m[0], wr.left / S, (wr.top + wr.height * asc) / S);
      }
    }
  }

  function drawMask() {
    if (!W || !H) return;
    mx.fillStyle = "#000";
    mx.fillRect(0, 0, W, H);
    const vh = innerHeight;
    for (const el of document.querySelectorAll("[data-light]")) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -80 || r.top > vh + 80 || r.width === 0) continue;
      let height = parseFloat(el.dataset.light) || 0;
      // a raised card casts a longer shadow
      if (el.dataset.lightLift && el.matches(":hover, :focus-within")) height = parseFloat(el.dataset.lightLift);
      const h = Math.min(255, Math.round((height / 64) * 255));
      mx.fillStyle = `rgb(${h},0,0)`;
      if (el.dataset.lightText !== undefined) drawText(el, r);
      else if (el.dataset.lightGlass !== undefined) drawGlass(r, h);
      else {
        mx.beginPath();
        mx.rect(r.left / S, r.top / S, r.width / S, r.height / S);
        mx.fill();
      }
    }
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mask);
    maskDirty = false;
  }

  const motion = () => !reduced.matches && !pin;
  function aim(e) {
    if (!motion()) return;
    light.tx = e.clientX / innerWidth;
    light.ty = e.clientY / innerHeight;
    light.lastUser = performance.now();
    dirty = true;
    wake();
  }
  addEventListener("pointermove", (e) => e.pointerType === "mouse" && aim(e), { passive: true });
  addEventListener("pointerdown", aim, { passive: true });
  const invalidate = () => {
    maskDirty = dirty = true;
    wake();
  };
  addEventListener("scroll", invalidate, { passive: true });
  addEventListener("resize", resize);
  document.addEventListener("pointerover", (e) => e.target.closest?.("[data-light-lift]") && invalidate());
  document.addEventListener("pointerout", (e) => e.target.closest?.("[data-light-lift]") && invalidate());
  document.addEventListener("focusin", invalidate);
  new ResizeObserver(invalidate).observe(document.body);
  document.fonts?.ready.then(invalidate);
  document.addEventListener("visibilitychange", () => (document.hidden ? cancelAnimationFrame(raf) : wake()));
  reduced.addEventListener?.("change", invalidate);
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    lost = true;
    cancelAnimationFrame(raf);
    fail();
  });

  function wake() {
    if (lost || document.hidden) return;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(frame);
  }

  function frame(now) {
    const animating = motion() && idleAllowed;
    const active = now - light.lastUser < 1500;
    const interval = active ? 1000 / 30 : 1000 / 15;
    if (!(animating || dirty || maskDirty) && linked) return;
    raf = requestAnimationFrame(frame);
    if (now - last < interval) return;
    if (!W || !H) return resize();
    if (!programReady()) {
      if (lost) cancelAnimationFrame(raf);
      return;
    }
    // adaptive quality: if frames keep arriving late, lower the resolution once,
    // then stop the idle animation (light still follows input)
    if (prevNow && !document.hidden) {
      sampled++;
      if (now - prevNow > interval * 2.5) slowFrames++;
      if (sampled >= 60) {
        if (slowFrames > 40) {
          if (extraScale === 0) {
            extraScale = 1;
            resize();
          } else idleAllowed = false;
        }
        sampled = slowFrames = 0;
      }
    }
    prevNow = now;
    last = now;
    lastT = frozen ?? (reduced.matches ? 3 : (now - t0) / 1000);
    if (motion() && idleAllowed && now - light.lastUser > 6000) {
      // idle: the lamp drifts slowly over the hero
      light.tx = o.home[0] + Math.sin(lastT * 0.13) * 0.24;
      light.ty = o.home[1] + Math.sin(lastT * 0.21) * 0.1;
    }
    const k = motion() ? 0.14 : 1;
    const moved = Math.abs(light.tx - light.x) + Math.abs(light.ty - light.y) > 0.0005;
    light.x += (light.tx - light.x) * k;
    light.y += (light.ty - light.y) * k;
    render();
    if (dirty || moved) for (const fn of listeners) fn({ x: light.x * innerWidth, y: light.y * innerHeight });
    dirty = moved; // keep easing toward the target even when idle drift is off
  }

  function render() {
    if (maskDirty) drawMask();
    gl.uniform2f(U.uRes, W, H);
    gl.uniform3f(U.uLight, light.x * W, light.y * H, o.lampHeight);
    gl.uniform3fv(U.uLightCol, o.lightColor);
    gl.uniform3fv(U.uAmbient, o.ambient);
    gl.uniform3fv(U.uAmbient2, o.ambient2);
    gl.uniform3fv(U.uWall, o.wall);
    gl.uniform1f(U.uTime, lastT);
    gl.uniform1f(U.uRadius, o.radius);
    gl.uniform1f(U.uDisperse, o.disperse);
    gl.uniform1f(U.uVol, o.vol);
    gl.uniform1f(U.uScroll, scrollY / S);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!shown) {
      // reveal the canvas only once it holds a real frame
      shown = true;
      root.classList.add("lightfield-ready");
    }
  }


  root.classList.add("has-lightfield");
  resize();
  return {
    onLight(fn) {
      listeners.add(fn);
      dirty = true;
      wake();
    },
    invalidate,
  };
}

// Light the DOM to match: surfaces marked data-lit get the lamp direction and
// intensity, quantized to whole steps so edges stay crisp pixel lines.
export function lightSurfaces({ x, y }) {
  const els = [...document.querySelectorAll("[data-lit]")];
  const vh = innerHeight;
  const reach = Math.max(innerWidth, 700) * 0.55;
  const rects = els.map((el) => el.getBoundingClientRect());
  rects.forEach((r, i) => {
    if (r.bottom < 0 || r.top > vh) return;
    const dx = r.left + r.width / 2 - x;
    const dy = r.top + r.height / 2 - y;
    const d = Math.hypot(dx, dy) || 1;
    const lit = Math.round((1 / (1 + (d / reach) ** 2)) * 4) / 4;
    const s = els[i].style;
    s.setProperty("--lx", String(Math.round(-dx / d)));
    s.setProperty("--ly", String(Math.round(-dy / d)));
    s.setProperty("--lit", String(lit));
    s.setProperty("--px", `${Math.round(x - r.left)}px`);
    s.setProperty("--py", `${Math.round(y - r.top)}px`);
  });
}
