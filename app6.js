//findout odd number an array an store the odd number and return it
function findOddSum(data){
  let odd = [];
  for(let i = 0; i < data.length; i++){
    let value = data[i];
    if(value % 2 != 0){
      odd.push(value)
    }
  }
  return odd;
}

/*
let myData = findOddSum([5,7,8,10,45,30,1, 7, 9,100, 400, 112, 11, 21, 43, 99]);
console.log(myData);
*/
