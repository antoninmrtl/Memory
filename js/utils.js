export function getUtilisateurs() {
  const utilisateursJSON = localStorage.getItem("utilisateurs");
  return utilisateursJSON ? JSON.parse(utilisateursJSON) : [];
}
export function saveUtilisateurs(utilisateurs) {
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

export function estUtilisateurExistant(username, email) {
  const utilisateurs = getUtilisateurs();
  const userExists = utilisateurs.some((user) => user.username === username);
  const emailExists = utilisateurs.some((user) => user.email === email);
  return { userExists, emailExists };
}
