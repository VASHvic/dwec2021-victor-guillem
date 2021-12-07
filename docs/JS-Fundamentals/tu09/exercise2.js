// prettier-ignore
let getAverageAge = (arr) => {
  if (arr.length === 0) return 0; 
  const ages = arr.map((person) => (!isNaN(person.age) ? person.age : 0)); //make arr of ages
  const sumAges = ages.reduce((total, age) => total + age, 0);              // calc sum of previous array
  return sumAges / ages.length;                                             //return avg
};

module.exports = { getAverageAge };
