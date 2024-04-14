window.onload = verificarLogin; // Verifique o login ao carregar a página

function verificarLogin() {
  let loggedUser = sessionStorage.getItem("loggedUser"); // Obtenha o nome do usuário da sessão
  if (!loggedUser) {
    location.href = "index.html"; // Redirecione de volta para a página de login caso não hja um usuário logado
  }
}
