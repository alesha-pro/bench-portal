const $ = id => document.getElementById(id);
const canvas = $('palace');
const query = new URLSearchParams(location.search);
const capture = query.has('capture');
document.body.classList.toggle('film', query.has('film'));
window.TOTAL_DURATION = 30.0;

async function openCathedral() {
  const gl = canvas.getContext('webgl2', {
    alpha: false, antialias: false, depth: false, stencil: false,
    preserveDrawingBuffer: capture, powerPreference: 'high-performance'
  });
  if (!gl) throw new Error('This cathedral requires a browser with WebGL2 enabled.');
  const paths = ['fullscreen.vert', 'cathedral.frag', 'glow.frag', 'finish.frag'];
  const bundle = document.getElementById('shader-sources');
  const embedded = bundle && JSON.parse(bundle.textContent);
  const sources = await Promise.all(paths.map(async path => {
    if (embedded) return embedded[path];
    const response = await fetch('shaders/' + path);
    if (!response.ok) throw new Error('Could not load ' + path);
    return response.text();
  }));
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
    return shader;
  }
  const vertex = compile(gl.VERTEX_SHADER, sources[0]);
  const programs = sources.slice(1).map(source => {
    const prog = gl.createProgram();
    const frag = compile(gl.FRAGMENT_SHADER, source);
    gl.attachShader(prog, vertex);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.deleteShader(frag);
    const loc = {};
    for (let i = 0; i < gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS); i++) {
      const {name} = gl.getActiveUniform(prog, i);
      loc[name] = gl.getUniformLocation(prog, name);
    }
    return {prog, loc};
  });
  gl.deleteShader(vertex);
  gl.disable(gl.DITHER);
  const [scene, glow, finish] = programs;
  let targets = [], density = 1, width, height, sceneW, sceneH, smallW, smallH;
  function target(w, h, mipmap) {
    const tex = gl.createTexture(), fb = gl.createFramebuffer();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texStorage2D(gl.TEXTURE_2D, mipmap ? 1 + Math.floor(Math.log2(Math.max(w,h))) : 1, gl.RGBA8, w, h);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mipmap ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE)
      throw new Error('Could not allocate the scene framebuffer.');
    return {tex, fb};
  }
  function resize() {
    const ratio = capture ? 1 : Math.min(devicePixelRatio, 1.5, 1650 / innerWidth) * density;
    const w = Math.max(2, Math.round(innerWidth * ratio)), h = Math.max(2, Math.round(innerHeight * ratio));
    if (w === width && h === height) return;
    for (const old of targets) {
      gl.deleteFramebuffer(old.fb);
      gl.deleteTexture(old.tex);
    }
    canvas.width = width = w;
    canvas.height = height = h;
    sceneW = capture ? Math.round(w * 1.5) : w;
    sceneH = capture ? Math.round(h * 1.5) : h;
    smallW = sceneW >> 1; smallH = sceneH >> 1;
    targets = [target(sceneW, sceneH, false), target(smallW, smallH, true)];
  }
  function pass(program, framebuffer, w, h) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.viewport(0, 0, w, h);
    gl.useProgram(program.prog);
    gl.uniform2f(program.loc.uSize, w, h);
  }
  const draw = () => gl.drawArrays(gl.TRIANGLES, 0, 3);
  let t = 0, playing = !capture, auto = true, position = [0,0,0], yaw = 0, pitch = 0;
  const wrap = t => ((t % 30) + 30) % 30;
  function paint() {
    resize();
    const [color, bloom] = targets;
    const light = Number($('glow').value) / 100;
    pass(scene, color.fb, sceneW, sceneH);
    gl.uniform1f(scene.loc.uTime, t);
    gl.uniform1f(scene.loc.uFold, Number($('fold').value) / 100);
    gl.uniform1f(scene.loc.uGlow, light);
    gl.uniform1i(scene.loc.uPalette, Number($('palette').value));
    gl.uniform1i(scene.loc.uFree, !auto);
    gl.uniform3fv(scene.loc.uTravel, position);
    gl.uniform2f(scene.loc.uLook, yaw, pitch);
    draw();
    pass(glow, bloom.fb, smallW, smallH);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, color.tex);
    gl.uniform1i(glow.loc.uScene, 0);
    draw();
    pass(finish, null, width, height);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, bloom.tex);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.uniform1i(finish.loc.uScene, 0);
    gl.uniform1i(finish.loc.uBloom, 1);
    gl.uniform1f(finish.loc.uGlow, light);
    draw();
    $('clock').textContent = '00:' + String(Math.floor(t)).padStart(2,'0');
    $('progress').style.transform = 'scaleX(' + t / 30 + ')';
    $('chapter').textContent = auto ? (t < 13 ? 'The gilded nave' : t < 24 ? 'The octagonal atrium' : 'The lower gallery') : 'Mouse look · WASD';
  }
  function showState() {
    $('auto').checked = auto;
    $('fly-help').hidden = auto;
    $('mode').textContent = auto ? 'Auto showcase' : 'Free flight';
    $('pause').classList.toggle('paused', !playing);
    $('pause').setAttribute('aria-label', (playing ? 'Pause ' : 'Resume ') + (auto ? 'showcase' : 'flight'));
  }
  function smooth(a,b,x) {
    const f = Math.max(0, Math.min(1, (x-a)/(b-a)));
    return f*f*(3-2*f);
  }
  function setAuto(value) {
    if (auto && !value) {
      const f = t/30, wave = f*2*Math.PI;
      const lean = smooth(.418,.619,f)*(1-smooth(.688,.864,f));
      position = [.48*Math.sin(wave)-.57*Math.sin(2*wave)+.64*lean,
        2.18+.30*Math.sin(wave)-10.5*smooth(.530,.813,f), -4+24*f+.52*Math.sin(wave)];
      const hold = .76*smooth(.46,.61,f)*(1-smooth(.73,.86,f));
      position[2] += (12+(f-.67)*6-position[2])*hold;
      yaw = .102*Math.sin(wave+.23)-.14*lean;
      pitch = .104+.075*Math.sin(wave+.52)-1.48*lean;
      const target = [-position[0]*.76,-4.1,12-position[2]];
      const len = Math.hypot(...target), blend = lean*.67;
      const dx = Math.sin(yaw)*Math.cos(pitch)*(1-blend) + blend*target[0]/len;
      const dy = Math.sin(pitch)*(1-blend) + blend*target[1]/len;
      const dz = Math.cos(yaw)*Math.cos(pitch)*(1-blend) + blend*target[2]/len;
      yaw = Math.atan2(dx,dz); pitch = Math.atan2(dy,Math.hypot(dx,dz));
    }
    auto = value; playing = true; showState(); paint();
  }
  const keys = new Set();
  const pointers = new Map();
  let touchForward = 0, touchRight = 0;
  function navigate(dt) {
    const forward = +keys.has('KeyW') - +keys.has('KeyS') + touchForward;
    const side = +keys.has('KeyD') - +keys.has('KeyA') + touchRight;
    const lift = +keys.has('KeyE') - +keys.has('KeyQ');
    const step = dt * Number($('speed').value)/100 * 2.6 / Math.max(1,Math.hypot(forward,side,lift));
    position[0] = Math.max(-6.86, Math.min(6.86, position[0]+step*(Math.sin(yaw)*Math.cos(pitch)*forward+Math.cos(yaw)*side)));
    position[1] += step*(Math.sin(pitch)*forward+lift);
    position[2] += step*(Math.cos(yaw)*Math.cos(pitch)*forward-Math.sin(yaw)*side);
    position[1] %= 10.5; position[2] %= 24;
  }
  canvas.addEventListener('pointerdown', e => {
    if (auto) return;
    canvas.focus(); canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, {x:e.clientX, y:e.clientY, move:e.pointerType==='touch' && e.clientX < innerWidth*.44});
  });
  canvas.addEventListener('pointermove', e => {
    const start = pointers.get(e.pointerId);
    if (!start || auto) return;
    if (start.move) {
      touchRight = Math.max(-1,Math.min(1,(e.clientX-start.x)/65));
      touchForward = Math.max(-1,Math.min(1,(start.y-e.clientY)/65));
    } else {
      yaw += (e.clientX-start.x)*.0032;
      pitch = Math.max(-1.53,Math.min(1.53,pitch-(e.clientY-start.y)*.0032));
      start.x = e.clientX; start.y = e.clientY;
    }
    if (!playing) paint();
  });
  canvas.addEventListener('lostpointercapture', e => {
    if (pointers.get(e.pointerId)?.move) touchForward=touchRight=0;
    pointers.delete(e.pointerId);
  });
  addEventListener('keydown', e => {
    if (!auto && !['INPUT','SELECT'].includes(e.target.tagName)) keys.add(e.code);
    if (e.key==='Escape') showControls(false);
  });
  addEventListener('keyup', e => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());
  function showControls(open) {
    $('settings').hidden = !open;
    $('controls').setAttribute('aria-expanded', String(open));
  }
  $('controls').onclick = () => showControls($('settings').hidden);
  $('close').onclick = () => { showControls(false); $('controls').focus(); };
  $('auto').onchange = e => setAuto(e.target.checked);
  $('pause').onclick = () => { playing = !playing; showState(); };
  function displayValues() {
    $('fold-out').textContent = Math.round((.08+.76*Number($('fold').value)/100)*180/Math.PI)+'°';
    $('speed-out').textContent = (Number($('speed').value)/100).toFixed(2)+'×';
    $('glow-out').textContent = $('glow').value+'%';
  }
  for (const id of ['fold','speed','glow','palette']) $(id).oninput = () => { displayValues(); paint(); };
  window.renderAt = seconds => {
    if (!Number.isFinite(seconds)) throw new TypeError('Time must be finite');
    t = wrap(seconds); auto = true; playing = false;
    showState(); paint();
  };
  addEventListener('resize', paint);
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault(); playing = false;
    $('loading').textContent = 'Graphics context lost. Reload to reopen the cathedral.';
    $('loading').hidden = false;
  });
  showState(); displayValues(); paint();
  $('loading').hidden = true;
  let previous, fence, elapsed = 0, frames = 0;
  document.addEventListener('visibilitychange', () => { previous = undefined; });
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = previous === undefined ? 0 : (now-previous)/1000;
    previous = now;
    if (!playing || document.hidden) return;
    const speed = Number($('speed').value)/100;
    if (!auto) navigate(Math.min(.2,dt));
    t = wrap(t+dt*(auto ? speed : 1));
    elapsed += dt;
    if (fence) {
      if (gl.clientWaitSync(fence,0,0)===gl.TIMEOUT_EXPIRED) return;
      gl.deleteSync(fence);
    }
    if (!capture && elapsed>=2) {
      const rate = frames/elapsed;
      if (rate<23) density=Math.max(.40,density-.12);
      if (rate>48) density=Math.min(1,density+.06);
      elapsed=0; frames=0;
    }
    paint(); frames++;
    fence=gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE,0); gl.flush();
  }
  requestAnimationFrame(animate);
}
openCathedral().catch(error => {
  $('loading').textContent = error.message;
  console.error(error);
});
