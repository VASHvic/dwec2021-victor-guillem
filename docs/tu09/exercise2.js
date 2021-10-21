// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

let getAverageAge = (arr) => {
  let ages = arr.map((person) => person.age);
  let sumAges = ages.reduce((total, age) => total + age, 0);
  return sumAges / ages.length;
};

console.log(getAverageAge(arr));
