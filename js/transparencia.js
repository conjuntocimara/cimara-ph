// =========================================================
// CIMARA PH - TRANSPARENCIA JS
// Sistema Documental Institucional
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // BUSCADOR DOCUMENTAL
    // =====================================================

    const searchInput = document.getElementById('searchInput');

    const documentCards = document.querySelectorAll('.document-card');

    if (searchInput) {

        searchInput.addEventListener('keyup', () => {

            const value = searchInput.value.toLowerCase();

            documentCards.forEach(card => {

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
    // FILTROS DOCUMENTALES
    // =====================================================

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            const filter = button.dataset.filter;

            filterButtons.forEach(btn =>
                btn.classList.remove('active-filter')
            );

            button.classList.add('active-filter');

            documentCards.forEach(card => {

                if (
                    filter === 'all' ||
                    card.dataset.category === filter
                ) {

                    card.style.display = 'block';

                } else {

                    card.style.display = 'none';

                }

            });

        });

    });

    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================

    const animatedElements = document.querySelectorAll(`
        .document-card,
        .status-card,
        .management-card,
        .timeline-item
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show-element');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(el => {

        el.classList.add('hidden-element');

        observer.observe(el);

    });

    // =====================================================
    // EFECTO HOVER DOCUMENTOS
    // =====================================================

    documentCards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            card.style.transform = 'translateY(-8px)';

        });

        card.addEventListener('mouseleave', () => {

            card.style.transform = 'translateY(0px)';

        });

    });

    // =====================================================
    // CONTADOR DOCUMENTAL
    // =====================================================

    const totalDocuments = document.getElementById('totalDocuments');

    if (totalDocuments) {

        totalDocuments.textContent = documentCards.length;

    }

    // =====================================================
    // CARGA PROGRESIVA VISUAL
    // =====================================================

    window.addEventListener('load', () => {

        document.body.classList.add('loaded');

    });

});