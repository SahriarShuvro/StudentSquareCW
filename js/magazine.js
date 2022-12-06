let yearbtn = document.getElementById("yearBTN");
let years = document.getElementById("years");

yearbtn.addEventListener("click", activeYears);

function activeYears() {
    years.classList.toggle('yearsActive');
}

let allYear = document.querySelectorAll(".allYears");
let baseDate = 2022;
const d = new Date('2030');
let year = d.getFullYear();

for (let i = 0; i < allYear.length; i++) {
    const yearAll = allYear[i];
    for (let x = 0; x < baseDate.length; x++) {
        const yearLoop = year[x];
        yearAll.innerHTML = yearLoop;
    }

}