let pow = (x, n) => (n >= 2 ? x * pow(x, n - 1) : x * 1);

console.info(pow(2, 6), pow(0, 5), pow(-5, 3));
