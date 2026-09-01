# 🌸 Sharika Akter Sneha — Developer & Creative Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-sneha423--portfolio.vercel.app-pink?style=for-the-badge&logo=vercel&logoColor=white)](https://sneha423-portfolio.vercel.app/)
[![Theme](https://img.shields.io/badge/Theme-Pink_Ruled_Notebook-a13a63?style=for-the-badge)](https://sneha423-portfolio.vercel.app/)
[![Design](https://img.shields.io/badge/Design-Bento_Gallery_%26_Botanical_Blooms-c95c86?style=for-the-badge)](https://sneha423-portfolio.vercel.app/)

> 🌸 **Live Portfolio:** [https://sneha423-portfolio.vercel.app/](https://sneha423-portfolio.vercel.app/)

A personal developer portfolio and creative showcase for **Sharika Akter Sneha** — 3rd-year CSE student at the *University of Asia Pacific*, Dhaka, competitive programmer, and visual artist.

---

## 🌺 Overview & Concept: "Pink Ruled"

The website is styled as a student developer's personal notebook on pink graph paper. Ruled horizontal and vertical grid lines, delicate botanical emojis, and oversized code punctuation share a single aesthetic sheet, deliberately refusing generic cookie-cutter templates.

### ✨ Key Highlights

- **🌸 Botanical Bloom Micro-Interactions**: Interactive floral emojis (`🌸`, `🌺`, `🌼`, `💮`, `🌷`, `✨`) that blossom dynamically on hover across the hero name, arch portrait, navigation links, and bento artwork cards.
- **🎨 Bento Box Artworks Showcase**: An asymmetric Bento Grid featuring fine artworks, watercolors, and digital paintings with flower-revealing hover effects and a high-resolution Lightbox viewer.
- **📐 Flower-Themed Section Dividers**: Frosted botanical medallions with dual hairline gradient rules and subtle ("shuttle") section background palette transitions.
- **🍃 Ambient Particle Evasion Physics**: Floating floral marks and code glyphs drift harmoniously and scurry away upon cursor proximity with physics spring tension.
- **📱 Responsive Mobile Hero**: Adaptive CSS Grid (`display: contents`) positioning the portrait photograph directly beside the hero name on mobile devices.
- **⚡ 2.0s Themed Preloader**: Elegant graph-paper preloader with blooming flower animation and progress tracking.

---

## 🎨 Artworks Gallery (Bento Box)

The newly created **Artworks** section organizes visual pieces in a modern Bento layout:

| Artwork Piece | Type / Theme | Bento Grid Role |
|---|---|---|
| **A Moment in the Petal Storm** | Digital Painting · Atmospheric Study | *Featured Dominant Showcase* |
| **Whispers of the Cold Breeze** | Landscape · Winter Mist & Frost | *Tall Atmosphere Card* |
| **Autumn Trees** | Color Study · Golden Foliage | *Warm Palette Tile* |
| **Waterfall & Trees** | Nature Study · Cascading Water | *Verdant Cascade Tile* |
| **Harvest Scenery** | Rural Countryside · Golden Hour | *Pastoral Life Tile* |
| **Boat at Sunset** | Riverscape · Twilight Horizon | *Wide Sunset Panorama* |
| **Village Landscape** | Traditional Bengali Village Life | *Wide Heritage Tile* |

---

## 🗂️ Project Structure

```
portfolio/
├── index.html                           # Main single-page application structure
├── styles.css                           # "Pink Ruled" design system, bento grid & animations
├── script.js                            # Particle evasion engine, lightbox & scrollspy
├── DESIGN.md                            # Complete design system & token documentation
├── PRODUCT.md                           # Product context, goals & key audience
├── README.md                            # Project documentation & live links
└── images/                              # Image assets & artwork gallery
    ├── A Moment in the Petal Storm.jpg
    ├── Autumn Trees.jpg
    ├── Boat at Sunset - Landscape View.jpg
    ├── Harvest Scenery.jpg
    ├── Village Landscape.jpg
    ├── Waterfall & Trees.jpg
    ├── Whispers of the Cold Breeze.jpg
    └── profile-photo.jpg
```

---

## 🌷 Design System & Tokens

### Color Palette

| Token | Hex Value | Usage |
|---|---|---|
| `--paper` | `#fdf6f9` | Pale pink graph paper ground |
| `--pink-ink` | `#43242f` | Plum ink for headings and primary copy |
| `--pink-700` | `#a13a63` | Deep rose structure, section titles, buttons & footer |
| `--pink-500` | `#c95c86` | Mid-rose accents and decorative glyphs |
| `--pink-400` | `#d987a6` | Soft rose rules, outlines & border highlights |
| `--pink-300 / 200 / 100` | `#e7a8c0` / `#f3cfdd` / `#fbe9f0` | Graph grid rules, card grounds, tag badges |
| `--muted` | `#75525f` | Secondary text (~5.5:1 WCAG contrast) |

### Typography

- **Display & Headings**: *Bricolage Grotesque* (300–800)
- **Code & Numerals**: *Fragment Mono*

---

## 🚀 Running Locally

### Option 1: Python HTTP Server (Recommended)
```bash
# In the portfolio root directory
python -m http.server 8000
```
Visit `http://localhost:8000` in your web browser.

### Option 2: Node.js http-server
```bash
npx http-server -p 8000
```

### Option 3: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## ♿ Accessibility & Standards

- **WCAG AA Compliance**: High contrast ratios on all text elements (`--pink-ink` and `--pink-700` against `--paper`).
- **Keyboard Navigation**: Full tab ordering, `:focus-visible` rings, and `Escape` key handlers for both the mobile drawer and the Artworks Lightbox.
- **Reduced Motion Support**: Strictly respects `prefers-reduced-motion: reduce`, cleanly disabling evasion physics loops and replacing animations with instant transitions.
- **Zero AI Slop**: Strict color token adherence, hand-crafted interactions, semantic landmarks, and purposeful botanical details.

---

## 🌟 Live Deployment

🔗 **Website URL:** [https://sneha423-portfolio.vercel.app/](https://sneha423-portfolio.vercel.app/)

---

<p align="center">
  <em>Crafted with care, algorithms, and a few flowers 🌸</em>
</p>
