/*
here show the inch findout who is the tallest person
(157,134,188)/(167,190,120,165)
*/

function height(person1 = 0,person2 = 0, person3 = 0, person4 = 0){
  if(person1 > person2 && person1 > person3 && person1 > person4){
    return "person1";
  }else if(person2 > person1 && person2 > person3 && person2 > person4){
    return "person2";
  }else if(person3 > person1 && person3 > person2 && person3 > person4){
    return "person3";
  }else{
    return "person4";
  }
}

/*
const person = height(157,134,188);
console.log(person);
const person1 = height(167,190,120,165);
console.log(person1);
*/
