// function checkLongestWord(sen){
//     let words = sen.split(' ');
//     let longest = '';
//     for(let word of words){
//         if(word.length > words.length){
//             longest = word;
//         }
//     }
//     return longest;
// }
// let sentence = 'I am learning Programming to become a programmer';
// let checker = checkLongestWord(sentence);
// console.log(checker)
function checkLongestWord(sen){
    let words = sen.split(' ');
    let longest = '';
    for(let word of words){
        if(word.length > words.length){
            longest = word;
        }
    }
    return longest;
}
let sentence = 'I am learning Programming to become a programmer';
let checker = checkLongestWord(sentence);
console.log(checker)
