export function getUtilisateurs() {
  const utilisateursJSON = localStorage.getItem("utilisateurs");
  return utilisateursJSON ? JSON.parse(utilisateursJSON) : [];
}

export function getUserConnecte() {
  const userConnecteJSON = localStorage.getItem("userConnecte");
  return userConnecteJSON ? JSON.parse(userConnecteJSON) : null;
}

export function saveUtilisateurs(utilisateurs) {
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

export function saveUserConnecte(utilisateur) {
  localStorage.setItem("userConnecte", JSON.stringify(utilisateur.username));
}

export function estUsernameExistant(username) {
  const utilisateurs = getUtilisateurs();
  return utilisateurs.some((user) => user.username === username);
}

export function estMailExistant(email) {
  const utilisateurs = getUtilisateurs();
  return utilisateurs.some((user) => user.email === email);
}
