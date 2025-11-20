export function getUtilisateurs() {
  const utilisateursJSON = localStorage.getItem("utilisateurs");
  return utilisateursJSON ? JSON.parse(utilisateursJSON) : [];
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
