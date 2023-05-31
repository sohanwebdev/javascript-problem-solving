//assignment problem 3
function isLGSeven(number){
  let value = number;
  let divide = 7;
  if(value <= divide){
    let ans = value - divide;
    return ans;
  }else{
    let ans = value * 2;
    return ans;
  }
}

let datas = isLGSeven(6);
console.log(datas);

/*
input:6/output:-1
input:-15/output:-22
input:15/output:30
*/