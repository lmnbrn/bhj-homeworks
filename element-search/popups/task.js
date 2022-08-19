let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let modalClose = Array.from(document.getElementsByClassName("modal__close"));
let modalShow = Array.from(document.getElementsByClassName("show-success"));

modalMain.classList = "modal modal_active";

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
        modalClose[i].closest(".modal").className = "modal";
        if (modalClose[i] === modalShow[0]) {
        modalSuccess.className = "modal modal_active";
        }
   }
}