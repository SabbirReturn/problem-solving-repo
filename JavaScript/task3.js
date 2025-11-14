// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output:
// 'TomTimTinTik'


let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let word = '';
for(let number of numbers){
    word = word+ number;
}
console.log(word)