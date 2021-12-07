const button = document.getElementById("hider");
const text = document.getElementById("text");

button.addEventListener("click", hide);

function hide() {
  text.style.visibility = "hidden";
}
