function kilometers(miles){
  let oneMile = 1.609344;
  let kilometers = (miles * oneMile).toFixed(5);
  return parseFloat(kilometers);
}

/*
let kilometer = kilometers(2);
console.log(kilometer);
*/
