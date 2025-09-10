const images = [
    "../assets/img/slider/hero_img.jpg",
    "../assets/img/slider/hero_img2.jpg",
    "../assets/img/slider/hero_img3.jpg"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function nextImage() {
    slideshow.classList.add("fade-out");

    setTimeout(() => {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
        slideshow.classList.remove("fade-out");
    }, 1000);
}

setInterval(nextImage, 3000);
