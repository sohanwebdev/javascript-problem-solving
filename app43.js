/*
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. 
*/
//for()
let numbers = [ 1, 3, 5, 7, 9 ];
let empty = [];
for(let i = 0; i < numbers.length; i++){
  let num = numbers[i] + 1;
  empty.push(num);
}
console.log(empty);

//map()
let number = [ 1, 3, 5, 7, 9 ];
let data = number.map((num) => {
  return (num + 1)
});
console.log(data);