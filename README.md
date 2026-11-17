# NEZUMI — Rooftop Escape

A first-person rooftop parkour stealth game for the web, built for CrazyGames.

You are the Rat, a phantom thief in old Edo. Every night ends the same way: with the
magistrate's strongbox under your arm and the whole night watch between you and the kite
that carries you out of the city. Run the tiled roofs, stay out of the lantern light,
and do not get caught.

## Play

* **12 campaign nights** across four districts (dusk, moonrise, festival night, first light),
  an **Endless** mode and a **Daily Night** that is the same city for everyone that day.
* **Parkour**: run, leap, auto-vault, ledge climb, wall run and wall kick, slide down roofs,
  roll out of long drops, walk lantern lines, ride zip lines, grapple to gold rings.
* **Stealth**: sentries, street patrols and fire-tower lookouts with visible lantern light.
  Stay in a roof's shadow, sneak, snuff lanterns with shuriken, vanish in smoke.
* **Flow**: chaining moves builds speed and score. Three seals per night (Escaped, Ghost,
  Swift), a rank, koban to spend in the Hideout on eight upgrade lines, and one hidden
  lucky cat per night.

| Action | Keyboard / mouse | Touch |
| --- | --- | --- |
| Run / look | `W A S D` / mouse | left stick / drag right side |
| Leap, climb, wall kick | `Space` | LEAP |
| Sneak, slide, roll | `Shift` (or `C` to toggle) | SNEAK |
| Shuriken | left click or `F` | STAR |
| Smoke bomb | `Q` | SMOKE |
| Grappling hook | `E` or right click | HOOK |
| Back to checkpoint | `R` | pause menu |
| Pause | `Esc` or `P` | II |

## Run it locally

No build step. Serve the folder with any static server and open it:

```bash
npx serve .
```

(ES modules need `http://`, so opening `index.html` straight from disk will not work.)

## Publish on CrazyGames

Upload the repository contents as the game build: `index.html`, `css/`, `js/`, `fonts/`
and `vendor/`. `tools/` and this README are not needed at runtime. Everything is local
except the CrazyGames SDK script itself; the build is about 1 MB.

SDK v3 integration lives in `js/sdk.js`:

* `SDK.init()` on boot, `loadingStart` / `loadingStop` around world generation.
* `gameplayStart` / `gameplayStop` on every transition in and out of live play
  (pause, capture, results, menus).
* `happytime()` on an S rank or a newly earned seal.
* Midgame ads between runs (next night / retry), never on the very first run.
* Rewarded ads: revive in place once per run, and double the koban on the results screen.
* Audio is muted while an ad plays and follows the platform's mute setting.
* Progress is stored through the SDK data module, with `localStorage` as the fallback.

Every SDK call is guarded, so the game also runs where the SDK is missing or disabled.

## Project layout

| File | What it does |
| --- | --- |
| `js/main.js` | Boot, game state, frame loop, scoring |
| `js/gfx.js` | Renderer: 3-band toon lighting, depth-based ink outline, bloom, sky |
| `js/world.js` | Procedural district generator and the collision world |
| `js/props.js` | Building parts: roofs, facades, trees, stalls, landmarks |
| `js/geo.js` | Flat-shaded vertex-colour geometry builder |
| `js/player.js` | First-person parkour controller and view-model arms |
| `js/actors.js` | Night watch AI, detection, projectiles, pickups, particles |
| `js/audio.js` | Synthesised sound effects and adaptive music (no audio files) |
| `js/ui.js`, `css/style.css` | HUD, menus, hideout, results |
| `js/config.js` | Palettes, nights, upgrades, guard barks |
| `js/sdk.js`, `js/save.js`, `js/input.js` | CrazyGames SDK wrapper, saves, input |
| `js/touch.js` | Touch joystick (left half) and drag-to-look (right half) |
| `js/diag.js` | Touch diagnostics saved to the artifact's database; inactive outside claude.ai |

## Credits

* [three.js](https://threejs.org) (MIT), bundled in `vendor/three.min.js`.
* Fonts: Oswald and Yuji Syuku, both under the SIL Open Font License 1.1.
  `fonts/brush-subset.woff2` holds only the glyphs the game uses; regenerate it with
  `tools/subset-fonts.py` after changing any Japanese text.
