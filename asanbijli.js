
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

/* ==========================
      Hero Image Slider
========================== */

const heroImages = document.querySelectorAll(".hero-slider img");

let currentImage = 0;

function changeHeroImage(){

    heroImages[currentImage].classList.remove("active");

    currentImage++;

    if(currentImage >= heroImages.length){
        currentImage = 0;
    }

    heroImages[currentImage].classList.add("active");

}

setInterval(changeHeroImage, 4000);


/* ==========================
   GSAP HERO ANIMATION
========================== */

gsap.registerPlugin(ScrollTrigger);

// Hero Title
gsap.from(".hero-title", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

// Hero Paragraph
gsap.from(".hero-text", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    ease: "power3.out"
});

// Hero Button
gsap.from(".hero-btn", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.7)"
}); 

/* ==========================
   Hero Background Zoom
========================== */

gsap.to(".hero-bg",{
    scale:1.15,
    duration:8,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"
});

/* ==========================
   GSAP Hero Image Slider
========================== */

// const slides = document.querySelectorAll(".hero-slider img");

let current = 0;

setInterval(() => {

    gsap.to(slides[current], {
        opacity: 0,
        duration: 1.5
    });

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    gsap.to(slides[current], {
        opacity: 1,
        duration: 1.5
    });

}, 5000);

/* ==========================
   Floating Electric Lights
========================== */

const particles = document.querySelector(".particles");

for(let i=0;i<25;i++){

    let dot=document.createElement("span");

    dot.style.left=Math.random()*100+"%";

    dot.style.top=Math.random()*100+"%";

    particles.appendChild(dot);

    gsap.to(dot,{
        y:-250,
        opacity:0,
        duration:Math.random()*4+3,
        repeat:-1,
        delay:Math.random()*3,
        ease:"power1.out"
    });

}

/* ==========================
   Electric Flash Animation
========================== */

function electricFlash(){

    gsap.fromTo(".lightning",
    {
        opacity:0
    },
    {
        opacity:0.8,
        duration:0.12,
        yoyo:true,
        repeat:1,
        ease:"power2.out"
    });

}

setInterval(electricFlash,7000);

/* ==========================
   Electric Energy Lines
========================== */

gsap.utils.toArray(".energy-lines span").forEach((line,index)=>{

    gsap.fromTo(line,
    {
        x:-400
    },
    {
        x:window.innerWidth+400,
        duration:4+index,
        repeat:-1,
        ease:"none",
        delay:index
    });

});

/* ===================================
        THREE.JS SETUP
=================================== */

const canvas = document.getElementById("electricCanvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);

function animate(){

    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

const position = wave.geometry.attributes.position;

for(let i = 0; i < position.count; i++){

    const x = position.getX(i);

    const y = position.getY(i);

    position.setZ(
        i,
        Math.sin(x * 1.5 + time) * 0.25 +
        Math.cos(y * 1.2 + time) * 0.25
    );

}

position.needsUpdate = true;

wave.rotation.z += 0.001;

particles.rotation.y += 0.001;
particles.rotation.x += 0.0003;
    renderer.render(scene, camera);

}

animate();

window.addEventListener("resize", ()=>{

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});

/* ===================================
      ELECTRIC ENERGY WAVE
=================================== */

const geometry = new THREE.PlaneGeometry(18, 10, 80, 80);

const material = new THREE.MeshBasicMaterial({
    color: 0x00ccff,
    wireframe: true,
    transparent: true,
    opacity: 0.35
});

const wave = new THREE.Mesh(geometry, material);

scene.add(wave);

wave.rotation.x = -1.2;
wave.position.y = -2;

/* ==========================
   RANDOM LIGHTNING FLASH
========================== */

const bolts = document.querySelectorAll(".bolt");

function randomLightning(){

    gsap.fromTo(
        bolts,
        {
            opacity:0.2
        },
        {
            opacity:1,
            duration:0.08,
            repeat:3,
            yoyo:true,
            stagger:0.05,
            ease:"power1.inOut"
        }
    );

    gsap.fromTo(
        ".hero",
        {
            filter:"brightness(1)"
        },
        {
            filter:"brightness(1.18)",
            duration:0.12,
            repeat:1,
            yoyo:true
        }
    );

    gsap.delayedCall(
        Math.random()*3+2,
        randomLightning
    );

}

randomLightning();

/* ==========================
   HERO PARALLAX
========================== */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    gsap.to(".hero-slider",{
        x:x,
        y:y,
        duration:1.2,
        ease:"power3.out"
    });

    gsap.to(".hero-content",{
        x:x*0.5,
        y:y*0.5,
        duration:1,
        ease:"power3.out"
    });

    gsap.to(".electric-svg",{
        x:x*1.2,
        y:y*1.2,
        duration:1.3,
        ease:"power3.out"
    });

});