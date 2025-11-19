// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(str){
    let countZero = [];
    let alphabets = str.split("")
    for( let alphabet of alphabets){
        // console.log(alphabet)
        if(alphabet === '0'){
            countZero.push(alphabet)
        }
    }
    return countZero.length
}

let binaryString = count_zero('10101110000');
console.log(binaryString)