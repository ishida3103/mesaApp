// Mesa: reusable prelude for `use_figma` calls (Figma Plugin API, top-level await, no IIFE).
// Paste this at the top of a use_figma script, then build screens with F / T / R / icon / add.
// Everything here was used to build the 9 screen sets documented in FIGMA_BUILD_NOTES.md.
//
// File: https://www.figma.com/design/yUUU8aba0wWqVgHxxqIlcT/Projetos-Principais  (page "Demandas", id 86:2)
// Always: create_session first, pass skillNames "resource:figma-use,resource:figma-generate-design".

const page = figma.root.children.find(p => p.id === '86:2');
await figma.setCurrentPageAsync(page);                       // once per call, and re-switch every call

// ---- color variables ("Mesa / Color" collection; names like 'green/500', 'text/primary') ----
const col = (await figma.variables.getLocalVariableCollectionsAsync()).find(c => c.name === 'Mesa / Color');
const V = {}; for (const id of col.variableIds) { const v = await figma.variables.getVariableByIdAsync(id); V[v.name] = v; }
// Bound fill. NEVER put `opacity` on this paint (it is dropped): set node.opacity instead.
const solid = (n) => figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', V[n]);

// ---- fonts (Figma has no DIN Neuzeit Grotesk / Avenir Light: Barlow + Figtree stand in) ----
await Promise.all([['Barlow','Medium'],['Barlow','SemiBold'],['Barlow','Bold'],['Figtree','Light'],['Figtree','Regular'],['Figtree','Medium'],['Figtree','SemiBold']]
  .map(([family, style]) => figma.loadFontAsync({ family, style })));

// ---- primitives ----
// Text. o: { f:'Barlow'|'Figtree', w:weight, s:size, c:colorVariable, lh:px, align, name }
const T = (s, o = {}) => { const t = figma.createText(); t.fontName = { family: o.f || 'Figtree', style: o.w || 'Regular' }; t.characters = s; t.fontSize = o.s || 14; t.fills = [solid(o.c || 'text/primary')]; if (o.lh) t.lineHeight = { unit: 'PIXELS', value: o.lh }; if (o.align) t.textAlignHorizontal = o.align; t.name = o.name || s.slice(0, 28); return t; };
// Text with the matched query highlighted (Search results)
const TH = (s, q, o = {}) => { const t = T(s, o); const i = s.toLowerCase().indexOf(q.toLowerCase()); if (i >= 0) { t.setRangeFills(i, i + q.length, [solid('text/accent')]); t.setRangeFontName(i, i + q.length, { family: o.f || 'Figtree', style: o.f === 'Barlow' ? 'Bold' : 'SemiBold' }); } return t; };
// Auto-layout frame. o: gap, p/px/py/pl/pr/pt/pb, fill(var name), r, stroke(var name)+sw, shadow, clip, main, cross
const F = (name, dir, o = {}) => { const f = figma.createAutoLayout(dir, { name }); f.itemSpacing = o.gap || 0; f.paddingLeft = o.pl ?? o.px ?? o.p ?? 0; f.paddingRight = o.pr ?? o.px ?? o.p ?? 0; f.paddingTop = o.pt ?? o.py ?? o.p ?? 0; f.paddingBottom = o.pb ?? o.py ?? o.p ?? 0; f.fills = o.fill ? [solid(o.fill)] : []; if (o.r !== undefined) f.cornerRadius = o.r; if (o.stroke) { f.strokes = [solid(o.stroke)]; f.strokeWeight = o.sw || 1; f.strokeAlign = 'INSIDE'; } if (o.shadow) f.effects = [{ type: 'DROP_SHADOW', color: { r: 0.05, g: 0.15, b: 0.12, a: 0.07 }, offset: { x: 0, y: 4 }, radius: 16, spread: 0, visible: true, blendMode: 'NORMAL' }]; f.clipsContent = !!o.clip; if (o.main) f.primaryAxisAlignItems = o.main; if (o.cross) f.counterAxisAlignItems = o.cross; return f; };
// Append THEN set FILL (FILL only works after the node has an auto-layout parent). Text + fw => wraps.
const add = (p, c, o = {}) => { p.appendChild(c); if (o.fw) { if (c.type === 'TEXT') c.textAutoResize = 'HEIGHT'; c.layoutSizingHorizontal = 'FILL'; } if (o.fh) c.layoutSizingVertical = 'FILL'; return c; };
// Rectangle, optionally with an image fill by imageHash
const R = (name, w, h, o = {}) => { const r = figma.createRectangle(); r.name = name; r.resize(w, h); r.fills = o.img ? [{ type: 'IMAGE', imageHash: o.img, scaleMode: 'FILL' }] : [solid(o.fill || 'surface/tint')]; if (o.r !== undefined) r.cornerRadius = o.r; return r; };
const D = () => { const r = figma.createRectangle(); r.name = 'Divider'; r.resize(100, 1); r.fills = [solid('border/subtle')]; return r; }; // add(..., {fw:true})
const SHD = (a) => [{ type: 'DROP_SHADOW', color: { r: 0.05, g: 0.15, b: 0.12, a }, offset: { x: 0, y: 2 }, radius: 8, spread: 0, visible: true, blendMode: 'NORMAL' }];

