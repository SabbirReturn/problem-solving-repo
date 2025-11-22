function countVowel(str, vowel) {
    
    let vowels = [];
    str = str.toLowerCase();
    console.log(str)
    for(let char of str){
        if(vowel.includes(char)){
            vowels.push(char)
        }
    }
    return vowels.length
}
let vowel = ['a','e','i','o','u'];
let count = countVowel('I am Sabbir Hasan', vowel);
console.log(count); // Output: 4
// function countVowel(str, vowel) {
    
//     let vowels = [];
//     str = str.toLowerCase();  // FIXED

//     for(let char of str){
//         if(vowel.includes(char)){
//             vowels.push(char)
//         }
//     }
//     return vowels.length;
// }

// let vowel = ['a','e','i','o','u'];
// let count = countVowel('I am Sabbir Hasan', vowel);
// console.log(count); 
