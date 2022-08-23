const reveal = document.querySelectorAll('.reveal');
window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    reveal.forEach(element => {
        const { top, bottom } = element.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            element.classList.remove('reveal_active');
        } else {
            element.classList.add('reveal_active');
        }
    });
}