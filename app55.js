/*
Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation”
*/

const check = (num1,num2,value) => {
  if(value === "add"){
    return("result is : add " + num1 + num2);
  }else if(value === "subtract"){
    return("result is : subtract" + num1 - num2);
  }else if(value === "multiply"){
    return("result is : multiply" + num1 * num2);
  }else if(value === "divide"){
    return("result is : divide" + num1 / num2);
  }else if(value === "modulus"){
    return("result is : modulus" + num1 % num2);
  }else{
    return("result is : Invalid operation");
  }
}

const value = check(20,10,"add");
console.log(value);