window.addEventListener("DOMContentLoaded", (event) => {
  const textarea = document.getElementById("area");
  const clearButton = document.querySelector("button");

  textarea.value = Cookies.get("texto");

  clearButton.addEventListener("click", () => {
    Cookies.remove("texto");
  });

  textarea.addEventListener("input", () => {
    Cookies.set("texto", textarea.value);
  });
});
