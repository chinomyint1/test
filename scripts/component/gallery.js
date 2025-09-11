export const galleryTmpl = () => {
  return `
      <div class="gallery-img">
        <img src="assets/img/gallery/galleri1.jpeg" alt="" class="openDialog" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri2.jpeg" alt="" class="openDialog" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri3.jpeg" alt="" class="openDialog" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri4.jpeg" alt="" class="openDialog" />
      </div>

      <div class="gallery-img">
        <img src="assets/img/gallery/galleri5.jpeg" alt="" class="openDialog" />
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
  const galleryContainer = document.querySelector(".gallery-container");

  if (galleryContainer) {
    galleryContainer.insertAdjacentHTML("beforeend", galleryTmpl());

    // ✅ Select DOM elements *after* inserting HTML
    const dialog = document.querySelector(".dialogBox");
    const dialogImg = document.querySelector(".dialogImg");
    const openBtns = document.querySelectorAll(".openDialog");
    const closeBtn = document.querySelector(".closeBtn");

    if (!dialog || !dialogImg || !closeBtn) return;

    // Open dialog
    openBtns.forEach((img) => {
      img.addEventListener("click", () => {
        dialogImg.src = img.src;
        dialog.showModal();
      });
    });

    // Close dialog
    closeBtn.addEventListener("click", () => {
      dialog.close();
    });
  }
};
