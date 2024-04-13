document.querySelectorAll("#link").forEach(function (data) {
  data.addEventListener("click", (event) => {
    const dataHref = data.getAttribute("data-href");
    console.log(dataHref);

    switch (dataHref) {
      /* HOME */
      case "clickup":
        window.open("https://app.clickup.com/", "_blank");
        break;

      /* PROGRAMMING */
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
