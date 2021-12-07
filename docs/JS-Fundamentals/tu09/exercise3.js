export let topSalary = (object) => {
  let bestSalary = 0;
  let bestPayed = null;
  for (const [key, value] of Object.entries(object)) {
    if (value > bestSalary) (bestPayed = key), (bestSalary = value);
  }
  return bestPayed;
};
