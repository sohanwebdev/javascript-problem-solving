//sorting the 0-10 in array
let numbers = [0,1,6,5,8,2,9,4,10,3,7];
let data = numbers.sort()
// console.log(data);

let num = 50;
let value = [];
for(let i = 1; i <= num; i++){
  let data = i;
  if(data % 3 == 0 || data % 5 == 0){
    value.push(data);
  }
}
console.log(value)
