// ===== AOS scroll animations =====
if (window.AOS) {
    AOS.init({
        once: true,
        duration: 700,
        easing: 'ease-out-cubic',
        offset: 60,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
} else {
    // Failsafe: never leave content hidden if the AOS CDN fails
    document.querySelectorAll('[data-aos]').forEach((el) => el.removeAttribute('data-aos'));
}

// ===== Mobile menu =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('primary-nav');
const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

function setMenu(open) {
    if (!navMenu || !navToggle) return;
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));

    navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            setMenu(false);
            navToggle.focus();
        }
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && !e.target.closest('.navbar')) {
            setMenu(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) setMenu(false);
    });
}

// ===== Active nav link while scrolling & navbar backdrop =====
const sections = document.querySelectorAll('section[id]');
const navbar = document.querySelector('.navbar');

function updateActiveNav() {
    let current = '';
    const scrollY = window.scrollY;

    if (navbar) {
        if (scrollY > 20) {
            navbar.style.background = 'rgba(253, 246, 249, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(161, 58, 99, 0.06)';
        } else {
            navbar.style.background = 'rgba(253, 246, 249, 0.88)';
            navbar.style.boxShadow = 'none';
        }
    }

    sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 220) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ===== Preloader & Site Entrance Reveal =====
const preloader = document.getElementById('preloader');

function dismissPreloader() {
    if (!preloader) {
        document.body.classList.add('site-ready');
        return;
    }

    // Exactly 2.0 seconds preloader duration as requested
    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.add('site-ready');

        // Clean up DOM node after transition finishes
        setTimeout(() => {
            preloader.remove();
        }, 700);
    }, 2000);
}

if (document.readyState === 'complete') {
    dismissPreloader();
} else {
    window.addEventListener('load', dismissPreloader);
}

// ===== Hero Background: Floating Flower & Code Particles with Slower Serene Drift & Cursor Evasion =====
const heroSection = document.getElementById('home');
const floatingLayer = document.getElementById('heroFloatingLayer');

if (heroSection && floatingLayer) {
    const particleDefinitions = [
        { type: 'emoji', content: '🌸', x: 7, y: 18, size: '1.45rem' },
        { type: 'code', content: '</>', x: 17, y: 12 },
        { type: 'emoji', content: '✨', x: 26, y: 22, size: '1.25rem' },
        { type: 'emoji', content: '🌼', x: 38, y: 14, size: '1.35rem' },
        { type: 'code', content: 'fn()', x: 94, y: 8 },
        { type: 'emoji', content: '💮', x: 96, y: 22, size: '1.35rem' },
        { type: 'code', content: '{ }', x: 5, y: 46 },
        { type: 'emoji', content: '🌺', x: 12, y: 64, size: '1.4rem' },
        { type: 'emoji', content: '🌷', x: 24, y: 80, size: '1.35rem' },
        { type: 'code', content: '=>', x: 36, y: 88 },
        { type: 'emoji', content: '🌸', x: 48, y: 90, size: '1.35rem' },
        { type: 'code', content: 'const', x: 58, y: 92 },
        { type: 'emoji', content: '🌻', x: 96, y: 82, size: '1.4rem' },
        { type: 'emoji', content: '🌸', x: 96, y: 62, size: '1.35rem' },
        { type: 'code', content: '&&', x: 94, y: 44 },
        { type: 'emoji', content: '✿', x: 48, y: 6, size: '1.25rem' },
        { type: 'code', content: ';', x: 62, y: 10 },
        { type: 'emoji', content: '✨', x: 3, y: 82, size: '1.2rem' },
    ];

    const particles = [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Create particle DOM nodes
    particleDefinitions.forEach((def) => {
        const el = document.createElement('div');
        el.className = `float-item float-item-${def.type}`;
        
        if (def.type === 'emoji') {
            el.textContent = def.content;
            if (def.size) el.style.fontSize = def.size;
        } else {
            el.textContent = def.content;
        }

        floatingLayer.appendChild(el);

        particles.push({
            el,
            baseXPercent: def.x,
            baseYPercent: def.y,
            currentX: 0,
            currentY: 0,
            targetX: 0,
            targetY: 0,
            vx: 0,
            vy: 0,
            driftPhase: Math.random() * Math.PI * 2,
            // Slower, serene floating speed
            driftSpeed: 0.0003 + Math.random() * 0.0003,
            driftAmpX: 5 + Math.random() * 6,
            driftAmpY: 6 + Math.random() * 7,
            rotation: (Math.random() - 0.5) * 24,
            baseRotation: (Math.random() - 0.5) * 24
        });
    });

    let mouseX = -9999;
    let mouseY = -9999;
    let isHoveringHero = false;

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        isHoveringHero = true;
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
        mouseX = -9999;
        mouseY = -9999;
        isHoveringHero = false;
    });

    // Touch support: soft evasion on touch move
    heroSection.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            const rect = heroSection.getBoundingClientRect();
            mouseX = e.touches[0].clientX - rect.left;
            mouseY = e.touches[0].clientY - rect.top;
            isHoveringHero = true;
        }
    }, { passive: true });

    heroSection.addEventListener('touchend', () => {
        mouseX = -9999;
        mouseY = -9999;
        isHoveringHero = false;
    });

    // High performance animation loop
    let lastTime = performance.now();
    const evasionRadius = 145; // pixel proximity threshold to scurry away
    const maxRepulsionForce = 18; // strength of push

    function animateParticles(currentTime) {
        const deltaTime = Math.min(currentTime - lastTime, 64);
        lastTime = currentTime;

        const heroWidth = heroSection.offsetWidth;
        const heroHeight = heroSection.offsetHeight;

        particles.forEach((p) => {
            // Ambient harmonic floating drift
            p.driftPhase += p.driftSpeed * deltaTime;
            const driftOffsetX = Math.sin(p.driftPhase) * p.driftAmpX;
            const driftOffsetY = Math.cos(p.driftPhase * 0.8) * p.driftAmpY;

            const homeX = (p.baseXPercent / 100) * heroWidth + driftOffsetX;
            const homeY = (p.baseYPercent / 100) * heroHeight + driftOffsetY;

            if (p.currentX === 0 && p.currentY === 0) {
                p.currentX = homeX;
                p.currentY = homeY;
            }

            if (!prefersReducedMotion && isHoveringHero) {
                // Compute vector to cursor
                const dx = p.currentX - mouseX;
                const dy = p.currentY - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // If cursor is within evasion radius, push particle away
                if (dist < evasionRadius && dist > 1) {
                    const normX = dx / dist;
                    const normY = dy / dist;
                    const force = ((evasionRadius - dist) / evasionRadius) * maxRepulsionForce;
                    
                    p.vx += normX * force * 0.55;
                    p.vy += normY * force * 0.55;
                    
                    // Add lively evasive twist
                    p.rotation += (normX * 12 - p.rotation) * 0.1;
                }
            }

            // Spring return toward home anchor
            const springStiffness = 0.045;
            const damping = 0.84;

            p.vx += (homeX - p.currentX) * springStiffness;
            p.vy += (homeY - p.currentY) * springStiffness;

            p.vx *= damping;
            p.vy *= damping;

            p.currentX += p.vx;
            p.currentY += p.vy;

            // Restoring rotation
            p.rotation += (p.baseRotation - p.rotation) * 0.05;

            // Render transform with subpixel precision
            p.el.style.transform = `translate3d(${p.currentX.toFixed(2)}px, ${p.currentY.toFixed(2)}px, 0) rotate(${p.rotation.toFixed(1)}deg)`;
        });

        if (!prefersReducedMotion) {
            requestAnimationFrame(animateParticles);
        }
    }

    requestAnimationFrame(animateParticles);
}

