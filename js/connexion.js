// import {
//   getUtilisateurs,
//   saveUtilisateurs,
//   estUtilisateurExistant,
// } from "./utils.js";

let submitButton = document.getElementById("monbouton");

submitButton.addEventListener("click", enrengistrerConnexion);

function enrengistrerConnexion() {
  console.log(utilisateurs);
  document.location.href = "acceuil.html";
}

// const utilisateurs = getUtilisateurs();
// const dernierutilisateur = utilisateurs[utilisateurs.length - 1];
// const username = dernierutilisateur.username;
// console.log(username);

let eyes = document.getElementById("oeil");
let type = document.getElementById("mdp");
let bouton = document.getElementById("monbouton");
let confirme = document.getElementById("mdp2");
let barrePourcentage = document.getElementById("pourcentage");
let myinput = document.getElementById("mdp");

let les2mdps = false;
let mdpFort = false;
let mailBon = false;
let userBon = false;

eyes.addEventListener("click", function () {
  if (eyes.src.includes("on")) {
    eyes.src = "../assets/images/mdp/visibility_off.png";
    type.setAttribute("type", "text");
  } else if (eyes.src.includes("off")) {
    eyes.src = "../assets/images/mdp/visibility_on.png";
    type.setAttribute("type", "password");
  }
});

function confirmMdp() {
  if (myinput.value == confirme.value && confirme.value !== "") {
    console.log("les mdp sont identiques");
    les2mdps = true;
  } else {
    les2mdps = false;
  }
}

function activerBouton() {
  if (mdpFort && les2mdps && mailBon && userBon) {
    bouton.removeAttribute("disabled");
  } else {
    bouton.setAttribute("disabled", "disabled");
  }
}
setInterval(activerBouton, 100);

function miseAJourBarre(scoreCalculé) {
  barrePourcentage.style.width = scoreCalculé + "%";
  barrePourcentage.innerText = scoreCalculé + "%";
  barrePourcentage.className = "progress-bar progress-bar-striped";

  if (scoreCalculé < 40) {
    barrePourcentage.classList.add("bg-danger");
  } else if (scoreCalculé < 60) {
    barrePourcentage.classList.add("bg-warning");
  } else if (scoreCalculé < 100) {
    barrePourcentage.classList.add("bg-info");
  } else {
    barrePourcentage.classList.add("bg-success");
  }
}
