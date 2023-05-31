/*
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10. But do this using array.find() method. Then compare the output of question.
*/

//find()
let number = [33, 50, 79, 78, 90, 101, 30 ];
let data = number.find((num) => {
  return (num % 10 == 0);
});
console.log(data);