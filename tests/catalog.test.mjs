import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import {
  categories,
  validateManifest,
  filterGames,
  sortGames,
  readFilters,
  writeFilters,
} from "../src/catalog-data.js";
const games = [];
for (const entry of await readdir(new URL("../games/", import.meta.url), {
  withFileTypes: true,
})) {
  if (entry.isDirectory())
    games.push(
      JSON.parse(
        await readFile(
          new URL(`../games/${entry.name}/game.json`, import.meta.url),
          "utf8",
        ),
      ),
    );
}
test("all actual manifests validate and belong to exactly one known category", () => {
  for (const game of games)
    assert.equal(validateManifest(game, game.slug), game);
  assert.equal(
    categories.reduce(
      (n, c) => n + filterGames(games, { category: c.id }).length,
      0,
    ),
    games.length,
  );
});
test("Astra author filtering includes ZERO MERCY despite its version label", () => {
  const matches = filterGames(games, {
    model: "GPT-6 Astra",
    category: "shooters",
  });
  assert(matches.some((g) => g.slug === "gpt-6-astra-2026-09-11"));
  assert(
    matches.every(
      (g) => g.model === "GPT-6 Astra" && g.category === "shooters",
    ),
  );
});
test("a model visualized by a build is not incorrectly attributed as its author", () => {
  const ox = games.find((g) => g.slug === "ox-alpha");
  assert.equal(ox.model, null);
  assert(filterGames(games, { model: "unknown" }).includes(ox));
  assert(filterGames(games, { q: "laguna" }).includes(ox));
});
test("query, category, model and tag compose with AND semantics", () => {
  const matches = filterGames(games, {
    q: "HIGHRISE qwen",
    category: "shooters",
    model: "Qwen3.8-27B",
    tag: "webgl",
  });
  assert.equal(matches.length, 1);
  assert.equal(matches[0].slug, "highrise-protocol-qwen3.8-27b");
  assert.equal(
    filterGames(games, { q: "highrise", category: "racing" }).length,
    0,
  );
});
test("category counts ignore only the category filter", () => {
  const state = { category: "shooters", model: "GPT-6 Astra", q: "rig" };
  assert.equal(filterGames(games, state).length, 0);
  assert.equal(filterGames(games, state, { ignoreCategory: true }).length, 1);
});
test("URL state round trips spaces, punctuation and tags", () => {
  const state = {
    q: "rifle & recoil",
    category: "shooters",
    model: "GPT-6 Astra",
    tag: "Three.js",
    sort: "model",
  };
  assert.deepEqual(readFilters(writeFilters(state), games), state);
  assert.equal(
    writeFilters(
      { q: "", model: "", tag: "", category: "", sort: "name" },
      "?q=old&utm_source=x",
    ),
    "utm_source=x",
  );
});
test("unknown filter values fall back without hiding the catalog", () => {
  const state = readFilters(
    "?category=nope&model=fake&tag=missing&sort=bad",
    games,
  );
  assert.deepEqual(state, {
    q: "",
    model: "",
    tag: "",
    category: "",
    sort: "name",
  });
  assert.equal(filterGames(games, state).length, games.length);
});
test("sorting is deterministic, does not mutate input, and places unknown models last", () => {
  const before = games.map((g) => g.slug);
  const a = sortGames(games, "name");
  assert.deepEqual(
    a.map((g) => g.slug),
    sortGames([...games].reverse(), "name").map((g) => g.slug),
  );
  assert.equal(sortGames(games, "model").at(-1).model, null);
  assert.deepEqual(
    games.map((g) => g.slug),
    before,
  );
});
test("bad metadata is rejected with an actionable manifest path", () => {
  const valid = games[0];
  for (const patch of [
    { category: "typo" },
    { model: "" },
    { tags: "FPS" },
    { accent: "red;opacity:0" },
    { cover: "../outside.png" },
    { cover: "https://example.com/a.png" },
  ]) {
    assert.throws(
      () => validateManifest({ ...valid, ...patch }, valid.slug),
      /game\.json:/,
    );
  }
});
