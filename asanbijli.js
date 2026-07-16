
// =============================
// Services Auto Carousel
// =============================

function startCarousel(selector, speed){

    const container = document.querySelector(selector);

    function animate(){

        container.scrollLeft += speed;

        if(container.scrollLeft >= container.scrollWidth - container.clientWidth){
            container.scrollLeft = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

startCarousel(".products-container",0.5);
startCarousel(".services-container",0.5);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML = "✖";

    }else{

        menuBtn.innerHTML = "☰";

    }

});

// ==========================
// Preloader
// ==========================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});

