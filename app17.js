//reverse a string str = "abcdefghijk";

function strReverse(str){
  let string = str.split('');
  let reverse = string.reverse();
  let createStr = reverse.join('');
  return createStr;
}

let str = "abcdefghijk";
let data = strReverse(str);
console.log(data);