const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('keydown', event => {
    event.preventDefault();
    if(event.code === 'Escape') {
        menu.classList.add('active');
       
    }
});

const counter = document.querySelectorAll('.subjects__skillElem-pir'),
        linesNow = document.querySelectorAll('.subjects__scaleNow');

counter.forEach((item, i) => {
    linesNow[i].style.width = item.innerHTML;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});



