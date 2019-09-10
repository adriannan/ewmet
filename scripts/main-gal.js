// alert('ok')

const lines = document.querySelectorAll('.header__hamburger');
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
lines.forEach(line => {
    line.addEventListener('click', (event) => {
        line.classList.toggle("hamburger__line--active");

    });

});
hamburger.addEventListener('click', (event) => {
    nav.classList.toggle("header__nav--active");
    nav.classList.toggle("header__nav--disab");
})


ScrollReveal().reveal('.gallery__title', {
    origin: 'bottom',
    distance: '200px',
});

ScrollReveal().reveal('.gallery__photo-box', {
    delay: 300,
    origin: 'bottom',
});