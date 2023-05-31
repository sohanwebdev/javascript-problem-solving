function leapYears(years){
  let value = [];
  for(let i = 0; i < years.length; i++){
    let data = years[i];
    if((0 == data % 4) && (0 != data % 100) || (0 == data % 400)){
      value.push(data);
    }
  }
  return value;
}

const findYear = leapYears([2000,2023,2024,2025,2028,2030]);
console.log(findYear);