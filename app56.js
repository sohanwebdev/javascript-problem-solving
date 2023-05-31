/*
show your all data in a template string
*/
const details = {
  name : "md. amir hossain",
  age : 26,
  religion : true,
  class : ['one', 2, false],
  full : {
    distric : 'chandpur',
    live : 'ctg'
  },
  some : function (){
    return this.name;
  }
}

const fullDetails = `my name is ${details.name} and i am ${details.age} years old. i am a muslim it is ${details.religion}. i am only ${details.class[0]}. i like to work ${details.class[1]}. i always talking ${details.class[2]}. my home distric ${details.full.distric} and i live in ${details.full.live}.And this is ${details.some()}`;

console.log(fullDetails);