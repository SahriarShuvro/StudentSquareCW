// $(".blogBody").slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     prevArrow: false,
//     nextArrow: false,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true,
//             },
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//             },
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// });

// let blogNextBTN = document.querySelector('.slick-dots');
// blogNextBTN.classList.add('blogNextBTN');
$(".blogBody").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    prevArrow: false,
    nextArrow: false,
    dots: true,
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