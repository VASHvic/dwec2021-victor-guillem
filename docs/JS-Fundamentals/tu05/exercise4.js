let ask = (num, positive, negative) =>
  isPositive(num) ? positive() : negative();

let isPositive = (num) => (num >= 0 ? true : false);

function showPositive() {
  console.info('The number is positive');
}
function showNegative() {
  console.info('The number is negative');
}

ask(23, showPositive, showNegative);
ask(-23, showPositive, showNegative);
