let ask = (num, positive, negative) => (num >= 0 ? positive() : negative());

function isPositive() {
  console.info("The number is positive");
}
function isNegative() {
  console.info("The number is negative");
}

ask(23, isPositive, isNegative);
ask(-23, isPositive, isNegative);
