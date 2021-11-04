const printNumbers = (from, to) =>
  setTimeout(
    from === to ? console.log(from++) : console.log(to),
    1000,
    from,
    to
  );

console.log(printNumbers(2, 4));
