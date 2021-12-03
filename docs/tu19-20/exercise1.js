const table = document.getElementById("age-table");
const tableLabels = table.firstElementChild.querySelectorAll("label");
const tdAge = table.firstElementChild.firstElementChild.firstElementChild;
const searchForm = document.querySelector("form[name=search]");
const firstInput = searchForm.querySelector("input");
const lastInput = searchForm.lastElementChild;

console.log(table);
console.log(tableLabels);
console.log(tdAge);
console.log(searchForm);
console.log(firstInput);
console.log(lastInput);

//mirar table.rows[0].cells[0]
