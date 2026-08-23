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
const navLinks = navMenu.querySelectorAll('a');

function setMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

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

// ===== Active nav link while scrolling =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    let current = '';
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }
    });
    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ===== Contact form → opens the visitor's email app =====
const contactForm = document.getElementById('contactForm');

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

// ===== Portrait fallback if the photo is missing =====
const profilePhoto = document.getElementById('profilePhoto');

profilePhoto.addEventListener('error', () => {
    const fallback = document.createElement('div');
    fallback.className = 'portrait-fallback';
    fallback.textContent = 'S';
    profilePhoto.replaceWith(fallback);
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
