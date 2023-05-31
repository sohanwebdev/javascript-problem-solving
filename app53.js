/*
Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false.
*/

const check = (data) => {
  if(typeof data === 'number'){
    return true;
  }else{
    return false;
  }
}

const value = check(2);
console.log(value);