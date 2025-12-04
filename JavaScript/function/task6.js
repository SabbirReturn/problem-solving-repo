function calculateMoney(sellTickets,guardNumber){
    let ticketPrice = 120;
    let guardSalary = 500;
    let lunchCost = guardNumber * 50;
    
    let totalSellAmount = sellTickets * ticketPrice;
    let totalCost = guardSalary + lunchCost;
    let profit = totalSellAmount - totalCost;
    return profit;
}

let sellTickets = 1055;
let guardNumber = 8;
let profit = calculateMoney(sellTickets, guardNumber);
console.log(profit)