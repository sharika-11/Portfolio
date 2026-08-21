# 🌸 Sharika's Elegant Portfolio

A sophisticated, single-page portfolio website for Sharika Akter Sneha—showcasing a programming career, academic achievements, and creative pursuits with an elegant pinkish sparkle theme.

## ✨ Features

- **Smooth Scrolling**: Lenis-powered smooth scroll experience for fluid navigation
- **Elegant Design**: Pink floral sparkle theme with sophisticated animations
- **Responsive Layout**: Mobile-first design that works beautifully on all screen sizes
- **Semantic Structure**: Proper HTML semantics and WCAG accessibility standards
- **Fluid Animations**: Purposeful, non-distracting motion design with staggered reveals
- **Icon System**: Font Awesome icons for consistent, professional visual language
- **Performance**: Clean, optimized CSS and JavaScript with no unnecessary dependencies

## 🗂️ Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── styles.css          # Complete design system and styling
├── script.js           # Lenis smooth scrolling and interactions
├── PRODUCT.md          # Project context and direction
├── DESIGN.md           # Design system documentation
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary Pink**: `#d4698f` - Main brand color
- **Rose**: `#c85a7a` - Darker pink accent
- **Orchid/Lavender**: Soft purple accents
- **Gold Sparkle**: `#f4d03f` - Highlight accent
- **Neutral**: Soft pastels and whites for surfaces

### Typography
- **Headers**: Cormorant Garamond (serif) — elegant and distinctive
- **Body**: Inter (sans-serif) — clean and readable
- **Scale**: Responsive typography using CSS `clamp()` for fluid sizing

### Motion
- **Scroll**: Lenis smooth scrolling with exponential easing
- **Animations**: 
  - Float animations on accents
  - Fade-in/scale reveals on sections
  - Parallax hero image
  - Hover states with subtle lift

## 🚀 Getting Started

### Option 1: Local Python Server (Recommended)
```bash
cd portfolio
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 2: Any HTTP Server
```bash
# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000

# Using Ruby
ruby -run -ehttpd . -p8000
```

### Option 3: Direct from Browser
Simply open `index.html` directly in your browser (though some features may be limited).

## 📋 Sections Included

1. **Hero** - Bold introduction with gradient text and floating accents
2. **About** - Quick overview of academic passion, problem-solving, creativity, and location
3. **Education** - University details and academic background
4. **Achievements** - ICPC participation, math olympiad, programming training, volunteering
5. **Programming Journey** - Codeforces experience and continuous learning
6. **Activities & Community** - Programming club membership and volunteering
7. **Hobbies & Interests** - Photography, singing, and Canva design
8. **Contact** - Contact information, social links, and contact form

## 🔧 Customization

### Adding Your Profile Photo
Replace the `profile-photo.jpg` path in the HTML or place your image in the portfolio folder:
```html
<img id="profilePhoto" src="./your-photo.jpg" alt="Your Name">
```

### Updating Contact Information
Edit the email and social links in the contact section:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/your-username" class="social-btn">...</a>
```

### Changing Colors
All colors are defined as CSS custom properties in `styles.css`:
```css
:root {
    --primary-pink: #d4698f;
    --rose: #c85a7a;
    /* ... etc ... */
}
```

### Modifying Content
All text content is in `index.html`. Simply edit the HTML to update your information.

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Contrast**: WCAG AA compliant color contrast ratios
- **Motion**: Respects `prefers-reduced-motion` setting
- **Keyboard Navigation**: Fully navigable via keyboard
- **Icon Library**: Real Font Awesome icons, not emoji substitutes
- **Focus States**: Clear focus indicators on all interactive elements

## 🎬 Animation Details

- **Scroll Behavior**: 1.2s duration with exponential ease-out
- **Card Enters**: Staggered fade-in/scale animations
- **Hero Accents**: Continuous float animations for visual interest
- **Parallax**: Hero image moves at 0.5x scroll speed
- **Hover States**: Subtle lift effect (8-10px) with shadow enhancement

## 📱 Responsive Breakpoints

- **Mobile**: < 480px (single column, stacked navigation)
- **Tablet**: 480px - 768px (adaptive grids)
- **Desktop**: > 768px (full multi-column layouts)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties, animations)
- **JavaScript**: ES6+ for interactivity
- **Lenis**: Smooth scrolling library
- **Font Awesome**: Professional icon library
- **Google Fonts**: Cormorant Garamond & Inter typefaces

## 📊 Performance

- No heavy frameworks or dependencies (except Lenis CDN)
- Optimized CSS and JavaScript
- Lazy-loaded sections with intersection observer
- Mobile-friendly with progressive enhancement

## 🎯 Quality Standards

This portfolio adheres to the Impeccable design craft floor:
- ✅ Proper contrast ratios (WCAG AA)
- ✅ Soft shadows with blur and offset (real depth)
- ✅ Consistent spacing rhythm
- ✅ Clear typography hierarchy
- ✅ Purposeful, coordinated animations
- ✅ Complete and findable content
- ✅ Real icon system (Font Awesome, not emoji)
- ✅ No decorative frosted glass (navbar blur is purposeful)
- ✅ Responsive across all breakpoints
- ✅ Semantic, accessible HTML

## 📝 License

This portfolio is your personal website. Feel free to customize and use it as needed.

## 💫 Notes

- Profile photo fallback: If the image fails to load, a gradient placeholder appears
- Form validation: Active email validation and clear error messages
- Smooth scroll: Automatically adjusts for users who prefer reduced motion
- Mobile menu: Navigation adapts gracefully to smaller screens

---

**Built with elegance, creativity, and attention to craft.** ✨
