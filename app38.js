//assignment problem 5
function gemsToDiamond(person1,person2,person3){
  let gems1 = 21 * person1;
  let gems2 = 32 * person2;
  let gems3 = 43 * person3;
  let total = gems1 + gems2 + gems3;
  if(total > 2000){
    let value = total - 2000;
    return value;
  }else{
    return total;
  }
}

let inputData1 = 20;
let inputData2 = 200;
let inputData3 = 50;
let value = gemsToDiamond(inputData1, inputData2, inputData3);
console.log(value);

/*
input:1,1,1/output:96
input:20,200,50/output:6970
input:100,5,1/output:303
*/