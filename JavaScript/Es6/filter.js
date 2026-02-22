// Even number filter করো।
const numbers = [1,2,3,4,5,6];
let evenNumber = numbers.filter(num => num % 2===0)
// console.log(evenNumber);

// Active users বের করো।
const users = [
 {name:"A", active:true},
 {name:"B", active:false},
 {name:"C", active:true}
];

let activeUser = users.filter(user=> user.active)
console.log(activeUser)