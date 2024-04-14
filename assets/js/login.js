function logar(event) {
  let userLogin = document.getElementById("usuario").value;
  let senhaLogin = document.getElementById("senha").value;

  if (userLogin === "" || senhaLogin === "") {
    alert("Preencha todos os campos!"); // Exiba uma mensagem de erro caso os campos estejam vazios
    return;
  }

  if (userLogin === "quick" && senhaLogin === "quickpass") {
    location.href = "main.html"; // Redirecione para a página main.html
  } else {
    alert("Usuário ou senha incorreto!"); // Exiba uma mensagem de erro caso as credenciais estejam incorretas
  }
}
