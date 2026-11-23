/**
 * 100% Procedural WebAudio Cinematic Desert Score & Foley (starts on first tap):
 * - Wind (layered stereo pink/brown gusts)
 * - Sand hiss (elevated during Shot 3 tremor rivulets)
 * - Distant low seismic rumble (swells during Shot 3 tremor & walker approach)
 * - Heavy skyscraper footfalls (sub-bass impact + resonant desert tail)
 * - Deep mournful ancient horn when the walker kneels in Shot 6
 * - Sparse sad drone chord that swells tenderly at the touch (Shot 6 -> blue hour!)
 */

export function createAudioEngine() {
  let ctx = null;
  let master = null;
  let delayNode = null;
  let noiseBuffer = null;

  let windFilter = null, windGain = null;
  let hissFilter = null, hissGain = null;
  let rumbleGain = null;
  let droneGain = null;

  let started = false;

  function buildNoiseBuffer(audioCtx) {
    const len = audioCtx.sampleRate * 4;
    const buf = audioCtx.createBuffer(2, len, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + w * 0.0555179;
        b1 = 0.99332 * b1 + w * 0.0750759;
        b2 = 0.96900 * b2 + w * 0.1538520;
        b3 = 0.86650 * b3 + w * 0.3104856;
        b4 = 0.55000 * b4 + w * 0.5329522;
        b5 = -0.7616 * b5 - w * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.045;
        b6 = w * 0.115926;
      }
    }
    return buf;
  }

  function unlock() {
    if (started) {
      if (ctx && ctx.state === 'suspended') ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    try {
      ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      master = ctx.createGain();
      master.gain.setValueAtTime(0.001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.75, ctx.currentTime + 1.2);
      master.connect(ctx.destination);

      // Desert reverb / delay echo bus
      delayNode = ctx.createDelay(2.5);
      delayNode.delayTime.value = 0.64;
      const fb = ctx.createGain();
      fb.gain.value = 0.42;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 780;
      delayNode.connect(lp);
      lp.connect(fb);
      fb.connect(delayNode);
      lp.connect(master);

      noiseBuffer = buildNoiseBuffer(ctx);

      // 1. Desert wind bed
      const wSrc = ctx.createBufferSource();
      wSrc.buffer = noiseBuffer; wSrc.loop = true;
      windFilter = ctx.createBiquadFilter();
      windFilter.type = 'bandpass'; windFilter.frequency.value = 240; windFilter.Q.value = 1.8;
      windGain = ctx.createGain(); windGain.gain.value = 0.34;
      wSrc.connect(windFilter); windFilter.connect(windGain); windGain.connect(master);
      wSrc.start();

      // 2. Dry sand hiss
      const hSrc = ctx.createBufferSource();
      hSrc.buffer = noiseBuffer; hSrc.loop = true; hSrc.playbackRate.value = 1.48;
      hissFilter = ctx.createBiquadFilter();
      hissFilter.type = 'bandpass'; hissFilter.frequency.value = 3400; hissFilter.Q.value = 0.9;
      hissGain = ctx.createGain(); hissGain.gain.value = 0.08;
      hSrc.connect(hissFilter); hissFilter.connect(hissGain); hissGain.connect(master);
      hSrc.start();

      // 3. Distant low seismic tremor rumble
      const rSrc = ctx.createBufferSource();
      rSrc.buffer = noiseBuffer; rSrc.loop = true; rSrc.playbackRate.value = 0.5;
      const rLp = ctx.createBiquadFilter();
      rLp.type = 'lowpass'; rLp.frequency.value = 72;
      rumbleGain = ctx.createGain(); rumbleGain.gain.value = 0.001;
      rSrc.connect(rLp); rLp.connect(rumbleGain); rumbleGain.connect(master);
      rSrc.start();

      // 4. Sparse sad drone pad (D minor 9th: D2, A2, F3, E4 — swells gently at the touch!)
      droneGain = ctx.createGain();
      droneGain.gain.value = 0.0001;
      const droneLp = ctx.createBiquadFilter();
      droneLp.type = 'lowpass'; droneLp.frequency.value = 620;
      droneGain.connect(droneLp);
      droneLp.connect(master);
      droneLp.connect(delayNode);

      const droneNotes = [
        { f: 73.42, amp: 0.34, type: 'sine' },
        { f: 110.0, amp: 0.24, type: 'triangle' },
        { f: 174.61, amp: 0.16, type: 'sine' },
        { f: 329.63, amp: 0.08, type: 'sine' },
      ];
      for (const n of droneNotes) {
        const osc = ctx.createOscillator();
        osc.type = n.type;
        osc.frequency.value = n.f;
        const g = ctx.createGain();
        g.gain.value = n.amp;
        osc.connect(g);
        g.connect(droneGain);
        osc.start();
      }

      started = true;
    } catch {
      // Ignore blocked AudioContext
    }
  }

  function update(time, tod) {
    if (!started || !ctx || ctx.state !== 'running') return;
    const now = ctx.currentTime;
    const gust = 0.5 + 0.5 * Math.sin(time * 0.40) + 0.25 * Math.sin(time * 1.12 + 1.3);

    windFilter.frequency.setTargetAtTime(185 + gust * 220, now, 0.25);
    windGain.gain.setTargetAtTime(0.24 + gust * 0.18, now, 0.25);

    // Sand hiss intensifies during Shot 3 sand rivulets
    const hissTarget = 0.055 + gust * 0.055 + tod.tremor * 0.14;
    hissFilter.frequency.setTargetAtTime(2800 + gust * 1600, now, 0.2);
    hissGain.gain.setTargetAtTime(hissTarget, now, 0.2);

    // Deep low seismic rumble swells during Shot 3 tremor
    rumbleGain.gain.setTargetAtTime(0.02 + tod.tremor * 0.48, now, 0.35);

    // Sparse sad drone swells tenderly during the Shot 6 touch & lingers into blue hour!
    const droneTarget = Math.max(0.0001, tod.touchBlend * 0.28 + tod.blueHourBlend * 0.14);
    droneGain.gain.setTargetAtTime(droneTarget, now, 0.85);
  }

  function playWomanStep() {
    if (!started || !ctx || ctx.state !== 'running' || !noiseBuffer) return;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 1350 + Math.random() * 400; bp.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.linearRampToValueAtTime(0.06, now + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    src.connect(bp); bp.connect(g); g.connect(master);
    src.start(now, Math.random() * 2.4, 0.22);
  }

  function playWalkerBoom(distance = 100) {
    if (!started || !ctx || ctx.state !== 'running') return;
    const now = ctx.currentTime;
    const atten = Math.min(1.0, Math.max(0.18, 120 / Math.max(35, distance)));

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(56, now);
    osc.frequency.exponentialRampToValueAtTime(21, now + 1.05);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.001, now);
    g.gain.linearRampToValueAtTime(0.56 * atten, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0008, now + 1.85);

    osc.connect(g); g.connect(master); g.connect(delayNode);
    osc.start(now); osc.stop(now + 1.95);

    if (noiseBuffer) {
      const n = ctx.createBufferSource();
      n.buffer = noiseBuffer;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(190, now);
      lp.frequency.exponentialRampToValueAtTime(55, now + 1.2);
      const ng = ctx.createGain();
      ng.gain.setValueAtTime(0.001, now);
      ng.gain.linearRampToValueAtTime(0.42 * atten, now + 0.06);
      ng.gain.exponentialRampToValueAtTime(0.001, now + 1.35);
      n.connect(lp); lp.connect(ng); ng.connect(master);
      n.start(now, Math.random() * 2.0, 1.45);
    }
  }

  function playMournfulHorn() {
    if (!started || !ctx || ctx.state !== 'running') return;
    const now = ctx.currentTime;

    // Deep mournful brass/stone call (low D1 + A1 + F2 minor pathos descending gently)
    const base = 55.0; // A1
    const partials = [
      { mult: 0.5, type: 'sine', amp: 0.40, detune: 0 },
      { mult: 1.0, type: 'sawtooth', amp: 0.30, detune: -5 },
      { mult: 1.0, type: 'sawtooth', amp: 0.28, detune: +6 },
      { mult: 1.498, type: 'triangle', amp: 0.20, detune: -3 },
      { mult: 1.995, type: 'sawtooth', amp: 0.14, detune: +4 },
    ];

    const bus = ctx.createGain();
    bus.gain.setValueAtTime(0.0001, now);
    bus.gain.linearRampToValueAtTime(0.46, now + 1.1);
    bus.gain.setValueAtTime(0.42, now + 3.2);
    bus.gain.exponentialRampToValueAtTime(0.0008, now + 6.8);

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.Q.value = 3.0;
    lp.frequency.setValueAtTime(130, now);
    lp.frequency.exponentialRampToValueAtTime(620, now + 1.4);
    lp.frequency.exponentialRampToValueAtTime(220, now + 4.5);
    lp.frequency.exponentialRampToValueAtTime(95, now + 6.8);

    bus.connect(lp); lp.connect(master); lp.connect(delayNode);

    for (const p of partials) {
      const osc = ctx.createOscillator();
      osc.type = p.type;
      osc.frequency.setValueAtTime(base * p.mult * 0.98, now);
      osc.frequency.linearRampToValueAtTime(base * p.mult, now + 0.9);
      // Slight tragic downward sigh toward the end
      osc.frequency.linearRampToValueAtTime(base * p.mult * 0.94, now + 6.4);
      osc.detune.value = p.detune;
      const g = ctx.createGain();
      g.gain.value = p.amp;
      osc.connect(g); g.connect(bus);
      osc.start(now); osc.stop(now + 6.9);
    }
  }

  return {
    unlock,
    update,
    playWomanStep,
    playWalkerBoom,
    playMournfulHorn,
  };
}
