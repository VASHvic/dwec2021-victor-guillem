const printNumbersInterval = (from, to) => {
  const intervalID = setInterval(
    function () {
      if (from <= to) {
        console.log(from);
        from++;
      } else {
        return clearInterval(intervalID);
      }
    },
    1000,
    from,
    to
  );
};
const printNumbersNestTime = (from, to) => {
  const timeID = setTimeout(
    function () {
      if (from - 1 === to) {
        return clearTimeout(timeID);
      }
      console.log(from);
      setTimeout(printNumbersNestTime, 0, ++from, to);
    },
    1000,
    from,
    to
  );
};

printNumbersInterval(1, 5);
printNumbersNestTime(5, 10);
