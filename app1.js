//find the 2023 is a leap year
function leapYear(year){
  if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    return true;
  }else{
    return false;
  }
}

/*
let years = leapYear(2023);
console.log(years);
*/

/*
let years = leapYear(2000);
console.log(years);
*/
