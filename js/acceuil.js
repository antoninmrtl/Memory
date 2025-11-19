import { getUtilisateurs } from "./utils.js";
let myName = document.getElementById("Nameuser");

const utilisateurs = getUtilisateurs();
const dernierutilisateur = utilisateurs[utilisateurs.length - 1];
const username = dernierutilisateur.username;

myName.innerHTML = username;
