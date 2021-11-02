let getLastDayOfMonth = (year, month) => {
  month = month + 1;
  const DateInput = new Date(year, month);
  DateInput.setDate(0);
  const lastDayOfMonth = DateInput.getDate();
  return lastDayOfMonth;
};

// const getLastDayOfMonth = (year, month) =>{
//   new Date(year, month +1, 0).getDate();
// }

export default getLastDayOfMonth;
