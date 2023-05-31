/*
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/
let numbers =  [33, 50, 79, 78, 90, 101, 30 ];
let data = numbers.filter((num) => {
  return (num % 10 == 0)
});
console.log(data);