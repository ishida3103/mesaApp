---
name: Mesa
description: Food-ordering app (portfolio). A deep forest frame around mint-lit, photo-led content; Barlow for names and numbers, Figtree for sentences.
colors:
  mint: "#19ECA1"
  mint-deep: "#18C387"
  mint-mist: "#E2F8F0"
  mint-wash: "#F3FCF8"
  forest: "#0D261E"
  forest-raised: "#134837"
  evergreen: "#197153"
  evergreen-light: "#1A996D"
  tint-200: "#C3F4E2"
  tint-300: "#94F0CE"
  tint-400: "#58EEB8"
  surface-page: "#F3FCF8"
  surface-card: "#FFFFFF"
  surface-tint: "#E2F8F0"
  surface-rail: "#0D261E"
  text-primary: "#0D261E"
  text-secondary: "#46605A"
  text-on-dark: "#F3FCF8"
  text-on-dark-muted: "#9FC4B7"
  text-accent: "#197153"
  border-subtle: "#D5ECE3"
  rating-amber: "#E8A317"
  alert-rust: "#C2410C"
typography:
  display:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0em"
  headline:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.25
  price:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Figtree, 'Avenir Light', sans-serif"
    fontSize: "15px"
    fontWeight: 300
    lineHeight: 1.45
  label:
    fontFamily: "Figtree, 'Avenir Light', sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
  caption:
    fontFamily: "Figtree, 'Avenir Light', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.35
  landing-display:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "92px"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  landing-h2:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.02
  landing-step:
    fontFamily: "Barlow, 'DIN Neuzeit Grotesk', sans-serif"
    fontSize: "46px"
    fontWeight: 700
    lineHeight: 1.05
  landing-lede:
    fontFamily: "Figtree, 'Avenir Light', sans-serif"
    fontSize: "21px"
    fontWeight: 300
    lineHeight: 1.55
  field:
    fontFamily: "Figtree, 'Avenir Light', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  device: "48px"
  device-screen: "40px"
  xs: "7px"
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  sheet: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.text-primary}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-accent}"
    rounded: "{rounded.pill}"
    height: "44px"
  button-dark:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.pill}"
    height: "42px"
  button-add:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    size: "36px"
  chip-selected:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  chip:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "52px"
    padding: "0 14px"
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "14px"
  nav-item-active:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "48px"
  status-pill:
    backgroundColor: "{colors.mint-mist}"
    textColor: "{colors.text-accent}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
---

# Design System: Mesa

## Overview

**Creative North Star: "The Neighborhood Table"**

"Mesa" means table. The interface is a table set for someone who is hungry and in a hurry: a deep forest frame (rail, basket bar, selected chips) holds a pale mint-washed surface where real food photography does the talking. Green is the whole palette, but it works in three registers: forest for structure, mint for the one thing to press, evergreen for text that links or confirms.

The system is an Operate system: the visitor is completing an order, so layout follows ordering conventions (left navigation, content, always-visible basket) and expression lives in type, palette, photography and small precise details. Density is medium: cards breathe (16 to 24px padding), lists are scannable, prices are always set in the bold numeric face.

It is generic on purpose (portfolio piece, no country or cuisine tie): English copy, dollar prices, fictional restaurants. The user's references pinned the palette (the mint scale in `Color Palette.png`), the left-nav-plus-basket layout family and the typefaces (DIN Neuzeit Grotesk and Avenir Light, which Figma lacks; Barlow and Figtree stand in).

**Key Characteristics:**
- Forest frame, mint action, mint-wash ground; white cards with a hairline and a soft green-tinted shadow.
- Food photography is top-down, daylight, on a pale mint-white surface, always cropped with rounded corners (12 to 16px).
- Barlow carries names, headings and every number; Figtree Light carries descriptions.
- One mint-filled primary action per region (Checkout, Place order, Add to basket, Log in).
- The basket and the live order status are always one glance away.

## Colors

A single-hue green system extended from the user's scale (50 to 950), plus two functional colors that carry meaning only (amber for ratings, rust for cancelled).

