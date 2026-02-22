// Price 500 এর বেশি প্রথম product বের করো।
const products = [
 {name:"Shirt", price:400},
 {name:"Pant", price:700},
 {name:"Shoes", price:900}
];

let price = products.find(product=> product.price>500);
// console.log(price);


// ID = 3 user খুঁজে বের করো।
const users = [
 {id:1, name:"A"},
 {id:2, name:"B"},
 {id:3, name:"C"}
];

let checkId = users.filter(user=> user.id ===3);
console.log(checkId)