import { estMailExistant, getUtilisateurs, saveUserConnecte } from "./utils.js";

let submitButton = document.getElementById("monbouton");
let eyes = document.getElementById("oeil");
let type = document.getElementById("mdp");
let myinputMail = document.getElementById("email");

submitButton.addEventListener("click", enrengistrerConnexion);
myinputMail.addEventListener("keyup", verifconnexionmail);
type.addEventListener("keyup", verifconnexionmdp);

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
  const mail = myinputMail.value;
  const mdp = type.value;
  const utilisateurs = getUtilisateurs();
  const utilisateurTrouve = utilisateurs.find((user) => {
    return user.email === mail && user.password === mdp;
  });
  if (!utilisateurTrouve) {
    alert("Invalid email or password");
    return;
  } else {
    saveUserConnecte(utilisateurTrouve);
    document.location.href = "../pages/accueil.html";
  }
}

function verifconnexionmail() {
  let result = myinputMail.value;
  console.log(result);
}

function verifconnexionmdp() {
  let result = type.value;
  console.log(result);
}
