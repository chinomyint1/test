
const headerContainer = document.querySelector('.header-container')

export const headerTmpl = () => {
  return `
    <div class="topbar">
      <img src="assets/icons/truck-solid.svg" alt="">
      <p>Bestiller du nu, vil din ordre blive sendt i dag</p>
    </div>

    <nav class="header-nav">
      <a href="#">Vores Produktgrupper</a>
      <a href="#">Vi Anbefaler</a>
      <a href="#">Kontakt Os</a>
      <div class="burger-menu" style="display: none;">  
        <ul>
          <li>Vores Produktgrupper</li>
          <li>Vi Anbefaler</li>
          <li>Kontakt-Os</li>
        </ul>
      </div>
    </nav>
  `
}

export const header = () => {
  if (headerContainer) {
    headerContainer.insertAdjacentHTML("beforeend", headerTmpl())
  }
}
