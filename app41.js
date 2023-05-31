/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. 
*/

let squared = (square) => {
  
  let sum = 0;

    for (var i = 0, len = square.length; i < len; i++) {
      let sValue = square[i] * square[i];
      sum = sum + sValue;
    }

    return sum;     

  
}

let numbers = [3,4,5,6,7,8,9,11,13,15];
console.log(squared(numbers))