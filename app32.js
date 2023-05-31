/*
counting total cost diesel,patrol,octane
1 liter diesel = 114
1 liter patrol = 130
1 liter octane = 135
*/
function oilPrice(x = 0, y = 0, z = 0){
  let diesel = x * 114;
  let patrol = y * 130;
  let octane = z * 135;

  let totalPrice = diesel + patrol + octane;
  return totalPrice;
}

let value = oilPrice(1,0,2);
console.log(value);

/*
1,1,1 => 379
30,20,10 => 7370
1,0,2 => 384
0,2,3 => 665
*/