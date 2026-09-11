import {
  categories,
  normalize,
  filterGames,
  sortGames,
  readFilters,
  writeFilters,
} from "./catalog-data.js";
const $ = (id) => document.getElementById(id);
const grid = $("game-grid");
let games = [],
  state,
  searchTimer;
const icons = {
  crosshair:
    '<circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="11"/><path d="M50 10v22m0 36v22M10 50h22m36 0h22"/>',
  blocks:
    '<path d="m25 17 22 12v26L25 67 3 55V29Zm22 12L25 41 3 29m22 12v26m30-14 22-12 22 12v26L77 91 55 79Zm0 0 22 12 22-12M77 65v26"/>',
  racing:
    '<path d="m15 88 27-76m16 0 27 76M50 18v12m0 14v12m0 14v12M8 66h20m44 0h20"/>',
  cube: '<path d="m50 9 37 21v42L50 93 13 72V30Zm37 21L50 51 13 30m37 21v42M32 19l37 21v43"/>',
  orbit:
    '<circle cx="50" cy="50" r="27"/><ellipse cx="50" cy="50" rx="47" ry="14" transform="rotate(-30 50 50)"/><path d="M75 15h8m-4-4v8M12 79h8m-4-4v8"/>',
  nodes:
    '<path d="m20 24 32 22 29-25M52 46 27 81m25-35 30 31M20 24l7 57m54-60 1 56"/><circle cx="20" cy="24" r="7"/><circle cx="52" cy="46" r="10"/><circle cx="81" cy="21" r="5"/><circle cx="27" cy="81" r="6"/><circle cx="82" cy="77" r="8"/>',
};
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function makeCard(game) {
  const category = categories.find((c) => c.id === game.category);
  const article = element("article", "game-card");
  article.dataset.slug = game.slug;
  article.style.setProperty(
    "--game-accent",
    /^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(game.accent ?? "")
      ? game.accent
      : "#ff703e",
  );
  const link = element("a", "card-link");
  link.href = game.path;
  link.setAttribute(
    "aria-label",
    `Open ${game.title}${game.model ? `, ${game.model}` : ""}`,
  );
  const art = element("div", "game-art");
  art.setAttribute("aria-hidden", "true");
  if (game.cover) {
    const img = element("img");
    img.src = game.cover;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      img.remove();
      art.classList.remove("has-cover");
    });
    art.append(img);
    art.classList.add("has-cover");
  }
  const symbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  symbol.setAttribute("viewBox", "0 0 100 100");
  symbol.classList.add("art-symbol");
  symbol.innerHTML = icons[category.symbol]; // Fixed local SVG paths only, never manifest content.
  art.append(
    symbol,
    element("span", "art-label", category.name),
    element("span", "art-launch", "↗"),
  );
  const body = element("div", "card-body");
  body.append(
    element("p", "model-badge", game.model ?? "Model not listed"),
    element("h4", "game-title", game.title),
  );
  if (game.version && !normalize(game.model).endsWith(normalize(game.version)))
    body.append(element("span", "game-version", game.version));
  body.append(
    element(
      "p",
      "game-description",
      game.summary || game.description || "An interactive browser experiment.",
    ),
  );
  link.append(art, body);
  article.append(link);
  const bottom = element("div", "card-bottom");
  const tags = element("div", "card-tags");
  for (const tag of (game.tags ?? [])
    .filter(
      (t) => !["game", "astra", normalize(game.model)].includes(normalize(t)),
    )
    .slice(0, 3))
    tags.append(element("span", "tag-pill", tag));
  bottom.append(tags);
  if (game.description) {
    const details = element("details", "build-notes");
    details.append(
      element("summary", "", "Build notes"),
      element("p", "", game.description),
    );
    bottom.append(details);
  }
  article.append(bottom);
  return article;
}
function option(value, text) {
  const opt = element("option", "", text);
  opt.value = value;
  return opt;
}
function initializeControls() {
  const models = [...new Set(games.map((g) => g.model).filter(Boolean))].sort(
    (a, b) => a.localeCompare(b, "en", { numeric: true }),
  );
  $("model").replaceChildren(
    option("", "All models"),
    ...models.map((m) =>
      option(m, `${m} (${games.filter((g) => g.model === m).length})`),
    ),
  );
  if (games.some((g) => !g.model))
    $("model").append(option("unknown", "Not specified"));
  const tags = new Map();
  for (const game of games)
    for (const tag of game.tags ?? [])
      if (!tags.has(normalize(tag))) tags.set(normalize(tag), tag);
  $("tag").replaceChildren(
    option("", "All tags"),
    ...[...tags.values()]
      .sort((a, b) => a.localeCompare(b))
      .map((t) => option(t, t)),
  );
  $("categories").replaceChildren();
  for (const category of [{ id: "", name: "All builds" }, ...categories]) {
    const button = element("button", "category-button");
    button.type = "button";
    button.dataset.category = category.id;
    button.append(
      element("span", "", category.name),
      element("span", "category-count"),
    );
    $("categories").append(button);
  }
  for (const id of ["search", "model", "tag", "sort"]) $(id).disabled = false;
  $("total-builds").textContent = games.length;
  $("total-models").textContent = models.length;
  $("total-sections").textContent = categories.filter((c) =>
    games.some((g) => g.category === c.id),
  ).length;
  $("game-count").textContent =
    `${games.length} LIVE ${games.length === 1 ? "BUILD" : "BUILDS"}`;
}
function syncControls() {
  for (const key of ["model", "tag", "sort"]) $(key).value = state[key];
  $("search").value = state.q;
}
function render() {
  const visible = sortGames(filterGames(games, state), state.sort);
  const candidates = filterGames(games, state, { ignoreCategory: true });
  for (const button of $("categories").children) {
    const id = button.dataset.category;
    button.setAttribute("aria-pressed", String(id === state.category));
    button.querySelector(".category-count").textContent = id
      ? candidates.filter((g) => g.category === id).length
      : candidates.length;
  }
  $("clear-search").hidden = !state.q;
  $("reset").hidden = !(
    state.q ||
    state.category ||
    state.model ||
    state.tag ||
    state.sort !== "name"
  );
  $("results-status").textContent =
    `Showing ${visible.length} of ${games.length} builds${state.q ? ` for “${state.q}”` : ""}`;
  grid.replaceChildren();
  if (!visible.length) {
    const empty = element("div", "empty-state");
    empty.append(
      element("span", "empty-symbol", "⌕"),
      element(
        "h3",
        "",
        games.length ? "No builds found." : "The collection starts here.",
      ),
      element(
        "p",
        "",
        games.length
          ? "Try another search or clear a filter to explore more."
          : "New experiments will appear here as they are added.",
      ),
    );
    if (games.length) {
      const reset = element("button", "reset-button", "Clear all filters");
      reset.type = "button";
      reset.addEventListener("click", resetFilters);
      empty.append(reset);
    }
    grid.append(empty);
    return;
  }
  for (const category of categories) {
    const items = visible.filter((g) => g.category === category.id);
    if (!items.length) continue;
    const section = element("section", "catalog-section");
    section.setAttribute("aria-labelledby", `section-${category.id}`);
    const heading = element("div", "section-heading");
    const title = element("h3", "", category.name);
    title.id = `section-${category.id}`;
    title.append(
      element("span", "section-count", String(items.length).padStart(2, "0")),
    );
    heading.append(title, element("p", "", category.description));
    const cards = element("div", "game-grid");
    cards.append(...items.map(makeCard));
    section.append(heading, cards);
    grid.append(section);
  }
}
function commit({ replace = false } = {}) {
  const url = new URL(location.href);
  url.search = writeFilters(state, url.search);
  if (url.href !== location.href)
    history[replace ? "replaceState" : "pushState"]({}, "", url);
  render();
}
function resetFilters() {
  clearTimeout(searchTimer);
  state = { q: "", category: "", model: "", tag: "", sort: "name" };
  syncControls();
  commit();
  $("search").focus();
}
$("filters").addEventListener("submit", (e) => {
  e.preventDefault();
  clearTimeout(searchTimer);
  if (state) commit({ replace: true });
});
$("search").addEventListener("input", (e) => {
  if (!state) return;
  state.q = e.target.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => commit({ replace: true }), 120);
});
$("clear-search").addEventListener("click", () => {
  clearTimeout(searchTimer);
  state.q = "";
  $("search").value = "";
  commit({ replace: true });
  $("search").focus();
});
$("reset").addEventListener("click", resetFilters);
for (const id of ["model", "tag", "sort"])
  $(id).addEventListener("change", (e) => {
    clearTimeout(searchTimer);
    state[id] = e.target.value;
    commit();
  });
