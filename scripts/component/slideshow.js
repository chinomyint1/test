const sliderContainer = document.querySelector(".slider-container");

export const sliderTmpl = () => {
  return `
    <div class="slider-wrapper">
      <img id="slideshow" src="assets/img/slider/hero_img.jpg" alt="Slideshow image" class="slider-img" />
      <div class="slider-text">
        <h1>Vi stræber efter at skabe en unik shoppingoplevelse, hvor elegance møder funktionalitet</h1>
      </div>
    </div>
  `;
};

export const slider = () => {
  if (sliderContainer) {
    sliderContainer.insertAdjacentHTML("beforeend", sliderTmpl());

    const images = [
      "assets/img/slider/hero_img.jpg",
      "assets/img/slider/hero_img2.jpg",
      "assets/img/slider/hero_img3.jpg",
    ];

    let index = 0;
    const slideshow = document.getElementById("slideshow");

    function nextImage() {
      setTimeout(() => {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
      }, 1000);
    }

    // Start the slideshow
    setInterval(nextImage, 3000);
  }
};
