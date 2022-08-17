let pic = document.querySelector("img");
let clickerCounter = document.getElementById("clicker__counter");
let click = (clickerCounter.textContent = 0);

pic.onclick = function () {
  if (pic.width === 200) {
    pic.width = 250;
    clickerCounter.textContent = ++click;
  } else if (pic.width !== 200) {
    pic.width = 200;
    clickerCounter.textContent = ++click;
  }
};