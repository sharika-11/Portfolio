# Design System — "Pink Ruled"

Recorded from the built world (index.html / styles.css / script.js). Brief-pinned by the user: shades of pink, ruled background lines, flowers, code signs, AOS animation, deliberately simple code.

## World

A student developer's notebook on pink graph paper. Ruled horizontal + vertical lines, botanical line work, and oversized code punctuation share one sheet. Refuses the gradient-hero / icon-card portfolio template.

## Color

Pink scale only — no gold, no purple, no gradient text.

| Role | Token | Value | Use |
|---|---|---|---|
| Paper | `--paper` | `#fdf6f9` | Page ground |
| Ink | `--pink-ink` | `#43242f` | Headings, body |
| Rose (deep) | `--pink-700` | `#a13a63` | Section titles, buttons, small labels (AA-safe on paper) |
| Rose (mid) | `--pink-500` | `#c95c86` | Flowers, code glyphs, decorative only |
| Rose (soft) | `--pink-400` | `#d987a6` | Underlines, borders, scroll line |
| Blush | `--pink-300/200/100` | `#e7a8c0` `#f3cfdd` `#fbe9f0` | Rules, tint washes, portrait ground |
| Muted | `--muted` | `#75525f` | Secondary text (~5.5:1) |

Contrast rules: small text never uses `--pink-500` on paper (3.7:1) — labels use `--pink-700` (6:1). Footer text is `--pink-100` on `--pink-700`.

## Background graphics

- **Rule grid** (`body`): two 1px `linear-gradient` layers, 56px cells, `rgba(161,58,99,0.07)`. User-pinned.
- **Code glyphs** (`.code-glyph`): `</>`, `;`, `#`, `=>`, `{ }` in Fragment Mono, up to ~19rem, `--pink-500` at 7% opacity, absolutely placed per section, `aria-hidden`, `pointer-events: none`.
- **Flowers**: hand-authored SVG line work (stroke only, `currentColor`), three marks — five-petal bloom, four-petal bud, sprig with leaves. Placed: hero cluster overlapping the arch portrait, 22px bud beside every section title, 26px bud above hobby columns, 16px in footer.

## Typography

- **Display + body**: Bricolage Grotesque (variable, 300–800). H1 `clamp(2.7rem, 7vw, 4.9rem)` w750; H2 `clamp(1.9rem, 4.5vw, 2.8rem)` w700 in `--pink-700`.
- **Mono**: Fragment Mono — subtitles, labels (0.72rem, uppercase, 0.14em tracking), years, skill notes, code glyphs.

## Layout components

- `.wrap`: 1080px, fluid inline padding.
- **Hero**: 2-col grid (1.15fr/0.85fr) → 1 col ≤860px. Portrait: 3/4 arch (`border-radius: 999px 999px 26px 26px`), 1px border + offset outline ring, flower cluster overlap.
- **Facts**: 2-col dl, mono uppercase dt, hairline top rules → 1 col ≤560px.
- **Skills index**: full-width rows, name left / mono note right, hairline rules; no pills, no bars, no cards.
- **Timeline**: year (mono) + content rows with hairline rules.
- **Hobbies**: 3 text columns with flower marks, no icon tiles.
- **Contact**: info + form (visible labels, 1rem inputs, mailto submit).
- **Footer**: solid `--pink-700` band — pink committed at page scale.

## Motion & Craft Interactions

- **Theme Preloader**: Notebook-styled preloader with graph paper ground, core/petal blooming SVG animation, and ruled line progress bar before site reveal.
- **AOS 2.3.4 & Staggered Reveal**: `fade-up` reveals, `once: true`, 700ms ease-out-cubic, disabled under `prefers-reduced-motion`. Coordinated entrance animations for navbar, hero text, and portrait once preloader dismisses.
- **Failsafe**: if the AOS CDN fails, `data-aos` attributes are stripped so content never stays hidden.
- **Hero Name Floral Bloom**: Hovering over "Sharika Akter Sneha" triggers a coordinated staggered cascade of hand-authored SVG flower buds, blooming petals, and sparkles.
- **Hero Portrait Floral Bloom**: Simplified, elegant floral bloom system around the portrait arch (matching the hero name mechanic) that blossoms outward on hover/focus.
- **Header Menu Floral Bloom**: Nav menu items reveal larger blooming flower SVGs and petals on hover with smooth cubic-bezier spring elevation.
- **Hero Background Evasion Physics**: Floating floral marks, emojis, and mono code glyphs ambiently float with serene, slowed harmonic drift; when the cursor approaches, a physics engine repels them with inverse-distance force vectors before damped spring tension smoothly returns them to their orbit.
- **Interactive Kinetic Description**: Key terms (*algorithms*, *design*, *ICPC*, *Dhaka*) feature ink-wash highlights with smooth hover expansion.
- **Super Animated Buttons**: Solid CTA features an angled light shimmer sheen on hover and spinning blossom; Ghost CTA features "See my resume" with fill sweep and arrow glide; click ripple burst on all buttons.
- **Brand Flower**: Enlarged 28px brand flower with 180° spin on hover.

## Responsive

- Breakpoints: 968px (hamburger drawer), 860px (hero stacks, portrait centers), 560px (single-column everything, full-width buttons, smaller glyphs), 640px height (scroll hint hidden).
- Touch targets ≥44px (48px in drawer/buttons); `env(safe-area-inset-*)` on navbar and footer; `viewport-fit=cover`.

## Accessibility

- Semantic landmarks, visible form labels, skip-free logical tab order, `:focus-visible` rings, `aria-expanded`/`aria-label` menu state, Escape/outside-click close, decorative SVGs `aria-hidden`, alt text on portrait, WCAG AA contrast documented above.
- Full `prefers-reduced-motion` compliance cleanly stops evasion physics and transitions shroud smoothly without jarring movement.

## Deliberate refusals (anti-slop)

No generic AI-slop, no random blue/purple neon gradients, no uncalibrated cards, no cookie-cutter templates, no hover-only essential information. Everything remains cohesive to the Pink Ruled paper world.

