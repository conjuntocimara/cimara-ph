// =========================================================
// CIMARA PH - ASAMBLEA JS
// Plataforma Institucional Asamblea
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

// =====================================================
// COUNTDOWN ASAMBLEA CIMARA PH
// =====================================================

// Fecha actualizada: Jueves 18 de junio de 2026 a las 8:00 p.m. (hora Colombia)
const assemblyDate = new Date("June 18, 2026 20:00:00 GMT-0500").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = assemblyDate - now;

    if (distance <= 0) {

        daysEl.innerHTML = "00";
        hoursEl.innerHTML = "00";
        minutesEl.innerHTML = "00";
        secondsEl.innerHTML = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

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

    daysEl.innerHTML = String(days).padStart(2, "0");

    hoursEl.innerHTML = String(hours).padStart(2, "0");

    minutesEl.innerHTML = String(minutes).padStart(2, "0");

    secondsEl.innerHTML = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


    // =====================================================
    // CONTROL BOTÓN ASAMBLEA
    // =====================================================

    const assemblyButton = document.getElementById('assemblyAccess');

    if (assemblyButton) {

        const now = new Date().getTime();

        // Fecha de liberación ajustada: 18 de junio de 2026 a las 8:00 p.m.
        const releaseDate = new Date(2026, 5, 18, 20, 0, 0).getTime();

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