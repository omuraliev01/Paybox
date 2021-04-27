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

// tabs
$('ul.tabs').on('click', 'li:not(.tab_active)', function () {
    $(this)
        .addClass('tab_active').siblings().removeClass('tab_active')
        .closest('div.container').find('div.tab-content').removeClass('tab-content_active')
        .eq($(this).index()).addClass('tab-content_active');
});

$('.header__button').on('click', function (e) {
    e.preventDefault();
    $('.overlay, .login').fadeIn('slow');
    $('.signIn').fadeOut('slow')
});

$('.signUp').on('click', function (e) {
    e.preventDefault();
    $('.overlay, .signIn').fadeIn('slow');
});

$('.login__checkbox__title').on('click', function (e) {
    const d = $('.recovery')
    e.preventDefault();
    $('.recovery').fadeIn('slow');
    $('.login').fadeOut('slow');
});

$('.login__close').on('click', function () {
    $('.overlay, .popup, .recovery').fadeOut('slow');
});

// const $ = (item) => {
//     const element = document.querySelector(item);
//     on: (event, func) => {
//         func()
//     }
//     return {
//         on
//     }
// };
// $('.header').on('click', () => {})
// const generateElement = () => {
//
//     const overlay = document.querySelector('.overlay');
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//             overlay.style.display = 'none';
//         }
//     });
// };
// generateElement();


// $('.signUp').on('click', function (e) {
//     e.preventDefault();
//     $('.signIn').fadeIn('slow');
// });
// const recoveryTitle = document.querySelector('.login__checkbox__title');
// const recovery = document.querySelector('.recovery');
// recoveryTitle.addEventListener('click', function () {
//     recovery.style.display = 'block'
// });
// console.log(recoveryTitle, recovery)

// const signUp = document.getElementsByClassName('.signUp');
// const signIn = document.getElementsByClassName('.signIn');
//
// signUp.addEventListener('click', function () {
//     signIn.style.display = 'block'
//
// });
// console.log(signIn, signUp);
