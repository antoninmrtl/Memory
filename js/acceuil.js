import { getUserConnecte } from "./utils.js";
let myName = document.getElementById("Nameuser");

const userConnecte = getUserConnecte();
const nameUser = userConnecte;

myName.innerHTML = nameUser;
