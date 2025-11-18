//appel la fonction init une fois la page chargée
window.onload = init;

let visible = false;
let conformiteMdp = 0;
let pointMinuscule = 0;
let pointMajuscule = 0;
let pointChiffre = 0;
let pointNbCaracteres = 0;

/**
 * fonction d'initialisation
 * Abonnements des events
 */
function init() {
  document
    .getElementById("btn-visibilite-password")
    .addEventListener("click", () => {
      visibilite();
    });
  document.getElementById("mdp").addEventListener("input", () => {
    controleMotDePasse();
  });
}

/**
 * Fonction gérant la visibilité du mot de passe
 */
function visibilite() {
  let oeil = document.getElementById("oeil");
  //visible est une variable booléenne
  //si ce n'est pas visible alors au clic je viens modifier l'image
  if (!visible) {
    visible = true;
    oeil.setAttribute("src", "images/eye-open.png");
    oeil.setAttribute("alt", "Icône oeil ouvert");
    //je modifie également le type de l'input pour afficher le mot de passe en clair
    document.getElementById("mdp").setAttribute("type", "text");
  } else {
    visible = false;
    oeil.setAttribute("src", "images/eye-close.png");
    oeil.setAttribute("alt", "Icône oeil fermé");
    document.getElementById("mdp").setAttribute("type", "password");
  }
}

/**
 * Fonction vérifiant que chaque consigne est respectée et gérant l'activation du bouton valider
 */
function validation() {
  //je donne une valeur à chaque point de vérification, c'est arbitraire
  conformiteMdp =
    pointMinuscule + pointMajuscule + pointChiffre + pointNbCaracteres;
  console.log(conformiteMdp);
  //si tous les points sont conformes j'active le bouton
  if (conformiteMdp == 4) {
    document.getElementById("valider").disabled = false;
  } else {
    document.getElementById("valider").disabled = true;
  }
}

/**
 * Fonction centrale du contrôle du mot de passe
 */
function controleMotDePasse() {
  let mdp = document.getElementById("mdp").value;
  //appel des méthodes sucessives pour vérifier le mot de passe
  verifMinuscule(mdp);

  verifMajuscule(mdp);

  verifChiffre(mdp);

  verifNbCaracteres(mdp);

  validation();
}

function verifMinuscule(mdp) {
  let presenceMinuscule = false;

  for (let i = 0; i < mdp.length; i++) {
    //chaque caractère à un équivalent numérique, cela permet de gérer facilement les caractères spéciaux notamment
    //https://fr.wikibooks.org/wiki/Les_ASCII_de_0_%C3%A0_127/La_table_ASCII
    //ici on regarde si la valeur numérique du caractère correspond à une minuscule
    if (mdp.charCodeAt(i) >= 97 && mdp.charCodeAt(i) <= 122) {
      presenceMinuscule = true;
    }
  }

  //si on trouve une minuscule on passe la consigne minuscule en vert
  if (presenceMinuscule) {
    colorTextGreen("minuscule");
    pointMinuscule = 1;
  } else {
    colorTextRed("minuscule");
    pointMinuscule = 0;
  }
}

//même principe que pour la verifMinuscule
function verifMajuscule(mdp) {
  let presenceMajuscule = false;

  for (let i = 0; i < mdp.length; i++) {
    if (mdp.charCodeAt(i) >= 65 && mdp.charCodeAt(i) <= 90) {
      presenceMajuscule = true;
    }
  }

  if (presenceMajuscule) {
    colorTextGreen("majuscule");
    pointMajuscule = 1;
  } else {
    colorTextRed("majuscule");
    pointMajuscule = 0;
  }
}

function verifChiffre(mdp) {
  let presenceChiffre = false;

  for (let i = 0; i < mdp.length; i++) {
    if (mdp.charCodeAt(i) >= 48 && mdp.charCodeAt(i) <= 57) {
      presenceChiffre = true;
    }
  }

  if (presenceChiffre) {
    colorTextGreen("chiffre");
    pointChiffre = 1;
  } else {
    colorTextRed("chiffre");
    pointChiffre = 0;
  }
}

function verifNbCaracteres(mdp) {
  let nbCaract = false;

  //si le mot de passe est vidé je remets les consignes en rouge
  if (mdp.length == 0) {
    colorTextRed("minuscule");
    colorTextRed("majuscule");
    colorTextRed("chiffre");
    colorTextRed("nbCaracteres");
  }

  //si le mot de passe fait + de 8 lettres je valide la consigne de longueur
  if (mdp.length >= 8) {
    colorTextGreen("nbCaracteres");
    nbCaract = true;
  } else {
    colorTextRed("nbCaracteres");
    nbCaract = false;
  }

  if (nbCaract) {
    pointNbCaracteres = 1;
  } else {
    pointNbCaracteres = 0;
  }
}
//méthode qui permet de mofidier la couleur d'un élément en fonction de son id
function colorTextRed(id) {
  document.getElementById(id).style.color = "red";
}

function colorTextGreen(id) {
  document.getElementById(id).style.color = "green";
}
