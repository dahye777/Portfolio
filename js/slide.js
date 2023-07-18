const slideContainer = document.querySelector('.slide');
const slideList = slideContainer.querySelector('ul');
const slides = slideList.querySelectorAll('li');
const slideWidth = slides[0].offsetWidth;

let slideIndex = 0;

function slideTo(index) {
    slideList.style.transform = `translateX(-${slideWidth * index}px)`;
    slideIndex = index;
}


function slideNext() {
    if (slideIndex < slides.length - 1) {
        slideTo(slideIndex + 1);
    } else {
        slideTo(0); 
    }
}


function slidePrev() {
    if (slideIndex > 0) {
        slideTo(slideIndex - 1);
    } else {
        slideTo(slides.length - 1); 
    }
}


const slideInterval = setInterval(slideNext, 3000);

