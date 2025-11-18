// On trouve l'élément avec la classe "carte" et on le garde dans une variable

const nodeList = document.querySelectorAll(".carte");
const cartes = Array.from(nodeList);
// const carte = document.querySelector(".carte");

// carte.addEventListener("click", () => {
//   const carte_inner = document.querySelector(".carte-inner");
//   carte_inner.classList.toggle("est-retournee");
// });

let premiereCarteRetournee = null;
let jeuVerrouille = false;

cartes.forEach((carte) =>
  carte.addEventListener("click", (e) => {
    if (jeuVerrouille) {
      console.log("CLIC IGNORÉ : Le jeu est verrouillé.");
      return;
    }
    if (cartes.length)
      if (premiereCarteRetournee == null) {
        premiereCarteRetournee = carte;
        const carte_inner2 = carte.querySelector(".carte-inner");
        carte_inner2.classList.toggle("est-retournee");
      } else {
        const carte_inner = carte.querySelector(".carte-inner");
        carte_inner.classList.toggle("est-retournee");
        jeuVerrouille = true;
        if (premiereCarteRetournee.dataset.paire === carte.dataset.paire) {
          premiereCarteRetournee = null;
          jeuVerrouille = false;

          const cartesRetournees = cartes.filter((carte) =>
            carte
              .querySelector(".carte-inner")
              .classList.contains("est-retournee")
          );

          if (cartesRetournees.length === cartes.length) {
            console.log("Victoire ! Toutes les cartes sont retournées !");
          }
        } else {
          setTimeout(() => {
            carte_inner.classList.remove("est-retournee");
            premiereCarteRetournee
              .querySelector(".carte-inner")
              .classList.remove("est-retournee");
            premiereCarteRetournee = null;
            jeuVerrouille = false;
          }, 1000);
        }
      }
  })
);

// function victoire() {
//   const cartesRetournees = cartes.filter((carte) =>
//     carte.classList.contains("est-retournee")
//   );
//   if (cartesRetournees.length === cartes.length) {
//     console.log("Victoire ! Toutes les cartes sont retournées !");
//   }
// }

function fixe(event) {
  console.log("Découvert");
  event.preventDefault();
}

const boutonRestart = document.querySelector(".btn-danger");
boutonRestart.addEventListener("click", function () {
  window.location.reload();
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Space" || e.key === " ") {
    console.log("Barre espace détectée ! Redémarrage...");
    // HTMLFormElement.reset();
    //simule le clique
    const boutonRestart = document.querySelector(".btn-danger");
    if (boutonRestart) {
      boutonRestart.click();
      window.location.reload();
    }
  }
});
