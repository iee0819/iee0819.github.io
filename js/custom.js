$(function () {

    const tl = gsap.timeline();

    tl
        .from('.main_visual h2', { x: 640, opacity: 0, delay: 1 })
        .from('.main_visual p', { x: 640, opacity: 0 })
        .from('.main_visual .me', { x: 640, opacity: 0, })
        .to(`.me`, {
            motionPath: {
                path: `#p01`,
                align: `#p01`,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,

            },
            duration: 1,
            duration: 10, repeat: -1
            // delay: 0.3 * num,
        });


    const tl2 = gsap.timeline({
        yoyo: true,
        repeat: -1,
    });

    tl2.from('.main_visual .gra_pink', {
        x: 500,
        scale: 0,
        duration: 2,

    }).to('.main_visual .gra_pink', {
        x: 0,
        y: 100,
        scale: 0.5,
        duration: 2,
    })
        .to('.main_visual .gra_pink', {
            x: -700,
            y: -100,
            scale: 0.5,
            duration: 2,
        }).to('.main_visual .gra_pink', {
            x: -1000,
            y: 100,
            scale: 1,
            // rotation: 720,
            duration: 5
        })



    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'training', 'profile'],
        fixedElements: '.header,.footer,.gra_pink ',
        // responsiveWidth: 1200,
        // responsiveWidth: 768,
        onLeave: function (o, d, dr) {
            let idx = d.index;
            if (idx == 0) {
                tl.restart();
            }

            //  슬라이드 큐브
            // hs.slideToLoop(idx)

            $('.header .side_nav li').removeClass('on');
            $('.header .side_nav li').eq(idx).addClass('on');


        },

        afterLoad: function (o, d, dr) {
            let idx = d.index;

            $('.section').removeClass('on');
            $('.section').eq(idx).addClass('on');
        }
    });
});


$(function () {

    $('.header .btn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .cover_lnk').toggleClass('on');
    });

    $('.header .cover_lnk a').on('click', function (e) {
        let idx = $(this).parent().index();
        $('.header .btn').removeClass('on');
        $('.header .cover_lnk').removeClass('on');
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });
    $('.header .side_nav li a').on('click', function (e) {
        let idx = $(this).parent().index();
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });

    $('.header .cover_lnk').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })
})


// // on 붙었을때 메뉴 아이콘을 누르면 메뉴가 나와라하는거
// $(function () {
//     $('.header .btn').on('click', function () {
//         $(this).toggleClass('is-active');
//         $('.header .cover_lnk').toggleClass('on');
//     });


//     // 메뉴눌러서 나온거에 누르면 페이지 이동해주는거
//     $('.header .cover_lnk a').on('click', function () {
//         $('.header .btn').removeClass('is-active');
//         $('.header .cover_lnk').removeClass('on');
//     });

//     // 메뉴창이 떴을때 뒤에 페이지가 휠에 작동해서 안넘어가게 하는것
//     $('.header .cover_lnk').on('wheel', function (e) {
//         e.preventDefault();
//         return false;
//     })
// })