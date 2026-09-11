# Bench Portal

A static catalog of AI-built games, 3D showcases, shader experiments and data visualizations. Browse by category, search the collection, filter by builder model or tag, and share a filtered URL.

- [Cloudflare Pages](https://bench-portal.pages.dev)
- [GitHub Pages mirror](https://alesha-pro.github.io/bench-portal/)

## Local development

```sh
npm test
npm run build
npm run serve
```

Open http://127.0.0.1:4176. Rebuild after source changes. The catalog needs no npm packages; use Node 22 and Python 3.

## Add a project

Put a self-contained static build and `game.json` in `games/<slug>/`. Use relative asset URLs. The manifest's `category` determines its section; `model` identifies its builder, while `version` remains a build label. Use `model: null` when authorship is unknown.

See [AGENTS.md](AGENTS.md) for the manifest schema, category list, preview checks and deployment guide. Category/model/tag filters are generated from the collection, so there is no homepage list to maintain.

## Deploy

Pushes to `main` trigger the GitHub Pages workflow and the configured Cloudflare integration. For an explicit Wrangler deployment:

```sh
npm run deploy:cloudflare
```

Cloudflare project: `bench-portal`. Build command: `npm run build`. Output directory: `dist`. The generated directory is not committed.
