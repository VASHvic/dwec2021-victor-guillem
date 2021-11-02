let unique = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

export default unique;

//sollution set
// const conjunto = new Set(arr);
