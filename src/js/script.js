const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

var closeEsc = true;

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