// ===== Button Click Blossom Ripple Animation =====
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('btn-ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 650);
    });
});

// ===== Contact form → opens the visitor's email app =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) return;

        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
        window.location.href = `mailto:sharikaakter423sp@gmail.com?subject=${subject}&body=${body}`;

        contactForm.reset();
    });
}

// ===== Portrait fallback if the photo is missing =====
const profilePhoto = document.getElementById('profilePhoto');

if (profilePhoto) {
    profilePhoto.addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'portrait-fallback';
        fallback.textContent = 'S';
        profilePhoto.replaceWith(fallback);
    });
}

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ===== Artwork Lightbox Modal Controller =====
const artworkModal = document.getElementById('artworkModal');
const artworkModalImg = document.getElementById('artworkModalImg');
const artworkModalTitle = document.getElementById('artworkModalTitle');
const artworkModalTag = document.getElementById('artworkModalTag');
const artworkModalClose = document.getElementById('artworkModalClose');
const artworkModalBackdrop = document.getElementById('artworkModalBackdrop');
let lastFocusedBento = null;

function openArtworkModal(src, title, tag) {
    if (!artworkModal || !artworkModalImg) return;
    artworkModalImg.src = src;
    artworkModalImg.alt = title;
    if (artworkModalTitle) artworkModalTitle.textContent = title;
    if (artworkModalTag) artworkModalTag.textContent = tag || 'Artwork';

    artworkModal.classList.add('open');
    artworkModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (artworkModalClose) artworkModalClose.focus();
}

function closeArtworkModal() {
    if (!artworkModal) return;
    artworkModal.classList.remove('open');
    artworkModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedBento) {
        lastFocusedBento.focus();
    }
}

document.querySelectorAll('.bento-item').forEach((item) => {
    const triggerModal = () => {
        const src = item.getAttribute('data-artwork-src');
        const title = item.getAttribute('data-artwork-title');
        const tag = item.getAttribute('data-artwork-tag');
        if (src) {
            lastFocusedBento = item;
            openArtworkModal(src, title, tag);
        }
    };

    item.addEventListener('click', triggerModal);
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerModal();
        }
    });
});

if (artworkModalClose) {
    artworkModalClose.addEventListener('click', closeArtworkModal);
}

if (artworkModalBackdrop) {
    artworkModalBackdrop.addEventListener('click', closeArtworkModal);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artworkModal && artworkModal.classList.contains('open')) {
        closeArtworkModal();
    }
});


