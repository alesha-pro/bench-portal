// Original two-colour linocut of the valley, built from basic ink strokes.
export function postage() {
  const ink = "#96523d",
    paper = "#ecd8b3";
  let ridges = "",
    hatch = "",
    waves = "";
  for (let j = 0; j < 9; j++)
    ridges += `<path d="M12 ${73 + j * 2}q15 -11 30 -10t30 -4 24 -7"/>`;
  for (let j = 0; j < 13; j++) hatch += `<path d="M${17 + j * 5} 67l10 -13"/>`;
  for (let j = 0; j < 4; j++)
    waves += `<path d="M0 ${19 + j * 6}q14 -9 30 -2t34 -2"/>`;
  return `<svg viewBox="0 0 183 116" fill="none" aria-hidden="true"><g stroke="${ink}" opacity=".6">${waves}</g><g transform="translate(69 7) rotate(8 48 48)"><path fill="${paper}" stroke="${ink}" stroke-width="4" stroke-dasharray="3 4" d="M2 1H104V96H2Z"/><path fill="${ink}" d="M6 5h94v87H6z"/><path stroke="${paper}" d="M10 9h86v79H10z"/><text x="53" y="22" text-anchor="middle" fill="${paper}" font-size="9" font-family="serif" letter-spacing="1.5">FOLD VALLEY</text><path d="M12 65l22 -23 9 12 15 -21 34 30" fill="${paper}"/><g stroke="${ink}" stroke-width=".9">${hatch}</g><circle cx="76" cy="34" r="7" fill="${paper}"/><path d="M13 72q23 -13 41 -12t39 -9v33H13" fill="${paper}"/><g stroke="${ink}" stroke-width=".8">${ridges}</g><path d="M39 58l3 -13h4l3 13zm5 -13l-9 -5m9 5l5 -9m-5 9l9 5m-9 -5l-5 9" fill="${ink}" stroke="${ink}" stroke-width="1.8"/><rect x="65" y="69" width="27" height="16" fill="${paper}"/><text x="79" y="82" text-anchor="middle" fill="${ink}" font-family="serif" font-size="15" font-weight="bold">3p</text></g></svg>`;
}
