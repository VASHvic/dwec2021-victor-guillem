let getLastDayOfMonth = (year, month) => {
  month = month + 1;
  const DateInput = new Date(year, month);
  DateInput.setDate(0);
  const lastDayOfMonth = DateInput.getDate();
  return lastDayOfMonth;
};

export default getLastDayOfMonth;
