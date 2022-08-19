let sliderItem = Array.from(document.querySelectorAll('.slider__item'));
let arrowPrev = document.querySelector('.slider__arrow_prev');
let arrowNext = document.querySelector('.slider__arrow_next');
let slideIndex = 0;

function activeSlide() {
    sliderItem[slideIndex].className = 'slider__item slider__item_active';
}

arrowNext.onclick = function () {
    sliderItem[slideIndex].className = 'slider__item';
    slideIndex++;
    if (slideIndex >= sliderItem.length) {
    slideIndex = 0;
    }
    activeSlide();
}

arrowPrev.onclick = function () {
    sliderItem[slideIndex].className = 'slider__item';
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = sliderItem.length - 1;
    }
    activeSlide();
}