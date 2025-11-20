import { getUserConnecte, getMailConnecte, getMdpConnecte } from "./utils.js";

let myUser = document.getElementById("user");
let myMail = document.getElementById("email");
let myMdp = document.getElementById("mdp");
let myVoir = document.getElementById("voir");
let myBouton = document.getElementById("bouton");

const userConnecte = getUserConnecte();
const nameUser = userConnecte;

myUser.innerHTML = nameUser;

const mailConnecte = getMailConnecte();
const mailuser = mailConnecte;

myMail.innerHTML = mailuser;

const mdpConnecte = getMdpConnecte();
const mdpuser = mdpConnecte;

myMdp.innerHTML = "*".repeat(mdpuser.length);

myVoir.addEventListener("click", visibleMdp);
myBouton.addEventListener("click", enrengistrerProfile);

function visibleMdp() {
  if (myMdp.innerHTML.includes("*")) {
    myMdp.innerHTML = mdpuser;
  } else {
    myMdp.innerHTML = "*".repeat(mdpuser.length);
  }
}

function enrengistrerProfile() {
  const choixTheme = document.getElementById("choixMemory").value;
  const choixSizeMemory = document.getElementById("choixSizeMemory").value;
  localStorage.setItem("userThemeConnecte", JSON.stringify(choixTheme));
  localStorage.setItem(
    "userSizeMemoryConnecte",
    JSON.stringify(choixSizeMemory)
  );
  alert("Profile updated!");
}
