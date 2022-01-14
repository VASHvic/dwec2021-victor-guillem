function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("runs after 3 seconds"));

let span = document.createElement("span");
span.innerHTML = "Loading";
document.body.appendChild(span);

delay(2000)
  .then(() => {
    span.innerText = "Complete";
  })
  .catch(() => {
    span.innerText = "Error";
  });
