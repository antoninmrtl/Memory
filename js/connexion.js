import { estMailExistant, getUtilisateurs } from "./utils.js";

let submitButton = document.getElementById("monbouton");
let eyes = document.getElementById("oeil");
let type = document.getElementById("mdp");
let myinputMail = document.getElementById("email");

submitButton.addEventListener("click", enrengistrerConnexion);

eyes.addEventListener("click", function () {
  if (eyes.src.includes("on")) {
    eyes.src = "../assets/images/mdp/visibility_off.png";
    type.setAttribute("type", "text");
  } else if (eyes.src.includes("off")) {
    eyes.src = "../assets/images/mdp/visibility_on.png";
    type.setAttribute("type", "password");
  }
});

function enrengistrerConnexion() {
  //   const utilisateurs = getUtilisateurs();
  //   const dernierutilisateur = utilisateurs[utilisateurs.length - 1];
  //   const username = dernierutilisateur.username;
  //   console.log(username);

  document.location.href = "../pages/accueil.html";
}
