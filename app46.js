/*
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

//reduce()
let numbers = [ 1, 9, 17, 22 ];
let data = numbers.reduce((previous, current) => {
  return (previous + current)
}, 0);
console.log(data);