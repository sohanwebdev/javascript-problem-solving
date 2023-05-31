//findout an array which name is biggest of other name

function findOut(name){
  let find = name[0];
  for(let i = 0; i < name.length; i++){
    let names = name[i];
    if(names.length > find.length){
      find = names;
    }
  }
  return find;
}
var name = ["rahim", "karim", "abdul","sadsd","heroalam","sohanMozumder"];
var showName = findOut(name);
console.log(showName);