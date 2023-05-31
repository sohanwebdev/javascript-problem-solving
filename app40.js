/*
Write an arrow function where it will do the following:
a) Square each array element
b) push it an empty array
c) Return the array
*/

let squared = (square) => {
  ret= [];            

  for (var i = 0, len = square.length; i < len; i++) {
      root = Math.sqrt(square[i]).toFixed(2);
      ret.push(root);
  }

  return ret;
}

let numbers = [3,4,5,6,7,8,9,11,13,15];
console.log(squared(numbers))