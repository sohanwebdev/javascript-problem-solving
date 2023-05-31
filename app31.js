//findout the last index file name(.js/.com/.png.js/.ps)

function isJavaScriptFile(file){
  if(file.endsWith('.js')){
    return true;
  }else{
    return false;
  }
}

var data = isJavaScriptFile(".js");
console.log(data);