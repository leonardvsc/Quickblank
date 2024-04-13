document.querySelectorAll("#link").forEach(function (data) {
  data.addEventListener("click", (event) => {
    const dataHref = data.getAttribute("data-href");
    console.log(dataHref);

    switch (dataHref) {
      /* HOME */
      case "html":
        window.open("https://quickref.me/html", "_blank");
        break;

      case "css":
        window.open("https://quickref.me/css3", "_blank");
        break;

      case "javascript":
        window.open("https://quickref.me/javascript", "_blank");
        break;

      /* PROGRAMMING */
      case "quickref":
        window.open("https://quickref.me/", "_blank");
        break;

      case "mongodb":
        window.open("https://quickref.me/mongodb", "_blank");
        break;
      default:
        // Não faz nada caso não tenha nenhum data-href correspondente
        break;
    }
    event.preventDefault();
  });
});
