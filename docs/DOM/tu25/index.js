// Main HTML elements
const container = document.getElementById("prompt-form-container");
const form = document.getElementById("prompt-form");
const showButton = document.getElementById("show-button");
const inputBox = form.querySelector("input");
const okButton = form.querySelector("input[value= 'Ok']");
const cancelButton = form.querySelector("input[value= 'Cancel']");

//Event listeners
showButton.addEventListener("click", () => {
  showPrompt("Say something funny!", (value) => {
    alert(value);
    inputBox.value = "";
    location.reload();
  });
});

/**
 * Show a half-transparent DIV to "shadow" the page
 * (the form is not inside, but near it, because it shouldn't be half-transparent)
 */
function showCover() {
  let coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";

  // make the page unscrollable while the modal form is open
  document.body.style.overflowY = "hidden";

  document.body.append(coverDiv);
  container.style.display = "block";
  form.elements.text.focus();
}

/**
 * Hide the modal form
 */
function hideCover() {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
}

/**
 * function requested by the exercise
 * @param {*} text
 * @param {*} callback
 */
function showPrompt(text, callback) {
  showCover();
  // WRITE YOUR CODE HERE
  form.firstElementChild.textContent = text;
  form.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      callback(null);
    }
  });
  okButton.addEventListener("click", (e) => {
    e.preventDefault();
    callback(inputBox.value);
  });
  cancelButton.addEventListener("click", () => {
    callback(null);
  });
}
