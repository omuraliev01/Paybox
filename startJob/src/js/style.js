

$('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__burger').toggleClass('header__burger_active');
    $('.footer').toggleClass('footer_active');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.up-arrow').fadeIn();
    } else {
        $('.up-arrow').fadeOut();
    }
});
