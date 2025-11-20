export function getUtilisateurs() {
  const utilisateursJSON = localStorage.getItem("utilisateurs");
  return utilisateursJSON ? JSON.parse(utilisateursJSON) : [];
}

export function getScoreboards() {
  const scoreboardJSON = localStorage.getItem("ScoreBoard");
  return scoreboardJSON ? JSON.parse(scoreboardJSON) : [];
}

export function getUserConnecte() {
  const userConnecteJSON = localStorage.getItem("userConnecte");
  return userConnecteJSON ? JSON.parse(userConnecteJSON) : null;
}

export function getMailConnecte() {
  const mailConnecteJson = localStorage.getItem("userMailConnecte");
  return mailConnecteJson ? JSON.parse(mailConnecteJson) : null;
}

export function getMdpConnecte() {
  const mdpConnecteJson = localStorage.getItem("userMdpConnecte");
  return mdpConnecteJson ? JSON.parse(mdpConnecteJson) : null;
}

export function saveUtilisateurs(utilisateurs) {
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

export function saveScoreboard(utilisateur) {
  localStorage.setItem("ScoreBoard", JSON.stringify(utilisateur));
}

export function saveUserConnecte(utilisateur) {
  localStorage.setItem("userConnecte", JSON.stringify(utilisateur.username));
  localStorage.setItem("userMailConnecte", JSON.stringify(utilisateur.email));
  localStorage.setItem("userMdpConnecte", JSON.stringify(utilisateur.password));
}

export function estUsernameExistant(username) {
  const utilisateurs = getUtilisateurs();
  return utilisateurs.some((user) => user.username === username);
}

export function estMailExistant(email) {
  const utilisateurs = getUtilisateurs();
  return utilisateurs.some((user) => user.email === email);
}

let mySign = document.getElementById("sign");
let mySign2 = document.getElementById("sign2");
let mySignout = document.getElementById("signout");
let myScoreboard = document.getElementById("scoreboard");

const userConnecte = getUserConnecte();

if (myScoreboard != null) {
  myScoreboard.classList.add("d-none");
}
if (mySignout != null) {
  mySignout.classList.add("d-none");
}

if (userConnecte != null) {
  mySign.classList.add("d-none");
  mySign2.classList.add("d-none");
  mySignout.classList.remove("d-none");
  myScoreboard.classList.remove("d-none");
} else {
  if (
    mySign != null &&
    mySign2 != null &&
    mySignout != null &&
    myScoreboard != null
  ) {
    mySign.classList.remove("d-none");
    mySign2.classList.remove("d-none");
    mySignout.classList.add("d-none");
    myScoreboard.classList.add("d-none");
  }
}

if (mySignout != null) {
  mySignout.addEventListener("click", déconnexion);
}

function déconnexion() {
  localStorage.removeItem("userConnecte");
  localStorage.removeItem("userMailConnecte");
  localStorage.removeItem("userMdpConnecte");
  document.location.href = "../pages/acceuil.html";
}
