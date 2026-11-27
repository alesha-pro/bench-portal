const packedResources = JSON.parse(
  document.getElementById('packed-resources')?.textContent ?? '{}',
);
const load = async (url) => {
  const response = await fetch(packedResources[url] ?? url);
  if (!response.ok) throw new Error(`Could not load ${url}: ${response.status}`);
  return response;
};
export async function createRenderer(canvas) {
  const gl = canvas.getContext('webgl2', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance',
  });
  if (!gl) throw new Error('This observation requires WebGL2.');
  const floating = !!gl.getExtension('EXT_color_buffer_float');
  const files = ['fullscreen.vert', 'field.frag', 'down.frag', 'grade.frag'];
  const [sources, images] = await Promise.all([
    Promise.all(files.map(async (f) => (await load('shaders/' + f)).text())),
    Promise.all(
      ['turbulence.png', 'deep-sky.jpg'].map(async (f) =>
        createImageBitmap(await (await load('assets/' + f)).blob(), {
          colorSpaceConversion: 'none',
        }),
      ),
    ),
  ]);
  function compile(type, source) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, source);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
    return sh;
  }
  const vert = compile(gl.VERTEX_SHADER, sources[0]);
  function program(source) {
    const p = gl.createProgram();
    gl.attachShader(p, vert);
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, source));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const uniforms = {};
    for (let i = 0; i < gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); i++) {
      const name = gl.getActiveUniform(p, i).name;
      uniforms[name] = gl.getUniformLocation(p, name);
    }
    return { p, u: uniforms };
  }
  const [field, down, grade] = sources.slice(1).map(program);
  gl.bindVertexArray(gl.createVertexArray());
  const textures = images.map((image, i) => {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, i ? gl.CLAMP_TO_EDGE : gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB8, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    image.close();
    return tex;
  });
  let levels = [];
  function size(w, h) {
    if (levels.length && canvas.width === w && canvas.height === h) return;
    for (const { fb, tex } of levels) {
      gl.deleteFramebuffer(fb);
      gl.deleteTexture(tex);
    }
    canvas.width = w;
    canvas.height = h;
    levels = [];
    for (let i = 0; i < 6; i++) {
      const tex = gl.createTexture(),
        fb = gl.createFramebuffer();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texStorage2D(gl.TEXTURE_2D, 1, floating ? gl.RGBA16F : gl.RGBA8, w, h);
      for (const par of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER])
        gl.texParameteri(gl.TEXTURE_2D, par, gl.LINEAR);
      for (const par of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T])
        gl.texParameteri(gl.TEXTURE_2D, par, gl.CLAMP_TO_EDGE);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE)
        throw new Error('Incomplete radiance buffer.');
      levels.push({ w, h, tex, fb });
      w = Math.max(1, Math.floor(w / 2));
      h = Math.max(1, Math.floor(h / 2));
    }
  }
  function bind(unit, tex, loc) {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(loc, unit);
  }
  function target(level) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, level?.fb ?? null);
    gl.viewport(0, 0, level?.w ?? canvas.width, level?.h ?? canvas.height);
  }
  const draw = () => gl.drawArrays(gl.TRIANGLES, 0, 3);
  function render(params) {
    target(levels[0]);
    gl.useProgram(field.p);
    gl.uniform2f(field.u.resolution, canvas.width, canvas.height);
    for (const [key, value] of Object.entries(params)) gl.uniform1f(field.u[key], value);
    bind(0, textures[0], field.u.turbulence);
    bind(1, textures[1], field.u.sky);
    draw();
    gl.useProgram(down.p);
    for (let i = 1; i < levels.length; i++) {
      const prev = levels[i - 1];
      target(levels[i]);
      bind(0, prev.tex, down.u.src);
      gl.uniform2f(down.u.texel, 1 / prev.w, 1 / prev.h);
      gl.uniform1f(down.u.extractBright, i === 1 ? 1 : 0);
      draw();
    }
    target(null);
    gl.useProgram(grade.p);
    levels.forEach(({ tex }, i) => bind(i, tex, grade.u[i ? 'b' + i : 'scene']));
    draw();
  }
  function inspect() {
    const result = { floating, width: canvas.width, height: canvas.height, invalid: 0, peak: 0 };
    if (floating) {
      target(levels[0]);
      const data = new Float32Array(canvas.width * canvas.height * 4);
      gl.readPixels(0, 0, canvas.width, canvas.height, gl.RGBA, gl.FLOAT, data);
      for (let i = 0; i < data.length; i += 4) {
        if (!Number.isFinite(data[i] + data[i + 1] + data[i + 2])) result.invalid++;
        result.peak = Math.max(result.peak, data[i], data[i + 1], data[i + 2]);
      }
      target(null);
    }
    result.error = gl.getError();
    return result;
  }
  return { size, render, inspect };
}
