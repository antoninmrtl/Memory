// On trouve l'élément avec la classe "carte" et on le garde dans une variable

const cartes = document.querySelectorAll(".carte");
// const carte = document.querySelector(".carte");

// carte.addEventListener("click", () => {
//   const carte_inner = document.querySelector(".carte-inner");
//   carte_inner.classList.toggle("est-retournee");
// });

let premiereCarteRetournee = null;
let jeuVerrouille = false;

cartes.forEach((carte) =>
  carte.addEventListener("click", () => {
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
        fixe();
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
