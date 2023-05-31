//get an array data and calculate the odd number
function calculate(number){
  let finalData = 0;
  for(let i = 0; i < number.length; i++){
    let value = number[i];
    if(value % 2 != 0){
      finalData = finalData + value;
    }
  }
  return finalData;
}

let numbers = calculate([1, 4, 5, 2, 60, 56, 34, 23]);
console.log(numbers);
