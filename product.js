function startCarousel(selector, speed){

    const container = document.querySelector(selector);

    if(!container) return;

    function animate(){

        container.scrollLeft += speed;

        if(container.scrollLeft >= container.scrollWidth - container.clientWidth){

            container.scrollLeft = 0;

        }

        requestAnimationFrame(animate);

    }

    animate();

}

// اگر container موجود ہے تب ہی چلے گا
startCarousel(".products-container",0.5);
startCarousel(".services-container",0.5);


// =====================
// Navbar
// =====================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",function(){

        navLinks.classList.toggle("active");

        if(navLinks.classList.contains("active")){

            menuBtn.innerHTML="✖";

        }else{

            menuBtn.innerHTML="☰";

        }

    });

}

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

