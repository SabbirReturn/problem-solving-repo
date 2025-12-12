// let numbers = [211,11,29,21,222,56,853,21,0,9]
// function getMaxNumber(numbers){
//     let maxNumber = Math.max(...numbers);
//     return maxNumber;
// }
// let numberList = getMaxNumber(numbers);
// console.log(numberList)




let numbers = [211,11,29,21,222,56,853,21,0,9]

function getMaxNumber(numbers){
    let maxNumber = 0;
    for(let number of numbers){
        // console.log(number)
        if( maxNumber< number){
            maxNumber = number
        }
    }
    return maxNumber
}

let numberList = getMaxNumber(numbers);
console.log(numberList);
