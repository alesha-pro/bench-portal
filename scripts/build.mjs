import {
  cp,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
  stat,
  realpath,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { validateManifest } from "../src/catalog-data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gamesRoot = path.join(root, "games");
const output = path.join(root, "dist");

const entries = await readdir(gamesRoot, { withFileTypes: true });
const games = [];

for (const entry of entries
  .filter((item) => item.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name))) {
  const manifestPath = path.join(gamesRoot, entry.name, "game.json");
  let manifest;
  try {
    manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  } catch (error) {
    throw new Error(
      `Invalid or missing manifest: games/${entry.name}/game.json`,
      { cause: error },
    );
  }
  validateManifest(manifest, entry.name);
  const gameDir = path.join(gamesRoot, entry.name);
  if (!(await stat(path.join(gameDir, "index.html"))).isFile())
    throw new Error(`Missing game entry point: ${entry.name}/index.html`);
  if (manifest.cover) {
    const coverPath = await realpath(path.join(gameDir, manifest.cover));
    if (
      !coverPath.startsWith(`${await realpath(gameDir)}${path.sep}`) ||
      !(await stat(coverPath)).isFile()
    )
      throw new Error(`Cover must be a file inside games/${entry.name}`);
  }
  games.push({
    ...manifest,
    ...(manifest.cover
      ? { cover: `./games/${entry.name}/${manifest.cover}` }
      : {}),
    path: `./games/${entry.name}/`,
  });
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all([
  cp(path.join(root, "index.html"), path.join(output, "index.html")),
  cp(path.join(root, "styles.css"), path.join(output, "styles.css")),
  cp(path.join(root, "src"), path.join(output, "src"), { recursive: true }),
  cp(gamesRoot, path.join(output, "games"), { recursive: true }),
  writeFile(path.join(output, ".nojekyll"), ""),
  writeFile(
    path.join(output, "games.json"),
    `${JSON.stringify(games, null, 2)}\n`,
  ),
]);

console.log(`Built bench-portal with ${games.length} game(s).`);
