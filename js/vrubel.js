        // ============= slider ============

let slideIndex = 1;

showSlides(slideIndex);

function nextSlides() {
    showSlides(slideIndex += 1);
}

function prevSlides() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");
    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// ============= modal-img ============

function openModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = "flex";
}

function closeModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = "none";
}