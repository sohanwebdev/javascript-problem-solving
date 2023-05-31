//convert radian to degree

function radianToDegree(radian){
  var pi = Math.PI;
  var value = radian * (180 / pi);
  var str =  value.toFixed(2);
  return str;
}

let data = radianToDegree(10);
console.log(data);