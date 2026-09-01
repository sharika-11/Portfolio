# Design System — "Pink Ruled"

Recorded from the built world (index.html / styles.css / script.js). Brief-pinned by the user: shades of pink, ruled background lines, flower emojis, code signs, AOS animation, deliberately simple code.

## World

A student developer's notebook on pink graph paper. Ruled horizontal + vertical lines, botanical emoji accents, and oversized code punctuation share one sheet. Refuses the gradient-hero / icon-card portfolio template.

## Color

Pink scale only — no gold, no purple, no gradient text.

| Role | Token | Value | Use |
|---|---|---|---|
| Paper | `--paper` | `#fdf6f9` | Page ground |
| Ink | `--pink-ink` | `#43242f` | Headings, body |
| Rose (deep) | `--pink-700` | `#a13a63` | Section titles, buttons, small labels (AA-safe on paper) |
| Rose (mid) | `--pink-500` | `#c95c86` | Flower accents, code glyphs, decorative only |
| Rose (soft) | `--pink-400` | `#d987a6` | Underlines, borders, scroll line |
| Blush | `--pink-300/200/100` | `#e7a8c0` `#f3cfdd` `#fbe9f0` | Rules, card borders, portrait ground |
| Muted | `--muted` | `#75525f` | Secondary text (~5.5:1) |

Contrast rules: small text never uses `--pink-500` on paper (3.7:1) — labels use `--pink-700` (6:1). Footer text is `--pink-100` on `--pink-700`.

## Background graphics & Botanical Accents

- **Rule grid** (`body`): two 1px `linear-gradient` layers, 56px cells, `rgba(161,58,99,0.07)`. User-pinned.
- **Code glyphs** (`.code-glyph`): `</>`, `;`, `#`, `=>`, `{ }` in Fragment Mono, up to ~19rem, `--pink-500` at 7% opacity, absolutely placed per section, `aria-hidden`, `pointer-events: none`.
- **Flower Emojis**: Curated botanical emojis (`🌸`, `🌺`, `🌼`, `💮`, `🌷`, `✨`, `✿`, `🌻`) placed thoughtfully:
  - Preloader pulsing bloom (`🌸 ✨`)
  - Rotating brand flower (`🌸`)
  - Nav link petals on hover (`🌸`, `✨`, `💮`, `🌺`, `🌷`)
  - Hero name cascaded floral bursts (`🌸`, `🌷`, `✨`, `🌼`, `💮`, `✦`, `🌺`)
  - Hero portrait perimeter arch blooms & corner sticker badges (`🌸`, `🌺`)
  - Interactive section title blooms (About `🌸`, Toolbox `✨`, Record `💮`, Hobbies `🌺`, Contact `🌷`)
  - Skill row indicators & hobby card feature emojis

## Layout & Components

- `.wrap`: 1080px max-width, fluid inline padding.
- **Hero**:
  - Desktop (>860px): 2-col grid (1.15fr / 0.85fr).
  - Mobile (≤860px): CSS Grid with `display: contents` placing the Portrait directly beside the Hero Name at the top row, followed by Subtitle, Description, and CTAs.
- **Facts**: Interactive frosted paper cards with 3.5px left rose highlight border and hover lift.
- **Skills index**: Elevated interactive rows with flower emoji bullets, skill name shift, and mono note badges.
- **Timeline**: Milestone cards with styled mono year tags, hover highlight, and subtle elevation.
- **Hobbies**: Tactile frosted cards with bouncing flower emojis and smooth lift.
- **Contact**: Frosted card form with rose focus glow + interactive pill links.
- **Footer**: Solid `--pink-700` band with animated flower emoji.

## Motion & Craft Interactions

- **Preloader**: 2.0s notebook-styled preloader with blooming emoji and ruled progress bar.
- **AOS 2.3.4**: Staggered `fade-up` reveals.
- **Hero Background Evasion Physics**: Floating floral emojis and code glyphs ambiently float with serene harmonic drift, scurrying away with physics repulsion when cursor approaches.
- **Button Micro-interactions**: Solid CTA angled shimmer sheen & blossom spin; Ghost CTA sliding fill & arrow glide; ripple on click.
- **Hamburger Menu**: Fixed to top-right corner on mobile viewports.