### Primary
- **Electric Mint** (#19ECA1): the action color. Primary buttons, the "+" add button, the active nav item, selected progress steps, the checked state of switches and checkboxes. Text on it is always Forest (#0D261E), about 10:1.
- **Deep Forest** (#0D261E): structure and the second action color. Sidebar rail, selected chips, the dark "Browse restaurants" and basket bar, all primary text, and scrims (at 60%).

### Secondary
- **Evergreen** (#197153): links and "good news" text on light surfaces ("See all", "Apply", "Free delivery", progress labels), icon strokes inside mint tiles. About 6:1 on white.
- **Hillside Green** (#1A996D) and **Fresh Leaf** (#18C387): borders of selected options (2px) and the open-status dot. Never used for text.

### Neutral
- **Mint Wash** (#F3FCF8): the page ground. The app never sits on pure white; white is reserved for cards.
- **Paper White** (#FFFFFF): cards, inputs, sheets, the basket panel.
- **Mist** (#E2F8F0): tinted tiles behind icons, tags, quiet pills, input-adjacent chips.
- **Pine Grey** (#46605A): secondary text, placeholders, inactive icons (about 6:1 on white). Always green-tinted, never neutral grey.
- **Sage on Dark** (#9FC4B7): secondary text and inactive icons on the forest rail.
- **Hairline Mint** (#D5ECE3): 1px card and input borders.
- **Amber** (#E8A317): rating stars only. **Rust** (#C2410C): "Cancelled" status text only.

### Named Rules
**The One Mint Rule.** Electric Mint marks the single most important action in a region. Two mint-filled buttons side by side means one of them is wrong; demote it to the secondary (outline) or Mist version.

**The Forest Frame Rule.** Structure is forest, never black and never mint. The rail, the floating basket bar and selected chips use Deep Forest; they are the frame around the food.

**The Tinted Text Rule.** No neutral greys. Secondary text is Pine Grey, tertiary on dark is Sage; both carry the green hue.

## Typography

**Display / Headline / Title / Price font:** Barlow (stand-in for DIN Neuzeit Grotesk; use the original if it can be loaded)
**Body / Label font:** Figtree (stand-in for Avenir Light; Light 300 for descriptions, Regular to SemiBold for UI)

**Character:** Barlow is compact and engineered, like a menu board or a delivery docket: good for names and money. Figtree is round and friendly, readable at 14px Light. The pairing is "precise numbers, warm sentences".

### Hierarchy
- **Display** (Barlow Bold 700, 30 to 38px mobile to desktop, line-height about 1.15; ETA minutes go up to 64 to 72px): page titles ("Checkout", "Track order"), greeting, hero ETA.
- **Headline** (Barlow SemiBold 600, 20 to 24px): section headers ("Browse by category"), card titles, basket title.
- **Title** (Barlow SemiBold 600, 16 to 20px): dish names, restaurant names, button labels (Bold 700 at 18 to 19px on the primary button).
- **Price** (Barlow Bold 700, 18 to 30px): every price and total. Small line items use Barlow Medium 15px.
- **Body** (Figtree Light 300, 14 to 16px, line-height 20 to 24px): dish descriptions, subtitles. Measure about 45 to 60 characters inside cards.
- **Label** (Figtree SemiBold 600, 14px): chips, links, field labels (Medium 500, 13px), nav items (Medium 500 inactive, SemiBold active, 14 to 15px).
- **Caption** (Figtree Regular 400, 12 to 13px): meta lines, tags, helper text. 12px is the floor.

### Named Rules
**The Numbers Are Barlow Rule.** Prices, quantities, ETAs, order numbers and totals are always Barlow. A price in Figtree looks like an afterthought.

**The No Eyebrow Rule.** Headings stand alone; no small uppercase kicker above them.

## Layout

**Desktop (1440 wide):** three fixed zones. Left rail 216px (forest), fluid main column (32px side padding, 816px of content), right panel 344px (white, 1px hairline on its left edge) holding the basket or the order summary. Pages without a basket (Account, Login) drop the right panel and use two columns inside main.

**Mobile (390 wide):** single column, 20px gutters, status bar 44px, bottom tab bar 80px (4 tabs: Home, Search, Track order, Account; active tab in Evergreen). Pages that sell show a floating basket bar (350 by 60, forest, radius 18) above the tab bar; pages that confirm (Checkout, Basket) replace the tab bar with a fixed bottom action bar (white, top hairline, mint button 56px).

**Rhythm:** sections are separated by 20 to 28px (desktop) and 16 to 24px (mobile); inside cards 12 to 16px; card padding 24px desktop, 18px mobile, 12 to 14px for list-item cards. Section heading to content: 14 to 16px.

**Grids:** categories 6 columns, restaurants 3, dishes 4 on the Home page; menu items 2 columns on the restaurant page (horizontal cards with a 112px photo). Mobile lists are one column; categories and restaurants scroll horizontally with the last card cropped by the edge as the scroll hint.

**Structure of an ordering page:** Back link, page title with a one-line context, content cards, then the persistent basket or summary. Pop-ups (item detail) are a centered 880px modal with a 320px photo column on desktop and a bottom sheet (radius 28, photo on top, footer pinned) on mobile.

## Elevation & Depth

Hybrid: hairline plus a soft ambient shadow at rest, tonal layering for structure.

### Shadow Vocabulary
- **Card rest** (`0 4px 16px rgba(13,38,30,0.07)`, plus a 1px Hairline Mint border): cards, inputs on hover, restaurant and dish cards.
- **Control lift** (`0 2px 8px rgba(13,38,30,0.15 to 0.2)`): the "+" button and quantity stepper over photos, round icon buttons over covers.
- **Floating bar** (`0 8px 24px rgba(13,38,30,0.25)`): the mobile basket bar.
- **Modal** (`0 24px 64px rgba(13,38,30,0.3)`): item detail modal and sheet.
- **Scrim:** Deep Forest at 60% over the page behind a modal (set as node opacity, not as paint alpha, in Figma).

### Named Rules
**The Quiet Rest Rule.** Shadows are soft and green-tinted (offset y, blur 8 to 24). No hard offset shadows, no colored glows.

## Shapes

Rounded but not bubbly. Containers use 16 to 20px, controls 12px, anything tappable that stands alone (chips, secondary buttons, search, address pill) is a full pill. The primary CTA is the one tall rounded rectangle (56px, radius 16) so it reads differently from the pill family. Photos are always rounded (12px inside cards, 16 to 20px for covers) and cropped with FILL. Avatars and status dots are circles. Sheets round only the top corners (28px).

## Components

### Buttons
- **Primary:** Electric Mint fill, Deep Forest Barlow Bold 18 to 19px label, radius 16, height 56 (52 in forms); optional 20px arrow or lock icon after the label. Used once per region.
- **Secondary:** Paper White, 1.5px Hillside Green border, Evergreen Barlow SemiBold 15px label, pill, height 38 to 46. Used for "Reorder", "Message", "Contact support", "View menu".
- **Dark:** Deep Forest fill, Forest-on-dark label with a mint arrow, pill, height 42. Used inside the mint promo banner.
- **Add ("+"):** 36px square, radius 12, mint, Forest plus icon; becomes a 96 by 36 mint pill stepper ("- 1 +") once the item is in the basket.
- **Links:** Evergreen Figtree SemiBold 14px, optional 16 to 18px icon.

### Chips and Tabs
- **Selected:** Deep Forest fill, on-dark label, count in Sage on Dark (Barlow SemiBold).
- **Default:** Paper White with Hairline Mint border, primary label, count in Pine Grey.
- Used for category jump (Main Courses, Starters, Drinks, Desserts), result filters (All, Restaurants, Dishes), account tabs, tip amounts (equal-width variant, radius 12).

### Cards / Containers
- **Dish card (vertical):** radius 16, 12px padding, 12px-radius photo, name (Barlow SemiBold 16), restaurant (13px Pine Grey), price and "+" on one row.
- **Menu item card (horizontal):** radius 16, 14px padding, text column left (name, tags, 2-line description, price), 112px photo right with the add control in its bottom-right corner. Sold-out state: text and photo at about 50%, dark "Sold out today" pill on the photo, no add button.
- **Restaurant card:** radius 16, clipped; 136px cover with heart (34px circle, top right) and delivery-time pill (bottom left); body with name, cuisine, rating and fee.
- **Summary / basket panel:** white column, 24px padding, rows with 48px thumbnails or mint tiles, hairline dividers, total in Barlow Bold 28 to 30.
- **Status card:** pill status, ETA in Barlow Bold 72, four-step progress (done: mint circle with check; current: ringed circle with mint dot; upcoming: outlined circle), courier callout in a Mint Wash band.

### Inputs / Fields
- **Style:** Paper White, 1px Hairline Mint border, radius 12, height 48 to 52, 20px leading icon in Pine Grey, 15px value. Label above (Figtree SemiBold 14, or Medium 13 in dense forms).
- **Focus:** 2px Fresh Leaf border, icon turns Evergreen. **Selected option rows** (radio/checkbox): 2px Hillside Green border and Mint Wash fill; radio dot Hillside Green, checkbox mint with a Forest check.
- **Switch:** 46 by 26 pill; on = mint with right knob, off = tint-200 with left knob.

### Navigation
- **Rail (desktop):** forest, logo mark (36px mint rounded square with a plate glyph) plus lowercase "mesa" wordmark in Barlow Bold, four 48px items with 22px line icons. Active: mint fill, Forest SemiBold label, 2px icon stroke. Inactive: Sage on Dark. "Track order" carries a count badge while an order is live. Signed-in user chip at the bottom (Forest-raised fill).
- **Tab bar (mobile):** white, top hairline, icon 24px above a 12px label; active in Evergreen with heavier stroke.

### Status and Tags
- **Status pill:** pill with 7 to 8px dot; live = Mist fill, Evergreen text, Fresh Leaf dot; done = Mist, Pine Grey text; cancelled = Mist, Rust text.
- **Tags** (Popular, Vegan, Vegetarian, Gluten-friendly): 12px Figtree Medium, Mist or tint fill, Evergreen text; Popular carries an amber star.

### Signature: Live order strip
A white card at the top of Home (and the status card on Track order) that shows restaurant, order number, four-step progress, ETA in Barlow Bold, and a "Track order" action. It is the visible proof that the app tracks the order; the mobile version collapses to a single row plus a 4-segment bar.

## Do's and Don'ts

### Do:
- **Do** set page ground to Mint Wash (#F3FCF8) and cards to white; separate them with the hairline and the Card rest shadow.
- **Do** use mint for exactly one primary action per region, and Forest for structure and selected states.
- **Do** set every price, quantity, ETA and total in Barlow; descriptions in Figtree Light 14 to 15px.
- **Do** use top-down daylight food photography on a pale mint-white surface; crop with FILL and round the corners.
- **Do** show real states: in-basket stepper, sold out, required vs optional option groups, focus ring, empty basket, validation checklist.
- **Do** draw icons as 1.75 to 2px line SVGs, in Evergreen on Mist tiles or Pine Grey/Sage when inactive.
- **Do** keep fictional data consistent across screens (see FIGMA_BUILD_NOTES.md): the same basket, totals, order number and courier everywhere.

### Don't:
- **Don't** use neutral greys, pure black or a yellow/orange accent; every tone stays in the green family (amber only for star ratings, rust only for "Cancelled").
- **Don't** put an eyebrow/kicker above headings, use gradient text, glass blur for decoration, or colored side borders on cards.
- **Don't** use emoji or text glyphs as icons.
- **Don't** put two mint-filled buttons in the same region, or mint text on white (use Evergreen).
- **Don't** nest cards inside cards, or build screens from identical icon-plus-heading-plus-text tiles.
- **Don't** invent real brands, customers or claims; labelled demo content only ("Portfolio demo" on auth screens).
- **Don't** rely on DIN Neuzeit Grotesk or Avenir Light inside Figma; use Barlow and Figtree unless the user supplies the originals.
