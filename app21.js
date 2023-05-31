//findout biggest number in an array

function unique(num){
  let value = num[0]
  for(let i = 0; i< num.length; i++){
    let element = num[i];
    if(element > value){
      value = element
    }
  }
  return value;
}

let number = [1,2,3,4,5,6,7,8,9,10];
let numbers = unique(number);
console.log(numbers);

