let getWeekDay = (date) => {
  let weekDay = date.getDay();
  switch (weekDay) {
    case 0:
      return "SU";
    case 1:
      return "MO";
    case 2:
      return "TU";
    case 3:
      return "WE";
    case 4:
      return "TH";
    case 5:
      return "FR";
    case 6:
      return "SA";
  }
};

export default getWeekDay;

//puede hacerse con .toLocaleDateString()
