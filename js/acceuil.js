import { getUserConnecte } from "./utils.js";
let myName = document.getElementById("Nameuser");
let mySign = document.getElementById("sign");
let mySign2 = document.getElementById("sign2");
let mySignout = document.getElementById("signout");
let myScoreboard = document.getElementById("scoreboard");

const userConnecte = getUserConnecte();
const nameUser = userConnecte;

myName.innerHTML = nameUser;

myScoreboard.classList.add("d-none");
mySignout.classList.add("d-none");

if (nameUser != null) {
  mySign.classList.add("d-none");
  mySign2.classList.add("d-none");
  mySignout.classList.remove("d-none");
  myScoreboard.classList.remove("d-none");
} else {
  mySign.classList.remove("d-none");
  mySign2.classList.remove("d-none");
  mySignout.classList.add("d-none");
  myScoreboard.classList.add("d-none");
}
