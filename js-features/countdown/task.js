let time = document.getElementById('timer');
function timer() {
   if (time.textContent == 0) {
      alert('Вы победили в конкурсе!');
      clearTimeout(interval);
   }
   let interval = setTimeout(timer, 1000, --time.textContent);
}
setTimeout(timer, 1000);