$(".blogBody").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    prevArrow: true,
    nextArrow: true,
    responsive: [{
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
            },
        },
    ],
});