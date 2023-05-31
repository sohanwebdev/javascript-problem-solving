//findout duplicate number and set this unique number in array
let number = [1,2,3,3,4,4,5,6,7,8,9,8,9,10];
let unique = number.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);

/*
item --> item in array
i --> index of item
ar --> array reference, (in this case "number")
*/