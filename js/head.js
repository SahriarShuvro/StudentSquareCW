let open = document.getElementById('open');
let close = document.getElementById('close');
let menuSection = document.getElementById('responsiveMenu')

open.addEventListener("click", OnClickClose);
close.addEventListener("click", OnClickOpen);

function OnClickClose() {
    close.classList.toggle('closeBTNactive')
    open.classList.toggle("openBTNactive");
    menuSection.classList.add('menuSectionActive');
}

function OnClickOpen() {
    open.classList.toggle("openBTNactive");
    close.classList.toggle("closeBTNactive");
    menuSection.classList.remove('menuSectionActive');
}