// ---- icons (24px line SVGs; createNodeFromSvg gives editable vectors; colors are literal hex) ----
const IC = {
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>', search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>', user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
  plate:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>', plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>', close:'<path d="M6 6l12 12M18 6 6 18"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>', arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>', left:'<path d="m15 6-6 6 6 6"/>', right:'<path d="m9 6 6 6-6 6"/>', down:'<path d="m6 9 6 6 6-6"/>',
  pin:'<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>', bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 21h4"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>', share:'<path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"/>',
  star:'<path fill="currentColor" d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>', // fill icon: currentColor is replaced by the color arg
  sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>', tag:'<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.2"/>',
  bag:'<path d="M5 8h14l-1.2 11.2a1 1 0 0 1-.8.8H7.2a1 1 0 0 1-1-.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>', trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>', logout:'<path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M16 8l4 4-4 4M20 12H9"/>',
  refresh:'<path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4"/>', mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  lock:'<rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>', eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z"/>', chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  scooter:'<circle cx="6" cy="17.5" r="2.5"/><circle cx="18" cy="17.5" r="2.5"/><path d="M8.5 17.5H14l-1.5-9H10M14.5 15l2.5-6.5h2.5"/>',
  card:'<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10.5h18M7 15h3"/>', wallet:'<path d="M4 7a2 2 0 0 1 2-2h11v4"/><rect x="3" y="7" width="18" height="13" rx="2.5"/><circle cx="16.5" cy="13.5" r="1.2"/>',
  cash:'<rect x="3" y="6" width="18" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.8"/>', briefcase:'<rect x="3" y="8" width="18" height="12" rx="2.5"/><path d="M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>', flame:'<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-9-2 2-2 4-3 5-1-1-1.5-2-1.5-3C7 10 6 12.5 6 15a6 6 0 0 0 6 6z"/>',
  trend:'<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  burger:'<path d="M4 11a8 6 0 0 1 16 0z"/><path d="M3 14h18"/><path d="M4 17h16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/>',
  pizza:'<path d="M12 21 3.5 5.5a17 17 0 0 1 17 0z"/><circle cx="10.5" cy="9" r="1"/><circle cx="14" cy="11" r="1"/><circle cx="12" cy="14.5" r="1"/>',
  sushi:'<rect x="3" y="12" width="18" height="7" rx="3.5"/><path d="M4.5 12c1-4.5 4-6.5 7.5-6.5s6.5 2 7.5 6.5"/><path d="M9 7.5l1 4.5M13 6l.5 6"/>',
  salad:'<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M8 12c0-3 1.5-5 4-6 0 3-1 5-4 6zM13 12c1-3 3-4.5 6-4.5-.5 3-2.5 4.5-6 4.5z"/>',
  dessert:'<path d="M5.5 12h13l-1.4 8H6.9z"/><path d="M6 12a6 4.5 0 0 1 12 0"/><path d="M12 7.5V5.5"/>',
  drink:'<path d="M6 8h12l-1.2 12.2a1 1 0 0 1-.8.8H8.2a1 1 0 0 1-1-.8z"/><path d="M5 8h14"/><path d="m13 8 1.5-5H18"/>', soup:'<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M8 8c0-1.5 1-1.5 1-3M12 8c0-1.5 1-1.5 1-3M16 8c0-1.5 1-1.5 1-3"/>'
};
const icon = (n, s, color, sw = 1.75) => { const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${IC[n].replace(/currentColor/g, color)}</svg>`; const f = figma.createNodeFromSvg(svg); f.name = 'icon/' + n; f.resize(s, s); f.fills = []; f.clipsContent = false; return f; };
const C = { dark: '#0D261E', muted: '#9FC4B7', acc: '#197153', sec: '#46605A', amber: '#E8A317', mint: '#19ECA1' };
const tile = (name, size, fill, r, ic, icSize, icColor) => { const t = F(name, 'HORIZONTAL', { main: 'CENTER', cross: 'CENTER', fill, r }); t.resize(size, size); t.appendChild(icon(ic, icSize, icColor)); return t; };

// ---- shared chrome ----
// Desktop sidebar. active: 'Home' | 'Search' | 'Track order' | 'Account'. After appending to the root: rail.layoutSizingVertical = 'FILL'.
const Rail = (active) => {
  const rail = F('Sidebar', 'VERTICAL', { p: 24, gap: 36, fill: 'surface/rail' }); rail.resize(216, 100); rail.layoutSizingVertical = 'HUG';
  const logo = F('Logo', 'HORIZONTAL', { gap: 10, cross: 'CENTER' }); logo.appendChild(tile('Logo mark', 36, 'green/500', 10, 'plate', 22, C.dark)); logo.appendChild(T('mesa', { f: 'Barlow', w: 'Bold', s: 28, c: 'text/on-dark' })); rail.appendChild(logo);
  const nav = F('Navigation', 'VERTICAL', { gap: 4 }); add(rail, nav, { fw: true });
  [['Home', 'home'], ['Search', 'search'], ['Track order', 'clock', '1'], ['Account', 'user']].forEach(([label, ic, badge]) => {
    const a = label === active; const it = F('Nav / ' + label, 'HORIZONTAL', { gap: 10, px: 12, cross: 'CENTER', fill: a ? 'green/500' : undefined, r: 14 }); it.resize(100, 48);
    it.appendChild(icon(ic, 22, a ? C.dark : C.muted, a ? 2 : 1.75)); it.appendChild(T(label, { w: a ? 'SemiBold' : 'Medium', s: 14, c: a ? 'text/primary' : 'text/on-dark-muted' }));
    if (badge) { const sp = F('spacer', 'HORIZONTAL'); add(it, sp, { fw: true }); const b = F('Badge', 'HORIZONTAL', { main: 'CENTER', cross: 'CENTER', fill: 'green/500', r: 999 }); b.resize(22, 22); b.appendChild(T(badge, { f: 'Barlow', w: 'Bold', s: 13, c: 'text/primary' })); it.appendChild(b); }
    add(nav, it, { fw: true });
  });
  const spR = F('spacer', 'VERTICAL'); add(rail, spR, { fh: true });
  const me = F('Signed-in user', 'HORIZONTAL', { gap: 10, cross: 'CENTER', p: 10, fill: 'green/900', r: 16 }); add(rail, me, { fw: true });
  const av = F('Avatar', 'HORIZONTAL', { main: 'CENTER', cross: 'CENTER', fill: 'green/700', r: 999 }); av.resize(38, 38); av.appendChild(T('AR', { f: 'Barlow', w: 'SemiBold', s: 14, c: 'text/on-dark' })); me.appendChild(av);
  const meT = F('Name', 'VERTICAL', { gap: 1 }); me.appendChild(meT); meT.appendChild(T('Alex Rivera', { w: 'SemiBold', s: 14, c: 'text/on-dark' })); meT.appendChild(T('Signed in', { s: 13, c: 'text/on-dark-muted' }));
  return rail;
};
// Mobile bottom tabs (add with { fw:true } as last child of the phone frame)
const TabBar = (active) => { const tabs = F('Tab bar', 'HORIZONTAL', { pt: 10, pb: 26, px: 8, fill: 'surface/card', stroke: 'border/subtle' });
  [['Home', 'home'], ['Search', 'search'], ['Track order', 'clock'], ['Account', 'user']].forEach(([l, ic]) => { const a = l === active; const t = F('Tab / ' + l, 'VERTICAL', { gap: 4, cross: 'CENTER', main: 'CENTER' }); add(tabs, t, { fw: true }); t.appendChild(icon(ic, 24, a ? C.acc : C.sec, a ? 2.2 : 1.75)); t.appendChild(T(l, { w: a ? 'SemiBold' : 'Medium', s: 12, c: a ? 'text/accent' : 'text/secondary' })); });
  return tabs; };
const StatusBar = (root, dark) => { const sb = F('Status bar', 'HORIZONTAL', { px: 28, main: 'SPACE_BETWEEN', cross: 'CENTER' }); sb.resize(100, 44); add(root, sb, { fw: true }); sb.appendChild(T('9:41', { f: 'Barlow', w: 'SemiBold', s: 16, c: dark ? 'text/on-dark' : 'text/primary' })); sb.appendChild(R('Battery', 24, 12, { fill: dark ? 'text/on-dark' : 'text/primary', r: 4 })); };

// ---- patterns to copy ----
// Desktop frame:  const root = F('X / Desktop','HORIZONTAL',{fill:'surface/page',clip:true}); root.resize(1440,100); root.layoutSizingVertical='HUG'; sec.appendChild(root); root.x=80; root.y=120;
//                 const rail = Rail('Home'); root.appendChild(rail); rail.layoutSizingVertical='FILL';
//                 const main = F('Main','VERTICAL',{px:32,pt:28,pb:48,gap:20}); main.resize(100,100); main.layoutSizingVertical='HUG'; add(root,main,{fw:true});
//                 right panel: F('Order summary','VERTICAL',{p:24,gap:18,fill:'surface/card',stroke:'border/subtle'}); resize(344,100); then layoutSizingVertical='FILL' after append.
// Phone frame:    const mr = F('X / Mobile','VERTICAL',{fill:'surface/page',clip:true}); mr.resize(390,100); mr.layoutSizingVertical='HUG'; StatusBar(mr); content F px:20 gap:16 ...; add(mr, TabBar('Home'), {fw:true});
//                 floating bar / fixed action bar: appendChild to the frame, layoutPositioning='ABSOLUTE', then x/y (y = frame.height - bar.height - tab bar - 12).
// New section:    next y = max(section.y + section.height) over page SECTIONs + 120; x = 4152; fills {r:.93,g:.96,b:.95}; set size AFTER appending children; child x/y are relative to the section.
// Reuse photos:   read hashes from existing frames, never regenerate: node.findOne(n=>n.name==='Dish photo').fills[0].imageHash (see FIGMA_BUILD_NOTES.md).
// Reuse chrome:   figma.getNodeByIdAsync('217:66') (Home desktop).findOne(n=>n.name==='Basket').clone() gives the right-hand basket; remove its 'spacer' child; layoutSizingVertical='FILL'.
// Return IDs from every call; verify with get_screenshot (download via curl, then Read the PNG).
