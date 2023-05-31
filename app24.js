//write a function if you call some one show the his details

function callData(name){
  let person1 = {name: 'X',age: 20, country: 'Bangladesh'}
  let person2 = {name: 'Y',age: 15, country: 'China'}
  let person3 = {name: 'Z',age: 23, country: 'Korea'}

  if(name === "person1"){
    return person1;
  }else if(name === "person2"){
    return person2;
  }else{
    return person3;
  }
}

let value = callData("person2");
console.log(value);