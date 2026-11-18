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

  // ---- Progress: the CrazyGames data module when the SDK is running (saved to the player's
  // CrazyGames account and synced across devices), the browser's localStorage otherwise.
  get dataModule() {
    if (this._locked) return this._data;
    try { return this.available && this.sdk.data && typeof this.sdk.data.getItem === 'function' ? this.sdk.data : null; } catch (e) { return null; }
  },
  // Decide once where progress lives for this session. If the SDK only becomes ready after the
  // game has loaded (very slow network), saves keep going where they were read from, so a late
  // SDK can never overwrite the player's cloud progress with an empty local game.
  lockStorage() { this._data = this.dataModule; this._locked = true; },
  get storage() { return this.dataModule ? 'crazygames' : 'local'; },
  getItem(key) {
    const d = this.dataModule;
    if (d) { try { return d.getItem(key); } catch (e) { console.warn('[sdk] data.getItem failed', e); } }
    return this.localGet(key);
  },
  setItem(key, value) {
    const d = this.dataModule;
    if (d) { try { d.setItem(key, value); return true; } catch (e) { console.warn('[sdk] data.setItem failed', e); } }
    return this.localSet(key, value);
  },
  removeItem(key) {
    const d = this.dataModule;
    if (d) { try { d.removeItem(key); } catch (e) { /* ignore */ } }
    try { localStorage.removeItem(key); } catch (e) { /* storage blocked */ }
  },
  localGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  localSet(key, value) { try { localStorage.setItem(key, value); return true; } catch (e) { return false; } },
};
