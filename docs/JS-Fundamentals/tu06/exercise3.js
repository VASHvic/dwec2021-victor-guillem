export let pow = (x, n) => (n >= 2 ? x * pow(x, n - 1) : x * 1);
