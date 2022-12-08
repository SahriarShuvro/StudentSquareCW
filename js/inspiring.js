$(".i_cardSection").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    infinity: true,
    prevArrow: `<div class="previousbtn pTwo pTwo1 "><i class="fa-solid fa-circle-left inspiringPrev"></i></div>`,
    nextArrow: `<div class="nextbtn pTwo pTwo2 inspiringNextBTN"><i class="fa-solid fa-circle-right inspiringNext"></i></div>`,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: false,
                nextArrow: false,
                dots: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
});