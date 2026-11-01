# Mesa: food-ordering app (portfolio)

Design-only project right now: the screens live in Figma (file "Projetos Principais", page "Demandas"). No code or HTML unless the user asks again.

Read first, in this order:
1. `PRODUCT.md`: product truth (portfolio, recruiter as simulated user, generic, English copy, `$`).
2. `DESIGN.md` (+ `.impeccable/design.json`): the visual system (Mesa: forest frame, mint action, Barlow + Figtree).
3. `FIGMA_BUILD_NOTES.md`: file key, section/frame IDs, fictional dataset, layout numbers, pitfalls, workflow.
4. `figma-helpers.js`: paste-ready Plugin API prelude for `use_figma` (variables, text/frame helpers, icons, rail, tab bar).

Web build: `landing/` holds the working landing page with parallax plus login and sign-up pages (plain HTML/CSS/JS). Open `landing/index.html` in a browser. Details and preview tricks are in `FIGMA_BUILD_NOTES.md`.

Rules of thumb:
- Reply to the user in Portuguese; UI copy inside designs stays in English.
- Never touch frames in "Demandas" that are not Mesa sections (the user's other projects sit at x < 3832).
- Reuse existing photos by `imageHash`; ask before generating new images (Figma AI credits).
- Keep the dataset consistent across screens (basket $30.49, order #2481, courier Marcus Reed).
- After adding a screen, update the inventory in `FIGMA_BUILD_NOTES.md`.
