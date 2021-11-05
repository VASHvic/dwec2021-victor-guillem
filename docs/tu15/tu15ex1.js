// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

let sum = (a) => (b) => isNaN(a) || isNaN(b) ? NaN : +a + +b;
export default sum;
