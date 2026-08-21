// ===== Lenis Smooth Scrolling Setup =====
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.about-grid > *, .achievements-grid > *, .activities-grid > *, .hobbies-grid > *, .journey-milestones > *, .education-card').forEach((el) => {
    observer.observe(el);
});

// ===== Navigation Active State =====
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-pink);
        font-weight: 700;
    }

    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===== Smooth Scroll Navigation Links =====
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                lenis.scrollTo(targetSection, {
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            }
        }
    });
});

// ===== Stagger Animation Helper =====
function staggerElements(container, delay = 0.1) {
    const elements = container.querySelectorAll('> *');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * delay}s`;
    });
}

// Apply stagger to grid items
document.querySelectorAll('.about-grid, .achievements-grid, .activities-grid, .hobbies-grid').forEach((grid) => {
    staggerElements(grid, 0.1);
});

// ===== Form Submission =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        const recipient = 'sharikaakter423sp@gmail.com';
        const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
        const body = encodeURIComponent(
            `${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`
        );

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = '✓ Opening your email app…';
        submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        contactForm.reset();

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ===== Parallax Effect on Hero Section (fine pointers on desktop only) =====
const heroSection = document.querySelector('.hero');
const profilePlaceholder = document.querySelector('.profile-placeholder');
const canParallax = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)');

function parallaxHero() {
    if (!canParallax.matches || !profilePlaceholder || !heroSection) return;

    const scrollTop = window.pageYOffset;
    const heroHeight = heroSection.clientHeight;

    if (scrollTop < heroHeight) {
        const parallaxFactor = scrollTop * 0.5;
        profilePlaceholder.style.transform = `translateY(${parallaxFactor}px)`;
    } else {
        profilePlaceholder.style.transform = '';
    }
}

canParallax.addEventListener('change', () => {
    if (!canParallax.matches && profilePlaceholder) {
        profilePlaceholder.style.transform = '';
    }
});

window.addEventListener('scroll', parallaxHero, { passive: true });

// ===== Scroll Progress Indicator =====
function updateScrollProgress() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;

    // You can use this to create a progress bar or indicator
    document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ===== Add Sparkle Effect on Hover (fine pointers only) =====
const hasFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function addSparkleEffect() {
    if (!hasFineHover) return;

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Create a subtle glow effect
            btn.style.setProperty('--mouse-x', `${x}px`);
            btn.style.setProperty('--mouse-y', `${y}px`);
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.setProperty('--mouse-x', '50%');
            btn.style.setProperty('--mouse-y', '50%');
        });
    });
}

// Add custom mouse tracking styles
const mouseStyle = document.createElement('style');
mouseStyle.textContent = `
    .btn {
        --mouse-x: 50%;
        --mouse-y: 50%;
        position: relative;
    }
`;
document.head.appendChild(mouseStyle);

// Initialize sparkle effect
addSparkleEffect();

// ===== Cursor Effects (fine pointers only) =====
function initCursorEffects() {
    if (!hasFineHover) return;

    const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .nav-menu a, .social-btn'
    );

    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });

        el.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'auto';
        });
    });
}

initCursorEffects();

// ===== Load Profile Photo with Fallback =====
function loadProfilePhoto() {
    const profileImg = document.getElementById('profilePhoto');

    if (profileImg) {
        profileImg.addEventListener('error', () => {
            // Fallback: if photo fails to load, create a placeholder gradient
            const placeholder = profileImg.parentElement;
            placeholder.innerHTML = `
                <div style="
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #d4698f, #e6d8e8);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 3rem;
                    font-weight: bold;
                ">
                    👤
                </div>
            `;
        });
    }
}

loadProfilePhoto();

// ===== Mobile Menu Toggle =====
const MOBILE_NAV_BREAKPOINT = 968;
const navToggle = document.getElementById('navToggle');
const navMenuEl = document.getElementById('primary-nav');

function setMenuState(open) {
    if (!navToggle || !navMenuEl) return;
    navMenuEl.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

function isMobileNav() {
    return window.innerWidth <= MOBILE_NAV_BREAKPOINT;
}

function initMobileMenu() {
    if (!navToggle || !navMenuEl) return;

    navToggle.addEventListener('click', () => {
        setMenuState(!navMenuEl.classList.contains('open'));
    });

    // Close the menu after choosing a section
    navLinks.forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });

    // Close with Escape key and return focus to the toggle
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenuEl.classList.contains('open')) {
            setMenuState(false);
            navToggle.focus();
        }
    });

    // Close when tapping outside the navbar
    document.addEventListener('click', (e) => {
        if (!navMenuEl.classList.contains('open')) return;
        if (!e.target.closest('.navbar')) {
            setMenuState(false);
        }
    });

    // Reset state when returning to desktop layout
    window.addEventListener('resize', () => {
        if (!isMobileNav()) {
            setMenuState(false);
        }
    });
}

// ===== Accessibility: Reduce Motion Support =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    lenis.options.duration = 0.8;
    document.documentElement.style.scrollBehavior = 'auto';
}

prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        lenis.options.duration = 0.8;
        document.documentElement.style.scrollBehavior = 'auto';
    } else {
        lenis.options.duration = 1.2;
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});

// ===== Initialize Everything on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    updateActiveNav();
    addSparkleEffect();
    initCursorEffects();
    loadProfilePhoto();
    initMobileMenu();

    // Small delay to ensure smooth animations on page load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Log Initialization =====
console.log('✨ Portfolio website initialized with Lenis smooth scrolling and fluid animations!');
