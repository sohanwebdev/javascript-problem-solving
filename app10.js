//calculate the factorial number
function data(value){
  let n = 1;
 for(let i = value; i >= 1; i--){
  n = n * i;
 }
 return n;
}

const myData = data(5);
console.log(myData);