// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number
    }
    let length = numbers.length
    let avg = sum /length;
    return avg.toFixed(2);
}

let average = make_avg([1,2,3,4,5,7,7,8,9]);
console.log(average);