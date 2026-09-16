# Credits and asset licences

## Third-party code

| Component | Version | Licence | Use |
|---|---|---|---|
| [three.js](https://threejs.org/) | 0.169.0 | MIT | WebGL renderer, scene graph, post-processing passes |
| [Vite](https://vitejs.dev/) | 5.4.x | MIT | Dev server and production bundler |
| [Playwright](https://playwright.dev/) | 1.48.x | Apache-2.0 | **Dev-only**, in `tools/qa/` — automated screenshot/QA harness, not shipped |

Three.js is bundled into `dist/` as part of the production build. Its MIT licence
notice travels with the package under `node_modules/three/LICENSE`.

## Fonts

Both typefaces are shipped **locally** under `public/fonts/` as WOFF2 (latin subset)
and are loaded via `@font-face` in `index.html`. There is no runtime request to any
font CDN.

| Family | Weights | Licence | Use |
|---|---|---|---|
| Chakra Petch | 600, 700 | SIL Open Font Licence 1.1 | Display / headings / numerals |
| Barlow Semi Condensed | 400, 500, 600 | SIL Open Font Licence 1.1 | UI body text |

Both are available from Google Fonts under the SIL Open Font Licence 1.1, which
permits free use, modification and redistribution, including bundling with an
application. The licence text is available at
<https://scripts.sil.org/OFL>. Files as shipped:

```
public/fonts/chakra-petch-600.woff2
public/fonts/chakra-petch-700.woff2
public/fonts/barlow-semi-condensed-400.woff2
public/fonts/barlow-semi-condensed-500.woff2
public/fonts/barlow-semi-condensed-600.woff2
```

No font files have been modified; they are the unaltered latin subsets served by
Google Fonts.

## Generated assets

Everything else in this project is **generated procedurally at runtime by the code in
this repository** and carries no third-party licence:

- **Geometry** — the player boat is lofted from hand-authored hull stations; islands,
  cliffs, the sea cave, the rock arch, docks, the lighthouse, vegetation and props are
  built from procedural noise and parametric primitives; enemy boats and drones are
  hand-built from primitives.
- **Textures** — water normal/ripple maps, foam, sky gradients and pickup icons are
  drawn at runtime onto canvas elements.
- **Shaders** — water, sky, waterfall, shield, particles and ribbon trails are custom
  GLSL written for this project.
- **Audio** — the entire soundscape (engine, ambience, weapons, explosions, pickups,
  music bed) is synthesised with the Web Audio API from oscillators and generated
  noise buffers. No sample files are used.

No paid asset-generation services, external model generation, or API credentials were
used at any point.
