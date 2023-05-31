//findout the maximum number of an array
function maxNumber(numbers){
  let firstValue = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element > firstValue){
      firstValue = element;
    }
  }
  return firstValue;
}


let data = [129,12, 45, 13, 89, 78, 120, 4,300];
let value = maxNumber(data);
console.log(value);