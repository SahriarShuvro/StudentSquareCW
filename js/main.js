let multipleBTN = document.querySelectorAll(".b_h_btn");


multipleBTN.forEach((btnAll) => {
    btnAll.addEventListener("click", function() {
        multipleBTN.forEach((btnSingle) => {
            btnSingle.classList.remove("active");
        });
        btnAll.classList.add("active");
    });
});

let hi = document.querySelector('.blogBody .slick-dots')
hi.setAttribute('class', 'purpulDots')