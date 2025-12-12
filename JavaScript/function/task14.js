let numbers = [1, 2, 2, 3, 4, 4, 5];

function getUniqueNumber(numbers){
    let uniqueNumber = [];
    for(let number of numbers){
        if(uniqueNumber.includes(number)== false){
            uniqueNumber.push(number)
        }
    }
    return uniqueNumber;
}

let uniqueNumber = getUniqueNumber(numbers);
console.log(uniqueNumber);
