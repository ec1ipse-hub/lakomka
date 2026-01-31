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