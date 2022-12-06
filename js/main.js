let multipleBTN = document.querySelectorAll(".b_h_btn");


multipleBTN.forEach((btnAll) => {
    btnAll.addEventListener("click", function() {
        multipleBTN.forEach((btnSingle) => {
            btnSingle.classList.remove("active");
        });
        btnAll.classList.add("active");
    });
});



console.log(`hi`);