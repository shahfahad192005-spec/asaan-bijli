/* ===================================
      PROFESSIONAL HERO SLIDER
=================================== */

const slides = document.querySelectorAll(".hero-slider .slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,5000);