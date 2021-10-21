const values = [];

let processAnswer = (answer) => {
  // prettier-ignore
  isNaN(answer) || answer == null || answer.trim() == "" ? (loop = false) : values.push(+answer);
};
let showTotal = (arr) => arr.reduce((total, num) => total + num, 0);

let loop = true;
while (loop) {
  let answer = prompt("Please write a number");
  processAnswer(answer);
}

const totalPrompts = showTotal(values);

export { processAnswer, showTotal };
