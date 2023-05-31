/*
findout out the topper sutudens
(jim=84,dela=99,chinku=77)
(jim=69,dela=97,chinku=99)
*/
function result(x,y,z){
  if(x > y && x > z){
    return 'jim';
  }else if(y > x && y > z){
    return 'dela';
  }else{
    return 'chinku'
  }
}

/*
let value = result(84,99,77);
console.log(value);

let value1 = result(69,97,99);
console.log(value1);
*/
