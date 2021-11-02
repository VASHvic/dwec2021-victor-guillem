let aclean = (arr) => {
  let Anagrams = []; //Array donde irán los datos originales sin modificar
  let sortedAnagrams = []; // Array donde se comparará con los elmentos modificados
  arr.forEach((element, index) => {
    let sorted = element.split("").sort().join("").toLowerCase();
    if (!sortedAnagrams.includes(sorted)) {
      sortedAnagrams.push(sorted);
      Anagrams.push(arr[index]);
    }
  });
  return Anagrams;
};

export default aclean;

//solution with map
//map.set(sorted, element);
//return Array.from(map.values);
