// একটা array এর সব number square করো।
const numbers = [2,4,6,8];
let square = numbers.map(x=>x*x)
// console.log(square);

// Users array থেকে শুধু names এর নতুন array বানাও।
const users = [
  {id:1, name:"Sabbir"},
  {id:2, name:"Rahim"},
  {id:3, name:"Karim"}
];

let names = users.map(user => user.name);
console.log(names)