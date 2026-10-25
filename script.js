
// =============================================
// PORTFOLIO JAVASCRIPT
// Responsive Menu, Scroll Effects, Typing Effect
// =============================================

document.addEventListener("DOMContentLoaded", () => {

    // 1. MOBILE NAVIGATION MENU
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    function closeMenu() {
        if (!menuToggle || !mainNav) return;

        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Close the menu after selecting a section
        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close the menu when clicking outside the header
        document.addEventListener("click", event => {
            if (
                mainNav.classList.contains("open") &&
                !event.target.closest("header")
            ) {
                closeMenu();
            }
        });

        // Close the menu when returning to desktop width
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

        // Close the menu with the Escape key
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
                menuToggle.focus();
            }
        });
    }


    // 2. BACK TO TOP BUTTON
    const backToTopBtn = document.getElementById("backToTop");

    function updateBackToTop() {
        if (!backToTopBtn) return;

        backToTopBtn.classList.toggle(
            "show",
            window.scrollY > 300
        );
    }

    if (backToTopBtn) {
        window.addEventListener("scroll", updateBackToTop, {
            passive: true
        });

        updateBackToTop();

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });
        });
    }


    // 3. ACTIVE NAVIGATION LINK ON SCROLL
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("#mainNav a");

    function updateActiveLink() {
        let currentSection = "";

        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            const isActive =
                link.getAttribute("href") === `#${currentSection}`;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink, {
        passive: true
    });

    updateActiveLink();


    // 4. SCROLL REVEAL ANIMATION FOR CARDS
    const cards = document.querySelectorAll(".card");

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !reduceMotion) {
        const revealObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        cards.forEach(card => {
            revealObserver.observe(card);
        });
    } else {
        // Display cards immediately if animations are unavailable
        cards.forEach(card => {
            card.classList.add("visible");
        });
    }


    // 5. TYPING EFFECT ON HERO HEADING
    const heroHeading = document.querySelector(".hero-text h1");

    if (heroHeading && !reduceMotion) {
        const originalText = heroHeading.textContent.trim();

        heroHeading.textContent = "";
        heroHeading.setAttribute("aria-label", originalText);

        let index = 0;
        let typingTimer;

        function typeWriter() {
            if (index < originalText.length) {
                heroHeading.textContent += originalText.charAt(index);
                index++;

                typingTimer = setTimeout(typeWriter, 70);
            }
        }

        // Start the animation after the page loads
        if (document.readyState === "complete") {
            typeWriter();
        } else {
            window.addEventListener("load", typeWriter, {
                once: true
            });
        }

        // Prevent a pending timer from continuing after page exit
        window.addEventListener("pagehide", () => {
            clearTimeout(typingTimer);
        }, { once: true });
    }


    // 6. AUTOMATIC FOOTER YEAR
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
