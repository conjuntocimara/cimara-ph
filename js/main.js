// =========================================================
// CIMARA PH - MAIN JS
// Plataforma Institucional
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // MOBILE MENU
    // =====================================================

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Crear botón hamburguesa automáticamente
    const menuToggle = document.createElement('div');

    menuToggle.classList.add('menu-toggle');

    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    navbar.appendChild(menuToggle);

    // Abrir / cerrar menú
    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

    });

    // Cerrar menú al hacer click
    document.querySelectorAll('.nav-links a').forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');

        });

    });

    // =====================================================
    // HEADER SCROLL EFFECT
    // =====================================================

    const header = document.querySelector('.header');

    const handleHeaderScroll = () => {

        if (window.scrollY > 80) {

            header.classList.add('header-scrolled');

        } else {

            header.classList.remove('header-scrolled');
        }
    };

    handleHeaderScroll();

    window.addEventListener('scroll', handleHeaderScroll);

    // =====================================================
    // SMOOTH ACTIVE LINKS
    // =====================================================

    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute('id');
            }

        });

        document.querySelectorAll('.nav-links a').forEach(link => {

            link.classList.remove('active-link');

            const href = link.getAttribute('href');

            if (href && href.includes(current)) {

                link.classList.add('active-link');
            }

        });

    });

    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================

    const animatedElements = document.querySelectorAll(`
        .management-card,
        .document-card,
        .timeline-item,
        .stat-card,
        .gallery-grid img,
        .future-list div,
        .institutional-image,
        .institutional-content,
        .announcement-container,
        .project-card,
        .status-card
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show-element');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    animatedElements.forEach(el => {

        el.classList.add('hidden-element');

        observer.observe(el);

    });

    // =====================================================
    // DIGITAL COUNTDOWN
    // =====================================================

    /*
        IMPORTANTE:

        Cambiar la fecha manualmente
        formato:
        Año, Mes(0-11), Día, Hora, Minuto

        Ejemplo:
        new Date(2026, 5, 20, 19, 0, 0)

        = 20 junio 2026 - 7:00 PM
    */

    const countdown = document.getElementById('countdown');

    if (countdown) {

        const assemblyDate = new Date(2026, 5, 20, 19, 0, 0).getTime();

        const updateCountdown = () => {

            const now = new Date().getTime();

            const distance = assemblyDate - now;

            if (distance < 0) {

                countdown.innerHTML = `
                    <div class="countdown-finished">
                        <i class="fa-solid fa-circle-check"></i>
                        La Asamblea se encuentra en desarrollo.
                    </div>
                `;

                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (distance % (1000 * 60 * 60))
                / (1000 * 60)
            );

            const seconds = Math.floor(
                (distance % (1000 * 60))
                / 1000
            );

            countdown.innerHTML = `
                <div class="countdown-box">
                    <span>${days}</span>
                    <small>Días</small>
                </div>

                <div class="countdown-box">
                    <span>${hours}</span>
                    <small>Horas</small>
                </div>

                <div class="countdown-box">
                    <span>${minutes}</span>
                    <small>Minutos</small>
                </div>

                <div class="countdown-box">
                    <span>${seconds}</span>
                    <small>Segundos</small>
                </div>
            `;
        };

        updateCountdown();

        setInterval(updateCountdown, 1000);

    }

    // =====================================================
    // SEARCH DOCUMENTS
    // =====================================================

    const searchInput = document.getElementById('searchInput');

    if (searchInput) {

        searchInput.addEventListener('keyup', () => {

            const value = searchInput.value.toLowerCase();

            const cards = document.querySelectorAll('.document-card');

            cards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {

                    card.style.display = 'block';

                } else {

                    card.style.display = 'none';
                }

            });

        });

    }

    // =====================================================
    // BUTTON RIPPLE EFFECT
    // =====================================================

    document.querySelectorAll('.btn').forEach(button => {

        button.addEventListener('mouseenter', () => {

            button.style.transform = 'translateY(-4px)';

        });

        button.addEventListener('mouseleave', () => {

            button.style.transform = 'translateY(0)';
        });

    });

    // =====================================================
    // PARALLAX HERO
    // =====================================================

    const heroBg = document.querySelector('.hero-bg');

    if (heroBg) {

        window.addEventListener('scroll', () => {

            const scroll = window.pageYOffset;

            heroBg.style.transform = `translateY(${scroll * 0.25}px)`;

        });

    }

    // =====================================================
    // FOOTER YEAR AUTO
    // =====================================================

    const year = document.getElementById('year');

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    // =====================================================
    // PRELOADER OPTIONAL
    // =====================================================

    window.addEventListener('load', () => {

        document.body.classList.add('loaded');

    });

});