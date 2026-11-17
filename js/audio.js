// Fully synthesised audio: no sample files to download.
// SFX are tiny WebAudio graphs; music is a generative koto / taiko sequencer that
// follows the stealth state (calm -> tense -> chase).
import { clamp } from './util.js';

const SCALE = [0, 1, 5, 7, 8]; // miyako-bushi ("in") scale
const note = (deg, oct = 0) => 146.83 * Math.pow(2, (SCALE[((deg % 5) + 5) % 5] + 12 * (Math.floor(deg / 5) + oct)) / 12);

export class AudioSys {
  constructor() {
    this.ctx = null;
    this.sfxVol = 0.8; this.musicVol = 0.6; this.muted = false; this.ducked = false;
    this.tension = 0; this.mode = 'menu';
    this.step16 = 0; this.nextT = 0; this.phrase = 0; this.lastDeg = 5;
    this.loops = {};
  }

  init() {
    if (this.ctx) { this.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.2;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.sfx = ctx.createGain(); this.music = ctx.createGain();
    this.sfx.connect(this.master); this.music.connect(this.master);
    // small plate-ish reverb from a generated impulse
    const len = Math.floor(ctx.sampleRate * 1.7), ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    this.rev = ctx.createConvolver(); this.rev.buffer = ir;
    const rg = ctx.createGain(); rg.gain.value = 0.5;
    this.rev.connect(rg); rg.connect(this.master);
    // shared noise
    const nl = ctx.sampleRate * 2, nb = ctx.createBuffer(1, nl, ctx.sampleRate), nd = nb.getChannelData(0);
    for (let i = 0; i < nl; i++) nd[i] = Math.random() * 2 - 1;
    this.noiseBuf = nb;
    // continuous beds: wind, slide scrape, wallrun scrape
    this.loops.wind = this.loop('bandpass', 520, 0.6, 0);
    this.loops.slide = this.loop('bandpass', 1900, 1.2, 0);
    this.loops.wall = this.loop('highpass', 2600, 0.7, 0);
    this.applyVolume();
    this.nextT = ctx.currentTime + 0.1;
  }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); }

  applyVolume() {
    if (!this.ctx) return;
    const m = this.muted || this.ducked ? 0 : 1;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(m, t, 0.05);
    this.sfx.gain.setTargetAtTime(this.sfxVol, t, 0.05);
    this.music.gain.setTargetAtTime(this.musicVol * 0.75, t, 0.05);
  }
  setVolumes(sfx, music) { this.sfxVol = sfx; this.musicVol = music; this.applyVolume(); }
  setMuted(m) { this.muted = m; this.applyVolume(); }
  setDucked(d) { this.ducked = d; this.applyVolume(); }

  // ------------------------------------------------------------ primitives
  loop(type, freq, q, vol) {
    const ctx = this.ctx, src = ctx.createBufferSource();
    src.buffer = this.noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(this.sfx);
    src.start();
    return { f, g };
  }
  tone(freq, dur, o = {}) {
    const ctx = this.ctx; if (!ctx) return;
    const t = (o.when ?? ctx.currentTime) + 0.001;
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(freq, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, o.to), t + (o.slide ?? dur));
    const v = o.vol ?? 0.3, a = o.attack ?? 0.004;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let last = osc;
    if (o.lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(o.lp, t); if (o.lpTo) f.frequency.exponentialRampToValueAtTime(o.lpTo, t + dur); last.connect(f); last = f; }
    last.connect(g);
    g.connect(o.dest || this.sfx);
    if (o.rev) { const s = ctx.createGain(); s.gain.value = o.rev; g.connect(s); s.connect(this.rev); }
    osc.start(t); osc.stop(t + dur + 0.05);
    return osc;
  }
  noise(dur, o = {}) {
    const ctx = this.ctx; if (!ctx) return;
    const t = (o.when ?? ctx.currentTime) + 0.001;
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
    src.playbackRate.value = o.rate || 1;
    const f = ctx.createBiquadFilter(); f.type = o.type || 'bandpass';
    f.frequency.setValueAtTime(o.freq || 1000, t); f.Q.value = o.q ?? 1;
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    const g = ctx.createGain(), v = o.vol ?? 0.3;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + (o.attack ?? 0.003));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(o.dest || this.sfx);
    if (o.rev) { const s = ctx.createGain(); s.gain.value = o.rev; g.connect(s); s.connect(this.rev); }
    src.start(t, Math.random() * 1.5, dur + 0.05);
  }

  // -------------------------------------------------------------------- sfx
  step(tile, vol = 0.6) {
    if (!this.ctx) return;
    if (tile) {
      this.noise(0.05, { freq: 1500 + Math.random() * 900, q: 5, vol: 0.2 * vol });
      this.tone(170 + Math.random() * 40, 0.06, { vol: 0.14 * vol, to: 90 });
    } else {
      this.noise(0.07, { type: 'lowpass', freq: 520, vol: 0.22 * vol });
    }
  }
  jump() { this.noise(0.16, { freq: 500, to: 1500, q: 0.8, vol: 0.14 }); }
  land(str, tile) {
    if (!this.ctx) return;
    this.tone(110, 0.14, { to: 45, vol: 0.38 * str });
    this.noise(0.12, { type: 'lowpass', freq: 900, vol: 0.3 * str });
    if (tile && str > 0.3) for (let i = 0; i < 3; i++) this.noise(0.04, { freq: 2200 + Math.random() * 1600, q: 7, vol: 0.12 * str, when: this.ctx.currentTime + 0.03 + i * 0.035 });
  }
  slide(on) { if (this.ctx) this.loops.slide.g.gain.setTargetAtTime(on ? 0.2 : 0, this.ctx.currentTime, 0.04); }
  wallrun(on) { if (this.ctx) this.loops.wall.g.gain.setTargetAtTime(on ? 0.1 : 0, this.ctx.currentTime, 0.04); }
  setWind(v) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.loops.wind.g.gain.setTargetAtTime(0.03 + v * 0.22, t, 0.15);
    this.loops.wind.f.frequency.setTargetAtTime(380 + v * 900, t, 0.15);
  }
  stopLoops() { if (!this.ctx) return; for (const k of ['slide', 'wall']) this.loops[k].g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03); }
  mantle(quick) { this.noise(quick ? 0.12 : 0.22, { type: 'lowpass', freq: 700, vol: 0.2 }); this.tone(140, 0.07, { vol: 0.14, to: 80 }); }
  roll() { this.noise(0.3, { type: 'lowpass', freq: 600, to: 250, vol: 0.28 }); }
  rope() { this.tone(300, 0.25, { type: 'triangle', to: 180, vol: 0.14 }); this.noise(0.1, { freq: 900, vol: 0.1 }); }
  hook() { this.noise(0.25, { freq: 900, to: 3600, q: 2, vol: 0.2 }); this.tone(980, 0.12, { type: 'square', vol: 0.06, when: this.ctx ? this.ctx.currentTime + 0.18 : 0 }); }
  deny() { this.tone(160, 0.12, { type: 'square', vol: 0.07 }); }
  coin(n = 0) {
    const f = note(5 + (n % 5), 2);
    this.tone(f, 0.28, { type: 'triangle', vol: 0.17, rev: 0.3 });
    this.tone(f * 2.01, 0.2, { vol: 0.07 });
  }
  pickup() { [0, 2, 4].forEach((d, i) => this.tone(note(5 + d, 1), 0.3, { type: 'triangle', vol: 0.16, rev: 0.3, when: this.ctx ? this.ctx.currentTime + i * 0.06 : 0 })); }
  cat() { [0, 2, 4, 7, 9].forEach((d, i) => this.tone(note(5 + d, 1), 0.5, { type: 'triangle', vol: 0.18, rev: 0.5, when: this.ctx ? this.ctx.currentTime + i * 0.08 : 0 })); }
  checkpoint() { [0, 3].forEach((d, i) => this.tone(note(10 + d, 1), 0.9, { vol: 0.14, rev: 0.6, when: this.ctx ? this.ctx.currentTime + i * 0.14 : 0 })); }
  whistle() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const o = this.tone(2350, 0.38, { vol: 0.13, when: t + i * 0.46, attack: 0.02, rev: 0.4 });
      if (o) { const l = this.ctx.createOscillator(), lg = this.ctx.createGain(); l.frequency.value = 26; lg.gain.value = 110; l.connect(lg); lg.connect(o.frequency); l.start(t + i * 0.46); l.stop(t + i * 0.46 + 0.45); }
    }
  }
  alert() { this.taiko(0, 0.9); this.taiko(this.ctx ? this.ctx.currentTime + 0.16 : 0, 0.7); this.whistle(); }
  suspicious() { this.tone(note(7, 1), 0.5, { type: 'triangle', vol: 0.12, rev: 0.5 }); this.tone(note(8, 1), 0.6, { type: 'triangle', vol: 0.1, rev: 0.5, when: this.ctx ? this.ctx.currentTime + 0.12 : 0 }); }
  throwS() { this.noise(0.14, { freq: 2600, to: 5200, q: 3, vol: 0.16 }); }
  clink() { this.tone(3100, 0.12, { type: 'triangle', vol: 0.14, rev: 0.3 }); this.noise(0.03, { freq: 4500, q: 4, vol: 0.2 }); }
  thunk() { this.tone(180, 0.1, { to: 70, vol: 0.3 }); this.noise(0.05, { type: 'lowpass', freq: 1200, vol: 0.25 }); }
  snuff() { this.noise(0.3, { type: 'lowpass', freq: 1800, to: 200, vol: 0.25 }); }
  smoke() { this.noise(0.9, { type: 'lowpass', freq: 2400, to: 180, vol: 0.4, rev: 0.4 }); this.tone(90, 0.3, { to: 40, vol: 0.35 }); }
  arrow() { this.noise(0.22, { freq: 1500, to: 600, q: 4, vol: 0.14 }); }
  bow() { this.tone(220, 0.12, { type: 'triangle', to: 120, vol: 0.12 }); }
  hurt() { this.tone(150, 0.25, { type: 'sawtooth', to: 60, vol: 0.28, lp: 900 }); this.noise(0.12, { type: 'lowpass', freq: 800, vol: 0.35 }); }
  splash() { this.noise(0.7, { type: 'lowpass', freq: 2600, to: 300, vol: 0.4, rev: 0.3 }); }
  ui() { this.noise(0.03, { freq: 1700, q: 6, vol: 0.2 }); this.tone(720, 0.05, { type: 'triangle', vol: 0.08 }); }
  buy() { this.pickup(); this.taiko(0, 0.4); }
  taiko(when, vol = 0.8, dest = null) {
    if (!this.ctx) return;
    const t = when || this.ctx.currentTime;
    this.tone(118, 0.42, { to: 46, slide: 0.16, vol: 0.6 * vol, when: t, dest: dest || this.sfx, rev: 0.35 });
    this.noise(0.09, { type: 'lowpass', freq: 800, vol: 0.4 * vol, when: t, dest: dest || this.sfx });
  }
  rim(when, vol = 0.5, dest = null) {
    this.noise(0.04, { freq: 2100, q: 3.5, vol: 0.35 * vol, when, dest: dest || this.sfx });
    this.tone(820, 0.03, { type: 'square', vol: 0.05 * vol, when, dest: dest || this.sfx });
  }
  koto(freq, when, vol = 0.2, dur = 1.5) {
    if (!this.ctx) return;
    this.tone(freq, dur, { type: 'sawtooth', vol, when, lp: 3200, lpTo: 500, dest: this.music, rev: 0.5, attack: 0.002 });
    this.tone(freq * 2.003, dur * 0.5, { type: 'triangle', vol: vol * 0.4, when, dest: this.music });
    this.noise(0.012, { freq: 3000, q: 1, vol: vol * 0.5, when, dest: this.music });
  }
  shamisen(freq, when, vol = 0.14) {
    this.tone(freq * 1.015, 0.22, { type: 'sawtooth', to: freq, slide: 0.03, vol, when, lp: 2600, lpTo: 700, dest: this.music, rev: 0.2, attack: 0.002 });
    this.noise(0.02, { freq: 1800, q: 2, vol: vol * 0.7, when, dest: this.music });
  }
  flute(freq, when, dur, vol = 0.07) {
    if (!this.ctx) return;
    const o = this.tone(freq * 0.97, dur, { vol, when, attack: dur * 0.3, to: freq, slide: dur * 0.25, dest: this.music, rev: 0.8 });
    if (o) { const l = this.ctx.createOscillator(), lg = this.ctx.createGain(); l.frequency.value = 5; lg.gain.value = freq * 0.012; l.connect(lg); lg.connect(o.frequency); l.start(when); l.stop(when + dur + 0.1); }
    this.noise(dur, { freq: freq * 2, q: 6, vol: vol * 0.6, when, attack: dur * 0.3, dest: this.music, rev: 0.5 });
  }
  win() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [5, 7, 9, 10, 12, 14].forEach((d, i) => this.koto(note(d, 0), t + i * 0.11, 0.24, 1.8));
    this.taiko(t + 0.7, 0.8);
  }
  caught() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.taiko(t, 1); this.taiko(t + 0.28, 0.8);
    [9, 8, 6, 5].forEach((d, i) => this.koto(note(d, -1), t + 0.1 + i * 0.2, 0.22, 1.4));
  }
  heartbeat(v) { this.tone(58, 0.16, { to: 38, vol: 0.3 * v }); }

  // ------------------------------------------------------------------ music
  // mode: 'menu' | 'calm' | 'tense' | 'chase' | 'off'
  setMode(mode) { this.mode = mode; }
  update(dt) {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    if (this.nextT < ctx.currentTime - 0.3) this.nextT = ctx.currentTime + 0.05;
    while (this.nextT < ctx.currentTime + 0.16) {
      this.tick(this.nextT, this.step16);
      const bpm = this.mode === 'chase' ? 152 : this.mode === 'tense' ? 104 : 80;
      this.nextT += 60 / bpm / 4;
      this.step16 = (this.step16 + 1) % 64;
    }
  }
  tick(t, s) {
    const m = this.mode;
    if (m === 'off') return;
    const bar = s % 16;
    if (m === 'chase') {
      // taiko drive + shamisen ostinato
      if ([0, 3, 6, 8, 11, 14].includes(bar)) this.taiko(t, bar === 0 || bar === 8 ? 0.75 : 0.5, this.music);
      if ([2, 5, 10, 13, 15].includes(bar)) this.rim(t, 0.5, this.music);
      const seq = [0, 0, 2, 0, 3, 0, 2, 1, 0, 0, 4, 0, 3, 2, 1, 0];
      if (bar % 2 === 0 || bar % 8 === 7) this.shamisen(note(seq[bar] + (s >= 32 ? 2 : 0), 0), t, 0.13);
      if (s % 32 === 0) this.koto(note(0, -1), t, 0.2, 1.2);
      return;
    }
    if (m === 'tense') {
      if (bar % 4 === 0) this.tone(55, 0.3, { to: 42, vol: 0.2, when: t, dest: this.music });
      if (bar % 8 === 4) this.rim(t, 0.25, this.music);
      if (bar === 0 || (bar === 10 && Math.random() < 0.6)) this.koto(note(this.lastDeg = clamp(this.lastDeg + (Math.random() < 0.5 ? -1 : 1), 1, 8), 0), t, 0.13, 1.6);
      if (s === 0) this.flute(note(6, 0), t, 2.4, 0.045);
      return;
    }
    // calm / menu: sparse koto phrases over a breathing drone
    if (s % 32 === 0) {
      this.tone(note(0, -2), 5.5, { vol: 0.09, when: t, attack: 1.6, dest: this.music });
      this.tone(note(3, -2), 5.5, { vol: 0.05, when: t, attack: 2.0, dest: this.music });
    }
    const pat = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0];
    if (pat[bar] && Math.random() < (m === 'menu' ? 0.85 : 0.7)) {
      const step = [-2, -1, -1, 1, 1, 2, 3][Math.floor(Math.random() * 7)];
      this.lastDeg = clamp(this.lastDeg + step, 0, 12);
      this.koto(note(this.lastDeg, 0), t, 0.17, 2.2);
      if (Math.random() < 0.25) this.koto(note(this.lastDeg + 2, 0), t + 0.09, 0.1, 1.8);
    }
    if (s === 16 && Math.random() < 0.8) this.flute(note(5 + Math.floor(Math.random() * 4), 0), t, 3.2, 0.05);
    if (bar === 0 && m === 'menu') this.taiko(t, 0.25, this.music);
  }
}
