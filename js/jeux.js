// On trouve l'élément avec la classe "carte" et on le garde dans une variable

const nodeList = document.querySelectorAll(".carte");
const cartes = Array.from(nodeList);

let imageCss = [
  "/assets/images/image_css/align_items_stretch.png",
  "/assets/images/image_css/align_flex_end.png",
  "/assets/images/image_css/align_flex_start.png",
  "/assets/images/image_css/code_blocks.png",
  "/assets/images/image_css/css.png",
  "/assets/images/image_css/flex_no_wrap.png",
];

let premiereCarteRetournee = null;
let jeuVerrouille = false;
let compteur = 0;
let secondes = 0;
let minutes = 0;
let stockage = [];
idinterval = null;

let tableauJeu = imageCss.concat(imageCss);
tableauJeu.sort(() => 0.5 - Math.random());

for (let i = 0; i < cartes.length; i++) {
  let carte = cartes[i];
  let img = carte.querySelector(".carte-verso img");

  if (img) {
    img.src = tableauJeu[i];
    carte.dataset.paire = tableauJeu[i];
  }
}

function chronometre() {
  let chrono = document.getElementById("temps");
  secondes++;
  console.log(secondes);
  if (secondes == 60) {
    minutes++;
    console.log(minutes);
    secondes = 0;
  }
  chrono.innerHTML =
    "<h3>Time :</h3>&nbsp;&nbsp;&nbsp;" + minutes + ":" + secondes;
}

cartes.forEach((carte) =>
  carte.addEventListener("click", (e) => {
    if (jeuVerrouille) {
      console.log("CLIC IGNORÉ : Le jeu est verrouillé.");
      return;
    }
    //compteur pour les shots
    compteur++;
    console.log(compteur);
    let shot = document.getElementById("coup");
    shot.innerHTML = "<h3>Shots :</h3>&nbsp;&nbsp;&nbsp;" + compteur;

    if (idinterval === null) {
      idinterval = setInterval(chronometre, 1000);
    }

    if (premiereCarteRetournee == null) {
      premiereCarteRetournee = carte;
      const carte_inner2 = carte.querySelector(".carte-inner");
      carte_inner2.classList.toggle("est-retournee");
    } else {
      if (
        stockage.includes(
          premiereCarteRetournee.dataset.paire || carte.dataset.paire
        )
      ) {
        jeuVerrouille = true;
      }
      const carte_inner = carte.querySelector(".carte-inner");
      carte_inner.classList.toggle("est-retournee");
      jeuVerrouille = true;
      if (premiereCarteRetournee.dataset.paire === carte.dataset.paire) {
        // console.log(premiereCarteRetournee.dataset.paire);
        //je bloque le click si la carte est déja troouvé et donc retourné avec le css "pointer-events:none"
        premiereCarteRetournee.classList.toggle("bloque-clic");
        carte.classList.toggle("bloque-clic");
        if (stockage.includes(premiereCarteRetournee)) {
          console.log("Déja retourné");
        } else {
          stockage.push(premiereCarteRetournee);
        }
        if (stockage.includes(carte)) {
          console.log("Déja retourné");
        } else {
          stockage.push(carte);
        }
        console.log(stockage);
        premiereCarteRetournee = null;
        jeuVerrouille = false;

        const cartesRetournees = cartes.filter((carte) =>
          carte
            .querySelector(".carte-inner")
            .classList.contains("est-retournee")
        );

        if (cartesRetournees.length === cartes.length) {
          console.log("Victoire ! Toutes les cartes sont retournées !");
          clearInterval(idinterval);
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
