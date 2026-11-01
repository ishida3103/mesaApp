---
version: 1
slug: "landing-index-html"
primary_target: "landing/index.html"
related_targets: []
---

# Landing page (Figma + HTML): desktop + mobile

Mode: Persuade. Visitor: a first-time diner (and the recruiter reviewing the portfolio) who must understand in seconds what Mesa is and reach Log in / Sign up. Deliverables: Figma frames (page Demandas) and a static HTML/CSS/JS page with working parallax (`landing/index.html`), linking to the login and sign-up screens. Stack chosen by the user: plain HTML/CSS/JS, no build. World pinned: Mesa (DESIGN.md). Composition pinned by the user after two re-rolls: classic, polished, app-first landing.

Content truth: fictional restaurants and dishes (see FIGMA_BUILD_NOTES.md). No customer counts, testimonials, ratings-as-proof or press logos; proof is the product itself (real app screens), labelled "Portfolio demo" in the footer.

## Direction contract

THESIS: The app is the proof. A phone showing the real Home screen sits among food photography on three depth layers, and the rest of the page explains the product by walking that same phone through four steps. Refuses the generic centered-headline-over-cards page and the decorative stock-photo hero.
OWN-WORLD: Mesa. Mint Wash ground, Deep Forest bands for rhythm, Electric Mint only on the primary action per region, white cards with hairline and green-tinted shadow, Barlow for display and numbers, Figtree Light for sentences, rounded food photography, real app screenshots exported from the Figma frames.
STORY: Visitor learns that Mesa orders food from nearby restaurants and tracks it live (hero), sees how it works in four steps (browse, basket, checkout, track), sees what is inside (search, categories, notes, live tracking, history), and is invited to create an account or log in (nav, hero, closing band).
FIRST VIEWPORT: 1440x900. Nav with logo, three anchor links, Log in (outline) and Sign up (mint). Left: Barlow Bold headline "Your table, wherever you are." with a one-sentence Figtree Light subline, mint "Create account" and text link "Log in". Right: a 390-wide phone with the Home screen at the center, two round food photos and a small live-order card floating at different depths (parallax speeds 0.12, 0.22, 0.35).
FORM: User-pinned classic app-first landing (not a dealt structure); roll seed:ead4d45b1e598457.
SIGNATURE: Sticky phone in "How it works": the phone stays pinned while four copy blocks scroll past and its screen crossfades Home, Basket, Checkout, Tracking, with background photos drifting at their own speeds. Parallax respects prefers-reduced-motion (layers freeze, content intact).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
