let slideIndex = 1;

showSlides(slideIndex);

function leftSlider() {
    showSlides(slideIndex -= 1);
}

function rightSlider() {
    showSlides(slideIndex += 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("main-slider__box");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}