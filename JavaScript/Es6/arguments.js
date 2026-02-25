function add(...numbers){
    let total = numbers.reduce((sum,num)=> sum + num, 0);
    return total
}
console.log(add(12,11,13,14,5))