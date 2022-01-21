const addMoreBtn = document.getElementById("add");
const retrieveBtn = document.getElementById("retrieve");
const firstInput = document.querySelector("input");
addMoreBtn.addEventListener("click", createInput);
retrieveBtn.addEventListener("click", retrieveData);
const list = document.createElement("ul");

function createInput() {
  const newInput = document.createElement("input");

  document.body.append(newInput);
}

async function retrieveData(name) {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach(async (input) => {
    let result = await fetch(`https://api.github.com/users/${input.value}`);
    let resultJson = await result.json();
    list.append(resultJson.login);
  });
}
