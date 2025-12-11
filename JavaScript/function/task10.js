function countVowel(sentence, vowels){
    let vowelsCount = []
    let str = sentence.toLowerCase();
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCount.push(char)
            // console.log(char)
        }
    }
    return vowelsCount;
}

let vowels = ['a','e','i','o','u'];
let count = countVowel('I am Sabbir Hasan', vowels);
console.log(count);
// function countVowel(sentence, vowels){
//     let vowelsCount = [];
//     let str = sentence.toLowerCase();

//     for(let char of str){
//         if(vowels.includes(char)){
//             vowelsCount.push(char);   // vowel যোগ করা হলো
//         }
//     }
//     return vowelsCount;
// }

// let vowels = ['a','e','i','o','u'];
// let count = countVowel('I am Sabbir Hasan', vowels);
// console.log(count);
