# Landing assets: provenance

| File | What it is | Origin |
|---|---|---|
| `photo-*.jpg`, `cover-*.jpg`, `table.jpg` | Food and restaurant photography (burger, pizza, poke, tiramisu, teriyaki, falafel, matcha, mango, three restaurant covers, spread table) | Generated with Figma AI (model `gemini-3.1-flash-image`) for the Mesa Figma file, then exported from Figma node renders (`Mesa — Landing assets (export)` section) and converted to JPEG quality 80. Prompt shape: "Top-down food photography of <dish>, pale mint-white background, soft natural daylight, appetizing, clean, no text, no logo" (dishes) or interior/spread descriptions (covers). Fictional; no real restaurants or people. |
| `phone-*.png` | Screens of the Mesa app (home, menu, basket, checkout, tracking, search) | Rendered from the Figma design frames (`Home / Mobile`, `Restaurant / Mobile`, `Basket / Mobile`, `Checkout / Mobile`, `Tracking / Mobile`, `Search / Mobile`), first 390 x 844 viewport of each. Exported at 1x. |

Notes
- All content is demonstration material: restaurants, dishes, prices, people and order numbers are fictional.
- To refresh a screen, re-run the export: open the Figma section `Mesa — Landing assets (export)` (id `237:66`), update the clone, and `get_screenshot` the `phone-*` frame; for photos `get_screenshot` the `asset-*` rectangles.
- Phone screens are 1x (390 px wide); they display at 270 to 330 px, so they stay crisp on 1x and slightly soft on high-density screens. Re-export at 2x if you need retina sharpness.
