function logar(event) {
  let userLogin = document.getElementById("usuario").value;
  let senhaLogin = document.getElementById("senha").value;

  if (userLogin === "admin" && senhaLogin === "admin") {
    location.href = "main.html"; // Redirecione para a página main.html
  } else {
    alert("Usuário ou senha incorreto!"); // Exiba uma mensagem de erro caso as credenciais estejam incorretas
  }

  return false;
}
