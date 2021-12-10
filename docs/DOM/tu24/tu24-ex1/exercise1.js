document.addEventListener("keydown", (event) => {
  if (event.altKey === true && event.key === "F12") {
    document.querySelector("#imagen").style.backgroundImage =
      "url('background.jpg')";
  }
});
