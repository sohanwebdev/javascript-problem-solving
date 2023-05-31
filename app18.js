//findout you grade marks

function myMarks(marks){
  if(marks > 100){
    return ('your mark is out of real marks')
  }else if(marks <= 100 && marks > 0){
    if(marks >= 91 && marks <= 100){
      return ('your gread is A+');
    }else if(marks >= 81 && marks <= 90){
      return ('your gread is A');
    }else if(marks >= 71 && marks <= 80){
      return ('your gread is A-');
    }else if(marks >= 61 && marks <= 70){
      return ('your gread is B');
    }else if(marks >= 51 && marks <= 60){
      return ('your gread is C');
    }else if(marks >= 41 && marks <= 50){
      return ('your gread is D');
    }else if(marks >= 40 && marks <= 33){
      return ('your gread is E');
    }else{
      return ('your gread is F');
    }
  }else{
    return ('your mark is negative');
  }
}

let marks = myMarks(60);
console.log(marks);