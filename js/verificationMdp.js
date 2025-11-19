let eyes = document.getElementById("oeil");
let type = document.getElementById("mdp");
let maj = document.getElementById("Majuscule");
let min = document.getElementById("Minuscule");
let nbr = document.getElementById("Chiffre");
let longueur = document.getElementById("caractere");
let bouton = document.getElementById("monbouton");
let confirme = document.getElementById("mdp2");

let myinput = document.getElementById("mdp");
let patternmaj = "(?=.*[A-Z])";
let patternmin = "(?=.*[a-z])";
let patternnbr = "(?=.*[0-9])";
let patternlongueur = "(?=.*.{8,})";
let tout = "(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*.{8,})";
let les2mdps = false;
let mdpFort = false;

myinput.addEventListener("keyup", verifMdp);
mdp2.addEventListener("keyup", confirmMdp);

eyes.addEventListener("click", function () {
  if (eyes.src.includes("on")) {
    eyes.src = "../assets/images/mdp/visibility_off.png";
    type.setAttribute("type", "text");
  } else if (eyes.src.includes("off")) {
    eyes.src = "../assets/images/mdp/visibility_on.png";
    type.setAttribute("type", "password");
  }
});

function verifMdp() {
  if (myinput.value.match(patternmaj)) {
    maj.classList.remove("nosucced");
    maj.classList.add("succed");
  } else {
    maj.classList.remove("succed");
    maj.classList.add("nosucced");
  }
  if (myinput.value.match(patternmin)) {
    min.classList.remove("nosucced");
    min.classList.add("succed");
  } else {
    min.classList.remove("succed");
    min.classList.add("nosucced");
  }
  if (myinput.value.match(patternnbr)) {
    nbr.classList.remove("nosucced");
    nbr.classList.add("succed");
  } else {
    nbr.classList.remove("succed");
    nbr.classList.add("nosucced");
  }
  if (myinput.value.match(patternlongueur)) {
    longueur.classList.remove("nosucced");
    longueur.classList.add("succed");
  } else {
    longueur.classList.remove("succed");
    longueur.classList.add("nosucced");
  }
  // if (myinput.value.match(tout) && les2mdps) {
  //   bouton.removeAttribute("disabled");
  // } else {
  //   bouton.setAttribute("disabled", "disabled");
  // }
  if (myinput.value.match(tout)) {
    mdpFort = true;
  } else {
    mdpFort = false;
  }
}

function confirmMdp() {
  if (myinput.value == confirme.value && confirme.value !== "") {
    console.log("les mdp sont identiques");
    les2mdps = true;
  } else {
    les2mdps = false;
  }
}

function activerBouton() {
  if (mdpFort && les2mdps) {
    bouton.removeAttribute("disabled");
  } else {
    bouton.setAttribute("disabled", "disabled");
  }
}
setInterval(activerBouton, 100);
