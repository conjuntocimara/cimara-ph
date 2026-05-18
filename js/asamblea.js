// =========================================================
// CIMARA PH - ASAMBLEA JS
// Plataforma Institucional Asamblea
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // COUNTDOWN ASAMBLEA
    // =====================================================

    const countdown = document.getElementById('countdown');

    if (countdown) {

        /*
            FORMATO:
            Año, Mes(0-11), Día, Hora, Minuto

            Ejemplo:
            Junio = 5
        */

        const assemblyDate = new Date(2026, 5, 20, 19, 0, 0).getTime();

        const updateCountdown = () => {

            const now = new Date().getTime();

            const distance = assemblyDate - now;

            if (distance <= 0) {

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
    // CONTROL BOTÓN ASAMBLEA
    // =====================================================

    const assemblyButton = document.getElementById('assemblyAccess');

    if (assemblyButton) {

        const now = new Date().getTime();

        const releaseDate = new Date(2026, 5, 20, 18, 0, 0).getTime();

        if (now >= releaseDate) {

            assemblyButton.classList.remove('disabled-btn');

            assemblyButton.innerHTML = `
                <i class="fa-solid fa-video"></i>
                Ingresar a la Asamblea
            `;

            assemblyButton.href = "https://meet.google.com/";

        } else {

            assemblyButton.classList.add('disabled-btn');

            assemblyButton.innerHTML = `
                <i class="fa-solid fa-lock"></i>
                Disponible el día de la Asamblea
            `;

        }

    }

    // =====================================================
    // ACORDEÓN FAQ
    // =====================================================

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {

        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {

            item.classList.toggle('active');

        });

    });

    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================

    const animatedElements = document.querySelectorAll(`
        .timeline-item,
        .management-card,
        .document-card,
        .faq-item,
        .countdown-box,
        .assembly-card
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
    // BOTÓN DESCARGA CONVOCATORIA
    // =====================================================

    const convocatoriaBtn = document.getElementById('downloadConvocatoria');

    if (convocatoriaBtn) {

        convocatoriaBtn.addEventListener('click', () => {

            console.log('Descargando convocatoria...');

        });

    }

    // =====================================================
    // ALERTA INFORMATIVA
    // =====================================================

    const institutionalAlert = document.getElementById('institutionalAlert');

    if (institutionalAlert) {

        setTimeout(() => {

            institutionalAlert.classList.add('show-alert');

        }, 1200);

    }

});