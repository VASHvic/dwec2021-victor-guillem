window.addEventListener("DOMContentLoaded", (event) => {
  const textarea = document.getElementById("area");
  const clearButton = document.querySelector("button");

  textarea.value = localStorage.getItem("texto");

  clearButton.addEventListener("click", () => {
    localStorage.setItem("texto", "");
    localStorage.removeItem("texto");
  });

  textarea.addEventListener("input", () => {
    localStorage.setItem("texto", textarea.value);
  });
});
