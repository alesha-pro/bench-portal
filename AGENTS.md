# Bench Portal: guide for agents

Bench Portal is a static catalog of playable AI-built games, 3D showcases and interactive visual experiments. The interface is in English; communicate with Alexey in Russian unless asked otherwise.

## Project and commands

- Production: https://bench-portal.pages.dev
- Mirror: https://alesha-pro.github.io/bench-portal/
- Git remote: https://github.com/alesha-pro/bench-portal.git
- Production branch: `main`.
- `npm test` runs catalog/manifest tests with Node's built-in test runner.
- `npm run build` validates every manifest and copies the site into `dist/`.
- `npm run serve` serves `dist/` at http://127.0.0.1:4176. Build first. Rebuild after edits; this server does not provide hot reload.
- `npm run deploy:cloudflare` builds and deploys `dist/` with Wrangler to the existing `bench-portal` Pages project on branch `main`.

The catalog requires no npm dependencies or frontend framework. Node 22 is used in CI; Python 3 powers the local preview. Wrangler is invoked through `npx wrangler@4` and uses the user's existing Cloudflare authentication.

## Files and ownership

- `index.html`, `styles.css`: homepage shell and responsive styling.
- `src/catalog.js`: DOM rendering, filter controls, loading/error states and browser history.
- `src/catalog-data.js`: shared categories, manifest validation, filtering, sorting and URL parsing. Keep this module free of browser globals so Node can test and import it.
- `games/<slug>/`: one self-contained, playable static build per directory.
- `games/<slug>/game.json`: its catalog metadata, the source of truth for the card.
- `scripts/build.mjs`: static build and filesystem validation.
- `tests/catalog.test.mjs`: tests against the actual collection and edge cases.
- `.github/workflows/pages.yml`: GitHub Pages deployment on pushes to `main`.
- `dist/` and `dist/games.json`: generated output. Never edit or commit them.

Inspect `git status` before work. Preserve unrelated changes and existing game URLs. Changes to the homepage should not modify game code or assets. Only change a game's implementation when the task includes that game.

## Add a build

1. Pick a unique, lowercase, URL-safe slug. Use letters, numbers and hyphens; existing slugs may also contain dots. Do not rename published directories casually: their URLs are shared publicly.
2. Copy the production static build into `games/<slug>/`. It must contain `index.html` and all required local assets. Never copy `node_modules/`, caches, secrets or an entire unrelated repository.
3. Make asset URLs relative to the game directory. For Vite, use `vite build --base=./`. Root-relative `/assets/...` breaks the GitHub Pages mirror and nested game routes.
4. Create `game.json` using the schema below. Keep labels and descriptions factual. Do not invent benchmark results, model authorship, dates, scores or completion claims.
5. If a cover is available, put it inside the game folder and set `cover` to its relative path, such as `cover.webp`. Otherwise omit it; the catalog supplies category artwork. Do not invent a screenshot of gameplay that was not captured.
6. Run `npm test` and `npm run build`.
7. Preview the catalog card, its category/model filters, and the actual game at `/games/<slug>/`. Check asset loading and the console. A passing static build does not prove a game plays correctly.

Example manifest:

```json
{
  "slug": "example-arena",
  "title": "Example Arena",
  "category": "shooters",
  "model": "GPT-6 Astra",
  "version": "September build",
  "summary": "An arena shooter with escalating enemy waves.",
  "description": "Describe the actual gameplay, notable features and relevant creation context.",
  "accent": "#ff703e",
  "tags": ["FPS", "Three.js", "WebGL"],
  "cover": "cover.webp"
}
```

Required: `slug`, non-empty `title`, valid `category`, and `model` (non-empty string or `null`). Optional: `version`, `summary`, `description`, `accent`, `tags`, `cover`.

`model` means the model that **built** the project. It is not the model being visualized or benchmarked. For example, Ox Alpha visualizes Laguna routing, but its builder is unspecified, so its `model` is `null`. Use `null` rather than guessing. `version` is a build label and is not used as a substitute for authorship.

Use the same model spelling as existing manifests, so a model does not split into duplicate filters. Current names include `GPT-6 Astra`, `GPT-5.6 Luna`, `Claude Fable 5.1`, `DeepSeek V4.1`, `GLM-5.3`, `GLM-5.3 Flash`, `Qwen3.8-27B`, `Qwen3.8-Flash-Next`, and `Qwen3.8-Max`. A genuinely new model name automatically becomes a filter option.

`summary` is a short card description. The complete `description` remains accessible through “Build notes.” Use tags consistently (for example `Three.js`, `WebGL`, `GLSL`, `Blender`, `Voxel`). Tags are searched and can be filtered case-insensitively. `accent` must be a 3- or 6-digit hex color. Covers must resolve to a real file inside the game folder; absolute URLs and traversal paths are rejected.

## Categories

Choose exactly one primary category for each build:

| Value            | Section             | Use for                                              |
| ---------------- | ------------------- | ---------------------------------------------------- |
| `shooters`       | Shooters            | First-person shooters and horde survival             |
| `action-sandbox` | Action & sandbox    | Action games, destruction and building sandboxes     |
| `racing`         | Racing              | Driving, drifting and racing                         |
| `showcases`      | 3D showcases        | Interactive object or product presentations          |
| `visuals`        | Shaders & worlds    | Shader art, procedural scenes and visual simulations |
| `data`           | Data visualizations | Interactive views of real data                       |

The category registry lives in `src/catalog-data.js`. To add a category, update that registry, add its fixed SVG symbol in `src/catalog.js`, update this table, and test it. Do not maintain a second hardcoded list of builds in the homepage.

## Homepage behavior to preserve

- Search, category, model and tag filters combine with AND semantics.
- Category counts respect search/model/tag while ignoring the selected category.
- URL parameters are `q`, `category`, `model`, `tag`, and `sort`. Supported sort values: `name`, `name-desc`, `model`.
- Reloading or sharing the URL restores filters; browser Back/Forward restores prior selections. Unknown filter values fall back safely.
- `/` focuses search outside form fields. Escape clears an active search. Reset clears all catalog filters.
- Show useful empty/error states and a retry action. Keep status announcements accessible without announcing the full grid.
- Use DOM text nodes for manifest text. Do not interpolate manifest content into `innerHTML`. The existing SVG markup comes only from local constants.
- Keep the layout usable at 390px and desktop widths. Respect keyboard focus and reduced-motion preferences.

## Commit, deploy and verify

Follow the user's requested scope. Authorization to publish or push given earlier in the task remains valid; do not ask again for the same action.

For an authorized release:

1. Run the relevant tests and build; review `git diff` and stage only intended files.
2. Fetch the remote before pushing and account for any new commits. Never force-push shared `main`.
3. Commit and push to `origin/main`. This triggers the GitHub Pages workflow and the configured Cloudflare Git integration.
4. If the user asks for Wrangler deployment, also run `npm run deploy:cloudflare`. Deploy the complete generated portal, not just the new game folder. Do not create a replacement Pages project.
5. Confirm CLI deployment completion and the GitHub Actions result. Check the production homepage, filters and any new game URL in a real browser. Verify that production has the intended changes, rather than relying only on a successful upload.
6. Report the public URL, commit and any genuine verification limits.

Do not commit Wrangler credentials, `.wrangler/`, local dependency folders or build output. Do not post to X or other external channels unless explicitly requested.
