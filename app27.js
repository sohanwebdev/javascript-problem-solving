//findout the array which value are getter than 5 and positive and count hove many number are here

function count(number){
  let data = 0;
  for(let i = 0; i < number.length; i++){
    let value = number[i];
    if(value > 5){
      data = data + 1;
    }
  }
  return data;
}

let data = count([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log(data);