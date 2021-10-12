//exercise 1
//export { createUser, isEmpty, sumSalaries, multiplyNumeric };
module.exports = { createUser, isEmpty, sumSalaries, multiplyNumeric };
function createUser() {
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
  return user;
}

//exercise 2

function isEmpty(obj) {
  let properties = 0;
  for (let key in obj) {
    properties++;
  } //si properties es igual a 0 devuelve true
  return properties === 0;
}

//exercise 3

function sumSalaries(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

//exercise 4

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] = obj[key] * 2;
    }
  }
}
