# Audio sources (public/assets/audio)

Everything else the game plays is synthesised procedurally at runtime (`src/audio/bank.ts`, `src/audio/vocal.ts`):
mechanical foley, footsteps, impacts, explosions, bullet cracks/whizzes, impulse responses, wind/rain/room beds,
breathing, heartbeat, radio chatter, crows, drone rotor. The game works with zero downloaded files; the recordings
below replace the procedural gunshot and human-voice layers when they load (`manifest.json` lists them).

All files: trimmed, mono, loudness-normalised and re-encoded to Ogg Vorbis by us (sox/ffmpeg). Total ≈ 1.2 MB.

| Files | Source | Author | License |
|---|---|---|---|
| `guns/ka74_near*.ogg`, `guns/ka74_far*.ogg` | The Free Firearm Sound Library — AK-47 (`C_28P.wav` near, `C_31P.wav` mid) — https://opengameart.org/content/the-free-firearm-sound-library | Still North Media (Ben Jaszczak, Brian Nelson, Kevin Heras, Matthew Nanney) | CC0 1.0 |
| `guns/sg5k_near*.ogg`, `guns/sg5k_far*.ogg` | same library — Carl Gustav M45 9 mm SMG (`G_31P.wav` near, `G_20P.wav` mid) | Still North Media | CC0 1.0 |
| `guns/bk101_near*.ogg`, `guns/bk101_far*.ogg` | same library — Benelli Nova 12 ga pump (`O_21P.wav` near, `O_17P.wav` mid) and Charles Daly pump (`H_21P.wav` near) | Still North Media | CC0 1.0 |
| `guns/rivington_near*.ogg`, `guns/rivington_far*.ogg` | same library — Mosin Nagant bolt action (`M_21P.wav` near, `M_26P.wav` mid) | Still North Media | CC0 1.0 |
| `guns/cr75_near*.ogg`, `guns/cr75_far*.ogg` | same library — Walther PPQ 9 mm (`X_39P.wav` near, `X_31P.wav` mid) | Still North Media | CC0 1.0 |
| `vox/death_*.ogg`, `vox/pain_00..16.ogg`, `vox/grunt_*.ogg`, `vox/shout_*.ogg` | "Male Grunt/Yelling sounds" (`yelling sounds.zip`, 4 male vocalists) — https://opengameart.org/content/male-gruntyelling-sounds | HaelDB | dual-licensed OGA-BY 3.0 / **CC0** — used under CC0 |
| `vox/moan_*.ogg`, `vox/pain_17..21.ogg` | "grunts of male death and pain" (`death pain grunts.wav`, cut into single takes) — https://opengameart.org/content/grunts-male-death-and-pain | thebardofblasphemy | CC0 1.0 |

Processing notes:
- Gunshots: each single shot cut at its onset. "near" = first 140 ms (direct blast only; zone reverbs are added
  by the engine's convolvers), "far" = 1.5 s of the mid-distance recording including its natural outdoor tail.
  Peak-normalised to −0.3 dBFS, 48 kHz.
- Voices: silence-trimmed, DC removed, 8 ms / 80 ms fades, 32 kHz, peak-normalised; a per-clip loudness factor
  (`rms` in `manifest.json`) lets the engine level-match them.
- Source-to-file mapping per clip is recorded in `manifest.json` (`src` field for voices).
