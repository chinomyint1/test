export const produktgruppe = [
  {
    navn: "Tasker",
    ikon: "assets/icons/handbag.png",
    beskrivelse: "Udforsk vores eksklusive kollektion af lædertasker, designet til den moderne kvinde, der værdsætter både stil og funktionalitet. Vores lædertasker er fremstillet af højkvalitets læder, og hver eneste detalje er omhyggeligt udformet for at give dig en sofistikeret og tidløs taske."
  },
  {
    navn: "Bælter",
    ikon: "assets/icons/belt.png",
    beskrivelse: "Oplev vores udsøgte udvalg af læderbælter, skabt for at tilføre et strejf af luksus til enhver garderobe. De feminine elementer som fine spænder, dekorative mønstre og subtile farvekombinationer giver bæltet et eksklusivt og personligt præg."
  },
  {
    navn: "Sko",
    ikon: "assets/icons/high-heels.png",
    beskrivelse: "Træd ind i en verden af komfort og elegance med vores kvalitetssko til kvinder. Vores kollektion inkluderer alt fra stilfulde stiletter og klassiske pumps til behagelige ballerinaer og robuste støvler, alle med et feminint touch."
  }
];

const container = document.getElementById("produktgrupper-container");

produktgrupper.forEach(gruppe => {
  const div = document.createElement("div");
  div.className = "produktgruppe";

  div.innerHTML = `
    <img src="${gruppe.ikon}" alt="${gruppe.navn} ikon" class="ikon">
    <h2>${gruppe.navn}</h2>
    <p>${gruppe.beskrivelse}</p>
  `;

  container.appendChild(div);
});