/* const dialog = document.querySelector(".dialogBox");
const dialogImg = document.querySelector(".dialogImg");
const openBtn = document.querySelectorAll(".openDialog");
const closeBtn = document.querySelector(".closeBtn"); */

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

export const gallery = () => {
  if (galleryContainer) {
    galleryContainer.insertAdjacentHTML("beforeend", galleryTmpl());
  }
};

/* // Åbn dialog box
openBtn.forEach((img) => {
  img.addEventListener("click", () => {
    dialogImg.src = img.src;
    dialog.showModal();
  });
});

// Luk dialog box
closeBtn.addEventListener("click", () => {
  dialog.close();
});
 */
