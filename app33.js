function isBestFriend(person1,person2){
  if((person1.name === person2.friend) && (person1.friend === person2.name)){
    return true;
  }else{
    return false;
  }
}


let friend = isBestFriend({name:"abul",friend: "babul"},{name: "babul",friend: "abul"});
console.log(friend);