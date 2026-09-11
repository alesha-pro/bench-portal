// Shared by the static builder, browser catalog and tests. No browser globals here.
export const categories = [
  {
    id: "shooters",
    name: "Shooters",
    description: "Recoil, close calls and one more wave.",
    symbol: "crosshair",
  },
  {
    id: "action-sandbox",
    name: "Action & sandbox",
    description: "Build, break things or fight your way through.",
    symbol: "blocks",
  },
  {
    id: "racing",
    name: "Racing",
    description: "Find the racing line. Then push it.",
    symbol: "racing",
  },
  {
    id: "showcases",
    name: "3D showcases",
    description: "Explore the details from every angle.",
    symbol: "cube",
  },
  {
    id: "visuals",
    name: "Shaders & worlds",
    description: "Procedural places and real-time visual experiments.",
    symbol: "orbit",
  },
  {
    id: "data",
    name: "Data visualizations",
    description: "Real data, made explorable.",
    symbol: "nodes",
  },
];
export const sortModes = ["name", "name-desc", "model"];
export const normalize = (value) =>
  String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
const collator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});

export function validateManifest(game, slug) {
  const fail = (message) => {
    throw new Error(`games/${slug}/game.json: ${message}`);
  };
  if (!game || typeof game !== "object" || Array.isArray(game))
    fail("must be a JSON object");
  if (!/^[a-z0-9]+(?:-[a-z0-9.]+)*$/.test(slug) || game.slug !== slug)
    fail(
      "slug must match its folder and use lowercase letters, numbers, dots or hyphens",
    );
  if (typeof game.title !== "string" || !game.title.trim())
    fail("title is required");
  if (!categories.some((c) => c.id === game.category))
    fail(`category must be one of: ${categories.map((c) => c.id).join(", ")}`);
  if (
    !Object.hasOwn(game, "model") ||
    (game.model !== null &&
      (typeof game.model !== "string" || !game.model.trim()))
  )
    fail("model must name the builder, or be null if unknown");
  for (const field of ["description", "summary", "version"])
    if (game[field] !== undefined && typeof game[field] !== "string")
      fail(`${field} must be a string`);
  if (
    game.tags !== undefined &&
    (!Array.isArray(game.tags) ||
      game.tags.some((t) => typeof t !== "string" || !t.trim()))
  )
    fail("tags must be an array of non-empty strings");
  if (
    game.accent !== undefined &&
    !/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(game.accent)
  )
    fail("accent must be a hex color, e.g. #ff703e");
  if (
    game.cover !== undefined &&
    (typeof game.cover !== "string" ||
      !game.cover ||
      /[\\?#:]/.test(game.cover) ||
      game.cover.startsWith("/") ||
      game.cover.split("/").some((p) => !p || p === ".." || p === "."))
  )
    fail("cover must be a relative file path inside this game folder");
  return game;
}

export function filterGames(games, state, { ignoreCategory = false } = {}) {
  const words = normalize(state.q).split(" ").filter(Boolean);
  return games.filter((game) => {
    if (!ignoreCategory && state.category && state.category !== game.category)
      return false;
    if (state.model && (game.model ?? "unknown") !== state.model) return false;
    if (
      state.tag &&
      !(game.tags ?? []).some((t) => normalize(t) === normalize(state.tag))
    )
      return false;
    const haystack = normalize(
      [
        game.title,
        game.slug,
        game.model,
        game.version,
        game.description,
        game.summary,
        ...(game.tags ?? []),
        categories.find((c) => c.id === game.category)?.name,
      ].join(" "),
    );
    return words.every((word) => haystack.includes(word));
  });
}

export function sortGames(games, mode = "name") {
  return [...games].sort((a, b) => {
    if (mode === "model") {
      if (!a.model && b.model) return 1;
      if (a.model && !b.model) return -1;
      const result = collator.compare(a.model ?? "", b.model ?? "");
      if (result) return result;
    }
    const title = collator.compare(a.title, b.title);
    return (
      (mode === "name-desc" ? -title : title) ||
      collator.compare(a.model ?? "", b.model ?? "") ||
      collator.compare(a.slug, b.slug)
    );
  });
}

export function readFilters(search, games) {
  const params = new URLSearchParams(search);
  const model = params.get("model") ?? "";
  const requestedTag = normalize(params.get("tag"));
  const tag =
    games
      .flatMap((g) => g.tags ?? [])
      .find((t) => normalize(t) === requestedTag) ?? "";
  return {
    q: (params.get("q") ?? "").slice(0, 200),
    category: categories.some((c) => c.id === params.get("category"))
      ? params.get("category")
      : "",
    model: games.some((g) => (g.model ?? "unknown") === model) ? model : "",
    tag,
    sort: sortModes.includes(params.get("sort")) ? params.get("sort") : "name",
  };
}

export function writeFilters(state, search = "") {
  const params = new URLSearchParams(search);
  for (const key of ["q", "category", "model", "tag", "sort"]) {
    if (state[key] && !(key === "sort" && state[key] === "name"))
      params.set(key, state[key]);
    else params.delete(key);
  }
  return params.toString();
}
