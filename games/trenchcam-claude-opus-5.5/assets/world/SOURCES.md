# World assets: sources and licenses

The Poly Haven textures in the table below are **CC0** (public domain), see [license](https://polyhaven.com/license). Originally downloaded at 1K and encoded to WebP. On 2026-09-26, `church_bricks_03`, `worn_plaster_wall`, and `concrete_floor_damaged_01` were repacked with 2K colour/OpenGL normals and 1K ORM/normalised displacement. Exact download URLs and output hashes: [sources.json](../../../research/textures-2026-09-26/sources.json). Files: `tex/<id>_diff.webp` (albedo), `_nor.webp` (OpenGL normal), `_arm.webp` (AO/roughness/metal), and `_height.webp` (white = high, where present).

| Files | Asset | Author(s) | Source | License |
|---|---|---|---|---|
| tex/brown_mud_02_diff/nor/arm.webp | Brown Mud 02 | Rob Tuytel | https://polyhaven.com/a/brown_mud_02 | CC0 |
| tex/brown_mud_leaves_01_diff/nor/arm.webp | Brown Mud Leaves 01 | Rob Tuytel | https://polyhaven.com/a/brown_mud_leaves_01 | CC0 |
| tex/burned_ground_01_diff/nor/arm.webp | Burned Ground 01 | Rob Tuytel | https://polyhaven.com/a/burned_ground_01 | CC0 |
| tex/excavated_soil_wall_diff/nor/arm.webp | Excavated Soil Wall | Amal Kumar | https://polyhaven.com/a/excavated_soil_wall | CC0 |
| tex/church_bricks_03_diff/nor/arm.webp | Church Bricks 03 | Rob Tuytel | https://polyhaven.com/a/church_bricks_03 | CC0 |
| tex/worn_plaster_wall_diff/nor/arm.webp | Worn Plaster Wall | Dimitrios Savva | https://polyhaven.com/a/worn_plaster_wall | CC0 |
| tex/weathered_planks_diff/nor/arm.webp | Weathered Planks | Dario Barresi, Dimitrios Savva | https://polyhaven.com/a/weathered_planks | CC0 |
| tex/rusty_corrugated_iron_diff/nor/arm.webp | Rusty Corrugated Iron | Charlotte Baglioni | https://polyhaven.com/a/rusty_corrugated_iron | CC0 |
| tex/hessian_230_diff/nor/arm.webp | Hessian 230 | colormass, Rico Cilliers | https://polyhaven.com/a/hessian_230 | CC0 |
| tex/pine_bark_diff/nor/arm.webp | Pine Bark | Dimitrios Savva | https://polyhaven.com/a/pine_bark | CC0 |
| tex/concrete_floor_damaged_01_diff/nor/arm.webp | Concrete Floor Damaged 01 | Rob Tuytel | https://polyhaven.com/a/concrete_floor_damaged_01 | CC0 |
| tex/rough_wood_diff/nor/arm.webp | Rough Wood | Rob Tuytel | https://polyhaven.com/a/rough_wood | CC0 |
| tex/rusty_metal_02_diff/nor/arm.webp | Rusty Metal 02 | Rob Tuytel | https://polyhaven.com/a/rusty_metal_02 | CC0 |
| tex/dirt_diff/nor/arm.webp | Dirt | Charlotte Baglioni | https://polyhaven.com/a/dirt | CC0 |

## Authored surfaces (2026-09-26)

- `tex/block17_terrazzo_{diff,nor,arm,height}.webp`: generated base colour (OpenAI built-in imagegen), with authored joints, bevels, normal/ORM/height from `tools/assets/build-surface-textures.mjs`. [Original and exact prompt](../../../research/textures-2026-09-26/prompt.md). Generated asset, not a Poly Haven/CC0 scan.
- `tex/weapon_micro.webp`: own deterministic micro-normal/roughness texture, built by the same script.

Level structures (terrain, trenches, church, tunnels, trees, wire, signs, smoke) are procedural (`src/world`). Downloaded/generated prop models are documented separately in their asset directories and CREDITS.md.
