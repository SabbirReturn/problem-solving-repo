// Your task is to calculate the total budget required to buy electronics:
// laptop = 35000 tk
 // tablet = 15000 tk
 // mobile = 20000 tk

 let price = [
    {name:'Laptop', price: 35000},
    {name:'Tablet', price: 15000},
    {name:'Mobile', price: 20000}
 ]

 function totalPrice(products){
    let sum = 0;
    for(let product of products){
        let price = product['price']
        sum = sum + price
    }
    return sum;
 }

 let payBill = totalPrice(price);
 console.log('PayBil:', payBill)