const values = [];

let loop = true;
while (loop) {
  let answer = prompt("Please write a number");

  // prettier-ignore
  isNaN(answer) || answer == null || answer.trim() == "" ? (loop = false) : values.push(+answer);
}

const total = values.reduce((total, num) => total + num, 0);
