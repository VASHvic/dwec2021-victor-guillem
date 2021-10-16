module.exports = { isValid };

function isValid(password) {
  let lowercase = false;
  let uppercase = false;
  let num = false;
  let symbol = false;
  let result = false;

  if (password.length < 8) return false;

  //check for at least one lowercase uppercase and num
  for (let letter of password) {
    if (
      letter === letter.toLowerCase() &&
      letter != letter.toUpperCase() &&
      isNaN(letter) &&
      lowercase == false
    ) {
      lowercase = true;
      continue;
    }
    if (
      letter === letter.toUpperCase() &&
      letter != letter.toLowerCase() &&
      isNaN(letter) &&
      uppercase == false
    ) {
      uppercase = true;
      continue;
    }
    if (!isNaN(letter) && num == false) {
      num = true;
      continue;
    }
    if (
      letter === letter.toUpperCase() &&
      letter === letter.toLowerCase() &&
      isNaN(letter) &&
      symbol == false
    ) {
      symbol = true;
    }
  }
  // prettier-ignore
  !lowercase || !uppercase || !num || !symbol ? result = false : result = true;
  lowercase && uppercase && num && symbol ? (result = true) : (result = false);

  return result;
}
