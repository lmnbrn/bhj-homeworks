const rortatorCase = document.querySelectorAll(".rotator__case");
let num = 0;

function changeCase() {
    rortatorCase[num].classList.remove("rotator__case_active");
    num = (num === rortatorCase.length - 1) ? 0 : num + 1;
    rortatorCase[num].classList.add("rotator__case_active");
};

setInterval(changeCase, 1000);