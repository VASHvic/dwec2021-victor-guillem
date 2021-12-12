const dragBox = document.getElementById("capa1");
const destinationgBox = document.getElementById("capa2");
dragBox.draggable = true;

dragBox.addEventListener("dragstart", () => {
  dragBox.style.opacity = "0.5";
});
dragBox.addEventListener("dragend", () => {
  dragBox.style.opacity = "1";
});

destinationgBox.addEventListener("dragover", (e) => {
  destinationgBox.style.backgroundColor = "red";
  e.preventDefault();
});
destinationgBox.addEventListener("dragleave", () => {
  destinationgBox.style.backgroundColor = "transparent";
});
destinationgBox.addEventListener("drop", () => {
  destinationgBox.style.backgroundColor = "yellow";
  destinationgBox.innerHTML = "You have achieved it!";
  document.getElementById("capa1").style.display = "none";
});
