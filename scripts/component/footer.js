const footerContainer = document.querySelector('.footer-container')

export const footerTmpl = () => {
  return `
    <aside class="contact-form">
      <h2>Kontakt os</h2>
      <form class="form">
        <input type="text" placeholder="Navn" required />
        <input type="email" placeholder="Email" required />
        <textarea name="text" placeholder="Besked..." required></textarea>
        <input type="submit" value="Send Besked" />
      </form>
      <p id="successMessage" class="form-success" style="display:none;">
        ✅ Din besked er sendt!
      </p>
    </aside>
  `
}

export const footer = () => {
  if (footerContainer) {
    footerContainer.insertAdjacentHTML("beforeend", footerTmpl())

    const form = footerContainer.querySelector(".form")
    const successMessage = footerContainer.querySelector("#successMessage")

    form.addEventListener("submit", (e) => {
      e.preventDefault() 

      // Vis beskeden
      successMessage.style.display = "block"

      setTimeout(() => {
        successMessage.style.display = "none"
        form.reset()
      }, 3000)
    })
  }
}