let isValid = (password) => {
  let lowercase = false;
  let uppercase = false;
  let num = false;

  if (password.length < 8) return false;

  //check for at least one lowercase uppercase and num
  for (let letter of password) {
    if (letter === letter.toLowerCase()) {
      lowercase = true;
    }
    if (letter === letter.toUpperCase()) {
      uppercase = true;
    }
    if (Number(letter) === letter) {
      num = true;
    }
  }
  if (!lowercase || !uppercase || !num) {
    return false;
  }
};

console.log(isValid('!C3aaaaa'));
