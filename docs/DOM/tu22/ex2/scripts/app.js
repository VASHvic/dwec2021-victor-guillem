document.getElementById("show-form-btn").addEventListener("click", showForm);
document.getElementById("backdrop").addEventListener("click", closeForm);
document.querySelector(".btn--passive").addEventListener("click", closeForm);
document.querySelector(".btn--success").addEventListener("click", addMovie);
const movieList = document.getElementById("movie-list");
const inputRating = document.getElementById("rating");
inputRating.addEventListener("input", checkRating);
const entrytext = document.getElementById("entry-text");

function showForm() {
  document.getElementById("backdrop").classList.add("visible");
  document.getElementById("add-modal").classList.add("visible");
}
function closeForm() {
  document.getElementById("backdrop").classList.remove("visible");
  document.getElementById("add-modal").classList.remove("visible");
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
}
function addMovie() {
  const newLi = document.createElement("LI");
  newLi.classList.add("movie-element");
  const title = document.getElementById("title");
  newLi.innerHTML = `<div class="movie-element__info">
    <h2>${title.value}</h2>
    <p>${inputRating.value}/5 stars</p>
  </div>`;
  newLi.addEventListener("click", () => {
    newLi.remove();
    if (movieList.firstElementChild == null) {
      entrytext.style.display = "block";
    }
  });
  movieList.append(newLi);
  closeForm();
  if (movieList.firstElementChild != null) {
    entrytext.style.display = "none";
  }
}
function checkRating() {
  if (
    inputRating.value > 5 ||
    inputRating.value < 1 ||
    isNaN(inputRating.value)
  ) {
    inputRating.value = "";
  }
}
