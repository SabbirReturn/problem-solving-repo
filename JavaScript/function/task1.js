function findLowestNumber(numbers){
    let lowestNumber = numbers[0];
    for(let number of numbers){
        if(lowestNumber>number){
            lowestNumber = number
        }
    }
    return lowestNumber
}

let numbers = findLowestNumber([167, 190, 120, 165, 137]);
console.log(numbers);