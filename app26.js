//findout the hotel cost
function hotelDays(days){
  let first10 = 500;
  let second10 = 300;
  let third10 = 100;
  if(days === 10){
    let totalCost = first10 * 10;
    return totalCost;
  }else if(days >= 11 && days <= 20){
    let first10Days = first10 * 10;
    let findOutDays = days - 10;
    let second10Days = findOutDays * second10;
    let totalCost = first10Days + second10Days;
    return totalCost;
  }else{
    let first10Days = first10 * 10;
    let second10Days = second10 * 10;
    let findOutDays = days - 20;
    let third10Days = findOutDays * third10;
    let totalCost = first10Days + second10Days + third10Days;
    return totalCost;
  }
}

let days = hotelDays(24);
console.log(days)