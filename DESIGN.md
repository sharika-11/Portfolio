# Design System & Implementation

## Color Palette

### Primary Colors
- `--primary-pink: #d4698f` - Main brand color
- `--rose: #c85a7a` - Darker pink accent
- `--blush: #e8b4c8` - Soft pink for supporting elements

### Secondary Colors
- `--orchid: #d8a5d4` - Purple accent
- `--lavender: #e6d8e8` - Light purple background
- `--soft-purple: #d4c8d8` - Muted purple

### Accent Colors
- `--gold-sparkle: #f4d03f` - Sparkle highlights
- `--champagne: #f5e6d3` - Warm neutral accent

### Neutral Colors
- `--pale-pink: #faf5f7` - Very light background
- `--accent-light: #f9edeb` - Section backgrounds
- `--white: #ffffff` - Primary background
- `--text-dark: #2d2d2d` - Primary text
- `--text-light: #666666` - Secondary text

## Typography

### Fonts
- **Headers:** Cormorant Garamond, serif - elegant, distinctive
- **Body:** Inter, sans-serif - clean, readable

### Scale
- H1: clamp(2rem, 5vw, 4rem)
- H2: clamp(1.75rem, 4vw, 3rem)
- H3: clamp(1.25rem, 3vw, 1.75rem)
- Body: clamp(0.95rem, 2vw, 1.1rem)

### Weights
- Regular: 400
- Semibold: 600
- Bold: 700

## Spacing System
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem

## Depth & Shadows
- `--shadow-sm: 0 2px 8px rgba(212, 105, 143, 0.1)` - Subtle
- `--shadow-md: 0 4px 16px rgba(212, 105, 143, 0.15)` - Medium
- `--shadow-lg: 0 8px 24px rgba(212, 105, 143, 0.2)` - Prominent

## Border Radius
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px

## Motion & Animation

### Transitions
- fast: 200ms ease
- smooth: 400ms ease
- slow: 600ms ease

### Key Animations
1. **Lenis Smooth Scrolling** - Duration 1.2s with exponential easing
2. **Float** - 3s ease-in-out infinite (hero sparkles, nav brand)
3. **Fade In** - Entrance animation with staggered timing
4. **Scale** - Card hover effects and initial load
5. **Parallax** - Hero image moves slower than scroll
6. **Pulse** - Icon animation on section cards
7. **Bounce** - Scroll indicator animation

## Components

### Navigation
- Fixed navbar with backdrop blur
- Gradient underline animation on active link
- Responsive and accessible

### Hero Section
- Split layout (text + profile image on desktop)
- Gradient text on main title
- Floating accent circles with animation
- Scroll indicator at bottom

### Cards
- White background with subtle top border
- Hover lift effect with shadow increase
- Icon + heading + description pattern
- Consistent 12-16px border radius

### Buttons
- Primary (gradient pink): Active, primary CTA
- Secondary (outlined pink): Secondary CTA
- Hover state with lift and shadow enhancement

### Forms
- Clean input styling
- Focus state with pink border and glow
- Validation feedback

## Responsive Design

### Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

### Key Adjustments
- Navigation becomes vertical on mobile
- Hero switches to single column
- Grid layouts adapt to available space
- Typography scales fluidly
- Touch targets remain 48px+ minimum

## Special Effects

### Glassmorphism
- Navbar uses `backdrop-filter: blur(10px)` for depth
- Subtle and purposeful, not decorative

### Sparkle Theme Elements
- Gold accent circles in hero
- Gradient accents throughout
- Subtle radial gradients as background elements
- Consistent use of shimmer and float animations

## Accessibility

### Contrast
- Body text: 4.5:1 against light backgrounds (WCAG AA)
- Interactive elements: Clear visual states
- Color not sole information carrier

### Motion
- Respects `prefers-reduced-motion` setting
- Adjusts animation duration and smoothness accordingly

### Keyboard Navigation
- Full keyboard support via native HTML elements
- Visible focus states on all interactive elements
- Logical tab order

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic sections and landmarks
- Descriptive link text
- Form labels associated with inputs

## Implementation Quality

- No gradient text on body content (only for heroic title as part of aesthetic)
- Real icon library (Font Awesome) not Unicode/emoji substitutes
- Proper shadow hierarchy - not zero-offset colored halos
- Nested cards avoided - flat component structure
- Measured typography scale with clear hierarchy
- Purposeful animations - not scattered effects
- All specified content present and polished
- Real copy (user's actual background, not placeholders)
