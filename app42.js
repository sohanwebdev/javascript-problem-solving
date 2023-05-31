/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
*/
let Combine = (x = 0,y = 0) => {
  let data = [...x,...y];
  let max = Math.max(...data);
  return max;
}
let x = [3,5,6,7,8];
let y = [8,3,10,4,17];
console.log(Combine(x,y))