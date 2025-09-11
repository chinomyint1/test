

const galleryContainer = document.querySelector(".gallery-container");

export const galleryTmpl = () => {
  return `
    
      <div class="gallery-img">
        <img src="assets/img/gallery/galleri1.jpeg" alt="" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri2.jpeg" alt="" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri3.jpeg" alt="" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri4.jpeg" alt="" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri5.jpeg" alt="" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri6.jpeg" alt="" class="openDialog" />
      </div>

      <!-- Dialog box start -->
      <dialog class="dialogBox">
        <img class="dialogImg" src="" alt="" />
        <button class="closeBtn">Luk</button>
      </dialog>
      <!-- Dialog box end -->
    `;
};


