// সব number এর sum বের করো।
const numbers = [10,20,30,40];

let sum = numbers.reduce((total,num)=> total +num, 0);
// console.log(sum)



// সব product এর total price বের করো।
const products = [
 {name:"T-shirt", price:500},
 {name:"Pant", price:600},
 {name:"Shoes", price:900}
];

let totalPrice = products.reduce((total,product)=> total + product.price, 0);
console.log(totalPrice)