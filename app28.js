//get two friends name and saw that which friend name is biggest and select this name and revers this name

function names(friend1,friend2){
  let friendOne = friend1.length;
  let friendTwo = friend2.length;
  if(friendTwo > friendOne){
    let data = friend2.split('');
    let convert = data.reverse();
    let add = convert.join('');
    return add;
  }else{
    let data = friend1.split('');
    let convert = data.reverse();
    let add = convert.join('');
    return add;
  }

}


const freinds = names('sohanxyz', 'sohanMozumder');
console.log(freinds);