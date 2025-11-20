import { getScoreboards, getUserConnecte, saveScoreboard } from "./utils.js";
// On trouve l'élément avec la classe "carte" et on le garde dans une variable

const nodeList = document.querySelectorAll(".carte");
const cartes = Array.from(nodeList);
let myModal = new bootstrap.Modal(document.getElementById("monModal"));

let imageCss = [
  "/assets/images/image_css/align_items_stretch.png",
  "/assets/images/image_css/align_flex_end.png",
  "/assets/images/image_css/align_flex_start.png",
  "/assets/images/image_css/code_blocks.png",
  "/assets/images/image_css/css.png",
  "/assets/images/image_css/flex_no_wrap.png",
];

let titreCss = [
  "align_items_stretch",
  "align_flex_end",
  "align_flex_start",
  "code_blocks",
  "css",
  "flex_no_wrap",
];

let premiereCarteRetournee = null;
let jeuVerrouille = false;
let compteur = 0;
let secondes = 0;
let minutes = 0;
let stockage = [];
let aujourdhui = new Date();
let idinterval = null;

let tableauTitre = titreCss.concat(titreCss);
let tableauJeu = imageCss.concat(imageCss);
tableauJeu.sort(() => 0.5 - Math.random());

for (let i = 0; i < cartes.length; i++) {
  let carte = cartes[i];
  let result = tableauJeu[i];
  let img = carte.querySelector(".carte-verso img");
  let titre = carte.querySelector(".carte-verso h4");
  if (img) {
    img.src = result;
    carte.dataset.paire = tableauJeu[i];
  }
  if (result.includes("stretch")) {
    titre.innerHTML = tableauTitre[0];
  } else if (result.includes("end")) {
    titre.innerHTML = tableauTitre[1];
  } else if (result.includes("start")) {
    titre.innerHTML = tableauTitre[2];
  } else if (result.includes("blocks")) {
    titre.innerHTML = tableauTitre[3];
  } else if (result.includes("css.png")) {
    titre.innerHTML = tableauTitre[4];
  } else if (result.includes("no_wrap")) {
    titre.innerHTML = tableauTitre[5];
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
    console.log(compteur);
    let shot = document.getElementById("coup");
    shot.innerHTML = "<h3>Shots :</h3>&nbsp;&nbsp;&nbsp;" + compteur;

    if (idinterval === null) {
      idinterval = setInterval(chronometre, 1000);
    }

    if (premiereCarteRetournee == null) {
      compteur++;
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
          enrengistrerStats();
          setTimeout(() => {
            const resultCompteur = compteur;
            const resultMinutes = minutes;
            const resultSecondes = secondes;
            let shotResult = document.getElementById("coup2");
            let timeResult = document.getElementById("temps2");
            timeResult.innerHTML =
              "<h3>Time :</h3>&nbsp;&nbsp;&nbsp;" +
              resultMinutes +
              ":" +
              resultSecondes;
            shotResult.innerHTML =
              "<h3>Shots :</h3>&nbsp;&nbsp;&nbsp;" + resultCompteur;
            console.log("Victoire ! Toutes les cartes sont retournées !");
            myModal.show();
          }, 1000);
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

let sizememo = localStorage.getItem("userSizeMemoryConnecte");
let userCo = getUserConnecte();

function enrengistrerStats() {
  const shots = compteur;
  const formattedMin = minutes < 10 ? "0" + minutes : minutes;
  const formattedSec = secondes < 10 ? "0" + secondes : secondes;
  const time = formattedMin + ":" + formattedSec;
  const dateObj = new Date();
  const date = dateObj.toLocaleDateString("fr-FR");
  const size = sizememo;
  const username = userCo;
  console.log(username);
  const nouveauScoreboard = {
    username: username,
    score: shots,
    shots: shots,
    time: time,
    size: size,
    date: date,
  };
  const scoreboards = getScoreboards();
  scoreboards.push(nouveauScoreboard);
  saveScoreboard(scoreboards);

  while (scoreboards.length > 6) {
    scoreboards.shift();
  }

  saveScoreboard(scoreboards);
}
