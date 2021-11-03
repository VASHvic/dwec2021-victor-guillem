const getMostPopulatedCity = (...cities) => {
  const mostPopulatedCity = { name: "", population: 0 };
  [...cities].forEach(
    (city) =>
      city.population > mostPopulatedCity.population
        ? (mostPopulatedCity.name = city.name) &&
          (mostPopulatedCity.population = city.population)
        : null //nothing to happen in  case the statement is false
  );
  return mostPopulatedCity;
};

export { getMostPopulatedCity };
