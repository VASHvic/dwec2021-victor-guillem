// function sum(a) {
//   return function sum(b) {
//     return a + b;
//   };
// }

let sum = (a) => (b) => a + b;
console.log(sum(1)(2));
