//convert hour to minutes
function hourToMin(hour){
  let min = 60;
  let mins = (hour * min);
  return mins;
}

let hours = hourToMin(2);
console.log(hours);