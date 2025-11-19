let eyes = document.getElementById("oeil");
let type = document.getElementById("mdp");
let maj = document.getElementById("Majuscule");
let min = document.getElementById("Minuscule");
let nbr = document.getElementById("Chiffre");
let symb = document.getElementById("Symbols");
let longueur = document.getElementById("caractere");
let bouton = document.getElementById("monbouton");
let confirme = document.getElementById("mdp2");
let user = document.getElementById("username");
let mail = document.getElementById("email");
let myMessageerreur = document.getElementById("message");
let myMessageerreur2 = document.getElementById("message2");
let barrePourcentage = document.getElementById("pourcentage");

let myinputUser = document.getElementById("username");
let myinputMail = document.getElementById("email");
let myinput = document.getElementById("mdp");
let patternmaj = "(?=.*[A-Z])";
let patternmin = "(?=.*[a-z])";
let patternnbr = "(?=.*[0-9])";
let patternlongueur = "(?=.*.{6,})";
let patternusername = "(?=.*.{3,})";
let patternsymbole = "(?=.*[^a-zA-Z0-9])";
let tout = "(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*.{6,})(?=.*[^a-zA-Z0-9])";
let les2mdps = false;
let mdpFort = false;
let mailBon = false;
let userBon = false;

bouton.addEventListener("click", enrengistrerMdp);
myinput.addEventListener("keyup", verifMdp);
confirme.addEventListener("keyup", confirmMdp);

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
  let score = 0;
  if (myinput.value.match(patternmaj)) {
    maj.classList.remove("nosucced");
    maj.classList.add("succed");
    score += 20;
  } else {
    maj.classList.remove("succed");
    maj.classList.add("nosucced");
  }
  if (myinput.value.match(patternsymbole)) {
    symb.classList.remove("nosucced");
    symb.classList.add("succed");
    score += 20;
  } else {
    symb.classList.remove("succed");
    symb.classList.add("nosucced");
  }
  if (myinput.value.match(patternmin)) {
    min.classList.remove("nosucced");
    min.classList.add("succed");
    score += 20;
  } else {
    min.classList.remove("succed");
    min.classList.add("nosucced");
  }
  if (myinput.value.match(patternnbr)) {
    nbr.classList.remove("nosucced");
    nbr.classList.add("succed");
    score += 20;
  } else {
    nbr.classList.remove("succed");
    nbr.classList.add("nosucced");
  }
  if (myinput.value.match(patternlongueur)) {
    longueur.classList.remove("nosucced");
    longueur.classList.add("succed");
    score += 20;
  } else {
    longueur.classList.remove("succed");
    longueur.classList.add("nosucced");
  }
  miseAJourBarre(score);

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
  verifmail();
  verifusername();
  if (mdpFort && les2mdps && mailBon && userBon) {
    bouton.removeAttribute("disabled");
  } else {
    bouton.setAttribute("disabled", "disabled");
  }
}
setInterval(activerBouton, 100);

function enrengistrerMdp() {
  localStorage.setItem("Username", myinputUser.value);
  localStorage.setItem("email", myinputMail.value);
  localStorage.setItem("Password", myinput.value);

  let username = localStorage.getItem("Username");
  let mail = localStorage.getItem("email");
  let password = localStorage.getItem("mdp");
  console.log("email enregistré : " + mail);
  console.log("mot de passe enregistré : " + password);
  console.log("mot de passe enregistré : " + username);
  document.location.href = "../pages/connection.html";
}

function verifmail() {
  if (myinputMail.value.includes("@") && myinputMail.value.includes(".com")) {
    mailBon = true;
    myMessageerreur.innerHTML = "";
  } else {
    mailBon = false;
    myMessageerreur.innerHTML = "Email non valide";
  }
}

function verifusername() {
  if (myinputUser.value.match(patternusername)) {
    userBon = true;
    myMessageerreur2.innerHTML = "";
  } else {
    userBon = false;
    myMessageerreur2.innerHTML = "Username non valide (min 3 caractères)";
  }
}

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
