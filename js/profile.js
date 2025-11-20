import { getUserConnecte, getMailConnecte, getMdpConnecte } from "./utils.js";

let myUser = document.getElementById("user");
let myMail = document.getElementById("email");
let myMdp = document.getElementById("mdp");
let myVoir = document.getElementById("voir");

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
function visibleMdp() {
  if (myMdp.innerHTML.includes("*")) {
    myMdp.innerHTML = mdpuser;
  } else {
    myMdp.innerHTML = "*".repeat(mdpuser.length);
  }
}
