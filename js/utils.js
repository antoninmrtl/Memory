export function getUtilisateurs() {
  const utilisateursJSON = localStorage.getItem("utilisateurs");
  return utilisateursJSON ? JSON.parse(utilisateursJSON) : [];
}
export function saveUtilisateurs(utilisateurs) {
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

export function estUsernameExistant(username) {
  const utilisateurs = getUtilisateurs();
  return utilisateurs.some((user) => user.username === username);
}

export function estMailExistant(email) {
  const utilisateurs = getUtilisateurs();
  return utilisateurs.some((user) => user.email === email);
}
