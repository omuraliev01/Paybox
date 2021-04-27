
//burger
$('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__burger').toggleClass('header__burger_active');
    $('.footer').toggleClass('footer_active');
});
// up-arrow
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.up-arrow').fadeIn();
    } else {
        $('.up-arrow').fadeOut();
    }
});
// tabs
$('ul.tabs').on('click', 'li:not(.tab_active)', function () {
    $(this)
        .addClass('tab_active').siblings().removeClass('tab_active')
        .closest('div.container').find('div.tab-content').removeClass('tab-content_active')
        .eq($(this).index()).addClass('tab-content_active');
});

