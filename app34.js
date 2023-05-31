//assignment problem 1

function mindGame(num){
  let item1 = num * 3;
  let item2 = item1 + 10;
  let item3 = item2 / 2;
  let item4 = item3 - 5;
  return item4;
}

let number = 5;
let inputValue = mindGame(number);
console.log(inputValue);
/*
input:5/output:7.5
input:50/output:75
input:33/output:49.5
*/