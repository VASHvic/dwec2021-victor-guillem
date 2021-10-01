let ask = (num) => (num >= 0 ? isPositive() : isNegative());

let isPositive = () => {
  console.info("is positive");
};
let isNegative = () => {
  console.info("is negative");
};

ask(23);
ask(-23);
