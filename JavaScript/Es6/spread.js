const arr1 = [1,2,3];
let arr2 = [...arr1];
arr2.push(6);
// console.log(arr1);
// console.log(arr2)

const a = [1,2];
const b = [3,4];
let newArray = [...a,...b];
console.log(newArray)