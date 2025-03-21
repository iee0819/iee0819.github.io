$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });
});

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });
});

$(function () {
    $('.main_product .best_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_product .best_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_product .best_tab_product .con').removeClass('on');
        $('.main_product .best_tab_product .con').eq(idx).addClass('on')
    })
});

$(function () {
    const mes = new Swiper('.main_event_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_event .arrows .next',
            prevEl: '.main_event .arrows .prev',
        },
    });

    const DAS = new Swiper(".main_diamond_slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            // hide: true,
        },
        breakpoints: {
            541: {
                slidesPerView: 3,
            }
        }
    });
});

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')

    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideToggle();
        }

    });

    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style')
        }
    })
})
