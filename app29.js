/*
create a function there has an array of object to recieve parameter.every object has person name and age.findout which person age is small
*/

function findPerson(peron){
  var firstPerson = person[0].age;
  var find;
  for(let i = 0; i < person.length; i++){
    let data = person[i];
    let age = data.age;
    if(age < firstPerson){
      find = age;
    }
  }
  return find;
}

var person = [
  {name: "sakib",age: 30},
  {name: "samiul",age: 20},
  {name: "sahid",age: 50},
  {name: "sami",age: 10}
]
let data = findPerson(person);
console.log(data);