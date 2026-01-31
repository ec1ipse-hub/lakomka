function openSearchModal() {
    document.getElementById('searchModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    const modal = document.getElementById('searchModal');
    if (event.target == modal) {
        closeSearchModal();
    }
}


const burgerMenu = document.getElementById('burgerMenu');
const rightBar = document.getElementById('rightBar');
const body = document.body;

burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    rightBar.classList.toggle('active');
    body.classList.toggle('menu-open');
});

const menuLinks = document.querySelectorAll('.menu-nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        rightBar.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

document.addEventListener('click', function (event) {
    const isClickInsideMenu = rightBar.contains(event.target);
    const isClickOnBurger = burgerMenu.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger && rightBar.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        rightBar.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 767) {
        burgerMenu.classList.remove('active');
        rightBar.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

(function () {
    'use strict';

    console.log('Счетчик лакомка загружен');

    window.addEventListener('load', function () {
        console.log('Страница загружена, запускаю счетчики...');
        initCounters();
    });

    function initCounters() {
        // Целевые значения счетчиков
        const counters = [
            { id: 'counter1', target: 5 },
            { id: 'counter2', target: 50 },
            { id: 'counter3', target: 100 },
            { id: 'counter4', target: 10000 }
        ];

        counters.forEach(counter => {
            const element = document.getElementById(counter.id);
            if (!element) {
                console.error('Элемент не найден:', counter.id);
            } else {
                console.log('Найден элемент:', counter.id, element);
            }
        });

        function animateCounter(id, target, duration = 2000) {
            const element = document.getElementById(id);
            if (!element) return;

            const start = 0;
            const startTime = Date.now();

            function update() {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeProgress * target);

                element.textContent = current.toLocaleString('ru-RU');

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = target.toLocaleString('ru-RU');
                }
            }

            requestAnimationFrame(update);
        }

        setTimeout(() => {
            console.log('Запускаю анимацию счетчиков...');
            counters.forEach(counter => {
                animateCounter(counter.id, counter.target);
            });
        }, 800);

        let animated = false;

        function checkVisibility() {
            const container = document.querySelector('.counters-container');
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.9;

            if (isVisible && !animated) {
                animated = true;
                console.log('Счетчики в зоне видимости, запускаю...');
                counters.forEach(counter => {
                    animateCounter(counter.id, counter.target);
                });
            }
        }

        window.addEventListener('scroll', checkVisibility);
        setTimeout(checkVisibility, 1500);
    }
})();
