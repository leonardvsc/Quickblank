const users = {
  quick: "quickpass",
};

function logar(event) {
  let userLogin = document.getElementById("usuario").value;
  let senhaLogin = document.getElementById("senha").value;

  if (userLogin === "" || senhaLogin === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (users[userLogin] === senhaLogin) {
    sessionStorage.setItem("loggedUser", userLogin);
    location.href = "main.html";
  } else {
    alert("Usuário ou senha incorreto!");
  }
}
