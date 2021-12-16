// Main HTML elements
const container = document.getElementById("prompt-form-container");
const form = document.getElementById("prompt-form");
const mainButton = document
  .getElementById("show-button")
  .addEventListener("click", showPrompt);

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
  container.style.display = "none";
  form.elements[0].value = "";
}

/**
 * function requested by the exercise
 * @param {*} text
 * @param {*} callback
 */
function showPrompt(text, callback) {
  showCover();
  text = "Say something funny!";
  // WRITE YOUR CODE HERE
  form.firstElementChild.innerText = text;
  //hacer ok button, cancel button, enter
  const enteredText = form.elements[0].value;
  const cancelButton = form.elements[2];
  cancelButton.addEventListener("click", hideCover);
  container.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      form.elements.text.value = "null";
    }
    console.log(callback(form.elements.text.value));
  });
  //   console.log(callback(form.elements.text.value));
}
