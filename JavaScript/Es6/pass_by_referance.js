let monik = {
    name: 'Monik',
    balance: 5000,
}
let roton = {
    name: 'Raton',
    balance: 5000,
}

function amount(person1,person2){
    person1.balance = 0
    person2.balance = person2.balance/2;
    let total = person1.balance + person2.balance;
    return total
}

let total = amount(monik, roton);
console.log(total)
console.log(monik,roton)