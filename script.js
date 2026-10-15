// =============================================
//  Portfolio JavaScript — Shared across themes
// =============================================

// --- 1. Back to Top Button ---
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// --- 2. Active Nav Link Highlight on Scroll ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// --- 3. Scroll Reveal Animation for Cards ---
const cards = document.querySelectorAll('.card');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealOnScroll.observe(card);
});

// Triggered when card becomes visible
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `.card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
});


// --- 4. Typed Text Effect on Hero Heading ---
const heroHeading = document.querySelector('.hero-text h1');
if (heroHeading) {
    const originalText = heroHeading.textContent;
    heroHeading.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroHeading.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        }
    }

    window.addEventListener('load', typeWriter);
}


// --- 5. Current Year in Footer ---
const footer = document.querySelector('footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(/\d{4}/, year);
}