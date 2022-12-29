function leapYear(year) {
  if (typeof year != "number") {
    console.log(`Given input "${year}" not valid please provide valid input`);
  } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`Given Year "${year}" is leap year`);
  } else {
    console.log(`Given Year "${year}" is not leap year`);
  }
}
leapYear(2020);
leapYear(1999);
leapYear(1960);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(1999);
leapYear(NaN);
leapYear(1750);


