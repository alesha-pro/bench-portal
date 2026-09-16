export class AudioSys {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noise = null;
    const unlock = () => this.resume();
    addEventListener('pointerdown', unlock, { once: true });
    addEventListener('keydown', unlock, { once: true });
  }

  resume() {
    try {
      if (!this.ctx) {
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) return;
        this.ctx = new Context();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.28;
        const compressor = this.ctx.createDynamicsCompressor();
        compressor.threshold.value = -18;
        compressor.ratio.value = 5;
        this.master.connect(compressor);
        compressor.connect(this.ctx.destination);
        this.noise = this.ctx.createBuffer(1, this.ctx.sampleRate, this.ctx.sampleRate);
        const data = this.noise.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      }
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    } catch { /* Audio can be unavailable; gameplay remains independent. */ }
  }

  _tone(frequency, endFrequency, duration, volume, type = 'sine', delay = 0) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime + delay;
    const source = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    source.type = type;
    source.frequency.setValueAtTime(frequency, t);
    source.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), t + duration);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    source.connect(gain); gain.connect(this.master);
    source.start(t); source.stop(t + duration + 0.02);
    source.onended = () => { source.disconnect(); gain.disconnect(); };
  }

  _noise(duration, volume, frequency, delay = 0, type = 'lowpass') {
    if (!this.ctx || !this.noise) return;
    const t = this.ctx.currentTime + delay;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    source.buffer = this.noise;
    filter.type = type; filter.frequency.value = frequency; filter.Q.value = 0.7;
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    source.connect(filter); filter.connect(gain); gain.connect(this.master);
    source.start(t, Math.random() * 0.4); source.stop(t + duration + 0.01);
    source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

  fire(type = 'rifle') {
    this.resume();
    if (type === 'shotgun') {
      this._noise(0.28, 2.1, 2100); this._noise(0.065, 0.8, 8000);
      this._tone(145, 32, 0.3, 1.2, 'triangle');
      this._noise(0.09, 0.22, 1600, 0.25, 'bandpass');
      this._tone(180, 95, 0.07, 0.13, 'square', 0.39);
    } else if (type === 'marksman') {
      this._noise(0.19, 1.65, 3900); this._tone(165, 36, 0.25, 1.05, 'triangle');
      this._noise(0.1, 0.35, 950, 0.07); this._tone(1000, 300, 0.035, 0.08, 'square', 0.14);
    } else {
      this._noise(0.105, 1.05, 4300); this._tone(180, 55, 0.105, 0.6, 'triangle');
      this._tone(1500, 400, 0.025, 0.07, 'square', 0.035);
    }
  }
  reload(type = 'rifle') {
    this.resume();
    this._noise(0.08, 0.24, 2000, 0, 'bandpass');
    this._tone(270, 130, 0.09, 0.13, 'square');
    if (type === 'shell') this._tone(850, 390, 0.045, 0.16, 'triangle', 0.09);
  }
  reloadEnd() { this._noise(0.07, 0.35, 2600); this._tone(370, 140, 0.08, 0.15, 'square'); }
  hit(killed = false) { this._tone(killed ? 1100 : 620, killed ? 550 : 160, 0.09, 0.14, 'triangle'); this._noise(0.04, 0.16, 3000); }
  waveStart() { this.resume(); [220, 330, 440, 660].forEach((f, i) => this._tone(f, f * 1.02, 0.38, 0.15, 'triangle', i * 0.11)); }
  jump() { this._noise(0.14, 0.15, 600); this._tone(100, 160, 0.1, 0.1); }
  land() { this._noise(0.18, 0.6, 360); this._tone(85, 28, 0.14, 0.32); }
  melee() { this._noise(0.18, 0.35, 1400, 0, 'bandpass'); }
  empty() { this._tone(320, 170, 0.045, 0.1, 'square'); }
  switchWeapon() { this._noise(0.09, 0.18, 1600, 0, 'bandpass'); }
}
