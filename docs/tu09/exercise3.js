const salaries = {
  John: 200,
  Ann: 250,
};

let topSalary = (salaries) => {
  const bestPayed = [];
  for (const [key, value] of Object.entries(salaries)) {
    console.log(`${key}: ${value}`);
  }
};

topSalary(salaries);