$("categories").addEventListener("click", (e) => {
  const button = e.target.closest("button[data-category]");
  if (!button || !state) return;
  clearTimeout(searchTimer);
  state.category = button.dataset.category;
  commit();
});
window.addEventListener("popstate", () => {
  if (!state) return;
  clearTimeout(searchTimer);
  state = readFilters(location.search, games);
  syncControls();
  render();
});
window.addEventListener("keydown", (e) => {
  if (!state) return;
  if (
    e.key === "/" &&
    !e.ctrlKey &&
    !e.metaKey &&
    !e.altKey &&
    !e.target.closest('input, select, textarea, [contenteditable="true"]')
  ) {
    e.preventDefault();
    $("search").focus();
  }
  if (e.key === "Escape" && e.target === $("search") && state.q) {
    e.preventDefault();
    $("clear-search").click();
  }
});
async function load() {
  grid.setAttribute("aria-busy", "true");
  try {
    const response = await fetch("./games.json", { cache: "no-store" });
    if (!response.ok)
      throw new Error(`Catalog request failed: ${response.status}`);
    const data = await response.json();
    if (
      !Array.isArray(data) ||
      data.some(
        (g) =>
          !g ||
          !categories.some((c) => c.id === g.category) ||
          typeof g.title !== "string" ||
          typeof g.path !== "string" ||
          !g.path.startsWith("./games/") ||
          !/^[a-z0-9.-]+$/.test(g.slug ?? ""),
      )
    )
      throw new Error("Invalid catalog data");
    games = data;
    initializeControls();
    state = readFilters(location.search, games);
    syncControls();
    render();
  } catch (error) {
    $("game-count").textContent = "COLLECTION UNAVAILABLE";
    $("results-status").textContent = "The collection could not be loaded.";
    const empty = element("div", "empty-state");
    empty.append(
      element("h3", "", "Couldn’t load the builds."),
      element("p", "", "Check your connection and try again."),
    );
    const retry = element("button", "reset-button", "Try again");
    retry.type = "button";
    retry.addEventListener("click", () => {
      retry.disabled = true;
      load();
    });
    empty.append(retry);
    grid.replaceChildren(empty);
    console.error(error);
  } finally {
    grid.setAttribute("aria-busy", "false");
  }
}
load();
