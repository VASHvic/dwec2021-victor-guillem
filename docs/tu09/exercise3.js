const salaries = {
  John: 200,
  Ann: 250,
};

let topSalary = (object) => {
  let bestPayed = [];
  for (const [key, value] of Object.entries(salaries)) {
    console.log(`${key}: ${value}`);
  }
};

console.log(topSalary[1]);
