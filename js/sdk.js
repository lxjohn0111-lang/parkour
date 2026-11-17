// CrazyGames SDK v3 wrapper. Every call is guarded so the game also runs when the
// SDK is missing, blocked or reports the 'disabled' environment (e.g. opened from disk).
export const SDK = {
  sdk: null,
  env: 'disabled',
  playing: false,
  adActive: false,
  onAdState: null, // (active:boolean) => void
  settingsListeners: [],

  async init() {
    try {
      const s = window.CrazyGames && window.CrazyGames.SDK;
      if (!s) return;
      await s.init();
      this.sdk = s;
      this.env = s.environment || 'disabled';
      try {
        s.game.addSettingsChangeListener((st) => this.settingsListeners.forEach((f) => f(st)));
      } catch (e) { /* older SDK builds */ }
    } catch (e) {
      console.warn('[sdk] init failed, running without CrazyGames services', e);
      this.sdk = null;
    }
  },
  get available() { return !!this.sdk && this.env !== 'disabled'; },
  _game(fn) {
    if (!this.available) return;
    try { this.sdk.game[fn](); } catch (e) { /* ignore */ }
  },
  loadingStart() { this._game('loadingStart'); },
  loadingStop() { this._game('loadingStop'); },
  gameplayStart() {
    if (this.playing) return;
    this.playing = true;
    this._game('gameplayStart');
  },
  gameplayStop() {
    if (!this.playing) return;
    this.playing = false;
    this._game('gameplayStop');
  },
  happytime() { this._game('happytime'); },

  get muted() {
    try { return !!(this.available && this.sdk.game.settings && this.sdk.game.settings.muteAudio); } catch (e) { return false; }
  },
  onSettings(fn) { this.settingsListeners.push(fn); },

  get isMobile() {
    try {
      if (this.available) {
        const t = this.sdk.user.systemInfo.device.type;
        if (t) return t !== 'desktop';
      }
    } catch (e) { /* fall through */ }
    return matchMedia('(pointer: coarse)').matches && 'ontouchstart' in window;
  },

  // Shows an ad. Resolves true when the ad played to the end.
  _ad(type) {
    return new Promise((resolve) => {
      if (!this.available) return resolve(type === 'rewarded' && !this.sdk); // no SDK at all: dev build, grant
      if (this.adActive) return resolve(false);
      let done = false;
      const finish = (ok) => {
        if (done) return;
        done = true;
        if (this.adActive) { this.adActive = false; this.onAdState && this.onAdState(false); }
        resolve(ok);
      };
      try {
        this.sdk.ad.requestAd(type, {
          adStarted: () => { this.adActive = true; this.onAdState && this.onAdState(true); },
          adFinished: () => finish(true),
          adError: () => finish(false),
        });
      } catch (e) { finish(false); }
      // never leave the game hanging if the SDK stays silent
      setTimeout(() => { if (!this.adActive) finish(false); }, 6000);
    });
  },
  midgame() { return this._ad('midgame'); },
  rewarded() { return this._ad('rewarded'); },

  // Persistent data: CrazyGames cloud save when available, localStorage otherwise.
  getItem(key) {
    try { if (this.available && this.sdk.data) return this.sdk.data.getItem(key); } catch (e) { /* fall through */ }
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  setItem(key, value) {
    try { if (this.available && this.sdk.data) { this.sdk.data.setItem(key, value); return; } } catch (e) { /* fall through */ }
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
  },
};
