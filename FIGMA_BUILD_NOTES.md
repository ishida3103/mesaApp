# Mesa: Figma build notes (read this before designing a new screen)

Purpose: everything needed to add a screen to the food-ordering app without re-deriving context. Pair it with `PRODUCT.md` (product truth), `DESIGN.md` (visual system) and `figma-helpers.js` (copy-paste Plugin API prelude).

## 1. Where things live

- Figma file: https://www.figma.com/design/yUUU8aba0wWqVgHxxqIlcT/Projetos-Principais (fileKey `yUUU8aba0wWqVgHxxqIlcT`). The Figma MCP cannot search files by name; reuse this key.
- Page **Demandas** (id `86:2`). It already holds the user's unrelated frames at x < 3832 (Regras de BOM, Migração CI-DS, Desagregação, etc.). **Never touch them.** All Mesa work sits at x = 4152, stacked vertically in Sections, each section about 120px below the previous one.
- Local variable collection **"Mesa / Color"** (green/50..950, surface/*, text/*, border/subtle, accent/rating, state/alert). Bind fills and strokes to these variables.
- Session: call `create_session` with the fileKey first, pass its `sessionId` to every Figma tool, and send `skillNames: "resource:figma-use,resource:figma-generate-design"` on `use_figma`.
- `generate_image` (Figma AI credits, model `gemini-3.1-flash-image`) drops its frame on the **DocHub** page, not on Demandas. Read the `imageHash` from it, use the hash in your nodes, then delete the scratch node. Ask before spending credits on many new images.

## 2. Screen inventory (all with desktop 1440 + mobile 390)

| Section (page Demandas) | Section id | Frames (id) |
|---|---|---|
| Mesa: Home | `220:74` | Home / Desktop `217:66`, Home / Mobile `219:66`, Home / Desktop 1920 `267:66` (1920 x 1464, placed right of the mobile frame; section widened to 4230) |
| Mesa: Restaurant menu | `223:66` | Restaurant / Desktop `222:76`, Restaurant / Mobile `224:66` |
| Mesa: Item detail | `226:66` | Item detail / Desktop (modal) `226:67`, Item detail / Mobile (sheet) `226:561` |
| Mesa: Checkout | `227:66` | Checkout / Desktop `227:67`, Checkout / Mobile `227:273` |
| Mesa: Order tracking | `228:66` | Tracking / Desktop `228:67`, Tracking / Mobile `228:309` |
| Mesa: Search | `231:66` | Search / Desktop (results) `231:67`, Mobile results `231:327`, Mobile start `231:452` |
| Mesa: Account | `233:66` | Account / Desktop `233:67`, Account / Mobile `233:276` |
| Mesa: Basket | `234:66` | Basket / Desktop `234:67`, Mobile `234:259`, Mobile empty `234:412` |
| Mesa: Login & Sign up | `236:66` | Auth / Desktop / Log in `236:67`, Sign up `236:132`; Auth / Mobile / Log in `236:225`, Sign up `236:275` |

| Mesa: Landing page | `238:66` | Landing / Desktop `238:67` (1440 x 5709), Parallax spec card `238:1000`, Landing / Mobile `239:66` |
| Mesa: Landing assets (export) | `237:66` | staging only: `phone-*` frames (390 x 844 clips of mobile screens) and `asset-*` photo rectangles used to export PNGs for the HTML |

## Web build of the landing (HTML/CSS/JS, no build step)

Folder `landing/`: `index.html` (landing), `login.html`, `signup.html`, `styles.css` (tokens + landing + auth), `main.js` (parallax, sticky-phone steps, nav state), `auth.js` (password toggle, live rules, demo-only submit), `assets/` (JPEG photos, PNG phone screens, `ASSETS.md` with provenance). Surface brief: `.impeccable/surfaces/landing-index-html.md` (direction contract).

- Parallax: `data-speed` (vertical; positive = farther, negative = nearer) and `data-xspeed` (horizontal) attributes; offset = (host center − viewport center) × speed; host = closest `[data-host]`. Frozen under `prefers-reduced-motion`. Spec card in Figma: `238:1000`.
- Preview without a browser tool: headless Edge (`msedge --headless=new --screenshot=... --window-size=W,H file:///...`). Scrolling by hash/`scrollTo` gives blank captures; use a temporary copy that translates `<body>` instead. Phone widths below ~500px are not honored by headless Chrome: wrap the page in an `<iframe>` of the target width. Delete the temporary copies afterwards.
- Photos/screens were exported with `get_screenshot` on the staging section, then photos converted to JPEG q80 with .NET `System.Drawing` (no image CLI installed).
- Auth pages are demo-only (no backend): submit shows a "portfolio demo" notice.

Not designed yet (ideas): password reset, order receipt, saved addresses and payment management tabs of Account, filters sheet, restaurant "closed" state, error and offline states, notifications panel, HTML/code build.

User decisions to respect: portfolio project, generic (not Brazil-specific), UI copy in English with `$`, design only (no HTML unless asked again). Fonts requested by the user: DIN Neuzeit Grotesk (primary), Avenir Light (secondary), unavailable in Figma, so Barlow and Figtree are used. Palette comes from `Color Palette.png`; layout family from `Design Inspiration 1/2.png`.

## 3. Consistent fictional dataset (reuse exactly)

- **User:** Alex Rivera, `alex.rivera@email.com`, +1 (555) 014-2290, member since March 2026, 12 orders. Address: Home, 24 Maple Street, Apt 5B, Springfield; Work, 410 Harbor Avenue, Springfield. Card ending 4242 (exp 08/28).
- **Restaurants** (name, cuisine, rating, time, fee): Green Bowl Kitchen (Healthy · Bowls, 4.8 (1.2k), 20–30 min, $1.99); Fire & Dough (Pizza · Italian, 4.7 (860), 25–35 min, free delivery); Sunrise Sushi (Japanese · Sushi, 4.9 (640), 30–40 min, $2.49). Also named: Patty Lane (burgers), Dolce Corner (desserts). Green Bowl Kitchen: open until 10:00 PM, min order $10, 1.4 km.
- **Categories (Home):** Burgers 18, Pizza 12, Sushi 9, Salads 14, Desserts 11, Drinks 20 places. **Menu categories (in a restaurant):** Main Courses, Starters, Drinks, Desserts.
- **Green Bowl Kitchen menu:** Main Courses: Salmon Poke Bowl $13.50 (Popular), Teriyaki Chicken Bowl $12.50, Falafel Power Bowl $11.90 (Popular, Vegan), Mediterranean Quinoa Bowl $11.50 (Vegetarian). Starters: Edamame $5.00 (Vegan), Miso Soup $3.50 (Vegan), Crispy Avocado Rolls $6.90 (sold out). Drinks: Iced Matcha $4.50, Fresh Orange Juice $4.20. Desserts: Mango Chia Pudding $5.50, Matcha Cheesecake $6.20. Other dishes: Smash Burger $9.50 (Patty Lane), Margherita Pizza $12.00 (Fire & Dough), Tiramisu $6.50 (Dolce Corner), Sparkling Water $2.50.
- **Basket:** Salmon Poke Bowl x1 $13.50, Edamame x1 $5.00, Iced Matcha x2 $9.00 = subtotal $27.50, delivery $1.99, service fee $1.00, **total $30.49**; at checkout tip $2.00 gives **$32.49**.
- **Live order:** #2481, placed today 7:14 PM, Green Bowl Kitchen, status Preparing (step 2 of 4: Confirmed 7:15, Preparing, On the way est. 7:35, Delivered est. 7:50), "18 min", window 7:45–7:55 PM. Courier Marcus Reed (4.9, 320 deliveries, electric scooter). Delivery code 4821.
- **Order history:** Fire & Dough Oct 24 #2397 $36.50; Sunrise Sushi Oct 17 #2310 $24.90; Patty Lane Oct 9 #2255 $24.30 (cancelled, refunded); Dolce Corner Sep 28 #2190 $14.20.

## 4. Photo hashes: read them, don't regenerate

Photos are image fills on existing nodes. Pull `imageHash` from them:
- Home desktop `217:66`: nodes named `Dish / Smash Burger | Margherita Pizza | Salmon Poke Bowl | Tiramisu` (child `Dish photo`) and `Restaurant / <name>` (child `Cover image`, restaurants Green Bowl Kitchen, Fire & Dough, Sunrise Sushi). Hero banner: node `Promo image`.
- Restaurant desktop `222:76`, inside `Main`: `Item / <dish name>` cards, child `Dish photo` (Teriyaki Chicken Bowl, Falafel Power Bowl, Mediterranean Quinoa Bowl, Edamame, Miso Soup, Crispy Avocado Rolls, Iced Matcha, Fresh Orange Juice, Mango Chia Pudding, Matcha Cheesecake). Caution: the cloned basket inside that frame also has `Item / ...` nodes without `Dish photo`, so scope the search to `Main`.
- Photo style for any new image: "Top-down food photography of <dish>, pale mint-white background, soft natural daylight, appetizing, clean, no text, no logo", 1024x1024.

## 5. Layout recipes (numbers)

- Desktop frame 1440: rail 216 | main fluid, padding 32 (content 816) | right panel 344. Pages without a right panel: Account (two columns, details column 300), Login (brand panel 640 + form area, form 420).
- Desktop frame 1920 (Home only so far): rail 216 | main fluid, padding 48 (content 1208), section gap 32 | right panel 400. Promo banner 224 tall (headline 44, photo 560), category icon tiles 56, restaurant covers 184 (3 cards, ~387 wide), dishes 6 per row at 185 wide (adds Falafel Power Bowl $11.90 and Teriyaki Chicken Bowl $12.50, photos reused by hash from Restaurant / Desktop). Built by cloning `217:66` and resizing, so other 1440 screens can follow the same recipe. After `resize()` on a HUG root, set `layoutSizingVertical = 'HUG'` again.
- Phone frame 390: status bar 44, gutters 20, tab bar 80 (or fixed action bar, pt12 pb30), floating basket bar 350 x 60 at `y = height - tabbar - 12 - 60`.
- Modal 880 wide (photo 320, content 560, footer pinned), centered on a 1440 x 1024 viewport frame with a 60% Deep Forest scrim over a clone of the underlying screen. Sheet 390 x 730 at the bottom of an 844 viewport frame.
- Cards: radius 16 (list items) or 20 (page sections); padding 24 desktop / 18 mobile; 1px `border/subtle` plus the soft shadow (`F(..., {shadow:true, stroke:'border/subtle'})`).
- Desktop frames with long content show the basket/summary panel top-aligned and the rest of the column white (sticky-panel convention). Do not stretch the panel content to fill.

## 6. Pitfalls learned (each cost a retry)

1. **Paint opacity on bound variables is dropped.** Set `node.opacity` (e.g. scrim = 0.6) instead of `{...solid(), opacity}`.
2. **FILL/HUG order:** `appendChild` first, then `layoutSizingHorizontal/Vertical = 'FILL'`; `resize()` resets sizing to FIXED, so call it before; wrapping text needs `textAutoResize = 'HEIGHT'` before FILL. A FILL child does not make a HUG parent grow: for cards whose text can be taller than the photo, make the text column HUG and the card HUG.
3. **Section children use coordinates relative to the section.** After `section.appendChild(frame)` set `frame.x/y` again, then size the section last.
4. **Name collisions:** the basket clone and the menu both contain `Item / <name>` nodes. Scope searches (`main.findAll(...)`) and check `children[0].name` before mutating.
5. **Never append a node into itself** (a `left.parent ? ... : ...` slip caused a parenting-cycle error). Build parent first, append once.
6. **Active nav item width:** 168px inner width. "Track order" with a count badge only fits at 14px with 12px side padding and 10px gap.
7. **Long labels in mobile option rows** wrap badly (e.g. "Schedule for later" plus a "Choose" link); shorten copy or drop the right-hand text on mobile.
8. **Headline orphans** ("are." alone on a line): insert a manual line break (`\n`) in display text.
9. **Rail reuse:** clone `Sidebar` from Home when Home is the active item; for other active items use `Rail(active)` from `figma-helpers.js`.
10. Screenshots: `get_screenshot` returns a URL; `curl` it into the scratchpad and `Read` the PNG. One composition screenshot, fix, one confirmation.
12. **Figma MCP rate limit (Starter plan):** a burst of 18 parallel `get_screenshot` calls had 7 rejected ("tool call limit"); batches of 4 went through. Keep parallel Figma calls to about 4, retry the failures, and prefer one `use_figma` call that builds a whole frame.
13. **Avatar contrast:** initials in `text/on-dark` on `green/700` (#1A996D) measure 3.5:1. In the HTML avatars use Evergreen (#197153, about 6:1). The Figma frames from Rail/Account/Tracking still use `green/700`; switch them to `green/800` when touching those screens.
14. **PowerShell traps:** `R` is an alias of `Invoke-History` (do not name helpers `r`/`R`), and `Set-Content -NoNewline` with a positional path misbinds in Windows PowerShell 5.1; use `[IO.File]::WriteAllText` with a no-BOM `UTF8Encoding`.
11. The custom `design` detector hook does not run on Figma output. Self-check against `DESIGN.md` Do's and Don'ts instead (one mint CTA per region, Barlow numbers, no eyebrows, tinted greys).

## 7. Workflow for a new screen (target: one build call, one fix call)

1. Read this file, `DESIGN.md`, `PRODUCT.md`; look at a similar existing frame with `get_screenshot` only if the pattern is new.
2. In one `use_figma` call: prelude from `figma-helpers.js`, new Section below the last one, build the desktop and the mobile frames, return IDs and sizes.
3. Screenshot the Section, fix wraps/clipping in one targeted call, screenshot again.
4. Update section 2 of this file and the memory note (`figma-projetos-principais`).
