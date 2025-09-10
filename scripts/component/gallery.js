const dialog = document.querySelector(".dialogBox")
const dialogImg = document.querySelector(".dialogImg")
const openBtn = document.querySelectorAll(".openDialog")
const closeBtn = document.querySelector(".closeBtn")

// Åbn dialog box
openBtn.forEach(img => {
    img.addEventListener('click', () => {
        dialogImg.src = img.src;
        dialog.showModal()
    });
    
})


// Luk dialog box
closeBtn.addEventListener('click', () => {
    dialog.close()
})