//assignment problem 4
function findingBadData(value){
  let empty = [];
  for(let i = 0; i < value.length; i++){
  let some = 0;
  let data = value[i];
  if(data <= 0){
    some = data;
    empty.push(some);
  }
  }
  return empty.length;
}

console.log(findingBadData([-4,-5,-9,-33,-55]));

/*
input:[1,2,5]/output:0
input:[2,-5,-7,-13]/output:3
input:[-4,-5,-9,-33,-55]/output:5

*/