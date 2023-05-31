//assignment problem 2
function evenOdd(text){
  if(text.length % 2 == 0){
    return "even";
  }else{
    return "odd";
  }
}

let str = evenOdd('chatgpt');
console.log(str);

/*
input:Phero/output:odd
input:Batch7/output:even
input:chatgpt/output:odd
*/