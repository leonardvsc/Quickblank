document.querySelectorAll("#link").forEach(function (data) {
  data.addEventListener("click", (event) => {
    const dataHref = data.getAttribute("data-href");

    switch (dataHref) {
      case "clickup":
        window.open("https://chat.openai.com/", "_blank");
        break;
      case "quickref":
        window.open("https://quickref.me/", "_blank");
        break;
      default:
        // Não faz nada caso não tenha nenhum data-href correspondente
        break;
    }
    event.preventDefault();
  });
});
