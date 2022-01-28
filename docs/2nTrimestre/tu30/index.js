const addMoreBtn = document.getElementById("add");
const retrieveBtn = document.getElementById("retrieve");
const firstInput = document.querySelector("input");
const ul = document.createElement("ul");
document.body.insertBefore(ul, addMoreBtn);
addMoreBtn.addEventListener("click", createInput);
retrieveBtn.addEventListener("click", fetchAll);

function createInput() {
  const newInput = document.createElement("input");
  document.body.append(newInput);
}

function printData(info) {
  let newLi = document.createElement("li");
  newLi.innerText = info;
  ul.appendChild(newLi);
}

async function fetchAll() {
  const allInputs = document.querySelectorAll("input");
  const promesas = [];
  allInputs.forEach((input) => {
    promesas.push(fetch(`https://api.github.com/users/${input.value}`)); //pot fer-se el then ací
  });
  const result = await Promise.allSettled(promesas);
  result.forEach((respuesta) => {
    if (respuesta.value.status === 200) {
      respuesta.value.json().then((e) => printData(e.login));
    }
  });
}
