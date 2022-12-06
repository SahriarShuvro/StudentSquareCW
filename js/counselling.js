$(".slidingMainAreaSection").slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
});

// let counsellingArea = document.querySelector(".slidingMainAreaSection");
// counsellingArea.classList.add('counsellingArea');
let counsellingDots = document.querySelector(".slidingMainAreaSection .slick-dots");
counsellingDots.classList.add('counsellingDots');
let counsellingControlbtn = document.querySelectorAll(".slidingMainAreaSection button");

for (let i = 0; i < counsellingControlbtn.length; i++) {
    const cntrolBTN = counsellingControlbtn[i];
    cntrolBTN.addEventListener('click', function() {
        if (cntrolBTN.clicked == true) {
            cntrolBTN.setAttribute("style", "background:#70309F");
        } else {}
    })
}