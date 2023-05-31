/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
*/
let checkFriend = (friends) => {
  let save = []
  for(let i = 0; i < friends.length; i++){
    let friend = friends[i].length
    if(friend % 2 == 0){
      save.push(friend)
    }
  }
  return save;
}

let friends = ['sabbir', 'rakib', 'toopo', 'zami', 'barakat'];
console.log(checkFriend(friends));